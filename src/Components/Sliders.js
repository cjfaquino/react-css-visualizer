import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import Boxes from './Boxes';

const useSlider = (min, max, defaultState, label, id, unit) => {
  const [state, setSlide] = useState(defaultState);
  const handleChange = (e) => {
    setSlide(e.target.value);
  };

  const props = {
    type: 'range',
    id,
    label,
    min,
    max,
    unit,
    step: 1,
    value: state,
    onChange: handleChange,
  };
  return props;
};

function App(props) {
  //create sliders
  const marginTop = useSlider(0, 100, 25, 'Margin Top', 'marginTop', 'px'),
    marginRight = useSlider(0, 100, 25, 'Margin Right', 'marginRight', 'px'),
    marginBottom = useSlider(0, 100, 25, 'Margin Bottom', 'marginBottom', 'px'),
    marginLeft = useSlider(0, 100, 25, 'Margin Left', 'marginLeft', 'px');

  const paddingTop = useSlider(0, 100, 25, 'Padding Top', 'paddingTop', 'px'),
    paddingRight = useSlider(0, 100, 25, 'Padding Right', 'paddingRight', 'px'),
    paddingBottom = useSlider(0, 100, 25, 'Padding Bottom', 'paddingBottom', 'px'),
    paddingLeft = useSlider(0, 100, 25, 'Padding Left', 'paddingLeft', 'px');

  const borderRadiusP = useSlider(0, 50, 0, 'Border Radius', 'borderRadiusP', '%'),
    borderWidth = useSlider(0, 50, 1, 'Border Width', 'borderWidth', 'px');

  const shadowX = useSlider(-50, 50, 5, 'Shadow X', 'shadowX', 'px'),
    shadowY = useSlider(-50, 50, 5, 'Shadow Y', 'shadowY', 'px'),
    shadowBlur = useSlider(0, 50, 0, 'Shadow Blur', 'shadowBlur', 'px'),
    shadowSpread = useSlider(0, 50, 0, 'Shadow Spread', 'shadowSpread', 'px');

  const translateX = useSlider(-100, 100, 0, 'Translate X', 'translateX', 'px'),
    translateY = useSlider(-100, 100, 0, 'Translate Y', 'translateY', 'px');

  const height = useSlider(0, 500, 100, 'Height', 'height', 'px'),
    width = useSlider(0, 1500, 100, 'Width', 'width', 'px');

  //array everything for markup
  const input = [
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    borderRadiusP,
    borderWidth,
    shadowX,
    shadowY,
    shadowBlur,
    shadowSpread,
    translateX,
    translateY,
    height,
    width,
  ];

  const markup = input.map((e) => (
    <div key={e.id}>
      <label>
        {e.label}: {e.value}
        {e.unit}
      </label>
      <div>
        <input {...e} />
      </div>
    </div>
  ));

  //re-organize
  const margin = markup.slice(0, 4),
    padding = markup.slice(4, 8),
    border = markup.slice(8, 10),
    shadow = markup.slice(10, 14),
    translate = markup.slice(14, 16),
    size = markup.slice(16, 18);

  //Color Picker config
  const [color, setColor] = useState('#3C6AAA');

  const styles = {
    backgroundColor: color,
    margin: `${marginTop.value}px ${marginRight.value}px ${marginBottom.value}px ${marginLeft.value}px`,
    padding: `${paddingTop.value}px ${paddingRight.value}px ${paddingBottom.value}px ${paddingLeft.value}px`,
    borderRadius: `${borderRadiusP.value}%`,
    border: `${borderWidth.value}px solid black`,
    boxShadow: `${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px ${shadowSpread.value}px black`,
    transform: `translate3d(${translateX.value}px, ${translateY.value}px, 0px)`,
    height: `${height.value}px`,
    width: `${width.value}px`,
  };

  return (
    <div>
      <h1>CSS Visualizer</h1>
      <ChromePicker
        color={color}
        onChange={(color) => {
          setColor(color.hex);
        }}
      />
      <div className="sliders">
        <div>
          <h3>Size</h3>
          {size}
        </div>
        <div>
          <h3>Margin</h3>
          {margin}
        </div>
        <div>
          <h3>Padding</h3>
          {padding}
        </div>
        <div>
          <h3>Box-shadow</h3>
          {shadow}
        </div>
        <div>
          <h3>Border</h3>
          {border}
        </div>
        <div>
          <h3>Transform</h3>
          {translate}
        </div>
      </div>
      <Boxes style={styles} />
    </div>
  );
}

export default App;
