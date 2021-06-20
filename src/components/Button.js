import propTypes from 'prop-types';

const Button = ({ onBtnClickHandle }) => (
  <button className="Button" onClick={onBtnClickHandle} type="button">
    Load more
  </button>
);

Button.propTypes = {
  onBtnClickHandle: propTypes.func.isRequired,
};

export default Button;
