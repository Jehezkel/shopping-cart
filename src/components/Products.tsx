import React from "react";
import { ShopContext } from "../context/ShopContext";

export const Products = () => {
  const productsCont = React.useContext(ShopContext);
  console.log(productsCont?.products);
  return (
    <div className="flex h-screen">
      {productsCont?.products.map((prod) => {
        return (
          <div className="w-full inline-block">
            <p>{prod.name}</p>
            <img className="h-48" src={prod.image} />
          </div>
        );
      })}
    </div>
  );
};
