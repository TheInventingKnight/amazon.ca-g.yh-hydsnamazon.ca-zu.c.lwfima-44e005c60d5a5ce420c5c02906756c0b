'use strict';mix_d("SBXGwentPHDCards__multi-brand-lifestyle-creative-desktop:multi-brand-lifestyle-creative-desktop__1v_1aPPi","exports @c/dom @c/aui-utils tslib @c/pagemarker @c/logger @c/metrics @c/aui-feature-detect @c/browser-operations @p/a-ajax @c/aui-modal @p/A @c/scoped-dom @c/aui-untrusted-ajax".split(" "),function(sa,Ya,ta,x,Za,$a,D,ab,ua,bb,cb,db,eb,fb){function E(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}function F(a,b){return function(d){d=w(a,d);return b?b(d):d}}
function va(a,b,d,c){b?(y("Send"+a+"Success"),d&&y("Send"+a+"Success_"+d),c&&y("Send"+a+"Success_"+c)):(y("Send"+a+"Failure"),d&&y("Send"+a+"Failure_"+d),c&&y("Send"+a+"Failure_"+c))}function wa(a){return Array.isArray(a)?a.map(function(b){return x.__assign(x.__assign({},b),{width:0,height:0})}):{url:a.url,width:0,height:0}}var C=E(Ya),xa=E(ta),gb=E(Za),R=E($a),ya=E(D),hb=E(ab),fa=E(ua),ib=E(bb),za=E(cb),S=E(db),jb=E(eb),kb=E(fb),I,W;(function(a){a.Cornerstone="CSTONE";a.Axiom="AXIOM"})(W||(W={}));
var lb=(I={},I.e="basebe.ClientErrors.4",I.i="basebe.Impressions.8",I.c="basebe.Clicks.5",I.s="basebe.Swipes.5",I.v="basebe.Viewabilities.6",I.vc="basebe.VisualCompleteness.7",I.ss="basebe.slideshow.1",I.ia="basebe.ImpressionsV2.4",I.iv2="basebe.ImpressionsV3.2",I),Aa=function(a,b){return"matches"in a?a.matches(b):"msMatchesSelector"in a?a.msMatchesSelector(b):"webkitMatchesSelector"in a?a.webkitMatchesSelector(b):0<=A(b,u().ownerDocument.body).indexOf(a)},u=function(a,b){b=b||C["default"].cardRoot;
return!a||Aa(b,a)?b:b.querySelector(a)},A=function(a,b){return Array.prototype.slice.call((b||C["default"].cardRoot).querySelectorAll(a))},w=function(a,b){return(b=u("["+a+"]",b))?b.getAttribute(a):null},ha=function(a,b){for(;b&&b!==C["default"].cardRoot;){if(Aa(b,a))return b;b=b.parentElement}return null},Ba=function(a,b){return(b=ha("["+a+"]",b))?b.getAttribute(a):null},Z=function(a){if(a)return a=a.getBoundingClientRect(),{left:a.left,right:a.right,top:a.top,bottom:a.bottom};a=J();return{left:0,
top:0,right:a.innerWidth,bottom:a.innerHeight}},J=function(){return u().ownerDocument.defaultView},O=function(a,b){R["default"].log(a,"ERROR",b||"SBX_GWENT")},Ca=function(a){var b;a=/\?([^#]+)/.exec(a);if(!a)return[];a=a[1].split("&");var d=null;try{for(var c=x.__values(a),e=c.next();!e.done;e=c.next()){var f=e.value;if(0===f.indexOf("ref_=")){d=f;break}}}catch(h){var g={error:h}}finally{try{e&&!e.done&&(b=c.return)&&b.call(c)}finally{if(g)throw g.error;}}return d?(g=d.split("=").pop()||"")?g.split("_"):
[]:[]},Da=function(a,b,d){var c={};if(5<d.length){c.el=d.pop()||null;a:{var e;try{for(var f=x.__values(d),g=f.next();!g.done;g=f.next()){var h=g.value;if(/^\d+$/.test(h)){var l=h;break a}}}catch(k){var m={error:k}}finally{try{g&&!g.done&&(e=f.return)&&e.call(f)}finally{if(m)throw m.error;}}l=null}c.index=l;c.asin=Ba("data-asin",b);c.type=Ba("data-avar",b)}a.c(c,b)},mb=function(a,b){var d=Ca(b.href);Da(a,b,d)},nb=function(a,b){var d=J(),c=function(e){2!==e.button&&(mb(a,b),e.metaKey||e.altKey||e.shiftKey||
e.ctrlKey||1===e.button||"_blank"===b.target||(e.preventDefault(),d.setTimeout(function(){d.open(b.href,b.target||"_top")},50)))};b.addEventListener("click",c);b.addEventListener("auxclick",c)},Ea=function(a,b,d){var c=u("[data-active]"),e=(null===c||void 0===c?void 0:c.dataset)||{};c=e.paginationId;e=e.index;b.c({el:"sb-slideshow-arrow",type:a,asin:void 0===c?null:c,index:void 0===e?null:e},d)},pb=function(a,b){A("[href]",b).filter(function(d){return!d.classList.contains("a-carousel-button")}).forEach(function(d){nb(a,
d)});A('[data-mix-operations="dare-rcc--click"]',b).forEach(function(d){d.addEventListener("click",function(){return a.c({el:"rufus-conversation-cue"},b)})});A(".amazon-follow",b).forEach(function(d){d.addEventListener("click",function(){var c=Ca("?&ref_="+d.getAttribute("data-ref"));Da(a,d,c)})});A('[data-mix-operations="handleNext"]').forEach(function(d){d.addEventListener("click",function(){Ea("next",a,b)})});A('[data-mix-operations="handlePrev"]').forEach(function(d){d.addEventListener("click",
function(){Ea("prev",a,b)})});A('[data-mix-operations="handlePaginationClick"]').forEach(function(d){d.addEventListener("click",function(){var c=d.dataset||{},e=c.paginationId;c=c.index;a.c({el:"sb-slideshow-pagination",type:"pagination",index:void 0===c?null:c,asin:void 0===e?null:e},b)})});A('[data-mix-operations="hotSpotClick"]').forEach(function(d){d.addEventListener("click",function(){var c,e=(d.dataset||{}).asinid;e=void 0===e?null:e;var f=d.style,g=f.left;f=f.top;var h=u('[data-asin="'+e+'"]')||
void 0;h=((null===(c=u("[data-asinindex]",h))||void 0===c?void 0:c.dataset)||{}).asinindex;c=void 0===h?null:h;g={x:parseFloat(g),y:parseFloat(f)};g=JSON.stringify(g);e=x.__assign({type:g},{asin:e,el:"hotspot",index:c});a.c(e,d)})});ob(a)},ob=function(a){var b=u('[class*="seeProducts"]'),d=u('[data-mix-operations="expandHandler"]'),c=A('[class*="sidebarButton"]'),e=[b,d].concat(c);if(e.length){var f=[];e.forEach(function(h){if(h){var l=h instanceof HTMLButtonElement&&!w("data-index",h)?"seeProducts":
h instanceof HTMLButtonElement?"asinSidebar":"shoppableImageCollapsed",m={asin:h.dataset.asinid||null,index:h.dataset.index||null,el:l};l=function(){if(h){var k=x.__assign({type:"collapsed"},m);a.c(k,h);g(e,f)}};f.push(l);h.addEventListener("click",l)}});var g=function(h,l){h.forEach(function(m,k){m&&m.removeEventListener("click",l[k])})}}},ia=F("data-card-metrics-id",function(a){return(a||"").split("_")[0]}),ja=F("data-var",function(a){u('[data-mix-operations="dare-rcc--click"]')&&(a=(a||"")+"-rufusConversationCue");
return a}),qb=F("data-rid"),rb=F("data-cid"),sb=F("data-iid"),Fa=F("data-aid"),Ga=F("data-aidx"),tb=F("data-idt",function(a){switch(a){case W.Axiom:return W.Axiom;default:return W.Cornerstone}}),aa=F("data-rctx",function(a){return a?JSON.parse(a):{sid:"",cid:"",mid:"",aigen:null}}),ka=F("data-wl",function(a){return a?a.split(","):[]}),ub=F("data-slot"),la=F("data-ts"),ma=function(){var a=J();return a.innerWidth+"x"+a.innerHeight},na=function(a){return(a=a||C["default"].cardRoot)?(a=a.getBoundingClientRect(),
{width:a.width,height:a.height}):{width:0,height:0}},T=function(a,b){var d;b=b||C["default"].cardRoot;return(a=null===(d=b.querySelector('[class*="'+a+'"]'))||void 0===d?void 0:d.getAttribute("src"))?a:null},oa=function(a){return{id:w("data-asin",a),prime:!!u(".a-icon-prime",a),price:!!u(".a-price",a),savings:!!u('.a-price[data-a-strike="true"]',a),rating:w("data-rt",a),badge:w("data-deal",a)}},ba=function(a,b,d){return a>=b&&a<=d},Ha=function(a,b){var d=J(),c,e=function(){c||(c=d.setTimeout(a,b))};
e.cancel=function(){d.clearTimeout(c);c=0};return e},vb=function(a,b){void 0===b&&(b=0);return function(){xa["default"].delay(a,b)}},ca=function(a,b,d){var c=(d||{}).ms||25,e=(d||{}).el||J(),f=xa["default"].throttle(b,c);e.addEventListener(a,f);return function(){e.removeEventListener(a,f)}},Ia=function(a,b){return ca("scroll",a,b)},U={},Ka=function(a,b,d){void 0===d&&(d=!1);var c=a.getBoundingClientRect(),e=c.width*c.height;a=w("data-view-pixel",a);if(e){var f=c.top,g=c.bottom,h=c.left,l=c.right,
m=J();c=m.innerHeight;h=Ja(h,l,m.innerWidth);f=Ja(f,g,c);e=h*f/e;if(d)if(.5<=e)if(b)b();else return!0;else if(b)b.cancel();else return!0;else if(a)if(U[a]||(U[a]={percentageViewed:.5,startTimeInView:0}),d=U[a],d.percentageViewed=e,.5<=e){if(0===d.startTimeInView||1E3<Date.now()-d.startTimeInView)d.startTimeInView=Date.now();if(b)b();else return!0}else if(d.startTimeInView=0,b)b.cancel();else return!0}},Ja=function(a,b,d){return 0<=a?Math.max(Math.min(d-a,b-a),0):0<b?Math.max(Math.min(Math.min(b,d),
b-a),0):0},La=function(a){var b,d,c=Date.now()-(null===(b=U[a])||void 0===b?NaN:b.startTimeInView);b=null===(d=U[a])||void 0===d?void 0:d.percentageViewed;if(c&&b)if(d="/"===a.substr(-1)?a+"v/":a+"/v/",a=JSON.stringify({v:{def:"iab",event:"VIEWED",p:Math.round(100*U[a].percentageViewed),t:parseFloat((c/1E3).toFixed(3))},programType:"SBC"}),"function"===typeof window.fetch)fetch(d+encodeURI(a),{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:a}).then(function(f){f.ok||
0===f.status||R["default"].log(f.status+" "+f.statusText,"ERROR","sbx-ce-vcpm-fetch");y("PixelClientCallSuccess")}).catch(function(f){y("PixelClientCallFailure");R["default"].log(f,"ERROR","sbx-ce-vcpm-fetch")});else{var e=new XMLHttpRequest;e.open("POST",d+encodeURI(a));e.setRequestHeader("Content-Type","application/json");e.onreadystatechange=function(){4===e.readyState&&(200!==e.status?R["default"].log(e.status+" "+e.statusText,"ERROR","sbx-ce-vcpm-fetch"):y("PixelClientCallSuccess"))};e.onerror=
function(){y("PixelClientCallFailure");R["default"].log("XMLHttpRequest error from old browser","ERROR","sbx-ce-vcpm-fetch")};e.send(a)}else c||y("PixelClientCallMissingTimeInView"),b||y("PixelClientCallMissingPercentageInView")},wb=function(a,b){var d=function(){Ka(b?b:u(),c)},c=Ha(function(){var g=w("data-view-pixel",b?b:u());g&&(La(g),g=u("[data-view-pixel]"),null===g||void 0===g?void 0:g.removeAttribute("data-view-pixel"));e();f();a.v(null,b)},1E3),e=Ia(d),f=ca("resize",d,void 0);d()},Ma=function(a){a&&
a.forEach(function(b){var d=Ha(function(){var c=w("data-view-pixel",b);c&&(La(c),null===b||void 0===b?void 0:b.removeAttribute("data-view-pixel"))},1E3);Ka(b,d)})},Na=function(a,b){var d=null,c=null;a.addEventListener("touchstart",function(e){d=e.touches[0].pageX});a.addEventListener("touchmove",function(e){null===d&&(d=e.touches[0].pageX);c=e.touches[0].pageX});a.addEventListener("touchend",function(){null!==d&&null!==c&&b(c-d);d=c=null})},xb=function(a){if(hb["default"].isSupported("touch")){var b=
u("[data-track-swipe]"),d=u("[data-trackswipe]"),c=function(e){var f=Math.abs(e);if(30<f){var g=A("[data-view-pixel]");Ma(g);a.s({direction:0>e?"left":"right",length:f})}};b?Na(b,c):d&&Na(d,c)}},yb=function(a,b){var d=Date.now();b=A("img",b);var c=b.length,e=0,f=function(){++e===c&&a.vc({delay:Date.now()-d})};b.forEach(function(g){null!==w("data-lazy",g)&&null!==w("data-src",g)?g.addEventListener("load",function(){g.src===g.dataset.src&&f()}):g.complete?f():g.addEventListener("load",f)})},zb=function(a){var b=
a.campaignId,d=a.idType,c=a.slotName,e=a.market,f={eventV1:{anonymizedRequestId:a.anonymizedRequestId,campaignId:b,slotName:c,idType:d,market:e,customerId:a.customerId,sessionId:a.sessionId,lob:a.lob},eventV2:{campaignId:b,slotName:c,idType:d,market:e,joinId:a.joinId}},g=function(h,l,m){try{var k=ya["default"],q=k.event,p=x.__assign({},f[l]);if(m)for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&(p[t]=m[t]);q.call(k,p,"base-be",lb[h],{ssd:!0})}catch(n){O(n)}};return{i:g.bind(null,"i","eventV1"),
v:g.bind(null,"v","eventV1"),vc:g.bind(null,"vc","eventV1"),c:g.bind(null,"c","eventV1"),s:g.bind(null,"s","eventV1"),ss:g.bind(null,"ss","eventV1"),ia:g.bind(null,"ia","eventV1"),iv2:g.bind(null,"iv2","eventV2"),e:function(h){g("e","eventV1",h&&{name:h.name,message:h.message,stack:h.stack})}}},Oa=function(a){var b=rb(a);var d=aa(a).mid;b=zb({anonymizedRequestId:qb(),campaignId:b,idType:tb(a),slotName:ub(),market:d,customerId:null,sessionId:null,lob:"UNKNOWN",joinId:null});var c=J();d=c.innerWidth;
c=c.innerHeight;var e=na(a),f=e.width;e=e.height;var g=aa(a).aigen;b.i({asins:[].map.call(A("[data-asin]",a),oa),creativeType:ia(),creativeVariation:ja(a),version:la(a),viewport:ma(),weblabs:ka(a),adWidth:f,adHeight:e,viewportWidth:d,viewportHeight:c,storeBannerUrl:T("storeBanner",a),customImageUrl:T("lifestyleImage",a),isAiGen:g});pb(b,a);yb(b,a);wb(b,a);xb(b);c=J();d=c.innerWidth;c=c.innerHeight;e=na(a);f=e.width;e=e.height;g=aa(a).aigen;b.ia&&b.ia({asins:[].map.call(A("[data-asin]",a),oa),creativeType:ia(),
creativeVariation:ja(a),version:la(a),viewport:ma(),weblabs:ka(a),adIndex:Ga(a),adId:Fa(a),adWidth:f,adHeight:e,viewportWidth:d,viewportHeight:c,storeBannerUrl:T("storeBanner",a),customImageUrl:T("lifestyleImage",a),isAiGen:g});c=J();d=c.innerWidth;c=c.innerHeight;e=na(a);f=e.width;e=e.height;g=aa(a).aigen;b.iv2&&b.iv2({asins:[].map.call(A("[data-asin]",a),oa),creativeType:ia(),creativeVariation:ja(a),version:la(a),viewport:ma(),weblabs:ka(a),adIndex:Ga(a),adId:Fa(a),adWidth:f,adHeight:e,viewportWidth:d,
viewportHeight:c,storeBannerUrl:T("storeBanner",a),customImageUrl:T("lifestyleImage",a),isAiGen:g})},y=function(a,b){void 0===b&&(b=1);ya["default"].count("sbxGwentClient"+a,b)},Q={log:function(a){var b=J();var d=sb();(b=d&&b.sbxGwentClient&&"number"===typeof b.sbxGwentClient[d]?Date.now()-b.sbxGwentClient[d]:null)?y(a,b):y("NoPageTime")}},Ab=function(a){var b=a.url,d=a.onSuccess,c=a.onError;b||c();ib["default"].get(b,{success:function(e){e&&"ok"===e.status?d(e):c()},error:c,abort:c})},pa;(pa||(pa=
{})).adFeedbackHandler="adFeedbackHandler";var Bb=function(a,b,d,c,e){try{var f=JSON.parse(a),g=x.__read(f,6),h=g[0],l=g[1],m=g[2],k=g[3],q=g[4],p=g[5],t=[];Array.isArray(h)?h.forEach(function(v){return t.push({campaignId:d,creativeId:v})}):t.push({campaignId:d,creativeId:h});var n={adCreativeMetaData:{adCreativeId:Array.isArray(h)?h[0]:h,adId:b,adImpressionId:l,adNetwork:"aax",adProgramId:1010,adCreativeDetails:t},adPlacementMetaData:{adElementId:m,pageType:k,pageUrl:q,searchTerms:p,slotName:c,adProgramId:1010}};
return e+"?pl="+encodeURIComponent(JSON.stringify(n))}catch(v){return null}},Pa=function(a){var b=fa["default"].setup().define,d=!!w("data-ad-feedback-clicks"),c=!!w("data-ad-feedback-simulate"),e=a||"AdFeedbackSuccess",f="AdFeedbackPlaceholderClick",g=!1;d&&b(pa.adFeedbackHandler,"click",function(){Q.log(f);"AdFeedbackPlaceholderClick"===f&&(g=!0)});a=w("data-ad-feedback");b=w("data-ad-feedback-url")||"/gp/aq-feedback/lazyLoad/handler/af-link-handler.html";if(a){d=w("data-slot");var h=w("data-aid"),
l=w("data-cid");a=Bb(a,h,l,d,b);Ab({url:a,onSuccess:function(m){var k=m.html;var q=u('[data-id="afb-content"]');q&&k?(q.innerHTML=k,k=q):k=null;if(m=m.script)q=u().ownerDocument.createElement("script"),q.type="text/javascript",q.innerHTML=m,u().appendChild(q);Q.log(e);f="AdFeedbackLinkClick";k&&g&&c&&((m=u("a",k))?(m.click(),m=!0):m=!1,Q.log(m?"AdFeedbackSimulateClickSuccess":"AdFeedbackSimulateClickFail"))},onError:function(){Q.log("AdFeedbackFallback");g&&c&&Q.log("AdFeedbackSimulateClickFail")}})}},
X=function(a,b){var d,c=[];try{for(var e=x.__values(a.split(/[-_]/)),f=e.next();!f.done;f=e.next()){var g=f.value;c.push(g.charAt(0).toUpperCase()+g.slice(1));if("creativeLevel"===b&&("desktop"===g||"mobile"===g))break}}catch(l){var h={error:l}}finally{try{f&&!f.done&&(d=e.return)&&d.call(e)}finally{if(h)throw h.error;}}return c.join("")},Db=function(a,b,d,c,e,f,g,h,l,m,k){return x.__awaiter(void 0,void 0,void 0,function(){var q,p,t;return x.__generator(this,function(n){switch(n.label){case 0:q=function(){return{adCreativeMetaData:{adCreativeDetails:Cb(b,
h,l,m,k)},adFeedbackLabelId:a}},p=function(v){var r=v.baseMessage,z=v.deviceType,B=v.tabletEnv,G=v.slotName;G=x.__read([X(v.creativeId,"creativeLevel"),X(G,"slotLevel")],2);v=G[0];G=G[1];y(r);z&&(z=r+"_"+z,B&&(z+="_"+B),y(z));v&&y(r+"_"+v);G&&y(r+"_"+G)},n.label=1;case 1:return n.trys.push([1,3,,4]),[4,d(q)];case 2:return n.sent(),p({baseMessage:"EnableAdFeedbackSuccess",deviceType:c,tabletEnv:e,creativeId:f,slotName:g}),[3,4];case 3:return t=n.sent(),p({baseMessage:"EnableAdFeedbackFailure",deviceType:c,
tabletEnv:e,creativeId:f,slotName:g}),O(t),[3,4];case 4:return[2]}})})},Eb=function(a){if(a){var b=a.split(" ");b.map(function(d,c){0<c&&(b[c]=d.substring(3,d.length))});b.pop();b.shift();return b}},Cb=function(a,b,d,c,e){var f=[],g=w("data-card-metrics-id")||"",h=w("data-slot")||"";g=x.__read([X(g,"creativeLevel"),X(h,"slotLevel")],2);var l=g[0],m=g[1];e&&e()!==a.length&&(a=a.filter(function(k){return u('[data-aid="'+k.adId+'"]')}));a.forEach(function(k,q){var p='[data-aid="'+k.adId+'"]';for(var t=
u(p),n=b&&b()||document.body,v,r=0;(d?r<d.length:0>r)&&!(v=u(p+' div[class*="'+(null===d||void 0===d?void 0:d[r])+'"] img'));r++);v?y("AfImagePresent_"+l):y("AfImageMissing_"+l);p=(null===v||void 0===v?void 0:v.getAttribute("src"))||void 0;r=Eb((null===v||void 0===v?void 0:v.getAttribute("srcset"))||void 0);var z=(null===r||void 0===r?void 0:r.length)||1;v=[];for(var B=0;B<z;B++)v.push({url:(null===r||void 0===r?void 0:r[B])||""});p={url:p?p:""};va("SelectionSignals",k.selectionSignals,l,m);va("AdvertiserIdNS",
k.advertiserIdNS,l,m);if(t){(r=1===a.length||c)||(t=Z(t),n?((r=u('[data-index="'+q+'"]'))?r=0===r.offsetHeight&&0===r.offsetWidth?!0:!1:(R["default"].log("container Element for ad number "+q+" is not found","WARN","DSA/AdFeedback"),r=!0),r?r=!1:(n=Z(n),t.left===n.left||t.right===n.right?n=ba(t.left,n.left,n.right)||ba(t.right,n.left,n.right):(r=t.left,(r=r>n.left&&r<n.right)||(t=t.right,r=t>n.left&&t<n.right),n=r),r=n)):r=void 0);if(r){n=f.push;t=k.campaignId;r=k.adId;z=k.title;v={lowResolutionImage:wa(p),
highResolutionImages:wa(v)};if(k.selectionSignals){p=k.selectionSignals;switch(p.pastActivity){case "STORE_ONLY":B=1;break;default:B=0}p=x.__assign(x.__assign({},p),{pastActivity:B})}else p=void 0;n.call(f,{campaignId:t,adId:r,adCreativeIndex:q,title:z,adCreativeImage:v,selectionSignals:p,advertiserIdNS:k.advertiserIdNS})}y("adElementPresent_"+l)}else y("adElementMissing"),R["default"].log("adElement is not found: "+JSON.stringify(k),"WARN","DSA/AdFeedback"),y("adElementMissing_"+l)});return f},Qa=
function(){A('[data-id="cta"]').forEach(function(a){if(a.parentElement){var b=u('[data-id*="cta-fallback"]',a.parentElement),d=u(".a-truncate",a),c=u(".a-truncate-full",a);d&&c&&(c.clientHeight>d.clientHeight&&b?(b.style.display="block",a.parentElement.removeChild(a)):(b=a.parentElement.getAttribute("aria-hidden"),b&&"false"!==b||(b=a.getAttribute("data-label")||c.innerHTML,a.parentElement.setAttribute("aria-label",b)),(d=u('[data-id*="cta-chevron"]',a))&&!c.hasAttribute("data-chevron")&&(c.setAttribute("data-chevron",
"true"),a=c.innerHTML.split(" "),b=a.pop(),d=d.innerHTML,c.innerHTML="<span>"+a.join(" ")+" </span><span>"+b+"&nbsp;"+d+"</span>")))}})},Fb=function(a){var b=w("data-src",a)||"",d=w("data-srcset",a)||"",c=a.cloneNode();c.removeAttribute("data-src");c.removeAttribute("data-srcset");c.removeAttribute("data-lazy");c.srcset=d;c.src=b;a.parentNode&&a.parentNode.insertBefore(c,a);c.onload=function(){a.style.opacity="0";Q.log("LazyLoaded")}},Gb=function(){var a=A('[class*="eelModalRoot"]');a&&a.forEach(function(b,
d){var c=w("data-modal-trigger",b),e=w("data-title",b),f=w("data-modal-settings",b);f=JSON.parse(f||"{}");if(c){d="eel-cards-modal-"+d;var g="."+b.className.split(" ")[0],h=za["default"].create(d,g,{closeButton:(null===f||void 0===f?void 0:f.closeButton)||!1,a11yOpenMessage:e||"Energy Efficiency & Product Fiche",width:(null===f||void 0===f?void 0:f.width)||800});e=ua.setup();f=e.define;e=e.attach;h.once("beforeShow",function(){S["default"].loadDescendantImagesManually(b)});f("modal-handler-"+c,["click"],
function(){h.show()});f("modal-close-handler-"+c,["click"],function(){h.hide()});f=u('[data-mix-operations="modal-handler-'+c+'"]');c=u('[data-mix-operations="modal-close-handler-'+c+'"]');f&&c&&(e("modalHandler",f),e("modalClose",c))}})},Hb=function(a){var b=function(c,e){c={$event:{preventDefault:S["default"].$.noop,stopPropagation:S["default"].$.noop},$target:c.getContent().find('[data-a-tab-name="'+e+'"]'),data:{name:"energyEfficiencyTabSet"}};S["default"].trigger("a:declarative:a-tabs:click",
c)},d=function(c,e){var f=c&&c.$event,g=c&&c.data||{},h=g.name;f&&f.preventDefault&&f.preventDefault();f&&f.stopPropagation&&f.stopPropagation();c&&f&&g&&h&&e&&(f=e.get(h),f||(S["default"].on("a:popover:beforeShow:"+h,function(l){var m,k,q;l.popover&&l.popover.getContent&&(l=l.popover.getContent(),null===(k=null===(m=null===l||void 0===l?void 0:l.find(".a-manually-loaded"))||void 0===m?void 0:m.parent())||void 0===k?void 0:k.css("min-height",null!==(q=g.modalHeight)&&void 0!==q?q:800),S["default"].loadDescendantImagesManually(l))}),
f=e.create(c.$target,g)),f&&(f.show(),g.activeTabName&&b(f,g.activeTabName)))};a&&a.when("a-secondary-view").execute("RegisterEnergyEfficiencyEventMobile",function(c){S["default"].declarative("card-energy-efficiency-secondary-view","click",function(e){d(e,c)})})},Jb=function(){A("span[data-ad-deal-end-time]").forEach(function(a){var b=w("data-ad-deal-end-time",a);a&&null!==b&&Ib(a,b)})},Ib=function(a,b){var d=ta.interval(function(){var c=(new Date(b)).getTime(),e=Date.now();e=Math.floor((c-e)/1E3);
if(0>e)clearInterval(d);else{var f=Math.floor(e/60%60);c=Math.floor(e%60);e=("0"+Math.floor(e/3600%24)).slice(-2);f=("0"+f).slice(-2);c=("0"+c).slice(-2);a.innerText=e+":"+f+":"+c}},1E3)},Kb=function(a,b){return function(){var d,c=A("[data-pixel]"),e=0;try{for(var f=x.__values(c),g=f.next();!g.done;g=f.next()){var h=g.value,l=a,m=Z(h),k=Z(l);if(ba(m.left,k.left,k.right)||ba(m.right,k.left,k.right)){var q=h.getAttribute("data-pixel");q&&q.length&&((new Image).src=q);h.removeAttribute("data-pixel");
++e}}}catch(t){var p={error:t}}finally{try{g&&!g.done&&(d=f.return)&&d.call(f)}finally{if(p)throw p.error;}}p=A("[data-view-pixel]");e===c.length&&0===p.length?b():Ma(p)}},Lb=function(a,b){var d=Kb(a,function(){c();e();"function"===typeof b&&b()}),c=Ia(d,{el:a}),e=ca("resize",d,void 0);d();return d},Mb=function(){var a=u().ownerDocument,b=a.createElement("script");b.type="text/javascript";b.async=!0;b.defer=!0;b.src="https://d39x00gckxu2jb.cloudfront.net/follow/assets/follow_button_v2.js";(a=a.getElementsByTagName("script")[0])&&
a.parentNode&&a.parentNode.insertBefore(b,a);A(".amazon-follow",void 0).forEach(function(d){d.addEventListener("keydown",function(c){" "===c.key&&c.preventDefault()});d.addEventListener("keyup",function(c){var e=u(".pr-fb-button",d);if(" "===c.key||"Enter"===c.key)c.preventDefault(),null===e||void 0===e?void 0:e.click()})})},Nb=function(){},Ra=function(a){a.setAttribute("disabled","disabled");if(a=ha(".a-button",a))a.classList.add("a-button-disabled"),a.classList.remove("a-button-focus")},Sa=function(a){a.removeAttribute("disabled");
(a=ha(".a-button",a))&&a.classList.remove("a-button-disabled")},Ta=function(a,b){var d=vb(b,350);a.addEventListener("click",d);return function(){a.removeEventListener("click",d)}},Ob=function(a,b,d){var c=u('[data-id="track"]'),e=u('[data-button="prev"]'),f=u('[data-button="next"]'),g=J(),h=12;if(!c||!e||!f)return Nb;var l=!!u().ownerDocument.querySelector('[dir="rtl"]'),m=0,k=0,q=2,p=d&&d.isLifestyle,t=function(){var z=d&&d.minWidth||350,B=d&&d.maxWidth||600,G=p?[[0,0],[2*z,1],[900,2],[1500,3],[1900,
4]]:[[0,0],[2*z,1],[1220,2],[1820,3],[2250,4]],P=d&&d.borderWidth||0,K=parseInt(g.getComputedStyle(c).width,10);q=(G.find(function(M){return M[0]>K})||[K,4])[1]||0;if(!(1>q)){var H=Math.floor(K/q)+2*P-24;h=12;H>B&&(H=B,h=(K-H*q)/(2*q));H<z&&(H=z,h=(K-H*q)/(2*q));Array.from(c.children).forEach(function(M){M.style.width=H+"px";M.style.minWidth=H+"px";M.style.maxWidth=H+"px";M.style.marginLeft=h+"px";M.style.marginRight=h+"px"});c.children&&c.children[0]&&(m=parseInt(g.getComputedStyle(c.children[0]).width,
10))}},n=function(z){t();z>c.children.length-q&&(z=k=c.children.length-q);c.style.transform="translateX("+(l?"":"-")+z*(m+2*h)+"px)";Sa(e);Sa(f);k===c.children.length-q&&Ra(f);0===k&&Ra(e)};a=function(z){var B="next"===z?1:-1;return function(){k+=B;n(k)}};f.addEventListener("click",a("next"));e.addEventListener("click",a("prev"));var v=Ta(f,b),r=Ta(e,b);n(k);(new g.ResizeObserver(function(){return n(k)})).observe(c);return function(){v();r()}},V=function(a,b){return a.querySelector("[class*="+b+"]")},
Pb=function(a,b,d){a=JSON.parse(a);a.adCreativeMetaData=b.adCreativeMetaData;a.feedbackFormContainerId=d;return encodeURI(JSON.stringify(a))},Qb=function(a,b,d){return x.__awaiter(void 0,void 0,void 0,function(){var c,e,f,g,h,l,m;return x.__generator(this,function(k){c="adFeedbackModal_"+a;k=(null===(m=V(b,"ad-feedback-modal-container"))||void 0===m?void 0:m.className)||"";e="."+b.className+" ."+k.replace(" ",".");g=(f=d().adCreativeMetaData.adCreativeDetails)?f.length:0;h={a11yOpenMessage:"",width:Math.max(560,
132*g+160)};try{return l=za["default"].create(c,e,h),[2,l]}catch(q){throw D.count("adfeedback:cards:clientDesktop:modalCreation:failure",1),Error("Modal Creation Failed : "+q);}})})},Tb=function(a,b,d,c,e,f,g){var h="rtl"===document.getElementsByTagName("html")[0].dir?"ad-feedback-loading-spinnner-rtl":"ad-feedback-loading-spinnner";var l=V(C["default"].cardRoot,h);a.on("beforeShow",function(){return x.__awaiter(void 0,void 0,void 0,function(){var m,k;return x.__generator(this,function(q){switch(q.label){case 0:return m=
Rb(a,b,d),[4,a.render(function(p){var t="250px",n=d().adCreativeMetaData.adCreativeDetails;n&&2>n.length&&(t="150px");l.style.marginTop=t;p.innerHTML="";t=p.appendChild;n=document.getElementsByTagName("html")[0].dir;var v=C["default"].createElement("div"),r=C["default"].createElement("div");v.innerHTML=e;"rtl"===n?(v.setAttribute("style",'box-sizing: border-box; color: rgb(15, 17, 17); font-family: "Amazon Ember", Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 24px; margin-bottom: 0px; margin-left: 28px; margin-right: 0px; margin-top: 0px; min-height: 56px; padding-bottom: 16px; padding-left: 0px; padding-right: 25px; padding-top: 16px; text-align: right; text-rendering: optimizelegibility; visibility: visible;'),
r.setAttribute("style",'background-attachment: scroll; background-clip: border-box; background-color: rgb(240, 242, 242); background-image: linear-gradient(to left, #EFEFEF 66.72%, #FFFFFF); background-origin: padding-box; background-position: 0% 0%; background-position-x: 0%; background-position-y: 0%; background-repeat: repeat; background-size: auto; border-bottom-color: rgb(213, 217, 217); border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-sizing: border-box; color: rgb(15, 17, 17); display: block; font-family: "Amazon Ember", Arial, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; padding-bottom: 0px; padding-left: 24px; padding-right: 24px; padding-top: 0px; position: relative; text-align: right; visibility: visible; z-index: 10;')):
(v.setAttribute("style",'box-sizing: border-box; color: rgb(15, 17, 17); font-family: "Amazon Ember", Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 24px; margin-bottom: 0px; margin-left: 0px; margin-right: 28px; margin-top: 0px; min-height: 56px; padding-bottom: 16px; padding-left: 25px; padding-right: 0px; padding-top: 16px; text-align: left; text-rendering: optimizelegibility; visibility: visible;'),r.setAttribute("style",'background-attachment: scroll; background-clip: border-box; background-color: rgb(240, 242, 242); background-image: linear-gradient(to right, #EFEFEF 66.72%, #FFFFFF); background-origin: padding-box; background-position: 0% 0%; background-position-x: 0%; background-position-y: 0%; background-repeat: repeat; background-size: auto; border-bottom-color: rgb(213, 217, 217); border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-sizing: border-box; color: rgb(15, 17, 17); display: block; font-family: "Amazon Ember", Arial, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; padding-bottom: 0px; padding-left: 24px; padding-right: 24px; padding-top: 0px; position: relative; text-align: left; visibility: visible; z-index: 10;'));
r.appendChild(v);t.call(p,r);t=document.getElementsByTagName("html")[0].dir;n=C["default"].createElement("div");"rtl"===t?n.setAttribute("style","padding-bottom: 16px; padding-right: 50px ; padding-top: 16px; justify-content: center; align-items: center;"):n.setAttribute("style","padding-bottom: 16px; padding-left: 50px ; padding-top: 16px; justify-content: center; align-items: center;");Sb(l,n,c,m,f);p.appendChild(n)})];case 1:return q.sent(),(k=document.querySelector(".a-button-close"))&&k.setAttribute("aria-label",
g),[2]}})})})},Rb=function(a,b,d){d=d();var c=d.adCreativeMetaData.adCreativeDetails;null===c||void 0===c?void 0:c.sort(function(e,f){return e.adCreativeIndex<f.adCreativeIndex?-1:1});return Pb(b,d,a.id)},Sb=function(a,b,d,c,e){b.appendChild(a);"function"==typeof D.uet&&D.uet("bb","adfeedback:cards:clientDesktop:fetchFormContent:time",{wb:1});kb["default"].post("/af/multi-creative/feedback-form",{accepts:"application/json",contentType:"application/json",additionalHeaders:{"Accept-Language":""===d?
"en-US":d}},{pl:c,deviceType:"desktop"}).then(function(f){return x.__awaiter(void 0,void 0,void 0,function(){var g,h,l;return x.__generator(this,function(m){"function"==typeof D.uet&&D.uet("be","adfeedback:cards:clientDesktop:fetchFormContent:time",{wb:1});D.count("adfeedback:cards:clientDesktop:fetchFormContent:success",1);g=C["default"].createElement("div");g.innerHTML=String(f.responseBody);for(h=0;h<g.children.length;++h)l=g.children[h],"SCRIPT"===l.tagName?qa("script",l,b):"LINK"===l.tagName?
qa("link",l,b):qa("div",l,b);b.removeChild(a);return[2]})})}).catch(function(){"function"==typeof D.uet&&D.uet("be","adfeedback:cards:clientDesktop:fetchFormContent:time",{wb:1});D.count("adfeedback:cards:clientDesktop:fetchFormContent:failure",1);b.innerHTML=e});"function"==typeof D.uex&&D.uex("ld","adfeedback:cards:clientDesktop:fetchFormContent:time",{wb:1})},qa=function(a,b,d){var c=C["default"].createElement(a);c.innerHTML=b.innerHTML;b.getAttributeNames().forEach(function(e){c.setAttribute(e,
b.getAttribute(e)||"")});d.appendChild(c)},Ua={},Ub=function(a,b){return x.__awaiter(void 0,void 0,void 0,function(){var d,c,e,f,g,h,l,m,k;return x.__generator(this,function(q){d=V(a,"ad-feedback-primary-link");c=b().adFeedbackLabelId;e=fa["default"].setup();f="open-modal"+c;g=b().adCreativeMetaData.adCreativeDetails;h=a.dataset;l=h.isDsaEnabled;m=h.weblabTreatment;k=String(l);"undefined"===k&&(k=g&&0<g.length?g[0].selectionSignals?"true":"false":"false");"true"===k&&"T1"!==m&&(k="false");e.attach(f,
d);e.define(f,"click",function(){return x.__awaiter(void 0,void 0,void 0,function(){var p;return x.__generator(this,function(t){switch(t.label){case 0:return(p=Ua[c])?[3,2]:[4,Qb(c,a,b)];case 1:p=t.sent();var n=a.dataset,v=n.formHeaderText,r=n.dsaFormHeaderText;Tb(p,n.adFeedbackPayload,b,n.currentLocale,"true"===k?r:v,n.formLoadErrorText,n.closeButtonAriaText);Ua[c]=p;t.label=2;case 2:return p.show(),[2]}})})});try{d.addEventListener("keydown",function(p){if(" "===p.key||"Enter"===p.key)p.preventDefault(),
d.click()})}catch(p){console.log("Couldnt add keydown event listner")}return[2]})})},Vb=function(a,b){var d=fa["default"].setup(),c="mouse-enter"+b;b="mouse-leave"+b;var e=V(a,"ad-feedback-primary-link"),f=V(a,"ad-feedback-text-desktop"),g=V(a,"ad-feedback-sprite");d.attach(c,e);d.define(c,"mouseenter",function(){g.style.backgroundPosition="0px -12px";f.style.color="#111111"});d.attach(b,e);d.define(b,"mouseleave",function(){g.style.backgroundPosition="0px 0px";f.style.color="#555"})},da,Xb=function(a){return function(){return x.__awaiter(void 0,
void 0,void 0,function(){var b,d,c,e,f,g,h,l,m,k,q,p,t,n,v,r,z,B,G;return x.__generator(this,function(P){switch(P.label){case 0:return Q.log("Loaded"),b=a||{},d=b.loadAdFeedback,c=b.onLoad,e=b.onInit,f=b.isMobile,g=b.enableAdFeedback,h=b.creativeContainer,l=b.creativeImageContainer,m=b.bypassAdFeedbackViewportCheck,k=b.renderedAdsCount,e&&e(),[4,gb["default"].pageReady];case 1:P.sent();Q.log("Ready");try{var K=u(".sbx-no-js",void 0);K&&K.classList.remove("sbx-no-js");try{var H=A("[data-cid]");H.length?
H.forEach(Oa):Oa()}catch(L){O(L)}try{Qa(),ca("resize",Qa,void 0)}catch(L){O(L)}try{A('img[data-lazy="true"]').forEach(Fb)}catch(L){O(L)}u('[class*="eelModalRoot"]')?Gb():u('[data-action*="card-energy-efficiency-"]')&&Hb(window.P);var M,ra;if(!("-webkit-line-clamp"in C["default"].cardRoot.ownerDocument.body.style||"lineClamp"in C["default"].cardRoot.ownerDocument.body.style)){var Va=A('[class*="_sbTruncatedTitle_"]');if(Va.length)try{for(var ea=x.__values(Va),Y=ea.next();!Y.done;Y=ea.next()){var N=
Y.value,Wb=parseInt(N.getAttribute("data-totallines")||"1"),Wa=Math.ceil(parseFloat((null===(ra=C["default"].cardRoot.ownerDocument.defaultView)||void 0===ra?void 0:ra.getComputedStyle(N).lineHeight)||"1.3em"))*Wb;if(!(N.scrollHeight<=Wa)){for(;N.scrollHeight>Wa;)N.innerText=N.innerText.slice(0,-1);N.innerText=N.innerText.slice(0,-3);N.innerText+="\u2026"}}}catch(L){var Xa={error:L}}finally{try{Y&&!Y.done&&(M=ea.return)&&M.call(ea)}finally{if(Xa)throw Xa.error;}}}c&&c();w("data-deal-badge-automated")&&
w("data-ad-deal-end-time")&&Jb();K=f;if(void 0!==K&&!window.sbxGwentClientDPR)try{window.sbxGwentClientDPR=!0,y((K?"Mobile":"Desktop")+"DPR"+(4>=Math.round(2*window.devicePixelRatio)/2?Math.round(2*window.devicePixelRatio)/2:"4Plus"))}catch(L){O(L)}}catch(L){O(L)}q=w("data-ad-feedback-label-id");p=w("data-ad-creative-list");t=w("data-device-type")||"";n=w("data-tablet-env")||"";v=w("data-card-metrics-id")||"";r=w("data-slot")||"";z=X(v,"creativeLevel");if(!q||!p)return[3,6];P.label=2;case 2:return P.trys.push([2,
4,,5]),B=JSON.parse(p),[4,Db(q,B,g,t,n,v,r,h,l,m,k)];case 3:return P.sent(),y("NewAdFeedbackImplementationEnabled_"+z),[3,5];case 4:return G=P.sent(),d&&Pa(),O("Failed to generate adFeedback rendering payload: "+G,"DSA/AdFeedback"),y("FallbackToOldAdFeedbackImplementation_"+z),[3,5];case 5:return[3,7];case 6:d&&Pa(),y("FallbackToOldAdFeedbackImplementation_"+z),O("Missing adFeedbackLabelId or adCreativeList","DSA/AdFeedback"),P.label=7;case 7:return[2]}})})}}({loadAdFeedback:!0,onLoad:function(){if(da=
u('[data-id="carousel"]')){var a=function(){},b=Lb(da,function(){a()});u('[data-enhanced-mbc="true"]')&&(a=Ob(da,b,{minWidth:282,maxWidth:460,borderWidth:1,isLifestyle:!0}));Mb()}},enableAdFeedback:function(a){return x.__awaiter(void 0,void 0,void 0,function(){var b,d,c,e;return x.__generator(this,function(f){switch(f.label){case 0:return f.trys.push([0,3,,4]),b=a(),d=jb["default"].cardRoot.getElementsByClassName("adFeedbackMainComponent_"+b.adFeedbackLabelId)[0],c=d.dataset.isSponsoredLabelActive,
"false"===(c||"false").toLowerCase()?[2]:[4,Vb(d,b.adFeedbackLabelId)];case 1:return f.sent(),[4,Ub(d,a)];case 2:return f.sent(),[3,4];case 3:throw e=f.sent(),D.count("adfeedback:cards:clientDesktop:enableAdFeedback:failure",1),Error("Failed to call enableAdFeedback for desktop client : "+e);case 4:return[2]}})})},creativeContainer:function(){return da},creativeImageContainer:["customImageContainer"]});sa._operationNames=[];sa.card=Xb});
