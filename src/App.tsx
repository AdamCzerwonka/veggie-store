import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";
import Cart from "./pages/Cart";
import CartProvider from "./CartContext";
import ProductsProvider from "./ProductsContext";

import "./static/styles/App.scss";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <div className="container">
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Shop />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/joinus">
                <JoinUs />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
