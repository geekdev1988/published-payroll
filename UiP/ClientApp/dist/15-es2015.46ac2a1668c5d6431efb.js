(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{YFQ6:function(l,n,u){"use strict";u.r(n);var a=u("8Y7J"),e=u("s7LF"),b=u("VAss"),t=u("F5nt");class c{}var o=u("5obM");class i{constructor(l,n,u,a){this.formBuilder=l,this.payByBankService=n,this.router=u,this.appService=a}ngOnInit(){this.paybybankForm=this.formBuilder.group({name:["",e.w.required],email:["",e.w.compose([e.w.required,b.a])],phone:["",e.w.required],message:["",e.w.required]}),this.getPayByBankDetail()}getPayByBankDetail(){let l;l=new c,l.activeContext=this.appService.Data.context,this.payByBankService.getPayByBankData(l).subscribe(l=>{l&&(this.lblItems=l.lblItems,this.appService.updateAppContext(l.activeContext))})}payByBankSubmit(){let l;l=new c,l.activeContext=this.appService.Data.context,this.payByBankService.placePayByBankData(l).subscribe(l=>{l&&(this.appService.updateAppContext(l.activeContext),l.redirectUrl?this.router.navigate(["/success"],{queryParams:{bank:1}}):this.router.navigate(["/success"]))})}}class r{}var s=u("pMnS"),p=u("t68o"),K=u("zbXB"),d=u("NcP4"),v=u("xYTU"),y=u("+pzW"),A=u("iInd"),h=a.yb({encapsulation:0,styles:[[""]],data:{}});function m(l){return a.Wb(0,[(l()(),a.Ab(0,0,null,null,2,"div",[["class","heading-page-title text-uppercase text-center"]],null,null,null,null,null)),(l()(),a.Ab(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),a.Ub(-1,null,["Pay By Bank"])),(l()(),a.Ab(3,0,null,null,48,"section",[["class","about"]],null,null,null,null,null)),(l()(),a.Ab(4,0,null,null,47,"div",[["class","section-wrapper"]],null,null,null,null,null)),(l()(),a.Ab(5,0,null,null,46,"div",[["class","container"]],null,null,null,null,null)),(l()(),a.Ab(6,0,null,null,45,"div",[["class","section-inner"]],null,null,null,null,null)),(l()(),a.Ab(7,0,null,null,44,"div",[["class","row"]],null,null,null,null,null)),(l()(),a.Ab(8,0,null,null,43,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),a.Ab(9,0,null,null,42,"div",[["class","about-content"]],null,null,null,null,null)),(l()(),a.Ab(10,0,null,null,41,"div",[["class","about-context"]],null,null,null,null,null)),(l()(),a.Ab(11,0,null,null,40,"div",[["class","w500b"]],null,null,null,null,null)),(l()(),a.Ab(12,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),a.Ub(-1,null,["Pay cash into our Bank Account or do online Transfer"])),(l()(),a.Ab(14,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),a.Ub(-1,null,["Please quote this as a payment refrence number: "])),(l()(),a.Ab(16,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.Ub(17,null,["",""])),(l()(),a.Ub(-1,null,[" to the Bank staff and make a cash payment of: "])),(l()(),a.Ab(19,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.Ub(20,null,["\xa3",""])),(l()(),a.Ub(-1,null,[" into our below mentioned Bank Account at any brach of Barclays Bank "])),(l()(),a.Ab(22,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),a.Ub(-1,null,["Or you can use any of your Bank Account to Transfer amount of: "])),(l()(),a.Ab(24,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.Ub(25,null,["\xa3",""])),(l()(),a.Ub(-1,null,[" into our below mentioned Bank Account, Please quote this as a payment refrence number: "])),(l()(),a.Ab(27,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.Ub(28,null,["",""])),(l()(),a.Ab(29,0,null,null,8,"div",[["class","bankdetails"]],null,null,null,null,null)),(l()(),a.Ab(30,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.Ub(-1,null,["Bank Name: Barclays"])),(l()(),a.Ab(32,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.Ub(-1,null,["Account Name: A1 Payroll Ltd"])),(l()(),a.Ab(34,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.Ub(-1,null,["Account Number: 8373 3270"])),(l()(),a.Ab(36,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.Ub(-1,null,["Sort Code: 20-08-98"])),(l()(),a.Ab(38,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),a.Ub(-1,null,[" Once the payment is made into above metioned Bank Account then please let us know by calling us on: 0845 838 5577 or by sending us the email to: "])),(l()(),a.Ab(40,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.Ub(-1,null,["info@A1-Payroll.co.uk"])),(l()(),a.Ub(-1,null,[" so we can complete your order without any delay. "])),(l()(),a.Ab(43,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),a.Ab(44,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.Ub(-1,null,["Your order will not be posted out untill the payment is showing clear in our Bank Account."])),(l()(),a.Ab(46,0,null,null,5,"div",[["class","col-md-5 col-md-offset-7 nopad sub_btn"]],null,null,null,null,null)),(l()(),a.Ab(47,0,null,null,4,"div",[["class","col-md-8 col-md-offset-5"]],null,null,null,null,null)),(l()(),a.Ab(48,0,null,null,3,"div",[["class","shopcart-checkout submit_order"]],null,null,null,null,null)),(l()(),a.Ab(49,0,null,null,2,"a",[["class","rv-btn rv-btn-xs rv-btn-primary text-uppercase"]],null,[[null,"click"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==l.component.payByBankSubmit()&&a),a}),null,null)),(l()(),a.Ub(-1,null,[" SUBMIT ORDER "])),(l()(),a.Ab(51,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-gavel"]],null,null,null,null,null))],null,(function(l,n){var u=n.component;l(n,17,0,null==u.appService?null:null==u.appService.Data?null:null==u.appService.Data.context?null:u.appService.Data.context.invoiceNumber),l(n,20,0,null==u.appService?null:null==u.appService.Data?null:null==u.appService.Data.context?null:u.appService.Data.context.invTotal),l(n,25,0,null==u.appService?null:null==u.appService.Data?null:null==u.appService.Data.context?null:u.appService.Data.context.invTotal),l(n,28,0,null==u.appService?null:null==u.appService.Data?null:null==u.appService.Data.context?null:u.appService.Data.context.invoiceNumber)}))}function k(l){return a.Wb(0,[(l()(),a.Ab(0,0,null,null,1,"app-paybybank",[],null,null,null,m,h)),a.zb(1,114688,null,0,i,[e.g,o.a,A.l,t.a],null,null)],(function(l,n){l(n,1,0)}),null)}var B=a.wb("app-paybybank",i,k,{},{},[]),f=u("SVse"),g=u("/q54"),S=u("QQfA"),x=u("IP0z"),w=u("/Co4"),U=u("POq0"),D=u("Xd0L"),P=u("s6ns"),N=u("821u"),q=u("gavF"),C=u("/HVE"),z=u("JjoW"),F=u("Mz6y"),J=u("cUpR"),O=u("OIZN"),T=u("7kcP"),I=u("qJ5m"),V=u("S8NE"),j=u("VDRc"),H=u("ura0"),M=u("Nhcz"),R=u("u9T3"),W=u("zMNK"),Z=u("hOhj"),E=u("Fwaw"),L=u("mkRZ"),Q=u("igqZ"),Y=u("r0V8"),G=u("kNGD"),X=u("5GAg"),_=u("5Bek"),$=u("c9fC"),ll=u("FVPZ"),nl=u("Gi4r"),ul=u("oapL"),al=u("HsOI"),el=u("ZwOa"),bl=u("02hT"),tl=u("Q+lL"),cl=u("8P0U"),ol=u("W5yJ"),il=u("elxJ"),rl=u("BV1i"),sl=u("lT8R"),pl=u("pBi1"),Kl=u("dFDH"),dl=u("zQui"),vl=u("8rEH"),yl=u("rWV4"),Al=u("BzsH"),hl=u("qJ50"),ml=u("bse0"),kl=u("DXe4"),Bl=u("PCNd"),fl=u("dvZr");u.d(n,"PayByBankModuleNgFactory",(function(){return gl}));var gl=a.xb(r,[],(function(l){return a.Jb([a.Kb(512,a.k,a.ib,[[8,[s.a,p.a,K.b,K.a,d.a,v.a,v.b,y.a,B]],[3,a.k],a.C]),a.Kb(4608,f.o,f.n,[a.y,[2,f.D]]),a.Kb(4608,e.g,e.g,[]),a.Kb(4608,e.y,e.y,[]),a.Kb(5120,a.b,(function(l,n){return[g.j(l,n)]}),[f.e,a.H]),a.Kb(4608,S.c,S.c,[S.i,S.e,a.k,S.h,S.f,a.u,a.E,f.e,x.c,[2,f.i]]),a.Kb(5120,S.j,S.k,[S.c]),a.Kb(5120,w.a,w.b,[S.c]),a.Kb(4608,U.c,U.c,[]),a.Kb(4608,D.d,D.d,[]),a.Kb(5120,P.c,P.d,[S.c]),a.Kb(135680,P.e,P.e,[S.c,a.u,[2,f.i],[2,P.b],P.c,[3,P.e],S.e]),a.Kb(4608,N.i,N.i,[]),a.Kb(5120,N.a,N.b,[S.c]),a.Kb(5120,q.a,q.d,[S.c]),a.Kb(4608,D.c,D.y,[[2,D.h],C.a]),a.Kb(5120,z.a,z.b,[S.c]),a.Kb(5120,F.b,F.c,[S.c]),a.Kb(4608,J.e,D.e,[[2,D.i],[2,D.n]]),a.Kb(5120,O.b,O.a,[[3,O.b]]),a.Kb(5120,T.b,T.a,[[3,T.b]]),a.Kb(5120,I.b,I.a,[[3,I.b]]),a.Kb(1073742336,f.c,f.c,[]),a.Kb(1073742336,A.p,A.p,[[2,A.u],[2,A.l]]),a.Kb(1073742336,e.x,e.x,[]),a.Kb(1073742336,e.u,e.u,[]),a.Kb(1073742336,V.a,V.a,[]),a.Kb(1073742336,g.c,g.c,[]),a.Kb(1073742336,x.a,x.a,[]),a.Kb(1073742336,j.d,j.d,[]),a.Kb(1073742336,H.b,H.b,[]),a.Kb(1073742336,M.a,M.a,[]),a.Kb(1073742336,R.a,R.a,[[2,g.g],a.H]),a.Kb(1073742336,D.n,D.n,[[2,D.f],[2,J.f]]),a.Kb(1073742336,C.b,C.b,[]),a.Kb(1073742336,D.x,D.x,[]),a.Kb(1073742336,D.v,D.v,[]),a.Kb(1073742336,D.s,D.s,[]),a.Kb(1073742336,W.g,W.g,[]),a.Kb(1073742336,Z.c,Z.c,[]),a.Kb(1073742336,S.g,S.g,[]),a.Kb(1073742336,w.c,w.c,[]),a.Kb(1073742336,E.c,E.c,[]),a.Kb(1073742336,L.a,L.a,[]),a.Kb(1073742336,Q.d,Q.d,[]),a.Kb(1073742336,U.d,U.d,[]),a.Kb(1073742336,Y.b,Y.b,[]),a.Kb(1073742336,Y.a,Y.a,[]),a.Kb(1073742336,G.d,G.d,[]),a.Kb(1073742336,P.i,P.i,[]),a.Kb(1073742336,X.a,X.a,[]),a.Kb(1073742336,N.j,N.j,[]),a.Kb(1073742336,_.c,_.c,[]),a.Kb(1073742336,$.a,$.a,[]),a.Kb(1073742336,D.o,D.o,[]),a.Kb(1073742336,ll.a,ll.a,[]),a.Kb(1073742336,nl.c,nl.c,[]),a.Kb(1073742336,ul.c,ul.c,[]),a.Kb(1073742336,al.e,al.e,[]),a.Kb(1073742336,el.c,el.c,[]),a.Kb(1073742336,bl.a,bl.a,[]),a.Kb(1073742336,tl.a,tl.a,[]),a.Kb(1073742336,q.c,q.c,[]),a.Kb(1073742336,q.b,q.b,[]),a.Kb(1073742336,D.z,D.z,[]),a.Kb(1073742336,D.p,D.p,[]),a.Kb(1073742336,z.d,z.d,[]),a.Kb(1073742336,F.e,F.e,[]),a.Kb(1073742336,O.c,O.c,[]),a.Kb(1073742336,cl.a,cl.a,[]),a.Kb(1073742336,ol.a,ol.a,[]),a.Kb(1073742336,il.a,il.a,[]),a.Kb(1073742336,rl.h,rl.h,[]),a.Kb(1073742336,sl.a,sl.a,[]),a.Kb(1073742336,pl.b,pl.b,[]),a.Kb(1073742336,pl.a,pl.a,[]),a.Kb(1073742336,Kl.e,Kl.e,[]),a.Kb(1073742336,T.c,T.c,[]),a.Kb(1073742336,dl.o,dl.o,[]),a.Kb(1073742336,vl.a,vl.a,[]),a.Kb(1073742336,yl.a,yl.a,[]),a.Kb(1073742336,Al.a,Al.a,[]),a.Kb(1073742336,hl.e,hl.e,[]),a.Kb(1073742336,I.c,I.c,[]),a.Kb(1073742336,ml.b,ml.b,[]),a.Kb(1073742336,kl.a,kl.a,[]),a.Kb(1073742336,Bl.a,Bl.a,[]),a.Kb(1073742336,r,r,[]),a.Kb(256,G.a,{separatorKeyCodes:[fl.f]},[]),a.Kb(256,D.g,D.k,[]),a.Kb(256,ml.a,Bl.b,[]),a.Kb(1024,A.j,(function(){return[[{path:"",component:i,pathMatch:"full"}]]}),[])])}))}}]);