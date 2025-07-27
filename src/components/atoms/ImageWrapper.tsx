const ImageWrapper = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className="absolute inset-0 w-full h-full object-cover"
  />
);

export default ImageWrapper;
