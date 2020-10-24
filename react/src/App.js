import logo from './logo.svg';
import data from './data'
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';
function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
<div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <a href="index.html">ecommerce</a>
                </div>
                <div className="header-links">
                    <a href="cart.html">cart</a>
                    <a href="signin.html">signin</a>
                </div>
            </header>
            <aside className="sidebar">
                <h2>shopping catagories</h2>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">RAM</a>
                    </li>
                    <li>
                        <a href="index.html">MOTHERBOARD</a>
                    </li>
                    <li>
                        <a href="index.html">GRAPHICS CARD</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                  <Route path = "/products/:id" component={ProductScreen}/>
                  <Route path="/" exact= {true} component = {HomeScreen} />
                    <ul className="products">
                      {
                        data.products.map(product =>
                          <li>
                            <div className="product">
                                <img className="product-image" src={product.image} alt="product" />
                                <div className="product-name"><a href="product.html">{product.name}</a></div>
                                <div className="product-type">{product.type}</div>
                                <div className="product-price">${product.price}</div>
                                <div className="product-profit">{product.profit}</div>
                            </div>

                        </li>)
                      }
                        
                       
                    
                    </ul>
                </div>
            </main>
            <footer className="footer">
                all rights reserved
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
