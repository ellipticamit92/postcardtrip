"use client";

import {
  ArrowRight,
  Clock,
  Crown,
  Heart,
  MapPin,
  Mountain,
  Palmtree,
  Phone,
  Plane,
  SortAsc,
  Star,
} from "lucide-react";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package } from "@/lib/types";
import { getRandomInt, toIndianCurrency } from "@/lib/helper";

interface AllPackagesProps {
  data: Package[];
  categories: Record<string, number>;
  category?: string;
}

const AllPackages: FC<AllPackagesProps> = ({
  data: packages,
  categories,
  category,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(category ?? "all");
  const [sortBy, setSortBy] = useState("popularity");

  const getCount = (name: string) => {
    const counts = Object.entries(categories)
      .filter(([key]) => key.toLowerCase().includes(name))
      .reduce((acc, [, count]) => acc + count, 0);

    return counts;
  };

  const tourCategories = [
    {
      id: "all",
      title: "All Packages",
      icon: Plane,
      color: "from-ocean to-adventure",
      count: packages?.length ?? 0,
    },
    {
      id: "romantic",
      title: "Romantic",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      count: getCount("romantic"),
      description: "Perfect getaways for couples",
    },
    {
      id: "adventure",
      title: "Adventure",
      icon: Mountain,
      color: "from-orange-500 to-red-500",
      count: getCount("adventure"),
      description: "Thrilling experiences for adrenaline seekers",
    },
    {
      id: "leisure",
      title: "Leisure",
      icon: Palmtree,
      color: "from-green-500 to-emerald-500",
      count: getCount("leisure"),
      description: "Relaxing vacations for peace seekers",
    },
    {
      id: "honeymoon",
      title: "Honeymoon",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      count: getCount("honeymoon"),
      description: "Exclusive packages for newlyweds",
    },
  ];

  const filteredPackages =
    selectedCategory === "all"
      ? packages
      : packages.filter((pkg) =>
          pkg.category?.toLocaleLowerCase()?.includes(selectedCategory)
        );

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.threePrice - b.threePrice;
      case "price-high":
        return b.threePrice - a.threePrice;
      case "rating":
        return b.rating - a.rating;
      case "duration":
        return a.day - b.day;
      default:
        return b.featured ? 1 : -1;
    }
  });

  return (
    <>
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              <TabsList className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-5 h-auto p-2 bg-white shadow-soft">
                {tourCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="flex flex-row gap-3 p-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-ocean data-[state=active]:to-adventure data-[state=active]:text-white"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{category.title}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {/* Sorting Controls */}
              <div className="flex flex-col items-end justify-end gap-2">
                <Badge variant="outline" className="text-xs">
                  {sortedPackages.length} packages found
                </Badge>
                <div className="flex items-center gap-2">
                  <SortAsc className="w-4 h-4 text-muted-foreground" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded-lg px-3 py-2 text-sm bg-background"
                  >
                    <option value="popularity">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="duration">Duration</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Packages Grid */}
            {tourCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0"
              >
                {category.id !== "all" && (
                  <div className="text-center mb-12">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-2">
                      {category.title} Packages
                    </h2>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortedPackages.map((pkg) => (
                    <Card
                      key={pkg.pid}
                      className="overflow-hidden group hover:shadow-strong transition-all duration-500 hover:-translate-y-2 py-0 gap-0"
                    >
                      <div className="relative">
                        <div className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
                          <Image
                            fill={true}
                            src={pkg.imageUrl}
                            alt={pkg.name}
                          />
                        </div>

                        <div className="absolute top-3 left-3 z-10">
                          <Badge className="bg-nature text-white">
                            {pkg.day} Days / {pkg.night} Nights
                          </Badge>
                        </div>

                        {pkg?.popular && (
                          <div className="absolute bottom-3 right-3 z-10">
                            <Badge className="bg-adventure text-white">
                              Popular
                            </Badge>
                          </div>
                        )}
                      </div>

                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex gap-2 flex-wrap ">
                            {pkg?.category?.split(",")?.map((item, index) => (
                              <Badge
                                variant="outline"
                                className="text-[11px] capitalize"
                                key={index}
                              >
                                {item?.trim()?.split(" ")[0]}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-adventure text-adventure" />
                            <span className="text-sm font-medium">
                              {pkg.rating}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              ({getRandomInt(150, 500)})
                            </span>
                          </div>
                        </div>

                        <h3 className="font-bold text-lg mb-2 group-hover:text-ocean transition-colors">
                          {pkg.name}
                        </h3>

                        <div className="flex items-center gap-4 mb-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>
                              {pkg?.destination?.name},{" "}
                              {pkg?.destination?.country}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{pkg.day} Days</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {pkg.text}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {pkg.highlights
                            .slice(0, 3)
                            .map((highlight, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-[11px]"
                              >
                                {highlight?.text}
                              </Badge>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-1">
                              <span className="text-2xl font-bold text-ocean">
                                {toIndianCurrency(pkg.threePrice)}
                              </span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              per person
                            </span>
                          </div>

                          <Link href={`/packages/${pkg.slug}`}>
                            <Button
                              variant="outline"
                              size="lg"
                              className="group"
                            >
                              View Details
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {sortedPackages.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                      <Plane className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      No packages found
                    </h3>
                    <p className="text-muted-foreground">
                      Try adjusting your filters or browse all packages.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Can&pos;t find exactly what you&pos;re looking for? Our travel
              experts can create a custom package just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondaryOutline"
                animation="secondaryOutline"
                size="lg"
                className="bg-white"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Our Experts
              </Button>
              <Button
                variant="primaryOutline"
                animation="primaryOutline"
                size="lg"
                className="bg-white"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Custom Trip Planning
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllPackages;
