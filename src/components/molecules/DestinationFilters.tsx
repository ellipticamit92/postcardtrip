"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, SlidersHorizontal } from "lucide-react";
import { toIndianCurrency } from "@/lib/helper";

interface FilterState {
  priceRange: [number, number];
  duration: string[];
  rating: number;
  categories: string[];
  sortBy: string;
}

interface DestinationFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

const DestinationFilters = ({
  filters,
  onFiltersChange,
  onClearFilters,
  isOpen,
  onToggle,
}: DestinationFiltersProps) => {
  const durationOptions = [
    { value: "1-3", label: "1-3 Days" },
    { value: "4-6", label: "4-6 Days" },
    { value: "7-9", label: "7-9 Days" },
    { value: "10+", label: "10+ Days" },
  ];

  const categoryOptions = [
    { value: "adventure", label: "Adventure" },
    { value: "beach", label: "Beach & Coastal" },
    { value: "cultural", label: "Cultural Heritage" },
    { value: "mountain", label: "Mountain & Hiking" },
    { value: "luxury", label: "Luxury" },
    { value: "budget", label: "Budget Friendly" },
  ];

  const sortOptions = [
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "duration", label: "Duration" },
    { value: "popular", label: "Most Popular" },
  ];

  const updateFilters = (
    key: keyof FilterState,
    value: FilterState[keyof FilterState]
  ) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleDuration = (duration: string) => {
    const newDurations = filters.duration.includes(duration)
      ? filters.duration.filter((d) => d !== duration)
      : [...filters.duration, duration];
    updateFilters("duration", newDurations);
  };

  const toggleCategory = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    updateFilters("categories", newCategories);
  };

  const activeFiltersCount =
    (filters.priceRange[0] > 500 || filters.priceRange[1] < 5000 ? 1 : 0) +
    filters.duration.length +
    (filters.rating > 0 ? 1 : 0) +
    filters.categories.length;

  return (
    <div className="space-y-4">
      {/* Filter Toggle Button */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onToggle}
          className="flex items-center gap-2"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {activeFiltersCount > 0 && (
            <Badge variant="default" className="ml-2 bg-ocean text-white">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select
            value={filters.sortBy}
            onValueChange={(value: string) => updateFilters("sortBy", value)}
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select sorting" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option: { value: string; label: string }) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Filter Panel */}
      {isOpen && (
        <Card className="shadow-soft">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Filter Destinations</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClearFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear All
                </Button>
                <Button variant="ghost" size="sm" onClick={onToggle}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Price Range */}
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Price Range</h4>
              <div className="px-3">
                <Slider
                  value={filters.priceRange}
                  onValueChange={(value: number[]) =>
                    updateFilters("priceRange", value as [number, number])
                  }
                  max={5000}
                  min={500}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>{toIndianCurrency(filters.priceRange[0])}</span>
                  <span>{toIndianCurrency(filters.priceRange[1])}</span>
                </div>
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Trip Duration</h4>
              <div className="grid grid-cols-2 gap-2">
                {durationOptions.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`duration-${option.value}`}
                      checked={filters.duration.includes(option.value)}
                      onCheckedChange={() => toggleDuration(option.value)}
                    />
                    <label
                      htmlFor={`duration-${option.value}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Minimum Rating */}
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Minimum Rating</h4>
              <div className="px-3">
                <Slider
                  value={[filters.rating]}
                  onValueChange={(value: number[]) =>
                    updateFilters("rating", value[0])
                  }
                  max={5}
                  min={0}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>Any Rating</span>
                  <span>
                    {filters.rating > 0 ? `${filters.rating}+ Stars` : "All"}
                  </span>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Categories</h4>
              <div className="grid grid-cols-2 gap-2">
                {categoryOptions.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`category-${option.value}`}
                      checked={filters.categories.includes(option.value)}
                      onCheckedChange={() => toggleCategory(option.value)}
                    />
                    <label
                      htmlFor={`category-${option.value}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DestinationFilters;
