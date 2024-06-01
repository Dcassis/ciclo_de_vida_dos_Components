import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: '00:00:00'
    }
  }

  /*DEPOIS QUE O COMPONENT É MONTADO O COMPONENTDIDMOUNT EXIBI O QUE TEM DENTRO DA FUNÇÃO - EX: UMA API
  AS FUNÇÕES SAO FEITAS DENTRO DO COMPONENTDIDMOUNT.

  Exemplos de Uso de componentDidMount:

  - Carregamento de Dados Iniciais: Buscar e carregar dados necessários para o componente assim que ele é montado, como dados do usuário ou informações para um dashboard.
  - Configuração de Subscrições: Configurar subscrições para serviços em tempo real, como WebSockets, para atualizar o componente com novas informações conforme elas são recebidas.
  - Inicialização de Plugins de Terceiros: Inicializar e configurar plugins de bibliotecas de terceiros, como mapas interativos, sliders de imagem, ou gráficos, após o componente ser montado no DOM.
  
  */
  componentDidMount() {
    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() })
    }, 1000);
  }

  /*COMPONENT DIDUPDATE: TODA VEZ QUE UM COMPONENT FOR ATUALIZADO PODE-SE ATRIBUIR ALGUMA FUNÇÃO PARA ESSE COMPONENT. EXEMPLO DE USO: UM ALARME, UMA MENSAGEM DE ATUALIZAÇÃO DE BASE DE DADOS OU STATUS
  EXEMPLOS DE USO:
  componentDidUpdate:

- Sincronização de dados com uma API externa.
- Integração com bibliotecas de terceiros para gráficos.
- Sincronização de estados entre componentes pai e filho.
  */
  componentDidUpdate() {
    console.log("Hora de Acordar!!! - Alarme")
  }

  

  //shouldComponentUpdate -> retorna um true or false, pergunta se é ou não para atualizar um STATE.
  /*EXEMPLOS DE USO DO shouldComponentUpdate: 
  - Otimização de performance em listas grandes. 
  - Componentes com renderização condicional 
  - Formulários controlados com múltiplos campos.
  SEGUE SINTAXE:
  shouldComponentUpdate() {
    
  }
  */

  render() {
    return (
      <div>
        <h1>Meu Projeto</h1>
        <h2>{this.state.hora}</h2>
      </div>
    );
  }
}

export default App;
