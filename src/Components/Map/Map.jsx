import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import L from "leaflet";
import icon from "../../assets/icons/map-pin-line.svg";

const customIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [32, 32],
});

function Map() {
  return (
    <div className="map-container">
      <MapContainer
        center={[6.175533825908914, -75.59089716132935]}
        zoom={17}
        scrollWheelZoom={false}
        className="mapa"
        zoomControl={false}
      >
        <ZoomControl position="bottomright" />{" "}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[6.175533825908914, -75.59089716132935]}
          icon={customIcon}
          title="Hemo Group"
        >
          <Popup>
            Tecnotics <br /> Soluciones Corporativas
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
