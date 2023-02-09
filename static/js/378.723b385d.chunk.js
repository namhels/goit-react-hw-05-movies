"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[378],{1101:function(A,n,e){e.d(n,{Z:function(){return l}});var t,r=e(3970),o=e(168),i=e(6444),a=e(1087),c=(0,i.ZP)(a.rU)(t||(t=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ",";\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 300ms;\n  :hover {\n    transform: scale(1.05);\n  }\n"])),(function(A){return A.theme.colors.halloween[3]})),u=e(184),l=function(A){var n=A.movie,e=A.state,t=n.id,o=n.poster_path,i=n.title,a=n.release_date,l=o?"https://image.tmdb.org/t/p/w500".concat(o):r,s=new Date(a).getFullYear();return(0,u.jsxs)(c,{to:"/movies/".concat(t),state:e,children:[(0,u.jsx)("img",{src:l,alt:i,loading:"lazy"}),(0,u.jsxs)("p",{children:[i," | ",s]})]})}},1077:function(A,n,e){e.d(n,{e:function(){return c},s:function(){return a}});var t,r,o=e(168),i=e(6444),a=i.ZP.h2(t||(t=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: ","px;\n  padding-top: ","px;\n  color: ",";\n  transition: all 300ms;\n  :hover {\n    letter-spacing: 1.8px;\n  }\n"])),(function(A){return A.theme.space[4]}),(function(A){return A.theme.space[4]}),(function(A){return A.theme.colors.halloween[5]})),c=i.ZP.ul(r||(r=(0,o.Z)(["\n  display: grid;\n  padding-left: ","px;\n  padding-right: ","px;\n  grid-template-columns: repeat(4, 1fr);\n  gap: ","px;\n"])),(function(A){return A.theme.space[4]}),(function(A){return A.theme.space[4]}),(function(A){return A.theme.space[4]}))},6378:function(A,n,e){e.r(n),e.d(n,{default:function(){return F}});var t,r,o,i,a,c=e(5861),u=e(9439),l=e(7757),s=e.n(l),d=e(2791),p=e(1087),h=e(7689),f=e(7596),g=e(4650),m=e(1101),x=e(1077),w=e(4476),b=e(5705),E=e(2797),k=e(168),j=e(8185),v=e(6444),y=v.ZP.div(t||(t=(0,k.Z)(["\n  padding-left: ","px;\n  padding-right: ","px;\n"])),(function(A){return A.theme.space[4]}),(function(A){return A.theme.space[4]})),Z=(0,v.ZP)(b.l0)(r||(r=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  /* margin-left: auto;\n  margin-right: auto; */\n\n  background-color: #fff;\n  border-radius: ",";\n  overflow: hidden;\n  box-shadow: ",";\n  transition: all 300ms;\n  :hover {\n    border-color: ",";\n    box-shadow: ",";\n  }\n"])),(function(A){return A.theme.radii.medium}),(function(A){return A.theme.shadows.small}),(function(A){return A.theme.colors.blues[0]}),(function(A){return A.theme.shadows.mediumBlue})),B=v.ZP.button(o||(o=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 48px;\n  color: ",";\n  background-color: ",";\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  outline: none;\n"])),(function(A){return A.theme.colors.halloween[5]}),(function(A){return A.theme.colors.halloween[7]})),C=(0,v.ZP)(j.dVI)(i||(i=(0,k.Z)(["\n  width: 18px;\n  height: 18px;\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  border: 0;\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  ",":hover & {\n    color: ",";\n    transform: scale(1.3);\n  }\n"])),B,(function(A){return A.theme.colors.halloween[0]})),M=(0,v.ZP)(b.gN)(a||(a=(0,k.Z)(["\n  display: inline-block;\n  width: 100%;\n  color: ",";\n  font: inherit;\n  font-size: 22px;\n  border: none;\n  outline: none;\n  padding-left: 16px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 22px;\n    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  &:hover::placeholder {\n    color: ",";\n    letter-spacing: ","px;\n  }\n"])),(function(A){return A.theme.colors.halloween[5]}),(function(A){return A.theme.colors.halloween[0]}),(function(A){return A.theme.space[1]})),S=e(184),I=E.Ry({inputValue:E.Z_().required()}),Q={inputValue:""},P=function(A){var n=A.onSubmit,e=function(){var A=(0,c.Z)(s().mark((function A(e,t){var r,o;return s().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return r=e.inputValue,o=t.setSubmitting,A.next=4,n(r);case 4:o(!1);case 5:case"end":return A.stop()}}),A)})));return function(n,e){return A.apply(this,arguments)}}();return(0,S.jsx)(y,{children:(0,S.jsx)(b.J9,{initialValues:Q,validationSchema:I,onSubmit:e,children:function(A){var n=A.isSubmitting;return(0,S.jsxs)(Z,{children:[(0,S.jsx)(B,{type:"submit",disabled:n,children:(0,S.jsx)(C,{})}),(0,S.jsx)(M,{name:"inputValue",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})}})})},F=function(){var A,n=(0,d.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=(0,h.TH)(),i=(0,p.lr)(),a=(0,u.Z)(i,2),l=a[0],b=a[1],E=null!==(A=l.get("filter"))&&void 0!==A?A:"";(0,d.useEffect)((function(){var A=function(){var A=(0,c.Z)(s().mark((function A(){var n,e;return s().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:if(A.prev=0,E){A.next=3;break}return A.abrupt("return",null);case 3:return g.Z.query=E,A.next=6,g.Z.getMovieSearch();case 6:n=A.sent,e=n.results,r(e),A.next=14;break;case 11:A.prev=11,A.t0=A.catch(0),f.Am.error("Ouch! Something went wrong :( Reload the page and try again!");case 14:case"end":return A.stop()}}),A,null,[[0,11]])})));return function(){return A.apply(this,arguments)}}();A()}),[E]);return(0,S.jsxs)(w.Z,{p:4,bg:"grey.0",width:"100%",children:[(0,S.jsx)(P,{onSubmit:function(A){b(""!==A?{filter:A}:{})}}),t.length?(0,S.jsx)(x.s,{children:"Finding Movies"}):null,(0,S.jsx)(x.e,{children:t.map((function(A){return(0,S.jsx)(m.Z,{movie:A,state:{from:o}},A.id)}))})]})}},3970:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=378.723b385d.chunk.js.map