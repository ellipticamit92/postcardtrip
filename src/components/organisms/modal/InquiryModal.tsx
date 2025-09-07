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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useState } from "react";

interface InquiryModalProps {
  isMobile?: boolean;
  className?: string;
}

const InquiryModal = ({ isMobile = false, className }: InquiryModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: "Inquiry Sent!",
    //   description:
    //     "We'll get back to you within 24 hours with a customized itinerary.",
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

  const budgetRanges = [
    { value: "budget", label: "$500 - $1,000" },
    { value: "mid", label: "$1,000 - $3,000" },
    { value: "luxury", label: "$3,000 - $5,000" },
    { value: "premium", label: "$5,000+" },
  ];

  const travelerOptions = [
    { value: "1", label: "1 Person" },
    { value: "2", label: "2 People" },
    { value: "3-4", label: "3-4 People" },
    { value: "5+", label: "5+ People" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className={className}>
          <Globe className="w-4 h-4 mr-2" />
          Plan Trip
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Plan Your Dream Trip</DialogTitle>
          <DialogDescription>
            Tell us about your travel preferences and we will create a
            customized itinerary for you.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div
            className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}
          >
            <div className="space-y-2">
              <Label htmlFor={`${isMobile ? "mobile-" : ""}name`}>
                Full Name
              </Label>
              <Input
                id={`${isMobile ? "mobile-" : ""}name`}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${isMobile ? "mobile-" : ""}email`}>Email</Label>
              <Input
                id={`${isMobile ? "mobile-" : ""}email`}
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div
            className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}
          >
            <div className="space-y-2">
              <Label htmlFor={`${isMobile ? "mobile-" : ""}phone`}>Phone</Label>
              <Input
                id={`${isMobile ? "mobile-" : ""}phone`}
                placeholder="Enter your phone"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${isMobile ? "mobile-" : ""}destination`}>
                Preferred Destination
              </Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select destination" />
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
          </div>

          <div
            className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}
          >
            <div className="space-y-2">
              <Label htmlFor={`${isMobile ? "mobile-" : ""}budget`}>
                Budget Range
              </Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((budget) => (
                    <SelectItem key={budget.value} value={budget.value}>
                      {budget.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${isMobile ? "mobile-" : ""}travelers`}>
                Number of Travelers
              </Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select travelers" />
                </SelectTrigger>
                <SelectContent>
                  {travelerOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${isMobile ? "mobile-" : ""}message`}>
              Special Requirements
            </Label>
            <Textarea
              id={`${isMobile ? "mobile-" : ""}message`}
              placeholder="Tell us about your preferences, interests, or special requirements..."
              className={isMobile ? "min-h-[60px]" : "min-h-[80px]"}
            />
          </div>

          <div
            className={`flex gap-3 ${isMobile ? "flex-col" : "justify-end"}`}
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
              Send Inquiry
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryModal;
