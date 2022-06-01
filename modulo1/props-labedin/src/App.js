import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno";
import imagem from "./img/eu 1.jpeg";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imagem} 
          nome="Andre Luis Santolin" 
          descricao="Oi, eu sou o Andre. Sou aluno da Labenu e estou trabalhando no Grupo Boticário."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/21/21178.png" 
          texto="Ver mais"
        />
        <CardPequeno 
          imagem="https://png.pngtree.com/png-clipart/20190516/original/pngtree-email--envelope-icon-png-image_3566081.jpg"
          titulo="Email:"
          conteudo="andresantolin@gmail.com"
        />
        <CardPequeno 
          imagem="https://w7.pngwing.com/pngs/30/177/png-transparent-ip-address-computer-icons-encapsulated-postscript-address-miscellaneous-logo-video-player.png"
          titulo="Endereço:"
          conteudo="Rua 1092, 278, Centro, Criciúma/SC"
        />
        
        </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/300/300221.png" 
          nome="Google" 
          descricao="Segurança da Informação." 
        />
        
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/882/882727.png" 
          nome="IBM" 
          descricao="Manutenção de rede e computadores." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
      
    </div>
  );
}

export default App;