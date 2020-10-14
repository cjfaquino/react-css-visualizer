import React, { useState } from 'react';

const useSlider = (min, max, defaultState, label, id) => {
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
    step: 1,
    value: state,
    onChange: handleChange,
  };
  return props;
};

export default function App() {
  const marginTop = useSlider(0, 100, 0, 'Margin Top', 'marginTop'),
    marginRight = useSlider(0, 100, 0, 'Margin Right', 'marginRight'),
    marginBottom = useSlider(0, 100, 0, 'Margin Bottom', 'marginBottom'),
    marginLeft = useSlider(0, 100, 0, 'Margin Left', 'marginLeft');
  const margins = [marginTop, marginRight, marginBottom, marginLeft];
  const margin = margins.map((e) => (
    <div key={e.id + '0'}>
      <label key={e.id + '1'}>
        {e.label}: {e.value}px
      </label>
      <input {...e} key={e.id + '2'} />
    </div>
  ));

  const paddingTop = useSlider(0, 100, 20, 'Padding Top', 'paddingTop'),
    paddingRight = useSlider(0, 100, 20, 'Padding Right', 'paddingRight'),
    paddingBottom = useSlider(0, 100, 20, 'Padding Bottom', 'paddingBottom'),
    paddingLeft = useSlider(0, 100, 20, 'Padding Left', 'paddingLeft');
  const paddings = [paddingTop, paddingRight, paddingBottom, paddingLeft];
  const padding = paddings.map((e) => (
    <div key={e.id + '0'}>
      <label key={e.id + '1'}>
        {e.label}: {e.value}px
      </label>
      <input {...e} key={e.id + '2'} />
    </div>
  ));

  const borderRadiusP = useSlider(0, 50, 0, 'Border Radius', 'borderRadiusP');
  const borderWidth = useSlider(0, 50, 1, 'Border Width', 'borderWidth');

  const styles = {
    margin: `${marginTop.value}px ${marginRight.value}px ${marginBottom.value}px ${marginLeft.value}px`,
    padding: `${paddingTop.value}px ${paddingRight.value}px ${paddingBottom.value}px ${paddingLeft.value}px`,
    borderRadius: `${borderRadiusP.value}%`,
    borderWidth: `${borderWidth.value}px`,
  };
  return (
    <div className="sliders">
      <div>{margin}</div>
      <div>{padding}</div>
      <div>
        <input {...borderRadiusP} />
        <input {...borderWidth} />
      </div>
      <div className="boxes">
        <div style={styles}>Test</div>
        <div style={styles}>Test</div>
        <div style={styles}>Test</div>
      </div>
      <div className="boxes">
        <div style={styles}>Test</div>
        <div style={styles}>Test</div>
        <div style={styles}>Test</div>
      </div>
    </div>
  );
}
