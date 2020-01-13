import React from 'react';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
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
    );
}
}

export default Slider;