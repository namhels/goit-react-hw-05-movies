"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[378],{1101:function(A,n,e){e.d(n,{Z:function(){return u}});var t,r=e(3970),o=e(168),i=e(6444),a=e(1087),c=(0,i.ZP)(a.rU)(t||(t=(0,o.Z)(["\n  color: ",";\n  cursor: pointer;\n  transition: all 300ms;\n  :hover {\n    transform: scale(1.05);\n  }\n"])),(function(A){return A.theme.colors.halloween[5]})),l=e(184),u=function(A){var n=A.movie,e=n.id,t=n.poster_path,o=n.title,i=n.release_date,a=t?"https://image.tmdb.org/t/p/w500".concat(t):r,u=new Date(i).getFullYear();return console.log(n),(0,l.jsxs)(c,{to:e,children:[(0,l.jsx)("img",{src:a,alt:o,loading:"lazy"}),(0,l.jsxs)("p",{children:[o," | ",u]})]})}},1077:function(A,n,e){e.d(n,{e:function(){return c},s:function(){return a}});var t,r,o=e(168),i=e(6444),a=i.ZP.h2(t||(t=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: ","px;\n  color: ",";\n  transition: all 300ms;\n  :hover {\n    letter-spacing: 1.8px;\n  }\n"])),(function(A){return A.theme.space[4]}),(function(A){return A.theme.colors.halloween[5]})),c=i.ZP.ul(r||(r=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: ","px;\n"])),(function(A){return A.theme.space[4]}))},6378:function(A,n,e){e.r(n),e.d(n,{default:function(){return F}});var t,r,o,i,a,c=e(5861),l=e(9439),u=e(7757),s=e.n(u),p=e(2791),d=e(1087),x=e(7689),h=e(7596),f=e(4650),g=e(1101),m=e(1077),w=e(4476),b=e(5705),E=e(2797),k=e(168),y=e(8185),j=e(6444),Z=j.ZP.header(t||(t=(0,k.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: ",";\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])),(function(A){return A.theme.colors.halloween[0]})),v=(0,j.ZP)(b.l0)(r||(r=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: ",";\n  overflow: hidden;\n"])),(function(A){return A.theme.radii.medium})),B=j.ZP.button(o||(o=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 48px;\n  color: ",";\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  outline: none;\n"])),(function(A){return A.theme.colors.halloween[5]})),C=(0,j.ZP)(y.dVI)(i||(i=(0,k.Z)(["\n  /* position: absolute; */\n  width: 18px;\n  height: 18px;\n  padding: 0;\n  overflow: hidden;\n  /* clip: rect(0, 0, 0, 0); */\n  white-space: nowrap;\n  /* clip-path: inset(50%); */\n  border: 0;\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  ",":hover & {\n    color: ",";\n    transform: scale(1.3);\n  }\n"])),B,(function(A){return A.theme.colors.halloween[0]})),M=(0,j.ZP)(b.gN)(a||(a=(0,k.Z)(["\n  display: inline-block;\n  width: 100%;\n  color: ",";\n  font: inherit;\n  font-size: 22px;\n  border: none;\n  outline: none;\n  padding-left: 16px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 22px;\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  &:hover::placeholder {\n    color: ",";\n    letter-spacing: ","px;\n  }\n"])),(function(A){return A.theme.colors.halloween[5]}),(function(A){return A.theme.colors.halloween[0]}),(function(A){return A.theme.space[1]})),S=e(184),I=E.Ry({inputValue:E.Z_().required()}),Q={inputValue:""},P=function(A){var n=A.onSubmit,e=function(){var A=(0,c.Z)(s().mark((function A(e,t){var r,o;return s().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return r=e.inputValue,o=t.setSubmitting,A.next=4,n(r);case 4:o(!1);case 5:case"end":return A.stop()}}),A)})));return function(n,e){return A.apply(this,arguments)}}();return(0,S.jsx)(Z,{children:(0,S.jsx)(b.J9,{initialValues:Q,validationSchema:I,onSubmit:e,children:function(A){var n=A.isSubmitting;return(0,S.jsxs)(v,{children:[(0,S.jsx)(B,{type:"submit",disabled:n,children:(0,S.jsx)(C,{})}),(0,S.jsx)(M,{name:"inputValue",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})}})})},F=function(){var A,n=(0,p.useState)([]),e=(0,l.Z)(n,2),t=e[0],r=e[1],o=(0,x.TH)(),i=(0,d.lr)(),a=(0,l.Z)(i,2),u=a[0],b=a[1],E=null!==(A=u.get("filter"))&&void 0!==A?A:"";(0,p.useEffect)((function(){var A=function(){var A=(0,c.Z)(s().mark((function A(){var n,e;return s().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:if(A.prev=0,E){A.next=3;break}return A.abrupt("return",null);case 3:return f.Z.query=E,A.next=6,f.Z.getMovieSearch();case 6:n=A.sent,e=n.results,r(e),A.next=14;break;case 11:A.prev=11,A.t0=A.catch(0),h.Am.error("Ouch! Something went wrong :( Reload the page and try again!");case 14:case"end":return A.stop()}}),A,null,[[0,11]])})));return function(){return A.apply(this,arguments)}}();A()}),[E]);return(0,S.jsxs)(w.Z,{p:4,bg:"grey.0",children:[(0,S.jsx)(P,{onSubmit:function(A){b(""!==A?{filter:A}:{})}}),(0,S.jsx)(m.s,{children:"Finding Movies"}),(0,S.jsx)(m.e,{children:t.map((function(A){return(0,S.jsx)(g.Z,{movie:A,state:{from:o}},A.id)}))})]})}},3970:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=378.dfd1d8ec.chunk.js.map