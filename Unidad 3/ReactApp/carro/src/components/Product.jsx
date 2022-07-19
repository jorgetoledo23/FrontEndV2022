import React from "react";

var CLFormat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
});

export default function Product({ Producto, AddToCart, toggleCarro }) {
    //console.log(props)
    return <div className="card col-md-3 m-2 p- text-center">
        <div className="card-body">
            <p><strong>{Producto.Descripcion}</strong></p>
            <img height="200" width="200" alt="Producto Imagen" 
            src={ Producto.UrlImagen }/>
            <p>Precio: <strong>{ CLFormat.format(Producto.Precio) }</strong></p>
            <p>Stock: <strong>{ Producto.Stock}</strong></p>
            <button onClick={ () => (AddToCart(Producto), toggleCarro())  }
             className="btn btn-outline-success">Add to Cart</button>
        </div>
    </div>
}
