(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r);a(13),a(14);function o(e){return e.alert&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"alert alert-success alert-dismissible fade show",role:"alert"},l.a.createElement("strong",null,e.alert.type),"  : ",e.alert.msg))}var s=a(3),m=a.n(s);function i(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," mx-3")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Dark mode")))))}function u(e){const[t,a]=Object(n.useState)("enter text here");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container my-4",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h4",null,e.heading),l.a.createElement("textarea",{className:"form-control ",id:"mybox",onChange:e=>{a(e.target.value)},style:{backgroundColor:"dark"===e.mode?"black":"white",color:"dark"===e.mode?"white":"black"},value:t,rows:"8"}),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-primary",onClick:()=>{let n=t.toUpperCase();a(n),e.showAlert("Converted to upper case","Success")}},"Convert to uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-3",onClick:()=>{let n=t.toLowerCase();a(n),e.showAlert("Converted to lower case","Success")}},"Convert to lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-3",onClick:()=>{a(""),e.showAlert("text cleard","Success")}},"Clear text"),l.a.createElement("button",{className:"btn btn-primary mx-3",onClick:()=>{var t=document.getElementById("mybox");t.select(),console.log("hello"),navigator.clipboard.writeText(t.value),e.showAlert("text has been copied","Success")}},"copy text"),l.a.createElement("button",{type:"submit",className:"btn btn-primary mx-3",onClick:()=>{let e=new SpeechSynthesisUtterance;e.text=t,window.speechSynthesis.speak(e)}},"Speak button")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,"your text summery"),l.a.createElement("p",null,t.split(" ").length," words and ",t.length," Characters"),l.a.createElement("p",null,.008*t.split(" ").length," minutes to read this ")))}i.prototype={title:m.a.string};var d=function(){const[e,t]=Object(n.useState)("light"),[a,r]=Object(n.useState)(null),c=(e,t)=>{r({msg:e,type:t}),setTimeout(()=>{r(null)},3e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{title:"project",about:"About us",mode:e,toggleMode:()=>{console.log("hello"),"light"===e?(t("dark"),document.body.style.backgroundColor="#042743",c("Dark mode has been enabled","success")):(t("light"),document.body.style.backgroundColor="white",c("Light mode has been enabled","success"))}}),l.a.createElement(o,{alert:a}),l.a.createElement("div",{className:"container"},l.a.createElement(u,{showAlert:c,heading:"Enter the text to analyze",mode:e})))};var b=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=t;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null))),b()},4:function(e,t,a){e.exports=a(17)}},[[4,1,2]]]);
//# sourceMappingURL=main.23f8d2bf.chunk.js.map