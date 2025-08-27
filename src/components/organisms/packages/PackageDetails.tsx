"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Camera,
  Car,
  CheckCircle,
  Clock,
  MapPin,
  Plane,
  Star,
  ThumbsUp,
  Utensils,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const PackageDetails = () => {
  const [selectedHotelStar, setSelectedHotelStar] = useState(4);

  const hotelPricing = {
    3: { price: 1399, original: 1799, discount: "22%" },
    4: { price: 1899, original: 2399, discount: "20%" },
    5: { price: 2699, original: 3299, discount: "18%" },
  };

  const currentPricing =
    hotelPricing[selectedHotelStar as keyof typeof hotelPricing];

  const itinerary = [
    {
      day: 1,
      title: "Arrival & Beach Relaxation",
      arrivalText:
        "Arrival at Paradise Island Airport, transfer to beachfront resort",
      hotel: {
        name: "Paradise Bay Resort",
        image: "/hero.jpg",
        rating: 5,
        amenities: ["Ocean View", "Infinity Pool", "Spa", "Beach Access"],
      },
      activities: [
        {
          name: "Private Airport Transfer",
          image: "/hero.jpg",
          description:
            "Comfortable private transfer from airport to resort with welcome refreshments",
          time: "10:00 AM",
          duration: "1 hour",
        },
        {
          name: "Resort Check-in & Welcome Lunch",
          image: "/hero.jpg",
          description:
            "Check into your ocean-view suite and enjoy a welcome lunch at the resort restaurant",
          time: "12:00 PM",
          duration: "2 hours",
        },
        {
          name: "Beach Snorkeling Adventure",
          image: "/hero.jpg",
          description:
            "Explore vibrant coral reefs and tropical fish in crystal clear waters",
          time: "3:00 PM",
          duration: "2 hours",
        },
        {
          name: "Sunset Beach Walk",
          image: "/hero.jpg",
          description:
            "Romantic sunset stroll along the pristine white sand beach",
          time: "6:00 PM",
          duration: "1 hour",
        },
      ],
    },
    {
      day: 2,
      title: "Mountain Adventure & Nature",
      arrivalText:
        "Early morning transfer to mountain eco-lodge for adventure activities",
      hotel: {
        name: "Eco-Lodge Retreat",
        image: "/hero.jpg",
        rating: 4,
        amenities: [
          "Rainforest View",
          "Eco-Friendly",
          "Adventure Center",
          "Local Cuisine",
        ],
      },
      activities: [
        {
          name: "Volcano Hiking Expedition",
          image: "/hero.jpg",
          description:
            "Guided trek to volcanic crater with stunning panoramic views of the island",
          time: "6:00 AM",
          duration: "4 hours",
        },
        {
          name: "Traditional Lunch at Lodge",
          image: "/hero.jpg",
          description:
            "Authentic local cuisine prepared with organic ingredients from the lodge garden",
          time: "12:00 PM",
          duration: "1 hour",
        },
        {
          name: "Rainforest Canopy Walk",
          image: "/hero.jpg",
          description:
            "Experience the rainforest from above on suspended walkways",
          time: "2:00 PM",
          duration: "2 hours",
        },
        {
          name: "Cultural Market Tour",
          image: "/hero.jpg",
          description:
            "Explore local markets, meet artisans, and discover traditional crafts",
          time: "4:00 PM",
          duration: "2 hours",
        },
      ],
    },
    {
      day: 3,
      title: "Cultural Heritage & Ancient Sites",
      arrivalText:
        "Journey to historic district for cultural immersion and temple exploration",
      hotel: {
        name: "Heritage Boutique Hotel",
        image: "/hero.jpg",
        rating: 4,
        amenities: [
          "Historic Architecture",
          "Cultural Center",
          "Local Art",
          "Traditional Dining",
        ],
      },
      activities: [
        {
          name: "Ancient Temple Discovery",
          image: "/hero.jpg",
          description:
            "Visit centuries-old temples and archaeological sites with expert historian guide",
          time: "8:00 AM",
          duration: "3 hours",
        },
        {
          name: "Traditional Craft Workshop",
          image: "/hero.jpg",
          description:
            "Learn traditional pottery and weaving techniques from local artisans",
          time: "2:00 PM",
          duration: "2 hours",
        },
        {
          name: "Cultural Performance Evening",
          image: "/hero.jpg",
          description:
            "Enjoy traditional music and dance performances with local dinner",
          time: "7:00 PM",
          duration: "2 hours",
        },
      ],
    },
    {
      day: 4,
      title: "Adventure Sports & Relaxation",
      arrivalText: "Return to beach resort for water sports and spa relaxation",
      hotel: {
        name: "Paradise Bay Resort",
        image: "/hero.jpg",
        rating: 5,
        amenities: ["Ocean View", "Infinity Pool", "Spa", "Beach Access"],
      },
      activities: [
        {
          name: "Water Sports Adventure",
          image: "/hero.jpg",
          description:
            "Kayaking, paddle boarding, and jet skiing in turquoise waters",
          time: "9:00 AM",
          duration: "3 hours",
        },
        {
          name: "Spa & Wellness Session",
          image: "/hero.jpg",
          description:
            "Rejuvenating massage and wellness treatments at the resort spa",
          time: "2:00 PM",
          duration: "2 hours",
        },
        {
          name: "Sunset Catamaran Cruise",
          image: "/hero.jpg",
          description:
            "Romantic sunset cruise with dinner and live music on board",
          time: "5:00 PM",
          duration: "3 hours",
        },
      ],
    },
    {
      day: 5,
      title: "Farewell & Departure",
      arrivalText: "Final morning at resort with leisure time before departure",
      hotel: {
        name: "Paradise Bay Resort",
        image: "/hero.jpg",
        rating: 5,
        amenities: ["Ocean View", "Infinity Pool", "Spa", "Beach Access"],
      },
      activities: [
        {
          name: "Leisure Morning at Resort",
          image: "/hero.jpg",
          description:
            "Free time to enjoy resort facilities, pool, or beach before checkout",
          time: "9:00 AM",
          duration: "3 hours",
        },
        {
          name: "Farewell Lunch",
          image: "/hero.jpg",
          description:
            "Final meal at beachfront restaurant with panoramic ocean views",
          time: "12:00 PM",
          duration: "1 hour",
        },
        {
          name: "Airport Transfer & Departure",
          image: "/hero.jpg",
          description: "Private transfer to airport for your departure flight",
          time: "2:00 PM",
          duration: "1 hour",
        },
      ],
    },
  ];

  const inclusions = [
    "5-star accommodation for 5 nights",
    "All meals (breakfast, lunch, dinner)",
    "Private airport transfers",
    "Professional tour guide",
    "All entrance fees and permits",
    "Adventure equipment and gear",
    "Travel insurance coverage",
    "24/7 customer support",
  ];

  const exclusions = [
    "International flights",
    "Personal expenses and shopping",
    "Alcoholic beverages",
    "Optional activities not mentioned",
    "Tips and gratuities",
    "Visa fees if applicable",
    "Medical expenses",
    "Single room supplement",
  ];

  const samplePackages = [
    {
      title: "Tropical Paradise Escape",
      duration: "7 Days",
      price: "$2,299",
      image: "/hero.jpg",
      rating: 4.8,
      destinations: ["Maldives", "Sri Lanka"],
    },
    {
      title: "Adventure Seekers Special",
      duration: "10 Days",
      price: "$3,499",
      image: "/hero.jpg",
      rating: 4.9,
      destinations: ["Nepal", "Tibet"],
    },
    {
      title: "Cultural Heritage Tour",
      duration: "6 Days",
      price: "$1,899",
      image: "/hero.jpg",
      rating: 4.7,
      destinations: ["Japan", "South Korea"],
    },
  ];

  const customerReviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      date: "March 2024",
      review:
        "Absolutely incredible experience! The snorkeling was breathtaking and the volcanic hike was challenging but so rewarding. Our guide was knowledgeable and the hotels exceeded expectations. Perfect blend of adventure and relaxation.",
      images: ["/hero.jpg", "/hero.jpg"],
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: 5,
      date: "February 2024",
      review:
        "This trip was everything we hoped for and more! The cultural experiences were authentic and meaningful. The temple visits were spiritual and the local markets were vibrant. Highly recommend for couples seeking adventure.",
      images: ["/hero.jpg", "/hero.jpg"],
      verified: true,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Sydney, Australia",
      rating: 4,
      date: "January 2024",
      review:
        "Amazing trip with stunning scenery and great organization. The only minor issue was some weather delays, but the team handled it professionally. The spa treatments were divine and the food was exceptional.",
      images: ["/hero.jpg"],
      verified: true,
    },
    {
      id: 4,
      name: "David Kim",
      location: "Seoul, South Korea",
      rating: 5,
      date: "December 2023",
      review:
        "Perfect honeymoon trip! Every detail was thoughtfully planned. The sunset catamaran cruise was magical and the private transfers made everything seamless. The hotels were luxury at its finest.",
      images: ["/hero.jpg", "/hero.jpg"],
      verified: true,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      location: "London, UK",
      rating: 4,
      date: "November 2023",
      review:
        "Great value for money and well-organized itinerary. The mix of activities kept us engaged throughout. The snorkeling equipment was top-quality and the cultural workshops were educational and fun.",
      images: ["/hero.jpg"],
      verified: true,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          {/* Daily Itinerary */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              5-Day Detailed Itinerary
            </h2>
            <Accordion
              type="multiple"
              defaultValue={["day-1"]}
              className="space-y-4"
            >
              {itinerary.map((day) => (
                <AccordionItem
                  key={day.day}
                  value={`day-${day.day}`}
                  className="border rounded-lg shadow-soft overflow-hidden"
                >
                  <AccordionTrigger className="bg-gradient-hero text-white px-6 py-4 hover:no-underline hover:bg-linear-to-r hover:from-ocean-dark hover:to-adventure-dark transition-all duration-300">
                    <div className="flex items-center gap-4 text-left">
                      <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                        {day.day}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          Day {day.day}: {day.title}
                        </h3>
                        <p className="text-white/80 text-sm font-normal mt-1">
                          {day.arrivalText}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pb-0">
                    <div className="p-6 space-y-6">
                      {/* Hotel Section */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-ocean rounded-full"></div>
                          Your Accommodation
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6 p-4 rounded-lg bg-muted/30">
                          <div className="relative rounded-lg overflow-hidden">
                            <div className="w-full h-48 object-cover">
                              <Image
                                src={day.hotel.image}
                                alt={day.hotel.name}
                                fill={true}
                              />
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold text-lg mb-2">
                              {day.hotel.name}
                            </h5>
                            <div className="flex items-center gap-2 mb-3">
                              {Array.from({ length: day.hotel.rating }).map(
                                (_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-adventure text-adventure"
                                  />
                                )
                              )}
                              <span className="text-sm text-muted-foreground">
                                ({day.hotel.rating}.0)
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {day.hotel.amenities.map((amenity, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {amenity}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Activities Section */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-adventure rounded-full"></div>
                          Today&pos;s Activities
                        </h4>
                        <div className="space-y-4">
                          {day.activities.map((activity, index) => (
                            <div
                              key={index}
                              className="grid md:grid-cols-4 gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-all duration-300"
                            >
                              <div className="relative rounded-lg overflow-hidden">
                                <div className="w-full h-32 object-cover">
                                  <Image
                                    src={activity.image}
                                    alt={activity.name}
                                    fill={true}
                                  />
                                </div>
                              </div>
                              <div className="md:col-span-3 space-y-2">
                                <div className="flex items-center justify-between">
                                  <h6 className="font-medium text-foreground">
                                    {activity.name}
                                  </h6>
                                  <div className="flex items-center gap-2">
                                    <Badge
                                      variant="outline"
                                      className="text-xs flex items-center gap-1"
                                    >
                                      <Clock className="w-3 h-3" />
                                      {activity.time}
                                    </Badge>
                                    <Badge className="bg-nature text-white text-xs">
                                      {activity.duration}
                                    </Badge>
                                  </div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {activity.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Inclusions & Exclusions */}
          <section className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-success flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  What&pos;s Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  Not Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Customer Reviews */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                What Our Travelers Say
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-adventure text-adventure"
                    />
                  ))}
                </div>
                <span className="text-xl font-semibold text-foreground">
                  4.9/5
                </span>
                <span className="text-muted-foreground">
                  • Based on {customerReviews.length} reviews
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {customerReviews.map((review) => (
                <Card
                  key={review.id}
                  className="shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-semibold">
                          {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-foreground">
                              {review.name}
                            </h4>
                            {review.verified && (
                              <Badge
                                variant="secondary"
                                className="text-xs flex items-center gap-1"
                              >
                                <CheckCircle className="w-3 h-3" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {review.location}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "fill-adventure text-adventure"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {review.review}
                    </p>

                    {review.images && review.images.length > 0 && (
                      <div className="flex gap-2 mb-4">
                        {review.images.slice(0, 3).map((image, index) => (
                          <div
                            key={index}
                            className="relative rounded-lg overflow-hidden flex-1"
                          >
                            <div className="w-full h-20 object-cover hover:scale-105 transition-transform duration-300">
                              <Image
                                src={image}
                                alt={`Review photo ${index + 1}`}
                                fill={true}
                              />
                            </div>
                          </div>
                        ))}
                        {review.images.length > 3 && (
                          <div className="relative rounded-lg overflow-hidden flex-1 bg-muted/50 flex items-center justify-center">
                            <span className="text-sm text-muted-foreground font-medium">
                              +{review.images.length - 3} more
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex items-center gap-4 pt-3 border-t">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs p-0 h-auto"
                      >
                        <ThumbsUp className="w-3 h-3 mr-1" />
                        Helpful
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs p-0 h-auto"
                      >
                        Reply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                variant="primaryOutline"
                animation="primaryOutline"
                size="lg"
                className="!font-bold"
              >
                View All Reviews
              </Button>
            </div>
          </section>

          {/* Other Sample Packages */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Other Amazing Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {samplePackages.map((pkg, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group py-0"
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                      <Image src={pkg.image} alt={pkg.title} fill={true} />
                    </div>

                    <div className="absolute top-4 right-4">
                      <Badge className="bg-adventure text-white">
                        {pkg.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{pkg.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 fill-adventure text-adventure" />
                      <span className="text-sm text-muted-foreground">
                        {pkg.rating}/5
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {pkg.destinations.join(" • ")}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-ocean">
                        {pkg.price}
                      </span>
                      <Button variant="ocean" size="sm" className="group">
                        View Details
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar - Pricing Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <Card className="shadow-strong bg-gradient-card backdrop-blur-xs border-0">
              <CardHeader className="text-center">
                {/* Hotel Star Selection */}
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-3 text-foreground">
                    Select Hotel Category
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[3, 4, 5].map((stars) => (
                      <button
                        key={stars}
                        onClick={() => setSelectedHotelStar(stars)}
                        className={`p-3 rounded-lg border transition-all duration-200 ${
                          selectedHotelStar === stars
                            ? "bg-ocean text-white border-ocean shadow-soft"
                            : "bg-muted/50 border-border hover:bg-muted/80"
                        }`}
                      >
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex">
                            {Array.from({ length: stars }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                          <span className="text-xs font-medium">
                            {stars} Star
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                  ${currentPricing.price.toLocaleString()}
                </div>
                <p className="text-sm text-muted-foreground">per person</p>
                <Badge className="bg-success text-white mx-auto">
                  Early Bird {currentPricing.discount} Off
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Original Price:</span>
                    <span className="line-through text-muted-foreground">
                      ${currentPricing.original.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Your Price:</span>
                    <span className="text-ocean">
                      ${currentPricing.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Taxes & Fees:</span>
                    <span>Included</span>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-3">
                  <Button variant="pricing" className="w-full" size="lg">
                    <Plane className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                  <Button
                    variant="primaryOutline"
                    animation="primaryOutline"
                    className="w-full"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Get It Customized
                  </Button>
                </div>

                <div className="text-xs text-center text-muted-foreground pt-2">
                  Free cancellation up to 48 hours before departure
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <Car className="w-4 h-4 text-muted-foreground" />
                    <span>Private transfers included</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Utensils className="w-4 h-4 text-muted-foreground" />
                    <span>All meals covered</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-muted-foreground" />
                    <span>Expert local guides</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PackageDetails;
