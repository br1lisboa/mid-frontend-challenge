export interface IGetProperties {
  id: string;
  title: string;
  description: string;
  location: Location;
  address: string;
  images: string[];
  type: string;
  status: Status;
  isActive: boolean;
  price: number;
  area: number;
  createdAt: Date;
  updatedAt: Date;
  owner: Owner;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface Owner {
  name: string;
  contact: string;
}

export enum Status {
  Rent = "rent",
  Sale = "sale",
}
