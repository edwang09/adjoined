(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/cafe.d60e33c6.png"},29:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAyCAYAAADLLVz8AAADJ0lEQVRoQ+2bv4/TMBTHY6fNuUlKMvE/ULlUjAxsp1oM3ZFu4N8AiYU/gOlmBm5BDEgsJyVZYEUghhDESWWB+QbGa6XKKOVS5XpNHf9o7Tu5Y/ves/3J99mvjg0cxZ80TT87jnOHEfYbIeRIZdN5nj+GEN5lxJxjjN+qbBfIBkuS5BAAcCwThxByT8S/KIqnIn6VD4Tw02Aw+C0TQxhgmqY/ZRpu8mXBlIXW1C7G+I3IeLgB7grcWucvCCEP6t/leX4EIeyIDJLHhxckF8A9wVuNt1LjrlSnQo2tAO4bXDUw13W7cRx/QAh951GRKts2amQC1AUvCIKoDiKO4+eqwPDEYUHcCtAUeNWATYTYCNA0eKZC3AgwSZIfAADII3UVtpRSGIZhf1usMAxfdTqdcxXtccagGOOTdZ+NAE1Vn4kqvAbQdHimQbwCUBe8brfb8zzP40kp13W/9vv99zw+qmzrK7MRANdLlrYDNWFVXgHUpb4gCMqdG2Y92gD1Io7jl22Bq7SrVGgCwCsFM+8gdatwCTDLsmNK6SFv51XYi6av7sXEcZw/GOOPS4Aa01dKfbohlmlsAUqkkQUoAa90XQLUlb5lB2TnP90pXLavDaAqeLohWoCSaWwBWoD/CegqqK0CrQKtAiU1YAFagKIEVNWCuhaQZSFtNxNEH//lXzkL0ALUVgOudmOyLHtHKb0v/izEPWXnQV3zH6X0fDgcntotfcFnb8w7Ed/3IwDE3ikBABZRFL0QZCDldg3gTVxMdKWvce+FEUJ+eRaQRxIAgF9RFL3m8VFl2wjwJqnQBPWtCun1J6Nrm7/timwKPOMAlofIe71esC3VEEInCKGd3BBgpfim06r2gCWL2uXvTUd97RHfFgC3nZNmFmCmzIcmzXt15kyAOldmz/OQ7/tfgiA4bSEU5SasE/qNi0hTT/atxltz0aYOdB8QAQB0PB4P6u3u67ZSG9Vxp/AmRe4K5K2/bLih6H7mOI7UtdP5fP5oMplwXV2YTqcHs9nsiczEt1gszkajUXm/WfjTahHhid5SmX8JIQ954rJsi6IoYR6w7HhTlBXvH7YaNNBzExSkAAAAAElFTkSuQmCC"},33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(23),c=a.n(o),i=(a(38),a(24)),r=a(25),s=a(32),m=a(31),u=a(26),d=a.n(u),A=a(27),E=a.n(A),g=a(28),f=a.n(g),h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).submitEmail=function(){E.a.post("https://adjoined-landing.firebaseio.com/email.json",{email:n.state.email}).then((function(e){console.log(e),n.setState({submitted:!0})})).catch((function(e){console.log(e)}))},n.state={email:"",submitted:!1},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"demonstration"},l.a.createElement("img",{src:d.a,alt:"cafe"})),l.a.createElement("div",{className:"introduction"},l.a.createElement("h3",null,"Virtual coworking space for your community"),l.a.createElement("p",null,"Working remotely can feel isolating at times. Adjoined creates a shared space for people to work together and stay connected."),l.a.createElement("form",{action:""},l.a.createElement("div",{className:"formgroup"},l.a.createElement("input",{type:"text",placeholder:"Enter email address",value:this.state.email,onChange:function(t){e.setState({email:t.target.value})}}),l.a.createElement("button",{className:f()({submit:!0,submitted:this.state.submitted}),disabled:""===this.state.email,onClick:function(t){t.preventDefault(),e.submitEmail()}},this.state.submitted?"Thank you!":"Get Early Access")))))}}]),a}(l.a.Component),v=a(29),p=a.n(v),b=a(9);var C=function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"left"},l.a.createElement(b.b,{to:"/"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:p.a,alt:"logo"})),l.a.createElement("div",{className:"title"},"Adjoined"))))},N=a(1);a(61);var w=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(b.a,null,l.a.createElement(C,null),l.a.createElement(N.c,null,l.a.createElement(N.a,{path:"/"},l.a.createElement(h,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.25ff1661.chunk.js.map