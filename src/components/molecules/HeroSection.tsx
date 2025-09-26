import { Badge } from "../ui/badge";
import { Users, ArrowRight, Globe, Award, Shield } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import InquiryModal from "../organisms/modal/InquiryModal";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <img
        src="/hero.jpeg"
        alt="Travel Adventure"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto">
          <div className="max-w-4xl text-white">
            <Badge className="mb-6 bg-adventure text-white text-sm px-4 py-2">
              Discover Amazing Destinations
            </Badge>
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              Your Next Adventure
              <span className="block text-transparent bg-gradient-to-r from-ocean to-adventure bg-clip-text">
                Starts Here
              </span>
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl leading-relaxed">
              Discover breathtaking destinations, experience authentic cultures,
              and create memories that last a lifetime with our expertly crafted
              travel packages.
            </p>
            <div className="flex flex-wrap gap-8 text-sm mb-10">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6" />
                <span>10+ Destinations</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6" />
                <span>Award-Winning Service</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6" />
                <span>100% Secure Booking</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                <span>2,000+ Happy Travelers</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/destinations">
                <Button
                  variant="pricing"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Explore Destinations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <InquiryModal>
                <Button
                  variant="customize"
                  animation="primaryOutline"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Plan Custom Trip
                </Button>
              </InquiryModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
