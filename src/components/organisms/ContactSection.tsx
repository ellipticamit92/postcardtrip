"use client";
import { ArrowRight, Mail, MapIcon, PhoneCall } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { useContactForm } from "@/hooks/useContactForm";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "../ui/form";

const ContactSection = () => {
  const { form, onSubmit, loading, success, error } = useContactForm();

  return (
    <section className="py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Badge className="mb-4 bg-nature text-white">
            <PhoneCall className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Plan Your Dream Trip
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Our travel experts are here to help you create the perfect
            itinerary. Share your travel dreams with us and let&apos;s make them
            come true.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-ocean/10 rounded-full flex items-center justify-center">
                <PhoneCall className="w-6 h-6 text-ocean" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Call Us</h3>
                <p className="text-muted-foreground">+91-982 107 1644</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-adventure/10 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-adventure" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email Us</h3>
                <p className="text-muted-foreground">info@postcardtrip.in</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-nature/10 rounded-full flex items-center justify-center">
                <MapIcon className="w-6 h-6 text-nature" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Visit Us</h3>
                <p className="text-muted-foreground">
                  Fourth Floor, Plot no-5, Westend Marg, Saidulajab, <br />
                  Saiyad Ul Ajaib Village, Saket, New Delhi, Delhi 110030
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Form */}
        <Card className="shadow-strong p-6 gap-3">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Connect with us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
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
                        <Input
                          type="tel"
                          placeholder="+91 (123) 456-7890"
                          {...field}
                        />
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
                      <FormLabel>Destination Interest</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Where would you like to go?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit button */}
                <Button
                  variant="pricing"
                  size="lg"
                  className="w-full"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>

                {/* Success / Error messages */}
                {success && <p className="text-green-600 text-sm">{success}</p>}
                {error && <p className="text-red-600 text-sm">{error}</p>}
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
