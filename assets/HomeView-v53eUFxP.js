import{d as _,r,a as c,o as p,b as u,w as b,c as h,e,f as D,t as a,n as d,u as l,g as y,h as x,_ as H}from"./index-DIFEkSW5.js";const $="/static/home/svg/ring.svg",S="/static/public/svg/ccwiki_logo0.svg",n="/static/home/svg/NotFind_bg.svg",B="/static/home/svg/ring2.svg",I={class:"newsList"},k={class:"newsDiv",style:{"margin-left":"0"}},E={class:"text"},L={class:"date"},V={class:"newsDiv"},z={class:"text"},N={class:"date"},W={class:"text"},U={class:"date"},C={class:"text"},F={class:"date"},M=_({__name:"HomeView",setup(j){const m=r();let o=c({alignItems:"center"}),v=c({paddingBottom:"70px"});const f=r(0);let i=c({display:"flex"});const w=r(window.innerHeight),g=()=>{w.value=window.innerHeight};return p(()=>{f.value=m.value.offsetHeight,g(),window.addEventListener("resize",g)}),u(()=>{window.removeEventListener("resize",g)}),b(()=>{f.value>=w.value-40?(o.alignItems="flex-start",v.paddingBottom="20px"):(o.alignItems="center",v.paddingBottom="70px"),y().windowWidth<=800?i.display="none":i.display="flex"}),(t,s)=>(x(),h("div",{class:"Div",style:d(l(o))},[e("div",{class:"home",ref_key:"mainDiv",ref:m,style:d(l(v))},[s[4]||(s[4]=e("div",{class:"logo"},[e("img",{class:"ring",src:$,alt:"",width:"auto",height:"170px",draggable:"false"}),e("img",{class:"logo_image",src:S,alt:"",width:"auto",height:"120px",draggable:"false"})],-1)),e("div",I,[e("div",k,[s[0]||(s[0]=e("img",{class:"image",src:n,alt:"",draggable:"false"},null,-1)),e("div",E,a(t.$t("home.news.text_none")),1),e("div",L,a(t.$t("home.news.date_none")),1)]),e("div",V,[s[1]||(s[1]=e("img",{class:"image",src:n,alt:"",draggable:"false"},null,-1)),e("div",z,a(t.$t("home.news.text_none")),1),e("div",N,a(t.$t("home.news.date_none")),1)]),e("div",{class:"newsDiv",style:d(l(i))},[s[2]||(s[2]=e("img",{class:"image",src:n,alt:"",draggable:"false"},null,-1)),e("div",W,a(t.$t("home.news.text_none")),1),e("div",U,a(t.$t("home.news.date_none")),1)],4),e("div",{class:"newsDiv",style:d(l(i))},[s[3]||(s[3]=e("img",{class:"image",src:n,alt:"",draggable:"false"},null,-1)),e("div",C,a(t.$t("home.news.text_none")),1),e("div",F,a(t.$t("home.news.date_none")),1)],4)]),s[5]||(s[5]=D('<div class="updateList" data-v-9eb2df89><div class="updateDiv" style="margin-top:0;" data-v-9eb2df89><div class="imgDiv" data-v-9eb2df89><div class="ring" data-v-9eb2df89><img class="ring2" src="'+B+'" alt="" draggable="false" data-v-9eb2df89></div></div><div class="textDiv" data-v-9eb2df89><div class="date" data-v-9eb2df89>2025.1.1</div><ul data-v-9eb2df89><li data-v-9eb2df89>新年快乐🎉</li></ul></div></div><div class="updateDiv" data-v-9eb2df89><div class="imgDiv" data-v-9eb2df89><div class="ring" data-v-9eb2df89></div></div><div class="textDiv" data-v-9eb2df89><div class="date" data-v-9eb2df89>2024.9.7</div><ul data-v-9eb2df89><li data-v-9eb2df89>已完成 vue 迁移</li><li data-v-9eb2df89>完成基础UI、首页、关于页面</li></ul></div></div></div>',1))],4)],4))}}),A=H(M,[["__scopeId","data-v-9eb2df89"]]);export{A as default};
