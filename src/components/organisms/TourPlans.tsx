import DestinationCard from "../molecules/DestinationCard";
import SectionHeading from "../molecules/SectionHeading";
import HomeSections from "./HomeSections";
import PackageCard from "./PackageCard";

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
];

const TourPlans = () => (
  <HomeSections
    title="Choose your tour"
    heading="Get The Best Plans For Your's"
  >
    <div className="grid grid-cols-3 gap-4">
      {destinations.map((dest, idx) => (
        <PackageCard key={idx} />
      ))}
    </div>
  </HomeSections>
);

export default TourPlans;
