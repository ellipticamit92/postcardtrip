"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  Camera,
  Car,
  CheckCircle,
  MapPin,
  Plane,
  Star,
  ThumbsUp,
  Utensils,
} from "lucide-react";
import { FC, useState } from "react";
import Image from "next/image";
import { toIndianCurrency } from "@/lib/helper";
import { InclusionExclusion } from "./InclusionExclusion";
import {
  HighlightsProps,
  ItineraryType,
  Package,
  PackageSummary,
  TextProps,
  UserReview,
} from "@/lib/types";
import { Itineraries } from "./Itineraries";
import Link from "next/link";
import { NavigationButton } from "@/components/atoms/NavigationButton";

interface PackageDetailsProps {
  inclusions: TextProps[];
  exclusions: TextProps[];
  itineraries: ItineraryType[];
  highlights: HighlightsProps[];
  packageDetails: Package;
  pkgReviews: UserReview[];
  similarPkgData: PackageSummary[];
}

const PackageDetails: FC<PackageDetailsProps> = ({
  inclusions,
  exclusions,
  itineraries,
  highlights,
  packageDetails,
  pkgReviews,
  similarPkgData,
}) => {
  const [selectedHotelStar, setSelectedHotelStar] = useState(4);
  const { day, night, threePrice, fourPrice, fivePrice } = packageDetails;

  const hotelPricing = {
    3: { price: threePrice },
    4: { price: fourPrice },
    5: { price: fivePrice },
  };

  const currentPricing =
    hotelPricing[selectedHotelStar as keyof typeof hotelPricing];

  const samplePackages = [
    {
      title: "Tropical Paradise Escape",
      duration: "7 Days",
      price: "$2,299",
      image: "/hero.jpg",
      rating: 4.8,
      destinations: ["Maldives", "Sri Lanka"],
    },
    {
      title: "Adventure Seekers Special",
      duration: "10 Days",
      price: "$3,499",
      image: "/hero.jpg",
      rating: 4.9,
      destinations: ["Nepal", "Tibet"],
    },
    {
      title: "Cultural Heritage Tour",
      duration: "6 Days",
      price: "$1,899",
      image: "/hero.jpg",
      rating: 4.7,
      destinations: ["Japan", "South Korea"],
    },
  ];

  const customerReviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      date: "March 2024",
      review:
        "Absolutely incredible experience! The snorkeling was breathtaking and the volcanic hike was challenging but so rewarding. Our guide was knowledgeable and the hotels exceeded expectations. Perfect blend of adventure and relaxation.",
      images: ["/hero.jpg", "/hero.jpg"],
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: 5,
      date: "February 2024",
      review:
        "This trip was everything we hoped for and more! The cultural experiences were authentic and meaningful. The temple visits were spiritual and the local markets were vibrant. Highly recommend for couples seeking adventure.",
      images: ["/hero.jpg", "/hero.jpg"],
      verified: true,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Sydney, Australia",
      rating: 4,
      date: "January 2024",
      review:
        "Amazing trip with stunning scenery and great organization. The only minor issue was some weather delays, but the team handled it professionally. The spa treatments were divine and the food was exceptional.",
      images: ["/hero.jpg"],
      verified: true,
    },
    {
      id: 4,
      name: "David Kim",
      location: "Seoul, South Korea",
      rating: 5,
      date: "December 2023",
      review:
        "Perfect honeymoon trip! Every detail was thoughtfully planned. The sunset catamaran cruise was magical and the private transfers made everything seamless. The hotels were luxury at its finest.",
      images: ["/hero.jpg", "/hero.jpg"],
      verified: true,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      location: "London, UK",
      rating: 4,
      date: "November 2023",
      review:
        "Great value for money and well-organized itinerary. The mix of activities kept us engaged throughout. The snorkeling equipment was top-quality and the cultural workshops were educational and fun.",
      images: ["/hero.jpg"],
      verified: true,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          {/* Overview Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Package Overview
            </h2>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-ocean gap-1">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-ocean/10">
                      <Calendar className="w-6 h-6 text-ocean" />
                    </div>
                    <CardTitle className="text-lg">Duration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-ocean">{day} Days</p>
                  <p className="text-sm text-muted-foreground">
                    {night} Nights Stay
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-adventure gap-1">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-adventure/10">
                      <MapPin className="w-6 h-6 text-adventure" />
                    </div>
                    <CardTitle className="text-lg">Destinations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-adventure">
                    3 Locations
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {/* Beach • Mountain • Cultural Sites */}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Experience Summary */}
            {/* <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <ThumbsUp className="w-5 h-5 text-ocean" />
                  What Makes This Special
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-nature mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      Perfect blend of adventure and relaxation with snorkeling,
                      volcano hiking, and spa treatments
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-nature mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      Authentic cultural experiences including temple visits and
                      traditional craft workshops
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-nature mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      Premium accommodations from beachfront resorts to
                      eco-lodges and heritage hotels
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-nature mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      Expert guides and 24/7 support ensuring a seamless travel
                      experience
                    </p>
                  </div>
                </div>
              </div>

              {highlights && highlights.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-adventure" />
                    Activity Highlights
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-ocean/10 text-center">
                      <div className="text-2xl mb-1">🏊‍♀️</div>
                      <p className="text-xs font-medium">Beach Snorkeling</p>
                    </div>
                    <div className="p-3 rounded-lg bg-adventure/10 text-center">
                      <div className="text-2xl mb-1">🌋</div>
                      <p className="text-xs font-medium">Volcano Hiking</p>
                    </div>
                    <div className="p-3 rounded-lg bg-nature/10 text-center">
                      <div className="text-2xl mb-1">🏛️</div>
                      <p className="text-xs font-medium">Temple Tours</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50 text-center">
                      <div className="text-2xl mb-1">🛶</div>
                      <p className="text-xs font-medium">Water Sports</p>
                    </div>
                  </div>
                </div>
              )}
            </div> */}
          </section>
          {/* Daily Itinerary */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              {itineraries?.length} - Day Detailed Itinerary
            </h2>
            <Itineraries data={itineraries} />
          </section>

          {/* Inclusions & Exclusions */}
          <section className="grid md:grid-cols-2 gap-8">
            <InclusionExclusion isInclusion={false} exclusions={exclusions} />
            <InclusionExclusion isInclusion={true} inclusions={inclusions} />
          </section>

          {/* Customer Reviews */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                What Our Travelers Say
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-adventure text-adventure"
                    />
                  ))}
                </div>
                <span className="text-xl font-semibold text-foreground">
                  4.9/5
                </span>
                <span className="text-muted-foreground">
                  • Based on {customerReviews.length} reviews
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pkgReviews.map((review) => (
                <Card
                  key={review.username}
                  className="shadow-soft hover:shadow-medium transition-all duration-300 py-0"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-semibold">
                          {review.username
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-foreground">
                              {review.username}
                            </h4>

                            <Badge
                              variant="secondary"
                              className="text-xs flex items-center gap-1"
                            >
                              <CheckCircle className="w-3 h-3" />
                              Verified
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {review.destination.name},{" "}
                            {review.destination.country}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "fill-adventure text-adventure"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {review.month}, {review.year}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {review.review}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                variant="primaryOutline"
                animation="primaryOutline"
                size="lg"
                className="!font-bold"
              >
                View All Reviews
              </Button>
            </div>
          </section>

          {/* Other Sample Packages */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Other Amazing Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {similarPkgData?.map((pkg: PackageSummary) => (
                <Card
                  key={pkg.pid}
                  className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group py-0"
                >
                  <div className="relative overflow-hidden">
                    {pkg.imageUrl && (
                      <div className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                        <Image src={pkg.imageUrl} alt={pkg.name} fill={true} />
                      </div>
                    )}

                    <div className="absolute top-2 right-2">
                      <Badge className="bg-adventure text-white">
                        {pkg.day}D / {pkg.night}N
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{pkg.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 fill-adventure text-adventure" />
                      <span className="text-sm text-muted-foreground">
                        {pkg.rating}/5
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {pkg.destination.name}, {pkg.destination.country}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-ocean">
                        {toIndianCurrency(pkg.threePrice)}
                      </span>
                      <NavigationButton
                        href={`/packages/${pkg.slug}`}
                        variant="ocean"
                        size="sm"
                        classes="group"
                        eventName="package_click"
                        gtmValues={{
                          package_id: pkg.pid,
                          package_name: pkg.name,
                          package_days: pkg.day,
                          package_nights: pkg.night,
                          destination_name: pkg?.destination?.name || "",
                        }}
                      >
                        View Details
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </NavigationButton>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar - Pricing Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <Card className="shadow-strong bg-gradient-card backdrop-blur-xs border-0">
              <CardHeader className="text-center">
                {/* Hotel Star Selection */}
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-3 text-foreground">
                    Select Hotel Category
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[3, 4, 5].map((stars) => (
                      <button
                        key={stars}
                        onClick={() => setSelectedHotelStar(stars)}
                        className={`p-3 rounded-lg border transition-all duration-200 ${
                          selectedHotelStar === stars
                            ? "bg-ocean text-white border-ocean shadow-soft"
                            : "bg-muted/50 border-border hover:bg-muted/80"
                        }`}
                      >
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex">
                            {Array.from({ length: stars }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                          <span className="text-xs font-medium">
                            {stars} Star
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                  {toIndianCurrency(currentPricing.price)}
                </div>
                <p className="text-sm text-muted-foreground">per person</p>
                <Badge className="bg-success text-white mx-auto">
                  Early Bird 15% Off
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Original Price:</span>
                    <span className="line-through text-muted-foreground">
                      {toIndianCurrency(currentPricing.price)}$
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Your Price:</span>
                    <span className="text-ocean">
                      {toIndianCurrency(currentPricing.price)}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Taxes & Fees:</span>
                    <span>Included</span>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-3">
                  <Button variant="pricing" className="w-full" size="lg">
                    <Plane className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                  <Button
                    variant="primaryOutline"
                    animation="primaryOutline"
                    className="w-full"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Get It Customized
                  </Button>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <Car className="w-4 h-4 text-muted-foreground" />
                    <span>Private transfers included</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Utensils className="w-4 h-4 text-muted-foreground" />
                    <span>All meals covered</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-muted-foreground" />
                    <span>Expert local guides</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PackageDetails;
