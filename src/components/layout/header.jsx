import React from "react"
import {Link} from "react-router-dom"

export default function Header(){
    return(
        <header>
            <h1>RSTI</h1>
            <p>aula de react</p>
            <nav> <ul>
                <li>
                    <Link to="/">Página Inicial</Link>
                </li>
                <li>
                    <Link to="/desafio">Página do Desafio</Link>
                </li>
                <li>
                    <Link></Link>
                </li>
            </ul></nav>
        </header>
    )
}