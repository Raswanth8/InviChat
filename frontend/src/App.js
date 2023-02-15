import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar.js";
import Partners from "./components/Partners";
import Features from "./components/Features";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

function App() {
  const [data, setData] = useState(null);
  const [DataisLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    function fetchProducts() {
      axios
        .get("https://invichat-website-server.azurewebsites.net/products")
        .then((response) => {
          console.log(response.data);
          setData(response.data);
          setDataLoaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchProducts();
  }, []);

  if (!DataisLoaded)
    return (
      <div className="flex flex-col items-center">
        <p className="text-3xl font-inter text-black font-semibold">
          Please wait while we load the products for you!
        </p>
      </div>
    );

  const productList = data.map((product, index) => {
    return (
      <Grid item xs={3} key={index}>
        <ProductList
          imagePath={product.productImages[0]}
          name={product.productName}
          Description={product.productDescription}
          price={product.productPrice}
          quantity={product.productQuantity}
        />
      </Grid>
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <p id="prod-display" className="text-3xl font-inter text-black">
        Current&nbsp;
        <text className=" italic text-blue-500">Trending</text>&nbsp; Products
      </p>
      <br />
      <div>
        <Grid container spacing={2} className="details">
          {productList}
        </Grid>
      </div>
      <br />
      <br />
      <Partners />
      <Contact />
    </div>
  );
}

export default App;
