(this["webpackJsonpsimple-todo-list"]=this["webpackJsonpsimple-todo-list"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),a=n(8),s=n.n(a),r=(n(13),n(14),n(4)),l=n(5),o=n(2),d=n(7),h=n(6),u=n(0),j=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={text:"",items:[{text:"Hello",id:Date.now()},{text:"World",id:Date.now()}]},i.handleChange=i.handleChange.bind(Object(o.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(o.a)(i)),i.clearTodoList=i.clearTodoList.bind(Object(o.a)(i)),i}return Object(l.a)(n,[{key:"handleChange",value:function(t){this.setState({text:t.target.value})}},{key:"handleSubmit",value:function(t){if(t.preventDefault(),0!==this.state.text.length){var e={text:this.state.text,id:Date.now()};this.setState((function(t){return{items:t.items.concat(e),text:""}}))}}},{key:"clearTodoList",value:function(t){t.preventDefault(),this.setState({items:[]})}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"TODO APP"}),Object(u.jsx)("div",{children:Object(u.jsx)(b,{item:this.state.items})}),Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)("label",{htmlFor:"id",children:"Input Action:"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{id:"id",onChange:this.handleChange,value:this.state.text}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{children:"Add"}),"  ",Object(u.jsx)("button",{onClick:this.clearTodoList,children:"Clear"})]})]})}}]),n}(i.Component),b=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)("ul",{children:this.props.item.map((function(t){return Object(u.jsx)("li",{children:t.text},t.id)}))})}}]),n}(c.a.Component),O=j;var x=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)(O,{})})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),i(t),c(t),a(t),s(t)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.871c2af8.chunk.js.map