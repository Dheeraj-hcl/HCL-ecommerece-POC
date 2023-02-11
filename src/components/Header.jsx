import React, { Component, useState } from "react";
import HCL_logo from "./HCL_logo.svg";
import { Link } from "react-router-dom";
import { Input, Menu, Select, Button } from "semantic-ui-react";
const options = [
  { key: "cateogry", text: "Category", value: "category" },
  { key: "mobiles", text: "Mobiles", value: "mobiles" },
  { key: "laptops", text: "Laptops", value: "laptops" },
];

function Header1() {
  const [activeItem, setItem] = useState("home");

  const handleItemClick = (e, { name }) => setItem(name);

  return (
    <Menu secondary>
      <Menu.Item>
        <img
          style={{ width: "150px", height: "35px" }}
          alt="logo"
          src={HCL_logo}
        />
      </Menu.Item>
      <Menu.Item>
        <Input type="text" placeholder="Search goods" action>
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
            as={Link}
            to='/home/cart'
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
            onClick={handleItemClick}
            as={Link}
            to='/home/profile'
          />
      </Menu.Menu>
    </Menu>
  );
}

class Header2 extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          header
          icon="bars"
          name="All Categories"
          active={activeItem === "All Categories"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Super Deals"
          active={activeItem === "Super Deals"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Featured Brands"
          active={activeItem === "Featured Brands"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Collections"
          active={activeItem === "Collections"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Best Selling"
          active={activeItem === "Best Selling"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Buy Again"
          active={activeItem === "Buy Again"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Customer Service"
          active={activeItem === "Customer Service"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

function Header(props) {
  return (
    <div className="header-main">
      <Header1 onChecked={props.onChecked} />
      <Header2 />
    </div>
  );
}
export default Header;
