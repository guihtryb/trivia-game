<div align="center">
  <h1> Trivia game </ h1>
</div>
<div align="center" >
  <img src="src/assets/projectTrivia.gif" />
</div>

<div align="center">
</br>

![React](https://img.shields.io/badge/-Redux-000000?style=flat&logo=react)
![Redux](https://img.shields.io/badge/-React-714CB2?style=flat&logo=redux)
![Javascript](https://img.shields.io/badge/-JavaScript-151515?style=flat&logo=javascript)
![CSS3](https://img.shields.io/badge/-CSS-3E86B8?style=flat&logo=css3)
![HTML5](https://img.shields.io/badge/-HTML5-white?style=flat&logo=HTML5)
[![Visual Studio Code](https://img.shields.io/badge/-VSCode-111111?style=flat&logo=visual-studio-code&logoColor=007ACC)](https://github.com/microsoft/vscode)
</div>

<h2 align="center"> Sobre o projeto </h2>
<p align="center"> 
  Esse projeto consiste em um jogo de perguntas e respostas com sistema de pontuação. Ao efetuar o login é feito uma requisição com o email do usuário, que retorna um token específico para o jogador, este token é utilizado para fazer a requisição de uma API que possui as perguntas.
    Cada pergunta possui um cronômetro e, caso o mesmo zere a resposta é considerada como errada e o jogador não pontua.
    No final do jogo o jogador é redirecionado para a página de Feedback, onde é apresentado seu score final e possui a opção de jogar novamente ou ir para a página de Ranking.
    A página de Ranking possui a classificação de todos os jogadores e seus dados são retirados do localStorage.
  </p>
  
  <h2 align="center"> Para rodar localmente </h2>
  <ol>
  <li>Clone este repositório com o comando: <code> git clone git@github.com:guihtryb/trivia-game.git</code>.</li>
  <li> Entre na pasta <i>trivia-game</i> e rode o comando <code> npm install</code> no terminal para instalar as dependências.</li> 
  <li> Por fim, rode o comando <code>npm start</code> no terminal e uma janela do navegador abrirá com o projeto.</li> 
  </ol>
