"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTransition } from "react";
import { loginAction } from "./action";

export default function Page() {
  const [isPending] = useTransition();
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(
      z.object({
        username: z.string().min(3).max(10),
        password: z.string().min(8).max(100),
      }),
    ),
  });

  const onSubmit = form.handleSubmit(async (values) => {
    await loginAction(values);
  });

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input {...form.register("username")} />
        <br />
        <label htmlFor="password">Password</label>
        <input {...form.register("password")} type="password" />
        <br />
        <button>{isPending ? "Logging In" : "Login"}</button>
      </form>
    </>
  );
}
