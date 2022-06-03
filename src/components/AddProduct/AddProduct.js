import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Footer from '../Footer/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [productType, setProductType] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [createOK, setCreateOK] = useState(false);
  const [createNOK, setCreteNOK] = useState(false);
  const [onlyNumbers, setOnlyNumbers] = useState(false);

  const validateNumber = (s) => {
    s = s.replace(",", ".")
    const rgx = /^[0-9]*\.?[0-9]*$/;

    s.match(rgx) !== null ? setPrice(s) : setOnlyNumbers(true)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: name,
      productType: productType,
      price: price,
      image: image,
      description: description
    }
    fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then(result => {
        if (result.status === 201) setCreateOK(true)
      })
      .catch((error) => setCreteNOK(true))


  }
  return (
    <div className='addProduct'>
      <IconButton aria-label="add to favorites" style={{ background: "white" }} onClick={()=>navigate("/")}>
        <ArrowBackIcon />
      </IconButton>
      <h2 className='title'>Add Product</h2>
      <div className="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            <div className='form-item' ><TextField required id="outlined-required" label="Name" placeholder="Example: Treasures Bronze Emperador" onChange={(event) => setName(event.target.value)} /></div>
            <div className='form-item' ><TextField className='form-item' required id="outlined-required" label="Description" placeholder="Example: Bronze Emperador" onChange={(event) => setDescription(event.target.value)} /></div>
            <div className='form-item' ><TextField className='form-item' required id="outlined-required" label="Product Type" placeholder="Example: Bathroom" onChange={(event) => setProductType(event.target.value)} /></div>
            <div className='form-item' ><TextField className='form-item' required id="outlined-required" label="Price (in pounds)" placeholder="Example: 32.00" onChange={(event) => setPrice(validateNumber(event.target.value))} /></div>
            <div className='form-item'><TextField className='form-item' id="outlined-required" label="Image" placeholder="Example: URL" onChange={(event) => setImage(event.target.value)} /></div>
          </label>
          <div className='btn-submit'>
            <input className="btn" type="submit" value="Submit" />
          </div>

        </form>
      </div>

      {
        createOK &&
        <div className="alert">
          <MyAlert severity="success" message="Product created successfully!" setShowAlert={setCreateOK} />
        </div>
      }
      {
        createNOK &&
        <div className="alert">
          <MyAlert severity="error" message="Product not created correctly, please try again." setShowAlert={setCreteNOK} />
        </div>
      }
      {
        onlyNumbers &&
        <div className="alert">
          <MyAlert severity="error" message="Only Numbers Please!" setShowAlert={setOnlyNumbers} />
        </div>
      }
      <Footer />
    </div>
  )
}

const MyAlert = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.setShowAlert(false);
    }, 1500);

  }, [])
  return (
    <Alert severity={props.severity}>{props.message}</Alert>
  )
}
export default AddProduct