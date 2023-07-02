import { Cart } from 'react-bootstrap-icons';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>LILA </h1>
            <img src={require('./images/logo-orange.png')} alt="logo"></img>
            <div className="links">
            <a href="/">BOUQUETS</a>
            <a href="/">ABOUT</a>
            <a href="/" id='FR'>FR</a>
            <a href="/">MY CART
            <Cart size={25}/>
            </a>
            </div>
        </nav>
     );
}
 
export default Navbar;