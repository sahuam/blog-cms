import React, { useEffect, useRef } from "react";
import PageList from "./contents/page-list/PageList";
import PortfolioLayout from "@/templates/layout/portfolios/basic/index";

function DashboardContent({ type = "", blogs, userId }) {
  console.log(PortfolioLayout);
  return (
    <div className="dashboard-container">
      {/* title */}
      <h3>{type}</h3>
      {PortfolioLayout.elements}
      {/* content */}
      <div className="dasboardContent">
        <PageList blogs={blogs} userId={userId} />
      </div>
    </div>
  );
}

export default DashboardContent;
