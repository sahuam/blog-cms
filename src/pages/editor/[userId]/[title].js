import React, { useState } from "react";
import styles from "@/styles/edit-blog.module.css";
import EditBlog from "@/components/dashboard/contents/blog/EditBlog";

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:3000/api/blogs");
  return {
    props: {
      blog: data[0],
    },
  };
}

function EditBlogPage({ blog }) {
  return (
    <div>
      <header className={styles.header}></header>
      <main className={styles.main}>
        <EditBlog />
      </main>
    </div>
  );
}

export default EditBlogPage;
