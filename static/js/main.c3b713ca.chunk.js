(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(39)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(15),a(1)),s=a(2),i=a(4),m=a(3),u=a(5),d=(a(17),!!((document||{}).documentElement||{}).style&&"scrollBehavior"in document.documentElement.style),f=function(e){e&&(d?e.scrollIntoView({behavior:"smooth",block:"start"}):e.scrollIntoView())},p=(a(19),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={isSticky:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"scrollToScreen",value:function(e){var t=document.querySelector(e);f(t)}},{key:"render",value:function(){var e=this;return r.a.createElement("nav",null,r.a.createElement("div",{className:"logo"},r.a.createElement("div",{className:"logo-item active",onClick:function(t){return e.scrollToScreen(".landing-container")}},"M")),r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"menu-item active",onClick:function(t){return e.scrollToScreen(".my-story")}},"myStory"),r.a.createElement("div",{className:"menu-item",onClick:function(t){return e.scrollToScreen(".skills-page")}},"skills"),r.a.createElement("div",{className:"menu-item",onClick:function(t){return e.scrollToScreen(".projects-page")}},"projects"),r.a.createElement("div",{className:"menu-item",onClick:function(t){return e.scrollToScreen(".footer")}}," ","getInTouch")))}}]),t}(n.Component)),h=(a(21),function(e){function t(e){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"scrollToScreen",value:function(e){var t=document.querySelector(e);f(t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"landing-container"},r.a.createElement(p,null),r.a.createElement("div",{className:"intro-circle"},r.a.createElement("div",{className:"name"},"mattySmith"),r.a.createElement("div",{className:"info"},"web developer | engineer | aspiring polyglot | avid golfer")),r.a.createElement("div",{className:"pagination"},r.a.createElement("i",{class:"fas fa-arrow-down",onClick:function(t){return e.scrollToScreen(".my-story")}},r.a.createElement("p",{className:"pagination-text"},"my story"))))}}]),t}(n.Component)),E=(a(23),function(e){function t(e){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"scrollToScreen",value:function(e){var t=document.querySelector(e);f(t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"my-story"},r.a.createElement("div",{className:"story-heading"},"a few quick facts..."),r.a.createElement("div",{className:"story-information"},r.a.createElement("p",null,r.a.createElement("b",null,"Hola, I'm Matty!")," I have a ginger kitty named Blue, I love golf, I live in Burlington, Vermont, I could read about sacred geometry for hours, Alan Watts is cool, I have been programming for four months and this is my first portfolio page."),r.a.createElement("p",null,r.a.createElement("strong",null,'"The only way to make sense out of change is to plunge into it, move with it, and join the dance. "'," "),"About four months ago I enrolled in a bootcamp to learn how to code. I can defintely say it was one of the best decisions I have made. I was looking for a change of pace and programming has certainly delivered. The amount of information intake that has been involved with this journey so far is mind boggling but I am enjoying the process. If you're looking for someone with a lot of grit and eagerness to learn don't hesitate to get in touch. Thanks for visiting my page!")),r.a.createElement("div",{className:"pagination"},r.a.createElement("i",{class:"fas fa-arrow-down",onClick:function(t){return e.scrollToScreen(".skills-page")}},r.a.createElement("p",{className:"pagination-text"},"skills"))))}}]),t}(n.Component)),v=(a(25),function(e,t){return e.render?e.render:r.a.createElement("div",{className:"project-content"},r.a.createElement("div",{className:"project-item"},r.a.createElement("div",{className:"project-item--title"},"vt. startUp tracker",r.a.createElement("div",{className:"project-item--desc"},r.a.createElement("span",null,"The startup tracker is a website for LaunchVT that tracks local startup activity in the state of Vermont. It is still a work in progress and It was built using React, NodeJS, Express, MongoDB, MLab and deployed via Heroku. More additions to come..."))),r.a.createElement("div",{className:"project-item--links"},r.a.createElement("a",{className:"awesome-source",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/BurlingtonCodeAcademy/startup-vermont"},r.a.createElement("i",{class:"fas fa-file-code"})))),r.a.createElement("div",{className:"project-item"},r.a.createElement("div",{className:"project-item--title"},"geoVermonter",r.a.createElement("div",{className:"project-item--desc"},r.a.createElement("span",null,"A fun remake of Googles GeoGuesser app. We made the borders smaller only allowing the State of Vermont. We used React for the front end with geoJSON and Node for the back end."))),r.a.createElement("div",{className:"project-item--links"},r.a.createElement("a",{className:"awesome-source",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/BurlingtonCodeAcademy/geo-vermonter-with-react-jonathan-and-matty-geo-vermonter"},r.a.createElement("i",{class:"fas fa-file-code"})))),r.a.createElement("div",{className:"project-item"},r.a.createElement("div",{className:"project-item--title"},"my portfolio page",r.a.createElement("div",{className:"project-item--desc"},r.a.createElement("span",null,"My first personal portfolio page to showcase a bit about myself. The app was bootstrapped with Create React App and I used Surge for static web publishing."))),r.a.createElement("div",{className:"project-item--links"},r.a.createElement("a",{className:"awesome-source",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mattysmith9/mattysmith9.github.io"},r.a.createElement("i",{class:"fas fa-file-code"})))),r.a.createElement("div",{className:"project-item"},r.a.createElement("div",{className:"project-item--title"},"pomodoro timer",r.a.createElement("div",{className:"project-item--desc"},r.a.createElement("span",null,"A fun take on the famous Pomodoro technique. It is a simple example of a Pomodoro Timer built with vanilla JavaScript, HTML and CSS."))),r.a.createElement("div",{className:"project-item--links"},r.a.createElement("a",{className:"awesome-source",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mattysmith9/pomodoro-matty-and-leight-pomodoro"},r.a.createElement("i",{class:"fas fa-file-code"})))))}),g=(a(27),function(e){function t(e){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"scrollToScreen",value:function(e){var t=document.querySelector(e);f(t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"projects-page"},r.a.createElement("div",{className:"projects-wrapper"},r.a.createElement("div",{className:"content-grid"},r.a.createElement("h1",{className:"project-header"},"a few projects I have worked on so far..."),r.a.createElement("div",{className:"projects-wrapper"},r.a.createElement(v,null)))),r.a.createElement("div",{className:"pagination"},r.a.createElement("i",{class:"fas fa-arrow-down",onClick:function(t){return e.scrollToScreen(".footer")}},r.a.createElement("p",{className:"pagination-text"},"get in touch"))))}}]),t}(n.Component)),b=a(8),k=(a(29),function(e){return e.render?e.render:r.a.createElement("div",{className:"icon-content"},r.a.createElement("div",{className:"contact-icons"},r.a.createElement("a",{className:"awesome-footer",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mattysmith9/"},r.a.createElement("i",{class:"fab fa-github"})),r.a.createElement("a",{className:"awesome-footer",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/mattysmith9/"},r.a.createElement("i",{class:"fab fa-linkedin"})),r.a.createElement("a",Object(b.a)({className:"awesome-footer",target:"_blank",rel:"noopener noreferrer",href:"mailto:matthewcsmith18@gmail.com?Subject=Contact%20Matty"},"target","_top"),r.a.createElement("i",{class:"fas fa-envelope"}))))}),N=(a(31),a(33),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={isSticky:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{class:"social"},r.a.createElement(k,null)),r.a.createElement("p",{className:"copyright"},"*Page built by Matty Smith 2019*")))}}]),t}(n.Component)),y=(a(35),function(e){return e.render?e.render:r.a.createElement("div",{className:"skill-content"},r.a.createElement("div",{className:"skill-object"},r.a.createElement("div",{className:"skill-title"},"frontEnd",r.a.createElement("div",{className:"skill-description"},r.a.createElement("span",null,"Experience with ",r.a.createElement("br",null),"HTML, CSS and JavaScript fundamentals as well as experience with Create React App building single page applications as well as static sites including this page and a Vermont startup tracker."))),r.a.createElement("div",{className:"code-awesome"},r.a.createElement("i",{class:"fab fa-js"}),r.a.createElement("i",{class:"fab fa-react"}),r.a.createElement("i",{class:"fab fa-html5"}),r.a.createElement("i",{class:"fab fa-css3-alt"}))),r.a.createElement("div",{className:"skill-object"},r.a.createElement("div",{className:"skill-title"},"backEnd",r.a.createElement("div",{className:"skill-description"},r.a.createElement("span",null,"Experience with Node, Express, Firebase, MongoDB, Heroku and source control using Github. I am currently working on extending my knowledge further as I have found the back-end to be very interesting."))),r.a.createElement("div",{className:"code-awesome"},r.a.createElement("i",{class:"fab fa-node"}),r.a.createElement("i",{class:"fab fa-github-square"}),r.a.createElement("i",{class:"fas fa-terminal"}))),r.a.createElement("div",{className:"skill-object"},r.a.createElement("div",{className:"skill-title"},"exploring",r.a.createElement("div",{className:"skill-description"},r.a.createElement("span",null,"I am open to learning about anything interesting I come across. At this moment I am starting to experiment with Python and Kotlin on the language side of things. Blockchain has peaked my interest for a while now and I would love to gain some experience in data science and machine learning as well."))),r.a.createElement("div",{className:"code-awesome"},r.a.createElement("i",{class:"fas fa-chalkboard-teacher"}))))}),w=(a(37),function(e){function t(e){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"scrollToScreen",value:function(e){var t=document.querySelector(e);f(t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"skills-page"},r.a.createElement("div",{className:"skills-wrapper"},r.a.createElement("div",{className:"content-grid"},r.a.createElement("h1",{className:"skill-header"},"skills, qualifications & interests..."),r.a.createElement("div",{className:"skills-wrapper"},r.a.createElement(y,null)))),r.a.createElement("div",{className:"pagination"},r.a.createElement("i",{class:"fas fa-arrow-down",onClick:function(t){return e.scrollToScreen(".projects-page")}},r.a.createElement("p",{className:"pagination-text"},"projects"))))}}]),t}(n.Component)),j=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Matty-Landing-Page"},r.a.createElement(h,null),r.a.createElement(E,null),r.a.createElement(w,null),r.a.createElement(g,null),r.a.createElement(N,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.c3b713ca.chunk.js.map