import React, { useState, useEffect } from "react";
//import NavBar from "../Navbar";
//import SideBar from "./SideBar";
import "./custom.css";
import SideBar from "./SideBar";
import axios from "axios";

export default function AdminPanel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://invichat-website-server.azurewebsites.net/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  //   function handleEdit(id) {
  //     setEditProductId(id);
  //   }

  function handleDelete(id) {
    // delete the product with id here
    console.log(id);
    axios
      .delete(
        `https://invichat-website-server.azurewebsites.net/products/${id}`
      )
      .then((res) => {
        console.log(res);
        fetch("https://invichat-website-server.azurewebsites.net/products")
          .then((response) => response.json())
          .then((data) => {
            setProducts(data);
          });
      });
  }

  return (
    <>
      <SideBar />
      <div className="container">
        <table className="table table-striped table-bordered table-custom">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.productDescription}</td>
                <td>{product.productPrice}</td>
                <td>
                  <button type="button" className="btn btn-primary">
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(product.productId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
