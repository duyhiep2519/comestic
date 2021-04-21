import { Footer, Header } from "components";
import React from "react";
import { Helmet } from "react-helmet-async";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>
          {title
            ? title + " - Shop My Pham Online"
            : "React.js Shop My Pham Online"}
        </title>
        <meta
          name="description"
          content={description || "React.js Shop My Pham Online"}
        />
      </Helmet>
      <Header />
      <main className="grid wide">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
