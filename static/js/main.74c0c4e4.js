/*! For license information please see main.74c0c4e4.js.LICENSE.txt */
(()=>{"use strict";var e={4(e,t,n){var r=n(853),a=n(43),o=n(950);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function u(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function c(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(s(e)!==e)throw Error(i(188))}function f(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=f(e)))return t;e=e.sibling}return null}var p=Object.assign,m=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),C=Symbol.for("react.lazy");Symbol.for("react.scope");var j=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var _=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var T=Symbol.iterator;function P(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=T&&e[T]||e["@@iterator"])?e:null}var $=Symbol.for("react.client.reference");function N(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===$?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case y:return"Fragment";case b:return"Profiler";case v:return"StrictMode";case S:return"Suspense";case z:return"SuspenseList";case j:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case g:return"Portal";case w:return e.displayName||"Context";case x:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case E:return null!==(t=e.displayName||null)?t:N(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return N(e(t))}catch(Vn){}}return null}var O=Array.isArray,R=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A={pending:!1,data:null,method:null,action:null},D=[],M=-1;function F(e){return{current:e}}function I(e){0>M||(e.current=D[M],D[M]=null,M--)}function H(e,t){M++,D[M]=e.current,e.current=t}var U,W,B=F(null),V=F(null),q=F(null),K=F(null);function G(e,t){switch(H(q,t),H(V,e),H(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=bd(t=vd(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(B),H(B,e)}function Y(){I(B),I(V),I(q)}function Q(e){null!==e.memoizedState&&H(K,e);var t=B.current,n=bd(t,e.type);t!==n&&(H(V,e),H(B,n))}function X(e){V.current===e&&(I(B),I(V)),K.current===e&&(I(K),ff._currentValue=A)}function J(e){if(void 0===U)try{throw Error()}catch(Vn){var t=Vn.stack.trim().match(/\n( *(at )?)/);U=t&&t[1]||"",W=-1<Vn.stack.indexOf("\n    at")?" (<anonymous>)":-1<Vn.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+U+e+W}var Z=!1;function ee(e,t){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(Vn){var r=Vn}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(i){if(i&&r&&"string"===typeof i.stack)return[i.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),i=o[0],l=o[1];if(i&&l){var s=i.split("\n"),u=l.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===u.length)for(r=s.length-1,a=u.length-1;1<=r&&0<=a&&s[r]!==u[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==u[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==u[a]){var c="\n"+s[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=r&&0<=a);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?J(n):""}function te(e,t){switch(e.tag){case 26:case 27:case 5:return J(e.type);case 16:return J("Lazy");case 13:return e.child!==t&&null!==t?J("Suspense Fallback"):J("Suspense");case 19:return J("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return J("Activity");default:return""}}function ne(e){try{var t="",n=null;do{t+=te(e,n),n=e,e=e.return}while(e);return t}catch(Vn){return"\nError generating stack: "+Vn.message+"\n"+Vn.stack}}var re=Object.prototype.hasOwnProperty,ae=r.unstable_scheduleCallback,oe=r.unstable_cancelCallback,ie=r.unstable_shouldYield,le=r.unstable_requestPaint,se=r.unstable_now,ue=r.unstable_getCurrentPriorityLevel,ce=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,fe=r.unstable_NormalPriority,pe=r.unstable_LowPriority,me=r.unstable_IdlePriority,he=r.log,ge=r.unstable_setDisableYieldValue,ye=null,ve=null;function be(e){if("function"===typeof he&&ge(e),ve&&"function"===typeof ve.setStrictMode)try{ve.setStrictMode(ye,e)}catch(t){}}var xe=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(we(e)/ke|0)|0},we=Math.log,ke=Math.LN2;var Se=256,ze=262144,Ee=4194304;function Ce(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function je(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var a=0,o=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=134217727&r;return 0!==l?0!==(r=l&~o)?a=Ce(r):0!==(i&=l)?a=Ce(i):n||0!==(n=l&~e)&&(a=Ce(n)):0!==(l=r&~o)?a=Ce(l):0!==i?a=Ce(i):n||0!==(n=r&~e)&&(a=Ce(n)),0===a?0:0!==t&&t!==a&&0===(t&o)&&((o=a&-a)>=(n=t&-t)||32===o&&0!==(4194048&n))?t:a}function _e(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Te(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Pe(){var e=Ee;return 0===(62914560&(Ee<<=1))&&(Ee=4194304),e}function $e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ne(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Oe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-xe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function Re(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Le(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:Ae(n))&(e.suspendedLanes|t))?0:n}function Ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function De(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Me(){var e=L.p;return 0!==e?e:void 0===(e=window.event)?32:_f(e.type)}function Fe(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var Ie=Math.random().toString(36).slice(2),He="__reactFiber$"+Ie,Ue="__reactProps$"+Ie,We="__reactContainer$"+Ie,Be="__reactEvents$"+Ie,Ve="__reactListeners$"+Ie,qe="__reactHandles$"+Ie,Ke="__reactResources$"+Ie,Ge="__reactMarker$"+Ie;function Ye(e){delete e[He],delete e[Ue],delete e[Be],delete e[Ve],delete e[qe]}function Qe(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[We]||n[He]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Dd(e);null!==e;){if(n=e[He])return n;e=Dd(e)}return t}n=(e=n).parentNode}return null}function Xe(e){if(e=e[He]||e[We]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function Je(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(i(33))}function Ze(e){var t=e[Ke];return t||(t=e[Ke]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Ge]=!0}var tt=new Set,nt={};function rt(e,t){at(e,t),at(e+"Capture",t)}function at(e,t){for(nt[e]=t,e=0;e<t.length;e++)tt.add(t[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},lt={};function st(e,t,n){if(a=t,re.call(lt,a)||!re.call(it,a)&&(ot.test(a)?lt[a]=!0:(it[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function ut(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function ct(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ft(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function pt(e){if(!e._valueTracker){var t=ft(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ft(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ht(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var gt=/[\n"\\]/g;function yt(e){return e.replace(gt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function vt(e,t,n,r,a,o,i,l){e.name="",null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?xt(e,i,dt(t)):null!=n?xt(e,i,dt(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=o&&(e.defaultChecked=!!o),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+dt(l):e.removeAttribute("name")}function bt(e,t,n,r,a,o,i,l){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=n){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return void pt(e);n=null!=n?""+dt(n):"",t=null!=t?""+dt(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.name=i),pt(e)}function xt(e,t,n){"number"===t&&ht(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function wt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function kt(e,t,n){null==t||((t=""+dt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+dt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function St(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(i(92));if(O(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=dt(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),pt(e)}function zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Et=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ct(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||Et.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function jt(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(i(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Ct(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Ct(e,o,t[o])}function _t(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $t(e){return Pt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Nt(){}var Ot=null;function Rt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Lt=null,At=null;function Dt(e){var t=Xe(e);if(t&&(e=t.stateNode)){var n=e[Ue]||null;e:switch(e=t.stateNode,t.type){case"input":if(vt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Ue]||null;if(!a)throw Error(i(90));vt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&mt(r)}break e;case"textarea":kt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&wt(e,!!n.multiple,t,!1)}}}var Mt=!1;function Ft(e,t,n){if(Mt)return e(t,n);Mt=!0;try{return e(t)}finally{if(Mt=!1,(null!==Lt||null!==At)&&(ec(),Lt&&(t=Lt,e=At,At=Lt=null,Dt(t),e)))for(t=0;t<e.length;t++)Dt(e[t])}}function It(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Ue]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Ht=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Ut=!1;if(Ht)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){Ut=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch(Zf){Ut=!1}var Bt=null,Vt=null,qt=null;function Kt(){if(qt)return qt;var e,t,n=Vt,r=n.length,a="value"in Bt?Bt.value:Bt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return qt=a.slice(e,1<t?1-t:void 0)}function Gt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Yt(){return!0}function Qt(){return!1}function Xt(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Yt:Qt,this.isPropagationStopped=Qt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Yt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Yt)},persist:function(){},isPersistent:Yt}),t}var Jt,Zt,en,tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nn=Xt(tn),rn=p({},tn,{view:0,detail:0}),an=Xt(rn),on=p({},rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&"mousemove"===e.type?(Jt=e.screenX-en.screenX,Zt=e.screenY-en.screenY):Zt=Jt=0,en=e),Jt)},movementY:function(e){return"movementY"in e?e.movementY:Zt}}),ln=Xt(on),sn=Xt(p({},on,{dataTransfer:0})),un=Xt(p({},rn,{relatedTarget:0})),cn=Xt(p({},tn,{animationName:0,elapsedTime:0,pseudoElement:0})),dn=Xt(p({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),fn=Xt(p({},tn,{data:0})),pn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=hn[e])&&!!t[e]}function yn(){return gn}var vn=Xt(p({},rn,{key:function(e){if(e.key){var t=pn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Gt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?mn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yn,charCode:function(e){return"keypress"===e.type?Gt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Gt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),bn=Xt(p({},on,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),xn=Xt(p({},rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yn})),wn=Xt(p({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),kn=Xt(p({},on,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Sn=Xt(p({},tn,{newState:0,oldState:0})),zn=[9,13,27,32],En=Ht&&"CompositionEvent"in window,Cn=null;Ht&&"documentMode"in document&&(Cn=document.documentMode);var jn=Ht&&"TextEvent"in window&&!Cn,_n=Ht&&(!En||Cn&&8<Cn&&11>=Cn),Tn=String.fromCharCode(32),Pn=!1;function $n(e,t){switch(e){case"keyup":return-1!==zn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var On=!1;var Rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ln(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Rn[e.type]:"textarea"===t}function An(e,t,n,r){Lt?At?At.push(r):At=[r]:Lt=r,0<(t=ad(t,"onChange")).length&&(n=new nn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Mn=null;function Fn(e){Qc(e,0)}function In(e){if(mt(Je(e)))return e}function Hn(e,t){if("change"===e)return t}var Un=!1;if(Ht){var Wn;if(Ht){var Bn="oninput"in document;if(!Bn){var qn=document.createElement("div");qn.setAttribute("oninput","return;"),Bn="function"===typeof qn.oninput}Wn=Bn}else Wn=!1;Un=Wn&&(!document.documentMode||9<document.documentMode)}function Kn(){Dn&&(Dn.detachEvent("onpropertychange",Gn),Mn=Dn=null)}function Gn(e){if("value"===e.propertyName&&In(Mn)){var t=[];An(t,Mn,e,Rt(e)),Ft(Fn,t)}}function Yn(e,t,n){"focusin"===e?(Kn(),Mn=n,(Dn=t).attachEvent("onpropertychange",Gn)):"focusout"===e&&Kn()}function Qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return In(Mn)}function Xn(e,t){if("click"===e)return In(t)}function Jn(e,t){if("input"===e||"change"===e)return In(t)}var Zn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function er(e,t){if(Zn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!re.call(t,a)||!Zn(e[a],t[a]))return!1}return!0}function tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nr(e,t){var n,r=tr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=tr(r)}}function rr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?rr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ar(e){for(var t=ht((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ht((e=t.contentWindow).document)}return t}function or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ir=Ht&&"documentMode"in document&&11>=document.documentMode,lr=null,sr=null,ur=null,cr=!1;function dr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;cr||null==lr||lr!==ht(r)||("selectionStart"in(r=lr)&&or(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ur&&er(ur,r)||(ur=r,0<(r=ad(sr,"onSelect")).length&&(t=new nn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lr)))}function fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pr={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionrun:fr("Transition","TransitionRun"),transitionstart:fr("Transition","TransitionStart"),transitioncancel:fr("Transition","TransitionCancel"),transitionend:fr("Transition","TransitionEnd")},mr={},hr={};function gr(e){if(mr[e])return mr[e];if(!pr[e])return e;var t,n=pr[e];for(t in n)if(n.hasOwnProperty(t)&&t in hr)return mr[e]=n[t];return e}Ht&&(hr=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);var yr=gr("animationend"),vr=gr("animationiteration"),br=gr("animationstart"),xr=gr("transitionrun"),wr=gr("transitionstart"),kr=gr("transitioncancel"),Sr=gr("transitionend"),zr=new Map,Er="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(e,t){zr.set(e,t),rt(t,[e])}Er.push("scrollEnd");var jr="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},_r=[],Tr=0,Pr=0;function $r(){for(var e=Tr,t=Pr=Tr=0;t<e;){var n=_r[t];_r[t++]=null;var r=_r[t];_r[t++]=null;var a=_r[t];_r[t++]=null;var o=_r[t];if(_r[t++]=null,null!==r&&null!==a){var i=r.pending;null===i?a.next=a:(a.next=i.next,i.next=a),r.pending=a}0!==o&&Lr(n,a,o)}}function Nr(e,t,n,r){_r[Tr++]=e,_r[Tr++]=t,_r[Tr++]=n,_r[Tr++]=r,Pr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Or(e,t,n,r){return Nr(e,t,n,r),Ar(e)}function Rr(e,t){return Nr(e,null,null,t),Ar(e)}function Lr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(a=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,a&&null!==t&&(a=31-xe(n),null===(r=(e=o.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),o):null}function Ar(e){if(50<Vu)throw Vu=0,qu=null,Error(i(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Dr={};function Mr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fr(e,t,n,r){return new Mr(e,t,n,r)}function Ir(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Hr(e,t){var n=e.alternate;return null===n?((n=Fr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ur(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wr(e,t,n,r,a,o){var l=0;if(r=e,"function"===typeof e)Ir(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case j:return(e=Fr(31,n,t,a)).elementType=j,e.lanes=o,e;case y:return Br(n.children,a,o,t);case v:l=8,a|=24;break;case b:return(e=Fr(12,n,t,2|a)).elementType=b,e.lanes=o,e;case S:return(e=Fr(13,n,t,a)).elementType=S,e.lanes=o,e;case z:return(e=Fr(19,n,t,a)).elementType=z,e.lanes=o,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case w:l=10;break e;case x:l=9;break e;case k:l=11;break e;case E:l=14;break e;case C:l=16,r=null;break e}l=29,n=Error(i(130,null===e?"null":typeof e,"")),r=null}return(t=Fr(l,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Br(e,t,n,r){return(e=Fr(7,e,r,t)).lanes=n,e}function Vr(e,t,n){return(e=Fr(6,e,null,t)).lanes=n,e}function qr(e){var t=Fr(18,null,null,0);return t.stateNode=e,t}function Kr(e,t,n){return(t=Fr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Gr=new WeakMap;function Yr(e,t){if("object"===typeof e&&null!==e){var n=Gr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ne(t)},Gr.set(e,t),t)}return{value:e,source:t,stack:ne(t)}}var Qr=[],Xr=0,Jr=null,Zr=0,ea=[],ta=0,na=null,ra=1,aa="";function oa(e,t){Qr[Xr++]=Zr,Qr[Xr++]=Jr,Jr=e,Zr=t}function ia(e,t,n){ea[ta++]=ra,ea[ta++]=aa,ea[ta++]=na,na=e;var r=ra;e=aa;var a=32-xe(r)-1;r&=~(1<<a),n+=1;var o=32-xe(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,ra=1<<32-xe(t)+a|n<<a|r,aa=o+e}else ra=1<<o|n<<a|r,aa=e}function la(e){null!==e.return&&(oa(e,1),ia(e,1,0))}function sa(e){for(;e===Jr;)Jr=Qr[--Xr],Qr[Xr]=null,Zr=Qr[--Xr],Qr[Xr]=null;for(;e===na;)na=ea[--ta],ea[ta]=null,aa=ea[--ta],ea[ta]=null,ra=ea[--ta],ea[ta]=null}function ua(e,t){ea[ta++]=ra,ea[ta++]=aa,ea[ta++]=na,ra=t.id,aa=t.overflow,na=e}var ca=null,da=null,fa=!1,pa=null,ma=!1,ha=Error(i(519));function ga(e){throw ka(Yr(Error(i(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),ha}function ya(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[He]=e,t[Ue]=r,n){case"dialog":Xc("cancel",t),Xc("close",t);break;case"iframe":case"object":case"embed":Xc("load",t);break;case"video":case"audio":for(n=0;n<Gc.length;n++)Xc(Gc[n],t);break;case"source":Xc("error",t);break;case"img":case"image":case"link":Xc("error",t),Xc("load",t);break;case"details":Xc("toggle",t);break;case"input":Xc("invalid",t),bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Xc("invalid",t);break;case"textarea":Xc("invalid",t),St(t,r.value,r.defaultValue,r.children)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||cd(t.textContent,n)?(null!=r.popover&&(Xc("beforetoggle",t),Xc("toggle",t)),null!=r.onScroll&&Xc("scroll",t),null!=r.onScrollEnd&&Xc("scrollend",t),null!=r.onClick&&(t.onclick=Nt),t=!0):t=!1,t||ga(e,!0)}function va(e){for(ca=e.return;ca;)switch(ca.tag){case 5:case 31:case 13:return void(ma=!1);case 27:case 3:return void(ma=!0);default:ca=ca.return}}function ba(e){if(e!==ca)return!1;if(!fa)return va(e),fa=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||xd(e.type,e.memoizedProps)),t=!t),t&&da&&ga(e),va(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));da=Ad(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));da=Ad(e)}else 27===n?(n=da,jd(e.type)?(e=Ld,Ld=null,da=e):da=n):da=ca?Rd(e.stateNode.nextSibling):null;return!0}function xa(){da=ca=null,fa=!1}function wa(){var e=pa;return null!==e&&(null===$u?$u=e:$u.push.apply($u,e),pa=null),e}function ka(e){null===pa?pa=[e]:pa.push(e)}var Sa=F(null),za=null,Ea=null;function Ca(e,t,n){H(Sa,t._currentValue),t._currentValue=n}function ja(e){e._currentValue=Sa.current,I(Sa)}function _a(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ta(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var o=a.dependencies;if(null!==o){var l=a.child;o=o.firstContext;e:for(;null!==o;){var s=o;o=a;for(var u=0;u<t.length;u++)if(s.context===t[u]){o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),_a(o.return,n,e),r||(l=null);break e}o=s.next}}else if(18===a.tag){if(null===(l=a.return))throw Error(i(341));l.lanes|=n,null!==(o=l.alternate)&&(o.lanes|=n),_a(l,n,e),l=null}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===e){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}}function Pa(e,t,n,r){e=null;for(var a=t,o=!1;null!==a;){if(!o)if(0!==(524288&a.flags))o=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var l=a.alternate;if(null===l)throw Error(i(387));if(null!==(l=l.memoizedProps)){var s=a.type;Zn(a.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(a===K.current){if(null===(l=a.alternate))throw Error(i(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(ff):e=[ff])}a=a.return}null!==e&&Ta(t,e,n,r),t.flags|=262144}function $a(e){for(e=e.firstContext;null!==e;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Na(e){za=e,Ea=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Oa(e){return La(za,e)}function Ra(e,t){return null===za&&Na(e),La(e,t)}function La(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Ea){if(null===e)throw Error(i(308));Ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ea=Ea.next=t;return n}var Aa="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Da=r.unstable_scheduleCallback,Ma=r.unstable_NormalPriority,Fa={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ia(){return{controller:new Aa,data:new Map,refCount:0}}function Ha(e){e.refCount--,0===e.refCount&&Da(Ma,function(){e.controller.abort()})}var Ua=null,Wa=0,Ba=0,Va=null;function qa(){if(0===--Wa&&null!==Ua){null!==Va&&(Va.status="fulfilled");var e=Ua;Ua=null,Ba=0,Va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ka=R.S;R.S=function(e,t){Ru=se(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Ua){var n=Ua=[];Wa=0,Ba=Wc(),Va={status:"pending",value:void 0,then:function(e){n.push(e)}}}Wa++,t.then(qa,qa)}(0,t),null!==Ka&&Ka(e,t)};var Ga=F(null);function Ya(){var e=Ga.current;return null!==e?e:hu.pooledCache}function Qa(e,t){H(Ga,null===t?Ga.current:t.pool)}function Xa(){var e=Ya();return null===e?null:{parent:Fa._currentValue,pool:e}}var Ja=Error(i(460)),Za=Error(i(474)),eo=Error(i(542)),to={then:function(){}};function no(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ro(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Nt,Nt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw lo(e=t.reason),e;default:if("string"===typeof t.status)t.then(Nt,Nt);else{if(null!==(e=hu)&&100<e.shellSuspendCounter)throw Error(i(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw lo(e=t.reason),e}throw oo=t,Ja}}function ao(e){try{return(0,e._init)(e._payload)}catch(Vn){if(null!==Vn&&"object"===typeof Vn&&"function"===typeof Vn.then)throw oo=Vn,Ja;throw Vn}}var oo=null;function io(){if(null===oo)throw Error(i(459));var e=oo;return oo=null,e}function lo(e){if(e===Ja||e===eo)throw Error(i(483))}var so=null,uo=0;function co(e){var t=uo;return uo+=1,null===so&&(so=[]),ro(so,e,t)}function fo(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function po(e,t){if(t.$$typeof===m)throw Error(i(525));throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Hr(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Vr(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===y?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===C&&ao(o)===t.type)?(fo(t=a(t,n.props),n),t.return=e,t):(fo(t=Wr(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Kr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Br(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Vr(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case h:return fo(n=Wr(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case g:return(t=Kr(t,e.mode,n)).return=e,t;case C:return f(e,t=ao(t),n)}if(O(t)||P(t))return(t=Br(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return f(e,co(t),n);if(t.$$typeof===w)return f(e,Ra(e,t),n);po(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===a?u(e,t,n,r):null;case g:return n.key===a?c(e,t,n,r):null;case C:return p(e,t,n=ao(n),r)}if(O(n)||P(n))return null!==a?null:d(e,t,n,r,null);if("function"===typeof n.then)return p(e,t,co(n),r);if(n.$$typeof===w)return p(e,t,Ra(e,n),r);po(e,n)}return null}function m(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case h:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case g:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case C:return m(e,t,n,r=ao(r),a)}if(O(r)||P(r))return d(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return m(e,t,n,co(r),a);if(r.$$typeof===w)return m(e,t,n,Ra(t,r),a);po(t,r)}return null}function v(s,u,c,d){if("object"===typeof c&&null!==c&&c.type===y&&null===c.key&&(c=c.props.children),"object"===typeof c&&null!==c){switch(c.$$typeof){case h:e:{for(var b=c.key;null!==u;){if(u.key===b){if((b=c.type)===y){if(7===u.tag){n(s,u.sibling),(d=a(u,c.props.children)).return=s,s=d;break e}}else if(u.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===C&&ao(b)===u.type){n(s,u.sibling),fo(d=a(u,c.props),c),d.return=s,s=d;break e}n(s,u);break}t(s,u),u=u.sibling}c.type===y?((d=Br(c.props.children,s.mode,d,c.key)).return=s,s=d):(fo(d=Wr(c.type,c.key,c.props,null,s.mode,d),c),d.return=s,s=d)}return l(s);case g:e:{for(b=c.key;null!==u;){if(u.key===b){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(s,u.sibling),(d=a(u,c.children||[])).return=s,s=d;break e}n(s,u);break}t(s,u),u=u.sibling}(d=Kr(c,s.mode,d)).return=s,s=d}return l(s);case C:return v(s,u,c=ao(c),d)}if(O(c))return function(a,i,l,s){for(var u=null,c=null,d=i,h=i=0,g=null;null!==d&&h<l.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var y=p(a,d,l[h],s);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(a,d),i=o(y,i,h),null===c?u=y:c.sibling=y,c=y,d=g}if(h===l.length)return n(a,d),fa&&oa(a,h),u;if(null===d){for(;h<l.length;h++)null!==(d=f(a,l[h],s))&&(i=o(d,i,h),null===c?u=d:c.sibling=d,c=d);return fa&&oa(a,h),u}for(d=r(d);h<l.length;h++)null!==(g=m(d,a,h,l[h],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?h:g.key),i=o(g,i,h),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(a,e)}),fa&&oa(a,h),u}(s,u,c,d);if(P(c)){if("function"!==typeof(b=P(c)))throw Error(i(150));return function(a,l,s,u){if(null==s)throw Error(i(151));for(var c=null,d=null,h=l,g=l=0,y=null,v=s.next();null!==h&&!v.done;g++,v=s.next()){h.index>g?(y=h,h=null):y=h.sibling;var b=p(a,h,v.value,u);if(null===b){null===h&&(h=y);break}e&&h&&null===b.alternate&&t(a,h),l=o(b,l,g),null===d?c=b:d.sibling=b,d=b,h=y}if(v.done)return n(a,h),fa&&oa(a,g),c;if(null===h){for(;!v.done;g++,v=s.next())null!==(v=f(a,v.value,u))&&(l=o(v,l,g),null===d?c=v:d.sibling=v,d=v);return fa&&oa(a,g),c}for(h=r(h);!v.done;g++,v=s.next())null!==(v=m(h,a,g,v.value,u))&&(e&&null!==v.alternate&&h.delete(null===v.key?g:v.key),l=o(v,l,g),null===d?c=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),fa&&oa(a,g),c}(s,u,c=b.call(c),d)}if("function"===typeof c.then)return v(s,u,co(c),d);if(c.$$typeof===w)return v(s,u,Ra(s,c),d);po(s,c)}return"string"===typeof c&&""!==c||"number"===typeof c||"bigint"===typeof c?(c=""+c,null!==u&&6===u.tag?(n(s,u.sibling),(d=a(u,c)).return=s,s=d):(n(s,u),(d=Vr(c,s.mode,d)).return=s,s=d),l(s)):n(s,u)}return function(e,t,n,r){try{uo=0;var a=v(e,t,n,r);return so=null,a}catch(Vn){if(Vn===Ja||Vn===eo)throw Vn;var o=Fr(29,Vn,null,e.mode);return o.lanes=r,o.return=e,o}}}var ho=mo(!0),go=mo(!1),yo=!1;function vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&mu)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Ar(e),Lr(e,null,n),t}return Nr(e,r,t,n),Ar(e)}function ko(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}function So(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var zo=!1;function Eo(){if(zo){if(null!==Va)throw Va}}function Co(e,t,n,r){zo=!1;var a=e.updateQueue;yo=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,c=u=s=null,l=o;;){var f=-536870913&l.lane,m=f!==l.lane;if(m?(yu&f)===f:(r&f)===f){0!==f&&f===Ba&&(zo=!0),null!==c&&(c=c.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,g=l;f=t;var y=n;switch(g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(y,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=g.payload)?h.call(y,d,f):h)||void 0===f)break e;d=p({},d,f);break e;case 2:yo=!0}}null!==(f=l.callback)&&(e.flags|=64,m&&(e.flags|=8192),null===(m=a.callbacks)?a.callbacks=[f]:m.push(f))}else m={lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=m,s=d):c=c.next=m,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(m=l).next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null===o&&(a.shared.lanes=0),Eu|=i,e.lanes=i,e.memoizedState=d}}function jo(e,t){if("function"!==typeof e)throw Error(i(191,e));e.call(t)}function _o(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)jo(n[e],t)}var To=F(null),Po=F(0);function $o(e,t){H(Po,e=Su),H(To,t),Su=e|t.baseLanes}function No(){H(Po,Su),H(To,To.current)}function Oo(){Su=Po.current,I(To),I(Po)}var Ro=F(null),Lo=null;function Ao(e){var t=e.alternate;H(Ho,1&Ho.current),H(Ro,e),null===Lo&&(null===t||null!==To.current||null!==t.memoizedState)&&(Lo=e)}function Do(e){H(Ho,Ho.current),H(Ro,e),null===Lo&&(Lo=e)}function Mo(e){22===e.tag?(H(Ho,Ho.current),H(Ro,e),null===Lo&&(Lo=e)):Fo()}function Fo(){H(Ho,Ho.current),H(Ro,Ro.current)}function Io(e){I(Ro),Lo===e&&(Lo=null),I(Ho)}var Ho=F(0);function Uo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Nd(n)||Od(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child;continue}}else if(0!==(128&t.flags))return t;if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wo=0,Bo=null,Vo=null,qo=null,Ko=!1,Go=!1,Yo=!1,Qo=0,Xo=0,Jo=null,Zo=0;function ei(){throw Error(i(321))}function ti(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Zn(e[n],t[n]))return!1;return!0}function ni(e,t,n,r,a,o){return Wo=o,Bo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=null===e||null===e.memoizedState?yl:vl,Yo=!1,o=n(r,a),Yo=!1,Go&&(o=ai(t,n,r,a)),ri(e),o}function ri(e){R.H=gl;var t=null!==Vo&&null!==Vo.next;if(Wo=0,qo=Vo=Bo=null,Ko=!1,Xo=0,Jo=null,t)throw Error(i(300));null===e||Rl||null!==(e=e.dependencies)&&$a(e)&&(Rl=!0)}function ai(e,t,n,r){Bo=e;var a=0;do{if(Go&&(Jo=null),Xo=0,Go=!1,25<=a)throw Error(i(301));if(a+=1,qo=Vo=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}R.H=bl,o=t(n,r)}while(Go);return o}function oi(){var e=R.H,t=e.useState()[0];return t="function"===typeof t.then?di(t):t,e=e.useState()[0],(null!==Vo?Vo.memoizedState:null)!==e&&(Bo.flags|=1024),t}function ii(){var e=0!==Qo;return Qo=0,e}function li(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function si(e){if(Ko){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Ko=!1}Wo=0,qo=Vo=Bo=null,Go=!1,Xo=Qo=0,Jo=null}function ui(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===qo?Bo.memoizedState=qo=e:qo=qo.next=e,qo}function ci(){if(null===Vo){var e=Bo.alternate;e=null!==e?e.memoizedState:null}else e=Vo.next;var t=null===qo?Bo.memoizedState:qo.next;if(null!==t)qo=t,Vo=e;else{if(null===e){if(null===Bo.alternate)throw Error(i(467));throw Error(i(310))}e={memoizedState:(Vo=e).memoizedState,baseState:Vo.baseState,baseQueue:Vo.baseQueue,queue:Vo.queue,next:null},null===qo?Bo.memoizedState=qo=e:qo=qo.next=e}return qo}function di(e){var t=Xo;return Xo+=1,null===Jo&&(Jo=[]),e=ro(Jo,e,t),t=Bo,null===(null===qo?t.memoizedState:qo.next)&&(t=t.alternate,R.H=null===t||null===t.memoizedState?yl:vl),e}function fi(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return di(e);if(e.$$typeof===w)return Oa(e)}throw Error(i(438,String(e)))}function pi(e){var t=null,n=Bo.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Bo.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=_;return t.index++,n}function mi(e,t){return"function"===typeof t?t(e):t}function hi(e){return gi(ci(),Vo,e)}function gi(e,t,n){var r=e.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,null===a)e.memoizedState=o;else{var s=l=null,u=null,c=t=a.next,d=!1;do{var f=-536870913&c.lane;if(f!==c.lane?(yu&f)===f:(Wo&f)===f){var p=c.revertLane;if(0===p)null!==u&&(u=u.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Ba&&(d=!0);else{if((Wo&p)===p){c=c.next,p===Ba&&(d=!0);continue}f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=f,l=o):u=u.next=f,Bo.lanes|=p,Eu|=p}f=c.action,Yo&&n(o,f),o=c.hasEagerState?c.eagerState:n(o,f)}else p={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=p,l=o):u=u.next=p,Bo.lanes|=f,Eu|=f;c=c.next}while(null!==c&&c!==t);if(null===u?l=o:u.next=s,!Zn(o,e.memoizedState)&&(Rl=!0,d&&null!==(n=Va)))throw n;e.memoizedState=o,e.baseState=l,e.baseQueue=u,r.lastRenderedState=o}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function yi(e){var t=ci(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);Zn(o,t.memoizedState)||(Rl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function vi(e,t,n){var r=Bo,a=ci(),o=fa;if(o){if(void 0===n)throw Error(i(407));n=n()}else n=t();var l=!Zn((Vo||a).memoizedState,n);if(l&&(a.memoizedState=n,Rl=!0),a=a.queue,Wi(wi.bind(null,r,a,e),[e]),a.getSnapshot!==t||l||null!==qo&&1&qo.memoizedState.tag){if(r.flags|=2048,Mi(9,{destroy:void 0},xi.bind(null,r,a,n,t),null),null===hu)throw Error(i(349));o||0!==(127&Wo)||bi(r,t,n)}return n}function bi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Bo.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function xi(e,t,n,r){t.value=n,t.getSnapshot=r,ki(t)&&Si(e)}function wi(e,t,n){return n(function(){ki(t)&&Si(e)})}function ki(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zn(e,n)}catch(r){return!0}}function Si(e){var t=Rr(e,2);null!==t&&Yu(t,e,2)}function zi(e){var t=ui();if("function"===typeof e){var n=e;if(e=n(),Yo){be(!0);try{n()}finally{be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:e},t}function Ei(e,t,n,r){return e.baseState=n,gi(e,Vo,"function"===typeof r?r:mi)}function Ci(e,t,n,r,a){if(pl(e))throw Error(i(485));if(null!==(e=t.action)){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==R.T?n(!0):o.isTransition=!1,r(o),null===(n=t.pending)?(o.next=t.pending=o,ji(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ji(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var o=R.T,i={};R.T=i;try{var l=n(a,r),s=R.S;null!==s&&s(i,l),_i(e,t,l)}catch(u){Pi(e,t,u)}finally{null!==o&&null!==i.types&&(o.types=i.types),R.T=o}}else try{_i(e,t,o=n(a,r))}catch(c){Pi(e,t,c)}}function _i(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){Ti(e,t,n)},function(n){return Pi(e,t,n)}):Ti(e,t,n)}function Ti(e,t,n){t.status="fulfilled",t.value=n,$i(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,ji(e,n)))}function Pi(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,$i(t),t=t.next}while(t!==r)}e.action=null}function $i(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ni(e,t){return t}function Oi(e,t){if(fa){var n=hu.formState;if(null!==n){e:{var r=Bo;if(fa){if(da){t:{for(var a=da,o=ma;8!==a.nodeType;){if(!o){a=null;break t}if(null===(a=Rd(a.nextSibling))){a=null;break t}}a="F!"===(o=a.data)||"F"===o?a:null}if(a){da=Rd(a.nextSibling),r="F!"===a.data;break e}}ga(r)}r=!1}r&&(t=n[0])}}return(n=ui()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:t},n.queue=r,n=cl.bind(null,Bo,r),r.dispatch=n,r=zi(!1),o=fl.bind(null,Bo,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=ui()).queue=a,n=Ci.bind(null,Bo,a,o,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ri(e){return Li(ci(),Vo,e)}function Li(e,t,n){if(t=gi(e,t,Ni)[0],e=hi(mi)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=di(t)}catch(Vn){if(Vn===Ja)throw eo;throw Vn}else r=t;var a=(t=ci()).queue,o=a.dispatch;return n!==t.memoizedState&&(Bo.flags|=2048,Mi(9,{destroy:void 0},Ai.bind(null,a,n),null)),[r,o,e]}function Ai(e,t){e.action=t}function Di(e){var t=ci(),n=Vo;if(null!==n)return Li(t,n,e);ci(),t=t.memoizedState;var r=(n=ci()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Mi(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=Bo.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Fi(){return ci().memoizedState}function Ii(e,t,n,r){var a=ui();Bo.flags|=e,a.memoizedState=Mi(1|t,{destroy:void 0},n,void 0===r?null:r)}function Hi(e,t,n,r){var a=ci();r=void 0===r?null:r;var o=a.memoizedState.inst;null!==Vo&&null!==r&&ti(r,Vo.memoizedState.deps)?a.memoizedState=Mi(t,o,n,r):(Bo.flags|=e,a.memoizedState=Mi(1|t,o,n,r))}function Ui(e,t){Ii(8390656,8,e,t)}function Wi(e,t){Hi(2048,8,e,t)}function Bi(e){var t=ci().memoizedState;return function(e){Bo.flags|=4;var t=Bo.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&mu))throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Vi(e,t){return Hi(4,2,e,t)}function qi(e,t){return Hi(4,4,e,t)}function Ki(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Gi(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Hi(4,4,Ki.bind(null,t,e),n)}function Yi(){}function Qi(e,t){var n=ci();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&ti(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xi(e,t){var n=ci();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&ti(t,r[1]))return r[0];if(r=e(),Yo){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r}function Ji(e,t,n){return void 0===n||0!==(1073741824&Wo)&&0===(261930&yu)?e.memoizedState=t:(e.memoizedState=n,e=Gu(),Bo.lanes|=e,Eu|=e,n)}function Zi(e,t,n,r){return Zn(n,t)?n:null!==To.current?(e=Ji(e,n,r),Zn(e,t)||(Rl=!0),e):0===(42&Wo)||0!==(1073741824&Wo)&&0===(261930&yu)?(Rl=!0,e.memoizedState=n):(e=Gu(),Bo.lanes|=e,Eu|=e,t)}function el(e,t,n,r,a){var o=L.p;L.p=0!==o&&8>o?o:8;var i=R.T,l={};R.T=l,fl(e,!1,t,n);try{var s=a(),u=R.S;if(null!==u&&u(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)dl(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(s,r),Ku());else dl(e,t,r,Ku())}catch(c){dl(e,t,{then:function(){},status:"rejected",reason:c},Ku())}finally{L.p=o,null!==i&&null!==l.types&&(i.types=l.types),R.T=i}}function tl(){}function nl(e,t,n,r){if(5!==e.tag)throw Error(i(476));var a=rl(e).queue;el(e,a,t,A,null===n?tl:function(){return al(e),n(r)})}function rl(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:A,baseState:A,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:A},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function al(e){var t=rl(e);null===t.next&&(t=e.alternate.memoizedState),dl(e,t.next.queue,{},Ku())}function ol(){return Oa(ff)}function il(){return ci().memoizedState}function ll(){return ci().memoizedState}function sl(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Ku(),r=wo(t,e=xo(n),n);return null!==r&&(Yu(r,t,n),ko(r,t,n)),t={cache:Ia()},void(e.payload=t)}t=t.return}}function ul(e,t,n){var r=Ku();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},pl(e)?ml(t,n):null!==(n=Or(e,t,n,r))&&(Yu(n,e,r),hl(n,t,r))}function cl(e,t,n){dl(e,t,n,Ku())}function dl(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(pl(e))ml(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,Zn(l,i))return Nr(e,t,a,0),null===hu&&$r(),!1}catch(s){}if(null!==(n=Or(e,t,a,r)))return Yu(n,e,r),hl(n,t,r),!0}return!1}function fl(e,t,n,r){if(r={lane:2,revertLane:Wc(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},pl(e)){if(t)throw Error(i(479))}else null!==(t=Or(e,n,r,2))&&Yu(t,e,2)}function pl(e){var t=e.alternate;return e===Bo||null!==t&&t===Bo}function ml(e,t){Go=Ko=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hl(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}var gl={readContext:Oa,use:fi,useCallback:ei,useContext:ei,useEffect:ei,useImperativeHandle:ei,useLayoutEffect:ei,useInsertionEffect:ei,useMemo:ei,useReducer:ei,useRef:ei,useState:ei,useDebugValue:ei,useDeferredValue:ei,useTransition:ei,useSyncExternalStore:ei,useId:ei,useHostTransitionStatus:ei,useFormState:ei,useActionState:ei,useOptimistic:ei,useMemoCache:ei,useCacheRefresh:ei};gl.useEffectEvent=ei;var yl={readContext:Oa,use:fi,useCallback:function(e,t){return ui().memoizedState=[e,void 0===t?null:t],e},useContext:Oa,useEffect:Ui,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Ii(4194308,4,Ki.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ii(4194308,4,e,t)},useInsertionEffect:function(e,t){Ii(4,2,e,t)},useMemo:function(e,t){var n=ui();t=void 0===t?null:t;var r=e();if(Yo){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ui();if(void 0!==n){var a=n(t);if(Yo){be(!0);try{n(t)}finally{be(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=ul.bind(null,Bo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ui().memoizedState=e},useState:function(e){var t=(e=zi(e)).queue,n=cl.bind(null,Bo,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Yi,useDeferredValue:function(e,t){return Ji(ui(),e,t)},useTransition:function(){var e=zi(!1);return e=el.bind(null,Bo,e.queue,!0,!1),ui().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Bo,a=ui();if(fa){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===hu)throw Error(i(349));0!==(127&yu)||bi(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ui(wi.bind(null,r,o,e),[e]),r.flags|=2048,Mi(9,{destroy:void 0},xi.bind(null,r,o,n,t),null),n},useId:function(){var e=ui(),t=hu.identifierPrefix;if(fa){var n=aa;t="_"+t+"R_"+(n=(ra&~(1<<32-xe(ra)-1)).toString(32)+n),0<(n=Qo++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Zo++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ol,useFormState:Oi,useActionState:Oi,useOptimistic:function(e){var t=ui();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=fl.bind(null,Bo,!0,n),n.dispatch=t,[e,t]},useMemoCache:pi,useCacheRefresh:function(){return ui().memoizedState=sl.bind(null,Bo)},useEffectEvent:function(e){var t=ui(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&mu))throw Error(i(440));return n.impl.apply(void 0,arguments)}}},vl={readContext:Oa,use:fi,useCallback:Qi,useContext:Oa,useEffect:Wi,useImperativeHandle:Gi,useInsertionEffect:Vi,useLayoutEffect:qi,useMemo:Xi,useReducer:hi,useRef:Fi,useState:function(){return hi(mi)},useDebugValue:Yi,useDeferredValue:function(e,t){return Zi(ci(),Vo.memoizedState,e,t)},useTransition:function(){var e=hi(mi)[0],t=ci().memoizedState;return["boolean"===typeof e?e:di(e),t]},useSyncExternalStore:vi,useId:il,useHostTransitionStatus:ol,useFormState:Ri,useActionState:Ri,useOptimistic:function(e,t){return Ei(ci(),0,e,t)},useMemoCache:pi,useCacheRefresh:ll};vl.useEffectEvent=Bi;var bl={readContext:Oa,use:fi,useCallback:Qi,useContext:Oa,useEffect:Wi,useImperativeHandle:Gi,useInsertionEffect:Vi,useLayoutEffect:qi,useMemo:Xi,useReducer:yi,useRef:Fi,useState:function(){return yi(mi)},useDebugValue:Yi,useDeferredValue:function(e,t){var n=ci();return null===Vo?Ji(n,e,t):Zi(n,Vo.memoizedState,e,t)},useTransition:function(){var e=yi(mi)[0],t=ci().memoizedState;return["boolean"===typeof e?e:di(e),t]},useSyncExternalStore:vi,useId:il,useHostTransitionStatus:ol,useFormState:Di,useActionState:Di,useOptimistic:function(e,t){var n=ci();return null!==Vo?Ei(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:pi,useCacheRefresh:ll};function xl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}bl.useEffectEvent=Bi;var wl={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ku(),a=xo(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=wo(e,a,r))&&(Yu(t,e,r),ko(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ku(),a=xo(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=wo(e,a,r))&&(Yu(t,e,r),ko(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ku(),r=xo(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=wo(e,r,n))&&(Yu(t,e,n),ko(t,e,n))}};function kl(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!er(n,r)||!er(a,o))}function Sl(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wl.enqueueReplaceState(t,t.state,null)}function zl(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=p({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}function El(e){jr(e)}function Cl(e){console.error(e)}function jl(e){jr(e)}function _l(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Tl(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Pl(e,t,n){return(n=xo(n)).tag=3,n.payload={element:null},n.callback=function(){_l(e,t)},n}function $l(e){return(e=xo(e)).tag=3,e}function Nl(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var o=r.value;e.payload=function(){return a(o)},e.callback=function(){Tl(t,n,r)}}var i=n.stateNode;null!==i&&"function"===typeof i.componentDidCatch&&(e.callback=function(){Tl(t,n,r),"function"!==typeof a&&(null===Du?Du=new Set([this]):Du.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Ol=Error(i(461)),Rl=!1;function Ll(e,t,n,r){t.child=null===e?go(t,null,n,r):ho(t,e.child,n,r)}function Al(e,t,n,r,a){n=n.render;var o=t.ref;if("ref"in r){var i={};for(var l in r)"ref"!==l&&(i[l]=r[l])}else i=r;return Na(t),r=ni(e,t,n,i,o,a),l=ii(),null===e||Rl?(fa&&l&&la(t),t.flags|=1,Ll(e,t,r,a),t.child):(li(e,t,a),os(e,t,a))}function Dl(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Ir(o)||void 0!==o.defaultProps||null!==n.compare?((e=Wr(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Ml(e,t,o,r,a))}if(o=e.child,!is(e,a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:er)(i,r)&&e.ref===t.ref)return os(e,t,a)}return t.flags|=1,(e=Hr(o,r)).ref=t.ref,e.return=t,t.child=e}function Ml(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(er(o,r)&&e.ref===t.ref){if(Rl=!1,t.pendingProps=r=o,!is(e,a))return t.lanes=e.lanes,os(e,t,a);0!==(131072&e.flags)&&(Rl=!0)}}return Vl(e,t,n,r,a)}function Fl(e,t,n,r){var a=r.children,o=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(0!==(128&t.flags)){if(o=null!==o?o.baseLanes|n:n,null!==e){for(r=t.child=e.child,a=0;null!==r;)a=a|r.lanes|r.childLanes,r=r.sibling;r=a&~o}else r=0,t.child=null;return Hl(e,t,o,n,r)}if(0===(536870912&n))return r=t.lanes=536870912,Hl(e,t,null!==o?o.baseLanes|n:n,n,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Qa(0,null!==o?o.cachePool:null),null!==o?$o(t,o):No(),Mo(t)}else null!==o?(Qa(0,o.cachePool),$o(t,o),Fo(),t.memoizedState=null):(null!==e&&Qa(0,null),No(),Fo());return Ll(e,t,a,n),t.child}function Il(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Hl(e,t,n,r,a){var o=Ya();return o=null===o?null:{parent:Fa._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&Qa(0,null),No(),Mo(t),null!==e&&Pa(e,t,r,!0),t.childLanes=a,null}function Ul(e,t){return(t=es({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function Wl(e,t,n){return ho(t,e.child,null,n),(e=Ul(t,t.pendingProps)).flags|=2,Io(t),t.memoizedState=null,e}function Bl(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(i(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Vl(e,t,n,r,a){return Na(t),n=ni(e,t,n,r,void 0,a),r=ii(),null===e||Rl?(fa&&r&&la(t),t.flags|=1,Ll(e,t,n,a),t.child):(li(e,t,a),os(e,t,a))}function ql(e,t,n,r,a,o){return Na(t),t.updateQueue=null,n=ai(t,r,n,a),ri(e),r=ii(),null===e||Rl?(fa&&r&&la(t),t.flags|=1,Ll(e,t,n,o),t.child):(li(e,t,o),os(e,t,o))}function Kl(e,t,n,r,a){if(Na(t),null===t.stateNode){var o=Dr,i=n.contextType;"object"===typeof i&&null!==i&&(o=Oa(i)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=wl,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},vo(t),i=n.contextType,o.context="object"===typeof i&&null!==i?Oa(i):Dr,o.state=t.memoizedState,"function"===typeof(i=n.getDerivedStateFromProps)&&(xl(t,n,i,r),o.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(i=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),i!==o.state&&wl.enqueueReplaceState(o,o.state,null),Co(t,r,o,a),Eo(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode;var l=t.memoizedProps,s=zl(n,l);o.props=s;var u=o.context,c=n.contextType;i=Dr,"object"===typeof c&&null!==c&&(i=Oa(c));var d=n.getDerivedStateFromProps;c="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate,l=t.pendingProps!==l,c||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l||u!==i)&&Sl(t,o,r,i),yo=!1;var f=t.memoizedState;o.state=f,Co(t,r,o,a),Eo(),u=t.memoizedState,l||f!==u||yo?("function"===typeof d&&(xl(t,n,d,r),u=t.memoizedState),(s=yo||kl(t,n,s,r,f,u,i))?(c||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=i,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,bo(e,t),c=zl(n,i=t.memoizedProps),o.props=c,d=t.pendingProps,f=o.context,u=n.contextType,s=Dr,"object"===typeof u&&null!==u&&(s=Oa(u)),(u="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i!==d||f!==s)&&Sl(t,o,r,s),yo=!1,f=t.memoizedState,o.state=f,Co(t,r,o,a),Eo();var p=t.memoizedState;i!==d||f!==p||yo||null!==e&&null!==e.dependencies&&$a(e.dependencies)?("function"===typeof l&&(xl(t,n,l,r),p=t.memoizedState),(c=yo||kl(t,n,c,r,f,p,s)||null!==e&&null!==e.dependencies&&$a(e.dependencies))?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=s,r=c):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,Bl(e,t),r=0!==(128&t.flags),o||r?(o=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=ho(t,e.child,null,a),t.child=ho(t,null,n,a)):Ll(e,t,n,a),t.memoizedState=o.state,e=t.child):e=os(e,t,a),e}function Gl(e,t,n,r){return xa(),t.flags|=256,Ll(e,t,n,r),t.child}var Yl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ql(e){return{baseLanes:e,cachePool:Xa()}}function Xl(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=_u),e}function Jl(e,t,n){var r,a=t.pendingProps,o=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&Ho.current)),r&&(o=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(fa){if(o?Ao(t):Fo(),(e=da)?null!==(e=null!==(e=$d(e,ma))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==na?{id:ra,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},(n=qr(e)).return=t,t.child=n,ca=t,da=null):e=null,null===e)throw ga(t);return Od(e)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,o?(Fo(),s=es({mode:"hidden",children:s},o=t.mode),a=Br(a,o,n,null),s.return=t,a.return=t,s.sibling=a,t.child=s,(a=t.child).memoizedState=Ql(n),a.childLanes=Xl(e,r,n),t.memoizedState=Yl,Il(null,a)):(Ao(t),Zl(t,s))}var u=e.memoizedState;if(null!==u&&null!==(s=u.dehydrated)){if(l)256&t.flags?(Ao(t),t.flags&=-257,t=ts(e,t,n)):null!==t.memoizedState?(Fo(),t.child=e.child,t.flags|=128,t=null):(Fo(),s=a.fallback,o=t.mode,a=es({mode:"visible",children:a.children},o),(s=Br(s,o,n,null)).flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,ho(t,e.child,null,n),(a=t.child).memoizedState=Ql(n),a.childLanes=Xl(e,r,n),t.memoizedState=Yl,t=Il(null,a));else if(Ao(t),Od(s)){if(r=s.nextSibling&&s.nextSibling.dataset)var c=r.dgst;r=c,(a=Error(i(419))).stack="",a.digest=r,ka({value:a,source:null,stack:null}),t=ts(e,t,n)}else if(Rl||Pa(e,t,n,!1),r=0!==(n&e.childLanes),Rl||r){if(null!==(r=hu)&&(0!==(a=Le(r,n))&&a!==u.retryLane))throw u.retryLane=a,Rr(e,a),Yu(r,e,a),Ol;Nd(s)||lc(),t=ts(e,t,n)}else Nd(s)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,da=Rd(s.nextSibling),ca=t,fa=!0,pa=null,ma=!1,null!==e&&ua(t,e),(t=Zl(t,a.children)).flags|=4096);return t}return o?(Fo(),s=a.fallback,o=t.mode,c=(u=e.child).sibling,(a=Hr(u,{mode:"hidden",children:a.children})).subtreeFlags=65011712&u.subtreeFlags,null!==c?s=Hr(c,s):(s=Br(s,o,n,null)).flags|=2,s.return=t,a.return=t,a.sibling=s,t.child=a,Il(null,a),a=t.child,null===(s=e.child.memoizedState)?s=Ql(n):(null!==(o=s.cachePool)?(u=Fa._currentValue,o=o.parent!==u?{parent:u,pool:u}:o):o=Xa(),s={baseLanes:s.baseLanes|n,cachePool:o}),a.memoizedState=s,a.childLanes=Xl(e,r,n),t.memoizedState=Yl,Il(e.child,a)):(Ao(t),e=(n=e.child).sibling,(n=Hr(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Zl(e,t){return(t=es({mode:"visible",children:t},e.mode)).return=e,e.child=t}function es(e,t){return(e=Fr(22,e,null,t)).lanes=0,e}function ts(e,t,n){return ho(t,e.child,null,n),(e=Zl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ns(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),_a(e.return,t,n)}function rs(e,t,n,r,a,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a,i.treeForkCount=o)}function as(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;r=r.children;var i=Ho.current,l=0!==(2&i);if(l?(i=1&i|2,t.flags|=128):i&=1,H(Ho,i),Ll(e,t,r,n),r=fa?Zr:0,!l&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ns(e,n,t);else if(19===e.tag)ns(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===Uo(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),rs(t,!1,a,n,o,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Uo(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}rs(t,!0,n,null,o,r);break;case"together":rs(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function os(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Eu|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Pa(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Hr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Hr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function is(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!$a(e))}function ls(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Rl=!0;else{if(!is(e,n)&&0===(128&t.flags))return Rl=!1,function(e,t,n){switch(t.tag){case 3:G(t,t.stateNode.containerInfo),Ca(0,Fa,e.memoizedState.cache),xa();break;case 27:case 5:Q(t);break;case 4:G(t,t.stateNode.containerInfo);break;case 10:Ca(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,Do(t),null;break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Ao(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Jl(e,t,n):(Ao(t),null!==(e=os(e,t,n))?e.sibling:null);Ao(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Pa(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return as(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),H(Ho,Ho.current),r)break;return null;case 22:return t.lanes=0,Fl(e,t,n,t.pendingProps);case 24:Ca(0,Fa,e.memoizedState.cache)}return os(e,t,n)}(e,t,n);Rl=0!==(131072&e.flags)}else Rl=!1,fa&&0!==(1048576&t.flags)&&ia(t,Zr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=ao(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var a=e.$$typeof;if(a===k){t.tag=11,t=Al(null,t,e,r,n);break e}if(a===E){t.tag=14,t=Dl(null,t,e,r,n);break e}}throw t=N(e)||e,Error(i(306,t,""))}Ir(e)?(r=zl(e,r),t.tag=1,t=Kl(null,t,e,r,n)):(t.tag=0,t=Vl(null,t,e,r,n))}return t;case 0:return Vl(e,t,t.type,t.pendingProps,n);case 1:return Kl(e,t,r=t.type,a=zl(r,t.pendingProps),n);case 3:e:{if(G(t,t.stateNode.containerInfo),null===e)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,bo(e,t),Co(t,r,null,n);var l=t.memoizedState;if(r=l.cache,Ca(0,Fa,r),r!==o.cache&&Ta(t,[Fa],n,!0),Eo(),r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Gl(e,t,r,n);break e}if(r!==a){ka(a=Yr(Error(i(424)),t)),t=Gl(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(da=Rd(e.firstChild),ca=t,fa=!0,pa=null,ma=!0,n=go(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(xa(),r===a){t=os(e,t,n);break e}Ll(e,t,r,n)}t=t.child}return t;case 26:return Bl(e,t),null===e?(n=qd(t.type,null,t.pendingProps,null))?t.memoizedState=n:fa||(n=t.type,e=t.pendingProps,(r=yd(q.current).createElement(n))[He]=t,r[Ue]=e,pd(r,n,e),et(r),t.stateNode=r):t.memoizedState=qd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Q(t),null===e&&fa&&(r=t.stateNode=Md(t.type,t.pendingProps,q.current),ca=t,ma=!0,a=da,jd(t.type)?(Ld=a,da=Rd(r.firstChild)):da=a),Ll(e,t,t.pendingProps.children,n),Bl(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&fa&&((a=r=da)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ge])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===o)return e}if(null===(e=Rd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,ma))?(t.stateNode=r,ca=t,da=Rd(r.firstChild),ma=!1,a=!0):a=!1),a||ga(t)),Q(t),a=t.type,o=t.pendingProps,l=null!==e?e.memoizedProps:null,r=o.children,xd(a,o)?r=null:null!==l&&xd(a,l)&&(t.flags|=32),null!==t.memoizedState&&(a=ni(e,t,oi,null,null,n),ff._currentValue=a),Bl(e,t),Ll(e,t,r,n),t.child;case 6:return null===e&&fa&&((e=n=da)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=Rd(e.nextSibling)))return null}return e}(n,t.pendingProps,ma))?(t.stateNode=n,ca=t,da=null,e=!0):e=!1),e||ga(t)),null;case 13:return Jl(e,t,n);case 4:return G(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ho(t,null,r,n):Ll(e,t,r,n),t.child;case 11:return Al(e,t,t.type,t.pendingProps,n);case 7:return Ll(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ll(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ca(0,t.type,r.value),Ll(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Na(t),r=r(a=Oa(a)),t.flags|=1,Ll(e,t,r,n),t.child;case 14:return Dl(e,t,t.type,t.pendingProps,n);case 15:return Ml(e,t,t.type,t.pendingProps,n);case 19:return as(e,t,n);case 31:return function(e,t,n){var r=t.pendingProps,a=0!==(128&t.flags);if(t.flags&=-129,null===e){if(fa){if("hidden"===r.mode)return e=Ul(t,r),t.lanes=536870912,Il(null,e);if(Do(t),(e=da)?null!==(e=null!==(e=$d(e,ma))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==na?{id:ra,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},(n=qr(e)).return=t,t.child=n,ca=t,da=null):e=null,null===e)throw ga(t);return t.lanes=536870912,null}return Ul(t,r)}var o=e.memoizedState;if(null!==o){var l=o.dehydrated;if(Do(t),a)if(256&t.flags)t.flags&=-257,t=Wl(e,t,n);else{if(null===t.memoizedState)throw Error(i(558));t.child=e.child,t.flags|=128,t=null}else if(Rl||Pa(e,t,n,!1),a=0!==(n&e.childLanes),Rl||a){if(null!==(r=hu)&&0!==(l=Le(r,n))&&l!==o.retryLane)throw o.retryLane=l,Rr(e,l),Yu(r,e,l),Ol;lc(),t=Wl(e,t,n)}else e=o.treeContext,da=Rd(l.nextSibling),ca=t,fa=!0,pa=null,ma=!1,null!==e&&ua(t,e),(t=Ul(t,r)).flags|=4096;return t}return(e=Hr(e.child,{mode:r.mode,children:r.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return Fl(e,t,n,t.pendingProps);case 24:return Na(t),r=Oa(Fa),null===e?(null===(a=Ya())&&(a=hu,o=Ia(),a.pooledCache=o,o.refCount++,null!==o&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},vo(t),Ca(0,Fa,a)):(0!==(e.lanes&n)&&(bo(e,t),Co(t,null,null,n),Eo()),a=e.memoizedState,o=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),Ca(0,Fa,r)):(r=o.cache,Ca(0,Fa,r),r!==a.cache&&Ta(t,[Fa],n,!0))),Ll(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function ss(e){e.flags|=4}function us(e,t,n,r,a){if((t=0!==(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&a)===a)if(e.stateNode.complete)e.flags|=8192;else{if(!ac())throw oo=to,Za;e.flags|=8192}}else e.flags&=-16777217}function cs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!of(t)){if(!ac())throw oo=to,Za;e.flags|=8192}}function ds(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Pe():536870912,e.lanes|=t,Tu|=t)}function fs(e,t){if(!fa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ps(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ms(e,t,n){var r=t.pendingProps;switch(sa(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return ps(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ja(Fa),Y(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ba(t)?ss(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,wa())),ps(t),null;case 26:var a=t.type,o=t.memoizedState;return null===e?(ss(t),null!==o?(ps(t),cs(t,o)):(ps(t),us(t,a,0,0,n))):o?o!==e.memoizedState?(ss(t),ps(t),cs(t,o)):(ps(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&ss(t),ps(t),us(t,a,0,0,n)),null;case 27:if(X(t),n=q.current,a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if(!r){if(null===t.stateNode)throw Error(i(166));return ps(t),null}e=B.current,ba(t)?ya(t):(e=Md(a,r,n),t.stateNode=e,ss(t))}return ps(t),null;case 5:if(X(t),a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if(!r){if(null===t.stateNode)throw Error(i(166));return ps(t),null}if(o=B.current,ba(t))ya(t);else{var l=yd(q.current);switch(o){case 1:o=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:o=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":o=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":o=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":(o=l.createElement("div")).innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o="string"===typeof r.is?l.createElement("select",{is:r.is}):l.createElement("select"),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o="string"===typeof r.is?l.createElement(a,{is:r.is}):l.createElement(a)}}o[He]=t,o[Ue]=r;e:for(l=t.child;null!==l;){if(5===l.tag||6===l.tag)o.appendChild(l.stateNode);else if(4!==l.tag&&27!==l.tag&&null!==l.child){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;null===l.sibling;){if(null===l.return||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=o;e:switch(pd(o,a,r),a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ss(t)}}return ps(t),us(t,t.type,null===e||e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(e=q.current,ba(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=ca))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[He]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||cd(e.nodeValue,n)))||ga(t,!0)}else(e=yd(e).createTextNode(r))[He]=t,t.stateNode=e}return ps(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=ba(t),null!==n){if(null===e){if(!r)throw Error(i(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(i(557));e[He]=t}else xa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ps(t),e=!1}else n=wa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(Io(t),t):(Io(t),null);if(0!==(128&t.flags))throw Error(i(558))}return ps(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=ba(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[He]=t}else xa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ps(t),a=!1}else a=wa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return 256&t.flags?(Io(t),t):(Io(t),null)}return Io(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool),o=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ds(t,t.updateQueue),ps(t),null);case 4:return Y(),null===e&&ed(t.stateNode.containerInfo),ps(t),null;case 10:return ja(t.type),ps(t),null;case 19:if(I(Ho),null===(r=t.memoizedState))return ps(t),null;if(a=0!==(128&t.flags),null===(o=r.rendering))if(a)fs(r,!1);else{if(0!==zu||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=Uo(e))){for(t.flags|=128,fs(r,!1),e=o.updateQueue,t.updateQueue=e,ds(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Ur(n,e),n=n.sibling;return H(Ho,1&Ho.current|2),fa&&oa(t,r.treeForkCount),t.child}e=e.sibling}null!==r.tail&&se()>Lu&&(t.flags|=128,a=!0,fs(r,!1),t.lanes=4194304)}else{if(!a)if(null!==(e=Uo(o))){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ds(t,e),fs(r,!0),null===r.tail&&"hidden"===r.tailMode&&!o.alternate&&!fa)return ps(t),null}else 2*se()-r.renderingStartTime>Lu&&536870912!==n&&(t.flags|=128,a=!0,fs(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=r.last)?e.sibling=o:t.child=o,r.last=o)}return null!==r.tail?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=se(),e.sibling=null,n=Ho.current,H(Ho,a?1&n|2:1&n),fa&&oa(t,r.treeForkCount),e):(ps(t),null);case 22:case 23:return Io(t),Oo(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(ps(t),6&t.subtreeFlags&&(t.flags|=8192)):ps(t),null!==(n=t.updateQueue)&&ds(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&I(Ga),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ja(Fa),ps(t),null;case 25:case 30:return null}throw Error(i(156,t.tag))}function hs(e,t){switch(sa(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ja(Fa),Y(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return X(t),null;case 31:if(null!==t.memoizedState){if(Io(t),null===t.alternate)throw Error(i(340));xa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(Io(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));xa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return I(Ho),null;case 4:return Y(),null;case 10:return ja(t.type),null;case 22:case 23:return Io(t),Oo(),null!==e&&I(Ga),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return ja(Fa),null;default:return null}}function gs(e,t){switch(sa(t),t.tag){case 3:ja(Fa),Y();break;case 26:case 27:case 5:X(t);break;case 4:Y();break;case 31:null!==t.memoizedState&&Io(t);break;case 13:Io(t);break;case 19:I(Ho);break;case 10:ja(t.type);break;case 22:case 23:Io(t),Oo(),null!==e&&I(Ga);break;case 24:ja(Fa)}}function ys(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var o=n.create,i=n.inst;r=o(),i.destroy=r}n=n.next}while(n!==a)}}catch(l){zc(t,t.return,l)}}function vs(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var o=a.next;r=o;do{if((r.tag&e)===e){var i=r.inst,l=i.destroy;if(void 0!==l){i.destroy=void 0,a=t;var s=n,u=l;try{u()}catch(c){zc(a,s,c)}}}r=r.next}while(r!==o)}}catch(c){zc(t,t.return,c)}}function bs(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{_o(t,n)}catch(r){zc(e,e.return,r)}}}function xs(e,t,n){n.props=zl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){zc(e,t,r)}}function ws(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(a){zc(e,t,a)}}function ks(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){zc(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(o){zc(e,t,o)}else n.current=null}function Ss(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){zc(e,e.return,a)}}function zs(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,l=null,s=null,u=null,c=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&null!=f)switch(m){case"checked":case"value":break;case"defaultValue":u=f;default:r.hasOwnProperty(m)||dd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(null!=m||null!=f))switch(p){case"type":o=m;break;case"name":a=m;break;case"checked":c=m;break;case"defaultChecked":d=m;break;case"value":l=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(i(137,t));break;default:m!==f&&dd(e,t,p,m,r,f)}}return void vt(e,l,s,u,c,d,o,a);case"select":for(o in m=l=s=p=null,n)if(u=n[o],n.hasOwnProperty(o)&&null!=u)switch(o){case"value":break;case"multiple":m=u;default:r.hasOwnProperty(o)||dd(e,t,o,null,r,u)}for(a in r)if(o=r[a],u=n[a],r.hasOwnProperty(a)&&(null!=o||null!=u))switch(a){case"value":p=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:o!==u&&dd(e,t,a,o,r,u)}return t=s,n=l,r=m,void(null!=p?wt(e,!!n,p,!1):!!r!==!!n&&(null!=t?wt(e,!!n,t,!0):wt(e,!!n,n?[]:"",!1)));case"textarea":for(s in m=p=null,n)if(a=n[s],n.hasOwnProperty(s)&&null!=a&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:dd(e,t,s,null,r,a)}for(l in r)if(a=r[l],o=n[l],r.hasOwnProperty(l)&&(null!=a||null!=o))switch(l){case"value":p=a;break;case"defaultValue":m=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(i(91));break;default:a!==o&&dd(e,t,l,a,r,o)}return void kt(e,p,m);case"option":for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&null!=p&&!r.hasOwnProperty(h))if("selected"===h)e.selected=!1;else dd(e,t,h,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(null!=p||null!=m))if("selected"===u)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else dd(e,t,u,p,r,m);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g)&&dd(e,t,g,null,r,p);for(c in r)if(p=r[c],m=n[c],r.hasOwnProperty(c)&&p!==m&&(null!=p||null!=m))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(i(137,t));break;default:dd(e,t,c,p,r,m)}return;default:if(_t(t)){for(var y in n)p=n[y],n.hasOwnProperty(y)&&void 0!==p&&!r.hasOwnProperty(y)&&fd(e,t,y,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||void 0===p&&void 0===m||fd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&null!=p&&!r.hasOwnProperty(v)&&dd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||null==p&&null==m||dd(e,t,f,p,r,m)}(r,e.type,n,t),r[Ue]=t}catch(a){zc(e,e.return,a)}}function Es(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&jd(e.type)||4===e.tag}function Cs(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Es(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&jd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function js(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Nt));else if(4!==r&&(27===r&&jd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(js(e,t,n),e=e.sibling;null!==e;)js(e,t,n),e=e.sibling}function _s(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&jd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(_s(e,t,n),e=e.sibling;null!==e;)_s(e,t,n),e=e.sibling}function Ts(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);pd(t,r,n),t[He]=e,t[Ue]=n}catch(o){zc(e,e.return,o)}}var Ps=!1,$s=!1,Ns=!1,Os="function"===typeof WeakSet?WeakSet:Set,Rs=null;function Ls(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ys(e,n),4&r&&ys(5,n);break;case 1:if(Ys(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(i){zc(n,n.return,i)}else{var a=zl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){zc(n,n.return,l)}}64&r&&bs(n),512&r&&ws(n,n.return);break;case 3:if(Ys(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{_o(e,t)}catch(i){zc(n,n.return,i)}}break;case 27:null===t&&4&r&&Ts(n);case 26:case 5:Ys(e,n),null===t&&4&r&&Ss(n),512&r&&ws(n,n.return);break;case 12:Ys(e,n);break;case 31:Ys(e,n),4&r&&Hs(e,n);break;case 13:Ys(e,n),4&r&&Us(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=_c.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||Ps)){t=null!==t&&null!==t.memoizedState||$s,a=Ps;var o=$s;Ps=r,($s=t)&&!o?Xs(e,n,0!==(8772&n.subtreeFlags)):Ys(e,n),Ps=a,$s=o}break;case 30:break;default:Ys(e,n)}}function As(e){var t=e.alternate;null!==t&&(e.alternate=null,As(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ye(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ds=null,Ms=!1;function Fs(e,t,n){for(n=n.child;null!==n;)Is(e,t,n),n=n.sibling}function Is(e,t,n){if(ve&&"function"===typeof ve.onCommitFiberUnmount)try{ve.onCommitFiberUnmount(ye,n)}catch(o){}switch(n.tag){case 26:$s||ks(n,t),Fs(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:$s||ks(n,t);var r=Ds,a=Ms;jd(n.type)&&(Ds=n.stateNode,Ms=!1),Fs(e,t,n),Fd(n.stateNode),Ds=r,Ms=a;break;case 5:$s||ks(n,t);case 6:if(r=Ds,a=Ms,Ds=null,Fs(e,t,n),Ms=a,null!==(Ds=r))if(Ms)try{(9===Ds.nodeType?Ds.body:"HTML"===Ds.nodeName?Ds.ownerDocument.body:Ds).removeChild(n.stateNode)}catch(i){zc(n,t,i)}else try{Ds.removeChild(n.stateNode)}catch(i){zc(n,t,i)}break;case 18:null!==Ds&&(Ms?(_d(9===(e=Ds).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),qf(e)):_d(Ds,n.stateNode));break;case 4:r=Ds,a=Ms,Ds=n.stateNode.containerInfo,Ms=!0,Fs(e,t,n),Ds=r,Ms=a;break;case 0:case 11:case 14:case 15:vs(2,n,t),$s||vs(4,n,t),Fs(e,t,n);break;case 1:$s||(ks(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&xs(n,t,r)),Fs(e,t,n);break;case 21:Fs(e,t,n);break;case 22:$s=(r=$s)||null!==n.memoizedState,Fs(e,t,n),$s=r;break;default:Fs(e,t,n)}}function Hs(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{qf(e)}catch(n){zc(t,t.return,n)}}}function Us(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{qf(e)}catch(n){zc(t,t.return,n)}}function Ws(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Os),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Os),t;default:throw Error(i(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Tc.bind(null,e,t);t.then(r,r)}})}function Bs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(jd(s.type)){Ds=s.stateNode,Ms=!1;break e}break;case 5:Ds=s.stateNode,Ms=!1;break e;case 3:case 4:Ds=s.stateNode.containerInfo,Ms=!0;break e}s=s.return}if(null===Ds)throw Error(i(160));Is(o,l,a),Ds=null,Ms=!1,null!==(o=a.alternate)&&(o.return=null),a.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)qs(t,e),t=t.sibling}var Vs=null;function qs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bs(t,e),Ks(e),4&r&&(vs(3,e,e.return),ys(3,e),vs(5,e,e.return));break;case 1:Bs(t,e),Ks(e),512&r&&($s||null===n||ks(n,n.return)),64&r&&Ps&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=Vs;if(Bs(t,e),Ks(e),512&r&&($s||null===n||ks(n,n.return)),4&r){var o=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(o=a.getElementsByTagName("title")[0])||o[Ge]||o[He]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector("head > title"))),pd(o,r,n),o[He]=e,et(o),r=o;break e;case"link":var l=rf("link","href",a).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((o=l[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}pd(o=a.createElement(r),r,n),a.head.appendChild(o);break;case"meta":if(l=rf("meta","content",a).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((o=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}pd(o=a.createElement(r),r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[He]=e,et(o),r=o}e.stateNode=r}else af(a,e.type,e.stateNode);else e.stateNode=Jd(a,r,e.memoizedProps);else o!==r?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===r?af(a,e.type,e.stateNode):Jd(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&zs(e,e.memoizedProps,n.memoizedProps)}break;case 27:Bs(t,e),Ks(e),512&r&&($s||null===n||ks(n,n.return)),null!==n&&4&r&&zs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Bs(t,e),Ks(e),512&r&&($s||null===n||ks(n,n.return)),32&e.flags){a=e.stateNode;try{zt(a,"")}catch(h){zc(e,e.return,h)}}4&r&&null!=e.stateNode&&zs(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(Ns=!0);break;case 6:if(Bs(t,e),Ks(e),4&r){if(null===e.stateNode)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(h){zc(e,e.return,h)}}break;case 3:if(nf=null,a=Vs,Vs=Ud(t.containerInfo),Bs(t,e),Vs=a,Ks(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{qf(t.containerInfo)}catch(h){zc(e,e.return,h)}Ns&&(Ns=!1,Gs(e));break;case 4:r=Vs,Vs=Ud(e.stateNode.containerInfo),Bs(t,e),Ks(e),Vs=r;break;case 12:default:Bs(t,e),Ks(e);break;case 31:case 19:Bs(t,e),Ks(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ws(e,r)));break;case 13:Bs(t,e),Ks(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(Ou=se()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ws(e,r)));break;case 22:a=null!==e.memoizedState;var u=null!==n&&null!==n.memoizedState,c=Ps,d=$s;if(Ps=c||a,$s=d||u,Bs(t,e),$s=d,Ps=c,Ks(e),8192&r)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===n||u||Ps||$s||Qs(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){u=n=t;try{if(o=u.stateNode,a)"function"===typeof(l=o.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=u.stateNode;var f=u.memoizedProps.style,p=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null;s.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(h){zc(u,u.return,h)}}}else if(6===t.tag){if(null===n){u=t;try{u.stateNode.nodeValue=a?"":u.memoizedProps}catch(h){zc(u,u.return,h)}}}else if(18===t.tag){if(null===n){u=t;try{var m=u.stateNode;a?Td(m,!0):Td(u.stateNode,!1)}catch(h){zc(u,u.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Ws(e,n))));case 30:case 21:}}function Ks(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(Es(r)){n=r;break}r=r.return}if(null==n)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;_s(e,Cs(e),a);break;case 5:var o=n.stateNode;32&n.flags&&(zt(o,""),n.flags&=-33),_s(e,Cs(e),o);break;case 3:case 4:var l=n.stateNode.containerInfo;js(e,Cs(e),l);break;default:throw Error(i(161))}}catch(s){zc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Gs(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Gs(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Ys(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Ls(e,t.alternate,t),t=t.sibling}function Qs(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:vs(4,t,t.return),Qs(t);break;case 1:ks(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&xs(t,t.return,n),Qs(t);break;case 27:Fd(t.stateNode);case 26:case 5:ks(t,t.return),Qs(t);break;case 22:null===t.memoizedState&&Qs(t);break;default:Qs(t)}e=e.sibling}}function Xs(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,o=t,i=o.flags;switch(o.tag){case 0:case 11:case 15:Xs(a,o,n),ys(4,o);break;case 1:if(Xs(a,o,n),"function"===typeof(a=(r=o).stateNode).componentDidMount)try{a.componentDidMount()}catch(u){zc(r,r.return,u)}if(null!==(a=(r=o).updateQueue)){var l=r.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)jo(s[a],l)}catch(u){zc(r,r.return,u)}}n&&64&i&&bs(o),ws(o,o.return);break;case 27:Ts(o);case 26:case 5:Xs(a,o,n),n&&null===r&&4&i&&Ss(o),ws(o,o.return);break;case 12:Xs(a,o,n);break;case 31:Xs(a,o,n),n&&4&i&&Hs(a,o);break;case 13:Xs(a,o,n),n&&4&i&&Us(a,o);break;case 22:null===o.memoizedState&&Xs(a,o,n),ws(o,o.return);break;case 30:break;default:Xs(a,o,n)}t=t.sibling}}function Js(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ha(n))}function Zs(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ha(e))}function eu(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)tu(e,t,n,r),t=t.sibling}function tu(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:eu(e,t,n,r),2048&a&&ys(9,t);break;case 1:case 31:case 13:default:eu(e,t,n,r);break;case 3:eu(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ha(e)));break;case 12:if(2048&a){eu(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,i=o.id,l=o.onPostCommit;"function"===typeof l&&l(i,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){zc(t,t.return,s)}}else eu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,i=t.alternate,null!==t.memoizedState?2&o._visibility?eu(e,t,n,r):ru(e,t):2&o._visibility?eu(e,t,n,r):(o._visibility|=2,nu(e,t,n,r,0!==(10256&t.subtreeFlags)||!1)),2048&a&&Js(i,t);break;case 24:eu(e,t,n,r),2048&a&&Zs(t.alternate,t)}}function nu(e,t,n,r,a){for(a=a&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var o=e,i=t,l=n,s=r,u=i.flags;switch(i.tag){case 0:case 11:case 15:nu(o,i,l,s,a),ys(8,i);break;case 23:break;case 22:var c=i.stateNode;null!==i.memoizedState?2&c._visibility?nu(o,i,l,s,a):ru(o,i):(c._visibility|=2,nu(o,i,l,s,a)),a&&2048&u&&Js(i.alternate,i);break;case 24:nu(o,i,l,s,a),a&&2048&u&&Zs(i.alternate,i);break;default:nu(o,i,l,s,a)}t=t.sibling}}function ru(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:ru(n,r),2048&a&&Js(r.alternate,r);break;case 24:ru(n,r),2048&a&&Zs(r.alternate,r);break;default:ru(n,r)}t=t.sibling}}var au=8192;function ou(e,t,n){if(e.subtreeFlags&au)for(e=e.child;null!==e;)iu(e,t,n),e=e.sibling}function iu(e,t,n){switch(e.tag){case 26:ou(e,t,n),e.flags&au&&null!==e.memoizedState&&function(e,t,n,r){if("stylesheet"===n.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var a=Kd(r.href),o=t.querySelector(Gd(a));if(o)return null!==(t=o._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=sf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,void et(o);o=t.ownerDocument||t,r=Yd(r),(a=Id.get(a))&&ef(r,a),et(o=o.createElement("link"));var i=o;i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),pd(o,"link",r),n.instance=o}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=sf.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,Vs,e.memoizedState,e.memoizedProps);break;case 5:default:ou(e,t,n);break;case 3:case 4:var r=Vs;Vs=Ud(e.stateNode.containerInfo),ou(e,t,n),Vs=r;break;case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=au,au=16777216,ou(e,t,n),au=r):ou(e,t,n))}}function lu(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function su(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Rs=r,du(r,e)}lu(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)uu(e),e=e.sibling}function uu(e){switch(e.tag){case 0:case 11:case 15:su(e),2048&e.flags&&vs(9,e,e.return);break;case 3:case 12:default:su(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,cu(e)):su(e)}}function cu(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Rs=r,du(r,e)}lu(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:vs(8,t,t.return),cu(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,cu(t));break;default:cu(t)}e=e.sibling}}function du(e,t){for(;null!==Rs;){var n=Rs;switch(n.tag){case 0:case 11:case 15:vs(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Ha(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Rs=r;else e:for(n=e;null!==Rs;){var a=(r=Rs).sibling,o=r.return;if(As(r),r===n){Rs=null;break e}if(null!==a){a.return=o,Rs=a;break e}Rs=o}}}var fu={getCacheForType:function(e){var t=Oa(Fa),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Oa(Fa).controller.signal}},pu="function"===typeof WeakMap?WeakMap:Map,mu=0,hu=null,gu=null,yu=0,vu=0,bu=null,xu=!1,wu=!1,ku=!1,Su=0,zu=0,Eu=0,Cu=0,ju=0,_u=0,Tu=0,Pu=null,$u=null,Nu=!1,Ou=0,Ru=0,Lu=1/0,Au=null,Du=null,Mu=0,Fu=null,Iu=null,Hu=0,Uu=0,Wu=null,Bu=null,Vu=0,qu=null;function Ku(){return 0!==(2&mu)&&0!==yu?yu&-yu:null!==R.T?Wc():Me()}function Gu(){if(0===_u)if(0===(536870912&yu)||fa){var e=ze;0===(3932160&(ze<<=1))&&(ze=262144),_u=e}else _u=536870912;return null!==(e=Ro.current)&&(e.flags|=32),_u}function Yu(e,t,n){(e!==hu||2!==vu&&9!==vu)&&null===e.cancelPendingCommit||(nc(e,0),Zu(e,yu,_u,!1)),Ne(e,n),0!==(2&mu)&&e===hu||(e===hu&&(0===(2&mu)&&(Cu|=n),4===zu&&Zu(e,yu,_u,!1)),Ac(e))}function Qu(e,t,n){if(0!==(6&mu))throw Error(i(327));for(var r=!n&&0===(127&t)&&0===(t&e.expiredLanes)||_e(e,t),a=r?function(e,t){var n=mu;mu|=2;var r=oc(),a=ic();hu!==e||yu!==t?(Au=null,Lu=se()+500,nc(e,t)):wu=_e(e,t);e:for(;;)try{if(0!==vu&&null!==gu){t=gu;var o=bu;t:switch(vu){case 1:vu=0,bu=null,pc(e,t,o,1);break;case 2:case 9:if(no(o)){vu=0,bu=null,fc(t);break}t=function(){2!==vu&&9!==vu||hu!==e||(vu=7),Ac(e)},o.then(t,t);break e;case 3:vu=7;break e;case 4:vu=5;break e;case 7:no(o)?(vu=0,bu=null,fc(t)):(vu=0,bu=null,pc(e,t,o,7));break;case 5:var l=null;switch(gu.tag){case 26:l=gu.memoizedState;case 5:case 27:var s=gu;if(l?of(l):s.stateNode.complete){vu=0,bu=null;var u=s.sibling;if(null!==u)gu=u;else{var c=s.return;null!==c?(gu=c,mc(c)):gu=null}break t}}vu=0,bu=null,pc(e,t,o,5);break;case 6:vu=0,bu=null,pc(e,t,o,6);break;case 8:tc(),zu=6;break e;default:throw Error(i(462))}}cc();break}catch(d){rc(e,d)}return Ea=za=null,R.H=r,R.A=a,mu=n,null!==gu?0:(hu=null,yu=0,$r(),zu)}(e,t):sc(e,t,!0),o=r;;){if(0===a){wu&&!r&&Zu(e,t,0,!1);break}if(n=e.current.alternate,!o||Ju(n)){if(2===a){if(o=t,e.errorRecoveryDisabledLanes&o)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;a=Pu;var u=s.current.memoizedState.isDehydrated;if(u&&(nc(s,l).flags|=256),2!==(l=sc(s,l,!1))){if(ku&&!u){s.errorRecoveryDisabledLanes|=o,Cu|=o,a=4;break e}o=$u,$u=a,null!==o&&(null===$u?$u=o:$u.push.apply($u,o))}a=l}if(o=!1,2!==a)continue}}if(1===a){nc(e,0),Zu(e,t,0,!0);break}e:{switch(r=e,o=a){case 0:case 1:throw Error(i(345));case 4:if((4194048&t)!==t)break;case 6:Zu(r,t,_u,!xu);break e;case 2:$u=null;break;case 3:case 5:break;default:throw Error(i(329))}if((62914560&t)===t&&10<(a=Ou+300-se())){if(Zu(r,t,_u,!xu),0!==je(r,0,!0))break e;Hu=t,r.timeoutHandle=kd(Xu.bind(null,r,n,$u,Au,Nu,t,_u,Cu,Tu,xu,o,"Throttled",-0,0),a)}else Xu(r,n,$u,Au,Nu,t,_u,Cu,Tu,xu,o,null,-0,0)}break}a=sc(e,t,!1),o=!1}Ac(e)}function Xu(e,t,n,r,a,o,i,l,s,u,c,d,f,p){if(e.timeoutHandle=-1,8192&(d=t.subtreeFlags)||16785408===(16785408&d)){iu(t,o,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nt});var m=(62914560&o)===o?Ou-se():(4194048&o)===o?Ru-se():0;if(null!==(m=function(e,t){return e.stylesheets&&0===e.count&&cf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&cf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&0===lf&&(lf=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var a=n[r],o=a.transferSize,i=a.initiatorType,l=a.duration;if(o&&l&&md(i)){for(i=0,l=a.responseEnd,r+=1;r<n.length;r++){var s=n[r],u=s.startTime;if(u>l)break;var c=s.transferSize,d=s.initiatorType;c&&md(d)&&(i+=c*((s=s.responseEnd)<l?1:(l-u)/(s-u)))}if(--r,t+=8*(o+i)/(a.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"===typeof(e=navigator.connection.downlink)?e:5}());var a=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&cf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>lf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(a)}}:null}(d,m)))return Hu=o,e.cancelPendingCommit=m(gc.bind(null,e,t,o,n,r,a,i,l,s,c,d,null,f,p)),void Zu(e,o,i,!u)}gc(e,t,o,n,r,a,i,l,s)}function Ju(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!Zn(o(),a))return!1}catch(i){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zu(e,t,n,r){t&=~ju,t&=~Cu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var o=31-xe(a),i=1<<o;r[o]=-1,a&=~i}0!==n&&Oe(e,n,t)}function ec(){return 0!==(6&mu)||(Dc(0,!1),!1)}function tc(){if(null!==gu){if(0===vu)var e=gu.return;else Ea=za=null,si(e=gu),so=null,uo=0,e=gu;for(;null!==e;)gs(e.alternate,e),e=e.return;gu=null}}function nc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,Sd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Hu=0,tc(),hu=e,gu=n=Hr(e.current,null),yu=t,vu=0,bu=null,xu=!1,wu=_e(e,t),ku=!1,Tu=_u=ju=Cu=Eu=zu=0,$u=Pu=null,Nu=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-xe(r),o=1<<a;t|=e[a],r&=~o}return Su=t,$r(),n}function rc(e,t){Bo=null,R.H=gl,t===Ja||t===eo?(t=io(),vu=3):t===Za?(t=io(),vu=4):vu=t===Ol?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,bu=t,null===gu&&(zu=1,_l(e,Yr(t,e.current)))}function ac(){var e=Ro.current;return null===e||((4194048&yu)===yu?null===Lo:((62914560&yu)===yu||0!==(536870912&yu))&&e===Lo)}function oc(){var e=R.H;return R.H=gl,null===e?gl:e}function ic(){var e=R.A;return R.A=fu,e}function lc(){zu=4,xu||(4194048&yu)!==yu&&null!==Ro.current||(wu=!0),0===(134217727&Eu)&&0===(134217727&Cu)||null===hu||Zu(hu,yu,_u,!1)}function sc(e,t,n){var r=mu;mu|=2;var a=oc(),o=ic();hu===e&&yu===t||(Au=null,nc(e,t)),t=!1;var i=zu;e:for(;;)try{if(0!==vu&&null!==gu){var l=gu,s=bu;switch(vu){case 8:tc(),i=6;break e;case 3:case 2:case 9:case 6:null===Ro.current&&(t=!0);var u=vu;if(vu=0,bu=null,pc(e,l,s,u),n&&wu){i=0;break e}break;default:u=vu,vu=0,bu=null,pc(e,l,s,u)}}uc(),i=zu;break}catch(c){rc(e,c)}return t&&e.shellSuspendCounter++,Ea=za=null,mu=r,R.H=a,R.A=o,null===gu&&(hu=null,yu=0,$r()),i}function uc(){for(;null!==gu;)dc(gu)}function cc(){for(;null!==gu&&!ie();)dc(gu)}function dc(e){var t=ls(e.alternate,e,Su);e.memoizedProps=e.pendingProps,null===t?mc(e):gu=t}function fc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ql(n,t,t.pendingProps,t.type,void 0,yu);break;case 11:t=ql(n,t,t.pendingProps,t.type.render,t.ref,yu);break;case 5:si(t);default:gs(n,t),t=ls(n,t=gu=Ur(t,Su),Su)}e.memoizedProps=e.pendingProps,null===t?mc(e):gu=t}function pc(e,t,n,r){Ea=za=null,si(t),so=null,uo=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Pa(t,n,a,!0),null!==(n=Ro.current)){switch(n.tag){case 31:case 13:return null===Lo?lc():null===n.alternate&&0===zu&&(zu=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===to?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),Ec(e,r,a)),!1;case 22:return n.flags|=65536,r===to?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),Ec(e,r,a)),!1}throw Error(i(435,n.tag))}return Ec(e,r,a),lc(),!1}if(fa)return null!==(t=Ro.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ha&&ka(Yr(e=Error(i(422),{cause:r}),n))):(r!==ha&&ka(Yr(t=Error(i(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=Yr(r,n),So(e,a=Pl(e.stateNode,r,a)),4!==zu&&(zu=2)),!1;var o=Error(i(520),{cause:r});if(o=Yr(o,n),null===Pu?Pu=[o]:Pu.push(o),4!==zu&&(zu=2),null===t)return!0;r=Yr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,So(n,e=Pl(n.stateNode,r,e)),!1;case 1:if(t=n.type,o=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===Du||!Du.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,Nl(a=$l(a),e,n,r),So(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,yu))return zu=1,_l(e,Yr(n,e.current)),void(gu=null)}catch(o){if(null!==a)throw gu=a,o;return zu=1,_l(e,Yr(n,e.current)),void(gu=null)}32768&t.flags?(fa||1===r?e=!0:wu||0!==(536870912&yu)?e=!1:(xu=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=Ro.current)&&13===r.tag&&(r.flags|=16384))),hc(t,e)):mc(t)}function mc(e){var t=e;do{if(0!==(32768&t.flags))return void hc(t,xu);e=t.return;var n=ms(t.alternate,t,Su);if(null!==n)return void(gu=n);if(null!==(t=t.sibling))return void(gu=t);gu=t=e}while(null!==t);0===zu&&(zu=5)}function hc(e,t){do{var n=hs(e.alternate,e);if(null!==n)return n.flags&=32767,void(gu=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(gu=e);gu=e=n}while(null!==e);zu=6,gu=null}function gc(e,t,n,r,a,o,l,s,u){e.cancelPendingCommit=null;do{wc()}while(0!==Mu);if(0!==(6&mu))throw Error(i(327));if(null!==t){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,function(e,t,n,r,a,o){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(n=i&~n;0<n;){var c=31-xe(n),d=1<<c;l[c]=0,s[c]=-1;var f=u[c];if(null!==f)for(u[c]=null,c=0;c<f.length;c++){var p=f[c];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&Oe(e,r,0),0!==o&&0===a&&0!==e.tag&&(e.suspendedLanes|=o&~(i&~t))}(e,n,o|=Pr,l,s,u),e===hu&&(gu=hu=null,yu=0),Iu=t,Fu=e,Hu=n,Uu=o,Wu=a,Bu=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,ae(fe,function(){return kc(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=R.T,R.T=null,a=L.p,L.p=2,l=mu,mu|=4;try{!function(e,t){if(e=e.containerInfo,hd=wf,or(e=ar(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(g){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==o||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(m=f.firstChild);)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===o&&++d===r&&(u=l),null!==(m=f.nextSibling))break;p=(f=p).parentNode}f=m}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(gd={focusedElem:e,selectionRange:n},wf=!1,Rs=t;null!==Rs;)if(e=(t=Rs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Rs=e;else for(;null!==Rs;){switch(o=(t=Rs).alternate,e=t.flags,t.tag){case 0:if(0!==(4&e)&&null!==(e=null!==(e=t.updateQueue)?e.events:null))for(n=0;n<e.length;n++)(a=e[n]).ref.impl=a.nextImpl;break;case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=zl(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(y){zc(n,n.return,y)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))Pd(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pd(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(i(163))}if(null!==(e=t.sibling)){e.return=t.return,Rs=e;break}Rs=t.return}}(e,t)}finally{mu=l,L.p=a,R.T=r}}Mu=1,yc(),vc(),bc()}}function yc(){if(1===Mu){Mu=0;var e=Fu,t=Iu,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=R.T,R.T=null;var r=L.p;L.p=2;var a=mu;mu|=4;try{qs(t,e);var o=gd,i=ar(e.containerInfo),l=o.focusedElem,s=o.selectionRange;if(i!==l&&l&&l.ownerDocument&&rr(l.ownerDocument.documentElement,l)){if(null!==s&&or(l)){var u=s.start,c=s.end;if(void 0===c&&(c=u),"selectionStart"in l)l.selectionStart=u,l.selectionEnd=Math.min(c,l.value.length);else{var d=l.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=l.textContent.length,h=Math.min(s.start,m),g=void 0===s.end?h:Math.min(s.end,m);!p.extend&&h>g&&(i=g,g=h,h=i);var y=nr(l,h),v=nr(l,g);if(y&&v&&(1!==p.rangeCount||p.anchorNode!==y.node||p.anchorOffset!==y.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var b=d.createRange();b.setStart(y.node,y.offset),p.removeAllRanges(),h>g?(p.addRange(b),p.extend(v.node,v.offset)):(b.setEnd(v.node,v.offset),p.addRange(b))}}}}for(d=[],p=l;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<d.length;l++){var x=d[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}wf=!!hd,gd=hd=null}finally{mu=a,L.p=r,R.T=n}}e.current=t,Mu=2}}function vc(){if(2===Mu){Mu=0;var e=Fu,t=Iu,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=R.T,R.T=null;var r=L.p;L.p=2;var a=mu;mu|=4;try{Ls(e,t.alternate,t)}finally{mu=a,L.p=r,R.T=n}}Mu=3}}function bc(){if(4===Mu||3===Mu){Mu=0,le();var e=Fu,t=Iu,n=Hu,r=Bu;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Mu=5:(Mu=0,Iu=Fu=null,xc(e,e.pendingLanes));var a=e.pendingLanes;if(0===a&&(Du=null),De(n),t=t.stateNode,ve&&"function"===typeof ve.onCommitFiberRoot)try{ve.onCommitFiberRoot(ye,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==r){t=R.T,a=L.p,L.p=2,R.T=null;try{for(var o=e.onRecoverableError,i=0;i<r.length;i++){var l=r[i];o(l.value,{componentStack:l.stack})}}finally{R.T=t,L.p=a}}0!==(3&Hu)&&wc(),Ac(e),a=e.pendingLanes,0!==(261930&n)&&0!==(42&a)?e===qu?Vu++:(Vu=0,qu=e):Vu=0,Dc(0,!1)}}function xc(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Ha(t)))}function wc(){return yc(),vc(),bc(),kc()}function kc(){if(5!==Mu)return!1;var e=Fu,t=Uu;Uu=0;var n=De(Hu),r=R.T,a=L.p;try{L.p=32>n?32:n,R.T=null,n=Wu,Wu=null;var o=Fu,l=Hu;if(Mu=0,Iu=Fu=null,Hu=0,0!==(6&mu))throw Error(i(331));var s=mu;if(mu|=4,uu(o.current),tu(o,o.current,l,n),mu=s,Dc(0,!1),ve&&"function"===typeof ve.onPostCommitFiberRoot)try{ve.onPostCommitFiberRoot(ye,o)}catch(u){}return!0}finally{L.p=a,R.T=r,xc(e,t)}}function Sc(e,t,n){t=Yr(n,t),null!==(e=wo(e,t=Pl(e.stateNode,t,2),2))&&(Ne(e,2),Ac(e))}function zc(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Du||!Du.has(r))){e=Yr(n,e),null!==(r=wo(t,n=$l(2),2))&&(Nl(n,r,t,e),Ne(r,2),Ac(r));break}}t=t.return}}function Ec(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pu;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(ku=!0,a.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,hu===e&&(yu&n)===n&&(4===zu||3===zu&&(62914560&yu)===yu&&300>se()-Ou?0===(2&mu)&&nc(e,0):ju|=n,Tu===yu&&(Tu=0)),Ac(e)}function jc(e,t){0===t&&(t=Pe()),null!==(e=Rr(e,t))&&(Ne(e,t),Ac(e))}function _c(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),jc(e,n)}function Tc(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}null!==r&&r.delete(t),jc(e,n)}var Pc=null,$c=null,Nc=!1,Oc=!1,Rc=!1,Lc=0;function Ac(e){e!==$c&&null===e.next&&(null===$c?Pc=$c=e:$c=$c.next=e),Oc=!0,Nc||(Nc=!0,Ed(function(){0!==(6&mu)?ae(ce,Mc):Fc()}))}function Dc(e,t){if(!Rc&&Oc){Rc=!0;do{for(var n=!1,r=Pc;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var o=0;else{var i=r.suspendedLanes,l=r.pingedLanes;o=(1<<31-xe(42|e)+1)-1,o=201326741&(o&=a&~(i&~l))?201326741&o|1:o?2|o:0}0!==o&&(n=!0,Uc(r,o))}else o=yu,0===(3&(o=je(r,r===hu?o:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||_e(r,o)||(n=!0,Uc(r,o));r=r.next}}while(n);Rc=!1}}function Mc(){Fc()}function Fc(){Oc=Nc=!1;var e=0;0!==Lc&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==wd&&(wd=e,!0);return wd=null,!1}()&&(e=Lc);for(var t=se(),n=null,r=Pc;null!==r;){var a=r.next,o=Ic(r,t);0===o?(r.next=null,null===n?Pc=a:n.next=a,null===a&&($c=n)):(n=r,(0!==e||0!==(3&o))&&(Oc=!0)),r=a}0!==Mu&&5!==Mu||Dc(e,!1),0!==Lc&&(Lc=0)}function Ic(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var i=31-xe(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=Te(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}if(n=yu,n=je(e,e===(t=hu)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===vu||9===vu)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&oe(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||_e(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&oe(r),De(n)){case 2:case 8:n=de;break;case 32:default:n=fe;break;case 268435456:n=me}return r=Hc.bind(null,e),n=ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&oe(r),e.callbackPriority=2,e.callbackNode=null,2}function Hc(e,t){if(0!==Mu&&5!==Mu)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(wc()&&e.callbackNode!==n)return null;var r=yu;return 0===(r=je(e,e===hu?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Qu(e,r,t),Ic(e,se()),null!=e.callbackNode&&e.callbackNode===n?Hc.bind(null,e):null)}function Uc(e,t){if(wc())return null;Qu(e,t,!0)}function Wc(){if(0===Lc){var e=Ba;0===e&&(e=Se,0===(261888&(Se<<=1))&&(Se=256)),Lc=e}return Lc}function Bc(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:$t(""+e)}function Vc(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var qc=0;qc<Er.length;qc++){var Kc=Er[qc];Cr(Kc.toLowerCase(),"on"+(Kc[0].toUpperCase()+Kc.slice(1)))}Cr(yr,"onAnimationEnd"),Cr(vr,"onAnimationIteration"),Cr(br,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(xr,"onTransitionRun"),Cr(wr,"onTransitionStart"),Cr(kr,"onTransitionCancel"),Cr(Sr,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yc=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gc));function Qc(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=u;try{o(a)}catch(c){jr(c)}a.currentTarget=null,o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=u;try{o(a)}catch(c){jr(c)}a.currentTarget=null,o=s}}}}function Xc(e,t){var n=t[Be];void 0===n&&(n=t[Be]=new Set);var r=e+"__bubble";n.has(r)||(td(t,e,2,!1),n.add(r))}function Jc(e,t,n){var r=0;t&&(r|=4),td(n,e,r,t)}var Zc="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[Zc]){e[Zc]=!0,tt.forEach(function(t){"selectionchange"!==t&&(Yc.has(t)||Jc(t,!1,e),Jc(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Zc]||(t[Zc]=!0,Jc("selectionchange",!1,t))}}function td(e,t,n,r){switch(_f(t)){case 2:var a=kf;break;case 8:a=Sf;break;default:a=zf}n=a.bind(null,t,n,e),a=void 0,!Ut||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function nd(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a)break;if(4===i)for(i=r.return;null!==i;){var u=i.tag;if((3===u||4===u)&&i.stateNode.containerInfo===a)return;i=i.return}for(;null!==l;){if(null===(i=Qe(l)))return;if(5===(u=i.tag)||6===u||26===u||27===u){r=o=i;continue e}l=l.parentNode}}r=r.return}Ft(function(){var r=o,a=Rt(n),i=[];e:{var l=zr.get(e);if(void 0!==l){var u=nn,c=e;switch(e){case"keypress":if(0===Gt(n))break e;case"keydown":case"keyup":u=vn;break;case"focusin":c="focus",u=un;break;case"focusout":c="blur",u=un;break;case"beforeblur":case"afterblur":u=un;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=ln;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=sn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=xn;break;case yr:case vr:case br:u=cn;break;case Sr:u=wn;break;case"scroll":case"scrollend":u=an;break;case"wheel":u=kn;break;case"copy":case"cut":case"paste":u=dn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=bn;break;case"toggle":case"beforetoggle":u=Sn}var d=0!==(4&t),f=!d&&("scroll"===e||"scrollend"===e),p=d?null!==l?l+"Capture":null:l;d=[];for(var m,h=r;null!==h;){var g=h;if(m=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===m||null===p||null!=(g=It(h,p))&&d.push(rd(h,g,m)),f)break;h=h.return}0<d.length&&(l=new u(l,c,null,n,a),i.push({event:l,listeners:d}))}}if(0===(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Ot||!(c=n.relatedTarget||n.fromElement)||!Qe(c)&&!c[We])&&(u||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,u?(u=r,null!==(c=(c=n.relatedTarget||n.toElement)?Qe(c):null)&&(f=s(c),d=c.tag,c!==f||5!==d&&27!==d&&6!==d)&&(c=null)):(u=null,c=r),u!==c)){if(d=ln,g="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(d=bn,g="onPointerLeave",p="onPointerEnter",h="pointer"),f=null==u?l:Je(u),m=null==c?l:Je(c),(l=new d(g,h+"leave",u,n,a)).target=f,l.relatedTarget=m,g=null,Qe(a)===r&&((d=new d(p,h+"enter",c,n,a)).target=m,d.relatedTarget=f,g=d),f=g,u&&c)e:{for(d=od,h=c,m=0,g=p=u;g;g=d(g))m++;g=0;for(var y=h;y;y=d(y))g++;for(;0<m-g;)p=d(p),m--;for(;0<g-m;)h=d(h),g--;for(;m--;){if(p===h||null!==h&&p===h.alternate){d=p;break e}p=d(p),h=d(h)}d=null}else d=null;null!==u&&id(i,l,u,d,!1),null!==c&&null!==f&&id(i,f,c,d,!0)}if("select"===(u=(l=r?Je(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===u&&"file"===l.type)var v=Hn;else if(Ln(l))if(Un)v=Jn;else{v=Qn;var b=Yn}else!(u=l.nodeName)||"input"!==u.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&_t(r.elementType)&&(v=Hn):v=Xn;switch(v&&(v=v(e,r))?An(i,v,n,a):(b&&b(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&xt(l,"number",l.value)),b=r?Je(r):window,e){case"focusin":(Ln(b)||"true"===b.contentEditable)&&(lr=b,sr=r,ur=null);break;case"focusout":ur=sr=lr=null;break;case"mousedown":cr=!0;break;case"contextmenu":case"mouseup":case"dragend":cr=!1,dr(i,n,a);break;case"selectionchange":if(ir)break;case"keydown":case"keyup":dr(i,n,a)}var x;if(En)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else On?$n(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(_n&&"ko"!==n.locale&&(On||"onCompositionStart"!==w?"onCompositionEnd"===w&&On&&(x=Kt()):(Vt="value"in(Bt=a)?Bt.value:Bt.textContent,On=!0)),0<(b=ad(r,w)).length&&(w=new fn(w,e,null,n,a),i.push({event:w,listeners:b}),x?w.data=x:null!==(x=Nn(n))&&(w.data=x))),(x=jn?function(e,t){switch(e){case"compositionend":return Nn(t);case"keypress":return 32!==t.which?null:(Pn=!0,Tn);case"textInput":return(e=t.data)===Tn&&Pn?null:e;default:return null}}(e,n):function(e,t){if(On)return"compositionend"===e||!En&&$n(e,t)?(e=Kt(),qt=Vt=Bt=null,On=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _n&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(w=ad(r,"onBeforeInput")).length&&(b=new fn("onBeforeInput","beforeinput",null,n,a),i.push({event:b,listeners:w}),b.data=x)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var o=Bc((a[Ue]||null).action),i=r.submitter;i&&null!==(t=(t=i[Ue]||null)?Bc(t.formAction):i.getAttribute("formAction"))&&(o=t,i=null);var l=new nn("action","action",null,r,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==Lc){var e=i?Vc(a,i):new FormData(a);nl(n,{pending:!0,data:e,method:a.method,action:o},null,e)}}else"function"===typeof o&&(l.preventDefault(),e=i?Vc(a,i):new FormData(a),nl(n,{pending:!0,data:e,method:a.method,action:o},o,e))},currentTarget:a}]})}}(i,e,r,n,a)}Qc(i,t)})}function rd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ad(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===o||(null!=(a=It(e,n))&&r.unshift(rd(e,a,o)),null!=(a=It(e,t))&&r.push(rd(e,a,o))),3===e.tag)return r;e=e.return}return[]}function od(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function id(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===u||(s=u,a?null!=(u=It(n,o))&&i.unshift(rd(n,u,s)):a||null!=(u=It(n,o))&&i.push(rd(n,u,s))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var ld=/\r\n?/g,sd=/\u0000|\uFFFD/g;function ud(e){return("string"===typeof e?e:""+e).replace(ld,"\n").replace(sd,"")}function cd(e,t){return t=ud(t),ud(e)===t}function dd(e,t,n,r,a,o){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||zt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&zt(e,""+r);break;case"className":ut(e,"class",r);break;case"tabIndex":ut(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ut(e,n,r);break;case"style":jt(e,r,o);break;case"data":if("object"!==t){ut(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=$t(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===n?("input"!==t&&dd(e,t,"name",a.name,a,null),dd(e,t,"formEncType",a.formEncType,a,null),dd(e,t,"formMethod",a.formMethod,a,null),dd(e,t,"formTarget",a.formTarget,a,null)):(dd(e,t,"encType",a.encType,a,null),dd(e,t,"method",a.method,a,null),dd(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=$t(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Nt);break;case"onScroll":null!=r&&Xc("scroll",e);break;case"onScrollEnd":null!=r&&Xc("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(i(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=$t(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Xc("beforetoggle",e),Xc("toggle",e),st(e,"popover",r);break;case"xlinkActuate":ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ct(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ct(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ct(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ct(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":st(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&st(e,n=Tt.get(n)||n,r)}}function fd(e,t,n,r,a,o){switch(n){case"style":jt(e,r,o);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(i(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=n}}break;case"children":"string"===typeof r?zt(e,r):("number"===typeof r||"bigint"===typeof r)&&zt(e,""+r);break;case"onScroll":null!=r&&Xc("scroll",e);break;case"onScrollEnd":null!=r&&Xc("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Nt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:nt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(o=null!=(o=e[Ue]||null)?o[n]:null)&&e.removeEventListener(t,o,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):st(e,n,r):("function"!==typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function pd(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xc("error",e),Xc("load",e);var r,a=!1,o=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:dd(e,t,r,l,n,null)}}return o&&dd(e,t,"srcSet",n.srcSet,n,null),void(a&&dd(e,t,"src",n.src,n,null));case"input":Xc("invalid",e);var s=r=l=o=null,u=null,c=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":o=d;break;case"type":l=d;break;case"checked":u=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(i(137,t));break;default:dd(e,t,a,d,n,null)}}return void bt(e,r,s,u,c,l,o,!1);case"select":for(o in Xc("invalid",e),a=l=r=null,n)if(n.hasOwnProperty(o)&&null!=(s=n[o]))switch(o){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:dd(e,t,o,s,n,null)}return t=r,n=l,e.multiple=!!a,void(null!=t?wt(e,!!a,t,!1):null!=n&&wt(e,!!a,n,!0));case"textarea":for(l in Xc("invalid",e),r=o=a=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":a=s;break;case"defaultValue":o=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(i(91));break;default:dd(e,t,l,s,n,null)}return void St(e,a,o,r);case"option":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))if("selected"===u)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else dd(e,t,u,a,n,null);return;case"dialog":Xc("beforetoggle",e),Xc("toggle",e),Xc("cancel",e),Xc("close",e);break;case"iframe":case"object":Xc("load",e);break;case"video":case"audio":for(a=0;a<Gc.length;a++)Xc(Gc[a],e);break;case"image":Xc("error",e),Xc("load",e);break;case"details":Xc("toggle",e);break;case"embed":case"source":case"link":Xc("error",e),Xc("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:dd(e,t,c,a,n,null)}return;default:if(_t(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&fd(e,t,d,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(a=n[s])&&dd(e,t,s,a,n,null))}function md(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var hd=null,gd=null;function yd(e){return 9===e.nodeType?e:e.ownerDocument}function vd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bd(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function xd(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var wd=null;var kd="function"===typeof setTimeout?setTimeout:void 0,Sd="function"===typeof clearTimeout?clearTimeout:void 0,zd="function"===typeof Promise?Promise:void 0,Ed="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof zd?function(e){return zd.resolve(null).then(e).catch(Cd)}:kd;function Cd(e){setTimeout(function(){throw e})}function jd(e){return"head"===e}function _d(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)||"/&"===n){if(0===r)return e.removeChild(a),void qf(t);r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;else if("html"===n)Fd(e.ownerDocument.documentElement);else if("head"===n){Fd(n=e.ownerDocument.head);for(var o=n.firstChild;o;){var i=o.nextSibling,l=o.nodeName;o[Ge]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=i}}else"body"===n&&Fd(e.ownerDocument.body);n=a}while(n);qf(t)}function Td(e,t){var n=e;e=0;do{var r=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=r}while(n)}function Pd(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Pd(n),Ye(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function $d(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=Rd(e.nextSibling)))return null}return e}function Nd(e){return"$?"===e.data||"$~"===e.data}function Od(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Rd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}var Ld=null;function Ad(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return Rd(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function Dd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Md(e,t,n){switch(t=yd(n),e){case"html":if(!(e=t.documentElement))throw Error(i(452));return e;case"head":if(!(e=t.head))throw Error(i(453));return e;case"body":if(!(e=t.body))throw Error(i(454));return e;default:throw Error(i(451))}}function Fd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ye(e)}var Id=new Map,Hd=new Set;function Ud(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Wd=L.d;L.d={f:function(){var e=Wd.f(),t=ec();return e||t},r:function(e){var t=Xe(e);null!==t&&5===t.tag&&"form"===t.type?al(t):Wd.r(e)},D:function(e){Wd.D(e),Vd("dns-prefetch",e,null)},C:function(e,t){Wd.C(e,t),Vd("preconnect",e,t)},L:function(e,t,n){Wd.L(e,t,n);var r=Bd;if(r&&e&&t){var a='link[rel="preload"][as="'+yt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+yt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+yt(n.imageSizes)+'"]')):a+='[href="'+yt(e)+'"]';var o=a;switch(t){case"style":o=Kd(e);break;case"script":o=Qd(e)}Id.has(o)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Id.set(o,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(Gd(o))||"script"===t&&r.querySelector(Xd(o))||(pd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}},m:function(e,t){Wd.m(e,t);var n=Bd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+yt(r)+'"][href="'+yt(e)+'"]',o=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Qd(e)}if(!Id.has(o)&&(e=p({rel:"modulepreload",href:e},t),Id.set(o,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Xd(o)))return}pd(r=n.createElement("link"),"link",e),et(r),n.head.appendChild(r)}}},X:function(e,t){Wd.X(e,t);var n=Bd;if(n&&e){var r=Ze(n).hoistableScripts,a=Qd(e),o=r.get(a);o||((o=n.querySelector(Xd(a)))||(e=p({src:e,async:!0},t),(t=Id.get(a))&&tf(e,t),et(o=n.createElement("script")),pd(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}},S:function(e,t,n){Wd.S(e,t,n);var r=Bd;if(r&&e){var a=Ze(r).hoistableStyles,o=Kd(e);t=t||"default";var i=a.get(o);if(!i){var l={loading:0,preload:null};if(i=r.querySelector(Gd(o)))l.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Id.get(o))&&ef(e,n);var s=i=r.createElement("link");et(s),pd(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Zd(i,t,r)}i={type:"stylesheet",instance:i,count:1,state:l},a.set(o,i)}}},M:function(e,t){Wd.M(e,t);var n=Bd;if(n&&e){var r=Ze(n).hoistableScripts,a=Qd(e),o=r.get(a);o||((o=n.querySelector(Xd(a)))||(e=p({src:e,async:!0,type:"module"},t),(t=Id.get(a))&&tf(e,t),et(o=n.createElement("script")),pd(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}}};var Bd="undefined"===typeof document?null:document;function Vd(e,t,n){var r=Bd;if(r&&"string"===typeof t&&t){var a=yt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),Hd.has(a)||(Hd.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(pd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}}function qd(e,t,n,r){var a,o,l,s,u=(u=q.current)?Ud(u):null;if(!u)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Kd(n.href),(r=(n=Ze(u).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Kd(n.href);var c=Ze(u).hoistableStyles,d=c.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=u.querySelector(Gd(e)))&&!c._p&&(d.instance=c,d.state.loading=5),Id.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Id.set(e,n),c||(a=u,o=e,l=n,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+o+"]")?s.loading=1:(o=a.createElement("link"),s.preload=o,o.addEventListener("load",function(){return s.loading|=1}),o.addEventListener("error",function(){return s.loading|=2}),pd(o,"link",l),et(o),a.head.appendChild(o))))),t&&null===r)throw Error(i(528,""));return d}if(t&&null!==r)throw Error(i(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Qd(n),(r=(n=Ze(u).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Kd(e){return'href="'+yt(e)+'"'}function Gd(e){return'link[rel="stylesheet"]['+e+"]"}function Yd(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Qd(e){return'[src="'+yt(e)+'"]'}function Xd(e){return"script[async]"+e}function Jd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+yt(n.href)+'"]');if(r)return t.instance=r,et(r),r;var a=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return et(r=(e.ownerDocument||e).createElement("style")),pd(r,"style",a),Zd(r,n.precedence,e),t.instance=r;case"stylesheet":a=Kd(n.href);var o=e.querySelector(Gd(a));if(o)return t.state.loading|=4,t.instance=o,et(o),o;r=Yd(n),(a=Id.get(a))&&ef(r,a),et(o=(e.ownerDocument||e).createElement("link"));var l=o;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),pd(o,"link",r),t.state.loading|=4,Zd(o,n.precedence,e),t.instance=o;case"script":return o=Qd(n.src),(a=e.querySelector(Xd(o)))?(t.instance=a,et(a),a):(r=n,(a=Id.get(o))&&tf(r=p({},n),a),et(a=(e=e.ownerDocument||e).createElement("script")),pd(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Zd(r,n.precedence,e));return t.instance}function Zd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,o=a,i=0;i<r.length;i++){var l=r[i];if(l.dataset.precedence===t)o=l;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function ef(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function tf(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var nf=null;function rf(e,t,n){if(null===nf){var r=new Map,a=nf=new Map;a.set(n,r)}else(r=(a=nf).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var o=n[a];if(!(o[Ge]||o[He]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var i=o.getAttribute(t)||"";i=e+i;var l=r.get(i);l?l.push(o):r.set(i,[o])}}return r}function af(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function of(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var lf=0;function sf(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)cf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var uf=null;function cf(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,uf=new Map,t.forEach(df,e),uf=null,sf.call(e))}function df(e,t){if(!(4&t.state.loading)){var n=uf.get(e);if(n)var r=n.get(null);else{n=new Map,uf.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var i=a[o];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(n.set(i.dataset.precedence,i),r=i)}r&&n.set(null,r)}i=(a=t.instance).getAttribute("data-precedence"),(o=n.get(i)||r)===r&&n.set(null,a),n.set(i,a),this.count++,r=sf.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),o?o.parentNode.insertBefore(a,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var ff={$$typeof:w,Provider:null,Consumer:null,_currentValue:A,_currentValue2:A,_threadCount:0};function pf(e,t,n,r,a,o,i,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function mf(e,t,n,r,a,o,i,l,s,u,c,d){return e=new pf(e,t,n,i,s,u,c,d,l),t=1,!0===o&&(t|=24),o=Fr(3,null,null,t),e.current=o,o.stateNode=e,(t=Ia()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},vo(o),e}function hf(e){return e?e=Dr:Dr}function gf(e,t,n,r,a,o){a=hf(a),null===r.context?r.context=a:r.pendingContext=a,(r=xo(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=wo(e,r,t))&&(Yu(n,0,t),ko(n,e,t))}function yf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function vf(e,t){yf(e,t),(e=e.alternate)&&yf(e,t)}function bf(e){if(13===e.tag||31===e.tag){var t=Rr(e,67108864);null!==t&&Yu(t,0,67108864),vf(e,67108864)}}function xf(e){if(13===e.tag||31===e.tag){var t=Ku(),n=Rr(e,t=Ae(t));null!==n&&Yu(n,0,t),vf(e,t)}}var wf=!0;function kf(e,t,n,r){var a=R.T;R.T=null;var o=L.p;try{L.p=2,zf(e,t,n,r)}finally{L.p=o,R.T=a}}function Sf(e,t,n,r){var a=R.T;R.T=null;var o=L.p;try{L.p=8,zf(e,t,n,r)}finally{L.p=o,R.T=a}}function zf(e,t,n,r){if(wf){var a=Ef(r);if(null===a)nd(e,t,r,Cf,n),Df(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Pf=Mf(Pf,e,t,n,r,a),!0;case"dragenter":return $f=Mf($f,e,t,n,r,a),!0;case"mouseover":return Nf=Mf(Nf,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Of.set(o,Mf(Of.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Rf.set(o,Mf(Rf.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Df(e,r),4&t&&-1<Af.indexOf(e)){for(;null!==a;){var o=Xe(a);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var i=Ce(o.pendingLanes);if(0!==i){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-xe(i);l.entanglements[1]|=s,i&=~s}Ac(o),0===(6&mu)&&(Lu=se()+500,Dc(0,!1))}}break;case 31:case 13:null!==(l=Rr(o,2))&&Yu(l,0,2),ec(),vf(o,2)}if(null===(o=Ef(r))&&nd(e,t,r,Cf,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else nd(e,t,r,null,n)}}function Ef(e){return jf(e=Rt(e))}var Cf=null;function jf(e){if(Cf=null,null!==(e=Qe(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=u(t)))return e;e=null}else if(31===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Cf=e,null}function _f(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ue()){case ce:return 2;case de:return 8;case fe:case pe:return 32;case me:return 268435456;default:return 32}default:return 32}}var Tf=!1,Pf=null,$f=null,Nf=null,Of=new Map,Rf=new Map,Lf=[],Af="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Df(e,t){switch(e){case"focusin":case"focusout":Pf=null;break;case"dragenter":case"dragleave":$f=null;break;case"mouseover":case"mouseout":Nf=null;break;case"pointerover":case"pointerout":Of.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rf.delete(t.pointerId)}}function Mf(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=Xe(t))&&bf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Ff(e){var t=Qe(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=u(n)))return e.blockedOn=t,void Fe(e.priority,function(){xf(n)})}else if(31===t){if(null!==(t=c(n)))return e.blockedOn=t,void Fe(e.priority,function(){xf(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function If(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ef(e.nativeEvent);if(null!==n)return null!==(t=Xe(n))&&bf(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Ot=r,n.target.dispatchEvent(r),Ot=null,t.shift()}return!0}function Hf(e,t,n){If(e)&&n.delete(t)}function Uf(){Tf=!1,null!==Pf&&If(Pf)&&(Pf=null),null!==$f&&If($f)&&($f=null),null!==Nf&&If(Nf)&&(Nf=null),Of.forEach(Hf),Rf.forEach(Hf)}function Wf(e,t){e.blockedOn===t&&(e.blockedOn=null,Tf||(Tf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Uf)))}var Bf=null;function Vf(e){Bf!==e&&(Bf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Bf===e&&(Bf=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===jf(r||n))continue;break}var o=Xe(n);null!==o&&(e.splice(t,3),t-=3,nl(o,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function qf(e){function t(t){return Wf(t,e)}null!==Pf&&Wf(Pf,e),null!==$f&&Wf($f,e),null!==Nf&&Wf(Nf,e),Of.forEach(t),Rf.forEach(t);for(var n=0;n<Lf.length;n++){var r=Lf[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Lf.length&&null===(n=Lf[0]).blockedOn;)Ff(n),null===n.blockedOn&&Lf.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],o=n[r+1],i=a[Ue]||null;if("function"===typeof o)i||Vf(n);else if(i){var l=null;if(o&&o.hasAttribute("formAction")){if(a=o,i=o[Ue]||null)l=i.formAction;else if(null!==jf(a))continue}else l=i.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),Vf(n)}}}function Kf(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return a=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==a&&(a(),a=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var r=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==a&&(a(),a=null)}}}function Gf(e){this._internalRoot=e}function Yf(e){this._internalRoot=e}Yf.prototype.render=Gf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));gf(t.current,Ku(),e,t,null,null)},Yf.prototype.unmount=Gf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;gf(e.current,2,null,e,null,null),ec(),t[We]=null}},Yf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Me();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lf.length&&0!==t&&t<Lf[n].priority;n++);Lf.splice(n,0,e),0===n&&Ff(e)}};var Qf=a.version;if("19.2.4"!==Qf)throw Error(i(527,Qf,"19.2.4"));L.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return d(a),e;if(o===r)return d(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,u=a.child;u;){if(u===n){l=!0,n=a,r=o;break}if(u===r){l=!0,r=a,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=a;break}if(u===r){l=!0,r=o,n=a;break}u=u.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?f(e):null)?null:e.stateNode};var Xf={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Jf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jf.isDisabled&&Jf.supportsFiber)try{ye=Jf.inject(Xf),ve=Jf}catch(ep){}}t.createRoot=function(e,t){if(!l(e))throw Error(i(299));var n=!1,r="",a=El,o=Cl,s=jl;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError)),t=mf(e,1,!1,null,0,n,r,null,a,o,s,Kf),e[We]=t.current,ed(e),new Gf(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(i(299));var r=!1,a="",o=El,s=Cl,u=jl,c=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(o=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(u=n.onRecoverableError),void 0!==n.formState&&(c=n.formState)),(t=mf(e,1,!0,t,0,r,a,c,o,s,u,Kf)).context=hf(null),n=t.current,(a=xo(r=Ae(r=Ku()))).callback=null,wo(n,a,r),n=r,t.current.lanes=n,Ne(t,n),Ac(t),e[We]=t.current,ed(e),new Yf(t)},t.version="19.2.4"},672(e,t,n){var r=n(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var i={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,i.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&i.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?i.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):"script"===n&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=u(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&i.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=u(t.as,t.crossOrigin);i.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else i.d.m(e)},t.requestFormReset=function(e){i.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.2.4"},391(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)},799(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},288(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),m=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function b(){}function x(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var w=x.prototype=new b;w.constructor=x,g(w,v.prototype),w.isPureReactComponent=!0;var k=Array.isArray;function S(){}var z={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function C(e,t,r){var a=r.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==a?a:null,props:r}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function P(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,u,c=!1;if(null===e)c=!0;else switch(l){case"bigint":case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0;break;case f:return P((c=e._init)(e._payload),t,a,o,i)}}if(c)return i=i(e),c=""===o?"."+T(e,0):o,k(i)?(a="",null!=c&&(a=c.replace(_,"$&/")+"/"),P(i,t,a,"",function(e){return e})):null!=i&&(j(i)&&(s=i,u=a+(null==i.key||e&&e.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+c,i=C(s.type,u,s.props)),t.push(i)),1;c=0;var d,p=""===o?".":o+":";if(k(e))for(var h=0;h<e.length;h++)c+=P(o=e[h],t,a,l=p+T(o,h),i);else if("function"===typeof(h=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=m&&d[m]||d["@@iterator"])?d:null))for(e=h.call(e),h=0;!(o=e.next()).done;)c+=P(o=o.value,t,a,l=p+T(o,h++),i);else if("object"===l){if("function"===typeof e.then)return P(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(S,S):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,o,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return c}function $(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",function(e){return t.call(n,e,a++)}),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},R={map:$,forEach:function(e,t,n){$(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $(e,function(){t++}),t},toArray:function(e){return $(e,function(e){return e})||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=p,t.Children=R,t.Component=v,t.Fragment=a,t.Profiler=i,t.PureComponent=x,t.StrictMode=o,t.Suspense=c,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return z.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=g({},e.props),a=e.key;if(null!=t)for(o in void 0!==t.key&&(a=""+t.key),t)!E.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var i=Array(o),l=0;l<o;l++)i[l]=arguments[l+2];r.children=i}return C(e.type,a,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,a={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)E.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return C(e,o,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=z.T,n={};z.T=n;try{var r=e(),a=z.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(S,O)}catch(o){O(o)}finally{null!==t&&null!==n.types&&(t.types=n.types),z.T=t}},t.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},t.use=function(e){return z.H.use(e)},t.useActionState=function(e,t,n){return z.H.useActionState(e,t,n)},t.useCallback=function(e,t){return z.H.useCallback(e,t)},t.useContext=function(e){return z.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return z.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return z.H.useEffect(e,t)},t.useEffectEvent=function(e){return z.H.useEffectEvent(e)},t.useId=function(){return z.H.useId()},t.useImperativeHandle=function(e,t,n){return z.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return z.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.H.useMemo(e,t)},t.useOptimistic=function(e,t){return z.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return z.H.useReducer(e,t,n)},t.useRef=function(e){return z.H.useRef(e)},t.useState=function(e){return z.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return z.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return z.H.useTransition()},t.version="19.2.4"},43(e,t,n){e.exports=n(288)},579(e,t,n){e.exports=n(799)},896(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,m=!1,h=!1,g=!1,y=!1,v="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function k(e){if(g=!1,w(e),!h)if(null!==r(u))h=!0,z||(z=!0,S());else{var t=r(c);null!==t&&N(k,t.startTime-e)}}var S,z=!1,E=-1,C=5,j=-1;function _(){return!!y||!(t.unstable_now()-j<C)}function T(){if(y=!1,z){var e=t.unstable_now();j=e;var n=!0;try{e:{h=!1,g&&(g=!1,b(E),E=-1),m=!0;var o=p;try{t:{for(w(e),f=r(u);null!==f&&!(f.expirationTime>e&&_());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){f.callback=l,w(e),n=!0;break t}f===r(u)&&a(u),w(e)}else a(u);f=r(u)}if(null!==f)n=!0;else{var s=r(c);null!==s&&N(k,s.startTime-e),n=!1}}break e}finally{f=null,p=o,m=!1}n=void 0}}finally{n?S():z=!1}}}if("function"===typeof x)S=function(){x(T)};else if("undefined"!==typeof MessageChannel){var P=new MessageChannel,$=P.port2;P.port1.onmessage=T,S=function(){$.postMessage(null)}}else S=function(){v(T,0)};function N(e,n){E=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){y=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(b(E),E=-1):g=!0,N(k,o-i))):(e.sortIndex=l,n(u,e),h||m||(h=!0,z||(z=!0,S()))),e},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853(e,t,n){e.exports=n(896)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>i[e]=()=>r[e]);return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/klara-queen/",n.nc=void 0;var r=n(43),a=n.t(r,2),o=n(391),i="popstate";function l(e){return"object"===typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function s(){return h(function(e,t){let n=t.state?.masked,{pathname:r,search:a,hash:o}=n||e.location;return f("",{pathname:r,search:a,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"===typeof t?t:p(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function u(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function c(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function f(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?m(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10),unstable_mask:a}}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function m(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function h(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:a=document.defaultView,v5Compat:o=!1}=r,s=a.history,u="POP",c=null,p=m();function m(){return(s.state||{idx:null}).idx}function h(){u="POP";let e=m(),t=null==e?null:e-p;p=e,c&&c({action:u,location:v.location,delta:t})}function y(e){return g(e)}null==p&&(p=0,s.replaceState({...s.state,idx:p},""));let v={get action(){return u},get location(){return e(a,s)},listen(e){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(i,h),c=e,()=>{a.removeEventListener(i,h),c=null}},createHref:e=>t(a,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){u="PUSH";let r=l(e)?e:f(v.location,e,t);n&&n(r,e),p=m()+1;let i=d(r,p),h=v.createHref(r.unstable_mask||r);try{s.pushState(i,"",h)}catch(g){if(g instanceof DOMException&&"DataCloneError"===g.name)throw g;a.location.assign(h)}o&&c&&c({action:u,location:v.location,delta:1})},replace:function(e,t){u="REPLACE";let r=l(e)?e:f(v.location,e,t);n&&n(r,e),p=m();let a=d(r,p),i=v.createHref(r.unstable_mask||r);s.replaceState(a,"",i),o&&c&&c({action:u,location:v.location,delta:0})},go:e=>s.go(e)};return v}function g(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),u(n,"No window.location.(origin|href) available to create URL");let r="string"===typeof e?e:p(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}new WeakMap;function y(e,t){return v(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function v(e,t,n,r){let a=O(("string"===typeof t?m(t):t).pathname||"/",n);if(null==a)return null;let o=b(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=N(a);i=T(o[l],e,r)}return i}function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=function(e,o){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,l=arguments.length>3?arguments[3]:void 0,s={relativePath:void 0===l?e.path||"":l,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};if(s.relativePath.startsWith("/")){if(!s.relativePath.startsWith(r)&&i)return;u(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length)}let c=I([r,s.relativePath]),d=n.concat(s);e.children&&e.children.length>0&&(u(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),b(e.children,t,d,c,i)),(null!=e.path||e.index)&&t.push({path:c,score:_(c,e.index),routesMeta:d})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of x(e.path))o(e,t,!0,n);else o(e,t)}),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=x(r.join("/")),l=[];return l.push(...i.map(e=>""===e?o:[o,e].join("/"))),a&&l.push(...i),l.map(t=>e.startsWith("/")&&""===t?"/":t)}var w=/^:[\w-]+$/,k=3,S=2,z=1,E=10,C=-2,j=e=>"*"===e;function _(e,t){let n=e.split("/"),r=n.length;return n.some(j)&&(r+=C),t&&(r+=S),n.filter(e=>!j(e)).reduce((e,t)=>e+(w.test(t)?k:""===t?z:E),r)}function T(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),i.push({params:a,pathname:I([o,c.pathname]),pathnameBase:H(I([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=I([o,c.pathnameBase]))}return i}function P(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=$(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:o,pathnameBase:i,pattern:e}}function $(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];c("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,a,o)=>{if(r.push({paramName:t,isOptional:null!=n}),n){let t=o.charAt(a+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function N(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return c(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function O(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}var R=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function L(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function A(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function D(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function M(e){let t=D(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function F(e,t,n){let r,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=m(e):(r={...e},u(!r.pathname||!r.pathname.includes("?"),A("?","pathname","search",r)),u(!r.pathname||!r.pathname.includes("#"),A("#","pathname","hash",r)),u(!r.search||!r.search.includes("#"),A("#","search","hash",r)));let o,i=""===e||""===r.pathname,l=i?"/":r.pathname;if(null==l)o=n;else{let e=t.length-1;if(!a&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}o=e>=0?t[e]:"/"}let s=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:r,search:a="",hash:o=""}="string"===typeof e?m(e):e;return r?(r=r.replace(/\/\/+/g,"/"),t=r.startsWith("/")?L(r.substring(1),"/"):L(r,n)):t=n,{pathname:t,search:U(a),hash:W(o)}}(r,o),c=l&&"/"!==l&&l.endsWith("/"),d=(i||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!c&&!d||(s.pathname+="/"),s}var I=e=>e.join("/").replace(/\/\/+/g,"/"),H=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),U=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",W=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var B=class{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function V(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}function q(e){return e.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var K="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function G(e,t){let n=e;if("string"!==typeof n||!R.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,a=!1;if(K)try{let e=new URL(window.location.href),r=n.startsWith("//")?new URL(e.protocol+n):new URL(n),o=O(r.pathname,t);r.origin===e.origin&&null!=o?n=o+r.search+r.hash:a=!0}catch(o){c(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:a,to:n}}Symbol("Uninstrumented");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Y=["POST","PUT","PATCH","DELETE"],Q=(new Set(Y),["GET",...Y]);new Set(Q),Symbol("ResetLoaderData");var X=r.createContext(null);X.displayName="DataRouter";var J=r.createContext(null);J.displayName="DataRouterState";var Z=r.createContext(!1);function ee(){return r.useContext(Z)}var te=r.createContext({isTransitioning:!1});te.displayName="ViewTransition";var ne=r.createContext(new Map);ne.displayName="Fetchers";var re=r.createContext(null);re.displayName="Await";var ae=r.createContext(null);ae.displayName="Navigation";var oe=r.createContext(null);oe.displayName="Location";var ie=r.createContext({outlet:null,matches:[],isDataRoute:!1});ie.displayName="Route";var le=r.createContext(null);le.displayName="RouteError";var se="REACT_ROUTER_ERROR";function ue(){return null!=r.useContext(oe)}function ce(){return u(ue(),"useLocation() may be used only in the context of a <Router> component."),r.useContext(oe).location}var de="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fe(e){r.useContext(ae).static||r.useLayoutEffect(e)}function pe(){let{isDataRoute:e}=r.useContext(ie);return e?function(){let{router:e}=ze("useNavigate"),t=Ce("useNavigate"),n=r.useRef(!1);fe(()=>{n.current=!0});let a=r.useCallback(async function(r){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(n.current,de),n.current&&("number"===typeof r?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...a}))},[e,t]);return a}():function(){u(ue(),"useNavigate() may be used only in the context of a <Router> component.");let e=r.useContext(X),{basename:t,navigator:n}=r.useContext(ae),{matches:a}=r.useContext(ie),{pathname:o}=ce(),i=JSON.stringify(M(a)),l=r.useRef(!1);fe(()=>{l.current=!0});let s=r.useCallback(function(r){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(c(l.current,de),!l.current)return;if("number"===typeof r)return void n.go(r);let s=F(r,JSON.parse(i),o,"path"===a.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:I([t,s.pathname])),(a.replace?n.replace:n.push)(s,a.state,a)},[t,n,i,o,e]);return s}()}r.createContext(null);function me(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:n}=r.useContext(ie),{pathname:a}=ce(),o=JSON.stringify(M(n));return r.useMemo(()=>F(e,JSON.parse(o),a,"path"===t),[e,o,a,t])}function he(e,t,n){u(ue(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=r.useContext(ae),{matches:o}=r.useContext(ie),i=o[o.length-1],l=i?i.params:{},s=i?i.pathname:"/",d=i?i.pathnameBase:"/",f=i&&i.route;{let e=f&&f.path||"";Te(s,!f||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let p,h=ce();if(t){let e="string"===typeof t?m(t):t;u("/"===d||e.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`),p=e}else p=h;let g=p.pathname||"/",v=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=y(e,{pathname:v});c(f||null!=b,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),c(null==b||void 0!==b[b.length-1].route.element||void 0!==b[b.length-1].route.Component||void 0!==b[b.length-1].route.lazy,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=ke(b&&b.map(e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:I([d,a.encodeLocation?a.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:I([d,a.encodeLocation?a.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),o,n);return t&&x?r.createElement(oe.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...p},navigationType:"POP"}},x):x}function ge(){let e=je(),t=V(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},i={padding:"2px 4px",backgroundColor:a},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=r.createElement(r.Fragment,null,r.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),r.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",r.createElement("code",{style:i},"ErrorBoundary")," or"," ",r.createElement("code",{style:i},"errorElement")," prop on your route.")),r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:o},n):null,l)}var ye=r.createElement(ge,null),ve=class extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&"object"===typeof e&&e&&"digest"in e&&"string"===typeof e.digest){const t=function(e){if(e.startsWith(`${se}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText)return new B(t.status,t.statusText,t.data)}catch{}}(e.digest);t&&(e=t)}let t=void 0!==e?r.createElement(ie.Provider,{value:this.props.routeContext},r.createElement(le.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?r.createElement(xe,{error:e},t):t}};ve.contextType=Z;var be=new WeakMap;function xe(e){let{children:t,error:n}=e,{basename:a}=r.useContext(ae);if("object"===typeof n&&n&&"digest"in n&&"string"===typeof n.digest){let e=function(e){if(e.startsWith(`${se}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText&&"string"===typeof t.location&&"boolean"===typeof t.reloadDocument&&"boolean"===typeof t.replace)return t}catch{}}(n.digest);if(e){let t=be.get(n);if(t)throw t;let o=G(e.location,a);if(K&&!be.get(n)){if(!o.isExternal&&!e.reloadDocument){const t=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:e.replace}));throw be.set(n,t),t}window.location.href=o.absoluteURL||o.to}return r.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return t}function we(e){let{routeContext:t,match:n,children:a}=e,o=r.useContext(X);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(ie.Provider,{value:t},a)}function ke(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,a=n?.state;if(null==e){if(!a)return null;if(a.errors)e=a.matches;else{if(0!==t.length||a.initialized||!(a.matches.length>0))return null;e=a.matches}}let o=e,i=a?.errors;if(null!=i){let e=o.findIndex(e=>e.route.id&&void 0!==i?.[e.route.id]);u(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let l=!1,s=-1;if(n&&a){l=a.renderFallback;for(let e=0;e<o.length;e++){let t=o[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:r}=a,i=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!r||void 0===r[t.route.id]);if(t.route.lazy||i){n.isStatic&&(l=!0),o=s>=0?o.slice(0,s+1):[o[0]];break}}}}let c=n?.onError,d=a&&c?(e,t)=>{c(e,{location:a.location,params:a.matches?.[0]?.params??{},unstable_pattern:q(a.matches),errorInfo:t})}:void 0;return o.reduceRight((e,n,u)=>{let c,f=!1,p=null,m=null;a&&(c=i&&n.route.id?i[n.route.id]:void 0,p=n.route.errorElement||ye,l&&(s<0&&0===u?(Te("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,m=null):s===u&&(f=!0,m=n.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,u+1)),g=()=>{let t;return t=c?p:f?m:n.route.Component?r.createElement(n.route.Component,null):n.route.element?n.route.element:e,r.createElement(we,{match:n,routeContext:{outlet:e,matches:h,isDataRoute:null!=a},children:t})};return a&&(n.route.ErrorBoundary||n.route.errorElement||0===u)?r.createElement(ve,{location:a.location,revalidation:a.revalidation,component:p,error:c,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:d}):g()},null)}function Se(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ze(e){let t=r.useContext(X);return u(t,Se(e)),t}function Ee(e){let t=r.useContext(J);return u(t,Se(e)),t}function Ce(e){let t=function(e){let t=r.useContext(ie);return u(t,Se(e)),t}(e),n=t.matches[t.matches.length-1];return u(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function je(){let e=r.useContext(le),t=Ee("useRouteError"),n=Ce("useRouteError");return void 0!==e?e:t.errors?.[n]}var _e={};function Te(e,t,n){t||_e[e]||(_e[e]=!0,c(!1,n))}var Pe={};function $e(e,t){e||Pe[t]||(Pe[t]=!0,console.warn(t))}a.useOptimistic;r.memo(Ne);function Ne(e){let{routes:t,future:n,state:r,isStatic:a,onError:o}=e;return he(t,void 0,{state:r,isStatic:a,onError:o,future:n})}function Oe(e){u(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Re(e){let{basename:t="/",children:n=null,location:a,navigationType:o="POP",navigator:i,static:l=!1,unstable_useTransitions:s}=e;u(!ue(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=t.replace(/^\/*/,"/"),f=r.useMemo(()=>({basename:d,navigator:i,static:l,unstable_useTransitions:s,future:{}}),[d,i,l,s]);"string"===typeof a&&(a=m(a));let{pathname:p="/",search:h="",hash:g="",state:y=null,key:v="default",unstable_mask:b}=a,x=r.useMemo(()=>{let e=O(p,d);return null==e?null:{location:{pathname:e,search:h,hash:g,state:y,key:v,unstable_mask:b},navigationType:o}},[d,p,h,g,y,v,o,b]);return c(null!=x,`<Router basename="${d}"> is not able to match the URL "${p}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),null==x?null:r.createElement(ae.Provider,{value:f},r.createElement(oe.Provider,{children:n,value:x}))}function Le(e){let{children:t,location:n}=e;return he(Ae(t),n)}r.Component;function Ae(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return r.Children.forEach(e,(e,a)=>{if(!r.isValidElement(e))return;let o=[...t,a];if(e.type===r.Fragment)return void n.push.apply(n,Ae(e.props.children,o));u(e.type===Oe,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),u(!e.props.index||!e.props.children,"An index route cannot have child routes.");let i={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=Ae(e.props.children,o)),n.push(i)}),n}var De="get",Me="application/x-www-form-urlencoded";function Fe(e){return"undefined"!==typeof HTMLElement&&e instanceof HTMLElement}var Ie=null;var He=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ue(e){return null==e||He.has(e)?e:(c(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Me}"`),null)}function We(e,t){let n,r,a,o,i;if(Fe(l=e)&&"form"===l.tagName.toLowerCase()){let i=e.getAttribute("action");r=i?O(i,t):null,n=e.getAttribute("method")||De,a=Ue(e.getAttribute("enctype"))||Me,o=new FormData(e)}else if(function(e){return Fe(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Fe(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||i.getAttribute("action");if(r=l?O(l,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||De,a=Ue(e.getAttribute("formenctype"))||Ue(i.getAttribute("enctype"))||Me,o=new FormData(i,e),!function(){if(null===Ie)try{new FormData(document.createElement("form"),0),Ie=!1}catch(e){Ie=!0}return Ie}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else{if(Fe(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=De,r=null,a=Me,i=e}var l;return o&&"text/plain"===a&&(i=o,o=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:o,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function Be(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function Ve(e,t,n,r){let a="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return n?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${r}`:a.pathname=`${a.pathname}.${r}`:"/"===a.pathname?a.pathname=`_root.${r}`:t&&"/"===O(a.pathname,t)?a.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function qe(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ke(e){return null!=e&&"string"===typeof e.page}function Ge(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Ye(e,t,n,r,a,o){let i=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter((e,t)=>i(e,t)||l(e,t)):"data"===o?t.filter((t,o)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(i(t,o)||l(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function Qe(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1),[...new Set(r)];var r}function Xe(e,t){let n=new Set,r=new Set(t);return e.reduce((e,a)=>{if(t&&!Ke(a)&&"script"===a.as&&a.href&&r.has(a.href))return e;let o=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(a));return n.has(o)||(n.add(o),e.push({key:o,link:a})),e},[])}function Je(e,t){return"lazy"===e.mode&&!0===t}function Ze(){let e=r.useContext(X);return Be(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function et(){let e=r.useContext(J);return Be(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var tt=r.createContext(void 0);function nt(){let e=r.useContext(tt);return Be(e,"You must render this element inside a <HydratedRouter> element"),e}function rt(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function at(e,t,n){if(n&&!st)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}tt.displayName="FrameworkContext";function ot(e){let{page:t,...n}=e,{router:a}=Ze(),o=r.useMemo(()=>y(a.routes,t,a.basename),[a.routes,t,a.basename]);return o?r.createElement(lt,{page:t,matches:o,...n}):null}function it(e){let{manifest:t,routeModules:n}=nt(),[a,o]=r.useState([]);return r.useEffect(()=>{let r=!1;return async function(e,t,n){let r=await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await qe(r,n);return e.links?e.links():[]}return[]}));return Xe(r.flat(1).filter(Ge).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{r||o(e)}),()=>{r=!0}},[e,t,n]),a}function lt(e){let{page:t,matches:n,...a}=e,o=ce(),{future:i,manifest:l,routeModules:s}=nt(),{basename:u}=Ze(),{loaderData:c,matches:d}=et(),f=r.useMemo(()=>Ye(t,n,d,l,o,"data"),[t,n,d,l,o]),p=r.useMemo(()=>Ye(t,n,d,l,o,"assets"),[t,n,d,l,o]),m=r.useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let e=new Set,r=!1;if(n.forEach(t=>{let n=l.routes[t.route.id];n&&n.hasLoader&&(!f.some(e=>e.route.id===t.route.id)&&t.route.id in c&&s[t.route.id]?.shouldRevalidate||n.hasClientLoader?r=!0:e.add(t.route.id))}),0===e.size)return[];let a=Ve(t,u,i.unstable_trailingSlashAwareDataRequests,"data");return r&&e.size>0&&a.searchParams.set("_routes",n.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[a.pathname+a.search]},[u,i.unstable_trailingSlashAwareDataRequests,c,o,l,f,n,t,s]),h=r.useMemo(()=>Qe(p,l),[p,l]),g=it(p);return r.createElement(r.Fragment,null,m.map(e=>r.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...a})),h.map(e=>r.createElement("link",{key:e,rel:"modulepreload",href:e,...a})),g.map(e=>{let{key:t,link:n}=e;return r.createElement("link",{key:t,nonce:a.nonce,...n,crossOrigin:n.crossOrigin??a.crossOrigin})}))}var st=!1;function ut(e){let{manifest:t,serverHandoffString:n,isSpaMode:a,renderMeta:o,routeDiscovery:i,ssr:l}=nt(),{router:s,static:u,staticContext:c}=Ze(),{matches:d}=et(),f=ee(),p=Je(i,l);o&&(o.didRenderScripts=!0);let m=at(d,null,a);r.useEffect(()=>{st=!0},[]);let h=r.useMemo(()=>{if(f)return null;let a=c?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=u?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${p?"":`import ${JSON.stringify(t.url)}`};\n${m.map((e,n)=>{let r=`route${n}`,a=t.routes[e.route.id];Be(a,`Route ${e.route.id} not found in manifest`);let{clientActionModule:o,clientLoaderModule:i,clientMiddlewareModule:l,hydrateFallbackModule:s,module:u}=a,c=[...o?[{module:o,varName:`${r}_clientAction`}]:[],...i?[{module:i,varName:`${r}_clientLoader`}]:[],...l?[{module:l,varName:`${r}_clientMiddleware`}]:[],...s?[{module:s,varName:`${r}_HydrateFallback`}]:[],{module:u,varName:`${r}_main`}];return 1===c.length?`import * as ${r} from ${JSON.stringify(u)};`:[c.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${c.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${p?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,a=new Set(t.state.matches.map(e=>e.route.id)),o=t.state.location.pathname.split("/").filter(Boolean),i=["/"];for(o.pop();o.length>0;)i.push(`/${o.join("/")}`),o.pop();i.forEach(e=>{let n=y(t.routes,e,t.basename);n&&n.forEach(e=>a.add(e.route.id))});let l=[...a].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:l,sri:!!n||void 0}}(t,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${m.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return r.createElement(r.Fragment,null,r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:a},type:void 0}),r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:o},type:"module",async:!0}))},[]),g=st||f?[]:(v=t.entry.imports.concat(Qe(m,t,{includeHydrateFallback:!0})),[...new Set(v)]);var v;let b="object"===typeof t.sri?t.sri:{};return $e(!f,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),st||f?null:r.createElement(r.Fragment,null,"object"===typeof t.sri?r.createElement("script",{...e,"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:b})}}):null,p?null:r.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:b[t.url],suppressHydrationWarning:!0}),r.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:b[t.entry.module],suppressHydrationWarning:!0}),g.map(t=>r.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:b[t],suppressHydrationWarning:!0})),h)}function ct(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}r.Component;function dt(e){let{error:t,isOutsideRemixApp:n}=e;console.error(t);let a,o=r.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(V(t))return r.createElement(ft,{title:"Unhandled Thrown Response!"},r.createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),o);if(t instanceof Error)a=t;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);a=new Error(e)}return r.createElement(ft,{title:"Application Error!",isOutsideRemixApp:n},r.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),r.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},a.stack),o)}function ft(e){let{title:t,renderScripts:n,isOutsideRemixApp:a,children:o}=e,{routeModules:i}=nt();return i.root?.Layout&&!a?o:r.createElement("html",{lang:"en"},r.createElement("head",null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),r.createElement("title",null,t)),r.createElement("body",null,r.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,n?r.createElement(ut,null):null)))}var pt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{pt&&(window.__reactRouterVersion="7.13.2")}catch(Rl){}function mt(e){let{basename:t,children:n,unstable_useTransitions:a,window:o}=e,i=r.useRef();null==i.current&&(i.current=s({window:o,v5Compat:!0}));let l=i.current,[u,c]=r.useState({action:l.action,location:l.location}),d=r.useCallback(e=>{!1===a?c(e):r.startTransition(()=>c(e))},[a]);return r.useLayoutEffect(()=>l.listen(d),[l,d]),r.createElement(Re,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:l,unstable_useTransitions:a})}var ht=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gt=r.forwardRef(function(e,t){let{onClick:n,discover:a="render",prefetch:o="none",relative:i,reloadDocument:l,replace:s,unstable_mask:c,state:d,target:f,to:m,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:y,...v}=e,{basename:b,navigator:x,unstable_useTransitions:w}=r.useContext(ae),k="string"===typeof m&&ht.test(m),S=G(m,b);m=S.to;let z=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(ue(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=r.useContext(ae),{hash:o,pathname:i,search:l}=me(e,{relative:t}),s=i;return"/"!==n&&(s="/"===i?n:I([n,i])),a.createHref({pathname:s,search:l,hash:o})}(m,{relative:i}),E=ce(),C=null;if(c){let e=F(c,[],E.unstable_mask?E.unstable_mask.pathname:"/",!0);"/"!==b&&(e.pathname="/"===e.pathname?b:I([b,e.pathname])),C=x.createHref(e)}let[j,_,T]=function(e,t){let n=r.useContext(tt),[a,o]=r.useState(!1),[i,l]=r.useState(!1),{onFocus:s,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=t,p=r.useRef(null);r.useEffect(()=>{if("render"===e&&l(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{l(e.isIntersecting)})},{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}},[e]),r.useEffect(()=>{if(a){let e=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(e)}}},[a]);let m=()=>{o(!0)},h=()=>{o(!1),l(!1)};return n?"intent"!==e?[i,p,{}]:[i,p,{onFocus:rt(s,m),onBlur:rt(u,h),onMouseEnter:rt(c,m),onMouseLeave:rt(d,h),onTouchStart:rt(f,m)}]:[!1,p,{}]}(o,v),P=function(e){let{target:t,replace:n,unstable_mask:a,state:o,preventScrollReset:i,relative:l,viewTransition:s,unstable_defaultShouldRevalidate:u,unstable_useTransitions:c}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=pe(),f=ce(),m=me(e,{relative:l});return r.useCallback(h=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(h,t)){h.preventDefault();let t=void 0!==n?n:p(f)===p(m),g=()=>d(e,{replace:t,unstable_mask:a,state:o,preventScrollReset:i,relative:l,viewTransition:s,unstable_defaultShouldRevalidate:u});c?r.startTransition(()=>g()):g()}},[f,d,m,n,a,o,t,e,i,l,s,u,c])}(m,{replace:s,unstable_mask:c,state:d,target:f,preventScrollReset:h,relative:i,viewTransition:g,unstable_defaultShouldRevalidate:y,unstable_useTransitions:w});let $=!(S.isExternal||l),N=r.createElement("a",{...v,...T,href:($?C:void 0)||S.absoluteURL||z,onClick:$?function(e){n&&n(e),e.defaultPrevented||P(e)}:n,ref:ct(t,_),target:f,"data-discover":k||"render"!==a?void 0:"true"});return j&&!k?r.createElement(r.Fragment,null,N,r.createElement(ot,{page:z})):N});gt.displayName="Link",r.forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:a=!1,className:o="",end:i=!1,style:l,to:s,viewTransition:c,children:d,...f}=e,p=me(s,{relative:f.relative}),m=ce(),h=r.useContext(J),{navigator:g,basename:y}=r.useContext(ae),v=null!=h&&function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.useContext(te);u(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=bt("useViewTransitionState"),o=me(e,{relative:t});if(!n.isTransitioning)return!1;let i=O(n.currentLocation.pathname,a)||n.currentLocation.pathname,l=O(n.nextLocation.pathname,a)||n.nextLocation.pathname;return null!=P(o.pathname,l)||null!=P(o.pathname,i)}(p)&&!0===c,b=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,x=m.pathname,w=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;a||(x=x.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&y&&(w=O(w,y)||w);const k="/"!==b&&b.endsWith("/")?b.length-1:b.length;let S,z=x===b||!i&&x.startsWith(b)&&"/"===x.charAt(k),E=null!=w&&(w===b||!i&&w.startsWith(b)&&"/"===w.charAt(b.length)),C={isActive:z,isPending:E,isTransitioning:v},j=z?n:void 0;S="function"===typeof o?o(C):[o,z?"active":null,E?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let _="function"===typeof l?l(C):l;return r.createElement(gt,{...f,"aria-current":j,className:S,ref:t,style:_,to:s,viewTransition:c},"function"===typeof d?d(C):d)}).displayName="NavLink";var yt=r.forwardRef((e,t)=>{let{discover:n="render",fetcherKey:a,navigate:o,reloadDocument:i,replace:l,state:s,method:c=De,action:d,onSubmit:f,relative:m,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:y,...v}=e,{unstable_useTransitions:b}=r.useContext(ae),x=kt(),w=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:n}=r.useContext(ae),a=r.useContext(ie);u(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),i={...me(e||".",{relative:t})},l=ce();if(null==e){i.search=l.search;let e=new URLSearchParams(i.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();i.search=n?`?${n}`:""}}e&&"."!==e||!o.route.index||(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(i.pathname="/"===i.pathname?n:I([n,i.pathname]));return p(i)}(d,{relative:m}),k="get"===c.toLowerCase()?"get":"post",S="string"===typeof d&&ht.test(d);return r.createElement("form",{ref:t,method:k,action:w,onSubmit:i?f:e=>{if(f&&f(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||c,i=()=>x(t||e.currentTarget,{fetcherKey:a,method:n,navigate:o,replace:l,state:s,relative:m,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:y});b&&!1!==o?r.startTransition(()=>i()):i()},...v,"data-discover":S||"render"!==n?void 0:"true"})});function vt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bt(e){let t=r.useContext(X);return u(t,vt(e)),t}yt.displayName="Form";var xt=0,wt=()=>`__${String(++xt)}__`;function kt(){let{router:e}=bt("useSubmit"),{basename:t}=r.useContext(ae),n=Ce("useRouteId"),a=e.fetch,o=e.navigate;return r.useCallback(async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:l,encType:s,formData:u,body:c}=We(e,t);if(!1===r.navigate){let e=r.fetcherKey||wt();await a(e,n,r.action||i,{unstable_defaultShouldRevalidate:r.unstable_defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:u,body:c,formMethod:r.method||l,formEncType:r.encType||s,flushSync:r.flushSync})}else await o(r.action||i,{unstable_defaultShouldRevalidate:r.unstable_defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:u,body:c,formMethod:r.method||l,formEncType:r.encType||s,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[a,o,t,n])}var St=function(){return St=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},St.apply(this,arguments)};Object.create;function zt(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Et={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ct="-ms-",jt="-moz-",_t="-webkit-",Tt="comm",Pt="rule",$t="decl",Nt="@keyframes",Ot=Math.abs,Rt=String.fromCharCode,Lt=Object.assign;function At(e){return e.trim()}function Dt(e,t){return(e=t.exec(e))?e[0]:e}function Mt(e,t,n){return e.replace(t,n)}function Ft(e,t,n){return e.indexOf(t,n)}function It(e,t){return 0|e.charCodeAt(t)}function Ht(e,t,n){return e.slice(t,n)}function Ut(e){return e.length}function Wt(e){return e.length}function Bt(e,t){return t.push(e),e}function Vt(e,t){return e.filter(function(e){return!Dt(e,t)})}var qt=1,Kt=1,Gt=0,Yt=0,Qt=0,Xt="";function Jt(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:qt,column:Kt,length:i,return:"",siblings:l}}function Zt(e,t){return Lt(Jt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function en(e){for(;e.root;)e=Zt(e.root,{children:[e]});Bt(e,e.siblings)}function tn(){return Qt=Yt>0?It(Xt,--Yt):0,Kt--,10===Qt&&(Kt=1,qt--),Qt}function nn(){return Qt=Yt<Gt?It(Xt,Yt++):0,Kt++,10===Qt&&(Kt=1,qt++),Qt}function rn(){return It(Xt,Yt)}function an(){return Yt}function on(e,t){return Ht(Xt,e,t)}function ln(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sn(e){return qt=Kt=1,Gt=Ut(Xt=e),Yt=0,[]}function un(e){return Xt="",e}function cn(e){return At(on(Yt-1,pn(91===e?e+2:40===e?e+1:e)))}function dn(e){for(;(Qt=rn())&&Qt<33;)nn();return ln(e)>2||ln(Qt)>3?"":" "}function fn(e,t){for(;--t&&nn()&&!(Qt<48||Qt>102||Qt>57&&Qt<65||Qt>70&&Qt<97););return on(e,an()+(t<6&&32==rn()&&32==nn()))}function pn(e){for(;nn();)switch(Qt){case e:return Yt;case 34:case 39:34!==e&&39!==e&&pn(Qt);break;case 40:41===e&&pn(e);break;case 92:nn()}return Yt}function mn(e,t){for(;nn()&&e+Qt!==57&&(e+Qt!==84||47!==rn()););return"/*"+on(t,Yt-1)+"*"+Rt(47===e?e:nn())}function hn(e){for(;!ln(rn());)nn();return on(e,Yt)}function gn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function yn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case $t:return e.return=e.return||e.value;case Tt:return"";case Nt:return e.return=e.value+"{"+gn(e.children,r)+"}";case Pt:if(!Ut(e.value=e.props.join(",")))return""}return Ut(n=gn(e.children,r))?e.return=e.value+"{"+n+"}":""}function vn(e,t,n){switch(function(e,t){return 45^It(e,0)?(((t<<2^It(e,0))<<2^It(e,1))<<2^It(e,2))<<2^It(e,3):0}(e,t)){case 5103:return _t+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return _t+e+e;case 4855:return _t+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return jt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return _t+e+jt+e+Ct+e+e;case 5936:switch(It(e,t+11)){case 114:return _t+e+Ct+Mt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return _t+e+Ct+Mt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return _t+e+Ct+Mt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return _t+e+Ct+e+e;case 6165:return _t+e+Ct+"flex-"+e+e;case 5187:return _t+e+Mt(e,/(\w+).+(:[^]+)/,_t+"box-$1$2"+Ct+"flex-$1$2")+e;case 5443:return _t+e+Ct+"flex-item-"+Mt(e,/flex-|-self/g,"")+(Dt(e,/flex-|baseline/)?"":Ct+"grid-row-"+Mt(e,/flex-|-self/g,""))+e;case 4675:return _t+e+Ct+"flex-line-pack"+Mt(e,/align-content|flex-|-self/g,"")+e;case 5548:return _t+e+Ct+Mt(e,"shrink","negative")+e;case 5292:return _t+e+Ct+Mt(e,"basis","preferred-size")+e;case 6060:return _t+"box-"+Mt(e,"-grow","")+_t+e+Ct+Mt(e,"grow","positive")+e;case 4554:return _t+Mt(e,/([^-])(transform)/g,"$1"+_t+"$2")+e;case 6187:return Mt(Mt(Mt(e,/(zoom-|grab)/,_t+"$1"),/(image-set)/,_t+"$1"),e,"")+e;case 5495:case 3959:return Mt(e,/(image-set\([^]*)/,_t+"$1$`$1");case 4968:return Mt(Mt(e,/(.+:)(flex-)?(.*)/,_t+"box-pack:$3"+Ct+"flex-pack:$3"),/space-between/,"justify")+_t+e+e;case 4200:if(!Dt(e,/flex-|baseline/))return Ct+"grid-column-align"+Ht(e,t)+e;break;case 2592:case 3360:return Ct+Mt(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Dt(e.props,/grid-\w+-end/)})?~Ft(e+(n=n[t].value),"span",0)?e:Ct+Mt(e,"-start","")+e+Ct+"grid-row-span:"+(~Ft(n,"span",0)?Dt(n,/\d+/):+Dt(n,/\d+/)-+Dt(e,/\d+/))+";":Ct+Mt(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Dt(e.props,/grid-\w+-start/)})?e:Ct+Mt(Mt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Mt(e,/(.+)-inline(.+)/,_t+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(It(e,t+1)){case 109:if(45!==It(e,t+4))break;case 102:return Mt(e,/(.+:)(.+)-([^]+)/,"$1"+_t+"$2-$3$1"+jt+(108==It(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ft(e,"stretch",0)?vn(Mt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Mt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,o,i,l){return Ct+n+":"+r+l+(a?Ct+n+"-span:"+(o?i:+i-+r)+l:"")+e});case 4949:if(121===It(e,t+6))return Mt(e,":",":"+_t)+e;break;case 6444:switch(It(e,45===It(e,14)?18:11)){case 120:return Mt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_t+(45===It(e,14)?"inline-":"")+"box$3$1"+_t+"$2$3$1"+Ct+"$2box$3")+e;case 100:return Mt(e,":",":"+Ct)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Mt(e,"scroll-","scroll-snap-")+e}return e}function bn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case $t:return void(e.return=vn(e.value,e.length,n));case Nt:return gn([Zt(e,{value:Mt(e.value,"@","@"+_t)})],r);case Pt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Dt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":en(Zt(e,{props:[Mt(t,/:(read-\w+)/,":-moz-$1")]})),en(Zt(e,{props:[t]})),Lt(e,{props:Vt(n,r)});break;case"::placeholder":en(Zt(e,{props:[Mt(t,/:(plac\w+)/,":"+_t+"input-$1")]})),en(Zt(e,{props:[Mt(t,/:(plac\w+)/,":-moz-$1")]})),en(Zt(e,{props:[Mt(t,/:(plac\w+)/,Ct+"input-$1")]})),en(Zt(e,{props:[t]})),Lt(e,{props:Vt(n,r)})}return""})}}function xn(e){return un(wn("",null,null,null,[""],e=sn(e),0,[0],e))}function wn(e,t,n,r,a,o,i,l,s){for(var u=0,c=0,d=i,f=0,p=0,m=0,h=1,g=1,y=1,v=0,b="",x=a,w=o,k=r,S=b;g;)switch(m=v,v=nn()){case 40:if(108!=m&&58==It(S,d-1)){-1!=Ft(S+=Mt(cn(v),"&","&\f"),"&\f",Ot(u?l[u-1]:0))&&(y=-1);break}case 34:case 39:case 91:S+=cn(v);break;case 9:case 10:case 13:case 32:S+=dn(m);break;case 92:S+=fn(an()-1,7);continue;case 47:switch(rn()){case 42:case 47:Bt(Sn(mn(nn(),an()),t,n,s),s),5!=ln(m||1)&&5!=ln(rn()||1)||!Ut(S)||" "===Ht(S,-1,void 0)||(S+=" ");break;default:S+="/"}break;case 123*h:l[u++]=Ut(S)*y;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+c:-1==y&&(S=Mt(S,/\f/g,"")),p>0&&(Ut(S)-d||0===h&&47===m)&&Bt(p>32?zn(S+";",r,n,d-1,s):zn(Mt(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(Bt(k=kn(S,t,n,u,c,a,l,b,x=[],w=[],d,o),o),123===v)if(0===c)wn(S,t,k,k,x,o,d,l,w);else{switch(f){case 99:if(110===It(S,3))break;case 108:if(97===It(S,2))break;default:c=0;case 100:case 109:case 115:}c?wn(e,k,k,r&&Bt(kn(e,k,k,0,0,a,l,b,a,x=[],d,w),w),a,w,d,l,r?x:w):wn(S,k,k,k,[""],w,0,l,w)}}u=c=p=0,h=y=1,b=S="",d=i;break;case 58:d=1+Ut(S),p=m;default:if(h<1)if(123==v)--h;else if(125==v&&0==h++&&125==tn())continue;switch(S+=Rt(v),v*h){case 38:y=c>0?1:(S+="\f",-1);break;case 44:l[u++]=(Ut(S)-1)*y,y=1;break;case 64:45===rn()&&(S+=cn(nn())),f=rn(),c=d=Ut(b=S+=hn(an())),v++;break;case 45:45===m&&2==Ut(S)&&(h=0)}}return o}function kn(e,t,n,r,a,o,i,l,s,u,c,d){for(var f=a-1,p=0===a?o:[""],m=Wt(p),h=0,g=0,y=0;h<r;++h)for(var v=0,b=Ht(e,f+1,f=Ot(g=i[h])),x=e;v<m;++v)(x=At(g>0?p[v]+" "+b:Mt(b,/&\f/g,p[v])))&&(s[y++]=x);return Jt(e,t,n,0===a?Pt:l,s,u,c,d)}function Sn(e,t,n,r){return Jt(e,t,n,Tt,Rt(Qt),Ht(e,2,-2),0,r)}function zn(e,t,n,r,a){return Jt(e,t,n,$t,Ht(e,0,r),Ht(e,r+1,-1),r,a)}var En="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Cn="active",jn="data-styled-version",_n="6.3.12",Tn="/*!sc*/\n",Pn="undefined"!=typeof window&&"undefined"!=typeof document,$n=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Nn={};function On(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Rn=new Map,Ln=new Map,An=1,Dn=function(e){if(Rn.has(e))return Rn.get(e);for(;Ln.has(An);)An++;var t=An++;return Rn.set(e,t),Ln.set(t,e),t},Mn=function(e,t){An=t+1,Rn.set(e,t),Ln.set(t,e)},Fn=(new Set,Object.freeze([])),In=Object.freeze({});function Hn(e,t,n){return void 0===n&&(n=In),e.theme!==n.theme&&e.theme||t||n.theme}var Un=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Wn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bn=/(^-|-$)/g;function Vn(e){return e.replace(Wn,"-").replace(Bn,"")}var qn=/(a)(d)/gi,Kn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Kn(t%52)+n;return(Kn(t%52)+n).replace(qn,"$1-$2")}var Yn,Qn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Xn=function(e){return Qn(5381,e)};function Jn(e){return Gn(Xn(e)>>>0)}function Zn(e){return e.displayName||e.name||"Component"}function er(e){return"string"==typeof e&&!0}var tr="function"==typeof Symbol&&Symbol.for,nr=tr?Symbol.for("react.memo"):60115,rr=tr?Symbol.for("react.forward_ref"):60112,ar={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},or={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ir={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lr=((Yn={})[rr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yn[nr]=ir,Yn);function sr(e){return("type"in(t=e)&&t.type.$$typeof)===nr?ir:"$$typeof"in e?lr[e.$$typeof]:ar;var t}var ur=Object.defineProperty,cr=Object.getOwnPropertyNames,dr=Object.getOwnPropertySymbols,fr=Object.getOwnPropertyDescriptor,pr=Object.getPrototypeOf,mr=Object.prototype;function hr(e,t,n){if("string"!=typeof t){if(mr){var r=pr(t);r&&r!==mr&&hr(e,r,n)}var a=cr(t);dr&&(a=a.concat(dr(t)));for(var o=sr(e),i=sr(t),l=0;l<a.length;++l){var s=a[l];if(!(s in or||n&&n[s]||i&&s in i||o&&s in o)){var u=fr(t,s);try{ur(e,s,u)}catch(e){}}}}return e}function gr(e){return"function"==typeof e}function yr(e){return"object"==typeof e&&"styledComponentId"in e}function vr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function br(e,t){return e.join(t||"")}function xr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function wr(e,t,n){if(void 0===n&&(n=!1),!n&&!xr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=wr(e[r],t[r]);else if(xr(t))for(var r in t)e[r]=wr(e[r],t[r]);return e}function kr(e,t){Object.defineProperty(e,"toString",{value:t})}var Sr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw On(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=0,s=(o=0,t.length);o<s;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++,l++);l>0&&this._cGroup>e&&(this._cIndex+=l)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+=this.tag.getRule(o)+Tn;return t},e}(),zr="style[".concat(En,"][").concat(jn,'="').concat(_n,'"]'),Er=new RegExp("^".concat(En,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Cr=function(e){return"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},jr=function(e){if(!e)return document;if(Cr(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Cr(t))return t}return document},_r=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},Tr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Tn),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(Er);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(Mn(c,u),_r(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},Pr=function(e){for(var t=jr(e.options.target).querySelectorAll(zr),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(En)!==Cn&&(Tr(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function $r(){return n.nc}var Nr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(En,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(En,Cn),r.setAttribute(jn,_n);var i=$r();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},Or=function(){function e(e){this.element=Nr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets,r=0,a=n.length;r<a;r++){var o=n[r];if(o.ownerNode===e)return o}throw On(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Rr=function(){function e(e){this.element=Nr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Lr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Ar=Pn,Dr={isServer:!Pn,useCSSOMInjection:!$n},Mr=function(){function e(e,t,n){void 0===e&&(e=In),void 0===t&&(t={});var r=this;this.options=St(St({},Dr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Pn&&Ar&&(Ar=!1,Pr(this)),kr(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return Ln.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a);if(void 0===o||!o.size)return"continue";var i=t.getGroup(n);if(0===i.length)return"continue";var l=En+".g"+n+'[id="'+a+'"]',s="";o.forEach(function(e){e.length>0&&(s+=e+",")}),r+=i+l+'{content:"'+s+'"}'+Tn},o=0;o<n;o++)a(o);return r}(r)})}return e.registerId=function(e){return Dn(e)},e.prototype.rehydrate=function(){!this.server&&Pn&&Pr(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var r=new e(St(St({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Pn&&t.target!==this.options.target&&jr(this.options.target)!==jr(t.target)&&Pr(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Lr(n):t?new Or(n):new Rr(n)}(this.options),new Sr(e)));var e},e.prototype.hasNameForId=function(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r},e.prototype.registerName=function(e,t){Dn(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Dn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Dn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}();function Fr(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in Et||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Ir=function(e){return e>="A"&&e<="Z"};function Hr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Ir(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ur=Symbol.for("sc-keyframes");var Wr=function(e){return null==e||!1===e||""===e},Br=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Wr(r)&&(Array.isArray(r)&&r.isCss||gr(r)?t.push("".concat(Hr(n),":"),r,";"):xr(r)?t.push.apply(t,zt(zt(["".concat(n," {")],Br(r),!1),["}"],!1)):t.push("".concat(Hr(n),": ").concat(Fr(n,r),";")))}return t};function Vr(e,t,n,r,a){if(void 0===a&&(a=[]),"string"==typeof e)return e&&a.push(e),a;if(Wr(e))return a;if(yr(e))return a.push(".".concat(e.styledComponentId)),a;var o;if(gr(e))return!gr(o=e)||o.prototype&&o.prototype.isReactComponent||!t?(a.push(e),a):Vr(e(t),t,n,r,a);if(function(e){return"object"==typeof e&&null!==e&&Ur in e}(e))return n?(e.inject(n,r),a.push(e.getName(r))):a.push(e),a;if(xr(e)){for(var i=Br(e),l=0;l<i.length;l++)a.push(i[l]);return a}if(!Array.isArray(e))return a.push(e.toString()),a;for(l=0;l<e.length;l++)Vr(e[l],t,n,r,a);return a}function qr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(gr(n)&&!yr(n))return!1}return!0}var Kr=Xn(_n),Gr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&qr(e),this.componentId=t,this.baseHash=Qn(Kr,t),this.baseStyle=n,Mr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=vr(r,this.staticRulesId);else{var a=br(Vr(this.rules,e,t,n)),o=Gn(Qn(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=vr(r,o),this.staticRulesId=o}else{for(var l=Qn(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=br(Vr(c,e,t,n));l=Qn(Qn(l,String(u)),d),s+=d}}if(s){var f=Gn(l>>>0);if(!t.hasNameForId(this.componentId,f)){var p=n(s,".".concat(f),void 0,this.componentId);t.insertRules(this.componentId,f,p)}r=vr(r,f)}}return{className:r,css:"undefined"==typeof window?t.getTag().getGroup(Dn(this.componentId)):""}},e}(),Yr=/&/g,Qr=47,Xr=42;function Jr(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,r=0,a=!1,o=0;o<t;o++){var i=e.charCodeAt(o);if(0!==r||a||i!==Qr||e.charCodeAt(o+1)!==Xr)if(a)i===Xr&&e.charCodeAt(o+1)===Qr&&(a=!1,o++);else if(34!==i&&39!==i||0!==o&&92===e.charCodeAt(o-1)){if(0===r)if(123===i)n++;else if(125===i&&--n<0)return!0}else 0===r?r=i:r===i&&(r=0);else a=!0,o++}return 0!==n||0!==r}function Zr(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Zr(e.children,t)),e})}function ea(e){var t,n,r,a=void 0===e?In:e,o=a.options,i=void 0===o?In:o,l=a.plugins,s=void 0===l?Fn:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push(function(e){e.type===Pt&&e.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),e.props[0]=e.props[0].replace(Yr,n).replace(r,u))}),i.prefix&&c.push(bn),c.push(yn);var d,f=[],p=function(e){var t=Wt(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)}))),m=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=void 0;var s=function(e){if(!Jr(e))return e;for(var t=e.length,n="",r=0,a=0,o=0,i=!1,l=0;l<t;l++){var s=e.charCodeAt(l);if(0!==o||i||s!==Qr||e.charCodeAt(l+1)!==Xr)if(i)s===Xr&&e.charCodeAt(l+1)===Qr&&(i=!1,l++);else if(34!==s&&39!==s||0!==l&&92===e.charCodeAt(l-1)){if(0===o)if(123===s)a++;else if(125===s){if(--a<0){for(var u=l+1;u<t;){var c=e.charCodeAt(u);if(59===c||10===c)break;u++}u<t&&59===e.charCodeAt(u)&&u++,a=0,l=u-1,r=u;continue}0===a&&(n+=e.substring(r,l+1),r=l+1)}else 59===s&&0===a&&(n+=e.substring(r,l+1),r=l+1)}else 0===o?o=s:o===s&&(o=0);else i=!0,l++}if(r<t){var d=e.substring(r);Jr(d)||(n+=d)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],r=0,a=0,o=0,i=0;a<t;){var l=e.charCodeAt(a);if(34!==l&&39!==l||0!==a&&92===e.charCodeAt(a-1))if(0===o)if(l===Qr&&a+1<t&&e.charCodeAt(a+1)===Xr){for(a+=2;a+1<t&&(e.charCodeAt(a)!==Xr||e.charCodeAt(a+1)!==Qr);)a++;a+=2}else if(40===l&&a>=3&&108==(32|e.charCodeAt(a-1))&&114==(32|e.charCodeAt(a-2))&&117==(32|e.charCodeAt(a-3)))i=1,a++;else if(i>0)41===l?i--:40===l&&i++,a++;else if(l===Xr&&a+1<t&&e.charCodeAt(a+1)===Qr)a>r&&n.push(e.substring(r,a)),r=a+=2;else if(l===Qr&&a+1<t&&e.charCodeAt(a+1)===Qr){for(a>r&&n.push(e.substring(r,a));a<t&&10!==e.charCodeAt(a);)a++;r=a}else a++;else a++;else 0===o?o=l:o===l&&(o=0),a++}return 0===r?e:(r<t&&n.push(e.substring(r)),n.join(""))}(e)),u=xn(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);return i.namespace&&(u=Zr(u,i.namespace)),f=[],gn(u,p),f};return m.hash=s.length?s.reduce(function(e,t){return t.name||On(15),Qn(e,t.name)},5381).toString():"",m}var ta=new Mr,na=ea(),ra=r.createContext({shouldForwardProp:void 0,styleSheet:ta,stylis:na}),aa=(ra.Consumer,r.createContext(void 0));function oa(){return r.useContext(ra)}function ia(e){if(!r.useMemo)return e.children;var t=oa().styleSheet,n=r.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),a=r.useMemo(function(){return ea({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),o=r.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:a}},[e.shouldForwardProp,n,a]);return r.createElement(ra.Provider,{value:o},r.createElement(aa.Provider,{value:a},e.children))}var la=r.createContext(void 0);la.Consumer;var sa={};new Set;function ua(e,t,n){var a=yr(e),o=e,i=!er(e),l=t.attrs,s=void 0===l?Fn:l,u=t.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Vn(e);sa[n]=(sa[n]||0)+1;var r="".concat(n,"-").concat(Jn(_n+n+sa[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):u,d=t.displayName,f=void 0===d?function(e){return er(e)?"styled.".concat(e):"Styled(".concat(Zn(e),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Vn(t.displayName),"-").concat(t.componentId):t.componentId||c,m=a&&o.attrs?o.attrs.concat(s).filter(Boolean):s,h=t.shouldForwardProp;if(a&&o.shouldForwardProp){var g=o.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;h=function(e,t){return g(e,t)&&y(e,t)}}else h=g}var v=new Gr(n,p,a?o.componentStyle:void 0);function b(e,t){return function(e,t,n){var a=e.attrs,o=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,u=e.target,c=r.useContext(la),d=oa(),f=e.shouldForwardProp||d.shouldForwardProp,p=Hn(t,c,i)||In,m=function(e,t,n){for(var r,a=St(St({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=gr(r=e[o])?r(a):r;for(var l in i)"className"===l?a.className=vr(a.className,i[l]):"style"===l?a.style=St(St({},a.style),i[l]):l in t&&void 0===t[l]||(a[l]=i[l])}return"className"in t&&"string"==typeof t.className&&(a.className=vr(a.className,t.className)),a}(a,t,p),h=m.as||u,g={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y&&m.theme===p||("forwardedAs"===y?g.as=m.forwardedAs:f&&!f(y,h)||(g[y]=m[y]));var v=function(e,t){var n=oa();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,m),b=v.className,x=vr(l,s);return b&&(x+=" "+b),m.className&&(x+=" "+m.className),g[er(h)&&!Un.has(h)?"class":"className"]=x,n&&(g.ref=n),(0,r.createElement)(h,g)}(x,e,t)}b.displayName=f;var x=r.forwardRef(b);return x.attrs=m,x.componentStyle=v,x.displayName=f,x.shouldForwardProp=h,x.foldedComponentIds=a?vr(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=p,x.target=a?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)wr(e,a[r],!0);return e}({},o.defaultProps,e):e}}),kr(x,function(){return".".concat(x.styledComponentId)}),i&&hr(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function ca(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var da=function(e){return Object.assign(e,{isCss:!0})};function fa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(gr(e)||xr(e))return da(Vr(ca(Fn,zt([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Vr(r):da(Vr(ca(r,t)))}function pa(e,t,n){if(void 0===n&&(n=In),!t)throw On(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,fa.apply(void 0,zt([r],a,!1)))};return r.attrs=function(r){return pa(e,t,St(St({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return pa(e,t,St(St({},n),r))},r}var ma=function(e){return pa(ua,e)},ha=ma;Un.forEach(function(e){ha[e]=ma(e)});var ga,ya=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=qr(e),Mr.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(br(Vr(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Mr.registerId(this.componentId+e);var a=this.componentId+e;this.isStatic?n.hasNameForId(a,a)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))},e}();!function(){function e(e,t){var n=this;this[ga]=!0,this.inject=function(e,t){void 0===t&&(t=na);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,kr(this,function(){throw On(12,String(n.name))})}e.prototype.getName=function(e){return void 0===e&&(e=na),this.name+e.hash}}();ga=Ur;(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=$r(),r=br([n&&'nonce="'.concat(n,'"'),"".concat(En,'="true"'),"".concat(jn,'="').concat(_n,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw On(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw On(2);var n=e.instance.toString();if(!n)return[];var a=((t={})[En]="",t[jn]=_n,t.dangerouslySetInnerHTML={__html:n},t),o=$r();return o&&(a.nonce=o),[r.createElement("style",St({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Mr({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw On(2);return r.createElement(ia,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw On(3)}})(),"__sc-".concat(En,"__");const va={smallPhone:360,phone:430,tablet:820,desktopHd:1920,tv4k:3840},ba={bordoAccent:"#9e1e36",bordoAccentDark:"#6a1426",bordoCore:"#4a1020",deepBlack:"#2e0810",outerSpace:"#2e0810",white:"#ffffff",goldMain:"#d4af37",goldHover:"#f1d592",goldSoft18:"rgba(212, 175, 55, 0.18)",goldSoft10:"rgba(180, 140, 30, 0.1)",goldSoft08:"rgba(212, 175, 55, 0.08)",goldSoft025:"rgba(212, 175, 55, 0.025)"},xa={main:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'},wa=ha.div`
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
      ${ba.bordoAccent} 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      ${ba.bordoAccentDark} 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 50% 50%,
      ${ba.bordoCore} 0%,
      ${ba.deepBlack} 100%
    );

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 70% 0%,
        ${ba.goldSoft18} 0%,
        transparent 45%
      ),
      radial-gradient(
        ellipse at 100% 50%,
        ${ba.goldSoft10} 0%,
        transparent 40%
      ),
      radial-gradient(
        ellipse at 30% 100%,
        ${ba.goldSoft08} 0%,
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
      ${ba.goldSoft025} 80px,
      ${ba.goldSoft025} 81px
    );
    pointer-events: none;
  }
`;var ka=n(579);const Sa=function(){return(0,ka.jsx)(wa,{})},za=ha.nav`
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

  @media (max-width: ${va.desktopHd}px) {
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

  @media (max-width: ${va.tablet}px) {
    padding: 6px 12px;
  }

  @media (max-width: ${va.phone}px) {
    min-height: 60px;
    column-gap: 8px;
    padding: 6px 10px;
  }
`,Ea=ha.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 821px) {
    grid-area: left;
    flex: none;
    min-width: 0;
  }
`,Ca=ha.div`
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
`,ja=ha.div`
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
`,_a=ha.div`
  display: flex;

  @media (max-width: 629px) {
    display: none;
  }
`,Ta=ha.button`
  display: none;
  border: 1px solid rgba(241, 213, 146, 0.38);
  background: rgba(34, 10, 16, 0.72);
  color: ${ba.goldHover};
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
`,Pa=ha.button`
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
`,$a=ha.aside`
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
`,Na=ha.div`
  margin-top: 14px;
  padding-top: 12px;
  display: flex;
  justify-content: center;
  padding-left: 0;
  border-top: 1px solid rgba(241, 213, 146, 0.18);

  & > div {
    justify-content: center;
  }
`,Oa=n.p+"static/media/znak-wodny.5040197ae93bea0121d6.png",Ra=ha(gt)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`,La=ha.img.attrs({src:Oa,alt:"Logo"})`
  height: 90px;
  width: auto;
  cursor: pointer;
  filter: brightness(3) contrast(1.2) saturate(1.1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.34))
    drop-shadow(0 0 8px ${ba.goldMain})
    drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18));
  transition:
    transform 0.3s ease,
    filter 0.3s ease;

  @media (max-width: ${va.tablet}px) {
    height: 72px;
  }

  @media (max-width: ${va.phone}px) {
    height: 58px;
  }

  &:hover {
    transform: scale(1.05);
    filter: brightness(3) contrast(1.2) saturate(1.1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${ba.goldMain})
      drop-shadow(0 0 16px ${ba.goldHover});
  }
`;const Aa=function(){return(0,ka.jsx)(Ra,{to:"/","aria-label":"Strona g\u0142\xf3wna Klara Queen",children:(0,ka.jsx)(La,{})})},Da=ha.ul`
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

  @media (max-width: ${va.phone}px) {
    gap: 4px 8px;
  }
`,Ma=ha.li`
  flex-shrink: 1;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: ${e=>(e.$vertical,"center")};
  gap: 0;
  width: auto;
  color: ${ba.goldHover};
  font-family: ${xa.main};
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

  @media (max-width: ${va.phone}px) {
    letter-spacing: ${e=>e.$vertical?"0.9px":"0.7px"};
    font-size: ${e=>e.$vertical?"0.84rem":"0.64rem"};
    padding: ${e=>e.$vertical?"1px 0":"4px 6px"};
  }

  &:hover {
    color: ${ba.white};
    transform: translateY(-1px);
    border-color: ${e=>e.$vertical?"transparent":"rgba(241, 213, 146, 0.48)"};
    background: ${e=>e.$vertical?"transparent":"linear-gradient(180deg, rgba(255, 245, 214, 0.08) 0%, rgba(44, 12, 22, 0.28) 100%)"};
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${ba.goldMain},
      0 0 18px ${ba.goldHover};
  }
`,Fa=ha.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: inherit;
`;var Ia={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ha=r.createContext&&r.createContext(Ia),Ua=["attr","size","title"];function Wa(){return Wa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wa.apply(null,arguments)}function Ba(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Va(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ba(Object(n),!0).forEach(function(t){qa(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ba(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function qa(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ka(e){return e&&e.map((e,t)=>r.createElement(e.tag,Va({key:t},e.attr),Ka(e.child)))}function Ga(e){return t=>r.createElement(Ya,Wa({attr:Va({},e.attr)},t),Ka(e.child))}function Ya(e){var t=t=>{var n,{attr:a,size:o,title:i}=e,l=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,Ua),s=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",Wa({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,l,{className:n,style:Va(Va({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==Ha?r.createElement(Ha.Consumer,null,e=>t(e)):t(Ia)}function Qa(e){return Ga({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Xa(e){return Ga({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function Ja(e){return Ga({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function Za(e){return Ga({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(e)}function eo(e){return Ga({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}const to=[{id:1,icon:function(e){return Ga({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)},url:"https://youtube.com",label:"YouTube"},{id:2,icon:function(e){return Ga({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)},url:"https://facebook.com",label:"Facebook"},{id:3,icon:function(e){return Ga({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(e)},url:"https://allegro.pl",label:"Allegro"}],no={labels:[{name:"Oferta",url:"#offer"},{name:"Aktualno\u015bci",url:"#news"},{name:"Wsp\xf3\u0142praca",url:"#collab"},{name:"Najcz\u0119stsze pytania",to:"/questions"},{name:"O Nas",to:"/about"}],socials:to};const ro=function(e){let{vertical:t=!1,onItemClick:n}=e;const r=()=>{n&&n()};return(0,ka.jsx)(Da,{$vertical:t,children:no.labels.map((e,n)=>(0,ka.jsx)(Ma,{$vertical:t,onClick:r,children:e.to?(0,ka.jsx)(Fa,{as:gt,to:e.to,children:e.name}):(0,ka.jsx)(Fa,{href:e.url,children:e.name})},`${e.name}-${n}`))})},ao=ha.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: ${va.tablet}px) {
    gap: 14px;
  }

  @media (max-width: ${va.phone}px) {
    gap: 12px;
  }
`,oo=ha.a`
  color: ${ba.goldHover};
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

  @media (max-width: ${va.tablet}px) {
    font-size: 1.18rem;
  }

  @media (max-width: ${va.phone}px) {
    font-size: 1.08rem;
  }

  &:hover {
    color: ${ba.white};
    transform: translateY(-2px) scale(1.04);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${ba.goldMain})
      drop-shadow(0 0 16px ${ba.goldHover});
  }
`;const io=function(){return(0,ka.jsx)(ao,{children:no.socials.map(e=>{const t=e.icon;return(0,ka.jsx)(oo,{href:e.url,target:"_blank",rel:"noreferrer","aria-label":e.label,children:(0,ka.jsx)(t,{title:e.label})},e.id)})})};const lo=function(){const[e,t]=(0,r.useState)(!1),n=()=>{t(!1)};return(0,ka.jsxs)(ka.Fragment,{children:[(0,ka.jsxs)(za,{children:[(0,ka.jsx)(Ea,{children:(0,ka.jsx)(Aa,{})}),(0,ka.jsx)(Ca,{children:(0,ka.jsx)(ro,{})}),(0,ka.jsxs)(ja,{children:[(0,ka.jsx)(_a,{children:(0,ka.jsx)(io,{})}),(0,ka.jsx)(Ta,{type:"button",onClick:()=>{t(e=>!e)},"aria-label":e?"Zamknij menu":"Otworz menu","aria-expanded":e,children:e?(0,ka.jsx)(Qa,{}):(0,ka.jsx)(eo,{})})]})]}),(0,ka.jsx)(Pa,{$open:e,onClick:n}),(0,ka.jsxs)($a,{$open:e,children:[(0,ka.jsx)(ro,{vertical:!0,onItemClick:n}),(0,ka.jsx)(Na,{children:(0,ka.jsx)(io,{})})]})]})},so=ha.footer`
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

  @media (max-width: ${va.desktopHd}px) {
    padding: 55px 45px 22px;
  }

  @media (max-width: ${va.tablet}px) {
    padding: 45px 18px 18px;
  }

  @media (max-width: ${va.smallPhone}px) {
    padding: 35px 14px 15px;
  }
`,uo=ha.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 50px;
  width: 100%;

  @media (max-width: ${va.tablet}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }

  @media (max-width: ${va.phone}px) {
    gap: 20px;
  }

  @media (max-width: ${va.smallPhone}px) {
    gap: 16px;
  }
`,co={brand:{name:"Klara Queen",slogan:"Digital Excellence",description:"Tworzymy luksusowe do\u015bwiadczenia cyfrowe, kt\xf3re definiuj\u0105 now\u0105 jako\u015b\u0107 Twojej marki w sieci."},links:[{name:"Start",to:"/"},{name:"Oferta",url:"#offer"},{name:"Aktualno\u015bci",url:"#news"},{name:"Wsp\xf3\u0142praca",url:"#collaboration"},{name:"Opinie",url:"#opinions"},{name:"O Nas",to:"/about"},{name:"Najcz\u0119stsze pytania",to:"/questions"}],socials:to,contact:{email:"kontakt@studioklara.pl",copy:`\xa9 ${(new Date).getFullYear()} Klara Queen. Wszystkie prawa zastrze\u017cone.`}},fo=ha.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: ${va.tablet}px) {
    align-items: center;
  }
`,po=ha.div`
  display: flex;
  align-items: center;
  margin-top: -56px;

  @media (max-width: ${va.desktopHd}px) {
    margin-top: -50px;
  }

  @media (max-width: ${va.tablet}px) {
    margin-top: -36px;
  }

  @media (max-width: ${va.smallPhone}px) {
    margin-top: -28px;
  }
`,mo=ha.img`
  height: 180px;
  width: auto;
  cursor: pointer;
  filter: brightness(2.8) contrast(1.1) saturate(1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.3))
    drop-shadow(0 0 6px ${ba.goldMain})
    drop-shadow(0 1px 4px rgba(0, 0, 0, 0.15));
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    filter: brightness(2.8) contrast(1.1) saturate(1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.4))
      drop-shadow(0 0 8px ${ba.goldMain})
      drop-shadow(0 0 12px ${ba.goldHover});
  }

  @media (max-width: ${va.desktopHd}px) {
    height: 168px;
  }

  @media (max-width: ${va.tablet}px) {
    height: 140px;
  }

  @media (max-width: ${va.smallPhone}px) {
    height: 120px;
  }
`,ho=ha.p`
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

  @media (max-width: ${va.tablet}px) {
    font-size: 0.78rem;
    line-height: 1.5;
    max-width: 500px;
  }

  @media (max-width: ${va.smallPhone}px) {
    font-size: 0.72rem;
    line-height: 1.4;
  }
`;const go=function(e){let{data:t}=e;return(0,ka.jsxs)(fo,{children:[(0,ka.jsx)(po,{children:(0,ka.jsx)(mo,{src:Oa,alt:t.name})}),(0,ka.jsx)(ho,{children:t.description})]})},yo=fa`
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
    background: ${ba.goldMain};
    transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${ba.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 16px rgba(212, 175, 55, 0.45);

    &::before {
      width: 100%;
    }
  }

  @media (max-width: ${va.tablet}px) {
    font-size: 0.76rem;
  }

  @media (max-width: ${va.smallPhone}px) {
    font-size: 0.7rem;
  }
`,vo=ha.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${va.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${va.smallPhone}px) {
    gap: 10px;
  }
`,bo=ha.h4`
  color: ${ba.goldHover};
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

  @media (max-width: ${va.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${va.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,xo=ha.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;

  @media (max-width: ${va.tablet}px) {
    grid-template-columns: 1fr;
    gap: 12px;
    place-items: center;
  }

  @media (max-width: ${va.phone}px) {
    gap: 8px;
    place-items: center;
  }

  @media (max-width: ${va.smallPhone}px) {
    gap: 6px;
  }
`,wo=ha.a`
  ${yo}
`,ko=ha(gt)`
  ${yo}
`;const So=function(e){let{data:t}=e;return(0,ka.jsxs)(vo,{children:[(0,ka.jsx)(bo,{children:"Nawigacja"}),(0,ka.jsx)(xo,{children:t.map((e,t)=>e.to?(0,ka.jsx)(ko,{to:e.to,children:e.name},t):(0,ka.jsx)(wo,{href:e.url,children:e.name},t))})]})},zo=ha.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${va.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${va.smallPhone}px) {
    gap: 10px;
  }
`,Eo=ha.h4`
  color: ${ba.goldHover};
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

  @media (max-width: ${va.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${va.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,Co=ha.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: ${va.tablet}px) {
    justify-content: center;
    gap: 16px;
  }

  @media (max-width: ${va.smallPhone}px) {
    gap: 12px;
  }
`,jo=ha.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${ba.white};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  opacity: 0.8;

  svg {
    font-size: 1.6rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.15));
    color: ${ba.goldMain};
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
    color: ${ba.white};

    svg {
      transform: scale(1.12);
      color: ${ba.goldHover};
      filter: drop-shadow(0 6px 12px rgba(212, 175, 55, 0.3));
    }

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: ${va.tablet}px) {
    gap: 6px;

    svg {
      font-size: 1.4rem;
    }
  }

  @media (max-width: ${va.smallPhone}px) {
    gap: 5px;

    svg {
      font-size: 1.2rem;
    }
  }
`,_o=ha.span`
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: ${ba.white};
  opacity: 0.75;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: "Cormorant Garamond", serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: ${va.tablet}px) {
    font-size: 0.58rem;
    letter-spacing: 1px;
  }

  @media (max-width: ${va.smallPhone}px) {
    font-size: 0.54rem;
  }
`;const To=function(e){let{data:t}=e;return(0,ka.jsxs)(zo,{children:[(0,ka.jsx)(Eo,{children:"Nasze Kana\u0142y"}),(0,ka.jsx)(Co,{children:t.map(e=>(0,ka.jsxs)(jo,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,ka.jsx)(e.icon,{}),(0,ka.jsx)(_o,{children:e.label})]},e.id))})]})},Po=ha.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px 0;
  border-top: 1px solid rgba(212, 175, 55, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: ${va.tablet}px) {
    flex-direction: column-reverse;
    gap: 12px;
    margin: 30px auto 0;
    padding: 15px 0;
    text-align: center;
    align-items: center;
  }

  @media (max-width: ${va.smallPhone}px) {
    margin: 20px auto 0;
    padding: 12px 0;
    gap: 10px;
  }
`,$o=ha.span`
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

  @media (max-width: ${va.tablet}px) {
    font-size: 0.68rem;
  }

  @media (max-width: ${va.smallPhone}px) {
    font-size: 0.63rem;
  }
`,No=ha.a`
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
      ${ba.goldMain} 100%
    );
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${ba.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(212, 175, 55, 0.6);

    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${va.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 0.8px;
  }

  @media (max-width: ${va.smallPhone}px) {
    font-size: 0.7rem;
  }
`;const Oo=function(e){let{data:t}=e;return(0,ka.jsxs)(Po,{children:[(0,ka.jsx)($o,{children:t.copy}),(0,ka.jsx)(No,{href:`mailto:${t.email}`,children:t.email})]})};const Ro=function(){const{brand:e,links:t,socials:n,contact:r}=co;return(0,ka.jsxs)(so,{children:[(0,ka.jsxs)(uo,{children:[(0,ka.jsx)(go,{data:e}),(0,ka.jsx)(So,{data:t}),(0,ka.jsx)(To,{data:n})]}),(0,ka.jsx)(Oo,{data:r})]})},Lo=()=>{const e=ce();return(0,r.useEffect)(()=>{window.scrollTo(0,0)},[e.key]),(0,r.useEffect)(()=>{setTimeout(()=>{window.scrollTo(0,0)},100)},[]),null},Ao=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=fa.apply(void 0,zt([e],t,!1)),o="sc-global-".concat(Jn(JSON.stringify(a))),i=new ya(a,o),l=new WeakMap,s=function(e){var t=oa(),n=r.useContext(la),a=l.get(t.styleSheet);return void 0===a&&(a=t.styleSheet.allocateGSInstance(o),l.set(t.styleSheet,a)),r.useLayoutEffect(function(){return t.styleSheet.server||function(e,t,n,r,a){if(i.isStatic)i.renderStyles(e,Nn,n,a);else{var o=St(St({},t),{theme:Hn(t,r,s.defaultProps)});i.renderStyles(e,o,n,a)}}(a,e,t.styleSheet,n,t.stylis),function(){i.removeStyles(a,t.styleSheet)}},[a,e,t.styleSheet,n,t.stylis]),null};return r.memo(s)})`
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
    background-color: ${ba.outerSpace||"#1a0005"};
    color: ${ba.white||"#ffffff"};
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
    background: ${ba.goldMain||"#d4af37"};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${ba.goldHover||"#f1d592"};
  }
`,Do=ha.section`
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

  @media (max-width: ${va.tablet}px) {
    padding: 94px 0 0;
  }

  @media (max-width: 640px) {
    padding: 88px 0 0;
  }

  @media (max-width: ${va.phone}px) {
    padding: 84px 0 0;
  }
`,Mo=ha.div`
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

  @media (max-width: ${va.tablet}px) {
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

  @media (max-width: ${va.phone}px) {
    gap: 8px;
    padding: 4px 10px 0;
  }

  @media (max-width: 420px) {
    gap: 8px;
    padding: 4px 10px 0;
  }
`,Fo=ha.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;

  @media (max-width: ${va.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${va.tablet}px) {
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

  @media (max-width: ${va.phone}px) {
    margin-top: 0;
  }

  @media (max-width: 420px) {
    margin-top: 0;
  }
`,Io=ha.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;

  @media (max-width: ${va.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${va.tablet}px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 760px;
    margin-top: 0;
  }

  @media (max-width: ${va.phone}px) {
    margin-top: 0;
  }
`,Ho=(ha.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,ha.div`
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

  @media (max-width: ${va.tablet}px) {
    max-width: 760px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  @media (max-width: ${va.phone}px) {
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
    align-items: center;
    padding: 0 2px;
  }
`),Uo=ha.div`
  font-family: "Manrope", "Segoe UI", sans-serif;
  color: rgba(255, 242, 214, 0.92);
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.2vw, 2.2px);
  font-size: clamp(0.62rem, 0.9vw, 0.82rem);
  font-weight: 500;
  margin-bottom: 18px;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);

  @media (max-width: ${va.tablet}px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${va.phone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.8px;
    margin-bottom: 12px;
  }
`,Wo=ha.h1`
  margin: 0 0 18px;
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  color: ${ba.goldHover};
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

  @media (max-width: ${va.tablet}px) {
    font-size: clamp(0.95rem, 3.2vw, 1.95rem);
    letter-spacing: 0;
    text-align: center;
    width: 100%;
    line-height: 1;
  }

  @media (max-width: ${va.phone}px) {
    margin-bottom: 14px;
    font-size: clamp(0.9rem, 5.2vw, 1.6rem);
    line-height: 1.1;
  }
`,Bo=ha.p`
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

  @media (max-width: ${va.tablet}px) {
    max-width: 560px;
    font-size: clamp(0.74rem, 1.8vw, 0.84rem);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${va.phone}px) {
    max-width: 100%;
    font-size: clamp(0.72rem, 3.4vw, 0.8rem);
    line-height: 1.45;
    text-align: center;
  }
`,Vo=ha.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: nowrap;

  @media (max-width: ${va.tablet}px) {
    width: 100%;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10px;
  }

  @media (max-width: ${va.phone}px) {
    gap: 8px;
    margin-top: 22px;
    flex-wrap: nowrap;
    justify-content: center;
  }
`,qo=`\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 48px;\n  padding: 0 24px;\n  border-radius: 14px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.9px;\n  font-size: clamp(0.68rem, 0.8vw, 0.82rem);\n  font-weight: 700;\n  white-space: nowrap;\n  flex: 0 0 auto;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease,\n    color 0.3s ease, border-color 0.3s ease;\n\n  @media (max-width: ${va.tablet}px) {\n    min-height: 42px;\n    padding: 0 14px;\n    font-size: 0.74rem;\n    letter-spacing: 0.8px;\n  }\n\n  @media (max-width: ${va.phone}px) {\n    min-height: 40px;\n    padding: 0 12px;\n    font-size: 0.7rem;\n    letter-spacing: 0.7px;\n  }\n`,Ko=ha.a`
  ${qo}
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
`,Go=ha.a`
  ${qo}
  color: rgba(255, 246, 220, 0.92);
  background: rgba(53, 13, 19, 0.22);
  border: 1px solid rgba(241, 213, 146, 0.58);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.04),
    0 10px 24px rgba(0, 0, 0, 0.14);

  &:hover {
    transform: translateY(-1px);
    color: ${ba.white};
    border-color: rgba(241, 213, 146, 0.78);
    box-shadow:
      0 14px 30px rgba(0, 0, 0, 0.2),
      0 0 18px rgba(212, 175, 55, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  }
`;const Yo=function(){return(0,ka.jsxs)(Ho,{children:[(0,ka.jsx)(Uo,{children:"Unikalny design, kt\xf3ry zachwyca"}),(0,ka.jsxs)(Wo,{children:["Luksusowe i funkcjonalne",(0,ka.jsx)("br",{}),"strony WWW dla Twojej marki"]}),(0,ka.jsxs)(Bo,{children:["Projektujemy spersonalizowane, unikalne rozwi\u0105zania cyfrowe,",(0,ka.jsx)("br",{}),"kt\xf3re buduj\u0105 autorytet i przyci\u0105gaj\u0105 klient\xf3w premium."]}),(0,ka.jsxs)(Vo,{children:[(0,ka.jsx)(Ko,{href:"#projekty",children:"Zobacz Projekty"}),(0,ka.jsx)(Go,{href:"#oferta",children:"Poznaj Ofert\u0119"})]})]})},Qo=ha.div`
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

  @media (max-width: ${va.tablet}px) {
    width: min(100%, 760px);
    height: clamp(240px, 46vw, 380px);
    padding: 2px;
    margin: 0 auto;
  }

  @media (max-width: ${va.phone}px) {
    padding: 0 2px;
  }
`,Xo=ha.div`
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

  @media (max-width: ${va.tablet}px) {
    --offset-distance: 68px;
    --edge-offset-distance: 112px;
  }

  @media (max-width: ${va.phone}px) {
    --offset-distance: 56px;
    --edge-offset-distance: 98px;
  }
`,Jo=ha.img`
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
  box-shadow: ${e=>e.$active?`0 28px 50px rgba(0, 0, 0, 0.45), 0 0 20px ${ba.goldSoft18}`:"0 16px 26px rgba(0, 0, 0, 0.3)"};
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

  @media (max-width: ${va.phone}px) {
    width: 260px;
    height: 182px;
  }
`,Zo=n.p+"static/media/pexels-dimkidama-15115560.04167beb6bd16a6e9fd4.jpg",ei=n.p+"static/media/pexels-firmbee-com-22729701-6963740.a9a8b980823767df4886.jpg",ti=n.p+"static/media/pexels-magnetme-3917414-5839461.06d3415285cbf1cc0bf1.jpg",ni=n.p+"static/media/pexels-rdne-7310202.0cfb9c3eef397dd77e13.jpg",ri=[Zo,ei,ti,ni,ei],ai=(e,t,n)=>{let r=t-e;return r>n/2&&(r-=n),r<-n/2&&(r+=n),r};const oi=function(){const[e,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{const e=setInterval(()=>{t(e=>(e+1)%ri.length)},4e3);return()=>clearInterval(e)},[]),(0,ka.jsx)(Qo,{children:(0,ka.jsx)(Xo,{children:ri.map((t,n)=>(0,ka.jsx)(Jo,{src:t,alt:`Projekt ${n+1}`,$offset:ai(e,n,ri.length),$active:n===e},`${t}-${n}`))})})},ii=ha.section`
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
`,li=ha.div`
  text-align: center;
  margin-bottom: clamp(8px, 1.2vw, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,si=ha.h2`
  color: ${ba.goldHover};
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
`,ui=ha.p`
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
`,ci=ha.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
`,di=ha.div`
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
`,fi=ha.div`
  flex: 0 0 calc(25% - 15px);
  min-width: 0;
  scroll-snap-align: start;
  display: flex;

  @media (max-width: 1050px) {
    flex: 0 0 calc(33.33% - 14px);
  }

  @media (max-width: ${va.tablet}px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(50% - 6px);
  }

  @media (max-width: ${va.smallPhone}px) {
    flex: 0 0 calc(100% - 0px);
  }
`,pi=ha.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${ba.goldMain};
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
`,mi=ha.div`
  margin-top: clamp(36px, 5vw, 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover div {
    width: 100px;
  }
`,hi=ha.span`
  color: ${ba.goldMain};
  text-transform: uppercase;
  letter-spacing: clamp(1.4px, 0.3vw, 4px);
  font-size: clamp(0.68rem, 0.9vw, 0.75rem);
  margin-bottom: 10px;
`,gi=ha.div`
  width: 50px;
  height: 1px;
  background: ${ba.goldMain};
  transition: width 0.4s ease;
`,yi=ha.div`
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
`,vi=ha.div`
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
`,bi=ha.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  filter: brightness(0.88) saturate(0.9);
  transition:
    filter 0.45s ease,
    transform 0.45s ease;

  ${yi}:hover & {
    filter: brightness(1) saturate(1);
    transform: scale(1.03);
  }
`,xi=ha.div`
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
`,wi=ha.h3`
  color: ${ba.goldHover};
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
`,ki=(ha.p`
  color: rgba(255, 245, 220, 0.78);
  font-size: clamp(0.68rem, 2.2vw, 0.82rem);
  text-align: center;
  line-height: 1.5;
  margin: 0 clamp(8px, 2vw, 20px);
  max-width: 240px;
`,ha.div`
  width: 44px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${ba.goldMain} 50%,
    transparent 100%
  );
  margin-top: 14px;
  opacity: 0.65;
`);const Si=function(e){let{project:t}=e;const{type:n,url:r,title:a,description:o,image:i,icon:l}=t;return(0,ka.jsxs)(yi,{as:"link"===n?"a":"div",href:"link"===n?r:void 0,target:"link"===n?"_blank":void 0,isLink:"link"===n,children:[(0,ka.jsx)(vi,{children:(0,ka.jsx)(bi,{src:i,alt:a})}),(0,ka.jsx)(xi,{children:(0,ka.jsx)(l,{})}),(0,ka.jsx)(wi,{children:a}),(0,ka.jsx)(ki,{})]})},zi=[{id:1,type:"link",url:"https://google.com",title:"Boutique E-commerce",description:"W pe\u0142ni dzia\u0142aj\u0105cy sklep internetowy premium.",image:Zo,icon:Xa},{id:2,type:"example",title:"Studio Architektury",image:ei,icon:function(e){return Ga({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}},{id:3,type:"example",title:"Portfolio Fotografa",image:ti,icon:function(e){return Ga({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(e)}},{id:4,type:"link",url:"https://moja-inna-strona.pl",title:"Dashboard Finansowy",image:ni,icon:function(e){return Ga({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}},{id:5,type:"example",title:"Projekt Specjalny",image:Zo,icon:Xa},{id:6,type:"example",title:"Projekt Specjalny 2",image:ei,icon:Xa}];const Ei=function(){const e=(0,r.useRef)(null),t=(0,r.useRef)(!1),n=n=>{const r=e.current;if(!r||t.current)return;const a=r.firstElementChild;if(!a)return;const o=parseFloat(getComputedStyle(r).gap)||16,i=a.offsetWidth+o,l=r.scrollWidth-r.clientWidth;t.current=!0,n>0&&r.scrollLeft>=l-2?r.scrollTo({left:0,behavior:"smooth"}):n<0&&r.scrollLeft<=2?r.scrollTo({left:l,behavior:"smooth"}):r.scrollBy({left:n*i,behavior:"smooth"}),setTimeout(()=>{t.current=!1},580)};return(0,ka.jsxs)(ii,{children:[(0,ka.jsxs)(li,{children:[(0,ka.jsx)(si,{children:"Przyk\u0142adowe Prace"}),(0,ka.jsx)(ui,{children:"Ekskluzywne projekty cyfrowe tworzone z pasj\u0105"})]}),(0,ka.jsxs)(ci,{children:[(0,ka.jsx)(pi,{onClick:()=>n(-1),"aria-label":"Poprzedni projekt",children:(0,ka.jsx)(Za,{})}),(0,ka.jsx)(di,{ref:e,children:zi.map(e=>(0,ka.jsx)(fi,{children:(0,ka.jsx)(Si,{project:e})},e.id))}),(0,ka.jsx)(pi,{onClick:()=>n(1),"aria-label":"Nast\u0119pny projekt",children:(0,ka.jsx)(Ja,{})})]}),(0,ka.jsxs)(mi,{children:[(0,ka.jsx)(hi,{children:"Zobacz Pe\u0142ne Portfolio"}),(0,ka.jsx)(gi,{})]})]})};const Ci=function(){return(0,ka.jsxs)(ka.Fragment,{children:[(0,ka.jsx)(Do,{children:(0,ka.jsxs)(Mo,{children:[(0,ka.jsx)(Fo,{children:(0,ka.jsx)(Yo,{})}),(0,ka.jsx)(Io,{children:(0,ka.jsx)(oi,{})})]})}),(0,ka.jsx)(Ei,{})]})},ji=ha.div`
  position: relative;
  z-index: 5;
`,_i=ha.section`
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
`,Ti=ha.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
`,Pi=ha.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${ba.goldMain} 50%,
    transparent 100%
  );
  opacity: 0.25;
  margin: clamp(15px, 2vw, 25px) auto;
  max-width: 200px;
`,$i=ha.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: clamp(30px, 4vw, 50px);
  color: ${ba.goldMain};
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
      ${ba.goldMain} 20%,
      ${ba.goldMain} 80%,
      transparent 100%
    );
  }
`,Ni=ha.section`
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
      ${ba.goldMain},
      transparent
    );
  }
`,Oi=ha.h1`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 700;
  color: ${ba.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: clamp(1px, 0.5vw, 3px);
  margin: clamp(35px, 5vw, 50px) 0 clamp(25px, 4vw, 35px);
  text-transform: uppercase;
`,Ri=ha.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: rgba(255, 255, 255, 0.82);
  line-height: clamp(1.6, 3vw, 1.9);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
  font-family: "Manrope", sans-serif;
`,Li="Wymiar Luksusowej Doskona\u0142o\u015bci",Ai="Gdzie wizja spotyka precyzj\u0119. Tworzymy cyfrowe eksperyencje, kt\xf3re wyznaczaj\u0105 standardy bran\u017cy.",Di={title:"Twoja Kolekcja",paragraphs:[". Stworzyli\u015bmy ekosystem wzorc\xf3w, kt\xf3re wyznaczaj\u0105 standardy - sprawdzone, doskonale zaprojektowane i gotowe do Twojej marki.","Ty wybierasz fundament z naszej autorskiej kolekcji, my dostosowujemy go do Twojej to\u017csamo\u015bci. Rezultat? Estetyka bez kompromis\xf3w i natychmiastowy autorytet w Twojej bran\u017cy.","Ka\u017cdy szablon to efekt setki godzin testowania, niezliczonych iteracji i wiedzy zdobytej pracuj\u0105c z luksusowymi markami na ca\u0142ym \u015bwiecie."],signature:"Autorska Kolekcja \xb7 Sprawdzone Struktury \xb7 Estetyka Bez Kompromis\xf3w"},Mi=[{id:1,label:"Selekcja",value:"1",description:"Autorskie szablony zaprojektowane pod luksusowe marki."},{id:2,label:"Szybko\u015b\u0107",value:"2",description:"Twoja obecno\u015b\u0107 online w 2-4 dni robocze."},{id:3,label:"Sp\xf3jno\u015b\u0107",value:"3",description:"Gwarancja doskona\u0142ego wygl\u0105du na ka\u017cdym urz\u0105dzeniu."}],Fi=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych. "},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."}],Ii={title:"Gdzie nas znajdziesz?",description:"Nasze projekty dost\u0119pne na najpopularniejszych platformach. Allegro oferuje nas za nieco wy\u017csz\u0105 cen\u0119 ze wzgl\u0119du na ich prowizj\u0119. ",platforms:[{id:1,name:"Facebook",description:"Obserwuj nas na Facebooku, aby by\u0107 zawsze na bie\u017c\u0105co."},{id:2,name:"YouTube",description:"Odkrywaj nasze projekty i inspiracje na YouTube."},{id:3,name:"Allegro",description:"Kupuj nasze szablony w sklepie Allegro (ceny wy\u017csze ze wzgl\u0119du na prowizj\u0119)."}]},Hi=()=>(0,ka.jsxs)(Ni,{children:[(0,ka.jsx)(Oi,{children:Li}),(0,ka.jsx)(Ri,{children:Ai})]}),Ui=ha.div`
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
`,Wi=ha.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: clamp(1.7, 4vw, 2.1);
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
  position: relative;
`,Bi=ha.div`
  color: ${ba.goldMain};
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
`,Vi=()=>(0,ka.jsxs)(Ui,{children:[Di.paragraphs.map((e,t)=>(0,ka.jsx)(Wi,{children:e},t)),(0,ka.jsx)(Bi,{children:Di.signature})]}),qi=ha.div`
  border-left: 2px solid ${ba.goldMain};
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
      ${ba.goldMain} 0%,
      transparent 100%
    );
  }
`,Ki=ha.div`
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
`,Gi=ha.h4`
  color: ${ba.goldMain};
  margin-bottom: clamp(12px, 2vw, 15px);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  margin-top: 0;
`,Yi=ha.p`
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.85);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
`,Qi=ha.div`
  width: 100%;
`,Xi=ha.button`
  margin-top: clamp(40px, 6vw, 60px);
  padding: clamp(12px, 2vw, 16px) clamp(30px, 4vw, 50px);
  background: linear-gradient(
    135deg,
    ${ba.goldMain} 0%,
    #f1d592 100%
  );
  color: ${ba.deepBlack};
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
`,Ji=()=>{const e=pe();return(0,ka.jsxs)(Qi,{children:[(0,ka.jsx)(qi,{children:Fi.map(e=>(0,ka.jsxs)(Ki,{children:[(0,ka.jsx)(Gi,{children:e.question}),(0,ka.jsx)(Yi,{children:e.answer})]},e.id))}),(0,ka.jsx)(Xi,{onClick:()=>e("/questions"),children:"Zobacz Wi\u0119cej Pyta\u0144"})]})},Zi=ha.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(30px, 5vw, 50px);
  margin-top: clamp(60px, 8vw, 80px);
  width: 100%;

  @media (max-width: ${va.tablet}px) {
    grid-template-columns: 1fr;
  }
`,el=ha.div`
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
    border-color: ${ba.goldMain};
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
`,tl=ha.span`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: bold;
  color: ${ba.goldMain};
  opacity: 0.95;
  font-family: "Cormorant Garamond", serif;
  line-height: 1;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,nl=ha.span`
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  text-transform: uppercase;
  letter-spacing: clamp(1.5px, 0.5vw, 2.5px);
  color: ${ba.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  opacity: 0.9;
`,rl=ha.p`
  font-size: clamp(0.85rem, 1.8vw, 0.98rem);
  line-height: clamp(1.6, 3vw, 1.8);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
`,al=()=>(0,ka.jsx)(Zi,{children:Mi.map(e=>(0,ka.jsxs)(el,{children:[(0,ka.jsx)(tl,{children:e.value}),(0,ka.jsx)(nl,{children:e.label}),(0,ka.jsx)(rl,{children:e.description})]},e.id))}),ol=ha.section`
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
`,il=ha.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: clamp(30px, 4vw, 50px);
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
`,ll=ha.button`
  padding: clamp(14px, 2.5vw, 18px) clamp(35px, 5vw, 60px);
  background: linear-gradient(
    135deg,
    ${ba.goldMain} 0%,
    #f1d592 100%
  );
  color: ${ba.deepBlack};
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
`,sl=()=>(0,ka.jsxs)(ol,{children:[(0,ka.jsx)(il,{children:"Got\xf3w na transformacj\u0119 cyfrow\u0105?"}),(0,ka.jsx)(ll,{onClick:()=>{},children:"Rozpocznij swoj\u0105 kolekcj\u0119"})]}),ul=ha.section`
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
`,cl=ha.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: clamp(30px, 4vw, 50px);
  color: ${ba.goldMain};
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
      ${ba.goldMain} 20%,
      ${ba.goldMain} 80%,
      transparent 100%
    );
  }
`,dl=ha.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: clamp(40px, 6vw, 60px);
  max-width: 600px;
  line-height: clamp(1.6, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
`,fl=ha.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(25px, 4vw, 40px);
  width: 100%;
  margin-top: clamp(20px, 3vw, 30px);

  @media (max-width: ${va.tablet}px) {
    grid-template-columns: 1fr;
  }
`,pl=ha.a`
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
    border-color: ${ba.goldMain};
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
`,ml=ha.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${ba.goldMain};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;

  ${pl}:hover & {
    transform: scale(1.15) rotate(5deg);
  }
`,hl=ha.h3`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  color: ${ba.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
`,gl=ha.p`
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  line-height: clamp(1.5, 2.5vw, 1.7);
  font-weight: 400;
`,yl=()=>(0,ka.jsxs)(ul,{children:[(0,ka.jsx)(cl,{children:Ii.title}),(0,ka.jsx)(dl,{children:Ii.description}),(0,ka.jsx)(fl,{children:Ii.platforms.map(e=>{const t=to.find(t=>t.label===e.name);return(0,ka.jsxs)(pl,{href:null===t||void 0===t?void 0:t.url,target:"_blank",rel:"noopener noreferrer",children:[(0,ka.jsx)(ml,{children:t&&(0,ka.jsx)(t.icon,{})}),(0,ka.jsx)(hl,{children:e.name}),(0,ka.jsx)(gl,{children:e.description})]},e.id)})})]}),vl=()=>(0,ka.jsxs)(ji,{children:[(0,ka.jsx)(Hi,{}),(0,ka.jsx)(Pi,{}),(0,ka.jsxs)(_i,{children:[(0,ka.jsx)($i,{children:"Twoja Kolekcja"}),(0,ka.jsx)(Ti,{children:(0,ka.jsx)(Vi,{})})]}),(0,ka.jsx)(Pi,{}),(0,ka.jsxs)(_i,{children:[(0,ka.jsx)($i,{children:"Nasze Atuty"}),(0,ka.jsx)(Ti,{style:{maxWidth:"1000px"},children:(0,ka.jsx)(al,{})})]}),(0,ka.jsx)(Pi,{}),(0,ka.jsxs)(_i,{children:[(0,ka.jsx)($i,{children:"Jak To Dzia\u0142a?"}),(0,ka.jsx)(Ti,{children:(0,ka.jsx)(Ji,{})})]}),(0,ka.jsx)(Pi,{}),(0,ka.jsx)(yl,{}),(0,ka.jsx)(Pi,{}),(0,ka.jsx)(sl,{})]}),bl=ha.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,xl=ha.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`,wl=ha.div`
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
`,kl=ha.h1`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-family: "Cormorant Garamond", serif;
  color: ${ba.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(0.5px, 0.5vw, 1px);
`,Sl=ha.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.6;
`,zl=ha.div`
  border-left: 2px solid ${ba.goldMain};
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
      ${ba.goldMain} 0%,
      transparent 100%
    );
  }
`,El=ha.div`
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
`,Cl=ha.h3`
  color: ${ba.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  line-height: 1.4;
`,jl=ha.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
  transition: color 0.3s ease;

  ${El}:hover & {
    color: rgba(255, 255, 255, 0.95);
  }
`,_l=ha.div`
  margin-top: clamp(60px, 10vw, 100px);
  text-align: center;
  padding-top: clamp(40px, 6vw, 60px);
  border-top: 1px solid rgba(212, 175, 55, 0.2);
`,Tl=ha.button`
  padding: clamp(12px, 2vw, 16px) clamp(30px, 4vw, 50px);
  background: linear-gradient(
    135deg,
    ${ba.goldMain} 0%,
    #f1d592 100%
  );
  color: ${ba.deepBlack};
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
`,Pl=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych."},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."},{id:4,question:"Czy za realizacj\u0119 projektu otrzymam faktur\u0119?",answer:"Tak. Za ka\u017cd\u0105 us\u0142ug\u0119 wystawiamy faktur\u0119 (bez VAT), kt\xf3r\u0105 otrzymasz na e-mail. Mo\u017cesz j\u0105 w ca\u0142o\u015bci wliczy\u0107 w koszty uzyskania przychodu \u2013 to najprostsze i najbezpieczniejsze rozwi\u0105zanie dla Twojego biznesu. Nie musisz martwi\u0107 si\u0119 o \u017cadne dodatkowe formalno\u015bci, a my zapewniamy Ci pe\u0142n\u0105 transparentno\u015b\u0107 i profesjonalizm w rozliczeniach."},{id:5,question:"Czemu na Allegro ceny us\u0142ug s\u0105 wy\u017csze?",answer:"Wy\u017csza cena na platformie Allegro wynika wy\u0142\u0105cznie z wysokich prowizji i op\u0142at transakcyjnych pobieranych przez operatora. Kontaktuj\u0105c si\u0119 z nami bezpo\u015brednio, omijasz te dodatkowe koszty i otrzymujesz najlepsz\u0105 mo\u017cliw\u0105 ofert\u0119 przy zachowaniu tej samej jako\u015bci i gwarancji. "},{id:6,question:"Co je\u015bli nie mam w\u0142asnych profesjonalnych zdj\u0119\u0107 lub tekst\xf3w?",answer:"Bez obaw, zajmiemy si\u0119 tym. Je\u015bli brakuje Ci fotografii, wygenerujemy dla Twojej marki unikalne grafiki AI, kt\xf3re idealnie oddadz\u0105 klimat Twojego biznesu. Pomo\u017cemy Ci te\u017c ubra\u0107 Twoje pomys\u0142y w profesjonalne s\u0142owa, aby strona od pocz\u0105tku budowa\u0142a Twoje zaufanie. "},{id:7,question:"Czy to autorskie projekty, czy gotowce z sieci?",answer:"Ka\u017cdy element naszej kolekcji stworzyli\u015bmy sami \u2013 od pierwszej linii kodu po ostatni detal wizualny. Nie u\u017cywamy WordPressa ani ci\u0119\u017ckich, powolnych kreator\xf3w stron. Wybieraj\u0105c nas, otrzymujesz unikalny produkt w technologii React.js, a nie masowy szablon, kt\xf3ry posiada co druga firma w Twojej bran\u017cy."},{id:8,question:"Czy b\u0119d\u0119 mie\u0107 pe\u0142n\u0105 kontrol\u0119 i dost\u0119p do strony?",answer:"Jak najbardziej. Przekazujemy Ci komplet hase\u0142 i dost\u0119p\xf3w do Twoich w\u0142asnych kont. Nasz kod jest czysty i uporz\u0105dkowany \u2013 je\u015bli kiedykolwiek zdecydujesz si\u0119 przekaza\u0107 stron\u0119 innemu informatykowi, odnajdzie si\u0119 on w strukturze bez problemu. Jeste\u015b w 100% niezale\u017cna."},{id:9,question:"Jak strona radzi sobie w wyszukiwarce Google (SEO)?",answer:'Wi\u0119kszo\u015b\u0107 stron to ci\u0119\u017ckie projekty na WordPressie, kt\xf3re przez nadmiar zb\u0119dnych wtyczek l\u0105duj\u0105 na ko\u0144cu wynik\xf3w. Nasze strony budujemy "na lekko", co sprawia, \u017ce s\u0105 b\u0142yskawiczne i faworyzowane przez Google. To fundament, kt\xf3ry pozwala realnie powalczy\u0107 o najwy\u017csze pozycje.'},{id:10,question:"Czy strona b\u0119dzie bezpieczna (certyfikat SSL)?",answer:'Tak. Obok adresu Twojej strony zawsze b\u0119dzie widoczna "zielona k\u0142\xf3dka". Certyfikat SSL masz w cenie, co gwarantuje szyfrowanie danych i brak ostrze\u017ce\u0144 w przegl\u0105darkach. Twoja witryna b\u0119dzie w pe\u0142ni bezpieczna dla odwiedzaj\u0105cych.'},{id:11,question:"Jak nawi\u0105za\u0107 z nami wsp\xf3\u0142prac\u0119?",answer:"Masz dwie proste drogi. Mo\u017cesz dokona\u0107 zakupu bezpo\u015brednio przez nasz profil na Allegro lub napisa\u0107 do nas wiadomo\u015b\u0107 e-mail. W odpowiedzi otrzymasz od nas kr\xf3tk\u0105 instrukcj\u0119 i ankiet\u0119, kt\xf3ra pomo\u017ce nam doprecyzowa\u0107 wygl\u0105d Twojej nowej strony. Wi\u0119cej szczeg\xf3\u0142\xf3w na temat ca\u0142ego procesu znajdziesz na naszej podstronie Wsp\xf3\u0142praca."}],$l=()=>{const e=pe();return(0,ka.jsx)(bl,{children:(0,ka.jsxs)(xl,{children:[(0,ka.jsxs)(wl,{children:[(0,ka.jsx)(kl,{children:"Najcz\u0119stsze Pytania"}),(0,ka.jsx)(Sl,{children:"Znaleziono odpowiedzi na Twoje w\u0105tpliwo\u015bci. Poni\u017cej znajduje si\u0119 kompletny przewodnik po najcz\u0119\u015bciej zadawanych pytaniach dotycz\u0105cych naszych us\u0142ug."})]}),(0,ka.jsx)(zl,{children:Pl.map((e,t)=>(0,ka.jsxs)(El,{style:{"--index":t},children:[(0,ka.jsx)(Cl,{children:e.question}),(0,ka.jsx)(jl,{children:e.answer})]},e.id))}),(0,ka.jsx)(_l,{children:(0,ka.jsx)(Tl,{onClick:()=>e("/"),children:"Powr\xf3t do strony g\u0142\xf3wnej"})})]})})},Nl=ha.div`
  flex: 1;
  padding-top: 90px;

  @media (max-width: 821px) {
    padding-top: 70px;
  }
`;const Ol=function(){return(0,ka.jsxs)(ka.Fragment,{children:[(0,ka.jsx)(Ao,{}),(0,ka.jsx)(Sa,{}),(0,ka.jsx)(lo,{}),(0,ka.jsx)(Lo,{}),(0,ka.jsx)(Nl,{children:(0,ka.jsxs)(Le,{children:[(0,ka.jsx)(Oe,{path:"/",element:(0,ka.jsx)(Ci,{})}),(0,ka.jsx)(Oe,{path:"/about",element:(0,ka.jsx)(vl,{})}),(0,ka.jsx)(Oe,{path:"/questions",element:(0,ka.jsx)($l,{})})]})}),(0,ka.jsx)(Ro,{})]})};o.createRoot(document.getElementById("root")).render((0,ka.jsx)(r.StrictMode,{children:(0,ka.jsx)(mt,{basename:"/klara-queen",children:(0,ka.jsx)(Ol,{})})}))})();
//# sourceMappingURL=main.74c0c4e4.js.map