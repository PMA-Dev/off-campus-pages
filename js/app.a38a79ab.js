(function(e){function t(t){for(var o,r,s=t[0],c=t[1],u=t[2],l=0,p=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);m&&m(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({Account:"Account",Dynamic:"Dynamic",Explore:"Explore",Home:"Home",Landing:"Landing",Lease:"Lease",Listing:"Listing",Login:"Login",Signup:"Signup"}[e]||e)+"."+{Account:"3a363412",Dynamic:"74545a41",Explore:"4bf5a20b",Home:"9c8e7855",Landing:"e6a14636",Lease:"76c86113",Listing:"147c3a63",Login:"558ea505",Signup:"97c64a66"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={Account:1,Dynamic:1,Explore:1,Home:1,Landing:1,Lease:1,Listing:1,Login:1,Signup:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({Account:"Account",Dynamic:"Dynamic",Explore:"Explore",Home:"Home",Landing:"Landing",Lease:"Lease",Listing:"Listing",Login:"Login",Signup:"Signup"}[e]||e)+"."+{Account:"e0f0c485",Dynamic:"7c472d81",Explore:"7a391099",Home:"610e24fb",Landing:"e079f6c3",Lease:"def56ec6",Listing:"267b1f3c",Login:"06a0b082",Signup:"e2ee12f5"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===o||l===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],m.parentNode.removeChild(m),n(i)},m.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}a[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/off-campus-pages/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=n("04e1"),s=n.n(i),c=n("bc3a"),u=n.n(c),l={name:"app",methods:{tokenHandling(){if(this.$store.get("token")){let e=this.$store.get("token"),t=s()(e),n=t.exp;const o=new Date,r=Math.round(o.getTime()/1e3);r>=n?this.$store.dispatch("signOut"):this.$store.get("staySignedIn")?u()({method:"post",url:this.$store.get("apiUrl")+"refresh",headers:{authorization:this.$store.get("token")}}).then(e=>{this.$store.set("token",e.data.encoded)}).catch((function(e){this.$store.dispatch("signOut")})):n-r<=54e3&&u()({method:"post",url:this.$store.get("apiUrl")+"refresh",headers:{authorization:this.$store.get("token")}}).then(e=>{this.$store.set("token",e.data.encoded)}).catch((function(e){console.log(e)}))}}},mounted(){this.tokenHandling()},components:{}},p=l,m=(n("5c0b"),n("2877")),d=Object(m["a"])(p,r,a,!1,null,null,null),f=d.exports,h=n("8c4f");o["a"].use(h["a"]);const g=[{path:"/",name:"Landing",component:function(){return n.e("Landing").then(n.bind(null,"bede"))}},{path:"/login",name:"Login",component:function(){return n.e("Login").then(n.bind(null,"a55b"))}},{path:"/signup",name:"Signup",component:function(){return n.e("Signup").then(n.bind(null,"34c3"))}},{path:"/home",name:"Home",component:function(){return n.e("Home").then(n.bind(null,"bb51"))},children:[{path:"/home/",name:"Dynamic",component:function(){return n.e("Dynamic").then(n.bind(null,"48d4"))}},{path:"/home/explore",name:"Explore",component:function(){return n.e("Explore").then(n.bind(null,"7797"))}},{path:"/home/listing",name:"Listing",component:function(){return n.e("Listing").then(n.bind(null,"c3e3"))}},{path:"/home/lease",name:"Lease",component:function(){return n.e("Lease").then(n.bind(null,"3871"))}},{path:"/home/account",name:"Account",component:function(){return n.e("Account").then(n.bind(null,"77be"))}}]}],S=new h["a"]({routes:g});var E=S,b=n("2f62"),y=n("bfa9"),T=n("7ffd");const L=new y["a"]({storage:window.localStorage});o["a"].use(b["a"]);var v=new b["a"].Store({state:{token:"",apiUrl:"https://monolith-319538.herokuapp.com/",staySignedIn:!1,accountType:"",email:"",username:"",firstName:"",lastName:"",bio:"",pfp:""},plugins:[L.plugin,T["a"].plugin],getters:{checkTokenNull:e=>""==e.token,token:e=>e.token,apiUrl:e=>e.apiUrl,email:e=>e.email,username:e=>e.username,firstName:e=>e.firstName,lastName:e=>e.lastName,bio:e=>e.bio,pfp:e=>e.pfp,staySignedIn:e=>e.staySignedIn,accountType:e=>e.accountType},mutations:{SET_TOKEN(e,t){e.token=t},SET_EMAIL(e,t){e.email=t},SET_USERNAME(e,t){e.username=t},SET_FIRSTNAME(e,t){e.firstName=t},SET_LASTNAME(e,t){e.lastName=t},SET_BIO(e,t){e.bio=t},SET_PFP(e,t){e.pfp=t},SET_STAYSIGNEDIN(e,t){e.staySignedIn=t},SET_ACCOUNTTYPE(e,t){e.accountType=t}},actions:{setToken({commit:e},t){e("SET_TOKEN",t)},setEmail({commit:e},t){e("SET_EMAIL",t)},setUsername({commit:e},t){e("SET_USERNAME",t)},setFirstName({commit:e},t){e("SET_FIRSTNAME",t)},setLastName({commit:e},t){e("SET_LASTNAME",t)},setBio({commit:e},t){e("SET_BIO",t)},setPfp({commit:e},t){e("SET_PFP",t)},setStaySignedIn({commit:e},t){e("SET_STAYSIGNEDIN",t)},setAccountType({commit:e},t){e("SET_ACCOUNTTYPE",t)},signOut({commit:e,dispatch:t}){t("setToken",""),t("setEmail",""),t("setUsername",""),t("setFirstName",""),t("setLastName",""),t("setBio",""),t("setPfp",""),t("setStaySignedIn",""),E.push("/")},handleToken({commit:e,dispatch:t}){}},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:E,store:v,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.a38a79ab.js.map