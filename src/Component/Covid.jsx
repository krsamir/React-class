import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Covid() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getApiCall = async () => {
      try {
        const { data } = await axios.get(
          "https://data.covid19india.org/v4/min/data.min.json"
        );
        console.log(Object.entries(data));
        setdata([Object.entries(data)]);
      } catch (error) {
        console.log(error);
      }
    };
    // axios
    //   .get("https://data.covid19india.org/v4/min/data.min.json")
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    getApiCall();
  }, []);

  return (
    <div>
      {data.map((value, index) => {
        console.log(value);
        return <div key={index}></div>;
      })}
    </div>
  );
}
