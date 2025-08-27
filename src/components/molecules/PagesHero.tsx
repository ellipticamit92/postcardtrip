import { Plane, Star, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { FC } from "react";
import Link from "next/link";

interface PagesHeroProps {
  src?: string;
  badgeText: string;
  title: string;
  description: string;
}

const PagesHero: FC<PagesHeroProps> = ({
  src = "hero.jpeg",
  badgeText,
  title,
  description,
}) => {
  const words = title.split(" ");
  const mid = Math.ceil(words.length / 2);

  const firstLine = words.slice(0, mid).join(" ");
  const secondLine = words.slice(mid).join(" ");
  return (
    <>
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={`/${src}`}
          alt={"asdfasf"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl text-white">
              <Badge className="mb-4 bg-adventure text-white">
                Featured {badgeText}
              </Badge>
              <h1 className="text-6xl font-bold mb-6">
                {firstLine} <br />
                {secondLine}
              </h1>
              <p className="text-xl mb-8 text-white/90">{description}</p>
              <div className="flex flex-wrap gap-6 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Plane className="w-5 h-5" />
                  <span>50+ {badgeText} </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span>Expert Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>1000+ Happy Traveller</span>
                </div>
              </div>
              <Link href="/packages">
                <Button variant="pricing" size="lg" className="mr-4">
                  Explore All Packages
                </Button>
              </Link>
              <Button
                variant="secondaryOutline"
                className="bg-white"
                animation="secondaryOutline"
                size="lg"
              >
                Plan Custom Trip
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PagesHero;
