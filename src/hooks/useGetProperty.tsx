import { useQuery } from "react-query";
import { getProperty } from "../services/getProperty.services";
import { KEY_PROPERTY } from "../interfaces";

type Props = {
  id: string;
};

export function useGetProperty({ id }: Props) {
  return useQuery({
    queryKey: KEY_PROPERTY,
    queryFn: () => getProperty(id),
  });
}
