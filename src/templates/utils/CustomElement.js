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
  isCustom: true,
  setElements: function (element) {
    this.elements = [...this.elements, element];
    return this;
  },
  getElementUI: function () {
    return <div>{this.elements.map((element) => element.getElement())}</div>;
  },
};

export default CustomElement;
