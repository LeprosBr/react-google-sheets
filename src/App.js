import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { FormSheets } from "./components/FormSheets";

export const App = () => {
  return (
    <div className="App">
      <div className="container">
        <FormSheets />
      </div>
    </div>
  );
};

export default App;
