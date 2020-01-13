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
      title: 'нажмите кнопку "new image" для случайного размера',
      basicValues: {
        saturate: 100,
        sepia: 0,
        opacity: 100,
        invert: 0,
        hue: 0,
        grayscale: 0,
        contrast: 100,
        brightness: 100,
        blur: 0
      },
      urls: [
        'https://picsum.photos/',
        'http://lorempixel.com/',
        'http://placeimg.com/',
        'https://loremflickr.com/'
      ]
    };
  }
  changeImage = () => {
    this.setState({
      height: this.state.heightCustom || randomSize(100, 1000),
      width: this.state.widthCustom || randomSize(100, 1000)
    });
    Object.entries(this.state.basicValues).forEach(entry => {
      let key = entry[0];
      let value = entry[1];
      this.props.applyFilter(key, value);
    });
  };
  receiveSize = event => {
    this.setState({
      [[event.target.placeholder].toString().toLowerCase() + 'Custom']:
        event.target.value || undefined
    });
  };
  // renderImage = () => {
  // };
  returnError = event => {
    this.onError = null;
    event.target.src =
      'https://vignette.wikia.nocookie.net/fategrandorder/images/1/1d/Error404.png/revision/latest?cb=20170204102207';
  };

  render() {
    // function renderImage(uno,des) {
    //   console.log(this);
    //   let http = new XMLHttpRequest();
    //   let url =
    //     'http://placeimg.com/' + uno + '/' + des;
    //   http.open('HEAD', url, false);
    //   http.send();
    //   if (http.status === 200) {
    //     console.log(url);
    //     return url.toString();
    //   }
      // // 'https://picsum.photos/' +
      // // 'http://lorempixel.com/' +
      // 'http://placeimg.com/' +
      // // 'https://loremflickr.com/' +
      // this.state.height +
      // '/' +
      // this.state.width
      // // this.renderImage
    // }
    let imageStyle = {
      filter:
        'saturate(' +
        this.props.saturate +
        '%)' +
        ' ' +
        'invert(' +
        this.props.invert +
        '%)' +
        ' ' +
        'sepia(' +
        this.props.sepia +
        '%)' +
        ' ' +
        'opacity(' +
        this.props.opacity +
        '%)' +
        ' ' +
        'hue-rotate(' +
        this.props.hue +
        'deg)' +
        ' ' +
        'grayscale(' +
        this.props.grayscale +
        '%)' +
        ' ' +
        'contrast(' +
        this.props.contrast +
        '%)' +
        ' ' +
        'brightness(' +
        this.props.brightness +
        '%)' +
        ' ' +
        'blur(' +
        this.props.blur +
        'px)'
    };
    return (
      <div className="container">
        <div className="item">
          <div className="item-insides">
            <img
              // TODO добавить все фильтры со стандартными значениями, получать через родителя из другого ребенка
              src={
                // 'https://picsum.photos/' +
                // 'http://lorempixel.com/' +
                'http://placeimg.com/' +
                // 'https://loremflickr.com/' +
                this.state.height +
                '/' +
                this.state.width
                // renderImage(this.state.height, this.state.width)
              }
              onError={this.returnError}
              alt="something random"
              // style={{opacity: this.state.opacity/100}}
              style={imageStyle}
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
