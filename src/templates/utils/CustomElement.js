/**
 * CustomElement
 * @param {String} type
 */

function CustomElement(type) {
  this.type = type;
  this.customType = true;
  this.elements = [];
}

CustomElement.prototype = {
  setElements: function (...elements) {
    this.elements(...this.elements, ...elements);
    return this;
  },
};

export default CustomElement;
