const ImageGalleryItem = ({ galleryList }) => {
  if (galleryList.length !== 0) {
    return galleryList.map((galleryItem) => (
      <li key={galleryItem.id}>
        <img
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
export default ImageGalleryItem;
