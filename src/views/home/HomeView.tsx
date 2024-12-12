import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useGetProperties } from "../../hooks";
import { Layout } from "../../components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomeView() {
  const { data, isLoading } = useGetProperties();

  const [dataSearch, setDataSearch] = useState(data);
  const [dataFilter, setDataFilter] = useState({
    typeOfProperty: "",
    state: "",
    priceAsc: false,
    properties: data,
  });

  const properties = dataSearch?.length ? dataSearch : data;
  const propertiesFilter = dataFilter.properties?.length
    ? dataFilter.properties
    : data;
  const types = new Set(data?.map((property) => property.typeOfProperty));
  const states = new Set(data?.map((property) => property.state));

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const search = e.target.value;
    setDataSearch(
      data?.filter((property) => property.title.includes(search)) || []
    );
  }

  function handleFilter() {
    const filter = properties?.filter((property) => {
      if (dataFilter.typeOfProperty) {
        return property.typeOfProperty === dataFilter.typeOfProperty;
      }
      if (dataFilter.state) {
        return property.state === dataFilter.state;
      }
      if (dataFilter.priceAsc) {
        return property.price;
      }
    });

    setDataFilter((prev) => ({ ...prev, properties: filter }));
  }

  return (
    <Layout isLoading={isLoading}>
      <h1 className="text-3xl font-bold text-center py-5">Properties</h1>
      <div className="flex gap-2 h-full ">
        <div className="flex-1 bg-red-200 z-10">
          <div className="relative">
            <div className="flex gap-2 h-10 px-2 absolute top-2 right-2 w-1/2">
              <input
                type="text"
                placeholder="Search"
                className="w-full"
                onChange={handleSearch}
              />
              {dataSearch?.length === 0 && <p>No se encontraron resultados</p>}
            </div>
          </div>

          {properties && (
            <MapContainer
              center={[properties[0].location.lat, properties[0].location.lng]}
              zoom={13}
              style={{ height: "100%", width: "100%", zIndex: -1 }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {properties.map((property) => (
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
        </div>

        <div className="flex-1 bg-yellow-200">
          <div className="flex gap-2 flex-wrap justify-around">
            <div className="px-2 top-20 right-2 w-full">
              <select
                className="w-full"
                onChange={(e) =>
                  setDataFilter({
                    ...dataFilter,
                    typeOfProperty: e.target.value,
                  })
                }
              >
                <option value="">Type of property</option>
                {[...types].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <select
                className="w-full"
                onChange={(e) =>
                  setDataFilter({ ...dataFilter, state: e.target.value })
                }
              >
                <option value="">State</option>
                {[...states].map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>

              <div>
                <label>Price Asc</label>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setDataFilter({
                      ...dataFilter,
                      priceAsc: e.target.checked,
                    })
                  }
                />
              </div>

              <button onClick={handleFilter}>Filter</button>
            </div>

            {propertiesFilter?.map((property) => (
              <div
                className="bg-gray-100 p-2 rounded-lg max-w-[280px]"
                key={property.id}
              >
                <img
                  className="h-20 rounded w-full object-cover "
                  src={property.image}
                  alt="content"
                />
                <h2 className="text-lg text-gray-900 font-medium title-font ">
                  {property.title}
                </h2>
                <h3 className="tracking-widest text-xs font-medium title-font">
                  Address: {property.address}
                </h3>
                <h3 className="tracking-widest text-xs font-medium title-font">
                  Type: {property.typeOfProperty}
                </h3>
                <h3 className="tracking-widest text-xs font-medium title-font">
                  Price: {property.price}
                </h3>
                <h3 className="tracking-widest text-xs font-medium title-font">
                  State: {property.state}
                </h3>
                <h3 className="tracking-widest text-xs font-medium title-font">
                  Available: {property.available}
                </h3>
                <h3 className="tracking-widest text-xs font-medium title-font">
                  Area: {property.area}
                </h3>
                <h3 className="tracking-widest text-xs font-medium title-font">
                  Date: {property.dateAt}
                </h3>
                <Link to={`/property/${property.id}`}>Go to</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
