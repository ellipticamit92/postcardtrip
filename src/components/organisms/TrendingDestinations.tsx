import { getTrendingDestination } from "@/lib/services/destination.service";

import HomeSections from "./HomeSections";

import { Badge } from "../ui/badge";
import { ArrowRight, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

const destinations = [
  {
    title: "Kerala",
    packages: 5,
    imageUrl: "/destination/card/kerala-destination-card-img.png",
    link: "/destination/kerala",
  },
  {
    title: "Rajasthan",
    packages: 4,
    imageUrl: "/destination/card/rajasthan-destination-card-img.png",
    link: "/destination/rajasthan",
  },
  {
    title: "Himachal",
    packages: 10,
    imageUrl: "/destination/card/himachal-destination-card-img.png",
    link: "/destination/himachal",
  },
  {
    title: "Dubai",
    packages: 13,
    imageUrl: "/destination/card/dubai-destination-card-img.png",
    link: "/destination/dubai",
  },
  {
    title: "Bali",
    packages: 223,
    imageUrl: "/destination/card/bali-destination-card-img.png",
    link: "/destination/bali",
  },
  {
    title: "Tamil Nadu",
    packages: 10,
    imageUrl: "/destination/card/tamil-nadu-destination-card-img.png",
    link: "/destination/tamil-nadu",
  },
];

type Destination = {
  did: number;
  name: string;
  country: string;
};

const TrendingDestinations = async () => {
  const trendingDestinations = [
    {
      id: 1,
      name: "Tropical Paradise Islands",
      country: "Maldives",
      image: "/destination/card/bali-destination-card-img.png",
      packages: 12,
      startingPrice: 1299,
      trending: true,
    },
    {
      id: 2,
      name: "Ancient Temple Valleys",
      country: "Cambodia",
      image: "/destination/card/dubai-destination-card-img.png",
      packages: 8,
      startingPrice: 899,
      trending: true,
    },
    {
      id: 3,
      name: "Volcanic Adventure Peaks",
      country: "Indonesia",
      image: "/destination/card/rajasthan-destination-card-img.png",
      packages: 15,
      startingPrice: 1599,
      trending: true,
    },
    {
      id: 4,
      name: "Cultural Market Towns",
      country: "Morocco",
      image: "/destination/card/himachal-destination-card-img.png",
      packages: 10,
      startingPrice: 1199,
      trending: false,
    },
  ];

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
        {trendingDestinations.map((destination) => (
          <Card
            key={destination.id}
            className="overflow-hidden group hover:shadow-strong transition-all duration-500 cursor-pointer py-0"
          >
            <div className="relative overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {destination.trending && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-white">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg mb-1">{destination.name}</h3>
                <p className="text-sm opacity-90">{destination.country}</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-muted-foreground">
                  {destination.packages} packages
                </span>
                <span className="font-bold text-ocean">
                  From ${destination.startingPrice}
                </span>
              </div>
              <Link href="/destinations">
                <Button variant="outline" size="sm" className="w-full group">
                  Explore Packages
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* <div className="-mx-2 flex flex-wrap justify-center">
        {trendingData?.data?.map((dest: Destination, idx: number) => (
          // <DestinationCard key={idx} {...dest} />
          <div key={dest.did}>{dest.did}</div>
        ))}
      </div> */}
    </HomeSections>
  );
};

export default TrendingDestinations;
