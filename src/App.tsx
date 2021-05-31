import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";
import CartProvider from "./CartContext";

import "./static/styles/App.scss";

function App() {
  return (
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
          </Switch>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
