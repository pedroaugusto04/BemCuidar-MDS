import './polyfills.server.mjs';
import{a as K,b as Q}from"./chunk-DMEJCSY3.mjs";import{a as F,b as h,d as j,e as V,g as R,h as D,i as G,j as z,k as q,l as A,m as U,n as X,q as H,r as J}from"./chunk-GED3TJSF.mjs";import{a as I,b as L,d as T,e as B}from"./chunk-VC2TCARJ.mjs";import{A as k,B as N}from"./chunk-J4OVULGT.mjs";import{Ba as g,Da as S,Ga as f,Ja as i,Ka as n,La as u,O as y,Oa as M,Ra as _,T as v,Ta as c,U as x,Wa as w,ab as r,bb as C,gb as b,jc as O,kc as P,oa as m,pa as d}from"./chunk-T7GZVMYR.mjs";import"./chunk-VVCT4QZE.mjs";function Y(t,a){if(t&1&&(i(0,"mat-error"),r(1),n()),t&2){let s=c();m(),C(s.formErrorMessage("email"))}}function Z(t,a){if(t&1&&(i(0,"mat-error"),r(1),n()),t&2){let s=c();m(),C(s.formErrorMessage("password"))}}function $(t,a){if(t&1){let s=M();i(0,"mat-icon",16),_("click",function(){v(s);let e=c();return x(e.onClick())}),r(1,"visibility_off"),n()}}function tt(t,a){if(t&1){let s=M();i(0,"mat-icon",16),_("click",function(){v(s);let e=c();return x(e.onClick())}),r(1,"visibility"),n()}}function et(t,a){if(t&1&&(i(0,"p",13),r(1),n()),t&2){let s=c();m(),C(s.hasError)}}var W=(()=>{let a=class a{constructor(o,e,l,p){this.formBuilder=o,this.loginService=e,this.snackBar=l,this.router=p,this.visibility=!1,this.password="password",this.loading=!1,this.hasError=""}ngOnInit(){this.form=this.formBuilder.group({email:["",[h.required,h.email]],password:["",[h.required]]})}formErrorMessage(o){let e=this.form.get(o);if(e?.hasError("required"))return"Este campo \xE9 necess\xE1rio";if(e?.hasError("email"))return"Endere\xE7o de email inv\xE1lido";if(e?.hasError("whitespace"))return"O campo n\xE3o pode conter apenas espa\xE7os em branco.";if(e?.hasError("minlength"))return"O campo est\xE1 muito curto"}onClick(){this.visibility=!this.visibility,this.password==="text"?this.password="password":this.password==="password"&&(this.password="text")}login(){if(this.form.invalid){this.onError("Preencha os campos corretamente!");return}this.loginService.authenticate(this.form).subscribe({next:o=>{o?this.onSuccess("Login realizado com sucesso!"):this.onError("Dados inv\xE1lidos!")},error:()=>{this.onError("N\xE3o foi poss\xEDvel realizar o login!")}})}onSuccess(o){this.snackBar.open(o,"X",{duration:1e3,verticalPosition:"top",panelClass:["success-snackbar"]}),setTimeout(()=>{this.router.navigateByUrl("/profile")},1e3)}onError(o){this.snackBar.open(o,"X",{duration:1e3,verticalPosition:"top",panelClass:["error-snackbar"]})}};a.\u0275fac=function(e){return new(e||a)(d(z),d(T),d(k),d(O))},a.\u0275cmp=y({type:a,selectors:[["app-login"]],standalone:!0,features:[b],decls:30,vars:6,consts:[[1,"container"],[1,"img-container"],[1,"form-container"],[1,"title-login"],[1,"div-form"],[3,"formGroup"],[1,"msg-login"],[1,"div-campos"],["appearance","outline",1,"input"],["type","email","matInput","","formControlName","email"],["matInput","","formControlName","password",3,"type"],["matSuffix",""],[1,"div-btn-signin"],[1,"error-message"],["mat-raised-button","","color","primary",1,"btn-primary",3,"click"],["routerLink","/register",1,"msg-register"],["matSuffix","",3,"click"]],template:function(e,l){if(e&1&&(u(0,"app-nav-bar"),i(1,"div",0),u(2,"div",1),i(3,"div",2)(4,"h5",3),r(5,"Entre no BemCuidar"),n(),i(6,"div",4)(7,"form",5)(8,"p",6),r(9,"Fa\xE7a login com e-mail"),n(),i(10,"div",7)(11,"mat-form-field",8)(12,"mat-label"),r(13,"E-mail"),n(),u(14,"input",9),g(15,Y,2,1,"mat-error"),n(),i(16,"mat-form-field",8)(17,"mat-label"),r(18,"Senha"),n(),u(19,"input",10),g(20,Z,2,1,"mat-error")(21,$,2,0,"mat-icon",11)(22,tt,2,0),n()(),i(23,"div",12),g(24,et,2,1,"p",13),i(25,"button",14),_("click",function(){return l.login()}),i(26,"span"),r(27,"ENTRAR"),n()()(),i(28,"a",15),r(29," Cadastre-se"),n()()()()()),e&2){let p,E;m(7),S("formGroup",l.form),m(8),f(15,(p=l.form.get("email"))!=null&&p.invalid?15:-1),m(4),w("type",l.password),m(),f(20,(E=l.form.get("password"))!=null&&E.invalid?20:-1),m(),f(21,l.visibility?21:22),m(3),f(24,l.hasError?24:-1)}},dependencies:[P,L,I,J,H,A,U,X,q,R,F,j,V,D,G,Q,K,B,N],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;height:99vh;width:100%}.error-message[_ngcontent-%COMP%]{color:red}.div-campos[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:space-between;gap:1.5rem}a[_ngcontent-%COMP%]{cursor:pointer}h5[_ngcontent-%COMP%]{font-size:1.5rem}.img-container[_ngcontent-%COMP%]{display:none}.form-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column}.msg-login[_ngcontent-%COMP%]{color:var(--Neutral-Colors-Neutral-110, #515255)}.msg-register[_ngcontent-%COMP%]{color:var(--Neutral-Colors-Neutral-110, #515255);text-decoration:none}.div-btn-signin[_ngcontent-%COMP%]{margin-bottom:1.13rem}.div-form[_ngcontent-%COMP%]{display:flex;width:19.5rem;height:16.9375rem;padding-bottom:.1875rem;flex-direction:column;justify-content:center;gap:1.125rem}@media screen and (min-width: 1060px){.container[_ngcontent-%COMP%]{justify-content:center}.img-container[_ngcontent-%COMP%]{display:block}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.form-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:3rem!important;margin-bottom:3rem}.form-container[_ngcontent-%COMP%]{width:70%}.div-form[_ngcontent-%COMP%]{width:32.313rem}}"]});let t=a;return t})();var vt=[{path:"",component:W}];export{vt as LOGIN_ROUTES};
