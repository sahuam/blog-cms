import PropTypes from "prop-types";
import styles from "@/styles/blog-container.module.css";

const getBlogElement = (description, id) => {
  switch (description.type) {
    case "image":
      return (
        <img
          className={`${styles.blogImage} ${styles[description.data.size]} ${
            styles[description.data.align]
          }`}
          src={description.data.src}
          alt={description.data.alt}
        />
      );

    case "description":
      return <p className="description">{description.data}</p>;
    default:
      return null;
  }
};

function BlogContainer({ title, descriptions }) {
  return (
    <div className={`${styles.blogContainer}`}>
      <h2>{title}</h2>
      {descriptions.map((description, i) => getBlogElement(description, i))}
    </div>
  );
}

export default BlogContainer;
