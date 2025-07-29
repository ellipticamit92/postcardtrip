const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-start justify-start">
          <h2 className="relative leading-5 font-light text-md pb-2 text-zinc-200 mb-2 xs:text-lg lg:text-xl lg:tracking-wider lg:text-white after:absolute after:bottom-0 after:left-0 after:w-20 after:h-[3px] after:bg-fdivider">
            {title}
          </h2>
          <ul className="flex flex-col mt-2 space-y-2 lg:space-y-1 text-sm xs:text-sm lg:text-base">
            {children}
          </ul>
        </div>
      );
}
export default  FooterSection;
