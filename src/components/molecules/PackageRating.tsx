import { Star } from "lucide-react";

const PackageRating = ({
  location,
  rating,
  count,
}: {
  location: string;
  rating: number;
  count: number;
}) => {
  return (
    <div className="flex items-center justify-between text-primary-800 text-xs md:text-sm xl-base">
      <div>{location}</div>
      <div className="flex items-center font-bold">
        <span className="text-primary-50">
          <Star size={20} />
        </span>
        <span>
          {rating} ({count})
        </span>
      </div>
    </div>
  );
};

export default PackageRating;
