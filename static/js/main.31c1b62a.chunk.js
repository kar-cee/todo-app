(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{12:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var c=i(1),s=i.n(c),n=i(7),l=i.n(n),o=i(2),r=(i(12),i.p+"static/media/icon-sun.910b1f9a.svg"),a=i.p+"static/media/icon-moon.6c03114b.svg",d=i(0);function m(e){var t=Object(c.useState)(r),i=Object(o.a)(t,2),s=i[0],n=i[1];return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("header",{className:"header-title",children:"TODO"}),Object(d.jsx)("img",{src:s,alt:"light theme",className:"theme-icon",onClick:function(){e.settheme((function(e){return"dark"===e?"light":"dark"})),n((function(e){return e===r?a:r}))}})]})}var u=i(6);function j(e){var t=e.setlist,i=e.listItems,s=e.setfilteredList,n=Object(c.useState)(""),l=Object(o.a)(n,2),r=l[0],a=l[1];return Object(d.jsx)("div",{className:"input-box",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={id:0===i.length?0:i[i.length-1].id+1,text:r,completed:!1};r?(t([].concat(Object(u.a)(i),[c])),s([].concat(Object(u.a)(i),[c])),a("")):alert("list can not be empty!")},children:[Object(d.jsx)("input",{type:"text",placeholder:"Create a new todo",value:r,className:"create-todo",onChange:function(e){!function(e){a(e.target.value)}(e)}}),Object(d.jsx)("input",{type:"submit",value:""})]})})}var p=i.p+"static/media/icon-cross.6ee81d30.svg";function f(e){var t=e.listItems,i=e.setlist,c=e.filteredList,s=e.setfilteredList,n={textDecoration:"line-through",color:"rgb(75, 76, 77)"};var l=c.length?c.map((function(e){return Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{className:"list-item",children:[Object(d.jsx)("input",{type:"checkbox",name:"checkbox".concat(e.id),onChange:function(){!function(e){var c=t.map((function(t){return e===t.id&&(t.completed=!t.completed),t}));i(c)}(e.id)},checked:e.completed}),Object(d.jsx)("div",{className:"list-text",style:e.completed?n:{},children:e.text}),Object(d.jsx)("button",{className:"cross-btn",onClick:function(){!function(e){if(window.confirm("This task will be Deleted from your Todo-List")){var c=t.filter((function(t){return e!==t.id}));i(c),s(c)}}(e.id)},children:Object(d.jsx)("img",{src:p,alt:"Delete",className:"cross-icon"})})]}),Object(d.jsx)("div",{className:"bottom-line"})]},e.id)})):Object(d.jsx)("div",{className:"list-text",children:"Nathing to display"});return Object(d.jsx)("div",{className:"todolist",children:l})}function b(e){var t=e.listItems,i=e.setlist,c=e.filteredList,s=e.setfilteredList,n=function(e){var i=t.filter((function(e){return e.completed})),c=t.filter((function(e){return!e.completed}));s("all"===e?t:"active"===e?c:i)};return Object(d.jsxs)("div",{className:"list-footer",children:[Object(d.jsxs)("div",{className:"no-of-items",children:[c.length," items"]}),Object(d.jsxs)("div",{className:"list-type",children:[Object(d.jsx)("div",{className:"types all",onClick:function(){return n("all")},children:"All"}),Object(d.jsx)("div",{className:"types active",onClick:function(){return n("active")},children:"Active"}),Object(d.jsx)("div",{className:"types completed",onClick:function(){return n("complted")},children:"Completed"})]}),Object(d.jsx)("div",{className:"clear-completed",style:{cursor:"pointer"},onClick:function(){if(0!==t.filter((function(e){return e.completed})).length){if(window.confirm("Completed task will be deleted")){var e=t.filter((function(e){return!e.completed}));i(e),s(e)}}else alert("You don't have any completed list")},children:"Clear completed"})]})}var h=function(){var e=Object(c.useState)([{id:0,text:"Complete online JavaScript course",completed:!0},{id:1,text:"jog around the pard",completed:!1},{id:2,text:"10 minute meditation",completed:!1},{id:3,text:"read for 1 hour",completed:!1},{id:4,text:"Pick up groceries",completed:!1},{id:5,text:"Complete Todo App on FrontEnd Mentor",completed:!1}]),t=Object(o.a)(e,2),i=t[0],s=t[1],n=Object(c.useState)(i),l=Object(o.a)(n,2),r=l[0],a=l[1],u=Object(c.useState)("dark"),p=Object(o.a)(u,2),h=p[0],O=p[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(i))}),[i]),Object(d.jsxs)("div",{className:"dark"===h?"Todo-app":"Todo-app light",children:[Object(d.jsx)(m,{settheme:O}),Object(d.jsx)(j,{listItems:i,setlist:s,setfilteredList:a}),Object(d.jsx)(f,{listItems:i,setlist:s,filteredList:r,setfilteredList:a}),Object(d.jsx)(b,{listItems:i,setlist:s,filteredList:r,setfilteredList:a})]})};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.31c1b62a.chunk.js.map