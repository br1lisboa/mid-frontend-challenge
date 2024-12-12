import { Link, useLocation } from "react-router-dom";
import { Image } from "../image/Image";
import { useIsMobile } from "../../hooks";

export function NavBar() {
  const { isMobile } = useIsMobile();

  const { pathname } = useLocation();

  const ICON = isMobile
    ? "../../public/red-atlas-icon.png"
    : "../../public/red-atlas.png";

  return (
    <nav className="relative bg-white">
      <div className="p-4">
        <div className="flex justify-between">
          <Image src={ICON} alt="red-atlas-icon" to="/" />

          <div className="flex gap-8 items-center align-middle">
            <Link
              to="/create"
              className={`text-gray-800 ${
                pathname === "/create" && "underline font-semibold"
              }`}
            >
              Crear propiedad
            </Link>

            <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
              <Image
                src="../../public/almendra.jpeg"
                alt="profile-img"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
