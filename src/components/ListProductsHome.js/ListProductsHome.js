import React, {useState, useEffect} from 'react'
import Footer from '../Footer/Footer';
import ListProducts from '../ListProducts/ListProducts';
import Navbar from '../NavBar/Navbar';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const ListProductsHome = () => {
  const [dataDisplay, setDataDisplay] = useState([])
  const [listProducts, setListProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState([])

  return (
    <div>
      <Navbar setDataDisplay={setDataDisplay} listProducts={listProducts} />
      <Selector listProducts={listProducts} setDataDisplay={setDataDisplay} totalProducts={totalProducts}/>
      <ListProducts  setListProducts={setListProducts} dataDisplay={dataDisplay} setDataDisplay={setDataDisplay} totalProducts={totalProducts} setTotalProducts={setTotalProducts}/>
      <Footer/>
    </div>
  )
}

const Selector = ({ listProducts, setDataDisplay, totalProducts }) => {
  const [orderBy, setOrderBy] = React.useState('');

  const handleChange = (event) => {
    setOrderBy(event.target.value);
    switch(event.target.value){
      case 1:
        setDataDisplay([...listProducts.sort((a, b) => a.name < b.name ? -1 : +(a.name > b.name))])
        break;
      case 2:
        setDataDisplay([...listProducts.sort((a, b) => a.price < b.price ? -1 : +(a.price > b.price))])
        break;
      default: 
        setDataDisplay([...listProducts])
        break;
    }
  };
  return (
    <div className='selector'>
      <FormControl sx={{ m: 1, width: 300 }} disabled>
        <InputLabel id="demo-multiple-name-label">Products ({totalProducts})</InputLabel>
        <Select 
          labelId="products"
          id="demo-simple-select"
          label="Products"
        >
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Order By</InputLabel>
        <Select
          labelId="order-by"
          id="demo-simple-select"
          value={orderBy}
          label="Order By"
          onChange={(e) => handleChange(e)}
        >
          <MenuItem value={1}>Name</MenuItem>
          <MenuItem value={2}>Price</MenuItem>
        </Select>
      </FormControl>
    </div>

  )
}

export default ListProductsHome