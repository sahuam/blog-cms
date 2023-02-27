/**
 * Group of Basic Elements
 */

const { Color } = require("./Color");
const { Select } = require("./Select");
const { Text } = require("./Text");

// HEADER TEXT
function HeaderText() {
  this.type = "HeaderText";
  this.elements = [
    new Text().setLabel("Header").setPlaceholder("Enter Place holder"),
    new Color().setLabel("Color"),
    new Select().setOptions("h1", "h2", "h3", "h4", "h5", "h6"),
  ];
}

// PARAGRAPH TEXT

export default { HeaderText };
