(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{191:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return u});var n=t(0),l=t.n(n),r=t(206),c=t.n(r),i=t(201),m=t(204),s=t(208),o=t.n(s),u="2262676092";a.default=function(e){var a=e.data.markdownRemark.frontmatter;return console.log(a),l.a.createElement(m.a,null,l.a.createElement(c.a,{htmlAttributes:{lang:"ru"}},l.a.createElement("title",null,a.title),l.a.createElement("meta",{name:"description",content:a.description}),l.a.createElement("meta",{name:"keywords",content:a.technologies}),l.a.createElement("meta",{charSet:"utf-8"})),l.a.createElement("section",{id:"two",className:"spotlights"},l.a.createElement("section",null,l.a.createElement(i.a,{to:"/generic",className:"image"},l.a.createElement("img",{src:o.a,alt:""})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,a.title)),l.a.createElement("h4",null,"Описание:"),l.a.createElement("p",null,a.description," ",l.a.createElement("br",null),l.a.createElement("a",{href:a.href,target:"_blank"},a.href)),l.a.createElement("h4",null,"Наше участие:"),l.a.createElement("ul",null,a.participation.map(function(e){return l.a.createElement("li",null,e)})),l.a.createElement("h4",null,"Показатели:"),l.a.createElement("ul",null,a.statistics.map(function(e){return l.a.createElement("li",null,e)})))))))}},201:function(e,a,t){"use strict";t.d(a,"b",function(){return s});var n=t(0),l=t.n(n),r=t(66),c=t.n(r);t.d(a,"a",function(){return c.a});t(202),t(7).default.enqueue;var i=l.a.createContext({});function m(e){var a=e.staticQueryData,t=e.data,n=e.query,r=e.render,c=t?t.data:a[n]&&a[n].data;return l.a.createElement(l.a.Fragment,null,c&&r(c),!c&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var a=e.data,t=e.query,n=e.render,r=e.children;return l.a.createElement(i.Consumer,null,function(e){return l.a.createElement(m,{data:a,query:t,render:n||r,staticQueryData:e})})}},202:function(e,a,t){var n;e.exports=(n=t(203))&&n.default||n},203:function(e,a,t){"use strict";t.r(a);t(22);var n=t(0),l=t.n(n),r=t(90);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},204:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(205),t(201)),c=function(e){return l.a.createElement("header",{id:"header",className:"alt"},l.a.createElement(r.a,{to:"/",className:"logo"},l.a.createElement("strong",null,"Genesis")," ",l.a.createElement("span",null,"главная")),l.a.createElement("nav",null,l.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))},i=function(e){return l.a.createElement("nav",{id:"menu"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/"},"Главная")),l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/projects"},"Услуги и Проекты")),l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/about"},"О нас")),l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/articles"},"Новости")),l.a.createElement("li",null,l.a.createElement(r.a,{className:"button fit",onClick:e.onToggleMenu,to:"/contacts"},"Свяжись с нами")))),l.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))},m=function(e){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"inner"},l.a.createElement("section",null,l.a.createElement("form",{method:"post",action:"#"},l.a.createElement("div",{className:"field half first"},l.a.createElement("label",{htmlFor:"name"},"Имя"),l.a.createElement("input",{type:"text",name:"name",id:"name"})),l.a.createElement("div",{className:"field half"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"text",name:"email",id:"email"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"message"},"Сообщение"),l.a.createElement("textarea",{name:"message",id:"message",rows:"6"})),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("input",{type:"submit",value:"Отправить",className:"special"})),l.a.createElement("li",null,l.a.createElement("input",{type:"reset",value:"Очистить"}))))),l.a.createElement("section",{className:"split"},l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-envelope"}),l.a.createElement("h3",null,"Эл.почта"),l.a.createElement("a",{href:"#"},"genesis@genisis.com"))),l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-phone"}),l.a.createElement("h3",null,"Телефон"),l.a.createElement("span",null,"(000) 000-0000 x12387"))),l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-home"}),l.a.createElement("h3",null,"Адрес"),l.a.createElement("span",null,"1234 Улица #5432",l.a.createElement("br",null),"Город, регион 00000",l.a.createElement("br",null),"Страна"))))))},s=function(e){return l.a.createElement("footer",{id:"footer"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-twitter"},l.a.createElement("span",{className:"label"},"Twitter"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-facebook"},l.a.createElement("span",{className:"label"},"Facebook"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-instagram"},l.a.createElement("span",{className:"label"},"Instagram"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-github"},l.a.createElement("span",{className:"label"},"GitHub"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-linkedin"},l.a.createElement("span",{className:"label"},"LinkedIn")))),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"© Untitled"),l.a.createElement("li",null,"Design: ",l.a.createElement("a",{href:"http://headmade.pro/"},"HeadMade")))))};var o=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=n.prototype;return r.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},r.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},r.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},r.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},l.a.createElement("div",{id:"wrapper"},l.a.createElement(c,{onToggleMenu:this.handleToggleMenu}),e,l.a.createElement(m,null),l.a.createElement(s,null)),l.a.createElement(i,{onToggleMenu:this.handleToggleMenu}))},n}(n.Component);a.a=o},208:function(e,a,t){e.exports=t.p+"static/pic09-d59e4b49832baeb9c62a7a9d6c070f8c.jpg"}}]);
//# sourceMappingURL=component---src-templates-project-template-js-a3572d8e2dd45e0225f7.js.map