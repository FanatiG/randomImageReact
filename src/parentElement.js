import React from 'react';
import Img from './imageRender';
import Sidebar from './sidebarRender';
import './parentElement.css';

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
      blur: 0
    };
  }
  applyFilter = (filterName, filterValue) => {
    this.setState({
      [filterName]: Number(filterValue)
    });
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
          applyFilter={this.applyFilter}></Sidebar>
      </div>
    );
  }
}

export default Main;
