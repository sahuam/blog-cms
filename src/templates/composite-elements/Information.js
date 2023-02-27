import { HeaderText } from "../elements/higher-elements";

/**
 * Component to accept a Header and Paragraph
 */
const Information = new CustomElement("Information");

/**
 * header text
 * textInput, color, alignment, h-tag
 * */
Information.setElements(HeaderText);

/**
 * paragraph text
 * textInput, color, alignment
 */

export default Information;
