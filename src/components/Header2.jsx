import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class Header2 extends Component {
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
