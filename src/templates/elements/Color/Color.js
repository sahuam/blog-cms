import {
  setDefaultValue,
  setLabel,
  setPlaceholder,
} from "@/templates/utils/elementProperty";
export function Color() {
  this.type = "color";
  this.placeholder = "Color";
  this.defaultValue = "#ffffff";
  this.label = "Color";
}

Color.prototype = {
  getElement: function (events) {
    return (
      <div className="input color-input">
        <label className="input-label">{this.label}</label>
        <input
          className="input-field color-input-field"
          type={this.type}
          placeholder={this.placeholder}
          defaultValue={this.defaultValue}
          {...events}
        />
      </div>
    );
  },
  setLabel,
  setDefaultValue,
  setPlaceholder,
};

export default Color;
