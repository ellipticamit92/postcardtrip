import {
  ArrowRight,
  Coffee,
  Heart,
  HeartHandshake,
  Mountain,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import HomeSections from "./HomeSections";

const tourTypes = [
  {
    id: 1,
    title: "Romantic Getaways",
    description:
      "Perfect escapes for couples seeking intimate moments and romantic experiences",
    icon: HeartHandshake,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    packages: 25,
    startingPrice: 1299,
  },
  {
    id: 2,
    title: "Adventure Tours",
    description:
      "Thrilling expeditions for adrenaline seekers and outdoor enthusiasts",
    icon: Mountain,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    packages: 35,
    startingPrice: 899,
  },
  {
    id: 3,
    title: "Leisure & Relaxation",
    description:
      "Peaceful retreats for those seeking tranquility and rejuvenation",
    icon: Coffee,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    packages: 28,
    startingPrice: 999,
  },
  {
    id: 4,
    title: "Honeymoon Specials",
    description:
      "Unforgettable destinations perfect for celebrating new beginnings",
    icon: Heart,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    packages: 18,
    startingPrice: 1599,
  },
];

const ToursType = () => {
  return (
    <HomeSections
      icon={<Heart className="w-4 h-4 mr-2" />}
      heading="Tour Categories"
      title=" Popular Tour Types"
      description="Choose from our carefully curated tour categories designed for every type of traveler"
      variant="bg-adventure"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tourTypes.map((tourType) => {
          const IconComponent = tourType.icon;
          return (
            <Card
              key={tourType.id}
              className="overflow-hidden group hover:shadow-strong transition-all duration-500 cursor-pointer hover:-translate-y-2 py-0 pb-0"
            >
              <div
                className={`${tourType.bgColor} p-8 text-center relative overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${tourType.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-linear-to-br ${tourType.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {tourType.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tourType.description}
                </p>
              </div>
              <CardContent className="px-6 py-2 bg-card">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">
                    {tourType.packages} packages available
                  </span>
                  <span className="font-bold text-ocean">
                    From ${tourType.startingPrice.toLocaleString()}
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
