import './polyfills.server.mjs';
import{a as w,b as O,c as T,d as D}from"./chunk-A6JNOWOF.mjs";import"./chunk-QKQ6F3OK.mjs";import"./chunk-GED3TJSF.mjs";import{b as h,c as g,e as x}from"./chunk-VC2TCARJ.mjs";import"./chunk-J4OVULGT.mjs";import{Ba as l,Da as f,Ga as u,Gb as P,Ha as y,Hb as S,Ia as C,Ja as d,Ka as a,La as m,O as s,Wa as i,gb as _,hb as I,ib as M,oa as n,pa as c}from"./chunk-T7GZVMYR.mjs";import"./chunk-VVCT4QZE.mjs";var L=(t,r)=>r.name;function $(t,r){if(t&1&&(d(0,"div",1),m(1,"app-card-service-provider",2),a()),t&2){let p,e=r.$implicit;n(),i("providerId",e.id),i("providerName",e.name),i("providerServiceDescription",e.service_description),i("providerAge",e.age),i("providerCountry",e.country),i("providerState",e.state),i("providerCity",e.city),i("providerPhoto",e.photo),f("providerFavorited",(p=e.favorited)!==null&&p!==void 0?p:!1)("discover",!0)}}function A(t,r){t&1&&y(0,$,2,10,"div",1,L),t&2&&C(r)}var F=(()=>{let r=class r{constructor(e){this.providerService=e}ngOnInit(){this.providers$=this.providerService.getProviders()}};r.\u0275fac=function(o){return new(o||r)(c(D))},r.\u0275cmp=s({type:r,selectors:[["app-list"]],standalone:!0,features:[_],decls:4,vars:3,consts:[[1,"list-elements"],[1,"provider"],[3,"providerId","providerName","providerServiceDescription","providerAge","providerCountry","providerState","providerCity","providerPhoto","providerFavorited","discover"]],template:function(o,E){if(o&1&&(m(0,"app-nav-bar"),d(1,"div",0),l(2,A,2,0),I(3,"async"),a()),o&2){let v;n(2),u(2,(v=M(3,1,E.providers$))?2:-1,v)}},dependencies:[x,T,w,O,g,h,S,P],styles:[".list-elements[_ngcontent-%COMP%]{padding:1.5rem}@media screen and (min-width: 992px){.list-elements[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around}.provider[_ngcontent-%COMP%]{width:33%}}"]});let t=r;return t})();var J=[{path:"",component:F}];export{J as LIST_PROVIDER_ROUTES};