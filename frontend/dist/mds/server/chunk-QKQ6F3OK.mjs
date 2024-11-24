import './polyfills.server.mjs';
import{A as g1,C as x1,b as d1}from"./chunk-J4OVULGT.mjs";import{Ca as z1,Da as v1,Ea as P2,H as A2,I as f1,Ja as V1,Ka as h1,O as J,P as l1,Pa as M1,Q as o1,Ra as p1,S as m2,Ua as u1,Va as C1,Wb as L1,_ as t1,gb as Z,la as m1,pa as b,va as H1}from"./chunk-T7GZVMYR.mjs";function N1(c,a){var r=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),r.push.apply(r,e)}return r}function t(c){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?N1(Object(r),!0).forEach(function(e){u(c,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(r)):N1(Object(r)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(r,e))})}return c}function g2(c){"@babel/helpers - typeof";return g2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},g2(c)}function y3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function b1(c,a){for(var r=0;r<a.length;r++){var e=a[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function A3(c,a,r){return a&&b1(c.prototype,a),r&&b1(c,r),Object.defineProperty(c,"prototype",{writable:!1}),c}function u(c,a,r){return a in c?Object.defineProperty(c,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):c[a]=r,c}function Y2(c,a){return T3(c)||F3(c,a)||K1(c,a)||R3()}function l2(c){return P3(c)||B3(c)||K1(c)||D3()}function P3(c){if(Array.isArray(c))return R2(c)}function T3(c){if(Array.isArray(c))return c}function B3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function F3(c,a){var r=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(r!=null){var e=[],s=!0,i=!1,n,f;try{for(r=r.call(c);!(s=(n=r.next()).done)&&(e.push(n.value),!(a&&e.length===a));s=!0);}catch(l){i=!0,f=l}finally{try{!s&&r.return!=null&&r.return()}finally{if(i)throw f}}return e}}function K1(c,a){if(c){if(typeof c=="string")return R2(c,a);var r=Object.prototype.toString.call(c).slice(8,-1);if(r==="Object"&&c.constructor&&(r=c.constructor.name),r==="Map"||r==="Set")return Array.from(c);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R2(c,a)}}function R2(c,a){(a==null||a>c.length)&&(a=c.length);for(var r=0,e=new Array(a);r<a;r++)e[r]=c[r];return e}function D3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var S1=function(){},$2={},J1={},Z1=null,c3={mark:S1,measure:S1};try{typeof window<"u"&&($2=window),typeof document<"u"&&(J1=document),typeof MutationObserver<"u"&&(Z1=MutationObserver),typeof performance<"u"&&(c3=performance)}catch{}var E3=$2.navigator||{},k1=E3.userAgent,w1=k1===void 0?"":k1,E=$2,M=J1,y1=Z1,H2=c3,L6=!!E.document,F=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",a3=~w1.indexOf("MSIE")||~w1.indexOf("Trident/"),z2,v2,V2,h2,M2,P="___FONT_AWESOME___",E2=16,e3="fa",r3="svg-inline--fa",j="data-fa-i2svg",U2="data-fa-pseudo-element",U3="data-fa-pseudo-element-pending",Q2="data-prefix",K2="data-icon",A1="fontawesome-i2svg",I3="async",O3=["HTML","HEAD","STYLE","SCRIPT"],s3=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),h="classic",p="sharp",J2=[h,p];function o2(c){return new Proxy(c,{get:function(r,e){return e in r?r[e]:r[h]}})}var r2=o2((z2={},u(z2,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),u(z2,p,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),z2)),s2=o2((v2={},u(v2,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),u(v2,p,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),v2)),i2=o2((V2={},u(V2,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),u(V2,p,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),V2)),q3=o2((h2={},u(h2,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),u(h2,p,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),h2)),W3=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,i3="fa-layers-text",G3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,j3=o2((M2={},u(M2,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),u(M2,p,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),M2)),n3=[1,2,3,4,5,6,7,8,9,10],_3=n3.concat([11,12,13,14,15,16,17,18,19,20]),X3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],W={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},n2=new Set;Object.keys(s2[h]).map(n2.add.bind(n2));Object.keys(s2[p]).map(n2.add.bind(n2));var Y3=[].concat(J2,l2(n2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",W.GROUP,W.SWAP_OPACITY,W.PRIMARY,W.SECONDARY]).concat(n3.map(function(c){return"".concat(c,"x")})).concat(_3.map(function(c){return"w-".concat(c)})),a2=E.FontAwesomeConfig||{};function $3(c){var a=M.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Q3(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}M&&typeof M.querySelector=="function"&&(P1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],P1.forEach(function(c){var a=Y2(c,2),r=a[0],e=a[1],s=Q3($3(r));s!=null&&(a2[e]=s)}));var P1,f3={styleDefault:"solid",familyDefault:"classic",cssPrefix:e3,replacementClass:r3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};a2.familyPrefix&&(a2.cssPrefix=a2.familyPrefix);var Q=t(t({},f3),a2);Q.autoReplaceSvg||(Q.observeMutations=!1);var H={};Object.keys(f3).forEach(function(c){Object.defineProperty(H,c,{enumerable:!0,set:function(r){Q[c]=r,e2.forEach(function(e){return e(H)})},get:function(){return Q[c]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(a){Q.cssPrefix=a,e2.forEach(function(r){return r(H)})},get:function(){return Q.cssPrefix}});E.FontAwesomeConfig=H;var e2=[];function K3(c){return e2.push(c),function(){e2.splice(e2.indexOf(c),1)}}var R=E2,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function J3(c){if(!(!c||!F)){var a=M.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var r=M.head.childNodes,e=null,s=r.length-1;s>-1;s--){var i=r[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=i)}return M.head.insertBefore(a,e),c}}var Z3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function f2(){for(var c=12,a="";c-- >0;)a+=Z3[Math.random()*62|0];return a}function K(c){for(var a=[],r=(c||[]).length>>>0;r--;)a[r]=c[r];return a}function Z2(c){return c.classList?K(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function l3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function c4(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,'="').concat(l3(c[r]),'" ')},"").trim()}function b2(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,": ").concat(c[r].trim(),";")},"")}function c1(c){return c.size!==A.size||c.x!==A.x||c.y!==A.y||c.rotate!==A.rotate||c.flipX||c.flipY}function a4(c){var a=c.transform,r=c.containerWidth,e=c.iconWidth,s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},m={transform:"translate(".concat(e/2*-1," -256)")};return{outer:s,inner:l,path:m}}function e4(c){var a=c.transform,r=c.width,e=r===void 0?E2:r,s=c.height,i=s===void 0?E2:s,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&a3?l+="translate(".concat(a.x/R-e/2,"em, ").concat(a.y/R-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/R,"em), calc(-50% + ").concat(a.y/R,"em)) "):l+="translate(".concat(a.x/R,"em, ").concat(a.y/R,"em) "),l+="scale(".concat(a.size/R*(a.flipX?-1:1),", ").concat(a.size/R*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var r4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function o3(){var c=e3,a=r3,r=H.cssPrefix,e=H.replacementClass,s=r4;if(r!==c||e!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(r,"-")).replace(n,"--".concat(r,"-")).replace(f,".".concat(e))}return s}var T1=!1;function T2(){H.autoAddCss&&!T1&&(J3(o3()),T1=!0)}var s4={mixout:function(){return{dom:{css:o3,insertCss:T2}}},hooks:function(){return{beforeDOMElementCreation:function(){T2()},beforeI2svg:function(){T2()}}}},T=E||{};T[P]||(T[P]={});T[P].styles||(T[P].styles={});T[P].hooks||(T[P].hooks={});T[P].shims||(T[P].shims=[]);var k=T[P],t3=[],i4=function c(){M.removeEventListener("DOMContentLoaded",c),x2=1,t3.map(function(a){return a()})},x2=!1;F&&(x2=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),x2||M.addEventListener("DOMContentLoaded",i4));function n4(c){F&&(x2?setTimeout(c,0):t3.push(c))}function t2(c){var a=c.tag,r=c.attributes,e=r===void 0?{}:r,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?l3(c):"<".concat(a," ").concat(c4(e),">").concat(i.map(t2).join(""),"</").concat(a,">")}function B1(c,a,r){if(c&&c[a]&&c[a][r])return{prefix:a,iconName:r,icon:c[a][r]}}var f4=function(a,r){return function(e,s,i,n){return a.call(r,e,s,i,n)}},B2=function(a,r,e,s){var i=Object.keys(a),n=i.length,f=s!==void 0?f4(r,s):r,l,m,o;for(e===void 0?(l=1,o=a[i[0]]):(l=0,o=e);l<n;l++)m=i[l],o=f(o,a[m],m,a);return o};function l4(c){for(var a=[],r=0,e=c.length;r<e;){var s=c.charCodeAt(r++);if(s>=55296&&s<=56319&&r<e){var i=c.charCodeAt(r++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),r--)}else a.push(s)}return a}function I2(c){var a=l4(c);return a.length===1?a[0].toString(16):null}function o4(c,a){var r=c.length,e=c.charCodeAt(a),s;return e>=55296&&e<=56319&&r>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(e-55296)*1024+s-56320+65536:e}function F1(c){return Object.keys(c).reduce(function(a,r){var e=c[r],s=!!e.icon;return s?a[e.iconName]=e.icon:a[r]=e,a},{})}function O2(c,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,s=e===void 0?!1:e,i=F1(a);typeof k.hooks.addPack=="function"&&!s?k.hooks.addPack(c,F1(a)):k.styles[c]=t(t({},k.styles[c]||{}),i),c==="fas"&&O2("fa",a)}var p2,u2,C2,X=k.styles,t4=k.shims,m4=(p2={},u(p2,h,Object.values(i2[h])),u(p2,p,Object.values(i2[p])),p2),a1=null,m3={},H3={},z3={},v3={},V3={},H4=(u2={},u(u2,h,Object.keys(r2[h])),u(u2,p,Object.keys(r2[p])),u2);function z4(c){return~Y3.indexOf(c)}function v4(c,a){var r=a.split("-"),e=r[0],s=r.slice(1).join("-");return e===c&&s!==""&&!z4(s)?s:null}var h3=function(){var a=function(i){return B2(X,function(n,f,l){return n[l]=B2(f,i,{}),n},{})};m3=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){s[l.toString(16)]=n})}return s}),H3=a(function(s,i,n){if(s[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){s[l]=n})}return s}),V3=a(function(s,i,n){var f=i[2];return s[n]=n,f.forEach(function(l){s[l]=n}),s});var r="far"in X||H.autoFetchSvg,e=B2(t4,function(s,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!r&&(f="fas"),typeof n=="string"&&(s.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:f,iconName:l}),s},{names:{},unicodes:{}});z3=e.names,v3=e.unicodes,a1=S2(H.styleDefault,{family:H.familyDefault})};K3(function(c){a1=S2(c.styleDefault,{family:H.familyDefault})});h3();function e1(c,a){return(m3[c]||{})[a]}function V4(c,a){return(H3[c]||{})[a]}function G(c,a){return(V3[c]||{})[a]}function M3(c){return z3[c]||{prefix:null,iconName:null}}function h4(c){var a=v3[c],r=e1("fas",c);return a||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function U(){return a1}var r1=function(){return{prefix:null,iconName:null,rest:[]}};function S2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.family,e=r===void 0?h:r,s=r2[e][c],i=s2[e][c]||s2[e][s],n=c in k.styles?c:null;return i||n||null}var D1=(C2={},u(C2,h,Object.keys(i2[h])),u(C2,p,Object.keys(i2[p])),C2);function k2(c){var a,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,s=e===void 0?!1:e,i=(a={},u(a,h,"".concat(H.cssPrefix,"-").concat(h)),u(a,p,"".concat(H.cssPrefix,"-").concat(p)),a),n=null,f=h;(c.includes(i[h])||c.some(function(m){return D1[h].includes(m)}))&&(f=h),(c.includes(i[p])||c.some(function(m){return D1[p].includes(m)}))&&(f=p);var l=c.reduce(function(m,o){var z=v4(H.cssPrefix,o);if(X[o]?(o=m4[f].includes(o)?q3[f][o]:o,n=o,m.prefix=o):H4[f].indexOf(o)>-1?(n=o,m.prefix=S2(o,{family:f})):z?m.iconName=z:o!==H.replacementClass&&o!==i[h]&&o!==i[p]&&m.rest.push(o),!s&&m.prefix&&m.iconName){var v=n==="fa"?M3(m.iconName):{},V=G(m.prefix,m.iconName);v.prefix&&(n=null),m.iconName=v.iconName||V||m.iconName,m.prefix=v.prefix||m.prefix,m.prefix==="far"&&!X.far&&X.fas&&!H.autoFetchSvg&&(m.prefix="fas")}return m},r1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===p&&(X.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=G(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=U()||"fas"),l}var M4=function(){function c(){y3(this,c),this.definitions={}}return A3(c,[{key:"add",value:function(){for(var r=this,e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){r.definitions[f]=t(t({},r.definitions[f]||{}),n[f]),O2(f,n[f]);var l=i2[h][f];l&&O2(l,n[f]),h3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var s=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(s).map(function(i){var n=s[i],f=n.prefix,l=n.iconName,m=n.icon,o=m[2];r[f]||(r[f]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(r[f][z]=m)}),r[f][l]=m}),r}}]),c}(),R1=[],Y={},$={},p4=Object.keys($);function u4(c,a){var r=a.mixoutsTo;return R1=c,Y={},Object.keys($).forEach(function(e){p4.indexOf(e)===-1&&delete $[e]}),R1.forEach(function(e){var s=e.mixout?e.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(r[n]=s[n]),g2(s[n])==="object"&&Object.keys(s[n]).forEach(function(f){r[n]||(r[n]={}),r[n][f]=s[n][f]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(n){Y[n]||(Y[n]=[]),Y[n].push(i[n])})}e.provides&&e.provides($)}),r}function q2(c,a){for(var r=arguments.length,e=new Array(r>2?r-2:0),s=2;s<r;s++)e[s-2]=arguments[s];var i=Y[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function _(c){for(var a=arguments.length,r=new Array(a>1?a-1:0),e=1;e<a;e++)r[e-1]=arguments[e];var s=Y[c]||[];s.forEach(function(i){i.apply(null,r)})}function B(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return $[c]?$[c].apply(null,a):void 0}function W2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,r=c.prefix||U();if(a)return a=G(r,a)||a,B1(p3.definitions,r,a)||B1(k.styles,r,a)}var p3=new M4,C4=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,_("noAuto")},L4={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(_("beforeI2svg",a),B("pseudoElements2svg",a),B("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,n4(function(){g4({autoReplaceSvgRoot:r}),_("watch",a)})}},d4={icon:function(a){if(a===null)return null;if(g2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:G(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var r=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=S2(a[0]);return{prefix:e,iconName:G(e,r)||r}}if(typeof a=="string"&&(a.indexOf("".concat(H.cssPrefix,"-"))>-1||a.match(W3))){var s=k2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||U(),iconName:G(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=U();return{prefix:i,iconName:G(i,a)||a}}}},x={noAuto:C4,config:H,dom:L4,parse:d4,library:p3,findIconDefinition:W2,toHtml:t2},g4=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot,e=r===void 0?M:r;(Object.keys(k.styles).length>0||H.autoFetchSvg)&&F&&H.autoReplaceSvg&&x.dom.i2svg({node:e})};function w2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return t2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(F){var e=M.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function x4(c){var a=c.children,r=c.main,e=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(c1(n)&&r.found&&!e.found){var f=r.width,l=r.height,m={x:f/l/2,y:.5};s.style=b2(t(t({},i),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function N4(c){var a=c.prefix,r=c.iconName,e=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(H.cssPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},s),{},{id:n}),children:e}]}]}function s1(c){var a=c.icons,r=a.main,e=a.mask,s=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,m=c.maskId,o=c.titleId,z=c.extra,v=c.watchable,V=v===void 0?!1:v,L=e.found?e:r,N=L.width,S=L.height,w=s==="fak",C=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(function(D){return z.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(z.classes).join(" "),d={children:[],attributes:t(t({},z.attributes),{},{"data-prefix":s,"data-icon":i,class:C,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(S)})},y=w&&!~z.classes.indexOf("fa-fw")?{width:"".concat(N/S*16*.0625,"em")}:{};V&&(d.attributes[j]=""),l&&(d.children.push({tag:"title",attributes:{id:d.attributes["aria-labelledby"]||"title-".concat(o||f2())},children:[l]}),delete d.attributes.title);var g=t(t({},d),{},{prefix:s,iconName:i,main:r,mask:e,maskId:m,transform:n,symbol:f,styles:t(t({},y),z.styles)}),O=e.found&&r.found?B("generateAbstractMask",g)||{children:[],attributes:{}}:B("generateAbstractIcon",g)||{children:[],attributes:{}},q=O.children,y2=O.attributes;return g.children=q,g.attributes=y2,f?N4(g):x4(g)}function E1(c){var a=c.content,r=c.width,e=c.height,s=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,m=t(t(t({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(m[j]="");var o=t({},n.styles);c1(s)&&(o.transform=e4({transform:s,startCentered:!0,width:r,height:e}),o["-webkit-transform"]=o.transform);var z=b2(o);z.length>0&&(m.style=z);var v=[];return v.push({tag:"span",attributes:m,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function b4(c){var a=c.content,r=c.title,e=c.extra,s=t(t(t({},e.attributes),r?{title:r}:{}),{},{class:e.classes.join(" ")}),i=b2(e.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),r&&n.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),n}var F2=k.styles;function G2(c){var a=c[0],r=c[1],e=c.slice(4),s=Y2(e,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(W.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(W.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(W.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:r,icon:n}}var S4={found:!1,width:512,height:512};function k4(c,a){!s3&&!H.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function j2(c,a){var r=a;return a==="fa"&&H.styleDefault!==null&&(a=U()),new Promise(function(e,s){var i={found:!1,width:512,height:512,icon:B("missingIconAbstract")||{}};if(r==="fa"){var n=M3(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&F2[a]&&F2[a][c]){var f=F2[a][c];return e(G2(f))}k4(c,a),e(t(t({},S4),{},{icon:H.showMissingIcons&&c?B("missingIconAbstract")||{}:{}}))})}var U1=function(){},_2=H.measurePerformance&&H2&&H2.mark&&H2.measure?H2:{mark:U1,measure:U1},c2='FA "6.5.2"',w4=function(a){return _2.mark("".concat(c2," ").concat(a," begins")),function(){return u3(a)}},u3=function(a){_2.mark("".concat(c2," ").concat(a," ends")),_2.measure("".concat(c2," ").concat(a),"".concat(c2," ").concat(a," begins"),"".concat(c2," ").concat(a," ends"))},i1={begin:w4,end:u3},L2=function(){};function I1(c){var a=c.getAttribute?c.getAttribute(j):null;return typeof a=="string"}function y4(c){var a=c.getAttribute?c.getAttribute(Q2):null,r=c.getAttribute?c.getAttribute(K2):null;return a&&r}function A4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(H.replacementClass)}function P4(){if(H.autoReplaceSvg===!0)return d2.replace;var c=d2[H.autoReplaceSvg];return c||d2.replace}function T4(c){return M.createElementNS("http://www.w3.org/2000/svg",c)}function B4(c){return M.createElement(c)}function C3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.ceFn,e=r===void 0?c.tag==="svg"?T4:B4:r;if(typeof c=="string")return M.createTextNode(c);var s=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(C3(n,{ceFn:e}))}),s}function F4(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var d2={replace:function(a){var r=a[0];if(r.parentNode)if(a[1].forEach(function(s){r.parentNode.insertBefore(C3(s),r)}),r.getAttribute(j)===null&&H.keepOriginalSource){var e=M.createComment(F4(r));r.parentNode.replaceChild(e,r)}else r.remove()},nest:function(a){var r=a[0],e=a[1];if(~Z2(r).indexOf(H.replacementClass))return d2.replace(a);var s=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(f,l){return l===H.replacementClass||l.match(s)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",i.toNode.join(" "))}var n=e.map(function(f){return t2(f)}).join(`
`);r.setAttribute(j,""),r.innerHTML=n}};function O1(c){c()}function L3(c,a){var r=typeof a=="function"?a:L2;if(c.length===0)r();else{var e=O1;H.mutateApproach===I3&&(e=E.requestAnimationFrame||O1),e(function(){var s=P4(),i=i1.begin("mutate");c.map(s),i(),r()})}}var n1=!1;function d3(){n1=!0}function X2(){n1=!1}var N2=null;function q1(c){if(y1&&H.observeMutations){var a=c.treeCallback,r=a===void 0?L2:a,e=c.nodeCallback,s=e===void 0?L2:e,i=c.pseudoElementsCallback,n=i===void 0?L2:i,f=c.observeMutationsRoot,l=f===void 0?M:f;N2=new y1(function(m){if(!n1){var o=U();K(m).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!I1(z.addedNodes[0])&&(H.searchPseudoElements&&n(z.target),r(z.target)),z.type==="attributes"&&z.target.parentNode&&H.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&I1(z.target)&&~X3.indexOf(z.attributeName))if(z.attributeName==="class"&&y4(z.target)){var v=k2(Z2(z.target)),V=v.prefix,L=v.iconName;z.target.setAttribute(Q2,V||o),L&&z.target.setAttribute(K2,L)}else A4(z.target)&&s(z.target)})}}),F&&N2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function D4(){N2&&N2.disconnect()}function R4(c){var a=c.getAttribute("style"),r=[];return a&&(r=a.split(";").reduce(function(e,s){var i=s.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(e[n]=f.join(":").trim()),e},{})),r}function E4(c){var a=c.getAttribute("data-prefix"),r=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",s=k2(Z2(c));return s.prefix||(s.prefix=U()),a&&r&&(s.prefix=a,s.iconName=r),s.iconName&&s.prefix||(s.prefix&&e.length>0&&(s.iconName=V4(s.prefix,c.innerText)||e1(s.prefix,I2(c.innerText))),!s.iconName&&H.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function U4(c){var a=K(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),r=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return H.autoA11y&&(r?a["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(e||f2()):(a["aria-hidden"]="true",a.focusable="false")),a}function I4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function W1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=E4(c),e=r.iconName,s=r.prefix,i=r.rest,n=U4(c),f=q2("parseNodeAttributes",{},c),l=a.styleParser?R4(c):[];return t({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var O4=k.styles;function g3(c){var a=H.autoReplaceSvg==="nest"?W1(c,{styleParser:!1}):W1(c);return~a.extra.classes.indexOf(i3)?B("generateLayersText",c,a):B("generateSvgReplacementMutation",c,a)}var I=new Set;J2.map(function(c){I.add("fa-".concat(c))});Object.keys(r2[h]).map(I.add.bind(I));Object.keys(r2[p]).map(I.add.bind(I));I=l2(I);function G1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var r=M.documentElement.classList,e=function(z){return r.add("".concat(A1,"-").concat(z))},s=function(z){return r.remove("".concat(A1,"-").concat(z))},i=H.autoFetchSvg?I:J2.map(function(o){return"fa-".concat(o)}).concat(Object.keys(O4));i.includes("fa")||i.push("fa");var n=[".".concat(i3,":not([").concat(j,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(j,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=K(c.querySelectorAll(n))}catch{}if(f.length>0)e("pending"),s("complete");else return Promise.resolve();var l=i1.begin("onTree"),m=f.reduce(function(o,z){try{var v=g3(z);v&&o.push(v)}catch(V){s3||V.name==="MissingIcon"&&console.error(V)}return o},[]);return new Promise(function(o,z){Promise.all(m).then(function(v){L3(v,function(){e("active"),e("complete"),s("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(v){l(),z(v)})})}function q4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;g3(c).then(function(r){r&&L3([r],a)})}function W4(c){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:W2(a||{}),s=r.mask;return s&&(s=(s||{}).icon?s:W2(s||{})),c(e,t(t({},r),{},{mask:s}))}}var G4=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.transform,s=e===void 0?A:e,i=r.symbol,n=i===void 0?!1:i,f=r.mask,l=f===void 0?null:f,m=r.maskId,o=m===void 0?null:m,z=r.title,v=z===void 0?null:z,V=r.titleId,L=V===void 0?null:V,N=r.classes,S=N===void 0?[]:N,w=r.attributes,C=w===void 0?{}:w,d=r.styles,y=d===void 0?{}:d;if(a){var g=a.prefix,O=a.iconName,q=a.icon;return w2(t({type:"icon"},a),function(){return _("beforeDOMElementCreation",{iconDefinition:a,params:r}),H.autoA11y&&(v?C["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(L||f2()):(C["aria-hidden"]="true",C.focusable="false")),s1({icons:{main:G2(q),mask:l?G2(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:O,transform:t(t({},A),s),symbol:n,title:v,maskId:o,titleId:L,extra:{attributes:C,styles:y,classes:S}})})}},j4={mixout:function(){return{icon:W4(G4)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=G1,r.nodeCallback=q4,r}}},provides:function(a){a.i2svg=function(r){var e=r.node,s=e===void 0?M:e,i=r.callback,n=i===void 0?function(){}:i;return G1(s,n)},a.generateSvgReplacementMutation=function(r,e){var s=e.iconName,i=e.title,n=e.titleId,f=e.prefix,l=e.transform,m=e.symbol,o=e.mask,z=e.maskId,v=e.extra;return new Promise(function(V,L){Promise.all([j2(s,f),o.iconName?j2(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var S=Y2(N,2),w=S[0],C=S[1];V([r,s1({icons:{main:w,mask:C},prefix:f,iconName:s,transform:l,symbol:m,maskId:z,title:i,titleId:n,extra:v,watchable:!0})])}).catch(L)})},a.generateAbstractIcon=function(r){var e=r.children,s=r.attributes,i=r.main,n=r.transform,f=r.styles,l=b2(f);l.length>0&&(s.style=l);var m;return c1(n)&&(m=B("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),e.push(m||i.icon),{children:e,attributes:s}}}},_4={mixout:function(){return{layer:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.classes,i=s===void 0?[]:s;return w2({type:"layer"},function(){_("beforeDOMElementCreation",{assembler:r,params:e});var n=[];return r(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(l2(i)).join(" ")},children:n}]})}}}},X4={mixout:function(){return{counter:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.title,i=s===void 0?null:s,n=e.classes,f=n===void 0?[]:n,l=e.attributes,m=l===void 0?{}:l,o=e.styles,z=o===void 0?{}:o;return w2({type:"counter",content:r},function(){return _("beforeDOMElementCreation",{content:r,params:e}),b4({content:r.toString(),title:i,extra:{attributes:m,styles:z,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(l2(f))}})})}}}},Y4={mixout:function(){return{text:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,i=s===void 0?A:s,n=e.title,f=n===void 0?null:n,l=e.classes,m=l===void 0?[]:l,o=e.attributes,z=o===void 0?{}:o,v=e.styles,V=v===void 0?{}:v;return w2({type:"text",content:r},function(){return _("beforeDOMElementCreation",{content:r,params:e}),E1({content:r,transform:t(t({},A),i),title:f,extra:{attributes:z,styles:V,classes:["".concat(H.cssPrefix,"-layers-text")].concat(l2(m))}})})}}},provides:function(a){a.generateLayersText=function(r,e){var s=e.title,i=e.transform,n=e.extra,f=null,l=null;if(a3){var m=parseInt(getComputedStyle(r).fontSize,10),o=r.getBoundingClientRect();f=o.width/m,l=o.height/m}return H.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([r,E1({content:r.innerHTML,width:f,height:l,transform:i,title:s,extra:n,watchable:!0})])}}},$4=new RegExp('"',"ug"),j1=[1105920,1112319];function Q4(c){var a=c.replace($4,""),r=o4(a,0),e=r>=j1[0]&&r<=j1[1],s=a.length===2?a[0]===a[1]:!1;return{value:I2(s?a[0]:a),isSecondary:e||s}}function _1(c,a){var r="".concat(U3).concat(a.replace(":","-"));return new Promise(function(e,s){if(c.getAttribute(r)!==null)return e();var i=K(c.children),n=i.filter(function(q){return q.getAttribute(U2)===a})[0],f=E.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(G3),m=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),e();if(l&&o!=="none"&&o!==""){var z=f.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?p:h,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?s2[v][l[2].toLowerCase()]:j3[v][m],L=Q4(z),N=L.value,S=L.isSecondary,w=l[0].startsWith("FontAwesome"),C=e1(V,N),d=C;if(w){var y=h4(N);y.iconName&&y.prefix&&(C=y.iconName,V=y.prefix)}if(C&&!S&&(!n||n.getAttribute(Q2)!==V||n.getAttribute(K2)!==d)){c.setAttribute(r,d),n&&c.removeChild(n);var g=I4(),O=g.extra;O.attributes[U2]=a,j2(C,V).then(function(q){var y2=s1(t(t({},g),{},{icons:{main:q,mask:r1()},prefix:V,iconName:d,extra:O,watchable:!0})),D=M.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(D,c.firstChild):c.appendChild(D),D.outerHTML=y2.map(function(w3){return t2(w3)}).join(`
`),c.removeAttribute(r),e()}).catch(s)}else e()}else e()})}function K4(c){return Promise.all([_1(c,"::before"),_1(c,"::after")])}function J4(c){return c.parentNode!==document.head&&!~O3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(U2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function X1(c){if(F)return new Promise(function(a,r){var e=K(c.querySelectorAll("*")).filter(J4).map(K4),s=i1.begin("searchPseudoElements");d3(),Promise.all(e).then(function(){s(),X2(),a()}).catch(function(){s(),X2(),r()})})}var Z4={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=X1,r}}},provides:function(a){a.pseudoElements2svg=function(r){var e=r.node,s=e===void 0?M:e;H.searchPseudoElements&&X1(s)}}},Y1=!1,c6={mixout:function(){return{dom:{unwatch:function(){d3(),Y1=!0}}}},hooks:function(){return{bootstrap:function(){q1(q2("mutationObserverCallbacks",{}))},noAuto:function(){D4()},watch:function(r){var e=r.observeMutationsRoot;Y1?X2():q1(q2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},$1=function(a){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,s){var i=s.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return e.flipX=!0,e;if(n&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(n){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},r)},a6={mixout:function(){return{parse:{transform:function(r){return $1(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,e){var s=e.getAttribute("data-fa-transform");return s&&(r.transform=$1(s)),r}}},provides:function(a){a.generateAbstractTransformGrouping=function(r){var e=r.main,s=r.transform,i=r.containerWidth,n=r.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),m="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),o="rotate(".concat(s.rotate," 0 0)"),z={transform:"".concat(l," ").concat(m," ").concat(o)},v={transform:"translate(".concat(n/2*-1," -256)")},V={outer:f,inner:z,path:v};return{tag:"g",attributes:t({},V.outer),children:[{tag:"g",attributes:t({},V.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:t(t({},e.icon.attributes),V.path)}]}]}}}},D2={x:0,y:0,width:"100%",height:"100%"};function Q1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function e6(c){return c.tag==="g"?c.children:[c]}var r6={hooks:function(){return{parseNodeAttributes:function(r,e){var s=e.getAttribute("data-fa-mask"),i=s?k2(s.split(" ").map(function(n){return n.trim()})):r1();return i.prefix||(i.prefix=U()),r.mask=i,r.maskId=e.getAttribute("data-fa-mask-id"),r}}},provides:function(a){a.generateAbstractMask=function(r){var e=r.children,s=r.attributes,i=r.main,n=r.mask,f=r.maskId,l=r.transform,m=i.width,o=i.icon,z=n.width,v=n.icon,V=a4({transform:l,containerWidth:z,iconWidth:m}),L={tag:"rect",attributes:t(t({},D2),{},{fill:"white"})},N=o.children?{children:o.children.map(Q1)}:{},S={tag:"g",attributes:t({},V.inner),children:[Q1(t({tag:o.tag,attributes:t(t({},o.attributes),V.path)},N))]},w={tag:"g",attributes:t({},V.outer),children:[S]},C="mask-".concat(f||f2()),d="clip-".concat(f||f2()),y={tag:"mask",attributes:t(t({},D2),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,w]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:e6(v)},y]};return e.push(g,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(C,")")},D2)}),{children:e,attributes:s}}}},s6={provides:function(a){var r=!1;E.matchMedia&&(r=E.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:t(t({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=t(t({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:t(t({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||f.children.push({tag:"animate",attributes:t(t({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:t(t({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:t(t({},n),{},{values:"1;0;0;0;0;1;"})}]}),r||e.push({tag:"path",attributes:t(t({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},i6={hooks:function(){return{parseNodeAttributes:function(r,e){var s=e.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return r.symbol=i,r}}}},n6=[s4,j4,_4,X4,Y4,Z4,c6,a6,r6,s6,i6];u4(n6,{mixoutsTo:x});var d6=x.noAuto,g6=x.config,x6=x.library,N6=x.dom,x3=x.parse,b6=x.findIconDefinition,S6=x.toHtml,N3=x.icon,k6=x.layer,f6=x.text,l6=x.counter;var t6=["*"],m6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},H6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},z6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(r=>a[r]?r:null).filter(r=>r)},v6=c=>c.prefix!==void 0&&c.iconName!==void 0,V6=(c,a)=>v6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},h6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=A2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),M6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let s of e){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let i of s.icon[2])typeof i=="string"&&(this.definitions[s.prefix][i]=s)}}addIconPacks(...e){for(let s of e){let i=Object.keys(s).map(n=>s[n]);this.addIcons(...i)}}getIconDefinition(e,s){return e in this.definitions&&s in this.definitions[e]?this.definitions[e][s]:null}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=A2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),p6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(s){return new(s||a)},a.\u0275dir=o1({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[m2]});let c=a;return c})(),u6=(()=>{let a=class a{constructor(e,s){this.renderer=e,this.elementRef=s}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(s){return new(s||a)(b(H1),b(t1))},a.\u0275cmp=J({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[m2,Z],ngContentSelectors:t6,decls:1,vars:0,template:function(s,i){s&1&&(u1(),C1(0))},encapsulation:2});let c=a;return c})(),b3=(()=>{let a=class a{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,s,i,n,f){this.sanitizer=e,this.config=s,this.iconLibrary=i,this.stackItem=n,this.classes=[],f!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){H6();return}if(e){let s=this.icon!=null?this.icon:this.config.fallbackIcon,i=this.findIconDefinition(s);if(i!=null){let n=this.buildParams();this.renderIcon(i,n)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let s=V6(e,this.config.defaultPrefix);if("icon"in s)return s;let i=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return i??(m6(s),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},s=typeof this.transform=="string"?x3.transform(this.transform):this.transform;return{title:this.title,transform:s,classes:[...z6(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,s){let i=N3(e,s);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}};a.\u0275fac=function(s){return new(s||a)(b(L1),b(h6),b(M6),b(p6,8),b(u6,8))},a.\u0275cmp=J({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,i){s&2&&(M1("innerHTML",i.renderedIconHTML,m1),z1("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[m2,Z],decls:0,vars:0,template:function(s,i){},encapsulation:2});let c=a;return c})();var S3=(()=>{let a=class a{};a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=l1({type:a}),a.\u0275inj=f1({});let c=a;return c})();var k3={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]};var I6=(()=>{let a=class a{constructor(e,s,i){this.userService=e,this.snackBar=s,this.cookieService=i,this.faStar=k3}onClick(){this.cookieService.get("token")||this.onError("Fa\xE7a login para favoritar um cuidador!"),this.active?this.unfavorite():this.favorite(),this.active=!this.active}favorite(){this.userService.favoriteProvider(this.providerId).subscribe({next:()=>this.onSuccess("Cuidador favoritado com sucesso!"),error:()=>this.onError("Erro ao favoritar cuidador!")})}unfavorite(){this.userService.unfavoriteProvider(this.providerId).subscribe({next:()=>this.onSuccess("Cuidador desfavoritado com sucesso!"),error:()=>this.onError("Erro ao desfavoritar cuidador!")})}onSuccess(e){this.snackBar.open(e,"X",{duration:1e3,verticalPosition:"top",panelClass:["success-snackbar"]})}onError(e){this.snackBar.open(e,"X",{duration:1e3,verticalPosition:"top",panelClass:["error-snackbar"]})}};a.\u0275fac=function(s){return new(s||a)(b(d1),b(g1),b(x1))},a.\u0275cmp=J({type:a,selectors:[["app-star-rating"]],inputs:{active:"active",providerId:"providerId"},standalone:!0,features:[Z],decls:1,vars:3,consts:[[3,"click","icon"]],template:function(s,i){s&1&&(V1(0,"fa-icon",0),p1("click",function(){return i.onClick()}),h1()),s&2&&(P2("active",i.active),v1("icon",i.faStar))},dependencies:[S3,b3],styles:["fa-icon[_ngcontent-%COMP%]{cursor:pointer;color:#d3d3d3;font-size:2.5rem;transition:color .3 ease-out}fa-icon.active[_ngcontent-%COMP%]{color:gold}"]});let c=a;return c})();export{I6 as a};
