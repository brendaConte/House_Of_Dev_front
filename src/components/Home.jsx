import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Navbar />

      {user.is_admin ? (
        <>
          <div className="container mx-auto p-4">
            <div className="flex justify-between mb-4">
              <h3 className="text-uppercase text-lg">Propiedades</h3>
              <hr className="border-t border-gray-400" />
              <div className="ml-2 p-3">
                <Link
                  to={"/create-property"}
                  className="block text-blue-500 hover:underline"
                >
                  Agregar <br />
                  propiedad
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container mx-auto p-4">
            <div className="mb-3">
              <h3 className="text-uppercase text-lg">Propiedades</h3>
              <hr className="border-t border-gray-400" />
            </div>
          </div>
        </>
      )}

      <Cards />
    </>
  );
}

export default Home;
