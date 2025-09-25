"use client";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

import Link from "next/link";
import { FC, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ReviewType } from "@/lib/types";
import { getInitials, truncateText } from "@/lib/helper";
import HomeSections from "../HomeSections";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ReviewsSliderProps {
  reviews?: ReviewType[];
}

const ReviewsSlider: FC<ReviewsSliderProps> = ({ reviews }) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  return (
    <>
      <HomeSections
        icon={<Star className="w-4 h-4 mr-2" />}
        heading="Testimonials"
        title="What Our Travelers Say"
        description="Real experiences from real travelers who've journeyed with us around the world"
        variant="bg-secondary-400"
      >
        <div className="flex items-center justify-center gap-8 mb-3 mx-10 -mt-8">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-primary/10">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4
                      ? "fill-yellow-400 text-yellow-400"
                      : i === 4
                      ? "fill-yellow-400/50 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="font-bold text-lg text-foreground">4.8</span>
          </div>
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-secondary/10">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <div className="text-left">
              <div className="font-bold text-foreground">730+ Reviews</div>
              <div className="text-sm text-muted-foreground">on Google</div>
            </div>
          </div>
        </div>

        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4 py-12">
            {reviews?.map((review: ReviewType, index: number) => (
              <CarouselItem
                key={review.id}
                className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/2 xl:basis-1/3"
              >
                <div
                  className={`postcard-container hover-scale ${
                    index % 2 === 0 ? "rotate-1" : "-rotate-1"
                  } hover:rotate-0 transition-all duration-300`}
                >
                  <div className="postcard h-94 bg-linear-to-br from-amber-50 to-orange-50 border-2 border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    {/* Stamp */}
                    <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center">
                      <Image
                        src="/stamp.png"
                        alt="Stamp"
                        width={36}
                        height={36}
                        className="-rotate-6"
                      />
                    </div>

                    {/* Date circle */}
                    <div className="absolute top-2 left-2 w-16 h-16 border-2 border-gray-400 rounded-full opacity-30 flex items-center justify-center">
                      <div className="text-xs text-gray-600 font-mono text-center leading-tight">
                        {review.month}
                        <br />
                        {review.year}
                      </div>
                    </div>

                    <CardContent className="p-6 pt-16 pb-4">
                      {/* User Info */}
                      <div className="mb-2 text-right">
                        <div className="text-[10px] text-gray-600 font-mono">
                          FROM:
                        </div>
                        <div className="text-sm font-semibold text-foreground">
                          {review.username}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {review?.destination?.name},{" "}
                          {review?.destination?.country}
                        </div>
                      </div>

                      <div className="border-l-2 border-dashed border-gray-300 absolute left-1/2 top-16 bottom-4 transform -translate-x-1/2"></div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(review?.rating ?? 5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Review Text - consistent height */}
                      <p className="text-sm text-gray-700 mb-4 leading-relaxed font-medium italic line-clamp-3 min-h-[120px]">
                        &quot;{truncateText(review?.review ?? "", 40)}&quot;
                      </p>

                      {/* Package */}
                      <div className="mb-3">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {review?.package?.name}
                        </span>
                      </div>

                      {/* Footer - user initials & verified */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-linear-to-br from-ocean to-adventure rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {getInitials(review.username)}
                          </div>
                          <div className="text-xs text-gray-600">
                            <div className="font-medium">
                              — {review.username.split(" ")[0]}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-xs text-green-600">
                          <CheckCircle className="w-3 h-3" />
                          <span>Verified</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        <div className="text-center mt-12">
          <Link href="/reviews">
            <Button
              variant="secondaryOutline"
              animation="secondaryOutline"
              size="lg"
            >
              View All Reviews
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </HomeSections>
    </>
  );
};

export default ReviewsSlider;
