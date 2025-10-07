import { ArrowRight, Calendar, Heart, Star } from "lucide-react";
import Link from "next/link";
import { getPopularPackages } from "@/lib/services/packages.service";
import { addRandomInRange, slugify, toIndianCurrency } from "@/lib/helper";
import Image from "next/image";
import { Package } from "@/lib/types";
import HomeSections from "../HomeSections";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RichText from "@/components/atoms/RichText";
import { Button } from "@/components/ui/button";
import { NavigationButton } from "@/components/atoms/NavigationButton";

const PopularPackages = async () => {
  const popularPackageData = await getPopularPackages();

  if (popularPackageData?.success === false) {
    return <div>No Data Found</div>;
  }

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
        {popularPackageData?.data?.map((pkg: Package) => (
          <Card
            key={pkg.pid}
            className="overflow-hidden group hover:shadow-strong transition-all duration-500 py-0 pb-0"
          >
            <div className="relative overflow-hidden">
              {pkg.imageUrl && (
                <div className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
                  <Image src={pkg.imageUrl} alt={pkg.name} fill={true} />
                </div>
              )}

              <div className="absolute top-4 right-4">
                <Badge className="bg-adventure text-white">Popular</Badge>
              </div>
            </div>
            <CardContent className="px-6 py-0 pb-3">
              <h3 className="font-bold text-xl mb-3 text-foreground">
                {pkg.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                <RichText content={pkg.text} />
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    {pkg.day}D - {pkg.night}N
                  </span>
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
                      {toIndianCurrency(pkg?.threePrice)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {toIndianCurrency(addRandomInRange(pkg.threePrice))}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    package starting price
                  </span>
                </div>

                <NavigationButton
                  href={`/packages/${pkg.slug}`}
                  variant="secondary"
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
      <div className="text-center mt-12">
        <Link href="/packages">
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
