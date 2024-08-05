'use server'; // don't forget to add this!

import { hash } from '@node-rs/argon2';
import { generateIdFromEntropySize } from 'lucia';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { lucia } from '~/auth';
import { action } from '~/lib/safe-action';
import { db } from '~/server/db';
import { userTable } from '~/server/db/schema';

// This schema is used to validate input from client.
const schema = z.object({
  username: z.string().min(3).max(10),
  password: z.string().min(8).max(100),
});

export const registerAction = action(schema, async ({ username, password }) => {
  // username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
  // keep in mind some database (e.g. mysql) are case insensitive
  if (
    typeof username !== 'string' ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-z0-9_-]+$/.test(username)
  ) {
    return {
      error: 'Invalid username',
    };
  }

  if (
    typeof password !== 'string' ||
    password.length < 6 ||
    password.length > 255
  ) {
    return {
      error: 'Invalid password',
    };
  }

  const passwordHash = await hash(password, {
    // recommended minimum parameters
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  const userId = generateIdFromEntropySize(10); // 16 characters long

  // TODO: check if username is already used
  await db.insert(userTable).values({
    id: userId,
    username,
    password: passwordHash,
  });

  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect('/');
});
