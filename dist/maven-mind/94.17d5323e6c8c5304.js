"use strict";(self.webpackChunkmaven_mind=self.webpackChunkmaven_mind||[]).push([[94],{2094:(O,d,l)=>{l.r(d),l.d(d,{AuthModule:()=>Y});var m=l(6895),s=l(8616),n=l(433),o=l(1571);function c(e,i){1&e&&(o.TgZ(0,"small"),o._uU(1,"Name is required."),o.qZA())}function g(e,i){1&e&&(o.TgZ(0,"small"),o._uU(1,"Must be at least 3 characters."),o.qZA())}function f(e,i){if(1&e&&(o.TgZ(0,"div",21),o.YNc(1,c,2,0,"small",22),o.YNc(2,g,2,0,"small",22),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.f.name.errors.required),o.xp6(1),o.Q6J("ngIf",t.f.name.errors.minlength)}}function u(e,i){1&e&&(o.TgZ(0,"small"),o._uU(1,"Email is required."),o.qZA())}function p(e,i){1&e&&(o.TgZ(0,"small"),o._uU(1,"Enter a valid email."),o.qZA())}function _(e,i){if(1&e&&(o.TgZ(0,"div",21),o.YNc(1,u,2,0,"small",22),o.YNc(2,p,2,0,"small",22),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.f.email.errors.required),o.xp6(1),o.Q6J("ngIf",t.f.email.errors.email)}}function Z(e,i){1&e&&(o.TgZ(0,"small"),o._uU(1,"Password is required."),o.qZA())}function v(e,i){1&e&&(o.TgZ(0,"small"),o._uU(1,"Must be at least 6 characters."),o.qZA())}function b(e,i){if(1&e&&(o.TgZ(0,"div",21),o.YNc(1,Z,2,0,"small",22),o.YNc(2,v,2,0,"small",22),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.f.password.errors.required),o.xp6(1),o.Q6J("ngIf",t.f.password.errors.minlength)}}function h(e,i){1&e&&(o.TgZ(0,"small"),o._uU(1,"Confirmation is required."),o.qZA())}function x(e,i){if(1&e&&(o.TgZ(0,"div",21),o.YNc(1,h,2,0,"small",22),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.f.password_confirmation.errors.required)}}let T=(()=>{class e{constructor(t){this.fb=t,this.submitted=!1,this.registerForm=this.fb.group({name:["",[n.kI.required,n.kI.minLength(3)]],email:["",[n.kI.required,n.kI.email]],password:["",[n.kI.required,n.kI.minLength(6)]],password_confirmation:["",[n.kI.required]]})}get f(){return this.registerForm.controls}onSubmit(){this.submitted=!0,this.registerForm.valid&&console.log("Form Submitted",this.registerForm.value)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(n.qu))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-register"]],decls:36,vars:5,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-md-8"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row","mb-3"],["for","name",1,"col-md-4","col-form-label","text-md-end"],[1,"col-md-6"],["id","name","type","text","formControlName","name",1,"form-control"],["class","text-danger",4,"ngIf"],["for","email",1,"col-md-4","col-form-label","text-md-end"],["id","email","type","email","formControlName","email",1,"form-control"],["for","password",1,"col-md-4","col-form-label","text-md-end"],["id","password","type","password","formControlName","password",1,"form-control"],["for","password-confirm",1,"col-md-4","col-form-label","text-md-end"],["id","password-confirm","type","password","formControlName","password_confirmation",1,"form-control"],[1,"row","mb-0"],[1,"col-md-6","offset-md-4"],["type","submit",1,"btn","btn-primary"],[1,"text-danger"],[4,"ngIf"]],template:function(t,r){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),o._uU(5,"Register"),o.qZA(),o.TgZ(6,"div",5)(7,"form",6),o.NdJ("ngSubmit",function(){return r.onSubmit()}),o.TgZ(8,"div",7)(9,"label",8),o._uU(10,"Name"),o.qZA(),o.TgZ(11,"div",9),o._UZ(12,"input",10),o.YNc(13,f,3,2,"div",11),o.qZA()(),o.TgZ(14,"div",7)(15,"label",12),o._uU(16,"Email Address"),o.qZA(),o.TgZ(17,"div",9),o._UZ(18,"input",13),o.YNc(19,_,3,2,"div",11),o.qZA()(),o.TgZ(20,"div",7)(21,"label",14),o._uU(22,"Password"),o.qZA(),o.TgZ(23,"div",9),o._UZ(24,"input",15),o.YNc(25,b,3,2,"div",11),o.qZA()(),o.TgZ(26,"div",7)(27,"label",16),o._uU(28,"Confirm Password"),o.qZA(),o.TgZ(29,"div",9),o._UZ(30,"input",17),o.YNc(31,x,2,1,"div",11),o.qZA()(),o.TgZ(32,"div",18)(33,"div",19)(34,"button",20),o._uU(35,"Register"),o.qZA()()()()()()()()()),2&t&&(o.xp6(7),o.Q6J("formGroup",r.registerForm),o.xp6(6),o.Q6J("ngIf",r.submitted&&r.f.name.errors),o.xp6(6),o.Q6J("ngIf",r.submitted&&r.f.email.errors),o.xp6(6),o.Q6J("ngIf",r.submitted&&r.f.password.errors),o.xp6(6),o.Q6J("ngIf",r.submitted&&r.f.password_confirmation.errors))},dependencies:[m.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]}),e})();var C=l(8975),A=l(9228),q=l(7185),w=l(2086);function U(e,i){1&e&&(o.TgZ(0,"small"),o._uU(1,"Email is required."),o.qZA())}function I(e,i){1&e&&(o.TgZ(0,"small"),o._uU(1,"Invalid email format."),o.qZA())}function y(e,i){if(1&e&&(o.TgZ(0,"div",28),o.YNc(1,U,2,0,"small",29),o.YNc(2,I,2,0,"small",29),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",null==t.f.email.errors?null:t.f.email.errors.required),o.xp6(1),o.Q6J("ngIf",null==t.f.email.errors?null:t.f.email.errors.email)}}function J(e,i){1&e&&(o.TgZ(0,"small"),o._uU(1,"Password is required."),o.qZA())}function M(e,i){if(1&e&&(o.TgZ(0,"div",28),o.YNc(1,J,2,0,"small",29),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",null==t.f.password.errors?null:t.f.password.errors.required)}}const N=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"register",component:T},{path:"login",component:(()=>{class e{constructor(t,r,a,F,R){this.fb=t,this.apiClient=r,this.router=a,this.toastr=F,this.dialog=R,this.loginForm=this.fb.group({email:["",[n.kI.required,n.kI.email]],password:["",[n.kI.required]]})}ngOnInit(){}get f(){return this.loginForm.controls}onSubmit(){this.loginForm.valid&&this.login()}login(){this.apiClient.login("login",JSON.stringify(this.loginForm.value)).toPromise().then(r=>{this.toastr.success("User Logged In successfully!","Success"),this.router.navigate(["/dashboard"])}).catch(r=>{this.showError(r.error.message)})}showError(t){this.dialog.open(C.$,{width:"400px",panelClass:"custom-dialog-container",position:{top:"50%",left:"50%"},data:{message:t,type:"error"}}).afterClosed().subscribe(a=>{})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(n.qu),o.Y36(A.O),o.Y36(s.F0),o.Y36(q._W),o.Y36(w.uw))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-login"]],decls:46,vars:4,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-9","left-side"],[1,"text-center","logo-center"],["src","assets/images/logo/logo.svg","alt","Logo","width","260"],[1,"my-5"],[1,"col-md-3","right-side"],[1,"login-form"],[1,"text-left","mb-5"],[1,"bi","bi-lock-fill",2,"color","#00b5e9"],[3,"formGroup","ngSubmit"],[1,"mb-4"],["for","email",1,"form-label","d-none"],["type","email","id","email","formControlName","email","placeholder","Email",1,"form-control","input"],["class","text-danger",4,"ngIf"],["for","password",1,"form-label","d-none"],["type","password","id","password","formControlName","password","placeholder","Password",1,"form-control","input"],[1,"d-grid","mb-5","col-4"],["type","submit",1,"btn","btn-sm",2,"background-color","#00b5e9","color","#ffffff",3,"disabled"],[1,"text-left","col-6"],["routerLink","/forgot-password",1,"text-color"],[1,"social-icons","mt-5"],["href","#"],[1,"bi","bi-facebook",2,"color","#00b5e9"],[1,"bi","bi-twitter",2,"color","#00b5e9"],[1,"bi","bi-instagram",2,"color","#00b5e9"],[1,"bi","bi-linkedin",2,"color","#00b5e9"],[1,"text-links"],[1,"text-danger"],[4,"ngIf"]],template:function(t,r){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),o._UZ(4,"img",4),o.TgZ(5,"div",5)(6,"h1"),o._uU(7,"Welcome to Maven Mind"),o.qZA()()()(),o.TgZ(8,"div",6)(9,"div",7)(10,"h4",8),o._UZ(11,"i",9),o._uU(12," Login "),o.qZA(),o.TgZ(13,"form",10),o.NdJ("ngSubmit",function(){return r.onSubmit()}),o.TgZ(14,"div",11)(15,"label",12),o._uU(16,"Email"),o.qZA(),o._UZ(17,"input",13),o.YNc(18,y,3,2,"div",14),o.qZA(),o.TgZ(19,"div",11)(20,"label",15),o._uU(21,"Password"),o.qZA(),o._UZ(22,"input",16),o.YNc(23,M,2,1,"div",14),o.qZA(),o.TgZ(24,"div",17)(25,"button",18),o._uU(26," Sign In "),o.qZA()()(),o.TgZ(27,"div",19)(28,"a",20),o._uU(29,"Forgot Password?"),o.qZA()(),o.TgZ(30,"div",21)(31,"a",22),o._UZ(32,"i",23),o.qZA(),o.TgZ(33,"a",22),o._UZ(34,"i",24),o.qZA(),o.TgZ(35,"a",22),o._UZ(36,"i",25),o.qZA(),o.TgZ(37,"a",22),o._UZ(38,"i",26),o.qZA()(),o.TgZ(39,"div",27)(40,"a",22),o._uU(41,"Contact Us"),o.qZA(),o.TgZ(42,"a",22),o._uU(43,"About Us"),o.qZA(),o.TgZ(44,"a",22),o._uU(45,"FAQ"),o.qZA()()()()()()),2&t&&(o.xp6(13),o.Q6J("formGroup",r.loginForm),o.xp6(5),o.Q6J("ngIf",r.f.email.touched&&r.f.email.invalid),o.xp6(5),o.Q6J("ngIf",r.f.password.touched&&r.f.password.invalid),o.xp6(2),o.Q6J("disabled",r.loginForm.invalid))},dependencies:[m.O5,s.yS,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u],styles:[".left-side[_ngcontent-%COMP%]{background-image:url(/assets/images/logo/image.png);background-size:cover;background-position:center;height:100vh;display:flex;align-items:center;justify-content:center}.right-side[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:2rem;height:100vh;background-color:#fff}.login-form[_ngcontent-%COMP%]{max-width:400px;width:100%;margin:auto;position:relative;top:-20%}.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 .5rem;color:inherit;text-decoration:none}.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#007bff}.text-links[_ngcontent-%COMP%]{margin-top:20px}.text-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 10px;color:#595b5a;text-decoration:none}.text-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#05a853}.input[_ngcontent-%COMP%]{border:0;border-radius:0;background:none;padding-left:3px;padding-right:3px;border-bottom:1px solid #acacac}.text-color[_ngcontent-%COMP%]{color:#595b5a}.text-color[_ngcontent-%COMP%]:hover{color:#05a853}.logo-center[_ngcontent-%COMP%]{position:relative;top:-4%}"]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[s.Bz.forChild(N),s.Bz]}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[m.ez,P,n.UX]}),e})()}}]);