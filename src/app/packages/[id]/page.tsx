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

  return (
    <>
      <PackagesHero packageDetails={packageDetailsData?.data} />
      <PackageDetails />
    </>
  );
}
