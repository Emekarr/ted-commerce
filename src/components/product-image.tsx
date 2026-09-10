import Image, { type ImageProps } from "next/image";

type ProductImageProps = Omit<ImageProps, "alt" | "height" | "sizes" | "width"> & {
  alt: string;
};

export function ProductImage(props: ProductImageProps) {
  return <Image {...props} alt={props.alt} width={400} height={400} sizes="(max-width: 768px) 50vw, 400px" />;
}
