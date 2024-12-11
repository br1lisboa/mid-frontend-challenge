import { useGetProperties } from "../../hooks";

export default function Home() {
  const { data } = useGetProperties();
  console.log({ data });

  return <div>Home</div>;
}
