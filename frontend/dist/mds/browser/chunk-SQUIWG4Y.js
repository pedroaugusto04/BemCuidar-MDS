import{a as R}from"./chunk-T5WPZOBY.js";import{C as d,E as A,G as T,a as M,o as y}from"./chunk-HMFDHAYE.js";import{$ as C,Cb as D,Ib as f,Lb as S,Mb as F,Oa as k,Ob as b,Sa as o,Y as x,Z as m,ba as I,fa as u,ga as v,hb as g,ic as E,jb as s,mb as _,pb as n,qb as r,rb as h,zb as p}from"./chunk-DCVUPDRO.js";var K=(()=>{let i=class i{};i.\u0275fac=function(c){return new(c||i)},i.\u0275mod=v({type:i}),i.\u0275inj=m({imports:[d,E,d]});let t=i;return t})();var L=new C("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var Li=(()=>{let i=class i{};i.\u0275fac=function(c){return new(c||i)},i.\u0275mod=v({type:i}),i.\u0275inj=m({providers:[A,{provide:L,useValue:{separatorKeyCodes:[13]}}],imports:[d,T,d]});let t=i;return t})();function V(t,i){if(t&1&&(n(0,"div",4),h(1,"app-star-rating",5),r()),t&2){let l=p(2);o(),s("providerId",l.providerId)("active",!0)}}function N(t,i){if(t&1&&(n(0,"div",4),h(1,"app-star-rating",5),r()),t&2){let l=p(2);o(),s("providerId",l.providerId)("active",!1)}}function Q(t,i){if(t&1&&g(0,V,2,2,"div",4)(1,N,2,2),t&2){let l=p();_(0,l.providerFavorited?0:1)}}var Qi=(()=>{let i=class i{};i.\u0275fac=function(c){return new(c||i)},i.\u0275cmp=u({type:i,selectors:[["app-card-service-provider"]],inputs:{providerId:"providerId",providerName:"providerName",providerServiceDescription:"providerServiceDescription",providerAge:"providerAge",providerCountry:"providerCountry",providerState:"providerState",providerCity:"providerCity",providerPhoto:"providerPhoto",providerFavorited:"providerFavorited",discover:"discover"},standalone:!0,features:[b],decls:9,vars:8,consts:[[1,"provider"],["mat-card-image","",1,"provider-img",3,"src","alt"],[1,"info"],[1,"provider-info"],[1,"rating"],[3,"providerId","active"]],template:function(c,a){c&1&&(n(0,"div",0),h(1,"img",1),n(2,"div",2)(3,"div",3)(4,"h2"),f(5),r(),n(6,"h4"),f(7),r()(),g(8,Q,2,1),r()()),c&2&&(o(),D("alt",a.providerName),s("src",a.providerPhoto?a.providerPhoto:"assets/imgs/default_img.jpeg",k),o(4),S("",a.providerName," (",a.providerAge," anos)"),o(2),F("",a.providerCountry," - ",a.providerState," - ",a.providerCity,""),o(),_(8,a.discover?8:-1))},dependencies:[R],styles:[".provider[_ngcontent-%COMP%]{padding-right:2rem;padding-left:2rem;padding-bottom:2rem;display:flex;flex-direction:column;height:25rem}.info[_ngcontent-%COMP%]{display:inline-flex;height:100%;width:100%}.provider-img[_ngcontent-%COMP%]{width:100%;height:80%;object-fit:cover}.provider-info[_ngcontent-%COMP%]{width:80%;height:20%}.rating[_ngcontent-%COMP%]{padding-top:1rem}h4[_ngcontent-%COMP%]{font-weight:400}"]});let t=i;return t})();var Ui=(()=>{let i=class i{constructor(e){this.httpClient=e,this.API=y.baseUrl}getProviders(){let e=new URL(y.getApiProviders,this.API).toString();return this.httpClient.get(e)}getFavoritedProviders(){let e=new URL(y.getApiFavoritedProviders,this.API).toString();return this.httpClient.get(e)}};i.\u0275fac=function(c){return new(c||i)(I(M))},i.\u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();export{K as a,Li as b,Qi as c,Ui as d};
