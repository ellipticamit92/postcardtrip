import DestinationCard from "../molecules/DestinationCard";
import HomeSections from "./HomeSections";

const destinations = [
  {
    title: "Kerala",
    packages: 5,
    imageUrl: "/destination/card/kerala-destination-card-img.png",
    link: "/destination/kerala",
  },
  {
    title: "Rajasthan",
    packages: 4,
    imageUrl: "/destination/card/rajasthan-destination-card-img.png",
    link: "/destination/rajasthan",
  },
  {
    title: "Himachal",
    packages: 10,
    imageUrl: "/destination/card/himachal-destination-card-img.png",
    link: "/destination/himachal",
  },
  {
    title: "Dubai",
    packages: 13,
    imageUrl: "/destination/card/dubai-destination-card-img.png",
    link: "/destination/dubai",
  },
  {
    title: "Bali",
    packages: 223,
    imageUrl: "/destination/card/bali-destination-card-img.png",
    link: "/destination/bali",
  },
  {
    title: "Tamil Nadu",
    packages: 10,
    imageUrl: "/destination/card/tamil-nadu-destination-card-img.png",
    link: "/destination/tamil-nadu",
  },
];

const TrendingDestinations = () => (
  <HomeSections title="Destination" heading="Trending Destination">
    <div className="-mx-2 flex flex-wrap justify-center">
      {destinations.map((dest, idx) => (
        <DestinationCard key={idx} {...dest} />
      ))}
    </div>
  </HomeSections>
);

export default TrendingDestinations;
