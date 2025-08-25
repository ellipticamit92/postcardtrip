import { ArrowRight, Mail, MapIcon, PhoneCall } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Input } from "../ui/input";

const ContactSection = () => {
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
            itinerary. Share your travel dreams with us and let's make them come
            true.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-ocean/10 rounded-full flex items-center justify-center">
                <PhoneCall className="w-6 h-6 text-ocean" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-adventure/10 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-adventure" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email Us</h3>
                <p className="text-muted-foreground">
                  hello@traveladventure.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-nature/10 rounded-full flex items-center justify-center">
                <MapIcon className="w-6 h-6 text-nature" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Visit Us</h3>
                <p className="text-muted-foreground">
                  123 Travel Street, Adventure City
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="shadow-strong p-6 gap-3">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Connect with us
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Name
              </label>
              <Input placeholder="John" />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Email
              </label>
              <Input type="email" placeholder="john@example.com" />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Phone Number
              </label>
              <Input type="tel" placeholder="+91 (123) 456-7890" />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Destination Interest
              </label>
              <Input placeholder="Where would you like to go?" />
            </div>

            <Button variant="pricing" size="lg" className="w-full">
              Send Message
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
