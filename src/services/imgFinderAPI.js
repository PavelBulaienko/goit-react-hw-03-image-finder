const ACCECKEY = '21310790-6d6680180298903e41d8cd1c1';
const imgPerPage = 12;

const fetchByQuery = async (component) => {
  component.setState({ isLoading: true });
  try {
    const response = await fetch(
      `https://pixabay.com/api/?q=${component.state.qwery}&page=${component.state.currentPage}&key=${ACCECKEY}&image_type=photo&orientation=horizontal&per_page=${imgPerPage}`
    );
    const data = await response.json();

    component.setState({
      galleryList: [...component.state.galleryList, ...data.hits],
      isLoading: false,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default fetchByQuery;
