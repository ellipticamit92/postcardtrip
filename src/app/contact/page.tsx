import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Headphones,
  Star,
  Users,
  Award,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Calendar,
  ArrowRight,
  Facebook,
  Instagram,
  Clock,
  Shield,
  Globe,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our travel experts",
    value: "+91-9821071644",
    action: "Call Now",
    available: "24/7 Support",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your travel inquiries",
    value: "info@postcardtrip.in",
    action: "Send Email",
    available: "Response within 2 hours",
    color: "from-blue-500 to-blue-600",
  },
  // {
  //   icon: MessageCircle,
  //   title: "Live Chat",
  //   description: "Chat with our support team",
  //   value: "Available on website",
  //   action: "Start Chat",
  //   available: "Mon-Fri 9AM-6PM",
  //   color: "from-purple-500 to-purple-600",
  // },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come to our office location",
    value: "4th Floor, Plot no-5, Westend Marg, Saket, Delhi",
    action: "Get Directions",
    available: "Mon-Fri 9AM-6PM",
    color: "from-orange-500 to-orange-600",
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
  { day: "Holidays", hours: "Emergency Support Only" },
];

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2-3 months in advance for international trips and 4-6 weeks for domestic travel to ensure the best availability and prices.",
  },
  {
    question: "What is included in your tour packages?",
    answer:
      "Our packages typically include accommodation, transportation, guided tours, and some meals. Specific inclusions vary by package and are clearly listed in the tour details.",
  },
  {
    question: "Do you offer travel insurance?",
    answer:
      "Yes, we highly recommend travel insurance and can help you select the right coverage for your trip. We partner with leading insurance providers to offer comprehensive protection.",
  },
  {
    question: "Can I customize my itinerary?",
    answer:
      "Absolutely! We specialize in creating custom travel experiences. Our experts will work with you to design a personalized itinerary that matches your interests and budget.",
  },
];

const Contact = () => {
  return (
    <main className="container mx-auto px-6 py-8">
      <section className="text-center mb-16">
        <Badge className="mb-4 bg-primary text-white">
          <Headphones className="w-4 h-4 mr-2" />
          Contact Support
        </Badge>
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Ready to plan your next adventure? Our travel experts are here to help
          you create unforgettable memories. Reach out to us through any of the
          methods below.
        </p>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { icon: Star, value: "4.9/5", label: "Customer Rating" },
            { icon: Users, value: "50,000+", label: "Happy Travelers" },
            { icon: Award, value: "15+", label: "Years Experience" },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the method that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-strong transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {method.description}
                  </p>
                  <p className="font-medium text-foreground mb-2">
                    {method.value}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {method.available}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Map */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Our Location
              </CardTitle>
              <CardDescription>
                Visit us at our headquarters in Adventure City
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-hidden rounded-lg h-64 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                {/* Simulated Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full bg-grid-pattern"></div>
                  </div>

                  {/* Streets */}
                  <div className="absolute top-1/3 left-0 right-0 h-2 bg-slate-300 dark:bg-slate-600"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-slate-300 dark:bg-slate-600"></div>

                  {/* Buildings */}
                  <div className="absolute top-8 left-8 w-12 h-16 bg-slate-400 dark:bg-slate-500 rounded-sm"></div>
                  <div className="absolute top-12 right-16 w-10 h-12 bg-slate-400 dark:bg-slate-500 rounded-sm"></div>
                  <div className="absolute bottom-16 left-20 w-14 h-10 bg-slate-400 dark:bg-slate-500 rounded-sm"></div>

                  {/* Our Location Pin */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                        Travel Adventure HQ
                      </div>
                    </div>
                  </div>

                  {/* Compass */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center border-2 border-slate-200 dark:border-slate-600">
                    <div className="text-xs font-bold text-slate-600 dark:text-slate-300">
                      N
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Details */}
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">
                      Fourth Floor, Plot no-5, Westend Marg, Saidulajab, Saiyad
                      Ul Ajaib Village,
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Saket, Delhi 110030
                    </p>
                    <p className="text-sm text-muted-foreground">
                      New Delhi, India
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-auto p-3">
                    <div className="text-center">
                      <MapPin className="w-4 h-4 mx-auto mb-1" />
                      <div className="text-xs font-medium">Get Directions</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-3">
                    <div className="text-center">
                      <Phone className="w-4 h-4 mx-auto mb-1" />
                      <div className="text-xs font-medium">Call Office</div>
                    </div>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Hours */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <span className="font-medium text-foreground">
                        {schedule.day}
                      </span>
                      <span className="text-muted-foreground">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Emergency support available 24/7 for travelers
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Follow Us
                </CardTitle>
                <CardDescription>
                  Stay connected for travel inspiration and updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: Facebook,
                      name: "Facebook",
                      followers: "25K",
                      color: "bg-blue-600",
                    },
                    {
                      icon: Instagram,
                      name: "Instagram",
                      followers: "18K",
                      color: "bg-pink-600",
                    },
                  ].map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-auto p-4 flex flex-col gap-2"
                      >
                        <div
                          className={`w-8 h-8 ${social.color} rounded-full flex items-center justify-center`}
                        >
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-center">
                          <div className="font-medium text-sm">
                            {social.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {social.followers} followers
                          </div>
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary text-white">
            <MessageCircle className="w-4 h-4 mr-2" />
            FAQ
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Quick answers to common travel questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-strong transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">?</span>
                  </div>
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let our travel experts create a personalized itinerary just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="primary"
              animation="primarySolid"
              className="min-w-[200px]"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
            <Button
              variant="primaryOutline"
              animation="primaryOutline"
              size="lg"
              className="min-w-[200px]"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Browse Tours
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
