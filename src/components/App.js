import '../styles/App.css';
import { Component } from 'react';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import LoaderImg from './LoaderImg';
import Modal from './Modal';

class App extends Component {
  state = {
    qwery: '',
    currentPage: 1,
    accessKey: '21310790-6d6680180298903e41d8cd1c1',
    galleryList: [],
    isLoading: false,
    isModalOpen: false,
    largeimageurl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.qwery !== this.state.qwery) {
      this.fetchByQuery();
    }
    if (prevState.currentPage !== this.state.currentPage) {
      this.fetchByQuery();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onSubmintHandle = (e) => {
    e.preventDefault();
    this.setState({
      galleryList: [],
      qwery: e.target.children[1].value,
      currentPage: 1,
    });
  };

  fetchByQuery = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=${this.state.qwery}&page=${this.state.currentPage}&key=${this.state.accessKey}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();

      this.setState({
        galleryList: [...this.state.galleryList, ...data.hits],
        isLoading: false,
      });
    } catch (err) {
      throw err;
    }
  };

  fancyBox = (e) => {
    this.setState({
      largeimageurl: e.target.getAttribute('data-largeimageurl'),
      isModalOpen: true,
    });
  };

  onBtnClickHandle = (prevState) => {
    this.setState({ currentPage: prevState.currentPage + 1 });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmintHandle={this.onSubmintHandle} />
        <ImageGallery
          galleryList={this.state.galleryList}
          fancyBox={this.fancyBox}
        />
        {this.state.galleryList.length !== 0 && !this.state.isLoading && (
          <Button
            onBtnClickHandle={() => {
              this.onBtnClickHandle(this.state);
            }}
          />
        )}
        {this.state.isLoading && <LoaderImg />}
        {this.state.isModalOpen && (
          <Modal closeModal={this.closeModal}>
            <img src={this.state.largeimageurl} alt="pic" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
