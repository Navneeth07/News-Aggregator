import React from "react";
import Route from "./routes/Route";
import { Provider } from "react-redux";
import {store} from "./store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Route />
      </Provider>
    </div>
  );
}

export default App;
