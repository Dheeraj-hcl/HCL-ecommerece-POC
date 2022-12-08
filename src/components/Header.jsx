import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
function Header(props) {
  
  return (
    <div className="header-main">
      <Header1 data={props.data} onChecked = {props.onChecked}/>
      <Header2 />
    </div>
  );
}
export default Header;
