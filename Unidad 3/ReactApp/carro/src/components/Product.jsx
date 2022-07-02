import React from "react";

export default function Product({ Producto }) {

    return <div className="card col-md-3 m-2 p- text-center">
        <div className="card-body">
            <p>
                <strong>{ Producto.Descripcion }</strong>
            </p>
            <img height="200" width="200" alt="Producto Imagen" src={ Producto.UrlImagen }/>
            <p>Precio: <strong>{ Producto.Precio }</strong>
            </p>
            <p>Stock:
                <strong>{ Producto.Stock }</strong>
            </p>
            <button className="btn btn-outline-success">Add to Cart</button>
        </div>

    </div>

}
