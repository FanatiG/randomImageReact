import React from 'react';
import './styles/imageRender.css';
function randomSize(min, max) {
  let minVal = min || 200;
  let maxVal = max || 500;
  return Math.floor(Math.random() * (maxVal - minVal) + minVal);
}
class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
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
  componentDidMount() {
    this.renderImage();
  }
  changeImage = async () => {
    await this.setState({
      height: this.state.heightCustom || randomSize(100, 1000),
      width: this.state.widthCustom || randomSize(100, 1000)
    });
    Object.entries(this.state.basicValues).forEach(entry => {
      let key = entry[0];
      let value = entry[1];
      this.props.applyFilter(key, value);
    });
    this.renderImage();
  };
  receiveSize = event => {
    this.setState({
      [[event.target.name] + 'Custom']: event.target.value || undefined
    });
  };
  renderImage = async () => {
    this.setState({
      imageUrl:
        'https://jamescunion97.files.wordpress.com/2015/03/giphy.gif'
    });
    const fetchImageUrl = await fetch(
      'https://source.unsplash.com/' +
        this.state.width +
        'x' +
        this.state.height
    ).then(response => response);
    if (fetchImageUrl.ok && this.state.height && this.state.width) {
      this.setState({
        imageUrl: fetchImageUrl.url
      });
    } else {
      this.setState({
        imageUrl:
          'https://vignette.wikia.nocookie.net/fategrandorder/images/1/1d/Error404.png/revision/latest?cb=20170204102207'
      });
    }
  };
  getImg = () => {
    return this.state.imageUrl;
  };
  renderErrorImg = (event) => {
    event.target.src = 'https://jamescunion97.files.wordpress.com/2015/03/giphy.gif';
  }
  render() {
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
            id="scream"
              src={this.state.imageUrl}
              alt="something random"
              style={imageStyle}
              onError={this.renderErrorImg}
            />
            <canvas width={this.state.width} height={this.state.height} id="myCanvas"></canvas>
            <p>
              {this.props.text}
              <br />
              {this.state.title}
            </p>
            {/* {this.props.children} */}
            <input
              name="height"
              type="number"
              min="100"
              max="10000"
              placeholder={'Height (' + this.state.height + ')'}
              onChange={this.receiveSize}
            />
            <input
              name="width"
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
