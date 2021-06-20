import propTypes from 'prop-types';

const ImageGalleryItem = ({ galleryList }) => {
  if (galleryList.length !== 0) {
    return galleryList.map((galleryItem) => (
      <li key={galleryItem.id}>
        <img
          data-largeimageurl={galleryItem.largeImageURL}
          className="ImageGalleryItem-image"
          alt={galleryItem.tags}
          src={galleryItem.webformatURL}
        />
      </li>
    ));
  } else {
    return <h1>Type something...</h1>;
  }
};

ImageGalleryItem.propTypes = {
  galleryList: propTypes.arrayOf(propTypes.object),
};

export default ImageGalleryItem;
