/*! For license information please see main.41cc4fab.js.LICENSE.txt */
(()=>{"use strict";var e={4(e,t,n){var r=n(853),a=n(43),i=n(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(l(e)!==e)throw Error(o(188))}function p(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=p(e)))return t;e=e.sibling}return null}var h=Object.assign,f=Symbol.for("react.element"),m=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),v=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),E=Symbol.for("react.lazy");Symbol.for("react.scope");var _=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var C=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var P=Symbol.iterator;function T(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=P&&e[P]||e["@@iterator"])?e:null}var I=Symbol.for("react.client.reference");function A(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===I?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case w:return"Fragment";case b:return"Profiler";case y:return"StrictMode";case z:return"Suspense";case j:return"SuspenseList";case _:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case g:return"Portal";case v:return e.displayName||"Context";case x:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case S:return null!==(t=e.displayName||null)?t:A(e.type)||"Memo";case E:t=e._payload,e=e._init;try{return A(e(t))}catch(Kn){}}return null}var R=Array.isArray,O=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D={pending:!1,data:null,method:null,action:null},$=[],L=-1;function M(e){return{current:e}}function F(e){0>L||(e.current=$[L],$[L]=null,L--)}function U(e,t){L++,$[L]=e.current,e.current=t}var B,H,W=M(null),V=M(null),K=M(null),G=M(null);function q(e,t){switch(U(K,t),U(V,e),U(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?yd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=bd(t=yd(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(W),U(W,e)}function Y(){F(W),F(V),F(K)}function Q(e){null!==e.memoizedState&&U(G,e);var t=W.current,n=bd(t,e.type);t!==n&&(U(V,e),U(W,n))}function J(e){V.current===e&&(F(W),F(V)),G.current===e&&(F(G),dp._currentValue=D)}function X(e){if(void 0===B)try{throw Error()}catch(Kn){var t=Kn.stack.trim().match(/\n( *(at )?)/);B=t&&t[1]||"",H=-1<Kn.stack.indexOf("\n    at")?" (<anonymous>)":-1<Kn.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+B+e+H}var Z=!1;function ee(e,t){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(Kn){var r=Kn}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}}else{try{throw Error()}catch(i){r=i}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(o){if(o&&r&&"string"===typeof o.stack)return[o.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),o=i[0],s=i[1];if(o&&s){var l=o.split("\n"),c=s.split("\n");for(a=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(r===l.length||a===c.length)for(r=l.length-1,a=c.length-1;1<=r&&0<=a&&l[r]!==c[a];)a--;for(;1<=r&&0<=a;r--,a--)if(l[r]!==c[a]){if(1!==r||1!==a)do{if(r--,0>--a||l[r]!==c[a]){var u="\n"+l[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=a);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?X(n):""}function te(e,t){switch(e.tag){case 26:case 27:case 5:return X(e.type);case 16:return X("Lazy");case 13:return e.child!==t&&null!==t?X("Suspense Fallback"):X("Suspense");case 19:return X("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return X("Activity");default:return""}}function ne(e){try{var t="",n=null;do{t+=te(e,n),n=e,e=e.return}while(e);return t}catch(Kn){return"\nError generating stack: "+Kn.message+"\n"+Kn.stack}}var re=Object.prototype.hasOwnProperty,ae=r.unstable_scheduleCallback,ie=r.unstable_cancelCallback,oe=r.unstable_shouldYield,se=r.unstable_requestPaint,le=r.unstable_now,ce=r.unstable_getCurrentPriorityLevel,ue=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,pe=r.unstable_NormalPriority,he=r.unstable_LowPriority,fe=r.unstable_IdlePriority,me=r.log,ge=r.unstable_setDisableYieldValue,we=null,ye=null;function be(e){if("function"===typeof me&&ge(e),ye&&"function"===typeof ye.setStrictMode)try{ye.setStrictMode(we,e)}catch(t){}}var xe=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(ve(e)/ke|0)|0},ve=Math.log,ke=Math.LN2;var ze=256,je=262144,Se=4194304;function Ee(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _e(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=134217727&r;return 0!==s?0!==(r=s&~i)?a=Ee(r):0!==(o&=s)?a=Ee(o):n||0!==(n=s&~e)&&(a=Ee(n)):0!==(s=r&~i)?a=Ee(s):0!==o?a=Ee(o):n||0!==(n=r&~e)&&(a=Ee(n)),0===a?0:0!==t&&t!==a&&0===(t&i)&&((i=a&-a)>=(n=t&-t)||32===i&&0!==(4194048&n))?t:a}function Ce(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Pe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Te(){var e=Se;return 0===(62914560&(Se<<=1))&&(Se=4194304),e}function Ie(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ae(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Re(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-xe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function Oe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Ne(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:De(n))&(e.suspendedLanes|t))?0:n}function De(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $e(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Le(){var e=N.p;return 0!==e?e:void 0===(e=window.event)?32:_p(e.type)}function Me(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var Fe=Math.random().toString(36).slice(2),Ue="__reactFiber$"+Fe,Be="__reactProps$"+Fe,He="__reactContainer$"+Fe,We="__reactEvents$"+Fe,Ve="__reactListeners$"+Fe,Ke="__reactHandles$"+Fe,Ge="__reactResources$"+Fe,qe="__reactMarker$"+Fe;function Ye(e){delete e[Ue],delete e[Be],delete e[We],delete e[Ve],delete e[Ke]}function Qe(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[He]||n[Ue]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=$d(e);null!==e;){if(n=e[Ue])return n;e=$d(e)}return t}n=(e=n).parentNode}return null}function Je(e){if(e=e[Ue]||e[He]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function Xe(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function Ze(e){var t=e[Ge];return t||(t=e[Ge]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[qe]=!0}var tt=new Set,nt={};function rt(e,t){at(e,t),at(e+"Capture",t)}function at(e,t){for(nt[e]=t,e=0;e<t.length;e++)tt.add(t[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},st={};function lt(e,t,n){if(a=t,re.call(st,a)||!re.call(ot,a)&&(it.test(a)?st[a]=!0:(ot[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function ct(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function ut(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function pt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ht(e){if(!e._valueTracker){var t=pt(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pt(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function mt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var gt=/[\n"\\]/g;function wt(e){return e.replace(gt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function yt(e,t,n,r,a,i,o,s){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?xt(e,o,dt(t)):null!=n?xt(e,o,dt(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=i&&(e.defaultChecked=!!i),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+dt(s):e.removeAttribute("name")}function bt(e,t,n,r,a,i,o,s){if(null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.type=i),null!=t||null!=n){if(!("submit"!==i&&"reset"!==i||void 0!==t&&null!==t))return void ht(e);n=null!=n?""+dt(n):"",t=null!=t?""+dt(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o),ht(e)}function xt(e,t,n){"number"===t&&mt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function kt(e,t,n){null==t||((t=""+dt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+dt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function zt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(R(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=dt(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),ht(e)}function jt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var St=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Et(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||St.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function _t(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Et(e,a,r)}else for(var i in t)t.hasOwnProperty(i)&&Et(e,i,t[i])}function Ct(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function It(e){return Tt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function At(){}var Rt=null;function Ot(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Nt=null,Dt=null;function $t(e){var t=Je(e);if(t&&(e=t.stateNode)){var n=e[Be]||null;e:switch(e=t.stateNode,t.type){case"input":if(yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+wt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Be]||null;if(!a)throw Error(o(90));yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ft(r)}break e;case"textarea":kt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&vt(e,!!n.multiple,t,!1)}}}var Lt=!1;function Mt(e,t,n){if(Lt)return e(t,n);Lt=!0;try{return e(t)}finally{if(Lt=!1,(null!==Nt||null!==Dt)&&(eu(),Nt&&(t=Nt,e=Dt,Dt=Nt=null,$t(t),e)))for(t=0;t<e.length;t++)$t(e[t])}}function Ft(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Be]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Ut=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Bt=!1;if(Ut)try{var Ht={};Object.defineProperty(Ht,"passive",{get:function(){Bt=!0}}),window.addEventListener("test",Ht,Ht),window.removeEventListener("test",Ht,Ht)}catch(Xp){Bt=!1}var Wt=null,Vt=null,Kt=null;function Gt(){if(Kt)return Kt;var e,t,n=Vt,r=n.length,a="value"in Wt?Wt.value:Wt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Kt=a.slice(e,1<t?1-t:void 0)}function qt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Yt(){return!0}function Qt(){return!1}function Jt(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Yt:Qt,this.isPropagationStopped=Qt,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Yt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Yt)},persist:function(){},isPersistent:Yt}),t}var Xt,Zt,en,tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nn=Jt(tn),rn=h({},tn,{view:0,detail:0}),an=Jt(rn),on=h({},rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&"mousemove"===e.type?(Xt=e.screenX-en.screenX,Zt=e.screenY-en.screenY):Zt=Xt=0,en=e),Xt)},movementY:function(e){return"movementY"in e?e.movementY:Zt}}),sn=Jt(on),ln=Jt(h({},on,{dataTransfer:0})),cn=Jt(h({},rn,{relatedTarget:0})),un=Jt(h({},tn,{animationName:0,elapsedTime:0,pseudoElement:0})),dn=Jt(h({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),pn=Jt(h({},tn,{data:0})),hn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=mn[e])&&!!t[e]}function wn(){return gn}var yn=Jt(h({},rn,{key:function(e){if(e.key){var t=hn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=qt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?fn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wn,charCode:function(e){return"keypress"===e.type?qt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?qt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),bn=Jt(h({},on,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),xn=Jt(h({},rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wn})),vn=Jt(h({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),kn=Jt(h({},on,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),zn=Jt(h({},tn,{newState:0,oldState:0})),jn=[9,13,27,32],Sn=Ut&&"CompositionEvent"in window,En=null;Ut&&"documentMode"in document&&(En=document.documentMode);var _n=Ut&&"TextEvent"in window&&!En,Cn=Ut&&(!Sn||En&&8<En&&11>=En),Pn=String.fromCharCode(32),Tn=!1;function In(e,t){switch(e){case"keyup":return-1!==jn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function An(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Rn=!1;var On={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!On[e.type]:"textarea"===t}function Dn(e,t,n,r){Nt?Dt?Dt.push(r):Dt=[r]:Nt=r,0<(t=ad(t,"onChange")).length&&(n=new nn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,Ln=null;function Mn(e){Qu(e,0)}function Fn(e){if(ft(Xe(e)))return e}function Un(e,t){if("change"===e)return t}var Bn=!1;if(Ut){var Hn;if(Ut){var Wn="oninput"in document;if(!Wn){var Vn=document.createElement("div");Vn.setAttribute("oninput","return;"),Wn="function"===typeof Vn.oninput}Hn=Wn}else Hn=!1;Bn=Hn&&(!document.documentMode||9<document.documentMode)}function Gn(){$n&&($n.detachEvent("onpropertychange",qn),Ln=$n=null)}function qn(e){if("value"===e.propertyName&&Fn(Ln)){var t=[];Dn(t,Ln,e,Ot(e)),Mt(Mn,t)}}function Yn(e,t,n){"focusin"===e?(Gn(),Ln=n,($n=t).attachEvent("onpropertychange",qn)):"focusout"===e&&Gn()}function Qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Fn(Ln)}function Jn(e,t){if("click"===e)return Fn(t)}function Xn(e,t){if("input"===e||"change"===e)return Fn(t)}var Zn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function er(e,t){if(Zn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!re.call(t,a)||!Zn(e[a],t[a]))return!1}return!0}function tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nr(e,t){var n,r=tr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=tr(r)}}function rr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?rr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ar(e){for(var t=mt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=mt((e=t.contentWindow).document)}return t}function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var or=Ut&&"documentMode"in document&&11>=document.documentMode,sr=null,lr=null,cr=null,ur=!1;function dr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ur||null==sr||sr!==mt(r)||("selectionStart"in(r=sr)&&ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},cr&&er(cr,r)||(cr=r,0<(r=ad(lr,"onSelect")).length&&(t=new nn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=sr)))}function pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},fr={},mr={};function gr(e){if(fr[e])return fr[e];if(!hr[e])return e;var t,n=hr[e];for(t in n)if(n.hasOwnProperty(t)&&t in mr)return fr[e]=n[t];return e}Ut&&(mr=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);var wr=gr("animationend"),yr=gr("animationiteration"),br=gr("animationstart"),xr=gr("transitionrun"),vr=gr("transitionstart"),kr=gr("transitioncancel"),zr=gr("transitionend"),jr=new Map,Sr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){jr.set(e,t),rt(t,[e])}Sr.push("scrollEnd");var _r="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},Cr=[],Pr=0,Tr=0;function Ir(){for(var e=Pr,t=Tr=Pr=0;t<e;){var n=Cr[t];Cr[t++]=null;var r=Cr[t];Cr[t++]=null;var a=Cr[t];Cr[t++]=null;var i=Cr[t];if(Cr[t++]=null,null!==r&&null!==a){var o=r.pending;null===o?a.next=a:(a.next=o.next,o.next=a),r.pending=a}0!==i&&Nr(n,a,i)}}function Ar(e,t,n,r){Cr[Pr++]=e,Cr[Pr++]=t,Cr[Pr++]=n,Cr[Pr++]=r,Tr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Rr(e,t,n,r){return Ar(e,t,n,r),Dr(e)}function Or(e,t){return Ar(e,null,null,t),Dr(e)}function Nr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,i=e.return;null!==i;)i.childLanes|=n,null!==(r=i.alternate)&&(r.childLanes|=n),22===i.tag&&(null===(e=i.stateNode)||1&e._visibility||(a=!0)),e=i,i=i.return;return 3===e.tag?(i=e.stateNode,a&&null!==t&&(a=31-xe(n),null===(r=(e=i.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),i):null}function Dr(e){if(50<Vc)throw Vc=0,Kc=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var $r={};function Lr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mr(e,t,n,r){return new Lr(e,t,n,r)}function Fr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ur(e,t){var n=e.alternate;return null===n?((n=Mr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Br(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Hr(e,t,n,r,a,i){var s=0;if(r=e,"function"===typeof e)Fr(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,W.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case _:return(e=Mr(31,n,t,a)).elementType=_,e.lanes=i,e;case w:return Wr(n.children,a,i,t);case y:s=8,a|=24;break;case b:return(e=Mr(12,n,t,2|a)).elementType=b,e.lanes=i,e;case z:return(e=Mr(13,n,t,a)).elementType=z,e.lanes=i,e;case j:return(e=Mr(19,n,t,a)).elementType=j,e.lanes=i,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case v:s=10;break e;case x:s=9;break e;case k:s=11;break e;case S:s=14;break e;case E:s=16,r=null;break e}s=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=Mr(s,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Wr(e,t,n,r){return(e=Mr(7,e,r,t)).lanes=n,e}function Vr(e,t,n){return(e=Mr(6,e,null,t)).lanes=n,e}function Kr(e){var t=Mr(18,null,null,0);return t.stateNode=e,t}function Gr(e,t,n){return(t=Mr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qr=new WeakMap;function Yr(e,t){if("object"===typeof e&&null!==e){var n=qr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ne(t)},qr.set(e,t),t)}return{value:e,source:t,stack:ne(t)}}var Qr=[],Jr=0,Xr=null,Zr=0,ea=[],ta=0,na=null,ra=1,aa="";function ia(e,t){Qr[Jr++]=Zr,Qr[Jr++]=Xr,Xr=e,Zr=t}function oa(e,t,n){ea[ta++]=ra,ea[ta++]=aa,ea[ta++]=na,na=e;var r=ra;e=aa;var a=32-xe(r)-1;r&=~(1<<a),n+=1;var i=32-xe(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,ra=1<<32-xe(t)+a|n<<a|r,aa=i+e}else ra=1<<i|n<<a|r,aa=e}function sa(e){null!==e.return&&(ia(e,1),oa(e,1,0))}function la(e){for(;e===Xr;)Xr=Qr[--Jr],Qr[Jr]=null,Zr=Qr[--Jr],Qr[Jr]=null;for(;e===na;)na=ea[--ta],ea[ta]=null,aa=ea[--ta],ea[ta]=null,ra=ea[--ta],ea[ta]=null}function ca(e,t){ea[ta++]=ra,ea[ta++]=aa,ea[ta++]=na,ra=t.id,aa=t.overflow,na=e}var ua=null,da=null,pa=!1,ha=null,fa=!1,ma=Error(o(519));function ga(e){throw ka(Yr(Error(o(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),ma}function wa(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ue]=e,t[Be]=r,n){case"dialog":Ju("cancel",t),Ju("close",t);break;case"iframe":case"object":case"embed":Ju("load",t);break;case"video":case"audio":for(n=0;n<qu.length;n++)Ju(qu[n],t);break;case"source":Ju("error",t);break;case"img":case"image":case"link":Ju("error",t),Ju("load",t);break;case"details":Ju("toggle",t);break;case"input":Ju("invalid",t),bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ju("invalid",t);break;case"textarea":Ju("invalid",t),zt(t,r.value,r.defaultValue,r.children)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||ud(t.textContent,n)?(null!=r.popover&&(Ju("beforetoggle",t),Ju("toggle",t)),null!=r.onScroll&&Ju("scroll",t),null!=r.onScrollEnd&&Ju("scrollend",t),null!=r.onClick&&(t.onclick=At),t=!0):t=!1,t||ga(e,!0)}function ya(e){for(ua=e.return;ua;)switch(ua.tag){case 5:case 31:case 13:return void(fa=!1);case 27:case 3:return void(fa=!0);default:ua=ua.return}}function ba(e){if(e!==ua)return!1;if(!pa)return ya(e),pa=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||xd(e.type,e.memoizedProps)),t=!t),t&&da&&ga(e),ya(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));da=Dd(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));da=Dd(e)}else 27===n?(n=da,_d(e.type)?(e=Nd,Nd=null,da=e):da=n):da=ua?Od(e.stateNode.nextSibling):null;return!0}function xa(){da=ua=null,pa=!1}function va(){var e=ha;return null!==e&&(null===Ic?Ic=e:Ic.push.apply(Ic,e),ha=null),e}function ka(e){null===ha?ha=[e]:ha.push(e)}var za=M(null),ja=null,Sa=null;function Ea(e,t,n){U(za,t._currentValue),t._currentValue=n}function _a(e){e._currentValue=za.current,F(za)}function Ca(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pa(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var i=a.dependencies;if(null!==i){var s=a.child;i=i.firstContext;e:for(;null!==i;){var l=i;i=a;for(var c=0;c<t.length;c++)if(l.context===t[c]){i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),Ca(i.return,n,e),r||(s=null);break e}i=l.next}}else if(18===a.tag){if(null===(s=a.return))throw Error(o(341));s.lanes|=n,null!==(i=s.alternate)&&(i.lanes|=n),Ca(s,n,e),s=null}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===e){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}}function Ta(e,t,n,r){e=null;for(var a=t,i=!1;null!==a;){if(!i)if(0!==(524288&a.flags))i=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var s=a.alternate;if(null===s)throw Error(o(387));if(null!==(s=s.memoizedProps)){var l=a.type;Zn(a.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(a===G.current){if(null===(s=a.alternate))throw Error(o(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(dp):e=[dp])}a=a.return}null!==e&&Pa(t,e,n,r),t.flags|=262144}function Ia(e){for(e=e.firstContext;null!==e;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Aa(e){ja=e,Sa=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Ra(e){return Na(ja,e)}function Oa(e,t){return null===ja&&Aa(e),Na(e,t)}function Na(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Sa){if(null===e)throw Error(o(308));Sa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sa=Sa.next=t;return n}var Da="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},$a=r.unstable_scheduleCallback,La=r.unstable_NormalPriority,Ma={$$typeof:v,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fa(){return{controller:new Da,data:new Map,refCount:0}}function Ua(e){e.refCount--,0===e.refCount&&$a(La,function(){e.controller.abort()})}var Ba=null,Ha=0,Wa=0,Va=null;function Ka(){if(0===--Ha&&null!==Ba){null!==Va&&(Va.status="fulfilled");var e=Ba;Ba=null,Wa=0,Va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ga=O.S;O.S=function(e,t){Oc=le(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Ba){var n=Ba=[];Ha=0,Wa=Hu(),Va={status:"pending",value:void 0,then:function(e){n.push(e)}}}Ha++,t.then(Ka,Ka)}(0,t),null!==Ga&&Ga(e,t)};var qa=M(null);function Ya(){var e=qa.current;return null!==e?e:mc.pooledCache}function Qa(e,t){U(qa,null===t?qa.current:t.pool)}function Ja(){var e=Ya();return null===e?null:{parent:Ma._currentValue,pool:e}}var Xa=Error(o(460)),Za=Error(o(474)),ei=Error(o(542)),ti={then:function(){}};function ni(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ri(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(At,At),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw si(e=t.reason),e;default:if("string"===typeof t.status)t.then(At,At);else{if(null!==(e=mc)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw si(e=t.reason),e}throw ii=t,Xa}}function ai(e){try{return(0,e._init)(e._payload)}catch(Kn){if(null!==Kn&&"object"===typeof Kn&&"function"===typeof Kn.then)throw ii=Kn,Xa;throw Kn}}var ii=null;function oi(){if(null===ii)throw Error(o(459));var e=ii;return ii=null,e}function si(e){if(e===Xa||e===ei)throw Error(o(483))}var li=null,ci=0;function ui(e){var t=ci;return ci+=1,null===li&&(li=[]),ri(li,e,t)}function di(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function pi(e,t){if(t.$$typeof===f)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Ur(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Vr(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===w?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===E&&ai(i)===t.type)?(di(t=a(t,n.props),n),t.return=e,t):(di(t=Hr(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Gr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Wr(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Vr(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case m:return di(n=Hr(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case g:return(t=Gr(t,e.mode,n)).return=e,t;case E:return p(e,t=ai(t),n)}if(R(t)||T(t))return(t=Wr(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return p(e,ui(t),n);if(t.$$typeof===v)return p(e,Oa(e,t),n);pi(e,t)}return null}function h(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case m:return n.key===a?c(e,t,n,r):null;case g:return n.key===a?u(e,t,n,r):null;case E:return h(e,t,n=ai(n),r)}if(R(n)||T(n))return null!==a?null:d(e,t,n,r,null);if("function"===typeof n.then)return h(e,t,ui(n),r);if(n.$$typeof===v)return h(e,t,Oa(e,n),r);pi(e,n)}return null}function f(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case m:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case g:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case E:return f(e,t,n,r=ai(r),a)}if(R(r)||T(r))return d(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return f(e,t,n,ui(r),a);if(r.$$typeof===v)return f(e,t,n,Oa(t,r),a);pi(t,r)}return null}function y(l,c,u,d){if("object"===typeof u&&null!==u&&u.type===w&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case m:e:{for(var b=u.key;null!==c;){if(c.key===b){if((b=u.type)===w){if(7===c.tag){n(l,c.sibling),(d=a(c,u.props.children)).return=l,l=d;break e}}else if(c.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===E&&ai(b)===c.type){n(l,c.sibling),di(d=a(c,u.props),u),d.return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}u.type===w?((d=Wr(u.props.children,l.mode,d,u.key)).return=l,l=d):(di(d=Hr(u.type,u.key,u.props,null,l.mode,d),u),d.return=l,l=d)}return s(l);case g:e:{for(b=u.key;null!==c;){if(c.key===b){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(d=a(c,u.children||[])).return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}(d=Gr(u,l.mode,d)).return=l,l=d}return s(l);case E:return y(l,c,u=ai(u),d)}if(R(u))return function(a,o,s,l){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var w=h(a,d,s[m],l);if(null===w){null===d&&(d=g);break}e&&d&&null===w.alternate&&t(a,d),o=i(w,o,m),null===u?c=w:u.sibling=w,u=w,d=g}if(m===s.length)return n(a,d),pa&&ia(a,m),c;if(null===d){for(;m<s.length;m++)null!==(d=p(a,s[m],l))&&(o=i(d,o,m),null===u?c=d:u.sibling=d,u=d);return pa&&ia(a,m),c}for(d=r(d);m<s.length;m++)null!==(g=f(d,a,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=i(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(a,e)}),pa&&ia(a,m),c}(l,c,u,d);if(T(u)){if("function"!==typeof(b=T(u)))throw Error(o(150));return function(a,s,l,c){if(null==l)throw Error(o(151));for(var u=null,d=null,m=s,g=s=0,w=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(w=m,m=null):w=m.sibling;var b=h(a,m,y.value,c);if(null===b){null===m&&(m=w);break}e&&m&&null===b.alternate&&t(a,m),s=i(b,s,g),null===d?u=b:d.sibling=b,d=b,m=w}if(y.done)return n(a,m),pa&&ia(a,g),u;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=p(a,y.value,c))&&(s=i(y,s,g),null===d?u=y:d.sibling=y,d=y);return pa&&ia(a,g),u}for(m=r(m);!y.done;g++,y=l.next())null!==(y=f(m,a,g,y.value,c))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=i(y,s,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach(function(e){return t(a,e)}),pa&&ia(a,g),u}(l,c,u=b.call(u),d)}if("function"===typeof u.then)return y(l,c,ui(u),d);if(u.$$typeof===v)return y(l,c,Oa(l,u),d);pi(l,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(d=a(c,u)).return=l,l=d):(n(l,c),(d=Vr(u,l.mode,d)).return=l,l=d),s(l)):n(l,c)}return function(e,t,n,r){try{ci=0;var a=y(e,t,n,r);return li=null,a}catch(Kn){if(Kn===Xa||Kn===ei)throw Kn;var i=Mr(29,Kn,null,e.mode);return i.lanes=r,i.return=e,i}}}var fi=hi(!0),mi=hi(!1),gi=!1;function wi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&fc)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Dr(e),Nr(e,null,n),t}return Ar(e,r,t,n),Dr(e)}function vi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Oe(e,n)}}function ki(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var zi=!1;function ji(){if(zi){if(null!==Va)throw Va}}function Si(e,t,n,r){zi=!1;var a=e.updateQueue;gi=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(null!==s){a.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?i=c:o.next=c,o=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==i){var d=a.baseState;for(o=0,u=c=l=null,s=i;;){var p=-536870913&s.lane,f=p!==s.lane;if(f?(wc&p)===p:(r&p)===p){0!==p&&p===Wa&&(zi=!0),null!==u&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var m=e,g=s;p=t;var w=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(w,d,p);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(p="function"===typeof(m=g.payload)?m.call(w,d,p):m)||void 0===p)break e;d=h({},d,p);break e;case 2:gi=!0}}null!==(p=s.callback)&&(e.flags|=64,f&&(e.flags|=8192),null===(f=a.callbacks)?a.callbacks=[p]:f.push(p))}else f={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,o|=p;if(null===(s=s.next)){if(null===(s=a.shared.pending))break;s=(f=s).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}null===u&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null===i&&(a.shared.lanes=0),Sc|=o,e.lanes=o,e.memoizedState=d}}function Ei(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function _i(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)Ei(n[e],t)}var Ci=M(null),Pi=M(0);function Ti(e,t){U(Pi,e=zc),U(Ci,t),zc=e|t.baseLanes}function Ii(){U(Pi,zc),U(Ci,Ci.current)}function Ai(){zc=Pi.current,F(Ci),F(Pi)}var Ri=M(null),Oi=null;function Ni(e){var t=e.alternate;U(Fi,1&Fi.current),U(Ri,e),null===Oi&&(null===t||null!==Ci.current||null!==t.memoizedState)&&(Oi=e)}function Di(e){U(Fi,Fi.current),U(Ri,e),null===Oi&&(Oi=e)}function $i(e){22===e.tag?(U(Fi,Fi.current),U(Ri,e),null===Oi&&(Oi=e)):Li()}function Li(){U(Fi,Fi.current),U(Ri,Ri.current)}function Mi(e){F(Ri),Oi===e&&(Oi=null),F(Fi)}var Fi=M(0);function Ui(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Ad(n)||Rd(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child;continue}}else if(0!==(128&t.flags))return t;if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bi=0,Hi=null,Wi=null,Vi=null,Ki=!1,Gi=!1,qi=!1,Yi=0,Qi=0,Ji=null,Xi=0;function Zi(){throw Error(o(321))}function eo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Zn(e[n],t[n]))return!1;return!0}function to(e,t,n,r,a,i){return Bi=i,Hi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=null===e||null===e.memoizedState?ws:ys,qi=!1,i=n(r,a),qi=!1,Gi&&(i=ro(t,n,r,a)),no(e),i}function no(e){O.H=gs;var t=null!==Wi&&null!==Wi.next;if(Bi=0,Vi=Wi=Hi=null,Ki=!1,Qi=0,Ji=null,t)throw Error(o(300));null===e||Os||null!==(e=e.dependencies)&&Ia(e)&&(Os=!0)}function ro(e,t,n,r){Hi=e;var a=0;do{if(Gi&&(Ji=null),Qi=0,Gi=!1,25<=a)throw Error(o(301));if(a+=1,Vi=Wi=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}O.H=bs,i=t(n,r)}while(Gi);return i}function ao(){var e=O.H,t=e.useState()[0];return t="function"===typeof t.then?uo(t):t,e=e.useState()[0],(null!==Wi?Wi.memoizedState:null)!==e&&(Hi.flags|=1024),t}function io(){var e=0!==Yi;return Yi=0,e}function oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function so(e){if(Ki){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Ki=!1}Bi=0,Vi=Wi=Hi=null,Gi=!1,Qi=Yi=0,Ji=null}function lo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Vi?Hi.memoizedState=Vi=e:Vi=Vi.next=e,Vi}function co(){if(null===Wi){var e=Hi.alternate;e=null!==e?e.memoizedState:null}else e=Wi.next;var t=null===Vi?Hi.memoizedState:Vi.next;if(null!==t)Vi=t,Wi=e;else{if(null===e){if(null===Hi.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(Wi=e).memoizedState,baseState:Wi.baseState,baseQueue:Wi.baseQueue,queue:Wi.queue,next:null},null===Vi?Hi.memoizedState=Vi=e:Vi=Vi.next=e}return Vi}function uo(e){var t=Qi;return Qi+=1,null===Ji&&(Ji=[]),e=ri(Ji,e,t),t=Hi,null===(null===Vi?t.memoizedState:Vi.next)&&(t=t.alternate,O.H=null===t||null===t.memoizedState?ws:ys),e}function po(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return uo(e);if(e.$$typeof===v)return Ra(e)}throw Error(o(438,String(e)))}function ho(e){var t=null,n=Hi.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Hi.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Hi.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=C;return t.index++,n}function fo(e,t){return"function"===typeof t?t(e):t}function mo(e){return go(co(),Wi,e)}function go(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var a=e.baseQueue,i=r.pending;if(null!==i){if(null!==a){var s=a.next;a.next=i.next,i.next=s}t.baseQueue=a=i,r.pending=null}if(i=e.baseState,null===a)e.memoizedState=i;else{var l=s=null,c=null,u=t=a.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(wc&p)===p:(Bi&p)===p){var h=u.revertLane;if(0===h)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Wa&&(d=!0);else{if((Bi&h)===h){u=u.next,h===Wa&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=p,s=i):c=c.next=p,Hi.lanes|=h,Sc|=h}p=u.action,qi&&n(i,p),i=u.hasEagerState?u.eagerState:n(i,p)}else h={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=h,s=i):c=c.next=h,Hi.lanes|=p,Sc|=p;u=u.next}while(null!==u&&u!==t);if(null===c?s=i:c.next=l,!Zn(i,e.memoizedState)&&(Os=!0,d&&null!==(n=Va)))throw n;e.memoizedState=i,e.baseState=s,e.baseQueue=c,r.lastRenderedState=i}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function wo(e){var t=co(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var s=a=a.next;do{i=e(i,s.action),s=s.next}while(s!==a);Zn(i,t.memoizedState)||(Os=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function yo(e,t,n){var r=Hi,a=co(),i=pa;if(i){if(void 0===n)throw Error(o(407));n=n()}else n=t();var s=!Zn((Wi||a).memoizedState,n);if(s&&(a.memoizedState=n,Os=!0),a=a.queue,Ho(vo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||null!==Vi&&1&Vi.memoizedState.tag){if(r.flags|=2048,Lo(9,{destroy:void 0},xo.bind(null,r,a,n,t),null),null===mc)throw Error(o(349));i||0!==(127&Bi)||bo(r,t,n)}return n}function bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Hi.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Hi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function xo(e,t,n,r){t.value=n,t.getSnapshot=r,ko(t)&&zo(e)}function vo(e,t,n){return n(function(){ko(t)&&zo(e)})}function ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zn(e,n)}catch(r){return!0}}function zo(e){var t=Or(e,2);null!==t&&Yc(t,e,2)}function jo(e){var t=lo();if("function"===typeof e){var n=e;if(e=n(),qi){be(!0);try{n()}finally{be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:e},t}function So(e,t,n,r){return e.baseState=n,go(e,Wi,"function"===typeof r?r:fo)}function Eo(e,t,n,r,a){if(hs(e))throw Error(o(485));if(null!==(e=t.action)){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==O.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,_o(t,i)):(i.next=n.next,t.pending=n.next=i)}}function _o(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var i=O.T,o={};O.T=o;try{var s=n(a,r),l=O.S;null!==l&&l(o,s),Co(e,t,s)}catch(c){To(e,t,c)}finally{null!==i&&null!==o.types&&(i.types=o.types),O.T=i}}else try{Co(e,t,i=n(a,r))}catch(u){To(e,t,u)}}function Co(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){Po(e,t,n)},function(n){return To(e,t,n)}):Po(e,t,n)}function Po(e,t,n){t.status="fulfilled",t.value=n,Io(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,_o(e,n)))}function To(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,Io(t),t=t.next}while(t!==r)}e.action=null}function Io(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ao(e,t){return t}function Ro(e,t){if(pa){var n=mc.formState;if(null!==n){e:{var r=Hi;if(pa){if(da){t:{for(var a=da,i=fa;8!==a.nodeType;){if(!i){a=null;break t}if(null===(a=Od(a.nextSibling))){a=null;break t}}a="F!"===(i=a.data)||"F"===i?a:null}if(a){da=Od(a.nextSibling),r="F!"===a.data;break e}}ga(r)}r=!1}r&&(t=n[0])}}return(n=lo()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},n.queue=r,n=us.bind(null,Hi,r),r.dispatch=n,r=jo(!1),i=ps.bind(null,Hi,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=lo()).queue=a,n=Eo.bind(null,Hi,a,i,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Oo(e){return No(co(),Wi,e)}function No(e,t,n){if(t=go(e,t,Ao)[0],e=mo(fo)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=uo(t)}catch(Kn){if(Kn===Xa)throw ei;throw Kn}else r=t;var a=(t=co()).queue,i=a.dispatch;return n!==t.memoizedState&&(Hi.flags|=2048,Lo(9,{destroy:void 0},Do.bind(null,a,n),null)),[r,i,e]}function Do(e,t){e.action=t}function $o(e){var t=co(),n=Wi;if(null!==n)return No(t,n,e);co(),t=t.memoizedState;var r=(n=co()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Lo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=Hi.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Hi.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Mo(){return co().memoizedState}function Fo(e,t,n,r){var a=lo();Hi.flags|=e,a.memoizedState=Lo(1|t,{destroy:void 0},n,void 0===r?null:r)}function Uo(e,t,n,r){var a=co();r=void 0===r?null:r;var i=a.memoizedState.inst;null!==Wi&&null!==r&&eo(r,Wi.memoizedState.deps)?a.memoizedState=Lo(t,i,n,r):(Hi.flags|=e,a.memoizedState=Lo(1|t,i,n,r))}function Bo(e,t){Fo(8390656,8,e,t)}function Ho(e,t){Uo(2048,8,e,t)}function Wo(e){var t=co().memoizedState;return function(e){Hi.flags|=4;var t=Hi.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},Hi.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&fc))throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Vo(e,t){return Uo(4,2,e,t)}function Ko(e,t){return Uo(4,4,e,t)}function Go(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function qo(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Uo(4,4,Go.bind(null,t,e),n)}function Yo(){}function Qo(e,t){var n=co();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jo(e,t){var n=co();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&eo(t,r[1]))return r[0];if(r=e(),qi){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r}function Xo(e,t,n){return void 0===n||0!==(1073741824&Bi)&&0===(261930&wc)?e.memoizedState=t:(e.memoizedState=n,e=qc(),Hi.lanes|=e,Sc|=e,n)}function Zo(e,t,n,r){return Zn(n,t)?n:null!==Ci.current?(e=Xo(e,n,r),Zn(e,t)||(Os=!0),e):0===(42&Bi)||0!==(1073741824&Bi)&&0===(261930&wc)?(Os=!0,e.memoizedState=n):(e=qc(),Hi.lanes|=e,Sc|=e,t)}function es(e,t,n,r,a){var i=N.p;N.p=0!==i&&8>i?i:8;var o=O.T,s={};O.T=s,ps(e,!1,t,n);try{var l=a(),c=O.S;if(null!==c&&c(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)ds(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(l,r),Gc());else ds(e,t,r,Gc())}catch(u){ds(e,t,{then:function(){},status:"rejected",reason:u},Gc())}finally{N.p=i,null!==o&&null!==s.types&&(o.types=s.types),O.T=o}}function ts(){}function ns(e,t,n,r){if(5!==e.tag)throw Error(o(476));var a=rs(e).queue;es(e,a,t,D,null===n?ts:function(){return as(e),n(r)})}function rs(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:D,baseState:D,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:D},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function as(e){var t=rs(e);null===t.next&&(t=e.alternate.memoizedState),ds(e,t.next.queue,{},Gc())}function is(){return Ra(dp)}function os(){return co().memoizedState}function ss(){return co().memoizedState}function ls(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Gc(),r=xi(t,e=bi(n),n);return null!==r&&(Yc(r,t,n),vi(r,t,n)),t={cache:Fa()},void(e.payload=t)}t=t.return}}function cs(e,t,n){var r=Gc();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},hs(e)?fs(t,n):null!==(n=Rr(e,t,n,r))&&(Yc(n,e,r),ms(n,t,r))}function us(e,t,n){ds(e,t,n,Gc())}function ds(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(hs(e))fs(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=i(o,n);if(a.hasEagerState=!0,a.eagerState=s,Zn(s,o))return Ar(e,t,a,0),null===mc&&Ir(),!1}catch(l){}if(null!==(n=Rr(e,t,a,r)))return Yc(n,e,r),ms(n,t,r),!0}return!1}function ps(e,t,n,r){if(r={lane:2,revertLane:Hu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},hs(e)){if(t)throw Error(o(479))}else null!==(t=Rr(e,n,r,2))&&Yc(t,e,2)}function hs(e){var t=e.alternate;return e===Hi||null!==t&&t===Hi}function fs(e,t){Gi=Ki=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ms(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Oe(e,n)}}var gs={readContext:Ra,use:po,useCallback:Zi,useContext:Zi,useEffect:Zi,useImperativeHandle:Zi,useLayoutEffect:Zi,useInsertionEffect:Zi,useMemo:Zi,useReducer:Zi,useRef:Zi,useState:Zi,useDebugValue:Zi,useDeferredValue:Zi,useTransition:Zi,useSyncExternalStore:Zi,useId:Zi,useHostTransitionStatus:Zi,useFormState:Zi,useActionState:Zi,useOptimistic:Zi,useMemoCache:Zi,useCacheRefresh:Zi};gs.useEffectEvent=Zi;var ws={readContext:Ra,use:po,useCallback:function(e,t){return lo().memoizedState=[e,void 0===t?null:t],e},useContext:Ra,useEffect:Bo,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Fo(4194308,4,Go.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fo(4194308,4,e,t)},useInsertionEffect:function(e,t){Fo(4,2,e,t)},useMemo:function(e,t){var n=lo();t=void 0===t?null:t;var r=e();if(qi){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=lo();if(void 0!==n){var a=n(t);if(qi){be(!0);try{n(t)}finally{be(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=cs.bind(null,Hi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},lo().memoizedState=e},useState:function(e){var t=(e=jo(e)).queue,n=us.bind(null,Hi,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Yo,useDeferredValue:function(e,t){return Xo(lo(),e,t)},useTransition:function(){var e=jo(!1);return e=es.bind(null,Hi,e.queue,!0,!1),lo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Hi,a=lo();if(pa){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===mc)throw Error(o(349));0!==(127&wc)||bo(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Bo(vo.bind(null,r,i,e),[e]),r.flags|=2048,Lo(9,{destroy:void 0},xo.bind(null,r,i,n,t),null),n},useId:function(){var e=lo(),t=mc.identifierPrefix;if(pa){var n=aa;t="_"+t+"R_"+(n=(ra&~(1<<32-xe(ra)-1)).toString(32)+n),0<(n=Yi++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Xi++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:is,useFormState:Ro,useActionState:Ro,useOptimistic:function(e){var t=lo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ps.bind(null,Hi,!0,n),n.dispatch=t,[e,t]},useMemoCache:ho,useCacheRefresh:function(){return lo().memoizedState=ls.bind(null,Hi)},useEffectEvent:function(e){var t=lo(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&fc))throw Error(o(440));return n.impl.apply(void 0,arguments)}}},ys={readContext:Ra,use:po,useCallback:Qo,useContext:Ra,useEffect:Ho,useImperativeHandle:qo,useInsertionEffect:Vo,useLayoutEffect:Ko,useMemo:Jo,useReducer:mo,useRef:Mo,useState:function(){return mo(fo)},useDebugValue:Yo,useDeferredValue:function(e,t){return Zo(co(),Wi.memoizedState,e,t)},useTransition:function(){var e=mo(fo)[0],t=co().memoizedState;return["boolean"===typeof e?e:uo(e),t]},useSyncExternalStore:yo,useId:os,useHostTransitionStatus:is,useFormState:Oo,useActionState:Oo,useOptimistic:function(e,t){return So(co(),0,e,t)},useMemoCache:ho,useCacheRefresh:ss};ys.useEffectEvent=Wo;var bs={readContext:Ra,use:po,useCallback:Qo,useContext:Ra,useEffect:Ho,useImperativeHandle:qo,useInsertionEffect:Vo,useLayoutEffect:Ko,useMemo:Jo,useReducer:wo,useRef:Mo,useState:function(){return wo(fo)},useDebugValue:Yo,useDeferredValue:function(e,t){var n=co();return null===Wi?Xo(n,e,t):Zo(n,Wi.memoizedState,e,t)},useTransition:function(){var e=wo(fo)[0],t=co().memoizedState;return["boolean"===typeof e?e:uo(e),t]},useSyncExternalStore:yo,useId:os,useHostTransitionStatus:is,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){var n=co();return null!==Wi?So(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ho,useCacheRefresh:ss};function xs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:h({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}bs.useEffectEvent=Wo;var vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Gc(),a=bi(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=xi(e,a,r))&&(Yc(t,e,r),vi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Gc(),a=bi(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=xi(e,a,r))&&(Yc(t,e,r),vi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Gc(),r=bi(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=xi(e,r,n))&&(Yc(t,e,n),vi(t,e,n))}};function ks(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!er(n,r)||!er(a,i))}function zs(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vs.enqueueReplaceState(t,t.state,null)}function js(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=h({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}function Ss(e){_r(e)}function Es(e){console.error(e)}function _s(e){_r(e)}function Cs(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ps(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Ts(e,t,n){return(n=bi(n)).tag=3,n.payload={element:null},n.callback=function(){Cs(e,t)},n}function Is(e){return(e=bi(e)).tag=3,e}function As(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var i=r.value;e.payload=function(){return a(i)},e.callback=function(){Ps(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){Ps(t,n,r),"function"!==typeof a&&(null===$c?$c=new Set([this]):$c.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Rs=Error(o(461)),Os=!1;function Ns(e,t,n,r){t.child=null===e?mi(t,null,n,r):fi(t,e.child,n,r)}function Ds(e,t,n,r,a){n=n.render;var i=t.ref;if("ref"in r){var o={};for(var s in r)"ref"!==s&&(o[s]=r[s])}else o=r;return Aa(t),r=to(e,t,n,o,i,a),s=io(),null===e||Os?(pa&&s&&sa(t),t.flags|=1,Ns(e,t,r,a),t.child):(oo(e,t,a),il(e,t,a))}function $s(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Fr(i)||void 0!==i.defaultProps||null!==n.compare?((e=Hr(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Ls(e,t,i,r,a))}if(i=e.child,!ol(e,a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:er)(o,r)&&e.ref===t.ref)return il(e,t,a)}return t.flags|=1,(e=Ur(i,r)).ref=t.ref,e.return=t,t.child=e}function Ls(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(er(i,r)&&e.ref===t.ref){if(Os=!1,t.pendingProps=r=i,!ol(e,a))return t.lanes=e.lanes,il(e,t,a);0!==(131072&e.flags)&&(Os=!0)}}return Vs(e,t,n,r,a)}function Ms(e,t,n,r){var a=r.children,i=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(0!==(128&t.flags)){if(i=null!==i?i.baseLanes|n:n,null!==e){for(r=t.child=e.child,a=0;null!==r;)a=a|r.lanes|r.childLanes,r=r.sibling;r=a&~i}else r=0,t.child=null;return Us(e,t,i,n,r)}if(0===(536870912&n))return r=t.lanes=536870912,Us(e,t,null!==i?i.baseLanes|n:n,n,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Qa(0,null!==i?i.cachePool:null),null!==i?Ti(t,i):Ii(),$i(t)}else null!==i?(Qa(0,i.cachePool),Ti(t,i),Li(),t.memoizedState=null):(null!==e&&Qa(0,null),Ii(),Li());return Ns(e,t,a,n),t.child}function Fs(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Us(e,t,n,r,a){var i=Ya();return i=null===i?null:{parent:Ma._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},null!==e&&Qa(0,null),Ii(),$i(t),null!==e&&Ta(e,t,r,!0),t.childLanes=a,null}function Bs(e,t){return(t=el({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function Hs(e,t,n){return fi(t,e.child,null,n),(e=Bs(t,t.pendingProps)).flags|=2,Mi(t),t.memoizedState=null,e}function Ws(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Vs(e,t,n,r,a){return Aa(t),n=to(e,t,n,r,void 0,a),r=io(),null===e||Os?(pa&&r&&sa(t),t.flags|=1,Ns(e,t,n,a),t.child):(oo(e,t,a),il(e,t,a))}function Ks(e,t,n,r,a,i){return Aa(t),t.updateQueue=null,n=ro(t,r,n,a),no(e),r=io(),null===e||Os?(pa&&r&&sa(t),t.flags|=1,Ns(e,t,n,i),t.child):(oo(e,t,i),il(e,t,i))}function Gs(e,t,n,r,a){if(Aa(t),null===t.stateNode){var i=$r,o=n.contextType;"object"===typeof o&&null!==o&&(i=Ra(o)),i=new n(r,i),t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,i.updater=vs,t.stateNode=i,i._reactInternals=t,(i=t.stateNode).props=r,i.state=t.memoizedState,i.refs={},wi(t),o=n.contextType,i.context="object"===typeof o&&null!==o?Ra(o):$r,i.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(xs(t,n,o,r),i.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(o=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),o!==i.state&&vs.enqueueReplaceState(i,i.state,null),Si(t,r,i,a),ji(),i.state=t.memoizedState),"function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){i=t.stateNode;var s=t.memoizedProps,l=js(n,s);i.props=l;var c=i.context,u=n.contextType;o=$r,"object"===typeof u&&null!==u&&(o=Ra(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof i.getSnapshotBeforeUpdate,s=t.pendingProps!==s,u||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(s||c!==o)&&zs(t,i,r,o),gi=!1;var p=t.memoizedState;i.state=p,Si(t,r,i,a),ji(),c=t.memoizedState,s||p!==c||gi?("function"===typeof d&&(xs(t,n,d,r),c=t.memoizedState),(l=gi||ks(t,n,l,r,p,c,o))?(u||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=o,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,yi(e,t),u=js(n,o=t.memoizedProps),i.props=u,d=t.pendingProps,p=i.context,c=n.contextType,l=$r,"object"===typeof c&&null!==c&&(l=Ra(c)),(c="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(o!==d||p!==l)&&zs(t,i,r,l),gi=!1,p=t.memoizedState,i.state=p,Si(t,r,i,a),ji();var h=t.memoizedState;o!==d||p!==h||gi||null!==e&&null!==e.dependencies&&Ia(e.dependencies)?("function"===typeof s&&(xs(t,n,s,r),h=t.memoizedState),(u=gi||ks(t,n,u,r,p,h,l)||null!==e&&null!==e.dependencies&&Ia(e.dependencies))?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,l),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=l,r=u):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return i=r,Ws(e,t),r=0!==(128&t.flags),i||r?(i=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:i.render(),t.flags|=1,null!==e&&r?(t.child=fi(t,e.child,null,a),t.child=fi(t,null,n,a)):Ns(e,t,n,a),t.memoizedState=i.state,e=t.child):e=il(e,t,a),e}function qs(e,t,n,r){return xa(),t.flags|=256,Ns(e,t,n,r),t.child}var Ys={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qs(e){return{baseLanes:e,cachePool:Ja()}}function Js(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=Cc),e}function Xs(e,t,n){var r,a=t.pendingProps,i=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&Fi.current)),r&&(i=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(pa){if(i?Ni(t):Li(),(e=da)?null!==(e=null!==(e=Id(e,fa))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==na?{id:ra,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},(n=Kr(e)).return=t,t.child=n,ua=t,da=null):e=null,null===e)throw ga(t);return Rd(e)?t.lanes=32:t.lanes=536870912,null}var l=a.children;return a=a.fallback,i?(Li(),l=el({mode:"hidden",children:l},i=t.mode),a=Wr(a,i,n,null),l.return=t,a.return=t,l.sibling=a,t.child=l,(a=t.child).memoizedState=Qs(n),a.childLanes=Js(e,r,n),t.memoizedState=Ys,Fs(null,a)):(Ni(t),Zs(t,l))}var c=e.memoizedState;if(null!==c&&null!==(l=c.dehydrated)){if(s)256&t.flags?(Ni(t),t.flags&=-257,t=tl(e,t,n)):null!==t.memoizedState?(Li(),t.child=e.child,t.flags|=128,t=null):(Li(),l=a.fallback,i=t.mode,a=el({mode:"visible",children:a.children},i),(l=Wr(l,i,n,null)).flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,fi(t,e.child,null,n),(a=t.child).memoizedState=Qs(n),a.childLanes=Js(e,r,n),t.memoizedState=Ys,t=Fs(null,a));else if(Ni(t),Rd(l)){if(r=l.nextSibling&&l.nextSibling.dataset)var u=r.dgst;r=u,(a=Error(o(419))).stack="",a.digest=r,ka({value:a,source:null,stack:null}),t=tl(e,t,n)}else if(Os||Ta(e,t,n,!1),r=0!==(n&e.childLanes),Os||r){if(null!==(r=mc)&&(0!==(a=Ne(r,n))&&a!==c.retryLane))throw c.retryLane=a,Or(e,a),Yc(r,e,a),Rs;Ad(l)||su(),t=tl(e,t,n)}else Ad(l)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,da=Od(l.nextSibling),ua=t,pa=!0,ha=null,fa=!1,null!==e&&ca(t,e),(t=Zs(t,a.children)).flags|=4096);return t}return i?(Li(),l=a.fallback,i=t.mode,u=(c=e.child).sibling,(a=Ur(c,{mode:"hidden",children:a.children})).subtreeFlags=65011712&c.subtreeFlags,null!==u?l=Ur(u,l):(l=Wr(l,i,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,Fs(null,a),a=t.child,null===(l=e.child.memoizedState)?l=Qs(n):(null!==(i=l.cachePool)?(c=Ma._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=Ja(),l={baseLanes:l.baseLanes|n,cachePool:i}),a.memoizedState=l,a.childLanes=Js(e,r,n),t.memoizedState=Ys,Fs(e.child,a)):(Ni(t),e=(n=e.child).sibling,(n=Ur(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Zs(e,t){return(t=el({mode:"visible",children:t},e.mode)).return=e,e.child=t}function el(e,t){return(e=Mr(22,e,null,t)).lanes=0,e}function tl(e,t,n){return fi(t,e.child,null,n),(e=Zs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function nl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ca(e.return,t,n)}function rl(e,t,n,r,a,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a,o.treeForkCount=i)}function al(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;r=r.children;var o=Fi.current,s=0!==(2&o);if(s?(o=1&o|2,t.flags|=128):o&=1,U(Fi,o),Ns(e,t,r,n),r=pa?Zr:0,!s&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&nl(e,n,t);else if(19===e.tag)nl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===Ui(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),rl(t,!1,a,n,i,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Ui(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}rl(t,!0,n,null,i,r);break;case"together":rl(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function il(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Sc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Ta(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Ur(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ur(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function ol(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Ia(e))}function sl(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Os=!0;else{if(!ol(e,n)&&0===(128&t.flags))return Os=!1,function(e,t,n){switch(t.tag){case 3:q(t,t.stateNode.containerInfo),Ea(0,Ma,e.memoizedState.cache),xa();break;case 27:case 5:Q(t);break;case 4:q(t,t.stateNode.containerInfo);break;case 10:Ea(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,Di(t),null;break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Ni(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Xs(e,t,n):(Ni(t),null!==(e=il(e,t,n))?e.sibling:null);Ni(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Ta(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return al(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),U(Fi,Fi.current),r)break;return null;case 22:return t.lanes=0,Ms(e,t,n,t.pendingProps);case 24:Ea(0,Ma,e.memoizedState.cache)}return il(e,t,n)}(e,t,n);Os=0!==(131072&e.flags)}else Os=!1,pa&&0!==(1048576&t.flags)&&oa(t,Zr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=ai(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var a=e.$$typeof;if(a===k){t.tag=11,t=Ds(null,t,e,r,n);break e}if(a===S){t.tag=14,t=$s(null,t,e,r,n);break e}}throw t=A(e)||e,Error(o(306,t,""))}Fr(e)?(r=js(e,r),t.tag=1,t=Gs(null,t,e,r,n)):(t.tag=0,t=Vs(null,t,e,r,n))}return t;case 0:return Vs(e,t,t.type,t.pendingProps,n);case 1:return Gs(e,t,r=t.type,a=js(r,t.pendingProps),n);case 3:e:{if(q(t,t.stateNode.containerInfo),null===e)throw Error(o(387));r=t.pendingProps;var i=t.memoizedState;a=i.element,yi(e,t),Si(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ea(0,Ma,r),r!==i.cache&&Pa(t,[Ma],n,!0),ji(),r=s.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=qs(e,t,r,n);break e}if(r!==a){ka(a=Yr(Error(o(424)),t)),t=qs(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(da=Od(e.firstChild),ua=t,pa=!0,ha=null,fa=!0,n=mi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(xa(),r===a){t=il(e,t,n);break e}Ns(e,t,r,n)}t=t.child}return t;case 26:return Ws(e,t),null===e?(n=Kd(t.type,null,t.pendingProps,null))?t.memoizedState=n:pa||(n=t.type,e=t.pendingProps,(r=wd(K.current).createElement(n))[Ue]=t,r[Be]=e,hd(r,n,e),et(r),t.stateNode=r):t.memoizedState=Kd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Q(t),null===e&&pa&&(r=t.stateNode=Ld(t.type,t.pendingProps,K.current),ua=t,fa=!0,a=da,_d(t.type)?(Nd=a,da=Od(r.firstChild)):da=a),Ns(e,t,t.pendingProps.children,n),Ws(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&pa&&((a=r=da)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[qe])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(i=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((i=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var i=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===i)return e}if(null===(e=Od(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,fa))?(t.stateNode=r,ua=t,da=Od(r.firstChild),fa=!1,a=!0):a=!1),a||ga(t)),Q(t),a=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,r=i.children,xd(a,i)?r=null:null!==s&&xd(a,s)&&(t.flags|=32),null!==t.memoizedState&&(a=to(e,t,ao,null,null,n),dp._currentValue=a),Ws(e,t),Ns(e,t,r,n),t.child;case 6:return null===e&&pa&&((e=n=da)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=Od(e.nextSibling)))return null}return e}(n,t.pendingProps,fa))?(t.stateNode=n,ua=t,da=null,e=!0):e=!1),e||ga(t)),null;case 13:return Xs(e,t,n);case 4:return q(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=fi(t,null,r,n):Ns(e,t,r,n),t.child;case 11:return Ds(e,t,t.type,t.pendingProps,n);case 7:return Ns(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ns(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ea(0,t.type,r.value),Ns(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Aa(t),r=r(a=Ra(a)),t.flags|=1,Ns(e,t,r,n),t.child;case 14:return $s(e,t,t.type,t.pendingProps,n);case 15:return Ls(e,t,t.type,t.pendingProps,n);case 19:return al(e,t,n);case 31:return function(e,t,n){var r=t.pendingProps,a=0!==(128&t.flags);if(t.flags&=-129,null===e){if(pa){if("hidden"===r.mode)return e=Bs(t,r),t.lanes=536870912,Fs(null,e);if(Di(t),(e=da)?null!==(e=null!==(e=Id(e,fa))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==na?{id:ra,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},(n=Kr(e)).return=t,t.child=n,ua=t,da=null):e=null,null===e)throw ga(t);return t.lanes=536870912,null}return Bs(t,r)}var i=e.memoizedState;if(null!==i){var s=i.dehydrated;if(Di(t),a)if(256&t.flags)t.flags&=-257,t=Hs(e,t,n);else{if(null===t.memoizedState)throw Error(o(558));t.child=e.child,t.flags|=128,t=null}else if(Os||Ta(e,t,n,!1),a=0!==(n&e.childLanes),Os||a){if(null!==(r=mc)&&0!==(s=Ne(r,n))&&s!==i.retryLane)throw i.retryLane=s,Or(e,s),Yc(r,e,s),Rs;su(),t=Hs(e,t,n)}else e=i.treeContext,da=Od(s.nextSibling),ua=t,pa=!0,ha=null,fa=!1,null!==e&&ca(t,e),(t=Bs(t,r)).flags|=4096;return t}return(e=Ur(e.child,{mode:r.mode,children:r.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return Ms(e,t,n,t.pendingProps);case 24:return Aa(t),r=Ra(Ma),null===e?(null===(a=Ya())&&(a=mc,i=Fa(),a.pooledCache=i,i.refCount++,null!==i&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:r,cache:a},wi(t),Ea(0,Ma,a)):(0!==(e.lanes&n)&&(yi(e,t),Si(t,null,null,n),ji()),a=e.memoizedState,i=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),Ea(0,Ma,r)):(r=i.cache,Ea(0,Ma,r),r!==a.cache&&Pa(t,[Ma],n,!0))),Ns(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function ll(e){e.flags|=4}function cl(e,t,n,r,a){if((t=0!==(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&a)===a)if(e.stateNode.complete)e.flags|=8192;else{if(!au())throw ii=ti,Za;e.flags|=8192}}else e.flags&=-16777217}function ul(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!ip(t)){if(!au())throw ii=ti,Za;e.flags|=8192}}function dl(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Te():536870912,e.lanes|=t,Pc|=t)}function pl(e,t){if(!pa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function hl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fl(e,t,n){var r=t.pendingProps;switch(la(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return hl(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),_a(Ma),Y(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ba(t)?ll(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,va())),hl(t),null;case 26:var a=t.type,i=t.memoizedState;return null===e?(ll(t),null!==i?(hl(t),ul(t,i)):(hl(t),cl(t,a,0,0,n))):i?i!==e.memoizedState?(ll(t),hl(t),ul(t,i)):(hl(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&ll(t),hl(t),cl(t,a,0,0,n)),null;case 27:if(J(t),n=K.current,a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ll(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return hl(t),null}e=W.current,ba(t)?wa(t):(e=Ld(a,r,n),t.stateNode=e,ll(t))}return hl(t),null;case 5:if(J(t),a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ll(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return hl(t),null}if(i=W.current,ba(t))wa(t);else{var s=wd(K.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":(i=s.createElement("div")).innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i="string"===typeof r.is?s.createElement("select",{is:r.is}):s.createElement("select"),r.multiple?i.multiple=!0:r.size&&(i.size=r.size);break;default:i="string"===typeof r.is?s.createElement(a,{is:r.is}):s.createElement(a)}}i[Ue]=t,i[Be]=r;e:for(s=t.child;null!==s;){if(5===s.tag||6===s.tag)i.appendChild(s.stateNode);else if(4!==s.tag&&27!==s.tag&&null!==s.child){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;null===s.sibling;){if(null===s.return||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch(hd(i,a,r),a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ll(t)}}return hl(t),cl(t,t.type,null===e||e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&ll(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=K.current,ba(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=ua))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ue]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||ud(e.nodeValue,n)))||ga(t,!0)}else(e=wd(e).createTextNode(r))[Ue]=t,t.stateNode=e}return hl(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=ba(t),null!==n){if(null===e){if(!r)throw Error(o(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(o(557));e[Ue]=t}else xa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;hl(t),e=!1}else n=va(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(Mi(t),t):(Mi(t),null);if(0!==(128&t.flags))throw Error(o(558))}return hl(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=ba(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[Ue]=t}else xa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;hl(t),a=!1}else a=va(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return 256&t.flags?(Mi(t),t):(Mi(t),null)}return Mi(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool),i=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),dl(t,t.updateQueue),hl(t),null);case 4:return Y(),null===e&&ed(t.stateNode.containerInfo),hl(t),null;case 10:return _a(t.type),hl(t),null;case 19:if(F(Fi),null===(r=t.memoizedState))return hl(t),null;if(a=0!==(128&t.flags),null===(i=r.rendering))if(a)pl(r,!1);else{if(0!==jc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=Ui(e))){for(t.flags|=128,pl(r,!1),e=i.updateQueue,t.updateQueue=e,dl(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Br(n,e),n=n.sibling;return U(Fi,1&Fi.current|2),pa&&ia(t,r.treeForkCount),t.child}e=e.sibling}null!==r.tail&&le()>Nc&&(t.flags|=128,a=!0,pl(r,!1),t.lanes=4194304)}else{if(!a)if(null!==(e=Ui(i))){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,dl(t,e),pl(r,!0),null===r.tail&&"hidden"===r.tailMode&&!i.alternate&&!pa)return hl(t),null}else 2*le()-r.renderingStartTime>Nc&&536870912!==n&&(t.flags|=128,a=!0,pl(r,!1),t.lanes=4194304);r.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=r.last)?e.sibling=i:t.child=i,r.last=i)}return null!==r.tail?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=le(),e.sibling=null,n=Fi.current,U(Fi,a?1&n|2:1&n),pa&&ia(t,r.treeForkCount),e):(hl(t),null);case 22:case 23:return Mi(t),Ai(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(hl(t),6&t.subtreeFlags&&(t.flags|=8192)):hl(t),null!==(n=t.updateQueue)&&dl(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&F(qa),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),_a(Ma),hl(t),null;case 25:case 30:return null}throw Error(o(156,t.tag))}function ml(e,t){switch(la(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return _a(Ma),Y(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return J(t),null;case 31:if(null!==t.memoizedState){if(Mi(t),null===t.alternate)throw Error(o(340));xa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(Mi(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));xa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return F(Fi),null;case 4:return Y(),null;case 10:return _a(t.type),null;case 22:case 23:return Mi(t),Ai(),null!==e&&F(qa),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return _a(Ma),null;default:return null}}function gl(e,t){switch(la(t),t.tag){case 3:_a(Ma),Y();break;case 26:case 27:case 5:J(t);break;case 4:Y();break;case 31:null!==t.memoizedState&&Mi(t);break;case 13:Mi(t);break;case 19:F(Fi);break;case 10:_a(t.type);break;case 22:case 23:Mi(t),Ai(),null!==e&&F(qa);break;case 24:_a(Ma)}}function wl(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var i=n.create,o=n.inst;r=i(),o.destroy=r}n=n.next}while(n!==a)}}catch(s){ju(t,t.return,s)}}function yl(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var i=a.next;r=i;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(void 0!==s){o.destroy=void 0,a=t;var l=n,c=s;try{c()}catch(u){ju(a,l,u)}}}r=r.next}while(r!==i)}}catch(u){ju(t,t.return,u)}}function bl(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{_i(t,n)}catch(r){ju(e,e.return,r)}}}function xl(e,t,n){n.props=js(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){ju(e,t,r)}}function vl(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(a){ju(e,t,a)}}function kl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){ju(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(i){ju(e,t,i)}else n.current=null}function zl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){ju(e,e.return,a)}}function jl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,s=null,l=null,c=null,u=null,d=null;for(f in n){var p=n[f];if(n.hasOwnProperty(f)&&null!=p)switch(f){case"checked":case"value":break;case"defaultValue":c=p;default:r.hasOwnProperty(f)||dd(e,t,f,null,r,p)}}for(var h in r){var f=r[h];if(p=n[h],r.hasOwnProperty(h)&&(null!=f||null!=p))switch(h){case"type":i=f;break;case"name":a=f;break;case"checked":u=f;break;case"defaultChecked":d=f;break;case"value":s=f;break;case"defaultValue":l=f;break;case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(o(137,t));break;default:f!==p&&dd(e,t,h,f,r,p)}}return void yt(e,s,l,c,u,d,i,a);case"select":for(i in f=s=l=h=null,n)if(c=n[i],n.hasOwnProperty(i)&&null!=c)switch(i){case"value":break;case"multiple":f=c;default:r.hasOwnProperty(i)||dd(e,t,i,null,r,c)}for(a in r)if(i=r[a],c=n[a],r.hasOwnProperty(a)&&(null!=i||null!=c))switch(a){case"value":h=i;break;case"defaultValue":l=i;break;case"multiple":s=i;default:i!==c&&dd(e,t,a,i,r,c)}return t=l,n=s,r=f,void(null!=h?vt(e,!!n,h,!1):!!r!==!!n&&(null!=t?vt(e,!!n,t,!0):vt(e,!!n,n?[]:"",!1)));case"textarea":for(l in f=h=null,n)if(a=n[l],n.hasOwnProperty(l)&&null!=a&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:dd(e,t,l,null,r,a)}for(s in r)if(a=r[s],i=n[s],r.hasOwnProperty(s)&&(null!=a||null!=i))switch(s){case"value":h=a;break;case"defaultValue":f=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(o(91));break;default:a!==i&&dd(e,t,s,a,r,i)}return void kt(e,h,f);case"option":for(var m in n)if(h=n[m],n.hasOwnProperty(m)&&null!=h&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else dd(e,t,m,null,r,h);for(c in r)if(h=r[c],f=n[c],r.hasOwnProperty(c)&&h!==f&&(null!=h||null!=f))if("selected"===c)e.selected=h&&"function"!==typeof h&&"symbol"!==typeof h;else dd(e,t,c,h,r,f);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)h=n[g],n.hasOwnProperty(g)&&null!=h&&!r.hasOwnProperty(g)&&dd(e,t,g,null,r,h);for(u in r)if(h=r[u],f=n[u],r.hasOwnProperty(u)&&h!==f&&(null!=h||null!=f))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(o(137,t));break;default:dd(e,t,u,h,r,f)}return;default:if(Ct(t)){for(var w in n)h=n[w],n.hasOwnProperty(w)&&void 0!==h&&!r.hasOwnProperty(w)&&pd(e,t,w,void 0,r,h);for(d in r)h=r[d],f=n[d],!r.hasOwnProperty(d)||h===f||void 0===h&&void 0===f||pd(e,t,d,h,r,f);return}}for(var y in n)h=n[y],n.hasOwnProperty(y)&&null!=h&&!r.hasOwnProperty(y)&&dd(e,t,y,null,r,h);for(p in r)h=r[p],f=n[p],!r.hasOwnProperty(p)||h===f||null==h&&null==f||dd(e,t,p,h,r,f)}(r,e.type,n,t),r[Be]=t}catch(a){ju(e,e.return,a)}}function Sl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&_d(e.type)||4===e.tag}function El(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Sl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&_d(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function _l(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=At));else if(4!==r&&(27===r&&_d(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(_l(e,t,n),e=e.sibling;null!==e;)_l(e,t,n),e=e.sibling}function Cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&_d(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(Cl(e,t,n),e=e.sibling;null!==e;)Cl(e,t,n),e=e.sibling}function Pl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);hd(t,r,n),t[Ue]=e,t[Be]=n}catch(i){ju(e,e.return,i)}}var Tl=!1,Il=!1,Al=!1,Rl="function"===typeof WeakSet?WeakSet:Set,Ol=null;function Nl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Yl(e,n),4&r&&wl(5,n);break;case 1:if(Yl(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){ju(n,n.return,o)}else{var a=js(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ju(n,n.return,s)}}64&r&&bl(n),512&r&&vl(n,n.return);break;case 3:if(Yl(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{_i(e,t)}catch(o){ju(n,n.return,o)}}break;case 27:null===t&&4&r&&Pl(n);case 26:case 5:Yl(e,n),null===t&&4&r&&zl(n),512&r&&vl(n,n.return);break;case 12:Yl(e,n);break;case 31:Yl(e,n),4&r&&Ul(e,n);break;case 13:Yl(e,n),4&r&&Bl(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=Cu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||Tl)){t=null!==t&&null!==t.memoizedState||Il,a=Tl;var i=Il;Tl=r,(Il=t)&&!i?Jl(e,n,0!==(8772&n.subtreeFlags)):Yl(e,n),Tl=a,Il=i}break;case 30:break;default:Yl(e,n)}}function Dl(e){var t=e.alternate;null!==t&&(e.alternate=null,Dl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ye(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $l=null,Ll=!1;function Ml(e,t,n){for(n=n.child;null!==n;)Fl(e,t,n),n=n.sibling}function Fl(e,t,n){if(ye&&"function"===typeof ye.onCommitFiberUnmount)try{ye.onCommitFiberUnmount(we,n)}catch(i){}switch(n.tag){case 26:Il||kl(n,t),Ml(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:Il||kl(n,t);var r=$l,a=Ll;_d(n.type)&&($l=n.stateNode,Ll=!1),Ml(e,t,n),Md(n.stateNode),$l=r,Ll=a;break;case 5:Il||kl(n,t);case 6:if(r=$l,a=Ll,$l=null,Ml(e,t,n),Ll=a,null!==($l=r))if(Ll)try{(9===$l.nodeType?$l.body:"HTML"===$l.nodeName?$l.ownerDocument.body:$l).removeChild(n.stateNode)}catch(o){ju(n,t,o)}else try{$l.removeChild(n.stateNode)}catch(o){ju(n,t,o)}break;case 18:null!==$l&&(Ll?(Cd(9===(e=$l).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Vp(e)):Cd($l,n.stateNode));break;case 4:r=$l,a=Ll,$l=n.stateNode.containerInfo,Ll=!0,Ml(e,t,n),$l=r,Ll=a;break;case 0:case 11:case 14:case 15:yl(2,n,t),Il||yl(4,n,t),Ml(e,t,n);break;case 1:Il||(kl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&xl(n,t,r)),Ml(e,t,n);break;case 21:Ml(e,t,n);break;case 22:Il=(r=Il)||null!==n.memoizedState,Ml(e,t,n),Il=r;break;default:Ml(e,t,n)}}function Ul(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{Vp(e)}catch(n){ju(t,t.return,n)}}}function Bl(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Vp(e)}catch(n){ju(t,t.return,n)}}function Hl(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Rl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Rl),t;default:throw Error(o(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Pu.bind(null,e,t);t.then(r,r)}})}function Wl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],i=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:if(_d(l.type)){$l=l.stateNode,Ll=!1;break e}break;case 5:$l=l.stateNode,Ll=!1;break e;case 3:case 4:$l=l.stateNode.containerInfo,Ll=!0;break e}l=l.return}if(null===$l)throw Error(o(160));Fl(i,s,a),$l=null,Ll=!1,null!==(i=a.alternate)&&(i.return=null),a.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)Kl(t,e),t=t.sibling}var Vl=null;function Kl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wl(t,e),Gl(e),4&r&&(yl(3,e,e.return),wl(3,e),yl(5,e,e.return));break;case 1:Wl(t,e),Gl(e),512&r&&(Il||null===n||kl(n,n.return)),64&r&&Tl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=Vl;if(Wl(t,e),Gl(e),512&r&&(Il||null===n||kl(n,n.return)),4&r){var i=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(i=a.getElementsByTagName("title")[0])||i[qe]||i[Ue]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=a.createElement(r),a.head.insertBefore(i,a.querySelector("head > title"))),hd(i,r,n),i[Ue]=e,et(i),r=i;break e;case"link":var s=rp("link","href",a).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((i=s[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}hd(i=a.createElement(r),r,n),a.head.appendChild(i);break;case"meta":if(s=rp("meta","content",a).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((i=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}hd(i=a.createElement(r),r,n),a.head.appendChild(i);break;default:throw Error(o(468,r))}i[Ue]=e,et(i),r=i}e.stateNode=r}else ap(a,e.type,e.stateNode);else e.stateNode=Xd(a,r,e.memoizedProps);else i!==r?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===r?ap(a,e.type,e.stateNode):Xd(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&jl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Wl(t,e),Gl(e),512&r&&(Il||null===n||kl(n,n.return)),null!==n&&4&r&&jl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Wl(t,e),Gl(e),512&r&&(Il||null===n||kl(n,n.return)),32&e.flags){a=e.stateNode;try{jt(a,"")}catch(m){ju(e,e.return,m)}}4&r&&null!=e.stateNode&&jl(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(Al=!0);break;case 6:if(Wl(t,e),Gl(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(m){ju(e,e.return,m)}}break;case 3:if(np=null,a=Vl,Vl=Bd(t.containerInfo),Wl(t,e),Vl=a,Gl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Vp(t.containerInfo)}catch(m){ju(e,e.return,m)}Al&&(Al=!1,ql(e));break;case 4:r=Vl,Vl=Bd(e.stateNode.containerInfo),Wl(t,e),Gl(e),Vl=r;break;case 12:default:Wl(t,e),Gl(e);break;case 31:case 19:Wl(t,e),Gl(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Hl(e,r)));break;case 13:Wl(t,e),Gl(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(Rc=le()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Hl(e,r)));break;case 22:a=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=Tl,d=Il;if(Tl=u||a,Il=d||c,Wl(t,e),Il=d,Tl=u,Gl(e),8192&r)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===n||c||Tl||Il||Ql(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(i=c.stateNode,a)"function"===typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none";else{l=c.stateNode;var p=c.memoizedProps.style,h=void 0!==p&&null!==p&&p.hasOwnProperty("display")?p.display:null;l.style.display=null==h||"boolean"===typeof h?"":(""+h).trim()}}catch(m){ju(c,c.return,m)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(m){ju(c,c.return,m)}}}else if(18===t.tag){if(null===n){c=t;try{var f=c.stateNode;a?Pd(f,!0):Pd(c.stateNode,!1)}catch(m){ju(c,c.return,m)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Hl(e,n))));case 30:case 21:}}function Gl(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(Sl(r)){n=r;break}r=r.return}if(null==n)throw Error(o(160));switch(n.tag){case 27:var a=n.stateNode;Cl(e,El(e),a);break;case 5:var i=n.stateNode;32&n.flags&&(jt(i,""),n.flags&=-33),Cl(e,El(e),i);break;case 3:case 4:var s=n.stateNode.containerInfo;_l(e,El(e),s);break;default:throw Error(o(161))}}catch(l){ju(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ql(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;ql(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Yl(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Nl(e,t.alternate,t),t=t.sibling}function Ql(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:yl(4,t,t.return),Ql(t);break;case 1:kl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&xl(t,t.return,n),Ql(t);break;case 27:Md(t.stateNode);case 26:case 5:kl(t,t.return),Ql(t);break;case 22:null===t.memoizedState&&Ql(t);break;default:Ql(t)}e=e.sibling}}function Jl(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:Jl(a,i,n),wl(4,i);break;case 1:if(Jl(a,i,n),"function"===typeof(a=(r=i).stateNode).componentDidMount)try{a.componentDidMount()}catch(c){ju(r,r.return,c)}if(null!==(a=(r=i).updateQueue)){var s=r.stateNode;try{var l=a.shared.hiddenCallbacks;if(null!==l)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)Ei(l[a],s)}catch(c){ju(r,r.return,c)}}n&&64&o&&bl(i),vl(i,i.return);break;case 27:Pl(i);case 26:case 5:Jl(a,i,n),n&&null===r&&4&o&&zl(i),vl(i,i.return);break;case 12:Jl(a,i,n);break;case 31:Jl(a,i,n),n&&4&o&&Ul(a,i);break;case 13:Jl(a,i,n),n&&4&o&&Bl(a,i);break;case 22:null===i.memoizedState&&Jl(a,i,n),vl(i,i.return);break;case 30:break;default:Jl(a,i,n)}t=t.sibling}}function Xl(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ua(n))}function Zl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ua(e))}function ec(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)tc(e,t,n,r),t=t.sibling}function tc(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ec(e,t,n,r),2048&a&&wl(9,t);break;case 1:case 31:case 13:default:ec(e,t,n,r);break;case 3:ec(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ua(e)));break;case 12:if(2048&a){ec(e,t,n,r),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,s=i.onPostCommit;"function"===typeof s&&s(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ju(t,t.return,l)}}else ec(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,null!==t.memoizedState?2&i._visibility?ec(e,t,n,r):rc(e,t):2&i._visibility?ec(e,t,n,r):(i._visibility|=2,nc(e,t,n,r,0!==(10256&t.subtreeFlags)||!1)),2048&a&&Xl(o,t);break;case 24:ec(e,t,n,r),2048&a&&Zl(t.alternate,t)}}function nc(e,t,n,r,a){for(a=a&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var i=e,o=t,s=n,l=r,c=o.flags;switch(o.tag){case 0:case 11:case 15:nc(i,o,s,l,a),wl(8,o);break;case 23:break;case 22:var u=o.stateNode;null!==o.memoizedState?2&u._visibility?nc(i,o,s,l,a):rc(i,o):(u._visibility|=2,nc(i,o,s,l,a)),a&&2048&c&&Xl(o.alternate,o);break;case 24:nc(i,o,s,l,a),a&&2048&c&&Zl(o.alternate,o);break;default:nc(i,o,s,l,a)}t=t.sibling}}function rc(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:rc(n,r),2048&a&&Xl(r.alternate,r);break;case 24:rc(n,r),2048&a&&Zl(r.alternate,r);break;default:rc(n,r)}t=t.sibling}}var ac=8192;function ic(e,t,n){if(e.subtreeFlags&ac)for(e=e.child;null!==e;)oc(e,t,n),e=e.sibling}function oc(e,t,n){switch(e.tag){case 26:ic(e,t,n),e.flags&ac&&null!==e.memoizedState&&function(e,t,n,r){if("stylesheet"===n.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var a=Gd(r.href),i=t.querySelector(qd(a));if(i)return null!==(t=i._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=sp.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,void et(i);i=t.ownerDocument||t,r=Yd(r),(a=Fd.get(a))&&ep(r,a),et(i=i.createElement("link"));var o=i;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),hd(i,"link",r),n.instance=i}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=sp.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,Vl,e.memoizedState,e.memoizedProps);break;case 5:default:ic(e,t,n);break;case 3:case 4:var r=Vl;Vl=Bd(e.stateNode.containerInfo),ic(e,t,n),Vl=r;break;case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=ac,ac=16777216,ic(e,t,n),ac=r):ic(e,t,n))}}function sc(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function lc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Ol=r,dc(r,e)}sc(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)cc(e),e=e.sibling}function cc(e){switch(e.tag){case 0:case 11:case 15:lc(e),2048&e.flags&&yl(9,e,e.return);break;case 3:case 12:default:lc(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,uc(e)):lc(e)}}function uc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Ol=r,dc(r,e)}sc(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:yl(8,t,t.return),uc(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,uc(t));break;default:uc(t)}e=e.sibling}}function dc(e,t){for(;null!==Ol;){var n=Ol;switch(n.tag){case 0:case 11:case 15:yl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Ua(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Ol=r;else e:for(n=e;null!==Ol;){var a=(r=Ol).sibling,i=r.return;if(Dl(r),r===n){Ol=null;break e}if(null!==a){a.return=i,Ol=a;break e}Ol=i}}}var pc={getCacheForType:function(e){var t=Ra(Ma),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ra(Ma).controller.signal}},hc="function"===typeof WeakMap?WeakMap:Map,fc=0,mc=null,gc=null,wc=0,yc=0,bc=null,xc=!1,vc=!1,kc=!1,zc=0,jc=0,Sc=0,Ec=0,_c=0,Cc=0,Pc=0,Tc=null,Ic=null,Ac=!1,Rc=0,Oc=0,Nc=1/0,Dc=null,$c=null,Lc=0,Mc=null,Fc=null,Uc=0,Bc=0,Hc=null,Wc=null,Vc=0,Kc=null;function Gc(){return 0!==(2&fc)&&0!==wc?wc&-wc:null!==O.T?Hu():Le()}function qc(){if(0===Cc)if(0===(536870912&wc)||pa){var e=je;0===(3932160&(je<<=1))&&(je=262144),Cc=e}else Cc=536870912;return null!==(e=Ri.current)&&(e.flags|=32),Cc}function Yc(e,t,n){(e!==mc||2!==yc&&9!==yc)&&null===e.cancelPendingCommit||(nu(e,0),Zc(e,wc,Cc,!1)),Ae(e,n),0!==(2&fc)&&e===mc||(e===mc&&(0===(2&fc)&&(Ec|=n),4===jc&&Zc(e,wc,Cc,!1)),Du(e))}function Qc(e,t,n){if(0!==(6&fc))throw Error(o(327));for(var r=!n&&0===(127&t)&&0===(t&e.expiredLanes)||Ce(e,t),a=r?function(e,t){var n=fc;fc|=2;var r=iu(),a=ou();mc!==e||wc!==t?(Dc=null,Nc=le()+500,nu(e,t)):vc=Ce(e,t);e:for(;;)try{if(0!==yc&&null!==gc){t=gc;var i=bc;t:switch(yc){case 1:yc=0,bc=null,hu(e,t,i,1);break;case 2:case 9:if(ni(i)){yc=0,bc=null,pu(t);break}t=function(){2!==yc&&9!==yc||mc!==e||(yc=7),Du(e)},i.then(t,t);break e;case 3:yc=7;break e;case 4:yc=5;break e;case 7:ni(i)?(yc=0,bc=null,pu(t)):(yc=0,bc=null,hu(e,t,i,7));break;case 5:var s=null;switch(gc.tag){case 26:s=gc.memoizedState;case 5:case 27:var l=gc;if(s?ip(s):l.stateNode.complete){yc=0,bc=null;var c=l.sibling;if(null!==c)gc=c;else{var u=l.return;null!==u?(gc=u,fu(u)):gc=null}break t}}yc=0,bc=null,hu(e,t,i,5);break;case 6:yc=0,bc=null,hu(e,t,i,6);break;case 8:tu(),jc=6;break e;default:throw Error(o(462))}}uu();break}catch(d){ru(e,d)}return Sa=ja=null,O.H=r,O.A=a,fc=n,null!==gc?0:(mc=null,wc=0,Ir(),jc)}(e,t):lu(e,t,!0),i=r;;){if(0===a){vc&&!r&&Zc(e,t,0,!1);break}if(n=e.current.alternate,!i||Xc(n)){if(2===a){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;a=Tc;var c=l.current.memoizedState.isDehydrated;if(c&&(nu(l,s).flags|=256),2!==(s=lu(l,s,!1))){if(kc&&!c){l.errorRecoveryDisabledLanes|=i,Ec|=i,a=4;break e}i=Ic,Ic=a,null!==i&&(null===Ic?Ic=i:Ic.push.apply(Ic,i))}a=s}if(i=!1,2!==a)continue}}if(1===a){nu(e,0),Zc(e,t,0,!0);break}e:{switch(r=e,i=a){case 0:case 1:throw Error(o(345));case 4:if((4194048&t)!==t)break;case 6:Zc(r,t,Cc,!xc);break e;case 2:Ic=null;break;case 3:case 5:break;default:throw Error(o(329))}if((62914560&t)===t&&10<(a=Rc+300-le())){if(Zc(r,t,Cc,!xc),0!==_e(r,0,!0))break e;Uc=t,r.timeoutHandle=kd(Jc.bind(null,r,n,Ic,Dc,Ac,t,Cc,Ec,Pc,xc,i,"Throttled",-0,0),a)}else Jc(r,n,Ic,Dc,Ac,t,Cc,Ec,Pc,xc,i,null,-0,0)}break}a=lu(e,t,!1),i=!1}Du(e)}function Jc(e,t,n,r,a,i,o,s,l,c,u,d,p,h){if(e.timeoutHandle=-1,8192&(d=t.subtreeFlags)||16785408===(16785408&d)){oc(t,i,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:At});var f=(62914560&i)===i?Rc-le():(4194048&i)===i?Oc-le():0;if(null!==(f=function(e,t){return e.stylesheets&&0===e.count&&cp(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&cp(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&0===op&&(op=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var a=n[r],i=a.transferSize,o=a.initiatorType,s=a.duration;if(i&&s&&fd(o)){for(o=0,s=a.responseEnd,r+=1;r<n.length;r++){var l=n[r],c=l.startTime;if(c>s)break;var u=l.transferSize,d=l.initiatorType;u&&fd(d)&&(o+=u*((l=l.responseEnd)<s?1:(s-c)/(l-c)))}if(--r,t+=8*(i+o)/(a.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"===typeof(e=navigator.connection.downlink)?e:5}());var a=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&cp(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>op?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(a)}}:null}(d,f)))return Uc=i,e.cancelPendingCommit=f(gu.bind(null,e,t,i,n,r,a,o,s,l,u,d,null,p,h)),void Zc(e,i,o,!c)}gu(e,t,i,n,r,a,o,s,l)}function Xc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Zn(i(),a))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zc(e,t,n,r){t&=~_c,t&=~Ec,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var i=31-xe(a),o=1<<i;r[i]=-1,a&=~o}0!==n&&Re(e,n,t)}function eu(){return 0!==(6&fc)||($u(0,!1),!1)}function tu(){if(null!==gc){if(0===yc)var e=gc.return;else Sa=ja=null,so(e=gc),li=null,ci=0,e=gc;for(;null!==e;)gl(e.alternate,e),e=e.return;gc=null}}function nu(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,zd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Uc=0,tu(),mc=e,gc=n=Ur(e.current,null),wc=t,yc=0,bc=null,xc=!1,vc=Ce(e,t),kc=!1,Pc=Cc=_c=Ec=Sc=jc=0,Ic=Tc=null,Ac=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-xe(r),i=1<<a;t|=e[a],r&=~i}return zc=t,Ir(),n}function ru(e,t){Hi=null,O.H=gs,t===Xa||t===ei?(t=oi(),yc=3):t===Za?(t=oi(),yc=4):yc=t===Rs?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,bc=t,null===gc&&(jc=1,Cs(e,Yr(t,e.current)))}function au(){var e=Ri.current;return null===e||((4194048&wc)===wc?null===Oi:((62914560&wc)===wc||0!==(536870912&wc))&&e===Oi)}function iu(){var e=O.H;return O.H=gs,null===e?gs:e}function ou(){var e=O.A;return O.A=pc,e}function su(){jc=4,xc||(4194048&wc)!==wc&&null!==Ri.current||(vc=!0),0===(134217727&Sc)&&0===(134217727&Ec)||null===mc||Zc(mc,wc,Cc,!1)}function lu(e,t,n){var r=fc;fc|=2;var a=iu(),i=ou();mc===e&&wc===t||(Dc=null,nu(e,t)),t=!1;var o=jc;e:for(;;)try{if(0!==yc&&null!==gc){var s=gc,l=bc;switch(yc){case 8:tu(),o=6;break e;case 3:case 2:case 9:case 6:null===Ri.current&&(t=!0);var c=yc;if(yc=0,bc=null,hu(e,s,l,c),n&&vc){o=0;break e}break;default:c=yc,yc=0,bc=null,hu(e,s,l,c)}}cu(),o=jc;break}catch(u){ru(e,u)}return t&&e.shellSuspendCounter++,Sa=ja=null,fc=r,O.H=a,O.A=i,null===gc&&(mc=null,wc=0,Ir()),o}function cu(){for(;null!==gc;)du(gc)}function uu(){for(;null!==gc&&!oe();)du(gc)}function du(e){var t=sl(e.alternate,e,zc);e.memoizedProps=e.pendingProps,null===t?fu(e):gc=t}function pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ks(n,t,t.pendingProps,t.type,void 0,wc);break;case 11:t=Ks(n,t,t.pendingProps,t.type.render,t.ref,wc);break;case 5:so(t);default:gl(n,t),t=sl(n,t=gc=Br(t,zc),zc)}e.memoizedProps=e.pendingProps,null===t?fu(e):gc=t}function hu(e,t,n,r){Sa=ja=null,so(t),li=null,ci=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Ta(t,n,a,!0),null!==(n=Ri.current)){switch(n.tag){case 31:case 13:return null===Oi?su():null===n.alternate&&0===jc&&(jc=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ti?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),Su(e,r,a)),!1;case 22:return n.flags|=65536,r===ti?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),Su(e,r,a)),!1}throw Error(o(435,n.tag))}return Su(e,r,a),su(),!1}if(pa)return null!==(t=Ri.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ma&&ka(Yr(e=Error(o(422),{cause:r}),n))):(r!==ma&&ka(Yr(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=Yr(r,n),ki(e,a=Ts(e.stateNode,r,a)),4!==jc&&(jc=2)),!1;var i=Error(o(520),{cause:r});if(i=Yr(i,n),null===Tc?Tc=[i]:Tc.push(i),4!==jc&&(jc=2),null===t)return!0;r=Yr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,ki(n,e=Ts(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===$c||!$c.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,As(a=Is(a),e,n,r),ki(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,wc))return jc=1,Cs(e,Yr(n,e.current)),void(gc=null)}catch(i){if(null!==a)throw gc=a,i;return jc=1,Cs(e,Yr(n,e.current)),void(gc=null)}32768&t.flags?(pa||1===r?e=!0:vc||0!==(536870912&wc)?e=!1:(xc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=Ri.current)&&13===r.tag&&(r.flags|=16384))),mu(t,e)):fu(t)}function fu(e){var t=e;do{if(0!==(32768&t.flags))return void mu(t,xc);e=t.return;var n=fl(t.alternate,t,zc);if(null!==n)return void(gc=n);if(null!==(t=t.sibling))return void(gc=t);gc=t=e}while(null!==t);0===jc&&(jc=5)}function mu(e,t){do{var n=ml(e.alternate,e);if(null!==n)return n.flags&=32767,void(gc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(gc=e);gc=e=n}while(null!==e);jc=6,gc=null}function gu(e,t,n,r,a,i,s,l,c){e.cancelPendingCommit=null;do{vu()}while(0!==Lc);if(0!==(6&fc))throw Error(o(327));if(null!==t){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,function(e,t,n,r,a,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-xe(n),d=1<<u;s[u]=0,l[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var h=p[u];null!==h&&(h.lane&=-536870913)}n&=~d}0!==r&&Re(e,r,0),0!==i&&0===a&&0!==e.tag&&(e.suspendedLanes|=i&~(o&~t))}(e,n,i|=Tr,s,l,c),e===mc&&(gc=mc=null,wc=0),Fc=t,Mc=e,Uc=n,Bc=i,Hc=a,Wc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,ae(pe,function(){return ku(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=O.T,O.T=null,a=N.p,N.p=2,s=fc,fc|=4;try{!function(e,t){if(e=e.containerInfo,md=xp,ir(e=ar(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(g){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var f;p!==n||0!==a&&3!==p.nodeType||(l=s+a),p!==i||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(f=p.firstChild);)h=p,p=f;for(;;){if(p===e)break t;if(h===n&&++u===a&&(l=s),h===i&&++d===r&&(c=s),null!==(f=p.nextSibling))break;h=(p=h).parentNode}p=f}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(gd={focusedElem:e,selectionRange:n},xp=!1,Ol=t;null!==Ol;)if(e=(t=Ol).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Ol=e;else for(;null!==Ol;){switch(i=(t=Ol).alternate,e=t.flags,t.tag){case 0:if(0!==(4&e)&&null!==(e=null!==(e=t.updateQueue)?e.events:null))for(n=0;n<e.length;n++)(a=e[n]).ref.impl=a.nextImpl;break;case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==i){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,r=n.stateNode;try{var m=js(n.type,a);e=r.getSnapshotBeforeUpdate(m,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(w){ju(n,n.return,w)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))Td(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Td(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,Ol=e;break}Ol=t.return}}(e,t)}finally{fc=s,N.p=a,O.T=r}}Lc=1,wu(),yu(),bu()}}function wu(){if(1===Lc){Lc=0;var e=Mc,t=Fc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=O.T,O.T=null;var r=N.p;N.p=2;var a=fc;fc|=4;try{Kl(t,e);var i=gd,o=ar(e.containerInfo),s=i.focusedElem,l=i.selectionRange;if(o!==s&&s&&s.ownerDocument&&rr(s.ownerDocument.documentElement,s)){if(null!==l&&ir(s)){var c=l.start,u=l.end;if(void 0===u&&(u=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,p=d&&d.defaultView||window;if(p.getSelection){var h=p.getSelection(),f=s.textContent.length,m=Math.min(l.start,f),g=void 0===l.end?m:Math.min(l.end,f);!h.extend&&m>g&&(o=g,g=m,m=o);var w=nr(s,m),y=nr(s,g);if(w&&y&&(1!==h.rangeCount||h.anchorNode!==w.node||h.anchorOffset!==w.offset||h.focusNode!==y.node||h.focusOffset!==y.offset)){var b=d.createRange();b.setStart(w.node,w.offset),h.removeAllRanges(),m>g?(h.addRange(b),h.extend(y.node,y.offset)):(b.setEnd(y.node,y.offset),h.addRange(b))}}}}for(d=[],h=s;h=h.parentNode;)1===h.nodeType&&d.push({element:h,left:h.scrollLeft,top:h.scrollTop});for("function"===typeof s.focus&&s.focus(),s=0;s<d.length;s++){var x=d[s];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}xp=!!md,gd=md=null}finally{fc=a,N.p=r,O.T=n}}e.current=t,Lc=2}}function yu(){if(2===Lc){Lc=0;var e=Mc,t=Fc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=O.T,O.T=null;var r=N.p;N.p=2;var a=fc;fc|=4;try{Nl(e,t.alternate,t)}finally{fc=a,N.p=r,O.T=n}}Lc=3}}function bu(){if(4===Lc||3===Lc){Lc=0,se();var e=Mc,t=Fc,n=Uc,r=Wc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Lc=5:(Lc=0,Fc=Mc=null,xu(e,e.pendingLanes));var a=e.pendingLanes;if(0===a&&($c=null),$e(n),t=t.stateNode,ye&&"function"===typeof ye.onCommitFiberRoot)try{ye.onCommitFiberRoot(we,t,void 0,128===(128&t.current.flags))}catch(l){}if(null!==r){t=O.T,a=N.p,N.p=2,O.T=null;try{for(var i=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];i(s.value,{componentStack:s.stack})}}finally{O.T=t,N.p=a}}0!==(3&Uc)&&vu(),Du(e),a=e.pendingLanes,0!==(261930&n)&&0!==(42&a)?e===Kc?Vc++:(Vc=0,Kc=e):Vc=0,$u(0,!1)}}function xu(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Ua(t)))}function vu(){return wu(),yu(),bu(),ku()}function ku(){if(5!==Lc)return!1;var e=Mc,t=Bc;Bc=0;var n=$e(Uc),r=O.T,a=N.p;try{N.p=32>n?32:n,O.T=null,n=Hc,Hc=null;var i=Mc,s=Uc;if(Lc=0,Fc=Mc=null,Uc=0,0!==(6&fc))throw Error(o(331));var l=fc;if(fc|=4,cc(i.current),tc(i,i.current,s,n),fc=l,$u(0,!1),ye&&"function"===typeof ye.onPostCommitFiberRoot)try{ye.onPostCommitFiberRoot(we,i)}catch(c){}return!0}finally{N.p=a,O.T=r,xu(e,t)}}function zu(e,t,n){t=Yr(n,t),null!==(e=xi(e,t=Ts(e.stateNode,t,2),2))&&(Ae(e,2),Du(e))}function ju(e,t,n){if(3===e.tag)zu(e,e,n);else for(;null!==t;){if(3===t.tag){zu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===$c||!$c.has(r))){e=Yr(n,e),null!==(r=xi(t,n=Is(2),2))&&(As(n,r,t,e),Ae(r,2),Du(r));break}}t=t.return}}function Su(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new hc;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(kc=!0,a.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,mc===e&&(wc&n)===n&&(4===jc||3===jc&&(62914560&wc)===wc&&300>le()-Rc?0===(2&fc)&&nu(e,0):_c|=n,Pc===wc&&(Pc=0)),Du(e)}function _u(e,t){0===t&&(t=Te()),null!==(e=Or(e,t))&&(Ae(e,t),Du(e))}function Cu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),_u(e,n)}function Pu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),_u(e,n)}var Tu=null,Iu=null,Au=!1,Ru=!1,Ou=!1,Nu=0;function Du(e){e!==Iu&&null===e.next&&(null===Iu?Tu=Iu=e:Iu=Iu.next=e),Ru=!0,Au||(Au=!0,Sd(function(){0!==(6&fc)?ae(ue,Lu):Mu()}))}function $u(e,t){if(!Ou&&Ru){Ou=!0;do{for(var n=!1,r=Tu;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var i=0;else{var o=r.suspendedLanes,s=r.pingedLanes;i=(1<<31-xe(42|e)+1)-1,i=201326741&(i&=a&~(o&~s))?201326741&i|1:i?2|i:0}0!==i&&(n=!0,Bu(r,i))}else i=wc,0===(3&(i=_e(r,r===mc?i:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||Ce(r,i)||(n=!0,Bu(r,i));r=r.next}}while(n);Ou=!1}}function Lu(){Mu()}function Mu(){Ru=Au=!1;var e=0;0!==Nu&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==vd&&(vd=e,!0);return vd=null,!1}()&&(e=Nu);for(var t=le(),n=null,r=Tu;null!==r;){var a=r.next,i=Fu(r,t);0===i?(r.next=null,null===n?Tu=a:n.next=a,null===a&&(Iu=n)):(n=r,(0!==e||0!==(3&i))&&(Ru=!0)),r=a}0!==Lc&&5!==Lc||$u(e,!1),0!==Nu&&(Nu=0)}function Fu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=-62914561&e.pendingLanes;0<i;){var o=31-xe(i),s=1<<o,l=a[o];-1===l?0!==(s&n)&&0===(s&r)||(a[o]=Pe(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}if(n=wc,n=_e(e,e===(t=mc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===yc||9===yc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ie(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||Ce(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&ie(r),$e(n)){case 2:case 8:n=de;break;case 32:default:n=pe;break;case 268435456:n=fe}return r=Uu.bind(null,e),n=ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ie(r),e.callbackPriority=2,e.callbackNode=null,2}function Uu(e,t){if(0!==Lc&&5!==Lc)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(vu()&&e.callbackNode!==n)return null;var r=wc;return 0===(r=_e(e,e===mc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Qc(e,r,t),Fu(e,le()),null!=e.callbackNode&&e.callbackNode===n?Uu.bind(null,e):null)}function Bu(e,t){if(vu())return null;Qc(e,t,!0)}function Hu(){if(0===Nu){var e=Wa;0===e&&(e=ze,0===(261888&(ze<<=1))&&(ze=256)),Nu=e}return Nu}function Wu(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:It(""+e)}function Vu(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Ku=0;Ku<Sr.length;Ku++){var Gu=Sr[Ku];Er(Gu.toLowerCase(),"on"+(Gu[0].toUpperCase()+Gu.slice(1)))}Er(wr,"onAnimationEnd"),Er(yr,"onAnimationIteration"),Er(br,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(xr,"onTransitionRun"),Er(vr,"onTransitionStart"),Er(kr,"onTransitionCancel"),Er(zr,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qu));function Qu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;i=s,a.currentTarget=c;try{i(a)}catch(u){_r(u)}a.currentTarget=null,i=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;i=s,a.currentTarget=c;try{i(a)}catch(u){_r(u)}a.currentTarget=null,i=l}}}}function Ju(e,t){var n=t[We];void 0===n&&(n=t[We]=new Set);var r=e+"__bubble";n.has(r)||(td(t,e,2,!1),n.add(r))}function Xu(e,t,n){var r=0;t&&(r|=4),td(n,e,r,t)}var Zu="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[Zu]){e[Zu]=!0,tt.forEach(function(t){"selectionchange"!==t&&(Yu.has(t)||Xu(t,!1,e),Xu(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Zu]||(t[Zu]=!0,Xu("selectionchange",!1,t))}}function td(e,t,n,r){switch(_p(t)){case 2:var a=vp;break;case 8:a=kp;break;default:a=zp}n=a.bind(null,t,n,e),a=void 0,!Bt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function nd(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===a)break;if(4===o)for(o=r.return;null!==o;){var c=o.tag;if((3===c||4===c)&&o.stateNode.containerInfo===a)return;o=o.return}for(;null!==s;){if(null===(o=Qe(s)))return;if(5===(c=o.tag)||6===c||26===c||27===c){r=i=o;continue e}s=s.parentNode}}r=r.return}Mt(function(){var r=i,a=Ot(n),o=[];e:{var s=jr.get(e);if(void 0!==s){var c=nn,u=e;switch(e){case"keypress":if(0===qt(n))break e;case"keydown":case"keyup":c=yn;break;case"focusin":u="focus",c=cn;break;case"focusout":u="blur",c=cn;break;case"beforeblur":case"afterblur":c=cn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=ln;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=xn;break;case wr:case yr:case br:c=un;break;case zr:c=vn;break;case"scroll":case"scrollend":c=an;break;case"wheel":c=kn;break;case"copy":case"cut":case"paste":c=dn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=bn;break;case"toggle":case"beforetoggle":c=zn}var d=0!==(4&t),p=!d&&("scroll"===e||"scrollend"===e),h=d?null!==s?s+"Capture":null:s;d=[];for(var f,m=r;null!==m;){var g=m;if(f=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===f||null===h||null!=(g=Ft(m,h))&&d.push(rd(m,g,f)),p)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,a),o.push({event:s,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===Rt||!(u=n.relatedTarget||n.fromElement)||!Qe(u)&&!u[He])&&(c||s)&&(s=a.window===a?a:(s=a.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Qe(u):null)&&(p=l(u),d=u.tag,u!==p||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=sn,g="onMouseLeave",h="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=bn,g="onPointerLeave",h="onPointerEnter",m="pointer"),p=null==c?s:Xe(c),f=null==u?s:Xe(u),(s=new d(g,m+"leave",c,n,a)).target=p,s.relatedTarget=f,g=null,Qe(a)===r&&((d=new d(h,m+"enter",u,n,a)).target=f,d.relatedTarget=p,g=d),p=g,c&&u)e:{for(d=id,m=u,f=0,g=h=c;g;g=d(g))f++;g=0;for(var w=m;w;w=d(w))g++;for(;0<f-g;)h=d(h),f--;for(;0<g-f;)m=d(m),g--;for(;f--;){if(h===m||null!==m&&h===m.alternate){d=h;break e}h=d(h),m=d(m)}d=null}else d=null;null!==c&&od(o,s,c,d,!1),null!==u&&null!==p&&od(o,p,u,d,!0)}if("select"===(c=(s=r?Xe(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var y=Un;else if(Nn(s))if(Bn)y=Xn;else{y=Qn;var b=Yn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&Ct(r.elementType)&&(y=Un):y=Jn;switch(y&&(y=y(e,r))?Dn(o,y,n,a):(b&&b(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&xt(s,"number",s.value)),b=r?Xe(r):window,e){case"focusin":(Nn(b)||"true"===b.contentEditable)&&(sr=b,lr=r,cr=null);break;case"focusout":cr=lr=sr=null;break;case"mousedown":ur=!0;break;case"contextmenu":case"mouseup":case"dragend":ur=!1,dr(o,n,a);break;case"selectionchange":if(or)break;case"keydown":case"keyup":dr(o,n,a)}var x;if(Sn)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Rn?In(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Cn&&"ko"!==n.locale&&(Rn||"onCompositionStart"!==v?"onCompositionEnd"===v&&Rn&&(x=Gt()):(Vt="value"in(Wt=a)?Wt.value:Wt.textContent,Rn=!0)),0<(b=ad(r,v)).length&&(v=new pn(v,e,null,n,a),o.push({event:v,listeners:b}),x?v.data=x:null!==(x=An(n))&&(v.data=x))),(x=_n?function(e,t){switch(e){case"compositionend":return An(t);case"keypress":return 32!==t.which?null:(Tn=!0,Pn);case"textInput":return(e=t.data)===Pn&&Tn?null:e;default:return null}}(e,n):function(e,t){if(Rn)return"compositionend"===e||!Sn&&In(e,t)?(e=Gt(),Kt=Vt=Wt=null,Rn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(v=ad(r,"onBeforeInput")).length&&(b=new pn("onBeforeInput","beforeinput",null,n,a),o.push({event:b,listeners:v}),b.data=x)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var i=Wu((a[Be]||null).action),o=r.submitter;o&&null!==(t=(t=o[Be]||null)?Wu(t.formAction):o.getAttribute("formAction"))&&(i=t,o=null);var s=new nn("action","action",null,r,a);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==Nu){var e=o?Vu(a,o):new FormData(a);ns(n,{pending:!0,data:e,method:a.method,action:i},null,e)}}else"function"===typeof i&&(s.preventDefault(),e=o?Vu(a,o):new FormData(a),ns(n,{pending:!0,data:e,method:a.method,action:i},i,e))},currentTarget:a}]})}}(o,e,r,n,a)}Qu(o,t)})}function rd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ad(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===i||(null!=(a=Ft(e,n))&&r.unshift(rd(e,a,i)),null!=(a=Ft(e,t))&&r.push(rd(e,a,i))),3===e.tag)return r;e=e.return}return[]}function id(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function od(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===c||(l=c,a?null!=(c=Ft(n,i))&&o.unshift(rd(n,c,l)):a||null!=(c=Ft(n,i))&&o.push(rd(n,c,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var sd=/\r\n?/g,ld=/\u0000|\uFFFD/g;function cd(e){return("string"===typeof e?e:""+e).replace(sd,"\n").replace(ld,"")}function ud(e,t){return t=cd(t),cd(e)===t}function dd(e,t,n,r,a,i){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||jt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&jt(e,""+r);break;case"className":ct(e,"class",r);break;case"tabIndex":ct(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ct(e,n,r);break;case"style":_t(e,r,i);break;case"data":if("object"!==t){ct(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=It(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&dd(e,t,"name",a.name,a,null),dd(e,t,"formEncType",a.formEncType,a,null),dd(e,t,"formMethod",a.formMethod,a,null),dd(e,t,"formTarget",a.formTarget,a,null)):(dd(e,t,"encType",a.encType,a,null),dd(e,t,"method",a.method,a,null),dd(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=It(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=At);break;case"onScroll":null!=r&&Ju("scroll",e);break;case"onScrollEnd":null!=r&&Ju("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=It(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Ju("beforetoggle",e),Ju("toggle",e),lt(e,"popover",r);break;case"xlinkActuate":ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ut(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ut(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ut(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ut(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":lt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&lt(e,n=Pt.get(n)||n,r)}}function pd(e,t,n,r,a,i){switch(n){case"style":_t(e,r,i);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?jt(e,r):("number"===typeof r||"bigint"===typeof r)&&jt(e,""+r);break;case"onScroll":null!=r&&Ju("scroll",e);break;case"onScrollEnd":null!=r&&Ju("scrollend",e);break;case"onClick":null!=r&&(e.onclick=At);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:nt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(i=null!=(i=e[Be]||null)?i[n]:null)&&e.removeEventListener(t,i,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):lt(e,n,r):("function"!==typeof i&&null!==i&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function hd(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ju("error",e),Ju("load",e);var r,a=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:dd(e,t,r,s,n,null)}}return i&&dd(e,t,"srcSet",n.srcSet,n,null),void(a&&dd(e,t,"src",n.src,n,null));case"input":Ju("invalid",e);var l=r=s=i=null,c=null,u=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":i=d;break;case"type":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:dd(e,t,a,d,n,null)}}return void bt(e,r,l,c,u,s,i,!1);case"select":for(i in Ju("invalid",e),a=s=r=null,n)if(n.hasOwnProperty(i)&&null!=(l=n[i]))switch(i){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":a=l;default:dd(e,t,i,l,n,null)}return t=r,n=s,e.multiple=!!a,void(null!=t?vt(e,!!a,t,!1):null!=n&&vt(e,!!a,n,!0));case"textarea":for(s in Ju("invalid",e),r=i=a=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":a=l;break;case"defaultValue":i=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(o(91));break;default:dd(e,t,s,l,n,null)}return void zt(e,a,i,r);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))if("selected"===c)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else dd(e,t,c,a,n,null);return;case"dialog":Ju("beforetoggle",e),Ju("toggle",e),Ju("cancel",e),Ju("close",e);break;case"iframe":case"object":Ju("load",e);break;case"video":case"audio":for(a=0;a<qu.length;a++)Ju(qu[a],e);break;case"image":Ju("error",e),Ju("load",e);break;case"details":Ju("toggle",e);break;case"embed":case"source":case"link":Ju("error",e),Ju("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:dd(e,t,u,a,n,null)}return;default:if(Ct(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&pd(e,t,d,a,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(a=n[l])&&dd(e,t,l,a,n,null))}function fd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var md=null,gd=null;function wd(e){return 9===e.nodeType?e:e.ownerDocument}function yd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bd(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function xd(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var vd=null;var kd="function"===typeof setTimeout?setTimeout:void 0,zd="function"===typeof clearTimeout?clearTimeout:void 0,jd="function"===typeof Promise?Promise:void 0,Sd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof jd?function(e){return jd.resolve(null).then(e).catch(Ed)}:kd;function Ed(e){setTimeout(function(){throw e})}function _d(e){return"head"===e}function Cd(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)||"/&"===n){if(0===r)return e.removeChild(a),void Vp(t);r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;else if("html"===n)Md(e.ownerDocument.documentElement);else if("head"===n){Md(n=e.ownerDocument.head);for(var i=n.firstChild;i;){var o=i.nextSibling,s=i.nodeName;i[qe]||"SCRIPT"===s||"STYLE"===s||"LINK"===s&&"stylesheet"===i.rel.toLowerCase()||n.removeChild(i),i=o}}else"body"===n&&Md(e.ownerDocument.body);n=a}while(n);Vp(t)}function Pd(e,t){var n=e;e=0;do{var r=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=r}while(n)}function Td(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Td(n),Ye(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function Id(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=Od(e.nextSibling)))return null}return e}function Ad(e){return"$?"===e.data||"$~"===e.data}function Rd(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Od(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}var Nd=null;function Dd(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return Od(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function $d(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Ld(e,t,n){switch(t=wd(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}function Md(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ye(e)}var Fd=new Map,Ud=new Set;function Bd(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Hd=N.d;N.d={f:function(){var e=Hd.f(),t=eu();return e||t},r:function(e){var t=Je(e);null!==t&&5===t.tag&&"form"===t.type?as(t):Hd.r(e)},D:function(e){Hd.D(e),Vd("dns-prefetch",e,null)},C:function(e,t){Hd.C(e,t),Vd("preconnect",e,t)},L:function(e,t,n){Hd.L(e,t,n);var r=Wd;if(r&&e&&t){var a='link[rel="preload"][as="'+wt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+wt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+wt(n.imageSizes)+'"]')):a+='[href="'+wt(e)+'"]';var i=a;switch(t){case"style":i=Gd(e);break;case"script":i=Qd(e)}Fd.has(i)||(e=h({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Fd.set(i,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(qd(i))||"script"===t&&r.querySelector(Jd(i))||(hd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}},m:function(e,t){Hd.m(e,t);var n=Wd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+wt(r)+'"][href="'+wt(e)+'"]',i=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Qd(e)}if(!Fd.has(i)&&(e=h({rel:"modulepreload",href:e},t),Fd.set(i,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Jd(i)))return}hd(r=n.createElement("link"),"link",e),et(r),n.head.appendChild(r)}}},X:function(e,t){Hd.X(e,t);var n=Wd;if(n&&e){var r=Ze(n).hoistableScripts,a=Qd(e),i=r.get(a);i||((i=n.querySelector(Jd(a)))||(e=h({src:e,async:!0},t),(t=Fd.get(a))&&tp(e,t),et(i=n.createElement("script")),hd(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}},S:function(e,t,n){Hd.S(e,t,n);var r=Wd;if(r&&e){var a=Ze(r).hoistableStyles,i=Gd(e);t=t||"default";var o=a.get(i);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(qd(i)))s.loading=5;else{e=h({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Fd.get(i))&&ep(e,n);var l=o=r.createElement("link");et(l),hd(l,"link",e),l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),l.addEventListener("load",function(){s.loading|=1}),l.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Zd(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:s},a.set(i,o)}}},M:function(e,t){Hd.M(e,t);var n=Wd;if(n&&e){var r=Ze(n).hoistableScripts,a=Qd(e),i=r.get(a);i||((i=n.querySelector(Jd(a)))||(e=h({src:e,async:!0,type:"module"},t),(t=Fd.get(a))&&tp(e,t),et(i=n.createElement("script")),hd(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}}};var Wd="undefined"===typeof document?null:document;function Vd(e,t,n){var r=Wd;if(r&&"string"===typeof t&&t){var a=wt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),Ud.has(a)||(Ud.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(hd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}}function Kd(e,t,n,r){var a,i,s,l,c=(c=K.current)?Bd(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Gd(n.href),(r=(n=Ze(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Gd(n.href);var u=Ze(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(qd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Fd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Fd.set(e,n),u||(a=c,i=e,s=n,l=d.state,a.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=a.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),hd(i,"link",s),et(i),a.head.appendChild(i))))),t&&null===r)throw Error(o(528,""));return d}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Qd(n),(r=(n=Ze(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Gd(e){return'href="'+wt(e)+'"'}function qd(e){return'link[rel="stylesheet"]['+e+"]"}function Yd(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Qd(e){return'[src="'+wt(e)+'"]'}function Jd(e){return"script[async]"+e}function Xd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+wt(n.href)+'"]');if(r)return t.instance=r,et(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return et(r=(e.ownerDocument||e).createElement("style")),hd(r,"style",a),Zd(r,n.precedence,e),t.instance=r;case"stylesheet":a=Gd(n.href);var i=e.querySelector(qd(a));if(i)return t.state.loading|=4,t.instance=i,et(i),i;r=Yd(n),(a=Fd.get(a))&&ep(r,a),et(i=(e.ownerDocument||e).createElement("link"));var s=i;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),hd(i,"link",r),t.state.loading|=4,Zd(i,n.precedence,e),t.instance=i;case"script":return i=Qd(n.src),(a=e.querySelector(Jd(i)))?(t.instance=a,et(a),a):(r=n,(a=Fd.get(i))&&tp(r=h({},n),a),et(a=(e=e.ownerDocument||e).createElement("script")),hd(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Zd(r,n.precedence,e));return t.instance}function Zd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,i=a,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)i=s;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function ep(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function tp(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var np=null;function rp(e,t,n){if(null===np){var r=new Map,a=np=new Map;a.set(n,r)}else(r=(a=np).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[qe]||i[Ue]||"link"===e&&"stylesheet"===i.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==i.namespaceURI){var o=i.getAttribute(t)||"";o=e+o;var s=r.get(o);s?s.push(i):r.set(o,[i])}}return r}function ap(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function ip(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var op=0;function sp(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)cp(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var lp=null;function cp(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,lp=new Map,t.forEach(up,e),lp=null,sp.call(e))}function up(e,t){if(!(4&t.state.loading)){var n=lp.get(e);if(n)var r=n.get(null);else{n=new Map,lp.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var o=a[i];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(a=t.instance).getAttribute("data-precedence"),(i=n.get(o)||r)===r&&n.set(null,a),n.set(o,a),this.count++,r=sp.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),i?i.parentNode.insertBefore(a,i.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var dp={$$typeof:v,Provider:null,Consumer:null,_currentValue:D,_currentValue2:D,_threadCount:0};function pp(e,t,n,r,a,i,o,s,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ie(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ie(0),this.hiddenUpdates=Ie(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function hp(e,t,n,r,a,i,o,s,l,c,u,d){return e=new pp(e,t,n,o,l,c,u,d,s),t=1,!0===i&&(t|=24),i=Mr(3,null,null,t),e.current=i,i.stateNode=e,(t=Fa()).refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},wi(i),e}function fp(e){return e?e=$r:$r}function mp(e,t,n,r,a,i){a=fp(a),null===r.context?r.context=a:r.pendingContext=a,(r=bi(t)).payload={element:n},null!==(i=void 0===i?null:i)&&(r.callback=i),null!==(n=xi(e,r,t))&&(Yc(n,0,t),vi(n,e,t))}function gp(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function wp(e,t){gp(e,t),(e=e.alternate)&&gp(e,t)}function yp(e){if(13===e.tag||31===e.tag){var t=Or(e,67108864);null!==t&&Yc(t,0,67108864),wp(e,67108864)}}function bp(e){if(13===e.tag||31===e.tag){var t=Gc(),n=Or(e,t=De(t));null!==n&&Yc(n,0,t),wp(e,t)}}var xp=!0;function vp(e,t,n,r){var a=O.T;O.T=null;var i=N.p;try{N.p=2,zp(e,t,n,r)}finally{N.p=i,O.T=a}}function kp(e,t,n,r){var a=O.T;O.T=null;var i=N.p;try{N.p=8,zp(e,t,n,r)}finally{N.p=i,O.T=a}}function zp(e,t,n,r){if(xp){var a=jp(r);if(null===a)nd(e,t,r,Sp,n),Dp(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Pp=$p(Pp,e,t,n,r,a),!0;case"dragenter":return Tp=$p(Tp,e,t,n,r,a),!0;case"mouseover":return Ip=$p(Ip,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Ap.set(i,$p(Ap.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Rp.set(i,$p(Rp.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Dp(e,r),4&t&&-1<Np.indexOf(e)){for(;null!==a;){var i=Je(a);if(null!==i)switch(i.tag){case 3:if((i=i.stateNode).current.memoizedState.isDehydrated){var o=Ee(i.pendingLanes);if(0!==o){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var l=1<<31-xe(o);s.entanglements[1]|=l,o&=~l}Du(i),0===(6&fc)&&(Nc=le()+500,$u(0,!1))}}break;case 31:case 13:null!==(s=Or(i,2))&&Yc(s,0,2),eu(),wp(i,2)}if(null===(i=jp(r))&&nd(e,t,r,Sp,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else nd(e,t,r,null,n)}}function jp(e){return Ep(e=Ot(e))}var Sp=null;function Ep(e){if(Sp=null,null!==(e=Qe(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(31===n){if(null!==(e=u(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Sp=e,null}function _p(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case ue:return 2;case de:return 8;case pe:case he:return 32;case fe:return 268435456;default:return 32}default:return 32}}var Cp=!1,Pp=null,Tp=null,Ip=null,Ap=new Map,Rp=new Map,Op=[],Np="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dp(e,t){switch(e){case"focusin":case"focusout":Pp=null;break;case"dragenter":case"dragleave":Tp=null;break;case"mouseover":case"mouseout":Ip=null;break;case"pointerover":case"pointerout":Ap.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rp.delete(t.pointerId)}}function $p(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=Je(t))&&yp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Lp(e){var t=Qe(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void Me(e.priority,function(){bp(n)})}else if(31===t){if(null!==(t=u(n)))return e.blockedOn=t,void Me(e.priority,function(){bp(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mp(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=jp(e.nativeEvent);if(null!==n)return null!==(t=Je(n))&&yp(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Rt=r,n.target.dispatchEvent(r),Rt=null,t.shift()}return!0}function Fp(e,t,n){Mp(e)&&n.delete(t)}function Up(){Cp=!1,null!==Pp&&Mp(Pp)&&(Pp=null),null!==Tp&&Mp(Tp)&&(Tp=null),null!==Ip&&Mp(Ip)&&(Ip=null),Ap.forEach(Fp),Rp.forEach(Fp)}function Bp(e,t){e.blockedOn===t&&(e.blockedOn=null,Cp||(Cp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Up)))}var Hp=null;function Wp(e){Hp!==e&&(Hp=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Hp===e&&(Hp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===Ep(r||n))continue;break}var i=Je(n);null!==i&&(e.splice(t,3),t-=3,ns(i,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function Vp(e){function t(t){return Bp(t,e)}null!==Pp&&Bp(Pp,e),null!==Tp&&Bp(Tp,e),null!==Ip&&Bp(Ip,e),Ap.forEach(t),Rp.forEach(t);for(var n=0;n<Op.length;n++){var r=Op[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Op.length&&null===(n=Op[0]).blockedOn;)Lp(n),null===n.blockedOn&&Op.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],i=n[r+1],o=a[Be]||null;if("function"===typeof i)o||Wp(n);else if(o){var s=null;if(i&&i.hasAttribute("formAction")){if(a=i,o=i[Be]||null)s=o.formAction;else if(null!==Ep(a))continue}else s=o.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),Wp(n)}}}function Kp(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return a=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==a&&(a(),a=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var r=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==a&&(a(),a=null)}}}function Gp(e){this._internalRoot=e}function qp(e){this._internalRoot=e}qp.prototype.render=Gp.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));mp(t.current,Gc(),e,t,null,null)},qp.prototype.unmount=Gp.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;mp(e.current,2,null,e,null,null),eu(),t[He]=null}},qp.prototype.unstable_scheduleHydration=function(e){if(e){var t=Le();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Op.length&&0!==t&&t<Op[n].priority;n++);Op.splice(n,0,e),0===n&&Lp(e)}};var Yp=a.version;if("19.2.4"!==Yp)throw Error(o(527,Yp,"19.2.4"));N.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return d(a),e;if(i===r)return d(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s){for(c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?p(e):null)?null:e.stateNode};var Qp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Jp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jp.isDisabled&&Jp.supportsFiber)try{we=Jp.inject(Qp),ye=Jp}catch(Zp){}}t.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,r="",a=Ss,i=Es,l=_s;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError)),t=hp(e,1,!1,null,0,n,r,null,a,i,l,Kp),e[He]=t.current,ed(e),new Gp(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var r=!1,a="",i=Ss,l=Es,c=_s,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.formState&&(u=n.formState)),(t=hp(e,1,!0,t,0,r,a,u,i,l,c,Kp)).context=fp(null),n=t.current,(a=bi(r=De(r=Gc()))).callback=null,xi(n,a,r),n=r,t.current.lanes=n,Ae(t,n),Du(t),e[He]=t.current,ed(e),new qp(t)},t.version="19.2.4"},672(e,t,n){var r=n(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=o.p;try{if(l.T=null,o.p=2,e)return e()}finally{l.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:i}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.2.4"},391(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)},799(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},288(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.for("react.activity"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,w={};function y(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||m}function b(){}function x(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var v=x.prototype=new b;v.constructor=x,g(v,y.prototype),v.isPureReactComponent=!0;var k=Array.isArray;function z(){}var j={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function E(e,t,r){var a=r.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==a?a:null,props:r}}function _(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function T(e,t,a,i,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,c,u=!1;if(null===e)u=!0;else switch(s){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case p:return T((u=e._init)(e._payload),t,a,i,o)}}if(u)return o=o(e),u=""===i?"."+P(e,0):i,k(o)?(a="",null!=u&&(a=u.replace(C,"$&/")+"/"),T(o,t,a,"",function(e){return e})):null!=o&&(_(o)&&(l=o,c=a+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+u,o=E(l.type,c,l.props)),t.push(o)),1;u=0;var d,h=""===i?".":i+":";if(k(e))for(var m=0;m<e.length;m++)u+=T(i=e[m],t,a,s=h+P(i,m),o);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=f&&d[f]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(i=e.next()).done;)u+=T(i=i.value,t,a,s=h+P(i,m++),o);else if("object"===s){if("function"===typeof e.then)return T(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(z,z):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,i,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function I(e,t,n){if(null==e)return e;var r=[],a=0;return T(e,r,"","",function(e){return t.call(n,e,a++)}),r}function A(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},O={map:I,forEach:function(e,t,n){I(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return I(e,function(){t++}),t},toArray:function(e){return I(e,function(e){return e})||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=h,t.Children=O,t.Component=y,t.Fragment=a,t.Profiler=o,t.PureComponent=x,t.StrictMode=i,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return j.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=g({},e.props),a=e.key;if(null!=t)for(i in void 0!==t.key&&(a=""+t.key),t)!S.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var o=Array(i),s=0;s<i;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,a,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,a={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)S.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var o=arguments.length-2;if(1===o)a.children=n;else if(1<o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===a[r]&&(a[r]=o[r]);return E(e,i,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=j.T,n={};j.T=n;try{var r=e(),a=j.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(z,R)}catch(i){R(i)}finally{null!==t&&null!==n.types&&(t.types=n.types),j.T=t}},t.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},t.use=function(e){return j.H.use(e)},t.useActionState=function(e,t,n){return j.H.useActionState(e,t,n)},t.useCallback=function(e,t){return j.H.useCallback(e,t)},t.useContext=function(e){return j.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return j.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return j.H.useEffect(e,t)},t.useEffectEvent=function(e){return j.H.useEffectEvent(e)},t.useId=function(){return j.H.useId()},t.useImperativeHandle=function(e,t,n){return j.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return j.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return j.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return j.H.useMemo(e,t)},t.useOptimistic=function(e,t){return j.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return j.H.useReducer(e,t,n)},t.useRef=function(e){return j.H.useRef(e)},t.useState=function(e){return j.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return j.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return j.H.useTransition()},t.version="19.2.4"},43(e,t,n){e.exports=n(288)},579(e,t,n){e.exports=n(799)},896(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>i(l,n))c<a&&0>i(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<a&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,h=3,f=!1,m=!1,g=!1,w=!1,y="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function v(e){for(var t=r(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function k(e){if(g=!1,v(e),!m)if(null!==r(c))m=!0,j||(j=!0,z());else{var t=r(u);null!==t&&A(k,t.startTime-e)}}var z,j=!1,S=-1,E=5,_=-1;function C(){return!!w||!(t.unstable_now()-_<E)}function P(){if(w=!1,j){var e=t.unstable_now();_=e;var n=!0;try{e:{m=!1,g&&(g=!1,b(S),S=-1),f=!0;var i=h;try{t:{for(v(e),p=r(c);null!==p&&!(p.expirationTime>e&&C());){var o=p.callback;if("function"===typeof o){p.callback=null,h=p.priorityLevel;var s=o(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){p.callback=s,v(e),n=!0;break t}p===r(c)&&a(c),v(e)}else a(c);p=r(c)}if(null!==p)n=!0;else{var l=r(u);null!==l&&A(k,l.startTime-e),n=!1}}break e}finally{p=null,h=i,f=!1}n=void 0}}finally{n?z():j=!1}}}if("function"===typeof x)z=function(){x(P)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,I=T.port2;T.port1.onmessage=P,z=function(){I.postMessage(null)}}else z=function(){y(P,0)};function A(e,n){S=y(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_requestPaint=function(){w=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>o?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(g?(b(S),S=-1):g=!0,A(k,i-o))):(e.sortIndex=s,n(c,e),m||f||(m=!0,j||(j=!0,z()))),e},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},853(e,t,n){e.exports=n(896)},217(e,t,n){e.exports=n.p+"static/media/pexels-dimkidama-15115560.04167beb6bd16a6e9fd4.jpg"},410(e,t,n){e.exports=n.p+"static/media/pexels-firmbee-com-22729701-6963740.a9a8b980823767df4886.jpg"},430(e,t,n){e.exports=n.p+"static/media/pexels-magnetme-3917414-5839461.06d3415285cbf1cc0bf1.jpg"},682(e,t,n){e.exports=n.p+"static/media/pexels-rdne-7310202.0cfb9c3eef397dd77e13.jpg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&r;("object"==typeof s||"function"==typeof s)&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>o[e]=()=>r[e]);return o.default=()=>r,n.d(i,o),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.nc=void 0;var r=n(43),a=n.t(r,2),i=n(391),o="popstate";function s(e){return"object"===typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function l(){return m(function(e,t){let n=t.state?.masked,{pathname:r,search:a,hash:i}=n||e.location;return p("",{pathname:r,search:a,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"===typeof t?t:h(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function p(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?f(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10),unstable_mask:a}}function h(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function f(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function m(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:a=document.defaultView,v5Compat:i=!1}=r,l=a.history,c="POP",u=null,h=f();function f(){return(l.state||{idx:null}).idx}function m(){c="POP";let e=f(),t=null==e?null:e-h;h=e,u&&u({action:c,location:y.location,delta:t})}function w(e){return g(e)}null==h&&(h=0,l.replaceState({...l.state,idx:h},""));let y={get action(){return c},get location(){return e(a,l)},listen(e){if(u)throw new Error("A history only accepts one active listener");return a.addEventListener(o,m),u=e,()=>{a.removeEventListener(o,m),u=null}},createHref:e=>t(a,e),createURL:w,encodeLocation(e){let t=w(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){c="PUSH";let r=s(e)?e:p(y.location,e,t);n&&n(r,e),h=f()+1;let o=d(r,h),m=y.createHref(r.unstable_mask||r);try{l.pushState(o,"",m)}catch(g){if(g instanceof DOMException&&"DataCloneError"===g.name)throw g;a.location.assign(m)}i&&u&&u({action:c,location:y.location,delta:1})},replace:function(e,t){c="REPLACE";let r=s(e)?e:p(y.location,e,t);n&&n(r,e),h=f();let a=d(r,h),o=y.createHref(r.unstable_mask||r);l.replaceState(a,"",o),i&&u&&u({action:c,location:y.location,delta:0})},go:e=>l.go(e)};return y}function g(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),c(n,"No window.location.(origin|href) available to create URL");let r="string"===typeof e?e:h(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}new WeakMap;function w(e,t){return y(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function y(e,t,n,r){let a=R(("string"===typeof t?f(t):t).pathname||"/",n);if(null==a)return null;let i=b(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(i);let o=null;for(let s=0;null==o&&s<i.length;++s){let e=A(a);o=P(i[s],e,r)}return o}function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=function(e,i){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,s=arguments.length>3?arguments[3]:void 0,l={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};if(l.relativePath.startsWith("/")){if(!l.relativePath.startsWith(r)&&o)return;c(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length)}let u=F([r,l.relativePath]),d=n.concat(l);e.children&&e.children.length>0&&(c(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),b(e.children,t,d,u,o)),(null!=e.path||e.index)&&t.push({path:u,score:C(u,e.index),routesMeta:d})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of x(e.path))i(e,t,!0,n);else i(e,t)}),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return a?[i,""]:[i];let o=x(r.join("/")),s=[];return s.push(...o.map(e=>""===e?i:[i,e].join("/"))),a&&s.push(...o),s.map(t=>e.startsWith("/")&&""===t?"/":t)}var v=/^:[\w-]+$/,k=3,z=2,j=1,S=10,E=-2,_=e=>"*"===e;function C(e,t){let n=e.split("/"),r=n.length;return n.some(_)&&(r+=E),t&&(r+=z),n.filter(e=>!_(e)).reduce((e,t)=>e+(v.test(t)?k:""===t?j:S),r)}function P(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,a={},i="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===i?t:t.slice(i.length)||"/",u=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(a,u.params),o.push({params:a,pathname:F([i,u.pathname]),pathnameBase:U(F([i,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(i=F([i,u.pathnameBase]))}return o}function T(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=I(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=s[n]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=a&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{}),pathname:i,pathnameBase:o,pattern:e}}function I(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];u("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,a,i)=>{if(r.push({paramName:t,isOptional:null!=n}),n){let t=i.charAt(a+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function A(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return u(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}var O=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function N(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function D(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function L(e){let t=$(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function M(e,t,n){let r,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=f(e):(r={...e},c(!r.pathname||!r.pathname.includes("?"),D("?","pathname","search",r)),c(!r.pathname||!r.pathname.includes("#"),D("#","pathname","hash",r)),c(!r.search||!r.search.includes("#"),D("#","search","hash",r)));let i,o=""===e||""===r.pathname,s=o?"/":r.pathname;if(null==s)i=n;else{let e=t.length-1;if(!a&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}i=e>=0?t[e]:"/"}let l=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:r,search:a="",hash:i=""}="string"===typeof e?f(e):e;return r?(r=r.replace(/\/\/+/g,"/"),t=r.startsWith("/")?N(r.substring(1),"/"):N(r,n)):t=n,{pathname:t,search:B(a),hash:H(i)}}(r,i),u=s&&"/"!==s&&s.endsWith("/"),d=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!d||(l.pathname+="/"),l}var F=e=>e.join("/").replace(/\/\/+/g,"/"),U=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",H=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var W=class{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function V(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}function K(e){return e.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var G="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function q(e,t){let n=e;if("string"!==typeof n||!O.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,a=!1;if(G)try{let e=new URL(window.location.href),r=n.startsWith("//")?new URL(e.protocol+n):new URL(n),i=R(r.pathname,t);r.origin===e.origin&&null!=i?n=i+r.search+r.hash:a=!0}catch(i){u(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:a,to:n}}Symbol("Uninstrumented");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Y=["POST","PUT","PATCH","DELETE"],Q=(new Set(Y),["GET",...Y]);new Set(Q),Symbol("ResetLoaderData");var J=r.createContext(null);J.displayName="DataRouter";var X=r.createContext(null);X.displayName="DataRouterState";var Z=r.createContext(!1);function ee(){return r.useContext(Z)}var te=r.createContext({isTransitioning:!1});te.displayName="ViewTransition";var ne=r.createContext(new Map);ne.displayName="Fetchers";var re=r.createContext(null);re.displayName="Await";var ae=r.createContext(null);ae.displayName="Navigation";var ie=r.createContext(null);ie.displayName="Location";var oe=r.createContext({outlet:null,matches:[],isDataRoute:!1});oe.displayName="Route";var se=r.createContext(null);se.displayName="RouteError";var le="REACT_ROUTER_ERROR";function ce(){return null!=r.useContext(ie)}function ue(){return c(ce(),"useLocation() may be used only in the context of a <Router> component."),r.useContext(ie).location}var de="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function pe(e){r.useContext(ae).static||r.useLayoutEffect(e)}function he(){let{isDataRoute:e}=r.useContext(oe);return e?function(){let{router:e}=Se("useNavigate"),t=_e("useNavigate"),n=r.useRef(!1);pe(()=>{n.current=!0});let a=r.useCallback(async function(r){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(n.current,de),n.current&&("number"===typeof r?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...a}))},[e,t]);return a}():function(){c(ce(),"useNavigate() may be used only in the context of a <Router> component.");let e=r.useContext(J),{basename:t,navigator:n}=r.useContext(ae),{matches:a}=r.useContext(oe),{pathname:i}=ue(),o=JSON.stringify(L(a)),s=r.useRef(!1);pe(()=>{s.current=!0});let l=r.useCallback(function(r){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(u(s.current,de),!s.current)return;if("number"===typeof r)return void n.go(r);let l=M(r,JSON.parse(o),i,"path"===a.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:F([t,l.pathname])),(a.replace?n.replace:n.push)(l,a.state,a)},[t,n,o,i,e]);return l}()}r.createContext(null);function fe(){let{matches:e}=r.useContext(oe),t=e[e.length-1];return t?t.params:{}}function me(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:n}=r.useContext(oe),{pathname:a}=ue(),i=JSON.stringify(L(n));return r.useMemo(()=>M(e,JSON.parse(i),a,"path"===t),[e,i,a,t])}function ge(e,t,n){c(ce(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=r.useContext(ae),{matches:i}=r.useContext(oe),o=i[i.length-1],s=o?o.params:{},l=o?o.pathname:"/",d=o?o.pathnameBase:"/",p=o&&o.route;{let e=p&&p.path||"";Te(l,!p||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let h,m=ue();if(t){let e="string"===typeof t?f(t):t;c("/"===d||e.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`),h=e}else h=m;let g=h.pathname||"/",y=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=w(e,{pathname:y});u(p||null!=b,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),u(null==b||void 0!==b[b.length-1].route.element||void 0!==b[b.length-1].route.Component||void 0!==b[b.length-1].route.lazy,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=ze(b&&b.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:F([d,a.encodeLocation?a.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:F([d,a.encodeLocation?a.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),i,n);return t&&x?r.createElement(ie.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...h},navigationType:"POP"}},x):x}function we(){let e=Ce(),t=V(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a},o={padding:"2px 4px",backgroundColor:a},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=r.createElement(r.Fragment,null,r.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),r.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",r.createElement("code",{style:o},"ErrorBoundary")," or"," ",r.createElement("code",{style:o},"errorElement")," prop on your route.")),r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:i},n):null,s)}var ye=r.createElement(we,null),be=class extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&"object"===typeof e&&e&&"digest"in e&&"string"===typeof e.digest){const t=function(e){if(e.startsWith(`${le}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText)return new W(t.status,t.statusText,t.data)}catch{}}(e.digest);t&&(e=t)}let t=void 0!==e?r.createElement(oe.Provider,{value:this.props.routeContext},r.createElement(se.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?r.createElement(ve,{error:e},t):t}};be.contextType=Z;var xe=new WeakMap;function ve(e){let{children:t,error:n}=e,{basename:a}=r.useContext(ae);if("object"===typeof n&&n&&"digest"in n&&"string"===typeof n.digest){let e=function(e){if(e.startsWith(`${le}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText&&"string"===typeof t.location&&"boolean"===typeof t.reloadDocument&&"boolean"===typeof t.replace)return t}catch{}}(n.digest);if(e){let t=xe.get(n);if(t)throw t;let i=q(e.location,a);if(G&&!xe.get(n)){if(!i.isExternal&&!e.reloadDocument){const t=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw xe.set(n,t),t}window.location.href=i.absoluteURL||i.to}return r.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i.absoluteURL||i.to}`})}}return t}function ke(e){let{routeContext:t,match:n,children:a}=e,i=r.useContext(J);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(oe.Provider,{value:t},a)}function ze(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,a=n?.state;if(null==e){if(!a)return null;if(a.errors)e=a.matches;else{if(0!==t.length||a.initialized||!(a.matches.length>0))return null;e=a.matches}}let i=e,o=a?.errors;if(null!=o){let e=i.findIndex(e=>e.route.id&&void 0!==o?.[e.route.id]);c(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let s=!1,l=-1;if(n&&a){s=a.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:r}=a,o=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!r||void 0===r[t.route.id]);if(t.route.lazy||o){n.isStatic&&(s=!0),i=l>=0?i.slice(0,l+1):[i[0]];break}}}}let u=n?.onError,d=a&&u?(e,t)=>{u(e,{location:a.location,params:a.matches?.[0]?.params??{},unstable_pattern:K(a.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,p=!1,h=null,f=null;a&&(u=o&&n.route.id?o[n.route.id]:void 0,h=n.route.errorElement||ye,s&&(l<0&&0===c?(Te("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,f=null):l===c&&(p=!0,f=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),g=()=>{let t;return t=u?h:p?f:n.route.Component?r.createElement(n.route.Component,null):n.route.element?n.route.element:e,r.createElement(ke,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:null!=a},children:t})};return a&&(n.route.ErrorBoundary||n.route.errorElement||0===c)?r.createElement(be,{location:a.location,revalidation:a.revalidation,component:h,error:u,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:d}):g()},null)}function je(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Se(e){let t=r.useContext(J);return c(t,je(e)),t}function Ee(e){let t=r.useContext(X);return c(t,je(e)),t}function _e(e){let t=function(e){let t=r.useContext(oe);return c(t,je(e)),t}(e),n=t.matches[t.matches.length-1];return c(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ce(){let e=r.useContext(se),t=Ee("useRouteError"),n=_e("useRouteError");return void 0!==e?e:t.errors?.[n]}var Pe={};function Te(e,t,n){t||Pe[e]||(Pe[e]=!0,u(!1,n))}var Ie={};function Ae(e,t){e||Ie[t]||(Ie[t]=!0,console.warn(t))}a.useOptimistic;r.memo(Re);function Re(e){let{routes:t,future:n,state:r,isStatic:a,onError:i}=e;return ge(t,void 0,{state:r,isStatic:a,onError:i,future:n})}function Oe(e){c(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ne(e){let{basename:t="/",children:n=null,location:a,navigationType:i="POP",navigator:o,static:s=!1,unstable_useTransitions:l}=e;c(!ce(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=t.replace(/^\/*/,"/"),p=r.useMemo(()=>({basename:d,navigator:o,static:s,unstable_useTransitions:l,future:{}}),[d,o,s,l]);"string"===typeof a&&(a=f(a));let{pathname:h="/",search:m="",hash:g="",state:w=null,key:y="default",unstable_mask:b}=a,x=r.useMemo(()=>{let e=R(h,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:w,key:y,unstable_mask:b},navigationType:i}},[d,h,m,g,w,y,i,b]);return u(null!=x,`<Router basename="${d}"> is not able to match the URL "${h}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),null==x?null:r.createElement(ae.Provider,{value:p},r.createElement(ie.Provider,{children:n,value:x}))}function De(e){let{children:t,location:n}=e;return ge($e(t),n)}r.Component;function $e(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return r.Children.forEach(e,(e,a)=>{if(!r.isValidElement(e))return;let i=[...t,a];if(e.type===r.Fragment)return void n.push.apply(n,$e(e.props.children,i));c(e.type===Oe,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),c(!e.props.index||!e.props.children,"An index route cannot have child routes.");let o={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=$e(e.props.children,i)),n.push(o)}),n}var Le="get",Me="application/x-www-form-urlencoded";function Fe(e){return"undefined"!==typeof HTMLElement&&e instanceof HTMLElement}var Ue=null;var Be=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function He(e){return null==e||Be.has(e)?e:(u(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Me}"`),null)}function We(e,t){let n,r,a,i,o;if(Fe(s=e)&&"form"===s.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?R(o,t):null,n=e.getAttribute("method")||Le,a=He(e.getAttribute("enctype"))||Me,i=new FormData(e)}else if(function(e){return Fe(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Fe(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||o.getAttribute("action");if(r=s?R(s,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||Le,a=He(e.getAttribute("formenctype"))||He(o.getAttribute("enctype"))||Me,i=new FormData(o,e),!function(){if(null===Ue)try{new FormData(document.createElement("form"),0),Ue=!1}catch(e){Ue=!0}return Ue}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,r)}}else{if(Fe(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Le,r=null,a=Me,o=e}var s;return i&&"text/plain"===a&&(o=i,i=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function Ve(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function Ke(e,t,n,r){let a="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return n?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${r}`:a.pathname=`${a.pathname}.${r}`:"/"===a.pathname?a.pathname=`_root.${r}`:t&&"/"===R(a.pathname,t)?a.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function Ge(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function qe(e){return null!=e&&"string"===typeof e.page}function Ye(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Qe(e,t,n,r,a,i){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===i?t.filter((e,t)=>o(e,t)||s(e,t)):"data"===i?t.filter((t,i)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(o(t,i)||s(t,i))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function Je(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1),[...new Set(r)];var r}function Xe(e,t){let n=new Set,r=new Set(t);return e.reduce((e,a)=>{if(t&&!qe(a)&&"script"===a.as&&a.href&&r.has(a.href))return e;let i=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(a));return n.has(i)||(n.add(i),e.push({key:i,link:a})),e},[])}function Ze(e,t){return"lazy"===e.mode&&!0===t}function et(){let e=r.useContext(J);return Ve(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function tt(){let e=r.useContext(X);return Ve(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var nt=r.createContext(void 0);function rt(){let e=r.useContext(nt);return Ve(e,"You must render this element inside a <HydratedRouter> element"),e}function at(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function it(e,t,n){if(n&&!ct)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}nt.displayName="FrameworkContext";function ot(e){let{page:t,...n}=e,{router:a}=et(),i=r.useMemo(()=>w(a.routes,t,a.basename),[a.routes,t,a.basename]);return i?r.createElement(lt,{page:t,matches:i,...n}):null}function st(e){let{manifest:t,routeModules:n}=rt(),[a,i]=r.useState([]);return r.useEffect(()=>{let r=!1;return async function(e,t,n){let r=await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Ge(r,n);return e.links?e.links():[]}return[]}));return Xe(r.flat(1).filter(Ye).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),a}function lt(e){let{page:t,matches:n,...a}=e,i=ue(),{future:o,manifest:s,routeModules:l}=rt(),{basename:c}=et(),{loaderData:u,matches:d}=tt(),p=r.useMemo(()=>Qe(t,n,d,s,i,"data"),[t,n,d,s,i]),h=r.useMemo(()=>Qe(t,n,d,s,i,"assets"),[t,n,d,s,i]),f=r.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let e=new Set,r=!1;if(n.forEach(t=>{let n=s.routes[t.route.id];n&&n.hasLoader&&(!p.some(e=>e.route.id===t.route.id)&&t.route.id in u&&l[t.route.id]?.shouldRevalidate||n.hasClientLoader?r=!0:e.add(t.route.id))}),0===e.size)return[];let a=Ke(t,c,o.unstable_trailingSlashAwareDataRequests,"data");return r&&e.size>0&&a.searchParams.set("_routes",n.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[a.pathname+a.search]},[c,o.unstable_trailingSlashAwareDataRequests,u,i,s,p,n,t,l]),m=r.useMemo(()=>Je(h,s),[h,s]),g=st(h);return r.createElement(r.Fragment,null,f.map(e=>r.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...a})),m.map(e=>r.createElement("link",{key:e,rel:"modulepreload",href:e,...a})),g.map(e=>{let{key:t,link:n}=e;return r.createElement("link",{key:t,nonce:a.nonce,...n,crossOrigin:n.crossOrigin??a.crossOrigin})}))}var ct=!1;function ut(e){let{manifest:t,serverHandoffString:n,isSpaMode:a,renderMeta:i,routeDiscovery:o,ssr:s}=rt(),{router:l,static:c,staticContext:u}=et(),{matches:d}=tt(),p=ee(),h=Ze(o,s);i&&(i.didRenderScripts=!0);let f=it(d,null,a);r.useEffect(()=>{ct=!0},[]);let m=r.useMemo(()=>{if(p)return null;let a=u?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",i=c?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${h?"":`import ${JSON.stringify(t.url)}`};\n${f.map((e,n)=>{let r=`route${n}`,a=t.routes[e.route.id];Ve(a,`Route ${e.route.id} not found in manifest`);let{clientActionModule:i,clientLoaderModule:o,clientMiddlewareModule:s,hydrateFallbackModule:l,module:c}=a,u=[...i?[{module:i,varName:`${r}_clientAction`}]:[],...o?[{module:o,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_clientMiddleware`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${u.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${h?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,a=new Set(t.state.matches.map(e=>e.route.id)),i=t.state.location.pathname.split("/").filter(Boolean),o=["/"];for(i.pop();i.length>0;)o.push(`/${i.join("/")}`),i.pop();o.forEach(e=>{let n=w(t.routes,e,t.basename);n&&n.forEach(e=>a.add(e.route.id))});let s=[...a].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:s,sri:!!n||void 0}}(t,l),null,2)};`:""}\n  window.__reactRouterRouteModules = {${f.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return r.createElement(r.Fragment,null,r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:a},type:void 0}),r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:i},type:"module",async:!0}))},[]),g=ct||p?[]:(y=t.entry.imports.concat(Je(f,t,{includeHydrateFallback:!0})),[...new Set(y)]);var y;let b="object"===typeof t.sri?t.sri:{};return Ae(!p,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),ct||p?null:r.createElement(r.Fragment,null,"object"===typeof t.sri?r.createElement("script",{...e,"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:b})}}):null,h?null:r.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:b[t.url],suppressHydrationWarning:!0}),r.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:b[t.entry.module],suppressHydrationWarning:!0}),g.map(t=>r.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:b[t],suppressHydrationWarning:!0})),m)}function dt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}r.Component;function pt(e){let{error:t,isOutsideRemixApp:n}=e;console.error(t);let a,i=r.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(V(t))return r.createElement(ht,{title:"Unhandled Thrown Response!"},r.createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),i);if(t instanceof Error)a=t;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);a=new Error(e)}return r.createElement(ht,{title:"Application Error!",isOutsideRemixApp:n},r.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),r.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},a.stack),i)}function ht(e){let{title:t,renderScripts:n,isOutsideRemixApp:a,children:i}=e,{routeModules:o}=rt();return o.root?.Layout&&!a?i:r.createElement("html",{lang:"en"},r.createElement("head",null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),r.createElement("title",null,t)),r.createElement("body",null,r.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},i,n?r.createElement(ut,null):null)))}var ft="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{ft&&(window.__reactRouterVersion="7.13.2")}catch(ob){}function mt(e){let{basename:t,children:n,unstable_useTransitions:a,window:i}=e,o=r.useRef();null==o.current&&(o.current=l({window:i,v5Compat:!0}));let s=o.current,[c,u]=r.useState({action:s.action,location:s.location}),d=r.useCallback(e=>{!1===a?u(e):r.startTransition(()=>u(e))},[a]);return r.useLayoutEffect(()=>s.listen(d),[s,d]),r.createElement(Ne,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s,unstable_useTransitions:a})}var gt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wt=r.forwardRef(function(e,t){let{onClick:n,discover:a="render",prefetch:i="none",relative:o,reloadDocument:s,replace:l,unstable_mask:u,state:d,target:p,to:f,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:w,...y}=e,{basename:b,navigator:x,unstable_useTransitions:v}=r.useContext(ae),k="string"===typeof f&&gt.test(f),z=q(f,b);f=z.to;let j=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(ce(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=r.useContext(ae),{hash:i,pathname:o,search:s}=me(e,{relative:t}),l=o;return"/"!==n&&(l="/"===o?n:F([n,o])),a.createHref({pathname:l,search:s,hash:i})}(f,{relative:o}),S=ue(),E=null;if(u){let e=M(u,[],S.unstable_mask?S.unstable_mask.pathname:"/",!0);"/"!==b&&(e.pathname="/"===e.pathname?b:F([b,e.pathname])),E=x.createHref(e)}let[_,C,P]=function(e,t){let n=r.useContext(nt),[a,i]=r.useState(!1),[o,s]=r.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:p}=t,h=r.useRef(null);r.useEffect(()=>{if("render"===e&&s(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{s(e.isIntersecting)})},{threshold:.5});return h.current&&e.observe(h.current),()=>{e.disconnect()}}},[e]),r.useEffect(()=>{if(a){let e=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(e)}}},[a]);let f=()=>{i(!0)},m=()=>{i(!1),s(!1)};return n?"intent"!==e?[o,h,{}]:[o,h,{onFocus:at(l,f),onBlur:at(c,m),onMouseEnter:at(u,f),onMouseLeave:at(d,m),onTouchStart:at(p,f)}]:[!1,h,{}]}(i,y),T=function(e){let{target:t,replace:n,unstable_mask:a,state:i,preventScrollReset:o,relative:s,viewTransition:l,unstable_defaultShouldRevalidate:c,unstable_useTransitions:u}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=he(),p=ue(),f=me(e,{relative:s});return r.useCallback(m=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(m,t)){m.preventDefault();let t=void 0!==n?n:h(p)===h(f),g=()=>d(e,{replace:t,unstable_mask:a,state:i,preventScrollReset:o,relative:s,viewTransition:l,unstable_defaultShouldRevalidate:c});u?r.startTransition(()=>g()):g()}},[p,d,f,n,a,i,t,e,o,s,l,c,u])}(f,{replace:l,unstable_mask:u,state:d,target:p,preventScrollReset:m,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:w,unstable_useTransitions:v});let I=!(z.isExternal||s),A=r.createElement("a",{...y,...P,href:(I?E:void 0)||z.absoluteURL||j,onClick:I?function(e){n&&n(e),e.defaultPrevented||T(e)}:n,ref:dt(t,C),target:p,"data-discover":k||"render"!==a?void 0:"true"});return _&&!k?r.createElement(r.Fragment,null,A,r.createElement(ot,{page:j})):A});wt.displayName="Link",r.forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:a=!1,className:i="",end:o=!1,style:s,to:l,viewTransition:u,children:d,...p}=e,h=me(l,{relative:p.relative}),f=ue(),m=r.useContext(X),{navigator:g,basename:w}=r.useContext(ae),y=null!=m&&function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.useContext(te);c(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=xt("useViewTransitionState"),i=me(e,{relative:t});if(!n.isTransitioning)return!1;let o=R(n.currentLocation.pathname,a)||n.currentLocation.pathname,s=R(n.nextLocation.pathname,a)||n.nextLocation.pathname;return null!=T(i.pathname,s)||null!=T(i.pathname,o)}(h)&&!0===u,b=g.encodeLocation?g.encodeLocation(h).pathname:h.pathname,x=f.pathname,v=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;a||(x=x.toLowerCase(),v=v?v.toLowerCase():null,b=b.toLowerCase()),v&&w&&(v=R(v,w)||v);const k="/"!==b&&b.endsWith("/")?b.length-1:b.length;let z,j=x===b||!o&&x.startsWith(b)&&"/"===x.charAt(k),S=null!=v&&(v===b||!o&&v.startsWith(b)&&"/"===v.charAt(b.length)),E={isActive:j,isPending:S,isTransitioning:y},_=j?n:void 0;z="function"===typeof i?i(E):[i,j?"active":null,S?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let C="function"===typeof s?s(E):s;return r.createElement(wt,{...p,"aria-current":_,className:z,ref:t,style:C,to:l,viewTransition:u},"function"===typeof d?d(E):d)}).displayName="NavLink";var yt=r.forwardRef((e,t)=>{let{discover:n="render",fetcherKey:a,navigate:i,reloadDocument:o,replace:s,state:l,method:u=Le,action:d,onSubmit:p,relative:f,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:w,...y}=e,{unstable_useTransitions:b}=r.useContext(ae),x=zt(),v=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:n}=r.useContext(ae),a=r.useContext(oe);c(a,"useFormAction must be used inside a RouteContext");let[i]=a.matches.slice(-1),o={...me(e||".",{relative:t})},s=ue();if(null==e){o.search=s.search;let e=new URLSearchParams(o.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();o.search=n?`?${n}`:""}}e&&"."!==e||!i.route.index||(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(o.pathname="/"===o.pathname?n:F([n,o.pathname]));return h(o)}(d,{relative:f}),k="get"===u.toLowerCase()?"get":"post",z="string"===typeof d&&gt.test(d);return r.createElement("form",{ref:t,method:k,action:v,onSubmit:o?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||u,o=()=>x(t||e.currentTarget,{fetcherKey:a,method:n,navigate:i,replace:s,state:l,relative:f,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:w});b&&!1!==i?r.startTransition(()=>o()):o()},...y,"data-discover":z||"render"!==n?void 0:"true"})});function bt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xt(e){let t=r.useContext(J);return c(t,bt(e)),t}yt.displayName="Form";var vt=0,kt=()=>`__${String(++vt)}__`;function zt(){let{router:e}=xt("useSubmit"),{basename:t}=r.useContext(ae),n=_e("useRouteId"),a=e.fetch,i=e.navigate;return r.useCallback(async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:o,method:s,encType:l,formData:c,body:u}=We(e,t);if(!1===r.navigate){let e=r.fetcherKey||kt();await a(e,n,r.action||o,{unstable_defaultShouldRevalidate:r.unstable_defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:c,body:u,formMethod:r.method||s,formEncType:r.encType||l,flushSync:r.flushSync})}else await i(r.action||o,{unstable_defaultShouldRevalidate:r.unstable_defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:c,body:u,formMethod:r.method||s,formEncType:r.encType||l,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[a,i,t,n])}var jt=function(){return jt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},jt.apply(this,arguments)};Object.create;function St(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Et={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_t="-ms-",Ct="-moz-",Pt="-webkit-",Tt="comm",It="rule",At="decl",Rt="@keyframes",Ot=Math.abs,Nt=String.fromCharCode,Dt=Object.assign;function $t(e){return e.trim()}function Lt(e,t){return(e=t.exec(e))?e[0]:e}function Mt(e,t,n){return e.replace(t,n)}function Ft(e,t,n){return e.indexOf(t,n)}function Ut(e,t){return 0|e.charCodeAt(t)}function Bt(e,t,n){return e.slice(t,n)}function Ht(e){return e.length}function Wt(e){return e.length}function Vt(e,t){return t.push(e),e}function Kt(e,t){return e.filter(function(e){return!Lt(e,t)})}var Gt=1,qt=1,Yt=0,Qt=0,Jt=0,Xt="";function Zt(e,t,n,r,a,i,o,s){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:Gt,column:qt,length:o,return:"",siblings:s}}function en(e,t){return Dt(Zt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function tn(e){for(;e.root;)e=en(e.root,{children:[e]});Vt(e,e.siblings)}function nn(){return Jt=Qt>0?Ut(Xt,--Qt):0,qt--,10===Jt&&(qt=1,Gt--),Jt}function rn(){return Jt=Qt<Yt?Ut(Xt,Qt++):0,qt++,10===Jt&&(qt=1,Gt++),Jt}function an(){return Ut(Xt,Qt)}function on(){return Qt}function sn(e,t){return Bt(Xt,e,t)}function ln(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cn(e){return Gt=qt=1,Yt=Ht(Xt=e),Qt=0,[]}function un(e){return Xt="",e}function dn(e){return $t(sn(Qt-1,fn(91===e?e+2:40===e?e+1:e)))}function pn(e){for(;(Jt=an())&&Jt<33;)rn();return ln(e)>2||ln(Jt)>3?"":" "}function hn(e,t){for(;--t&&rn()&&!(Jt<48||Jt>102||Jt>57&&Jt<65||Jt>70&&Jt<97););return sn(e,on()+(t<6&&32==an()&&32==rn()))}function fn(e){for(;rn();)switch(Jt){case e:return Qt;case 34:case 39:34!==e&&39!==e&&fn(Jt);break;case 40:41===e&&fn(e);break;case 92:rn()}return Qt}function mn(e,t){for(;rn()&&e+Jt!==57&&(e+Jt!==84||47!==an()););return"/*"+sn(t,Qt-1)+"*"+Nt(47===e?e:rn())}function gn(e){for(;!ln(an());)rn();return sn(e,Qt)}function wn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function yn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case At:return e.return=e.return||e.value;case Tt:return"";case Rt:return e.return=e.value+"{"+wn(e.children,r)+"}";case It:if(!Ht(e.value=e.props.join(",")))return""}return Ht(n=wn(e.children,r))?e.return=e.value+"{"+n+"}":""}function bn(e,t,n){switch(function(e,t){return 45^Ut(e,0)?(((t<<2^Ut(e,0))<<2^Ut(e,1))<<2^Ut(e,2))<<2^Ut(e,3):0}(e,t)){case 5103:return Pt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Pt+e+e;case 4855:return Pt+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ct+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Pt+e+Ct+e+_t+e+e;case 5936:switch(Ut(e,t+11)){case 114:return Pt+e+_t+Mt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Pt+e+_t+Mt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Pt+e+_t+Mt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Pt+e+_t+e+e;case 6165:return Pt+e+_t+"flex-"+e+e;case 5187:return Pt+e+Mt(e,/(\w+).+(:[^]+)/,Pt+"box-$1$2"+_t+"flex-$1$2")+e;case 5443:return Pt+e+_t+"flex-item-"+Mt(e,/flex-|-self/g,"")+(Lt(e,/flex-|baseline/)?"":_t+"grid-row-"+Mt(e,/flex-|-self/g,""))+e;case 4675:return Pt+e+_t+"flex-line-pack"+Mt(e,/align-content|flex-|-self/g,"")+e;case 5548:return Pt+e+_t+Mt(e,"shrink","negative")+e;case 5292:return Pt+e+_t+Mt(e,"basis","preferred-size")+e;case 6060:return Pt+"box-"+Mt(e,"-grow","")+Pt+e+_t+Mt(e,"grow","positive")+e;case 4554:return Pt+Mt(e,/([^-])(transform)/g,"$1"+Pt+"$2")+e;case 6187:return Mt(Mt(Mt(e,/(zoom-|grab)/,Pt+"$1"),/(image-set)/,Pt+"$1"),e,"")+e;case 5495:case 3959:return Mt(e,/(image-set\([^]*)/,Pt+"$1$`$1");case 4968:return Mt(Mt(e,/(.+:)(flex-)?(.*)/,Pt+"box-pack:$3"+_t+"flex-pack:$3"),/space-between/,"justify")+Pt+e+e;case 4200:if(!Lt(e,/flex-|baseline/))return _t+"grid-column-align"+Bt(e,t)+e;break;case 2592:case 3360:return _t+Mt(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Lt(e.props,/grid-\w+-end/)})?~Ft(e+(n=n[t].value),"span",0)?e:_t+Mt(e,"-start","")+e+_t+"grid-row-span:"+(~Ft(n,"span",0)?Lt(n,/\d+/):+Lt(n,/\d+/)-+Lt(e,/\d+/))+";":_t+Mt(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Lt(e.props,/grid-\w+-start/)})?e:_t+Mt(Mt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Mt(e,/(.+)-inline(.+)/,Pt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ht(e)-1-t>6)switch(Ut(e,t+1)){case 109:if(45!==Ut(e,t+4))break;case 102:return Mt(e,/(.+:)(.+)-([^]+)/,"$1"+Pt+"$2-$3$1"+Ct+(108==Ut(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ft(e,"stretch",0)?bn(Mt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Mt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,i,o,s){return _t+n+":"+r+s+(a?_t+n+"-span:"+(i?o:+o-+r)+s:"")+e});case 4949:if(121===Ut(e,t+6))return Mt(e,":",":"+Pt)+e;break;case 6444:switch(Ut(e,45===Ut(e,14)?18:11)){case 120:return Mt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Pt+(45===Ut(e,14)?"inline-":"")+"box$3$1"+Pt+"$2$3$1"+_t+"$2box$3")+e;case 100:return Mt(e,":",":"+_t)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Mt(e,"scroll-","scroll-snap-")+e}return e}function xn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case At:return void(e.return=bn(e.value,e.length,n));case Rt:return wn([en(e,{value:Mt(e.value,"@","@"+Pt)})],r);case It:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Lt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tn(en(e,{props:[Mt(t,/:(read-\w+)/,":-moz-$1")]})),tn(en(e,{props:[t]})),Dt(e,{props:Kt(n,r)});break;case"::placeholder":tn(en(e,{props:[Mt(t,/:(plac\w+)/,":"+Pt+"input-$1")]})),tn(en(e,{props:[Mt(t,/:(plac\w+)/,":-moz-$1")]})),tn(en(e,{props:[Mt(t,/:(plac\w+)/,_t+"input-$1")]})),tn(en(e,{props:[t]})),Dt(e,{props:Kt(n,r)})}return""})}}function vn(e){return un(kn("",null,null,null,[""],e=cn(e),0,[0],e))}function kn(e,t,n,r,a,i,o,s,l){for(var c=0,u=0,d=o,p=0,h=0,f=0,m=1,g=1,w=1,y=0,b="",x=a,v=i,k=r,z=b;g;)switch(f=y,y=rn()){case 40:if(108!=f&&58==Ut(z,d-1)){-1!=Ft(z+=Mt(dn(y),"&","&\f"),"&\f",Ot(c?s[c-1]:0))&&(w=-1);break}case 34:case 39:case 91:z+=dn(y);break;case 9:case 10:case 13:case 32:z+=pn(f);break;case 92:z+=hn(on()-1,7);continue;case 47:switch(an()){case 42:case 47:Vt(jn(mn(rn(),on()),t,n,l),l),5!=ln(f||1)&&5!=ln(an()||1)||!Ht(z)||" "===Bt(z,-1,void 0)||(z+=" ");break;default:z+="/"}break;case 123*m:s[c++]=Ht(z)*w;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==w&&(z=Mt(z,/\f/g,"")),h>0&&(Ht(z)-d||0===m&&47===f)&&Vt(h>32?Sn(z+";",r,n,d-1,l):Sn(Mt(z," ","")+";",r,n,d-2,l),l);break;case 59:z+=";";default:if(Vt(k=zn(z,t,n,c,u,a,s,b,x=[],v=[],d,i),i),123===y)if(0===u)kn(z,t,k,k,x,i,d,s,v);else{switch(p){case 99:if(110===Ut(z,3))break;case 108:if(97===Ut(z,2))break;default:u=0;case 100:case 109:case 115:}u?kn(e,k,k,r&&Vt(zn(e,k,k,0,0,a,s,b,a,x=[],d,v),v),a,v,d,s,r?x:v):kn(z,k,k,k,[""],v,0,s,v)}}c=u=h=0,m=w=1,b=z="",d=o;break;case 58:d=1+Ht(z),h=f;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==nn())continue;switch(z+=Nt(y),y*m){case 38:w=u>0?1:(z+="\f",-1);break;case 44:s[c++]=(Ht(z)-1)*w,w=1;break;case 64:45===an()&&(z+=dn(rn())),p=an(),u=d=Ht(b=z+=gn(on())),y++;break;case 45:45===f&&2==Ht(z)&&(m=0)}}return i}function zn(e,t,n,r,a,i,o,s,l,c,u,d){for(var p=a-1,h=0===a?i:[""],f=Wt(h),m=0,g=0,w=0;m<r;++m)for(var y=0,b=Bt(e,p+1,p=Ot(g=o[m])),x=e;y<f;++y)(x=$t(g>0?h[y]+" "+b:Mt(b,/&\f/g,h[y])))&&(l[w++]=x);return Zt(e,t,n,0===a?It:s,l,c,u,d)}function jn(e,t,n,r){return Zt(e,t,n,Tt,Nt(Jt),Bt(e,2,-2),0,r)}function Sn(e,t,n,r,a){return Zt(e,t,n,At,Bt(e,0,r),Bt(e,r+1,-1),r,a)}var En="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.SC_ATTR)||"data-styled",_n="active",Cn="data-styled-version",Pn="6.3.12",Tn="/*!sc*/\n",In="undefined"!=typeof window&&"undefined"!=typeof document,An=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.SC_DISABLE_SPEEDY)),Rn={};function On(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Nn=new Map,Dn=new Map,$n=1,Ln=function(e){if(Nn.has(e))return Nn.get(e);for(;Dn.has($n);)$n++;var t=$n++;return Nn.set(e,t),Dn.set(t,e),t},Mn=function(e,t){$n=t+1,Nn.set(e,t),Dn.set(t,e)},Fn=(new Set,Object.freeze([])),Un=Object.freeze({});function Bn(e,t,n){return void 0===n&&(n=Un),e.theme!==n.theme&&e.theme||t||n.theme}var Hn=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Wn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Vn=/(^-|-$)/g;function Kn(e){return e.replace(Wn,"-").replace(Vn,"")}var Gn=/(a)(d)/gi,qn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Yn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=qn(t%52)+n;return(qn(t%52)+n).replace(Gn,"$1-$2")}var Qn,Jn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Xn=function(e){return Jn(5381,e)};function Zn(e){return Yn(Xn(e)>>>0)}function er(e){return e.displayName||e.name||"Component"}function tr(e){return"string"==typeof e&&!0}var nr="function"==typeof Symbol&&Symbol.for,rr=nr?Symbol.for("react.memo"):60115,ar=nr?Symbol.for("react.forward_ref"):60112,ir={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},or={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lr=((Qn={})[ar]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qn[rr]=sr,Qn);function cr(e){return("type"in(t=e)&&t.type.$$typeof)===rr?sr:"$$typeof"in e?lr[e.$$typeof]:ir;var t}var ur=Object.defineProperty,dr=Object.getOwnPropertyNames,pr=Object.getOwnPropertySymbols,hr=Object.getOwnPropertyDescriptor,fr=Object.getPrototypeOf,mr=Object.prototype;function gr(e,t,n){if("string"!=typeof t){if(mr){var r=fr(t);r&&r!==mr&&gr(e,r,n)}var a=dr(t);pr&&(a=a.concat(pr(t)));for(var i=cr(e),o=cr(t),s=0;s<a.length;++s){var l=a[s];if(!(l in or||n&&n[l]||o&&l in o||i&&l in i)){var c=hr(t,l);try{ur(e,l,c)}catch(e){}}}}return e}function wr(e){return"function"==typeof e}function yr(e){return"object"==typeof e&&"styledComponentId"in e}function br(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function xr(e,t){return e.join(t||"")}function vr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function kr(e,t,n){if(void 0===n&&(n=!1),!n&&!vr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=kr(e[r],t[r]);else if(vr(t))for(var r in t)e[r]=kr(e[r],t[r]);return e}function zr(e,t){Object.defineProperty(e,"toString",{value:t})}var jr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw On(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),s=0,l=(i=0,t.length);i<l;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+=this.tag.getRule(i)+Tn;return t},e}(),Sr="style[".concat(En,"][").concat(Cn,'="').concat(Pn,'"]'),Er=new RegExp("^".concat(En,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_r=function(e){return"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},Cr=function(e){if(!e)return document;if(_r(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(_r(t))return t}return document},Pr=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},Tr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Tn),a=[],i=0,o=r.length;i<o;i++){var s=r[i].trim();if(s){var l=s.match(Er);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(Mn(u,c),Pr(e,u,l[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(s)}}},Ir=function(e){for(var t=Cr(e.options.target).querySelectorAll(Sr),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(En)!==_n&&(Tr(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Ar(){return n.nc}var Rr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(En,"]")));return t[t.length-1]}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(En,_n),r.setAttribute(Cn,Pn);var o=Ar();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},Or=function(){function e(e){this.element=Rr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets,r=0,a=n.length;r<a;r++){var i=n[r];if(i.ownerNode===e)return i}throw On(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Nr=function(){function e(e){this.element=Rr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Dr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),$r=In,Lr={isServer:!In,useCSSOMInjection:!An},Mr=function(){function e(e,t,n){void 0===e&&(e=Un),void 0===t&&(t={});var r=this;this.options=jt(jt({},Lr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&In&&$r&&($r=!1,Ir(this)),zr(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return Dn.get(e)}(n);if(void 0===a)return"continue";var i=e.names.get(a);if(void 0===i||!i.size)return"continue";var o=t.getGroup(n);if(0===o.length)return"continue";var s=En+".g"+n+'[id="'+a+'"]',l="";i.forEach(function(e){e.length>0&&(l+=e+",")}),r+=o+s+'{content:"'+l+'"}'+Tn},i=0;i<n;i++)a(i);return r}(r)})}return e.registerId=function(e){return Ln(e)},e.prototype.rehydrate=function(){!this.server&&In&&Ir(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var r=new e(jt(jt({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&In&&t.target!==this.options.target&&Cr(this.options.target)!==Cr(t.target)&&Ir(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Dr(n):t?new Or(n):new Nr(n)}(this.options),new jr(e)));var e},e.prototype.hasNameForId=function(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r},e.prototype.registerName=function(e,t){Ln(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Ln(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Ln(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}();function Fr(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in Et||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Ur=function(e){return e>="A"&&e<="Z"};function Br(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Ur(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Hr=Symbol.for("sc-keyframes");var Wr=function(e){return null==e||!1===e||""===e},Vr=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Wr(r)&&(Array.isArray(r)&&r.isCss||wr(r)?t.push("".concat(Br(n),":"),r,";"):vr(r)?t.push.apply(t,St(St(["".concat(n," {")],Vr(r),!1),["}"],!1)):t.push("".concat(Br(n),": ").concat(Fr(n,r),";")))}return t};function Kr(e,t,n,r,a){if(void 0===a&&(a=[]),"string"==typeof e)return e&&a.push(e),a;if(Wr(e))return a;if(yr(e))return a.push(".".concat(e.styledComponentId)),a;var i;if(wr(e))return!wr(i=e)||i.prototype&&i.prototype.isReactComponent||!t?(a.push(e),a):Kr(e(t),t,n,r,a);if(function(e){return"object"==typeof e&&null!==e&&Hr in e}(e))return n?(e.inject(n,r),a.push(e.getName(r))):a.push(e),a;if(vr(e)){for(var o=Vr(e),s=0;s<o.length;s++)a.push(o[s]);return a}if(!Array.isArray(e))return a.push(e.toString()),a;for(s=0;s<e.length;s++)Kr(e[s],t,n,r,a);return a}function Gr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(wr(n)&&!yr(n))return!1}return!0}var qr=Xn(Pn),Yr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Gr(e),this.componentId=t,this.baseHash=Jn(qr,t),this.baseStyle=n,Mr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=br(r,this.staticRulesId);else{var a=xr(Kr(this.rules,e,t,n)),i=Yn(Jn(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=br(r,i),this.staticRulesId=i}else{for(var s=Jn(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=xr(Kr(u,e,t,n));s=Jn(Jn(s,String(c)),d),l+=d}}if(l){var p=Yn(s>>>0);if(!t.hasNameForId(this.componentId,p)){var h=n(l,".".concat(p),void 0,this.componentId);t.insertRules(this.componentId,p,h)}r=br(r,p)}}return{className:r,css:"undefined"==typeof window?t.getTag().getGroup(Ln(this.componentId)):""}},e}(),Qr=/&/g,Jr=47,Xr=42;function Zr(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,r=0,a=!1,i=0;i<t;i++){var o=e.charCodeAt(i);if(0!==r||a||o!==Jr||e.charCodeAt(i+1)!==Xr)if(a)o===Xr&&e.charCodeAt(i+1)===Jr&&(a=!1,i++);else if(34!==o&&39!==o||0!==i&&92===e.charCodeAt(i-1)){if(0===r)if(123===o)n++;else if(125===o&&--n<0)return!0}else 0===r?r=o:r===o&&(r=0);else a=!0,i++}return 0!==n||0!==r}function ea(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=ea(e.children,t)),e})}function ta(e){var t,n,r,a=void 0===e?Un:e,i=a.options,o=void 0===i?Un:i,s=a.plugins,l=void 0===s?Fn:s,c=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push(function(e){e.type===It&&e.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),e.props[0]=e.props[0].replace(Qr,n).replace(r,c))}),o.prefix&&u.push(xn),u.push(yn);var d,p=[],h=function(e){var t=Wt(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)}))),f=function(e,a,i,s){void 0===a&&(a=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,n=a,r=void 0;var l=function(e){if(!Zr(e))return e;for(var t=e.length,n="",r=0,a=0,i=0,o=!1,s=0;s<t;s++){var l=e.charCodeAt(s);if(0!==i||o||l!==Jr||e.charCodeAt(s+1)!==Xr)if(o)l===Xr&&e.charCodeAt(s+1)===Jr&&(o=!1,s++);else if(34!==l&&39!==l||0!==s&&92===e.charCodeAt(s-1)){if(0===i)if(123===l)a++;else if(125===l){if(--a<0){for(var c=s+1;c<t;){var u=e.charCodeAt(c);if(59===u||10===u)break;c++}c<t&&59===e.charCodeAt(c)&&c++,a=0,s=c-1,r=c;continue}0===a&&(n+=e.substring(r,s+1),r=s+1)}else 59===l&&0===a&&(n+=e.substring(r,s+1),r=s+1)}else 0===i?i=l:i===l&&(i=0);else o=!0,s++}if(r<t){var d=e.substring(r);Zr(d)||(n+=d)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],r=0,a=0,i=0,o=0;a<t;){var s=e.charCodeAt(a);if(34!==s&&39!==s||0!==a&&92===e.charCodeAt(a-1))if(0===i)if(s===Jr&&a+1<t&&e.charCodeAt(a+1)===Xr){for(a+=2;a+1<t&&(e.charCodeAt(a)!==Xr||e.charCodeAt(a+1)!==Jr);)a++;a+=2}else if(40===s&&a>=3&&108==(32|e.charCodeAt(a-1))&&114==(32|e.charCodeAt(a-2))&&117==(32|e.charCodeAt(a-3)))o=1,a++;else if(o>0)41===s?o--:40===s&&o++,a++;else if(s===Xr&&a+1<t&&e.charCodeAt(a+1)===Jr)a>r&&n.push(e.substring(r,a)),r=a+=2;else if(s===Jr&&a+1<t&&e.charCodeAt(a+1)===Jr){for(a>r&&n.push(e.substring(r,a));a<t&&10!==e.charCodeAt(a);)a++;r=a}else a++;else a++;else 0===i?i=s:i===s&&(i=0),a++}return 0===r?e:(r<t&&n.push(e.substring(r)),n.join(""))}(e)),c=vn(i||a?"".concat(i," ").concat(a," { ").concat(l," }"):l);return o.namespace&&(c=ea(c,o.namespace)),p=[],wn(c,h),p};return f.hash=l.length?l.reduce(function(e,t){return t.name||On(15),Jn(e,t.name)},5381).toString():"",f}var na=new Mr,ra=ta(),aa=r.createContext({shouldForwardProp:void 0,styleSheet:na,stylis:ra}),ia=(aa.Consumer,r.createContext(void 0));function oa(){return r.useContext(aa)}function sa(e){if(!r.useMemo)return e.children;var t=oa().styleSheet,n=r.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),a=r.useMemo(function(){return ta({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),i=r.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:a}},[e.shouldForwardProp,n,a]);return r.createElement(aa.Provider,{value:i},r.createElement(ia.Provider,{value:a},e.children))}var la=r.createContext(void 0);la.Consumer;var ca={};new Set;function ua(e,t,n){var a=yr(e),i=e,o=!tr(e),s=t.attrs,l=void 0===s?Fn:s,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Kn(e);ca[n]=(ca[n]||0)+1;var r="".concat(n,"-").concat(Zn(Pn+n+ca[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,d=t.displayName,p=void 0===d?function(e){return tr(e)?"styled.".concat(e):"Styled(".concat(er(e),")")}(e):d,h=t.displayName&&t.componentId?"".concat(Kn(t.displayName),"-").concat(t.componentId):t.componentId||u,f=a&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(a&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;m=function(e,t){return g(e,t)&&w(e,t)}}else m=g}var y=new Yr(n,h,a?i.componentStyle:void 0);function b(e,t){return function(e,t,n){var a=e.attrs,i=e.componentStyle,o=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,u=r.useContext(la),d=oa(),p=e.shouldForwardProp||d.shouldForwardProp,h=Bn(t,u,o)||Un,f=function(e,t,n){for(var r,a=jt(jt({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var o=wr(r=e[i])?r(a):r;for(var s in o)"className"===s?a.className=br(a.className,o[s]):"style"===s?a.style=jt(jt({},a.style),o[s]):s in t&&void 0===t[s]||(a[s]=o[s])}return"className"in t&&"string"==typeof t.className&&(a.className=br(a.className,t.className)),a}(a,t,h),m=f.as||c,g={};for(var w in f)void 0===f[w]||"$"===w[0]||"as"===w||"theme"===w&&f.theme===h||("forwardedAs"===w?g.as=f.forwardedAs:p&&!p(w,m)||(g[w]=f[w]));var y=function(e,t){var n=oa();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,f),b=y.className,x=br(s,l);return b&&(x+=" "+b),f.className&&(x+=" "+f.className),g[tr(m)&&!Hn.has(m)?"class":"className"]=x,n&&(g.ref=n),(0,r.createElement)(m,g)}(x,e,t)}b.displayName=p;var x=r.forwardRef(b);return x.attrs=f,x.componentStyle=y,x.displayName=p,x.shouldForwardProp=m,x.foldedComponentIds=a?br(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=h,x.target=a?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)kr(e,a[r],!0);return e}({},i.defaultProps,e):e}}),zr(x,function(){return".".concat(x.styledComponentId)}),o&&gr(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function da(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var pa=function(e){return Object.assign(e,{isCss:!0})};function ha(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(wr(e)||vr(e))return pa(Kr(da(Fn,St([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Kr(r):pa(Kr(da(r,t)))}function fa(e,t,n){if(void 0===n&&(n=Un),!t)throw On(1,t);var r=function(r){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,n,ha.apply(void 0,St([r],a,!1)))};return r.attrs=function(r){return fa(e,t,jt(jt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return fa(e,t,jt(jt({},n),r))},r}var ma=function(e){return fa(ua,e)},ga=ma;Hn.forEach(function(e){ga[e]=ma(e)});var wa,ya=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Gr(e),Mr.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(xr(Kr(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Mr.registerId(this.componentId+e);var a=this.componentId+e;this.isStatic?n.hasNameForId(a,a)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))},e}();!function(){function e(e,t){var n=this;this[wa]=!0,this.inject=function(e,t){void 0===t&&(t=ra);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,zr(this,function(){throw On(12,String(n.name))})}e.prototype.getName=function(e){return void 0===e&&(e=ra),this.name+e.hash}}();wa=Hr;(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Ar(),r=xr([n&&'nonce="'.concat(n,'"'),"".concat(En,'="true"'),"".concat(Cn,'="').concat(Pn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw On(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw On(2);var n=e.instance.toString();if(!n)return[];var a=((t={})[En]="",t[Cn]=Pn,t.dangerouslySetInnerHTML={__html:n},t),i=Ar();return i&&(a.nonce=i),[r.createElement("style",jt({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Mr({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw On(2);return r.createElement(sa,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw On(3)}})(),"__sc-".concat(En,"__");const ba={smallPhone:360,phone:430,tablet:820,desktopHd:1920,tv4k:3840},xa={bordoAccent:"#9e1e36",bordoAccentDark:"#6a1426",bordoCore:"#4a1020",deepBlack:"#2e0810",outerSpace:"#2e0810",white:"#ffffff",goldMain:"#d4af37",goldHover:"#f1d592",goldSoft18:"rgba(212, 175, 55, 0.18)",goldSoft10:"rgba(180, 140, 30, 0.1)",goldSoft08:"rgba(212, 175, 55, 0.08)",goldSoft025:"rgba(212, 175, 55, 0.025)",testimonialBg:"rgba(255, 255, 255, 0.08)",testimonialBgHover:"rgba(255, 255, 255, 0.12)",testimonialBorder:"rgba(212, 175, 55, 0.24)",testimonialBorderHover:"rgba(212, 175, 55, 0.42)",testimonialText:"#ffffff",testimonialSubtext:"#b0b0b0",testimonialAccent:"#667eea",testimonialAccentLight:"rgba(102, 126, 234, 0.1)",testimonialAccentBorder:"rgba(102, 126, 234, 0.5)",cardBg1:"rgba(155, 45, 68, 0.08)",cardBg2:"rgba(75, 25, 45, 0.12)",cardBg3:"rgba(35, 10, 20, 0.15)",cardBgHover1:"rgba(175, 55, 85, 0.12)",cardBgHover2:"rgba(95, 35, 60, 0.18)",cardBgHover3:"rgba(40, 15, 25, 0.2)",navBorderGold26:"rgba(241, 213, 146, 0.26)",navBorderGold38:"rgba(241, 213, 146, 0.38)",navBorderGold48:"rgba(241, 213, 146, 0.48)",navBorderGold18:"rgba(241, 213, 146, 0.18)",navDividerGold50:"rgba(241, 213, 146, 0.5)",navBarUnderline:"rgba(212, 175, 55, 0.1)",navLoginBorder:"rgba(212, 175, 55, 0.25)",navLoginBg:"rgba(212, 175, 55, 0.08)",navLoginBgHover:"rgba(212, 175, 55, 0.15)",navLinkBarBgTop:"rgba(255, 245, 214, 0.04)",navLinkBarBgBottom:"rgba(30, 8, 14, 0.2)",navLinkBarBgHoverTop:"rgba(255, 245, 214, 0.08)",navLinkBarBgHoverBottom:"rgba(44, 12, 22, 0.28)",navToggleBg:"rgba(34, 10, 16, 0.72)",navBackdrop:"rgba(0, 0, 0, 0.4)",navShellBg:"rgba(0, 0, 0, 0.4)"},va={main:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'},ka={heightDesktop:"90px",minHeightTablet:"64px",minHeightPhone:"60px",gridColumnGapDesktop:"clamp(10px, 2vw, 24px)",gridColumnGapTablet:"10px",gridColumnGapPhone:"8px",paddingXDesktop:"clamp(8px, 3vw, 50px)",paddingXTablet:"14px",paddingXPhone:"10px",navRightGapDesktop:"clamp(6px, 1.5vw, 12px)",navRightGapTablet:"clamp(4px, 1.2vw, 8px)",menuToggleSize:"44px",menuToggleRadius:"10px",menuToggleFontSize:"1.24rem",drawerTop:"78px",drawerBackdropTopTablet:"72px",drawerWidth:"min(92vw, 360px)",drawerMaxWidth:"360px",drawerPadding:"14px 18px 16px",drawerBorderRadius:"16px",drawerViewportOffset:"72px",linksBarGap:"clamp(4px, 1.5vw, 30px)",linksBarPaddingX:"8px",linksBarGapTablet:"clamp(3px, 0.8vw, 8px)",linksBarGapPhone:"clamp(2px, 0.6vw, 5px)",linksDrawerGapTablet:"16px",linksDrawerGapPhone:"14px",linksDrawerMarginBottom:"clamp(8px, 2vw, 12px)",linkBarFontWeight:600,linkDrawerFontWeight:500,linkBarFontSize:"clamp(0.48rem, 1.2vw, 0.90rem)",linkBarLetterSpacing:"clamp(0.5px, 0.08vw, 1px)",linkBarPadding:"clamp(2px, 0.3vw, 4px) clamp(4px, 0.7vw, 7px)",linkBarRadius:"10px",linkBarFontSizeTablet:"clamp(0.48rem, 0.9vw, 0.68rem)",linkBarLetterSpacingTablet:"0.6px",linkBarPaddingTablet:"clamp(2px, 0.2vw, 3px) clamp(3px, 0.5vw, 5px)",linkBarFontSizePhone:"clamp(0.44rem, 0.75vw, 0.56rem)",linkBarLetterSpacingPhone:"0.5px",linkBarPaddingPhone:"clamp(2px, 0.1vw, 3px) clamp(3px, 0.4vw, 5px)",linkDrawerFontSize:"0.9rem",linkDrawerLetterSpacing:"1.1px",linkDrawerPadding:"2px 0",linkDrawerFontSizePhone:"0.84rem",linkDrawerLetterSpacingPhone:"0.9px",linkDrawerPaddingTablet:"1px 0",linkDrawerPaddingPhone:"1px 0",linkSeparatorWidth:"18px",linkSeparatorOffsetY:"-9px",loginGap:"clamp(5px, 1vw, 10px)",loginPadding:"clamp(6px, 1.2vw, 10px) clamp(10px, 2vw, 18px)",loginFontSize:"clamp(0.8rem, 1.8vw, 0.95rem)",loginLetterSpacing:"0.3px",loginGapTablet:"clamp(4px, 1.5vw, 8px)",loginPaddingTablet:"clamp(6px, 1.5vw, 9px) clamp(10px, 2.5vw, 16px)",loginFontSizeTablet:"clamp(0.75rem, 2.2vw, 0.9rem)",loginGapPhone:"clamp(4px, 2vw, 6px)",loginPaddingPhone:"clamp(5px, 1.8vw, 8px) clamp(8px, 2.8vw, 14px)",loginFontSizePhone:"clamp(0.7rem, 2.8vw, 0.85rem)",loginIconFontSize:"clamp(0.9rem, 1.8vw, 1.1rem)",loginIconFontSizeTablet:"clamp(0.85rem, 2.2vw, 1rem)",loginIconFontSizePhone:"clamp(0.8rem, 2.8vw, 0.95rem)",socialGap:"20px",socialGapTablet:"14px",socialGapPhone:"12px",socialIconSize:"1.3rem",socialIconSizeTablet:"1.18rem",socialIconSizePhone:"1.08rem",mobileLoginMarginTop:"18px",mobileLoginPaddingY:"clamp(14px, 3vw, 18px)",mobileLoginMarginTopPhone:"16px",mobileLoginPaddingYPhone:"clamp(12px, 2.5vw, 16px)",mobileSocialMarginTop:"14px",mobileSocialPaddingTop:"12px"},za=ga.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(
      ellipse at 80% 10%,
      ${xa.bordoAccent} 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      ${xa.bordoAccentDark} 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 50% 50%,
      ${xa.bordoCore} 0%,
      ${xa.deepBlack} 100%
    );

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 70% 0%,
        ${xa.goldSoft18} 0%,
        transparent 45%
      ),
      radial-gradient(
        ellipse at 100% 50%,
        ${xa.goldSoft10} 0%,
        transparent 40%
      ),
      radial-gradient(
        ellipse at 30% 100%,
        ${xa.goldSoft08} 0%,
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
      ${xa.goldSoft025} 80px,
      ${xa.goldSoft025} 81px
    );
    pointer-events: none;
  }
`;var ja=n(579);const Sa=function(){return(0,ja.jsx)(za,{})},Ea=ka,_a=xa,Ca=ba,Pa=ga.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${Ea.heightDesktop};
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  column-gap: ${Ea.gridColumnGapDesktop};
  padding: 0 ${Ea.paddingXDesktop};
  background: ${_a.navShellBg};
  backdrop-filter: blur(15px);
  border-bottom: 1px solid ${_a.navBarUnderline};
  z-index: 1000;

  @media (max-width: ${Ca.tablet}px) {
    height: auto;
    min-height: ${Ea.minHeightTablet};
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "left center right";
    align-items: center;
    column-gap: ${Ea.gridColumnGapTablet};
    row-gap: 0;
    padding: 0 ${Ea.paddingXTablet};
  }

  @media (max-width: ${Ca.phone}px) {
    min-height: ${Ea.minHeightPhone};
    column-gap: ${Ea.gridColumnGapPhone};
    padding: 0 ${Ea.paddingXPhone};
  }
`,Ta=ga.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 0;
  flex-shrink: 0;

  @media (max-width: ${Ca.tablet}px) {
    grid-area: left;
  }
`,Ia=ga.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  width: 100%;

  @media (max-width: ${Ca.tablet}px) {
    display: none;
  }
`,Aa=ga.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${Ea.navRightGapDesktop};
  min-width: 0;
  flex-shrink: 0;

  @media (max-width: ${Ca.tablet}px) {
    grid-area: right;
    gap: ${Ea.navRightGapTablet};
  }
`,Ra=ga.div`
  display: flex;
  flex-shrink: 0;

  @media (max-width: ${Ca.tablet}px) {
    display: none;
  }
`,Oa=ga.button`
  display: none;
  border: 1px solid ${_a.navBorderGold38};
  background: ${_a.navToggleBg};
  color: ${_a.goldHover};
  width: ${Ea.menuToggleSize};
  height: ${Ea.menuToggleSize};
  border-radius: ${Ea.menuToggleRadius};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${Ea.menuToggleFontSize};
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

  @media (max-width: ${Ca.tablet}px) {
    display: inline-flex;
  }
`,Na=ga.button`
  position: fixed;
  inset: 0;
  border: none;
  background: ${_a.navBackdrop};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
  z-index: 999;
  display: none;

  &[data-open] {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: ${Ca.tablet}px) {
    top: ${Ea.drawerBackdropTopTablet};
    display: block;
  }
`,Da=ga.aside`
  position: fixed;
  top: ${Ea.drawerTop};
  left: 50%;
  right: auto;
  width: ${Ea.drawerWidth};
  max-width: ${Ea.drawerMaxWidth};
  max-height: calc(100vh - ${Ea.drawerViewportOffset});
  height: auto;
  padding: ${Ea.drawerPadding};
  background: linear-gradient(
    180deg,
    rgba(120, 40, 64, 0.72) 0%,
    rgba(82, 24, 42, 0.68) 100%
  );
  backdrop-filter: blur(12px) saturate(120%);
  border: 1px solid ${_a.navBorderGold18};
  border-radius: ${Ea.drawerBorderRadius};
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

  @media (max-width: ${Ca.tablet}px) {
    display: block;
  }
`,$a=ga.div`
  margin-top: ${Ea.mobileSocialMarginTop};
  padding-top: ${Ea.mobileSocialPaddingTop};
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid ${_a.navBorderGold18};

  & > div {
    justify-content: center;
  }
`,La=ga.div`
  margin-top: ${Ea.mobileLoginMarginTop};
  padding: ${Ea.mobileLoginPaddingY} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${_a.navBorderGold18};

  @media (max-width: ${Ca.phone}px) {
    margin-top: ${Ea.mobileLoginMarginTopPhone};
    padding: ${Ea.mobileLoginPaddingYPhone} 0;
  }
`,Ma={src:n.p+"static/media/znak-wodny.5040197ae93bea0121d6.png",alt:"Logo Klara Queen",name:"Klara Queen",ariaLabel:"Strona g\u0142\xf3wna Klara Queen"},Fa=ga(wt)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`,Ua=ga.img.attrs({src:Ma.src,alt:Ma.alt})`
  height: clamp(50px, 8vw, 85px);
  width: auto;
  cursor: pointer;
  filter: brightness(3) contrast(1.2) saturate(1.1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.34))
    drop-shadow(0 0 8px ${xa.goldMain})
    drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18));
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
    filter: brightness(3) contrast(1.2) saturate(1.1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${xa.goldMain})
      drop-shadow(0 0 16px ${xa.goldHover});
  }
`;const Ba=function(){return(0,ja.jsx)(Fa,{to:"/","aria-label":Ma.ariaLabel,children:(0,ja.jsx)(Ua,{})})},Ha=ka,Wa=xa,Va=ga.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${Ha.linksBarGap};
  flex-wrap: nowrap;
  list-style: none;
  margin: 0;
  padding: 0 ${Ha.linksBarPaddingX};
  white-space: nowrap;
  width: auto;
  min-width: 0;
  max-width: 100%;

  @media (max-width: ${ba.tablet}px) {
    gap: ${Ha.linksBarGapTablet};
    padding: 0;
    max-width: 100%;
  }

  @media (max-width: ${ba.phone}px) {
    gap: ${Ha.linksBarGapPhone};
  }
`,Ka=ga.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${Ha.linksDrawerGapTablet};
  flex-wrap: nowrap;
  list-style: none;
  margin: 0 0 ${Ha.linksDrawerMarginBottom} 0;
  padding: 0;
  white-space: nowrap;
  width: auto;
  min-width: 0;

  @media (max-width: ${ba.phone}px) {
    gap: ${Ha.linksDrawerGapPhone};
  }
`,Ga=ga.li`
  flex-shrink: 1;
  min-width: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: auto;
  color: ${Wa.goldHover};
  font-family: ${va.main};
  font-weight: ${Ha.linkBarFontWeight};
  text-transform: uppercase;
  letter-spacing: ${Ha.linkBarLetterSpacing};
  cursor: pointer;
  font-size: ${Ha.linkBarFontSize};
  white-space: nowrap;
  text-align: center;
  line-height: 1;
  padding: ${Ha.linkBarPadding};
  border-radius: ${Ha.linkBarRadius};
  border: 1px solid ${Wa.navBorderGold26};
  background: linear-gradient(
    180deg,
    ${Wa.navLinkBarBgTop} 0%,
    ${Wa.navLinkBarBgBottom} 100%
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

  @media (max-width: ${ba.tablet}px) {
    letter-spacing: ${Ha.linkBarLetterSpacingTablet};
    font-size: ${Ha.linkBarFontSizeTablet};
    padding: ${Ha.linkBarPaddingTablet};
    white-space: nowrap;
  }

  @media (max-width: ${ba.phone}px) {
    letter-spacing: ${Ha.linkBarLetterSpacingPhone};
    font-size: ${Ha.linkBarFontSizePhone};
    padding: ${Ha.linkBarPaddingPhone};
  }

  &:hover {
    color: ${Wa.white};
    transform: translateY(-1px);
    border-color: ${Wa.navBorderGold48};
    background: linear-gradient(
      180deg,
      ${Wa.navLinkBarBgHoverTop} 0%,
      ${Wa.navLinkBarBgHoverBottom} 100%
    );
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${Wa.goldMain},
      0 0 18px ${Wa.goldHover};
  }
`,qa=ga.li`
  flex-shrink: 0;
  min-width: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: auto;
  color: ${Wa.goldHover};
  font-family: ${va.main};
  font-weight: ${Ha.linkDrawerFontWeight};
  text-transform: uppercase;
  letter-spacing: ${Ha.linkDrawerLetterSpacing};
  cursor: pointer;
  font-size: ${Ha.linkDrawerFontSize};
  white-space: nowrap;
  text-align: center;
  line-height: 1;
  padding: ${Ha.linkDrawerPadding};
  border-radius: ${Ha.linkBarRadius};
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
    bottom: ${Ha.linkSeparatorOffsetY};
    width: ${Ha.linkSeparatorWidth};
    height: 1px;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${Wa.navDividerGold50} 50%,
      transparent 100%
    );
  }

  @media (max-width: ${ba.tablet}px) {
    padding: ${Ha.linkDrawerPaddingTablet};
  }

  @media (max-width: ${ba.phone}px) {
    letter-spacing: ${Ha.linkDrawerLetterSpacingPhone};
    font-size: ${Ha.linkDrawerFontSizePhone};
    padding: ${Ha.linkDrawerPaddingPhone};
  }

  &:hover {
    color: ${Wa.white};
    transform: translateY(-1px);
    border-color: transparent;
    background: transparent;
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${Wa.goldMain},
      0 0 18px ${Wa.goldHover};
  }
`,Ya=ga.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: inherit;
`;var Qa={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ja=r.createContext&&r.createContext(Qa),Xa=["attr","size","title"];function Za(){return Za=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Za.apply(null,arguments)}function ei(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ti(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ei(Object(n),!0).forEach(function(t){ni(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ei(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ni(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ri(e){return e&&e.map((e,t)=>r.createElement(e.tag,ti({key:t},e.attr),ri(e.child)))}function ai(e){return t=>r.createElement(ii,Za({attr:ti({},e.attr)},t),ri(e.child))}function ii(e){var t=t=>{var n,{attr:a,size:i,title:o}=e,s=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,Xa),l=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",Za({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:ti(ti({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==Ja?r.createElement(Ja.Consumer,null,e=>t(e)):t(Qa)}function oi(e){return ai({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function si(e){return ai({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"},child:[]}]})(e)}function li(e){return ai({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"},child:[]}]})(e)}function ci(e){return ai({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"},child:[]}]})(e)}function ui(e){return ai({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(e)}function di(e){return ai({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(e)}function pi(e){return ai({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function hi(e){return ai({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(e)}function fi(e){return ai({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(e)}function mi(e){return ai({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function gi(e){return ai({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(e)}function wi(e){return ai({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}const yi=[{id:1,icon:function(e){return ai({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)},url:"https://youtube.com",label:"YouTube"},{id:2,icon:function(e){return ai({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)},url:"https://facebook.com",label:"Facebook"},{id:3,icon:function(e){return ai({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(e)},url:"https://allegro.pl",label:"Allegro"}],bi={labels:[{name:"Start",to:"/klara-queen"},{name:"Oferta",to:"/offer"},{name:"Aktualno\u015bci",to:"/blog"},{name:"Wsp\xf3\u0142praca",to:"/cooperation"},{name:"Najcz\u0119stsze pytania",to:"/questions"},{name:"O Nas",to:"/about"}],socials:yi,aria:{closeLabel:"Zamknij menu",openLabel:"Otw\xf3rz menu"}};const xi=function(e){let{variant:t="bar",onItemClick:n}=e;const r=()=>{n&&n()},a="drawer"===t?Ka:Va,i="drawer"===t?qa:Ga;return(0,ja.jsx)(a,{children:bi.labels.map((e,t)=>(0,ja.jsx)(i,{onClick:r,children:e.to?(0,ja.jsx)(Ya,{as:wt,to:e.to,children:e.name}):(0,ja.jsx)(Ya,{href:e.url,children:e.name})},`${e.name}-${t}`))})},vi=ka,ki=xa,zi=ba,ji=ga.a`
  display: flex;
  align-items: center;
  gap: ${vi.loginGap};
  padding: ${vi.loginPadding};
  color: ${ki.goldHover};
  background: ${ki.navLoginBg};
  border: 1px solid ${ki.navLoginBorder};
  border-radius: ${vi.linkBarRadius};
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
  font-size: ${vi.loginFontSize};
  letter-spacing: ${vi.loginLetterSpacing};
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: ${zi.tablet}px) {
    font-size: ${vi.loginFontSizeTablet};
    padding: ${vi.loginPaddingTablet};
    gap: ${vi.loginGapTablet};
  }

  @media (max-width: ${zi.phone}px) {
    font-size: ${vi.loginFontSizePhone};
    padding: ${vi.loginPaddingPhone};
    gap: ${vi.loginGapPhone};
  }

  &:hover {
    color: ${ki.white};
    background: ${ki.navLoginBgHover};
    border-color: rgba(255, 239, 194, 0.5);
    transform: translateY(-2px) scale(1.03);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${ki.goldMain})
      drop-shadow(0 0 16px ${ki.goldHover});
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
  }

  &:active {
    transform: translateY(0) scale(1);
  }
`,Si=ga.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${vi.loginIconFontSize};
  flex-shrink: 0;

  @media (max-width: ${zi.tablet}px) {
    font-size: ${vi.loginIconFontSizeTablet};
  }

  @media (max-width: ${zi.phone}px) {
    font-size: ${vi.loginIconFontSizePhone};
  }
`,Ei=ga.span`
  font-family: inherit;
  letter-spacing: ${vi.loginLetterSpacing};
`;const _i=function(){return(0,ja.jsxs)(ji,{as:wt,to:"/login","aria-label":"Zaloguj si\u0119",children:[(0,ja.jsx)(Si,{children:(0,ja.jsx)(ui,{})}),(0,ja.jsx)(Ei,{children:"Logowanie"})]})},Ci=ka,Pi=xa,Ti=ba,Ii=ga.div`
  display: flex;
  gap: ${Ci.socialGap};
  align-items: center;

  @media (max-width: ${Ti.tablet}px) {
    gap: ${Ci.socialGapTablet};
  }

  @media (max-width: ${Ti.phone}px) {
    gap: ${Ci.socialGapPhone};
  }
`,Ai=ga.a`
  color: ${Pi.goldHover};
  font-size: ${Ci.socialIconSize};
  transition:
    color 0.3s ease,
    transform 0.3s ease,
    filter 0.3s ease;
  display: flex;
  align-items: center;
  text-decoration: none;
  filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.22))
    drop-shadow(0 0 8px rgba(212, 175, 55, 0.22));

  @media (max-width: ${Ti.tablet}px) {
    font-size: ${Ci.socialIconSizeTablet};
  }

  @media (max-width: ${Ti.phone}px) {
    font-size: ${Ci.socialIconSizePhone};
  }

  &:hover {
    color: ${Pi.white};
    transform: translateY(-2px) scale(1.04);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${Pi.goldMain})
      drop-shadow(0 0 16px ${Pi.goldHover});
  }
`;const Ri=function(){return(0,ja.jsx)(Ii,{children:bi.socials.map(e=>{const t=e.icon;return(0,ja.jsx)(Ai,{href:e.url,target:"_blank",rel:"noreferrer","aria-label":e.label,children:(0,ja.jsx)(t,{title:e.label})},e.id)})})};const Oi=function(){const[e,t]=(0,r.useState)(!1),n=()=>{t(!1)};return(0,ja.jsxs)(ja.Fragment,{children:[(0,ja.jsxs)(Pa,{children:[(0,ja.jsx)(Ta,{children:(0,ja.jsx)(Ba,{})}),(0,ja.jsx)(Ia,{children:(0,ja.jsx)(xi,{})}),(0,ja.jsxs)(Aa,{children:[(0,ja.jsx)(Ra,{children:(0,ja.jsx)(_i,{})}),(0,ja.jsx)(Oa,{type:"button",onClick:()=>{t(e=>!e)},"aria-label":e?bi.aria.closeLabel:bi.aria.openLabel,"aria-expanded":e,children:e?(0,ja.jsx)(oi,{}):(0,ja.jsx)(wi,{})})]})]}),(0,ja.jsx)(Na,{type:"button","data-open":e?"":void 0,onClick:n}),(0,ja.jsxs)(Da,{"data-open":e?"":void 0,children:[(0,ja.jsx)(xi,{variant:"drawer",onItemClick:n}),(0,ja.jsxs)(La,{children:[(0,ja.jsx)(_i,{}),(0,ja.jsx)($a,{children:(0,ja.jsx)(Ri,{})})]})]})]})},Ni=ga.footer`
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

  @media (max-width: ${ba.desktopHd}px) {
    padding: 55px 45px 22px;
  }

  @media (max-width: ${ba.tablet}px) {
    padding: 45px 18px 18px;
  }

  @media (max-width: 821px) {
    padding: 30px 12px 12px;
  }

  @media (max-width: ${ba.smallPhone}px) {
    padding: 25px 10px 10px;
  }
`,Di=ga.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 50px;
  width: 100%;

  @media (max-width: ${ba.tablet}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }

  @media (max-width: 821px) {
    gap: 12px;
  }

  @media (max-width: ${ba.phone}px) {
    gap: 12px;
  }

  @media (max-width: ${ba.smallPhone}px) {
    gap: 10px;
  }
`,$i="kontakt@studioklara.pl",Li={brand:{name:"Klara Queen",slogan:"Digital Excellence",description:"Tworzymy luksusowe do\u015bwiadczenia cyfrowe, kt\xf3re definiuj\u0105 now\u0105 jako\u015b\u0107 Twojej marki w sieci."},links:[{name:"Start",to:"/"},{name:"Oferta",to:"/offer"},{name:"Aktualno\u015bci",to:"/blog"},{name:"Wsp\xf3\u0142praca",to:"/cooperation"},{name:"Opinie",to:"/testimonials"},{name:"O Nas",to:"/about"},{name:"Najcz\u0119stsze pytania",to:"/questions"}],socials:yi,contact:{email:$i,copy:`\xa9 ${(new Date).getFullYear()} Klara Queen. Wszystkie prawa zastrze\u017cone.`}},Mi=ga.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: ${ba.tablet}px) {
    align-items: center;
  }
`,Fi=ga.div`
  display: flex;
  align-items: center;
  margin-top: -56px;

  @media (max-width: ${ba.desktopHd}px) {
    margin-top: -50px;
  }

  @media (max-width: ${ba.tablet}px) {
    margin-top: -36px;
  }

  @media (max-width: ${ba.smallPhone}px) {
    margin-top: -28px;
  }
`,Ui=ga.img`
  height: 180px;
  width: auto;
  cursor: pointer;
  filter: brightness(2.8) contrast(1.1) saturate(1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.3))
    drop-shadow(0 0 6px ${xa.goldMain})
    drop-shadow(0 1px 4px rgba(0, 0, 0, 0.15));
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    filter: brightness(2.8) contrast(1.1) saturate(1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.4))
      drop-shadow(0 0 8px ${xa.goldMain})
      drop-shadow(0 0 12px ${xa.goldHover});
  }

  @media (max-width: ${ba.desktopHd}px) {
    height: 168px;
  }

  @media (max-width: ${ba.tablet}px) {
    height: 140px;
  }

  @media (max-width: ${ba.smallPhone}px) {
    height: 120px;
  }
`,Bi=ga.p`
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

  @media (max-width: ${ba.tablet}px) {
    font-size: 0.78rem;
    line-height: 1.5;
    max-width: 500px;
  }

  @media (max-width: ${ba.smallPhone}px) {
    font-size: 0.72rem;
    line-height: 1.4;
  }
`;const Hi=function(e){let{data:t}=e;return(0,ja.jsxs)(Mi,{children:[(0,ja.jsx)(Fi,{children:(0,ja.jsx)(Ui,{src:Ma.src,alt:Ma.alt})}),(0,ja.jsx)(Bi,{children:t.description})]})},Wi=ha`
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
    background: ${xa.goldMain};
    transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${xa.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 16px rgba(212, 175, 55, 0.45);

    &::before {
      width: 100%;
    }
  }

  @media (max-width: ${ba.tablet}px) {
    font-size: 0.76rem;
  }

  @media (max-width: ${ba.smallPhone}px) {
    font-size: 0.7rem;
  }
`,Vi=ga.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${ba.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${ba.smallPhone}px) {
    gap: 10px;
  }
`,Ki=ga.h4`
  color: ${xa.goldHover};
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

  @media (max-width: ${ba.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${ba.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,Gi=ga.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;

  @media (max-width: ${ba.tablet}px) {
    grid-template-columns: 1fr;
    gap: 12px;
    place-items: center;
  }

  @media (max-width: ${ba.phone}px) {
    gap: 8px;
    place-items: center;
  }

  @media (max-width: ${ba.smallPhone}px) {
    gap: 6px;
  }
`,qi=ga.a`
  ${Wi}
`,Yi=ga(wt)`
  ${Wi}
`;const Qi=function(e){let{data:t}=e;return(0,ja.jsxs)(Vi,{children:[(0,ja.jsx)(Ki,{children:"Nawigacja"}),(0,ja.jsx)(Gi,{children:t.map((e,t)=>e.to?(0,ja.jsx)(Yi,{to:e.to,children:e.name},t):(0,ja.jsx)(qi,{href:e.url,children:e.name},t))})]})},Ji=ga.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${ba.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${ba.smallPhone}px) {
    gap: 10px;
  }
`,Xi=ga.h4`
  color: ${xa.goldHover};
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

  @media (max-width: ${ba.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${ba.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,Zi=ga.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: ${ba.tablet}px) {
    justify-content: center;
    gap: 16px;
  }

  @media (max-width: ${ba.smallPhone}px) {
    gap: 12px;
  }
`,eo=ga.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${xa.white};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  opacity: 0.8;

  svg {
    font-size: 1.6rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.15));
    color: ${xa.goldMain};
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
    color: ${xa.white};

    svg {
      transform: scale(1.12);
      color: ${xa.goldHover};
      filter: drop-shadow(0 6px 12px rgba(212, 175, 55, 0.3));
    }

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: ${ba.tablet}px) {
    gap: 6px;

    svg {
      font-size: 1.4rem;
    }
  }

  @media (max-width: ${ba.smallPhone}px) {
    gap: 5px;

    svg {
      font-size: 1.2rem;
    }
  }
`,to=ga.span`
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: ${xa.white};
  opacity: 0.75;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: "Cormorant Garamond", serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: ${ba.tablet}px) {
    font-size: 0.58rem;
    letter-spacing: 1px;
  }

  @media (max-width: ${ba.smallPhone}px) {
    font-size: 0.54rem;
  }
`;const no=function(e){let{data:t}=e;return(0,ja.jsxs)(Ji,{children:[(0,ja.jsx)(Xi,{children:"Nasze Kana\u0142y"}),(0,ja.jsx)(Zi,{children:t.map(e=>(0,ja.jsxs)(eo,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,ja.jsx)(e.icon,{}),(0,ja.jsx)(to,{children:e.label})]},e.id))})]})},ro=ga.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px 0;
  border-top: 1px solid rgba(212, 175, 55, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: ${ba.tablet}px) {
    flex-direction: column-reverse;
    gap: 12px;
    margin: 30px auto 0;
    padding: 15px 0;
    text-align: center;
    align-items: center;
  }

  @media (max-width: ${ba.smallPhone}px) {
    margin: 20px auto 0;
    padding: 12px 0;
    gap: 10px;
  }
`,ao=ga.span`
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

  @media (max-width: ${ba.tablet}px) {
    font-size: 0.68rem;
  }

  @media (max-width: ${ba.smallPhone}px) {
    font-size: 0.63rem;
  }
`,io=ga.span`
  color: ${xa.goldMain};
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

  @media (max-width: ${ba.tablet}px) {
    font-size: 0.75rem;
  }

  @media (max-width: ${ba.smallPhone}px) {
    font-size: 0.7rem;
  }
`,oo=ga.a`
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
      ${xa.goldMain} 100%
    );
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${xa.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(212, 175, 55, 0.6);

    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${ba.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 0.8px;
  }

  @media (max-width: ${ba.smallPhone}px) {
    font-size: 0.7rem;
  }
`;const so=function(e){let{data:t}=e;const[n,a]=(0,r.useState)(67100),[i,o]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(i)return;const e=localStorage.getItem("visitCount"),t=localStorage.getItem("lastSessionTime"),n=(new Date).getTime();if(e&&t){if(n-parseInt(t)>6e4){const t=parseInt(e)+1;localStorage.setItem("visitCount",t),localStorage.setItem("lastSessionTime",n),a(t)}else a(parseInt(e))}else localStorage.setItem("visitCount",67101),localStorage.setItem("lastSessionTime",n),a(67100);o(!0)},[i]),(0,ja.jsxs)(ro,{children:[(0,ja.jsx)(ao,{children:t.copy}),(0,ja.jsxs)(io,{children:["Odwiedzin na stronie:"," ",(0,ja.jsx)("strong",{children:n.toLocaleString("pl-PL")})]}),(0,ja.jsx)(oo,{href:`mailto:${t.email}`,children:t.email})]})};const lo=function(){const{brand:e,links:t,socials:n,contact:r}=Li;return(0,ja.jsxs)(Ni,{children:[(0,ja.jsxs)(Di,{children:[(0,ja.jsx)(Hi,{data:e}),(0,ja.jsx)(Qi,{data:t}),(0,ja.jsx)(no,{data:n})]}),(0,ja.jsx)(so,{data:r})]})},co=()=>{const e=ue();return(0,r.useEffect)(()=>{window.scrollTo(0,0)},[e.key]),(0,r.useEffect)(()=>{setTimeout(()=>{window.scrollTo(0,0)},100)},[]),null},uo=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=ha.apply(void 0,St([e],t,!1)),i="sc-global-".concat(Zn(JSON.stringify(a))),o=new ya(a,i),s=new WeakMap,l=function(e){var t=oa(),n=r.useContext(la),a=s.get(t.styleSheet);return void 0===a&&(a=t.styleSheet.allocateGSInstance(i),s.set(t.styleSheet,a)),r.useLayoutEffect(function(){return t.styleSheet.server||function(e,t,n,r,a){if(o.isStatic)o.renderStyles(e,Rn,n,a);else{var i=jt(jt({},t),{theme:Bn(t,r,l.defaultProps)});o.renderStyles(e,i,n,a)}}(a,e,t.styleSheet,n,t.stylis),function(){o.removeStyles(a,t.styleSheet)}},[a,e,t.styleSheet,n,t.stylis]),null};return r.memo(l)})`
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
    background-color: ${xa.outerSpace||"#1a0005"};
    color: ${xa.white||"#ffffff"};
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
    background: ${xa.goldMain||"#d4af37"};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${xa.goldHover||"#f1d592"};
  }
`,po=ga.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,ho=ga.div`
  flex: 1;
  padding-top: 90px;

  @media (max-width: 821px) {
    padding-top: 15px;
  }

  @media (max-width: ${ba.phone}px) {
    padding-top: 45px;
  }
`,fo=ga.section`
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

  @media (max-width: ${ba.tablet}px) {
    padding: 0 0 0;
  }

  @media (max-width: 640px) {
    padding: 0 0 0;
  }

  @media (max-width: ${ba.phone}px) {
    padding: 0 0 0;
  }
`,mo=ga.div`
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

  @media (max-width: ${ba.tablet}px) {
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

  @media (max-width: ${ba.phone}px) {
    gap: 8px;
    padding: 0 10px 0;
  }

  @media (max-width: 420px) {
    gap: 8px;
    padding: 0 8px 0;
  }
`,go=ga.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;
  margin: 0;

  @media (max-width: ${ba.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${ba.tablet}px) {
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

  @media (max-width: ${ba.phone}px) {
    margin-top: 0;
  }

  @media (max-width: 420px) {
    margin-top: 0;
  }
`,wo=ga.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;
  margin: 0;

  @media (max-width: ${ba.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${ba.tablet}px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 760px;
    margin-top: 0;
  }

  @media (max-width: ${ba.phone}px) {
    margin-top: 0;
  }
`,yo=(ga.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,ga.div`
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

  @media (max-width: ${ba.tablet}px) {
    max-width: 760px;
    text-align: center;
    margin: -20px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  @media (max-width: ${ba.phone}px) {
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
    align-items: center;
    padding: 0 2px;
  }
`),bo=ga.div`
  font-family: "Manrope", "Segoe UI", sans-serif;
  color: rgba(255, 242, 214, 0.92);
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.2vw, 2.2px);
  font-size: clamp(0.62rem, 0.9vw, 0.82rem);
  font-weight: 500;
  margin-bottom: 18px;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);

  @media (max-width: ${ba.tablet}px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${ba.phone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.8px;
    margin-bottom: 12px;
  }
`,xo=ga.h1`
  margin: 0 0 18px;
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  color: ${xa.goldHover};
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

  @media (max-width: ${ba.tablet}px) {
    font-size: clamp(0.95rem, 3.2vw, 1.95rem);
    letter-spacing: 0;
    text-align: center;
    width: 100%;
    line-height: 1;
  }

  @media (max-width: ${ba.phone}px) {
    margin-bottom: 14px;
    font-size: clamp(0.9rem, 5.2vw, 1.6rem);
    line-height: 1.1;
  }
`,vo=ga.p`
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

  @media (max-width: ${ba.tablet}px) {
    max-width: 560px;
    font-size: clamp(0.74rem, 1.8vw, 0.84rem);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${ba.phone}px) {
    max-width: 100%;
    font-size: clamp(0.72rem, 3.4vw, 0.8rem);
    line-height: 1.45;
    text-align: center;
  }
`,ko=ga.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: nowrap;

  @media (max-width: ${ba.tablet}px) {
    width: 100%;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10px;
  }

  @media (max-width: ${ba.phone}px) {
    gap: 8px;
    margin-top: 22px;
    flex-wrap: nowrap;
    justify-content: center;
  }
`,zo=`\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 48px;\n  padding: 0 24px;\n  border-radius: 14px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.9px;\n  font-size: clamp(0.68rem, 0.8vw, 0.82rem);\n  font-weight: 700;\n  white-space: nowrap;\n  flex: 0 0 auto;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease,\n    color 0.3s ease, border-color 0.3s ease;\n\n  @media (max-width: ${ba.tablet}px) {\n    min-height: 42px;\n    padding: 0 14px;\n    font-size: 0.74rem;\n    letter-spacing: 0.8px;\n  }\n\n  @media (max-width: ${ba.phone}px) {\n    min-height: 40px;\n    padding: 0 12px;\n    font-size: 0.7rem;\n    letter-spacing: 0.7px;\n  }\n`,jo=ga.a`
  ${zo}
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
`,So=ga.a`
  ${zo}
  color: rgba(255, 246, 220, 0.92);
  background: rgba(53, 13, 19, 0.22);
  border: 1px solid rgba(241, 213, 146, 0.58);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.04),
    0 10px 24px rgba(0, 0, 0, 0.14);

  &:hover {
    transform: translateY(-1px);
    color: ${xa.white};
    border-color: rgba(241, 213, 146, 0.78);
    box-shadow:
      0 14px 30px rgba(0, 0, 0, 0.2),
      0 0 18px rgba(212, 175, 55, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  }
`,Eo="Unikalny design, kt\xf3ry zachwyca",_o={line1:"Luksusowe i funkcjonalne",line2:"strony WWW dla Twojej marki"},Co={line1:"Projektujemy spersonalizowane, unikalne rozwi\u0105zania cyfrowe,",line2:"kt\xf3re buduj\u0105 autorytet i przyci\u0105gaj\u0105 klient\xf3w premium."},Po={primary:{label:"Zobacz Projekty",href:"/offer"},secondary:{label:"Wsp\xf3\u0142praca",href:"/cooperation"}};const To=function(){return(0,ja.jsxs)(yo,{children:[(0,ja.jsx)(bo,{children:Eo}),(0,ja.jsxs)(xo,{children:[_o.line1,(0,ja.jsx)("br",{}),_o.line2]}),(0,ja.jsxs)(vo,{children:[Co.line1,(0,ja.jsx)("br",{}),Co.line2]}),(0,ja.jsxs)(ko,{children:[(0,ja.jsx)(jo,{as:wt,to:Po.primary.href,children:Po.primary.label}),(0,ja.jsx)(So,{as:wt,to:Po.secondary.href,children:Po.secondary.label})]})]})},Io=ga.div`
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

  @media (max-width: ${ba.tablet}px) {
    width: min(100%, 760px);
    height: clamp(240px, 46vw, 380px);
    padding: clamp(8px, 1.2vw, 12px);
    margin: 0 auto 0;
  }

  @media (max-width: ${ba.phone}px) {
    padding: clamp(6px, 1vw, 10px);
  }
`,Ao=ga.div`
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

  @media (max-width: ${ba.tablet}px) {
    --offset-distance: 68px;
    --edge-offset-distance: 112px;
  }

  @media (max-width: ${ba.phone}px) {
    --offset-distance: 56px;
    --edge-offset-distance: 98px;
  }
`,Ro=ga.img`
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
  box-shadow: ${e=>e.$active?`0 28px 50px rgba(0, 0, 0, 0.45), 0 0 20px ${xa.goldSoft18}`:"0 16px 26px rgba(0, 0, 0, 0.3)"};
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

  @media (max-width: ${ba.phone}px) {
    width: 260px;
    height: 182px;
  }
`;var Oo=n(217),No=n(410),Do=n(430),$o=n(682);const Lo={images:[Oo,No,Do,$o,No]},{images:Mo}=Lo,Fo=(e,t,n)=>{let r=t-e;return r>n/2&&(r-=n),r<-n/2&&(r+=n),r};const Uo=function(){const[e,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{const e=setInterval(()=>{t(e=>(e+1)%Mo.length)},4e3);return()=>clearInterval(e)},[]),(0,ja.jsx)(Io,{children:(0,ja.jsx)(Ao,{children:Mo.map((t,n)=>(0,ja.jsx)(Ro,{src:t,alt:`Projekt ${n+1}`,$offset:Fo(e,n,Mo.length),$active:n===e},`${t}-${n}`))})})},Bo=ga.section`
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

  @media (max-width: ${ba.phone}px) {
    margin-top: -8px;
  }
`,Ho=ga.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,Wo=ga.h2`
  color: ${xa.goldHover};
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
`,Vo=ga.p`
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
`,Ko=ga.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(280px, 38vw, 420px);
  margin-top: 0;
`,Go=ga.div`
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
`,qo=ga.div`
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

  @media (max-width: ${ba.tablet}px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(100% - clamp(6px, 0.8vw, 10px));
  }

  @media (max-width: ${ba.smallPhone}px) {
    flex: 0 0 calc(100% - clamp(6px, 0.8vw, 10px));
  }
`,Yo=ga.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${xa.goldMain};
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
`,Qo=ga.div`
  margin: 8px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover div {
    width: 100px;
  }
`,Jo=ga.span`
  color: ${xa.goldMain};
  text-transform: uppercase;
  letter-spacing: clamp(1.4px, 0.3vw, 4px);
  font-size: clamp(0.68rem, 0.9vw, 0.75rem);
  margin-bottom: 10px;
`,Xo=ga.div`
  width: 50px;
  height: 1px;
  background: ${xa.goldMain};
  transition: width 0.4s ease;
`,Zo=ga.div`
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
`;const es=function(e){let{children:t,type:n,url:r,isLink:a}=e;return(0,ja.jsx)(Zo,{as:"link"===n?"a":"div",href:"link"===n?r:void 0,target:"link"===n?"_blank":void 0,isLink:a,children:t})},ts=ga.div`
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
`,ns=ga.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  filter: brightness(0.88) saturate(0.9);
  transition:
    filter 0.45s ease,
    transform 0.45s ease;
`;const rs=function(e){let{image:t,title:n}=e;return(0,ja.jsx)(ts,{children:(0,ja.jsx)(ns,{src:t,alt:n})})},as=ga.div`
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
`;const is=function(e){let{icon:t}=e;return(0,ja.jsx)(as,{children:(0,ja.jsx)(t,{})})},os=ga.h3`
  color: ${xa.goldHover};
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
`,ss=ga.p`
  color: rgba(255, 245, 220, 0.78);
  font-size: clamp(0.68rem, 2.2vw, 0.82rem);
  text-align: center;
  line-height: 1.5;
  margin: 0 clamp(8px, 2vw, 20px);
  max-width: 240px;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;const ls=function(e){let{title:t,description:n}=e;return(0,ja.jsxs)(ja.Fragment,{children:[(0,ja.jsx)(os,{children:t}),n&&(0,ja.jsx)(ss,{children:n})]})},cs=ga.div`
  width: 44px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${xa.goldMain} 50%,
    transparent 100%
  );
  margin-top: 14px;
  opacity: 0.65;
  flex-shrink: 0;
`;const us=function(){return(0,ja.jsx)(cs,{})};const ds=function(e){let{project:t}=e;const{type:n,url:r,title:a,description:i,image:o,icon:s}=t;return(0,ja.jsxs)(es,{type:n,url:r,isLink:"link"===n,children:[(0,ja.jsx)(rs,{image:o,title:a}),(0,ja.jsx)(is,{icon:s}),(0,ja.jsx)(ls,{title:a,description:i}),(0,ja.jsx)(us,{})]})},ps=[{id:1,type:"link",url:"https://google.com",title:"Boutique E-commerce",description:"W pe\u0142ni dzia\u0142aj\u0105cy sklep internetowy premium.",image:Oo,icon:pi},{id:2,type:"example",title:"Studio Architektury",image:No,icon:function(e){return ai({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}},{id:3,type:"example",title:"Portfolio Fotografa",image:Do,icon:function(e){return ai({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(e)}},{id:4,type:"link",url:"https://moja-inna-strona.pl",title:"Dashboard Finansowy",image:$o,icon:function(e){return ai({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}},{id:5,type:"example",title:"Projekt Specjalny",image:Oo,icon:pi},{id:6,type:"example",title:"Projekt Specjalny 2",image:No,icon:pi}],hs={title:"Przyk\u0142adowe Prace",subtitle:"Ekskluzywne projekty cyfrowe, kt\xf3re\ndefiniuj\u0105 now\u0105 jako\u015b\u0107 bran\u017cy"},fs="Zobacz Pe\u0142ne Portfolio";const ms=function(){const e=(0,r.useRef)(null),t=(0,r.useRef)(!1),n=n=>{const r=e.current;if(!r||t.current)return;const a=r.firstElementChild;if(!a)return;const i=parseFloat(getComputedStyle(r).gap)||16,o=a.offsetWidth+i,s=r.scrollWidth-r.clientWidth;t.current=!0,n>0&&r.scrollLeft>=s-2?r.scrollTo({left:0,behavior:"smooth"}):n<0&&r.scrollLeft<=2?r.scrollTo({left:s,behavior:"smooth"}):r.scrollBy({left:n*o,behavior:"smooth"}),setTimeout(()=>{t.current=!1},580)};return(0,ja.jsxs)(Bo,{children:[(0,ja.jsxs)(Ho,{children:[(0,ja.jsx)(Wo,{children:hs.title}),(0,ja.jsx)(Vo,{children:hs.subtitle})]}),(0,ja.jsxs)(Ko,{children:[(0,ja.jsx)(Yo,{onClick:()=>n(-1),"aria-label":"Poprzedni projekt",children:(0,ja.jsx)(gi,{})}),(0,ja.jsx)(Go,{ref:e,children:ps.map(e=>(0,ja.jsx)(qo,{children:(0,ja.jsx)(ds,{project:e})},e.id))}),(0,ja.jsx)(Yo,{onClick:()=>n(1),"aria-label":"Nast\u0119pny projekt",children:(0,ja.jsx)(mi,{})})]}),(0,ja.jsxs)(Qo,{children:[(0,ja.jsx)(Jo,{children:fs}),(0,ja.jsx)(Xo,{})]})]})},gs=ga.section`
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
`,ws=ga.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,ys=ga.h2`
  color: ${xa.goldHover};
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
`,bs=ga.p`
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
`,xs=ga.div`
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

  @media (max-width: ${ba.tablet}px) {
  }

  @media (max-width: 540px) {
  }

  @media (max-width: ${ba.smallPhone}px) {
  }
`,vs=ga.a`
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

  @media (max-width: ${ba.tablet}px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(100% - clamp(6px, 0.8vw, 10px));
  }

  @media (max-width: ${ba.smallPhone}px) {
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
`,ks=ga.img`
  width: 100%;
  height: clamp(140px, 20vw, 200px);
  object-fit: cover;
  display: block;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 0;
`,zs=ga.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: clamp(14px, 2vw, 20px);
  position: relative;
  z-index: 2;
  overflow: visible;
  min-height: 0;
`,js=ga.h3`
  color: ${xa.goldHover};
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

  @media (max-width: ${ba.tablet}px) {
    -webkit-line-clamp: 2;
  }
`,Ss=ga.p`
  color: rgba(241, 213, 146, 0.8);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: clamp(0.8rem, 0.95vw, 0.9rem);
  line-height: 1.5;
  margin: 0 0 auto 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${ba.tablet}px) {
    display: none;
  }
`,Es=ga.span`
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
`,_s=ga.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(280px, 38vw, 420px);
  margin-top: 0;
`,Cs=ga.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${xa.goldMain};
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
`,Ps=[{id:"proces-48h",title:"Jak oddajemy gotowy projekt w 48h roboczych? Poznaj nasz proces.",excerpt:"48 godzin roboczych \u2013 tyle potrzebujemy, by Twoja wizja sta\u0142a si\u0119 rzeczywisto\u015bci\u0105. Jak to robimy bez straty na jako\u015bci? Zaufanie, przygotowanie i pe\u0142ne skupienie.",date:"30 marca 2026",image:n(682)},{id:"unikalne-grafiki-ai",title:"Nowo\u015b\u0107: Unikalne grafiki AI w cenie ka\u017cdej strony",excerpt:"Koniec z nudnymi zdj\u0119ciami z darmowych bank\xf3w, kt\xf3re ma ka\u017cda konkurentka. Od teraz tworzymy dla Ciebie klimat premium za pomoc\u0105 Sztucznej Inteligencji \u2013 bez dodatkowych koszt\xf3w.",date:"25 marca 2026",image:n(430)},{id:"czysty-kod-react",title:"Dlaczego React wygrywa z WordPressem w 2026 roku?",excerpt:"Wielu klient\xf3w pyta nas: 'Dlaczego nie WordPress?'. Odpowied\u017a jest prosta: szybko\u015b\u0107, bezpiecze\u0144stwo i kontrola. Przeczytaj, dlaczego rezygnacja z ci\u0119\u017ckich wtyczek na rzecz czystego kodu to najlepsza inwestycja w przysz\u0142o\u015b\u0107 Twojej marki.",date:"20 marca 2026",image:n(410)},{id:"startujemy-z-aktualnosciami",title:"Startujemy z Aktualno\u015bciami \u2013 Sekcja tworzona na pro\u015bb\u0119 klient\xf3w",excerpt:"Po miesi\u0105cach obserwacji trendu w bran\u017cy i s\u0142uchaj\u0105c feedbacku naszych klient\xf3w, postanowili\u015bmy uruchomi\u0107 oficjaln\u0105 sekcj\u0119 Aktualno\u015bci. Dowiedz si\u0119, dlaczego to dla nas milestone, a dla Ciebie okazja do bycia na bie\u017c\u0105co.",date:"30 stycznia 2026",image:n(217)}];const Ts=function(){const e=he(),t=(0,r.useRef)(null),n=(0,r.useRef)(!1),a=e=>{const r=t.current;if(!r||n.current)return;const a=r.firstElementChild;if(!a)return;const i=parseFloat(getComputedStyle(r).gap)||16,o=a.offsetWidth+i,s=r.scrollWidth-r.clientWidth;n.current=!0,e>0&&r.scrollLeft>=s-2?r.scrollTo({left:0,behavior:"smooth"}):e<0&&r.scrollLeft<=2?r.scrollTo({left:s,behavior:"smooth"}):r.scrollBy({left:e*o,behavior:"smooth"}),setTimeout(()=>{n.current=!1},580)};return(0,ja.jsxs)(gs,{children:[(0,ja.jsxs)(ws,{children:[(0,ja.jsx)(ys,{children:"Aktualno\u015bci"}),(0,ja.jsx)(bs,{children:"B\u0105d\u017a na bie\u017c\u0105co z najnowszymi wiadomo\u015bciami ze \u015bwiata"})]}),(0,ja.jsxs)(_s,{children:[(0,ja.jsx)(Cs,{onClick:()=>a(-1),"aria-label":"Poprzedni artyku\u0142",children:(0,ja.jsx)(gi,{})}),(0,ja.jsx)(xs,{ref:t,children:Ps.map(t=>(0,ja.jsxs)(vs,{onClick:()=>e(`/blog/${t.id}`),style:{cursor:"pointer"},children:[(0,ja.jsx)(ks,{src:t.image,alt:t.title}),(0,ja.jsxs)(zs,{children:[(0,ja.jsx)(js,{children:t.title}),(0,ja.jsx)(Ss,{children:t.excerpt}),(0,ja.jsx)(Es,{children:t.date})]})]},t.id))}),(0,ja.jsx)(Cs,{onClick:()=>a(1),"aria-label":"Nast\u0119pny artyku\u0142",children:(0,ja.jsx)(mi,{})})]})]})},Is=ga.section`
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
`,As=ga.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,Rs=ga.h2`
  color: ${xa.goldHover};
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
`,Os=ga.p`
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
`,Ns=ga.div`
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

  @media (max-width: ${ba.tablet}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`,Ds=ga.div`
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
`,$s=ga.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  margin: 0;
  padding: 0;
`,Ls=ga.h3`
  color: ${xa.goldHover};
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
`,Ms=ga.p`
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
`,Fs=ga.span`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${e=>e.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${xa.goldHover};
  font-size: clamp(0.9rem, 1.1vw, 1.2rem);
  margin-left: auto;
  flex-shrink: 0;
`,Us=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych."},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."},{id:4,question:"Czy za realizacj\u0119 projektu otrzymam faktur\u0119?",answer:"Tak. Za ka\u017cd\u0105 us\u0142ug\u0119 wystawiamy faktur\u0119 (bez VAT), kt\xf3r\u0105 otrzymasz na e-mail. Mo\u017cesz j\u0105 w ca\u0142o\u015bci wliczy\u0107 w koszty uzyskania przychodu \u2013 to najprostsze i najbezpieczniejsze rozwi\u0105zanie dla Twojego biznesu. Nie musisz martwi\u0107 si\u0119 o \u017cadne dodatkowe formalno\u015bci, a my zapewniamy Ci pe\u0142n\u0105 transparentno\u015b\u0107 i profesjonalizm w rozliczeniach."},{id:5,question:"Czemu na Allegro ceny us\u0142ug s\u0105 wy\u017csze?",answer:"Wy\u017csza cena na platformie Allegro wynika wy\u0142\u0105cznie z wysokich prowizji i op\u0142at transakcyjnych pobieranych przez operatora. Kontaktuj\u0105c si\u0119 z nami bezpo\u015brednio, omijasz te dodatkowe koszty i otrzymujesz najlepsz\u0105 mo\u017cliw\u0105 ofert\u0119 przy zachowaniu tej samej jako\u015bci i gwarancji. "},{id:6,question:"Co je\u015bli nie mam w\u0142asnych profesjonalnych zdj\u0119\u0107 lub tekst\xf3w?",answer:"Bez obaw, zajmiemy si\u0119 tym. Je\u015bli brakuje Ci fotografii, wygenerujemy dla Twojej marki unikalne grafiki AI, kt\xf3re idealnie oddadz\u0105 klimat Twojego biznesu. Pomo\u017cemy Ci te\u017c ubra\u0107 Twoje pomys\u0142y w profesjonalne s\u0142owa, aby strona od pocz\u0105tku budowa\u0142a Twoje zaufanie. "},{id:7,question:"Czy to autorskie projekty, czy gotowce z sieci?",answer:"Ka\u017cdy element naszej kolekcji stworzyli\u015bmy sami \u2013 od pierwszej linii kodu po ostatni detal wizualny. Nie u\u017cywamy WordPressa ani ci\u0119\u017ckich, powolnych kreator\xf3w stron. Wybieraj\u0105c nas, otrzymujesz unikalny produkt w technologii React.js, a nie masowy szablon, kt\xf3ry posiada co druga firma w Twojej bran\u017cy."},{id:8,question:"Czy b\u0119d\u0119 mie\u0107 pe\u0142n\u0105 kontrol\u0119 i dost\u0119p do strony?",answer:"Jak najbardziej. Przekazujemy Ci komplet hase\u0142 i dost\u0119p\xf3w do Twoich w\u0142asnych kont. Nasz kod jest czysty i uporz\u0105dkowany \u2013 je\u015bli kiedykolwiek zdecydujesz si\u0119 przekaza\u0107 stron\u0119 innemu informatykowi, odnajdzie si\u0119 on w strukturze bez problemu. Jeste\u015b w 100% niezale\u017cna."},{id:9,question:"Jak strona radzi sobie w wyszukiwarce Google (SEO)?",answer:'Wi\u0119kszo\u015b\u0107 stron to ci\u0119\u017ckie projekty na WordPressie, kt\xf3re przez nadmiar zb\u0119dnych wtyczek l\u0105duj\u0105 na ko\u0144cu wynik\xf3w. Nasze strony budujemy "na lekko", co sprawia, \u017ce s\u0105 b\u0142yskawiczne i faworyzowane przez Google. To fundament, kt\xf3ry pozwala realnie powalczy\u0107 o najwy\u017csze pozycje.'},{id:10,question:"Czy strona b\u0119dzie bezpieczna (certyfikat SSL)?",answer:'Tak. Obok adresu Twojej strony zawsze b\u0119dzie widoczna "zielona k\u0142\xf3dka". Certyfikat SSL masz w cenie, co gwarantuje szyfrowanie danych i brak ostrze\u017ce\u0144 w przegl\u0105darkach. Twoja witryna b\u0119dzie w pe\u0142ni bezpieczna dla odwiedzaj\u0105cych.'},{id:11,question:"Jak nawi\u0105za\u0107 z nami wsp\xf3\u0142prac\u0119?",answer:"Masz dwie proste drogi. Mo\u017cesz dokona\u0107 zakupu bezpo\u015brednio przez nasz profil na Allegro lub napisa\u0107 do nas wiadomo\u015b\u0107 e-mail. W odpowiedzi otrzymasz od nas kr\xf3tk\u0105 instrukcj\u0119 i ankiet\u0119, kt\xf3ra pomo\u017ce nam doprecyzowa\u0107 wygl\u0105d Twojej nowej strony. Wi\u0119cej szczeg\xf3\u0142\xf3w na temat ca\u0142ego procesu znajdziesz na naszej podstronie",cooperationLink:!0},{id:12,question:"Co je\u015bli nie mam gotowych tre\u015bci i nie wiem, co napisa\u0107?",answer:"To najcz\u0119stsza obawa, dlatego maksymalnie upro\u015bcili\u015bmy ten proces. Nie musisz by\u0107 pisarzem ani fotografem. Po zakupie otrzymasz od nas prost\u0105, interaktywn\u0105 ankiet\u0119, kt\xf3ra 'wyci\u0105gnie' od Ciebie najwa\u017cniejsze informacje o Twoim biznesie. Na ich podstawie przygotujemy profesjonalne teksty, a je\u015bli brakuje Ci zdj\u0119\u0107 \u2013 wygenerujemy dla Twojej marki unikalne grafiki AI. Nasza strona jest elastyczna: je\u015bli nie masz jeszcze cennika czy zespo\u0142u, po prostu ukryjemy te sekcje, a ca\u0142o\u015b\u0107 nadal b\u0119dzie wygl\u0105da\u0107 luksusowo i sp\xf3jnie. Wi\u0119cej informacji znajdziesz w sekcji",cooperationLink:!0}];const Bs=function(){const[e,t]=(0,r.useState)(null);return(0,ja.jsxs)(Is,{children:[(0,ja.jsxs)(As,{children:[(0,ja.jsx)(Rs,{children:"Najcz\u0119\u015bciej Zadawane Pytania"}),(0,ja.jsx)(Os,{children:"Szybkie odpowiedzi na Twoje najbardziej pal\u0105ce w\u0105tpliwo\u015bci"})]}),(0,ja.jsx)(Ns,{children:Us.slice(0,4).map(n=>(0,ja.jsxs)(Ds,{onClick:()=>{return r=n.id,void t(e===r?null:r);var r},children:[(0,ja.jsxs)($s,{children:[(0,ja.jsx)(Ls,{children:n.question}),(0,ja.jsx)(Ms,{isOpen:e===n.id,children:n.answer})]}),(0,ja.jsx)(Fs,{isOpen:e===n.id,children:"\u25bc"})]},n.id))})]})},Hs=ga.section`
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
`,Ws=ga.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,Vs=ga.h2`
  color: ${xa.goldHover};
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
`,Ks=ga.p`
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
`,Gs=ga.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(200px, 26vw, 280px);
  margin-top: 0;
`,qs=ga.div`
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
`,Ys=ga.div`
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
`,Qs=ga.div`
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
`,Js=ga.div`
  display: flex;
  gap: 3px;
  margin-bottom: clamp(8px, 1vw, 12px);
  font-size: clamp(12px, 1.2vw, 14px);
`,Xs=ga.span`
  color: #ffd700;
`,Zs=ga.p`
  font-size: clamp(12px, 1.3vw, 14px);
  line-height: 1.5;
  color: ${xa.testimonialText};
  margin-bottom: clamp(10px, 1.2vw, 15px);
  font-style: normal;
  margin: 0 0 clamp(10px, 1.2vw, 15px) 0;
  font-weight: 500;

  @media (max-width: ${ba.tablet-1}px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
  }

  @media (min-width: ${ba.tablet}px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    overflow: hidden;
  }
`,el=ga.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: auto;
  flex-shrink: 0;
`,tl=ga.strong`
  font-size: clamp(12px, 1.2vw, 14px);
  color: ${xa.white};
  font-weight: 600;

  @media (max-width: ${ba.tablet-1}px) {
    font-size: clamp(10px, 0.9vw, 12px);
  }
`,nl=ga.span`
  font-size: clamp(10px, 1vw, 12px);
  color: ${xa.testimonialSubtext};

  @media (max-width: ${ba.tablet-1}px) {
    font-size: clamp(8px, 0.8vw, 10px);
  }
`,rl=ga.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${xa.goldMain};
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
`,al=ga.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`,il=ga.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  border: 1px solid ${xa.testimonialAccentBorder};
  border-radius: 8px;
  color: ${xa.testimonialAccent};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${xa.testimonialAccentLight};
    border-color: ${xa.testimonialAccent};
    color: ${xa.white};
  }
`,ol=[{id:1,name:"Magdalena",company:"Salon Kosmetologii Estetycznej",text:"Nareszcie moja strona wygl\u0105da tak luksusowo, jak moje us\u0142ugi. Grafiki s\u0105 ob\u0142\u0119dne \u2013 nikt w mojej bran\u017cy nie ma nic podobnego. Najbardziej zaskoczy\u0142o mnie to, \u017ce wszystko by\u0142o gotowe w dwa dni.",rating:5},{id:2,name:"Tomasz",company:"Doradztwo Biznesowe",text:"Moja poprzednia strona wiecznie si\u0119 zacina\u0142a. Ta od Klary Queen dzia\u0142a b\u0142yskawicznie, nawet na telefonie. Klienci od razu zauwa\u017cyli zmian\u0119. Pe\u0142en profesjonalizm i zero lania wody.",rating:5},{id:3,name:"Agnieszka",company:"Biuro Architektoniczne",text:"Zale\u017ca\u0142o mi na estetyce, kt\xf3ra odda jako\u015b\u0107 moich projekt\xf3w. Studio zrozumia\u0142o moj\u0105 wizj\u0119 w punkt. Strona jest elegancka, czysta i bardzo nowoczesna. \u015awietny kontakt na ka\u017cdym etapie.",rating:5},{id:4,name:"Piotr",company:"Agencja Eventowa Premium",text:"Szybko\u015b\u0107 realizacji w tym studiu to jaki\u015b kosmos. Podczas gdy inni dopiero przygotowywali oferty, tutaj strona ju\u017c by\u0142a gotowa do publikacji. Wszystko dzia\u0142a idealnie, bez \u017cadnych b\u0142\u0119d\xf3w.",rating:5},{id:5,name:"Katarzyna",company:"Coaching & Mentoring",text:"By\u0142am sceptyczna, czy w 48h da si\u0119 zrobi\u0107 co\u015b porz\u0105dnego. Myli\u0142am si\u0119. Strona jest pi\u0119kna, unikalna i co najwa\u017cniejsze \u2013 klienci zacz\u0119li pisa\u0107 do mnie sami. To by\u0142a \u015bwietna inwestycja.",rating:5},{id:6,name:"Robert",company:"Firma Logistyczna",text:"Konkretnie i na temat. Dosta\u0142em nowoczesne narz\u0119dzie, kt\xf3re buduje presti\u017c mojej firmy. Nie musz\u0119 si\u0119 martwi\u0107 o \u017cadne wirusy czy b\u0142\u0119dy \u2013 wszystko po prostu dzia\u0142a jak nale\u017cy.",rating:5},{id:7,name:"Joanna",company:"Kancelaria Prawna",text:"Bardzo merytoryczne podej\u015bcie. Strona jest minimalistyczna, ale bije od niej profesjonalizm. Du\u017cy plus za cierpliwo\u015b\u0107 przy dobieraniu grafik \u2013 efekt ko\u0144cowy jest idealny.",rating:5},{id:8,name:"Marek",company:"Studio Treningu Personalnego",text:"Wi\u0119kszo\u015b\u0107 stron w mojej bran\u017cy wygl\u0105da tak samo. Moja od razu si\u0119 wyr\xf3\u017cnia dzi\u0119ki tym grafikom. Jest dynamiczna, szybka i po prostu chce si\u0119 na niej zosta\u0107 d\u0142u\u017cej.",rating:5},{id:9,name:"Ewa",company:"Projektantka Wn\u0119trz",text:"Ceni\u0119 sobie estetyk\u0119, a Studio Klara Queen dostarczy\u0142o mi projekt, kt\xf3ry jest po prostu pi\u0119kny. Wszystko dopi\u0119te na ostatni guzik w ekspresowym tempie. Polecam ka\u017cdemu.",rating:5},{id:10,name:"\u0141ukasz",company:"Sklep Internetowy (Nisza Premium)",text:"Przej\u015bcie na now\u0105 stron\u0119 to by\u0142a ulga. Wszystko \u0142aduje si\u0119 w u\u0142amku sekundy, a proces zakupowy jest p\u0142ynny. Wida\u0107, \u017ce zesp\xf3\u0142 zna si\u0119 na rzeczy i nie idzie na \u0142atwizn\u0119.",rating:5},{id:11,name:"Karolina",company:"Fotografia \u015alubna",text:"Jako fotograf zwracam uwag\u0119 na ka\u017cdy piksel. Jestem pod ogromnym wra\u017ceniem, jak dobrze dobrano opraw\u0119 wizualn\u0105. Strona jest lekka, szybka i bardzo stylowa.",rating:5},{id:12,name:"Andrzej",company:"Us\u0142ugi Finansowe",text:"Szuka\u0142em solidnego partnera i nie zawiod\u0142em si\u0119. Strona jest bezpieczna, wygl\u0105da nowocze\u015bnie i buduje zaufanie od pierwszej sekundy. \u017badnych problem\xf3w z terminami.",rating:5},{id:13,name:"Natalia",company:"Klinika Stomatologiczna",text:"Zale\u017ca\u0142o nam na nowoczesnym wizerunku. Strona, kt\xf3r\u0105 otrzymali\u015bmy, jest przejrzysta i bardzo intuicyjna dla pacjent\xf3w. Proces wdro\u017cenia trwa\u0142 niesamowicie kr\xf3tko.",rating:5},{id:14,name:"Micha\u0142",company:"Produkcja Mebli na Wymiar",text:"Konkretny kontakt i szybka realizacja. Strona \u015bwietnie eksponuje nasze realizacje. Podoba mi si\u0119, \u017ce nie musz\u0119 traci\u0107 czasu na techniczne detale \u2013 studio zaj\u0119\u0142o si\u0119 wszystkim.",rating:5},{id:15,name:"Daria",company:"Marka Odzie\u017cowa",text:"Moja marka w ko\u0144cu zyska\u0142a opraw\u0119, na jak\u0105 zas\u0142ugiwa\u0142a. Grafiki s\u0105 unikalne, a strona dzia\u0142a bez zarzutu. Ca\u0142o\u015b\u0107 wygl\u0105da bardzo presti\u017cowo i nowocze\u015bnie.",rating:5}];const sl=function(){const e=(0,r.useRef)(null),t=(0,r.useRef)(!1),n=n=>{const r=e.current;if(!r||t.current)return;const a=r.firstElementChild;if(!a)return;const i=parseFloat(getComputedStyle(r).gap)||16,o=a.offsetWidth+i,s=r.scrollWidth-r.clientWidth;t.current=!0,n>0&&r.scrollLeft>=s-2?r.scrollTo({left:0,behavior:"smooth"}):n<0&&r.scrollLeft<=2?r.scrollTo({left:s,behavior:"smooth"}):r.scrollBy({left:n*o,behavior:"smooth"}),setTimeout(()=>{t.current=!1},580)};return(0,ja.jsxs)(Hs,{children:[(0,ja.jsxs)(Ws,{children:[(0,ja.jsx)(Vs,{children:"Opinie Naszych Klient\xf3w"}),(0,ja.jsx)(Ks,{children:"To m\xf3wi\u0105 o nas ci, kt\xf3rzy nam zaufali"})]}),(0,ja.jsxs)(Gs,{children:[(0,ja.jsx)(rl,{onClick:()=>n(-1),"aria-label":"Poprzednia opinia",children:(0,ja.jsx)(gi,{})}),(0,ja.jsx)(qs,{ref:e,children:ol.map(e=>(0,ja.jsx)(Ys,{children:(0,ja.jsxs)(Qs,{children:[(0,ja.jsx)(Js,{children:[...Array(e.rating)].map((e,t)=>(0,ja.jsx)(Xs,{children:"\u2605"},t))}),(0,ja.jsxs)(Zs,{children:['"',e.text,'"']}),(0,ja.jsxs)(el,{children:[(0,ja.jsx)(tl,{children:e.name}),(0,ja.jsx)(nl,{children:e.company})]})]})},e.id))}),(0,ja.jsx)(rl,{onClick:()=>n(1),"aria-label":"Nast\u0119pna opinia",children:(0,ja.jsx)(mi,{})})]}),(0,ja.jsx)(al,{children:(0,ja.jsx)(il,{href:"/testimonials",children:"Przeczytaj wszystkie opinie \u2192"})})]})};const ll=function(){return(0,ja.jsxs)(ja.Fragment,{children:[(0,ja.jsx)(fo,{children:(0,ja.jsxs)(mo,{children:[(0,ja.jsx)(go,{children:(0,ja.jsx)(To,{})}),(0,ja.jsx)(wo,{children:(0,ja.jsx)(Uo,{})})]})}),(0,ja.jsx)(ms,{}),(0,ja.jsx)(Ts,{}),(0,ja.jsx)(Bs,{}),(0,ja.jsx)(sl,{})]})},cl=ga.div`
  position: relative;
  z-index: 5;
`,ul=ga.section`
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
`,dl=ga.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
`,pl=ga.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${xa.goldMain} 50%,
    transparent 100%
  );
  opacity: 0.25;
  margin: clamp(15px, 2vw, 25px) auto;
  max-width: 200px;
`,hl=ga.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: clamp(30px, 4vw, 50px);
  color: ${xa.goldMain};
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
      ${xa.goldMain} 20%,
      ${xa.goldMain} 80%,
      transparent 100%
    );
  }
`,fl=ga.section`
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
      ${xa.goldMain},
      transparent
    );
  }
`,ml=ga.h1`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 700;
  color: ${xa.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: clamp(1px, 0.5vw, 3px);
  margin: clamp(35px, 5vw, 50px) 0 clamp(25px, 4vw, 35px);
  text-transform: uppercase;
`,gl=ga.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: rgba(255, 255, 255, 0.82);
  line-height: clamp(1.6, 3vw, 1.9);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
  font-family: "Manrope", sans-serif;
`,wl="Wymiar Luksusowej Doskona\u0142o\u015bci",yl="Gdzie wizja spotyka precyzj\u0119. Tworzymy cyfrowe eksperyencje, kt\xf3re wyznaczaj\u0105 standardy bran\u017cy.",bl={title:"Twoja Kolekcja",paragraphs:[". Stworzyli\u015bmy ekosystem wzorc\xf3w, kt\xf3re wyznaczaj\u0105 standardy - sprawdzone, doskonale zaprojektowane i gotowe do Twojej marki.","Ty wybierasz fundament z naszej autorskiej kolekcji, my dostosowujemy go do Twojej to\u017csamo\u015bci. Rezultat? Estetyka bez kompromis\xf3w i natychmiastowy autorytet w Twojej bran\u017cy.","Ka\u017cdy szablon to efekt setki godzin testowania, niezliczonych iteracji i wiedzy zdobytej pracuj\u0105c z luksusowymi markami na ca\u0142ym \u015bwiecie."],signature:"Autorska Kolekcja \xb7 Sprawdzone Struktury \xb7 Estetyka Bez Kompromis\xf3w"},xl=[{id:1,label:"Selekcja",value:"1",description:"Autorskie szablony zaprojektowane pod luksusowe marki."},{id:2,label:"Szybko\u015b\u0107",value:"2",description:"Twoja obecno\u015b\u0107 online w 2-4 dni robocze."},{id:3,label:"Sp\xf3jno\u015b\u0107",value:"3",description:"Gwarancja doskona\u0142ego wygl\u0105du na ka\u017cdym urz\u0105dzeniu."}],vl=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych. "},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."}],kl={title:"Gdzie nas znajdziesz?",description:"Nasze projekty dost\u0119pne na najpopularniejszych platformach. Allegro oferuje nas za nieco wy\u017csz\u0105 cen\u0119 ze wzgl\u0119du na ich prowizj\u0119. ",platforms:[{id:1,name:"Facebook",description:"Obserwuj nas na Facebooku, aby by\u0107 zawsze na bie\u017c\u0105co."},{id:2,name:"YouTube",description:"Odkrywaj nasze projekty i inspiracje na YouTube."},{id:3,name:"Allegro",description:"Kupuj nasze szablony w sklepie Allegro (ceny wy\u017csze ze wzgl\u0119du na prowizj\u0119)."}]},zl="Twoja Kolekcja",jl="Nasze Atuty",Sl="Jak To Dzia\u0142a?",El="Got\xf3w na transformacj\u0119 cyfrow\u0105?",_l=()=>(0,ja.jsxs)(fl,{children:[(0,ja.jsx)(ml,{children:wl}),(0,ja.jsx)(gl,{children:yl})]}),Cl=ga.div`
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
`,Pl=ga.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: clamp(1.7, 4vw, 2.1);
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
  position: relative;
`,Tl=ga.div`
  color: ${xa.goldMain};
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
`,Il=()=>(0,ja.jsxs)(Cl,{children:[bl.paragraphs.map((e,t)=>(0,ja.jsx)(Pl,{children:e},t)),(0,ja.jsx)(Tl,{children:bl.signature})]}),Al=ga.div`
  border-left: 2px solid ${xa.goldMain};
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
      ${xa.goldMain} 0%,
      transparent 100%
    );
  }
`,Rl=ga.div`
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
`,Ol=ga.h4`
  color: ${xa.goldMain};
  margin-bottom: clamp(12px, 2vw, 15px);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  margin-top: 0;
`,Nl=ga.p`
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.85);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
`,Dl=ga.div`
  width: 100%;
`,$l=ga.button`
  margin-top: clamp(40px, 6vw, 60px);
  padding: clamp(12px, 2vw, 16px) clamp(30px, 4vw, 50px);
  background: linear-gradient(
    135deg,
    ${xa.goldMain} 0%,
    #f1d592 100%
  );
  color: ${xa.deepBlack};
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
`,Ll=()=>{const e=he();return(0,ja.jsxs)(Dl,{children:[(0,ja.jsx)(Al,{children:vl.map(e=>(0,ja.jsxs)(Rl,{children:[(0,ja.jsx)(Ol,{children:e.question}),(0,ja.jsx)(Nl,{children:e.answer})]},e.id))}),(0,ja.jsx)($l,{onClick:()=>e("/questions"),children:"Zobacz Wi\u0119cej Pyta\u0144"})]})},Ml=ga.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(30px, 5vw, 50px);
  margin-top: clamp(60px, 8vw, 80px);
  width: 100%;

  @media (max-width: ${ba.tablet}px) {
    grid-template-columns: 1fr;
  }
`,Fl=ga.div`
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
    border-color: ${xa.goldMain};
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
`,Ul=ga.span`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: bold;
  color: ${xa.goldMain};
  opacity: 0.95;
  font-family: "Cormorant Garamond", serif;
  line-height: 1;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,Bl=ga.span`
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  text-transform: uppercase;
  letter-spacing: clamp(1.5px, 0.5vw, 2.5px);
  color: ${xa.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  opacity: 0.9;
`,Hl=ga.p`
  font-size: clamp(0.85rem, 1.8vw, 0.98rem);
  line-height: clamp(1.6, 3vw, 1.8);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
`,Wl=()=>(0,ja.jsx)(Ml,{children:xl.map(e=>(0,ja.jsxs)(Fl,{children:[(0,ja.jsx)(Ul,{children:e.value}),(0,ja.jsx)(Bl,{children:e.label}),(0,ja.jsx)(Hl,{children:e.description})]},e.id))}),Vl=ga.section`
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
`,Kl=ga.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: clamp(30px, 4vw, 50px);
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
`,Gl=(ga.button`
  padding: clamp(14px, 2.5vw, 18px) clamp(35px, 5vw, 60px);
  background: linear-gradient(
    135deg,
    ${xa.goldMain} 0%,
    #f1d592 100%
  );
  color: ${xa.deepBlack};
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
`,()=>(0,ja.jsx)(Vl,{children:(0,ja.jsx)(Kl,{children:El})})),ql=ga.section`
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
`,Yl=ga.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: clamp(30px, 4vw, 50px);
  color: ${xa.goldMain};
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
      ${xa.goldMain} 20%,
      ${xa.goldMain} 80%,
      transparent 100%
    );
  }
`,Ql=ga.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: clamp(40px, 6vw, 60px);
  max-width: 600px;
  line-height: clamp(1.6, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
`,Jl=ga.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(25px, 4vw, 40px);
  width: 100%;
  margin-top: clamp(20px, 3vw, 30px);

  @media (max-width: ${ba.tablet}px) {
    grid-template-columns: 1fr;
  }
`,Xl=ga.a`
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
    border-color: ${xa.goldMain};
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
`,Zl=ga.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${xa.goldMain};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;

  ${Xl}:hover & {
    transform: scale(1.15) rotate(5deg);
  }
`,ec=ga.h3`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  color: ${xa.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
`,tc=ga.p`
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  line-height: clamp(1.5, 2.5vw, 1.7);
  font-weight: 400;
`,nc=()=>(0,ja.jsxs)(ql,{children:[(0,ja.jsx)(Yl,{children:kl.title}),(0,ja.jsx)(Ql,{children:kl.description}),(0,ja.jsx)(Jl,{children:kl.platforms.map(e=>{const t=yi.find(t=>t.label===e.name);return(0,ja.jsxs)(Xl,{href:null===t||void 0===t?void 0:t.url,target:"_blank",rel:"noopener noreferrer",children:[(0,ja.jsx)(Zl,{children:t&&(0,ja.jsx)(t.icon,{})}),(0,ja.jsx)(ec,{children:e.name}),(0,ja.jsx)(tc,{children:e.description})]},e.id)})})]}),rc=()=>(0,ja.jsxs)(cl,{children:[(0,ja.jsx)(_l,{}),(0,ja.jsx)(pl,{}),(0,ja.jsxs)(ul,{children:[(0,ja.jsx)(hl,{children:zl}),(0,ja.jsx)(dl,{children:(0,ja.jsx)(Il,{})})]}),(0,ja.jsx)(pl,{}),(0,ja.jsxs)(ul,{children:[(0,ja.jsx)(hl,{children:jl}),(0,ja.jsx)(dl,{style:{maxWidth:"1000px"},children:(0,ja.jsx)(Wl,{})})]}),(0,ja.jsx)(pl,{}),(0,ja.jsxs)(ul,{children:[(0,ja.jsx)(hl,{children:Sl}),(0,ja.jsx)(dl,{children:(0,ja.jsx)(Ll,{})})]}),(0,ja.jsx)(pl,{}),(0,ja.jsx)(nc,{}),(0,ja.jsx)(pl,{}),(0,ja.jsx)(Gl,{})]}),ac=ga.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);
  box-sizing: border-box;

  @media (max-width: ${ba.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`,ic=ga.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`,oc=ga.div`
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
`,sc=ga.h1`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-family: "Cormorant Garamond", serif;
  color: ${xa.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(0.5px, 0.5vw, 1px);
`,lc=ga.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.6;

  @media (max-width: ${ba.tablet}px) {
    display: none;
  }
`,cc=ga.div`
  border-left: 2px solid ${xa.goldMain};
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
      ${xa.goldMain} 0%,
      transparent 100%
    );
  }
`,uc=ga.div`
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
`,dc=ga.h3`
  color: ${xa.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  line-height: 1.4;
`,pc=ga.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
  transition: color 0.3s ease;

  ${uc}:hover & {
    color: rgba(255, 255, 255, 0.95);
  }
`,hc=ga.div`
  margin-top: clamp(60px, 10vw, 100px);
  text-align: center;
  padding-top: clamp(40px, 6vw, 60px);
  border-top: 1px solid rgba(212, 175, 55, 0.2);
`,fc=ga.button`
  padding: clamp(12px, 2vw, 16px) clamp(30px, 4vw, 50px);
  background: linear-gradient(
    135deg,
    ${xa.goldMain} 0%,
    #f1d592 100%
  );
  color: ${xa.deepBlack};
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
`,mc=ga.button`
  background: transparent;
  border: none;
  color: ${xa.goldMain};
  cursor: pointer;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: inherit;
  padding: 0;
  margin: 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${xa.goldHover};
  }
`,gc={title:"Najcz\u0119stsze Pytania",subtitle:"Masz w\u0105tpliwo\u015bci? Znajd\u017a odpowied\u017a na pytania, kt\xf3re zadaj\u0105 nam nasi klienci"},wc={backLabel:"Powr\xf3t do strony g\u0142\xf3wnej"},yc=()=>{const e=he();return(0,ja.jsx)(ac,{children:(0,ja.jsxs)(ic,{children:[(0,ja.jsxs)(oc,{children:[(0,ja.jsx)(sc,{children:gc.title}),(0,ja.jsx)(lc,{children:gc.subtitle})]}),(0,ja.jsx)(cc,{children:Us.map((t,n)=>(0,ja.jsxs)(uc,{style:{"--index":n},children:[(0,ja.jsx)(dc,{children:t.question}),(0,ja.jsxs)(pc,{children:[t.answer,t.cooperationLink&&(0,ja.jsxs)(ja.Fragment,{children:[" ",(0,ja.jsx)(mc,{onClick:()=>e("/cooperation"),children:"Wsp\xf3\u0142praca"}),"."]})]})]},t.id))}),(0,ja.jsx)(hc,{children:(0,ja.jsx)(fc,{onClick:()=>e("/"),children:wc.backLabel})})]})})},bc=ga.section`
  position: relative;
  z-index: 5;
  width: 100%;
  box-sizing: border-box;
`,xc=ga.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);

  @media (max-width: ${ba.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`,vc=ga.div`
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
`,kc=ga.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${xa.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,zc=ga.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${ba.tablet}px) {
    display: none;
  }
`,jc={hero:{title:"Wsp\xf3\u0142praca",subtitle:"Prosty proces, pe\u0142na transparentno\u015b\u0107, gwarancja spokojnego snu. Oto, jak budujemy Twoj\u0105 cyfrow\u0105 przysz\u0142o\u015b\u0107."},steps:[{id:1,number:"1",title:"Wyb\xf3r Drogi i Start",content:"Wsp\xf3\u0142prac\u0119 zaczynamy od formalno\u015bci, aby\u015b mog\u0142a spa\u0107 spokojnie. Masz dwie \u015bcie\u017cki:",options:[{label:"Bezpo\u015brednio:",description:"Piszesz do nas e-mail, ustalamy szczeg\xf3\u0142y, przesy\u0142amy dane do faktury (bez VAT) i po op\u0142aceniu ruszamy z kopyta."},{label:"Allegro:",description:"Kupujesz na aukcji, korzystasz z bezpiecznych p\u0142atno\u015bci platformy i automatycznie trafiasz do kolejki realizacji."}],note:"Wa\u017cne: Przyst\u0119pujemy do pracy natychmiast po zaksi\u0119gowaniu wp\u0142aty lub otrzymaniu potwierdzenia z Allegro."},{id:2,number:"2",title:"Strategia i Materia\u0142y",content:"Nie musisz by\u0107 techniczna. Przesy\u0142amy Ci interaktywn\u0105 ankiet\u0119, kt\xf3ra poprowadzi Ci\u0119 za r\u0119k\u0119.",sections:[{label:"Twoje Zadanie:",description:"Wybierasz sekcje, kt\xf3re maj\u0105 si\u0119 pojawi\u0107 (np. O nas, Portfolio, Cennik)."},{label:"Nasze Wsparcie:",description:"Je\u015bli nie masz tekst\xf3w \u2013 przygotujemy je. Je\u015bli brak Ci zdj\u0119\u0107 \u2013 wygenerujemy unikalne grafiki AI."},{label:"Domena:",description:"Podajesz 2-3 propozycje nazwy (np. twojanazwa.pl). My sprawdzamy dost\u0119pno\u015b\u0107 i rejestrujemy t\u0119 woln\u0105."}]},{id:3,number:"3",title:"Realizacja: 48h Roboczych",content:"Tutaj dzieje si\u0119 magia. Kodujemy Twoj\u0105 stron\u0119 w czystym React.js.",details:[{label:"Czas:",description:"Standardowy czas realizacji to 48 godzin roboczych."},{label:"Zasada Wypocz\u0119tego Eksperta:",description:"Liczymy tylko dni robocze (poniedzia\u0142ek \u2013 pi\u0105tek). Weekendy i \u015bwi\u0119ta to czas na regeneracj\u0119, bo tylko wypocz\u0119ty programista gwarantuje kod bez b\u0142\u0119d\xf3w i design na najwy\u017cszym poziomie."},{label:"Technologia:",description:"Konfigurujemy darmowy serwer (GitHub Pages) i spinamy wszystko z Twoj\u0105 now\u0105 domen\u0105."}]},{id:4,number:"4",title:'Przekazanie "Kluczy do Biznesu"',content:"Twoja strona o\u017cywa. Ale na tym nie ko\u0144czymy:",deliverables:["Otrzymujesz od nas komplet hase\u0142 i dost\u0119p\xf3w do konta serwera i domeny.","Dostajesz prost\u0105 instrukcj\u0119, co zrobi\u0107 za rok, \u017ceby przed\u0142u\u017cy\u0107 domen\u0119 (koszt ok. 80 z\u0142 \u2013 bez naszych mar\u017c).","Strona jest Twoj\u0105 w\u0142asno\u015bci\u0105 na zawsze. Mo\u017cesz j\u0105 rozwija\u0107, przenosi\u0107 i modyfikowa\u0107 bez \u017cadnych ogranicze\u0144."]}],guarantee:{title:'Pakiet "Spokojna G\u0142owa"',subtitle:"Twoja Gwarancja",description:"Wiemy, \u017ce biznes si\u0119 zmienia. Numer telefonu mo\u017ce ulec zmianie, cennik mo\u017ce podskoczy\u0107. Dlatego nasza wsp\xf3\u0142praca nie ko\u0144czy si\u0119 na oddaniu strony:",benefits:[{icon:"3x",title:"3 Lata Opieki",description:"Masz u nas 3 darmowe pakiety poprawek do wykorzystania przez 36 miesi\u0119cy."},{icon:"\u26a1",title:"B\u0142yskawiczny Serwis",description:"Potrzebujesz zmiany? Piszesz e-mail, a my wprowadzamy poprawk\u0119 w kodzie."},{icon:"\ud83d\udcb0",title:"Uczciwe Stawki",description:"Po wykorzystaniu darmowych pakiet\xf3w, drobne zmiany to koszt rz\u0119du 10-50 z\u0142. Bez abonament\xf3w, bez naci\u0105gania."}]},materials:{title:"Jak Przygotowa\u0107 Materia\u0142y?",subtitle:"Twoja Checklista",intro:"Nie musisz by\u0107 copywriterem ani fotografem. Nasza strona jest elastyczna \u2013 dopasuje si\u0119 do tego, co masz. Je\u015bli brakuje Ci jakiej\u015b sekcji (np. cennika czy zespo\u0142u), po prostu j\u0105 ukryjemy, a layout nadal b\u0119dzie wygl\u0105da\u0142 perfekcyjnie.",sections:[{icon:"\ud83d\udccb",title:"Co Warto Przygotowa\u0107?",items:[{label:"Fundament (Hero & Domena)",points:["Wymy\u015bl chwytliwe has\u0142o (np. 'Twoje wspomnienia w najlepszym \u015bwietle').","Podaj 2-3 propozycje adresu strony (np. mojafirma.pl). Pami\u0119taj: kr\xf3tko i \u0142atwo do podyktowania. Unikaj nazw zastrze\u017conych marek!"]},{label:"To\u017csamo\u015b\u0107 (O nas & Zesp\xf3\u0142)",points:["Napisz kilka zda\u0144 o swojej pasji i tym, co Ci\u0119 wyr\xf3\u017cnia.","Poka\u017c 'ludzk\u0105 twarz' biznesu \u2013 prze\u015blij zdj\u0119cie przy pracy. Klienci kupuj\u0105 oczami, ale ufaj\u0105 ludziom, kt\xf3rych widz\u0105."]},{label:"Twoje Sukcesy (Statystyki & Portfolio)",points:["Pochwal si\u0119 liczbami (lata pracy, zadowoleni klienci) lub kluczowymi zaletami.","Wybierz do 12 najlepszych zdj\u0119\u0107 do galerii. Dzielimy je na kategorie (np. Biznes, Sesje, Projekty)."]},{label:"Konkrety (Us\u0142ugi & Cennik)",points:["Opisz kr\xf3tko do 10 us\u0142ug.","Podaj ceny lub pakiety. Je\u015bli wyceniasz indywidualnie \u2013 napiszemy o tym!"]},{label:"Kontakt & Social Media",points:["Przygotuj e-mail, telefon i linki do profili (Instagram, Facebook, TikTok itd.).","Sprawimy, \u017ce klient skontaktuje si\u0119 z Tob\u0105 jednym klikni\u0119ciem."]}]},{icon:"\ud83d\udc8e",title:"Nasze Wsparcie Kreatywne",highlight:!0,items:[{label:"Teksty",points:["Na podstawie kr\xf3tkiej ankiety ubierzemy Twoje my\u015bli w profesjonalne s\u0142owa."]},{label:"Grafiki AI",points:["Je\u015bli nie masz w\u0142asnych fotografii do t\u0142a lub sekcji 'O nas', wygenerujemy dla Ciebie unikalne, wysokiej jako\u015bci grafiki AI."]}]},{icon:"\u26a0\ufe0f",title:"Wa\u017cne Informacje Techniczne",items:[{label:"Szybko\u015b\u0107 Ponad Wszystko",points:["Limity zdj\u0119\u0107 (np. do 12 w galerii) stosujemy celowo. Dzi\u0119ki temu Twoja strona \u0142aduje si\u0119 b\u0142yskawicznie na ka\u017cdym smartfonie. W sieci: mniej znaczy wi\u0119cej!"]},{label:"Elastyczno\u015b\u0107",points:["Niezale\u017cnie od tego, czy wybierzesz 5, czy 10 sekcji, my zadbamy o zachowanie idealnych proporcji i estetyki."]},{label:"48h Roboczych",points:["Nasz zegar rusza, gdy otrzymamy od Ciebie komplet materia\u0142\xf3w. Pracujemy w dni robocze, aby dostarczy\u0107 Ci kod najwy\u017cszej jako\u015bci."]}]}]},cta:{primary:"Zacznij Wsp\xf3\u0142prac\u0119",secondary:"Wr\xf3\u0107 do Pyta\u0144"}},Sc=()=>(0,ja.jsxs)(vc,{children:[(0,ja.jsx)(kc,{children:jc.hero.title}),(0,ja.jsx)(zc,{children:jc.hero.subtitle})]}),Ec=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(60px, 10vw, 100px);
  margin-bottom: clamp(80px, 12vw, 120px);
`,_c=ga.div`
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
`,Cc=ga.div`
  display: flex;
  align-items: center;
  gap: clamp(20px, 3vw, 30px);
`,Pc=ga.div`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: ${xa.goldMain};
  line-height: 1;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  min-width: 60px;
  text-align: center;
  background: rgba(212, 175, 55, 0.1);
  padding: clamp(15px, 2vw, 25px);
  border-radius: 10px;
  border: 1px solid rgba(212, 175, 55, 0.2);
`,Tc=ga.div`
  padding: clamp(20px, 3vw, 30px);
  background: rgba(212, 175, 55, 0.05);
  border-radius: 10px;
  border-left: 3px solid ${xa.goldMain};
  padding-left: clamp(25px, 4vw, 40px);
`,Ic=ga.h2`
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  color: ${xa.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
  flex: 1;
`,Ac=ga.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  margin: 0 0 clamp(15px, 2vw, 20px) 0;
`,Rc=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`,Oc=ga.div`
  padding: clamp(15px, 2.5vw, 20px);
  background: rgba(212, 175, 55, 0.08);
  border-radius: 8px;
  border-left: 3px solid ${xa.goldMain};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    transform: translateX(5px);
  }
`,Nc=ga.h4`
  color: ${xa.goldMain};
  margin: 0 0 8px 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
`,Dc=ga.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 0.95rem);
  line-height: 1.6;
`,$c=ga.div`
  margin-top: clamp(20px, 3vw, 30px);
  padding: clamp(15px, 2.5vw, 25px);
  background: rgba(212, 175, 55, 0.05);
  border-radius: 8px;
  border-top: 2px solid ${xa.goldMain};
`,Lc=ga.h5`
  color: ${xa.goldMain};
  margin: 0 0 8px 0;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`,Mc=ga.p`
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  line-height: 1.6;
`,Fc=ga.ul`
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
      color: ${xa.goldMain};
      font-weight: 700;
    }
  }
`,Uc=()=>(0,ja.jsx)(Ec,{children:jc.steps.map((e,t)=>(0,ja.jsxs)(_c,{delay:.1*t,children:[(0,ja.jsxs)(Cc,{children:[(0,ja.jsx)(Pc,{children:e.number}),(0,ja.jsx)(Ic,{children:e.title})]}),(0,ja.jsxs)(Tc,{children:[(0,ja.jsx)(Ac,{children:e.content}),e.options&&(0,ja.jsxs)(ja.Fragment,{children:[(0,ja.jsx)(Rc,{children:e.options.map((e,t)=>(0,ja.jsxs)(Oc,{children:[(0,ja.jsx)(Nc,{children:e.label}),(0,ja.jsx)(Dc,{children:e.description})]},t))}),e.note&&(0,ja.jsxs)($c,{children:[(0,ja.jsx)(Lc,{children:"Wa\u017cne"}),(0,ja.jsx)(Mc,{children:e.note})]})]}),e.sections&&(0,ja.jsx)(Rc,{children:e.sections.map((e,t)=>(0,ja.jsxs)(Oc,{children:[(0,ja.jsx)(Nc,{children:e.label}),(0,ja.jsx)(Dc,{children:e.description})]},t))}),e.details&&(0,ja.jsx)(Rc,{children:e.details.map((e,t)=>(0,ja.jsxs)(Oc,{children:[(0,ja.jsx)(Nc,{children:e.label}),(0,ja.jsx)(Dc,{children:e.description})]},t))}),e.deliverables&&(0,ja.jsx)(Fc,{children:e.deliverables.map((e,t)=>(0,ja.jsx)("li",{children:e},t))})]})]},e.id))}),Bc=ga.section`
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
`,Hc=ga.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${xa.goldMain};
  margin: 0 0 10px 0;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`,Wc=ga.p`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`,Vc=ga.p`
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin: 0 0 clamp(40px, 6vw, 60px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`,Kc=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 6vw, 60px);
`,Gc=ga.div`
  padding: clamp(30px, 4vw, 40px);
  background: rgba(
    255,
    255,
    255,
    ${e=>e.highlight?"0.06":"0.02"}
  );
  border: 1px solid
    rgba(212, 175, 55, ${e=>e.highlight?"0.3":"0.15"});
  border-left: 4px solid ${xa.goldMain};
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
`,qc=ga.div`
  display: flex;
  align-items: center;
  gap: clamp(15px, 2vw, 25px);
  margin-bottom: clamp(20px, 3vw, 30px);
`,Yc=ga.span`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${xa.goldMain};
`,Qc=ga.h3`
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  color: ${xa.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,Jc=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`,Xc=ga.div`
  padding: clamp(15px, 2.5vw, 20px);
  background: rgba(212, 175, 55, 0.04);
  border-radius: 8px;
  border-left: 2px solid rgba(212, 175, 55, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.08);
    border-left-color: ${xa.goldMain};
  }
`,Zc=ga.h4`
  color: ${xa.goldMain};
  margin: 0 0 clamp(10px, 1.5vw, 15px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
`,eu=ga.ul`
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
      color: ${xa.goldMain};
      font-weight: 700;
      font-size: 1.1em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`,tu=()=>(0,ja.jsxs)(Bc,{children:[(0,ja.jsx)(Hc,{children:jc.materials.title}),(0,ja.jsx)(Wc,{children:jc.materials.subtitle}),(0,ja.jsx)(Vc,{children:jc.materials.intro}),(0,ja.jsx)(Kc,{children:jc.materials.sections.map((e,t)=>(0,ja.jsxs)(Gc,{highlight:e.highlight,children:[(0,ja.jsxs)(qc,{children:[(0,ja.jsx)(Yc,{children:e.icon}),(0,ja.jsx)(Qc,{children:e.title})]}),(0,ja.jsx)(Jc,{children:e.items.map((e,t)=>(0,ja.jsxs)(Xc,{children:[(0,ja.jsx)(Zc,{children:e.label}),(0,ja.jsx)(eu,{children:e.points.map((e,t)=>(0,ja.jsx)("li",{children:e},t))})]},t))})]},t))})]}),nu=ga.section`
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
`,ru=ga.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${xa.goldMain};
  margin: 0 0 10px 0;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`,au=ga.p`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`,iu=ga.p`
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin: 0 0 clamp(40px, 6vw, 60px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,ou=ga.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(30px, 4vw, 50px);
`,su=ga.div`
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
`,lu=ga.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${xa.goldMain};
  margin-bottom: clamp(15px, 2vw, 25px);
`,cu=ga.h3`
  color: ${xa.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,uu=ga.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  line-height: 1.7;
`,du=()=>(0,ja.jsxs)(nu,{children:[(0,ja.jsx)(ru,{children:jc.guarantee.title}),(0,ja.jsx)(au,{children:jc.guarantee.subtitle}),(0,ja.jsx)(iu,{children:jc.guarantee.description}),(0,ja.jsx)(ou,{children:jc.guarantee.benefits.map((e,t)=>(0,ja.jsxs)(su,{children:[(0,ja.jsx)(lu,{children:e.icon}),(0,ja.jsx)(cu,{children:e.title}),(0,ja.jsx)(uu,{children:e.description})]},t))})]}),pu=ga.div`
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
`,hu=ga.button`
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
`,fu=ga(hu)`
  background: linear-gradient(
    135deg,
    ${xa.goldMain} 0%,
    #f1d592 100%
  );
  color: ${xa.deepBlack};

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
`,mu=(ga(hu)`
  background: transparent;
  color: ${xa.goldMain};
  border: 2px solid ${xa.goldMain};

  &:hover {
    background: rgba(212, 175, 55, 0.1);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
  }

  &:active {
    opacity: 0.8;
  }
`,()=>{const e=he();return(0,ja.jsx)(pu,{children:(0,ja.jsx)(fu,{onClick:()=>e("/"),children:jc.cta.primary})})}),gu=()=>(0,ja.jsx)(bc,{children:(0,ja.jsxs)(xc,{children:[(0,ja.jsx)(Sc,{}),(0,ja.jsx)(Uc,{}),(0,ja.jsx)(tu,{}),(0,ja.jsx)(du,{}),(0,ja.jsx)(mu,{})]})}),wu=ga.section`
  position: relative;
  z-index: 5;
  width: 100%;
  box-sizing: border-box;
`,yu=ga.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);

  @media (max-width: ${ba.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`,bu=ga.div`
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
`,xu=ga.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${xa.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,vu=ga.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${ba.tablet}px) {
    display: none;
  }
`,ku=(ga.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
  max-width: 1200px;
  margin: 0 auto;
`,ga.div`
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

  @media (max-width: ${ba.smallPhone-1}px) {
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
`),zu=ga.a`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
`,ju=ga.div`
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
      ${xa.goldMain},
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
    border-color: ${xa.goldMain};
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
`,Su=ga.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${ju}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`,Eu=ga.div`
  padding: clamp(12px, 2.5vw, 18px);
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
`,_u=ga.h3`
  font-size: clamp(0.95rem, 1.8vw, 1.15rem);
  color: ${xa.goldMain};
  margin: 0 0 clamp(6px, 1.2vw, 10px) 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`,Cu=ga.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  line-height: 1.5;
  margin: 0 0 auto 0;
  flex: 1;
  font-weight: 300;
`,Pu=ga.div`
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
`,Tu=ga.span`
  font-size: clamp(1rem, 1.8vw, 1.3rem);
  color: ${xa.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
`,Iu=ga.button`
  padding: clamp(6px, 1.2vw, 10px) clamp(15px, 2.5vw, 25px);
  background: linear-gradient(
    135deg,
    ${xa.goldMain} 0%,
    #f1d592 100%
  );
  color: ${xa.deepBlack};
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
`,Au=ga.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(4px, 1vw, 8px);
`,Ru=ga.div`
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
`,Ou=ga.a`
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
    border-color: ${xa.goldMain};
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
`,Nu=ga.img`
  width: clamp(80px, 20vw, 120px);
  height: clamp(80px, 20vw, 120px);
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${Ou}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`,Du=ga.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: clamp(8px, 1.5vw, 12px);
  min-width: 0;
`,$u=ga.h3`
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: ${xa.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`,Lu=ga.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  line-height: 1.5;
  margin: 0;
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Mu=ga.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(10px, 2vw, 15px);
  padding-top: clamp(8px, 1.5vw, 12px);
  border-top: 1px solid rgba(212, 175, 55, 0.25);
`,Fu=ga.span`
  font-size: clamp(0.95rem, 1.8vw, 1.15rem);
  color: ${xa.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
`,Uu=ga.button`
  padding: clamp(6px, 1.2vw, 10px) clamp(15px, 2.5vw, 25px);
  background: linear-gradient(
    135deg,
    ${xa.goldMain} 0%,
    #f1d592 100%
  );
  color: ${xa.deepBlack};
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
`,Bu=[{id:1,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:2,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:3,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:4,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:5,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:6,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:7,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:8,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:9,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:10,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:11,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:12,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:13,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:14,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:15,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:16,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:17,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:18,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:19,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:20,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:21,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:22,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:23,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:24,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:25,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:26,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:27,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:28,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:29,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:30,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]}],Hu="Nasze Projekty",Wu="Odkryj gotowe szablony stron,kt\xf3re mog\u0105 transformowa\u0107 Twoj\u0105 mark\u0119",Vu="\u2190 Wr\xf3\u0107 do ofert",Ku="Preview szablonu",Gu="O szablonie",qu="Szablon zawiera:",Yu=ga.div`
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
`,Qu=ga.button`
  flex-shrink: 0;
  width: clamp(35px, 4vw, 48px);
  height: clamp(35px, 4vw, 48px);
  border-radius: 8px;
  background: ${e=>e.active?`linear-gradient(135deg, ${xa.goldMain} 0%, #f1d592 100%)`:"rgba(46, 8, 16, 0.6)"};
  color: ${e=>e.active?xa.deepBlack:xa.goldMain};
  border: 2px solid
    ${e=>e.active?xa.goldMain:"rgba(212, 175, 55, 0.4)"};
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
    border-color: ${xa.goldMain};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: rgba(46, 8, 16, 0.4);
  }
`,Ju=ga.input`
  width: clamp(50px, 8vw, 70px);
  height: clamp(35px, 4vw, 48px);
  border: 2px solid rgba(212, 175, 55, 0.4);
  border-radius: 8px;
  background: rgba(46, 8, 16, 0.6);
  color: ${xa.goldMain};
  text-align: center;
  font-size: clamp(0.65rem, 1rem, 0.8rem);
  font-weight: 600;
  padding: clamp(6px, 1vw, 10px);
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${xa.goldMain};
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
`,Xu=ga.span`
  font-size: clamp(0.8rem, 1.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  white-space: nowrap;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,Zu=ga.div`
  width: 1px;
  height: clamp(20px, 2vw, 30px);
  background: rgba(212, 175, 55, 0.2);
`,ed=e=>{let{currentPage:t,totalPages:n,onPageChange:a}=e;const[i,o]=(0,r.useState)(""),s=e=>{const t=e.target.value.trim();if(""===t)return void o("");const r=parseInt(t,10);!isNaN(r)&&r>=1&&r<=n?(a(r),o("")):r>n?(a(n),o("")):r<1&&(a(1),o(""))};return(0,ja.jsxs)(Yu,{children:[(0,ja.jsx)(Qu,{onClick:()=>{a(1)},disabled:1===t,"aria-label":"Pierwsza strona",title:"Pierwsza strona",children:(0,ja.jsx)(ci,{})}),(0,ja.jsx)(Qu,{onClick:()=>{t>1&&a(t-1)},disabled:1===t,"aria-label":"Poprzednia strona",title:"Poprzednia strona",children:(0,ja.jsx)(gi,{})}),(0,ja.jsx)(Zu,{}),(0,ja.jsxs)(Xu,{children:[(0,ja.jsx)("span",{children:t}),(0,ja.jsx)("span",{style:{margin:"0 4px"},children:"/"}),(0,ja.jsx)("span",{children:n})]}),(0,ja.jsx)(Ju,{type:"number",placeholder:"Id\u017a do",value:i,onChange:e=>o(e.target.value),onBlur:s,onKeyPress:e=>{"Enter"===e.key&&s(e)},min:"1",max:n,"aria-label":"Wpisz numer strony",title:"Wpisz numer strony i naci\u015bnij Enter"}),(0,ja.jsx)(Zu,{}),(0,ja.jsx)(Qu,{onClick:()=>{t<n&&a(t+1)},disabled:t===n,"aria-label":"Nast\u0119pna strona",title:"Nast\u0119pna strona",children:(0,ja.jsx)(mi,{})}),(0,ja.jsx)(Qu,{onClick:()=>{a(n)},disabled:t===n,"aria-label":"Ostatnia strona",title:"Ostatnia strona",children:(0,ja.jsx)(li,{})})]})},td=ga.div`
  display: flex;
  gap: clamp(8px, 1.5vw, 12px);
  margin-bottom: 0;
  justify-content: flex-end;
  padding-right: clamp(10px, 2vw, 30px);

  @media (min-width: 821px) {
    display: none;
  }
`,nd=ga.button`
  width: clamp(40px, 8vw, 50px);
  height: clamp(40px, 8vw, 50px);
  border-radius: 10px;
  border: 2px solid
    ${e=>e.active?xa.goldMain:"rgba(212, 175, 55, 0.3)"};
  background: ${e=>e.active?`linear-gradient(135deg, ${xa.goldMain} 0%, #f1d592 100%)`:"rgba(46, 8, 16, 0.5)"};
  color: ${e=>e.active?xa.deepBlack:xa.goldMain};
  font-size: clamp(1rem, 2vw, 1.3rem);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${xa.goldMain};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`,rd=e=>{let{viewMode:t,onViewModeChange:n}=e;return(0,ja.jsxs)(td,{children:[(0,ja.jsx)(nd,{onClick:()=>n("grid"),active:"grid"===t,"aria-label":"Widok kafelk\xf3w",title:"Widok kafelk\xf3w",children:(0,ja.jsx)(si,{})}),(0,ja.jsx)(nd,{onClick:()=>n("list"),active:"list"===t,"aria-label":"Widok listy",title:"Widok listy",children:(0,ja.jsx)(di,{})})]})},ad=()=>{const[e,t]=(0,r.useState)(1),[n,a]=(0,r.useState)(12),[i,o]=(0,r.useState)(()=>{if("undefined"!==typeof window){return localStorage.getItem("offerViewMode")||"grid"}return"grid"}),[s,l]=(0,r.useState)(!1);(0,r.useEffect)(()=>{localStorage.setItem("offerViewMode",i)},[i]),(0,r.useEffect)(()=>{const e=()=>{const e=window.innerWidth<820;l(e),a(e?6:12)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.useEffect)(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]);const c=Math.ceil(Bu.length/n),u=(e-1)*n,d=u+n,p=Bu.slice(u,d);return(0,ja.jsxs)(Au,{children:[(0,ja.jsx)(rd,{viewMode:i,onViewModeChange:o}),"grid"===i?(0,ja.jsx)(ku,{children:p.map(e=>(0,ja.jsx)(zu,{href:`/offer/${e.id}`,target:s?void 0:"_blank",rel:s?void 0:"noopener noreferrer",children:(0,ja.jsxs)(ju,{children:[(0,ja.jsx)(Su,{src:e.image,alt:e.title}),(0,ja.jsxs)(Eu,{children:[(0,ja.jsx)(_u,{children:e.title}),(0,ja.jsx)(Cu,{children:e.shortDescription}),(0,ja.jsxs)(Pu,{children:[(0,ja.jsx)(Tu,{children:e.price}),(0,ja.jsx)(Iu,{children:"Szczeg\xf3\u0142y"})]})]})]})},e.id))}):(0,ja.jsx)(Ru,{children:p.map(e=>(0,ja.jsxs)(Ou,{href:`/offer/${e.id}`,target:s?void 0:"_blank",rel:s?void 0:"noopener noreferrer",children:[(0,ja.jsx)(Nu,{src:e.image,alt:e.title}),(0,ja.jsxs)(Du,{children:[(0,ja.jsx)($u,{children:e.title}),(0,ja.jsx)(Lu,{children:e.shortDescription}),(0,ja.jsxs)(Mu,{children:[(0,ja.jsx)(Fu,{children:e.price}),(0,ja.jsx)(Uu,{children:"Szczeg\xf3\u0142y"})]})]})]},e.id))}),(0,ja.jsx)(ed,{currentPage:e,totalPages:c,onPageChange:e=>{t(e)}})]})},id=ga.div`
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
`,od=ga.button`
  background: transparent;
  border: 2px solid ${xa.goldMain};
  color: ${xa.goldMain};
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
`,sd=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 7vw, 70px);
`,ld=(ga.div`
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
`,ga.div`
  text-align: center;
  padding: clamp(40px, 8vw, 80px);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${xa.goldMain};
`),cd=ga.section`
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
`,ud=ga.div`
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
      ${xa.goldMain} 50%,
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
`,dd=ga.h1`
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: ${xa.goldMain};
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
`,pd=ga.p`
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
    background: ${xa.goldMain};
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
`,hd=ga.div`
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
      ${xa.goldMain} 0%,
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
`,fd=ga.span`
  font-size: clamp(1.3rem, 2.8vw, 2rem);
  font-weight: 700;
  color: ${xa.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 821px) {
    font-size: clamp(0.95rem, 2vw, 1.3rem);
    letter-spacing: 0.6px;
  }
`,md=(ga.img`
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
`,ga.div`
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
`),gd=ga.div`
  position: relative;
  display: block;
  margin: 0 auto clamp(30px, 5vw, 50px) auto;
  width: fit-content;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
`,wd=ga.div`
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
`,yd=ga.span`
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
`,bd=ga.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: rgba(212, 175, 55, 0.9);
  border: 2px solid ${xa.goldMain};
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
    background: ${xa.goldMain};
    transform: scale(1.1);
  }

  @media (max-width: 821px) {
    width: 35px;
    height: 35px;
    bottom: 12px;
    right: 12px;
    font-size: 1rem;
  }
`,xd=ga.img`
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
`,vd=ga.div`
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
`,kd=ga.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid
    ${e=>e.isActive?xa.goldMain:"rgba(212, 175, 55, 0.2)"};
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${e=>e.isActive?1:.6};
  box-shadow: ${e=>e.isActive?"0 8px 20px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.2)":"0 4px 12px rgba(0, 0, 0, 0.2)"};
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;

  &:hover {
    border-color: ${xa.goldMain};
    opacity: 1;
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
  }

  @media (max-width: 821px) {
    height: 55px;
    border-radius: 8px;
    border: 2px solid
      ${e=>e.isActive?xa.goldMain:"rgba(212, 175, 55, 0.2)"};
    box-shadow: ${e=>e.isActive?"0 6px 16px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(212, 175, 55, 0.2)":"0 3px 10px rgba(0, 0, 0, 0.25), inset 0 0.5px 0 rgba(212, 175, 55, 0.05)"};

    &:hover {
      transform: scale(1.08) translateY(-2px);
      box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
    }
  }
`,zd=ga.span`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: ${xa.goldMain};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.3);
`,jd=ga.div`
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
`,Sd=ga.div`
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
`,Ed=ga.img`
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
`,_d=ga.span`
  position: fixed;
  top: 120px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: ${xa.goldMain};
  padding: 10px 18px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.5);
  z-index: 999999;
`,Cd=ga.button`
  position: absolute;
  top: 50%;
  ${e=>e.left?"left: 20px;":"right: 20px;"}
  transform: translateY(-50%);
  background: rgba(212, 175, 55, 0.2);
  border: 2px solid ${xa.goldMain};
  color: ${xa.goldMain};
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
`,Pd=ga.button`
  position: fixed;
  top: 120px;
  right: 20px;
  background: rgba(212, 175, 55, 0.2);
  border: 2px solid ${xa.goldMain};
  color: ${xa.goldMain};
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
`,Td=e=>{let{images:t,title:n}=e;const[a,i]=(0,r.useState)(0),[o,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!o)return;const e=e=>{"ArrowLeft"===e.key?i(e=>(e-1+t.length)%t.length):"ArrowRight"===e.key?i(e=>(e+1)%t.length):"Escape"===e.key&&s(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o,t.length]),t&&0!==t.length?(0,ja.jsxs)(ja.Fragment,{children:[(0,ja.jsxs)(md,{children:[(0,ja.jsxs)(gd,{onContextMenu:e=>e.preventDefault(),onTouchStart:e=>{e.touches.length>1&&e.preventDefault()},children:[(0,ja.jsx)(xd,{src:t[a],alt:`${n} - zdj\u0119cie ${a+1}`,onClick:()=>s(!0),onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault(),style:{cursor:"pointer",userSelect:"none"}}),(0,ja.jsx)(wd,{children:(0,ja.jsx)(yd,{children:"www.studioklara.pl"})}),(0,ja.jsx)(bd,{onClick:()=>s(!0),children:"\u26f6"})]}),(0,ja.jsx)(vd,{children:t.map((e,t)=>(0,ja.jsx)(kd,{src:e,alt:`Miniatura ${t+1}`,isActive:a===t,onClick:()=>i(t),onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault()},t))}),(0,ja.jsxs)(zd,{children:[a+1," / ",t.length]})]}),o&&(0,ja.jsxs)(jd,{onClick:()=>s(!1),children:[(0,ja.jsxs)(Sd,{onClick:e=>e.stopPropagation(),children:[(0,ja.jsxs)(gd,{style:{margin:0,width:"100%",height:"100%",maxHeight:"none"},children:[(0,ja.jsx)(Ed,{src:t[a],alt:`${n} - ${a+1}`,onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault()}),(0,ja.jsx)(wd,{style:{opacity:.35},children:(0,ja.jsx)(yd,{children:"www.studioklara.pl"})})]}),(0,ja.jsxs)(_d,{children:[a+1," / ",t.length]}),(0,ja.jsx)(Cd,{left:!0,onClick:()=>i(e=>(e-1+t.length)%t.length),children:"\u2039"}),(0,ja.jsx)(Cd,{onClick:()=>i(e=>(e+1)%t.length),children:"\u203a"})]}),(0,ja.jsx)(Pd,{onClick:()=>s(!1),children:"\u2715"})]})]}):null},Id=e=>{let{title:t,subtitle:n,price:r,images:a}=e;return(0,ja.jsxs)(cd,{children:[(0,ja.jsxs)(ud,{children:[(0,ja.jsx)(dd,{children:t}),(0,ja.jsx)(pd,{children:n}),r&&(0,ja.jsx)(hd,{children:(0,ja.jsx)(fd,{children:r})})]}),(0,ja.jsx)(Td,{images:a,title:t})]})},Ad=ga.section`
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
`,Rd=ga.h2`
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  color: ${xa.goldMain};
  margin: 0 0 clamp(20px, 3vw, 35px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-style: italic;
`,Od=(ga.p`
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.9;
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.3px;
`,ga.section`
  animation: fadeInUp 0.6s ease-out 0.3s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(20px, 3vw, 30px);
  border-radius: 15px;
  border: 1px solid rgba(212, 175, 55, 0.1);

  ${Rd} {
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    margin: 0 0 clamp(15px, 2vw, 20px) 0;
  }
`),Nd=ga.div`
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
`,Dd=ga.iframe`
  display: block;
  border-radius: 13px;
  width: 100%;
  height: 100%;
  border: none;
`,$d=e=>{let{title:t,youtubeUrl:n}=e;return(0,ja.jsxs)(Od,{children:[(0,ja.jsx)(Rd,{children:t}),(0,ja.jsx)(Nd,{children:(0,ja.jsx)(Dd,{src:n,title:t,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})},Ld=ga.section`
  animation: fadeInUp 0.6s ease-out 0.4s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(30px, 4.5vw, 45px);
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.1);
`,Md=ga.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(20px, 3vw, 30px);
`,Fd=ga.li`
  display: flex;
  align-items: flex-start;
  gap: clamp(15px, 3vw, 20px);
  padding: clamp(20px, 3vw, 28px);
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.08) 0%,
    rgba(212, 175, 55, 0.03) 100%
  );
  border-left: 4px solid ${xa.goldMain};
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
`,Ud=ga.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: clamp(30px, 4vw, 40px);
  width: clamp(30px, 4vw, 40px);
  height: clamp(30px, 4vw, 40px);
  background: ${xa.goldMain};
  color: ${xa.deepBlack};
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.2em;
  flex-shrink: 0;
`,Bd=ga.span`
  flex: 1;
`,Hd=e=>{let{title:t,features:n}=e;return(0,ja.jsxs)(Ld,{children:[(0,ja.jsx)(Rd,{children:t}),(0,ja.jsx)(Md,{children:n.map((e,t)=>(0,ja.jsxs)(Fd,{children:[(0,ja.jsx)(Ud,{children:"\u2713"}),(0,ja.jsx)(Bd,{children:e})]},t))})]})},Wd=ga.section`
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
      ${xa.goldMain},
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
`,Vd=ga.h3`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${xa.goldMain};
  margin: 0 0 clamp(35px, 6vw, 50px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
  line-height: 1.3;
`,Kd=ga.div`
  display: flex;
  gap: clamp(15px, 3vw, 30px);
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Gd=ga.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: clamp(14px, 3vw, 18px) clamp(35px, 6vw, 60px);
  background: linear-gradient(
    135deg,
    ${xa.goldMain} 0%,
    #f1d592 100%
  );
  color: ${xa.deepBlack};
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
`,qd=ga(Gd)`
  background: transparent;
  color: ${xa.goldMain};
  border: 2px solid ${xa.goldMain};
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.15);

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.3);
  }
`,Yd=(ga.div`
  text-align: center;
  padding: clamp(40px, 8vw, 80px);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${xa.goldMain};
`,e=>{var t;let{title:n}=e;const r=null===(t=yi.find(e=>"Allegro"===e.label))||void 0===t?void 0:t.url;return(0,ja.jsxs)(Wd,{children:[(0,ja.jsx)(Vd,{children:"Interesuje Ci\u0119 ten szablon?"}),(0,ja.jsxs)(Kd,{children:[(0,ja.jsx)(Gd,{href:`mailto:${$i}?subject=Zainteresowanie szablonk\u0105: ${n}`,children:"Napisz email"}),(0,ja.jsx)(qd,{href:r,target:"_blank",rel:"noopener noreferrer",children:"Zakup Allegro"})]})]})}),Qd=e=>{let{offerId:t}=e;const n=he(),r=Bu.find(e=>e.id===t);return r?(0,ja.jsxs)(id,{children:[(0,ja.jsx)(od,{onClick:()=>n(-1),children:Vu}),(0,ja.jsx)(Id,{title:r.title,subtitle:r.shortDescription,price:r.price,images:r.images}),(0,ja.jsxs)(sd,{children:[(0,ja.jsx)($d,{title:Ku,youtubeUrl:r.youtubeUrl}),(0,ja.jsx)(Ad,{title:Gu,description:r.fullDescription}),(0,ja.jsx)(Hd,{title:qu,features:r.features}),(0,ja.jsx)(Yd,{title:r.title})]})]}):(0,ja.jsx)(id,{children:(0,ja.jsx)(ld,{children:"Szablon nie znaleziony"})})},Jd=()=>{const{id:e}=fe();return e?(0,ja.jsx)(Qd,{offerId:parseInt(e)}):(0,ja.jsx)(wu,{children:(0,ja.jsxs)(yu,{children:[(0,ja.jsxs)(bu,{children:[(0,ja.jsx)(xu,{children:Hu}),(0,ja.jsx)(vu,{children:Wu})]}),(0,ja.jsx)(ad,{})]})})},Xd=ga.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,Zd=ga.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);

  @media (max-width: ${ba.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`,ep=ga.div`
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
`,tp=ga.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${xa.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,np=ga.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${ba.tablet}px) {
    display: none;
  }
`,rp=ga.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(4px, 1vw, 8px);
  margin-top: clamp(20px, 3vw, 40px);
`,ap=ga.div`
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
`,ip=ga.div`
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

  @media (max-width: ${ba.tablet}px) {
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
`,op=ga.img`
  width: 100%;
  height: 193px;
  object-fit: cover;
  display: block;
`,sp=ga.div`
  padding: clamp(16px, 3.2vw, 24px);
  display: flex;
  flex-direction: column;
  flex: 1;
`,lp=ga.span`
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 9px;
`,cp=ga.h3`
  font-size: clamp(0.89rem, 1.6vw, 1.13rem);
  color: ${xa.white};
  margin: 0 0 9px 0;
  font-weight: 600;
  line-height: 1.4;
  font-family: "Cormorant Garamond", serif;
`,up=ga.p`
  font-size: 0.77rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 13px;

  @media (max-width: ${ba.tablet}px) {
    display: none;
  }
`,dp=ga.span`
  font-size: 0.72rem;
  color: ${xa.gold};
  font-weight: 600;
  letter-spacing: 0.8px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 7px;

  ${ip}:hover & {
    gap: 12px;
  }

  &::after {
    content: "→";
    transition: transform 0.3s ease;
  }

  ${ip}:hover &::after {
    transform: translateX(4px);
  }
`,pp=ga.div`
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
`,hp=ga.a`
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
`,fp=ga.img`
  width: clamp(80px, 20vw, 120px);
  height: clamp(80px, 20vw, 120px);
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${hp}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`,mp=ga.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: clamp(8px, 1.5vw, 12px);
  min-width: 0;
`,gp=ga.span`
  font-size: clamp(0.7rem, 1.2vw, 0.8rem);
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 0.7px;
  text-transform: uppercase;
`,wp=ga.h3`
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`,yp=ga.p`
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
`,bp=ga.span`
  font-size: clamp(0.65rem, 1rem, 0.8rem);
  color: ${xa.gold};
  font-weight: 600;
  letter-spacing: 0.7px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;

  ${hp}:hover & {
    gap: 10px;
  }

  &::after {
    content: "→";
    transition: transform 0.3s ease;
  }

  ${hp}:hover &::after {
    transform: translateX(3px);
  }
`;const xp=function(){const[e,t]=(0,r.useState)(1),[n,a]=(0,r.useState)(6),[i,o]=(0,r.useState)(()=>{if("undefined"!==typeof window){return localStorage.getItem("blogViewMode")||"grid"}return"grid"});(0,r.useEffect)(()=>{localStorage.setItem("blogViewMode",i)},[i]),(0,r.useEffect)(()=>{const e=()=>{const e=window.innerWidth<820;a(e?4:6)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.useEffect)(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]);const s=Math.ceil(Ps.length/n),l=(e-1)*n,c=l+n,u=Ps.slice(l,c);return(0,ja.jsx)(Xd,{children:(0,ja.jsxs)(Zd,{children:[(0,ja.jsxs)(ep,{children:[(0,ja.jsx)(tp,{children:"Aktualno\u015bci"}),(0,ja.jsx)(np,{children:"B\u0105d\u017a na bie\u017c\u0105co z najnowszymi wpisami z naszego bloga. Dzielimy si\u0119 wiedz\u0105 o technologii, designie i procesie tworzenia luksusowych do\u015bwiadcze\u0144 cyfrowych."})]}),(0,ja.jsxs)(rp,{children:[(0,ja.jsx)(rd,{viewMode:i,onViewModeChange:o}),"grid"===i?(0,ja.jsx)(ap,{children:u.map(e=>(0,ja.jsx)(ip,{children:(0,ja.jsxs)(wt,{to:`/blog/${e.id}`,children:[(0,ja.jsx)(op,{src:e.image,alt:e.title}),(0,ja.jsxs)(sp,{children:[(0,ja.jsx)(lp,{children:e.date}),(0,ja.jsx)(cp,{children:e.title}),(0,ja.jsx)(up,{children:e.excerpt}),(0,ja.jsx)(dp,{children:"Czytaj wi\u0119cej"})]})]})},e.id))}):(0,ja.jsx)(pp,{children:u.map(e=>(0,ja.jsxs)(hp,{to:`/blog/${e.id}`,as:wt,children:[(0,ja.jsx)(fp,{src:e.image,alt:e.title}),(0,ja.jsxs)(mp,{children:[(0,ja.jsx)(gp,{children:e.date}),(0,ja.jsx)(wp,{children:e.title}),(0,ja.jsx)(yp,{children:e.excerpt}),(0,ja.jsx)(bp,{children:"Czytaj wi\u0119cej"})]})]},e.id))})]}),(0,ja.jsx)(ed,{currentPage:e,totalPages:s,onPageChange:e=>{t(e)}})]})})},vp=ga.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,kp=ga.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,zp=ga.div`
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
`,jp=ga.h1`
  font-size: clamp(2rem, 6vw, 3rem);
  font-family: "Cormorant Garamond", serif;
  color: ${xa.white};
  margin: 0 0 20px 0;
  font-weight: 700;
  line-height: 1.3;
`,Sp=ga.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-weight: 500;
  letter-spacing: 1px;
`,Ep=ga.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: clamp(40px, 8vw, 60px);
  display: block;
`,_p=ga.div`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  line-height: 1.8;
  letter-spacing: 0.3px;

  h2 {
    font-size: clamp(1.4rem, 3vw, 1.8rem);
    font-family: "Cormorant Garamond", serif;
    color: ${xa.white};
    margin: clamp(40px, 6vw, 60px) 0 20px 0;
    font-weight: 600;
    line-height: 1.3;
  }

  h3 {
    font-size: clamp(1.1rem, 2.2vw, 1.4rem);
    color: ${xa.white};
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
    color: ${xa.gold};
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
      color: ${xa.gold};
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
    color: ${xa.gold};
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  blockquote {
    border-left: 4px solid ${xa.gold};
    padding-left: 20px;
    margin: 30px 0;
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
  }
`,Cp=ga.div`
  margin-top: clamp(60px, 10vw, 100px);
  padding-top: clamp(40px, 6vw, 60px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,Pp=ga.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${xa.gold};
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
`;const Tp=function(e){let{article:t,children:n}=e;return(0,ja.jsx)(vp,{children:(0,ja.jsxs)(kp,{children:[(0,ja.jsxs)(zp,{children:[(0,ja.jsx)(jp,{children:t.title}),(0,ja.jsx)(Sp,{children:t.date})]}),(0,ja.jsx)(Ep,{src:t.image,alt:t.title}),(0,ja.jsx)(_p,{children:n}),(0,ja.jsx)(Cp,{children:(0,ja.jsx)(wt,{to:"/blog",children:(0,ja.jsx)(Pp,{children:"Wr\xf3\u0107 do aktualno\u015bci"})})})]})})};const Ip=function(){const e=Ps.find(e=>"startujemy-z-aktualnosciami"===e.id);return(0,ja.jsxs)(Tp,{article:e,children:[(0,ja.jsx)("h1",{children:"Startujemy z Aktualno\u015bciami \u2013 Sekcja tworzona z my\u015bl\u0105 o Was"}),(0,ja.jsx)("p",{children:(0,ja.jsx)("strong",{children:"30 stycznia 2026"})}),(0,ja.jsx)("p",{children:"Kilka miesi\u0119cy temu zadali\u015bmy sobie kluczowe pytanie: \u201eCzego naprawd\u0119 chc\u0105 dowiedzie\u0107 si\u0119 nasi klienci?\u201d. Odpowied\u017a by\u0142a jednoznaczna \u2013 szukacie rzetelnej wiedzy o trendach w webdesignie, technologiach, kt\xf3rych u\u017cywamy, oraz wgl\u0105du w procesy, kt\xf3re stoj\u0105 za sukcesem Waszych marek."}),(0,ja.jsx)("h2",{children:"Dlaczego zaczynamy w\u0142a\u015bnie teraz?"}),(0,ja.jsx)("p",{children:"Studio Klara Queen od pocz\u0105tku stawia\u0142o na jako\u015b\u0107. Przez d\u0142ugi czas s\u0105dzili\u015bmy, \u017ce najlepiej przem\xf3wi za nas portfolio i opinie zadowolonych klient\xf3w. To prawda, ale w dzisiejszych czasach to tylko cz\u0119\u015b\u0107 historii."}),(0,ja.jsxs)("p",{children:["W 2026 roku obecno\u015b\u0107 w sieci to co\u015b wi\u0119cej ni\u017c pi\u0119kna witryna."," ",(0,ja.jsx)("strong",{children:"To nieustanny dialog"}),". To pokazywanie swojej ekspertyzy w praktyce, edukacja i autentyczne dzielenie si\u0119 wiedz\u0105 oraz procesem tw\xf3rczym."]}),(0,ja.jsx)("p",{children:"Nasi klienci regularnie zadaj\u0105 nam pytania:"}),(0,ja.jsxs)("ul",{children:[(0,ja.jsx)("li",{children:"\u201eIle czasu realnie trwa stworzenie profesjonalnej strony?\u201d"}),(0,ja.jsx)("li",{children:"\u201eDlaczego stawiacie na React, a nie na inne rozwi\u0105zania?\u201d"}),(0,ja.jsx)("li",{children:"\u201eJak w praktyce dbacie o bezpiecze\u0144stwo moich danych?\u201d"}),(0,ja.jsx)("li",{children:"\u201eCzy rzeczywi\u015bcie mo\u017cna stworzy\u0107 stron\u0119 premium w 48 godzin?\u201d"})]}),(0,ja.jsx)("p",{children:"Zamiast odpowiada\u0107 ka\u017cdemu z osobna, postanowili\u015bmy stworzy\u0107 tutaj przestrze\u0144, kt\xf3ra stanie si\u0119 baz\u0105 wiedzy dla ka\u017cdego, kto ceni jako\u015b\u0107 w internecie."}),(0,ja.jsx)("h2",{children:"Co znajdziesz w sekcji Aktualno\u015bci?"}),(0,ja.jsx)("p",{children:"Ka\u017cdy artyku\u0142 b\u0119dzie oparty na rzeczywistych sytuacjach z \u017cycia naszego studia oraz wiedzy, kt\xf3r\u0105 gromadzili\u015bmy przez lata intensywnej pracy."}),(0,ja.jsx)("p",{children:(0,ja.jsx)("strong",{children:"B\u0119dziemy pisa\u0107 o:"})}),(0,ja.jsxs)("ol",{children:[(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Case Studies"})," \u2013 analiza konkretnych projekt\xf3w, wyniki, wyzwania i rozwi\u0105zania, kt\xf3re przynios\u0142y realne efekty."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Technologia"})," \u2013 dlaczego wybieramy czysty kod zamiast gotowych system\xf3w CMS, jak optymalizujemy szybko\u015b\u0107 i gwarantujemy bezpiecze\u0144stwo."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Proces"})," \u2013 jak naprawd\u0119 pracujemy, ile trwa ka\u017cdy etap i co dzieje si\u0119 \u201eza kulisami\u201d Twojego projektu."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Nowo\u015bci i Trendy"})," \u2013 rola AI w designie, optymalizacja pod k\u0105tem Google oraz podej\u015bcie mobile-first w wersji premium."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Edukacja"})," \u2013 praktyczne poradniki dla przedsi\u0119biorc\xf3w, kt\xf3rzy chc\u0105 rozumie\u0107 swoj\u0105 stron\u0119 i \u015bwiadomie budowa\u0107 mark\u0119."]})]}),(0,ja.jsx)("h2",{children:"Dla kogo tworzymy te tre\u015bci?"}),(0,ja.jsx)("p",{children:(0,ja.jsx)("strong",{children:"Dla lider\xf3w biznesu i marek premium:"})}),(0,ja.jsxs)("ul",{children:[(0,ja.jsx)("li",{children:"Chcesz wiedzie\u0107, dlaczego warto inwestowa\u0107 w jako\u015b\u0107 kodu, a nie w p\xf3\u0142\u015brodki."}),(0,ja.jsx)("li",{children:"Zale\u017cy Ci na bezkompromisowej szybko\u015bci i bezpiecze\u0144stwie."}),(0,ja.jsx)("li",{children:"Szukasz partnera, kt\xf3ry my\u015bli o Twoim biznesie strategicznie, a nie tylko dostarcza gotowy produkt."})]}),(0,ja.jsx)("p",{children:(0,ja.jsx)("strong",{children:"Dla pasjonat\xf3w designu i technologii:"})}),(0,ja.jsxs)("ul",{children:[(0,ja.jsx)("li",{children:"Chcesz \u015bledzi\u0107 nasze podej\u015bcie do nowoczesnej architektury aplikacji."}),(0,ja.jsx)("li",{children:"Interesuje Ci\u0119, dlaczego stawiamy na modularno\u015b\u0107 komponent\xf3w i centralizacj\u0119 danych."}),(0,ja.jsx)("li",{children:"Szukasz do\u015bwiadcze\u0144 prosto z linii produkcyjnej studia, gdzie liczy si\u0119 ka\u017cda milisekunda \u0142adowania."})]}),(0,ja.jsx)("h2",{children:"Nasza obietnica"}),(0,ja.jsx)("p",{children:"Stawiamy na jako\u015b\u0107, a nie na ilo\u015b\u0107. Nie obiecujemy artyku\u0142\xf3w codziennie \u2013 obiecujemy, \u017ce ka\u017cdy wpis b\u0119dzie rzetelnym materia\u0142em, pe\u0142nym autentycznej wiedzy, a nie pust\u0105 tre\u015bci\u0105 tworzon\u0105 pod algorytmy."}),(0,ja.jsx)("h2",{children:"Dzi\u0119kujemy"}),(0,ja.jsx)("p",{children:"Dzi\u0119kujemy Wam \u2013 naszym klientom. To Wasze pytania i sukcesy zainspirowa\u0142y nas do publicznego dzielenia si\u0119 wiedz\u0105."}),(0,ja.jsx)("p",{children:"Zapraszamy do lektury kolejnych wpis\xf3w. \ud83c\udfaf"}),(0,ja.jsx)("hr",{}),(0,ja.jsxs)("p",{children:[(0,ja.jsx)("strong",{children:"Studio Klara Queen"}),(0,ja.jsx)("br",{}),"Projektujemy luksusowe do\u015bwiadczenia cyfrowe."]})]})};const Ap=function(){const e=Ps.find(e=>"czysty-kod-react"===e.id);return(0,ja.jsxs)(Tp,{article:e,children:[(0,ja.jsx)("h1",{children:"Czysty kod czy gotowy szablon? Dlaczego stawiamy na technologi\u0119 jutra"}),(0,ja.jsx)("p",{children:(0,ja.jsx)("strong",{children:"20 marca 2026"})}),(0,ja.jsx)("p",{children:"Wielu przedsi\u0119biorc\xf3w staje przed dylematem: wybra\u0107 popularne systemy oparte na gotowych szablonach (tzw. CMS), czy zainwestowa\u0107 w stron\u0119 pisan\u0105 od zera w czystym kodzie? Cho\u0107 gotowe rozwi\u0105zania kusz\u0105 nisk\u0105 cen\u0105 na start, ta pozorna oszcz\u0119dno\u015b\u0107 cz\u0119sto staje si\u0119 barier\u0105 dla rozwoju Twojej marki w sieci."}),(0,ja.jsx)("h2",{children:"Pu\u0142apka \u201eci\u0119\u017ckich\u201d system\xf3w"}),(0,ja.jsx)("p",{children:"Popularne platformy do zarz\u0105dzania tre\u015bci\u0105 zosta\u0142y zaprojektowane tak, by ka\u017cdy m\xf3g\u0142 z\u0142o\u017cy\u0107 z nich stron\u0119. Niestety, ta uniwersalno\u015b\u0107 ma swoj\u0105 cen\u0119. Aby system dzia\u0142a\u0142, musi \u0142adowa\u0107 setki skrypt\xf3w i funkcji, kt\xf3rych Twoja strona prawdopodobnie nigdy nie wykorzysta."}),(0,ja.jsx)("p",{children:(0,ja.jsx)("strong",{children:"Efekt?"})}),(0,ja.jsx)("p",{children:"Strona oparta na gotowym szablonie jest jak samoch\xf3d z nadmiarem zb\u0119dnego baga\u017cu:"}),(0,ja.jsxs)("ul",{children:[(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Traci dynamik\u0119:"})," \u0142aduje si\u0119 zauwa\u017calnie wolniej, co irytuje klient\xf3w."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Jest podatna na b\u0142\u0119dy:"})," ka\u017cda aktualizacja zewn\u0119trznych dodatk\xf3w mo\u017ce \u201erozsypa\u0107\u201d wygl\u0105d strony."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"M\u0119czy serwer:"})," generuje niepotrzebne zapytania, spowalniaj\u0105c dzia\u0142anie witryny na smartfonach."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Wymaga ci\u0105g\u0142ej opieki:"})," musisz stale dba\u0107 o poprawki bezpiecze\u0144stwa i \u0142ata\u0107 luki w popularnych wtyczkach."]})]}),(0,ja.jsx)("p",{children:"W \u015bwiecie biznesu premium ka\u017cda sekunda oczekiwania na za\u0142adowanie strony to ryzyko, \u017ce klient przejdzie do konkurencji."}),(0,ja.jsx)("h2",{children:"Szybko\u015b\u0107 to Twoja najwi\u0119ksza przewaga"}),(0,ja.jsx)("p",{children:"Algorytmy wyszukiwarek (takie jak Core Web Vitals) faworyzuj\u0105 witryny, kt\xf3re szanuj\u0105 czas u\u017cytkownika. Gdy Twoja strona dzia\u0142a w u\u0142amku sekundy, klient odnosi wra\u017cenie profesjonalizmu jeszcze przed przeczytaniem pierwszego zdania."}),(0,ja.jsxs)("p",{children:["W naszym studiu budujemy strony w technologii ",(0,ja.jsx)("strong",{children:"React"}),", poniewa\u017c:"]}),(0,ja.jsx)("h3",{children:"1. P\u0142ynno\u015b\u0107 \u2013 Do\u015bwiadczenie jak w aplikacji"}),(0,ja.jsx)("p",{children:"W przeciwie\u0144stwie do tradycyjnych system\xf3w, React nie prze\u0142adowuje ca\u0142ego okna przy ka\u017cdym klikni\u0119ciu. Nawigacja jest natychmiastowa, p\u0142ynna i bez zb\u0119dnych \u201emrugni\u0119\u0107\u201d ekranu. To standard, do kt\xf3rego przyzwyczai\u0142y nas najlepsze aplikacje mobilne na \u015bwiecie."}),(0,ja.jsx)("h3",{children:"2. Bezpiecze\u0144stwo \u2013 Twierdza bez tylnych drzwi"}),(0,ja.jsx)("p",{children:"Popularne systemy s\u0105 celem masowych atak\xf3w, poniewa\u017c hakerzy znaj\u0105 ich s\u0142abe punkty i luki w og\xf3lnodost\u0119pnych wtyczkach. Buduj\u0105c kod od zera, tworzymy rozwi\u0105zanie unikalne. Nie ma \u201estandardowych\u201d dziur, kt\xf3re mo\u017cna \u0142atwo wykorzysta\u0107."}),(0,ja.jsx)("h3",{children:"3. Skalowalno\u015b\u0107 \u2013 Projekt, kt\xf3ry ro\u015bnie z Tob\u0105"}),(0,ja.jsx)("p",{children:"Gotowe szablony cz\u0119sto staj\u0105 si\u0119 \u201eciasne\u201d, gdy chcesz doda\u0107 nowe, niestandardowe funkcje. Czysty kod React to pe\u0142na swoboda. To ta sama technologia, kt\xf3ra nap\u0119dza najwi\u0119ksze serwisy spo\u0142eczno\u015bciowe \u2013 jest gotowa na ka\u017cdy poziom Twojego sukcesu."}),(0,ja.jsx)("h3",{children:"4. Unikalny Design \u2013 Zero kompromis\xf3w"}),(0,ja.jsx)("p",{children:"Nie walczymy z ograniczeniami szablonu. Ka\u017cdy element Twojej strony projektujemy tak, by idealnie oddawa\u0142 charakter Twojej marki. Bez ci\u0119\u017ckich wtyczek, bez zb\u0119dnego kodu, z zachowaniem absolutnej lekko\u015bci designu."}),(0,ja.jsx)("h2",{children:"Dla kogo s\u0105 gotowe systemy?"}),(0,ja.jsx)("p",{children:"Proste platformy CMS s\u0105 dobrym rozwi\u0105zaniem dla:"}),(0,ja.jsxs)("ul",{children:[(0,ja.jsx)("li",{children:"Hobbystycznych blog\xf3w o ogromnej liczbie wpis\xf3w."}),(0,ja.jsx)("li",{children:"Ma\u0142ych stron informacyjnych z bardzo niskim bud\u017cetem."}),(0,ja.jsx)("li",{children:"Os\xf3b, kt\xf3re chc\u0105 codziennie same zmienia\u0107 kod strony."})]}),(0,ja.jsx)("p",{children:"Ale je\u015bli Tw\xf3j biznes wymaga:"}),(0,ja.jsxs)("ul",{children:[(0,ja.jsx)("li",{children:"B\u0142yskawicznej pr\u0119dko\u015bci dzia\u0142ania dla wy\u017cszej sprzeda\u017cy,"}),(0,ja.jsx)("li",{children:"Nienagannego wizerunku marki premium,"}),(0,ja.jsx)("li",{children:"Bezpiecze\u0144stwa danych Twoich klient\xf3w..."})]}),(0,ja.jsx)("p",{children:"...czysty kod jest po prostu bezkonkurencyjn\u0105 inwestycj\u0105."}),(0,ja.jsx)("h2",{children:"Podsumowanie"}),(0,ja.jsxs)("p",{children:["Wyb\xf3r technologii to fundament Twojego biznesu. Zamiast pyta\u0107, co jest ta\u0144sze dzisiaj, warto zapyta\u0107:"," ",(0,ja.jsx)("strong",{children:"\u201eKt\xf3re rozwi\u0105zanie pozwoli mi zarabia\u0107 wi\u0119cej i spa\u0107 spokojnie przez lata?\u201d"})]}),(0,ja.jsx)("p",{children:"Dla nas odpowied\u017a jest jasna."}),(0,ja.jsx)("hr",{}),(0,ja.jsxs)("p",{children:[(0,ja.jsx)("strong",{children:"Studio Klara Queen"}),(0,ja.jsx)("br",{}),"Projektujemy luksusowe do\u015bwiadczenia cyfrowe."]})]})};const Rp=function(){const e=Ps.find(e=>"unikalne-grafiki-ai"===e.id);return(0,ja.jsxs)(Tp,{article:e,children:[(0,ja.jsx)("h1",{children:"Nowo\u015b\u0107: Unikalne grafiki AI w cenie ka\u017cdej strony"}),(0,ja.jsx)("p",{children:(0,ja.jsx)("strong",{children:"25 marca 2026"})}),(0,ja.jsx)("p",{children:"Doskonale wiemy, \u017ce jednym z najwi\u0119kszych wyzwa\u0144 przy tworzeniu presti\u017cowej strony internetowej jest brak wysokiej jako\u015bci, profesjonalnych zdj\u0119\u0107."}),(0,ja.jsx)("p",{children:"Prywatne sesje fotograficzne bywaj\u0105 kosztowne i czasoch\u0142onne. Darmowe zdj\u0119cia z popularnych bank\xf3w (jak Pexels czy Unsplash)? Korzystaj\u0105 z nich tysi\u0105ce firm, przez co trudno o unikalno\u015b\u0107. Zakup p\u0142atnych stock\xf3w to z kolei kolejny wydatek, kt\xf3ry nie zawsze gwarantuje idealne dopasowanie do wizji marki."}),(0,ja.jsx)("p",{children:"W Studio Klara Queen postanowili\u015bmy to zmieni\u0107."}),(0,ja.jsx)("h2",{children:"Problem: Wizualna powtarzalno\u015b\u0107 w sieci"}),(0,ja.jsx)("p",{children:"Przegl\u0105daj\u0105c internet, mo\u017cna zauwa\u017cy\u0107, \u017ce wiele stron z bran\u017cy premium cierpi na brak charakteru. Dlaczego? Poniewa\u017c wi\u0119kszo\u015b\u0107 opiera si\u0119 na tych samych, opatrzonych grafikach:"}),(0,ja.jsxs)("ul",{children:[(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Sektor Beauty:"})," ta sama modelka w maseczce na setkach witryn."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Us\u0142ugi profesjonalne:"})," powtarzalne zdj\u0119cia ludzi w garniturach w sterylnych biurach."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Kreatywne studia:"})," te same abstrakcyjne, kolorowe gradienty."]})]}),(0,ja.jsx)("p",{children:"W efekcie Twoja marka mo\u017ce zacz\u0105\u0107 zlewa\u0107 si\u0119 z konkurencj\u0105. W \u015bwiecie luksusu brak wyr\xf3\u017cnienia to najprostsza droga do bycia niezauwa\u017conym."}),(0,ja.jsx)("h2",{children:"Rozwi\u0105zanie: Autorskie generowanie grafik przez AI"}),(0,ja.jsxs)("p",{children:["Od marca 2026 roku ka\u017cdy nowy projekt realizowany w Studio Klara Queen zawiera pakiet",(0,ja.jsxs)("strong",{children:[" ","unikalnych, wysokiej jako\u015bci grafik wygenerowanych przez Sztuczn\u0105 Inteligencj\u0119"]}),"."]}),(0,ja.jsx)("p",{children:"Co to oznacza dla Twojej marki?"}),(0,ja.jsxs)("ul",{children:[(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Pe\u0142na personalizacja:"})," grafiki tworzone pod konkretn\u0105 palet\u0119 barw i styl Twojej marki."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Unikalno\u015b\u0107 absolutna:"})," nawet przy podobnych wytycznych, AI generuje jedyne w swoim rodzaju obrazy. Nikt nie b\u0119dzie mia\u0142 identycznej witryny."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Sp\xf3jno\u015b\u0107 wizualna:"})," zestawienie grafik, kt\xf3re idealnie wsp\xf3\u0142gra z Twoj\u0105 wizj\u0105 artystyczn\u0105."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Bezpiecze\u0144stwo prawne:"})," otrzymujesz pe\u0142ne prawa komercyjne do wykorzystanych obraz\xf3w."]})]}),(0,ja.jsx)("h2",{children:"Jak to wygl\u0105da w praktyce?"}),(0,ja.jsx)("p",{children:"Zamiast szuka\u0107 kompromis\xf3w w gotowych bazach zdj\u0119\u0107, my tworzymy obrazy od podstaw. Je\u015bli prowadzisz np. salon urody, proces wygl\u0105da tak:"}),(0,ja.jsx)("p",{children:(0,ja.jsx)("strong",{children:"Koncepcja \u2192 Precyzyjny Prompt \u2192 Selekcja AI \u2192 Unikalna Grafika"})}),(0,ja.jsx)("p",{children:(0,ja.jsx)("em",{children:"Przyk\u0142ad: \u201eMinimalistyczne, luksusowe wn\u0119trze salonu, naturalne o\u015bwietlenie, be\u017cowo-z\u0142ota kolorystyka, detale premium, estetyka profesjonalnej fotografii modowej\u201d."})}),(0,ja.jsx)("p",{children:"Rezultat to warstwa wizualna, kt\xf3ra:"}),(0,ja.jsxs)("ul",{children:[(0,ja.jsx)("li",{children:"\u2705 Jest nierozerwalnie zwi\u0105zana z Twoim brandingiem."}),(0,ja.jsx)("li",{children:"\u2705 Buduje wizerunek marki niedost\u0119pnej w masowym obiegu."}),(0,ja.jsx)("li",{children:"\u2705 Wygl\u0105da jak efekt drogiej sesji zdj\u0119ciowej, a nie sztuczny tw\xf3r."})]}),(0,ja.jsx)("h2",{children:"Koszt dla Ciebie?"}),(0,ja.jsxs)("p",{children:[(0,ja.jsx)("strong",{children:"Dok\u0142adnie zero."})," To standard wliczony w cen\u0119 realizacji Twojej strony."]}),(0,ja.jsxs)("p",{children:["Inwestujemy nasz czas w dopracowanie grafik AI, poniewa\u017c statystyki s\u0105 nieub\u0142agane: to, co potencjalny klient zobaczy w pierwszej sekundzie, decyduje o ",(0,ja.jsx)("strong",{children:"70% jego opinii"}),"o Twoim profesjonalizmie. Nie pozwalamy, by o Twoim sukcesie decydowa\u0142 przypadek lub s\u0142abej jako\u015bci materia\u0142y. Opraw\u0119 premium otrzymujesz u nas w pakiecie."]}),(0,ja.jsx)("h2",{children:"Czy AI zast\u0119puje tradycyjn\u0105 fotografi\u0119?"}),(0,ja.jsx)("p",{children:"Traktujemy AI jako pot\u0119\u017cne uzupe\u0142nienie. Je\u015bli posiadasz w\u0142asne, profesjonalne zdj\u0119cia Twoich zrealizowanych projekt\xf3w czy zespo\u0142u \u2013 zawsze stanowi\u0105 one priorytet."}),(0,ja.jsx)("p",{children:"Jednak w przypadku sekcji dekoracyjnych, t\u0142a strony czy g\u0142\xf3wnego zdj\u0119cia powitalnego (Hero Image), technologia AI pozwala nam stworzy\u0107 klimat, kt\xf3ry bez niej by\u0142by nieosi\u0105galny bez ogromnych nak\u0142ad\xf3w finansowych."}),(0,ja.jsx)("h2",{children:"Etyka i transparentno\u015b\u0107"}),(0,ja.jsxs)("p",{children:["Pytamy wprost: \u201eCzy wypada u\u017cywa\u0107 grafik wygenerowanych przez AI?\u201d. Nasza odpowied\u017a:"," ",(0,ja.jsx)("strong",{children:"Tak, o ile robimy to z klas\u0105 i pe\u0142n\u0105 szczero\u015bci\u0105."})]}),(0,ja.jsx)("p",{children:"W 2026 roku AI to nie p\xf3j\u015bcie na \u0142atwizn\u0119, lecz inteligentne narz\u0119dzie budowania presti\u017cu. My trzymamy si\u0119 trzech zasad:"}),(0,ja.jsxs)("ul",{children:[(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Kuratorska selekcja:"})," Ka\u017cda grafika przechodzi nasz\u0105 osobist\u0105 weryfikacj\u0119 \u2013 musi by\u0107 ostra, estetyczna i luksusowa."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Iteracja do skutku:"})," Robimy tyle wersji, ile potrzeba, aby obraz w 100% oddawa\u0142 charakter Twojego biznesu."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Uczciwo\u015b\u0107 przekazu:"})," Wykorzystujemy AI tam, gdzie buduje ona emocje i nastr\xf3j, pozwalaj\u0105c Twoim realnym us\u0142ugom b\u0142yszcze\u0107 w odpowiedniej oprawie."]})]}),(0,ja.jsx)("h2",{children:"Podsumowanie"}),(0,ja.jsxs)("p",{children:["W Studio Klara Queen chcemy, aby\u015b si\u0119 wyr\xf3\u017cnia\u0142a. Grafiki AI to narz\u0119dzie, kt\xf3re nam na to pozwala. Twoja strona nie b\u0119dzie wygl\u0105da\u0107 jak jedna z wielu. B\u0119dzie wygl\u0105da\u0107 jak ",(0,ja.jsx)("strong",{children:"Twoja"}),"."]}),(0,ja.jsx)("hr",{}),(0,ja.jsxs)("p",{children:[(0,ja.jsx)("strong",{children:"Studio Klara Queen"}),(0,ja.jsx)("br",{}),"Projektujemy luksusowe do\u015bwiadczenia cyfrowe."]})]})};const Op=function(){const e=Ps.find(e=>"proces-48h"===e.id);return(0,ja.jsxs)(Tp,{article:e,children:[(0,ja.jsx)("h1",{children:"Jak oddajemy gotowy projekt w 48h roboczych? Poznaj nasz proces."}),(0,ja.jsx)("p",{children:(0,ja.jsx)("strong",{children:"30 marca 2026"})}),(0,ja.jsx)("p",{children:"Dla wielu agencji stworzenie prostej strony internetowej trwa miesi\u0105cami. Dziesi\u0105tki spotka\u0144, nieko\u0144cz\u0105ce si\u0119 korekty i kolejne wersje nag\u0142\xf3wk\xf3w sprawiaj\u0105, \u017ce projekt traci dynamik\u0119, a Ty \u2013 czas na budowanie biznesu."}),(0,ja.jsxs)("p",{children:["W Studio Klara Queen proces zamyka si\u0119 w"," ",(0,ja.jsx)("strong",{children:"48 godzinach roboczych"}),". Jak to mo\u017cliwe bez kompromis\xf3w w kwestii jako\u015bci? Zapraszamy za kulisy naszego warsztatu."]}),(0,ja.jsx)("h2",{children:"Czym s\u0105 nasze \u201e48 godzin\u201d?"}),(0,ja.jsx)("p",{children:"Zasada jest prosta: Tw\xf3j projekt jest gotowy do publikacji w ci\u0105gu 48 godzin roboczych od momentu zaksi\u0119gowania wp\u0142aty i dostarczenia przez Ciebie kompletu informacji."}),(0,ja.jsx)("p",{children:(0,ja.jsx)("strong",{children:"48 godzin roboczych = pe\u0142ne skupienie na Twoim sukcesie."})}),(0,ja.jsx)("p",{children:"Jak to wygl\u0105da w praktyce:"}),(0,ja.jsxs)("ul",{children:[(0,ja.jsx)("li",{children:"Otrzymujemy detale projektu (wytyczne, kolorystyka, tre\u015bci)."}),(0,ja.jsx)("li",{children:"Rozpoczynamy intensywne prace projektowe i programistyczne."}),(0,ja.jsx)("li",{children:"Po 48 godzinach roboczych Twoja strona jest gotowa i opublikowana."})]}),(0,ja.jsxs)("blockquote",{children:[(0,ja.jsx)("strong",{children:"Wa\u017cna uwaga techniczna:"})," Proces propagacji domeny lub konfiguracja zewn\u0119trznego hostingu mo\u017ce czasem zaj\u0105\u0107 od kilku do 24 godzin. Jest to proces niezale\u017cny od nas, wynikaj\u0105cy z globalnych ustawie\u0144 dostawc\xf3w sieciowych. Sama strona jest jednak gotowa i przetestowana dok\u0142adnie w wyznaczonym terminie."]}),(0,ja.jsx)("h2",{children:"Filary naszej efektywno\u015bci"}),(0,ja.jsx)("h3",{children:"1. Inteligentny Brief"}),(0,ja.jsx)("p",{children:"Zanim napiszemy pierwsz\u0105 lini\u0119 kodu, przeprowadzamy Ci\u0119 przez precyzyjn\u0105 ankiet\u0119 online. Zamiast godzinnych rozm\xf3w o niczym, zbieramy konkretne dane:"}),(0,ja.jsxs)("ul",{children:[(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"O marce:"})," Bran\u017ca, warto\u015bci i profil idealnego klienta."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"O celach:"})," Struktura podstron, kluczowe sekcje i oczekiwane akcje u\u017cytkownik\xf3w."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"O estetyce:"})," Paleta barw, typografia i po\u017c\u0105dany klimat wizualny."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"O funkcjonalno\u015bci:"})," Formularze, integracje (np. Calendly) czy galerie prac."]})]}),(0,ja.jsx)("p",{children:"Dzi\u0119ki temu eliminujemy szum komunikacyjny i od pierwszej minuty wiemy, w kt\xf3rym kierunku pod\u0105\u017ca\u0107."}),(0,ja.jsx)("h3",{children:"2. Autorski fundament (nasza przewaga technologiczna)"}),(0,ja.jsxs)("p",{children:["Przez lata pracy wypracowali\u015bmy"," ",(0,ja.jsx)("strong",{children:"zaawansowan\u0105 bibliotek\u0119 komponent\xf3w React"}),"oraz autorskie standardy kodowania. Nie u\u017cywamy kupnych szablon\xf3w \u2013 korzystamy z w\u0142asnego, sprawdzonego w boju fundamentu."]}),(0,ja.jsx)("p",{children:"Nasz system obejmuje:"}),(0,ja.jsxs)("ul",{children:[(0,ja.jsxs)("li",{children:["\u2705 ",(0,ja.jsx)("strong",{children:"Perfekcyjne Responsive Web Design:"})," dopracowane uk\u0142ady dla ka\u017cdego urz\u0105dzenia."]}),(0,ja.jsxs)("li",{children:["\u2705 ",(0,ja.jsx)("strong",{children:"Globalny system styl\xf3w:"})," sp\xf3jna typografia i spacingi."]}),(0,ja.jsxs)("li",{children:["\u2705 ",(0,ja.jsx)("strong",{children:"Optymalizacj\u0119 SEO:"})," wbudowane tagi i struktura danych na starcie."]}),(0,ja.jsxs)("li",{children:["\u2705 ",(0,ja.jsx)("strong",{children:"Maksymaln\u0105 wydajno\u015b\u0107:"})," techniki lazy loading i code splitting."]})]}),(0,ja.jsx)("p",{children:"Zaczynaj\u0105c projekt, mamy ju\u017c gotowy \u201esilnik\u201d i podwozie \u2013 skupiamy si\u0119 na budowie Twojej unikalnej \u201ekaroserii\u201d i wn\u0119trza."}),(0,ja.jsx)("h3",{children:"3. Nowoczesny stack technologiczny"}),(0,ja.jsx)("p",{children:"Korzystamy z narz\u0119dzi, kt\xf3re eliminuj\u0105 przestoje:"}),(0,ja.jsxs)("ul",{children:[(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"React"})," \u2013 czysta struktura i b\u0142yskawiczne dzia\u0142anie."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Styled-components"})," \u2013 modularno\u015b\u0107 styl\xf3w bez chaosu w plikach."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Vite"})," \u2013 \u015brodowisko programistyczne nowej generacji."]}),(0,ja.jsxs)("li",{children:[(0,ja.jsx)("strong",{children:"Vercel"})," \u2013 b\u0142yskawiczny deployment i najwy\u017csza stabilno\u015b\u0107 serwer\xf3w."]})]}),(0,ja.jsx)("h2",{children:"Dlaczego to si\u0119 udaje?"}),(0,ja.jsxs)("p",{children:[(0,ja.jsx)("strong",{children:"Pe\u0142na koncentracja:"})," Pracujemy tylko nad JEDNYM projektem jednocze\u015bnie. Twoja marka ma nasz\u0105 ca\u0142kowit\u0105 uwag\u0119 przez ca\u0142e 48 godzin."]}),(0,ja.jsxs)("p",{children:[(0,ja.jsx)("strong",{children:"Do\u015bwiadczenie:"})," Nie eksperymentujemy na Twoim biznesie. Wdra\u017camy rozwi\u0105zania, o kt\xf3rych wiemy, \u017ce dzia\u0142aj\u0105 i konwertuj\u0105."]}),(0,ja.jsxs)("p",{children:[(0,ja.jsx)("strong",{children:"Zgrany zesp\xf3\u0142:"})," Ka\u017cdy projekt prowadzi dedykowany ekspert. W razie potrzeby \u0142\u0105czymy si\u0142y, by odda\u0107 projekt jeszcze przed terminem."]}),(0,ja.jsx)("h2",{children:"Por\xf3wnanie efektywno\u015bci"}),(0,ja.jsxs)("table",{className:"process-table",children:[(0,ja.jsx)("thead",{children:(0,ja.jsxs)("tr",{children:[(0,ja.jsx)("th",{children:"Obszar"}),(0,ja.jsx)("th",{children:"Studio Klara Queen"}),(0,ja.jsx)("th",{children:"Tradycyjne Agencje"})]})}),(0,ja.jsxs)("tbody",{children:[(0,ja.jsxs)("tr",{children:[(0,ja.jsx)("td",{children:"Przygotowanie"}),(0,ja.jsx)("td",{children:"Autorska biblioteka React"}),(0,ja.jsx)("td",{children:"Poszukiwanie szablon\xf3w"})]}),(0,ja.jsxs)("tr",{children:[(0,ja.jsx)("td",{children:"Komunikacja"}),(0,ja.jsx)("td",{children:"Bezpo\u015bredni kontakt w czasie rzeczywistym"}),(0,ja.jsx)("td",{children:"D\u0142ugie \u0142a\u0144cuchy mailowe"})]}),(0,ja.jsxs)("tr",{children:[(0,ja.jsx)("td",{children:"Skupienie"}),(0,ja.jsx)("td",{children:"Jeden projekt w danym czasie"}),(0,ja.jsx)("td",{children:"Kilka projekt\xf3w prowadzonych r\xf3wnolegle"})]}),(0,ja.jsxs)("tr",{children:[(0,ja.jsx)("td",{children:"Testy jako\u015bci"}),(0,ja.jsx)("td",{children:"Automatyczne i ci\u0105g\u0142e"}),(0,ja.jsx)("td",{children:"Dopiero w fazie ko\u0144cowej"})]}),(0,ja.jsxs)("tr",{children:[(0,ja.jsx)("td",{children:(0,ja.jsx)("strong",{children:"Czas realizacji"})}),(0,ja.jsx)("td",{children:(0,ja.jsx)("strong",{children:"48h roboczych"})}),(0,ja.jsx)("td",{children:(0,ja.jsx)("strong",{children:"Od 4 do 8 tygodni"})})]})]})]}),(0,ja.jsx)("h2",{children:"Czas to najcenniejsza waluta."}),(0,ja.jsx)("p",{children:"Podczas gdy Twoja konkurencja wci\u0105\u017c doprecyzowuje makiety, Ty mo\u017cesz ju\u017c przyjmowa\u0107 pierwsze zam\xf3wienia. Skracamy miesi\u0105ce oczekiwania do dw\xf3ch intensywnych dni roboczych. Inwestujesz w narz\u0119dzie, kt\xf3re zarabia na siebie od zaraz."}),(0,ja.jsx)("hr",{}),(0,ja.jsxs)("p",{children:[(0,ja.jsx)("strong",{children:"Studio Klara Queen"}),(0,ja.jsx)("br",{}),"Tworzymy luksusowe do\u015bwiadczenia cyfrowe."]})]})},Np={"startujemy-z-aktualnosciami":Ip,"czysty-kod-react":Ap,"unikalne-grafiki-ai":Rp,"proces-48h":Op};const Dp=function(){const{id:e}=fe(),t=Np[e];return t?(0,ja.jsx)(t,{}):(0,ja.jsx)(vp,{children:(0,ja.jsxs)(kp,{children:[(0,ja.jsx)(zp,{children:(0,ja.jsx)(jp,{children:"Artyku\u0142 nie znaleziony"})}),(0,ja.jsx)(Cp,{children:(0,ja.jsx)(wt,{to:"/blog",children:(0,ja.jsx)(Pp,{children:"Wr\xf3\u0107 do aktualno\u015bci"})})})]})})},$p=ga.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
`,Lp=ga.div`
  text-align: center;
  margin-bottom: 80px;
`,Mp=ga.h1`
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${xa.testimonialAccent} 0%,
    #764ba2 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
`,Fp=ga.p`
  font-size: clamp(16px, 2vw, 20px);
  color: ${xa.testimonialSubtext};
  max-width: 600px;
  margin: 0 auto;
`,Up=ga.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    gap: 20px;
    grid-template-columns: 1fr;
  }
`,Bp=ga.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    background: ${xa.testimonialBgHover};
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`,Hp=ga.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  font-size: 16px;
`,Wp=ga.span`
  color: #ffd700;
`,Vp=ga.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${xa.testimonialText};
  margin-bottom: auto;
  margin-bottom: 25px;
  font-style: italic;
`,Kp=ga.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Gp=ga.strong`
  font-size: 16px;
  color: ${xa.white};
  font-weight: 600;
`,qp=ga.span`
  font-size: 14px;
  color: ${xa.testimonialSubtext};
`;const Yp=function(){return(0,ja.jsxs)($p,{children:[(0,ja.jsxs)(Lp,{children:[(0,ja.jsx)(Mp,{children:"Opinie naszych klient\xf3w"}),(0,ja.jsx)(Fp,{children:"Sprawd\u017a co m\xf3wi\u0105 o nas ci, kt\xf3rzy ju\u017c z nami pracowali"})]}),(0,ja.jsx)(Up,{children:ol.map(e=>(0,ja.jsxs)(Bp,{children:[(0,ja.jsx)(Hp,{children:[...Array(e.rating)].map((e,t)=>(0,ja.jsx)(Wp,{children:"\u2605"},t))}),(0,ja.jsxs)(Vp,{children:['"',e.text,'"']}),(0,ja.jsxs)(Kp,{children:[(0,ja.jsx)(Gp,{children:e.name}),(0,ja.jsx)(qp,{children:e.company})]})]},e.id))})]})},Qp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):55296===(64512&a)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},Jp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<e.length;a+=3){const t=e[a],i=a+1<e.length,o=i?e[a+1]:0,s=a+2<e.length,l=s?e[a+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let d=(15&o)<<2|l>>6,p=63&l;s||(p=64,i||(d=64)),r.push(n[c],n[u],n[d],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){const i=((7&a)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<e.length;){const t=n[e.charAt(a++)],i=a<e.length?n[e.charAt(a)]:0;++a;const o=a<e.length?n[e.charAt(a)]:64;++a;const s=a<e.length?n[e.charAt(a)]:64;if(++a,null==t||null==i||null==o||null==s)throw new Xp;const l=t<<2|i>>4;if(r.push(l),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==s){const e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Xp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zp=function(e){return function(e){const t=Qp(e);return Jp.encodeByteArray(t,!0)}(e).replace(/\./g,"")},eh=function(e){try{return Jp.decodeString(e,!0)}catch(ob){console.error("base64Decode failed: ",ob)}return null};const th=()=>function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof globalThis)return globalThis;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,nh=()=>{try{return th()||(()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(ob){return}const t=e&&eh(e[1]);return t&&JSON.parse(t)})()}catch(ob){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${ob}`)}},rh=e=>nh()?.emulatorHosts?.[e],ah=()=>nh()?.config,ih=e=>nh()?.[`_${e}`];class oh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function sh(){return"undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:""}class lh extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,lh.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ch.prototype.create)}}class ch{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e){const t=(arguments.length<=1?void 0:arguments[1])||{},n=`${this.service}/${e}`,r=this.errors[e],a=r?function(e,t){return e.replace(uh,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(r,t):"Error",i=`${this.serviceName}: ${a} (${n}).`;return new lh(n,i,t)}}const uh=/\{\$([^}]+)}/g;function dh(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const a of n){if(!r.includes(a))return!1;const n=e[a],i=t[a];if(ph(n)&&ph(i)){if(!dh(n,i))return!1}else if(n!==i)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function ph(e){return null!==e&&"object"===typeof e}function hh(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function fh(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function mh(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class gh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=wh),void 0===r.error&&(r.error=wh),void 0===r.complete&&(r.complete=wh);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(ob){}}),this.observers.push(r),a}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(ob){"undefined"!==typeof console&&console.error&&console.error(ob)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wh(){}function yh(e){return e&&e._delegate?e._delegate:e}function bh(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}class xh{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const vh="[DEFAULT]";class kh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new oh;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(ob){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(ob){if(n)return null;throw ob}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:vh})}catch(ob){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(ob){}}}}clearInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vh;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vh;return this.instances.has(e)}getOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vh;return this.instancesOptions.get(e)||{}}initialize(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[a,i]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(a)&&i.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const a=this.instances.get(n);return a&&e(a,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService(e){let{instanceIdentifier:t,options:n={}}=e,r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zh(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vh;return this.component?this.component.multipleInstances?e:vh:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function zh(e){return e===vh?void 0:e}class jh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}const Sh=[];var Eh;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Eh||(Eh={}));const _h={debug:Eh.DEBUG,verbose:Eh.VERBOSE,info:Eh.INFO,warn:Eh.WARN,error:Eh.ERROR,silent:Eh.SILENT},Ch=Eh.INFO,Ph={[Eh.DEBUG]:"log",[Eh.VERBOSE]:"log",[Eh.INFO]:"info",[Eh.WARN]:"warn",[Eh.ERROR]:"error"},Th=function(e,t){if(t<e.logLevel)return;const n=(new Date).toISOString(),r=Ph[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);for(var a=arguments.length,i=new Array(a>2?a-2:0),o=2;o<a;o++)i[o-2]=arguments[o];console[r](`[${n}]  ${e.name}:`,...i)};class Ih{constructor(e){this.name=e,this._logLevel=Ch,this._logHandler=Th,this._userLogHandler=null,Sh.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Eh))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?_h[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,Eh.DEBUG,...t),this._logHandler(this,Eh.DEBUG,...t)}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,Eh.VERBOSE,...t),this._logHandler(this,Eh.VERBOSE,...t)}info(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,Eh.INFO,...t),this._logHandler(this,Eh.INFO,...t)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,Eh.WARN,...t),this._logHandler(this,Eh.WARN,...t)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,Eh.ERROR,...t),this._logHandler(this,Eh.ERROR,...t)}}let Ah,Rh;const Oh=new WeakMap,Nh=new WeakMap,Dh=new WeakMap,$h=new WeakMap,Lh=new WeakMap;let Mh={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Nh.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Dh.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bh(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Fh(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Rh||(Rh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(Hh(this),n),Bh(Oh.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Bh(e.apply(Hh(this),n))}:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];const i=e.call(Hh(this),t,...r);return Dh.set(i,t.sort?t.sort():[t]),Bh(i)}}function Uh(e){return"function"===typeof e?Fh(e):(e instanceof IDBTransaction&&function(e){if(Nh.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});Nh.set(e,t)}(e),t=e,(Ah||(Ah=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,Mh):e);var t}function Bh(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(Bh(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&Oh.set(t,e)}).catch(()=>{}),Lh.set(t,e),t}(e);if($h.has(e))return $h.get(e);const t=Uh(e);return t!==e&&($h.set(e,t),Lh.set(t,e)),t}const Hh=e=>Lh.get(e);const Wh=["get","getKey","getAll","getAllKeys","count"],Vh=["put","add","delete","clear"],Kh=new Map;function Gh(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(Kh.get(t))return Kh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=Vh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!Wh.includes(n))return;const i=async function(e){const t=this.transaction(e,a?"readwrite":"readonly");let i=t.store;for(var o=arguments.length,s=new Array(o>1?o-1:0),l=1;l<o;l++)s[l-1]=arguments[l];return r&&(i=i.index(s.shift())),(await Promise.all([i[n](...s),a&&t.done]))[0]};return Kh.set(t,i),i}Mh=(e=>({...e,get:(t,n,r)=>Gh(t,n)||e.get(t,n,r),has:(t,n)=>!!Gh(t,n)||e.has(t,n)}))(Mh);class qh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const Yh="@firebase/app",Qh="0.14.11",Jh=new Ih("@firebase/app"),Xh="@firebase/app-compat",Zh="@firebase/analytics-compat",ef="@firebase/analytics",tf="@firebase/app-check-compat",nf="@firebase/app-check",rf="@firebase/auth",af="@firebase/auth-compat",of="@firebase/database",sf="@firebase/data-connect",lf="@firebase/database-compat",cf="@firebase/functions",uf="@firebase/functions-compat",df="@firebase/installations",pf="@firebase/installations-compat",hf="@firebase/messaging",ff="@firebase/messaging-compat",mf="@firebase/performance",gf="@firebase/performance-compat",wf="@firebase/remote-config",yf="@firebase/remote-config-compat",bf="@firebase/storage",xf="@firebase/storage-compat",vf="@firebase/firestore",kf="@firebase/ai",zf="@firebase/firestore-compat",jf="firebase",Sf="[DEFAULT]",Ef={[Yh]:"fire-core",[Xh]:"fire-core-compat",[ef]:"fire-analytics",[Zh]:"fire-analytics-compat",[nf]:"fire-app-check",[tf]:"fire-app-check-compat",[rf]:"fire-auth",[af]:"fire-auth-compat",[of]:"fire-rtdb",[sf]:"fire-data-connect",[lf]:"fire-rtdb-compat",[cf]:"fire-fn",[uf]:"fire-fn-compat",[df]:"fire-iid",[pf]:"fire-iid-compat",[hf]:"fire-fcm",[ff]:"fire-fcm-compat",[mf]:"fire-perf",[gf]:"fire-perf-compat",[wf]:"fire-rc",[yf]:"fire-rc-compat",[bf]:"fire-gcs",[xf]:"fire-gcs-compat",[vf]:"fire-fst",[zf]:"fire-fst-compat",[kf]:"fire-vertex","fire-js":"fire-js",[jf]:"fire-js-all"},_f=new Map,Cf=new Map,Pf=new Map;function Tf(e,t){try{e.container.addComponent(t)}catch(ob){Jh.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,ob)}}function If(e){const t=e.name;if(Pf.has(t))return Jh.debug(`There were multiple attempts to register component ${t}.`),!1;Pf.set(t,e);for(const n of _f.values())Tf(n,e);for(const n of Cf.values())Tf(n,e);return!0}function Af(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Rf(e){return null!==e&&void 0!==e&&void 0!==e.settings}const Of=new ch("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});class Nf{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new xh("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Of.create("app-deleted",{appName:this._name})}}const Df="12.12.0";function $f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!==typeof t){t={name:t}}const r={name:Sf,automaticDataCollectionEnabled:!0,...t},a=r.name;if("string"!==typeof a||!a)throw Of.create("bad-app-name",{appName:String(a)});if(n||(n=ah()),!n)throw Of.create("no-options");const i=_f.get(a);if(i){if(dh(n,i.options)&&dh(r,i.config))return i;throw Of.create("duplicate-app",{appName:a})}const o=new jh(a);for(const l of Pf.values())o.addComponent(l);const s=new Nf(n,r,o);return _f.set(a,s),s}function Lf(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Sf;const t=_f.get(e);if(!t&&e===Sf&&ah())return $f();if(!t)throw Of.create("no-app",{appName:e});return t}function Mf(e,t,n){let r=Ef[e]??e;n&&(r+=`-${n}`);const a=r.match(/\s|\//),i=t.match(/\s|\//);if(a||i){const e=[`Unable to register library "${r}" with version "${t}":`];return a&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Jh.warn(e.join(" "))}If(new xh(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const Ff="firebase-heartbeat-store";let Uf=null;function Bf(){return Uf||(Uf=function(e,t){let{blocked:n,upgrade:r,blocking:a,terminated:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=indexedDB.open(e,t),s=Bh(o);return r&&o.addEventListener("upgradeneeded",e=>{r(Bh(o.result),e.oldVersion,e.newVersion,Bh(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Ff)}catch(ob){console.warn(ob)}}}).catch(e=>{throw Of.create("idb-open",{originalErrorMessage:e.message})})),Uf}async function Hf(e,t){try{const n=(await Bf()).transaction(Ff,"readwrite"),r=n.objectStore(Ff);await r.put(t,Wf(e)),await n.done}catch(ob){if(ob instanceof lh)Jh.warn(ob.message);else{const t=Of.create("idb-set",{originalErrorMessage:ob?.message});Jh.warn(t.message)}}}function Wf(e){return`${e.name}!${e.options.appId}`}class Vf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Gf(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Kf();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(ob){Jh.warn(ob)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=Kf(),{heartbeatsToSend:t,unsentEntries:n}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024;const n=[];let r=e.slice();for(const a of e){const e=n.find(e=>e.agent===a.agent);if(e){if(e.dates.push(a.date),qf(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),qf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Zp(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(ob){return Jh.warn(ob),""}}}function Kf(){return(new Date).toISOString().substring(0,10)}class Gf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"===typeof indexedDB}catch(ob){return!1}}()&&new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{t(a.error?.message||"")}}catch(n){t(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Bf()).transaction(Ff),n=await t.objectStore(Ff).get(Wf(e));return await t.done,n}catch(ob){if(ob instanceof lh)Jh.warn(ob.message);else{const t=Of.create("idb-get",{originalErrorMessage:ob?.message});Jh.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Hf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Hf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function qf(e){return Zp(JSON.stringify({version:2,heartbeats:e})).length}var Yf;Yf="",If(new xh("platform-logger",e=>new qh(e),"PRIVATE")),If(new xh("heartbeat",e=>new Vf(e),"PRIVATE")),Mf(Yh,Qh,Yf),Mf(Yh,Qh,"esm2020"),Mf("fire-js","");function Qf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jf=Qf,Xf=new ch("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Zf=new Ih("@firebase/auth");function em(e){if(Zf.logLevel<=Eh.ERROR){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];Zf.error(`Auth (${Df}): ${e}`,...n)}}function tm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw om(e,...n)}function nm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return om(e,...n)}function rm(e,t,n){const r={...Jf(),[t]:n};return new ch("auth","Firebase",r).create(t,{appName:e.name})}function am(e){return rm(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function im(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&tm(e,"argument-error"),rm(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function om(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if("string"!==typeof e){const t=n[0],r=[...n.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(t,...r)}return Xf.create(e,...n)}function sm(e,t){if(!e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];throw om(t,...r)}}function lm(e){const t="INTERNAL ASSERTION FAILED: "+e;throw em(t),new Error(t)}function cm(e,t){e||lm(t)}function um(){return"undefined"!==typeof self&&self.location?.href||""}function dm(){return"http:"===pm()||"https:"===pm()}function pm(){return"undefined"!==typeof self&&self.location?.protocol||null}function hm(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(dm()||function(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine}class fm{constructor(e,t){this.shortDelay=e,this.longDelay=t,cm(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sh())||"object"===typeof navigator&&"ReactNative"===navigator.product}get(){return hm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function mm(e,t){cm(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}class gm{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void lm("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void lm("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void lm("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const wm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},ym=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bm=new fm(3e4,6e4);function xm(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function vm(e,t,n,r){return km(e,arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},async()=>{let a={},i={};r&&("GET"===t?i=r:a={body:JSON.stringify(r)});const o=hh({key:e.config.apiKey,...i}).slice(1),s=await e._getAdditionalHeaders();s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:s,...a};return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&bh(e.emulatorConfig.host)&&(l.credentials="include"),gm.fetch()(await jm(e,e.config.apiHost,n,o),l)})}async function km(e,t,n){e._canInitEmulator=!1;const r={...wm,...t};try{const t=new Em(e),a=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await a.json();if("needConfirmation"in i)throw _m(e,"account-exists-with-different-credential",i);if(a.ok&&!("errorMessage"in i))return i;{const t=a.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw _m(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw _m(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw _m(e,"user-disabled",i);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw rm(e,s,o);tm(e,s)}}catch(ob){if(ob instanceof lh)throw ob;tm(e,"network-request-failed",{message:String(ob)})}}async function zm(e,t,n,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const i=await vm(e,t,n,r,a);return"mfaPendingCredential"in i&&tm(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function jm(e,t,n,r){const a=`${t}${n}?${r}`,i=e,o=i.config.emulator?mm(e.config,a):`${e.config.apiScheme}://${a}`;if(ym.includes(n)&&(await i._persistenceManagerAvailable,"COOKIE"===i._getPersistenceType())){return i._getPersistence()._getFinalTarget(o).toString()}return o}function Sm(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Em{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(nm(this.auth,"network-request-failed")),bm.get())})}}function _m(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const a=nm(e,t,r);return a.customData._tokenResponse=n,a}function Cm(e){return void 0!==e&&void 0!==e.enterprise}class Pm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Sm(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Tm(e,t){return vm(e,"GET","/v2/recaptchaConfig",xm(e,t))}async function Im(e,t){return vm(e,"POST","/v1/accounts:lookup",t)}function Am(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(ob){}}function Rm(e){return 1e3*Number(e)}function Om(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return em("JWT malformed, contained fewer than 3 sections"),null;try{const e=eh(n);return e?JSON.parse(e):(em("Failed to decode base64 JWT payload"),null)}catch(ob){return em("Caught error parsing JWT payload as JSON",ob?.toString()),null}}function Nm(e){const t=Om(e);return sm(t,"internal-error"),sm("undefined"!==typeof t.exp,"internal-error"),sm("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}async function Dm(e,t){if(arguments.length>2&&void 0!==arguments[2]&&arguments[2])return t;try{return await t}catch(ob){throw ob instanceof lh&&function(e){let{code:t}=e;return"auth/user-disabled"===t||"auth/user-token-expired"===t}(ob)&&e.auth.currentUser===e&&await e.auth.signOut(),ob}}class $m{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(ob){return void("auth/network-request-failed"===ob?.code&&this.schedule(!0))}this.schedule()}}class Lm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Am(this.lastLoginAt),this.creationTime=Am(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function Mm(e){const t=e.auth,n=await e.getIdToken(),r=await Dm(e,Im(t,{idToken:n}));sm(r?.users.length,t,"internal-error");const a=r.users[0];e._notifyReloadListener(a);const i=a.providerUserInfo?.length?Fm(a.providerUserInfo):[],o=function(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,i),s=e.isAnonymous,l=!(e.email&&a.passwordHash)&&!o?.length,c=!!s&&l,u={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new Lm(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,u)}function Fm(e){return e.map(e=>{let{providerId:t,...n}=e;return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}class Um{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){sm(e.idToken,"internal-error"),sm("undefined"!==typeof e.idToken,"internal-error"),sm("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Nm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){sm(0!==e.length,"internal-error");const t=Nm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]||!this.accessToken||this.isExpired?(sm(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:a}=await async function(e,t){const n=await km(e,{},async()=>{const n=hh({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:a}=e.config,i=await jm(e,r,"/v1/token",`key=${a}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const s={method:"POST",headers:o,body:n};return e.emulatorConfig&&bh(e.emulatorConfig.host)&&(s.credentials="include"),gm.fetch()(i,s)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(a))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:a}=t,i=new Um;return n&&(sm("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(sm("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),a&&(sm("number"===typeof a,"internal-error",{appName:e}),i.expirationTime=a),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Um,this.toJSON())}_performRefresh(){return lm("not implemented")}}function Bm(e,t){sm("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class Hm{constructor(e){let{uid:t,auth:n,stsTokenManager:r,...a}=e;this.providerId="firebase",this.proactiveRefresh=new $m(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Lm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Dm(this,this.stsTokenManager.getToken(this.auth,e));return sm(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=yh(e),r=await n.getIdToken(t),a=Om(r);sm(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const i="object"===typeof a.firebase?a.firebase:void 0,o=i?.sign_in_provider;return{claims:a,token:r,authTime:Am(Rm(a.auth_time)),issuedAtTime:Am(Rm(a.iat)),expirationTime:Am(Rm(a.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=yh(e);await Mm(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(sm(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Hm({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){sm(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Mm(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rf(this.auth.app))return Promise.reject(am(this.auth));const e=await this.getIdToken();return await Dm(this,async function(e,t){return vm(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,a=t.phoneNumber??void 0,i=t.photoURL??void 0,o=t.tenantId??void 0,s=t._redirectEventId??void 0,l=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:u,emailVerified:d,isAnonymous:p,providerData:h,stsTokenManager:f}=t;sm(u&&f,e,"internal-error");const m=Um.fromJSON(this.name,f);sm("string"===typeof u,e,"internal-error"),Bm(n,e.name),Bm(r,e.name),sm("boolean"===typeof d,e,"internal-error"),sm("boolean"===typeof p,e,"internal-error"),Bm(a,e.name),Bm(i,e.name),Bm(o,e.name),Bm(s,e.name),Bm(l,e.name),Bm(c,e.name);const g=new Hm({uid:u,auth:e,email:r,emailVerified:d,displayName:n,isAnonymous:p,photoURL:i,phoneNumber:a,tenantId:o,stsTokenManager:m,createdAt:l,lastLoginAt:c});return h&&Array.isArray(h)&&(g.providerData=h.map(e=>({...e}))),s&&(g._redirectEventId=s),g}static async _fromIdTokenResponse(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=new Um;r.updateFromServerResponse(t);const a=new Hm({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Mm(a),a}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];sm(void 0!==r.localId,"internal-error");const a=void 0!==r.providerUserInfo?Fm(r.providerUserInfo):[],i=!(r.email&&r.passwordHash)&&!a?.length,o=new Um;o.updateFromIdToken(n);const s=new Hm({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:i}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Lm(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!a?.length};return Object.assign(s,l),s}}const Wm=new Map;function Vm(e){cm(e instanceof Function,"Expected a class definition");let t=Wm.get(e);return t?(cm(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Wm.set(e,t),t)}class Km{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Km.type="NONE";const Gm=Km;function qm(e,t,n){return`firebase:${e}:${t}:${n}`}class Ym{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:a}=this.auth;this.fullUserKey=qm(this.userKey,r.apiKey,a),this.fullPersistenceKey=qm("persistence",r.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"===typeof e){const t=await Im(this.auth,{idToken:e}).catch(()=>{});return t?Hm._fromGetAccountInfoResponse(this.auth,t,e):null}return Hm._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";if(!t.length)return new Ym(Vm(Gm),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let a=r[0]||Vm(Gm);const i=qm(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(i);if(t){let n;if("string"===typeof t){const r=await Im(e,{idToken:t}).catch(()=>{});if(!r)break;n=await Hm._fromGetAccountInfoResponse(e,r,t)}else n=Hm._fromJSON(e,t);l!==a&&(o=n),a=l;break}}catch{}const s=r.filter(e=>e._shouldAllowMigration);return a._shouldAllowMigration&&s.length?(a=s[0],o&&await a._set(i,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==a)try{await e._remove(i)}catch{}})),new Ym(a,e,n)):new Ym(a,e,n)}}function Qm(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(eg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Jm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ng(t))return"Blackberry";if(rg(t))return"Webos";if(Xm(t))return"Safari";if((t.includes("chrome/")||Zm(t))&&!t.includes("edge/"))return"Chrome";if(tg(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===n?.length)return n[1]}return"Other"}function Jm(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sh();return/firefox\//i.test(e)}function Xm(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:sh()).toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zm(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sh();return/crios\//i.test(e)}function eg(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sh();return/iemobile/i.test(e)}function tg(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sh();return/android/i.test(e)}function ng(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sh();return/blackberry/i.test(e)}function rg(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sh();return/webos/i.test(e)}function ag(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sh();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ig(){return function(){const e=sh();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function og(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sh();return ag(e)||tg(e)||rg(e)||ng(e)||/windows phone/i.test(e)||eg(e)}function sg(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Qm(sh());break;case"Worker":t=`${Qm(sh())}-${e}`;break;default:t=e}const r=n.length?n.join(","):"FirebaseCore-web";return`${t}/JsCore/${Df}/${r}`}class lg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(ob){r(ob)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(ob){t.reverse();for(const r of t)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:ob?.message})}}}class cg{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}class ug{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pg(this),this.idTokenSubscription=new pg(this),this.beforeStateQueue=new lg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vm(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ym.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(ob){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Im(this,{idToken:e}),n=await Hm._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Rf(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,a=n?._redirectEventId,i=await this.tryRedirectSignIn(e);t&&t!==a||!i?.user||(n=i.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(ob){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(ob))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return sm(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(ob){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mm(e)}catch(ob){if("auth/network-request-failed"!==ob?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rf(this.app))return Promise.reject(am(this));const t=e?yh(e):null;return t&&sm(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this._deleted)return e&&sm(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rf(this.app)?Promise.reject(am(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rf(this.app)?Promise.reject(am(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vm(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e){return vm(e,"GET","/v2/passwordPolicy",xm(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}(this),t=new cg(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ch("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return vm(e,"POST","/v2/accounts:revokeToken",xm(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vm(e)||this._popupRedirectResolver;sm(t,this,"argument-error"),this.redirectPersistenceManager=await Ym.create(this,[Vm(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const a="function"===typeof t?t:t.next.bind(t);let i=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(sm(o,this,"internal-error"),o.then(()=>{i||a(this.currentUser)}),"function"===typeof t){const a=e.addObserver(t,n,r);return()=>{i=!0,a()}}{const n=e.addObserver(t);return()=>{i=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return sm(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(Rf(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e){if(Zf.logLevel<=Eh.WARN){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];Zf.warn(`Auth (${Df}): ${e}`,...n)}}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function dg(e){return yh(e)}class pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new gh(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return sm(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let hg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fg(e){return hg.loadJS(e)}function mg(e){return`__${e}${Math.floor(1e6*Math.random())}`}class gg{constructor(){this.enterprise=new wg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class wg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const yg="NO_RECAPTCHA";class bg{constructor(e){this.type="recaptcha-enterprise",this.auth=dg(e)}async verify(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"verify",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function n(t,n,r){const a=window.grecaptcha;Cm(a)?a.enterprise.ready(()=>{a.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(yg)})}):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new gg).execute("siteKey",{action:"verify"})}return new Promise((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{Tm(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new Pm(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})})(this.auth).then(a=>{if(!t&&Cm(window.grecaptcha))n(a,e,r);else{if("undefined"===typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=hg.recaptchaEnterpriseScript;0!==t.length&&(t+=a),fg(t).then(()=>{n(a,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function xg(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const i=new bg(e);let o;if(a)o=yg;else try{o=await i.verify(n)}catch(l){o=await i.verify(n,!0)}const s={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in s){const e=s.phoneEnrollmentInfo.phoneNumber,t=s.phoneEnrollmentInfo.recaptchaToken;Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in s){const e=s.phoneSignInInfo.recaptchaToken;Object.assign(s,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return s}return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function vg(e,t,n,r,a){if("EMAIL_PASSWORD_PROVIDER"===a){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await xg(e,t,n,"getOobCode"===n);return r(e,a)}return r(e,t).catch(async a=>{if("auth/missing-recaptcha-token"===a.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await xg(e,t,n,"getOobCode"===n);return r(e,a)}return Promise.reject(a)})}if("PHONE_PROVIDER"===a){if(e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const a=await xg(e,t,n);return r(e,a).catch(async a=>{if("AUDIT"===e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")&&("auth/missing-recaptcha-token"===a.code||"auth/invalid-app-credential"===a.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const a=await xg(e,t,n,!1,!0);return r(e,a)}return Promise.reject(a)})}{const a=await xg(e,t,n,!1,!0);return r(e,a)}}return Promise.reject(a+" provider is not supported.")}async function kg(e){const t=dg(e),n=await Tm(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Pm(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){new bg(t).verify()}}function zg(e,t,n){const r=dg(e);sm(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const a=!!n?.disableWarnings,i=jg(t),{host:o,port:s}=function(e){const t=jg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const e=a[1];return{host:e,port:Sg(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Sg(t)}}}(t),l=null===s?"":`:${s}`,c={url:`${i}//${o}${l}/`},u=Object.freeze({host:o,port:s,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator)return sm(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void sm(dh(c,r.config.emulator)&&dh(u,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,bh(o)?async function(e){(await fetch(e,{credentials:"include"})).ok}(`${i}//${o}${l}`):a||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}function jg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Sg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Eg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return lm("not implemented")}_getIdTokenResponse(e){return lm("not implemented")}_linkToIdToken(e,t){return lm("not implemented")}_getReauthenticationResolver(e){return lm("not implemented")}}async function _g(e,t){return vm(e,"POST","/v1/accounts:signUp",t)}async function Cg(e,t){return zm(e,"POST","/v1/accounts:signInWithPassword",xm(e,t))}async function Pg(e,t){return vm(e,"POST","/v1/accounts:sendOobCode",xm(e,t))}async function Tg(e,t){return Pg(e,t)}class Ig extends Eg{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ig(e,t,"password")}static _fromEmailAndCode(e,t){return new Ig(e,t,"emailLink",arguments.length>2&&void 0!==arguments[2]?arguments[2]:null)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if(t?.email&&t?.password){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return vg(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Cg,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return zm(e,"POST","/v1/accounts:signInWithEmailLink",xm(e,t))}(e,{email:this._email,oobCode:this._password});default:tm(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return vg(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_g,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return zm(e,"POST","/v1/accounts:signInWithEmailLink",xm(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:tm(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}async function Ag(e,t){return zm(e,"POST","/v1/accounts:signInWithIdp",xm(e,t))}class Rg extends Eg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Rg(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tm("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...a}=t;if(!n||!r)return null;const i=new Rg(n,r);return i.idToken=a.idToken||void 0,i.accessToken=a.accessToken||void 0,i.secret=a.secret,i.nonce=a.nonce,i.pendingToken=a.pendingToken||null,i}_getIdTokenResponse(e){return Ag(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ag(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ag(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hh(t)}return e}}async function Og(e,t){return vm(e,"POST","/v1/accounts:sendVerificationCode",xm(e,t))}const Ng={USER_NOT_FOUND:"user-not-found"};class Dg extends Eg{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Dg({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Dg({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return zm(e,"POST","/v1/accounts:signInWithPhoneNumber",xm(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await zm(e,"POST","/v1/accounts:signInWithPhoneNumber",xm(e,t));if(n.temporaryProof)throw _m(e,"account-exists-with-different-credential",n);return n}(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return async function(e,t){return zm(e,"POST","/v1/accounts:signInWithPhoneNumber",xm(e,{...t,operation:"REAUTH"}),Ng)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:a}=e;return n||t||r||a?new Dg({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:a}):null}}class $g{constructor(e){const t=fh(mh(e)),n=t.apiKey??null,r=t.oobCode??null,a=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(t.mode??null);sm(n&&r&&a,"argument-error"),this.apiKey=n,this.operation=a,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=function(e){const t=fh(mh(e)).link,n=t?fh(mh(t)).deep_link_id:null,r=fh(mh(e)).deep_link_id;return(r?fh(mh(r)).link:null)||r||n||t||e}(e);try{return new $g(t)}catch{return null}}}class Lg{constructor(){this.providerId=Lg.PROVIDER_ID}static credential(e,t){return Ig._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=$g.parseLink(t);return sm(n,"argument-error"),Ig._fromEmailAndCode(e,n.code,n.tenantId)}}Lg.PROVIDER_ID="password",Lg.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Lg.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class Mg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}class Fg extends Mg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ug extends Fg{constructor(){super("facebook.com")}static credential(e){return Rg._fromParams({providerId:Ug.PROVIDER_ID,signInMethod:Ug.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ug.credentialFromTaggedObject(e)}static credentialFromError(e){return Ug.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ug.credential(t.oauthAccessToken)}catch{return null}}}Ug.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ug.PROVIDER_ID="facebook.com";class Bg extends Fg{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rg._fromParams({providerId:Bg.PROVIDER_ID,signInMethod:Bg.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bg.credentialFromTaggedObject(e)}static credentialFromError(e){return Bg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Bg.credential(n,r)}catch{return null}}}Bg.GOOGLE_SIGN_IN_METHOD="google.com",Bg.PROVIDER_ID="google.com";class Hg extends Fg{constructor(){super("github.com")}static credential(e){return Rg._fromParams({providerId:Hg.PROVIDER_ID,signInMethod:Hg.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hg.credentialFromTaggedObject(e)}static credentialFromError(e){return Hg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Hg.credential(t.oauthAccessToken)}catch{return null}}}Hg.GITHUB_SIGN_IN_METHOD="github.com",Hg.PROVIDER_ID="github.com";class Wg extends Fg{constructor(){super("twitter.com")}static credential(e,t){return Rg._fromParams({providerId:Wg.PROVIDER_ID,signInMethod:Wg.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wg.credentialFromTaggedObject(e)}static credentialFromError(e){return Wg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Wg.credential(n,r)}catch{return null}}}async function Vg(e,t){return zm(e,"POST","/v1/accounts:signUp",xm(e,t))}Wg.TWITTER_SIGN_IN_METHOD="twitter.com",Wg.PROVIDER_ID="twitter.com";class Kg{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const a=await Hm._fromIdTokenResponse(e,n,r),i=Gg(n);return new Kg({user:a,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Gg(n);return new Kg({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Gg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}class qg extends lh{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,qg.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new qg(e,t,n,r)}}function Yg(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw qg._fromErrorAndOperation(e,n,t,r);throw n})}async function Qg(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=await Dm(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Kg._forOperation(e,"link",r)}async function Jg(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{auth:r}=e;if(Rf(r.app))return Promise.reject(am(r));const a="reauthenticate";try{const i=await Dm(e,Yg(r,a,t,e),n);sm(i.idToken,r,"internal-error");const o=Om(i.idToken);sm(o,r,"internal-error");const{sub:s}=o;return sm(e.uid===s,r,"user-mismatch"),Kg._forOperation(e,a,i)}catch(ob){throw"auth/user-not-found"===ob?.code&&tm(r,"user-mismatch"),ob}}async function Xg(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(Rf(e.app))return Promise.reject(am(e));const r="signIn",a=await Yg(e,r,t),i=await Kg._fromIdTokenResponse(e,r,a);return n||await e._updateCurrentUser(i.user),i}async function Zg(e,t){return Xg(dg(e),t)}function ew(e,t,n){sm(n.url?.length>0,e,"invalid-continue-uri"),sm("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),sm("undefined"===typeof n.linkDomain||n.linkDomain.length>0,e,"invalid-hosting-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.linkDomain=n.linkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(sm(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(sm(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}async function tw(e){const t=dg(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function nw(e,t){return vm(e,"POST","/v2/accounts/mfaEnrollment:start",xm(e,t))}new WeakMap;const rw="__sak";class aw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rw,"1"),this.storage.removeItem(rw),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class iw extends aw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=og(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},a=this.storage.getItem(n);ig()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}iw.type="LOCAL";const ow=iw;function sw(e){const t=e.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),n=RegExp(`${t}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function lw(e){return`${"http:"===window.location.protocol?"__dev_":"__HOST-"}FIREBASE_${e.split(":")[3]}`}class cw{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(void 0===typeof window)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return!("boolean"===typeof isSecureContext&&!isSecureContext)&&("undefined"!==typeof navigator&&"undefined"!==typeof document&&(navigator.cookieEnabled??!0))}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=lw(e);if(window.cookieStore){const e=await window.cookieStore.get(t);return e?.value}return sw(t)}async _remove(e){if(!this._isAvailable())return;if(!await this._get(e))return;const t=lw(e);document.cookie=`${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const n=lw(e);if(window.cookieStore){const e=e=>{const r=e.changed.find(e=>e.name===n);r&&t(r.value);e.deleted.find(e=>e.name===n)&&t(null)},r=()=>window.cookieStore.removeEventListener("change",e);return this.listenerUnsubscribes.set(t,r),window.cookieStore.addEventListener("change",e)}let r=sw(n);const a=setInterval(()=>{const e=sw(n);e!==r&&(t(e),r=e)},1e3);this.listenerUnsubscribes.set(t,()=>clearInterval(a))}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}cw.type="COOKIE";class uw extends aw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}uw.type="SESSION";const dw=uw;class pw{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new pw(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:a}=t.data,i=this.handlersMap[r];if(!i?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map(async e=>e(t.origin,a)),s=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}function hw(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}pw.receivers=[];class fw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50;const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,i;return new Promise((o,s)=>{const l=hw("",20);r.port1.start();const c=setTimeout(()=>{s(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{s(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),o(t.data.response);break;default:clearTimeout(c),clearTimeout(a),s(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}function mw(){return window}function gw(){return"undefined"!==typeof mw().WorkerGlobalScope&&"function"===typeof mw().importScripts}const ww="firebaseLocalStorageDb",yw="firebaseLocalStorage",bw="fbase_key";class xw{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function vw(e,t){return e.transaction([yw],t?"readwrite":"readonly").objectStore(yw)}function kw(){const e=indexedDB.open(ww,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(yw,{keyPath:bw})}catch(ob){n(ob)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(yw)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(ww);return new xw(e).toPromise()}(),t(await kw()))})})}async function zw(e,t,n){const r=vw(e,!0).put({[bw]:t,value:n});return new xw(r).toPromise()}function jw(e,t){const n=vw(e,!0).delete(t);return new xw(n).toPromise()}class Sw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await kw()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(ob){if(t++>3)throw ob;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pw._getInstance(gw()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new fw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kw();return await zw(e,rw,"1"),await jw(e,rw),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>zw(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=vw(e,!1).get(t),r=await new xw(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jw(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=vw(e,!1).getAll();return new xw(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:a}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Sw.type="LOCAL";const Ew=Sw;function _w(e,t){return vm(e,"POST","/v2/accounts/mfaSignIn:start",xm(e,t))}mg("rcb"),new fm(3e4,6e4);const Cw="recaptcha";async function Pw(e,t,n){if(!e._getRecaptchaConfig())try{await kg(e)}catch(r){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(r="string"===typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){sm("enroll"===t.type,e,"internal-error");const a={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},i=vg(e,a,"mfaSmsEnrollment",async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===yg){sm(n?.type===Cw,e,"argument-error");return nw(e,await Tw(e,t,n))}return nw(e,t)},"PHONE_PROVIDER");return(await i.catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo}{sm("signin"===t.type,e,"internal-error");const a=r.multiFactorHint?.uid||r.multiFactorUid;sm(a,e,"missing-multi-factor-info");const i={mfaPendingCredential:t.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},o=vg(e,i,"mfaSmsSignIn",async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===yg){sm(n?.type===Cw,e,"argument-error");return _w(e,await Tw(e,t,n))}return _w(e,t)},"PHONE_PROVIDER");return(await o.catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}{const t={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"},a=vg(e,t,"sendVerificationCode",async(e,t)=>{if(t.captchaResponse===yg){sm(n?.type===Cw,e,"argument-error");return Og(e,await Tw(e,t,n))}return Og(e,t)},"PHONE_PROVIDER");return(await a.catch(e=>Promise.reject(e))).sessionInfo}}finally{n?._reset()}}async function Tw(e,t,n){sm(n.type===Cw,e,"argument-error");const r=await n.verify();sm("string"===typeof r,e,"argument-error");const a={...t};if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.captchaResponse,n=a.phoneEnrollmentInfo.clientType,i=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:i}}),a}if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.captchaResponse,t=a.phoneSignInInfo.clientType,n=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),a}return Object.assign(a,{recaptchaToken:r}),a}class Iw{constructor(e){this.providerId=Iw.PROVIDER_ID,this.auth=dg(e)}verifyPhoneNumber(e,t){return Pw(this.auth,e,yh(t))}static credential(e,t){return Dg._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Iw.credentialFromTaggedObject(t)}static credentialFromError(e){return Iw.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t)return null;const{phoneNumber:n,temporaryProof:r}=t;return n&&r?Dg._fromTokenResponse(n,r):null}}function Aw(e,t){return t?Vm(t):(sm(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}Iw.PROVIDER_ID="phone",Iw.PHONE_SIGN_IN_METHOD="phone";class Rw extends Eg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ag(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ag(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ag(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ow(e){return Xg(e.auth,new Rw(e),e.bypassAuthState)}function Nw(e){const{auth:t,user:n}=e;return sm(n,t,"internal-error"),Jg(n,new Rw(e),e.bypassAuthState)}async function Dw(e){const{auth:t,user:n}=e;return sm(n,t,"internal-error"),Qg(n,new Rw(e),e.bypassAuthState)}class $w{constructor(e,t,n,r){let a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(ob){this.reject(ob)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:a,error:i,type:o}=e;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(ob){this.reject(ob)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ow;case"linkViaPopup":case"linkViaRedirect":return Dw;case"reauthViaPopup":case"reauthViaRedirect":return Nw;default:tm(this.auth,"internal-error")}}resolve(e){cm(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cm(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const Lw=new fm(2e3,1e4);async function Mw(e,t,n){if(Rf(e.app))return Promise.reject(nm(e,"operation-not-supported-in-this-environment"));const r=dg(e);im(e,t,Mg);const a=Aw(r,n);return new Fw(r,"signInViaPopup",t,a).executeNotNull()}class Fw extends $w{constructor(e,t,n,r,a){super(e,t,r,a),this.provider=n,this.authWindow=null,this.pollId=null,Fw.currentPopupAction&&Fw.currentPopupAction.cancel(),Fw.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return sm(e,this.auth,"internal-error"),e}async onExecution(){cm(1===this.filter.length,"Popup operations only handle one event");const e=hw();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(nm(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(nm(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fw.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nm(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Lw.get())};e()}}Fw.currentPopupAction=null;const Uw=new Map;class Bw extends $w{constructor(e,t){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,arguments.length>2&&void 0!==arguments[2]&&arguments[2]),this.eventId=null}async execute(){let e=Uw.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Vw(t),r=Ww(e);if(!await r._isAvailable())return!1;const a="true"===await r._get(n);return await r._remove(n),a}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(ob){e=()=>Promise.reject(ob)}Uw.set(this.auth._key(),e)}return this.bypassAuthState||Uw.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Hw(e,t){Uw.set(e._key(),t)}function Ww(e){return Vm(e._redirectPersistence)}function Vw(e){return qm("pendingRedirect",e.config.apiKey,e.name)}async function Kw(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(Rf(e.app))return Promise.reject(am(e));const r=dg(e),a=Aw(r,t),i=new Bw(r,a,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Gw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yw(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Yw(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(nm(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(qw(e))}saveEventToCache(e){this.cachedEventUids.add(qw(e)),this.lastProcessedEventTime=Date.now()}}function qw(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Yw(e){let{type:t,error:n}=e;return"unknown"===t&&"auth/no-auth-event"===n?.code}const Qw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jw=/^https?/;async function Xw(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e){return vm(e,"GET","/v1/projects",arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})}(e);for(const n of t)try{if(Zw(n))return}catch{}tm(e,"unauthorized-domain")}function Zw(e){const t=um(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return""===a.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===r}if(!Jw.test(n))return!1;if(Qw.test(e))return r===e;const a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}const ey=new fm(3e4,6e4);function ty(){const e=mw().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function ny(e){return new Promise((t,n)=>{function r(){ty(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ty(),n(nm(e,"network-request-failed"))},timeout:ey.get()})}if(mw().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!mw().gapi?.load){const t=mg("iframefcb");return mw()[t]=()=>{gapi.load?r():n(nm(e,"network-request-failed"))},fg(`${hg.gapiScript}?onload=${t}`).catch(e=>n(e))}r()}}).catch(e=>{throw ry=null,e})}let ry=null;const ay=new fm(5e3,15e3),iy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sy(e){const t=e.config;sm(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?mm(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Df},a=oy.get(e.config.apiHost);a&&(r.eid=a);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${hh(r).slice(1)}`}async function ly(e){const t=await function(e){return ry=ry||ny(e),ry}(e),n=mw().gapi;return sm(n,e,"internal-error"),t.open({where:document.body,url:sy(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iy,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const a=nm(e,"network-request-failed"),i=mw().setTimeout(()=>{r(a)},ay.get());function o(){mw().clearTimeout(i),n(t)}t.ping(o).then(o,()=>{r(a)})}))}const cy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class uy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(ob){}}}function dy(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600;const i=Math.max((window.screen.availHeight-a)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l={...cy,width:r.toString(),height:a.toString(),top:i,left:o},c=sh().toLowerCase();n&&(s=Zm(c)?"_blank":n),Jm(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce((e,t)=>{let[n,r]=t;return`${e}${n}=${r},`},"");if(function(){return ag(arguments.length>0&&void 0!==arguments[0]?arguments[0]:sh())&&!!window.navigator?.standalone}(c)&&"_self"!==s)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",s),new uy(null);const d=window.open(t||"",s,u);sm(d,e,"popup-blocked");try{d.focus()}catch(ob){}return new uy(d)}const py="__/auth/handler",hy="emulator/auth/handler",fy=encodeURIComponent("fac");async function my(e,t,n,r,a,i){sm(e.config.authDomain,e,"auth-domain-config-required"),sm(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Df,eventId:a};if(t instanceof Mg){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof Fg){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const u of Object.keys(s))void 0===s[u]&&delete s[u];const l=await e._getAppCheckToken(),c=l?`#${fy}=${encodeURIComponent(l)}`:"";return`${function(e){let{config:t}=e;if(!t.emulator)return`https://${t.authDomain}/${py}`;return mm(t,hy)}(e)}?${hh(s).slice(1)}${c}`}const gy="webStorageSupport";const wy=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dw,this._completeRedirectFn=Kw,this._overrideRedirectResult=Hw}async _openPopup(e,t,n,r){cm(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return dy(e,await my(e,t,n,um(),r),hw())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){mw().location.href=e}(await my(e,t,n,um(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(cm(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await ly(e),n=new Gw(e);return t.register("authEvent",t=>{sm(t?.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gy,{type:gy},n=>{const r=n?.[0]?.[gy];void 0!==r&&t(!!r),tm(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return og()||Xm()||ag()}};var yy="@firebase/auth",by="1.13.0";class xy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){sm(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const vy=ih("authIdTokenMaxAge")||300;let ky=null;var zy;function jy(e){return ai({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r\n\tc0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r\n\tc0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r\n\tC34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r\n\tc-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"},child:[]},{tag:"path",attr:{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r\n\tc0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"},child:[]}]})(e)}!function(e){hg=e}({loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=nm("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),zy="Browser",If(new xh("auth",(e,t)=>{let{options:n}=t;const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;sm(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:s,clientPlatform:zy,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sg(zy)},c=new ug(r,a,i,l);return function(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Vm);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),If(new xh("auth-internal",e=>(e=>new xy(e))(dg(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Mf(yy,by,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(zy)),Mf(yy,by,"esm2020");Mf("firebase","12.12.0","app");const Sy={apiKey:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",authDomain:"klaraqueen.firebaseapp.com",projectId:"klaraqueen",storageBucket:"klaraqueen.firebasestorage.app",messagingSenderId:"852297752171",appId:"1:852297752171:web:081021a1f6b86dfe5cdb2e"};function Ey(){return Boolean(Sy.apiKey&&Sy.authDomain&&Sy.projectId&&Sy.appId)}const _y=Ey()?Array.from(_f.values()).length>0?Lf():$f(Sy):null,Cy=_y?function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Lf();const t=Af(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Af(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(dh(n.getOptions(),t??{}))return e;tm(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:wy,persistence:[Ew,ow,dw]}),r=ih("authTokenSyncURL");if(r&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(a=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>vy)return;const r=t?.token;ky!==r&&(ky=r,await fetch(a,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){yh(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){yh(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var a;const i=rh("auth");return i&&zg(n,`http://${i}`),n}(_y):null,Py=new Bg;function Ty(e){return{"auth/email-already-in-use":"Ten adres e-mail jest ju\u017c zarejestrowany.","auth/invalid-email":"Nieprawid\u0142owy adres e-mail.","auth/weak-password":"Has\u0142o jest za s\u0142abe \u2014 u\u017cyj co najmniej 6 znak\xf3w.","auth/user-disabled":"To konto zosta\u0142o wy\u0142\u0105czone.","auth/user-not-found":"Nie znaleziono konta z tym adresem e-mail.","auth/wrong-password":"Nieprawid\u0142owe has\u0142o.","auth/invalid-credential":"Nieprawid\u0142owy e-mail lub has\u0142o.","auth/too-many-requests":"Zbyt wiele pr\xf3b. Spr\xf3buj ponownie za chwil\u0119.","auth/popup-closed-by-user":"Logowanie przerwane \u2014 okno zosta\u0142o zamkni\u0119te.","auth/cancelled-popup-request":"Mo\u017cna uruchomi\u0107 tylko jedno okno logowania naraz.","auth/account-exists-with-different-credential":"Konto z tym e-mailem istnieje ju\u017c przy innym sposobie logowania.","auth/operation-not-allowed":"Ta metoda logowania nie jest w\u0142\u0105czona w Firebase Console.","auth/network-request-failed":"B\u0142\u0105d sieci. Sprawd\u017a po\u0142\u0105czenie z internetem."}[e]||"Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d. Spr\xf3buj ponownie."}const Iy=xa,Ay=ba,Ry=ka.linkBarRadius,Oy=ga.main`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(24px, 5vw, 48px) clamp(16px, 4vw, 32px);
  box-sizing: border-box;

  @media (max-width: ${Ay.tablet}px) {
    min-height: calc(100vh - 64px);
    padding-top: clamp(32px, 8vw, 56px);
  }
`,Ny=ga.div`
  width: 100%;
  max-width: 440px;
  padding: clamp(28px, 6vw, 42px);
  border-radius: ${ka.drawerBorderRadius};
  background: linear-gradient(
    165deg,
    rgba(120, 40, 64, 0.55) 0%,
    rgba(46, 14, 22, 0.75) 45%,
    rgba(30, 8, 16, 0.88) 100%
  );
  border: 1px solid ${Iy.navBorderGold18};
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
`,Dy=ga.header`
  text-align: center;
  margin-bottom: clamp(22px, 4vw, 30px);
`,$y=ga.h1`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.85rem, 5vw, 2.35rem);
  font-weight: 700;
  color: ${Iy.white};
  margin: 0 0 10px 0;
  letter-spacing: 0.4px;
  line-height: 1.15;
`,Ly=ga.p`
  margin: 0;
  font-size: clamp(0.9rem, 2.2vw, 0.98rem);
  color: rgba(255, 255, 255, 0.68);
  font-weight: 400;
  line-height: 1.5;
`,My=ga.form`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 3vw, 20px);
`,Fy=ga.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`,Uy=ga.label`
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: ${Iy.goldHover};
`,By=ga.input`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 14px;
  font-size: 1rem;
  font-family: inherit;
  color: ${Iy.white};
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid ${Iy.navBorderGold26};
  border-radius: ${Ry};
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
    border-color: ${Iy.goldMain};
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.18);
    background: rgba(0, 0, 0, 0.22);
  }
`,Hy=ga.div`
  position: relative;
  display: flex;
  align-items: center;
`,Wy=ga(By)`
  padding-right: 48px;
`,Vy=ga.button`
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
  color: ${Iy.goldHover};
  cursor: pointer;
  font-size: 1rem;
  transition:
    color 0.2s ease,
    background 0.2s ease;

  &:hover {
    color: ${Iy.white};
    background: rgba(255, 255, 255, 0.06);
  }
`,Ky=ga.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -4px;
`,Gy=(ga.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.88rem;
  font-family: inherit;
  color: ${Iy.goldHover};
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;

  &:hover {
    color: ${Iy.white};
  }
`,ga(wt)`
  font-size: 0.88rem;
  color: ${Iy.goldHover};
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;

  &:hover {
    color: ${Iy.white};
  }
`),qy=ga.button`
  margin-top: 4px;
  width: 100%;
  padding: 14px 20px;
  border: 1px solid ${Iy.navBorderGold48};
  border-radius: ${Ry};
  font-size: 0.95rem;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${Iy.deepBlack};
  background: linear-gradient(
    180deg,
    ${Iy.goldHover} 0%,
    ${Iy.goldMain} 100%
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
`,Yy=ga.div`
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
      ${Iy.navDividerGold50},
      transparent
    );
  }
`,Qy=ga.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 18px;
  border-radius: ${Ry};
  border: 1px solid ${Iy.navBorderGold26};
  background: rgba(255, 255, 255, 0.06);
  color: ${Iy.white};
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
    border-color: ${Iy.navBorderGold48};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    flex-shrink: 0;
    font-size: 1.35rem;
  }
`,Jy=ga.p`
  margin: clamp(18px, 4vw, 24px) 0 0 0;
  text-align: center;
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.5;

  ${Gy} {
    margin-left: 6px;
    font-weight: 600;
  }
`,Xy=ga.div`
  margin: 0 0 16px 0;
  padding: 12px 14px;
  font-size: 0.85rem;
  line-height: 1.45;
  color: #ffc9c9;
  background: rgba(158, 30, 54, 0.3);
  border-radius: ${Ry};
  border: 1px solid rgba(241, 120, 140, 0.5);
`,Zy=ga.p`
  margin: 0 0 20px 0;
  padding: 12px 14px;
  font-size: 0.85rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.72);
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${Ry};
  border: 1px solid ${Iy.navBorderGold18};
`,eb=ga(Zy)`
  color: rgba(220, 255, 220, 0.95);
  border-color: rgba(102, 187, 106, 0.45);
  background: rgba(46, 125, 50, 0.2);
`,tb=ga.div`
  margin-top: clamp(20px, 4vw, 28px);
  text-align: center;
`;const nb=function(){const e=he(),[t,n]=(0,r.useState)(""),[a,i]=(0,r.useState)(""),[o,s]=(0,r.useState)(!1),[l,c]=(0,r.useState)(""),[u,d]=(0,r.useState)(!1);return(0,ja.jsx)(Oy,{children:(0,ja.jsxs)(Ny,{children:[(0,ja.jsxs)(Dy,{children:[(0,ja.jsx)($y,{children:"Zaloguj si\u0119"}),(0,ja.jsx)(Ly,{children:"Zaloguj si\u0119 e-mailem i has\u0142em albo kontem Google."})]}),l?(0,ja.jsx)(Xy,{role:"alert",children:l}):null,(0,ja.jsxs)(My,{onSubmit:async n=>{if(n.preventDefault(),c(""),Ey()&&Cy)if(t.trim()&&a){d(!0);try{await function(e,t,n){return Rf(e.app)?Promise.reject(am(e)):Zg(yh(e),Lg.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&tw(e),t})}(Cy,t.trim(),a),e("/",{replace:!0})}catch(r){c(Ty(r.code))}finally{d(!1)}}else c("Podaj adres e-mail i has\u0142o.");else c("Brak konfiguracji Firebase \u2014 uzupe\u0142nij plik .env.local (patrz .env.example).")},noValidate:!0,children:[(0,ja.jsxs)(Fy,{children:[(0,ja.jsx)(Uy,{htmlFor:"login-email",children:"E-mail"}),(0,ja.jsx)(By,{id:"login-email",name:"email",type:"email",autoComplete:"email",placeholder:"twoj@email.pl",value:t,onChange:e=>n(e.target.value),disabled:u})]}),(0,ja.jsxs)(Fy,{children:[(0,ja.jsx)(Uy,{htmlFor:"login-password",children:"Has\u0142o"}),(0,ja.jsxs)(Hy,{children:[(0,ja.jsx)(Wy,{id:"login-password",name:"password",type:o?"text":"password",autoComplete:"current-password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",value:a,onChange:e=>i(e.target.value),disabled:u}),(0,ja.jsx)(Vy,{type:"button","aria-label":o?"Ukryj has\u0142o":"Poka\u017c has\u0142o",onClick:()=>s(e=>!e),disabled:u,children:o?(0,ja.jsx)(fi,{}):(0,ja.jsx)(hi,{})})]})]}),(0,ja.jsx)(Ky,{children:(0,ja.jsx)(Gy,{to:"/forgot-password",children:"Nie pami\u0119tasz has\u0142a?"})}),(0,ja.jsx)(qy,{type:"submit",disabled:u,children:u?"Logowanie\u2026":"Zaloguj si\u0119"})]}),(0,ja.jsx)(Yy,{children:"lub"}),(0,ja.jsxs)(Qy,{type:"button",onClick:async()=>{if(c(""),Ey()&&Cy){d(!0);try{await Mw(Cy,Py),e("/",{replace:!0})}catch(t){if("auth/popup-closed-by-user"===t.code)return;c(Ty(t.code))}finally{d(!1)}}else c("Brak konfiguracji Firebase \u2014 uzupe\u0142nij plik .env.local (patrz .env.example).")},disabled:u,children:[(0,ja.jsx)(jy,{"aria-hidden":!0}),"Kontynuuj z Google"]}),(0,ja.jsxs)(Jy,{children:["Nie masz konta?",(0,ja.jsx)(Gy,{to:"/register",children:"Za\u0142\xf3\u017c konto"})]})]})})};const rb=function(){const e=he(),[t,n]=(0,r.useState)(""),[a,i]=(0,r.useState)(""),[o,s]=(0,r.useState)(""),[l,c]=(0,r.useState)(!1),[u,d]=(0,r.useState)(""),[p,h]=(0,r.useState)(!1);return(0,ja.jsx)(Oy,{children:(0,ja.jsxs)(Ny,{children:[(0,ja.jsxs)(Dy,{children:[(0,ja.jsx)($y,{children:"Rejestracja"}),(0,ja.jsx)(Ly,{children:"Za\u0142\xf3\u017c konto e-mailem lub zaloguj si\u0119 jednorazowo przez Google."})]}),u?(0,ja.jsx)(Xy,{role:"alert",children:u}):null,(0,ja.jsxs)(My,{onSubmit:async n=>{if(n.preventDefault(),d(""),Ey()&&Cy)if(t.trim())if(a.length<6)d("Has\u0142o musi mie\u0107 co najmniej 6 znak\xf3w.");else if(a===o){h(!0);try{await async function(e,t,n){if(Rf(e.app))return Promise.reject(am(e));const r=dg(e),a=vg(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vg,"EMAIL_PASSWORD_PROVIDER"),i=await a.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&tw(e),t}),o=await Kg._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}(Cy,t.trim(),a),e("/",{replace:!0})}catch(r){d(Ty(r.code))}finally{h(!1)}}else d("Has\u0142a nie s\u0105 takie same.");else d("Podaj adres e-mail.");else d("Brak konfiguracji Firebase \u2014 uzupe\u0142nij plik .env.local (patrz .env.example).")},noValidate:!0,children:[(0,ja.jsxs)(Fy,{children:[(0,ja.jsx)(Uy,{htmlFor:"register-email",children:"E-mail"}),(0,ja.jsx)(By,{id:"register-email",name:"email",type:"email",autoComplete:"email",placeholder:"twoj@email.pl",value:t,onChange:e=>n(e.target.value),disabled:p})]}),(0,ja.jsxs)(Fy,{children:[(0,ja.jsx)(Uy,{htmlFor:"register-password",children:"Has\u0142o"}),(0,ja.jsxs)(Hy,{children:[(0,ja.jsx)(Wy,{id:"register-password",name:"password",type:l?"text":"password",autoComplete:"new-password",placeholder:"min. 6 znak\xf3w",value:a,onChange:e=>i(e.target.value),disabled:p}),(0,ja.jsx)(Vy,{type:"button","aria-label":l?"Ukryj has\u0142o":"Poka\u017c has\u0142o",onClick:()=>c(e=>!e),disabled:p,children:l?(0,ja.jsx)(fi,{}):(0,ja.jsx)(hi,{})})]})]}),(0,ja.jsxs)(Fy,{children:[(0,ja.jsx)(Uy,{htmlFor:"register-confirm",children:"Powt\xf3rz has\u0142o"}),(0,ja.jsx)(By,{id:"register-confirm",name:"confirm",type:l?"text":"password",autoComplete:"new-password",placeholder:"powt\xf3rz has\u0142o",value:o,onChange:e=>s(e.target.value),disabled:p})]}),(0,ja.jsx)(qy,{type:"submit",disabled:p,children:p?"Tworzenie konta\u2026":"Utw\xf3rz konto"})]}),(0,ja.jsx)(Yy,{children:"lub"}),(0,ja.jsxs)(Qy,{type:"button",onClick:async()=>{if(d(""),Ey()&&Cy){h(!0);try{await Mw(Cy,Py),e("/",{replace:!0})}catch(t){if("auth/popup-closed-by-user"===t.code)return;d(Ty(t.code))}finally{h(!1)}}else d("Brak konfiguracji Firebase \u2014 uzupe\u0142nij plik .env.local (patrz .env.example).")},disabled:p,children:[(0,ja.jsx)(jy,{"aria-hidden":!0}),"Zarejestruj si\u0119 z Google"]}),(0,ja.jsxs)(Jy,{children:["Masz ju\u017c konto?",(0,ja.jsx)(Gy,{to:"/login",children:"Zaloguj si\u0119"})]})]})})};const ab=function(){const[e,t]=(0,r.useState)(""),[n,a]=(0,r.useState)(!1),[i,o]=(0,r.useState)(""),[s,l]=(0,r.useState)(!1);return(0,ja.jsx)(Oy,{children:(0,ja.jsxs)(Ny,{children:[(0,ja.jsxs)(Dy,{children:[(0,ja.jsx)($y,{children:"Przypomnienie has\u0142a"}),(0,ja.jsx)(Ly,{children:"Wy\u015blemy link resetuj\u0105cy na Tw\xf3j e-mail (je\u015bli konto istnieje)."})]}),i?(0,ja.jsx)(Xy,{role:"alert",children:i}):null,n?(0,ja.jsxs)(eb,{role:"status",children:["Je\u015bli konto jest powi\u0105zane z adresem ",(0,ja.jsx)("strong",{children:e.trim()}),", wkr\xf3tce otrzymasz wiadomo\u015b\u0107 z linkiem do ustawienia nowego has\u0142a. Sprawd\u017a te\u017c folder spam."]}):null,n?null:(0,ja.jsxs)(My,{onSubmit:async t=>{if(t.preventDefault(),o(""),Ey()&&Cy)if(e.trim()){l(!0);try{await async function(e,t,n){const r=dg(e),a={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&ew(r,a,n),await vg(r,a,"getOobCode",Tg,"EMAIL_PASSWORD_PROVIDER")}(Cy,e.trim()),a(!0)}catch(n){o(Ty(n.code))}finally{l(!1)}}else o("Podaj adres e-mail.");else o("Brak konfiguracji Firebase \u2014 uzupe\u0142nij plik .env.local (patrz .env.example).")},noValidate:!0,children:[(0,ja.jsxs)(Fy,{children:[(0,ja.jsx)(Uy,{htmlFor:"forgot-email",children:"E-mail"}),(0,ja.jsx)(By,{id:"forgot-email",name:"email",type:"email",autoComplete:"email",placeholder:"twoj@email.pl",value:e,onChange:e=>t(e.target.value),disabled:s})]}),(0,ja.jsx)(qy,{type:"submit",disabled:s,children:s?"Wysy\u0142anie\u2026":"Wy\u015blij link"})]}),(0,ja.jsx)(tb,{children:(0,ja.jsx)(Gy,{to:"/login",children:"Wr\xf3\u0107 do logowania"})})]})})};const ib=function(){return(0,ja.jsxs)(po,{children:[(0,ja.jsx)(uo,{}),(0,ja.jsx)(Sa,{}),(0,ja.jsx)(Oi,{}),(0,ja.jsx)(co,{}),(0,ja.jsx)(ho,{children:(0,ja.jsxs)(De,{children:[(0,ja.jsx)(Oe,{path:"/",element:(0,ja.jsx)(ll,{})}),(0,ja.jsx)(Oe,{path:"/about",element:(0,ja.jsx)(rc,{})}),(0,ja.jsx)(Oe,{path:"/offer",element:(0,ja.jsx)(Jd,{})}),(0,ja.jsx)(Oe,{path:"/offer/:id",element:(0,ja.jsx)(Jd,{})}),(0,ja.jsx)(Oe,{path:"/blog",element:(0,ja.jsx)(xp,{})}),(0,ja.jsx)(Oe,{path:"/blog/:id",element:(0,ja.jsx)(Dp,{})})," ",(0,ja.jsx)(Oe,{path:"/testimonials",element:(0,ja.jsx)(Yp,{})})," ",(0,ja.jsx)(Oe,{path:"/questions",element:(0,ja.jsx)(yc,{})}),(0,ja.jsx)(Oe,{path:"/cooperation",element:(0,ja.jsx)(gu,{})}),(0,ja.jsx)(Oe,{path:"/login",element:(0,ja.jsx)(nb,{})}),(0,ja.jsx)(Oe,{path:"/register",element:(0,ja.jsx)(rb,{})}),(0,ja.jsx)(Oe,{path:"/forgot-password",element:(0,ja.jsx)(ab,{})})]})}),(0,ja.jsx)(lo,{})]})};i.createRoot(document.getElementById("root")).render((0,ja.jsx)(r.StrictMode,{children:(0,ja.jsx)(mt,{basename:void 0,children:(0,ja.jsx)(ib,{})})}))})();
//# sourceMappingURL=main.41cc4fab.js.map