import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import ShopItem from "./ShopItem";

const ShopList = () => {
  const shops = useSelector((state) => state.shopReducer.shops);

  const [query, setQuery] = useState("");

  const shopList = shops
    .filter((shop) => shop.name.toLowerCase().includes(query))
    .map((shop) => <ShopItem key={shop.id} shop={shop} />);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {shopList}
    </div>
  );
};

export default ShopList;
