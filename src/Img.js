import React from 'react';
import './Img.css';
function randomSize(min, max) {
  let minVal = min || 200;
  let maxVal = max || 500;
  return Math.floor(Math.random() * (maxVal - minVal) + minVal);
}
class Img extends React.Component {
  state = {
    heightCustom: undefined,
    widthCustom: undefined,
    height: randomSize(),
    width: randomSize(),
    title: 'something here'
  };
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
      <div>
        <header className="App-header"></header>
        <main>
          <div className="grid-container">
            <div className="grid-item">
              <div className="grid-item-insides">
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
                <p>{this.props.text + ' ' + this.state.title}</p>
                {/* {this.props.children} */}
                <input
                  type="number"
                  min="100"
                  max="1000"
                  placeholder="Height"
                  onChange={this.receiveSize}
                />
                <input
                  type="number"
                  min="100"
                  max="1000"
                  placeholder="Width"
                  onChange={this.receiveSize}
                />
                <button onClick={this.changeImage}>new image</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Img;
