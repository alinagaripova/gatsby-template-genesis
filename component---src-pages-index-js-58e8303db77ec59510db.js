(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{200:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(201),r=t(206),s=t.n(r),i=t(204),m=function(e){return l.a.createElement("section",{id:"banner",className:"major"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h1",null,"Genesis")),l.a.createElement("div",{className:"content"},l.a.createElement("p",null,"Тут вкратце про то, что мы предлагаем.",l.a.createElement("br",null),"Тут про стек технологий: 1.вид 2.вид 3.вид"),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(c.a,{to:"/landing",className:"button next scrolly"},"Подробнее"))))))},o=t(223),u=t.n(o),E=t(224),d=t.n(E),p=t(213),f=t.n(p),g=t(225),h=t.n(g);t(226),t(227);var N=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return l.a.createElement(i.a,null,l.a.createElement(s.a,{title:"Genesis - Главная",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),l.a.createElement(m,null),l.a.createElement("div",{id:"main"},l.a.createElement("section",{id:"one",className:"tiles"},l.a.createElement("article",{style:{backgroundImage:"url("+u.a+")"}},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"О нас"),l.a.createElement("p",null,"Прочитать тут")),l.a.createElement(c.a,{to:"/about",className:"link primary"})),l.a.createElement("article",{style:{backgroundImage:"url("+d.a+")"}},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"Наши проекты"),l.a.createElement("p",null,"Прочитать тут")),l.a.createElement(c.a,{to:"/projects",className:"link primary"})),l.a.createElement("article",{style:{backgroundImage:"url("+f.a+")"}},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"Клиенты"),l.a.createElement("p",null,"Прочитать тут")),l.a.createElement(c.a,{to:"/",className:"link primary"})),l.a.createElement("article",{style:{backgroundImage:"url("+h.a+")"}},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"Новости"),l.a.createElement("p",null,"Прочитать тут")),l.a.createElement(c.a,{to:"/articles",className:"link primary"}))),l.a.createElement("section",{id:"two"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Massa libero")),l.a.createElement("p",null,"Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus."),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(c.a,{to:"/landing",className:"button next"},"Get Started")))))))},n}(n.Component);a.default=N},201:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),l=t.n(n),c=t(66),r=t.n(c);t.d(a,"a",function(){return r.a});t(202),t(7).default.enqueue;var s=l.a.createContext({});function i(e){var a=e.staticQueryData,t=e.data,n=e.query,c=e.render,r=t?t.data:a[n]&&a[n].data;return l.a.createElement(l.a.Fragment,null,r&&c(r),!r&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var a=e.data,t=e.query,n=e.render,c=e.children;return l.a.createElement(s.Consumer,null,function(e){return l.a.createElement(i,{data:a,query:t,render:n||c,staticQueryData:e})})}},202:function(e,a,t){var n;e.exports=(n=t(203))&&n.default||n},203:function(e,a,t){"use strict";t.r(a);t(22);var n=t(0),l=t.n(n),c=t(90);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null}},204:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=(t(205),t(201)),r=function(e){return l.a.createElement("header",{id:"header",className:"alt"},l.a.createElement(c.a,{to:"/",className:"logo"},l.a.createElement("strong",null,"Genesis")," ",l.a.createElement("span",null,"главная")),l.a.createElement("nav",null,l.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))},s=function(e){return l.a.createElement("nav",{id:"menu"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement(c.a,{onClick:e.onToggleMenu,to:"/"},"Главная")),l.a.createElement("li",null,l.a.createElement(c.a,{onClick:e.onToggleMenu,to:"/projects"},"Услуги и Проекты")),l.a.createElement("li",null,l.a.createElement(c.a,{onClick:e.onToggleMenu,to:"/about"},"О нас")),l.a.createElement("li",null,l.a.createElement(c.a,{onClick:e.onToggleMenu,to:"/articles"},"Новости")),l.a.createElement("li",null,l.a.createElement(c.a,{className:"button fit",onClick:e.onToggleMenu,to:"/contacts"},"Свяжись с нами")))),l.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))},i=function(e){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"inner"},l.a.createElement("section",null,l.a.createElement("form",{method:"post",action:"#"},l.a.createElement("div",{className:"field half first"},l.a.createElement("label",{htmlFor:"name"},"Имя"),l.a.createElement("input",{type:"text",name:"name",id:"name"})),l.a.createElement("div",{className:"field half"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"text",name:"email",id:"email"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"message"},"Сообщение"),l.a.createElement("textarea",{name:"message",id:"message",rows:"6"})),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("input",{type:"submit",value:"Отправить",className:"special"})),l.a.createElement("li",null,l.a.createElement("input",{type:"reset",value:"Очистить"}))))),l.a.createElement("section",{className:"split"},l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-envelope"}),l.a.createElement("h3",null,"Эл.почта"),l.a.createElement("a",{href:"#"},"genesis@genisis.com"))),l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-phone"}),l.a.createElement("h3",null,"Телефон"),l.a.createElement("span",null,"(000) 000-0000 x12387"))),l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-home"}),l.a.createElement("h3",null,"Адрес"),l.a.createElement("span",null,"1234 Улица #5432",l.a.createElement("br",null),"Город, регион 00000",l.a.createElement("br",null),"Страна"))))))},m=function(e){return l.a.createElement("footer",{id:"footer"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-twitter"},l.a.createElement("span",{className:"label"},"Twitter"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-facebook"},l.a.createElement("span",{className:"label"},"Facebook"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-instagram"},l.a.createElement("span",{className:"label"},"Instagram"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-github"},l.a.createElement("span",{className:"label"},"GitHub"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-linkedin"},l.a.createElement("span",{className:"label"},"LinkedIn")))),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"© Untitled"),l.a.createElement("li",null,"Design: ",l.a.createElement("a",{href:"http://headmade.pro/"},"HeadMade")))))};var o=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var c=n.prototype;return c.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},c.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},c.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},c.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},l.a.createElement("div",{id:"wrapper"},l.a.createElement(r,{onToggleMenu:this.handleToggleMenu}),e,l.a.createElement(i,null),l.a.createElement(m,null)),l.a.createElement(s,{onToggleMenu:this.handleToggleMenu}))},n}(n.Component);a.a=o},213:function(e,a,t){e.exports=t.p+"static/pic03-3677838948c068ce88d237eaea766a51.jpg"},223:function(e,a,t){e.exports=t.p+"static/pic01-f7c500d0c7ce97f4fa08f6f797eaf142.jpg"},224:function(e,a,t){e.exports=t.p+"static/pic02-40a772a08cf02ce5a485b7290fa9d8dc.jpg"},225:function(e,a,t){e.exports=t.p+"static/pic04-e2db96cd5eec25ebe26cb0525e9589d6.jpg"},226:function(e,a,t){e.exports=t.p+"static/pic05-d82e61241e70622b517cab61e99a61ee.jpg"},227:function(e,a,t){e.exports=t.p+"static/pic06-05653d205a36da91b3161519999f69c1.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-58e8303db77ec59510db.js.map