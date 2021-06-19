import { Component } from 'react';
import Loader from 'react-loader-spinner';
export default class LoaderImg extends Component {
  render() {
    return (
      <Loader
        className="Loader"
        type="BallTriangle"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000}
      />
    );
  }
}
