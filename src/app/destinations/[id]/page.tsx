import PagesHero from "@/components/molecules/PagesHero";
import DestinationPackages from "@/components/organisms/destinations/DestinationPackages";
import { getDestinationByName } from "@/lib/services/destination.service";
import NotFound from "@/app/not-found";
import { Package } from "@/lib/types";
import FeaturedPackageCard from "@/components/organisms/packages/FeaturedPackageCard";

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
  const {
    name,
    heroTitle,
    description,
    imageUrl,
    country,
    packages = [],
  } = data;

  // Filter featured and other packages
  const featuredPackage = packages.find((pkg: Package) => pkg.featured);
  const otherPackages = packages.filter((pkg: Package) => !pkg.featured);

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
      <div className="container mx-auto px-6 py-16">
        {featuredPackage && (
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-foreground text-center">
              Featured Package
            </h2>
            <FeaturedPackageCard
              featuredPackage={featuredPackage}
              country={country}
              name={name}
            />
          </section>
        )}

        <DestinationPackages name={name} destPackages={otherPackages} />
      </div>
    </>
  );
}
