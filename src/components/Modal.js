import { Component } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  onEscKeydown = (e) => {
    'Escape' === e.code && this.props.closeModal();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscKeydown);
  }
  render() {
    return createPortal(
      <div className="Overlay" onClick={this.props.closeModal}>
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  closeModal: propTypes.func.isRequired,
};

export default Modal;
