import React, { useEffect, useState } from "react";
import axios from "axios"; //step1
import "./style.css";
const productURL = `/product/admin/getAllProduct`;
const URLCategory = `/product/category`;

function Product() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("Component Mount");
    axios
      .get(productURL)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log("Render");
  if (data.length !== 0) {
    const product = data[104];
    const {
      name,
      color,
      actualprice,
      offerprice,
      totalstocks,
      material,
      Categories,
      id,
    } = product;
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
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
                  <span>{offerprice}</span>
                  <strike>{actualprice}</strike>
                </div>
                <div className="totalStocks">{totalstocks}</div>
                <div className="material">{material}</div>
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
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default Product;

// name,
// color,
// description,
// actualprice,
// offerprice,
// totalstocks,
// material,

// Categories,
// id,
