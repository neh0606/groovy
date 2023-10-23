import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, thumbnail, price, category } = product;
    return (
      <div className="col-12  col-md-6 col-lg-4 col-xl-3" key={id}>
      <Link to={`/product/${id}`} className="anchorDeco">
        <div className="card">
        <img src={thumbnail} alt="images" className="w-full h-96" />
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">$ {price}</p>
              <p className="card-text">{category}</p>
          </div>
        </div>
      </Link>
    </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;