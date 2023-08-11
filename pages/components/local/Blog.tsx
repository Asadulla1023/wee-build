import React, { useEffect } from "react";
import styles from "@/styles/blog.module.css";
import Container from "../global/Container";
import AOS from "aos";
const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container id="blog" data-aos="fade-up" data-aos-duration="500">
      {
        <div className={styles.blogSection}>
          <div className={styles.blogTitle}>
            <h1>БЛОГ</h1>
          </div>
          <div className={styles.blogCard}>
            {[1, 2, 3].map((e) => {
              return (
                <div key={e} className={styles.card}>
                  <video
                    style={{ borderRadius: 20 }}
                    className={styles.video}
                    controls
                    src={"/blur.mp4"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      }
    </Container>
  );
};

export default Blog;
