import PackagesHero from "@/components/molecules/PackagesHero";
import PackageDetails from "@/components/organisms/packages/PackageDetails";
import { getPackageDetails } from "@/lib/services/packages.service";

interface PackageDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function PackageDetailsPage({
  params,
}: PackageDetailsPageProps) {
  const { id } = await params;
  const packageDetailsData = await getPackageDetails(id);
  const { data, success } = packageDetailsData;
  if (!success || !data) {
    return <div>No Data Found</div>;
  }
  const { itineraries, inclusions, exclusions, highlights, ...packageDetails } =
    data;

  return (
    <>
      <PackagesHero packageDetails={packageDetails} />
      <PackageDetails
        inclusions={inclusions}
        exclusions={exclusions}
        itineraries={itineraries}
      />
    </>
  );
}
