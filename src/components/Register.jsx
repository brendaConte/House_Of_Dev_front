import React from "react";
import { axiosURL } from "../settings/index.js";
import useInput from "./Hooks/useInput.js";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import HodLogo from "../assets/HodLogin.jsx";
import { Link } from "react-router-dom";

const Register = () => {
  const name = useInput();
  const lastname = useInput();
  const phone = useInput();
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log("name", name)
    axios
      .post(
        `${axiosURL}/users/register`,
        {
          name: name.value,
          lastname: lastname.value,
          password: password.value,
          phone: phone.value,
          email: email.value,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("RES DE LOGIN", res.data.email);
        Swal.fire({
          icon: "success",
          title: `Registro exitoso`,
          showConfirmButton: false,
        });
        navigate("/login");
      })
      .catch((error) => {
        if (email.value) {
          Swal.fire({
            icon: "error",
            title: `El email ya se encuentra registrado`,
            // showCancelButton: false,
            showConfirmButton: false,
          });
        }
        console.log(error);
      });
  };

  return (
    <div className="h-screen w-full ">
      <div className=" flex min-h-full flex-col justify-center px-6 py-20 lg:px-8 bg-[#FE4236]">
        <form
          onSubmit={handleSubmit}
          className=" sm:max-w-sm mb-2 text-white justify-center flex min-h-full flex-col justify-center px-6 py-6lg:px-6"
        >
          <div
            className="p-12 md:p-24 max-w-md mx-auto text-white"
            onSubmit={handleSubmit}
          >
                    <Link to={"/"} > 
                    <HodLogo />  </Link>
           <p className="py-2 px-0 text-left"> Datos personales :</p>
            <div className="mt-0 flex flex-col space-y-4 text-center bg-[#FE4236] text-black mt-5 text-center">
              <input
                className="py-2 px-4  rounded"
                type="text"
                required
                {...name}
                placeholder="Nombre"
              ></input>
              <input
                className="py-2 px-4  rounded"
                type="text"
                required 
                placeholder="Apellido"
                {...lastname}
              ></input>
              <input
                className="py-2 px-4  rounded"
                type="text"
                required
                {...phone}
                placeholder="Telefono"
              ></input>
              <input
                className="py-2 px-4  rounded"
                type="email"
                required
                {...email}
                placeholder="E-mail"
              ></input>
              <input
                placeholder="contraseña"
                className="py-2 px-4  md:py-2 rounded "
                type="password"
                required
                {...password}
              ></input>
              <button
                type="submit"
                className="text-white inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
              >
                Registrarme
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
