const PackagePrice = ({ amount }: { amount: string }) => {
  return (
    <div className="flex flex-col items-end justify-end">
      <div className="text-xs lg:text-sm">per person</div>
      <h2 className="text-4xl text-secondary-500 leading-8 font-neue font-bold flex items-center sm:text-3xl gap-1">
        <span className="">₹</span>
        <span>{amount}</span>
      </h2>
    </div>
  );
};

export default PackagePrice;
