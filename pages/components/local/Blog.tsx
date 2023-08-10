import React, { useEffect } from "react";
import styles from "@/styles/blog.module.css";
import Container from "../global/Container";
import AOS from "aos";
const Blog = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <Container id="blog"  data-aos="fade-up" data-aos-duration="500" children={
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
                    style={{ width: 380, height: 274, borderRadius: 20 }}
                    controls
                    src={"/blur.mp4"}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    } />
  );
};

export default Blog;
