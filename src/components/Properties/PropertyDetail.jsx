import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { axiosURL } from "../../settings/index";
import Navbar from "../Navbar";
import { CiHeart } from "react-icons/ci";

function PropertyDetail() {
  const [property, setProperty] = useState({});
  const { id } = useParams();

  const fetchProperties = (id) => {
    axios
      .get(`${axiosURL}/properties/${id}`)
      .then((fetchedProperty) => {
        setProperty(fetchedProperty.data);
        console.log("fetch property", fetchedProperty.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProperties(id);
  }, []);

  return (
    <div>
      <Navbar />
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
     
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <img src={property.image} className="object-fit:cover cover h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="property">
</img>
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              {property.description}
            </p>
            <br />
            <div className="text-gray-900 font-bold text-xl mb-2">
              ${property.price}
            </div>
            <h1 className="text-gray-900 font-bold">Localidad:</h1>{" "}
            <p className="text-gray-700 text-base">{property.locality}</p>
            <br />
            <h1 className="text-gray-900 font-bold">Direccion:</h1>
            <p className="text-gray-700 text-base">{property.address}</p>
            <br />
            <h1 className="text-gray-900 font-bold">Habitaciones:</h1>
            <p className="text-gray-700 text-base">{property.bedrooms}</p>
            <br />
            <h1 className="text-gray-900 font-bold">Baños:</h1>
            <p className="text-gray-700 text-base">{property.baths}</p>
            <br />
            <h1 className="text-gray-900 font-bold">m2:</h1>
            <p className="text-gray-700 text-base">{property.square_meters}</p>
            <br />
            <h1 className="text-gray-900 font-bold">Estado:</h1>
            <p className="text-gray-700 text-base">{property.state}</p>
          </div>
          <div className="flex items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
              Agendar cita
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <CiHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
