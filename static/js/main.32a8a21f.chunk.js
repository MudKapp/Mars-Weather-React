(this["webpackJsonpmars-weather"]=this["webpackJsonpmars-weather"]||[]).push([[0],{21:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),s=(a(26),a(3)),l=a.n(s),o=a(4),u=a(16),m=a(17),p=a(20),h=a(19),d=a(18),f=a.n(d);function g(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(l.a.mark((function e(t){var a,n,r,i,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t?new Date(t):new Date,n=String(a.getDate()),r=String(t?a.getMonth()+1:a.getMonth()),i=String(a.getFullYear()),e.next=6,f.a.get("https://node-proxy-cors.herokuapp.com/?month=".concat(r,"&year=").concat(i,"&day=").concat(n));case 6:return c=e.sent,e.abrupt("return",c.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=a(5);function E(e){var t=e.weather.map((function(e){return r.a.createElement("div",{key:e.sol,className:"col pb-1"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Sol ",e.sol," / ",r.a.createElement("span",{className:"font-weight-light font-italic"},"Day on Mars")),r.a.createElement("h6",{className:"card-subtitle text-muted"},e.season),r.a.createElement("h2",{"data-tip":!0,"data-for":"temp-"+e.sol},e.air.temperature.average.toPrecision(3),r.a.createElement("sup",{className:"font-weight-light"},"\xb0C")),r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-ruler-vertical ","data-tip":!0,"data-for":"pressure-"+e.sol})," ",r.a.createElement("span",{className:"mr-2"},e.air.pressure.average.toPrecision(4),r.a.createElement("sub",{className:"font-weight-light font-italic"},"Pa"))),r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-wind","data-tip":!0,"data-for":"wind-"+e.sol}),r.a.createElement("span",null,e.wind.speed.average.toPrecision(2),r.a.createElement("sub",{className:"font-weight-light font-italic"},"MPH")))),r.a.createElement(w.a,{id:"temp-"+e.sol,effect:"solid","aria-haspopup":"true"},r.a.createElement("ul",null,r.a.createElement("li",null,"Minimum: ",e.air.temperature.minimum.toPrecision(3)),r.a.createElement("li",null,"Average: ",e.air.temperature.average.toPrecision(3)),r.a.createElement("li",null,"Maximum: ",e.air.temperature.maximum.toPrecision(3)))),r.a.createElement(w.a,{id:"pressure-"+e.sol,effect:"solid","aria-haspopup":"true"},r.a.createElement("ul",null,r.a.createElement("li",null,"Minimum: ",e.air.pressure.minimum.toPrecision(4)),r.a.createElement("li",null,"Average: ",e.air.pressure.average.toPrecision(4)),r.a.createElement("li",null,"Maximum: ",e.air.pressure.maximum.toPrecision(4)))),r.a.createElement(w.a,{id:"wind-"+e.sol,effect:"solid","aria-haspopup":"true"},r.a.createElement("ul",null,r.a.createElement("li",null,"Minimum: ",e.wind.speed.minimum.toPrecision(2)),r.a.createElement("li",null,"Average: ",e.wind.speed.average.toPrecision(2)),r.a.createElement("li",null,"Maximum: ",e.wind.speed.maximum.toPrecision(2))))))}));return r.a.createElement("div",{className:"row justify-content-around align-content-center h-75 "},t.length>0?t:r.a.createElement("h1",{className:"text-white"},"Loading Data"))}function y(e){var t=new Date,a="".concat(t.getFullYear(),"-0").concat(t.getMonth(),"-0").concat(t.getDate());return console.log(a),r.a.createElement("div",{className:"row justify-content-around align-content-center h-25"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"date",className:"text-white"},"Change Date"),r.a.createElement("input",{type:"date",className:"form-control",id:"date",onChange:function(t){e.changeDate(t.target.value)},min:"2019-11-27",value:e.date?e.date:a})))}var x=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={weather:[],date:null},e.changeDate=function(t){e.setState({date:t})},e}return Object(m.a)(a,[{key:"setStateWeather",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0!==(a=t)&&this.setState({weather:a});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,this.setStateWeather(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.date===this.state.date){e.next=5;break}return e.next=3,g(this.state.date);case 3:n=e.sent,this.setStateWeather(n);case 5:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"weather-app container-fluid"},r.a.createElement(E,{weather:this.state.weather}),r.a.createElement(y,{changeDate:this.changeDate,date:this.state.date}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.32a8a21f.chunk.js.map