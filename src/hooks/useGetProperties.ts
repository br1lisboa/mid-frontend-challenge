import { useQuery } from "react-query";
import { getProperties } from "../services";
import { KEY_PROPERTIES } from "../interfaces";

export function useGetProperties() {
  return useQuery({
    queryKey: KEY_PROPERTIES,
    queryFn: () => getProperties(),
  });
}
