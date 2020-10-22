import React from 'react';

export default function App(props) {
  return (
    <div className="boxes">
      <div className="box" style={props.bgStyle}>
        <div style={props.style}>Test</div>
        <div style={props.style}>Test</div>
      </div>
      <div className="box" style={props.bgStyle}>
        <div style={props.style}>Test</div>
        <div style={props.style}>Test</div>
      </div>
      <div className="box" style={props.bgStyle}>
        <div style={props.style}>Test</div>
        <div style={props.style}>Test</div>
      </div>
      <div className="box" style={props.bgStyle}>
        <div style={props.style}>Test</div>
        <div style={props.style}>Test</div>
      </div>
    </div>
  );
}
