import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Pagination from '@mui/material/Pagination';
import {getProductsByPageAndLimit} from '../../services/products'


const ListProducts = ({dataDisplay, setDataDisplay, setListProducts, totalProducts, setTotalProducts }) => {
  const numMaxProductsScreen = 6;

  const getProducts = (page) => {
    getProductsByPageAndLimit(page, 6)
    .then(e=>{
      setTotalProducts(e.totalProducts)
      setDataDisplay(e.products)
      setListProducts(e.products)
    });
  }

  useEffect(() => {
    getProducts(1)
  }, [])

  const renderList = () => {
    return dataDisplay.map((item, index) => {
      return (
        <Card sx={{ maxWidth: 345 }} className="cardItem" key={item.id}>
          <div style={{ position: "relative" }}>
            <CardActions disableSpacing style={{ position: "absolute" }}>
              <IconButton aria-label="add to favorites" style={{ background: "white" }}>
                <FavoriteBorderIcon />
              </IconButton>
            </CardActions>
            <CardMedia component="img" style={{ display: "block", objectFit: "cover" }}
              height="140"
              image={item.image}
              alt={item.description}
            />
          </div>
          <CardContent>
            <Typography className="text-title" gutterBottom align="center" variant="h6" component="div">
              {item.name}
            </Typography>
            <Typography className="text-price" align="center" variant="body2" color="text.secondary">
              £{item.price} / m<sup>2</sup>
            </Typography>
          </CardContent>
        </Card>
      )
    })
  }

  const handleChangePagination = (page) => {
    getProducts(page)
  }

  return (
    <div>
      <div className="products">
        <div className='listProducts'>
          {
            dataDisplay && renderList()
          }
        </div>
        <div className="pagination">
          {totalProducts &&
            <Pagination count={Math.ceil(totalProducts / numMaxProductsScreen)} shape="rounded" onChange={(event, value) => handleChangePagination(value)} />
          }
        </div>
      </div>
    </div>
  )
}


export default ListProducts