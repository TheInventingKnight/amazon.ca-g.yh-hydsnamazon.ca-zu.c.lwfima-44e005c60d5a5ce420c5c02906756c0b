'use strict';mix_d("SimilaritiesUICards__p13n-desktop-sims-fbt:p13n-desktop-sims-fbt__d4B4TctW","exports tslib @p/A @c/metrics @c/browser-operations @c/scoped-dom @c/aui-untrusted-ajax @c/error-handling @c/logger".split(" "),function(fa,C,sa,ha,ta,ua,va,wa,xa){function I(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var A=I(sa),ia=I(ta),h=I(ua),ja=I(va),V=I(wa),W=I(xa),ka={},X=function(a,f,c){void 0===f&&(f="");void 0===c&&(c=1);f=a+f;ka.hasOwnProperty(f)||(ka[f]=!0,ha.count(a,(ha.count(a)||
0)+c))},ya=function(a){X(A["default"].capabilities.mobile?"Card:EERU:SharedLib:mobile:render":"Card:EERU:SharedLib:desktop:render");var f=function(b,d){b={$event:{preventDefault:A["default"].$.noop,stopPropagation:A["default"].$.noop},$target:b.getContent().find('[data-a-tab-name="'+d+'"]'),data:{name:"energyEfficiencyTabSet"}};A["default"].trigger("a:declarative:a-tabs:click",b)},c=function(b,d){var g=b&&b.$event,e=b&&b.data||{},k=e.activeTabName,y=e.modalHeight,u=e.name;g&&g.preventDefault&&g.preventDefault();
g&&g.stopPropagation&&g.stopPropagation();g=d.get(u);g||(A["default"].on("a:popover:beforeShow:"+u,function(l){l.popover&&l.popover.getContent&&(l=l.popover.getContent(),l.find(".a-manually-loaded").parent().css("min-height",y),A["default"].loadDescendantImagesManually(l))}),g=d.create(b.$target,e));g.show();f(g,k)};a.when("a-secondary-view").execute("RegisterEnergyEfficiencyEventMobile",function(b){A["default"].declarative("card-energy-efficiency-secondary-view","click",function(d){X("Card:EERU:SharedLib:mobile:click",
d&&d.data&&d.data.name||"");c(d,b)})});a.when("a-modal").execute("RegisterEnergyEfficiencyEventDesktop",function(b){A["default"].declarative("card-energy-efficiency-modal","click",function(d){X("Card:EERU:SharedLib:desktop:click",d&&d.data&&d.data.name||"");c(d,b)})})},za=function(a){a.when("ready").execute("EEBadgeProductFicheResize",function(f){var c=A["default"].$;c(".energyEfficiencyContainer").each(function(b,d){b=c(d).find(".energyEfficiencyProductFicheLabel").first();d=c(d).find("svg").first();
b.parent().outerHeight()>d.outerHeight()&&(b.removeClass("a-size-small"),b.addClass("a-size-micro"),b.parent().outerHeight()>d.outerHeight()&&b.parent().css("line-height","10px"))})})},Aa=function(){var a=window.P;ya(a);za(a)},Ba={ctiList:["Website/Personalization/Report a Problem CX"],category:"Website",type:"Personalization",item:"Report a Problem CX",folder:"9c9c97c9-6f69-4dba-a55d-26045c6a3068",group:"P13N Report a Problem CX"},Ca=[{ctiList:["Website/Personalization/Similarities","Website/Detail Page/Similarities"],
category:"Website",type:"Personalization",item:"Similarities",folder:"4d16d05d-9a17-4b36-b8fe-9ee159ff81de",group:"Similarities"}],Ga=function(a){var f=h["default"].cardRoot.querySelector(".p13n-report-flag"),c=ia["default"].setup();c.define("showFlag","mouseover",function(){f.classList.remove("p13n-report-flag-hide")});c.define("hideFlag","mouseout",function(){f.classList.add("p13n-report-flag-hide")});c.attach("showFlag",a);c.attach("hideFlag",a);var b=h["default"].cardRoot.querySelector(".internal-flag-form"),
d=b.querySelector(".internal-flag-env-data").dataset,g=b.querySelector(".internal-flag-title-text"),e=b.querySelector(".internal-flag-description").firstElementChild,k=b.querySelector(".internal-flag-alias"),y=b.querySelector(".internal-flag-response-message"),u=function(l){l.preventDefault();l=function(t){return!t||!t.trim()};if(l(g.value)||l(e.value)||l(k.value))return Y(y,!1,"Something went wrong. One of the required fields was missing."),!1;l=h["default"].cardRoot.querySelectorAll(".a-dynamic-image");
var D;if(D=h["default"].cardRoot.querySelector(".a-carousel-heading")){var v=Da(a,l.length);D="Internal user reported issue '"+g.value+"' with widget: "+D.innerText}else v=Ea(a),D="Internal user reported issue '"+g.value+"'";l=Fa(l,v,e.value,k.value,d);var n=Ba;Ca.forEach(function(t){t.ctiList.includes(d.cti)&&(n=t)});ja["default"].post("https://p13ngoals.corp.amazon.com/sims",{accepts:"text/html, application/json",contentType:"application/json;charset=UTF-8"},{sim_params:{assigned_folder:n.folder,
description:l,descriptionContentType:"text/amz-markdown-sim",extensions:{tt:{assignedGroup:n.group,category:n.category,impact:5,item:n.item,type:n.type}},tags:[{id:"internal-problem-generated"}],title:D}}).then(function(t){Y(y,!0,t)}).catch(function(t){Y(y,!1,t)});return!1};b.onsubmit=function(l){return u(l)};c=h["default"].cardRoot.querySelector(".p13n-desktop-report-problem-flag-data");if(c.dataset.name)A["default"].on("a:popover:hide:"+c.dataset.name,function(){b.reset();y.innerText=""})},Da=function(a,
f){if(!a.dataset.aCarouselOptions)return W["default"].log("Empty ASIN List in carouselElement.dataset.aCarouselOptions","ERROR"),[];a=JSON.parse(a.dataset.aCarouselOptions).ajax.id_list;var c=h["default"].cardRoot.querySelector(".a-carousel-firstvisibleitem");c=(Number(c.value)||1)-1;return a.map(function(b){return JSON.parse(b).id}).slice(c,c+f)},Ea=function(a){return(a=a.dataset.asinList)?a.split(","):[]},Fa=function(a,f,c,b,d){for(var g="",e=0;e<a.length;e++){var k=a[e];g+=(k?"![]("+k.src+")":
"IMAGE MISSING")+"\nASIN: "+(f[e]?f[e]:"ASIN MISSING")+"\n\n"}return"**This SIM-T ticket is created by the 'Report a Problem' internal tool. To know more, here's its wiki: https://w.amazon.com/bin/view/Personalization/CoreRecommendations/Projects/Canaries/Report-a-Problem-UX-on-P13NWidget/UserGuide/**\n\n**Alias:** ["+(b+"](https://phonetool.amazon.com/users/"+b+")\n**Comment:** "+c+"\n\n**Widget Group ID:** "+d.widgetGroupId+"\n**Strategy ID:** "+d.strategyId+"\n**CTI:** "+d.cti+"\n**Facets:** ")+
(d.facets+"\n**Content Reftag:** "+d.reftag+"\n"+(""!==d.baseAsin?"**Page ASIN:** "+d.baseAsin+"\n":"")+"\n**SessionID:** ")+(d.sessionId+"\n**MarketplaceID:** "+d.marketplaceId+"\n**Device Type:** "+d.deviceType+"\n\n**List of ASINs:**\n\n")+g},Y=function(a,f,c){f?(a.classList.remove("a-color-error"),c.responseBody&&"object"===typeof c.responseBody?c.responseBody.response&&c.responseBody.response.id?a.innerHTML="Success, here's the <a href=\"https://t.corp.amazon.com/"+c.responseBody.response.id+
'" target="_blank">SIM-T ticket</a> you created.':(W["default"].log("Fail to find the id of the SIM-T ticket created in the response body of response data.","ERROR"),a.innerText="Success, but we could not find the link to the SIM-T ticket."):(W["default"].log("The response body of response data is not an object.","ERROR"),a.innerText="Success, but we could not find the link to the SIM-T ticket.")):(a.classList.add("a-color-error"),a.innerText="string"===typeof c?c:"Oops! Something went wrong. Please try again.")},
Ha={setupModal:function(a){return C.__awaiter(void 0,void 0,void 0,function(){var f;return C.__generator(this,function(c){f=h["default"].cardRoot.querySelector(".p13n-report-problem-modal-root");if(!f)return[2];Ga(a);return[2]})})}},Ia=function(a,f){f?a.classList.add("add-to-cart-item-disabled"):a.classList.remove("add-to-cart-item-disabled");a.querySelectorAll("input").forEach(function(c){f?c.setAttribute("disabled","true"):c.removeAttribute("disabled")})},la=function(a,f){a=h["default"].cardRoot.querySelector("#add-to-cart-item-"+
a);if(!a)return V["default"].error('Missing Add to Cart item!", "add-to-cart.client.item-state-handler',"changeItemStatus");f&&a.classList.contains("add-to-cart-item-disabled")||!f&&!a.classList.contains("add-to-cart-item-disabled")||(Ia(a,f),Ja())},Ja=function(){var a,f=Array.from(h["default"].cardRoot.querySelectorAll("[id^=add-to-cart-item-]")).filter(function(k){return!k.classList.contains("add-to-cart-item-disabled")}).length,c=h["default"].cardRoot.getElementsByClassName("add-to-cart-section")[0],
b=c.getElementsByClassName("a-button-text")[0],d=c.getElementsByClassName("add-to-cart-button")[0],g=c.getElementsByClassName("add-to-cart-string-data")[0];c=c.getElementsByClassName("a-button-input")[0];if(null===(a=null===g||void 0===g?void 0:g.dataset)||void 0===a?0:a.displayStringList)var e=JSON.parse(g.dataset.displayStringList);d&&(0===f?d.classList.add("a-button-disabled"):d.classList.remove("a-button-disabled"));if(b)if(e&&e.length>f)b.innerText=e[f],c.setAttribute("aria-label",e[f]);else return V["default"].error('Missing Add to Cart string!", "add-to-cart.client.item-state-handler',
"updateButtonString");else return V["default"].error('Missing Add to Cart button!", "add-to-cart.client.item-state-handler',"updateButtonString")},Ka={accepts:"text/html, application/json",timeout:2E3},ra=function(a){return C.__awaiter(void 0,void 0,void 0,function(){var f,c,b,d,g,e,k,y,u,l,D,v,n,t,Z,ma,E,F,G,H,L,aa,M,na,P,B,N,Q,ba,ca,da,ea,oa;return C.__generator(this,function(z){if((b=h["default"].cardRoot.getElementsByClassName("cardRoot")[0])&&"true"===b.dataset.punt)return[2];d=1;b&&b.dataset.count&&
(d=Number(b.dataset.count));b&&b.dataset.components&&(g=JSON.parse(b.dataset.components));b&&b.dataset.priceTotals&&(e=JSON.parse(b.dataset.priceTotals));b&&b.dataset.pointsTotal&&(k=JSON.parse(b.dataset.pointsTotal));if(g&&e){z=g;for(var J=d,R=[],S=[],p=0;p<J;p++){var w=p+1;1<w&&(R[p]=h["default"].cardRoot.getElementsByClassName("thumbnailPlus-"+String(w))[0]);S[p]=h["default"].cardRoot.getElementsByClassName("thumbnail-"+String(w))[0]}var x=!1,pa=0,qa="";for(p=0;p<J;p++){w=String(p+1);var O=R[p],
T=S[p];z[w]&&z[w].checked?(la(p,!1),pa++,qa+=w,0===p?x=!0:O&&(x?O.style.display="unset":(x=!0,O.style.display="none")),T&&(T.style.display="unset")):(la(p,!0),O&&(O.style.display="none"),T&&(T.style.display="none"))}f=pa;c=qa;y=f;u=e[c];l=g[1].price.currencySymbolPosition;D=g[1].price.decimalSeparator;v=h["default"].cardRoot.getElementsByClassName(a.totalLabel)[0];n=h["default"].cardRoot.getElementsByClassName(a.totalAmount)[0];t=n.getElementsByClassName("a-price-symbol")[0];Z=n.getElementsByClassName("a-price-whole")[0];
ma=n.getElementsByClassName("a-price-fraction")[0];E=h["default"].cardRoot.getElementsByClassName(a.addItems)[0];F=h["default"].cardRoot.getElementsByClassName(a.chooseItems)[0];G=h["default"].cardRoot.getElementsByClassName(a.actionDetails)[0];H=h["default"].cardRoot.getElementsByClassName(a.sidePanel)[0];L=h["default"].cardRoot.getElementsByClassName(a.buttonSectionState)[0];if(0===y)E&&(E.style.display="none"),v&&(v.style.display="none"),F&&(F.style.display="unset"),G&&(G.style.visibility="hidden"),
H&&(H.style.display="none"),L&&(L.style.pointerEvents="none");else if(u){if(v&&n&&Z&&t){R=t;z=Z;J=ma;S=c;x=h["default"].cardRoot.getElementsByClassName("cardRoot")[0];p="";if(x&&x.dataset.components&&x.dataset.priceTotals){w=JSON.parse(x.dataset.components);x=JSON.parse(x.dataset.priceTotals);if(w&&x){var q=w[1].price.currencySymbol;var m=w[1].price.currencySymbolPosition;var K=w[1].price.decimalSeparator;p=x[S].replace(q,"")}m={priceSumTotalString:p,currency:q,currencyPosition:m,decimalSeparator:K}}else m=
void 0;if(m)if(R.firstChild.data=m.currency,q=m.decimalSeparator){if(z.firstChild.data=m.priceSumTotalString.split(q)[0],J.firstChild.data=m.priceSumTotalString.split(q)[1],q=z.getElementsByClassName("a-price-decimal")[0])q.innerHTML=m.decimalSeparator}else z.firstChild.data=m.priceSumTotalString,J&&J.remove();v.style.display="unset";m=n.childNodes[1].firstChild.className;"Right"==l&&"a-price-symbol"==m&&(m=n,m.childNodes[1].firstChild&&m.childNodes[1].lastChild&&(q=m.childNodes[1].lastChild,m.childNodes[1].replaceChild(m.childNodes[1].firstChild,
m.childNodes[1].lastChild),m.childNodes[1].insertBefore(q,m.childNodes[1].lastChild)));q=u;K=D;(m=n.getElementsByClassName("a-offscreen")[0])&&q&&(","==K?(z=q.lastIndexOf(K),0<z&&(K=q.substring(0,z).replace(".",""),q=q.substring(z+1),m.innerHTML=K+"."+q)):m.innerHTML=q)}else v&&n&&(n.innerText=u,v.style.display="block");E&&(E.style.display="none");F&&(F.style.display="none");G&&(G.style.visibility="visible");H&&(H.style.display="flex");L&&(L.style.pointerEvents="fill")}else E&&(E.style.display="inline-block"),
F&&(F.style.display="none"),v&&(v.style.display="none"),G&&(G.style.visibility="visible"),H&&(H.style.display="flex");b&&g&&k&&(aa=h["default"].cardRoot.getElementsByClassName(a.pointsAmount)[0],M=h["default"].cardRoot.getElementsByClassName(a.totalPointsLabel)[0],(na=k[c])?M&&aa&&(aa.innerText=na,M.style.display="block"):M&&(M.style.display="none"));P=void 0;b&&b.dataset.optimalPrice&&(P=JSON.parse(b.dataset.optimalPrice));b&&g&&P&&(B=h["default"].cardRoot.getElementsByClassName(a.totalLabelDiscount)[0],
N=h["default"].cardRoot.getElementsByClassName(a.totalLabelStandard)[0],(Q=P[c])?(B&&(B.style.display="block",ba=B.getElementsByClassName(a.discountPercent)[0],ca=B.getElementsByClassName(a.discountWhole)[0],da=B.getElementsByClassName(a.discountFractional)[0],ea=B.getElementsByClassName(a.discountStrikethrough)[0],ba&&(ba.innerText=Q.discountPercent),ca&&(ca.innerText=Q.bundlePriceWhole),da&&(da.innerText=Q.bundlePriceFractional),ea&&(oa=e?e[c]:"",ea.innerText=oa)),N&&(N.style.display="none")):(B&&
(B.style.display="none"),N&&(N.style.display="block")))}return[2]})})},Ma=function(){return C.__awaiter(void 0,void 0,void 0,function(){var a;return C.__generator(this,function(f){if(a=h["default"].cardRoot.getElementsByClassName("add-to-cart-data")[0])a.onclick=function(c){var b=a;c.preventDefault();La();b.submit()};return[2]})})},La=function(){var a=h["default"].cardRoot.getElementsByClassName("cardRoot")[0],f=a.dataset.spClickUrl;if(f){var c=!1;if(a&&a.dataset.components){a=JSON.parse(a.dataset.components);
for(var b in a)a[b].checked&&a[b].sponsored&&(c=!0)}f&&c&&ja["default"].get(f,Ka).then(function(){}).catch(function(){})}},U;(function(a){a.clickHandler="clickHandler";a.checkHandler="checkHandler";a.popupHandler="popupHandler";a.tabClickHandler="tabClickHandler";a.clickHandlerBottomSheet="clickHandlerBottomSheet";a.checkboxHandlerBottomSheet="checkboxHandlerBottomSheet"})(U||(U={}));var r={simsFbtContainter:"_p13n-desktop-sims-fbt_fbt-desktop_sims-fbt-containter__2Cffh",flexFbtContainer:"_p13n-desktop-sims-fbt_fbt-desktop_flex-fbt-container__3fI_9",
fbtCard:"_p13n-desktop-sims-fbt_fbt-desktop_fbt-card__1_smM",imageLink:"_p13n-desktop-sims-fbt_fbt-desktop_image-link__17L3C",detailImageSection:"_p13n-desktop-sims-fbt_fbt-desktop_detail-image-section__1Bw2r",imageBackground:"_p13n-desktop-sims-fbt_fbt-desktop_image-background__DVFnZ",imageDisplay:"_p13n-desktop-sims-fbt_fbt-desktop_image-display__2oZhY",linkArea:"_p13n-desktop-sims-fbt_fbt-desktop_link-area__1VLAZ",thumbnailBox:"_p13n-desktop-sims-fbt_fbt-desktop_thumbnail-box__4jnIT",newThumbnailBox:"_p13n-desktop-sims-fbt_fbt-desktop_new-thumbnail-box__36bD3",
twoItemThumbnailBox:"_p13n-desktop-sims-fbt_fbt-desktop_two-item-thumbnail-box__jV2am",newDetailFaceoutBox:"_p13n-desktop-sims-fbt_fbt-desktop_new-detail-faceout-box___WyNy",fbtCheckbox:"_p13n-desktop-sims-fbt_fbt-desktop_fbt-checkbox__GSgEz",titleComponentOverflow3:"_p13n-desktop-sims-fbt_fbt-desktop_title-component-overflow3__26ly1",titleSection:"_p13n-desktop-sims-fbt_fbt-desktop_title-section__16zUG",displayFlex:"_p13n-desktop-sims-fbt_fbt-desktop_display-flex__1gorZ",priceSection:"_p13n-desktop-sims-fbt_fbt-desktop_price-section__1Wo6p",
thumbnailPlus:"_p13n-desktop-sims-fbt_fbt-desktop_thumbnail-plus__zdWox",thumbnailPlusNew:"_p13n-desktop-sims-fbt_fbt-desktop_thumbnail-plus-new__2nZz1",plusPadding:"_p13n-desktop-sims-fbt_fbt-desktop_plus-padding__21zgg",productBox:"_p13n-desktop-sims-fbt_fbt-desktop_product-box__3PBxY",itemDetailsPerAsin:"_p13n-desktop-sims-fbt_fbt-desktop_item-details-per-asin__3DtF1",itemDeliveryMessagePerAsin:"_p13n-desktop-sims-fbt_fbt-desktop_item-delivery-message-per-asin__WQ7q7",fbtItemCheck:"_p13n-desktop-sims-fbt_fbt-desktop_fbt-item-check__pUIoy",
addAllButton:"_p13n-desktop-sims-fbt_fbt-desktop_add-all-button__1TRXG",totalLabel:"_p13n-desktop-sims-fbt_fbt-desktop_total-label__dI983",labelCenter:"_p13n-desktop-sims-fbt_fbt-desktop_label-center__L5TW-",totalPointsLabel:"_p13n-desktop-sims-fbt_fbt-desktop_total-points-label__3r09H",addItems:"_p13n-desktop-sims-fbt_fbt-desktop_add-items__16weX",chooseItems:"_p13n-desktop-sims-fbt_fbt-desktop_choose-items__15UQx",updatedChooseItems:"_p13n-desktop-sims-fbt_fbt-desktop_updated-choose-items__3BN67",
totalAmount:"_p13n-desktop-sims-fbt_fbt-desktop_total-amount__wLVdU",pointsAmount:"_p13n-desktop-sims-fbt_fbt-desktop_points-amount__1SNdT",priceAddToCartBox:"_p13n-desktop-sims-fbt_fbt-desktop_price-add-to-cart-box__3OUdK",pricePointsBox:"_p13n-desktop-sims-fbt_fbt-desktop_price-points-box__1xGfe",shipMessageBox:"_p13n-desktop-sims-fbt_fbt-desktop_ship-message-box__t-OOr",shippingInfoShowBox:"_p13n-desktop-sims-fbt_fbt-desktop_shipping-info-show-box__17yWM",showDetailsBox:"_p13n-desktop-sims-fbt_fbt-desktop_show-details-box__-R3Xb",
showDetails:"_p13n-desktop-sims-fbt_fbt-desktop_show-details__3GnPL",shiftDetails:"_p13n-desktop-sims-fbt_fbt-desktop_shift-details__gffZp",hideDetails:"_p13n-desktop-sims-fbt_fbt-desktop_hide-details__28l17",simsFbtUnselectedItem:"_p13n-desktop-sims-fbt_fbt-desktop_sims-fbt-unselected-item__VQmZx",simsFbtRows:"_p13n-desktop-sims-fbt_fbt-desktop_sims-fbt-rows__2LJXs",bucketDivider:"_p13n-desktop-sims-fbt_fbt-desktop_bucket-divider__25poP",titleTruncate:"_p13n-desktop-sims-fbt_fbt-desktop_title-truncate__1pPAM",
detailRowElement:"_p13n-desktop-sims-fbt_fbt-desktop_detail-row-element__2WDgq",detailRowElementLeftMargin:"_p13n-desktop-sims-fbt_fbt-desktop_detail-row-element-left-margin__UkZ8O",actionDetails:"_p13n-desktop-sims-fbt_fbt-desktop_action-details__18ZiI",actionSection:"_p13n-desktop-sims-fbt_fbt-desktop_action-section__mpQSG",sidePanel:"_p13n-desktop-sims-fbt_fbt-desktop_side-panel__23vsu",itemTitle:"_p13n-desktop-sims-fbt_fbt-desktop_item-title__2fMKO",energyLabel:"_p13n-desktop-sims-fbt_fbt-desktop_energy-label__23Bpn",
sponsoredLabel:"_p13n-desktop-sims-fbt_fbt-desktop_sponsored-label__2Ap87",visuallyHidden:"_p13n-desktop-sims-fbt_fbt-desktop_visually-hidden__ZFtYQ",titleSubtitle:"_p13n-desktop-sims-fbt_fbt-desktop_title-subtitle__1D7Kj",titleComponentWrapper:"_p13n-desktop-sims-fbt_fbt-desktop_title-component-wrapper__2CKPJ"};fa._operationNames=[];fa.card=function(){return C.__awaiter(void 0,void 0,void 0,function(){var a,f;return C.__generator(this,function(c){switch(c.label){case 0:a=ia["default"].setup().define;
if(!h["default"].cardRoot)return[2];Aa();return[4,Promise.all([Ha.setupModal(h["default"].cardRoot.getElementsByClassName("cardRoot")[0]),Ma()])];case 1:return c.sent(),ra(r),f=!0,a(U.clickHandler,"click",function(b){if(b.event.target){b=h["default"].cardRoot.getElementsByClassName(r.shippingInfoShowBox);var d=h["default"].cardRoot.getElementsByClassName(r.showDetails)[0],g=h["default"].cardRoot.getElementsByClassName(r.hideDetails)[0];d&&(f?(d.style.display="none",g.style.display="unset",g.focus(),
b&&([].forEach.call(b,function(e,k){e.style.display="block"}),f=!1)):(d.style.display="unset",g.style.display="none",d.focus(),b&&[].forEach.call(b,function(e,k){e.style.display="none"}),f=!0))}}),a(U.checkHandler,"click",function(b){b=b.event;var d=b.target,g=null;if(d){if("fbtCheck"!==d.id.substr(0,8))return;g=b.target.checked}for(var e=d;e&&!e.classList.contains(r.fbtItemCheck)&&!e.classList.contains(r.fbtCheckbox);)e=e.parentElement;if(e){b=e.id;d=h["default"].cardRoot.getElementsByClassName("cardRoot")[0];
var k=void 0;d&&d.dataset.components&&(k=JSON.parse(d.dataset.components));k&&k[b]&&null!==g&&(k[b].checked=g);k&&k[b].checked&&(e.classList.contains(r.simsFbtUnselectedItem)&&e.classList.remove(r.simsFbtUnselectedItem),e.classList.contains(r.fbtCheckDetails)||e.classList.add(r.fbtCheckDetails));k&&!k[b].checked&&(e.classList.remove(r.fbtCheckDetails),e.classList.add(r.simsFbtUnselectedItem));g=h["default"].cardRoot.getElementsByClassName("itemLinkTitle-"+b)[0];e=h["default"].cardRoot.getElementsByClassName("itemTitle-"+
b)[0];g&&e&&(k&&k[b].checked&&(g.style.display="unset",e.style.display="none"),k&&!k[b].checked&&(g.style.display="none",e.style.display="unset"));g=1;e=0;var y=h["default"].cardRoot.getElementsByClassName(r.chooseItems)[0],u=h["default"].cardRoot.getElementsByClassName(r.visuallyHidden)[0];d&&d.dataset.count&&(g=Number(d.dataset.count));for(var l=0;l<g;l++)k&&k[b]&&k[b].checked&&e++;0===e?setTimeout(function(){u.textContent=y.textContent},10):u.textContent="";d.dataset.components=JSON.stringify(k);
ra(r)}}),[2]}})})}});
