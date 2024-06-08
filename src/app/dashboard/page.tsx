import { redirect } from "next/navigation";
import { validateRequest } from "~/server/lib/auth";
import LogoutButton from "./_components/logout-button";

export default async function Page() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }
  return (
    <div>
      <h1>Hi, {user.username}!</h1>
      <LogoutButton />
    </div>
  );
}
