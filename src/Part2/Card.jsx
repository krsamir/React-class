import React from "react";
import "./style.css";

export default function Card({ product }) {
  const {
    name,
    color,
    actualprice,
    offerprice,
    totalstocks,
    material,
    Categories,
  } = product;
  return (
    <div>
      <div className="cards">
        <div className="top">
          <div className="top__name">{name}</div>
        </div>
        <div className="middle">
          <div
            className="middleColor"
            style={{ backgroundColor: `${color}` }}
          ></div>
        </div>
        <div className="bottom">
          <div className="price">
            Price:
            <span>{offerprice}</span>
            <strike>{actualprice}</strike>
          </div>
          <div className="totalStocks">Total Stocks: {totalstocks}</div>
          <div className="material">Material: {material}</div>
          <div className="categories">
            Categories:{" "}
            {Categories.map(({ name, id }) => (
              <div className="productToast" key={id}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
