import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosURL } from "../settings";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";


const Favorites = () => {
  const [houses, setHouses] = useState([]);
  const [isDeleted, setisDeleted] = useState(false); // New state to track deletions
  const user = useSelector((state) => state.user);
  const removeFavorites = (houseid) => {
    axios
      .delete(
        `${axiosURL}/favorites/delete-favorites/${user.id}/${houseid}`,

        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("response", response);
        setisDeleted(!isDeleted); // Increment deleteCount using prevCount
      })
      .catch((error) => {
        console.error("Error fetching houses:", error);
      });
  };

  useEffect(() => {
    if (user.admin) {
      axios
        .get(`${axiosURL}/favorites/all-favorites`, { withCredentials: true })
        .then((response) => {
          console.log("response", response);
          setHouses(response.data); // Assuming response.data is an array of house objects
        })
        .catch((error) => {
          console.error("Error fetching houses:", error);
        });
    } else {
      axios
        .get(`${axiosURL}/favorites/by-id/${user.id}`, {
          withCredentials: true,
        })
        .then((response) => {
          setHouses(response.data); // Assuming response.data is an array of house objects
        })
        .catch((error) => {
          setHouses([]);
        });
    }
  }, [user.id, isDeleted]);

  return (
    <div>
      <Navbar></Navbar>
      {houses.map((house) => (
        <div key={house.id} className="flex p-4 border">
          <div className="w-1/2 pr-4">
            <h1 className="text-3xl mb-1">
              Email:{house.user.email} Name:{house.user.name}
            </h1>
            <div className="relative">
              <img
                src={house?.property?.image}
                alt="House"
                className="rounded-t-lg w-full"
              />
              <button
                className="border border-black mt-2 bg-blue-300 text-white ml-1"
                onClick={() => removeFavorites(house.property.id)}
              >
                Remover favorito
              </button>
            </div>
          </div>

          <div className="w-1/2 p-4">
            <div className="border p-3">
              <p className="text-lg font-bold">${house?.property?.price}</p>
            </div>
            <div className="border p-3">
              <p className="text-lg">{house.property?.locality}</p>
            </div>
            <div className="border p-3">
              <p>{house.property?.square_meters} m²</p>
            </div>
            <div className="border p-3">
              <p>{house.property?.bedrooms} dormitorios</p>
            </div>
            <div className="border p-3">
              <p>{house.property?.baths} baños</p>
            </div>
            <div className="border p-3">
              <p>{house.property?.state}</p>
            </div>

            <div className="border p-3">
              <p>{house.property?.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;