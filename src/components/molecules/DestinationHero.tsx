import { Plane, Star, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const DestinationHero = () => {
  return (
    <>
      <div className="relative h-[80vh] overflow-hidden">
        <img
          src={"/hero.jpeg"}
          alt={"asdfasf"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl text-white">
              <Badge className="mb-4 bg-adventure text-white">
                Featured Destination
              </Badge>
              <h1 className="text-6xl font-bold mb-6">
                Discover Amazing Destinations
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Explore our carefully curated travel packages designed to create
                unforgettable memories and extraordinary experiences.
              </p>
              <div className="flex flex-wrap gap-6 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Plane className="w-5 h-5" />
                  <span>50+ Destinations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span>Expert Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Small Groups</span>
                </div>
              </div>
              <Button variant="pricing" size="lg" className="mr-4">
                Explore All Packages
              </Button>
              <Button variant="customize" size="lg">
                Plan Custom Trip
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DestinationHero;
