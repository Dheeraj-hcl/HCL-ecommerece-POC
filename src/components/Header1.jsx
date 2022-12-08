import React, { useState } from "react";
import HCL_logo from "./HCL_logo.svg";
import { Input, Menu, Select, Button } from "semantic-ui-react";

const options = [
  { key: "cateogry", text: "Category", value: "category" },
  { key: "mobiles", text: "Mobiles", value: "mobiles" },
  { key: "laptops", text: "Laptops", value: "laptops" },
];

export default function Header1(props) {
 
  const [activeItem, setItem] = useState("home");
  
  const handleItemClick = (e, { name }) => setItem(name);

  return (
    <Menu secondary >
      <Menu.Item>
        <img
          style={{ width: "150px", height: "35px" }}
          alt="logo"
          src={HCL_logo}
        />
      </Menu.Item>
      <Menu.Item>
        <Input type="text" icon="search" placeholder="Search goods" action>
          <input />
          <Select compact options={options} defaultValue="category" />
          <Button>Search</Button>
        </Input>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          icon="cart"
          name="cart"
          active={activeItem === "cart"}
          onClick={handleItemClick}
        />
        <Menu.Item
          icon="heart"
          name="wishlist"
          active={activeItem === "wishlist"}
          onClick={handleItemClick}
        />
        <Menu.Item
          icon="user"
          name="My Profile"
          active={activeItem === "My profile"}
          onClick={props.onChecked}
        />
      </Menu.Menu>
    </Menu>
  );
}
