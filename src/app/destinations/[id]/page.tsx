import { notFound } from "next/navigation";
import PagesHero from "@/components/molecules/PagesHero";
import DestinationPackages from "@/components/organisms/destinations/DestinationPackages";

const destinations = [
  {
    id: "kerala",
    title: "Kerala",
    packages: 5,
    imageUrl: "/destination/card/kerala-destination-card-img.png",
    description:
      "Kerala, known as God's Own Country, is famous for its backwaters, beaches, and lush greenery.",
  },
  {
    id: "dubai",
    title: "Dubai",
    packages: 4,
    imageUrl: "/destination/card/dubai-destination-card-img.png",
    description:
      "Rajasthan is renowned for its royal palaces, desert landscapes, and vibrant culture.",
  },
  {
    id: "himachal",
    title: "Himachal",
    packages: 4,
    imageUrl: "/destination/card/rajasthan-destination-card-img.png",
    description:
      "Rajasthan is renowned for its royal palaces, desert landscapes, and vibrant culture.",
  },
  {
    id: "rajasthan",
    title: "Rajasthan",
    packages: 4,
    imageUrl: "/destination/card/rajasthan-destination-card-img.png",
    description:
      "Rajasthan is renowned for its royal palaces, desert landscapes, and vibrant culture.",
  },
];

interface DestinationDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function DestinationDetailPage({
  params,
}: DestinationDetailPageProps) {
  const { id } = await params;
  const destination = destinations.find(
    (dest) => dest.id.toLowerCase() === id.toLowerCase()
  );

  if (!destination) return notFound();

  return (
    <>
      <PagesHero
        badgeText="Kerala Packages"
        title="Discover Amazing Kerala Packages"
        description="Explore our carefully curated travel packages designed to create unforgettable memories and extraordinary experiences."
      />
      <DestinationPackages />
    </>
  );
}
