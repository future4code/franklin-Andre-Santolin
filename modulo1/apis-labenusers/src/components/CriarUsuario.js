import React from 'react';
import axios from 'axios'

class CriarUsuario extends React.Component {
    state = {
        usuarios: [],
        nome: "",
        email: "",
    }
    criarUsuario = () => {
        const body = {
          name: this.state.nome,
          email: this.state.email
        };
        const request = axios.post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          body, {
            headers: {
              Authorization: "Michelle-Louzada-Jackson"
            }
          }
          
        )
        request
        .then((resposta) =>{
          alert(`Usuario ${this.state.nome} criado com sucesso!`);
          this.setState({nome: ""});
          this.setState({email: ""});
          
        })
        .catch((erro) => {
          alert("Erro ao criar usuário")
        });
      };

    render(){
        const onChangeInputNome = (evento) => {
            this.setState({nome: evento.target.value})
          }
          const onChangeInputEmail = (evento) => {
            this.setState({email: evento.target.value})
          }
        return (
            <div>
                <h1>Criar usuário</h1>
                <input placeholder="Nome" value={this.state.nome} onChange={onChangeInputNome}/>
                <input placeholder="Email" value={this.state.email} onChange={onChangeInputEmail} />
                <button onClick={this.criarUsuario}>Criar</button>
                <div>
                    <button onClick={this.props.onClickUsuarios}>Usuários</button>
                </div>
            </div>
            
        )
    }

}

export default CriarUsuario;