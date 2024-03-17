import React from 'react';
import Home from './Home';
import { Route, Routes, useLocation} from 'react-router-dom';
import CPages from './CPages';
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';

function Pages() {
  const location= useLocation();
  return (
    <AnimatePresence exitBeforeenter>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisines/:type" element ={<CPages />}/>
        <Route path="/searched/:search" element={<Searched />}/>
        <Route path="/recipe/:name" element={<Recipe />}/>
    </Routes>
    </AnimatePresence>
  );
}

export default Pages;