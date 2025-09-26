"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";

interface BookingModalProps {
  isMobile?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const BookingModal = ({ isMobile = false, children }: BookingModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { form, onSubmit, loading, success, error } = useContactForm();

  const destinations = [
    { value: "kerala", label: "Kerala" },
    { value: "himachal", label: "Himachal Pradesh" },
    { value: "dubai", label: "Dubai" },
    { value: "rajasthan", label: "Rajasthan" },
    { value: "goa", label: "Goa" },
    { value: "kashmir", label: "Kashmir" },
    { value: "other", label: "Other" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Your Adventure</DialogTitle>
          <DialogDescription>
            Enter your details to start your booking process. We will contact
            you shortly to finalize everything.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 py-4"
          >
            {/* Full Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Destination */}
            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {destinations.map((dest) => (
                          <SelectItem key={dest.value} value={dest.value}>
                            {dest.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Buttons */}
            <div
              className={`flex gap-3 pt-4 ${
                isMobile ? "flex-col" : "justify-end"
              }`}
            >
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className={isMobile ? "w-full" : ""}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="pricing"
                className={isMobile ? "w-full" : ""}
                disabled={loading}
              >
                {loading ? "Sending..." : "Proceed to Book"}
              </Button>
            </div>

            {/* Success / Error */}
            {success && <p className="text-green-600 text-sm">{success}</p>}
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
