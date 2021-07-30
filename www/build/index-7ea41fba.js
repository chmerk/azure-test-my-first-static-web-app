import { h } from './index-65e1c793.js';

const cssStyle = {
  "background-color": "red",
  "color": "white",
  "display": "inline-block",
  "padding": "3px",
};
const renderInlineError = errorText => h("div", { style: cssStyle }, errorText);

const createCssClassValue = cssClasses => {
  let cssClassValue = "";
  if (!cssClasses) {
    return cssClassValue;
  }
  for (let [cssClassName, flag] of Object.entries(cssClasses)) {
    if (!Boolean(flag)) {
      continue;
    }
    if (cssClassValue.length > 0) {
      cssClassValue += " ";
    }
    cssClassValue += cssClassName;
  }
  return cssClassValue;
};

const existsValue = value => (value === false ? true : Boolean(value));

const createScreenshotOptions = (viewport) => {
  return viewport
    ? {
      pixelmatchThreshold: 0,
      clip: {
        x: 0,
        y: 0,
        width: viewport.width,
        height: viewport.height,
      },
    }
    : {};
};

export { renderInlineError as r };
