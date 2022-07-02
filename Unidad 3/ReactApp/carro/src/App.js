import './App.css';
import Navbar from './components/Navbar';
import Products from './data.json'
import Product from './components/Product';

function App() {
    console.log(Products)
    return (
        <div>
            <Navbar/>

            <div className='row justify-content-center'>
              { Products.map(element => <Product Producto={ element } />) }
            </div>


        </div>
    );
}

export default App;
