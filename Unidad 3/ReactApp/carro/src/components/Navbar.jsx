import React from "react";

// const titulo = document.createElement("h1")
// titulo.innerHtml = "Hola Mundo"
// titulo.className = "card"


export default function Navbar({ toggleCarro }) {
    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Carro App React</a>
            <div>
                <a onClick={ toggleCarro }
                className="btn btn-outline-success"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
    </nav>
}
