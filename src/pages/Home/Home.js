import React, { useState, useEffect } from "react";
import "./Home.css";
import { Product } from "components";
import Layout from "Layout/Layout";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8888/product")
      .then((response) => {
        console.log(response.data.product);
        setData(response.data.product);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <Layout title="Trang chu" description="Trang chu my pham online">
      <div className="Home row">
        {data && data.map((item, key) => <Product key={key} product={item} />)}
      </div>
    </Layout>
  );
};

export default Home;
