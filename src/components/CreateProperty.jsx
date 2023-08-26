import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { axiosURL } from "../settings/index";
import Navbar from "../components/Navbar";
import useInput from "../components/Hooks/useInput";
import Swal from "sweetalert2";

function CreateProperty() {
  const description = useInput();
  const address = useInput();
  const price = useInput();
  const image = useInput();
  const locality = useInput();
  const bedrooms = useInput();
  const baths = useInput();
  const square_meters = useInput();
  const post_date = useInput();
  const categoria = useInput();

  const state = useInput();
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    console.log("description", description);
    axios
      .post(
        `${axiosURL}/admin/add-property`,
        {
          description: description.value,
          address: address.value,
          price: price.value,
          image: image.value,
          locality: locality.value,
          bedrooms: bedrooms.value,
          baths: baths.value,
          square_meters: square_meters.value,
          state: state.value,
          post_date: post_date.value,
          categoria: categoria.value,
        },
        { withCredentials: true }
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: `Propiedad creada con éxito`,
          showConfirmButton: false,
        });
        navigate("/")
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="caja1">
      <Navbar />
      <div className=" flex min-h-full flex-col justify-center px-8 py-8 lg:px-8 ">
        <form className="w-full max-w-lg" onSubmit={handleCreate}>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="url imagen"
              {...image}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="$"
              {...price}
              min="0"

            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="descripción"
              {...description}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="direccion"
              {...address}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="localidad"
              {...locality}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...bedrooms}
              type="number"
              placeholder="habitaciones"
              min="0"

            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...baths}
              type="number"
              placeholder="baños"
              min="0"

            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...square_meters}
              type="number"
              placeholder=" M²"
              min="0"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...state}
              type="text"
              placeholder="venta o alquiler"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...post_date}
              type="date"
              placeholder="fecha de publicación"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <select
              {...categoria}
              placeholder="categoria"
              type="text"
              /* id="type" */
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="casa" selected>
                Casa
              </option>
              <option value="departamento">Departamento</option>
              <option value="ph">PH</option>
              <option value="terreno">Terreno</option>
              <option value="local">Local</option>
            </select>

            {/* <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...categoria}
              type="text"
              placeholder="categoria"
            /> */}
          </div>
          <button
            className="flex items-center bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded "
            type="submit"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProperty;
