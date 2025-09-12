import React,{ useState }from 'react';
import Header from './components/Header'; 
import Banner from './components/Banner'; 
import ContentColumns from './components/ContentColumns';
import ContactForm from './components/ContactForm'; 
import Footer from './components/Footer';
// Componentes de la tienda
import ProductList from './components/ProductList'; // ProductList
import Cart from './components/Cart'; // Cart 



const App = () => {
 //Validacion de  en que pagina nos encontramos: tienda
    const [isStorePage, setIsStorePage] = useState(false);
    
    //estado pra guardar los items en el carrito
     const[cartItems, setCartItems] = useState ([]);
     
     // Funcion que añade elementos al carrito
     const handleAddToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);

     };
     // Funcion que añade elementos al carrito
     const handleRemoveToCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item =>item.id  !== productId)); 

     };

     // Validador para moverme de pagina en pagina
    const handleNavigateToStore = () => {
        setIsStorePage(true); // Ir a tienda
    }

    const handleNavigateToHome = () => {
        setIsStorePage(false); // Ir a pagina principal
    }

    return (
            <> <Header onNavigateToStore={handleNavigateToStore} onNavigateToHome={handleNavigateToHome} cartCount={cartItems.length} />
            <main>
                {isStorePage ?(
                    <>
                        <ProductList onAddToCart={handleAddToCart} />
                        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveToCart} />
                    </>
                ) : (
                    <>
                        <Banner />
                        <ContentColumns/>
                        <ContactForm />    
                    </>
                )}

              </main>
              <Footer />
            </>
          );
        };

        export default App;






