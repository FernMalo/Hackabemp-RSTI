import React from "react";
import "./styles/style.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import  Index from "./pages";
import Desafios  from "./pages/desafio";

export default function App(){
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/desafio" element={<Desafios/>}/>
        </Routes>
        </BrowserRouter>
    )
}