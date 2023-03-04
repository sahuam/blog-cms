import { setLabel } from "@/templates/utils/elementProperty";

function Multiple() {
  this.type = "Multiple";
  this.label = "Group of Elements";
}

Multiple.prototype = {
  setLabel,
};

export default Multiple;
