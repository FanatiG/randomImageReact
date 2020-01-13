import React from 'react';
import Slider from './filterSlider';
import './sidebarRender.css';

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
      min: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      max: [200, 100, 100, 100, 360, 100, 200, 200, 100],
      basicValue: [100, 0, 100, 0, 0, 0, 100, 100, 0]
    };
  }
  renderSlider() {
    // this.state.name.forEach(()=>{
    return (
      <div className="sidebar-params">
        <Slider
          name={this.state.name[0]}
          min={this.state.min[0]}
          max={this.state.max[0]}
          value={this.props.saturate}
          basicValue={this.state.basicValue[0]}
          applyFilter={this.props.applyFilter}></Slider>
        <Slider
          name={this.state.name[1]}
          min={this.state.min[1]}
          max={this.state.max[1]}
          value={this.props.sepia}
          basicValue={this.state.basicValue[1]}
          applyFilter={this.props.applyFilter}></Slider>
        <Slider
          name={this.state.name[2]}
          min={this.state.min[2]}
          max={this.state.max[2]}
          value={this.props.opacity}
          basicValue={this.state.basicValue[2]}
          applyFilter={this.props.applyFilter}></Slider>
        <Slider
          name={this.state.name[3]}
          min={this.state.min[3]}
          max={this.state.max[3]}
          value={this.props.invert}
          basicValue={this.state.basicValue[3]}
          applyFilter={this.props.applyFilter}></Slider>
        <Slider
          name={this.state.name[4]}
          min={this.state.min[4]}
          max={this.state.max[4]}
          value={this.props.hue}
          basicValue={this.state.basicValue[4]}
          applyFilter={this.props.applyFilter}></Slider>
        <Slider
          name={this.state.name[5]}
          min={this.state.min[5]}
          max={this.state.max[5]}
          value={this.props.grayscale}
          basicValue={this.state.basicValue[5]}
          applyFilter={this.props.applyFilter}></Slider>
        <Slider
          name={this.state.name[6]}
          min={this.state.min[6]}
          max={this.state.max[6]}
          value={this.props.contrast}
          basicValue={this.state.basicValue[6]}
          applyFilter={this.props.applyFilter}></Slider>
        <Slider
          name={this.state.name[7]}
          min={this.state.min[7]}
          max={this.state.max[7]}
          value={this.props.brightness}
          basicValue={this.state.basicValue[7]}
          applyFilter={this.props.applyFilter}></Slider>
        <Slider
          name={this.state.name[8]}
          min={this.state.min[8]}
          max={this.state.max[8]}
          value={this.props.blur}
          basicValue={this.state.basicValue[8]}
          applyFilter={this.props.applyFilter}></Slider>
      </div>
    );
    // })
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
