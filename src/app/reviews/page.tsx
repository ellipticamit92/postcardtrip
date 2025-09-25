import BackToHome from "@/components/atoms/BackToHome";
import ReviewFilter from "@/components/organisms/reviews/ReviewFilter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getDestinationsOptions } from "@/lib/services/destination.service";
import { getAllReviews } from "@/lib/services/reviews.service";
import { Star, TrendingUp, Users } from "lucide-react";

const Reviews = async () => {
  const reviews = await getAllReviews();
  const { data } = reviews;
  const destinations = await getDestinationsOptions();
  const { data: destinationOptions } = destinations;
  console.log("DEBUG: Recent Reviews:", data);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
        }`}
      />
    ));
  };

  const stats = {
    totalReviews: 700,
    averageRating: 4.8,
    fiveStars: 97,
    fourStars: 18,
    threeStars: 3,
    twoStars: 1,
    oneStars: 0,
  };

  return (
    <main className="container mx-auto px-6 py-12">
      <BackToHome />
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-gradient-to-br from-ocean to-adventure rounded-full flex items-center justify-center mx-auto mb-6">
          <Star className="w-8 h-8 text-white fill-white" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Customer Reviews
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Read what our travelers have to say about their amazing adventures
          with TravelAdventure.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Card className="mb-8 bg-gradient-card border-ocean/20 py-0">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-foreground">
                  {stats.totalReviews.toLocaleString()}+
                </div>
                <p className="text-muted-foreground">Total Reviews</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-foreground">
                    {stats.averageRating}
                  </span>
                  <div className="flex">{renderStars(5)}</div>
                </div>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-nature">
                  {stats.fiveStars}%
                </div>
                <p className="text-muted-foreground">5-Star Reviews</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-ocean">98%</div>
                <p className="text-muted-foreground">Would Recommend</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <ReviewFilter reviews={data} destinations={destinationOptions} />

        <div className="text-center mt-12">
          <Button variant="outline" className="mr-4">
            Load More Reviews
          </Button>
        </div>

        <Card className="mt-12 bg-gradient-card border-ocean/20 shadow-md py-0">
          <CardContent className="p-8 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <TrendingUp className="w-8 h-8 text-ocean mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">
                  Growing Trust
                </h4>
                <p className="text-sm text-muted-foreground">
                  Join thousands of satisfied travelers who trust us with their
                  adventures
                </p>
              </div>
              <div>
                <Star className="w-8 h-8 text-amber-400 fill-amber-400 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">
                  Award Winning
                </h4>
                <p className="text-sm text-muted-foreground">
                  Consistently rated as one of the top travel companies
                </p>
              </div>
              <div>
                <Users className="w-8 h-8 text-nature mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">
                  Personal Service
                </h4>
                <p className="text-sm text-muted-foreground">
                  Dedicated team ensuring every trip exceeds expectations
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Reviews;
