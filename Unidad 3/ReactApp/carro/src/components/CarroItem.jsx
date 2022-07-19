
var CLFormat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
});

export default function CarroItem( { Item, FuncionEliminarDelCarro } ) {
    console.log(Item)
    return <div className="m-3 p-3 justify-content-center">
        <div className="row justify-content-center">
            <div className="card col-md-6 position-relative">
                <div className="row p-2">

                    <div className="col-4">
                        <img width='150' height='150' alt="Imagen" src={Item.Producto.UrlImagen}></img>
                    </div>
                    <div className="col-8 text-center">
                        <p style={ { lineHeight : '0.9'} }>
                            <strong>{Item.Producto.Descripcion}</strong>
                        </p>
                        <hr></hr>
                        <p style={ { lineHeight : '0.5'} }>Precio Unitario:
                            <strong> {CLFormat.format(Item.Producto.Precio)}</strong>
                        </p>
                        <p style={ { lineHeight : '0.5'} }>Cantidad:
                            <strong> {Item.Cantidad}</strong>
                        </p>
                        <p style={ { lineHeight : '0.5'} }>SubTotal: 
                            <strong> {CLFormat.format(Item.SubTotal)}</strong>
                        </p>
                    </div>
                </div>

                <span onClick={ () => FuncionEliminarDelCarro(Item.Producto.Id) }
                className="position-absolute" style={ { right : '10px', top : '0px' } }>
                    <i className="fa-solid fa-trash"></i>
                </span>
            </div>
        </div>

    </div>
};
