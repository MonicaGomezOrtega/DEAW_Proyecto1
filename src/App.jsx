import React from 'react';
import Header from './components/Header'; 
import Banner from './components/Banner'; 
import ContentColumns from './components/ContentColumns';
import ContactForm from './components/ContactForm'; 
 
import Footer from './components/Footer'; 

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <ContentColumns/>
        <ContactForm />    
        
      </main>
      <Footer />
    </>
  );
};

export default App;






