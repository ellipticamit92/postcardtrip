import { FC } from "react";
import { toIndianCurrency } from "@/lib/helper";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Destination } from "@/lib/types";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FeaturedDestinationCardProps {
  featuredDest: Destination;
}

const FeaturedDestinationCard: FC<FeaturedDestinationCardProps> = ({
  featuredDest,
}) => {
  return (
    <Card className="overflow-hidden shadow-strong hover:shadow-xl transition-all duration-500 group bg-gradient-to-br from-white to-gray-50/50 py-0">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative overflow-hidden max-h-[450px]">
          {featuredDest?.imageUrl && (
            <img
              src={featuredDest.imageUrl}
              alt={featuredDest.name}
              className="w-full h-96 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          )}

          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-to-r from-adventure to-adventure-dark text-white text-sm px-4 py-2 font-semibold">
              🔥 20% OFF
            </Badge>
          </div>
          <div className="absolute top-6 right-6">
            <Badge className="bg-white/90 text-adventure font-semibold">
              ⭐ {featuredDest.rating}/5
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="p-8  flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="text-ocean border-ocean">
              Best Seller
            </Badge>
            <Badge variant="outline" className="text-nature border-nature">
              Premium
            </Badge>
          </div>

          <h3 className="text-4xl font-bold mb-2 text-foreground leading-tight">
            {featuredDest.name}
            <span className="italic font-semibold text-xl">
              {" - "}
              {featuredDest.heading}
            </span>
          </h3>
          <p className="text-muted-foreground mb-3 leading-relaxed text-lg">
            {featuredDest.text}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-ocean/10">
                <Calendar className="w-5 h-5 text-ocean" />
              </div>
              <div>
                <div className="font-semibold text-sm">
                  {featuredDest.bestTimeToVisit}
                </div>
                <div className="text-xs text-muted-foreground">
                  Best time to visit
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-nature/10">
                <MapPin className="w-5 h-5 text-nature" />
              </div>
              <div>
                <div className="font-semibold text-sm">
                  {featuredDest.name}, {featuredDest.country}
                </div>
                <div className="text-xs text-muted-foreground">
                  Destinations
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {/* {featuredDest?.highlights?.split(",")?.map((highlight, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {highlight.trim()}
              </Badge>
            ))} */}
          </div>

          <div className="flex items-center justify-between pt-2 border-t">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-4xl font-bold text-ocean">
                  {toIndianCurrency(featuredDest.basePrice)}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  {toIndianCurrency(featuredDest.originalPrice)}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                per person • GST exclusive
              </span>
            </div>
            <Link href={`/destinations/${featuredDest?.name?.toLowerCase()}`}>
              <Button
                variant="pricing"
                size="lg"
                className="group bg-gradient-to-r from-ocean to-ocean-dark hover:from-ocean-dark hover:to-ocean shadow-lg hover:shadow-xl transition-all duration-300"
              >
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

export default FeaturedDestinationCard;
