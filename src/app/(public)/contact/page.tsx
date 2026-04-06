"use client";

import { useState } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Modal } from "@/components/ui/Modal";

export default function ContactPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-6 py-16">
      <SectionHeading
        title="Contact & Membership"
        subtitle="Send an enquiry or apply to join SG Sports Club."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4 rounded-3xl border border-border bg-bg-secondary/70 p-6">
          <h3 className="font-display text-lg uppercase tracking-wide">
            Club Info
          </h3>
          <p className="text-sm text-text-secondary">
            SG Sports Arena, Marine Drive, Mumbai
          </p>
          <p className="text-sm text-text-secondary">+91 98765 43210</p>
          <p className="text-sm text-text-secondary">hello@sgsports.club</p>
          <div className="mt-6 h-48 rounded-2xl border border-border bg-bg-elevated" />
        </div>
        <ContactForm />
      </div>
      <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6 text-center">
        <h3 className="font-display text-xl uppercase tracking-wide">
          Want to join SG Sports?
        </h3>
        <p className="mt-3 text-sm text-text-secondary">
          Apply, attend trials, get selected, and welcome to the SG arena.
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-4 rounded-full bg-accent-lime px-5 py-2 text-xs font-semibold text-black"
        >
          Apply for Membership
        </button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h3 className="font-display text-lg uppercase tracking-wide">
          Membership Application
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          Our admin team will reach out within 48 hours.
        </p>
        <div className="mt-4 grid gap-3">
          <input
            placeholder="Full name"
            className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
          />
          <input
            placeholder="Email"
            className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
          />
          <input
            placeholder="Sport"
            className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary"
          />
        </div>
        <button
          type="button"
          className="mt-4 rounded-full bg-accent-lime px-4 py-2 text-xs font-semibold text-black"
          onClick={() => setOpen(false)}
        >
          Submit Application
        </button>
      </Modal>
    </div>
  );
}
