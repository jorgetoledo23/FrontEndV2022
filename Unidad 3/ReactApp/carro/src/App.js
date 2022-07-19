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
    const [Total, setTotal] = React.useState(0)

    //const ItemsCarro = [] //Array con 0 Items en el Carro
    let T = 0;
    const UpdateTotal = (Array) => {
        Array.forEach(i => {
           T += parseInt(i.SubTotal)
        })
        setTotal(T)
    }


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
        UpdateTotal(ProductosEnElCarro)
    }

    const EliminarDelCarro = (Id) => {
        const NuevoArray = ProductosEnElCarro.filter(x => x.Producto.Id !== Id)
        setProductosEnElCarro(NuevoArray)
        UpdateTotal(NuevoArray)
    }






    return (
        <div>
            <Navbar toggleCarro={toggleVisible} Total={Total}/>
            <Carro 
            Visible={Visible} 
            toggleCarro={toggleVisible} 
            ItemsCarro={ ProductosEnElCarro } 
            FuncionEliminarDelCarro={ EliminarDelCarro }
            Total={Total}
            />
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
