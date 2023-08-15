import React, { useEffect } from "react";
import styles from "@/styles/blog.module.css";
import Container from "../global/Container";
import { v4 as uuidv4 } from 'uuid';
const Blog = () => {
  return (
    <Container id="blog">{<div className={styles.blogSection}>
      <div className={styles.blogTitle}>
        <h1>БЛОГ</h1>
      </div>
      <div className={styles.blogCard}>
        {[1, 2, 3].map((e) => {
          return (
            <div key={uuidv4()} className={styles.card}>
              <div style={{width: 380, height: 685,}} className={styles.table}>
                <video
                  style={{ borderRadius: 20}}
                  width={385}
                  height={675}
                  className={styles.video}
                  controls
                  src={"/blur.mp4"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>}
    </Container>
  );
};

export default Blog;
