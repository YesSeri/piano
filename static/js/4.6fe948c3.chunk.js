(this.webpackJsonpa=this.webpackJsonpa||[]).push([[4],{32:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(4),a=n(3),i=n(1),o=n.n(i),s=n(30),u=n(17),d=function e(t,n,c,r){Object(u.a)(this,e),this.id=t,this.note=n,this.color=c,this.d=r},v=[new d("c2-small","C2","white","M10.848.265v31.75H1.323a1.056 1.056 0 01-1.058-1.059V.265h10.583z"),new d("d2-small","D2","white","M10.848.265h10.583v31.75H10.848z"),new d("e2-small","E2","white","M21.431.265h10.583v31.75H21.431z"),new d("f2-small","F2","white","M32.015.265h10.583v31.75H32.015z"),new d("g2-small","G2","white","M42.598.265h10.583v31.75H42.598z"),new d("a2-small","A2","white","M53.181.265h10.583v31.75H53.181z"),new d("b2-small","B2","white","M63.765.265h10.583v31.75H63.765z"),new d("c3-small","C3","white","M74.348.265v31.75h9.525c.586 0 1.058-.472 1.058-1.059V.265H74.348z"),new d("cs2-small","C#2","black","M15.081.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z"),new d("ds2-small","D#2","black","M25.665.265v16.8c0 .547-.472.988-1.059.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z"),new d("fs2-small","F#2","black","M46.831.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z"),new d("gs2-small","G#2","black","M57.415.265v16.8c0 .547-.472.988-1.059.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z"),new d("as2-small","A#2","black","M67.998.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.587 0-1.059-.44-1.059-.988V.265z")],l={q:"C2",w:"D2",e:"E2",r:"F2",t:"G2",y:"A2",u:"B2",i:"C3",2:"C#2",3:"D#2",5:"F#2",6:"G#2",7:"A#2"},h=n(19),w=function(e,t){var n=Object(i.useState)([]),c=Object(r.a)(n,2)[1],a=o.a.useRef([]),s=o.a.useRef([]);return Object(i.useEffect)((function(){var n=function(n){var r=n.key,i=n.repeat,o=t[r];!o||i||a.current.includes(o)||(a.current=[].concat(Object(h.a)(a.current),[o]),c(a.current),e.triggerAttack(o))},r=function(n){var r=n.key,i=t[r];a.current=a.current.filter((function(e){return e!==i})),c(a.current),e.triggerRelease(i)};return window.addEventListener("keydown",n),window.addEventListener("keyup",r),function(){window.removeEventListener("keydown",n),window.removeEventListener("keyup",r)}}),[e,t]),Object(i.useEffect)((function(){function t(e,t){return{note:t,identifier:e.identifier}}var n=function(n){n.preventDefault();var r=n.target.dataset.note,a=t(n.changedTouches[0],r);s.current=[].concat(Object(h.a)(s.current),[a]),c(s.current),e.triggerAttack(r)},r=function(n){s.current.length>0&&n.preventDefault(),n.preventDefault();var r=n.changedTouches[0],i=a(r);if(void 0!==i){var o=t(r,i.note);console.log(o),s.current=s.current.filter((function(e){return e.note!==o.note})),c.apply(void 0,Object(h.a)(s.current)),e.triggerRelease(o.note)}},a=function(e){var t,n=function(e){return{x:e.clientX,y:e.clientY}}(e),c=n.x,r=n.y;return null===(t=document.elementFromPoint(c,r))||void 0===t?void 0:t.dataset},i=function(n){n.preventDefault();var r=n.changedTouches[0],i=a(r);if(void 0!==i){var o=t(r,i.note),u=s.current.find((function(e){return e.identifier===o.identifier}))||{note:void 0,identifier:o.identifier};o.note!==u.note&&(console.log("note",o,"prev",u),s.current=s.current.filter((function(e){return e.note!==u.note})),s.current=[].concat(Object(h.a)(s.current),[o]),null!=o.note&&e.triggerAttack(o.note),null!=u.note&&e.triggerRelease(u.note),c(s.current))}},o=document.getElementsByClassName("piano")[0];return o.addEventListener("touchstart",n,{passive:!1}),document.addEventListener("touchend",r),document.addEventListener("touchmove",i,{passive:!1}),function(){o.removeEventListener("touchstart",n,{passive:!1}),document.removeEventListener("touchend",r),document.removeEventListener("touchmove",i,{passive:!1})}}),[e]),[].concat(Object(h.a)(s.current.map((function(e){return e.note}))),Object(h.a)(a.current))},f=n(0),g=function(e){var t=e.sampler,n=Object(i.useState)(""),c=Object(r.a)(n,2),a=c[0],o=c[1],s=w(t,l);return Object(i.useEffect)((function(){var e=function(){t.triggerRelease(a)},n=function(e){var n=e.target.dataset.note;n&&(o(n),t.triggerAttack(n))};return window.addEventListener("mousedown",n),window.addEventListener("mouseup",e),function(){window.removeEventListener("mousedown",n),window.removeEventListener("mouseup",e)}}),[t,a]),Object(f.jsx)("div",{className:"piano piano-small",children:Object(f.jsx)("svg",{id:"piano-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 85.196 32.279",preserveAspectRatio:"none",children:v.map((function(e){return function(e,t,n,c){return Object(f.jsx)("path",{"data-note":t,onContextMenu:function(e){return e.preventDefault()},className:"".concat(n,"-key piano-key ").concat(s.includes(t)?"active":""),d:c},e)}(e.id,e.note,e.color,e.d)}))})})},m=n.p+"static/media/1.g3.8f81a3b9.ogg",b=n.p+"static/media/3.a3.9c12f360.ogg",p=n.p+"static/media/6.c4.2377fed6.ogg",j=n.p+"static/media/9.ds4.fc86c751.ogg",O=n.p+"static/media/12.fs4.d9071cbe.ogg",M=n.p+"static/media/15.a4.1f51ad50.ogg",z=n.p+"static/media/18.c5.350a2ba1.ogg",k=n.p+"static/media/21.ds5.929d4e7b.ogg",E=function e(t,n,c,r){Object(u.a)(this,e),this.id=t,this.note=n,this.color=c,this.d=r},A={c:"G1",v:"A1",b:"B1",q:"C2",w:"D2",e:"E2",r:"F2",t:"G2",y:"A2",u:"B2",i:"C3",o:"D3",f:"G#1",g:"A#1",2:"C#2",3:"D#2",5:"F#2",6:"G#2",7:"A#2"},x=[["g1","G1","white","M10.848.265v31.75H1.323c-.794 0-1.058-.265-1.058-1.059V.265z"],["a1","A1","white","M10.848.265h10.583v31.75H10.848z"],["b1","B1","white","M21.431.265h10.583v31.75H21.431z"],["c2","C2","white","M32.015.265h10.583v31.75H32.015z"],["d2","D2","white","M42.598.265h10.583v31.75H42.598z"],["e2","E2","white","M53.181.265h10.583v31.75H53.181z"],["f2","F2","white","M63.765.265h10.583v31.75H63.765z"],["g2","G2","white","M74.348.265h10.583v31.75H74.348z"],["a2","A2","white","M84.931.265h10.583v31.75H84.931z"],["b2","B2","white","M95.515.265h10.583v31.75H95.515z"],["c3","C3","white","M106.098.265h10.583v31.75h-10.583z"],["d3","D3","white","M116.681.265v31.75h9.525c.794 0 1.059-.265 1.059-1.059V.265z"],["gs1","G#1","black","M15.081.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z"],["as1","A#1","black","M25.665.265v16.8c0 .547-.472.988-1.059.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z"],["cs2","C#2","black","M46.831.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z"],["ds2","D#2","black","M57.415.265v16.8c0 .547-.472.988-1.059.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z"],["fs2","F#2","black","M78.581.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z"],["gs2","G#2","black","M89.165.265v16.8c0 .547-.472.988-1.059.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z"],["as2","A#2","black","M99.748.265v16.8c0 .547-.472.988-1.058.988h-6.35c-.587 0-1.059-.44-1.059-.988V.265z"],["cs3","C#3","black","M120.915.265v16.8c0 .547-.472.988-1.059.988h-6.35c-.586 0-1.058-.44-1.058-.988V.265z"]],H=x.map((function(e){return new E(e[0],e[1],e[2],e[3])})),C=function(e){var t=e.sampler,n=Object(i.useState)(""),c=Object(r.a)(n,2),a=c[0],o=c[1],s=w(t,A);return Object(i.useEffect)((function(){var e=function(){t.triggerRelease(a)},n=function(e){var n=e.target.dataset.note;n&&(o(n),t.triggerAttack(n))};return window.addEventListener("mousedown",n),window.addEventListener("mouseup",e),function(){window.removeEventListener("mousedown",n),window.removeEventListener("mouseup",e)}}),[t,a]),Object(f.jsx)("div",{className:"piano piano-large",children:Object(f.jsx)("svg",{id:"piano-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 127.529 32.279",preserveAspectRatio:"none",children:H.map((function(e){return function(e,t,n,c){return Object(f.jsx)("path",{"data-note":t,onContextMenu:function(e){return e.preventDefault()},className:"".concat(n,"-key piano-key ").concat(s.includes(t)?"active":""),d:c},e)}(e.id,e.note,e.color,e.d)}))})})},D=n(31),L=new s.a(m),V=new s.a(b),y=new s.a(p),G=new s.a(j),F=new s.a(O),B=new s.a(M),R=new s.a(z),N=new s.a(k);t.default=function(e){var t=e.largePiano,n=(e.octaveHigher,e.children,Object(a.a)(e,["largePiano","octaveHigher","children"])),o=Object(i.useState)(!1),u=Object(r.a)(o,2),d=u[0],v=u[1],l=Object(D.b)(),h=new s.b({urls:{G1:L,A1:V,C2:y,"D#2":G,"F#2":F,A2:B,C3:R,"D#3":N},baseUrl:"../../assets/audio",release:1,onload:function(){v(!0)}}).toDestination(),w=function(){return d?t?Object(f.jsx)(C,{sampler:h}):Object(f.jsx)(g,{sampler:h}):null};return Object(f.jsxs)("div",Object(c.a)(Object(c.a)({className:"piano-container"},n),{},{children:[Object(f.jsx)(D.a,{handle:l,children:Object(f.jsx)(w,{})}),Object(f.jsx)("button",{id:"fullscreen-btn",onClick:function(){l.enter()},children:"Enter fullscreen"})]}))}}}]);
//# sourceMappingURL=4.6fe948c3.chunk.js.map