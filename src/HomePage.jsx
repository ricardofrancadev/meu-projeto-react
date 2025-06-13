// HomePage.jsx
import React from 'react';
// import './style.css';
import './styleHome.css'
import logo from './assets/cansat_logo1.png';
import placeholder from './assets/placeholder.png';
import ibmeclogo from './assets/ibmeclogo.png';
import nasalogo from './assets/nasalogo.png';
import rocketlogo from './assets/rocketlogo.png';
import youtubelogo from './assets/youtubelogo.png';
import linkedinlogo from './assets/linkedinlogo.png';
import instalogo from './assets/instalogo.png';
import facebooklogo from './assets/facebooklogo.png';
import fundoTela from './assets/fundotelaHome.png';
import { useState } from 'react'; 

const HomePage = () => {
    const [menuAberto, setMenuAberto] = useState(false);
    const section1 = {
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${fundoTela})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '86px',
  };
  const backgroundWhite = {
    backgroundColor: 'white'
  }

  return (
    <div>
      <header id="header">
        <div className="header">
          <div className="headerlogo">
            <img src={logo} alt="Logo" />
          </div>

          {/* Botão hamburguer visível só no mobile */}
          <button
            className="menu-toggle"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            ☰
          </button>

          {/* Menu de navegação */}
          <nav className={`nav nav-menu ${menuAberto ? 'aberto' : ''}`}>
            <p>Home</p>
            <p>Sobre</p>
            <p>Times</p>
            <p>Contato</p>
          </nav>
        </div>
      </header>

      <main id="main">
        <section style={section1}>
          <div className="homelogo">
            <img src={logo} alt="Logo Fundo de tela" />
          </div>
        </section>

        <section className="section2">
          <div className="conteudohome">
            <img
              className="imgconteudo"
              src={placeholder}
              alt="Place Holder"
            />
            <p className="textoconteudo">
              Lorem ipsum dolor sit amet consectetur. Suspendisse congue justo
              congue urna tellus. Pharetra rhoncus vestibulum vestibulum vitae
              ac lobortis eget quis. Id magna suspendisse proin ultricies
              euismod ut vitae est. Accumsan libero enim elementum aliquet.
              Lectus viverra a nam est. Viverra nisi risus laoreet at risus non
              neque dignissim. Volutpat pellentesque vel eget eget felis vitae
              eget. At netus libero purus eu mi vitae adipiscing. Quis mauris
              gravida faucibus ut. Cras diam suspendisse viverra vulputate
              risus. Sapien ultrices odio in vehicula semper. Ultricies amet
              interdum eu quisque sit sit. Odio tristique adipiscing mauris
              fames sed id pharetra. Pharetra orci enim vel dolor eu. Velit
              metus et diam egestas nibh quam faucibus bibendum.
            </p>
          </div>
        </section>
      </main>

      <footer style={backgroundWhite}>
        <div className="footer">
          <div className="imglogo">
            <img
              className="ibmeclogo"
              src={ibmeclogo}
              alt="ibmeclogo"
            />
            <img src={nasalogo} alt="nasalogo" />
            <img src={rocketlogo} alt="rocketlogo" />
          </div>
          <div className="imgredesociais">
            <img src={youtubelogo} alt="youtubelogo" />
            <img src={linkedinlogo} alt="linkedinlogo" />
            <img src={instalogo} alt="instalogo" />
            <img src={facebooklogo} alt="facebooklogo" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;