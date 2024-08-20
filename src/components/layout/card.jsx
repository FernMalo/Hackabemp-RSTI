import React from "react";

export default function Card({photo,title,price}){
    return(
        <section className="card">
        <img src={photo} alt="Air Jordans"/>
        <h2>{title}</h2>
        <p>Preço: {price} R$</p>


        
        <button>Compra confiável!</button>
        </section>
    )
}