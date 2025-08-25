import { ArrowRight, Calendar, Heart, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import HomeSections from "./HomeSections";

const popularPackages = [
  {
    id: "tropical-paradise",
    title: "Tropical Paradise Adventure",
    description: "5-day ultimate beach and adventure experience",
    duration: "5 Days",
    price: 1899,
    originalPrice: 2399,
    rating: 4.9,
    image: "/hero.jpeg",
    popular: true,
  },
  {
    id: "cultural-heritage",
    title: "Cultural Heritage Discovery",
    description: "Ancient traditions and historic temples journey",
    duration: "6 Days",
    price: 1699,
    originalPrice: 2199,
    rating: 4.7,
    image: "/hero.jpeg",
    popular: true,
  },
  {
    id: "volcano-adventure",
    title: "Volcano Adventure Trek",
    description: "Thrilling volcanic landscapes exploration",
    duration: "7 Days",
    price: 2299,
    originalPrice: 2899,
    rating: 4.8,
    image: "/hero.jpeg",
    popular: true,
  },
];

const PopularPackages = () => {
  return (
    <HomeSections
      icon={<Heart className="w-4 h-4 mr-2" />}
      heading="Customer Favorites"
      title="Popular Packages"
      description="Our most booked travel experiences, loved by thousands of
            adventurers worldwide"
      variant="bg-secondary"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularPackages.map((pkg) => (
          <Card
            key={pkg.id}
            className="overflow-hidden group hover:shadow-strong transition-all duration-500 py-0 pb-0"
          >
            <div className="relative overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-adventure text-white">Popular</Badge>
              </div>
            </div>
            <CardContent className="px-6 py-2">
              <h3 className="font-bold text-xl mb-3 text-foreground">
                {pkg.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {pkg.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-adventure text-adventure" />
                  <span className="text-sm font-medium">{pkg.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-ocean">
                      ${pkg.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${pkg.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    per person
                  </span>
                </div>
                <Link href={`/package/${pkg.id}`}>
                  <Button variant="ocean" size="sm" className="group">
                    Book Now
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/destinations">
          <Button variant="pricing" size="lg">
            View All Packages
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </HomeSections>
  );
};

export default PopularPackages;
