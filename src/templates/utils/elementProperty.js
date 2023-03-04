// set label
export const setLabel = function (label) {
  this.label = label;
  return this;
};

// set placeholder
export const setPlaceholder = function (placeholder) {
  this.placeholder = placeholder;
  return this;
};

// set defaultValue
export const setDefaultValue = function (defaultValue) {
  this.defaultValue = defaultValue;
  return this;
};

// set options
export const setOptions = function (options) {
  this.options = [...this.options, ...options];
  return this;
};
