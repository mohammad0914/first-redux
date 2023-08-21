import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Cart from "./component/Cart.js";
export default function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}
