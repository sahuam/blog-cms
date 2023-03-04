import React from "react";
import styles from "@/styles/test.module.css";
function index() {
  return (
    <div className={styles.container}>
      <div className={styles.circle7}>
        <div className={styles.circle6}>
          <div className={styles.circle5}>
            <div className={styles.circle4}>
              <div className={styles.circle3}>
                <div className={styles.circle2}>
                  <div className={styles.circle1}>
                    <div className={styles.circle0}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
