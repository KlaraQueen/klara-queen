/*! For license information please see main.89f2979c.js.LICENSE.txt */
(()=>{"use strict";var e={4(e,t,n){var r=n(853),i=n(43),a=n(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(l(e)!==e)throw Error(o(188))}function h(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=h(e)))return t;e=e.sibling}return null}var p=Object.assign,f=Symbol.for("react.element"),m=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),x=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),j=Symbol.for("react.lazy");Symbol.for("react.scope");var _=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var T=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var C=Symbol.iterator;function I(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=C&&e[C]||e["@@iterator"])?e:null}var A=Symbol.for("react.client.reference");function P(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===A?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case y:return"Fragment";case b:return"Profiler";case w:return"StrictMode";case z:return"Suspense";case S:return"SuspenseList";case _:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case g:return"Portal";case x:return e.displayName||"Context";case v:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case E:return null!==(t=e.displayName||null)?t:P(e.type)||"Memo";case j:t=e._payload,e=e._init;try{return P(e(t))}catch(hl){}}return null}var R=Array.isArray,N=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},L=[],M=-1;function $(e){return{current:e}}function F(e){0>M||(e.current=L[M],L[M]=null,M--)}function U(e,t){M++,L[M]=e.current,e.current=t}var V,B,H=$(null),W=$(null),K=$(null),G=$(null);function q(e,t){switch(U(K,t),U(W,e),U(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?wd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=bd(t=wd(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(H),U(H,e)}function Q(){F(H),F(W),F(K)}function Y(e){null!==e.memoizedState&&U(G,e);var t=H.current,n=bd(t,e.type);t!==n&&(U(W,e),U(H,n))}function J(e){W.current===e&&(F(H),F(W)),G.current===e&&(F(G),dh._currentValue=O)}function X(e){if(void 0===V)try{throw Error()}catch(hl){var t=hl.stack.trim().match(/\n( *(at )?)/);V=t&&t[1]||"",B=-1<hl.stack.indexOf("\n    at")?" (<anonymous>)":-1<hl.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+V+e+B}var Z=!1;function ee(e,t){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(hl){var r=hl}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}e.call(n.prototype)}}else{try{throw Error()}catch(a){r=a}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(o){if(o&&r&&"string"===typeof o.stack)return[o.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var l=o.split("\n"),c=s.split("\n");for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===c.length)for(r=l.length-1,i=c.length-1;1<=r&&0<=i&&l[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==c[i]){if(1!==r||1!==i)do{if(r--,0>--i||l[r]!==c[i]){var u="\n"+l[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=i);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?X(n):""}function te(e,t){switch(e.tag){case 26:case 27:case 5:return X(e.type);case 16:return X("Lazy");case 13:return e.child!==t&&null!==t?X("Suspense Fallback"):X("Suspense");case 19:return X("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return X("Activity");default:return""}}function ne(e){try{var t="",n=null;do{t+=te(e,n),n=e,e=e.return}while(e);return t}catch(hl){return"\nError generating stack: "+hl.message+"\n"+hl.stack}}var re=Object.prototype.hasOwnProperty,ie=r.unstable_scheduleCallback,ae=r.unstable_cancelCallback,oe=r.unstable_shouldYield,se=r.unstable_requestPaint,le=r.unstable_now,ce=r.unstable_getCurrentPriorityLevel,ue=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,he=r.unstable_NormalPriority,pe=r.unstable_LowPriority,fe=r.unstable_IdlePriority,me=r.log,ge=r.unstable_setDisableYieldValue,ye=null,we=null;function be(e){if("function"===typeof me&&ge(e),we&&"function"===typeof we.setStrictMode)try{we.setStrictMode(ye,e)}catch(t){}}var ve=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(xe(e)/ke|0)|0},xe=Math.log,ke=Math.LN2;var ze=256,Se=262144,Ee=4194304;function je(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _e(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=134217727&r;return 0!==s?0!==(r=s&~a)?i=je(r):0!==(o&=s)?i=je(o):n||0!==(n=s&~e)&&(i=je(n)):0!==(s=r&~a)?i=je(s):0!==o?i=je(o):n||0!==(n=r&~e)&&(i=je(n)),0===i?0:0!==t&&t!==i&&0===(t&a)&&((a=i&-i)>=(n=t&-t)||32===a&&0!==(4194048&n))?t:i}function Te(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Ce(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ie(){var e=Ee;return 0===(62914560&(Ee<<=1))&&(Ee=4194304),e}function Ae(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pe(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Re(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ve(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function Ne(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function De(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:Oe(n))&(e.suspendedLanes|t))?0:n}function Oe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Le(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Me(){var e=D.p;return 0!==e?e:void 0===(e=window.event)?32:_h(e.type)}function $e(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var Fe=Math.random().toString(36).slice(2),Ue="__reactFiber$"+Fe,Ve="__reactProps$"+Fe,Be="__reactContainer$"+Fe,He="__reactEvents$"+Fe,We="__reactListeners$"+Fe,Ke="__reactHandles$"+Fe,Ge="__reactResources$"+Fe,qe="__reactMarker$"+Fe;function Qe(e){delete e[Ue],delete e[Ve],delete e[He],delete e[We],delete e[Ke]}function Ye(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Be]||n[Ue]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Ld(e);null!==e;){if(n=e[Ue])return n;e=Ld(e)}return t}n=(e=n).parentNode}return null}function Je(e){if(e=e[Ue]||e[Be]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function Xe(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function Ze(e){var t=e[Ge];return t||(t=e[Ge]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[qe]=!0}var tt=new Set,nt={};function rt(e,t){it(e,t),it(e+"Capture",t)}function it(e,t){for(nt[e]=t,e=0;e<t.length;e++)tt.add(t[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},st={};function lt(e,t,n){if(i=t,re.call(st,i)||!re.call(ot,i)&&(at.test(i)?st[i]=!0:(ot[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var i}function ct(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function ut(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ht(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function pt(e){if(!e._valueTracker){var t=ht(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ht(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function mt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var gt=/[\n"\\]/g;function yt(e){return e.replace(gt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function wt(e,t,n,r,i,a,o,s){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?vt(e,o,dt(t)):null!=n?vt(e,o,dt(n)):null!=r&&e.removeAttribute("value"),null==i&&null!=a&&(e.defaultChecked=!!a),null!=i&&(e.checked=i&&"function"!==typeof i&&"symbol"!==typeof i),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+dt(s):e.removeAttribute("name")}function bt(e,t,n,r,i,a,o,s){if(null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.type=a),null!=t||null!=n){if(!("submit"!==a&&"reset"!==a||void 0!==t&&null!==t))return void pt(e);n=null!=n?""+dt(n):"",t=null!=t?""+dt(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:i)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o),pt(e)}function vt(e,t,n){"number"===t&&mt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function kt(e,t,n){null==t||((t=""+dt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+dt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function zt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(R(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=dt(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),pt(e)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Et=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jt(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||Et.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function _t(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&jt(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&jt(e,a,t[a])}function Tt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),It=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function At(e){return It.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pt(){}var Rt=null;function Nt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Dt=null,Ot=null;function Lt(e){var t=Je(e);if(t&&(e=t.stateNode)){var n=e[Ve]||null;e:switch(e=t.stateNode,t.type){case"input":if(wt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Ve]||null;if(!i)throw Error(o(90));wt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ft(r)}break e;case"textarea":kt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&xt(e,!!n.multiple,t,!1)}}}var Mt=!1;function $t(e,t,n){if(Mt)return e(t,n);Mt=!0;try{return e(t)}finally{if(Mt=!1,(null!==Dt||null!==Ot)&&(eu(),Dt&&(t=Dt,e=Ot,Ot=Dt=null,Lt(t),e)))for(t=0;t<e.length;t++)Lt(e[t])}}function Ft(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Ve]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Ut=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Vt=!1;if(Ut)try{var Bt={};Object.defineProperty(Bt,"passive",{get:function(){Vt=!0}}),window.addEventListener("test",Bt,Bt),window.removeEventListener("test",Bt,Bt)}catch(Xh){Vt=!1}var Ht=null,Wt=null,Kt=null;function Gt(){if(Kt)return Kt;var e,t,n=Wt,r=n.length,i="value"in Ht?Ht.value:Ht.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Kt=i.slice(e,1<t?1-t:void 0)}function qt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Qt(){return!0}function Yt(){return!1}function Jt(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Qt:Yt,this.isPropagationStopped=Yt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Qt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Qt)},persist:function(){},isPersistent:Qt}),t}var Xt,Zt,en,tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nn=Jt(tn),rn=p({},tn,{view:0,detail:0}),an=Jt(rn),on=p({},rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&"mousemove"===e.type?(Xt=e.screenX-en.screenX,Zt=e.screenY-en.screenY):Zt=Xt=0,en=e),Xt)},movementY:function(e){return"movementY"in e?e.movementY:Zt}}),sn=Jt(on),ln=Jt(p({},on,{dataTransfer:0})),cn=Jt(p({},rn,{relatedTarget:0})),un=Jt(p({},tn,{animationName:0,elapsedTime:0,pseudoElement:0})),dn=Jt(p({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),hn=Jt(p({},tn,{data:0})),pn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=mn[e])&&!!t[e]}function yn(){return gn}var wn=Jt(p({},rn,{key:function(e){if(e.key){var t=pn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=qt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?fn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yn,charCode:function(e){return"keypress"===e.type?qt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?qt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),bn=Jt(p({},on,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),vn=Jt(p({},rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yn})),xn=Jt(p({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),kn=Jt(p({},on,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),zn=Jt(p({},tn,{newState:0,oldState:0})),Sn=[9,13,27,32],En=Ut&&"CompositionEvent"in window,jn=null;Ut&&"documentMode"in document&&(jn=document.documentMode);var _n=Ut&&"TextEvent"in window&&!jn,Tn=Ut&&(!En||jn&&8<jn&&11>=jn),Cn=String.fromCharCode(32),In=!1;function An(e,t){switch(e){case"keyup":return-1!==Sn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Rn=!1;var Nn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Nn[e.type]:"textarea"===t}function On(e,t,n,r){Dt?Ot?Ot.push(r):Ot=[r]:Dt=r,0<(t=id(t,"onChange")).length&&(n=new nn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ln=null,Mn=null;function $n(e){Yu(e,0)}function Fn(e){if(ft(Xe(e)))return e}function Un(e,t){if("change"===e)return t}var Vn=!1;if(Ut){var Bn;if(Ut){var Hn="oninput"in document;if(!Hn){var Wn=document.createElement("div");Wn.setAttribute("oninput","return;"),Hn="function"===typeof Wn.oninput}Bn=Hn}else Bn=!1;Vn=Bn&&(!document.documentMode||9<document.documentMode)}function Kn(){Ln&&(Ln.detachEvent("onpropertychange",Gn),Mn=Ln=null)}function Gn(e){if("value"===e.propertyName&&Fn(Mn)){var t=[];On(t,Mn,e,Nt(e)),$t($n,t)}}function qn(e,t,n){"focusin"===e?(Kn(),Mn=n,(Ln=t).attachEvent("onpropertychange",Gn)):"focusout"===e&&Kn()}function Qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Fn(Mn)}function Yn(e,t){if("click"===e)return Fn(t)}function Jn(e,t){if("input"===e||"change"===e)return Fn(t)}var Xn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Zn(e,t){if(Xn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!re.call(t,i)||!Xn(e[i],t[i]))return!1}return!0}function er(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tr(e,t){var n,r=er(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=er(r)}}function nr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?nr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function rr(e){for(var t=mt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=mt((e=t.contentWindow).document)}return t}function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ar=Ut&&"documentMode"in document&&11>=document.documentMode,or=null,sr=null,lr=null,cr=!1;function ur(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;cr||null==or||or!==mt(r)||("selectionStart"in(r=or)&&ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},lr&&Zn(lr,r)||(lr=r,0<(r=id(sr,"onSelect")).length&&(t=new nn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=or)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},pr={},fr={};function mr(e){if(pr[e])return pr[e];if(!hr[e])return e;var t,n=hr[e];for(t in n)if(n.hasOwnProperty(t)&&t in fr)return pr[e]=n[t];return e}Ut&&(fr=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);var gr=mr("animationend"),yr=mr("animationiteration"),wr=mr("animationstart"),br=mr("transitionrun"),vr=mr("transitionstart"),xr=mr("transitioncancel"),kr=mr("transitionend"),zr=new Map,Sr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){zr.set(e,t),rt(t,[e])}Sr.push("scrollEnd");var jr="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},_r=[],Tr=0,Cr=0;function Ir(){for(var e=Tr,t=Cr=Tr=0;t<e;){var n=_r[t];_r[t++]=null;var r=_r[t];_r[t++]=null;var i=_r[t];_r[t++]=null;var a=_r[t];if(_r[t++]=null,null!==r&&null!==i){var o=r.pending;null===o?i.next=i:(i.next=o.next,o.next=i),r.pending=i}0!==a&&Nr(n,i,a)}}function Ar(e,t,n,r){_r[Tr++]=e,_r[Tr++]=t,_r[Tr++]=n,_r[Tr++]=r,Cr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Pr(e,t,n,r){return Ar(e,t,n,r),Dr(e)}function Rr(e,t){return Ar(e,null,null,t),Dr(e)}function Nr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var i=!1,a=e.return;null!==a;)a.childLanes|=n,null!==(r=a.alternate)&&(r.childLanes|=n),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(i=!0)),e=a,a=a.return;return 3===e.tag?(a=e.stateNode,i&&null!==t&&(i=31-ve(n),null===(r=(e=a.hiddenUpdates)[i])?e[i]=[t]:r.push(t),t.lane=536870912|n),a):null}function Dr(e){if(50<Wc)throw Wc=0,Kc=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Or={};function Lr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mr(e,t,n,r){return new Lr(e,t,n,r)}function $r(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Fr(e,t){var n=e.alternate;return null===n?((n=Mr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ur(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vr(e,t,n,r,i,a){var s=0;if(r=e,"function"===typeof e)$r(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,H.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case _:return(e=Mr(31,n,t,i)).elementType=_,e.lanes=a,e;case y:return Br(n.children,i,a,t);case w:s=8,i|=24;break;case b:return(e=Mr(12,n,t,2|i)).elementType=b,e.lanes=a,e;case z:return(e=Mr(13,n,t,i)).elementType=z,e.lanes=a,e;case S:return(e=Mr(19,n,t,i)).elementType=S,e.lanes=a,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case x:s=10;break e;case v:s=9;break e;case k:s=11;break e;case E:s=14;break e;case j:s=16,r=null;break e}s=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=Mr(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Br(e,t,n,r){return(e=Mr(7,e,r,t)).lanes=n,e}function Hr(e,t,n){return(e=Mr(6,e,null,t)).lanes=n,e}function Wr(e){var t=Mr(18,null,null,0);return t.stateNode=e,t}function Kr(e,t,n){return(t=Mr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Gr=new WeakMap;function qr(e,t){if("object"===typeof e&&null!==e){var n=Gr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ne(t)},Gr.set(e,t),t)}return{value:e,source:t,stack:ne(t)}}var Qr=[],Yr=0,Jr=null,Xr=0,Zr=[],ei=0,ti=null,ni=1,ri="";function ii(e,t){Qr[Yr++]=Xr,Qr[Yr++]=Jr,Jr=e,Xr=t}function ai(e,t,n){Zr[ei++]=ni,Zr[ei++]=ri,Zr[ei++]=ti,ti=e;var r=ni;e=ri;var i=32-ve(r)-1;r&=~(1<<i),n+=1;var a=32-ve(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ni=1<<32-ve(t)+i|n<<i|r,ri=a+e}else ni=1<<a|n<<i|r,ri=e}function oi(e){null!==e.return&&(ii(e,1),ai(e,1,0))}function si(e){for(;e===Jr;)Jr=Qr[--Yr],Qr[Yr]=null,Xr=Qr[--Yr],Qr[Yr]=null;for(;e===ti;)ti=Zr[--ei],Zr[ei]=null,ri=Zr[--ei],Zr[ei]=null,ni=Zr[--ei],Zr[ei]=null}function li(e,t){Zr[ei++]=ni,Zr[ei++]=ri,Zr[ei++]=ti,ni=t.id,ri=t.overflow,ti=e}var ci=null,ui=null,di=!1,hi=null,pi=!1,fi=Error(o(519));function mi(e){throw xi(qr(Error(o(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),fi}function gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ue]=e,t[Ve]=r,n){case"dialog":Ju("cancel",t),Ju("close",t);break;case"iframe":case"object":case"embed":Ju("load",t);break;case"video":case"audio":for(n=0;n<qu.length;n++)Ju(qu[n],t);break;case"source":Ju("error",t);break;case"img":case"image":case"link":Ju("error",t),Ju("load",t);break;case"details":Ju("toggle",t);break;case"input":Ju("invalid",t),bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ju("invalid",t);break;case"textarea":Ju("invalid",t),zt(t,r.value,r.defaultValue,r.children)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||ud(t.textContent,n)?(null!=r.popover&&(Ju("beforetoggle",t),Ju("toggle",t)),null!=r.onScroll&&Ju("scroll",t),null!=r.onScrollEnd&&Ju("scrollend",t),null!=r.onClick&&(t.onclick=Pt),t=!0):t=!1,t||mi(e,!0)}function yi(e){for(ci=e.return;ci;)switch(ci.tag){case 5:case 31:case 13:return void(pi=!1);case 27:case 3:return void(pi=!0);default:ci=ci.return}}function wi(e){if(e!==ci)return!1;if(!di)return yi(e),di=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||vd(e.type,e.memoizedProps)),t=!t),t&&ui&&mi(e),yi(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));ui=Od(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));ui=Od(e)}else 27===n?(n=ui,_d(e.type)?(e=Dd,Dd=null,ui=e):ui=n):ui=ci?Nd(e.stateNode.nextSibling):null;return!0}function bi(){ui=ci=null,di=!1}function vi(){var e=hi;return null!==e&&(null===Ac?Ac=e:Ac.push.apply(Ac,e),hi=null),e}function xi(e){null===hi?hi=[e]:hi.push(e)}var ki=$(null),zi=null,Si=null;function Ei(e,t,n){U(ki,t._currentValue),t._currentValue=n}function ji(e){e._currentValue=ki.current,F(ki)}function _i(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ti(e,t,n,r){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var a=i.dependencies;if(null!==a){var s=i.child;a=a.firstContext;e:for(;null!==a;){var l=a;a=i;for(var c=0;c<t.length;c++)if(l.context===t[c]){a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),_i(a.return,n,e),r||(s=null);break e}a=l.next}}else if(18===i.tag){if(null===(s=i.return))throw Error(o(341));s.lanes|=n,null!==(a=s.alternate)&&(a.lanes|=n),_i(s,n,e),s=null}else s=i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}function Ci(e,t,n,r){e=null;for(var i=t,a=!1;null!==i;){if(!a)if(0!==(524288&i.flags))a=!0;else if(0!==(262144&i.flags))break;if(10===i.tag){var s=i.alternate;if(null===s)throw Error(o(387));if(null!==(s=s.memoizedProps)){var l=i.type;Xn(i.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(i===G.current){if(null===(s=i.alternate))throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(dh):e=[dh])}i=i.return}null!==e&&Ti(t,e,n,r),t.flags|=262144}function Ii(e){for(e=e.firstContext;null!==e;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ai(e){zi=e,Si=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Pi(e){return Ni(zi,e)}function Ri(e,t){return null===zi&&Ai(e),Ni(e,t)}function Ni(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Si){if(null===e)throw Error(o(308));Si=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Si=Si.next=t;return n}var Di="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Oi=r.unstable_scheduleCallback,Li=r.unstable_NormalPriority,Mi={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $i(){return{controller:new Di,data:new Map,refCount:0}}function Fi(e){e.refCount--,0===e.refCount&&Oi(Li,function(){e.controller.abort()})}var Ui=null,Vi=0,Bi=0,Hi=null;function Wi(){if(0===--Vi&&null!==Ui){null!==Hi&&(Hi.status="fulfilled");var e=Ui;Ui=null,Bi=0,Hi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ki=N.S;N.S=function(e,t){Nc=le(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Ui){var n=Ui=[];Vi=0,Bi=Bu(),Hi={status:"pending",value:void 0,then:function(e){n.push(e)}}}Vi++,t.then(Wi,Wi)}(0,t),null!==Ki&&Ki(e,t)};var Gi=$(null);function qi(){var e=Gi.current;return null!==e?e:mc.pooledCache}function Qi(e,t){U(Gi,null===t?Gi.current:t.pool)}function Yi(){var e=qi();return null===e?null:{parent:Mi._currentValue,pool:e}}var Ji=Error(o(460)),Xi=Error(o(474)),Zi=Error(o(542)),ea={then:function(){}};function ta(e){return"fulfilled"===(e=e.status)||"rejected"===e}function na(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Pt,Pt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw oa(e=t.reason),e;default:if("string"===typeof t.status)t.then(Pt,Pt);else{if(null!==(e=mc)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw oa(e=t.reason),e}throw ia=t,Ji}}function ra(e){try{return(0,e._init)(e._payload)}catch(hl){if(null!==hl&&"object"===typeof hl&&"function"===typeof hl.then)throw ia=hl,Ji;throw hl}}var ia=null;function aa(){if(null===ia)throw Error(o(459));var e=ia;return ia=null,e}function oa(e){if(e===Ji||e===Zi)throw Error(o(483))}var sa=null,la=0;function ca(e){var t=la;return la+=1,null===sa&&(sa=[]),na(sa,e,t)}function ua(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function da(e,t){if(t.$$typeof===f)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ha(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=Fr(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Hr(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===j&&ra(a)===t.type)?(ua(t=i(t,n.props),n),t.return=e,t):(ua(t=Vr(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Kr(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Br(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Hr(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case m:return ua(n=Vr(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case g:return(t=Kr(t,e.mode,n)).return=e,t;case j:return h(e,t=ra(t),n)}if(R(t)||I(t))return(t=Br(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return h(e,ca(t),n);if(t.$$typeof===x)return h(e,Ri(e,t),n);da(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case m:return n.key===i?c(e,t,n,r):null;case g:return n.key===i?u(e,t,n,r):null;case j:return p(e,t,n=ra(n),r)}if(R(n)||I(n))return null!==i?null:d(e,t,n,r,null);if("function"===typeof n.then)return p(e,t,ca(n),r);if(n.$$typeof===x)return p(e,t,Ri(e,n),r);da(e,n)}return null}function f(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case m:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case g:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case j:return f(e,t,n,r=ra(r),i)}if(R(r)||I(r))return d(t,e=e.get(n)||null,r,i,null);if("function"===typeof r.then)return f(e,t,n,ca(r),i);if(r.$$typeof===x)return f(e,t,n,Ri(t,r),i);da(t,r)}return null}function w(l,c,u,d){if("object"===typeof u&&null!==u&&u.type===y&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case m:e:{for(var b=u.key;null!==c;){if(c.key===b){if((b=u.type)===y){if(7===c.tag){n(l,c.sibling),(d=i(c,u.props.children)).return=l,l=d;break e}}else if(c.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===j&&ra(b)===c.type){n(l,c.sibling),ua(d=i(c,u.props),u),d.return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}u.type===y?((d=Br(u.props.children,l.mode,d,u.key)).return=l,l=d):(ua(d=Vr(u.type,u.key,u.props,null,l.mode,d),u),d.return=l,l=d)}return s(l);case g:e:{for(b=u.key;null!==c;){if(c.key===b){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(d=i(c,u.children||[])).return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}(d=Kr(u,l.mode,d)).return=l,l=d}return s(l);case j:return w(l,c,u=ra(u),d)}if(R(u))return function(i,o,s,l){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=p(i,d,s[m],l);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(i,d),o=a(y,o,m),null===u?c=y:u.sibling=y,u=y,d=g}if(m===s.length)return n(i,d),di&&ii(i,m),c;if(null===d){for(;m<s.length;m++)null!==(d=h(i,s[m],l))&&(o=a(d,o,m),null===u?c=d:u.sibling=d,u=d);return di&&ii(i,m),c}for(d=r(d);m<s.length;m++)null!==(g=f(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),di&&ii(i,m),c}(l,c,u,d);if(I(u)){if("function"!==typeof(b=I(u)))throw Error(o(150));return function(i,s,l,c){if(null==l)throw Error(o(151));for(var u=null,d=null,m=s,g=s=0,y=null,w=l.next();null!==m&&!w.done;g++,w=l.next()){m.index>g?(y=m,m=null):y=m.sibling;var b=p(i,m,w.value,c);if(null===b){null===m&&(m=y);break}e&&m&&null===b.alternate&&t(i,m),s=a(b,s,g),null===d?u=b:d.sibling=b,d=b,m=y}if(w.done)return n(i,m),di&&ii(i,g),u;if(null===m){for(;!w.done;g++,w=l.next())null!==(w=h(i,w.value,c))&&(s=a(w,s,g),null===d?u=w:d.sibling=w,d=w);return di&&ii(i,g),u}for(m=r(m);!w.done;g++,w=l.next())null!==(w=f(m,i,g,w.value,c))&&(e&&null!==w.alternate&&m.delete(null===w.key?g:w.key),s=a(w,s,g),null===d?u=w:d.sibling=w,d=w);return e&&m.forEach(function(e){return t(i,e)}),di&&ii(i,g),u}(l,c,u=b.call(u),d)}if("function"===typeof u.then)return w(l,c,ca(u),d);if(u.$$typeof===x)return w(l,c,Ri(l,u),d);da(l,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(d=i(c,u)).return=l,l=d):(n(l,c),(d=Hr(u,l.mode,d)).return=l,l=d),s(l)):n(l,c)}return function(e,t,n,r){try{la=0;var i=w(e,t,n,r);return sa=null,i}catch(hl){if(hl===Ji||hl===Zi)throw hl;var a=Mr(29,hl,null,e.mode);return a.lanes=r,a.return=e,a}}}var pa=ha(!0),fa=ha(!1),ma=!1;function ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&fc)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Dr(e),Nr(e,null,n),t}return Ar(e,r,t,n),Dr(e)}function va(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ne(e,n)}}function xa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ka=!1;function za(){if(ka){if(null!==Hi)throw Hi}}function Sa(e,t,n,r){ka=!1;var i=e.updateQueue;ma=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,u=c=l=null,s=a;;){var h=-536870913&s.lane,f=h!==s.lane;if(f?(yc&h)===h:(r&h)===h){0!==h&&h===Bi&&(ka=!0),null!==u&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var m=e,g=s;h=t;var y=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(y,d,h);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(h="function"===typeof(m=g.payload)?m.call(y,d,h):m)||void 0===h)break e;d=p({},d,h);break e;case 2:ma=!0}}null!==(h=s.callback)&&(e.flags|=64,f&&(e.flags|=8192),null===(f=i.callbacks)?i.callbacks=[h]:f.push(h))}else f={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,o|=h;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null===a&&(i.shared.lanes=0),Ec|=o,e.lanes=o,e.memoizedState=d}}function Ea(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function ja(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)Ea(n[e],t)}var _a=$(null),Ta=$(0);function Ca(e,t){U(Ta,e=zc),U(_a,t),zc=e|t.baseLanes}function Ia(){U(Ta,zc),U(_a,_a.current)}function Aa(){zc=Ta.current,F(_a),F(Ta)}var Pa=$(null),Ra=null;function Na(e){var t=e.alternate;U($a,1&$a.current),U(Pa,e),null===Ra&&(null===t||null!==_a.current||null!==t.memoizedState)&&(Ra=e)}function Da(e){U($a,$a.current),U(Pa,e),null===Ra&&(Ra=e)}function Oa(e){22===e.tag?(U($a,$a.current),U(Pa,e),null===Ra&&(Ra=e)):La()}function La(){U($a,$a.current),U(Pa,Pa.current)}function Ma(e){F(Pa),Ra===e&&(Ra=null),F($a)}var $a=$(0);function Fa(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Pd(n)||Rd(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child;continue}}else if(0!==(128&t.flags))return t;if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ua=0,Va=null,Ba=null,Ha=null,Wa=!1,Ka=!1,Ga=!1,qa=0,Qa=0,Ya=null,Ja=0;function Xa(){throw Error(o(321))}function Za(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xn(e[n],t[n]))return!1;return!0}function eo(e,t,n,r,i,a){return Ua=a,Va=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=null===e||null===e.memoizedState?gs:ys,Ga=!1,a=n(r,i),Ga=!1,Ka&&(a=no(t,n,r,i)),to(e),a}function to(e){N.H=ms;var t=null!==Ba&&null!==Ba.next;if(Ua=0,Ha=Ba=Va=null,Wa=!1,Qa=0,Ya=null,t)throw Error(o(300));null===e||Rs||null!==(e=e.dependencies)&&Ii(e)&&(Rs=!0)}function no(e,t,n,r){Va=e;var i=0;do{if(Ka&&(Ya=null),Qa=0,Ka=!1,25<=i)throw Error(o(301));if(i+=1,Ha=Ba=null,null!=e.updateQueue){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,null!=a.memoCache&&(a.memoCache.index=0)}N.H=ws,a=t(n,r)}while(Ka);return a}function ro(){var e=N.H,t=e.useState()[0];return t="function"===typeof t.then?co(t):t,e=e.useState()[0],(null!==Ba?Ba.memoizedState:null)!==e&&(Va.flags|=1024),t}function io(){var e=0!==qa;return qa=0,e}function ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function oo(e){if(Wa){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Wa=!1}Ua=0,Ha=Ba=Va=null,Ka=!1,Qa=qa=0,Ya=null}function so(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Ha?Va.memoizedState=Ha=e:Ha=Ha.next=e,Ha}function lo(){if(null===Ba){var e=Va.alternate;e=null!==e?e.memoizedState:null}else e=Ba.next;var t=null===Ha?Va.memoizedState:Ha.next;if(null!==t)Ha=t,Ba=e;else{if(null===e){if(null===Va.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(Ba=e).memoizedState,baseState:Ba.baseState,baseQueue:Ba.baseQueue,queue:Ba.queue,next:null},null===Ha?Va.memoizedState=Ha=e:Ha=Ha.next=e}return Ha}function co(e){var t=Qa;return Qa+=1,null===Ya&&(Ya=[]),e=na(Ya,e,t),t=Va,null===(null===Ha?t.memoizedState:Ha.next)&&(t=t.alternate,N.H=null===t||null===t.memoizedState?gs:ys),e}function uo(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return co(e);if(e.$$typeof===x)return Pi(e)}throw Error(o(438,String(e)))}function ho(e){var t=null,n=Va.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Va.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Va.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=T;return t.index++,n}function po(e,t){return"function"===typeof t?t(e):t}function fo(e){return mo(lo(),Ba,e)}function mo(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,null===i)e.memoizedState=a;else{var l=s=null,c=null,u=t=i.next,d=!1;do{var h=-536870913&u.lane;if(h!==u.lane?(yc&h)===h:(Ua&h)===h){var p=u.revertLane;if(0===p)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===Bi&&(d=!0);else{if((Ua&p)===p){u=u.next,p===Bi&&(d=!0);continue}h={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=h,s=a):c=c.next=h,Va.lanes|=p,Ec|=p}h=u.action,Ga&&n(a,h),a=u.hasEagerState?u.eagerState:n(a,h)}else p={lane:h,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=p,s=a):c=c.next=p,Va.lanes|=h,Ec|=h;u=u.next}while(null!==u&&u!==t);if(null===c?s=a:c.next=l,!Xn(a,e.memoizedState)&&(Rs=!0,d&&null!==(n=Hi)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=c,r.lastRenderedState=a}return null===i&&(r.lanes=0),[e.memoizedState,r.dispatch]}function go(e){var t=lo(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);Xn(a,t.memoizedState)||(Rs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function yo(e,t,n){var r=Va,i=lo(),a=di;if(a){if(void 0===n)throw Error(o(407));n=n()}else n=t();var s=!Xn((Ba||i).memoizedState,n);if(s&&(i.memoizedState=n,Rs=!0),i=i.queue,Vo(vo.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||null!==Ha&&1&Ha.memoizedState.tag){if(r.flags|=2048,Lo(9,{destroy:void 0},bo.bind(null,r,i,n,t),null),null===mc)throw Error(o(349));a||0!==(127&Ua)||wo(r,t,n)}return n}function wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Va.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Va.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function bo(e,t,n,r){t.value=n,t.getSnapshot=r,xo(t)&&ko(e)}function vo(e,t,n){return n(function(){xo(t)&&ko(e)})}function xo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xn(e,n)}catch(r){return!0}}function ko(e){var t=Rr(e,2);null!==t&&Qc(t,e,2)}function zo(e){var t=so();if("function"===typeof e){var n=e;if(e=n(),Ga){be(!0);try{n()}finally{be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:e},t}function So(e,t,n,r){return e.baseState=n,mo(e,Ba,"function"===typeof r?r:po)}function Eo(e,t,n,r,i){if(hs(e))throw Error(o(485));if(null!==(e=t.action)){var a={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};null!==N.T?n(!0):a.isTransition=!1,r(a),null===(n=t.pending)?(a.next=t.pending=a,jo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function jo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=N.T,o={};N.T=o;try{var s=n(i,r),l=N.S;null!==l&&l(o,s),_o(e,t,s)}catch(c){Co(e,t,c)}finally{null!==a&&null!==o.types&&(a.types=o.types),N.T=a}}else try{_o(e,t,a=n(i,r))}catch(u){Co(e,t,u)}}function _o(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){To(e,t,n)},function(n){return Co(e,t,n)}):To(e,t,n)}function To(e,t,n){t.status="fulfilled",t.value=n,Io(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,jo(e,n)))}function Co(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,Io(t),t=t.next}while(t!==r)}e.action=null}function Io(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ao(e,t){return t}function Po(e,t){if(di){var n=mc.formState;if(null!==n){e:{var r=Va;if(di){if(ui){t:{for(var i=ui,a=pi;8!==i.nodeType;){if(!a){i=null;break t}if(null===(i=Nd(i.nextSibling))){i=null;break t}}i="F!"===(a=i.data)||"F"===a?i:null}if(i){ui=Nd(i.nextSibling),r="F!"===i.data;break e}}mi(r)}r=!1}r&&(t=n[0])}}return(n=so()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},n.queue=r,n=cs.bind(null,Va,r),r.dispatch=n,r=zo(!1),a=ds.bind(null,Va,!1,r.queue),i={state:t,dispatch:null,action:e,pending:null},(r=so()).queue=i,n=Eo.bind(null,Va,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ro(e){return No(lo(),Ba,e)}function No(e,t,n){if(t=mo(e,t,Ao)[0],e=fo(po)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=co(t)}catch(hl){if(hl===Ji)throw Zi;throw hl}else r=t;var i=(t=lo()).queue,a=i.dispatch;return n!==t.memoizedState&&(Va.flags|=2048,Lo(9,{destroy:void 0},Do.bind(null,i,n),null)),[r,a,e]}function Do(e,t){e.action=t}function Oo(e){var t=lo(),n=Ba;if(null!==n)return No(t,n,e);lo(),t=t.memoizedState;var r=(n=lo()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Lo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=Va.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Va.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Mo(){return lo().memoizedState}function $o(e,t,n,r){var i=so();Va.flags|=e,i.memoizedState=Lo(1|t,{destroy:void 0},n,void 0===r?null:r)}function Fo(e,t,n,r){var i=lo();r=void 0===r?null:r;var a=i.memoizedState.inst;null!==Ba&&null!==r&&Za(r,Ba.memoizedState.deps)?i.memoizedState=Lo(t,a,n,r):(Va.flags|=e,i.memoizedState=Lo(1|t,a,n,r))}function Uo(e,t){$o(8390656,8,e,t)}function Vo(e,t){Fo(2048,8,e,t)}function Bo(e){var t=lo().memoizedState;return function(e){Va.flags|=4;var t=Va.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},Va.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&fc))throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Ho(e,t){return Fo(4,2,e,t)}function Wo(e,t){return Fo(4,4,e,t)}function Ko(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Go(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Fo(4,4,Ko.bind(null,t,e),n)}function qo(){}function Qo(e,t){var n=lo();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&Za(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yo(e,t){var n=lo();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&Za(t,r[1]))return r[0];if(r=e(),Ga){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r}function Jo(e,t,n){return void 0===n||0!==(1073741824&Ua)&&0===(261930&yc)?e.memoizedState=t:(e.memoizedState=n,e=qc(),Va.lanes|=e,Ec|=e,n)}function Xo(e,t,n,r){return Xn(n,t)?n:null!==_a.current?(e=Jo(e,n,r),Xn(e,t)||(Rs=!0),e):0===(42&Ua)||0!==(1073741824&Ua)&&0===(261930&yc)?(Rs=!0,e.memoizedState=n):(e=qc(),Va.lanes|=e,Ec|=e,t)}function Zo(e,t,n,r,i){var a=D.p;D.p=0!==a&&8>a?a:8;var o=N.T,s={};N.T=s,ds(e,!1,t,n);try{var l=i(),c=N.S;if(null!==c&&c(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)us(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(l,r),Gc());else us(e,t,r,Gc())}catch(u){us(e,t,{then:function(){},status:"rejected",reason:u},Gc())}finally{D.p=a,null!==o&&null!==s.types&&(o.types=s.types),N.T=o}}function es(){}function ts(e,t,n,r){if(5!==e.tag)throw Error(o(476));var i=ns(e).queue;Zo(e,i,t,O,null===n?es:function(){return rs(e),n(r)})}function ns(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:O},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function rs(e){var t=ns(e);null===t.next&&(t=e.alternate.memoizedState),us(e,t.next.queue,{},Gc())}function is(){return Pi(dh)}function as(){return lo().memoizedState}function os(){return lo().memoizedState}function ss(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Gc(),r=ba(t,e=wa(n),n);return null!==r&&(Qc(r,t,n),va(r,t,n)),t={cache:$i()},void(e.payload=t)}t=t.return}}function ls(e,t,n){var r=Gc();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},hs(e)?ps(t,n):null!==(n=Pr(e,t,n,r))&&(Qc(n,e,r),fs(n,t,r))}function cs(e,t,n){us(e,t,n,Gc())}function us(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(hs(e))ps(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Xn(s,o))return Ar(e,t,i,0),null===mc&&Ir(),!1}catch(l){}if(null!==(n=Pr(e,t,i,r)))return Qc(n,e,r),fs(n,t,r),!0}return!1}function ds(e,t,n,r){if(r={lane:2,revertLane:Bu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},hs(e)){if(t)throw Error(o(479))}else null!==(t=Pr(e,n,r,2))&&Qc(t,e,2)}function hs(e){var t=e.alternate;return e===Va||null!==t&&t===Va}function ps(e,t){Ka=Wa=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fs(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ne(e,n)}}var ms={readContext:Pi,use:uo,useCallback:Xa,useContext:Xa,useEffect:Xa,useImperativeHandle:Xa,useLayoutEffect:Xa,useInsertionEffect:Xa,useMemo:Xa,useReducer:Xa,useRef:Xa,useState:Xa,useDebugValue:Xa,useDeferredValue:Xa,useTransition:Xa,useSyncExternalStore:Xa,useId:Xa,useHostTransitionStatus:Xa,useFormState:Xa,useActionState:Xa,useOptimistic:Xa,useMemoCache:Xa,useCacheRefresh:Xa};ms.useEffectEvent=Xa;var gs={readContext:Pi,use:uo,useCallback:function(e,t){return so().memoizedState=[e,void 0===t?null:t],e},useContext:Pi,useEffect:Uo,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,$o(4194308,4,Ko.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){$o(4,2,e,t)},useMemo:function(e,t){var n=so();t=void 0===t?null:t;var r=e();if(Ga){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=so();if(void 0!==n){var i=n(t);if(Ga){be(!0);try{n(t)}finally{be(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ls.bind(null,Va,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},so().memoizedState=e},useState:function(e){var t=(e=zo(e)).queue,n=cs.bind(null,Va,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:qo,useDeferredValue:function(e,t){return Jo(so(),e,t)},useTransition:function(){var e=zo(!1);return e=Zo.bind(null,Va,e.queue,!0,!1),so().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Va,i=so();if(di){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===mc)throw Error(o(349));0!==(127&yc)||wo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Uo(vo.bind(null,r,a,e),[e]),r.flags|=2048,Lo(9,{destroy:void 0},bo.bind(null,r,a,n,t),null),n},useId:function(){var e=so(),t=mc.identifierPrefix;if(di){var n=ri;t="_"+t+"R_"+(n=(ni&~(1<<32-ve(ni)-1)).toString(32)+n),0<(n=qa++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Ja++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:is,useFormState:Po,useActionState:Po,useOptimistic:function(e){var t=so();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ds.bind(null,Va,!0,n),n.dispatch=t,[e,t]},useMemoCache:ho,useCacheRefresh:function(){return so().memoizedState=ss.bind(null,Va)},useEffectEvent:function(e){var t=so(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&fc))throw Error(o(440));return n.impl.apply(void 0,arguments)}}},ys={readContext:Pi,use:uo,useCallback:Qo,useContext:Pi,useEffect:Vo,useImperativeHandle:Go,useInsertionEffect:Ho,useLayoutEffect:Wo,useMemo:Yo,useReducer:fo,useRef:Mo,useState:function(){return fo(po)},useDebugValue:qo,useDeferredValue:function(e,t){return Xo(lo(),Ba.memoizedState,e,t)},useTransition:function(){var e=fo(po)[0],t=lo().memoizedState;return["boolean"===typeof e?e:co(e),t]},useSyncExternalStore:yo,useId:as,useHostTransitionStatus:is,useFormState:Ro,useActionState:Ro,useOptimistic:function(e,t){return So(lo(),0,e,t)},useMemoCache:ho,useCacheRefresh:os};ys.useEffectEvent=Bo;var ws={readContext:Pi,use:uo,useCallback:Qo,useContext:Pi,useEffect:Vo,useImperativeHandle:Go,useInsertionEffect:Ho,useLayoutEffect:Wo,useMemo:Yo,useReducer:go,useRef:Mo,useState:function(){return go(po)},useDebugValue:qo,useDeferredValue:function(e,t){var n=lo();return null===Ba?Jo(n,e,t):Xo(n,Ba.memoizedState,e,t)},useTransition:function(){var e=go(po)[0],t=lo().memoizedState;return["boolean"===typeof e?e:co(e),t]},useSyncExternalStore:yo,useId:as,useHostTransitionStatus:is,useFormState:Oo,useActionState:Oo,useOptimistic:function(e,t){var n=lo();return null!==Ba?So(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ho,useCacheRefresh:os};function bs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}ws.useEffectEvent=Bo;var vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Gc(),i=wa(r);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=ba(e,i,r))&&(Qc(t,e,r),va(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Gc(),i=wa(r);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=ba(e,i,r))&&(Qc(t,e,r),va(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Gc(),r=wa(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=ba(e,r,n))&&(Qc(t,e,n),va(t,e,n))}};function xs(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!Zn(n,r)||!Zn(i,a))}function ks(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vs.enqueueReplaceState(t,t.state,null)}function zs(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)void 0===n[i]&&(n[i]=e[i]);return n}function Ss(e){jr(e)}function Es(e){console.error(e)}function js(e){jr(e)}function _s(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ts(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Cs(e,t,n){return(n=wa(n)).tag=3,n.payload={element:null},n.callback=function(){_s(e,t)},n}function Is(e){return(e=wa(e)).tag=3,e}function As(e,t,n,r){var i=n.type.getDerivedStateFromError;if("function"===typeof i){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ts(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){Ts(t,n,r),"function"!==typeof i&&(null===Lc?Lc=new Set([this]):Lc.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Ps=Error(o(461)),Rs=!1;function Ns(e,t,n,r){t.child=null===e?fa(t,null,n,r):pa(t,e.child,n,r)}function Ds(e,t,n,r,i){n=n.render;var a=t.ref;if("ref"in r){var o={};for(var s in r)"ref"!==s&&(o[s]=r[s])}else o=r;return Ai(t),r=eo(e,t,n,o,a,i),s=io(),null===e||Rs?(di&&s&&oi(t),t.flags|=1,Ns(e,t,r,i),t.child):(ao(e,t,i),il(e,t,i))}function Os(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||$r(a)||void 0!==a.defaultProps||null!==n.compare?((e=Vr(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ls(e,t,a,r,i))}if(a=e.child,!al(e,i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:Zn)(o,r)&&e.ref===t.ref)return il(e,t,i)}return t.flags|=1,(e=Fr(a,r)).ref=t.ref,e.return=t,t.child=e}function Ls(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(Zn(a,r)&&e.ref===t.ref){if(Rs=!1,t.pendingProps=r=a,!al(e,i))return t.lanes=e.lanes,il(e,t,i);0!==(131072&e.flags)&&(Rs=!0)}}return Hs(e,t,n,r,i)}function Ms(e,t,n,r){var i=r.children,a=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(0!==(128&t.flags)){if(a=null!==a?a.baseLanes|n:n,null!==e){for(r=t.child=e.child,i=0;null!==r;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Fs(e,t,a,n,r)}if(0===(536870912&n))return r=t.lanes=536870912,Fs(e,t,null!==a?a.baseLanes|n:n,n,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Qi(0,null!==a?a.cachePool:null),null!==a?Ca(t,a):Ia(),Oa(t)}else null!==a?(Qi(0,a.cachePool),Ca(t,a),La(),t.memoizedState=null):(null!==e&&Qi(0,null),Ia(),La());return Ns(e,t,i,n),t.child}function $s(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Fs(e,t,n,r,i){var a=qi();return a=null===a?null:{parent:Mi._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&Qi(0,null),Ia(),Oa(t),null!==e&&Ci(e,t,r,!0),t.childLanes=i,null}function Us(e,t){return(t=Zs({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function Vs(e,t,n){return pa(t,e.child,null,n),(e=Us(t,t.pendingProps)).flags|=2,Ma(t),t.memoizedState=null,e}function Bs(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Hs(e,t,n,r,i){return Ai(t),n=eo(e,t,n,r,void 0,i),r=io(),null===e||Rs?(di&&r&&oi(t),t.flags|=1,Ns(e,t,n,i),t.child):(ao(e,t,i),il(e,t,i))}function Ws(e,t,n,r,i,a){return Ai(t),t.updateQueue=null,n=no(t,r,n,i),to(e),r=io(),null===e||Rs?(di&&r&&oi(t),t.flags|=1,Ns(e,t,n,a),t.child):(ao(e,t,a),il(e,t,a))}function Ks(e,t,n,r,i){if(Ai(t),null===t.stateNode){var a=Or,o=n.contextType;"object"===typeof o&&null!==o&&(a=Pi(o)),a=new n(r,a),t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a.updater=vs,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=r,a.state=t.memoizedState,a.refs={},ga(t),o=n.contextType,a.context="object"===typeof o&&null!==o?Pi(o):Or,a.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(bs(t,n,o,r),a.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(o=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),o!==a.state&&vs.enqueueReplaceState(a,a.state,null),Sa(t,r,a,i),za(),a.state=t.memoizedState),"function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){a=t.stateNode;var s=t.memoizedProps,l=zs(n,s);a.props=l;var c=a.context,u=n.contextType;o=Or,"object"===typeof u&&null!==u&&(o=Pi(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof a.getSnapshotBeforeUpdate,s=t.pendingProps!==s,u||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s||c!==o)&&ks(t,a,r,o),ma=!1;var h=t.memoizedState;a.state=h,Sa(t,r,a,i),za(),c=t.memoizedState,s||h!==c||ma?("function"===typeof d&&(bs(t,n,d,r),c=t.memoizedState),(l=ma||xs(t,n,l,r,h,c,o))?(u||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=o,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ya(e,t),u=zs(n,o=t.memoizedProps),a.props=u,d=t.pendingProps,h=a.context,c=n.contextType,l=Or,"object"===typeof c&&null!==c&&(l=Pi(c)),(c="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(o!==d||h!==l)&&ks(t,a,r,l),ma=!1,h=t.memoizedState,a.state=h,Sa(t,r,a,i),za();var p=t.memoizedState;o!==d||h!==p||ma||null!==e&&null!==e.dependencies&&Ii(e.dependencies)?("function"===typeof s&&(bs(t,n,s,r),p=t.memoizedState),(u=ma||xs(t,n,u,r,h,p,l)||null!==e&&null!==e.dependencies&&Ii(e.dependencies))?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=u):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Bs(e,t),r=0!==(128&t.flags),a||r?(a=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&r?(t.child=pa(t,e.child,null,i),t.child=pa(t,null,n,i)):Ns(e,t,n,i),t.memoizedState=a.state,e=t.child):e=il(e,t,i),e}function Gs(e,t,n,r){return bi(),t.flags|=256,Ns(e,t,n,r),t.child}var qs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qs(e){return{baseLanes:e,cachePool:Yi()}}function Ys(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=Tc),e}function Js(e,t,n){var r,i=t.pendingProps,a=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&$a.current)),r&&(a=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(di){if(a?Na(t):La(),(e=ui)?null!==(e=null!==(e=Ad(e,pi))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==ti?{id:ni,overflow:ri}:null,retryLane:536870912,hydrationErrors:null},(n=Wr(e)).return=t,t.child=n,ci=t,ui=null):e=null,null===e)throw mi(t);return Rd(e)?t.lanes=32:t.lanes=536870912,null}var l=i.children;return i=i.fallback,a?(La(),l=Zs({mode:"hidden",children:l},a=t.mode),i=Br(i,a,n,null),l.return=t,i.return=t,l.sibling=i,t.child=l,(i=t.child).memoizedState=Qs(n),i.childLanes=Ys(e,r,n),t.memoizedState=qs,$s(null,i)):(Na(t),Xs(t,l))}var c=e.memoizedState;if(null!==c&&null!==(l=c.dehydrated)){if(s)256&t.flags?(Na(t),t.flags&=-257,t=el(e,t,n)):null!==t.memoizedState?(La(),t.child=e.child,t.flags|=128,t=null):(La(),l=i.fallback,a=t.mode,i=Zs({mode:"visible",children:i.children},a),(l=Br(l,a,n,null)).flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,pa(t,e.child,null,n),(i=t.child).memoizedState=Qs(n),i.childLanes=Ys(e,r,n),t.memoizedState=qs,t=$s(null,i));else if(Na(t),Rd(l)){if(r=l.nextSibling&&l.nextSibling.dataset)var u=r.dgst;r=u,(i=Error(o(419))).stack="",i.digest=r,xi({value:i,source:null,stack:null}),t=el(e,t,n)}else if(Rs||Ci(e,t,n,!1),r=0!==(n&e.childLanes),Rs||r){if(null!==(r=mc)&&(0!==(i=De(r,n))&&i!==c.retryLane))throw c.retryLane=i,Rr(e,i),Qc(r,e,i),Ps;Pd(l)||su(),t=el(e,t,n)}else Pd(l)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,ui=Nd(l.nextSibling),ci=t,di=!0,hi=null,pi=!1,null!==e&&li(t,e),(t=Xs(t,i.children)).flags|=4096);return t}return a?(La(),l=i.fallback,a=t.mode,u=(c=e.child).sibling,(i=Fr(c,{mode:"hidden",children:i.children})).subtreeFlags=65011712&c.subtreeFlags,null!==u?l=Fr(u,l):(l=Br(l,a,n,null)).flags|=2,l.return=t,i.return=t,i.sibling=l,t.child=i,$s(null,i),i=t.child,null===(l=e.child.memoizedState)?l=Qs(n):(null!==(a=l.cachePool)?(c=Mi._currentValue,a=a.parent!==c?{parent:c,pool:c}:a):a=Yi(),l={baseLanes:l.baseLanes|n,cachePool:a}),i.memoizedState=l,i.childLanes=Ys(e,r,n),t.memoizedState=qs,$s(e.child,i)):(Na(t),e=(n=e.child).sibling,(n=Fr(n,{mode:"visible",children:i.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Xs(e,t){return(t=Zs({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Zs(e,t){return(e=Mr(22,e,null,t)).lanes=0,e}function el(e,t,n){return pa(t,e.child,null,n),(e=Xs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function tl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),_i(e.return,t,n)}function nl(e,t,n,r,i,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function rl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=$a.current,s=0!==(2&o);if(s?(o=1&o|2,t.flags|=128):o&=1,U($a,o),Ns(e,t,r,n),r=di?Xr:0,!s&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&tl(e,n,t);else if(19===e.tag)tl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Fa(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nl(t,!1,i,n,a,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Fa(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nl(t,!0,n,null,a,r);break;case"together":nl(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function il(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ec|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Ci(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Fr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Fr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function al(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Ii(e))}function ol(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Rs=!0;else{if(!al(e,n)&&0===(128&t.flags))return Rs=!1,function(e,t,n){switch(t.tag){case 3:q(t,t.stateNode.containerInfo),Ei(0,Mi,e.memoizedState.cache),bi();break;case 27:case 5:Y(t);break;case 4:q(t,t.stateNode.containerInfo);break;case 10:Ei(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,Da(t),null;break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Na(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Js(e,t,n):(Na(t),null!==(e=il(e,t,n))?e.sibling:null);Na(t);break;case 19:var i=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Ci(e,t,n,!1),r=0!==(n&t.childLanes)),i){if(r)return rl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),U($a,$a.current),r)break;return null;case 22:return t.lanes=0,Ms(e,t,n,t.pendingProps);case 24:Ei(0,Mi,e.memoizedState.cache)}return il(e,t,n)}(e,t,n);Rs=0!==(131072&e.flags)}else Rs=!1,di&&0!==(1048576&t.flags)&&ai(t,Xr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=ra(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var i=e.$$typeof;if(i===k){t.tag=11,t=Ds(null,t,e,r,n);break e}if(i===E){t.tag=14,t=Os(null,t,e,r,n);break e}}throw t=P(e)||e,Error(o(306,t,""))}$r(e)?(r=zs(e,r),t.tag=1,t=Ks(null,t,e,r,n)):(t.tag=0,t=Hs(null,t,e,r,n))}return t;case 0:return Hs(e,t,t.type,t.pendingProps,n);case 1:return Ks(e,t,r=t.type,i=zs(r,t.pendingProps),n);case 3:e:{if(q(t,t.stateNode.containerInfo),null===e)throw Error(o(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,ya(e,t),Sa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ei(0,Mi,r),r!==a.cache&&Ti(t,[Mi],n,!0),za(),r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Gs(e,t,r,n);break e}if(r!==i){xi(i=qr(Error(o(424)),t)),t=Gs(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(ui=Nd(e.firstChild),ci=t,di=!0,hi=null,pi=!0,n=fa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(bi(),r===i){t=il(e,t,n);break e}Ns(e,t,r,n)}t=t.child}return t;case 26:return Bs(e,t),null===e?(n=Kd(t.type,null,t.pendingProps,null))?t.memoizedState=n:di||(n=t.type,e=t.pendingProps,(r=yd(K.current).createElement(n))[Ue]=t,r[Ve]=e,pd(r,n,e),et(r),t.stateNode=r):t.memoizedState=Kd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Y(t),null===e&&di&&(r=t.stateNode=Md(t.type,t.pendingProps,K.current),ci=t,pi=!0,i=ui,_d(t.type)?(Dd=i,ui=Nd(r.firstChild)):ui=i),Ns(e,t,t.pendingProps.children,n),Bs(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&di&&((i=r=ui)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[qe])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(a!==i.rel||e.getAttribute("href")!==(null==i.href||""===i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((a=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var a=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===a)return e}if(null===(e=Nd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,pi))?(t.stateNode=r,ci=t,ui=Nd(r.firstChild),pi=!1,i=!0):i=!1),i||mi(t)),Y(t),i=t.type,a=t.pendingProps,s=null!==e?e.memoizedProps:null,r=a.children,vd(i,a)?r=null:null!==s&&vd(i,s)&&(t.flags|=32),null!==t.memoizedState&&(i=eo(e,t,ro,null,null,n),dh._currentValue=i),Bs(e,t),Ns(e,t,r,n),t.child;case 6:return null===e&&di&&((e=n=ui)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=Nd(e.nextSibling)))return null}return e}(n,t.pendingProps,pi))?(t.stateNode=n,ci=t,ui=null,e=!0):e=!1),e||mi(t)),null;case 13:return Js(e,t,n);case 4:return q(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=pa(t,null,r,n):Ns(e,t,r,n),t.child;case 11:return Ds(e,t,t.type,t.pendingProps,n);case 7:return Ns(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ns(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ei(0,t.type,r.value),Ns(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Ai(t),r=r(i=Pi(i)),t.flags|=1,Ns(e,t,r,n),t.child;case 14:return Os(e,t,t.type,t.pendingProps,n);case 15:return Ls(e,t,t.type,t.pendingProps,n);case 19:return rl(e,t,n);case 31:return function(e,t,n){var r=t.pendingProps,i=0!==(128&t.flags);if(t.flags&=-129,null===e){if(di){if("hidden"===r.mode)return e=Us(t,r),t.lanes=536870912,$s(null,e);if(Da(t),(e=ui)?null!==(e=null!==(e=Ad(e,pi))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==ti?{id:ni,overflow:ri}:null,retryLane:536870912,hydrationErrors:null},(n=Wr(e)).return=t,t.child=n,ci=t,ui=null):e=null,null===e)throw mi(t);return t.lanes=536870912,null}return Us(t,r)}var a=e.memoizedState;if(null!==a){var s=a.dehydrated;if(Da(t),i)if(256&t.flags)t.flags&=-257,t=Vs(e,t,n);else{if(null===t.memoizedState)throw Error(o(558));t.child=e.child,t.flags|=128,t=null}else if(Rs||Ci(e,t,n,!1),i=0!==(n&e.childLanes),Rs||i){if(null!==(r=mc)&&0!==(s=De(r,n))&&s!==a.retryLane)throw a.retryLane=s,Rr(e,s),Qc(r,e,s),Ps;su(),t=Vs(e,t,n)}else e=a.treeContext,ui=Nd(s.nextSibling),ci=t,di=!0,hi=null,pi=!1,null!==e&&li(t,e),(t=Us(t,r)).flags|=4096;return t}return(e=Fr(e.child,{mode:r.mode,children:r.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return Ms(e,t,n,t.pendingProps);case 24:return Ai(t),r=Pi(Mi),null===e?(null===(i=qi())&&(i=mc,a=$i(),i.pooledCache=a,a.refCount++,null!==a&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},ga(t),Ei(0,Mi,i)):(0!==(e.lanes&n)&&(ya(e,t),Sa(t,null,null,n),za()),i=e.memoizedState,a=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),Ei(0,Mi,r)):(r=a.cache,Ei(0,Mi,r),r!==i.cache&&Ti(t,[Mi],n,!0))),Ns(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function sl(e){e.flags|=4}function ll(e,t,n,r,i){if((t=0!==(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&i)===i)if(e.stateNode.complete)e.flags|=8192;else{if(!iu())throw ia=ea,Xi;e.flags|=8192}}else e.flags&=-16777217}function cl(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!ah(t)){if(!iu())throw ia=ea,Xi;e.flags|=8192}}function ul(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ie():536870912,e.lanes|=t,Cc|=t)}function dl(e,t){if(!di)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=65011712&i.subtreeFlags,r|=65011712&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fl(e,t,n){var r=t.pendingProps;switch(si(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return pl(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ji(Mi),Q(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(wi(t)?sl(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,vi())),pl(t),null;case 26:var i=t.type,a=t.memoizedState;return null===e?(sl(t),null!==a?(pl(t),cl(t,a)):(pl(t),ll(t,i,0,0,n))):a?a!==e.memoizedState?(sl(t),pl(t),cl(t,a)):(pl(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&sl(t),pl(t),ll(t,i,0,0,n)),null;case 27:if(J(t),n=K.current,i=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&sl(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return pl(t),null}e=H.current,wi(t)?gi(t):(e=Md(i,r,n),t.stateNode=e,sl(t))}return pl(t),null;case 5:if(J(t),i=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&sl(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return pl(t),null}if(a=H.current,wi(t))gi(t);else{var s=yd(K.current);switch(a){case 1:a=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:a=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":a=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":a=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":(a=s.createElement("div")).innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a="string"===typeof r.is?s.createElement("select",{is:r.is}):s.createElement("select"),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a="string"===typeof r.is?s.createElement(i,{is:r.is}):s.createElement(i)}}a[Ue]=t,a[Ve]=r;e:for(s=t.child;null!==s;){if(5===s.tag||6===s.tag)a.appendChild(s.stateNode);else if(4!==s.tag&&27!==s.tag&&null!==s.child){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;null===s.sibling;){if(null===s.return||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=a;e:switch(pd(a,i,r),i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&sl(t)}}return pl(t),ll(t,t.type,null===e||e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&sl(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=K.current,wi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(i=ci))switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Ue]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||ud(e.nodeValue,n)))||mi(t,!0)}else(e=yd(e).createTextNode(r))[Ue]=t,t.stateNode=e}return pl(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=wi(t),null!==n){if(null===e){if(!r)throw Error(o(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(o(557));e[Ue]=t}else bi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;pl(t),e=!1}else n=vi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(Ma(t),t):(Ma(t),null);if(0!==(128&t.flags))throw Error(o(558))}return pl(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=wi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[Ue]=t}else bi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;pl(t),i=!1}else i=vi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return 256&t.flags?(Ma(t),t):(Ma(t),null)}return Ma(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(i=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(i=r.alternate.memoizedState.cachePool.pool),a=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ul(t,t.updateQueue),pl(t),null);case 4:return Q(),null===e&&ed(t.stateNode.containerInfo),pl(t),null;case 10:return ji(t.type),pl(t),null;case 19:if(F($a),null===(r=t.memoizedState))return pl(t),null;if(i=0!==(128&t.flags),null===(a=r.rendering))if(i)dl(r,!1);else{if(0!==Sc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(a=Fa(e))){for(t.flags|=128,dl(r,!1),e=a.updateQueue,t.updateQueue=e,ul(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Ur(n,e),n=n.sibling;return U($a,1&$a.current|2),di&&ii(t,r.treeForkCount),t.child}e=e.sibling}null!==r.tail&&le()>Dc&&(t.flags|=128,i=!0,dl(r,!1),t.lanes=4194304)}else{if(!i)if(null!==(e=Fa(a))){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ul(t,e),dl(r,!0),null===r.tail&&"hidden"===r.tailMode&&!a.alternate&&!di)return pl(t),null}else 2*le()-r.renderingStartTime>Dc&&536870912!==n&&(t.flags|=128,i=!0,dl(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(null!==(e=r.last)?e.sibling=a:t.child=a,r.last=a)}return null!==r.tail?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=le(),e.sibling=null,n=$a.current,U($a,i?1&n|2:1&n),di&&ii(t,r.treeForkCount),e):(pl(t),null);case 22:case 23:return Ma(t),Aa(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(pl(t),6&t.subtreeFlags&&(t.flags|=8192)):pl(t),null!==(n=t.updateQueue)&&ul(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&F(Gi),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ji(Mi),pl(t),null;case 25:case 30:return null}throw Error(o(156,t.tag))}function ml(e,t){switch(si(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ji(Mi),Q(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return J(t),null;case 31:if(null!==t.memoizedState){if(Ma(t),null===t.alternate)throw Error(o(340));bi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(Ma(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));bi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return F($a),null;case 4:return Q(),null;case 10:return ji(t.type),null;case 22:case 23:return Ma(t),Aa(),null!==e&&F(Gi),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return ji(Mi),null;default:return null}}function gl(e,t){switch(si(t),t.tag){case 3:ji(Mi),Q();break;case 26:case 27:case 5:J(t);break;case 4:Q();break;case 31:null!==t.memoizedState&&Ma(t);break;case 13:Ma(t);break;case 19:F($a);break;case 10:ji(t.type);break;case 22:case 23:Ma(t),Aa(),null!==e&&F(Gi);break;case 24:ji(Mi)}}function yl(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(s){Su(t,t.return,s)}}function wl(e,t,n){try{var r=t.updateQueue,i=null!==r?r.lastEffect:null;if(null!==i){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(void 0!==s){o.destroy=void 0,i=t;var l=n,c=s;try{c()}catch(u){Su(i,l,u)}}}r=r.next}while(r!==a)}}catch(u){Su(t,t.return,u)}}function bl(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{ja(t,n)}catch(r){Su(e,e.return,r)}}}function vl(e,t,n){n.props=zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Su(e,t,r)}}function xl(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(i){Su(e,t,i)}}function kl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(i){Su(e,t,i)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(a){Su(e,t,a)}else n.current=null}function zl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){Su(e,e.return,i)}}function Sl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,a=null,s=null,l=null,c=null,u=null,d=null;for(f in n){var h=n[f];if(n.hasOwnProperty(f)&&null!=h)switch(f){case"checked":case"value":break;case"defaultValue":c=h;default:r.hasOwnProperty(f)||dd(e,t,f,null,r,h)}}for(var p in r){var f=r[p];if(h=n[p],r.hasOwnProperty(p)&&(null!=f||null!=h))switch(p){case"type":a=f;break;case"name":i=f;break;case"checked":u=f;break;case"defaultChecked":d=f;break;case"value":s=f;break;case"defaultValue":l=f;break;case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(o(137,t));break;default:f!==h&&dd(e,t,p,f,r,h)}}return void wt(e,s,l,c,u,d,a,i);case"select":for(a in f=s=l=p=null,n)if(c=n[a],n.hasOwnProperty(a)&&null!=c)switch(a){case"value":break;case"multiple":f=c;default:r.hasOwnProperty(a)||dd(e,t,a,null,r,c)}for(i in r)if(a=r[i],c=n[i],r.hasOwnProperty(i)&&(null!=a||null!=c))switch(i){case"value":p=a;break;case"defaultValue":l=a;break;case"multiple":s=a;default:a!==c&&dd(e,t,i,a,r,c)}return t=l,n=s,r=f,void(null!=p?xt(e,!!n,p,!1):!!r!==!!n&&(null!=t?xt(e,!!n,t,!0):xt(e,!!n,n?[]:"",!1)));case"textarea":for(l in f=p=null,n)if(i=n[l],n.hasOwnProperty(l)&&null!=i&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:dd(e,t,l,null,r,i)}for(s in r)if(i=r[s],a=n[s],r.hasOwnProperty(s)&&(null!=i||null!=a))switch(s){case"value":p=i;break;case"defaultValue":f=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(o(91));break;default:i!==a&&dd(e,t,s,i,r,a)}return void kt(e,p,f);case"option":for(var m in n)if(p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else dd(e,t,m,null,r,p);for(c in r)if(p=r[c],f=n[c],r.hasOwnProperty(c)&&p!==f&&(null!=p||null!=f))if("selected"===c)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else dd(e,t,c,p,r,f);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g)&&dd(e,t,g,null,r,p);for(u in r)if(p=r[u],f=n[u],r.hasOwnProperty(u)&&p!==f&&(null!=p||null!=f))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(o(137,t));break;default:dd(e,t,u,p,r,f)}return;default:if(Tt(t)){for(var y in n)p=n[y],n.hasOwnProperty(y)&&void 0!==p&&!r.hasOwnProperty(y)&&hd(e,t,y,void 0,r,p);for(d in r)p=r[d],f=n[d],!r.hasOwnProperty(d)||p===f||void 0===p&&void 0===f||hd(e,t,d,p,r,f);return}}for(var w in n)p=n[w],n.hasOwnProperty(w)&&null!=p&&!r.hasOwnProperty(w)&&dd(e,t,w,null,r,p);for(h in r)p=r[h],f=n[h],!r.hasOwnProperty(h)||p===f||null==p&&null==f||dd(e,t,h,p,r,f)}(r,e.type,n,t),r[Ve]=t}catch(i){Su(e,e.return,i)}}function El(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&_d(e.type)||4===e.tag}function jl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||El(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&_d(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function _l(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Pt));else if(4!==r&&(27===r&&_d(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(_l(e,t,n),e=e.sibling;null!==e;)_l(e,t,n),e=e.sibling}function Tl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&_d(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(Tl(e,t,n),e=e.sibling;null!==e;)Tl(e,t,n),e=e.sibling}function Cl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);pd(t,r,n),t[Ue]=e,t[Ve]=n}catch(a){Su(e,e.return,a)}}var Il=!1,Al=!1,Pl=!1,Rl="function"===typeof WeakSet?WeakSet:Set,Nl=null;function Dl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ql(e,n),4&r&&yl(5,n);break;case 1:if(Ql(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){Su(n,n.return,o)}else{var i=zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Su(n,n.return,s)}}64&r&&bl(n),512&r&&xl(n,n.return);break;case 3:if(Ql(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{ja(e,t)}catch(o){Su(n,n.return,o)}}break;case 27:null===t&&4&r&&Cl(n);case 26:case 5:Ql(e,n),null===t&&4&r&&zl(n),512&r&&xl(n,n.return);break;case 12:Ql(e,n);break;case 31:Ql(e,n),4&r&&Ul(e,n);break;case 13:Ql(e,n),4&r&&Vl(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=Tu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||Il)){t=null!==t&&null!==t.memoizedState||Al,i=Il;var a=Al;Il=r,(Al=t)&&!a?Jl(e,n,0!==(8772&n.subtreeFlags)):Ql(e,n),Il=i,Al=a}break;case 30:break;default:Ql(e,n)}}function Ol(e){var t=e.alternate;null!==t&&(e.alternate=null,Ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Qe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ll=null,Ml=!1;function $l(e,t,n){for(n=n.child;null!==n;)Fl(e,t,n),n=n.sibling}function Fl(e,t,n){if(we&&"function"===typeof we.onCommitFiberUnmount)try{we.onCommitFiberUnmount(ye,n)}catch(a){}switch(n.tag){case 26:Al||kl(n,t),$l(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:Al||kl(n,t);var r=Ll,i=Ml;_d(n.type)&&(Ll=n.stateNode,Ml=!1),$l(e,t,n),$d(n.stateNode),Ll=r,Ml=i;break;case 5:Al||kl(n,t);case 6:if(r=Ll,i=Ml,Ll=null,$l(e,t,n),Ml=i,null!==(Ll=r))if(Ml)try{(9===Ll.nodeType?Ll.body:"HTML"===Ll.nodeName?Ll.ownerDocument.body:Ll).removeChild(n.stateNode)}catch(o){Su(n,t,o)}else try{Ll.removeChild(n.stateNode)}catch(o){Su(n,t,o)}break;case 18:null!==Ll&&(Ml?(Td(9===(e=Ll).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Wh(e)):Td(Ll,n.stateNode));break;case 4:r=Ll,i=Ml,Ll=n.stateNode.containerInfo,Ml=!0,$l(e,t,n),Ll=r,Ml=i;break;case 0:case 11:case 14:case 15:wl(2,n,t),Al||wl(4,n,t),$l(e,t,n);break;case 1:Al||(kl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&vl(n,t,r)),$l(e,t,n);break;case 21:$l(e,t,n);break;case 22:Al=(r=Al)||null!==n.memoizedState,$l(e,t,n),Al=r;break;default:$l(e,t,n)}}function Ul(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{Wh(e)}catch(n){Su(t,t.return,n)}}}function Vl(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Wh(e)}catch(n){Su(t,t.return,n)}}function Bl(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Rl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Rl),t;default:throw Error(o(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Cu.bind(null,e,t);t.then(r,r)}})}function Hl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r],a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:if(_d(l.type)){Ll=l.stateNode,Ml=!1;break e}break;case 5:Ll=l.stateNode,Ml=!1;break e;case 3:case 4:Ll=l.stateNode.containerInfo,Ml=!0;break e}l=l.return}if(null===Ll)throw Error(o(160));Fl(a,s,i),Ll=null,Ml=!1,null!==(a=i.alternate)&&(a.return=null),i.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)Kl(t,e),t=t.sibling}var Wl=null;function Kl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hl(t,e),Gl(e),4&r&&(wl(3,e,e.return),yl(3,e),wl(5,e,e.return));break;case 1:Hl(t,e),Gl(e),512&r&&(Al||null===n||kl(n,n.return)),64&r&&Il&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var i=Wl;if(Hl(t,e),Gl(e),512&r&&(Al||null===n||kl(n,n.return)),4&r){var a=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":(!(a=i.getElementsByTagName("title")[0])||a[qe]||a[Ue]||"http://www.w3.org/2000/svg"===a.namespaceURI||a.hasAttribute("itemprop"))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector("head > title"))),pd(a,r,n),a[Ue]=e,et(a),r=a;break e;case"link":var s=rh("link","href",i).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((a=s[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&a.getAttribute("rel")===(null==n.rel?null:n.rel)&&a.getAttribute("title")===(null==n.title?null:n.title)&&a.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}pd(a=i.createElement(r),r,n),i.head.appendChild(a);break;case"meta":if(s=rh("meta","content",i).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((a=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&a.getAttribute("name")===(null==n.name?null:n.name)&&a.getAttribute("property")===(null==n.property?null:n.property)&&a.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&a.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}pd(a=i.createElement(r),r,n),i.head.appendChild(a);break;default:throw Error(o(468,r))}a[Ue]=e,et(a),r=a}e.stateNode=r}else ih(i,e.type,e.stateNode);else e.stateNode=Xd(i,r,e.memoizedProps);else a!==r?(null===a?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):a.count--,null===r?ih(i,e.type,e.stateNode):Xd(i,r,e.memoizedProps)):null===r&&null!==e.stateNode&&Sl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Hl(t,e),Gl(e),512&r&&(Al||null===n||kl(n,n.return)),null!==n&&4&r&&Sl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Hl(t,e),Gl(e),512&r&&(Al||null===n||kl(n,n.return)),32&e.flags){i=e.stateNode;try{St(i,"")}catch(m){Su(e,e.return,m)}}4&r&&null!=e.stateNode&&Sl(e,i=e.memoizedProps,null!==n?n.memoizedProps:i),1024&r&&(Pl=!0);break;case 6:if(Hl(t,e),Gl(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(m){Su(e,e.return,m)}}break;case 3:if(nh=null,i=Wl,Wl=Vd(t.containerInfo),Hl(t,e),Wl=i,Gl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Wh(t.containerInfo)}catch(m){Su(e,e.return,m)}Pl&&(Pl=!1,ql(e));break;case 4:r=Wl,Wl=Vd(e.stateNode.containerInfo),Hl(t,e),Gl(e),Wl=r;break;case 12:default:Hl(t,e),Gl(e);break;case 31:case 19:Hl(t,e),Gl(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Bl(e,r)));break;case 13:Hl(t,e),Gl(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(Rc=le()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Bl(e,r)));break;case 22:i=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=Il,d=Al;if(Il=u||i,Al=d||c,Hl(t,e),Al=d,Il=u,Gl(e),8192&r)e:for(t=e.stateNode,t._visibility=i?-2&t._visibility:1|t._visibility,i&&(null===n||c||Il||Al||Yl(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(a=c.stateNode,i)"function"===typeof(s=a.style).setProperty?s.setProperty("display","none","important"):s.display="none";else{l=c.stateNode;var h=c.memoizedProps.style,p=void 0!==h&&null!==h&&h.hasOwnProperty("display")?h.display:null;l.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(m){Su(c,c.return,m)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(m){Su(c,c.return,m)}}}else if(18===t.tag){if(null===n){c=t;try{var f=c.stateNode;i?Cd(f,!0):Cd(c.stateNode,!1)}catch(m){Su(c,c.return,m)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Bl(e,n))));case 30:case 21:}}function Gl(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(El(r)){n=r;break}r=r.return}if(null==n)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode;Tl(e,jl(e),i);break;case 5:var a=n.stateNode;32&n.flags&&(St(a,""),n.flags&=-33),Tl(e,jl(e),a);break;case 3:case 4:var s=n.stateNode.containerInfo;_l(e,jl(e),s);break;default:throw Error(o(161))}}catch(l){Su(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ql(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;ql(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Ql(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Dl(e,t.alternate,t),t=t.sibling}function Yl(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:wl(4,t,t.return),Yl(t);break;case 1:kl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&vl(t,t.return,n),Yl(t);break;case 27:$d(t.stateNode);case 26:case 5:kl(t,t.return),Yl(t);break;case 22:null===t.memoizedState&&Yl(t);break;default:Yl(t)}e=e.sibling}}function Jl(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Jl(i,a,n),yl(4,a);break;case 1:if(Jl(i,a,n),"function"===typeof(i=(r=a).stateNode).componentDidMount)try{i.componentDidMount()}catch(c){Su(r,r.return,c)}if(null!==(i=(r=a).updateQueue)){var s=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(null!==l)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Ea(l[i],s)}catch(c){Su(r,r.return,c)}}n&&64&o&&bl(a),xl(a,a.return);break;case 27:Cl(a);case 26:case 5:Jl(i,a,n),n&&null===r&&4&o&&zl(a),xl(a,a.return);break;case 12:Jl(i,a,n);break;case 31:Jl(i,a,n),n&&4&o&&Ul(i,a);break;case 13:Jl(i,a,n),n&&4&o&&Vl(i,a);break;case 22:null===a.memoizedState&&Jl(i,a,n),xl(a,a.return);break;case 30:break;default:Jl(i,a,n)}t=t.sibling}}function Xl(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Fi(n))}function Zl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Fi(e))}function ec(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)tc(e,t,n,r),t=t.sibling}function tc(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:ec(e,t,n,r),2048&i&&yl(9,t);break;case 1:case 31:case 13:default:ec(e,t,n,r);break;case 3:ec(e,t,n,r),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Fi(e)));break;case 12:if(2048&i){ec(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;"function"===typeof s&&s(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){Su(t,t.return,l)}}else ec(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,null!==t.memoizedState?2&a._visibility?ec(e,t,n,r):rc(e,t):2&a._visibility?ec(e,t,n,r):(a._visibility|=2,nc(e,t,n,r,0!==(10256&t.subtreeFlags)||!1)),2048&i&&Xl(o,t);break;case 24:ec(e,t,n,r),2048&i&&Zl(t.alternate,t)}}function nc(e,t,n,r,i){for(i=i&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var a=e,o=t,s=n,l=r,c=o.flags;switch(o.tag){case 0:case 11:case 15:nc(a,o,s,l,i),yl(8,o);break;case 23:break;case 22:var u=o.stateNode;null!==o.memoizedState?2&u._visibility?nc(a,o,s,l,i):rc(a,o):(u._visibility|=2,nc(a,o,s,l,i)),i&&2048&c&&Xl(o.alternate,o);break;case 24:nc(a,o,s,l,i),i&&2048&c&&Zl(o.alternate,o);break;default:nc(a,o,s,l,i)}t=t.sibling}}function rc(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:rc(n,r),2048&i&&Xl(r.alternate,r);break;case 24:rc(n,r),2048&i&&Zl(r.alternate,r);break;default:rc(n,r)}t=t.sibling}}var ic=8192;function ac(e,t,n){if(e.subtreeFlags&ic)for(e=e.child;null!==e;)oc(e,t,n),e=e.sibling}function oc(e,t,n){switch(e.tag){case 26:ac(e,t,n),e.flags&ic&&null!==e.memoizedState&&function(e,t,n,r){if("stylesheet"===n.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var i=Gd(r.href),a=t.querySelector(qd(i));if(a)return null!==(t=a._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=sh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,void et(a);a=t.ownerDocument||t,r=Qd(r),(i=Fd.get(i))&&eh(r,i),et(a=a.createElement("link"));var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),pd(a,"link",r),n.instance=a}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=sh.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,Wl,e.memoizedState,e.memoizedProps);break;case 5:default:ac(e,t,n);break;case 3:case 4:var r=Wl;Wl=Vd(e.stateNode.containerInfo),ac(e,t,n),Wl=r;break;case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=ic,ic=16777216,ac(e,t,n),ic=r):ac(e,t,n))}}function sc(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function lc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Nl=r,dc(r,e)}sc(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)cc(e),e=e.sibling}function cc(e){switch(e.tag){case 0:case 11:case 15:lc(e),2048&e.flags&&wl(9,e,e.return);break;case 3:case 12:default:lc(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,uc(e)):lc(e)}}function uc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Nl=r,dc(r,e)}sc(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:wl(8,t,t.return),uc(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,uc(t));break;default:uc(t)}e=e.sibling}}function dc(e,t){for(;null!==Nl;){var n=Nl;switch(n.tag){case 0:case 11:case 15:wl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Fi(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Nl=r;else e:for(n=e;null!==Nl;){var i=(r=Nl).sibling,a=r.return;if(Ol(r),r===n){Nl=null;break e}if(null!==i){i.return=a,Nl=i;break e}Nl=a}}}var hc={getCacheForType:function(e){var t=Pi(Mi),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Pi(Mi).controller.signal}},pc="function"===typeof WeakMap?WeakMap:Map,fc=0,mc=null,gc=null,yc=0,wc=0,bc=null,vc=!1,xc=!1,kc=!1,zc=0,Sc=0,Ec=0,jc=0,_c=0,Tc=0,Cc=0,Ic=null,Ac=null,Pc=!1,Rc=0,Nc=0,Dc=1/0,Oc=null,Lc=null,Mc=0,$c=null,Fc=null,Uc=0,Vc=0,Bc=null,Hc=null,Wc=0,Kc=null;function Gc(){return 0!==(2&fc)&&0!==yc?yc&-yc:null!==N.T?Bu():Me()}function qc(){if(0===Tc)if(0===(536870912&yc)||di){var e=Se;0===(3932160&(Se<<=1))&&(Se=262144),Tc=e}else Tc=536870912;return null!==(e=Pa.current)&&(e.flags|=32),Tc}function Qc(e,t,n){(e!==mc||2!==wc&&9!==wc)&&null===e.cancelPendingCommit||(nu(e,0),Zc(e,yc,Tc,!1)),Pe(e,n),0!==(2&fc)&&e===mc||(e===mc&&(0===(2&fc)&&(jc|=n),4===Sc&&Zc(e,yc,Tc,!1)),Ou(e))}function Yc(e,t,n){if(0!==(6&fc))throw Error(o(327));for(var r=!n&&0===(127&t)&&0===(t&e.expiredLanes)||Te(e,t),i=r?function(e,t){var n=fc;fc|=2;var r=au(),i=ou();mc!==e||yc!==t?(Oc=null,Dc=le()+500,nu(e,t)):xc=Te(e,t);e:for(;;)try{if(0!==wc&&null!==gc){t=gc;var a=bc;t:switch(wc){case 1:wc=0,bc=null,pu(e,t,a,1);break;case 2:case 9:if(ta(a)){wc=0,bc=null,hu(t);break}t=function(){2!==wc&&9!==wc||mc!==e||(wc=7),Ou(e)},a.then(t,t);break e;case 3:wc=7;break e;case 4:wc=5;break e;case 7:ta(a)?(wc=0,bc=null,hu(t)):(wc=0,bc=null,pu(e,t,a,7));break;case 5:var s=null;switch(gc.tag){case 26:s=gc.memoizedState;case 5:case 27:var l=gc;if(s?ah(s):l.stateNode.complete){wc=0,bc=null;var c=l.sibling;if(null!==c)gc=c;else{var u=l.return;null!==u?(gc=u,fu(u)):gc=null}break t}}wc=0,bc=null,pu(e,t,a,5);break;case 6:wc=0,bc=null,pu(e,t,a,6);break;case 8:tu(),Sc=6;break e;default:throw Error(o(462))}}uu();break}catch(d){ru(e,d)}return Si=zi=null,N.H=r,N.A=i,fc=n,null!==gc?0:(mc=null,yc=0,Ir(),Sc)}(e,t):lu(e,t,!0),a=r;;){if(0===i){xc&&!r&&Zc(e,t,0,!1);break}if(n=e.current.alternate,!a||Xc(n)){if(2===i){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;i=Ic;var c=l.current.memoizedState.isDehydrated;if(c&&(nu(l,s).flags|=256),2!==(s=lu(l,s,!1))){if(kc&&!c){l.errorRecoveryDisabledLanes|=a,jc|=a,i=4;break e}a=Ac,Ac=i,null!==a&&(null===Ac?Ac=a:Ac.push.apply(Ac,a))}i=s}if(a=!1,2!==i)continue}}if(1===i){nu(e,0),Zc(e,t,0,!0);break}e:{switch(r=e,a=i){case 0:case 1:throw Error(o(345));case 4:if((4194048&t)!==t)break;case 6:Zc(r,t,Tc,!vc);break e;case 2:Ac=null;break;case 3:case 5:break;default:throw Error(o(329))}if((62914560&t)===t&&10<(i=Rc+300-le())){if(Zc(r,t,Tc,!vc),0!==_e(r,0,!0))break e;Uc=t,r.timeoutHandle=kd(Jc.bind(null,r,n,Ac,Oc,Pc,t,Tc,jc,Cc,vc,a,"Throttled",-0,0),i)}else Jc(r,n,Ac,Oc,Pc,t,Tc,jc,Cc,vc,a,null,-0,0)}break}i=lu(e,t,!1),a=!1}Ou(e)}function Jc(e,t,n,r,i,a,o,s,l,c,u,d,h,p){if(e.timeoutHandle=-1,8192&(d=t.subtreeFlags)||16785408===(16785408&d)){oc(t,a,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pt});var f=(62914560&a)===a?Rc-le():(4194048&a)===a?Nc-le():0;if(f=function(e,t){return e.stylesheets&&0===e.count&&ch(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&0===oh&&(oh=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&fd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var l=n[r],c=l.startTime;if(c>s)break;var u=l.transferSize,d=l.initiatorType;u&&fd(d)&&(o+=u*((l=l.responseEnd)<s?1:(s-c)/(l-c)))}if(--r,t+=8*(a+o)/(i.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,"number"===typeof e)?e:5}());var i=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>oh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}(d,f),null!==f)return Uc=a,e.cancelPendingCommit=f(gu.bind(null,e,t,a,n,r,i,o,s,l,u,d,null,h,p)),void Zc(e,a,o,!c)}gu(e,t,a,n,r,i,o,s,l)}function Xc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Xn(a(),i))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zc(e,t,n,r){t&=~_c,t&=~jc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ve(i),o=1<<a;r[a]=-1,i&=~o}0!==n&&Re(e,n,t)}function eu(){return 0!==(6&fc)||(Lu(0,!1),!1)}function tu(){if(null!==gc){if(0===wc)var e=gc.return;else Si=zi=null,oo(e=gc),sa=null,la=0,e=gc;for(;null!==e;)gl(e.alternate,e),e=e.return;gc=null}}function nu(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,zd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Uc=0,tu(),mc=e,gc=n=Fr(e.current,null),yc=t,wc=0,bc=null,vc=!1,xc=Te(e,t),kc=!1,Cc=Tc=_c=jc=Ec=Sc=0,Ac=Ic=null,Pc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var i=31-ve(r),a=1<<i;t|=e[i],r&=~a}return zc=t,Ir(),n}function ru(e,t){Va=null,N.H=ms,t===Ji||t===Zi?(t=aa(),wc=3):t===Xi?(t=aa(),wc=4):wc=t===Ps?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,bc=t,null===gc&&(Sc=1,_s(e,qr(t,e.current)))}function iu(){var e=Pa.current;return null===e||((4194048&yc)===yc?null===Ra:((62914560&yc)===yc||0!==(536870912&yc))&&e===Ra)}function au(){var e=N.H;return N.H=ms,null===e?ms:e}function ou(){var e=N.A;return N.A=hc,e}function su(){Sc=4,vc||(4194048&yc)!==yc&&null!==Pa.current||(xc=!0),0===(134217727&Ec)&&0===(134217727&jc)||null===mc||Zc(mc,yc,Tc,!1)}function lu(e,t,n){var r=fc;fc|=2;var i=au(),a=ou();mc===e&&yc===t||(Oc=null,nu(e,t)),t=!1;var o=Sc;e:for(;;)try{if(0!==wc&&null!==gc){var s=gc,l=bc;switch(wc){case 8:tu(),o=6;break e;case 3:case 2:case 9:case 6:null===Pa.current&&(t=!0);var c=wc;if(wc=0,bc=null,pu(e,s,l,c),n&&xc){o=0;break e}break;default:c=wc,wc=0,bc=null,pu(e,s,l,c)}}cu(),o=Sc;break}catch(u){ru(e,u)}return t&&e.shellSuspendCounter++,Si=zi=null,fc=r,N.H=i,N.A=a,null===gc&&(mc=null,yc=0,Ir()),o}function cu(){for(;null!==gc;)du(gc)}function uu(){for(;null!==gc&&!oe();)du(gc)}function du(e){var t=ol(e.alternate,e,zc);e.memoizedProps=e.pendingProps,null===t?fu(e):gc=t}function hu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ws(n,t,t.pendingProps,t.type,void 0,yc);break;case 11:t=Ws(n,t,t.pendingProps,t.type.render,t.ref,yc);break;case 5:oo(t);default:gl(n,t),t=ol(n,t=gc=Ur(t,zc),zc)}e.memoizedProps=e.pendingProps,null===t?fu(e):gc=t}function pu(e,t,n,r){Si=zi=null,oo(t),sa=null,la=0;var i=t.return;try{if(function(e,t,n,r,i){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Ci(t,n,i,!0),null!==(n=Pa.current)){switch(n.tag){case 31:case 13:return null===Ra?su():null===n.alternate&&0===Sc&&(Sc=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ea?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),Eu(e,r,i)),!1;case 22:return n.flags|=65536,r===ea?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),Eu(e,r,i)),!1}throw Error(o(435,n.tag))}return Eu(e,r,i),su(),!1}if(di)return null!==(t=Pa.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==fi&&xi(qr(e=Error(o(422),{cause:r}),n))):(r!==fi&&xi(qr(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,r=qr(r,n),xa(e,i=Cs(e.stateNode,r,i)),4!==Sc&&(Sc=2)),!1;var a=Error(o(520),{cause:r});if(a=qr(a,n),null===Ic?Ic=[a]:Ic.push(a),4!==Sc&&(Sc=2),null===t)return!0;r=qr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,xa(n,e=Cs(n.stateNode,r,e)),!1;case 1:if(t=n.type,a=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==a&&"function"===typeof a.componentDidCatch&&(null===Lc||!Lc.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,As(i=Is(i),e,n,r),xa(n,i),!1}n=n.return}while(null!==n);return!1}(e,i,t,n,yc))return Sc=1,_s(e,qr(n,e.current)),void(gc=null)}catch(a){if(null!==i)throw gc=i,a;return Sc=1,_s(e,qr(n,e.current)),void(gc=null)}32768&t.flags?(di||1===r?e=!0:xc||0!==(536870912&yc)?e=!1:(vc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=Pa.current)&&13===r.tag&&(r.flags|=16384))),mu(t,e)):fu(t)}function fu(e){var t=e;do{if(0!==(32768&t.flags))return void mu(t,vc);e=t.return;var n=fl(t.alternate,t,zc);if(null!==n)return void(gc=n);if(null!==(t=t.sibling))return void(gc=t);gc=t=e}while(null!==t);0===Sc&&(Sc=5)}function mu(e,t){do{var n=ml(e.alternate,e);if(null!==n)return n.flags&=32767,void(gc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(gc=e);gc=e=n}while(null!==e);Sc=6,gc=null}function gu(e,t,n,r,i,a,s,l,c){e.cancelPendingCommit=null;do{xu()}while(0!==Mc);if(0!==(6&fc))throw Error(o(327));if(null!==t){if(t===e.current)throw Error(o(177));if(a=t.lanes|t.childLanes,function(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ve(n),d=1<<u;s[u]=0,l[u]=-1;var h=c[u];if(null!==h)for(c[u]=null,u=0;u<h.length;u++){var p=h[u];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&Re(e,r,0),0!==a&&0===i&&0!==e.tag&&(e.suspendedLanes|=a&~(o&~t))}(e,n,a|=Cr,s,l,c),e===mc&&(gc=mc=null,yc=0),Fc=t,$c=e,Uc=n,Vc=a,Bc=i,Hc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,ie(he,function(){return ku(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=N.T,N.T=null,i=D.p,D.p=2,s=fc,fc|=4;try{!function(e,t){if(e=e.containerInfo,md=vh,ir(e=rr(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(g){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,h=e,p=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(l=s+i),h!==a||0!==r&&3!==h.nodeType||(c=s+r),3===h.nodeType&&(s+=h.nodeValue.length),null!==(f=h.firstChild);)p=h,h=f;for(;;){if(h===e)break t;if(p===n&&++u===i&&(l=s),p===a&&++d===r&&(c=s),null!==(f=h.nextSibling))break;p=(h=p).parentNode}h=f}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(gd={focusedElem:e,selectionRange:n},vh=!1,Nl=t;null!==Nl;)if(e=(t=Nl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Nl=e;else for(;null!==Nl;){switch(a=(t=Nl).alternate,e=t.flags,t.tag){case 0:if(0!==(4&e)&&null!==(e=null!==(e=t.updateQueue)?e.events:null))for(n=0;n<e.length;n++)(i=e[n]).ref.impl=i.nextImpl;break;case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==a){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var m=zs(n.type,i);e=r.getSnapshotBeforeUpdate(m,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(y){Su(n,n.return,y)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))Id(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Id(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,Nl=e;break}Nl=t.return}}(e,t)}finally{fc=s,D.p=i,N.T=r}}Mc=1,yu(),wu(),bu()}}function yu(){if(1===Mc){Mc=0;var e=$c,t=Fc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=N.T,N.T=null;var r=D.p;D.p=2;var i=fc;fc|=4;try{Kl(t,e);var a=gd,o=rr(e.containerInfo),s=a.focusedElem,l=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&nr(s.ownerDocument.documentElement,s)){if(null!==l&&ir(s)){var c=l.start,u=l.end;if(void 0===u&&(u=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),f=s.textContent.length,m=Math.min(l.start,f),g=void 0===l.end?m:Math.min(l.end,f);!p.extend&&m>g&&(o=g,g=m,m=o);var y=tr(s,m),w=tr(s,g);if(y&&w&&(1!==p.rangeCount||p.anchorNode!==y.node||p.anchorOffset!==y.offset||p.focusNode!==w.node||p.focusOffset!==w.offset)){var b=d.createRange();b.setStart(y.node,y.offset),p.removeAllRanges(),m>g?(p.addRange(b),p.extend(w.node,w.offset)):(b.setEnd(w.node,w.offset),p.addRange(b))}}}}for(d=[],p=s;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof s.focus&&s.focus(),s=0;s<d.length;s++){var v=d[s];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}vh=!!md,gd=md=null}finally{fc=i,D.p=r,N.T=n}}e.current=t,Mc=2}}function wu(){if(2===Mc){Mc=0;var e=$c,t=Fc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=N.T,N.T=null;var r=D.p;D.p=2;var i=fc;fc|=4;try{Dl(e,t.alternate,t)}finally{fc=i,D.p=r,N.T=n}}Mc=3}}function bu(){if(4===Mc||3===Mc){Mc=0,se();var e=$c,t=Fc,n=Uc,r=Hc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Mc=5:(Mc=0,Fc=$c=null,vu(e,e.pendingLanes));var i=e.pendingLanes;if(0===i&&(Lc=null),Le(n),t=t.stateNode,we&&"function"===typeof we.onCommitFiberRoot)try{we.onCommitFiberRoot(ye,t,void 0,128===(128&t.current.flags))}catch(l){}if(null!==r){t=N.T,i=D.p,D.p=2,N.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{N.T=t,D.p=i}}0!==(3&Uc)&&xu(),Ou(e),i=e.pendingLanes,0!==(261930&n)&&0!==(42&i)?e===Kc?Wc++:(Wc=0,Kc=e):Wc=0,Lu(0,!1)}}function vu(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Fi(t)))}function xu(){return yu(),wu(),bu(),ku()}function ku(){if(5!==Mc)return!1;var e=$c,t=Vc;Vc=0;var n=Le(Uc),r=N.T,i=D.p;try{D.p=32>n?32:n,N.T=null,n=Bc,Bc=null;var a=$c,s=Uc;if(Mc=0,Fc=$c=null,Uc=0,0!==(6&fc))throw Error(o(331));var l=fc;if(fc|=4,cc(a.current),tc(a,a.current,s,n),fc=l,Lu(0,!1),we&&"function"===typeof we.onPostCommitFiberRoot)try{we.onPostCommitFiberRoot(ye,a)}catch(c){}return!0}finally{D.p=i,N.T=r,vu(e,t)}}function zu(e,t,n){t=qr(n,t),null!==(e=ba(e,t=Cs(e.stateNode,t,2),2))&&(Pe(e,2),Ou(e))}function Su(e,t,n){if(3===e.tag)zu(e,e,n);else for(;null!==t;){if(3===t.tag){zu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Lc||!Lc.has(r))){e=qr(n,e),null!==(r=ba(t,n=Is(2),2))&&(As(n,r,t,e),Pe(r,2),Ou(r));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pc;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(kc=!0,i.add(n),e=ju.bind(null,e,t,n),t.then(e,e))}function ju(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,mc===e&&(yc&n)===n&&(4===Sc||3===Sc&&(62914560&yc)===yc&&300>le()-Rc?0===(2&fc)&&nu(e,0):_c|=n,Cc===yc&&(Cc=0)),Ou(e)}function _u(e,t){0===t&&(t=Ie()),null!==(e=Rr(e,t))&&(Pe(e,t),Ou(e))}function Tu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),_u(e,n)}function Cu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),_u(e,n)}var Iu=null,Au=null,Pu=!1,Ru=!1,Nu=!1,Du=0;function Ou(e){e!==Au&&null===e.next&&(null===Au?Iu=Au=e:Au=Au.next=e),Ru=!0,Pu||(Pu=!0,Ed(function(){0!==(6&fc)?ie(ue,Mu):$u()}))}function Lu(e,t){if(!Nu&&Ru){Nu=!0;do{for(var n=!1,r=Iu;null!==r;){if(!t)if(0!==e){var i=r.pendingLanes;if(0===i)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ve(42|e)+1)-1,a=201326741&(a&=i&~(o&~s))?201326741&a|1:a?2|a:0}0!==a&&(n=!0,Vu(r,a))}else a=yc,0===(3&(a=_e(r,r===mc?a:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||Te(r,a)||(n=!0,Vu(r,a));r=r.next}}while(n);Nu=!1}}function Mu(){$u()}function $u(){Ru=Pu=!1;var e=0;0!==Du&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==xd&&(xd=e,!0);return xd=null,!1}()&&(e=Du);for(var t=le(),n=null,r=Iu;null!==r;){var i=r.next,a=Fu(r,t);0===a?(r.next=null,null===n?Iu=i:n.next=i,null===i&&(Au=n)):(n=r,(0!==e||0!==(3&a))&&(Ru=!0)),r=i}0!==Mc&&5!==Mc||Lu(e,!1),0!==Du&&(Du=0)}function Fu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=-62914561&e.pendingLanes;0<a;){var o=31-ve(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=Ce(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}if(n=yc,n=_e(e,e===(t=mc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===wc||9===wc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ae(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||Te(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&ae(r),Le(n)){case 2:case 8:n=de;break;case 32:default:n=he;break;case 268435456:n=fe}return r=Uu.bind(null,e),n=ie(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ae(r),e.callbackPriority=2,e.callbackNode=null,2}function Uu(e,t){if(0!==Mc&&5!==Mc)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(xu()&&e.callbackNode!==n)return null;var r=yc;return 0===(r=_e(e,e===mc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Yc(e,r,t),Fu(e,le()),null!=e.callbackNode&&e.callbackNode===n?Uu.bind(null,e):null)}function Vu(e,t){if(xu())return null;Yc(e,t,!0)}function Bu(){if(0===Du){var e=Bi;0===e&&(e=ze,0===(261888&(ze<<=1))&&(ze=256)),Du=e}return Du}function Hu(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:At(""+e)}function Wu(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Ku=0;Ku<Sr.length;Ku++){var Gu=Sr[Ku];Er(Gu.toLowerCase(),"on"+(Gu[0].toUpperCase()+Gu.slice(1)))}Er(gr,"onAnimationEnd"),Er(yr,"onAnimationIteration"),Er(wr,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(br,"onTransitionRun"),Er(vr,"onTransitionStart"),Er(xr,"onTransitionCancel"),Er(kr,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qu));function Yu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(u){jr(u)}i.currentTarget=null,a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(u){jr(u)}i.currentTarget=null,a=l}}}}function Ju(e,t){var n=t[He];void 0===n&&(n=t[He]=new Set);var r=e+"__bubble";n.has(r)||(td(t,e,2,!1),n.add(r))}function Xu(e,t,n){var r=0;t&&(r|=4),td(n,e,r,t)}var Zu="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[Zu]){e[Zu]=!0,tt.forEach(function(t){"selectionchange"!==t&&(Qu.has(t)||Xu(t,!1,e),Xu(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Zu]||(t[Zu]=!0,Xu("selectionchange",!1,t))}}function td(e,t,n,r){switch(_h(t)){case 2:var i=xh;break;case 8:i=kh;break;default:i=zh}n=i.bind(null,t,n,e),i=void 0,!Vt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function nd(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i)break;if(4===o)for(o=r.return;null!==o;){var c=o.tag;if((3===c||4===c)&&o.stateNode.containerInfo===i)return;o=o.return}for(;null!==s;){if(null===(o=Ye(s)))return;if(5===(c=o.tag)||6===c||26===c||27===c){r=a=o;continue e}s=s.parentNode}}r=r.return}$t(function(){var r=a,i=Nt(n),o=[];e:{var s=zr.get(e);if(void 0!==s){var c=nn,u=e;switch(e){case"keypress":if(0===qt(n))break e;case"keydown":case"keyup":c=wn;break;case"focusin":u="focus",c=cn;break;case"focusout":u="blur",c=cn;break;case"beforeblur":case"afterblur":c=cn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=ln;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=vn;break;case gr:case yr:case wr:c=un;break;case kr:c=xn;break;case"scroll":case"scrollend":c=an;break;case"wheel":c=kn;break;case"copy":case"cut":case"paste":c=dn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=bn;break;case"toggle":case"beforetoggle":c=zn}var d=0!==(4&t),h=!d&&("scroll"===e||"scrollend"===e),p=d?null!==s?s+"Capture":null:s;d=[];for(var f,m=r;null!==m;){var g=m;if(f=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===f||null===p||null!=(g=Ft(m,p))&&d.push(rd(m,g,f)),h)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===Rt||!(u=n.relatedTarget||n.fromElement)||!Ye(u)&&!u[Be])&&(c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ye(u):null)&&(h=l(u),d=u.tag,u!==h||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=sn,g="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=bn,g="onPointerLeave",p="onPointerEnter",m="pointer"),h=null==c?s:Xe(c),f=null==u?s:Xe(u),(s=new d(g,m+"leave",c,n,i)).target=h,s.relatedTarget=f,g=null,Ye(i)===r&&((d=new d(p,m+"enter",u,n,i)).target=f,d.relatedTarget=h,g=d),h=g,c&&u)e:{for(d=ad,m=u,f=0,g=p=c;g;g=d(g))f++;g=0;for(var y=m;y;y=d(y))g++;for(;0<f-g;)p=d(p),f--;for(;0<g-f;)m=d(m),g--;for(;f--;){if(p===m||null!==m&&p===m.alternate){d=p;break e}p=d(p),m=d(m)}d=null}else d=null;null!==c&&od(o,s,c,d,!1),null!==u&&null!==h&&od(o,h,u,d,!0)}if("select"===(c=(s=r?Xe(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var w=Un;else if(Dn(s))if(Vn)w=Jn;else{w=Qn;var b=qn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&Tt(r.elementType)&&(w=Un):w=Yn;switch(w&&(w=w(e,r))?On(o,w,n,i):(b&&b(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&vt(s,"number",s.value)),b=r?Xe(r):window,e){case"focusin":(Dn(b)||"true"===b.contentEditable)&&(or=b,sr=r,lr=null);break;case"focusout":lr=sr=or=null;break;case"mousedown":cr=!0;break;case"contextmenu":case"mouseup":case"dragend":cr=!1,ur(o,n,i);break;case"selectionchange":if(ar)break;case"keydown":case"keyup":ur(o,n,i)}var v;if(En)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Rn?An(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Tn&&"ko"!==n.locale&&(Rn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Rn&&(v=Gt()):(Wt="value"in(Ht=i)?Ht.value:Ht.textContent,Rn=!0)),0<(b=id(r,x)).length&&(x=new hn(x,e,null,n,i),o.push({event:x,listeners:b}),v?x.data=v:null!==(v=Pn(n))&&(x.data=v))),(v=_n?function(e,t){switch(e){case"compositionend":return Pn(t);case"keypress":return 32!==t.which?null:(In=!0,Cn);case"textInput":return(e=t.data)===Cn&&In?null:e;default:return null}}(e,n):function(e,t){if(Rn)return"compositionend"===e||!En&&An(e,t)?(e=Gt(),Kt=Wt=Ht=null,Rn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=id(r,"onBeforeInput")).length&&(b=new hn("onBeforeInput","beforeinput",null,n,i),o.push({event:b,listeners:x}),b.data=v)),function(e,t,n,r,i){if("submit"===t&&n&&n.stateNode===i){var a=Hu((i[Ve]||null).action),o=r.submitter;o&&null!==(t=(t=o[Ve]||null)?Hu(t.formAction):o.getAttribute("formAction"))&&(a=t,o=null);var s=new nn("action","action",null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==Du){var e=o?Wu(i,o):new FormData(i);ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else"function"===typeof a&&(s.preventDefault(),e=o?Wu(i,o):new FormData(i),ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}(o,e,r,n,i)}Yu(o,t)})}function rd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function id(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;if(5!==(i=i.tag)&&26!==i&&27!==i||null===a||(null!=(i=Ft(e,n))&&r.unshift(rd(e,i,a)),null!=(i=Ft(e,t))&&r.push(rd(e,i,a))),3===e.tag)return r;e=e.return}return[]}function ad(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function od(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===c||(l=c,i?null!=(c=Ft(n,a))&&o.unshift(rd(n,c,l)):i||null!=(c=Ft(n,a))&&o.push(rd(n,c,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var sd=/\r\n?/g,ld=/\u0000|\uFFFD/g;function cd(e){return("string"===typeof e?e:""+e).replace(sd,"\n").replace(ld,"")}function ud(e,t){return t=cd(t),cd(e)===t}function dd(e,t,n,r,i,a){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||St(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&St(e,""+r);break;case"className":ct(e,"class",r);break;case"tabIndex":ct(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ct(e,n,r);break;case"style":_t(e,r,a);break;case"data":if("object"!==t){ct(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=At(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof a&&("formAction"===n?("input"!==t&&dd(e,t,"name",i.name,i,null),dd(e,t,"formEncType",i.formEncType,i,null),dd(e,t,"formMethod",i.formMethod,i,null),dd(e,t,"formTarget",i.formTarget,i,null)):(dd(e,t,"encType",i.encType,i,null),dd(e,t,"method",i.method,i,null),dd(e,t,"target",i.target,i,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=At(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Pt);break;case"onScroll":null!=r&&Ju("scroll",e);break;case"onScrollEnd":null!=r&&Ju("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=At(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Ju("beforetoggle",e),Ju("toggle",e),lt(e,"popover",r);break;case"xlinkActuate":ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ut(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ut(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ut(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ut(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":lt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&lt(e,n=Ct.get(n)||n,r)}}function hd(e,t,n,r,i,a){switch(n){case"style":_t(e,r,a);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?St(e,r):("number"===typeof r||"bigint"===typeof r)&&St(e,""+r);break;case"onScroll":null!=r&&Ju("scroll",e);break;case"onScrollEnd":null!=r&&Ju("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Pt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:nt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),"function"===typeof(a=null!=(a=e[Ve]||null)?a[n]:null)&&e.removeEventListener(t,a,i),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):lt(e,n,r):("function"!==typeof a&&null!==a&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i)))}}function pd(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ju("error",e),Ju("load",e);var r,i=!1,a=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:dd(e,t,r,s,n,null)}}return a&&dd(e,t,"srcSet",n.srcSet,n,null),void(i&&dd(e,t,"src",n.src,n,null));case"input":Ju("invalid",e);var l=r=s=a=null,c=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(null!=d)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:dd(e,t,i,d,n,null)}}return void bt(e,r,l,c,u,s,a,!1);case"select":for(a in Ju("invalid",e),i=s=r=null,n)if(n.hasOwnProperty(a)&&null!=(l=n[a]))switch(a){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:dd(e,t,a,l,n,null)}return t=r,n=s,e.multiple=!!i,void(null!=t?xt(e,!!i,t,!1):null!=n&&xt(e,!!i,n,!0));case"textarea":for(s in Ju("invalid",e),r=a=i=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":i=l;break;case"defaultValue":a=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(o(91));break;default:dd(e,t,s,l,n,null)}return void zt(e,i,a,r);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(i=n[c]))if("selected"===c)e.selected=i&&"function"!==typeof i&&"symbol"!==typeof i;else dd(e,t,c,i,n,null);return;case"dialog":Ju("beforetoggle",e),Ju("toggle",e),Ju("cancel",e),Ju("close",e);break;case"iframe":case"object":Ju("load",e);break;case"video":case"audio":for(i=0;i<qu.length;i++)Ju(qu[i],e);break;case"image":Ju("error",e),Ju("load",e);break;case"details":Ju("toggle",e);break;case"embed":case"source":case"link":Ju("error",e),Ju("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(i=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:dd(e,t,u,i,n,null)}return;default:if(Tt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(i=n[d])&&hd(e,t,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(i=n[l])&&dd(e,t,l,i,n,null))}function fd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var md=null,gd=null;function yd(e){return 9===e.nodeType?e:e.ownerDocument}function wd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bd(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function vd(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var xd=null;var kd="function"===typeof setTimeout?setTimeout:void 0,zd="function"===typeof clearTimeout?clearTimeout:void 0,Sd="function"===typeof Promise?Promise:void 0,Ed="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Sd?function(e){return Sd.resolve(null).then(e).catch(jd)}:kd;function jd(e){setTimeout(function(){throw e})}function _d(e){return"head"===e}function Td(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)||"/&"===n){if(0===r)return e.removeChild(i),void Wh(t);r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;else if("html"===n)$d(e.ownerDocument.documentElement);else if("head"===n){$d(n=e.ownerDocument.head);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[qe]||"SCRIPT"===s||"STYLE"===s||"LINK"===s&&"stylesheet"===a.rel.toLowerCase()||n.removeChild(a),a=o}}else"body"===n&&$d(e.ownerDocument.body);n=i}while(n);Wh(t)}function Cd(e,t){var n=e;e=0;do{var r=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=r}while(n)}function Id(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Id(n),Qe(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function Ad(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=Nd(e.nextSibling)))return null}return e}function Pd(e){return"$?"===e.data||"$~"===e.data}function Rd(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Nd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}var Dd=null;function Od(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return Nd(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function Ld(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Md(e,t,n){switch(t=yd(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}function $d(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Qe(e)}var Fd=new Map,Ud=new Set;function Vd(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Bd=D.d;D.d={f:function(){var e=Bd.f(),t=eu();return e||t},r:function(e){var t=Je(e);null!==t&&5===t.tag&&"form"===t.type?rs(t):Bd.r(e)},D:function(e){Bd.D(e),Wd("dns-prefetch",e,null)},C:function(e,t){Bd.C(e,t),Wd("preconnect",e,t)},L:function(e,t,n){Bd.L(e,t,n);var r=Hd;if(r&&e&&t){var i='link[rel="preload"][as="'+yt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(i+='[imagesrcset="'+yt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(i+='[imagesizes="'+yt(n.imageSizes)+'"]')):i+='[href="'+yt(e)+'"]';var a=i;switch(t){case"style":a=Gd(e);break;case"script":a=Yd(e)}Fd.has(a)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Fd.set(a,e),null!==r.querySelector(i)||"style"===t&&r.querySelector(qd(a))||"script"===t&&r.querySelector(Jd(a))||(pd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}},m:function(e,t){Bd.m(e,t);var n=Hd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+yt(r)+'"][href="'+yt(e)+'"]',a=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Yd(e)}if(!Fd.has(a)&&(e=p({rel:"modulepreload",href:e},t),Fd.set(a,e),null===n.querySelector(i))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Jd(a)))return}pd(r=n.createElement("link"),"link",e),et(r),n.head.appendChild(r)}}},X:function(e,t){Bd.X(e,t);var n=Hd;if(n&&e){var r=Ze(n).hoistableScripts,i=Yd(e),a=r.get(i);a||((a=n.querySelector(Jd(i)))||(e=p({src:e,async:!0},t),(t=Fd.get(i))&&th(e,t),et(a=n.createElement("script")),pd(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}},S:function(e,t,n){Bd.S(e,t,n);var r=Hd;if(r&&e){var i=Ze(r).hoistableStyles,a=Gd(e);t=t||"default";var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(qd(a)))s.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Fd.get(a))&&eh(e,n);var l=o=r.createElement("link");et(l),pd(l,"link",e),l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),l.addEventListener("load",function(){s.loading|=1}),l.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Zd(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(a,o)}}},M:function(e,t){Bd.M(e,t);var n=Hd;if(n&&e){var r=Ze(n).hoistableScripts,i=Yd(e),a=r.get(i);a||((a=n.querySelector(Jd(i)))||(e=p({src:e,async:!0,type:"module"},t),(t=Fd.get(i))&&th(e,t),et(a=n.createElement("script")),pd(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}}};var Hd="undefined"===typeof document?null:document;function Wd(e,t,n){var r=Hd;if(r&&"string"===typeof t&&t){var i=yt(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"===typeof n&&(i+='[crossorigin="'+n+'"]'),Ud.has(i)||(Ud.add(i),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(i)&&(pd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}}function Kd(e,t,n,r){var i,a,s,l,c=(c=K.current)?Vd(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Gd(n.href),(r=(n=Ze(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Gd(n.href);var u=Ze(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(qd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Fd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Fd.set(e,n),u||(i=c,a=e,s=n,l=d.state,i.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=i.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),pd(a,"link",s),et(a),i.head.appendChild(a))))),t&&null===r)throw Error(o(528,""));return d}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Yd(n),(r=(n=Ze(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Gd(e){return'href="'+yt(e)+'"'}function qd(e){return'link[rel="stylesheet"]['+e+"]"}function Qd(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Yd(e){return'[src="'+yt(e)+'"]'}function Jd(e){return"script[async]"+e}function Xd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+yt(n.href)+'"]');if(r)return t.instance=r,et(r),r;var i=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return et(r=(e.ownerDocument||e).createElement("style")),pd(r,"style",i),Zd(r,n.precedence,e),t.instance=r;case"stylesheet":i=Gd(n.href);var a=e.querySelector(qd(i));if(a)return t.state.loading|=4,t.instance=a,et(a),a;r=Qd(n),(i=Fd.get(i))&&eh(r,i),et(a=(e.ownerDocument||e).createElement("link"));var s=a;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),pd(a,"link",r),t.state.loading|=4,Zd(a,n.precedence,e),t.instance=a;case"script":return a=Yd(n.src),(i=e.querySelector(Jd(a)))?(t.instance=i,et(i),i):(r=n,(i=Fd.get(a))&&th(r=p({},n),i),et(i=(e=e.ownerDocument||e).createElement("script")),pd(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Zd(r,n.precedence,e));return t.instance}function Zd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function eh(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function th(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var nh=null;function rh(e,t,n){if(null===nh){var r=new Map,i=nh=new Map;i.set(n,r)}else(r=(i=nh).get(n))||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[qe]||a[Ue]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var o=a.getAttribute(t)||"";o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function ih(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function ah(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var oh=0;function sh(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)ch(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var lh=null;function ch(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,lh=new Map,t.forEach(uh,e),lh=null,sh.call(e))}function uh(e,t){if(!(4&t.state.loading)){var n=lh.get(e);if(n)var r=n.get(null);else{n=new Map,lh.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<i.length;a++){var o=i[a];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(i=t.instance).getAttribute("data-precedence"),(a=n.get(o)||r)===r&&n.set(null,i),n.set(o,i),this.count++,r=sh.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var dh={$$typeof:x,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function hh(e,t,n,r,i,a,o,s,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function ph(e,t,n,r,i,a,o,s,l,c,u,d){return e=new hh(e,t,n,o,l,c,u,d,s),t=1,!0===a&&(t|=24),a=Mr(3,null,null,t),e.current=a,a.stateNode=e,(t=$i()).refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},ga(a),e}function fh(e){return e?e=Or:Or}function mh(e,t,n,r,i,a){i=fh(i),null===r.context?r.context=i:r.pendingContext=i,(r=wa(t)).payload={element:n},null!==(a=void 0===a?null:a)&&(r.callback=a),null!==(n=ba(e,r,t))&&(Qc(n,0,t),va(n,e,t))}function gh(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function yh(e,t){gh(e,t),(e=e.alternate)&&gh(e,t)}function wh(e){if(13===e.tag||31===e.tag){var t=Rr(e,67108864);null!==t&&Qc(t,0,67108864),yh(e,67108864)}}function bh(e){if(13===e.tag||31===e.tag){var t=Gc(),n=Rr(e,t=Oe(t));null!==n&&Qc(n,0,t),yh(e,t)}}var vh=!0;function xh(e,t,n,r){var i=N.T;N.T=null;var a=D.p;try{D.p=2,zh(e,t,n,r)}finally{D.p=a,N.T=i}}function kh(e,t,n,r){var i=N.T;N.T=null;var a=D.p;try{D.p=8,zh(e,t,n,r)}finally{D.p=a,N.T=i}}function zh(e,t,n,r){if(vh){var i=Sh(r);if(null===i)nd(e,t,r,Eh,n),Oh(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Ch=Lh(Ch,e,t,n,r,i),!0;case"dragenter":return Ih=Lh(Ih,e,t,n,r,i),!0;case"mouseover":return Ah=Lh(Ah,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Ph.set(a,Lh(Ph.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Rh.set(a,Lh(Rh.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Oh(e,r),4&t&&-1<Dh.indexOf(e)){for(;null!==i;){var a=Je(i);if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var o=je(a.pendingLanes);if(0!==o){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var l=1<<31-ve(o);s.entanglements[1]|=l,o&=~l}Ou(a),0===(6&fc)&&(Dc=le()+500,Lu(0,!1))}}break;case 31:case 13:null!==(s=Rr(a,2))&&Qc(s,0,2),eu(),yh(a,2)}if(null===(a=Sh(r))&&nd(e,t,r,Eh,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else nd(e,t,r,null,n)}}function Sh(e){return jh(e=Nt(e))}var Eh=null;function jh(e){if(Eh=null,null!==(e=Ye(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(31===n){if(null!==(e=u(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Eh=e,null}function _h(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case ue:return 2;case de:return 8;case he:case pe:return 32;case fe:return 268435456;default:return 32}default:return 32}}var Th=!1,Ch=null,Ih=null,Ah=null,Ph=new Map,Rh=new Map,Nh=[],Dh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Oh(e,t){switch(e){case"focusin":case"focusout":Ch=null;break;case"dragenter":case"dragleave":Ih=null;break;case"mouseover":case"mouseout":Ah=null;break;case"pointerover":case"pointerout":Ph.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rh.delete(t.pointerId)}}function Lh(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=Je(t))&&wh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Mh(e){var t=Ye(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void $e(e.priority,function(){bh(n)})}else if(31===t){if(null!==(t=u(n)))return e.blockedOn=t,void $e(e.priority,function(){bh(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function $h(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sh(e.nativeEvent);if(null!==n)return null!==(t=Je(n))&&wh(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Rt=r,n.target.dispatchEvent(r),Rt=null,t.shift()}return!0}function Fh(e,t,n){$h(e)&&n.delete(t)}function Uh(){Th=!1,null!==Ch&&$h(Ch)&&(Ch=null),null!==Ih&&$h(Ih)&&(Ih=null),null!==Ah&&$h(Ah)&&(Ah=null),Ph.forEach(Fh),Rh.forEach(Fh)}function Vh(e,t){e.blockedOn===t&&(e.blockedOn=null,Th||(Th=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Uh)))}var Bh=null;function Hh(e){Bh!==e&&(Bh=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if("function"!==typeof r){if(null===jh(r||n))continue;break}var a=Je(n);null!==a&&(e.splice(t,3),t-=3,ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Wh(e){function t(t){return Vh(t,e)}null!==Ch&&Vh(Ch,e),null!==Ih&&Vh(Ih,e),null!==Ah&&Vh(Ah,e),Ph.forEach(t),Rh.forEach(t);for(var n=0;n<Nh.length;n++){var r=Nh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Nh.length&&null===(n=Nh[0]).blockedOn;)Mh(n),null===n.blockedOn&&Nh.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Ve]||null;if("function"===typeof a)o||Hh(n);else if(o){var s=null;if(a&&a.hasAttribute("formAction")){if(i=a,o=a[Ve]||null)s=o.formAction;else if(null!==jh(i))continue}else s=o.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),Hh(n)}}}function Kh(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==i&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var r=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==i&&(i(),i=null)}}}function Gh(e){this._internalRoot=e}function qh(e){this._internalRoot=e}qh.prototype.render=Gh.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));mh(t.current,Gc(),e,t,null,null)},qh.prototype.unmount=Gh.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;mh(e.current,2,null,e,null,null),eu(),t[Be]=null}},qh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Me();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nh.length&&0!==t&&t<Nh[n].priority;n++);Nh.splice(n,0,e),0===n&&Mh(e)}};var Qh=i.version;if("19.2.4"!==Qh)throw Error(o(527,Qh,"19.2.4"));D.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return d(i),e;if(a===r)return d(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?h(e):null)?null:e.stateNode};var Yh={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{ye=Jh.inject(Yh),we=Jh}catch(Zh){}}t.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,r="",i=Ss,a=Es,l=js;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(i=t.onUncaughtError),void 0!==t.onCaughtError&&(a=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError)),t=ph(e,1,!1,null,0,n,r,null,i,a,l,Kh),e[Be]=t.current,ed(e),new Gh(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var r=!1,i="",a=Ss,l=Es,c=js,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onUncaughtError&&(a=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.formState&&(u=n.formState)),(t=ph(e,1,!0,t,0,r,i,u,a,l,c,Kh)).context=fh(null),n=t.current,(i=wa(r=Oe(r=Gc()))).callback=null,ba(n,i,r),n=r,t.current.lanes=n,Pe(t,n),Ou(t),e[Be]=t.current,ed(e),new qh(t)},t.version="19.2.4"},672(e,t,n){var r=n(43);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(i(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=o.p;try{if(l.T=null,o.p=2,e)return e()}finally{l.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),i="string"===typeof t.integrity?t.integrity:void 0,a="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:a}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:a,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.2.4"},391(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)},799(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},288(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function w(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=w.prototype;var x=v.prototype=new b;x.constructor=v,g(x,w.prototype),x.isPureReactComponent=!0;var k=Array.isArray;function z(){}var S={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function j(e,t,r){var i=r.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==i?i:null,props:r}}function _(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function C(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function I(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,c,u=!1;if(null===e)u=!0;else switch(s){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case h:return I((u=e._init)(e._payload),t,i,a,o)}}if(u)return o=o(e),u=""===a?"."+C(e,0):a,k(o)?(i="",null!=u&&(i=u.replace(T,"$&/")+"/"),I(o,t,i,"",function(e){return e})):null!=o&&(_(o)&&(l=o,c=i+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(T,"$&/")+"/")+u,o=j(l.type,c,l.props)),t.push(o)),1;u=0;var d,p=""===a?".":a+":";if(k(e))for(var m=0;m<e.length;m++)u+=I(a=e[m],t,i,s=p+C(a,m),o);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=f&&d[f]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(a=e.next()).done;)u+=I(a=a.value,t,i,s=p+C(a,m++),o);else if("object"===s){if("function"===typeof e.then)return I(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(z,z):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,a,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function A(e,t,n){if(null==e)return e;var r=[],i=0;return I(e,r,"","",function(e){return t.call(n,e,i++)}),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},N={map:A,forEach:function(e,t,n){A(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=p,t.Children=N,t.Component=w,t.Fragment=i,t.Profiler=o,t.PureComponent=v,t.StrictMode=a,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=g({},e.props),i=e.key;if(null!=t)for(a in void 0!==t.key&&(i=""+t.key),t)!E.call(t,a)||"key"===a||"__self"===a||"__source"===a||"ref"===a&&void 0===t.ref||(r[a]=t[a]);var a=arguments.length-2;if(1===a)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return j(e.type,i,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,i={},a=null;if(null!=t)for(r in void 0!==t.key&&(a=""+t.key),t)E.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(i[r]=t[r]);var o=arguments.length-2;if(1===o)i.children=n;else if(1<o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return j(e,a,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;null!==i&&i(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(z,R)}catch(a){R(a)}finally{null!==t&&null!==n.types&&(t.types=n.types),S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return S.H.useEffect(e,t)},t.useEffectEvent=function(e){return S.H.useEffectEvent(e)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return S.H.useTransition()},t.version="19.2.4"},43(e,t,n){e.exports=n(288)},579(e,t,n){e.exports=n(799)},896(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>a(l,n))c<i&&0>a(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,h=null,p=3,f=!1,m=!1,g=!1,y=!1,w="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function k(e){if(g=!1,x(e),!m)if(null!==r(c))m=!0,S||(S=!0,z());else{var t=r(u);null!==t&&P(k,t.startTime-e)}}var z,S=!1,E=-1,j=5,_=-1;function T(){return!!y||!(t.unstable_now()-_<j)}function C(){if(y=!1,S){var e=t.unstable_now();_=e;var n=!0;try{e:{m=!1,g&&(g=!1,b(E),E=-1),f=!0;var a=p;try{t:{for(x(e),h=r(c);null!==h&&!(h.expirationTime>e&&T());){var o=h.callback;if("function"===typeof o){h.callback=null,p=h.priorityLevel;var s=o(h.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){h.callback=s,x(e),n=!0;break t}h===r(c)&&i(c),x(e)}else i(c);h=r(c)}if(null!==h)n=!0;else{var l=r(u);null!==l&&P(k,l.startTime-e),n=!1}}break e}finally{h=null,p=a,f=!1}n=void 0}}finally{n?z():S=!1}}}if("function"===typeof v)z=function(){v(C)};else if("undefined"!==typeof MessageChannel){var I=new MessageChannel,A=I.port2;I.port1.onmessage=C,z=function(){A.postMessage(null)}}else z=function(){w(C,0)};function P(e,n){E=w(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){y=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(b(E),E=-1):g=!0,P(k,a-o))):(e.sortIndex=s,n(c,e),m||f||(m=!0,S||(S=!0,z()))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853(e,t,n){e.exports=n(896)},217(e,t,n){e.exports=n.p+"static/media/pexels-dimkidama-15115560.04167beb6bd16a6e9fd4.jpg"},410(e,t,n){e.exports=n.p+"static/media/pexels-firmbee-com-22729701-6963740.a9a8b980823767df4886.jpg"},430(e,t,n){e.exports=n.p+"static/media/pexels-magnetme-3917414-5839461.06d3415285cbf1cc0bf1.jpg"},682(e,t,n){e.exports=n.p+"static/media/pexels-rdne-7310202.0cfb9c3eef397dd77e13.jpg"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;("object"==typeof s||"function"==typeof s)&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>o[e]=()=>r[e]);return o.default=()=>r,n.d(a,o),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.nc=void 0;var r=n(43),i=n.t(r,2),a=n(391),o="popstate";function s(e){return"object"===typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function l(){return m(function(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return h("",{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"===typeof t?t:p(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function h(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?f(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10),unstable_mask:i}}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function f(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function m(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,c="POP",u=null,p=f();function f(){return(l.state||{idx:null}).idx}function m(){c="POP";let e=f(),t=null==e?null:e-p;p=e,u&&u({action:c,location:w.location,delta:t})}function y(e){return g(e)}null==p&&(p=0,l.replaceState({...l.state,idx:p},""));let w={get action(){return c},get location(){return e(i,l)},listen(e){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(o,m),u=e,()=>{i.removeEventListener(o,m),u=null}},createHref:e=>t(i,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){c="PUSH";let r=s(e)?e:h(w.location,e,t);n&&n(r,e),p=f()+1;let o=d(r,p),m=w.createHref(r.unstable_mask||r);try{l.pushState(o,"",m)}catch(g){if(g instanceof DOMException&&"DataCloneError"===g.name)throw g;i.location.assign(m)}a&&u&&u({action:c,location:w.location,delta:1})},replace:function(e,t){c="REPLACE";let r=s(e)?e:h(w.location,e,t);n&&n(r,e),p=f();let i=d(r,p),o=w.createHref(r.unstable_mask||r);l.replaceState(i,"",o),a&&u&&u({action:c,location:w.location,delta:0})},go:e=>l.go(e)};return w}function g(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),c(n,"No window.location.(origin|href) available to create URL");let r="string"===typeof e?e:p(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}new WeakMap;function y(e,t){return w(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function w(e,t,n,r){let i=R(("string"===typeof t?f(t):t).pathname||"/",n);if(null==i)return null;let a=b(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=P(i);o=C(a[s],e,r)}return o}function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=function(e,a){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,s=arguments.length>3?arguments[3]:void 0,l={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};if(l.relativePath.startsWith("/")){if(!l.relativePath.startsWith(r)&&o)return;c(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length)}let u=F([r,l.relativePath]),d=n.concat(l);e.children&&e.children.length>0&&(c(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),b(e.children,t,d,u,o)),(null!=e.path||e.index)&&t.push({path:u,score:T(u,e.index),routesMeta:d})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of v(e.path))a(e,t,!0,n);else a(e,t)}),t}function v(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=v(r.join("/")),s=[];return s.push(...o.map(e=>""===e?a:[a,e].join("/"))),i&&s.push(...o),s.map(t=>e.startsWith("/")&&""===t?"/":t)}var x=/^:[\w-]+$/,k=3,z=2,S=1,E=10,j=-2,_=e=>"*"===e;function T(e,t){let n=e.split("/"),r=n.length;return n.some(_)&&(r+=j),t&&(r+=z),n.filter(e=>!_(e)).reduce((e,t)=>e+(x.test(t)?k:""===t?S:E),r)}function C(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=I({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=I({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:F([a,u.pathname]),pathnameBase:U(F([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=F([a,u.pathnameBase]))}return o}function I(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=A(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:o,pattern:e}}function A(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];u("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:null!=n}),n){let t=a.charAt(i+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function P(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return u(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}var N=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function D(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function O(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function L(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function M(e){let t=L(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function $(e,t,n){let r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=f(e):(r={...e},c(!r.pathname||!r.pathname.includes("?"),O("?","pathname","search",r)),c(!r.pathname||!r.pathname.includes("#"),O("#","pathname","hash",r)),c(!r.search||!r.search.includes("#"),O("#","search","hash",r)));let a,o=""===e||""===r.pathname,s=o?"/":r.pathname;if(null==s)a=n;else{let e=t.length-1;if(!i&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:r,search:i="",hash:a=""}="string"===typeof e?f(e):e;return r?(r=r.replace(/\/\/+/g,"/"),t=r.startsWith("/")?D(r.substring(1),"/"):D(r,n)):t=n,{pathname:t,search:V(i),hash:B(a)}}(r,a),u=s&&"/"!==s&&s.endsWith("/"),d=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!d||(l.pathname+="/"),l}var F=e=>e.join("/").replace(/\/\/+/g,"/"),U=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),V=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",B=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var H=class{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function W(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}function K(e){return e.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var G="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function q(e,t){let n=e;if("string"!==typeof n||!N.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(G)try{let e=new URL(window.location.href),r=n.startsWith("//")?new URL(e.protocol+n):new URL(n),a=R(r.pathname,t);r.origin===e.origin&&null!=a?n=a+r.search+r.hash:i=!0}catch(a){u(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Symbol("Uninstrumented");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Q=["POST","PUT","PATCH","DELETE"],Y=(new Set(Q),["GET",...Q]);new Set(Y),Symbol("ResetLoaderData");var J=r.createContext(null);J.displayName="DataRouter";var X=r.createContext(null);X.displayName="DataRouterState";var Z=r.createContext(!1);function ee(){return r.useContext(Z)}var te=r.createContext({isTransitioning:!1});te.displayName="ViewTransition";var ne=r.createContext(new Map);ne.displayName="Fetchers";var re=r.createContext(null);re.displayName="Await";var ie=r.createContext(null);ie.displayName="Navigation";var ae=r.createContext(null);ae.displayName="Location";var oe=r.createContext({outlet:null,matches:[],isDataRoute:!1});oe.displayName="Route";var se=r.createContext(null);se.displayName="RouteError";var le="REACT_ROUTER_ERROR";function ce(){return null!=r.useContext(ae)}function ue(){return c(ce(),"useLocation() may be used only in the context of a <Router> component."),r.useContext(ae).location}var de="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function he(e){r.useContext(ie).static||r.useLayoutEffect(e)}function pe(){let{isDataRoute:e}=r.useContext(oe);return e?function(){let{router:e}=Ee("useNavigate"),t=_e("useNavigate"),n=r.useRef(!1);he(()=>{n.current=!0});let i=r.useCallback(async function(r){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(n.current,de),n.current&&("number"===typeof r?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t]);return i}():function(){c(ce(),"useNavigate() may be used only in the context of a <Router> component.");let e=r.useContext(J),{basename:t,navigator:n}=r.useContext(ie),{matches:i}=r.useContext(oe),{pathname:a}=ue(),o=JSON.stringify(M(i)),s=r.useRef(!1);he(()=>{s.current=!0});let l=r.useCallback(function(r){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(u(s.current,de),!s.current)return;if("number"===typeof r)return void n.go(r);let l=$(r,JSON.parse(o),a,"path"===i.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:F([t,l.pathname])),(i.replace?n.replace:n.push)(l,i.state,i)},[t,n,o,a,e]);return l}()}r.createContext(null);function fe(){let{matches:e}=r.useContext(oe),t=e[e.length-1];return t?t.params:{}}function me(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:n}=r.useContext(oe),{pathname:i}=ue(),a=JSON.stringify(M(n));return r.useMemo(()=>$(e,JSON.parse(a),i,"path"===t),[e,a,i,t])}function ge(e,t,n){c(ce(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=r.useContext(ie),{matches:a}=r.useContext(oe),o=a[a.length-1],s=o?o.params:{},l=o?o.pathname:"/",d=o?o.pathnameBase:"/",h=o&&o.route;{let e=h&&h.path||"";Ie(l,!h||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let p,m=ue();if(t){let e="string"===typeof t?f(t):t;c("/"===d||e.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`),p=e}else p=m;let g=p.pathname||"/",w=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=y(e,{pathname:w});u(h||null!=b,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),u(null==b||void 0!==b[b.length-1].route.element||void 0!==b[b.length-1].route.Component||void 0!==b[b.length-1].route.lazy,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=ze(b&&b.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:F([d,i.encodeLocation?i.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:F([d,i.encodeLocation?i.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),a,n);return t&&v?r.createElement(ae.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...p},navigationType:"POP"}},v):v}function ye(){let e=Te(),t=W(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=r.createElement(r.Fragment,null,r.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),r.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",r.createElement("code",{style:o},"ErrorBoundary")," or"," ",r.createElement("code",{style:o},"errorElement")," prop on your route.")),r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:a},n):null,s)}var we=r.createElement(ye,null),be=class extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&"object"===typeof e&&e&&"digest"in e&&"string"===typeof e.digest){const t=function(e){if(e.startsWith(`${le}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText)return new H(t.status,t.statusText,t.data)}catch{}}(e.digest);t&&(e=t)}let t=void 0!==e?r.createElement(oe.Provider,{value:this.props.routeContext},r.createElement(se.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?r.createElement(xe,{error:e},t):t}};be.contextType=Z;var ve=new WeakMap;function xe(e){let{children:t,error:n}=e,{basename:i}=r.useContext(ie);if("object"===typeof n&&n&&"digest"in n&&"string"===typeof n.digest){let e=function(e){if(e.startsWith(`${le}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText&&"string"===typeof t.location&&"boolean"===typeof t.reloadDocument&&"boolean"===typeof t.replace)return t}catch{}}(n.digest);if(e){let t=ve.get(n);if(t)throw t;let a=q(e.location,i);if(G&&!ve.get(n)){if(!a.isExternal&&!e.reloadDocument){const t=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw ve.set(n,t),t}window.location.href=a.absoluteURL||a.to}return r.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return t}function ke(e){let{routeContext:t,match:n,children:i}=e,a=r.useContext(J);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(oe.Provider,{value:t},i)}function ze(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,i=n?.state;if(null==e){if(!i)return null;if(i.errors)e=i.matches;else{if(0!==t.length||i.initialized||!(i.matches.length>0))return null;e=i.matches}}let a=e,o=i?.errors;if(null!=o){let e=a.findIndex(e=>e.route.id&&void 0!==o?.[e.route.id]);c(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,l=-1;if(n&&i){s=i.renderFallback;for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:r}=i,o=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!r||void 0===r[t.route.id]);if(t.route.lazy||o){n.isStatic&&(s=!0),a=l>=0?a.slice(0,l+1):[a[0]];break}}}}let u=n?.onError,d=i&&u?(e,t)=>{u(e,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:K(i.matches),errorInfo:t})}:void 0;return a.reduceRight((e,n,c)=>{let u,h=!1,p=null,f=null;i&&(u=o&&n.route.id?o[n.route.id]:void 0,p=n.route.errorElement||we,s&&(l<0&&0===c?(Ie("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,f=null):l===c&&(h=!0,f=n.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,c+1)),g=()=>{let t;return t=u?p:h?f:n.route.Component?r.createElement(n.route.Component,null):n.route.element?n.route.element:e,r.createElement(ke,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:null!=i},children:t})};return i&&(n.route.ErrorBoundary||n.route.errorElement||0===c)?r.createElement(be,{location:i.location,revalidation:i.revalidation,component:p,error:u,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:d}):g()},null)}function Se(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ee(e){let t=r.useContext(J);return c(t,Se(e)),t}function je(e){let t=r.useContext(X);return c(t,Se(e)),t}function _e(e){let t=function(e){let t=r.useContext(oe);return c(t,Se(e)),t}(e),n=t.matches[t.matches.length-1];return c(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Te(){let e=r.useContext(se),t=je("useRouteError"),n=_e("useRouteError");return void 0!==e?e:t.errors?.[n]}var Ce={};function Ie(e,t,n){t||Ce[e]||(Ce[e]=!0,u(!1,n))}var Ae={};function Pe(e,t){e||Ae[t]||(Ae[t]=!0,console.warn(t))}i.useOptimistic;r.memo(Re);function Re(e){let{routes:t,future:n,state:r,isStatic:i,onError:a}=e;return ge(t,void 0,{state:r,isStatic:i,onError:a,future:n})}function Ne(e){let{to:t,replace:n,state:i,relative:a}=e;c(ce(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=r.useContext(ie);u(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=r.useContext(oe),{pathname:l}=ue(),d=pe(),h=$(t,M(s),l,"path"===a),p=JSON.stringify(h);return r.useEffect(()=>{d(JSON.parse(p),{replace:n,state:i,relative:a})},[d,p,a,n,i]),null}function De(e){c(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Oe(e){let{basename:t="/",children:n=null,location:i,navigationType:a="POP",navigator:o,static:s=!1,unstable_useTransitions:l}=e;c(!ce(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=t.replace(/^\/*/,"/"),h=r.useMemo(()=>({basename:d,navigator:o,static:s,unstable_useTransitions:l,future:{}}),[d,o,s,l]);"string"===typeof i&&(i=f(i));let{pathname:p="/",search:m="",hash:g="",state:y=null,key:w="default",unstable_mask:b}=i,v=r.useMemo(()=>{let e=R(p,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:y,key:w,unstable_mask:b},navigationType:a}},[d,p,m,g,y,w,a,b]);return u(null!=v,`<Router basename="${d}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),null==v?null:r.createElement(ie.Provider,{value:h},r.createElement(ae.Provider,{children:n,value:v}))}function Le(e){let{children:t,location:n}=e;return ge(Me(t),n)}r.Component;function Me(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return r.Children.forEach(e,(e,i)=>{if(!r.isValidElement(e))return;let a=[...t,i];if(e.type===r.Fragment)return void n.push.apply(n,Me(e.props.children,a));c(e.type===De,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),c(!e.props.index||!e.props.children,"An index route cannot have child routes.");let o={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=Me(e.props.children,a)),n.push(o)}),n}var $e="get",Fe="application/x-www-form-urlencoded";function Ue(e){return"undefined"!==typeof HTMLElement&&e instanceof HTMLElement}var Ve=null;var Be=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function He(e){return null==e||Be.has(e)?e:(u(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fe}"`),null)}function We(e,t){let n,r,i,a,o;if(Ue(s=e)&&"form"===s.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?R(o,t):null,n=e.getAttribute("method")||$e,i=He(e.getAttribute("enctype"))||Fe,a=new FormData(e)}else if(function(e){return Ue(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Ue(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||o.getAttribute("action");if(r=s?R(s,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||$e,i=He(e.getAttribute("formenctype"))||He(o.getAttribute("enctype"))||Fe,a=new FormData(o,e),!function(){if(null===Ve)try{new FormData(document.createElement("form"),0),Ve=!1}catch(e){Ve=!0}return Ve}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";a.append(`${e}x`,"0"),a.append(`${e}y`,"0")}else t&&a.append(t,r)}}else{if(Ue(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=$e,r=null,i=Fe,o=e}var s;return a&&"text/plain"===i&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function Ke(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function Ge(e,t,n,r){let i="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:"/"===i.pathname?i.pathname=`_root.${r}`:t&&"/"===R(i.pathname,t)?i.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${r}`,i}async function qe(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qe(e){return null!=e&&"string"===typeof e.page}function Ye(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Je(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===a?t.filter((e,t)=>o(e,t)||s(e,t)):"data"===a?t.filter((t,a)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function Xe(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1),[...new Set(r)];var r}function Ze(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Qe(i)&&"script"===i.as&&i.href&&r.has(i.href))return e;let a=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function et(e,t){return"lazy"===e.mode&&!0===t}function tt(){let e=r.useContext(J);return Ke(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function nt(){let e=r.useContext(X);return Ke(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var rt=r.createContext(void 0);function it(){let e=r.useContext(rt);return Ke(e,"You must render this element inside a <HydratedRouter> element"),e}function at(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ot(e,t,n){if(n&&!ut)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}rt.displayName="FrameworkContext";function st(e){let{page:t,...n}=e,{router:i}=tt(),a=r.useMemo(()=>y(i.routes,t,i.basename),[i.routes,t,i.basename]);return a?r.createElement(ct,{page:t,matches:a,...n}):null}function lt(e){let{manifest:t,routeModules:n}=it(),[i,a]=r.useState([]);return r.useEffect(()=>{let r=!1;return async function(e,t,n){let r=await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await qe(r,n);return e.links?e.links():[]}return[]}));return Ze(r.flat(1).filter(Ye).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{r||a(e)}),()=>{r=!0}},[e,t,n]),i}function ct(e){let{page:t,matches:n,...i}=e,a=ue(),{future:o,manifest:s,routeModules:l}=it(),{basename:c}=tt(),{loaderData:u,matches:d}=nt(),h=r.useMemo(()=>Je(t,n,d,s,a,"data"),[t,n,d,s,a]),p=r.useMemo(()=>Je(t,n,d,s,a,"assets"),[t,n,d,s,a]),f=r.useMemo(()=>{if(t===a.pathname+a.search+a.hash)return[];let e=new Set,r=!1;if(n.forEach(t=>{let n=s.routes[t.route.id];n&&n.hasLoader&&(!h.some(e=>e.route.id===t.route.id)&&t.route.id in u&&l[t.route.id]?.shouldRevalidate||n.hasClientLoader?r=!0:e.add(t.route.id))}),0===e.size)return[];let i=Ge(t,c,o.unstable_trailingSlashAwareDataRequests,"data");return r&&e.size>0&&i.searchParams.set("_routes",n.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[i.pathname+i.search]},[c,o.unstable_trailingSlashAwareDataRequests,u,a,s,h,n,t,l]),m=r.useMemo(()=>Xe(p,s),[p,s]),g=lt(p);return r.createElement(r.Fragment,null,f.map(e=>r.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...i})),m.map(e=>r.createElement("link",{key:e,rel:"modulepreload",href:e,...i})),g.map(e=>{let{key:t,link:n}=e;return r.createElement("link",{key:t,nonce:i.nonce,...n,crossOrigin:n.crossOrigin??i.crossOrigin})}))}var ut=!1;function dt(e){let{manifest:t,serverHandoffString:n,isSpaMode:i,renderMeta:a,routeDiscovery:o,ssr:s}=it(),{router:l,static:c,staticContext:u}=tt(),{matches:d}=nt(),h=ee(),p=et(o,s);a&&(a.didRenderScripts=!0);let f=ot(d,null,i);r.useEffect(()=>{ut=!0},[]);let m=r.useMemo(()=>{if(h)return null;let i=u?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",a=c?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${p?"":`import ${JSON.stringify(t.url)}`};\n${f.map((e,n)=>{let r=`route${n}`,i=t.routes[e.route.id];Ke(i,`Route ${e.route.id} not found in manifest`);let{clientActionModule:a,clientLoaderModule:o,clientMiddlewareModule:s,hydrateFallbackModule:l,module:c}=i,u=[...a?[{module:a,varName:`${r}_clientAction`}]:[],...o?[{module:o,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_clientMiddleware`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${u.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${p?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,i=new Set(t.state.matches.map(e=>e.route.id)),a=t.state.location.pathname.split("/").filter(Boolean),o=["/"];for(a.pop();a.length>0;)o.push(`/${a.join("/")}`),a.pop();o.forEach(e=>{let n=y(t.routes,e,t.basename);n&&n.forEach(e=>i.add(e.route.id))});let s=[...i].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:s,sri:!!n||void 0}}(t,l),null,2)};`:""}\n  window.__reactRouterRouteModules = {${f.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return r.createElement(r.Fragment,null,r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:i},type:void 0}),r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:a},type:"module",async:!0}))},[]),g=ut||h?[]:(w=t.entry.imports.concat(Xe(f,t,{includeHydrateFallback:!0})),[...new Set(w)]);var w;let b="object"===typeof t.sri?t.sri:{};return Pe(!h,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),ut||h?null:r.createElement(r.Fragment,null,"object"===typeof t.sri?r.createElement("script",{...e,"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:b})}}):null,p?null:r.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:b[t.url],suppressHydrationWarning:!0}),r.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:b[t.entry.module],suppressHydrationWarning:!0}),g.map(t=>r.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:b[t],suppressHydrationWarning:!0})),m)}function ht(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}r.Component;function pt(e){let{error:t,isOutsideRemixApp:n}=e;console.error(t);let i,a=r.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(W(t))return r.createElement(ft,{title:"Unhandled Thrown Response!"},r.createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),a);if(t instanceof Error)i=t;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);i=new Error(e)}return r.createElement(ft,{title:"Application Error!",isOutsideRemixApp:n},r.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),r.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},i.stack),a)}function ft(e){let{title:t,renderScripts:n,isOutsideRemixApp:i,children:a}=e,{routeModules:o}=it();return o.root?.Layout&&!i?a:r.createElement("html",{lang:"en"},r.createElement("head",null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),r.createElement("title",null,t)),r.createElement("body",null,r.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},a,n?r.createElement(dt,null):null)))}var mt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{mt&&(window.__reactRouterVersion="7.13.2")}catch(oI){}function gt(e){let{basename:t,children:n,unstable_useTransitions:i,window:a}=e,o=r.useRef();null==o.current&&(o.current=l({window:a,v5Compat:!0}));let s=o.current,[c,u]=r.useState({action:s.action,location:s.location}),d=r.useCallback(e=>{!1===i?u(e):r.startTransition(()=>u(e))},[i]);return r.useLayoutEffect(()=>s.listen(d),[s,d]),r.createElement(Oe,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s,unstable_useTransitions:i})}var yt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wt=r.forwardRef(function(e,t){let{onClick:n,discover:i="render",prefetch:a="none",relative:o,reloadDocument:s,replace:l,unstable_mask:u,state:d,target:h,to:f,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:y,...w}=e,{basename:b,navigator:v,unstable_useTransitions:x}=r.useContext(ie),k="string"===typeof f&&yt.test(f),z=q(f,b);f=z.to;let S=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(ce(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=r.useContext(ie),{hash:a,pathname:o,search:s}=me(e,{relative:t}),l=o;return"/"!==n&&(l="/"===o?n:F([n,o])),i.createHref({pathname:l,search:s,hash:a})}(f,{relative:o}),E=ue(),j=null;if(u){let e=$(u,[],E.unstable_mask?E.unstable_mask.pathname:"/",!0);"/"!==b&&(e.pathname="/"===e.pathname?b:F([b,e.pathname])),j=v.createHref(e)}let[_,T,C]=function(e,t){let n=r.useContext(rt),[i,a]=r.useState(!1),[o,s]=r.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:h}=t,p=r.useRef(null);r.useEffect(()=>{if("render"===e&&s(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{s(e.isIntersecting)})},{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}},[e]),r.useEffect(()=>{if(i){let e=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(e)}}},[i]);let f=()=>{a(!0)},m=()=>{a(!1),s(!1)};return n?"intent"!==e?[o,p,{}]:[o,p,{onFocus:at(l,f),onBlur:at(c,m),onMouseEnter:at(u,f),onMouseLeave:at(d,m),onTouchStart:at(h,f)}]:[!1,p,{}]}(a,w),I=function(e){let{target:t,replace:n,unstable_mask:i,state:a,preventScrollReset:o,relative:s,viewTransition:l,unstable_defaultShouldRevalidate:c,unstable_useTransitions:u}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=pe(),h=ue(),f=me(e,{relative:s});return r.useCallback(m=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(m,t)){m.preventDefault();let t=void 0!==n?n:p(h)===p(f),g=()=>d(e,{replace:t,unstable_mask:i,state:a,preventScrollReset:o,relative:s,viewTransition:l,unstable_defaultShouldRevalidate:c});u?r.startTransition(()=>g()):g()}},[h,d,f,n,i,a,t,e,o,s,l,c,u])}(f,{replace:l,unstable_mask:u,state:d,target:h,preventScrollReset:m,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:y,unstable_useTransitions:x});let A=!(z.isExternal||s),P=r.createElement("a",{...w,...C,href:(A?j:void 0)||z.absoluteURL||S,onClick:A?function(e){n&&n(e),e.defaultPrevented||I(e)}:n,ref:ht(t,T),target:h,"data-discover":k||"render"!==i?void 0:"true"});return _&&!k?r.createElement(r.Fragment,null,P,r.createElement(st,{page:S})):P});wt.displayName="Link",r.forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:i=!1,className:a="",end:o=!1,style:s,to:l,viewTransition:u,children:d,...h}=e,p=me(l,{relative:h.relative}),f=ue(),m=r.useContext(X),{navigator:g,basename:y}=r.useContext(ie),w=null!=m&&function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.useContext(te);c(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=xt("useViewTransitionState"),a=me(e,{relative:t});if(!n.isTransitioning)return!1;let o=R(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=R(n.nextLocation.pathname,i)||n.nextLocation.pathname;return null!=I(a.pathname,s)||null!=I(a.pathname,o)}(p)&&!0===u,b=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,v=f.pathname,x=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(v=v.toLowerCase(),x=x?x.toLowerCase():null,b=b.toLowerCase()),x&&y&&(x=R(x,y)||x);const k="/"!==b&&b.endsWith("/")?b.length-1:b.length;let z,S=v===b||!o&&v.startsWith(b)&&"/"===v.charAt(k),E=null!=x&&(x===b||!o&&x.startsWith(b)&&"/"===x.charAt(b.length)),j={isActive:S,isPending:E,isTransitioning:w},_=S?n:void 0;z="function"===typeof a?a(j):[a,S?"active":null,E?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let T="function"===typeof s?s(j):s;return r.createElement(wt,{...h,"aria-current":_,className:z,ref:t,style:T,to:l,viewTransition:u},"function"===typeof d?d(j):d)}).displayName="NavLink";var bt=r.forwardRef((e,t)=>{let{discover:n="render",fetcherKey:i,navigate:a,reloadDocument:o,replace:s,state:l,method:u=$e,action:d,onSubmit:h,relative:f,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:y,...w}=e,{unstable_useTransitions:b}=r.useContext(ie),v=St(),x=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:n}=r.useContext(ie),i=r.useContext(oe);c(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),o={...me(e||".",{relative:t})},s=ue();if(null==e){o.search=s.search;let e=new URLSearchParams(o.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();o.search=n?`?${n}`:""}}e&&"."!==e||!a.route.index||(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(o.pathname="/"===o.pathname?n:F([n,o.pathname]));return p(o)}(d,{relative:f}),k="get"===u.toLowerCase()?"get":"post",z="string"===typeof d&&yt.test(d);return r.createElement("form",{ref:t,method:k,action:x,onSubmit:o?h:e=>{if(h&&h(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||u,o=()=>v(t||e.currentTarget,{fetcherKey:i,method:n,navigate:a,replace:s,state:l,relative:f,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:y});b&&!1!==a?r.startTransition(()=>o()):o()},...w,"data-discover":z||"render"!==n?void 0:"true"})});function vt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xt(e){let t=r.useContext(J);return c(t,vt(e)),t}bt.displayName="Form";var kt=0,zt=()=>`__${String(++kt)}__`;function St(){let{router:e}=xt("useSubmit"),{basename:t}=r.useContext(ie),n=_e("useRouteId"),i=e.fetch,a=e.navigate;return r.useCallback(async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:o,method:s,encType:l,formData:c,body:u}=We(e,t);if(!1===r.navigate){let e=r.fetcherKey||zt();await i(e,n,r.action||o,{unstable_defaultShouldRevalidate:r.unstable_defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:c,body:u,formMethod:r.method||s,formEncType:r.encType||l,flushSync:r.flushSync})}else await a(r.action||o,{unstable_defaultShouldRevalidate:r.unstable_defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:c,body:u,formMethod:r.method||s,formEncType:r.encType||l,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[i,a,t,n])}const Et=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},jt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],a=i+1<e.length,o=a?e[i+1]:0,s=i+2<e.length,l=s?e[i+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let d=(15&o)<<2|l>>6,h=63&l;s||(h=64,a||(d=64)),r.push(n[c],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Et(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){const a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const o=i<e.length?n[e.charAt(i)]:64;++i;const s=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==o||null==s)throw new _t;const l=t<<2|a>>4;if(r.push(l),64!==o){const e=a<<4&240|o>>2;if(r.push(e),64!==s){const e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class _t extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tt=function(e){return function(e){const t=Et(e);return jt.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Ct=function(e){try{return jt.decodeString(e,!0)}catch(oI){console.error("base64Decode failed: ",oI)}return null};function It(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof globalThis)return globalThis;throw new Error("Unable to locate global object.")}const At=()=>{try{return It().__FIREBASE_DEFAULTS__||(()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(oI){return}const t=e&&Ct(e[1]);return t&&JSON.parse(t)})()}catch(oI){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${oI}`)}},Pt=e=>At()?.emulatorHosts?.[e],Rt=()=>At()?.config,Nt=e=>At()?.[`_${e}`];class Dt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function Ot(){return"undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:""}function Lt(){const e=At()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(globalThis.process)}catch(oI){return!1}}function Mt(){return!Lt()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $t(){try{return"object"===typeof indexedDB}catch(oI){return!1}}class Ft extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ut.prototype.create)}}class Ut{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e){const t=(arguments.length<=1?void 0:arguments[1])||{},n=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(Vt,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(r,t):"Error",a=`${this.serviceName}: ${i} (${n}).`;return new Ft(n,a,t)}}const Vt=/\{\$([^}]+)}/g;function Bt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],a=t[i];if(Ht(n)&&Ht(a)){if(!Bt(n,a))return!1}else if(n!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ht(e){return null!==e&&"object"===typeof e}function Wt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Kt(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function Gt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class qt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Qt),void 0===r.error&&(r.error=Qt),void 0===r.complete&&(r.complete=Qt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(oI){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(oI){"undefined"!==typeof console&&console.error&&console.error(oI)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qt(){}function Yt(e){return e&&e._delegate?e._delegate:e}function Jt(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Xt(e){return(await fetch(e,{credentials:"include"})).ok}class Zt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const en="[DEFAULT]";class tn{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Dt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(oI){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(oI){if(n)return null;throw oI}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:en})}catch(oI){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(oI){}}}}clearInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:en;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:en;return this.instances.has(e)}getOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:en;return this.instancesOptions.get(e)||{}}initialize(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&a.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService(e){let{instanceIdentifier:t,options:n={}}=e,r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nn(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:en;return this.component?this.component.multipleInstances?e:en:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function nn(e){return e===en?void 0:e}class rn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tn(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}const an=[];var on;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(on||(on={}));const sn={debug:on.DEBUG,verbose:on.VERBOSE,info:on.INFO,warn:on.WARN,error:on.ERROR,silent:on.SILENT},ln=on.INFO,cn={[on.DEBUG]:"log",[on.VERBOSE]:"log",[on.INFO]:"info",[on.WARN]:"warn",[on.ERROR]:"error"},un=function(e,t){if(t<e.logLevel)return;const n=(new Date).toISOString(),r=cn[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);for(var i=arguments.length,a=new Array(i>2?i-2:0),o=2;o<i;o++)a[o-2]=arguments[o];console[r](`[${n}]  ${e.name}:`,...a)};class dn{constructor(e){this.name=e,this._logLevel=ln,this._logHandler=un,this._userLogHandler=null,an.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in on))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?sn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,on.DEBUG,...t),this._logHandler(this,on.DEBUG,...t)}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,on.VERBOSE,...t),this._logHandler(this,on.VERBOSE,...t)}info(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,on.INFO,...t),this._logHandler(this,on.INFO,...t)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,on.WARN,...t),this._logHandler(this,on.WARN,...t)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,on.ERROR,...t),this._logHandler(this,on.ERROR,...t)}}let hn,pn;const fn=new WeakMap,mn=new WeakMap,gn=new WeakMap,yn=new WeakMap,wn=new WeakMap;let bn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return mn.get(e);if("objectStoreNames"===t)return e.objectStoreNames||gn.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kn(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function vn(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(pn||(pn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(zn(this),n),kn(fn.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return kn(e.apply(zn(this),n))}:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];const a=e.call(zn(this),t,...r);return gn.set(a,t.sort?t.sort():[t]),kn(a)}}function xn(e){return"function"===typeof e?vn(e):(e instanceof IDBTransaction&&function(e){if(mn.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});mn.set(e,t)}(e),t=e,(hn||(hn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,bn):e);var t}function kn(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(kn(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&fn.set(t,e)}).catch(()=>{}),wn.set(t,e),t}(e);if(yn.has(e))return yn.get(e);const t=xn(e);return t!==e&&(yn.set(e,t),wn.set(t,e)),t}const zn=e=>wn.get(e);const Sn=["get","getKey","getAll","getAllKeys","count"],En=["put","add","delete","clear"],jn=new Map;function _n(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(jn.get(t))return jn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=En.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Sn.includes(n))return;const a=async function(e){const t=this.transaction(e,i?"readwrite":"readonly");let a=t.store;for(var o=arguments.length,s=new Array(o>1?o-1:0),l=1;l<o;l++)s[l-1]=arguments[l];return r&&(a=a.index(s.shift())),(await Promise.all([a[n](...s),i&&t.done]))[0]};return jn.set(t,a),a}bn=(e=>({...e,get:(t,n,r)=>_n(t,n)||e.get(t,n,r),has:(t,n)=>!!_n(t,n)||e.has(t,n)}))(bn);class Tn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const Cn="@firebase/app",In="0.14.11",An=new dn("@firebase/app"),Pn="@firebase/app-compat",Rn="@firebase/analytics-compat",Nn="@firebase/analytics",Dn="@firebase/app-check-compat",On="@firebase/app-check",Ln="@firebase/auth",Mn="@firebase/auth-compat",$n="@firebase/database",Fn="@firebase/data-connect",Un="@firebase/database-compat",Vn="@firebase/functions",Bn="@firebase/functions-compat",Hn="@firebase/installations",Wn="@firebase/installations-compat",Kn="@firebase/messaging",Gn="@firebase/messaging-compat",qn="@firebase/performance",Qn="@firebase/performance-compat",Yn="@firebase/remote-config",Jn="@firebase/remote-config-compat",Xn="@firebase/storage",Zn="@firebase/storage-compat",er="@firebase/firestore",tr="@firebase/ai",nr="@firebase/firestore-compat",rr="firebase",ir="[DEFAULT]",ar={[Cn]:"fire-core",[Pn]:"fire-core-compat",[Nn]:"fire-analytics",[Rn]:"fire-analytics-compat",[On]:"fire-app-check",[Dn]:"fire-app-check-compat",[Ln]:"fire-auth",[Mn]:"fire-auth-compat",[$n]:"fire-rtdb",[Fn]:"fire-data-connect",[Un]:"fire-rtdb-compat",[Vn]:"fire-fn",[Bn]:"fire-fn-compat",[Hn]:"fire-iid",[Wn]:"fire-iid-compat",[Kn]:"fire-fcm",[Gn]:"fire-fcm-compat",[qn]:"fire-perf",[Qn]:"fire-perf-compat",[Yn]:"fire-rc",[Jn]:"fire-rc-compat",[Xn]:"fire-gcs",[Zn]:"fire-gcs-compat",[er]:"fire-fst",[nr]:"fire-fst-compat",[tr]:"fire-vertex","fire-js":"fire-js",[rr]:"fire-js-all"},or=new Map,sr=new Map,lr=new Map;function cr(e,t){try{e.container.addComponent(t)}catch(oI){An.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,oI)}}function ur(e){const t=e.name;if(lr.has(t))return An.debug(`There were multiple attempts to register component ${t}.`),!1;lr.set(t,e);for(const n of or.values())cr(n,e);for(const n of sr.values())cr(n,e);return!0}function dr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function hr(e){return null!==e&&void 0!==e&&void 0!==e.settings}const pr=new Ut("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});class fr{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}const mr="12.12.0";function gr(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!==typeof t){t={name:t}}const r={name:ir,automaticDataCollectionEnabled:!0,...t},i=r.name;if("string"!==typeof i||!i)throw pr.create("bad-app-name",{appName:String(i)});if(n||(n=Rt()),!n)throw pr.create("no-options");const a=or.get(i);if(a){if(Bt(n,a.options)&&Bt(r,a.config))return a;throw pr.create("duplicate-app",{appName:i})}const o=new rn(i);for(const l of lr.values())o.addComponent(l);const s=new fr(n,r,o);return or.set(i,s),s}function yr(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ir;const t=or.get(e);if(!t&&e===ir&&Rt())return gr();if(!t)throw pr.create("no-app",{appName:e});return t}function wr(e,t,n){let r=ar[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void An.warn(e.join(" "))}ur(new Zt(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const br="firebase-heartbeat-store";let vr=null;function xr(){return vr||(vr=function(e,t){let{blocked:n,upgrade:r,blocking:i,terminated:a}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=indexedDB.open(e,t),s=kn(o);return r&&o.addEventListener("upgradeneeded",e=>{r(kn(o.result),e.oldVersion,e.newVersion,kn(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(br)}catch(oI){console.warn(oI)}}}).catch(e=>{throw pr.create("idb-open",{originalErrorMessage:e.message})})),vr}async function kr(e,t){try{const n=(await xr()).transaction(br,"readwrite"),r=n.objectStore(br);await r.put(t,zr(e)),await n.done}catch(oI){if(oI instanceof Ft)An.warn(oI.message);else{const t=pr.create("idb-set",{originalErrorMessage:oI?.message});An.warn(t.message)}}}function zr(e){return`${e.name}!${e.options.appId}`}class Sr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jr(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Er();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(oI){An.warn(oI)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=Er(),{heartbeatsToSend:t,unsentEntries:n}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024;const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),_r(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_r(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Tt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(oI){return An.warn(oI),""}}}function Er(){return(new Date).toISOString().substring(0,10)}class jr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!$t()&&new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(n){t(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await xr()).transaction(br),n=await t.objectStore(br).get(zr(e));return await t.done,n}catch(oI){if(oI instanceof Ft)An.warn(oI.message);else{const t=pr.create("idb-get",{originalErrorMessage:oI?.message});An.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return kr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return kr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function _r(e){return Tt(JSON.stringify({version:2,heartbeats:e})).length}var Tr;Tr="",ur(new Zt("platform-logger",e=>new Tn(e),"PRIVATE")),ur(new Zt("heartbeat",e=>new Sr(e),"PRIVATE")),wr(Cn,In,Tr),wr(Cn,In,"esm2020"),wr("fire-js","");function Cr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ir=Cr,Ar=new Ut("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Pr=new dn("@firebase/auth");function Rr(e){if(Pr.logLevel<=on.ERROR){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];Pr.error(`Auth (${mr}): ${e}`,...n)}}function Nr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw $r(e,...n)}function Dr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return $r(e,...n)}function Or(e,t,n){const r={...Ir(),[t]:n};return new Ut("auth","Firebase",r).create(t,{appName:e.name})}function Lr(e){return Or(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mr(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Nr(e,"argument-error"),Or(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $r(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if("string"!==typeof e){const t=n[0],r=[...n.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(t,...r)}return Ar.create(e,...n)}function Fr(e,t){if(!e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];throw $r(t,...r)}}function Ur(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Rr(t),new Error(t)}function Vr(e,t){e||Ur(t)}function Br(){return"undefined"!==typeof self&&self.location?.href||""}function Hr(){return"http:"===Wr()||"https:"===Wr()}function Wr(){return"undefined"!==typeof self&&self.location?.protocol||null}function Kr(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(Hr()||function(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine}class Gr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vr(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())||"object"===typeof navigator&&"ReactNative"===navigator.product}get(){return Kr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function qr(e,t){Vr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}class Qr{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void Ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void Ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void Ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const Yr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Jr=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Xr=new Gr(3e4,6e4);function Zr(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function ei(e,t,n,r){return ti(e,arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},async()=>{let i={},a={};r&&("GET"===t?a=r:i={body:JSON.stringify(r)});const o=Wt({key:e.config.apiKey,...a}).slice(1),s=await e._getAdditionalHeaders();s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:s,...i};return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&Jt(e.emulatorConfig.host)&&(l.credentials="include"),Qr.fetch()(await ri(e,e.config.apiHost,n,o),l)})}async function ti(e,t,n){e._canInitEmulator=!1;const r={...Yr,...t};try{const t=new ai(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw oi(e,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const t=i.ok?a.errorMessage:a.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw oi(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===n)throw oi(e,"email-already-in-use",a);if("USER_DISABLED"===n)throw oi(e,"user-disabled",a);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Or(e,s,o);Nr(e,s)}}catch(oI){if(oI instanceof Ft)throw oI;Nr(e,"network-request-failed",{message:String(oI)})}}async function ni(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const a=await ei(e,t,n,r,i);return"mfaPendingCredential"in a&&Nr(e,"multi-factor-auth-required",{_serverResponse:a}),a}async function ri(e,t,n,r){const i=`${t}${n}?${r}`,a=e,o=a.config.emulator?qr(e.config,i):`${e.config.apiScheme}://${i}`;if(Jr.includes(n)&&(await a._persistenceManagerAvailable,"COOKIE"===a._getPersistenceType())){return a._getPersistence()._getFinalTarget(o).toString()}return o}function ii(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ai{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(Dr(this.auth,"network-request-failed")),Xr.get())})}}function oi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dr(e,t,r);return i.customData._tokenResponse=n,i}function si(e){return void 0!==e&&void 0!==e.enterprise}class li{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ii(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ci(e,t){return ei(e,"GET","/v2/recaptchaConfig",Zr(e,t))}async function ui(e,t){return ei(e,"POST","/v1/accounts:lookup",t)}function di(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(oI){}}function hi(e){return 1e3*Number(e)}function pi(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Rr("JWT malformed, contained fewer than 3 sections"),null;try{const e=Ct(n);return e?JSON.parse(e):(Rr("Failed to decode base64 JWT payload"),null)}catch(oI){return Rr("Caught error parsing JWT payload as JSON",oI?.toString()),null}}function fi(e){const t=pi(e);return Fr(t,"internal-error"),Fr("undefined"!==typeof t.exp,"internal-error"),Fr("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}async function mi(e,t){if(arguments.length>2&&void 0!==arguments[2]&&arguments[2])return t;try{return await t}catch(oI){throw oI instanceof Ft&&function(e){let{code:t}=e;return"auth/user-disabled"===t||"auth/user-token-expired"===t}(oI)&&e.auth.currentUser===e&&await e.auth.signOut(),oI}}class gi{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(oI){return void("auth/network-request-failed"===oI?.code&&this.schedule(!0))}this.schedule()}}class yi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function wi(e){const t=e.auth,n=await e.getIdToken(),r=await mi(e,ui(t,{idToken:n}));Fr(r?.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const a=i.providerUserInfo?.length?bi(i.providerUserInfo):[],o=function(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,a),s=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!o?.length,c=!!s&&l,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new yi(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(e,u)}function bi(e){return e.map(e=>{let{providerId:t,...n}=e;return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Fr(e.idToken,"internal-error"),Fr("undefined"!==typeof e.idToken,"internal-error"),Fr("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):fi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Fr(0!==e.length,"internal-error");const t=fi(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]||!this.accessToken||this.isExpired?(Fr(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await ti(e,{},async()=>{const n=Wt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=await ri(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const s={method:"POST",headers:o,body:n};return e.emulatorConfig&&Jt(e.emulatorConfig.host)&&(s.credentials="include"),Qr.fetch()(a,s)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,a=new vi;return n&&(Fr("string"===typeof n,"internal-error",{appName:e}),a.refreshToken=n),r&&(Fr("string"===typeof r,"internal-error",{appName:e}),a.accessToken=r),i&&(Fr("number"===typeof i,"internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return Ur("not implemented")}}function xi(e,t){Fr("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ki{constructor(e){let{uid:t,auth:n,stsTokenManager:r,...i}=e;this.providerId="firebase",this.proactiveRefresh=new gi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await mi(this,this.stsTokenManager.getToken(this.auth,e));return Fr(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=Yt(e),r=await n.getIdToken(t),i=pi(r);Fr(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a="object"===typeof i.firebase?i.firebase:void 0,o=a?.sign_in_provider;return{claims:i,token:r,authTime:di(hi(i.auth_time)),issuedAtTime:di(hi(i.iat)),expirationTime:di(hi(i.exp)),signInProvider:o||null,signInSecondFactor:a?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=Yt(e);await wi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Fr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ki({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Fr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await wi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hr(this.auth.app))return Promise.reject(Lr(this.auth));const e=await this.getIdToken();return await mi(this,async function(e,t){return ei(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,o=t.tenantId??void 0,s=t._redirectEventId??void 0,l=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:u,emailVerified:d,isAnonymous:h,providerData:p,stsTokenManager:f}=t;Fr(u&&f,e,"internal-error");const m=vi.fromJSON(this.name,f);Fr("string"===typeof u,e,"internal-error"),xi(n,e.name),xi(r,e.name),Fr("boolean"===typeof d,e,"internal-error"),Fr("boolean"===typeof h,e,"internal-error"),xi(i,e.name),xi(a,e.name),xi(o,e.name),xi(s,e.name),xi(l,e.name),xi(c,e.name);const g=new ki({uid:u,auth:e,email:r,emailVerified:d,displayName:n,isAnonymous:h,photoURL:a,phoneNumber:i,tenantId:o,stsTokenManager:m,createdAt:l,lastLoginAt:c});return p&&Array.isArray(p)&&(g.providerData=p.map(e=>({...e}))),s&&(g._redirectEventId=s),g}static async _fromIdTokenResponse(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=new vi;r.updateFromServerResponse(t);const i=new ki({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await wi(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];Fr(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?bi(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!i?.length,o=new vi;o.updateFromIdToken(n);const s=new ki({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:a}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new yi(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(s,l),s}}const zi=new Map;function Si(e){Vr(e instanceof Function,"Expected a class definition");let t=zi.get(e);return t?(Vr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,zi.set(e,t),t)}class Ei{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ei.type="NONE";const ji=Ei;function _i(e,t,n){return`firebase:${e}:${t}:${n}`}class Ti{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=_i(this.userKey,r.apiKey,i),this.fullPersistenceKey=_i("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"===typeof e){const t=await ui(this.auth,{idToken:e}).catch(()=>{});return t?ki._fromGetAccountInfoResponse(this.auth,t,e):null}return ki._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";if(!t.length)return new Ti(Si(ji),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||Si(ji);const a=_i(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(a);if(t){let n;if("string"===typeof t){const r=await ui(e,{idToken:t}).catch(()=>{});if(!r)break;n=await ki._fromGetAccountInfoResponse(e,r,t)}else n=ki._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch{}const s=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&s.length?(i=s[0],o&&await i._set(a,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(a)}catch{}})),new Ti(i,e,n)):new Ti(i,e,n)}}function Ci(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ri(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ii(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Di(t))return"Blackberry";if(Oi(t))return"Webos";if(Ai(t))return"Safari";if((t.includes("chrome/")||Pi(t))&&!t.includes("edge/"))return"Chrome";if(Ni(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===n?.length)return n[1]}return"Other"}function Ii(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return/firefox\//i.test(e)}function Ai(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot()).toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pi(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return/crios\//i.test(e)}function Ri(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return/iemobile/i.test(e)}function Ni(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return/android/i.test(e)}function Di(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return/blackberry/i.test(e)}function Oi(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return/webos/i.test(e)}function Li(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Mi(){return function(){const e=Ot();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function $i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot();return Li(e)||Ni(e)||Oi(e)||Di(e)||/windows phone/i.test(e)||Ri(e)}function Fi(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Ci(Ot());break;case"Worker":t=`${Ci(Ot())}-${e}`;break;default:t=e}const r=n.length?n.join(","):"FirebaseCore-web";return`${t}/JsCore/${mr}/${r}`}class Ui{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(oI){r(oI)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(oI){t.reverse();for(const r of t)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:oI?.message})}}}class Vi{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}class Bi{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wi(this),this.idTokenSubscription=new Wi(this),this.beforeStateQueue=new Ui(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ar,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Si(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ti.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(oI){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await ui(this,{idToken:e}),n=await ki._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(hr(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,i=n?._redirectEventId,a=await this.tryRedirectSignIn(e);t&&t!==i||!a?.user||(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(oI){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(oI))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return Fr(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(oI){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wi(e)}catch(oI){if("auth/network-request-failed"!==oI?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hr(this.app))return Promise.reject(Lr(this));const t=e?Yt(e):null;return t&&Fr(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this._deleted)return e&&Fr(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hr(this.app)?Promise.reject(Lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hr(this.app)?Promise.reject(Lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Si(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e){return ei(e,"GET","/v2/passwordPolicy",Zr(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}(this),t=new Vi(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ut("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return ei(e,"POST","/v2/accounts:revokeToken",Zr(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Si(e)||this._popupRedirectResolver;Fr(t,this,"argument-error"),this.redirectPersistenceManager=await Ti.create(this,[Si(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(Fr(o,this,"internal-error"),o.then(()=>{a||i(this.currentUser)}),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{a=!0,i()}}{const n=e.addObserver(t);return()=>{a=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Fr(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(hr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e){if(Pr.logLevel<=on.WARN){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];Pr.warn(`Auth (${mr}): ${e}`,...n)}}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Hi(e){return Yt(e)}class Wi{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new qt(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return Fr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let Ki={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gi(e){return Ki.loadJS(e)}function qi(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Qi{constructor(){this.enterprise=new Yi}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Yi{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Ji="NO_RECAPTCHA";class Xi{constructor(e){this.type="recaptcha-enterprise",this.auth=Hi(e)}async verify(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"verify",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function n(t,n,r){const i=window.grecaptcha;si(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(Ji)})}):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new Qi).execute("siteKey",{action:"verify"})}return new Promise((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{ci(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new li(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})})(this.auth).then(i=>{if(!t&&si(window.grecaptcha))n(i,e,r);else{if("undefined"===typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=Ki.recaptchaEnterpriseScript;0!==t.length&&(t+=i),Gi(t).then(()=>{n(i,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function Zi(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const a=new Xi(e);let o;if(i)o=Ji;else try{o=await a.verify(n)}catch(l){o=await a.verify(n,!0)}const s={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in s){const e=s.phoneEnrollmentInfo.phoneNumber,t=s.phoneEnrollmentInfo.recaptchaToken;Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in s){const e=s.phoneSignInInfo.recaptchaToken;Object.assign(s,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return s}return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function ea(e,t,n,r,i){if("EMAIL_PASSWORD_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Zi(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Zi(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)})}if("PHONE_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await Zi(e,t,n);return r(e,i).catch(async i=>{if("AUDIT"===e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await Zi(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)})}{const i=await Zi(e,t,n,!1,!0);return r(e,i)}}return Promise.reject(i+" provider is not supported.")}async function ta(e){const t=Hi(e),n=await ci(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new li(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){new Xi(t).verify()}}function na(e,t,n){const r=Hi(e);Fr(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,a=ra(t),{host:o,port:s}=function(e){const t=ra(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:ia(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:ia(t)}}}(t),l=null===s?"":`:${s}`,c={url:`${a}//${o}${l}/`},u=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator)return Fr(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void Fr(Bt(c,r.config.emulator)&&Bt(u,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Jt(o)?Xt(`${a}//${o}${l}`):i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}function ra(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ia(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class aa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ur("not implemented")}_getIdTokenResponse(e){return Ur("not implemented")}_linkToIdToken(e,t){return Ur("not implemented")}_getReauthenticationResolver(e){return Ur("not implemented")}}async function oa(e,t){return ei(e,"POST","/v1/accounts:signUp",t)}async function sa(e,t){return ni(e,"POST","/v1/accounts:signInWithPassword",Zr(e,t))}async function la(e,t){return ei(e,"POST","/v1/accounts:sendOobCode",Zr(e,t))}async function ca(e,t){return la(e,t)}class ua extends aa{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ua(e,t,"password")}static _fromEmailAndCode(e,t){return new ua(e,t,"emailLink",arguments.length>2&&void 0!==arguments[2]?arguments[2]:null)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if(t?.email&&t?.password){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ea(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",sa,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return ni(e,"POST","/v1/accounts:signInWithEmailLink",Zr(e,t))}(e,{email:this._email,oobCode:this._password});default:Nr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ea(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oa,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return ni(e,"POST","/v1/accounts:signInWithEmailLink",Zr(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Nr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}async function da(e,t){return ni(e,"POST","/v1/accounts:signInWithIdp",Zr(e,t))}class ha extends aa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ha(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Nr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const a=new ha(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){return da(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,da(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,da(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wt(t)}return e}}async function pa(e,t){return ei(e,"POST","/v1/accounts:sendVerificationCode",Zr(e,t))}const fa={USER_NOT_FOUND:"user-not-found"};class ma extends aa{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ma({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ma({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ni(e,"POST","/v1/accounts:signInWithPhoneNumber",Zr(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ni(e,"POST","/v1/accounts:signInWithPhoneNumber",Zr(e,t));if(n.temporaryProof)throw oi(e,"account-exists-with-different-credential",n);return n}(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return async function(e,t){return ni(e,"POST","/v1/accounts:signInWithPhoneNumber",Zr(e,{...t,operation:"REAUTH"}),fa)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ma({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}class ga{constructor(e){const t=Kt(Gt(e)),n=t.apiKey??null,r=t.oobCode??null,i=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(t.mode??null);Fr(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=function(e){const t=Kt(Gt(e)).link,n=t?Kt(Gt(t)).deep_link_id:null,r=Kt(Gt(e)).deep_link_id;return(r?Kt(Gt(r)).link:null)||r||n||t||e}(e);try{return new ga(t)}catch{return null}}}class ya{constructor(){this.providerId=ya.PROVIDER_ID}static credential(e,t){return ua._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ga.parseLink(t);return Fr(n,"argument-error"),ua._fromEmailAndCode(e,n.code,n.tenantId)}}ya.PROVIDER_ID="password",ya.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ya.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class wa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}class ba extends wa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class va extends ba{constructor(){super("facebook.com")}static credential(e){return ha._fromParams({providerId:va.PROVIDER_ID,signInMethod:va.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return va.credentialFromTaggedObject(e)}static credentialFromError(e){return va.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return va.credential(t.oauthAccessToken)}catch{return null}}}va.FACEBOOK_SIGN_IN_METHOD="facebook.com",va.PROVIDER_ID="facebook.com";class xa extends ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ha._fromParams({providerId:xa.PROVIDER_ID,signInMethod:xa.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xa.credentialFromTaggedObject(e)}static credentialFromError(e){return xa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return xa.credential(n,r)}catch{return null}}}xa.GOOGLE_SIGN_IN_METHOD="google.com",xa.PROVIDER_ID="google.com";class ka extends ba{constructor(){super("github.com")}static credential(e){return ha._fromParams({providerId:ka.PROVIDER_ID,signInMethod:ka.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ka.credentialFromTaggedObject(e)}static credentialFromError(e){return ka.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ka.credential(t.oauthAccessToken)}catch{return null}}}ka.GITHUB_SIGN_IN_METHOD="github.com",ka.PROVIDER_ID="github.com";class za extends ba{constructor(){super("twitter.com")}static credential(e,t){return ha._fromParams({providerId:za.PROVIDER_ID,signInMethod:za.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return za.credentialFromTaggedObject(e)}static credentialFromError(e){return za.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return za.credential(n,r)}catch{return null}}}async function Sa(e,t){return ni(e,"POST","/v1/accounts:signUp",Zr(e,t))}za.TWITTER_SIGN_IN_METHOD="twitter.com",za.PROVIDER_ID="twitter.com";class Ea{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=await ki._fromIdTokenResponse(e,n,r),a=ja(n);return new Ea({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ja(n);return new Ea({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ja(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}class _a extends Ft{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,_a.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new _a(e,t,n,r)}}function Ta(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw _a._fromErrorAndOperation(e,n,t,r);throw n})}async function Ca(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=await mi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ea._forOperation(e,"link",r)}async function Ia(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{auth:r}=e;if(hr(r.app))return Promise.reject(Lr(r));const i="reauthenticate";try{const a=await mi(e,Ta(r,i,t,e),n);Fr(a.idToken,r,"internal-error");const o=pi(a.idToken);Fr(o,r,"internal-error");const{sub:s}=o;return Fr(e.uid===s,r,"user-mismatch"),Ea._forOperation(e,i,a)}catch(oI){throw"auth/user-not-found"===oI?.code&&Nr(r,"user-mismatch"),oI}}async function Aa(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(hr(e.app))return Promise.reject(Lr(e));const r="signIn",i=await Ta(e,r,t),a=await Ea._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function Pa(e,t){return Aa(Hi(e),t)}async function Ra(e,t){return Ia(Yt(e),t)}function Na(e,t,n){Fr(n.url?.length>0,e,"invalid-continue-uri"),Fr("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),Fr("undefined"===typeof n.linkDomain||n.linkDomain.length>0,e,"invalid-hosting-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.linkDomain=n.linkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Fr(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(Fr(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}async function Da(e){const t=Hi(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Oa(e,t){let{displayName:n,photoURL:r}=t;if(void 0===n&&void 0===r)return;const i=Yt(e),a={idToken:await i.getIdToken(),displayName:n,photoUrl:r,returnSecureToken:!0},o=await mi(i,async function(e,t){return ei(e,"POST","/v1/accounts:update",t)}(i.auth,a));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const s=i.providerData.find(e=>{let{providerId:t}=e;return"password"===t});s&&(s.displayName=i.displayName,s.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}async function La(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const a=await mi(e,async function(e,t){return ei(e,"POST","/v1/accounts:update",t)}(r,i));await e._updateTokensIfNecessary(a,!0)}function Ma(e,t){return ei(e,"POST","/v2/accounts/mfaEnrollment:start",Zr(e,t))}new WeakMap;const $a="__sak";class Fa{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($a,"1"),this.storage.removeItem($a),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class Ua extends Fa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$i(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Mi()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ua.type="LOCAL";const Va=Ua;function Ba(e){const t=e.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),n=RegExp(`${t}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function Ha(e){return`${"http:"===window.location.protocol?"__dev_":"__HOST-"}FIREBASE_${e.split(":")[3]}`}class Wa{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(void 0===typeof window)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return!("boolean"===typeof isSecureContext&&!isSecureContext)&&("undefined"!==typeof navigator&&"undefined"!==typeof document&&(navigator.cookieEnabled??!0))}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=Ha(e);if(window.cookieStore){const e=await window.cookieStore.get(t);return e?.value}return Ba(t)}async _remove(e){if(!this._isAvailable())return;if(!await this._get(e))return;const t=Ha(e);document.cookie=`${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const n=Ha(e);if(window.cookieStore){const e=e=>{const r=e.changed.find(e=>e.name===n);r&&t(r.value);e.deleted.find(e=>e.name===n)&&t(null)},r=()=>window.cookieStore.removeEventListener("change",e);return this.listenerUnsubscribes.set(t,r),window.cookieStore.addEventListener("change",e)}let r=Ba(n);const i=setInterval(()=>{const e=Ba(n);e!==r&&(t(e),r=e)},1e3);this.listenerUnsubscribes.set(t,()=>clearInterval(i))}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}Wa.type="COOKIE";class Ka extends Fa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ka.type="SESSION";const Ga=Ka;class qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new qa(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(a).map(async e=>e(t.origin,i)),s=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}function Qa(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}qa.receivers=[];class Ya{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50;const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((o,s)=>{const l=Qa("",20);r.port1.start();const c=setTimeout(()=>{s(new Error("unsupported_event"))},n);a={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{s(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),s(new Error("invalid_response"))}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}function Ja(){return window}function Xa(){return"undefined"!==typeof Ja().WorkerGlobalScope&&"function"===typeof Ja().importScripts}const Za="firebaseLocalStorageDb",eo="firebaseLocalStorage",to="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ro(e,t){return e.transaction([eo],t?"readwrite":"readonly").objectStore(eo)}function io(){const e=indexedDB.open(Za,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(eo,{keyPath:to})}catch(oI){n(oI)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(eo)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Za);return new no(e).toPromise()}(),t(await io()))})})}async function ao(e,t,n){const r=ro(e,!0).put({[to]:t,value:n});return new no(r).toPromise()}function oo(e,t){const n=ro(e,!0).delete(t);return new no(n).toPromise()}class so{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await io()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(oI){if(t++>3)throw oI;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qa._getInstance(Xa()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Ya(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await io();return await ao(e,$a,"1"),await oo(e,$a),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ao(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=ro(e,!1).get(t),r=await new no(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>oo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=ro(e,!1).getAll();return new no(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}so.type="LOCAL";const lo=so;function co(e,t){return ei(e,"POST","/v2/accounts/mfaSignIn:start",Zr(e,t))}qi("rcb"),new Gr(3e4,6e4);const uo="recaptcha";async function ho(e,t,n){if(!e._getRecaptchaConfig())try{await ta(e)}catch(r){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(r="string"===typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){Fr("enroll"===t.type,e,"internal-error");const i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},a=ea(e,i,"mfaSmsEnrollment",async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===Ji){Fr(n?.type===uo,e,"argument-error");return Ma(e,await po(e,t,n))}return Ma(e,t)},"PHONE_PROVIDER");return(await a.catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo}{Fr("signin"===t.type,e,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;Fr(i,e,"missing-multi-factor-info");const a={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},o=ea(e,a,"mfaSmsSignIn",async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===Ji){Fr(n?.type===uo,e,"argument-error");return co(e,await po(e,t,n))}return co(e,t)},"PHONE_PROVIDER");return(await o.catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}{const t={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=ea(e,t,"sendVerificationCode",async(e,t)=>{if(t.captchaResponse===Ji){Fr(n?.type===uo,e,"argument-error");return pa(e,await po(e,t,n))}return pa(e,t)},"PHONE_PROVIDER");return(await i.catch(e=>Promise.reject(e))).sessionInfo}}finally{n?._reset()}}async function po(e,t,n){Fr(n.type===uo,e,"argument-error");const r=await n.verify();Fr("string"===typeof r,e,"argument-error");const i={...t};if("phoneEnrollmentInfo"in i){const e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,a=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:a}}),i}if("phoneSignInInfo"in i){const e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}class fo{constructor(e){this.providerId=fo.PROVIDER_ID,this.auth=Hi(e)}verifyPhoneNumber(e,t){return ho(this.auth,e,Yt(t))}static credential(e,t){return ma._fromVerification(e,t)}static credentialFromResult(e){const t=e;return fo.credentialFromTaggedObject(t)}static credentialFromError(e){return fo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t)return null;const{phoneNumber:n,temporaryProof:r}=t;return n&&r?ma._fromTokenResponse(n,r):null}}function mo(e,t){return t?Si(t):(Fr(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}fo.PROVIDER_ID="phone",fo.PHONE_SIGN_IN_METHOD="phone";class go extends aa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return da(e,this._buildIdpRequest())}_linkToIdToken(e,t){return da(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return da(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yo(e){return Aa(e.auth,new go(e),e.bypassAuthState)}function wo(e){const{auth:t,user:n}=e;return Fr(n,t,"internal-error"),Ia(n,new go(e),e.bypassAuthState)}async function bo(e){const{auth:t,user:n}=e;return Fr(n,t,"internal-error"),Ca(n,new go(e),e.bypassAuthState)}class vo{constructor(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(oI){this.reject(oI)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:o}=e;if(a)return void this.reject(a);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(oI){this.reject(oI)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yo;case"linkViaPopup":case"linkViaRedirect":return bo;case"reauthViaPopup":case"reauthViaRedirect":return wo;default:Nr(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const xo=new Gr(2e3,1e4);async function ko(e,t,n){if(hr(e.app))return Promise.reject(Dr(e,"operation-not-supported-in-this-environment"));const r=Hi(e);Mr(e,t,wa);const i=mo(r,n);return new zo(r,"signInViaPopup",t,i).executeNotNull()}class zo extends vo{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,zo.currentPopupAction&&zo.currentPopupAction.cancel(),zo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Fr(e,this.auth,"internal-error"),e}async onExecution(){Vr(1===this.filter.length,"Popup operations only handle one event");const e=Qa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zo.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dr(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,xo.get())};e()}}zo.currentPopupAction=null;const So=new Map;class Eo extends vo{constructor(e,t){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,arguments.length>2&&void 0!==arguments[2]&&arguments[2]),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=To(t),r=_o(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(oI){e=()=>Promise.reject(oI)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function jo(e,t){So.set(e._key(),t)}function _o(e){return Si(e._redirectPersistence)}function To(e){return _i("pendingRedirect",e.config.apiKey,e.name)}async function Co(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(hr(e.app))return Promise.reject(Lr(e));const r=Hi(e),i=mo(r,t),a=new Eo(r,i,n),o=await a.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Io{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Po(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Po(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Dr(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ao(e))}saveEventToCache(e){this.cachedEventUids.add(Ao(e)),this.lastProcessedEventTime=Date.now()}}function Ao(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Po(e){let{type:t,error:n}=e;return"unknown"===t&&"auth/no-auth-event"===n?.code}const Ro=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,No=/^https?/;async function Do(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e){return ei(e,"GET","/v1/projects",arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})}(e);for(const n of t)try{if(Oo(n))return}catch{}Nr(e,"unauthorized-domain")}function Oo(e){const t=Br(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!No.test(n))return!1;if(Ro.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}const Lo=new Gr(3e4,6e4);function Mo(){const e=Ja().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function $o(e){return new Promise((t,n)=>{function r(){Mo(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mo(),n(Dr(e,"network-request-failed"))},timeout:Lo.get()})}if(Ja().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!Ja().gapi?.load){const t=qi("iframefcb");return Ja()[t]=()=>{gapi.load?r():n(Dr(e,"network-request-failed"))},Gi(`${Ki.gapiScript}?onload=${t}`).catch(e=>n(e))}r()}}).catch(e=>{throw Fo=null,e})}let Fo=null;const Uo=new Gr(5e3,15e3),Vo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ho(e){const t=e.config;Fr(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?qr(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:mr},i=Bo.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Wt(r).slice(1)}`}async function Wo(e){const t=await function(e){return Fo=Fo||$o(e),Fo}(e),n=Ja().gapi;return Fr(n,e,"internal-error"),t.open({where:document.body,url:Ho(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vo,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Dr(e,"network-request-failed"),a=Ja().setTimeout(()=>{r(i)},Uo.get());function o(){Ja().clearTimeout(a),n(t)}t.ping(o).then(o,()=>{r(i)})}))}const Ko={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Go{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(oI){}}}function qo(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600;const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l={...Ko,width:r.toString(),height:i.toString(),top:a,left:o},c=Ot().toLowerCase();n&&(s=Pi(c)?"_blank":n),Ii(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce((e,t)=>{let[n,r]=t;return`${e}${n}=${r},`},"");if(function(){return Li(arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot())&&!!window.navigator?.standalone}(c)&&"_self"!==s)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",s),new Go(null);const d=window.open(t||"",s,u);Fr(d,e,"popup-blocked");try{d.focus()}catch(oI){}return new Go(d)}const Qo="__/auth/handler",Yo="emulator/auth/handler",Jo=encodeURIComponent("fac");async function Xo(e,t,n,r,i,a){Fr(e.config.authDomain,e,"auth-domain-config-required"),Fr(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:mr,eventId:i};if(t instanceof wa){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))o[e]=t}if(t instanceof ba){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const u of Object.keys(s))void 0===s[u]&&delete s[u];const l=await e._getAppCheckToken(),c=l?`#${Jo}=${encodeURIComponent(l)}`:"";return`${function(e){let{config:t}=e;if(!t.emulator)return`https://${t.authDomain}/${Qo}`;return qr(t,Yo)}(e)}?${Wt(s).slice(1)}${c}`}const Zo="webStorageSupport";const es=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ga,this._completeRedirectFn=Co,this._overrideRedirectResult=jo}async _openPopup(e,t,n,r){Vr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return qo(e,await Xo(e,t,n,Br(),r),Qa())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Ja().location.href=e}(await Xo(e,t,n,Br(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Vr(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Wo(e),n=new Io(e);return t.register("authEvent",t=>{Fr(t?.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zo,{type:Zo},n=>{const r=n?.[0]?.[Zo];void 0!==r&&t(!!r),Nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Do(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return $i()||Ai()||Li()}};var ts="@firebase/auth",ns="1.13.0";class rs{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Fr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const is=Nt("authIdTokenMaxAge")||300;let as=null;var os;!function(e){Ki=e}({loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Dr("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),os="Browser",ur(new Zt("auth",(e,t)=>{let{options:n}=t;const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;Fr(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:s,clientPlatform:os,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fi(os)},c=new Bi(r,i,a,l);return function(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Si);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),ur(new Zt("auth-internal",e=>(e=>new rs(e))(Hi(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),wr(ts,ns,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(os)),wr(ts,ns,"esm2020");wr("firebase","12.12.0","app");var ss,ls,cs="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:{},us={};(function(){var e;function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(e,t,n){n||(n=0);const r=Array(16);if("string"===typeof t)for(var i=0;i<16;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;i<16;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];let a,o=e.g[3];a=t+(o^n&(i^o))+r[0]+3614090360&4294967295,a=o+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[1]+3905402710&4294967295,o=t+(a<<12&4294967295|a>>>20),a=i+(n^o&(t^n))+r[2]+606105819&4294967295,a=n+(t^(i=o+(a<<17&4294967295|a>>>15))&(o^t))+r[3]+3250441966&4294967295,a=t+(o^(n=i+(a<<22&4294967295|a>>>10))&(i^o))+r[4]+4118548399&4294967295,a=o+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[5]+1200080426&4294967295,o=t+(a<<12&4294967295|a>>>20),a=i+(n^o&(t^n))+r[6]+2821735955&4294967295,a=n+(t^(i=o+(a<<17&4294967295|a>>>15))&(o^t))+r[7]+4249261313&4294967295,a=t+(o^(n=i+(a<<22&4294967295|a>>>10))&(i^o))+r[8]+1770035416&4294967295,a=o+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[9]+2336552879&4294967295,o=t+(a<<12&4294967295|a>>>20),a=i+(n^o&(t^n))+r[10]+4294925233&4294967295,a=n+(t^(i=o+(a<<17&4294967295|a>>>15))&(o^t))+r[11]+2304563134&4294967295,a=t+(o^(n=i+(a<<22&4294967295|a>>>10))&(i^o))+r[12]+1804603682&4294967295,a=o+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[13]+4254626195&4294967295,o=t+(a<<12&4294967295|a>>>20),a=i+(n^o&(t^n))+r[14]+2792965006&4294967295,a=n+(t^(i=o+(a<<17&4294967295|a>>>15))&(o^t))+r[15]+1236535329&4294967295,a=t+(i^o&((n=i+(a<<22&4294967295|a>>>10))^i))+r[1]+4129170786&4294967295,a=o+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[6]+3225465664&4294967295,o=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(o^t))+r[11]+643717713&4294967295,a=n+(o^t&((i=o+(a<<14&4294967295|a>>>18))^o))+r[0]+3921069994&4294967295,a=t+(i^o&((n=i+(a<<20&4294967295|a>>>12))^i))+r[5]+3593408605&4294967295,a=o+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[10]+38016083&4294967295,o=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(o^t))+r[15]+3634488961&4294967295,a=n+(o^t&((i=o+(a<<14&4294967295|a>>>18))^o))+r[4]+3889429448&4294967295,a=t+(i^o&((n=i+(a<<20&4294967295|a>>>12))^i))+r[9]+568446438&4294967295,a=o+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[14]+3275163606&4294967295,o=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(o^t))+r[3]+4107603335&4294967295,a=n+(o^t&((i=o+(a<<14&4294967295|a>>>18))^o))+r[8]+1163531501&4294967295,a=t+(i^o&((n=i+(a<<20&4294967295|a>>>12))^i))+r[13]+2850285829&4294967295,a=o+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[2]+4243563512&4294967295,o=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(o^t))+r[7]+1735328473&4294967295,a=n+(o^t&((i=o+(a<<14&4294967295|a>>>18))^o))+r[12]+2368359562&4294967295,a=t+((n=i+(a<<20&4294967295|a>>>12))^i^o)+r[5]+4294588738&4294967295,a=o+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[8]+2272392833&4294967295,o=t+(a<<11&4294967295|a>>>21),a=i+(o^t^n)+r[11]+1839030562&4294967295,a=n+((i=o+(a<<16&4294967295|a>>>16))^o^t)+r[14]+4259657740&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^o)+r[1]+2763975236&4294967295,a=o+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[4]+1272893353&4294967295,o=t+(a<<11&4294967295|a>>>21),a=i+(o^t^n)+r[7]+4139469664&4294967295,a=n+((i=o+(a<<16&4294967295|a>>>16))^o^t)+r[10]+3200236656&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^o)+r[13]+681279174&4294967295,a=o+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[0]+3936430074&4294967295,o=t+(a<<11&4294967295|a>>>21),a=i+(o^t^n)+r[3]+3572445317&4294967295,a=n+((i=o+(a<<16&4294967295|a>>>16))^o^t)+r[6]+76029189&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^o)+r[9]+3654602809&4294967295,a=o+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[12]+3873151461&4294967295,o=t+(a<<11&4294967295|a>>>21),a=i+(o^t^n)+r[15]+530742520&4294967295,a=n+((i=o+(a<<16&4294967295|a>>>16))^o^t)+r[2]+3299628645&4294967295,a=t+(i^((n=i+(a<<23&4294967295|a>>>9))|~o))+r[0]+4096336452&4294967295,a=o+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[7]+1126891415&4294967295,o=t+(a<<10&4294967295|a>>>22),a=i+(t^(o|~n))+r[14]+2878612391&4294967295,a=n+(o^((i=o+(a<<15&4294967295|a>>>17))|~t))+r[5]+4237533241&4294967295,a=t+(i^((n=i+(a<<21&4294967295|a>>>11))|~o))+r[12]+1700485571&4294967295,a=o+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[3]+2399980690&4294967295,o=t+(a<<10&4294967295|a>>>22),a=i+(t^(o|~n))+r[10]+4293915773&4294967295,a=n+(o^((i=o+(a<<15&4294967295|a>>>17))|~t))+r[1]+2240044497&4294967295,a=t+(i^((n=i+(a<<21&4294967295|a>>>11))|~o))+r[8]+1873313359&4294967295,a=o+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[15]+4264355552&4294967295,o=t+(a<<10&4294967295|a>>>22),a=i+(t^(o|~n))+r[6]+2734768916&4294967295,a=n+(o^((i=o+(a<<15&4294967295|a>>>17))|~t))+r[13]+1309151649&4294967295,a=t+(i^((n=i+(a<<21&4294967295|a>>>11))|~o))+r[4]+4149444226&4294967295,a=o+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[11]+3174756917&4294967295,o=t+(a<<10&4294967295|a>>>22),a=i+(t^(o|~n))+r[2]+718787259&4294967295,a=n+(o^((i=o+(a<<15&4294967295|a>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}function r(e,t){this.h=t;const n=[];let r=!0;for(let i=e.length-1;i>=0;i--){const a=0|e[i];r&&a==t||(n[i]=a,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}(t,function(){this.blockSize=-1}),t.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.v=function(e,t){void 0===t&&(t=e.length);const r=t-this.blockSize,i=this.C;let a=this.h,o=0;for(;o<t;){if(0==a)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"===typeof e){for(;o<t;)if(i[a++]=e.charCodeAt(o++),a==this.blockSize){n(this,i),a=0;break}}else for(;o<t;)if(i[a++]=e[o++],a==this.blockSize){n(this,i),a=0;break}}this.h=a,this.o+=t},t.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var n=e.length-8;n<e.length;++n)e[n]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)e[t++]=this.g[n]>>>r&255;return e};var i={};function a(e){return-128<=e&&e<128?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],e<0?-1:0)}):new r([0|e],e<0?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return s;if(e<0)return h(o(-e));const t=[];let n=1;for(let r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new r(t,0)}var s=a(0),l=a(1),c=a(16777216);function u(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function d(e){return-1==e.h}function h(e){const t=e.g.length,n=[];for(let r=0;r<t;r++)n[r]=~e.g[r];return new r(n,~e.h).add(l)}function p(e,t){return e.add(h(t))}function f(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(u(t))throw Error("division by zero");if(u(e))return new m(s,s);if(d(e))return t=g(h(e),t),new m(h(t.g),h(t.h));if(d(t))return t=g(e,h(t)),new m(h(t.g),t.h);if(e.g.length>30){if(d(e)||d(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;r.l(e)<=0;)n=y(n),r=y(r);var i=w(n,1),a=w(r,1);for(r=w(r,2),n=w(n,2);!u(r);){var c=a.add(r);c.l(e)<=0&&(i=i.add(n),a=c),r=w(r,1),n=w(n,1)}return t=p(e,i.j(t)),new m(i,t)}for(i=s;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=(r=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,r-48),c=(a=o(n)).j(t);d(c)||c.l(e)>0;)c=(a=o(n-=r)).j(t);u(a)&&(a=l),i=i.add(a),e=p(e,c)}return new m(i,e)}function y(e){const t=e.g.length+1,n=[];for(let r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new r(n,e.h)}function w(e,t){const n=t>>5;t%=32;const i=e.g.length-n,a=[];for(let r=0;r<i;r++)a[r]=t>0?e.i(r+n)>>>t|e.i(r+n+1)<<32-t:e.i(r+n);return new r(a,e.h)}(e=r.prototype).m=function(){if(d(this))return-h(this).m();let e=0,t=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);e+=(r>=0?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(d(this))return"-"+h(this).toString(e);const t=o(Math.pow(e,6));var n=this;let r="";for(;;){const i=g(n,t).g;let a=(((n=p(n,i.j(t))).g.length>0?n.g[0]:n.h)>>>0).toString(e);if(u(n=i))return a+r;for(;a.length<6;)a="0"+a;r=a+r}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return d(e=p(this,e))?-1:u(e)?0:1},e.abs=function(){return d(this)?h(this):this},e.add=function(e){const t=Math.max(this.g.length,e.g.length),n=[];let i=0;for(let r=0;r<=t;r++){let t=i+(65535&this.i(r))+(65535&e.i(r)),a=(t>>>16)+(this.i(r)>>>16)+(e.i(r)>>>16);i=a>>>16,t&=65535,a&=65535,n[r]=a<<16|t}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(u(this)||u(e))return s;if(d(this))return d(e)?h(this).j(h(e)):h(h(this).j(e));if(d(e))return h(this.j(h(e)));if(this.l(c)<0&&e.l(c)<0)return o(this.m()*e.m());const t=this.g.length+e.g.length,n=[];for(var i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(let t=0;t<e.g.length;t++){const r=this.i(i)>>>16,a=65535&this.i(i),o=e.i(t)>>>16,s=65535&e.i(t);n[2*i+2*t]+=a*s,f(n,2*i+2*t),n[2*i+2*t+1]+=r*s,f(n,2*i+2*t+1),n[2*i+2*t+1]+=a*o,f(n,2*i+2*t+1),n[2*i+2*t+2]+=r*o,f(n,2*i+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new r(n,0)},e.B=function(e){return g(this,e).h},e.and=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new r(n,this.h&e.h)},e.or=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new r(n,this.h|e.h)},e.xor=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.A,t.prototype.reset=t.prototype.u,t.prototype.update=t.prototype.v,ls=us.Md5=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return h(e(t.substring(1),n));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const r=o(Math.pow(n,8));let i=s;for(let s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s);const e=parseInt(t.substring(s,s+a),n);a<8?(a=o(Math.pow(n,a)),i=i.j(a).add(o(e))):(i=i.j(r),i=i.add(o(e)))}return i},ss=us.Integer=r}).apply("undefined"!==typeof cs?cs:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var ds,hs,ps,fs,ms,gs,ys,ws,bs="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:{},vs={};(function(){var e,t=Object.defineProperty;var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof bs&&bs];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function r(e,r){if(r)e:{var i=n;e=e.split(".");for(var a=0;a<e.length-1;a++){var o=e[a];if(!(o in i))break e;i=i[o]}(r=r(a=i[e=e[e.length-1]]))!=a&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}r("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(e){return e||function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push([t,e[t]]);return n}});var i=i||{},a=this||self;function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function s(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){return(l=s).apply(null,arguments)}function c(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function u(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}var d="undefined"!==typeof AsyncContext&&"function"===typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function h(e){const t=e.length;if(t>0){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function p(e,t){for(let r=1;r<arguments.length;r++){const t=arguments[r];var n=typeof t;if("array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length){n=e.length||0;const r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function f(e){a.setTimeout(()=>{throw e},0)}function m(){var e=v;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var g=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new y,e=>e.reset());class y{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let w,b=!1,v=new class{constructor(){this.h=this.g=null}add(e,t){const n=g.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},x=()=>{const e=Promise.resolve(void 0);w=()=>{e.then(k)}};function k(){for(var e;e=m();){try{e.h.call(e.g)}catch(iw){f(iw)}var t=g;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}b=!1}function z(){this.u=this.u,this.C=this.C}function S(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}z.prototype.u=!1,z.prototype.dispose=function(){this.u||(this.u=!0,this.N())},z.prototype[Symbol.dispose]=function(){this.dispose()},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},S.prototype.h=function(){this.defaultPrevented=!0};var E=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(iw){}return e}();function j(e){return/^[\s\xa0]*$/.test(e)}function _(e,t){S.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}u(_,S),_.prototype.init=function(e,t){const n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement)),this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&_.Z.h.call(this)},_.prototype.h=function(){_.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var T="closure_listenable_"+(1e6*Math.random()|0),C=0;function I(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++C,this.da=this.fa=!1}function A(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function P(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function R(e){const t={};for(const n in e)t[n]=e[n];return t}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<N.length;t++)n=N[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function O(e){this.src=e,this.g={},this.h=0}function L(e,t){const n=t.type;if(n in e.g){var r,i=e.g[n],a=Array.prototype.indexOf.call(i,t,void 0);(r=a>=0)&&Array.prototype.splice.call(i,a,1),r&&(A(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function M(e,t,n,r){for(let i=0;i<e.length;++i){const a=e[i];if(!a.da&&a.listener==t&&a.capture==!!n&&a.ha==r)return i}return-1}O.prototype.add=function(e,t,n,r,i){const a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);const o=M(e,t,r,i);return o>-1?(t=e[o],n||(t.fa=!1)):((t=new I(t,this.src,a,!!r,i)).fa=n,e.push(t)),t};var $="closure_lm_"+(1e6*Math.random()|0),F={};function U(e,t,n,r,i){if(r&&r.once)return B(e,t,n,r,i);if(Array.isArray(t)){for(let a=0;a<t.length;a++)U(e,t[a],n,r,i);return null}return n=Y(n),e&&e[T]?e.J(t,n,o(r)?!!r.capture:!!r,i):V(e,t,n,!1,r,i)}function V(e,t,n,r,i,a){if(!t)throw Error("Invalid event type");const s=o(i)?!!i.capture:!!i;let l=q(e);if(l||(e[$]=l=new O(e)),(n=l.add(t,n,r,s,a)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=G;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)E||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(K(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function B(e,t,n,r,i){if(Array.isArray(t)){for(let a=0;a<t.length;a++)B(e,t[a],n,r,i);return null}return n=Y(n),e&&e[T]?e.K(t,n,o(r)?!!r.capture:!!r,i):V(e,t,n,!0,r,i)}function H(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)H(e,t[a],n,r,i);else r=o(r)?!!r.capture:!!r,n=Y(n),e&&e[T]?(e=e.i,(a=String(t).toString())in e.g&&((n=M(t=e.g[a],n,r,i))>-1&&(A(t[n]),Array.prototype.splice.call(t,n,1),0==t.length&&(delete e.g[a],e.h--)))):e&&(e=q(e))&&(t=e.g[t.toString()],e=-1,t&&(e=M(t,n,r,i)),(n=e>-1?t[e]:null)&&W(n))}function W(e){if("number"!==typeof e&&e&&!e.da){var t=e.src;if(t&&t[T])L(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(K(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=q(t))?(L(n,e),0==n.h&&(n.src=null,t[$]=null)):A(e)}}}function K(e){return e in F?F[e]:F[e]="on"+e}function G(e,t){if(e.da)e=!0;else{t=new _(t,this);const n=e.listener,r=e.ha||e.src;e.fa&&W(e),e=n.call(r,t)}return e}function q(e){return(e=e[$])instanceof O?e:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function Y(e){return"function"===typeof e?e:(e[Q]||(e[Q]=function(t){return e.handleEvent(t)}),e[Q])}function J(){z.call(this),this.i=new O(this),this.M=this,this.G=null}function X(e,t){var n,r=e.G;if(r)for(n=[];r;r=r.G)n.push(r);if(e=e.M,r=t.type||t,"string"===typeof t)t=new S(t,e);else if(t instanceof S)t.target=t.target||e;else{var i=t;D(t=new S(r,e),i)}let a,o;if(i=!0,n)for(o=n.length-1;o>=0;o--)a=t.g=n[o],i=Z(a,r,!0,t)&&i;if(a=t.g=e,i=Z(a,r,!0,t)&&i,i=Z(a,r,!1,t)&&i,n)for(o=0;o<n.length;o++)a=t.g=n[o],i=Z(a,r,!1,t)&&i}function Z(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();let i=!0;for(let a=0;a<t.length;++a){const o=t[a];if(o&&!o.da&&o.capture==n){const t=o.listener,n=o.ha||o.src;o.fa&&L(e.i,o),i=!1!==t.call(n,r)&&i}}return i&&!r.defaultPrevented}function ee(e){e.g=function(e,t){if("function"!==typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=l(e.handleEvent,e)}return Number(t)>2147483647?-1:a.setTimeout(e,t||0)}(()=>{e.g=null,e.i&&(e.i=!1,ee(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}u(J,z),J.prototype[T]=!0,J.prototype.removeEventListener=function(e,t,n,r){H(this,e,t,n,r)},J.prototype.N=function(){if(J.Z.N.call(this),this.i){var e=this.i;for(const t in e.g){const n=e.g[t];for(let e=0;e<n.length;e++)A(n[e]);delete e.g[t],e.h--}}this.G=null},J.prototype.J=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},J.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class te extends z{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ee(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ne(e){z.call(this),this.h=e,this.g={}}u(ne,z);var re=[];function ie(e){P(e.g,function(e,t){this.g.hasOwnProperty(t)&&W(e)},e),e.g={}}ne.prototype.N=function(){ne.Z.N.call(this),ie(this)},ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ae=a.JSON.stringify,oe=a.JSON.parse,se=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function le(){}function ce(){}var ue={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function de(){S.call(this,"d")}function he(){S.call(this,"c")}u(de,S),u(he,S);var pe={},fe=null;function me(){return fe=fe||new J}function ge(e){S.call(this,pe.Ia,e)}function ye(e){const t=me();X(t,new ge(t))}function we(e,t){S.call(this,pe.STAT_EVENT,e),this.stat=t}function be(e){const t=me();X(t,new we(t,e))}function ve(e,t){S.call(this,pe.Ja,e),this.size=t}function xe(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){e()},t)}function ke(){this.g=!0}function ze(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{const a=JSON.parse(t);if(a)for(e=0;e<a.length;e++)if(Array.isArray(a[e])){var n=a[e];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(let e=1;e<r.length;e++)r[e]=""}}}return ae(a)}catch(uw){return t}}(e,n)+(r?" "+r:"")})}pe.Ia="serverreachability",u(ge,S),pe.STAT_EVENT="statevent",u(we,S),pe.Ja="timingevent",u(ve,S),ke.prototype.ua=function(){this.g=!1},ke.prototype.info=function(){};var Se,Ee={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},je={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function _e(){}function Te(e){return encodeURIComponent(String(e))}function Ce(e){var t=1;e=e.split(":");const n=[];for(;t>0&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ie(e,t,n,r){this.j=e,this.i=t,this.l=n,this.S=r||1,this.V=new ne(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ae}function Ae(){this.i=null,this.g="",this.h=!1}u(_e,le),_e.prototype.g=function(){return new XMLHttpRequest},Se=new _e;var Pe={},Re={};function Ne(e,t,n){e.M=1,e.A=at(et(t)),e.u=n,e.R=!0,De(e,null)}function De(e,t){e.F=Date.now(),Me(e),e.B=et(e.A);var n=e.B,r=e.S;Array.isArray(r)||(r=[String(r)]),bt(n.i,"t",r),e.C=0,n=e.j.L,e.h=new Ae,e.g=on(e.j,n?t:null,!e.u),e.P>0&&(e.O=new te(l(e.Y,e,e.g),e.P)),t=e.V,n=e.g,r=e.ba;var i="readystatechange";Array.isArray(i)||(i&&(re[0]=i.toString()),i=re);for(let a=0;a<i.length;a++){const e=U(n,i[a],r||t.handleEvent,!1,t.h||t);if(!e)break;t.g[e.key]=e}t=e.J?R(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),ye(),function(e,t,n,r,i,a){e.info(function(){if(e.g)if(a){var o="",s=a.split("&");for(let e=0;e<s.length;e++){var l=s[e].split("=");if(l.length>1){const e=l[0];l=l[1];const t=e.split("_");o=t.length>=2&&"type"==t[1]?o+(e+"=")+l+"&":o+(e+"=redacted&")}}}else o=null;else o=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.v,e.B,e.l,e.S,e.u)}function Oe(e){return!!e.g&&("GET"==e.v&&2!=e.M&&e.j.Aa)}function Le(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Re:(n=Number(t.substring(n,r)),isNaN(n)?Pe:(r+=1)+n>t.length?Re:(t=t.slice(r,r+n),e.C=r+n,t))}function Me(e){e.T=Date.now()+e.H,$e(e,e.H)}function $e(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=xe(l(e.aa,e),t)}function Fe(e){e.D&&(a.clearTimeout(e.D),e.D=null)}function Ue(e){0==e.j.I||e.K||en(e.j,e)}function Ve(e){Fe(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,ie(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function Be(e,t){try{var n=e.j;if(0!=n.I&&(n.g==e||qe(n.h,e)))if(!e.L&&qe(n.h,e)&&3==n.I){try{var r=n.Ba.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.v){if(n.g){if(!(n.g.F+3e3<e.F))break e;Zt(n),Bt(n)}Yt(n),be(18)}}else n.xa=i[1],0<n.xa-n.K&&i[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=xe(l(n.Va,n),6e3));Ge(n.h)<=1&&n.ta&&(n.ta=void 0)}else nn(n,11)}else if((e.L||n.g==e)&&Zt(n),!j(t))for(i=n.Ba.g.parse(t),t=0;t<i.length;t++){let l=i[t];const u=l[0];if(!(u<=n.K))if(n.K=u,l=l[1],2==n.I)if("c"==l[0]){n.M=l[1],n.ba=l[2];const t=l[3];null!=t&&(n.ka=t,n.j.info("VER="+n.ka));const i=l[4];null!=i&&(n.za=i,n.j.info("SVER="+n.za));const u=l[5];null!=u&&"number"===typeof u&&u>0&&(r=1.5*u,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var a=r.h;a.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(a.j=a.l,a.g=new Set,a.h&&(Qe(a,a.h),a.h=null))}if(r.G){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.wa=e,it(r.J,r.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info("Handshake RTT: "+n.T+"ms"));var o=e;if((r=n).na=an(r,r.L?r.ba:null,r.W),o.L){Ye(r.h,o);var s=o,c=r.O;c&&(s.H=c),s.D&&(Fe(s),Me(s)),r.g=o}else Qt(r);n.i.length>0&&Wt(n)}else"stop"!=l[0]&&"close"!=l[0]||nn(n,7);else 3==n.I&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?nn(n,7):Vt(n):"noop"!=l[0]&&n.l&&n.l.qa(l),n.A=0)}ye()}catch(u){}}Ie.prototype.ba=function(e){e=e.target;const t=this.O;t&&3==Mt(e)?t.j():this.Y(e)},Ie.prototype.Y=function(e){try{if(e==this.g)e:{const l=Mt(this.g),c=this.g.ya();this.g.ca();if(!(l<3)&&(3!=l||this.g&&(this.h.h||this.g.la()||$t(this.g)))){this.K||4!=l||7==c||ye(),Fe(this);var t=this.g.ca();this.X=t;var n=function(e){if(!Oe(e))return e.g.la();const t=$t(e.g);if(""===t)return"";let n="";const r=t.length,i=4==Mt(e.g);if(!e.h.i){if("undefined"===typeof TextDecoder)return Ve(e),Ue(e),"";e.h.i=new a.TextDecoder}for(let a=0;a<r;a++)e.h.h=!0,n+=e.h.i.decode(t[a],{stream:!(i&&a==r-1)});return t.length=0,e.h.g+=n,e.C=0,e.h.g}(this);if(this.o=200==t,function(e,t,n,r,i,a,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+a+" "+o})}(this.i,this.v,this.B,this.l,this.S,l,t),this.o){if(this.U&&!this.L){t:{if(this.g){var r,i=this.g;if((r=i.g?i.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(r)){var o=r;break t}}o=null}if(!(e=o)){this.o=!1,this.m=3,be(12),Ve(this),Ue(this);break e}ze(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Be(this,e)}if(this.R){let t;for(e=!0;!this.K&&this.C<n.length;){if(t=Le(this,n),t==Re){4==l&&(this.m=4,be(14),e=!1),ze(this.i,this.l,null,"[Incomplete Response]");break}if(t==Pe){this.m=4,be(15),ze(this.i,this.l,n,"[Invalid Chunk]"),e=!1;break}ze(this.i,this.l,t,null),Be(this,t)}if(Oe(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=l||0!=n.length||this.h.h||(this.m=1,be(16),e=!1),this.o=this.o&&e,e){if(n.length>0&&!this.W){this.W=!0;var s=this.j;s.g==this&&s.aa&&!s.P&&(s.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jt(s),s.P=!0,be(11))}}else ze(this.i,this.l,n,"[Invalid Chunked Response]"),Ve(this),Ue(this)}else ze(this.i,this.l,n,null),Be(this,n);4==l&&Ve(this),this.o&&!this.K&&(4==l?en(this.j,this):(this.o=!1,Me(this)))}else(function(e){const t={};e=(e.g&&Mt(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(j(e[r]))continue;var n=Ce(e[r]);const i=n[0];if("string"!==typeof(n=n[1]))continue;n=n.trim();const a=t[i]||[];t[i]=a,a.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==t&&n.indexOf("Unknown SID")>0?(this.m=3,be(12)):(this.m=0,be(13)),Ve(this),Ue(this)}}}catch(l){}},Ie.prototype.cancel=function(){this.K=!0,Ve(this)},Ie.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.B),2!=this.M&&(ye(),be(17)),Ve(this),this.m=2,Ue(this)):$e(this,this.T-e)};var He=class{constructor(e,t){this.g=e,this.map=t}};function We(e){this.l=e||10,a.PerformanceNavigationTiming?e=(e=a.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ke(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ge(e){return e.h?1:e.g?e.g.size:0}function qe(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Qe(e,t){e.g?e.g.add(t):e.h=t}function Ye(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Je(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.G);return t}return h(e.i)}We.prototype.cancel=function(){if(this.i=Je(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Xe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ze(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof Ze?(this.l=e.l,tt(this,e.j),this.o=e.o,this.g=e.g,nt(this,e.u),this.h=e.h,rt(this,vt(e.i)),this.m=e.m):e&&(t=String(e).match(Xe))?(this.l=!1,tt(this,t[1]||"",!0),this.o=ot(t[2]||""),this.g=ot(t[3]||"",!0),nt(this,t[4]),this.h=ot(t[5]||"",!0),rt(this,t[6]||"",!0),this.m=ot(t[7]||"")):(this.l=!1,this.i=new ft(null,this.l))}function et(e){return new Ze(e)}function tt(e,t,n){e.j=n?ot(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function nt(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function rt(e,t,n){t instanceof ft?(e.i=t,function(e,t){t&&!e.j&&(mt(e),e.i=null,e.g.forEach(function(e,t){const n=t.toLowerCase();t!=n&&(gt(this,t),bt(this,n,e))},e)),e.j=t}(e.i,e.l)):(n||(t=st(t,ht)),e.i=new ft(t,e.l))}function it(e,t,n){e.i.set(t,n)}function at(e){return it(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ot(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function st(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,lt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function lt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ze.prototype.toString=function(){const e=[];var t=this.j;t&&e.push(st(t,ct,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(st(t,ct,!0),"@"),e.push(Te(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&e.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(st(n,"/"==n.charAt(0)?dt:ut,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",st(n,pt)),e.join("")},Ze.prototype.resolve=function(e){const t=et(this);let n=!!e.j;n?tt(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=null!=e.u;var r=e.h;if(n)nt(t,e.u);else if(n=!!e.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var i=t.h.lastIndexOf("/");-1!=i&&(r=t.h.slice(0,i+1)+r)}if(".."==(i=r)||"."==i)r="";else if(-1!=i.indexOf("./")||-1!=i.indexOf("/.")){r=0==i.lastIndexOf("/",0),i=i.split("/");const e=[];for(let t=0;t<i.length;){const n=i[t++];"."==n?r&&t==i.length&&e.push(""):".."==n?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),r&&t==i.length&&e.push("")):(e.push(n),r=!0)}r=e.join("/")}else r=i}return n?t.h=r:n=""!==e.i.toString(),n?rt(t,vt(e.i)):n=!!e.m,n&&(t.m=e.m),t};var ct=/[#\/\?@]/g,ut=/[#\?:]/g,dt=/[#\?]/g,ht=/[#\?@]/g,pt=/#/g;function ft(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(let n=0;n<e.length;n++){const r=e[n].indexOf("=");let i,a=null;r>=0?(i=e[n].substring(0,r),a=e[n].substring(r+1)):i=e[n],t(i,a?decodeURIComponent(a.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function gt(e,t){mt(e),t=xt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function yt(e,t){return mt(e),t=xt(e,t),e.g.has(t)}function wt(e,t){mt(e);let n=[];if("string"===typeof t)yt(e,t)&&(n=n.concat(e.g.get(xt(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t]);return n}function bt(e,t,n){gt(e,t),n.length>0&&(e.i=null,e.g.set(xt(e,t),h(n)),e.h+=n.length)}function vt(e){const t=new ft;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function xt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function kt(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(uw){}}function zt(){this.g=new se}function St(e){this.i=e.Sb||null,this.h=e.ab||!1}function Et(e,t){J.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function jt(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function _t(e){e.readyState=4,e.l=null,e.j=null,e.B=null,Tt(e)}function Tt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Ct(e){let t="";return P(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function It(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Ct(n),"string"===typeof e?null!=n&&Te(n):it(e,t,n))}function At(e){J.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(e=ft.prototype).add=function(e,t){mt(this),this.i=null,e=xt(this,e);let n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){mt(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.set=function(e,t){return mt(this),this.i=null,yt(this,e=xt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&(e=wt(this,e)).length>0?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(let r=0;r<t.length;r++){var n=t[r];const i=Te(n);n=wt(this,n);for(let t=0;t<n.length;t++){let r=i;""!==n[t]&&(r+="="+Te(n[t])),e.push(r)}}return this.i=e.join("&")},u(St,le),St.prototype.g=function(){return new Et(this.i,this.h)},u(Et,J),(e=Et.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,Tt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||a).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,_t(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Tt(this)),this.g&&(this.readyState=3,Tt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;jt(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?_t(this):Tt(this),3==this.readyState&&jt(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,_t(this))},e.Na=function(e){this.g&&(this.response=e,_t(this))},e.ga=function(){this.g&&_t(this)},e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Et.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),u(At,J);var Pt=/^https?$/i,Rt=["POST","PUT"];function Nt(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,Dt(e),Lt(e)}function Dt(e){e.A||(e.A=!0,X(e,"complete"),X(e,"error"))}function Ot(e){if(e.h&&"undefined"!=typeof i)if(e.v&&4==Mt(e))setTimeout(e.Ca.bind(e),0);else if(X(e,"readystatechange"),4==Mt(e)){e.h=!1;try{const i=e.ca();e:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===i){let t=String(e.D).match(Xe)[1]||null;!t&&a.self&&a.self.location&&(t=a.self.location.protocol.slice(0,-1)),r=!Pt.test(t?t.toLowerCase():"")}n=r}if(n)X(e,"complete"),X(e,"success");else{e.o=6;try{var o=Mt(e)>2?e.g.statusText:""}catch(s){o=""}e.l=o+" ["+e.ca()+"]",Dt(e)}}finally{Lt(e)}}}function Lt(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const n=e.g;e.g=null,t||X(e,"ready");try{n.onreadystatechange=null}catch(cw){}}}function Mt(e){return e.g?e.g.readyState:0}function $t(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(ks){return null}}function Ft(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ut(e){this.za=0,this.i=[],this.j=new ke,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ft("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ft("baseRetryDelayMs",5e3,e),this.Za=Ft("retryDelaySeedMs",1e4,e),this.Ta=Ft("forwardChannelMaxRetries",2,e),this.va=Ft("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new We(e&&e.concurrentRequestLimit),this.Ba=new zt,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function Vt(e){if(Ht(e),3==e.I){var t=e.V++,n=et(e.J);if(it(n,"SID",e.M),it(n,"RID",t),it(n,"TYPE","terminate"),Gt(e,n),(t=new Ie(e,e.j,t)).M=2,t.A=at(et(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(t.A.toString(),"")}catch(cw){}!n&&a.Image&&((new Image).src=t.A,n=!0),n||(t.g=on(t.j,null),t.g.ea(t.A)),t.F=Date.now(),Me(t)}rn(e)}function Bt(e){e.g&&(Jt(e),e.g.cancel(),e.g=null)}function Ht(e){Bt(e),e.v&&(a.clearTimeout(e.v),e.v=null),Zt(e),e.h.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function Wt(e){if(!Ke(e.h)&&!e.m){e.m=!0;var t=e.Ea;w||x(),b||(w(),b=!0),v.add(t,e),e.D=0}}function Kt(e,t){var n;n=t?t.l:e.V++;const r=et(e.J);it(r,"SID",e.M),it(r,"RID",n),it(r,"AID",e.K),Gt(e,r),e.u&&e.o&&It(r,e.u,e.o),n=new Ie(e,e.j,n,e.D+1),null===e.u&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=qt(e,n,1e3),n.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),Qe(e.h,n),Ne(n,r,t)}function Gt(e,t){e.H&&P(e.H,function(e,n){it(t,n,e)}),e.l&&P({},function(e,n){it(t,n,e)})}function qt(e,t,n){n=Math.min(e.i.length,n);const r=e.l?l(e.l.Ka,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?n>0?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let l=!0;for(let c=0;c<n;c++){var a=i[c].g;const n=i[c].map;if((a-=t)<0)t=Math.max(0,i[c].g-100),l=!1;else try{a="req"+a+"_"||0;try{var s=n instanceof Map?n:Object.entries(n);for(const[t,n]of s){let r=n;o(n)&&(r=ae(n)),e.push(a+t+"="+encodeURIComponent(r))}}catch(tl){throw e.push(a+"type="+encodeURIComponent("_badmap")),tl}}catch(tl){r&&r(n)}}if(l){s=e.join("&");break e}}s=void 0}return e=e.i.splice(0,n),t.G=e,s}function Qt(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;w||x(),b||(w(),b=!0),v.add(t,e),e.A=0}}function Yt(e){return!(e.g||e.v||e.A>=3)&&(e.Y++,e.v=xe(l(e.Da,e),tn(e,e.A)),e.A++,!0)}function Jt(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function Xt(e){e.g=new Ie(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=et(e.na);it(t,"RID","rpc"),it(t,"SID",e.M),it(t,"AID",e.K),it(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&it(t,"TO",e.ia),it(t,"TYPE","xmlhttp"),Gt(e,t),e.u&&e.o&&It(t,e.u,e.o),e.O&&(e.g.H=e.O);var n=e.g;e=e.ba,n.M=1,n.A=at(et(t)),n.u=null,n.R=!0,De(n,e)}function Zt(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function en(e,t){var n=null;if(e.g==t){Zt(e),Jt(e),e.g=null;var r=2}else{if(!qe(e.h,t))return;n=t.G,Ye(e.h,t),r=1}if(0!=e.I)if(t.o)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.F;var i=e.D;X(r=me(),new ve(r,n)),Wt(e)}else Qt(e);else if(3==(i=t.m)||0==i&&t.X>0||!(1==r&&function(e,t){return!(Ge(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.G.concat(e.i),!0):!(1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta))&&(e.m=xe(l(e.Ea,e,t),tn(e,e.D)),e.D++,!0))}(e,t)||2==r&&Yt(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),i){case 1:nn(e,5);break;case 4:nn(e,10);break;case 3:nn(e,6);break;default:nn(e,2)}}function tn(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(n*=2),n*t}function nn(e,t){if(e.j.info("Error code "+t),2==t){var n=l(e.bb,e),r=e.Ua;const t=!r;r=new Ze(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||tt(r,"https"),at(r),t?function(e,t){const n=new ke;if(a.Image){const r=new Image;r.onload=c(kt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=c(kt,n,"TestLoadImage: error",!1,t,r),r.onabort=c(kt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=c(kt,n,"TestLoadImage: timeout",!1,t,r),a.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new ke;const n=new AbortController,r=setTimeout(()=>{n.abort(),kt(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?kt(0,0,!0,t):kt(0,0,!1,t)}).catch(()=>{clearTimeout(r),kt(0,0,!1,t)})}(r.toString(),n)}else be(2);e.I=0,e.l&&e.l.pa(t),rn(e),Ht(e)}function rn(e){if(e.I=0,e.ja=[],e.l){const t=Je(e.h);0==t.length&&0==e.i.length||(p(e.ja,t),p(e.ja,e.i),e.h.i.length=0,h(e.i),e.i.length=0),e.l.oa()}}function an(e,t,n){var r=n instanceof Ze?et(n):new Ze(n);if(""!=r.g)t&&(r.g=t+"."+r.g),nt(r,r.u);else{var i=a.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;const e=new Ze(null);r&&tt(e,r),t&&(e.g=t),i&&nt(e,i),n&&(e.h=n),r=e}return n=e.G,t=e.wa,n&&t&&it(r,n,t),it(r,"VER",e.ka),Gt(e,r),r}function on(e,t,n){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Aa&&!e.ma?new At(new St({ab:n})):new At(e.ma)).Fa(e.L),t}function sn(){}function ln(){}function cn(e,t){J.call(this),this.g=new Ut(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!j(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!j(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new hn(this)}function un(e){de.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function dn(){he.call(this),this.status=1}function hn(e){this.g=e}(e=At.prototype).Fa=function(e){this.H=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Se.g(),this.g.onreadystatechange=d(l(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(uw){return void Nt(this,uw)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=a.FormData&&e instanceof a.FormData,!(Array.prototype.indexOf.call(Rt,t,void 0)>=0)||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[a,o]of n)this.g.setRequestHeader(a,o);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(uw){Nt(this,uw)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,X(this,"complete"),X(this,"abort"),Lt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lt(this,!0)),At.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Ot(this):this.Xa())},e.Xa=function(){Ot(this)},e.isActive=function(){return!!this.g},e.ca=function(){try{return Mt(this)>2?this.g.status:-1}catch(rw){return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch(rw){return""}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),oe(t)}},e.ya=function(){return this.o},e.Ha=function(){return"string"===typeof this.l?this.l:String(this.l)},(e=Ut.prototype).ka=8,e.I=1,e.connect=function(e,t,n,r){be(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=an(this,null,this.W),Wt(this)},e.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Ie(this,this.j,e);let a=this.o;if(this.U&&(a?(a=R(a),D(a,this.U)):a=this.U),null!==this.u||this.R||(i.J=a,a=null),this.S)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"===typeof(r=r.map.__data__)?r.length:void 0))break;if((t+=r)>4096){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=qt(this,i,t),it(n=et(this.J),"RID",e),it(n,"CVER",22),this.G&&it(n,"X-HTTP-Session-Id",this.G),Gt(this,n),a&&(this.R?t="headers="+Te(Ct(a))+"&"+t:this.u&&It(n,this.u,a)),Qe(this.h,i),this.Ra&&it(n,"TYPE","init"),this.S?(it(n,"$req",t),it(n,"SID","null"),i.U=!0,Ne(i,n,null)):Ne(i,n,t),this.I=2}}else 3==this.I&&(e?Kt(this,e):0==this.i.length||Ke(this.h)||Kt(this))},e.Da=function(){if(this.v=null,Xt(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=xe(l(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,be(10),Bt(this),Xt(this))},e.Va=function(){null!=this.C&&(this.C=null,Bt(this),Yt(this),be(19))},e.bb=function(e){e?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=sn.prototype).ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){},ln.prototype.g=function(e,t){return new cn(e,t)},u(cn,J),cn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){Vt(this.g)},cn.prototype.o=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ae(e),e=n);t.i.push(new He(t.Ya++,e)),3==t.I&&Wt(t)},cn.prototype.N=function(){this.g.l=null,delete this.j,Vt(this.g),delete this.g,cn.Z.N.call(this)},u(un,de),u(dn,he),u(hn,sn),hn.prototype.ra=function(){X(this.g,"a")},hn.prototype.qa=function(e){X(this.g,new un(e))},hn.prototype.pa=function(e){X(this.g,new dn)},hn.prototype.oa=function(){X(this.g,"b")},ln.prototype.createWebChannel=ln.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,ws=vs.createWebChannelTransport=function(){return new ln},ys=vs.getStatEventTarget=function(){return me()},gs=vs.Event=pe,ms=vs.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ee.NO_ERROR=0,Ee.TIMEOUT=8,Ee.HTTP_ERROR=6,fs=vs.ErrorCode=Ee,je.COMPLETE="complete",ps=vs.EventType=je,ce.EventType=ue,ue.OPEN="a",ue.CLOSE="b",ue.ERROR="c",ue.MESSAGE="d",J.prototype.listen=J.prototype.J,hs=vs.WebChannel=ce,vs.FetchXmlHttpFactory=St,At.prototype.listenOnce=At.prototype.K,At.prototype.getLastError=At.prototype.Ha,At.prototype.getLastErrorCode=At.prototype.ya,At.prototype.getStatus=At.prototype.ca,At.prototype.getResponseJson=At.prototype.La,At.prototype.getResponseText=At.prototype.la,At.prototype.send=At.prototype.ea,At.prototype.setWithCredentials=At.prototype.Fa,ds=vs.XhrIo=At}).apply("undefined"!==typeof bs?bs:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});class xs{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xs.UNAUTHENTICATED=new xs(null),xs.GOOGLE_CREDENTIALS=new xs("google-credentials-uid"),xs.FIRST_PARTY=new xs("first-party-uid"),xs.MOCK_USER=new xs("mock-user");let ks="12.12.0";const zs=new dn("@firebase/firestore");function Ss(){return zs.logLevel}function Es(e){if(zs.logLevel<=on.DEBUG){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=n.map(Ts);zs.debug(`Firestore (${ks}): ${e}`,...i)}}function js(e){if(zs.logLevel<=on.ERROR){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=n.map(Ts);zs.error(`Firestore (${ks}): ${e}`,...i)}}function _s(e){if(zs.logLevel<=on.WARN){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=n.map(Ts);zs.warn(`Firestore (${ks}): ${e}`,...i)}}function Ts(e){if("string"==typeof e)return e;try{return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}function Cs(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,Is(e,r,n)}function Is(e,t,n){let r=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw js(r),new Error(r)}function As(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||Is(t,i,r)}function Ps(e,t){return e}const Rs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ns extends Ft{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}class Ds{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}class Os{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ls{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(xs.UNAUTHENTICATED))}shutdown(){}}class Ms{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class $s{constructor(e){this.t=e,this.currentUser=xs.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){As(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Ds;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ds,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{Es("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Es("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ds)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(Es("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(As("string"==typeof t.accessToken,31837,{l:t}),new Os(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return As(null===e||"string"==typeof e,2055,{h:e}),new xs(e)}}class Fs{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=xs.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Us{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Fs(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(xs.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bs{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,hr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){As(void 0===this.o,3512);const n=e=>{null!=e.error&&Es("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,Es("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{Es("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):Es("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Vs(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(As("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new Vs(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Hs(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}class Ws{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=Hs(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function Ks(e,t){return e<t?-1:e>t?1:0}function Gs(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.charAt(r),i=t.charAt(r);if(n!==i)return Ys(n)===Ys(i)?Ks(n,i):Ys(n)?1:-1}return Ks(e.length,t.length)}const qs=55296,Qs=57343;function Ys(e){const t=e.charCodeAt(0);return t>=qs&&t<=Qs}function Js(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}const Xs="__name__";class Zs{constructor(e,t,n){void 0===t?t=0:t>e.length&&Cs(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&Cs(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Zs.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zs?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=Zs.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Ks(e.length,t.length)}static compareSegments(e,t){const n=Zs.isNumericId(e),r=Zs.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Zs.extractNumericId(e).compare(Zs.extractNumericId(t)):Gs(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ss.fromString(e.substring(4,e.length-2))}}class el extends Zs{construct(e,t,n){return new el(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(){const e=[];for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(const i of n){if(i.indexOf("//")>=0)throw new Ns(Rs.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(e=>e.length>0))}return new el(e)}static emptyPath(){return new el([])}}const tl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nl extends Zs{construct(e,t,n){return new nl(e,t,n)}static isValidIdentifier(e){return tl.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nl.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Xs}static keyField(){return new nl([Xs])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Ns(Rs.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Ns(Rs.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ns(Rs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(a=!a,r++):"."!==t||a?(n+=t,r++):(i(),r++)}if(i(),a)throw new Ns(Rs.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nl(t)}static emptyPath(){return new nl([])}}class rl{constructor(e){this.path=e}static fromPath(e){return new rl(el.fromString(e))}static fromName(e){return new rl(el.fromString(e).popFirst(5))}static empty(){return new rl(el.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===el.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return el.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new rl(new el(e.slice()))}}function il(e,t,n){if(!n)throw new Ns(Rs.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function al(e){if(!rl.isDocumentKey(e))throw new Ns(Rs.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ol(e){if(rl.isDocumentKey(e))throw new Ns(Rs.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function sl(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function ll(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Cs(12329,{type:typeof e})}function cl(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ns(Rs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ll(e);throw new Ns(Rs.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function ul(e,t){const n={typeString:e};return t&&(n.value=t),n}function dl(e,t){if(!sl(e))throw new Ns(Rs.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const i=t[r].typeString,a="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const o=e[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==a&&o!==a.value){n=`Expected '${r}' field to equal '${a.value}'`;break}}if(n)throw new Ns(Rs.INVALID_ARGUMENT,n);return!0}const hl=-62135596800,pl=1e6;class fl{static now(){return fl.fromMillis(Date.now())}static fromDate(e){return fl.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*pl);return new fl(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ns(Rs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ns(Rs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<hl)throw new Ns(Rs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ns(Rs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/pl}_compareTo(e){return this.seconds===e.seconds?Ks(this.nanoseconds,e.nanoseconds):Ks(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fl._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(dl(e,fl._jsonSchema))return new fl(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fl._jsonSchemaVersion="firestore/timestamp/1.0",fl._jsonSchema={type:ul("string",fl._jsonSchemaVersion),seconds:ul("number"),nanoseconds:ul("number")};class ml{static fromTimestamp(e){return new ml(e)}static min(){return new ml(new fl(0,0))}static max(){return new ml(new fl(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}const gl=-1;class yl{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}yl.UNKNOWN_ID=-1;function wl(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ml.fromTimestamp(1e9===r?new fl(n+1,0):new fl(n,r));return new vl(i,rl.empty(),t)}function bl(e){return new vl(e.readTime,e.key,gl)}class vl{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new vl(ml.min(),rl.empty(),gl)}static max(){return new vl(ml.max(),rl.empty(),gl)}}function xl(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=rl.comparator(e.documentKey,t.documentKey),0!==n?n:Ks(e.largestBatchId,t.largestBatchId))}const kl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}async function Sl(e){if(e.code!==Rs.FAILED_PRECONDITION||e.message!==kl)throw e;Es("LocalStore","Unexpectedly lost primary lease")}class El{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Cs(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new El((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof El?t:El.resolve(t)}catch(e){return El.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):El.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):El.reject(t)}static resolve(e){return new El((t,n)=>{t(e)})}static reject(e){return new El((t,n)=>{n(e)})}static waitFor(e){return new El((t,n)=>{let r=0,i=0,a=!1;e.forEach(e=>{++r,e.next(()=>{++i,a&&i===r&&t()},e=>n(e))}),a=!0,i===r&&t()})}static or(e){let t=El.resolve(!1);for(const n of e)t=t.next(e=>e?El.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new El((n,r)=>{const i=e.length,a=new Array(i);let o=0;for(let s=0;s<i;s++){const l=s;t(e[l]).next(e=>{a[l]=e,++o,o===i&&n(a)},e=>r(e))}})}static doWhile(e,t){return new El((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function jl(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _l(e){return"IndexedDbTransactionError"===e.name}class Tl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Tl.ce=-1;const Cl=-1;function Il(e){return null==e}function Al(e){return 0===e&&1/e==-1/0}function Pl(e){return"number"==typeof e&&Number.isInteger(e)&&!Al(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}const Rl="\x01";function Nl(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Ol(t)),t=Dl(e.get(n),t);return Ol(t)}function Dl(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="\x01\x10";break;case Rl:n+="\x01\x11";break;default:n+=t}}return n}function Ol(e){return e+Rl+"\x01"}const Ll="remoteDocuments",Ml="owner",$l="mutationQueues",Fl="mutations";const Ul="documentMutations",Vl="remoteDocumentsV14",Bl="remoteDocumentGlobal",Hl="targets",Wl="targetDocuments",Kl="targetGlobal",Gl="collectionParents",ql="clientMetadata",Ql="bundles",Yl="namedQueries",Jl="indexConfiguration",Xl="indexState",Zl="indexEntries",ec="documentOverlays",tc="globals",nc=[$l,Fl,Ul,Ll,Hl,Ml,Kl,Wl,ql,Bl,Gl,Ql,Yl],rc=[$l,Fl,Ul,Vl,Hl,Ml,Kl,Wl,ql,Bl,Gl,Ql,Yl,ec],ic=rc,ac=[...ic,Jl,Xl,Zl];function oc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function sc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function lc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}class cc{constructor(e,t){this.comparator=e,this.root=t||dc.EMPTY}insert(e,t){return new cc(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,dc.BLACK,null,null))}remove(e){return new cc(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dc.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uc(this.root,e,this.comparator,!1)}getReverseIterator(){return new uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uc(this.root,e,this.comparator,!0)}}class uc{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dc{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:dc.RED,this.left=null!=r?r:dc.EMPTY,this.right=null!=i?i:dc.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new dc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return dc.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return dc.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Cs(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Cs(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Cs(27949);return e+(this.isRed()?0:1)}}dc.EMPTY=null,dc.RED=!0,dc.BLACK=!1,dc.EMPTY=new class{constructor(){this.size=0}get key(){throw Cs(57766)}get value(){throw Cs(16141)}get color(){throw Cs(16727)}get left(){throw Cs(29726)}get right(){throw Cs(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new dc(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};class hc{constructor(e){this.comparator=e,this.data=new cc(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new pc(this.data.getIterator())}getIteratorFrom(e){return new pc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof hc))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new hc(this.comparator);return t.data=e,t}}class pc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}class fc{constructor(e){this.fields=e,e.sort(nl.comparator)}static empty(){return new fc([])}unionWith(e){let t=new hc(nl.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new fc(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Js(this.fields,e.fields,(e,t)=>e.isEqual(t))}}class mc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}class gc{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new mc("Invalid base64 string: "+e):e}}(e);return new gc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new gc(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ks(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gc.EMPTY_BYTE_STRING=new gc("");const yc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wc(e){if(As(!!e,39018),"string"==typeof e){let t=0;const n=yc.exec(e);if(As(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:bc(e.seconds),nanos:bc(e.nanos)}}function bc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function vc(e){return"string"==typeof e?gc.fromBase64String(e):gc.fromUint8Array(e)}const xc="server_timestamp",kc="__type__",zc="__previous_value__",Sc="__local_write_time__";function Ec(e){const t=(e?.mapValue?.fields||{})[kc]?.stringValue;return t===xc}function jc(e){const t=e.mapValue.fields[zc];return Ec(t)?jc(t):t}function _c(e){const t=wc(e.mapValue.fields[Sc].timestampValue);return new fl(t.seconds,t.nanos)}class Tc{constructor(e,t,n,r,i,a,o,s,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=s,this.useFetchStreams=l,this.isUsingEmulator=c,this.apiKey=u}}const Cc="(default)";class Ic{constructor(e,t){this.projectId=e,this.database=t||Cc}static empty(){return new Ic("","")}get isDefaultDatabase(){return this.database===Cc}isEqual(e){return e instanceof Ic&&e.projectId===this.projectId&&e.database===this.database}}const Ac="__type__",Pc="__max__",Rc={mapValue:{fields:{__type__:{stringValue:Pc}}}},Nc="__vector__",Dc="value";function Oc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ec(e)?4:Xc(e)?9007199254740991:Yc(e)?10:11:Cs(28295,{value:e})}function Lc(e,t){if(e===t)return!0;const n=Oc(e);if(n!==Oc(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return _c(e).isEqual(_c(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=wc(e.timestampValue),r=wc(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return vc(e.bytesValue).isEqual(vc(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return bc(e.geoPointValue.latitude)===bc(t.geoPointValue.latitude)&&bc(e.geoPointValue.longitude)===bc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return bc(e.integerValue)===bc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=bc(e.doubleValue),r=bc(t.doubleValue);return n===r?Al(n)===Al(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Js(e.arrayValue.values||[],t.arrayValue.values||[],Lc);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(oc(n)!==oc(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Lc(n[i],r[i])))return!1;return!0}(e,t);default:return Cs(52216,{left:e})}}function Mc(e,t){return void 0!==(e.values||[]).find(e=>Lc(e,t))}function $c(e,t){if(e===t)return 0;const n=Oc(e),r=Oc(t);if(n!==r)return Ks(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ks(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=bc(e.integerValue||e.doubleValue),r=bc(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Fc(e.timestampValue,t.timestampValue);case 4:return Fc(_c(e),_c(t));case 5:return Gs(e.stringValue,t.stringValue);case 6:return function(e,t){const n=vc(e),r=vc(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Ks(n[i],r[i]);if(0!==e)return e}return Ks(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ks(bc(e.latitude),bc(t.latitude));return 0!==n?n:Ks(bc(e.longitude),bc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Uc(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=t.fields||{},i=n[Dc]?.arrayValue,a=r[Dc]?.arrayValue,o=Ks(i?.values?.length||0,a?.values?.length||0);return 0!==o?o:Uc(i,a)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Rc.mapValue&&t===Rc.mapValue)return 0;if(e===Rc.mapValue)return 1;if(t===Rc.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(let o=0;o<r.length&&o<a.length;++o){const e=Gs(r[o],a[o]);if(0!==e)return e;const t=$c(n[r[o]],i[a[o]]);if(0!==t)return t}return Ks(r.length,a.length)}(e.mapValue,t.mapValue);default:throw Cs(23264,{he:n})}}function Fc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ks(e,t);const n=wc(e),r=wc(t),i=Ks(n.seconds,r.seconds);return 0!==i?i:Ks(n.nanos,r.nanos)}function Uc(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=$c(n[i],r[i]);if(e)return e}return Ks(n.length,r.length)}function Vc(e){return Bc(e)}function Bc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=wc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return vc(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return rl.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Bc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Bc(e.fields[i])}`;return n+"}"}(e.mapValue):Cs(61005,{value:e})}function Hc(e){switch(Oc(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=jc(e);return t?16+Hc(t):16;case 5:return 2*e.stringValue.length;case 6:return vc(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce((e,t)=>e+Hc(t),0)}(e.arrayValue);case 10:case 11:return function(e){let t=0;return sc(e.fields,(e,n)=>{t+=e.length+Hc(n)}),t}(e.mapValue);default:throw Cs(13486,{value:e})}}function Wc(e){return!!e&&"integerValue"in e}function Kc(e){return!!e&&"arrayValue"in e}function Gc(e){return!!e&&"nullValue"in e}function qc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Qc(e){return!!e&&"mapValue"in e}function Yc(e){const t=(e?.mapValue?.fields||{})[Ac]?.stringValue;return t===Nc}function Jc(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return sc(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Jc(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Jc(e.arrayValue.values[n]);return t}return{...e}}function Xc(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Pc}class Zc{constructor(e){this.value=e}static empty(){return new Zc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Qc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jc(t)}setAll(e){let t=nl.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Jc(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Qc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Lc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Qc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){sc(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Zc(Jc(this.value))}}function eu(e){const t=[];return sc(e.fields,(e,n)=>{const r=new nl([e]);if(Qc(n)){const e=eu(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new fc(t)}class tu{constructor(e,t,n,r,i,a,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=a,this.documentState=o}static newInvalidDocument(e){return new tu(e,0,ml.min(),ml.min(),ml.min(),Zc.empty(),0)}static newFoundDocument(e,t,n,r){return new tu(e,1,t,ml.min(),n,r,0)}static newNoDocument(e,t){return new tu(e,2,t,ml.min(),ml.min(),Zc.empty(),0)}static newUnknownDocument(e,t){return new tu(e,3,t,ml.min(),ml.min(),Zc.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ml.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ml.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof tu&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tu(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class nu{constructor(e,t){this.position=e,this.inclusive=t}}function ru(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const a=t[i],o=e.position[i];if(r=a.field.isKeyField()?rl.comparator(rl.fromName(o.referenceValue),n.key):$c(o,n.data.field(a.field)),"desc"===a.dir&&(r*=-1),0!==r)break}return r}function iu(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Lc(e.position[n],t.position[n]))return!1;return!0}class au{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";this.field=e,this.dir=t}}function ou(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}class su{}class lu extends su{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new gu(e,t,n):"array-contains"===t?new vu(e,n):"in"===t?new xu(e,n):"not-in"===t?new ku(e,n):"array-contains-any"===t?new zu(e,n):new lu(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new yu(e,n):new wu(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison($c(t,this.value)):null!==t&&Oc(this.value)===Oc(t)&&this.matchesComparison($c(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Cs(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cu extends su{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new cu(e,t)}matches(e){return uu(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function uu(e){return"and"===e.op}function du(e){return hu(e)&&uu(e)}function hu(e){for(const t of e.filters)if(t instanceof cu)return!1;return!0}function pu(e){if(e instanceof lu)return e.field.canonicalString()+e.op.toString()+Vc(e.value);if(du(e))return e.filters.map(e=>pu(e)).join(",");{const t=e.filters.map(e=>pu(e)).join(",");return`${e.op}(${t})`}}function fu(e,t){return e instanceof lu?function(e,t){return t instanceof lu&&e.op===t.op&&e.field.isEqual(t.field)&&Lc(e.value,t.value)}(e,t):e instanceof cu?function(e,t){return t instanceof cu&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&fu(n,t.filters[r]),!0)}(e,t):void Cs(19439)}function mu(e){return e instanceof lu?function(e){return`${e.field.canonicalString()} ${e.op} ${Vc(e.value)}`}(e):e instanceof cu?function(e){return e.op.toString()+" {"+e.getFilters().map(mu).join(" ,")+"}"}(e):"Filter"}class gu extends lu{constructor(e,t,n){super(e,t,n),this.key=rl.fromName(n.referenceValue)}matches(e){const t=rl.comparator(e.key,this.key);return this.matchesComparison(t)}}class yu extends lu{constructor(e,t){super(e,"in",t),this.keys=bu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class wu extends lu{constructor(e,t){super(e,"not-in",t),this.keys=bu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function bu(e,t){return(t.arrayValue?.values||[]).map(e=>rl.fromName(e.referenceValue))}class vu extends lu{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Kc(t)&&Mc(t.arrayValue,this.value)}}class xu extends lu{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Mc(this.value.arrayValue,t)}}class ku extends lu{constructor(e,t){super(e,"not-in",t)}matches(e){if(Mc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!Mc(this.value.arrayValue,t)}}class zu extends lu{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Kc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>Mc(this.value.arrayValue,e))}}class Su{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=a,this.endAt=o,this.Te=null}}function Eu(e){return new Su(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,arguments.length>6&&void 0!==arguments[6]?arguments[6]:null)}function ju(e){const t=Ps(e);if(null===t.Te){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>pu(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),Il(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Vc(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Vc(e)).join(",")),t.Te=e}return t.Te}function _u(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ou(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!fu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!iu(e.startAt,t.startAt)&&iu(e.endAt,t.endAt)}function Tu(e){return rl.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Cu{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=s,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Iu(e,t,n,r,i,a,o,s){return new Cu(e,t,n,r,i,a,o,s)}function Au(e){return new Cu(e)}function Pu(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ru(e){return null!==e.collectionGroup}function Nu(e){const t=Ps(e);if(null===t.Ee){t.Ee=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ee.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new hc(nl.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t}(t);r.forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ee.push(new au(r,n))}),e.has(nl.keyField().canonicalString())||t.Ee.push(new au(nl.keyField(),n))}return t.Ee}function Du(e){const t=Ps(e);return t.Ie||(t.Ie=Ou(t,Nu(e))),t.Ie}function Ou(e,t){if("F"===e.limitType)return Eu(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new au(e.field,t)});const n=e.endAt?new nu(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new nu(e.startAt.position,e.startAt.inclusive):null;return Eu(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Lu(e,t,n){return new Cu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Mu(e,t){return _u(Du(e),Du(t))&&e.limitType===t.limitType}function $u(e){return`${ju(Du(e))}|lt:${e.limitType}`}function Fu(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>mu(e)).join(", ")}]`),Il(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Vc(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Vc(e)).join(",")),`Target(${t})`}(Du(e))}; limitType=${e.limitType})`}function Uu(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):rl.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Nu(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=ru(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Nu(e),t))&&!(e.endAt&&!function(e,t,n){const r=ru(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Nu(e),t))}(e,t)}function Vu(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Bu(e){return(t,n)=>{let r=!1;for(const i of Nu(e)){const e=Hu(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Hu(e,t,n){const r=e.field.isKeyField()?rl.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?$c(r,i):Cs(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Cs(19790,{direction:e.dir})}}class Wu{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){sc(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return lc(this.inner)}size(){return this.innerSize}}const Ku=new cc(rl.comparator);function Gu(){return Ku}const qu=new cc(rl.comparator);function Qu(){let e=qu;for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(const i of n)e=e.insert(i.key,i);return e}function Yu(e){let t=qu;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Ju(){return Zu()}function Xu(){return Zu()}function Zu(){return new Wu(e=>e.toString(),(e,t)=>e.isEqual(t))}const ed=new cc(rl.comparator),td=new hc(rl.comparator);function nd(){let e=td;for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(const i of n)e=e.add(i);return e}const rd=new hc(Ks);function id(){return rd}function ad(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Al(t)?"-0":t}}function od(e){return{integerValue:""+e}}function sd(e,t){return Pl(t)?od(t):ad(e,t)}class ld{constructor(){this._=void 0}}function cd(e,t,n){return e instanceof hd?function(e,t){const n={fields:{[kc]:{stringValue:xc},[Sc]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Ec(t)&&(t=jc(t)),t&&(n.fields[zc]=t),{mapValue:n}}(n,t):e instanceof pd?fd(e,t):e instanceof md?gd(e,t):function(e,t){const n=dd(e,t),r=wd(n)+wd(e.Ae);return Wc(n)&&Wc(e.Ae)?od(r):ad(e.serializer,r)}(e,t)}function ud(e,t,n){return e instanceof pd?fd(e,t):e instanceof md?gd(e,t):n}function dd(e,t){return e instanceof yd?function(e){return Wc(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class hd extends ld{}class pd extends ld{constructor(e){super(),this.elements=e}}function fd(e,t){const n=bd(t);for(const r of e.elements)n.some(e=>Lc(e,r))||n.push(r);return{arrayValue:{values:n}}}class md extends ld{constructor(e){super(),this.elements=e}}function gd(e,t){let n=bd(t);for(const r of e.elements)n=n.filter(e=>!Lc(e,r));return{arrayValue:{values:n}}}class yd extends ld{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function wd(e){return bc(e.integerValue||e.doubleValue)}function bd(e){return Kc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class vd{constructor(e,t){this.field=e,this.transform=t}}class xd{constructor(e,t){this.version=e,this.transformResults=t}}class kd{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kd}static exists(e){return new kd(void 0,e)}static updateTime(e){return new kd(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zd(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Sd{}function Ed(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Dd(e.key,kd.none()):new Id(e.key,e.data,kd.none());{const n=e.data,r=Zc.empty();let i=new hc(nl.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Ad(e.key,r,new fc(i.toArray()),kd.none())}}function jd(e,t,n){e instanceof Id?function(e,t,n){const r=e.value.clone(),i=Rd(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Ad?function(e,t,n){if(!zd(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Rd(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Pd(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function _d(e,t,n,r){return e instanceof Id?function(e,t,n,r){if(!zd(e.precondition,t))return n;const i=e.value.clone(),a=Nd(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ad?function(e,t,n,r){if(!zd(e.precondition,t))return n;const i=Nd(e.fieldTransforms,r,t),a=t.data;return a.setAll(Pd(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return zd(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Td(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=dd(r.transform,e||null);null!=i&&(null===n&&(n=Zc.empty()),n.set(r.field,i))}return n||null}function Cd(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Js(e,t,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof pd&&t instanceof pd||e instanceof md&&t instanceof md?Js(e.elements,t.elements,Lc):e instanceof yd&&t instanceof yd?Lc(e.Ae,t.Ae):e instanceof hd&&t instanceof hd}(e.transform,t.transform)}(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Id extends Sd{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ad extends Sd{constructor(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pd(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Rd(e,t,n){const r=new Map;As(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let i=0;i<n.length;i++){const a=e[i],o=a.transform,s=t.data.field(a.field);r.set(a.field,ud(o,s,n[i]))}return r}function Nd(e,t,n){const r=new Map;for(const i of e){const e=i.transform,a=n.data.field(i.field);r.set(i.field,cd(e,a,t))}return r}class Dd extends Sd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Od extends Sd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class Ld{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&jd(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=_d(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=_d(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Xu();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let o=this.applyToLocalView(a,i.mutatedFields);o=t.has(r.key)?null:o;const s=Ed(a,o);null!==s&&n.set(r.key,s),a.isValidDocument()||a.convertToNoDocument(ml.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),nd())}isEqual(e){return this.batchId===e.batchId&&Js(this.mutations,e.mutations,(e,t)=>Cd(e,t))&&Js(this.baseMutations,e.baseMutations,(e,t)=>Cd(e,t))}}class Md{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){As(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=ed;const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,n[a].version);return new Md(e,t,n,r)}}class $d{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}class Fd{constructor(e,t){this.count=e,this.unchangedNames=t}}var Ud,Vd;function Bd(e){switch(e){case Rs.OK:return Cs(64938);case Rs.CANCELLED:case Rs.UNKNOWN:case Rs.DEADLINE_EXCEEDED:case Rs.RESOURCE_EXHAUSTED:case Rs.INTERNAL:case Rs.UNAVAILABLE:case Rs.UNAUTHENTICATED:return!1;case Rs.INVALID_ARGUMENT:case Rs.NOT_FOUND:case Rs.ALREADY_EXISTS:case Rs.PERMISSION_DENIED:case Rs.FAILED_PRECONDITION:case Rs.ABORTED:case Rs.OUT_OF_RANGE:case Rs.UNIMPLEMENTED:case Rs.DATA_LOSS:return!0;default:return Cs(15467,{code:e})}}function Hd(e){if(void 0===e)return js("GRPC error has no .code"),Rs.UNKNOWN;switch(e){case Ud.OK:return Rs.OK;case Ud.CANCELLED:return Rs.CANCELLED;case Ud.UNKNOWN:return Rs.UNKNOWN;case Ud.DEADLINE_EXCEEDED:return Rs.DEADLINE_EXCEEDED;case Ud.RESOURCE_EXHAUSTED:return Rs.RESOURCE_EXHAUSTED;case Ud.INTERNAL:return Rs.INTERNAL;case Ud.UNAVAILABLE:return Rs.UNAVAILABLE;case Ud.UNAUTHENTICATED:return Rs.UNAUTHENTICATED;case Ud.INVALID_ARGUMENT:return Rs.INVALID_ARGUMENT;case Ud.NOT_FOUND:return Rs.NOT_FOUND;case Ud.ALREADY_EXISTS:return Rs.ALREADY_EXISTS;case Ud.PERMISSION_DENIED:return Rs.PERMISSION_DENIED;case Ud.FAILED_PRECONDITION:return Rs.FAILED_PRECONDITION;case Ud.ABORTED:return Rs.ABORTED;case Ud.OUT_OF_RANGE:return Rs.OUT_OF_RANGE;case Ud.UNIMPLEMENTED:return Rs.UNIMPLEMENTED;case Ud.DATA_LOSS:return Rs.DATA_LOSS;default:return Cs(39323,{code:e})}}(Vd=Ud||(Ud={}))[Vd.OK=0]="OK",Vd[Vd.CANCELLED=1]="CANCELLED",Vd[Vd.UNKNOWN=2]="UNKNOWN",Vd[Vd.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Vd[Vd.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Vd[Vd.NOT_FOUND=5]="NOT_FOUND",Vd[Vd.ALREADY_EXISTS=6]="ALREADY_EXISTS",Vd[Vd.PERMISSION_DENIED=7]="PERMISSION_DENIED",Vd[Vd.UNAUTHENTICATED=16]="UNAUTHENTICATED",Vd[Vd.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Vd[Vd.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Vd[Vd.ABORTED=10]="ABORTED",Vd[Vd.OUT_OF_RANGE=11]="OUT_OF_RANGE",Vd[Vd.UNIMPLEMENTED=12]="UNIMPLEMENTED",Vd[Vd.INTERNAL=13]="INTERNAL",Vd[Vd.UNAVAILABLE=14]="UNAVAILABLE",Vd[Vd.DATA_LOSS=15]="DATA_LOSS";let Wd=null;function Kd(){return new TextEncoder}const Gd=new ss([4294967295,4294967295],0);function qd(e){const t=Kd().encode(e),n=new ls;return n.update(t),new Uint8Array(n.digest())}function Qd(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new ss([n,r],0),new ss([i,a],0)]}class Yd{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Jd(`Invalid padding: ${t}`);if(n<0)throw new Jd(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Jd(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Jd(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ss.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(ss.fromNumber(n)));return 1===r.compare(Gd)&&(r=new ss([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;const t=qd(e),[n,r]=Qd(t);for(let i=0;i<this.hashCount;i++){const e=this.ye(n,r,i);if(!this.we(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Yd(i,r,t);return n.forEach(e=>a.insert(e)),a}insert(e){if(0===this.ge)return;const t=qd(e),[n,r]=Qd(t);for(let i=0;i<this.hashCount;i++){const e=this.ye(n,r,i);this.Se(e)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Jd extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}class Xd{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Zd.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Xd(ml.min(),r,new cc(Ks),Gu(),nd())}}class Zd{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Zd(n,t,nd(),nd(),nd())}}class eh{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class th{constructor(e,t){this.targetId=e,this.Ce=t}}class nh{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:gc.EMPTY_BYTE_STRING,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class rh{constructor(){this.ve=0,this.Fe=oh(),this.Me=gc.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=nd(),t=nd(),n=nd();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Cs(38017,{changeType:i})}}),new Zd(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=oh()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,As(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class ih{constructor(e){this.Ge=e,this.ze=new Map,this.je=Gu(),this.Je=ah(),this.He=ah(),this.Ze=new cc(Ks)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:Cs(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,n)=>{this.rt(n)&&t(n)})}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Tu(i))if(0===n){const e=new rl(i.path);this.et(t,e,tu.newNoDocument(e,ml.min()))}else As(1===n,20013,{expectedCount:n});else{const r=this._t(t);if(r!==n){const n=this.ut(e),i=n?this.ct(n,e,r):1;if(0!==i){this.it(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,e)}Wd?.o(function(e,t,n,r,i){const a={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},o=t.unchangedNames;return o&&(a.bloomFilter={applied:0===i,hashCount:o?.hashCount??0,bitmapLength:o?.bits?.bitmap?.length??0,padding:o?.bits?.padding??0,mightContain:e=>r?.mightContain(e)??!1}),a}(r,e.Ce,this.Ge.ht(),n,i))}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let a,o;try{a=vc(n).toUint8Array()}catch(e){if(e instanceof mc)return _s("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new Yd(a,r,i)}catch(e){return _s(e instanceof Jd?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.ge?null:o}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const i=this.Ge.ht(),a=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(a)||(this.et(t,n,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((n,r)=>{const i=this.ot(r);if(i){if(n.current&&Tu(i.target)){const t=new rl(i.target.path);this.Et(t).has(r)||this.It(r,t)||this.et(r,t,tu.newNoDocument(t,e))}n.Be&&(t.set(r,n.ke()),n.qe())}});let n=nd();this.He.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.ot(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.je.forEach((t,n)=>n.setReadTime(e));const r=new Xd(e,t,this.Ze,this.je,n);return this.je=Gu(),this.Je=ah(),this.He=ah(),this.Ze=new cc(Ks),r}Ye(e,t){if(!this.rt(e))return;const n=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.It(e,t)?r.Ke(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new rh,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new hc(Ks),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new hc(Ks),this.Je=this.Je.insert(e,t)),t}rt(e){const t=null!==this.ot(e);return t||Es("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new rh),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ah(){return new cc(rl.comparator)}function oh(){return new cc(rl.comparator)}const sh={asc:"ASCENDING",desc:"DESCENDING"},lh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ch={and:"AND",or:"OR"};class uh{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function dh(e,t){return e.useProto3Json||Il(t)?t:{value:t}}function hh(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ph(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function fh(e,t){return hh(e,t.toTimestamp())}function mh(e){return As(!!e,49232),ml.fromTimestamp(function(e){const t=wc(e);return new fl(t.seconds,t.nanos)}(e))}function gh(e,t){return yh(e,t).canonicalString()}function yh(e,t){const n=function(e){return new el(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function wh(e){const t=el.fromString(e);return As(Mh(t),10190,{key:t.toString()}),t}function bh(e,t){return gh(e.databaseId,t.path)}function vh(e,t){const n=wh(t);if(n.get(1)!==e.databaseId.projectId)throw new Ns(Rs.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ns(Rs.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new rl(Sh(n))}function xh(e,t){return gh(e.databaseId,t)}function kh(e){const t=wh(e);return 4===t.length?el.emptyPath():Sh(t)}function zh(e){return new el(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Sh(e){return As(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function Eh(e,t,n){return{name:bh(e,t),fields:n.value.mapValue.fields}}function jh(e,t){let n;if(t instanceof Id)n={update:Eh(e,t.key,t.value)};else if(t instanceof Dd)n={delete:bh(e,t.key)};else if(t instanceof Ad)n={update:Eh(e,t.key,t.data),updateMask:Lh(t.fieldMask)};else{if(!(t instanceof Od))return Cs(16599,{dt:t.type});n={verify:bh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof hd)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof pd)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof md)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof yd)return{fieldPath:t.field.canonicalString(),increment:n.Ae};throw Cs(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:fh(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Cs(27497)}(e,t.precondition)),n}function _h(e,t){return{documents:[xh(e,t.path)]}}function Th(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xh(e,i);const a=function(e){if(0!==e.length)return Oh(cu.create(e,"and"))}(t.filters);a&&(n.structuredQuery.where=a);const o=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Nh(e.field),direction:Ah(e.dir)}}(e))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=dh(e,t.limit);return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ft:n,parent:i}}function Ch(e){let t=kh(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){As(1===r,65062);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let a=[];n.where&&(a=function(e){const t=Ih(e);return t instanceof cu&&du(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map(e=>function(e){return new au(Dh(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))}(n.orderBy));let s=null;n.limit&&(s=function(e){let t;return t="object"==typeof e?e.value:e,Il(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new nu(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new nu(n,t)}(n.endAt)),Iu(t,i,o,a,s,"F",l,c)}function Ih(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Dh(e.unaryFilter.field);return lu.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Dh(e.unaryFilter.field);return lu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Dh(e.unaryFilter.field);return lu.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Dh(e.unaryFilter.field);return lu.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Cs(61313);default:return Cs(60726)}}(e):void 0!==e.fieldFilter?function(e){return lu.create(Dh(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Cs(58110);default:return Cs(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return cu.create(e.compositeFilter.filters.map(e=>Ih(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Cs(1026)}}(e.compositeFilter.op))}(e):Cs(30097,{filter:e})}function Ah(e){return sh[e]}function Ph(e){return lh[e]}function Rh(e){return ch[e]}function Nh(e){return{fieldPath:e.canonicalString()}}function Dh(e){return nl.fromServerFormat(e.fieldPath)}function Oh(e){return e instanceof lu?function(e){if("=="===e.op){if(qc(e.value))return{unaryFilter:{field:Nh(e.field),op:"IS_NAN"}};if(Gc(e.value))return{unaryFilter:{field:Nh(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(qc(e.value))return{unaryFilter:{field:Nh(e.field),op:"IS_NOT_NAN"}};if(Gc(e.value))return{unaryFilter:{field:Nh(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nh(e.field),op:Ph(e.op),value:e.value}}}(e):e instanceof cu?function(e){const t=e.getFilters().map(e=>Oh(e));return 1===t.length?t[0]:{compositeFilter:{op:Rh(e.op),filters:t}}}(e):Cs(54877,{filter:e})}function Lh(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Mh(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function $h(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}class Fh{constructor(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:ml.min(),a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:ml.min(),o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:gc.EMPTY_BYTE_STRING,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o,this.expectedCount=s}withSequenceNumber(e){return new Fh(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Fh(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}class Uh{constructor(e){this.yt=e}}function Vh(e){const t=Ch({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Lu(t,t.limit,"L"):t}class Bh{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(bc(e.integerValue));else if("doubleValue"in e){const n=bc(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),Al(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),"string"==typeof n&&(n=wc(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(vc(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?Xc(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Yc(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Kt(e.arrayValue,t),this.Nt(t)):Cs(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const r of Object.keys(n))this.Ot(r,t),this.Ct(n[r],t)}kt(e,t){const n=e.fields||{};this.Ft(t,53);const r=Dc,i=n[r].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(bc(i)),this.Ot(r,t),this.Ct(n[r],t)}Kt(e,t){const n=e.values||[];this.Ft(t,50);for(const r of n)this.Ct(r,t)}Lt(e,t){this.Ft(t,37),rl.fromName(e).path.forEach(e=>{this.Ft(t,60),this.$t(e,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}Bh.Wt=new Bh;class Hh{constructor(){this.bn=new Wh}addToCollectionParentIndex(e,t){return this.bn.add(t),El.resolve()}getCollectionParents(e,t){return El.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return El.resolve()}deleteFieldIndex(e,t){return El.resolve()}deleteAllFieldIndexes(e){return El.resolve()}createTargetIndexes(e,t){return El.resolve()}getDocumentsMatchingTarget(e,t){return El.resolve(null)}getIndexType(e,t){return El.resolve(0)}getFieldIndexes(e,t){return El.resolve([])}getNextCollectionGroupToUpdate(e){return El.resolve(null)}getMinOffset(e,t){return El.resolve(vl.min())}getMinOffsetFromCollectionGroup(e,t){return El.resolve(vl.min())}updateCollectionGroup(e,t,n){return El.resolve()}updateIndexEntries(e,t){return El.resolve()}}class Wh{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new hc(el.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new hc(el.comparator)).toArray()}}new Uint8Array(0);const Kh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Gh=41943040;class qh{static withCacheSize(e){return new qh(e,qh.DEFAULT_COLLECTION_PERCENTILE,qh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}qh.DEFAULT_COLLECTION_PERCENTILE=10,qh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qh.DEFAULT=new qh(Gh,qh.DEFAULT_COLLECTION_PERCENTILE,qh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qh.DISABLED=new qh(-1,0,0);class Qh{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Qh(0)}static ar(){return new Qh(-1)}}const Yh="LruGarbageCollector",Jh=1048576;function Xh(e,t){let[n,r]=e,[i,a]=t;const o=Ks(n,i);return 0===o?Ks(r,a):o}class Zh{constructor(e){this.Pr=e,this.buffer=new hc(Xh),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Xh(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ep{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(e){Es(Yh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){_l(e)?Es(Yh,"Ignoring IndexedDB error during garbage collection: ",e):await Sl(e)}await this.Ar(3e5)})}}class tp{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return El.resolve(Tl.ce);const n=new Zh(t);return this.Vr.forEachTarget(e,e=>n.Ir(e.sequenceNumber)).next(()=>this.Vr.mr(e,e=>n.Ir(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Es("LruGarbageCollector","Garbage collection skipped; disabled"),El.resolve(Kh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(Es("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kh):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,r,i,a,o,s,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(Es("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,a=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,s=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),Ss()<=on.DEBUG&&Es("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${a-c}ms\n\tDetermined least recently used ${r} in `+(o-a)+"ms\n"+`\tRemoved ${i} targets in `+(s-o)+"ms\n"+`\tRemoved ${e} documents in `+(l-s)+"ms\n"+`Total Duration: ${l-c}ms`),El.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}function np(e,t){return new tp(e,t)}class rp{constructor(){this.changes=new Wu(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tu.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?El.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}class ip{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}class ap{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&_d(n.mutation,e,fc.empty(),fl.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,nd()).next(()=>t))}getLocalViewOfDocuments(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:nd();const r=Ju();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=Qu();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=Ju();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,nd()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=Gu();const a=Zu(),o=Zu();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Ad)?i=i.insert(t.key,t):void 0!==o?(a.set(t.key,o.mutation.getFieldMask()),_d(o.mutation,t,o.mutation.getFieldMask(),fl.now())):a.set(t.key,fc.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>a.set(e,t)),t.forEach((e,t)=>o.set(e,new ip(t,a.get(e)??null))),o))}recalculateAndSaveOverlays(e,t){const n=Zu();let r=new cc((e,t)=>e-t),i=nd();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const a=t.get(e);if(null===a)return;let o=n.get(e)||fc.empty();o=i.applyToLocalView(a,o),n.set(e,o);const s=(r.get(i.batchId)||nd()).add(e);r=r.insert(i.batchId,s)})}).next(()=>{const a=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),s=r.key,l=r.value,c=Xu();l.forEach(e=>{if(!i.has(e)){const r=Ed(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}}),a.push(this.documentOverlayCache.saveOverlays(e,s,c))}return El.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return rl.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ru(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):El.resolve(Ju());let o=gl,s=i;return a.next(t=>El.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?El.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{s=s.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,s,t,nd())).next(e=>({batchId:o,changes:Yu(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new rl(t)).next(e=>{let t=Qu();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let a=Qu();return this.indexManager.getCollectionParents(e,i).next(o=>El.forEach(o,o=>{const s=function(e,t){return new Cu(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,s,n,r).next(e=>{e.forEach((e,t)=>{a=a.insert(e,t)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,tu.newInvalidDocument(r)))});let n=Qu();return e.forEach((e,r)=>{const a=i.get(e);void 0!==a&&_d(a.mutation,r,fc.empty(),fl.now()),Uu(t,r)&&(n=n.insert(e,r))}),n})}}class op{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return El.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:mh(e.createTime)}}(t)),El.resolve()}getNamedQuery(e,t){return El.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(e){return{name:e.name,query:Vh(e.bundledQuery),readTime:mh(e.readTime)}}(t)),El.resolve()}}class sp{constructor(){this.overlays=new cc(rl.comparator),this.Lr=new Map}getOverlay(e,t){return El.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ju();return El.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.St(e,t,r)}),El.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Lr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Lr.delete(n)),El.resolve()}getOverlaysForCollection(e,t,n){const r=Ju(),i=t.length+1,a=new rl(t.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const e=o.getNext().value,a=e.getKey();if(!t.isPrefixOf(a.path))break;a.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return El.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new cc((e,t)=>e-t);const a=this.overlays.getIterator();for(;a.hasNext();){const e=a.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Ju(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Ju(),s=i.getIterator();for(;s.hasNext()&&(s.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return El.resolve(o)}St(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new $d(t,n));let i=this.Lr.get(t);void 0===i&&(i=nd(),this.Lr.set(t,i)),this.Lr.set(t,i.add(n.key))}}class lp{constructor(){this.sessionToken=gc.EMPTY_BYTE_STRING}getSessionToken(e){return El.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,El.resolve()}}class cp{constructor(){this.kr=new hc(up.qr),this.Kr=new hc(up.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new up(e,t);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new up(e,t))}Qr(e,t){e.forEach(e=>this.removeReference(e,t))}Gr(e){const t=new rl(new el([])),n=new up(t,e),r=new up(t,e+1),i=[];return this.Kr.forEachInRange([n,r],e=>{this.Wr(e),i.push(e.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new rl(new el([])),n=new up(t,e),r=new up(t,e+1);let i=nd();return this.Kr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new up(e,0),n=this.kr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class up{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return rl.comparator(e.key,t.key)||Ks(e.Jr,t.Jr)}static Ur(e,t){return Ks(e.Jr,t.Jr)||rl.comparator(e.key,t.key)}}class dp{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new hc(up.qr)}checkEmpty(e){return El.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ld(i,t,n,r);this.mutationQueue.push(a);for(const o of r)this.Hr=this.Hr.add(new up(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return El.resolve(a)}lookupMutationBatch(e,t){return El.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Xr(n),i=r<0?0:r;return El.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return El.resolve(0===this.mutationQueue.length?Cl:this.Yn-1)}getAllMutationBatches(e){return El.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new up(t,0),r=new up(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,r],e=>{const t=this.Zr(e.Jr);i.push(t)}),El.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new hc(Ks);return t.forEach(e=>{const t=new up(e,0),r=new up(e,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([t,r],e=>{n=n.add(e.Jr)})}),El.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;rl.isDocumentKey(i)||(i=i.child(""));const a=new up(new rl(i),0);let o=new hc(Ks);return this.Hr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Jr)),!0)},a),El.resolve(this.Yr(o))}Yr(e){const t=[];return e.forEach(e=>{const n=this.Zr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){As(0===this.ei(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Hr;return El.forEach(t.mutations,r=>{const i=new up(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Hr=n})}nr(e){}containsKey(e,t){const n=new up(t,0),r=this.Hr.firstAfterOrEqual(n);return El.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,El.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}class hp{constructor(e){this.ti=e,this.docs=new cc(rl.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return El.resolve(n?n.document.mutableCopy():tu.newInvalidDocument(t))}getEntries(e,t){let n=Gu();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():tu.newInvalidDocument(e))}),El.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Gu();const a=t.path,o=new rl(a.child("__id-9223372036854775808__")),s=this.docs.getIteratorFrom(o);for(;s.hasNext();){const{key:e,value:{document:o}}=s.getNext();if(!a.isPrefixOf(e.path))break;e.path.length>a.length+1||xl(bl(o),n)<=0||(r.has(o.key)||Uu(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return El.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Cs(9500)}ni(e,t){return El.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new pp(this)}getSize(e){return El.resolve(this.size)}}class pp extends rp{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(n)}),El.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}class fp{constructor(e){this.persistence=e,this.ri=new Wu(e=>ju(e),_u),this.lastRemoteSnapshotVersion=ml.min(),this.highestTargetId=0,this.ii=0,this.si=new cp,this.targetCount=0,this.oi=Qh._r()}forEachTarget(e,t){return this.ri.forEach((e,n)=>t(n)),El.resolve()}getLastRemoteSnapshotVersion(e){return El.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return El.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),El.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),El.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Qh(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,El.resolve()}updateTargetData(e,t){return this.lr(t),El.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,El.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.ri.forEach((a,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),El.waitFor(i).next(()=>r)}getTargetCount(e){return El.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return El.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),El.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),El.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),El.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return El.resolve(n)}containsKey(e,t){return El.resolve(this.si.containsKey(t))}}class mp{constructor(e,t){this._i={},this.overlays={},this.ai=new Tl(0),this.ui=!1,this.ui=!0,this.ci=new lp,this.referenceDelegate=e(this),this.li=new fp(this),this.indexManager=new Hh,this.remoteDocumentCache=function(e){return new hp(e)}(e=>this.referenceDelegate.hi(e)),this.serializer=new Uh(t),this.Pi=new op(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sp,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new dp(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){Es("MemoryPersistence","Starting transaction:",e);const r=new gp(this.ai.next());return this.referenceDelegate.Ti(),n(r).next(e=>this.referenceDelegate.Ei(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ii(e,t){return El.or(Object.values(this._i).map(n=>()=>n.containsKey(e,t)))}}class gp extends zl{constructor(e){super(),this.currentSequenceNumber=e}}class yp{constructor(e){this.persistence=e,this.Ri=new cp,this.Ai=null}static Vi(e){return new yp(e)}get di(){if(this.Ai)return this.Ai;throw Cs(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),El.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),El.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),El.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(e=>this.di.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.di.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return El.forEach(this.di,n=>{const r=rl.fromPath(n);return this.mi(e,r).next(e=>{e||t.removeEntry(r,ml.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(e=>{e?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return El.or([()=>El.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class wp{constructor(e,t){this.persistence=e,this.fi=new Wu(e=>Nl(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=np(this,t)}static Vi(e,t){return new wp(e,t)}Ti(){}Ei(e){return El.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}pr(e){let t=0;return this.mr(e,e=>{t++}).next(()=>t)}mr(e,t){return El.forEach(this.fi,(n,r)=>this.wr(e,n,r).next(e=>e?El.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,r=>this.wr(e,r,t).next(e=>{e||(n++,i.removeEntry(r,ml.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),El.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),El.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),El.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),El.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Hc(e.data.value)),t}wr(e,t,n){return El.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.fi.get(t);return El.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}class bp{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ts=n,this.Es=r}static Is(e,t){let n=nd(),r=nd();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new bp(e,t.fromCache,n,r)}}class vp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}class xp{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=Mt()?8:jl(Ot())>0?6:4}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.gs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ps(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;const n=new vp;return this.ys(e,t,n).next(r=>{if(i.result=r,this.As)return this.ws(e,t,n,r.size)})}).next(()=>i.result)}ws(e,t,n,r){return n.documentReadCount<this.Vs?(Ss()<=on.DEBUG&&Es("QueryEngine","SDK will not create cache indexes for query:",Fu(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),El.resolve()):(Ss()<=on.DEBUG&&Es("QueryEngine","Query:",Fu(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(Ss()<=on.DEBUG&&Es("QueryEngine","The SDK decides to create cache indexes for query:",Fu(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Du(t))):El.resolve())}gs(e,t){if(Pu(t))return El.resolve(null);let n=Du(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=Lu(t,null,"F"),n=Du(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=nd(...r);return this.fs.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const a=this.Ss(t,r);return this.bs(t,a,i,n.readTime)?this.gs(e,Lu(t,null,"F")):this.Ds(e,a,t,n)}))})))}ps(e,t,n,r){return Pu(t)||r.isEqual(ml.min())?El.resolve(null):this.fs.getDocuments(e,n).next(i=>{const a=this.Ss(t,i);return this.bs(t,a,n,r)?El.resolve(null):(Ss()<=on.DEBUG&&Es("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Fu(t)),this.Ds(e,a,t,wl(r,gl)).next(e=>e))})}Ss(e,t){let n=new hc(Bu(e));return t.forEach((t,r)=>{Uu(e,r)&&(n=n.add(r))}),n}bs(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,n){return Ss()<=on.DEBUG&&Es("QueryEngine","Using full collection scan to execute query:",Fu(t)),this.fs.getDocumentsMatchingQuery(e,t,vl.min(),n)}Ds(e,t,n,r){return this.fs.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}const kp="LocalStore";class zp{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new cc(Ks),this.Fs=new Wu(e=>ju(e),_u),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ap(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Sp(e,t,n,r){return new zp(e,t,n,r)}async function Ep(e,t){const n=Ps(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.Os(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],a=[];let o=nd();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){a.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({Ns:e,removedBatchIds:i,addedBatchIds:a}))})})}function jp(e){const t=Ps(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function _p(e,t,n){let r=nd(),i=nd();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=Gu();return n.forEach((n,a)=>{const o=e.get(n);a.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),a.isNoDocument()&&a.version.isEqual(ml.min())?(t.removeEntry(n,a.readTime),r=r.insert(n,a)):!o.isValidDocument()||a.version.compareTo(o.version)>0||0===a.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(a),r=r.insert(n,a)):Es(kp,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",a.version)}),{Bs:r,Ls:i}})}function Tp(e,t){const n=Ps(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=Cl),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function Cp(e,t){const n=Ps(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.li.getTargetData(e,t).next(i=>i?(r=i,El.resolve(r)):n.li.allocateTargetId(e).next(i=>(r=new Fh(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.li.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.vs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(e.targetId,e),n.Fs.set(t,e.targetId)),e})}async function Ip(e,t,n){const r=Ps(e),i=r.vs.get(t),a=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",a,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!_l(e))throw e;Es(kp,`Failed to update sequence numbers for target ${t}: ${e}`)}r.vs=r.vs.remove(t),r.Fs.delete(i.target)}function Ap(e,t,n){const r=Ps(e);let i=ml.min(),a=nd();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=Ps(e),i=r.Fs.get(n);return void 0!==i?El.resolve(r.vs.get(i)):r.li.getTargetData(t,n)}(r,e,Du(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(e,t.targetId).next(e=>{a=e})}).next(()=>r.Cs.getDocumentsMatchingQuery(e,t,n?i:ml.min(),n?a:nd())).next(e=>(Pp(r,Vu(t),e),{documents:e,ks:a})))}function Pp(e,t,n){let r=e.Ms.get(t)||ml.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Ms.set(t,r)}class Rp{constructor(){this.activeTargetIds=id()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Np{constructor(){this.vo=new Rp,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Rp,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}class Dp{Mo(e){}shutdown(){}}const Op="ConnectivityMonitor";class Lp{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Es(Op,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Es(Op,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}let Mp=null;function $p(){return null===Mp?Mp=268435456+Math.round(2147483648*Math.random()):Mp++,"0x"+Mp.toString(16)}const Fp="RestConnection",Up={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Vp{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===Cc?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,i){const a=$p(),o=this.Qo(e,t.toUriEncodedString());Es(Fp,`Sending RPC '${e}' ${a}:`,o,n);const s={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(s,r,i);const{host:l}=new URL(o),c=Jt(l);return this.zo(e,o,s,n,c).then(t=>(Es(Fp,`Received RPC '${e}' ${a}: `,t),t),t=>{throw _s(Fp,`RPC '${e}' ${a} failed with error: `,t,"url: ",o,"request:",n),t})}jo(e,t,n,r,i,a){return this.Wo(e,t,n,r,i)}Go(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+ks,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Qo(e,t){const n=Up[e];let r=`${this.Ko}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}class Bp{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}const Hp="WebChannelConnection",Wp=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};class Kp extends Vp{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Kp.c_){const e=ys();Wp(e,gs.STAT_EVENT,e=>{e.stat===ms.PROXY?Es(Hp,"STAT_EVENT: detected buffering proxy"):e.stat===ms.NOPROXY&&Es(Hp,"STAT_EVENT: detected no buffering proxy")}),Kp.c_=!0}}zo(e,t,n,r,i){const a=$p();return new Promise((i,o)=>{const s=new ds;s.setWithCredentials(!0),s.listenOnce(ps.COMPLETE,()=>{try{switch(s.getLastErrorCode()){case fs.NO_ERROR:const t=s.getResponseJson();Es(Hp,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(t)),i(t);break;case fs.TIMEOUT:Es(Hp,`RPC '${e}' ${a} timed out`),o(new Ns(Rs.DEADLINE_EXCEEDED,"Request time out"));break;case fs.HTTP_ERROR:const n=s.getStatus();if(Es(Hp,`RPC '${e}' ${a} failed with status:`,n,"response text:",s.getResponseText()),n>0){let e=s.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=e?.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Rs).indexOf(t)>=0?t:Rs.UNKNOWN}(t.status);o(new Ns(e,t.message))}else o(new Ns(Rs.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new Ns(Rs.UNAVAILABLE,"Connection failed."));break;default:Cs(9055,{l_:e,streamId:a,h_:s.getLastErrorCode(),P_:s.getLastError()})}}finally{Es(Hp,`RPC '${e}' ${a} completed.`)}});const l=JSON.stringify(r);Es(Hp,`RPC '${e}' ${a} sending request:`,r),s.send(t,"POST",l,n,15)})}T_(e,t,n){const r=$p(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},s=this.longPollingOptions.timeoutSeconds;void 0!==s&&(o.longPollingTimeout=Math.round(1e3*s)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Go(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const l=i.join("");Es(Hp,`Creating RPC '${e}' stream ${r}: ${l}`,o);const c=a.createWebChannel(l,o);this.E_(c);let u=!1,d=!1;const h=new Bp({Jo:t=>{d?Es(Hp,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(u||(Es(Hp,`Opening RPC '${e}' stream ${r} transport.`),c.open(),u=!0),Es(Hp,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},Ho:()=>c.close()});return Wp(c,hs.EventType.OPEN,()=>{d||(Es(Hp,`RPC '${e}' stream ${r} transport opened.`),h.i_())}),Wp(c,hs.EventType.CLOSE,()=>{d||(d=!0,Es(Hp,`RPC '${e}' stream ${r} transport closed`),h.o_(),this.I_(c))}),Wp(c,hs.EventType.ERROR,t=>{d||(d=!0,_s(Hp,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),h.o_(new Ns(Rs.UNAVAILABLE,"The operation could not be completed")))}),Wp(c,hs.EventType.MESSAGE,t=>{if(!d){const n=t.data[0];As(!!n,16349);const i=n,a=i?.error||i[0]?.error;if(a){Es(Hp,`RPC '${e}' stream ${r} received error:`,a);const t=a.status;let n=function(e){const t=Ud[e];if(void 0!==t)return Hd(t)}(t),i=a.message;"NOT_FOUND"===t&&i.includes("database")&&i.includes("does not exist")&&i.includes(this.databaseId.database)&&_s(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=Rs.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),d=!0,h.o_(new Ns(n,i)),c.close()}else Es(Hp,`RPC '${e}' stream ${r} received:`,n),h.__(n)}}),Kp.u_(),setTimeout(()=>{h.s_()},0),h}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ws()}}function Gp(e){return new Kp(e)}function qp(){return"undefined"!=typeof document?document:null}function Qp(e){return new uh(e,!0)}Kp.c_=!1;class Yp{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;this.Ci=e,this.timerId=t,this.R_=n,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&Es("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}const Jp="PersistentStream";class Xp{constructor(e,t,n,r,i,a,o,s){this.Ci=e,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=s,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Yp(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===Rs.RESOURCE_EXHAUSTED?(js(t.toString()),js("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Rs.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(e=>{let[n,r]=e;this.D_===t&&this.G_(n,r)},t=>{e(()=>{const e=new Ns(Rs.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(e=>{n(()=>this.z_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.F_?this.J_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Es(Jp,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(Es(Jp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zp extends Xp{constructor(e,t,n,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Cs(39313,{state:e})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],a=function(e,t){return e.useProto3Json?(As(void 0===t||"string"==typeof t,58123),gc.fromBase64String(t||"")):(As(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),gc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,s=o&&function(e){const t=void 0===e.code?Rs.UNKNOWN:Hd(e.code);return new Ns(t,e.message||"")}(o);n=new nh(r,i,a,s||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=vh(e,r.document.name),a=mh(r.document.updateTime),o=r.document.createTime?mh(r.document.createTime):ml.min(),s=new Zc({mapValue:{fields:r.document.fields}}),l=tu.newFoundDocument(i,a,o,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new eh(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=vh(e,r.document),a=r.readTime?mh(r.readTime):ml.min(),o=tu.newNoDocument(i,a),s=r.removedTargetIds||[];n=new eh([],s,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=vh(e,r.document),a=r.removedTargetIds||[];n=new eh([],a,i,null)}else{if(!("filter"in t))return Cs(11601,{Vt:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,a=new Fd(r,i),o=e.targetId;n=new th(o,a)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return ml.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ml.min():t.readTime?mh(t.readTime):ml.min()}(e);return this.listener.H_(t,n)}Z_(e){const t={};t.database=zh(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Tu(r)?{documents:_h(e,r)}:{query:Th(e,r).ft},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=ph(e,t.resumeToken);const r=dh(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(ml.min())>0){n.readTime=hh(e,t.snapshotVersion.toTimestamp());const r=dh(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Cs(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.q_(t)}X_(e){const t={};t.database=zh(this.serializer),t.removeTarget=e,this.q_(t)}}class ef extends Xp{constructor(e,t,n,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return As(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,As(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){As(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=function(e,t){return e&&e.length>0?(As(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?mh(e.updateTime):mh(t);return n.isEqual(ml.min())&&(n=mh(t)),new xd(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=mh(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=zh(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>jh(this.serializer,e))};this.q_(t)}}class tf{}class nf extends tf{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new Ns(Rs.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(i=>{let[a,o]=i;return this.connection.Wo(e,yh(t,n),r,a,o)}).catch(e=>{throw"FirebaseError"===e.name?(e.code===Rs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ns(Rs.UNKNOWN,e.toString())})}jo(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(a=>{let[o,s]=a;return this.connection.jo(e,yh(t,n),r,o,s,i)}).catch(e=>{throw"FirebaseError"===e.name?(e.code===Rs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ns(Rs.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function rf(e,t,n,r){return new nf(e,t,n,r)}class af{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(js(t),this.aa=!1):Es("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}const of="RemoteStore";class sf{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(e=>{n.enqueueAndForget(async()=>{gf(this)&&(Es(of,"Restarting streams for network reachability change."),await async function(e){const t=Ps(e);t.Ia.add(4),await cf(t),t.Va.set("Unknown"),t.Ia.delete(4),await lf(t)}(this))})}),this.Va=new af(n,r)}}async function lf(e){if(gf(e))for(const t of e.Ra)await t(!0)}async function cf(e){for(const t of e.Ra)await t(!1)}function uf(e,t){const n=Ps(e);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),mf(n)?ff(n):Df(n).O_()&&hf(n,t))}function df(e,t){const n=Ps(e),r=Df(n);n.Ea.delete(t),r.O_()&&pf(n,t),0===n.Ea.size&&(r.O_()?r.L_():gf(n)&&n.Va.set("Unknown"))}function hf(e,t){if(e.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ml.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Df(e).Z_(t)}function pf(e,t){e.da.$e(t),Df(e).X_(t)}function ff(e){e.da=new ih({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ea.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),Df(e).start(),e.Va.ua()}function mf(e){return gf(e)&&!Df(e).x_()&&e.Ea.size>0}function gf(e){return 0===Ps(e).Ia.size}function yf(e){e.da=void 0}async function wf(e){e.Va.set("Online")}async function bf(e){e.Ea.forEach((t,n)=>{hf(e,t)})}async function vf(e,t){yf(e),mf(e)?(e.Va.ha(t),ff(e)):e.Va.set("Unknown")}async function xf(e,t,n){if(e.Va.set("Online"),t instanceof nh&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Ea.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ea.delete(r),e.da.removeTarget(r))}(e,t)}catch(n){Es(of,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await kf(e,n)}else if(t instanceof eh?e.da.Xe(t):t instanceof th?e.da.st(t):e.da.tt(t),!n.isEqual(ml.min()))try{const t=await jp(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.da.Tt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Ea.get(r);i&&e.Ea.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ea.get(t);if(!r)return;e.Ea.set(t,r.withResumeToken(gc.EMPTY_BYTE_STRING,r.snapshotVersion)),pf(e,t);const i=new Fh(r.target,t,n,r.sequenceNumber);hf(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Es(of,"Failed to raise snapshot:",t),await kf(e,t)}}async function kf(e,t,n){if(!_l(t))throw t;e.Ia.add(1),await cf(e),e.Va.set("Offline"),n||(n=()=>jp(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Es(of,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await lf(e)})}function zf(e,t){return t().catch(n=>kf(e,n,t))}async function Sf(e){const t=Ps(e),n=Of(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Cl;for(;Ef(t);)try{const e=await Tp(t.localStore,r);if(null===e){0===t.Ta.length&&n.L_();break}r=e.batchId,jf(t,e)}catch(e){await kf(t,e)}_f(t)&&Tf(t)}function Ef(e){return gf(e)&&e.Ta.length<10}function jf(e,t){e.Ta.push(t);const n=Of(e);n.O_()&&n.Y_&&n.ea(t.mutations)}function _f(e){return gf(e)&&!Of(e).x_()&&e.Ta.length>0}function Tf(e){Of(e).start()}async function Cf(e){Of(e).ra()}async function If(e){const t=Of(e);for(const n of e.Ta)t.ea(n.mutations)}async function Af(e,t,n){const r=e.Ta.shift(),i=Md.from(r,t,n);await zf(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Sf(e)}async function Pf(e,t){t&&Of(e).Y_&&await async function(e,t){if(function(e){return Bd(e)&&e!==Rs.ABORTED}(t.code)){const n=e.Ta.shift();Of(e).B_(),await zf(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Sf(e)}}(e,t),_f(e)&&Tf(e)}async function Rf(e,t){const n=Ps(e);n.asyncQueue.verifyOperationInProgress(),Es(of,"RemoteStore received new credentials");const r=gf(n);n.Ia.add(3),await cf(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await lf(n)}async function Nf(e,t){const n=Ps(e);t?(n.Ia.delete(2),await lf(n)):t||(n.Ia.add(2),await cf(n),n.Va.set("Unknown"))}function Df(e){return e.ma||(e.ma=function(e,t,n){const r=Ps(e);return r.sa(),new Zp(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:wf.bind(null,e),Yo:bf.bind(null,e),t_:vf.bind(null,e),H_:xf.bind(null,e)}),e.Ra.push(async t=>{t?(e.ma.B_(),mf(e)?ff(e):e.Va.set("Unknown")):(await e.ma.stop(),yf(e))})),e.ma}function Of(e){return e.fa||(e.fa=function(e,t,n){const r=Ps(e);return r.sa(),new ef(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Cf.bind(null,e),t_:Pf.bind(null,e),ta:If.bind(null,e),na:Af.bind(null,e)}),e.Ra.push(async t=>{t?(e.fa.B_(),await Sf(e)):(await e.fa.stop(),e.Ta.length>0&&(Es(of,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}class Lf{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Ds,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const a=Date.now()+n,o=new Lf(e,t,a,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ns(Rs.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mf(e,t){if(js("AsyncQueue",`${t}: ${e}`),_l(e))return new Ns(Rs.UNAVAILABLE,`${t}: ${e}`);throw e}class $f{static emptySet(e){return new $f(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||rl.comparator(t.key,n.key):(e,t)=>rl.comparator(e.key,t.key),this.keyedMap=Qu(),this.sortedSet=new cc(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $f))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new $f;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}class Ff{constructor(){this.ga=new cc(rl.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?0!==e.type&&3===n.type?this.ga=this.ga.insert(t,e):3===e.type&&1!==n.type?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.ga=this.ga.remove(t):1===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Cs(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class Uf{constructor(e,t,n,r,i,a,o,s,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=s,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const a=[];return t.forEach(e=>{a.push({type:0,doc:e})}),new Uf(e,t,$f.emptySet(t),a,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}class Vf{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Bf{constructor(){this.queries=Hf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){const n=Ps(e),r=n.queries;n.queries=Hf(),r.forEach((e,n)=>{for(const r of n.Sa)r.onError(t)})}(this,new Ns(Rs.ABORTED,"Firestore shutting down"))}}function Hf(){return new Wu(e=>$u(e),Mu)}async function Wf(e,t){const n=Ps(e);let r=3;const i=t.query;let a=n.queries.get(i);a?!a.ba()&&t.Da()&&(r=2):(a=new Vf,r=t.Da()?0:1);try{switch(r){case 0:a.wa=await n.onListen(i,!0);break;case 1:a.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(e){const n=Mf(e,`Initialization of query '${Fu(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,a),a.Sa.push(t),t.va(n.onlineState),a.wa&&t.Fa(a.wa)&&Qf(n)}async function Kf(e,t){const n=Ps(e),r=t.query;let i=3;const a=n.queries.get(r);if(a){const e=a.Sa.indexOf(t);e>=0&&(a.Sa.splice(e,1),0===a.Sa.length?i=t.Da()?0:1:!a.ba()&&t.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Gf(e,t){const n=Ps(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.Sa)e.Fa(i)&&(r=!0);t.wa=i}}r&&Qf(n)}function qf(e,t,n){const r=Ps(e),i=r.queries.get(t);if(i)for(const a of i.Sa)a.onError(n);r.queries.delete(t)}function Qf(e){e.Ca.forEach(e=>{e.next()})}var Yf,Jf;(Jf=Yf||(Yf={})).Ma="default",Jf.Cache="cache";class Xf{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Uf(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==t;return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ka(e){e=Uf.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Yf.Cache}}class Zf{constructor(e){this.key=e}}class em{constructor(e){this.key=e}}class tm{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=nd(),this.mutatedKeys=nd(),this.eu=Bu(e),this.tu=new $f(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new Ff,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,o=!1;const s="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const c=r.get(e),u=Uu(this.query,t)?t:null,d=!!c&&this.mutatedKeys.has(c.key),h=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;c&&u?c.data.isEqual(u.data)?d!==h&&(n.track({type:3,doc:u}),p=!0):this.su(c,u)||(n.track({type:2,doc:u}),p=!0,(s&&this.eu(u,s)>0||l&&this.eu(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),p=!0):c&&!u&&(n.track({type:1,doc:c}),p=!0,(s||l)&&(o=!0)),p&&(u?(a=a.add(u),i=h?i.add(e):i.delete(e)):(a=a.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;a.size>this.query.limit;){const e="F"===this.query.limitType?a.last():a.first();a=a.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{tu:a,iu:n,bs:o,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Cs(20277,{Vt:e})}};return n(e)-n(t)}(e.type,t.type)||this.eu(e.doc,t.doc)),this.ou(n),r=r??!1;const o=t&&!r?this._u():[],s=0===this.Ya.size&&this.current&&!r?1:0,l=s!==this.Xa;return this.Xa=s,0!==a.length||l?{snapshot:new Uf(this.query,e.tu,i,a,e.mutatedKeys,0===s,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ff,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(e=>this.Za=this.Za.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Za=this.Za.delete(e)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=nd(),this.tu.forEach(e=>{this.uu(e.key)&&(this.Ya=this.Ya.add(e.key))});const t=[];return e.forEach(e=>{this.Ya.has(e)||t.push(new em(e))}),this.Ya.forEach(n=>{e.has(n)||t.push(new Zf(n))}),t}cu(e){this.Za=e.ks,this.Ya=nd();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Uf.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Xa,this.hasCachedResults)}}const nm="SyncEngine";class rm{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class im{constructor(e){this.key=e,this.hu=!1}}class am{constructor(e,t,n,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Wu(e=>$u(e),Mu),this.Eu=new Map,this.Iu=new Set,this.Ru=new cc(rl.comparator),this.Au=new Map,this.Vu=new cp,this.du={},this.mu=new Map,this.fu=Qh.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function om(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=_m(e);let i;const a=r.Tu.get(t);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await lm(r,t,n,!0),i}async function sm(e,t){const n=_m(e);await lm(n,t,!0,!1)}async function lm(e,t,n,r){const i=await Cp(e.localStore,Du(t)),a=i.targetId,o=e.sharedClientState.addLocalQueryTarget(a,n);let s;return r&&(s=await cm(e,t,a,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&uf(e.remoteStore,i),s}async function cm(e,t,n,r,i){e.pu=(t,n,r)=>async function(e,t,n,r){let i=t.view.ru(n);i.bs&&(i=await Ap(e.localStore,t.query,!1).then(e=>{let{documents:n}=e;return t.view.ru(n,i)}));const a=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),s=t.view.applyChanges(i,e.isPrimaryClient,a,o);return xm(e,t.targetId,s.au),s.snapshot}(e,t,n,r);const a=await Ap(e.localStore,t,!0),o=new tm(t,a.ks),s=o.ru(a.documents),l=Zd.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),c=o.applyChanges(s,e.isPrimaryClient,l);xm(e,n,c.au);const u=new rm(t,n,o);return e.Tu.set(t,u),e.Eu.has(n)?e.Eu.get(n).push(t):e.Eu.set(n,[t]),c.snapshot}async function um(e,t,n){const r=Ps(e),i=r.Tu.get(t),a=r.Eu.get(i.targetId);if(a.length>1)return r.Eu.set(i.targetId,a.filter(e=>!Mu(e,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ip(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&df(r.remoteStore,i.targetId),bm(r,i.targetId)}).catch(Sl)):(bm(r,i.targetId),await Ip(r.localStore,i.targetId,!0))}async function dm(e,t){const n=Ps(e),r=n.Tu.get(t),i=n.Eu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),df(n.remoteStore,r.targetId))}async function hm(e,t){const n=Ps(e);try{const e=await function(e,t){const n=Ps(e),r=t.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const a=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const o=[];t.targetChanges.forEach((a,s)=>{const l=i.get(s);if(!l)return;o.push(n.li.removeMatchingKeys(e,a.removedDocuments,s).next(()=>n.li.addMatchingKeys(e,a.addedDocuments,s)));let c=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(s)?c=c.withResumeToken(gc.EMPTY_BYTE_STRING,ml.min()).withLastLimboFreeSnapshotVersion(ml.min()):a.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(a.resumeToken,r)),i=i.insert(s,c),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,a)&&o.push(n.li.updateTargetData(e,c))});let s=Gu(),l=nd();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(_p(e,a,t.documentUpdates).next(e=>{s=e.Bs,l=e.Ls})),!r.isEqual(ml.min())){const t=n.li.getLastRemoteSnapshotVersion(e).next(t=>n.li.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return El.waitFor(o).next(()=>a.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,s,l)).next(()=>s)}).then(e=>(n.vs=i,e))}(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Au.get(t);r&&(As(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.hu=!0:e.modifiedDocuments.size>0?As(r.hu,14607):e.removedDocuments.size>0&&(As(r.hu,42227),r.hu=!1))}),await Sm(n,e,t)}catch(e){await Sl(e)}}function pm(e,t,n){const r=Ps(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Tu.forEach((n,r)=>{const i=r.view.va(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=Ps(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.Sa)i.va(t)&&(r=!0)}),r&&Qf(n)}(r.eventManager,t),e.length&&r.Pu.H_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function fm(e,t,n){const r=Ps(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Au.get(t),a=i&&i.key;if(a){let e=new cc(rl.comparator);e=e.insert(a,tu.newNoDocument(a,ml.min()));const n=nd().add(a),i=new Xd(ml.min(),new Map,new cc(Ks),e,n);await hm(r,i),r.Ru=r.Ru.remove(a),r.Au.delete(t),zm(r)}else await Ip(r.localStore,t,!1).then(()=>bm(r,t,n)).catch(Sl)}async function mm(e,t){const n=Ps(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Ps(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,a=i.keys();let o=El.resolve();return a.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const a=n.docVersions.get(e);As(null!==a,48541),t.version.compareTo(a)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=nd();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);wm(n,r,null),ym(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Sm(n,e)}catch(e){await Sl(e)}}async function gm(e,t,n){const r=Ps(e);try{const e=await function(e,t){const n=Ps(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(As(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);wm(r,t,n),ym(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Sm(r,e)}catch(n){await Sl(n)}}function ym(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function wm(e,t,n){const r=Ps(e);let i=r.du[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.du[r.currentUser.toKey()]=i}}function bm(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Eu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Eu.delete(t),e.isPrimaryClient&&e.Vu.Gr(t).forEach(t=>{e.Vu.containsKey(t)||vm(e,t)})}function vm(e,t){e.Iu.delete(t.path.canonicalString());const n=e.Ru.get(t);null!==n&&(df(e.remoteStore,n),e.Ru=e.Ru.remove(t),e.Au.delete(n),zm(e))}function xm(e,t,n){for(const r of n)r instanceof Zf?(e.Vu.addReference(r.key,t),km(e,r)):r instanceof em?(Es(nm,"Document no longer in limbo: "+r.key),e.Vu.removeReference(r.key,t),e.Vu.containsKey(r.key)||vm(e,r.key)):Cs(19791,{wu:r})}function km(e,t){const n=t.key,r=n.path.canonicalString();e.Ru.get(n)||e.Iu.has(r)||(Es(nm,"New document in limbo: "+n),e.Iu.add(r),zm(e))}function zm(e){for(;e.Iu.size>0&&e.Ru.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new rl(el.fromString(t)),r=e.fu.next();e.Au.set(r,new im(n)),e.Ru=e.Ru.insert(n,r),uf(e.remoteStore,new Fh(Du(Au(n.path)),r,"TargetPurposeLimboResolution",Tl.ce))}}async function Sm(e,t,n){const r=Ps(e),i=[],a=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((e,s)=>{o.push(r.pu(s,t,n).then(e=>{if((e||n)&&r.isPrimaryClient){const t=e?!e.fromCache:n?.targetChanges.get(s.targetId)?.current;r.sharedClientState.updateQueryState(s.targetId,t?"current":"not-current")}if(e){i.push(e);const t=bp.Is(s.targetId,e);a.push(t)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(e,t){const n=Ps(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>El.forEach(t,t=>El.forEach(t.Ts,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>El.forEach(t.Es,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!_l(e))throw e;Es(kp,"Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.vs.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.vs=n.vs.insert(e,i)}}}(r.localStore,a))}async function Em(e,t){const n=Ps(e);if(!n.currentUser.isEqual(t)){Es(nm,"User change. New user:",t.toKey());const e=await Ep(n.localStore,t);n.currentUser=t,function(e,t){e.mu.forEach(e=>{e.forEach(e=>{e.reject(new Ns(Rs.CANCELLED,t))})}),e.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Sm(n,e.Ns)}}function jm(e,t){const n=Ps(e),r=n.Au.get(t);if(r&&r.hu)return nd().add(r.key);{let e=nd();const r=n.Eu.get(t);if(!r)return e;for(const t of r){const r=n.Tu.get(t);e=e.unionWith(r.view.nu)}return e}}function _m(e){const t=Ps(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=hm.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=fm.bind(null,t),t.Pu.H_=Gf.bind(null,t.eventManager),t.Pu.yu=qf.bind(null,t.eventManager),t}function Tm(e){const t=Ps(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=mm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=gm.bind(null,t),t}class Cm{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qp(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Sp(this.persistence,new xp,e.initialUser,this.serializer)}Cu(e){return new mp(yp.Vi,this.serializer)}Du(e){return new Np}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cm.provider={build:()=>new Cm};class Im extends Cm{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){As(this.persistence.referenceDelegate instanceof wp,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new ep(n,e.asyncQueue,t)}Cu(e){const t=void 0!==this.cacheSizeBytes?qh.withCacheSize(this.cacheSizeBytes):qh.DEFAULT;return new mp(e=>wp.Vi(e,t),this.serializer)}}class Am{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>pm(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Em.bind(null,this.syncEngine),await Nf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Bf}createDatastore(e){const t=Qp(e.databaseInfo.databaseId),n=Gp(e.databaseInfo);return rf(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new sf(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,e=>pm(this.syncEngine,e,0),Lp.v()?new Lp:new Dp)}createSyncEngine(e,t){return function(e,t,n,r,i,a,o){const s=new am(e,t,n,r,i,a);return o&&(s.gu=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){const t=Ps(e);Es(of,"RemoteStore shutting down."),t.Ia.add(5),await cf(t),t.Aa.shutdown(),t.Va.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Am.provider={build:()=>new Am};class Pm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):js("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}const Rm="FirestoreClient";class Nm{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=xs.UNAUTHENTICATED,this.clientId=Ws.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{Es(Rm,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(Es(Rm,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ds;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Mf(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Dm(e,t){e.asyncQueue.verifyOperationInProgress(),Es(Rm,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Ep(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Om(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Lm(e);Es(Rm,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>Rf(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Rf(t.remoteStore,n)),e._onlineComponents=t}async function Lm(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Es(Rm,"Using user provided OfflineComponentProvider");try{await Dm(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(e){return"FirebaseError"===e.name?e.code===Rs.FAILED_PRECONDITION||e.code===Rs.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(n))throw n;_s("Error using user provided cache. Falling back to memory cache: "+n),await Dm(e,new Cm)}}else Es(Rm,"Using default OfflineComponentProvider"),await Dm(e,new Im(void 0));return e._offlineComponents}async function Mm(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Es(Rm,"Using user provided OnlineComponentProvider"),await Om(e,e._uninitializedComponentsProvider._online)):(Es(Rm,"Using default OnlineComponentProvider"),await Om(e,new Am))),e._onlineComponents}function $m(e){return Mm(e).then(e=>e.syncEngine)}async function Fm(e){const t=await Mm(e),n=t.eventManager;return n.onListen=om.bind(null,t.syncEngine),n.onUnlisten=um.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=sm.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=dm.bind(null,t.syncEngine),n}function Um(e,t){const n=new Ds;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){const r=Tm(e);try{const e=await function(e,t){const n=Ps(e),r=fl.now(),i=t.reduce((e,t)=>e.add(t.key),nd());let a,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let s=Gu(),l=nd();return n.xs.getEntries(e,i).next(e=>{s=e,s.forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,s)).next(i=>{a=i;const o=[];for(const e of t){const t=Td(e,a.get(e.key).overlayedDocument);null!=t&&o.push(new Ad(e.key,t,eu(t.value.mapValue),kd.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(a,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:Yu(a)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.du[e.currentUser.toKey()];r||(r=new cc(Ks)),r=r.insert(t,n),e.du[e.currentUser.toKey()]=r}(r,e.batchId,n),await Sm(r,e.changes),await Sf(r.remoteStore)}catch(e){const t=Mf(e,"Failed to persist write");n.reject(t)}}(await $m(e),t,n)),n.promise}function Vm(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}const Bm="ComponentProvider",Hm=new Map;function Wm(e,t,n,r,i){return new Tc(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Vm(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}const Km="firestore.googleapis.com",Gm=!0;class qm{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new Ns(Rs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Km,this.ssl=Gm}else this.host=e.host,this.ssl=e.ssl??Gm;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=Gh;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<Jh)throw new Ns(Rs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Ns(Rs.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vm(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Ns(Rs.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Ns(Rs.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Ns(Rs.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qm{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ns(Rs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ns(Rs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qm(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ls;switch(e.type){case"firstParty":return new Us(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Ns(Rs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Hm.get(e);t&&(Es(Bm,"Removing Datastore"),Hm.delete(e),t.terminate())}(this),Promise.resolve()}}function Ym(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e=cl(e,Qm);const i=Jt(t),a=e._getSettings(),o={...a,emulatorOptions:e._getEmulatorOptions()},s=`${t}:${n}`;i&&Xt(`https://${s}`),a.host!==Km&&a.host!==s&&_s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...a,host:s,ssl:i,emulatorOptions:r};if(!Bt(l,o)&&(e._setSettings(l),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=xs.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Tt(JSON.stringify({alg:"none",type:"JWT"})),Tt(JSON.stringify(a)),""].join(".")}(r.mockUserToken,e._app?.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new Ns(Rs.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new xs(i)}e._authCredentials=new Ms(new Os(t,n))}}class Jm{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Jm(this.firestore,e,this._query)}}class Xm{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zm(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xm(this.firestore,e,this._key)}toJSON(){return{type:Xm._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(dl(t,Xm._jsonSchema))return new Xm(e,n||null,new rl(el.fromString(t.referencePath)))}}Xm._jsonSchemaVersion="firestore/documentReference/1.0",Xm._jsonSchema={type:ul("string",Xm._jsonSchemaVersion),referencePath:ul("string")};class Zm extends Jm{constructor(e,t,n){super(e,t,Au(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xm(this.firestore,null,new rl(e))}withConverter(e){return new Zm(this.firestore,e,this._path)}}function eg(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(e=Yt(e),il("collection","path",t),e instanceof Qm){const n=el.fromString(t,...r);return ol(n),new Zm(e,null,n)}{if(!(e instanceof Xm||e instanceof Zm))throw new Ns(Rs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(el.fromString(t,...r));return ol(n),new Zm(e.firestore,null,n)}}const tg="AsyncQueue";class ng{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Promise.resolve();this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Yp(this,"async_queue_retry"),this._c=()=>{const e=qp();e&&Es(tg,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;const t=qp();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=qp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Ds;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(oI){if(!_l(oI))throw oI;Es(tg,"Operation failed with retryable error: "+oI)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,js("INTERNAL UNHANDLED ERROR: ",rg(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Lf.createAndSchedule(this,e,t,n,e=>this.hc(e));return this.tc.push(r),r}uc(){this.nc&&Cs(47125,{Pc:rg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do{e=this.ac,await e}while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function rg(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class ig extends Qm{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ng,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ng(e),this._firestoreClient=void 0,await e}}}function ag(e){if(e._terminated)throw new Ns(Rs.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||og(e),e._firestoreClient}function og(e){const t=e._freezeSettings(),n=Wm(e._databaseId,e._app?.options.appId||"",e._persistenceKey,e._app?.options.apiKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new Nm(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){const t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}class sg{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sg(gc.fromBase64String(e))}catch(e){throw new Ns(Rs.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new sg(gc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:sg._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(dl(e,sg._jsonSchema))return sg.fromBase64String(e.bytes)}}sg._jsonSchemaVersion="firestore/bytes/1.0",sg._jsonSchema={type:ul("string",sg._jsonSchemaVersion),bytes:ul("string")};class lg{constructor(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(let r=0;r<t.length;++r)if(0===t[r].length)throw new Ns(Rs.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nl(t)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}class cg{constructor(e){this._methodName=e}}class ug{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ns(Rs.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ns(Rs.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ks(this._lat,e._lat)||Ks(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ug._jsonSchemaVersion}}static fromJSON(e){if(dl(e,ug._jsonSchema))return new ug(e.latitude,e.longitude)}}ug._jsonSchemaVersion="firestore/geoPoint/1.0",ug._jsonSchema={type:ul("string",ug._jsonSchemaVersion),latitude:ul("number"),longitude:ul("number")};class dg{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:dg._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(dl(e,dg._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new dg(e.vectorValues);throw new Ns(Rs.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dg._jsonSchemaVersion="firestore/vectorValue/1.0",dg._jsonSchema={type:ul("string",dg._jsonSchemaVersion),vectorValues:ul("object")};const hg=/^__.*__$/;class pg{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Ad(e,this.data,this.fieldMask,t,this.fieldTransforms):new Id(e,this.data,t,this.fieldTransforms)}}function fg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Cs(40011,{dataSource:e})}}class mg{constructor(e,t,n,r,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new mg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){const t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(e),n}fc(e){const t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.Ac(),n}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return _g(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(0===e.length)throw this.yc("Document fields must not be empty");if(fg(this.dataSource)&&hg.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class gg{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Qp(e)}I(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new mg({dataSource:e,methodName:t,targetDoc:n,path:nl.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yg(e){const t=e._freezeSettings(),n=Qp(e._databaseId);return new gg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function wg(e,t,n,r,i){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};const o=e.I(a.merge||a.mergeFields?2:0,t,n,i);zg("Data must be an object, but it was:",o,r);const s=xg(r,o);let l,c;if(a.merge)l=new fc(o.fieldMask),c=o.fieldTransforms;else if(a.mergeFields){const e=[];for(const r of a.mergeFields){const i=Sg(t,r,n);if(!o.contains(i))throw new Ns(Rs.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Tg(e,i)||e.push(i)}l=new fc(e),c=o.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,c=o.fieldTransforms;return new pg(new Zc(s),l,c)}class bg extends cg{_toFieldTransform(e){return new vd(e.path,new hd)}isEqual(e){return e instanceof bg}}function vg(e,t){if(kg(e=Yt(e)))return zg("Unsupported field value:",t,e),xg(e,t);if(e instanceof cg)return function(e,t){if(!fg(t.dataSource))throw t.yc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.yc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.yc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=vg(i,t.gc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Yt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return sd(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=fl.fromDate(e);return{timestampValue:hh(t.serializer,n)}}if(e instanceof fl){const n=new fl(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:hh(t.serializer,n)}}if(e instanceof ug)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof sg)return{bytesValue:ph(t.serializer,e._byteString)};if(e instanceof Xm){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.yc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:gh(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof dg)return function(e,t){const n=e instanceof dg?e.toArray():e,r={fields:{[Ac]:{stringValue:Nc},[Dc]:{arrayValue:{values:n.map(e=>{if("number"!=typeof e)throw t.yc("VectorValues must only contain numeric values.");return ad(t.serializer,e)})}}}};return{mapValue:r}}(e,t);if($h(e))return e._toProto(t.serializer);throw t.yc(`Unsupported field value: ${ll(e)}`)}(e,t)}function xg(e,t){const n={};return lc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):sc(e,(e,r)=>{const i=vg(r,t.dc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function kg(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof fl||e instanceof ug||e instanceof sg||e instanceof Xm||e instanceof cg||e instanceof dg||$h(e))}function zg(e,t,n){if(!kg(n)||!sl(n)){const r=ll(n);throw"an object"===r?t.yc(e+" a custom object"):t.yc(e+" "+r)}}function Sg(e,t,n){if((t=Yt(t))instanceof lg)return t._internalPath;if("string"==typeof t)return jg(e,t);throw _g("Field path arguments must be of type string or ",e,!1,void 0,n)}const Eg=new RegExp("[~\\*/\\[\\]]");function jg(e,t,n){if(t.search(Eg)>=0)throw _g(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new lg(...t.split("."))._internalPath}catch(RT){throw _g(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function _g(e,t,n,r,i){const a=r&&!r.isEmpty(),o=void 0!==i;let s=`Function ${t}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=". ";let l="";return(a||o)&&(l+=" (found",a&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Ns(Rs.INVALID_ARGUMENT,s+e+l)}function Tg(e,t){return e.some(e=>e.isEqual(t))}class Cg{convertValue(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(Oc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return bc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vc(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Cs(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";const n={};return sc(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){const t=e.fields?.[Dc].arrayValue?.values?.map(e=>bc(e.doubleValue));return new dg(t)}convertGeoPoint(e){return new ug(bc(e.latitude),bc(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=jc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(_c(e));default:return null}}convertTimestamp(e){const t=wc(e);return new fl(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=el.fromString(e);As(Mh(n),9688,{name:e});const r=new Ic(n.get(1),n.get(3)),i=new rl(n.popFirst(5));return r.isEqual(t)||js(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}class Ig extends Cg{constructor(e){super(),this.firestore=e}convertBytes(e){return new sg(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Xm(this.firestore,null,t)}}const Ag="@firebase/firestore",Pg="4.14.0";class Rg{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Xm(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ng(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Sg("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Ng extends Rg{data(){return super.data()}}function Dg(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Ns(Rs.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Og(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Lg{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mg extends Rg{constructor(e,t,n,r,i,a){super(e,t,n,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._document){if(this._converter){const t=new $g(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._document){const n=this._document.data.field(Sg("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Ns(Rs.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Mg._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}Mg._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mg._jsonSchema={type:ul("string",Mg._jsonSchemaVersion),bundleSource:ul("string","DocumentSnapshot"),bundleName:ul("string"),bundle:ul("string")};class $g extends Mg{data(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return super.data(e)}}class Fg{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Lg(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new $g(this._firestore,this._userDataWriter,n.key,n,new Lg(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(){const e=!!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Ns(Rs.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new $g(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Lg(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new $g(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Lg(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,a=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),a=n.indexOf(t.doc.key)),{type:Ug(t.type),doc:r,oldIndex:i,newIndex:a}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Ns(Rs.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fg._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ws.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ug(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Cs(61501,{type:e})}}Fg._jsonSchemaVersion="firestore/querySnapshot/1.0",Fg._jsonSchema={type:ul("string",Fg._jsonSchemaVersion),bundleSource:ul("string","QuerySnapshot"),bundleName:ul("string"),bundle:ul("string")};function Vg(e){e=cl(e,Xm);const t=cl(e.firestore,ig);return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=new Ds;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const a=new Pm({next:s=>{a.Nu(),t.enqueueAndForget(()=>Kf(e,o));const l=s.docs.has(n);!l&&s.fromCache?i.reject(new Ns(Rs.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&s.fromCache&&r&&"server"===r.source?i.reject(new Ns(Rs.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Xf(Au(n.path),a,{includeMetadataChanges:!0,qa:!0});return Wf(e,o)}(await Fm(e),e.asyncQueue,t,n,r)),r.promise}(ag(t),e._key).then(n=>Wg(t,e,n))}function Bg(e){e=cl(e,Jm);const t=cl(e.firestore,ig),n=ag(t),r=new Ig(t);return Dg(e._query),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=new Ds;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const a=new Pm({next:n=>{a.Nu(),t.enqueueAndForget(()=>Kf(e,o)),n.fromCache&&"server"===r.source?i.reject(new Ns(Rs.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Xf(n,a,{includeMetadataChanges:!0,qa:!0});return Wf(e,o)}(await Fm(e),e.asyncQueue,t,n,r)),r.promise}(n,e._query).then(n=>new Fg(t,r,e,n))}function Hg(e,t){return Um(ag(e),t)}function Wg(e,t,n){const r=n.docs.get(t._key),i=new Ig(e);return new Mg(e,i,t._key,r,new Lg(n.hasPendingWrites,n.fromCache),t.converter)}new WeakMap;!function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(function(e){ks=e})(mr),ur(new Zt("firestore",(e,n)=>{let{instanceIdentifier:r,options:i}=n;const a=e.getProvider("app").getImmediate(),o=new ig(new $s(e.getProvider("auth-internal")),new Bs(a,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ns(Rs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ic(e.options.projectId,t)}(a,r),a);return i={useFetchStreams:t,...i},o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),wr(Ag,Pg,e),wr(Ag,Pg,"esm2020")}();const Kg={apiKey:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",authDomain:"klaraqueen.firebaseapp.com",projectId:"klaraqueen",storageBucket:"klaraqueen.firebasestorage.app",messagingSenderId:"852297752171",appId:"1:852297752171:web:081021a1f6b86dfe5cdb2e"};function Gg(){return Boolean(Kg.apiKey&&Kg.authDomain&&Kg.projectId&&Kg.appId)}const qg=Gg()?Array.from(or.values()).length>0?yr():gr(Kg):null,Qg=qg?function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yr();const t=dr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=dr(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Bt(n.getOptions(),t??{}))return e;Nr(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:es,persistence:[lo,Va,Ga]}),r=Nt("authTokenSyncURL");if(r&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>is)return;const r=t?.token;as!==r&&(as=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Yt(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){Yt(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var i;const a=Pt("auth");return a&&na(n,`http://${a}`),n}(qg):null,Yg=qg?function(e,t){const n="object"==typeof e?e:yr(),r="string"==typeof e?e:t||Cc,i=dr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=(e=>{const t=Pt(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]})("firestore");e&&Ym(i,...e)}return i}(qg):null,Jg=new xa;var Xg=n(579);const Zg=(0,r.createContext)({user:null,loading:!0,signOutUser:async()=>{}});function ey(e){let{children:t}=e;const[n,i]=(0,r.useState)(null),[a,o]=(0,r.useState)(!0);(0,r.useEffect)(()=>Qg?function(e,t,n,r){return Yt(e).onAuthStateChanged(t,n,r)}(Qg,e=>{i(e),o(!1)}):(i(null),void o(!1)),[]);return(0,Xg.jsx)(Zg.Provider,{value:{user:n,loading:a,signOutUser:async()=>{Qg&&await function(e){return Yt(e).signOut()}(Qg)}},children:t})}function ty(){return(0,r.useContext)(Zg)}var ny=function(){return ny=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ny.apply(this,arguments)};Object.create;function ry(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var iy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ay="-ms-",oy="-moz-",sy="-webkit-",ly="comm",cy="rule",uy="decl",dy="@keyframes",hy=Math.abs,py=String.fromCharCode,fy=Object.assign;function my(e){return e.trim()}function gy(e,t){return(e=t.exec(e))?e[0]:e}function yy(e,t,n){return e.replace(t,n)}function wy(e,t,n){return e.indexOf(t,n)}function by(e,t){return 0|e.charCodeAt(t)}function vy(e,t,n){return e.slice(t,n)}function xy(e){return e.length}function ky(e){return e.length}function zy(e,t){return t.push(e),e}function Sy(e,t){return e.filter(function(e){return!gy(e,t)})}var Ey=1,jy=1,_y=0,Ty=0,Cy=0,Iy="";function Ay(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ey,column:jy,length:o,return:"",siblings:s}}function Py(e,t){return fy(Ay("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ry(e){for(;e.root;)e=Py(e.root,{children:[e]});zy(e,e.siblings)}function Ny(){return Cy=Ty>0?by(Iy,--Ty):0,jy--,10===Cy&&(jy=1,Ey--),Cy}function Dy(){return Cy=Ty<_y?by(Iy,Ty++):0,jy++,10===Cy&&(jy=1,Ey++),Cy}function Oy(){return by(Iy,Ty)}function Ly(){return Ty}function My(e,t){return vy(Iy,e,t)}function $y(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fy(e){return Ey=jy=1,_y=xy(Iy=e),Ty=0,[]}function Uy(e){return Iy="",e}function Vy(e){return my(My(Ty-1,Wy(91===e?e+2:40===e?e+1:e)))}function By(e){for(;(Cy=Oy())&&Cy<33;)Dy();return $y(e)>2||$y(Cy)>3?"":" "}function Hy(e,t){for(;--t&&Dy()&&!(Cy<48||Cy>102||Cy>57&&Cy<65||Cy>70&&Cy<97););return My(e,Ly()+(t<6&&32==Oy()&&32==Dy()))}function Wy(e){for(;Dy();)switch(Cy){case e:return Ty;case 34:case 39:34!==e&&39!==e&&Wy(Cy);break;case 40:41===e&&Wy(e);break;case 92:Dy()}return Ty}function Ky(e,t){for(;Dy()&&e+Cy!==57&&(e+Cy!==84||47!==Oy()););return"/*"+My(t,Ty-1)+"*"+py(47===e?e:Dy())}function Gy(e){for(;!$y(Oy());)Dy();return My(e,Ty)}function qy(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Qy(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case uy:return e.return=e.return||e.value;case ly:return"";case dy:return e.return=e.value+"{"+qy(e.children,r)+"}";case cy:if(!xy(e.value=e.props.join(",")))return""}return xy(n=qy(e.children,r))?e.return=e.value+"{"+n+"}":""}function Yy(e,t,n){switch(function(e,t){return 45^by(e,0)?(((t<<2^by(e,0))<<2^by(e,1))<<2^by(e,2))<<2^by(e,3):0}(e,t)){case 5103:return sy+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return sy+e+e;case 4855:return sy+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return oy+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return sy+e+oy+e+ay+e+e;case 5936:switch(by(e,t+11)){case 114:return sy+e+ay+yy(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return sy+e+ay+yy(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return sy+e+ay+yy(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return sy+e+ay+e+e;case 6165:return sy+e+ay+"flex-"+e+e;case 5187:return sy+e+yy(e,/(\w+).+(:[^]+)/,sy+"box-$1$2"+ay+"flex-$1$2")+e;case 5443:return sy+e+ay+"flex-item-"+yy(e,/flex-|-self/g,"")+(gy(e,/flex-|baseline/)?"":ay+"grid-row-"+yy(e,/flex-|-self/g,""))+e;case 4675:return sy+e+ay+"flex-line-pack"+yy(e,/align-content|flex-|-self/g,"")+e;case 5548:return sy+e+ay+yy(e,"shrink","negative")+e;case 5292:return sy+e+ay+yy(e,"basis","preferred-size")+e;case 6060:return sy+"box-"+yy(e,"-grow","")+sy+e+ay+yy(e,"grow","positive")+e;case 4554:return sy+yy(e,/([^-])(transform)/g,"$1"+sy+"$2")+e;case 6187:return yy(yy(yy(e,/(zoom-|grab)/,sy+"$1"),/(image-set)/,sy+"$1"),e,"")+e;case 5495:case 3959:return yy(e,/(image-set\([^]*)/,sy+"$1$`$1");case 4968:return yy(yy(e,/(.+:)(flex-)?(.*)/,sy+"box-pack:$3"+ay+"flex-pack:$3"),/space-between/,"justify")+sy+e+e;case 4200:if(!gy(e,/flex-|baseline/))return ay+"grid-column-align"+vy(e,t)+e;break;case 2592:case 3360:return ay+yy(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,gy(e.props,/grid-\w+-end/)})?~wy(e+(n=n[t].value),"span",0)?e:ay+yy(e,"-start","")+e+ay+"grid-row-span:"+(~wy(n,"span",0)?gy(n,/\d+/):+gy(n,/\d+/)-+gy(e,/\d+/))+";":ay+yy(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return gy(e.props,/grid-\w+-start/)})?e:ay+yy(yy(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return yy(e,/(.+)-inline(.+)/,sy+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xy(e)-1-t>6)switch(by(e,t+1)){case 109:if(45!==by(e,t+4))break;case 102:return yy(e,/(.+:)(.+)-([^]+)/,"$1"+sy+"$2-$3$1"+oy+(108==by(e,t+3)?"$3":"$2-$3"))+e;case 115:return~wy(e,"stretch",0)?Yy(yy(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return yy(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return ay+n+":"+r+s+(i?ay+n+"-span:"+(a?o:+o-+r)+s:"")+e});case 4949:if(121===by(e,t+6))return yy(e,":",":"+sy)+e;break;case 6444:switch(by(e,45===by(e,14)?18:11)){case 120:return yy(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+sy+(45===by(e,14)?"inline-":"")+"box$3$1"+sy+"$2$3$1"+ay+"$2box$3")+e;case 100:return yy(e,":",":"+ay)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return yy(e,"scroll-","scroll-snap-")+e}return e}function Jy(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case uy:return void(e.return=Yy(e.value,e.length,n));case dy:return qy([Py(e,{value:yy(e.value,"@","@"+sy)})],r);case cy:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(gy(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ry(Py(e,{props:[yy(t,/:(read-\w+)/,":-moz-$1")]})),Ry(Py(e,{props:[t]})),fy(e,{props:Sy(n,r)});break;case"::placeholder":Ry(Py(e,{props:[yy(t,/:(plac\w+)/,":"+sy+"input-$1")]})),Ry(Py(e,{props:[yy(t,/:(plac\w+)/,":-moz-$1")]})),Ry(Py(e,{props:[yy(t,/:(plac\w+)/,ay+"input-$1")]})),Ry(Py(e,{props:[t]})),fy(e,{props:Sy(n,r)})}return""})}}function Xy(e){return Uy(Zy("",null,null,null,[""],e=Fy(e),0,[0],e))}function Zy(e,t,n,r,i,a,o,s,l){for(var c=0,u=0,d=o,h=0,p=0,f=0,m=1,g=1,y=1,w=0,b="",v=i,x=a,k=r,z=b;g;)switch(f=w,w=Dy()){case 40:if(108!=f&&58==by(z,d-1)){-1!=wy(z+=yy(Vy(w),"&","&\f"),"&\f",hy(c?s[c-1]:0))&&(y=-1);break}case 34:case 39:case 91:z+=Vy(w);break;case 9:case 10:case 13:case 32:z+=By(f);break;case 92:z+=Hy(Ly()-1,7);continue;case 47:switch(Oy()){case 42:case 47:zy(tw(Ky(Dy(),Ly()),t,n,l),l),5!=$y(f||1)&&5!=$y(Oy()||1)||!xy(z)||" "===vy(z,-1,void 0)||(z+=" ");break;default:z+="/"}break;case 123*m:s[c++]=xy(z)*y;case 125*m:case 59:case 0:switch(w){case 0:case 125:g=0;case 59+u:-1==y&&(z=yy(z,/\f/g,"")),p>0&&(xy(z)-d||0===m&&47===f)&&zy(p>32?nw(z+";",r,n,d-1,l):nw(yy(z," ","")+";",r,n,d-2,l),l);break;case 59:z+=";";default:if(zy(k=ew(z,t,n,c,u,i,s,b,v=[],x=[],d,a),a),123===w)if(0===u)Zy(z,t,k,k,v,a,d,s,x);else{switch(h){case 99:if(110===by(z,3))break;case 108:if(97===by(z,2))break;default:u=0;case 100:case 109:case 115:}u?Zy(e,k,k,r&&zy(ew(e,k,k,0,0,i,s,b,i,v=[],d,x),x),i,x,d,s,r?v:x):Zy(z,k,k,k,[""],x,0,s,x)}}c=u=p=0,m=y=1,b=z="",d=o;break;case 58:d=1+xy(z),p=f;default:if(m<1)if(123==w)--m;else if(125==w&&0==m++&&125==Ny())continue;switch(z+=py(w),w*m){case 38:y=u>0?1:(z+="\f",-1);break;case 44:s[c++]=(xy(z)-1)*y,y=1;break;case 64:45===Oy()&&(z+=Vy(Dy())),h=Oy(),u=d=xy(b=z+=Gy(Ly())),w++;break;case 45:45===f&&2==xy(z)&&(m=0)}}return a}function ew(e,t,n,r,i,a,o,s,l,c,u,d){for(var h=i-1,p=0===i?a:[""],f=ky(p),m=0,g=0,y=0;m<r;++m)for(var w=0,b=vy(e,h+1,h=hy(g=o[m])),v=e;w<f;++w)(v=my(g>0?p[w]+" "+b:yy(b,/&\f/g,p[w])))&&(l[y++]=v);return Ay(e,t,n,0===i?cy:s,l,c,u,d)}function tw(e,t,n,r){return Ay(e,t,n,ly,py(Cy),vy(e,2,-2),0,r)}function nw(e,t,n,r,i){return Ay(e,t,n,uy,vy(e,0,r),vy(e,r+1,-1),r,i)}var rw="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.SC_ATTR)||"data-styled",iw="active",aw="data-styled-version",ow="6.3.12",sw="/*!sc*/\n",lw="undefined"!=typeof window&&"undefined"!=typeof document,cw=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.SC_DISABLE_SPEEDY)),uw={};function dw(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var hw=new Map,pw=new Map,fw=1,mw=function(e){if(hw.has(e))return hw.get(e);for(;pw.has(fw);)fw++;var t=fw++;return hw.set(e,t),pw.set(t,e),t},gw=function(e,t){fw=t+1,hw.set(e,t),pw.set(t,e)},yw=(new Set,Object.freeze([])),ww=Object.freeze({});function bw(e,t,n){return void 0===n&&(n=ww),e.theme!==n.theme&&e.theme||t||n.theme}var vw=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),xw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kw=/(^-|-$)/g;function zw(e){return e.replace(xw,"-").replace(kw,"")}var Sw=/(a)(d)/gi,Ew=function(e){return String.fromCharCode(e+(e>25?39:97))};function jw(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ew(t%52)+n;return(Ew(t%52)+n).replace(Sw,"$1-$2")}var _w,Tw=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Cw=function(e){return Tw(5381,e)};function Iw(e){return jw(Cw(e)>>>0)}function Aw(e){return e.displayName||e.name||"Component"}function Pw(e){return"string"==typeof e&&!0}var Rw="function"==typeof Symbol&&Symbol.for,Nw=Rw?Symbol.for("react.memo"):60115,Dw=Rw?Symbol.for("react.forward_ref"):60112,Ow={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Lw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$w=((_w={})[Dw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_w[Nw]=Mw,_w);function Fw(e){return("type"in(t=e)&&t.type.$$typeof)===Nw?Mw:"$$typeof"in e?$w[e.$$typeof]:Ow;var t}var Uw=Object.defineProperty,Vw=Object.getOwnPropertyNames,Bw=Object.getOwnPropertySymbols,Hw=Object.getOwnPropertyDescriptor,Ww=Object.getPrototypeOf,Kw=Object.prototype;function Gw(e,t,n){if("string"!=typeof t){if(Kw){var r=Ww(t);r&&r!==Kw&&Gw(e,r,n)}var i=Vw(t);Bw&&(i=i.concat(Bw(t)));for(var a=Fw(e),o=Fw(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Lw||n&&n[l]||o&&l in o||a&&l in a)){var c=Hw(t,l);try{Uw(e,l,c)}catch(e){}}}}return e}function qw(e){return"function"==typeof e}function Qw(e){return"object"==typeof e&&"styledComponentId"in e}function Yw(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Jw(e,t){return e.join(t||"")}function Xw(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Zw(e,t,n){if(void 0===n&&(n=!1),!n&&!Xw(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Zw(e[r],t[r]);else if(Xw(t))for(var r in t)e[r]=Zw(e[r],t[r]);return e}function eb(e,t){Object.defineProperty(e,"toString",{value:t})}var tb=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw dw(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=0,l=(a=0,t.length);a<l;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=this.tag.getRule(a)+sw;return t},e}(),nb="style[".concat(rw,"][").concat(aw,'="').concat(ow,'"]'),rb=new RegExp("^".concat(rw,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ib=function(e){return"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},ab=function(e){if(!e)return document;if(ib(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(ib(t))return t}return document},ob=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},sb=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(sw),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(rb);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(gw(u,c),ob(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},lb=function(e){for(var t=ab(e.options.target).querySelectorAll(nb),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(rw)!==iw&&(sb(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function cb(){return n.nc}var ub=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(rw,"]")));return t[t.length-1]}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(rw,iw),r.setAttribute(aw,ow);var o=cb();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},db=function(){function e(e){this.element=ub(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets,r=0,i=n.length;r<i;r++){var a=n[r];if(a.ownerNode===e)return a}throw dw(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),hb=function(){function e(e){this.element=ub(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),pb=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),fb=lw,mb={isServer:!lw,useCSSOMInjection:!cw},gb=function(){function e(e,t,n){void 0===e&&(e=ww),void 0===t&&(t={});var r=this;this.options=ny(ny({},mb),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&lw&&fb&&(fb=!1,lb(this)),eb(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return pw.get(e)}(n);if(void 0===i)return"continue";var a=e.names.get(i);if(void 0===a||!a.size)return"continue";var o=t.getGroup(n);if(0===o.length)return"continue";var s=rw+".g"+n+'[id="'+i+'"]',l="";a.forEach(function(e){e.length>0&&(l+=e+",")}),r+=o+s+'{content:"'+l+'"}'+sw},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return mw(e)},e.prototype.rehydrate=function(){!this.server&&lw&&lb(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var r=new e(ny(ny({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&lw&&t.target!==this.options.target&&ab(this.options.target)!==ab(t.target)&&lb(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new pb(n):t?new db(n):new hb(n)}(this.options),new tb(e)));var e},e.prototype.hasNameForId=function(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r},e.prototype.registerName=function(e,t){mw(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(mw(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(mw(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}();function yb(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in iy||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var wb=function(e){return e>="A"&&e<="Z"};function bb(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;wb(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var vb=Symbol.for("sc-keyframes");var xb=function(e){return null==e||!1===e||""===e},kb=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!xb(r)&&(Array.isArray(r)&&r.isCss||qw(r)?t.push("".concat(bb(n),":"),r,";"):Xw(r)?t.push.apply(t,ry(ry(["".concat(n," {")],kb(r),!1),["}"],!1)):t.push("".concat(bb(n),": ").concat(yb(n,r),";")))}return t};function zb(e,t,n,r,i){if(void 0===i&&(i=[]),"string"==typeof e)return e&&i.push(e),i;if(xb(e))return i;if(Qw(e))return i.push(".".concat(e.styledComponentId)),i;var a;if(qw(e))return!qw(a=e)||a.prototype&&a.prototype.isReactComponent||!t?(i.push(e),i):zb(e(t),t,n,r,i);if(function(e){return"object"==typeof e&&null!==e&&vb in e}(e))return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Xw(e)){for(var o=kb(e),s=0;s<o.length;s++)i.push(o[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)zb(e[s],t,n,r,i);return i}function Sb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(qw(n)&&!Qw(n))return!1}return!0}var Eb=Cw(ow),jb=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Sb(e),this.componentId=t,this.baseHash=Tw(Eb,t),this.baseStyle=n,gb.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Yw(r,this.staticRulesId);else{var i=Jw(zb(this.rules,e,t,n)),a=jw(Tw(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Yw(r,a),this.staticRulesId=a}else{for(var s=Tw(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=Jw(zb(u,e,t,n));s=Tw(Tw(s,String(c)),d),l+=d}}if(l){var h=jw(s>>>0);if(!t.hasNameForId(this.componentId,h)){var p=n(l,".".concat(h),void 0,this.componentId);t.insertRules(this.componentId,h,p)}r=Yw(r,h)}}return{className:r,css:"undefined"==typeof window?t.getTag().getGroup(mw(this.componentId)):""}},e}(),_b=/&/g,Tb=47,Cb=42;function Ib(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,r=0,i=!1,a=0;a<t;a++){var o=e.charCodeAt(a);if(0!==r||i||o!==Tb||e.charCodeAt(a+1)!==Cb)if(i)o===Cb&&e.charCodeAt(a+1)===Tb&&(i=!1,a++);else if(34!==o&&39!==o||0!==a&&92===e.charCodeAt(a-1)){if(0===r)if(123===o)n++;else if(125===o&&--n<0)return!0}else 0===r?r=o:r===o&&(r=0);else i=!0,a++}return 0!==n||0!==r}function Ab(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ab(e.children,t)),e})}function Pb(e){var t,n,r,i=void 0===e?ww:e,a=i.options,o=void 0===a?ww:a,s=i.plugins,l=void 0===s?yw:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push(function(e){e.type===cy&&e.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),e.props[0]=e.props[0].replace(_b,n).replace(r,c))}),o.prefix&&u.push(Jy),u.push(Qy);var d=[],h=function(e){var t=ky(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}(u.concat(function(e){return function(t){t.root||(t=t.return)&&e(t)}}(function(e){return d.push(e)}))),p=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=i,r=void 0;var l=function(e){if(!Ib(e))return e;for(var t=e.length,n="",r=0,i=0,a=0,o=!1,s=0;s<t;s++){var l=e.charCodeAt(s);if(0!==a||o||l!==Tb||e.charCodeAt(s+1)!==Cb)if(o)l===Cb&&e.charCodeAt(s+1)===Tb&&(o=!1,s++);else if(34!==l&&39!==l||0!==s&&92===e.charCodeAt(s-1)){if(0===a)if(123===l)i++;else if(125===l){if(--i<0){for(var c=s+1;c<t;){var u=e.charCodeAt(c);if(59===u||10===u)break;c++}c<t&&59===e.charCodeAt(c)&&c++,i=0,s=c-1,r=c;continue}0===i&&(n+=e.substring(r,s+1),r=s+1)}else 59===l&&0===i&&(n+=e.substring(r,s+1),r=s+1)}else 0===a?a=l:a===l&&(a=0);else o=!0,s++}if(r<t){var d=e.substring(r);Ib(d)||(n+=d)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],r=0,i=0,a=0,o=0;i<t;){var s=e.charCodeAt(i);if(34!==s&&39!==s||0!==i&&92===e.charCodeAt(i-1))if(0===a)if(s===Tb&&i+1<t&&e.charCodeAt(i+1)===Cb){for(i+=2;i+1<t&&(e.charCodeAt(i)!==Cb||e.charCodeAt(i+1)!==Tb);)i++;i+=2}else if(40===s&&i>=3&&108==(32|e.charCodeAt(i-1))&&114==(32|e.charCodeAt(i-2))&&117==(32|e.charCodeAt(i-3)))o=1,i++;else if(o>0)41===s?o--:40===s&&o++,i++;else if(s===Cb&&i+1<t&&e.charCodeAt(i+1)===Tb)i>r&&n.push(e.substring(r,i)),r=i+=2;else if(s===Tb&&i+1<t&&e.charCodeAt(i+1)===Tb){for(i>r&&n.push(e.substring(r,i));i<t&&10!==e.charCodeAt(i);)i++;r=i}else i++;else i++;else 0===a?a=s:a===s&&(a=0),i++}return 0===r?e:(r<t&&n.push(e.substring(r)),n.join(""))}(e)),c=Xy(a||i?"".concat(a," ").concat(i," { ").concat(l," }"):l);return o.namespace&&(c=Ab(c,o.namespace)),d=[],qy(c,h),d};return p.hash=l.length?l.reduce(function(e,t){return t.name||dw(15),Tw(e,t.name)},5381).toString():"",p}var Rb=new gb,Nb=Pb(),Db=r.createContext({shouldForwardProp:void 0,styleSheet:Rb,stylis:Nb}),Ob=(Db.Consumer,r.createContext(void 0));function Lb(){return r.useContext(Db)}function Mb(e){if(!r.useMemo)return e.children;var t=Lb().styleSheet,n=r.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),i=r.useMemo(function(){return Pb({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),a=r.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:i}},[e.shouldForwardProp,n,i]);return r.createElement(Db.Provider,{value:a},r.createElement(Ob.Provider,{value:i},e.children))}var $b=r.createContext(void 0);$b.Consumer;var Fb={};new Set;function Ub(e,t,n){var i=Qw(e),a=e,o=!Pw(e),s=t.attrs,l=void 0===s?yw:s,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":zw(e);Fb[n]=(Fb[n]||0)+1;var r="".concat(n,"-").concat(Iw(ow+n+Fb[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,d=t.displayName,h=void 0===d?function(e){return Pw(e)?"styled.".concat(e):"Styled(".concat(Aw(e),")")}(e):d,p=t.displayName&&t.componentId?"".concat(zw(t.displayName),"-").concat(t.componentId):t.componentId||u,f=i&&a.attrs?a.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(i&&a.shouldForwardProp){var g=a.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;m=function(e,t){return g(e,t)&&y(e,t)}}else m=g}var w=new jb(n,p,i?a.componentStyle:void 0);function b(e,t){return function(e,t,n){var i=e.attrs,a=e.componentStyle,o=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,u=r.useContext($b),d=Lb(),h=e.shouldForwardProp||d.shouldForwardProp,p=bw(t,u,o)||ww,f=function(e,t,n){for(var r,i=ny(ny({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=qw(r=e[a])?r(i):r;for(var s in o)"className"===s?i.className=Yw(i.className,o[s]):"style"===s?i.style=ny(ny({},i.style),o[s]):s in t&&void 0===t[s]||(i[s]=o[s])}return"className"in t&&"string"==typeof t.className&&(i.className=Yw(i.className,t.className)),i}(i,t,p),m=f.as||c,g={};for(var y in f)void 0===f[y]||"$"===y[0]||"as"===y||"theme"===y&&f.theme===p||("forwardedAs"===y?g.as=f.forwardedAs:h&&!h(y,m)||(g[y]=f[y]));var w=function(e,t){var n=Lb();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,f),b=w.className,v=Yw(s,l);return b&&(v+=" "+b),f.className&&(v+=" "+f.className),g[Pw(m)&&!vw.has(m)?"class":"className"]=v,n&&(g.ref=n),(0,r.createElement)(m,g)}(v,e,t)}b.displayName=h;var v=r.forwardRef(b);return v.attrs=f,v.componentStyle=w,v.displayName=h,v.shouldForwardProp=m,v.foldedComponentIds=i?Yw(a.foldedComponentIds,a.styledComponentId):"",v.styledComponentId=p,v.target=i?a.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Zw(e,i[r],!0);return e}({},a.defaultProps,e):e}}),eb(v,function(){return".".concat(v.styledComponentId)}),o&&Gw(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Vb(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Bb=function(e){return Object.assign(e,{isCss:!0})};function Hb(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(qw(e)||Xw(e))return Bb(zb(Vb(yw,ry([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?zb(r):Bb(zb(Vb(r,t)))}function Wb(e,t,n){if(void 0===n&&(n=ww),!t)throw dw(1,t);var r=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,Hb.apply(void 0,ry([r],i,!1)))};return r.attrs=function(r){return Wb(e,t,ny(ny({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Wb(e,t,ny(ny({},n),r))},r}var Kb=function(e){return Wb(Ub,e)},Gb=Kb;vw.forEach(function(e){Gb[e]=Kb(e)});var qb,Qb=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Sb(e),gb.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Jw(zb(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&gb.registerId(this.componentId+e);var i=this.componentId+e;this.isStatic?n.hasNameForId(i,i)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))},e}();!function(){function e(e,t){var n=this;this[qb]=!0,this.inject=function(e,t){void 0===t&&(t=Nb);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,eb(this,function(){throw dw(12,String(n.name))})}e.prototype.getName=function(e){return void 0===e&&(e=Nb),this.name+e.hash}}();qb=vb;(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=cb(),r=Jw([n&&'nonce="'.concat(n,'"'),"".concat(rw,'="true"'),"".concat(aw,'="').concat(ow,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw dw(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw dw(2);var n=e.instance.toString();if(!n)return[];var i=((t={})[rw]="",t[aw]=ow,t.dangerouslySetInnerHTML={__html:n},t),a=cb();return a&&(i.nonce=a),[r.createElement("style",ny({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new gb({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw dw(2);return r.createElement(Mb,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw dw(3)}})(),"__sc-".concat(rw,"__");const Yb={smallPhone:360,phone:430,tablet:820,desktopHd:1920,tv4k:3840},Jb={bordoAccent:"#9e1e36",bordoAccentDark:"#6a1426",bordoCore:"#4a1020",deepBlack:"#2e0810",outerSpace:"#2e0810",white:"#ffffff",goldMain:"#d4af37",goldHover:"#f1d592",goldSoft18:"rgba(212, 175, 55, 0.18)",goldSoft10:"rgba(180, 140, 30, 0.1)",goldSoft08:"rgba(212, 175, 55, 0.08)",goldSoft025:"rgba(212, 175, 55, 0.025)",testimonialBg:"rgba(255, 255, 255, 0.08)",testimonialBgHover:"rgba(255, 255, 255, 0.12)",testimonialBorder:"rgba(212, 175, 55, 0.24)",testimonialBorderHover:"rgba(212, 175, 55, 0.42)",testimonialText:"#ffffff",testimonialSubtext:"#b0b0b0",testimonialAccent:"#667eea",testimonialAccentLight:"rgba(102, 126, 234, 0.1)",testimonialAccentBorder:"rgba(102, 126, 234, 0.5)",cardBg1:"rgba(155, 45, 68, 0.08)",cardBg2:"rgba(75, 25, 45, 0.12)",cardBg3:"rgba(35, 10, 20, 0.15)",cardBgHover1:"rgba(175, 55, 85, 0.12)",cardBgHover2:"rgba(95, 35, 60, 0.18)",cardBgHover3:"rgba(40, 15, 25, 0.2)",navBorderGold26:"rgba(241, 213, 146, 0.26)",navBorderGold38:"rgba(241, 213, 146, 0.38)",navBorderGold48:"rgba(241, 213, 146, 0.48)",navBorderGold18:"rgba(241, 213, 146, 0.18)",navDividerGold50:"rgba(241, 213, 146, 0.5)",navBarUnderline:"rgba(212, 175, 55, 0.1)",navLoginBorder:"rgba(212, 175, 55, 0.25)",navLoginBg:"rgba(212, 175, 55, 0.08)",navLoginBgHover:"rgba(212, 175, 55, 0.15)",navLinkBarBgTop:"rgba(255, 245, 214, 0.04)",navLinkBarBgBottom:"rgba(30, 8, 14, 0.2)",navLinkBarBgHoverTop:"rgba(255, 245, 214, 0.08)",navLinkBarBgHoverBottom:"rgba(44, 12, 22, 0.28)",navToggleBg:"rgba(34, 10, 16, 0.72)",navBackdrop:"rgba(0, 0, 0, 0.4)",navShellBg:"rgba(0, 0, 0, 0.4)"},Xb={main:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'},Zb={heightDesktop:"90px",minHeightTablet:"64px",minHeightPhone:"60px",gridColumnGapDesktop:"clamp(10px, 2vw, 24px)",gridColumnGapTablet:"10px",gridColumnGapPhone:"8px",paddingXDesktop:"clamp(8px, 3vw, 50px)",paddingXTablet:"14px",paddingXPhone:"10px",navRightGapDesktop:"clamp(6px, 1.5vw, 12px)",navRightGapTablet:"clamp(4px, 1.2vw, 8px)",menuToggleSize:"44px",menuToggleRadius:"10px",menuToggleFontSize:"1.24rem",drawerTop:"78px",drawerBackdropTopTablet:"72px",drawerWidth:"min(92vw, 360px)",drawerMaxWidth:"360px",drawerPadding:"14px 18px 16px",drawerBorderRadius:"16px",drawerViewportOffset:"72px",linksBarGap:"clamp(4px, 1.5vw, 30px)",linksBarPaddingX:"8px",linksBarGapTablet:"clamp(3px, 0.8vw, 8px)",linksBarGapPhone:"clamp(2px, 0.6vw, 5px)",linksDrawerGapTablet:"16px",linksDrawerGapPhone:"14px",linksDrawerMarginBottom:"clamp(8px, 2vw, 12px)",linkBarFontWeight:600,linkDrawerFontWeight:500,linkBarFontSize:"clamp(0.48rem, 1.2vw, 0.90rem)",linkBarLetterSpacing:"clamp(0.5px, 0.08vw, 1px)",linkBarPadding:"clamp(2px, 0.3vw, 4px) clamp(4px, 0.7vw, 7px)",linkBarRadius:"10px",linkBarFontSizeTablet:"clamp(0.48rem, 0.9vw, 0.68rem)",linkBarLetterSpacingTablet:"0.6px",linkBarPaddingTablet:"clamp(2px, 0.2vw, 3px) clamp(3px, 0.5vw, 5px)",linkBarFontSizePhone:"clamp(0.44rem, 0.75vw, 0.56rem)",linkBarLetterSpacingPhone:"0.5px",linkBarPaddingPhone:"clamp(2px, 0.1vw, 3px) clamp(3px, 0.4vw, 5px)",linkDrawerFontSize:"0.9rem",linkDrawerLetterSpacing:"1.1px",linkDrawerPadding:"2px 0",linkDrawerFontSizePhone:"0.84rem",linkDrawerLetterSpacingPhone:"0.9px",linkDrawerPaddingTablet:"1px 0",linkDrawerPaddingPhone:"1px 0",linkSeparatorWidth:"18px",linkSeparatorOffsetY:"-9px",loginGap:"clamp(5px, 1vw, 10px)",loginPadding:"clamp(6px, 1.2vw, 10px) clamp(10px, 2vw, 18px)",loginFontSize:"clamp(0.8rem, 1.8vw, 0.95rem)",loginLetterSpacing:"0.3px",loginGapTablet:"clamp(4px, 1.5vw, 8px)",loginPaddingTablet:"clamp(6px, 1.5vw, 9px) clamp(10px, 2.5vw, 16px)",loginFontSizeTablet:"clamp(0.75rem, 2.2vw, 0.9rem)",loginGapPhone:"clamp(4px, 2vw, 6px)",loginPaddingPhone:"clamp(5px, 1.8vw, 8px) clamp(8px, 2.8vw, 14px)",loginFontSizePhone:"clamp(0.7rem, 2.8vw, 0.85rem)",loginIconFontSize:"clamp(0.9rem, 1.8vw, 1.1rem)",loginIconFontSizeTablet:"clamp(0.85rem, 2.2vw, 1rem)",loginIconFontSizePhone:"clamp(0.8rem, 2.8vw, 0.95rem)",socialGap:"20px",socialGapTablet:"14px",socialGapPhone:"12px",socialIconSize:"1.3rem",socialIconSizeTablet:"1.18rem",socialIconSizePhone:"1.08rem",mobileLoginMarginTop:"18px",mobileLoginPaddingY:"clamp(14px, 3vw, 18px)",mobileLoginMarginTopPhone:"16px",mobileLoginPaddingYPhone:"clamp(12px, 2.5vw, 16px)",mobileSocialMarginTop:"14px",mobileSocialPaddingTop:"12px"},ev=Gb.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(
      ellipse at 80% 10%,
      ${Jb.bordoAccent} 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      ${Jb.bordoAccentDark} 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 50% 50%,
      ${Jb.bordoCore} 0%,
      ${Jb.deepBlack} 100%
    );

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 70% 0%,
        ${Jb.goldSoft18} 0%,
        transparent 45%
      ),
      radial-gradient(
        ellipse at 100% 50%,
        ${Jb.goldSoft10} 0%,
        transparent 40%
      ),
      radial-gradient(
        ellipse at 30% 100%,
        ${Jb.goldSoft08} 0%,
        transparent 45%
      );
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 80px,
      ${Jb.goldSoft025} 80px,
      ${Jb.goldSoft025} 81px
    );
    pointer-events: none;
  }
`;const tv=function(){return(0,Xg.jsx)(ev,{})},nv=Zb,rv=Jb,iv=Yb,av=Gb.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${nv.heightDesktop};
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  column-gap: ${nv.gridColumnGapDesktop};
  padding: 0 ${nv.paddingXDesktop};
  background: ${rv.navShellBg};
  backdrop-filter: blur(15px);
  border-bottom: 1px solid ${rv.navBarUnderline};
  z-index: 1000;

  @media (max-width: ${iv.tablet}px) {
    height: auto;
    min-height: ${nv.minHeightTablet};
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "left center right";
    align-items: center;
    column-gap: ${nv.gridColumnGapTablet};
    row-gap: 0;
    padding: 0 ${nv.paddingXTablet};
  }

  @media (max-width: ${iv.phone}px) {
    min-height: ${nv.minHeightPhone};
    column-gap: ${nv.gridColumnGapPhone};
    padding: 0 ${nv.paddingXPhone};
  }
`,ov=Gb.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 0;
  flex-shrink: 0;

  @media (max-width: ${iv.tablet}px) {
    grid-area: left;
  }
`,sv=Gb.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  width: 100%;

  @media (max-width: ${iv.tablet}px) {
    display: none;
  }
`,lv=Gb.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${nv.navRightGapDesktop};
  min-width: 0;
  flex-shrink: 0;

  @media (max-width: ${iv.tablet}px) {
    grid-area: right;
    gap: ${nv.navRightGapTablet};
  }
`,cv=Gb.div`
  display: flex;
  flex-shrink: 0;

  @media (max-width: ${iv.tablet}px) {
    display: none;
  }
`,uv=Gb.button`
  display: none;
  border: 1px solid ${rv.navBorderGold38};
  background: ${rv.navToggleBg};
  color: ${rv.goldHover};
  width: ${nv.menuToggleSize};
  height: ${nv.menuToggleSize};
  border-radius: ${nv.menuToggleRadius};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${nv.menuToggleFontSize};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: rgba(255, 239, 194, 0.75);
    box-shadow:
      0 6px 16px rgba(0, 0, 0, 0.34),
      0 0 10px rgba(241, 213, 146, 0.22);
  }

  @media (max-width: ${iv.tablet}px) {
    display: inline-flex;
  }
`,dv=Gb.button`
  position: fixed;
  inset: 0;
  border: none;
  background: ${rv.navBackdrop};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
  z-index: 999;
  display: none;

  &[data-open] {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: ${iv.tablet}px) {
    top: ${nv.drawerBackdropTopTablet};
    display: block;
  }
`,hv=Gb.aside`
  position: fixed;
  top: ${nv.drawerTop};
  left: 50%;
  right: auto;
  width: ${nv.drawerWidth};
  max-width: ${nv.drawerMaxWidth};
  max-height: calc(100vh - ${nv.drawerViewportOffset});
  height: auto;
  padding: ${nv.drawerPadding};
  background: linear-gradient(
    180deg,
    rgba(120, 40, 64, 0.72) 0%,
    rgba(82, 24, 42, 0.68) 100%
  );
  backdrop-filter: blur(12px) saturate(120%);
  border: 1px solid ${rv.navBorderGold18};
  border-radius: ${nv.drawerBorderRadius};
  box-shadow:
    0 14px 34px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 247, 220, 0.12);
  transform: translate(-50%, -14px);
  opacity: 0;
  pointer-events: none;
  transition:
    transform 0.24s ease,
    opacity 0.24s ease;
  z-index: 1001;
  display: none;
  overflow-y: auto;

  &[data-open] {
    transform: translate(-50%, 0);
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: ${iv.tablet}px) {
    display: block;
  }
`,pv=Gb.div`
  margin-top: ${nv.mobileSocialMarginTop};
  padding-top: ${nv.mobileSocialPaddingTop};
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid ${rv.navBorderGold18};

  & > div {
    justify-content: center;
  }
`,fv=Gb.div`
  margin-top: ${nv.mobileLoginMarginTop};
  padding: ${nv.mobileLoginPaddingY} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${rv.navBorderGold18};

  @media (max-width: ${iv.phone}px) {
    margin-top: ${nv.mobileLoginMarginTopPhone};
    padding: ${nv.mobileLoginPaddingYPhone} 0;
  }
`,mv={src:n.p+"static/media/znak-wodny.5040197ae93bea0121d6.png",alt:"Logo Klara Queen",name:"Klara Queen",ariaLabel:"Strona g\u0142\xf3wna Klara Queen"},gv=Gb(wt)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`,yv=Gb.img.attrs({src:mv.src,alt:mv.alt})`
  height: clamp(50px, 8vw, 85px);
  width: auto;
  cursor: pointer;
  filter: brightness(3) contrast(1.2) saturate(1.1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.34))
    drop-shadow(0 0 8px ${Jb.goldMain})
    drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18));
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
    filter: brightness(3) contrast(1.2) saturate(1.1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${Jb.goldMain})
      drop-shadow(0 0 16px ${Jb.goldHover});
  }
`;const wv=function(){return(0,Xg.jsx)(gv,{to:"/","aria-label":mv.ariaLabel,children:(0,Xg.jsx)(yv,{})})},bv=Zb,vv=Jb,xv=Gb.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${bv.linksBarGap};
  flex-wrap: nowrap;
  list-style: none;
  margin: 0;
  padding: 0 ${bv.linksBarPaddingX};
  white-space: nowrap;
  width: auto;
  min-width: 0;
  max-width: 100%;

  @media (max-width: ${Yb.tablet}px) {
    gap: ${bv.linksBarGapTablet};
    padding: 0;
    max-width: 100%;
  }

  @media (max-width: ${Yb.phone}px) {
    gap: ${bv.linksBarGapPhone};
  }
`,kv=Gb.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${bv.linksDrawerGapTablet};
  flex-wrap: nowrap;
  list-style: none;
  margin: 0 0 ${bv.linksDrawerMarginBottom} 0;
  padding: 0;
  white-space: nowrap;
  width: auto;
  min-width: 0;

  @media (max-width: ${Yb.phone}px) {
    gap: ${bv.linksDrawerGapPhone};
  }
`,zv=Gb.li`
  flex-shrink: 1;
  min-width: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: auto;
  color: ${vv.goldHover};
  font-family: ${Xb.main};
  font-weight: ${bv.linkBarFontWeight};
  text-transform: uppercase;
  letter-spacing: ${bv.linkBarLetterSpacing};
  cursor: pointer;
  font-size: ${bv.linkBarFontSize};
  white-space: nowrap;
  text-align: center;
  line-height: 1;
  padding: ${bv.linkBarPadding};
  border-radius: ${bv.linkBarRadius};
  border: 1px solid ${vv.navBorderGold26};
  background: linear-gradient(
    180deg,
    ${vv.navLinkBarBgTop} 0%,
    ${vv.navLinkBarBgBottom} 100%
  );
  text-shadow:
    0 0 1px rgba(255, 255, 255, 0.22),
    0 0 8px rgba(212, 175, 55, 0.2);
  transition:
    border-color 0.3s ease,
    background 0.3s ease,
    color 0.3s ease,
    text-shadow 0.3s ease,
    transform 0.3s ease;

  &::before {
    content: "";
    display: none;
  }

  &:not(:last-child)::after {
    content: "";
    display: none;
  }

  @media (max-width: ${Yb.tablet}px) {
    letter-spacing: ${bv.linkBarLetterSpacingTablet};
    font-size: ${bv.linkBarFontSizeTablet};
    padding: ${bv.linkBarPaddingTablet};
    white-space: nowrap;
  }

  @media (max-width: ${Yb.phone}px) {
    letter-spacing: ${bv.linkBarLetterSpacingPhone};
    font-size: ${bv.linkBarFontSizePhone};
    padding: ${bv.linkBarPaddingPhone};
  }

  &:hover {
    color: ${vv.white};
    transform: translateY(-1px);
    border-color: ${vv.navBorderGold48};
    background: linear-gradient(
      180deg,
      ${vv.navLinkBarBgHoverTop} 0%,
      ${vv.navLinkBarBgHoverBottom} 100%
    );
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${vv.goldMain},
      0 0 18px ${vv.goldHover};
  }
`,Sv=Gb.li`
  flex-shrink: 0;
  min-width: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: auto;
  color: ${vv.goldHover};
  font-family: ${Xb.main};
  font-weight: ${bv.linkDrawerFontWeight};
  text-transform: uppercase;
  letter-spacing: ${bv.linkDrawerLetterSpacing};
  cursor: pointer;
  font-size: ${bv.linkDrawerFontSize};
  white-space: nowrap;
  text-align: center;
  line-height: 1;
  padding: ${bv.linkDrawerPadding};
  border-radius: ${bv.linkBarRadius};
  border: none;
  background: transparent;
  text-shadow:
    0 0 1px rgba(255, 255, 255, 0.22),
    0 0 8px rgba(212, 175, 55, 0.2);
  transition:
    border-color 0.3s ease,
    background 0.3s ease,
    color 0.3s ease,
    text-shadow 0.3s ease,
    transform 0.3s ease;

  &::before {
    content: "";
    display: none;
  }

  &:not(:last-child)::after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    bottom: ${bv.linkSeparatorOffsetY};
    width: ${bv.linkSeparatorWidth};
    height: 1px;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${vv.navDividerGold50} 50%,
      transparent 100%
    );
  }

  @media (max-width: ${Yb.tablet}px) {
    padding: ${bv.linkDrawerPaddingTablet};
  }

  @media (max-width: ${Yb.phone}px) {
    letter-spacing: ${bv.linkDrawerLetterSpacingPhone};
    font-size: ${bv.linkDrawerFontSizePhone};
    padding: ${bv.linkDrawerPaddingPhone};
  }

  &:hover {
    color: ${vv.white};
    transform: translateY(-1px);
    border-color: transparent;
    background: transparent;
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${vv.goldMain},
      0 0 18px ${vv.goldHover};
  }
`,Ev=Gb.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: inherit;
`;var jv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_v=r.createContext&&r.createContext(jv),Tv=["attr","size","title"];function Cv(){return Cv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cv.apply(null,arguments)}function Iv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Av(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Iv(Object(n),!0).forEach(function(t){Pv(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Iv(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Pv(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rv(e){return e&&e.map((e,t)=>r.createElement(e.tag,Av({key:t},e.attr),Rv(e.child)))}function Nv(e){return t=>r.createElement(Dv,Cv({attr:Av({},e.attr)},t),Rv(e.child))}function Dv(e){var t=t=>{var n,{attr:i,size:a,title:o}=e,s=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,Tv),l=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",Cv({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:n,style:Av(Av({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==_v?r.createElement(_v.Consumer,null,e=>t(e)):t(jv)}function Ov(e){return Nv({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function Lv(e){return Nv({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Mv(e){return Nv({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"},child:[]}]})(e)}function $v(e){return Nv({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"},child:[]}]})(e)}function Fv(e){return Nv({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"},child:[]}]})(e)}function Uv(e){return Nv({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(e)}function Vv(e){return Nv({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(e)}function Bv(e){return Nv({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function Hv(e){return Nv({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(e)}function Wv(e){return Nv({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(e)}function Kv(e){return Nv({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function Gv(e){return Nv({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(e)}function qv(e){return Nv({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}const Qv=[{id:1,icon:function(e){return Nv({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)},url:"https://youtube.com",label:"YouTube"},{id:2,icon:function(e){return Nv({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)},url:"https://facebook.com",label:"Facebook"},{id:3,icon:function(e){return Nv({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(e)},url:"https://allegro.pl",label:"Allegro"}],Yv={labels:[{name:"Start",to:"/"},{name:"Oferta",to:"/offer"},{name:"Aktualno\u015bci",to:"/blog"},{name:"Wsp\xf3\u0142praca",to:"/cooperation"},{name:"Najcz\u0119stsze pytania",to:"/questions"},{name:"O Nas",to:"/about"}],socials:Qv,aria:{closeLabel:"Zamknij menu",openLabel:"Otw\xf3rz menu"}};const Jv=function(e){let{variant:t="bar",onItemClick:n}=e;const r=()=>{n&&n()},i="drawer"===t?kv:xv,a="drawer"===t?Sv:zv;return(0,Xg.jsx)(i,{children:Yv.labels.map((e,t)=>(0,Xg.jsx)(a,{onClick:r,children:e.to?(0,Xg.jsx)(Ev,{as:wt,to:e.to,children:e.name}):(0,Xg.jsx)(Ev,{href:e.url,children:e.name})},`${e.name}-${t}`))})},Xv=Zb,Zv=Jb,ex=Yb,tx=Gb.a`
  display: flex;
  align-items: center;
  gap: ${Xv.loginGap};
  padding: ${Xv.loginPadding};
  color: ${Zv.goldHover};
  background: ${Zv.navLoginBg};
  border: 1px solid ${Zv.navLoginBorder};
  border-radius: ${Xv.linkBarRadius};
  text-decoration: none;
  cursor: pointer;
  transition:
    color 0.3s ease,
    background 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease,
    filter 0.3s ease,
    box-shadow 0.3s ease;
  filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.22))
    drop-shadow(0 0 8px rgba(212, 175, 55, 0.22));
  font-weight: 500;
  font-size: ${Xv.loginFontSize};
  letter-spacing: ${Xv.loginLetterSpacing};
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: ${ex.tablet}px) {
    font-size: ${Xv.loginFontSizeTablet};
    padding: ${Xv.loginPaddingTablet};
    gap: ${Xv.loginGapTablet};
  }

  @media (max-width: ${ex.phone}px) {
    font-size: ${Xv.loginFontSizePhone};
    padding: ${Xv.loginPaddingPhone};
    gap: ${Xv.loginGapPhone};
  }

  &:hover {
    color: ${Zv.white};
    background: ${Zv.navLoginBgHover};
    border-color: rgba(255, 239, 194, 0.5);
    transform: translateY(-2px) scale(1.03);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${Zv.goldMain})
      drop-shadow(0 0 16px ${Zv.goldHover});
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
  }

  &:active {
    transform: translateY(0) scale(1);
  }
`,nx=Gb.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${Xv.loginIconFontSize};
  flex-shrink: 0;

  @media (max-width: ${ex.tablet}px) {
    font-size: ${Xv.loginIconFontSizeTablet};
  }

  @media (max-width: ${ex.phone}px) {
    font-size: ${Xv.loginIconFontSizePhone};
  }
`,rx=Gb.span`
  font-family: inherit;
  letter-spacing: ${Xv.loginLetterSpacing};
`,ix=Gb.div`
  display: flex;
  align-items: center;
  gap: clamp(6px, 1.2vw, 10px);
  flex-shrink: 0;
`,ax=Gb(wt)`
  display: flex;
  align-items: center;
  gap: ${Xv.loginGap};
  padding: ${Xv.loginPadding};
  color: ${Zv.goldHover};
  background: ${Zv.navLoginBg};
  border: 1px solid ${Zv.navLoginBorder};
  border-radius: ${Xv.linkBarRadius};
  text-decoration: none;
  font-weight: 500;
  font-size: ${Xv.loginFontSize};
  letter-spacing: ${Xv.loginLetterSpacing};
  white-space: nowrap;
  transition:
    color 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;

  @media (max-width: ${ex.tablet}px) {
    font-size: ${Xv.loginFontSizeTablet};
    padding: ${Xv.loginPaddingTablet};
    gap: ${Xv.loginGapTablet};
  }

  @media (max-width: ${ex.phone}px) {
    font-size: ${Xv.loginFontSizePhone};
    padding: ${Xv.loginPaddingPhone};
    gap: ${Xv.loginGapPhone};
  }

  &:hover {
    color: ${Zv.white};
    background: ${Zv.navLoginBgHover};
    border-color: rgba(255, 239, 194, 0.5);
    transform: translateY(-1px);
  }
`,ox=Gb.button`
  padding: ${Xv.loginPadding};
  border: 1px solid ${Zv.navBorderGold26};
  border-radius: ${Xv.linkBarRadius};
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.78rem;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  @media (max-width: ${ex.tablet}px) {
    padding: ${Xv.loginPaddingTablet};
  }

  @media (max-width: ${ex.phone}px) {
    padding: 8px 10px;
    font-size: 0.72rem;
  }

  &:hover {
    color: ${Zv.white};
    border-color: ${Zv.navBorderGold48};
    background: rgba(158, 30, 54, 0.35);
  }
`;const sx=function(e){let{variant:t}=e;const{user:n,loading:r,signOutUser:i}=ty();return r?(0,Xg.jsxs)(tx,{as:wt,to:"/login","aria-label":"Logowanie",children:[(0,Xg.jsx)(nx,{children:(0,Xg.jsx)(Uv,{})}),(0,Xg.jsx)(rx,{children:"Logowanie"})]}):n?"drawer"===t?(0,Xg.jsxs)(ix,{children:[(0,Xg.jsxs)(ax,{to:"/konto","aria-label":"Moje konto",children:[(0,Xg.jsx)(nx,{children:(0,Xg.jsx)(Ov,{})}),(0,Xg.jsx)(rx,{children:"Konto"})]}),(0,Xg.jsx)(ox,{type:"button",onClick:()=>i(),children:"Wyloguj"})]}):(0,Xg.jsxs)(ax,{to:"/konto","aria-label":"Moje konto",children:[(0,Xg.jsx)(nx,{children:(0,Xg.jsx)(Ov,{})}),(0,Xg.jsx)(rx,{children:"Konto"})]}):(0,Xg.jsxs)(tx,{as:wt,to:"/login","aria-label":"Zaloguj si\u0119",children:[(0,Xg.jsx)(nx,{children:(0,Xg.jsx)(Uv,{})}),(0,Xg.jsx)(rx,{children:"Logowanie"})]})},lx=Zb,cx=Jb,ux=Yb,dx=Gb.div`
  display: flex;
  gap: ${lx.socialGap};
  align-items: center;

  @media (max-width: ${ux.tablet}px) {
    gap: ${lx.socialGapTablet};
  }

  @media (max-width: ${ux.phone}px) {
    gap: ${lx.socialGapPhone};
  }
`,hx=Gb.a`
  color: ${cx.goldHover};
  font-size: ${lx.socialIconSize};
  transition:
    color 0.3s ease,
    transform 0.3s ease,
    filter 0.3s ease;
  display: flex;
  align-items: center;
  text-decoration: none;
  filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.22))
    drop-shadow(0 0 8px rgba(212, 175, 55, 0.22));

  @media (max-width: ${ux.tablet}px) {
    font-size: ${lx.socialIconSizeTablet};
  }

  @media (max-width: ${ux.phone}px) {
    font-size: ${lx.socialIconSizePhone};
  }

  &:hover {
    color: ${cx.white};
    transform: translateY(-2px) scale(1.04);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${cx.goldMain})
      drop-shadow(0 0 16px ${cx.goldHover});
  }
`;const px=function(){return(0,Xg.jsx)(dx,{children:Yv.socials.map(e=>{const t=e.icon;return(0,Xg.jsx)(hx,{href:e.url,target:"_blank",rel:"noreferrer","aria-label":e.label,children:(0,Xg.jsx)(t,{title:e.label})},e.id)})})};const fx=function(){const[e,t]=(0,r.useState)(!1),n=()=>{t(!1)};return(0,Xg.jsxs)(Xg.Fragment,{children:[(0,Xg.jsxs)(av,{children:[(0,Xg.jsx)(ov,{children:(0,Xg.jsx)(wv,{})}),(0,Xg.jsx)(sv,{children:(0,Xg.jsx)(Jv,{})}),(0,Xg.jsxs)(lv,{children:[(0,Xg.jsx)(cv,{children:(0,Xg.jsx)(sx,{})}),(0,Xg.jsx)(uv,{type:"button",onClick:()=>{t(e=>!e)},"aria-label":e?Yv.aria.closeLabel:Yv.aria.openLabel,"aria-expanded":e,children:e?(0,Xg.jsx)(Lv,{}):(0,Xg.jsx)(qv,{})})]})]}),(0,Xg.jsx)(dv,{type:"button","data-open":e?"":void 0,onClick:n}),(0,Xg.jsxs)(hv,{"data-open":e?"":void 0,children:[(0,Xg.jsx)(Jv,{variant:"drawer",onItemClick:n}),(0,Xg.jsxs)(fv,{children:[(0,Xg.jsx)(sx,{variant:"drawer"}),(0,Xg.jsx)(pv,{children:(0,Xg.jsx)(px,{})})]})]})]})},mx=Gb.footer`
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(13, 0, 3, 0.9) 0%,
    rgba(26, 0, 5, 0.85) 100%
  );
  border-top: 1px solid rgba(212, 175, 55, 0.25);
  padding: 60px 50px 25px;
  position: relative;
  z-index: 10;
  backdrop-filter: blur(10px);

  @media (max-width: ${Yb.desktopHd}px) {
    padding: 55px 45px 22px;
  }

  @media (max-width: ${Yb.tablet}px) {
    padding: 45px 18px 18px;
  }

  @media (max-width: 821px) {
    padding: 30px 12px 12px;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    padding: 25px 10px 10px;
  }
`,gx=Gb.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 50px;
  width: 100%;

  @media (max-width: ${Yb.tablet}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }

  @media (max-width: 821px) {
    gap: 12px;
  }

  @media (max-width: ${Yb.phone}px) {
    gap: 12px;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    gap: 10px;
  }
`,yx="kontakt@studioklara.pl",wx={brand:{name:"Klara Queen",slogan:"Digital Excellence",description:"Tworzymy luksusowe do\u015bwiadczenia cyfrowe, kt\xf3re definiuj\u0105 now\u0105 jako\u015b\u0107 Twojej marki w sieci."},links:[{name:"Start",to:"/"},{name:"Oferta",to:"/offer"},{name:"Aktualno\u015bci",to:"/blog"},{name:"Wsp\xf3\u0142praca",to:"/cooperation"},{name:"Opinie",to:"/testimonials"},{name:"O Nas",to:"/about"},{name:"Najcz\u0119stsze pytania",to:"/questions"}],socials:Qv,contact:{email:yx,copy:`\xa9 ${(new Date).getFullYear()} Klara Queen. Wszystkie prawa zastrze\u017cone.`}},bx=Gb.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: ${Yb.tablet}px) {
    align-items: center;
  }
`,vx=Gb.div`
  display: flex;
  align-items: center;
  margin-top: -56px;

  @media (max-width: ${Yb.desktopHd}px) {
    margin-top: -50px;
  }

  @media (max-width: ${Yb.tablet}px) {
    margin-top: -36px;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    margin-top: -28px;
  }
`,xx=Gb.img`
  height: 180px;
  width: auto;
  cursor: pointer;
  filter: brightness(2.8) contrast(1.1) saturate(1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.3))
    drop-shadow(0 0 6px ${Jb.goldMain})
    drop-shadow(0 1px 4px rgba(0, 0, 0, 0.15));
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    filter: brightness(2.8) contrast(1.1) saturate(1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.4))
      drop-shadow(0 0 8px ${Jb.goldMain})
      drop-shadow(0 0 12px ${Jb.goldHover});
  }

  @media (max-width: ${Yb.desktopHd}px) {
    height: 168px;
  }

  @media (max-width: ${Yb.tablet}px) {
    height: 140px;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    height: 120px;
  }
`,kx=Gb.p`
  color: rgba(255, 245, 220, 0.78);
  opacity: 1;
  font-size: 0.92rem;
  line-height: 1.7;
  max-width: 400px;
  margin: 0;
  font-weight: 400;
  letter-spacing: 0.6px;
  font-family: "Cormorant Garamond", serif;
  text-shadow:
    0 1px 3px rgba(0, 0, 0, 0.25),
    0 0 10px rgba(212, 175, 55, 0.2);

  @media (max-width: ${Yb.tablet}px) {
    font-size: 0.78rem;
    line-height: 1.5;
    max-width: 500px;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    font-size: 0.72rem;
    line-height: 1.4;
  }
`;const zx=function(e){let{data:t}=e;return(0,Xg.jsxs)(bx,{children:[(0,Xg.jsx)(vx,{children:(0,Xg.jsx)(xx,{src:mv.src,alt:mv.alt})}),(0,Xg.jsx)(kx,{children:t.description})]})},Sx=Hb`
  color: rgba(255, 245, 220, 0.78);
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 1;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  position: relative;
  padding-left: 0;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.8px;
  text-shadow:
    0 2px 4px rgba(0, 0, 0, 0.3),
    0 0 12px rgba(212, 175, 55, 0.25);
  display: inline-block;
  max-width: 100%;
  width: fit-content;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 1px;
    background: ${Jb.goldMain};
    transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${Jb.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 16px rgba(212, 175, 55, 0.45);

    &::before {
      width: 100%;
    }
  }

  @media (max-width: ${Yb.tablet}px) {
    font-size: 0.76rem;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    font-size: 0.7rem;
  }
`,Ex=Gb.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${Yb.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    gap: 10px;
  }
`,jx=Gb.h4`
  color: ${Jb.goldHover};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.82rem;
  font-weight: 600;
  margin: 0;
  font-family: "Cormorant Garamond", serif;
  position: relative;
  padding-bottom: 0;
  display: inline-block;
  opacity: 0.95;

  @media (max-width: ${Yb.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,_x=Gb.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;

  @media (max-width: ${Yb.tablet}px) {
    grid-template-columns: 1fr;
    gap: 12px;
    place-items: center;
  }

  @media (max-width: ${Yb.phone}px) {
    gap: 8px;
    place-items: center;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    gap: 6px;
  }
`,Tx=Gb.a`
  ${Sx}
`,Cx=Gb(wt)`
  ${Sx}
`;const Ix=function(e){let{data:t}=e;return(0,Xg.jsxs)(Ex,{children:[(0,Xg.jsx)(jx,{children:"Nawigacja"}),(0,Xg.jsx)(_x,{children:t.map((e,t)=>e.to?(0,Xg.jsx)(Cx,{to:e.to,children:e.name},t):(0,Xg.jsx)(Tx,{href:e.url,children:e.name},t))})]})},Ax=Gb.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${Yb.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    gap: 10px;
  }
`,Px=Gb.h4`
  color: ${Jb.goldHover};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.82rem;
  font-weight: 600;
  margin: 0;
  font-family: "Cormorant Garamond", serif;
  position: relative;
  padding-bottom: 0;
  display: inline-block;
  opacity: 0.95;

  @media (max-width: ${Yb.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,Rx=Gb.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: ${Yb.tablet}px) {
    justify-content: center;
    gap: 16px;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    gap: 12px;
  }
`,Nx=Gb.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${Jb.white};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  opacity: 0.8;

  svg {
    font-size: 1.6rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.15));
    color: ${Jb.goldMain};
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 45px;
    height: 45px;
    background: radial-gradient(
      circle,
      rgba(212, 175, 55, 0.08) 0%,
      transparent 70%
    );
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-6px);
    opacity: 1;
    color: ${Jb.white};

    svg {
      transform: scale(1.12);
      color: ${Jb.goldHover};
      filter: drop-shadow(0 6px 12px rgba(212, 175, 55, 0.3));
    }

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: ${Yb.tablet}px) {
    gap: 6px;

    svg {
      font-size: 1.4rem;
    }
  }

  @media (max-width: ${Yb.smallPhone}px) {
    gap: 5px;

    svg {
      font-size: 1.2rem;
    }
  }
`,Dx=Gb.span`
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: ${Jb.white};
  opacity: 0.75;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: "Cormorant Garamond", serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: ${Yb.tablet}px) {
    font-size: 0.58rem;
    letter-spacing: 1px;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    font-size: 0.54rem;
  }
`;const Ox=function(e){let{data:t}=e;return(0,Xg.jsxs)(Ax,{children:[(0,Xg.jsx)(Px,{children:"Nasze Kana\u0142y"}),(0,Xg.jsx)(Rx,{children:t.map(e=>(0,Xg.jsxs)(Nx,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,Xg.jsx)(e.icon,{}),(0,Xg.jsx)(Dx,{children:e.label})]},e.id))})]})},Lx=Gb.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px 0;
  border-top: 1px solid rgba(212, 175, 55, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: ${Yb.tablet}px) {
    flex-direction: column-reverse;
    gap: 12px;
    margin: 30px auto 0;
    padding: 15px 0;
    text-align: center;
    align-items: center;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    margin: 20px auto 0;
    padding: 12px 0;
    gap: 10px;
  }
`,Mx=Gb.span`
  color: rgba(255, 245, 220, 0.78);
  opacity: 1;
  font-size: 0.77rem;
  letter-spacing: 0.6px;
  transition: all 0.3s ease;
  font-family: "Cormorant Garamond", serif;
  font-weight: 500;
  text-shadow:
    0 1px 3px rgba(0, 0, 0, 0.25),
    0 0 10px rgba(212, 175, 55, 0.2);

  @media (max-width: ${Yb.tablet}px) {
    font-size: 0.68rem;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    font-size: 0.63rem;
  }
`,$x=Gb.span`
  color: ${Jb.goldMain};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  font-family: "Cormorant Garamond", serif;
  text-shadow:
    0 1px 3px rgba(0, 0, 0, 0.3),
    0 0 8px rgba(212, 175, 55, 0.25);

  strong {
    font-weight: 700;
    color: #ffd700;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.4),
      0 0 12px rgba(212, 175, 55, 0.4);
  }

  @media (max-width: ${Yb.tablet}px) {
    font-size: 0.75rem;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    font-size: 0.7rem;
  }
`,Fx=Gb.a`
  color: rgba(255, 245, 220, 0.78);
  font-size: 0.85rem;
  letter-spacing: 1.2px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  opacity: 1;
  font-family: "Cormorant Garamond", serif;
  text-shadow:
    0 2px 4px rgba(0, 0, 0, 0.3),
    0 0 14px rgba(212, 175, 55, 0.3);

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(255, 242, 214, 1) 0%,
      ${Jb.goldMain} 100%
    );
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${Jb.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(212, 175, 55, 0.6);

    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${Yb.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 0.8px;
  }

  @media (max-width: ${Yb.smallPhone}px) {
    font-size: 0.7rem;
  }
`;const Ux=function(e){let{data:t}=e;const[n,i]=(0,r.useState)(67100),[a,o]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(a)return;const e=localStorage.getItem("visitCount"),t=localStorage.getItem("lastSessionTime"),n=(new Date).getTime();if(e&&t){if(n-parseInt(t)>6e4){const t=parseInt(e)+1;localStorage.setItem("visitCount",t),localStorage.setItem("lastSessionTime",n),i(t)}else i(parseInt(e))}else localStorage.setItem("visitCount",67101),localStorage.setItem("lastSessionTime",n),i(67100);o(!0)},[a]),(0,Xg.jsxs)(Lx,{children:[(0,Xg.jsx)(Mx,{children:t.copy}),(0,Xg.jsxs)($x,{children:["Odwiedzin na stronie:"," ",(0,Xg.jsx)("strong",{children:n.toLocaleString("pl-PL")})]}),(0,Xg.jsx)(Fx,{href:`mailto:${t.email}`,children:t.email})]})};const Vx=function(){const{brand:e,links:t,socials:n,contact:r}=wx;return(0,Xg.jsxs)(mx,{children:[(0,Xg.jsxs)(gx,{children:[(0,Xg.jsx)(zx,{data:e}),(0,Xg.jsx)(Ix,{data:t}),(0,Xg.jsx)(Ox,{data:n})]}),(0,Xg.jsx)(Ux,{data:r})]})},Bx=()=>{const e=ue();return(0,r.useEffect)(()=>{window.scrollTo(0,0)},[e.key]),(0,r.useEffect)(()=>{setTimeout(()=>{window.scrollTo(0,0)},100)},[]),null},Hx=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=Hb.apply(void 0,ry([e],t,!1)),a="sc-global-".concat(Iw(JSON.stringify(i))),o=new Qb(i,a),s=new WeakMap,l=function(e){var t=Lb(),n=r.useContext($b),i=s.get(t.styleSheet);return void 0===i&&(i=t.styleSheet.allocateGSInstance(a),s.set(t.styleSheet,i)),r.useLayoutEffect(function(){return t.styleSheet.server||function(e,t,n,r,i){if(o.isStatic)o.renderStyles(e,uw,n,i);else{var a=ny(ny({},t),{theme:bw(t,r,l.defaultProps)});o.renderStyles(e,a,n,i)}}(i,e,t.styleSheet,n,t.stylis),function(){o.removeStyles(i,t.styleSheet)}},[i,e,t.styleSheet,n,t.stylis]),null};return r.memo(l)})`
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: ${Jb.outerSpace||"#1a0005"};
    color: ${Jb.white||"#ffffff"};
    font-family: "Manrope", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #000000;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${Jb.goldMain||"#d4af37"};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${Jb.goldHover||"#f1d592"};
  }
`,Wx=Gb.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,Kx=Gb.div`
  flex: 1;
  padding-top: 90px;

  @media (max-width: 821px) {
    padding-top: 15px;
  }

  @media (max-width: ${Yb.phone}px) {
    padding-top: 45px;
  }
`,Gx=Gb.section`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: visible;
  background: transparent;
  padding: 1px 0 0;
  margin-top: 0;
  margin-bottom: 0;

  @media (max-width: 821px) {
    padding: 0 0 0;
  }

  @media (max-width: ${Yb.tablet}px) {
    padding: 0 0 0;
  }

  @media (max-width: 640px) {
    padding: 0 0 0;
  }

  @media (max-width: ${Yb.phone}px) {
    padding: 0 0 0;
  }
`,qx=Gb.div`
  --columns-gap: clamp(14px, 2vw, 28px);
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  padding: clamp(16px, 2.5vw, 32px) clamp(22px, 4vw, 56px) 0;
  gap: var(--columns-gap);
  margin: 0;

  @media (max-width: 1050px) {
    --columns-gap: clamp(10px, 1.4vw, 18px);
    padding: clamp(14px, 2vw, 28px) clamp(18px, 3.2vw, 40px) 0;
  }

  @media (max-width: ${Yb.tablet}px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 0px;
    padding: 0 14px 0;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    gap: 0px;
    padding: 0 10px 0;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    padding: 0 10px 0;
  }

  @media (max-width: ${Yb.phone}px) {
    gap: 8px;
    padding: 0 10px 0;
  }

  @media (max-width: 420px) {
    gap: 8px;
    padding: 0 8px 0;
  }
`,Qx=Gb.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;
  margin: 0;

  @media (max-width: ${Yb.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${Yb.tablet}px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 760px;
    margin-top: 0;
  }

  @media (max-width: 640px) {
    margin-top: 0;
  }

  @media (max-width: 600px) {
    margin-top: 0;
  }

  @media (max-width: ${Yb.phone}px) {
    margin-top: 0;
  }

  @media (max-width: 420px) {
    margin-top: 0;
  }
`,Yx=Gb.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;
  margin: 0;

  @media (max-width: ${Yb.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${Yb.tablet}px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 760px;
    margin-top: 0;
  }

  @media (max-width: ${Yb.phone}px) {
    margin-top: 0;
  }
`,Jx=(Gb.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Gb.div`
  position: relative;
  top: auto;
  left: auto;
  transform: none;
  text-align: left;
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  padding: clamp(10px, 1.3vw, 16px);
  margin: 0;

  @media (max-width: 1050px) {
    padding: clamp(9px, 1.2vw, 14px);
  }

  @media (max-width: ${Yb.tablet}px) {
    max-width: 760px;
    text-align: center;
    margin: -20px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  @media (max-width: ${Yb.phone}px) {
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
    align-items: center;
    padding: 0 2px;
  }
`),Xx=Gb.div`
  font-family: "Manrope", "Segoe UI", sans-serif;
  color: rgba(255, 242, 214, 0.92);
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.2vw, 2.2px);
  font-size: clamp(0.62rem, 0.9vw, 0.82rem);
  font-weight: 500;
  margin-bottom: 18px;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);

  @media (max-width: ${Yb.tablet}px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${Yb.phone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.8px;
    margin-bottom: 12px;
  }
`,Zx=Gb.h1`
  margin: 0 0 18px;
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  color: ${Jb.goldHover};
  font-weight: 600;
  letter-spacing: 0;
  text-rendering: optimizeLegibility;
  font-kerning: normal;
  font-size: clamp(1.05rem, 3.1vw, 2.7rem);
  line-height: 1.3;
  text-shadow:
    0 0 2px rgba(255, 246, 220, 0.35),
    0 0 14px rgba(212, 175, 55, 0.22),
    0 10px 24px rgba(0, 0, 0, 0.24);

  @media (max-width: 1050px) {
    font-size: clamp(1rem, 2.7vw, 2.2rem);
    letter-spacing: 0;
    line-height: 1;
  }

  @media (max-width: ${Yb.tablet}px) {
    font-size: clamp(0.95rem, 3.2vw, 1.95rem);
    letter-spacing: 0;
    text-align: center;
    width: 100%;
    line-height: 1;
  }

  @media (max-width: ${Yb.phone}px) {
    margin-bottom: 14px;
    font-size: clamp(0.9rem, 5.2vw, 1.6rem);
    line-height: 1.1;
  }
`,ek=Gb.p`
  margin: 0;
  max-width: 640px;
  color: rgba(255, 255, 255, 0.9);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: clamp(0.78rem, 1vw, 0.92rem);
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 1.5;
  text-shadow: 0 3px 12px rgba(0, 0, 0, 0.28);

  @media (max-width: 1050px) {
    font-size: clamp(0.75rem, 0.95vw, 0.86rem);
  }

  @media (max-width: ${Yb.tablet}px) {
    max-width: 560px;
    font-size: clamp(0.74rem, 1.8vw, 0.84rem);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${Yb.phone}px) {
    max-width: 100%;
    font-size: clamp(0.72rem, 3.4vw, 0.8rem);
    line-height: 1.45;
    text-align: center;
  }
`,tk=Gb.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: nowrap;

  @media (max-width: ${Yb.tablet}px) {
    width: 100%;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10px;
  }

  @media (max-width: ${Yb.phone}px) {
    gap: 8px;
    margin-top: 22px;
    flex-wrap: nowrap;
    justify-content: center;
  }
`,nk=`\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 48px;\n  padding: 0 24px;\n  border-radius: 14px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.9px;\n  font-size: clamp(0.68rem, 0.8vw, 0.82rem);\n  font-weight: 700;\n  white-space: nowrap;\n  flex: 0 0 auto;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease,\n    color 0.3s ease, border-color 0.3s ease;\n\n  @media (max-width: ${Yb.tablet}px) {\n    min-height: 42px;\n    padding: 0 14px;\n    font-size: 0.74rem;\n    letter-spacing: 0.8px;\n  }\n\n  @media (max-width: ${Yb.phone}px) {\n    min-height: 40px;\n    padding: 0 12px;\n    font-size: 0.7rem;\n    letter-spacing: 0.7px;\n  }\n`,rk=Gb.a`
  ${nk}
  color: #2a1303;
  background: linear-gradient(180deg, #f4d98b 0%, #d6ab3f 100%);
  box-shadow:
    0 10px 24px rgba(109, 64, 5, 0.28),
    inset 0 1px 0 rgba(255, 248, 219, 0.7);

  &:hover {
    transform: translateY(-1px);
    box-shadow:
      0 14px 30px rgba(109, 64, 5, 0.34),
      0 0 18px rgba(212, 175, 55, 0.28),
      inset 0 1px 0 rgba(255, 248, 219, 0.8);
  }
`,ik=Gb.a`
  ${nk}
  color: rgba(255, 246, 220, 0.92);
  background: rgba(53, 13, 19, 0.22);
  border: 1px solid rgba(241, 213, 146, 0.58);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.04),
    0 10px 24px rgba(0, 0, 0, 0.14);

  &:hover {
    transform: translateY(-1px);
    color: ${Jb.white};
    border-color: rgba(241, 213, 146, 0.78);
    box-shadow:
      0 14px 30px rgba(0, 0, 0, 0.2),
      0 0 18px rgba(212, 175, 55, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  }
`,ak="Unikalny design, kt\xf3ry zachwyca",ok={line1:"Luksusowe i funkcjonalne",line2:"strony WWW dla Twojej marki"},sk={line1:"Projektujemy spersonalizowane, unikalne rozwi\u0105zania cyfrowe,",line2:"kt\xf3re buduj\u0105 autorytet i przyci\u0105gaj\u0105 klient\xf3w premium."},lk={primary:{label:"Zobacz Projekty",href:"/offer"},secondary:{label:"Wsp\xf3\u0142praca",href:"/cooperation"}};const ck=function(){return(0,Xg.jsxs)(Jx,{children:[(0,Xg.jsx)(Xx,{children:ak}),(0,Xg.jsxs)(Zx,{children:[ok.line1,(0,Xg.jsx)("br",{}),ok.line2]}),(0,Xg.jsxs)(ek,{children:[sk.line1,(0,Xg.jsx)("br",{}),sk.line2]}),(0,Xg.jsxs)(tk,{children:[(0,Xg.jsx)(rk,{as:wt,to:lk.primary.href,children:lk.primary.label}),(0,Xg.jsx)(ik,{as:wt,to:lk.secondary.href,children:lk.secondary.label})]})]})},uk=Gb.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: clamp(240px, 28vw, 340px);
  z-index: 5;
  padding: clamp(10px, 1.3vw, 16px);
  margin: 0 auto 0;

  @media (max-width: 1050px) {
    height: clamp(220px, 24vw, 320px);
    padding: clamp(9px, 1.2vw, 14px);
  }

  @media (max-width: ${Yb.tablet}px) {
    width: min(100%, 760px);
    height: clamp(240px, 46vw, 380px);
    padding: clamp(8px, 1.2vw, 12px);
    margin: 0 auto 0;
  }

  @media (max-width: ${Yb.phone}px) {
    padding: clamp(6px, 1vw, 10px);
  }
`,dk=Gb.div`
  --offset-distance: clamp(90px, 11vw, 140px);
  --edge-offset-distance: clamp(150px, 18vw, 240px);
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 1050px) {
    --offset-distance: clamp(72px, 9vw, 110px);
    --edge-offset-distance: clamp(116px, 14vw, 170px);
  }

  @media (max-width: ${Yb.tablet}px) {
    --offset-distance: 68px;
    --edge-offset-distance: 112px;
  }

  @media (max-width: ${Yb.phone}px) {
    --offset-distance: 56px;
    --edge-offset-distance: 98px;
  }
`,hk=Gb.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: clamp(210px, 28vw, 360px);
  height: clamp(150px, 21vw, 250px);
  border-radius: 10px;
  border: 1px solid
    ${e=>e.$active?"rgba(241, 213, 146, 0.8)":"rgba(255, 255, 255, 0.08)"};
  object-fit: cover;
  opacity: ${e=>{const t=Math.abs(e.$offset);return 0===t?1:1===t?.88:2===t?.52:0}};
  z-index: ${e=>30-10*Math.abs(e.$offset)};
  filter: ${e=>e.$active?"brightness(1) saturate(1)":"brightness(0.7) saturate(0.72)"};
  transform: ${e=>{const t=Math.abs(e.$offset),n=0===t?1:1===t?.8:.64,r=2===t?"var(--edge-offset-distance)":"var(--offset-distance)";return`translate(-50%, -50%) translateX(calc(${e.$offset} * ${r})) scale(${n})`}};
  box-shadow: ${e=>e.$active?`0 28px 50px rgba(0, 0, 0, 0.45), 0 0 20px ${Jb.goldSoft18}`:"0 16px 26px rgba(0, 0, 0, 0.3)"};
  transition:
    transform 0.75s ease,
    opacity 0.75s ease,
    filter 0.75s ease,
    box-shadow 0.75s ease,
    border-color 0.75s ease;

  @media (max-width: 1050px) {
    width: clamp(180px, 23vw, 300px);
    height: clamp(130px, 17vw, 210px);
  }

  @media (max-width: ${Yb.phone}px) {
    width: 260px;
    height: 182px;
  }
`;var pk=n(217),fk=n(410),mk=n(430),gk=n(682);const yk={images:[pk,fk,mk,gk,fk]},{images:wk}=yk,bk=(e,t,n)=>{let r=t-e;return r>n/2&&(r-=n),r<-n/2&&(r+=n),r};const vk=function(){const[e,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{const e=setInterval(()=>{t(e=>(e+1)%wk.length)},4e3);return()=>clearInterval(e)},[]),(0,Xg.jsx)(uk,{children:(0,Xg.jsx)(dk,{children:wk.map((t,n)=>(0,Xg.jsx)(hk,{src:t,alt:`Projekt ${n+1}`,$offset:bk(e,n,wk.length),$active:n===e},`${t}-${n}`))})})},xk=Gb.section`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 12px;
  padding-left: clamp(16px, 4vw, 60px);
  padding-right: clamp(16px, 4vw, 60px);
  background:
    radial-gradient(
      ellipse at 80% 0%,
      rgba(122, 20, 40, 0.38) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      rgba(74, 13, 26, 0.32) 0%,
      transparent 55%
    ),
    linear-gradient(180deg, rgba(46, 8, 16, 0.9) 0%, #0d0003 30%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${Yb.phone}px) {
    margin-top: -8px;
  }
`,kk=Gb.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,zk=Gb.h2`
  color: ${Jb.goldHover};
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.22vw, 3px);
  font-size: clamp(1.8rem, 4vw, 3.1rem);
  font-weight: 600;
  line-height: 1.3;
  text-shadow:
    0 0 2px rgba(255, 246, 220, 0.32),
    0 0 14px rgba(212, 175, 55, 0.18),
    0 12px 28px rgba(0, 0, 0, 0.22);
  margin: 0;
`,Sk=Gb.p`
  color: rgba(241, 213, 146, 0.72);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  font-size: clamp(0.62rem, 0.78vw, 0.72rem);
  letter-spacing: clamp(2.8px, 0.38vw, 4.8px);
  text-transform: uppercase;
  line-height: 1;
  max-width: 480px;
  position: relative;
  padding: 0 18px;
  margin: 0 auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: clamp(18px, 2.4vw, 36px);
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(212, 175, 55, 0.7) 100%
    );
  }

  &::before {
    right: calc(100% - 14px);
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(212, 175, 55, 0.7) 100%
    );
  }

  &::after {
    left: calc(100% - 14px);
    background: linear-gradient(
      90deg,
      rgba(212, 175, 55, 0.7) 0%,
      transparent 100%
    );
  }
`,Ek=Gb.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(280px, 38vw, 420px);
  margin-top: 0;
`,jk=Gb.div`
  flex: 1;
  display: flex;
  gap: clamp(12px, 1.6vw, 20px);
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 8px 0 0 0;
  margin: 0;
  align-items: stretch;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`,_k=Gb.div`
  flex: 0 0 calc(25% - 15px);
  min-width: 0;
  scroll-snap-align: start;
  display: flex;
  align-items: stretch;
  height: 100%;
  padding: 0;
  margin: 0;

  @media (max-width: 1050px) {
    flex: 0 0 calc(33.33% - 14px);
  }

  @media (max-width: ${Yb.tablet}px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(100% - clamp(6px, 0.8vw, 10px));
  }

  @media (max-width: ${Yb.smallPhone}px) {
    flex: 0 0 calc(100% - clamp(6px, 0.8vw, 10px));
  }
`,Tk=Gb.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${Jb.goldMain};
  font-size: clamp(0.85rem, 1.1vw, 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.42),
    inset 0 1px 0 rgba(255, 245, 220, 0.07);

  &:hover {
    background: linear-gradient(180deg, #f4d98b 0%, #c8960e 100%);
    border-color: #f4d98b;
    color: #1a0005;
    box-shadow:
      0 10px 26px rgba(0, 0, 0, 0.46),
      0 0 18px rgba(212, 175, 55, 0.32);
    transform: scale(1.08);
  }
`,Ck=Gb.div`
  margin: 8px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover div {
    width: 100px;
  }
`,Ik=Gb.span`
  color: ${Jb.goldMain};
  text-transform: uppercase;
  letter-spacing: clamp(1.4px, 0.3vw, 4px);
  font-size: clamp(0.68rem, 0.9vw, 0.75rem);
  margin-bottom: 10px;
`,Ak=Gb.div`
  width: 50px;
  height: 1px;
  background: ${Jb.goldMain};
  transition: width 0.4s ease;
`,Pk=Gb.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 0 clamp(14px, 3vw, 30px);
  border-radius: 28px;
  border: 1px solid rgba(212, 175, 55, 0.08);
  background: linear-gradient(
    135deg,
    rgba(46, 8, 16, 0.8) 0%,
    rgba(75, 16, 32, 0.6) 100%
  );
  backdrop-filter: blur(10px);
  box-shadow:
    inset 0 1px 0 rgba(255, 245, 220, 0.09),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2),
    0 2px 4px rgba(0, 0, 0, 0.15),
    0 8px 16px rgba(0, 0, 0, 0.2),
    0 20px 40px rgba(0, 0, 0, 0.22),
    0 0 0 1px rgba(212, 175, 55, 0.06),
    0 0 28px rgba(122, 20, 40, 0.1);
  overflow: hidden;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${e=>e.isLink?"pointer":"default"};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(241, 213, 146, 0.55) 50%,
      transparent 100%
    );
    pointer-events: none;
  }

  &:hover {
    border-color: rgba(212, 175, 55, 0.16);
    transform: translateY(-8px);
    background: linear-gradient(
      135deg,
      rgba(46, 8, 16, 0.95) 0%,
      rgba(75, 16, 32, 0.8) 100%
    );
    backdrop-filter: blur(10px);
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.18),
      0 12px 28px rgba(0, 0, 0, 0.28),
      0 28px 56px rgba(0, 0, 0, 0.32),
      0 0 32px rgba(212, 175, 55, 0.16),
      0 0 60px rgba(122, 20, 40, 0.12),
      inset 0 1px 0 rgba(255, 245, 220, 0.12),
      0 0 0 1px rgba(212, 175, 55, 0.1);
  }
`;const Rk=function(e){let{children:t,type:n,url:r,isLink:i}=e;return(0,Xg.jsx)(Pk,{as:"link"===n?"a":"div",href:"link"===n?r:void 0,target:"link"===n?"_blank":void 0,isLink:i,children:t})},Nk=Gb.div`
  width: 100%;
  height: clamp(110px, 18vw, 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 0;
  border: none;
  box-shadow: none;
  flex-shrink: 0;
`,Dk=Gb.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  filter: brightness(0.88) saturate(0.9);
  transition:
    filter 0.45s ease,
    transform 0.45s ease;
`;const Ok=function(e){let{image:t,title:n}=e;return(0,Xg.jsx)(Nk,{children:(0,Xg.jsx)(Dk,{src:t,alt:n})})},Lk=Gb.div`
  width: clamp(32px, 5.5vw, 42px);
  height: clamp(32px, 5.5vw, 42px);
  border-radius: 50%;
  background: linear-gradient(180deg, #f4d98b 0%, #c8960e 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1a0005;
  font-size: clamp(0.75rem, 1.2vw, 1.1rem);
  margin-top: clamp(-16px, -2.5vw, -21px);
  z-index: 2;
  flex-shrink: 0;
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.38),
    0 0 12px rgba(212, 175, 55, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
`;const Mk=function(e){let{icon:t}=e;return(0,Xg.jsx)(Lk,{children:(0,Xg.jsx)(t,{})})},$k=Gb.h3`
  color: ${Jb.goldHover};
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  text-transform: uppercase;
  letter-spacing: clamp(0.6px, 0.18vw, 2px);
  font-size: clamp(0.72rem, 2.1vw, 1.05rem);
  font-weight: 600;
  line-height: 1.05;
  margin: clamp(8px, 1.5vw, 12px) clamp(8px, 2vw, 20px) clamp(4px, 1vw, 8px);
  text-align: center;
  text-shadow:
    0 0 12px rgba(212, 175, 55, 0.22),
    0 2px 8px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
`,Fk=Gb.p`
  color: rgba(255, 245, 220, 0.78);
  font-size: clamp(0.68rem, 2.2vw, 0.82rem);
  text-align: center;
  line-height: 1.5;
  margin: 0 clamp(8px, 2vw, 20px);
  max-width: 240px;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;const Uk=function(e){let{title:t,description:n}=e;return(0,Xg.jsxs)(Xg.Fragment,{children:[(0,Xg.jsx)($k,{children:t}),n&&(0,Xg.jsx)(Fk,{children:n})]})},Vk=Gb.div`
  width: 44px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${Jb.goldMain} 50%,
    transparent 100%
  );
  margin-top: 14px;
  opacity: 0.65;
  flex-shrink: 0;
`;const Bk=function(){return(0,Xg.jsx)(Vk,{})};const Hk=function(e){let{project:t}=e;const{type:n,url:r,title:i,description:a,image:o,icon:s}=t;return(0,Xg.jsxs)(Rk,{type:n,url:r,isLink:"link"===n,children:[(0,Xg.jsx)(Ok,{image:o,title:i}),(0,Xg.jsx)(Mk,{icon:s}),(0,Xg.jsx)(Uk,{title:i,description:a}),(0,Xg.jsx)(Bk,{})]})},Wk=[{id:1,type:"link",url:"https://google.com",title:"Boutique E-commerce",description:"W pe\u0142ni dzia\u0142aj\u0105cy sklep internetowy premium.",image:pk,icon:Bv},{id:2,type:"example",title:"Studio Architektury",image:fk,icon:function(e){return Nv({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}},{id:3,type:"example",title:"Portfolio Fotografa",image:mk,icon:function(e){return Nv({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(e)}},{id:4,type:"link",url:"https://moja-inna-strona.pl",title:"Dashboard Finansowy",image:gk,icon:function(e){return Nv({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}},{id:5,type:"example",title:"Projekt Specjalny",image:pk,icon:Bv},{id:6,type:"example",title:"Projekt Specjalny 2",image:fk,icon:Bv}],Kk={title:"Przyk\u0142adowe Prace",subtitle:"Ekskluzywne projekty cyfrowe, kt\xf3re\ndefiniuj\u0105 now\u0105 jako\u015b\u0107 bran\u017cy"},Gk="Zobacz Pe\u0142ne Portfolio";const qk=function(){const e=(0,r.useRef)(null),t=(0,r.useRef)(!1),n=n=>{const r=e.current;if(!r||t.current)return;const i=r.firstElementChild;if(!i)return;const a=parseFloat(getComputedStyle(r).gap)||16,o=i.offsetWidth+a,s=r.scrollWidth-r.clientWidth;t.current=!0,n>0&&r.scrollLeft>=s-2?r.scrollTo({left:0,behavior:"smooth"}):n<0&&r.scrollLeft<=2?r.scrollTo({left:s,behavior:"smooth"}):r.scrollBy({left:n*o,behavior:"smooth"}),setTimeout(()=>{t.current=!1},580)};return(0,Xg.jsxs)(xk,{children:[(0,Xg.jsxs)(kk,{children:[(0,Xg.jsx)(zk,{children:Kk.title}),(0,Xg.jsx)(Sk,{children:Kk.subtitle})]}),(0,Xg.jsxs)(Ek,{children:[(0,Xg.jsx)(Tk,{onClick:()=>n(-1),"aria-label":"Poprzedni projekt",children:(0,Xg.jsx)(Gv,{})}),(0,Xg.jsx)(jk,{ref:e,children:Wk.map(e=>(0,Xg.jsx)(_k,{children:(0,Xg.jsx)(Hk,{project:e})},e.id))}),(0,Xg.jsx)(Tk,{onClick:()=>n(1),"aria-label":"Nast\u0119pny projekt",children:(0,Xg.jsx)(Kv,{})})]}),(0,Xg.jsxs)(Ck,{children:[(0,Xg.jsx)(Ik,{children:Gk}),(0,Xg.jsx)(Ak,{})]})]})},Qk=Gb.section`
  width: 100%;
  margin-top: -28px;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 12px;
  padding-left: clamp(16px, 4vw, 60px);
  padding-right: clamp(16px, 4vw, 60px);
  background:
    radial-gradient(
      ellipse at 80% 0%,
      rgba(122, 20, 40, 0.38) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      rgba(74, 13, 26, 0.32) 0%,
      transparent 55%
    ),
    linear-gradient(180deg, rgba(46, 8, 16, 0.9) 0%, #0d0003 30%);
  display: flex;
  flex-direction: column;
  align-items: center;
`,Yk=Gb.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,Jk=Gb.h2`
  color: ${Jb.goldHover};
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.22vw, 3px);
  font-size: clamp(1.8rem, 4vw, 3.1rem);
  font-weight: 600;
  line-height: 1.3;
  text-shadow:
    0 0 2px rgba(255, 246, 220, 0.32),
    0 0 14px rgba(212, 175, 55, 0.18),
    0 12px 28px rgba(0, 0, 0, 0.22);
  margin: 0;
`,Xk=Gb.p`
  color: rgba(241, 213, 146, 0.72);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  font-size: clamp(0.62rem, 0.78vw, 0.72rem);
  letter-spacing: clamp(2.8px, 0.38vw, 4.8px);
  text-transform: uppercase;
  line-height: 1;
  max-width: 480px;
  position: relative;
  padding: 0 18px;
  margin: 0 auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: clamp(18px, 2.4vw, 36px);
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(212, 175, 55, 0.7) 100%
    );
  }

  &::before {
    right: calc(100% - 14px);
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(212, 175, 55, 0.7) 100%
    );
  }

  &::after {
    left: calc(100% - 14px);
    background: linear-gradient(
      90deg,
      rgba(212, 175, 55, 0.7) 0%,
      transparent 100%
    );
  }
`,Zk=Gb.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  gap: clamp(12px, 1.6vw, 20px);
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  scrollbar-width: none;
  margin-top: 0;
  margin-bottom: 0;
  padding: 8px 0 0 0;
  align-items: stretch;
  height: clamp(280px, 38vw, 420px);

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1050px) {
  }

  @media (max-width: ${Yb.tablet}px) {
  }

  @media (max-width: 540px) {
  }

  @media (max-width: ${Yb.smallPhone}px) {
  }
`,ez=Gb.a`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(25% - 15px);
  min-width: 0;
  height: 100%;
  scroll-snap-align: start;
  text-decoration: none;
  color: inherit;
  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(46, 8, 16, 0.8) 0%,
    rgba(75, 16, 32, 0.6) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 245, 220, 0.09),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2),
    0 2px 4px rgba(0, 0, 0, 0.15),
    0 8px 16px rgba(0, 0, 0, 0.2),
    0 20px 40px rgba(0, 0, 0, 0.22),
    0 0 0 1px rgba(212, 175, 55, 0.06),
    0 0 28px rgba(122, 20, 40, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0;

  @media (max-width: 1050px) {
    flex: 0 0 calc(33.33% - 14px);
  }

  @media (max-width: ${Yb.tablet}px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(100% - clamp(6px, 0.8vw, 10px));
  }

  @media (max-width: ${Yb.smallPhone}px) {
    flex: 0 0 calc(100% - clamp(6px, 0.8vw, 10px));
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(241, 213, 146, 0.55) 50%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 1;
  }

  &:hover {
    border-color: rgba(212, 175, 55, 0.16);
    transform: translateY(-8px);
    background: linear-gradient(
      135deg,
      rgba(46, 8, 16, 0.95) 0%,
      rgba(75, 16, 32, 0.8) 100%
    );
    backdrop-filter: blur(10px);
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.18),
      0 12px 28px rgba(0, 0, 0, 0.28),
      0 28px 56px rgba(0, 0, 0, 0.32),
      0 0 32px rgba(212, 175, 55, 0.16),
      0 0 60px rgba(122, 20, 40, 0.12),
      inset 0 1px 0 rgba(255, 245, 220, 0.12),
      0 0 0 1px rgba(212, 175, 55, 0.1);
  }
`,tz=Gb.img`
  width: 100%;
  height: clamp(140px, 20vw, 200px);
  object-fit: cover;
  display: block;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 0;
`,nz=Gb.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: clamp(14px, 2vw, 20px);
  position: relative;
  z-index: 2;
  overflow: visible;
  min-height: 0;
`,rz=Gb.h3`
  color: ${Jb.goldHover};
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: clamp(0.95rem, 1.2vw, 1.15rem);
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 clamp(8px, 1vw, 12px) 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(1.3 * 1.2em * 2);

  @media (max-width: ${Yb.tablet}px) {
    -webkit-line-clamp: 2;
  }
`,iz=Gb.p`
  color: rgba(241, 213, 146, 0.8);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: clamp(0.8rem, 0.95vw, 0.9rem);
  line-height: 1.5;
  margin: 0 0 auto 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${Yb.tablet}px) {
    display: none;
  }
`,az=Gb.span`
  color: rgba(212, 175, 55, 0.7);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: clamp(0.75rem, 0.85vw, 0.8rem);
  margin-top: clamp(8px, 1vw, 12px);
  padding-top: clamp(8px, 1vw, 12px);
  border-top: 1px solid rgba(212, 175, 55, 0.15);
  white-space: normal;
  word-break: break-word;
  overflow: visible;
  display: block;
  width: 100%;
`,oz=Gb.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(280px, 38vw, 420px);
  margin-top: 0;
`,sz=Gb.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${Jb.goldMain};
  font-size: clamp(0.85rem, 1.1vw, 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.42),
    inset 0 1px 0 rgba(255, 245, 220, 0.07);

  &:hover {
    background: linear-gradient(180deg, #f4d98b 0%, #c8960e 100%);
    border-color: #f4d98b;
    color: #1a0005;
    box-shadow:
      0 10px 26px rgba(0, 0, 0, 0.46),
      0 0 18px rgba(212, 175, 55, 0.32);
    transform: scale(1.08);
  }
`,lz=[{id:"proces-48h",title:"Jak oddajemy gotowy projekt w 48h roboczych? Poznaj nasz proces.",excerpt:"48 godzin roboczych \u2013 tyle potrzebujemy, by Twoja wizja sta\u0142a si\u0119 rzeczywisto\u015bci\u0105. Jak to robimy bez straty na jako\u015bci? Zaufanie, przygotowanie i pe\u0142ne skupienie.",date:"30 marca 2026",image:n(682)},{id:"unikalne-grafiki-ai",title:"Nowo\u015b\u0107: Unikalne grafiki AI w cenie ka\u017cdej strony",excerpt:"Koniec z nudnymi zdj\u0119ciami z darmowych bank\xf3w, kt\xf3re ma ka\u017cda konkurentka. Od teraz tworzymy dla Ciebie klimat premium za pomoc\u0105 Sztucznej Inteligencji \u2013 bez dodatkowych koszt\xf3w.",date:"25 marca 2026",image:n(430)},{id:"czysty-kod-react",title:"Dlaczego React wygrywa z WordPressem w 2026 roku?",excerpt:"Wielu klient\xf3w pyta nas: 'Dlaczego nie WordPress?'. Odpowied\u017a jest prosta: szybko\u015b\u0107, bezpiecze\u0144stwo i kontrola. Przeczytaj, dlaczego rezygnacja z ci\u0119\u017ckich wtyczek na rzecz czystego kodu to najlepsza inwestycja w przysz\u0142o\u015b\u0107 Twojej marki.",date:"20 marca 2026",image:n(410)},{id:"startujemy-z-aktualnosciami",title:"Startujemy z Aktualno\u015bciami \u2013 Sekcja tworzona na pro\u015bb\u0119 klient\xf3w",excerpt:"Po miesi\u0105cach obserwacji trendu w bran\u017cy i s\u0142uchaj\u0105c feedbacku naszych klient\xf3w, postanowili\u015bmy uruchomi\u0107 oficjaln\u0105 sekcj\u0119 Aktualno\u015bci. Dowiedz si\u0119, dlaczego to dla nas milestone, a dla Ciebie okazja do bycia na bie\u017c\u0105co.",date:"30 stycznia 2026",image:n(217)}];const cz=function(){const e=pe(),t=(0,r.useRef)(null),n=(0,r.useRef)(!1),i=e=>{const r=t.current;if(!r||n.current)return;const i=r.firstElementChild;if(!i)return;const a=parseFloat(getComputedStyle(r).gap)||16,o=i.offsetWidth+a,s=r.scrollWidth-r.clientWidth;n.current=!0,e>0&&r.scrollLeft>=s-2?r.scrollTo({left:0,behavior:"smooth"}):e<0&&r.scrollLeft<=2?r.scrollTo({left:s,behavior:"smooth"}):r.scrollBy({left:e*o,behavior:"smooth"}),setTimeout(()=>{n.current=!1},580)};return(0,Xg.jsxs)(Qk,{children:[(0,Xg.jsxs)(Yk,{children:[(0,Xg.jsx)(Jk,{children:"Aktualno\u015bci"}),(0,Xg.jsx)(Xk,{children:"B\u0105d\u017a na bie\u017c\u0105co z najnowszymi wiadomo\u015bciami ze \u015bwiata"})]}),(0,Xg.jsxs)(oz,{children:[(0,Xg.jsx)(sz,{onClick:()=>i(-1),"aria-label":"Poprzedni artyku\u0142",children:(0,Xg.jsx)(Gv,{})}),(0,Xg.jsx)(Zk,{ref:t,children:lz.map(t=>(0,Xg.jsxs)(ez,{onClick:()=>e(`/blog/${t.id}`),style:{cursor:"pointer"},children:[(0,Xg.jsx)(tz,{src:t.image,alt:t.title}),(0,Xg.jsxs)(nz,{children:[(0,Xg.jsx)(rz,{children:t.title}),(0,Xg.jsx)(iz,{children:t.excerpt}),(0,Xg.jsx)(az,{children:t.date})]})]},t.id))}),(0,Xg.jsx)(sz,{onClick:()=>i(1),"aria-label":"Nast\u0119pny artyku\u0142",children:(0,Xg.jsx)(Kv,{})})]})]})},uz=Gb.section`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 12px;
  padding-left: clamp(16px, 4vw, 60px);
  padding-right: clamp(16px, 4vw, 60px);
  background:
    radial-gradient(
      ellipse at 80% 0%,
      rgba(122, 20, 40, 0.38) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      rgba(74, 13, 26, 0.32) 0%,
      transparent 55%
    ),
    linear-gradient(180deg, rgba(46, 8, 16, 0.9) 0%, #0d0003 30%);
  display: flex;
  flex-direction: column;
  align-items: center;
`,dz=Gb.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,hz=Gb.h2`
  color: ${Jb.goldHover};
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.22vw, 3px);
  font-size: clamp(1.8rem, 4vw, 3.1rem);
  font-weight: 600;
  line-height: 1.3;
  text-shadow:
    0 0 2px rgba(255, 246, 220, 0.32),
    0 0 14px rgba(212, 175, 55, 0.18),
    0 12px 28px rgba(0, 0, 0, 0.22);
  margin: 0;
`,pz=Gb.p`
  color: rgba(241, 213, 146, 0.72);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  font-size: clamp(0.62rem, 0.78vw, 0.72rem);
  letter-spacing: clamp(2.8px, 0.38vw, 4.8px);
  text-transform: uppercase;
  line-height: 1;
  max-width: 480px;
  position: relative;
  padding: 0 18px;
  margin: 0 auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: clamp(18px, 2.4vw, 36px);
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(212, 175, 55, 0.7) 100%
    );
  }

  &::before {
    right: calc(100% - 14px);
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(212, 175, 55, 0.7) 100%
    );
  }

  &::after {
    left: calc(100% - 14px);
    background: linear-gradient(
      90deg,
      rgba(212, 175, 55, 0.7) 0%,
      transparent 100%
    );
  }
`,fz=Gb.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(12px, 1.6vw, 20px);
  margin-top: 0;
  margin-bottom: 0;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${Yb.tablet}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`,mz=Gb.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(46, 8, 16, 0.8) 0%,
    rgba(75, 16, 32, 0.6) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 245, 220, 0.09),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2),
    0 2px 4px rgba(0, 0, 0, 0.15),
    0 8px 16px rgba(0, 0, 0, 0.2),
    0 20px 40px rgba(0, 0, 0, 0.22),
    0 0 0 1px rgba(212, 175, 55, 0.06),
    0 0 28px rgba(122, 20, 40, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: clamp(14px, 2vw, 20px);
  cursor: pointer;
  margin: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(241, 213, 146, 0.55) 50%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 1;
  }

  &:hover {
    border-color: rgba(212, 175, 55, 0.16);
    transform: translateY(-8px);
    background: linear-gradient(
      135deg,
      rgba(46, 8, 16, 0.95) 0%,
      rgba(75, 16, 32, 0.8) 100%
    );
    backdrop-filter: blur(10px);
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.18),
      0 12px 28px rgba(0, 0, 0, 0.28),
      0 28px 56px rgba(0, 0, 0, 0.32),
      0 0 32px rgba(212, 175, 55, 0.16),
      0 0 60px rgba(122, 20, 40, 0.12),
      inset 0 1px 0 rgba(255, 245, 220, 0.12),
      0 0 0 1px rgba(212, 175, 55, 0.1);
  }
`,gz=Gb.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  margin: 0;
  padding: 0;
`,yz=Gb.h3`
  color: ${Jb.goldHover};
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: clamp(0.95rem, 1.2vw, 1.15rem);
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;

  &::before {
    content: "Q";
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: clamp(24px, 3vw, 32px);
    height: clamp(24px, 3vw, 32px);
    background: rgba(212, 175, 55, 0.15);
    border-radius: 50%;
    font-size: clamp(0.9rem, 1.1vw, 1rem);
    border: 1px solid rgba(212, 175, 55, 0.3);
  }
`,wz=Gb.p`
  color: rgba(241, 213, 146, 0.8);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: clamp(0.8rem, 0.95vw, 0.9rem);
  line-height: 1.5;
  margin: clamp(10px, 1.2vw, 15px) 0 0 0;
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease;
  opacity: ${e=>e.isOpen?1:0};
  transition:
    opacity 0.3s ease,
    max-height 0.3s ease;
`,bz=Gb.span`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${e=>e.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${Jb.goldHover};
  font-size: clamp(0.9rem, 1.1vw, 1.2rem);
  margin-left: auto;
  flex-shrink: 0;
`,vz=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych."},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."},{id:4,question:"Czy za realizacj\u0119 projektu otrzymam faktur\u0119?",answer:"Tak. Za ka\u017cd\u0105 us\u0142ug\u0119 wystawiamy faktur\u0119 (bez VAT), kt\xf3r\u0105 otrzymasz na e-mail. Mo\u017cesz j\u0105 w ca\u0142o\u015bci wliczy\u0107 w koszty uzyskania przychodu \u2013 to najprostsze i najbezpieczniejsze rozwi\u0105zanie dla Twojego biznesu. Nie musisz martwi\u0107 si\u0119 o \u017cadne dodatkowe formalno\u015bci, a my zapewniamy Ci pe\u0142n\u0105 transparentno\u015b\u0107 i profesjonalizm w rozliczeniach."},{id:5,question:"Czemu na Allegro ceny us\u0142ug s\u0105 wy\u017csze?",answer:"Wy\u017csza cena na platformie Allegro wynika wy\u0142\u0105cznie z wysokich prowizji i op\u0142at transakcyjnych pobieranych przez operatora. Kontaktuj\u0105c si\u0119 z nami bezpo\u015brednio, omijasz te dodatkowe koszty i otrzymujesz najlepsz\u0105 mo\u017cliw\u0105 ofert\u0119 przy zachowaniu tej samej jako\u015bci i gwarancji. "},{id:6,question:"Co je\u015bli nie mam w\u0142asnych profesjonalnych zdj\u0119\u0107 lub tekst\xf3w?",answer:"Bez obaw, zajmiemy si\u0119 tym. Je\u015bli brakuje Ci fotografii, wygenerujemy dla Twojej marki unikalne grafiki AI, kt\xf3re idealnie oddadz\u0105 klimat Twojego biznesu. Pomo\u017cemy Ci te\u017c ubra\u0107 Twoje pomys\u0142y w profesjonalne s\u0142owa, aby strona od pocz\u0105tku budowa\u0142a Twoje zaufanie. "},{id:7,question:"Czy to autorskie projekty, czy gotowce z sieci?",answer:"Ka\u017cdy element naszej kolekcji stworzyli\u015bmy sami \u2013 od pierwszej linii kodu po ostatni detal wizualny. Nie u\u017cywamy WordPressa ani ci\u0119\u017ckich, powolnych kreator\xf3w stron. Wybieraj\u0105c nas, otrzymujesz unikalny produkt w technologii React.js, a nie masowy szablon, kt\xf3ry posiada co druga firma w Twojej bran\u017cy."},{id:8,question:"Czy b\u0119d\u0119 mie\u0107 pe\u0142n\u0105 kontrol\u0119 i dost\u0119p do strony?",answer:"Jak najbardziej. Przekazujemy Ci komplet hase\u0142 i dost\u0119p\xf3w do Twoich w\u0142asnych kont. Nasz kod jest czysty i uporz\u0105dkowany \u2013 je\u015bli kiedykolwiek zdecydujesz si\u0119 przekaza\u0107 stron\u0119 innemu informatykowi, odnajdzie si\u0119 on w strukturze bez problemu. Jeste\u015b w 100% niezale\u017cna."},{id:9,question:"Jak strona radzi sobie w wyszukiwarce Google (SEO)?",answer:'Wi\u0119kszo\u015b\u0107 stron to ci\u0119\u017ckie projekty na WordPressie, kt\xf3re przez nadmiar zb\u0119dnych wtyczek l\u0105duj\u0105 na ko\u0144cu wynik\xf3w. Nasze strony budujemy "na lekko", co sprawia, \u017ce s\u0105 b\u0142yskawiczne i faworyzowane przez Google. To fundament, kt\xf3ry pozwala realnie powalczy\u0107 o najwy\u017csze pozycje.'},{id:10,question:"Czy strona b\u0119dzie bezpieczna (certyfikat SSL)?",answer:'Tak. Obok adresu Twojej strony zawsze b\u0119dzie widoczna "zielona k\u0142\xf3dka". Certyfikat SSL masz w cenie, co gwarantuje szyfrowanie danych i brak ostrze\u017ce\u0144 w przegl\u0105darkach. Twoja witryna b\u0119dzie w pe\u0142ni bezpieczna dla odwiedzaj\u0105cych.'},{id:11,question:"Jak nawi\u0105za\u0107 z nami wsp\xf3\u0142prac\u0119?",answer:"Masz dwie proste drogi. Mo\u017cesz dokona\u0107 zakupu bezpo\u015brednio przez nasz profil na Allegro lub napisa\u0107 do nas wiadomo\u015b\u0107 e-mail. W odpowiedzi otrzymasz od nas kr\xf3tk\u0105 instrukcj\u0119 i ankiet\u0119, kt\xf3ra pomo\u017ce nam doprecyzowa\u0107 wygl\u0105d Twojej nowej strony. Wi\u0119cej szczeg\xf3\u0142\xf3w na temat ca\u0142ego procesu znajdziesz na naszej podstronie",cooperationLink:!0},{id:12,question:"Co je\u015bli nie mam gotowych tre\u015bci i nie wiem, co napisa\u0107?",answer:"To najcz\u0119stsza obawa, dlatego maksymalnie upro\u015bcili\u015bmy ten proces. Nie musisz by\u0107 pisarzem ani fotografem. Po zakupie otrzymasz od nas prost\u0105, interaktywn\u0105 ankiet\u0119, kt\xf3ra 'wyci\u0105gnie' od Ciebie najwa\u017cniejsze informacje o Twoim biznesie. Na ich podstawie przygotujemy profesjonalne teksty, a je\u015bli brakuje Ci zdj\u0119\u0107 \u2013 wygenerujemy dla Twojej marki unikalne grafiki AI. Nasza strona jest elastyczna: je\u015bli nie masz jeszcze cennika czy zespo\u0142u, po prostu ukryjemy te sekcje, a ca\u0142o\u015b\u0107 nadal b\u0119dzie wygl\u0105da\u0107 luksusowo i sp\xf3jnie. Wi\u0119cej informacji znajdziesz w sekcji",cooperationLink:!0}];const xz=function(){const[e,t]=(0,r.useState)(null);return(0,Xg.jsxs)(uz,{children:[(0,Xg.jsxs)(dz,{children:[(0,Xg.jsx)(hz,{children:"Najcz\u0119\u015bciej Zadawane Pytania"}),(0,Xg.jsx)(pz,{children:"Szybkie odpowiedzi na Twoje najbardziej pal\u0105ce w\u0105tpliwo\u015bci"})]}),(0,Xg.jsx)(fz,{children:vz.slice(0,4).map(n=>(0,Xg.jsxs)(mz,{onClick:()=>{return r=n.id,void t(e===r?null:r);var r},children:[(0,Xg.jsxs)(gz,{children:[(0,Xg.jsx)(yz,{children:n.question}),(0,Xg.jsx)(wz,{isOpen:e===n.id,children:n.answer})]}),(0,Xg.jsx)(bz,{isOpen:e===n.id,children:"\u25bc"})]},n.id))})]})},kz=Gb.section`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 12px;
  padding-left: clamp(16px, 4vw, 60px);
  padding-right: clamp(16px, 4vw, 60px);
  background:
    radial-gradient(
      ellipse at 80% 0%,
      rgba(30, 58, 92, 0.28) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      rgba(20, 35, 55, 0.24) 0%,
      transparent 55%
    ),
    linear-gradient(180deg, rgba(15, 22, 32, 0.95) 0%, #0a0e14 30%);
  display: flex;
  flex-direction: column;
  align-items: center;
`,zz=Gb.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,Sz=Gb.h2`
  color: ${Jb.goldHover};
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.22vw, 3px);
  font-size: clamp(1.8rem, 4vw, 3.1rem);
  font-weight: 600;
  line-height: 1.3;
  text-shadow:
    0 0 2px rgba(255, 246, 220, 0.32),
    0 0 14px rgba(212, 175, 55, 0.18),
    0 12px 28px rgba(0, 0, 0, 0.22);
  margin: 0;
`,Ez=Gb.p`
  color: rgba(200, 210, 220, 0.65);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  font-size: clamp(0.62rem, 0.78vw, 0.72rem);
  letter-spacing: clamp(2.8px, 0.38vw, 4.8px);
  text-transform: uppercase;
  line-height: 1;
  max-width: 480px;
  position: relative;
  padding: 0 18px;
  margin: 0 auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: clamp(18px, 2.4vw, 36px);
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(180, 190, 210, 0.4) 100%
    );
  }

  &::before {
    right: calc(100% - 14px);
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(180, 190, 210, 0.4) 100%
    );
  }

  &::after {
    left: calc(100% - 14px);
    background: linear-gradient(
      90deg,
      rgba(180, 190, 210, 0.4) 0%,
      transparent 100%
    );
  }
`,jz=Gb.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(200px, 26vw, 280px);
  margin-top: 0;
`,_z=Gb.div`
  flex: 1;
  display: flex;
  gap: clamp(16px, 2vw, 24px);
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 0;
  margin: 0;
  align-items: stretch;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`,Tz=Gb.div`
  flex: 0 0 calc(25% - 18px);
  min-width: 0;
  scroll-snap-align: start;
  display: flex;
  align-items: stretch;
  height: 100%;
  padding: 0;
  margin: 0;

  @media (max-width: 1050px) {
    flex: 0 0 calc(33.33% - 14px);
  }

  @media (max-width: 768px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(100% - 0px);
  }
`,Cz=Gb.div`
  background: linear-gradient(
    135deg,
    rgba(46, 8, 16, 0.8) 0%,
    rgba(75, 16, 32, 0.6) 100%
  );
  border: 1px solid rgba(212, 175, 55, 0.08);
  border-radius: 12px;
  padding: clamp(14px, 2vw, 20px);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow:
    inset 0 2px 4px rgba(255, 245, 220, 0.18),
    inset 0 -1px 0 rgba(0, 0, 0, 0.25),
    0 6px 20px rgba(0, 0, 0, 0.2),
    0 0 16px rgba(212, 175, 55, 0.16);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(212, 175, 55, 0.32) 50%,
      transparent 100%
    );
    pointer-events: none;
  }

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(46, 8, 16, 0.95) 0%,
      rgba(75, 16, 32, 0.8) 100%
    );
    border-color: rgba(212, 175, 55, 0.16);
    box-shadow:
      inset 0 2px 6px rgba(255, 245, 220, 0.24),
      inset 0 -1px 0 rgba(0, 0, 0, 0.35),
      0 9px 28px rgba(0, 0, 0, 0.24),
      0 0 24px rgba(212, 175, 55, 0.3);
    transform: translateY(-3px);
  }
`,Iz=Gb.div`
  display: flex;
  gap: 3px;
  margin-bottom: clamp(8px, 1vw, 12px);
  font-size: clamp(12px, 1.2vw, 14px);
`,Az=Gb.span`
  color: #ffd700;
`,Pz=Gb.p`
  font-size: clamp(12px, 1.3vw, 14px);
  line-height: 1.5;
  color: ${Jb.testimonialText};
  margin-bottom: clamp(10px, 1.2vw, 15px);
  font-style: normal;
  margin: 0 0 clamp(10px, 1.2vw, 15px) 0;
  font-weight: 500;

  @media (max-width: ${Yb.tablet-1}px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
  }

  @media (min-width: ${Yb.tablet}px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    overflow: hidden;
  }
`,Rz=Gb.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: auto;
  flex-shrink: 0;
`,Nz=Gb.strong`
  font-size: clamp(12px, 1.2vw, 14px);
  color: ${Jb.white};
  font-weight: 600;

  @media (max-width: ${Yb.tablet-1}px) {
    font-size: clamp(10px, 0.9vw, 12px);
  }
`,Dz=Gb.span`
  font-size: clamp(10px, 1vw, 12px);
  color: ${Jb.testimonialSubtext};

  @media (max-width: ${Yb.tablet-1}px) {
    font-size: clamp(8px, 0.8vw, 10px);
  }
`,Oz=Gb.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${Jb.goldMain};
  font-size: clamp(0.85rem, 1.1vw, 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.42),
    inset 0 1px 0 rgba(255, 245, 220, 0.07);

  &:hover {
    background: linear-gradient(180deg, #f4d98b 0%, #c8960e 100%);
    border-color: #f4d98b;
    color: #1a0005;
    box-shadow:
      0 10px 26px rgba(0, 0, 0, 0.46),
      0 0 18px rgba(212, 175, 55, 0.32);
    transform: scale(1.08);
  }
`,Lz=Gb.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`,Mz=Gb.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  border: 1px solid ${Jb.testimonialAccentBorder};
  border-radius: 8px;
  color: ${Jb.testimonialAccent};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${Jb.testimonialAccentLight};
    border-color: ${Jb.testimonialAccent};
    color: ${Jb.white};
  }
`,$z=[{id:1,name:"Magdalena",company:"Salon Kosmetologii Estetycznej",text:"Nareszcie moja strona wygl\u0105da tak luksusowo, jak moje us\u0142ugi. Grafiki s\u0105 ob\u0142\u0119dne \u2013 nikt w mojej bran\u017cy nie ma nic podobnego. Najbardziej zaskoczy\u0142o mnie to, \u017ce wszystko by\u0142o gotowe w dwa dni.",rating:5},{id:2,name:"Tomasz",company:"Doradztwo Biznesowe",text:"Moja poprzednia strona wiecznie si\u0119 zacina\u0142a. Ta od Klary Queen dzia\u0142a b\u0142yskawicznie, nawet na telefonie. Klienci od razu zauwa\u017cyli zmian\u0119. Pe\u0142en profesjonalizm i zero lania wody.",rating:5},{id:3,name:"Agnieszka",company:"Biuro Architektoniczne",text:"Zale\u017ca\u0142o mi na estetyce, kt\xf3ra odda jako\u015b\u0107 moich projekt\xf3w. Studio zrozumia\u0142o moj\u0105 wizj\u0119 w punkt. Strona jest elegancka, czysta i bardzo nowoczesna. \u015awietny kontakt na ka\u017cdym etapie.",rating:5},{id:4,name:"Piotr",company:"Agencja Eventowa Premium",text:"Szybko\u015b\u0107 realizacji w tym studiu to jaki\u015b kosmos. Podczas gdy inni dopiero przygotowywali oferty, tutaj strona ju\u017c by\u0142a gotowa do publikacji. Wszystko dzia\u0142a idealnie, bez \u017cadnych b\u0142\u0119d\xf3w.",rating:5},{id:5,name:"Katarzyna",company:"Coaching & Mentoring",text:"By\u0142am sceptyczna, czy w 48h da si\u0119 zrobi\u0107 co\u015b porz\u0105dnego. Myli\u0142am si\u0119. Strona jest pi\u0119kna, unikalna i co najwa\u017cniejsze \u2013 klienci zacz\u0119li pisa\u0107 do mnie sami. To by\u0142a \u015bwietna inwestycja.",rating:5},{id:6,name:"Robert",company:"Firma Logistyczna",text:"Konkretnie i na temat. Dosta\u0142em nowoczesne narz\u0119dzie, kt\xf3re buduje presti\u017c mojej firmy. Nie musz\u0119 si\u0119 martwi\u0107 o \u017cadne wirusy czy b\u0142\u0119dy \u2013 wszystko po prostu dzia\u0142a jak nale\u017cy.",rating:5},{id:7,name:"Joanna",company:"Kancelaria Prawna",text:"Bardzo merytoryczne podej\u015bcie. Strona jest minimalistyczna, ale bije od niej profesjonalizm. Du\u017cy plus za cierpliwo\u015b\u0107 przy dobieraniu grafik \u2013 efekt ko\u0144cowy jest idealny.",rating:5},{id:8,name:"Marek",company:"Studio Treningu Personalnego",text:"Wi\u0119kszo\u015b\u0107 stron w mojej bran\u017cy wygl\u0105da tak samo. Moja od razu si\u0119 wyr\xf3\u017cnia dzi\u0119ki tym grafikom. Jest dynamiczna, szybka i po prostu chce si\u0119 na niej zosta\u0107 d\u0142u\u017cej.",rating:5},{id:9,name:"Ewa",company:"Projektantka Wn\u0119trz",text:"Ceni\u0119 sobie estetyk\u0119, a Studio Klara Queen dostarczy\u0142o mi projekt, kt\xf3ry jest po prostu pi\u0119kny. Wszystko dopi\u0119te na ostatni guzik w ekspresowym tempie. Polecam ka\u017cdemu.",rating:5},{id:10,name:"\u0141ukasz",company:"Sklep Internetowy (Nisza Premium)",text:"Przej\u015bcie na now\u0105 stron\u0119 to by\u0142a ulga. Wszystko \u0142aduje si\u0119 w u\u0142amku sekundy, a proces zakupowy jest p\u0142ynny. Wida\u0107, \u017ce zesp\xf3\u0142 zna si\u0119 na rzeczy i nie idzie na \u0142atwizn\u0119.",rating:5},{id:11,name:"Karolina",company:"Fotografia \u015alubna",text:"Jako fotograf zwracam uwag\u0119 na ka\u017cdy piksel. Jestem pod ogromnym wra\u017ceniem, jak dobrze dobrano opraw\u0119 wizualn\u0105. Strona jest lekka, szybka i bardzo stylowa.",rating:5},{id:12,name:"Andrzej",company:"Us\u0142ugi Finansowe",text:"Szuka\u0142em solidnego partnera i nie zawiod\u0142em si\u0119. Strona jest bezpieczna, wygl\u0105da nowocze\u015bnie i buduje zaufanie od pierwszej sekundy. \u017badnych problem\xf3w z terminami.",rating:5},{id:13,name:"Natalia",company:"Klinika Stomatologiczna",text:"Zale\u017ca\u0142o nam na nowoczesnym wizerunku. Strona, kt\xf3r\u0105 otrzymali\u015bmy, jest przejrzysta i bardzo intuicyjna dla pacjent\xf3w. Proces wdro\u017cenia trwa\u0142 niesamowicie kr\xf3tko.",rating:5},{id:14,name:"Micha\u0142",company:"Produkcja Mebli na Wymiar",text:"Konkretny kontakt i szybka realizacja. Strona \u015bwietnie eksponuje nasze realizacje. Podoba mi si\u0119, \u017ce nie musz\u0119 traci\u0107 czasu na techniczne detale \u2013 studio zaj\u0119\u0142o si\u0119 wszystkim.",rating:5},{id:15,name:"Daria",company:"Marka Odzie\u017cowa",text:"Moja marka w ko\u0144cu zyska\u0142a opraw\u0119, na jak\u0105 zas\u0142ugiwa\u0142a. Grafiki s\u0105 unikalne, a strona dzia\u0142a bez zarzutu. Ca\u0142o\u015b\u0107 wygl\u0105da bardzo presti\u017cowo i nowocze\u015bnie.",rating:5}];const Fz=function(){const e=(0,r.useRef)(null),t=(0,r.useRef)(!1),n=n=>{const r=e.current;if(!r||t.current)return;const i=r.firstElementChild;if(!i)return;const a=parseFloat(getComputedStyle(r).gap)||16,o=i.offsetWidth+a,s=r.scrollWidth-r.clientWidth;t.current=!0,n>0&&r.scrollLeft>=s-2?r.scrollTo({left:0,behavior:"smooth"}):n<0&&r.scrollLeft<=2?r.scrollTo({left:s,behavior:"smooth"}):r.scrollBy({left:n*o,behavior:"smooth"}),setTimeout(()=>{t.current=!1},580)};return(0,Xg.jsxs)(kz,{children:[(0,Xg.jsxs)(zz,{children:[(0,Xg.jsx)(Sz,{children:"Opinie Naszych Klient\xf3w"}),(0,Xg.jsx)(Ez,{children:"To m\xf3wi\u0105 o nas ci, kt\xf3rzy nam zaufali"})]}),(0,Xg.jsxs)(jz,{children:[(0,Xg.jsx)(Oz,{onClick:()=>n(-1),"aria-label":"Poprzednia opinia",children:(0,Xg.jsx)(Gv,{})}),(0,Xg.jsx)(_z,{ref:e,children:$z.map(e=>(0,Xg.jsx)(Tz,{children:(0,Xg.jsxs)(Cz,{children:[(0,Xg.jsx)(Iz,{children:[...Array(e.rating)].map((e,t)=>(0,Xg.jsx)(Az,{children:"\u2605"},t))}),(0,Xg.jsxs)(Pz,{children:['"',e.text,'"']}),(0,Xg.jsxs)(Rz,{children:[(0,Xg.jsx)(Nz,{children:e.name}),(0,Xg.jsx)(Dz,{children:e.company})]})]})},e.id))}),(0,Xg.jsx)(Oz,{onClick:()=>n(1),"aria-label":"Nast\u0119pna opinia",children:(0,Xg.jsx)(Kv,{})})]}),(0,Xg.jsx)(Lz,{children:(0,Xg.jsx)(Mz,{href:"/testimonials",children:"Przeczytaj wszystkie opinie \u2192"})})]})};const Uz=function(){return(0,Xg.jsxs)(Xg.Fragment,{children:[(0,Xg.jsx)(Gx,{children:(0,Xg.jsxs)(qx,{children:[(0,Xg.jsx)(Qx,{children:(0,Xg.jsx)(ck,{})}),(0,Xg.jsx)(Yx,{children:(0,Xg.jsx)(vk,{})})]})}),(0,Xg.jsx)(qk,{}),(0,Xg.jsx)(cz,{}),(0,Xg.jsx)(xz,{}),(0,Xg.jsx)(Fz,{})]})},Vz=Gb.div`
  position: relative;
  z-index: 5;
`,Bz=Gb.section`
  padding: clamp(30px, 4vw, 50px) clamp(20px, 8vw, 50px);
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Hz=Gb.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
`,Wz=Gb.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${Jb.goldMain} 50%,
    transparent 100%
  );
  opacity: 0.25;
  margin: clamp(15px, 2vw, 25px) auto;
  max-width: 200px;
`,Kz=Gb.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: clamp(30px, 4vw, 50px);
  color: ${Jb.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: clamp(2px, 0.5vw, 4px);
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  align-self: center;

  &::after {
    content: "";
    position: absolute;
    bottom: clamp(-12px, -2vw, -18px);
    left: 50%;
    transform: translateX(-50%);
    width: clamp(40px, 10vw, 70px);
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${Jb.goldMain} 20%,
      ${Jb.goldMain} 80%,
      transparent 100%
    );
  }
`,Gz=Gb.section`
  padding: clamp(25px, 4vw, 60px) clamp(20px, 8vw, 50px);
  text-align: center;
  position: relative;
  animation: fadeInDown 0.8s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: clamp(30px, 4vw, 60px);
    left: 50%;
    transform: translateX(-50%);
    width: clamp(60px, 15vw, 120px);
    height: clamp(2px, 0.5vw, 3px);
    background: linear-gradient(
      90deg,
      transparent,
      ${Jb.goldMain},
      transparent
    );
  }
`,qz=Gb.h1`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 700;
  color: ${Jb.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: clamp(1px, 0.5vw, 3px);
  margin: clamp(35px, 5vw, 50px) 0 clamp(25px, 4vw, 35px);
  text-transform: uppercase;
`,Qz=Gb.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: rgba(255, 255, 255, 0.82);
  line-height: clamp(1.6, 3vw, 1.9);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
  font-family: "Manrope", sans-serif;
`,Yz="Wymiar Luksusowej Doskona\u0142o\u015bci",Jz="Gdzie wizja spotyka precyzj\u0119. Tworzymy cyfrowe eksperyencje, kt\xf3re wyznaczaj\u0105 standardy bran\u017cy.",Xz={title:"Twoja Kolekcja",paragraphs:[". Stworzyli\u015bmy ekosystem wzorc\xf3w, kt\xf3re wyznaczaj\u0105 standardy - sprawdzone, doskonale zaprojektowane i gotowe do Twojej marki.","Ty wybierasz fundament z naszej autorskiej kolekcji, my dostosowujemy go do Twojej to\u017csamo\u015bci. Rezultat? Estetyka bez kompromis\xf3w i natychmiastowy autorytet w Twojej bran\u017cy.","Ka\u017cdy szablon to efekt setki godzin testowania, niezliczonych iteracji i wiedzy zdobytej pracuj\u0105c z luksusowymi markami na ca\u0142ym \u015bwiecie."],signature:"Autorska Kolekcja \xb7 Sprawdzone Struktury \xb7 Estetyka Bez Kompromis\xf3w"},Zz=[{id:1,label:"Selekcja",value:"1",description:"Autorskie szablony zaprojektowane pod luksusowe marki."},{id:2,label:"Szybko\u015b\u0107",value:"2",description:"Twoja obecno\u015b\u0107 online w 2-4 dni robocze."},{id:3,label:"Sp\xf3jno\u015b\u0107",value:"3",description:"Gwarancja doskona\u0142ego wygl\u0105du na ka\u017cdym urz\u0105dzeniu."}],eS=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych. "},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."}],tS={title:"Gdzie nas znajdziesz?",description:"Nasze projekty dost\u0119pne na najpopularniejszych platformach. Allegro oferuje nas za nieco wy\u017csz\u0105 cen\u0119 ze wzgl\u0119du na ich prowizj\u0119. ",platforms:[{id:1,name:"Facebook",description:"Obserwuj nas na Facebooku, aby by\u0107 zawsze na bie\u017c\u0105co."},{id:2,name:"YouTube",description:"Odkrywaj nasze projekty i inspiracje na YouTube."},{id:3,name:"Allegro",description:"Kupuj nasze szablony w sklepie Allegro (ceny wy\u017csze ze wzgl\u0119du na prowizj\u0119)."}]},nS="Twoja Kolekcja",rS="Nasze Atuty",iS="Jak To Dzia\u0142a?",aS="Got\xf3w na transformacj\u0119 cyfrow\u0105?",oS=()=>(0,Xg.jsxs)(Gz,{children:[(0,Xg.jsx)(qz,{children:Yz}),(0,Xg.jsx)(Qz,{children:Jz})]}),sS=Gb.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 35px);
  animation: fadeInLeft 0.8s ease-out 0.2s both;

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,lS=Gb.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: clamp(1.7, 4vw, 2.1);
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
  position: relative;
`,cS=Gb.div`
  color: ${Jb.goldMain};
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  margin-top: clamp(35px, 6vw, 50px);
  letter-spacing: clamp(1px, 0.3vw, 2px);
  font-weight: 600;
  opacity: 0.95;
  padding-top: clamp(20px, 3vw, 30px);
  border-top: 1px solid rgba(212, 175, 55, 0.2);
  text-align: center;
`,uS=()=>(0,Xg.jsxs)(sS,{children:[Xz.paragraphs.map((e,t)=>(0,Xg.jsx)(lS,{children:e},t)),(0,Xg.jsx)(cS,{children:Xz.signature})]}),dS=Gb.div`
  border-left: 2px solid ${Jb.goldMain};
  padding-left: clamp(25px, 4vw, 40px);
  display: flex;
  flex-direction: column;
  gap: clamp(25px, 4vw, 35px);
  position: relative;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    left: -3px;
    top: 0;
    width: 4px;
    height: 25%;
    background: linear-gradient(
      180deg,
      ${Jb.goldMain} 0%,
      transparent 100%
    );
  }
`,hS=Gb.div`
  margin-bottom: 0;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  padding: clamp(15px, 2.5vw, 20px);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  animation: fadeInRight 0.6s ease-out both;

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  &:hover {
    padding-left: clamp(20px, 3.5vw, 35px);
    padding-right: clamp(15px, 2.5vw, 20px);
    background: rgba(212, 175, 55, 0.08);
    border-radius: 12px;
  }
`,pS=Gb.h4`
  color: ${Jb.goldMain};
  margin-bottom: clamp(12px, 2vw, 15px);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  margin-top: 0;
`,fS=Gb.p`
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.85);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
`,mS=Gb.div`
  width: 100%;
`,gS=Gb.button`
  margin-top: clamp(40px, 6vw, 60px);
  padding: clamp(12px, 2vw, 16px) clamp(30px, 4vw, 50px);
  background: linear-gradient(
    135deg,
    ${Jb.goldMain} 0%,
    #f1d592 100%
  );
  color: ${Jb.deepBlack};
  border: none;
  border-radius: 50px;
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`,yS=()=>{const e=pe();return(0,Xg.jsxs)(mS,{children:[(0,Xg.jsx)(dS,{children:eS.map(e=>(0,Xg.jsxs)(hS,{children:[(0,Xg.jsx)(pS,{children:e.question}),(0,Xg.jsx)(fS,{children:e.answer})]},e.id))}),(0,Xg.jsx)(gS,{onClick:()=>e("/questions"),children:"Zobacz Wi\u0119cej Pyta\u0144"})]})},wS=Gb.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(30px, 5vw, 50px);
  margin-top: clamp(60px, 8vw, 80px);
  width: 100%;

  @media (max-width: ${Yb.tablet}px) {
    grid-template-columns: 1fr;
  }
`,bS=Gb.div`
  display: flex;
  flex-direction: column;
  gap: clamp(15px, 2vw, 20px);
  padding: clamp(30px, 5vw, 45px);
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.1) 0%,
    rgba(212, 175, 55, 0.03) 100%
  );
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: clamp(8px, 1vw, 14px);
  backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(212, 175, 55, 0.15),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover {
    border-color: ${Jb.goldMain};
    background: linear-gradient(
      135deg,
      rgba(212, 175, 55, 0.18) 0%,
      rgba(212, 175, 55, 0.08) 100%
    );
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(212, 175, 55, 0.15);

    &::before {
      left: 100%;
    }
  }

  animation: fadeInUp 0.6s ease-out both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.3s;
  }
`,vS=Gb.span`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: bold;
  color: ${Jb.goldMain};
  opacity: 0.95;
  font-family: "Cormorant Garamond", serif;
  line-height: 1;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,xS=Gb.span`
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  text-transform: uppercase;
  letter-spacing: clamp(1.5px, 0.5vw, 2.5px);
  color: ${Jb.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  opacity: 0.9;
`,kS=Gb.p`
  font-size: clamp(0.85rem, 1.8vw, 0.98rem);
  line-height: clamp(1.6, 3vw, 1.8);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
`,zS=()=>(0,Xg.jsx)(wS,{children:Zz.map(e=>(0,Xg.jsxs)(bS,{children:[(0,Xg.jsx)(vS,{children:e.value}),(0,Xg.jsx)(xS,{children:e.label}),(0,Xg.jsx)(kS,{children:e.description})]},e.id))}),SS=Gb.section`
  padding: clamp(50px, 8vw, 80px) clamp(20px, 8vw, 50px);
  text-align: center;
  position: relative;
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,ES=Gb.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: clamp(30px, 4vw, 50px);
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
`,jS=(Gb.button`
  padding: clamp(14px, 2.5vw, 18px) clamp(35px, 5vw, 60px);
  background: linear-gradient(
    135deg,
    ${Jb.goldMain} 0%,
    #f1d592 100%
  );
  color: ${Jb.deepBlack};
  border: none;
  border-radius: 50px;
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`,()=>(0,Xg.jsx)(SS,{children:(0,Xg.jsx)(ES,{children:aS})})),_S=Gb.section`
  padding: clamp(30px, 4vw, 50px) clamp(20px, 8vw, 50px);
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,TS=Gb.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: clamp(30px, 4vw, 50px);
  color: ${Jb.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: clamp(2px, 0.5vw, 4px);
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  align-self: center;

  &::after {
    content: "";
    position: absolute;
    bottom: clamp(-12px, -2vw, -18px);
    left: 50%;
    transform: translateX(-50%);
    width: clamp(40px, 10vw, 70px);
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${Jb.goldMain} 20%,
      ${Jb.goldMain} 80%,
      transparent 100%
    );
  }
`,CS=Gb.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: clamp(40px, 6vw, 60px);
  max-width: 600px;
  line-height: clamp(1.6, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
`,IS=Gb.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(25px, 4vw, 40px);
  width: 100%;
  margin-top: clamp(20px, 3vw, 30px);

  @media (max-width: ${Yb.tablet}px) {
    grid-template-columns: 1fr;
  }
`,AS=Gb.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(15px, 2vw, 20px);
  padding: clamp(30px, 5vw, 45px);
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.1) 0%,
    rgba(212, 175, 55, 0.03) 100%
  );
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: clamp(8px, 1vw, 14px);
  backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(212, 175, 55, 0.15),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover {
    border-color: ${Jb.goldMain};
    background: linear-gradient(
      135deg,
      rgba(212, 175, 55, 0.18) 0%,
      rgba(212, 175, 55, 0.08) 100%
    );
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(212, 175, 55, 0.15);

    &::before {
      left: 100%;
    }
  }
`,PS=Gb.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${Jb.goldMain};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;

  ${AS}:hover & {
    transform: scale(1.15) rotate(5deg);
  }
`,RS=Gb.h3`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  color: ${Jb.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
`,NS=Gb.p`
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  line-height: clamp(1.5, 2.5vw, 1.7);
  font-weight: 400;
`,DS=()=>(0,Xg.jsxs)(_S,{children:[(0,Xg.jsx)(TS,{children:tS.title}),(0,Xg.jsx)(CS,{children:tS.description}),(0,Xg.jsx)(IS,{children:tS.platforms.map(e=>{const t=Qv.find(t=>t.label===e.name);return(0,Xg.jsxs)(AS,{href:null===t||void 0===t?void 0:t.url,target:"_blank",rel:"noopener noreferrer",children:[(0,Xg.jsx)(PS,{children:t&&(0,Xg.jsx)(t.icon,{})}),(0,Xg.jsx)(RS,{children:e.name}),(0,Xg.jsx)(NS,{children:e.description})]},e.id)})})]}),OS=()=>(0,Xg.jsxs)(Vz,{children:[(0,Xg.jsx)(oS,{}),(0,Xg.jsx)(Wz,{}),(0,Xg.jsxs)(Bz,{children:[(0,Xg.jsx)(Kz,{children:nS}),(0,Xg.jsx)(Hz,{children:(0,Xg.jsx)(uS,{})})]}),(0,Xg.jsx)(Wz,{}),(0,Xg.jsxs)(Bz,{children:[(0,Xg.jsx)(Kz,{children:rS}),(0,Xg.jsx)(Hz,{style:{maxWidth:"1000px"},children:(0,Xg.jsx)(zS,{})})]}),(0,Xg.jsx)(Wz,{}),(0,Xg.jsxs)(Bz,{children:[(0,Xg.jsx)(Kz,{children:iS}),(0,Xg.jsx)(Hz,{children:(0,Xg.jsx)(yS,{})})]}),(0,Xg.jsx)(Wz,{}),(0,Xg.jsx)(DS,{}),(0,Xg.jsx)(Wz,{}),(0,Xg.jsx)(jS,{})]}),LS=Gb.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);
  box-sizing: border-box;

  @media (max-width: ${Yb.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`,MS=Gb.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`,$S=Gb.div`
  margin-bottom: clamp(30px, 5vw, 50px);
  text-align: center;
  animation: fadeInDown 0.8s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,FS=Gb.h1`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-family: "Cormorant Garamond", serif;
  color: ${Jb.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(0.5px, 0.5vw, 1px);
`,US=Gb.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.6;

  @media (max-width: ${Yb.tablet}px) {
    display: none;
  }
`,VS=Gb.div`
  border-left: 2px solid ${Jb.goldMain};
  padding-left: clamp(25px, 4vw, 40px);
  display: flex;
  flex-direction: column;
  gap: clamp(25px, 4vw, 40px);
  position: relative;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    left: -3px;
    top: 0;
    width: 4px;
    height: 15%;
    background: linear-gradient(
      180deg,
      ${Jb.goldMain} 0%,
      transparent 100%
    );
  }
`,BS=Gb.div`
  margin-bottom: 0;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  padding: clamp(15px, 2.5vw, 25px);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  animation: fadeInRight 0.6s ease-out both;

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(-25px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &:nth-child(odd) {
    animation-delay: calc(0.1s * var(--index));
  }

  &:nth-child(even) {
    animation-delay: calc(0.15s * var(--index));
  }

  &:hover {
    padding-left: clamp(20px, 3.5vw, 35px);
    padding-right: clamp(15px, 2.5vw, 25px);
    background: rgba(212, 175, 55, 0.1);
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.15);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(212, 175, 55, 0.05) 50%,
      transparent 100%
    );
    transition: left 0.5s ease;
    pointer-events: none;
  }

  &:hover::before {
    left: 100%;
  }
`,HS=Gb.h3`
  color: ${Jb.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  line-height: 1.4;
`,WS=Gb.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
  transition: color 0.3s ease;

  ${BS}:hover & {
    color: rgba(255, 255, 255, 0.95);
  }
`,KS=Gb.div`
  margin-top: clamp(60px, 10vw, 100px);
  text-align: center;
  padding-top: clamp(40px, 6vw, 60px);
  border-top: 1px solid rgba(212, 175, 55, 0.2);
`,GS=Gb.button`
  padding: clamp(12px, 2vw, 16px) clamp(30px, 4vw, 50px);
  background: linear-gradient(
    135deg,
    ${Jb.goldMain} 0%,
    #f1d592 100%
  );
  color: ${Jb.deepBlack};
  border: none;
  border-radius: 50px;
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`,qS=Gb.button`
  background: transparent;
  border: none;
  color: ${Jb.goldMain};
  cursor: pointer;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: inherit;
  padding: 0;
  margin: 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${Jb.goldHover};
  }
`,QS={title:"Najcz\u0119stsze Pytania",subtitle:"Masz w\u0105tpliwo\u015bci? Znajd\u017a odpowied\u017a na pytania, kt\xf3re zadaj\u0105 nam nasi klienci"},YS={backLabel:"Powr\xf3t do strony g\u0142\xf3wnej"},JS=()=>{const e=pe();return(0,Xg.jsx)(LS,{children:(0,Xg.jsxs)(MS,{children:[(0,Xg.jsxs)($S,{children:[(0,Xg.jsx)(FS,{children:QS.title}),(0,Xg.jsx)(US,{children:QS.subtitle})]}),(0,Xg.jsx)(VS,{children:vz.map((t,n)=>(0,Xg.jsxs)(BS,{style:{"--index":n},children:[(0,Xg.jsx)(HS,{children:t.question}),(0,Xg.jsxs)(WS,{children:[t.answer,t.cooperationLink&&(0,Xg.jsxs)(Xg.Fragment,{children:[" ",(0,Xg.jsx)(qS,{onClick:()=>e("/cooperation"),children:"Wsp\xf3\u0142praca"}),"."]})]})]},t.id))}),(0,Xg.jsx)(KS,{children:(0,Xg.jsx)(GS,{onClick:()=>e("/"),children:YS.backLabel})})]})})},XS=Gb.section`
  position: relative;
  z-index: 5;
  width: 100%;
  box-sizing: border-box;
`,ZS=Gb.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);

  @media (max-width: ${Yb.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`,eE=Gb.div`
  text-align: center;
  margin-bottom: clamp(30px, 5vw, 50px);
  animation: fadeInDown 0.8s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,tE=Gb.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${Jb.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,nE=Gb.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${Yb.tablet}px) {
    display: none;
  }
`,rE={hero:{title:"Wsp\xf3\u0142praca",subtitle:"Prosty proces, pe\u0142na transparentno\u015b\u0107, gwarancja spokojnego snu. Oto, jak budujemy Twoj\u0105 cyfrow\u0105 przysz\u0142o\u015b\u0107."},steps:[{id:1,number:"1",title:"Wyb\xf3r Drogi i Start",content:"Wsp\xf3\u0142prac\u0119 zaczynamy od formalno\u015bci, aby\u015b mog\u0142a spa\u0107 spokojnie. Masz dwie \u015bcie\u017cki:",options:[{label:"Bezpo\u015brednio:",description:"Piszesz do nas e-mail, ustalamy szczeg\xf3\u0142y, przesy\u0142amy dane do faktury (bez VAT) i po op\u0142aceniu ruszamy z kopyta."},{label:"Allegro:",description:"Kupujesz na aukcji, korzystasz z bezpiecznych p\u0142atno\u015bci platformy i automatycznie trafiasz do kolejki realizacji."}],note:"Wa\u017cne: Przyst\u0119pujemy do pracy natychmiast po zaksi\u0119gowaniu wp\u0142aty lub otrzymaniu potwierdzenia z Allegro."},{id:2,number:"2",title:"Strategia i Materia\u0142y",content:"Nie musisz by\u0107 techniczna. Przesy\u0142amy Ci interaktywn\u0105 ankiet\u0119, kt\xf3ra poprowadzi Ci\u0119 za r\u0119k\u0119.",sections:[{label:"Twoje Zadanie:",description:"Wybierasz sekcje, kt\xf3re maj\u0105 si\u0119 pojawi\u0107 (np. O nas, Portfolio, Cennik)."},{label:"Nasze Wsparcie:",description:"Je\u015bli nie masz tekst\xf3w \u2013 przygotujemy je. Je\u015bli brak Ci zdj\u0119\u0107 \u2013 wygenerujemy unikalne grafiki AI."},{label:"Domena:",description:"Podajesz 2-3 propozycje nazwy (np. twojanazwa.pl). My sprawdzamy dost\u0119pno\u015b\u0107 i rejestrujemy t\u0119 woln\u0105."}]},{id:3,number:"3",title:"Realizacja: 48h Roboczych",content:"Tutaj dzieje si\u0119 magia. Kodujemy Twoj\u0105 stron\u0119 w czystym React.js.",details:[{label:"Czas:",description:"Standardowy czas realizacji to 48 godzin roboczych."},{label:"Zasada Wypocz\u0119tego Eksperta:",description:"Liczymy tylko dni robocze (poniedzia\u0142ek \u2013 pi\u0105tek). Weekendy i \u015bwi\u0119ta to czas na regeneracj\u0119, bo tylko wypocz\u0119ty programista gwarantuje kod bez b\u0142\u0119d\xf3w i design na najwy\u017cszym poziomie."},{label:"Technologia:",description:"Konfigurujemy darmowy serwer (GitHub Pages) i spinamy wszystko z Twoj\u0105 now\u0105 domen\u0105."}]},{id:4,number:"4",title:'Przekazanie "Kluczy do Biznesu"',content:"Twoja strona o\u017cywa. Ale na tym nie ko\u0144czymy:",deliverables:["Otrzymujesz od nas komplet hase\u0142 i dost\u0119p\xf3w do konta serwera i domeny.","Dostajesz prost\u0105 instrukcj\u0119, co zrobi\u0107 za rok, \u017ceby przed\u0142u\u017cy\u0107 domen\u0119 (koszt ok. 80 z\u0142 \u2013 bez naszych mar\u017c).","Strona jest Twoj\u0105 w\u0142asno\u015bci\u0105 na zawsze. Mo\u017cesz j\u0105 rozwija\u0107, przenosi\u0107 i modyfikowa\u0107 bez \u017cadnych ogranicze\u0144."]}],guarantee:{title:'Pakiet "Spokojna G\u0142owa"',subtitle:"Twoja Gwarancja",description:"Wiemy, \u017ce biznes si\u0119 zmienia. Numer telefonu mo\u017ce ulec zmianie, cennik mo\u017ce podskoczy\u0107. Dlatego nasza wsp\xf3\u0142praca nie ko\u0144czy si\u0119 na oddaniu strony:",benefits:[{icon:"3x",title:"3 Lata Opieki",description:"Masz u nas 3 darmowe pakiety poprawek do wykorzystania przez 36 miesi\u0119cy."},{icon:"\u26a1",title:"B\u0142yskawiczny Serwis",description:"Potrzebujesz zmiany? Piszesz e-mail, a my wprowadzamy poprawk\u0119 w kodzie."},{icon:"\ud83d\udcb0",title:"Uczciwe Stawki",description:"Po wykorzystaniu darmowych pakiet\xf3w, drobne zmiany to koszt rz\u0119du 10-50 z\u0142. Bez abonament\xf3w, bez naci\u0105gania."}]},materials:{title:"Jak Przygotowa\u0107 Materia\u0142y?",subtitle:"Twoja Checklista",intro:"Nie musisz by\u0107 copywriterem ani fotografem. Nasza strona jest elastyczna \u2013 dopasuje si\u0119 do tego, co masz. Je\u015bli brakuje Ci jakiej\u015b sekcji (np. cennika czy zespo\u0142u), po prostu j\u0105 ukryjemy, a layout nadal b\u0119dzie wygl\u0105da\u0142 perfekcyjnie.",sections:[{icon:"\ud83d\udccb",title:"Co Warto Przygotowa\u0107?",items:[{label:"Fundament (Hero & Domena)",points:["Wymy\u015bl chwytliwe has\u0142o (np. 'Twoje wspomnienia w najlepszym \u015bwietle').","Podaj 2-3 propozycje adresu strony (np. mojafirma.pl). Pami\u0119taj: kr\xf3tko i \u0142atwo do podyktowania. Unikaj nazw zastrze\u017conych marek!"]},{label:"To\u017csamo\u015b\u0107 (O nas & Zesp\xf3\u0142)",points:["Napisz kilka zda\u0144 o swojej pasji i tym, co Ci\u0119 wyr\xf3\u017cnia.","Poka\u017c 'ludzk\u0105 twarz' biznesu \u2013 prze\u015blij zdj\u0119cie przy pracy. Klienci kupuj\u0105 oczami, ale ufaj\u0105 ludziom, kt\xf3rych widz\u0105."]},{label:"Twoje Sukcesy (Statystyki & Portfolio)",points:["Pochwal si\u0119 liczbami (lata pracy, zadowoleni klienci) lub kluczowymi zaletami.","Wybierz do 12 najlepszych zdj\u0119\u0107 do galerii. Dzielimy je na kategorie (np. Biznes, Sesje, Projekty)."]},{label:"Konkrety (Us\u0142ugi & Cennik)",points:["Opisz kr\xf3tko do 10 us\u0142ug.","Podaj ceny lub pakiety. Je\u015bli wyceniasz indywidualnie \u2013 napiszemy o tym!"]},{label:"Kontakt & Social Media",points:["Przygotuj e-mail, telefon i linki do profili (Instagram, Facebook, TikTok itd.).","Sprawimy, \u017ce klient skontaktuje si\u0119 z Tob\u0105 jednym klikni\u0119ciem."]}]},{icon:"\ud83d\udc8e",title:"Nasze Wsparcie Kreatywne",highlight:!0,items:[{label:"Teksty",points:["Na podstawie kr\xf3tkiej ankiety ubierzemy Twoje my\u015bli w profesjonalne s\u0142owa."]},{label:"Grafiki AI",points:["Je\u015bli nie masz w\u0142asnych fotografii do t\u0142a lub sekcji 'O nas', wygenerujemy dla Ciebie unikalne, wysokiej jako\u015bci grafiki AI."]}]},{icon:"\u26a0\ufe0f",title:"Wa\u017cne Informacje Techniczne",items:[{label:"Szybko\u015b\u0107 Ponad Wszystko",points:["Limity zdj\u0119\u0107 (np. do 12 w galerii) stosujemy celowo. Dzi\u0119ki temu Twoja strona \u0142aduje si\u0119 b\u0142yskawicznie na ka\u017cdym smartfonie. W sieci: mniej znaczy wi\u0119cej!"]},{label:"Elastyczno\u015b\u0107",points:["Niezale\u017cnie od tego, czy wybierzesz 5, czy 10 sekcji, my zadbamy o zachowanie idealnych proporcji i estetyki."]},{label:"48h Roboczych",points:["Nasz zegar rusza, gdy otrzymamy od Ciebie komplet materia\u0142\xf3w. Pracujemy w dni robocze, aby dostarczy\u0107 Ci kod najwy\u017cszej jako\u015bci."]}]}]},cta:{primary:"Zacznij Wsp\xf3\u0142prac\u0119",secondary:"Wr\xf3\u0107 do Pyta\u0144"}},iE=()=>(0,Xg.jsxs)(eE,{children:[(0,Xg.jsx)(tE,{children:rE.hero.title}),(0,Xg.jsx)(nE,{children:rE.hero.subtitle})]}),aE=Gb.div`
  display: flex;
  flex-direction: column;
  gap: clamp(60px, 10vw, 100px);
  margin-bottom: clamp(80px, 12vw, 120px);
`,oE=Gb.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: ${e=>`${e.delay}s`||"0s"};

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,sE=Gb.div`
  display: flex;
  align-items: center;
  gap: clamp(20px, 3vw, 30px);
`,lE=Gb.div`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: ${Jb.goldMain};
  line-height: 1;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  min-width: 60px;
  text-align: center;
  background: rgba(212, 175, 55, 0.1);
  padding: clamp(15px, 2vw, 25px);
  border-radius: 10px;
  border: 1px solid rgba(212, 175, 55, 0.2);
`,cE=Gb.div`
  padding: clamp(20px, 3vw, 30px);
  background: rgba(212, 175, 55, 0.05);
  border-radius: 10px;
  border-left: 3px solid ${Jb.goldMain};
  padding-left: clamp(25px, 4vw, 40px);
`,uE=Gb.h2`
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  color: ${Jb.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
  flex: 1;
`,dE=Gb.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  margin: 0 0 clamp(15px, 2vw, 20px) 0;
`,hE=Gb.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`,pE=Gb.div`
  padding: clamp(15px, 2.5vw, 20px);
  background: rgba(212, 175, 55, 0.08);
  border-radius: 8px;
  border-left: 3px solid ${Jb.goldMain};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    transform: translateX(5px);
  }
`,fE=Gb.h4`
  color: ${Jb.goldMain};
  margin: 0 0 8px 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
`,mE=Gb.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 0.95rem);
  line-height: 1.6;
`,gE=Gb.div`
  margin-top: clamp(20px, 3vw, 30px);
  padding: clamp(15px, 2.5vw, 25px);
  background: rgba(212, 175, 55, 0.05);
  border-radius: 8px;
  border-top: 2px solid ${Jb.goldMain};
`,yE=Gb.h5`
  color: ${Jb.goldMain};
  margin: 0 0 8px 0;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`,wE=Gb.p`
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  line-height: 1.6;
`,bE=Gb.ul`
  list-style: none;
  padding: 0;
  margin: clamp(20px, 3vw, 30px) 0 0 0;

  li {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: clamp(12px, 2vw, 18px);
    padding-left: 30px;
    position: relative;
    font-size: clamp(0.95rem, 1.8vw, 1.05rem);
    line-height: 1.6;

    &::before {
      content: "→";
      position: absolute;
      left: 0;
      color: ${Jb.goldMain};
      font-weight: 700;
    }
  }
`,vE=()=>(0,Xg.jsx)(aE,{children:rE.steps.map((e,t)=>(0,Xg.jsxs)(oE,{delay:.1*t,children:[(0,Xg.jsxs)(sE,{children:[(0,Xg.jsx)(lE,{children:e.number}),(0,Xg.jsx)(uE,{children:e.title})]}),(0,Xg.jsxs)(cE,{children:[(0,Xg.jsx)(dE,{children:e.content}),e.options&&(0,Xg.jsxs)(Xg.Fragment,{children:[(0,Xg.jsx)(hE,{children:e.options.map((e,t)=>(0,Xg.jsxs)(pE,{children:[(0,Xg.jsx)(fE,{children:e.label}),(0,Xg.jsx)(mE,{children:e.description})]},t))}),e.note&&(0,Xg.jsxs)(gE,{children:[(0,Xg.jsx)(yE,{children:"Wa\u017cne"}),(0,Xg.jsx)(wE,{children:e.note})]})]}),e.sections&&(0,Xg.jsx)(hE,{children:e.sections.map((e,t)=>(0,Xg.jsxs)(pE,{children:[(0,Xg.jsx)(fE,{children:e.label}),(0,Xg.jsx)(mE,{children:e.description})]},t))}),e.details&&(0,Xg.jsx)(hE,{children:e.details.map((e,t)=>(0,Xg.jsxs)(pE,{children:[(0,Xg.jsx)(fE,{children:e.label}),(0,Xg.jsx)(mE,{children:e.description})]},t))}),e.deliverables&&(0,Xg.jsx)(bE,{children:e.deliverables.map((e,t)=>(0,Xg.jsx)("li",{children:e},t))})]})]},e.id))}),xE=Gb.section`
  background: rgba(212, 175, 55, 0.06);
  border: 2px solid rgba(212, 175, 55, 0.25);
  border-radius: 15px;
  padding: clamp(50px, 8vw, 80px) clamp(30px, 6vw, 60px);
  margin-bottom: clamp(80px, 12vw, 120px);
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,kE=Gb.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${Jb.goldMain};
  margin: 0 0 10px 0;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`,zE=Gb.p`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`,SE=Gb.p`
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin: 0 0 clamp(40px, 6vw, 60px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`,EE=Gb.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 6vw, 60px);
`,jE=Gb.div`
  padding: clamp(30px, 4vw, 40px);
  background: rgba(
    255,
    255,
    255,
    ${e=>e.highlight?"0.06":"0.02"}
  );
  border: 1px solid
    rgba(212, 175, 55, ${e=>e.highlight?"0.3":"0.15"});
  border-left: 4px solid ${Jb.goldMain};
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(
      255,
      255,
      255,
      ${e=>e.highlight?"0.08":"0.04"}
    );
    border-color: rgba(
      212,
      175,
      55,
      ${e=>e.highlight?"0.4":"0.25"}
    );
  }
`,_E=Gb.div`
  display: flex;
  align-items: center;
  gap: clamp(15px, 2vw, 25px);
  margin-bottom: clamp(20px, 3vw, 30px);
`,TE=Gb.span`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Jb.goldMain};
`,CE=Gb.h3`
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  color: ${Jb.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,IE=Gb.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`,AE=Gb.div`
  padding: clamp(15px, 2.5vw, 20px);
  background: rgba(212, 175, 55, 0.04);
  border-radius: 8px;
  border-left: 2px solid rgba(212, 175, 55, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.08);
    border-left-color: ${Jb.goldMain};
  }
`,PE=Gb.h4`
  color: ${Jb.goldMain};
  margin: 0 0 clamp(10px, 1.5vw, 15px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
`,RE=Gb.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: clamp(8px, 1vw, 12px);
    padding-left: 25px;
    position: relative;
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    line-height: 1.6;

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: ${Jb.goldMain};
      font-weight: 700;
      font-size: 1.1em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`,NE=()=>(0,Xg.jsxs)(xE,{children:[(0,Xg.jsx)(kE,{children:rE.materials.title}),(0,Xg.jsx)(zE,{children:rE.materials.subtitle}),(0,Xg.jsx)(SE,{children:rE.materials.intro}),(0,Xg.jsx)(EE,{children:rE.materials.sections.map((e,t)=>(0,Xg.jsxs)(jE,{highlight:e.highlight,children:[(0,Xg.jsxs)(_E,{children:[(0,Xg.jsx)(TE,{children:e.icon}),(0,Xg.jsx)(CE,{children:e.title})]}),(0,Xg.jsx)(IE,{children:e.items.map((e,t)=>(0,Xg.jsxs)(AE,{children:[(0,Xg.jsx)(PE,{children:e.label}),(0,Xg.jsx)(RE,{children:e.points.map((e,t)=>(0,Xg.jsx)("li",{children:e},t))})]},t))})]},t))})]}),DE=Gb.section`
  background: rgba(212, 175, 55, 0.08);
  border: 2px solid rgba(212, 175, 55, 0.3);
  border-radius: 15px;
  padding: clamp(50px, 8vw, 80px) clamp(30px, 6vw, 60px);
  margin-bottom: clamp(60px, 10vw, 100px);
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,OE=Gb.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${Jb.goldMain};
  margin: 0 0 10px 0;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`,LE=Gb.p`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`,ME=Gb.p`
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin: 0 0 clamp(40px, 6vw, 60px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,$E=Gb.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(30px, 4vw, 50px);
`,FE=Gb.div`
  text-align: center;
  padding: clamp(30px, 4vw, 40px);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(212, 175, 55, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.1);
    border-color: rgba(212, 175, 55, 0.5);
    transform: translateY(-5px);
  }
`,UE=Gb.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${Jb.goldMain};
  margin-bottom: clamp(15px, 2vw, 25px);
`,VE=Gb.h3`
  color: ${Jb.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,BE=Gb.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  line-height: 1.7;
`,HE=()=>(0,Xg.jsxs)(DE,{children:[(0,Xg.jsx)(OE,{children:rE.guarantee.title}),(0,Xg.jsx)(LE,{children:rE.guarantee.subtitle}),(0,Xg.jsx)(ME,{children:rE.guarantee.description}),(0,Xg.jsx)($E,{children:rE.guarantee.benefits.map((e,t)=>(0,Xg.jsxs)(FE,{children:[(0,Xg.jsx)(UE,{children:e.icon}),(0,Xg.jsx)(VE,{children:e.title}),(0,Xg.jsx)(BE,{children:e.description})]},t))})]}),WE=Gb.div`
  display: flex;
  justify-content: center;
  gap: clamp(20px, 4vw, 40px);
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 821px) {
    flex-direction: column;
    align-items: center;

    button {
      width: 100%;
      max-width: 300px;
    }
  }
`,KE=Gb.button`
  padding: clamp(14px, 2.5vw, 18px) clamp(35px, 5vw, 60px);
  border: none;
  border-radius: 50px;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
`,GE=Gb(KE)`
  background: linear-gradient(
    135deg,
    ${Jb.goldMain} 0%,
    #f1d592 100%
  );
  color: ${Jb.deepBlack};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`,qE=(Gb(KE)`
  background: transparent;
  color: ${Jb.goldMain};
  border: 2px solid ${Jb.goldMain};

  &:hover {
    background: rgba(212, 175, 55, 0.1);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
  }

  &:active {
    opacity: 0.8;
  }
`,()=>{const e=pe();return(0,Xg.jsx)(WE,{children:(0,Xg.jsx)(GE,{onClick:()=>e("/"),children:rE.cta.primary})})}),QE=()=>(0,Xg.jsx)(XS,{children:(0,Xg.jsxs)(ZS,{children:[(0,Xg.jsx)(iE,{}),(0,Xg.jsx)(vE,{}),(0,Xg.jsx)(NE,{}),(0,Xg.jsx)(HE,{}),(0,Xg.jsx)(qE,{})]})}),YE=Gb.section`
  position: relative;
  z-index: 5;
  width: 100%;
  box-sizing: border-box;
`,JE=Gb.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);

  @media (max-width: ${Yb.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`,XE=Gb.div`
  text-align: center;
  margin-bottom: clamp(30px, 5vw, 50px);
  animation: fadeInDown 0.8s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,ZE=Gb.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${Jb.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,ej=Gb.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${Yb.tablet}px) {
    display: none;
  }
`,tj=(Gb.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
  max-width: 1200px;
  margin: 0 auto;
`,Gb.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: clamp(15px, 2vw, 25px);
  width: 100%;
  justify-items: stretch;
  padding: 0;
  box-sizing: border-box;
  animation: fadeInUp 0.8s ease-out;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${Yb.smallPhone-1}px) {
    grid-template-columns: 1fr;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`),nj=Gb.a`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
`,rj=Gb.div`
  background: linear-gradient(
    135deg,
    rgba(46, 8, 16, 0.8) 0%,
    rgba(75, 16, 32, 0.6) 100%
  );
  border: 2px solid rgba(212, 175, 55, 0.15);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  animation: fadeInUp 0.8s ease-out both;
  user-select: none;
  position: relative;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(212, 175, 55, 0.1);

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${Jb.goldMain},
      transparent
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
  &:nth-child(6) {
    animation-delay: 0.6s;
  }

  &:hover {
    border-color: ${Jb.goldMain};
    background: linear-gradient(
      135deg,
      rgba(46, 8, 16, 0.95) 0%,
      rgba(75, 16, 32, 0.8) 100%
    );
    transform: translateY(-12px);
    box-shadow:
      0 30px 60px rgba(212, 175, 55, 0.3),
      inset 0 1px 0 rgba(212, 175, 55, 0.2);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-6px);
  }
`,ij=Gb.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${rj}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`,aj=Gb.div`
  padding: clamp(12px, 2.5vw, 18px);
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
`,oj=Gb.h3`
  font-size: clamp(0.95rem, 1.8vw, 1.15rem);
  color: ${Jb.goldMain};
  margin: 0 0 clamp(6px, 1.2vw, 10px) 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`,sj=Gb.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  line-height: 1.5;
  margin: 0 0 auto 0;
  flex: 1;
  font-weight: 300;
`,lj=Gb.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: clamp(10px, 1.5vw, 15px);
  padding-top: clamp(10px, 1.5vw, 15px);
  border-top: 1px solid rgba(212, 175, 55, 0.25);
  gap: clamp(10px, 1.5vw, 15px);

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`,cj=Gb.span`
  font-size: clamp(1rem, 1.8vw, 1.3rem);
  color: ${Jb.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
`,uj=Gb.button`
  padding: clamp(6px, 1.2vw, 10px) clamp(15px, 2.5vw, 25px);
  background: linear-gradient(
    135deg,
    ${Jb.goldMain} 0%,
    #f1d592 100%
  );
  color: ${Jb.deepBlack};
  border: none;
  border-radius: 30px;
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
  display: inline-block;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transition: left 0.4s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`,dj=Gb.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(4px, 1vw, 8px);
`,hj=Gb.div`
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2vw, 18px);
  width: 100%;
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,pj=Gb.a`
  display: flex;
  gap: clamp(12px, 3vw, 20px);
  padding: clamp(12px, 2.5vw, 18px);
  background: linear-gradient(
    135deg,
    rgba(46, 8, 16, 0.8) 0%,
    rgba(75, 16, 32, 0.6) 100%
  );
  border: 2px solid rgba(212, 175, 55, 0.15);
  border-radius: 15px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  position: relative;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(212, 175, 55, 0.1);
  animation: fadeInUp 0.8s ease-out both;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
  &:nth-child(6) {
    animation-delay: 0.6s;
  }

  &:hover {
    border-color: ${Jb.goldMain};
    background: linear-gradient(
      135deg,
      rgba(46, 8, 16, 0.95) 0%,
      rgba(75, 16, 32, 0.8) 100%
    );
    transform: translateY(-6px);
    box-shadow:
      0 30px 60px rgba(212, 175, 55, 0.3),
      inset 0 1px 0 rgba(212, 175, 55, 0.2);
  }

  &:active {
    transform: translateY(-3px);
  }
`,fj=Gb.img`
  width: clamp(80px, 20vw, 120px);
  height: clamp(80px, 20vw, 120px);
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${pj}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`,mj=Gb.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: clamp(8px, 1.5vw, 12px);
  min-width: 0;
`,gj=Gb.h3`
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: ${Jb.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`,yj=Gb.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  line-height: 1.5;
  margin: 0;
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,wj=Gb.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(10px, 2vw, 15px);
  padding-top: clamp(8px, 1.5vw, 12px);
  border-top: 1px solid rgba(212, 175, 55, 0.25);
`,bj=Gb.span`
  font-size: clamp(0.95rem, 1.8vw, 1.15rem);
  color: ${Jb.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
`,vj=Gb.button`
  padding: clamp(6px, 1.2vw, 10px) clamp(15px, 2.5vw, 25px);
  background: linear-gradient(
    135deg,
    ${Jb.goldMain} 0%,
    #f1d592 100%
  );
  color: ${Jb.deepBlack};
  border: none;
  border-radius: 30px;
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
  display: inline-block;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transition: left 0.4s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`,xj=[{id:1,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:2,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:3,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:4,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:5,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:6,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:7,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:8,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:9,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:10,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:11,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:12,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:13,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:14,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:15,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:16,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:17,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:18,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:19,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:20,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:21,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:22,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:23,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:24,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:25,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:26,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:27,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:28,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:29,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:30,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]}],kj="Nasze Projekty",zj="Odkryj gotowe szablony stron,kt\xf3re mog\u0105 transformowa\u0107 Twoj\u0105 mark\u0119",Sj="\u2190 Wr\xf3\u0107 do ofert",Ej="Preview szablonu",jj="O szablonie",_j="Szablon zawiera:",Tj=Gb.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(8px, 2vw, 16px);
  margin-top: clamp(30px, 5vw, 50px);
  padding: clamp(20px, 3vw, 35px);
  background: linear-gradient(
    135deg,
    rgba(46, 8, 16, 0.3) 0%,
    rgba(75, 16, 32, 0.2) 100%
  );
  border: 1px solid rgba(212, 175, 55, 0.15);
  border-radius: 15px;
  flex-wrap: wrap;
`,Cj=Gb.button`
  flex-shrink: 0;
  width: clamp(35px, 4vw, 48px);
  height: clamp(35px, 4vw, 48px);
  border-radius: 8px;
  background: ${e=>e.active?`linear-gradient(135deg, ${Jb.goldMain} 0%, #f1d592 100%)`:"rgba(46, 8, 16, 0.6)"};
  color: ${e=>e.active?Jb.deepBlack:Jb.goldMain};
  border: 2px solid
    ${e=>e.active?Jb.goldMain:"rgba(212, 175, 55, 0.4)"};
  font-size: clamp(0.8rem, 1.5vw, 0.95rem);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${e=>e.active?"0 6px 20px rgba(212, 175, 55, 0.3)":"0 4px 12px rgba(0, 0, 0, 0.2)"};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
    border-color: ${Jb.goldMain};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: rgba(46, 8, 16, 0.4);
  }
`,Ij=Gb.input`
  width: clamp(50px, 8vw, 70px);
  height: clamp(35px, 4vw, 48px);
  border: 2px solid rgba(212, 175, 55, 0.4);
  border-radius: 8px;
  background: rgba(46, 8, 16, 0.6);
  color: ${Jb.goldMain};
  text-align: center;
  font-size: clamp(0.65rem, 1rem, 0.8rem);
  font-weight: 600;
  padding: clamp(6px, 1vw, 10px);
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${Jb.goldMain};
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    background: rgba(46, 8, 16, 0.8);
  }

  &::placeholder {
    color: rgba(212, 175, 55, 0.5);
  }

  /* Style for number input - remove spinners */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }
`,Aj=Gb.span`
  font-size: clamp(0.8rem, 1.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  white-space: nowrap;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,Pj=Gb.div`
  width: 1px;
  height: clamp(20px, 2vw, 30px);
  background: rgba(212, 175, 55, 0.2);
`,Rj=e=>{let{currentPage:t,totalPages:n,onPageChange:i}=e;const[a,o]=(0,r.useState)(""),s=e=>{const t=e.target.value.trim();if(""===t)return void o("");const r=parseInt(t,10);!isNaN(r)&&r>=1&&r<=n?(i(r),o("")):r>n?(i(n),o("")):r<1&&(i(1),o(""))};return(0,Xg.jsxs)(Tj,{children:[(0,Xg.jsx)(Cj,{onClick:()=>{i(1)},disabled:1===t,"aria-label":"Pierwsza strona",title:"Pierwsza strona",children:(0,Xg.jsx)(Fv,{})}),(0,Xg.jsx)(Cj,{onClick:()=>{t>1&&i(t-1)},disabled:1===t,"aria-label":"Poprzednia strona",title:"Poprzednia strona",children:(0,Xg.jsx)(Gv,{})}),(0,Xg.jsx)(Pj,{}),(0,Xg.jsxs)(Aj,{children:[(0,Xg.jsx)("span",{children:t}),(0,Xg.jsx)("span",{style:{margin:"0 4px"},children:"/"}),(0,Xg.jsx)("span",{children:n})]}),(0,Xg.jsx)(Ij,{type:"number",placeholder:"Id\u017a do",value:a,onChange:e=>o(e.target.value),onBlur:s,onKeyPress:e=>{"Enter"===e.key&&s(e)},min:"1",max:n,"aria-label":"Wpisz numer strony",title:"Wpisz numer strony i naci\u015bnij Enter"}),(0,Xg.jsx)(Pj,{}),(0,Xg.jsx)(Cj,{onClick:()=>{t<n&&i(t+1)},disabled:t===n,"aria-label":"Nast\u0119pna strona",title:"Nast\u0119pna strona",children:(0,Xg.jsx)(Kv,{})}),(0,Xg.jsx)(Cj,{onClick:()=>{i(n)},disabled:t===n,"aria-label":"Ostatnia strona",title:"Ostatnia strona",children:(0,Xg.jsx)($v,{})})]})},Nj=Gb.div`
  display: flex;
  gap: clamp(8px, 1.5vw, 12px);
  margin-bottom: 0;
  justify-content: flex-end;
  padding-right: clamp(10px, 2vw, 30px);

  @media (min-width: 821px) {
    display: none;
  }
`,Dj=Gb.button`
  width: clamp(40px, 8vw, 50px);
  height: clamp(40px, 8vw, 50px);
  border-radius: 10px;
  border: 2px solid
    ${e=>e.active?Jb.goldMain:"rgba(212, 175, 55, 0.3)"};
  background: ${e=>e.active?`linear-gradient(135deg, ${Jb.goldMain} 0%, #f1d592 100%)`:"rgba(46, 8, 16, 0.5)"};
  color: ${e=>e.active?Jb.deepBlack:Jb.goldMain};
  font-size: clamp(1rem, 2vw, 1.3rem);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${Jb.goldMain};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`,Oj=e=>{let{viewMode:t,onViewModeChange:n}=e;return(0,Xg.jsxs)(Nj,{children:[(0,Xg.jsx)(Dj,{onClick:()=>n("grid"),active:"grid"===t,"aria-label":"Widok kafelk\xf3w",title:"Widok kafelk\xf3w",children:(0,Xg.jsx)(Mv,{})}),(0,Xg.jsx)(Dj,{onClick:()=>n("list"),active:"list"===t,"aria-label":"Widok listy",title:"Widok listy",children:(0,Xg.jsx)(Vv,{})})]})},Lj=()=>{const[e,t]=(0,r.useState)(1),[n,i]=(0,r.useState)(12),[a,o]=(0,r.useState)(()=>{if("undefined"!==typeof window){return localStorage.getItem("offerViewMode")||"grid"}return"grid"}),[s,l]=(0,r.useState)(!1);(0,r.useEffect)(()=>{localStorage.setItem("offerViewMode",a)},[a]),(0,r.useEffect)(()=>{const e=()=>{const e=window.innerWidth<820;l(e),i(e?6:12)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.useEffect)(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]);const c=Math.ceil(xj.length/n),u=(e-1)*n,d=u+n,h=xj.slice(u,d);return(0,Xg.jsxs)(dj,{children:[(0,Xg.jsx)(Oj,{viewMode:a,onViewModeChange:o}),"grid"===a?(0,Xg.jsx)(tj,{children:h.map(e=>(0,Xg.jsx)(nj,{href:`/offer/${e.id}`,target:s?void 0:"_blank",rel:s?void 0:"noopener noreferrer",children:(0,Xg.jsxs)(rj,{children:[(0,Xg.jsx)(ij,{src:e.image,alt:e.title}),(0,Xg.jsxs)(aj,{children:[(0,Xg.jsx)(oj,{children:e.title}),(0,Xg.jsx)(sj,{children:e.shortDescription}),(0,Xg.jsxs)(lj,{children:[(0,Xg.jsx)(cj,{children:e.price}),(0,Xg.jsx)(uj,{children:"Szczeg\xf3\u0142y"})]})]})]})},e.id))}):(0,Xg.jsx)(hj,{children:h.map(e=>(0,Xg.jsxs)(pj,{href:`/offer/${e.id}`,target:s?void 0:"_blank",rel:s?void 0:"noopener noreferrer",children:[(0,Xg.jsx)(fj,{src:e.image,alt:e.title}),(0,Xg.jsxs)(mj,{children:[(0,Xg.jsx)(gj,{children:e.title}),(0,Xg.jsx)(yj,{children:e.shortDescription}),(0,Xg.jsxs)(wj,{children:[(0,Xg.jsx)(bj,{children:e.price}),(0,Xg.jsx)(vj,{children:"Szczeg\xf3\u0142y"})]})]})]},e.id))}),(0,Xg.jsx)(Rj,{currentPage:e,totalPages:c,onPageChange:e=>{t(e)}})]})},Mj=Gb.div`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(60px, 10vw, 100px) clamp(20px, 5vw, 60px);
  max-width: 1100px;
  margin: 0 auto;
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 821px) {
    padding: clamp(40px, 8vw, 60px) clamp(15px, 3vw, 30px);
  }
`,$j=Gb.button`
  background: transparent;
  border: 2px solid ${Jb.goldMain};
  color: ${Jb.goldMain};
  padding: clamp(12px, 2.5vw, 16px) clamp(24px, 4vw, 36px);
  border-radius: 30px;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  margin-bottom: clamp(30px, 5vw, 50px);
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(212, 175, 55, 0.15);
    transition: left 0.4s ease;
  }

  &:hover {
    background: rgba(212, 175, 55, 0.08);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
    transform: translateX(-4px);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateX(-2px);
  }
`,Fj=Gb.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 7vw, 70px);
`,Uj=(Gb.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(30px, 5vw, 50px);
  animation: fadeInUp 0.6s ease-out 0.2s both;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: clamp(30px, 5vw, 50px);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Gb.div`
  text-align: center;
  padding: clamp(40px, 8vw, 80px);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${Jb.goldMain};
`),Vj=Gb.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(50px, 10vw, 80px);
  align-items: center;
  margin-bottom: clamp(80px, 12vw, 120px);
  animation: slideUp 0.6s ease-out;
  padding-bottom: clamp(40px, 6vw, 60px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 821px) {
    grid-template-columns: 1fr;
    gap: clamp(35px, 6vw, 50px);
  }
`,Bj=Gb.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
  padding: clamp(30px, 5vw, 50px);
  border: 2px solid rgba(212, 175, 55, 0.3);
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  word-wrap: break-word;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${Jb.goldMain} 50%,
      transparent 100%
    );
  }

  @media (max-width: 821px) {
    gap: clamp(12px, 2vw, 20px);
    padding: clamp(15px, 3vw, 25px);
    align-items: center;
    text-align: center;
    border: 1px solid rgba(212, 175, 55, 0.2);
    background: linear-gradient(
      135deg,
      rgba(212, 175, 55, 0.02) 0%,
      transparent 100%
    );
  }
`,Hj=Gb.h1`
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: ${Jb.goldMain};
  margin: clamp(10px, 1.5vw, 15px) 0 clamp(12px, 2vw, 20px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.3;
  text-transform: uppercase;
  font-style: normal;
  word-spacing: 3px;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 821px) {
    font-size: clamp(1.3rem, 3.5vw, 1.5rem);
    margin: clamp(5px, 1vw, 10px) 0 clamp(8px, 1.5vw, 12px) 0;
    letter-spacing: 0.7px;
    word-spacing: 2px;
  }
`,Wj=Gb.p`
  font-size: clamp(0.9rem, 1.6vw, 1.1rem);
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 clamp(20px, 3vw, 35px) 0;
  line-height: 1.65;
  font-weight: 300;
  letter-spacing: 0.3px;
  position: relative;
  padding-bottom: clamp(15px, 2vw, 25px);
  word-wrap: break-word;
  overflow-wrap: break-word;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: clamp(20px, 3.5vw, 45px);
    height: 1px;
    background: ${Jb.goldMain};
    opacity: 0.5;
  }

  @media (max-width: 821px) {
    font-size: clamp(0.75rem, 1.3vw, 0.9rem);
    margin: 0 0 clamp(12px, 2vw, 18px) 0;
    line-height: 1.5;
    padding-bottom: clamp(10px, 1.5vw, 15px);

    &::after {
      width: clamp(15px, 2.5vw, 30px);
    }
  }
`,Kj=Gb.div`
  display: inline-flex;
  align-items: center;
  gap: clamp(14px, 2.5vw, 22px);
  width: fit-content;
  margin-top: clamp(8px, 1.5vw, 12px);
  padding: clamp(12px, 1.5vw, 18px) clamp(18px, 2.5vw, 28px);
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: 50px;
  cursor: default;

  &::before {
    content: "";
    width: 1px;
    height: clamp(25px, 4vw, 35px);
    background: linear-gradient(
      180deg,
      ${Jb.goldMain} 0%,
      rgba(212, 175, 55, 0.2) 100%
    );
  }

  @media (max-width: 821px) {
    gap: clamp(10px, 1.5vw, 15px);
    margin-top: clamp(6px, 1vw, 10px);
    padding: clamp(10px, 1vw, 14px) clamp(14px, 1.5vw, 20px);

    &::before {
      height: clamp(20px, 3vw, 28px);
    }
  }
`,Gj=Gb.span`
  font-size: clamp(1.3rem, 2.8vw, 2rem);
  font-weight: 700;
  color: ${Jb.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 821px) {
    font-size: clamp(0.95rem, 2vw, 1.3rem);
    letter-spacing: 0.6px;
  }
`,qj=(Gb.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: 25px;
  border: 2px solid rgba(212, 175, 55, 0.25);
  animation: slideInRight 0.6s ease-out;
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(212, 175, 55, 0.15);
  transition: all 0.4s ease;

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &:hover {
    box-shadow:
      0 40px 80px rgba(0, 0, 0, 0.6),
      0 0 50px rgba(212, 175, 55, 0.25);
    transform: translateY(-5px);
  }

  @media (max-width: 821px) {
    max-height: 350px;
  }
`,Gb.div`
  animation: fadeInUp 0.6s ease-out 0.35s both;
  position: relative;
  perspective: 1200px;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 821px) {
    perspective: 800px;
  }
`),Qj=Gb.div`
  position: relative;
  display: block;
  margin: 0 auto clamp(30px, 5vw, 50px) auto;
  width: fit-content;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
`,Yj=Gb.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0.4;
  z-index: 100;
  border-radius: 12px;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`,Jj=Gb.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  text-shadow:
    -2px -2px 0 rgba(0, 0, 0, 0.8),
    2px -2px 0 rgba(0, 0, 0, 0.8),
    -2px 2px 0 rgba(0, 0, 0, 0.8),
    2px 2px 0 rgba(0, 0, 0, 0.8),
    -2px 0 0 rgba(0, 0, 0, 0.8),
    2px 0 0 rgba(0, 0, 0, 0.8),
    0 -2px 0 rgba(0, 0, 0, 0.8),
    0 2px 0 rgba(0, 0, 0, 0.8);
  letter-spacing: 1.5px;

  @media (max-width: 821px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }
`,Xj=Gb.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: rgba(212, 175, 55, 0.9);
  border: 2px solid ${Jb.goldMain};
  color: #000;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    background: ${Jb.goldMain};
    transform: scale(1.1);
  }

  @media (max-width: 821px) {
    width: 35px;
    height: 35px;
    bottom: 12px;
    right: 12px;
    font-size: 1rem;
  }
`,Zj=Gb.img`
  max-width: 100%;
  max-height: 500px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  transition: all 0.4s ease;
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.5),
    0 0 50px rgba(212, 175, 55, 0.2),
    inset 0 0 20px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  cursor: pointer;
  display: block;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;

  @media (max-width: 821px) {
    max-height: 280px;
    border-radius: 10px;
    margin-bottom: clamp(18px, 3vw, 25px);
    box-shadow:
      0 20px 45px rgba(0, 0, 0, 0.5),
      0 0 35px rgba(212, 175, 55, 0.15),
      inset 0 0 15px rgba(0, 0, 0, 0.25),
      inset 0 1px 0 rgba(212, 175, 55, 0.1);

    &:hover {
      transform: translateY(-3px);
      box-shadow:
        0 25px 55px rgba(0, 0, 0, 0.6),
        0 0 45px rgba(212, 175, 55, 0.25),
        inset 0 0 20px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(212, 175, 55, 0.15);
    }
  }
`,e_=Gb.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: clamp(15px, 2vw, 20px);
  margin-bottom: clamp(15px, 2vw, 20px);
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;

  @media (max-width: 821px) {
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: clamp(8px, 1.5vw, 12px);
    margin-bottom: clamp(10px, 1.5vw, 14px);
    padding: clamp(10px, 2vw, 15px);
    background: rgba(212, 175, 55, 0.03);
    border-radius: 12px;
    border: 1px solid rgba(212, 175, 55, 0.1);
  }
`,t_=Gb.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid
    ${e=>e.isActive?Jb.goldMain:"rgba(212, 175, 55, 0.2)"};
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${e=>e.isActive?1:.6};
  box-shadow: ${e=>e.isActive?"0 8px 20px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.2)":"0 4px 12px rgba(0, 0, 0, 0.2)"};
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;

  &:hover {
    border-color: ${Jb.goldMain};
    opacity: 1;
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
  }

  @media (max-width: 821px) {
    height: 55px;
    border-radius: 8px;
    border: 2px solid
      ${e=>e.isActive?Jb.goldMain:"rgba(212, 175, 55, 0.2)"};
    box-shadow: ${e=>e.isActive?"0 6px 16px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(212, 175, 55, 0.2)":"0 3px 10px rgba(0, 0, 0, 0.25), inset 0 0.5px 0 rgba(212, 175, 55, 0.05)"};

    &:hover {
      transform: scale(1.08) translateY(-2px);
      box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
    }
  }
`,n_=Gb.span`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: ${Jb.goldMain};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.3);
`,r_=Gb.div`
  position: fixed;
  top: 75px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  animation: fadeIn 0.3s ease;
  padding-top: 0;
  padding-bottom: 20px;
  overflow-y: auto;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,i_=Gb.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: zoomIn 0.3s ease;
  margin-top: 20px;

  @keyframes zoomIn {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`,a_=Gb.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 15px;
  position: relative;
  z-index: 1;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
`,o_=Gb.span`
  position: fixed;
  top: 120px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: ${Jb.goldMain};
  padding: 10px 18px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.5);
  z-index: 999999;
`,s_=Gb.button`
  position: absolute;
  top: 50%;
  ${e=>e.left?"left: 20px;":"right: 20px;"}
  transform: translateY(-50%);
  background: rgba(212, 175, 55, 0.2);
  border: 2px solid ${Jb.goldMain};
  color: ${Jb.goldMain};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;

  &:hover {
    background: rgba(212, 175, 55, 0.4);
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`,l_=Gb.button`
  position: fixed;
  top: 120px;
  right: 20px;
  background: rgba(212, 175, 55, 0.2);
  border: 2px solid ${Jb.goldMain};
  color: ${Jb.goldMain};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;

  &:hover {
    background: rgba(212, 175, 55, 0.4);
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
  }

  &:active {
    transform: scale(0.9);
  }
`,c_=e=>{let{images:t,title:n}=e;const[i,a]=(0,r.useState)(0),[o,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!o)return;const e=e=>{"ArrowLeft"===e.key?a(e=>(e-1+t.length)%t.length):"ArrowRight"===e.key?a(e=>(e+1)%t.length):"Escape"===e.key&&s(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o,t.length]),t&&0!==t.length?(0,Xg.jsxs)(Xg.Fragment,{children:[(0,Xg.jsxs)(qj,{children:[(0,Xg.jsxs)(Qj,{onContextMenu:e=>e.preventDefault(),onTouchStart:e=>{e.touches.length>1&&e.preventDefault()},children:[(0,Xg.jsx)(Zj,{src:t[i],alt:`${n} - zdj\u0119cie ${i+1}`,onClick:()=>s(!0),onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault(),style:{cursor:"pointer",userSelect:"none"}}),(0,Xg.jsx)(Yj,{children:(0,Xg.jsx)(Jj,{children:"www.studioklara.pl"})}),(0,Xg.jsx)(Xj,{onClick:()=>s(!0),children:"\u26f6"})]}),(0,Xg.jsx)(e_,{children:t.map((e,t)=>(0,Xg.jsx)(t_,{src:e,alt:`Miniatura ${t+1}`,isActive:i===t,onClick:()=>a(t),onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault()},t))}),(0,Xg.jsxs)(n_,{children:[i+1," / ",t.length]})]}),o&&(0,Xg.jsxs)(r_,{onClick:()=>s(!1),children:[(0,Xg.jsxs)(i_,{onClick:e=>e.stopPropagation(),children:[(0,Xg.jsxs)(Qj,{style:{margin:0,width:"100%",height:"100%",maxHeight:"none"},children:[(0,Xg.jsx)(a_,{src:t[i],alt:`${n} - ${i+1}`,onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault()}),(0,Xg.jsx)(Yj,{style:{opacity:.35},children:(0,Xg.jsx)(Jj,{children:"www.studioklara.pl"})})]}),(0,Xg.jsxs)(o_,{children:[i+1," / ",t.length]}),(0,Xg.jsx)(s_,{left:!0,onClick:()=>a(e=>(e-1+t.length)%t.length),children:"\u2039"}),(0,Xg.jsx)(s_,{onClick:()=>a(e=>(e+1)%t.length),children:"\u203a"})]}),(0,Xg.jsx)(l_,{onClick:()=>s(!1),children:"\u2715"})]})]}):null},u_=e=>{let{title:t,subtitle:n,price:r,images:i}=e;return(0,Xg.jsxs)(Vj,{children:[(0,Xg.jsxs)(Bj,{children:[(0,Xg.jsx)(Hj,{children:t}),(0,Xg.jsx)(Wj,{children:n}),r&&(0,Xg.jsx)(Kj,{children:(0,Xg.jsx)(Gj,{children:r})})]}),(0,Xg.jsx)(c_,{images:i,title:t})]})},d_=Gb.section`
  animation: fadeInUp 0.6s ease-out 0.2s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(30px, 4.5vw, 45px);
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.1);

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,h_=Gb.h2`
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  color: ${Jb.goldMain};
  margin: 0 0 clamp(20px, 3vw, 35px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-style: italic;
`,p_=(Gb.p`
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.9;
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.3px;
`,Gb.section`
  animation: fadeInUp 0.6s ease-out 0.3s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(20px, 3vw, 30px);
  border-radius: 15px;
  border: 1px solid rgba(212, 175, 55, 0.1);

  ${h_} {
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    margin: 0 0 clamp(15px, 2vw, 20px) 0;
  }
`),f_=Gb.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid rgba(212, 175, 55, 0.2);
  background: rgba(0, 0, 0, 0.3);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(212, 175, 55, 0.1);

  @media (max-width: 821px) {
    aspect-ratio: 16 / 9;
  }
`,m_=Gb.iframe`
  display: block;
  border-radius: 13px;
  width: 100%;
  height: 100%;
  border: none;
`,g_=e=>{let{title:t,youtubeUrl:n}=e;return(0,Xg.jsxs)(p_,{children:[(0,Xg.jsx)(h_,{children:t}),(0,Xg.jsx)(f_,{children:(0,Xg.jsx)(m_,{src:n,title:t,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})},y_=Gb.section`
  animation: fadeInUp 0.6s ease-out 0.4s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(30px, 4.5vw, 45px);
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.1);
`,w_=Gb.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(20px, 3vw, 30px);
`,b_=Gb.li`
  display: flex;
  align-items: flex-start;
  gap: clamp(15px, 3vw, 20px);
  padding: clamp(20px, 3vw, 28px);
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.08) 0%,
    rgba(212, 175, 55, 0.03) 100%
  );
  border-left: 4px solid ${Jb.goldMain};
  border-radius: 12px;
  transition: all 0.3s ease;
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(212, 175, 55, 0.1);

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(212, 175, 55, 0.12) 0%,
      rgba(212, 175, 55, 0.05) 100%
    );
    transform: translateX(10px);
    box-shadow:
      0 12px 30px rgba(212, 175, 55, 0.2),
      inset 0 1px 0 rgba(212, 175, 55, 0.15);
  }
`,v_=Gb.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: clamp(30px, 4vw, 40px);
  width: clamp(30px, 4vw, 40px);
  height: clamp(30px, 4vw, 40px);
  background: ${Jb.goldMain};
  color: ${Jb.deepBlack};
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.2em;
  flex-shrink: 0;
`,x_=Gb.span`
  flex: 1;
`,k_=e=>{let{title:t,features:n}=e;return(0,Xg.jsxs)(y_,{children:[(0,Xg.jsx)(h_,{children:t}),(0,Xg.jsx)(w_,{children:n.map((e,t)=>(0,Xg.jsxs)(b_,{children:[(0,Xg.jsx)(v_,{children:"\u2713"}),(0,Xg.jsx)(x_,{children:e})]},t))})]})},z_=Gb.section`
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.15) 0%,
    rgba(46, 8, 16, 0.6) 100%
  );
  border: 2px solid rgba(212, 175, 55, 0.25);
  border-radius: 25px;
  padding: clamp(35px, 7vw, 60px);
  text-align: center;
  animation: fadeInUp 0.6s ease-out 0.5s both;
  box-shadow:
    0 20px 60px rgba(212, 175, 55, 0.15),
    inset 0 1px 0 rgba(212, 175, 55, 0.15);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${Jb.goldMain},
      transparent
    );
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,S_=Gb.h3`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${Jb.goldMain};
  margin: 0 0 clamp(35px, 6vw, 50px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
  line-height: 1.3;
`,E_=Gb.div`
  display: flex;
  gap: clamp(15px, 3vw, 30px);
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,j_=Gb.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: clamp(14px, 3vw, 18px) clamp(35px, 6vw, 60px);
  background: linear-gradient(
    135deg,
    ${Jb.goldMain} 0%,
    #f1d592 100%
  );
  color: ${Jb.deepBlack};
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(212, 175, 55, 0.35);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.25);
    transition: left 0.4s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 18px 45px rgba(212, 175, 55, 0.5);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-2px);
  }
`,__=Gb(j_)`
  background: transparent;
  color: ${Jb.goldMain};
  border: 2px solid ${Jb.goldMain};
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.15);

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.3);
  }
`,T_=(Gb.div`
  text-align: center;
  padding: clamp(40px, 8vw, 80px);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${Jb.goldMain};
`,e=>{var t;let{title:n}=e;const r=null===(t=Qv.find(e=>"Allegro"===e.label))||void 0===t?void 0:t.url;return(0,Xg.jsxs)(z_,{children:[(0,Xg.jsx)(S_,{children:"Interesuje Ci\u0119 ten szablon?"}),(0,Xg.jsxs)(E_,{children:[(0,Xg.jsx)(j_,{href:`mailto:${yx}?subject=Zainteresowanie szablonk\u0105: ${n}`,children:"Napisz email"}),(0,Xg.jsx)(__,{href:r,target:"_blank",rel:"noopener noreferrer",children:"Zakup Allegro"})]})]})}),C_=e=>{let{offerId:t}=e;const n=pe(),r=xj.find(e=>e.id===t);return r?(0,Xg.jsxs)(Mj,{children:[(0,Xg.jsx)($j,{onClick:()=>n(-1),children:Sj}),(0,Xg.jsx)(u_,{title:r.title,subtitle:r.shortDescription,price:r.price,images:r.images}),(0,Xg.jsxs)(Fj,{children:[(0,Xg.jsx)(g_,{title:Ej,youtubeUrl:r.youtubeUrl}),(0,Xg.jsx)(d_,{title:jj,description:r.fullDescription}),(0,Xg.jsx)(k_,{title:_j,features:r.features}),(0,Xg.jsx)(T_,{title:r.title})]})]}):(0,Xg.jsx)(Mj,{children:(0,Xg.jsx)(Uj,{children:"Szablon nie znaleziony"})})},I_=()=>{const{id:e}=fe();return e?(0,Xg.jsx)(C_,{offerId:parseInt(e)}):(0,Xg.jsx)(YE,{children:(0,Xg.jsxs)(JE,{children:[(0,Xg.jsxs)(XE,{children:[(0,Xg.jsx)(ZE,{children:kj}),(0,Xg.jsx)(ej,{children:zj})]}),(0,Xg.jsx)(Lj,{})]})})},A_=Gb.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,P_=Gb.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);

  @media (max-width: ${Yb.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`,R_=Gb.div`
  text-align: center;
  margin-bottom: clamp(30px, 5vw, 50px);
  animation: fadeInDown 0.8s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,N_=Gb.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${Jb.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,D_=Gb.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${Yb.tablet}px) {
    display: none;
  }
`,O_=Gb.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(4px, 1vw, 8px);
  margin-top: clamp(20px, 3vw, 40px);
`,L_=Gb.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: clamp(10px, 1vw, 16px);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 821px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,M_=Gb.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
  min-height: 0;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-8px);
  }

  @media (max-width: ${Yb.tablet}px) {
    transition: none;

    &:hover {
      transform: none;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`,$_=Gb.img`
  width: 100%;
  height: 193px;
  object-fit: cover;
  display: block;
`,F_=Gb.div`
  padding: clamp(16px, 3.2vw, 24px);
  display: flex;
  flex-direction: column;
  flex: 1;
`,U_=Gb.span`
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 9px;
`,V_=Gb.h3`
  font-size: clamp(0.89rem, 1.6vw, 1.13rem);
  color: ${Jb.white};
  margin: 0 0 9px 0;
  font-weight: 600;
  line-height: 1.4;
  font-family: "Cormorant Garamond", serif;
`,B_=Gb.p`
  font-size: 0.77rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 13px;

  @media (max-width: ${Yb.tablet}px) {
    display: none;
  }
`,H_=Gb.span`
  font-size: 0.72rem;
  color: ${Jb.gold};
  font-weight: 600;
  letter-spacing: 0.8px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 7px;

  ${M_}:hover & {
    gap: 12px;
  }

  &::after {
    content: "→";
    transition: transform 0.3s ease;
  }

  ${M_}:hover &::after {
    transform: translateX(4px);
  }
`,W_=Gb.div`
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1vw, 12px);
  width: 100%;
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,K_=Gb.a`
  display: flex;
  gap: clamp(12px, 3vw, 20px);
  padding: clamp(12px, 2.5vw, 18px);
  background: linear-gradient(
    135deg,
    rgba(46, 8, 16, 0.8) 0%,
    rgba(75, 16, 32, 0.6) 100%
  );
  border: 2px solid rgba(212, 175, 55, 0.15);
  border-radius: 15px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  position: relative;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(212, 175, 55, 0.1);
  animation: fadeInUp 0.8s ease-out both;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  &:hover {
    border-color: rgba(212, 175, 55, 0.5);
    background: linear-gradient(
      135deg,
      rgba(46, 8, 16, 0.95) 0%,
      rgba(75, 16, 32, 0.8) 100%
    );
    transform: translateY(-6px);
    box-shadow:
      0 30px 60px rgba(212, 175, 55, 0.3),
      inset 0 1px 0 rgba(212, 175, 55, 0.2);
  }

  &:active {
    transform: translateY(-3px);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,G_=Gb.img`
  width: clamp(80px, 20vw, 120px);
  height: clamp(80px, 20vw, 120px);
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${K_}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`,q_=Gb.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: clamp(8px, 1.5vw, 12px);
  min-width: 0;
`,Q_=Gb.span`
  font-size: clamp(0.7rem, 1.2vw, 0.8rem);
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 0.7px;
  text-transform: uppercase;
`,Y_=Gb.h3`
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`,J_=Gb.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  line-height: 1.5;
  margin: 0 0 auto 0;
  flex: 1;
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,X_=Gb.span`
  font-size: clamp(0.65rem, 1rem, 0.8rem);
  color: ${Jb.gold};
  font-weight: 600;
  letter-spacing: 0.7px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;

  ${K_}:hover & {
    gap: 10px;
  }

  &::after {
    content: "→";
    transition: transform 0.3s ease;
  }

  ${K_}:hover &::after {
    transform: translateX(3px);
  }
`;const Z_=function(){const[e,t]=(0,r.useState)(1),[n,i]=(0,r.useState)(6),[a,o]=(0,r.useState)(()=>{if("undefined"!==typeof window){return localStorage.getItem("blogViewMode")||"grid"}return"grid"});(0,r.useEffect)(()=>{localStorage.setItem("blogViewMode",a)},[a]),(0,r.useEffect)(()=>{const e=()=>{const e=window.innerWidth<820;i(e?4:6)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.useEffect)(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]);const s=Math.ceil(lz.length/n),l=(e-1)*n,c=l+n,u=lz.slice(l,c);return(0,Xg.jsx)(A_,{children:(0,Xg.jsxs)(P_,{children:[(0,Xg.jsxs)(R_,{children:[(0,Xg.jsx)(N_,{children:"Aktualno\u015bci"}),(0,Xg.jsx)(D_,{children:"B\u0105d\u017a na bie\u017c\u0105co z najnowszymi wpisami z naszego bloga. Dzielimy si\u0119 wiedz\u0105 o technologii, designie i procesie tworzenia luksusowych do\u015bwiadcze\u0144 cyfrowych."})]}),(0,Xg.jsxs)(O_,{children:[(0,Xg.jsx)(Oj,{viewMode:a,onViewModeChange:o}),"grid"===a?(0,Xg.jsx)(L_,{children:u.map(e=>(0,Xg.jsx)(M_,{children:(0,Xg.jsxs)(wt,{to:`/blog/${e.id}`,children:[(0,Xg.jsx)($_,{src:e.image,alt:e.title}),(0,Xg.jsxs)(F_,{children:[(0,Xg.jsx)(U_,{children:e.date}),(0,Xg.jsx)(V_,{children:e.title}),(0,Xg.jsx)(B_,{children:e.excerpt}),(0,Xg.jsx)(H_,{children:"Czytaj wi\u0119cej"})]})]})},e.id))}):(0,Xg.jsx)(W_,{children:u.map(e=>(0,Xg.jsxs)(K_,{to:`/blog/${e.id}`,as:wt,children:[(0,Xg.jsx)(G_,{src:e.image,alt:e.title}),(0,Xg.jsxs)(q_,{children:[(0,Xg.jsx)(Q_,{children:e.date}),(0,Xg.jsx)(Y_,{children:e.title}),(0,Xg.jsx)(J_,{children:e.excerpt}),(0,Xg.jsx)(X_,{children:"Czytaj wi\u0119cej"})]})]},e.id))})]}),(0,Xg.jsx)(Rj,{currentPage:e,totalPages:s,onPageChange:e=>{t(e)}})]})})},eT=Gb.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,tT=Gb.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,nT=Gb.div`
  margin-bottom: clamp(40px, 8vw, 60px);
  animation: fadeInDown 0.8s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,rT=Gb.h1`
  font-size: clamp(2rem, 6vw, 3rem);
  font-family: "Cormorant Garamond", serif;
  color: ${Jb.white};
  margin: 0 0 20px 0;
  font-weight: 700;
  line-height: 1.3;
`,iT=Gb.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-weight: 500;
  letter-spacing: 1px;
`,aT=Gb.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: clamp(40px, 8vw, 60px);
  display: block;
`,oT=Gb.div`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  line-height: 1.8;
  letter-spacing: 0.3px;

  h2 {
    font-size: clamp(1.4rem, 3vw, 1.8rem);
    font-family: "Cormorant Garamond", serif;
    color: ${Jb.white};
    margin: clamp(40px, 6vw, 60px) 0 20px 0;
    font-weight: 600;
    line-height: 1.3;
  }

  h3 {
    font-size: clamp(1.1rem, 2.2vw, 1.4rem);
    color: ${Jb.white};
    margin: clamp(30px, 5vw, 40px) 0 16px 0;
    font-weight: 600;
  }

  p {
    margin: 0 0 20px 0;
    color: rgba(255, 255, 255, 0.8);
  }

  ul,
  ol {
    margin: 20px 0;
    padding-left: 24px;

    li {
      margin-bottom: 12px;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  strong {
    color: ${Jb.gold};
    font-weight: 600;
  }

  em {
    color: rgba(255, 255, 255, 0.9);
    font-style: italic;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 30px 0;
    border: 1px solid rgba(255, 255, 255, 0.1);

    th,
    td {
      padding: clamp(12px, 2vw, 16px);
      text-align: left;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    th {
      background: rgba(255, 255, 255, 0.05);
      color: ${Jb.gold};
      font-weight: 600;
    }

    tr:hover {
      background: rgba(255, 255, 255, 0.02);
    }
  }

  code {
    background: rgba(0, 0, 0, 0.3);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
    color: #a0ff60;
    font-family: "Courier New", monospace;
  }

  hr {
    border: none;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 40px 0;
  }

  a {
    color: ${Jb.gold};
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  blockquote {
    border-left: 4px solid ${Jb.gold};
    padding-left: 20px;
    margin: 30px 0;
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
  }
`,sT=Gb.div`
  margin-top: clamp(60px, 10vw, 100px);
  padding-top: clamp(40px, 6vw, 60px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,lT=Gb.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${Jb.gold};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &::before {
    content: "←";
    transition: transform 0.3s ease;
  }

  &:hover {
    gap: 12px;

    &::before {
      transform: translateX(-4px);
    }
  }
`;const cT=function(e){let{article:t,children:n}=e;return(0,Xg.jsx)(eT,{children:(0,Xg.jsxs)(tT,{children:[(0,Xg.jsxs)(nT,{children:[(0,Xg.jsx)(rT,{children:t.title}),(0,Xg.jsx)(iT,{children:t.date})]}),(0,Xg.jsx)(aT,{src:t.image,alt:t.title}),(0,Xg.jsx)(oT,{children:n}),(0,Xg.jsx)(sT,{children:(0,Xg.jsx)(wt,{to:"/blog",children:(0,Xg.jsx)(lT,{children:"Wr\xf3\u0107 do aktualno\u015bci"})})})]})})};const uT=function(){const e=lz.find(e=>"startujemy-z-aktualnosciami"===e.id);return(0,Xg.jsxs)(cT,{article:e,children:[(0,Xg.jsx)("h1",{children:"Startujemy z Aktualno\u015bciami \u2013 Sekcja tworzona z my\u015bl\u0105 o Was"}),(0,Xg.jsx)("p",{children:(0,Xg.jsx)("strong",{children:"30 stycznia 2026"})}),(0,Xg.jsx)("p",{children:"Kilka miesi\u0119cy temu zadali\u015bmy sobie kluczowe pytanie: \u201eCzego naprawd\u0119 chc\u0105 dowiedzie\u0107 si\u0119 nasi klienci?\u201d. Odpowied\u017a by\u0142a jednoznaczna \u2013 szukacie rzetelnej wiedzy o trendach w webdesignie, technologiach, kt\xf3rych u\u017cywamy, oraz wgl\u0105du w procesy, kt\xf3re stoj\u0105 za sukcesem Waszych marek."}),(0,Xg.jsx)("h2",{children:"Dlaczego zaczynamy w\u0142a\u015bnie teraz?"}),(0,Xg.jsx)("p",{children:"Studio Klara Queen od pocz\u0105tku stawia\u0142o na jako\u015b\u0107. Przez d\u0142ugi czas s\u0105dzili\u015bmy, \u017ce najlepiej przem\xf3wi za nas portfolio i opinie zadowolonych klient\xf3w. To prawda, ale w dzisiejszych czasach to tylko cz\u0119\u015b\u0107 historii."}),(0,Xg.jsxs)("p",{children:["W 2026 roku obecno\u015b\u0107 w sieci to co\u015b wi\u0119cej ni\u017c pi\u0119kna witryna."," ",(0,Xg.jsx)("strong",{children:"To nieustanny dialog"}),". To pokazywanie swojej ekspertyzy w praktyce, edukacja i autentyczne dzielenie si\u0119 wiedz\u0105 oraz procesem tw\xf3rczym."]}),(0,Xg.jsx)("p",{children:"Nasi klienci regularnie zadaj\u0105 nam pytania:"}),(0,Xg.jsxs)("ul",{children:[(0,Xg.jsx)("li",{children:"\u201eIle czasu realnie trwa stworzenie profesjonalnej strony?\u201d"}),(0,Xg.jsx)("li",{children:"\u201eDlaczego stawiacie na React, a nie na inne rozwi\u0105zania?\u201d"}),(0,Xg.jsx)("li",{children:"\u201eJak w praktyce dbacie o bezpiecze\u0144stwo moich danych?\u201d"}),(0,Xg.jsx)("li",{children:"\u201eCzy rzeczywi\u015bcie mo\u017cna stworzy\u0107 stron\u0119 premium w 48 godzin?\u201d"})]}),(0,Xg.jsx)("p",{children:"Zamiast odpowiada\u0107 ka\u017cdemu z osobna, postanowili\u015bmy stworzy\u0107 tutaj przestrze\u0144, kt\xf3ra stanie si\u0119 baz\u0105 wiedzy dla ka\u017cdego, kto ceni jako\u015b\u0107 w internecie."}),(0,Xg.jsx)("h2",{children:"Co znajdziesz w sekcji Aktualno\u015bci?"}),(0,Xg.jsx)("p",{children:"Ka\u017cdy artyku\u0142 b\u0119dzie oparty na rzeczywistych sytuacjach z \u017cycia naszego studia oraz wiedzy, kt\xf3r\u0105 gromadzili\u015bmy przez lata intensywnej pracy."}),(0,Xg.jsx)("p",{children:(0,Xg.jsx)("strong",{children:"B\u0119dziemy pisa\u0107 o:"})}),(0,Xg.jsxs)("ol",{children:[(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Case Studies"})," \u2013 analiza konkretnych projekt\xf3w, wyniki, wyzwania i rozwi\u0105zania, kt\xf3re przynios\u0142y realne efekty."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Technologia"})," \u2013 dlaczego wybieramy czysty kod zamiast gotowych system\xf3w CMS, jak optymalizujemy szybko\u015b\u0107 i gwarantujemy bezpiecze\u0144stwo."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Proces"})," \u2013 jak naprawd\u0119 pracujemy, ile trwa ka\u017cdy etap i co dzieje si\u0119 \u201eza kulisami\u201d Twojego projektu."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Nowo\u015bci i Trendy"})," \u2013 rola AI w designie, optymalizacja pod k\u0105tem Google oraz podej\u015bcie mobile-first w wersji premium."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Edukacja"})," \u2013 praktyczne poradniki dla przedsi\u0119biorc\xf3w, kt\xf3rzy chc\u0105 rozumie\u0107 swoj\u0105 stron\u0119 i \u015bwiadomie budowa\u0107 mark\u0119."]})]}),(0,Xg.jsx)("h2",{children:"Dla kogo tworzymy te tre\u015bci?"}),(0,Xg.jsx)("p",{children:(0,Xg.jsx)("strong",{children:"Dla lider\xf3w biznesu i marek premium:"})}),(0,Xg.jsxs)("ul",{children:[(0,Xg.jsx)("li",{children:"Chcesz wiedzie\u0107, dlaczego warto inwestowa\u0107 w jako\u015b\u0107 kodu, a nie w p\xf3\u0142\u015brodki."}),(0,Xg.jsx)("li",{children:"Zale\u017cy Ci na bezkompromisowej szybko\u015bci i bezpiecze\u0144stwie."}),(0,Xg.jsx)("li",{children:"Szukasz partnera, kt\xf3ry my\u015bli o Twoim biznesie strategicznie, a nie tylko dostarcza gotowy produkt."})]}),(0,Xg.jsx)("p",{children:(0,Xg.jsx)("strong",{children:"Dla pasjonat\xf3w designu i technologii:"})}),(0,Xg.jsxs)("ul",{children:[(0,Xg.jsx)("li",{children:"Chcesz \u015bledzi\u0107 nasze podej\u015bcie do nowoczesnej architektury aplikacji."}),(0,Xg.jsx)("li",{children:"Interesuje Ci\u0119, dlaczego stawiamy na modularno\u015b\u0107 komponent\xf3w i centralizacj\u0119 danych."}),(0,Xg.jsx)("li",{children:"Szukasz do\u015bwiadcze\u0144 prosto z linii produkcyjnej studia, gdzie liczy si\u0119 ka\u017cda milisekunda \u0142adowania."})]}),(0,Xg.jsx)("h2",{children:"Nasza obietnica"}),(0,Xg.jsx)("p",{children:"Stawiamy na jako\u015b\u0107, a nie na ilo\u015b\u0107. Nie obiecujemy artyku\u0142\xf3w codziennie \u2013 obiecujemy, \u017ce ka\u017cdy wpis b\u0119dzie rzetelnym materia\u0142em, pe\u0142nym autentycznej wiedzy, a nie pust\u0105 tre\u015bci\u0105 tworzon\u0105 pod algorytmy."}),(0,Xg.jsx)("h2",{children:"Dzi\u0119kujemy"}),(0,Xg.jsx)("p",{children:"Dzi\u0119kujemy Wam \u2013 naszym klientom. To Wasze pytania i sukcesy zainspirowa\u0142y nas do publicznego dzielenia si\u0119 wiedz\u0105."}),(0,Xg.jsx)("p",{children:"Zapraszamy do lektury kolejnych wpis\xf3w. \ud83c\udfaf"}),(0,Xg.jsx)("hr",{}),(0,Xg.jsxs)("p",{children:[(0,Xg.jsx)("strong",{children:"Studio Klara Queen"}),(0,Xg.jsx)("br",{}),"Projektujemy luksusowe do\u015bwiadczenia cyfrowe."]})]})};const dT=function(){const e=lz.find(e=>"czysty-kod-react"===e.id);return(0,Xg.jsxs)(cT,{article:e,children:[(0,Xg.jsx)("h1",{children:"Czysty kod czy gotowy szablon? Dlaczego stawiamy na technologi\u0119 jutra"}),(0,Xg.jsx)("p",{children:(0,Xg.jsx)("strong",{children:"20 marca 2026"})}),(0,Xg.jsx)("p",{children:"Wielu przedsi\u0119biorc\xf3w staje przed dylematem: wybra\u0107 popularne systemy oparte na gotowych szablonach (tzw. CMS), czy zainwestowa\u0107 w stron\u0119 pisan\u0105 od zera w czystym kodzie? Cho\u0107 gotowe rozwi\u0105zania kusz\u0105 nisk\u0105 cen\u0105 na start, ta pozorna oszcz\u0119dno\u015b\u0107 cz\u0119sto staje si\u0119 barier\u0105 dla rozwoju Twojej marki w sieci."}),(0,Xg.jsx)("h2",{children:"Pu\u0142apka \u201eci\u0119\u017ckich\u201d system\xf3w"}),(0,Xg.jsx)("p",{children:"Popularne platformy do zarz\u0105dzania tre\u015bci\u0105 zosta\u0142y zaprojektowane tak, by ka\u017cdy m\xf3g\u0142 z\u0142o\u017cy\u0107 z nich stron\u0119. Niestety, ta uniwersalno\u015b\u0107 ma swoj\u0105 cen\u0119. Aby system dzia\u0142a\u0142, musi \u0142adowa\u0107 setki skrypt\xf3w i funkcji, kt\xf3rych Twoja strona prawdopodobnie nigdy nie wykorzysta."}),(0,Xg.jsx)("p",{children:(0,Xg.jsx)("strong",{children:"Efekt?"})}),(0,Xg.jsx)("p",{children:"Strona oparta na gotowym szablonie jest jak samoch\xf3d z nadmiarem zb\u0119dnego baga\u017cu:"}),(0,Xg.jsxs)("ul",{children:[(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Traci dynamik\u0119:"})," \u0142aduje si\u0119 zauwa\u017calnie wolniej, co irytuje klient\xf3w."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Jest podatna na b\u0142\u0119dy:"})," ka\u017cda aktualizacja zewn\u0119trznych dodatk\xf3w mo\u017ce \u201erozsypa\u0107\u201d wygl\u0105d strony."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"M\u0119czy serwer:"})," generuje niepotrzebne zapytania, spowalniaj\u0105c dzia\u0142anie witryny na smartfonach."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Wymaga ci\u0105g\u0142ej opieki:"})," musisz stale dba\u0107 o poprawki bezpiecze\u0144stwa i \u0142ata\u0107 luki w popularnych wtyczkach."]})]}),(0,Xg.jsx)("p",{children:"W \u015bwiecie biznesu premium ka\u017cda sekunda oczekiwania na za\u0142adowanie strony to ryzyko, \u017ce klient przejdzie do konkurencji."}),(0,Xg.jsx)("h2",{children:"Szybko\u015b\u0107 to Twoja najwi\u0119ksza przewaga"}),(0,Xg.jsx)("p",{children:"Algorytmy wyszukiwarek (takie jak Core Web Vitals) faworyzuj\u0105 witryny, kt\xf3re szanuj\u0105 czas u\u017cytkownika. Gdy Twoja strona dzia\u0142a w u\u0142amku sekundy, klient odnosi wra\u017cenie profesjonalizmu jeszcze przed przeczytaniem pierwszego zdania."}),(0,Xg.jsxs)("p",{children:["W naszym studiu budujemy strony w technologii ",(0,Xg.jsx)("strong",{children:"React"}),", poniewa\u017c:"]}),(0,Xg.jsx)("h3",{children:"1. P\u0142ynno\u015b\u0107 \u2013 Do\u015bwiadczenie jak w aplikacji"}),(0,Xg.jsx)("p",{children:"W przeciwie\u0144stwie do tradycyjnych system\xf3w, React nie prze\u0142adowuje ca\u0142ego okna przy ka\u017cdym klikni\u0119ciu. Nawigacja jest natychmiastowa, p\u0142ynna i bez zb\u0119dnych \u201emrugni\u0119\u0107\u201d ekranu. To standard, do kt\xf3rego przyzwyczai\u0142y nas najlepsze aplikacje mobilne na \u015bwiecie."}),(0,Xg.jsx)("h3",{children:"2. Bezpiecze\u0144stwo \u2013 Twierdza bez tylnych drzwi"}),(0,Xg.jsx)("p",{children:"Popularne systemy s\u0105 celem masowych atak\xf3w, poniewa\u017c hakerzy znaj\u0105 ich s\u0142abe punkty i luki w og\xf3lnodost\u0119pnych wtyczkach. Buduj\u0105c kod od zera, tworzymy rozwi\u0105zanie unikalne. Nie ma \u201estandardowych\u201d dziur, kt\xf3re mo\u017cna \u0142atwo wykorzysta\u0107."}),(0,Xg.jsx)("h3",{children:"3. Skalowalno\u015b\u0107 \u2013 Projekt, kt\xf3ry ro\u015bnie z Tob\u0105"}),(0,Xg.jsx)("p",{children:"Gotowe szablony cz\u0119sto staj\u0105 si\u0119 \u201eciasne\u201d, gdy chcesz doda\u0107 nowe, niestandardowe funkcje. Czysty kod React to pe\u0142na swoboda. To ta sama technologia, kt\xf3ra nap\u0119dza najwi\u0119ksze serwisy spo\u0142eczno\u015bciowe \u2013 jest gotowa na ka\u017cdy poziom Twojego sukcesu."}),(0,Xg.jsx)("h3",{children:"4. Unikalny Design \u2013 Zero kompromis\xf3w"}),(0,Xg.jsx)("p",{children:"Nie walczymy z ograniczeniami szablonu. Ka\u017cdy element Twojej strony projektujemy tak, by idealnie oddawa\u0142 charakter Twojej marki. Bez ci\u0119\u017ckich wtyczek, bez zb\u0119dnego kodu, z zachowaniem absolutnej lekko\u015bci designu."}),(0,Xg.jsx)("h2",{children:"Dla kogo s\u0105 gotowe systemy?"}),(0,Xg.jsx)("p",{children:"Proste platformy CMS s\u0105 dobrym rozwi\u0105zaniem dla:"}),(0,Xg.jsxs)("ul",{children:[(0,Xg.jsx)("li",{children:"Hobbystycznych blog\xf3w o ogromnej liczbie wpis\xf3w."}),(0,Xg.jsx)("li",{children:"Ma\u0142ych stron informacyjnych z bardzo niskim bud\u017cetem."}),(0,Xg.jsx)("li",{children:"Os\xf3b, kt\xf3re chc\u0105 codziennie same zmienia\u0107 kod strony."})]}),(0,Xg.jsx)("p",{children:"Ale je\u015bli Tw\xf3j biznes wymaga:"}),(0,Xg.jsxs)("ul",{children:[(0,Xg.jsx)("li",{children:"B\u0142yskawicznej pr\u0119dko\u015bci dzia\u0142ania dla wy\u017cszej sprzeda\u017cy,"}),(0,Xg.jsx)("li",{children:"Nienagannego wizerunku marki premium,"}),(0,Xg.jsx)("li",{children:"Bezpiecze\u0144stwa danych Twoich klient\xf3w..."})]}),(0,Xg.jsx)("p",{children:"...czysty kod jest po prostu bezkonkurencyjn\u0105 inwestycj\u0105."}),(0,Xg.jsx)("h2",{children:"Podsumowanie"}),(0,Xg.jsxs)("p",{children:["Wyb\xf3r technologii to fundament Twojego biznesu. Zamiast pyta\u0107, co jest ta\u0144sze dzisiaj, warto zapyta\u0107:"," ",(0,Xg.jsx)("strong",{children:"\u201eKt\xf3re rozwi\u0105zanie pozwoli mi zarabia\u0107 wi\u0119cej i spa\u0107 spokojnie przez lata?\u201d"})]}),(0,Xg.jsx)("p",{children:"Dla nas odpowied\u017a jest jasna."}),(0,Xg.jsx)("hr",{}),(0,Xg.jsxs)("p",{children:[(0,Xg.jsx)("strong",{children:"Studio Klara Queen"}),(0,Xg.jsx)("br",{}),"Projektujemy luksusowe do\u015bwiadczenia cyfrowe."]})]})};const hT=function(){const e=lz.find(e=>"unikalne-grafiki-ai"===e.id);return(0,Xg.jsxs)(cT,{article:e,children:[(0,Xg.jsx)("h1",{children:"Nowo\u015b\u0107: Unikalne grafiki AI w cenie ka\u017cdej strony"}),(0,Xg.jsx)("p",{children:(0,Xg.jsx)("strong",{children:"25 marca 2026"})}),(0,Xg.jsx)("p",{children:"Doskonale wiemy, \u017ce jednym z najwi\u0119kszych wyzwa\u0144 przy tworzeniu presti\u017cowej strony internetowej jest brak wysokiej jako\u015bci, profesjonalnych zdj\u0119\u0107."}),(0,Xg.jsx)("p",{children:"Prywatne sesje fotograficzne bywaj\u0105 kosztowne i czasoch\u0142onne. Darmowe zdj\u0119cia z popularnych bank\xf3w (jak Pexels czy Unsplash)? Korzystaj\u0105 z nich tysi\u0105ce firm, przez co trudno o unikalno\u015b\u0107. Zakup p\u0142atnych stock\xf3w to z kolei kolejny wydatek, kt\xf3ry nie zawsze gwarantuje idealne dopasowanie do wizji marki."}),(0,Xg.jsx)("p",{children:"W Studio Klara Queen postanowili\u015bmy to zmieni\u0107."}),(0,Xg.jsx)("h2",{children:"Problem: Wizualna powtarzalno\u015b\u0107 w sieci"}),(0,Xg.jsx)("p",{children:"Przegl\u0105daj\u0105c internet, mo\u017cna zauwa\u017cy\u0107, \u017ce wiele stron z bran\u017cy premium cierpi na brak charakteru. Dlaczego? Poniewa\u017c wi\u0119kszo\u015b\u0107 opiera si\u0119 na tych samych, opatrzonych grafikach:"}),(0,Xg.jsxs)("ul",{children:[(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Sektor Beauty:"})," ta sama modelka w maseczce na setkach witryn."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Us\u0142ugi profesjonalne:"})," powtarzalne zdj\u0119cia ludzi w garniturach w sterylnych biurach."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Kreatywne studia:"})," te same abstrakcyjne, kolorowe gradienty."]})]}),(0,Xg.jsx)("p",{children:"W efekcie Twoja marka mo\u017ce zacz\u0105\u0107 zlewa\u0107 si\u0119 z konkurencj\u0105. W \u015bwiecie luksusu brak wyr\xf3\u017cnienia to najprostsza droga do bycia niezauwa\u017conym."}),(0,Xg.jsx)("h2",{children:"Rozwi\u0105zanie: Autorskie generowanie grafik przez AI"}),(0,Xg.jsxs)("p",{children:["Od marca 2026 roku ka\u017cdy nowy projekt realizowany w Studio Klara Queen zawiera pakiet",(0,Xg.jsxs)("strong",{children:[" ","unikalnych, wysokiej jako\u015bci grafik wygenerowanych przez Sztuczn\u0105 Inteligencj\u0119"]}),"."]}),(0,Xg.jsx)("p",{children:"Co to oznacza dla Twojej marki?"}),(0,Xg.jsxs)("ul",{children:[(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Pe\u0142na personalizacja:"})," grafiki tworzone pod konkretn\u0105 palet\u0119 barw i styl Twojej marki."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Unikalno\u015b\u0107 absolutna:"})," nawet przy podobnych wytycznych, AI generuje jedyne w swoim rodzaju obrazy. Nikt nie b\u0119dzie mia\u0142 identycznej witryny."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Sp\xf3jno\u015b\u0107 wizualna:"})," zestawienie grafik, kt\xf3re idealnie wsp\xf3\u0142gra z Twoj\u0105 wizj\u0105 artystyczn\u0105."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Bezpiecze\u0144stwo prawne:"})," otrzymujesz pe\u0142ne prawa komercyjne do wykorzystanych obraz\xf3w."]})]}),(0,Xg.jsx)("h2",{children:"Jak to wygl\u0105da w praktyce?"}),(0,Xg.jsx)("p",{children:"Zamiast szuka\u0107 kompromis\xf3w w gotowych bazach zdj\u0119\u0107, my tworzymy obrazy od podstaw. Je\u015bli prowadzisz np. salon urody, proces wygl\u0105da tak:"}),(0,Xg.jsx)("p",{children:(0,Xg.jsx)("strong",{children:"Koncepcja \u2192 Precyzyjny Prompt \u2192 Selekcja AI \u2192 Unikalna Grafika"})}),(0,Xg.jsx)("p",{children:(0,Xg.jsx)("em",{children:"Przyk\u0142ad: \u201eMinimalistyczne, luksusowe wn\u0119trze salonu, naturalne o\u015bwietlenie, be\u017cowo-z\u0142ota kolorystyka, detale premium, estetyka profesjonalnej fotografii modowej\u201d."})}),(0,Xg.jsx)("p",{children:"Rezultat to warstwa wizualna, kt\xf3ra:"}),(0,Xg.jsxs)("ul",{children:[(0,Xg.jsx)("li",{children:"\u2705 Jest nierozerwalnie zwi\u0105zana z Twoim brandingiem."}),(0,Xg.jsx)("li",{children:"\u2705 Buduje wizerunek marki niedost\u0119pnej w masowym obiegu."}),(0,Xg.jsx)("li",{children:"\u2705 Wygl\u0105da jak efekt drogiej sesji zdj\u0119ciowej, a nie sztuczny tw\xf3r."})]}),(0,Xg.jsx)("h2",{children:"Koszt dla Ciebie?"}),(0,Xg.jsxs)("p",{children:[(0,Xg.jsx)("strong",{children:"Dok\u0142adnie zero."})," To standard wliczony w cen\u0119 realizacji Twojej strony."]}),(0,Xg.jsxs)("p",{children:["Inwestujemy nasz czas w dopracowanie grafik AI, poniewa\u017c statystyki s\u0105 nieub\u0142agane: to, co potencjalny klient zobaczy w pierwszej sekundzie, decyduje o ",(0,Xg.jsx)("strong",{children:"70% jego opinii"}),"o Twoim profesjonalizmie. Nie pozwalamy, by o Twoim sukcesie decydowa\u0142 przypadek lub s\u0142abej jako\u015bci materia\u0142y. Opraw\u0119 premium otrzymujesz u nas w pakiecie."]}),(0,Xg.jsx)("h2",{children:"Czy AI zast\u0119puje tradycyjn\u0105 fotografi\u0119?"}),(0,Xg.jsx)("p",{children:"Traktujemy AI jako pot\u0119\u017cne uzupe\u0142nienie. Je\u015bli posiadasz w\u0142asne, profesjonalne zdj\u0119cia Twoich zrealizowanych projekt\xf3w czy zespo\u0142u \u2013 zawsze stanowi\u0105 one priorytet."}),(0,Xg.jsx)("p",{children:"Jednak w przypadku sekcji dekoracyjnych, t\u0142a strony czy g\u0142\xf3wnego zdj\u0119cia powitalnego (Hero Image), technologia AI pozwala nam stworzy\u0107 klimat, kt\xf3ry bez niej by\u0142by nieosi\u0105galny bez ogromnych nak\u0142ad\xf3w finansowych."}),(0,Xg.jsx)("h2",{children:"Etyka i transparentno\u015b\u0107"}),(0,Xg.jsxs)("p",{children:["Pytamy wprost: \u201eCzy wypada u\u017cywa\u0107 grafik wygenerowanych przez AI?\u201d. Nasza odpowied\u017a:"," ",(0,Xg.jsx)("strong",{children:"Tak, o ile robimy to z klas\u0105 i pe\u0142n\u0105 szczero\u015bci\u0105."})]}),(0,Xg.jsx)("p",{children:"W 2026 roku AI to nie p\xf3j\u015bcie na \u0142atwizn\u0119, lecz inteligentne narz\u0119dzie budowania presti\u017cu. My trzymamy si\u0119 trzech zasad:"}),(0,Xg.jsxs)("ul",{children:[(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Kuratorska selekcja:"})," Ka\u017cda grafika przechodzi nasz\u0105 osobist\u0105 weryfikacj\u0119 \u2013 musi by\u0107 ostra, estetyczna i luksusowa."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Iteracja do skutku:"})," Robimy tyle wersji, ile potrzeba, aby obraz w 100% oddawa\u0142 charakter Twojego biznesu."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Uczciwo\u015b\u0107 przekazu:"})," Wykorzystujemy AI tam, gdzie buduje ona emocje i nastr\xf3j, pozwalaj\u0105c Twoim realnym us\u0142ugom b\u0142yszcze\u0107 w odpowiedniej oprawie."]})]}),(0,Xg.jsx)("h2",{children:"Podsumowanie"}),(0,Xg.jsxs)("p",{children:["W Studio Klara Queen chcemy, aby\u015b si\u0119 wyr\xf3\u017cnia\u0142a. Grafiki AI to narz\u0119dzie, kt\xf3re nam na to pozwala. Twoja strona nie b\u0119dzie wygl\u0105da\u0107 jak jedna z wielu. B\u0119dzie wygl\u0105da\u0107 jak ",(0,Xg.jsx)("strong",{children:"Twoja"}),"."]}),(0,Xg.jsx)("hr",{}),(0,Xg.jsxs)("p",{children:[(0,Xg.jsx)("strong",{children:"Studio Klara Queen"}),(0,Xg.jsx)("br",{}),"Projektujemy luksusowe do\u015bwiadczenia cyfrowe."]})]})};const pT=function(){const e=lz.find(e=>"proces-48h"===e.id);return(0,Xg.jsxs)(cT,{article:e,children:[(0,Xg.jsx)("h1",{children:"Jak oddajemy gotowy projekt w 48h roboczych? Poznaj nasz proces."}),(0,Xg.jsx)("p",{children:(0,Xg.jsx)("strong",{children:"30 marca 2026"})}),(0,Xg.jsx)("p",{children:"Dla wielu agencji stworzenie prostej strony internetowej trwa miesi\u0105cami. Dziesi\u0105tki spotka\u0144, nieko\u0144cz\u0105ce si\u0119 korekty i kolejne wersje nag\u0142\xf3wk\xf3w sprawiaj\u0105, \u017ce projekt traci dynamik\u0119, a Ty \u2013 czas na budowanie biznesu."}),(0,Xg.jsxs)("p",{children:["W Studio Klara Queen proces zamyka si\u0119 w"," ",(0,Xg.jsx)("strong",{children:"48 godzinach roboczych"}),". Jak to mo\u017cliwe bez kompromis\xf3w w kwestii jako\u015bci? Zapraszamy za kulisy naszego warsztatu."]}),(0,Xg.jsx)("h2",{children:"Czym s\u0105 nasze \u201e48 godzin\u201d?"}),(0,Xg.jsx)("p",{children:"Zasada jest prosta: Tw\xf3j projekt jest gotowy do publikacji w ci\u0105gu 48 godzin roboczych od momentu zaksi\u0119gowania wp\u0142aty i dostarczenia przez Ciebie kompletu informacji."}),(0,Xg.jsx)("p",{children:(0,Xg.jsx)("strong",{children:"48 godzin roboczych = pe\u0142ne skupienie na Twoim sukcesie."})}),(0,Xg.jsx)("p",{children:"Jak to wygl\u0105da w praktyce:"}),(0,Xg.jsxs)("ul",{children:[(0,Xg.jsx)("li",{children:"Otrzymujemy detale projektu (wytyczne, kolorystyka, tre\u015bci)."}),(0,Xg.jsx)("li",{children:"Rozpoczynamy intensywne prace projektowe i programistyczne."}),(0,Xg.jsx)("li",{children:"Po 48 godzinach roboczych Twoja strona jest gotowa i opublikowana."})]}),(0,Xg.jsxs)("blockquote",{children:[(0,Xg.jsx)("strong",{children:"Wa\u017cna uwaga techniczna:"})," Proces propagacji domeny lub konfiguracja zewn\u0119trznego hostingu mo\u017ce czasem zaj\u0105\u0107 od kilku do 24 godzin. Jest to proces niezale\u017cny od nas, wynikaj\u0105cy z globalnych ustawie\u0144 dostawc\xf3w sieciowych. Sama strona jest jednak gotowa i przetestowana dok\u0142adnie w wyznaczonym terminie."]}),(0,Xg.jsx)("h2",{children:"Filary naszej efektywno\u015bci"}),(0,Xg.jsx)("h3",{children:"1. Inteligentny Brief"}),(0,Xg.jsx)("p",{children:"Zanim napiszemy pierwsz\u0105 lini\u0119 kodu, przeprowadzamy Ci\u0119 przez precyzyjn\u0105 ankiet\u0119 online. Zamiast godzinnych rozm\xf3w o niczym, zbieramy konkretne dane:"}),(0,Xg.jsxs)("ul",{children:[(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"O marce:"})," Bran\u017ca, warto\u015bci i profil idealnego klienta."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"O celach:"})," Struktura podstron, kluczowe sekcje i oczekiwane akcje u\u017cytkownik\xf3w."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"O estetyce:"})," Paleta barw, typografia i po\u017c\u0105dany klimat wizualny."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"O funkcjonalno\u015bci:"})," Formularze, integracje (np. Calendly) czy galerie prac."]})]}),(0,Xg.jsx)("p",{children:"Dzi\u0119ki temu eliminujemy szum komunikacyjny i od pierwszej minuty wiemy, w kt\xf3rym kierunku pod\u0105\u017ca\u0107."}),(0,Xg.jsx)("h3",{children:"2. Autorski fundament (nasza przewaga technologiczna)"}),(0,Xg.jsxs)("p",{children:["Przez lata pracy wypracowali\u015bmy"," ",(0,Xg.jsx)("strong",{children:"zaawansowan\u0105 bibliotek\u0119 komponent\xf3w React"}),"oraz autorskie standardy kodowania. Nie u\u017cywamy kupnych szablon\xf3w \u2013 korzystamy z w\u0142asnego, sprawdzonego w boju fundamentu."]}),(0,Xg.jsx)("p",{children:"Nasz system obejmuje:"}),(0,Xg.jsxs)("ul",{children:[(0,Xg.jsxs)("li",{children:["\u2705 ",(0,Xg.jsx)("strong",{children:"Perfekcyjne Responsive Web Design:"})," dopracowane uk\u0142ady dla ka\u017cdego urz\u0105dzenia."]}),(0,Xg.jsxs)("li",{children:["\u2705 ",(0,Xg.jsx)("strong",{children:"Globalny system styl\xf3w:"})," sp\xf3jna typografia i spacingi."]}),(0,Xg.jsxs)("li",{children:["\u2705 ",(0,Xg.jsx)("strong",{children:"Optymalizacj\u0119 SEO:"})," wbudowane tagi i struktura danych na starcie."]}),(0,Xg.jsxs)("li",{children:["\u2705 ",(0,Xg.jsx)("strong",{children:"Maksymaln\u0105 wydajno\u015b\u0107:"})," techniki lazy loading i code splitting."]})]}),(0,Xg.jsx)("p",{children:"Zaczynaj\u0105c projekt, mamy ju\u017c gotowy \u201esilnik\u201d i podwozie \u2013 skupiamy si\u0119 na budowie Twojej unikalnej \u201ekaroserii\u201d i wn\u0119trza."}),(0,Xg.jsx)("h3",{children:"3. Nowoczesny stack technologiczny"}),(0,Xg.jsx)("p",{children:"Korzystamy z narz\u0119dzi, kt\xf3re eliminuj\u0105 przestoje:"}),(0,Xg.jsxs)("ul",{children:[(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"React"})," \u2013 czysta struktura i b\u0142yskawiczne dzia\u0142anie."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Styled-components"})," \u2013 modularno\u015b\u0107 styl\xf3w bez chaosu w plikach."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Vite"})," \u2013 \u015brodowisko programistyczne nowej generacji."]}),(0,Xg.jsxs)("li",{children:[(0,Xg.jsx)("strong",{children:"Vercel"})," \u2013 b\u0142yskawiczny deployment i najwy\u017csza stabilno\u015b\u0107 serwer\xf3w."]})]}),(0,Xg.jsx)("h2",{children:"Dlaczego to si\u0119 udaje?"}),(0,Xg.jsxs)("p",{children:[(0,Xg.jsx)("strong",{children:"Pe\u0142na koncentracja:"})," Pracujemy tylko nad JEDNYM projektem jednocze\u015bnie. Twoja marka ma nasz\u0105 ca\u0142kowit\u0105 uwag\u0119 przez ca\u0142e 48 godzin."]}),(0,Xg.jsxs)("p",{children:[(0,Xg.jsx)("strong",{children:"Do\u015bwiadczenie:"})," Nie eksperymentujemy na Twoim biznesie. Wdra\u017camy rozwi\u0105zania, o kt\xf3rych wiemy, \u017ce dzia\u0142aj\u0105 i konwertuj\u0105."]}),(0,Xg.jsxs)("p",{children:[(0,Xg.jsx)("strong",{children:"Zgrany zesp\xf3\u0142:"})," Ka\u017cdy projekt prowadzi dedykowany ekspert. W razie potrzeby \u0142\u0105czymy si\u0142y, by odda\u0107 projekt jeszcze przed terminem."]}),(0,Xg.jsx)("h2",{children:"Por\xf3wnanie efektywno\u015bci"}),(0,Xg.jsxs)("table",{className:"process-table",children:[(0,Xg.jsx)("thead",{children:(0,Xg.jsxs)("tr",{children:[(0,Xg.jsx)("th",{children:"Obszar"}),(0,Xg.jsx)("th",{children:"Studio Klara Queen"}),(0,Xg.jsx)("th",{children:"Tradycyjne Agencje"})]})}),(0,Xg.jsxs)("tbody",{children:[(0,Xg.jsxs)("tr",{children:[(0,Xg.jsx)("td",{children:"Przygotowanie"}),(0,Xg.jsx)("td",{children:"Autorska biblioteka React"}),(0,Xg.jsx)("td",{children:"Poszukiwanie szablon\xf3w"})]}),(0,Xg.jsxs)("tr",{children:[(0,Xg.jsx)("td",{children:"Komunikacja"}),(0,Xg.jsx)("td",{children:"Bezpo\u015bredni kontakt w czasie rzeczywistym"}),(0,Xg.jsx)("td",{children:"D\u0142ugie \u0142a\u0144cuchy mailowe"})]}),(0,Xg.jsxs)("tr",{children:[(0,Xg.jsx)("td",{children:"Skupienie"}),(0,Xg.jsx)("td",{children:"Jeden projekt w danym czasie"}),(0,Xg.jsx)("td",{children:"Kilka projekt\xf3w prowadzonych r\xf3wnolegle"})]}),(0,Xg.jsxs)("tr",{children:[(0,Xg.jsx)("td",{children:"Testy jako\u015bci"}),(0,Xg.jsx)("td",{children:"Automatyczne i ci\u0105g\u0142e"}),(0,Xg.jsx)("td",{children:"Dopiero w fazie ko\u0144cowej"})]}),(0,Xg.jsxs)("tr",{children:[(0,Xg.jsx)("td",{children:(0,Xg.jsx)("strong",{children:"Czas realizacji"})}),(0,Xg.jsx)("td",{children:(0,Xg.jsx)("strong",{children:"48h roboczych"})}),(0,Xg.jsx)("td",{children:(0,Xg.jsx)("strong",{children:"Od 4 do 8 tygodni"})})]})]})]}),(0,Xg.jsx)("h2",{children:"Czas to najcenniejsza waluta."}),(0,Xg.jsx)("p",{children:"Podczas gdy Twoja konkurencja wci\u0105\u017c doprecyzowuje makiety, Ty mo\u017cesz ju\u017c przyjmowa\u0107 pierwsze zam\xf3wienia. Skracamy miesi\u0105ce oczekiwania do dw\xf3ch intensywnych dni roboczych. Inwestujesz w narz\u0119dzie, kt\xf3re zarabia na siebie od zaraz."}),(0,Xg.jsx)("hr",{}),(0,Xg.jsxs)("p",{children:[(0,Xg.jsx)("strong",{children:"Studio Klara Queen"}),(0,Xg.jsx)("br",{}),"Tworzymy luksusowe do\u015bwiadczenia cyfrowe."]})]})},fT={"startujemy-z-aktualnosciami":uT,"czysty-kod-react":dT,"unikalne-grafiki-ai":hT,"proces-48h":pT};const mT=function(){const{id:e}=fe(),t=fT[e];return t?(0,Xg.jsx)(t,{}):(0,Xg.jsx)(eT,{children:(0,Xg.jsxs)(tT,{children:[(0,Xg.jsx)(nT,{children:(0,Xg.jsx)(rT,{children:"Artyku\u0142 nie znaleziony"})}),(0,Xg.jsx)(sT,{children:(0,Xg.jsx)(wt,{to:"/blog",children:(0,Xg.jsx)(lT,{children:"Wr\xf3\u0107 do aktualno\u015bci"})})})]})})},gT=Gb.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
`,yT=Gb.div`
  text-align: center;
  margin-bottom: 80px;
`,wT=Gb.h1`
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${Jb.testimonialAccent} 0%,
    #764ba2 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
`,bT=Gb.p`
  font-size: clamp(16px, 2vw, 20px);
  color: ${Jb.testimonialSubtext};
  max-width: 600px;
  margin: 0 auto;
`,vT=Gb.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    gap: 20px;
    grid-template-columns: 1fr;
  }
`,xT=Gb.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    background: ${Jb.testimonialBgHover};
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`,kT=Gb.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  font-size: 16px;
`,zT=Gb.span`
  color: #ffd700;
`,ST=Gb.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${Jb.testimonialText};
  margin-bottom: auto;
  margin-bottom: 25px;
  font-style: italic;
`,ET=Gb.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,jT=Gb.strong`
  font-size: 16px;
  color: ${Jb.white};
  font-weight: 600;
`,_T=Gb.span`
  font-size: 14px;
  color: ${Jb.testimonialSubtext};
`;const TT=function(){return(0,Xg.jsxs)(gT,{children:[(0,Xg.jsxs)(yT,{children:[(0,Xg.jsx)(wT,{children:"Opinie naszych klient\xf3w"}),(0,Xg.jsx)(bT,{children:"Sprawd\u017a co m\xf3wi\u0105 o nas ci, kt\xf3rzy ju\u017c z nami pracowali"})]}),(0,Xg.jsx)(vT,{children:$z.map(e=>(0,Xg.jsxs)(xT,{children:[(0,Xg.jsx)(kT,{children:[...Array(e.rating)].map((e,t)=>(0,Xg.jsx)(zT,{children:"\u2605"},t))}),(0,Xg.jsxs)(ST,{children:['"',e.text,'"']}),(0,Xg.jsxs)(ET,{children:[(0,Xg.jsx)(jT,{children:e.name}),(0,Xg.jsx)(_T,{children:e.company})]})]},e.id))})]})};function CT(e){return Nv({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r\n\tc0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r\n\tc0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r\n\tC34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r\n\tc-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"},child:[]},{tag:"path",attr:{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r\n\tc0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"},child:[]}]})(e)}function IT(e){return{"auth/email-already-in-use":"Ten adres e-mail jest ju\u017c zarejestrowany.","auth/invalid-email":"Nieprawid\u0142owy adres e-mail.","auth/weak-password":"Has\u0142o jest za s\u0142abe \u2014 u\u017cyj co najmniej 6 znak\xf3w.","auth/user-disabled":"To konto zosta\u0142o wy\u0142\u0105czone.","auth/user-not-found":"Nie znaleziono konta z tym adresem e-mail.","auth/wrong-password":"Nieprawid\u0142owe has\u0142o.","auth/invalid-credential":"Nieprawid\u0142owy e-mail lub has\u0142o.","auth/too-many-requests":"Zbyt wiele pr\xf3b. Spr\xf3buj ponownie za chwil\u0119.","auth/popup-closed-by-user":"Logowanie przerwane \u2014 okno zosta\u0142o zamkni\u0119te.","auth/cancelled-popup-request":"Mo\u017cna uruchomi\u0107 tylko jedno okno logowania naraz.","auth/account-exists-with-different-credential":"Konto z tym e-mailem istnieje ju\u017c przy innym sposobie logowania.","auth/operation-not-allowed":"Ta metoda logowania nie jest w\u0142\u0105czona w Firebase Console.","auth/network-request-failed":"B\u0142\u0105d sieci. Sprawd\u017a po\u0142\u0105czenie z internetem.","auth/requires-recent-login":"Ze wzgl\u0119d\xf3w bezpiecze\u0144stwa wyloguj si\u0119 i zaloguj ponownie, potem spr\xf3buj jeszcze raz."}[e]||"Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d. Spr\xf3buj ponownie."}const AT=Jb,PT=Yb,RT=Zb.linkBarRadius,NT=Gb.main`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(24px, 5vw, 48px) clamp(16px, 4vw, 32px);
  box-sizing: border-box;

  @media (max-width: ${PT.tablet}px) {
    min-height: calc(100vh - 64px);
    padding-top: clamp(32px, 8vw, 56px);
  }
`,DT=Gb.div`
  width: 100%;
  max-width: 440px;
  padding: clamp(28px, 6vw, 42px);
  border-radius: ${Zb.drawerBorderRadius};
  background: linear-gradient(
    165deg,
    rgba(120, 40, 64, 0.55) 0%,
    rgba(46, 14, 22, 0.75) 45%,
    rgba(30, 8, 16, 0.88) 100%
  );
  border: 1px solid ${AT.navBorderGold18};
  box-shadow:
    0 20px 48px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 247, 220, 0.1);
  backdrop-filter: blur(14px) saturate(115%);
  animation: authCardIn 0.55s ease-out;

  @keyframes authCardIn {
    from {
      opacity: 0;
      transform: translateY(16px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`,OT=Gb.header`
  text-align: center;
  margin-bottom: clamp(22px, 4vw, 30px);
`,LT=Gb.h1`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.85rem, 5vw, 2.35rem);
  font-weight: 700;
  color: ${AT.white};
  margin: 0 0 10px 0;
  letter-spacing: 0.4px;
  line-height: 1.15;
`,MT=Gb.p`
  margin: 0;
  font-size: clamp(0.9rem, 2.2vw, 0.98rem);
  color: rgba(255, 255, 255, 0.68);
  font-weight: 400;
  line-height: 1.5;
`,$T=Gb.form`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 3vw, 20px);
`,FT=Gb.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`,UT=Gb.label`
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: ${AT.goldHover};
`,VT=Gb.input`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 14px;
  font-size: 1rem;
  font-family: inherit;
  color: ${AT.white};
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid ${AT.navBorderGold26};
  border-radius: ${RT};
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }

  &:hover {
    border-color: rgba(241, 213, 146, 0.35);
  }

  &:focus {
    border-color: ${AT.goldMain};
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.18);
    background: rgba(0, 0, 0, 0.22);
  }
`,BT=Gb.div`
  position: relative;
  display: flex;
  align-items: center;
`,HT=Gb(VT)`
  padding-right: 48px;
`,WT=Gb.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${AT.goldHover};
  cursor: pointer;
  font-size: 1rem;
  transition:
    color 0.2s ease,
    background 0.2s ease;

  &:hover {
    color: ${AT.white};
    background: rgba(255, 255, 255, 0.06);
  }
`,KT=Gb.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -4px;
`,GT=(Gb.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.88rem;
  font-family: inherit;
  color: ${AT.goldHover};
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;

  &:hover {
    color: ${AT.white};
  }
`,Gb(wt)`
  font-size: 0.88rem;
  color: ${AT.goldHover};
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;

  &:hover {
    color: ${AT.white};
  }
`),qT=Gb.button`
  margin-top: 4px;
  width: 100%;
  padding: 14px 20px;
  border: 1px solid ${AT.navBorderGold48};
  border-radius: ${RT};
  font-size: 0.95rem;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${AT.deepBlack};
  background: linear-gradient(
    180deg,
    ${AT.goldHover} 0%,
    ${AT.goldMain} 100%
  );
  box-shadow:
    0 4px 16px rgba(212, 175, 55, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
  transition:
    transform 0.2s ease,
    filter 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    filter: brightness(1.06);
    transform: translateY(-1px);
    box-shadow:
      0 8px 24px rgba(212, 175, 55, 0.32),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }
`,QT=Gb.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: clamp(6px, 2vw, 10px) 0;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${AT.navDividerGold50},
      transparent
    );
  }
`,YT=Gb.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 18px;
  border-radius: ${RT};
  border: 1px solid ${AT.navBorderGold26};
  background: rgba(255, 255, 255, 0.06);
  color: ${AT.white};
  font-size: 0.92rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${AT.navBorderGold48};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    flex-shrink: 0;
    font-size: 1.35rem;
  }
`,JT=Gb.p`
  margin: clamp(18px, 4vw, 24px) 0 0 0;
  text-align: center;
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.5;

  ${GT} {
    margin-left: 6px;
    font-weight: 600;
  }
`,XT=Gb.div`
  margin: 0 0 16px 0;
  padding: 12px 14px;
  font-size: 0.85rem;
  line-height: 1.45;
  color: #ffc9c9;
  background: rgba(158, 30, 54, 0.3);
  border-radius: ${RT};
  border: 1px solid rgba(241, 120, 140, 0.5);
`,ZT=Gb.p`
  margin: 0 0 20px 0;
  padding: 12px 14px;
  font-size: 0.85rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.72);
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${RT};
  border: 1px solid ${AT.navBorderGold18};
`,eC=Gb(ZT)`
  color: rgba(220, 255, 220, 0.95);
  border-color: rgba(102, 187, 106, 0.45);
  background: rgba(46, 125, 50, 0.2);
`,tC=Gb.div`
  margin-top: clamp(20px, 4vw, 28px);
  text-align: center;
`;const nC=function(){const e=pe(),[t,n]=(0,r.useState)(""),[i,a]=(0,r.useState)(""),[o,s]=(0,r.useState)(!1),[l,c]=(0,r.useState)(""),[u,d]=(0,r.useState)(!1);return(0,Xg.jsx)(NT,{children:(0,Xg.jsxs)(DT,{children:[(0,Xg.jsxs)(OT,{children:[(0,Xg.jsx)(LT,{children:"Zaloguj si\u0119"}),(0,Xg.jsx)(MT,{children:"Zaloguj si\u0119 e-mailem i has\u0142em albo kontem Google."})]}),l?(0,Xg.jsx)(XT,{role:"alert",children:l}):null,(0,Xg.jsxs)($T,{onSubmit:async n=>{if(n.preventDefault(),c(""),Gg()&&Qg)if(t.trim()&&i){d(!0);try{await function(e,t,n){return hr(e.app)?Promise.reject(Lr(e)):Pa(Yt(e),ya.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Da(e),t})}(Qg,t.trim(),i),e("/konto",{replace:!0})}catch(r){c(IT(r.code))}finally{d(!1)}}else c("Podaj adres e-mail i has\u0142o.");else c("Brak konfiguracji Firebase \u2014 uzupe\u0142nij plik .env.local (patrz .env.example).")},noValidate:!0,children:[(0,Xg.jsxs)(FT,{children:[(0,Xg.jsx)(UT,{htmlFor:"login-email",children:"E-mail"}),(0,Xg.jsx)(VT,{id:"login-email",name:"email",type:"email",autoComplete:"email",placeholder:"twoj@email.pl",value:t,onChange:e=>n(e.target.value),disabled:u})]}),(0,Xg.jsxs)(FT,{children:[(0,Xg.jsx)(UT,{htmlFor:"login-password",children:"Has\u0142o"}),(0,Xg.jsxs)(BT,{children:[(0,Xg.jsx)(HT,{id:"login-password",name:"password",type:o?"text":"password",autoComplete:"current-password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",value:i,onChange:e=>a(e.target.value),disabled:u}),(0,Xg.jsx)(WT,{type:"button","aria-label":o?"Ukryj has\u0142o":"Poka\u017c has\u0142o",onClick:()=>s(e=>!e),disabled:u,children:o?(0,Xg.jsx)(Wv,{}):(0,Xg.jsx)(Hv,{})})]})]}),(0,Xg.jsx)(KT,{children:(0,Xg.jsx)(GT,{to:"/forgot-password",children:"Nie pami\u0119tasz has\u0142a?"})}),(0,Xg.jsx)(qT,{type:"submit",disabled:u,children:u?"Logowanie\u2026":"Zaloguj si\u0119"})]}),(0,Xg.jsx)(QT,{children:"lub"}),(0,Xg.jsxs)(YT,{type:"button",onClick:async()=>{if(c(""),Gg()&&Qg){d(!0);try{await ko(Qg,Jg),e("/konto",{replace:!0})}catch(t){if("auth/popup-closed-by-user"===t.code)return;c(IT(t.code))}finally{d(!1)}}else c("Brak konfiguracji Firebase \u2014 uzupe\u0142nij plik .env.local (patrz .env.example).")},disabled:u,children:[(0,Xg.jsx)(CT,{"aria-hidden":!0}),"Kontynuuj z Google"]}),(0,Xg.jsxs)(JT,{children:["Nie masz konta?",(0,Xg.jsx)(GT,{to:"/register",children:"Za\u0142\xf3\u017c konto"})]})]})})};const rC=function(){const e=pe(),[t,n]=(0,r.useState)(""),[i,a]=(0,r.useState)(""),[o,s]=(0,r.useState)(""),[l,c]=(0,r.useState)(!1),[u,d]=(0,r.useState)(""),[h,p]=(0,r.useState)(!1);return(0,Xg.jsx)(NT,{children:(0,Xg.jsxs)(DT,{children:[(0,Xg.jsxs)(OT,{children:[(0,Xg.jsx)(LT,{children:"Rejestracja"}),(0,Xg.jsx)(MT,{children:"Za\u0142\xf3\u017c konto e-mailem lub zaloguj si\u0119 jednorazowo przez Google."})]}),u?(0,Xg.jsx)(XT,{role:"alert",children:u}):null,(0,Xg.jsxs)($T,{onSubmit:async n=>{if(n.preventDefault(),d(""),Gg()&&Qg)if(t.trim())if(i.length<6)d("Has\u0142o musi mie\u0107 co najmniej 6 znak\xf3w.");else if(i===o){p(!0);try{await async function(e,t,n){if(hr(e.app))return Promise.reject(Lr(e));const r=Hi(e),i=ea(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Sa,"EMAIL_PASSWORD_PROVIDER"),a=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Da(e),t}),o=await Ea._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}(Qg,t.trim(),i),e("/konto",{replace:!0})}catch(r){d(IT(r.code))}finally{p(!1)}}else d("Has\u0142a nie s\u0105 takie same.");else d("Podaj adres e-mail.");else d("Brak konfiguracji Firebase \u2014 uzupe\u0142nij plik .env.local (patrz .env.example).")},noValidate:!0,children:[(0,Xg.jsxs)(FT,{children:[(0,Xg.jsx)(UT,{htmlFor:"register-email",children:"E-mail"}),(0,Xg.jsx)(VT,{id:"register-email",name:"email",type:"email",autoComplete:"email",placeholder:"twoj@email.pl",value:t,onChange:e=>n(e.target.value),disabled:h})]}),(0,Xg.jsxs)(FT,{children:[(0,Xg.jsx)(UT,{htmlFor:"register-password",children:"Has\u0142o"}),(0,Xg.jsxs)(BT,{children:[(0,Xg.jsx)(HT,{id:"register-password",name:"password",type:l?"text":"password",autoComplete:"new-password",placeholder:"min. 6 znak\xf3w",value:i,onChange:e=>a(e.target.value),disabled:h}),(0,Xg.jsx)(WT,{type:"button","aria-label":l?"Ukryj has\u0142o":"Poka\u017c has\u0142o",onClick:()=>c(e=>!e),disabled:h,children:l?(0,Xg.jsx)(Wv,{}):(0,Xg.jsx)(Hv,{})})]})]}),(0,Xg.jsxs)(FT,{children:[(0,Xg.jsx)(UT,{htmlFor:"register-confirm",children:"Powt\xf3rz has\u0142o"}),(0,Xg.jsx)(VT,{id:"register-confirm",name:"confirm",type:l?"text":"password",autoComplete:"new-password",placeholder:"powt\xf3rz has\u0142o",value:o,onChange:e=>s(e.target.value),disabled:h})]}),(0,Xg.jsx)(qT,{type:"submit",disabled:h,children:h?"Tworzenie konta\u2026":"Utw\xf3rz konto"})]}),(0,Xg.jsx)(QT,{children:"lub"}),(0,Xg.jsxs)(YT,{type:"button",onClick:async()=>{if(d(""),Gg()&&Qg){p(!0);try{await ko(Qg,Jg),e("/konto",{replace:!0})}catch(t){if("auth/popup-closed-by-user"===t.code)return;d(IT(t.code))}finally{p(!1)}}else d("Brak konfiguracji Firebase \u2014 uzupe\u0142nij plik .env.local (patrz .env.example).")},disabled:h,children:[(0,Xg.jsx)(CT,{"aria-hidden":!0}),"Zarejestruj si\u0119 z Google"]}),(0,Xg.jsxs)(JT,{children:["Masz ju\u017c konto?",(0,Xg.jsx)(GT,{to:"/login",children:"Zaloguj si\u0119"})]})]})})};const iC=function(){const[e,t]=(0,r.useState)(""),[n,i]=(0,r.useState)(!1),[a,o]=(0,r.useState)(""),[s,l]=(0,r.useState)(!1);return(0,Xg.jsx)(NT,{children:(0,Xg.jsxs)(DT,{children:[(0,Xg.jsxs)(OT,{children:[(0,Xg.jsx)(LT,{children:"Przypomnienie has\u0142a"}),(0,Xg.jsx)(MT,{children:"Wy\u015blemy link resetuj\u0105cy na Tw\xf3j e-mail (je\u015bli konto istnieje)."})]}),a?(0,Xg.jsx)(XT,{role:"alert",children:a}):null,n?(0,Xg.jsxs)(eC,{role:"status",children:["Je\u015bli konto jest powi\u0105zane z adresem ",(0,Xg.jsx)("strong",{children:e.trim()}),", wkr\xf3tce otrzymasz wiadomo\u015b\u0107 z linkiem do ustawienia nowego has\u0142a. Sprawd\u017a te\u017c folder spam."]}):null,n?null:(0,Xg.jsxs)($T,{onSubmit:async t=>{if(t.preventDefault(),o(""),Gg()&&Qg)if(e.trim()){l(!0);try{await async function(e,t,n){const r=Hi(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&Na(r,i,n),await ea(r,i,"getOobCode",ca,"EMAIL_PASSWORD_PROVIDER")}(Qg,e.trim()),i(!0)}catch(n){o(IT(n.code))}finally{l(!1)}}else o("Podaj adres e-mail.");else o("Brak konfiguracji Firebase \u2014 uzupe\u0142nij plik .env.local (patrz .env.example).")},noValidate:!0,children:[(0,Xg.jsxs)(FT,{children:[(0,Xg.jsx)(UT,{htmlFor:"forgot-email",children:"E-mail"}),(0,Xg.jsx)(VT,{id:"forgot-email",name:"email",type:"email",autoComplete:"email",placeholder:"twoj@email.pl",value:e,onChange:e=>t(e.target.value),disabled:s})]}),(0,Xg.jsx)(qT,{type:"submit",disabled:s,children:s?"Wysy\u0142anie\u2026":"Wy\u015blij link"})]}),(0,Xg.jsx)(tC,{children:(0,Xg.jsx)(GT,{to:"/login",children:"Wr\xf3\u0107 do logowania"})})]})})},aC=e=>function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(e=Yt(e),1===arguments.length&&(t=Ws.newId()),il("doc","path",t),e instanceof Qm){const n=el.fromString(t,...r);return al(n),new Xm(e,null,new rl(n))}{if(!(e instanceof Xm||e instanceof Zm))throw new Ns(Rs.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(el.fromString(t,...r));return al(n),new Xm(e.firestore,e instanceof Zm?e.converter:null,new rl(n))}}(Yg,"users",e);async function oC(e,t){if(!Yg)throw new Error("Firestore niedost\u0119pny");await function(e,t,n){e=cl(e,Xm);const r=cl(e.firestore,ig),i=Og(e.converter,t,n);return Hg(r,[wg(yg(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,kd.none())])}(aC(e),{...t,updatedAt:new bg("serverTimestamp")},{merge:!0})}function sC(e,t){return[...e].sort((e,n)=>{var r,i,a,o,s,l;const c=null!==(r=null!==(i=null===(a=e[t])||void 0===a?void 0:a.seconds)&&void 0!==i?i:e[t])&&void 0!==r?r:0;return(null!==(o=null!==(s=null===(l=n[t])||void 0===l?void 0:l.seconds)&&void 0!==s?s:n[t])&&void 0!==o?o:0)-c})}const lC=Jb,cC=Yb,uC=Zb.linkBarRadius,dC=Gb.main`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: calc(100vh - 90px);
  padding: clamp(20px, 4vw, 40px) clamp(16px, 3vw, 32px);
  padding-bottom: clamp(48px, 8vw, 80px);
  box-sizing: border-box;

  @media (max-width: ${cC.tablet}px) {
    min-height: calc(100vh - 64px);
    padding-top: clamp(28px, 6vw, 48px);
  }

  @media (max-width: ${cC.phone}px) {
    padding: 16px 10px 48px;
  }
`,hC=Gb.div`
  max-width: 1100px;
  margin: 0 auto;
`,pC=Gb.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  border-radius: ${Zb.drawerBorderRadius};
  background: linear-gradient(
    165deg,
    rgba(120, 40, 64, 0.45) 0%,
    rgba(46, 14, 22, 0.72) 50%,
    rgba(30, 8, 16, 0.9) 100%
  );
  border: 1px solid ${lC.navBorderGold18};
  box-shadow:
    0 20px 48px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 247, 220, 0.08);
  backdrop-filter: blur(14px) saturate(115%);
  overflow: hidden;

  @media (max-width: ${cC.tablet}px) {
    grid-template-columns: 1fr;
    overflow: visible;
  }
`,fC=Gb.aside`
  display: flex;
  flex-direction: column;
  padding: clamp(16px, 2.5vw, 22px);
  border-right: 1px solid ${lC.navBorderGold18};
  background: rgba(0, 0, 0, 0.18);
  min-width: 0;

  @media (max-width: ${cC.tablet}px) {
    border-right: none;
    border-bottom: 1px solid ${lC.navBorderGold18};
    padding-bottom: 12px;
  }

  @media (max-width: ${cC.phone}px) {
    padding: 12px 10px;
  }
`,mC=Gb.div`
  padding: 8px 10px 18px;
  border-bottom: 1px solid ${lC.navBorderGold18};
  margin-bottom: 12px;

  @media (max-width: ${cC.tablet}px) {
    padding-bottom: 14px;
    margin-bottom: 10px;
  }
`,gC=Gb.h1`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.35rem, 3vw, 1.65rem);
  font-weight: 700;
  color: ${lC.white};
  margin: 0 0 4px 0;
  letter-spacing: 0.3px;
`,yC=Gb.p`
  margin: 0;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.55);
  word-break: break-all;
`,wC=Gb.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: ${cC.tablet}px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
    padding-bottom: 6px;
  }
`,bC=Gb.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  padding: 11px 12px;
  margin-top: 8px;
  border: none;
  border-top: 1px solid ${lC.navBorderGold18};
  padding-top: 16px;
  border-radius: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.86rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition:
    color 0.2s ease,
    background 0.2s ease;

  svg {
    font-size: 0.95rem;
    opacity: 0.75;
  }

  &:hover {
    color: ${lC.goldHover};
    background: rgba(212, 175, 55, 0.08);
  }

  @media (max-width: ${cC.tablet}px) {
    display: none;
  }
`,vC=Gb.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  padding: 11px 12px;
  border: 1px solid transparent;
  border-radius: ${uC};
  background: ${e=>e.$active?"rgba(212, 175, 55, 0.14)":"transparent"};
  color: ${e=>e.$active?lC.goldHover:"rgba(255, 255, 255, 0.78)"};
  font-size: 0.88rem;
  font-weight: ${e=>e.$active?600:500};
  font-family: inherit;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  @media (max-width: ${cC.tablet}px) {
    width: auto;
    flex-shrink: 0;
    font-size: 0.84rem;
    padding: 9px 11px;
    gap: 8px;
  }

  svg {
    font-size: 0.95rem;
    opacity: ${e=>e.$active?1:.85};
  }

  &:hover {
    background: rgba(212, 175, 55, 0.1);
    color: ${lC.goldHover};
    border-color: rgba(241, 213, 146, 0.15);
  }
`,xC=Gb.div`
  padding: clamp(22px, 4vw, 36px);
  min-height: 420px;
  min-width: 0;

  @media (max-width: ${cC.phone}px) {
    padding: 16px 12px;
    min-height: 280px;
  }
`,kC=Gb.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.45rem, 3.5vw, 1.85rem);
  font-weight: 700;
  color: ${lC.white};
  margin: 0 0 8px 0;
  letter-spacing: 0.3px;
`,zC=Gb.p`
  margin: 0 0 clamp(22px, 3vw, 28px) 0;
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.55;
  max-width: 560px;
`,SC=Gb.div`
  display: grid;
  gap: clamp(16px, 2.5vw, 20px);
  max-width: 520px;
`,EC=Gb.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: ${cC.phone}px) {
    grid-template-columns: 1fr;
  }
`,jC=Gb.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`,_C=Gb.label`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.55px;
  text-transform: uppercase;
  color: ${lC.goldHover};
`,TC=Gb.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  font-size: 0.95rem;
  font-family: inherit;
  color: ${lC.white};
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid ${lC.navBorderGold26};
  border-radius: ${uC};
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: ${lC.goldMain};
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
  }
`,CC=Gb.button`
  margin-top: 8px;
  padding: 12px 22px;
  width: fit-content;
  border: 1px solid ${lC.navBorderGold48};
  border-radius: ${uC};
  font-size: 0.88rem;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${lC.deepBlack};
  background: linear-gradient(180deg, ${lC.goldHover} 0%, ${lC.goldMain} 100%);
  transition:
    filter 0.2s ease,
    transform 0.2s ease;

  &:hover:not(:disabled) {
    filter: brightness(1.05);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,IC=Gb.button`
  margin-top: 8px;
  padding: 12px 18px;
  width: fit-content;
  border: 1px solid ${lC.navBorderGold26};
  border-radius: ${uC};
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  color: ${lC.goldHover};
  background: rgba(255, 255, 255, 0.04);
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${lC.navBorderGold48};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,AC=Gb.div`
  margin-bottom: 18px;
  padding: 12px 14px;
  font-size: 0.85rem;
  line-height: 1.45;
  border-radius: ${uC};
  ${e=>"error"===e.$variant?"\n    color: #ffc9c9;\n    background: rgba(158, 30, 54, 0.3);\n    border: 1px solid rgba(241, 120, 140, 0.5);\n  ":"\n    color: rgba(220, 255, 220, 0.95);\n    background: rgba(46, 125, 50, 0.22);\n    border: 1px solid rgba(102, 187, 106, 0.45);\n  "}
`,PC=Gb.p`
  margin: 0 0 16px 0;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.5;
`,RC=Gb.div`
  text-align: center;
  padding: clamp(36px, 6vw, 56px) 20px;
  border: 1px dashed ${lC.navBorderGold26};
  border-radius: ${uC};
  background: rgba(0, 0, 0, 0.15);
`,NC=Gb.div`
  font-size: 2.2rem;
  margin-bottom: 14px;
  opacity: 0.65;
`,DC=Gb.p`
  margin: 0 0 8px 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: ${lC.white};
`,OC=Gb.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.5;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
`,LC=Gb.div`
  overflow-x: auto;
  border-radius: ${uC};
  border: 1px solid ${lC.navBorderGold18};
  background: rgba(0, 0, 0, 0.2);
`,MC=Gb.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;

  th,
  td {
    padding: 12px 14px;
    text-align: left;
    border-bottom: 1px solid ${lC.navBorderGold18};
  }

  th {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: ${lC.goldHover};
    font-weight: 600;
    background: rgba(0, 0, 0, 0.25);
  }

  tr:last-child td {
    border-bottom: none;
  }

  td {
    color: rgba(255, 255, 255, 0.85);
  }
`,$C=Gb.div`
  position: relative;
  display: flex;
  align-items: center;
`,FC=Gb(TC)`
  padding-right: 44px;
`,UC=Gb.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${lC.goldHover};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,VC=Gb.div`
  margin-top: clamp(40px, 6vw, 56px);
  padding-top: clamp(24px, 4vw, 32px);
  border-top: 1px solid ${lC.navBorderGold18};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,BC=Gb.h3`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.15rem, 2.5vw, 1.35rem);
  font-weight: 700;
  color: ${lC.white};
  margin: 0 0 10px 0;
`,HC=Gb.p`
  margin: 0 0 20px 0;
  font-size: 0.88rem;
  color: #ffc9c9;
  line-height: 1.55;
  max-width: 440px;
  background: rgba(158, 30, 54, 0.2);
  border: 1px solid rgba(241, 120, 140, 0.35);
  border-radius: ${uC};
  padding: 14px 18px;
`,WC=Gb.button`
  padding: 11px 20px;
  width: fit-content;
  border: 1px solid rgba(241, 120, 140, 0.5);
  border-radius: ${uC};
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.3px;
  cursor: pointer;
  color: #ffc9c9;
  background: rgba(158, 30, 54, 0.35);
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover:not(:disabled) {
    background: rgba(158, 30, 54, 0.55);
    border-color: rgba(241, 120, 140, 0.7);
    color: #fff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,KC=Gb.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`,GC=Gb.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${lC.white};
`,qC=Gb.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;const QC=function(e){let{user:t,profile:n,onSaved:i}=e;const[a,o]=(0,r.useState)(""),[s,l]=(0,r.useState)(""),[c,u]=(0,r.useState)(!1),[d,h]=(0,r.useState)(null),[p,f]=(0,r.useState)(null),[m,g]=(0,r.useState)(!1),[y,w]=(0,r.useState)(!1),[b,v]=(0,r.useState)(null),x=pe();return(0,r.useEffect)(()=>{var e,r,i;o(null!==(e=null!==(r=null===n||void 0===n?void 0:n.displayName)&&void 0!==r?r:null===t||void 0===t?void 0:t.displayName)&&void 0!==e?e:""),l(null!==(i=null===n||void 0===n?void 0:n.phone)&&void 0!==i?i:"")},[n,t]),(0,Xg.jsxs)(Xg.Fragment,{children:[(0,Xg.jsx)(kC,{children:"Profil"}),(0,Xg.jsx)(zC,{children:"Imi\u0119 i nazwisko oraz telefon \u2014 przydadz\u0105 si\u0119 przy kontakcie i zam\xf3wieniach."}),p?(0,Xg.jsx)(AC,{$variant:"error",children:p}):null,d?(0,Xg.jsx)(AC,{$variant:"success",children:d}):null,(0,Xg.jsx)("form",{onSubmit:async e=>{if(e.preventDefault(),f(null),h(null),t){u(!0);try{await oC(t.uid,{displayName:a.trim(),phone:s.trim()}),await Oa(t,{displayName:a.trim()||null}),h("Zapisano dane profilu."),null===i||void 0===i||i()}catch(n){"permission-denied"===n.code?f("Brak uprawnie\u0144 do zapisu \u2014 w konsoli Firebase w\u0142\u0105cz Firestore i opublikuj regu\u0142y z pliku firebase/firestore.rules."):f(n.code&&n.code.startsWith("auth/")?IT(n.code):n.message||"Nie uda\u0142o si\u0119 zapisa\u0107.")}finally{u(!1)}}},children:(0,Xg.jsxs)(SC,{children:[(0,Xg.jsxs)(jC,{children:[(0,Xg.jsx)(_C,{htmlFor:"acc-display",children:"Imi\u0119 i nazwisko"}),(0,Xg.jsx)(TC,{id:"acc-display",value:a,onChange:e=>o(e.target.value),placeholder:"np. Klara Kowalska",autoComplete:"name"})]}),(0,Xg.jsxs)(jC,{children:[(0,Xg.jsx)(_C,{htmlFor:"acc-phone",children:"Telefon"}),(0,Xg.jsx)(TC,{id:"acc-phone",type:"tel",value:s,onChange:e=>l(e.target.value),placeholder:"+48 \u2026",autoComplete:"tel"})]}),(0,Xg.jsx)(CC,{type:"submit",disabled:c,children:c?"Zapisywanie\u2026":"Zapisz profil"})]})}),(0,Xg.jsxs)(VC,{children:[(0,Xg.jsx)(BC,{children:"Usuwanie konta"}),(0,Xg.jsx)(HC,{children:"Uwaga \u2014 usuni\u0119cie konta jest nieodwracalne. Wszystkie Twoje dane, zam\xf3wienia i faktury zostan\u0105 trwale usuni\u0119te."}),b?(0,Xg.jsx)(AC,{$variant:"error",children:b}):null,m?(0,Xg.jsxs)(KC,{children:[(0,Xg.jsx)(GC,{children:"Czy na pewno chcesz usun\u0105\u0107 konto? Tej operacji nie mo\u017cna cofn\u0105\u0107."}),(0,Xg.jsxs)(qC,{children:[(0,Xg.jsx)(WC,{type:"button",disabled:y,onClick:async()=>{v(null),w(!0);try{await async function(e){return Yt(e).delete()}(t),x("/")}catch(e){v("auth/requires-recent-login"===e.code?"Wyloguj si\u0119 i zaloguj ponownie, a potem spr\xf3buj usun\u0105\u0107 konto.":e.message||"Nie uda\u0142o si\u0119 usun\u0105\u0107 konta.")}finally{w(!1)}},children:y?"Usuwanie\u2026":"Tak, usu\u0144 konto"}),(0,Xg.jsx)(IC,{type:"button",onClick:()=>g(!1),children:"Anuluj"})]})]}):(0,Xg.jsx)(WC,{type:"button",onClick:()=>g(!0),children:"Usu\u0144 moje konto"})]})]})};const YC=function(e){let{user:t,profile:n,onSaved:i}=e;const[a,o]=(0,r.useState)(""),[s,l]=(0,r.useState)(""),[c,u]=(0,r.useState)(""),[d,h]=(0,r.useState)(""),[p,f]=(0,r.useState)(""),[m,g]=(0,r.useState)("Polska"),[y,w]=(0,r.useState)(!1),[b,v]=(0,r.useState)(null),[x,k]=(0,r.useState)(null);return(0,r.useEffect)(()=>{var e,t,r,i,a,s;const c=(null===n||void 0===n?void 0:n.invoice)||{};o(null!==(e=c.companyName)&&void 0!==e?e:""),l(null!==(t=c.nip)&&void 0!==t?t:""),u(null!==(r=c.street)&&void 0!==r?r:""),h(null!==(i=c.postalCode)&&void 0!==i?i:""),f(null!==(a=c.city)&&void 0!==a?a:""),g(null!==(s=c.country)&&void 0!==s?s:"Polska")},[n]),(0,Xg.jsxs)(Xg.Fragment,{children:[(0,Xg.jsx)(kC,{children:"Dane do faktury bez VAT"}),(0,Xg.jsx)(zC,{children:"Dane nabywcy na fakturze. Mo\u017cesz uzupe\u0142ni\u0107 je przed pierwszym zakupem \u2014 p\xf3\u017aniej zmienisz je w ka\u017cdej chwili."}),x?(0,Xg.jsx)(AC,{$variant:"error",children:x}):null,b?(0,Xg.jsx)(AC,{$variant:"success",children:b}):null,(0,Xg.jsx)("form",{onSubmit:async e=>{if(e.preventDefault(),k(null),v(null),t){w(!0);try{await oC(t.uid,{invoice:{companyName:a.trim(),nip:s.trim().replace(/\s/g,""),street:c.trim(),postalCode:d.trim(),city:p.trim(),country:m.trim()||"Polska"}}),v("Zapisano dane do faktury."),null===i||void 0===i||i()}catch(n){"permission-denied"===n.code?k("Brak uprawnie\u0144 \u2014 w\u0142\u0105cz Firestore i regu\u0142y z firebase/firestore.rules."):k(n.message||"Nie uda\u0142o si\u0119 zapisa\u0107.")}finally{w(!1)}}},children:(0,Xg.jsxs)(SC,{children:[(0,Xg.jsxs)(jC,{children:[(0,Xg.jsx)(_C,{htmlFor:"inv-company",children:"Nazwa firmy / imi\u0119 i nazwisko"}),(0,Xg.jsx)(TC,{id:"inv-company",value:a,onChange:e=>o(e.target.value),placeholder:"Pe\u0142na nazwa lub dane do faktury imiennej"})]}),(0,Xg.jsxs)(jC,{children:[(0,Xg.jsx)(_C,{htmlFor:"inv-nip",children:"NIP (opcjonalnie)"}),(0,Xg.jsx)(TC,{id:"inv-nip",value:s,onChange:e=>l(e.target.value),placeholder:"1234567890",inputMode:"numeric"})]}),(0,Xg.jsxs)(jC,{children:[(0,Xg.jsx)(_C,{htmlFor:"inv-street",children:"Ulica i numer"}),(0,Xg.jsx)(TC,{id:"inv-street",value:c,onChange:e=>u(e.target.value),placeholder:"ul. \u2026"})]}),(0,Xg.jsxs)(EC,{children:[(0,Xg.jsxs)(jC,{children:[(0,Xg.jsx)(_C,{htmlFor:"inv-zip",children:"Kod pocztowy"}),(0,Xg.jsx)(TC,{id:"inv-zip",value:d,onChange:e=>h(e.target.value),placeholder:"00-000"})]}),(0,Xg.jsxs)(jC,{children:[(0,Xg.jsx)(_C,{htmlFor:"inv-city",children:"Miejscowo\u015b\u0107"}),(0,Xg.jsx)(TC,{id:"inv-city",value:p,onChange:e=>f(e.target.value),placeholder:"Miasto"})]})]}),(0,Xg.jsxs)(jC,{children:[(0,Xg.jsx)(_C,{htmlFor:"inv-country",children:"Kraj"}),(0,Xg.jsx)(TC,{id:"inv-country",value:m,onChange:e=>g(e.target.value)})]}),(0,Xg.jsx)(CC,{type:"submit",disabled:y,children:y?"Zapisywanie\u2026":"Zapisz dane do faktury"})]})})]})};const JC=function(e){let{user:t}=e;const n=(0,r.useMemo)(()=>{var e,n;return null!==(e=null===t||void 0===t||null===(n=t.providerData)||void 0===n?void 0:n.some(e=>"password"===e.providerId))&&void 0!==e&&e},[t]),[i,a]=(0,r.useState)(""),[o,s]=(0,r.useState)(""),[l,c]=(0,r.useState)(""),[u,d]=(0,r.useState)(!1),[h,p]=(0,r.useState)(!1),[f,m]=(0,r.useState)(null),[g,y]=(0,r.useState)(null);return n?(0,Xg.jsxs)(Xg.Fragment,{children:[(0,Xg.jsx)(kC,{children:"Has\u0142o i bezpiecze\u0144stwo"}),(0,Xg.jsx)(zC,{children:"Aby zmieni\u0107 has\u0142o, podaj obecne has\u0142o, potem wybierz nowe."}),g?(0,Xg.jsx)(AC,{$variant:"error",children:g}):null,f?(0,Xg.jsx)(AC,{$variant:"success",children:f}):null,(0,Xg.jsx)("form",{onSubmit:async e=>{if(e.preventDefault(),y(null),m(null),null!==t&&void 0!==t&&t.email)if(o.length<6)y("Nowe has\u0142o musi mie\u0107 co najmniej 6 znak\xf3w.");else if(o===l){p(!0);try{const e=ya.credential(t.email,i);await Ra(t,e),await function(e,t){return La(Yt(e),null,t)}(t,o),a(""),s(""),c(""),m("Has\u0142o zosta\u0142o zmienione.")}catch(n){y(IT(n.code))}finally{p(!1)}}else y("Powt\xf3rzenia has\u0142a nie s\u0105 takie same.")},children:(0,Xg.jsxs)(SC,{children:[(0,Xg.jsxs)(jC,{children:[(0,Xg.jsx)(_C,{htmlFor:"pw-current",children:"Obecne has\u0142o"}),(0,Xg.jsxs)($C,{children:[(0,Xg.jsx)(FC,{id:"pw-current",type:u?"text":"password",value:i,onChange:e=>a(e.target.value),autoComplete:"current-password"}),(0,Xg.jsx)(UC,{type:"button",onClick:()=>d(e=>!e),"aria-label":u?"Ukryj":"Poka\u017c",children:u?(0,Xg.jsx)(Wv,{}):(0,Xg.jsx)(Hv,{})})]})]}),(0,Xg.jsxs)(jC,{children:[(0,Xg.jsx)(_C,{htmlFor:"pw-new",children:"Nowe has\u0142o"}),(0,Xg.jsx)(TC,{id:"pw-new",type:u?"text":"password",value:o,onChange:e=>s(e.target.value),autoComplete:"new-password"})]}),(0,Xg.jsxs)(jC,{children:[(0,Xg.jsx)(_C,{htmlFor:"pw-confirm",children:"Powt\xf3rz nowe has\u0142o"}),(0,Xg.jsx)(TC,{id:"pw-confirm",type:u?"text":"password",value:l,onChange:e=>c(e.target.value),autoComplete:"new-password"})]}),(0,Xg.jsx)(CC,{type:"submit",disabled:h,children:h?"Zapisywanie\u2026":"Zmie\u0144 has\u0142o"})]})})]}):(0,Xg.jsxs)(Xg.Fragment,{children:[(0,Xg.jsx)(kC,{children:"Has\u0142o i bezpiecze\u0144stwo"}),(0,Xg.jsx)(zC,{children:"Zmiana has\u0142a dotyczy kont zalogowanych e-mailem i has\u0142em."}),(0,Xg.jsx)(PC,{children:"To konto korzysta z logowania przez Google (lub innego dostawc\u0119) \u2014 nie ma ustawionego has\u0142a w Firebase. Mo\u017cesz doda\u0107 logowanie has\u0142em w konsoli Firebase (po\u0142\u0105czenie kont) albo zarz\u0105dza\u0107 has\u0142em w Google."})]})};function XC(e){var t;if(!e)return"\u2014";const n=null!==(t=e.seconds)&&void 0!==t?t:e;if("number"===typeof n)return new Date(1e3*n).toLocaleDateString("pl-PL");try{return new Date(e).toLocaleDateString("pl-PL")}catch{return"\u2014"}}const ZC=function(e){let{orders:t,loading:n}=e;return n?(0,Xg.jsxs)(Xg.Fragment,{children:[(0,Xg.jsx)(kC,{children:"Zakupy"}),(0,Xg.jsx)(zC,{children:"\u0141adowanie listy zam\xf3wie\u0144\u2026"})]}):t.length?(0,Xg.jsxs)(Xg.Fragment,{children:[(0,Xg.jsx)(kC,{children:"Zakupy"}),(0,Xg.jsx)(zC,{children:"Historia Twoich zam\xf3wie\u0144."}),(0,Xg.jsx)(LC,{children:(0,Xg.jsxs)(MC,{children:[(0,Xg.jsx)("thead",{children:(0,Xg.jsxs)("tr",{children:[(0,Xg.jsx)("th",{children:"Numer"}),(0,Xg.jsx)("th",{children:"Data"}),(0,Xg.jsx)("th",{children:"Produkt"}),(0,Xg.jsx)("th",{children:"Kwota"}),(0,Xg.jsx)("th",{children:"Status"})]})}),(0,Xg.jsx)("tbody",{children:t.map(e=>(0,Xg.jsxs)("tr",{children:[(0,Xg.jsx)("td",{children:e.orderNumber||e.id}),(0,Xg.jsx)("td",{children:XC(e.createdAt)}),(0,Xg.jsx)("td",{children:e.title||e.productName||"\u2014"}),(0,Xg.jsx)("td",{children:null!=e.amount?`${e.amount} ${e.currency||"PLN"}`:"\u2014"}),(0,Xg.jsx)("td",{children:e.status||"\u2014"})]},e.id))})]})})]}):(0,Xg.jsxs)(Xg.Fragment,{children:[(0,Xg.jsx)(kC,{children:"Zakupy"}),(0,Xg.jsx)(zC,{children:"Tutaj pojawi\u0105 si\u0119 Twoje zam\xf3wienia i p\u0142atno\u015bci \u2014 dane mo\u017cna p\xf3\u017aniej pod\u0142\u0105czy\u0107 (np. Stripe, sklep, panel admina zapisuj\u0105cy do Firestore)."}),(0,Xg.jsxs)(RC,{children:[(0,Xg.jsx)(NC,{children:"\ud83d\uded2"}),(0,Xg.jsx)(DC,{children:"Brak zam\xf3wie\u0144"}),(0,Xg.jsx)(OC,{children:"Gdy z\u0142o\u017cysz pierwsze zam\xf3wienie, zobaczysz je na tej li\u015bcie."})]})]})};function eI(e){var t;if(!e)return"\u2014";const n=null!==(t=e.seconds)&&void 0!==t?t:e;if("number"===typeof n)return new Date(1e3*n).toLocaleDateString("pl-PL");try{return new Date(e).toLocaleDateString("pl-PL")}catch{return"\u2014"}}const tI=function(e){let{invoices:t,loading:n}=e;return n?(0,Xg.jsxs)(Xg.Fragment,{children:[(0,Xg.jsx)(kC,{children:"Faktury"}),(0,Xg.jsx)(zC,{children:"\u0141adowanie listy faktur\u2026"})]}):t.length?(0,Xg.jsxs)(Xg.Fragment,{children:[(0,Xg.jsx)(kC,{children:"Faktury"}),(0,Xg.jsx)(zC,{children:"Twoje faktury i linki do plik\xf3w PDF (je\u015bli dodane)."}),(0,Xg.jsx)(LC,{children:(0,Xg.jsxs)(MC,{children:[(0,Xg.jsx)("thead",{children:(0,Xg.jsxs)("tr",{children:[(0,Xg.jsx)("th",{children:"Numer"}),(0,Xg.jsx)("th",{children:"Data"}),(0,Xg.jsx)("th",{children:"Kwota"}),(0,Xg.jsx)("th",{children:"PDF"})]})}),(0,Xg.jsx)("tbody",{children:t.map(e=>(0,Xg.jsxs)("tr",{children:[(0,Xg.jsx)("td",{children:e.number||e.id}),(0,Xg.jsx)("td",{children:eI(e.issuedAt)}),(0,Xg.jsx)("td",{children:null!=e.amount?`${e.amount} ${e.currency||"PLN"}`:"\u2014"}),(0,Xg.jsx)("td",{children:e.pdfUrl?(0,Xg.jsx)("a",{href:e.pdfUrl,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--gold, #f1d592)"},children:"Pobierz"}):"\u2014"})]},e.id))})]})})]}):(0,Xg.jsxs)(Xg.Fragment,{children:[(0,Xg.jsx)(kC,{children:"Faktury"}),(0,Xg.jsx)(zC,{children:"Wystawione faktury VAT \u2014 dokumenty mo\u017cna tu dodawa\u0107 automatycznie z backendu lub r\u0119cznie z panelu administracyjnego (Firestore)."}),(0,Xg.jsxs)(RC,{children:[(0,Xg.jsx)(NC,{children:"\ud83d\udcc4"}),(0,Xg.jsx)(DC,{children:"Brak faktur"}),(0,Xg.jsx)(OC,{children:"Nie masz jeszcze wystawionych faktur powi\u0105zanych z tym kontem."})]})]})},nI=[{id:"profile",label:"Profil",icon:Ov},{id:"invoice",label:"Dane do faktury",icon:function(e){return Nv({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z"},child:[]}]})(e)}},{id:"security",label:"Has\u0142o i bezpiecze\u0144stwo",icon:Uv},{id:"orders",label:"Zakupy",icon:function(e){return Nv({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"},child:[]}]})(e)}},{id:"invoices",label:"Faktury",icon:function(e){return Nv({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M358.4 3.2L320 48 265.6 3.2a15.9 15.9 0 0 0-19.2 0L192 48 137.6 3.2a15.9 15.9 0 0 0-19.2 0L64 48 25.6 3.2C15-4.7 0 2.8 0 16v480c0 13.2 15 20.7 25.6 12.8L64 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L192 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L320 464l38.4 44.8c10.5 7.9 25.6.4 25.6-12.8V16c0-13.2-15-20.7-25.6-12.8zM320 360c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16z"},child:[]}]})(e)}}];const rI=function(){const{user:e,signOutUser:t}=ty(),n=pe(),[i,a]=(0,r.useState)("profile"),[o,s]=(0,r.useState)(null),[l,c]=(0,r.useState)([]),[u,d]=(0,r.useState)([]),[h,p]=(0,r.useState)(!1),f=(0,r.useCallback)(async()=>{if(!e)return;const t=await async function(e){if(!Yg)return null;const t=await Vg(aC(e));return t.exists()?t.data():null}(e.uid);s(t)},[e]);(0,r.useEffect)(()=>{f()},[f]),(0,r.useEffect)(()=>{e&&"orders"===i&&(p(!0),async function(e){if(!Yg)return[];try{const t=(await Bg(eg(Yg,"users",e,"orders"))).docs.map(e=>({id:e.id,...e.data()}));return sC(t,"createdAt")}catch{return[]}}(e.uid).then(c).finally(()=>p(!1)))},[e,i]),(0,r.useEffect)(()=>{e&&"invoices"===i&&(p(!0),async function(e){if(!Yg)return[];try{const t=(await Bg(eg(Yg,"users",e,"invoices"))).docs.map(e=>({id:e.id,...e.data()}));return sC(t,"issuedAt")}catch{return[]}}(e.uid).then(d).finally(()=>p(!1)))},[e,i]);const m=!Yg;return(0,Xg.jsx)(dC,{children:(0,Xg.jsx)(hC,{children:(0,Xg.jsxs)(pC,{children:[(0,Xg.jsxs)(fC,{children:[(0,Xg.jsxs)(mC,{children:[(0,Xg.jsx)(gC,{children:"Twoje konto"}),(0,Xg.jsx)(yC,{children:(null===e||void 0===e?void 0:e.email)||""})]}),(0,Xg.jsx)(wC,{children:nI.map(e=>{const t=e.icon;return(0,Xg.jsxs)(vC,{type:"button",$active:i===e.id,onClick:()=>a(e.id),children:[(0,Xg.jsx)(t,{"aria-hidden":!0}),e.label]},e.id)})}),(0,Xg.jsxs)(bC,{type:"button",onClick:async()=>{await t(),n("/")},children:[(0,Xg.jsx)(Uv,{"aria-hidden":!0}),"Wyloguj si\u0119"]})]}),(0,Xg.jsxs)(xC,{children:[m?(0,Xg.jsxs)(AC,{$variant:"error",children:["Firestore nie jest skonfigurowany lub brak po\u0142\u0105czenia. W\u0142\u0105cz Firestore w Firebase Console i opublikuj regu\u0142y z pliku"," ",(0,Xg.jsx)("code",{style:{fontSize:"0.8em"},children:"firebase/firestore.rules"}),"."]}):null,"profile"===i?(0,Xg.jsx)(QC,{user:e,profile:o,onSaved:f}):null,"invoice"===i?(0,Xg.jsx)(YC,{user:e,profile:o,onSaved:f}):null,"security"===i?(0,Xg.jsx)(JC,{user:e}):null,"orders"===i?(0,Xg.jsx)(ZC,{orders:l,loading:h}):null,"invoices"===i?(0,Xg.jsx)(tI,{invoices:u,loading:h}):null]})]})})})};const iI=function(e){let{children:t}=e;const{user:n,loading:r}=ty(),i=ue();return r?(0,Xg.jsx)("div",{style:{minHeight:"45vh",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,0.7)",fontSize:"0.95rem"},children:"\u0141adowanie\u2026"}):n?t:(0,Xg.jsx)(Ne,{to:"/login",replace:!0,state:{from:i.pathname}})};const aI=function(){return(0,Xg.jsxs)(Wx,{children:[(0,Xg.jsx)(Hx,{}),(0,Xg.jsx)(tv,{}),(0,Xg.jsx)(fx,{}),(0,Xg.jsx)(Bx,{}),(0,Xg.jsx)(Kx,{children:(0,Xg.jsxs)(Le,{children:[(0,Xg.jsx)(De,{path:"/",element:(0,Xg.jsx)(Uz,{})}),(0,Xg.jsx)(De,{path:"/about",element:(0,Xg.jsx)(OS,{})}),(0,Xg.jsx)(De,{path:"/offer",element:(0,Xg.jsx)(I_,{})}),(0,Xg.jsx)(De,{path:"/offer/:id",element:(0,Xg.jsx)(I_,{})}),(0,Xg.jsx)(De,{path:"/blog",element:(0,Xg.jsx)(Z_,{})}),(0,Xg.jsx)(De,{path:"/blog/:id",element:(0,Xg.jsx)(mT,{})})," ",(0,Xg.jsx)(De,{path:"/testimonials",element:(0,Xg.jsx)(TT,{})})," ",(0,Xg.jsx)(De,{path:"/questions",element:(0,Xg.jsx)(JS,{})}),(0,Xg.jsx)(De,{path:"/cooperation",element:(0,Xg.jsx)(QE,{})}),(0,Xg.jsx)(De,{path:"/login",element:(0,Xg.jsx)(nC,{})}),(0,Xg.jsx)(De,{path:"/register",element:(0,Xg.jsx)(rC,{})}),(0,Xg.jsx)(De,{path:"/forgot-password",element:(0,Xg.jsx)(iC,{})}),(0,Xg.jsx)(De,{path:"/konto",element:(0,Xg.jsx)(iI,{children:(0,Xg.jsx)(rI,{})})})]})}),(0,Xg.jsx)(Vx,{})]})};a.createRoot(document.getElementById("root")).render((0,Xg.jsx)(r.StrictMode,{children:(0,Xg.jsx)(gt,{basename:void 0,children:(0,Xg.jsx)(ey,{children:(0,Xg.jsx)(aI,{})})})}))})();
//# sourceMappingURL=main.89f2979c.js.map