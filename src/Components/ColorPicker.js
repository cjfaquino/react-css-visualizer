import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

function App(props) {
  // const [color, setColor] = useState({
  //   r: '241',
  //   g: '112',
  //   b: '19',
  //   a: '1',
  // });

  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  // const handleChange = (color) => {
  //   setColor(color.rgb);
  // };
  const color = props.color;
  const styles = {
    color: {
      width: '100px',
      height: '20px',
      borderRadius: '2px',
      background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
    },
    swatch: {
      marginTop: `10px`,
      padding: '.125em',
      background: '#ccc',
      borderRadius: '1px',
      // boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
      display: 'inline-block',
      cursor: 'pointer',
    },
    popover: {
      position: 'absolute',
      zIndex: '2',
    },
    cover: {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    },
  };
  return (
    <div className="colorPicker">
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <ChromePicker color={props.color} onChange={props.handleChange} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
