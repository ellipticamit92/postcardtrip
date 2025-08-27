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
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AllPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");

  const tourCategories = [
    {
      id: "all",
      title: "All Packages",
      icon: Plane,
      color: "from-ocean to-adventure",
      count: 24,
    },
    {
      id: "romantic",
      title: "Romantic",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      count: 8,
      description: "Perfect getaways for couples",
    },
    {
      id: "adventure",
      title: "Adventure",
      icon: Mountain,
      color: "from-orange-500 to-red-500",
      count: 6,
      description: "Thrilling experiences for adrenaline seekers",
    },
    {
      id: "leisure",
      title: "Leisure",
      icon: Palmtree,
      color: "from-green-500 to-emerald-500",
      count: 7,
      description: "Relaxing vacations for peace seekers",
    },
    {
      id: "honeymoon",
      title: "Honeymoon",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      count: 3,
      description: "Exclusive packages for newlyweds",
    },
  ];

  const packages = [
    // Romantic Packages
    {
      id: 1,
      title: "Sunset Romance in Santorini",
      category: "romantic",
      location: "Santorini, Greece",
      duration: "5 Days",
      price: 2899,
      originalPrice: 3299,
      rating: 4.9,
      reviews: 127,
      image: "/hero.jpeg",
      featured: true,
      highlights: [
        "Private Villa",
        "Sunset Cruise",
        "Couples Spa",
        "Wine Tasting",
      ],
      description:
        "Experience the ultimate romantic getaway with breathtaking sunsets, luxury accommodations, and intimate dining experiences.",
    },
    {
      id: 2,
      title: "Paris City of Love",
      category: "romantic",
      location: "Paris, France",
      duration: "4 Days",
      price: 2199,
      originalPrice: 2599,
      rating: 4.8,
      reviews: 89,
      image: "/hero.jpeg",
      highlights: [
        "Eiffel Tower Dinner",
        "Seine River Cruise",
        "Louvre Museum",
        "Luxury Hotel",
      ],
      description:
        "Discover the magic of Paris with your loved one through iconic landmarks and romantic experiences.",
    },
    {
      id: 3,
      title: "Bali Romantic Escape",
      category: "romantic",
      location: "Bali, Indonesia",
      duration: "6 Days",
      price: 1899,
      originalPrice: 2299,
      rating: 4.7,
      reviews: 156,
      image: "/hero.jpeg",
      highlights: [
        "Beach Resort",
        "Couples Massage",
        "Temple Tours",
        "Private Beach",
      ],
      description:
        "Tropical paradise perfect for couples seeking romance amidst stunning natural beauty.",
    },

    // Adventure Packages
    {
      id: 4,
      title: "Himalayan Trek Adventure",
      category: "adventure",
      location: "Nepal",
      duration: "12 Days",
      price: 3499,
      originalPrice: 3999,
      rating: 4.9,
      reviews: 203,
      image: "/hero.jpeg",
      featured: true,
      highlights: [
        "Mountain Climbing",
        "Base Camp Trek",
        "Local Villages",
        "Expert Guides",
      ],
      description:
        "Challenge yourself with an epic trek through the world&post;s highest mountain range.",
    },
    {
      id: 5,
      title: "Amazon Rainforest Expedition",
      category: "adventure",
      location: "Amazon, Brazil",
      duration: "8 Days",
      price: 2799,
      originalPrice: 3199,
      rating: 4.8,
      reviews: 95,
      image: "/hero.jpeg",
      highlights: [
        "Jungle Lodge",
        "Wildlife Safari",
        "River Rafting",
        "Survival Skills",
      ],
      description:
        "Immerse yourself in the heart of the Amazon for an unforgettable wilderness adventure.",
    },
    {
      id: 6,
      title: "Sahara Desert Safari",
      category: "adventure",
      location: "Morocco",
      duration: "7 Days",
      price: 2299,
      originalPrice: 2699,
      rating: 4.6,
      reviews: 134,
      image: "/hero.jpeg",
      highlights: [
        "Camel Trekking",
        "Desert Camping",
        "Berber Culture",
        "Sand Dunes",
      ],
      description:
        "Experience the magic of the Sahara with camel treks and overnight desert camping.",
    },

    // Leisure Packages
    {
      id: 7,
      title: "Maldives Paradise Retreat",
      category: "leisure",
      location: "Maldives",
      duration: "6 Days",
      price: 4299,
      originalPrice: 4999,
      rating: 4.9,
      reviews: 289,
      image: "/hero.jpeg",
      featured: true,
      highlights: [
        "Overwater Villa",
        "Spa Treatments",
        "Snorkeling",
        "All-Inclusive",
      ],
      description:
        "Ultimate relaxation in an overwater villa surrounded by crystal-clear waters.",
    },
    {
      id: 8,
      title: "Tuscany Wine & Wellness",
      category: "leisure",
      location: "Tuscany, Italy",
      duration: "5 Days",
      price: 2699,
      originalPrice: 3099,
      rating: 4.7,
      reviews: 167,
      image: "/hero.jpeg",
      highlights: [
        "Vineyard Tours",
        "Spa Resort",
        "Cooking Classes",
        "Scenic Drives",
      ],
      description:
        "Indulge in world-class wines and wellness treatments in the heart of Tuscany.",
    },
    {
      id: 9,
      title: "Thai Beach Bliss",
      category: "leisure",
      location: "Phuket, Thailand",
      duration: "7 Days",
      price: 1799,
      originalPrice: 2199,
      rating: 4.6,
      reviews: 198,
      image: "/hero.jpeg",
      highlights: [
        "Beach Resort",
        "Thai Massage",
        "Island Hopping",
        "Local Cuisine",
      ],
      description:
        "Relax on pristine beaches while enjoying authentic Thai hospitality and cuisine.",
    },

    // Honeymoon Packages
    {
      id: 10,
      title: "Seychelles Honeymoon Bliss",
      category: "honeymoon",
      location: "Seychelles",
      duration: "8 Days",
      price: 5299,
      originalPrice: 5999,
      rating: 4.9,
      reviews: 78,
      image: "/hero.jpeg",
      featured: true,
      highlights: [
        "Private Island",
        "Butler Service",
        "Helicopter Tours",
        "Exclusive Dining",
      ],
      description:
        "The ultimate honeymoon experience in a private paradise with unmatched luxury.",
    },
    {
      id: 11,
      title: "Japanese Garden Romance",
      category: "honeymoon",
      location: "Kyoto, Japan",
      duration: "6 Days",
      price: 3899,
      originalPrice: 4399,
      rating: 4.8,
      reviews: 112,
      image: "/hero.jpeg",
      highlights: [
        "Ryokan Stay",
        "Cherry Blossoms",
        "Tea Ceremony",
        "Private Gardens",
      ],
      description:
        "Experience traditional Japanese romance in ancient temples and serene gardens.",
    },
    {
      id: 12,
      title: "Swiss Alps Honeymoon",
      category: "honeymoon",
      location: "Switzerland",
      duration: "7 Days",
      price: 4599,
      originalPrice: 5199,
      rating: 4.7,
      reviews: 89,
      image: "/hero.jpeg",
      highlights: [
        "Mountain Chalet",
        "Scenic Railways",
        "Glacier Tours",
        "Fine Dining",
      ],
      description:
        "Romantic mountain retreat with breathtaking Alpine views and luxury accommodations.",
    },
  ];

  const filteredPackages =
    selectedCategory === "all"
      ? packages
      : packages.filter((pkg) => pkg.category === selectedCategory);

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "duration":
        return parseInt(a.duration) - parseInt(b.duration);
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
              <div className="flex items-center gap-4">
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
                <Badge variant="outline" className="text-sm">
                  {sortedPackages.length} packages found
                </Badge>
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
                      key={pkg.id}
                      className="overflow-hidden group hover:shadow-strong transition-all duration-500 hover:-translate-y-2 py-0"
                    >
                      <div className="relative">
                        <div className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
                          <Image fill={true} src={pkg.image} alt={pkg.title} />
                        </div>

                        {pkg.featured && (
                          <Badge className="absolute top-4 left-4 bg-adventure text-white">
                            Featured
                          </Badge>
                        )}
                        <div className="absolute top-4 right-4">
                          <Badge
                            variant="secondary"
                            className="bg-white/90 text-foreground"
                          >
                            {Math.round(
                              ((pkg.originalPrice - pkg.price) /
                                pkg.originalPrice) *
                                100
                            )}
                            % OFF
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            variant="outline"
                            className="text-xs capitalize"
                          >
                            {pkg.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-adventure text-adventure" />
                            <span className="text-sm font-medium">
                              {pkg.rating}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              ({pkg.reviews})
                            </span>
                          </div>
                        </div>

                        <h3 className="font-bold text-xl mb-2 group-hover:text-ocean transition-colors">
                          {pkg.title}
                        </h3>

                        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{pkg.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{pkg.duration}</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {pkg.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {pkg.highlights
                            .slice(0, 3)
                            .map((highlight, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs"
                              >
                                {highlight}
                              </Badge>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
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

                          <Link href={`/packages/${pkg.id}`}>
                            <Button
                              variant="outline"
                              size="sm"
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
