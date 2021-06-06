import React from "react";
import Categories from "./Categories";
import Navi from "./Navi";
import ProductList from "../pages/ProductList";

export default function Dashboard() {
  return (
    <div>
      <Navi />
      <Categories />
      <ProductList />
    </div>
  );
}
