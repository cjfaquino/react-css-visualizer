import React from 'react';
import { ChromePicker } from 'react-color';
import 'react-color-picker/index.css';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '#3C6AAA',
    };
  }

  handleChange = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    const newStyles = JSON.parse(JSON.stringify(this.props.style));
    newStyles.backgroundColor = this.state.background;
    return (
      <div>
        <ChromePicker color={this.state.background} onChange={this.handleChange} />
        <div className="boxes">
          <div className="box">
            <div style={newStyles}>Test</div>
            <div style={newStyles}>Test</div>
            <div style={newStyles}>Test</div>
          </div>
        </div>
      </div>
    );
  }
}
