import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
function Header(props) {
  
  return (
    <div className="header">
      <Header1 data={props.data} />
      <Header2 />
    </div>
  );
}
export default Header;
