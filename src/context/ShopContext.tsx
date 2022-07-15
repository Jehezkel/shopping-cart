import React, { createContext, FC, ReactPortal } from "react";
import { faker } from "@faker-js/faker";
import { Product } from "../Product";
import { ShopContextType } from "./ContextType";

export const ShopContext = createContext<ShopContextType | null>(null);
type Props = {
  children: React.ReactNode;
};
export const ContextProvider = ({ children }: Props) => {
  const products = [...Array(20)].map<Product>(() => ({
    id: faker.random.alphaNumeric(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    image: faker.image.abstract(640, 480, true),
    inStock: faker.datatype.number({ max: 999, min: 0 }),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.datatype.number({ max: 5, precision: 0.01 }),
  }));
  return (
    <ShopContext.Provider value={{ products }}>{children}</ShopContext.Provider>
  );
};
