(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{VpHq:function(l,n,u){"use strict";u.r(n);var a=u("8Y7J"),s=u("F5nt");u("o4o8");class e{}class b{}var c=u("FqkJ");class t{constructor(l,n,u,a,s,e){this.appService=l,this.successService=n,this.snackBar=u,this.router=a,this.route=s,this.formBuilder=e,this.countries=[],this.months=[],this.years=[],this.deliveryMethods=[],this.grandTotal=0,this.paySlipsRequired=[],this.extras=[],this.payslipsCount=0,this.p45Count=0,this.p60Count=0}ngOnInit(){this.loadSuccess()}loadSuccess(){let l;l=new e,l.activeContext=this.appService.Data.context,l.google=this.route.snapshot.params.google,l.bank=this.route.snapshot.params.bank,this.successService.getSuccessPageData(l).subscribe(l=>{l&&(this.successData=new b,this.successData.activeContext=l.activeContext,this.successData.InvoiceNumber=l.invoiceNumber,this.successData.DeliveryMessage=l.deliveryMessage,this.successData.lblItems=l.lblItems,this.successData.PayType=l.PayType,this.successData.strbankorder=l.strbankorder,this.appService.Data.cartList.length=0,this.appService.Data.totalPrice=0,this.appService.Data.totalCartCount=0)})}}class i{}var o=u("pMnS"),r=u("t68o"),K=u("zbXB"),p=u("NcP4"),d=u("xYTU"),h=u("+pzW"),v=u("SVse"),g=u("dFDH"),y=u("iInd"),D=u("s7LF"),m=a.yb({encapsulation:0,styles:[[""]],data:{}});function A(l){return a.Wb(0,[(l()(),a.Ab(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),a.Ub(1,null,[" Your "," will not be posted out to you until we have received the payment. "]))],null,(function(l,n){var u=n.component;l(n,1,0,null==u.successData?null:u.successData.PayType)}))}function f(l){return a.Wb(0,[(l()(),a.Ab(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),a.Ub(1,null,[" You will receive your "," "," "]))],null,(function(l,n){var u=n.component;l(n,1,0,null==u.successData?null:u.successData.PayType,null==u.successData?null:u.successData.DeliveryMessage)}))}function k(l){return a.Wb(0,[(l()(),a.Ab(0,0,null,null,2,"div",[["class","heading-page-title text-uppercase text-center"]],null,null,null,null,null)),(l()(),a.Ab(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),a.Ub(-1,null,["Success"])),(l()(),a.Ab(3,0,null,null,30,"section",[["class","about"]],null,null,null,null,null)),(l()(),a.Ab(4,0,null,null,29,"div",[["class","section-wrapper"]],null,null,null,null,null)),(l()(),a.Ab(5,0,null,null,28,"div",[["class","container"]],null,null,null,null,null)),(l()(),a.Ab(6,0,null,null,27,"div",[["class","section-inner"]],null,null,null,null,null)),(l()(),a.Ab(7,0,null,null,26,"div",[["class","row"]],null,null,null,null,null)),(l()(),a.Ab(8,0,null,null,25,"div",[["class","col-md-12"],["id","successs"]],null,null,null,null,null)),(l()(),a.Ab(9,0,null,null,24,"div",[["id","content"]],null,null,null,null,null)),(l()(),a.Ab(10,0,null,null,0,"img",[["alt",""],["src","images/tl.gif"]],null,null,null,null,null)),(l()(),a.Ab(11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Ab(12,0,null,null,21,"div",[["class","w500"]],null,null,null,null,null)),(l()(),a.Ab(13,0,null,null,14,"div",[["id","hubintro"]],null,null,null,null,null)),(l()(),a.Ab(14,0,null,null,0,"div",[["class","t"]],null,null,null,null,null)),(l()(),a.Ab(15,0,null,null,11,"div",[["class","c"]],null,null,null,null,null)),(l()(),a.Ab(16,0,null,null,3,"h1",[["class","welcome2"]],null,null,null,null,null)),(l()(),a.Ub(-1,null,[" Thank You"])),(l()(),a.Ab(18,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Ub(-1,null,[" For placing your order with us "])),(l()(),a.Ab(20,0,null,null,6,"div",[["class","alt"]],null,null,null,null,null)),(l()(),a.pb(16777216,null,null,1,null,A)),a.zb(22,16384,null,0,v.m,[a.W,a.T],{ngIf:[0,"ngIf"]},null),(l()(),a.pb(16777216,null,null,1,null,f)),a.zb(24,16384,null,0,v.m,[a.W,a.T],{ngIf:[0,"ngIf"]},null),(l()(),a.Ab(25,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),a.Ub(26,null,[" In all correspondence please quote your order no: ",", We suggest you make a note of this number or print this page. "])),(l()(),a.Ab(27,0,null,null,0,"div",[["class","b"]],null,null,null,null,null)),(l()(),a.Ab(28,0,null,null,5,"div",[["id","company_logo"]],null,null,null,null,null)),(l()(),a.Ab(29,0,null,null,0,"img",[["alt",""],["src","images/laurel.jpg"]],null,null,null,null,null)),(l()(),a.Ab(30,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.Ub(-1,null,["A1 Payroll Limited"])),(l()(),a.Ab(32,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),a.Ub(-1,null,["Experts in payroll since 1994"]))],(function(l,n){var u=n.component;l(n,22,0,"1"===(null==u.successData?null:u.successData.strbankorder)),l(n,24,0,"1"!==(null==u.successData?null:u.successData.strbankorder))}),(function(l,n){var u=n.component;l(n,26,0,null==u.successData?null:u.successData.InvoiceNumber)}))}function w(l){return a.Wb(0,[(l()(),a.Ab(0,0,null,null,1,"app-success",[],null,null,null,k,m)),a.zb(1,114688,null,0,t,[s.a,c.a,g.b,y.l,y.a,D.g],null,null)],(function(l,n){l(n,1,0)}),null)}var S=a.wb("app-success",t,w,{},{},[]),x=u("/q54"),I=u("QQfA"),P=u("IP0z"),z=u("/Co4"),C=u("POq0"),T=u("Xd0L"),N=u("s6ns"),U=u("821u"),W=u("gavF"),J=u("/HVE"),q=u("JjoW"),F=u("Mz6y"),M=u("cUpR"),j=u("OIZN"),H=u("7kcP"),V=u("qJ5m"),B=u("S8NE"),L=u("VDRc"),O=u("ura0"),Z=u("Nhcz"),E=u("u9T3"),R=u("zMNK"),Y=u("hOhj"),Q=u("Fwaw"),G=u("mkRZ"),X=u("igqZ"),_=u("r0V8"),$=u("kNGD"),ll=u("5GAg"),nl=u("5Bek"),ul=u("c9fC"),al=u("FVPZ"),sl=u("Gi4r"),el=u("oapL"),bl=u("HsOI"),cl=u("ZwOa"),tl=u("02hT"),il=u("Q+lL"),ol=u("8P0U"),rl=u("W5yJ"),Kl=u("elxJ"),pl=u("BV1i"),dl=u("lT8R"),hl=u("pBi1"),vl=u("zQui"),gl=u("8rEH"),yl=u("rWV4"),Dl=u("BzsH"),ml=u("qJ50"),Al=u("bse0"),fl=u("DXe4"),kl=u("PCNd"),wl=u("dvZr");u.d(n,"SuccessModuleNgFactory",(function(){return Sl}));var Sl=a.xb(i,[],(function(l){return a.Jb([a.Kb(512,a.k,a.ib,[[8,[o.a,r.a,K.b,K.a,p.a,d.a,d.b,h.a,S]],[3,a.k],a.C]),a.Kb(4608,v.o,v.n,[a.y,[2,v.D]]),a.Kb(4608,D.g,D.g,[]),a.Kb(4608,D.y,D.y,[]),a.Kb(5120,a.b,(function(l,n){return[x.j(l,n)]}),[v.e,a.H]),a.Kb(4608,I.c,I.c,[I.i,I.e,a.k,I.h,I.f,a.u,a.E,v.e,P.c,[2,v.i]]),a.Kb(5120,I.j,I.k,[I.c]),a.Kb(5120,z.a,z.b,[I.c]),a.Kb(4608,C.c,C.c,[]),a.Kb(4608,T.d,T.d,[]),a.Kb(5120,N.c,N.d,[I.c]),a.Kb(135680,N.e,N.e,[I.c,a.u,[2,v.i],[2,N.b],N.c,[3,N.e],I.e]),a.Kb(4608,U.i,U.i,[]),a.Kb(5120,U.a,U.b,[I.c]),a.Kb(5120,W.a,W.d,[I.c]),a.Kb(4608,T.c,T.y,[[2,T.h],J.a]),a.Kb(5120,q.a,q.b,[I.c]),a.Kb(5120,F.b,F.c,[I.c]),a.Kb(4608,M.e,T.e,[[2,T.i],[2,T.n]]),a.Kb(5120,j.b,j.a,[[3,j.b]]),a.Kb(5120,H.b,H.a,[[3,H.b]]),a.Kb(5120,V.b,V.a,[[3,V.b]]),a.Kb(1073742336,v.c,v.c,[]),a.Kb(1073742336,y.p,y.p,[[2,y.u],[2,y.l]]),a.Kb(1073742336,D.x,D.x,[]),a.Kb(1073742336,D.u,D.u,[]),a.Kb(1073742336,B.a,B.a,[]),a.Kb(1073742336,x.c,x.c,[]),a.Kb(1073742336,P.a,P.a,[]),a.Kb(1073742336,L.d,L.d,[]),a.Kb(1073742336,O.b,O.b,[]),a.Kb(1073742336,Z.a,Z.a,[]),a.Kb(1073742336,E.a,E.a,[[2,x.g],a.H]),a.Kb(1073742336,T.n,T.n,[[2,T.f],[2,M.f]]),a.Kb(1073742336,J.b,J.b,[]),a.Kb(1073742336,T.x,T.x,[]),a.Kb(1073742336,T.v,T.v,[]),a.Kb(1073742336,T.s,T.s,[]),a.Kb(1073742336,R.g,R.g,[]),a.Kb(1073742336,Y.c,Y.c,[]),a.Kb(1073742336,I.g,I.g,[]),a.Kb(1073742336,z.c,z.c,[]),a.Kb(1073742336,Q.c,Q.c,[]),a.Kb(1073742336,G.a,G.a,[]),a.Kb(1073742336,X.d,X.d,[]),a.Kb(1073742336,C.d,C.d,[]),a.Kb(1073742336,_.b,_.b,[]),a.Kb(1073742336,_.a,_.a,[]),a.Kb(1073742336,$.d,$.d,[]),a.Kb(1073742336,N.i,N.i,[]),a.Kb(1073742336,ll.a,ll.a,[]),a.Kb(1073742336,U.j,U.j,[]),a.Kb(1073742336,nl.c,nl.c,[]),a.Kb(1073742336,ul.a,ul.a,[]),a.Kb(1073742336,T.o,T.o,[]),a.Kb(1073742336,al.a,al.a,[]),a.Kb(1073742336,sl.c,sl.c,[]),a.Kb(1073742336,el.c,el.c,[]),a.Kb(1073742336,bl.e,bl.e,[]),a.Kb(1073742336,cl.c,cl.c,[]),a.Kb(1073742336,tl.a,tl.a,[]),a.Kb(1073742336,il.a,il.a,[]),a.Kb(1073742336,W.c,W.c,[]),a.Kb(1073742336,W.b,W.b,[]),a.Kb(1073742336,T.z,T.z,[]),a.Kb(1073742336,T.p,T.p,[]),a.Kb(1073742336,q.d,q.d,[]),a.Kb(1073742336,F.e,F.e,[]),a.Kb(1073742336,j.c,j.c,[]),a.Kb(1073742336,ol.a,ol.a,[]),a.Kb(1073742336,rl.a,rl.a,[]),a.Kb(1073742336,Kl.a,Kl.a,[]),a.Kb(1073742336,pl.h,pl.h,[]),a.Kb(1073742336,dl.a,dl.a,[]),a.Kb(1073742336,hl.b,hl.b,[]),a.Kb(1073742336,hl.a,hl.a,[]),a.Kb(1073742336,g.e,g.e,[]),a.Kb(1073742336,H.c,H.c,[]),a.Kb(1073742336,vl.o,vl.o,[]),a.Kb(1073742336,gl.a,gl.a,[]),a.Kb(1073742336,yl.a,yl.a,[]),a.Kb(1073742336,Dl.a,Dl.a,[]),a.Kb(1073742336,ml.e,ml.e,[]),a.Kb(1073742336,V.c,V.c,[]),a.Kb(1073742336,Al.b,Al.b,[]),a.Kb(1073742336,fl.a,fl.a,[]),a.Kb(1073742336,kl.a,kl.a,[]),a.Kb(1073742336,i,i,[]),a.Kb(256,$.a,{separatorKeyCodes:[wl.f]},[]),a.Kb(256,T.g,T.k,[]),a.Kb(256,Al.a,kl.b,[]),a.Kb(1024,y.j,(function(){return[[{path:"",component:t,pathMatch:"full"}]]}),[])])}))}}]);