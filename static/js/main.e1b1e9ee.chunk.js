(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(20),r=a.n(i),c=(a(28),a(6)),l=a(7),s=a(9),m=a(8),d=a(10),p=a(13),u=a(11),h=(a(29),a(3)),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onChangeTodoDescription=a.onChangeTodoDescription.bind(Object(h.a)(Object(h.a)(a))),a.onChangeTodoResponsible=a.onChangeTodoResponsible.bind(Object(h.a)(Object(h.a)(a))),a.onChangeTodoPriority=a.onChangeTodoPriority.bind(Object(h.a)(Object(h.a)(a))),a.onSubmit=a.onSubmit.bind(Object(h.a)(Object(h.a)(a))),a.state={todo_description:"",todo_responsible:"",todo_priority:"",todo_completed:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onChangeTodoDescription",value:function(e){this.setState({todo_description:e.target.value})}},{key:"onChangeTodoResponsible",value:function(e){this.setState({todo_responsible:e.target.value})}},{key:"onChangeTodoPriority",value:function(e){this.setState({todo_priority:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("Form submitted:"),console.log("Todo Description: ".concat(this.state.todo_description)),console.log("Todo Responsible: ".concat(this.state.todo_responsible)),console.log("Todo Priority: ".concat(this.state.todo_priority)),this.setState({todo_description:"",todo_responsible:"",todo_priority:"",todo_completed:!1})}},{key:"render",value:function(){return n.a.createElement("div",{style:{marginTop:10}},n.a.createElement("h3",null,"Create New Todo"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Description: "),n.a.createElement("input",{type:"text",className:"form-control",value:this.state.todo_description,onChange:this.onChangeTodoDescription})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Responsible: "),n.a.createElement("input",{type:"text",className:"form-control",value:this.state.todo_responsible,onChange:this.onChangeTodoResponsible})),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityLow",value:"Low",checked:"Low"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),n.a.createElement("label",{className:"form-check-label"},"Low")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityMedium",value:"Medium",checked:"Medium"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),n.a.createElement("label",{className:"form-check-label"},"Medium")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityHigh",value:"High",checked:"High"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),n.a.createElement("label",{className:"form-check-label"},"High"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"submit",value:"Create Todo",className:"btn btn-primary"}))))}}]),t}(o.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("p",null,"Welcome to Edit Todo Component!!"))}}]),t}(o.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("p",null,"Welcome to Todos List Component!!"))}}]),t}(o.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement("div",{className:"container"},n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement(p.b,{to:"/",className:"navbar-brand"},"MERN-Stack Todo App"),n.a.createElement("div",{className:"collpase navbar-collapse"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"navbar-item"},n.a.createElement(p.b,{to:"/",className:"nav-link"},"Todos")),n.a.createElement("li",{className:"navbar-item"},n.a.createElement(p.b,{to:"/create",className:"nav-link"},"Create Todo"))))),n.a.createElement("br",null),n.a.createElement(u.a,{path:"/",exact:!0,component:g}),n.a.createElement(u.a,{path:"/edit/:id",component:v}),n.a.createElement(u.a,{path:"/create",component:b})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.e1b1e9ee.chunk.js.map