import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Profile from "./Profile";
import Cart from "./Cart";
import "../App.css";
import Content from "./Content";
import Product from "./Product";
function Home(props) {
  const location = useLocation();
  const [userId, setUserId] = useState();
  useEffect(() => {
    setUserId(location.state.id);
  }, []);
  const [productId, setProductId] = useState();
  const setProductIdevent = () => {
    const urlproductId = Number(
      window.location.pathname
        .toString()
        .charAt(window.location.pathname.toString().length - 1)
    );
    setProductId(urlproductId);
  };

  return (
    <div className="whole">
      <div>
        <Header />
        <Routes>
          <Route
            path="/profile"
            element={<Profile id={userId} onlogout={props.onlogout} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/product/:id"
            element={<Product productId={productId} />}
          />
          <Route path="*" element={<Content onclicked={setProductIdevent} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
