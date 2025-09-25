import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Globe, MapPin } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description:
        "We live and breathe travel, sharing our genuine love for exploration with every client.",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description:
        "Your safety and peace of mind are our top priorities in every journey we plan.",
    },
    {
      icon: Users,
      title: "Personal Service",
      description:
        "Every traveler is unique, and we craft personalized experiences just for you.",
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description:
        "Decades of experience across all continents, bringing you insider knowledge.",
    },
  ];

  // const stats = [
  //   { number: "25+", label: "Years of Experience" },
  //   { number: "50+", label: "Countries Covered" },
  //   { number: "10,000+", label: "Happy Travelers" },
  //   { number: "98%", label: "Customer Satisfaction" },
  // ];

  // const team = [
  //   {
  //     name: "Sarah Chen",
  //     role: "Founder & CEO",
  //     specialty: "Adventure Travel",
  //     experience: "15 years",
  //     description:
  //       "Former expedition leader turned travel entrepreneur, specializing in off-the-beaten-path adventures.",
  //   },
  //   {
  //     name: "Marcus Rodriguez",
  //     role: "Head of Operations",
  //     specialty: "Cultural Tours",
  //     experience: "12 years",
  //     description:
  //       "Cultural anthropologist with deep expertise in sustainable and authentic travel experiences.",
  //   },
  //   {
  //     name: "Elena Petrov",
  //     role: "Senior Travel Designer",
  //     specialty: "Luxury Travel",
  //     experience: "10 years",
  //     description:
  //       "Former luxury hotel executive who brings insider access to the world's finest destinations.",
  //   },
  // ];

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-ocean/90 to-adventure/90 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
        <div className="relative container text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Crafting Dreams Since 2020
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold">About Our Journey</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            From humble beginnings to becoming your trusted travel companion, we
            have been turning wanderlust into unforgettable memories for over
            two decades.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                <MapPin className="h-4 w-4 mr-2" />
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Born from a Dream to Explore
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  It all started in 1999 when our founder, Sarah Chen, returned
                  from a life-changing solo backpacking trip across Southeast
                  Asia. She realized that the most meaningful travel experiences
                  came from connecting with local cultures, not just checking
                  off tourist attractions.
                </p>
                <p>
                  What began as a small travel consultancy in living room has
                  grown into a full-service travel company that has helped over
                  10,000 travelers discover the world in authentic, meaningful
                  ways.
                </p>
                <p>
                  Today, we are not just a travel company— we are your gateway
                  to transformation through travel, creating journeys that
                  change how you see the world and yourself.
                </p>
              </div>
            </div>
            <div className="relative h-full ">
              <div className="h-full rounded-2xl bg-gradient-to-br from-ocean to-adventure p-4 text-white flex items-center justify-center">
                <div className="h-full flex flex-col justify-center space-y-6">
                  <Globe className="h-16 w-16 mx-auto" />
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                    <p className="opacity-90">
                      To make transformative travel accessible, sustainable, and
                      deeply meaningful for every adventurer who trusts us with
                      their dreams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              <Heart className="h-4 w-4 mr-2" />
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide every decision we make and every journey
              we craft for our travelers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-soft hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="border-0 bg-gradient-to-r from-ocean to-adventure text-white">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Let our passionate team of travel experts help you create
                memories that will last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="customize"
                  animation="primaryOutline"
                  className="text-primary"
                >
                  Plan Your Trip
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                >
                  Contact Our Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
