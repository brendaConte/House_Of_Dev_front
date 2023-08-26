import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";
import axios from "axios";
import { axiosURL } from "./settings/index.js";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "./components/state/user";
import { useEffect } from "react";
import PropertyDetail from "./components/Properties/PropertyDetail";
import CreateProperty from "./components/CreateProperty";
import EditUser from "./components/User/EditUser";
import EditProperty from "./components/Properties/EditProperty";
import UserVisits from "./components/User/UserVisits";
import Favorites from "./components/Favorites";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    axios
      .get(`${axiosURL}/users/me`, { withCredentials: true })
      .then((resp) => dispatch(setLogin(resp.data)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route
          path="/create-property"
          element={
            user.is_admin ? <CreateProperty /> : <div>No tienes permisos </div>
          }
        />
        <Route path="/edit-property" element={<EditProperty />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="/user-visits" element={<UserVisits />} />
        <Route path="/edit-user" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;