import React from "react";
import styles from "@/styles/blog.module.css";

const Blog = () => {
  return (
    <div id="blog" className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.blogSection}>
          <div className={styles.blogTitle}>
            <h1>БЛОГ</h1>
          </div>
          <div className={styles.blogCard}>
            {[1, 2, 3].map(() => {
              return (
                <div className={styles.card}>
                  <div className={styles.table}>
                    <video
                      style={{ width: 380, height: "auto", borderRadius: 20 }}
                      controls
                      src={"/blur.mp4"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
