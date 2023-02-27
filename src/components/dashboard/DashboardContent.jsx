import React, { useEffect, useRef } from "react";
import PageList from "./contents/page-list/PageList";

function DashboardContent({ type = "", blogs, userId }) {
  return (
    <div className="dashboard-container">
      {/* title */}
      <h3>{type}</h3>
      {/* content */}
      <div className="dasboardContent">
        <PageList blogs={blogs} userId={userId} />
      </div>
    </div>
  );
}

export default DashboardContent;
