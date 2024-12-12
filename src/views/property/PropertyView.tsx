import { useParams } from "react-router-dom";
import { useGetProperty } from "../../hooks";

export default function PropertyView() {
  const params = useParams();

  const { data, isLoading } = useGetProperty({ id: params.id || "" });

  return <div>{data?.title}</div>;
}
