import { TrendingUp } from "lucide-react";
import HomeSections from "./HomeSections";

const TourPlans = () => (
  <HomeSections
    title="Choose your tour"
    heading="Get The Best Plans For Your's"
    description="Explore our curated tour plans designed to offer you the best experiences at your favorite destinations. Whether you're looking for adventure, relaxation, or cultural immersion, we have the perfect package for you."
    icon={<TrendingUp className="w-6 h-6 text-primary" />}
    variant="bg-adventure"
  >
    <div className="grid grid-cols-3 gap-4"></div>
  </HomeSections>
);

export default TourPlans;
