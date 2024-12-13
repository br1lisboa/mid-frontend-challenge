import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { IGetPropertiesMapped } from "../../../interfaces";

type Props = {
  properties: IGetPropertiesMapped[] | undefined;
};

export function MapProperties({ properties }: Props) {
  return (
    <>
      {properties?.length !== 0 && properties && (
        <MapContainer
          center={[properties[0].location.lat, properties[0].location.lng]}
          zoom={13}
          style={{
            height: "80%",
            zIndex: 99,
          }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {properties.length !== 0 &&
            properties?.map((property) => (
              <Marker
                key={property.id}
                position={[property.location.lat, property.location.lng]}
              >
                <Popup>
                  <div>
                    <h3 className="text-xl">{property.title}</h3>
                    <p>{property.description}</p>
                    <p>
                      <strong>Precio: {property.price}</strong>
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      )}
    </>
  );
}
