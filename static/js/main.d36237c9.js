/*! For license information please see main.d36237c9.js.LICENSE.txt */
(()=>{"use strict";var e={4(e,t,n){var a=n(853),r=n(43),i=n(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function p(e){if(s(e)!==e)throw Error(o(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),v=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),C=Symbol.for("react.lazy");Symbol.for("react.scope");var E=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var P=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var $=Symbol.iterator;function T(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=$&&e[$]||e["@@iterator"])?e:null}var _=Symbol.for("react.client.reference");function O(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===_?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case w:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case z:return"Suspense";case j:return"SuspenseList";case E:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case g:return"Portal";case v:return e.displayName||"Context";case b:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case S:return null!==(t=e.displayName||null)?t:O(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return O(e(t))}catch(Qn){}}return null}var N=Array.isArray,R=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D={pending:!1,data:null,method:null,action:null},L=[],A=-1;function I(e){return{current:e}}function F(e){0>A||(e.current=L[A],L[A]=null,A--)}function U(e,t){A++,L[A]=e.current,e.current=t}var W,H,B=I(null),K=I(null),Q=I(null),G=I(null);function V(e,t){switch(U(Q,t),U(K,e),U(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?yp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=xp(t=yp(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(B),U(B,e)}function Y(){F(B),F(K),F(Q)}function q(e){null!==e.memoizedState&&U(G,e);var t=B.current,n=xp(t,e.type);t!==n&&(U(K,e),U(B,n))}function X(e){K.current===e&&(F(B),F(K)),G.current===e&&(F(G),pd._currentValue=D)}function Z(e){if(void 0===W)try{throw Error()}catch(Qn){var t=Qn.stack.trim().match(/\n( *(at )?)/);W=t&&t[1]||"",H=-1<Qn.stack.indexOf("\n    at")?" (<anonymous>)":-1<Qn.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+W+e+H}var J=!1;function ee(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(Qn){var a=Qn}Reflect.construct(e,[],n)}else{try{n.call()}catch(r){a=r}e.call(n.prototype)}}else{try{throw Error()}catch(i){a=i}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(o){if(o&&a&&"string"===typeof o.stack)return[o.stack,a.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],l=i[1];if(o&&l){var s=o.split("\n"),c=l.split("\n");for(r=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;r<c.length&&!c[r].includes("DetermineComponentFrameRoot");)r++;if(a===s.length||r===c.length)for(a=s.length-1,r=c.length-1;1<=a&&0<=r&&s[a]!==c[r];)r--;for(;1<=a&&0<=r;a--,r--)if(s[a]!==c[r]){if(1!==a||1!==r)do{if(a--,0>--r||s[a]!==c[r]){var u="\n"+s[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=a&&0<=r);break}}}finally{J=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Z(n):""}function te(e,t){switch(e.tag){case 26:case 27:case 5:return Z(e.type);case 16:return Z("Lazy");case 13:return e.child!==t&&null!==t?Z("Suspense Fallback"):Z("Suspense");case 19:return Z("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return Z("Activity");default:return""}}function ne(e){try{var t="",n=null;do{t+=te(e,n),n=e,e=e.return}while(e);return t}catch(Qn){return"\nError generating stack: "+Qn.message+"\n"+Qn.stack}}var ae=Object.prototype.hasOwnProperty,re=a.unstable_scheduleCallback,ie=a.unstable_cancelCallback,oe=a.unstable_shouldYield,le=a.unstable_requestPaint,se=a.unstable_now,ce=a.unstable_getCurrentPriorityLevel,ue=a.unstable_ImmediatePriority,pe=a.unstable_UserBlockingPriority,de=a.unstable_NormalPriority,fe=a.unstable_LowPriority,me=a.unstable_IdlePriority,he=a.log,ge=a.unstable_setDisableYieldValue,we=null,ye=null;function xe(e){if("function"===typeof he&&ge(e),ye&&"function"===typeof ye.setStrictMode)try{ye.setStrictMode(we,e)}catch(t){}}var be=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(ve(e)/ke|0)|0},ve=Math.log,ke=Math.LN2;var ze=256,je=262144,Se=4194304;function Ce(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ee(e,t,n){var a=e.pendingLanes;if(0===a)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var l=134217727&a;return 0!==l?0!==(a=l&~i)?r=Ce(a):0!==(o&=l)?r=Ce(o):n||0!==(n=l&~e)&&(r=Ce(n)):0!==(l=a&~i)?r=Ce(l):0!==o?r=Ce(o):n||0!==(n=a&~e)&&(r=Ce(n)),0===r?0:0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(n=t&-t)||32===i&&0!==(4194048&n))?t:r}function Pe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Te(){var e=Se;return 0===(62914560&(Se<<=1))&&(Se=4194304),e}function _e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oe(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ne(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-be(t);e.entangledLanes|=t,e.entanglements[a]=1073741824|e.entanglements[a]|261930&n}function Re(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-be(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Me(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:De(n))&(e.suspendedLanes|t))?0:n}function De(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Le(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Ae(){var e=M.p;return 0!==e?e:void 0===(e=window.event)?32:Ed(e.type)}function Ie(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var Fe=Math.random().toString(36).slice(2),Ue="__reactFiber$"+Fe,We="__reactProps$"+Fe,He="__reactContainer$"+Fe,Be="__reactEvents$"+Fe,Ke="__reactListeners$"+Fe,Qe="__reactHandles$"+Fe,Ge="__reactResources$"+Fe,Ve="__reactMarker$"+Fe;function Ye(e){delete e[Ue],delete e[We],delete e[Be],delete e[Ke],delete e[Qe]}function qe(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[He]||n[Ue]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Lp(e);null!==e;){if(n=e[Ue])return n;e=Lp(e)}return t}n=(e=n).parentNode}return null}function Xe(e){if(e=e[Ue]||e[He]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function Ze(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function Je(e){var t=e[Ge];return t||(t=e[Ge]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Ve]=!0}var tt=new Set,nt={};function at(e,t){rt(e,t),rt(e+"Capture",t)}function rt(e,t){for(nt[e]=t,e=0;e<t.length;e++)tt.add(t[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},lt={};function st(e,t,n){if(r=t,ae.call(lt,r)||!ae.call(ot,r)&&(it.test(r)?lt[r]=!0:(ot[r]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var a=t.toLowerCase().slice(0,5);if("data-"!==a&&"aria-"!==a)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var r}function ct(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function ut(e,t,n,a){if(null===a)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+a)}}function pt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function dt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ft(e){if(!e._valueTracker){var t=dt(e)?"checked":"value";e._valueTracker=function(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof a&&"function"===typeof a.get&&"function"===typeof a.set){var r=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(e){n=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=dt(e)?e.checked?"true":"false":e.value),(e=a)!==n&&(t.setValue(e),!0)}function ht(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var gt=/[\n"\\]/g;function wt(e){return e.replace(gt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function yt(e,t,n,a,r,i,o,l){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+pt(t)):e.value!==""+pt(t)&&(e.value=""+pt(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?bt(e,o,pt(t)):null!=n?bt(e,o,pt(n)):null!=a&&e.removeAttribute("value"),null==r&&null!=i&&(e.defaultChecked=!!i),null!=r&&(e.checked=r&&"function"!==typeof r&&"symbol"!==typeof r),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+pt(l):e.removeAttribute("name")}function xt(e,t,n,a,r,i,o,l){if(null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.type=i),null!=t||null!=n){if(!("submit"!==i&&"reset"!==i||void 0!==t&&null!==t))return void ft(e);n=null!=n?""+pt(n):"",t=null!=t?""+pt(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}a="function"!==typeof(a=null!=a?a:r)&&"symbol"!==typeof a&&!!a,e.checked=l?e.checked:!!a,e.defaultChecked=!!a,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o),ft(e)}function bt(e,t,n){"number"===t&&ht(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vt(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n)return e[r].selected=!0,void(a&&(e[r].defaultSelected=!0));null!==t||e[r].disabled||(t=e[r])}null!==t&&(t.selected=!0)}}function kt(e,t,n){null==t||((t=""+pt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+pt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function zt(e,t,n,a){if(null==t){if(null!=a){if(null!=n)throw Error(o(92));if(N(a)){if(1<a.length)throw Error(o(93));a=a[0]}n=a}null==n&&(n=""),t=n}n=pt(t),e.defaultValue=n,(a=e.textContent)===n&&""!==a&&null!==a&&(e.value=a),ft(e)}function jt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var St=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ct(e,t,n){var a=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?a?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":a?e.setProperty(t,n):"number"!==typeof n||0===n||St.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Et(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var a in n)!n.hasOwnProperty(a)||null!=t&&t.hasOwnProperty(a)||(0===a.indexOf("--")?e.setProperty(a,""):"float"===a?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&Ct(e,r,a)}else for(var i in t)t.hasOwnProperty(i)&&Ct(e,i,t[i])}function Pt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $t=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _t(e){return Tt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var Nt=null;function Rt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Mt=null,Dt=null;function Lt(e){var t=Xe(e);if(t&&(e=t.stateNode)){var n=e[We]||null;e:switch(e=t.stateNode,t.type){case"input":if(yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+wt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[We]||null;if(!r)throw Error(o(90));yt(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)(a=n[t]).form===e.form&&mt(a)}break e;case"textarea":kt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&vt(e,!!n.multiple,t,!1)}}}var At=!1;function It(e,t,n){if(At)return e(t,n);At=!0;try{return e(t)}finally{if(At=!1,(null!==Mt||null!==Dt)&&(eu(),Mt&&(t=Mt,e=Dt,Dt=Mt=null,Lt(t),e)))for(t=0;t<e.length;t++)Lt(e[t])}}function Ft(e,t){var n=e.stateNode;if(null===n)return null;var a=n[We]||null;if(null===a)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(a=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!a;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Ut=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Wt=!1;if(Ut)try{var Ht={};Object.defineProperty(Ht,"passive",{get:function(){Wt=!0}}),window.addEventListener("test",Ht,Ht),window.removeEventListener("test",Ht,Ht)}catch(Zd){Wt=!1}var Bt=null,Kt=null,Qt=null;function Gt(){if(Qt)return Qt;var e,t,n=Kt,a=n.length,r="value"in Bt?Bt.value:Bt.textContent,i=r.length;for(e=0;e<a&&n[e]===r[e];e++);var o=a-e;for(t=1;t<=o&&n[a-t]===r[i-t];t++);return Qt=r.slice(e,1<t?1-t:void 0)}function Vt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Yt(){return!0}function qt(){return!1}function Xt(e){function t(t,n,a,r,i){for(var o in this._reactName=t,this._targetInst=a,this.type=n,this.nativeEvent=r,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(r):r[o]);return this.isDefaultPrevented=(null!=r.defaultPrevented?r.defaultPrevented:!1===r.returnValue)?Yt:qt,this.isPropagationStopped=qt,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Yt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Yt)},persist:function(){},isPersistent:Yt}),t}var Zt,Jt,en,tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nn=Xt(tn),an=f({},tn,{view:0,detail:0}),rn=Xt(an),on=f({},an,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&"mousemove"===e.type?(Zt=e.screenX-en.screenX,Jt=e.screenY-en.screenY):Jt=Zt=0,en=e),Zt)},movementY:function(e){return"movementY"in e?e.movementY:Jt}}),ln=Xt(on),sn=Xt(f({},on,{dataTransfer:0})),cn=Xt(f({},an,{relatedTarget:0})),un=Xt(f({},tn,{animationName:0,elapsedTime:0,pseudoElement:0})),pn=Xt(f({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),dn=Xt(f({},tn,{data:0})),fn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=hn[e])&&!!t[e]}function wn(){return gn}var yn=Xt(f({},an,{key:function(e){if(e.key){var t=fn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Vt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?mn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wn,charCode:function(e){return"keypress"===e.type?Vt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Vt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),xn=Xt(f({},on,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),bn=Xt(f({},an,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wn})),vn=Xt(f({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),kn=Xt(f({},on,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),zn=Xt(f({},tn,{newState:0,oldState:0})),jn=[9,13,27,32],Sn=Ut&&"CompositionEvent"in window,Cn=null;Ut&&"documentMode"in document&&(Cn=document.documentMode);var En=Ut&&"TextEvent"in window&&!Cn,Pn=Ut&&(!Sn||Cn&&8<Cn&&11>=Cn),$n=String.fromCharCode(32),Tn=!1;function _n(e,t){switch(e){case"keyup":return-1!==jn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function On(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Nn=!1;var Rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Rn[e.type]:"textarea"===t}function Dn(e,t,n,a){Mt?Dt?Dt.push(a):Dt=[a]:Mt=a,0<(t=rp(t,"onChange")).length&&(n=new nn("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ln=null,An=null;function In(e){qu(e,0)}function Fn(e){if(mt(Ze(e)))return e}function Un(e,t){if("change"===e)return t}var Wn=!1;if(Ut){var Hn;if(Ut){var Bn="oninput"in document;if(!Bn){var Kn=document.createElement("div");Kn.setAttribute("oninput","return;"),Bn="function"===typeof Kn.oninput}Hn=Bn}else Hn=!1;Wn=Hn&&(!document.documentMode||9<document.documentMode)}function Gn(){Ln&&(Ln.detachEvent("onpropertychange",Vn),An=Ln=null)}function Vn(e){if("value"===e.propertyName&&Fn(An)){var t=[];Dn(t,An,e,Rt(e)),It(In,t)}}function Yn(e,t,n){"focusin"===e?(Gn(),An=n,(Ln=t).attachEvent("onpropertychange",Vn)):"focusout"===e&&Gn()}function qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Fn(An)}function Xn(e,t){if("click"===e)return Fn(t)}function Zn(e,t){if("input"===e||"change"===e)return Fn(t)}var Jn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function ea(e,t){if(Jn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!ae.call(t,r)||!Jn(e[r],t[r]))return!1}return!0}function ta(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function na(e,t){var n,a=ta(e);for(e=0;a;){if(3===a.nodeType){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ta(a)}}function aa(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?aa(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ra(e){for(var t=ht((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(a){n=!1}if(!n)break;t=ht((e=t.contentWindow).document)}return t}function ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var oa=Ut&&"documentMode"in document&&11>=document.documentMode,la=null,sa=null,ca=null,ua=!1;function pa(e,t,n){var a=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ua||null==la||la!==ht(a)||("selectionStart"in(a=la)&&ia(a)?a={start:a.selectionStart,end:a.selectionEnd}:a={anchorNode:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset},ca&&ea(ca,a)||(ca=a,0<(a=rp(sa,"onSelect")).length&&(t=new nn("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=la)))}function da(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fa={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionrun:da("Transition","TransitionRun"),transitionstart:da("Transition","TransitionStart"),transitioncancel:da("Transition","TransitionCancel"),transitionend:da("Transition","TransitionEnd")},ma={},ha={};function ga(e){if(ma[e])return ma[e];if(!fa[e])return e;var t,n=fa[e];for(t in n)if(n.hasOwnProperty(t)&&t in ha)return ma[e]=n[t];return e}Ut&&(ha=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);var wa=ga("animationend"),ya=ga("animationiteration"),xa=ga("animationstart"),ba=ga("transitionrun"),va=ga("transitionstart"),ka=ga("transitioncancel"),za=ga("transitionend"),ja=new Map,Sa="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ca(e,t){ja.set(e,t),at(t,[e])}Sa.push("scrollEnd");var Ea="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},Pa=[],$a=0,Ta=0;function _a(){for(var e=$a,t=Ta=$a=0;t<e;){var n=Pa[t];Pa[t++]=null;var a=Pa[t];Pa[t++]=null;var r=Pa[t];Pa[t++]=null;var i=Pa[t];if(Pa[t++]=null,null!==a&&null!==r){var o=a.pending;null===o?r.next=r:(r.next=o.next,o.next=r),a.pending=r}0!==i&&Ma(n,r,i)}}function Oa(e,t,n,a){Pa[$a++]=e,Pa[$a++]=t,Pa[$a++]=n,Pa[$a++]=a,Ta|=a,e.lanes|=a,null!==(e=e.alternate)&&(e.lanes|=a)}function Na(e,t,n,a){return Oa(e,t,n,a),Da(e)}function Ra(e,t){return Oa(e,null,null,t),Da(e)}function Ma(e,t,n){e.lanes|=n;var a=e.alternate;null!==a&&(a.lanes|=n);for(var r=!1,i=e.return;null!==i;)i.childLanes|=n,null!==(a=i.alternate)&&(a.childLanes|=n),22===i.tag&&(null===(e=i.stateNode)||1&e._visibility||(r=!0)),e=i,i=i.return;return 3===e.tag?(i=e.stateNode,r&&null!==t&&(r=31-be(n),null===(a=(e=i.hiddenUpdates)[r])?e[r]=[t]:a.push(t),t.lane=536870912|n),i):null}function Da(e){if(50<Kc)throw Kc=0,Qc=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var La={};function Aa(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ia(e,t,n,a){return new Aa(e,t,n,a)}function Fa(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ua(e,t){var n=e.alternate;return null===n?((n=Ia(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Wa(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ha(e,t,n,a,r,i){var l=0;if(a=e,"function"===typeof e)Fa(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case E:return(e=Ia(31,n,t,r)).elementType=E,e.lanes=i,e;case w:return Ba(n.children,r,i,t);case y:l=8,r|=24;break;case x:return(e=Ia(12,n,t,2|r)).elementType=x,e.lanes=i,e;case z:return(e=Ia(13,n,t,r)).elementType=z,e.lanes=i,e;case j:return(e=Ia(19,n,t,r)).elementType=j,e.lanes=i,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case v:l=10;break e;case b:l=9;break e;case k:l=11;break e;case S:l=14;break e;case C:l=16,a=null;break e}l=29,n=Error(o(130,null===e?"null":typeof e,"")),a=null}return(t=Ia(l,n,t,r)).elementType=e,t.type=a,t.lanes=i,t}function Ba(e,t,n,a){return(e=Ia(7,e,a,t)).lanes=n,e}function Ka(e,t,n){return(e=Ia(6,e,null,t)).lanes=n,e}function Qa(e){var t=Ia(18,null,null,0);return t.stateNode=e,t}function Ga(e,t,n){return(t=Ia(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Va=new WeakMap;function Ya(e,t){if("object"===typeof e&&null!==e){var n=Va.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ne(t)},Va.set(e,t),t)}return{value:e,source:t,stack:ne(t)}}var qa=[],Xa=0,Za=null,Ja=0,er=[],tr=0,nr=null,ar=1,rr="";function ir(e,t){qa[Xa++]=Ja,qa[Xa++]=Za,Za=e,Ja=t}function or(e,t,n){er[tr++]=ar,er[tr++]=rr,er[tr++]=nr,nr=e;var a=ar;e=rr;var r=32-be(a)-1;a&=~(1<<r),n+=1;var i=32-be(t)+r;if(30<i){var o=r-r%5;i=(a&(1<<o)-1).toString(32),a>>=o,r-=o,ar=1<<32-be(t)+r|n<<r|a,rr=i+e}else ar=1<<i|n<<r|a,rr=e}function lr(e){null!==e.return&&(ir(e,1),or(e,1,0))}function sr(e){for(;e===Za;)Za=qa[--Xa],qa[Xa]=null,Ja=qa[--Xa],qa[Xa]=null;for(;e===nr;)nr=er[--tr],er[tr]=null,rr=er[--tr],er[tr]=null,ar=er[--tr],er[tr]=null}function cr(e,t){er[tr++]=ar,er[tr++]=rr,er[tr++]=nr,ar=t.id,rr=t.overflow,nr=e}var ur=null,pr=null,dr=!1,fr=null,mr=!1,hr=Error(o(519));function gr(e){throw kr(Ya(Error(o(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),hr}function wr(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ue]=e,t[We]=a,n){case"dialog":Xu("cancel",t),Xu("close",t);break;case"iframe":case"object":case"embed":Xu("load",t);break;case"video":case"audio":for(n=0;n<Vu.length;n++)Xu(Vu[n],t);break;case"source":Xu("error",t);break;case"img":case"image":case"link":Xu("error",t),Xu("load",t);break;case"details":Xu("toggle",t);break;case"input":Xu("invalid",t),xt(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Xu("invalid",t);break;case"textarea":Xu("invalid",t),zt(t,a.value,a.defaultValue,a.children)}"string"!==typeof(n=a.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===a.suppressHydrationWarning||up(t.textContent,n)?(null!=a.popover&&(Xu("beforetoggle",t),Xu("toggle",t)),null!=a.onScroll&&Xu("scroll",t),null!=a.onScrollEnd&&Xu("scrollend",t),null!=a.onClick&&(t.onclick=Ot),t=!0):t=!1,t||gr(e,!0)}function yr(e){for(ur=e.return;ur;)switch(ur.tag){case 5:case 31:case 13:return void(mr=!1);case 27:case 3:return void(mr=!0);default:ur=ur.return}}function xr(e){if(e!==ur)return!1;if(!dr)return yr(e),dr=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||bp(e.type,e.memoizedProps)),t=!t),t&&pr&&gr(e),yr(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));pr=Dp(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));pr=Dp(e)}else 27===n?(n=pr,Ep(e.type)?(e=Mp,Mp=null,pr=e):pr=n):pr=ur?Rp(e.stateNode.nextSibling):null;return!0}function br(){pr=ur=null,dr=!1}function vr(){var e=fr;return null!==e&&(null===_c?_c=e:_c.push.apply(_c,e),fr=null),e}function kr(e){null===fr?fr=[e]:fr.push(e)}var zr=I(null),jr=null,Sr=null;function Cr(e,t,n){U(zr,t._currentValue),t._currentValue=n}function Er(e){e._currentValue=zr.current,F(zr)}function Pr(e,t,n){for(;null!==e;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==a&&(a.childLanes|=t)):null!==a&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function $r(e,t,n,a){var r=e.child;for(null!==r&&(r.return=e);null!==r;){var i=r.dependencies;if(null!==i){var l=r.child;i=i.firstContext;e:for(;null!==i;){var s=i;i=r;for(var c=0;c<t.length;c++)if(s.context===t[c]){i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),Pr(i.return,n,e),a||(l=null);break e}i=s.next}}else if(18===r.tag){if(null===(l=r.return))throw Error(o(341));l.lanes|=n,null!==(i=l.alternate)&&(i.lanes|=n),Pr(l,n,e),l=null}else l=r.child;if(null!==l)l.return=r;else for(l=r;null!==l;){if(l===e){l=null;break}if(null!==(r=l.sibling)){r.return=l.return,l=r;break}l=l.return}r=l}}function Tr(e,t,n,a){e=null;for(var r=t,i=!1;null!==r;){if(!i)if(0!==(524288&r.flags))i=!0;else if(0!==(262144&r.flags))break;if(10===r.tag){var l=r.alternate;if(null===l)throw Error(o(387));if(null!==(l=l.memoizedProps)){var s=r.type;Jn(r.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(r===G.current){if(null===(l=r.alternate))throw Error(o(387));l.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(null!==e?e.push(pd):e=[pd])}r=r.return}null!==e&&$r(t,e,n,a),t.flags|=262144}function _r(e){for(e=e.firstContext;null!==e;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Or(e){jr=e,Sr=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Nr(e){return Mr(jr,e)}function Rr(e,t){return null===jr&&Or(e),Mr(e,t)}function Mr(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Sr){if(null===e)throw Error(o(308));Sr=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sr=Sr.next=t;return n}var Dr="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Lr=a.unstable_scheduleCallback,Ar=a.unstable_NormalPriority,Ir={$$typeof:v,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fr(){return{controller:new Dr,data:new Map,refCount:0}}function Ur(e){e.refCount--,0===e.refCount&&Lr(Ar,function(){e.controller.abort()})}var Wr=null,Hr=0,Br=0,Kr=null;function Qr(){if(0===--Hr&&null!==Wr){null!==Kr&&(Kr.status="fulfilled");var e=Wr;Wr=null,Br=0,Kr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Gr=R.S;R.S=function(e,t){Rc=se(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Wr){var n=Wr=[];Hr=0,Br=Hu(),Kr={status:"pending",value:void 0,then:function(e){n.push(e)}}}Hr++,t.then(Qr,Qr)}(0,t),null!==Gr&&Gr(e,t)};var Vr=I(null);function Yr(){var e=Vr.current;return null!==e?e:hc.pooledCache}function qr(e,t){U(Vr,null===t?Vr.current:t.pool)}function Xr(){var e=Yr();return null===e?null:{parent:Ir._currentValue,pool:e}}var Zr=Error(o(460)),Jr=Error(o(474)),ei=Error(o(542)),ti={then:function(){}};function ni(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ai(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Ot,Ot),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw li(e=t.reason),e;default:if("string"===typeof t.status)t.then(Ot,Ot);else{if(null!==(e=hc)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw li(e=t.reason),e}throw ii=t,Zr}}function ri(e){try{return(0,e._init)(e._payload)}catch(Qn){if(null!==Qn&&"object"===typeof Qn&&"function"===typeof Qn.then)throw ii=Qn,Zr;throw Qn}}var ii=null;function oi(){if(null===ii)throw Error(o(459));var e=ii;return ii=null,e}function li(e){if(e===Zr||e===ei)throw Error(o(483))}var si=null,ci=0;function ui(e){var t=ci;return ci+=1,null===si&&(si=[]),ai(si,e,t)}function pi(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function di(e,t){if(t.$$typeof===m)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fi(e){function t(t,n){if(e){var a=t.deletions;null===a?(t.deletions=[n],t.flags|=16):a.push(n)}}function n(n,a){if(!e)return null;for(;null!==a;)t(n,a),a=a.sibling;return null}function a(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function r(e,t){return(e=Ua(e,t)).index=0,e.sibling=null,e}function i(t,n,a){return t.index=a,e?null!==(a=t.alternate)?(a=a.index)<n?(t.flags|=67108866,n):a:(t.flags|=67108866,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,a){return null===t||6!==t.tag?((t=Ka(n,e.mode,a)).return=e,t):((t=r(t,n)).return=e,t)}function c(e,t,n,a){var i=n.type;return i===w?p(e,t,n.props.children,a,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===C&&ri(i)===t.type)?(pi(t=r(t,n.props),n),t.return=e,t):(pi(t=Ha(n.type,n.key,n.props,null,e.mode,a),n),t.return=e,t)}function u(e,t,n,a){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ga(n,e.mode,a)).return=e,t):((t=r(t,n.children||[])).return=e,t)}function p(e,t,n,a,i){return null===t||7!==t.tag?((t=Ba(n,e.mode,a,i)).return=e,t):((t=r(t,n)).return=e,t)}function d(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Ka(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case h:return pi(n=Ha(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case g:return(t=Ga(t,e.mode,n)).return=e,t;case C:return d(e,t=ri(t),n)}if(N(t)||T(t))return(t=Ba(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return d(e,ui(t),n);if(t.$$typeof===v)return d(e,Rr(e,t),n);di(e,t)}return null}function f(e,t,n,a){var r=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==r?null:s(e,t,""+n,a);if("object"===typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===r?c(e,t,n,a):null;case g:return n.key===r?u(e,t,n,a):null;case C:return f(e,t,n=ri(n),a)}if(N(n)||T(n))return null!==r?null:p(e,t,n,a,null);if("function"===typeof n.then)return f(e,t,ui(n),a);if(n.$$typeof===v)return f(e,t,Rr(e,n),a);di(e,n)}return null}function m(e,t,n,a,r){if("string"===typeof a&&""!==a||"number"===typeof a||"bigint"===typeof a)return s(t,e=e.get(n)||null,""+a,r);if("object"===typeof a&&null!==a){switch(a.$$typeof){case h:return c(t,e=e.get(null===a.key?n:a.key)||null,a,r);case g:return u(t,e=e.get(null===a.key?n:a.key)||null,a,r);case C:return m(e,t,n,a=ri(a),r)}if(N(a)||T(a))return p(t,e=e.get(n)||null,a,r,null);if("function"===typeof a.then)return m(e,t,n,ui(a),r);if(a.$$typeof===v)return m(e,t,n,Rr(t,a),r);di(t,a)}return null}function y(s,c,u,p){if("object"===typeof u&&null!==u&&u.type===w&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case h:e:{for(var x=u.key;null!==c;){if(c.key===x){if((x=u.type)===w){if(7===c.tag){n(s,c.sibling),(p=r(c,u.props.children)).return=s,s=p;break e}}else if(c.elementType===x||"object"===typeof x&&null!==x&&x.$$typeof===C&&ri(x)===c.type){n(s,c.sibling),pi(p=r(c,u.props),u),p.return=s,s=p;break e}n(s,c);break}t(s,c),c=c.sibling}u.type===w?((p=Ba(u.props.children,s.mode,p,u.key)).return=s,s=p):(pi(p=Ha(u.type,u.key,u.props,null,s.mode,p),u),p.return=s,s=p)}return l(s);case g:e:{for(x=u.key;null!==c;){if(c.key===x){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(s,c.sibling),(p=r(c,u.children||[])).return=s,s=p;break e}n(s,c);break}t(s,c),c=c.sibling}(p=Ga(u,s.mode,p)).return=s,s=p}return l(s);case C:return y(s,c,u=ri(u),p)}if(N(u))return function(r,o,l,s){for(var c=null,u=null,p=o,h=o=0,g=null;null!==p&&h<l.length;h++){p.index>h?(g=p,p=null):g=p.sibling;var w=f(r,p,l[h],s);if(null===w){null===p&&(p=g);break}e&&p&&null===w.alternate&&t(r,p),o=i(w,o,h),null===u?c=w:u.sibling=w,u=w,p=g}if(h===l.length)return n(r,p),dr&&ir(r,h),c;if(null===p){for(;h<l.length;h++)null!==(p=d(r,l[h],s))&&(o=i(p,o,h),null===u?c=p:u.sibling=p,u=p);return dr&&ir(r,h),c}for(p=a(p);h<l.length;h++)null!==(g=m(p,r,h,l[h],s))&&(e&&null!==g.alternate&&p.delete(null===g.key?h:g.key),o=i(g,o,h),null===u?c=g:u.sibling=g,u=g);return e&&p.forEach(function(e){return t(r,e)}),dr&&ir(r,h),c}(s,c,u,p);if(T(u)){if("function"!==typeof(x=T(u)))throw Error(o(150));return function(r,l,s,c){if(null==s)throw Error(o(151));for(var u=null,p=null,h=l,g=l=0,w=null,y=s.next();null!==h&&!y.done;g++,y=s.next()){h.index>g?(w=h,h=null):w=h.sibling;var x=f(r,h,y.value,c);if(null===x){null===h&&(h=w);break}e&&h&&null===x.alternate&&t(r,h),l=i(x,l,g),null===p?u=x:p.sibling=x,p=x,h=w}if(y.done)return n(r,h),dr&&ir(r,g),u;if(null===h){for(;!y.done;g++,y=s.next())null!==(y=d(r,y.value,c))&&(l=i(y,l,g),null===p?u=y:p.sibling=y,p=y);return dr&&ir(r,g),u}for(h=a(h);!y.done;g++,y=s.next())null!==(y=m(h,r,g,y.value,c))&&(e&&null!==y.alternate&&h.delete(null===y.key?g:y.key),l=i(y,l,g),null===p?u=y:p.sibling=y,p=y);return e&&h.forEach(function(e){return t(r,e)}),dr&&ir(r,g),u}(s,c,u=x.call(u),p)}if("function"===typeof u.then)return y(s,c,ui(u),p);if(u.$$typeof===v)return y(s,c,Rr(s,u),p);di(s,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(s,c.sibling),(p=r(c,u)).return=s,s=p):(n(s,c),(p=Ka(u,s.mode,p)).return=s,s=p),l(s)):n(s,c)}return function(e,t,n,a){try{ci=0;var r=y(e,t,n,a);return si=null,r}catch(Qn){if(Qn===Zr||Qn===ei)throw Qn;var i=Ia(29,Qn,null,e.mode);return i.lanes=a,i.return=e,i}}}var mi=fi(!0),hi=fi(!1),gi=!1;function wi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function bi(e,t,n){var a=e.updateQueue;if(null===a)return null;if(a=a.shared,0!==(2&mc)){var r=a.pending;return null===r?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Da(e),Ma(e,null,n),t}return Oa(e,a,t,n),Da(e)}function vi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var a=t.lanes;n|=a&=e.pendingLanes,t.lanes=n,Re(e,n)}}function ki(e,t){var n=e.updateQueue,a=e.alternate;if(null!==a&&n===(a=a.updateQueue)){var r=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===i?r=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?r=i=t:i=i.next=t}else r=i=t;return n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var zi=!1;function ji(){if(zi){if(null!==Kr)throw Kr}}function Si(e,t,n,a){zi=!1;var r=e.updateQueue;gi=!1;var i=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(null!==l){r.shared.pending=null;var s=l,c=s.next;s.next=null,null===o?i=c:o.next=c,o=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==i){var p=r.baseState;for(o=0,u=c=s=null,l=i;;){var d=-536870913&l.lane,m=d!==l.lane;if(m?(wc&d)===d:(a&d)===d){0!==d&&d===Br&&(zi=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,g=l;d=t;var w=n;switch(g.tag){case 1:if("function"===typeof(h=g.payload)){p=h.call(w,p,d);break e}p=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(d="function"===typeof(h=g.payload)?h.call(w,p,d):h)||void 0===d)break e;p=f({},p,d);break e;case 2:gi=!0}}null!==(d=l.callback)&&(e.flags|=64,m&&(e.flags|=8192),null===(m=r.callbacks)?r.callbacks=[d]:m.push(d))}else m={lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=m,s=p):u=u.next=m,o|=d;if(null===(l=l.next)){if(null===(l=r.shared.pending))break;l=(m=l).next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}null===u&&(s=p),r.baseState=s,r.firstBaseUpdate=c,r.lastBaseUpdate=u,null===i&&(r.shared.lanes=0),Sc|=o,e.lanes=o,e.memoizedState=p}}function Ci(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function Ei(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)Ci(n[e],t)}var Pi=I(null),$i=I(0);function Ti(e,t){U($i,e=zc),U(Pi,t),zc=e|t.baseLanes}function _i(){U($i,zc),U(Pi,Pi.current)}function Oi(){zc=$i.current,F(Pi),F($i)}var Ni=I(null),Ri=null;function Mi(e){var t=e.alternate;U(Fi,1&Fi.current),U(Ni,e),null===Ri&&(null===t||null!==Pi.current||null!==t.memoizedState)&&(Ri=e)}function Di(e){U(Fi,Fi.current),U(Ni,e),null===Ri&&(Ri=e)}function Li(e){22===e.tag?(U(Fi,Fi.current),U(Ni,e),null===Ri&&(Ri=e)):Ai()}function Ai(){U(Fi,Fi.current),U(Ni,Ni.current)}function Ii(e){F(Ni),Ri===e&&(Ri=null),F(Fi)}var Fi=I(0);function Ui(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Op(n)||Np(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child;continue}}else if(0!==(128&t.flags))return t;if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wi=0,Hi=null,Bi=null,Ki=null,Qi=!1,Gi=!1,Vi=!1,Yi=0,qi=0,Xi=null,Zi=0;function Ji(){throw Error(o(321))}function eo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jn(e[n],t[n]))return!1;return!0}function to(e,t,n,a,r,i){return Wi=i,Hi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=null===e||null===e.memoizedState?wl:yl,Vi=!1,i=n(a,r),Vi=!1,Gi&&(i=ao(t,n,a,r)),no(e),i}function no(e){R.H=gl;var t=null!==Bi&&null!==Bi.next;if(Wi=0,Ki=Bi=Hi=null,Qi=!1,qi=0,Xi=null,t)throw Error(o(300));null===e||Rl||null!==(e=e.dependencies)&&_r(e)&&(Rl=!0)}function ao(e,t,n,a){Hi=e;var r=0;do{if(Gi&&(Xi=null),qi=0,Gi=!1,25<=r)throw Error(o(301));if(r+=1,Ki=Bi=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}R.H=xl,i=t(n,a)}while(Gi);return i}function ro(){var e=R.H,t=e.useState()[0];return t="function"===typeof t.then?uo(t):t,e=e.useState()[0],(null!==Bi?Bi.memoizedState:null)!==e&&(Hi.flags|=1024),t}function io(){var e=0!==Yi;return Yi=0,e}function oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function lo(e){if(Qi){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Qi=!1}Wi=0,Ki=Bi=Hi=null,Gi=!1,qi=Yi=0,Xi=null}function so(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Ki?Hi.memoizedState=Ki=e:Ki=Ki.next=e,Ki}function co(){if(null===Bi){var e=Hi.alternate;e=null!==e?e.memoizedState:null}else e=Bi.next;var t=null===Ki?Hi.memoizedState:Ki.next;if(null!==t)Ki=t,Bi=e;else{if(null===e){if(null===Hi.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(Bi=e).memoizedState,baseState:Bi.baseState,baseQueue:Bi.baseQueue,queue:Bi.queue,next:null},null===Ki?Hi.memoizedState=Ki=e:Ki=Ki.next=e}return Ki}function uo(e){var t=qi;return qi+=1,null===Xi&&(Xi=[]),e=ai(Xi,e,t),t=Hi,null===(null===Ki?t.memoizedState:Ki.next)&&(t=t.alternate,R.H=null===t||null===t.memoizedState?wl:yl),e}function po(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return uo(e);if(e.$$typeof===v)return Nr(e)}throw Error(o(438,String(e)))}function fo(e){var t=null,n=Hi.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var a=Hi.alternate;null!==a&&(null!==(a=a.updateQueue)&&(null!=(a=a.memoCache)&&(t={data:a.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Hi.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=P;return t.index++,n}function mo(e,t){return"function"===typeof t?t(e):t}function ho(e){return go(co(),Bi,e)}function go(e,t,n){var a=e.queue;if(null===a)throw Error(o(311));a.lastRenderedReducer=n;var r=e.baseQueue,i=a.pending;if(null!==i){if(null!==r){var l=r.next;r.next=i.next,i.next=l}t.baseQueue=r=i,a.pending=null}if(i=e.baseState,null===r)e.memoizedState=i;else{var s=l=null,c=null,u=t=r.next,p=!1;do{var d=-536870913&u.lane;if(d!==u.lane?(wc&d)===d:(Wi&d)===d){var f=u.revertLane;if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),d===Br&&(p=!0);else{if((Wi&f)===f){u=u.next,f===Br&&(p=!0);continue}d={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=d,l=i):c=c.next=d,Hi.lanes|=f,Sc|=f}d=u.action,Vi&&n(i,d),i=u.hasEagerState?u.eagerState:n(i,d)}else f={lane:d,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,l=i):c=c.next=f,Hi.lanes|=d,Sc|=d;u=u.next}while(null!==u&&u!==t);if(null===c?l=i:c.next=s,!Jn(i,e.memoizedState)&&(Rl=!0,p&&null!==(n=Kr)))throw n;e.memoizedState=i,e.baseState=l,e.baseQueue=c,a.lastRenderedState=i}return null===r&&(a.lanes=0),[e.memoizedState,a.dispatch]}function wo(e){var t=co(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,i=t.memoizedState;if(null!==r){n.pending=null;var l=r=r.next;do{i=e(i,l.action),l=l.next}while(l!==r);Jn(i,t.memoizedState)||(Rl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function yo(e,t,n){var a=Hi,r=co(),i=dr;if(i){if(void 0===n)throw Error(o(407));n=n()}else n=t();var l=!Jn((Bi||r).memoizedState,n);if(l&&(r.memoizedState=n,Rl=!0),r=r.queue,Ho(vo.bind(null,a,r,e),[e]),r.getSnapshot!==t||l||null!==Ki&&1&Ki.memoizedState.tag){if(a.flags|=2048,Ao(9,{destroy:void 0},bo.bind(null,a,r,n,t),null),null===hc)throw Error(o(349));i||0!==(127&Wi)||xo(a,t,n)}return n}function xo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Hi.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Hi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function bo(e,t,n,a){t.value=n,t.getSnapshot=a,ko(t)&&zo(e)}function vo(e,t,n){return n(function(){ko(t)&&zo(e)})}function ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jn(e,n)}catch(a){return!0}}function zo(e){var t=Ra(e,2);null!==t&&Yc(t,e,2)}function jo(e){var t=so();if("function"===typeof e){var n=e;if(e=n(),Vi){xe(!0);try{n()}finally{xe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:e},t}function So(e,t,n,a){return e.baseState=n,go(e,Bi,"function"===typeof a?a:mo)}function Co(e,t,n,a,r){if(fl(e))throw Error(o(485));if(null!==(e=t.action)){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==R.T?n(!0):i.isTransition=!1,a(i),null===(n=t.pending)?(i.next=t.pending=i,Eo(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Eo(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var i=R.T,o={};R.T=o;try{var l=n(r,a),s=R.S;null!==s&&s(o,l),Po(e,t,l)}catch(c){To(e,t,c)}finally{null!==i&&null!==o.types&&(i.types=o.types),R.T=i}}else try{Po(e,t,i=n(r,a))}catch(u){To(e,t,u)}}function Po(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){$o(e,t,n)},function(n){return To(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status="fulfilled",t.value=n,_o(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,Eo(e,n)))}function To(e,t,n){var a=e.pending;if(e.pending=null,null!==a){a=a.next;do{t.status="rejected",t.reason=n,_o(t),t=t.next}while(t!==a)}e.action=null}function _o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Oo(e,t){return t}function No(e,t){if(dr){var n=hc.formState;if(null!==n){e:{var a=Hi;if(dr){if(pr){t:{for(var r=pr,i=mr;8!==r.nodeType;){if(!i){r=null;break t}if(null===(r=Rp(r.nextSibling))){r=null;break t}}r="F!"===(i=r.data)||"F"===i?r:null}if(r){pr=Rp(r.nextSibling),a="F!"===r.data;break e}}gr(a)}a=!1}a&&(t=n[0])}}return(n=so()).memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:t},n.queue=a,n=ul.bind(null,Hi,a),a.dispatch=n,a=jo(!1),i=dl.bind(null,Hi,!1,a.queue),r={state:t,dispatch:null,action:e,pending:null},(a=so()).queue=r,n=Co.bind(null,Hi,r,i,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function Ro(e){return Mo(co(),Bi,e)}function Mo(e,t,n){if(t=go(e,t,Oo)[0],e=ho(mo)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var a=uo(t)}catch(Qn){if(Qn===Zr)throw ei;throw Qn}else a=t;var r=(t=co()).queue,i=r.dispatch;return n!==t.memoizedState&&(Hi.flags|=2048,Ao(9,{destroy:void 0},Do.bind(null,r,n),null)),[a,i,e]}function Do(e,t){e.action=t}function Lo(e){var t=co(),n=Bi;if(null!==n)return Mo(t,n,e);co(),t=t.memoizedState;var a=(n=co()).queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ao(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},null===(t=Hi.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Hi.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Io(){return co().memoizedState}function Fo(e,t,n,a){var r=so();Hi.flags|=e,r.memoizedState=Ao(1|t,{destroy:void 0},n,void 0===a?null:a)}function Uo(e,t,n,a){var r=co();a=void 0===a?null:a;var i=r.memoizedState.inst;null!==Bi&&null!==a&&eo(a,Bi.memoizedState.deps)?r.memoizedState=Ao(t,i,n,a):(Hi.flags|=e,r.memoizedState=Ao(1|t,i,n,a))}function Wo(e,t){Fo(8390656,8,e,t)}function Ho(e,t){Uo(2048,8,e,t)}function Bo(e){var t=co().memoizedState;return function(e){Hi.flags|=4;var t=Hi.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},Hi.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&mc))throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Ko(e,t){return Uo(4,2,e,t)}function Qo(e,t){return Uo(4,4,e,t)}function Go(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Vo(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Uo(4,4,Go.bind(null,t,e),n)}function Yo(){}function qo(e,t){var n=co();t=void 0===t?null:t;var a=n.memoizedState;return null!==t&&eo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Xo(e,t){var n=co();t=void 0===t?null:t;var a=n.memoizedState;if(null!==t&&eo(t,a[1]))return a[0];if(a=e(),Vi){xe(!0);try{e()}finally{xe(!1)}}return n.memoizedState=[a,t],a}function Zo(e,t,n){return void 0===n||0!==(1073741824&Wi)&&0===(261930&wc)?e.memoizedState=t:(e.memoizedState=n,e=Vc(),Hi.lanes|=e,Sc|=e,n)}function Jo(e,t,n,a){return Jn(n,t)?n:null!==Pi.current?(e=Zo(e,n,a),Jn(e,t)||(Rl=!0),e):0===(42&Wi)||0!==(1073741824&Wi)&&0===(261930&wc)?(Rl=!0,e.memoizedState=n):(e=Vc(),Hi.lanes|=e,Sc|=e,t)}function el(e,t,n,a,r){var i=M.p;M.p=0!==i&&8>i?i:8;var o=R.T,l={};R.T=l,dl(e,!1,t,n);try{var s=r(),c=R.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)pl(e,t,function(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(a.status="rejected",a.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),a}(s,a),Gc());else pl(e,t,a,Gc())}catch(u){pl(e,t,{then:function(){},status:"rejected",reason:u},Gc())}finally{M.p=i,null!==o&&null!==l.types&&(o.types=l.types),R.T=o}}function tl(){}function nl(e,t,n,a){if(5!==e.tag)throw Error(o(476));var r=al(e).queue;el(e,r,t,D,null===n?tl:function(){return rl(e),n(a)})}function al(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:D,baseState:D,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:D},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function rl(e){var t=al(e);null===t.next&&(t=e.alternate.memoizedState),pl(e,t.next.queue,{},Gc())}function il(){return Nr(pd)}function ol(){return co().memoizedState}function ll(){return co().memoizedState}function sl(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Gc(),a=bi(t,e=xi(n),n);return null!==a&&(Yc(a,t,n),vi(a,t,n)),t={cache:Fr()},void(e.payload=t)}t=t.return}}function cl(e,t,n){var a=Gc();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fl(e)?ml(t,n):null!==(n=Na(e,t,n,a))&&(Yc(n,e,a),hl(n,t,a))}function ul(e,t,n){pl(e,t,n,Gc())}function pl(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fl(e))ml(t,r);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(r.hasEagerState=!0,r.eagerState=l,Jn(l,o))return Oa(e,t,r,0),null===hc&&_a(),!1}catch(s){}if(null!==(n=Na(e,t,r,a)))return Yc(n,e,a),hl(n,t,a),!0}return!1}function dl(e,t,n,a){if(a={lane:2,revertLane:Hu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fl(e)){if(t)throw Error(o(479))}else null!==(t=Na(e,n,a,2))&&Yc(t,e,2)}function fl(e){var t=e.alternate;return e===Hi||null!==t&&t===Hi}function ml(e,t){Gi=Qi=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hl(e,t,n){if(0!==(4194048&n)){var a=t.lanes;n|=a&=e.pendingLanes,t.lanes=n,Re(e,n)}}var gl={readContext:Nr,use:po,useCallback:Ji,useContext:Ji,useEffect:Ji,useImperativeHandle:Ji,useLayoutEffect:Ji,useInsertionEffect:Ji,useMemo:Ji,useReducer:Ji,useRef:Ji,useState:Ji,useDebugValue:Ji,useDeferredValue:Ji,useTransition:Ji,useSyncExternalStore:Ji,useId:Ji,useHostTransitionStatus:Ji,useFormState:Ji,useActionState:Ji,useOptimistic:Ji,useMemoCache:Ji,useCacheRefresh:Ji};gl.useEffectEvent=Ji;var wl={readContext:Nr,use:po,useCallback:function(e,t){return so().memoizedState=[e,void 0===t?null:t],e},useContext:Nr,useEffect:Wo,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Fo(4194308,4,Go.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fo(4194308,4,e,t)},useInsertionEffect:function(e,t){Fo(4,2,e,t)},useMemo:function(e,t){var n=so();t=void 0===t?null:t;var a=e();if(Vi){xe(!0);try{e()}finally{xe(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=so();if(void 0!==n){var r=n(t);if(Vi){xe(!0);try{n(t)}finally{xe(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=cl.bind(null,Hi,e),[a.memoizedState,e]},useRef:function(e){return e={current:e},so().memoizedState=e},useState:function(e){var t=(e=jo(e)).queue,n=ul.bind(null,Hi,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Yo,useDeferredValue:function(e,t){return Zo(so(),e,t)},useTransition:function(){var e=jo(!1);return e=el.bind(null,Hi,e.queue,!0,!1),so().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Hi,r=so();if(dr){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===hc)throw Error(o(349));0!==(127&wc)||xo(a,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,Wo(vo.bind(null,a,i,e),[e]),a.flags|=2048,Ao(9,{destroy:void 0},bo.bind(null,a,i,n,t),null),n},useId:function(){var e=so(),t=hc.identifierPrefix;if(dr){var n=rr;t="_"+t+"R_"+(n=(ar&~(1<<32-be(ar)-1)).toString(32)+n),0<(n=Yi++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Zi++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:il,useFormState:No,useActionState:No,useOptimistic:function(e){var t=so();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=dl.bind(null,Hi,!0,n),n.dispatch=t,[e,t]},useMemoCache:fo,useCacheRefresh:function(){return so().memoizedState=sl.bind(null,Hi)},useEffectEvent:function(e){var t=so(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&mc))throw Error(o(440));return n.impl.apply(void 0,arguments)}}},yl={readContext:Nr,use:po,useCallback:qo,useContext:Nr,useEffect:Ho,useImperativeHandle:Vo,useInsertionEffect:Ko,useLayoutEffect:Qo,useMemo:Xo,useReducer:ho,useRef:Io,useState:function(){return ho(mo)},useDebugValue:Yo,useDeferredValue:function(e,t){return Jo(co(),Bi.memoizedState,e,t)},useTransition:function(){var e=ho(mo)[0],t=co().memoizedState;return["boolean"===typeof e?e:uo(e),t]},useSyncExternalStore:yo,useId:ol,useHostTransitionStatus:il,useFormState:Ro,useActionState:Ro,useOptimistic:function(e,t){return So(co(),0,e,t)},useMemoCache:fo,useCacheRefresh:ll};yl.useEffectEvent=Bo;var xl={readContext:Nr,use:po,useCallback:qo,useContext:Nr,useEffect:Ho,useImperativeHandle:Vo,useInsertionEffect:Ko,useLayoutEffect:Qo,useMemo:Xo,useReducer:wo,useRef:Io,useState:function(){return wo(mo)},useDebugValue:Yo,useDeferredValue:function(e,t){var n=co();return null===Bi?Zo(n,e,t):Jo(n,Bi.memoizedState,e,t)},useTransition:function(){var e=wo(mo)[0],t=co().memoizedState;return["boolean"===typeof e?e:uo(e),t]},useSyncExternalStore:yo,useId:ol,useHostTransitionStatus:il,useFormState:Lo,useActionState:Lo,useOptimistic:function(e,t){var n=co();return null!==Bi?So(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fo,useCacheRefresh:ll};function bl(e,t,n,a){n=null===(n=n(a,t=e.memoizedState))||void 0===n?t:f({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}xl.useEffectEvent=Bo;var vl={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Gc(),r=xi(a);r.payload=t,void 0!==n&&null!==n&&(r.callback=n),null!==(t=bi(e,r,a))&&(Yc(t,e,a),vi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Gc(),r=xi(a);r.tag=1,r.payload=t,void 0!==n&&null!==n&&(r.callback=n),null!==(t=bi(e,r,a))&&(Yc(t,e,a),vi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Gc(),a=xi(n);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=bi(e,a,n))&&(Yc(t,e,n),vi(t,e,n))}};function kl(e,t,n,a,r,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(a,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!ea(n,a)||!ea(r,i))}function zl(e,t,n,a){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,a),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&vl.enqueueReplaceState(t,t.state,null)}function jl(e,t){var n=t;if("ref"in t)for(var a in n={},t)"ref"!==a&&(n[a]=t[a]);if(e=e.defaultProps)for(var r in n===t&&(n=f({},n)),e)void 0===n[r]&&(n[r]=e[r]);return n}function Sl(e){Ea(e)}function Cl(e){console.error(e)}function El(e){Ea(e)}function Pl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function $l(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Tl(e,t,n){return(n=xi(n)).tag=3,n.payload={element:null},n.callback=function(){Pl(e,t)},n}function _l(e){return(e=xi(e)).tag=3,e}function Ol(e,t,n,a){var r=n.type.getDerivedStateFromError;if("function"===typeof r){var i=a.value;e.payload=function(){return r(i)},e.callback=function(){$l(t,n,a)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){$l(t,n,a),"function"!==typeof r&&(null===Lc?Lc=new Set([this]):Lc.add(this));var e=a.stack;this.componentDidCatch(a.value,{componentStack:null!==e?e:""})})}var Nl=Error(o(461)),Rl=!1;function Ml(e,t,n,a){t.child=null===e?hi(t,null,n,a):mi(t,e.child,n,a)}function Dl(e,t,n,a,r){n=n.render;var i=t.ref;if("ref"in a){var o={};for(var l in a)"ref"!==l&&(o[l]=a[l])}else o=a;return Or(t),a=to(e,t,n,o,i,r),l=io(),null===e||Rl?(dr&&l&&lr(t),t.flags|=1,Ml(e,t,a,r),t.child):(oo(e,t,r),is(e,t,r))}function Ll(e,t,n,a,r){if(null===e){var i=n.type;return"function"!==typeof i||Fa(i)||void 0!==i.defaultProps||null!==n.compare?((e=Ha(n.type,null,a,t,t.mode,r)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Al(e,t,i,a,r))}if(i=e.child,!os(e,r)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:ea)(o,a)&&e.ref===t.ref)return is(e,t,r)}return t.flags|=1,(e=Ua(i,a)).ref=t.ref,e.return=t,t.child=e}function Al(e,t,n,a,r){if(null!==e){var i=e.memoizedProps;if(ea(i,a)&&e.ref===t.ref){if(Rl=!1,t.pendingProps=a=i,!os(e,r))return t.lanes=e.lanes,is(e,t,r);0!==(131072&e.flags)&&(Rl=!0)}}return Kl(e,t,n,a,r)}function Il(e,t,n,a){var r=a.children,i=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===a.mode){if(0!==(128&t.flags)){if(i=null!==i?i.baseLanes|n:n,null!==e){for(a=t.child=e.child,r=0;null!==a;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~i}else a=0,t.child=null;return Ul(e,t,i,n,a)}if(0===(536870912&n))return a=t.lanes=536870912,Ul(e,t,null!==i?i.baseLanes|n:n,n,a);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&qr(0,null!==i?i.cachePool:null),null!==i?Ti(t,i):_i(),Li(t)}else null!==i?(qr(0,i.cachePool),Ti(t,i),Ai(),t.memoizedState=null):(null!==e&&qr(0,null),_i(),Ai());return Ml(e,t,r,n),t.child}function Fl(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ul(e,t,n,a,r){var i=Yr();return i=null===i?null:{parent:Ir._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},null!==e&&qr(0,null),_i(),Li(t),null!==e&&Tr(e,t,a,!0),t.childLanes=r,null}function Wl(e,t){return(t=es({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function Hl(e,t,n){return mi(t,e.child,null,n),(e=Wl(t,t.pendingProps)).flags|=2,Ii(t),t.memoizedState=null,e}function Bl(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Kl(e,t,n,a,r){return Or(t),n=to(e,t,n,a,void 0,r),a=io(),null===e||Rl?(dr&&a&&lr(t),t.flags|=1,Ml(e,t,n,r),t.child):(oo(e,t,r),is(e,t,r))}function Ql(e,t,n,a,r,i){return Or(t),t.updateQueue=null,n=ao(t,a,n,r),no(e),a=io(),null===e||Rl?(dr&&a&&lr(t),t.flags|=1,Ml(e,t,n,i),t.child):(oo(e,t,i),is(e,t,i))}function Gl(e,t,n,a,r){if(Or(t),null===t.stateNode){var i=La,o=n.contextType;"object"===typeof o&&null!==o&&(i=Nr(o)),i=new n(a,i),t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,i.updater=vl,t.stateNode=i,i._reactInternals=t,(i=t.stateNode).props=a,i.state=t.memoizedState,i.refs={},wi(t),o=n.contextType,i.context="object"===typeof o&&null!==o?Nr(o):La,i.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(bl(t,n,o,a),i.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(o=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),o!==i.state&&vl.enqueueReplaceState(i,i.state,null),Si(t,a,i,r),ji(),i.state=t.memoizedState),"function"===typeof i.componentDidMount&&(t.flags|=4194308),a=!0}else if(null===e){i=t.stateNode;var l=t.memoizedProps,s=jl(n,l);i.props=s;var c=i.context,u=n.contextType;o=La,"object"===typeof u&&null!==u&&(o=Nr(u));var p=n.getDerivedStateFromProps;u="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l||c!==o)&&zl(t,i,a,o),gi=!1;var d=t.memoizedState;i.state=d,Si(t,a,i,r),ji(),c=t.memoizedState,l||d!==c||gi?("function"===typeof p&&(bl(t,n,p,a),c=t.memoizedState),(s=gi||kl(t,n,s,a,d,c,o))?(u||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=c),i.props=a,i.state=c,i.context=o,a=s):("function"===typeof i.componentDidMount&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,yi(e,t),u=jl(n,o=t.memoizedProps),i.props=u,p=t.pendingProps,d=i.context,c=n.contextType,s=La,"object"===typeof c&&null!==c&&(s=Nr(c)),(c="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(o!==p||d!==s)&&zl(t,i,a,s),gi=!1,d=t.memoizedState,i.state=d,Si(t,a,i,r),ji();var f=t.memoizedState;o!==p||d!==f||gi||null!==e&&null!==e.dependencies&&_r(e.dependencies)?("function"===typeof l&&(bl(t,n,l,a),f=t.memoizedState),(u=gi||kl(t,n,u,a,d,f,s)||null!==e&&null!==e.dependencies&&_r(e.dependencies))?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(a,f,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(a,f,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=f),i.props=a,i.state=f,i.context=s,a=u):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Bl(e,t),a=0!==(128&t.flags),i||a?(i=t.stateNode,n=a&&"function"!==typeof n.getDerivedStateFromError?null:i.render(),t.flags|=1,null!==e&&a?(t.child=mi(t,e.child,null,r),t.child=mi(t,null,n,r)):Ml(e,t,n,r),t.memoizedState=i.state,e=t.child):e=is(e,t,r),e}function Vl(e,t,n,a){return br(),t.flags|=256,Ml(e,t,n,a),t.child}var Yl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ql(e){return{baseLanes:e,cachePool:Xr()}}function Xl(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=Pc),e}function Zl(e,t,n){var a,r=t.pendingProps,i=!1,l=0!==(128&t.flags);if((a=l)||(a=(null===e||null!==e.memoizedState)&&0!==(2&Fi.current)),a&&(i=!0,t.flags&=-129),a=0!==(32&t.flags),t.flags&=-33,null===e){if(dr){if(i?Mi(t):Ai(),(e=pr)?null!==(e=null!==(e=_p(e,mr))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==nr?{id:ar,overflow:rr}:null,retryLane:536870912,hydrationErrors:null},(n=Qa(e)).return=t,t.child=n,ur=t,pr=null):e=null,null===e)throw gr(t);return Np(e)?t.lanes=32:t.lanes=536870912,null}var s=r.children;return r=r.fallback,i?(Ai(),s=es({mode:"hidden",children:s},i=t.mode),r=Ba(r,i,n,null),s.return=t,r.return=t,s.sibling=r,t.child=s,(r=t.child).memoizedState=ql(n),r.childLanes=Xl(e,a,n),t.memoizedState=Yl,Fl(null,r)):(Mi(t),Jl(t,s))}var c=e.memoizedState;if(null!==c&&null!==(s=c.dehydrated)){if(l)256&t.flags?(Mi(t),t.flags&=-257,t=ts(e,t,n)):null!==t.memoizedState?(Ai(),t.child=e.child,t.flags|=128,t=null):(Ai(),s=r.fallback,i=t.mode,r=es({mode:"visible",children:r.children},i),(s=Ba(s,i,n,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,mi(t,e.child,null,n),(r=t.child).memoizedState=ql(n),r.childLanes=Xl(e,a,n),t.memoizedState=Yl,t=Fl(null,r));else if(Mi(t),Np(s)){if(a=s.nextSibling&&s.nextSibling.dataset)var u=a.dgst;a=u,(r=Error(o(419))).stack="",r.digest=a,kr({value:r,source:null,stack:null}),t=ts(e,t,n)}else if(Rl||Tr(e,t,n,!1),a=0!==(n&e.childLanes),Rl||a){if(null!==(a=hc)&&(0!==(r=Me(a,n))&&r!==c.retryLane))throw c.retryLane=r,Ra(e,r),Yc(a,e,r),Nl;Op(s)||lu(),t=ts(e,t,n)}else Op(s)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,pr=Rp(s.nextSibling),ur=t,dr=!0,fr=null,mr=!1,null!==e&&cr(t,e),(t=Jl(t,r.children)).flags|=4096);return t}return i?(Ai(),s=r.fallback,i=t.mode,u=(c=e.child).sibling,(r=Ua(c,{mode:"hidden",children:r.children})).subtreeFlags=65011712&c.subtreeFlags,null!==u?s=Ua(u,s):(s=Ba(s,i,n,null)).flags|=2,s.return=t,r.return=t,r.sibling=s,t.child=r,Fl(null,r),r=t.child,null===(s=e.child.memoizedState)?s=ql(n):(null!==(i=s.cachePool)?(c=Ir._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=Xr(),s={baseLanes:s.baseLanes|n,cachePool:i}),r.memoizedState=s,r.childLanes=Xl(e,a,n),t.memoizedState=Yl,Fl(e.child,r)):(Mi(t),e=(n=e.child).sibling,(n=Ua(n,{mode:"visible",children:r.children})).return=t,n.sibling=null,null!==e&&(null===(a=t.deletions)?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n)}function Jl(e,t){return(t=es({mode:"visible",children:t},e.mode)).return=e,e.child=t}function es(e,t){return(e=Ia(22,e,null,t)).lanes=0,e}function ts(e,t,n){return mi(t,e.child,null,n),(e=Jl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ns(e,t,n){e.lanes|=t;var a=e.alternate;null!==a&&(a.lanes|=t),Pr(e.return,t,n)}function as(e,t,n,a,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=r,o.treeForkCount=i)}function rs(e,t,n){var a=t.pendingProps,r=a.revealOrder,i=a.tail;a=a.children;var o=Fi.current,l=0!==(2&o);if(l?(o=1&o|2,t.flags|=128):o&=1,U(Fi,o),Ml(e,t,a,n),a=dr?Ja:0,!l&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ns(e,n,t);else if(19===e.tag)ns(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;null!==n;)null!==(e=n.alternate)&&null===Ui(e)&&(r=n),n=n.sibling;null===(n=r)?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),as(t,!1,r,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;null!==r;){if(null!==(e=r.alternate)&&null===Ui(e)){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}as(t,!0,n,null,i,a);break;case"together":as(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function is(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Sc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Tr(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Ua(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ua(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function os(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!_r(e))}function ls(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Rl=!0;else{if(!os(e,n)&&0===(128&t.flags))return Rl=!1,function(e,t,n){switch(t.tag){case 3:V(t,t.stateNode.containerInfo),Cr(0,Ir,e.memoizedState.cache),br();break;case 27:case 5:q(t);break;case 4:V(t,t.stateNode.containerInfo);break;case 10:Cr(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,Di(t),null;break;case 13:var a=t.memoizedState;if(null!==a)return null!==a.dehydrated?(Mi(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Zl(e,t,n):(Mi(t),null!==(e=is(e,t,n))?e.sibling:null);Mi(t);break;case 19:var r=0!==(128&e.flags);if((a=0!==(n&t.childLanes))||(Tr(e,t,n,!1),a=0!==(n&t.childLanes)),r){if(a)return rs(e,t,n);t.flags|=128}if(null!==(r=t.memoizedState)&&(r.rendering=null,r.tail=null,r.lastEffect=null),U(Fi,Fi.current),a)break;return null;case 22:return t.lanes=0,Il(e,t,n,t.pendingProps);case 24:Cr(0,Ir,e.memoizedState.cache)}return is(e,t,n)}(e,t,n);Rl=0!==(131072&e.flags)}else Rl=!1,dr&&0!==(1048576&t.flags)&&or(t,Ja,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ri(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var r=e.$$typeof;if(r===k){t.tag=11,t=Dl(null,t,e,a,n);break e}if(r===S){t.tag=14,t=Ll(null,t,e,a,n);break e}}throw t=O(e)||e,Error(o(306,t,""))}Fa(e)?(a=jl(e,a),t.tag=1,t=Gl(null,t,e,a,n)):(t.tag=0,t=Kl(null,t,e,a,n))}return t;case 0:return Kl(e,t,t.type,t.pendingProps,n);case 1:return Gl(e,t,a=t.type,r=jl(a,t.pendingProps),n);case 3:e:{if(V(t,t.stateNode.containerInfo),null===e)throw Error(o(387));a=t.pendingProps;var i=t.memoizedState;r=i.element,yi(e,t),Si(t,a,null,n);var l=t.memoizedState;if(a=l.cache,Cr(0,Ir,a),a!==i.cache&&$r(t,[Ir],n,!0),ji(),a=l.element,i.isDehydrated){if(i={element:a,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Vl(e,t,a,n);break e}if(a!==r){kr(r=Ya(Error(o(424)),t)),t=Vl(e,t,a,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(pr=Rp(e.firstChild),ur=t,dr=!0,fr=null,mr=!0,n=hi(t,null,a,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(br(),a===r){t=is(e,t,n);break e}Ml(e,t,a,n)}t=t.child}return t;case 26:return Bl(e,t),null===e?(n=Qp(t.type,null,t.pendingProps,null))?t.memoizedState=n:dr||(n=t.type,e=t.pendingProps,(a=wp(Q.current).createElement(n))[Ue]=t,a[We]=e,fp(a,n,e),et(a),t.stateNode=a):t.memoizedState=Qp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return q(t),null===e&&dr&&(a=t.stateNode=Ap(t.type,t.pendingProps,Q.current),ur=t,mr=!0,r=pr,Ep(t.type)?(Mp=r,pr=Rp(a.firstChild)):pr=r),Ml(e,t,t.pendingProps.children,n),Bl(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&dr&&((r=a=pr)&&(null!==(a=function(e,t,n,a){for(;1===e.nodeType;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(a){if(!e[Ve])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(i=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(null==r.href||""===r.href?null:r.href)||e.getAttribute("crossorigin")!==(null==r.crossOrigin?null:r.crossOrigin)||e.getAttribute("title")!==(null==r.title?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((i=e.getAttribute("src"))!==(null==r.src?null:r.src)||e.getAttribute("type")!==(null==r.type?null:r.type)||e.getAttribute("crossorigin")!==(null==r.crossOrigin?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var i=null==r.name?null:""+r.name;if("hidden"===r.type&&e.getAttribute("name")===i)return e}if(null===(e=Rp(e.nextSibling)))break}return null}(a,t.type,t.pendingProps,mr))?(t.stateNode=a,ur=t,pr=Rp(a.firstChild),mr=!1,r=!0):r=!1),r||gr(t)),q(t),r=t.type,i=t.pendingProps,l=null!==e?e.memoizedProps:null,a=i.children,bp(r,i)?a=null:null!==l&&bp(r,l)&&(t.flags|=32),null!==t.memoizedState&&(r=to(e,t,ro,null,null,n),pd._currentValue=r),Bl(e,t),Ml(e,t,a,n),t.child;case 6:return null===e&&dr&&((e=n=pr)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=Rp(e.nextSibling)))return null}return e}(n,t.pendingProps,mr))?(t.stateNode=n,ur=t,pr=null,e=!0):e=!1),e||gr(t)),null;case 13:return Zl(e,t,n);case 4:return V(t,t.stateNode.containerInfo),a=t.pendingProps,null===e?t.child=mi(t,null,a,n):Ml(e,t,a,n),t.child;case 11:return Dl(e,t,t.type,t.pendingProps,n);case 7:return Ml(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ml(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Cr(0,t.type,a.value),Ml(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,Or(t),a=a(r=Nr(r)),t.flags|=1,Ml(e,t,a,n),t.child;case 14:return Ll(e,t,t.type,t.pendingProps,n);case 15:return Al(e,t,t.type,t.pendingProps,n);case 19:return rs(e,t,n);case 31:return function(e,t,n){var a=t.pendingProps,r=0!==(128&t.flags);if(t.flags&=-129,null===e){if(dr){if("hidden"===a.mode)return e=Wl(t,a),t.lanes=536870912,Fl(null,e);if(Di(t),(e=pr)?null!==(e=null!==(e=_p(e,mr))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==nr?{id:ar,overflow:rr}:null,retryLane:536870912,hydrationErrors:null},(n=Qa(e)).return=t,t.child=n,ur=t,pr=null):e=null,null===e)throw gr(t);return t.lanes=536870912,null}return Wl(t,a)}var i=e.memoizedState;if(null!==i){var l=i.dehydrated;if(Di(t),r)if(256&t.flags)t.flags&=-257,t=Hl(e,t,n);else{if(null===t.memoizedState)throw Error(o(558));t.child=e.child,t.flags|=128,t=null}else if(Rl||Tr(e,t,n,!1),r=0!==(n&e.childLanes),Rl||r){if(null!==(a=hc)&&0!==(l=Me(a,n))&&l!==i.retryLane)throw i.retryLane=l,Ra(e,l),Yc(a,e,l),Nl;lu(),t=Hl(e,t,n)}else e=i.treeContext,pr=Rp(l.nextSibling),ur=t,dr=!0,fr=null,mr=!1,null!==e&&cr(t,e),(t=Wl(t,a)).flags|=4096;return t}return(e=Ua(e.child,{mode:a.mode,children:a.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return Il(e,t,n,t.pendingProps);case 24:return Or(t),a=Nr(Ir),null===e?(null===(r=Yr())&&(r=hc,i=Fr(),r.pooledCache=i,i.refCount++,null!==i&&(r.pooledCacheLanes|=n),r=i),t.memoizedState={parent:a,cache:r},wi(t),Cr(0,Ir,r)):(0!==(e.lanes&n)&&(yi(e,t),Si(t,null,null,n),ji()),r=e.memoizedState,i=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=r),Cr(0,Ir,a)):(a=i.cache,Cr(0,Ir,a),a!==r.cache&&$r(t,[Ir],n,!0))),Ml(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function ss(e){e.flags|=4}function cs(e,t,n,a,r){if((t=0!==(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&r)===r)if(e.stateNode.complete)e.flags|=8192;else{if(!ru())throw ii=ti,Jr;e.flags|=8192}}else e.flags&=-16777217}function us(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!id(t)){if(!ru())throw ii=ti,Jr;e.flags|=8192}}function ps(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Te():536870912,e.lanes|=t,$c|=t)}function ds(e,t){if(!dr)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;null!==n;)null!==n.alternate&&(a=n),n=n.sibling;null===a?t||null===e.tail?e.tail=null:e.tail.sibling=null:a.sibling=null}}function fs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;null!==r;)n|=r.lanes|r.childLanes,a|=65011712&r.subtreeFlags,a|=65011712&r.flags,r.return=e,r=r.sibling;else for(r=e.child;null!==r;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function ms(e,t,n){var a=t.pendingProps;switch(sr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return fs(t),null;case 3:return n=t.stateNode,a=null,null!==e&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Er(Ir),Y(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(xr(t)?ss(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,vr())),fs(t),null;case 26:var r=t.type,i=t.memoizedState;return null===e?(ss(t),null!==i?(fs(t),us(t,i)):(fs(t),cs(t,r,0,0,n))):i?i!==e.memoizedState?(ss(t),fs(t),us(t,i)):(fs(t),t.flags&=-16777217):((e=e.memoizedProps)!==a&&ss(t),fs(t),cs(t,r,0,0,n)),null;case 27:if(X(t),n=Q.current,r=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==a&&ss(t);else{if(!a){if(null===t.stateNode)throw Error(o(166));return fs(t),null}e=B.current,xr(t)?wr(t):(e=Ap(r,a,n),t.stateNode=e,ss(t))}return fs(t),null;case 5:if(X(t),r=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==a&&ss(t);else{if(!a){if(null===t.stateNode)throw Error(o(166));return fs(t),null}if(i=B.current,xr(t))wr(t);else{var l=wp(Q.current);switch(i){case 1:i=l.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=l.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=l.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=l.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":(i=l.createElement("div")).innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i="string"===typeof a.is?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i="string"===typeof a.is?l.createElement(r,{is:a.is}):l.createElement(r)}}i[Ue]=t,i[We]=a;e:for(l=t.child;null!==l;){if(5===l.tag||6===l.tag)i.appendChild(l.stateNode);else if(4!==l.tag&&27!==l.tag&&null!==l.child){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;null===l.sibling;){if(null===l.return||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=i;e:switch(fp(i,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&ss(t)}}return fs(t),cs(t,t.type,null===e||e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==a&&ss(t);else{if("string"!==typeof a&&null===t.stateNode)throw Error(o(166));if(e=Q.current,xr(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,null!==(r=ur))switch(r.tag){case 27:case 5:a=r.memoizedProps}e[Ue]=t,(e=!!(e.nodeValue===n||null!==a&&!0===a.suppressHydrationWarning||up(e.nodeValue,n)))||gr(t,!0)}else(e=wp(e).createTextNode(a))[Ue]=t,t.stateNode=e}return fs(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(a=xr(t),null!==n){if(null===e){if(!a)throw Error(o(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(o(557));e[Ue]=t}else br(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;fs(t),e=!1}else n=vr(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(Ii(t),t):(Ii(t),null);if(0!==(128&t.flags))throw Error(o(558))}return fs(t),null;case 13:if(a=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(r=xr(t),null!==a&&null!==a.dehydrated){if(null===e){if(!r)throw Error(o(318));if(!(r=null!==(r=t.memoizedState)?r.dehydrated:null))throw Error(o(317));r[Ue]=t}else br(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;fs(t),r=!1}else r=vr(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return 256&t.flags?(Ii(t),t):(Ii(t),null)}return Ii(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==a,e=null!==e&&null!==e.memoizedState,n&&(r=null,null!==(a=t.child).alternate&&null!==a.alternate.memoizedState&&null!==a.alternate.memoizedState.cachePool&&(r=a.alternate.memoizedState.cachePool.pool),i=null,null!==a.memoizedState&&null!==a.memoizedState.cachePool&&(i=a.memoizedState.cachePool.pool),i!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ps(t,t.updateQueue),fs(t),null);case 4:return Y(),null===e&&ep(t.stateNode.containerInfo),fs(t),null;case 10:return Er(t.type),fs(t),null;case 19:if(F(Fi),null===(a=t.memoizedState))return fs(t),null;if(r=0!==(128&t.flags),null===(i=a.rendering))if(r)ds(a,!1);else{if(0!==jc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=Ui(e))){for(t.flags|=128,ds(a,!1),e=i.updateQueue,t.updateQueue=e,ps(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Wa(n,e),n=n.sibling;return U(Fi,1&Fi.current|2),dr&&ir(t,a.treeForkCount),t.child}e=e.sibling}null!==a.tail&&se()>Mc&&(t.flags|=128,r=!0,ds(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=Ui(i))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,ps(t,e),ds(a,!0),null===a.tail&&"hidden"===a.tailMode&&!i.alternate&&!dr)return fs(t),null}else 2*se()-a.renderingStartTime>Mc&&536870912!==n&&(t.flags|=128,r=!0,ds(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=a.last)?e.sibling=i:t.child=i,a.last=i)}return null!==a.tail?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=se(),e.sibling=null,n=Fi.current,U(Fi,r?1&n|2:1&n),dr&&ir(t,a.treeForkCount),e):(fs(t),null);case 22:case 23:return Ii(t),Oi(),a=null!==t.memoizedState,null!==e?null!==e.memoizedState!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?0!==(536870912&n)&&0===(128&t.flags)&&(fs(t),6&t.subtreeFlags&&(t.flags|=8192)):fs(t),null!==(n=t.updateQueue)&&ps(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),a=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),null!==e&&F(Vr),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Er(Ir),fs(t),null;case 25:case 30:return null}throw Error(o(156,t.tag))}function hs(e,t){switch(sr(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Er(Ir),Y(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return X(t),null;case 31:if(null!==t.memoizedState){if(Ii(t),null===t.alternate)throw Error(o(340));br()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(Ii(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));br()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return F(Fi),null;case 4:return Y(),null;case 10:return Er(t.type),null;case 22:case 23:return Ii(t),Oi(),null!==e&&F(Vr),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return Er(Ir),null;default:return null}}function gs(e,t){switch(sr(t),t.tag){case 3:Er(Ir),Y();break;case 26:case 27:case 5:X(t);break;case 4:Y();break;case 31:null!==t.memoizedState&&Ii(t);break;case 13:Ii(t);break;case 19:F(Fi);break;case 10:Er(t.type);break;case 22:case 23:Ii(t),Oi(),null!==e&&F(Vr);break;case 24:Er(Ir)}}function ws(e,t){try{var n=t.updateQueue,a=null!==n?n.lastEffect:null;if(null!==a){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var i=n.create,o=n.inst;a=i(),o.destroy=a}n=n.next}while(n!==r)}}catch(l){ju(t,t.return,l)}}function ys(e,t,n){try{var a=t.updateQueue,r=null!==a?a.lastEffect:null;if(null!==r){var i=r.next;a=i;do{if((a.tag&e)===e){var o=a.inst,l=o.destroy;if(void 0!==l){o.destroy=void 0,r=t;var s=n,c=l;try{c()}catch(u){ju(r,s,u)}}}a=a.next}while(a!==i)}}catch(u){ju(t,t.return,u)}}function xs(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{Ei(t,n)}catch(a){ju(e,e.return,a)}}}function bs(e,t,n){n.props=jl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ju(e,t,a)}}function vs(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;default:a=e.stateNode}"function"===typeof n?e.refCleanup=n(a):n.current=a}}catch(r){ju(e,t,r)}}function ks(e,t){var n=e.ref,a=e.refCleanup;if(null!==n)if("function"===typeof a)try{a()}catch(r){ju(e,t,r)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(i){ju(e,t,i)}else n.current=null}function zs(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){ju(e,e.return,r)}}function js(e,t,n){try{var a=e.stateNode;!function(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,l=null,s=null,c=null,u=null,p=null;for(m in n){var d=n[m];if(n.hasOwnProperty(m)&&null!=d)switch(m){case"checked":case"value":break;case"defaultValue":c=d;default:a.hasOwnProperty(m)||pp(e,t,m,null,a,d)}}for(var f in a){var m=a[f];if(d=n[f],a.hasOwnProperty(f)&&(null!=m||null!=d))switch(f){case"type":i=m;break;case"name":r=m;break;case"checked":u=m;break;case"defaultChecked":p=m;break;case"value":l=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(o(137,t));break;default:m!==d&&pp(e,t,f,m,a,d)}}return void yt(e,l,s,c,u,p,i,r);case"select":for(i in m=l=s=f=null,n)if(c=n[i],n.hasOwnProperty(i)&&null!=c)switch(i){case"value":break;case"multiple":m=c;default:a.hasOwnProperty(i)||pp(e,t,i,null,a,c)}for(r in a)if(i=a[r],c=n[r],a.hasOwnProperty(r)&&(null!=i||null!=c))switch(r){case"value":f=i;break;case"defaultValue":s=i;break;case"multiple":l=i;default:i!==c&&pp(e,t,r,i,a,c)}return t=s,n=l,a=m,void(null!=f?vt(e,!!n,f,!1):!!a!==!!n&&(null!=t?vt(e,!!n,t,!0):vt(e,!!n,n?[]:"",!1)));case"textarea":for(s in m=f=null,n)if(r=n[s],n.hasOwnProperty(s)&&null!=r&&!a.hasOwnProperty(s))switch(s){case"value":case"children":break;default:pp(e,t,s,null,a,r)}for(l in a)if(r=a[l],i=n[l],a.hasOwnProperty(l)&&(null!=r||null!=i))switch(l){case"value":f=r;break;case"defaultValue":m=r;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=r)throw Error(o(91));break;default:r!==i&&pp(e,t,l,r,a,i)}return void kt(e,f,m);case"option":for(var h in n)if(f=n[h],n.hasOwnProperty(h)&&null!=f&&!a.hasOwnProperty(h))if("selected"===h)e.selected=!1;else pp(e,t,h,null,a,f);for(c in a)if(f=a[c],m=n[c],a.hasOwnProperty(c)&&f!==m&&(null!=f||null!=m))if("selected"===c)e.selected=f&&"function"!==typeof f&&"symbol"!==typeof f;else pp(e,t,c,f,a,m);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)f=n[g],n.hasOwnProperty(g)&&null!=f&&!a.hasOwnProperty(g)&&pp(e,t,g,null,a,f);for(u in a)if(f=a[u],m=n[u],a.hasOwnProperty(u)&&f!==m&&(null!=f||null!=m))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(o(137,t));break;default:pp(e,t,u,f,a,m)}return;default:if(Pt(t)){for(var w in n)f=n[w],n.hasOwnProperty(w)&&void 0!==f&&!a.hasOwnProperty(w)&&dp(e,t,w,void 0,a,f);for(p in a)f=a[p],m=n[p],!a.hasOwnProperty(p)||f===m||void 0===f&&void 0===m||dp(e,t,p,f,a,m);return}}for(var y in n)f=n[y],n.hasOwnProperty(y)&&null!=f&&!a.hasOwnProperty(y)&&pp(e,t,y,null,a,f);for(d in a)f=a[d],m=n[d],!a.hasOwnProperty(d)||f===m||null==f&&null==m||pp(e,t,d,f,a,m)}(a,e.type,n,t),a[We]=t}catch(r){ju(e,e.return,r)}}function Ss(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&Ep(e.type)||4===e.tag}function Cs(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Ss(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&Ep(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Es(e,t,n){var a=e.tag;if(5===a||6===a)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Ot));else if(4!==a&&(27===a&&Ep(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(Es(e,t,n),e=e.sibling;null!==e;)Es(e,t,n),e=e.sibling}function Ps(e,t,n){var a=e.tag;if(5===a||6===a)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==a&&(27===a&&Ep(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(Ps(e,t,n),e=e.sibling;null!==e;)Ps(e,t,n),e=e.sibling}function $s(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);fp(t,a,n),t[Ue]=e,t[We]=n}catch(i){ju(e,e.return,i)}}var Ts=!1,_s=!1,Os=!1,Ns="function"===typeof WeakSet?WeakSet:Set,Rs=null;function Ms(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Ys(e,n),4&a&&ws(5,n);break;case 1:if(Ys(e,n),4&a)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){ju(n,n.return,o)}else{var r=jl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){ju(n,n.return,l)}}64&a&&xs(n),512&a&&vs(n,n.return);break;case 3:if(Ys(e,n),64&a&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{Ei(e,t)}catch(o){ju(n,n.return,o)}}break;case 27:null===t&&4&a&&$s(n);case 26:case 5:Ys(e,n),null===t&&4&a&&zs(n),512&a&&vs(n,n.return);break;case 12:Ys(e,n);break;case 31:Ys(e,n),4&a&&Us(e,n);break;case 13:Ys(e,n),4&a&&Ws(e,n),64&a&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}(e,n=Pu.bind(null,n))));break;case 22:if(!(a=null!==n.memoizedState||Ts)){t=null!==t&&null!==t.memoizedState||_s,r=Ts;var i=_s;Ts=a,(_s=t)&&!i?Xs(e,n,0!==(8772&n.subtreeFlags)):Ys(e,n),Ts=r,_s=i}break;case 30:break;default:Ys(e,n)}}function Ds(e){var t=e.alternate;null!==t&&(e.alternate=null,Ds(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ye(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ls=null,As=!1;function Is(e,t,n){for(n=n.child;null!==n;)Fs(e,t,n),n=n.sibling}function Fs(e,t,n){if(ye&&"function"===typeof ye.onCommitFiberUnmount)try{ye.onCommitFiberUnmount(we,n)}catch(i){}switch(n.tag){case 26:_s||ks(n,t),Is(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:_s||ks(n,t);var a=Ls,r=As;Ep(n.type)&&(Ls=n.stateNode,As=!1),Is(e,t,n),Ip(n.stateNode),Ls=a,As=r;break;case 5:_s||ks(n,t);case 6:if(a=Ls,r=As,Ls=null,Is(e,t,n),As=r,null!==(Ls=a))if(As)try{(9===Ls.nodeType?Ls.body:"HTML"===Ls.nodeName?Ls.ownerDocument.body:Ls).removeChild(n.stateNode)}catch(o){ju(n,t,o)}else try{Ls.removeChild(n.stateNode)}catch(o){ju(n,t,o)}break;case 18:null!==Ls&&(As?(Pp(9===(e=Ls).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Kd(e)):Pp(Ls,n.stateNode));break;case 4:a=Ls,r=As,Ls=n.stateNode.containerInfo,As=!0,Is(e,t,n),Ls=a,As=r;break;case 0:case 11:case 14:case 15:ys(2,n,t),_s||ys(4,n,t),Is(e,t,n);break;case 1:_s||(ks(n,t),"function"===typeof(a=n.stateNode).componentWillUnmount&&bs(n,t,a)),Is(e,t,n);break;case 21:Is(e,t,n);break;case 22:_s=(a=_s)||null!==n.memoizedState,Is(e,t,n),_s=a;break;default:Is(e,t,n)}}function Us(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{Kd(e)}catch(n){ju(t,t.return,n)}}}function Ws(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Kd(e)}catch(n){ju(t,t.return,n)}}function Hs(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Ns),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Ns),t;default:throw Error(o(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var a=$u.bind(null,e,t);t.then(a,a)}})}function Bs(e,t){var n=t.deletions;if(null!==n)for(var a=0;a<n.length;a++){var r=n[a],i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(Ep(s.type)){Ls=s.stateNode,As=!1;break e}break;case 5:Ls=s.stateNode,As=!1;break e;case 3:case 4:Ls=s.stateNode.containerInfo,As=!0;break e}s=s.return}if(null===Ls)throw Error(o(160));Fs(i,l,r),Ls=null,As=!1,null!==(i=r.alternate)&&(i.return=null),r.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)Qs(t,e),t=t.sibling}var Ks=null;function Qs(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bs(t,e),Gs(e),4&a&&(ys(3,e,e.return),ws(3,e),ys(5,e,e.return));break;case 1:Bs(t,e),Gs(e),512&a&&(_s||null===n||ks(n,n.return)),64&a&&Ts&&(null!==(e=e.updateQueue)&&(null!==(a=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?a:n.concat(a))));break;case 26:var r=Ks;if(Bs(t,e),Gs(e),512&a&&(_s||null===n||ks(n,n.return)),4&a){var i=null!==n?n.memoizedState:null;if(a=e.memoizedState,null===n)if(null===a)if(null===e.stateNode){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":(!(i=r.getElementsByTagName("title")[0])||i[Ve]||i[Ue]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=r.createElement(a),r.head.insertBefore(i,r.querySelector("head > title"))),fp(i,a,n),i[Ue]=e,et(i),a=i;break e;case"link":var l=ad("link","href",r).get(a+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((i=l[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}fp(i=r.createElement(a),a,n),r.head.appendChild(i);break;case"meta":if(l=ad("meta","content",r).get(a+(n.content||"")))for(s=0;s<l.length;s++)if((i=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}fp(i=r.createElement(a),a,n),r.head.appendChild(i);break;default:throw Error(o(468,a))}i[Ue]=e,et(i),a=i}e.stateNode=a}else rd(r,e.type,e.stateNode);else e.stateNode=Zp(r,a,e.memoizedProps);else i!==a?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===a?rd(r,e.type,e.stateNode):Zp(r,a,e.memoizedProps)):null===a&&null!==e.stateNode&&js(e,e.memoizedProps,n.memoizedProps)}break;case 27:Bs(t,e),Gs(e),512&a&&(_s||null===n||ks(n,n.return)),null!==n&&4&a&&js(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Bs(t,e),Gs(e),512&a&&(_s||null===n||ks(n,n.return)),32&e.flags){r=e.stateNode;try{jt(r,"")}catch(h){ju(e,e.return,h)}}4&a&&null!=e.stateNode&&js(e,r=e.memoizedProps,null!==n?n.memoizedProps:r),1024&a&&(Os=!0);break;case 6:if(Bs(t,e),Gs(e),4&a){if(null===e.stateNode)throw Error(o(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(h){ju(e,e.return,h)}}break;case 3:if(nd=null,r=Ks,Ks=Wp(t.containerInfo),Bs(t,e),Ks=r,Gs(e),4&a&&null!==n&&n.memoizedState.isDehydrated)try{Kd(t.containerInfo)}catch(h){ju(e,e.return,h)}Os&&(Os=!1,Vs(e));break;case 4:a=Ks,Ks=Wp(e.stateNode.containerInfo),Bs(t,e),Gs(e),Ks=a;break;case 12:default:Bs(t,e),Gs(e);break;case 31:case 19:Bs(t,e),Gs(e),4&a&&(null!==(a=e.updateQueue)&&(e.updateQueue=null,Hs(e,a)));break;case 13:Bs(t,e),Gs(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(Nc=se()),4&a&&(null!==(a=e.updateQueue)&&(e.updateQueue=null,Hs(e,a)));break;case 22:r=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=Ts,p=_s;if(Ts=u||r,_s=p||c,Bs(t,e),_s=p,Ts=u,Gs(e),8192&a)e:for(t=e.stateNode,t._visibility=r?-2&t._visibility:1|t._visibility,r&&(null===n||c||Ts||_s||qs(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(i=c.stateNode,r)"function"===typeof(l=i.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=c.stateNode;var d=c.memoizedProps.style,f=void 0!==d&&null!==d&&d.hasOwnProperty("display")?d.display:null;s.style.display=null==f||"boolean"===typeof f?"":(""+f).trim()}}catch(h){ju(c,c.return,h)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=r?"":c.memoizedProps}catch(h){ju(c,c.return,h)}}}else if(18===t.tag){if(null===n){c=t;try{var m=c.stateNode;r?$p(m,!0):$p(c.stateNode,!1)}catch(h){ju(c,c.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&a&&(null!==(a=e.updateQueue)&&(null!==(n=a.retryQueue)&&(a.retryQueue=null,Hs(e,n))));case 30:case 21:}}function Gs(e){var t=e.flags;if(2&t){try{for(var n,a=e.return;null!==a;){if(Ss(a)){n=a;break}a=a.return}if(null==n)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode;Ps(e,Cs(e),r);break;case 5:var i=n.stateNode;32&n.flags&&(jt(i,""),n.flags&=-33),Ps(e,Cs(e),i);break;case 3:case 4:var l=n.stateNode.containerInfo;Es(e,Cs(e),l);break;default:throw Error(o(161))}}catch(s){ju(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Vs(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Vs(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Ys(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Ms(e,t.alternate,t),t=t.sibling}function qs(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ys(4,t,t.return),qs(t);break;case 1:ks(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&bs(t,t.return,n),qs(t);break;case 27:Ip(t.stateNode);case 26:case 5:ks(t,t.return),qs(t);break;case 22:null===t.memoizedState&&qs(t);break;default:qs(t)}e=e.sibling}}function Xs(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var a=t.alternate,r=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:Xs(r,i,n),ws(4,i);break;case 1:if(Xs(r,i,n),"function"===typeof(r=(a=i).stateNode).componentDidMount)try{r.componentDidMount()}catch(c){ju(a,a.return,c)}if(null!==(r=(a=i).updateQueue)){var l=a.stateNode;try{var s=r.shared.hiddenCallbacks;if(null!==s)for(r.shared.hiddenCallbacks=null,r=0;r<s.length;r++)Ci(s[r],l)}catch(c){ju(a,a.return,c)}}n&&64&o&&xs(i),vs(i,i.return);break;case 27:$s(i);case 26:case 5:Xs(r,i,n),n&&null===a&&4&o&&zs(i),vs(i,i.return);break;case 12:Xs(r,i,n);break;case 31:Xs(r,i,n),n&&4&o&&Us(r,i);break;case 13:Xs(r,i,n),n&&4&o&&Ws(r,i);break;case 22:null===i.memoizedState&&Xs(r,i,n),vs(i,i.return);break;case 30:break;default:Xs(r,i,n)}t=t.sibling}}function Zs(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ur(n))}function Js(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ur(e))}function ec(e,t,n,a){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)tc(e,t,n,a),t=t.sibling}function tc(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:ec(e,t,n,a),2048&r&&ws(9,t);break;case 1:case 31:case 13:default:ec(e,t,n,a);break;case 3:ec(e,t,n,a),2048&r&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ur(e)));break;case 12:if(2048&r){ec(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,l=i.onPostCommit;"function"===typeof l&&l(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){ju(t,t.return,s)}}else ec(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,null!==t.memoizedState?2&i._visibility?ec(e,t,n,a):ac(e,t):2&i._visibility?ec(e,t,n,a):(i._visibility|=2,nc(e,t,n,a,0!==(10256&t.subtreeFlags)||!1)),2048&r&&Zs(o,t);break;case 24:ec(e,t,n,a),2048&r&&Js(t.alternate,t)}}function nc(e,t,n,a,r){for(r=r&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var i=e,o=t,l=n,s=a,c=o.flags;switch(o.tag){case 0:case 11:case 15:nc(i,o,l,s,r),ws(8,o);break;case 23:break;case 22:var u=o.stateNode;null!==o.memoizedState?2&u._visibility?nc(i,o,l,s,r):ac(i,o):(u._visibility|=2,nc(i,o,l,s,r)),r&&2048&c&&Zs(o.alternate,o);break;case 24:nc(i,o,l,s,r),r&&2048&c&&Js(o.alternate,o);break;default:nc(i,o,l,s,r)}t=t.sibling}}function ac(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:ac(n,a),2048&r&&Zs(a.alternate,a);break;case 24:ac(n,a),2048&r&&Js(a.alternate,a);break;default:ac(n,a)}t=t.sibling}}var rc=8192;function ic(e,t,n){if(e.subtreeFlags&rc)for(e=e.child;null!==e;)oc(e,t,n),e=e.sibling}function oc(e,t,n){switch(e.tag){case 26:ic(e,t,n),e.flags&rc&&null!==e.memoizedState&&function(e,t,n,a){if("stylesheet"===n.type&&("string"!==typeof a.media||!1!==matchMedia(a.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var r=Gp(a.href),i=t.querySelector(Vp(r));if(i)return null!==(t=i._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=ld.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,void et(i);i=t.ownerDocument||t,a=Yp(a),(r=Fp.get(r))&&ed(a,r),et(i=i.createElement("link"));var o=i;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),fp(i,"link",a),n.instance=i}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=ld.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,Ks,e.memoizedState,e.memoizedProps);break;case 5:default:ic(e,t,n);break;case 3:case 4:var a=Ks;Ks=Wp(e.stateNode.containerInfo),ic(e,t,n),Ks=a;break;case 22:null===e.memoizedState&&(null!==(a=e.alternate)&&null!==a.memoizedState?(a=rc,rc=16777216,ic(e,t,n),rc=a):ic(e,t,n))}}function lc(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function sc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var a=t[n];Rs=a,pc(a,e)}lc(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)cc(e),e=e.sibling}function cc(e){switch(e.tag){case 0:case 11:case 15:sc(e),2048&e.flags&&ys(9,e,e.return);break;case 3:case 12:default:sc(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,uc(e)):sc(e)}}function uc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var a=t[n];Rs=a,pc(a,e)}lc(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:ys(8,t,t.return),uc(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,uc(t));break;default:uc(t)}e=e.sibling}}function pc(e,t){for(;null!==Rs;){var n=Rs;switch(n.tag){case 0:case 11:case 15:ys(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var a=n.memoizedState.cachePool.pool;null!=a&&a.refCount++}break;case 24:Ur(n.memoizedState.cache)}if(null!==(a=n.child))a.return=n,Rs=a;else e:for(n=e;null!==Rs;){var r=(a=Rs).sibling,i=a.return;if(Ds(a),a===n){Rs=null;break e}if(null!==r){r.return=i,Rs=r;break e}Rs=i}}}var dc={getCacheForType:function(e){var t=Nr(Ir),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Nr(Ir).controller.signal}},fc="function"===typeof WeakMap?WeakMap:Map,mc=0,hc=null,gc=null,wc=0,yc=0,xc=null,bc=!1,vc=!1,kc=!1,zc=0,jc=0,Sc=0,Cc=0,Ec=0,Pc=0,$c=0,Tc=null,_c=null,Oc=!1,Nc=0,Rc=0,Mc=1/0,Dc=null,Lc=null,Ac=0,Ic=null,Fc=null,Uc=0,Wc=0,Hc=null,Bc=null,Kc=0,Qc=null;function Gc(){return 0!==(2&mc)&&0!==wc?wc&-wc:null!==R.T?Hu():Ae()}function Vc(){if(0===Pc)if(0===(536870912&wc)||dr){var e=je;0===(3932160&(je<<=1))&&(je=262144),Pc=e}else Pc=536870912;return null!==(e=Ni.current)&&(e.flags|=32),Pc}function Yc(e,t,n){(e!==hc||2!==yc&&9!==yc)&&null===e.cancelPendingCommit||(nu(e,0),Jc(e,wc,Pc,!1)),Oe(e,n),0!==(2&mc)&&e===hc||(e===hc&&(0===(2&mc)&&(Cc|=n),4===jc&&Jc(e,wc,Pc,!1)),Du(e))}function qc(e,t,n){if(0!==(6&mc))throw Error(o(327));for(var a=!n&&0===(127&t)&&0===(t&e.expiredLanes)||Pe(e,t),r=a?function(e,t){var n=mc;mc|=2;var a=iu(),r=ou();hc!==e||wc!==t?(Dc=null,Mc=se()+500,nu(e,t)):vc=Pe(e,t);e:for(;;)try{if(0!==yc&&null!==gc){t=gc;var i=xc;t:switch(yc){case 1:yc=0,xc=null,fu(e,t,i,1);break;case 2:case 9:if(ni(i)){yc=0,xc=null,du(t);break}t=function(){2!==yc&&9!==yc||hc!==e||(yc=7),Du(e)},i.then(t,t);break e;case 3:yc=7;break e;case 4:yc=5;break e;case 7:ni(i)?(yc=0,xc=null,du(t)):(yc=0,xc=null,fu(e,t,i,7));break;case 5:var l=null;switch(gc.tag){case 26:l=gc.memoizedState;case 5:case 27:var s=gc;if(l?id(l):s.stateNode.complete){yc=0,xc=null;var c=s.sibling;if(null!==c)gc=c;else{var u=s.return;null!==u?(gc=u,mu(u)):gc=null}break t}}yc=0,xc=null,fu(e,t,i,5);break;case 6:yc=0,xc=null,fu(e,t,i,6);break;case 8:tu(),jc=6;break e;default:throw Error(o(462))}}uu();break}catch(p){au(e,p)}return Sr=jr=null,R.H=a,R.A=r,mc=n,null!==gc?0:(hc=null,wc=0,_a(),jc)}(e,t):su(e,t,!0),i=a;;){if(0===r){vc&&!a&&Jc(e,t,0,!1);break}if(n=e.current.alternate,!i||Zc(n)){if(2===r){if(i=t,e.errorRecoveryDisabledLanes&i)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;r=Tc;var c=s.current.memoizedState.isDehydrated;if(c&&(nu(s,l).flags|=256),2!==(l=su(s,l,!1))){if(kc&&!c){s.errorRecoveryDisabledLanes|=i,Cc|=i,r=4;break e}i=_c,_c=r,null!==i&&(null===_c?_c=i:_c.push.apply(_c,i))}r=l}if(i=!1,2!==r)continue}}if(1===r){nu(e,0),Jc(e,t,0,!0);break}e:{switch(a=e,i=r){case 0:case 1:throw Error(o(345));case 4:if((4194048&t)!==t)break;case 6:Jc(a,t,Pc,!bc);break e;case 2:_c=null;break;case 3:case 5:break;default:throw Error(o(329))}if((62914560&t)===t&&10<(r=Nc+300-se())){if(Jc(a,t,Pc,!bc),0!==Ee(a,0,!0))break e;Uc=t,a.timeoutHandle=kp(Xc.bind(null,a,n,_c,Dc,Oc,t,Pc,Cc,$c,bc,i,"Throttled",-0,0),r)}else Xc(a,n,_c,Dc,Oc,t,Pc,Cc,$c,bc,i,null,-0,0)}break}r=su(e,t,!1),i=!1}Du(e)}function Xc(e,t,n,a,r,i,o,l,s,c,u,p,d,f){if(e.timeoutHandle=-1,8192&(p=t.subtreeFlags)||16785408===(16785408&p)){oc(t,i,p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot});var m=(62914560&i)===i?Nc-se():(4194048&i)===i?Rc-se():0;if(null!==(m=function(e,t){return e.stylesheets&&0===e.count&&cd(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&cd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&0===od&&(od=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],i=r.transferSize,o=r.initiatorType,l=r.duration;if(i&&l&&mp(o)){for(o=0,l=r.responseEnd,a+=1;a<n.length;a++){var s=n[a],c=s.startTime;if(c>l)break;var u=s.transferSize,p=s.initiatorType;u&&mp(p)&&(o+=u*((s=s.responseEnd)<l?1:(l-c)/(s-c)))}if(--a,t+=8*(i+o)/(r.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"===typeof(e=navigator.connection.downlink)?e:5}());var r=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&cd(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>od?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}(p,m)))return Uc=i,e.cancelPendingCommit=m(gu.bind(null,e,t,i,n,a,r,o,l,s,u,p,null,d,f)),void Jc(e,i,o,!c)}gu(e,t,i,n,a,r,o,l,s)}function Zc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var a=0;a<n.length;a++){var r=n[a],i=r.getSnapshot;r=r.value;try{if(!Jn(i(),r))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jc(e,t,n,a){t&=~Ec,t&=~Cc,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var i=31-be(r),o=1<<i;a[i]=-1,r&=~o}0!==n&&Ne(e,n,t)}function eu(){return 0!==(6&mc)||(Lu(0,!1),!1)}function tu(){if(null!==gc){if(0===yc)var e=gc.return;else Sr=jr=null,lo(e=gc),si=null,ci=0,e=gc;for(;null!==e;)gs(e.alternate,e),e=e.return;gc=null}}function nu(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,zp(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Uc=0,tu(),hc=e,gc=n=Ua(e.current,null),wc=t,yc=0,xc=null,bc=!1,vc=Pe(e,t),kc=!1,$c=Pc=Ec=Cc=Sc=jc=0,_c=Tc=null,Oc=!1,0!==(8&t)&&(t|=32&t);var a=e.entangledLanes;if(0!==a)for(e=e.entanglements,a&=t;0<a;){var r=31-be(a),i=1<<r;t|=e[r],a&=~i}return zc=t,_a(),n}function au(e,t){Hi=null,R.H=gl,t===Zr||t===ei?(t=oi(),yc=3):t===Jr?(t=oi(),yc=4):yc=t===Nl?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,xc=t,null===gc&&(jc=1,Pl(e,Ya(t,e.current)))}function ru(){var e=Ni.current;return null===e||((4194048&wc)===wc?null===Ri:((62914560&wc)===wc||0!==(536870912&wc))&&e===Ri)}function iu(){var e=R.H;return R.H=gl,null===e?gl:e}function ou(){var e=R.A;return R.A=dc,e}function lu(){jc=4,bc||(4194048&wc)!==wc&&null!==Ni.current||(vc=!0),0===(134217727&Sc)&&0===(134217727&Cc)||null===hc||Jc(hc,wc,Pc,!1)}function su(e,t,n){var a=mc;mc|=2;var r=iu(),i=ou();hc===e&&wc===t||(Dc=null,nu(e,t)),t=!1;var o=jc;e:for(;;)try{if(0!==yc&&null!==gc){var l=gc,s=xc;switch(yc){case 8:tu(),o=6;break e;case 3:case 2:case 9:case 6:null===Ni.current&&(t=!0);var c=yc;if(yc=0,xc=null,fu(e,l,s,c),n&&vc){o=0;break e}break;default:c=yc,yc=0,xc=null,fu(e,l,s,c)}}cu(),o=jc;break}catch(u){au(e,u)}return t&&e.shellSuspendCounter++,Sr=jr=null,mc=a,R.H=r,R.A=i,null===gc&&(hc=null,wc=0,_a()),o}function cu(){for(;null!==gc;)pu(gc)}function uu(){for(;null!==gc&&!oe();)pu(gc)}function pu(e){var t=ls(e.alternate,e,zc);e.memoizedProps=e.pendingProps,null===t?mu(e):gc=t}function du(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ql(n,t,t.pendingProps,t.type,void 0,wc);break;case 11:t=Ql(n,t,t.pendingProps,t.type.render,t.ref,wc);break;case 5:lo(t);default:gs(n,t),t=ls(n,t=gc=Wa(t,zc),zc)}e.memoizedProps=e.pendingProps,null===t?mu(e):gc=t}function fu(e,t,n,a){Sr=jr=null,lo(t),si=null,ci=0;var r=t.return;try{if(function(e,t,n,a,r){if(n.flags|=32768,null!==a&&"object"===typeof a&&"function"===typeof a.then){if(null!==(t=n.alternate)&&Tr(t,n,r,!0),null!==(n=Ni.current)){switch(n.tag){case 31:case 13:return null===Ri?lu():null===n.alternate&&0===jc&&(jc=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===ti?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([a]):t.add(a),Su(e,a,r)),!1;case 22:return n.flags|=65536,a===ti?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([a]):n.add(a),Su(e,a,r)),!1}throw Error(o(435,n.tag))}return Su(e,a,r),lu(),!1}if(dr)return null!==(t=Ni.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==hr&&kr(Ya(e=Error(o(422),{cause:a}),n))):(a!==hr&&kr(Ya(t=Error(o(423),{cause:a}),n)),(e=e.current.alternate).flags|=65536,r&=-r,e.lanes|=r,a=Ya(a,n),ki(e,r=Tl(e.stateNode,a,r)),4!==jc&&(jc=2)),!1;var i=Error(o(520),{cause:a});if(i=Ya(i,n),null===Tc?Tc=[i]:Tc.push(i),4!==jc&&(jc=2),null===t)return!0;a=Ya(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,ki(n,e=Tl(n.stateNode,a,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===Lc||!Lc.has(i))))return n.flags|=65536,r&=-r,n.lanes|=r,Ol(r=_l(r),e,n,a),ki(n,r),!1}n=n.return}while(null!==n);return!1}(e,r,t,n,wc))return jc=1,Pl(e,Ya(n,e.current)),void(gc=null)}catch(i){if(null!==r)throw gc=r,i;return jc=1,Pl(e,Ya(n,e.current)),void(gc=null)}32768&t.flags?(dr||1===a?e=!0:vc||0!==(536870912&wc)?e=!1:(bc=e=!0,(2===a||9===a||3===a||6===a)&&(null!==(a=Ni.current)&&13===a.tag&&(a.flags|=16384))),hu(t,e)):mu(t)}function mu(e){var t=e;do{if(0!==(32768&t.flags))return void hu(t,bc);e=t.return;var n=ms(t.alternate,t,zc);if(null!==n)return void(gc=n);if(null!==(t=t.sibling))return void(gc=t);gc=t=e}while(null!==t);0===jc&&(jc=5)}function hu(e,t){do{var n=hs(e.alternate,e);if(null!==n)return n.flags&=32767,void(gc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(gc=e);gc=e=n}while(null!==e);jc=6,gc=null}function gu(e,t,n,a,r,i,l,s,c){e.cancelPendingCommit=null;do{vu()}while(0!==Ac);if(0!==(6&mc))throw Error(o(327));if(null!==t){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,function(e,t,n,a,r,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-be(n),p=1<<u;l[u]=0,s[u]=-1;var d=c[u];if(null!==d)for(c[u]=null,u=0;u<d.length;u++){var f=d[u];null!==f&&(f.lane&=-536870913)}n&=~p}0!==a&&Ne(e,a,0),0!==i&&0===r&&0!==e.tag&&(e.suspendedLanes|=i&~(o&~t))}(e,n,i|=Ta,l,s,c),e===hc&&(gc=hc=null,wc=0),Fc=t,Ic=e,Uc=n,Wc=i,Hc=r,Bc=a,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,re(de,function(){return ku(),null})):(e.callbackNode=null,e.callbackPriority=0),a=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||a){a=R.T,R.T=null,r=M.p,M.p=2,l=mc,mc|=4;try{!function(e,t){if(e=e.containerInfo,hp=bd,ia(e=ra(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var a=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(a&&0!==a.rangeCount){n=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch(g){n=null;break e}var l=0,s=-1,c=-1,u=0,p=0,d=e,f=null;t:for(;;){for(var m;d!==n||0!==r&&3!==d.nodeType||(s=l+r),d!==i||0!==a&&3!==d.nodeType||(c=l+a),3===d.nodeType&&(l+=d.nodeValue.length),null!==(m=d.firstChild);)f=d,d=m;for(;;){if(d===e)break t;if(f===n&&++u===r&&(s=l),f===i&&++p===a&&(c=l),null!==(m=d.nextSibling))break;f=(d=f).parentNode}d=m}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(gp={focusedElem:e,selectionRange:n},bd=!1,Rs=t;null!==Rs;)if(e=(t=Rs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Rs=e;else for(;null!==Rs;){switch(i=(t=Rs).alternate,e=t.flags,t.tag){case 0:if(0!==(4&e)&&null!==(e=null!==(e=t.updateQueue)?e.events:null))for(n=0;n<e.length;n++)(r=e[n]).ref.impl=r.nextImpl;break;case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==i){e=void 0,n=t,r=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var h=jl(n.type,r);e=a.getSnapshotBeforeUpdate(h,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(w){ju(n,n.return,w)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))Tp(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Tp(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,Rs=e;break}Rs=t.return}}(e,t)}finally{mc=l,M.p=r,R.T=a}}Ac=1,wu(),yu(),xu()}}function wu(){if(1===Ac){Ac=0;var e=Ic,t=Fc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=R.T,R.T=null;var a=M.p;M.p=2;var r=mc;mc|=4;try{Qs(t,e);var i=gp,o=ra(e.containerInfo),l=i.focusedElem,s=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&aa(l.ownerDocument.documentElement,l)){if(null!==s&&ia(l)){var c=s.start,u=s.end;if(void 0===u&&(u=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(u,l.value.length);else{var p=l.ownerDocument||document,d=p&&p.defaultView||window;if(d.getSelection){var f=d.getSelection(),m=l.textContent.length,h=Math.min(s.start,m),g=void 0===s.end?h:Math.min(s.end,m);!f.extend&&h>g&&(o=g,g=h,h=o);var w=na(l,h),y=na(l,g);if(w&&y&&(1!==f.rangeCount||f.anchorNode!==w.node||f.anchorOffset!==w.offset||f.focusNode!==y.node||f.focusOffset!==y.offset)){var x=p.createRange();x.setStart(w.node,w.offset),f.removeAllRanges(),h>g?(f.addRange(x),f.extend(y.node,y.offset)):(x.setEnd(y.node,y.offset),f.addRange(x))}}}}for(p=[],f=l;f=f.parentNode;)1===f.nodeType&&p.push({element:f,left:f.scrollLeft,top:f.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<p.length;l++){var b=p[l];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}bd=!!hp,gp=hp=null}finally{mc=r,M.p=a,R.T=n}}e.current=t,Ac=2}}function yu(){if(2===Ac){Ac=0;var e=Ic,t=Fc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=R.T,R.T=null;var a=M.p;M.p=2;var r=mc;mc|=4;try{Ms(e,t.alternate,t)}finally{mc=r,M.p=a,R.T=n}}Ac=3}}function xu(){if(4===Ac||3===Ac){Ac=0,le();var e=Ic,t=Fc,n=Uc,a=Bc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Ac=5:(Ac=0,Fc=Ic=null,bu(e,e.pendingLanes));var r=e.pendingLanes;if(0===r&&(Lc=null),Le(n),t=t.stateNode,ye&&"function"===typeof ye.onCommitFiberRoot)try{ye.onCommitFiberRoot(we,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==a){t=R.T,r=M.p,M.p=2,R.T=null;try{for(var i=e.onRecoverableError,o=0;o<a.length;o++){var l=a[o];i(l.value,{componentStack:l.stack})}}finally{R.T=t,M.p=r}}0!==(3&Uc)&&vu(),Du(e),r=e.pendingLanes,0!==(261930&n)&&0!==(42&r)?e===Qc?Kc++:(Kc=0,Qc=e):Kc=0,Lu(0,!1)}}function bu(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Ur(t)))}function vu(){return wu(),yu(),xu(),ku()}function ku(){if(5!==Ac)return!1;var e=Ic,t=Wc;Wc=0;var n=Le(Uc),a=R.T,r=M.p;try{M.p=32>n?32:n,R.T=null,n=Hc,Hc=null;var i=Ic,l=Uc;if(Ac=0,Fc=Ic=null,Uc=0,0!==(6&mc))throw Error(o(331));var s=mc;if(mc|=4,cc(i.current),tc(i,i.current,l,n),mc=s,Lu(0,!1),ye&&"function"===typeof ye.onPostCommitFiberRoot)try{ye.onPostCommitFiberRoot(we,i)}catch(c){}return!0}finally{M.p=r,R.T=a,bu(e,t)}}function zu(e,t,n){t=Ya(n,t),null!==(e=bi(e,t=Tl(e.stateNode,t,2),2))&&(Oe(e,2),Du(e))}function ju(e,t,n){if(3===e.tag)zu(e,e,n);else for(;null!==t;){if(3===t.tag){zu(t,e,n);break}if(1===t.tag){var a=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof a.componentDidCatch&&(null===Lc||!Lc.has(a))){e=Ya(n,e),null!==(a=bi(t,n=_l(2),2))&&(Ol(n,a,t,e),Oe(a,2),Du(a));break}}t=t.return}}function Su(e,t,n){var a=e.pingCache;if(null===a){a=e.pingCache=new fc;var r=new Set;a.set(t,r)}else void 0===(r=a.get(t))&&(r=new Set,a.set(t,r));r.has(n)||(kc=!0,r.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function Cu(e,t,n){var a=e.pingCache;null!==a&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,hc===e&&(wc&n)===n&&(4===jc||3===jc&&(62914560&wc)===wc&&300>se()-Nc?0===(2&mc)&&nu(e,0):Ec|=n,$c===wc&&($c=0)),Du(e)}function Eu(e,t){0===t&&(t=Te()),null!==(e=Ra(e,t))&&(Oe(e,t),Du(e))}function Pu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Eu(e,n)}function $u(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;null!==r&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==a&&a.delete(t),Eu(e,n)}var Tu=null,_u=null,Ou=!1,Nu=!1,Ru=!1,Mu=0;function Du(e){e!==_u&&null===e.next&&(null===_u?Tu=_u=e:_u=_u.next=e),Nu=!0,Ou||(Ou=!0,Sp(function(){0!==(6&mc)?re(ue,Au):Iu()}))}function Lu(e,t){if(!Ru&&Nu){Ru=!0;do{for(var n=!1,a=Tu;null!==a;){if(!t)if(0!==e){var r=a.pendingLanes;if(0===r)var i=0;else{var o=a.suspendedLanes,l=a.pingedLanes;i=(1<<31-be(42|e)+1)-1,i=201326741&(i&=r&~(o&~l))?201326741&i|1:i?2|i:0}0!==i&&(n=!0,Wu(a,i))}else i=wc,0===(3&(i=Ee(a,a===hc?i:0,null!==a.cancelPendingCommit||-1!==a.timeoutHandle)))||Pe(a,i)||(n=!0,Wu(a,i));a=a.next}}while(n);Ru=!1}}function Au(){Iu()}function Iu(){Nu=Ou=!1;var e=0;0!==Mu&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==vp&&(vp=e,!0);return vp=null,!1}()&&(e=Mu);for(var t=se(),n=null,a=Tu;null!==a;){var r=a.next,i=Fu(a,t);0===i?(a.next=null,null===n?Tu=r:n.next=r,null===r&&(_u=n)):(n=a,(0!==e||0!==(3&i))&&(Nu=!0)),a=r}0!==Ac&&5!==Ac||Lu(e,!1),0!==Mu&&(Mu=0)}function Fu(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=-62914561&e.pendingLanes;0<i;){var o=31-be(i),l=1<<o,s=r[o];-1===s?0!==(l&n)&&0===(l&a)||(r[o]=$e(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}if(n=wc,n=Ee(e,e===(t=hc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),a=e.callbackNode,0===n||e===t&&(2===yc||9===yc)||null!==e.cancelPendingCommit)return null!==a&&null!==a&&ie(a),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||Pe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==a&&ie(a),Le(n)){case 2:case 8:n=pe;break;case 32:default:n=de;break;case 268435456:n=me}return a=Uu.bind(null,e),n=re(n,a),e.callbackPriority=t,e.callbackNode=n,t}return null!==a&&null!==a&&ie(a),e.callbackPriority=2,e.callbackNode=null,2}function Uu(e,t){if(0!==Ac&&5!==Ac)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(vu()&&e.callbackNode!==n)return null;var a=wc;return 0===(a=Ee(e,e===hc?a:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(qc(e,a,t),Fu(e,se()),null!=e.callbackNode&&e.callbackNode===n?Uu.bind(null,e):null)}function Wu(e,t){if(vu())return null;qc(e,t,!0)}function Hu(){if(0===Mu){var e=Br;0===e&&(e=ze,0===(261888&(ze<<=1))&&(ze=256)),Mu=e}return Mu}function Bu(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:_t(""+e)}function Ku(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Qu=0;Qu<Sa.length;Qu++){var Gu=Sa[Qu];Ca(Gu.toLowerCase(),"on"+(Gu[0].toUpperCase()+Gu.slice(1)))}Ca(wa,"onAnimationEnd"),Ca(ya,"onAnimationIteration"),Ca(xa,"onAnimationStart"),Ca("dblclick","onDoubleClick"),Ca("focusin","onFocus"),Ca("focusout","onBlur"),Ca(ba,"onTransitionRun"),Ca(va,"onTransitionStart"),Ca(ka,"onTransitionCancel"),Ca(za,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vu));function qu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var l=a[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&r.isPropagationStopped())break e;i=l,r.currentTarget=c;try{i(r)}catch(u){Ea(u)}r.currentTarget=null,i=s}else for(o=0;o<a.length;o++){if(s=(l=a[o]).instance,c=l.currentTarget,l=l.listener,s!==i&&r.isPropagationStopped())break e;i=l,r.currentTarget=c;try{i(r)}catch(u){Ea(u)}r.currentTarget=null,i=s}}}}function Xu(e,t){var n=t[Be];void 0===n&&(n=t[Be]=new Set);var a=e+"__bubble";n.has(a)||(tp(t,e,2,!1),n.add(a))}function Zu(e,t,n){var a=0;t&&(a|=4),tp(n,e,a,t)}var Ju="_reactListening"+Math.random().toString(36).slice(2);function ep(e){if(!e[Ju]){e[Ju]=!0,tt.forEach(function(t){"selectionchange"!==t&&(Yu.has(t)||Zu(t,!1,e),Zu(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ju]||(t[Ju]=!0,Zu("selectionchange",!1,t))}}function tp(e,t,n,a){switch(Ed(t)){case 2:var r=vd;break;case 8:r=kd;break;default:r=zd}n=r.bind(null,t,n,e),r=void 0,!Wt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(r=!0),a?void 0!==r?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):void 0!==r?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function np(e,t,n,a,r){var i=a;if(0===(1&t)&&0===(2&t)&&null!==a)e:for(;;){if(null===a)return;var o=a.tag;if(3===o||4===o){var l=a.stateNode.containerInfo;if(l===r)break;if(4===o)for(o=a.return;null!==o;){var c=o.tag;if((3===c||4===c)&&o.stateNode.containerInfo===r)return;o=o.return}for(;null!==l;){if(null===(o=qe(l)))return;if(5===(c=o.tag)||6===c||26===c||27===c){a=i=o;continue e}l=l.parentNode}}a=a.return}It(function(){var a=i,r=Rt(n),o=[];e:{var l=ja.get(e);if(void 0!==l){var c=nn,u=e;switch(e){case"keypress":if(0===Vt(n))break e;case"keydown":case"keyup":c=yn;break;case"focusin":u="focus",c=cn;break;case"focusout":u="blur",c=cn;break;case"beforeblur":case"afterblur":c=cn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=ln;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=sn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=bn;break;case wa:case ya:case xa:c=un;break;case za:c=vn;break;case"scroll":case"scrollend":c=rn;break;case"wheel":c=kn;break;case"copy":case"cut":case"paste":c=pn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=xn;break;case"toggle":case"beforetoggle":c=zn}var p=0!==(4&t),d=!p&&("scroll"===e||"scrollend"===e),f=p?null!==l?l+"Capture":null:l;p=[];for(var m,h=a;null!==h;){var g=h;if(m=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===m||null===f||null!=(g=Ft(h,f))&&p.push(ap(h,g,m)),d)break;h=h.return}0<p.length&&(l=new c(l,u,null,n,r),o.push({event:l,listeners:p}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Nt||!(u=n.relatedTarget||n.fromElement)||!qe(u)&&!u[He])&&(c||l)&&(l=r.window===r?r:(l=r.ownerDocument)?l.defaultView||l.parentWindow:window,c?(c=a,null!==(u=(u=n.relatedTarget||n.toElement)?qe(u):null)&&(d=s(u),p=u.tag,u!==d||5!==p&&27!==p&&6!==p)&&(u=null)):(c=null,u=a),c!==u)){if(p=ln,g="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(p=xn,g="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==c?l:Ze(c),m=null==u?l:Ze(u),(l=new p(g,h+"leave",c,n,r)).target=d,l.relatedTarget=m,g=null,qe(r)===a&&((p=new p(f,h+"enter",u,n,r)).target=m,p.relatedTarget=d,g=p),d=g,c&&u)e:{for(p=ip,h=u,m=0,g=f=c;g;g=p(g))m++;g=0;for(var w=h;w;w=p(w))g++;for(;0<m-g;)f=p(f),m--;for(;0<g-m;)h=p(h),g--;for(;m--;){if(f===h||null!==h&&f===h.alternate){p=f;break e}f=p(f),h=p(h)}p=null}else p=null;null!==c&&op(o,l,c,p,!1),null!==u&&null!==d&&op(o,d,u,p,!0)}if("select"===(c=(l=a?Ze(a):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var y=Un;else if(Mn(l))if(Wn)y=Zn;else{y=qn;var x=Yn}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?a&&Pt(a.elementType)&&(y=Un):y=Xn;switch(y&&(y=y(e,a))?Dn(o,y,n,r):(x&&x(e,l,a),"focusout"===e&&a&&"number"===l.type&&null!=a.memoizedProps.value&&bt(l,"number",l.value)),x=a?Ze(a):window,e){case"focusin":(Mn(x)||"true"===x.contentEditable)&&(la=x,sa=a,ca=null);break;case"focusout":ca=sa=la=null;break;case"mousedown":ua=!0;break;case"contextmenu":case"mouseup":case"dragend":ua=!1,pa(o,n,r);break;case"selectionchange":if(oa)break;case"keydown":case"keyup":pa(o,n,r)}var b;if(Sn)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Nn?_n(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Pn&&"ko"!==n.locale&&(Nn||"onCompositionStart"!==v?"onCompositionEnd"===v&&Nn&&(b=Gt()):(Kt="value"in(Bt=r)?Bt.value:Bt.textContent,Nn=!0)),0<(x=rp(a,v)).length&&(v=new dn(v,e,null,n,r),o.push({event:v,listeners:x}),b?v.data=b:null!==(b=On(n))&&(v.data=b))),(b=En?function(e,t){switch(e){case"compositionend":return On(t);case"keypress":return 32!==t.which?null:(Tn=!0,$n);case"textInput":return(e=t.data)===$n&&Tn?null:e;default:return null}}(e,n):function(e,t){if(Nn)return"compositionend"===e||!Sn&&_n(e,t)?(e=Gt(),Qt=Kt=Bt=null,Nn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(v=rp(a,"onBeforeInput")).length&&(x=new dn("onBeforeInput","beforeinput",null,n,r),o.push({event:x,listeners:v}),x.data=b)),function(e,t,n,a,r){if("submit"===t&&n&&n.stateNode===r){var i=Bu((r[We]||null).action),o=a.submitter;o&&null!==(t=(t=o[We]||null)?Bu(t.formAction):o.getAttribute("formAction"))&&(i=t,o=null);var l=new nn("action","action",null,a,r);e.push({event:l,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(0!==Mu){var e=o?Ku(r,o):new FormData(r);nl(n,{pending:!0,data:e,method:r.method,action:i},null,e)}}else"function"===typeof i&&(l.preventDefault(),e=o?Ku(r,o):new FormData(r),nl(n,{pending:!0,data:e,method:r.method,action:i},i,e))},currentTarget:r}]})}}(o,e,a,n,r)}qu(o,t)})}function ap(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rp(e,t){for(var n=t+"Capture",a=[];null!==e;){var r=e,i=r.stateNode;if(5!==(r=r.tag)&&26!==r&&27!==r||null===i||(null!=(r=Ft(e,n))&&a.unshift(ap(e,r,i)),null!=(r=Ft(e,t))&&a.push(ap(e,r,i))),3===e.tag)return a;e=e.return}return[]}function ip(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function op(e,t,n,a,r){for(var i=t._reactName,o=[];null!==n&&n!==a;){var l=n,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===a)break;5!==l&&26!==l&&27!==l||null===c||(s=c,r?null!=(c=Ft(n,i))&&o.unshift(ap(n,c,s)):r||null!=(c=Ft(n,i))&&o.push(ap(n,c,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var lp=/\r\n?/g,sp=/\u0000|\uFFFD/g;function cp(e){return("string"===typeof e?e:""+e).replace(lp,"\n").replace(sp,"")}function up(e,t){return t=cp(t),cp(e)===t}function pp(e,t,n,a,r,i){switch(n){case"children":"string"===typeof a?"body"===t||"textarea"===t&&""===a||jt(e,a):("number"===typeof a||"bigint"===typeof a)&&"body"!==t&&jt(e,""+a);break;case"className":ct(e,"class",a);break;case"tabIndex":ct(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ct(e,n,a);break;case"style":Et(e,a,i);break;case"data":if("object"!==t){ct(e,"data",a);break}case"src":case"href":if(""===a&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==a||"function"===typeof a||"symbol"===typeof a||"boolean"===typeof a){e.removeAttribute(n);break}a=_t(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if("function"===typeof a){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&pp(e,t,"name",r.name,r,null),pp(e,t,"formEncType",r.formEncType,r,null),pp(e,t,"formMethod",r.formMethod,r,null),pp(e,t,"formTarget",r.formTarget,r,null)):(pp(e,t,"encType",r.encType,r,null),pp(e,t,"method",r.method,r,null),pp(e,t,"target",r.target,r,null))),null==a||"symbol"===typeof a||"boolean"===typeof a){e.removeAttribute(n);break}a=_t(""+a),e.setAttribute(n,a);break;case"onClick":null!=a&&(e.onclick=Ot);break;case"onScroll":null!=a&&Xu("scroll",e);break;case"onScrollEnd":null!=a&&Xu("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=a){if("object"!==typeof a||!("__html"in a))throw Error(o(61));if(null!=(n=a.__html)){if(null!=r.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&"function"!==typeof a&&"symbol"!==typeof a;break;case"muted":e.muted=a&&"function"!==typeof a&&"symbol"!==typeof a;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==a||"function"===typeof a||"boolean"===typeof a||"symbol"===typeof a){e.removeAttribute("xlink:href");break}n=_t(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=a&&"function"!==typeof a&&"symbol"!==typeof a?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&"function"!==typeof a&&"symbol"!==typeof a?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===a?e.setAttribute(n,""):!1!==a&&null!=a&&"function"!==typeof a&&"symbol"!==typeof a?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":null==a||"function"===typeof a||"symbol"===typeof a||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Xu("beforetoggle",e),Xu("toggle",e),st(e,"popover",a);break;case"xlinkActuate":ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ut(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ut(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ut(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ut(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":st(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&st(e,n=$t.get(n)||n,a)}}function dp(e,t,n,a,r,i){switch(n){case"style":Et(e,a,i);break;case"dangerouslySetInnerHTML":if(null!=a){if("object"!==typeof a||!("__html"in a))throw Error(o(61));if(null!=(n=a.__html)){if(null!=r.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof a?jt(e,a):("number"===typeof a||"bigint"===typeof a)&&jt(e,""+a);break;case"onScroll":null!=a&&Xu("scroll",e);break;case"onScrollEnd":null!=a&&Xu("scrollend",e);break;case"onClick":null!=a&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:nt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),"function"===typeof(i=null!=(i=e[We]||null)?i[n]:null)&&e.removeEventListener(t,i,r),"function"!==typeof a)?n in e?e[n]=a:!0===a?e.setAttribute(n,""):st(e,n,a):("function"!==typeof i&&null!==i&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r)))}}function fp(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xu("error",e),Xu("load",e);var a,r=!1,i=!1;for(a in n)if(n.hasOwnProperty(a)){var l=n[a];if(null!=l)switch(a){case"src":r=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:pp(e,t,a,l,n,null)}}return i&&pp(e,t,"srcSet",n.srcSet,n,null),void(r&&pp(e,t,"src",n.src,n,null));case"input":Xu("invalid",e);var s=a=l=i=null,c=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var p=n[r];if(null!=p)switch(r){case"name":i=p;break;case"type":l=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":a=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(o(137,t));break;default:pp(e,t,r,p,n,null)}}return void xt(e,a,s,c,u,l,i,!1);case"select":for(i in Xu("invalid",e),r=l=a=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case"value":a=s;break;case"defaultValue":l=s;break;case"multiple":r=s;default:pp(e,t,i,s,n,null)}return t=a,n=l,e.multiple=!!r,void(null!=t?vt(e,!!r,t,!1):null!=n&&vt(e,!!r,n,!0));case"textarea":for(l in Xu("invalid",e),a=i=r=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":r=s;break;case"defaultValue":i=s;break;case"children":a=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(o(91));break;default:pp(e,t,l,s,n,null)}return void zt(e,r,i,a);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(r=n[c]))if("selected"===c)e.selected=r&&"function"!==typeof r&&"symbol"!==typeof r;else pp(e,t,c,r,n,null);return;case"dialog":Xu("beforetoggle",e),Xu("toggle",e),Xu("cancel",e),Xu("close",e);break;case"iframe":case"object":Xu("load",e);break;case"video":case"audio":for(r=0;r<Vu.length;r++)Xu(Vu[r],e);break;case"image":Xu("error",e),Xu("load",e);break;case"details":Xu("toggle",e);break;case"embed":case"source":case"link":Xu("error",e),Xu("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(r=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:pp(e,t,u,r,n,null)}return;default:if(Pt(t)){for(p in n)n.hasOwnProperty(p)&&(void 0!==(r=n[p])&&dp(e,t,p,r,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(r=n[s])&&pp(e,t,s,r,n,null))}function mp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var hp=null,gp=null;function wp(e){return 9===e.nodeType?e:e.ownerDocument}function yp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xp(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function bp(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var vp=null;var kp="function"===typeof setTimeout?setTimeout:void 0,zp="function"===typeof clearTimeout?clearTimeout:void 0,jp="function"===typeof Promise?Promise:void 0,Sp="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof jp?function(e){return jp.resolve(null).then(e).catch(Cp)}:kp;function Cp(e){setTimeout(function(){throw e})}function Ep(e){return"head"===e}function Pp(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&8===r.nodeType)if("/$"===(n=r.data)||"/&"===n){if(0===a)return e.removeChild(r),void Kd(t);a--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)a++;else if("html"===n)Ip(e.ownerDocument.documentElement);else if("head"===n){Ip(n=e.ownerDocument.head);for(var i=n.firstChild;i;){var o=i.nextSibling,l=i.nodeName;i[Ve]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===i.rel.toLowerCase()||n.removeChild(i),i=o}}else"body"===n&&Ip(e.ownerDocument.body);n=r}while(n);Kd(t)}function $p(e,t){var n=e;e=0;do{var a=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=a}while(n)}function Tp(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Tp(n),Ye(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function _p(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=Rp(e.nextSibling)))return null}return e}function Op(e){return"$?"===e.data||"$~"===e.data}function Np(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Rp(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}var Mp=null;function Dp(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return Rp(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function Lp(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Ap(e,t,n){switch(t=wp(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}function Ip(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ye(e)}var Fp=new Map,Up=new Set;function Wp(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Hp=M.d;M.d={f:function(){var e=Hp.f(),t=eu();return e||t},r:function(e){var t=Xe(e);null!==t&&5===t.tag&&"form"===t.type?rl(t):Hp.r(e)},D:function(e){Hp.D(e),Kp("dns-prefetch",e,null)},C:function(e,t){Hp.C(e,t),Kp("preconnect",e,t)},L:function(e,t,n){Hp.L(e,t,n);var a=Bp;if(a&&e&&t){var r='link[rel="preload"][as="'+wt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(r+='[imagesrcset="'+wt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(r+='[imagesizes="'+wt(n.imageSizes)+'"]')):r+='[href="'+wt(e)+'"]';var i=r;switch(t){case"style":i=Gp(e);break;case"script":i=qp(e)}Fp.has(i)||(e=f({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Fp.set(i,e),null!==a.querySelector(r)||"style"===t&&a.querySelector(Vp(i))||"script"===t&&a.querySelector(Xp(i))||(fp(t=a.createElement("link"),"link",e),et(t),a.head.appendChild(t)))}},m:function(e,t){Hp.m(e,t);var n=Bp;if(n&&e){var a=t&&"string"===typeof t.as?t.as:"script",r='link[rel="modulepreload"][as="'+wt(a)+'"][href="'+wt(e)+'"]',i=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=qp(e)}if(!Fp.has(i)&&(e=f({rel:"modulepreload",href:e},t),Fp.set(i,e),null===n.querySelector(r))){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Xp(i)))return}fp(a=n.createElement("link"),"link",e),et(a),n.head.appendChild(a)}}},X:function(e,t){Hp.X(e,t);var n=Bp;if(n&&e){var a=Je(n).hoistableScripts,r=qp(e),i=a.get(r);i||((i=n.querySelector(Xp(r)))||(e=f({src:e,async:!0},t),(t=Fp.get(r))&&td(e,t),et(i=n.createElement("script")),fp(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}},S:function(e,t,n){Hp.S(e,t,n);var a=Bp;if(a&&e){var r=Je(a).hoistableStyles,i=Gp(e);t=t||"default";var o=r.get(i);if(!o){var l={loading:0,preload:null};if(o=a.querySelector(Vp(i)))l.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Fp.get(i))&&ed(e,n);var s=o=a.createElement("link");et(s),fp(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Jp(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:l},r.set(i,o)}}},M:function(e,t){Hp.M(e,t);var n=Bp;if(n&&e){var a=Je(n).hoistableScripts,r=qp(e),i=a.get(r);i||((i=n.querySelector(Xp(r)))||(e=f({src:e,async:!0,type:"module"},t),(t=Fp.get(r))&&td(e,t),et(i=n.createElement("script")),fp(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}};var Bp="undefined"===typeof document?null:document;function Kp(e,t,n){var a=Bp;if(a&&"string"===typeof t&&t){var r=wt(t);r='link[rel="'+e+'"][href="'+r+'"]',"string"===typeof n&&(r+='[crossorigin="'+n+'"]'),Up.has(r)||(Up.add(r),e={rel:e,crossOrigin:n,href:t},null===a.querySelector(r)&&(fp(t=a.createElement("link"),"link",e),et(t),a.head.appendChild(t)))}}function Qp(e,t,n,a){var r,i,l,s,c=(c=Q.current)?Wp(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Gp(n.href),(a=(n=Je(c).hoistableStyles).get(t))||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Gp(n.href);var u=Je(c).hoistableStyles,p=u.get(e);if(p||(c=c.ownerDocument||c,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,p),(u=c.querySelector(Vp(e)))&&!u._p&&(p.instance=u,p.state.loading=5),Fp.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Fp.set(e,n),u||(r=c,i=e,l=n,s=p.state,r.querySelector('link[rel="preload"][as="style"]['+i+"]")?s.loading=1:(i=r.createElement("link"),s.preload=i,i.addEventListener("load",function(){return s.loading|=1}),i.addEventListener("error",function(){return s.loading|=2}),fp(i,"link",l),et(i),r.head.appendChild(i))))),t&&null===a)throw Error(o(528,""));return p}if(t&&null!==a)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=qp(n),(a=(n=Je(c).hoistableScripts).get(t))||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Gp(e){return'href="'+wt(e)+'"'}function Vp(e){return'link[rel="stylesheet"]['+e+"]"}function Yp(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function qp(e){return'[src="'+wt(e)+'"]'}function Xp(e){return"script[async]"+e}function Zp(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+wt(n.href)+'"]');if(a)return t.instance=a,et(a),a;var r=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return et(a=(e.ownerDocument||e).createElement("style")),fp(a,"style",r),Jp(a,n.precedence,e),t.instance=a;case"stylesheet":r=Gp(n.href);var i=e.querySelector(Vp(r));if(i)return t.state.loading|=4,t.instance=i,et(i),i;a=Yp(n),(r=Fp.get(r))&&ed(a,r),et(i=(e.ownerDocument||e).createElement("link"));var l=i;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),fp(i,"link",a),t.state.loading|=4,Jp(i,n.precedence,e),t.instance=i;case"script":return i=qp(n.src),(r=e.querySelector(Xp(i)))?(t.instance=r,et(r),r):(a=n,(r=Fp.get(i))&&td(a=f({},n),r),et(r=(e=e.ownerDocument||e).createElement("script")),fp(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(a=t.instance,t.state.loading|=4,Jp(a,n.precedence,e));return t.instance}function Jp(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,i=r,o=0;o<a.length;o++){var l=a[o];if(l.dataset.precedence===t)i=l;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function ed(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function td(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var nd=null;function ad(e,t,n){if(null===nd){var a=new Map,r=nd=new Map;r.set(n,a)}else(a=(r=nd).get(n))||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var i=n[r];if(!(i[Ve]||i[Ue]||"link"===e&&"stylesheet"===i.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==i.namespaceURI){var o=i.getAttribute(t)||"";o=e+o;var l=a.get(o);l?l.push(i):a.set(o,[i])}}return a}function rd(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function id(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var od=0;function ld(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)cd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var sd=null;function cd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,sd=new Map,t.forEach(ud,e),sd=null,ld.call(e))}function ud(e,t){if(!(4&t.state.loading)){var n=sd.get(e);if(n)var a=n.get(null);else{n=new Map,sd.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var o=r[i];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}o=(r=t.instance).getAttribute("data-precedence"),(i=n.get(o)||a)===a&&n.set(null,r),n.set(o,r),this.count++,a=ld.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),i?i.parentNode.insertBefore(r,i.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(r,e.firstChild),t.state.loading|=4}}var pd={$$typeof:v,Provider:null,Consumer:null,_currentValue:D,_currentValue2:D,_threadCount:0};function dd(e,t,n,a,r,i,o,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_e(0),this.hiddenUpdates=_e(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function fd(e,t,n,a,r,i,o,l,s,c,u,p){return e=new dd(e,t,n,o,s,c,u,p,l),t=1,!0===i&&(t|=24),i=Ia(3,null,null,t),e.current=i,i.stateNode=e,(t=Fr()).refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},wi(i),e}function md(e){return e?e=La:La}function hd(e,t,n,a,r,i){r=md(r),null===a.context?a.context=r:a.pendingContext=r,(a=xi(t)).payload={element:n},null!==(i=void 0===i?null:i)&&(a.callback=i),null!==(n=bi(e,a,t))&&(Yc(n,0,t),vi(n,e,t))}function gd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function wd(e,t){gd(e,t),(e=e.alternate)&&gd(e,t)}function yd(e){if(13===e.tag||31===e.tag){var t=Ra(e,67108864);null!==t&&Yc(t,0,67108864),wd(e,67108864)}}function xd(e){if(13===e.tag||31===e.tag){var t=Gc(),n=Ra(e,t=De(t));null!==n&&Yc(n,0,t),wd(e,t)}}var bd=!0;function vd(e,t,n,a){var r=R.T;R.T=null;var i=M.p;try{M.p=2,zd(e,t,n,a)}finally{M.p=i,R.T=r}}function kd(e,t,n,a){var r=R.T;R.T=null;var i=M.p;try{M.p=8,zd(e,t,n,a)}finally{M.p=i,R.T=r}}function zd(e,t,n,a){if(bd){var r=jd(a);if(null===r)np(e,t,a,Sd,n),Dd(e,a);else if(function(e,t,n,a,r){switch(t){case"focusin":return $d=Ld($d,e,t,n,a,r),!0;case"dragenter":return Td=Ld(Td,e,t,n,a,r),!0;case"mouseover":return _d=Ld(_d,e,t,n,a,r),!0;case"pointerover":var i=r.pointerId;return Od.set(i,Ld(Od.get(i)||null,e,t,n,a,r)),!0;case"gotpointercapture":return i=r.pointerId,Nd.set(i,Ld(Nd.get(i)||null,e,t,n,a,r)),!0}return!1}(r,e,t,n,a))a.stopPropagation();else if(Dd(e,a),4&t&&-1<Md.indexOf(e)){for(;null!==r;){var i=Xe(r);if(null!==i)switch(i.tag){case 3:if((i=i.stateNode).current.memoizedState.isDehydrated){var o=Ce(i.pendingLanes);if(0!==o){var l=i;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var s=1<<31-be(o);l.entanglements[1]|=s,o&=~s}Du(i),0===(6&mc)&&(Mc=se()+500,Lu(0,!1))}}break;case 31:case 13:null!==(l=Ra(i,2))&&Yc(l,0,2),eu(),wd(i,2)}if(null===(i=jd(a))&&np(e,t,a,Sd,n),i===r)break;r=i}null!==r&&a.stopPropagation()}else np(e,t,a,null,n)}}function jd(e){return Cd(e=Rt(e))}var Sd=null;function Cd(e){if(Sd=null,null!==(e=qe(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(31===n){if(null!==(e=u(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Sd=e,null}function Ed(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case ue:return 2;case pe:return 8;case de:case fe:return 32;case me:return 268435456;default:return 32}default:return 32}}var Pd=!1,$d=null,Td=null,_d=null,Od=new Map,Nd=new Map,Rd=[],Md="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dd(e,t){switch(e){case"focusin":case"focusout":$d=null;break;case"dragenter":case"dragleave":Td=null;break;case"mouseover":case"mouseout":_d=null;break;case"pointerover":case"pointerout":Od.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nd.delete(t.pointerId)}}function Ld(e,t,n,a,r,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},null!==t&&(null!==(t=Xe(t))&&yd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,null!==r&&-1===t.indexOf(r)&&t.push(r),e)}function Ad(e){var t=qe(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void Ie(e.priority,function(){xd(n)})}else if(31===t){if(null!==(t=u(n)))return e.blockedOn=t,void Ie(e.priority,function(){xd(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Id(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=jd(e.nativeEvent);if(null!==n)return null!==(t=Xe(n))&&yd(t),e.blockedOn=n,!1;var a=new(n=e.nativeEvent).constructor(n.type,n);Nt=a,n.target.dispatchEvent(a),Nt=null,t.shift()}return!0}function Fd(e,t,n){Id(e)&&n.delete(t)}function Ud(){Pd=!1,null!==$d&&Id($d)&&($d=null),null!==Td&&Id(Td)&&(Td=null),null!==_d&&Id(_d)&&(_d=null),Od.forEach(Fd),Nd.forEach(Fd)}function Wd(e,t){e.blockedOn===t&&(e.blockedOn=null,Pd||(Pd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ud)))}var Hd=null;function Bd(e){Hd!==e&&(Hd=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Hd===e&&(Hd=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if("function"!==typeof a){if(null===Cd(a||n))continue;break}var i=Xe(n);null!==i&&(e.splice(t,3),t-=3,nl(i,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function Kd(e){function t(t){return Wd(t,e)}null!==$d&&Wd($d,e),null!==Td&&Wd(Td,e),null!==_d&&Wd(_d,e),Od.forEach(t),Nd.forEach(t);for(var n=0;n<Rd.length;n++){var a=Rd[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Rd.length&&null===(n=Rd[0]).blockedOn;)Ad(n),null===n.blockedOn&&Rd.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(a=0;a<n.length;a+=3){var r=n[a],i=n[a+1],o=r[We]||null;if("function"===typeof i)o||Bd(n);else if(o){var l=null;if(i&&i.hasAttribute("formAction")){if(r=i,o=i[We]||null)l=o.formAction;else if(null!==Cd(r))continue}else l=o.action;"function"===typeof l?n[a+1]=l:(n.splice(a,3),a-=3),Bd(n)}}}function Qd(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return r=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==r&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==r&&(r(),r=null)}}}function Gd(e){this._internalRoot=e}function Vd(e){this._internalRoot=e}Vd.prototype.render=Gd.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));hd(t.current,Gc(),e,t,null,null)},Vd.prototype.unmount=Gd.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;hd(e.current,2,null,e,null,null),eu(),t[He]=null}},Vd.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ae();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rd.length&&0!==t&&t<Rd[n].priority;n++);Rd.splice(n,0,e),0===n&&Ad(e)}};var Yd=r.version;if("19.2.4"!==Yd)throw Error(o(527,Yd,"19.2.4"));M.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(null===r)break;var i=r.alternate;if(null===i){if(null!==(a=r.return)){n=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return p(r),e;if(i===a)return p(r),t;i=i.sibling}throw Error(o(188))}if(n.return!==a.return)n=r,a=i;else{for(var l=!1,c=r.child;c;){if(c===n){l=!0,n=r,a=i;break}if(c===a){l=!0,a=r,n=i;break}c=c.sibling}if(!l){for(c=i.child;c;){if(c===n){l=!0,n=i,a=r;break}if(c===a){l=!0,a=i,n=r;break}c=c.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==a)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var qd={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Xd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xd.isDisabled&&Xd.supportsFiber)try{we=Xd.inject(qd),ye=Xd}catch(Jd){}}t.createRoot=function(e,t){if(!l(e))throw Error(o(299));var n=!1,a="",r=Sl,i=Cl,s=El;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(a=t.identifierPrefix),void 0!==t.onUncaughtError&&(r=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError)),t=fd(e,1,!1,null,0,n,a,null,r,i,s,Qd),e[He]=t.current,ep(e),new Gd(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(o(299));var a=!1,r="",i=Sl,s=Cl,c=El,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(r=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.formState&&(u=n.formState)),(t=fd(e,1,!0,t,0,a,r,u,i,s,c,Qd)).context=md(null),n=t.current,(r=xi(a=De(a=Gc()))).callback=null,bi(n,r,a),n=a,t.current.lanes=n,Oe(t,n),Du(t),e[He]=t.current,ep(e),new Vd(t)},t.version="19.2.4"},672(e,t,n){var a=n(43);function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(r(299));return function(e,t,n){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==a?null:""+a,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=o.p;try{if(s.T=null,o.p=2,e)return e()}finally{s.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,a=c(n,t.crossOrigin),r="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:a,integrity:r,fetchPriority:i}):"script"===n&&o.d.X(e,{crossOrigin:a,integrity:r,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,a=c(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:a,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.2.4"},391(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)},799(e,t){var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(e,t,a){var r=null;if(void 0!==a&&(r=""+a),void 0!==t.key&&(r=""+t.key),"key"in t)for(var i in a={},t)"key"!==i&&(a[i]=t[i]);else a=t;return t=a.ref,{$$typeof:n,type:e,key:r,ref:void 0!==t?t:null,props:a}}t.Fragment=a,t.jsx=r,t.jsxs=r},288(e,t){var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.for("react.activity"),m=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,w={};function y(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||h}function x(){}function b(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var v=b.prototype=new x;v.constructor=b,g(v,y.prototype),v.isPureReactComponent=!0;var k=Array.isArray;function z(){}var j={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function C(e,t,a){var r=a.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:a}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function $(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function T(e,t,r,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case a:u=!0;break;case d:return T((u=e._init)(e._payload),t,r,i,o)}}if(u)return o=o(e),u=""===i?"."+$(e,0):i,k(o)?(r="",null!=u&&(r=u.replace(P,"$&/")+"/"),T(o,t,r,"",function(e){return e})):null!=o&&(E(o)&&(s=o,c=r+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+u,o=C(s.type,c,s.props)),t.push(o)),1;u=0;var p,f=""===i?".":i+":";if(k(e))for(var h=0;h<e.length;h++)u+=T(i=e[h],t,r,l=f+$(i,h),o);else if("function"===typeof(h=null===(p=e)||"object"!==typeof p?null:"function"===typeof(p=m&&p[m]||p["@@iterator"])?p:null))for(e=h.call(e),h=0;!(i=e.next()).done;)u+=T(i=i.value,t,r,l=f+$(i,h++),o);else if("object"===l){if("function"===typeof e.then)return T(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(z,z):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,r,i,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function _(e,t,n){if(null==e)return e;var a=[],r=0;return T(e,a,"","",function(e){return t.call(n,e,r++)}),a}function O(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},R={map:_,forEach:function(e,t,n){_(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _(e,function(){t++}),t},toArray:function(e){return _(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=f,t.Children=R,t.Component=y,t.Fragment=r,t.Profiler=o,t.PureComponent=b,t.StrictMode=i,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return j.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var a=g({},e.props),r=e.key;if(null!=t)for(i in void 0!==t.key&&(r=""+t.key),t)!S.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(a[i]=t[i]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var o=Array(i),l=0;l<i;l++)o[l]=arguments[l+2];a.children=o}return C(e.type,r,a)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var a,r={},i=null;if(null!=t)for(a in void 0!==t.key&&(i=""+t.key),t)S.call(t,a)&&"key"!==a&&"__self"!==a&&"__source"!==a&&(r[a]=t[a]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var l=Array(o),s=0;s<o;s++)l[s]=arguments[s+2];r.children=l}if(e&&e.defaultProps)for(a in o=e.defaultProps)void 0===r[a]&&(r[a]=o[a]);return C(e,i,r)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=j.T,n={};j.T=n;try{var a=e(),r=j.S;null!==r&&r(n,a),"object"===typeof a&&null!==a&&"function"===typeof a.then&&a.then(z,N)}catch(i){N(i)}finally{null!==t&&null!==n.types&&(t.types=n.types),j.T=t}},t.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},t.use=function(e){return j.H.use(e)},t.useActionState=function(e,t,n){return j.H.useActionState(e,t,n)},t.useCallback=function(e,t){return j.H.useCallback(e,t)},t.useContext=function(e){return j.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return j.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return j.H.useEffect(e,t)},t.useEffectEvent=function(e){return j.H.useEffectEvent(e)},t.useId=function(){return j.H.useId()},t.useImperativeHandle=function(e,t,n){return j.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return j.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return j.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return j.H.useMemo(e,t)},t.useOptimistic=function(e,t){return j.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return j.H.useReducer(e,t,n)},t.useRef=function(e){return j.H.useRef(e)},t.useState=function(e){return j.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return j.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return j.H.useTransition()},t.version="19.2.4"},43(e,t,n){e.exports=n(288)},579(e,t,n){e.exports=n(799)},896(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var a=n-1>>>1,r=e[a];if(!(0<i(r,t)))break e;e[a]=t,e[n]=r,n=a}}function a(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var a=0,r=e.length,o=r>>>1;a<o;){var l=2*(a+1)-1,s=e[l],c=l+1,u=e[c];if(0>i(s,n))c<r&&0>i(u,s)?(e[a]=u,e[c]=n,a=c):(e[a]=s,e[l]=n,a=l);else{if(!(c<r&&0>i(u,n)))break e;e[a]=u,e[c]=n,a=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],p=1,d=null,f=3,m=!1,h=!1,g=!1,w=!1,y="function"===typeof setTimeout?setTimeout:null,x="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function v(e){for(var t=a(u);null!==t;){if(null===t.callback)r(u);else{if(!(t.startTime<=e))break;r(u),t.sortIndex=t.expirationTime,n(c,t)}t=a(u)}}function k(e){if(g=!1,v(e),!h)if(null!==a(c))h=!0,j||(j=!0,z());else{var t=a(u);null!==t&&O(k,t.startTime-e)}}var z,j=!1,S=-1,C=5,E=-1;function P(){return!!w||!(t.unstable_now()-E<C)}function $(){if(w=!1,j){var e=t.unstable_now();E=e;var n=!0;try{e:{h=!1,g&&(g=!1,x(S),S=-1),m=!0;var i=f;try{t:{for(v(e),d=a(c);null!==d&&!(d.expirationTime>e&&P());){var o=d.callback;if("function"===typeof o){d.callback=null,f=d.priorityLevel;var l=o(d.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){d.callback=l,v(e),n=!0;break t}d===a(c)&&r(c),v(e)}else r(c);d=a(c)}if(null!==d)n=!0;else{var s=a(u);null!==s&&O(k,s.startTime-e),n=!1}}break e}finally{d=null,f=i,m=!1}n=void 0}}finally{n?z():j=!1}}}if("function"===typeof b)z=function(){b($)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,_=T.port2;T.port1.onmessage=$,z=function(){_.postMessage(null)}}else z=function(){y($,0)};function O(e,n){S=y(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_requestPaint=function(){w=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,r,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:p++,callback:r,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(u,e),null===a(c)&&e===a(u)&&(g?(x(S),S=-1):g=!0,O(k,i-o))):(e.sortIndex=l,n(c,e),h||m||(h=!0,j||(j=!0,z()))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},853(e,t,n){e.exports=n(896)},217(e,t,n){e.exports=n.p+"static/media/pexels-dimkidama-15115560.04167beb6bd16a6e9fd4.jpg"},410(e,t,n){e.exports=n.p+"static/media/pexels-firmbee-com-22729701-6963740.a9a8b980823767df4886.jpg"},430(e,t,n){e.exports=n.p+"static/media/pexels-magnetme-3917414-5839461.06d3415285cbf1cc0bf1.jpg"},682(e,t,n){e.exports=n.p+"static/media/pexels-rdne-7310202.0cfb9c3eef397dd77e13.jpg"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(a,r){if(1&r&&(a=this(a)),8&r)return a;if("object"===typeof a&&a){if(4&r&&a.__esModule)return a;if(16&r&&"function"===typeof a.then)return a}var i=Object.create(null);n.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&r&&a;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>o[e]=()=>a[e]);return o.default=()=>a,n.d(i,o),i}})(),n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/klara-queen/",n.nc=void 0;var a=n(43),r=n.t(a,2),i=n(391),o="popstate";function l(e){return"object"===typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function s(){return h(function(e,t){let n=t.state?.masked,{pathname:a,search:r,hash:i}=n||e.location;return d("",{pathname:a,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"===typeof t?t:f(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function p(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function d(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?m(t):t,state:n,key:t&&t.key||a||Math.random().toString(36).substring(2,10),unstable_mask:r}}function f(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),a&&"#"!==a&&(t+="#"===a.charAt(0)?a:"#"+a),t}function m(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function h(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:r=document.defaultView,v5Compat:i=!1}=a,s=r.history,c="POP",u=null,f=m();function m(){return(s.state||{idx:null}).idx}function h(){c="POP";let e=m(),t=null==e?null:e-f;f=e,u&&u({action:c,location:y.location,delta:t})}function w(e){return g(e)}null==f&&(f=0,s.replaceState({...s.state,idx:f},""));let y={get action(){return c},get location(){return e(r,s)},listen(e){if(u)throw new Error("A history only accepts one active listener");return r.addEventListener(o,h),u=e,()=>{r.removeEventListener(o,h),u=null}},createHref:e=>t(r,e),createURL:w,encodeLocation(e){let t=w(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){c="PUSH";let a=l(e)?e:d(y.location,e,t);n&&n(a,e),f=m()+1;let o=p(a,f),h=y.createHref(a.unstable_mask||a);try{s.pushState(o,"",h)}catch(g){if(g instanceof DOMException&&"DataCloneError"===g.name)throw g;r.location.assign(h)}i&&u&&u({action:c,location:y.location,delta:1})},replace:function(e,t){c="REPLACE";let a=l(e)?e:d(y.location,e,t);n&&n(a,e),f=m();let r=p(a,f),o=y.createHref(a.unstable_mask||a);s.replaceState(r,"",o),i&&u&&u({action:c,location:y.location,delta:0})},go:e=>s.go(e)};return y}function g(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),c(n,"No window.location.(origin|href) available to create URL");let a="string"===typeof e?e:f(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}new WeakMap;function w(e,t){return y(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function y(e,t,n,a){let r=N(("string"===typeof t?m(t):t).pathname||"/",n);if(null==r)return null;let i=x(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(i);let o=null;for(let l=0;null==o&&l<i.length;++l){let e=O(r);o=$(i[l],e,a)}return o}function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=function(e,i){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,l=arguments.length>3?arguments[3]:void 0,s={relativePath:void 0===l?e.path||"":l,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};if(s.relativePath.startsWith("/")){if(!s.relativePath.startsWith(a)&&o)return;c(s.relativePath.startsWith(a),`Absolute route path "${s.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(a.length)}let u=F([a,s.relativePath]),p=n.concat(s);e.children&&e.children.length>0&&(c(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),x(e.children,t,p,u,o)),(null!=e.path||e.index)&&t.push({path:u,score:P(u,e.index),routesMeta:p})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of b(e.path))i(e,t,!0,n);else i(e,t)}),t}function b(e){let t=e.split("/");if(0===t.length)return[];let[n,...a]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===a.length)return r?[i,""]:[i];let o=b(a.join("/")),l=[];return l.push(...o.map(e=>""===e?i:[i,e].join("/"))),r&&l.push(...o),l.map(t=>e.startsWith("/")&&""===t?"/":t)}var v=/^:[\w-]+$/,k=3,z=2,j=1,S=10,C=-2,E=e=>"*"===e;function P(e,t){let n=e.split("/"),a=n.length;return n.some(E)&&(a+=C),t&&(a+=z),n.filter(e=>!E(e)).reduce((e,t)=>e+(v.test(t)?k:""===t?j:S),a)}function $(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:a}=e,r={},i="/",o=[];for(let l=0;l<a.length;++l){let e=a[l],s=l===a.length-1,c="/"===i?t:t.slice(i.length)||"/",u=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),p=e.route;if(!u&&s&&n&&!a[a.length-1].route.index&&(u=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(r,u.params),o.push({params:r,pathname:F([i,u.pathname]),pathnameBase:U(F([i,u.pathnameBase])),route:p}),"/"!==u.pathnameBase&&(i=F([i,u.pathnameBase]))}return o}function T(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=_(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],o=i.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:a.reduce((e,t,n)=>{let{paramName:a,isOptional:r}=t;if("*"===a){let e=l[n]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[a]=r&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:i,pathnameBase:o,pattern:e}}function _(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];u("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,r,i)=>{if(a.push({paramName:t,isOptional:null!=n}),n){let t=i.charAt(r+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":""!==e&&"/"!==e&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function O(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return u(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function N(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&"/"!==a?null:e.slice(n)||"/"}var R=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function M(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function D(e,t,n,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function L(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function A(e){let t=L(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function I(e,t,n){let a,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?a=m(e):(a={...e},c(!a.pathname||!a.pathname.includes("?"),D("?","pathname","search",a)),c(!a.pathname||!a.pathname.includes("#"),D("#","pathname","hash",a)),c(!a.search||!a.search.includes("#"),D("#","search","hash",a)));let i,o=""===e||""===a.pathname,l=o?"/":a.pathname;if(null==l)i=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let s=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:a,search:r="",hash:i=""}="string"===typeof e?m(e):e;return a?(a=a.replace(/\/\/+/g,"/"),t=a.startsWith("/")?M(a.substring(1),"/"):M(a,n)):t=n,{pathname:t,search:W(r),hash:H(i)}}(a,i),u=l&&"/"!==l&&l.endsWith("/"),p=(o||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!u&&!p||(s.pathname+="/"),s}var F=e=>e.join("/").replace(/\/\/+/g,"/"),U=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),W=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",H=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var B=class{constructor(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.status=e,this.statusText=t||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function K(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}function Q(e){return e.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var G="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function V(e,t){let n=e;if("string"!==typeof n||!R.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let a=n,r=!1;if(G)try{let e=new URL(window.location.href),a=n.startsWith("//")?new URL(e.protocol+n):new URL(n),i=N(a.pathname,t);a.origin===e.origin&&null!=i?n=i+a.search+a.hash:r=!0}catch(i){u(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:r,to:n}}Symbol("Uninstrumented");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Y=["POST","PUT","PATCH","DELETE"],q=(new Set(Y),["GET",...Y]);new Set(q),Symbol("ResetLoaderData");var X=a.createContext(null);X.displayName="DataRouter";var Z=a.createContext(null);Z.displayName="DataRouterState";var J=a.createContext(!1);function ee(){return a.useContext(J)}var te=a.createContext({isTransitioning:!1});te.displayName="ViewTransition";var ne=a.createContext(new Map);ne.displayName="Fetchers";var ae=a.createContext(null);ae.displayName="Await";var re=a.createContext(null);re.displayName="Navigation";var ie=a.createContext(null);ie.displayName="Location";var oe=a.createContext({outlet:null,matches:[],isDataRoute:!1});oe.displayName="Route";var le=a.createContext(null);le.displayName="RouteError";var se="REACT_ROUTER_ERROR";function ce(){return null!=a.useContext(ie)}function ue(){return c(ce(),"useLocation() may be used only in the context of a <Router> component."),a.useContext(ie).location}var pe="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function de(e){a.useContext(re).static||a.useLayoutEffect(e)}function fe(){let{isDataRoute:e}=a.useContext(oe);return e?function(){let{router:e}=Se("useNavigate"),t=Ee("useNavigate"),n=a.useRef(!1);de(()=>{n.current=!0});let r=a.useCallback(async function(a){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(n.current,pe),n.current&&("number"===typeof a?await e.navigate(a):await e.navigate(a,{fromRouteId:t,...r}))},[e,t]);return r}():function(){c(ce(),"useNavigate() may be used only in the context of a <Router> component.");let e=a.useContext(X),{basename:t,navigator:n}=a.useContext(re),{matches:r}=a.useContext(oe),{pathname:i}=ue(),o=JSON.stringify(A(r)),l=a.useRef(!1);de(()=>{l.current=!0});let s=a.useCallback(function(a){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(u(l.current,pe),!l.current)return;if("number"===typeof a)return void n.go(a);let s=I(a,JSON.parse(o),i,"path"===r.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:F([t,s.pathname])),(r.replace?n.replace:n.push)(s,r.state,r)},[t,n,o,i,e]);return s}()}a.createContext(null);function me(){let{matches:e}=a.useContext(oe),t=e[e.length-1];return t?t.params:{}}function he(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:n}=a.useContext(oe),{pathname:r}=ue(),i=JSON.stringify(A(n));return a.useMemo(()=>I(e,JSON.parse(i),r,"path"===t),[e,i,r,t])}function ge(e,t,n){c(ce(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=a.useContext(re),{matches:i}=a.useContext(oe),o=i[i.length-1],l=o?o.params:{},s=o?o.pathname:"/",p=o?o.pathnameBase:"/",d=o&&o.route;{let e=d&&d.path||"";Te(s,!d||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let f,h=ue();if(t){let e="string"===typeof t?m(t):t;c("/"===p||e.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${e.pathname}" was given in the \`location\` prop.`),f=e}else f=h;let g=f.pathname||"/",y=g;if("/"!==p){let e=p.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=w(e,{pathname:y});u(d||null!=x,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),u(null==x||void 0!==x[x.length-1].route.element||void 0!==x[x.length-1].route.Component||void 0!==x[x.length-1].route.lazy,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=ze(x&&x.map(e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:F([p,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?p:F([p,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),i,n);return t&&b?a.createElement(ie.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...f},navigationType:"POP"}},b):b}function we(){let e=Pe(),t=K(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=a.createElement(a.Fragment,null,a.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),a.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",a.createElement("code",{style:o},"ErrorBoundary")," or"," ",a.createElement("code",{style:o},"errorElement")," prop on your route.")),a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),n?a.createElement("pre",{style:i},n):null,l)}var ye=a.createElement(we,null),xe=class extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&"object"===typeof e&&e&&"digest"in e&&"string"===typeof e.digest){const t=function(e){if(e.startsWith(`${se}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText)return new B(t.status,t.statusText,t.data)}catch{}}(e.digest);t&&(e=t)}let t=void 0!==e?a.createElement(oe.Provider,{value:this.props.routeContext},a.createElement(le.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?a.createElement(ve,{error:e},t):t}};xe.contextType=J;var be=new WeakMap;function ve(e){let{children:t,error:n}=e,{basename:r}=a.useContext(re);if("object"===typeof n&&n&&"digest"in n&&"string"===typeof n.digest){let e=function(e){if(e.startsWith(`${se}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText&&"string"===typeof t.location&&"boolean"===typeof t.reloadDocument&&"boolean"===typeof t.replace)return t}catch{}}(n.digest);if(e){let t=be.get(n);if(t)throw t;let i=V(e.location,r);if(G&&!be.get(n)){if(!i.isExternal&&!e.reloadDocument){const t=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw be.set(n,t),t}window.location.href=i.absoluteURL||i.to}return a.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i.absoluteURL||i.to}`})}}return t}function ke(e){let{routeContext:t,match:n,children:r}=e,i=a.useContext(X);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),a.createElement(oe.Provider,{value:t},r)}function ze(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=n?.state;if(null==e){if(!r)return null;if(r.errors)e=r.matches;else{if(0!==t.length||r.initialized||!(r.matches.length>0))return null;e=r.matches}}let i=e,o=r?.errors;if(null!=o){let e=i.findIndex(e=>e.route.id&&void 0!==o?.[e.route.id]);c(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let l=!1,s=-1;if(n&&r){l=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,o=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||void 0===a[t.route.id]);if(t.route.lazy||o){n.isStatic&&(l=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let u=n?.onError,p=r&&u?(e,t)=>{u(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Q(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,m=null;r&&(u=o&&n.route.id?o[n.route.id]:void 0,f=n.route.errorElement||ye,l&&(s<0&&0===c?(Te("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,m=null):s===c&&(d=!0,m=n.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,c+1)),g=()=>{let t;return t=u?f:d?m:n.route.Component?a.createElement(n.route.Component,null):n.route.element?n.route.element:e,a.createElement(ke,{match:n,routeContext:{outlet:e,matches:h,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===c)?a.createElement(xe,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:p}):g()},null)}function je(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Se(e){let t=a.useContext(X);return c(t,je(e)),t}function Ce(e){let t=a.useContext(Z);return c(t,je(e)),t}function Ee(e){let t=function(e){let t=a.useContext(oe);return c(t,je(e)),t}(e),n=t.matches[t.matches.length-1];return c(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Pe(){let e=a.useContext(le),t=Ce("useRouteError"),n=Ee("useRouteError");return void 0!==e?e:t.errors?.[n]}var $e={};function Te(e,t,n){t||$e[e]||($e[e]=!0,u(!1,n))}var _e={};function Oe(e,t){e||_e[t]||(_e[t]=!0,console.warn(t))}r.useOptimistic;a.memo(Ne);function Ne(e){let{routes:t,future:n,state:a,isStatic:r,onError:i}=e;return ge(t,void 0,{state:a,isStatic:r,onError:i,future:n})}function Re(e){c(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Me(e){let{basename:t="/",children:n=null,location:r,navigationType:i="POP",navigator:o,static:l=!1,unstable_useTransitions:s}=e;c(!ce(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=t.replace(/^\/*/,"/"),d=a.useMemo(()=>({basename:p,navigator:o,static:l,unstable_useTransitions:s,future:{}}),[p,o,l,s]);"string"===typeof r&&(r=m(r));let{pathname:f="/",search:h="",hash:g="",state:w=null,key:y="default",unstable_mask:x}=r,b=a.useMemo(()=>{let e=N(f,p);return null==e?null:{location:{pathname:e,search:h,hash:g,state:w,key:y,unstable_mask:x},navigationType:i}},[p,f,h,g,w,y,i,x]);return u(null!=b,`<Router basename="${p}"> is not able to match the URL "${f}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),null==b?null:a.createElement(re.Provider,{value:d},a.createElement(ie.Provider,{children:n,value:b}))}function De(e){let{children:t,location:n}=e;return ge(Le(t),n)}a.Component;function Le(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return a.Children.forEach(e,(e,r)=>{if(!a.isValidElement(e))return;let i=[...t,r];if(e.type===a.Fragment)return void n.push.apply(n,Le(e.props.children,i));c(e.type===Re,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),c(!e.props.index||!e.props.children,"An index route cannot have child routes.");let o={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=Le(e.props.children,i)),n.push(o)}),n}var Ae="get",Ie="application/x-www-form-urlencoded";function Fe(e){return"undefined"!==typeof HTMLElement&&e instanceof HTMLElement}var Ue=null;var We=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function He(e){return null==e||We.has(e)?e:(u(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ie}"`),null)}function Be(e,t){let n,a,r,i,o;if(Fe(l=e)&&"form"===l.tagName.toLowerCase()){let o=e.getAttribute("action");a=o?N(o,t):null,n=e.getAttribute("method")||Ae,r=He(e.getAttribute("enctype"))||Ie,i=new FormData(e)}else if(function(e){return Fe(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Fe(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||o.getAttribute("action");if(a=l?N(l,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||Ae,r=He(e.getAttribute("formenctype"))||He(o.getAttribute("enctype"))||Ie,i=new FormData(o,e),!function(){if(null===Ue)try{new FormData(document.createElement("form"),0),Ue=!1}catch(e){Ue=!0}return Ue}()){let{name:t,type:n,value:a}=e;if("image"===n){let e=t?`${t}.`:"";i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,a)}}else{if(Fe(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ae,a=null,r=Ie,o=e}var l;return i&&"text/plain"===r&&(o=i,i=void 0),{action:a,method:n.toLowerCase(),encType:r,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function Ke(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function Qe(e,t,n,a){let r="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return n?r.pathname.endsWith("/")?r.pathname=`${r.pathname}_.${a}`:r.pathname=`${r.pathname}.${a}`:"/"===r.pathname?r.pathname=`_root.${a}`:t&&"/"===N(r.pathname,t)?r.pathname=`${t.replace(/\/$/,"")}/_root.${a}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${a}`,r}async function Ge(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ve(e){return null!=e&&"string"===typeof e.page}function Ye(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function qe(e,t,n,a,r,i){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===i?t.filter((e,t)=>o(e,t)||l(e,t)):"data"===i?t.filter((t,i)=>{let s=a.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(o(t,i)||l(t,i))return!0;if(t.route.shouldRevalidate){let a=t.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof a)return a}return!0}):[]}function Xe(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a=e.map(e=>{let a=t.routes[e.route.id];if(!a)return[];let r=[a.module];return a.clientActionModule&&(r=r.concat(a.clientActionModule)),a.clientLoaderModule&&(r=r.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(r=r.concat(a.hydrateFallbackModule)),a.imports&&(r=r.concat(a.imports)),r}).flat(1),[...new Set(a)];var a}function Ze(e,t){let n=new Set,a=new Set(t);return e.reduce((e,r)=>{if(t&&!Ve(r)&&"script"===r.as&&r.href&&a.has(r.href))return e;let i=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let a of n)t[a]=e[a];return t}(r));return n.has(i)||(n.add(i),e.push({key:i,link:r})),e},[])}function Je(e,t){return"lazy"===e.mode&&!0===t}function et(){let e=a.useContext(X);return Ke(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function tt(){let e=a.useContext(Z);return Ke(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var nt=a.createContext(void 0);function at(){let e=a.useContext(nt);return Ke(e,"You must render this element inside a <HydratedRouter> element"),e}function rt(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function it(e,t,n){if(n&&!ct)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}nt.displayName="FrameworkContext";function ot(e){let{page:t,...n}=e,{router:r}=et(),i=a.useMemo(()=>w(r.routes,t,r.basename),[r.routes,t,r.basename]);return i?a.createElement(st,{page:t,matches:i,...n}):null}function lt(e){let{manifest:t,routeModules:n}=at(),[r,i]=a.useState([]);return a.useEffect(()=>{let a=!1;return async function(e,t,n){let a=await Promise.all(e.map(async e=>{let a=t.routes[e.route.id];if(a){let e=await Ge(a,n);return e.links?e.links():[]}return[]}));return Ze(a.flat(1).filter(Ye).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{a||i(e)}),()=>{a=!0}},[e,t,n]),r}function st(e){let{page:t,matches:n,...r}=e,i=ue(),{future:o,manifest:l,routeModules:s}=at(),{basename:c}=et(),{loaderData:u,matches:p}=tt(),d=a.useMemo(()=>qe(t,n,p,l,i,"data"),[t,n,p,l,i]),f=a.useMemo(()=>qe(t,n,p,l,i,"assets"),[t,n,p,l,i]),m=a.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let e=new Set,a=!1;if(n.forEach(t=>{let n=l.routes[t.route.id];n&&n.hasLoader&&(!d.some(e=>e.route.id===t.route.id)&&t.route.id in u&&s[t.route.id]?.shouldRevalidate||n.hasClientLoader?a=!0:e.add(t.route.id))}),0===e.size)return[];let r=Qe(t,c,o.unstable_trailingSlashAwareDataRequests,"data");return a&&e.size>0&&r.searchParams.set("_routes",n.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[r.pathname+r.search]},[c,o.unstable_trailingSlashAwareDataRequests,u,i,l,d,n,t,s]),h=a.useMemo(()=>Xe(f,l),[f,l]),g=lt(f);return a.createElement(a.Fragment,null,m.map(e=>a.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...r})),h.map(e=>a.createElement("link",{key:e,rel:"modulepreload",href:e,...r})),g.map(e=>{let{key:t,link:n}=e;return a.createElement("link",{key:t,nonce:r.nonce,...n,crossOrigin:n.crossOrigin??r.crossOrigin})}))}var ct=!1;function ut(e){let{manifest:t,serverHandoffString:n,isSpaMode:r,renderMeta:i,routeDiscovery:o,ssr:l}=at(),{router:s,static:c,staticContext:u}=et(),{matches:p}=tt(),d=ee(),f=Je(o,l);i&&(i.didRenderScripts=!0);let m=it(p,null,r);a.useEffect(()=>{ct=!0},[]);let h=a.useMemo(()=>{if(d)return null;let r=u?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",i=c?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${f?"":`import ${JSON.stringify(t.url)}`};\n${m.map((e,n)=>{let a=`route${n}`,r=t.routes[e.route.id];Ke(r,`Route ${e.route.id} not found in manifest`);let{clientActionModule:i,clientLoaderModule:o,clientMiddlewareModule:l,hydrateFallbackModule:s,module:c}=r,u=[...i?[{module:i,varName:`${a}_clientAction`}]:[],...o?[{module:o,varName:`${a}_clientLoader`}]:[],...l?[{module:l,varName:`${a}_clientMiddleware`}]:[],...s?[{module:s,varName:`${a}_HydrateFallback`}]:[],{module:c,varName:`${a}_main`}];return 1===u.length?`import * as ${a} from ${JSON.stringify(c)};`:[u.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${a} = {${u.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${f?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...a}=e,r=new Set(t.state.matches.map(e=>e.route.id)),i=t.state.location.pathname.split("/").filter(Boolean),o=["/"];for(i.pop();i.length>0;)o.push(`/${i.join("/")}`),i.pop();o.forEach(e=>{let n=w(t.routes,e,t.basename);n&&n.forEach(e=>r.add(e.route.id))});let l=[...r].reduce((e,t)=>Object.assign(e,{[t]:a.routes[t]}),{});return{...a,routes:l,sri:!!n||void 0}}(t,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${m.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return a.createElement(a.Fragment,null,a.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:r},type:void 0}),a.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:i},type:"module",async:!0}))},[]),g=ct||d?[]:(y=t.entry.imports.concat(Xe(m,t,{includeHydrateFallback:!0})),[...new Set(y)]);var y;let x="object"===typeof t.sri?t.sri:{};return Oe(!d,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),ct||d?null:a.createElement(a.Fragment,null,"object"===typeof t.sri?a.createElement("script",{...e,"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:x})}}):null,f?null:a.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:x[t.url],suppressHydrationWarning:!0}),a.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:x[t.entry.module],suppressHydrationWarning:!0}),g.map(t=>a.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:x[t],suppressHydrationWarning:!0})),h)}function pt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}a.Component;function dt(e){let{error:t,isOutsideRemixApp:n}=e;console.error(t);let r,i=a.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(K(t))return a.createElement(ft,{title:"Unhandled Thrown Response!"},a.createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),i);if(t instanceof Error)r=t;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);r=new Error(e)}return a.createElement(ft,{title:"Application Error!",isOutsideRemixApp:n},a.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),a.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},r.stack),i)}function ft(e){let{title:t,renderScripts:n,isOutsideRemixApp:r,children:i}=e,{routeModules:o}=at();return o.root?.Layout&&!r?i:a.createElement("html",{lang:"en"},a.createElement("head",null,a.createElement("meta",{charSet:"utf-8"}),a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),a.createElement("title",null,t)),a.createElement("body",null,a.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},i,n?a.createElement(ut,null):null)))}var mt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{mt&&(window.__reactRouterVersion="7.13.2")}catch(xd){}function ht(e){let{basename:t,children:n,unstable_useTransitions:r,window:i}=e,o=a.useRef();null==o.current&&(o.current=s({window:i,v5Compat:!0}));let l=o.current,[c,u]=a.useState({action:l.action,location:l.location}),p=a.useCallback(e=>{!1===r?u(e):a.startTransition(()=>u(e))},[r]);return a.useLayoutEffect(()=>l.listen(p),[l,p]),a.createElement(Me,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,unstable_useTransitions:r})}var gt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wt=a.forwardRef(function(e,t){let{onClick:n,discover:r="render",prefetch:i="none",relative:o,reloadDocument:l,replace:s,unstable_mask:u,state:p,target:d,to:m,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:w,...y}=e,{basename:x,navigator:b,unstable_useTransitions:v}=a.useContext(re),k="string"===typeof m&&gt.test(m),z=V(m,x);m=z.to;let j=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(ce(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=a.useContext(re),{hash:i,pathname:o,search:l}=he(e,{relative:t}),s=o;return"/"!==n&&(s="/"===o?n:F([n,o])),r.createHref({pathname:s,search:l,hash:i})}(m,{relative:o}),S=ue(),C=null;if(u){let e=I(u,[],S.unstable_mask?S.unstable_mask.pathname:"/",!0);"/"!==x&&(e.pathname="/"===e.pathname?x:F([x,e.pathname])),C=b.createHref(e)}let[E,P,$]=function(e,t){let n=a.useContext(nt),[r,i]=a.useState(!1),[o,l]=a.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:u,onMouseLeave:p,onTouchStart:d}=t,f=a.useRef(null);a.useEffect(()=>{if("render"===e&&l(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{l(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),a.useEffect(()=>{if(r){let e=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(e)}}},[r]);let m=()=>{i(!0)},h=()=>{i(!1),l(!1)};return n?"intent"!==e?[o,f,{}]:[o,f,{onFocus:rt(s,m),onBlur:rt(c,h),onMouseEnter:rt(u,m),onMouseLeave:rt(p,h),onTouchStart:rt(d,m)}]:[!1,f,{}]}(i,y),T=function(e){let{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:o,relative:l,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:u}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=fe(),d=ue(),m=he(e,{relative:l});return a.useCallback(h=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(h,t)){h.preventDefault();let t=void 0!==n?n:f(d)===f(m),g=()=>p(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:o,relative:l,viewTransition:s,unstable_defaultShouldRevalidate:c});u?a.startTransition(()=>g()):g()}},[d,p,m,n,r,i,t,e,o,l,s,c,u])}(m,{replace:s,unstable_mask:u,state:p,target:d,preventScrollReset:h,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:w,unstable_useTransitions:v});let _=!(z.isExternal||l),O=a.createElement("a",{...y,...$,href:(_?C:void 0)||z.absoluteURL||j,onClick:_?function(e){n&&n(e),e.defaultPrevented||T(e)}:n,ref:pt(t,P),target:d,"data-discover":k||"render"!==r?void 0:"true"});return E&&!k?a.createElement(a.Fragment,null,O,a.createElement(ot,{page:j})):O});wt.displayName="Link",a.forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:i="",end:o=!1,style:l,to:s,viewTransition:u,children:p,...d}=e,f=he(s,{relative:d.relative}),m=ue(),h=a.useContext(Z),{navigator:g,basename:w}=a.useContext(re),y=null!=h&&function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.useContext(te);c(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=bt("useViewTransitionState"),i=he(e,{relative:t});if(!n.isTransitioning)return!1;let o=N(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=N(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=T(i.pathname,l)||null!=T(i.pathname,o)}(f)&&!0===u,x=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,b=m.pathname,v=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;r||(b=b.toLowerCase(),v=v?v.toLowerCase():null,x=x.toLowerCase()),v&&w&&(v=N(v,w)||v);const k="/"!==x&&x.endsWith("/")?x.length-1:x.length;let z,j=b===x||!o&&b.startsWith(x)&&"/"===b.charAt(k),S=null!=v&&(v===x||!o&&v.startsWith(x)&&"/"===v.charAt(x.length)),C={isActive:j,isPending:S,isTransitioning:y},E=j?n:void 0;z="function"===typeof i?i(C):[i,j?"active":null,S?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let P="function"===typeof l?l(C):l;return a.createElement(wt,{...d,"aria-current":E,className:z,ref:t,style:P,to:s,viewTransition:u},"function"===typeof p?p(C):p)}).displayName="NavLink";var yt=a.forwardRef((e,t)=>{let{discover:n="render",fetcherKey:r,navigate:i,reloadDocument:o,replace:l,state:s,method:u=Ae,action:p,onSubmit:d,relative:m,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:w,...y}=e,{unstable_useTransitions:x}=a.useContext(re),b=zt(),v=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:n}=a.useContext(re),r=a.useContext(oe);c(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...he(e||".",{relative:t})},l=ue();if(null==e){o.search=l.search;let e=new URLSearchParams(o.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();o.search=n?`?${n}`:""}}e&&"."!==e||!i.route.index||(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(o.pathname="/"===o.pathname?n:F([n,o.pathname]));return f(o)}(p,{relative:m}),k="get"===u.toLowerCase()?"get":"post",z="string"===typeof p&&gt.test(p);return a.createElement("form",{ref:t,method:k,action:v,onSubmit:o?d:e=>{if(d&&d(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||u,o=()=>b(t||e.currentTarget,{fetcherKey:r,method:n,navigate:i,replace:l,state:s,relative:m,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:w});x&&!1!==i?a.startTransition(()=>o()):o()},...y,"data-discover":z||"render"!==n?void 0:"true"})});function xt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bt(e){let t=a.useContext(X);return c(t,xt(e)),t}yt.displayName="Form";var vt=0,kt=()=>`__${String(++vt)}__`;function zt(){let{router:e}=bt("useSubmit"),{basename:t}=a.useContext(re),n=Ee("useRouteId"),r=e.fetch,i=e.navigate;return a.useCallback(async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:o,method:l,encType:s,formData:c,body:u}=Be(e,t);if(!1===a.navigate){let e=a.fetcherKey||kt();await r(e,n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||l,formEncType:a.encType||s,flushSync:a.flushSync})}else await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||l,formEncType:a.encType||s,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}var jt=function(){return jt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},jt.apply(this,arguments)};Object.create;function St(e,t,n){if(n||2===arguments.length)for(var a,r=0,i=t.length;r<i;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Ct={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Et="-ms-",Pt="-moz-",$t="-webkit-",Tt="comm",_t="rule",Ot="decl",Nt="@keyframes",Rt=Math.abs,Mt=String.fromCharCode,Dt=Object.assign;function Lt(e){return e.trim()}function At(e,t){return(e=t.exec(e))?e[0]:e}function It(e,t,n){return e.replace(t,n)}function Ft(e,t,n){return e.indexOf(t,n)}function Ut(e,t){return 0|e.charCodeAt(t)}function Wt(e,t,n){return e.slice(t,n)}function Ht(e){return e.length}function Bt(e){return e.length}function Kt(e,t){return t.push(e),e}function Qt(e,t){return e.filter(function(e){return!At(e,t)})}var Gt=1,Vt=1,Yt=0,qt=0,Xt=0,Zt="";function Jt(e,t,n,a,r,i,o,l){return{value:e,root:t,parent:n,type:a,props:r,children:i,line:Gt,column:Vt,length:o,return:"",siblings:l}}function en(e,t){return Dt(Jt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function tn(e){for(;e.root;)e=en(e.root,{children:[e]});Kt(e,e.siblings)}function nn(){return Xt=qt>0?Ut(Zt,--qt):0,Vt--,10===Xt&&(Vt=1,Gt--),Xt}function an(){return Xt=qt<Yt?Ut(Zt,qt++):0,Vt++,10===Xt&&(Vt=1,Gt++),Xt}function rn(){return Ut(Zt,qt)}function on(){return qt}function ln(e,t){return Wt(Zt,e,t)}function sn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cn(e){return Gt=Vt=1,Yt=Ht(Zt=e),qt=0,[]}function un(e){return Zt="",e}function pn(e){return Lt(ln(qt-1,mn(91===e?e+2:40===e?e+1:e)))}function dn(e){for(;(Xt=rn())&&Xt<33;)an();return sn(e)>2||sn(Xt)>3?"":" "}function fn(e,t){for(;--t&&an()&&!(Xt<48||Xt>102||Xt>57&&Xt<65||Xt>70&&Xt<97););return ln(e,on()+(t<6&&32==rn()&&32==an()))}function mn(e){for(;an();)switch(Xt){case e:return qt;case 34:case 39:34!==e&&39!==e&&mn(Xt);break;case 40:41===e&&mn(e);break;case 92:an()}return qt}function hn(e,t){for(;an()&&e+Xt!==57&&(e+Xt!==84||47!==rn()););return"/*"+ln(t,qt-1)+"*"+Mt(47===e?e:an())}function gn(e){for(;!sn(rn());)an();return ln(e,qt)}function wn(e,t){for(var n="",a=0;a<e.length;a++)n+=t(e[a],a,e,t)||"";return n}function yn(e,t,n,a){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case Ot:return e.return=e.return||e.value;case Tt:return"";case Nt:return e.return=e.value+"{"+wn(e.children,a)+"}";case _t:if(!Ht(e.value=e.props.join(",")))return""}return Ht(n=wn(e.children,a))?e.return=e.value+"{"+n+"}":""}function xn(e,t,n){switch(function(e,t){return 45^Ut(e,0)?(((t<<2^Ut(e,0))<<2^Ut(e,1))<<2^Ut(e,2))<<2^Ut(e,3):0}(e,t)){case 5103:return $t+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return $t+e+e;case 4855:return $t+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Pt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $t+e+Pt+e+Et+e+e;case 5936:switch(Ut(e,t+11)){case 114:return $t+e+Et+It(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $t+e+Et+It(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $t+e+Et+It(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $t+e+Et+e+e;case 6165:return $t+e+Et+"flex-"+e+e;case 5187:return $t+e+It(e,/(\w+).+(:[^]+)/,$t+"box-$1$2"+Et+"flex-$1$2")+e;case 5443:return $t+e+Et+"flex-item-"+It(e,/flex-|-self/g,"")+(At(e,/flex-|baseline/)?"":Et+"grid-row-"+It(e,/flex-|-self/g,""))+e;case 4675:return $t+e+Et+"flex-line-pack"+It(e,/align-content|flex-|-self/g,"")+e;case 5548:return $t+e+Et+It(e,"shrink","negative")+e;case 5292:return $t+e+Et+It(e,"basis","preferred-size")+e;case 6060:return $t+"box-"+It(e,"-grow","")+$t+e+Et+It(e,"grow","positive")+e;case 4554:return $t+It(e,/([^-])(transform)/g,"$1"+$t+"$2")+e;case 6187:return It(It(It(e,/(zoom-|grab)/,$t+"$1"),/(image-set)/,$t+"$1"),e,"")+e;case 5495:case 3959:return It(e,/(image-set\([^]*)/,$t+"$1$`$1");case 4968:return It(It(e,/(.+:)(flex-)?(.*)/,$t+"box-pack:$3"+Et+"flex-pack:$3"),/space-between/,"justify")+$t+e+e;case 4200:if(!At(e,/flex-|baseline/))return Et+"grid-column-align"+Wt(e,t)+e;break;case 2592:case 3360:return Et+It(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,At(e.props,/grid-\w+-end/)})?~Ft(e+(n=n[t].value),"span",0)?e:Et+It(e,"-start","")+e+Et+"grid-row-span:"+(~Ft(n,"span",0)?At(n,/\d+/):+At(n,/\d+/)-+At(e,/\d+/))+";":Et+It(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return At(e.props,/grid-\w+-start/)})?e:Et+It(It(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return It(e,/(.+)-inline(.+)/,$t+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ht(e)-1-t>6)switch(Ut(e,t+1)){case 109:if(45!==Ut(e,t+4))break;case 102:return It(e,/(.+:)(.+)-([^]+)/,"$1"+$t+"$2-$3$1"+Pt+(108==Ut(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ft(e,"stretch",0)?xn(It(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return It(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,a,r,i,o,l){return Et+n+":"+a+l+(r?Et+n+"-span:"+(i?o:+o-+a)+l:"")+e});case 4949:if(121===Ut(e,t+6))return It(e,":",":"+$t)+e;break;case 6444:switch(Ut(e,45===Ut(e,14)?18:11)){case 120:return It(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$t+(45===Ut(e,14)?"inline-":"")+"box$3$1"+$t+"$2$3$1"+Et+"$2box$3")+e;case 100:return It(e,":",":"+Et)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return It(e,"scroll-","scroll-snap-")+e}return e}function bn(e,t,n,a){if(e.length>-1&&!e.return)switch(e.type){case Ot:return void(e.return=xn(e.value,e.length,n));case Nt:return wn([en(e,{value:It(e.value,"@","@"+$t)})],a);case _t:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(At(t,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tn(en(e,{props:[It(t,/:(read-\w+)/,":-moz-$1")]})),tn(en(e,{props:[t]})),Dt(e,{props:Qt(n,a)});break;case"::placeholder":tn(en(e,{props:[It(t,/:(plac\w+)/,":"+$t+"input-$1")]})),tn(en(e,{props:[It(t,/:(plac\w+)/,":-moz-$1")]})),tn(en(e,{props:[It(t,/:(plac\w+)/,Et+"input-$1")]})),tn(en(e,{props:[t]})),Dt(e,{props:Qt(n,a)})}return""})}}function vn(e){return un(kn("",null,null,null,[""],e=cn(e),0,[0],e))}function kn(e,t,n,a,r,i,o,l,s){for(var c=0,u=0,p=o,d=0,f=0,m=0,h=1,g=1,w=1,y=0,x="",b=r,v=i,k=a,z=x;g;)switch(m=y,y=an()){case 40:if(108!=m&&58==Ut(z,p-1)){-1!=Ft(z+=It(pn(y),"&","&\f"),"&\f",Rt(c?l[c-1]:0))&&(w=-1);break}case 34:case 39:case 91:z+=pn(y);break;case 9:case 10:case 13:case 32:z+=dn(m);break;case 92:z+=fn(on()-1,7);continue;case 47:switch(rn()){case 42:case 47:Kt(jn(hn(an(),on()),t,n,s),s),5!=sn(m||1)&&5!=sn(rn()||1)||!Ht(z)||" "===Wt(z,-1,void 0)||(z+=" ");break;default:z+="/"}break;case 123*h:l[c++]=Ht(z)*w;case 125*h:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==w&&(z=It(z,/\f/g,"")),f>0&&(Ht(z)-p||0===h&&47===m)&&Kt(f>32?Sn(z+";",a,n,p-1,s):Sn(It(z," ","")+";",a,n,p-2,s),s);break;case 59:z+=";";default:if(Kt(k=zn(z,t,n,c,u,r,l,x,b=[],v=[],p,i),i),123===y)if(0===u)kn(z,t,k,k,b,i,p,l,v);else{switch(d){case 99:if(110===Ut(z,3))break;case 108:if(97===Ut(z,2))break;default:u=0;case 100:case 109:case 115:}u?kn(e,k,k,a&&Kt(zn(e,k,k,0,0,r,l,x,r,b=[],p,v),v),r,v,p,l,a?b:v):kn(z,k,k,k,[""],v,0,l,v)}}c=u=f=0,h=w=1,x=z="",p=o;break;case 58:p=1+Ht(z),f=m;default:if(h<1)if(123==y)--h;else if(125==y&&0==h++&&125==nn())continue;switch(z+=Mt(y),y*h){case 38:w=u>0?1:(z+="\f",-1);break;case 44:l[c++]=(Ht(z)-1)*w,w=1;break;case 64:45===rn()&&(z+=pn(an())),d=rn(),u=p=Ht(x=z+=gn(on())),y++;break;case 45:45===m&&2==Ht(z)&&(h=0)}}return i}function zn(e,t,n,a,r,i,o,l,s,c,u,p){for(var d=r-1,f=0===r?i:[""],m=Bt(f),h=0,g=0,w=0;h<a;++h)for(var y=0,x=Wt(e,d+1,d=Rt(g=o[h])),b=e;y<m;++y)(b=Lt(g>0?f[y]+" "+x:It(x,/&\f/g,f[y])))&&(s[w++]=b);return Jt(e,t,n,0===r?_t:l,s,c,u,p)}function jn(e,t,n,a){return Jt(e,t,n,Tt,Mt(Xt),Wt(e,2,-2),0,a)}function Sn(e,t,n,a,r){return Jt(e,t,n,Ot,Wt(e,0,a),Wt(e,a+1,-1),a,r)}var Cn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",En="active",Pn="data-styled-version",$n="6.3.12",Tn="/*!sc*/\n",_n="undefined"!=typeof window&&"undefined"!=typeof document,On=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Nn={};function Rn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Mn=new Map,Dn=new Map,Ln=1,An=function(e){if(Mn.has(e))return Mn.get(e);for(;Dn.has(Ln);)Ln++;var t=Ln++;return Mn.set(e,t),Dn.set(t,e),t},In=function(e,t){Ln=t+1,Mn.set(e,t),Dn.set(t,e)},Fn=(new Set,Object.freeze([])),Un=Object.freeze({});function Wn(e,t,n){return void 0===n&&(n=Un),e.theme!==n.theme&&e.theme||t||n.theme}var Hn=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Bn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kn=/(^-|-$)/g;function Qn(e){return e.replace(Bn,"-").replace(Kn,"")}var Gn=/(a)(d)/gi,Vn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Yn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Vn(t%52)+n;return(Vn(t%52)+n).replace(Gn,"$1-$2")}var qn,Xn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Zn=function(e){return Xn(5381,e)};function Jn(e){return Yn(Zn(e)>>>0)}function ea(e){return e.displayName||e.name||"Component"}function ta(e){return"string"==typeof e&&!0}var na="function"==typeof Symbol&&Symbol.for,aa=na?Symbol.for("react.memo"):60115,ra=na?Symbol.for("react.forward_ref"):60112,ia={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},oa={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},la={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sa=((qn={})[ra]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qn[aa]=la,qn);function ca(e){return("type"in(t=e)&&t.type.$$typeof)===aa?la:"$$typeof"in e?sa[e.$$typeof]:ia;var t}var ua=Object.defineProperty,pa=Object.getOwnPropertyNames,da=Object.getOwnPropertySymbols,fa=Object.getOwnPropertyDescriptor,ma=Object.getPrototypeOf,ha=Object.prototype;function ga(e,t,n){if("string"!=typeof t){if(ha){var a=ma(t);a&&a!==ha&&ga(e,a,n)}var r=pa(t);da&&(r=r.concat(da(t)));for(var i=ca(e),o=ca(t),l=0;l<r.length;++l){var s=r[l];if(!(s in oa||n&&n[s]||o&&s in o||i&&s in i)){var c=fa(t,s);try{ua(e,s,c)}catch(e){}}}}return e}function wa(e){return"function"==typeof e}function ya(e){return"object"==typeof e&&"styledComponentId"in e}function xa(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ba(e,t){return e.join(t||"")}function va(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ka(e,t,n){if(void 0===n&&(n=!1),!n&&!va(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)e[a]=ka(e[a],t[a]);else if(va(t))for(var a in t)e[a]=ka(e[a],t[a]);return e}function za(e,t){Object.defineProperty(e,"toString",{value:t})}var ja=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,a=n.length,r=a;e>=r;)if((r<<=1)<0)throw Rn(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var i=a;i<r;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=0,s=(i=0,t.length);i<s;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++,l++);l>0&&this._cGroup>e&&(this._cIndex+=l)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),a=n+t;this.groupSizes[e]=0;for(var r=n;r<a;r++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],a=this.indexOfGroup(e),r=a+n,i=a;i<r;i++)t+=this.tag.getRule(i)+Tn;return t},e}(),Sa="style[".concat(Cn,"][").concat(Pn,'="').concat($n,'"]'),Ca=new RegExp("^".concat(Cn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ea=function(e){return"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},Pa=function(e){if(!e)return document;if(Ea(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Ea(t))return t}return document},$a=function(e,t,n){for(var a,r=n.split(","),i=0,o=r.length;i<o;i++)(a=r[i])&&e.registerName(t,a)},Ta=function(e,t){for(var n,a=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Tn),r=[],i=0,o=a.length;i<o;i++){var l=a[i].trim();if(l){var s=l.match(Ca);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(In(u,c),$a(e,u,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(l)}}},_a=function(e){for(var t=Pa(e.options.target).querySelectorAll(Sa),n=0,a=t.length;n<a;n++){var r=t[n];r&&r.getAttribute(Cn)!==En&&(Ta(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function Oa(){return n.nc}var Na=function(e){var t=document.head,n=e||t,a=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Cn,"]")));return t[t.length-1]}(n),i=void 0!==r?r.nextSibling:null;a.setAttribute(Cn,En),a.setAttribute(Pn,$n);var o=Oa();return o&&a.setAttribute("nonce",o),n.insertBefore(a,i),a},Ra=function(){function e(e){this.element=Na(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets,a=0,r=n.length;a<r;a++){var i=n[a];if(i.ownerNode===e)return i}throw Rn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Ma=function(){function e(e){this.element=Na(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Da=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),La=_n,Aa={isServer:!_n,useCSSOMInjection:!On},Ia=function(){function e(e,t,n){void 0===e&&(e=Un),void 0===t&&(t={});var a=this;this.options=jt(jt({},Aa),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&_n&&La&&(La=!1,_a(this)),za(this,function(){return function(e){for(var t=e.getTag(),n=t.length,a="",r=function(n){var r=function(e){return Dn.get(e)}(n);if(void 0===r)return"continue";var i=e.names.get(r);if(void 0===i||!i.size)return"continue";var o=t.getGroup(n);if(0===o.length)return"continue";var l=Cn+".g"+n+'[id="'+r+'"]',s="";i.forEach(function(e){e.length>0&&(s+=e+",")}),a+=o+l+'{content:"'+s+'"}'+Tn},i=0;i<n;i++)r(i);return a}(a)})}return e.registerId=function(e){return An(e)},e.prototype.rehydrate=function(){!this.server&&_n&&_a(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var a=new e(jt(jt({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&_n&&t.target!==this.options.target&&Pa(this.options.target)!==Pa(t.target)&&_a(a),a},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Da(n):t?new Ra(n):new Ma(n)}(this.options),new ja(e)));var e},e.prototype.hasNameForId=function(e,t){var n,a;return null!==(a=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==a&&a},e.prototype.registerName=function(e,t){An(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(An(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(An(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}();function Fa(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in Ct||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Ua=function(e){return e>="A"&&e<="Z"};function Wa(e){for(var t="",n=0;n<e.length;n++){var a=e[n];if(1===n&&"-"===a&&"-"===e[0])return e;Ua(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var Ha=Symbol.for("sc-keyframes");var Ba=function(e){return null==e||!1===e||""===e},Ka=function(e){var t=[];for(var n in e){var a=e[n];e.hasOwnProperty(n)&&!Ba(a)&&(Array.isArray(a)&&a.isCss||wa(a)?t.push("".concat(Wa(n),":"),a,";"):va(a)?t.push.apply(t,St(St(["".concat(n," {")],Ka(a),!1),["}"],!1)):t.push("".concat(Wa(n),": ").concat(Fa(n,a),";")))}return t};function Qa(e,t,n,a,r){if(void 0===r&&(r=[]),"string"==typeof e)return e&&r.push(e),r;if(Ba(e))return r;if(ya(e))return r.push(".".concat(e.styledComponentId)),r;var i;if(wa(e))return!wa(i=e)||i.prototype&&i.prototype.isReactComponent||!t?(r.push(e),r):Qa(e(t),t,n,a,r);if(function(e){return"object"==typeof e&&null!==e&&Ha in e}(e))return n?(e.inject(n,a),r.push(e.getName(a))):r.push(e),r;if(va(e)){for(var o=Ka(e),l=0;l<o.length;l++)r.push(o[l]);return r}if(!Array.isArray(e))return r.push(e.toString()),r;for(l=0;l<e.length;l++)Qa(e[l],t,n,a,r);return r}function Ga(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(wa(n)&&!ya(n))return!1}return!0}var Va=Zn($n),Ya=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ga(e),this.componentId=t,this.baseHash=Xn(Va,t),this.baseStyle=n,Ia.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=xa(a,this.staticRulesId);else{var r=ba(Qa(this.rules,e,t,n)),i=Yn(Xn(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(r,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}a=xa(a,i),this.staticRulesId=i}else{for(var l=Xn(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var p=ba(Qa(u,e,t,n));l=Xn(Xn(l,String(c)),p),s+=p}}if(s){var d=Yn(l>>>0);if(!t.hasNameForId(this.componentId,d)){var f=n(s,".".concat(d),void 0,this.componentId);t.insertRules(this.componentId,d,f)}a=xa(a,d)}}return{className:a,css:"undefined"==typeof window?t.getTag().getGroup(An(this.componentId)):""}},e}(),qa=/&/g,Xa=47,Za=42;function Ja(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,a=0,r=!1,i=0;i<t;i++){var o=e.charCodeAt(i);if(0!==a||r||o!==Xa||e.charCodeAt(i+1)!==Za)if(r)o===Za&&e.charCodeAt(i+1)===Xa&&(r=!1,i++);else if(34!==o&&39!==o||0!==i&&92===e.charCodeAt(i-1)){if(0===a)if(123===o)n++;else if(125===o&&--n<0)return!0}else 0===a?a=o:a===o&&(a=0);else r=!0,i++}return 0!==n||0!==a}function er(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=er(e.children,t)),e})}function tr(e){var t,n,a,r=void 0===e?Un:e,i=r.options,o=void 0===i?Un:i,l=r.plugins,s=void 0===l?Fn:l,c=function(e,a,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push(function(e){e.type===_t&&e.value.includes("&")&&(a||(a=new RegExp("\\".concat(n,"\\b"),"g")),e.props[0]=e.props[0].replace(qa,n).replace(a,c))}),o.prefix&&u.push(bn),u.push(yn);var p,d=[],f=function(e){var t=Bt(e);return function(n,a,r,i){for(var o="",l=0;l<t;l++)o+=e[l](n,a,r,i)||"";return o}}(u.concat((p=function(e){return d.push(e)},function(e){e.root||(e=e.return)&&p(e)}))),m=function(e,r,i,l){void 0===r&&(r=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=r,a=void 0;var s=function(e){if(!Ja(e))return e;for(var t=e.length,n="",a=0,r=0,i=0,o=!1,l=0;l<t;l++){var s=e.charCodeAt(l);if(0!==i||o||s!==Xa||e.charCodeAt(l+1)!==Za)if(o)s===Za&&e.charCodeAt(l+1)===Xa&&(o=!1,l++);else if(34!==s&&39!==s||0!==l&&92===e.charCodeAt(l-1)){if(0===i)if(123===s)r++;else if(125===s){if(--r<0){for(var c=l+1;c<t;){var u=e.charCodeAt(c);if(59===u||10===u)break;c++}c<t&&59===e.charCodeAt(c)&&c++,r=0,l=c-1,a=c;continue}0===r&&(n+=e.substring(a,l+1),a=l+1)}else 59===s&&0===r&&(n+=e.substring(a,l+1),a=l+1)}else 0===i?i=s:i===s&&(i=0);else o=!0,l++}if(a<t){var p=e.substring(a);Ja(p)||(n+=p)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],a=0,r=0,i=0,o=0;r<t;){var l=e.charCodeAt(r);if(34!==l&&39!==l||0!==r&&92===e.charCodeAt(r-1))if(0===i)if(l===Xa&&r+1<t&&e.charCodeAt(r+1)===Za){for(r+=2;r+1<t&&(e.charCodeAt(r)!==Za||e.charCodeAt(r+1)!==Xa);)r++;r+=2}else if(40===l&&r>=3&&108==(32|e.charCodeAt(r-1))&&114==(32|e.charCodeAt(r-2))&&117==(32|e.charCodeAt(r-3)))o=1,r++;else if(o>0)41===l?o--:40===l&&o++,r++;else if(l===Za&&r+1<t&&e.charCodeAt(r+1)===Xa)r>a&&n.push(e.substring(a,r)),a=r+=2;else if(l===Xa&&r+1<t&&e.charCodeAt(r+1)===Xa){for(r>a&&n.push(e.substring(a,r));r<t&&10!==e.charCodeAt(r);)r++;a=r}else r++;else r++;else 0===i?i=l:i===l&&(i=0),r++}return 0===a?e:(a<t&&n.push(e.substring(a)),n.join(""))}(e)),c=vn(i||r?"".concat(i," ").concat(r," { ").concat(s," }"):s);return o.namespace&&(c=er(c,o.namespace)),d=[],wn(c,f),d};return m.hash=s.length?s.reduce(function(e,t){return t.name||Rn(15),Xn(e,t.name)},5381).toString():"",m}var nr=new Ia,ar=tr(),rr=a.createContext({shouldForwardProp:void 0,styleSheet:nr,stylis:ar}),ir=(rr.Consumer,a.createContext(void 0));function or(){return a.useContext(rr)}function lr(e){if(!a.useMemo)return e.children;var t=or().styleSheet,n=a.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),r=a.useMemo(function(){return tr({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),i=a.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:r}},[e.shouldForwardProp,n,r]);return a.createElement(rr.Provider,{value:i},a.createElement(ir.Provider,{value:r},e.children))}var sr=a.createContext(void 0);sr.Consumer;var cr={};new Set;function ur(e,t,n){var r=ya(e),i=e,o=!ta(e),l=t.attrs,s=void 0===l?Fn:l,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Qn(e);cr[n]=(cr[n]||0)+1;var a="".concat(n,"-").concat(Jn($n+n+cr[n]));return t?"".concat(t,"-").concat(a):a}(t.displayName,t.parentComponentId):c,p=t.displayName,d=void 0===p?function(e){return ta(e)?"styled.".concat(e):"Styled(".concat(ea(e),")")}(e):p,f=t.displayName&&t.componentId?"".concat(Qn(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,h=t.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;h=function(e,t){return g(e,t)&&w(e,t)}}else h=g}var y=new Ya(n,f,r?i.componentStyle:void 0);function x(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,o=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=a.useContext(sr),p=or(),d=e.shouldForwardProp||p.shouldForwardProp,f=Wn(t,u,o)||Un,m=function(e,t,n){for(var a,r=jt(jt({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var o=wa(a=e[i])?a(r):a;for(var l in o)"className"===l?r.className=xa(r.className,o[l]):"style"===l?r.style=jt(jt({},r.style),o[l]):l in t&&void 0===t[l]||(r[l]=o[l])}return"className"in t&&"string"==typeof t.className&&(r.className=xa(r.className,t.className)),r}(r,t,f),h=m.as||c,g={};for(var w in m)void 0===m[w]||"$"===w[0]||"as"===w||"theme"===w&&m.theme===f||("forwardedAs"===w?g.as=m.forwardedAs:d&&!d(w,h)||(g[w]=m[w]));var y=function(e,t){var n=or();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,m),x=y.className,b=xa(l,s);return x&&(b+=" "+x),m.className&&(b+=" "+m.className),g[ta(h)&&!Hn.has(h)?"class":"className"]=b,n&&(g.ref=n),(0,a.createElement)(h,g)}(b,e,t)}x.displayName=d;var b=a.forwardRef(x);return b.attrs=m,b.componentStyle=y,b.displayName=d,b.shouldForwardProp=h,b.foldedComponentIds=r?xa(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=f,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var a=0,r=t;a<r.length;a++)ka(e,r[a],!0);return e}({},i.defaultProps,e):e}}),za(b,function(){return".".concat(b.styledComponentId)}),o&&ga(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function pr(e,t){for(var n=[e[0]],a=0,r=t.length;a<r;a+=1)n.push(t[a],e[a+1]);return n}var dr=function(e){return Object.assign(e,{isCss:!0})};function fr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(wa(e)||va(e))return dr(Qa(pr(Fn,St([e],t,!0))));var a=e;return 0===t.length&&1===a.length&&"string"==typeof a[0]?Qa(a):dr(Qa(pr(a,t)))}function mr(e,t,n){if(void 0===n&&(n=Un),!t)throw Rn(1,t);var a=function(a){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return e(t,n,fr.apply(void 0,St([a],r,!1)))};return a.attrs=function(a){return mr(e,t,jt(jt({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},a.withConfig=function(a){return mr(e,t,jt(jt({},n),a))},a}var hr=function(e){return mr(ur,e)},gr=hr;Hn.forEach(function(e){gr[e]=hr(e)});var wr,yr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ga(e),Ia.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,a){var r=a(ba(Qa(this.rules,t,n,a)),""),i=this.componentId+e;n.insertRules(i,i,r)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,a){e>2&&Ia.registerId(this.componentId+e);var r=this.componentId+e;this.isStatic?n.hasNameForId(r,r)||this.createStyles(e,t,n,a):(this.removeStyles(e,n),this.createStyles(e,t,n,a))},e}();!function(){function e(e,t){var n=this;this[wr]=!0,this.inject=function(e,t){void 0===t&&(t=ar);var a=n.name+t.hash;e.hasNameForId(n.id,a)||e.insertRules(n.id,a,t(n.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,za(this,function(){throw Rn(12,String(n.name))})}e.prototype.getName=function(e){return void 0===e&&(e=ar),this.name+e.hash}}();wr=Ha;(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Oa(),a=ba([n&&'nonce="'.concat(n,'"'),"".concat(Cn,'="true"'),"".concat(Pn,'="').concat($n,'"')].filter(Boolean)," ");return"<style ".concat(a,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Rn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Rn(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[Cn]="",t[Pn]=$n,t.dangerouslySetInnerHTML={__html:n},t),i=Oa();return i&&(r.nonce=i),[a.createElement("style",jt({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Ia({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Rn(2);return a.createElement(lr,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Rn(3)}})(),"__sc-".concat(Cn,"__");const xr={smallPhone:360,phone:430,tablet:820,desktopHd:1920,tv4k:3840},br={bordoAccent:"#9e1e36",bordoAccentDark:"#6a1426",bordoCore:"#4a1020",deepBlack:"#2e0810",outerSpace:"#2e0810",white:"#ffffff",goldMain:"#d4af37",goldHover:"#f1d592",goldSoft18:"rgba(212, 175, 55, 0.18)",goldSoft10:"rgba(180, 140, 30, 0.1)",goldSoft08:"rgba(212, 175, 55, 0.08)",goldSoft025:"rgba(212, 175, 55, 0.025)",testimonialBg:"rgba(255, 255, 255, 0.08)",testimonialBgHover:"rgba(255, 255, 255, 0.12)",testimonialBorder:"rgba(212, 175, 55, 0.24)",testimonialBorderHover:"rgba(212, 175, 55, 0.42)",testimonialText:"#ffffff",testimonialSubtext:"#b0b0b0",testimonialAccent:"#667eea",testimonialAccentLight:"rgba(102, 126, 234, 0.1)",testimonialAccentBorder:"rgba(102, 126, 234, 0.5)",cardBg1:"rgba(155, 45, 68, 0.08)",cardBg2:"rgba(75, 25, 45, 0.12)",cardBg3:"rgba(35, 10, 20, 0.15)",cardBgHover1:"rgba(175, 55, 85, 0.12)",cardBgHover2:"rgba(95, 35, 60, 0.18)",cardBgHover3:"rgba(40, 15, 25, 0.2)"},vr={main:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'},kr=gr.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(
      ellipse at 80% 10%,
      ${br.bordoAccent} 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      ${br.bordoAccentDark} 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 50% 50%,
      ${br.bordoCore} 0%,
      ${br.deepBlack} 100%
    );

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 70% 0%,
        ${br.goldSoft18} 0%,
        transparent 45%
      ),
      radial-gradient(
        ellipse at 100% 50%,
        ${br.goldSoft10} 0%,
        transparent 40%
      ),
      radial-gradient(
        ellipse at 30% 100%,
        ${br.goldSoft08} 0%,
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
      ${br.goldSoft025} 80px,
      ${br.goldSoft025} 81px
    );
    pointer-events: none;
  }
`;var zr=n(579);const jr=function(){return(0,zr.jsx)(kr,{})},Sr=gr.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(8px, 3vw, 50px);
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
  z-index: 1000;

  @media (max-width: ${xr.tablet}px) {
    height: auto;
    min-height: 64px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "left center right";
    align-items: center;
    column-gap: 10px;
    row-gap: 0;
    padding: 0 14px;
  }

  @media (max-width: ${xr.phone}px) {
    min-height: 60px;
    column-gap: 8px;
    padding: 0 10px;
  }
`,Cr=gr.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  min-width: 0;

  @media (max-width: ${xr.tablet}px) {
    grid-area: left;
    flex: none;
    min-width: 0;
  }
`,Er=gr.div`
  flex: 2;
  display: flex;
  justify-content: center;
  min-width: 0;

  @media (max-width: ${xr.tablet}px) {
    grid-area: center;
    flex: 1;
    min-width: 0;
    justify-content: center;
  }

  @media (max-width: ${xr.tablet}px) {
    display: none;
  }
`,Pr=gr.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  min-width: 0;

  @media (max-width: ${xr.tablet}px) {
    grid-area: right;
    flex: none;
    min-width: 0;
  }
`,$r=gr.div`
  display: flex;

  @media (max-width: ${xr.tablet}px) {
    display: none;
  }
`,Tr=gr.button`
  display: none;
  border: 1px solid rgba(241, 213, 146, 0.38);
  background: rgba(34, 10, 16, 0.72);
  color: ${br.goldHover};
  width: 44px;
  height: 44px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.24rem;
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

  @media (max-width: ${xr.tablet}px) {
    display: inline-flex;
  }
`,_r=gr.button`
  position: fixed;
  inset: 0;
  border: none;
  background: rgba(0, 0, 0, 0.4);
  opacity: ${e=>e.$open?1:0};
  pointer-events: ${e=>e.$open?"auto":"none"};
  transition: opacity 0.25s ease;
  z-index: 999;
  display: none;

  @media (max-width: ${xr.tablet}px) {
    top: 72px;
    display: block;
  }
`,Or=gr.aside`
  position: fixed;
  top: 78px;
  left: 50%;
  right: auto;
  width: min(92vw, 360px);
  max-width: 360px;
  max-height: calc(100vh - 72px);
  height: auto;
  padding: 14px 18px 16px;
  background: linear-gradient(
    180deg,
    rgba(120, 40, 64, 0.72) 0%,
    rgba(82, 24, 42, 0.68) 100%
  );
  backdrop-filter: blur(12px) saturate(120%);
  border: 1px solid rgba(241, 213, 146, 0.18);
  border-radius: 16px;
  box-shadow:
    0 14px 34px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 247, 220, 0.12);
  transform: ${e=>e.$open?"translate(-50%, 0)":"translate(-50%, -14px)"};
  opacity: ${e=>e.$open?1:0};
  pointer-events: ${e=>e.$open?"auto":"none"};
  transition:
    transform 0.24s ease,
    opacity 0.24s ease;
  z-index: 1001;
  display: none;
  overflow-y: auto;

  @media (max-width: ${xr.tablet}px) {
    display: block;
  }
`,Nr=gr.div`
  margin-top: 14px;
  padding-top: 12px;
  display: flex;
  justify-content: center;
  padding-left: 0;
  border-top: 1px solid rgba(241, 213, 146, 0.18);

  & > div {
    justify-content: center;
  }
`,Rr={src:n.p+"static/media/znak-wodny.5040197ae93bea0121d6.png",alt:"Logo Klara Queen",name:"Klara Queen",ariaLabel:"Strona g\u0142\xf3wna Klara Queen"},Mr=gr(wt)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`,Dr=gr.img.attrs({src:Rr.src,alt:Rr.alt})`
  height: clamp(50px, 8vw, 85px);
  width: auto;
  cursor: pointer;
  filter: brightness(3) contrast(1.2) saturate(1.1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.34))
    drop-shadow(0 0 8px ${br.goldMain})
    drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18));
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
    filter: brightness(3) contrast(1.2) saturate(1.1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${br.goldMain})
      drop-shadow(0 0 16px ${br.goldHover});
  }
`;const Lr=function(){return(0,zr.jsx)(Mr,{to:"/","aria-label":Rr.ariaLabel,children:(0,zr.jsx)(Dr,{})})},Ar=gr.ul`
  display: flex;
  align-items: ${e=>(e.$vertical,"center")};
  gap: clamp(4px, 1.5vw, 30px);
  flex-wrap: nowrap;
  flex-direction: ${e=>e.$vertical?"column":"row"};
  justify-content: ${e=>(e.$vertical,"center")};
  list-style: none;
  margin: 0;
  padding: ${e=>e.$vertical?"0":"0 8px"};
  white-space: nowrap;
  width: auto;
  min-width: 0;

  @media (max-width: ${xr.tablet}px) {
    gap: ${e=>e.$vertical?"16px":"clamp(3px, 0.8vw, 8px)"};
    padding: 0;
    justify-content: ${e=>(e.$vertical,"center")};
    max-width: 100%;
  }

  @media (max-width: ${xr.phone}px) {
    gap: ${e=>e.$vertical?"14px":"clamp(2px, 0.6vw, 5px)"};
  }
`,Ir=gr.li`
  flex-shrink: 1;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: ${e=>(e.$vertical,"center")};
  gap: 0;
  width: auto;
  color: ${br.goldHover};
  font-family: ${vr.main};
  font-weight: ${e=>e.$vertical?500:600};
  text-transform: uppercase;
  letter-spacing: ${e=>e.$vertical?"1.1px":"clamp(0.5px, 0.08vw, 1px)"};
  cursor: pointer;
  font-size: ${e=>e.$vertical?"0.9rem":"clamp(0.48rem, 1.2vw, 0.90rem)"};
  white-space: nowrap;
  text-align: center;
  line-height: 1;
  padding: ${e=>e.$vertical?"2px 0":"clamp(2px, 0.3vw, 4px) clamp(4px, 0.7vw, 7px)"};
  border-radius: 10px;
  border: ${e=>e.$vertical?"none":"1px solid rgba(241, 213, 146, 0.26)"};
  background: ${e=>e.$vertical?"transparent":"linear-gradient(180deg, rgba(255, 245, 214, 0.04) 0%, rgba(30, 8, 14, 0.2) 100%)"};
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
    display: ${e=>e.$vertical?"block":"none"};
    position: absolute;
    left: 50%;
    bottom: -9px;
    width: 18px;
    height: 1px;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(241, 213, 146, 0.5) 50%,
      transparent 100%
    );
  }

  @media (max-width: ${xr.tablet}px) {
    letter-spacing: ${e=>e.$vertical?"1.1px":"0.6px"};
    font-size: ${e=>e.$vertical?"0.9rem":"clamp(0.48rem, 0.9vw, 0.68rem)"};
    padding: ${e=>e.$vertical?"1px 0":"clamp(2px, 0.2vw, 3px) clamp(3px, 0.5vw, 5px)"};
    white-space: nowrap;
  }

  @media (max-width: ${xr.phone}px) {
    letter-spacing: ${e=>e.$vertical?"0.9px":"0.5px"};
    font-size: ${e=>e.$vertical?"0.84rem":"clamp(0.44rem, 0.75vw, 0.56rem)"};
    padding: ${e=>e.$vertical?"1px 0":"clamp(2px, 0.1vw, 3px) clamp(3px, 0.4vw, 5px)"};
  }

  &:hover {
    color: ${br.white};
    transform: translateY(-1px);
    border-color: ${e=>e.$vertical?"transparent":"rgba(241, 213, 146, 0.48)"};
    background: ${e=>e.$vertical?"transparent":"linear-gradient(180deg, rgba(255, 245, 214, 0.08) 0%, rgba(44, 12, 22, 0.28) 100%)"};
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${br.goldMain},
      0 0 18px ${br.goldHover};
  }
`,Fr=gr.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: inherit;
`;var Ur={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Wr=a.createContext&&a.createContext(Ur),Hr=["attr","size","title"];function Br(){return Br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Br.apply(null,arguments)}function Kr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Qr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Kr(Object(n),!0).forEach(function(t){Gr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Gr(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vr(e){return e&&e.map((e,t)=>a.createElement(e.tag,Qr({key:t},e.attr),Vr(e.child)))}function Yr(e){return t=>a.createElement(qr,Br({attr:Qr({},e.attr)},t),Vr(e.child))}function qr(e){var t=t=>{var n,{attr:r,size:i,title:o}=e,l=function(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,Hr),s=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",Br({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:n,style:Qr(Qr({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==Wr?a.createElement(Wr.Consumer,null,e=>t(e)):t(Ur)}function Xr(e){return Yr({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Zr(e){return Yr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"},child:[]}]})(e)}function Jr(e){return Yr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"},child:[]}]})(e)}function ei(e){return Yr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"},child:[]}]})(e)}function ti(e){return Yr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(e)}function ni(e){return Yr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function ai(e){return Yr({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function ri(e){return Yr({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(e)}function ii(e){return Yr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}const oi=[{id:1,icon:function(e){return Yr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)},url:"https://youtube.com",label:"YouTube"},{id:2,icon:function(e){return Yr({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)},url:"https://facebook.com",label:"Facebook"},{id:3,icon:function(e){return Yr({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(e)},url:"https://allegro.pl",label:"Allegro"}],li={labels:[{name:"Oferta",to:"/offer"},{name:"Aktualno\u015bci",to:"/blog"},{name:"Wsp\xf3\u0142praca",to:"/cooperation"},{name:"Najcz\u0119stsze pytania",to:"/questions"},{name:"O Nas",to:"/about"}],socials:oi,aria:{closeLabel:"Zamknij menu",openLabel:"Otw\xf3rz menu"}};const si=function(e){let{vertical:t=!1,onItemClick:n}=e;const a=()=>{n&&n()};return(0,zr.jsx)(Ar,{$vertical:t,children:li.labels.map((e,n)=>(0,zr.jsx)(Ir,{$vertical:t,onClick:a,children:e.to?(0,zr.jsx)(Fr,{as:wt,to:e.to,children:e.name}):(0,zr.jsx)(Fr,{href:e.url,children:e.name})},`${e.name}-${n}`))})},ci=gr.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: ${xr.tablet}px) {
    gap: 14px;
  }

  @media (max-width: ${xr.phone}px) {
    gap: 12px;
  }
`,ui=gr.a`
  color: ${br.goldHover};
  font-size: 1.3rem;
  transition:
    color 0.3s ease,
    transform 0.3s ease,
    filter 0.3s ease;
  display: flex;
  align-items: center;
  text-decoration: none;
  filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.22))
    drop-shadow(0 0 8px rgba(212, 175, 55, 0.22));

  @media (max-width: ${xr.tablet}px) {
    font-size: 1.18rem;
  }

  @media (max-width: ${xr.phone}px) {
    font-size: 1.08rem;
  }

  &:hover {
    color: ${br.white};
    transform: translateY(-2px) scale(1.04);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${br.goldMain})
      drop-shadow(0 0 16px ${br.goldHover});
  }
`;const pi=function(){return(0,zr.jsx)(ci,{children:li.socials.map(e=>{const t=e.icon;return(0,zr.jsx)(ui,{href:e.url,target:"_blank",rel:"noreferrer","aria-label":e.label,children:(0,zr.jsx)(t,{title:e.label})},e.id)})})};const di=function(){const[e,t]=(0,a.useState)(!1),n=()=>{t(!1)};return(0,zr.jsxs)(zr.Fragment,{children:[(0,zr.jsxs)(Sr,{children:[(0,zr.jsx)(Cr,{children:(0,zr.jsx)(Lr,{})}),(0,zr.jsx)(Er,{children:(0,zr.jsx)(si,{})}),(0,zr.jsxs)(Pr,{children:[(0,zr.jsx)($r,{children:(0,zr.jsx)(pi,{})}),(0,zr.jsx)(Tr,{type:"button",onClick:()=>{t(e=>!e)},"aria-label":e?li.aria.closeLabel:li.aria.openLabel,"aria-expanded":e,children:e?(0,zr.jsx)(Xr,{}):(0,zr.jsx)(ii,{})})]})]}),(0,zr.jsx)(_r,{$open:e,onClick:n}),(0,zr.jsxs)(Or,{$open:e,children:[(0,zr.jsx)(si,{vertical:!0,onItemClick:n}),(0,zr.jsx)(Nr,{children:(0,zr.jsx)(pi,{})})]})]})},fi=gr.footer`
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

  @media (max-width: ${xr.desktopHd}px) {
    padding: 55px 45px 22px;
  }

  @media (max-width: ${xr.tablet}px) {
    padding: 45px 18px 18px;
  }

  @media (max-width: 821px) {
    padding: 30px 12px 12px;
  }

  @media (max-width: ${xr.smallPhone}px) {
    padding: 25px 10px 10px;
  }
`,mi=gr.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 50px;
  width: 100%;

  @media (max-width: ${xr.tablet}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }

  @media (max-width: 821px) {
    gap: 12px;
  }

  @media (max-width: ${xr.phone}px) {
    gap: 12px;
  }

  @media (max-width: ${xr.smallPhone}px) {
    gap: 10px;
  }
`,hi="kontakt@studioklara.pl",gi={brand:{name:"Klara Queen",slogan:"Digital Excellence",description:"Tworzymy luksusowe do\u015bwiadczenia cyfrowe, kt\xf3re definiuj\u0105 now\u0105 jako\u015b\u0107 Twojej marki w sieci."},links:[{name:"Start",to:"/"},{name:"Oferta",to:"/offer"},{name:"Aktualno\u015bci",to:"/blog"},{name:"Wsp\xf3\u0142praca",to:"/cooperation"},{name:"Opinie",to:"/testimonials"},{name:"O Nas",to:"/about"},{name:"Najcz\u0119stsze pytania",to:"/questions"}],socials:oi,contact:{email:hi,copy:`\xa9 ${(new Date).getFullYear()} Klara Queen. Wszystkie prawa zastrze\u017cone.`}},wi=gr.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: ${xr.tablet}px) {
    align-items: center;
  }
`,yi=gr.div`
  display: flex;
  align-items: center;
  margin-top: -56px;

  @media (max-width: ${xr.desktopHd}px) {
    margin-top: -50px;
  }

  @media (max-width: ${xr.tablet}px) {
    margin-top: -36px;
  }

  @media (max-width: ${xr.smallPhone}px) {
    margin-top: -28px;
  }
`,xi=gr.img`
  height: 180px;
  width: auto;
  cursor: pointer;
  filter: brightness(2.8) contrast(1.1) saturate(1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.3))
    drop-shadow(0 0 6px ${br.goldMain})
    drop-shadow(0 1px 4px rgba(0, 0, 0, 0.15));
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    filter: brightness(2.8) contrast(1.1) saturate(1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.4))
      drop-shadow(0 0 8px ${br.goldMain})
      drop-shadow(0 0 12px ${br.goldHover});
  }

  @media (max-width: ${xr.desktopHd}px) {
    height: 168px;
  }

  @media (max-width: ${xr.tablet}px) {
    height: 140px;
  }

  @media (max-width: ${xr.smallPhone}px) {
    height: 120px;
  }
`,bi=gr.p`
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

  @media (max-width: ${xr.tablet}px) {
    font-size: 0.78rem;
    line-height: 1.5;
    max-width: 500px;
  }

  @media (max-width: ${xr.smallPhone}px) {
    font-size: 0.72rem;
    line-height: 1.4;
  }
`;const vi=function(e){let{data:t}=e;return(0,zr.jsxs)(wi,{children:[(0,zr.jsx)(yi,{children:(0,zr.jsx)(xi,{src:Rr.src,alt:Rr.alt})}),(0,zr.jsx)(bi,{children:t.description})]})},ki=fr`
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
    background: ${br.goldMain};
    transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${br.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 16px rgba(212, 175, 55, 0.45);

    &::before {
      width: 100%;
    }
  }

  @media (max-width: ${xr.tablet}px) {
    font-size: 0.76rem;
  }

  @media (max-width: ${xr.smallPhone}px) {
    font-size: 0.7rem;
  }
`,zi=gr.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${xr.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${xr.smallPhone}px) {
    gap: 10px;
  }
`,ji=gr.h4`
  color: ${br.goldHover};
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

  @media (max-width: ${xr.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${xr.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,Si=gr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;

  @media (max-width: ${xr.tablet}px) {
    grid-template-columns: 1fr;
    gap: 12px;
    place-items: center;
  }

  @media (max-width: ${xr.phone}px) {
    gap: 8px;
    place-items: center;
  }

  @media (max-width: ${xr.smallPhone}px) {
    gap: 6px;
  }
`,Ci=gr.a`
  ${ki}
`,Ei=gr(wt)`
  ${ki}
`;const Pi=function(e){let{data:t}=e;return(0,zr.jsxs)(zi,{children:[(0,zr.jsx)(ji,{children:"Nawigacja"}),(0,zr.jsx)(Si,{children:t.map((e,t)=>e.to?(0,zr.jsx)(Ei,{to:e.to,children:e.name},t):(0,zr.jsx)(Ci,{href:e.url,children:e.name},t))})]})},$i=gr.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${xr.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${xr.smallPhone}px) {
    gap: 10px;
  }
`,Ti=gr.h4`
  color: ${br.goldHover};
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

  @media (max-width: ${xr.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${xr.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,_i=gr.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: ${xr.tablet}px) {
    justify-content: center;
    gap: 16px;
  }

  @media (max-width: ${xr.smallPhone}px) {
    gap: 12px;
  }
`,Oi=gr.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${br.white};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  opacity: 0.8;

  svg {
    font-size: 1.6rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.15));
    color: ${br.goldMain};
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
    color: ${br.white};

    svg {
      transform: scale(1.12);
      color: ${br.goldHover};
      filter: drop-shadow(0 6px 12px rgba(212, 175, 55, 0.3));
    }

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: ${xr.tablet}px) {
    gap: 6px;

    svg {
      font-size: 1.4rem;
    }
  }

  @media (max-width: ${xr.smallPhone}px) {
    gap: 5px;

    svg {
      font-size: 1.2rem;
    }
  }
`,Ni=gr.span`
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: ${br.white};
  opacity: 0.75;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: "Cormorant Garamond", serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: ${xr.tablet}px) {
    font-size: 0.58rem;
    letter-spacing: 1px;
  }

  @media (max-width: ${xr.smallPhone}px) {
    font-size: 0.54rem;
  }
`;const Ri=function(e){let{data:t}=e;return(0,zr.jsxs)($i,{children:[(0,zr.jsx)(Ti,{children:"Nasze Kana\u0142y"}),(0,zr.jsx)(_i,{children:t.map(e=>(0,zr.jsxs)(Oi,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,zr.jsx)(e.icon,{}),(0,zr.jsx)(Ni,{children:e.label})]},e.id))})]})},Mi=gr.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px 0;
  border-top: 1px solid rgba(212, 175, 55, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: ${xr.tablet}px) {
    flex-direction: column-reverse;
    gap: 12px;
    margin: 30px auto 0;
    padding: 15px 0;
    text-align: center;
    align-items: center;
  }

  @media (max-width: ${xr.smallPhone}px) {
    margin: 20px auto 0;
    padding: 12px 0;
    gap: 10px;
  }
`,Di=gr.span`
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

  @media (max-width: ${xr.tablet}px) {
    font-size: 0.68rem;
  }

  @media (max-width: ${xr.smallPhone}px) {
    font-size: 0.63rem;
  }
`,Li=gr.span`
  color: ${br.goldMain};
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

  @media (max-width: ${xr.tablet}px) {
    font-size: 0.75rem;
  }

  @media (max-width: ${xr.smallPhone}px) {
    font-size: 0.7rem;
  }
`,Ai=gr.a`
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
      ${br.goldMain} 100%
    );
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${br.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(212, 175, 55, 0.6);

    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${xr.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 0.8px;
  }

  @media (max-width: ${xr.smallPhone}px) {
    font-size: 0.7rem;
  }
`;const Ii=function(e){let{data:t}=e;const[n,r]=(0,a.useState)(67100),[i,o]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(i)return;const e=localStorage.getItem("visitCount"),t=localStorage.getItem("lastSessionTime"),n=(new Date).getTime();if(e&&t){if(n-parseInt(t)>6e4){const t=parseInt(e)+1;localStorage.setItem("visitCount",t),localStorage.setItem("lastSessionTime",n),r(t)}else r(parseInt(e))}else localStorage.setItem("visitCount",67101),localStorage.setItem("lastSessionTime",n),r(67100);o(!0)},[i]),(0,zr.jsxs)(Mi,{children:[(0,zr.jsx)(Di,{children:t.copy}),(0,zr.jsxs)(Li,{children:["Odwiedzin na stronie:"," ",(0,zr.jsx)("strong",{children:n.toLocaleString("pl-PL")})]}),(0,zr.jsx)(Ai,{href:`mailto:${t.email}`,children:t.email})]})};const Fi=function(){const{brand:e,links:t,socials:n,contact:a}=gi;return(0,zr.jsxs)(fi,{children:[(0,zr.jsxs)(mi,{children:[(0,zr.jsx)(vi,{data:e}),(0,zr.jsx)(Pi,{data:t}),(0,zr.jsx)(Ri,{data:n})]}),(0,zr.jsx)(Ii,{data:a})]})},Ui=()=>{const e=ue();return(0,a.useEffect)(()=>{window.scrollTo(0,0)},[e.key]),(0,a.useEffect)(()=>{setTimeout(()=>{window.scrollTo(0,0)},100)},[]),null},Wi=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=fr.apply(void 0,St([e],t,!1)),i="sc-global-".concat(Jn(JSON.stringify(r))),o=new yr(r,i),l=new WeakMap,s=function(e){var t=or(),n=a.useContext(sr),r=l.get(t.styleSheet);return void 0===r&&(r=t.styleSheet.allocateGSInstance(i),l.set(t.styleSheet,r)),a.useLayoutEffect(function(){return t.styleSheet.server||function(e,t,n,a,r){if(o.isStatic)o.renderStyles(e,Nn,n,r);else{var i=jt(jt({},t),{theme:Wn(t,a,s.defaultProps)});o.renderStyles(e,i,n,r)}}(r,e,t.styleSheet,n,t.stylis),function(){o.removeStyles(r,t.styleSheet)}},[r,e,t.styleSheet,n,t.stylis]),null};return a.memo(s)})`
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
    background-color: ${br.outerSpace||"#1a0005"};
    color: ${br.white||"#ffffff"};
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
    background: ${br.goldMain||"#d4af37"};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${br.goldHover||"#f1d592"};
  }
`,Hi=gr.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,Bi=gr.div`
  flex: 1;
  padding-top: 90px;

  @media (max-width: 821px) {
    padding-top: 15px;
  }

  @media (max-width: ${xr.phone}px) {
    padding-top: 45px;
  }
`,Ki=gr.section`
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

  @media (max-width: ${xr.tablet}px) {
    padding: 0 0 0;
  }

  @media (max-width: 640px) {
    padding: 0 0 0;
  }

  @media (max-width: ${xr.phone}px) {
    padding: 0 0 0;
  }
`,Qi=gr.div`
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

  @media (max-width: ${xr.tablet}px) {
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

  @media (max-width: ${xr.phone}px) {
    gap: 8px;
    padding: 0 10px 0;
  }

  @media (max-width: 420px) {
    gap: 8px;
    padding: 0 8px 0;
  }
`,Gi=gr.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;
  margin: 0;

  @media (max-width: ${xr.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${xr.tablet}px) {
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

  @media (max-width: ${xr.phone}px) {
    margin-top: 0;
  }

  @media (max-width: 420px) {
    margin-top: 0;
  }
`,Vi=gr.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;
  margin: 0;

  @media (max-width: ${xr.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${xr.tablet}px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 760px;
    margin-top: 0;
  }

  @media (max-width: ${xr.phone}px) {
    margin-top: 0;
  }
`,Yi=(gr.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,gr.div`
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

  @media (max-width: ${xr.tablet}px) {
    max-width: 760px;
    text-align: center;
    margin: -20px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  @media (max-width: ${xr.phone}px) {
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
    align-items: center;
    padding: 0 2px;
  }
`),qi=gr.div`
  font-family: "Manrope", "Segoe UI", sans-serif;
  color: rgba(255, 242, 214, 0.92);
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.2vw, 2.2px);
  font-size: clamp(0.62rem, 0.9vw, 0.82rem);
  font-weight: 500;
  margin-bottom: 18px;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);

  @media (max-width: ${xr.tablet}px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${xr.phone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.8px;
    margin-bottom: 12px;
  }
`,Xi=gr.h1`
  margin: 0 0 18px;
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  color: ${br.goldHover};
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

  @media (max-width: ${xr.tablet}px) {
    font-size: clamp(0.95rem, 3.2vw, 1.95rem);
    letter-spacing: 0;
    text-align: center;
    width: 100%;
    line-height: 1;
  }

  @media (max-width: ${xr.phone}px) {
    margin-bottom: 14px;
    font-size: clamp(0.9rem, 5.2vw, 1.6rem);
    line-height: 1.1;
  }
`,Zi=gr.p`
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

  @media (max-width: ${xr.tablet}px) {
    max-width: 560px;
    font-size: clamp(0.74rem, 1.8vw, 0.84rem);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${xr.phone}px) {
    max-width: 100%;
    font-size: clamp(0.72rem, 3.4vw, 0.8rem);
    line-height: 1.45;
    text-align: center;
  }
`,Ji=gr.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: nowrap;

  @media (max-width: ${xr.tablet}px) {
    width: 100%;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10px;
  }

  @media (max-width: ${xr.phone}px) {
    gap: 8px;
    margin-top: 22px;
    flex-wrap: nowrap;
    justify-content: center;
  }
`,eo=`\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 48px;\n  padding: 0 24px;\n  border-radius: 14px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.9px;\n  font-size: clamp(0.68rem, 0.8vw, 0.82rem);\n  font-weight: 700;\n  white-space: nowrap;\n  flex: 0 0 auto;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease,\n    color 0.3s ease, border-color 0.3s ease;\n\n  @media (max-width: ${xr.tablet}px) {\n    min-height: 42px;\n    padding: 0 14px;\n    font-size: 0.74rem;\n    letter-spacing: 0.8px;\n  }\n\n  @media (max-width: ${xr.phone}px) {\n    min-height: 40px;\n    padding: 0 12px;\n    font-size: 0.7rem;\n    letter-spacing: 0.7px;\n  }\n`,to=gr.a`
  ${eo}
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
`,no=gr.a`
  ${eo}
  color: rgba(255, 246, 220, 0.92);
  background: rgba(53, 13, 19, 0.22);
  border: 1px solid rgba(241, 213, 146, 0.58);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.04),
    0 10px 24px rgba(0, 0, 0, 0.14);

  &:hover {
    transform: translateY(-1px);
    color: ${br.white};
    border-color: rgba(241, 213, 146, 0.78);
    box-shadow:
      0 14px 30px rgba(0, 0, 0, 0.2),
      0 0 18px rgba(212, 175, 55, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  }
`,ao="Unikalny design, kt\xf3ry zachwyca",ro={line1:"Luksusowe i funkcjonalne",line2:"strony WWW dla Twojej marki"},io={line1:"Projektujemy spersonalizowane, unikalne rozwi\u0105zania cyfrowe,",line2:"kt\xf3re buduj\u0105 autorytet i przyci\u0105gaj\u0105 klient\xf3w premium."},oo={primary:{label:"Zobacz Projekty",href:"/offer"},secondary:{label:"Wsp\xf3\u0142praca",href:"/cooperation"}};const lo=function(){return(0,zr.jsxs)(Yi,{children:[(0,zr.jsx)(qi,{children:ao}),(0,zr.jsxs)(Xi,{children:[ro.line1,(0,zr.jsx)("br",{}),ro.line2]}),(0,zr.jsxs)(Zi,{children:[io.line1,(0,zr.jsx)("br",{}),io.line2]}),(0,zr.jsxs)(Ji,{children:[(0,zr.jsx)(to,{as:wt,to:oo.primary.href,children:oo.primary.label}),(0,zr.jsx)(no,{as:wt,to:oo.secondary.href,children:oo.secondary.label})]})]})},so=gr.div`
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

  @media (max-width: ${xr.tablet}px) {
    width: min(100%, 760px);
    height: clamp(240px, 46vw, 380px);
    padding: clamp(8px, 1.2vw, 12px);
    margin: 0 auto 0;
  }

  @media (max-width: ${xr.phone}px) {
    padding: clamp(6px, 1vw, 10px);
  }
`,co=gr.div`
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

  @media (max-width: ${xr.tablet}px) {
    --offset-distance: 68px;
    --edge-offset-distance: 112px;
  }

  @media (max-width: ${xr.phone}px) {
    --offset-distance: 56px;
    --edge-offset-distance: 98px;
  }
`,uo=gr.img`
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
  transform: ${e=>{const t=Math.abs(e.$offset),n=0===t?1:1===t?.8:.64,a=2===t?"var(--edge-offset-distance)":"var(--offset-distance)";return`translate(-50%, -50%) translateX(calc(${e.$offset} * ${a})) scale(${n})`}};
  box-shadow: ${e=>e.$active?`0 28px 50px rgba(0, 0, 0, 0.45), 0 0 20px ${br.goldSoft18}`:"0 16px 26px rgba(0, 0, 0, 0.3)"};
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

  @media (max-width: ${xr.phone}px) {
    width: 260px;
    height: 182px;
  }
`;var po=n(217),fo=n(410),mo=n(430),ho=n(682);const go={images:[po,fo,mo,ho,fo]},{images:wo}=go,yo=(e,t,n)=>{let a=t-e;return a>n/2&&(a-=n),a<-n/2&&(a+=n),a};const xo=function(){const[e,t]=(0,a.useState)(0);return(0,a.useEffect)(()=>{const e=setInterval(()=>{t(e=>(e+1)%wo.length)},4e3);return()=>clearInterval(e)},[]),(0,zr.jsx)(so,{children:(0,zr.jsx)(co,{children:wo.map((t,n)=>(0,zr.jsx)(uo,{src:t,alt:`Projekt ${n+1}`,$offset:yo(e,n,wo.length),$active:n===e},`${t}-${n}`))})})},bo=gr.section`
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

  @media (max-width: ${xr.phone}px) {
    margin-top: -8px;
  }
`,vo=gr.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,ko=gr.h2`
  color: ${br.goldHover};
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
`,zo=gr.p`
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
`,jo=gr.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(280px, 38vw, 420px);
  margin-top: 0;
`,So=gr.div`
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
`,Co=gr.div`
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

  @media (max-width: ${xr.tablet}px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(100% - clamp(6px, 0.8vw, 10px));
  }

  @media (max-width: ${xr.smallPhone}px) {
    flex: 0 0 calc(100% - clamp(6px, 0.8vw, 10px));
  }
`,Eo=gr.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${br.goldMain};
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
`,Po=gr.div`
  margin: 8px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover div {
    width: 100px;
  }
`,$o=gr.span`
  color: ${br.goldMain};
  text-transform: uppercase;
  letter-spacing: clamp(1.4px, 0.3vw, 4px);
  font-size: clamp(0.68rem, 0.9vw, 0.75rem);
  margin-bottom: 10px;
`,To=gr.div`
  width: 50px;
  height: 1px;
  background: ${br.goldMain};
  transition: width 0.4s ease;
`,_o=gr.div`
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
`;const Oo=function(e){let{children:t,type:n,url:a,isLink:r}=e;return(0,zr.jsx)(_o,{as:"link"===n?"a":"div",href:"link"===n?a:void 0,target:"link"===n?"_blank":void 0,isLink:r,children:t})},No=gr.div`
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
`,Ro=gr.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  filter: brightness(0.88) saturate(0.9);
  transition:
    filter 0.45s ease,
    transform 0.45s ease;
`;const Mo=function(e){let{image:t,title:n}=e;return(0,zr.jsx)(No,{children:(0,zr.jsx)(Ro,{src:t,alt:n})})},Do=gr.div`
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
`;const Lo=function(e){let{icon:t}=e;return(0,zr.jsx)(Do,{children:(0,zr.jsx)(t,{})})},Ao=gr.h3`
  color: ${br.goldHover};
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
`,Io=gr.p`
  color: rgba(255, 245, 220, 0.78);
  font-size: clamp(0.68rem, 2.2vw, 0.82rem);
  text-align: center;
  line-height: 1.5;
  margin: 0 clamp(8px, 2vw, 20px);
  max-width: 240px;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;const Fo=function(e){let{title:t,description:n}=e;return(0,zr.jsxs)(zr.Fragment,{children:[(0,zr.jsx)(Ao,{children:t}),n&&(0,zr.jsx)(Io,{children:n})]})},Uo=gr.div`
  width: 44px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${br.goldMain} 50%,
    transparent 100%
  );
  margin-top: 14px;
  opacity: 0.65;
  flex-shrink: 0;
`;const Wo=function(){return(0,zr.jsx)(Uo,{})};const Ho=function(e){let{project:t}=e;const{type:n,url:a,title:r,description:i,image:o,icon:l}=t;return(0,zr.jsxs)(Oo,{type:n,url:a,isLink:"link"===n,children:[(0,zr.jsx)(Mo,{image:o,title:r}),(0,zr.jsx)(Lo,{icon:l}),(0,zr.jsx)(Fo,{title:r,description:i}),(0,zr.jsx)(Wo,{})]})},Bo=[{id:1,type:"link",url:"https://google.com",title:"Boutique E-commerce",description:"W pe\u0142ni dzia\u0142aj\u0105cy sklep internetowy premium.",image:po,icon:ni},{id:2,type:"example",title:"Studio Architektury",image:fo,icon:function(e){return Yr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}},{id:3,type:"example",title:"Portfolio Fotografa",image:mo,icon:function(e){return Yr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(e)}},{id:4,type:"link",url:"https://moja-inna-strona.pl",title:"Dashboard Finansowy",image:ho,icon:function(e){return Yr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}},{id:5,type:"example",title:"Projekt Specjalny",image:po,icon:ni},{id:6,type:"example",title:"Projekt Specjalny 2",image:fo,icon:ni}],Ko={title:"Przyk\u0142adowe Prace",subtitle:"Ekskluzywne projekty cyfrowe, kt\xf3re\ndefiniuj\u0105 now\u0105 jako\u015b\u0107 bran\u017cy"},Qo="Zobacz Pe\u0142ne Portfolio";const Go=function(){const e=(0,a.useRef)(null),t=(0,a.useRef)(!1),n=n=>{const a=e.current;if(!a||t.current)return;const r=a.firstElementChild;if(!r)return;const i=parseFloat(getComputedStyle(a).gap)||16,o=r.offsetWidth+i,l=a.scrollWidth-a.clientWidth;t.current=!0,n>0&&a.scrollLeft>=l-2?a.scrollTo({left:0,behavior:"smooth"}):n<0&&a.scrollLeft<=2?a.scrollTo({left:l,behavior:"smooth"}):a.scrollBy({left:n*o,behavior:"smooth"}),setTimeout(()=>{t.current=!1},580)};return(0,zr.jsxs)(bo,{children:[(0,zr.jsxs)(vo,{children:[(0,zr.jsx)(ko,{children:Ko.title}),(0,zr.jsx)(zo,{children:Ko.subtitle})]}),(0,zr.jsxs)(jo,{children:[(0,zr.jsx)(Eo,{onClick:()=>n(-1),"aria-label":"Poprzedni projekt",children:(0,zr.jsx)(ri,{})}),(0,zr.jsx)(So,{ref:e,children:Bo.map(e=>(0,zr.jsx)(Co,{children:(0,zr.jsx)(Ho,{project:e})},e.id))}),(0,zr.jsx)(Eo,{onClick:()=>n(1),"aria-label":"Nast\u0119pny projekt",children:(0,zr.jsx)(ai,{})})]}),(0,zr.jsxs)(Po,{children:[(0,zr.jsx)($o,{children:Qo}),(0,zr.jsx)(To,{})]})]})},Vo=gr.section`
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
`,Yo=gr.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,qo=gr.h2`
  color: ${br.goldHover};
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
`,Xo=gr.p`
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
`,Zo=gr.div`
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

  @media (max-width: ${xr.tablet}px) {
  }

  @media (max-width: 540px) {
  }

  @media (max-width: ${xr.smallPhone}px) {
  }
`,Jo=gr.a`
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

  @media (max-width: ${xr.tablet}px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(100% - clamp(6px, 0.8vw, 10px));
  }

  @media (max-width: ${xr.smallPhone}px) {
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
`,el=gr.img`
  width: 100%;
  height: clamp(140px, 20vw, 200px);
  object-fit: cover;
  display: block;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 0;
`,tl=gr.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: clamp(14px, 2vw, 20px);
  position: relative;
  z-index: 2;
  overflow: visible;
  min-height: 0;
`,nl=gr.h3`
  color: ${br.goldHover};
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

  @media (max-width: ${xr.tablet}px) {
    -webkit-line-clamp: 2;
  }
`,al=gr.p`
  color: rgba(241, 213, 146, 0.8);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: clamp(0.8rem, 0.95vw, 0.9rem);
  line-height: 1.5;
  margin: 0 0 auto 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${xr.tablet}px) {
    display: none;
  }
`,rl=gr.span`
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
`,il=gr.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(280px, 38vw, 420px);
  margin-top: 0;
`,ol=gr.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${br.goldMain};
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
`,ll=[{id:"proces-48h",title:"Jak oddajemy gotowy projekt w 48h roboczych? Poznaj nasz proces.",excerpt:"48 godzin roboczych \u2013 tyle potrzebujemy, by Twoja wizja sta\u0142a si\u0119 rzeczywisto\u015bci\u0105. Jak to robimy bez straty na jako\u015bci? Zaufanie, przygotowanie i pe\u0142ne skupienie.",date:"30 marca 2026",image:n(682)},{id:"unikalne-grafiki-ai",title:"Nowo\u015b\u0107: Unikalne grafiki AI w cenie ka\u017cdej strony",excerpt:"Koniec z nudnymi zdj\u0119ciami z darmowych bank\xf3w, kt\xf3re ma ka\u017cda konkurentka. Od teraz tworzymy dla Ciebie klimat premium za pomoc\u0105 Sztucznej Inteligencji \u2013 bez dodatkowych koszt\xf3w.",date:"25 marca 2026",image:n(430)},{id:"czysty-kod-react",title:"Dlaczego React wygrywa z WordPressem w 2026 roku?",excerpt:"Wielu klient\xf3w pyta nas: 'Dlaczego nie WordPress?'. Odpowied\u017a jest prosta: szybko\u015b\u0107, bezpiecze\u0144stwo i kontrola. Przeczytaj, dlaczego rezygnacja z ci\u0119\u017ckich wtyczek na rzecz czystego kodu to najlepsza inwestycja w przysz\u0142o\u015b\u0107 Twojej marki.",date:"20 marca 2026",image:n(410)},{id:"startujemy-z-aktualnosciami",title:"Startujemy z Aktualno\u015bciami \u2013 Sekcja tworzona na pro\u015bb\u0119 klient\xf3w",excerpt:"Po miesi\u0105cach obserwacji trendu w bran\u017cy i s\u0142uchaj\u0105c feedbacku naszych klient\xf3w, postanowili\u015bmy uruchomi\u0107 oficjaln\u0105 sekcj\u0119 Aktualno\u015bci. Dowiedz si\u0119, dlaczego to dla nas milestone, a dla Ciebie okazja do bycia na bie\u017c\u0105co.",date:"30 stycznia 2026",image:n(217)}];const sl=function(){const e=fe(),t=(0,a.useRef)(null),n=(0,a.useRef)(!1),r=e=>{const a=t.current;if(!a||n.current)return;const r=a.firstElementChild;if(!r)return;const i=parseFloat(getComputedStyle(a).gap)||16,o=r.offsetWidth+i,l=a.scrollWidth-a.clientWidth;n.current=!0,e>0&&a.scrollLeft>=l-2?a.scrollTo({left:0,behavior:"smooth"}):e<0&&a.scrollLeft<=2?a.scrollTo({left:l,behavior:"smooth"}):a.scrollBy({left:e*o,behavior:"smooth"}),setTimeout(()=>{n.current=!1},580)};return(0,zr.jsxs)(Vo,{children:[(0,zr.jsxs)(Yo,{children:[(0,zr.jsx)(qo,{children:"Aktualno\u015bci"}),(0,zr.jsx)(Xo,{children:"B\u0105d\u017a na bie\u017c\u0105co z najnowszymi wiadomo\u015bciami ze \u015bwiata"})]}),(0,zr.jsxs)(il,{children:[(0,zr.jsx)(ol,{onClick:()=>r(-1),"aria-label":"Poprzedni artyku\u0142",children:(0,zr.jsx)(ri,{})}),(0,zr.jsx)(Zo,{ref:t,children:ll.map(t=>(0,zr.jsxs)(Jo,{onClick:()=>e(`/blog/${t.id}`),style:{cursor:"pointer"},children:[(0,zr.jsx)(el,{src:t.image,alt:t.title}),(0,zr.jsxs)(tl,{children:[(0,zr.jsx)(nl,{children:t.title}),(0,zr.jsx)(al,{children:t.excerpt}),(0,zr.jsx)(rl,{children:t.date})]})]},t.id))}),(0,zr.jsx)(ol,{onClick:()=>r(1),"aria-label":"Nast\u0119pny artyku\u0142",children:(0,zr.jsx)(ai,{})})]})]})},cl=gr.section`
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
`,ul=gr.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,pl=gr.h2`
  color: ${br.goldHover};
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
`,dl=gr.p`
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
`,fl=gr.div`
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

  @media (max-width: ${xr.tablet}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`,ml=gr.div`
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
`,hl=gr.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  margin: 0;
  padding: 0;
`,gl=gr.h3`
  color: ${br.goldHover};
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
`,wl=gr.p`
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
`,yl=gr.span`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${e=>e.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${br.goldHover};
  font-size: clamp(0.9rem, 1.1vw, 1.2rem);
  margin-left: auto;
  flex-shrink: 0;
`,xl=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych."},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."},{id:4,question:"Czy za realizacj\u0119 projektu otrzymam faktur\u0119?",answer:"Tak. Za ka\u017cd\u0105 us\u0142ug\u0119 wystawiamy faktur\u0119 (bez VAT), kt\xf3r\u0105 otrzymasz na e-mail. Mo\u017cesz j\u0105 w ca\u0142o\u015bci wliczy\u0107 w koszty uzyskania przychodu \u2013 to najprostsze i najbezpieczniejsze rozwi\u0105zanie dla Twojego biznesu. Nie musisz martwi\u0107 si\u0119 o \u017cadne dodatkowe formalno\u015bci, a my zapewniamy Ci pe\u0142n\u0105 transparentno\u015b\u0107 i profesjonalizm w rozliczeniach."},{id:5,question:"Czemu na Allegro ceny us\u0142ug s\u0105 wy\u017csze?",answer:"Wy\u017csza cena na platformie Allegro wynika wy\u0142\u0105cznie z wysokich prowizji i op\u0142at transakcyjnych pobieranych przez operatora. Kontaktuj\u0105c si\u0119 z nami bezpo\u015brednio, omijasz te dodatkowe koszty i otrzymujesz najlepsz\u0105 mo\u017cliw\u0105 ofert\u0119 przy zachowaniu tej samej jako\u015bci i gwarancji. "},{id:6,question:"Co je\u015bli nie mam w\u0142asnych profesjonalnych zdj\u0119\u0107 lub tekst\xf3w?",answer:"Bez obaw, zajmiemy si\u0119 tym. Je\u015bli brakuje Ci fotografii, wygenerujemy dla Twojej marki unikalne grafiki AI, kt\xf3re idealnie oddadz\u0105 klimat Twojego biznesu. Pomo\u017cemy Ci te\u017c ubra\u0107 Twoje pomys\u0142y w profesjonalne s\u0142owa, aby strona od pocz\u0105tku budowa\u0142a Twoje zaufanie. "},{id:7,question:"Czy to autorskie projekty, czy gotowce z sieci?",answer:"Ka\u017cdy element naszej kolekcji stworzyli\u015bmy sami \u2013 od pierwszej linii kodu po ostatni detal wizualny. Nie u\u017cywamy WordPressa ani ci\u0119\u017ckich, powolnych kreator\xf3w stron. Wybieraj\u0105c nas, otrzymujesz unikalny produkt w technologii React.js, a nie masowy szablon, kt\xf3ry posiada co druga firma w Twojej bran\u017cy."},{id:8,question:"Czy b\u0119d\u0119 mie\u0107 pe\u0142n\u0105 kontrol\u0119 i dost\u0119p do strony?",answer:"Jak najbardziej. Przekazujemy Ci komplet hase\u0142 i dost\u0119p\xf3w do Twoich w\u0142asnych kont. Nasz kod jest czysty i uporz\u0105dkowany \u2013 je\u015bli kiedykolwiek zdecydujesz si\u0119 przekaza\u0107 stron\u0119 innemu informatykowi, odnajdzie si\u0119 on w strukturze bez problemu. Jeste\u015b w 100% niezale\u017cna."},{id:9,question:"Jak strona radzi sobie w wyszukiwarce Google (SEO)?",answer:'Wi\u0119kszo\u015b\u0107 stron to ci\u0119\u017ckie projekty na WordPressie, kt\xf3re przez nadmiar zb\u0119dnych wtyczek l\u0105duj\u0105 na ko\u0144cu wynik\xf3w. Nasze strony budujemy "na lekko", co sprawia, \u017ce s\u0105 b\u0142yskawiczne i faworyzowane przez Google. To fundament, kt\xf3ry pozwala realnie powalczy\u0107 o najwy\u017csze pozycje.'},{id:10,question:"Czy strona b\u0119dzie bezpieczna (certyfikat SSL)?",answer:'Tak. Obok adresu Twojej strony zawsze b\u0119dzie widoczna "zielona k\u0142\xf3dka". Certyfikat SSL masz w cenie, co gwarantuje szyfrowanie danych i brak ostrze\u017ce\u0144 w przegl\u0105darkach. Twoja witryna b\u0119dzie w pe\u0142ni bezpieczna dla odwiedzaj\u0105cych.'},{id:11,question:"Jak nawi\u0105za\u0107 z nami wsp\xf3\u0142prac\u0119?",answer:"Masz dwie proste drogi. Mo\u017cesz dokona\u0107 zakupu bezpo\u015brednio przez nasz profil na Allegro lub napisa\u0107 do nas wiadomo\u015b\u0107 e-mail. W odpowiedzi otrzymasz od nas kr\xf3tk\u0105 instrukcj\u0119 i ankiet\u0119, kt\xf3ra pomo\u017ce nam doprecyzowa\u0107 wygl\u0105d Twojej nowej strony. Wi\u0119cej szczeg\xf3\u0142\xf3w na temat ca\u0142ego procesu znajdziesz na naszej podstronie",cooperationLink:!0},{id:12,question:"Co je\u015bli nie mam gotowych tre\u015bci i nie wiem, co napisa\u0107?",answer:"To najcz\u0119stsza obawa, dlatego maksymalnie upro\u015bcili\u015bmy ten proces. Nie musisz by\u0107 pisarzem ani fotografem. Po zakupie otrzymasz od nas prost\u0105, interaktywn\u0105 ankiet\u0119, kt\xf3ra 'wyci\u0105gnie' od Ciebie najwa\u017cniejsze informacje o Twoim biznesie. Na ich podstawie przygotujemy profesjonalne teksty, a je\u015bli brakuje Ci zdj\u0119\u0107 \u2013 wygenerujemy dla Twojej marki unikalne grafiki AI. Nasza strona jest elastyczna: je\u015bli nie masz jeszcze cennika czy zespo\u0142u, po prostu ukryjemy te sekcje, a ca\u0142o\u015b\u0107 nadal b\u0119dzie wygl\u0105da\u0107 luksusowo i sp\xf3jnie. Wi\u0119cej informacji znajdziesz w sekcji",cooperationLink:!0}];const bl=function(){const[e,t]=(0,a.useState)(null);return(0,zr.jsxs)(cl,{children:[(0,zr.jsxs)(ul,{children:[(0,zr.jsx)(pl,{children:"Najcz\u0119\u015bciej Zadawane Pytania"}),(0,zr.jsx)(dl,{children:"Szybkie odpowiedzi na Twoje najbardziej pal\u0105ce w\u0105tpliwo\u015bci"})]}),(0,zr.jsx)(fl,{children:xl.slice(0,4).map(n=>(0,zr.jsxs)(ml,{onClick:()=>{return a=n.id,void t(e===a?null:a);var a},children:[(0,zr.jsxs)(hl,{children:[(0,zr.jsx)(gl,{children:n.question}),(0,zr.jsx)(wl,{isOpen:e===n.id,children:n.answer})]}),(0,zr.jsx)(yl,{isOpen:e===n.id,children:"\u25bc"})]},n.id))})]})},vl=gr.section`
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
`,kl=gr.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,zl=gr.h2`
  color: ${br.goldHover};
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
`,jl=gr.p`
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
`,Sl=gr.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(200px, 26vw, 280px);
  margin-top: 0;
`,Cl=gr.div`
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
`,El=gr.div`
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
`,Pl=gr.div`
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
`,$l=gr.div`
  display: flex;
  gap: 3px;
  margin-bottom: clamp(8px, 1vw, 12px);
  font-size: clamp(12px, 1.2vw, 14px);
`,Tl=gr.span`
  color: #ffd700;
`,_l=gr.p`
  font-size: clamp(12px, 1.3vw, 14px);
  line-height: 1.5;
  color: ${br.testimonialText};
  margin-bottom: clamp(10px, 1.2vw, 15px);
  font-style: normal;
  margin: 0 0 clamp(10px, 1.2vw, 15px) 0;
  font-weight: 500;

  @media (max-width: ${xr.tablet-1}px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
  }

  @media (min-width: ${xr.tablet}px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    overflow: hidden;
  }
`,Ol=gr.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: auto;
  flex-shrink: 0;
`,Nl=gr.strong`
  font-size: clamp(12px, 1.2vw, 14px);
  color: ${br.white};
  font-weight: 600;

  @media (max-width: ${xr.tablet-1}px) {
    font-size: clamp(10px, 0.9vw, 12px);
  }
`,Rl=gr.span`
  font-size: clamp(10px, 1vw, 12px);
  color: ${br.testimonialSubtext};

  @media (max-width: ${xr.tablet-1}px) {
    font-size: clamp(8px, 0.8vw, 10px);
  }
`,Ml=gr.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${br.goldMain};
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
`,Dl=gr.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`,Ll=gr.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  border: 1px solid ${br.testimonialAccentBorder};
  border-radius: 8px;
  color: ${br.testimonialAccent};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${br.testimonialAccentLight};
    border-color: ${br.testimonialAccent};
    color: ${br.white};
  }
`,Al=[{id:1,name:"Magdalena",company:"Salon Kosmetologii Estetycznej",text:"Nareszcie moja strona wygl\u0105da tak luksusowo, jak moje us\u0142ugi. Grafiki s\u0105 ob\u0142\u0119dne \u2013 nikt w mojej bran\u017cy nie ma nic podobnego. Najbardziej zaskoczy\u0142o mnie to, \u017ce wszystko by\u0142o gotowe w dwa dni.",rating:5},{id:2,name:"Tomasz",company:"Doradztwo Biznesowe",text:"Moja poprzednia strona wiecznie si\u0119 zacina\u0142a. Ta od Klary Queen dzia\u0142a b\u0142yskawicznie, nawet na telefonie. Klienci od razu zauwa\u017cyli zmian\u0119. Pe\u0142en profesjonalizm i zero lania wody.",rating:5},{id:3,name:"Agnieszka",company:"Biuro Architektoniczne",text:"Zale\u017ca\u0142o mi na estetyce, kt\xf3ra odda jako\u015b\u0107 moich projekt\xf3w. Studio zrozumia\u0142o moj\u0105 wizj\u0119 w punkt. Strona jest elegancka, czysta i bardzo nowoczesna. \u015awietny kontakt na ka\u017cdym etapie.",rating:5},{id:4,name:"Piotr",company:"Agencja Eventowa Premium",text:"Szybko\u015b\u0107 realizacji w tym studiu to jaki\u015b kosmos. Podczas gdy inni dopiero przygotowywali oferty, tutaj strona ju\u017c by\u0142a gotowa do publikacji. Wszystko dzia\u0142a idealnie, bez \u017cadnych b\u0142\u0119d\xf3w.",rating:5},{id:5,name:"Katarzyna",company:"Coaching & Mentoring",text:"By\u0142am sceptyczna, czy w 48h da si\u0119 zrobi\u0107 co\u015b porz\u0105dnego. Myli\u0142am si\u0119. Strona jest pi\u0119kna, unikalna i co najwa\u017cniejsze \u2013 klienci zacz\u0119li pisa\u0107 do mnie sami. To by\u0142a \u015bwietna inwestycja.",rating:5},{id:6,name:"Robert",company:"Firma Logistyczna",text:"Konkretnie i na temat. Dosta\u0142em nowoczesne narz\u0119dzie, kt\xf3re buduje presti\u017c mojej firmy. Nie musz\u0119 si\u0119 martwi\u0107 o \u017cadne wirusy czy b\u0142\u0119dy \u2013 wszystko po prostu dzia\u0142a jak nale\u017cy.",rating:5},{id:7,name:"Joanna",company:"Kancelaria Prawna",text:"Bardzo merytoryczne podej\u015bcie. Strona jest minimalistyczna, ale bije od niej profesjonalizm. Du\u017cy plus za cierpliwo\u015b\u0107 przy dobieraniu grafik \u2013 efekt ko\u0144cowy jest idealny.",rating:5},{id:8,name:"Marek",company:"Studio Treningu Personalnego",text:"Wi\u0119kszo\u015b\u0107 stron w mojej bran\u017cy wygl\u0105da tak samo. Moja od razu si\u0119 wyr\xf3\u017cnia dzi\u0119ki tym grafikom. Jest dynamiczna, szybka i po prostu chce si\u0119 na niej zosta\u0107 d\u0142u\u017cej.",rating:5},{id:9,name:"Ewa",company:"Projektantka Wn\u0119trz",text:"Ceni\u0119 sobie estetyk\u0119, a Studio Klara Queen dostarczy\u0142o mi projekt, kt\xf3ry jest po prostu pi\u0119kny. Wszystko dopi\u0119te na ostatni guzik w ekspresowym tempie. Polecam ka\u017cdemu.",rating:5},{id:10,name:"\u0141ukasz",company:"Sklep Internetowy (Nisza Premium)",text:"Przej\u015bcie na now\u0105 stron\u0119 to by\u0142a ulga. Wszystko \u0142aduje si\u0119 w u\u0142amku sekundy, a proces zakupowy jest p\u0142ynny. Wida\u0107, \u017ce zesp\xf3\u0142 zna si\u0119 na rzeczy i nie idzie na \u0142atwizn\u0119.",rating:5},{id:11,name:"Karolina",company:"Fotografia \u015alubna",text:"Jako fotograf zwracam uwag\u0119 na ka\u017cdy piksel. Jestem pod ogromnym wra\u017ceniem, jak dobrze dobrano opraw\u0119 wizualn\u0105. Strona jest lekka, szybka i bardzo stylowa.",rating:5},{id:12,name:"Andrzej",company:"Us\u0142ugi Finansowe",text:"Szuka\u0142em solidnego partnera i nie zawiod\u0142em si\u0119. Strona jest bezpieczna, wygl\u0105da nowocze\u015bnie i buduje zaufanie od pierwszej sekundy. \u017badnych problem\xf3w z terminami.",rating:5},{id:13,name:"Natalia",company:"Klinika Stomatologiczna",text:"Zale\u017ca\u0142o nam na nowoczesnym wizerunku. Strona, kt\xf3r\u0105 otrzymali\u015bmy, jest przejrzysta i bardzo intuicyjna dla pacjent\xf3w. Proces wdro\u017cenia trwa\u0142 niesamowicie kr\xf3tko.",rating:5},{id:14,name:"Micha\u0142",company:"Produkcja Mebli na Wymiar",text:"Konkretny kontakt i szybka realizacja. Strona \u015bwietnie eksponuje nasze realizacje. Podoba mi si\u0119, \u017ce nie musz\u0119 traci\u0107 czasu na techniczne detale \u2013 studio zaj\u0119\u0142o si\u0119 wszystkim.",rating:5},{id:15,name:"Daria",company:"Marka Odzie\u017cowa",text:"Moja marka w ko\u0144cu zyska\u0142a opraw\u0119, na jak\u0105 zas\u0142ugiwa\u0142a. Grafiki s\u0105 unikalne, a strona dzia\u0142a bez zarzutu. Ca\u0142o\u015b\u0107 wygl\u0105da bardzo presti\u017cowo i nowocze\u015bnie.",rating:5}];const Il=function(){const e=(0,a.useRef)(null),t=(0,a.useRef)(!1),n=n=>{const a=e.current;if(!a||t.current)return;const r=a.firstElementChild;if(!r)return;const i=parseFloat(getComputedStyle(a).gap)||16,o=r.offsetWidth+i,l=a.scrollWidth-a.clientWidth;t.current=!0,n>0&&a.scrollLeft>=l-2?a.scrollTo({left:0,behavior:"smooth"}):n<0&&a.scrollLeft<=2?a.scrollTo({left:l,behavior:"smooth"}):a.scrollBy({left:n*o,behavior:"smooth"}),setTimeout(()=>{t.current=!1},580)};return(0,zr.jsxs)(vl,{children:[(0,zr.jsxs)(kl,{children:[(0,zr.jsx)(zl,{children:"Opinie Naszych Klient\xf3w"}),(0,zr.jsx)(jl,{children:"To m\xf3wi\u0105 o nas ci, kt\xf3rzy nam zaufali"})]}),(0,zr.jsxs)(Sl,{children:[(0,zr.jsx)(Ml,{onClick:()=>n(-1),"aria-label":"Poprzednia opinia",children:(0,zr.jsx)(ri,{})}),(0,zr.jsx)(Cl,{ref:e,children:Al.map(e=>(0,zr.jsx)(El,{children:(0,zr.jsxs)(Pl,{children:[(0,zr.jsx)($l,{children:[...Array(e.rating)].map((e,t)=>(0,zr.jsx)(Tl,{children:"\u2605"},t))}),(0,zr.jsxs)(_l,{children:['"',e.text,'"']}),(0,zr.jsxs)(Ol,{children:[(0,zr.jsx)(Nl,{children:e.name}),(0,zr.jsx)(Rl,{children:e.company})]})]})},e.id))}),(0,zr.jsx)(Ml,{onClick:()=>n(1),"aria-label":"Nast\u0119pna opinia",children:(0,zr.jsx)(ai,{})})]}),(0,zr.jsx)(Dl,{children:(0,zr.jsx)(Ll,{href:"/testimonials",children:"Przeczytaj wszystkie opinie \u2192"})})]})};const Fl=function(){return(0,zr.jsxs)(zr.Fragment,{children:[(0,zr.jsx)(Ki,{children:(0,zr.jsxs)(Qi,{children:[(0,zr.jsx)(Gi,{children:(0,zr.jsx)(lo,{})}),(0,zr.jsx)(Vi,{children:(0,zr.jsx)(xo,{})})]})}),(0,zr.jsx)(Go,{}),(0,zr.jsx)(sl,{}),(0,zr.jsx)(bl,{}),(0,zr.jsx)(Il,{})]})},Ul=gr.div`
  position: relative;
  z-index: 5;
`,Wl=gr.section`
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
`,Hl=gr.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
`,Bl=gr.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${br.goldMain} 50%,
    transparent 100%
  );
  opacity: 0.25;
  margin: clamp(15px, 2vw, 25px) auto;
  max-width: 200px;
`,Kl=gr.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: clamp(30px, 4vw, 50px);
  color: ${br.goldMain};
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
      ${br.goldMain} 20%,
      ${br.goldMain} 80%,
      transparent 100%
    );
  }
`,Ql=gr.section`
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
      ${br.goldMain},
      transparent
    );
  }
`,Gl=gr.h1`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 700;
  color: ${br.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: clamp(1px, 0.5vw, 3px);
  margin: clamp(35px, 5vw, 50px) 0 clamp(25px, 4vw, 35px);
  text-transform: uppercase;
`,Vl=gr.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: rgba(255, 255, 255, 0.82);
  line-height: clamp(1.6, 3vw, 1.9);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
  font-family: "Manrope", sans-serif;
`,Yl="Wymiar Luksusowej Doskona\u0142o\u015bci",ql="Gdzie wizja spotyka precyzj\u0119. Tworzymy cyfrowe eksperyencje, kt\xf3re wyznaczaj\u0105 standardy bran\u017cy.",Xl={title:"Twoja Kolekcja",paragraphs:[". Stworzyli\u015bmy ekosystem wzorc\xf3w, kt\xf3re wyznaczaj\u0105 standardy - sprawdzone, doskonale zaprojektowane i gotowe do Twojej marki.","Ty wybierasz fundament z naszej autorskiej kolekcji, my dostosowujemy go do Twojej to\u017csamo\u015bci. Rezultat? Estetyka bez kompromis\xf3w i natychmiastowy autorytet w Twojej bran\u017cy.","Ka\u017cdy szablon to efekt setki godzin testowania, niezliczonych iteracji i wiedzy zdobytej pracuj\u0105c z luksusowymi markami na ca\u0142ym \u015bwiecie."],signature:"Autorska Kolekcja \xb7 Sprawdzone Struktury \xb7 Estetyka Bez Kompromis\xf3w"},Zl=[{id:1,label:"Selekcja",value:"1",description:"Autorskie szablony zaprojektowane pod luksusowe marki."},{id:2,label:"Szybko\u015b\u0107",value:"2",description:"Twoja obecno\u015b\u0107 online w 2-4 dni robocze."},{id:3,label:"Sp\xf3jno\u015b\u0107",value:"3",description:"Gwarancja doskona\u0142ego wygl\u0105du na ka\u017cdym urz\u0105dzeniu."}],Jl=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych. "},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."}],es={title:"Gdzie nas znajdziesz?",description:"Nasze projekty dost\u0119pne na najpopularniejszych platformach. Allegro oferuje nas za nieco wy\u017csz\u0105 cen\u0119 ze wzgl\u0119du na ich prowizj\u0119. ",platforms:[{id:1,name:"Facebook",description:"Obserwuj nas na Facebooku, aby by\u0107 zawsze na bie\u017c\u0105co."},{id:2,name:"YouTube",description:"Odkrywaj nasze projekty i inspiracje na YouTube."},{id:3,name:"Allegro",description:"Kupuj nasze szablony w sklepie Allegro (ceny wy\u017csze ze wzgl\u0119du na prowizj\u0119)."}]},ts="Twoja Kolekcja",ns="Nasze Atuty",as="Jak To Dzia\u0142a?",rs="Got\xf3w na transformacj\u0119 cyfrow\u0105?",is=()=>(0,zr.jsxs)(Ql,{children:[(0,zr.jsx)(Gl,{children:Yl}),(0,zr.jsx)(Vl,{children:ql})]}),os=gr.div`
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
`,ls=gr.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: clamp(1.7, 4vw, 2.1);
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
  position: relative;
`,ss=gr.div`
  color: ${br.goldMain};
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
`,cs=()=>(0,zr.jsxs)(os,{children:[Xl.paragraphs.map((e,t)=>(0,zr.jsx)(ls,{children:e},t)),(0,zr.jsx)(ss,{children:Xl.signature})]}),us=gr.div`
  border-left: 2px solid ${br.goldMain};
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
      ${br.goldMain} 0%,
      transparent 100%
    );
  }
`,ps=gr.div`
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
`,ds=gr.h4`
  color: ${br.goldMain};
  margin-bottom: clamp(12px, 2vw, 15px);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  margin-top: 0;
`,fs=gr.p`
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.85);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
`,ms=gr.div`
  width: 100%;
`,hs=gr.button`
  margin-top: clamp(40px, 6vw, 60px);
  padding: clamp(12px, 2vw, 16px) clamp(30px, 4vw, 50px);
  background: linear-gradient(
    135deg,
    ${br.goldMain} 0%,
    #f1d592 100%
  );
  color: ${br.deepBlack};
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
`,gs=()=>{const e=fe();return(0,zr.jsxs)(ms,{children:[(0,zr.jsx)(us,{children:Jl.map(e=>(0,zr.jsxs)(ps,{children:[(0,zr.jsx)(ds,{children:e.question}),(0,zr.jsx)(fs,{children:e.answer})]},e.id))}),(0,zr.jsx)(hs,{onClick:()=>e("/questions"),children:"Zobacz Wi\u0119cej Pyta\u0144"})]})},ws=gr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(30px, 5vw, 50px);
  margin-top: clamp(60px, 8vw, 80px);
  width: 100%;

  @media (max-width: ${xr.tablet}px) {
    grid-template-columns: 1fr;
  }
`,ys=gr.div`
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
    border-color: ${br.goldMain};
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
`,xs=gr.span`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: bold;
  color: ${br.goldMain};
  opacity: 0.95;
  font-family: "Cormorant Garamond", serif;
  line-height: 1;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,bs=gr.span`
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  text-transform: uppercase;
  letter-spacing: clamp(1.5px, 0.5vw, 2.5px);
  color: ${br.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  opacity: 0.9;
`,vs=gr.p`
  font-size: clamp(0.85rem, 1.8vw, 0.98rem);
  line-height: clamp(1.6, 3vw, 1.8);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
`,ks=()=>(0,zr.jsx)(ws,{children:Zl.map(e=>(0,zr.jsxs)(ys,{children:[(0,zr.jsx)(xs,{children:e.value}),(0,zr.jsx)(bs,{children:e.label}),(0,zr.jsx)(vs,{children:e.description})]},e.id))}),zs=gr.section`
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
`,js=gr.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: clamp(30px, 4vw, 50px);
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
`,Ss=(gr.button`
  padding: clamp(14px, 2.5vw, 18px) clamp(35px, 5vw, 60px);
  background: linear-gradient(
    135deg,
    ${br.goldMain} 0%,
    #f1d592 100%
  );
  color: ${br.deepBlack};
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
`,()=>(0,zr.jsx)(zs,{children:(0,zr.jsx)(js,{children:rs})})),Cs=gr.section`
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
`,Es=gr.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: clamp(30px, 4vw, 50px);
  color: ${br.goldMain};
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
      ${br.goldMain} 20%,
      ${br.goldMain} 80%,
      transparent 100%
    );
  }
`,Ps=gr.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: clamp(40px, 6vw, 60px);
  max-width: 600px;
  line-height: clamp(1.6, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
`,$s=gr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(25px, 4vw, 40px);
  width: 100%;
  margin-top: clamp(20px, 3vw, 30px);

  @media (max-width: ${xr.tablet}px) {
    grid-template-columns: 1fr;
  }
`,Ts=gr.a`
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
    border-color: ${br.goldMain};
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
`,_s=gr.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${br.goldMain};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;

  ${Ts}:hover & {
    transform: scale(1.15) rotate(5deg);
  }
`,Os=gr.h3`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  color: ${br.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
`,Ns=gr.p`
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  line-height: clamp(1.5, 2.5vw, 1.7);
  font-weight: 400;
`,Rs=()=>(0,zr.jsxs)(Cs,{children:[(0,zr.jsx)(Es,{children:es.title}),(0,zr.jsx)(Ps,{children:es.description}),(0,zr.jsx)($s,{children:es.platforms.map(e=>{const t=oi.find(t=>t.label===e.name);return(0,zr.jsxs)(Ts,{href:null===t||void 0===t?void 0:t.url,target:"_blank",rel:"noopener noreferrer",children:[(0,zr.jsx)(_s,{children:t&&(0,zr.jsx)(t.icon,{})}),(0,zr.jsx)(Os,{children:e.name}),(0,zr.jsx)(Ns,{children:e.description})]},e.id)})})]}),Ms=()=>(0,zr.jsxs)(Ul,{children:[(0,zr.jsx)(is,{}),(0,zr.jsx)(Bl,{}),(0,zr.jsxs)(Wl,{children:[(0,zr.jsx)(Kl,{children:ts}),(0,zr.jsx)(Hl,{children:(0,zr.jsx)(cs,{})})]}),(0,zr.jsx)(Bl,{}),(0,zr.jsxs)(Wl,{children:[(0,zr.jsx)(Kl,{children:ns}),(0,zr.jsx)(Hl,{style:{maxWidth:"1000px"},children:(0,zr.jsx)(ks,{})})]}),(0,zr.jsx)(Bl,{}),(0,zr.jsxs)(Wl,{children:[(0,zr.jsx)(Kl,{children:as}),(0,zr.jsx)(Hl,{children:(0,zr.jsx)(gs,{})})]}),(0,zr.jsx)(Bl,{}),(0,zr.jsx)(Rs,{}),(0,zr.jsx)(Bl,{}),(0,zr.jsx)(Ss,{})]}),Ds=gr.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,Ls=gr.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`,As=gr.div`
  margin-bottom: clamp(50px, 8vw, 80px);
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
`,Is=gr.h1`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-family: "Cormorant Garamond", serif;
  color: ${br.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(0.5px, 0.5vw, 1px);
`,Fs=gr.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.6;
`,Us=gr.div`
  border-left: 2px solid ${br.goldMain};
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
      ${br.goldMain} 0%,
      transparent 100%
    );
  }
`,Ws=gr.div`
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
`,Hs=gr.h3`
  color: ${br.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  line-height: 1.4;
`,Bs=gr.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
  transition: color 0.3s ease;

  ${Ws}:hover & {
    color: rgba(255, 255, 255, 0.95);
  }
`,Ks=gr.div`
  margin-top: clamp(60px, 10vw, 100px);
  text-align: center;
  padding-top: clamp(40px, 6vw, 60px);
  border-top: 1px solid rgba(212, 175, 55, 0.2);
`,Qs=gr.button`
  padding: clamp(12px, 2vw, 16px) clamp(30px, 4vw, 50px);
  background: linear-gradient(
    135deg,
    ${br.goldMain} 0%,
    #f1d592 100%
  );
  color: ${br.deepBlack};
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
`,Gs=gr.button`
  background: transparent;
  border: none;
  color: ${br.goldMain};
  cursor: pointer;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: inherit;
  padding: 0;
  margin: 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${br.goldHover};
  }
`,Vs={title:"Najcz\u0119stsze Pytania",subtitle:"Masz w\u0105tpliwo\u015bci? Znajd\u017a odpowied\u017a na pytania, kt\xf3re zadaj\u0105 nam nasi klienci"},Ys={backLabel:"Powr\xf3t do strony g\u0142\xf3wnej"},qs=()=>{const e=fe();return(0,zr.jsx)(Ds,{children:(0,zr.jsxs)(Ls,{children:[(0,zr.jsxs)(As,{children:[(0,zr.jsx)(Is,{children:Vs.title}),(0,zr.jsx)(Fs,{children:Vs.subtitle})]}),(0,zr.jsx)(Us,{children:xl.map((t,n)=>(0,zr.jsxs)(Ws,{style:{"--index":n},children:[(0,zr.jsx)(Hs,{children:t.question}),(0,zr.jsxs)(Bs,{children:[t.answer,t.cooperationLink&&(0,zr.jsxs)(zr.Fragment,{children:[" ",(0,zr.jsx)(Gs,{onClick:()=>e("/cooperation"),children:"Wsp\xf3\u0142praca"}),"."]})]})]},t.id))}),(0,zr.jsx)(Ks,{children:(0,zr.jsx)(Qs,{onClick:()=>e("/"),children:Ys.backLabel})})]})})},Xs=gr.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,Zs=gr.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,Js=gr.div`
  text-align: center;
  margin-bottom: clamp(80px, 12vw, 120px);
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
`,ec=gr.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${br.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,tc=gr.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
`,nc={hero:{title:"Wsp\xf3\u0142praca",subtitle:"Prosty proces, pe\u0142na transparentno\u015b\u0107, gwarancja spokojnego snu. Oto, jak budujemy Twoj\u0105 cyfrow\u0105 przysz\u0142o\u015b\u0107."},steps:[{id:1,number:"1",title:"Wyb\xf3r Drogi i Start",content:"Wsp\xf3\u0142prac\u0119 zaczynamy od formalno\u015bci, aby\u015b mog\u0142a spa\u0107 spokojnie. Masz dwie \u015bcie\u017cki:",options:[{label:"Bezpo\u015brednio:",description:"Piszesz do nas e-mail, ustalamy szczeg\xf3\u0142y, przesy\u0142amy dane do faktury (bez VAT) i po op\u0142aceniu ruszamy z kopyta."},{label:"Allegro:",description:"Kupujesz na aukcji, korzystasz z bezpiecznych p\u0142atno\u015bci platformy i automatycznie trafiasz do kolejki realizacji."}],note:"Wa\u017cne: Przyst\u0119pujemy do pracy natychmiast po zaksi\u0119gowaniu wp\u0142aty lub otrzymaniu potwierdzenia z Allegro."},{id:2,number:"2",title:"Strategia i Materia\u0142y",content:"Nie musisz by\u0107 techniczna. Przesy\u0142amy Ci interaktywn\u0105 ankiet\u0119, kt\xf3ra poprowadzi Ci\u0119 za r\u0119k\u0119.",sections:[{label:"Twoje Zadanie:",description:"Wybierasz sekcje, kt\xf3re maj\u0105 si\u0119 pojawi\u0107 (np. O nas, Portfolio, Cennik)."},{label:"Nasze Wsparcie:",description:"Je\u015bli nie masz tekst\xf3w \u2013 przygotujemy je. Je\u015bli brak Ci zdj\u0119\u0107 \u2013 wygenerujemy unikalne grafiki AI."},{label:"Domena:",description:"Podajesz 2-3 propozycje nazwy (np. twojanazwa.pl). My sprawdzamy dost\u0119pno\u015b\u0107 i rejestrujemy t\u0119 woln\u0105."}]},{id:3,number:"3",title:"Realizacja: 48h Roboczych",content:"Tutaj dzieje si\u0119 magia. Kodujemy Twoj\u0105 stron\u0119 w czystym React.js.",details:[{label:"Czas:",description:"Standardowy czas realizacji to 48 godzin roboczych."},{label:"Zasada Wypocz\u0119tego Eksperta:",description:"Liczymy tylko dni robocze (poniedzia\u0142ek \u2013 pi\u0105tek). Weekendy i \u015bwi\u0119ta to czas na regeneracj\u0119, bo tylko wypocz\u0119ty programista gwarantuje kod bez b\u0142\u0119d\xf3w i design na najwy\u017cszym poziomie."},{label:"Technologia:",description:"Konfigurujemy darmowy serwer (GitHub Pages) i spinamy wszystko z Twoj\u0105 now\u0105 domen\u0105."}]},{id:4,number:"4",title:'Przekazanie "Kluczy do Biznesu"',content:"Twoja strona o\u017cywa. Ale na tym nie ko\u0144czymy:",deliverables:["Otrzymujesz od nas komplet hase\u0142 i dost\u0119p\xf3w do konta serwera i domeny.","Dostajesz prost\u0105 instrukcj\u0119, co zrobi\u0107 za rok, \u017ceby przed\u0142u\u017cy\u0107 domen\u0119 (koszt ok. 80 z\u0142 \u2013 bez naszych mar\u017c).","Strona jest Twoj\u0105 w\u0142asno\u015bci\u0105 na zawsze. Mo\u017cesz j\u0105 rozwija\u0107, przenosi\u0107 i modyfikowa\u0107 bez \u017cadnych ogranicze\u0144."]}],guarantee:{title:'Pakiet "Spokojna G\u0142owa"',subtitle:"Twoja Gwarancja",description:"Wiemy, \u017ce biznes si\u0119 zmienia. Numer telefonu mo\u017ce ulec zmianie, cennik mo\u017ce podskoczy\u0107. Dlatego nasza wsp\xf3\u0142praca nie ko\u0144czy si\u0119 na oddaniu strony:",benefits:[{icon:"3x",title:"3 Lata Opieki",description:"Masz u nas 3 darmowe pakiety poprawek do wykorzystania przez 36 miesi\u0119cy."},{icon:"\u26a1",title:"B\u0142yskawiczny Serwis",description:"Potrzebujesz zmiany? Piszesz e-mail, a my wprowadzamy poprawk\u0119 w kodzie."},{icon:"\ud83d\udcb0",title:"Uczciwe Stawki",description:"Po wykorzystaniu darmowych pakiet\xf3w, drobne zmiany to koszt rz\u0119du 10-50 z\u0142. Bez abonament\xf3w, bez naci\u0105gania."}]},materials:{title:"Jak Przygotowa\u0107 Materia\u0142y?",subtitle:"Twoja Checklista",intro:"Nie musisz by\u0107 copywriterem ani fotografem. Nasza strona jest elastyczna \u2013 dopasuje si\u0119 do tego, co masz. Je\u015bli brakuje Ci jakiej\u015b sekcji (np. cennika czy zespo\u0142u), po prostu j\u0105 ukryjemy, a layout nadal b\u0119dzie wygl\u0105da\u0142 perfekcyjnie.",sections:[{icon:"\ud83d\udccb",title:"Co Warto Przygotowa\u0107?",items:[{label:"Fundament (Hero & Domena)",points:["Wymy\u015bl chwytliwe has\u0142o (np. 'Twoje wspomnienia w najlepszym \u015bwietle').","Podaj 2-3 propozycje adresu strony (np. mojafirma.pl). Pami\u0119taj: kr\xf3tko i \u0142atwo do podyktowania. Unikaj nazw zastrze\u017conych marek!"]},{label:"To\u017csamo\u015b\u0107 (O nas & Zesp\xf3\u0142)",points:["Napisz kilka zda\u0144 o swojej pasji i tym, co Ci\u0119 wyr\xf3\u017cnia.","Poka\u017c 'ludzk\u0105 twarz' biznesu \u2013 prze\u015blij zdj\u0119cie przy pracy. Klienci kupuj\u0105 oczami, ale ufaj\u0105 ludziom, kt\xf3rych widz\u0105."]},{label:"Twoje Sukcesy (Statystyki & Portfolio)",points:["Pochwal si\u0119 liczbami (lata pracy, zadowoleni klienci) lub kluczowymi zaletami.","Wybierz do 12 najlepszych zdj\u0119\u0107 do galerii. Dzielimy je na kategorie (np. Biznes, Sesje, Projekty)."]},{label:"Konkrety (Us\u0142ugi & Cennik)",points:["Opisz kr\xf3tko do 10 us\u0142ug.","Podaj ceny lub pakiety. Je\u015bli wyceniasz indywidualnie \u2013 napiszemy o tym!"]},{label:"Kontakt & Social Media",points:["Przygotuj e-mail, telefon i linki do profili (Instagram, Facebook, TikTok itd.).","Sprawimy, \u017ce klient skontaktuje si\u0119 z Tob\u0105 jednym klikni\u0119ciem."]}]},{icon:"\ud83d\udc8e",title:"Nasze Wsparcie Kreatywne",highlight:!0,items:[{label:"Teksty",points:["Na podstawie kr\xf3tkiej ankiety ubierzemy Twoje my\u015bli w profesjonalne s\u0142owa."]},{label:"Grafiki AI",points:["Je\u015bli nie masz w\u0142asnych fotografii do t\u0142a lub sekcji 'O nas', wygenerujemy dla Ciebie unikalne, wysokiej jako\u015bci grafiki AI."]}]},{icon:"\u26a0\ufe0f",title:"Wa\u017cne Informacje Techniczne",items:[{label:"Szybko\u015b\u0107 Ponad Wszystko",points:["Limity zdj\u0119\u0107 (np. do 12 w galerii) stosujemy celowo. Dzi\u0119ki temu Twoja strona \u0142aduje si\u0119 b\u0142yskawicznie na ka\u017cdym smartfonie. W sieci: mniej znaczy wi\u0119cej!"]},{label:"Elastyczno\u015b\u0107",points:["Niezale\u017cnie od tego, czy wybierzesz 5, czy 10 sekcji, my zadbamy o zachowanie idealnych proporcji i estetyki."]},{label:"48h Roboczych",points:["Nasz zegar rusza, gdy otrzymamy od Ciebie komplet materia\u0142\xf3w. Pracujemy w dni robocze, aby dostarczy\u0107 Ci kod najwy\u017cszej jako\u015bci."]}]}]},cta:{primary:"Zacznij Wsp\xf3\u0142prac\u0119",secondary:"Wr\xf3\u0107 do Pyta\u0144"}},ac=()=>(0,zr.jsxs)(Js,{children:[(0,zr.jsx)(ec,{children:nc.hero.title}),(0,zr.jsx)(tc,{children:nc.hero.subtitle})]}),rc=gr.div`
  display: flex;
  flex-direction: column;
  gap: clamp(60px, 10vw, 100px);
  margin-bottom: clamp(80px, 12vw, 120px);
`,ic=gr.div`
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
`,oc=gr.div`
  display: flex;
  align-items: center;
  gap: clamp(20px, 3vw, 30px);
`,lc=gr.div`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: ${br.goldMain};
  line-height: 1;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  min-width: 60px;
  text-align: center;
  background: rgba(212, 175, 55, 0.1);
  padding: clamp(15px, 2vw, 25px);
  border-radius: 10px;
  border: 1px solid rgba(212, 175, 55, 0.2);
`,sc=gr.div`
  padding: clamp(20px, 3vw, 30px);
  background: rgba(212, 175, 55, 0.05);
  border-radius: 10px;
  border-left: 3px solid ${br.goldMain};
  padding-left: clamp(25px, 4vw, 40px);
`,cc=gr.h2`
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  color: ${br.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
  flex: 1;
`,uc=gr.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  margin: 0 0 clamp(15px, 2vw, 20px) 0;
`,pc=gr.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`,dc=gr.div`
  padding: clamp(15px, 2.5vw, 20px);
  background: rgba(212, 175, 55, 0.08);
  border-radius: 8px;
  border-left: 3px solid ${br.goldMain};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    transform: translateX(5px);
  }
`,fc=gr.h4`
  color: ${br.goldMain};
  margin: 0 0 8px 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
`,mc=gr.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 0.95rem);
  line-height: 1.6;
`,hc=gr.div`
  margin-top: clamp(20px, 3vw, 30px);
  padding: clamp(15px, 2.5vw, 25px);
  background: rgba(212, 175, 55, 0.05);
  border-radius: 8px;
  border-top: 2px solid ${br.goldMain};
`,gc=gr.h5`
  color: ${br.goldMain};
  margin: 0 0 8px 0;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`,wc=gr.p`
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  line-height: 1.6;
`,yc=gr.ul`
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
      color: ${br.goldMain};
      font-weight: 700;
    }
  }
`,xc=()=>(0,zr.jsx)(rc,{children:nc.steps.map((e,t)=>(0,zr.jsxs)(ic,{delay:.1*t,children:[(0,zr.jsxs)(oc,{children:[(0,zr.jsx)(lc,{children:e.number}),(0,zr.jsx)(cc,{children:e.title})]}),(0,zr.jsxs)(sc,{children:[(0,zr.jsx)(uc,{children:e.content}),e.options&&(0,zr.jsxs)(zr.Fragment,{children:[(0,zr.jsx)(pc,{children:e.options.map((e,t)=>(0,zr.jsxs)(dc,{children:[(0,zr.jsx)(fc,{children:e.label}),(0,zr.jsx)(mc,{children:e.description})]},t))}),e.note&&(0,zr.jsxs)(hc,{children:[(0,zr.jsx)(gc,{children:"Wa\u017cne"}),(0,zr.jsx)(wc,{children:e.note})]})]}),e.sections&&(0,zr.jsx)(pc,{children:e.sections.map((e,t)=>(0,zr.jsxs)(dc,{children:[(0,zr.jsx)(fc,{children:e.label}),(0,zr.jsx)(mc,{children:e.description})]},t))}),e.details&&(0,zr.jsx)(pc,{children:e.details.map((e,t)=>(0,zr.jsxs)(dc,{children:[(0,zr.jsx)(fc,{children:e.label}),(0,zr.jsx)(mc,{children:e.description})]},t))}),e.deliverables&&(0,zr.jsx)(yc,{children:e.deliverables.map((e,t)=>(0,zr.jsx)("li",{children:e},t))})]})]},e.id))}),bc=gr.section`
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
`,vc=gr.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${br.goldMain};
  margin: 0 0 10px 0;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`,kc=gr.p`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`,zc=gr.p`
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin: 0 0 clamp(40px, 6vw, 60px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`,jc=gr.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 6vw, 60px);
`,Sc=gr.div`
  padding: clamp(30px, 4vw, 40px);
  background: rgba(
    255,
    255,
    255,
    ${e=>e.highlight?"0.06":"0.02"}
  );
  border: 1px solid
    rgba(212, 175, 55, ${e=>e.highlight?"0.3":"0.15"});
  border-left: 4px solid ${br.goldMain};
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
`,Cc=gr.div`
  display: flex;
  align-items: center;
  gap: clamp(15px, 2vw, 25px);
  margin-bottom: clamp(20px, 3vw, 30px);
`,Ec=gr.span`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${br.goldMain};
`,Pc=gr.h3`
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  color: ${br.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,$c=gr.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`,Tc=gr.div`
  padding: clamp(15px, 2.5vw, 20px);
  background: rgba(212, 175, 55, 0.04);
  border-radius: 8px;
  border-left: 2px solid rgba(212, 175, 55, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.08);
    border-left-color: ${br.goldMain};
  }
`,_c=gr.h4`
  color: ${br.goldMain};
  margin: 0 0 clamp(10px, 1.5vw, 15px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
`,Oc=gr.ul`
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
      color: ${br.goldMain};
      font-weight: 700;
      font-size: 1.1em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`,Nc=()=>(0,zr.jsxs)(bc,{children:[(0,zr.jsx)(vc,{children:nc.materials.title}),(0,zr.jsx)(kc,{children:nc.materials.subtitle}),(0,zr.jsx)(zc,{children:nc.materials.intro}),(0,zr.jsx)(jc,{children:nc.materials.sections.map((e,t)=>(0,zr.jsxs)(Sc,{highlight:e.highlight,children:[(0,zr.jsxs)(Cc,{children:[(0,zr.jsx)(Ec,{children:e.icon}),(0,zr.jsx)(Pc,{children:e.title})]}),(0,zr.jsx)($c,{children:e.items.map((e,t)=>(0,zr.jsxs)(Tc,{children:[(0,zr.jsx)(_c,{children:e.label}),(0,zr.jsx)(Oc,{children:e.points.map((e,t)=>(0,zr.jsx)("li",{children:e},t))})]},t))})]},t))})]}),Rc=gr.section`
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
`,Mc=gr.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${br.goldMain};
  margin: 0 0 10px 0;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`,Dc=gr.p`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`,Lc=gr.p`
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin: 0 0 clamp(40px, 6vw, 60px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,Ac=gr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(30px, 4vw, 50px);
`,Ic=gr.div`
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
`,Fc=gr.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${br.goldMain};
  margin-bottom: clamp(15px, 2vw, 25px);
`,Uc=gr.h3`
  color: ${br.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,Wc=gr.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  line-height: 1.7;
`,Hc=()=>(0,zr.jsxs)(Rc,{children:[(0,zr.jsx)(Mc,{children:nc.guarantee.title}),(0,zr.jsx)(Dc,{children:nc.guarantee.subtitle}),(0,zr.jsx)(Lc,{children:nc.guarantee.description}),(0,zr.jsx)(Ac,{children:nc.guarantee.benefits.map((e,t)=>(0,zr.jsxs)(Ic,{children:[(0,zr.jsx)(Fc,{children:e.icon}),(0,zr.jsx)(Uc,{children:e.title}),(0,zr.jsx)(Wc,{children:e.description})]},t))})]}),Bc=gr.div`
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
`,Kc=gr.button`
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
`,Qc=gr(Kc)`
  background: linear-gradient(
    135deg,
    ${br.goldMain} 0%,
    #f1d592 100%
  );
  color: ${br.deepBlack};

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
`,Gc=(gr(Kc)`
  background: transparent;
  color: ${br.goldMain};
  border: 2px solid ${br.goldMain};

  &:hover {
    background: rgba(212, 175, 55, 0.1);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
  }

  &:active {
    opacity: 0.8;
  }
`,()=>{const e=fe();return(0,zr.jsx)(Bc,{children:(0,zr.jsx)(Qc,{onClick:()=>e("/"),children:nc.cta.primary})})}),Vc=()=>(0,zr.jsx)(Xs,{children:(0,zr.jsxs)(Zs,{children:[(0,zr.jsx)(ac,{}),(0,zr.jsx)(xc,{}),(0,zr.jsx)(Nc,{}),(0,zr.jsx)(Hc,{}),(0,zr.jsx)(Gc,{})]})}),Yc=gr.section`
  position: relative;
  z-index: 5;
  width: 100%;
  box-sizing: border-box;
`,qc=gr.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);

  @media (max-width: ${xr.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`,Xc=gr.div`
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
`,Zc=gr.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${br.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,Jc=gr.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${xr.tablet}px) {
    display: none;
  }
`,eu=(gr.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
  max-width: 1200px;
  margin: 0 auto;
`,gr.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: clamp(15px, 2vw, 25px);
  width: 100%;
  justify-items: stretch;
  justify-content: center;
  box-sizing: border-box;
  animation: fadeInUp 0.8s ease-out;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${xr.smallPhone-1}px) {
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
`),tu=gr.a`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;
`,nu=gr.div`
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
      ${br.goldMain},
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
    border-color: ${br.goldMain};
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
`,au=gr.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${nu}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`,ru=gr.div`
  padding: clamp(12px, 2.5vw, 18px);
  display: flex;
  flex-direction: column;
  flex: 1;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
`,iu=gr.h3`
  font-size: clamp(0.95rem, 1.8vw, 1.15rem);
  color: ${br.goldMain};
  margin: 0 0 clamp(6px, 1.2vw, 10px) 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`,ou=gr.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  line-height: 1.5;
  margin: 0 0 auto 0;
  flex: 1;
  font-weight: 300;
`,lu=gr.div`
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
`,su=gr.span`
  font-size: clamp(1rem, 1.8vw, 1.3rem);
  color: ${br.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
`,cu=gr.button`
  padding: clamp(6px, 1.2vw, 10px) clamp(15px, 2.5vw, 25px);
  background: linear-gradient(
    135deg,
    ${br.goldMain} 0%,
    #f1d592 100%
  );
  color: ${br.deepBlack};
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
`,uu=gr.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(4px, 1vw, 8px);
`,pu=gr.div`
  display: flex;
  gap: clamp(8px, 1.5vw, 12px);
  margin-bottom: 0;
  justify-content: flex-end;
  padding-right: clamp(10px, 2vw, 30px);

  @media (min-width: 821px) {
    display: none;
  }
`,du=gr.button`
  width: clamp(40px, 8vw, 50px);
  height: clamp(40px, 8vw, 50px);
  border-radius: 10px;
  border: 2px solid
    ${e=>e.active?br.goldMain:"rgba(212, 175, 55, 0.3)"};
  background: ${e=>e.active?`linear-gradient(135deg, ${br.goldMain} 0%, #f1d592 100%)`:"rgba(46, 8, 16, 0.5)"};
  color: ${e=>e.active?br.deepBlack:br.goldMain};
  font-size: clamp(1rem, 2vw, 1.3rem);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${br.goldMain};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`,fu=gr.div`
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
`,mu=gr.a`
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
    border-color: ${br.goldMain};
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
`,hu=gr.img`
  width: clamp(80px, 20vw, 120px);
  height: clamp(80px, 20vw, 120px);
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${mu}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`,gu=gr.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: clamp(8px, 1.5vw, 12px);
  min-width: 0;
`,wu=gr.h3`
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: ${br.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`,yu=gr.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  line-height: 1.5;
  margin: 0;
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,xu=gr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(10px, 2vw, 15px);
  padding-top: clamp(8px, 1.5vw, 12px);
  border-top: 1px solid rgba(212, 175, 55, 0.25);
`,bu=gr.span`
  font-size: clamp(0.95rem, 1.8vw, 1.15rem);
  color: ${br.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
`,vu=gr.button`
  padding: clamp(6px, 1.2vw, 10px) clamp(15px, 2.5vw, 25px);
  background: linear-gradient(
    135deg,
    ${br.goldMain} 0%,
    #f1d592 100%
  );
  color: ${br.deepBlack};
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
`,ku=[{id:1,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:2,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:3,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:4,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:5,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:6,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:7,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:8,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:9,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:10,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:11,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:12,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:13,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:14,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:15,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:16,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:17,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:18,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:19,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:20,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:21,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:22,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:23,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:24,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:25,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:26,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:27,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:28,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:29,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:30,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]}],zu="Nasze Projekty",ju="Odkryj gotowe szablony stron,kt\xf3re mog\u0105 transformowa\u0107 Twoj\u0105 mark\u0119",Su="\u2190 Wr\xf3\u0107 do ofert",Cu="Preview szablonu",Eu="O szablonie",Pu="Szablon zawiera:",$u=gr.div`
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
`,Tu=gr.button`
  flex-shrink: 0;
  width: clamp(35px, 4vw, 48px);
  height: clamp(35px, 4vw, 48px);
  border-radius: 8px;
  background: ${e=>e.active?`linear-gradient(135deg, ${br.goldMain} 0%, #f1d592 100%)`:"rgba(46, 8, 16, 0.6)"};
  color: ${e=>e.active?br.deepBlack:br.goldMain};
  border: 2px solid
    ${e=>e.active?br.goldMain:"rgba(212, 175, 55, 0.4)"};
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
    border-color: ${br.goldMain};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: rgba(46, 8, 16, 0.4);
  }
`,_u=gr.input`
  width: clamp(50px, 8vw, 70px);
  height: clamp(35px, 4vw, 48px);
  border: 2px solid rgba(212, 175, 55, 0.4);
  border-radius: 8px;
  background: rgba(46, 8, 16, 0.6);
  color: ${br.goldMain};
  text-align: center;
  font-size: clamp(0.65rem, 1rem, 0.8rem);
  font-weight: 600;
  padding: clamp(6px, 1vw, 10px);
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${br.goldMain};
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
    -moz-appearance: textfield;
  }
`,Ou=gr.span`
  font-size: clamp(0.8rem, 1.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  white-space: nowrap;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,Nu=gr.div`
  width: 1px;
  height: clamp(20px, 2vw, 30px);
  background: rgba(212, 175, 55, 0.2);
`,Ru=e=>{let{currentPage:t,totalPages:n,onPageChange:r}=e;const[i,o]=(0,a.useState)(""),l=e=>{const t=e.target.value.trim();if(""===t)return void o("");const a=parseInt(t,10);!isNaN(a)&&a>=1&&a<=n?(r(a),o("")):a>n?(r(n),o("")):a<1&&(r(1),o(""))};return n<=1?null:(0,zr.jsxs)($u,{children:[(0,zr.jsx)(Tu,{onClick:()=>{r(1)},disabled:1===t,"aria-label":"Pierwsza strona",title:"Pierwsza strona",children:(0,zr.jsx)(ei,{})}),(0,zr.jsx)(Tu,{onClick:()=>{t>1&&r(t-1)},disabled:1===t,"aria-label":"Poprzednia strona",title:"Poprzednia strona",children:(0,zr.jsx)(ri,{})}),(0,zr.jsx)(Nu,{}),(0,zr.jsxs)(Ou,{children:[(0,zr.jsx)("span",{children:t}),(0,zr.jsx)("span",{style:{margin:"0 4px"},children:"/"}),(0,zr.jsx)("span",{children:n})]}),(0,zr.jsx)(_u,{type:"number",placeholder:"Id\u017a do",value:i,onChange:e=>o(e.target.value),onBlur:l,onKeyPress:e=>{"Enter"===e.key&&l(e)},min:"1",max:n,"aria-label":"Wpisz numer strony",title:"Wpisz numer strony i naci\u015bnij Enter"}),(0,zr.jsx)(Nu,{}),(0,zr.jsx)(Tu,{onClick:()=>{t<n&&r(t+1)},disabled:t===n,"aria-label":"Nast\u0119pna strona",title:"Nast\u0119pna strona",children:(0,zr.jsx)(ai,{})}),(0,zr.jsx)(Tu,{onClick:()=>{r(n)},disabled:t===n,"aria-label":"Ostatnia strona",title:"Ostatnia strona",children:(0,zr.jsx)(Jr,{})})]})},Mu=()=>{const e="/klara-queen",[t,n]=(0,a.useState)(1),[r,i]=(0,a.useState)(12),[o,l]=(0,a.useState)("grid"),[s,c]=(0,a.useState)(!1);(0,a.useEffect)(()=>{const e=()=>{const e=window.innerWidth<820;c(e),i(e?6:12)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const u=Math.ceil(ku.length/r),p=(t-1)*r,d=p+r,f=ku.slice(p,d);return(0,zr.jsxs)(uu,{children:[(0,zr.jsxs)(pu,{children:[(0,zr.jsx)(du,{onClick:()=>l("grid"),active:"grid"===o,"aria-label":"Widok kafelk\xf3w",title:"Widok kafelk\xf3w",children:(0,zr.jsx)(Zr,{})}),(0,zr.jsx)(du,{onClick:()=>l("list"),active:"list"===o,"aria-label":"Widok listy",title:"Widok listy",children:(0,zr.jsx)(ti,{})})]}),"grid"===o?(0,zr.jsx)(eu,{children:f.map(t=>(0,zr.jsx)(tu,{href:`${e}/offer/${t.id}`,target:"_blank",rel:"noopener noreferrer",children:(0,zr.jsxs)(nu,{children:[(0,zr.jsx)(au,{src:t.image,alt:t.title}),(0,zr.jsxs)(ru,{children:[(0,zr.jsx)(iu,{children:t.title}),(0,zr.jsx)(ou,{children:t.shortDescription}),(0,zr.jsxs)(lu,{children:[(0,zr.jsx)(su,{children:t.price}),(0,zr.jsx)(cu,{children:"Szczeg\xf3\u0142y"})]})]})]})},t.id))}):(0,zr.jsx)(fu,{children:f.map(t=>(0,zr.jsxs)(mu,{href:`${e}/offer/${t.id}`,target:"_blank",rel:"noopener noreferrer",children:[(0,zr.jsx)(hu,{src:t.image,alt:t.title}),(0,zr.jsxs)(gu,{children:[(0,zr.jsx)(wu,{children:t.title}),(0,zr.jsx)(yu,{children:t.shortDescription}),(0,zr.jsxs)(xu,{children:[(0,zr.jsx)(bu,{children:t.price}),(0,zr.jsx)(vu,{children:"Szczeg\xf3\u0142y"})]})]})]},t.id))}),(0,zr.jsx)(Ru,{currentPage:t,totalPages:u,onPageChange:e=>{n(e)}})]})},Du=gr.div`
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
`,Lu=gr.button`
  background: transparent;
  border: 2px solid ${br.goldMain};
  color: ${br.goldMain};
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
`,Au=gr.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 7vw, 70px);
`,Iu=(gr.div`
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
`,gr.div`
  text-align: center;
  padding: clamp(40px, 8vw, 80px);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${br.goldMain};
`),Fu=gr.section`
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
`,Uu=gr.div`
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
      ${br.goldMain} 50%,
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
`,Wu=gr.h1`
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: ${br.goldMain};
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
`,Hu=gr.p`
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
    background: ${br.goldMain};
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
`,Bu=gr.div`
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
      ${br.goldMain} 0%,
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
`,Ku=gr.span`
  font-size: clamp(1.3rem, 2.8vw, 2rem);
  font-weight: 700;
  color: ${br.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 821px) {
    font-size: clamp(0.95rem, 2vw, 1.3rem);
    letter-spacing: 0.6px;
  }
`,Qu=(gr.img`
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
`,gr.div`
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
`),Gu=gr.div`
  position: relative;
  display: block;
  margin: 0 auto clamp(30px, 5vw, 50px) auto;
  width: fit-content;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
`,Vu=gr.div`
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
`,Yu=gr.span`
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
`,qu=gr.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: rgba(212, 175, 55, 0.9);
  border: 2px solid ${br.goldMain};
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
    background: ${br.goldMain};
    transform: scale(1.1);
  }

  @media (max-width: 821px) {
    width: 35px;
    height: 35px;
    bottom: 12px;
    right: 12px;
    font-size: 1rem;
  }
`,Xu=gr.img`
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
`,Zu=gr.div`
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
`,Ju=gr.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid
    ${e=>e.isActive?br.goldMain:"rgba(212, 175, 55, 0.2)"};
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${e=>e.isActive?1:.6};
  box-shadow: ${e=>e.isActive?"0 8px 20px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.2)":"0 4px 12px rgba(0, 0, 0, 0.2)"};
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;

  &:hover {
    border-color: ${br.goldMain};
    opacity: 1;
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
  }

  @media (max-width: 821px) {
    height: 55px;
    border-radius: 8px;
    border: 2px solid
      ${e=>e.isActive?br.goldMain:"rgba(212, 175, 55, 0.2)"};
    box-shadow: ${e=>e.isActive?"0 6px 16px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(212, 175, 55, 0.2)":"0 3px 10px rgba(0, 0, 0, 0.25), inset 0 0.5px 0 rgba(212, 175, 55, 0.05)"};

    &:hover {
      transform: scale(1.08) translateY(-2px);
      box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
    }
  }
`,ep=gr.span`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: ${br.goldMain};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.3);
`,tp=gr.div`
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
`,np=gr.div`
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
`,ap=gr.img`
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
`,rp=gr.span`
  position: fixed;
  top: 120px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: ${br.goldMain};
  padding: 10px 18px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.5);
  z-index: 999999;
`,ip=gr.button`
  position: absolute;
  top: 50%;
  ${e=>e.left?"left: 20px;":"right: 20px;"}
  transform: translateY(-50%);
  background: rgba(212, 175, 55, 0.2);
  border: 2px solid ${br.goldMain};
  color: ${br.goldMain};
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
`,op=gr.button`
  position: fixed;
  top: 120px;
  right: 20px;
  background: rgba(212, 175, 55, 0.2);
  border: 2px solid ${br.goldMain};
  color: ${br.goldMain};
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
`,lp=e=>{let{images:t,title:n}=e;const[r,i]=(0,a.useState)(0),[o,l]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!o)return;const e=e=>{"ArrowLeft"===e.key?i(e=>(e-1+t.length)%t.length):"ArrowRight"===e.key?i(e=>(e+1)%t.length):"Escape"===e.key&&l(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o,t.length]),t&&0!==t.length?(0,zr.jsxs)(zr.Fragment,{children:[(0,zr.jsxs)(Qu,{children:[(0,zr.jsxs)(Gu,{onContextMenu:e=>e.preventDefault(),onTouchStart:e=>{e.touches.length>1&&e.preventDefault()},children:[(0,zr.jsx)(Xu,{src:t[r],alt:`${n} - zdj\u0119cie ${r+1}`,onClick:()=>l(!0),onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault(),style:{cursor:"pointer",userSelect:"none"}}),(0,zr.jsx)(Vu,{children:(0,zr.jsx)(Yu,{children:"www.studioklara.pl"})}),(0,zr.jsx)(qu,{onClick:()=>l(!0),children:"\u26f6"})]}),(0,zr.jsx)(Zu,{children:t.map((e,t)=>(0,zr.jsx)(Ju,{src:e,alt:`Miniatura ${t+1}`,isActive:r===t,onClick:()=>i(t),onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault()},t))}),(0,zr.jsxs)(ep,{children:[r+1," / ",t.length]})]}),o&&(0,zr.jsxs)(tp,{onClick:()=>l(!1),children:[(0,zr.jsxs)(np,{onClick:e=>e.stopPropagation(),children:[(0,zr.jsxs)(Gu,{style:{margin:0,width:"100%",height:"100%",maxHeight:"none"},children:[(0,zr.jsx)(ap,{src:t[r],alt:`${n} - ${r+1}`,onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault()}),(0,zr.jsx)(Vu,{style:{opacity:.35},children:(0,zr.jsx)(Yu,{children:"www.studioklara.pl"})})]}),(0,zr.jsxs)(rp,{children:[r+1," / ",t.length]}),(0,zr.jsx)(ip,{left:!0,onClick:()=>i(e=>(e-1+t.length)%t.length),children:"\u2039"}),(0,zr.jsx)(ip,{onClick:()=>i(e=>(e+1)%t.length),children:"\u203a"})]}),(0,zr.jsx)(op,{onClick:()=>l(!1),children:"\u2715"})]})]}):null},sp=e=>{let{title:t,subtitle:n,price:a,images:r}=e;return(0,zr.jsxs)(Fu,{children:[(0,zr.jsxs)(Uu,{children:[(0,zr.jsx)(Wu,{children:t}),(0,zr.jsx)(Hu,{children:n}),a&&(0,zr.jsx)(Bu,{children:(0,zr.jsx)(Ku,{children:a})})]}),(0,zr.jsx)(lp,{images:r,title:t})]})},cp=gr.section`
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
`,up=gr.h2`
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  color: ${br.goldMain};
  margin: 0 0 clamp(20px, 3vw, 35px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-style: italic;
`,pp=(gr.p`
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.9;
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.3px;
`,gr.section`
  animation: fadeInUp 0.6s ease-out 0.3s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(20px, 3vw, 30px);
  border-radius: 15px;
  border: 1px solid rgba(212, 175, 55, 0.1);

  ${up} {
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    margin: 0 0 clamp(15px, 2vw, 20px) 0;
  }
`),dp=gr.div`
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
`,fp=gr.iframe`
  display: block;
  border-radius: 13px;
  width: 100%;
  height: 100%;
  border: none;
`,mp=e=>{let{title:t,youtubeUrl:n}=e;return(0,zr.jsxs)(pp,{children:[(0,zr.jsx)(up,{children:t}),(0,zr.jsx)(dp,{children:(0,zr.jsx)(fp,{src:n,title:t,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})},hp=gr.section`
  animation: fadeInUp 0.6s ease-out 0.4s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(30px, 4.5vw, 45px);
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.1);
`,gp=gr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(20px, 3vw, 30px);
`,wp=gr.li`
  display: flex;
  align-items: flex-start;
  gap: clamp(15px, 3vw, 20px);
  padding: clamp(20px, 3vw, 28px);
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.08) 0%,
    rgba(212, 175, 55, 0.03) 100%
  );
  border-left: 4px solid ${br.goldMain};
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
`,yp=gr.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: clamp(30px, 4vw, 40px);
  width: clamp(30px, 4vw, 40px);
  height: clamp(30px, 4vw, 40px);
  background: ${br.goldMain};
  color: ${br.deepBlack};
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.2em;
  flex-shrink: 0;
`,xp=gr.span`
  flex: 1;
`,bp=e=>{let{title:t,features:n}=e;return(0,zr.jsxs)(hp,{children:[(0,zr.jsx)(up,{children:t}),(0,zr.jsx)(gp,{children:n.map((e,t)=>(0,zr.jsxs)(wp,{children:[(0,zr.jsx)(yp,{children:"\u2713"}),(0,zr.jsx)(xp,{children:e})]},t))})]})},vp=gr.section`
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
      ${br.goldMain},
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
`,kp=gr.h3`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${br.goldMain};
  margin: 0 0 clamp(35px, 6vw, 50px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
  line-height: 1.3;
`,zp=gr.div`
  display: flex;
  gap: clamp(15px, 3vw, 30px);
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,jp=gr.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: clamp(14px, 3vw, 18px) clamp(35px, 6vw, 60px);
  background: linear-gradient(
    135deg,
    ${br.goldMain} 0%,
    #f1d592 100%
  );
  color: ${br.deepBlack};
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
`,Sp=gr(jp)`
  background: transparent;
  color: ${br.goldMain};
  border: 2px solid ${br.goldMain};
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.15);

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.3);
  }
`,Cp=(gr.div`
  text-align: center;
  padding: clamp(40px, 8vw, 80px);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${br.goldMain};
`,e=>{var t;let{title:n}=e;const a=null===(t=oi.find(e=>"Allegro"===e.label))||void 0===t?void 0:t.url;return(0,zr.jsxs)(vp,{children:[(0,zr.jsx)(kp,{children:"Interesuje Ci\u0119 ten szablon?"}),(0,zr.jsxs)(zp,{children:[(0,zr.jsx)(jp,{href:`mailto:${hi}?subject=Zainteresowanie szablonk\u0105: ${n}`,children:"Napisz email"}),(0,zr.jsx)(Sp,{href:a,target:"_blank",rel:"noopener noreferrer",children:"Zakup Allegro"})]})]})}),Ep=e=>{let{offerId:t}=e;const n=fe(),a=ku.find(e=>e.id===t);return a?(0,zr.jsxs)(Du,{children:[(0,zr.jsx)(Lu,{onClick:()=>n(-1),children:Su}),(0,zr.jsx)(sp,{title:a.title,subtitle:a.shortDescription,price:a.price,images:a.images}),(0,zr.jsxs)(Au,{children:[(0,zr.jsx)(mp,{title:Cu,youtubeUrl:a.youtubeUrl}),(0,zr.jsx)(cp,{title:Eu,description:a.fullDescription}),(0,zr.jsx)(bp,{title:Pu,features:a.features}),(0,zr.jsx)(Cp,{title:a.title})]})]}):(0,zr.jsx)(Du,{children:(0,zr.jsx)(Iu,{children:"Szablon nie znaleziony"})})},Pp=()=>{const{id:e}=me();return e?(0,zr.jsx)(Ep,{offerId:parseInt(e)}):(0,zr.jsx)(Yc,{children:(0,zr.jsxs)(qc,{children:[(0,zr.jsxs)(Xc,{children:[(0,zr.jsx)(Zc,{children:zu}),(0,zr.jsx)(Jc,{children:ju})]}),(0,zr.jsx)(Mu,{})]})})},$p=gr.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,Tp=gr.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,_p=gr.div`
  text-align: center;
  margin-bottom: clamp(60px, 10vw, 100px);
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
`,Op=gr.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${br.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,Np=gr.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
`,Rp=gr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: clamp(20px, 4vw, 40px);
  margin-top: clamp(40px, 8vw, 80px);

  @media (max-width: 821px) {
    grid-template-columns: 1fr;
  }
`,Mp=gr.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-8px);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`,Dp=gr.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
`,Lp=gr.div`
  padding: clamp(20px, 4vw, 30px);
  display: flex;
  flex-direction: column;
  flex: 1;
`,Ap=gr.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
`,Ip=gr.h3`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: ${br.white};
  margin: 0 0 12px 0;
  font-weight: 600;
  line-height: 1.4;
  font-family: "Cormorant Garamond", serif;
`,Fp=gr.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 16px;
`,Up=gr.span`
  font-size: 0.9rem;
  color: ${br.gold};
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  ${Mp}:hover & {
    gap: 12px;
  }

  &::after {
    content: "→";
    transition: transform 0.3s ease;
  }

  ${Mp}:hover &::after {
    transform: translateX(4px);
  }
`;const Wp=function(){return(0,zr.jsx)($p,{children:(0,zr.jsxs)(Tp,{children:[(0,zr.jsxs)(_p,{children:[(0,zr.jsx)(Op,{children:"Aktualno\u015bci"}),(0,zr.jsx)(Np,{children:"B\u0105d\u017a na bie\u017c\u0105co z najnowszymi wpisami z naszego bloga. Dzielimy si\u0119 wiedz\u0105 o technologii, designie i procesie tworzenia luksusowych do\u015bwiadcze\u0144 cyfrowych."})]}),(0,zr.jsx)(Rp,{children:ll.map(e=>(0,zr.jsx)(Mp,{children:(0,zr.jsxs)(wt,{to:`/blog/${e.id}`,children:[(0,zr.jsx)(Dp,{src:e.image,alt:e.title}),(0,zr.jsxs)(Lp,{children:[(0,zr.jsx)(Ap,{children:e.date}),(0,zr.jsx)(Ip,{children:e.title}),(0,zr.jsx)(Fp,{children:e.excerpt}),(0,zr.jsx)(Up,{children:"Czytaj wi\u0119cej"})]})]})},e.id))})]})})},Hp=gr.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,Bp=gr.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,Kp=gr.div`
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
`,Qp=gr.h1`
  font-size: clamp(2rem, 6vw, 3rem);
  font-family: "Cormorant Garamond", serif;
  color: ${br.white};
  margin: 0 0 20px 0;
  font-weight: 700;
  line-height: 1.3;
`,Gp=gr.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-weight: 500;
  letter-spacing: 1px;
`,Vp=gr.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: clamp(40px, 8vw, 60px);
  display: block;
`,Yp=gr.div`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  line-height: 1.8;
  letter-spacing: 0.3px;

  h2 {
    font-size: clamp(1.4rem, 3vw, 1.8rem);
    font-family: "Cormorant Garamond", serif;
    color: ${br.white};
    margin: clamp(40px, 6vw, 60px) 0 20px 0;
    font-weight: 600;
    line-height: 1.3;
  }

  h3 {
    font-size: clamp(1.1rem, 2.2vw, 1.4rem);
    color: ${br.white};
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
    color: ${br.gold};
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
      color: ${br.gold};
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
    color: ${br.gold};
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  blockquote {
    border-left: 4px solid ${br.gold};
    padding-left: 20px;
    margin: 30px 0;
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
  }
`,qp=gr.div`
  margin-top: clamp(60px, 10vw, 100px);
  padding-top: clamp(40px, 6vw, 60px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,Xp=gr.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${br.gold};
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
`;const Zp=function(e){let{article:t,children:n}=e;return(0,zr.jsx)(Hp,{children:(0,zr.jsxs)(Bp,{children:[(0,zr.jsxs)(Kp,{children:[(0,zr.jsx)(Qp,{children:t.title}),(0,zr.jsx)(Gp,{children:t.date})]}),(0,zr.jsx)(Vp,{src:t.image,alt:t.title}),(0,zr.jsx)(Yp,{children:n}),(0,zr.jsx)(qp,{children:(0,zr.jsx)(wt,{to:"/blog",children:(0,zr.jsx)(Xp,{children:"Wr\xf3\u0107 do aktualno\u015bci"})})})]})})};const Jp=function(){const e=ll.find(e=>"startujemy-z-aktualnosciami"===e.id);return(0,zr.jsxs)(Zp,{article:e,children:[(0,zr.jsx)("h1",{children:"Startujemy z Aktualno\u015bciami \u2013 Sekcja tworzona z my\u015bl\u0105 o Was"}),(0,zr.jsx)("p",{children:(0,zr.jsx)("strong",{children:"30 stycznia 2026"})}),(0,zr.jsx)("p",{children:"Kilka miesi\u0119cy temu zadali\u015bmy sobie kluczowe pytanie: \u201eCzego naprawd\u0119 chc\u0105 dowiedzie\u0107 si\u0119 nasi klienci?\u201d. Odpowied\u017a by\u0142a jednoznaczna \u2013 szukacie rzetelnej wiedzy o trendach w webdesignie, technologiach, kt\xf3rych u\u017cywamy, oraz wgl\u0105du w procesy, kt\xf3re stoj\u0105 za sukcesem Waszych marek."}),(0,zr.jsx)("h2",{children:"Dlaczego zaczynamy w\u0142a\u015bnie teraz?"}),(0,zr.jsx)("p",{children:"Studio Klara Queen od pocz\u0105tku stawia\u0142o na jako\u015b\u0107. Przez d\u0142ugi czas s\u0105dzili\u015bmy, \u017ce najlepiej przem\xf3wi za nas portfolio i opinie zadowolonych klient\xf3w. To prawda, ale w dzisiejszych czasach to tylko cz\u0119\u015b\u0107 historii."}),(0,zr.jsxs)("p",{children:["W 2026 roku obecno\u015b\u0107 w sieci to co\u015b wi\u0119cej ni\u017c pi\u0119kna witryna."," ",(0,zr.jsx)("strong",{children:"To nieustanny dialog"}),". To pokazywanie swojej ekspertyzy w praktyce, edukacja i autentyczne dzielenie si\u0119 wiedz\u0105 oraz procesem tw\xf3rczym."]}),(0,zr.jsx)("p",{children:"Nasi klienci regularnie zadaj\u0105 nam pytania:"}),(0,zr.jsxs)("ul",{children:[(0,zr.jsx)("li",{children:"\u201eIle czasu realnie trwa stworzenie profesjonalnej strony?\u201d"}),(0,zr.jsx)("li",{children:"\u201eDlaczego stawiacie na React, a nie na inne rozwi\u0105zania?\u201d"}),(0,zr.jsx)("li",{children:"\u201eJak w praktyce dbacie o bezpiecze\u0144stwo moich danych?\u201d"}),(0,zr.jsx)("li",{children:"\u201eCzy rzeczywi\u015bcie mo\u017cna stworzy\u0107 stron\u0119 premium w 48 godzin?\u201d"})]}),(0,zr.jsx)("p",{children:"Zamiast odpowiada\u0107 ka\u017cdemu z osobna, postanowili\u015bmy stworzy\u0107 tutaj przestrze\u0144, kt\xf3ra stanie si\u0119 baz\u0105 wiedzy dla ka\u017cdego, kto ceni jako\u015b\u0107 w internecie."}),(0,zr.jsx)("h2",{children:"Co znajdziesz w sekcji Aktualno\u015bci?"}),(0,zr.jsx)("p",{children:"Ka\u017cdy artyku\u0142 b\u0119dzie oparty na rzeczywistych sytuacjach z \u017cycia naszego studia oraz wiedzy, kt\xf3r\u0105 gromadzili\u015bmy przez lata intensywnej pracy."}),(0,zr.jsx)("p",{children:(0,zr.jsx)("strong",{children:"B\u0119dziemy pisa\u0107 o:"})}),(0,zr.jsxs)("ol",{children:[(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Case Studies"})," \u2013 analiza konkretnych projekt\xf3w, wyniki, wyzwania i rozwi\u0105zania, kt\xf3re przynios\u0142y realne efekty."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Technologia"})," \u2013 dlaczego wybieramy czysty kod zamiast gotowych system\xf3w CMS, jak optymalizujemy szybko\u015b\u0107 i gwarantujemy bezpiecze\u0144stwo."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Proces"})," \u2013 jak naprawd\u0119 pracujemy, ile trwa ka\u017cdy etap i co dzieje si\u0119 \u201eza kulisami\u201d Twojego projektu."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Nowo\u015bci i Trendy"})," \u2013 rola AI w designie, optymalizacja pod k\u0105tem Google oraz podej\u015bcie mobile-first w wersji premium."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Edukacja"})," \u2013 praktyczne poradniki dla przedsi\u0119biorc\xf3w, kt\xf3rzy chc\u0105 rozumie\u0107 swoj\u0105 stron\u0119 i \u015bwiadomie budowa\u0107 mark\u0119."]})]}),(0,zr.jsx)("h2",{children:"Dla kogo tworzymy te tre\u015bci?"}),(0,zr.jsx)("p",{children:(0,zr.jsx)("strong",{children:"Dla lider\xf3w biznesu i marek premium:"})}),(0,zr.jsxs)("ul",{children:[(0,zr.jsx)("li",{children:"Chcesz wiedzie\u0107, dlaczego warto inwestowa\u0107 w jako\u015b\u0107 kodu, a nie w p\xf3\u0142\u015brodki."}),(0,zr.jsx)("li",{children:"Zale\u017cy Ci na bezkompromisowej szybko\u015bci i bezpiecze\u0144stwie."}),(0,zr.jsx)("li",{children:"Szukasz partnera, kt\xf3ry my\u015bli o Twoim biznesie strategicznie, a nie tylko dostarcza gotowy produkt."})]}),(0,zr.jsx)("p",{children:(0,zr.jsx)("strong",{children:"Dla pasjonat\xf3w designu i technologii:"})}),(0,zr.jsxs)("ul",{children:[(0,zr.jsx)("li",{children:"Chcesz \u015bledzi\u0107 nasze podej\u015bcie do nowoczesnej architektury aplikacji."}),(0,zr.jsx)("li",{children:"Interesuje Ci\u0119, dlaczego stawiamy na modularno\u015b\u0107 komponent\xf3w i centralizacj\u0119 danych."}),(0,zr.jsx)("li",{children:"Szukasz do\u015bwiadcze\u0144 prosto z linii produkcyjnej studia, gdzie liczy si\u0119 ka\u017cda milisekunda \u0142adowania."})]}),(0,zr.jsx)("h2",{children:"Nasza obietnica"}),(0,zr.jsx)("p",{children:"Stawiamy na jako\u015b\u0107, a nie na ilo\u015b\u0107. Nie obiecujemy artyku\u0142\xf3w codziennie \u2013 obiecujemy, \u017ce ka\u017cdy wpis b\u0119dzie rzetelnym materia\u0142em, pe\u0142nym autentycznej wiedzy, a nie pust\u0105 tre\u015bci\u0105 tworzon\u0105 pod algorytmy."}),(0,zr.jsx)("h2",{children:"Dzi\u0119kujemy"}),(0,zr.jsx)("p",{children:"Dzi\u0119kujemy Wam \u2013 naszym klientom. To Wasze pytania i sukcesy zainspirowa\u0142y nas do publicznego dzielenia si\u0119 wiedz\u0105."}),(0,zr.jsx)("p",{children:"Zapraszamy do lektury kolejnych wpis\xf3w. \ud83c\udfaf"}),(0,zr.jsx)("hr",{}),(0,zr.jsxs)("p",{children:[(0,zr.jsx)("strong",{children:"Studio Klara Queen"}),(0,zr.jsx)("br",{}),"Projektujemy luksusowe do\u015bwiadczenia cyfrowe."]})]})};const ed=function(){const e=ll.find(e=>"czysty-kod-react"===e.id);return(0,zr.jsxs)(Zp,{article:e,children:[(0,zr.jsx)("h1",{children:"Czysty kod czy gotowy szablon? Dlaczego stawiamy na technologi\u0119 jutra"}),(0,zr.jsx)("p",{children:(0,zr.jsx)("strong",{children:"20 marca 2026"})}),(0,zr.jsx)("p",{children:"Wielu przedsi\u0119biorc\xf3w staje przed dylematem: wybra\u0107 popularne systemy oparte na gotowych szablonach (tzw. CMS), czy zainwestowa\u0107 w stron\u0119 pisan\u0105 od zera w czystym kodzie? Cho\u0107 gotowe rozwi\u0105zania kusz\u0105 nisk\u0105 cen\u0105 na start, ta pozorna oszcz\u0119dno\u015b\u0107 cz\u0119sto staje si\u0119 barier\u0105 dla rozwoju Twojej marki w sieci."}),(0,zr.jsx)("h2",{children:"Pu\u0142apka \u201eci\u0119\u017ckich\u201d system\xf3w"}),(0,zr.jsx)("p",{children:"Popularne platformy do zarz\u0105dzania tre\u015bci\u0105 zosta\u0142y zaprojektowane tak, by ka\u017cdy m\xf3g\u0142 z\u0142o\u017cy\u0107 z nich stron\u0119. Niestety, ta uniwersalno\u015b\u0107 ma swoj\u0105 cen\u0119. Aby system dzia\u0142a\u0142, musi \u0142adowa\u0107 setki skrypt\xf3w i funkcji, kt\xf3rych Twoja strona prawdopodobnie nigdy nie wykorzysta."}),(0,zr.jsx)("p",{children:(0,zr.jsx)("strong",{children:"Efekt?"})}),(0,zr.jsx)("p",{children:"Strona oparta na gotowym szablonie jest jak samoch\xf3d z nadmiarem zb\u0119dnego baga\u017cu:"}),(0,zr.jsxs)("ul",{children:[(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Traci dynamik\u0119:"})," \u0142aduje si\u0119 zauwa\u017calnie wolniej, co irytuje klient\xf3w."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Jest podatna na b\u0142\u0119dy:"})," ka\u017cda aktualizacja zewn\u0119trznych dodatk\xf3w mo\u017ce \u201erozsypa\u0107\u201d wygl\u0105d strony."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"M\u0119czy serwer:"})," generuje niepotrzebne zapytania, spowalniaj\u0105c dzia\u0142anie witryny na smartfonach."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Wymaga ci\u0105g\u0142ej opieki:"})," musisz stale dba\u0107 o poprawki bezpiecze\u0144stwa i \u0142ata\u0107 luki w popularnych wtyczkach."]})]}),(0,zr.jsx)("p",{children:"W \u015bwiecie biznesu premium ka\u017cda sekunda oczekiwania na za\u0142adowanie strony to ryzyko, \u017ce klient przejdzie do konkurencji."}),(0,zr.jsx)("h2",{children:"Szybko\u015b\u0107 to Twoja najwi\u0119ksza przewaga"}),(0,zr.jsx)("p",{children:"Algorytmy wyszukiwarek (takie jak Core Web Vitals) faworyzuj\u0105 witryny, kt\xf3re szanuj\u0105 czas u\u017cytkownika. Gdy Twoja strona dzia\u0142a w u\u0142amku sekundy, klient odnosi wra\u017cenie profesjonalizmu jeszcze przed przeczytaniem pierwszego zdania."}),(0,zr.jsxs)("p",{children:["W naszym studiu budujemy strony w technologii ",(0,zr.jsx)("strong",{children:"React"}),", poniewa\u017c:"]}),(0,zr.jsx)("h3",{children:"1. P\u0142ynno\u015b\u0107 \u2013 Do\u015bwiadczenie jak w aplikacji"}),(0,zr.jsx)("p",{children:"W przeciwie\u0144stwie do tradycyjnych system\xf3w, React nie prze\u0142adowuje ca\u0142ego okna przy ka\u017cdym klikni\u0119ciu. Nawigacja jest natychmiastowa, p\u0142ynna i bez zb\u0119dnych \u201emrugni\u0119\u0107\u201d ekranu. To standard, do kt\xf3rego przyzwyczai\u0142y nas najlepsze aplikacje mobilne na \u015bwiecie."}),(0,zr.jsx)("h3",{children:"2. Bezpiecze\u0144stwo \u2013 Twierdza bez tylnych drzwi"}),(0,zr.jsx)("p",{children:"Popularne systemy s\u0105 celem masowych atak\xf3w, poniewa\u017c hakerzy znaj\u0105 ich s\u0142abe punkty i luki w og\xf3lnodost\u0119pnych wtyczkach. Buduj\u0105c kod od zera, tworzymy rozwi\u0105zanie unikalne. Nie ma \u201estandardowych\u201d dziur, kt\xf3re mo\u017cna \u0142atwo wykorzysta\u0107."}),(0,zr.jsx)("h3",{children:"3. Skalowalno\u015b\u0107 \u2013 Projekt, kt\xf3ry ro\u015bnie z Tob\u0105"}),(0,zr.jsx)("p",{children:"Gotowe szablony cz\u0119sto staj\u0105 si\u0119 \u201eciasne\u201d, gdy chcesz doda\u0107 nowe, niestandardowe funkcje. Czysty kod React to pe\u0142na swoboda. To ta sama technologia, kt\xf3ra nap\u0119dza najwi\u0119ksze serwisy spo\u0142eczno\u015bciowe \u2013 jest gotowa na ka\u017cdy poziom Twojego sukcesu."}),(0,zr.jsx)("h3",{children:"4. Unikalny Design \u2013 Zero kompromis\xf3w"}),(0,zr.jsx)("p",{children:"Nie walczymy z ograniczeniami szablonu. Ka\u017cdy element Twojej strony projektujemy tak, by idealnie oddawa\u0142 charakter Twojej marki. Bez ci\u0119\u017ckich wtyczek, bez zb\u0119dnego kodu, z zachowaniem absolutnej lekko\u015bci designu."}),(0,zr.jsx)("h2",{children:"Dla kogo s\u0105 gotowe systemy?"}),(0,zr.jsx)("p",{children:"Proste platformy CMS s\u0105 dobrym rozwi\u0105zaniem dla:"}),(0,zr.jsxs)("ul",{children:[(0,zr.jsx)("li",{children:"Hobbystycznych blog\xf3w o ogromnej liczbie wpis\xf3w."}),(0,zr.jsx)("li",{children:"Ma\u0142ych stron informacyjnych z bardzo niskim bud\u017cetem."}),(0,zr.jsx)("li",{children:"Os\xf3b, kt\xf3re chc\u0105 codziennie same zmienia\u0107 kod strony."})]}),(0,zr.jsx)("p",{children:"Ale je\u015bli Tw\xf3j biznes wymaga:"}),(0,zr.jsxs)("ul",{children:[(0,zr.jsx)("li",{children:"B\u0142yskawicznej pr\u0119dko\u015bci dzia\u0142ania dla wy\u017cszej sprzeda\u017cy,"}),(0,zr.jsx)("li",{children:"Nienagannego wizerunku marki premium,"}),(0,zr.jsx)("li",{children:"Bezpiecze\u0144stwa danych Twoich klient\xf3w..."})]}),(0,zr.jsx)("p",{children:"...czysty kod jest po prostu bezkonkurencyjn\u0105 inwestycj\u0105."}),(0,zr.jsx)("h2",{children:"Podsumowanie"}),(0,zr.jsxs)("p",{children:["Wyb\xf3r technologii to fundament Twojego biznesu. Zamiast pyta\u0107, co jest ta\u0144sze dzisiaj, warto zapyta\u0107:"," ",(0,zr.jsx)("strong",{children:"\u201eKt\xf3re rozwi\u0105zanie pozwoli mi zarabia\u0107 wi\u0119cej i spa\u0107 spokojnie przez lata?\u201d"})]}),(0,zr.jsx)("p",{children:"Dla nas odpowied\u017a jest jasna."}),(0,zr.jsx)("hr",{}),(0,zr.jsxs)("p",{children:[(0,zr.jsx)("strong",{children:"Studio Klara Queen"}),(0,zr.jsx)("br",{}),"Projektujemy luksusowe do\u015bwiadczenia cyfrowe."]})]})};const td=function(){const e=ll.find(e=>"unikalne-grafiki-ai"===e.id);return(0,zr.jsxs)(Zp,{article:e,children:[(0,zr.jsx)("h1",{children:"Nowo\u015b\u0107: Unikalne grafiki AI w cenie ka\u017cdej strony"}),(0,zr.jsx)("p",{children:(0,zr.jsx)("strong",{children:"25 marca 2026"})}),(0,zr.jsx)("p",{children:"Doskonale wiemy, \u017ce jednym z najwi\u0119kszych wyzwa\u0144 przy tworzeniu presti\u017cowej strony internetowej jest brak wysokiej jako\u015bci, profesjonalnych zdj\u0119\u0107."}),(0,zr.jsx)("p",{children:"Prywatne sesje fotograficzne bywaj\u0105 kosztowne i czasoch\u0142onne. Darmowe zdj\u0119cia z popularnych bank\xf3w (jak Pexels czy Unsplash)? Korzystaj\u0105 z nich tysi\u0105ce firm, przez co trudno o unikalno\u015b\u0107. Zakup p\u0142atnych stock\xf3w to z kolei kolejny wydatek, kt\xf3ry nie zawsze gwarantuje idealne dopasowanie do wizji marki."}),(0,zr.jsx)("p",{children:"W Studio Klara Queen postanowili\u015bmy to zmieni\u0107."}),(0,zr.jsx)("h2",{children:"Problem: Wizualna powtarzalno\u015b\u0107 w sieci"}),(0,zr.jsx)("p",{children:"Przegl\u0105daj\u0105c internet, mo\u017cna zauwa\u017cy\u0107, \u017ce wiele stron z bran\u017cy premium cierpi na brak charakteru. Dlaczego? Poniewa\u017c wi\u0119kszo\u015b\u0107 opiera si\u0119 na tych samych, opatrzonych grafikach:"}),(0,zr.jsxs)("ul",{children:[(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Sektor Beauty:"})," ta sama modelka w maseczce na setkach witryn."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Us\u0142ugi profesjonalne:"})," powtarzalne zdj\u0119cia ludzi w garniturach w sterylnych biurach."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Kreatywne studia:"})," te same abstrakcyjne, kolorowe gradienty."]})]}),(0,zr.jsx)("p",{children:"W efekcie Twoja marka mo\u017ce zacz\u0105\u0107 zlewa\u0107 si\u0119 z konkurencj\u0105. W \u015bwiecie luksusu brak wyr\xf3\u017cnienia to najprostsza droga do bycia niezauwa\u017conym."}),(0,zr.jsx)("h2",{children:"Rozwi\u0105zanie: Autorskie generowanie grafik przez AI"}),(0,zr.jsxs)("p",{children:["Od marca 2026 roku ka\u017cdy nowy projekt realizowany w Studio Klara Queen zawiera pakiet",(0,zr.jsxs)("strong",{children:[" ","unikalnych, wysokiej jako\u015bci grafik wygenerowanych przez Sztuczn\u0105 Inteligencj\u0119"]}),"."]}),(0,zr.jsx)("p",{children:"Co to oznacza dla Twojej marki?"}),(0,zr.jsxs)("ul",{children:[(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Pe\u0142na personalizacja:"})," grafiki tworzone pod konkretn\u0105 palet\u0119 barw i styl Twojej marki."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Unikalno\u015b\u0107 absolutna:"})," nawet przy podobnych wytycznych, AI generuje jedyne w swoim rodzaju obrazy. Nikt nie b\u0119dzie mia\u0142 identycznej witryny."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Sp\xf3jno\u015b\u0107 wizualna:"})," zestawienie grafik, kt\xf3re idealnie wsp\xf3\u0142gra z Twoj\u0105 wizj\u0105 artystyczn\u0105."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Bezpiecze\u0144stwo prawne:"})," otrzymujesz pe\u0142ne prawa komercyjne do wykorzystanych obraz\xf3w."]})]}),(0,zr.jsx)("h2",{children:"Jak to wygl\u0105da w praktyce?"}),(0,zr.jsx)("p",{children:"Zamiast szuka\u0107 kompromis\xf3w w gotowych bazach zdj\u0119\u0107, my tworzymy obrazy od podstaw. Je\u015bli prowadzisz np. salon urody, proces wygl\u0105da tak:"}),(0,zr.jsx)("p",{children:(0,zr.jsx)("strong",{children:"Koncepcja \u2192 Precyzyjny Prompt \u2192 Selekcja AI \u2192 Unikalna Grafika"})}),(0,zr.jsx)("p",{children:(0,zr.jsx)("em",{children:"Przyk\u0142ad: \u201eMinimalistyczne, luksusowe wn\u0119trze salonu, naturalne o\u015bwietlenie, be\u017cowo-z\u0142ota kolorystyka, detale premium, estetyka profesjonalnej fotografii modowej\u201d."})}),(0,zr.jsx)("p",{children:"Rezultat to warstwa wizualna, kt\xf3ra:"}),(0,zr.jsxs)("ul",{children:[(0,zr.jsx)("li",{children:"\u2705 Jest nierozerwalnie zwi\u0105zana z Twoim brandingiem."}),(0,zr.jsx)("li",{children:"\u2705 Buduje wizerunek marki niedost\u0119pnej w masowym obiegu."}),(0,zr.jsx)("li",{children:"\u2705 Wygl\u0105da jak efekt drogiej sesji zdj\u0119ciowej, a nie sztuczny tw\xf3r."})]}),(0,zr.jsx)("h2",{children:"Koszt dla Ciebie?"}),(0,zr.jsxs)("p",{children:[(0,zr.jsx)("strong",{children:"Dok\u0142adnie zero."})," To standard wliczony w cen\u0119 realizacji Twojej strony."]}),(0,zr.jsxs)("p",{children:["Inwestujemy nasz czas w dopracowanie grafik AI, poniewa\u017c statystyki s\u0105 nieub\u0142agane: to, co potencjalny klient zobaczy w pierwszej sekundzie, decyduje o ",(0,zr.jsx)("strong",{children:"70% jego opinii"}),"o Twoim profesjonalizmie. Nie pozwalamy, by o Twoim sukcesie decydowa\u0142 przypadek lub s\u0142abej jako\u015bci materia\u0142y. Opraw\u0119 premium otrzymujesz u nas w pakiecie."]}),(0,zr.jsx)("h2",{children:"Czy AI zast\u0119puje tradycyjn\u0105 fotografi\u0119?"}),(0,zr.jsx)("p",{children:"Traktujemy AI jako pot\u0119\u017cne uzupe\u0142nienie. Je\u015bli posiadasz w\u0142asne, profesjonalne zdj\u0119cia Twoich zrealizowanych projekt\xf3w czy zespo\u0142u \u2013 zawsze stanowi\u0105 one priorytet."}),(0,zr.jsx)("p",{children:"Jednak w przypadku sekcji dekoracyjnych, t\u0142a strony czy g\u0142\xf3wnego zdj\u0119cia powitalnego (Hero Image), technologia AI pozwala nam stworzy\u0107 klimat, kt\xf3ry bez niej by\u0142by nieosi\u0105galny bez ogromnych nak\u0142ad\xf3w finansowych."}),(0,zr.jsx)("h2",{children:"Etyka i transparentno\u015b\u0107"}),(0,zr.jsxs)("p",{children:["Pytamy wprost: \u201eCzy wypada u\u017cywa\u0107 grafik wygenerowanych przez AI?\u201d. Nasza odpowied\u017a:"," ",(0,zr.jsx)("strong",{children:"Tak, o ile robimy to z klas\u0105 i pe\u0142n\u0105 szczero\u015bci\u0105."})]}),(0,zr.jsx)("p",{children:"W 2026 roku AI to nie p\xf3j\u015bcie na \u0142atwizn\u0119, lecz inteligentne narz\u0119dzie budowania presti\u017cu. My trzymamy si\u0119 trzech zasad:"}),(0,zr.jsxs)("ul",{children:[(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Kuratorska selekcja:"})," Ka\u017cda grafika przechodzi nasz\u0105 osobist\u0105 weryfikacj\u0119 \u2013 musi by\u0107 ostra, estetyczna i luksusowa."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Iteracja do skutku:"})," Robimy tyle wersji, ile potrzeba, aby obraz w 100% oddawa\u0142 charakter Twojego biznesu."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Uczciwo\u015b\u0107 przekazu:"})," Wykorzystujemy AI tam, gdzie buduje ona emocje i nastr\xf3j, pozwalaj\u0105c Twoim realnym us\u0142ugom b\u0142yszcze\u0107 w odpowiedniej oprawie."]})]}),(0,zr.jsx)("h2",{children:"Podsumowanie"}),(0,zr.jsxs)("p",{children:["W Studio Klara Queen chcemy, aby\u015b si\u0119 wyr\xf3\u017cnia\u0142a. Grafiki AI to narz\u0119dzie, kt\xf3re nam na to pozwala. Twoja strona nie b\u0119dzie wygl\u0105da\u0107 jak jedna z wielu. B\u0119dzie wygl\u0105da\u0107 jak ",(0,zr.jsx)("strong",{children:"Twoja"}),"."]}),(0,zr.jsx)("hr",{}),(0,zr.jsxs)("p",{children:[(0,zr.jsx)("strong",{children:"Studio Klara Queen"}),(0,zr.jsx)("br",{}),"Projektujemy luksusowe do\u015bwiadczenia cyfrowe."]})]})};const nd=function(){const e=ll.find(e=>"proces-48h"===e.id);return(0,zr.jsxs)(Zp,{article:e,children:[(0,zr.jsx)("h1",{children:"Jak oddajemy gotowy projekt w 48h roboczych? Poznaj nasz proces."}),(0,zr.jsx)("p",{children:(0,zr.jsx)("strong",{children:"30 marca 2026"})}),(0,zr.jsx)("p",{children:"Dla wielu agencji stworzenie prostej strony internetowej trwa miesi\u0105cami. Dziesi\u0105tki spotka\u0144, nieko\u0144cz\u0105ce si\u0119 korekty i kolejne wersje nag\u0142\xf3wk\xf3w sprawiaj\u0105, \u017ce projekt traci dynamik\u0119, a Ty \u2013 czas na budowanie biznesu."}),(0,zr.jsxs)("p",{children:["W Studio Klara Queen proces zamyka si\u0119 w"," ",(0,zr.jsx)("strong",{children:"48 godzinach roboczych"}),". Jak to mo\u017cliwe bez kompromis\xf3w w kwestii jako\u015bci? Zapraszamy za kulisy naszego warsztatu."]}),(0,zr.jsx)("h2",{children:"Czym s\u0105 nasze \u201e48 godzin\u201d?"}),(0,zr.jsx)("p",{children:"Zasada jest prosta: Tw\xf3j projekt jest gotowy do publikacji w ci\u0105gu 48 godzin roboczych od momentu zaksi\u0119gowania wp\u0142aty i dostarczenia przez Ciebie kompletu informacji."}),(0,zr.jsx)("p",{children:(0,zr.jsx)("strong",{children:"48 godzin roboczych = pe\u0142ne skupienie na Twoim sukcesie."})}),(0,zr.jsx)("p",{children:"Jak to wygl\u0105da w praktyce:"}),(0,zr.jsxs)("ul",{children:[(0,zr.jsx)("li",{children:"Otrzymujemy detale projektu (wytyczne, kolorystyka, tre\u015bci)."}),(0,zr.jsx)("li",{children:"Rozpoczynamy intensywne prace projektowe i programistyczne."}),(0,zr.jsx)("li",{children:"Po 48 godzinach roboczych Twoja strona jest gotowa i opublikowana."})]}),(0,zr.jsxs)("blockquote",{children:[(0,zr.jsx)("strong",{children:"Wa\u017cna uwaga techniczna:"})," Proces propagacji domeny lub konfiguracja zewn\u0119trznego hostingu mo\u017ce czasem zaj\u0105\u0107 od kilku do 24 godzin. Jest to proces niezale\u017cny od nas, wynikaj\u0105cy z globalnych ustawie\u0144 dostawc\xf3w sieciowych. Sama strona jest jednak gotowa i przetestowana dok\u0142adnie w wyznaczonym terminie."]}),(0,zr.jsx)("h2",{children:"Filary naszej efektywno\u015bci"}),(0,zr.jsx)("h3",{children:"1. Inteligentny Brief"}),(0,zr.jsx)("p",{children:"Zanim napiszemy pierwsz\u0105 lini\u0119 kodu, przeprowadzamy Ci\u0119 przez precyzyjn\u0105 ankiet\u0119 online. Zamiast godzinnych rozm\xf3w o niczym, zbieramy konkretne dane:"}),(0,zr.jsxs)("ul",{children:[(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"O marce:"})," Bran\u017ca, warto\u015bci i profil idealnego klienta."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"O celach:"})," Struktura podstron, kluczowe sekcje i oczekiwane akcje u\u017cytkownik\xf3w."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"O estetyce:"})," Paleta barw, typografia i po\u017c\u0105dany klimat wizualny."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"O funkcjonalno\u015bci:"})," Formularze, integracje (np. Calendly) czy galerie prac."]})]}),(0,zr.jsx)("p",{children:"Dzi\u0119ki temu eliminujemy szum komunikacyjny i od pierwszej minuty wiemy, w kt\xf3rym kierunku pod\u0105\u017ca\u0107."}),(0,zr.jsx)("h3",{children:"2. Autorski fundament (nasza przewaga technologiczna)"}),(0,zr.jsxs)("p",{children:["Przez lata pracy wypracowali\u015bmy"," ",(0,zr.jsx)("strong",{children:"zaawansowan\u0105 bibliotek\u0119 komponent\xf3w React"}),"oraz autorskie standardy kodowania. Nie u\u017cywamy kupnych szablon\xf3w \u2013 korzystamy z w\u0142asnego, sprawdzonego w boju fundamentu."]}),(0,zr.jsx)("p",{children:"Nasz system obejmuje:"}),(0,zr.jsxs)("ul",{children:[(0,zr.jsxs)("li",{children:["\u2705 ",(0,zr.jsx)("strong",{children:"Perfekcyjne Responsive Web Design:"})," dopracowane uk\u0142ady dla ka\u017cdego urz\u0105dzenia."]}),(0,zr.jsxs)("li",{children:["\u2705 ",(0,zr.jsx)("strong",{children:"Globalny system styl\xf3w:"})," sp\xf3jna typografia i spacingi."]}),(0,zr.jsxs)("li",{children:["\u2705 ",(0,zr.jsx)("strong",{children:"Optymalizacj\u0119 SEO:"})," wbudowane tagi i struktura danych na starcie."]}),(0,zr.jsxs)("li",{children:["\u2705 ",(0,zr.jsx)("strong",{children:"Maksymaln\u0105 wydajno\u015b\u0107:"})," techniki lazy loading i code splitting."]})]}),(0,zr.jsx)("p",{children:"Zaczynaj\u0105c projekt, mamy ju\u017c gotowy \u201esilnik\u201d i podwozie \u2013 skupiamy si\u0119 na budowie Twojej unikalnej \u201ekaroserii\u201d i wn\u0119trza."}),(0,zr.jsx)("h3",{children:"3. Nowoczesny stack technologiczny"}),(0,zr.jsx)("p",{children:"Korzystamy z narz\u0119dzi, kt\xf3re eliminuj\u0105 przestoje:"}),(0,zr.jsxs)("ul",{children:[(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"React"})," \u2013 czysta struktura i b\u0142yskawiczne dzia\u0142anie."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Styled-components"})," \u2013 modularno\u015b\u0107 styl\xf3w bez chaosu w plikach."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Vite"})," \u2013 \u015brodowisko programistyczne nowej generacji."]}),(0,zr.jsxs)("li",{children:[(0,zr.jsx)("strong",{children:"Vercel"})," \u2013 b\u0142yskawiczny deployment i najwy\u017csza stabilno\u015b\u0107 serwer\xf3w."]})]}),(0,zr.jsx)("h2",{children:"Dlaczego to si\u0119 udaje?"}),(0,zr.jsxs)("p",{children:[(0,zr.jsx)("strong",{children:"Pe\u0142na koncentracja:"})," Pracujemy tylko nad JEDNYM projektem jednocze\u015bnie. Twoja marka ma nasz\u0105 ca\u0142kowit\u0105 uwag\u0119 przez ca\u0142e 48 godzin."]}),(0,zr.jsxs)("p",{children:[(0,zr.jsx)("strong",{children:"Do\u015bwiadczenie:"})," Nie eksperymentujemy na Twoim biznesie. Wdra\u017camy rozwi\u0105zania, o kt\xf3rych wiemy, \u017ce dzia\u0142aj\u0105 i konwertuj\u0105."]}),(0,zr.jsxs)("p",{children:[(0,zr.jsx)("strong",{children:"Zgrany zesp\xf3\u0142:"})," Ka\u017cdy projekt prowadzi dedykowany ekspert. W razie potrzeby \u0142\u0105czymy si\u0142y, by odda\u0107 projekt jeszcze przed terminem."]}),(0,zr.jsx)("h2",{children:"Por\xf3wnanie efektywno\u015bci"}),(0,zr.jsxs)("table",{className:"process-table",children:[(0,zr.jsx)("thead",{children:(0,zr.jsxs)("tr",{children:[(0,zr.jsx)("th",{children:"Obszar"}),(0,zr.jsx)("th",{children:"Studio Klara Queen"}),(0,zr.jsx)("th",{children:"Tradycyjne Agencje"})]})}),(0,zr.jsxs)("tbody",{children:[(0,zr.jsxs)("tr",{children:[(0,zr.jsx)("td",{children:"Przygotowanie"}),(0,zr.jsx)("td",{children:"Autorska biblioteka React"}),(0,zr.jsx)("td",{children:"Poszukiwanie szablon\xf3w"})]}),(0,zr.jsxs)("tr",{children:[(0,zr.jsx)("td",{children:"Komunikacja"}),(0,zr.jsx)("td",{children:"Bezpo\u015bredni kontakt w czasie rzeczywistym"}),(0,zr.jsx)("td",{children:"D\u0142ugie \u0142a\u0144cuchy mailowe"})]}),(0,zr.jsxs)("tr",{children:[(0,zr.jsx)("td",{children:"Skupienie"}),(0,zr.jsx)("td",{children:"Jeden projekt w danym czasie"}),(0,zr.jsx)("td",{children:"Kilka projekt\xf3w prowadzonych r\xf3wnolegle"})]}),(0,zr.jsxs)("tr",{children:[(0,zr.jsx)("td",{children:"Testy jako\u015bci"}),(0,zr.jsx)("td",{children:"Automatyczne i ci\u0105g\u0142e"}),(0,zr.jsx)("td",{children:"Dopiero w fazie ko\u0144cowej"})]}),(0,zr.jsxs)("tr",{children:[(0,zr.jsx)("td",{children:(0,zr.jsx)("strong",{children:"Czas realizacji"})}),(0,zr.jsx)("td",{children:(0,zr.jsx)("strong",{children:"48h roboczych"})}),(0,zr.jsx)("td",{children:(0,zr.jsx)("strong",{children:"Od 4 do 8 tygodni"})})]})]})]}),(0,zr.jsx)("h2",{children:"Czas to najcenniejsza waluta."}),(0,zr.jsx)("p",{children:"Podczas gdy Twoja konkurencja wci\u0105\u017c doprecyzowuje makiety, Ty mo\u017cesz ju\u017c przyjmowa\u0107 pierwsze zam\xf3wienia. Skracamy miesi\u0105ce oczekiwania do dw\xf3ch intensywnych dni roboczych. Inwestujesz w narz\u0119dzie, kt\xf3re zarabia na siebie od zaraz."}),(0,zr.jsx)("hr",{}),(0,zr.jsxs)("p",{children:[(0,zr.jsx)("strong",{children:"Studio Klara Queen"}),(0,zr.jsx)("br",{}),"Tworzymy luksusowe do\u015bwiadczenia cyfrowe."]})]})},ad={"startujemy-z-aktualnosciami":Jp,"czysty-kod-react":ed,"unikalne-grafiki-ai":td,"proces-48h":nd};const rd=function(){const{id:e}=me(),t=ad[e];return t?(0,zr.jsx)(t,{}):(0,zr.jsx)(Hp,{children:(0,zr.jsxs)(Bp,{children:[(0,zr.jsx)(Kp,{children:(0,zr.jsx)(Qp,{children:"Artyku\u0142 nie znaleziony"})}),(0,zr.jsx)(qp,{children:(0,zr.jsx)(wt,{to:"/blog",children:(0,zr.jsx)(Xp,{children:"Wr\xf3\u0107 do aktualno\u015bci"})})})]})})},id=gr.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
`,od=gr.div`
  text-align: center;
  margin-bottom: 80px;
`,ld=gr.h1`
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${br.testimonialAccent} 0%,
    #764ba2 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
`,sd=gr.p`
  font-size: clamp(16px, 2vw, 20px);
  color: ${br.testimonialSubtext};
  max-width: 600px;
  margin: 0 auto;
`,cd=gr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    gap: 20px;
    grid-template-columns: 1fr;
  }
`,ud=gr.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    background: ${br.testimonialBgHover};
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`,pd=gr.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  font-size: 16px;
`,dd=gr.span`
  color: #ffd700;
`,fd=gr.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${br.testimonialText};
  margin-bottom: auto;
  margin-bottom: 25px;
  font-style: italic;
`,md=gr.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,hd=gr.strong`
  font-size: 16px;
  color: ${br.white};
  font-weight: 600;
`,gd=gr.span`
  font-size: 14px;
  color: ${br.testimonialSubtext};
`;const wd=function(){return(0,zr.jsxs)(id,{children:[(0,zr.jsxs)(od,{children:[(0,zr.jsx)(ld,{children:"Opinie naszych klient\xf3w"}),(0,zr.jsx)(sd,{children:"Sprawd\u017a co m\xf3wi\u0105 o nas ci, kt\xf3rzy ju\u017c z nami pracowali"})]}),(0,zr.jsx)(cd,{children:Al.map(e=>(0,zr.jsxs)(ud,{children:[(0,zr.jsx)(pd,{children:[...Array(e.rating)].map((e,t)=>(0,zr.jsx)(dd,{children:"\u2605"},t))}),(0,zr.jsxs)(fd,{children:['"',e.text,'"']}),(0,zr.jsxs)(md,{children:[(0,zr.jsx)(hd,{children:e.name}),(0,zr.jsx)(gd,{children:e.company})]})]},e.id))})]})};const yd=function(){return(0,zr.jsxs)(Hi,{children:[(0,zr.jsx)(Wi,{}),(0,zr.jsx)(jr,{}),(0,zr.jsx)(di,{}),(0,zr.jsx)(Ui,{}),(0,zr.jsx)(Bi,{children:(0,zr.jsxs)(De,{children:[(0,zr.jsx)(Re,{path:"/",element:(0,zr.jsx)(Fl,{})}),(0,zr.jsx)(Re,{path:"/about",element:(0,zr.jsx)(Ms,{})}),(0,zr.jsx)(Re,{path:"/offer",element:(0,zr.jsx)(Pp,{})}),(0,zr.jsx)(Re,{path:"/offer/:id",element:(0,zr.jsx)(Pp,{})}),(0,zr.jsx)(Re,{path:"/blog",element:(0,zr.jsx)(Wp,{})}),(0,zr.jsx)(Re,{path:"/blog/:id",element:(0,zr.jsx)(rd,{})})," ",(0,zr.jsx)(Re,{path:"/testimonials",element:(0,zr.jsx)(wd,{})})," ",(0,zr.jsx)(Re,{path:"/questions",element:(0,zr.jsx)(qs,{})}),(0,zr.jsx)(Re,{path:"/cooperation",element:(0,zr.jsx)(Vc,{})})]})}),(0,zr.jsx)(Fi,{})]})};i.createRoot(document.getElementById("root")).render((0,zr.jsx)(a.StrictMode,{children:(0,zr.jsx)(ht,{basename:"/klara-queen",children:(0,zr.jsx)(yd,{})})}))})();
//# sourceMappingURL=main.d36237c9.js.map