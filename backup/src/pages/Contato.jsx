import React from 'react';
import Header from '../components/Header';
import MainContentContato from '../components/MainContentContato';
import Footer from '../components/Footer';

function Contato() {
    return (
        <div className="pagina-contato">
            <Header /> 
            <MainContentContato /> 
            <Footer /> 
        </div>
    );
}

export default Contato;