import AllPackages from "@/components/organisms/packages/AllPackages";
import { Badge } from "@/components/ui/badge";
import { getAllPackages } from "@/lib/services/packages.service";
import { Plane } from "lucide-react";

export default async function PackagesPage() {
  const pacakgesData = await getAllPackages(1, 10);
  const count = pacakgesData?.data?.count;
  return (
    <>
      <section className="relative bg-gradient-hero py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              <Plane className="w-4 h-4 mr-2" />
              Explore Our Packages
            </Badge>
            <h1 className="text-6xl font-bold mb-6">
              Discover Your Perfect Journey
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              From romantic getaways to thrilling adventures, find the perfect
              package tailored to your travel dreams. Each journey is carefully
              crafted to create unforgettable memories.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {count}+ Packages
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  4.8★ Average Rating
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  1000+ Happy Travelers
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AllPackages />
    </>
  );
}
