import { FC } from "react";
import { Package } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { slugifyPackageName, toIndianCurrency } from "@/lib/helper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PacakgeCardProps {
  packageData: Package;
}

const PackageCard: FC<PacakgeCardProps> = ({ packageData }) => {
  return (
    <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group py-0 gap-3">
      <div className="relative overflow-hidden">
        <div className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
          <Image
            src={packageData.imageUrl}
            alt={packageData.name}
            fill={true}
          />
        </div>

        <div className="absolute top-4 right-4">
          <Badge className="bg-adventure text-white">20% OFF</Badge>
        </div>
        <div className="absolute top-4 left-4">
          <Badge className="bg-nature text-white">
            {packageData.day} Days / {packageData.night} Nights
          </Badge>
        </div>
      </div>
      <CardContent className="p-6 py-0 pb-4">
        <h3 className="font-bold text-xl mb-3 text-foreground">
          {packageData.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {packageData.text}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            {packageData.rating && (
              <Star className="w-4 h-4 fill-adventure text-adventure" />
            )}
            <span className="text-sm text-muted-foreground">
              {packageData.rating}/5 • Excellent
            </span>
          </div>
          <div className="flex items-center gap-2">
            {packageData?.cities?.length > 0 && (
              <MapPin className="w-4 h-4 text-muted-foreground" />
            )}
            <span className="text-sm text-muted-foreground">
              {packageData?.cities.map((city) => city.name).join(" • ")}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {packageData?.highlights?.map((highlight, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {highlight.text}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-ocean">
                {toIndianCurrency(packageData.basePrice)}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                {toIndianCurrency(packageData.originalPrice)}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              package starts from
            </span>
          </div>
          <Link href={`/packages/${slugifyPackageName(packageData.name)}`}>
            <Button variant="ocean" size="sm" className="group">
              View Details
              <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PackageCard;
