import { FC } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { slugifyPackageName, toIndianCurrency } from "@/lib/helper";
import {
  ArrowRight,
  Calendar,
  MapPin,
  MapPinned,
  Star,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { Package } from "@/lib/types";
import Link from "next/link";

interface FeaturedPackageCardProps {
  featuredPackage: Package;
  country: string;
  name: string;
}

const FeaturedPackageCard: FC<FeaturedPackageCardProps> = ({
  featuredPackage,
  country,
  name,
}) => {
  return (
    <Card className="overflow-hidden shadow-strong hover:shadow-xl transition-all duration-500 group py-0">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative overflow-hidden">
          <img
            src={featuredPackage.imageUrl}
            alt={featuredPackage.name}
            className="w-full h-96 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-6 left-6">
            <Badge className="bg-adventure text-white text-sm px-3 py-1">
              20% OFF
            </Badge>
          </div>
        </div>
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            {featuredPackage.name}
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {featuredPackage.text}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              {featuredPackage.day && (
                <Calendar className="w-5 h-5 text-ocean" />
              )}
              <span className="text-sm">
                {featuredPackage.day} Days / {featuredPackage.night} Nights
              </span>
            </div>
            <div className="flex items-center gap-2">
              {featuredPackage.rating && (
                <Star className="w-5 h-5 fill-adventure text-adventure" />
              )}
              <span className="text-sm">{featuredPackage.rating}/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              {featuredPackage?.cities?.length > 0 && (
                <MapPin className="w-5 h-5 text-nature" />
              )}
              <span className="text-sm">
                {featuredPackage?.cities?.map((city) => city.name).join(" • ")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {country && <MapPinned className="w-5 h-5 text-adventure" />}
              <span className="text-sm">
                {name}, {country}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {featuredPackage?.highlights?.map((highlight, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {highlight.text}
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
                  {toIndianCurrency(featuredPackage.basePrice)}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  {toIndianCurrency(featuredPackage.originalPrice)}
                </span>
              </div>
            </div>
            <Link
              href={`/packages/${slugifyPackageName(featuredPackage.name)}`}
            >
              <Button variant="pricing" size="lg" className="group">
                View Details
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FeaturedPackageCard;
