import{d as u,r as n,a as c,o as f,b as y,w as x,c as D,e as b,f as e,t as i,n as o,u as d,g as H,_ as $}from"./index-Bg7j18nW.js";const B="/static/home/svg/ring.svg",E="/static/public/svg/ccwiki_logo0.svg",l="/static/home/svg/NotFind_bg.svg",L="/static/home/svg/ring2.svg",S={class:"newsList"},W={class:"newsDiv",style:{"margin-left":"0px"}},z={class:"text"},I={class:"date"},k={class:"newsDiv"},V={class:"text"},N={class:"date"},U={class:"text"},C={class:"date"},F={class:"text"},M={class:"date"},j=u({__name:"HomeView",setup(q){const w=n();let v=c({alignItems:"center"}),g=c({paddingBottom:"70px"});const _=n(0);let a=c({display:"flex"});const p=n(window.innerHeight),h=n(window.innerWidth),r=()=>{p.value=window.innerHeight},m=()=>{h.value=window.innerWidth};return f(()=>{_.value=w.value.offsetHeight,r(),m(),window.addEventListener("resize",r),window.addEventListener("resize",m)}),y(()=>{window.removeEventListener("resize",r),window.removeEventListener("resize",m)}),x(()=>{_.value>=p.value-40?(v.alignItems="flex-start",g.paddingBottom="20px"):(v.alignItems="center",g.paddingBottom="70px"),h.value<=800?a.display="none":a.display="flex"}),(t,s)=>(D(),b("div",{class:"Div",style:o(d(v))},[e("div",{class:"home",ref_key:"mainDiv",ref:w,style:o(d(g))},[s[4]||(s[4]=e("div",{class:"logo"},[e("img",{class:"ring",src:B,alt:"",width:"auto",height:"170px",draggable:"false"}),e("img",{class:"logo_image",src:E,alt:"",width:"auto",height:"120px",draggable:"false"})],-1)),e("div",S,[e("div",W,[s[0]||(s[0]=e("img",{class:"image",src:l,alt:"",draggable:"false"},null,-1)),e("div",z,i(t.$t("home.news.text_none")),1),e("div",I,i(t.$t("home.news.date_none")),1)]),e("div",k,[s[1]||(s[1]=e("img",{class:"image",src:l,alt:"",draggable:"false"},null,-1)),e("div",V,i(t.$t("home.news.text_none")),1),e("div",N,i(t.$t("home.news.date_none")),1)]),e("div",{class:"newsDiv",style:o(d(a))},[s[2]||(s[2]=e("img",{class:"image",src:l,alt:"",draggable:"false"},null,-1)),e("div",U,i(t.$t("home.news.text_none")),1),e("div",C,i(t.$t("home.news.date_none")),1)],4),e("div",{class:"newsDiv",style:o(d(a))},[s[3]||(s[3]=e("img",{class:"image",src:l,alt:"",draggable:"false"},null,-1)),e("div",F,i(t.$t("home.news.text_none")),1),e("div",M,i(t.$t("home.news.date_none")),1)],4)]),s[5]||(s[5]=H('<div class="updataList" data-v-98521431><div class="updataDiv" style="margin-top:0px;" data-v-98521431><div class="imgDiv" data-v-98521431><div class="ring" data-v-98521431><img class="ring2" src="'+L+'" alt="" draggable="false" data-v-98521431></div></div><div class="textDiv" data-v-98521431><div class="date" data-v-98521431>2024.9.7</div><ul data-v-98521431><li data-v-98521431>已完成 vue 迁移</li><li data-v-98521431>完成基础UI、首页、关于页面</li></ul></div></div></div>',1))],4)],4))}}),G=$(j,[["__scopeId","data-v-98521431"]]);export{G as default};
