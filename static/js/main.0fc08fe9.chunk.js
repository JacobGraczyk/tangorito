(this.webpackJsonptangorito=this.webpackJsonptangorito||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/logo.1cbdc711.svg"},,,function(e,a,t){e.exports=t.p+"static/media/meatballs.461f06c5.jpg"},function(e,a,t){e.exports=t.p+"static/media/breakfast-burritos.6d2ae696.jpg"},function(e,a,t){e.exports=t.p+"static/media/tacos.674915b0.jpg"},function(e,a,t){e.exports=t.p+"static/media/texas-steak.6a4c8503.jpg"},function(e,a,t){e.exports=t.p+"static/media/chili.ead9bf46.jpg"},function(e,a,t){e.exports=t.p+"static/media/nacho-chips.e10e0ec4.jpg"},function(e,a,t){e.exports=t.p+"static/media/white-queso.fcae86f9.jpg"},function(e,a,t){e.exports=t.p+"static/media/guacamole.cee51ad0.jpg"},function(e,a,t){e.exports=t.p+"static/media/chicken-salad.56da5d8b.jpg"},function(e,a,t){e.exports=t.p+"static/media/encheladas.226dc46d.jpg"},function(e,a,t){e.exports=t.p+"static/media/western-burger.62de0fe9.jpg"},function(e,a,t){e.exports=t.p+"static/media/chili-dog.a3641e78.jpg"},,,,function(e,a,t){e.exports=t(28)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(3),c=t.n(l),s=(t(27),t(4)),r=t.n(s);var m=function(){var e=i.a.createElement("img",{src:r.a,alt:"Tangorito Texas Salsa"});return i.a.createElement("header",null,i.a.createElement("div",{className:"promo"},"Save 10% this weekend with code: SAVE10"),i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"top-line"},i.a.createElement("div",{className:"info"},i.a.createElement("i",{className:"fas fa-pepper-hot"}),"Farm fresh ingredients sourced from Galveston, Texas"),i.a.createElement("div",{className:"account"},i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-gift"}),"Tasty Rewards"),i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-hat-cowboy"}),"Sign in or Register"),i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-heart"}),"Wishlist"))),i.a.createElement("div",{className:"bottom-line"},i.a.createElement("div",{className:"social"},i.a.createElement("i",{className:"fab fa-facebook-f"}),i.a.createElement("i",{className:"fab fa-twitter"}),i.a.createElement("i",{className:"fab fa-instagram"}),i.a.createElement("i",{className:"fab fa-pinterest-p"})),e,i.a.createElement("div",{className:"search"},i.a.createElement("i",{className:"fas fa-search"}),i.a.createElement("i",{className:"fas fa-shopping-cart"}),i.a.createElement("div",{className:"location"},i.a.createElement("i",{className:"fas fa-map-marker-alt"})," ",i.a.createElement("p",null,"Where to Buy")))),i.a.createElement("ul",null,i.a.createElement("li",null,"salsa"),i.a.createElement("li",null,"queso"),i.a.createElement("li",null,"tortilla chips"),i.a.createElement("li",null,"recipes"),i.a.createElement("li",null,"about"))))},o=t(5),u=t(6),f=t(1),d=t(21),p=t(20),h=t(7),g=t.n(h),E=t(8),v=t.n(E),b=t(9),N=t.n(b),k=t(10),O=t.n(k),C=t(11),j=t.n(C),x=t(12),y=t.n(x),B=t(13),S=t.n(B),w=t(14),T=t.n(w),F=t(15),R=t.n(F),q=t(16),A=t.n(q),W=t(17),G=t.n(W),I=t(18),J=t.n(I),L=[{id:1,img:g.a,title:"Meatballs",tags:["Beef","Onions","Bread Crumbs"]},{id:2,img:v.a,title:"Breakfast Burritos",tags:["Eggs","Cheese","Tortillas"]},{id:3,img:N.a,title:"Tacos",tags:["Beef","Cheese","Lettuce"]},{id:4,img:O.a,title:"Texas Steak",tags:["Beef","Limes","Avocados"]},{id:5,img:j.a,title:"Chili",tags:["Beef","Cheese","Beans"]},{id:6,img:y.a,title:"Nacho Chips",tags:["Tortillas","Cheese","Sour Cream"]},{id:7,img:S.a,title:"White Queso",tags:["Cheese","Tortillas","Peppers"]},{id:8,img:T.a,title:"Guacamole",tags:["Avocados","Onions","Tortillas"]},{id:9,img:R.a,title:"Chicken Salad",tags:["Chicken","Lettuce","Cheese"]},{id:10,img:A.a,title:"Encheladas",tags:["Chicken","Cheese","Sour Cream"]},{id:11,img:G.a,title:"Western Burger",tags:["Beef","Bread","Cheese"]},{id:12,img:J.a,title:"Chili Dogs",tags:["Pork","Bread","Onions"]}],z=t(19),D=L.map((function(e){return e.tags})).flat(),M={};D.forEach((function(e){M[e]=(M[e]||0)+1}));var P=Object(z.a)(new Set(D)).sort().map((function(e,a){return{id:a+100,tag:e,active:!1,num:M[e]}}));var V=function(e){return i.a.createElement("div",{className:"recipe-card"},i.a.createElement("div",{className:"recipe-img",style:{backgroundImage:"url("+e.recipe.img+")",backgroundSize:"cover"}},i.a.createElement("i",{className:"far fa-bookmark"})),i.a.createElement("h1",null,e.recipe.title),i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-tags"}),e.recipe.tags[0],", ",e.recipe.tags[1],", ",e.recipe.tags[2]))};var H=function(e){var a=e.filter.active?i.a.createElement("i",{className:"fas fa-check-square",onClick:function(a){return e.handleOff(e.filter.id)}}):i.a.createElement("i",{className:"far fa-square",onClick:function(a){return e.handleOn(e.filter.id)}});return i.a.createElement("div",{className:"filter"},a,i.a.createElement("p",null,e.filter.tag),i.a.createElement("span",null,"(",e.filter.num,")"))},Q=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={data:L,filters:P,activeFilters:[]},e.handleOn=e.handleOn.bind(Object(f.a)(e)),e.handleOff=e.handleOff.bind(Object(f.a)(e)),e.handleReset=e.handleReset.bind(Object(f.a)(e)),e}return Object(u.a)(t,[{key:"handleOn",value:function(e){var a;this.setState((function(t){return{filters:t.filters.map((function(t){return t.id===e&&!1===t.active&&(t.active=!0,a=[t.tag]),t})),activeFilters:t.activeFilters.concat(a)}}))}},{key:"handleOff",value:function(e){var a;this.setState((function(t){return{filters:t.filters.map((function(t){return t.id===e&&!0===t.active&&(t.active=!1,a=[t.tag]),t})),activeFilters:t.activeFilters.split(a)}}))}},{key:"handleReset",value:function(){this.setState((function(e){return{filters:e.filters.map((function(e){return!0===e.active&&(e.active=!1),e})),activeFilters:e.activeFilters.splice()}}))}},{key:"render",value:function(){var e=this,a=this.state.data.map((function(e){return i.a.createElement(V,{key:e.id,recipe:e})})),t=this.state.filters.map((function(a){return i.a.createElement(H,{key:a.id,filter:a,handleOn:e.handleOn,handleOff:e.handleOff})}));return console.log(this.state.activeFilters),i.a.createElement("section",null,i.a.createElement("div",{className:"main-top"},i.a.createElement("div",{className:"bread-crumbs"},"Home / ",i.a.createElement("strong",null,"Recipes")),i.a.createElement("div",{className:"main-top-right"},i.a.createElement("h1",null,"Recipes",i.a.createElement("span",null," - 12 Items")),i.a.createElement("p",null,"View: ",i.a.createElement("i",{className:"fas fa-th-large"}),i.a.createElement("i",{className:"fas fa-th"})))),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"filters"},i.a.createElement("div",{className:"filters-top"},i.a.createElement("h1",null,"filters"),i.a.createElement("h2",{onClick:this.handleReset},"Reset All")),t,i.a.createElement("div",{style:{background:"#e4d6b7",height:"1px",width:"100%",marginTop:"40px"}})),i.a.createElement("div",{className:"recipes"},a)))}}]),t}(n.Component);var K=function(){return i.a.createElement("footer",null,i.a.createElement("ul",null,i.a.createElement("li",null,"contact us"),i.a.createElement("li",null,"terms & conditions"),i.a.createElement("li",null,"privacy policy")),i.a.createElement("p",null,"Copyright \xa9 2020 | Designed by Jacob Graczyk"))};var U=function(){return i.a.createElement("div",null,i.a.createElement(m,null),i.a.createElement(Q,null),i.a.createElement(K,null))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(U,null)),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.0fc08fe9.chunk.js.map