"use client";
import { Calendar, Filter, MapPin, ThumbsUp, Users } from "lucide-react";
import { FC, useState } from "react";
import { ReviewType } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ReviewFilterProps {
  reviews: ReviewType[];
  destinations: string[];
}

const ReviewFilter: FC<ReviewFilterProps> = ({ reviews, destinations }) => {
  const [selectedRating, setSelectedRating] = useState("all");
  const [selectedDestination, setSelectedDestination] = useState("all");

  const filteredReviews = reviews.filter((review) => {
    const ratingMatch =
      selectedRating === "all" || review.rating === parseInt(selectedRating);
    const destinationMatch =
      selectedDestination === "all" ||
      review?.destination?.name
        ?.toLowerCase()
        ?.includes(selectedDestination.toLowerCase());
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
            className="shadow-soft hover:shadow-medium transition-shadow py-0"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-foreground">
                          {review.username}
                        </h4>

                        <Badge
                          variant="secondary"
                          className="bg-nature/10 text-nature border-nature/20 text-xs"
                        >
                          Verified
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{review.destination?.name}</span>
                        <span>•</span>
                        <Calendar className="w-3 h-3" />
                        <span>
                          {review.month}, {review.year}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {/* {renderStars(review.rating)} */}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {review.review}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium text-ocean">
                        {review?.package?.name}
                      </span>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>12 photos</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-ocean"
                      >
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        Helpful (12)
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
