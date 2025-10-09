import { getTrendingDestination } from "@/lib/services/destination.service";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { toIndianCurrency } from "@/lib/helper";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import HomeSections from "../HomeSections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavigationButton } from "@/components/atoms/NavigationButton";

type Destination = {
  did: number;
  name: string;
  country: string;
  imageUrl: string;
  startingPrice: number;
  trending: boolean;
  packagesCount: number;
  heading: string;
  basePrice: number;
};

const TrendingDestinations = async () => {
  const trendingData = await getTrendingDestination();

  if (trendingData?.success === false) {
    return <div>No Data Found</div>;
  }

  return (
    <HomeSections
      icon={<TrendingUp className="w-4 h-4 mr-2" />}
      heading="Most Popular"
      title="Trending Destination"
      description="Discover the most sought-after destinations that our travelers can't stop talking about"
      variant="bg-ocean"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingData?.data?.map((dest: Destination) => (
          <Card
            key={dest.did}
            className="overflow-hidden group hover:shadow-strong transition-all duration-500 cursor-pointer py-0"
          >
            <div className="relative overflow-hidden">
              <div className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
                <Image src={dest.imageUrl} alt={dest.name} fill={true} />
              </div>

              <div className="absolute top-3 left-3">
                <Badge className="bg-secondary text-white">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg mb-1">{dest.heading}</h3>
                <p className="text-sm opacity-90">
                  {dest.name},{" "}
                  <span className="italic text-[11px]">{dest.country}</span>
                </p>
              </div>
            </div>
            <CardContent className="px-6 pt-2 pb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-muted-foreground">
                  {dest.packagesCount} packages
                </span>
                <span className="font-bold text-ocean">
                  From {toIndianCurrency(dest.basePrice)}
                </span>
              </div>
              <NavigationButton
                href={`/destinations/${dest.name.toLowerCase()}`}
                variant="outline"
                size="sm"
                classes="w-full group"
                eventName="package_click"
                gtmValues={{
                  destination_id: dest.did,
                  destination_name: dest.name,
                }}
              >
                Explore Packages
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </NavigationButton>
            </CardContent>
          </Card>
        ))}
      </div>
    </HomeSections>
  );
};

export default TrendingDestinations;
