import { Text } from "./Text";
import { Select } from "./Select";
import { Color } from "./Color";

const ElementProtoType = {
  setPlaceholder: function (placeholder) {
    this.placeholder = placeholder;
    return this;
  },
  setLabel: function (label) {
    this.label = label;
    return this;
  },
  setDefaultValue: function (defaultValue) {
    this.defaultValue = defaultValue;
    return this;
  },
  setOptions: function (...options) {
    if (this.options) {
      this.options = [...this.options, ...options];
    }
    return this;
  },
};

Text.prototype = ElementProtoType;
Select.prototype = ElementProtoType;
Color.prototype = ElementProtoType;

export default { Text, Select, Color };
