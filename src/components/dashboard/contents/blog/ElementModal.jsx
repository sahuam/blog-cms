import React, { useState } from "react";
import styles from "@/styles/edit-blog.module.css";
import { HeaderElement, ParagraphElement } from "../elements";

const Elements = (key, setData) =>
  ({
    //   image: <ImageElement />,
    paragraph: <ParagraphElement setData={setData} />,
    header: <HeaderElement setData={setData} />,
    //   list: <ListElement />,
  }[key]);

function ElementModal({ name = "modal button", pushElement }) {
  const [key, setKey] = useState("");
  const [open, openModal] = useState(false);
  const [element, setElement] = useState({});

  const setData = (data) => {
    setElement(data);
  };

  return (
    <div>
      <button onClick={openModal}>{name}</button>
      {open && (
        <div className={styles.modal}>
          <select defaultValue={0} onChange={(e) => setKey(e.target.value)}>
            <option disabled value={0}>
              --- Element Type ---
            </option>
            <option value={"header"}>Header</option>
            <option value={"paragraph"}>Paragraph</option>
            <option value={"image"}>Image</option>
            <option value={"list"}>List</option>
          </select>
          {Elements(key, setData)}
        </div>
      )}
    </div>
  );
}

export default ElementModal;
