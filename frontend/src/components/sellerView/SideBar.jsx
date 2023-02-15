import React, { useState } from "react";
//import Navbar from "../Navbar";
import styled, { keyframes } from "styled-components";

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  background-color: #222;
  color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transform: translateX(${({ open }) => (open ? 0 : "-100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 999;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 998;
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 24px;
  color: #fff;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    color: #f1c40f;
  }
`;

const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 24px;
  color: #fff;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    color: #f1c40f;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 50px 0 0 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px 20px;
  border-bottom: 1px solid #333;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export default function SideBar() {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(true);
  };

  const handleCloseClick = () => {
    setOpen(false);
  };
  return (
    <>
      <MenuButton onClick={handleMenuClick}>
        <i className="fa fa-bars">Click Here</i>
      </MenuButton>
      <Sidebar open={open}>
        <CloseButton onClick={handleCloseClick}>
          <i className="fa fa-times"></i>
        </CloseButton>
        <List>
          <ListItem>Product View</ListItem>
          <ListItem>Users View</ListItem>
          <ListItem>Seller View</ListItem>
          <ListItem>Wait for Option 4</ListItem>
        </List>
      </Sidebar>
      <Overlay open={open} onClick={handleCloseClick} />
    </>
  );
}
