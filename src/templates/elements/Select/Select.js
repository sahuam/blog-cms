import {
  setDefaultValue,
  setLabel,
  setPlaceholder,
  setOptions,
} from "@/templates/utils/elementProperty";

function Select() {
  this.type = "select";
  this.placeholder = "select an option";
  this.options = [];
  this.label = "A Select Field";
  this.defaultValue = "";
}

function getElement(...events) {
  return (
    <div className="input select-input">
      <label className="input-label">{this.label}</label>
      <select
        className="input-field select-input-field"
        type={this.type}
        defaultValue={this.defaultValue}
        {...events}
      >
        {this.options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.prototype = {
  getElement,
  setDefaultValue,
  setLabel,
  setPlaceholder,
  setOptions,
};

export default Select;
