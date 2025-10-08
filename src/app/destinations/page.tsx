import PagesHero from "@/components/molecules/PagesHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getRandomInt, toIndianCurrency } from "@/lib/helper";
import { getAll } from "@/lib/services/destination.service";
import { ArrowRight, MapPin, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import NotFound from "../not-found";
import { Destination } from "@/lib/types";
import FeaturedDestinationCard from "@/components/organisms/destinations/FeaturedDestinationCard";

export default async function DestinationPage() {
  const destData = await getAll();

  if (destData?.success === false) {
    return <NotFound />;
  }
  const data = destData?.data;

  const featuredDestination = data.find((dest: Destination) => !!dest.featured);
  const otherDestination = data.filter((dest: Destination) => !dest.featured);

  return (
    <>
      <PagesHero
        badgeText="Destination"
        title="Discover Amazing Destinations"
        description="Explore our carefully curated travel packages designed to create unforgettable memories and extraordinary experiences."
      />

      <div className="container mx-auto px-4 py-8">
        <section className="py-16 bg-gradient-to-r from-ocean/5 via-nature/5 to-adventure/5">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-ocean">6</div>
              <div className="text-muted-foreground">Amazing States</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-adventure">1000+</div>
              <div className="text-muted-foreground">Happy Travelers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-nature">4.9</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-ocean">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </section>
        {featuredDestination && (
          <section className="my-16 ">
            <div className="text-center mb-8 space-y-1">
              <h2 className="text-4xl font-bold text-foreground">
                Featured Destination
              </h2>
              <h5 className="text-foreground">
                Experience the beauty of God&apos;s Own Country - Kerala&apos;s
                backwaters and hills
              </h5>
            </div>

            <FeaturedDestinationCard featuredDest={featuredDestination} />
          </section>
        )}

        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold text-foreground">
              All Destinations
            </h2>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherDestination.map((dest: Destination) => (
              <Card
                key={dest.did}
                className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group py-0"
              >
                <div className="relative overflow-hidden">
                  {dest?.imageUrl && (
                    <div className="w-full h-64 aspect-[16/9] object-cover group-hover:scale-110 transition-transform duration-500">
                      <Image
                        src={dest.imageUrl}
                        alt={dest.name}
                        fill={true}
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="absolute top-4 right-4">
                    <Badge className="bg-adventure text-white">
                      {getRandomInt(8, 15)}% OFF
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-adventure font-semibold">
                      ⭐ {dest.rating}/5
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 py-0 pb-4">
                  <h3 className="font-bold text-xl text-foreground">
                    {dest.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2 leading-relaxed">
                    {dest.text}
                  </p>

                  <div className="space-y-2 mb-3 flex justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-adventure text-adventure" />
                      <span className="text-sm text-muted-foreground">
                        {dest.rating}/5 • Excellent
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {dest.name}, {dest.country}
                      </span>
                    </div>
                  </div>

                  {/* <div className="flex flex-wrap gap-1 ">
                    {dest.highlights &&
                      dest.highlights
                        .split(",")
                        .slice(0, 4)
                        .map((highlight, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {highlight}
                          </Badge>
                        ))}
                  </div> */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-ocean">
                          {toIndianCurrency(dest.basePrice)}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {toIndianCurrency(dest.originalPrice)}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        per person
                      </span>
                    </div>
                    <Link href={`/destinations/${dest.name.toLowerCase()}`}>
                      <Button variant="ocean" size="sm" className="group">
                        View Details
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
            {/* 
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group py-0"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 aspect-[16/9] object-cover group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill={true}
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute top-4 right-4">
                    <Badge className="bg-adventure text-white">
                      {pkg.discount} OFF
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-nature text-white">
                      {pkg.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-foreground">
                    {pkg.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-adventure text-adventure" />
                      <span className="text-sm text-muted-foreground">
                        {pkg.rating}/5 • Excellent
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {pkg.destinations.join(" • ")}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {pkg.highlights.slice(0, 3).map((highlight, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-ocean">
                          {toIndianCurrency(pkg.price)}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {toIndianCurrency(pkg.originalPrice)}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        per person
                      </span>
                    </div>
                    <Link href={`/packages/${pkg.id}`}>
                      <Button variant="ocean" size="sm" className="group">
                        View Packages
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))} */}
          </div>
        </section>
        <section className="py-20 bg-gradient-to-br from-ocean/10 via-nature/5 to-adventure/10 rounded-3xl mt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-ocean/5 to-adventure/5" />
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-2xl">✈️</span>
              <span className="font-semibold text-ocean">
                Custom Travel Planning
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-foreground leading-tight">
              Looking for a
              <br />
              <span className="text-transparent bg-gradient-to-r from-ocean to-adventure bg-clip-text">
                Custom Indian Experience?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our local travel experts create a personalized itinerary just
              for you. Whether it&apos;s a family trip, honeymoon, or group tour
              - we&apos;ll craft the perfect Indian adventure tailored to your
              preferences and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                variant="pricing"
                size="lg"
                className="group bg-gradient-to-r from-ocean to-ocean-dark hover:from-ocean-dark hover:to-ocean shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4"
              >
                <span className="text-lg">Plan Custom Trip</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-ocean text-ocean hover:bg-ocean hover:text-white font-semibold px-8 py-4 text-lg"
              >
                🎯 Contact Travel Expert
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
              <div className="space-y-2">
                <div className="w-16 h-16 bg-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-semibold text-foreground">
                  Personalized Itineraries
                </h4>
                <p className="text-sm text-muted-foreground">
                  Crafted by local experts who know India best
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 bg-nature/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-semibold text-foreground">
                  GST Inclusive Pricing
                </h4>
                <p className="text-sm text-muted-foreground">
                  Transparent rates with no hidden costs
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 bg-adventure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕐</span>
                </div>
                <h4 className="font-semibold text-foreground">24/7 Support</h4>
                <p className="text-sm text-muted-foreground">
                  Local assistance throughout your journey
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
