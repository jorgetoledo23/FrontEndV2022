import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Productos from './data.json'
import Product from './components/Product';
import Carro from './components/Carro'

function App() {

    const [Visible, setVisible] = React.useState(false)

    const toggleVisible = () => {
        setVisible(!Visible)
    }


    //console.log(Productos)
    return (
        <div>
            <Navbar toggleCarro={toggleVisible}/>
            <Carro Visible={Visible} toggleCarro={toggleVisible} />
            <div className='row justify-content-center'>
              { Productos.map(element => <Product key={ element.Id } Producto={ element } />) }
               
            </div>
        </div>
    );
}

export default App;
