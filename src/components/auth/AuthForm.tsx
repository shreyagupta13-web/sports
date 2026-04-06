"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const baseSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const registerSchema = baseSchema.extend({
  fullName: z.string().min(2),
});

type Mode = "login" | "register";

export function AuthForm({ mode }: { mode: Mode }) {
  const [status, setStatus] = useState<string | null>(null);
  const schema = mode === "register" ? registerSchema : baseSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (values: Record<string, string>) => {
    setStatus(null);
    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setStatus("Supabase not configured.");
      return;
    }

    try {
      if (mode === "register") {
        const { error } = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
          options: { data: { full_name: values.fullName } },
        });
        if (error) {
          throw error;
        }
        setStatus("Registration successful. Check your email.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        });
        if (error) {
          throw error;
        }
        setStatus("Signed in successfully.");
      }
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Auth failed.");
    }
  };

  const handleGoogle = async () => {
    setStatus(null);
    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setStatus("Supabase not configured.");
      return;
    }
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      setStatus(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-3xl border border-border bg-bg-secondary/70 p-6"
    >
      {mode === "register" ? (
        <div>
          <input
            {...register("fullName")}
            placeholder="Full name"
            className="w-full rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
          />
          {errors.fullName ? (
            <p className="mt-1 text-xs text-accent-orange">
              {String(errors.fullName.message)}
            </p>
          ) : null}
        </div>
      ) : null}
      <div>
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        />
        {errors.email ? (
          <p className="mt-1 text-xs text-accent-orange">
            {String(errors.email.message)}
          </p>
        ) : null}
      </div>
      <div>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        />
        {errors.password ? (
          <p className="mt-1 text-xs text-accent-orange">
            {String(errors.password.message)}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-accent-lime px-4 py-2 text-sm font-semibold text-black"
      >
        {mode === "register" ? "Create Account" : "Sign In"}
      </button>
      <button
        type="button"
        onClick={handleGoogle}
        className="w-full rounded-full border border-border px-4 py-2 text-sm text-text-secondary"
      >
        Continue with Google
      </button>
      {status ? (
        <p className="text-center text-xs text-text-secondary">{status}</p>
      ) : null}
    </form>
  );
}
