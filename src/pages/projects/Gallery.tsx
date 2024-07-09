import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

interface Props {
  images: ReactImageGalleryItem[];
}

export const Gallery = ({ images }: Props) => {
  return <ImageGallery items={images} />;
};
