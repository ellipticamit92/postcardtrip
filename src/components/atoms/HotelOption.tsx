import { Star } from "lucide-react";

const HotelOption = ({
  children,
  selected = false,
}: {
  children: React.ReactNode;
  selected?: boolean;
}) => {
  return (
    <div
      className={`flex p-1 px-3 items-center border cursor-pointer hover:bg-secondary hover:border-secondary ${
        selected
          ? "bg-primary-700 border-primary-700 text-white"
          : "border-slate-400 text-zinc-500 hover:text-white hover:border-secondary-500"
      }`}
    >
      <span className="text-sm">{children}</span>
      <Star className="w-3 h-3 ml-2" fill="currentColor" />
    </div>
  );
};

export default HotelOption;
