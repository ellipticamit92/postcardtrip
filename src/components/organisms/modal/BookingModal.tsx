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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface BookingModalProps {
  isMobile?: boolean;
  className?: string;
}

const BookingModal = ({ isMobile = false, className }: BookingModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: "Booking Request Sent!",
    //   description:
    //     "We'll contact you within 2 hours to confirm your booking details.",
    // });
    setIsOpen(false);
  };

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
      <DialogTrigger asChild>
        <Button variant="pricing" size="sm" className={className}>
          Book Now
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Book Your Adventure</DialogTitle>
          <DialogDescription>
            Enter your details to start your booking process. We will contact
            you shortly to finalize everything.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor={`${isMobile ? "booking-mobile-" : "booking-"}name`}>
              Full Name
            </Label>
            <Input
              id={`${isMobile ? "booking-mobile-" : "booking-"}name`}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor={`${isMobile ? "booking-mobile-" : "booking-"}email`}
            >
              Email Address
            </Label>
            <Input
              id={`${isMobile ? "booking-mobile-" : "booking-"}email`}
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor={`${isMobile ? "booking-mobile-" : "booking-"}phone`}
            >
              Phone Number
            </Label>
            <Input
              id={`${isMobile ? "booking-mobile-" : "booking-"}phone`}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor={`${
                isMobile ? "booking-mobile-" : "booking-"
              }destination`}
            >
              Destination
            </Label>
            <Select required>
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
          </div>

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
            >
              Proceed to Book
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
