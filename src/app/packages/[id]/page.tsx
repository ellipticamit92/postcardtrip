import PackagesHero from "@/components/molecules/PackagesHero";
import PackageDetails from "@/components/organisms/packages/PackageDetails";
import {
  getPackageDetails,
  getPackageReview,
  getSimilarPackage,
} from "@/lib/services/packages.service";

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

  const itinerariesArray = itineraries?.[0]?.day ?? [];

  const { pid } = packageDetails;
  const did = packageDetails?.destination?.did;
  const pkgReviews = await getPackageReview(pid);
  const similarPkgData = await getSimilarPackage(did, pid);

  return (
    <>
      <PackagesHero packageDetails={packageDetails} />
      <PackageDetails
        inclusions={inclusions}
        exclusions={exclusions}
        itineraries={itinerariesArray}
        highlights={highlights}
        packageDetails={packageDetails}
        pkgReviews={pkgReviews.data ?? []}
        similarPkgData={similarPkgData.data ?? []}
      />
    </>
  );
}
