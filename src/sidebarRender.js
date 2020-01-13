import React from 'react';
import Slider from './filterSlider';
import './sidebarRender.css';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar">
        <p className="sidebar-text">&#10809; more options &#10809;</p>
        <div className="sidebar-params">
          {/* ---------------------------------------------------------------------------------------- */}
          <div className="slider-container">
            <p>SATURATION</p>
            <div className="input-cancel">
              <input
                min={0}
                max={200}
                readOnly={false}
                value={this.props.saturate}
                name="saturate"
                className="slider"
                type="range"
                onChange={event => {
                  this.props.applyFilter(event.target.name, event.target.value);
                }}></input>
              <button
                className="cancel-button"
                onClick={event => {
                  this.props.applyFilter('saturate', 100);
                }}>
                X
              </button>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------- */}
          <div className="slider-container">
            <p>SEPIA</p>
            <div className="input-cancel">
              <input
                min={0}
                max={100}
                readOnly={false}
                value={this.props.sepia}
                name="sepia"
                className="slider"
                type="range"
                onChange={event => {
                  this.props.applyFilter(event.target.name, event.target.value);
                }}></input>
              <button
                className="cancel-button"
                onClick={event => {
                  this.props.applyFilter('sepia', 0);
                }}>
                X
              </button>
            </div>
          </div>
          <div className="slider-container">
            <p>OPACITY</p>
            <div className="input-cancel">
              <input
                min={0}
                max={100}
                readOnly={false}
                value={this.props.opacity}
                name="opacity"
                className="slider"
                type="range"
                onChange={event => {
                  this.props.applyFilter(event.target.name, event.target.value);
                }}></input>
              <button
                className="cancel-button"
                onClick={event => {
                  this.props.applyFilter('opacity', 100);
                }}>
                X
              </button>
            </div>
          </div>
          <div className="slider-container">
            <p>INVERT</p>
            <div className="input-cancel">
              <input
                min={0}
                max={100}
                readOnly={false}
                value={this.props.invert}
                name="invert"
                className="slider"
                type="range"
                onChange={event => {
                  this.props.applyFilter(event.target.name, event.target.value);
                }}></input>
              <button
                className="cancel-button"
                onClick={event => {
                  this.props.applyFilter('invert', 0);
                }}>
                X
              </button>
            </div>
          </div>
          <div className="slider-container">
            <p>HUE</p>
            <div className="input-cancel">
              <input
                min={0}
                max={100}
                readOnly={false}
                value={this.props.hue}
                name="hue"
                className="slider"
                type="range"
                onChange={event => {
                  this.props.applyFilter(event.target.name, event.target.value);
                }}></input>
              <button
                className="cancel-button"
                onClick={event => {
                  this.props.applyFilter('hut', 0);
                }}>
                X
              </button>
            </div>
          </div>
          <div className="slider-container">
            <p>GRAYSCALE</p>
            <div className="input-cancel">
              <input
                min={0}
                max={100}
                readOnly={false}
                value={this.props.grayscale}
                name="grayscale"
                className="slider"
                type="range"
                onChange={event => {
                  this.props.applyFilter(event.target.name, event.target.value);
                }}></input>
              <button
                className="cancel-button"
                onClick={event => {
                  this.props.applyFilter('grayscale', 0);
                }}>
                X
              </button>
            </div>
          </div>
          <div className="slider-container">
            <p>CONTRAST</p>
            <div className="input-cancel">
              <input
                min={0}
                max={200}
                readOnly={false}
                value={this.props.contrast}
                name="contrast"
                className="slider"
                type="range"
                onChange={event => {
                  this.props.applyFilter(event.target.name, event.target.value);
                }}></input>
              <button
                className="cancel-button"
                onClick={event => {
                  this.props.applyFilter('contrast', 100);
                }}>
                X
              </button>
            </div>
          </div>
          <div className="slider-container">
            <p>BRIGHTNESS</p>
            <div className="input-cancel">
              <input
                min={0}
                max={200}
                readOnly={false}
                value={this.props.brightness}
                name="brightness"
                className="slider"
                type="range"
                onChange={event => {
                  this.props.applyFilter(event.target.name, event.target.value);
                }}></input>
              <button
                className="cancel-button"
                onClick={event => {
                  this.props.applyFilter('brightness', 100);
                }}>
                X
              </button>
            </div>
          </div>
          <div className="slider-container">
            <p>BLUR</p>
            <div className="input-cancel">
              <input
                min={0}
                max={100}
                readOnly={false}
                value={this.props.blur}
                name="blur"
                className="slider"
                type="range"
                onChange={event => {
                  this.props.applyFilter(event.target.name, event.target.value);
                }}></input>
              <button
                className="cancel-button"
                onClick={event => {
                  this.props.applyFilter('blur', 0);
                }}>
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
