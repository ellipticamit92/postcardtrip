"use client";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const ContactForm = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <h1>Contact form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              First Name *
            </label>
            {/* <Input
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      required
                    /> */}
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Last Name *
            </label>
            {/* <Input
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      required
                    /> */}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Email Address *
          </label>
          {/* <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  /> */}
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Phone Number
          </label>
          {/* <Input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  /> */}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Travel Type
            </label>
            {/* <Select
                      value={formData.travelType}
                      onValueChange={(value) =>
                        handleInputChange("travelType", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select travel type" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border shadow-lg z-50">
                        <SelectItem value="adventure">
                          Adventure Tours
                        </SelectItem>
                        <SelectItem value="cultural">
                          Cultural Heritage
                        </SelectItem>
                        <SelectItem value="beach">Beach Holidays</SelectItem>
                        <SelectItem value="nature">
                          Nature & Wildlife
                        </SelectItem>
                        <SelectItem value="honeymoon">
                          Honeymoon Packages
                        </SelectItem>
                        <SelectItem value="custom">Custom Travel</SelectItem>
                      </SelectContent>
                    </Select> */}
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Preferred Contact
            </label>
            {/* <Select
                      value={formData.preferredContact}
                      onValueChange={(value) =>
                        handleInputChange("preferredContact", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-background border shadow-lg z-50">
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      </SelectContent>
                    </Select> */}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Subject *
          </label>
          {/* <Input
                    placeholder="Travel inquiry for..."
                    value={formData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    required
                  /> */}
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Message *
          </label>
          {/* <Textarea
                    placeholder="Tell us about your travel plans, preferences, budget, and any specific requirements..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    required
                  /> */}
        </div>

        <Button type="submit" className="w-full" size="lg">
          <Send className="w-5 h-5 mr-2" />
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
