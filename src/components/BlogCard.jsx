import PropTypes from "prop-types";
import styles from "@/styles/blog-card.module.css";
function BlogCards({ title, image, description }) {
  return (
    <div className={` ${styles.blogCard}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default BlogCards;
