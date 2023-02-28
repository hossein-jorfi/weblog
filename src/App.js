import React from 'react';

// Components
import Index from './components/layout/Index';
import HomePage from './components/home/HomePage';
import BlogPage from './components/blog/BlogPage';
import AuthorPage from './components/author/AuthorPage';
import ScrollToTop from './components/shared/ScrollToTop';

// Router
import { Route, Routes } from 'react-router-dom';

const App = () => {
     return (
          <Index>
               <ScrollToTop />
               <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/blogs/:slug' element={<BlogPage />} />
                    <Route path='/authors/:slug' element={<AuthorPage />} />
               </Routes>
          </Index>
     );
};

export default App;