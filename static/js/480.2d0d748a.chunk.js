"use strict";(self.webpackChunkflow_front=self.webpackChunkflow_front||[]).push([[480],{480:function(n,t,e){e.r(t),e.d(t,{default:function(){return B}});var r,o,c,s,i,a,u,l,d,p,f,x,h=e(165),Z=e(861),g=e(152),m=e(658),b=e(168),w=e(104),j=w.Z.div(r||(r=(0,b.Z)(["\n    width: 100%;\n    display: grid;\n    grid-template-rows: repeat(1, 1fr);\n    grid-template-columns: repeat(3, 1fr);\n"]))),v=w.Z.div(o||(o=(0,b.Z)(["\n    margin-top: 30%;\n"]))),y=w.Z.table(c||(c=(0,b.Z)(["\n    width: 100%\n"]))),k=w.Z.tr(s||(s=(0,b.Z)(["\n    display: flex;\n    gap: 10px;\n"]))),S=w.Z.tr(i||(i=(0,b.Z)(["\n    display: flex;\n    gap: 10px;\n    margin-top: 20px;\n"]))),I=w.Z.td(a||(a=(0,b.Z)(["\n    margin-top: 3%;\n"]))),C=w.Z.input(u||(u=(0,b.Z)(["\n    width: 50%;\n    border-radius: 7px;\n    border: 1px solid #bbb;\n    margin: 10px 0;\n    padding: 10px 12px;\n    height: 5px;\n"]))),L=w.Z.input(l||(l=(0,b.Z)(["\n    width: 25%;\n    border-radius: 7px;\n    border: 1px solid #bbb;\n    margin-top: 0px;\n    margin: 10px 10px;\n    height: 25px;\n"]))),F=e(791),N=function(n){var t=(0,F.useState)(n),e=(0,g.Z)(t,2),r=e[0],o=e[1];return[r,(0,F.useCallback)((function(n){o(n.target.value)}),[]),o]},E=e(512),J=e(184),O=function(n){var t=(0,m.fv)((function(){return{lab:n.label}})),e=(0,F.useState)("true"===window.localStorage.getItem("".concat(t.lab))),r=(0,g.Z)(e,2),o=r[0],c=r[1],s=(0,F.useState)("yet"),i=(0,g.Z)(s,2),a=i[0],u=i[1],l=function(n){!0===n.target.checked?(c(!0),u("add")):!1===n.target.checked&&(c(!1),u("delete"))};(0,F.useEffect)((function(){"add"===a?d().then((function(n){return console.log(n)})).catch((function(n){return console.error(n)})):"delete"===a&&(p().then((function(n){return console.log(n)})).catch((function(n){return console.error(n)})),u("yet"))}),[o]);var d=function(){var n=(0,Z.Z)((0,h.Z)().mark((function n(){return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.Z.post("http://192.168.35.165:8080/room/2",{extensionName:t.lab,type:"fixed"}).then((function(n){console.log("successfully added"),window.localStorage.setItem("".concat(t.lab),"true")}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,Z.Z)((0,h.Z)().mark((function n(){return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.Z.delete("http://192.168.35.165:8080/room/2/extension/".concat(t.lab)).then((function(n){console.log("successfully deleted"),window.localStorage.setItem("".concat(t.lab),"false")}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,m.SZ)((function(){return(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(J.Fragment,{children:[" ",(0,J.jsx)("input",{type:"checkbox",checked:o,onChange:l,value:t.lab})," ",(0,J.jsx)("label",{children:t.lab}),"\xa0\xa0"]})})}))},_=w.Z.div(d||(d=(0,b.Z)(["\n    height: 270px;\n    width: 350px;\n    border-radius: 7px;\n    border: 1px solid #bbb;\n    margin-left: 25%;\n    overflow:scroll;\n"]))),A=w.Z.div(p||(p=(0,b.Z)(["\n    display: flex;\n    flex-wrap: wrap; \n    gap: 10px;\n"]))),P=w.Z.button(f||(f=(0,b.Z)(["\n    background-color: white;\n    border-radius: 7px;\n    border:none;\n"]))),q=w.Z.div(x||(x=(0,b.Z)(["\n    border-radius: 7px;\n    border: 2px solid #bbb;\n    width: flex;\n"]))),z=function(){var n=(0,F.useState)(!1),t=(0,g.Z)(n,2),e=t[0],r=t[1],o=(0,F.useCallback)(function(){var n=(0,Z.Z)((0,h.Z)().mark((function n(t){return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("call delete API"),console.log("name = ",t),n.next=4,E.Z.delete("http://192.168.35.165:8080/room/2/extension/".concat(t)).then((function(n){r(!0),c()}));case 4:r(!1);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),[]),c=function(){var n=(0,Z.Z)((0,h.Z)().mark((function n(){return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.Z.get("http://192.168.35.165:8080/room/2").then((function(n){window.localStorage.setItem("customList",JSON.stringify(n.data))})).catch((function(n){console.log(n)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){for(var n=[],t=a(),e=function(e){n.push((0,J.jsxs)(q,{children:[(0,J.jsx)("span",{children:t.extensionList[e].name}),"\xa0",(0,J.jsx)(P,{type:"button",onClick:function(){return o(t.extensionList[e].name)},children:"\u2715"})]},e))},r=0;r<i();r++)e(r);return n};function i(){return a().extensionList.length}function a(){var n=window.localStorage.getItem("customList");return JSON.parse(n)}return(0,F.useEffect)((function(){window.localStorage.getItem("customList")&&s()}),[e]),(0,m.SZ)((function(){return(0,J.jsxs)(J.Fragment,{children:[window.localStorage.getItem("customList")&&(0,J.jsxs)(_,{children:[(0,J.jsxs)(J.Fragment,{children:[i(),"/200"]})," ",(0,J.jsx)("br",{}),(0,J.jsx)(A,{children:s()})]}),!window.localStorage.getItem("customList")&&(0,J.jsxs)(_,{children:[(0,J.jsx)(J.Fragment,{children:"0/200"})," ",(0,J.jsx)("br",{}),(0,J.jsx)(A,{})]})]})}))},B=function(){var n=["bat","cmd","com","cpl","exe","scr","js"],t=N(""),e=(0,g.Z)(t,2),r=e[0],o=e[1],c=(0,F.useState)(!1),s=(0,g.Z)(c,2),i=s[0],a=s[1],u=(0,F.useCallback)(function(){var n=(0,Z.Z)((0,h.Z)().mark((function n(t){return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.Z.post("http://192.168.35.165:8080/room/2",{extensionName:r,type:"custom"}).then((function(n){console.log("successfully added")}));case 2:a(!0);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),[r]),l=function(){var n=(0,Z.Z)((0,h.Z)().mark((function n(){return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.Z.get("http://192.168.35.165:8080/room/2").then((function(n){window.localStorage.setItem("customList",JSON.stringify(n.data))})).catch((function(n){console.log(n)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,F.useEffect)((function(){i&&(l(),a(!1))}),[i]),(0,m.SZ)((function(){return(0,J.jsxs)(j,{children:[(0,J.jsx)("div",{}),(0,J.jsx)("div",{}),(0,J.jsx)("div",{}),(0,J.jsx)("div",{}),(0,J.jsx)(v,{children:(0,J.jsx)(y,{children:(0,J.jsxs)("tbody",{children:[(0,J.jsxs)(k,{children:[(0,J.jsx)("td",{children:"\uace0\uc815 \ud655\uc7a5\uc790"}),(0,J.jsx)("td",{children:n.map((function(n){return(0,J.jsx)(O,{label:n})}))})]}),(0,J.jsxs)(S,{children:[(0,J.jsx)(I,{children:"\ucee4\uc2a4\ud140 \ud655\uc7a5\uc790"}),(0,J.jsxs)("td",{children:[(0,J.jsx)(C,{type:"text",onChange:o}),(0,J.jsx)(L,{type:"submit",onClick:u,value:"+\ucd94\uac00"})]})]}),(0,J.jsxs)(S,{children:[(0,J.jsx)("td",{}),(0,J.jsx)("td",{children:(0,J.jsx)(z,{})})]})]})})})]})}))}}}]);
//# sourceMappingURL=480.2d0d748a.chunk.js.map