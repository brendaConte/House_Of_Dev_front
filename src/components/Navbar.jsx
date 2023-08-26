import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { setLogOut } from "../components/state/user";
import { getState } from "../components/state/properties";
import { getLocation } from "../components/state/location";
import { getCategories } from "../components/state/categories";
import LogoPrincipal from "../assets/LogoPrincipal";
import { Link } from "react-router-dom";
import { axiosURL } from "../settings/index";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [searchInput, setSearchInput] = useState(""); //Estado para el buscador
  const [categoryToggle, setCategoryToggle] = useState("categorias");
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {}, [user]);

  //escribo mi locacion
  /*   setSearchInput(e.target.value);
   */ //Esta funcion manejadora lo que hace es que al pasarla por un evento onChange, que esta en mi barra de busqueda, cambia el valor ingresado por el usuario por medio de la propiedad value y con el setsearchInput setea el estado inicial de searchInput quien luego va ser utilizada en el accion(getLocation).

  const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log("sadasd", searchInput);

    dispatch(getLocation(searchInput));
  }; //Esta funcion es enviado por el evento onsubmit en mi form que es la barra de busqueda, enviando con el dispatch la accion (getLocation) y el estado actual de searchInput que ya fue anteriormente setada por setsearchInput para de esta manera actualizar el estado en la store.

  const handleClick = (state) => {
    console.log("state", state);
    dispatch(getState(state)); //alquiler o venta
  }; //con el dispatch envio la accion seteada al reducer y asi cambiar el estado estado inicial, esta funcion handleClick la llamo en los links de venta y alquiler en el evento onclik ahi paso por argumento la palabra que quiero que me setee mi action("alquiler", "venta").

  const handleClickFilter = () => {
    //boton limpiar
    dispatch(getCategories("")); //seteo categorias
    dispatch(getLocation("")); //seteo locacion
    setSearchInput(""); //seteo mi buscador
    setCategoryToggle("Categorias"); //seteo mi estado del boton limpiar
  };

  const handleClickCategories = (e) => {
    const category = e.target.value;
    dispatch(getCategories(category)); //Aqui traigo mis categorias(alquiler, casa, ph, terreno)
    dispatch(getLocation(""));
    setCategoryToggle(category);
    setSearchInput("");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("borrate");
    axios
      .get(`${axiosURL}/users/logout`, { withCredentials: true })
      .then((res) => {
        console.log("LOGOUT", res.data);
        dispatch(setLogOut({}));
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-[#FE4236] flex items-center w-full px-4 justify-around p-2">
      <Link
        to={"/"}
        className="text-white font-semibold text-xl px4 mr-auto p-4"
      >
        <LogoPrincipal />
      </Link>
      <div className>
        {user && (
          <button className="font-semibold leading-6 text-white hover:text-indigo-600 ml-auto ml-9">
            <Link to={"/favoritos"}>Ver Favoritos</Link>
          </button>
        )}
      </div>
      <div class="bg-[#FE4236] justify-center">
        <nav
          class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div class="inline-block relative mr-2">
            <select
              class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              id="categorySelect"
              onChange={handleClickCategories}
            >
              <option value="departamento">Departamento</option>
              <option value="ph">PH</option>
              <option value="casa">Casa</option>
              <option value="terreno">Terreno</option>
              <option value="local">Local</option>

            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <div class="flex lg:flex-1 ">
            <input
              type="text"
              className="mb-3 mr-10 pb-2 border-black-500 border-2 w-100"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); // Evitar el comportamiento predeterminado de presionar "Enter"
                  handleSubmitClick(e);
                }
              }}
            ></input>

            <button
              className="font-semibold leading-6  hover:text-indigo-600 ml-auto mr-8 border-1  bg-blue-500 w-40 text-red-300"
              onClick={handleClickFilter}
            >
              Limpiar
            </button>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                href=""
                className="font-semibold leading-6 text-white hover:text-indigo-600 ml-auto mr-8"
                onClick={() => handleClick("venta")}
              >
                Venta
              </button>
              <button
                type="submit"
                href=""
                className="font-semibold leading-6 text-white hover:text-indigo-600 ml-auto mr-8"
                onClick={() => handleClick("alquiler")}
              >
                Alquiler
              </button>
              <button
                type="submit"
                href=""
                className="font-semibold leading-6 text-white hover:text-indigo-600 ml-auto mr-8"
              >
                Agendá tu visita
              </button>
              <button
                type="submit"
                href=""
                className="font-semibold leading-6 text-white hover:text-indigo-600 ml-auto mr-8"
              >
                <Link to={"/edit-user"}> Mi perfil</Link>
              </button>
              {user.name ? (
                <button onClick={handleLogout}> Cerrar sesión</button>
              ) : (
                <button className="font-semibold leading-6 text-[#183AC8] hover:text-indigo-600 ml-auto ml-9">
                  <Link to={"/login"}> Iniciar sesión</Link>
                </button>
              )}{" "}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;