import "./App.css";
import SurveyOne from "./components/formDisplay/formOne";
import ReactMapGL from "react-map-gl";
import { useState } from "react";
import * as React from "react";
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    mapboxApiAccessToken:
      "pk.eyJ1Ijoic2NocmFkZXJycyIsImEiOiJja2t3ZG9mcWYxcXB6MnZwY3JmcHp1MGVsIn0.cF2HVe3ODMWQaGhweoiczQ",
  });

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
      <main>
        <SurveyOne />
      </main>
    </div>
  );
}

export default App;
