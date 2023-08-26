import axios from "axios";
import { axiosURL } from "../settings/index";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { getSelectProperty } from "../components/state/selectProperty";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function Cards() {
  const [refreshDelete, setRefreshDelete] = useState(true);
  const [properties, setProperties] = useState([]);
  const user = useSelector((state) => state.user);
  const state = useSelector((state) => state.properties);
  const location = useSelector((state) => state.location);
  const category = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Addfavoritos = (propertyId) => {
    console.log("user", user);
    axios
      .post(
        `${axiosURL}/favorites/add-favorites`,
        { userId: user.id, propertyId },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: `Se ha agregado con éxito`,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Ya esta en favoritos",
          // showCancelButton: false,
          showConfirmButton: false,
        }); console.log(error);
      });
  };

  const handleEdit = (house) => {
    dispatch(getSelectProperty(house));
    navigate("/edit-property");
  };

  const handleDelete = (id) => {
    console.log("id", id);
    axios
      .delete(`${axiosURL}/admin/delete-property/${id}`, {
        withCredentials: true,
      })
      .then((property) => {
        property.data;
        setRefreshDelete(!refreshDelete);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("Location=>", location);
    console.log("category=>", category);

    if (!location && !category) {
      console.log("1");
      axios
        .get(`${axiosURL}/properties`)
        .then((propiedades) => {
          console.log("adasdas");
          const filterByState = propiedades.data.filter((house) => {
            return house.state == state; //venta o alquiler;
            //ahora necesito category y location
          });
          console.log("PROPIEDADES", propiedades.data);
          setProperties(filterByState);
        })
        .catch((err) => console.log(err));
    }
    console.log("estado ", state);
    if (location) {
      console.log("2");
      axios
        .get(`${axiosURL}/properties/search/${location}/${state}`)
        .then((properties) => {
          console.log("Properties location", properties.data);
          setProperties(properties.data);
        });
    } else if (category) {
      console.log("3");
      axios
        .get(`${axiosURL}/properties/filter-category/${category}/${state}`)
        .then((properties) => {
          console.log("Properties location", properties.data);
          setProperties(properties.data);
        });
    }
  }, [refreshDelete, location, category, state]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {properties.map((house) => (
          <div className="bg-white shadow-lg rounded-lg">
            <div className="flex">
              <div className="w-1/2">
                <div className="relative">
                  <img
                    src={house.image}
                    alt="House"
                    className="rounded-t-lg w-full"
                  />
                </div>
                {user && (
                  <button
                    className="border border-black mt-2 bg-blue-300 text-white ml-1"
                    onClick={() => Addfavoritos(house.id)}
                  >
                    Agregar favoritos
                  </button>
                )}
              </div>

              <div className="w-1/2 p-4">
                <div className="border p-3">
                  <p className="text-lg font-bold">${house.price}</p>
                </div>
                <div className="border p-3">
                  <p className="text-lg">{house.locality}</p>
                </div>
                <div className="border p-3">
                  <p>{house.square_meters} m²</p>
                </div>
                <div className="border p-3">
                  <p>{house.bedrooms} dormitorios</p>
                </div>
                <div className="border p-3">
                  <p>{house.baths} baños</p>
                </div>
                <div className="border p-3">
                  <p>{house.state}</p>
                </div>
                <div className="border p-3">
                  <p>{house?.category?.name}</p>
                </div>
                <div className="border p-3">
                  <p>{house.description}</p>
                </div>

                <div className="border p-3">
                  {user.is_admin ? (
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          handleEdit(house);
                        }}
                        className="rounded-lg p-2 bg-blue-500 text-white"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => {
                          handleDelete(house.id);
                        }}
                        className="rounded-lg p-2 bg-red-500 text-white "
                      >
                        Eliminar
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <button className="rounded-full p-2 bg-blue-500 text-white">
                        <CiHeart />
                      </button>
                      <a href={`/property/${house.id}`}>
                        <button className="rounded-lg p-2 mr-2 ml-2 bg-blue-500 text-white">
                          Ver más
                        </button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
