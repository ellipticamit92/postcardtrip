import DestinationCard from "@/components/molecules/DestinationCard";
import DestinationHero from "@/components/molecules/DestinationHero";
import SectionHeading from "@/components/molecules/SectionHeading";
import { getAll } from "@/lib/services/destination.service";

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

export default async function DestinationPage() {
  const destData = await getAll();

  if (destData?.success === false) {
    return <div>No Data Found</div>;
  }
  return (
    <>
      <DestinationHero />
      <div className="container mx-auto px-4 py-8">
        <SectionHeading
          title="Amazing Destinations"
          description="Explore Our Destinations"
        />
        <div className="flex flex-wrap justify-center -mx-2">
          {destinations.map((dest, idx) => (
            <DestinationCard key={idx} {...dest} />
          ))}
        </div>
      </div>
    </>
  );
}
