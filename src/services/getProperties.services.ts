import axios from "axios";

import { axiosInstance } from "./axios-instance";
import { IGetProperties } from "../interfaces";

export async function getProperties({ page = 1, limit = 10 } = {}) {
  try {
    const response = await axiosInstance.get<IGetProperties>("/properties", {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Error fetching properties"
      );
    } else {
      throw new Error("Error fetching properties");
    }
  }
}
