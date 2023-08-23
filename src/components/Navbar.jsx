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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [windowDimension, setWindowDimension] = useState({
    innerHeigth: window.innerHeight,
    innerWidth: window.innerWidth,
  });
  const detectSize = () => {
    setWindowDimension({
      innerHeigth: window.innerHeight,
      innerWidth: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.addEventListener("resize", detectSize);
    };
  }, [windowDimension.innerWidth]);

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
    dispatch(getLocation(searchInput));
    dispatch(getCategories(""));
  }; //Esta funcion es enviado por el evento onsubmit en mi form que es la barra de busqueda, enviando con el dispatch la accion (getLocation) y el estado actual de searchInput que ya fue anteriormente setada por setsearchInput para de esta manera actualizar el estado en la store.

  const handleClick = (state) => {
    dispatch(getState(state)); //alquiler o venta
    navigate("/");
  }; //con el dispatch envio la accion seteada al reducer y asi cambiar el estado estado inicial, esta funcion handleClick la llamo en los links de venta y alquiler en el evento onclik ahi paso por argumento la palabra que quiero que me setee mi action("alquiler", "venta").

  const handleClickFilter = () => {
    //boton limpiar
    dispatch(getCategories("")); //seteo categorias
    dispatch(getLocation("")); //seteo locacion
    setSearchInput(""); //seteo mi buscador
    setCategoryToggle("Categorias"); //seteo mi estado del boton limpiar
  };

  console.log("user", user);
  const handleClickCategories = (category) => {
    const handleSearchClick = (e) => {
      dispatch(getCategories(category)); //Aqui traigo mis categorias(alquiler, casa, ph, terreno)
      dispatch(getLocation(""));
      setCategoryToggle(category);
      setSearchInput("");
    };
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
      <header class="bg-[#FE4236] justify-center">
        <nav
          class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div class="flex lg:flex-1 ">
            <input
              type="text"
              className="mb-3 mr-10 pb-2 border-black-500 border-2 w-100"
            ></input>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                href=""
                className="font-semibold leading-6 text-white hover:text-indigo-600 ml-auto mr-8"
              >
                Venta
              </button>
              <button
                type="submit"
                href=""
                className="font-semibold leading-6 text-white hover:text-indigo-600 ml-auto mr-8"
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
                <Link to={"/edit-user"}>   Mi perfil</Link>
              
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
      </header>
    </div>
  );
}

export default Navbar;
