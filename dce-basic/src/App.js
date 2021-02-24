import './App.scss';
import React, {useState} from 'react'
import FloatObject from './components/modal/floatobject'
import Map from './components/map/map'

function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });

  return (
    <div className="App">
      {/* <Map viewport = {viewport} setViewport = {setViewport}/> */}
      <FloatObject setViewport = {setViewport}/>
    </div>
  );
}

export default App;
