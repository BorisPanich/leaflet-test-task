import React from "react";
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import './Map.css';

// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

const MapComponent = () => {
  let state = {
    lat: 53.91,
    lng: 27.556933,
    zoom: 15
  };

    let center = [state.lat, state.lng];

    return (
        <Map zoom={state.zoom} center={center}>
          <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={center}>
            <Popup>Тут нешта знаходзіцца!!!</Popup>
          </Marker>
        </Map>
    );
};

export default MapComponent;