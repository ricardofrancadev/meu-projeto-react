import React from 'react';
import Header from '../components/Header';
import MainContentHome from '../components/MainContentHome';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="pagina-home">
            <Header /> 
            <MainContentHome /> 
            <Footer /> 
        </div>
    );
}

export default Home;