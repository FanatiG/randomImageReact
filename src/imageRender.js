import React from 'react';
import './imageRender.css';
function randomSize(min, max) {
  let minVal = min || 200;
  let maxVal = max || 500;
  return Math.floor(Math.random() * (maxVal - minVal) + minVal);
}
class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heightCustom: undefined,
      widthCustom: undefined,
      height: randomSize(),
      width: randomSize(),
      title: 'просто нажмите кнопку для случайного размера'
    };
  }
  changeImage = () => {
    console.log(this.state);
    this.setState({
      height: this.state.heightCustom || randomSize(100, 1000),
      width: this.state.widthCustom || randomSize(100, 1000)
    });
  };
  receiveSize = event => {
    this.setState({
      [[event.target.placeholder].toString().toLowerCase() + 'Custom']:
        event.target.value || undefined
    });
    console.log(this.state);
  };
  returnError = event => {
    this.onError = null;
    event.target.src =
      'https://vignette.wikia.nocookie.net/fategrandorder/images/1/1d/Error404.png/revision/latest?cb=20170204102207';
  };
  render() {
    return (
      <div className="container">
        <div className="item">
          <div className="item-insides">
            <img
              src={
                'https://picsum.photos/' +
                this.state.height +
                '/' +
                this.state.width
              }
              onError={this.returnError}
              alt="something random"
            />
            <p>
              {this.props.text}
              <br />
              {this.state.title}
            </p>
            {/* {this.props.children} */}
            <input
              type="number"
              min="100"
              max="10000"
              placeholder={'Height (' + this.state.height + ')'}
              onChange={this.receiveSize}
            />
            <input
              type="number"
              min="100"
              max="10000"
              placeholder={'Width (' + this.state.width + ')'}
              onChange={this.receiveSize}
            />
            <button onClick={this.changeImage}>new image</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Img;
