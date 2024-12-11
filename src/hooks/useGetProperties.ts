import { useQuery } from "react-query";
import { getProperties } from "../services";

export function useGetProperties() {
  return useQuery({
    queryKey: "properties",
    queryFn: () => getProperties(),
  });
}
