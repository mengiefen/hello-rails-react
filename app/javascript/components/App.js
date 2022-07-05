import React from "react";
import Greeting from "./Greeting";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Greeting greeting={props.greeting} />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
