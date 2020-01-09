import React from 'react';
import './sidebarRender.css';
import ImgStyle from './imageRender.css';
console.log(ImgStyle);
class Sidebar extends React.Component {
  state = {};

  render() {
    return (
      <div className="sidebar">
        <p className="sidebar-text">&#10809; more options &#10809;</p>
        <div className="sidebar-params">
          <div className="slider-container">
            <p>SATURATION</p>
            <input className="slider" type ="range"></input>
          </div>
          <div className="slider-container">
            <p>SEPIA</p>
            <input className="slider" type ="range"></input>
          </div>
          <div className="slider-container">
            <p>OPACITY</p>
            <input className="slider" type ="range"></input>
          </div>
          <div className="slider-container">
            <p>INVERT</p>
            <input className="slider" type ="range"></input>
          </div>
          <div className="slider-container">
            <p>HUE</p>
            <input className="slider" type ="range"></input>
          </div>
          <div className="slider-container">
            <p>GRESCALE</p>
            <input className="slider" type ="range"></input>
          </div>
          <div className="slider-container">
            <p>CONTRAST</p>
            <input className="slider" type ="range"></input>
          </div>
          <div className="slider-container">
            <p>BRIGHTNESS</p>
            <input className="slider" type ="range"></input>
          </div>
          <div className="slider-container">
            <p>BLUR</p>
            <input className="slider" type ="range"></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
