(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{191:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return o});var n=t(0),l=t.n(n),c=t(204),r=t.n(c),i=(t(199),t(202)),s=t(206),m=t.n(s),o="1064140500";a.default=function(e){var a=e.data.markdownRemark.frontmatter;return l.a.createElement(i.a,null,l.a.createElement(r.a,null,l.a.createElement("title",null,"Genesis - Новости"),l.a.createElement("meta",{name:"description",content:"Generic Page"})),l.a.createElement("div",{id:"main",className:"alt"},l.a.createElement("section",{id:"one"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h1",null,a.title)),l.a.createElement("p",null,a.date),l.a.createElement("span",{className:"image main"},l.a.createElement("img",{src:m.a,alt:""})),l.a.createElement("p",null,a.description)))))}},199:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(66),r=t.n(c);t.d(a,"a",function(){return r.a});t(200),t(9).default.enqueue,l.a.createContext({})},200:function(e,a,t){var n;e.exports=(n=t(201))&&n.default||n},201:function(e,a,t){"use strict";t.r(a);t(22);var n=t(0),l=t.n(n),c=t(90);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null}},202:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=(t(203),t(199)),r=function(e){return l.a.createElement("header",{id:"header",className:"alt"},l.a.createElement(c.a,{to:"/",className:"logo"},l.a.createElement("strong",null,"Genesis")," ",l.a.createElement("span",null,"главная")),l.a.createElement("nav",null,l.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))},i=function(e){return l.a.createElement("nav",{id:"menu"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement(c.a,{onClick:e.onToggleMenu,to:"/"},"Главная")),l.a.createElement("li",null,l.a.createElement(c.a,{onClick:e.onToggleMenu,to:"/projects"},"Услуги и Проекты")),l.a.createElement("li",null,l.a.createElement(c.a,{onClick:e.onToggleMenu,to:"/about"},"О нас")),l.a.createElement("li",null,l.a.createElement(c.a,{onClick:e.onToggleMenu,to:"/articles"},"Новости")),l.a.createElement("li",null,l.a.createElement(c.a,{className:"button fit",onClick:e.onToggleMenu,to:"/contacts"},"Свяжись с нами")))),l.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))},s=function(e){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"inner"},l.a.createElement("section",null,l.a.createElement("form",{method:"post",action:"#"},l.a.createElement("div",{className:"field half first"},l.a.createElement("label",{htmlFor:"name"},"Имя"),l.a.createElement("input",{type:"text",name:"name",id:"name"})),l.a.createElement("div",{className:"field half"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"text",name:"email",id:"email"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"message"},"Сообщение"),l.a.createElement("textarea",{name:"message",id:"message",rows:"6"})),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("input",{type:"submit",value:"Отправить",className:"special"})),l.a.createElement("li",null,l.a.createElement("input",{type:"reset",value:"Очистить"}))))),l.a.createElement("section",{className:"split"},l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-envelope"}),l.a.createElement("h3",null,"Эл.почта"),l.a.createElement("a",{href:"#"},"genesis@genisis.com"))),l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-phone"}),l.a.createElement("h3",null,"Телефон"),l.a.createElement("span",null,"(000) 000-0000 x12387"))),l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-home"}),l.a.createElement("h3",null,"Адрес"),l.a.createElement("span",null,"1234 Улица #5432",l.a.createElement("br",null),"Город, регион 00000",l.a.createElement("br",null),"Страна"))))))},m=function(e){return l.a.createElement("footer",{id:"footer"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-twitter"},l.a.createElement("span",{className:"label"},"Twitter"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-facebook"},l.a.createElement("span",{className:"label"},"Facebook"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-instagram"},l.a.createElement("span",{className:"label"},"Instagram"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-github"},l.a.createElement("span",{className:"label"},"GitHub"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-linkedin"},l.a.createElement("span",{className:"label"},"LinkedIn")))),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"© Untitled"),l.a.createElement("li",null,"Design: ",l.a.createElement("a",{href:"http://headmade.pro/"},"HeadMade")))))};var o=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var c=n.prototype;return c.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},c.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},c.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},c.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},l.a.createElement("div",{id:"wrapper"},l.a.createElement(r,{onToggleMenu:this.handleToggleMenu}),e,l.a.createElement(s,null),l.a.createElement(m,null)),l.a.createElement(i,{onToggleMenu:this.handleToggleMenu}))},n}(n.Component);a.a=o},206:function(e,a,t){e.exports=t.p+"static/pic11-d9e39c8bf987cfe48a7aff0b47169898.jpg"}}]);
//# sourceMappingURL=component---src-templates-article-template-js-e094eab8d4741a4d91c7.js.map