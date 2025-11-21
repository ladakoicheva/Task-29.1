import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

import { counterReducer } from "./store/reducer.js";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
