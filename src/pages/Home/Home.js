import React from "react";
import "./Home.css";
import Layout from "Layout/Layout";
import { Toolbar, Product } from "components";

const Home = () => {
  return (
    <Layout title="Trang chu" description="Trang chu my pham online">
      <div className="Home">
        <Toolbar />
        <div className="row">
          <Product /> <Product /> <Product /> <Product /> <Product />
          <Product /> <Product />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
