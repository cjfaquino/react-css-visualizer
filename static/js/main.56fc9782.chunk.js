(this["webpackJsonpreact-csshelper"]=this["webpackJsonpreact-csshelper"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(85),l=a.n(o),r=(a(94),a(10)),i=a(86),d=a(88);a(100),a(101);function s(e){return c.a.createElement("div",{className:"boxes"},c.a.createElement("div",{className:"box",style:e.bgStyle},c.a.createElement("div",{style:e.style},"Test"),c.a.createElement("div",{style:e.style},"Test"),c.a.createElement("div",{style:e.style},"Test")),c.a.createElement("div",{className:"box",style:e.bgStyle},c.a.createElement("div",{style:e.style},"Test"),c.a.createElement("div",{style:e.style},"Test"),c.a.createElement("div",{style:e.style},"Test")))}var u=a(87);var m=function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),o=a[0],l=a[1],i=e.color,d={color:{width:"100px",height:"20px",borderRadius:"2px",background:"rgba(".concat(i.r,", ").concat(i.g,", ").concat(i.b,", ").concat(i.a,")")},swatch:{marginTop:"10px",padding:".125em",background:"#ccc",borderRadius:"1px",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}};return c.a.createElement("div",{className:"colorPicker"},c.a.createElement("div",{style:d.swatch,onClick:function(){l(!o)}},c.a.createElement("div",{style:d.color})),o?c.a.createElement("div",{style:d.popover},c.a.createElement("div",{style:d.cover,onClick:function(){l(!1)}}),c.a.createElement(u.ChromePicker,{color:e.color,onChange:e.handleChange})):null)};function h(){var e=function(){var e=Object(n.useState)({width:void 0,height:void 0}),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){c({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}(),t=Object(n.useState)(!0),a=Object(r.a)(t,2),o=a[0],l=a[1],u=Object(n.useRef)(null),h=function(){return e=u,window.scrollTo(0,e.current.offsetTop);var e},v=Object(n.useState)({r:"116",g:"179",b:"233",a:"1"}),p=Object(r.a)(v,2),g=p[0],b=p[1],x=Object(n.useState)({r:"240",g:"240",b:"240",a:"1"}),E=Object(r.a)(x,2),w=E[0],f=E[1],S=Object(n.useState)({r:"255",g:"255",b:"255",a:"1"}),y=Object(r.a)(S,2),k=y[0],C=y[1],O=function(e,t,a,c,o,l){var i=Object(n.useState)(a),d=Object(r.a)(i,2),s=d[0],u=d[1];return{type:"range",id:o,label:c,min:e,max:t,unit:l,step:1,value:s,onChange:function(e){u(e.target.value)}}},B=O(0,15,2,"Margin Top","marginTop","em"),j=O(0,15,2,"Margin Right","marginRight","em"),T=O(0,15,2,"Margin Bottom","marginBottom","em"),R=O(0,15,2,"Margin Left","marginLeft","em"),N=O(0,15,2,"Padding Top","paddingTop","em"),P=O(0,15,2,"Padding Right","paddingRight","em"),z=O(0,15,2,"Padding Bottom","paddingBottom","em"),W=O(0,15,2,"Padding Left","paddingLeft","em"),X=O(0,50,0,"Border Radius","borderRadiusP","%"),Y=O(0,50,1,"Border Width","borderWidth","px"),L=O(0,1,1,"Opacity","opacity","");L.step=.01;var M=O(-50,50,5,"Shadow X","boxShadowX","px"),F=O(-50,50,5,"Shadow Y","boxShadowY","px"),I=O(0,50,0,"Shadow Blur","boxShadowBlur","px"),A=O(0,50,0,"Shadow Spread","boxShadowSpread","px"),H=O(-50,50,0,"Shadow X","textShadowX","px"),J=O(-50,50,0,"Shadow Y","textShadowY","px"),V=O(0,50,0,"Shadow Blur","textShadowBlur","px"),Z=O(-100,100,0,"Translate X","translateX","px"),$=O(-100,100,0,"Translate Y","translateY","px"),q=O(-1,1,0,"Rotate Z","rotateZ",""),D=O(-1,1,0,"Rotate X","rotateX",""),G=O(-1,1,0,"Rotate Y","rotateY",""),K=O(-180,180,180,"Rotate Angle","rotateA","deg");q.step=G.step=D.step=.01;var Q=O(0,500,100,"Height","height","px"),U=O(0,1500,100,"Width","width","px"),_=O(0,10,1,"Size","fontSize","em"),ee=O(100,900,900,"Weight","fontWeight","");_.step=.1,ee.step=100;var te=[B,j,T,R,N,P,z,W,X,Y,M,F,I,A,Z,$,D,G,q,K,Q,U,H,J,V,_,ee,L].map((function(e){return c.a.createElement("div",{key:e.id,className:"slider"},c.a.createElement("label",{htmlFor:e.id},e.label,": ",e.value,e.unit),c.a.createElement("div",null,c.a.createElement("input",Object.assign({},e,{name:e.id}))))})),ae=te.slice(0,4),ne=te.slice(4,8),ce=te.slice(8,10),oe=te.slice(10,14),le=te.slice(14,20),re=te.slice(20,22),ie=te.slice(22,25),de=te.slice(25,27),se=te.slice(27,28),ue={backgroundColor:"rgba(".concat(g.r,", ").concat(g.g,", ").concat(g.b,", ").concat(g.a,")"),margin:"".concat(B.value,"em ").concat(j.value,"em ").concat(T.value,"em ").concat(R.value,"em"),padding:"".concat(N.value,"em ").concat(P.value,"em ").concat(z.value,"em ").concat(W.value,"em"),borderRadius:"".concat(X.value,"%"),border:"".concat(Y.value,"px solid black"),boxShadow:"".concat(M.value,"px ").concat(F.value,"px ").concat(I.value,"px ").concat(A.value,"px black"),perspective:"550px",transform:"translate3d(".concat(Z.value,"px, ").concat($.value,"px, -9.7rem) rotate3d(").concat(D.value,", ").concat(G.value,", ").concat(q.value,", ").concat(K.value,"deg)"),height:"".concat(Q.value,"px"),width:"".concat(U.value,"px"),transition:"ease all 500ms",textShadow:"".concat(H.value,"px ").concat(J.value,"px ").concat(V.value,"px black"),fontSize:"".concat(_.value,"em"),fontWeight:"".concat(ee.value),opacity:"".concat(L.value),color:"rgba(".concat(k.r,", ").concat(k.g,", ").concat(k.b,", ").concat(k.a,")")},me={backgroundColor:"rgba(".concat(w.r,", ").concat(w.g,", ").concat(w.b,", ").concat(w.a,")")},he=c.a.createElement("div",{className:o&&e.width<=560?"sliders grid container menu hidden":"sliders grid container menu visible"},c.a.createElement("div",null,c.a.createElement("h3",null,"Box-size"),re,c.a.createElement("h3",null,"Font"),de),c.a.createElement("div",null,c.a.createElement("h3",null,"Margin"),ae),c.a.createElement("div",null,c.a.createElement("h3",null,"Padding"),ne),c.a.createElement("div",null,c.a.createElement("h3",null,"Border"),ce,c.a.createElement("h3",null,"Opacity"),se),c.a.createElement("div",null,c.a.createElement("h3",null,"Text-shadow"),ie),c.a.createElement("div",null,c.a.createElement("h3",null,"Box-shadow"),oe),c.a.createElement("div",null,c.a.createElement("h3",null,"Transform"),le),c.a.createElement("div",null,c.a.createElement("h3",{className:"colorPicker"},"Box Color"," ",c.a.createElement(m,{setColor:g,color:g,handleChange:function(e){b(e.rgb)}})),c.a.createElement("h3",{className:"colorPicker"},"Font Color"," ",c.a.createElement(m,{setColor:k,color:k,handleChange:function(e){C(e.rgb)}})),c.a.createElement("h3",{className:"colorPicker"},"Background Color"," ",c.a.createElement(m,{setColor:w,color:w,handleChange:function(e){f(e.rgb)}}))));return c.a.createElement("div",null,c.a.createElement("div",{className:"windowSizer container"},"ViewPort Size: (",e.width,"px) x (",e.height,"px)"),c.a.createElement("nav",{className:e.width<=560?"navbar":"hidden"},c.a.createElement("div",{className:"menuIcon",onClick:function(){l(!o),o&&h()}},c.a.createElement(i.a,{icon:d.a,className:"faBars"}))),c.a.createElement("h1",{ref:u},"CSS Visualizer"),(e.width>=560||!o)&&he,c.a.createElement(s,{style:ue,bgStyle:me}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,a){e.exports=a(265)},94:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.56fc9782.chunk.js.map