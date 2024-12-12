import { NavBar } from "../navbar/NavBar";

type TLayout = {
  children: React.ReactNode | React.ReactNode[];
  isLoading?: boolean;
};

export function Layout(props: TLayout) {
  const { children, isLoading = false } = props;

  return (
    <div className="bg-[#F6F6F6] h-full bg-red flex flex-col gap-4">
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-99">
          <div className="text-white">Cargando...</div>
        </div>
      )}

      <NavBar />
      {children}
    </div>
  );
}
