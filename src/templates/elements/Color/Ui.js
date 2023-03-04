import React from "react";
function ColorInput(events) {
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
}

export default ColorInput;
