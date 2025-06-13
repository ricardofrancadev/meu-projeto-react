import React from 'react';
import Header from '../components/Header';
import MainContentSobre from '../components/MainContentSobre';
import Footer from '../components/Footer';

function Sobre() {
    return (
        <div className="pagina-sobre">
            <Header /> 
            <MainContentSobre /> 
            <Footer /> 
        </div>
    );
}

export default Sobre;