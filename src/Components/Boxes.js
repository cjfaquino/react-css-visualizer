import React from 'react';

export default function App(props) {
  return (
    <div className="boxes">
      <div className="box">
        <div style={props.style}>Test</div>
        <div style={props.style}>Test</div>
        <div style={props.style}>Test</div>
      </div>
    </div>
  );
}
