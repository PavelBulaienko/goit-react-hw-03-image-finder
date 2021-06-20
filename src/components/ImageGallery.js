import ImageGalleryItem from './ImageGalleryItem';
import propTypes from 'prop-types';

const ImageGallery = ({ galleryList, fancyBox }) => (
  <ul onClick={fancyBox} className="ImageGallery">
    <ImageGalleryItem galleryList={galleryList} />
  </ul>
);

ImageGallery.propTypes = {
  galleryList: propTypes.arrayOf(propTypes.object),
  fancyBox: propTypes.func.isRequired,
};

export default ImageGallery;
