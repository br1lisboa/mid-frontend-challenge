import axios from "axios";
import { axiosInstance } from "./axios-instance";
import { IGetProperty, IGetPropertyMapped } from "../interfaces";
import {
  capitalizeFirstLetter,
  // formatCurrency,
  // formatDateToEnglish,
} from "../utils";

function propertiesMapper(property: IGetProperty): IGetPropertyMapped {
  return {
    title: capitalizeFirstLetter(property.title) || "No title",
  };
}

export async function getProperty(id: string) {
  if (!id) return;

  try {
    const response = await axiosInstance.get<IGetProperty>(`/properties/${id}`);
    return propertiesMapper(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Error fetching properties"
      );
    } else {
      throw new Error("Error fetching properties");
    }
  }
}
