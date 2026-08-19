import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";


import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Home from "./Component/Page/Home";
import Shop from "./Component/Page/Shop";
import Categories from "./Component/Page/Categories";
import Deals from "./Component/Page/Deals";
import Wishlist from "./Component/Page/Wishlist";
import Cart from "./Component/Page/Cart";
import Account from "./Component/Page/Account";
import Contact from "./Component/Page/Contact";
import NewArrival from "./Component/Page/NewArrival";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/new-arrivals" element={<NewArrival/>}/>
          
    </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;