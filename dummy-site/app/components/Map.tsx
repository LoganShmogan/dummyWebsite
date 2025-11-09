'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Simple solution - let react-leaflet handle the icon
export default function Map() {
  const position: [number, number] = [-40.352306, 175.590396];

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Happy Horizons<br />28 Shamrock Street, Tākaro<br />Palmerston North
        </Popup>
      </Marker>
    </MapContainer>
  );
}