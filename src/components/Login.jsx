import { axiosURL } from "../settings/index.js";
import axios from "axios";
import useInput from "../components/Hooks/useInput.js";
import HodLogo from "../assets/HodLogin.jsx";
import { setLogin } from "../components/state/user.js";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
        `${axiosURL}/users/login`,
        {
          email: email.value,
          password: password.value
        },
        { withCredentials: true }
      )
      .then((user) => {
        Swal.fire({
          icon: "success",
          title: `Bienvenido`,
          showConfirmButton: false,
        });
        dispatch(setLogin(user.data)); //envio la informacion a redux
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          text: "Usuario o contraseña incorrecta",
          icon: "error",
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: "Aceptar",
          cancelButtonColor: "#ef233c",
        });
        console.log(error);
      });
    } 

  return (
    <div className=" h-screen w-full " >
      <div className=" flex min-h-full flex-col justify-center px-8 py-8 lg:px-8 ">
        <form
            onSubmit={handleSubmit} className="card-float container mx-auto w-80 justify-center">
          <div className="flex flex-row rounded">
        <div className="p-12 md:p-24 bg-[#FE4236] justify-center">
        <HodLogo />
          <div
            className="mt-0 flex flex-col space-y-4 text-center bg-[#FE4236] text-white mt-5 text-center"
          >
            <input
              className="py-2 px-4  rounded text-black"
              type="email"
              required
              {...email}
              placeholder="E-mail"
            ></input>

            <input
              placeholder="contraseña"
              className="py-2 px-4  md:py-2 rounded text-black"
              type="password"
              required
              {...password}
            ></input>

            <button
              type="submit"
              class="text-white inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
            >
              Iniciar sesión
            </button>
            <p >¿No tienes cuenta? 
        <button type="submit" className=" px-4 font-semibold leading-6 text-[#123AC8] hover:text-indigo-600 	;">
        <Link to={"/register"} >   Registrate</Link>
        </button>
        </p>
          </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

