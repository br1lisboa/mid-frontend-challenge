import { create } from "zustand";
import { persist } from "zustand/middleware";

type Option = {
  value: string;
  label: string;
};

type StoreState = {
  types: Option[];
  statuses: Option[];
};

export const useStoreApp = create<StoreState>()(
  persist(
    () => ({
      types: [
        { value: "house", label: "Casa" },
        { value: "apartment", label: "Departamento" },
      ],
      statuses: [
        { value: "sale", label: "Venta" },
        { value: "rent", label: "Renta" },
      ],
    }),
    {
      name: "property-store",
    }
  )
);
