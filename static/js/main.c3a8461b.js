/*! For license information please see main.c3a8461b.js.LICENSE.txt */
(()=>{var e={977(){},4(e,t,n){"use strict";var r=n(853),a=n(43),o=n(950);function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function u(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function c(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(s(e)!==e)throw Error(l(188))}function f(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=f(e)))return t;e=e.sibling}return null}var p=Object.assign,h=Symbol.for("react.element"),m=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),_=Symbol.for("react.lazy");Symbol.for("react.scope");var z=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var P=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var T=Symbol.iterator;function $(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=T&&e[T]||e["@@iterator"])?e:null}var j=Symbol.for("react.client.reference");function O(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===j?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case v:return"Fragment";case b:return"Profiler";case y:return"StrictMode";case S:return"Suspense";case E:return"SuspenseList";case z:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case g:return"Portal";case w:return e.displayName||"Context";case x:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case C:return null!==(t=e.displayName||null)?t:O(e.type)||"Memo";case _:t=e._payload,e=e._init;try{return O(e(t))}catch(n){}}return null}var N=Array.isArray,R=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A={pending:!1,data:null,method:null,action:null},D=[],M=-1;function F(e){return{current:e}}function I(e){0>M||(e.current=D[M],D[M]=null,M--)}function H(e,t){M++,D[M]=e.current,e.current=t}var U,W,B=F(null),V=F(null),q=F(null),K=F(null);function G(e,t){switch(H(q,t),H(V,e),H(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=yd(t=vd(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(B),H(B,e)}function Q(){I(B),I(V),I(q)}function Y(e){null!==e.memoizedState&&H(K,e);var t=B.current,n=yd(t,e.type);t!==n&&(H(V,e),H(B,n))}function X(e){V.current===e&&(I(B),I(V)),K.current===e&&(I(K),df._currentValue=A)}function J(e){if(void 0===U)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);U=t&&t[1]||"",W=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+U+e+W}var Z=!1;function ee(e,t){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(o){r=o}e.call(n.prototype)}}else{try{throw Error()}catch(l){r=l}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(i){if(i&&r&&"string"===typeof i.stack)return[i.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),l=o[0],i=o[1];if(l&&i){var s=l.split("\n"),u=i.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===u.length)for(r=s.length-1,a=u.length-1;1<=r&&0<=a&&s[r]!==u[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==u[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==u[a]){var c="\n"+s[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=r&&0<=a);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?J(n):""}function te(e,t){switch(e.tag){case 26:case 27:case 5:return J(e.type);case 16:return J("Lazy");case 13:return e.child!==t&&null!==t?J("Suspense Fallback"):J("Suspense");case 19:return J("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return J("Activity");default:return""}}function ne(e){try{var t="",n=null;do{t+=te(e,n),n=e,e=e.return}while(e);return t}catch(r){return"\nError generating stack: "+r.message+"\n"+r.stack}}var re=Object.prototype.hasOwnProperty,ae=r.unstable_scheduleCallback,oe=r.unstable_cancelCallback,le=r.unstable_shouldYield,ie=r.unstable_requestPaint,se=r.unstable_now,ue=r.unstable_getCurrentPriorityLevel,ce=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,fe=r.unstable_NormalPriority,pe=r.unstable_LowPriority,he=r.unstable_IdlePriority,me=r.log,ge=r.unstable_setDisableYieldValue,ve=null,ye=null;function be(e){if("function"===typeof me&&ge(e),ye&&"function"===typeof ye.setStrictMode)try{ye.setStrictMode(ve,e)}catch(t){}}var xe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(we(e)/ke|0)|0},we=Math.log,ke=Math.LN2;var Se=256,Ee=262144,Ce=4194304;function _e(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ze(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var a=0,o=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var i=134217727&r;return 0!==i?0!==(r=i&~o)?a=_e(r):0!==(l&=i)?a=_e(l):n||0!==(n=i&~e)&&(a=_e(n)):0!==(i=r&~o)?a=_e(i):0!==l?a=_e(l):n||0!==(n=r&~e)&&(a=_e(n)),0===a?0:0!==t&&t!==a&&0===(t&o)&&((o=a&-a)>=(n=t&-t)||32===o&&0!==(4194048&n))?t:a}function Pe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Te(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function $e(){var e=Ce;return 0===(62914560&(Ce<<=1))&&(Ce=4194304),e}function je(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oe(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ne(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-xe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function Re(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Le(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:Ae(n))&(e.suspendedLanes|t))?0:n}function Ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function De(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Me(){var e=L.p;return 0!==e?e:void 0===(e=window.event)?32:zf(e.type)}function Fe(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var Ie=Math.random().toString(36).slice(2),He="__reactFiber$"+Ie,Ue="__reactProps$"+Ie,We="__reactContainer$"+Ie,Be="__reactEvents$"+Ie,Ve="__reactListeners$"+Ie,qe="__reactHandles$"+Ie,Ke="__reactResources$"+Ie,Ge="__reactMarker$"+Ie;function Qe(e){delete e[He],delete e[Ue],delete e[Be],delete e[Ve],delete e[qe]}function Ye(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[We]||n[He]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Ad(e);null!==e;){if(n=e[He])return n;e=Ad(e)}return t}n=(e=n).parentNode}return null}function Xe(e){if(e=e[He]||e[We]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function Je(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(l(33))}function Ze(e){var t=e[Ke];return t||(t=e[Ke]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Ge]=!0}var tt=new Set,nt={};function rt(e,t){at(e,t),at(e+"Capture",t)}function at(e,t){for(nt[e]=t,e=0;e<t.length;e++)tt.add(t[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},it={};function st(e,t,n){if(a=t,re.call(it,a)||!re.call(lt,a)&&(ot.test(a)?it[a]=!0:(lt[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function ut(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function ct(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ft(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function pt(e){if(!e._valueTracker){var t=ft(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ft(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function mt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var gt=/[\n"\\]/g;function vt(e){return e.replace(gt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function yt(e,t,n,r,a,o,l,i){e.name="",null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.type=l:e.removeAttribute("type"),null!=t?"number"===l?(0===t&&""===e.value||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):"submit"!==l&&"reset"!==l||e.removeAttribute("value"),null!=t?xt(e,l,dt(t)):null!=n?xt(e,l,dt(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=o&&(e.defaultChecked=!!o),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.name=""+dt(i):e.removeAttribute("name")}function bt(e,t,n,r,a,o,l,i){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=n){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return void pt(e);n=null!=n?""+dt(n):"",t=null!=t?""+dt(t):n,i||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=i?e.checked:!!r,e.defaultChecked=!!r,null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l&&(e.name=l),pt(e)}function xt(e,t,n){"number"===t&&mt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function wt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function kt(e,t,n){null==t||((t=""+dt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+dt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function St(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(l(92));if(N(r)){if(1<r.length)throw Error(l(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=dt(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),pt(e)}function Et(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Ct=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _t(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||Ct.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function zt(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(l(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&_t(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&_t(e,o,t[o])}function Pt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jt(e){return $t.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var Nt=null;function Rt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Lt=null,At=null;function Dt(e){var t=Xe(e);if(t&&(e=t.stateNode)){var n=e[Ue]||null;e:switch(e=t.stateNode,t.type){case"input":if(yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Ue]||null;if(!a)throw Error(l(90));yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ht(r)}break e;case"textarea":kt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&wt(e,!!n.multiple,t,!1)}}}var Mt=!1;function Ft(e,t,n){if(Mt)return e(t,n);Mt=!0;try{return e(t)}finally{if(Mt=!1,(null!==Lt||null!==At)&&(Zu(),Lt&&(t=Lt,e=At,At=Lt=null,Dt(t),e)))for(t=0;t<e.length;t++)Dt(e[t])}}function It(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Ue]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(l(231,t,typeof n));return n}var Ht=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Ut=!1;if(Ht)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){Ut=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch(Jf){Ut=!1}var Bt=null,Vt=null,qt=null;function Kt(){if(qt)return qt;var e,t,n=Vt,r=n.length,a="value"in Bt?Bt.value:Bt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var l=r-e;for(t=1;t<=l&&n[r-t]===a[o-t];t++);return qt=a.slice(e,1<t?1-t:void 0)}function Gt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Qt(){return!0}function Yt(){return!1}function Xt(e){function t(t,n,r,a,o){for(var l in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(a):a[l]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Qt:Yt,this.isPropagationStopped=Yt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Qt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Qt)},persist:function(){},isPersistent:Qt}),t}var Jt,Zt,en,tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nn=Xt(tn),rn=p({},tn,{view:0,detail:0}),an=Xt(rn),on=p({},rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&"mousemove"===e.type?(Jt=e.screenX-en.screenX,Zt=e.screenY-en.screenY):Zt=Jt=0,en=e),Jt)},movementY:function(e){return"movementY"in e?e.movementY:Zt}}),ln=Xt(on),sn=Xt(p({},on,{dataTransfer:0})),un=Xt(p({},rn,{relatedTarget:0})),cn=Xt(p({},tn,{animationName:0,elapsedTime:0,pseudoElement:0})),dn=Xt(p({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),fn=Xt(p({},tn,{data:0})),pn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=mn[e])&&!!t[e]}function vn(){return gn}var yn=Xt(p({},rn,{key:function(e){if(e.key){var t=pn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Gt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?hn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vn,charCode:function(e){return"keypress"===e.type?Gt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Gt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),bn=Xt(p({},on,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),xn=Xt(p({},rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vn})),wn=Xt(p({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),kn=Xt(p({},on,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Sn=Xt(p({},tn,{newState:0,oldState:0})),En=[9,13,27,32],Cn=Ht&&"CompositionEvent"in window,_n=null;Ht&&"documentMode"in document&&(_n=document.documentMode);var zn=Ht&&"TextEvent"in window&&!_n,Pn=Ht&&(!Cn||_n&&8<_n&&11>=_n),Tn=String.fromCharCode(32),$n=!1;function jn(e,t){switch(e){case"keyup":return-1!==En.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function On(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Nn=!1;var Rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ln(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Rn[e.type]:"textarea"===t}function An(e,t,n,r){Lt?At?At.push(r):At=[r]:Lt=r,0<(t=rd(t,"onChange")).length&&(n=new nn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Mn=null;function Fn(e){Qc(e,0)}function In(e){if(ht(Je(e)))return e}function Hn(e,t){if("change"===e)return t}var Un=!1;if(Ht){var Wn;if(Ht){var Bn="oninput"in document;if(!Bn){var Vn=document.createElement("div");Vn.setAttribute("oninput","return;"),Bn="function"===typeof Vn.oninput}Wn=Bn}else Wn=!1;Un=Wn&&(!document.documentMode||9<document.documentMode)}function qn(){Dn&&(Dn.detachEvent("onpropertychange",Kn),Mn=Dn=null)}function Kn(e){if("value"===e.propertyName&&In(Mn)){var t=[];An(t,Mn,e,Rt(e)),Ft(Fn,t)}}function Gn(e,t,n){"focusin"===e?(qn(),Mn=n,(Dn=t).attachEvent("onpropertychange",Kn)):"focusout"===e&&qn()}function Qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return In(Mn)}function Yn(e,t){if("click"===e)return In(t)}function Xn(e,t){if("input"===e||"change"===e)return In(t)}var Jn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Zn(e,t){if(Jn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!re.call(t,a)||!Jn(e[a],t[a]))return!1}return!0}function er(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tr(e,t){var n,r=er(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=er(r)}}function nr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?nr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function rr(e){for(var t=mt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=mt((e=t.contentWindow).document)}return t}function ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var or=Ht&&"documentMode"in document&&11>=document.documentMode,lr=null,ir=null,sr=null,ur=!1;function cr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ur||null==lr||lr!==mt(r)||("selectionStart"in(r=lr)&&ar(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},sr&&Zn(sr,r)||(sr=r,0<(r=rd(ir,"onSelect")).length&&(t=new nn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lr)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},pr={},hr={};function mr(e){if(pr[e])return pr[e];if(!fr[e])return e;var t,n=fr[e];for(t in n)if(n.hasOwnProperty(t)&&t in hr)return pr[e]=n[t];return e}Ht&&(hr=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);var gr=mr("animationend"),vr=mr("animationiteration"),yr=mr("animationstart"),br=mr("transitionrun"),xr=mr("transitionstart"),wr=mr("transitioncancel"),kr=mr("transitionend"),Sr=new Map,Er="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(e,t){Sr.set(e,t),rt(t,[e])}Er.push("scrollEnd");var _r="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},zr=[],Pr=0,Tr=0;function $r(){for(var e=Pr,t=Tr=Pr=0;t<e;){var n=zr[t];zr[t++]=null;var r=zr[t];zr[t++]=null;var a=zr[t];zr[t++]=null;var o=zr[t];if(zr[t++]=null,null!==r&&null!==a){var l=r.pending;null===l?a.next=a:(a.next=l.next,l.next=a),r.pending=a}0!==o&&Rr(n,a,o)}}function jr(e,t,n,r){zr[Pr++]=e,zr[Pr++]=t,zr[Pr++]=n,zr[Pr++]=r,Tr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Or(e,t,n,r){return jr(e,t,n,r),Lr(e)}function Nr(e,t){return jr(e,null,null,t),Lr(e)}function Rr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(a=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,a&&null!==t&&(a=31-xe(n),null===(r=(e=o.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),o):null}function Lr(e){if(50<Bu)throw Bu=0,Vu=null,Error(l(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Ar={};function Dr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mr(e,t,n,r){return new Dr(e,t,n,r)}function Fr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ir(e,t){var n=e.alternate;return null===n?((n=Mr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hr(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ur(e,t,n,r,a,o){var i=0;if(r=e,"function"===typeof e)Fr(e)&&(i=1);else if("string"===typeof e)i=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case z:return(e=Mr(31,n,t,a)).elementType=z,e.lanes=o,e;case v:return Wr(n.children,a,o,t);case y:i=8,a|=24;break;case b:return(e=Mr(12,n,t,2|a)).elementType=b,e.lanes=o,e;case S:return(e=Mr(13,n,t,a)).elementType=S,e.lanes=o,e;case E:return(e=Mr(19,n,t,a)).elementType=E,e.lanes=o,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case w:i=10;break e;case x:i=9;break e;case k:i=11;break e;case C:i=14;break e;case _:i=16,r=null;break e}i=29,n=Error(l(130,null===e?"null":typeof e,"")),r=null}return(t=Mr(i,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Wr(e,t,n,r){return(e=Mr(7,e,r,t)).lanes=n,e}function Br(e,t,n){return(e=Mr(6,e,null,t)).lanes=n,e}function Vr(e){var t=Mr(18,null,null,0);return t.stateNode=e,t}function qr(e,t,n){return(t=Mr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Kr=new WeakMap;function Gr(e,t){if("object"===typeof e&&null!==e){var n=Kr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ne(t)},Kr.set(e,t),t)}return{value:e,source:t,stack:ne(t)}}var Qr=[],Yr=0,Xr=null,Jr=0,Zr=[],ea=0,ta=null,na=1,ra="";function aa(e,t){Qr[Yr++]=Jr,Qr[Yr++]=Xr,Xr=e,Jr=t}function oa(e,t,n){Zr[ea++]=na,Zr[ea++]=ra,Zr[ea++]=ta,ta=e;var r=na;e=ra;var a=32-xe(r)-1;r&=~(1<<a),n+=1;var o=32-xe(t)+a;if(30<o){var l=a-a%5;o=(r&(1<<l)-1).toString(32),r>>=l,a-=l,na=1<<32-xe(t)+a|n<<a|r,ra=o+e}else na=1<<o|n<<a|r,ra=e}function la(e){null!==e.return&&(aa(e,1),oa(e,1,0))}function ia(e){for(;e===Xr;)Xr=Qr[--Yr],Qr[Yr]=null,Jr=Qr[--Yr],Qr[Yr]=null;for(;e===ta;)ta=Zr[--ea],Zr[ea]=null,ra=Zr[--ea],Zr[ea]=null,na=Zr[--ea],Zr[ea]=null}function sa(e,t){Zr[ea++]=na,Zr[ea++]=ra,Zr[ea++]=ta,na=t.id,ra=t.overflow,ta=e}var ua=null,ca=null,da=!1,fa=null,pa=!1,ha=Error(l(519));function ma(e){throw wa(Gr(Error(l(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),ha}function ga(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[He]=e,t[Ue]=r,n){case"dialog":Yc("cancel",t),Yc("close",t);break;case"iframe":case"object":case"embed":Yc("load",t);break;case"video":case"audio":for(n=0;n<Kc.length;n++)Yc(Kc[n],t);break;case"source":Yc("error",t);break;case"img":case"image":case"link":Yc("error",t),Yc("load",t);break;case"details":Yc("toggle",t);break;case"input":Yc("invalid",t),bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Yc("invalid",t);break;case"textarea":Yc("invalid",t),St(t,r.value,r.defaultValue,r.children)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||ud(t.textContent,n)?(null!=r.popover&&(Yc("beforetoggle",t),Yc("toggle",t)),null!=r.onScroll&&Yc("scroll",t),null!=r.onScrollEnd&&Yc("scrollend",t),null!=r.onClick&&(t.onclick=Ot),t=!0):t=!1,t||ma(e,!0)}function va(e){for(ua=e.return;ua;)switch(ua.tag){case 5:case 31:case 13:return void(pa=!1);case 27:case 3:return void(pa=!0);default:ua=ua.return}}function ya(e){if(e!==ua)return!1;if(!da)return va(e),da=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||bd(e.type,e.memoizedProps)),t=!t),t&&ca&&ma(e),va(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(l(317));ca=Ld(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(l(317));ca=Ld(e)}else 27===n?(n=ca,_d(e.type)?(e=Rd,Rd=null,ca=e):ca=n):ca=ua?Nd(e.stateNode.nextSibling):null;return!0}function ba(){ca=ua=null,da=!1}function xa(){var e=fa;return null!==e&&(null===$u?$u=e:$u.push.apply($u,e),fa=null),e}function wa(e){null===fa?fa=[e]:fa.push(e)}var ka=F(null),Sa=null,Ea=null;function Ca(e,t,n){H(ka,t._currentValue),t._currentValue=n}function _a(e){e._currentValue=ka.current,I(ka)}function za(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pa(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var o=a.dependencies;if(null!==o){var i=a.child;o=o.firstContext;e:for(;null!==o;){var s=o;o=a;for(var u=0;u<t.length;u++)if(s.context===t[u]){o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),za(o.return,n,e),r||(i=null);break e}o=s.next}}else if(18===a.tag){if(null===(i=a.return))throw Error(l(341));i.lanes|=n,null!==(o=i.alternate)&&(o.lanes|=n),za(i,n,e),i=null}else i=a.child;if(null!==i)i.return=a;else for(i=a;null!==i;){if(i===e){i=null;break}if(null!==(a=i.sibling)){a.return=i.return,i=a;break}i=i.return}a=i}}function Ta(e,t,n,r){e=null;for(var a=t,o=!1;null!==a;){if(!o)if(0!==(524288&a.flags))o=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var i=a.alternate;if(null===i)throw Error(l(387));if(null!==(i=i.memoizedProps)){var s=a.type;Jn(a.pendingProps.value,i.value)||(null!==e?e.push(s):e=[s])}}else if(a===K.current){if(null===(i=a.alternate))throw Error(l(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(df):e=[df])}a=a.return}null!==e&&Pa(t,e,n,r),t.flags|=262144}function $a(e){for(e=e.firstContext;null!==e;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ja(e){Sa=e,Ea=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Oa(e){return Ra(Sa,e)}function Na(e,t){return null===Sa&&ja(e),Ra(e,t)}function Ra(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Ea){if(null===e)throw Error(l(308));Ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ea=Ea.next=t;return n}var La="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Aa=r.unstable_scheduleCallback,Da=r.unstable_NormalPriority,Ma={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fa(){return{controller:new La,data:new Map,refCount:0}}function Ia(e){e.refCount--,0===e.refCount&&Aa(Da,function(){e.controller.abort()})}var Ha=null,Ua=0,Wa=0,Ba=null;function Va(){if(0===--Ua&&null!==Ha){null!==Ba&&(Ba.status="fulfilled");var e=Ha;Ha=null,Wa=0,Ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var qa=R.S;R.S=function(e,t){Nu=se(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Ha){var n=Ha=[];Ua=0,Wa=Uc(),Ba={status:"pending",value:void 0,then:function(e){n.push(e)}}}Ua++,t.then(Va,Va)}(0,t),null!==qa&&qa(e,t)};var Ka=F(null);function Ga(){var e=Ka.current;return null!==e?e:hu.pooledCache}function Qa(e,t){H(Ka,null===t?Ka.current:t.pool)}function Ya(){var e=Ga();return null===e?null:{parent:Ma._currentValue,pool:e}}var Xa=Error(l(460)),Ja=Error(l(474)),Za=Error(l(542)),eo={then:function(){}};function to(e){return"fulfilled"===(e=e.status)||"rejected"===e}function no(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Ot,Ot),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw lo(e=t.reason),e;default:if("string"===typeof t.status)t.then(Ot,Ot);else{if(null!==(e=hu)&&100<e.shellSuspendCounter)throw Error(l(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw lo(e=t.reason),e}throw ao=t,Xa}}function ro(e){try{return(0,e._init)(e._payload)}catch(t){if(null!==t&&"object"===typeof t&&"function"===typeof t.then)throw ao=t,Xa;throw t}}var ao=null;function oo(){if(null===ao)throw Error(l(459));var e=ao;return ao=null,e}function lo(e){if(e===Xa||e===Za)throw Error(l(483))}var io=null,so=0;function uo(e){var t=so;return so+=1,null===io&&(io=[]),no(io,e,t)}function co(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function fo(e,t){if(t.$$typeof===h)throw Error(l(525));throw e=Object.prototype.toString.call(t),Error(l(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function po(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Ir(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function i(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Br(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===v?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===_&&ro(o)===t.type)?(co(t=a(t,n.props),n),t.return=e,t):(co(t=Ur(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=qr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Wr(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Br(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case m:return co(n=Ur(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case g:return(t=qr(t,e.mode,n)).return=e,t;case _:return f(e,t=ro(t),n)}if(N(t)||$(t))return(t=Wr(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return f(e,uo(t),n);if(t.$$typeof===w)return f(e,Na(e,t),n);fo(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case m:return n.key===a?u(e,t,n,r):null;case g:return n.key===a?c(e,t,n,r):null;case _:return p(e,t,n=ro(n),r)}if(N(n)||$(n))return null!==a?null:d(e,t,n,r,null);if("function"===typeof n.then)return p(e,t,uo(n),r);if(n.$$typeof===w)return p(e,t,Na(e,n),r);fo(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case m:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case g:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case _:return h(e,t,n,r=ro(r),a)}if(N(r)||$(r))return d(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return h(e,t,n,uo(r),a);if(r.$$typeof===w)return h(e,t,n,Na(t,r),a);fo(t,r)}return null}function y(s,u,c,d){if("object"===typeof c&&null!==c&&c.type===v&&null===c.key&&(c=c.props.children),"object"===typeof c&&null!==c){switch(c.$$typeof){case m:e:{for(var b=c.key;null!==u;){if(u.key===b){if((b=c.type)===v){if(7===u.tag){n(s,u.sibling),(d=a(u,c.props.children)).return=s,s=d;break e}}else if(u.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===_&&ro(b)===u.type){n(s,u.sibling),co(d=a(u,c.props),c),d.return=s,s=d;break e}n(s,u);break}t(s,u),u=u.sibling}c.type===v?((d=Wr(c.props.children,s.mode,d,c.key)).return=s,s=d):(co(d=Ur(c.type,c.key,c.props,null,s.mode,d),c),d.return=s,s=d)}return i(s);case g:e:{for(b=c.key;null!==u;){if(u.key===b){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(s,u.sibling),(d=a(u,c.children||[])).return=s,s=d;break e}n(s,u);break}t(s,u),u=u.sibling}(d=qr(c,s.mode,d)).return=s,s=d}return i(s);case _:return y(s,u,c=ro(c),d)}if(N(c))return function(a,l,i,s){for(var u=null,c=null,d=l,m=l=0,g=null;null!==d&&m<i.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(a,d,i[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),l=o(v,l,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===i.length)return n(a,d),da&&aa(a,m),u;if(null===d){for(;m<i.length;m++)null!==(d=f(a,i[m],s))&&(l=o(d,l,m),null===c?u=d:c.sibling=d,c=d);return da&&aa(a,m),u}for(d=r(d);m<i.length;m++)null!==(g=h(d,a,m,i[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),l=o(g,l,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(a,e)}),da&&aa(a,m),u}(s,u,c,d);if($(c)){if("function"!==typeof(b=$(c)))throw Error(l(150));return function(a,i,s,u){if(null==s)throw Error(l(151));for(var c=null,d=null,m=i,g=i=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(a,m,y.value,u);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(a,m),i=o(b,i,g),null===d?c=b:d.sibling=b,d=b,m=v}if(y.done)return n(a,m),da&&aa(a,g),c;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=f(a,y.value,u))&&(i=o(y,i,g),null===d?c=y:d.sibling=y,d=y);return da&&aa(a,g),c}for(m=r(m);!y.done;g++,y=s.next())null!==(y=h(m,a,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),i=o(y,i,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach(function(e){return t(a,e)}),da&&aa(a,g),c}(s,u,c=b.call(c),d)}if("function"===typeof c.then)return y(s,u,uo(c),d);if(c.$$typeof===w)return y(s,u,Na(s,c),d);fo(s,c)}return"string"===typeof c&&""!==c||"number"===typeof c||"bigint"===typeof c?(c=""+c,null!==u&&6===u.tag?(n(s,u.sibling),(d=a(u,c)).return=s,s=d):(n(s,u),(d=Br(c,s.mode,d)).return=s,s=d),i(s)):n(s,u)}return function(e,t,n,r){try{so=0;var a=y(e,t,n,r);return io=null,a}catch(l){if(l===Xa||l===Za)throw l;var o=Mr(29,l,null,e.mode);return o.lanes=r,o.return=e,o}}}var ho=po(!0),mo=po(!1),go=!1;function vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&pu)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Lr(e),Rr(e,null,n),t}return jr(e,r,t,n),Lr(e)}function wo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}function ko(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var l={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?a=o=l:o=o.next=l,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var So=!1;function Eo(){if(So){if(null!==Ba)throw Ba}}function Co(e,t,n,r){So=!1;var a=e.updateQueue;go=!1;var o=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(null!==i){a.shared.pending=null;var s=i,u=s.next;s.next=null,null===l?o=u:l.next=u,l=s;var c=e.alternate;null!==c&&((i=(c=c.updateQueue).lastBaseUpdate)!==l&&(null===i?c.firstBaseUpdate=u:i.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(l=0,c=u=s=null,i=o;;){var f=-536870913&i.lane,h=f!==i.lane;if(h?(gu&f)===f:(r&f)===f){0!==f&&f===Wa&&(So=!0),null!==c&&(c=c.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var m=e,g=i;f=t;var v=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(v,d,f);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(f="function"===typeof(m=g.payload)?m.call(v,d,f):m)||void 0===f)break e;d=p({},d,f);break e;case 2:go=!0}}null!==(f=i.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=a.callbacks)?a.callbacks=[f]:h.push(f))}else h={lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===c?(u=c=h,s=d):c=c.next=h,l|=f;if(null===(i=i.next)){if(null===(i=a.shared.pending))break;i=(h=i).next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null===o&&(a.shared.lanes=0),Eu|=l,e.lanes=l,e.memoizedState=d}}function _o(e,t){if("function"!==typeof e)throw Error(l(191,e));e.call(t)}function zo(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)_o(n[e],t)}var Po=F(null),To=F(0);function $o(e,t){H(To,e=ku),H(Po,t),ku=e|t.baseLanes}function jo(){H(To,ku),H(Po,Po.current)}function Oo(){ku=To.current,I(Po),I(To)}var No=F(null),Ro=null;function Lo(e){var t=e.alternate;H(Io,1&Io.current),H(No,e),null===Ro&&(null===t||null!==Po.current||null!==t.memoizedState)&&(Ro=e)}function Ao(e){H(Io,Io.current),H(No,e),null===Ro&&(Ro=e)}function Do(e){22===e.tag?(H(Io,Io.current),H(No,e),null===Ro&&(Ro=e)):Mo()}function Mo(){H(Io,Io.current),H(No,No.current)}function Fo(e){I(No),Ro===e&&(Ro=null),I(Io)}var Io=F(0);function Ho(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||jd(n)||Od(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child;continue}}else if(0!==(128&t.flags))return t;if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Uo=0,Wo=null,Bo=null,Vo=null,qo=!1,Ko=!1,Go=!1,Qo=0,Yo=0,Xo=null,Jo=0;function Zo(){throw Error(l(321))}function el(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jn(e[n],t[n]))return!1;return!0}function tl(e,t,n,r,a,o){return Uo=o,Wo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=null===e||null===e.memoizedState?gi:vi,Go=!1,o=n(r,a),Go=!1,Ko&&(o=rl(t,n,r,a)),nl(e),o}function nl(e){R.H=mi;var t=null!==Bo&&null!==Bo.next;if(Uo=0,Vo=Bo=Wo=null,qo=!1,Yo=0,Xo=null,t)throw Error(l(300));null===e||Ni||null!==(e=e.dependencies)&&$a(e)&&(Ni=!0)}function rl(e,t,n,r){Wo=e;var a=0;do{if(Ko&&(Xo=null),Yo=0,Ko=!1,25<=a)throw Error(l(301));if(a+=1,Vo=Bo=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}R.H=yi,o=t(n,r)}while(Ko);return o}function al(){var e=R.H,t=e.useState()[0];return t="function"===typeof t.then?cl(t):t,e=e.useState()[0],(null!==Bo?Bo.memoizedState:null)!==e&&(Wo.flags|=1024),t}function ol(){var e=0!==Qo;return Qo=0,e}function ll(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function il(e){if(qo){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}qo=!1}Uo=0,Vo=Bo=Wo=null,Ko=!1,Yo=Qo=0,Xo=null}function sl(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Vo?Wo.memoizedState=Vo=e:Vo=Vo.next=e,Vo}function ul(){if(null===Bo){var e=Wo.alternate;e=null!==e?e.memoizedState:null}else e=Bo.next;var t=null===Vo?Wo.memoizedState:Vo.next;if(null!==t)Vo=t,Bo=e;else{if(null===e){if(null===Wo.alternate)throw Error(l(467));throw Error(l(310))}e={memoizedState:(Bo=e).memoizedState,baseState:Bo.baseState,baseQueue:Bo.baseQueue,queue:Bo.queue,next:null},null===Vo?Wo.memoizedState=Vo=e:Vo=Vo.next=e}return Vo}function cl(e){var t=Yo;return Yo+=1,null===Xo&&(Xo=[]),e=no(Xo,e,t),t=Wo,null===(null===Vo?t.memoizedState:Vo.next)&&(t=t.alternate,R.H=null===t||null===t.memoizedState?gi:vi),e}function dl(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return cl(e);if(e.$$typeof===w)return Oa(e)}throw Error(l(438,String(e)))}function fl(e){var t=null,n=Wo.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Wo.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Wo.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=P;return t.index++,n}function pl(e,t){return"function"===typeof t?t(e):t}function hl(e){return ml(ul(),Bo,e)}function ml(e,t,n){var r=e.queue;if(null===r)throw Error(l(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(null!==o){if(null!==a){var i=a.next;a.next=o.next,o.next=i}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,null===a)e.memoizedState=o;else{var s=i=null,u=null,c=t=a.next,d=!1;do{var f=-536870913&c.lane;if(f!==c.lane?(gu&f)===f:(Uo&f)===f){var p=c.revertLane;if(0===p)null!==u&&(u=u.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Wa&&(d=!0);else{if((Uo&p)===p){c=c.next,p===Wa&&(d=!0);continue}f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=f,i=o):u=u.next=f,Wo.lanes|=p,Eu|=p}f=c.action,Go&&n(o,f),o=c.hasEagerState?c.eagerState:n(o,f)}else p={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=p,i=o):u=u.next=p,Wo.lanes|=f,Eu|=f;c=c.next}while(null!==c&&c!==t);if(null===u?i=o:u.next=s,!Jn(o,e.memoizedState)&&(Ni=!0,d&&null!==(n=Ba)))throw n;e.memoizedState=o,e.baseState=i,e.baseQueue=u,r.lastRenderedState=o}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function gl(e){var t=ul(),n=t.queue;if(null===n)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var i=a=a.next;do{o=e(o,i.action),i=i.next}while(i!==a);Jn(o,t.memoizedState)||(Ni=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function vl(e,t,n){var r=Wo,a=ul(),o=da;if(o){if(void 0===n)throw Error(l(407));n=n()}else n=t();var i=!Jn((Bo||a).memoizedState,n);if(i&&(a.memoizedState=n,Ni=!0),a=a.queue,Ul(xl.bind(null,r,a,e),[e]),a.getSnapshot!==t||i||null!==Vo&&1&Vo.memoizedState.tag){if(r.flags|=2048,Dl(9,{destroy:void 0},bl.bind(null,r,a,n,t),null),null===hu)throw Error(l(349));o||0!==(127&Uo)||yl(r,t,n)}return n}function yl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Wo.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Wo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function bl(e,t,n,r){t.value=n,t.getSnapshot=r,wl(t)&&kl(e)}function xl(e,t,n){return n(function(){wl(t)&&kl(e)})}function wl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jn(e,n)}catch(r){return!0}}function kl(e){var t=Nr(e,2);null!==t&&Gu(t,e,2)}function Sl(e){var t=sl();if("function"===typeof e){var n=e;if(e=n(),Go){be(!0);try{n()}finally{be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:e},t}function El(e,t,n,r){return e.baseState=n,ml(e,Bo,"function"===typeof r?r:pl)}function Cl(e,t,n,r,a){if(fi(e))throw Error(l(485));if(null!==(e=t.action)){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==R.T?n(!0):o.isTransition=!1,r(o),null===(n=t.pending)?(o.next=t.pending=o,_l(t,o)):(o.next=n.next,t.pending=n.next=o)}}function _l(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var o=R.T,l={};R.T=l;try{var i=n(a,r),s=R.S;null!==s&&s(l,i),zl(e,t,i)}catch(u){Tl(e,t,u)}finally{null!==o&&null!==l.types&&(o.types=l.types),R.T=o}}else try{zl(e,t,o=n(a,r))}catch(c){Tl(e,t,c)}}function zl(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){Pl(e,t,n)},function(n){return Tl(e,t,n)}):Pl(e,t,n)}function Pl(e,t,n){t.status="fulfilled",t.value=n,$l(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,_l(e,n)))}function Tl(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,$l(t),t=t.next}while(t!==r)}e.action=null}function $l(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function jl(e,t){return t}function Ol(e,t){if(da){var n=hu.formState;if(null!==n){e:{var r=Wo;if(da){if(ca){t:{for(var a=ca,o=pa;8!==a.nodeType;){if(!o){a=null;break t}if(null===(a=Nd(a.nextSibling))){a=null;break t}}a="F!"===(o=a.data)||"F"===o?a:null}if(a){ca=Nd(a.nextSibling),r="F!"===a.data;break e}}ma(r)}r=!1}r&&(t=n[0])}}return(n=sl()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jl,lastRenderedState:t},n.queue=r,n=ui.bind(null,Wo,r),r.dispatch=n,r=Sl(!1),o=di.bind(null,Wo,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=sl()).queue=a,n=Cl.bind(null,Wo,a,o,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Nl(e){return Rl(ul(),Bo,e)}function Rl(e,t,n){if(t=ml(e,t,jl)[0],e=hl(pl)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=cl(t)}catch(l){if(l===Xa)throw Za;throw l}else r=t;var a=(t=ul()).queue,o=a.dispatch;return n!==t.memoizedState&&(Wo.flags|=2048,Dl(9,{destroy:void 0},Ll.bind(null,a,n),null)),[r,o,e]}function Ll(e,t){e.action=t}function Al(e){var t=ul(),n=Bo;if(null!==n)return Rl(t,n,e);ul(),t=t.memoizedState;var r=(n=ul()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Dl(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=Wo.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Wo.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ml(){return ul().memoizedState}function Fl(e,t,n,r){var a=sl();Wo.flags|=e,a.memoizedState=Dl(1|t,{destroy:void 0},n,void 0===r?null:r)}function Il(e,t,n,r){var a=ul();r=void 0===r?null:r;var o=a.memoizedState.inst;null!==Bo&&null!==r&&el(r,Bo.memoizedState.deps)?a.memoizedState=Dl(t,o,n,r):(Wo.flags|=e,a.memoizedState=Dl(1|t,o,n,r))}function Hl(e,t){Fl(8390656,8,e,t)}function Ul(e,t){Il(2048,8,e,t)}function Wl(e){var t=ul().memoizedState;return function(e){Wo.flags|=4;var t=Wo.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},Wo.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&pu))throw Error(l(440));return t.impl.apply(void 0,arguments)}}function Bl(e,t){return Il(4,2,e,t)}function Vl(e,t){return Il(4,4,e,t)}function ql(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Kl(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Il(4,4,ql.bind(null,t,e),n)}function Gl(){}function Ql(e,t){var n=ul();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&el(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yl(e,t){var n=ul();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&el(t,r[1]))return r[0];if(r=e(),Go){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r}function Xl(e,t,n){return void 0===n||0!==(1073741824&Uo)&&0===(261930&gu)?e.memoizedState=t:(e.memoizedState=n,e=Ku(),Wo.lanes|=e,Eu|=e,n)}function Jl(e,t,n,r){return Jn(n,t)?n:null!==Po.current?(e=Xl(e,n,r),Jn(e,t)||(Ni=!0),e):0===(42&Uo)||0!==(1073741824&Uo)&&0===(261930&gu)?(Ni=!0,e.memoizedState=n):(e=Ku(),Wo.lanes|=e,Eu|=e,t)}function Zl(e,t,n,r,a){var o=L.p;L.p=0!==o&&8>o?o:8;var l=R.T,i={};R.T=i,di(e,!1,t,n);try{var s=a(),u=R.S;if(null!==u&&u(i,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)ci(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(s,r),qu());else ci(e,t,r,qu())}catch(c){ci(e,t,{then:function(){},status:"rejected",reason:c},qu())}finally{L.p=o,null!==l&&null!==i.types&&(l.types=i.types),R.T=l}}function ei(){}function ti(e,t,n,r){if(5!==e.tag)throw Error(l(476));var a=ni(e).queue;Zl(e,a,t,A,null===n?ei:function(){return ri(e),n(r)})}function ni(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:A,baseState:A,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:A},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function ri(e){var t=ni(e);null===t.next&&(t=e.alternate.memoizedState),ci(e,t.next.queue,{},qu())}function ai(){return Oa(df)}function oi(){return ul().memoizedState}function li(){return ul().memoizedState}function ii(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=qu(),r=xo(t,e=bo(n),n);return null!==r&&(Gu(r,t,n),wo(r,t,n)),t={cache:Fa()},void(e.payload=t)}t=t.return}}function si(e,t,n){var r=qu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fi(e)?pi(t,n):null!==(n=Or(e,t,n,r))&&(Gu(n,e,r),hi(n,t,r))}function ui(e,t,n){ci(e,t,n,qu())}function ci(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fi(e))pi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var l=t.lastRenderedState,i=o(l,n);if(a.hasEagerState=!0,a.eagerState=i,Jn(i,l))return jr(e,t,a,0),null===hu&&$r(),!1}catch(s){}if(null!==(n=Or(e,t,a,r)))return Gu(n,e,r),hi(n,t,r),!0}return!1}function di(e,t,n,r){if(r={lane:2,revertLane:Uc(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},fi(e)){if(t)throw Error(l(479))}else null!==(t=Or(e,n,r,2))&&Gu(t,e,2)}function fi(e){var t=e.alternate;return e===Wo||null!==t&&t===Wo}function pi(e,t){Ko=qo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hi(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}var mi={readContext:Oa,use:dl,useCallback:Zo,useContext:Zo,useEffect:Zo,useImperativeHandle:Zo,useLayoutEffect:Zo,useInsertionEffect:Zo,useMemo:Zo,useReducer:Zo,useRef:Zo,useState:Zo,useDebugValue:Zo,useDeferredValue:Zo,useTransition:Zo,useSyncExternalStore:Zo,useId:Zo,useHostTransitionStatus:Zo,useFormState:Zo,useActionState:Zo,useOptimistic:Zo,useMemoCache:Zo,useCacheRefresh:Zo};mi.useEffectEvent=Zo;var gi={readContext:Oa,use:dl,useCallback:function(e,t){return sl().memoizedState=[e,void 0===t?null:t],e},useContext:Oa,useEffect:Hl,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Fl(4194308,4,ql.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fl(4194308,4,e,t)},useInsertionEffect:function(e,t){Fl(4,2,e,t)},useMemo:function(e,t){var n=sl();t=void 0===t?null:t;var r=e();if(Go){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=sl();if(void 0!==n){var a=n(t);if(Go){be(!0);try{n(t)}finally{be(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=si.bind(null,Wo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},sl().memoizedState=e},useState:function(e){var t=(e=Sl(e)).queue,n=ui.bind(null,Wo,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Gl,useDeferredValue:function(e,t){return Xl(sl(),e,t)},useTransition:function(){var e=Sl(!1);return e=Zl.bind(null,Wo,e.queue,!0,!1),sl().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Wo,a=sl();if(da){if(void 0===n)throw Error(l(407));n=n()}else{if(n=t(),null===hu)throw Error(l(349));0!==(127&gu)||yl(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Hl(xl.bind(null,r,o,e),[e]),r.flags|=2048,Dl(9,{destroy:void 0},bl.bind(null,r,o,n,t),null),n},useId:function(){var e=sl(),t=hu.identifierPrefix;if(da){var n=ra;t="_"+t+"R_"+(n=(na&~(1<<32-xe(na)-1)).toString(32)+n),0<(n=Qo++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Jo++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ai,useFormState:Ol,useActionState:Ol,useOptimistic:function(e){var t=sl();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=di.bind(null,Wo,!0,n),n.dispatch=t,[e,t]},useMemoCache:fl,useCacheRefresh:function(){return sl().memoizedState=ii.bind(null,Wo)},useEffectEvent:function(e){var t=sl(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&pu))throw Error(l(440));return n.impl.apply(void 0,arguments)}}},vi={readContext:Oa,use:dl,useCallback:Ql,useContext:Oa,useEffect:Ul,useImperativeHandle:Kl,useInsertionEffect:Bl,useLayoutEffect:Vl,useMemo:Yl,useReducer:hl,useRef:Ml,useState:function(){return hl(pl)},useDebugValue:Gl,useDeferredValue:function(e,t){return Jl(ul(),Bo.memoizedState,e,t)},useTransition:function(){var e=hl(pl)[0],t=ul().memoizedState;return["boolean"===typeof e?e:cl(e),t]},useSyncExternalStore:vl,useId:oi,useHostTransitionStatus:ai,useFormState:Nl,useActionState:Nl,useOptimistic:function(e,t){return El(ul(),0,e,t)},useMemoCache:fl,useCacheRefresh:li};vi.useEffectEvent=Wl;var yi={readContext:Oa,use:dl,useCallback:Ql,useContext:Oa,useEffect:Ul,useImperativeHandle:Kl,useInsertionEffect:Bl,useLayoutEffect:Vl,useMemo:Yl,useReducer:gl,useRef:Ml,useState:function(){return gl(pl)},useDebugValue:Gl,useDeferredValue:function(e,t){var n=ul();return null===Bo?Xl(n,e,t):Jl(n,Bo.memoizedState,e,t)},useTransition:function(){var e=gl(pl)[0],t=ul().memoizedState;return["boolean"===typeof e?e:cl(e),t]},useSyncExternalStore:vl,useId:oi,useHostTransitionStatus:ai,useFormState:Al,useActionState:Al,useOptimistic:function(e,t){var n=ul();return null!==Bo?El(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fl,useCacheRefresh:li};function bi(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}yi.useEffectEvent=Wl;var xi={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qu(),a=bo(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=xo(e,a,r))&&(Gu(t,e,r),wo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qu(),a=bo(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=xo(e,a,r))&&(Gu(t,e,r),wo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qu(),r=bo(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=xo(e,r,n))&&(Gu(t,e,n),wo(t,e,n))}};function wi(e,t,n,r,a,o,l){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,l):!t.prototype||!t.prototype.isPureReactComponent||(!Zn(n,r)||!Zn(a,o))}function ki(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xi.enqueueReplaceState(t,t.state,null)}function Si(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=p({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}function Ei(e){_r(e)}function Ci(e){console.error(e)}function _i(e){_r(e)}function zi(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Pi(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Ti(e,t,n){return(n=bo(n)).tag=3,n.payload={element:null},n.callback=function(){zi(e,t)},n}function $i(e){return(e=bo(e)).tag=3,e}function ji(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var o=r.value;e.payload=function(){return a(o)},e.callback=function(){Pi(t,n,r)}}var l=n.stateNode;null!==l&&"function"===typeof l.componentDidCatch&&(e.callback=function(){Pi(t,n,r),"function"!==typeof a&&(null===Au?Au=new Set([this]):Au.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Oi=Error(l(461)),Ni=!1;function Ri(e,t,n,r){t.child=null===e?mo(t,null,n,r):ho(t,e.child,n,r)}function Li(e,t,n,r,a){n=n.render;var o=t.ref;if("ref"in r){var l={};for(var i in r)"ref"!==i&&(l[i]=r[i])}else l=r;return ja(t),r=tl(e,t,n,l,o,a),i=ol(),null===e||Ni?(da&&i&&la(t),t.flags|=1,Ri(e,t,r,a),t.child):(ll(e,t,a),as(e,t,a))}function Ai(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Fr(o)||void 0!==o.defaultProps||null!==n.compare?((e=Ur(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Di(e,t,o,r,a))}if(o=e.child,!os(e,a)){var l=o.memoizedProps;if((n=null!==(n=n.compare)?n:Zn)(l,r)&&e.ref===t.ref)return as(e,t,a)}return t.flags|=1,(e=Ir(o,r)).ref=t.ref,e.return=t,t.child=e}function Di(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(Zn(o,r)&&e.ref===t.ref){if(Ni=!1,t.pendingProps=r=o,!os(e,a))return t.lanes=e.lanes,as(e,t,a);0!==(131072&e.flags)&&(Ni=!0)}}return Bi(e,t,n,r,a)}function Mi(e,t,n,r){var a=r.children,o=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(0!==(128&t.flags)){if(o=null!==o?o.baseLanes|n:n,null!==e){for(r=t.child=e.child,a=0;null!==r;)a=a|r.lanes|r.childLanes,r=r.sibling;r=a&~o}else r=0,t.child=null;return Ii(e,t,o,n,r)}if(0===(536870912&n))return r=t.lanes=536870912,Ii(e,t,null!==o?o.baseLanes|n:n,n,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Qa(0,null!==o?o.cachePool:null),null!==o?$o(t,o):jo(),Do(t)}else null!==o?(Qa(0,o.cachePool),$o(t,o),Mo(),t.memoizedState=null):(null!==e&&Qa(0,null),jo(),Mo());return Ri(e,t,a,n),t.child}function Fi(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ii(e,t,n,r,a){var o=Ga();return o=null===o?null:{parent:Ma._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&Qa(0,null),jo(),Do(t),null!==e&&Ta(e,t,r,!0),t.childLanes=a,null}function Hi(e,t){return(t=Zi({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function Ui(e,t,n){return ho(t,e.child,null,n),(e=Hi(t,t.pendingProps)).flags|=2,Fo(t),t.memoizedState=null,e}function Wi(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(l(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Bi(e,t,n,r,a){return ja(t),n=tl(e,t,n,r,void 0,a),r=ol(),null===e||Ni?(da&&r&&la(t),t.flags|=1,Ri(e,t,n,a),t.child):(ll(e,t,a),as(e,t,a))}function Vi(e,t,n,r,a,o){return ja(t),t.updateQueue=null,n=rl(t,r,n,a),nl(e),r=ol(),null===e||Ni?(da&&r&&la(t),t.flags|=1,Ri(e,t,n,o),t.child):(ll(e,t,o),as(e,t,o))}function qi(e,t,n,r,a){if(ja(t),null===t.stateNode){var o=Ar,l=n.contextType;"object"===typeof l&&null!==l&&(o=Oa(l)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=xi,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},vo(t),l=n.contextType,o.context="object"===typeof l&&null!==l?Oa(l):Ar,o.state=t.memoizedState,"function"===typeof(l=n.getDerivedStateFromProps)&&(bi(t,n,l,r),o.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(l=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),l!==o.state&&xi.enqueueReplaceState(o,o.state,null),Co(t,r,o,a),Eo(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode;var i=t.memoizedProps,s=Si(n,i);o.props=s;var u=o.context,c=n.contextType;l=Ar,"object"===typeof c&&null!==c&&(l=Oa(c));var d=n.getDerivedStateFromProps;c="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate,i=t.pendingProps!==i,c||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i||u!==l)&&ki(t,o,r,l),go=!1;var f=t.memoizedState;o.state=f,Co(t,r,o,a),Eo(),u=t.memoizedState,i||f!==u||go?("function"===typeof d&&(bi(t,n,d,r),u=t.memoizedState),(s=go||wi(t,n,s,r,f,u,l))?(c||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=l,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,yo(e,t),c=Si(n,l=t.memoizedProps),o.props=c,d=t.pendingProps,f=o.context,u=n.contextType,s=Ar,"object"===typeof u&&null!==u&&(s=Oa(u)),(u="function"===typeof(i=n.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==d||f!==s)&&ki(t,o,r,s),go=!1,f=t.memoizedState,o.state=f,Co(t,r,o,a),Eo();var p=t.memoizedState;l!==d||f!==p||go||null!==e&&null!==e.dependencies&&$a(e.dependencies)?("function"===typeof i&&(bi(t,n,i,r),p=t.memoizedState),(c=go||wi(t,n,c,r,f,p,s)||null!==e&&null!==e.dependencies&&$a(e.dependencies))?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=s,r=c):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,Wi(e,t),r=0!==(128&t.flags),o||r?(o=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=ho(t,e.child,null,a),t.child=ho(t,null,n,a)):Ri(e,t,n,a),t.memoizedState=o.state,e=t.child):e=as(e,t,a),e}function Ki(e,t,n,r){return ba(),t.flags|=256,Ri(e,t,n,r),t.child}var Gi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qi(e){return{baseLanes:e,cachePool:Ya()}}function Yi(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=zu),e}function Xi(e,t,n){var r,a=t.pendingProps,o=!1,i=0!==(128&t.flags);if((r=i)||(r=(null===e||null!==e.memoizedState)&&0!==(2&Io.current)),r&&(o=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(da){if(o?Lo(t):Mo(),(e=ca)?null!==(e=null!==(e=$d(e,pa))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==ta?{id:na,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},(n=Vr(e)).return=t,t.child=n,ua=t,ca=null):e=null,null===e)throw ma(t);return Od(e)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,o?(Mo(),s=Zi({mode:"hidden",children:s},o=t.mode),a=Wr(a,o,n,null),s.return=t,a.return=t,s.sibling=a,t.child=s,(a=t.child).memoizedState=Qi(n),a.childLanes=Yi(e,r,n),t.memoizedState=Gi,Fi(null,a)):(Lo(t),Ji(t,s))}var u=e.memoizedState;if(null!==u&&null!==(s=u.dehydrated)){if(i)256&t.flags?(Lo(t),t.flags&=-257,t=es(e,t,n)):null!==t.memoizedState?(Mo(),t.child=e.child,t.flags|=128,t=null):(Mo(),s=a.fallback,o=t.mode,a=Zi({mode:"visible",children:a.children},o),(s=Wr(s,o,n,null)).flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,ho(t,e.child,null,n),(a=t.child).memoizedState=Qi(n),a.childLanes=Yi(e,r,n),t.memoizedState=Gi,t=Fi(null,a));else if(Lo(t),Od(s)){if(r=s.nextSibling&&s.nextSibling.dataset)var c=r.dgst;r=c,(a=Error(l(419))).stack="",a.digest=r,wa({value:a,source:null,stack:null}),t=es(e,t,n)}else if(Ni||Ta(e,t,n,!1),r=0!==(n&e.childLanes),Ni||r){if(null!==(r=hu)&&(0!==(a=Le(r,n))&&a!==u.retryLane))throw u.retryLane=a,Nr(e,a),Gu(r,e,a),Oi;jd(s)||lc(),t=es(e,t,n)}else jd(s)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,ca=Nd(s.nextSibling),ua=t,da=!0,fa=null,pa=!1,null!==e&&sa(t,e),(t=Ji(t,a.children)).flags|=4096);return t}return o?(Mo(),s=a.fallback,o=t.mode,c=(u=e.child).sibling,(a=Ir(u,{mode:"hidden",children:a.children})).subtreeFlags=65011712&u.subtreeFlags,null!==c?s=Ir(c,s):(s=Wr(s,o,n,null)).flags|=2,s.return=t,a.return=t,a.sibling=s,t.child=a,Fi(null,a),a=t.child,null===(s=e.child.memoizedState)?s=Qi(n):(null!==(o=s.cachePool)?(u=Ma._currentValue,o=o.parent!==u?{parent:u,pool:u}:o):o=Ya(),s={baseLanes:s.baseLanes|n,cachePool:o}),a.memoizedState=s,a.childLanes=Yi(e,r,n),t.memoizedState=Gi,Fi(e.child,a)):(Lo(t),e=(n=e.child).sibling,(n=Ir(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Ji(e,t){return(t=Zi({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Zi(e,t){return(e=Mr(22,e,null,t)).lanes=0,e}function es(e,t,n){return ho(t,e.child,null,n),(e=Ji(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ts(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),za(e.return,t,n)}function ns(e,t,n,r,a,o){var l=e.memoizedState;null===l?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a,l.treeForkCount=o)}function rs(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;r=r.children;var l=Io.current,i=0!==(2&l);if(i?(l=1&l|2,t.flags|=128):l&=1,H(Io,l),Ri(e,t,r,n),r=da?Jr:0,!i&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ts(e,n,t);else if(19===e.tag)ts(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===Ho(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ns(t,!1,a,n,o,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Ho(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ns(t,!0,n,null,o,r);break;case"together":ns(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function as(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Eu|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Ta(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(l(153));if(null!==t.child){for(n=Ir(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ir(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function os(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!$a(e))}function ls(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Ni=!0;else{if(!os(e,n)&&0===(128&t.flags))return Ni=!1,function(e,t,n){switch(t.tag){case 3:G(t,t.stateNode.containerInfo),Ca(0,Ma,e.memoizedState.cache),ba();break;case 27:case 5:Y(t);break;case 4:G(t,t.stateNode.containerInfo);break;case 10:Ca(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,Ao(t),null;break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Lo(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Xi(e,t,n):(Lo(t),null!==(e=as(e,t,n))?e.sibling:null);Lo(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Ta(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return rs(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),H(Io,Io.current),r)break;return null;case 22:return t.lanes=0,Mi(e,t,n,t.pendingProps);case 24:Ca(0,Ma,e.memoizedState.cache)}return as(e,t,n)}(e,t,n);Ni=0!==(131072&e.flags)}else Ni=!1,da&&0!==(1048576&t.flags)&&oa(t,Jr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=ro(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var a=e.$$typeof;if(a===k){t.tag=11,t=Li(null,t,e,r,n);break e}if(a===C){t.tag=14,t=Ai(null,t,e,r,n);break e}}throw t=O(e)||e,Error(l(306,t,""))}Fr(e)?(r=Si(e,r),t.tag=1,t=qi(null,t,e,r,n)):(t.tag=0,t=Bi(null,t,e,r,n))}return t;case 0:return Bi(e,t,t.type,t.pendingProps,n);case 1:return qi(e,t,r=t.type,a=Si(r,t.pendingProps),n);case 3:e:{if(G(t,t.stateNode.containerInfo),null===e)throw Error(l(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,yo(e,t),Co(t,r,null,n);var i=t.memoizedState;if(r=i.cache,Ca(0,Ma,r),r!==o.cache&&Pa(t,[Ma],n,!0),Eo(),r=i.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Ki(e,t,r,n);break e}if(r!==a){wa(a=Gr(Error(l(424)),t)),t=Ki(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(ca=Nd(e.firstChild),ua=t,da=!0,fa=null,pa=!0,n=mo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ba(),r===a){t=as(e,t,n);break e}Ri(e,t,r,n)}t=t.child}return t;case 26:return Wi(e,t),null===e?(n=Vd(t.type,null,t.pendingProps,null))?t.memoizedState=n:da||(n=t.type,e=t.pendingProps,(r=gd(q.current).createElement(n))[He]=t,r[Ue]=e,fd(r,n,e),et(r),t.stateNode=r):t.memoizedState=Vd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Y(t),null===e&&da&&(r=t.stateNode=Dd(t.type,t.pendingProps,q.current),ua=t,pa=!0,a=ca,_d(t.type)?(Rd=a,ca=Nd(r.firstChild)):ca=a),Ri(e,t,t.pendingProps.children,n),Wi(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&da&&((a=r=ca)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ge])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===o)return e}if(null===(e=Nd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,pa))?(t.stateNode=r,ua=t,ca=Nd(r.firstChild),pa=!1,a=!0):a=!1),a||ma(t)),Y(t),a=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,r=o.children,bd(a,o)?r=null:null!==i&&bd(a,i)&&(t.flags|=32),null!==t.memoizedState&&(a=tl(e,t,al,null,null,n),df._currentValue=a),Wi(e,t),Ri(e,t,r,n),t.child;case 6:return null===e&&da&&((e=n=ca)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=Nd(e.nextSibling)))return null}return e}(n,t.pendingProps,pa))?(t.stateNode=n,ua=t,ca=null,e=!0):e=!1),e||ma(t)),null;case 13:return Xi(e,t,n);case 4:return G(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ho(t,null,r,n):Ri(e,t,r,n),t.child;case 11:return Li(e,t,t.type,t.pendingProps,n);case 7:return Ri(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ri(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ca(0,t.type,r.value),Ri(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ja(t),r=r(a=Oa(a)),t.flags|=1,Ri(e,t,r,n),t.child;case 14:return Ai(e,t,t.type,t.pendingProps,n);case 15:return Di(e,t,t.type,t.pendingProps,n);case 19:return rs(e,t,n);case 31:return function(e,t,n){var r=t.pendingProps,a=0!==(128&t.flags);if(t.flags&=-129,null===e){if(da){if("hidden"===r.mode)return e=Hi(t,r),t.lanes=536870912,Fi(null,e);if(Ao(t),(e=ca)?null!==(e=null!==(e=$d(e,pa))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==ta?{id:na,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},(n=Vr(e)).return=t,t.child=n,ua=t,ca=null):e=null,null===e)throw ma(t);return t.lanes=536870912,null}return Hi(t,r)}var o=e.memoizedState;if(null!==o){var i=o.dehydrated;if(Ao(t),a)if(256&t.flags)t.flags&=-257,t=Ui(e,t,n);else{if(null===t.memoizedState)throw Error(l(558));t.child=e.child,t.flags|=128,t=null}else if(Ni||Ta(e,t,n,!1),a=0!==(n&e.childLanes),Ni||a){if(null!==(r=hu)&&0!==(i=Le(r,n))&&i!==o.retryLane)throw o.retryLane=i,Nr(e,i),Gu(r,e,i),Oi;lc(),t=Ui(e,t,n)}else e=o.treeContext,ca=Nd(i.nextSibling),ua=t,da=!0,fa=null,pa=!1,null!==e&&sa(t,e),(t=Hi(t,r)).flags|=4096;return t}return(e=Ir(e.child,{mode:r.mode,children:r.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return Mi(e,t,n,t.pendingProps);case 24:return ja(t),r=Oa(Ma),null===e?(null===(a=Ga())&&(a=hu,o=Fa(),a.pooledCache=o,o.refCount++,null!==o&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},vo(t),Ca(0,Ma,a)):(0!==(e.lanes&n)&&(yo(e,t),Co(t,null,null,n),Eo()),a=e.memoizedState,o=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),Ca(0,Ma,r)):(r=o.cache,Ca(0,Ma,r),r!==a.cache&&Pa(t,[Ma],n,!0))),Ri(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function is(e){e.flags|=4}function ss(e,t,n,r,a){if((t=0!==(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&a)===a)if(e.stateNode.complete)e.flags|=8192;else{if(!rc())throw ao=eo,Ja;e.flags|=8192}}else e.flags&=-16777217}function us(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!af(t)){if(!rc())throw ao=eo,Ja;e.flags|=8192}}function cs(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?$e():536870912,e.lanes|=t,Pu|=t)}function ds(e,t){if(!da)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ps(e,t,n){var r=t.pendingProps;switch(ia(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return fs(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),_a(Ma),Q(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ya(t)?is(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,xa())),fs(t),null;case 26:var a=t.type,o=t.memoizedState;return null===e?(is(t),null!==o?(fs(t),us(t,o)):(fs(t),ss(t,a,0,0,n))):o?o!==e.memoizedState?(is(t),fs(t),us(t,o)):(fs(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&is(t),fs(t),ss(t,a,0,0,n)),null;case 27:if(X(t),n=q.current,a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&is(t);else{if(!r){if(null===t.stateNode)throw Error(l(166));return fs(t),null}e=B.current,ya(t)?ga(t):(e=Dd(a,r,n),t.stateNode=e,is(t))}return fs(t),null;case 5:if(X(t),a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&is(t);else{if(!r){if(null===t.stateNode)throw Error(l(166));return fs(t),null}if(o=B.current,ya(t))ga(t);else{var i=gd(q.current);switch(o){case 1:o=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:o=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":o=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":o=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":(o=i.createElement("div")).innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o="string"===typeof r.is?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o="string"===typeof r.is?i.createElement(a,{is:r.is}):i.createElement(a)}}o[He]=t,o[Ue]=r;e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)o.appendChild(i.stateNode);else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;null===i.sibling;){if(null===i.return||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=o;e:switch(fd(o,a,r),a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&is(t)}}return fs(t),ss(t,t.type,null===e||e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&is(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(l(166));if(e=q.current,ya(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=ua))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[He]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||ud(e.nodeValue,n)))||ma(t,!0)}else(e=gd(e).createTextNode(r))[He]=t,t.stateNode=e}return fs(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=ya(t),null!==n){if(null===e){if(!r)throw Error(l(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(l(557));e[He]=t}else ba(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;fs(t),e=!1}else n=xa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(Fo(t),t):(Fo(t),null);if(0!==(128&t.flags))throw Error(l(558))}return fs(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=ya(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(l(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(l(317));a[He]=t}else ba(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;fs(t),a=!1}else a=xa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return 256&t.flags?(Fo(t),t):(Fo(t),null)}return Fo(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool),o=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),cs(t,t.updateQueue),fs(t),null);case 4:return Q(),null===e&&Zc(t.stateNode.containerInfo),fs(t),null;case 10:return _a(t.type),fs(t),null;case 19:if(I(Io),null===(r=t.memoizedState))return fs(t),null;if(a=0!==(128&t.flags),null===(o=r.rendering))if(a)ds(r,!1);else{if(0!==Su||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=Ho(e))){for(t.flags|=128,ds(r,!1),e=o.updateQueue,t.updateQueue=e,cs(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Hr(n,e),n=n.sibling;return H(Io,1&Io.current|2),da&&aa(t,r.treeForkCount),t.child}e=e.sibling}null!==r.tail&&se()>Ru&&(t.flags|=128,a=!0,ds(r,!1),t.lanes=4194304)}else{if(!a)if(null!==(e=Ho(o))){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,cs(t,e),ds(r,!0),null===r.tail&&"hidden"===r.tailMode&&!o.alternate&&!da)return fs(t),null}else 2*se()-r.renderingStartTime>Ru&&536870912!==n&&(t.flags|=128,a=!0,ds(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=r.last)?e.sibling=o:t.child=o,r.last=o)}return null!==r.tail?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=se(),e.sibling=null,n=Io.current,H(Io,a?1&n|2:1&n),da&&aa(t,r.treeForkCount),e):(fs(t),null);case 22:case 23:return Fo(t),Oo(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(fs(t),6&t.subtreeFlags&&(t.flags|=8192)):fs(t),null!==(n=t.updateQueue)&&cs(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&I(Ka),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),_a(Ma),fs(t),null;case 25:case 30:return null}throw Error(l(156,t.tag))}function hs(e,t){switch(ia(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return _a(Ma),Q(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return X(t),null;case 31:if(null!==t.memoizedState){if(Fo(t),null===t.alternate)throw Error(l(340));ba()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(Fo(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(l(340));ba()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return I(Io),null;case 4:return Q(),null;case 10:return _a(t.type),null;case 22:case 23:return Fo(t),Oo(),null!==e&&I(Ka),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return _a(Ma),null;default:return null}}function ms(e,t){switch(ia(t),t.tag){case 3:_a(Ma),Q();break;case 26:case 27:case 5:X(t);break;case 4:Q();break;case 31:null!==t.memoizedState&&Fo(t);break;case 13:Fo(t);break;case 19:I(Io);break;case 10:_a(t.type);break;case 22:case 23:Fo(t),Oo(),null!==e&&I(Ka);break;case 24:_a(Ma)}}function gs(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var o=n.create,l=n.inst;r=o(),l.destroy=r}n=n.next}while(n!==a)}}catch(i){Sc(t,t.return,i)}}function vs(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var o=a.next;r=o;do{if((r.tag&e)===e){var l=r.inst,i=l.destroy;if(void 0!==i){l.destroy=void 0,a=t;var s=n,u=i;try{u()}catch(c){Sc(a,s,c)}}}r=r.next}while(r!==o)}}catch(c){Sc(t,t.return,c)}}function ys(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{zo(t,n)}catch(r){Sc(e,e.return,r)}}}function bs(e,t,n){n.props=Si(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Sc(e,t,r)}}function xs(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(a){Sc(e,t,a)}}function ws(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){Sc(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(o){Sc(e,t,o)}else n.current=null}function ks(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){Sc(e,e.return,a)}}function Ss(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,i=null,s=null,u=null,c=null,d=null;for(h in n){var f=n[h];if(n.hasOwnProperty(h)&&null!=f)switch(h){case"checked":case"value":break;case"defaultValue":u=f;default:r.hasOwnProperty(h)||cd(e,t,h,null,r,f)}}for(var p in r){var h=r[p];if(f=n[p],r.hasOwnProperty(p)&&(null!=h||null!=f))switch(p){case"type":o=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":d=h;break;case"value":i=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(l(137,t));break;default:h!==f&&cd(e,t,p,h,r,f)}}return void yt(e,i,s,u,c,d,o,a);case"select":for(o in h=i=s=p=null,n)if(u=n[o],n.hasOwnProperty(o)&&null!=u)switch(o){case"value":break;case"multiple":h=u;default:r.hasOwnProperty(o)||cd(e,t,o,null,r,u)}for(a in r)if(o=r[a],u=n[a],r.hasOwnProperty(a)&&(null!=o||null!=u))switch(a){case"value":p=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:o!==u&&cd(e,t,a,o,r,u)}return t=s,n=i,r=h,void(null!=p?wt(e,!!n,p,!1):!!r!==!!n&&(null!=t?wt(e,!!n,t,!0):wt(e,!!n,n?[]:"",!1)));case"textarea":for(s in h=p=null,n)if(a=n[s],n.hasOwnProperty(s)&&null!=a&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:cd(e,t,s,null,r,a)}for(i in r)if(a=r[i],o=n[i],r.hasOwnProperty(i)&&(null!=a||null!=o))switch(i){case"value":p=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(l(91));break;default:a!==o&&cd(e,t,i,a,r,o)}return void kt(e,p,h);case"option":for(var m in n)if(p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else cd(e,t,m,null,r,p);for(u in r)if(p=r[u],h=n[u],r.hasOwnProperty(u)&&p!==h&&(null!=p||null!=h))if("selected"===u)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else cd(e,t,u,p,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g)&&cd(e,t,g,null,r,p);for(c in r)if(p=r[c],h=n[c],r.hasOwnProperty(c)&&p!==h&&(null!=p||null!=h))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(l(137,t));break;default:cd(e,t,c,p,r,h)}return;default:if(Pt(t)){for(var v in n)p=n[v],n.hasOwnProperty(v)&&void 0!==p&&!r.hasOwnProperty(v)&&dd(e,t,v,void 0,r,p);for(d in r)p=r[d],h=n[d],!r.hasOwnProperty(d)||p===h||void 0===p&&void 0===h||dd(e,t,d,p,r,h);return}}for(var y in n)p=n[y],n.hasOwnProperty(y)&&null!=p&&!r.hasOwnProperty(y)&&cd(e,t,y,null,r,p);for(f in r)p=r[f],h=n[f],!r.hasOwnProperty(f)||p===h||null==p&&null==h||cd(e,t,f,p,r,h)}(r,e.type,n,t),r[Ue]=t}catch(a){Sc(e,e.return,a)}}function Es(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&_d(e.type)||4===e.tag}function Cs(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Es(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&_d(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function _s(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Ot));else if(4!==r&&(27===r&&_d(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(_s(e,t,n),e=e.sibling;null!==e;)_s(e,t,n),e=e.sibling}function zs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&_d(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(zs(e,t,n),e=e.sibling;null!==e;)zs(e,t,n),e=e.sibling}function Ps(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);fd(t,r,n),t[He]=e,t[Ue]=n}catch(o){Sc(e,e.return,o)}}var Ts=!1,$s=!1,js=!1,Os="function"===typeof WeakSet?WeakSet:Set,Ns=null;function Rs(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Gs(e,n),4&r&&gs(5,n);break;case 1:if(Gs(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(l){Sc(n,n.return,l)}else{var a=Si(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){Sc(n,n.return,i)}}64&r&&ys(n),512&r&&xs(n,n.return);break;case 3:if(Gs(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{zo(e,t)}catch(l){Sc(n,n.return,l)}}break;case 27:null===t&&4&r&&Ps(n);case 26:case 5:Gs(e,n),null===t&&4&r&&ks(n),512&r&&xs(n,n.return);break;case 12:Gs(e,n);break;case 31:Gs(e,n),4&r&&Is(e,n);break;case 13:Gs(e,n),4&r&&Hs(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=zc.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||Ts)){t=null!==t&&null!==t.memoizedState||$s,a=Ts;var o=$s;Ts=r,($s=t)&&!o?Ys(e,n,0!==(8772&n.subtreeFlags)):Gs(e,n),Ts=a,$s=o}break;case 30:break;default:Gs(e,n)}}function Ls(e){var t=e.alternate;null!==t&&(e.alternate=null,Ls(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Qe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var As=null,Ds=!1;function Ms(e,t,n){for(n=n.child;null!==n;)Fs(e,t,n),n=n.sibling}function Fs(e,t,n){if(ye&&"function"===typeof ye.onCommitFiberUnmount)try{ye.onCommitFiberUnmount(ve,n)}catch(o){}switch(n.tag){case 26:$s||ws(n,t),Ms(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:$s||ws(n,t);var r=As,a=Ds;_d(n.type)&&(As=n.stateNode,Ds=!1),Ms(e,t,n),Md(n.stateNode),As=r,Ds=a;break;case 5:$s||ws(n,t);case 6:if(r=As,a=Ds,As=null,Ms(e,t,n),Ds=a,null!==(As=r))if(Ds)try{(9===As.nodeType?As.body:"HTML"===As.nodeName?As.ownerDocument.body:As).removeChild(n.stateNode)}catch(l){Sc(n,t,l)}else try{As.removeChild(n.stateNode)}catch(l){Sc(n,t,l)}break;case 18:null!==As&&(Ds?(zd(9===(e=As).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Vf(e)):zd(As,n.stateNode));break;case 4:r=As,a=Ds,As=n.stateNode.containerInfo,Ds=!0,Ms(e,t,n),As=r,Ds=a;break;case 0:case 11:case 14:case 15:vs(2,n,t),$s||vs(4,n,t),Ms(e,t,n);break;case 1:$s||(ws(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&bs(n,t,r)),Ms(e,t,n);break;case 21:Ms(e,t,n);break;case 22:$s=(r=$s)||null!==n.memoizedState,Ms(e,t,n),$s=r;break;default:Ms(e,t,n)}}function Is(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{Vf(e)}catch(n){Sc(t,t.return,n)}}}function Hs(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Vf(e)}catch(n){Sc(t,t.return,n)}}function Us(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Os),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Os),t;default:throw Error(l(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Pc.bind(null,e,t);t.then(r,r)}})}function Ws(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],o=e,i=t,s=i;e:for(;null!==s;){switch(s.tag){case 27:if(_d(s.type)){As=s.stateNode,Ds=!1;break e}break;case 5:As=s.stateNode,Ds=!1;break e;case 3:case 4:As=s.stateNode.containerInfo,Ds=!0;break e}s=s.return}if(null===As)throw Error(l(160));Fs(o,i,a),As=null,Ds=!1,null!==(o=a.alternate)&&(o.return=null),a.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)Vs(t,e),t=t.sibling}var Bs=null;function Vs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ws(t,e),qs(e),4&r&&(vs(3,e,e.return),gs(3,e),vs(5,e,e.return));break;case 1:Ws(t,e),qs(e),512&r&&($s||null===n||ws(n,n.return)),64&r&&Ts&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=Bs;if(Ws(t,e),qs(e),512&r&&($s||null===n||ws(n,n.return)),4&r){var o=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(o=a.getElementsByTagName("title")[0])||o[Ge]||o[He]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector("head > title"))),fd(o,r,n),o[He]=e,et(o),r=o;break e;case"link":var i=nf("link","href",a).get(r+(n.href||""));if(i)for(var s=0;s<i.length;s++)if((o=i[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){i.splice(s,1);break t}fd(o=a.createElement(r),r,n),a.head.appendChild(o);break;case"meta":if(i=nf("meta","content",a).get(r+(n.content||"")))for(s=0;s<i.length;s++)if((o=i[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){i.splice(s,1);break t}fd(o=a.createElement(r),r,n),a.head.appendChild(o);break;default:throw Error(l(468,r))}o[He]=e,et(o),r=o}e.stateNode=r}else rf(a,e.type,e.stateNode);else e.stateNode=Xd(a,r,e.memoizedProps);else o!==r?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===r?rf(a,e.type,e.stateNode):Xd(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&Ss(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ws(t,e),qs(e),512&r&&($s||null===n||ws(n,n.return)),null!==n&&4&r&&Ss(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ws(t,e),qs(e),512&r&&($s||null===n||ws(n,n.return)),32&e.flags){a=e.stateNode;try{Et(a,"")}catch(m){Sc(e,e.return,m)}}4&r&&null!=e.stateNode&&Ss(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(js=!0);break;case 6:if(Ws(t,e),qs(e),4&r){if(null===e.stateNode)throw Error(l(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(m){Sc(e,e.return,m)}}break;case 3:if(tf=null,a=Bs,Bs=Hd(t.containerInfo),Ws(t,e),Bs=a,qs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Vf(t.containerInfo)}catch(m){Sc(e,e.return,m)}js&&(js=!1,Ks(e));break;case 4:r=Bs,Bs=Hd(e.stateNode.containerInfo),Ws(t,e),qs(e),Bs=r;break;case 12:default:Ws(t,e),qs(e);break;case 31:case 19:Ws(t,e),qs(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Us(e,r)));break;case 13:Ws(t,e),qs(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(Ou=se()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Us(e,r)));break;case 22:a=null!==e.memoizedState;var u=null!==n&&null!==n.memoizedState,c=Ts,d=$s;if(Ts=c||a,$s=d||u,Ws(t,e),$s=d,Ts=c,qs(e),8192&r)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===n||u||Ts||$s||Qs(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){u=n=t;try{if(o=u.stateNode,a)"function"===typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none";else{s=u.stateNode;var f=u.memoizedProps.style,p=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null;s.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(m){Sc(u,u.return,m)}}}else if(6===t.tag){if(null===n){u=t;try{u.stateNode.nodeValue=a?"":u.memoizedProps}catch(m){Sc(u,u.return,m)}}}else if(18===t.tag){if(null===n){u=t;try{var h=u.stateNode;a?Pd(h,!0):Pd(u.stateNode,!1)}catch(m){Sc(u,u.return,m)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Us(e,n))));case 30:case 21:}}function qs(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(Es(r)){n=r;break}r=r.return}if(null==n)throw Error(l(160));switch(n.tag){case 27:var a=n.stateNode;zs(e,Cs(e),a);break;case 5:var o=n.stateNode;32&n.flags&&(Et(o,""),n.flags&=-33),zs(e,Cs(e),o);break;case 3:case 4:var i=n.stateNode.containerInfo;_s(e,Cs(e),i);break;default:throw Error(l(161))}}catch(s){Sc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ks(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Ks(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Gs(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Rs(e,t.alternate,t),t=t.sibling}function Qs(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:vs(4,t,t.return),Qs(t);break;case 1:ws(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&bs(t,t.return,n),Qs(t);break;case 27:Md(t.stateNode);case 26:case 5:ws(t,t.return),Qs(t);break;case 22:null===t.memoizedState&&Qs(t);break;default:Qs(t)}e=e.sibling}}function Ys(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,o=t,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ys(a,o,n),gs(4,o);break;case 1:if(Ys(a,o,n),"function"===typeof(a=(r=o).stateNode).componentDidMount)try{a.componentDidMount()}catch(u){Sc(r,r.return,u)}if(null!==(a=(r=o).updateQueue)){var i=r.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)_o(s[a],i)}catch(u){Sc(r,r.return,u)}}n&&64&l&&ys(o),xs(o,o.return);break;case 27:Ps(o);case 26:case 5:Ys(a,o,n),n&&null===r&&4&l&&ks(o),xs(o,o.return);break;case 12:Ys(a,o,n);break;case 31:Ys(a,o,n),n&&4&l&&Is(a,o);break;case 13:Ys(a,o,n),n&&4&l&&Hs(a,o);break;case 22:null===o.memoizedState&&Ys(a,o,n),xs(o,o.return);break;case 30:break;default:Ys(a,o,n)}t=t.sibling}}function Xs(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ia(n))}function Js(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ia(e))}function Zs(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)eu(e,t,n,r),t=t.sibling}function eu(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Zs(e,t,n,r),2048&a&&gs(9,t);break;case 1:case 31:case 13:default:Zs(e,t,n,r);break;case 3:Zs(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ia(e)));break;case 12:if(2048&a){Zs(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,l=o.id,i=o.onPostCommit;"function"===typeof i&&i(l,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){Sc(t,t.return,s)}}else Zs(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,l=t.alternate,null!==t.memoizedState?2&o._visibility?Zs(e,t,n,r):nu(e,t):2&o._visibility?Zs(e,t,n,r):(o._visibility|=2,tu(e,t,n,r,0!==(10256&t.subtreeFlags)||!1)),2048&a&&Xs(l,t);break;case 24:Zs(e,t,n,r),2048&a&&Js(t.alternate,t)}}function tu(e,t,n,r,a){for(a=a&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var o=e,l=t,i=n,s=r,u=l.flags;switch(l.tag){case 0:case 11:case 15:tu(o,l,i,s,a),gs(8,l);break;case 23:break;case 22:var c=l.stateNode;null!==l.memoizedState?2&c._visibility?tu(o,l,i,s,a):nu(o,l):(c._visibility|=2,tu(o,l,i,s,a)),a&&2048&u&&Xs(l.alternate,l);break;case 24:tu(o,l,i,s,a),a&&2048&u&&Js(l.alternate,l);break;default:tu(o,l,i,s,a)}t=t.sibling}}function nu(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:nu(n,r),2048&a&&Xs(r.alternate,r);break;case 24:nu(n,r),2048&a&&Js(r.alternate,r);break;default:nu(n,r)}t=t.sibling}}var ru=8192;function au(e,t,n){if(e.subtreeFlags&ru)for(e=e.child;null!==e;)ou(e,t,n),e=e.sibling}function ou(e,t,n){switch(e.tag){case 26:au(e,t,n),e.flags&ru&&null!==e.memoizedState&&function(e,t,n,r){if("stylesheet"===n.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var a=qd(r.href),o=t.querySelector(Kd(a));if(o)return null!==(t=o._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=lf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,void et(o);o=t.ownerDocument||t,r=Gd(r),(a=Fd.get(a))&&Zd(r,a),et(o=o.createElement("link"));var l=o;l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),fd(o,"link",r),n.instance=o}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=lf.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,Bs,e.memoizedState,e.memoizedProps);break;case 5:default:au(e,t,n);break;case 3:case 4:var r=Bs;Bs=Hd(e.stateNode.containerInfo),au(e,t,n),Bs=r;break;case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=ru,ru=16777216,au(e,t,n),ru=r):au(e,t,n))}}function lu(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function iu(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Ns=r,cu(r,e)}lu(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)su(e),e=e.sibling}function su(e){switch(e.tag){case 0:case 11:case 15:iu(e),2048&e.flags&&vs(9,e,e.return);break;case 3:case 12:default:iu(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,uu(e)):iu(e)}}function uu(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Ns=r,cu(r,e)}lu(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:vs(8,t,t.return),uu(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,uu(t));break;default:uu(t)}e=e.sibling}}function cu(e,t){for(;null!==Ns;){var n=Ns;switch(n.tag){case 0:case 11:case 15:vs(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Ia(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Ns=r;else e:for(n=e;null!==Ns;){var a=(r=Ns).sibling,o=r.return;if(Ls(r),r===n){Ns=null;break e}if(null!==a){a.return=o,Ns=a;break e}Ns=o}}}var du={getCacheForType:function(e){var t=Oa(Ma),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Oa(Ma).controller.signal}},fu="function"===typeof WeakMap?WeakMap:Map,pu=0,hu=null,mu=null,gu=0,vu=0,yu=null,bu=!1,xu=!1,wu=!1,ku=0,Su=0,Eu=0,Cu=0,_u=0,zu=0,Pu=0,Tu=null,$u=null,ju=!1,Ou=0,Nu=0,Ru=1/0,Lu=null,Au=null,Du=0,Mu=null,Fu=null,Iu=0,Hu=0,Uu=null,Wu=null,Bu=0,Vu=null;function qu(){return 0!==(2&pu)&&0!==gu?gu&-gu:null!==R.T?Uc():Me()}function Ku(){if(0===zu)if(0===(536870912&gu)||da){var e=Ee;0===(3932160&(Ee<<=1))&&(Ee=262144),zu=e}else zu=536870912;return null!==(e=No.current)&&(e.flags|=32),zu}function Gu(e,t,n){(e!==hu||2!==vu&&9!==vu)&&null===e.cancelPendingCommit||(tc(e,0),Ju(e,gu,zu,!1)),Oe(e,n),0!==(2&pu)&&e===hu||(e===hu&&(0===(2&pu)&&(Cu|=n),4===Su&&Ju(e,gu,zu,!1)),Lc(e))}function Qu(e,t,n){if(0!==(6&pu))throw Error(l(327));for(var r=!n&&0===(127&t)&&0===(t&e.expiredLanes)||Pe(e,t),a=r?function(e,t){var n=pu;pu|=2;var r=ac(),a=oc();hu!==e||gu!==t?(Lu=null,Ru=se()+500,tc(e,t)):xu=Pe(e,t);e:for(;;)try{if(0!==vu&&null!==mu){t=mu;var o=yu;t:switch(vu){case 1:vu=0,yu=null,fc(e,t,o,1);break;case 2:case 9:if(to(o)){vu=0,yu=null,dc(t);break}t=function(){2!==vu&&9!==vu||hu!==e||(vu=7),Lc(e)},o.then(t,t);break e;case 3:vu=7;break e;case 4:vu=5;break e;case 7:to(o)?(vu=0,yu=null,dc(t)):(vu=0,yu=null,fc(e,t,o,7));break;case 5:var i=null;switch(mu.tag){case 26:i=mu.memoizedState;case 5:case 27:var s=mu;if(i?af(i):s.stateNode.complete){vu=0,yu=null;var u=s.sibling;if(null!==u)mu=u;else{var c=s.return;null!==c?(mu=c,pc(c)):mu=null}break t}}vu=0,yu=null,fc(e,t,o,5);break;case 6:vu=0,yu=null,fc(e,t,o,6);break;case 8:ec(),Su=6;break e;default:throw Error(l(462))}}uc();break}catch(d){nc(e,d)}return Ea=Sa=null,R.H=r,R.A=a,pu=n,null!==mu?0:(hu=null,gu=0,$r(),Su)}(e,t):ic(e,t,!0),o=r;;){if(0===a){xu&&!r&&Ju(e,t,0,!1);break}if(n=e.current.alternate,!o||Xu(n)){if(2===a){if(o=t,e.errorRecoveryDisabledLanes&o)var i=0;else i=0!==(i=-536870913&e.pendingLanes)?i:536870912&i?536870912:0;if(0!==i){t=i;e:{var s=e;a=Tu;var u=s.current.memoizedState.isDehydrated;if(u&&(tc(s,i).flags|=256),2!==(i=ic(s,i,!1))){if(wu&&!u){s.errorRecoveryDisabledLanes|=o,Cu|=o,a=4;break e}o=$u,$u=a,null!==o&&(null===$u?$u=o:$u.push.apply($u,o))}a=i}if(o=!1,2!==a)continue}}if(1===a){tc(e,0),Ju(e,t,0,!0);break}e:{switch(r=e,o=a){case 0:case 1:throw Error(l(345));case 4:if((4194048&t)!==t)break;case 6:Ju(r,t,zu,!bu);break e;case 2:$u=null;break;case 3:case 5:break;default:throw Error(l(329))}if((62914560&t)===t&&10<(a=Ou+300-se())){if(Ju(r,t,zu,!bu),0!==ze(r,0,!0))break e;Iu=t,r.timeoutHandle=wd(Yu.bind(null,r,n,$u,Lu,ju,t,zu,Cu,Pu,bu,o,"Throttled",-0,0),a)}else Yu(r,n,$u,Lu,ju,t,zu,Cu,Pu,bu,o,null,-0,0)}break}a=ic(e,t,!1),o=!1}Lc(e)}function Yu(e,t,n,r,a,o,l,i,s,u,c,d,f,p){if(e.timeoutHandle=-1,8192&(d=t.subtreeFlags)||16785408===(16785408&d)){ou(t,o,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot});var h=(62914560&o)===o?Ou-se():(4194048&o)===o?Nu-se():0;if(null!==(h=function(e,t){return e.stylesheets&&0===e.count&&uf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&uf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&0===of&&(of=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var a=n[r],o=a.transferSize,l=a.initiatorType,i=a.duration;if(o&&i&&pd(l)){for(l=0,i=a.responseEnd,r+=1;r<n.length;r++){var s=n[r],u=s.startTime;if(u>i)break;var c=s.transferSize,d=s.initiatorType;c&&pd(d)&&(l+=c*((s=s.responseEnd)<i?1:(i-u)/(s-u)))}if(--r,t+=8*(o+l)/(a.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"===typeof(e=navigator.connection.downlink)?e:5}());var a=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&uf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>of?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(a)}}:null}(d,h)))return Iu=o,e.cancelPendingCommit=h(mc.bind(null,e,t,o,n,r,a,l,i,s,c,d,null,f,p)),void Ju(e,o,l,!u)}mc(e,t,o,n,r,a,l,i,s)}function Xu(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!Jn(o(),a))return!1}catch(l){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ju(e,t,n,r){t&=~_u,t&=~Cu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var o=31-xe(a),l=1<<o;r[o]=-1,a&=~l}0!==n&&Ne(e,n,t)}function Zu(){return 0!==(6&pu)||(Ac(0,!1),!1)}function ec(){if(null!==mu){if(0===vu)var e=mu.return;else Ea=Sa=null,il(e=mu),io=null,so=0,e=mu;for(;null!==e;)ms(e.alternate,e),e=e.return;mu=null}}function tc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,kd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Iu=0,ec(),hu=e,mu=n=Ir(e.current,null),gu=t,vu=0,yu=null,bu=!1,xu=Pe(e,t),wu=!1,Pu=zu=_u=Cu=Eu=Su=0,$u=Tu=null,ju=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-xe(r),o=1<<a;t|=e[a],r&=~o}return ku=t,$r(),n}function nc(e,t){Wo=null,R.H=mi,t===Xa||t===Za?(t=oo(),vu=3):t===Ja?(t=oo(),vu=4):vu=t===Oi?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,yu=t,null===mu&&(Su=1,zi(e,Gr(t,e.current)))}function rc(){var e=No.current;return null===e||((4194048&gu)===gu?null===Ro:((62914560&gu)===gu||0!==(536870912&gu))&&e===Ro)}function ac(){var e=R.H;return R.H=mi,null===e?mi:e}function oc(){var e=R.A;return R.A=du,e}function lc(){Su=4,bu||(4194048&gu)!==gu&&null!==No.current||(xu=!0),0===(134217727&Eu)&&0===(134217727&Cu)||null===hu||Ju(hu,gu,zu,!1)}function ic(e,t,n){var r=pu;pu|=2;var a=ac(),o=oc();hu===e&&gu===t||(Lu=null,tc(e,t)),t=!1;var l=Su;e:for(;;)try{if(0!==vu&&null!==mu){var i=mu,s=yu;switch(vu){case 8:ec(),l=6;break e;case 3:case 2:case 9:case 6:null===No.current&&(t=!0);var u=vu;if(vu=0,yu=null,fc(e,i,s,u),n&&xu){l=0;break e}break;default:u=vu,vu=0,yu=null,fc(e,i,s,u)}}sc(),l=Su;break}catch(c){nc(e,c)}return t&&e.shellSuspendCounter++,Ea=Sa=null,pu=r,R.H=a,R.A=o,null===mu&&(hu=null,gu=0,$r()),l}function sc(){for(;null!==mu;)cc(mu)}function uc(){for(;null!==mu&&!le();)cc(mu)}function cc(e){var t=ls(e.alternate,e,ku);e.memoizedProps=e.pendingProps,null===t?pc(e):mu=t}function dc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Vi(n,t,t.pendingProps,t.type,void 0,gu);break;case 11:t=Vi(n,t,t.pendingProps,t.type.render,t.ref,gu);break;case 5:il(t);default:ms(n,t),t=ls(n,t=mu=Hr(t,ku),ku)}e.memoizedProps=e.pendingProps,null===t?pc(e):mu=t}function fc(e,t,n,r){Ea=Sa=null,il(t),io=null,so=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Ta(t,n,a,!0),null!==(n=No.current)){switch(n.tag){case 31:case 13:return null===Ro?lc():null===n.alternate&&0===Su&&(Su=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===eo?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),Ec(e,r,a)),!1;case 22:return n.flags|=65536,r===eo?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),Ec(e,r,a)),!1}throw Error(l(435,n.tag))}return Ec(e,r,a),lc(),!1}if(da)return null!==(t=No.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ha&&wa(Gr(e=Error(l(422),{cause:r}),n))):(r!==ha&&wa(Gr(t=Error(l(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=Gr(r,n),ko(e,a=Ti(e.stateNode,r,a)),4!==Su&&(Su=2)),!1;var o=Error(l(520),{cause:r});if(o=Gr(o,n),null===Tu?Tu=[o]:Tu.push(o),4!==Su&&(Su=2),null===t)return!0;r=Gr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,ko(n,e=Ti(n.stateNode,r,e)),!1;case 1:if(t=n.type,o=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===Au||!Au.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,ji(a=$i(a),e,n,r),ko(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,gu))return Su=1,zi(e,Gr(n,e.current)),void(mu=null)}catch(o){if(null!==a)throw mu=a,o;return Su=1,zi(e,Gr(n,e.current)),void(mu=null)}32768&t.flags?(da||1===r?e=!0:xu||0!==(536870912&gu)?e=!1:(bu=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=No.current)&&13===r.tag&&(r.flags|=16384))),hc(t,e)):pc(t)}function pc(e){var t=e;do{if(0!==(32768&t.flags))return void hc(t,bu);e=t.return;var n=ps(t.alternate,t,ku);if(null!==n)return void(mu=n);if(null!==(t=t.sibling))return void(mu=t);mu=t=e}while(null!==t);0===Su&&(Su=5)}function hc(e,t){do{var n=hs(e.alternate,e);if(null!==n)return n.flags&=32767,void(mu=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(mu=e);mu=e=n}while(null!==e);Su=6,mu=null}function mc(e,t,n,r,a,o,i,s,u){e.cancelPendingCommit=null;do{xc()}while(0!==Du);if(0!==(6&pu))throw Error(l(327));if(null!==t){if(t===e.current)throw Error(l(177));if(o=t.lanes|t.childLanes,function(e,t,n,r,a,o){var l=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var i=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(n=l&~n;0<n;){var c=31-xe(n),d=1<<c;i[c]=0,s[c]=-1;var f=u[c];if(null!==f)for(u[c]=null,c=0;c<f.length;c++){var p=f[c];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&Ne(e,r,0),0!==o&&0===a&&0!==e.tag&&(e.suspendedLanes|=o&~(l&~t))}(e,n,o|=Tr,i,s,u),e===hu&&(mu=hu=null,gu=0),Fu=t,Mu=e,Iu=n,Hu=o,Uu=a,Wu=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,ae(fe,function(){return wc(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=R.T,R.T=null,a=L.p,L.p=2,i=pu,pu|=4;try{!function(e,t){if(e=e.containerInfo,hd=xf,ar(e=rr(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(g){n=null;break e}var i=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=i+a),f!==o||0!==r&&3!==f.nodeType||(u=i+r),3===f.nodeType&&(i+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=i),p===o&&++d===r&&(u=i),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(md={focusedElem:e,selectionRange:n},xf=!1,Ns=t;null!==Ns;)if(e=(t=Ns).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Ns=e;else for(;null!==Ns;){switch(o=(t=Ns).alternate,e=t.flags,t.tag){case 0:if(0!==(4&e)&&null!==(e=null!==(e=t.updateQueue)?e.events:null))for(n=0;n<e.length;n++)(a=e[n]).ref.impl=a.nextImpl;break;case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var m=Si(n.type,a);e=r.getSnapshotBeforeUpdate(m,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(v){Sc(n,n.return,v)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))Td(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Td(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(l(163))}if(null!==(e=t.sibling)){e.return=t.return,Ns=e;break}Ns=t.return}}(e,t)}finally{pu=i,L.p=a,R.T=r}}Du=1,gc(),vc(),yc()}}function gc(){if(1===Du){Du=0;var e=Mu,t=Fu,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=R.T,R.T=null;var r=L.p;L.p=2;var a=pu;pu|=4;try{Vs(t,e);var o=md,l=rr(e.containerInfo),i=o.focusedElem,s=o.selectionRange;if(l!==i&&i&&i.ownerDocument&&nr(i.ownerDocument.documentElement,i)){if(null!==s&&ar(i)){var u=s.start,c=s.end;if(void 0===c&&(c=u),"selectionStart"in i)i.selectionStart=u,i.selectionEnd=Math.min(c,i.value.length);else{var d=i.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),h=i.textContent.length,m=Math.min(s.start,h),g=void 0===s.end?m:Math.min(s.end,h);!p.extend&&m>g&&(l=g,g=m,m=l);var v=tr(i,m),y=tr(i,g);if(v&&y&&(1!==p.rangeCount||p.anchorNode!==v.node||p.anchorOffset!==v.offset||p.focusNode!==y.node||p.focusOffset!==y.offset)){var b=d.createRange();b.setStart(v.node,v.offset),p.removeAllRanges(),m>g?(p.addRange(b),p.extend(y.node,y.offset)):(b.setEnd(y.node,y.offset),p.addRange(b))}}}}for(d=[],p=i;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof i.focus&&i.focus(),i=0;i<d.length;i++){var x=d[i];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}xf=!!hd,md=hd=null}finally{pu=a,L.p=r,R.T=n}}e.current=t,Du=2}}function vc(){if(2===Du){Du=0;var e=Mu,t=Fu,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=R.T,R.T=null;var r=L.p;L.p=2;var a=pu;pu|=4;try{Rs(e,t.alternate,t)}finally{pu=a,L.p=r,R.T=n}}Du=3}}function yc(){if(4===Du||3===Du){Du=0,ie();var e=Mu,t=Fu,n=Iu,r=Wu;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Du=5:(Du=0,Fu=Mu=null,bc(e,e.pendingLanes));var a=e.pendingLanes;if(0===a&&(Au=null),De(n),t=t.stateNode,ye&&"function"===typeof ye.onCommitFiberRoot)try{ye.onCommitFiberRoot(ve,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==r){t=R.T,a=L.p,L.p=2,R.T=null;try{for(var o=e.onRecoverableError,l=0;l<r.length;l++){var i=r[l];o(i.value,{componentStack:i.stack})}}finally{R.T=t,L.p=a}}0!==(3&Iu)&&xc(),Lc(e),a=e.pendingLanes,0!==(261930&n)&&0!==(42&a)?e===Vu?Bu++:(Bu=0,Vu=e):Bu=0,Ac(0,!1)}}function bc(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Ia(t)))}function xc(){return gc(),vc(),yc(),wc()}function wc(){if(5!==Du)return!1;var e=Mu,t=Hu;Hu=0;var n=De(Iu),r=R.T,a=L.p;try{L.p=32>n?32:n,R.T=null,n=Uu,Uu=null;var o=Mu,i=Iu;if(Du=0,Fu=Mu=null,Iu=0,0!==(6&pu))throw Error(l(331));var s=pu;if(pu|=4,su(o.current),eu(o,o.current,i,n),pu=s,Ac(0,!1),ye&&"function"===typeof ye.onPostCommitFiberRoot)try{ye.onPostCommitFiberRoot(ve,o)}catch(u){}return!0}finally{L.p=a,R.T=r,bc(e,t)}}function kc(e,t,n){t=Gr(n,t),null!==(e=xo(e,t=Ti(e.stateNode,t,2),2))&&(Oe(e,2),Lc(e))}function Sc(e,t,n){if(3===e.tag)kc(e,e,n);else for(;null!==t;){if(3===t.tag){kc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Au||!Au.has(r))){e=Gr(n,e),null!==(r=xo(t,n=$i(2),2))&&(ji(n,r,t,e),Oe(r,2),Lc(r));break}}t=t.return}}function Ec(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fu;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(wu=!0,a.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,hu===e&&(gu&n)===n&&(4===Su||3===Su&&(62914560&gu)===gu&&300>se()-Ou?0===(2&pu)&&tc(e,0):_u|=n,Pu===gu&&(Pu=0)),Lc(e)}function _c(e,t){0===t&&(t=$e()),null!==(e=Nr(e,t))&&(Oe(e,t),Lc(e))}function zc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),_c(e,n)}function Pc(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(l(314))}null!==r&&r.delete(t),_c(e,n)}var Tc=null,$c=null,jc=!1,Oc=!1,Nc=!1,Rc=0;function Lc(e){e!==$c&&null===e.next&&(null===$c?Tc=$c=e:$c=$c.next=e),Oc=!0,jc||(jc=!0,Ed(function(){0!==(6&pu)?ae(ce,Dc):Mc()}))}function Ac(e,t){if(!Nc&&Oc){Nc=!0;do{for(var n=!1,r=Tc;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var o=0;else{var l=r.suspendedLanes,i=r.pingedLanes;o=(1<<31-xe(42|e)+1)-1,o=201326741&(o&=a&~(l&~i))?201326741&o|1:o?2|o:0}0!==o&&(n=!0,Hc(r,o))}else o=gu,0===(3&(o=ze(r,r===hu?o:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||Pe(r,o)||(n=!0,Hc(r,o));r=r.next}}while(n);Nc=!1}}function Dc(){Mc()}function Mc(){Oc=jc=!1;var e=0;0!==Rc&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==xd&&(xd=e,!0);return xd=null,!1}()&&(e=Rc);for(var t=se(),n=null,r=Tc;null!==r;){var a=r.next,o=Fc(r,t);0===o?(r.next=null,null===n?Tc=a:n.next=a,null===a&&($c=n)):(n=r,(0!==e||0!==(3&o))&&(Oc=!0)),r=a}0!==Du&&5!==Du||Ac(e,!1),0!==Rc&&(Rc=0)}function Fc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var l=31-xe(o),i=1<<l,s=a[l];-1===s?0!==(i&n)&&0===(i&r)||(a[l]=Te(i,t)):s<=t&&(e.expiredLanes|=i),o&=~i}if(n=gu,n=ze(e,e===(t=hu)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===vu||9===vu)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&oe(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||Pe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&oe(r),De(n)){case 2:case 8:n=de;break;case 32:default:n=fe;break;case 268435456:n=he}return r=Ic.bind(null,e),n=ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&oe(r),e.callbackPriority=2,e.callbackNode=null,2}function Ic(e,t){if(0!==Du&&5!==Du)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(xc()&&e.callbackNode!==n)return null;var r=gu;return 0===(r=ze(e,e===hu?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Qu(e,r,t),Fc(e,se()),null!=e.callbackNode&&e.callbackNode===n?Ic.bind(null,e):null)}function Hc(e,t){if(xc())return null;Qu(e,t,!0)}function Uc(){if(0===Rc){var e=Wa;0===e&&(e=Se,0===(261888&(Se<<=1))&&(Se=256)),Rc=e}return Rc}function Wc(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:jt(""+e)}function Bc(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Vc=0;Vc<Er.length;Vc++){var qc=Er[Vc];Cr(qc.toLowerCase(),"on"+(qc[0].toUpperCase()+qc.slice(1)))}Cr(gr,"onAnimationEnd"),Cr(vr,"onAnimationIteration"),Cr(yr,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(br,"onTransitionRun"),Cr(xr,"onTransitionStart"),Cr(wr,"onTransitionCancel"),Cr(kr,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gc=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kc));function Qc(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==o&&a.isPropagationStopped())break e;o=i,a.currentTarget=u;try{o(a)}catch(c){_r(c)}a.currentTarget=null,o=s}else for(l=0;l<r.length;l++){if(s=(i=r[l]).instance,u=i.currentTarget,i=i.listener,s!==o&&a.isPropagationStopped())break e;o=i,a.currentTarget=u;try{o(a)}catch(c){_r(c)}a.currentTarget=null,o=s}}}}function Yc(e,t){var n=t[Be];void 0===n&&(n=t[Be]=new Set);var r=e+"__bubble";n.has(r)||(ed(t,e,2,!1),n.add(r))}function Xc(e,t,n){var r=0;t&&(r|=4),ed(n,e,r,t)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function Zc(e){if(!e[Jc]){e[Jc]=!0,tt.forEach(function(t){"selectionchange"!==t&&(Gc.has(t)||Xc(t,!1,e),Xc(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Jc]||(t[Jc]=!0,Xc("selectionchange",!1,t))}}function ed(e,t,n,r){switch(zf(t)){case 2:var a=wf;break;case 8:a=kf;break;default:a=Sf}n=a.bind(null,t,n,e),a=void 0,!Ut||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function td(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var l=r.tag;if(3===l||4===l){var i=r.stateNode.containerInfo;if(i===a)break;if(4===l)for(l=r.return;null!==l;){var u=l.tag;if((3===u||4===u)&&l.stateNode.containerInfo===a)return;l=l.return}for(;null!==i;){if(null===(l=Ye(i)))return;if(5===(u=l.tag)||6===u||26===u||27===u){r=o=l;continue e}i=i.parentNode}}r=r.return}Ft(function(){var r=o,a=Rt(n),l=[];e:{var i=Sr.get(e);if(void 0!==i){var u=nn,c=e;switch(e){case"keypress":if(0===Gt(n))break e;case"keydown":case"keyup":u=yn;break;case"focusin":c="focus",u=un;break;case"focusout":c="blur",u=un;break;case"beforeblur":case"afterblur":u=un;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=ln;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=sn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=xn;break;case gr:case vr:case yr:u=cn;break;case kr:u=wn;break;case"scroll":case"scrollend":u=an;break;case"wheel":u=kn;break;case"copy":case"cut":case"paste":u=dn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=bn;break;case"toggle":case"beforetoggle":u=Sn}var d=0!==(4&t),f=!d&&("scroll"===e||"scrollend"===e),p=d?null!==i?i+"Capture":null:i;d=[];for(var h,m=r;null!==m;){var g=m;if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===p||null!=(g=It(m,p))&&d.push(nd(m,g,h)),f)break;m=m.return}0<d.length&&(i=new u(i,c,null,n,a),l.push({event:i,listeners:d}))}}if(0===(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(i="mouseover"===e||"pointerover"===e)||n===Nt||!(c=n.relatedTarget||n.fromElement)||!Ye(c)&&!c[We])&&(u||i)&&(i=a.window===a?a:(i=a.ownerDocument)?i.defaultView||i.parentWindow:window,u?(u=r,null!==(c=(c=n.relatedTarget||n.toElement)?Ye(c):null)&&(f=s(c),d=c.tag,c!==f||5!==d&&27!==d&&6!==d)&&(c=null)):(u=null,c=r),u!==c)){if(d=ln,g="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=bn,g="onPointerLeave",p="onPointerEnter",m="pointer"),f=null==u?i:Je(u),h=null==c?i:Je(c),(i=new d(g,m+"leave",u,n,a)).target=f,i.relatedTarget=h,g=null,Ye(a)===r&&((d=new d(p,m+"enter",c,n,a)).target=h,d.relatedTarget=f,g=d),f=g,u&&c)e:{for(d=ad,m=c,h=0,g=p=u;g;g=d(g))h++;g=0;for(var v=m;v;v=d(v))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||null!==m&&p===m.alternate){d=p;break e}p=d(p),m=d(m)}d=null}else d=null;null!==u&&od(l,i,u,d,!1),null!==c&&null!==f&&od(l,f,c,d,!0)}if("select"===(u=(i=r?Je(r):window).nodeName&&i.nodeName.toLowerCase())||"input"===u&&"file"===i.type)var y=Hn;else if(Ln(i))if(Un)y=Xn;else{y=Qn;var b=Gn}else!(u=i.nodeName)||"input"!==u.toLowerCase()||"checkbox"!==i.type&&"radio"!==i.type?r&&Pt(r.elementType)&&(y=Hn):y=Yn;switch(y&&(y=y(e,r))?An(l,y,n,a):(b&&b(e,i,r),"focusout"===e&&r&&"number"===i.type&&null!=r.memoizedProps.value&&xt(i,"number",i.value)),b=r?Je(r):window,e){case"focusin":(Ln(b)||"true"===b.contentEditable)&&(lr=b,ir=r,sr=null);break;case"focusout":sr=ir=lr=null;break;case"mousedown":ur=!0;break;case"contextmenu":case"mouseup":case"dragend":ur=!1,cr(l,n,a);break;case"selectionchange":if(or)break;case"keydown":case"keyup":cr(l,n,a)}var x;if(Cn)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Nn?jn(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(Pn&&"ko"!==n.locale&&(Nn||"onCompositionStart"!==w?"onCompositionEnd"===w&&Nn&&(x=Kt()):(Vt="value"in(Bt=a)?Bt.value:Bt.textContent,Nn=!0)),0<(b=rd(r,w)).length&&(w=new fn(w,e,null,n,a),l.push({event:w,listeners:b}),x?w.data=x:null!==(x=On(n))&&(w.data=x))),(x=zn?function(e,t){switch(e){case"compositionend":return On(t);case"keypress":return 32!==t.which?null:($n=!0,Tn);case"textInput":return(e=t.data)===Tn&&$n?null:e;default:return null}}(e,n):function(e,t){if(Nn)return"compositionend"===e||!Cn&&jn(e,t)?(e=Kt(),qt=Vt=Bt=null,Nn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(w=rd(r,"onBeforeInput")).length&&(b=new fn("onBeforeInput","beforeinput",null,n,a),l.push({event:b,listeners:w}),b.data=x)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var o=Wc((a[Ue]||null).action),l=r.submitter;l&&null!==(t=(t=l[Ue]||null)?Wc(t.formAction):l.getAttribute("formAction"))&&(o=t,l=null);var i=new nn("action","action",null,r,a);e.push({event:i,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==Rc){var e=l?Bc(a,l):new FormData(a);ti(n,{pending:!0,data:e,method:a.method,action:o},null,e)}}else"function"===typeof o&&(i.preventDefault(),e=l?Bc(a,l):new FormData(a),ti(n,{pending:!0,data:e,method:a.method,action:o},o,e))},currentTarget:a}]})}}(l,e,r,n,a)}Qc(l,t)})}function nd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rd(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===o||(null!=(a=It(e,n))&&r.unshift(nd(e,a,o)),null!=(a=It(e,t))&&r.push(nd(e,a,o))),3===e.tag)return r;e=e.return}return[]}function ad(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function od(e,t,n,r,a){for(var o=t._reactName,l=[];null!==n&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(i=i.tag,null!==s&&s===r)break;5!==i&&26!==i&&27!==i||null===u||(s=u,a?null!=(u=It(n,o))&&l.unshift(nd(n,u,s)):a||null!=(u=It(n,o))&&l.push(nd(n,u,s))),n=n.return}0!==l.length&&e.push({event:t,listeners:l})}var ld=/\r\n?/g,id=/\u0000|\uFFFD/g;function sd(e){return("string"===typeof e?e:""+e).replace(ld,"\n").replace(id,"")}function ud(e,t){return t=sd(t),sd(e)===t}function cd(e,t,n,r,a,o){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||Et(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&Et(e,""+r);break;case"className":ut(e,"class",r);break;case"tabIndex":ut(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ut(e,n,r);break;case"style":zt(e,r,o);break;case"data":if("object"!==t){ut(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=jt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===n?("input"!==t&&cd(e,t,"name",a.name,a,null),cd(e,t,"formEncType",a.formEncType,a,null),cd(e,t,"formMethod",a.formMethod,a,null),cd(e,t,"formTarget",a.formTarget,a,null)):(cd(e,t,"encType",a.encType,a,null),cd(e,t,"method",a.method,a,null),cd(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=jt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Ot);break;case"onScroll":null!=r&&Yc("scroll",e);break;case"onScrollEnd":null!=r&&Yc("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(l(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=jt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Yc("beforetoggle",e),Yc("toggle",e),st(e,"popover",r);break;case"xlinkActuate":ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ct(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ct(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ct(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ct(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":st(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&st(e,n=Tt.get(n)||n,r)}}function dd(e,t,n,r,a,o){switch(n){case"style":zt(e,r,o);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(l(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(l(60));e.innerHTML=n}}break;case"children":"string"===typeof r?Et(e,r):("number"===typeof r||"bigint"===typeof r)&&Et(e,""+r);break;case"onScroll":null!=r&&Yc("scroll",e);break;case"onScrollEnd":null!=r&&Yc("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:nt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(o=null!=(o=e[Ue]||null)?o[n]:null)&&e.removeEventListener(t,o,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):st(e,n,r):("function"!==typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function fd(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Yc("error",e),Yc("load",e);var r,a=!1,o=!1;for(r in n)if(n.hasOwnProperty(r)){var i=n[r];if(null!=i)switch(r){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:cd(e,t,r,i,n,null)}}return o&&cd(e,t,"srcSet",n.srcSet,n,null),void(a&&cd(e,t,"src",n.src,n,null));case"input":Yc("invalid",e);var s=r=i=o=null,u=null,c=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":o=d;break;case"type":i=d;break;case"checked":u=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(l(137,t));break;default:cd(e,t,a,d,n,null)}}return void bt(e,r,s,u,c,i,o,!1);case"select":for(o in Yc("invalid",e),a=i=r=null,n)if(n.hasOwnProperty(o)&&null!=(s=n[o]))switch(o){case"value":r=s;break;case"defaultValue":i=s;break;case"multiple":a=s;default:cd(e,t,o,s,n,null)}return t=r,n=i,e.multiple=!!a,void(null!=t?wt(e,!!a,t,!1):null!=n&&wt(e,!!a,n,!0));case"textarea":for(i in Yc("invalid",e),r=o=a=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case"value":a=s;break;case"defaultValue":o=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(l(91));break;default:cd(e,t,i,s,n,null)}return void St(e,a,o,r);case"option":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))if("selected"===u)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else cd(e,t,u,a,n,null);return;case"dialog":Yc("beforetoggle",e),Yc("toggle",e),Yc("cancel",e),Yc("close",e);break;case"iframe":case"object":Yc("load",e);break;case"video":case"audio":for(a=0;a<Kc.length;a++)Yc(Kc[a],e);break;case"image":Yc("error",e),Yc("load",e);break;case"details":Yc("toggle",e);break;case"embed":case"source":case"link":Yc("error",e),Yc("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:cd(e,t,c,a,n,null)}return;default:if(Pt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&dd(e,t,d,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(a=n[s])&&cd(e,t,s,a,n,null))}function pd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var hd=null,md=null;function gd(e){return 9===e.nodeType?e:e.ownerDocument}function vd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yd(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function bd(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var xd=null;var wd="function"===typeof setTimeout?setTimeout:void 0,kd="function"===typeof clearTimeout?clearTimeout:void 0,Sd="function"===typeof Promise?Promise:void 0,Ed="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Sd?function(e){return Sd.resolve(null).then(e).catch(Cd)}:wd;function Cd(e){setTimeout(function(){throw e})}function _d(e){return"head"===e}function zd(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)||"/&"===n){if(0===r)return e.removeChild(a),void Vf(t);r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;else if("html"===n)Md(e.ownerDocument.documentElement);else if("head"===n){Md(n=e.ownerDocument.head);for(var o=n.firstChild;o;){var l=o.nextSibling,i=o.nodeName;o[Ge]||"SCRIPT"===i||"STYLE"===i||"LINK"===i&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=l}}else"body"===n&&Md(e.ownerDocument.body);n=a}while(n);Vf(t)}function Pd(e,t){var n=e;e=0;do{var r=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=r}while(n)}function Td(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Td(n),Qe(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function $d(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=Nd(e.nextSibling)))return null}return e}function jd(e){return"$?"===e.data||"$~"===e.data}function Od(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Nd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}var Rd=null;function Ld(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return Nd(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function Ad(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Dd(e,t,n){switch(t=gd(n),e){case"html":if(!(e=t.documentElement))throw Error(l(452));return e;case"head":if(!(e=t.head))throw Error(l(453));return e;case"body":if(!(e=t.body))throw Error(l(454));return e;default:throw Error(l(451))}}function Md(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Qe(e)}var Fd=new Map,Id=new Set;function Hd(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Ud=L.d;L.d={f:function(){var e=Ud.f(),t=Zu();return e||t},r:function(e){var t=Xe(e);null!==t&&5===t.tag&&"form"===t.type?ri(t):Ud.r(e)},D:function(e){Ud.D(e),Bd("dns-prefetch",e,null)},C:function(e,t){Ud.C(e,t),Bd("preconnect",e,t)},L:function(e,t,n){Ud.L(e,t,n);var r=Wd;if(r&&e&&t){var a='link[rel="preload"][as="'+vt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+vt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+vt(n.imageSizes)+'"]')):a+='[href="'+vt(e)+'"]';var o=a;switch(t){case"style":o=qd(e);break;case"script":o=Qd(e)}Fd.has(o)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Fd.set(o,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(Kd(o))||"script"===t&&r.querySelector(Yd(o))||(fd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}},m:function(e,t){Ud.m(e,t);var n=Wd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+vt(r)+'"][href="'+vt(e)+'"]',o=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Qd(e)}if(!Fd.has(o)&&(e=p({rel:"modulepreload",href:e},t),Fd.set(o,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Yd(o)))return}fd(r=n.createElement("link"),"link",e),et(r),n.head.appendChild(r)}}},X:function(e,t){Ud.X(e,t);var n=Wd;if(n&&e){var r=Ze(n).hoistableScripts,a=Qd(e),o=r.get(a);o||((o=n.querySelector(Yd(a)))||(e=p({src:e,async:!0},t),(t=Fd.get(a))&&ef(e,t),et(o=n.createElement("script")),fd(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}},S:function(e,t,n){Ud.S(e,t,n);var r=Wd;if(r&&e){var a=Ze(r).hoistableStyles,o=qd(e);t=t||"default";var l=a.get(o);if(!l){var i={loading:0,preload:null};if(l=r.querySelector(Kd(o)))i.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Fd.get(o))&&Zd(e,n);var s=l=r.createElement("link");et(s),fd(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){i.loading|=1}),s.addEventListener("error",function(){i.loading|=2}),i.loading|=4,Jd(l,t,r)}l={type:"stylesheet",instance:l,count:1,state:i},a.set(o,l)}}},M:function(e,t){Ud.M(e,t);var n=Wd;if(n&&e){var r=Ze(n).hoistableScripts,a=Qd(e),o=r.get(a);o||((o=n.querySelector(Yd(a)))||(e=p({src:e,async:!0,type:"module"},t),(t=Fd.get(a))&&ef(e,t),et(o=n.createElement("script")),fd(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}}};var Wd="undefined"===typeof document?null:document;function Bd(e,t,n){var r=Wd;if(r&&"string"===typeof t&&t){var a=vt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),Id.has(a)||(Id.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(fd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}}function Vd(e,t,n,r){var a,o,i,s,u=(u=q.current)?Hd(u):null;if(!u)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=qd(n.href),(r=(n=Ze(u).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=qd(n.href);var c=Ze(u).hoistableStyles,d=c.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=u.querySelector(Kd(e)))&&!c._p&&(d.instance=c,d.state.loading=5),Fd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Fd.set(e,n),c||(a=u,o=e,i=n,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+o+"]")?s.loading=1:(o=a.createElement("link"),s.preload=o,o.addEventListener("load",function(){return s.loading|=1}),o.addEventListener("error",function(){return s.loading|=2}),fd(o,"link",i),et(o),a.head.appendChild(o))))),t&&null===r)throw Error(l(528,""));return d}if(t&&null!==r)throw Error(l(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Qd(n),(r=(n=Ze(u).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function qd(e){return'href="'+vt(e)+'"'}function Kd(e){return'link[rel="stylesheet"]['+e+"]"}function Gd(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Qd(e){return'[src="'+vt(e)+'"]'}function Yd(e){return"script[async]"+e}function Xd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+vt(n.href)+'"]');if(r)return t.instance=r,et(r),r;var a=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return et(r=(e.ownerDocument||e).createElement("style")),fd(r,"style",a),Jd(r,n.precedence,e),t.instance=r;case"stylesheet":a=qd(n.href);var o=e.querySelector(Kd(a));if(o)return t.state.loading|=4,t.instance=o,et(o),o;r=Gd(n),(a=Fd.get(a))&&Zd(r,a),et(o=(e.ownerDocument||e).createElement("link"));var i=o;return i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),fd(o,"link",r),t.state.loading|=4,Jd(o,n.precedence,e),t.instance=o;case"script":return o=Qd(n.src),(a=e.querySelector(Yd(o)))?(t.instance=a,et(a),a):(r=n,(a=Fd.get(o))&&ef(r=p({},n),a),et(a=(e=e.ownerDocument||e).createElement("script")),fd(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(l(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Jd(r,n.precedence,e));return t.instance}function Jd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,o=a,l=0;l<r.length;l++){var i=r[l];if(i.dataset.precedence===t)o=i;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Zd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function ef(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var tf=null;function nf(e,t,n){if(null===tf){var r=new Map,a=tf=new Map;a.set(n,r)}else(r=(a=tf).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var o=n[a];if(!(o[Ge]||o[He]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var l=o.getAttribute(t)||"";l=e+l;var i=r.get(l);i?i.push(o):r.set(l,[o])}}return r}function rf(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function af(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var of=0;function lf(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)uf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var sf=null;function uf(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,sf=new Map,t.forEach(cf,e),sf=null,lf.call(e))}function cf(e,t){if(!(4&t.state.loading)){var n=sf.get(e);if(n)var r=n.get(null);else{n=new Map,sf.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var l=a[o];"LINK"!==l.nodeName&&"not all"===l.getAttribute("media")||(n.set(l.dataset.precedence,l),r=l)}r&&n.set(null,r)}l=(a=t.instance).getAttribute("data-precedence"),(o=n.get(l)||r)===r&&n.set(null,a),n.set(l,a),this.count++,r=lf.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),o?o.parentNode.insertBefore(a,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var df={$$typeof:w,Provider:null,Consumer:null,_currentValue:A,_currentValue2:A,_threadCount:0};function ff(e,t,n,r,a,o,l,i,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function pf(e,t,n,r,a,o,l,i,s,u,c,d){return e=new ff(e,t,n,l,s,u,c,d,i),t=1,!0===o&&(t|=24),o=Mr(3,null,null,t),e.current=o,o.stateNode=e,(t=Fa()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},vo(o),e}function hf(e){return e?e=Ar:Ar}function mf(e,t,n,r,a,o){a=hf(a),null===r.context?r.context=a:r.pendingContext=a,(r=bo(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=xo(e,r,t))&&(Gu(n,0,t),wo(n,e,t))}function gf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function vf(e,t){gf(e,t),(e=e.alternate)&&gf(e,t)}function yf(e){if(13===e.tag||31===e.tag){var t=Nr(e,67108864);null!==t&&Gu(t,0,67108864),vf(e,67108864)}}function bf(e){if(13===e.tag||31===e.tag){var t=qu(),n=Nr(e,t=Ae(t));null!==n&&Gu(n,0,t),vf(e,t)}}var xf=!0;function wf(e,t,n,r){var a=R.T;R.T=null;var o=L.p;try{L.p=2,Sf(e,t,n,r)}finally{L.p=o,R.T=a}}function kf(e,t,n,r){var a=R.T;R.T=null;var o=L.p;try{L.p=8,Sf(e,t,n,r)}finally{L.p=o,R.T=a}}function Sf(e,t,n,r){if(xf){var a=Ef(r);if(null===a)td(e,t,r,Cf,n),Af(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Tf=Df(Tf,e,t,n,r,a),!0;case"dragenter":return $f=Df($f,e,t,n,r,a),!0;case"mouseover":return jf=Df(jf,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Of.set(o,Df(Of.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Nf.set(o,Df(Nf.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Af(e,r),4&t&&-1<Lf.indexOf(e)){for(;null!==a;){var o=Xe(a);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var l=_e(o.pendingLanes);if(0!==l){var i=o;for(i.pendingLanes|=2,i.entangledLanes|=2;l;){var s=1<<31-xe(l);i.entanglements[1]|=s,l&=~s}Lc(o),0===(6&pu)&&(Ru=se()+500,Ac(0,!1))}}break;case 31:case 13:null!==(i=Nr(o,2))&&Gu(i,0,2),Zu(),vf(o,2)}if(null===(o=Ef(r))&&td(e,t,r,Cf,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else td(e,t,r,null,n)}}function Ef(e){return _f(e=Rt(e))}var Cf=null;function _f(e){if(Cf=null,null!==(e=Ye(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=u(t)))return e;e=null}else if(31===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Cf=e,null}function zf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ue()){case ce:return 2;case de:return 8;case fe:case pe:return 32;case he:return 268435456;default:return 32}default:return 32}}var Pf=!1,Tf=null,$f=null,jf=null,Of=new Map,Nf=new Map,Rf=[],Lf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Af(e,t){switch(e){case"focusin":case"focusout":Tf=null;break;case"dragenter":case"dragleave":$f=null;break;case"mouseover":case"mouseout":jf=null;break;case"pointerover":case"pointerout":Of.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nf.delete(t.pointerId)}}function Df(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=Xe(t))&&yf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Mf(e){var t=Ye(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=u(n)))return e.blockedOn=t,void Fe(e.priority,function(){bf(n)})}else if(31===t){if(null!==(t=c(n)))return e.blockedOn=t,void Fe(e.priority,function(){bf(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Ff(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ef(e.nativeEvent);if(null!==n)return null!==(t=Xe(n))&&yf(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Nt=r,n.target.dispatchEvent(r),Nt=null,t.shift()}return!0}function If(e,t,n){Ff(e)&&n.delete(t)}function Hf(){Pf=!1,null!==Tf&&Ff(Tf)&&(Tf=null),null!==$f&&Ff($f)&&($f=null),null!==jf&&Ff(jf)&&(jf=null),Of.forEach(If),Nf.forEach(If)}function Uf(e,t){e.blockedOn===t&&(e.blockedOn=null,Pf||(Pf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Hf)))}var Wf=null;function Bf(e){Wf!==e&&(Wf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Wf===e&&(Wf=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===_f(r||n))continue;break}var o=Xe(n);null!==o&&(e.splice(t,3),t-=3,ti(o,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function Vf(e){function t(t){return Uf(t,e)}null!==Tf&&Uf(Tf,e),null!==$f&&Uf($f,e),null!==jf&&Uf(jf,e),Of.forEach(t),Nf.forEach(t);for(var n=0;n<Rf.length;n++){var r=Rf[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Rf.length&&null===(n=Rf[0]).blockedOn;)Mf(n),null===n.blockedOn&&Rf.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],o=n[r+1],l=a[Ue]||null;if("function"===typeof o)l||Bf(n);else if(l){var i=null;if(o&&o.hasAttribute("formAction")){if(a=o,l=o[Ue]||null)i=l.formAction;else if(null!==_f(a))continue}else i=l.action;"function"===typeof i?n[r+1]=i:(n.splice(r,3),r-=3),Bf(n)}}}function qf(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return a=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==a&&(a(),a=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var r=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==a&&(a(),a=null)}}}function Kf(e){this._internalRoot=e}function Gf(e){this._internalRoot=e}Gf.prototype.render=Kf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(l(409));mf(t.current,qu(),e,t,null,null)},Gf.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;mf(e.current,2,null,e,null,null),Zu(),t[We]=null}},Gf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Me();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rf.length&&0!==t&&t<Rf[n].priority;n++);Rf.splice(n,0,e),0===n&&Mf(e)}};var Qf=a.version;if("19.2.4"!==Qf)throw Error(l(527,Qf,"19.2.4"));L.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(l(188));throw e=Object.keys(e).join(","),Error(l(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return d(a),e;if(o===r)return d(a),t;o=o.sibling}throw Error(l(188))}if(n.return!==r.return)n=a,r=o;else{for(var i=!1,u=a.child;u;){if(u===n){i=!0,n=a,r=o;break}if(u===r){i=!0,r=a,n=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===n){i=!0,n=o,r=a;break}if(u===r){i=!0,r=o,n=a;break}u=u.sibling}if(!i)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(3!==n.tag)throw Error(l(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?f(e):null)?null:e.stateNode};var Yf={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Xf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xf.isDisabled&&Xf.supportsFiber)try{ve=Xf.inject(Yf),ye=Xf}catch(Zf){}}t.createRoot=function(e,t){if(!i(e))throw Error(l(299));var n=!1,r="",a=Ei,o=Ci,s=_i;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError)),t=pf(e,1,!1,null,0,n,r,null,a,o,s,qf),e[We]=t.current,Zc(e),new Kf(t)},t.hydrateRoot=function(e,t,n){if(!i(e))throw Error(l(299));var r=!1,a="",o=Ei,s=Ci,u=_i,c=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(o=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(u=n.onRecoverableError),void 0!==n.formState&&(c=n.formState)),(t=pf(e,1,!0,t,0,r,a,c,o,s,u,qf)).context=hf(null),n=t.current,(a=bo(r=Ae(r=qu()))).callback=null,xo(n,a,r),n=r,t.current.lanes=n,Oe(t,n),Lc(t),e[We]=t.current,Zc(e),new Gf(t)},t.version="19.2.4"},672(e,t,n){"use strict";var r=n(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},i=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:i,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=l.p;try{if(s.T=null,l.p=2,e)return e()}finally{s.T=t,l.p=n,l.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,l.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&l.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?l.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):"script"===n&&l.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=u(t.as,t.crossOrigin);l.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&l.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin);l.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=u(t.as,t.crossOrigin);l.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else l.d.m(e)},t.requestFormReset=function(e){l.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.2.4"},391(e,t,n){"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},950(e,t,n){"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)},799(e,t){"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},288(e,t){"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.consumer"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),h=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||m}function b(){}function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var w=x.prototype=new b;w.constructor=x,g(w,y.prototype),w.isPureReactComponent=!0;var k=Array.isArray;function S(){}var E={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function _(e,t,r){var a=r.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==a?a:null,props:r}}function z(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function $(e,t,a,o,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s,u,c=!1;if(null===e)c=!0;else switch(i){case"bigint":case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0;break;case f:return $((c=e._init)(e._payload),t,a,o,l)}}if(c)return l=l(e),c=""===o?"."+T(e,0):o,k(l)?(a="",null!=c&&(a=c.replace(P,"$&/")+"/"),$(l,t,a,"",function(e){return e})):null!=l&&(z(l)&&(s=l,u=a+(null==l.key||e&&e.key===l.key?"":(""+l.key).replace(P,"$&/")+"/")+c,l=_(s.type,u,s.props)),t.push(l)),1;c=0;var d,p=""===o?".":o+":";if(k(e))for(var m=0;m<e.length;m++)c+=$(o=e[m],t,a,i=p+T(o,m),l);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=h&&d[h]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(o=e.next()).done;)c+=$(o=o.value,t,a,i=p+T(o,m++),l);else if("object"===i){if("function"===typeof e.then)return $(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(S,S):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,o,l);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return c}function j(e,t,n){if(null==e)return e;var r=[],a=0;return $(e,r,"","",function(e){return t.call(n,e,a++)}),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},R={map:j,forEach:function(e,t,n){j(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return j(e,function(){t++}),t},toArray:function(e){return j(e,function(e){return e})||[]},only:function(e){if(!z(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=p,t.Children=R,t.Component=y,t.Fragment=a,t.Profiler=l,t.PureComponent=x,t.StrictMode=o,t.Suspense=c,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return E.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=g({},e.props),a=e.key;if(null!=t)for(o in void 0!==t.key&&(a=""+t.key),t)!C.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var l=Array(o),i=0;i<o;i++)l[i]=arguments[i+2];r.children=l}return _(e.type,a,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:i,_context:e},e},t.createElement=function(e,t,n){var r,a={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)C.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];a.children=i}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return _(e,o,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=z,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=E.T,n={};E.T=n;try{var r=e(),a=E.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(S,N)}catch(o){N(o)}finally{null!==t&&null!==n.types&&(t.types=n.types),E.T=t}},t.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},t.use=function(e){return E.H.use(e)},t.useActionState=function(e,t,n){return E.H.useActionState(e,t,n)},t.useCallback=function(e,t){return E.H.useCallback(e,t)},t.useContext=function(e){return E.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return E.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return E.H.useEffect(e,t)},t.useEffectEvent=function(e){return E.H.useEffectEvent(e)},t.useId=function(){return E.H.useId()},t.useImperativeHandle=function(e,t,n){return E.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return E.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return E.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return E.H.useMemo(e,t)},t.useOptimistic=function(e,t){return E.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return E.H.useReducer(e,t,n)},t.useRef=function(e){return E.H.useRef(e)},t.useState=function(e){return E.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return E.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return E.H.useTransition()},t.version="19.2.4"},43(e,t,n){"use strict";e.exports=n(288)},579(e,t,n){"use strict";e.exports=n(799)},896(e,t){"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,l=a>>>1;r<l;){var i=2*(r+1)-1,s=e[i],u=i+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[i]=n,r=i);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var l=performance;t.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();t.unstable_now=function(){return i.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v=!1,y="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function k(e){if(g=!1,w(e),!m)if(null!==r(u))m=!0,E||(E=!0,S());else{var t=r(c);null!==t&&O(k,t.startTime-e)}}var S,E=!1,C=-1,_=5,z=-1;function P(){return!!v||!(t.unstable_now()-z<_)}function T(){if(v=!1,E){var e=t.unstable_now();z=e;var n=!0;try{e:{m=!1,g&&(g=!1,b(C),C=-1),h=!0;var o=p;try{t:{for(w(e),f=r(u);null!==f&&!(f.expirationTime>e&&P());){var l=f.callback;if("function"===typeof l){f.callback=null,p=f.priorityLevel;var i=l(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof i){f.callback=i,w(e),n=!0;break t}f===r(u)&&a(u),w(e)}else a(u);f=r(u)}if(null!==f)n=!0;else{var s=r(c);null!==s&&O(k,s.startTime-e),n=!1}}break e}finally{f=null,p=o,h=!1}n=void 0}}finally{n?S():E=!1}}}if("function"===typeof x)S=function(){x(T)};else if("undefined"!==typeof MessageChannel){var $=new MessageChannel,j=$.port2;$.port1.onmessage=T,S=function(){j.postMessage(null)}}else S=function(){y(T,0)};function O(e,n){C=y(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var l=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?l+o:l:o=l,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:i=o+i,sortIndex:-1},o>l?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(b(C),C=-1):g=!0,O(k,o-l))):(e.sortIndex=i,n(u,e),m||h||(m=!0,E||(E=!0,S()))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853(e,t,n){"use strict";e.exports=n(896)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var l={};e=e||[null,t({}),t([]),t(t)];for(var i=2&a&&r;("object"==typeof i||"function"==typeof i)&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach(e=>l[e]=()=>r[e]);return l.default=()=>r,n.d(o,l),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/klara-queen/",n.nc=void 0,(()=>{"use strict";var e=n(43),t=n.t(e,2),r=n(391),a="popstate";function o(e){return"object"===typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function l(){return p(function(e,t){let n=t.state?.masked,{pathname:r,search:a,hash:o}=n||e.location;return c("",{pathname:r,search:a,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"===typeof t?t:d(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function i(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function s(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?f(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10),unstable_mask:a}}function d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function f(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function p(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:l=document.defaultView,v5Compat:i=!1}=r,s=l.history,d="POP",f=null,p=m();function m(){return(s.state||{idx:null}).idx}function g(){d="POP";let e=m(),t=null==e?null:e-p;p=e,f&&f({action:d,location:y.location,delta:t})}function v(e){return h(e)}null==p&&(p=0,s.replaceState({...s.state,idx:p},""));let y={get action(){return d},get location(){return e(l,s)},listen(e){if(f)throw new Error("A history only accepts one active listener");return l.addEventListener(a,g),f=e,()=>{l.removeEventListener(a,g),f=null}},createHref:e=>t(l,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){d="PUSH";let r=o(e)?e:c(y.location,e,t);n&&n(r,e),p=m()+1;let a=u(r,p),h=y.createHref(r.unstable_mask||r);try{s.pushState(a,"",h)}catch(g){if(g instanceof DOMException&&"DataCloneError"===g.name)throw g;l.location.assign(h)}i&&f&&f({action:d,location:y.location,delta:1})},replace:function(e,t){d="REPLACE";let r=o(e)?e:c(y.location,e,t);n&&n(r,e),p=m();let a=u(r,p),l=y.createHref(r.unstable_mask||r);s.replaceState(a,"",l),i&&f&&f({action:d,location:y.location,delta:0})},go:e=>s.go(e)};return y}function h(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),i(n,"No window.location.(origin|href) available to create URL");let r="string"===typeof e?e:d(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}new WeakMap;function m(e,t){return g(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function g(e,t,n,r){let a=j(("string"===typeof t?f(t):t).pathname||"/",n);if(null==a)return null;let o=v(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o);let l=null;for(let i=0;null==l&&i<o.length;++i){let e=$(a);l=z(o[i],e,r)}return l}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=function(e,o){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,s=arguments.length>3?arguments[3]:void 0,u={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};if(u.relativePath.startsWith("/")){if(!u.relativePath.startsWith(r)&&l)return;i(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length)}let c=M([r,u.relativePath]),d=n.concat(u);e.children&&e.children.length>0&&(i(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),v(e.children,t,d,c,l)),(null!=e.path||e.index)&&t.push({path:c,score:_(c,e.index),routesMeta:d})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of y(e.path))o(e,t,!0,n);else o(e,t)}),t}function y(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let l=y(r.join("/")),i=[];return i.push(...l.map(e=>""===e?o:[o,e].join("/"))),a&&i.push(...l),i.map(t=>e.startsWith("/")&&""===t?"/":t)}var b=/^:[\w-]+$/,x=3,w=2,k=1,S=10,E=-2,C=e=>"*"===e;function _(e,t){let n=e.split("/"),r=n.length;return n.some(C)&&(r+=E),t&&(r+=w),n.filter(e=>!C(e)).reduce((e,t)=>e+(b.test(t)?x:""===t?k:S),r)}function z(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,a={},o="/",l=[];for(let i=0;i<r.length;++i){let e=r[i],s=i===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),l.push({params:a,pathname:M([o,c.pathname]),pathnameBase:F(M([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=M([o,c.pathnameBase]))}return l}function P(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=T(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=i[n]||"";l=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=i[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:o,pathnameBase:l,pattern:e}}function T(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];s("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,a,o)=>{if(r.push({paramName:t,isOptional:null!=n}),n){let t=o.charAt(a+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function $(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return s(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function j(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}var O=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function N(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function R(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function L(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function A(e){let t=L(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function D(e,t,n){let r,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=f(e):(r={...e},i(!r.pathname||!r.pathname.includes("?"),R("?","pathname","search",r)),i(!r.pathname||!r.pathname.includes("#"),R("#","pathname","hash",r)),i(!r.search||!r.search.includes("#"),R("#","search","hash",r)));let o,l=""===e||""===r.pathname,s=l?"/":r.pathname;if(null==s)o=n;else{let e=t.length-1;if(!a&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}o=e>=0?t[e]:"/"}let u=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:r,search:a="",hash:o=""}="string"===typeof e?f(e):e;return r?(r=r.replace(/\/\/+/g,"/"),t=r.startsWith("/")?N(r.substring(1),"/"):N(r,n)):t=n,{pathname:t,search:I(a),hash:H(o)}}(r,o),c=s&&"/"!==s&&s.endsWith("/"),d=(l||"."===s)&&n.endsWith("/");return u.pathname.endsWith("/")||!c&&!d||(u.pathname+="/"),u}var M=e=>e.join("/").replace(/\/\/+/g,"/"),F=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),I=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",H=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var U=class{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function W(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}function B(e){return e.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var V="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function q(e,t){let n=e;if("string"!==typeof n||!O.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,a=!1;if(V)try{let e=new URL(window.location.href),r=n.startsWith("//")?new URL(e.protocol+n):new URL(n),o=j(r.pathname,t);r.origin===e.origin&&null!=o?n=o+r.search+r.hash:a=!0}catch(o){s(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:a,to:n}}Symbol("Uninstrumented");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var K=["POST","PUT","PATCH","DELETE"],G=(new Set(K),["GET",...K]);new Set(G),Symbol("ResetLoaderData");var Q=e.createContext(null);Q.displayName="DataRouter";var Y=e.createContext(null);Y.displayName="DataRouterState";var X=e.createContext(!1);function J(){return e.useContext(X)}var Z=e.createContext({isTransitioning:!1});Z.displayName="ViewTransition";var ee=e.createContext(new Map);ee.displayName="Fetchers";var te=e.createContext(null);te.displayName="Await";var ne=e.createContext(null);ne.displayName="Navigation";var re=e.createContext(null);re.displayName="Location";var ae=e.createContext({outlet:null,matches:[],isDataRoute:!1});ae.displayName="Route";var oe=e.createContext(null);oe.displayName="RouteError";var le="REACT_ROUTER_ERROR";function ie(){return null!=e.useContext(re)}function se(){return i(ie(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(re).location}var ue="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ce(t){e.useContext(ne).static||e.useLayoutEffect(t)}function de(){let{isDataRoute:t}=e.useContext(ae);return t?function(){let{router:t}=ke("useNavigate"),n=Ee("useNavigate"),r=e.useRef(!1);ce(()=>{r.current=!0});let a=e.useCallback(async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(r.current,ue),r.current&&("number"===typeof e?await t.navigate(e):await t.navigate(e,{fromRouteId:n,...a}))},[t,n]);return a}():function(){i(ie(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(Q),{basename:n,navigator:r}=e.useContext(ne),{matches:a}=e.useContext(ae),{pathname:o}=se(),l=JSON.stringify(A(a)),u=e.useRef(!1);ce(()=>{u.current=!0});let c=e.useCallback(function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s(u.current,ue),!u.current)return;if("number"===typeof e)return void r.go(e);let i=D(e,JSON.parse(l),o,"path"===a.relative);null==t&&"/"!==n&&(i.pathname="/"===i.pathname?n:M([n,i.pathname])),(a.replace?r.replace:r.push)(i,a.state,a)},[n,r,l,o,t]);return c}()}e.createContext(null);function fe(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(ae),{pathname:a}=se(),o=JSON.stringify(A(r));return e.useMemo(()=>D(t,JSON.parse(o),a,"path"===n),[t,o,a,n])}function pe(t,n,r){i(ie(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=e.useContext(ne),{matches:o}=e.useContext(ae),l=o[o.length-1],u=l?l.params:{},c=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let e=p&&p.path||"";ze(c,!p||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let h,g=se();if(n){let e="string"===typeof n?f(n):n;i("/"===d||e.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`),h=e}else h=g;let v=h.pathname||"/",y=v;if("/"!==d){let e=d.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=m(t,{pathname:y});s(p||null!=b,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),s(null==b||void 0!==b[b.length-1].route.element||void 0!==b[b.length-1].route.Component||void 0!==b[b.length-1].route.lazy,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=xe(b&&b.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:M([d,a.encodeLocation?a.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:M([d,a.encodeLocation?a.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),o,r);return n&&x?e.createElement(re.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...h},navigationType:"POP"}},x):x}function he(){let t=Ce(),n=W(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},i=null;return console.error("Error handled by React Router default ErrorBoundary:",t),i=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:l},"ErrorBoundary")," or"," ",e.createElement("code",{style:l},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:o},r):null,i)}var me=e.createElement(he,null),ge=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let t=this.state.error;if(this.context&&"object"===typeof t&&t&&"digest"in t&&"string"===typeof t.digest){const e=function(e){if(e.startsWith(`${le}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText)return new U(t.status,t.statusText,t.data)}catch{}}(t.digest);e&&(t=e)}let n=void 0!==t?e.createElement(ae.Provider,{value:this.props.routeContext},e.createElement(oe.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?e.createElement(ye,{error:t},n):n}};ge.contextType=X;var ve=new WeakMap;function ye(t){let{children:n,error:r}=t,{basename:a}=e.useContext(ne);if("object"===typeof r&&r&&"digest"in r&&"string"===typeof r.digest){let t=function(e){if(e.startsWith(`${le}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText&&"string"===typeof t.location&&"boolean"===typeof t.reloadDocument&&"boolean"===typeof t.replace)return t}catch{}}(r.digest);if(t){let n=ve.get(r);if(n)throw n;let o=q(t.location,a);if(V&&!ve.get(r)){if(!o.isExternal&&!t.reloadDocument){const e=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:t.replace}));throw ve.set(r,e),e}window.location.href=o.absoluteURL||o.to}return e.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return n}function be(t){let{routeContext:n,match:r,children:a}=t,o=e.useContext(Q);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(ae.Provider,{value:n},a)}function xe(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,a=r?.state;if(null==t){if(!a)return null;if(a.errors)t=a.matches;else{if(0!==n.length||a.initialized||!(a.matches.length>0))return null;t=a.matches}}let o=t,l=a?.errors;if(null!=l){let e=o.findIndex(e=>e.route.id&&void 0!==l?.[e.route.id]);i(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let s=!1,u=-1;if(r&&a){s=a.renderFallback;for(let e=0;e<o.length;e++){let t=o[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(u=e),t.route.id){let{loaderData:e,errors:n}=a,l=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||l){r.isStatic&&(s=!0),o=u>=0?o.slice(0,u+1):[o[0]];break}}}}let c=r?.onError,d=a&&c?(e,t)=>{c(e,{location:a.location,params:a.matches?.[0]?.params??{},unstable_pattern:B(a.matches),errorInfo:t})}:void 0;return o.reduceRight((t,r,i)=>{let c,f=!1,p=null,h=null;a&&(c=l&&r.route.id?l[r.route.id]:void 0,p=r.route.errorElement||me,s&&(u<0&&0===i?(ze("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,h=null):u===i&&(f=!0,h=r.route.hydrateFallbackElement||null)));let m=n.concat(o.slice(0,i+1)),g=()=>{let n;return n=c?p:f?h:r.route.Component?e.createElement(r.route.Component,null):r.route.element?r.route.element:t,e.createElement(be,{match:r,routeContext:{outlet:t,matches:m,isDataRoute:null!=a},children:n})};return a&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?e.createElement(ge,{location:a.location,revalidation:a.revalidation,component:p,error:c,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:d}):g()},null)}function we(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ke(t){let n=e.useContext(Q);return i(n,we(t)),n}function Se(t){let n=e.useContext(Y);return i(n,we(t)),n}function Ee(t){let n=function(t){let n=e.useContext(ae);return i(n,we(t)),n}(t),r=n.matches[n.matches.length-1];return i(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function Ce(){let t=e.useContext(oe),n=Se("useRouteError"),r=Ee("useRouteError");return void 0!==t?t:n.errors?.[r]}var _e={};function ze(e,t,n){t||_e[e]||(_e[e]=!0,s(!1,n))}var Pe={};function Te(e,t){e||Pe[t]||(Pe[t]=!0,console.warn(t))}t.useOptimistic;e.memo($e);function $e(e){let{routes:t,future:n,state:r,isStatic:a,onError:o}=e;return pe(t,void 0,{state:r,isStatic:a,onError:o,future:n})}function je(e){i(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Oe(t){let{basename:n="/",children:r=null,location:a,navigationType:o="POP",navigator:l,static:u=!1,unstable_useTransitions:c}=t;i(!ie(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=e.useMemo(()=>({basename:d,navigator:l,static:u,unstable_useTransitions:c,future:{}}),[d,l,u,c]);"string"===typeof a&&(a=f(a));let{pathname:h="/",search:m="",hash:g="",state:v=null,key:y="default",unstable_mask:b}=a,x=e.useMemo(()=>{let e=j(h,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:v,key:y,unstable_mask:b},navigationType:o}},[d,h,m,g,v,y,o,b]);return s(null!=x,`<Router basename="${d}"> is not able to match the URL "${h}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),null==x?null:e.createElement(ne.Provider,{value:p},e.createElement(re.Provider,{children:r,value:x}))}function Ne(e){let{children:t,location:n}=e;return pe(Re(t),n)}e.Component;function Re(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,(t,a)=>{if(!e.isValidElement(t))return;let o=[...n,a];if(t.type===e.Fragment)return void r.push.apply(r,Re(t.props.children,o));i(t.type===je,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),i(!t.props.index||!t.props.children,"An index route cannot have child routes.");let l={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,middleware:t.props.middleware,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(l.children=Re(t.props.children,o)),r.push(l)}),r}var Le="get",Ae="application/x-www-form-urlencoded";function De(e){return"undefined"!==typeof HTMLElement&&e instanceof HTMLElement}var Me=null;var Fe=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ie(e){return null==e||Fe.has(e)?e:(s(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ae}"`),null)}function He(e,t){let n,r,a,o,l;if(De(i=e)&&"form"===i.tagName.toLowerCase()){let l=e.getAttribute("action");r=l?j(l,t):null,n=e.getAttribute("method")||Le,a=Ie(e.getAttribute("enctype"))||Ae,o=new FormData(e)}else if(function(e){return De(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return De(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let l=e.form;if(null==l)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let i=e.getAttribute("formaction")||l.getAttribute("action");if(r=i?j(i,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||Le,a=Ie(e.getAttribute("formenctype"))||Ie(l.getAttribute("enctype"))||Ae,o=new FormData(l,e),!function(){if(null===Me)try{new FormData(document.createElement("form"),0),Me=!1}catch(e){Me=!0}return Me}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else{if(De(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Le,r=null,a=Ae,l=e}var i;return o&&"text/plain"===a&&(l=o,o=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:o,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function Ue(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function We(e,t,n,r){let a="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return n?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${r}`:a.pathname=`${a.pathname}.${r}`:"/"===a.pathname?a.pathname=`_root.${r}`:t&&"/"===j(a.pathname,t)?a.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function Be(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ve(e){return null!=e&&"string"===typeof e.page}function qe(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Ke(e,t,n,r,a,o){let l=(e,t)=>!n[t]||e.route.id!==n[t].route.id,i=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter((e,t)=>l(e,t)||i(e,t)):"data"===o?t.filter((t,o)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(l(t,o)||i(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function Ge(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1),[...new Set(r)];var r}function Qe(e,t){let n=new Set,r=new Set(t);return e.reduce((e,a)=>{if(t&&!Ve(a)&&"script"===a.as&&a.href&&r.has(a.href))return e;let o=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(a));return n.has(o)||(n.add(o),e.push({key:o,link:a})),e},[])}function Ye(e,t){return"lazy"===e.mode&&!0===t}function Xe(){let t=e.useContext(Q);return Ue(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Je(){let t=e.useContext(Y);return Ue(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ze=e.createContext(void 0);function et(){let t=e.useContext(Ze);return Ue(t,"You must render this element inside a <HydratedRouter> element"),t}function tt(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function nt(e,t,n){if(n&&!lt)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}Ze.displayName="FrameworkContext";function rt(t){let{page:n,...r}=t,{router:a}=Xe(),o=e.useMemo(()=>m(a.routes,n,a.basename),[a.routes,n,a.basename]);return o?e.createElement(ot,{page:n,matches:o,...r}):null}function at(t){let{manifest:n,routeModules:r}=et(),[a,o]=e.useState([]);return e.useEffect(()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Be(r,n);return e.links?e.links():[]}return[]}));return Qe(r.flat(1).filter(qe).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(t,n,r).then(t=>{e||o(t)}),()=>{e=!0}},[t,n,r]),a}function ot(t){let{page:n,matches:r,...a}=t,o=se(),{future:l,manifest:i,routeModules:s}=et(),{basename:u}=Xe(),{loaderData:c,matches:d}=Je(),f=e.useMemo(()=>Ke(n,r,d,i,o,"data"),[n,r,d,i,o]),p=e.useMemo(()=>Ke(n,r,d,i,o,"assets"),[n,r,d,i,o]),h=e.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let e=new Set,t=!1;if(r.forEach(n=>{let r=i.routes[n.route.id];r&&r.hasLoader&&(!f.some(e=>e.route.id===n.route.id)&&n.route.id in c&&s[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))}),0===e.size)return[];let a=We(n,u,l.unstable_trailingSlashAwareDataRequests,"data");return t&&e.size>0&&a.searchParams.set("_routes",r.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[a.pathname+a.search]},[u,l.unstable_trailingSlashAwareDataRequests,c,o,i,f,r,n,s]),m=e.useMemo(()=>Ge(p,i),[p,i]),g=at(p);return e.createElement(e.Fragment,null,h.map(t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...a})),m.map(t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...a})),g.map(t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,nonce:a.nonce,...r,crossOrigin:r.crossOrigin??a.crossOrigin})}))}var lt=!1;function it(t){let{manifest:n,serverHandoffString:r,isSpaMode:a,renderMeta:o,routeDiscovery:l,ssr:i}=et(),{router:s,static:u,staticContext:c}=Xe(),{matches:d}=Je(),f=J(),p=Ye(l,i);o&&(o.didRenderScripts=!0);let h=nt(d,null,a);e.useEffect(()=>{0},[]);let g=e.useMemo(()=>{if(f)return null;let a=c?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=u?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${p?"":`import ${JSON.stringify(n.url)}`};\n${h.map((e,t)=>{let r=`route${t}`,a=n.routes[e.route.id];Ue(a,`Route ${e.route.id} not found in manifest`);let{clientActionModule:o,clientLoaderModule:l,clientMiddlewareModule:i,hydrateFallbackModule:s,module:u}=a,c=[...o?[{module:o,varName:`${r}_clientAction`}]:[],...l?[{module:l,varName:`${r}_clientLoader`}]:[],...i?[{module:i,varName:`${r}_clientMiddleware`}]:[],...s?[{module:s,varName:`${r}_HydrateFallback`}]:[],{module:u,varName:`${r}_main`}];return 1===c.length?`import * as ${r} from ${JSON.stringify(u)};`:[c.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${c.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${p?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,a=new Set(t.state.matches.map(e=>e.route.id)),o=t.state.location.pathname.split("/").filter(Boolean),l=["/"];for(o.pop();o.length>0;)l.push(`/${o.join("/")}`),o.pop();l.forEach(e=>{let n=m(t.routes,e,t.basename);n&&n.forEach(e=>a.add(e.route.id))});let i=[...a].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:i,sri:!!n||void 0}}(n,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${h.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:a},type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:o},type:"module",async:!0}))},[]),v=lt||f?[]:(n.entry.imports.concat(Ge(h,n,{includeHydrateFallback:!0})),[...new Set(y)]);var y;let b="object"===typeof n.sri?n.sri:{};return Te(!f,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),lt||f?null:e.createElement(e.Fragment,null,"object"===typeof n.sri?e.createElement("script",{...t,"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:b})}}):null,p?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin,integrity:b[n.url],suppressHydrationWarning:!0}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin,integrity:b[n.entry.module],suppressHydrationWarning:!0}),v.map(n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin,integrity:b[n],suppressHydrationWarning:!0})),g)}function st(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}e.Component;function ut(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let a,o=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(W(n))return e.createElement(ct,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),o);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(ct,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},a.stack),o)}function ct(t){let{title:n,renderScripts:r,isOutsideRemixApp:a,children:o}=t,{routeModules:l}=et();return l.root?.Layout&&!a?o:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,r?e.createElement(it,null):null)))}var dt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{dt&&(window.__reactRouterVersion="7.13.2")}catch(di){}function ft(t){let{basename:n,children:r,unstable_useTransitions:a,window:o}=t,i=e.useRef();null==i.current&&(i.current=l({window:o,v5Compat:!0}));let s=i.current,[u,c]=e.useState({action:s.action,location:s.location}),d=e.useCallback(t=>{!1===a?c(t):e.startTransition(()=>c(t))},[a]);return e.useLayoutEffect(()=>s.listen(d),[s,d]),e.createElement(Oe,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:s,unstable_useTransitions:a})}var pt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ht=e.forwardRef(function(t,n){let{onClick:r,discover:a="render",prefetch:o="none",relative:l,reloadDocument:s,replace:u,unstable_mask:c,state:f,target:p,to:h,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:v,...y}=t,{basename:b,navigator:x,unstable_useTransitions:w}=e.useContext(ne),k="string"===typeof h&&pt.test(h),S=q(h,b);h=S.to;let E=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(ie(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=e.useContext(ne),{hash:o,pathname:l,search:s}=fe(t,{relative:n}),u=l;return"/"!==r&&(u="/"===l?r:M([r,l])),a.createHref({pathname:u,search:s,hash:o})}(h,{relative:l}),C=se(),_=null;if(c){let e=D(c,[],C.unstable_mask?C.unstable_mask.pathname:"/",!0);"/"!==b&&(e.pathname="/"===e.pathname?b:M([b,e.pathname])),_=x.createHref(e)}let[z,P,T]=function(t,n){let r=e.useContext(Ze),[a,o]=e.useState(!1),[l,i]=e.useState(!1),{onFocus:s,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=n,p=e.useRef(null);e.useEffect(()=>{if("render"===t&&i(!0),"viewport"===t){let e=new IntersectionObserver(e=>{e.forEach(e=>{i(e.isIntersecting)})},{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}},[t]),e.useEffect(()=>{if(a){let e=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(e)}}},[a]);let h=()=>{o(!0)},m=()=>{o(!1),i(!1)};return r?"intent"!==t?[l,p,{}]:[l,p,{onFocus:tt(s,h),onBlur:tt(u,m),onMouseEnter:tt(c,h),onMouseLeave:tt(d,m),onTouchStart:tt(f,h)}]:[!1,p,{}]}(o,y),$=function(t){let{target:n,replace:r,unstable_mask:a,state:o,preventScrollReset:l,relative:i,viewTransition:s,unstable_defaultShouldRevalidate:u,unstable_useTransitions:c}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},f=de(),p=se(),h=fe(t,{relative:i});return e.useCallback(m=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(m,n)){m.preventDefault();let n=void 0!==r?r:d(p)===d(h),g=()=>f(t,{replace:n,unstable_mask:a,state:o,preventScrollReset:l,relative:i,viewTransition:s,unstable_defaultShouldRevalidate:u});c?e.startTransition(()=>g()):g()}},[p,f,h,r,a,o,n,t,l,i,s,u,c])}(h,{replace:u,unstable_mask:c,state:f,target:p,preventScrollReset:m,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:v,unstable_useTransitions:w});let j=!(S.isExternal||s),O=e.createElement("a",{...y,...T,href:(j?_:void 0)||S.absoluteURL||E,onClick:j?function(e){r&&r(e),e.defaultPrevented||$(e)}:r,ref:st(n,P),target:p,"data-discover":k||"render"!==a?void 0:"true"});return z&&!k?e.createElement(e.Fragment,null,O,e.createElement(rt,{page:E})):O});ht.displayName="Link",e.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:o="",end:l=!1,style:s,to:u,viewTransition:c,children:d,...f}=t,p=fe(u,{relative:f.relative}),h=se(),m=e.useContext(Y),{navigator:g,basename:v}=e.useContext(ne),y=null!=m&&function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(Z);i(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=vt("useViewTransitionState"),o=fe(t,{relative:n});if(!r.isTransitioning)return!1;let l=j(r.currentLocation.pathname,a)||r.currentLocation.pathname,s=j(r.nextLocation.pathname,a)||r.nextLocation.pathname;return null!=P(o.pathname,s)||null!=P(o.pathname,l)}(p)&&!0===c,b=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,x=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;a||(x=x.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&v&&(w=j(w,v)||w);const k="/"!==b&&b.endsWith("/")?b.length-1:b.length;let S,E=x===b||!l&&x.startsWith(b)&&"/"===x.charAt(k),C=null!=w&&(w===b||!l&&w.startsWith(b)&&"/"===w.charAt(b.length)),_={isActive:E,isPending:C,isTransitioning:y},z=E?r:void 0;S="function"===typeof o?o(_):[o,E?"active":null,C?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let T="function"===typeof s?s(_):s;return e.createElement(ht,{...f,"aria-current":z,className:S,ref:n,style:T,to:u,viewTransition:c},"function"===typeof d?d(_):d)}).displayName="NavLink";var mt=e.forwardRef((t,n)=>{let{discover:r="render",fetcherKey:a,navigate:o,reloadDocument:l,replace:s,state:u,method:c=Le,action:f,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:v,...y}=t,{unstable_useTransitions:b}=e.useContext(ne),x=xt(),w=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(ne),a=e.useContext(ae);i(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),l={...fe(t||".",{relative:n})},s=se();if(null==t){l.search=s.search;let e=new URLSearchParams(l.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();l.search=n?`?${n}`:""}}t&&"."!==t||!o.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(l.pathname="/"===l.pathname?r:M([r,l.pathname]));return d(l)}(f,{relative:h}),k="get"===c.toLowerCase()?"get":"post",S="string"===typeof f&&pt.test(f);return e.createElement("form",{ref:n,method:k,action:w,onSubmit:l?p:t=>{if(p&&p(t),t.defaultPrevented)return;t.preventDefault();let n=t.nativeEvent.submitter,r=n?.getAttribute("formmethod")||c,l=()=>x(n||t.currentTarget,{fetcherKey:a,method:r,navigate:o,replace:s,state:u,relative:h,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:v});b&&!1!==o?e.startTransition(()=>l()):l()},...y,"data-discover":S||"render"!==r?void 0:"true"})});function gt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vt(t){let n=e.useContext(Q);return i(n,gt(t)),n}mt.displayName="Form";var yt=0,bt=()=>`__${String(++yt)}__`;function xt(){let{router:t}=vt("useSubmit"),{basename:n}=e.useContext(ne),r=Ee("useRouteId"),a=t.fetch,o=t.navigate;return e.useCallback(async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:l,method:i,encType:s,formData:u,body:c}=He(e,n);if(!1===t.navigate){let e=t.fetcherKey||bt();await a(e,r,t.action||l,{unstable_defaultShouldRevalidate:t.unstable_defaultShouldRevalidate,preventScrollReset:t.preventScrollReset,formData:u,body:c,formMethod:t.method||i,formEncType:t.encType||s,flushSync:t.flushSync})}else await o(t.action||l,{unstable_defaultShouldRevalidate:t.unstable_defaultShouldRevalidate,preventScrollReset:t.preventScrollReset,formData:u,body:c,formMethod:t.method||i,formEncType:t.encType||s,replace:t.replace,state:t.state,fromRouteId:r,flushSync:t.flushSync,viewTransition:t.viewTransition})},[a,o,n,r])}var wt=function(){return wt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},wt.apply(this,arguments)};Object.create;function kt(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var St={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Et="-ms-",Ct="-moz-",_t="-webkit-",zt="comm",Pt="rule",Tt="decl",$t="@keyframes",jt=Math.abs,Ot=String.fromCharCode,Nt=Object.assign;function Rt(e){return e.trim()}function Lt(e,t){return(e=t.exec(e))?e[0]:e}function At(e,t,n){return e.replace(t,n)}function Dt(e,t,n){return e.indexOf(t,n)}function Mt(e,t){return 0|e.charCodeAt(t)}function Ft(e,t,n){return e.slice(t,n)}function It(e){return e.length}function Ht(e){return e.length}function Ut(e,t){return t.push(e),e}function Wt(e,t){return e.filter(function(e){return!Lt(e,t)})}var Bt=1,Vt=1,qt=0,Kt=0,Gt=0,Qt="";function Yt(e,t,n,r,a,o,l,i){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:Bt,column:Vt,length:l,return:"",siblings:i}}function Xt(e,t){return Nt(Yt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Jt(e){for(;e.root;)e=Xt(e.root,{children:[e]});Ut(e,e.siblings)}function Zt(){return Gt=Kt>0?Mt(Qt,--Kt):0,Vt--,10===Gt&&(Vt=1,Bt--),Gt}function en(){return Gt=Kt<qt?Mt(Qt,Kt++):0,Vt++,10===Gt&&(Vt=1,Bt++),Gt}function tn(){return Mt(Qt,Kt)}function nn(){return Kt}function rn(e,t){return Ft(Qt,e,t)}function an(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function on(e){return Bt=Vt=1,qt=It(Qt=e),Kt=0,[]}function ln(e){return Qt="",e}function sn(e){return Rt(rn(Kt-1,dn(91===e?e+2:40===e?e+1:e)))}function un(e){for(;(Gt=tn())&&Gt<33;)en();return an(e)>2||an(Gt)>3?"":" "}function cn(e,t){for(;--t&&en()&&!(Gt<48||Gt>102||Gt>57&&Gt<65||Gt>70&&Gt<97););return rn(e,nn()+(t<6&&32==tn()&&32==en()))}function dn(e){for(;en();)switch(Gt){case e:return Kt;case 34:case 39:34!==e&&39!==e&&dn(Gt);break;case 40:41===e&&dn(e);break;case 92:en()}return Kt}function fn(e,t){for(;en()&&e+Gt!==57&&(e+Gt!==84||47!==tn()););return"/*"+rn(t,Kt-1)+"*"+Ot(47===e?e:en())}function pn(e){for(;!an(tn());)en();return rn(e,Kt)}function hn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function mn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case Tt:return e.return=e.return||e.value;case zt:return"";case $t:return e.return=e.value+"{"+hn(e.children,r)+"}";case Pt:if(!It(e.value=e.props.join(",")))return""}return It(n=hn(e.children,r))?e.return=e.value+"{"+n+"}":""}function gn(e,t,n){switch(function(e,t){return 45^Mt(e,0)?(((t<<2^Mt(e,0))<<2^Mt(e,1))<<2^Mt(e,2))<<2^Mt(e,3):0}(e,t)){case 5103:return _t+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return _t+e+e;case 4855:return _t+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ct+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return _t+e+Ct+e+Et+e+e;case 5936:switch(Mt(e,t+11)){case 114:return _t+e+Et+At(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return _t+e+Et+At(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return _t+e+Et+At(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return _t+e+Et+e+e;case 6165:return _t+e+Et+"flex-"+e+e;case 5187:return _t+e+At(e,/(\w+).+(:[^]+)/,_t+"box-$1$2"+Et+"flex-$1$2")+e;case 5443:return _t+e+Et+"flex-item-"+At(e,/flex-|-self/g,"")+(Lt(e,/flex-|baseline/)?"":Et+"grid-row-"+At(e,/flex-|-self/g,""))+e;case 4675:return _t+e+Et+"flex-line-pack"+At(e,/align-content|flex-|-self/g,"")+e;case 5548:return _t+e+Et+At(e,"shrink","negative")+e;case 5292:return _t+e+Et+At(e,"basis","preferred-size")+e;case 6060:return _t+"box-"+At(e,"-grow","")+_t+e+Et+At(e,"grow","positive")+e;case 4554:return _t+At(e,/([^-])(transform)/g,"$1"+_t+"$2")+e;case 6187:return At(At(At(e,/(zoom-|grab)/,_t+"$1"),/(image-set)/,_t+"$1"),e,"")+e;case 5495:case 3959:return At(e,/(image-set\([^]*)/,_t+"$1$`$1");case 4968:return At(At(e,/(.+:)(flex-)?(.*)/,_t+"box-pack:$3"+Et+"flex-pack:$3"),/space-between/,"justify")+_t+e+e;case 4200:if(!Lt(e,/flex-|baseline/))return Et+"grid-column-align"+Ft(e,t)+e;break;case 2592:case 3360:return Et+At(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Lt(e.props,/grid-\w+-end/)})?~Dt(e+(n=n[t].value),"span",0)?e:Et+At(e,"-start","")+e+Et+"grid-row-span:"+(~Dt(n,"span",0)?Lt(n,/\d+/):+Lt(n,/\d+/)-+Lt(e,/\d+/))+";":Et+At(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Lt(e.props,/grid-\w+-start/)})?e:Et+At(At(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return At(e,/(.+)-inline(.+)/,_t+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(It(e)-1-t>6)switch(Mt(e,t+1)){case 109:if(45!==Mt(e,t+4))break;case 102:return At(e,/(.+:)(.+)-([^]+)/,"$1"+_t+"$2-$3$1"+Ct+(108==Mt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Dt(e,"stretch",0)?gn(At(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return At(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,o,l,i){return Et+n+":"+r+i+(a?Et+n+"-span:"+(o?l:+l-+r)+i:"")+e});case 4949:if(121===Mt(e,t+6))return At(e,":",":"+_t)+e;break;case 6444:switch(Mt(e,45===Mt(e,14)?18:11)){case 120:return At(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_t+(45===Mt(e,14)?"inline-":"")+"box$3$1"+_t+"$2$3$1"+Et+"$2box$3")+e;case 100:return At(e,":",":"+Et)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return At(e,"scroll-","scroll-snap-")+e}return e}function vn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Tt:return void(e.return=gn(e.value,e.length,n));case $t:return hn([Xt(e,{value:At(e.value,"@","@"+_t)})],r);case Pt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Lt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jt(Xt(e,{props:[At(t,/:(read-\w+)/,":-moz-$1")]})),Jt(Xt(e,{props:[t]})),Nt(e,{props:Wt(n,r)});break;case"::placeholder":Jt(Xt(e,{props:[At(t,/:(plac\w+)/,":"+_t+"input-$1")]})),Jt(Xt(e,{props:[At(t,/:(plac\w+)/,":-moz-$1")]})),Jt(Xt(e,{props:[At(t,/:(plac\w+)/,Et+"input-$1")]})),Jt(Xt(e,{props:[t]})),Nt(e,{props:Wt(n,r)})}return""})}}function yn(e){return ln(bn("",null,null,null,[""],e=on(e),0,[0],e))}function bn(e,t,n,r,a,o,l,i,s){for(var u=0,c=0,d=l,f=0,p=0,h=0,m=1,g=1,v=1,y=0,b="",x=a,w=o,k=r,S=b;g;)switch(h=y,y=en()){case 40:if(108!=h&&58==Mt(S,d-1)){-1!=Dt(S+=At(sn(y),"&","&\f"),"&\f",jt(u?i[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=sn(y);break;case 9:case 10:case 13:case 32:S+=un(h);break;case 92:S+=cn(nn()-1,7);continue;case 47:switch(tn()){case 42:case 47:Ut(wn(fn(en(),nn()),t,n,s),s),5!=an(h||1)&&5!=an(tn()||1)||!It(S)||" "===Ft(S,-1,void 0)||(S+=" ");break;default:S+="/"}break;case 123*m:i[u++]=It(S)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(S=At(S,/\f/g,"")),p>0&&(It(S)-d||0===m&&47===h)&&Ut(p>32?kn(S+";",r,n,d-1,s):kn(At(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(Ut(k=xn(S,t,n,u,c,a,i,b,x=[],w=[],d,o),o),123===y)if(0===c)bn(S,t,k,k,x,o,d,i,w);else{switch(f){case 99:if(110===Mt(S,3))break;case 108:if(97===Mt(S,2))break;default:c=0;case 100:case 109:case 115:}c?bn(e,k,k,r&&Ut(xn(e,k,k,0,0,a,i,b,a,x=[],d,w),w),a,w,d,i,r?x:w):bn(S,k,k,k,[""],w,0,i,w)}}u=c=p=0,m=v=1,b=S="",d=l;break;case 58:d=1+It(S),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Zt())continue;switch(S+=Ot(y),y*m){case 38:v=c>0?1:(S+="\f",-1);break;case 44:i[u++]=(It(S)-1)*v,v=1;break;case 64:45===tn()&&(S+=sn(en())),f=tn(),c=d=It(b=S+=pn(nn())),y++;break;case 45:45===h&&2==It(S)&&(m=0)}}return o}function xn(e,t,n,r,a,o,l,i,s,u,c,d){for(var f=a-1,p=0===a?o:[""],h=Ht(p),m=0,g=0,v=0;m<r;++m)for(var y=0,b=Ft(e,f+1,f=jt(g=l[m])),x=e;y<h;++y)(x=Rt(g>0?p[y]+" "+b:At(b,/&\f/g,p[y])))&&(s[v++]=x);return Yt(e,t,n,0===a?Pt:i,s,u,c,d)}function wn(e,t,n,r){return Yt(e,t,n,zt,Ot(Gt),Ft(e,2,-2),0,r)}function kn(e,t,n,r,a){return Yt(e,t,n,Tt,Ft(e,0,r),Ft(e,r+1,-1),r,a)}var Sn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",En="active",Cn="data-styled-version",_n="6.3.12",zn="/*!sc*/\n",Pn="undefined"!=typeof window&&"undefined"!=typeof document,Tn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),$n={};function jn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var On=new Map,Nn=new Map,Rn=1,Ln=function(e){if(On.has(e))return On.get(e);for(;Nn.has(Rn);)Rn++;var t=Rn++;return On.set(e,t),Nn.set(t,e),t},An=function(e,t){Rn=t+1,On.set(e,t),Nn.set(t,e)},Dn=(new Set,Object.freeze([])),Mn=Object.freeze({});function Fn(e,t,n){return void 0===n&&(n=Mn),e.theme!==n.theme&&e.theme||t||n.theme}var In=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Hn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Un=/(^-|-$)/g;function Wn(e){return e.replace(Hn,"-").replace(Un,"")}var Bn=/(a)(d)/gi,Vn=function(e){return String.fromCharCode(e+(e>25?39:97))};function qn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Vn(t%52)+n;return(Vn(t%52)+n).replace(Bn,"$1-$2")}var Kn,Gn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Qn=function(e){return Gn(5381,e)};function Yn(e){return qn(Qn(e)>>>0)}function Xn(e){return e.displayName||e.name||"Component"}function Jn(e){return"string"==typeof e&&!0}var Zn="function"==typeof Symbol&&Symbol.for,er=Zn?Symbol.for("react.memo"):60115,tr=Zn?Symbol.for("react.forward_ref"):60112,nr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},rr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ar={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},or=((Kn={})[tr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Kn[er]=ar,Kn);function lr(e){return("type"in(t=e)&&t.type.$$typeof)===er?ar:"$$typeof"in e?or[e.$$typeof]:nr;var t}var ir=Object.defineProperty,sr=Object.getOwnPropertyNames,ur=Object.getOwnPropertySymbols,cr=Object.getOwnPropertyDescriptor,dr=Object.getPrototypeOf,fr=Object.prototype;function pr(e,t,n){if("string"!=typeof t){if(fr){var r=dr(t);r&&r!==fr&&pr(e,r,n)}var a=sr(t);ur&&(a=a.concat(ur(t)));for(var o=lr(e),l=lr(t),i=0;i<a.length;++i){var s=a[i];if(!(s in rr||n&&n[s]||l&&s in l||o&&s in o)){var u=cr(t,s);try{ir(e,s,u)}catch(e){}}}}return e}function hr(e){return"function"==typeof e}function mr(e){return"object"==typeof e&&"styledComponentId"in e}function gr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function vr(e,t){return e.join(t||"")}function yr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function br(e,t,n){if(void 0===n&&(n=!1),!n&&!yr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=br(e[r],t[r]);else if(yr(t))for(var r in t)e[r]=br(e[r],t[r]);return e}function xr(e,t){Object.defineProperty(e,"toString",{value:t})}var wr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw jn(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),i=0,s=(o=0,t.length);o<s;o++)this.tag.insertRule(l,t[o])&&(this.groupSizes[e]++,l++,i++);i>0&&this._cGroup>e&&(this._cIndex+=i)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+=this.tag.getRule(o)+zn;return t},e}(),kr="style[".concat(Sn,"][").concat(Cn,'="').concat(_n,'"]'),Sr=new RegExp("^".concat(Sn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Er=function(e){return"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},Cr=function(e){if(!e)return document;if(Er(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Er(t))return t}return document},_r=function(e,t,n){for(var r,a=n.split(","),o=0,l=a.length;o<l;o++)(r=a[o])&&e.registerName(t,r)},zr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(zn),a=[],o=0,l=r.length;o<l;o++){var i=r[o].trim();if(i){var s=i.match(Sr);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(An(c,u),_r(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(i)}}},Pr=function(e){for(var t=Cr(e.options.target).querySelectorAll(kr),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(Sn)!==En&&(zr(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Tr(){return n.nc}var $r=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Sn,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(Sn,En),r.setAttribute(Cn,_n);var l=Tr();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},jr=function(){function e(e){this.element=$r(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets,r=0,a=n.length;r<a;r++){var o=n[r];if(o.ownerNode===e)return o}throw jn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Or=function(){function e(e){this.element=$r(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Nr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Rr=Pn,Lr={isServer:!Pn,useCSSOMInjection:!Tn},Ar=function(){function e(e,t,n){void 0===e&&(e=Mn),void 0===t&&(t={});var r=this;this.options=wt(wt({},Lr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Pn&&Rr&&(Rr=!1,Pr(this)),xr(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return Nn.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a);if(void 0===o||!o.size)return"continue";var l=t.getGroup(n);if(0===l.length)return"continue";var i=Sn+".g"+n+'[id="'+a+'"]',s="";o.forEach(function(e){e.length>0&&(s+=e+",")}),r+=l+i+'{content:"'+s+'"}'+zn},o=0;o<n;o++)a(o);return r}(r)})}return e.registerId=function(e){return Ln(e)},e.prototype.rehydrate=function(){!this.server&&Pn&&Pr(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var r=new e(wt(wt({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Pn&&t.target!==this.options.target&&Cr(this.options.target)!==Cr(t.target)&&Pr(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Nr(n):t?new jr(n):new Or(n)}(this.options),new wr(e)));var e},e.prototype.hasNameForId=function(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r},e.prototype.registerName=function(e,t){Ln(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Ln(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Ln(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}();function Dr(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in St||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Mr=function(e){return e>="A"&&e<="Z"};function Fr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Mr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ir=Symbol.for("sc-keyframes");var Hr=function(e){return null==e||!1===e||""===e},Ur=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Hr(r)&&(Array.isArray(r)&&r.isCss||hr(r)?t.push("".concat(Fr(n),":"),r,";"):yr(r)?t.push.apply(t,kt(kt(["".concat(n," {")],Ur(r),!1),["}"],!1)):t.push("".concat(Fr(n),": ").concat(Dr(n,r),";")))}return t};function Wr(e,t,n,r,a){if(void 0===a&&(a=[]),"string"==typeof e)return e&&a.push(e),a;if(Hr(e))return a;if(mr(e))return a.push(".".concat(e.styledComponentId)),a;var o;if(hr(e))return!hr(o=e)||o.prototype&&o.prototype.isReactComponent||!t?(a.push(e),a):Wr(e(t),t,n,r,a);if(function(e){return"object"==typeof e&&null!==e&&Ir in e}(e))return n?(e.inject(n,r),a.push(e.getName(r))):a.push(e),a;if(yr(e)){for(var l=Ur(e),i=0;i<l.length;i++)a.push(l[i]);return a}if(!Array.isArray(e))return a.push(e.toString()),a;for(i=0;i<e.length;i++)Wr(e[i],t,n,r,a);return a}function Br(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(hr(n)&&!mr(n))return!1}return!0}var Vr=Qn(_n),qr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Br(e),this.componentId=t,this.baseHash=Gn(Vr,t),this.baseStyle=n,Ar.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=gr(r,this.staticRulesId);else{var a=vr(Wr(this.rules,e,t,n)),o=qn(Gn(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var l=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,l)}r=gr(r,o),this.staticRulesId=o}else{for(var i=Gn(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=vr(Wr(c,e,t,n));i=Gn(Gn(i,String(u)),d),s+=d}}if(s){var f=qn(i>>>0);if(!t.hasNameForId(this.componentId,f)){var p=n(s,".".concat(f),void 0,this.componentId);t.insertRules(this.componentId,f,p)}r=gr(r,f)}}return{className:r,css:"undefined"==typeof window?t.getTag().getGroup(Ln(this.componentId)):""}},e}(),Kr=/&/g,Gr=47,Qr=42;function Yr(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,r=0,a=!1,o=0;o<t;o++){var l=e.charCodeAt(o);if(0!==r||a||l!==Gr||e.charCodeAt(o+1)!==Qr)if(a)l===Qr&&e.charCodeAt(o+1)===Gr&&(a=!1,o++);else if(34!==l&&39!==l||0!==o&&92===e.charCodeAt(o-1)){if(0===r)if(123===l)n++;else if(125===l&&--n<0)return!0}else 0===r?r=l:r===l&&(r=0);else a=!0,o++}return 0!==n||0!==r}function Xr(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Xr(e.children,t)),e})}function Jr(e){var t,n,r,a=void 0===e?Mn:e,o=a.options,l=void 0===o?Mn:o,i=a.plugins,s=void 0===i?Dn:i,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push(function(e){e.type===Pt&&e.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),e.props[0]=e.props[0].replace(Kr,n).replace(r,u))}),l.prefix&&c.push(vn),c.push(mn);var d,f=[],p=function(e){var t=Ht(e);return function(n,r,a,o){for(var l="",i=0;i<t;i++)l+=e[i](n,r,a,o)||"";return l}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)}))),h=function(e,a,o,i){void 0===a&&(a=""),void 0===o&&(o=""),void 0===i&&(i="&"),t=i,n=a,r=void 0;var s=function(e){if(!Yr(e))return e;for(var t=e.length,n="",r=0,a=0,o=0,l=!1,i=0;i<t;i++){var s=e.charCodeAt(i);if(0!==o||l||s!==Gr||e.charCodeAt(i+1)!==Qr)if(l)s===Qr&&e.charCodeAt(i+1)===Gr&&(l=!1,i++);else if(34!==s&&39!==s||0!==i&&92===e.charCodeAt(i-1)){if(0===o)if(123===s)a++;else if(125===s){if(--a<0){for(var u=i+1;u<t;){var c=e.charCodeAt(u);if(59===c||10===c)break;u++}u<t&&59===e.charCodeAt(u)&&u++,a=0,i=u-1,r=u;continue}0===a&&(n+=e.substring(r,i+1),r=i+1)}else 59===s&&0===a&&(n+=e.substring(r,i+1),r=i+1)}else 0===o?o=s:o===s&&(o=0);else l=!0,i++}if(r<t){var d=e.substring(r);Yr(d)||(n+=d)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],r=0,a=0,o=0,l=0;a<t;){var i=e.charCodeAt(a);if(34!==i&&39!==i||0!==a&&92===e.charCodeAt(a-1))if(0===o)if(i===Gr&&a+1<t&&e.charCodeAt(a+1)===Qr){for(a+=2;a+1<t&&(e.charCodeAt(a)!==Qr||e.charCodeAt(a+1)!==Gr);)a++;a+=2}else if(40===i&&a>=3&&108==(32|e.charCodeAt(a-1))&&114==(32|e.charCodeAt(a-2))&&117==(32|e.charCodeAt(a-3)))l=1,a++;else if(l>0)41===i?l--:40===i&&l++,a++;else if(i===Qr&&a+1<t&&e.charCodeAt(a+1)===Gr)a>r&&n.push(e.substring(r,a)),r=a+=2;else if(i===Gr&&a+1<t&&e.charCodeAt(a+1)===Gr){for(a>r&&n.push(e.substring(r,a));a<t&&10!==e.charCodeAt(a);)a++;r=a}else a++;else a++;else 0===o?o=i:o===i&&(o=0),a++}return 0===r?e:(r<t&&n.push(e.substring(r)),n.join(""))}(e)),u=yn(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);return l.namespace&&(u=Xr(u,l.namespace)),f=[],hn(u,p),f};return h.hash=s.length?s.reduce(function(e,t){return t.name||jn(15),Gn(e,t.name)},5381).toString():"",h}var Zr=new Ar,ea=Jr(),ta=e.createContext({shouldForwardProp:void 0,styleSheet:Zr,stylis:ea}),na=(ta.Consumer,e.createContext(void 0));function ra(){return e.useContext(ta)}function aa(t){if(!e.useMemo)return t.children;var n=ra().styleSheet,r=e.useMemo(function(){var e=n;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e},[t.disableCSSOMInjection,t.sheet,t.target,n]),a=e.useMemo(function(){return Jr({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:t.stylisPlugins})},[t.enableVendorPrefixes,t.namespace,t.stylisPlugins]),o=e.useMemo(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:r,stylis:a}},[t.shouldForwardProp,r,a]);return e.createElement(ta.Provider,{value:o},e.createElement(na.Provider,{value:a},t.children))}var oa=e.createContext(void 0);oa.Consumer;var la={};new Set;function ia(t,n,r){var a=mr(t),o=t,l=!Jn(t),i=n.attrs,s=void 0===i?Dn:i,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Wn(e);la[n]=(la[n]||0)+1;var r="".concat(n,"-").concat(Yn(_n+n+la[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return Jn(e)?"styled.".concat(e):"Styled(".concat(Xn(e),")")}(t):d,p=n.displayName&&n.componentId?"".concat(Wn(n.displayName),"-").concat(n.componentId):n.componentId||c,h=a&&o.attrs?o.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(a&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new qr(r,p,a?o.componentStyle:void 0);function b(t,n){return function(t,n,r){var a=t.attrs,o=t.componentStyle,l=t.defaultProps,i=t.foldedComponentIds,s=t.styledComponentId,u=t.target,c=e.useContext(oa),d=ra(),f=t.shouldForwardProp||d.shouldForwardProp,p=Fn(n,c,l)||Mn,h=function(e,t,n){for(var r,a=wt(wt({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var l=hr(r=e[o])?r(a):r;for(var i in l)"className"===i?a.className=gr(a.className,l[i]):"style"===i?a.style=wt(wt({},a.style),l[i]):i in t&&void 0===t[i]||(a[i]=l[i])}return"className"in t&&"string"==typeof t.className&&(a.className=gr(a.className,t.className)),a}(a,n,p),m=h.as||u,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var y=function(e,t){var n=ra();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),b=y.className,x=gr(i,s);return b&&(x+=" "+b),h.className&&(x+=" "+h.className),g[Jn(m)&&!In.has(m)?"class":"className"]=x,r&&(g.ref=r),(0,e.createElement)(m,g)}(x,t,n)}b.displayName=f;var x=e.forwardRef(b);return x.attrs=h,x.componentStyle=y,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=a?gr(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=p,x.target=a?o.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)br(e,a[r],!0);return e}({},o.defaultProps,e):e}}),xr(x,function(){return".".concat(x.styledComponentId)}),l&&pr(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function sa(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var ua=function(e){return Object.assign(e,{isCss:!0})};function ca(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(hr(e)||yr(e))return ua(Wr(sa(Dn,kt([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Wr(r):ua(Wr(sa(r,t)))}function da(e,t,n){if(void 0===n&&(n=Mn),!t)throw jn(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,ca.apply(void 0,kt([r],a,!1)))};return r.attrs=function(r){return da(e,t,wt(wt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return da(e,t,wt(wt({},n),r))},r}var fa=function(e){return da(ia,e)},pa=fa;In.forEach(function(e){pa[e]=fa(e)});var ha,ma=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Br(e),Ar.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(vr(Wr(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Ar.registerId(this.componentId+e);var a=this.componentId+e;this.isStatic?n.hasNameForId(a,a)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))},e}();!function(){function e(e,t){var n=this;this[ha]=!0,this.inject=function(e,t){void 0===t&&(t=ea);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,xr(this,function(){throw jn(12,String(n.name))})}e.prototype.getName=function(e){return void 0===e&&(e=ea),this.name+e.hash}}();ha=Ir;(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=Tr(),r=vr([n&&'nonce="'.concat(n,'"'),"".concat(Sn,'="true"'),"".concat(Cn,'="').concat(_n,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw jn(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw jn(2);var r=t.instance.toString();if(!r)return[];var a=((n={})[Sn]="",n[Cn]=_n,n.dangerouslySetInnerHTML={__html:r},n),o=Tr();return o&&(a.nonce=o),[e.createElement("style",wt({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Ar({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw jn(2);return e.createElement(aa,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw jn(3)}})(),"__sc-".concat(Sn,"__");const ga={smallPhone:360,phone:430,tablet:820,desktopHd:1920,tv4k:3840},va={bordoAccent:"#9e1e36",bordoAccentDark:"#6a1426",bordoCore:"#4a1020",deepBlack:"#2e0810",outerSpace:"#2e0810",white:"#ffffff",goldMain:"#d4af37",goldHover:"#f1d592",goldSoft18:"rgba(212, 175, 55, 0.18)",goldSoft10:"rgba(180, 140, 30, 0.1)",goldSoft08:"rgba(212, 175, 55, 0.08)",goldSoft025:"rgba(212, 175, 55, 0.025)"},ya={main:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'},ba=pa.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(
      ellipse at 80% 10%,
      ${va.bordoAccent} 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      ${va.bordoAccentDark} 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 50% 50%,
      ${va.bordoCore} 0%,
      ${va.deepBlack} 100%
    );

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 70% 0%,
        ${va.goldSoft18} 0%,
        transparent 45%
      ),
      radial-gradient(
        ellipse at 100% 50%,
        ${va.goldSoft10} 0%,
        transparent 40%
      ),
      radial-gradient(
        ellipse at 30% 100%,
        ${va.goldSoft08} 0%,
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
      ${va.goldSoft025} 80px,
      ${va.goldSoft025} 81px
    );
    pointer-events: none;
  }
`;var xa=n(579);const wa=function(){return(0,xa.jsx)(ba,{})},ka=pa.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
  z-index: 1000;

  @media (max-width: ${ga.desktopHd}px) {
    padding: 0 42px;
  }

  @media (max-width: 821px) {
    height: auto;
    min-height: 64px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "left center right";
    align-items: center;
    column-gap: 10px;
    row-gap: 0;
    padding: 6px 14px;
  }

  @media (max-width: ${ga.tablet}px) {
    padding: 6px 12px;
  }

  @media (max-width: ${ga.phone}px) {
    min-height: 60px;
    column-gap: 8px;
    padding: 6px 10px;
  }
`,Sa=pa.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 821px) {
    grid-area: left;
    flex: none;
    min-width: 0;
  }
`,Ea=pa.div`
  flex: 2;
  display: flex;
  justify-content: center;

  @media (max-width: 821px) {
    grid-area: center;
    flex: 1;
    min-width: 0;
    justify-content: center;
  }

  @media (max-width: 629px) {
    display: none;
  }
`,Ca=pa.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  @media (max-width: 821px) {
    grid-area: right;
    flex: none;
    min-width: 0;
  }
`,_a=pa.div`
  display: flex;

  @media (max-width: 629px) {
    display: none;
  }
`,za=pa.button`
  display: none;
  border: 1px solid rgba(241, 213, 146, 0.38);
  background: rgba(34, 10, 16, 0.72);
  color: ${va.goldHover};
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

  @media (max-width: 629px) {
    display: inline-flex;
  }
`,Pa=pa.button`
  position: fixed;
  inset: 0;
  border: none;
  background: rgba(0, 0, 0, 0.4);
  opacity: ${e=>e.$open?1:0};
  pointer-events: ${e=>e.$open?"auto":"none"};
  transition: opacity 0.25s ease;
  z-index: 999;
  display: none;

  @media (max-width: 629px) {
    top: 72px;
    display: block;
  }
`,Ta=pa.aside`
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

  @media (max-width: 629px) {
    display: block;
  }
`,$a=pa.div`
  margin-top: 14px;
  padding-top: 12px;
  display: flex;
  justify-content: center;
  padding-left: 0;
  border-top: 1px solid rgba(241, 213, 146, 0.18);

  & > div {
    justify-content: center;
  }
`,ja=n.p+"static/media/znak-wodny.5040197ae93bea0121d6.png",Oa=pa(ht)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`,Na=pa.img.attrs({src:ja,alt:"Logo"})`
  height: 90px;
  width: auto;
  cursor: pointer;
  filter: brightness(3) contrast(1.2) saturate(1.1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.34))
    drop-shadow(0 0 8px ${va.goldMain})
    drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18));
  transition:
    transform 0.3s ease,
    filter 0.3s ease;

  @media (max-width: ${ga.tablet}px) {
    height: 72px;
  }

  @media (max-width: ${ga.phone}px) {
    height: 58px;
  }

  &:hover {
    transform: scale(1.05);
    filter: brightness(3) contrast(1.2) saturate(1.1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${va.goldMain})
      drop-shadow(0 0 16px ${va.goldHover});
  }
`;const Ra=function(){return(0,xa.jsx)(Oa,{to:"/","aria-label":"Strona g\u0142\xf3wna Klara Queen",children:(0,xa.jsx)(Na,{})})},La=pa.ul`
  display: flex;
  align-items: ${e=>(e.$vertical,"center")};
  gap: clamp(10px, 2vw, 40px);
  flex-wrap: nowrap;
  flex-direction: ${e=>e.$vertical?"column":"row"};
  justify-content: ${e=>(e.$vertical,"center")};
  list-style: none;
  margin: 0;
  padding: ${e=>e.$vertical?"0":"0 8px"};
  white-space: normal;
  width: auto;

  @media (max-width: 821px) {
    gap: ${e=>e.$vertical?"16px":"6px 12px"};
    flex-wrap: ${e=>e.$vertical?"nowrap":"wrap"};
    padding: 0;
    justify-content: ${e=>(e.$vertical,"center")};
    max-width: 100%;
  }

  @media (max-width: ${ga.phone}px) {
    gap: 4px 8px;
  }
`,Aa=pa.li`
  flex-shrink: 1;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: ${e=>(e.$vertical,"center")};
  gap: 0;
  width: auto;
  color: ${va.goldHover};
  font-family: ${ya.main};
  font-weight: ${e=>e.$vertical?500:600};
  text-transform: uppercase;
  letter-spacing: ${e=>e.$vertical?"1.1px":"clamp(0.7px, 0.1vw, 1.5px)"};
  cursor: pointer;
  font-size: ${e=>e.$vertical?"0.9rem":"clamp(0.64rem, 0.72vw, 0.82rem)"};
  white-space: nowrap;
  text-align: center;
  line-height: 1;
  padding: ${e=>e.$vertical?"2px 0":"5px 9px"};
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

  @media (max-width: 821px) {
    letter-spacing: ${e=>e.$vertical?"1.1px":"0.8px"};
    font-size: ${e=>e.$vertical?"0.9rem":"0.66rem"};
    padding: ${e=>e.$vertical?"1px 0":"4px 7px"};
    white-space: nowrap;
  }

  @media (max-width: ${ga.phone}px) {
    letter-spacing: ${e=>e.$vertical?"0.9px":"0.7px"};
    font-size: ${e=>e.$vertical?"0.84rem":"0.64rem"};
    padding: ${e=>e.$vertical?"1px 0":"4px 6px"};
  }

  &:hover {
    color: ${va.white};
    transform: translateY(-1px);
    border-color: ${e=>e.$vertical?"transparent":"rgba(241, 213, 146, 0.48)"};
    background: ${e=>e.$vertical?"transparent":"linear-gradient(180deg, rgba(255, 245, 214, 0.08) 0%, rgba(44, 12, 22, 0.28) 100%)"};
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${va.goldMain},
      0 0 18px ${va.goldHover};
  }
`,Da=pa.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: inherit;
`;var Ma={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fa=e.createContext&&e.createContext(Ma),Ia=["attr","size","title"];function Ha(){return Ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ha.apply(null,arguments)}function Ua(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Wa(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ua(Object(n),!0).forEach(function(t){Ba(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ua(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ba(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Va(t){return t&&t.map((t,n)=>e.createElement(t.tag,Wa({key:n},t.attr),Va(t.child)))}function qa(t){return n=>e.createElement(Ka,Ha({attr:Wa({},t.attr)},n),Va(t.child))}function Ka(t){var n=n=>{var r,{attr:a,size:o,title:l}=t,i=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(t,Ia),s=o||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),e.createElement("svg",Ha({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,i,{className:r,style:Wa(Wa({color:t.color||n.color},n.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&e.createElement("title",null,l),t.children)};return void 0!==Fa?e.createElement(Fa.Consumer,null,e=>n(e)):n(Ma)}function Ga(e){return qa({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function Qa(e){return qa({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function Ya(e){return qa({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Xa(e){return qa({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function Ja(e){return qa({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function Za(e){return qa({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(e)}function eo(e){return qa({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}const to={labels:[{name:"Oferta",url:"#offer"},{name:"Aktualno\u015bci",url:"#news"},{name:"Wsp\xf3\u0142praca",url:"#collab"},{name:"Opinie",url:"#reviews"},{name:"O Nas",to:"/about"}],socials:[{id:1,icon:Qa,url:"https://facebook.com",label:"Facebook"},{id:2,icon:Ga,url:"https://youtube.com",label:"YouTube"},{id:3,icon:function(e){return qa({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(e)},url:"https://allegro.pl",label:"Allegro"}]};const no=function(e){let{vertical:t=!1,onItemClick:n}=e;const r=()=>{n&&n()};return(0,xa.jsx)(La,{$vertical:t,children:to.labels.map((e,n)=>(0,xa.jsx)(Aa,{$vertical:t,onClick:r,children:e.to?(0,xa.jsx)(Da,{as:ht,to:e.to,children:e.name}):(0,xa.jsx)(Da,{href:e.url,children:e.name})},`${e.name}-${n}`))})},ro=pa.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: ${ga.tablet}px) {
    gap: 14px;
  }

  @media (max-width: ${ga.phone}px) {
    gap: 12px;
  }
`,ao=pa.a`
  color: ${va.goldHover};
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

  @media (max-width: ${ga.tablet}px) {
    font-size: 1.18rem;
  }

  @media (max-width: ${ga.phone}px) {
    font-size: 1.08rem;
  }

  &:hover {
    color: ${va.white};
    transform: translateY(-2px) scale(1.04);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${va.goldMain})
      drop-shadow(0 0 16px ${va.goldHover});
  }
`;const oo=function(){return(0,xa.jsx)(ro,{children:to.socials.map(e=>{const t=e.icon;return(0,xa.jsx)(ao,{href:e.url,target:"_blank",rel:"noreferrer","aria-label":e.label,children:(0,xa.jsx)(t,{title:e.label})},e.id)})})};const lo=function(){const[t,n]=(0,e.useState)(!1),r=()=>{n(!1)};return(0,xa.jsxs)(xa.Fragment,{children:[(0,xa.jsxs)(ka,{children:[(0,xa.jsx)(Sa,{children:(0,xa.jsx)(Ra,{})}),(0,xa.jsx)(Ea,{children:(0,xa.jsx)(no,{})}),(0,xa.jsxs)(Ca,{children:[(0,xa.jsx)(_a,{children:(0,xa.jsx)(oo,{})}),(0,xa.jsx)(za,{type:"button",onClick:()=>{n(e=>!e)},"aria-label":t?"Zamknij menu":"Otworz menu","aria-expanded":t,children:t?(0,xa.jsx)(Ya,{}):(0,xa.jsx)(eo,{})})]})]}),(0,xa.jsx)(Pa,{$open:t,onClick:r}),(0,xa.jsxs)(Ta,{$open:t,children:[(0,xa.jsx)(no,{vertical:!0,onItemClick:r}),(0,xa.jsx)($a,{children:(0,xa.jsx)(oo,{})})]})]})},io=pa.footer`
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

  @media (max-width: ${ga.desktopHd}px) {
    padding: 55px 45px 22px;
  }

  @media (max-width: ${ga.tablet}px) {
    padding: 45px 18px 18px;
  }

  @media (max-width: ${ga.smallPhone}px) {
    padding: 35px 14px 15px;
  }
`,so=pa.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 50px;
  width: 100%;

  @media (max-width: ${ga.tablet}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }

  @media (max-width: ${ga.phone}px) {
    gap: 20px;
  }

  @media (max-width: ${ga.smallPhone}px) {
    gap: 16px;
  }
`;const uo={brand:{name:"Klara Queen",slogan:"Digital Excellence",description:"Tworzymy luksusowe do\u015bwiadczenia cyfrowe, kt\xf3re definiuj\u0105 now\u0105 jako\u015b\u0107 Twojej marki w sieci."},links:[{name:"Start",to:"/"},{name:"Oferta",url:"#offer"},{name:"Aktualno\u015bci",url:"#news"},{name:"Wsp\xf3\u0142praca",url:"#collaboration"},{name:"Opinie",url:"#opinions"},{name:"O Nas",to:"/about"},{name:"Najcz\u0119stsze pytania",url:"#faq"}],socials:[{id:1,icon:Ga,url:"https://youtube.com",label:"YouTube"},{id:2,icon:Qa,url:"https://facebook.com",label:"Facebook"},{id:3,icon:function(e){return qa({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(e)},url:"https://allegro.pl",label:"Allegro"}],contact:{email:"kontakt@studioklara.pl",copy:`\xa9 ${(new Date).getFullYear()} Klara Queen. Wszystkie prawa zastrze\u017cone.`}},co=pa.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: ${ga.tablet}px) {
    align-items: center;
  }
`,fo=pa.div`
  display: flex;
  align-items: center;
  margin-top: -56px;

  @media (max-width: ${ga.desktopHd}px) {
    margin-top: -50px;
  }

  @media (max-width: ${ga.tablet}px) {
    margin-top: -36px;
  }

  @media (max-width: ${ga.smallPhone}px) {
    margin-top: -28px;
  }
`,po=pa.img`
  height: 180px;
  width: auto;
  cursor: pointer;
  filter: brightness(2.8) contrast(1.1) saturate(1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.3))
    drop-shadow(0 0 6px ${va.goldMain})
    drop-shadow(0 1px 4px rgba(0, 0, 0, 0.15));
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    filter: brightness(2.8) contrast(1.1) saturate(1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.4))
      drop-shadow(0 0 8px ${va.goldMain})
      drop-shadow(0 0 12px ${va.goldHover});
  }

  @media (max-width: ${ga.desktopHd}px) {
    height: 168px;
  }

  @media (max-width: ${ga.tablet}px) {
    height: 140px;
  }

  @media (max-width: ${ga.smallPhone}px) {
    height: 120px;
  }
`,ho=pa.p`
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

  @media (max-width: ${ga.tablet}px) {
    font-size: 0.78rem;
    line-height: 1.5;
    max-width: 500px;
  }

  @media (max-width: ${ga.smallPhone}px) {
    font-size: 0.72rem;
    line-height: 1.4;
  }
`;const mo=function(e){let{data:t}=e;return(0,xa.jsxs)(co,{children:[(0,xa.jsx)(fo,{children:(0,xa.jsx)(po,{src:ja,alt:t.name})}),(0,xa.jsx)(ho,{children:t.description})]})},go=ca`
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
    background: ${va.goldMain};
    transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${va.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 16px rgba(212, 175, 55, 0.45);

    &::before {
      width: 100%;
    }
  }

  @media (max-width: ${ga.tablet}px) {
    font-size: 0.76rem;
  }

  @media (max-width: ${ga.smallPhone}px) {
    font-size: 0.7rem;
  }
`,vo=pa.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${ga.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${ga.smallPhone}px) {
    gap: 10px;
  }
`,yo=pa.h4`
  color: ${va.goldHover};
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

  @media (max-width: ${ga.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${ga.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,bo=pa.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;

  @media (max-width: ${ga.tablet}px) {
    grid-template-columns: 1fr;
    gap: 12px;
    place-items: center;
  }

  @media (max-width: ${ga.phone}px) {
    gap: 8px;
    place-items: center;
  }

  @media (max-width: ${ga.smallPhone}px) {
    gap: 6px;
  }
`,xo=pa.a`
  ${go}
`,wo=pa(ht)`
  ${go}
`;const ko=function(e){let{data:t}=e;return(0,xa.jsxs)(vo,{children:[(0,xa.jsx)(yo,{children:"Nawigacja"}),(0,xa.jsx)(bo,{children:t.map((e,t)=>e.to?(0,xa.jsx)(wo,{to:e.to,children:e.name},t):(0,xa.jsx)(xo,{href:e.url,children:e.name},t))})]})},So=pa.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${ga.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${ga.smallPhone}px) {
    gap: 10px;
  }
`,Eo=pa.h4`
  color: ${va.goldHover};
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

  @media (max-width: ${ga.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${ga.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,Co=pa.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: ${ga.tablet}px) {
    justify-content: center;
    gap: 16px;
  }

  @media (max-width: ${ga.smallPhone}px) {
    gap: 12px;
  }
`,_o=pa.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${va.white};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  opacity: 0.8;

  svg {
    font-size: 1.6rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.15));
    color: ${va.goldMain};
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
    color: ${va.white};

    svg {
      transform: scale(1.12);
      color: ${va.goldHover};
      filter: drop-shadow(0 6px 12px rgba(212, 175, 55, 0.3));
    }

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: ${ga.tablet}px) {
    gap: 6px;

    svg {
      font-size: 1.4rem;
    }
  }

  @media (max-width: ${ga.smallPhone}px) {
    gap: 5px;

    svg {
      font-size: 1.2rem;
    }
  }
`,zo=pa.span`
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: ${va.white};
  opacity: 0.75;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: "Cormorant Garamond", serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: ${ga.tablet}px) {
    font-size: 0.58rem;
    letter-spacing: 1px;
  }

  @media (max-width: ${ga.smallPhone}px) {
    font-size: 0.54rem;
  }
`;const Po=function(e){let{data:t}=e;return(0,xa.jsxs)(So,{children:[(0,xa.jsx)(Eo,{children:"Nasze Kana\u0142y"}),(0,xa.jsx)(Co,{children:t.map(e=>(0,xa.jsxs)(_o,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,xa.jsx)(e.icon,{}),(0,xa.jsx)(zo,{children:e.label})]},e.id))})]})},To=pa.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px 0;
  border-top: 1px solid rgba(212, 175, 55, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: ${ga.tablet}px) {
    flex-direction: column-reverse;
    gap: 12px;
    margin: 30px auto 0;
    padding: 15px 0;
    text-align: center;
    align-items: center;
  }

  @media (max-width: ${ga.smallPhone}px) {
    margin: 20px auto 0;
    padding: 12px 0;
    gap: 10px;
  }
`,$o=pa.span`
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

  @media (max-width: ${ga.tablet}px) {
    font-size: 0.68rem;
  }

  @media (max-width: ${ga.smallPhone}px) {
    font-size: 0.63rem;
  }
`,jo=pa.a`
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
      ${va.goldMain} 100%
    );
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${va.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(212, 175, 55, 0.6);

    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${ga.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 0.8px;
  }

  @media (max-width: ${ga.smallPhone}px) {
    font-size: 0.7rem;
  }
`;const Oo=function(e){let{data:t}=e;return(0,xa.jsxs)(To,{children:[(0,xa.jsx)($o,{children:t.copy}),(0,xa.jsx)(jo,{href:`mailto:${t.email}`,children:t.email})]})};const No=function(){const{brand:e,links:t,socials:n,contact:r}=uo;return(0,xa.jsxs)(io,{children:[(0,xa.jsxs)(so,{children:[(0,xa.jsx)(mo,{data:e}),(0,xa.jsx)(ko,{data:t}),(0,xa.jsx)(Po,{data:n})]}),(0,xa.jsx)(Oo,{data:r})]})},Ro=(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=ca.apply(void 0,kt([t],n,!1)),o="sc-global-".concat(Yn(JSON.stringify(a))),l=new ma(a,o),i=new WeakMap,s=function(t){var n=ra(),r=e.useContext(oa),a=i.get(n.styleSheet);return void 0===a&&(a=n.styleSheet.allocateGSInstance(o),i.set(n.styleSheet,a)),e.useLayoutEffect(function(){return n.styleSheet.server||function(e,t,n,r,a){if(l.isStatic)l.renderStyles(e,$n,n,a);else{var o=wt(wt({},t),{theme:Fn(t,r,s.defaultProps)});l.renderStyles(e,o,n,a)}}(a,t,n.styleSheet,r,n.stylis),function(){l.removeStyles(a,n.styleSheet)}},[a,t,n.styleSheet,r,n.stylis]),null};return e.memo(s)})`
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
    background-color: ${va.outerSpace||"#1a0005"};
    color: ${va.white||"#ffffff"};
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
    background: ${va.goldMain||"#d4af37"};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${va.goldHover||"#f1d592"};
  }
`,Lo=pa.section`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: visible;
  background: transparent;
  padding: clamp(88px, 10vh, 122px) 0 0;

  @media (max-width: 821px) {
    padding: 94px 0 0;
  }

  @media (max-width: ${ga.tablet}px) {
    padding: 94px 0 0;
  }

  @media (max-width: 640px) {
    padding: 88px 0 0;
  }

  @media (max-width: ${ga.phone}px) {
    padding: 84px 0 0;
  }
`,Ao=pa.div`
  --columns-gap: clamp(14px, 2vw, 28px);
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  padding: clamp(12px, 2vh, 24px) clamp(22px, 4vw, 56px);
  gap: var(--columns-gap);

  @media (max-width: 1050px) {
    --columns-gap: clamp(10px, 1.4vw, 18px);
    padding: clamp(10px, 1.8vh, 18px) clamp(18px, 3.2vw, 40px);
  }

  @media (max-width: ${ga.tablet}px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 0px;
    padding: 2px 14px 0;
    margin: calc(10px - 2cm) auto 0;
  }

  @media (max-width: 640px) {
    gap: 0px;
    padding: 2px 10px 0;
  }

  @media (max-width: 600px) {
    margin: calc(10px - 1cm) auto 0;
  }

  @media (max-width: ${ga.phone}px) {
    gap: 8px;
    padding: 4px 10px 0;
  }

  @media (max-width: 420px) {
    gap: 8px;
    padding: 4px 10px 0;
  }
`,Do=pa.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;

  @media (max-width: ${ga.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${ga.tablet}px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 760px;
    margin-top: -52px;
  }

  @media (max-width: 640px) {
    margin-top: -36px;
  }

  @media (max-width: 600px) {
    margin-top: 0;
  }

  @media (max-width: ${ga.phone}px) {
    margin-top: 0;
  }

  @media (max-width: 420px) {
    margin-top: 0;
  }
`,Mo=pa.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;

  @media (max-width: ${ga.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${ga.tablet}px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 760px;
    margin-top: 0;
  }

  @media (max-width: ${ga.phone}px) {
    margin-top: 0;
  }
`,Fo=(pa.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,pa.div`
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

  @media (max-width: 1050px) {
    padding: clamp(9px, 1.2vw, 14px);
  }

  @media (max-width: ${ga.tablet}px) {
    max-width: 760px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  @media (max-width: ${ga.phone}px) {
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
    align-items: center;
    padding: 0 2px;
  }
`),Io=pa.div`
  font-family: "Manrope", "Segoe UI", sans-serif;
  color: rgba(255, 242, 214, 0.92);
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.2vw, 2.2px);
  font-size: clamp(0.62rem, 0.9vw, 0.82rem);
  font-weight: 500;
  margin-bottom: 18px;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);

  @media (max-width: ${ga.tablet}px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${ga.phone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.8px;
    margin-bottom: 12px;
  }
`,Ho=pa.h1`
  margin: 0 0 18px;
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  color: ${va.goldHover};
  font-weight: 600;
  letter-spacing: 0;
  text-rendering: optimizeLegibility;
  font-kerning: normal;
  font-size: clamp(1.05rem, 3.1vw, 2.7rem);
  line-height: 0.94;
  text-shadow:
    0 0 2px rgba(255, 246, 220, 0.35),
    0 0 14px rgba(212, 175, 55, 0.22),
    0 10px 24px rgba(0, 0, 0, 0.24);

  @media (max-width: 1050px) {
    font-size: clamp(1rem, 2.7vw, 2.2rem);
    letter-spacing: 0;
    line-height: 1;
  }

  @media (max-width: ${ga.tablet}px) {
    font-size: clamp(0.95rem, 3.2vw, 1.95rem);
    letter-spacing: 0;
    text-align: center;
    width: 100%;
    line-height: 1;
  }

  @media (max-width: ${ga.phone}px) {
    margin-bottom: 14px;
    font-size: clamp(0.9rem, 5.2vw, 1.6rem);
    line-height: 1.1;
  }
`,Uo=pa.p`
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

  @media (max-width: ${ga.tablet}px) {
    max-width: 560px;
    font-size: clamp(0.74rem, 1.8vw, 0.84rem);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${ga.phone}px) {
    max-width: 100%;
    font-size: clamp(0.72rem, 3.4vw, 0.8rem);
    line-height: 1.45;
    text-align: center;
  }
`,Wo=pa.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: nowrap;

  @media (max-width: ${ga.tablet}px) {
    width: 100%;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10px;
  }

  @media (max-width: ${ga.phone}px) {
    gap: 8px;
    margin-top: 22px;
    flex-wrap: nowrap;
    justify-content: center;
  }
`,Bo=`\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 48px;\n  padding: 0 24px;\n  border-radius: 14px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.9px;\n  font-size: clamp(0.68rem, 0.8vw, 0.82rem);\n  font-weight: 700;\n  white-space: nowrap;\n  flex: 0 0 auto;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease,\n    color 0.3s ease, border-color 0.3s ease;\n\n  @media (max-width: ${ga.tablet}px) {\n    min-height: 42px;\n    padding: 0 14px;\n    font-size: 0.74rem;\n    letter-spacing: 0.8px;\n  }\n\n  @media (max-width: ${ga.phone}px) {\n    min-height: 40px;\n    padding: 0 12px;\n    font-size: 0.7rem;\n    letter-spacing: 0.7px;\n  }\n`,Vo=pa.a`
  ${Bo}
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
`,qo=pa.a`
  ${Bo}
  color: rgba(255, 246, 220, 0.92);
  background: rgba(53, 13, 19, 0.22);
  border: 1px solid rgba(241, 213, 146, 0.58);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.04),
    0 10px 24px rgba(0, 0, 0, 0.14);

  &:hover {
    transform: translateY(-1px);
    color: ${va.white};
    border-color: rgba(241, 213, 146, 0.78);
    box-shadow:
      0 14px 30px rgba(0, 0, 0, 0.2),
      0 0 18px rgba(212, 175, 55, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  }
`;const Ko=function(){return(0,xa.jsxs)(Fo,{children:[(0,xa.jsx)(Io,{children:"Unikalny design, kt\xf3ry zachwyca"}),(0,xa.jsxs)(Ho,{children:["Luksusowe i funkcjonalne",(0,xa.jsx)("br",{}),"strony WWW dla Twojej marki"]}),(0,xa.jsxs)(Uo,{children:["Projektujemy spersonalizowane, unikalne rozwi\u0105zania cyfrowe,",(0,xa.jsx)("br",{}),"kt\xf3re buduj\u0105 autorytet i przyci\u0105gaj\u0105 klient\xf3w premium."]}),(0,xa.jsxs)(Wo,{children:[(0,xa.jsx)(Vo,{href:"#projekty",children:"Zobacz Projekty"}),(0,xa.jsx)(qo,{href:"#oferta",children:"Poznaj Ofert\u0119"})]})]})},Go=pa.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: clamp(240px, 28vw, 380px);
  z-index: 5;
  padding: clamp(10px, 1.3vw, 16px);
  margin: 0 auto;

  @media (max-width: 1050px) {
    height: clamp(220px, 24vw, 320px);
    padding: clamp(9px, 1.2vw, 14px);
  }

  @media (max-width: ${ga.tablet}px) {
    width: min(100%, 760px);
    height: clamp(240px, 46vw, 380px);
    padding: 2px;
    margin: 0 auto;
  }

  @media (max-width: ${ga.phone}px) {
    padding: 0 2px;
  }
`,Qo=pa.div`
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

  @media (max-width: ${ga.tablet}px) {
    --offset-distance: 68px;
    --edge-offset-distance: 112px;
  }

  @media (max-width: ${ga.phone}px) {
    --offset-distance: 56px;
    --edge-offset-distance: 98px;
  }
`,Yo=pa.img`
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
  box-shadow: ${e=>e.$active?`0 28px 50px rgba(0, 0, 0, 0.45), 0 0 20px ${va.goldSoft18}`:"0 16px 26px rgba(0, 0, 0, 0.3)"};
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

  @media (max-width: ${ga.phone}px) {
    width: 260px;
    height: 182px;
  }
`,Xo=n.p+"static/media/pexels-dimkidama-15115560.04167beb6bd16a6e9fd4.jpg",Jo=n.p+"static/media/pexels-firmbee-com-22729701-6963740.a9a8b980823767df4886.jpg",Zo=n.p+"static/media/pexels-magnetme-3917414-5839461.06d3415285cbf1cc0bf1.jpg",el=n.p+"static/media/pexels-rdne-7310202.0cfb9c3eef397dd77e13.jpg",tl=[Xo,Jo,Zo,el,Jo],nl=(e,t,n)=>{let r=t-e;return r>n/2&&(r-=n),r<-n/2&&(r+=n),r};const rl=function(){const[t,n]=(0,e.useState)(0);return(0,e.useEffect)(()=>{const e=setInterval(()=>{n(e=>(e+1)%tl.length)},4e3);return()=>clearInterval(e)},[]),(0,xa.jsx)(Go,{children:(0,xa.jsx)(Qo,{children:tl.map((e,n)=>(0,xa.jsx)(Yo,{src:e,alt:`Projekt ${n+1}`,$offset:nl(t,n,tl.length),$active:n===t},`${e}-${n}`))})})},al=pa.section`
  width: 100%;
  margin-top: clamp(-38px, -3vw, -18px);
  padding: clamp(0px, 1.4vw, 20px) clamp(16px, 4vw, 60px)
    clamp(68px, 7vw, 104px);
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
`,ol=pa.div`
  text-align: center;
  margin-bottom: clamp(8px, 1.2vw, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,ll=pa.h2`
  color: ${va.goldHover};
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.22vw, 3px);
  font-size: clamp(1.8rem, 4vw, 3.1rem);
  font-weight: 600;
  line-height: 0.96;
  text-shadow:
    0 0 2px rgba(255, 246, 220, 0.32),
    0 0 14px rgba(212, 175, 55, 0.18),
    0 12px 28px rgba(0, 0, 0, 0.22);
  margin: 0;
`,il=pa.p`
  color: rgba(241, 213, 146, 0.72);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-weight: 500;
  margin-top: 0;
  font-size: clamp(0.62rem, 0.78vw, 0.72rem);
  letter-spacing: clamp(2.8px, 0.38vw, 4.8px);
  text-transform: uppercase;
  line-height: 1;
  max-width: 480px;
  position: relative;
  padding: 0 18px;

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
`,sl=pa.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
`,ul=pa.div`
  flex: 1;
  display: flex;
  gap: clamp(12px, 1.6vw, 20px);
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 10px 2px 20px;
  margin: -10px -2px -20px;

  &::-webkit-scrollbar {
    display: none;
  }
`,cl=pa.div`
  flex: 0 0 calc(25% - 15px);
  min-width: 0;
  scroll-snap-align: start;
  display: flex;

  @media (max-width: 1050px) {
    flex: 0 0 calc(33.33% - 14px);
  }

  @media (max-width: ${ga.tablet}px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(50% - 6px);
  }

  @media (max-width: ${ga.smallPhone}px) {
    flex: 0 0 calc(100% - 0px);
  }
`,dl=pa.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${va.goldMain};
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
`,fl=pa.div`
  margin-top: clamp(36px, 5vw, 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover div {
    width: 100px;
  }
`,pl=pa.span`
  color: ${va.goldMain};
  text-transform: uppercase;
  letter-spacing: clamp(1.4px, 0.3vw, 4px);
  font-size: clamp(0.68rem, 0.9vw, 0.75rem);
  margin-bottom: 10px;
`,hl=pa.div`
  width: 50px;
  height: 1px;
  background: ${va.goldMain};
  transition: width 0.4s ease;
`,ml=pa.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 0 clamp(14px, 3vw, 30px);
  border-radius: 18px;
  border: 1px solid rgba(212, 175, 55, 0.24);
  background: linear-gradient(
    160deg,
    rgba(132, 22, 44, 0.36) 0%,
    rgba(46, 8, 16, 0.82) 40%,
    rgba(13, 0, 3, 0.98) 100%
  );
  box-shadow:
    inset 0 1px 0 rgba(255, 245, 220, 0.09),
    inset 0 -1px 0 rgba(0, 0, 0, 0.4),
    0 2px 4px rgba(0, 0, 0, 0.28),
    0 8px 16px rgba(0, 0, 0, 0.36),
    0 20px 40px rgba(0, 0, 0, 0.38),
    0 0 0 1px rgba(212, 175, 55, 0.06),
    0 0 28px rgba(122, 20, 40, 0.18);
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
    border-color: rgba(241, 213, 146, 0.62);
    transform: ${e=>e.isLink?"translateY(-8px)":"none"};
    background: linear-gradient(
      160deg,
      rgba(155, 30, 58, 0.44) 0%,
      rgba(56, 12, 22, 0.88) 40%,
      rgba(13, 0, 3, 1) 100%
    );
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.32),
      0 12px 28px rgba(0, 0, 0, 0.46),
      0 28px 56px rgba(0, 0, 0, 0.5),
      0 0 32px rgba(212, 175, 55, 0.16),
      0 0 60px rgba(122, 20, 40, 0.2),
      inset 0 1px 0 rgba(255, 245, 220, 0.12),
      0 0 0 1px rgba(212, 175, 55, 0.1);
  }
`,gl=pa.div`
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
`,vl=pa.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  filter: brightness(0.88) saturate(0.9);
  transition:
    filter 0.45s ease,
    transform 0.45s ease;

  ${ml}:hover & {
    filter: brightness(1) saturate(1);
    transform: scale(1.03);
  }
`,yl=pa.div`
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
`,bl=pa.h3`
  color: ${va.goldHover};
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  text-transform: uppercase;
  letter-spacing: clamp(0.6px, 0.18vw, 2px);
  font-size: clamp(0.88rem, 2.8vw, 1.35rem);
  font-weight: 600;
  line-height: 1.05;
  margin: clamp(10px, 2vw, 14px) clamp(8px, 2vw, 20px) clamp(4px, 1vw, 8px);
  text-align: center;
  text-shadow:
    0 0 12px rgba(212, 175, 55, 0.22),
    0 2px 8px rgba(0, 0, 0, 0.3);
`,xl=(pa.p`
  color: rgba(255, 245, 220, 0.78);
  font-size: clamp(0.68rem, 2.2vw, 0.82rem);
  text-align: center;
  line-height: 1.5;
  margin: 0 clamp(8px, 2vw, 20px);
  max-width: 240px;
`,pa.div`
  width: 44px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${va.goldMain} 50%,
    transparent 100%
  );
  margin-top: 14px;
  opacity: 0.65;
`);const wl=function(e){let{project:t}=e;const{type:n,url:r,title:a,description:o,image:l,icon:i}=t;return(0,xa.jsxs)(ml,{as:"link"===n?"a":"div",href:"link"===n?r:void 0,target:"link"===n?"_blank":void 0,isLink:"link"===n,children:[(0,xa.jsx)(gl,{children:(0,xa.jsx)(vl,{src:l,alt:a})}),(0,xa.jsx)(yl,{children:(0,xa.jsx)(i,{})}),(0,xa.jsx)(bl,{children:a}),(0,xa.jsx)(xl,{})]})},kl=[{id:1,type:"link",url:"https://google.com",title:"Boutique E-commerce",description:"W pe\u0142ni dzia\u0142aj\u0105cy sklep internetowy premium.",image:Xo,icon:Xa},{id:2,type:"example",title:"Studio Architektury",image:Jo,icon:function(e){return qa({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}},{id:3,type:"example",title:"Portfolio Fotografa",image:Zo,icon:function(e){return qa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(e)}},{id:4,type:"link",url:"https://moja-inna-strona.pl",title:"Dashboard Finansowy",image:el,icon:function(e){return qa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}},{id:5,type:"example",title:"Projekt Specjalny",image:Xo,icon:Xa},{id:6,type:"example",title:"Projekt Specjalny 2",image:Jo,icon:Xa}];const Sl=function(){const t=(0,e.useRef)(null),n=(0,e.useRef)(!1),r=e=>{const r=t.current;if(!r||n.current)return;const a=r.firstElementChild;if(!a)return;const o=parseFloat(getComputedStyle(r).gap)||16,l=a.offsetWidth+o,i=r.scrollWidth-r.clientWidth;n.current=!0,e>0&&r.scrollLeft>=i-2?r.scrollTo({left:0,behavior:"smooth"}):e<0&&r.scrollLeft<=2?r.scrollTo({left:i,behavior:"smooth"}):r.scrollBy({left:e*l,behavior:"smooth"}),setTimeout(()=>{n.current=!1},580)};return(0,xa.jsxs)(al,{children:[(0,xa.jsxs)(ol,{children:[(0,xa.jsx)(ll,{children:"Przyk\u0142adowe Prace"}),(0,xa.jsx)(il,{children:"Ekskluzywne projekty cyfrowe tworzone z pasj\u0105"})]}),(0,xa.jsxs)(sl,{children:[(0,xa.jsx)(dl,{onClick:()=>r(-1),"aria-label":"Poprzedni projekt",children:(0,xa.jsx)(Za,{})}),(0,xa.jsx)(ul,{ref:t,children:kl.map(e=>(0,xa.jsx)(cl,{children:(0,xa.jsx)(wl,{project:e})},e.id))}),(0,xa.jsx)(dl,{onClick:()=>r(1),"aria-label":"Nast\u0119pny projekt",children:(0,xa.jsx)(Ja,{})})]}),(0,xa.jsxs)(fl,{children:[(0,xa.jsx)(pl,{children:"Zobacz Pe\u0142ne Portfolio"}),(0,xa.jsx)(hl,{})]})]})};const El=function(){return(0,xa.jsxs)(xa.Fragment,{children:[(0,xa.jsx)(Lo,{children:(0,xa.jsxs)(Ao,{children:[(0,xa.jsx)(Do,{children:(0,xa.jsx)(Ko,{})}),(0,xa.jsx)(Mo,{children:(0,xa.jsx)(rl,{})})]})}),(0,xa.jsx)(Sl,{})]})},Cl=pa.div`
  position: relative;
  z-index: 5;
`,_l=pa.section`
  padding: clamp(50px, 8vw, 100px) clamp(20px, 8vw, 50px);
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
`,zl=pa.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
`,Pl=pa.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${va.goldMain} 50%,
    transparent 100%
  );
  opacity: 0.25;
  margin: clamp(25px, 3vw, 40px) auto;
  max-width: 200px;
`,Tl=pa.h2`
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 700;
  margin-bottom: clamp(50px, 8vw, 80px);
  color: ${va.goldMain};
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
      ${va.goldMain} 20%,
      ${va.goldMain} 80%,
      transparent 100%
    );
  }
`,$l=pa.section`
  padding: clamp(40px, 6vw, 100px) clamp(20px, 8vw, 50px);
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
      ${va.goldMain},
      transparent
    );
  }
`,jl=pa.h1`
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 700;
  color: ${va.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: clamp(1px, 0.5vw, 3px);
  margin: clamp(40px, 5vw, 60px) 0 clamp(20px, 3vw, 30px);
  text-transform: uppercase;
`,Ol=pa.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: rgba(255, 255, 255, 0.82);
  line-height: clamp(1.6, 3vw, 1.9);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
  font-family: "Manrope", sans-serif;
`,Nl="Kraina Luksusowego Dyzajnu",Rl="Gdzie wizja spotyka precyzj\u0119. Tworzymy cyfrowe eksperyencje, kt\xf3re wyznaczaj\u0105 standardy bran\u017cy.",Ll={title:"Twoja Kolekcja",paragraphs:[". Stworzyli\u015bmy ekosystem wzorc\xf3w, kt\xf3re wyznaczaj\u0105 standardy - sprawdzone, doskonale zaprojektowane i gotowe do Twojej marki.","Ty wybierasz fundament z naszej autorskiej kolekcji, my dostosowujemy go do Twojej to\u017csamo\u015bci. Rezultat? Estetyka bez kompromis\xf3w i natychmiastowy autorytet w Twojej bran\u017cy.","Ka\u017cdy szablon to efekt setki godzin testowania, niezliczonych iteracji i wiedzy zdobytej pracuj\u0105c z luksusowymi markami na ca\u0142ym \u015bwiecie."],signature:"Autorska Kolekcja \xb7 Sprawdzone Struktury \xb7 Estetyka Bez Kompromis\xf3w"},Al=[{id:1,label:"Selekcja",value:"01",description:"Autorskie szablony zaprojektowane pod luksusowe marki."},{id:2,label:"Szybko\u015b\u0107",value:"02",description:"Twoja obecno\u015b\u0107 online w 2-4 dni robocze."},{id:3,label:"Sp\xf3jno\u015b\u0107",value:"03",description:"Gwarancja doskona\u0142ego wygl\u0105du na ka\u017cdym urz\u0105dzeniu."}],Dl=[{id:1,question:"Jak wygl\u0105da proces?",answer:"Wybierasz baz\u0119 z naszej autorskiej kolekcji, kt\xf3ra najlepiej oddaje charakter Twojej marki. Reszt\u0105 \u2013 wdro\u017ceniem i detalami \u2013 zajmujemy si\u0119 my. To proste, szybkie i gwarantowane."},{id:2,question:"Dlaczego warto wybra\u0107 szablon?",answer:"Otrzymujesz rozwi\u0105zanie, kt\xf3re przesz\u0142o setki test\xf3w estetycznych i technicznych. Zyskujesz czas, nie trac\u0105c na presti\u017cu. Ka\u017cdy szczeg\xf3\u0142 zosta\u0142 curated dla luksusowych marek."},{id:3,question:"Jaki jest czas realizacji?",answer:"Dzi\u0119ki gotowym fundamentom, Tw\xf3j projekt jest gotowy do publikacji w zaledwie 2 do 4 dni roboczych. Brak czekania, brak przeci\u0105gania \u2013 tylko rezultat."}],Ml=()=>(0,xa.jsxs)($l,{children:[(0,xa.jsx)(jl,{children:Nl}),(0,xa.jsx)(Ol,{children:Rl})]}),Fl=pa.div`
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
`,Il=pa.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: clamp(1.7, 4vw, 2.1);
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
  position: relative;
`,Hl=pa.div`
  color: ${va.goldMain};
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
`,Ul=()=>(0,xa.jsxs)(Fl,{children:[Ll.paragraphs.map((e,t)=>(0,xa.jsx)(Il,{children:e},t)),(0,xa.jsx)(Hl,{children:Ll.signature})]}),Wl=pa.div`
  border-left: 2px solid ${va.goldMain};
  padding-left: clamp(25px, 4vw, 40px);
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 6vw, 50px);
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
      ${va.goldMain} 0%,
      transparent 100%
    );
  }
`,Bl=pa.div`
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
`,Vl=pa.h4`
  color: ${va.goldMain};
  margin-bottom: clamp(12px, 2vw, 15px);
  font-size: clamp(1.05rem, 2.5vw, 1.25rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  margin-top: 0;
`,ql=pa.p`
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.85);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
`,Kl=pa.div`
  width: 100%;
`,Gl=pa.button`
  margin-top: clamp(40px, 6vw, 60px);
  padding: clamp(12px, 2vw, 16px) clamp(30px, 4vw, 50px);
  background: linear-gradient(
    135deg,
    ${va.goldMain} 0%,
    #f1d592 100%
  );
  color: ${va.deepBlack};
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
`,Ql=()=>{const e=de();return(0,xa.jsxs)(Kl,{children:[(0,xa.jsx)(Wl,{children:Dl.map(e=>(0,xa.jsxs)(Bl,{children:[(0,xa.jsx)(Vl,{children:e.question}),(0,xa.jsx)(ql,{children:e.answer})]},e.id))}),(0,xa.jsx)(Gl,{onClick:()=>e("/questions"),children:"Zobacz Wi\u0119cej Pyta\u0144"})]})},Yl=pa.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(250px, 25vw, 300px), 1fr)
  );
  gap: clamp(30px, 5vw, 50px);
  margin-top: clamp(60px, 8vw, 80px);
  width: 100%;

  @media (max-width: ${ga.tablet}px) {
    grid-template-columns: 1fr;
  }
`,Xl=pa.div`
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
    border-color: ${va.goldMain};
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
`,Jl=pa.span`
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: bold;
  color: ${va.goldMain};
  opacity: 0.95;
  font-family: "Cormorant Garamond", serif;
  line-height: 1;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,Zl=pa.span`
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  text-transform: uppercase;
  letter-spacing: clamp(1.5px, 0.5vw, 2.5px);
  color: ${va.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  opacity: 0.9;
`,ei=pa.p`
  font-size: clamp(0.85rem, 1.8vw, 0.98rem);
  line-height: clamp(1.6, 3vw, 1.8);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
`,ti=()=>(0,xa.jsx)(Yl,{children:Al.map(e=>(0,xa.jsxs)(Xl,{children:[(0,xa.jsx)(Jl,{children:e.value}),(0,xa.jsx)(Zl,{children:e.label}),(0,xa.jsx)(ei,{children:e.description})]},e.id))}),ni=pa.section`
  padding: clamp(80px, 12vw, 140px) clamp(20px, 8vw, 50px);
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
`,ri=pa.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: clamp(30px, 4vw, 50px);
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
`,ai=pa.button`
  padding: clamp(14px, 2.5vw, 18px) clamp(35px, 5vw, 60px);
  background: linear-gradient(
    135deg,
    ${va.goldMain} 0%,
    #f1d592 100%
  );
  color: ${va.deepBlack};
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
`,oi=()=>(0,xa.jsxs)(ni,{children:[(0,xa.jsx)(ri,{children:"Got\xf3w na transformacj\u0119 cyfrow\u0105?"}),(0,xa.jsx)(ai,{onClick:()=>{},children:"Rozpocznij swoj\u0105 kolekcj\u0119"})]}),li=()=>(0,xa.jsxs)(Cl,{children:[(0,xa.jsx)(Ml,{}),(0,xa.jsx)(Pl,{}),(0,xa.jsxs)(_l,{children:[(0,xa.jsx)(Tl,{children:"Twoja Kolekcja"}),(0,xa.jsx)(zl,{children:(0,xa.jsx)(Ul,{})})]}),(0,xa.jsx)(Pl,{}),(0,xa.jsxs)(_l,{children:[(0,xa.jsx)(Tl,{children:"Twoje Atuty"}),(0,xa.jsx)(zl,{style:{maxWidth:"1000px"},children:(0,xa.jsx)(ti,{})})]}),(0,xa.jsx)(Pl,{}),(0,xa.jsxs)(_l,{children:[(0,xa.jsx)(Tl,{children:"Jak To Dzia\u0142a?"}),(0,xa.jsx)(zl,{children:(0,xa.jsx)(Ql,{})})]}),(0,xa.jsx)(Pl,{}),(0,xa.jsx)(oi,{})]});var ii=n(977),si=n.n(ii);const ui=pa.div`
  flex: 1;
`;const ci=function(){return(0,xa.jsxs)(xa.Fragment,{children:[(0,xa.jsx)(Ro,{}),(0,xa.jsx)(wa,{}),(0,xa.jsx)(lo,{}),(0,xa.jsx)(ui,{children:(0,xa.jsxs)(Ne,{children:[(0,xa.jsx)(je,{path:"/",element:(0,xa.jsx)(El,{})}),(0,xa.jsx)(je,{path:"/about",element:(0,xa.jsx)(li,{})}),(0,xa.jsx)(je,{path:"/questions",element:(0,xa.jsx)(si(),{})})]})}),(0,xa.jsx)(No,{})]})};r.createRoot(document.getElementById("root")).render((0,xa.jsx)(e.StrictMode,{children:(0,xa.jsx)(ft,{basename:"/klara-queen",children:(0,xa.jsx)(ci,{})})}))})()})();
//# sourceMappingURL=main.c3a8461b.js.map