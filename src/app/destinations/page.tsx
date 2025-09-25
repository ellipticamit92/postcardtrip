import PagesHero from "@/components/molecules/PagesHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toIndianCurrency } from "@/lib/helper";
import { getAll } from "@/lib/services/destination.service";
import { ArrowRight, Hash, MapPin, Star, Users2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import NotFound from "../not-found";

const enhancedPackages = [
  {
    id: "tropical-paradise",
    title: "God's Own Country",
    name: "Kerala",
    description:
      "Experience the ultimate blend of relaxation and adventure in this stunning 5-day journey through pristine beaches, volcanic landscapes, and rich cultural heritage.",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    price: 1899,
    originalPrice: 2399,
    discount: "20%",
    rating: 4.9,
    image: "/destination/card/kerala-destination-card-img.png",
    destinations: ["Tropical Islands", "Paradise Bay"],
    highlights: [
      "Beach Snorkeling",
      "Volcano Hiking",
      "Cultural Tours",
      "Luxury Resorts",
      "House Boats",
    ],
    categories: ["beach", "adventure", "luxury"],
    featured: true,
    country: "India",
    packagesCount: 5,
    traveller: 2000,
  },
  {
    id: "mountain-explorer",
    title: "Mountain Explorer Expedition",
    description:
      "Discover breathtaking mountain landscapes, ancient trails, and authentic local cultures in this thrilling adventure package.",
    duration: "7 Days / 6 Nights",
    durationDays: 7,
    price: 2299,
    originalPrice: 2899,
    discount: "18%",
    rating: 4.8,
    image: "/hero.jpg",
    destinations: ["Mountain Ranges", "Alpine Villages"],
    highlights: [
      "Summit Hiking",
      "Cable Car Rides",
      "Local Cuisine",
      "Mountain Lodges",
    ],
    categories: ["mountain", "adventure"],
  },
  {
    id: "cultural-heritage",
    title: "Cultural Heritage Discovery",
    description:
      "Immerse yourself in ancient traditions, historic temples, and vibrant local markets in this enriching cultural journey.",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    price: 1699,
    originalPrice: 2199,
    discount: "22%",
    rating: 4.7,
    image: "/hero.jpg",
    destinations: ["Historic Cities", "Temple Complexes"],
    highlights: [
      "Ancient Temples",
      "Craft Workshops",
      "Traditional Shows",
      "Heritage Hotels",
    ],
    categories: ["cultural", "budget"],
  },
  {
    id: "beach-paradise",
    title: "Ultimate Beach Paradise",
    description:
      "Relax and unwind in pristine beaches with crystal-clear waters, luxury resorts, and unforgettable water activities.",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    price: 1399,
    originalPrice: 1799,
    discount: "22%",
    rating: 4.6,
    image: "/hero.jpg",
    destinations: ["Private Islands", "Coral Reefs"],
    highlights: [
      "Snorkeling",
      "Sunset Cruises",
      "Spa Treatments",
      "Beachfront Dining",
    ],
    categories: ["beach", "luxury"],
  },
  {
    id: "adventure-seeker",
    title: "Adventure Seeker Special",
    description:
      "For thrill-seekers who crave excitement, featuring extreme sports, challenging hikes, and adrenaline-pumping activities.",
    duration: "8 Days / 7 Nights",
    durationDays: 8,
    price: 2899,
    originalPrice: 3499,
    discount: "17%",
    rating: 4.9,
    image: "/hero.jpg",
    destinations: ["Adventure Parks", "National Reserves"],
    highlights: [
      "Rock Climbing",
      "White Water Rafting",
      "Jungle Trekking",
      "Adventure Camps",
    ],
    categories: ["adventure", "mountain"],
  },
  {
    id: "local-immersion",
    title: "Local Culture Immersion",
    description:
      "Live like a local and experience authentic traditions, home-stays, and genuine cultural exchanges.",
    duration: "9 Days / 8 Nights",
    durationDays: 9,
    price: 2199,
    originalPrice: 2799,
    discount: "21%",
    rating: 4.8,
    image: "/hero.jpg",
    destinations: ["Rural Villages", "Traditional Towns"],
    highlights: [
      "Home Stays",
      "Cooking Classes",
      "Local Markets",
      "Artisan Workshops",
    ],
    categories: ["cultural", "budget"],
  },
];

export default async function DestinationPage() {
  const destData = await getAll();

  if (destData?.success === false) {
    return <NotFound />;
  }

  const featuredPackage = enhancedPackages.find((pkg) => pkg.featured);
  const packages = enhancedPackages.filter((pkg) => !pkg.featured);

  return (
    <>
      <PagesHero
        badgeText="Destination"
        title="Discover Amazing Destinations"
        description="Explore our carefully curated travel packages designed to create unforgettable memories and extraordinary experiences."
      />
      <div className="container mx-auto px-4 py-8">
        {featuredPackage && (
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-foreground text-center">
              Featured Destination
            </h2>
            <Card className="overflow-hidden shadow-strong hover:shadow-xl transition-all duration-500 group py-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <div>
                    <img
                      src={featuredPackage.image}
                      alt={featuredPackage.title}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="absolute top-6 left-6">
                    <Badge className="bg-adventure text-white text-sm px-3 py-1">
                      {featuredPackage.discount} OFF
                    </Badge>
                  </div>
                </div>
                <div className="p-8 py-6 flex flex-col justify-center">
                  <h3 className="text-4xl font-bold text-foreground">
                    {featuredPackage.name}
                  </h3>
                  <h6 className="italic text-lg font-light mb-2">
                    {featuredPackage.title}
                  </h6>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPackage.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Users2 className="w-5 h-5 text-ocean" />
                      <span className="text-sm">
                        {featuredPackage.traveller}+ Happy Travllers
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-adventure text-adventure" />
                      <span className="text-sm">
                        {featuredPackage.rating}/5 Rating
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-nature" />
                      <span className="text-sm">
                        {featuredPackage.name}, {featuredPackage.country}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Hash className="w-5 h-5 text-adventure" />
                      <span className="text-sm">
                        {featuredPackage.packagesCount}+ Packages
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPackage.highlights.map((highlight, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground">
                        package starting from
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-ocean">
                          {toIndianCurrency(featuredPackage.price)}
                        </span>
                        <span className="text-lg text-muted-foreground line-through">
                          {toIndianCurrency(featuredPackage.originalPrice)}
                        </span>
                      </div>
                    </div>
                    <Link href={`/packages/${featuredPackage.id}`}>
                      <Button variant="pricing" size="lg" className="group">
                        View Packages
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold text-foreground">
              All Destinations
            </h2>
            <div className="text-sm text-muted-foreground">
              {packages?.length} package
              {packages?.length !== 1 ? "s" : ""} found
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
