import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Shop from "./components/pages/Shop";


function App() {

return (
  <BrowserRouter>
    <Routes >
      <Route path="/" exact component={Portfolio} >
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/shop" exact component={Shop} />
      </Route>
    </Routes>
  </BrowserRouter>
);
}

export default App;