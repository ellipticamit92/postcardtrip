"use client";

import HotelOption from "../atoms/HotelOption";
import PackageRating from "../molecules/PackageRating";
import { Button } from "../ui/button";
import PackagePrice from "../molecules/PackagePrice";
import PackageCardHeader from "./PackageCardHeader";

export default function PackageCard() {
  return (
    <div className="drop-shadow-md bg-white border border-white hover:border-zinc-200 hover:drop-shadow-none">
      <PackageCardHeader
        imageSrc="/package/card/full-kerala-packages-card-img.jpg"
        imageAlt="A Romantic Week In Kerala"
        day={7}
        night={8}
        label="Customizable"
      />
      <div className="px-4 pt-3 pb-3 flex flex-col space-y-1 font-semibold md:px-2 lg:px-4">
        <h1 className="text-primary-900 text-left leading-4 text-lg md:text-base lg:text-xl">
          A Romantic Week In Kerala
        </h1>
        <PackageRating location="Kerala, India" rating={4.9} count={165} />
        <div className="flex items-end justify-between">
          <div className="flex flex-col text-sm lg:text-base">
            <div>Hotel options</div>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap items-center space-x-2 text-xs md:space-x-1 lg:space-x-2">
                <HotelOption selected>3</HotelOption>
                <HotelOption>4</HotelOption>
              </div>
            </div>
          </div>
          <PackagePrice amount="26,599" />
        </div>
        <div className="flex items-center justify-between mt-4 gap-4 md:gap-6 xl:gap-7">
          <Button
            size="full"
            variant="primaryOutline"
            className="text-lg"
            animation="primaryOutline"
          >
            Explore Now
          </Button>
          <Button
            size="full"
            variant="secondary"
            className="text-lg"
            animation="secondarySolid"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
