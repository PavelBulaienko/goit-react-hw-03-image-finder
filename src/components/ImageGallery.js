import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ galleryList }) => (
  <ul onClick={(e) => console.log(e.target)} className="ImageGallery">
    <ImageGalleryItem galleryList={galleryList} />
  </ul>
);

export default ImageGallery;
