"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[451],{451:(P,d,o)=>{o.r(d),o.d(d,{SettingsPageModule:()=>s});var h=o(6895),u=o(4006),t=o(5035),p=o(4228),n=o(8274),i=o(4032);class g{constructor(e){this.translate=e,this.currentLanguage="pl"}ngOnInit(){this.cancelText="Anuluj"}onChangeLanguage(e){this.translate.use(this.currentLanguage),this.setCancelText(e),this.currentLanguage=e}setCancelText(e){this.cancelText="Cancel"}}g.\u0275fac=function(e){return new(e||g)(n.Y36(i.sK))},g.\u0275cmp=n.Xpm({type:g,selectors:[["app-settings"]],decls:17,vars:8,consts:[["mode","ios"],[1,"section-container"],["interface","action-sheet",3,"ngModel","cancelText","ngModelChange"],["value","pl"],["value","en"]],template:function(e,c){1&e&&(n.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),n._uU(3),n.ALo(4,"translate"),n.qZA()()(),n.TgZ(5,"ion-content")(6,"ion-grid",1)(7,"ion-row")(8,"ion-col")(9,"ion-label"),n._uU(10),n.ALo(11,"translate"),n.qZA(),n.TgZ(12,"ion-select",2),n.NdJ("ngModelChange",function(r){return c.currentLanguage=r})("ngModelChange",function(r){return c.onChangeLanguage(r)}),n.TgZ(13,"ion-select-option",3),n._uU(14,"Polski"),n.qZA(),n.TgZ(15,"ion-select-option",4),n._uU(16,"English"),n.qZA()()()()()()),2&e&&(n.xp6(3),n.Oqu(n.lcZ(4,4,"common.settings")),n.xp6(7),n.Oqu(n.lcZ(11,6,"common.chooseLang")),n.xp6(2),n.Q6J("ngModel",c.currentLanguage)("cancelText",c.cancelText))},dependencies:[u.JJ,u.On,t.wI,t.W2,t.jY,t.Gu,t.Q$,t.Nd,t.t9,t.n0,t.wd,t.sr,t.QI,i.X$],styles:["ion-label[_ngcontent-%COMP%]{font-weight:600}ion-select[_ngcontent-%COMP%]{padding-left:0;padding-top:20px}"]});const m=[{path:"",component:g}];class a{}a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[p.Bz.forChild(m),p.Bz]});var f=o(255),C=o(9377),T=o(529);class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[h.ez,u.u5,t.Pc,a,f.Z,i.aw.forChild({loader:{provide:i.Zw,useFactory:C.p,deps:[T.eN]}})]})}}]);