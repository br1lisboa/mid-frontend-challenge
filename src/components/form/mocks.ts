export const INPUTS = [
  {
    name: "title",
    label: "Titulo",
    placeholder: "Ingresa el titulo.",
  },
  {
    name: "description",
    label: "Descripcion",
    placeholder: "Ingresa una descripcion.",
  },
  {
    name: "address",
    label: "Direccion",
    placeholder: "Ingresa la direccion.",
  },
  {
    name: "price",
    label: "Precio",
    placeholder: "De tu propiedad.",
  },
  {
    name: "ownerName",
    label: "Nombre del propietario",
    placeholder: "Ingresa el nombre del propietario",
  },
  {
    name: "ownerAddress",
    label: "Direccion del propietario",
    placeholder: "Ingresa la direccion del propietario",
  },
];

export const SELECTS = [
  {
    name: "type",
    label: "Tipo de propiedad",
    options: [
      {
        value: "",
        label: "Selecciona",
      },
      {
        value: "apartment",
        label: "Departamento",
      },
      {
        value: "house",
        label: "Casa",
      },
      {
        value: "land",
        label: "Terreno",
      },
    ],
  },
  {
    name: "status",
    label: "Destino de propiedad",
    options: [
      {
        value: "",
        label: "Selecciona",
      },
      {
        value: "sale",
        label: "Venta",
      },
      {
        value: "rent",
        label: "Renta",
      },
    ],
  },
];
