"use strict";(self.webpackChunkmaven_mind=self.webpackChunkmaven_mind||[]).push([[930],{5930:(q,l,p)=>{p.r(l),p.d(l,{ApplicationsModule:()=>x});var s=p(6895),r=p(8616),t=p(1571);let u=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-applications"]],decls:1,vars:0,template:function(a,i){1&a&&t._UZ(0,"router-outlet")},dependencies:[r.lC]}),n})();var o=p(433),c=p(8796);function m(n,e){1&n&&(t.TgZ(0,"sup"),t._uU(1,"*"),t.qZA())}function d(n,e){1&n&&(t.TgZ(0,"sup"),t._uU(1,"*"),t.qZA())}function f(n,e){1&n&&(t.TgZ(0,"sup"),t._uU(1,"*"),t.qZA())}function g(n,e){1&n&&(t.TgZ(0,"sup"),t._uU(1,"*"),t.qZA())}function C(n,e){1&n&&(t.TgZ(0,"sup"),t._uU(1,"*"),t.qZA())}function A(n,e){1&n&&(t.TgZ(0,"sup"),t._uU(1,"*"),t.qZA())}function Z(n,e){1&n&&(t.TgZ(0,"sup"),t._uU(1,"*"),t.qZA())}function b(n,e){1&n&&(t.TgZ(0,"sup"),t._uU(1,"*"),t.qZA())}function h(n,e){1&n&&(t.TgZ(0,"sup"),t._uU(1,"*"),t.qZA())}const y=[{path:"",component:u,children:[{path:"students",loadChildren:()=>p.e(277).then(p.bind(p,277)).then(n=>n.StudentsModule)},{path:"create",component:(()=>{class n{constructor(a){this.fb=a,this.displayValidation=!0,this.courses=["Computer Science","Business Administration","Mechanical Engineering","Electrical Engineering","Medicine","Law","Psychology","Architecture","Finance","Marketing"],this.applicationForm=this.fb.group({agentName:["",o.kI.required],studentName:["",o.kI.required],dob:["",o.kI.required],email:["",[o.kI.required,o.kI.email]],courseChoice:["",o.kI.required],intakeYear:["",[o.kI.required,o.kI.min(2e3),o.kI.max((new Date).getFullYear()+10)]],nationality:["",o.kI.required],countryOfBirth:["",o.kI.required],passportNumber:["",o.kI.required]})}ngOnInit(){}onSubmit(){this.applicationForm.valid&&console.log("Form Submitted:",this.applicationForm.value)}closeForm(){this.applicationForm.reset()}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(o.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-applications-create"]],decls:72,vars:12,consts:[[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header"],[1,"position-absolute",2,"top","2px","right","10px","cursor","pointer","color","white"],[1,"fa","fa-times",3,"click"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row","mt-3"],[1,"col-md-4"],[1,"form-group"],[4,"ngIf"],["type","text","formControlName","agentName",1,"form-control"],["type","text","formControlName","studentName",1,"form-control"],["type","date","formControlName","dob",1,"form-control"],["type","email","formControlName","email",1,"form-control"],["bindLabel","name","bindValue","value","formControlName","courseChoice","placeholder","Select a course",3,"items"],["type","number","formControlName","intakeYear",1,"form-control"],["type","text","formControlName","nationality",1,"form-control"],["type","text","formControlName","countryOfBirth",1,"form-control"],["type","text","formControlName","passportNumber",1,"form-control"],[1,"form-buttons","gap-2"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-secondary"]],template:function(a,i){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span"),t._uU(5,"Create Application"),t.qZA(),t.TgZ(6,"span",4)(7,"i",5),t.NdJ("click",function(){return i.closeForm()}),t.qZA()()(),t.TgZ(8,"div",6)(9,"form",7),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(10,"div",8)(11,"div",9)(12,"div",10)(13,"label"),t._uU(14,"Name of Agent:"),t.YNc(15,m,2,0,"sup",11),t.qZA(),t._UZ(16,"input",12),t.qZA()(),t.TgZ(17,"div",9)(18,"div",10)(19,"label"),t._uU(20,"Name of Student:"),t.YNc(21,d,2,0,"sup",11),t.qZA(),t._UZ(22,"input",13),t.qZA()(),t.TgZ(23,"div",9)(24,"div",10)(25,"label"),t._uU(26,"Student Date of Birth:"),t.YNc(27,f,2,0,"sup",11),t.qZA(),t._UZ(28,"input",14),t.qZA()()(),t.TgZ(29,"div",8)(30,"div",9)(31,"div",10)(32,"label"),t._uU(33,"Student Email Address:"),t.YNc(34,g,2,0,"sup",11),t.qZA(),t._UZ(35,"input",15),t.qZA()(),t.TgZ(36,"div",9)(37,"div",10)(38,"label"),t._uU(39,"Choice of Courses:"),t.YNc(40,C,2,0,"sup",11),t.qZA(),t._UZ(41,"ng-select",16),t.qZA()(),t.TgZ(42,"div",9)(43,"div",10)(44,"label"),t._uU(45,"Intake (by Year):"),t.YNc(46,A,2,0,"sup",11),t.qZA(),t._UZ(47,"input",17),t.qZA()()(),t.TgZ(48,"div",8)(49,"div",9)(50,"div",10)(51,"label"),t._uU(52,"Nationality:"),t.YNc(53,Z,2,0,"sup",11),t.qZA(),t._UZ(54,"input",18),t.qZA()(),t.TgZ(55,"div",9)(56,"div",10)(57,"label"),t._uU(58,"Country of Birth:"),t.YNc(59,b,2,0,"sup",11),t.qZA(),t._UZ(60,"input",19),t.qZA()(),t.TgZ(61,"div",9)(62,"div",10)(63,"label"),t._uU(64,"Passport Number:"),t.YNc(65,h,2,0,"sup",11),t.qZA(),t._UZ(66,"input",20),t.qZA()()()(),t.TgZ(67,"div",21)(68,"button",22),t._uU(69,"Submit"),t.qZA(),t.TgZ(70,"button",23),t._uU(71,"Cancel"),t.qZA()()()()()()),2&a&&(t.xp6(9),t.Q6J("formGroup",i.applicationForm),t.xp6(6),t.Q6J("ngIf",i.displayValidation),t.xp6(6),t.Q6J("ngIf",i.displayValidation),t.xp6(6),t.Q6J("ngIf",i.displayValidation),t.xp6(7),t.Q6J("ngIf",i.displayValidation),t.xp6(6),t.Q6J("ngIf",i.displayValidation),t.xp6(1),t.Q6J("items",i.courses),t.xp6(5),t.Q6J("ngIf",i.displayValidation),t.xp6(7),t.Q6J("ngIf",i.displayValidation),t.xp6(6),t.Q6J("ngIf",i.displayValidation),t.xp6(6),t.Q6J("ngIf",i.displayValidation),t.xp6(3),t.Q6J("disabled",!i.applicationForm.valid))},dependencies:[s.O5,o._Y,o.Fj,o.wV,o.JJ,o.JL,o.sg,o.u,c.w9],styles:["[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container{height:30px!important;min-height:unset!important}.form-container[_ngcontent-%COMP%]{max-width:500px;margin:auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 0 10px #0000001a}h4[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.form-group[_ngcontent-%COMP%]{margin-bottom:15px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:5px}.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px}.radio-group[_ngcontent-%COMP%]{display:flex;gap:20px;align-items:center}ng-select[_ngcontent-%COMP%]{width:100%}"]}),n})()}]}];let v=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(y),r.Bz]}),n})();var _=p(9585),T=p(8816);let x=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,v,_.xD,o.UX,c.A0,T.f.forRoot()]}),n})()}}]);