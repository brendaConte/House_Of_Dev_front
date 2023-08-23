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
          post_date: post_date.value
        },
        { withCredentials: true }
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: `Propiedad creada con éxito`,
          showConfirmButton: false,
        })
        navigate("/");
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
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...baths}
              type="number"
              placeholder="baños"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...square_meters}
              type="number"
              placeholder=" M²"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...state}
              type="text"
              placeholder="estado"
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
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              //nombre de la categoria
              type="text"
              placeholder="categoria"
            />
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
