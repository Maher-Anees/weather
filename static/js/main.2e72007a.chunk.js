(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},27:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(7),i=s.n(a),n=s(16),r=s.n(n),l=(s(24),s(25),s(13)),d=s.n(l),o=s(17),j=s(9);var h=function(e){var t=e.dt,s=e.iconurl,a=e.temp,i=e.today,n=new Date(1e3*t);return parseInt(n.getDay())===i?Object(c.jsxs)("div",{style:{"background-color":"rgb(0, 0, 0, 0.4)","border-radius":"40px",margin:"6px",padding:"15px"},children:[Object(c.jsx)("h4",{children:"Today"}),Object(c.jsxs)("h4",{children:[" ",n.toLocaleTimeString()," "]}),Object(c.jsx)("img",{src:s,className:"weather-icon",style:{"border-radius":"50px"},alt:"",width:"65"}),Object(c.jsxs)("h4",{children:[Math.floor(a-273.15),Object(c.jsx)("sup",{children:"o"})]})]}):null};var b=function(e){var t=e.dt,s=e.iconurl,a=e.temp,n=e.today,r=new Date(1e3*t),l=i.a.useState(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),d=Object(j.a)(l,1)[0];return"2:00:00 PM"===r.toLocaleTimeString()&&parseInt(r.getDay())!==n||"8:00:00 PM"===r.toLocaleTimeString()&&parseInt(r.getDay())===n?Object(c.jsxs)("div",{style:{"background-color":"rgb(0, 0, 0, 0.4)","border-radius":"40px",margin:"6px",padding:"15px"},children:[Object(c.jsx)("h4",{children:r.getDate()+"/"+(parseInt(r.getMonth())+1)+"/"+r.getFullYear()}),parseInt(r.getDay())===n?Object(c.jsx)("h4",{children:"Today"}):parseInt(r.getDay())===n+1?Object(c.jsx)("h4",{children:"Tommorrow"}):Object(c.jsx)("h4",{children:d[parseInt(r.getDay())]}),Object(c.jsx)("img",{src:s,className:"weather-icon",style:{"border-radius":"50px"},alt:"",width:"65"}),Object(c.jsxs)("h4",{children:[Math.floor(a-273.15),Object(c.jsx)("sup",{children:"o"})]})]}):null};var u=function(e){var t=e.dt,s=e.iconurl,a=e.temp,n=new Date(1e3*t),r=i.a.useState(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),l=Object(j.a)(r,1)[0];return Object(c.jsxs)("div",{style:{"background-color":"rgb(0, 0, 0, 0.4)","border-radius":"40px",margin:"6px",padding:"15px"},children:[Object(c.jsx)("h4",{children:l[parseInt(n.getDay())]}),Object(c.jsxs)("h4",{children:[" ",n.toLocaleTimeString()," "]}),Object(c.jsx)("img",{src:s,className:"weather-icon",style:{"border-radius":"50px"},alt:"",width:"65"}),Object(c.jsxs)("h4",{children:[Math.floor(a-273.15),Object(c.jsx)("sup",{children:"o"})]})]})};var x=function(e){var t=e.weather,s=e.forecast,a=e.status;function n(){document.getElementById("setheader").setAttribute("style","padding: 100px;"),document.getElementById("setinput").setAttribute("style","padding-bottom: 50px;")}if(200===t.cod){for(var r="https://openweathermap.org/img/w/".concat(404!==t.cod?t.weather[0].icon:null,".png"),l=[],d=0;d<40;d++)l.push({dt:s.list[d].dt,iconurl:"https://openweathermap.org/img/w/".concat(404!==s.cod?s.list[d].weather[0].icon:null,".png"),temp:s.list[d].main.temp,today:parseInt(new Date(1e3*s.list[0].dt).getDay())});return Object(c.jsx)("div",{className:"container-fluid",children:404!==t.cod&&404!==s.cod?Object(c.jsxs)(i.a.Fragment,{children:[function(){var e=document.getElementById("setbg"),s=document.getElementById("setheader"),c=document.getElementById("setinput");e.setAttribute("style","background-image:url(image/".concat(404!==t.cod?t.weather[0].icon:null,".gif);")),s.setAttribute("style","padding: 100px;"),c.setAttribute("style","padding-bottom: 50px;")}(),n(),Object(c.jsx)("div",{className:"row text-white",style:{padding:"5%"},children:Object(c.jsxs)("strong",{children:[Object(c.jsx)("br",{}),Object(c.jsxs)("h1",{style:{"font-size":"60px"},children:[s.city.name,", ",s.city.country]}),Object(c.jsx)("h4",{children:(new Date).toDateString()})]})}),Object(c.jsxs)("div",{className:"row text-white",children:[Object(c.jsx)("div",{className:"col-lg-6",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-3"}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)("img",{src:r,className:"weather-icon",style:{"background-color":"rgb(255, 255, 255, 0.4)","border-radius":"100px"},alt:"",width:"130"})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsxs)("strong",{children:[Object(c.jsxs)("h1",{style:{"font-size":"100px"},children:[Math.floor(t.main.temp-273.15),Object(c.jsx)("sup",{children:"o"})]}),Object(c.jsxs)("span",{className:"weather-main",style:{"font-size":"20px"},children:[t.weather[0].main,", ",t.weather[0].description]})]})}),Object(c.jsx)("div",{className:"col-lg-3"})]})}),Object(c.jsx)("div",{className:"col-lg-6 text-light",children:Object(c.jsxs)("div",{className:"container",style:{"background-color":"rgb(0, 0, 0, 0.4)","border-radius":"20px"},children:[Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-lg-3",children:[Math.floor(t.main.temp_max-273.15)," /"," ",Math.floor(t.main.temp_min-273.15)," ",Object(c.jsx)("sup",{children:"o"})," ","C",Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"High / Low"})]}),Object(c.jsxs)("div",{className:"col-lg-3",children:[t.main.humidity," %",Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"Humidity"})]}),Object(c.jsxs)("div",{className:"col-lg-3",children:[t.main.pressure," hPa",Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"Pressure"})]}),Object(c.jsxs)("div",{className:"col-lg-3",children:[t.visibility/1e3," Km",Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"Visibility"})]})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-lg-3",children:[Math.floor(18*t.wind.speed/5)," Km/hr",Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"Wind"})]}),Object(c.jsxs)("div",{className:"col-lg-3",children:[t.wind.deg," ",Object(c.jsx)("sup",{children:"o"}),"deg",Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"Wind Direction"})]}),Object(c.jsxs)("div",{className:"col-lg-3",children:[new Date(1e3*t.sys.sunrise).toLocaleTimeString(),Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"Sunrise"})]}),Object(c.jsxs)("div",{className:"col-lg-3",children:[new Date(1e3*t.sys.sunset).toLocaleTimeString(),Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"Sunset"})]})]}),Object(c.jsx)("br",{})]})})]}),function(){if(1===a)return Object(c.jsx)("section",{id:"faq",className:"faq",style:{overflow:"hidden"},children:Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("ul",{id:"faq-list",children:[Object(c.jsxs)("li",{children:[Object(c.jsxs)("a",{"data-toggle":"collapse",className:"collapsed",href:"#faq1",children:[Object(c.jsx)("div",{className:"container-fluid text-white text-left",style:{"padding-left":"3%"},children:Object(c.jsx)("h1",{children:"Hourly Forecast"})}),Object(c.jsx)("i",{className:"ion-android-remove text-white"})]}),Object(c.jsx)("div",{id:"faq1",className:"collapse","data-parent":"#faq-list",children:Object(c.jsx)("ul",{id:"faq-list",className:"text-left",children:Object(c.jsx)("li",{children:Object(c.jsx)("div",{className:"container-fluid",style:{overflow:"hidden"},children:Object(c.jsx)("div",{className:"text-white text-center",style:{"overflow-x":"scroll",position:"relative",display:"flex"},children:void 0!==s?l.map((function(e){return Object(c.jsx)(h,{dt:e.dt,iconurl:e.iconurl,temp:e.temp,today:e.today})})):null})})})})})]}),Object(c.jsxs)("li",{children:[Object(c.jsxs)("a",{"data-toggle":"collapse",className:"collapsed",href:"#faq2",children:[Object(c.jsx)("div",{className:"container-fluid text-white text-left",style:{"padding-left":"3%"},children:Object(c.jsx)("h1",{children:"Daily Forecast"})}),Object(c.jsx)("i",{className:"ion-android-remove text-white"})]}),Object(c.jsx)("div",{id:"faq2",className:"collapse","data-parent":"#faq-list",children:Object(c.jsx)("ul",{id:"faq-list",className:"text-left",children:Object(c.jsx)("li",{children:Object(c.jsx)("div",{className:"container-fluid",style:{overflow:"hidden"},children:Object(c.jsx)("div",{className:"text-white text-center",style:{"overflow-x":"scroll",position:"relative",display:"flex"},children:void 0!==s?l.map((function(e){return Object(c.jsx)(b,{dt:e.dt,iconurl:e.iconurl,temp:e.temp,today:e.today})})):null})})})})})]}),Object(c.jsxs)("li",{children:[Object(c.jsxs)("a",{"data-toggle":"collapse",className:"collapsed",href:"#faq3",children:[Object(c.jsx)("div",{className:"container-fluid text-white text-left",style:{"padding-left":"3%"},children:Object(c.jsx)("h1",{children:"Monthly Forecast"})}),Object(c.jsx)("i",{className:"ion-android-remove text-white"})]}),Object(c.jsx)("div",{id:"faq3",className:"collapse","data-parent":"#faq-list",children:Object(c.jsx)("ul",{id:"faq-list",className:"text-left",children:Object(c.jsx)("li",{children:Object(c.jsx)("div",{className:"container-fluid",style:{overflow:"hidden"},children:Object(c.jsx)("div",{className:"text-white text-center",style:{"overflow-x":"scroll",position:"relative",display:"flex"},children:void 0!==s?l.map((function(e){return Object(c.jsx)(u,{dt:e.dt,iconurl:e.iconurl,temp:e.temp})})):null})})})})})]})]})})})}()]}):Object(c.jsx)("div",{className:"maincard",children:Object(c.jsx)("h2",{children:t.message})})})}return Object(c.jsxs)("div",{className:"maincard text-white",children:[n(),Object(c.jsx)("h2",{style:{"padding-bottom":"50px"},children:t.message})]})},p=s(18),m=s.n(p),O=(s(27),s(14)),g=O.a.initializeApp({apiKey:"AIzaSyAv0jfJ3ohFFcc_r63Zkn4UQogSaoEKXtk",authDomain:"weather-d2468.firebaseapp.com",projectId:"weather-d2468",storageBucket:"weather-d2468.appspot.com",messagingSenderId:"742380104767",appId:"1:742380104767:web:94c83b3dbaefe6e90edc8a",measurementId:"G-8MRSF1RGNZ"}),f=new O.a.auth.FacebookAuthProvider;var y=function(){var e="ac8513722d885e3436d3cb8b583d7553",t=Object(a.useState)({City:"",Country:""}),s=Object(j.a)(t,1)[0],i=Object(a.useState)([]),n=Object(j.a)(i,2),r=n[0],l=n[1],h=Object(a.useState)([]),b=Object(j.a)(h,2),u=b[0],p=b[1],O=Object(a.useState)({status:0,title:""}),y=Object(j.a)(O,1)[0];function v(){0===y.status?g.auth().signInWithPopup(f).then((function(e,t){t?alert("Error",t):(y.status=1,alert("Login Successfully!"),g.auth().onAuthStateChanged((function(e){if(e){var t=e.email.split("@");y.title=t[0]}})))})):(g.auth().signOut(),y.status=0,y.title="",alert("LogOut Successfully!"))}function w(e){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(d.a.mark((function t(c){var a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),""!==s.City){t.next=5;break}alert("Add values"),t.next=13;break;case 5:return t.next=7,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(s.City,"&appid=").concat(e)).then((function(e){return e.json()})).then((function(e){return e}));case 7:return a=t.sent,l({data:a}),t.next=11,fetch("http://api.openweathermap.org/data/2.5/forecast?q=".concat(s.City,"&appid=").concat(e)).then((function(e){return e.json()})).then((function(e){return e}));case 11:i=t.sent,p({data:i});case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.jsx)("div",{id:"setbg",className:"setbg",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsxs)("div",{className:"row",id:"setheader",style:{padding:"160px"},children:[Object(c.jsx)("div",{className:"col-lg-4"}),Object(c.jsx)("div",{className:"col-lg-4 text-white",style:{"background-color":"rgb(0, 0, 0, 0.4)","border-radius":"50px"},children:Object(c.jsx)("h1",{style:{"font-size":"55px"},children:"Weather App"})}),Object(c.jsx)("div",{className:"col-lg-4 text-right",children:Object(c.jsxs)("button",{className:"btn btn-dark btn-outline-light btn-lg",id:"loginID",onClick:function(){return v()},children:[Object(c.jsx)("i",{className:"fa fa-facebook",style:{background:"blue",padding:"15px",width:"50px","border-radius":"90%"}}),y.title]})})]}),Object(c.jsxs)("div",{className:"row",id:"setinput",style:{"padding-bottom":"323px",transition:"0.8s 0.5s"},children:[Object(c.jsx)("div",{className:"col-sm-4"}),Object(c.jsx)("div",{className:"col-sm-4",children:Object(c.jsxs)("div",{class:"input-group mb-3",for:"inputdefault",style:{"background-color":"rgb(0, 0, 0, 0.4)","border-radius":"100px",padding:"10px"},children:[Object(c.jsx)("input",{type:"text",id:"city1",style:{opacity:"1","border-radius":"100px"},className:"form-control text-dark text-center bg-light",name:"City",placeholder:"Enter City Name",onChange:function(e){s.City=e.target.value},onKeyPress:function(e){return function(e){"Enter"===e.key&&w(e)}(e)}}),"\u2002",Object(c.jsx)("div",{class:"input-group-append",children:Object(c.jsx)("button",{className:"btn btn-primary rounded-circle loc-hover",onClick:function(e){return function(e){e.preventDefault(),m.a.ajax({url:"https://geolocation-db.com/jsonp",jsonpCallback:"callback",dataType:"jsonp",success:function(t){s.City=t.city,document.getElementById("city1").value=s.City,w(e)}})}(e)},children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-cursor",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"})})})})]})}),Object(c.jsx)("div",{className:"col-sm-4"})]}),void 0!==r.data&&void 0!==u.data?Object(c.jsx)("div",{children:Object(c.jsx)(x,{weather:r.data,forecast:u.data,status:y.status})}):null]})})};var v=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(y,{})})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,32)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),w()}},[[31,1,2]]]);
//# sourceMappingURL=main.2e72007a.chunk.js.map