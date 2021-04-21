import Header from "./Components/Header";
import Products from "./Components/Products";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DataProvider from "./Components/Context/DataProvider";
import Details from "./Components/Details";
import Cart from "./Components/Cart";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Route path="/products" component={Products} exact />
          <Route path="/products/:id" component={Details} />
          <Route path="/cart" component={Cart} />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
