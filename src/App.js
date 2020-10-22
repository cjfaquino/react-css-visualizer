import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import './Components/slider.css';

import Boxes from './Components/Boxes';
import WindowResize from './Components/WindowResize';
import ColorPicker from './Components/ColorPicker';

export default function App() {
  const windowSize = WindowResize();

  // Navbar config
  const [close, setClose] = useState(true);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  // General scroll to element function

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  //Color Picker config
  // BOX color
  const [color, setColor] = useState({
    r: '116',
    g: '179',
    b: '233',
    a: '1',
  });

  // background color
  const [color2, setColor2] = useState({
    r: '255',
    g: '255',
    b: '255',
    a: '1',
  });
  // font color
  const [color3, setColor3] = useState({
    r: '255',
    g: '255',
    b: '255',
    a: '1',
  });

  // Slider config
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

  //create sliders
  const marginTop = useSlider(0, 15, 2, 'Margin Top', 'marginTop', 'em'),
    marginRight = useSlider(0, 15, 2, 'Margin Right', 'marginRight', 'em'),
    marginBottom = useSlider(0, 15, 2, 'Margin Bottom', 'marginBottom', 'em'),
    marginLeft = useSlider(0, 15, 2, 'Margin Left', 'marginLeft', 'em');

  const paddingTop = useSlider(0, 15, 2, 'Padding Top', 'paddingTop', 'em'),
    paddingRight = useSlider(0, 15, 2, 'Padding Right', 'paddingRight', 'em'),
    paddingBottom = useSlider(0, 15, 2, 'Padding Bottom', 'paddingBottom', 'em'),
    paddingLeft = useSlider(0, 15, 2, 'Padding Left', 'paddingLeft', 'em');

  const borderRadiusP = useSlider(0, 50, 0, 'Border Radius', 'borderRadiusP', '%'),
    borderWidth = useSlider(0, 50, 1, 'Border Width', 'borderWidth', 'px'),
    opacity = useSlider(0, 1, 1, 'Opacity', 'opacity', '');
  opacity.step = 0.01;

  const boxShadowX = useSlider(-50, 50, 5, 'Shadow X', 'boxShadowX', 'px'),
    boxShadowY = useSlider(-50, 50, 5, 'Shadow Y', 'boxShadowY', 'px'),
    boxShadowBlur = useSlider(0, 50, 0, 'Shadow Blur', 'boxShadowBlur', 'px'),
    boxShadowSpread = useSlider(0, 50, 0, 'Shadow Spread', 'boxShadowSpread', 'px');

  const textShadowX = useSlider(-50, 50, 0, 'Shadow X', 'textShadowX', 'px'),
    textShadowY = useSlider(-50, 50, 0, 'Shadow Y', 'textShadowY', 'px'),
    textShadowBlur = useSlider(0, 50, 0, 'Shadow Blur', 'textShadowBlur', 'px');

  const translateX = useSlider(-100, 100, 0, 'Translate X', 'translateX', 'px'),
    translateY = useSlider(-100, 100, 0, 'Translate Y', 'translateY', 'px'),
    rotateZ = useSlider(-1, 1, 0, 'Rotate Z', 'rotateZ', ''),
    rotateX = useSlider(-1, 1, 0, 'Rotate X', 'rotateX', ''),
    rotateY = useSlider(-1, 1, 0, 'Rotate Y', 'rotateY', ''),
    rotateA = useSlider(-180, 180, 180, 'Rotate Angle', 'rotateA', 'deg');
  rotateZ.step = rotateY.step = rotateX.step = 0.01;

  const height = useSlider(0, 500, 100, 'Height', 'height', 'px'),
    width = useSlider(0, 1500, 100, 'Width', 'width', 'px');

  const fontSize = useSlider(0, 10, 1, 'Size', 'fontSize', 'em'),
    fontWeight = useSlider(100, 900, 900, 'Weight', 'fontWeight', '');
  fontSize.step = 0.1;
  fontWeight.step = 100;

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
    boxShadowX,
    boxShadowY,
    boxShadowBlur,
    boxShadowSpread,
    translateX,
    translateY,
    rotateX,
    rotateY,
    rotateZ,
    rotateA,
    height,
    width,
    textShadowX,
    textShadowY,
    textShadowBlur,
    fontSize,
    fontWeight,
    opacity,
  ];

  // Style markup with .map
  const markup = input.map((e) => (
    <div key={e.id} className="slider">
      <label htmlFor={e.id}>
        {e.label}: {e.value}
        {e.unit}
      </label>
      <div>
        <input {...e} name={e.id} />
      </div>
    </div>
  ));

  //re-organize for placement in DOM
  const margin = markup.slice(0, 4),
    padding = markup.slice(4, 8),
    border = markup.slice(8, 10),
    boxShadow = markup.slice(10, 14),
    transform = markup.slice(14, 20),
    size = markup.slice(20, 22),
    textShadow = markup.slice(22, 25),
    font = markup.slice(25, 27),
    opacityS = markup.slice(27, 28);

  // box styles
  const styles = {
    backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
    margin: `${marginTop.value}em ${marginRight.value}em ${marginBottom.value}em ${marginLeft.value}em`,
    padding: `${paddingTop.value}em ${paddingRight.value}em ${paddingBottom.value}em ${paddingLeft.value}em`,
    borderRadius: `${borderRadiusP.value}%`,
    border: `${borderWidth.value}px solid black`,
    boxShadow: `${boxShadowX.value}px ${boxShadowY.value}px ${boxShadowBlur.value}px ${boxShadowSpread.value}px black`,
    perspective: '550px',
    transform: `translate3d(${translateX.value}px, ${translateY.value}px, -9.7rem) rotate3d(${rotateX.value}, ${rotateY.value}, ${rotateZ.value}, ${rotateA.value}deg)`,
    height: `${height.value}px`,
    width: `${width.value}px`,
    transition: 'ease all 500ms',
    textShadow: `${textShadowX.value}px ${textShadowY.value}px ${textShadowBlur.value}px black`,
    fontSize: `${fontSize.value}em`,
    fontWeight: `${fontWeight.value}`,
    opacity: `${opacity.value}`,
    color: `rgba(${color3.r}, ${color3.g}, ${color3.b}, ${color3.a})`,
  };
  // background style
  const bgStyle = {
    backgroundColor: `rgba(${color2.r}, ${color2.g}, ${color2.b}, ${color2.a})`,
  };

  const sliderMenu = (
    <div
      className={
        close && windowSize.width <= 560 ? 'sliders grid container menu hidden' : 'sliders grid container menu visible'
      }
    >
      <div>
        <h3>Box-size</h3>
        {size}
        <h3>Font</h3>
        {font}
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
        <h3>Border</h3>
        {border}
        <h3>Opacity</h3>
        {opacityS}
      </div>
      <div>
        <h3>Text-shadow</h3>
        {textShadow}
      </div>
      <div>
        <h3>Box-shadow</h3>
        {boxShadow}
      </div>
      <div>
        <h3>Transform</h3>
        {transform}
      </div>
      <div>
        <h3 className="colorPicker">
          Box Color{' '}
          <ColorPicker
            setColor={color}
            color={color}
            handleChange={(color) => {
              setColor(color.rgb);
            }}
          />
        </h3>
        <h3 className="colorPicker">
          Font Color{' '}
          <ColorPicker
            setColor={color3}
            color={color3}
            handleChange={(color3) => {
              setColor3(color3.rgb);
            }}
          />
        </h3>
        <h3 className="colorPicker">
          Background Color{' '}
          <ColorPicker
            setColor={color2}
            color={color2}
            handleChange={(color2) => {
              setColor2(color2.rgb);
            }}
          />
        </h3>
      </div>
    </div>
  );

  return (
    <div>
      <div className="windowSizer container">
        ViewPort Size: ({windowSize.width}px) x ({windowSize.height}px)
      </div>
      <nav className={windowSize.width <= 560 ? 'navbar' : 'hidden'}>
        <div
          className="menuIcon"
          onClick={() => {
            setClose(!close);
            close && executeScroll();
          }}
        >
          <FontAwesomeIcon icon={faBars} className="faBars" />
        </div>
      </nav>
      <h1 ref={myRef}>CSS Visualizer</h1>
      {/* Otherwise sliderMenu loads on page load on mobile for a brief moment*/}
      {windowSize.width >= 560 ? sliderMenu : !close && sliderMenu}
      <Boxes style={styles} bgStyle={bgStyle} />
    </div>
  );
}
