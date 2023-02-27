import React, { useState } from "react";
import styles from "@/styles/editorDashboard.module.css";
import DasboardMenu from "@/components/dashboard/DasboardMenu";
import DashboardContent from "@/components/dashboard/DashboardContent";
import axios from "axios";

export async function getServerSideProps(context) {
  const { data: blogs } = await axios.get("http://localhost:3000/api/blogs");

  return {
    props: {
      userId: context.params?.userId,
      blogs,
    },
  };
}

function index({ userId, blogs }) {
  const [type, setType] = useState("HOME");
  return (
    <div className={styles.container}>
      <aside className={styles.sideMenu}>
        <DasboardMenu setType={setType} />
      </aside>
      <section className={styles.mainContent}>
        <DashboardContent type={type} blogs={blogs} userId={userId} />
      </section>
    </div>
  );
}

export default index;
