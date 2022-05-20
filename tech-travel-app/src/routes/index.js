import React from "react";
import {Routes, Route} from "react-router-dom"

import Cart from '../pages/Cart';
import Home from '../pages/home';

function Routing () {
return (
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        </Routes>
);
}
export default Routing;