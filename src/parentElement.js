import React from 'react';
import Img from './imageRender';
import Sidebar from './sidebarRender';
import './styles/parentElement.css';
// import Download from './downloadImage';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textT: [
        { text: 'Введите свой размер или ' },
        { text: 'second img' },
        { text: 'third img' }
      ],
      saturate: 100,
      sepia: 0,
      opacity: 100,
      invert: 0,
      hue: 0,
      grayscale: 0,
      contrast: 100,
      brightness: 100,
      blur: 0,
      basicValue: {
        saturate: 100,
        sepia: 0,
        opacity: 100,
        invert: 0,
        hue: 0,
        grayscale: 0,
        contrast: 100,
        brightness: 100,
        blur: 0
      }
    };
  }
  resetFilers = () => {
    for (let elem in this.state.basicValue) {
      this.resetFilter([elem], this.state[elem]);
    }
  };
  applyFilter = (filterName, filterValue) => {
    this.setState({
      [filterName]: Number(filterValue)
    });
  };
  resetFilter = (filterName, filterValue) => {
    let diff = 9;
    if (filterName === 'hue' || filterName[0] === 'hue') {
      diff = diff * 3.6;
    }
    let incomingValue = filterValue;
    let basicValue = this.state.basicValue[filterName];
    let resetInterval = setInterval(() => {
      if (incomingValue > basicValue) {
        incomingValue -= diff;
        this.setState({
          [filterName]: Math.round(incomingValue)
        });
      }
      if (incomingValue < basicValue) {
        incomingValue += diff;
        this.setState({
          [filterName]: Math.round(incomingValue)
        });
      }
      if (incomingValue / basicValue > 1 && incomingValue - basicValue < diff) {
        clearInterval(resetInterval);
        this.setState({
          [filterName]: basicValue
        });
      }
    }, 1);
  };
  render() {
    const text = this.state.textT;
    return (
      <div className="App">
        <Img
          text={text[0].text}
          saturate={this.state.saturate}
          sepia={this.state.sepia}
          opacity={this.state.opacity}
          invert={this.state.invert}
          hue={this.state.hue}
          grayscale={this.state.grayscale}
          contrast={this.state.contrast}
          brightness={this.state.brightness}
          blur={this.state.blur}
          applyFilter={this.applyFilter}>
          {/* <p>child dom element</p> */}
        </Img>
        <Sidebar
          saturate={this.state.saturate}
          sepia={this.state.sepia}
          opacity={this.state.opacity}
          invert={this.state.invert}
          hue={this.state.hue}
          grayscale={this.state.grayscale}
          contrast={this.state.contrast}
          brightness={this.state.brightness}
          blur={this.state.blur}
          applyFilter={this.applyFilter}
          resetFilter={this.resetFilter}
          resetFilers={this.resetFilers}></Sidebar>
        {/* <Download></Download> */}
      </div>
    );
  }
}

export default Main;
