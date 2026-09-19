"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // This is a static export — wire this up to a form backend
    // (e.g. Formspree, Resend, or a serverless function) to receive submissions.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="rounded-lg border bg-secondary/40 p-8 text-center">
        <h3 className="text-lg font-semibold">Thank you!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Your message has been received. Our team will get back to you within
          one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" required placeholder="Jane Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(555) 010-2030" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required placeholder="jane@example.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="project">Project Type</Label>
        <Input id="project" name="project" placeholder="Kitchen countertops, bathroom vanity, flooring…" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project…"
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
