import React from "react";
import axios from "axios";
import { axiosURL } from "../../settings/index";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectProperty } from "../state/selectProperty";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

function EditProperty() {
  const propertySelected = useSelector((state) => state.propertySelected);
  console.log("propertyselected", propertySelected);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        {
          description,
          address,
          price,
          image,
          locality,
          bedrooms,
          baths,
          square_meters,
          post_date,
          state,
          id: propertySelected.id,
        },
        { withCredentials: true }
      )
      .then((propertyEdit) => {
        Swal.fire({
          icon: "success",
          title: `Guardado`,
        });
        dispatch(getSelectProperty(propertyEdit.data));
        navigate("/");})
      .catch((error) => {
        console.log("error", error);
      });
  };

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
  }, [propertySelected]);

  return (
    <div className="caja1">
      <Navbar />
      <div className=" flex min-h-full flex-col justify-center px-8 py-8 lg:px-8 ">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="w-full">
            <div className="w-full  flex flex-col gap-1">
              <div className="  flex items-center justify-center px-3 mb-6 md:mb-0">
                <img
                  src={image}
                  className="ml-12 w-[300px]"
                  type="url"
                  onChange={handleImageChange}
                />
              </div>
              <div className="w-full px-3 mb-6 md:mb-0 flex flex-row items-center justify-center gap-2 ">
                <p className="w-[120px] ">Precio:</p>
                <input
                  className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  onChange={handlePriceChange}
                  type="text"
                  value={price}
                  placeholder="$"
                />
              </div>
              <div className="w-full px-3 mb-6 md:mb-0 flex flex-row items-center justify-center gap-2 ">
                <p className="w-[120px] ">Descripcion:</p>
                <input
                  className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  onChange={handleDescriptionChange}
                  type="text"
                  value={description}
                  placeholder="descripción"
                />
              </div>
              <div className="w-full px-3 mb-6 md:mb-0 flex flex-row items-center justify-center gap-2 ">
                <p className="w-[120px]">Direccion:</p>
                <input
                  className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  value={address}
                  onChange={handleAddressChange}
                  type="text"
                  placeholder="direccion"
                />
              </div>
              <div className="w-full px-3 mb-6 md:mb-0 flex flex-row items-center justify-center gap-2 ">
                <p className="w-[120px]">Localidad:</p>
                <input
                  className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  onChange={handleLocalityChange}
                  type="text"
                  placeholder="localidad"
                  value={locality}
                />
              </div>
              <div className="w-full px-3 mb-6 md:mb-0 flex flex-row items-center justify-center gap-2 ">
                <p className="w-[120px]">Dormitorios:</p>
                <input
                  className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  onChange={handleBedroomsChange}
                  type="text"
                  placeholder="habitaciones"
                  value={bedrooms}
                />
              </div>
              <div className="w-full px-3 mb-6 md:mb-0 flex flex-row items-center justify-center gap-2 ">
                <p className="w-[120px]">Baños:</p>
                <input
                  className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  onChange={handleBathsChange}
                  type="text"
                  placeholder="baños"
                  value={baths}
                />
              </div>
              <div className="w-full px-3 mb-6 md:mb-0 flex flex-row items-center justify-center gap-2 ">
                <p className="w-[120px]">Metros cuadrados:</p>
                <input
                  className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  onChange={handleSquareMetersChange}
                  type="number"
                  value={square_meters}
                  placeholder=" M²"
                />
              </div>
              <div className="w-full px-3 mb-6 md:mb-0 flex flex-row items-center justify-center gap-2 ">
                <p className="w-[120px]">Estado:</p>
                <input
                  className="appearance-none block w-50 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  onChange={handleStateChange}
                  value={state}
                  type="text"
                  placeholder=" estado"
                />
              </div>
              <div className="flex w-full justify-center">
                <button
                  className="w-1/2 text-center bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded "
                  type="submit"
                >
                  Guardar
                </button>
              </div>
            </div>
            <div />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProperty;
