import React from "react";
import Entry from "./Entry";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "../App.css";
function App() {
  return (
    <div>
      <Router>
        <Entry className="container"/>
      </Router>
    </div>
  );
}
export default App;
