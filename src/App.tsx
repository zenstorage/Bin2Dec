// App.js
import React from 'react';
import Nav from './components/Nav.tsx';
import Dec from './components/Dec.tsx';
import AboutBinary from './components/AboutBinary.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutDecimal from './components/AboutDecimal.tsx';

const App = () => {
    return (
        <Router>
            <div>
                <Nav></Nav>

                <Routes>
                    <Route path='/' element={<Dec />} />
                    <Route path='/about-binary' element={<AboutBinary />} />
                    <Route path='/about-decimal' element={<AboutDecimal />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
