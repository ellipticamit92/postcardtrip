"use client";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { CardContent } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import HomeSections from "./HomeSections";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const customerReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "SJ",
    location: "New York, USA",
    rating: 5,
    review:
      "Absolutely incredible experience! The tropical paradise package exceeded all expectations. The guides were knowledgeable and the accommodations were perfect.",
    package: "Tropical Paradise Adventure",
    date: "December 2024",
    verified: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "MC",
    location: "Toronto, Canada",
    rating: 5,
    review:
      "Best vacation of my life! The cultural heritage tour was eye-opening and beautifully organized. Every detail was perfectly planned.",
    package: "Cultural Heritage Discovery",
    date: "November 2024",
    verified: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "ER",
    location: "Madrid, Spain",
    rating: 4,
    review:
      "Amazing adventure! The volcano trek was challenging but so rewarding. Professional guides and stunning views throughout the journey.",
    package: "Volcano Adventure Trek",
    date: "October 2024",
    verified: true,
  },
  {
    id: 4,
    name: "David Thompson",
    avatar: "DT",
    location: "London, UK",
    rating: 5,
    review:
      "Exceptional service from start to finish. The booking process was smooth and the trip itself was unforgettable. Highly recommended!",
    package: "Beach Paradise Getaway",
    date: "September 2024",
    verified: true,
  },
  {
    id: 5,
    name: "David Thompson 1",
    avatar: "DT",
    location: "London, UK",
    rating: 5,
    review:
      "Exceptional service from start to finish. The booking process was smooth and the trip itself was unforgettable. Highly recommended!",
    package: "Beach Paradise Getaway",
    date: "September 2024",
    verified: true,
  },
];

const Reviews = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  return (
    <>
      <HomeSections
        icon={<Star className="w-4 h-4 mr-2" />}
        heading="Testimonials"
        title="What Our Travelers Say"
        description="Real experiences from real travelers who&pos;ve journeyed with us around the world"
        variant="bg-secondary-400"
      >
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4 py-12">
            {customerReviews.map((review, index) => (
              <CarouselItem
                key={review.id}
                className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/2 xl:basis-1/3 "
              >
                <div
                  className={`postcard-container hover-scale ${
                    index % 2 === 0 ? "rotate-1" : "-rotate-1"
                  } hover:rotate-0 transition-all duration-300`}
                >
                  <div className="postcard h-94 bg-linear-to-br from-amber-50 to-orange-50 border-2 border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center">
                      <Image
                        src="/stamp.png"
                        alt="Stamp"
                        width={45}
                        height={45}
                        className="-rotate-6"
                      />
                    </div>

                    {/* Postmark */}
                    <div className="absolute top-2 left-2 w-16 h-16 border-2 border-gray-400 rounded-full opacity-30 flex items-center justify-center">
                      <div className="text-xs text-gray-600 font-mono text-center leading-tight">
                        {review.date.split(" ")[0]}
                        <br />
                        2024
                      </div>
                    </div>

                    <CardContent className="p-6 pt-16 pb-4">
                      {/* Address Section */}
                      <div className="mb-4 text-right">
                        <div className="text-xs text-gray-600 font-mono">
                          TO:
                        </div>
                        <div className="text-sm font-semibold text-foreground">
                          {review.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {review.location}
                        </div>
                      </div>

                      {/* Dividing Line */}
                      <div className="border-l-2 border-dashed border-gray-300 absolute left-1/2 top-16 bottom-4 transform -translate-x-1/2"></div>

                      {/* Message Section */}
                      <div className="pt-4">
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
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

                        <p className="text-sm text-gray-700 mb-4 leading-relaxed font-medium italic">
                          &quot;{review.review}&quot;
                        </p>

                        {/* Travel Package Tag */}
                        <div className="mb-3">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {review.package}
                          </span>
                        </div>

                        {/* Signature & Verification */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-linear-to-br from-ocean to-adventure rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {review.avatar}
                            </div>
                            <div className="text-xs text-gray-600">
                              <div className="font-medium">
                                — {review.name.split(" ")[0]}
                              </div>
                            </div>
                          </div>

                          {review.verified && (
                            <div className="flex items-center gap-1 text-xs text-green-600">
                              <CheckCircle className="w-3 h-3" />
                              <span>Verified</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-transparent via-red-200 to-transparent opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-linear-to-r from-transparent via-blue-200 to-transparent opacity-50"></div>
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
          <p className="text-muted-foreground mb-6">
            Join thousands of satisfied travelers
          </p>
          <Link href="/destinations">
            <Button
              variant="secondaryOutline"
              animation="secondaryOutline"
              size="lg"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </HomeSections>
    </>
  );
};

export default Reviews;
