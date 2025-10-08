import { Plane, Star, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { FC } from "react";
import Link from "next/link";
import InquiryModal from "../organisms/modal/InquiryModal";

interface PagesHeroProps {
  src?: string;
  badgeText: string;
  title: string;
  description: string;
  packageNum?: number;
}

const PagesHero: FC<PagesHeroProps> = ({
  src,
  badgeText,
  title,
  description,
  packageNum = 10,
}) => {
  return (
    <>
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={`${src ?? "/hero.jpeg"}`}
          alt={"asdfasf"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl text-white">
              <Badge className="mb-4 bg-adventure text-white">
                Featured {badgeText}
              </Badge>
              <div className="w-full flex flex-wrap">
                <h1 className="text-5xl text-shadow-lg font-bold leading-14">
                  {title}
                </h1>
              </div>
              <p className="text-xl mb-8 text-white/90">{description}</p>
              <div className="flex flex-wrap gap-6 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Plane className="w-5 h-5" />
                  <span>
                    {packageNum}+ {badgeText}{" "}
                  </span>
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
              <InquiryModal>
                <Button
                  variant="secondaryOutline"
                  className="bg-white"
                  animation="secondaryOutline"
                  size="lg"
                >
                  Plan Custom Trip12
                </Button>
              </InquiryModal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PagesHero;
