import Text from "@/templates/elements/Text/Text";
import CustomElement from "@/templates/utils/CustomElement";

const Header = new CustomElement("Header");

const Title = new Text()
  .setPlaceholder("Enter your name")
  .setLabel("Your Name")
  .setDefaultValue("Amrit Kumar Sahu");

const Summary = new Text()
  .setPlaceholder("Enter a summary")
  .setLabel("Summary")
  .setDefaultValue("I am a great human being....");

// Image
// Header.setElements();
// Title
Header.setElements(Title);
// Summary
Header.setElements(Summary);
// Keywords
// Header.setElements();
// Social Media image with links
// Header.setElements();

export default Header;
