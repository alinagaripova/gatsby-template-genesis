(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{192:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return d});var n=t(0),l=t.n(n),r=t(201),c=t(206),i=t.n(c),s=t(204),m=t(209),o=t(210),u=t(207),E=t.n(u),d="3788541548";a.default=function(e){var a=e.data.allMarkdownRemark.edges;e.pageContext,e.data.allMarkdownRemark.group;return l.a.createElement(s.a,null,l.a.createElement(i.a,null,l.a.createElement("title",null,"Genesis - Услуги и проекты"),l.a.createElement("meta",{name:"description",content:"Tags Page"})),l.a.createElement(m.a,{title:"Услуги и проекты",description:"Мы используем современные технологии. Ниже представлены наши проекты."}),l.a.createElement("div",{id:"main"},l.a.createElement(o.a,null),l.a.createElement("section",{id:"two",className:"spotlights"},a.map(function(e){var a=e.node.frontmatter;return l.a.createElement("section",null,l.a.createElement(r.a,{to:"/generic",className:"image"},l.a.createElement("img",{src:E.a,alt:a.title})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,a.title)),l.a.createElement("p",null,a.description),l.a.createElement("h4",null,"Технологии:"),l.a.createElement("ul",null,a.technologies.map(function(e){return l.a.createElement("li",null,e)})),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(r.a,{to:a.path,className:"button"},"Подробнее"))))))}))))}},201:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),l=t.n(n),r=t(66),c=t.n(r);t.d(a,"a",function(){return c.a});t(202),t(7).default.enqueue;var i=l.a.createContext({});function s(e){var a=e.staticQueryData,t=e.data,n=e.query,r=e.render,c=t?t.data:a[n]&&a[n].data;return l.a.createElement(l.a.Fragment,null,c&&r(c),!c&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var a=e.data,t=e.query,n=e.render,r=e.children;return l.a.createElement(i.Consumer,null,function(e){return l.a.createElement(s,{data:a,query:t,render:n||r,staticQueryData:e})})}},202:function(e,a,t){var n;e.exports=(n=t(203))&&n.default||n},203:function(e,a,t){"use strict";t.r(a);t(22);var n=t(0),l=t.n(n),r=t(90);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},204:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(205),t(201)),c=function(e){return l.a.createElement("header",{id:"header",className:"alt"},l.a.createElement(r.a,{to:"/",className:"logo"},l.a.createElement("strong",null,"Genesis")," ",l.a.createElement("span",null,"главная")),l.a.createElement("nav",null,l.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))},i=function(e){return l.a.createElement("nav",{id:"menu"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/"},"Главная")),l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/projects"},"Услуги и Проекты")),l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/about"},"О нас")),l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/articles"},"Новости")),l.a.createElement("li",null,l.a.createElement(r.a,{className:"button fit",onClick:e.onToggleMenu,to:"/contacts"},"Свяжись с нами")))),l.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))},s=function(e){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"inner"},l.a.createElement("section",null,l.a.createElement("form",{method:"post",action:"#"},l.a.createElement("div",{className:"field half first"},l.a.createElement("label",{htmlFor:"name"},"Имя"),l.a.createElement("input",{type:"text",name:"name",id:"name"})),l.a.createElement("div",{className:"field half"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"text",name:"email",id:"email"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"message"},"Сообщение"),l.a.createElement("textarea",{name:"message",id:"message",rows:"6"})),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("input",{type:"submit",value:"Отправить",className:"special"})),l.a.createElement("li",null,l.a.createElement("input",{type:"reset",value:"Очистить"}))))),l.a.createElement("section",{className:"split"},l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-envelope"}),l.a.createElement("h3",null,"Эл.почта"),l.a.createElement("a",{href:"#"},"genesis@genisis.com"))),l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-phone"}),l.a.createElement("h3",null,"Телефон"),l.a.createElement("span",null,"(000) 000-0000 x12387"))),l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-home"}),l.a.createElement("h3",null,"Адрес"),l.a.createElement("span",null,"1234 Улица #5432",l.a.createElement("br",null),"Город, регион 00000",l.a.createElement("br",null),"Страна"))))))},m=function(e){return l.a.createElement("footer",{id:"footer"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-twitter"},l.a.createElement("span",{className:"label"},"Twitter"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-facebook"},l.a.createElement("span",{className:"label"},"Facebook"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-instagram"},l.a.createElement("span",{className:"label"},"Instagram"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-github"},l.a.createElement("span",{className:"label"},"GitHub"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"icon alt fa-linkedin"},l.a.createElement("span",{className:"label"},"LinkedIn")))),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"© Untitled"),l.a.createElement("li",null,"Design: ",l.a.createElement("a",{href:"http://headmade.pro/"},"HeadMade")))))};var o=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=n.prototype;return r.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},r.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},r.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},r.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},l.a.createElement("div",{id:"wrapper"},l.a.createElement(c,{onToggleMenu:this.handleToggleMenu}),e,l.a.createElement(s,null),l.a.createElement(m,null)),l.a.createElement(i,{onToggleMenu:this.handleToggleMenu}))},n}(n.Component);a.a=o},207:function(e,a,t){e.exports=t.p+"static/pic08-4c3ce95d53bcf4f4e5c3079df9c3e543.jpg"},209:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){return l.a.createElement("section",{id:"banner",className:"style2"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h1",null,e.title)),l.a.createElement("div",{className:"content"},l.a.createElement("p",null,e.description))))}},210:function(e,a,t){"use strict";var n=t(211),l=t(0),r=t.n(l),c=t(201);a.a=function(){return r.a.createElement(c.b,{query:"3380098774",render:function(e){var a=e.allMarkdownRemark.group;return r.a.createElement("section",{id:"one"},r.a.createElement("div",{className:"inner"},r.a.createElement("header",{className:"major"},r.a.createElement("h2",null,"Наши проекты")),r.a.createElement("h4",null,"Фильтры:"),r.a.createElement("div",{className:"grid-wrapper"},r.a.createElement("div",{className:"col-6"},r.a.createElement("ul",null,a.map(function(e){return r.a.createElement("li",null,r.a.createElement(c.a,{to:e.fieldValue},e.fieldValue))}),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/projects"},"все")))))))},data:n})}},211:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"angular"},{fieldValue:"go"},{fieldValue:"javascript"},{fieldValue:"react"},{fieldValue:"redis"},{fieldValue:"ruby"},{fieldValue:"ruby-on-rails"}]}}}}}]);
//# sourceMappingURL=component---src-templates-tags-template-js-a6fbd132ae6b8b4b426d.js.map