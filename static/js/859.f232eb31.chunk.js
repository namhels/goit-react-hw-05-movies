"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[859],{1101:function(A,n,e){e.d(n,{Z:function(){return s}});var t,r=e(3970),a=e(168),o=e(6444),c=e(1087),i=(0,o.ZP)(c.rU)(t||(t=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ",";\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 300ms;\n  :hover {\n    transform: scale(1.05);\n  }\n"])),(function(A){return A.theme.colors.halloween[3]})),u=e(184),s=function(A){var n=A.movie,e=A.state,t=n.id,a=n.poster_path,o=n.title,c=n.release_date,s=a?"https://image.tmdb.org/t/p/w500".concat(a):r,l=new Date(c).getFullYear();return(0,u.jsxs)(i,{to:"/movies/".concat(t),state:e,children:[(0,u.jsx)("img",{src:s,alt:o,loading:"lazy"}),(0,u.jsxs)("p",{children:[o," | ",l]})]})}},1077:function(A,n,e){e.d(n,{e:function(){return i},s:function(){return c}});var t,r,a=e(168),o=e(6444),c=o.ZP.h2(t||(t=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: ","px;\n  padding-top: ","px;\n  color: ",";\n  transition: all 300ms;\n  :hover {\n    letter-spacing: 1.8px;\n  }\n"])),(function(A){return A.theme.space[4]}),(function(A){return A.theme.space[4]}),(function(A){return A.theme.colors.halloween[5]})),i=o.ZP.ul(r||(r=(0,a.Z)(["\n  display: grid;\n  padding-left: ","px;\n  padding-right: ","px;\n  grid-template-columns: repeat(4, 1fr);\n  gap: ","px;\n"])),(function(A){return A.theme.space[4]}),(function(A){return A.theme.space[4]}),(function(A){return A.theme.space[4]}))},4859:function(A,n,e){e.r(n),e.d(n,{default:function(){return x}});var t=e(5861),r=e(9439),a=e(7757),o=e.n(a),c=e(2791),i=e(7689),u=e(7596),s=e(4650),l=e(1101),g=e(1077),p=e(4476),d=e(184),x=function(){var A=(0,c.useState)([]),n=(0,r.Z)(A,2),e=n[0],a=n[1],x=(0,i.TH)(),E=function(){var A=(0,t.Z)(o().mark((function A(){var n,e;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,s.Z.getTrendingMovies();case 3:n=A.sent,e=n.results,a(e),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),u.Am.error("Ouch! Something went wrong :( Reload the page and try again!");case 11:case"end":return A.stop()}}),A,null,[[0,8]])})));return function(){return A.apply(this,arguments)}}();return(0,c.useEffect)((function(){E()}),[]),(0,d.jsxs)(p.Z,{px:4,pb:4,bg:"grey.0",width:"100%",children:[e.length?(0,d.jsx)(g.s,{children:"Trending Movies"}):null,(0,d.jsx)(g.e,{children:e.map((function(A){return(0,d.jsx)(l.Z,{movie:A,state:{from:x}},A.id)}))})]})}},3970:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=859.f232eb31.chunk.js.map