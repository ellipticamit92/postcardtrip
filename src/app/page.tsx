import HeroSection from "@/components/molecules/HeroSection";
import ContactSection from "@/components/organisms/ContactSection";
import TrendingDestinations from "@/components/organisms/destinations/TrendingDestinations";
import PopularPackages from "@/components/organisms/packages/PopularPackages";
import ToursType from "@/components/organisms/tours/ToursType";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getRecentReviews } from "@/lib/services/reviews.service";
import ReviewsSlider from "@/components/organisms/reviews/ReviewsSlider";
import BookingModal from "@/components/organisms/modal/BookingModal";

export default async function Home() {
  const reviews = await getRecentReviews();
  const { data } = reviews;
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className="container mx-auto">
        <TrendingDestinations />
        <PopularPackages />
        <ToursType />
        <ContactSection />
        <ReviewsSlider reviews={data} />
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
                <Button
                  variant="pricing"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Browse All Destinations
                </Button>
              </Link>
              <BookingModal>
                <Button
                  variant="customize"
                  animation="primaryOutline"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Get Custom Quote
                </Button>
              </BookingModal>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
