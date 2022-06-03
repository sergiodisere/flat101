import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import './styles/index.scss'
import ListProductsHome from "./components/ListProductsHome.js/ListProductsHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/listProducts" element={<ListProductsHome />} />
    </Routes>
  );
}

export default App;
