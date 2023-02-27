import { useRouter } from "next/router";
import React, { useEffect } from "react";

function PageList({ blogs, userId }) {
  const router = useRouter();
  const handleEdit = (blog) => {
    router.push(`/editor/${userId}/${blog.blogUrl}`);
  };
  return (
    <div>
      {blogs.map((blog, i) => (
        <div id={blog.id} key={i}>
          <p>{i + 1}</p>
          {/* title of the blog */}
          <p>{blog.title}</p>
          {/* status = published or unpublished */}
          <p>{blog.status}</p>
          <button onClick={() => handleEdit(blog)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default PageList;
