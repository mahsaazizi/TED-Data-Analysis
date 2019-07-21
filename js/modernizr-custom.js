/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundcliptext-backgroundsize-bgpositionshorthand-bgpositionxy-bgsizecover-borderradius-boxshadow-boxsizing-canvas-canvaswinding-capture-checked-contextmenu-cssanimations-csschunit-csscolumns-cssfilters-cssgradients-cssgrid_cssgridlegacy-csspositionsticky-cssreflections-cssresize-csstransforms-csstransforms3d-csstransitions-displaytable-ellipsis-flexbox-flexboxlegacy-flexwrap-fontface-formattribute-hovermq-htmlimports-multiplebgs-oninput-opacity-overflowscrolling-passiveeventlisteners-performance-preserve3d-rgba-shapes-smil-supports-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-textalignlast-textshadow-time-todataurljpeg_todataurlpng_todataurlwebp-wrapflow-setclasses !*/
!function(e,t,n){function r(e){var t=k.className,n=Modernizr._config.classPrefix||"";if(_&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),_?k.className.baseVal=t:k.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,t){return typeof e===t}function o(){var e,t,n,r,i,o,a;for(var d in T)if(T.hasOwnProperty(d)){if(e=[],t=T[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)o=e[i],a=o.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),y.push((r?"":"no-")+a.join("-"))}}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t){if("object"==typeof e)for(var n in e)O(e,n)&&d(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),s=Modernizr[i[0]];if(2==i.length&&(s=s[i[1]]),"undefined"!=typeof s)return Modernizr;t="function"==typeof t?t():t,1==i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),r([(t&&0!=t?"":"no-")+i.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function u(e,t){return!!~(""+e).indexOf(t)}function l(){var e=t.body;return e||(e=i(_?"svg":"body"),e.fake=!0),e}function c(e,n,r,s){var o,a,d,u,c="modernizr",f=i("div"),p=l();if(parseInt(r,10))for(;r--;)d=i("div"),d.id=s?s[r]:c+(r+1),f.appendChild(d);return o=i("style"),o.type="text/css",o.id="s"+c,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=k.style.overflow,k.style.overflow="hidden",k.appendChild(p)),a=n(f,e),p.fake?(p.parentNode.removeChild(p),k.style.overflow=u,k.offsetHeight):f.parentNode.removeChild(f),!!a}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],s(r,"function")?f(r,n||t):r);return!1}function g(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var s=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(s){var o=s.error?"error":"log";s[o].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function v(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(g(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];i--;)s.push("("+g(t[i])+":"+r+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function h(e,t,r,o){function d(){c&&(delete L.style,delete L.modElem)}if(o=s(o,"undefined")?!1:o,!s(r,"undefined")){var l=v(e,r);if(!s(l,"undefined"))return l}for(var c,f,p,g,m,h=["modernizr","tspan","samp"];!L.style&&h.length;)c=!0,L.modElem=i(h.shift()),L.style=L.modElem.style;for(p=e.length,f=0;p>f;f++)if(g=e[f],m=L.style[g],u(g,"-")&&(g=a(g)),L.style[g]!==n){if(o||s(r,"undefined"))return d(),"pfx"==t?g:!0;try{L.style[g]=r}catch(x){}if(L.style[g]!=m)return d(),"pfx"==t?g:!0}return d(),!1}function x(e,t,n,r,i){var o=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+B.join(o+" ")+o).split(" ");return s(t,"string")||s(t,"undefined")?h(a,t,r,i):(a=(e+" "+I.join(o+" ")+o).split(" "),p(a,t,n))}function b(e,t,r){return x(e,n,n,t,r)}var y=[],T=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var C="CSS"in e&&"supports"in e.CSS,S="supportsCSS"in e;Modernizr.addTest("supports",C||S),Modernizr.addTest("passiveeventlisteners",function(){var t=!1;try{var n=Object.defineProperty({},"passive",{get:function(){t=!0}});e.addEventListener("test",null,n)}catch(r){}return t}),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var k=t.documentElement;Modernizr.addTest("contextmenu","contextMenu"in k&&"HTMLMenuItemElement"in e);var _="svg"===k.nodeName.toLowerCase();Modernizr.addTest("rgba",function(){var e=i("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("preserve3d",function(){var t,n,r=e.CSS,s=!1;return r&&r.supports&&r.supports("(transform-style: preserve-3d)")?!0:(t=i("a"),n=i("a"),t.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",t.appendChild(n),k.appendChild(t),s=n.getBoundingClientRect(),k.removeChild(t),s=s.width&&s.width<4)}),Modernizr.addTest("time","valueAsDate"in i("time")),Modernizr.addTest("capture","capture"in i("input")),Modernizr.addTest("formattribute",function(){var e,n=i("form"),r=i("input"),s=i("div"),o="formtest"+(new Date).getTime(),a=!1;n.id=o;try{r.setAttribute("form",o)}catch(d){t.createAttribute&&(e=t.createAttribute("form"),e.nodeValue=o,r.setAttributeNode(e))}return s.appendChild(n),s.appendChild(r),k.appendChild(s),a=n.elements&&1===n.elements.length&&r.form==n,s.parentNode.removeChild(s),a}),Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))});var E=i("canvas");Modernizr.addTest("todataurljpeg",function(){return!!Modernizr.canvas&&0===E.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),Modernizr.addTest("todataurlpng",function(){return!!Modernizr.canvas&&0===E.toDataURL("image/png").indexOf("data:image/png")}),Modernizr.addTest("todataurlwebp",function(){var e=!1;try{e=!!Modernizr.canvas&&0===E.toDataURL("image/webp").indexOf("data:image/webp")}catch(t){}return e}),Modernizr.addTest("canvaswinding",function(){if(Modernizr.canvas===!1)return!1;var e=i("canvas").getContext("2d");return e.rect(0,0,10,10),e.rect(2,2,6,6),e.isPointInPath(5,5,"evenodd")===!1}),Modernizr.addTest("bgpositionshorthand",function(){var e=i("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("multiplebgs",function(){var e=i("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)});var z={elem:i("modernizr")};Modernizr._q.push(function(){delete z.elem}),Modernizr.addTest("csschunit",function(){var e,t=z.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(n){e=!1}return e});var A=function(){function e(e,t){var s;return e?(t&&"string"!=typeof t||(t=i(t||"div")),e="on"+e,s=e in t,!s&&r&&(t.setAttribute||(t=i("div")),t.setAttribute(e,""),s="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),s):!1}var r=!("onblur"in t.documentElement);return e}();w.hasEvent=A;var P={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(P.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("svgforeignobject",function(){return!!t.createElementNS&&/SVGForeignObject/.test(P.call(t.createElementNS("http://www.w3.org/2000/svg","foreignObject")))});var R=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=R,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",s=0,o=R.length-1;o>s;s++)e=0===s?"to ":"",r+=t+R[s]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var a=i("a"),d=a.style;return d.cssText=r,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=R.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=i("a"),r=n.style;return r.cssText=e+R.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)}),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t});var O;!function(){var e={}.hasOwnProperty;O=s(e,"undefined")||s(e.call,"undefined")?function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=d}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),d("htmlimports","import"in i("link"));var L={style:z.elem.style};Modernizr._q.unshift(function(){delete L.style});var N=w.testStyles=c;Modernizr.addTest("checked",function(){return N("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=i("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),Modernizr.addTest("oninput",function(){var n,r=i("input");if(r.setAttribute("oninput","return"),A("oninput",k)||"function"==typeof r.oninput)return!0;try{var s=t.createEvent("KeyboardEvent");n=!1;var o=function(e){n=!0,e.preventDefault(),e.stopPropagation()};s.initKeyEvent("keypress",!0,!0,e,!1,!1,!1,!1,0,"e".charCodeAt(0)),k.appendChild(r),r.addEventListener("input",o,!1),r.focus(),r.dispatchEvent(s),r.removeEventListener("input",o,!1),k.removeChild(r)}catch(a){n=!1}return n}),N("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2);var j=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();j?Modernizr.addTest("fontface",!1):N('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),i=r.sheet||r.styleSheet,s=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"",o=/src/i.test(s)&&0===s.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",o)});var M=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return c("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();w.mq=M,Modernizr.addTest("hovermq",M("(hover)"));var V="Moz O ms Webkit",B=w._config.usePrefixes?V.split(" "):[];w._cssomPrefixes=B;var G=function(t){var r,i=R.length,s=e.CSSRule;if("undefined"==typeof s)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+t;for(var o=0;i>o;o++){var a=R[o],d=a.toUpperCase()+"_"+r;if(d in s)return"@-"+a.toLowerCase()+"-"+t}return!1};w.atRule=G;var I=w._config.usePrefixes?V.toLowerCase().split(" "):[];w._domPrefixes=I;var U=w.testProp=function(e,t,r){return h([e],n,t,r)};Modernizr.addTest("textshadow",U("textShadow","1px 1px")),w.testAllProps=x,w.testAllProps=b,Modernizr.addTest("bgpositionxy",function(){return b("backgroundPositionX","3px",!0)&&b("backgroundPositionY","5px",!0)}),Modernizr.addTest("cssreflections",b("boxReflect","above",!0)),Modernizr.addTest("cssresize",b("resize","both",!0)),Modernizr.addTest("backgroundsize",b("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",b("backgroundSize","cover")),Modernizr.addTest("borderradius",b("borderRadius","0px",!0)),Modernizr.addTest("shapes",b("shapeOutside","content-box",!0)),Modernizr.addTest("boxshadow",b("boxShadow","1px 1px",!0)),Modernizr.addTest("textalignlast",b("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&b("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!b("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in k.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",N(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",b("transition","all",!0)),Modernizr.addTest("boxsizing",b("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=b("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=b("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||b(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("cssgridlegacy",b("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",b("grid-template-rows","none",!0)),Modernizr.addTest("ellipsis",b("textOverflow","ellipsis")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return b("filter","blur(2px)");var e=i("a");return e.style.cssText=R.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexbox",b("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",b("boxDirection","reverse",!0)),Modernizr.addTest("flexwrap",b("flexWrap","wrap",!0)),Modernizr.addTest("cssanimations",b("animationName","a",!0)),Modernizr.addTest("backgroundcliptext",function(){return b("backgroundClip","text")}),Modernizr.addTest("overflowscrolling",b("overflowScrolling","touch",!0));var q=w.prefixed=function(e,t,n){return 0===e.indexOf("@")?G(e):(-1!=e.indexOf("-")&&(e=a(e)),t?x(e,t,n):x(e,"pfx"))};Modernizr.addTest("wrapflow",function(){var e=q("wrapFlow");if(!e||_)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),r=i("div"),s=i("div"),o=i("span");s.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",o.innerText="X",r.appendChild(s),r.appendChild(o),k.appendChild(r);var a=o.offsetLeft;return k.removeChild(r),s=o=r=n,150==a}),Modernizr.addTest("performance",!!q("performance",e)),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(P.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))}),o(),r(y),delete w.addTest,delete w.addAsyncTest;for(var F=0;F<Modernizr._q.length;F++)Modernizr._q[F]();e.Modernizr=Modernizr}(window,document);