import { Calendar, MapPin, Star, Users } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { FC } from "react";
import { Package } from "@/lib/types";

interface PackagesHeroProps {
  packageDetails: Package;
}

const PackagesHero: FC<PackagesHeroProps> = ({ packageDetails }) => {
  const imageSrc = packageDetails?.imageUrl ?? "/hero.jpeg";
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div className="w-full h-full object-cover">
        <Image src={imageSrc} alt="Tropical Paradise Package" fill={true} />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-6 pb-12">
          <div className="max-w-2xl text-white">
            <Badge className="mb-4 bg-adventure text-white">
              {packageDetails?.featured ? "Featured" : "Popular"} Package
            </Badge>
            <h1 className="text-5xl font-bold mb-4">{packageDetails?.name}</h1>
            <p className="text-xl mb-6 text-white/90">
              {packageDetails?.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {packageDetails?.day} Days / {packageDetails?.night} Nights
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Tropical Islands</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Max 12 People</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-current" />
                <span>{packageDetails?.rating ?? 5}/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PackagesHero;
