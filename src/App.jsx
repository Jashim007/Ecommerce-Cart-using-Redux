import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Products from './features/Products/Products';
import Cart from './features/Cart/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
