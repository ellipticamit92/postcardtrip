import { notFound } from "next/navigation";
import PagesHero from "@/components/molecules/PagesHero";
import DestinationPackages from "@/components/organisms/destinations/DestinationPackages";
import { getDestinationByName } from "@/lib/services/destination.service";
import NotFound from "@/app/not-found";

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
  const destData = await getDestinationByName(id);

  if (destData?.success === false) {
    return <NotFound />;
  }

  const data = destData?.data;
  const { name, heroTitle, description, imageUrl } = data;

  const destinationName = id.charAt(0).toUpperCase() + id.slice(1);
  const badgeText = destinationName + " Packages";

  return (
    <>
      <PagesHero
        badgeText={badgeText}
        title={heroTitle}
        description={description}
        src={imageUrl}
      />
      <DestinationPackages name={name} />
    </>
  );
}
