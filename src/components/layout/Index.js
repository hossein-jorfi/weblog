import React from 'react';

// Components
import Header from './Header';
import Footer from './Footer';

const Index = ({ children }) => {
     return (
          <>
               <Header />
               {children}
               <Footer />
          </>
     );
};

export default Index;