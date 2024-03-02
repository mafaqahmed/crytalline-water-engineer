import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import constants from "@/app/contants";

const Map = () => {
  return (
    <MapContainer
      center={[33.5856747, 73.0895837]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[33.5856747, 73.0895837]}>
        <Popup>{constants.metadata.businessAddress}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
