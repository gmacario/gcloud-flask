!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.fontawesome={})}(this,function(t){"use strict";var e=function(){},n={},r={},i=null,a={mark:e,measure:e};try{"undefined"!=typeof window&&(n=window),"undefined"!=typeof document&&(r=document),"undefined"!=typeof MutationObserver&&(i=MutationObserver),"undefined"!=typeof performance&&(a=performance)}catch(t){}var o=(n.navigator||{}).userAgent,s=void 0===o?"":o,f=n,l=r,c=i,u=a,m=!!f.document,d=!!l.documentElement&&!!l.head&&"function"==typeof l.addEventListener&&"function"==typeof l.createElement,g=~s.indexOf("MSIE")||~s.indexOf("Trident/"),h=16,p="data-fa-i2svg",v="data-fa-pseudo-element",b="fontawesome-i2svg",y=function(){try{return"production"===process.env.NODE_ENV}catch(t){return!1}}(),w=[1,2,3,4,5,6,7,8,9,10],x=w.concat([11,12,13,14,15,16,17,18,19,20]),k=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter"].concat(w.map(function(t){return t+"x"})).concat(x.map(function(t){return"w-"+t})),O=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},N=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},A=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},E=f.FontAwesomeConfig||{},z=Object.keys(E),C=M({familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},E);C.autoReplaceSvg||(C.observeMutations=!1);var S=M({},C);function L(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).asNewDefault,n=void 0!==e&&e,r=Object.keys(S),i=n?function(t){return~r.indexOf(t)&&!~z.indexOf(t)}:function(t){return~r.indexOf(t)};Object.keys(t).forEach(function(e){i(e)&&(S[e]=t[e])})}f.FontAwesomeConfig=S;var T=f||{};T.___FONT_AWESOME___||(T.___FONT_AWESOME___={}),T.___FONT_AWESOME___.styles||(T.___FONT_AWESOME___.styles={}),T.___FONT_AWESOME___.hooks||(T.___FONT_AWESOME___.hooks={}),T.___FONT_AWESOME___.shims||(T.___FONT_AWESOME___.shims=[]);var j=T.___FONT_AWESOME___,P=[],I=!1;d&&((I=(l.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(l.readyState))||l.addEventListener("DOMContentLoaded",function t(){l.removeEventListener("DOMContentLoaded",t),I=1,P.map(function(t){return t()})}));var F=h,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function W(t){if(t&&d){var e=l.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=l.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return l.head.insertBefore(e,r),t}}var B=0;function X(){return++B}function R(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function H(t){return t.classList?R(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Y(t){return(""+t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function V(t){return Object.keys(t||{}).reduce(function(e,n){return e+(n+": ")+t[n]+";"},"")}function U(t){return t.size!==D.size||t.x!==D.x||t.y!==D.y||t.rotate!==D.rotate||t.flipX||t.flipY}function q(t){var e=t.transform;return{outer:{transform:"translate("+t.containerWidth/2+" 256)"},inner:{transform:"translate("+32*e.x+", "+32*e.y+")  scale("+e.size/16*(e.flipX?-1:1)+", "+e.size/16*(e.flipY?-1:1)+")  rotate("+e.rotate+" 0 0)"},path:{transform:"translate("+t.iconWidth/2*-1+" -256)"}}}var K={x:0,y:0,width:"100%",height:"100%"},G=function(t){var e=t.children,n=t.attributes,r=t.main,i=t.mask,a=r.icon,o=i.icon,s=q({transform:t.transform,containerWidth:i.width,iconWidth:r.width}),f={tag:"rect",attributes:M({},K,{fill:"white"})},l={tag:"g",attributes:M({},s.inner),children:[{tag:"path",attributes:M({},a.attributes,s.path,{fill:"black"})}]},c={tag:"g",attributes:M({},s.outer),children:[l]},u="mask-"+X(),m="clip-"+X(),d={tag:"mask",attributes:M({},K,{id:u,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,c]};return e.push({tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:[o]},d]},{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#"+m+")",mask:"url(#"+u+")"},K)}),{children:e,attributes:n}},J=function(t){var e=t.children,n=t.attributes,r=t.main,i=t.transform,a=V(t.styles);if(a.length>0&&(n.style=a),U(i)){var o=q({transform:i,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:M({},o.outer),children:[{tag:"g",attributes:M({},o.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M({},r.icon.attributes,o.path)}]}]})}else e.push(r.icon);return{children:e,attributes:n}},Q=function(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,a=t.styles,o=t.transform;if(U(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=V(M({},a,{"transform-origin":s.x+o.x/16+"em "+(s.y+o.y/16)+"em"}))}return[{tag:"svg",attributes:i,children:e}]},Z=function(t){var e=t.children,n=t.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M({},t.attributes,{id:!0===n?t.prefix+"-"+S.familyPrefix+"-"+t.iconName:n}),children:e}]}]};function $(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.extra,c=t.watchable,u=void 0!==c&&c,m=r.found?r:n,d=m.width,g=m.height,h="fa-w-"+Math.ceil(d/g*16),v=[S.replacementClass,a?S.familyPrefix+"-"+a:"",h].concat(l.classes).join(" "),b={children:[],attributes:M({},l.attributes,{"data-prefix":i,"data-icon":a,class:v,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+d+" "+g})};u&&(b.attributes[p]=""),f&&b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-"+X()},children:[f]});var y=M({},b,{prefix:i,iconName:a,main:n,mask:r,transform:o,symbol:s,styles:l.styles}),w=r.found&&n.found?G(y):J(y),x=w.attributes;return y.children=w.children,y.attributes=x,s?Z(y):Q(y)}function tt(t){var e=t.content,n=t.width,r=t.height,i=t.transform,a=t.title,o=t.extra,s=t.watchable,f=void 0!==s&&s,l=M({},o.attributes,a?{title:a}:{},{class:o.classes.join(" ")});f&&(l[p]="");var c=M({},o.styles);U(i)&&(c.transform=function(t){var e=t.transform,n=t.width,r=t.height,i=t.startCentered,a=void 0!==i&&i,o="";return o+=a&&g?"translate("+(e.x/F-(void 0===n?h:n)/2)+"em, "+(e.y/F-(void 0===r?h:r)/2)+"em) ":a?"translate(calc(-50% + "+e.x/F+"em), calc(-50% + "+e.y/F+"em)) ":"translate("+e.x/F+"em, "+e.y/F+"em) ",(o+="scale("+e.size/F*(e.flipX?-1:1)+", "+e.size/F*(e.flipY?-1:1)+") ")+"rotate("+e.rotate+"deg) "}({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=V(c);u.length>0&&(l.style=u);var m=[];return m.push({tag:"span",attributes:l,children:[e]}),a&&m.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),m}var et=function(){},nt=S.measurePerformance&&u&&u.mark&&u.measure?u:{mark:et,measure:et},rt='FA "5.0.13"',it=function(t){nt.mark(rt+" "+t+" ends"),nt.measure(rt+" "+t,rt+" "+t+" begins",rt+" "+t+" ends")},at={begin:function(t){return nt.mark(rt+" "+t+" begins"),function(){return it(t)}},end:it},ot=function(t,e,n,r){var i,a,o,s=Object.keys(t),f=s.length,l=void 0!==r?function(t,e){return function(n,r,i,a){return t.call(e,n,r,i,a)}}(e,r):e;for(void 0===n?(i=1,o=t[s[0]]):(i=0,o=n);i<f;i++)o=l(o,t[a=s[i]],a,t);return o},st=j.styles,ft=j.shims,lt={},ct={},ut={},mt=function(){var t=function(t){return ot(st,function(e,n,r){return e[r]=ot(n,t,{}),e},{})};lt=t(function(t,e,n){return t[e[3]]=n,t}),ct=t(function(t,e,n){var r=e[2];return t[n]=n,r.forEach(function(e){t[e]=n}),t});var e="far"in st;ut=ot(ft,function(t,n){var r=n[1];return"far"!==r||e||(r="fas"),t[n[0]]={prefix:r,iconName:n[2]},t},{})};mt();var dt=j.styles,gt=function(){return{prefix:null,iconName:null,rest:[]}};function ht(t){return t.reduce(function(t,e){var n=function(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r!==t||""===i||~_.indexOf(i)?null:i}(S.familyPrefix,e);if(dt[e])t.prefix=e;else if(n){var r="fa"===t.prefix?ut[n]||{prefix:null,iconName:null}:{};t.iconName=r.iconName||n,t.prefix=r.prefix||t.prefix}else e!==S.replacementClass&&0!==e.indexOf("fa-w-")&&t.rest.push(e);return t},gt())}function pt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function vt(t){var e=t.tag,n=t.attributes,r=void 0===n?{}:n,i=t.children,a=void 0===i?[]:i;return"string"==typeof t?Y(t):"<"+e+" "+function(t){return Object.keys(t||{}).reduce(function(e,n){return e+(n+'="')+Y(t[n])+'" '},"").trim()}(r)+">"+a.map(vt).join("")+"</"+e+">"}var bt=function(){};function yt(t){return"string"==typeof(t.getAttribute?t.getAttribute(p):null)}var wt={replace:function(t){var e=t[0],n=t[1].map(function(t){return vt(t)}).join("\n");if(e.parentNode&&e.outerHTML)e.outerHTML=n+(S.keepOriginalSource&&"svg"!==e.tagName.toLowerCase()?"\x3c!-- "+e.outerHTML+" --\x3e":"");else if(e.parentNode){var r=document.createElement("span");e.parentNode.replaceChild(r,e),r.outerHTML=n}},nest:function(t){var e=t[0],n=t[1];if(~H(e).indexOf(S.replacementClass))return wt.replace(t);var r=new RegExp(S.familyPrefix+"-.*");delete n[0].attributes.style;var i=n[0].attributes.class.split(" ").reduce(function(t,e){return e===S.replacementClass||e.match(r)?t.toSvg.push(e):t.toNode.push(e),t},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" ");var a=n.map(function(t){return vt(t)}).join("\n");e.setAttribute("class",i.toNode.join(" ")),e.setAttribute(p,""),e.innerHTML=a}};function xt(t,e){var n="function"==typeof e?e:bt;0===t.length?n():(f.requestAnimationFrame||function(t){return t()})(function(){var e=!0===S.autoReplaceSvg?wt.replace:wt[S.autoReplaceSvg]||wt.replace,r=at.begin("mutate");t.map(e),r(),n()})}var kt=!1,_t=null,Ot=function(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(t,e){var n=e.split(":"),r=n[0],i=n.slice(1);return r&&i.length>0&&(t[r]=i.join(":").trim()),t},{})),n},Nt=function(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=void 0!==t.innerText?t.innerText.trim():"",i=ht(H(t));return e&&n&&(i.prefix=e,i.iconName=n),i.prefix&&r.length>1?i.iconName=ct[i.prefix][t.innerText]:i.prefix&&1===r.length&&(i.iconName=function(t,e){return lt[t][e]}(i.prefix,function(t){for(var e="",n=0;n<t.length;n++)e+=("000"+t.charCodeAt(n).toString(16)).slice(-4);return e}(t.innerText))),i},Mt=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(t,e){var n=e.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return t.flipX=!0,t;if(r&&"v"===i)return t.flipY=!0,t;if(i=parseFloat(i),isNaN(i))return t;switch(r){case"grow":t.size=t.size+i;break;case"shrink":t.size=t.size-i;break;case"left":t.x=t.x-i;break;case"right":t.x=t.x+i;break;case"up":t.y=t.y-i;break;case"down":t.y=t.y+i;break;case"rotate":t.rotate=t.rotate+i}return t},e):e},At=function(t){return Mt(t.getAttribute("data-fa-transform"))},Et=function(t){var e=t.getAttribute("data-fa-symbol");return null!==e&&(""===e||e)},zt=function(t){var e=R(t.attributes).reduce(function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t},{}),n=t.getAttribute("title");return S.autoA11y&&(n?e["aria-labelledby"]=S.replacementClass+"-title-"+X():e["aria-hidden"]="true"),e},Ct=function(t){var e=t.getAttribute("data-fa-mask");return e?ht(e.split(" ").map(function(t){return t.trim()})):gt()};function St(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}(St.prototype=Object.create(Error.prototype)).constructor=St;var Lt={fill:"currentColor"},Tt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},jt={tag:"path",attributes:M({},Lt,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},Pt=M({},Tt,{attributeName:"opacity"}),It={tag:"g",children:[jt,{tag:"circle",attributes:M({},Lt,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:M({},Tt,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M({},Pt,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:M({},Lt,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:M({},Pt,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:M({},Lt,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M({},Pt,{values:"0;0;1;1;0;0;"})}]}]},Ft=j.styles,Dt="fa-layers-text",Wt=/Font Awesome 5 (Solid|Regular|Light|Brands)/,Bt={Solid:"fas",Regular:"far",Light:"fal",Brands:"fab"};function Xt(t,e){var n={found:!1,width:512,height:512,icon:It};if(t&&e&&Ft[e]&&Ft[e][t]){var r=Ft[e][t];n={found:!0,width:r[0],height:r[1],icon:{tag:"path",attributes:{fill:"currentColor",d:r.slice(4)[0]}}}}else if(t&&e&&!S.showMissingIcons)throw new St("Icon is missing for prefix "+e+" with icon name "+t);return n}function Rt(t){var e=function(t){var e=Nt(t),n=e.iconName,r=e.prefix,i=e.rest,a=Ot(t),o=At(t),s=Et(t),f=zt(t),l=Ct(t);return{iconName:n,title:t.getAttribute("title"),prefix:r,transform:o,symbol:s,mask:l,extra:{classes:i,styles:a,attributes:f}}}(t);return~e.extra.classes.indexOf(Dt)?function(t,e){var n=e.title,r=e.transform,i=e.extra,a=null,o=null;if(g){var s=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();a=f.width/s,o=f.height/s}return S.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),[t,tt({content:t.innerHTML,width:a,height:o,transform:r,title:n,extra:i,watchable:!0})]}(t,e):function(t,e){var n=e.iconName,r=e.title,i=e.prefix,a=e.transform,o=e.symbol,s=e.mask,f=e.extra;return[t,$({icons:{main:Xt(n,i),mask:Xt(s.iconName,s.prefix)},prefix:i,iconName:n,transform:a,symbol:o,mask:s,title:r,extra:f,watchable:!0})]}(t,e)}function Ht(t){"function"==typeof t.remove?t.remove():t&&t.parentNode&&t.parentNode.removeChild(t)}function Yt(t){if(d){var e=at.begin("searchPseudoElements");kt=!0,R(t.querySelectorAll("*")).forEach(function(t){[":before",":after"].forEach(function(e){var n=f.getComputedStyle(t,e),r=n.getPropertyValue("font-family").match(Wt),i=R(t.children).filter(function(t){return t.getAttribute(v)===e})[0];if(i&&(i.nextSibling&&i.nextSibling.textContent.indexOf(v)>-1&&Ht(i.nextSibling),Ht(i),i=null),r&&!i){var a=n.getPropertyValue("content"),o=l.createElement("i");o.setAttribute("class",""+Bt[r[1]]),o.setAttribute(v,e),o.innerText=3===a.length?a.substr(1,1):a,":before"===e?t.insertBefore(o,t.firstChild):t.appendChild(o)}})}),kt=!1,e()}}function Vt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(d){var n=l.documentElement.classList,r=function(t){return n.add(b+"-"+t)},i=function(t){return n.remove(b+"-"+t)},a=Object.keys(Ft),o=["."+Dt+":not(["+p+"])"].concat(a.map(function(t){return"."+t+":not(["+p+"])"})).join(", ");if(0!==o.length){var s=R(t.querySelectorAll(o));if(s.length>0){r("pending"),i("complete");var f=at.begin("onTree"),c=s.reduce(function(t,e){try{var n=Rt(e);n&&t.push(n)}catch(t){y||t instanceof St&&console.error(t)}return t},[]);f(),xt(c,function(){r("active"),r("complete"),i("pending"),"function"==typeof e&&e()})}}}}function Ut(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Rt(t);n&&xt([n],e)}var qt=function(){var t="svg-inline--fa",e=S.familyPrefix,n=S.replacementClass,r='svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n';if("fa"!==e||n!==t){var i=new RegExp("\\.fa\\-","g"),a=new RegExp("\\."+t,"g");r=r.replace(i,"."+e+"-").replace(a,"."+n)}return r};function Kt(t){return{found:!0,width:t[0],height:t[1],icon:{tag:"path",attributes:{fill:"currentColor",d:t.slice(4)[0]}}}}var Gt=!1;function Jt(){S.autoAddCss&&(Gt||W(qt()),Gt=!0)}function Qt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(t){return vt(t)})}}),Object.defineProperty(t,"node",{get:function(){if(d){var e=l.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function Zt(t){var e=t.prefix,n=void 0===e?"fa":e,r=t.iconName;if(r)return pt(te.definitions,n,r)||pt(j.styles,n,r)}var $t,te=new(function(){function t(){O(this,t),this.definitions={}}return N(t,[{key:"add",value:function(){for(var t=this,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(e){t.definitions[e]=M({},t.definitions[e]||{},i[e]),function t(e,n){var r=Object.keys(n).reduce(function(t,e){var r=n[e];return r.icon?t[r.iconName]=r.icon:t[e]=r,t},{});"function"==typeof j.hooks.addPack?j.hooks.addPack(e,r):j.styles[e]=M({},j.styles[e]||{},r),"fas"===e&&t("fa",n)}(e,i[e])})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map(function(e){var r=n[e],i=r.prefix,a=r.iconName,o=r.icon;t[i]||(t[i]={}),t[i][a]=o}),t}}]),t}()),ee=function(){L({autoReplaceSvg:!1,observeMutations:!1}),_t&&_t.disconnect()},ne={i2svg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(d){Jt();var e=t.node,n=void 0===e?l:e,r=t.callback,i=void 0===r?function(){}:r;S.searchPseudoElements&&Yt(n),Vt(n,i)}},css:qt,insertCss:function(){W(qt())}},re={transform:function(t){return Mt(t)}},ie=($t=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?D:n,i=e.symbol,a=void 0!==i&&i,o=e.mask,s=void 0===o?null:o,f=e.title,l=void 0===f?null:f,c=e.classes,u=void 0===c?[]:c,m=e.attributes,d=void 0===m?{}:m,g=e.styles,h=void 0===g?{}:g;if(t){var p=t.prefix,v=t.iconName,b=t.icon;return Qt(M({type:"icon"},t),function(){return Jt(),S.autoA11y&&(l?d["aria-labelledby"]=S.replacementClass+"-title-"+X():d["aria-hidden"]="true"),$({icons:{main:Kt(b),mask:s?Kt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:v,transform:M({},D,r),symbol:a,title:l,extra:{attributes:d,styles:h,classes:u}})})}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:Zt(t||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Zt(r||{})),$t(n,M({},e,{mask:r}))}),ae=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?D:n,i=e.title,a=void 0===i?null:i,o=e.classes,s=void 0===o?[]:o,f=e.attributes,l=void 0===f?{}:f,c=e.styles,u=void 0===c?{}:c;return Qt({type:"text",content:t},function(){return Jt(),tt({content:t,transform:M({},D,r),title:a,extra:{attributes:l,styles:u,classes:[S.familyPrefix+"-layers-text"].concat(A(s))}})})},oe=function(t){return Qt({type:"layer"},function(){Jt();var e=[];return t(function(t){Array.isArray(t)?t.map(function(t){e=e.concat(t.abstract)}):e=e.concat(t.abstract)}),[{tag:"span",attributes:{class:S.familyPrefix+"-layers"},children:e}]})},se={noAuto:ee,dom:ne,library:te,parse:re,findIconDefinition:Zt,icon:ie,text:ae,layer:oe},fe=function(){d&&S.autoReplaceSvg&&se.dom.i2svg({node:l})};Object.defineProperty(se,"config",{get:function(){return S},set:function(t){L(t)}}),d&&function(t){try{!function(){var t;m&&(f.FontAwesome||(f.FontAwesome=se),t=function(){Object.keys(j.styles).length>0&&fe(),S.observeMutations&&"function"==typeof MutationObserver&&function(t){if(c){var e=t.treeCallback,n=t.nodeCallback,r=t.pseudoElementsCallback;_t=new c(function(t){kt||R(t).forEach(function(t){if("childList"===t.type&&t.addedNodes.length>0&&!yt(t.addedNodes[0])&&(S.searchPseudoElements&&r(t.target),e(t.target)),"attributes"===t.type&&t.target.parentNode&&S.searchPseudoElements&&r(t.target.parentNode),"attributes"===t.type&&yt(t.target)&&~k.indexOf(t.attributeName))if("class"===t.attributeName){var i=ht(H(t.target)),a=i.prefix,o=i.iconName;a&&t.target.setAttribute("data-prefix",a),o&&t.target.setAttribute("data-icon",o)}else n(t.target)})}),d&&_t.observe(l.getElementsByTagName("body")[0],{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}({treeCallback:Vt,nodeCallback:Ut,pseudoElementsCallback:Yt})},d&&(I?setTimeout(t,0):P.push(t))),j.hooks=M({},j.hooks,{addPack:function(t,e){j.styles[t]=M({},j.styles[t]||{},e),mt(),fe()},addShims:function(t){var e;(e=j.shims).push.apply(e,A(t)),mt(),fe()}})}()}catch(t){if(!y)throw t}}(),t.config=se.config,t.default=se,t.icon=ie,t.noAuto=ee,t.layer=oe,t.text=ae,t.library=te,t.dom=ne,t.parse=re,t.findIconDefinition=Zt,Object.defineProperty(t,"__esModule",{value:!0})});