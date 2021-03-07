/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={a:!0},ea={};try{ea.__proto__=da;ca=ea.a;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function ha(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.aa=b.prototype}var l=this||self;function ia(){}function ja(a){a.ga=void 0;a.qa=function(){return a.ga?a.ga:a.ga=new a}}function m(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function n(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ka(a,b,c){return a.call.apply(a.bind,arguments)}function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return q.apply(null,arguments)}function r(a,b){function c(){}c.prototype=b.prototype;a.aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pd=function(d,e,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[e].apply(d,h)}}function ma(a){return a};var na={La:"n_amt",Na:"n_afoiu",Pa:"n_age",Qa:"n_k",Ra:"n_ars",Sa:"n_s",Ta:"n_ss",Ua:"n_ats",Va:"n_atas",Ya:"n_bi",Za:"n_bl",bb:"n_ccd",cb:"n_cc",eb:"n_c",fb:"n_cp",gb:"n_csbs",lb:"n_dt",nb:"n_deau",ob:"n_detl",qb:"n_eau",sb:"n_ecatb",rb:"n_ecata",tb:"n_ecatd",ub:"n_ecatst",vb:"n_ecesu",wb:"n_ecil",xb:"n_ecpde",yb:"n_edmp",zb:"n_edtt",Ab:"n_edlh",Bb:"n_efab",Cb:"n_eh",Db:"n_eil",Eb:"n_eliw",Fb:"n_eod",Gb:"n_eoros",Hb:"n_eon",Ib:"n_ep",Mb:"n_fpae",Qb:"n_hak",Sb:"n_imb",Tb:"n_imp",Vb:"n_j",Zb:"n_lcu",
ac:"n_mpak",bc:"n_mpau",cc:"n_iu",lc:"n_nmri",jc:"n_nib",kc:"n_nmb",mc:"n_npd",nc:"n_npv",oc:"n_oe",rc:"n_pau",wc:"n_rs",yc:"n_rau",Cc:"n_ses",Hc:"n_scp",Pc:"n_sit",Qc:"n_t",Uc:"n_ton",Rc:"n_tak",Tc:"n_tipe",Sc:"n_tbti",Vc:"n_taau",Wc:"n_tcu",Xc:"n_tcur",Zc:"n_tmd",$c:"n_ur",ad:"n_uptc",ed:"n_ugat",fd:"n_uo",dd:"n_ui",bd:"n_ue",cd:"n_ugs",ld:"n_wfp",md:"n_wcv"};function t(a){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}r(t,Error);t.prototype.name="CustomError";var u;function v(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");t.call(this,c+a[d])}r(v,t);v.prototype.name="AssertionError";function oa(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d}else a&&(e+=": "+a,f=b);throw new v(""+e,f||[]);}function w(a,b,c){a||oa("",null,b,Array.prototype.slice.call(arguments,2));return a}function x(a,b){throw new v("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));}
function y(a,b,c){"number"!==typeof a&&oa("Expected number but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2));return a}function pa(a,b,c){"string"!==typeof a&&oa("Expected string but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2))};function qa(a){for(var b in na)a.call(void 0,na[b],b,na)}function ra(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}function sa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};function z(){var a={DEFAULT:0,DARK:1};this.m={};this.ua={};if(a)for(var b in a)this.put(b,a[b])}z.prototype.put=function(a,b){w(void 0===this.m[a]);w(void 0===this.ua[b]);this.m[a]=b;this.ua[b]=a};z.prototype.get=function(a){return this.m[a]};z.prototype.K=function(){return sa(this.m)};var ta,ua={Ma:"activedescendant",Wa:"atomic",Xa:"autocomplete",$a:"busy",ab:"checked",hb:"colindex",ib:"controls",mb:"describedby",DISABLED:"disabled",pb:"dropeffect",Lb:"expanded",Nb:"flowto",Ob:"grabbed",Pb:"haspopup",Rb:"hidden",Ub:"invalid",Wb:"label",Xb:"labelledby",Yb:"level",$b:"live",ec:"multiline",fc:"multiselectable",pc:"orientation",qc:"owns",sc:"posinset",tc:"pressed",vc:"readonly",xc:"relevant",zc:"required",Ac:"rowindex",Bc:"selected",Dc:"setsize",Ic:"sort",gd:"valuemax",hd:"valuemin",
jd:"valuenow",kd:"valuetext"};var va=Array.prototype.indexOf?function(a,b){w(null!=a.length);return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},wa=Array.prototype.forEach?function(a,b,c){w(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},xa=Array.prototype.filter?
function(a,b){w(null!=a.length);return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,h=0;h<c;h++)if(h in f){var k=f[h];b.call(void 0,k,h,a)&&(d[e++]=k)}return d};function ya(a){return Array.prototype.concat.apply([],arguments)}function za(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Aa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ba=/&/g,Ca=/</g,Da=/>/g,Ea=/"/g,Fa=/'/g,Ga=/\x00/g,Ha=/[\x00&<>"']/;function Ia(a,b){return a<b?-1:a>b?1:0};var A;a:{var Ja=l.navigator;if(Ja){var Ka=Ja.userAgent;if(Ka){A=Ka;break a}}A=""}function B(a){return-1!=A.indexOf(a)};var La;function C(a,b){this.ka=a===Ma&&b||"";this.Aa=Na}C.prototype.sa=!0;C.prototype.ea=function(){return this.ka};C.prototype.toString=function(){return"Const{"+this.ka+"}"};function Oa(a){if(a instanceof C&&a.constructor===C&&a.Aa===Na)return a.ka;x("expected object of type Const, got '"+a+"'");return"type_error:Const"}var Na={},Ma={};function D(a,b,c){this.ia=c===Pa?a:"";this.Ea=b}D.prototype.Ha=!0;D.prototype.sa=!0;D.prototype.ea=function(){return this.ia.toString()};D.prototype.toString=function(){return this.ia.toString()};function Qa(a){if(a instanceof D&&a.constructor===D)return a.ia;x("expected object of type SafeHtml, got '"+a+"' of type "+m(a));return"type_error:SafeHtml"}
function Ra(a){if(a instanceof D)return a;var b="object"==typeof a,c=null;b&&a.Ha&&(c=a.Ea);a=b&&a.sa?a.ea():String(a);Ha.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ba,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Ca,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Da,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Ea,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Fa,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Ga,"&#0;")));return Sa(a,c)}var Pa={};
function Sa(a,b){if(void 0===La){var c=null;var d=l.trustedTypes;if(d&&d.createPolicy)try{c=d.createPolicy("goog#html",{createHTML:ma,createScript:ma,createScriptURL:ma})}catch(e){l.console&&l.console.error(e.message)}La=c}a=(c=La)?c.createHTML(a):a;return new D(a,b,Pa)}var Ta=new D(l.trustedTypes&&l.trustedTypes.emptyHTML||"",0,Pa);var Ua=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;b=a.firstChild.firstChild;a.innerHTML=Qa(Ta);return!b.parentElement});var Va=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};function E(a){a=String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return Va("0",Math.max(0,2-b))+a};function Wa(a){Wa[" "](a);return a}Wa[" "]=ia;var Xa=B("Opera"),F=B("Trident")||B("MSIE"),Ya=B("Edge"),G=B("Gecko")&&!(-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),Za=-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge");function ab(){var a=l.document;return a?a.documentMode:void 0}var bb;
a:{var cb="",db=function(){var a=A;if(G)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ya)return/Edge\/([\d\.]+)/.exec(a);if(F)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Za)return/WebKit\/(\S+)/.exec(a);if(Xa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();db&&(cb=db?db[1]:"");if(F){var eb=ab();if(null!=eb&&eb>parseFloat(cb)){bb=String(eb);break a}}bb=cb}var fb=bb,gb={},hb;if(l.document&&F){var ib=ab();hb=ib?ib:parseInt(fb,10)||void 0}else hb=void 0;var jb=hb;try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){}var kb;if(!(kb=!G&&!F)){var lb;if(lb=F)lb=9<=Number(jb);kb=lb}var mb;
if(!(mb=kb)){var nb;if(nb=G){var ob;if(Object.prototype.hasOwnProperty.call(gb,"1.9.1"))ob=gb["1.9.1"];else{for(var pb=0,qb=Aa(String(fb)).split("."),rb=Aa("1.9.1").split("."),sb=Math.max(qb.length,rb.length),tb=0;0==pb&&tb<sb;tb++){var ub=qb[tb]||"",vb=rb[tb]||"";do{var H=/(\d*)(\D*)(.*)/.exec(ub)||["","","",""],I=/(\d*)(\D*)(.*)/.exec(vb)||["","","",""];if(0==H[0].length&&0==I[0].length)break;pb=Ia(0==H[1].length?0:parseInt(H[1],10),0==I[1].length?0:parseInt(I[1],10))||Ia(0==H[2].length,0==I[2].length)||
Ia(H[2],I[2]);ub=H[3];vb=I[3]}while(0==pb)}ob=gb["1.9.1"]=0<=pb}nb=ob}mb=nb}var wb=mb;function xb(a,b,c){function d(k){k&&b.appendChild("string"===typeof k?a.createTextNode(k):k)}for(var e=1;e<c.length;e++){var f=c[e];if(!n(f)||p(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(p(f)){var h="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){h="function"==typeof f.item;break a}}h=!1}wa(h?za(f):f,d)}}}function yb(a){w(a,"Node cannot be null or undefined.");return 9==a.nodeType?a:a.ownerDocument||a.document}
function zb(){this.S=l.document||document}g=zb.prototype;g.getElementsByTagName=function(a,b){return(b||this.S).getElementsByTagName(String(a))};g.createElement=function(a){var b=this.S;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};g.createTextNode=function(a){return this.S.createTextNode(String(a))};g.getWindow=function(){var a=this.S;return a.parentWindow||a.defaultView};
g.appendChild=function(a,b){w(null!=a&&null!=b,"goog.dom.appendChild expects non-null arguments");a.appendChild(b)};g.append=function(a,b){xb(yb(a),a,arguments)};g.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
g.removeNode=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};g.getChildren=function(a){return wb&&void 0!=a.children?a.children:xa(a.childNodes,function(b){return 1==b.nodeType})};g.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};function Ab(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d=Bb(b);""===c||void 0==c?(ta||(ta={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=ta,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function Bb(a){w(a,"ARIA attribute cannot be empty.");a:{for(b in ua)if(ua[b]==a){var b=!0;break a}b=!1}w(b,"No such ARIA attribute "+a);return"aria-"+a};function J(){this.da=this.da}J.prototype.da=!1;J.prototype.isDisposed=function(){return this.da};function Cb(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=!1}Cb.prototype.stopPropagation=function(){};Cb.prototype.preventDefault=function(){this.defaultPrevented=!0};var Db=Object.freeze||function(a){return a};var Eb=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{l.addEventListener("test",ia,b),l.removeEventListener("test",ia,b)}catch(c){}return a}();function K(a,b){Cb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.T=null;a&&this.init(a,b)}r(K,Cb);var Fb=Db({2:"touch",3:"pen",4:"mouse"});
K.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(G){a:{try{Wa(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=
d.screenY||0):(this.offsetX=Za||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=Za||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=
a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Fb[a.pointerType]||"";this.state=a.state;this.T=a;a.defaultPrevented&&K.aa.preventDefault.call(this)};K.prototype.stopPropagation=function(){K.aa.stopPropagation.call(this);this.T.stopPropagation?this.T.stopPropagation():this.T.cancelBubble=!0};K.prototype.preventDefault=function(){K.aa.preventDefault.call(this);var a=this.T;a.preventDefault?a.preventDefault():a.returnValue=!1};var Gb="closure_listenable_"+(1E6*Math.random()|0);var Hb=0;function Ib(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.fa=e;this.key=++Hb;this.removed=this.ca=!1}function Jb(a){a.removed=!0;a.listener=null;a.proxy=null;a.src=null;a.fa=null};function Kb(a){this.src=a;this.o={};this.W=0}g=Kb.prototype;g.add=function(a,b,c,d,e){var f=a.toString();a=this.o[f];a||(a=this.o[f]=[],this.W++);var h=Lb(a,b,d,e);-1<h?(b=a[h],c||(b.ca=!1)):(b=new Ib(b,this.src,f,!!d,e),b.ca=c,a.push(b));return b};g.remove=function(a,b,c,d){a=a.toString();if(!(a in this.o))return!1;var e=this.o[a];b=Lb(e,b,c,d);return-1<b?(Jb(e[b]),w(null!=e.length),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.o[a],this.W--),!0):!1};
function Mb(a,b){var c=b.type;if(c in a.o){var d=a.o[c],e=va(d,b),f;if(f=0<=e)w(null!=d.length),Array.prototype.splice.call(d,e,1);f&&(Jb(b),0==a.o[c].length&&(delete a.o[c],a.W--))}}g.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.o)if(!a||c==a){for(var d=this.o[c],e=0;e<d.length;e++)++b,Jb(d[e]);delete this.o[c];this.W--}return b};g.Fa=function(a,b,c,d){a=this.o[a.toString()];var e=-1;a&&(e=Lb(a,b,c,d));return-1<e?a[e]:null};
g.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return ra(this.o,function(f){for(var h=0;h<f.length;++h)if(!(c&&f[h].type!=d||e&&f[h].capture!=b))return!0;return!1})};function Lb(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.removed&&f.listener==b&&f.capture==!!c&&f.fa==d)return e}return-1};var Nb="closure_lm_"+(1E6*Math.random()|0),Ob={},Pb=0;function Qb(a,b,c,d,e){if(d&&d.once)Sb(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Qb(a,b[f],c,d,e);else c=Tb(c),a&&a[Gb]?a.listen(b,c,p(d)?!!d.capture:!!d,e):Ub(a,b,c,!1,d,e)}
function Ub(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=p(e)?!!e.capture:!!e,k=Vb(a);k||(a[Nb]=k=new Kb(a));c=k.add(b,c,d,h,f);if(!c.proxy){d=Wb();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Eb||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Xb(b.toString()),d);else if(a.addListener&&a.removeListener)w("change"===b,"MediaQueryList only has a change event"),a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
Pb++}}function Wb(){function a(c){return b.call(a.src,a.listener,c)}var b=Yb;return a}function Sb(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Sb(a,b[f],c,d,e);else c=Tb(c),a&&a[Gb]?a.oa.add(String(b),c,!0,p(d)?!!d.capture:!!d,e):Ub(a,b,c,!0,d,e)}function Zb(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Zb(a,b[f],c,d,e);else d=p(d)?!!d.capture:!!d,c=Tb(c),a&&a[Gb]?a.oa.remove(String(b),c,d,e):a&&(a=Vb(a))&&(b=a.Fa(b,c,d,e))&&$b(b)}
function $b(a){if("number"!==typeof a&&a&&!a.removed){var b=a.src;if(b&&b[Gb])Mb(b.oa,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Xb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Pb--;(c=Vb(b))?(Mb(c,a),0==c.W&&(c.src=null,b[Nb]=null)):Jb(a)}}}function Xb(a){return a in Ob?Ob[a]:Ob[a]="on"+a}
function Yb(a,b){if(a.removed)a=!0;else{b=new K(b,this);var c=a.listener,d=a.fa||a.src;a.ca&&$b(a);a=c.call(d,b)}return a}function Vb(a){a=a[Nb];return a instanceof Kb?a:null}var ac="__closure_events_fn_"+(1E9*Math.random()>>>0);function Tb(a){w(a,"Listener can not be null.");if("function"===typeof a)return a;w(a.handleEvent,"An object listener must have handleEvent method.");a[ac]||(a[ac]=function(b){return a.handleEvent(b)});return a[ac]};function bc(a,b){if("function"!==typeof a)if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)};function cc(a){J.call(this);this.na=a||u||(u=new zb);this.wa={};this.va=""}r(cc,J);function dc(){this.Ca=new cc}
dc.prototype.speak=function(a,b){var c=this.Ca;b=b||"polite";var d=c.wa[b];d?d.removeAttribute(Bb("hidden")):(d=c.na.createElement("DIV"),d.style.position="absolute",d.style.top="-1000px",d.style.height="1px",d.style.overflow="hidden",Ab(d,"live",b),Ab(d,"atomic","true"),c.na.S.body.appendChild(d),c.wa[b]=d);b=d;d=c.va===a?a+"\u00a0":a;a&&(c.va=d);w(null!=b,"goog.dom.setTextContent expects a non-null value for node");if("textContent"in b)b.textContent=d;else if(3==b.nodeType)b.data=String(d);else if(b.firstChild&&
3==b.firstChild.nodeType){for(;b.lastChild!=b.firstChild;)b.removeChild(w(b.lastChild));b.firstChild.data=String(d)}else{for(;a=b.firstChild;)b.removeChild(a);a=yb(b);b.appendChild(a.createTextNode(String(d)))}};ja(dc);var ec="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""};function fc(){}fc.prototype.next=function(){throw ec;};fc.prototype.Ba=function(){return this};function gc(a,b){this.m={};this.l=[];this.X=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)}g=gc.prototype;g.H=function(){hc(this);for(var a=[],b=0;b<this.l.length;b++)a.push(this.m[this.l[b]]);return a};g.K=function(){hc(this);return this.l.concat()};g.R=function(a){return L(this.m,a)};g.clear=function(){this.m={};this.X=this.i=this.l.length=0};
g.remove=function(a){return L(this.m,a)?(delete this.m[a],this.i--,this.X++,this.l.length>2*this.i&&hc(this),!0):!1};function hc(a){if(a.i!=a.l.length){for(var b=0,c=0;b<a.l.length;){var d=a.l[b];L(a.m,d)&&(a.l[c++]=d);b++}a.l.length=c}if(a.i!=a.l.length){var e={};for(c=b=0;b<a.l.length;)d=a.l[b],L(e,d)||(a.l[c++]=d,e[d]=1),b++;a.l.length=c}}g.get=function(a,b){return L(this.m,a)?this.m[a]:b};g.set=function(a,b){L(this.m,a)||(this.i++,this.l.push(a),this.X++);this.m[a]=b};
g.addAll=function(a){if(a instanceof gc)for(var b=a.K(),c=0;c<b.length;c++)this.set(b[c],a.get(b[c]));else for(b in a)this.set(b,a[b])};g.forEach=function(a,b){for(var c=this.K(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};g.clone=function(){return new gc(this)};g.Ba=function(a){hc(this);var b=0,c=this.X,d=this,e=new fc;e.next=function(){if(c!=d.X)throw Error("The map has changed since the iterator was created");if(b>=d.l.length)throw ec;var f=d.l[b++];return a?f:d.m[f]};return e};
function L(a,b){return Object.prototype.hasOwnProperty.call(a,b)};function ic(a){if(a.H&&"function"==typeof a.H)return a.H();if("string"===typeof a)return a.split("");if(n(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}
function jc(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(n(a)||"string"===typeof a)wa(a,b,c);else{if(a.K&&"function"==typeof a.K)var d=a.K();else if(a.H&&"function"==typeof a.H)d=void 0;else if(n(a)||"string"===typeof a){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=sa(a);e=ic(a);f=e.length;for(var h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}};var kc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function lc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};function M(a,b){this.J=this.N=this.L="";this.O=null;this.M=this.I="";this.v=this.Ja=!1;if(a instanceof M){this.v=void 0!==b?b:a.v;mc(this,a.L);var c=a.N;N(this);this.N=c;c=a.J;N(this);this.J=c;nc(this,a.O);c=a.I;N(this);this.I=c;oc(this,a.B.clone());a=a.M;N(this);this.M=a}else a&&(c=String(a).match(kc))?(this.v=!!b,mc(this,c[1]||"",!0),a=c[2]||"",N(this),this.N=O(a),a=c[3]||"",N(this),this.J=O(a,!0),nc(this,c[4]),a=c[5]||"",N(this),this.I=O(a,!0),oc(this,c[6]||"",!0),a=c[7]||"",N(this),this.M=O(a)):
(this.v=!!b,this.B=new P(null,this.v))}g=M.prototype;g.toString=function(){var a=[],b=this.L;b&&a.push(Q(b,pc,!0),":");var c=this.J;if(c||"file"==b)a.push("//"),(b=this.N)&&a.push(Q(b,pc,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.O,null!=c&&a.push(":",String(c));if(c=this.I)this.J&&"/"!=c.charAt(0)&&a.push("/"),a.push(Q(c,"/"==c.charAt(0)?qc:rc,!0));(c=this.B.toString())&&a.push("?",c);(c=this.M)&&a.push("#",Q(c,sc));return a.join("")};
g.resolve=function(a){var b=this.clone(),c=!!a.L;c?mc(b,a.L):c=!!a.N;if(c){var d=a.N;N(b);b.N=d}else c=!!a.J;c?(d=a.J,N(b),b.J=d):c=null!=a.O;d=a.I;if(c)nc(b,a.O);else if(c=!!a.I){if("/"!=d.charAt(0))if(this.J&&!this.I)d="/"+d;else{var e=b.I.lastIndexOf("/");-1!=e&&(d=b.I.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||
1==f.length&&""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?(N(b),b.I=d):c=""!==a.B.toString();c?oc(b,a.B.clone()):c=!!a.M;c&&(a=a.M,N(b),b.M=a);return b};g.clone=function(){return new M(this)};function mc(a,b,c){N(a);a.L=c?O(b,!0):b;a.L&&(a.L=a.L.replace(/:$/,""))}function nc(a,b){N(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.O=b}else a.O=null}
function oc(a,b,c){N(a);b instanceof P?(a.B=b,a.B.ja(a.v)):(c||(b=Q(b,tc)),a.B=new P(b,a.v))}g.getQuery=function(){return this.B.toString()};g.removeParameter=function(a){N(this);this.B.remove(a);return this};function N(a){if(a.Ja)throw Error("Tried to modify a read-only Uri");}g.ja=function(a){this.v=a;this.B&&this.B.ja(a)};function O(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Q(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,uc),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function uc(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pc=/[#\/\?@]/g,rc=/[#\?:]/g,qc=/[#\?]/g,tc=/[#\?@]/g,sc=/#/g;function P(a,b){this.i=this.h=null;this.s=a||null;this.v=!!b}function R(a){a.h||(a.h=new gc,a.i=0,a.s&&lc(a.s,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}g=P.prototype;
g.add=function(a,b){R(this);this.s=null;a=S(this,a);var c=this.h.get(a);c||this.h.set(a,c=[]);c.push(b);this.i=y(this.i)+1;return this};g.remove=function(a){R(this);a=S(this,a);return this.h.R(a)?(this.s=null,this.i=y(this.i)-this.h.get(a).length,this.h.remove(a)):!1};g.clear=function(){this.h=this.s=null;this.i=0};g.R=function(a){R(this);a=S(this,a);return this.h.R(a)};g.forEach=function(a,b){R(this);this.h.forEach(function(c,d){wa(c,function(e){a.call(b,e,d,this)},this)},this)};
g.K=function(){R(this);for(var a=this.h.H(),b=this.h.K(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};g.H=function(a){R(this);var b=[];if("string"===typeof a)this.R(a)&&(b=ya(b,this.h.get(S(this,a))));else{a=this.h.H();for(var c=0;c<a.length;c++)b=ya(b,a[c])}return b};g.set=function(a,b){R(this);this.s=null;a=S(this,a);this.R(a)&&(this.i=y(this.i)-this.h.get(a).length);this.h.set(a,[b]);this.i=y(this.i)+1;return this};
g.get=function(a,b){if(!a)return b;a=this.H(a);return 0<a.length?String(a[0]):b};g.toString=function(){if(this.s)return this.s;if(!this.h)return"";for(var a=[],b=this.h.K(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.H(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}}return this.s=a.join("&")};g.clone=function(){var a=new P;a.s=this.s;this.h&&(a.h=this.h.clone(),a.i=this.i);return a};
function S(a,b){b=String(b);a.v&&(b=b.toLowerCase());return b}g.ja=function(a){a&&!this.v&&(R(this),this.s=null,this.h.forEach(function(b,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.remove(d),0<b.length&&(this.s=null,this.h.set(S(this,d),za(b)),this.i=y(this.i)+b.length))},this));this.v=a};g.extend=function(a){for(var b=0;b<arguments.length;b++)jc(arguments[b],function(c,d){this.add(d,c)},this)};var vc=B("Safari")&&!((B("Chrome")||B("CriOS"))&&!B("Edge")||B("Coast")||B("Opera")||B("Edge")||B("Edg/")||B("OPR")||B("Firefox")||B("FxiOS")||B("Silk")||B("Android"))&&!(B("iPhone")&&!B("iPod")&&!B("iPad")||B("iPad")||B("iPod"));function wc(){this.pa={};xc(this,l._notes_flag_initialData||{});yc(this)}function xc(a,b){qa(function(c){void 0!==b[c]&&(a.pa[c]=b[c])})}function yc(a){var b={};(new M(window.location.href)).B.forEach(function(c,d){b[d]=c});xc(a,b)}ja(wc);var zc={Kb:["BC","AD"],Jb:["Before Christ","Anno Domini"],hc:"JFMAMJJASOND".split(""),Kc:"JFMAMJJASOND".split(""),dc:"January February March April May June July August September October November December".split(" "),Jc:"January February March April May June July August September October November December".split(" "),Ec:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Mc:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),nd:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Oc:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Gc:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Nc:"Sun Mon Tue Wed Thu Fri Sat".split(" "),ic:"SMTWTFS".split(""),Lc:"SMTWTFS".split(""),Fc:["Q1","Q2","Q3","Q4"],uc:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Oa:["AM","PM"],jb:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],Yc:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],kb:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],ya:6,od:[5,6],za:5},Ac=zc;
Ac=zc;function T(a,b,c,d,e,f){"string"===typeof a?(this.G="y"==a?b:0,this.F="m"==a?b:0,this.D="d"==a?b:0,this.u="h"==a?b:0,this.A="n"==a?b:0,this.C="s"==a?b:0):(this.G=a||0,this.F=b||0,this.D=c||0,this.u=d||0,this.A=e||0,this.C=f||0)}
T.prototype.V=function(a){var b=Math.min(this.G,this.F,this.D,this.u,this.A,this.C),c=Math.max(this.G,this.F,this.D,this.u,this.A,this.C);if(0>b&&0<c)return null;if(!a&&0==b&&0==c)return"PT0S";c=[];0>b&&c.push("-");c.push("P");(this.G||a)&&c.push(Math.abs(this.G)+"Y");(this.F||a)&&c.push(Math.abs(this.F)+"M");(this.D||a)&&c.push(Math.abs(this.D)+"D");if(this.u||this.A||this.C||a)c.push("T"),(this.u||a)&&c.push(Math.abs(this.u)+"H"),(this.A||a)&&c.push(Math.abs(this.A)+"M"),(this.C||a)&&c.push(Math.abs(this.C)+
"S");return c.join("")};T.prototype.clone=function(){return new T(this.G,this.F,this.D,this.u,this.A,this.C)};T.prototype.add=function(a){this.G+=a.G;this.F+=a.F;this.D+=a.D;this.u+=a.u;this.A+=a.A;this.C+=a.C};
function U(a,b,c){"number"===typeof a?(this.g=Bc(a,b||0,c||1),Cc(this,c||1)):p(a)?(this.g=Bc(a.getFullYear(),a.getMonth(),a.getDate()),Cc(this,a.getDate())):(this.g=new Date(Date.now()),a=this.g.getDate(),this.g.setHours(0),this.g.setMinutes(0),this.g.setSeconds(0),this.g.setMilliseconds(0),Cc(this,a))}function Bc(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}g=U.prototype;g.Y=Ac.ya;g.Z=Ac.za;g.clone=function(){var a=new U(this.g);a.Y=this.Y;a.Z=this.Z;return a};
g.getFullYear=function(){return this.g.getFullYear()};g.getYear=function(){return this.getFullYear()};g.getMonth=function(){return this.g.getMonth()};g.getDate=function(){return this.g.getDate()};g.getTime=function(){return this.g.getTime()};g.getDay=function(){return this.g.getDay()};g.getUTCFullYear=function(){return this.g.getUTCFullYear()};g.getUTCMonth=function(){return this.g.getUTCMonth()};g.getUTCDate=function(){return this.g.getUTCDate()};g.getUTCDay=function(){return this.g.getDay()};
g.getUTCHours=function(){return this.g.getUTCHours()};g.getUTCMinutes=function(){return this.g.getUTCMinutes()};g.getTimezoneOffset=function(){return this.g.getTimezoneOffset()};g.set=function(a){this.g=new Date(a.getFullYear(),a.getMonth(),a.getDate())};g.setFullYear=function(a){this.g.setFullYear(a)};g.setYear=function(a){this.setFullYear(a)};g.setMonth=function(a){this.g.setMonth(a)};g.setDate=function(a){this.g.setDate(a)};g.setTime=function(a){this.g.setTime(a)};g.setUTCFullYear=function(a){this.g.setUTCFullYear(a)};
g.setUTCMonth=function(a){this.g.setUTCMonth(a)};g.setUTCDate=function(a){this.g.setUTCDate(a)};
g.add=function(a){if(a.G||a.F){var b=this.getMonth()+a.F+12*a.G,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.D&&(a=new Date((new Date(this.getYear(),this.getMonth(),this.getDate(),12)).getTime()+864E5*a.D),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),
this.setDate(a.getDate()),Cc(this,a.getDate()))};g.V=function(a){return[this.getFullYear(),E(this.getMonth()+1),E(this.getDate())].join(a?"-":"")+""};g.toString=function(){return this.V()};function Cc(a,b){a.getDate()!=b&&a.g.setUTCHours(a.g.getUTCHours()+(a.getDate()<b?1:-1))}g.valueOf=function(){return this.g.valueOf()};function V(a,b,c,d,e,f,h){this.g="number"===typeof a?new Date(a,b||0,c||1,d||0,e||0,f||0,h||0):new Date(a&&a.getTime?a.getTime():Date.now())}r(V,U);g=V.prototype;g.getHours=function(){return this.g.getHours()};
g.getMinutes=function(){return this.g.getMinutes()};g.getSeconds=function(){return this.g.getSeconds()};g.getMilliseconds=function(){return this.g.getMilliseconds()};g.getUTCDay=function(){return this.g.getUTCDay()};g.getUTCHours=function(){return this.g.getUTCHours()};g.getUTCMinutes=function(){return this.g.getUTCMinutes()};g.getUTCSeconds=function(){return this.g.getUTCSeconds()};g.getUTCMilliseconds=function(){return this.g.getUTCMilliseconds()};g.setHours=function(a){this.g.setHours(a)};
g.setMinutes=function(a){this.g.setMinutes(a)};g.setSeconds=function(a){this.g.setSeconds(a)};g.setMilliseconds=function(a){this.g.setMilliseconds(a)};g.setUTCHours=function(a){this.g.setUTCHours(a)};g.setUTCMinutes=function(a){this.g.setUTCMinutes(a)};g.setUTCSeconds=function(a){this.g.setUTCSeconds(a)};g.setUTCMilliseconds=function(a){this.g.setUTCMilliseconds(a)};
g.add=function(a){U.prototype.add.call(this,a);a.u&&this.setUTCHours(this.g.getUTCHours()+a.u);a.A&&this.setUTCMinutes(this.g.getUTCMinutes()+a.A);a.C&&this.setUTCSeconds(this.g.getUTCSeconds()+a.C)};g.V=function(a){var b=U.prototype.V.call(this,a);return a?b+"T"+E(this.getHours())+":"+E(this.getMinutes())+":"+E(this.getSeconds()):b+"T"+E(this.getHours())+E(this.getMinutes())+E(this.getSeconds())};g.toString=function(){return this.V()};
g.clone=function(){var a=new V(this.g);a.Y=this.Y;a.Z=this.Z;return a};function Dc(){};function Ec(){new DataView(new ArrayBuffer(8))}ha(Ec,Dc);var W=null,Fc=G||Za&&!vc||Xa||!vc&&!F&&"function"==typeof l.atob;function Gc(a,b){function c(Pc){for(;d<a.length;){var $a=a.charAt(d++),Rb=W[$a];if(null!=Rb)return Rb;if(!/^[\s\xa0]*$/.test($a))throw Error("Unknown base64 encoding at char: "+$a);}return Pc}Hc();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=k&&b(h<<6&192|k))}}
function Hc(){if(!W){W={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++)for(var d=a.concat(b[c].split("")),e=0;e<d.length;e++){var f=d[e],h=W[f];void 0===h?W[f]=e:w(h===e)}}};new Ec;function X(a,b,c){J.call(this);this.Ka=null!=c?a.bind(c):a;this.Ia=b;this.ba=null;this.U=!1;this.$=0;this.P=null}ha(X,J);X.prototype.stop=function(){this.P&&(l.clearTimeout(this.P),this.P=null,this.U=!1,this.ba=null)};X.prototype.pause=function(){this.$++};X.prototype.resume=function(){this.$--;this.$||!this.U||this.P||(this.U=!1,Ic(this))};function Ic(a){a.P=bc(function(){a.P=null;a.U&&!a.$&&(a.U=!1,Ic(a))},a.Ia);var b=a.ba;a.ba=null;a.Ka.apply(null,b)};var Jc=new V;new X(function(){var a=wc.qa().pa.n_tmd;a=isNaN(a)?0:Number(a);Jc=new V;Jc.add(new T("d",-1*a))},6E4);new z;(function(a,b){if(Fc&&!b)return l.atob(a);var c="";Gc(a,function(d){c+=String.fromCharCode(d)});return c})("bGFiZWxz");Object.freeze("annotationsGroup isArchived isDirty isPinned lastSyncedText parentServerId reminder baseVersion serverId shareState roleInfo showAvailableInShoppingNotification timestamps".split(" "));Oa(new C(Ma,"http://goo.gl/forms/r40gTO4BTb"));Oa(new C(Ma,"https://keep.google.com"));var Kc={qd:!0};function Y(){throw Error("Do not instantiate directly");}Y.prototype.ma=null;Y.prototype.getContent=function(){return this.content};Y.prototype.toString=function(){return this.content};function Lc(){Y.call(this)}r(Lc,Y);Lc.prototype.Da=Kc;var Mc=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c,d){c=new b(String(c));void 0!==d&&(c.ma=d);return c}}(Lc),Nc={};var Oc=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,Qc={};function Rc(){this.j=null;this.ha=!1;this.la="";this.ta();Qb(document,"mousedown",this.ra,void 0,this);var a={};a.selectedText=window.getSelection().toString();for(var b=document.getElementsByTagName("META"),c=0,d;d=b[c];c++)if("og:image"==d.getAttribute("property")){a.imageUrl=d.getAttribute("content");break}if(!a.imageUrl){b=0;c=document.getElementsByTagName("IMG");d=0;for(var e;e=c[d];d++){var f=e.naturalWidth||e.width,h=e.naturalHeight||e.height;if(128<=h&&128<=f&&h*f>b){b=h*f;var k=e.src}}k&&
(a.imageUrl=k)}a.imageUrl&&(k=a.imageUrl,k=k instanceof M?k.clone():new M(k,void 0),k.L||mc(k,"http"),a.imageUrl=k.toString());Z(this,"pageScrape",a);this.xa=q(this.Ga,this);chrome.runtime.onMessage.addListener(this.xa)}function Sc(a){a.j=null;Zb(document,"mousedown",q(a.ra,a),void 0,a);chrome.runtime.onMessage.removeListener(a.xa);a.ha=!0}function Z(a,b,c){if(!a.ha)try{chrome.runtime.sendMessage(chrome.runtime.id,{type:b,value:c},void 0)}catch(d){Sc(a)}}
Rc.prototype.Ga=function(a,b,c){if(p(a)&&!this.ha)switch(a.type){case "appHeightChange":this.j&&(this.j.style.height=a.value);break;case "dispose":Sc(this);break;case "finishHide":this.j&&Tc(this,!1);break;case "selectedTextRequest":c(window.getSelection().toString());break;case "speakMessage":dc.qa().speak(a.value);break;case "show":this.j&&(a="none"==this.j.style.display,Tc(this,!0),c(a));break;case "toggleVisibility":this.j&&("none"==this.j.style.display?(Tc(this,!0),this.j.contentWindow.focus(),
Z(this,"show")):(Z(this,"startHide"),Z(this,"impression",9204)))}};
Rc.prototype.ta=function(){if("interactive"!=document.readyState&&"complete"!=document.readyState)Qb(document,"DOMContentLoaded",this.ta,void 0,this);else{var a=Nc["notes.browseraction.soy.injects.injectedIframe"]?Nc["notes.browseraction.soy.injects.injectedIframe"](Qc,void 0):Mc('<iframe frameborder="0" style=" height: 438px; margin: 0px; padding: 0px; position: fixed; right: 5px; top: 5px; width: 370px; z-index: 2147483647;"></iframe>');var b=(u||(u=new zb)).createElement("DIV");if(p(a))if(a instanceof
Y){if(a.Da!==Kc)throw Error("Sanitized content was not of kind HTML.");var c=a.toString();a=a.ma;var d=new C(Ma,"Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");pa(Oa(d),"must provide justification");w(!/^[\s\xa0]*$/.test(Oa(d)),"must provide non-empty justification");c=Sa(c,a||null)}else x("Soy template output is unsafe for use as HTML: "+a),c=Ra("zSoyz");else c=Ra(String(a));a=c.ea();d=a.match(Oc);w(!d,"This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s",
d&&d[0],a);if(Ua())for(;b.lastChild;)b.removeChild(b.lastChild);b.innerHTML=Qa(c);1==b.childNodes.length&&(c=b.firstChild,1==c.nodeType&&(b=c));if(!p(b)||!p(b)||!p(b)||1!==b.nodeType||b.namespaceURI&&"http://www.w3.org/1999/xhtml"!==b.namespaceURI||b.tagName.toUpperCase()!=="IFRAME".toString()){c="IFRAME".toString()+"; got: ";a=b;if(p(a))try{var e=a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a)}catch(f){e="<object could not be stringified>"}else e=void 0===a?"undefined":
null===a?"null":typeof a;x("Argument is not an HTML Element with tag name "+(c+e))}this.j=b;this.la=this.j.style.cssText;this.j.id="keep-popup-frame";this.j.src=chrome.extension.getURL("index.html");document.body.appendChild(this.j);Tc(this,!0);this.j.contentWindow.focus()}};function Tc(a,b){a.j.style.cssText=a.la+" display: "+(b?"block !important;":"none")}Rc.prototype.ra=function(a){0==a.button&&this.j&&"none"!=this.j.style.display&&(Z(this,"startHide"),Z(this,"impression",9203))};new Rc;
