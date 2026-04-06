"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  type: z.string().default("general"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-3xl border border-border bg-bg-secondary/70 p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input
            {...register("name")}
            placeholder="Name"
            className="w-full rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-accent-orange">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div>
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-accent-orange">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          {...register("phone")}
          placeholder="Phone"
          className="w-full rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        />
        <input
          {...register("subject")}
          placeholder="Subject"
          className="w-full rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        />
      </div>
      <select
        {...register("type")}
        className="w-full rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
      >
        <option value="general">General</option>
        <option value="membership">Membership</option>
        <option value="sponsorship">Sponsorship</option>
        <option value="media">Media</option>
      </select>
      <div>
        <textarea
          {...register("message")}
          placeholder="Message"
          rows={4}
          className="w-full rounded-2xl border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-accent-orange">
            {errors.message.message}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-accent-lime px-4 py-2 text-sm font-semibold text-black"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Submit Enquiry"}
      </button>
      {status === "sent" ? (
        <p className="text-center text-xs text-accent-lime">
          Thanks! We will get back to you shortly.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-center text-xs text-accent-orange">
          Something went wrong. Please try again.
        </p>
      ) : null}
    </form>
  );
}
