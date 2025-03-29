"use strict";(self.webpackChunkmaven_mind=self.webpackChunkmaven_mind||[]).push([[104],{3104:(X,C,m)=>{m.r(C),m.d(C,{UsersModule:()=>z});var U=m(6895),Z=m(8616),r=m(433),e=m(1571);function x(t,a){1&t&&(e.TgZ(0,"sup"),e._uU(1,"*"),e.qZA())}function y(t,a){1&t&&(e.TgZ(0,"small",26),e._uU(1,"Please enter your name!"),e.qZA())}function T(t,a){1&t&&(e.TgZ(0,"small",26),e._uU(1,"Maximum characters should be 25!"),e.qZA())}function v(t,a){1&t&&(e.TgZ(0,"sup"),e._uU(1,"*"),e.qZA())}function F(t,a){1&t&&(e.TgZ(0,"small",26),e._uU(1,"Please enter your email!"),e.qZA())}function N(t,a){1&t&&(e.TgZ(0,"small",26),e._uU(1,"Maximum characters should be 25!"),e.qZA())}function k(t,a){1&t&&(e.TgZ(0,"sup"),e._uU(1,"*"),e.qZA())}function q(t,a){1&t&&(e.TgZ(0,"small",26),e._uU(1,"Please enter your phone nummber!"),e.qZA())}function w(t,a){1&t&&(e.TgZ(0,"small",26),e._uU(1,"Maximum characters should be 25!"),e.qZA())}function P(t,a){1&t&&(e.TgZ(0,"sup"),e._uU(1,"*"),e.qZA())}function I(t,a){1&t&&(e.TgZ(0,"small",26),e._uU(1,"Please enter password!"),e.qZA())}function J(t,a){1&t&&(e.TgZ(0,"small",26),e._uU(1,"Maximum characters should be 25!"),e.qZA())}function M(t,a){1&t&&(e.TgZ(0,"sup"),e._uU(1,"*"),e.qZA())}function L(t,a){1&t&&(e.TgZ(0,"small",26),e._uU(1,"Please confirm password!"),e.qZA())}function O(t,a){1&t&&(e.TgZ(0,"small",26),e._uU(1,"Maximum characters should be 25!"),e.qZA())}let A=(()=>{class t{constructor(o){this.fb=o,this.displayValidation=!0,this.ukInstitutions=[{id:1,name:"University of London"},{id:2,name:"Oxford University"},{id:3,name:"Imperial College London"}],this.outsideUkInstitutions=[{id:1,name:"Harvard University"},{id:2,name:"Stanford University"},{id:3,name:"University of Sydney"}],this.selectedUkInstitutions=[],this.selectedOutsideUkInstitutions=[]}ngOnInit(){this.agentForm=this.fb.group({agentName:["",r.kI.required],registrationDate:["",r.kI.required],firstName:["",r.kI.required],lastName:["",r.kI.required],companyName:["",r.kI.required],contactNumber:["",r.kI.required],vatRegistrationNumber:["",r.kI.required],ukAddress:["",r.kI.required],nonUkAddress:[""],email:["",[r.kI.required,r.kI.email]],complianceCheck:["",r.kI.required],restrictedCountries:["",r.kI.required],dbsCheckFile:[null,r.kI.required],agentListFile:[null,r.kI.required],institutionsUK:[[]],institutionsOutsideUK:[[]]})}onFileChange(o,n){o.target.files.length>0&&this.agentForm.patchValue({[n]:o.target.files[0]})}onSubmit(){this.agentForm.valid?console.log("Form Submitted:",this.agentForm.value):console.log("Form is invalid")}closeForm(){}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(r.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-users-form"]],decls:57,vars:17,consts:[[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header"],[1,"position-absolute",2,"top","2px","right","10px","cursor","pointer","color","white"],[1,"fa","fa-times",3,"click"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row","mt-3"],[1,"col-md-4"],[1,"form-group"],["for","firstName"],[4,"ngIf"],["type","text","name","name","formControlName","name","alphaOnly","",1,"form-control"],["class","form-text text-muted danger",4,"ngIf"],["for","lastName"],["type","text","formControlName","email","id","email",1,"form-control"],["for","email"],["type","text","name","phoneNumber","formControlName","phoneNumber",1,"form-control"],["for","password"],["type","password","name","password","formControlName","password","alphaOnly","",1,"form-control"],["for","confirmPassword"],["type","password","name","confirmPassword","formControlName","confirmPassword",1,"form-control"],[1,"form-buttons","gap-2"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-secondary"],[1,"form-text","text-muted","danger"]],template:function(o,n){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span"),e._uU(5,"Add User"),e.qZA(),e.TgZ(6,"span",4)(7,"i",5),e.NdJ("click",function(){return n.closeForm()}),e.qZA()()(),e.TgZ(8,"div",6)(9,"form",7),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(10,"div",8)(11,"div",9)(12,"div",10)(13,"label",11),e._uU(14,"Name:"),e.YNc(15,x,2,0,"sup",12),e.qZA(),e._UZ(16,"input",13),e.YNc(17,y,2,0,"small",14),e.YNc(18,T,2,0,"small",14),e.qZA()(),e.TgZ(19,"div",9)(20,"div",10)(21,"label",15),e._uU(22,"Email:"),e.YNc(23,v,2,0,"sup",12),e.qZA(),e._UZ(24,"input",16),e.YNc(25,F,2,0,"small",14),e.YNc(26,N,2,0,"small",14),e.qZA()(),e.TgZ(27,"div",9)(28,"div",10)(29,"label",17),e._uU(30,"Phone Number:"),e.YNc(31,k,2,0,"sup",12),e.qZA(),e._UZ(32,"input",18),e.YNc(33,q,2,0,"small",14),e.YNc(34,w,2,0,"small",14),e.qZA()()(),e.TgZ(35,"div",8)(36,"div",9)(37,"div",10)(38,"label",19),e._uU(39,"Password:"),e.YNc(40,P,2,0,"sup",12),e.qZA(),e._UZ(41,"input",20),e.YNc(42,I,2,0,"small",14),e.YNc(43,J,2,0,"small",14),e.qZA()(),e.TgZ(44,"div",9)(45,"div",10)(46,"label",21),e._uU(47,"Confirm Password:"),e.YNc(48,M,2,0,"sup",12),e.qZA(),e._UZ(49,"input",22),e.YNc(50,L,2,0,"small",14),e.YNc(51,O,2,0,"small",14),e.qZA()()()(),e.TgZ(52,"div",23)(53,"button",24),e._uU(54,"Submit"),e.qZA(),e.TgZ(55,"button",25),e._uU(56,"Cancel"),e.qZA()()()()()()),2&o){let l,i,s,_,p,f,u,b,c,h;e.xp6(9),e.Q6J("formGroup",n.agentForm),e.xp6(6),e.Q6J("ngIf",n.displayValidation),e.xp6(2),e.Q6J("ngIf",(null==(l=n.agentForm.get("name"))||null==l.errors?null:l.errors.required)&&((null==(l=n.agentForm.get("name"))?null:l.dirty)||(null==(l=n.agentForm.get("name"))?null:l.touched))),e.xp6(1),e.Q6J("ngIf",(null==(i=n.agentForm.get("name"))||null==i.errors?null:i.errors.maxlength)&&(null==(i=n.agentForm.get("name"))?null:i.dirty)),e.xp6(5),e.Q6J("ngIf",n.displayValidation),e.xp6(2),e.Q6J("ngIf",(null==(s=n.agentForm.get("email"))||null==s.errors?null:s.errors.required)&&((null==(s=n.agentForm.get("email"))?null:s.dirty)||(null==(s=n.agentForm.get("email"))?null:s.touched))),e.xp6(1),e.Q6J("ngIf",(null==(_=n.agentForm.get("email"))||null==_.errors?null:_.errors.maxlength)&&(null==(_=n.agentForm.get("email"))?null:_.dirty)),e.xp6(5),e.Q6J("ngIf",n.displayValidation),e.xp6(2),e.Q6J("ngIf",(null==(p=n.agentForm.get("phoneNumber"))||null==p.errors?null:p.errors.required)&&((null==(p=n.agentForm.get("phoneNumber"))?null:p.dirty)||(null==(p=n.agentForm.get("phoneNumber"))?null:p.touched))),e.xp6(1),e.Q6J("ngIf",(null==(f=n.agentForm.get("phoneNumber"))||null==f.errors?null:f.errors.maxlength)&&(null==(f=n.agentForm.get("phoneNumber"))?null:f.dirty)),e.xp6(6),e.Q6J("ngIf",n.displayValidation),e.xp6(2),e.Q6J("ngIf",(null==(u=n.agentForm.get("password"))||null==u.errors?null:u.errors.required)&&((null==(u=n.agentForm.get("password"))?null:u.dirty)||(null==(u=n.agentForm.get("password"))?null:u.touched))),e.xp6(1),e.Q6J("ngIf",(null==(b=n.agentForm.get("password"))||null==b.errors?null:b.errors.maxlength)&&(null==(b=n.agentForm.get("password"))?null:b.dirty)),e.xp6(5),e.Q6J("ngIf",n.displayValidation),e.xp6(2),e.Q6J("ngIf",(null==(c=n.agentForm.get("confirmPassword"))||null==c.errors?null:c.errors.required)&&((null==(c=n.agentForm.get("confirmPassword"))?null:c.dirty)||(null==(c=n.agentForm.get("confirmPassword"))?null:c.touched))),e.xp6(1),e.Q6J("ngIf",(null==(h=n.agentForm.get("confirmPassword"))||null==h.errors?null:h.errors.maxlength)&&(null==(h=n.agentForm.get("confirmPassword"))?null:h.dirty)),e.xp6(2),e.Q6J("disabled",!n.agentForm.valid)}},dependencies:[U.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".form-container[_ngcontent-%COMP%]{max-width:500px;margin:auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 0 10px #0000001a}h4[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.form-group[_ngcontent-%COMP%]{margin-bottom:15px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:5px}.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px}.radio-group[_ngcontent-%COMP%]{display:flex;gap:20px;align-items:center}ng-select[_ngcontent-%COMP%]{width:100%}"]}),t})();var d=m(7340),g=m(9585);function B(t,a){1&t&&e._UZ(0,"i",32)}function S(t,a){1&t&&e._UZ(0,"i",33)}function Y(t,a){if(1&t&&(e.TgZ(0,"option",34),e._uU(1),e.qZA()),2&t){const o=a.$implicit,n=e.oxw();e.Q6J("value",o)("selected",o===n.page.perPage),e.xp6(1),e.Oqu(o)}}function Q(t,a){if(1&t&&(e.TgZ(0,"div",36),e._uU(1),e.qZA()),2&t){const o=a.column;e.xp6(1),e.Oqu(o.name)}}function j(t,a){if(1&t&&(e.TgZ(0,"div",37),e._uU(1),e.qZA()),2&t){const o=a.value;e.xp6(1),e.Oqu(o)}}function H(t,a){if(1&t&&(e.TgZ(0,"ngx-datatable-column",35),e.YNc(1,Q,2,1,"ng-template",30),e.YNc(2,j,2,1,"ng-template",31),e.qZA()),2&t){const o=a.$implicit;e.Q6J("name",o.name)("prop",o.prop)("sortable",!1)}}function R(t,a){1&t&&(e.TgZ(0,"div",38),e._uU(1,"Action"),e.qZA())}function K(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"div",39)(1,"button",40),e.NdJ("click",function(){const i=e.CHM(o).row,s=e.oxw();return e.KtG(s.editAgent(i))}),e._UZ(2,"i",41),e.qZA(),e.TgZ(3,"button",42),e.NdJ("click",function(){const i=e.CHM(o).row,s=e.oxw();return e.KtG(s.deleteAgent(i))}),e._UZ(4,"i",43),e.qZA()()}}const V=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class t{constructor(o,n){this.fb=o,this.router=n,this.page={perPage:25,page:1,total:100},this.perPageOptions=[10,25,50,100],this.isCollapsed=!0,this.columns=[{name:"Agent ID",prop:"id"},{name:"Agent Name",prop:"name"},{name:"Company",prop:"company"},{name:"Mobile",prop:"mobile"},{name:"VAT registration number",prop:"registerationNumber"},{name:"Uk Address",prop:"UkAddress"},{name:"Non UK Company Address",prop:"NonUkAddress"},{name:"Email",prop:"email"},{name:"Compliance check / referral",prop:"complianceCheck"},{name:"Restricted Countries",prop:"restrictedCountries"},{name:"Created By",prop:"createdBy"},{name:"Updated By",prop:"updatedBy"}],this.rows=[{id:1,name:"John Doe",company:"ABC Ltd.",mobile:"+44 7890 123456",registerationNumber:"VAT123456789",UkAddress:"123 Baker Street, London, UK",NonUkAddress:"456 Elm Street, New York, USA",email:"john.doe@example.com",complianceCheck:"Passed",restrictedCountries:"None",createdBy:"Admin 2024-01-10",updatedBy:"Admin 2024-01-15"},{id:2,name:"Jane Smith",company:"XYZ Corp.",mobile:"+44 7523 987654",registerationNumber:"VAT987654321",UkAddress:"78 High Street, Manchester, UK",NonUkAddress:"789 Pine Avenue, Toronto, Canada",email:"jane.smith@example.com",complianceCheck:"Pending",restrictedCountries:"Iran, North Korea",createdBy:"Admin 2024-01-12",updatedBy:"Admin 2024-01-18"},{id:3,name:"Michael Johnson",company:"Global Solutions",mobile:"+44 7012 345678",registerationNumber:"VAT654321789",UkAddress:"56 King\u2019s Road, Edinburgh, UK",NonUkAddress:"123 Ocean Drive, Sydney, Australia",email:"michael.johnson@example.com",complianceCheck:"Failed",restrictedCountries:"Russia, Syria",createdBy:"Admin 2024-01-14",updatedBy:"Admin 2024-01-20"},{id:4,name:"Emma Brown",company:"Secure Trade Ltd.",mobile:"+44 7412 567890",registerationNumber:"VAT111222333",UkAddress:"89 Tower Bridge Road, London, UK",NonUkAddress:"555 Bay Street, Dubai, UAE",email:"emma.brown@example.com",complianceCheck:"Passed",restrictedCountries:"None",createdBy:"Admin 2024-01-16",updatedBy:"Admin 2024-01-22"}],this.buildForm()}ngOnInit(){}buildForm(){this.filterForm=this.fb.group({ssn:[""],agent_name:[""],date_of_birth:[""],created_at:[""],updated_at:[""],created_by:[""],updated_by:[""],agent_id:[""],email:[""],cell_phone_no:[""],address:[""],ssn3:["",[r.kI.minLength(3),r.kI.maxLength(3)]],ssn2:["",[r.kI.minLength(2),r.kI.maxLength(2)]],ssn4:["",[r.kI.minLength(4),r.kI.maxLength(4)]]})}setPage(o){this.page.page=o.offset+1}updatePerPage(o){this.page.perPage=o.target.value}getTotalPages(){return Math.ceil(this.page.total/this.page.perPage)}onSelectFilters(){}resetForm(){}onResetFilters(){}onAgentNameClick(o){this.router.navigateByUrl(`/users/${o}`)}addNewAgent(){this.router.navigateByUrl("/users/add")}editAgent(o){console.log("Edit Users:",o),this.router.navigateByUrl(`/users/edit/${o.id}`)}deleteAgent(o){confirm("Are you sure you want to delete this agent?")&&console.log("Delete Agent:",o)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(r.qu),e.Y36(Z.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-users-list"]],decls:74,vars:24,consts:[[1,"d-flex","mt-3","mb-3","justify-content-end"],["type","button",1,"btn","btn-secondary",3,"click"],["autocomplete","off","novalidate","",1,"form","w-100",2,"margin","20px 0px",3,"formGroup","ngSubmit"],[1,"form-content","search-filter-block","position-relative"],[1,"sub-title","search-agent-title"],["aria-controls","collapseBasic","type","button",1,"btn","plus-btn","position-absolute",2,"max-width","42px","top","42px","right","20px","min-width","unset","background-color","#05a853","border","#05a853",3,"click"],["class","bi bi-plus",4,"ngIf"],["class","bi bi-dash",4,"ngIf"],[1,"row"],[1,"field-block","w-100"],[1,"col-12",2,"color","#808382"],[1,"row",2,"padding-right","100px"],[1,"col-12","col-sm-6","col-md-3"],[1,"form-group"],["for","agent_id"],["type","text","id","agent_id","formControlName","agent_id",1,"form-control"],["id","collapseBasic"],[1,"row",2,"padding-right","100px","margin-top","20px"],["for","created_by"],["type","text","id","created_by","formControlName","created_by",1,"form-control"],[1,"d-flex","justify-content-center","mt-3"],["type","submit",1,"btn","btn-primary","mx-2",2,"background-color","#05a853","border","#05a853"],["type","button",1,"btn","btn-default","mx-2",3,"disabled","click"],[1,"d-flex","justify-content-between","align-items-center","mb-2"],["for","perPageSelect",1,"me-2"],["id","perPageSelect",1,"form-select","me-2",2,"width","auto","display","inline-block",3,"change"],[3,"value","selected",4,"ngFor","ngForOf"],[1,"bootstrap","custom-table",3,"rows","columns","columnMode","headerHeight","footerHeight","rowHeight","scrollbarH","limit","count","offset","externalPaging","page"],[3,"name","prop","sortable",4,"ngFor","ngForOf"],["name","Action",3,"width"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],[1,"bi","bi-plus"],[1,"bi","bi-dash"],[3,"value","selected"],[3,"name","prop","sortable"],[1,"mgx-header"],[1,"text-center"],[1,"mgx-header","text-center"],[1,"d-flex","justify-content-center","gap-2"],[1,"btn","btn-sm","btn-primary",2,"min-width","60px","padding","5px 10px",3,"click"],[1,"bi","bi-pencil"],[1,"btn","btn-sm","btn-danger",2,"min-width","60px","padding","5px 10px",3,"click"],[1,"bi","bi-trash"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.addNewAgent()}),e._uU(2,"+ Add new users"),e.qZA()(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return n.onSelectFilters()}),e.TgZ(4,"div",3)(5,"strong",4),e._uU(6,"Search Users"),e.qZA(),e.TgZ(7,"button",5),e.NdJ("click",function(){return n.isCollapsed=!n.isCollapsed}),e.YNc(8,B,1,0,"i",6),e.YNc(9,S,1,0,"i",7),e.qZA(),e.TgZ(10,"div",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"div",12)(15,"div",13)(16,"label",14),e._uU(17,"user Id"),e.qZA(),e._UZ(18,"input",15),e.qZA()(),e.TgZ(19,"div",12)(20,"div",13)(21,"label",14),e._uU(22,"Name"),e.qZA(),e._UZ(23,"input",15),e.qZA()(),e.TgZ(24,"div",12)(25,"div",13)(26,"label",14),e._uU(27,"Email"),e.qZA(),e._UZ(28,"input",15),e.qZA()(),e.TgZ(29,"div",12)(30,"div",13)(31,"label",14),e._uU(32,"Preffered Contact"),e.qZA(),e._UZ(33,"input",15),e.qZA()()(),e.TgZ(34,"div",16)(35,"div",17)(36,"div",12)(37,"div",13)(38,"label",18),e._uU(39,"Created By"),e.qZA(),e._UZ(40,"input",19),e.qZA()(),e.TgZ(41,"div",12)(42,"div",13)(43,"label",18),e._uU(44,"Created By"),e.qZA(),e._UZ(45,"input",19),e.qZA()(),e.TgZ(46,"div",12)(47,"div",13)(48,"label",18),e._uU(49,"Created By"),e.qZA(),e._UZ(50,"input",19),e.qZA()(),e.TgZ(51,"div",12)(52,"div",13)(53,"label",18),e._uU(54,"Created By"),e.qZA(),e._UZ(55,"input",19),e.qZA()()()(),e.TgZ(56,"div",20)(57,"button",21),e._uU(58,"Filter"),e.qZA(),e.TgZ(59,"button",22),e.NdJ("click",function(){return n.onResetFilters()}),e._uU(60,"Reset"),e.qZA()()()()()()(),e.TgZ(61,"div",23)(62,"div")(63,"label",24),e._uU(64,"Show"),e.qZA(),e.TgZ(65,"select",25),e.NdJ("change",function(i){return n.updatePerPage(i)}),e.YNc(66,Y,2,3,"option",26),e.qZA(),e.TgZ(67,"label",24),e._uU(68,"entries"),e.qZA()()(),e.TgZ(69,"ngx-datatable",27),e.NdJ("page",function(i){return n.setPage(i)}),e.YNc(70,H,3,3,"ngx-datatable-column",28),e.TgZ(71,"ngx-datatable-column",29),e.YNc(72,R,2,0,"ng-template",30),e.YNc(73,K,5,0,"ng-template",31),e.qZA()()),2&o&&(e.xp6(3),e.Q6J("formGroup",n.filterForm),e.xp6(4),e.ekj("btn-dark",!n.isCollapsed)("btn-primary",n.isCollapsed),e.uIk("aria-expanded",!n.isCollapsed),e.xp6(1),e.Q6J("ngIf",n.isCollapsed),e.xp6(1),e.Q6J("ngIf",!n.isCollapsed),e.xp6(25),e.Q6J("@collapseAnimation",n.isCollapsed?"collapsed":"expanded"),e.xp6(25),e.Q6J("disabled",!0),e.xp6(7),e.Q6J("ngForOf",n.perPageOptions),e.xp6(3),e.Q6J("rows",n.rows)("columns",n.columns)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("scrollbarH",!0)("limit",n.page.perPage)("count",n.page.total)("offset",n.page.page-1)("externalPaging",!0),e.xp6(1),e.Q6J("ngForOf",n.columns),e.xp6(1),e.Q6J("width",150))},dependencies:[U.sg,U.O5,g.nE,g.UC,g.tk,g.vq,r._Y,r.YN,r.Kr,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".search-agent-title[_ngcontent-%COMP%]{top:0;left:73px;transform:translate(-50%,-50%);background:white;font-size:16px;font:400 1rem/19px Poppins,Arial,Helvetica,sans-serif;text-transform:capitalize;background:#fff;position:absolute;padding:0 15px;color:#00b5e9}.plus-btn[_ngcontent-%COMP%]{top:10px;right:15px}.form-content[_ngcontent-%COMP%]{border:1px solid #ddd;padding:20px;border-radius:5px;position:relative}.mat-date-picker-custom[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}button.btn-primary[_ngcontent-%COMP%], button.btn-default[_ngcontent-%COMP%]{min-width:110px}.clickable-text[_ngcontent-%COMP%]{color:#2e7d32;cursor:pointer;text-align:center}"],data:{animation:[(0,d.X$)("collapseAnimation",[(0,d.SB)("collapsed",(0,d.oB)({height:"0",overflow:"hidden",opacity:"0",margin:"0"})),(0,d.SB)("expanded",(0,d.oB)({height:"*",opacity:"1",margin:"*"})),(0,d.eR)("collapsed <=> expanded",[(0,d.jt)("300ms ease-out")])])]}}),t})()},{path:"add",component:A},{path:"edit/:id",component:A}];let E=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[Z.Bz.forChild(V),Z.Bz]}),t})();var D=m(8816),G=m(8796);let z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[U.ez,E,g.xD,r.UX,G.A0,D.f.forRoot()]}),t})()}}]);