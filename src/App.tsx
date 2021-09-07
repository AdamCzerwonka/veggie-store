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
import OrderComplete from "./pages/OrderComplete";
import { createClient, Provider } from "urql";

import "./static/styles/App.scss";
import Order from "./pages/Order";

function App() {
  const client = createClient({ url: "http://localhost:5000/graphql" });

  return (
    <Provider value={client}>
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
                <Route path="/order">
                  <Order />
                </Route>
                <Route path="/order_complete">
                  <OrderComplete />
                </Route>
              </Switch>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </ProductsProvider>
    </Provider>
  );
}

export default App;
