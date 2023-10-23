import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import Login from "./components/Login";


function App() {
  return (
<>
<BrowserRouter>
<Header/>
<Routes>
<Route  path="/" exact  element={<ProductListing/>}/>
<Route  path="/login" element={<Login/>}/>
<Route  path="/product/:productId" element={<ProductDetails/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
