'use client';

import { logoutAction } from '~/server/lib/auth';

export default function LogoutButton() {
  return <button onClick={() => logoutAction(undefined)}>Sign out</button>;
}
