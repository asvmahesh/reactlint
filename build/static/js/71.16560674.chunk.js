(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{429:function(e,a,t){"use strict";t.d(a,"a",function(){return d});var n=t(69),l=t(3),r=t(4),c=t(6),m=t(5),o=t(7),s=t(0),i=t.n(s),u=t(1),p=t.n(u),d=(t(465),function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){p()(this.refs.select).select2()}},{key:"componentWillUnmount",value:function(){p()(this.refs.select).select2("destroy")}},{key:"render",value:function(){var e=this.props,a=e.children,t=Object(n.a)(e,["children"]);return i.a.createElement("select",Object.assign({},t,{ref:"select"}),a)}}]),a}(i.a.Component))},431:function(e,a,t){"use strict";t.d(a,"a",function(){return d});var n=t(69),l=t(3),r=t(4),c=t(6),m=t(5),o=t(7),s=t(0),i=t.n(s),u=t(1),p=t.n(u),d=(t(436),function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){p()(this.refs.editor).summernote({height:this.props.height||270})}},{key:"componentWillUnmount",value:function(){p()(this.refs.editor).summernote("destroy")}},{key:"render",value:function(){var e=this.props,a=e.children,t=Object(n.a)(e,["children"]);return i.a.createElement("div",Object.assign({},t,{ref:"editor"}),a)}}]),a}(i.a.Component))},439:function(e,a,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,c=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,o=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,i=s&&s(Object);e.exports=function e(a,t,u){if("string"!==typeof t){if(i){var p=s(t);p&&p!==i&&e(a,p,u)}var d=c(t);m&&(d=d.concat(m(t)));for(var f=0;f<d.length;++f){var E=d[f];if(!n[E]&&!l[E]&&(!u||!u[E])){var h=o(t,E);try{r(a,E,h)}catch(b){}}}return a}return a}},834:function(e,a,t){"use strict";t.r(a);var n=t(3),l=t(4),r=t(6),c=t(5),m=t(7),o=t(0),s=t.n(o),i=t(842),u=t(410),p=t(2),d=t.n(p),f=t(439),E=t.n(f),h=t(227),b=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};var v=function(e){var a=function(a){var t=a.wrappedComponentRef,n=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(a,["wrappedComponentRef"]);return s.a.createElement(h.a,{children:function(a){return s.a.createElement(e,b({},n,a,{ref:t}))}})};return a.displayName="withRouter("+(e.displayName||e.name)+")",a.WrappedComponent=e,a.propTypes={wrappedComponentRef:d.a.func},E()(a,e)},g=t(20),y=t(72),N=t(51),w=t(429),j=t(431),O=function(e){function a(){var e,t;Object(n.a)(this,a);for(var l=arguments.length,m=new Array(l),o=0;o<l;o++)m[o]=arguments[o];return(t=Object(r.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(m)))).state={cc:!1,bcc:!1,attachments:!1,sending:!1},t.currentMessage=null,t.handleSubmit=function(e){e.preventDefault(),t.setState({sending:!0}),setTimeout(function(){t.props.history.push("/outlook")},1e3)},t.addCarbonCopy=function(e){e.preventDefault(),t.setState({cc:!0})},t.addBlindCarbonCopy=function(e){e.preventDefault(),t.setState({bcc:!0})},t.addAttachments=function(e){e.preventDefault(),t.setState({attachments:!0})},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.currentMessage!==this.props.match.params.id&&(this.props.dispatch(Object(y.e)(this.props.match.params.id)),this.currentMessage=this.props.match.params.id)}},{key:"render",value:function(){var e=this.state.cc?null:s.a.createElement("em",null,s.a.createElement(i.a,{placement:"bottom",overlay:s.a.createElement(u.a,{id:"cc-tooltip"},"Carbon Copy")},s.a.createElement("a",{href:"#/",onClick:this.addCarbonCopy},"CC"))),a=this.state.bcc?null:s.a.createElement("em",null,s.a.createElement(i.a,{placement:"bottom",overlay:s.a.createElement(u.a,{id:"bcc-tooltip"},"Blind Carbon Copy")},s.a.createElement("a",{href:"#/",onClick:this.addBlindCarbonCopy},"BCC"))),t=this.props.message;return t.body?s.a.createElement("div",{className:"table-wrap custom-scroll"},s.a.createElement("h2",{className:"email-open-header"},"Reply to > ",t.subject," ",s.a.createElement("span",{className:"label txt-color-white"}," ",t.folder),s.a.createElement(i.a,{placement:"left",overlay:s.a.createElement(u.a,{id:"print-message-tooltip"},"Print")},s.a.createElement("a",{href:"#/",className:"txt-color-darken pull-right"},s.a.createElement("i",{className:"fa fa-print"})))),s.a.createElement("form",{onSubmit:this.handleSubmit,encType:"multipart/form-data",className:"form-horizontal"},s.a.createElement("div",{className:"inbox-info-bar no-padding"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"control-label col-md-1"},s.a.createElement("strong",null,"To")),s.a.createElement("div",{className:"col-md-11"},s.a.createElement(w.a,{multiple:!0,style:{width:"100%"},"data-select-search":"true",defaultValue:["IT@smartadmin.com"]},s.a.createElement("option",{value:"sunny.orlaf@smartadmin.com"},"sunny.orlaf@smartadmin.com"),s.a.createElement("option",{value:"rachael.hawi@smartadmin.com"},"rachael.hawi@smartadmin.com"),s.a.createElement("option",{value:"michael.safiel@smartadmin.com"},"michael.safiel@smartadmin.com"),s.a.createElement("option",{value:"alex.jones@infowars.com"},"alex.jones@infowars.com"),s.a.createElement("option",{value:"oruf.matalla@gmail.com"},"oruf.matalla@gmail.com"),s.a.createElement("option",{value:"hr@smartadmin.com"},"hr@smartadmin.com"),s.a.createElement("option",{value:"IT@smartadmin.com"},"IT@smartadmin.com")),e)))),this.state.cc?s.a.createElement("div",{className:"inbox-info-bar no-padding"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"control-label col-md-1"},s.a.createElement("strong",null,"CC")),s.a.createElement("div",{className:"col-md-11"},s.a.createElement(w.a,{multiple:!0,style:{width:"100%"},"data-select-search":"true"},s.a.createElement("option",{value:"sunny.orlaf@smartadmin.com"},"sunny.orlaf@smartadmin.com"),s.a.createElement("option",{value:"rachael.hawi@smartadmin.com"},"rachael.hawi@smartadmin.com"),s.a.createElement("option",{value:"michael.safiel@smartadmin.com"},"michael.safiel@smartadmin.com"),s.a.createElement("option",{value:"alex.jones@infowars.com"},"alex.jones@infowars.com"),s.a.createElement("option",{value:"oruf.matalla@gmail.com"},"oruf.matalla@gmail.com"),s.a.createElement("option",{value:"hr@smartadmin.com"},"hr@smartadmin.com"),s.a.createElement("option",{value:"IT@smartadmin.com"},"IT@smartadmin.com")),a)))):null,this.state.bcc?s.a.createElement("div",{className:"inbox-info-bar no-padding"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"control-label col-md-1"},s.a.createElement("strong",null,"BCC")),s.a.createElement("div",{className:"col-md-11"},s.a.createElement(w.a,{multiple:!0,style:{width:"100%"},"data-select-search":"true"},s.a.createElement("option",{value:"sunny.orlaf@smartadmin.com"},"sunny.orlaf@smartadmin.com"),s.a.createElement("option",{value:"rachael.hawi@smartadmin.com"},"rachael.hawi@smartadmin.com"),s.a.createElement("option",{value:"michael.safiel@smartadmin.com"},"michael.safiel@smartadmin.com"),s.a.createElement("option",{value:"alex.jones@infowars.com"},"alex.jones@infowars.com"),s.a.createElement("option",{value:"oruf.matalla@gmail.com"},"oruf.matalla@gmail.com"),s.a.createElement("option",{value:"hr@smartadmin.com"},"hr@smartadmin.com"),s.a.createElement("option",{value:"IT@smartadmin.com"},"IT@smartadmin.com")))))):null,s.a.createElement("div",{className:"inbox-info-bar no-padding"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"control-label col-md-1"},s.a.createElement("strong",null,"Subject")),s.a.createElement("div",{className:"col-md-11"},s.a.createElement("input",{className:"form-control",placeholder:"Email Subject",type:"text"}),s.a.createElement(i.a,{placement:"bottom",overlay:s.a.createElement(u.a,{id:"Attachments-tooltip"},"Attachments")},s.a.createElement("em",null,s.a.createElement("a",{href:"#/",className:"show-next",onClick:this.addAttachments},s.a.createElement("i",{className:"fa fa-paperclip fa-lg"})))))))),this.state.attachments?s.a.createElement("div",{className:"inbox-info-bar no-padding "},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"control-label col-md-1"},s.a.createElement("strong",null,"Attachments")),s.a.createElement("div",{className:"col-md-11"},s.a.createElement("input",{className:"form-control fileinput",type:"file",multiple:"multiple"}))))):null,s.a.createElement("div",{className:"inbox-message no-padding"},s.a.createElement(j.a,{id:"emailbody"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",null,"Thanks,"),s.a.createElement("br",null),s.a.createElement("strong",null,"John Doe"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"email-reply-text"},s.a.createElement("p",null,s.a.createElement("span",null,t.contact.name),s.a.createElement("span",{className:"text-primary"},s.a.createElement("span",null,"<"),s.a.createElement("span",null,t.contact.email),s.a.createElement("span",null,">")),s.a.createElement("span",null,"to me on")),s.a.createElement(N.b,{date:t.date,format:"LLLL"}),s.a.createElement(N.a,{html:t.body})))),s.a.createElement("div",{className:"inbox-compose-footer"},s.a.createElement("button",{className:"btn btn-danger",type:"button"},"Disregard"),s.a.createElement("button",{className:"btn btn-info",type:"button"},"Draft"),this.state.sending?s.a.createElement("button",{className:"btn btn-primary pull-right",type:"button"},s.a.createElement("i",{className:"fa fa-refresh fa-spin"})," Sending..."):s.a.createElement("button",{onClick:this.handleSubmit.bind(this),className:"btn btn-primary pull-right",type:"button"},"Send ",s.a.createElement("i",{className:"fa fa-arrow-circle-right fa-lg"})))),s.a.createElement("div",{className:"email-infobox"},s.a.createElement("div",{className:"well well-sm well-light"},s.a.createElement("h5",null,"Related Invoice"),s.a.createElement("ul",{className:"list-unstyled"},s.a.createElement("li",null,s.a.createElement("i",{className:"fa fa-file fa-fw text-success"}),s.a.createElement("a",{href:"#/"}," #4831 - Paid")),s.a.createElement("li",null,s.a.createElement("i",{className:"fa fa-file fa-fw text-danger"}),s.a.createElement("a",{href:"#/"},s.a.createElement("strong",null," #4835 - Unpaid"))))),s.a.createElement("div",{className:"well well-sm well-light"},s.a.createElement("h5",null,"Upcoming Meetings"),s.a.createElement("p",null,s.a.createElement("span",{className:"label label-success"},s.a.createElement("i",{className:"fa fa-check"})," ",s.a.createElement("strike",null,"Agenda Review @ 10 AM")," ")),s.a.createElement("p",null,s.a.createElement("span",{className:"label label-primary"},s.a.createElement("i",{className:"fa fa-clock-o"})," Client Meeting @ 2:30 PM")),s.a.createElement("p",null,s.a.createElement("span",{className:"label label-warning"},s.a.createElement("i",{className:"fa fa-clock-o"})," Salary Review @ 4:00 PM"))),s.a.createElement("ul",{className:"list-inline"},s.a.createElement("li",null,s.a.createElement("img",{src:"assets/img/avatars/5.png",alt:"me",width:"30px"})),s.a.createElement("li",null,s.a.createElement("img",{src:"assets/img/avatars/3.png",alt:"me",width:"30px"})),s.a.createElement("li",null,s.a.createElement("img",{src:"assets/img/avatars/sunny.png",alt:"me",width:"30px"})),s.a.createElement("li",null,s.a.createElement("a",{href:"#/"},"1 more"))))):null}}]),a}(s.a.Component);a.default=v(Object(g.b)(function(e){return e.outlook})(O))}}]);
//# sourceMappingURL=71.16560674.chunk.js.map