"use client";

import { Plane } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import DestinationFilters from "@/components/molecules/DestinationFilters";
import { Package } from "@/lib/types";
import PackageCard from "../PackageCard";

const DestinationPackages = ({
  name,
  destPackages,
}: {
  name: string;
  destPackages: Package[];
}) => {
  const [filters, setFilters] = useState({
    priceRange: [10000, 150000] as [number, number],
    duration: [] as string[],
    rating: 0,
    categories: [] as string[],
    sortBy: "popular",
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter and sort packages
  const filteredPackages = useMemo(() => {
    const filtered = destPackages.filter((pkg) => {
      // Price filter
      if (
        pkg.basePrice < filters.priceRange[0] ||
        pkg.basePrice > filters.priceRange[1]
      ) {
        return false;
      }

      // Duration filter
      if (filters.duration.length > 0) {
        const matchesDuration = filters.duration.some((range) => {
          switch (range) {
            case "1-3":
              return pkg.day >= 1 && pkg.day <= 3;
            case "4-6":
              return pkg.day >= 4 && pkg.day <= 6;
            case "7-9":
              return pkg.day >= 7 && pkg.day <= 9;
            case "10+":
              return pkg.day >= 10;
            default:
              return false;
          }
        });
        if (!matchesDuration) return false;
      }

      // Rating filter
      if (filters.rating > 0 && Number(pkg.rating) < filters.rating) {
        return false;
      }

      // Category filter
      // if (filters.categories.length > 0) {
      //   const hasMatchingCategory = filters.categories.some((category) =>
      //     pkg.categories.includes(category)
      //   );
      //   if (!hasMatchingCategory) return false;
      // }

      return true;
    });

    // Sort packages
    switch (filters.sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.basePrice - b.basePrice);
        break;
      case "price-high":
        filtered.sort((a, b) => b.basePrice - a.basePrice);
        break;
      case "rating":
        filtered.sort((a, b) => Number(b.rating) - Number(a.rating));
        break;
      case "duration":
        filtered.sort((a, b) => a.day - b.day);
        break;
      case "popular":
      default:
        // Keep default order for popular
        break;
    }

    return filtered;
  }, [filters]);

  const otherPackages = filteredPackages.filter((pkg) => !pkg.featured);

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      priceRange: [10000, 150000],
      duration: [],
      rating: 0,
      categories: [],
      sortBy: "popular",
    });
  };

  return (
    <>
      {/* Filters and All Packages Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-foreground">
            All {name} Packages
          </h2>
          <div className="text-sm text-muted-foreground">
            {otherPackages.length} package
            {otherPackages.length !== 1 ? "s" : ""} found
          </div>
        </div>

        {/* Filter Component */}
        <div className="mb-8">
          <DestinationFilters
            filters={filters}
            onFiltersChange={handleFiltersChange}
            onClearFilters={handleClearFilters}
            isOpen={isFilterOpen}
            onToggle={() => setIsFilterOpen(!isFilterOpen)}
          />
        </div>

        {otherPackages?.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                <Plane className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                No packages found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or browse our featured destinations
                instead.
              </p>
              <Button variant="outline" onClick={handleClearFilters}>
                Clear All Filters
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPackages?.map((pkg: Package) => (
              <PackageCard key={pkg.pid} packageData={pkg} />
            ))}
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="mt-20 text-center bg-gradient-card rounded-2xl p-12 shadow-soft">
        <h2 className="text-3xl font-bold mb-4 text-foreground">
          Can&pos;t Find Your Perfect Trip?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Our travel experts can create a custom itinerary tailored specifically
          to your preferences, budget, and travel style.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="pricing" size="lg">
            Get Custom Quote
          </Button>
          <Button variant="customize" size="lg">
            Contact Travel Expert
          </Button>
        </div>
      </section>
    </>
  );
};

export default DestinationPackages;
