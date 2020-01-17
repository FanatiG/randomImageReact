import React from 'react';
import Slider from './filterSlider';
import './styles/sidebarRender.css';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [
        'saturate',
        'sepia',
        'opacity',
        'invert',
        'hue',
        'grayscale',
        'contrast',
        'brightness',
        'blur'
      ],
      min: {
        saturate: 0,
        sepia: 0,
        opacity: 0,
        invert: 0,
        hue: 0,
        grayscale: 0,
        contrast: 0,
        brightness: 0,
        blur: 0
      },
      max: {
        saturate: 200,
        sepia: 100,
        opacity: 100,
        invert: 100,
        hue: 360,
        grayscale: 100,
        contrast: 200,
        brightness: 200,
        blur: 100
      },
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
  renderSlider() {
    const renderSliders = this.state.name.map(sliderName => (
      <Slider
        key={sliderName}
        name={sliderName}
        min={this.state.min[sliderName]}
        max={this.state.max[sliderName]}
        value={this.props[sliderName]}
        basicValue={this.state.basicValue[sliderName]}
        applyFilter={this.props.applyFilter}
        resetFilter={this.props.resetFilter}></Slider>
    ));
    return (
      <div className="sidebar-params">
        <button
          className="reset-all-filters"
          onClick={() => {
            this.props.resetFilers();
          }}>
          reset all filters
        </button>
        {renderSliders}
      </div>
    );
  }
  render() {
    return (
      <div className="sidebar">
        <p className="sidebar-text">&#10809; more options &#10809;</p>
        {this.renderSlider()}
      </div>
    );
  }
}

export default Sidebar;
