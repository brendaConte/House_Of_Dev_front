import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { axiosURL } from '../../settings';


function EditUser() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${axiosURL}/users/edit-user/`,
        { name, lastname, email, phone, id: user.id },
        { withCredentials: true }
      )
      .then((userEdit) => {
        console.log("usuario editado", userEdit);
        Swal.fire({
          icon: "success",
          title: `Edición exitosa`,
        });
        dispatch(setLogin(userEdit.data)); //envio la informacion a redux
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  useEffect(() => {
    setEmail(user.email);
    setName(user.name);
    setLastname(user.lastname);
    setPhone(user.phone);
  }, [user]);

  return (
    <div>EditUser</div>
  )
}

export default EditUser