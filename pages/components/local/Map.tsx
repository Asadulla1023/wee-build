import React, { useCallback, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import styles from "@/styles/contact.module.css";

const containerStyle = {
  width: "680px",
  height: "339px",
};

const center = {
  lat: -41.2804333,
  lng: -69.247349,
};

const Maps = () => {
  const { isLoaded } = useLoadScript({
    id: "google-maps-scripts",
    googleMapsApiKey: "AIzaSyBCEicVIKQxCaQrMBkvfrAB71GG8OKovXU",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: {
    fitBounds: (arg0: google.maps.LatLngBounds) => void;
  }) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(null);
  },
  []);

  const onUnmount = useCallback(function callback(map: {
    fitBounds: (arg0: google.maps.LatLngBounds) => void;
  }) {
    setMap(null);
  },
  []);

  return isLoaded ? (
    <div className={styles.map}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
        onLoad={onLoad}
        onUnmount={onUnmount}
      />
    </div>
  ) : (
    <></>
  );
};

export default Maps;
