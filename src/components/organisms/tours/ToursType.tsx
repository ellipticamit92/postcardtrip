import {
  ArrowRight,
  Coffee,
  Heart,
  HeartHandshake,
  Mountain,
} from "lucide-react";
import Link from "next/link";
import { getHomeTours } from "@/lib/services/tours.service";
import { toIndianCurrency } from "@/lib/helper";
import HomeSections from "../HomeSections";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Tour = {
  tid: number;
  text: string;
  description: string;
  icon: string;
  basePrice: string;
  packagesCount: number;
};

const tourTypes = [
  {
    icon: HeartHandshake,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: Coffee,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Mountain,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Heart,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
  },
];

const ToursType = async () => {
  const toursData = await getHomeTours();

  if (toursData?.success === false) {
    return <div>No Data Found</div>;
  }

  return (
    <HomeSections
      icon={<Heart className="w-4 h-4 mr-2" />}
      heading="Tour Categories"
      title=" Popular Tour Types"
      description="Choose from our carefully curated tour categories designed for every type of traveler"
      variant="bg-adventure"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {toursData?.data?.map((tour: Tour, index: number) => {
          const IconComponent = tourTypes[index].icon;
          return (
            <Card
              key={tour.tid}
              className="overflow-hidden group hover:shadow-strong transition-all duration-500 cursor-pointer hover:-translate-y-2 py-0 pb-0"
            >
              <div
                className={`${tourTypes[index].bgColor} p-8 text-center relative overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${tourTypes[index].color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-linear-to-br ${tourTypes[index].color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {tour.text}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tour.description}
                </p>
              </div>
              <CardContent className="px-4 py-2 pt-0 bg-card">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground w-2/5">
                    {tour.packagesCount} packages available
                  </span>
                  <span className="font-bold text-ocean w-3/5 flex items-end justify-end">
                    From &nbsp;
                    {toIndianCurrency(Number(tour?.basePrice))}
                  </span>
                </div>
                <Link href="/destinations">
                  <Button variant="outline" size="sm" className="w-full group">
                    Explore Tours
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Link href="/destinations">
          <Button variant="pricing" size="lg">
            Browse All Tour Types
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </HomeSections>
  );
};

export default ToursType;
