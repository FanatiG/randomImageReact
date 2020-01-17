import React from 'react';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="slider-container">
        <p>{this.props.name.toUpperCase() + ' (' + this.props.value + ')'}</p>
        <div className="input-cancel">
          <input
            min={this.props.min}
            max={this.props.max}
            readOnly={false}
            value={this.props.value}
            name={this.props.name}
            className="slider"
            type="range"
            onChange={event => {
              this.props.applyFilter(event.target.name, event.target.value);
            }}></input>
          <button
            title="Reset"
            className="cancel-button"
            onClick={() => {
              this.props.resetFilter(this.props.name, this.props.value);
            }}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
