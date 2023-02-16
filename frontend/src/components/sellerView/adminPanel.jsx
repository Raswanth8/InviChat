import React, { useState, useEffect } from "react";
//import NavBar from "../Navbar";
//import SideBar from "./SideBar";
import "./custom.css";
import SideBar from "./SideBar";
import axios from "axios";
import { MdMarkChatRead } from "react-icons/md";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

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
      <nav className="flex items-center justify-between flex-wrap bg-white-800 p-6 shadow-none rounded-lg">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <div className="text-xl">
            <MdMarkChatRead />
          </div>
          <span className="font-semibold text-xl tracking-tight font-poppins">
            &nbsp;InviChat
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-black mr-4 font-poppins"
            >
              <Link to="/">Home</Link>
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-black mr-4 font-poppins"
            >
              <LinkScroll
                to="feature-page"
                smooth={true}
                offset={-70}
                duration={1200}
              >
                About
              </LinkScroll>
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-black mr-4 font-poppins"
            >
              <LinkScroll
                to="prod-display"
                smooth={true}
                offset={-70}
                duration={1200}
              >
                Featured Products
              </LinkScroll>
            </a>
            <div
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-black mr-4 font-poppins"
            >
              <Link to="/seller" smooth={true} offset={-70} duration={1200}>
                Seller Portal
              </Link>
            </div>
          </div>
          <div>
            <SideBar />
          </div>
        </div>
      </nav>

      <div className="container">
        <table className="table table-striped table-hover table-bordered table-custom">
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
