import React, { useEffect, useState } from "react";
import axios from "axios"; //step1
import "./style.css";
import Card from "./Card";
const productURL = `/product/admin/getAllProduct`;
const URLCategory = `/product/category`;

function Product() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(productURL)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <div className="row">
        {data.map((product) => (
          <div
            className="col-xs-12 col-sm-6 col-md-6 col-lg-4"
            key={product.id}
          >
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
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
