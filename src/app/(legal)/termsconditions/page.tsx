import BackToHome from "@/components/atoms/BackToHome";
import BackToTop from "@/components/atoms/BackToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Clock, FileText, Shield } from "lucide-react";
import Link from "next/link";

const TermsAndCondition = () => {
  return (
    <main className="container mx-auto px-6 py-12">
      <BackToHome />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-gradient-to-br from-ocean to-adventure rounded-full flex items-center justify-center mx-auto mb-6">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Terms & Conditions
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Please read these terms and conditions carefully before using our
          services.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Last updated: December 2024
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Agreement */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-ocean" />
              1. Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              By accessing and using Postcardtrip services, you accept and agree
              to be bound by the terms and provision of this agreement. If you
              do not agree to abide by the above, please do not use this
              service.
            </p>
            <p className="text-muted-foreground">
              These terms apply to all visitors, users, and others who access or
              use our service.
            </p>
          </CardContent>
        </Card>

        {/* Services */}
        <Card>
          <CardHeader>
            <CardTitle>2. Our Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              TravelAdventure provides travel booking and consultation services
              including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Travel package bookings and reservations</li>
              <li>Custom trip planning and itinerary creation</li>
              <li>Travel consultation and advisory services</li>
              <li>Group tour organization and management</li>
              <li>Travel insurance recommendations</li>
            </ul>
          </CardContent>
        </Card>

        {/* Booking Terms */}
        <Card>
          <CardHeader>
            <CardTitle>3. Booking Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                3.1 Reservations
              </h4>
              <p className="text-muted-foreground">
                All bookings are subject to availability and confirmation.
                Prices are subject to change until booking is confirmed and
                payment is received.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                3.2 Payment
              </h4>
              <p className="text-muted-foreground">
                Full payment or deposit may be required at the time of booking.
                Payment terms vary by package and will be clearly stated during
                the booking process.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                3.3 Travel Documents
              </h4>
              <p className="text-muted-foreground">
                You are responsible for ensuring you have valid travel
                documents, including passports and visas, for your destination.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card>
          <CardHeader>
            <CardTitle>4. User Responsibilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Provide accurate and complete information during booking</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect other travelers and local customs</li>
              <li>Maintain adequate travel insurance</li>
              <li>Follow safety guidelines and instructions</li>
            </ul>
          </CardContent>
        </Card>

        {/* Limitations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              5. Limitations of Liability
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              TravelAdventure acts as an intermediary between you and travel
              service providers. We are not liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Acts of nature, weather conditions, or natural disasters</li>
              <li>Political unrest, terrorism, or government actions</li>
              <li>Airline delays, cancellations, or schedule changes</li>
              <li>Hotel overbooking or service quality issues</li>
              <li>Personal injury, illness, or loss of personal property</li>
            </ul>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card>
          <CardHeader>
            <CardTitle>6. Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              All content on our website, including text, graphics, logos,
              images, and software, is owned by TravelAdventure and protected by
              copyright and trademark laws.
            </p>
            <p className="text-muted-foreground">
              You may not reproduce, distribute, or create derivative works
              without our express written permission.
            </p>
          </CardContent>
        </Card>

        {/* Privacy */}
        <Card>
          <CardHeader>
            <CardTitle>7. Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Your privacy is important to us. Please review our{" "}
              <Link href="/privacy" className="text-ocean hover:underline">
                Privacy Policy
              </Link>
              to understand how we collect, use, and protect your information.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-ocean" />
              8. Changes to Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting on our website. Your
              continued use of our services constitutes acceptance of the
              modified terms.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>9. Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              If you have any questions about these Terms & Conditions, please
              contact us:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-foreground font-semibold">Postcardtrip</p>
              <p className="text-muted-foreground">
                Email: legal@postcardtrip.in
              </p>
              <p className="text-muted-foreground">Phone: +91-9821071644</p>
              <p className="text-muted-foreground">
                Fourth Floor, Plot no-5, Westend Marg, Saidulajab, Saiyad Ul
                Ajaib Village, Saket, New Delhi 110030
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Back to Top */}
      <BackToTop />
    </main>
  );
};

export default TermsAndCondition;
