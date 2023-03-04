import {
  setDefaultValue,
  setLabel,
  setPlaceholder,
} from "@/templates/utils/elementProperty";

function Text() {
  this.type = "text";
  this.placeholder = "Enter Text";
  this.defaultValue = "";
  this.label = "A Text Field";
}

/**
 * getElement
 * @param  {Function} events
 * @returns
 */
function getElement(...events) {
  return (
    <div className="input text-input">
      <label className="input-label">{this.label}</label>
      <input
        className="input-field text-input-field"
        type={this.type}
        placeholder={this.placeholder}
        defaultValue={this.defaultValue}
        {...events}
      />
    </div>
  );
}

Text.prototype = {
  getElement,
  setDefaultValue,
  setLabel,
  setPlaceholder,
};

export default Text;
