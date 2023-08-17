import React, { useCallback, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import styles from "@/styles/contact.module.css";

const containerStyle = {
  width: "680px",
  height: "339px",
};

const Maps = () => {

  return  (
    <div className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2998.3063207946107!2d69.2447740765906!3d41.28043730262158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE2JzQ5LjYiTiA2OcKwMTQnNTAuNSJF!5e0!3m2!1sru!2s!4v1692285130293!5m2!1sru!2s"
        width="100%"
        height="339"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  )
};

export default Maps;
