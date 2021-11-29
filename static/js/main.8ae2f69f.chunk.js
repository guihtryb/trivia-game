(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{112:function(e,t,a){e.exports=a(214)},121:function(e,t,a){},122:function(e,t,a){},124:function(e,t,a){},131:function(e,t){},133:function(e,t){},166:function(e,t){},167:function(e,t){},173:function(e,t){},210:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(45),i=a.n(s),o=a(23),c=(a(121),a(47)),l=a(24),m=a(14),u=a(15),d=a(17),p=a(16),h=a(18),b=(a(122),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.dados,a=e.history,n=t.name,s=t.profile,i=t.score,o=t.assertions;return r.a.createElement("section",{className:"feedback-section"},r.a.createElement("div",{className:"feedback-container"},r.a.createElement("header",null,r.a.createElement("span",{"data-testid":"feedback-text"},"Feedback"),r.a.createElement("p",{"data-testid":"header-player-name"},n),r.a.createElement("p",{"data-testid":"header-score"},i),r.a.createElement("p",{"data-testid":"feedback-total-score"},i),r.a.createElement("p",{"data-testid":"feedback-total-question"},o),r.a.createElement("img",{src:"https://www.gravatar.com/avatar/".concat(s),alt:"gravatar","data-testid":"header-profile-picture",className:"profile-image"}),o>2?r.a.createElement("p",{"data-testid":"feedback-text"},"Mandou bem!"):r.a.createElement("p",{"data-testid":"feedback-text"},"Podia ser melhor...")),r.a.createElement("button",{type:"button","data-testid":"btn-play-again",className:"btn-play-again",onClick:function(){return a.push("/")}},"Jogar novamente"),r.a.createElement("button",{type:"button","data-testid":"btn-ranking",className:"btn-ranking",onClick:function(){return a.push("/ranking")}},"Ver Ranking")))}}]),t}(n.Component)),g=Object(o.b)((function(e){return{dados:e.scoreReducer}}),null)(b),f=a(111),v=a(25),y=a.n(v),k=a(5);a(124);var E=a(39),w=a.n(E),O=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).state={questions:{},questionNumber:0,timer:30,loading:!0,redBorder:"",greenBorder:"",disable:!1,totalScore:0,assertions:0,showButton:!0,answerStyle:{}},e.fetchQuestions=e.fetchQuestions.bind(Object(k.a)(e)),e.renderAnswers=e.renderAnswers.bind(Object(k.a)(e)),e.handleClick=e.handleClick.bind(Object(k.a)(e)),e.stopWatch=e.stopWatch.bind(Object(k.a)(e)),e.switchValue=e.switchValue.bind(Object(k.a)(e)),e.stopTimer=e.stopTimer.bind(Object(k.a)(e)),e.nextQuestion=e.nextQuestion.bind(Object(k.a)(e)),e.switchTimeBar=e.switchTimeBar.bind(Object(k.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchQuestions(),this.stopWatch();var e=this.props.dados,t=this.state.assertions,a={name:e.name,assertions:t,score:0,gravatarEmail:e.email};localStorage.setItem("state",JSON.stringify({player:a}))}},{key:"stopWatch",value:function(){var e=this;this.timer=setInterval((function(){var t=e.state.timer;e.setState({timer:t-1}),1===t&&(clearInterval(e.timer),e.setState({disable:!0,showButton:!1}))}),1e3)}},{key:"fetchQuestions",value:function(){var e,t,a,n;return y.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=this.props.dados.token,t=void 0===e?"a2abf8fd177c66dab22a9d4091789330a889e39e6d2e04dc2bb1fb0ec2c20198":e,r.next=4,y.a.awrap(fetch("https://opentdb.com/api.php?amount=5&token=".concat(t)));case 4:return a=r.sent,r.next=7,y.a.awrap(a.json());case 7:n=r.sent,this.setState({questions:n.results,loading:!1});case 9:case"end":return r.stop()}}),null,this)}},{key:"switchValue",value:function(e){switch(e){case"easy":return 1;case"medium":return 2;case"hard":return 3;default:return 0}}},{key:"switchTimeBar",value:function(){var e=this.state.timer;return e<20&&e>10?"yellow":e<10?"red":"#4466F2"}},{key:"stopTimer",value:function(){this.setState({greenBorder:"green-border",redBorder:"red-border"}),clearInterval(this.timer)}},{key:"handleClick",value:function(e){var t=e.target;this.stopTimer();var a=this.state,n=a.questions,r=a.questionNumber,s=a.timer,i=a.totalScore,o=a.assertions,c=n[r].difficulty,l=this.props.dados;if(t.textContent!==n[r].correct_answer){var m={name:l.name,assertions:o,score:i,gravatarEmail:l.email};return localStorage.setItem("state",JSON.stringify({player:m})),void this.setState({showButton:!1,answerStyle:{backdropFilter:"blur(0)",backgroundColor:"",border:"2px solid red"}})}var u=10+s*this.switchValue(c);this.setState({totalScore:i+u,assertions:o+1,showButton:!1,answerStyle:{backdropFilter:"blur(0)",backgroundColor:"",border:"2px solid green"}});var d={name:l.name,assertions:o+1,score:i+u,gravatarEmail:l.email};localStorage.setItem("state",JSON.stringify({player:d}))}},{key:"nextQuestion",value:function(){var e=this.state,t=e.questionNumber,a=e.totalScore,n=e.assertions;if(t<4)this.setState({questionNumber:t+1,showButton:!0,disable:!1,timer:30,greenBorder:"",redBorder:"",answerStyle:{}}),this.stopWatch();else{var r=this.props,s=r.history,i=r.Score,o=r.dados,c=o.name,l=o.email,m=o.profile;i({name:c,email:l,profile:m,score:a,assertions:n}),function(e){var t=e.name,a=e.score,n=e.profile,r=localStorage.getItem("ranking");if(r){var s=JSON.parse(r),i={name:t,score:a,picture:n};s.push(i),localStorage.setItem("ranking",JSON.stringify(s))}else{var o={name:t,score:a,picture:n};localStorage.setItem("ranking",JSON.stringify([o]))}}({name:c,score:a,profile:m}),s.push("/feedback")}}},{key:"renderAnswers",value:function(){var e=this,t=this.state,a=t.questions,n=t.questionNumber,s=t.redBorder,i=t.greenBorder,o=t.disable,c=[].concat(Object(f.a)(a[n].incorrect_answers),[a[n].correct_answer]),l=-1;return c.sort().map((function(t){return t===a[n].correct_answer?r.a.createElement("button",{type:"button","data-testid":"correct-answer",className:"".concat(i," answer-option"),onClick:e.handleClick,disabled:o},t):(l+=1,r.a.createElement("button",{className:"".concat(s," answer-option"),type:"button","data-testid":"wrong-answer-".concat(l),key:l,onClick:e.handleClick,disabled:o},t))}))}},{key:"render",value:function(){var e=this.props.dados,t=e.name,a=e.profile,n=this.state,s=n.loading,i=n.questionNumber,o=n.timer,c=n.showButton,l=n.answerStyle,m=n.totalScore,u={backgroundColor:this.switchTimeBar(),width:"".concat(o,"vh")},d=this.state.questions;return s||Object.values(d).length<1?r.a.createElement("div",{className:"loading-container"},r.a.createElement("img",{src:w.a,alt:"trivia logo","data-testid":"header-profile-picture",className:"App-logo"}),r.a.createElement("i",null,r.a.createElement("h1",null,"Loading..."))):r.a.createElement("section",{className:"game-section"},r.a.createElement("img",{src:w.a,alt:"trivia logo",className:"trivia-logo"}),r.a.createElement("div",{className:"game-container",style:l},r.a.createElement("header",null,r.a.createElement("h1",{"data-testid":"header-player-name",className:"header-player-name"},"~ ".concat(t," ~"))),r.a.createElement("div",{className:"profile-score-time-container"},r.a.createElement("div",{className:"profile-score-container"},r.a.createElement("img",{src:"https://www.gravatar.com/avatar/".concat(a),alt:"profile","data-testid":"header-profile-picture",className:"profile-image"}),r.a.createElement("span",{"data-testid":"header-score"},"Score: ".concat(m))),r.a.createElement("div",{className:"time"},r.a.createElement("span",null,o),r.a.createElement("div",{className:"time-bar",style:u}," "))),r.a.createElement("div",{className:"questions-and-answers"},r.a.createElement("span",{"data-testid":"question-category",className:"question-category"},d[i].category),r.a.createElement("span",{"data-testid":"question-text"},d[i].question),r.a.createElement("span",null,this.renderAnswers()),r.a.createElement("button",{type:"button","data-testid":"btn-next",className:"btn-next",hidden:c,onClick:this.nextQuestion},"Pr\xf3xima"))))}}]),t}(n.Component),j=Object(o.b)((function(e){return{dados:e.loginReducer}}),(function(e){return{Score:function(t){var a,n=t.name,r=t.email,s=t.profile,i=t.score,o=t.assertions;return e({type:"SCORE",payload:{name:(a={name:n,email:r,profile:s,score:i,assertions:o}).name,email:a.email,profile:a.profile,score:a.score,assertions:a.assertions}})}}}))(O),N=a(26),S=a(67),C=a.n(S),x=(a(210),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).state={name:"",email:"",disable:!0,profile:""},e.handleChange=e.handleChange.bind(Object(k.a)(e)),e.sendLogin=e.sendLogin.bind(Object(k.a)(e)),e.validLogin=e.validLogin.bind(Object(k.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"validLogin",value:function(){var e=this.state,t=e.email;[e.name.length<4,!t.includes("@"),t.split("@").length>2,!t.includes(".com"),t.includes(".")&&t.split(".")[1].length>3,t.includes(".")&&t.split(".").length>2].every((function(e){return!1===e}))?this.setState({disable:!1}):this.setState({disable:!0})}},{key:"handleChange",value:function(e){var t,a,n=e.target,r=n.value,s=n.id,i=this.state,o=i.name,c=i.email;o&&c&&r?this.setState((t={},Object(N.a)(t,s,r),Object(N.a)(t,"profile",C()(c).toString()),t)):this.setState((a={},Object(N.a)(a,s,r),Object(N.a)(a,"disable",!0),Object(N.a)(a,"profile",C()(c).toString()),a))}},{key:"sendLogin",value:function(){var e,t,a,n,r,s,i,o,c,l;return y.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,y.a.awrap(fetch("https://opentdb.com/api_token.php?command=request"));case 2:return e=m.sent,m.next=5,y.a.awrap(e.json());case 5:t=m.sent,a=t.token,localStorage.setItem("token",a),n=this.state,r=n.name,s=n.email,i=n.profile,o=this.props,c=o.Login,l=o.history,c(r,s,i,a),l.push("/jogo");case 12:case"end":return m.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.disable;return r.a.createElement("section",{className:"login-section"},r.a.createElement("img",{src:w.a,alt:"trivia logo",className:"trivia-logo"}),r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-inputs-container"},r.a.createElement("input",{autoComplete:"off",id:"name","data-testid":"input-player-name",type:"text",onChange:this.handleChange,placeholder:"Name",value:t,onKeyUp:this.validLogin,className:"login-input"}),r.a.createElement("button",{"data-testid":"btn-play",type:"button",disabled:n,onClick:this.sendLogin,className:n?"login-button":"login-button able"},"Jogar"),r.a.createElement("input",{id:"email","data-testid":"input-gravatar-email",type:"text",onChange:this.handleChange,placeholder:"E-mail",value:a,className:"login-input",onKeyUp:this.validLogin})),r.a.createElement(c.b,{to:"/configuracoes","data-testid":"btn-settings",className:"login-settings"},"Settings")),r.a.createElement("span",{className:"dev-by"},"\xa9 Guilherme Viana"))}}]),t}(n.Component)),B=Object(o.b)(null,(function(e){return{Login:function(t,a,n,r){return e(function(e,t,a,n){return{type:"LOGIN",payload:{name:e,email:t,profile:a,token:n}}}(t,a,n,r))}}}))(x),q=(a(212),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("ranking"));e.sort((function(e,t){return e.score<t.score?1:e.score>t.score?-1:0})),console.log(e);var t=this.props.history;return r.a.createElement("section",{className:"ranking-section"},r.a.createElement("div",{className:"ranking-container"},r.a.createElement("p",{"data-testid":"ranking-title"},"Ranking"),r.a.createElement("img",{src:"https://www.gravatar.com/avatar/".concat(e[0].picture),alt:"gravatar","data-testid":"header-profile-picture",className:"profile-image"}),e.map((function(e,t){return r.a.createElement("div",{className:"player-infos",key:t},r.a.createElement("p",{className:"player-name","data-testid":"player-name-".concat(t)},"".concat(t+1,". ").concat(e.name)),r.a.createElement("p",{className:"player-score","data-testid":"player-score-".concat(t)},e.score))})),r.a.createElement("button",{"data-testid":"btn-go-home",className:"btn-go-home",type:"button",onClick:function(){return t.push("/")}},"voltar")))}}]),t}(n.Component)),I=(a(213),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"settings-section"},r.a.createElement("h1",{"data-testid":"settings-title"},"Settings"))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(28),J=a(110),R=a(48),T={name:"",email:"",profile:""};var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"LOGIN":return Object(R.a)({},e,{name:n.name,email:n.email,profile:n.profile,token:n.token});default:return e}},W={name:"",email:"",profile:"",score:0,assertions:0};var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SCORE":return Object(R.a)({},e,{name:n.name,email:n.email,profile:n.profile,score:n.score,assertions:n.assertions});default:return e}},A=Object(L.combineReducers)({loginReducer:Q,scoreReducer:V}),_=Object(L.createStore)(A,Object(J.composeWithDevTools)());window.Cypress&&(window.store=_);var F=_;i.a.render(r.a.createElement(o.a,{store:F},r.a.createElement((function(){return r.a.createElement(c.a,{basename:"/trivia-game"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:B}),r.a.createElement(l.a,{exact:!0,path:"/configuracoes",component:I}),r.a.createElement(l.a,{exact:!0,path:"/jogo",component:j}),r.a.createElement(l.a,{exact:!0,path:"/feedback",component:g}),r.a.createElement(l.a,{exact:!0,path:"/ranking",component:q})))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e,t,a){e.exports=a.p+"static/media/trivia.466d153e.png"}},[[112,1,2]]]);
//# sourceMappingURL=main.8ae2f69f.chunk.js.map