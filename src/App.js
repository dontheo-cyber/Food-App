import React from "react";

import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { FcAbout } from "react-icons/fc";
import { MdHelp, MdLogin } from "react-icons/md";
import Wallet from "./routercomponents/Wallet";
import { SiGnuprivacyguard } from "react-icons/si";
import Promotions from './routercomponents/Promotions'
import Order from "./routercomponents/Order";


function App() {
  return (
    <BrowserRouter>
      <div>
         <Routes>
      
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<FcAbout/>}/>
          <Route path="help" element={<MdHelp/>}/>
          <Route path="promotions" element={<Promotions/>}/>
          <Route path="wallet" element={<Wallet/>}/>
          <Route path="signup" element={<SiGnuprivacyguard/>}/>
          <Route path="login" element={<MdLogin/>}/>
          <Route path="order" element={<Order/>}/>
       </Routes>
       </div>
    </BrowserRouter>

    
  );
}

export default App;
