import PackagesHero from "@/components/molecules/PackagesHero";
import PackageDetails from "@/components/organisms/packages/PackageDetails";

export default async function PackagesPage() {
  return (
    <>
      <PackagesHero />
      <PackageDetails />
    </>
  );
}
