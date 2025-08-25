import HeroSection from "@/components/molecules/HeroSection";
import ContactSection from "@/components/organisms/ContactSection";
import PopularPackages from "@/components/organisms/PopularPackages";
import Reviews from "@/components/organisms/Reviews";
import ToursType from "@/components/organisms/ToursType";
import TrendingDestinations from "@/components/organisms/TrendingDestinations";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className="container mx-auto">
        <TrendingDestinations />
        <PopularPackages />
        <ToursType />
        <ContactSection />
        <Reviews />
      </div>

      <section className="py-20">
        <div className="bg-gradient-card rounded-3xl p-12 shadow-strong text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don&apos;t wait for the perfect moment. Create it. Book your dream
            destination today and start making memories that will last a
            lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/destinations">
              <Button variant="pricing" size="lg" className="text-lg px-8 py-4">
                Browse All Destinations
              </Button>
            </Link>
            <Button
              variant="customize"
              animation="primaryOutline"
              size="lg"
              className="text-lg px-8 py-4"
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
