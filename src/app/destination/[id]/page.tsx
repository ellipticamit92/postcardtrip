import { notFound } from "next/navigation";
import Breadcrumb from "@/components/atoms/Breadcrumb";
import DestinationBanner from "@/components/organisms/DestinationBanner";

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
  // Add more destinations as needed
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
    <div className="w-full">
      <DestinationBanner />
      <Breadcrumb />
      {/* <div className="flex flex-col items-center relative">
        <Paragraph className="mb-2 text-lg text-center">
          {destination.description}
        </Paragraph>
        <Paragraph className="text-center text-primary-500 font-semibold">
          {destination.packages} packages available
        </Paragraph>
      </div> */}
    </div>
  );
}
