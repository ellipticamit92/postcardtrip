"use client";
import { Calendar, Filter, MapPin, ThumbsUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const ReviewFilter = () => {
  const [selectedRating, setSelectedRating] = useState("all");
  const [selectedDestination, setSelectedDestination] = useState("all");

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg",
      rating: 5,
      destination: "Bali, Indonesia",
      date: "December 2024",
      title: "Absolutely Amazing Experience!",
      content:
        "This was the trip of a lifetime! The team at TravelAdventure organized everything perfectly. From the stunning temples to the beautiful beaches, every moment was magical. Our guide was incredibly knowledgeable and friendly. The accommodations were top-notch and the food was incredible. I can't wait to book my next adventure with them!",
      package: "Bali Cultural & Beach Experience",
      verified: true,
      helpful: 24,
      photos: 8,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg",
      rating: 5,
      destination: "Costa Rica",
      date: "November 2024",
      title: "Perfect Adventure Tour",
      content:
        "TravelAdventure exceeded all my expectations! The volcano hiking was thrilling, and seeing the wildlife was incredible. The zip-lining through the cloud forest was a highlight. Our group was small and intimate, and our guide made sure we felt safe while having the adventure of our lives. Highly recommend!",
      package: "Costa Rica Adventure Package",
      verified: true,
      helpful: 18,
      photos: 12,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg",
      rating: 4,
      destination: "Thailand",
      date: "October 2024",
      title: "Great Cultural Experience",
      content:
        "Loved exploring the temples and markets in Thailand. The cultural immersion was exactly what I was looking for. The cooking classes were fantastic and I learned so much about Thai culture. The only minor issue was some of the accommodations could have been better, but overall a wonderful trip.",
      package: "Thailand Cultural Discovery",
      verified: true,
      helpful: 15,
      photos: 6,
    },
    {
      id: 4,
      name: "David Thompson",
      avatar: "/placeholder.svg",
      rating: 5,
      destination: "Peru",
      date: "September 2024",
      title: "Machu Picchu Dreams Come True",
      content:
        "The Inca Trail trek was challenging but absolutely worth it! TravelAdventure's team was professional and supportive throughout the journey. The sunrise at Machu Picchu was breathtaking. The small group size made it feel personal and special. This company really knows how to create unforgettable experiences.",
      package: "Peru Inca Trail Adventure",
      verified: true,
      helpful: 31,
      photos: 15,
    },
    {
      id: 5,
      name: "Lisa Wang",
      avatar: "/placeholder.svg",
      rating: 5,
      destination: "Morocco",
      date: "August 2024",
      title: "Magical Morocco Journey",
      content:
        "From the bustling souks of Marrakech to the serene Sahara Desert, this trip was pure magic. Riding camels at sunset and sleeping under the stars was unforgettable. The riads were beautiful and authentic. Our guide was like a local friend showing us hidden gems. Can't recommend enough!",
      package: "Morocco Imperial Cities & Desert",
      verified: true,
      helpful: 22,
      photos: 20,
    },
    {
      id: 6,
      name: "James Wilson",
      avatar: "/placeholder.svg",
      rating: 4,
      destination: "Japan",
      date: "July 2024",
      title: "Incredible Cultural Immersion",
      content:
        "Japan was amazing! The cherry blossoms, temples, and food were all incredible. TravelAdventure arranged some unique experiences like a tea ceremony and staying in a traditional ryokan. The bullet train rides were fun too. Only wish we had more time in Kyoto, but that's just because it was so beautiful!",
      package: "Japan Cultural Highlights",
      verified: true,
      helpful: 19,
      photos: 10,
    },
    {
      id: 7,
      name: "Amanda Foster",
      avatar: "/placeholder.svg",
      rating: 5,
      destination: "Iceland",
      date: "June 2024",
      title: "Northern Lights Magic",
      content:
        "Seeing the Northern Lights was a dream come true! The Golden Circle tour was spectacular, and the Blue Lagoon was so relaxing. Our guide was incredibly knowledgeable about Icelandic culture and geology. The small group made it feel very personal. TravelAdventure thought of everything!",
      package: "Iceland Northern Lights Adventure",
      verified: true,
      helpful: 27,
      photos: 14,
    },
    {
      id: 8,
      name: "Robert Martinez",
      avatar: "/placeholder.svg",
      rating: 4,
      destination: "Kenya",
      date: "May 2024",
      title: "Safari of a Lifetime",
      content:
        "The wildlife safari in Kenya was absolutely incredible! Seeing the Big Five in their natural habitat was emotional and awe-inspiring. The Maasai village visit was educational and respectful. Accommodations were comfortable and well-located. Only issue was some long drive times, but that's expected on safari.",
      package: "Kenya Safari Experience",
      verified: true,
      helpful: 16,
      photos: 25,
    },
  ];

  const destinations = [
    "all",
    "Bali",
    "Costa Rica",
    "Thailand",
    "Peru",
    "Morocco",
    "Japan",
    "Iceland",
    "Kenya",
  ];

  const filteredReviews = reviews.filter((review) => {
    const ratingMatch =
      selectedRating === "all" || review.rating === parseInt(selectedRating);
    const destinationMatch =
      selectedDestination === "all" ||
      review.destination
        .toLowerCase()
        .includes(selectedDestination.toLowerCase());
    return ratingMatch && destinationMatch;
  });

  return (
    <>
      <Card className="mb-8 shadow-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-ocean" />
            <h3 className="text-xl font-semibold text-foreground">
              Filter Reviews
            </h3>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="min-w-[200px]">
              <label className="text-sm font-medium text-foreground mb-2 block">
                Rating
              </label>
              <Select value={selectedRating} onValueChange={setSelectedRating}>
                <SelectTrigger>
                  <SelectValue placeholder="All Ratings" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4 Stars</SelectItem>
                  <SelectItem value="3">3 Stars</SelectItem>
                  <SelectItem value="2">2 Stars</SelectItem>
                  <SelectItem value="1">1 Star</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="min-w-[200px]">
              <label className="text-sm font-medium text-foreground mb-2 block">
                Destination
              </label>
              <Select
                value={selectedDestination}
                onValueChange={setSelectedDestination}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Destinations" />
                </SelectTrigger>
                <SelectContent>
                  {destinations.map((dest) => (
                    <SelectItem key={dest} value={dest}>
                      {dest === "all" ? "All Destinations" : dest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6 grid grid-cols-1 gap-4">
        {filteredReviews.map((review) => (
          <Card
            key={review.id}
            className="shadow-soft hover:shadow-medium transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {/* <Avatar className="w-12 h-12">
                  <AvatarImage src={review.avatar} alt={review.name} />
                  <AvatarFallback>
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar> */}

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-foreground">
                          {review.name}
                        </h4>
                        {review.verified && (
                          <Badge
                            variant="secondary"
                            className="bg-nature/10 text-nature border-nature/20 text-xs"
                          >
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{review.destination}</span>
                        <span>•</span>
                        <Calendar className="w-3 h-3" />
                        <span>{review.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {/* {renderStars(review.rating)} */}
                    </div>
                  </div>

                  <h5 className="font-semibold text-foreground mb-2">
                    {review.title}
                  </h5>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {review.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium text-ocean">
                        {review.package}
                      </span>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{review.photos} photos</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-ocean"
                      >
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        Helpful ({review.helpful})
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ReviewFilter;
