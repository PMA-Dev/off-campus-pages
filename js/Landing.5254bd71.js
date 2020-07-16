(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Landing"],{"198c":function(t,e,a){"use strict";var n=a("febc"),i=a.n(n);i.a},"216c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{attrs:{id:"tabs"}},[n("router-link",{attrs:{id:"landing_container",to:"/"}},[t.landing?t._e():n("img",{attrs:{src:a("9b19"),id:"logo"}}),t.landing?n("img",{attrs:{src:a("5e72"),id:"logo"}}):t._e()]),!t.loggedIn&&t.landing?n("input",{attrs:{id:"largeSearch",placeholder:"Search Listings..."}}):t._e(),t.loggedIn&&!t.landing?n("div",{attrs:{id:"span_container"}},[n("router-link",{attrs:{id:"tab_dynamic",to:"/home/"}},[t._v("Home")]),"USERTENANTACCOUNT"==this.$store.get("accountType")?n("router-link",{attrs:{id:"tab_explore",to:"/home/explore"}},[t._v("Explore")]):t._e(),"USERLEASERACCOUNT"==this.$store.get("accountType")?n("router-link",{attrs:{id:"tab_listing",to:"/home/listing"}},[t._v("Your Listing")]):t._e(),n("router-link",{attrs:{id:"tab_lease",to:"/home/lease"}},[t._v("Your Lease")]),n("router-link",{attrs:{id:"tab_account",to:"/home/account"}},[t._v("Account")])],1):t._e(),t.loggedIn&&t.landing?n("div",{attrs:{id:"span_container_landing"}},[n("router-link",{staticClass:"tab",attrs:{id:"tab_dynamic",to:"/home/"}},[t._v("Home")]),"USERTENANTACCOUNT"==this.$store.get("accountType")?n("router-link",{staticClass:"tab",attrs:{id:"tab_explore",to:"/home/explore"}},[t._v("Explore")]):t._e(),"USERLEASERACCOUNT"==this.$store.get("accountType")?n("router-link",{staticClass:"tab",attrs:{id:"tab_listing",to:"/home/listing"}},[t._v("Your Listing")]):t._e(),n("router-link",{staticClass:"tab",attrs:{id:"tab_lease",to:"/home/lease"}},[t._v("Your Lease")]),n("router-link",{staticClass:"tab",attrs:{id:"tab_account",to:"/home/account"}},[t._v("Account")])],1):t._e(),t.loggedIn?n("div",{attrs:{id:"pfp_container"}},[n("input",{staticClass:"search",attrs:{id:"search",placeholder:"Search"}}),n("Pfp")],1):t._e(),t.loggedIn?t._e():n("div",{attrs:{id:"tokenless_container"}},[n("router-link",{attrs:{to:"/Login"}},[n("button",{attrs:{id:"login"}},[t._v("Log in")])]),n("router-link",{attrs:{to:"/Signup"}},[n("button",{attrs:{id:"signup"}},[t._v("Sign up")])])],1)],1)])},i=[],s=a("bc3a"),o=a.n(s),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container"}},[a("img",{attrs:{id:"pfp",src:"data:image/png;base64,"+t.pfp}})])},l=[],c={name:"Pfp",data(){return{pfp:this.$store.get("pfp")}},methods:{},mounted(){o()({method:"get",url:this.$store.get("apiUrl")+"users/fulldata",headers:{authorization:this.$store.get("token")}}).then(t=>{null!=t.data.bio&&this.$store.set("bio",t.data.bio),null!=t.data.firstName&&this.$store.set("firstName",t.data.firstName),null!=t.data.lastName&&this.$store.set("lastName",t.data.lastName),null!=t.data.username&&this.$store.set("username",t.data.username),null!=t.data.accountType&&this.$store.set("accountType",t.data.accountType),null!=t.data.imageUrl&&(this.$store.set("pfp",t.data.imageUrl),t.data.imageUrl!=this.pfp&&(this.pfp=t.data.imageUrl))}).catch((function(t){console.log(t)}))}},d=c,u=(a("29d4"),a("2877")),g=Object(u["a"])(d,r,l,!1,null,"2066d648",null),p=g.exports,h={data(){return{landing:!1,loggedIn:!1}},methods:{getPath(){"Landing"==this.$route.name?this.landing=!0:this.landing=!1,this.$store.getters.checkTokenNull?this.loggedIn=!1:this.loggedIn=!0,this.landing&&($("#tabs").css("background-color","transparent"),$(".tab").css("color","white"))}},mounted(){this.getPath()},components:{Pfp:p}},m=h,_=(a("198c"),Object(u["a"])(m,n,i,!1,null,"83d86bd4",null));e["a"]=_.exports},"29d4":function(t,e,a){"use strict";var n=a("77cf"),i=a.n(n);i.a},"2ab2":function(t,e,a){"use strict";var n=a("7b19"),i=a.n(n);i.a},"5e72":function(t,e,a){t.exports=a.p+"img/whitelogo.b37d1b51.svg"},"77cf":function(t,e,a){},"7b19":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.e639c1df.svg"},ba2f:function(t,e,a){t.exports=a.p+"img/landing_illustration.13bcd346.svg"},bede:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"site"}},[a("Nav"),a("div",{attrs:{id:"landing_page"}},[a("h1",[t._v(" The off campus housing platform ")]),a("h3",[t._v("Reviews, payments, and roommate search at your convenience.")]),a("router-link",{attrs:{to:"/signup"}},[a("button",{attrs:{id:"get_started"}},[t._v("Get Started")])]),t._m(0)],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hero"}},[n("img",{attrs:{id:"landing_illustration",src:a("ba2f")}})])}],s=a("216c"),o={name:"Landing",methods:{},mounted(){},components:{Nav:s["a"]}},r=o,l=(a("2ab2"),a("2877")),c=Object(l["a"])(r,n,i,!1,null,"1fa73bc2",null);e["default"]=c.exports},febc:function(t,e,a){}}]);
//# sourceMappingURL=Landing.5254bd71.js.map