import React from "react";
import { ShopContext } from "../context/ShopContext";
import { PriceVal } from "../utils/PriceVal";
import { StarRating } from "./StarRating";

export const Products = () => {
  const productsCont = React.useContext(ShopContext);
  // console.log(productsCont?.products);
  return (
    <div className=" flex-wrap justify-center content-start flex w-full ">
      {productsCont?.products.map((prod) => {
        return (
          <div
            key={prod.id}
            className="inline-block h-80  p-3  dark:text-white "
          >
            <div className=" justify-start">
              <img className="h-48" src={prod.image} />
            </div>
            <p className="font-semibold">{prod.name}</p>
            <StarRating rating={prod.ratings}></StarRating>
            <PriceVal val={prod.price}></PriceVal>
            <div className={prod.fastDelivery ? "" : "hidden"}>
              <p className="">Darmowa Dostawa</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
