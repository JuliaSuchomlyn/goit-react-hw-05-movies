"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[695],{335:function(n,t,e){e.d(t,{Z:function(){return f}});var r,a,c,o,u=e(739),i=e(168),p=e(842),s=e(731),x=p.Z.h1(r||(r=(0,i.Z)(["\nfont-size: 30px;\nfont-weight: bold;\ncolor: rgba(2, 2, 2, 0.1);\nbackground: #666666;\n-webkit-background-clip: text;\n-moz-background-clip: text;\nbackground-clip: text;\ntext-shadow: 0px 3px 3px rgba(255,255,255,0.5);\n"]))),l=p.Z.ul(a||(a=(0,i.Z)(["\n"]))),g=p.Z.li(c||(c=(0,i.Z)(["\n    padding: 8px;\n"]))),d=(0,p.Z)(s.rU)(o||(o=(0,i.Z)(["\n    color: rgba(2, 2, 2, 0.1);\n    background: #666666;\n    -webkit-background-clip: text;\n    -moz-background-clip: text;\n    background-clip: text;\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\n    &:hover {\n        box-shadow: 0 1px 4px rgba(0, 0, 0, .3),\n            -23px 0 20px -23px rgba(0, 0, 0, .6),\n            23px 0 20px -23px rgba(0, 0, 0, .6),\n            inset 0 0 40px rgba(0, 0, 0, .1);\n    }\n"]))),b=e(184),f=function(n){var t=n.movies,e=n.titlePage,r=void 0===e?null:e,a=(0,u.TH)();return(0,b.jsxs)("div",{className:"container__element",children:[r&&(0,b.jsx)(x,{children:r}),(0,b.jsx)(l,{children:t.map((function(n){var t=n.id,e=n.title,r=n.name;return(0,b.jsx)(g,{children:(0,b.jsx)(d,{to:"/movies/".concat(t),state:{from:a},children:e||r})},t)}))})]})}},695:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r,a,c=e(885),o=e(791),u=e(731),i=e(690),p=e(335),s=e(917),x=e(168),l=e(842),g=l.Z.form(r||(r=(0,x.Z)(["\ndisplay: flex;\nalign-items: center;\npadding: 20px;\nfont-size: 20px;\nfont-weight: bold;\ncolor: rgba(2, 2, 2, 0.1);\nbackground: #666666;\n-webkit-background-clip: text;\n-moz-background-clip: text;\nbackground-clip: text;\ntext-shadow: 0px 3px 3px rgba(255,255,255,0.5);\n\nbutton{\n    margin: 0;\n    font-size: 20px;\n    font-weight: bold;\n    color: rgba(2, 2, 2, 0.1);\n    background: #666666;\n    -webkit-background-clip: text;\n    -moz-background-clip: text;\n    background-clip: text;\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\n\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover {\n        cursor: pointer;\n        box-shadow: 0 1px 4px rgba(0, 0, 0, .3),\n            -23px 0 20px -23px rgba(0, 0, 0, .6),\n            23px 0 20px -23px rgba(0, 0, 0, .6),\n            inset 0 0 40px rgba(0, 0, 0, .1);\n}\n}\n"]))),d=l.Z.label(a||(a=(0,x.Z)(["\nmargin-right: 4px;\ninput{    \n    font-size: 20px;\n    \n    color: rgba(2, 2, 2, 0.5);\n    background: #666666;\n    -webkit-background-clip: text;\n    -moz-background-clip: text;\n    background-clip: text;\n    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\n}"]))),b=e(184),f=function(){var n,t=(0,u.lr)(),e=(0,c.Z)(t,2),r=e[0],a=e[1],x=null!==(n=r.get("query"))&&void 0!==n?n:"",l=(0,o.useState)(null),f=(0,c.Z)(l,2),h=f[0],v=f[1],k=(0,o.useState)(null),m=(0,c.Z)(k,2),w=m[0],Z=m[1],y=(0,o.useState)(!1),_=(0,c.Z)(y,2),j=_[0],S=_[1],z=(0,o.useState)(x),C=(0,c.Z)(z,2),U=C[0],q=C[1];(0,o.useEffect)((function(){""!==x&&(v(null),Z(null),S(!0),i.GC(x).then((function(n){v(n.results),Z(n.total_results),S(!1)})).catch(console.log))}),[x]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(g,{onSubmit:function(n){n.preventDefault();var t=n.target.query.value.toLowerCase().trim();a({query:t})},children:[(0,b.jsx)(d,{children:(0,b.jsx)("input",{type:"text",name:"query",value:U,onChange:function(n){q(n.currentTarget.value)},placeholder:"Enter movie name"})}),(0,b.jsx)("button",{type:"submit",children:"Search"})]}),j&&(0,b.jsx)(s.Z,{}),h&&(0,b.jsx)(p.Z,{movies:h}),0===w&&(0,b.jsx)("div",{children:"Not found movies"})]})}},690:function(n,t,e){e.d(t,{GC:function(){return s},M1:function(){return l},Pg:function(){return x},rj:function(){return p},tx:function(){return g}});var r=e(861),a=e(687),c=e.n(a),o=e(44),u="c9dafc481df732c35045adfe40da767b",i="https://api.themoviedb.org/3/",p=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"trending/movie/day?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"search/movie?api_key=").concat(u,"&query=").concat(t,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=695.84f16b60.chunk.js.map