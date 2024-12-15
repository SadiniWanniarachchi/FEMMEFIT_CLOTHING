import React from 'react';
import Navbar from './components/Navbar'; 
import Collection from './components/collection'; 
import CultureSection from './components/CultureSection';
import Footer from './components/Footer';


const App = () => {
  return (

    <div>

      <Navbar />
      <CultureSection/>
      <Collection/>
      <Footer/>

    </div>

  );

};

export default App;
