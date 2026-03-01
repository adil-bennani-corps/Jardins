import Image from "next/image";

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  transformations?: {
    width?: number;
    height?: number;
    crop?: string;
    format?: string;
    quality?: string;
  };
}

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "demo";

function buildCloudinaryUrl(
  publicId: string,
  options: CloudinaryImageProps["transformations"] = {}
): string {
  const { width, height, crop = "fill", format = "auto", quality = "auto" } = options;
  const transforms: string[] = [];
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  transforms.push(`c_${crop}`, `f_${format}`, `q_${quality}`);

  const baseUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
  const transformStr = transforms.join(",");
  return `${baseUrl}/${transformStr}/${publicId}`;
}

export function CloudinaryImage({
  src,
  alt,
  width,
  height,
  className,
  fill,
  priority,
  sizes,
  transformations = {},
}: CloudinaryImageProps) {
  const isCloudinary = src.includes("cloudinary.com") || src.startsWith("jardins/");
  const imageSrc = isCloudinary
    ? buildCloudinaryUrl(src.replace(/^jardins\//, ""), {
        width: width || transformations.width,
        height: height || transformations.height,
        ...transformations,
      })
    : src;

  if (fill) {
    return (
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
