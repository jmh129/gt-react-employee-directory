(this["webpackJsonpgt-react-employee-directory"]=this["webpackJsonpgt-react-employee-directory"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(21),c=a.n(l),o=a(23),s=a(59),u=a(9),i=a(113),m=a(114),p=a(115),d=a(116),E=a(117),b=a(118),g=a(119),h=a(123),f=a(122),v=a(124),y=a(120),O=a(121),w=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement(i.a,{color:"light",light:!0,expand:"md"},r.a.createElement(m.a,{href:"/"},"reactstrap"),r.a.createElement(p.a,{onClick:function(){return c(!l)}}),r.a.createElement(d.a,{isOpen:l,navbar:!0},r.a.createElement(E.a,{className:"mr-auto",navbar:!0},r.a.createElement(b.a,null,r.a.createElement(g.a,{href:"/components/"},"Components")),r.a.createElement(b.a,null,r.a.createElement(g.a,{href:"https://github.com/reactstrap/reactstrap"},"GitHub")),r.a.createElement(h.a,{nav:!0,inNavbar:!0},r.a.createElement(f.a,{nav:!0,caret:!0},"Options"),r.a.createElement(v.a,{right:!0},r.a.createElement(y.a,null,"Option 1"),r.a.createElement(y.a,null,"Option 2"),r.a.createElement(y.a,{divider:!0}),r.a.createElement(y.a,null,"Reset")))),r.a.createElement(O.a,null,"Simple Text"))))},j=(a(88),a(57)),k=a.n(j),x=function(){return k.a.get("https://randomuser.me/api/")},H=a(58);var P=function(e){var t=r.a.useMemo((function(){return e.employees}),[]),a=r.a.useMemo((function(){return[{Header:"Image",accessor:"picture.thumbnail"},{Header:"Name",accessor:"name",Cell:function(e){return r.a.createElement("span",null,e.first," ",e.last)}},{Header:"Email",accessor:"email"}]}),[]),n=Object(H.useTable)({columns:a,data:t}),l=n.getTableProps,c=n.getTableBodyProps,o=n.headerGroups,s=n.rows,u=n.prepareRow;return r.a.createElement("table",Object.assign({},l(),{style:{border:"solid 1px blue"}}),r.a.createElement("thead",null,o.map((function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement("th",Object.assign({},e.getHeaderProps(),{style:{borderBottom:"solid 3px red",background:"aliceblue",color:"black",fontWeight:"bold"}}),e.render("Header"))})))}))),r.a.createElement("tbody",c(),s.map((function(e){return u(e),r.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return r.a.createElement("td",Object.assign({},e.getCellProps(),{style:{padding:"10px",border:"solid 1px gray",background:"papayawhip"}}),e.render("Cell"))})))}))))};var C=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){x().then((function(e){console.log(e),l(e.data.results)}))}),[]),r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(u.a,{exact:!0,path:"/",render:function(){return r.a.createElement(P,{employees:a})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,a){e.exports=a(111)}},[[61,1,2]]]);
//# sourceMappingURL=main.94b49c5c.chunk.js.map