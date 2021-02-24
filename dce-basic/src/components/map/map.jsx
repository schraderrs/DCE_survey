import React, { useState } from "react";
import MapGL from "react-map-gl";

import "../../App.scss";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2NocmFkZXJycyIsImEiOiJja2t3ZG9mcWYxcXB6MnZwY3JmcHp1MGVsIn0.cF2HVe3ODMWQaGhweoiczQ"; // Set your mapbox token here

function Map(props) {
  return (
    <MapGL
      {...props.viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/schraderrs/ckl6cnujj56z218p3dr8w73ey"
      onViewportChange={props.setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
}

export default Map;
