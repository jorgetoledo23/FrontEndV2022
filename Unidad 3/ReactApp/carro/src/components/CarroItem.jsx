
var CLFormat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
});

export default function CarroItem( { Item } ) {
    console.log(Item)
    return <div className="mt-2 justify-content-center">
        <div className="row justify-content-center">
            <div className="card col-md-6 position-relative">
                <div className="row">

                    <div className="col-4">
                        <img width='150' height='150' alt="Imagen" src={Item.Producto.UrlImagen}></img>
                    </div>
                    <div className="col-8 text-center">
                        <p>
                            <strong>{Item.Producto.Descripcion}</strong>
                        </p>
                        <p>Precio Unitario 
                            <strong>{CLFormat.format(Item.Producto.Precio)}</strong>
                        </p>
                        <p>Cantidad
                            <strong>{Item.Cantidad}</strong>
                        </p>
                        <p>SubTotal 
                            <strong>{CLFormat.format(Item.SubTotal)}</strong>
                        </p>
                    </div>
                </div>

                <span className="position-absolute" style={ { right : '50px', top : '60px' } }>
                    <i className="fa-solid fa-trash"></i>
                </span>
            </div>
        </div>

    </div>
};
