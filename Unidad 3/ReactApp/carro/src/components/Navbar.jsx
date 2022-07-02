import React from "react";

// const titulo = document.createElement("h1")
// titulo.innerHtml = "Hola Mundo"
// titulo.className = "card"


export default function Navbar() {
    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Carro App React</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            </div>
            <div>
                <a className="btn btn-outline-success"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
    </nav>
}
