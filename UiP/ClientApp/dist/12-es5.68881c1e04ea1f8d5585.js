(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{TbC0:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),a=u("F5nt"),t=u("FFMg"),s=u("od06"),i=u("/RaO"),o=u("wd/R"),c={smallImage:"http://aonepayroll-env.eu-west-1.elasticbeanstalk.com/assets/images/products/payslips/small",mediumImage:"http://aonepayroll-env.eu-west-1.elasticbeanstalk.com/assets/images/products/payslips/medium",image:"http://aonepayroll-env.eu-west-1.elasticbeanstalk.com/assets/images/products/payslips/big"},r=function(){function l(l,n,u,e){this.appSettings=l,this.appService=n,this.dialog=u,this.router=e,this.settings=this.appSettings.settings,this.smallImagePath=c.smallImage,this.mediumImagePath=c.mediumImage,this.mainImagePath=c.image}return l.prototype.ngOnInit=function(){this.getAllPayslipsCategories(),this.greetText=this.getGreetingTime(o())},l.prototype.getAllPayslipsCategories=function(){var l=this;this.appService.getAllPayslipCategories().subscribe((function(n){if(!n)throw new Error("Something went wrong!");l.allPayslipCategories=n,l.allPayslipCategories.forEach((function(l){l.products.forEach((function(n){n.productType=9===l.id||10===l.id?t.b.p60:11===l.id?t.b.p45:t.b.payslips}))}))}))},l.prototype.openProductDialog=function(l){var n=this;this.dialog.open(s.a,{data:{product:l,category:this.allPayslipCategories.find((function(n){return n.id===l.categoryId}))},panelClass:"product-dialog",direction:this.settings.rtl?"rtl":"ltr"}).afterClosed().subscribe((function(l){l&&n.router.navigate(["/products",l.id,l.name])}))},l.prototype.getGreetingTime=function(l){if(l&&l.isValid()){var n=parseFloat(l.format("HH"));return n>=12&&n<=17?"Afternoon":n>=17?"Evening":"Morning"}},l}(),b=function(){return function(){}}(),d=u("pMnS"),p=u("t68o"),m=u("zbXB"),h=u("NcP4"),g=u("xYTU"),C=u("+pzW"),v=u("v9Dh"),f=u("eDkP"),y=u("qAlS"),M=u("dWZg"),w=u("lLAP"),x=u("Fzqc"),P=u("ZYjt"),W=u("Ip0R"),_=u("o3x0"),k=u("ZYCi"),Y=e.Ab({encapsulation:0,styles:[[".products-tabs[_ngcontent-%COMP%]{margin-top:30px}"]],data:{}});function O(l){return e.Yb(0,[(l()(),e.Cb(0,0,null,null,8,"h3",[],null,null,null,null,null)),(l()(),e.Wb(1,null,[" "," Payslips "])),(l()(),e.Cb(2,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e.Wb(3,null,[" ",", "])),e.Sb(4,2),(l()(),e.Wb(-1,null,[" each additional Payslip "])),(l()(),e.Cb(6,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e.Wb(7,null,[" "," "])),e.Sb(8,2)],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.defaultProductGroupCount);var u=e.Xb(n,3,0,l(n,4,0,e.Ob(n.parent.parent.parent,0),n.parent.context.$implicit.defaultProductGroupPrice,"GBP"));l(n,3,0,u);var a=e.Xb(n,7,0,l(n,8,0,e.Ob(n.parent.parent.parent,0),n.parent.context.$implicit.additionalPayslipPrice,"GBP"));l(n,7,0,a)}))}function j(l){return e.Yb(0,[(l()(),e.Cb(0,0,null,null,5,"h3",[],null,null,null,null,null)),(l()(),e.Wb(1,null,[" "," "])),(l()(),e.Cb(2,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),e.Wb(3,null,[" "," "])),e.Sb(4,2),(l()(),e.Wb(-1,null,[", each "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.eitherModeText);var u=e.Xb(n,3,0,l(n,4,0,e.Ob(n.parent.parent.parent,0),n.parent.context.$implicit.additionalPayslipPrice,"GBP"));l(n,3,0,u)}))}function I(l){return e.Yb(0,[(l()(),e.Cb(0,0,null,null,10,"div",[["class","col-md-3 col-sm-6 col-xs-ls"]],null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,9,"div",[["class","product-item"]],null,null,null,null,null)),(l()(),e.Cb(2,0,null,null,8,"div",[["class","product-item__image text-center"]],null,null,null,null,null)),(l()(),e.Cb(3,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),e.Cb(4,0,null,null,3,"div",[["class","product-item__link-box"]],null,null,null,null,null)),(l()(),e.Cb(5,16777216,null,null,2,"span",[["matTooltip","Quick view"]],null,[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(l,n,u){var a=!0,t=l.component;return"longpress"===n&&(a=!1!==e.Ob(l,6).show()&&a),"keydown"===n&&(a=!1!==e.Ob(l,6)._handleKeydown(u)&&a),"touchend"===n&&(a=!1!==e.Ob(l,6)._handleTouchend()&&a),"click"===n&&(a=!1!==t.openProductDialog(l.context.$implicit)&&a),a}),null,null)),e.Bb(6,212992,null,0,v.d,[f.c,e.n,y.b,e.Y,e.G,M.a,w.c,w.h,v.b,[2,x.c],[2,v.a],[2,P.f]],{message:[0,"message"]},null),(l()(),e.Wb(-1,null,["Click here for full detail"])),(l()(),e.Cb(8,0,null,null,2,"div",[["class","product-item__status"]],null,null,null,null,null)),(l()(),e.Cb(9,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Wb(10,null,["",""]))],(function(l,n){l(n,6,0,"Quick view")}),(function(l,n){l(n,3,0,e.Gb(2,"",n.component.smallImagePath,"/",n.context.$implicit.images[0].small,""),e.Gb(1,"",n.context.$implicit.images[0].alt,"")),l(n,10,0,n.context.$implicit.name)}))}function S(l){return e.Yb(0,[(l()(),e.Cb(0,0,null,null,2,"div",[["class","pull_center"]],null,null,null,null,null)),(l()(),e.rb(16777216,null,null,1,null,I)),e.Bb(2,278528,null,0,W.l,[e.Y,e.V,e.y],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.parent.context.$implicit.products)}),null)}function T(l){return e.Yb(0,[(l()(),e.Cb(0,0,null,null,0,"div",[["class","col-md-3 col-sm-6 hidden-sm col-xs-ls"]],null,null,null,null,null))],null,null)}function $(l){return e.Yb(0,[(l()(),e.Cb(0,0,null,null,10,"div",[["class","col-md-3 col-sm-6 col-xs-ls"]],null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,9,"div",[["class","product-item"]],null,null,null,null,null)),(l()(),e.Cb(2,0,null,null,8,"div",[["class","product-item__image text-center"]],null,null,null,null,null)),(l()(),e.Cb(3,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),e.Cb(4,0,null,null,3,"div",[["class","product-item__link-box"]],null,null,null,null,null)),(l()(),e.Cb(5,16777216,null,null,2,"span",[["matTooltip","Quick view"]],null,[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(l,n,u){var a=!0,t=l.component;return"longpress"===n&&(a=!1!==e.Ob(l,6).show()&&a),"keydown"===n&&(a=!1!==e.Ob(l,6)._handleKeydown(u)&&a),"touchend"===n&&(a=!1!==e.Ob(l,6)._handleTouchend()&&a),"click"===n&&(a=!1!==t.openProductDialog(l.context.$implicit)&&a),a}),null,null)),e.Bb(6,212992,null,0,v.d,[f.c,e.n,y.b,e.Y,e.G,M.a,w.c,w.h,v.b,[2,x.c],[2,v.a],[2,P.f]],{message:[0,"message"]},null),(l()(),e.Wb(-1,null,["Click here for full detail"])),(l()(),e.Cb(8,0,null,null,2,"div",[["class","product-item__status"]],null,null,null,null,null)),(l()(),e.Cb(9,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Wb(10,null,["",""]))],(function(l,n){l(n,6,0,"Quick view")}),(function(l,n){l(n,3,0,e.Gb(2,"",n.component.smallImagePath,"/",n.context.$implicit.images[0].small,""),e.Gb(1,"",n.context.$implicit.images[0].alt,"")),l(n,10,0,n.context.$implicit.name)}))}function B(l){return e.Yb(0,[(l()(),e.Cb(0,0,null,null,0,"div",[["class","col-md-3 col-sm-6 hidden-sm col-xs-ls"]],null,null,null,null,null))],null,null)}function A(l){return e.Yb(0,[(l()(),e.rb(16777216,null,null,1,null,T)),e.Bb(1,16384,null,0,W.m,[e.Y,e.V],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,null,1,null,$)),e.Bb(3,278528,null,0,W.l,[e.Y,e.V,e.y],{ngForOf:[0,"ngForOf"]},null),(l()(),e.rb(16777216,null,null,1,null,B)),e.Bb(5,16384,null,0,W.m,[e.Y,e.V],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(0,null,null,0))],(function(l,n){l(n,1,0,2==n.parent.context.$implicit.products.length),l(n,3,0,n.parent.context.$implicit.products),l(n,5,0,2==n.parent.context.$implicit.products.length)}),null)}function G(l){return e.Yb(0,[(l()(),e.Cb(0,0,null,null,20,"div",[["class","section__inner"]],null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,12,"div",[["class","heading-section heading-section--product"]],null,null,null,null,null)),(l()(),e.Cb(2,0,null,null,2,"div",[["class","heading-section__title"]],null,null,null,null,null)),(l()(),e.Cb(3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Wb(4,null,["",""])),(l()(),e.Cb(5,0,null,null,8,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e.Cb(6,0,null,null,7,"div",[["class","group_discription"]],null,null,null,null,null)),(l()(),e.Cb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Wb(8,null,["",""])),(l()(),e.Cb(9,0,null,null,4,"div",[["class","group_product_price text-center"]],null,null,null,null,null)),(l()(),e.rb(16777216,null,null,1,null,O)),e.Bb(11,16384,null,0,W.m,[e.Y,e.V],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,null,1,null,j)),e.Bb(13,16384,null,0,W.m,[e.Y,e.V],{ngIf:[0,"ngIf"]},null),(l()(),e.Cb(14,0,null,null,6,"div",[["class","tab-content"]],null,null,null,null,null)),(l()(),e.Cb(15,0,null,null,5,"div",[["class","tab-pane fade in active"],["id","featured"]],null,null,null,null,null)),(l()(),e.Cb(16,0,null,null,4,"div",[["class","section__content products"]],null,null,null,null,null)),(l()(),e.Cb(17,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.rb(16777216,null,null,1,null,S)),e.Bb(19,16384,null,0,W.m,[e.Y,e.V],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e.rb(0,[["anotherProductWrapper",2]],null,0,null,A))],(function(l,n){l(n,11,0,!n.context.$implicit.eitherMode),l(n,13,0,n.context.$implicit.eitherMode),l(n,19,0,3==n.context.$implicit.products.length,e.Ob(n,20))}),(function(l,n){l(n,4,0,n.context.$implicit.name),l(n,8,0,n.context.$implicit.description)}))}function q(l){return e.Yb(0,[(l()(),e.Cb(0,0,null,null,2,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.rb(16777216,null,null,1,null,G)),e.Bb(2,278528,null,0,W.l,[e.Y,e.V,e.y],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.allPayslipCategories)}),null)}function E(l){return e.Yb(0,[e.Qb(0,W.d,[e.A]),(l()(),e.Cb(1,0,null,null,15,"div",[["class","revo rev-slider-beta rev-slider-alpha"]],null,null,null,null,null)),(l()(),e.Cb(2,0,null,null,14,"div",[["class","revo-wrapper"]],null,null,null,null,null)),(l()(),e.Cb(3,0,null,null,13,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.Cb(4,0,null,null,12,"div",[["class","revo-inner"]],null,null,null,null,null)),(l()(),e.Cb(5,0,null,null,11,"div",[["class","home-banner text-center"]],null,null,null,null,null)),(l()(),e.Cb(6,0,null,null,9,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.Cb(7,0,null,null,8,"div",[["class","banner_heading2"]],null,null,null,null,null)),(l()(),e.Cb(8,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Wb(9,null,["Good ",", Welcome to our website"])),(l()(),e.Cb(10,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,["Confidentiality of our clients is guaranteed ! "])),(l()(),e.Cb(12,0,null,null,1,"h3",[["class","brown"]],null,null,null,null,null)),(l()(),e.Wb(-1,null,["ALL ORDERS ARE POSTED ON THE SAME DAY BY 1ST CLASS POST !"])),(l()(),e.Cb(14,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,["information on each of our client is deleted within 24 hours !"])),(l()(),e.Cb(16,0,null,null,0,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.Cb(17,0,null,null,4,"section",[["id","about_info"]],null,null,null,null,null)),(l()(),e.Cb(18,0,null,null,3,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.Cb(19,0,null,null,2,"div",[["class","col-md-10 col-md-offset-1"]],null,null,null,null,null)),(l()(),e.Cb(20,0,null,null,1,"p",[["class","text-center about_info_prop"]],null,null,null,null,null)),(l()(),e.Wb(-1,null,[" If your payslips or p60 are not accepted as proof of income because they are hand written, or they are damaged or you have lost your original payslips or p60, then we can provide you with original computer generated payslips and P60. We operate a fully computerised payroll system that is guaranteed to produce accurate calculation and produces high quality documentations, We have full range of payslips and P60s, Please be assured that we will supply you with Actual Original payslips and p60, We aim to meet your requirements with flexible and friendly service. "])),(l()(),e.Cb(22,0,null,null,37,"section",[],null,null,null,null,null)),(l()(),e.Cb(23,0,null,null,0,"h1",[["class","nomargin"]],null,null,null,null,null)),(l()(),e.Cb(24,0,null,null,35,"div",[["class","row"],["id","moreinfo"]],null,null,null,null,null)),(l()(),e.Cb(25,0,null,null,34,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.Cb(26,0,null,null,7,"div",[["class","col-md-6 col-sm-6 text-center"]],null,null,null,null,null)),(l()(),e.Cb(27,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),e.Cb(28,0,null,null,1,"div",[["class","icon_holder"]],null,null,null,null,null)),(l()(),e.Cb(29,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-university"]],null,null,null,null,null)),(l()(),e.Cb(30,0,null,null,3,"div",[["class","col-md-9 nopad"]],null,null,null,null,null)),(l()(),e.Cb(31,0,null,null,2,"div",[["class","text_hold"]],null,null,null,null,null)),(l()(),e.Cb(32,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,[" For mortgage, loan, or car finance purposes we strongly recommend that you should purchase payslips which will show your home address, Our Premium, Security, and Plus range payslips will show your address on them. "])),(l()(),e.Cb(34,0,null,null,7,"div",[["class","col-md-6 col-sm-6 text-center"]],null,null,null,null,null)),(l()(),e.Cb(35,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),e.Cb(36,0,null,null,1,"div",[["class","icon_holder"]],null,null,null,null,null)),(l()(),e.Cb(37,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-fax"]],null,null,null,null,null)),(l()(),e.Cb(38,0,null,null,3,"div",[["class","col-md-9 nopad"]],null,null,null,null,null)),(l()(),e.Cb(39,0,null,null,2,"div",[["class","text_hold"]],null,null,null,null,null)),(l()(),e.Cb(40,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,[" We can Fax or e-mail your Payslips to you within 2 hours, and we will post the original's to you on the same day, You can select this option on the checkout page. "])),(l()(),e.Cb(42,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),e.Cb(43,0,null,null,0,"div",[["class","gap60"]],null,null,null,null,null)),(l()(),e.Cb(44,0,null,null,7,"div",[["class","col-md-6 col-sm-6 text-center"]],null,null,null,null,null)),(l()(),e.Cb(45,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),e.Cb(46,0,null,null,1,"div",[["class","icon_holder"]],null,null,null,null,null)),(l()(),e.Cb(47,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-money"]],null,null,null,null,null)),(l()(),e.Cb(48,0,null,null,3,"div",[["class","col-md-9 nopad"]],null,null,null,null,null)),(l()(),e.Cb(49,0,null,null,2,"div",[["class","text_hold"]],null,null,null,null,null)),(l()(),e.Cb(50,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,["We can work out your Bonus, Overtime, Pension, Stock purchase, and more, You can select this option on the checkout page. "])),(l()(),e.Cb(52,0,null,null,7,"div",[["class","col-md-6 col-sm-6 text-center"]],null,null,null,null,null)),(l()(),e.Cb(53,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),e.Cb(54,0,null,null,1,"div",[["class","icon_holder"]],null,null,null,null,null)),(l()(),e.Cb(55,0,null,null,0,"i",[["class","flaticon-transport"]],null,null,null,null,null)),(l()(),e.Cb(56,0,null,null,3,"div",[["class","col-md-9 nopad"]],null,null,null,null,null)),(l()(),e.Cb(57,0,null,null,2,"div",[["class","text_hold"]],null,null,null,null,null)),(l()(),e.Cb(58,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,["We provide a fast and efficient service and you can have your order delivered through your letter box NEXT MORNING!"])),(l()(),e.Cb(60,0,null,null,107,"section",[["class","section our-products"]],null,null,null,null,null)),(l()(),e.Cb(61,0,null,null,0,"h1",[["class","nomargin"]],null,null,null,null,null)),(l()(),e.Cb(62,0,null,null,50,"div",[["aria-hidden","true"],["class","shop-modal modal fade"],["id","shopModal"],["role","dialog"],["tabindex","-1"]],null,null,null,null,null)),(l()(),e.Cb(63,0,null,null,49,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.Cb(64,0,null,null,48,"div",[["class","shop-modal-dialog"]],null,null,null,null,null)),(l()(),e.Cb(65,0,null,null,47,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),e.Cb(66,0,null,null,5,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),e.Cb(67,0,null,null,4,"button",[["class","close closehp"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),e.Cb(68,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),e.Wb(-1,null,["\xd7"])),(l()(),e.Cb(70,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),e.Wb(-1,null,["Close"])),(l()(),e.Cb(72,0,null,null,37,"div",[["class","shop-post shop-modal-post"]],null,null,null,null,null)),(l()(),e.Cb(73,0,null,null,36,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Cb(74,0,null,null,8,"div",[["class","col-md-5 text-center"]],null,null,null,null,null)),(l()(),e.Cb(75,0,null,null,7,"div",[["class","app-figure"],["id","zoom-fig"]],null,null,null,null,null)),(l()(),e.Cb(76,0,null,null,1,"a",[["class","MagicZoom"],["href","assets/other-images/gallery/original/ef.jpg"],["id","Zoom-2"],["title","Your Product Title Here"]],null,null,null,null,null)),(l()(),e.Cb(77,0,null,null,0,"img",[["alt",""],["src","assets/other-images/gallery/preview/spp.jpg?scale.height=400"]],null,null,null,null,null)),(l()(),e.Cb(78,0,null,null,4,"div",[["class","selectors"]],null,null,null,null,null)),(l()(),e.Cb(79,0,null,null,1,"a",[["data-image","assets/other-images/gallery/preview/spp.jpg?scale.height=400"],["data-zoom-id","Zoom-2"],["href","assets/other-images/gallery/original/ef.jpg"]],null,null,null,null,null)),(l()(),e.Cb(80,0,null,null,0,"img",[["alt",""],["src","assets/other-images/gallery/thumbs/sps.jpg?scale.width=56"],["srcset","assets/other-images/gallery/original/ef.jpg?scale.width=112 2x"]],null,null,null,null,null)),(l()(),e.Cb(81,0,null,null,1,"a",[["data-image","assets/other-images/gallery/preview/efp.jpg?scale.height=400"],["data-zoom-id","Zoom-2"],["href","assets/other-images/gallery/original/eff.jpg"]],null,null,null,null,null)),(l()(),e.Cb(82,0,null,null,0,"img",[["alt",""],["src","assets/other-images/gallery/thumbs/sps2.jpg?scale.width=56"],["srcset","assets/other-images/gallery/original/eff.jpg?scale.width=112 2x"]],null,null,null,null,null)),(l()(),e.Cb(83,0,null,null,26,"div",[["class","col-md-7"]],null,null,null,null,null)),(l()(),e.Cb(84,0,null,null,25,"div",[["class","shop-post-content"]],null,null,null,null,null)),(l()(),e.Cb(85,0,null,null,2,"div",[["class","shop-post-name"]],null,null,null,null,null)),(l()(),e.Cb(86,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,["Standard Security Dot Matrix Payslips"])),(l()(),e.Cb(88,0,null,null,2,"div",[["class","shop-post-price"]],null,null,null,null,null)),(l()(),e.Cb(89,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,[" 3 Payslips \xa338.00, each additional Payslip \xa35.50 "])),(l()(),e.Cb(91,0,null,null,4,"div",[["class","shop-post-context"]],null,null,null,null,null)),(l()(),e.Cb(92,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,["Description"])),(l()(),e.Cb(94,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,[" These payslips are good quality payslips, they are printed in a security sealed envelope using a high-tech dot matrix printer, these payslips will show your basic up to date national insurance and income tax deduction figures on them, also these payslips will show your name, your national insurance number, and name of company you work for "])),(l()(),e.Cb(96,0,null,null,13,"div",[["class","shop-post-cart"]],null,null,null,null,null)),(l()(),e.Cb(97,0,null,null,9,"div",[["class","cart-input"]],null,null,null,null,null)),(l()(),e.Cb(98,0,null,null,8,"form",[],null,null,null,null,null)),(l()(),e.Cb(99,0,null,null,7,"div",[["class","quantity"]],null,null,null,null,null)),(l()(),e.Cb(100,0,null,null,2,"div",[["class","quantity-button"]],null,null,null,null,null)),(l()(),e.Cb(101,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,["-"])),(l()(),e.Cb(103,0,null,null,0,"input",[["disabled",""],["id","item_select"],["type","number"],["value","3"]],null,null,null,null,null)),(l()(),e.Cb(104,0,null,null,2,"div",[["class","quantity-button"]],null,null,null,null,null)),(l()(),e.Cb(105,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,["+"])),(l()(),e.Cb(107,0,null,null,2,"div",[["class","cart-submit text-center"]],null,null,null,null,null)),(l()(),e.Cb(108,0,null,null,1,"button",[["class","rv-btn rv-btn-md rv-btn-primary text-uppercase add_to_car_btn"]],null,null,null,null,null)),(l()(),e.Wb(-1,null,["Add to cart"])),(l()(),e.Cb(110,0,null,null,2,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),e.Cb(111,0,null,null,1,"button",[["class","btn btn-default"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),e.Wb(-1,null,["Close"])),(l()(),e.Cb(113,0,null,null,50,"div",[["aria-hidden","true"],["class","shop-modal modal fade"],["id","shopModal2"],["role","dialog"],["tabindex","-1"]],null,null,null,null,null)),(l()(),e.Cb(114,0,null,null,49,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.Cb(115,0,null,null,48,"div",[["class","shop-modal-dialog"]],null,null,null,null,null)),(l()(),e.Cb(116,0,null,null,47,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),e.Cb(117,0,null,null,5,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),e.Cb(118,0,null,null,4,"button",[["class","close closehp"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),e.Cb(119,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),e.Wb(-1,null,["\xd7"])),(l()(),e.Cb(121,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),e.Wb(-1,null,["Close"])),(l()(),e.Cb(123,0,null,null,37,"div",[["class","shop-post shop-modal-post"]],null,null,null,null,null)),(l()(),e.Cb(124,0,null,null,36,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Cb(125,0,null,null,8,"div",[["class","col-md-5 text-center"]],null,null,null,null,null)),(l()(),e.Cb(126,0,null,null,7,"div",[["class","app-figure"],["id","zoom-fig"]],null,null,null,null,null)),(l()(),e.Cb(127,0,null,null,1,"a",[["class","MagicZoom"],["href","assets/other-images/gallery/preview/mtop.jpg"],["id","Zoom-1"],["title","Your Product Title Here"]],null,null,null,null,null)),(l()(),e.Cb(128,0,null,null,0,"img",[["alt",""],["src","assets/other-images/gallery/preview/mtop.jpg?scale.height=400"]],null,null,null,null,null)),(l()(),e.Cb(129,0,null,null,4,"div",[["class","selectors"]],null,null,null,null,null)),(l()(),e.Cb(130,0,null,null,1,"a",[["data-image","assets/other-images/gallery/preview/mtop.jpg?scale.height=400"],["data-zoom-id","Zoom-1"],["href","assets/other-images/gallery/original/MailerP60envelope_06.jpg"]],null,null,null,null,null)),(l()(),e.Cb(131,0,null,null,0,"img",[["alt",""],["src","assets/other-images/gallery/thumbs/m1.jpg?scale.width=56"],["srcset","assets/other-images/gallery/original/MailerP60envelope_06.jpg?scale.width=112 2x"]],null,null,null,null,null)),(l()(),e.Cb(132,0,null,null,1,"a",[["data-image","assets/other-images/gallery/preview/mp.jpg?scale.height=400"],["data-zoom-id","Zoom-1"],["href","assets/other-images/gallery/original/MailerP60_07.jpg"]],null,null,null,null,null)),(l()(),e.Cb(133,0,null,null,0,"img",[["alt",""],["src","assets/other-images/gallery/thumbs/m2.jpg?scale.width=56"],["srcset","assets/other-images/gallery/original/MailerP60_07.jpg?scale.width=112 2x"]],null,null,null,null,null)),(l()(),e.Cb(134,0,null,null,26,"div",[["class","col-md-7"]],null,null,null,null,null)),(l()(),e.Cb(135,0,null,null,25,"div",[["class","shop-post-content"]],null,null,null,null,null)),(l()(),e.Cb(136,0,null,null,2,"div",[["class","shop-post-name"]],null,null,null,null,null)),(l()(),e.Cb(137,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,["Mailer P60 and Security P60"])),(l()(),e.Cb(139,0,null,null,2,"div",[["class","shop-post-price"]],null,null,null,null,null)),(l()(),e.Cb(140,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,[" old or new version of P45 \xa350.00, each "])),(l()(),e.Cb(142,0,null,null,4,"div",[["class","shop-post-context"]],null,null,null,null,null)),(l()(),e.Cb(143,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,["Description"])),(l()(),e.Cb(145,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,[" The P60 is a certificate, which contains your earnings and tax payments over the financial tax year, p60 is issued to employee by the employer on 6th of April every year, both mailer Portrait p60 and security Portrait p60 will show your full name, your address, your national insurance number, and name address of company you work for Mailer Portrait p60 is a finest quality p60 and it is security sealed once printed by a laser printer, Security Portrait p60 is superb quality p60 and it is printed in a security sealed envelope using a high-tech dot matrix printer "])),(l()(),e.Cb(147,0,null,null,13,"div",[["class","shop-post-cart"]],null,null,null,null,null)),(l()(),e.Cb(148,0,null,null,9,"div",[["class","cart-input"]],null,null,null,null,null)),(l()(),e.Cb(149,0,null,null,8,"form",[],null,null,null,null,null)),(l()(),e.Cb(150,0,null,null,7,"div",[["class","quantity"]],null,null,null,null,null)),(l()(),e.Cb(151,0,null,null,2,"div",[["class","quantity-button"]],null,null,null,null,null)),(l()(),e.Cb(152,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,["-"])),(l()(),e.Cb(154,0,null,null,0,"input",[["disabled",""],["id","item_select"],["type","number"],["value","3"]],null,null,null,null,null)),(l()(),e.Cb(155,0,null,null,2,"div",[["class","quantity-button"]],null,null,null,null,null)),(l()(),e.Cb(156,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Wb(-1,null,["+"])),(l()(),e.Cb(158,0,null,null,2,"div",[["class","cart-submit text-center"]],null,null,null,null,null)),(l()(),e.Cb(159,0,null,null,1,"button",[["class","rv-btn rv-btn-md rv-btn-primary text-uppercase"]],null,null,null,null,null)),(l()(),e.Wb(-1,null,["Add to cart"])),(l()(),e.Cb(161,0,null,null,2,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),e.Cb(162,0,null,null,1,"button",[["class","btn btn-default"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),e.Wb(-1,null,["Close"])),(l()(),e.Cb(164,0,null,null,3,"div",[["class","section__wrapper section__wrapper--has-bg"]],null,null,null,null,null)),(l()(),e.Cb(165,0,null,null,0,"h1",[["class","nomargin"]],null,null,null,null,null)),(l()(),e.rb(16777216,null,null,1,null,q)),e.Bb(167,16384,null,0,W.m,[e.Y,e.V],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,167,0,n.component.allPayslipCategories)}),(function(l,n){l(n,9,0,n.component.greetText)}))}function F(l){return e.Yb(0,[(l()(),e.Cb(0,0,null,null,1,"app-home",[],null,null,null,E,Y)),e.Bb(1,114688,null,0,r,[i.a,a.a,_.e,k.l],null,null)],(function(l,n){l(n,1,0)}),null)}var V=e.yb("app-home",r,F,{},{},[]),z=u("OzfB"),D=u("4tE/"),Z=u("M2Lx"),L=u("Wf4p"),N=u("jQLj"),Q=u("mVsa"),R=u("uGex"),H=u("4epT"),X=u("OkvK"),J=u("wmQ5"),K=u("S8NE"),U=u("21Lb"),ll=u("hUWP"),nl=u("3pJQ"),ul=u("V9q+"),el=u("4c35"),al=u("UodH"),tl=u("u7R8"),sl=u("FVSy"),il=u("de3e"),ol=u("/dO6"),cl=u("YhbO"),rl=u("jlZm"),bl=u("r43C"),dl=u("SMsm"),pl=u("/VYK"),ml=u("seP3"),hl=u("b716"),gl=u("LC5p"),Cl=u("0/Q6"),vl=u("Z+uX"),fl=u("Blfk"),yl=u("9It4"),Ml=u("Nsh5"),wl=u("w+lc"),xl=u("kWGw"),Pl=u("vARd"),Wl=u("y4qS"),_l=u("BHnd"),kl=u("La40"),Yl=u("8mMr"),Ol=u("Lwpp"),jl=u("bse0"),Il=u("DXe4"),Sl=u("PCNd"),Tl=u("YSh2");u.d(n,"HomeModuleNgFactory",(function(){return $l}));var $l=e.zb(b,[],(function(l){return e.Lb([e.Mb(512,e.k,e.kb,[[8,[d.a,p.a,m.b,m.a,h.a,g.a,g.b,C.a,V]],[3,e.k],e.E]),e.Mb(4608,W.o,W.n,[e.A,[2,W.D]]),e.Mb(5120,e.b,(function(l,n){return[z.j(l,n)]}),[W.e,e.J]),e.Mb(4608,f.c,f.c,[f.i,f.e,e.k,f.h,f.f,e.w,e.G,W.e,x.c,[2,W.i]]),e.Mb(5120,f.j,f.k,[f.c]),e.Mb(5120,D.a,D.b,[f.c]),e.Mb(4608,Z.c,Z.c,[]),e.Mb(4608,L.d,L.d,[]),e.Mb(5120,_.c,_.d,[f.c]),e.Mb(135680,_.e,_.e,[f.c,e.w,[2,W.i],[2,_.b],_.c,[3,_.e],f.e]),e.Mb(4608,N.i,N.i,[]),e.Mb(5120,N.a,N.b,[f.c]),e.Mb(5120,Q.a,Q.d,[f.c]),e.Mb(4608,L.c,L.y,[[2,L.h],M.a]),e.Mb(5120,R.a,R.b,[f.c]),e.Mb(5120,v.b,v.c,[f.c]),e.Mb(4608,P.e,L.e,[[2,L.i],[2,L.n]]),e.Mb(5120,H.b,H.a,[[3,H.b]]),e.Mb(5120,X.b,X.a,[[3,X.b]]),e.Mb(5120,J.b,J.a,[[3,J.b]]),e.Mb(1073742336,W.c,W.c,[]),e.Mb(1073742336,k.p,k.p,[[2,k.u],[2,k.l]]),e.Mb(1073742336,K.a,K.a,[]),e.Mb(1073742336,z.c,z.c,[]),e.Mb(1073742336,x.a,x.a,[]),e.Mb(1073742336,U.d,U.d,[]),e.Mb(1073742336,ll.b,ll.b,[]),e.Mb(1073742336,nl.a,nl.a,[]),e.Mb(1073742336,ul.a,ul.a,[[2,z.g],e.J]),e.Mb(1073742336,L.n,L.n,[[2,L.f],[2,P.f]]),e.Mb(1073742336,M.b,M.b,[]),e.Mb(1073742336,L.x,L.x,[]),e.Mb(1073742336,L.v,L.v,[]),e.Mb(1073742336,L.s,L.s,[]),e.Mb(1073742336,el.g,el.g,[]),e.Mb(1073742336,y.c,y.c,[]),e.Mb(1073742336,f.g,f.g,[]),e.Mb(1073742336,D.c,D.c,[]),e.Mb(1073742336,al.c,al.c,[]),e.Mb(1073742336,tl.a,tl.a,[]),e.Mb(1073742336,sl.d,sl.d,[]),e.Mb(1073742336,Z.d,Z.d,[]),e.Mb(1073742336,il.b,il.b,[]),e.Mb(1073742336,il.a,il.a,[]),e.Mb(1073742336,ol.d,ol.d,[]),e.Mb(1073742336,_.i,_.i,[]),e.Mb(1073742336,w.a,w.a,[]),e.Mb(1073742336,N.j,N.j,[]),e.Mb(1073742336,cl.c,cl.c,[]),e.Mb(1073742336,rl.a,rl.a,[]),e.Mb(1073742336,L.o,L.o,[]),e.Mb(1073742336,bl.a,bl.a,[]),e.Mb(1073742336,dl.c,dl.c,[]),e.Mb(1073742336,pl.c,pl.c,[]),e.Mb(1073742336,ml.e,ml.e,[]),e.Mb(1073742336,hl.c,hl.c,[]),e.Mb(1073742336,gl.a,gl.a,[]),e.Mb(1073742336,Cl.a,Cl.a,[]),e.Mb(1073742336,Q.c,Q.c,[]),e.Mb(1073742336,Q.b,Q.b,[]),e.Mb(1073742336,L.z,L.z,[]),e.Mb(1073742336,L.p,L.p,[]),e.Mb(1073742336,R.d,R.d,[]),e.Mb(1073742336,v.e,v.e,[]),e.Mb(1073742336,H.c,H.c,[]),e.Mb(1073742336,vl.a,vl.a,[]),e.Mb(1073742336,fl.a,fl.a,[]),e.Mb(1073742336,yl.a,yl.a,[]),e.Mb(1073742336,Ml.h,Ml.h,[]),e.Mb(1073742336,wl.a,wl.a,[]),e.Mb(1073742336,xl.b,xl.b,[]),e.Mb(1073742336,xl.a,xl.a,[]),e.Mb(1073742336,Pl.e,Pl.e,[]),e.Mb(1073742336,X.c,X.c,[]),e.Mb(1073742336,Wl.o,Wl.o,[]),e.Mb(1073742336,_l.a,_l.a,[]),e.Mb(1073742336,kl.a,kl.a,[]),e.Mb(1073742336,Yl.a,Yl.a,[]),e.Mb(1073742336,Ol.e,Ol.e,[]),e.Mb(1073742336,J.c,J.c,[]),e.Mb(1073742336,jl.b,jl.b,[]),e.Mb(1073742336,Il.a,Il.a,[]),e.Mb(1073742336,Sl.a,Sl.a,[]),e.Mb(1073742336,b,b,[]),e.Mb(256,ol.a,{separatorKeyCodes:[Tl.f]},[]),e.Mb(256,L.g,L.k,[]),e.Mb(256,jl.a,Sl.b,[]),e.Mb(1024,k.j,(function(){return[[{path:"",component:r,pathMatch:"full"}]]}),[])])}))}}]);