import Header from "../../schemas/Header";
import Text from "../../../elements/Text/Text";

function PortfolioLayout() {
  this.name = "portfolio-layout";
  this.type = "layout";
  this.elements = [];
}

PortfolioLayout.prototype = {
  setElements: function (element) {
    if (element.isCustom) {
      this.elements = [...this.elements, element.getElementUI()];
    } else {
      this.elements = [...this.elements, element.getElement()];
    }
  },
};

const layout = new PortfolioLayout();

layout.setElements(Header);
layout.setElements(new Text());

export default layout;
