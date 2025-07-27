import ImageWrapper from "../atoms/ImageWrapper";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

interface DestinationCardProps {    
  title: string;
  packages: number;
  imageUrl: string;
  link: string;
}

const DestinationCard = ({ title, packages, imageUrl, link }: DestinationCardProps) => {
  return (
    <a href={link} className="px-1 w-4/5 xs:w-1/2 sm:w-1/3 lg:w-1/4 xl:flex-1 mb-4 md:px-2">
      <div className="relative z-10 w-full h-72 xs:h-80 group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900 z-20" />
        <ImageWrapper src={imageUrl} alt={title} />
        <div className="absolute z-20 inset-0 flex flex-col justify-end text-center text-white pb-10">
          <div className="relative after:absolute after:left-1/2 after:transition-all after:ease-in after:delay-300 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-white after:rounded-md group-hover:after:bg-primary-50 md:after:w-8">
            <Heading className="transition-all ease-in delay-300 duration-300 translate-y-6 group-hover:translate-y-0 text-2xl cursor-pointer group-hover:text-zinc-200 md:text-lg xl:text-xl">
              {title}
            </Heading>
            <Paragraph className="scale-0 transition-all ease-in duration-300 delay-300 mt-2 mb-3 group-hover:scale-100 group-hover:text-primary-50">
              {packages} packages
            </Paragraph>
          </div>
        </div>
      </div>
    </a>
  );
};

export default DestinationCard;
