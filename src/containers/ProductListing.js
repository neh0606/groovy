import React, { useEffect, useCallback, useMemo } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts, setProducts } from "../actions/ProductActions";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("Products :", products);
  return (
    <>
    <div className="container-fluid">
    <div className="row">
      <ProductComponent />
      </div>
      </div>
    </>
  );
};

export default ProductPage;