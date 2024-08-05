'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { registerAction } from './action';

export default function Page() {
  const [isPending] = useTransition();
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(
      z.object({
        username: z.string().min(3).max(10),
        password: z.string().min(8).max(100),
      }),
    ),
  });

  console.log(form);

  const onSubmit = form.handleSubmit(async (values) => {
    await registerAction(values);
  });

  return (
    <>
      <h1>Create an account</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input {...form.register('username')} />
        <br />
        <label htmlFor="password">Password</label>
        <input {...form.register('password')} type="password" />
        <br />
        <button>{isPending ? 'Registering' : 'Register'}</button>
      </form>
    </>
  );
}
