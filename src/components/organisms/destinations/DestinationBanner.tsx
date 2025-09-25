import Heading from "@/components/atoms/Heading";
import { Button } from "@/components/ui/button";
import React from "react";

export type DestinationBannerProps = {
  bannerImage?: string;
  tagLine?: string;
  destination?: string;
  subheading?: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const DestinationBanner: React.FC<DestinationBannerProps> = ({
  bannerImage = "/destination/card/kerala-destination-card-img.png",
  tagLine = "FOR BEST",
  destination = "KERALA",
  subheading = "HOLIDAY PACKAGES",
  buttonText = "CLICK HERE",
  onButtonClick,
}) => (
  <section
    className="w-screen h-auto bg-cover bg-center bg-no-repeat relative text-white"
    style={{
      backgroundImage: `url(${bannerImage})`,
    }}
  >
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
    <div className="container relative z-20 h-full font-bold text-shadow">
      <div className="w-full lg:w-2/5">
        <div className="p-12 bg-black opacity-70 h-full flex flex-col text-white text-center space-y-2">
          <Heading className="text-4xl md:text-6xl mt-3 tracking-wider">
            {tagLine}
          </Heading>
          <Heading className="text-5xl md:text-7xl mb-2 text-primary-400 tracking-wider">
            {destination}
          </Heading>
          <Heading className="text-xl md:text-[1.7rem] tracking-wider">
            {subheading}
          </Heading>
          <br />
          <div className="w-48 mx-auto">
            <Button onClick={onButtonClick}>{buttonText}</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DestinationBanner;
