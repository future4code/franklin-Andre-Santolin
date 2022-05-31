import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from "styled-components"
const InputPersonalizado = styled.input`
    background-color: #F1F1F3;
    -webkit-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    border: none;
    width: 300px;
    height: 35px;
    margin-top: 30px;
    outline: none;
`
const ButtonPersonalizado = styled.button`
background-color: #DB7093;
    margin: 20px 0;
    text-decoration: none;
    border: none;
    border-radius: 10px;
    padding: 10px 30px;
    color: white;
    font-size: 12px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: bold;
    -webkit-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
`

class App extends React.Component {
  state = {
    posts:[
      {nomeUsuario:"Paulinha",
      fotoUsuario:"https://picsum.photos/50/50",
      fotoPost:"https://picsum.photos/200/150"},
      {nomeUsuario:"Andre",
      fotoUsuario:"https://picsum.photos/150/50",
      fotoPost:"https://img.quizur.com/f/img5ccef3aef2c7b8.56973787.jpeg?lastEdited=1557066675"},
      {nomeUsuario:"Vanessa",
      fotoUsuario:"https://picsum.photos/200/150",
      fotoPost:"https://pm1.narvii.com/6840/34187d2dac55101311f9b7191cad5ba32043abeev2_00.jpg"}
    ],
    valorInputPessoa: "",
    valorInputFotoPerfil: "",
    valorInputFotoPost: ""
  };
  adicionaPost = () => {
    const novoPosts = {
      nomeUsuario: this.state.valorInputPessoa,
      fotoUsuario: this.state.valorInputFotoPerfil,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoPost = [novoPosts,...this.state.posts];

    this.setState({
      posts: novoPost,
      valorInputPessoa: "",
      valorInputFotoPerfil: "",
      valorInputFotoPost: ""
    });
  };
  onChangeInputPessoa = (event) => {
    this.setState({ valorInputPessoa: event.target.value });
  };
  onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputFotoPerfil: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };
  render() {
    const todosPosts = this.state.posts.map((posts) => {
      return (
        <div>
          <Post 
          nomeUsuario={posts.nomeUsuario}
          fotoUsuario={posts.fotoUsuario}
          fotoPost={posts.fotoPost}
          />
        </div>
     );
  });
    
   
    return (
      <div className={'app-container'}>
        <InputPersonalizado
            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
            placeholder={"Nome"}
          />
          <InputPersonalizado
            value={this.state.valorInputFotoPerfil}
            onChange={this.onChangeInputFotoPerfil}
            placeholder={"Link da foto de Perfil"}
          />
          <InputPersonalizado
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do post"}
          />
          <ButtonPersonalizado onClick={this.adicionaPost}>Adicionar Post </ButtonPersonalizado>
        <div>{todosPosts}</div>
        {/* <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Michelle'}
          fotoUsuario={'https://scontent.ffln3-1.fna.fbcdn.net/v/t1.0-9/104971829_3134521153278904_8925511664708256776_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeEn8OR_rpvVrdkJ_GgOSJ4kb7oTESOgGTFvuhMRI6AZMY-JfdtKQbgTbq_xf4ILT83ANxflakAcuYcwRRuLO3Tr&_nc_ohc=3hOKYHitx3MAX_B3DLm&_nc_oc=AQkg_yGuiuJkI5lPZswV9BgzuSaVVRWNl7jUtZaIJ93wCN0dRHZJ0fpIfE3z6YWxKoHVPIyuCGsgNsuBYdN7Or4B&_nc_ht=scontent.ffln3-1.fna&oh=5c0895aac06064125cb8974c8c113c39&oe=5F5A6B28'}
          fotoPost={'https://img.quizur.com/f/img5ccef3aef2c7b8.56973787.jpeg?lastEdited=1557066675'}
        />
        <Post
        nomeUsuario={'Claudia'}
        fotoUsuario={'https://scontent.ffln3-1.fna.fbcdn.net/v/t1.0-9/102328599_1451343465052457_4727528557780140032_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeEqfQk9HWcewtRjrYp1LLKGTOUd02tjmLNM5R3Ta2OYsx1LaVVUQ_qMEgEXZNZ4oxGDYp0Cwqf36FstcT1VqHd0&_nc_ohc=fM16jRYfFzYAX_Y3kcW&_nc_oc=AQlC6yaqcJHx249XMZ5DshotMyTOcTqVKizJIEVjg7K_J1tSZPL37YbUBpEOhVYi6TdIS0yAffJfu2gJtPjaoJEk&_nc_ht=scontent.ffln3-1.fna&oh=8688b0c00525ef86646dd8df3c62de5a&oe=5F58B3F1'}
        fotoPost={'https://pm1.narvii.com/6840/34187d2dac55101311f9b7191cad5ba32043abeev2_00.jpg'}
      /> */}
      </div>
    );
  }
}

export default App;
