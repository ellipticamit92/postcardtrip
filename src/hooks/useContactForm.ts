"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// Validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(10, "Phone number must be valid"),
  destination: z.string().optional(),
  budget: z.string().optional(),
  travellers: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      destination: "",
      budget: "",
      travellers: "",
      message: "",
    },
    mode: "onBlur",
  });

  // Submission handler
  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("Response: JSON.stringify(data)", JSON.stringify(data));

      if (!response.ok) {
        const resText = await response.text();
        throw new Error(resText || "Failed to submit inquiry");
      }

      setSuccess("Your inquiry has been submitted successfully!");
      form.reset();
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    loading,
    success,
    error,
  };
}
