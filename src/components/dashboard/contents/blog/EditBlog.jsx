import React, { useEffect, useState } from "react";
import styles from "@/styles/edit-blog.module.css";
import ElementModal from "./ElementModal";

function EditBlog({ structure }) {
  const [elements, setElements] = useState([]);

  const pushElement = (newEl) => {
    const elList = [...elements, newEl];
    setElements(elList);
  };

  return (
    <div className={styles.container}>
      {/* template selection*/}
      {/* template form */}
      <div>
        <p>Header Image</p>
        <input placeholder="image url" />
        <input placeholder="alternative text" />
      </div>
      <div className="description">
        <div id="descriptions"></div>
        <ElementModal pushElement={pushElement} />
      </div>
    </div>
  );
}

export default EditBlog;
