
import React from 'react'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div className='home'>
            <div className='title'>
                <h1>Prueba de Código FLAT101</h1>
            </div>
            <div className='options'>
                <Link to="/listProducts" style={{ textDecoration: 'none' }}>
                    <Button className="btnHome" variant="contained">Go to List Products</Button>
                </Link>
                <Link to="/addProduct" style={{ textDecoration: 'none' }}>
                    <Button className="btnHome" variant="outlined">Go to Add Product</Button>
                </Link>
            </div>
        </div>
    )
}

export default Home