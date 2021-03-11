import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="http://paroquiasagradomerces.com.br/wp-content/uploads/2018/02/no-avatar.png"
          nome="Pedro Vitor de Souza"
          descricao="Olá, eu sou o Pedro, atualmente sou estudante de Desenvolvimento Web Full Stack, possuo ingles fluente, muita experiencia com Customer Service e ambientes office."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

       <div className="page-section-container">
       <CardPequeno
       imagem="https://cdn.icon-icons.com/icons2/2098/PNG/512/mail_icon_128820.png"
       nome="E-mail"
       descricao="pedrovitor@labenu.com"
       />

       <CardPequeno
        imagem="https://i.pinimg.com/originals/97/76surge/e9/9776e993981e99622489cd1de71f8d19.png"
       nome="Endereço"
       descricao="Rua Bla Bla Bla, 123, BlaBla"
       />
       </div>

      <div className="page-section-container">
        <h2>Experiências Acadêmicas e Profissionais</h2>
        <CardGrande
          imagem="https://yt3.ggpht.com/ytc/AAUvwnhKbubHEvUCTiZTjTbOfneyGUISEJsfnzpRV9CP=s900-c-k-c0x00ffffff-no-rj"
          nome="Labenu"
          descricao="Atualmente estudante de Desenvolvimento Web Full Stack na Labenu !"
        />

        <CardGrande
          imagem="https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png"
          nome="Greystone College"
          descricao="Fiz um curso de Customer Service na Greystone College, em Vancouver.
          Obtive experiencia pratica, trabalhando durante 6 meses após a conclusão do curso."
        />

        <CardGrande
          imagem="https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png"
          nome="PSA Calçados"
          descricao="Trabalhei como financeiro na PSA Calçados durante 4 anos, também passei pelo RH."
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
