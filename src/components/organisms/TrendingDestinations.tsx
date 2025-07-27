import Heading from "../atoms/Heading";
import DestinationCard from "../molecules/DestinationCard";

const destinations = [
  { title: "Kerala", packages: 5, imageUrl: "/destination/card/kerala-destination-card-img.jpg", link: "/destination/kerala" },
  { title: "Rajasthan", packages: 4, imageUrl: "/destination/card/rajasthan-destination-card-img.jpg", link: "/destination/rajasthan" },
  { title: "Himachal", packages: 10, imageUrl: "/destination/card/himachal-destination-card-img.jpg", link: "/destination/himachal" },
  { title: "Dubai", packages: 13, imageUrl: "/destination/card/dubai-destination-card-img.jpg", link: "/destination/dubai" },
  { title: "Bali", packages: 223, imageUrl: "/destination/card/bali-destination-card-img.jpg", link: "/destination/bali" },
  { title: "Tamil Nadu", packages: 10, imageUrl: "/destination/card/tamil-nadu-destination-card-img.jpg", link: "/destination/tamil-nadu" },
];

const TrendingDestinations = () => (
  <section className="py-5 relative z-10">
    <div className="container mx-auto pt-10">
      <div className="flex flex-col items-center">
        <Heading className="text-primary-50 text-lg font-light uppercase mb-1 tracking-widest sm:text-md lg:text-xl">Destination</Heading>
        <Heading className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3">Trending Destination</Heading>
       
      </div>
      <div className="mt-10 mb-8">
        <div className="-mx-2 flex flex-wrap justify-center">
          {destinations.map((dest, idx) => (
            <DestinationCard key={idx} {...dest} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrendingDestinations;
