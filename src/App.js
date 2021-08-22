import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import NavBar from "./Components/NavBar/NavBar";
import ListsContainer from "./Components/ListsContainer/ListsContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <ListsContainer />
      </Provider>
    </div>
  );
}

export default App;
