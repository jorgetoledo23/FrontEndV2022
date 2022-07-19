import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Productos from './data.json'
import Product from './components/Product';
import Carro from './components/Carro'
import CarroItem from './components/CarroItem';

function App() {
    //Hooks => useState
    const [Visible, setVisible] = React.useState(false)
    const [ProductosEnElCarro, setProductosEnElCarro] = React.useState([])

    //const ItemsCarro = [] //Array con 0 Items en el Carro



    const toggleVisible = () => {
        setVisible(!Visible)
    }

    const AñadirAlCarro = (P) =>{

        const Producto = ProductosEnElCarro.find(x => x.Producto.Id === P.Id)

        if(Producto === undefined){
            var newItem = { Producto : P, Cantidad : 1, SubTotal : P.Precio  }
            ProductosEnElCarro.push(newItem)
            setProductosEnElCarro(ProductosEnElCarro)
        }else{
            //Producto ya esta agregado al carro. Sumar propiedades
           Producto.Cantidad += 1
           const SubTotal = parseInt(Producto.Producto.Precio) * parseInt(Producto.Cantidad)
           Producto.SubTotal = SubTotal
           setProductosEnElCarro(ProductosEnElCarro)
        }

        
    }






    return (
        <div>
            <Navbar toggleCarro={toggleVisible}/>
            <Carro Visible={Visible} toggleCarro={toggleVisible} ItemsCarro={ ProductosEnElCarro } />
            <div className='row justify-content-center'>
              { Productos.map(element => 
              <Product key={ element.Id } 
              Producto={ element } 
              AddToCart={ AñadirAlCarro } 
              toggleCarro={toggleVisible}
              />) }
            </div>
        </div>
    );
}

export default App;
