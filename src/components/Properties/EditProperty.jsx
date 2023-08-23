import React from "react";
import axios from "axios";
import { axiosURL } from "../../settings/index";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectProperty } from "../state/selectProperty";


function EditProperty() {
  const propertySelected = useSelector((state) => state.propertySelected);
  console.log(propertySelected)
  const dispatch= useDispatch() ;
  
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [locality, setLocality] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [baths, setBaths] = useState("");
    const [square_meters, setSquareMeters] = useState("");
    const [post_date, setPostDate] = useState("");
    const [state, setState] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
    axios
    .put(
      `${axiosURL}/admin/edit-property`,
      {description, address, price, image, locality, bedrooms, baths, square_meters, post_date ,state, id:propertySelected.id  },
      { withCredentials: true }
    )
    .then((propertyEdit) => {
      Swal.fire({
        icon: "success",
        title: `Guardado`,
      });
      dispatch(getSelectProperty(propertyEdit.data)); 
    })
    .catch((error) => {
      console.log("error", error);
    }); 
    }
  
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
    const handleAddressChange = (e) => {
      setAddress(e.target.value);
    };
    const handlePriceChange = (e) => {
      setPrice(e.target.value);
    };
    const handleImageChange = (e) => {
      setImage(e.target.value);
    };
    const handleLocalityChange = (e) => {
      setLocality(e.target.value);
    };
    const handleBedroomsChange = (e) => {
      setBedrooms(e.target.value);
    };
    const handleBathsChange = (e) => {
      setBaths(e.target.value);
    };
    const handleSquareMetersChange = (e) => {
      setSquareMeters(e.target.value);
    };
    const handlePostDateChange = (e) => {
      setPostDate(e.target.value);
    };
    const handleStateChange = (e) => {
      setState(e.target.value);
    };
  
    useEffect(() => {
      setDescription(propertySelected.description);
      setAddress(propertySelected.address);
      setPrice(propertySelected.price);
      setImage(propertySelected.image);
      setLocality(propertySelected.locality);
      setBedrooms(propertySelected.bedrooms);
      setBaths(propertySelected.baths);
      setSquareMeters(propertySelected.square_meters);
      setPostDate(propertySelected.post_date);
      setState(propertySelected.state);
  
    }, [getSelectProperty]);

  return (
    <div className="caja1">
      <Navbar />
      <div className=" flex min-h-full flex-col justify-center px-8 py-8 lg:px-8 ">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div>
            <div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                
                  type="text"
                  placeholder="url imagen"
                >  <img src={image} type="url"   onChange={handleImageChange}/></input>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                 {...price}
                 onChange={handlePriceChange}
                  type="text"
                  placeholder="$"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  {...description}
                  onChange={handleDescriptionChange}
                  type="text"
                  placeholder="descripción"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                 value= {address}
                  onChange={handleAddressChange}
                  type="text"
                  placeholder="direccion"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  {...locality}
                  onChange={handleLocalityChange}
                  type="text"
                  placeholder="localidad"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  {...bedrooms}
                  onChange={handleBedroomsChange}
                  type="text"
                  placeholder="habitaciones"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  {...baths}
                  onChange={handleBathsChange}
                  type="text"
                  placeholder="baños"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  {...square_meters}
                  onChange={handleSquareMetersChange}
                  type="number"
                  placeholder=" M²"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  {...state}
                  onChange={handleStateChange}
                  type="text"
                  placeholder=" estado"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  {...post_date}
                  onChange={handlePostDateChange}
                  type="date"
                  placeholder="fecha de publicación"
                />
              </div>
              <button
                className="flex items-center bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded "
                type="submit"
              >
                Guardar
              </button>
            </div>
            <div />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProperty;
