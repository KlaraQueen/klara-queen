/*! For license information please see main.600fa517.js.LICENSE.txt */
(()=>{"use strict";var e={4(e,t,n){var r=n(853),a=n(43),o=n(950);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(s(e)!==e)throw Error(i(188))}function p(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=p(e)))return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),E=Symbol.for("react.lazy");Symbol.for("react.scope");var C=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var _=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var P=Symbol.iterator;function T(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=P&&e[P]||e["@@iterator"])?e:null}var $=Symbol.for("react.client.reference");function N(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===$?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case y:return"Fragment";case b:return"Profiler";case v:return"StrictMode";case z:return"Suspense";case S:return"SuspenseList";case C:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case g:return"Portal";case w:return e.displayName||"Context";case x:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case j:return null!==(t=e.displayName||null)?t:N(e.type)||"Memo";case E:t=e._payload,e=e._init;try{return N(e(t))}catch(Gn){}}return null}var O=Array.isArray,R=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M={pending:!1,data:null,method:null,action:null},A=[],D=-1;function I(e){return{current:e}}function F(e){0>D||(e.current=A[D],A[D]=null,D--)}function U(e,t){D++,A[D]=e.current,e.current=t}var H,W,B=I(null),V=I(null),G=I(null),q=I(null);function K(e,t){switch(U(G,t),U(V,e),U(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=bd(t=vd(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(B),U(B,e)}function Y(){F(B),F(V),F(G)}function Q(e){null!==e.memoizedState&&U(q,e);var t=B.current,n=bd(t,e.type);t!==n&&(U(V,e),U(B,n))}function X(e){V.current===e&&(F(B),F(V)),q.current===e&&(F(q),dp._currentValue=M)}function J(e){if(void 0===H)try{throw Error()}catch(Gn){var t=Gn.stack.trim().match(/\n( *(at )?)/);H=t&&t[1]||"",W=-1<Gn.stack.indexOf("\n    at")?" (<anonymous>)":-1<Gn.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+H+e+W}var Z=!1;function ee(e,t){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(Gn){var r=Gn}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(i){if(i&&r&&"string"===typeof i.stack)return[i.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),i=o[0],l=o[1];if(i&&l){var s=i.split("\n"),c=l.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===c.length)for(r=s.length-1,a=c.length-1;1<=r&&0<=a&&s[r]!==c[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==c[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==c[a]){var u="\n"+s[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=a);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?J(n):""}function te(e,t){switch(e.tag){case 26:case 27:case 5:return J(e.type);case 16:return J("Lazy");case 13:return e.child!==t&&null!==t?J("Suspense Fallback"):J("Suspense");case 19:return J("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return J("Activity");default:return""}}function ne(e){try{var t="",n=null;do{t+=te(e,n),n=e,e=e.return}while(e);return t}catch(Gn){return"\nError generating stack: "+Gn.message+"\n"+Gn.stack}}var re=Object.prototype.hasOwnProperty,ae=r.unstable_scheduleCallback,oe=r.unstable_cancelCallback,ie=r.unstable_shouldYield,le=r.unstable_requestPaint,se=r.unstable_now,ce=r.unstable_getCurrentPriorityLevel,ue=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,pe=r.unstable_NormalPriority,fe=r.unstable_LowPriority,me=r.unstable_IdlePriority,he=r.log,ge=r.unstable_setDisableYieldValue,ye=null,ve=null;function be(e){if("function"===typeof he&&ge(e),ve&&"function"===typeof ve.setStrictMode)try{ve.setStrictMode(ye,e)}catch(t){}}var xe=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(we(e)/ke|0)|0},we=Math.log,ke=Math.LN2;var ze=256,Se=262144,je=4194304;function Ee(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ce(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var a=0,o=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=134217727&r;return 0!==l?0!==(r=l&~o)?a=Ee(r):0!==(i&=l)?a=Ee(i):n||0!==(n=l&~e)&&(a=Ee(n)):0!==(l=r&~o)?a=Ee(l):0!==i?a=Ee(i):n||0!==(n=r&~e)&&(a=Ee(n)),0===a?0:0!==t&&t!==a&&0===(t&o)&&((o=a&-a)>=(n=t&-t)||32===o&&0!==(4194048&n))?t:a}function _e(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Pe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Te(){var e=je;return 0===(62914560&(je<<=1))&&(je=4194304),e}function $e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ne(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Oe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-xe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function Re(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Le(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:Me(n))&(e.suspendedLanes|t))?0:n}function Me(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ae(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function De(){var e=L.p;return 0!==e?e:void 0===(e=window.event)?32:Cp(e.type)}function Ie(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var Fe=Math.random().toString(36).slice(2),Ue="__reactFiber$"+Fe,He="__reactProps$"+Fe,We="__reactContainer$"+Fe,Be="__reactEvents$"+Fe,Ve="__reactListeners$"+Fe,Ge="__reactHandles$"+Fe,qe="__reactResources$"+Fe,Ke="__reactMarker$"+Fe;function Ye(e){delete e[Ue],delete e[He],delete e[Be],delete e[Ve],delete e[Ge]}function Qe(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[We]||n[Ue]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Ad(e);null!==e;){if(n=e[Ue])return n;e=Ad(e)}return t}n=(e=n).parentNode}return null}function Xe(e){if(e=e[Ue]||e[We]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function Je(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(i(33))}function Ze(e){var t=e[qe];return t||(t=e[qe]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Ke]=!0}var tt=new Set,nt={};function rt(e,t){at(e,t),at(e+"Capture",t)}function at(e,t){for(nt[e]=t,e=0;e<t.length;e++)tt.add(t[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},lt={};function st(e,t,n){if(a=t,re.call(lt,a)||!re.call(it,a)&&(ot.test(a)?lt[a]=!0:(it[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function ct(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function ut(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function pt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ft(e){if(!e._valueTracker){var t=pt(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pt(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ht(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var gt=/[\n"\\]/g;function yt(e){return e.replace(gt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function vt(e,t,n,r,a,o,i,l){e.name="",null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?xt(e,i,dt(t)):null!=n?xt(e,i,dt(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=o&&(e.defaultChecked=!!o),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+dt(l):e.removeAttribute("name")}function bt(e,t,n,r,a,o,i,l){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=n){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return void ft(e);n=null!=n?""+dt(n):"",t=null!=t?""+dt(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.name=i),ft(e)}function xt(e,t,n){"number"===t&&ht(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function wt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function kt(e,t,n){null==t||((t=""+dt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+dt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function zt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(i(92));if(O(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=dt(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),ft(e)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var jt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Et(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||jt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ct(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(i(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Et(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Et(e,o,t[o])}function _t(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $t(e){return Tt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Nt(){}var Ot=null;function Rt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Lt=null,Mt=null;function At(e){var t=Xe(e);if(t&&(e=t.stateNode)){var n=e[He]||null;e:switch(e=t.stateNode,t.type){case"input":if(vt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[He]||null;if(!a)throw Error(i(90));vt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&mt(r)}break e;case"textarea":kt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&wt(e,!!n.multiple,t,!1)}}}var Dt=!1;function It(e,t,n){if(Dt)return e(t,n);Dt=!0;try{return e(t)}finally{if(Dt=!1,(null!==Lt||null!==Mt)&&(eu(),Lt&&(t=Lt,e=Mt,Mt=Lt=null,At(t),e)))for(t=0;t<e.length;t++)At(e[t])}}function Ft(e,t){var n=e.stateNode;if(null===n)return null;var r=n[He]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Ut=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Ht=!1;if(Ut)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){Ht=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch(Jp){Ht=!1}var Bt=null,Vt=null,Gt=null;function qt(){if(Gt)return Gt;var e,t,n=Vt,r=n.length,a="value"in Bt?Bt.value:Bt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Gt=a.slice(e,1<t?1-t:void 0)}function Kt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Yt(){return!0}function Qt(){return!1}function Xt(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Yt:Qt,this.isPropagationStopped=Qt,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Yt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Yt)},persist:function(){},isPersistent:Yt}),t}var Jt,Zt,en,tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nn=Xt(tn),rn=f({},tn,{view:0,detail:0}),an=Xt(rn),on=f({},rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&"mousemove"===e.type?(Jt=e.screenX-en.screenX,Zt=e.screenY-en.screenY):Zt=Jt=0,en=e),Jt)},movementY:function(e){return"movementY"in e?e.movementY:Zt}}),ln=Xt(on),sn=Xt(f({},on,{dataTransfer:0})),cn=Xt(f({},rn,{relatedTarget:0})),un=Xt(f({},tn,{animationName:0,elapsedTime:0,pseudoElement:0})),dn=Xt(f({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),pn=Xt(f({},tn,{data:0})),fn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=hn[e])&&!!t[e]}function yn(){return gn}var vn=Xt(f({},rn,{key:function(e){if(e.key){var t=fn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Kt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?mn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yn,charCode:function(e){return"keypress"===e.type?Kt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Kt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),bn=Xt(f({},on,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),xn=Xt(f({},rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yn})),wn=Xt(f({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),kn=Xt(f({},on,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),zn=Xt(f({},tn,{newState:0,oldState:0})),Sn=[9,13,27,32],jn=Ut&&"CompositionEvent"in window,En=null;Ut&&"documentMode"in document&&(En=document.documentMode);var Cn=Ut&&"TextEvent"in window&&!En,_n=Ut&&(!jn||En&&8<En&&11>=En),Pn=String.fromCharCode(32),Tn=!1;function $n(e,t){switch(e){case"keyup":return-1!==Sn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var On=!1;var Rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ln(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Rn[e.type]:"textarea"===t}function Mn(e,t,n,r){Lt?Mt?Mt.push(r):Mt=[r]:Lt=r,0<(t=ad(t,"onChange")).length&&(n=new nn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var An=null,Dn=null;function In(e){Qu(e,0)}function Fn(e){if(mt(Je(e)))return e}function Un(e,t){if("change"===e)return t}var Hn=!1;if(Ut){var Wn;if(Ut){var Bn="oninput"in document;if(!Bn){var Vn=document.createElement("div");Vn.setAttribute("oninput","return;"),Bn="function"===typeof Vn.oninput}Wn=Bn}else Wn=!1;Hn=Wn&&(!document.documentMode||9<document.documentMode)}function qn(){An&&(An.detachEvent("onpropertychange",Kn),Dn=An=null)}function Kn(e){if("value"===e.propertyName&&Fn(Dn)){var t=[];Mn(t,Dn,e,Rt(e)),It(In,t)}}function Yn(e,t,n){"focusin"===e?(qn(),Dn=n,(An=t).attachEvent("onpropertychange",Kn)):"focusout"===e&&qn()}function Qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Fn(Dn)}function Xn(e,t){if("click"===e)return Fn(t)}function Jn(e,t){if("input"===e||"change"===e)return Fn(t)}var Zn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function er(e,t){if(Zn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!re.call(t,a)||!Zn(e[a],t[a]))return!1}return!0}function tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nr(e,t){var n,r=tr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=tr(r)}}function rr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?rr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ar(e){for(var t=ht((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ht((e=t.contentWindow).document)}return t}function or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ir=Ut&&"documentMode"in document&&11>=document.documentMode,lr=null,sr=null,cr=null,ur=!1;function dr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ur||null==lr||lr!==ht(r)||("selectionStart"in(r=lr)&&or(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},cr&&er(cr,r)||(cr=r,0<(r=ad(sr,"onSelect")).length&&(t=new nn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lr)))}function pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},mr={},hr={};function gr(e){if(mr[e])return mr[e];if(!fr[e])return e;var t,n=fr[e];for(t in n)if(n.hasOwnProperty(t)&&t in hr)return mr[e]=n[t];return e}Ut&&(hr=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);var yr=gr("animationend"),vr=gr("animationiteration"),br=gr("animationstart"),xr=gr("transitionrun"),wr=gr("transitionstart"),kr=gr("transitioncancel"),zr=gr("transitionend"),Sr=new Map,jr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){Sr.set(e,t),rt(t,[e])}jr.push("scrollEnd");var Cr="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},_r=[],Pr=0,Tr=0;function $r(){for(var e=Pr,t=Tr=Pr=0;t<e;){var n=_r[t];_r[t++]=null;var r=_r[t];_r[t++]=null;var a=_r[t];_r[t++]=null;var o=_r[t];if(_r[t++]=null,null!==r&&null!==a){var i=r.pending;null===i?a.next=a:(a.next=i.next,i.next=a),r.pending=a}0!==o&&Lr(n,a,o)}}function Nr(e,t,n,r){_r[Pr++]=e,_r[Pr++]=t,_r[Pr++]=n,_r[Pr++]=r,Tr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Or(e,t,n,r){return Nr(e,t,n,r),Mr(e)}function Rr(e,t){return Nr(e,null,null,t),Mr(e)}function Lr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(a=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,a&&null!==t&&(a=31-xe(n),null===(r=(e=o.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),o):null}function Mr(e){if(50<Vc)throw Vc=0,Gc=null,Error(i(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Ar={};function Dr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ir(e,t,n,r){return new Dr(e,t,n,r)}function Fr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ur(e,t){var n=e.alternate;return null===n?((n=Ir(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hr(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wr(e,t,n,r,a,o){var l=0;if(r=e,"function"===typeof e)Fr(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case C:return(e=Ir(31,n,t,a)).elementType=C,e.lanes=o,e;case y:return Br(n.children,a,o,t);case v:l=8,a|=24;break;case b:return(e=Ir(12,n,t,2|a)).elementType=b,e.lanes=o,e;case z:return(e=Ir(13,n,t,a)).elementType=z,e.lanes=o,e;case S:return(e=Ir(19,n,t,a)).elementType=S,e.lanes=o,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case w:l=10;break e;case x:l=9;break e;case k:l=11;break e;case j:l=14;break e;case E:l=16,r=null;break e}l=29,n=Error(i(130,null===e?"null":typeof e,"")),r=null}return(t=Ir(l,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Br(e,t,n,r){return(e=Ir(7,e,r,t)).lanes=n,e}function Vr(e,t,n){return(e=Ir(6,e,null,t)).lanes=n,e}function Gr(e){var t=Ir(18,null,null,0);return t.stateNode=e,t}function qr(e,t,n){return(t=Ir(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Kr=new WeakMap;function Yr(e,t){if("object"===typeof e&&null!==e){var n=Kr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ne(t)},Kr.set(e,t),t)}return{value:e,source:t,stack:ne(t)}}var Qr=[],Xr=0,Jr=null,Zr=0,ea=[],ta=0,na=null,ra=1,aa="";function oa(e,t){Qr[Xr++]=Zr,Qr[Xr++]=Jr,Jr=e,Zr=t}function ia(e,t,n){ea[ta++]=ra,ea[ta++]=aa,ea[ta++]=na,na=e;var r=ra;e=aa;var a=32-xe(r)-1;r&=~(1<<a),n+=1;var o=32-xe(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,ra=1<<32-xe(t)+a|n<<a|r,aa=o+e}else ra=1<<o|n<<a|r,aa=e}function la(e){null!==e.return&&(oa(e,1),ia(e,1,0))}function sa(e){for(;e===Jr;)Jr=Qr[--Xr],Qr[Xr]=null,Zr=Qr[--Xr],Qr[Xr]=null;for(;e===na;)na=ea[--ta],ea[ta]=null,aa=ea[--ta],ea[ta]=null,ra=ea[--ta],ea[ta]=null}function ca(e,t){ea[ta++]=ra,ea[ta++]=aa,ea[ta++]=na,ra=t.id,aa=t.overflow,na=e}var ua=null,da=null,pa=!1,fa=null,ma=!1,ha=Error(i(519));function ga(e){throw ka(Yr(Error(i(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),ha}function ya(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ue]=e,t[He]=r,n){case"dialog":Xu("cancel",t),Xu("close",t);break;case"iframe":case"object":case"embed":Xu("load",t);break;case"video":case"audio":for(n=0;n<Ku.length;n++)Xu(Ku[n],t);break;case"source":Xu("error",t);break;case"img":case"image":case"link":Xu("error",t),Xu("load",t);break;case"details":Xu("toggle",t);break;case"input":Xu("invalid",t),bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Xu("invalid",t);break;case"textarea":Xu("invalid",t),zt(t,r.value,r.defaultValue,r.children)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||ud(t.textContent,n)?(null!=r.popover&&(Xu("beforetoggle",t),Xu("toggle",t)),null!=r.onScroll&&Xu("scroll",t),null!=r.onScrollEnd&&Xu("scrollend",t),null!=r.onClick&&(t.onclick=Nt),t=!0):t=!1,t||ga(e,!0)}function va(e){for(ua=e.return;ua;)switch(ua.tag){case 5:case 31:case 13:return void(ma=!1);case 27:case 3:return void(ma=!0);default:ua=ua.return}}function ba(e){if(e!==ua)return!1;if(!pa)return va(e),pa=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||xd(e.type,e.memoizedProps)),t=!t),t&&da&&ga(e),va(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));da=Md(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));da=Md(e)}else 27===n?(n=da,Cd(e.type)?(e=Ld,Ld=null,da=e):da=n):da=ua?Rd(e.stateNode.nextSibling):null;return!0}function xa(){da=ua=null,pa=!1}function wa(){var e=fa;return null!==e&&(null===$c?$c=e:$c.push.apply($c,e),fa=null),e}function ka(e){null===fa?fa=[e]:fa.push(e)}var za=I(null),Sa=null,ja=null;function Ea(e,t,n){U(za,t._currentValue),t._currentValue=n}function Ca(e){e._currentValue=za.current,F(za)}function _a(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pa(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var o=a.dependencies;if(null!==o){var l=a.child;o=o.firstContext;e:for(;null!==o;){var s=o;o=a;for(var c=0;c<t.length;c++)if(s.context===t[c]){o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),_a(o.return,n,e),r||(l=null);break e}o=s.next}}else if(18===a.tag){if(null===(l=a.return))throw Error(i(341));l.lanes|=n,null!==(o=l.alternate)&&(o.lanes|=n),_a(l,n,e),l=null}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===e){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}}function Ta(e,t,n,r){e=null;for(var a=t,o=!1;null!==a;){if(!o)if(0!==(524288&a.flags))o=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var l=a.alternate;if(null===l)throw Error(i(387));if(null!==(l=l.memoizedProps)){var s=a.type;Zn(a.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(a===q.current){if(null===(l=a.alternate))throw Error(i(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(dp):e=[dp])}a=a.return}null!==e&&Pa(t,e,n,r),t.flags|=262144}function $a(e){for(e=e.firstContext;null!==e;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Na(e){Sa=e,ja=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Oa(e){return La(Sa,e)}function Ra(e,t){return null===Sa&&Na(e),La(e,t)}function La(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===ja){if(null===e)throw Error(i(308));ja=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ja=ja.next=t;return n}var Ma="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Aa=r.unstable_scheduleCallback,Da=r.unstable_NormalPriority,Ia={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fa(){return{controller:new Ma,data:new Map,refCount:0}}function Ua(e){e.refCount--,0===e.refCount&&Aa(Da,function(){e.controller.abort()})}var Ha=null,Wa=0,Ba=0,Va=null;function Ga(){if(0===--Wa&&null!==Ha){null!==Va&&(Va.status="fulfilled");var e=Ha;Ha=null,Ba=0,Va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var qa=R.S;R.S=function(e,t){Rc=se(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Ha){var n=Ha=[];Wa=0,Ba=Wu(),Va={status:"pending",value:void 0,then:function(e){n.push(e)}}}Wa++,t.then(Ga,Ga)}(0,t),null!==qa&&qa(e,t)};var Ka=I(null);function Ya(){var e=Ka.current;return null!==e?e:hc.pooledCache}function Qa(e,t){U(Ka,null===t?Ka.current:t.pool)}function Xa(){var e=Ya();return null===e?null:{parent:Ia._currentValue,pool:e}}var Ja=Error(i(460)),Za=Error(i(474)),eo=Error(i(542)),to={then:function(){}};function no(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ro(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Nt,Nt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw lo(e=t.reason),e;default:if("string"===typeof t.status)t.then(Nt,Nt);else{if(null!==(e=hc)&&100<e.shellSuspendCounter)throw Error(i(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw lo(e=t.reason),e}throw oo=t,Ja}}function ao(e){try{return(0,e._init)(e._payload)}catch(Gn){if(null!==Gn&&"object"===typeof Gn&&"function"===typeof Gn.then)throw oo=Gn,Ja;throw Gn}}var oo=null;function io(){if(null===oo)throw Error(i(459));var e=oo;return oo=null,e}function lo(e){if(e===Ja||e===eo)throw Error(i(483))}var so=null,co=0;function uo(e){var t=co;return co+=1,null===so&&(so=[]),ro(so,e,t)}function po(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function fo(e,t){if(t.$$typeof===m)throw Error(i(525));throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Ur(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Vr(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===y?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===E&&ao(o)===t.type)?(po(t=a(t,n.props),n),t.return=e,t):(po(t=Wr(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=qr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Br(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Vr(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case h:return po(n=Wr(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case g:return(t=qr(t,e.mode,n)).return=e,t;case E:return p(e,t=ao(t),n)}if(O(t)||T(t))return(t=Br(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return p(e,uo(t),n);if(t.$$typeof===w)return p(e,Ra(e,t),n);fo(e,t)}return null}function f(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===a?c(e,t,n,r):null;case g:return n.key===a?u(e,t,n,r):null;case E:return f(e,t,n=ao(n),r)}if(O(n)||T(n))return null!==a?null:d(e,t,n,r,null);if("function"===typeof n.then)return f(e,t,uo(n),r);if(n.$$typeof===w)return f(e,t,Ra(e,n),r);fo(e,n)}return null}function m(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case h:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case g:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case E:return m(e,t,n,r=ao(r),a)}if(O(r)||T(r))return d(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return m(e,t,n,uo(r),a);if(r.$$typeof===w)return m(e,t,n,Ra(t,r),a);fo(t,r)}return null}function v(s,c,u,d){if("object"===typeof u&&null!==u&&u.type===y&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case h:e:{for(var b=u.key;null!==c;){if(c.key===b){if((b=u.type)===y){if(7===c.tag){n(s,c.sibling),(d=a(c,u.props.children)).return=s,s=d;break e}}else if(c.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===E&&ao(b)===c.type){n(s,c.sibling),po(d=a(c,u.props),u),d.return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}u.type===y?((d=Br(u.props.children,s.mode,d,u.key)).return=s,s=d):(po(d=Wr(u.type,u.key,u.props,null,s.mode,d),u),d.return=s,s=d)}return l(s);case g:e:{for(b=u.key;null!==c;){if(c.key===b){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(s,c.sibling),(d=a(c,u.children||[])).return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}(d=qr(u,s.mode,d)).return=s,s=d}return l(s);case E:return v(s,c,u=ao(u),d)}if(O(u))return function(a,i,l,s){for(var c=null,u=null,d=i,h=i=0,g=null;null!==d&&h<l.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var y=f(a,d,l[h],s);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(a,d),i=o(y,i,h),null===u?c=y:u.sibling=y,u=y,d=g}if(h===l.length)return n(a,d),pa&&oa(a,h),c;if(null===d){for(;h<l.length;h++)null!==(d=p(a,l[h],s))&&(i=o(d,i,h),null===u?c=d:u.sibling=d,u=d);return pa&&oa(a,h),c}for(d=r(d);h<l.length;h++)null!==(g=m(d,a,h,l[h],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?h:g.key),i=o(g,i,h),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(a,e)}),pa&&oa(a,h),c}(s,c,u,d);if(T(u)){if("function"!==typeof(b=T(u)))throw Error(i(150));return function(a,l,s,c){if(null==s)throw Error(i(151));for(var u=null,d=null,h=l,g=l=0,y=null,v=s.next();null!==h&&!v.done;g++,v=s.next()){h.index>g?(y=h,h=null):y=h.sibling;var b=f(a,h,v.value,c);if(null===b){null===h&&(h=y);break}e&&h&&null===b.alternate&&t(a,h),l=o(b,l,g),null===d?u=b:d.sibling=b,d=b,h=y}if(v.done)return n(a,h),pa&&oa(a,g),u;if(null===h){for(;!v.done;g++,v=s.next())null!==(v=p(a,v.value,c))&&(l=o(v,l,g),null===d?u=v:d.sibling=v,d=v);return pa&&oa(a,g),u}for(h=r(h);!v.done;g++,v=s.next())null!==(v=m(h,a,g,v.value,c))&&(e&&null!==v.alternate&&h.delete(null===v.key?g:v.key),l=o(v,l,g),null===d?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),pa&&oa(a,g),u}(s,c,u=b.call(u),d)}if("function"===typeof u.then)return v(s,c,uo(u),d);if(u.$$typeof===w)return v(s,c,Ra(s,u),d);fo(s,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(s,c.sibling),(d=a(c,u)).return=s,s=d):(n(s,c),(d=Vr(u,s.mode,d)).return=s,s=d),l(s)):n(s,c)}return function(e,t,n,r){try{co=0;var a=v(e,t,n,r);return so=null,a}catch(Gn){if(Gn===Ja||Gn===eo)throw Gn;var o=Ir(29,Gn,null,e.mode);return o.lanes=r,o.return=e,o}}}var ho=mo(!0),go=mo(!1),yo=!1;function vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&mc)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Mr(e),Lr(e,null,n),t}return Nr(e,r,t,n),Mr(e)}function ko(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}function zo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var So=!1;function jo(){if(So){if(null!==Va)throw Va}}function Eo(e,t,n,r){So=!1;var a=e.updateQueue;yo=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?o=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,u=c=s=null,l=o;;){var p=-536870913&l.lane,m=p!==l.lane;if(m?(yc&p)===p:(r&p)===p){0!==p&&p===Ba&&(So=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,g=l;p=t;var y=n;switch(g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(y,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=g.payload)?h.call(y,d,p):h)||void 0===p)break e;d=f({},d,p);break e;case 2:yo=!0}}null!==(p=l.callback)&&(e.flags|=64,m&&(e.flags|=8192),null===(m=a.callbacks)?a.callbacks=[p]:m.push(p))}else m={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=m,s=d):u=u.next=m,i|=p;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(m=l).next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null===o&&(a.shared.lanes=0),jc|=i,e.lanes=i,e.memoizedState=d}}function Co(e,t){if("function"!==typeof e)throw Error(i(191,e));e.call(t)}function _o(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)Co(n[e],t)}var Po=I(null),To=I(0);function $o(e,t){U(To,e=zc),U(Po,t),zc=e|t.baseLanes}function No(){U(To,zc),U(Po,Po.current)}function Oo(){zc=To.current,F(Po),F(To)}var Ro=I(null),Lo=null;function Mo(e){var t=e.alternate;U(Uo,1&Uo.current),U(Ro,e),null===Lo&&(null===t||null!==Po.current||null!==t.memoizedState)&&(Lo=e)}function Ao(e){U(Uo,Uo.current),U(Ro,e),null===Lo&&(Lo=e)}function Do(e){22===e.tag?(U(Uo,Uo.current),U(Ro,e),null===Lo&&(Lo=e)):Io()}function Io(){U(Uo,Uo.current),U(Ro,Ro.current)}function Fo(e){F(Ro),Lo===e&&(Lo=null),F(Uo)}var Uo=I(0);function Ho(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Nd(n)||Od(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child;continue}}else if(0!==(128&t.flags))return t;if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wo=0,Bo=null,Vo=null,Go=null,qo=!1,Ko=!1,Yo=!1,Qo=0,Xo=0,Jo=null,Zo=0;function ei(){throw Error(i(321))}function ti(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Zn(e[n],t[n]))return!1;return!0}function ni(e,t,n,r,a,o){return Wo=o,Bo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=null===e||null===e.memoizedState?yl:vl,Yo=!1,o=n(r,a),Yo=!1,Ko&&(o=ai(t,n,r,a)),ri(e),o}function ri(e){R.H=gl;var t=null!==Vo&&null!==Vo.next;if(Wo=0,Go=Vo=Bo=null,qo=!1,Xo=0,Jo=null,t)throw Error(i(300));null===e||Rl||null!==(e=e.dependencies)&&$a(e)&&(Rl=!0)}function ai(e,t,n,r){Bo=e;var a=0;do{if(Ko&&(Jo=null),Xo=0,Ko=!1,25<=a)throw Error(i(301));if(a+=1,Go=Vo=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}R.H=bl,o=t(n,r)}while(Ko);return o}function oi(){var e=R.H,t=e.useState()[0];return t="function"===typeof t.then?di(t):t,e=e.useState()[0],(null!==Vo?Vo.memoizedState:null)!==e&&(Bo.flags|=1024),t}function ii(){var e=0!==Qo;return Qo=0,e}function li(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function si(e){if(qo){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}qo=!1}Wo=0,Go=Vo=Bo=null,Ko=!1,Xo=Qo=0,Jo=null}function ci(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Go?Bo.memoizedState=Go=e:Go=Go.next=e,Go}function ui(){if(null===Vo){var e=Bo.alternate;e=null!==e?e.memoizedState:null}else e=Vo.next;var t=null===Go?Bo.memoizedState:Go.next;if(null!==t)Go=t,Vo=e;else{if(null===e){if(null===Bo.alternate)throw Error(i(467));throw Error(i(310))}e={memoizedState:(Vo=e).memoizedState,baseState:Vo.baseState,baseQueue:Vo.baseQueue,queue:Vo.queue,next:null},null===Go?Bo.memoizedState=Go=e:Go=Go.next=e}return Go}function di(e){var t=Xo;return Xo+=1,null===Jo&&(Jo=[]),e=ro(Jo,e,t),t=Bo,null===(null===Go?t.memoizedState:Go.next)&&(t=t.alternate,R.H=null===t||null===t.memoizedState?yl:vl),e}function pi(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return di(e);if(e.$$typeof===w)return Oa(e)}throw Error(i(438,String(e)))}function fi(e){var t=null,n=Bo.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Bo.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=_;return t.index++,n}function mi(e,t){return"function"===typeof t?t(e):t}function hi(e){return gi(ui(),Vo,e)}function gi(e,t,n){var r=e.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,null===a)e.memoizedState=o;else{var s=l=null,c=null,u=t=a.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(yc&p)===p:(Wo&p)===p){var f=u.revertLane;if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Ba&&(d=!0);else{if((Wo&f)===f){u=u.next,f===Ba&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=p,l=o):c=c.next=p,Bo.lanes|=f,jc|=f}p=u.action,Yo&&n(o,p),o=u.hasEagerState?u.eagerState:n(o,p)}else f={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,l=o):c=c.next=f,Bo.lanes|=p,jc|=p;u=u.next}while(null!==u&&u!==t);if(null===c?l=o:c.next=s,!Zn(o,e.memoizedState)&&(Rl=!0,d&&null!==(n=Va)))throw n;e.memoizedState=o,e.baseState=l,e.baseQueue=c,r.lastRenderedState=o}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function yi(e){var t=ui(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);Zn(o,t.memoizedState)||(Rl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function vi(e,t,n){var r=Bo,a=ui(),o=pa;if(o){if(void 0===n)throw Error(i(407));n=n()}else n=t();var l=!Zn((Vo||a).memoizedState,n);if(l&&(a.memoizedState=n,Rl=!0),a=a.queue,Wi(wi.bind(null,r,a,e),[e]),a.getSnapshot!==t||l||null!==Go&&1&Go.memoizedState.tag){if(r.flags|=2048,Di(9,{destroy:void 0},xi.bind(null,r,a,n,t),null),null===hc)throw Error(i(349));o||0!==(127&Wo)||bi(r,t,n)}return n}function bi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Bo.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function xi(e,t,n,r){t.value=n,t.getSnapshot=r,ki(t)&&zi(e)}function wi(e,t,n){return n(function(){ki(t)&&zi(e)})}function ki(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zn(e,n)}catch(r){return!0}}function zi(e){var t=Rr(e,2);null!==t&&Yc(t,e,2)}function Si(e){var t=ci();if("function"===typeof e){var n=e;if(e=n(),Yo){be(!0);try{n()}finally{be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:e},t}function ji(e,t,n,r){return e.baseState=n,gi(e,Vo,"function"===typeof r?r:mi)}function Ei(e,t,n,r,a){if(fl(e))throw Error(i(485));if(null!==(e=t.action)){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==R.T?n(!0):o.isTransition=!1,r(o),null===(n=t.pending)?(o.next=t.pending=o,Ci(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ci(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var o=R.T,i={};R.T=i;try{var l=n(a,r),s=R.S;null!==s&&s(i,l),_i(e,t,l)}catch(c){Ti(e,t,c)}finally{null!==o&&null!==i.types&&(o.types=i.types),R.T=o}}else try{_i(e,t,o=n(a,r))}catch(u){Ti(e,t,u)}}function _i(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){Pi(e,t,n)},function(n){return Ti(e,t,n)}):Pi(e,t,n)}function Pi(e,t,n){t.status="fulfilled",t.value=n,$i(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,Ci(e,n)))}function Ti(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,$i(t),t=t.next}while(t!==r)}e.action=null}function $i(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ni(e,t){return t}function Oi(e,t){if(pa){var n=hc.formState;if(null!==n){e:{var r=Bo;if(pa){if(da){t:{for(var a=da,o=ma;8!==a.nodeType;){if(!o){a=null;break t}if(null===(a=Rd(a.nextSibling))){a=null;break t}}a="F!"===(o=a.data)||"F"===o?a:null}if(a){da=Rd(a.nextSibling),r="F!"===a.data;break e}}ga(r)}r=!1}r&&(t=n[0])}}return(n=ci()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:t},n.queue=r,n=ul.bind(null,Bo,r),r.dispatch=n,r=Si(!1),o=pl.bind(null,Bo,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=ci()).queue=a,n=Ei.bind(null,Bo,a,o,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ri(e){return Li(ui(),Vo,e)}function Li(e,t,n){if(t=gi(e,t,Ni)[0],e=hi(mi)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=di(t)}catch(Gn){if(Gn===Ja)throw eo;throw Gn}else r=t;var a=(t=ui()).queue,o=a.dispatch;return n!==t.memoizedState&&(Bo.flags|=2048,Di(9,{destroy:void 0},Mi.bind(null,a,n),null)),[r,o,e]}function Mi(e,t){e.action=t}function Ai(e){var t=ui(),n=Vo;if(null!==n)return Li(t,n,e);ui(),t=t.memoizedState;var r=(n=ui()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Di(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=Bo.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ii(){return ui().memoizedState}function Fi(e,t,n,r){var a=ci();Bo.flags|=e,a.memoizedState=Di(1|t,{destroy:void 0},n,void 0===r?null:r)}function Ui(e,t,n,r){var a=ui();r=void 0===r?null:r;var o=a.memoizedState.inst;null!==Vo&&null!==r&&ti(r,Vo.memoizedState.deps)?a.memoizedState=Di(t,o,n,r):(Bo.flags|=e,a.memoizedState=Di(1|t,o,n,r))}function Hi(e,t){Fi(8390656,8,e,t)}function Wi(e,t){Ui(2048,8,e,t)}function Bi(e){var t=ui().memoizedState;return function(e){Bo.flags|=4;var t=Bo.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&mc))throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Vi(e,t){return Ui(4,2,e,t)}function Gi(e,t){return Ui(4,4,e,t)}function qi(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Ki(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Ui(4,4,qi.bind(null,t,e),n)}function Yi(){}function Qi(e,t){var n=ui();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&ti(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xi(e,t){var n=ui();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&ti(t,r[1]))return r[0];if(r=e(),Yo){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r}function Ji(e,t,n){return void 0===n||0!==(1073741824&Wo)&&0===(261930&yc)?e.memoizedState=t:(e.memoizedState=n,e=Kc(),Bo.lanes|=e,jc|=e,n)}function Zi(e,t,n,r){return Zn(n,t)?n:null!==Po.current?(e=Ji(e,n,r),Zn(e,t)||(Rl=!0),e):0===(42&Wo)||0!==(1073741824&Wo)&&0===(261930&yc)?(Rl=!0,e.memoizedState=n):(e=Kc(),Bo.lanes|=e,jc|=e,t)}function el(e,t,n,r,a){var o=L.p;L.p=0!==o&&8>o?o:8;var i=R.T,l={};R.T=l,pl(e,!1,t,n);try{var s=a(),c=R.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)dl(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(s,r),qc());else dl(e,t,r,qc())}catch(u){dl(e,t,{then:function(){},status:"rejected",reason:u},qc())}finally{L.p=o,null!==i&&null!==l.types&&(i.types=l.types),R.T=i}}function tl(){}function nl(e,t,n,r){if(5!==e.tag)throw Error(i(476));var a=rl(e).queue;el(e,a,t,M,null===n?tl:function(){return al(e),n(r)})}function rl(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:M,baseState:M,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:M},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function al(e){var t=rl(e);null===t.next&&(t=e.alternate.memoizedState),dl(e,t.next.queue,{},qc())}function ol(){return Oa(dp)}function il(){return ui().memoizedState}function ll(){return ui().memoizedState}function sl(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=qc(),r=wo(t,e=xo(n),n);return null!==r&&(Yc(r,t,n),ko(r,t,n)),t={cache:Fa()},void(e.payload=t)}t=t.return}}function cl(e,t,n){var r=qc();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fl(e)?ml(t,n):null!==(n=Or(e,t,n,r))&&(Yc(n,e,r),hl(n,t,r))}function ul(e,t,n){dl(e,t,n,qc())}function dl(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fl(e))ml(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,Zn(l,i))return Nr(e,t,a,0),null===hc&&$r(),!1}catch(s){}if(null!==(n=Or(e,t,a,r)))return Yc(n,e,r),hl(n,t,r),!0}return!1}function pl(e,t,n,r){if(r={lane:2,revertLane:Wu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},fl(e)){if(t)throw Error(i(479))}else null!==(t=Or(e,n,r,2))&&Yc(t,e,2)}function fl(e){var t=e.alternate;return e===Bo||null!==t&&t===Bo}function ml(e,t){Ko=qo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hl(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}var gl={readContext:Oa,use:pi,useCallback:ei,useContext:ei,useEffect:ei,useImperativeHandle:ei,useLayoutEffect:ei,useInsertionEffect:ei,useMemo:ei,useReducer:ei,useRef:ei,useState:ei,useDebugValue:ei,useDeferredValue:ei,useTransition:ei,useSyncExternalStore:ei,useId:ei,useHostTransitionStatus:ei,useFormState:ei,useActionState:ei,useOptimistic:ei,useMemoCache:ei,useCacheRefresh:ei};gl.useEffectEvent=ei;var yl={readContext:Oa,use:pi,useCallback:function(e,t){return ci().memoizedState=[e,void 0===t?null:t],e},useContext:Oa,useEffect:Hi,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Fi(4194308,4,qi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fi(4194308,4,e,t)},useInsertionEffect:function(e,t){Fi(4,2,e,t)},useMemo:function(e,t){var n=ci();t=void 0===t?null:t;var r=e();if(Yo){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ci();if(void 0!==n){var a=n(t);if(Yo){be(!0);try{n(t)}finally{be(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=cl.bind(null,Bo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ci().memoizedState=e},useState:function(e){var t=(e=Si(e)).queue,n=ul.bind(null,Bo,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Yi,useDeferredValue:function(e,t){return Ji(ci(),e,t)},useTransition:function(){var e=Si(!1);return e=el.bind(null,Bo,e.queue,!0,!1),ci().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Bo,a=ci();if(pa){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===hc)throw Error(i(349));0!==(127&yc)||bi(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Hi(wi.bind(null,r,o,e),[e]),r.flags|=2048,Di(9,{destroy:void 0},xi.bind(null,r,o,n,t),null),n},useId:function(){var e=ci(),t=hc.identifierPrefix;if(pa){var n=aa;t="_"+t+"R_"+(n=(ra&~(1<<32-xe(ra)-1)).toString(32)+n),0<(n=Qo++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Zo++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ol,useFormState:Oi,useActionState:Oi,useOptimistic:function(e){var t=ci();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=pl.bind(null,Bo,!0,n),n.dispatch=t,[e,t]},useMemoCache:fi,useCacheRefresh:function(){return ci().memoizedState=sl.bind(null,Bo)},useEffectEvent:function(e){var t=ci(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&mc))throw Error(i(440));return n.impl.apply(void 0,arguments)}}},vl={readContext:Oa,use:pi,useCallback:Qi,useContext:Oa,useEffect:Wi,useImperativeHandle:Ki,useInsertionEffect:Vi,useLayoutEffect:Gi,useMemo:Xi,useReducer:hi,useRef:Ii,useState:function(){return hi(mi)},useDebugValue:Yi,useDeferredValue:function(e,t){return Zi(ui(),Vo.memoizedState,e,t)},useTransition:function(){var e=hi(mi)[0],t=ui().memoizedState;return["boolean"===typeof e?e:di(e),t]},useSyncExternalStore:vi,useId:il,useHostTransitionStatus:ol,useFormState:Ri,useActionState:Ri,useOptimistic:function(e,t){return ji(ui(),0,e,t)},useMemoCache:fi,useCacheRefresh:ll};vl.useEffectEvent=Bi;var bl={readContext:Oa,use:pi,useCallback:Qi,useContext:Oa,useEffect:Wi,useImperativeHandle:Ki,useInsertionEffect:Vi,useLayoutEffect:Gi,useMemo:Xi,useReducer:yi,useRef:Ii,useState:function(){return yi(mi)},useDebugValue:Yi,useDeferredValue:function(e,t){var n=ui();return null===Vo?Ji(n,e,t):Zi(n,Vo.memoizedState,e,t)},useTransition:function(){var e=yi(mi)[0],t=ui().memoizedState;return["boolean"===typeof e?e:di(e),t]},useSyncExternalStore:vi,useId:il,useHostTransitionStatus:ol,useFormState:Ai,useActionState:Ai,useOptimistic:function(e,t){var n=ui();return null!==Vo?ji(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fi,useCacheRefresh:ll};function xl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:f({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}bl.useEffectEvent=Bi;var wl={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qc(),a=xo(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=wo(e,a,r))&&(Yc(t,e,r),ko(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qc(),a=xo(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=wo(e,a,r))&&(Yc(t,e,r),ko(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qc(),r=xo(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=wo(e,r,n))&&(Yc(t,e,n),ko(t,e,n))}};function kl(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!er(n,r)||!er(a,o))}function zl(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wl.enqueueReplaceState(t,t.state,null)}function Sl(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=f({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}function jl(e){Cr(e)}function El(e){console.error(e)}function Cl(e){Cr(e)}function _l(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Pl(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Tl(e,t,n){return(n=xo(n)).tag=3,n.payload={element:null},n.callback=function(){_l(e,t)},n}function $l(e){return(e=xo(e)).tag=3,e}function Nl(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var o=r.value;e.payload=function(){return a(o)},e.callback=function(){Pl(t,n,r)}}var i=n.stateNode;null!==i&&"function"===typeof i.componentDidCatch&&(e.callback=function(){Pl(t,n,r),"function"!==typeof a&&(null===Ac?Ac=new Set([this]):Ac.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Ol=Error(i(461)),Rl=!1;function Ll(e,t,n,r){t.child=null===e?go(t,null,n,r):ho(t,e.child,n,r)}function Ml(e,t,n,r,a){n=n.render;var o=t.ref;if("ref"in r){var i={};for(var l in r)"ref"!==l&&(i[l]=r[l])}else i=r;return Na(t),r=ni(e,t,n,i,o,a),l=ii(),null===e||Rl?(pa&&l&&la(t),t.flags|=1,Ll(e,t,r,a),t.child):(li(e,t,a),os(e,t,a))}function Al(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Fr(o)||void 0!==o.defaultProps||null!==n.compare?((e=Wr(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Dl(e,t,o,r,a))}if(o=e.child,!is(e,a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:er)(i,r)&&e.ref===t.ref)return os(e,t,a)}return t.flags|=1,(e=Ur(o,r)).ref=t.ref,e.return=t,t.child=e}function Dl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(er(o,r)&&e.ref===t.ref){if(Rl=!1,t.pendingProps=r=o,!is(e,a))return t.lanes=e.lanes,os(e,t,a);0!==(131072&e.flags)&&(Rl=!0)}}return Vl(e,t,n,r,a)}function Il(e,t,n,r){var a=r.children,o=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(0!==(128&t.flags)){if(o=null!==o?o.baseLanes|n:n,null!==e){for(r=t.child=e.child,a=0;null!==r;)a=a|r.lanes|r.childLanes,r=r.sibling;r=a&~o}else r=0,t.child=null;return Ul(e,t,o,n,r)}if(0===(536870912&n))return r=t.lanes=536870912,Ul(e,t,null!==o?o.baseLanes|n:n,n,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Qa(0,null!==o?o.cachePool:null),null!==o?$o(t,o):No(),Do(t)}else null!==o?(Qa(0,o.cachePool),$o(t,o),Io(),t.memoizedState=null):(null!==e&&Qa(0,null),No(),Io());return Ll(e,t,a,n),t.child}function Fl(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ul(e,t,n,r,a){var o=Ya();return o=null===o?null:{parent:Ia._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&Qa(0,null),No(),Do(t),null!==e&&Ta(e,t,r,!0),t.childLanes=a,null}function Hl(e,t){return(t=es({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function Wl(e,t,n){return ho(t,e.child,null,n),(e=Hl(t,t.pendingProps)).flags|=2,Fo(t),t.memoizedState=null,e}function Bl(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(i(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Vl(e,t,n,r,a){return Na(t),n=ni(e,t,n,r,void 0,a),r=ii(),null===e||Rl?(pa&&r&&la(t),t.flags|=1,Ll(e,t,n,a),t.child):(li(e,t,a),os(e,t,a))}function Gl(e,t,n,r,a,o){return Na(t),t.updateQueue=null,n=ai(t,r,n,a),ri(e),r=ii(),null===e||Rl?(pa&&r&&la(t),t.flags|=1,Ll(e,t,n,o),t.child):(li(e,t,o),os(e,t,o))}function ql(e,t,n,r,a){if(Na(t),null===t.stateNode){var o=Ar,i=n.contextType;"object"===typeof i&&null!==i&&(o=Oa(i)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=wl,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},vo(t),i=n.contextType,o.context="object"===typeof i&&null!==i?Oa(i):Ar,o.state=t.memoizedState,"function"===typeof(i=n.getDerivedStateFromProps)&&(xl(t,n,i,r),o.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(i=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),i!==o.state&&wl.enqueueReplaceState(o,o.state,null),Eo(t,r,o,a),jo(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode;var l=t.memoizedProps,s=Sl(n,l);o.props=s;var c=o.context,u=n.contextType;i=Ar,"object"===typeof u&&null!==u&&(i=Oa(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l||c!==i)&&zl(t,o,r,i),yo=!1;var p=t.memoizedState;o.state=p,Eo(t,r,o,a),jo(),c=t.memoizedState,l||p!==c||yo?("function"===typeof d&&(xl(t,n,d,r),c=t.memoizedState),(s=yo||kl(t,n,s,r,p,c,i))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=i,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,bo(e,t),u=Sl(n,i=t.memoizedProps),o.props=u,d=t.pendingProps,p=o.context,c=n.contextType,s=Ar,"object"===typeof c&&null!==c&&(s=Oa(c)),(c="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i!==d||p!==s)&&zl(t,o,r,s),yo=!1,p=t.memoizedState,o.state=p,Eo(t,r,o,a),jo();var f=t.memoizedState;i!==d||p!==f||yo||null!==e&&null!==e.dependencies&&$a(e.dependencies)?("function"===typeof l&&(xl(t,n,l,r),f=t.memoizedState),(u=yo||kl(t,n,u,r,p,f,s)||null!==e&&null!==e.dependencies&&$a(e.dependencies))?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,f,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,f,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),o.props=r,o.state=f,o.context=s,r=u):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,Bl(e,t),r=0!==(128&t.flags),o||r?(o=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=ho(t,e.child,null,a),t.child=ho(t,null,n,a)):Ll(e,t,n,a),t.memoizedState=o.state,e=t.child):e=os(e,t,a),e}function Kl(e,t,n,r){return xa(),t.flags|=256,Ll(e,t,n,r),t.child}var Yl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ql(e){return{baseLanes:e,cachePool:Xa()}}function Xl(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=_c),e}function Jl(e,t,n){var r,a=t.pendingProps,o=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&Uo.current)),r&&(o=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(pa){if(o?Mo(t):Io(),(e=da)?null!==(e=null!==(e=$d(e,ma))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==na?{id:ra,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},(n=Gr(e)).return=t,t.child=n,ua=t,da=null):e=null,null===e)throw ga(t);return Od(e)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,o?(Io(),s=es({mode:"hidden",children:s},o=t.mode),a=Br(a,o,n,null),s.return=t,a.return=t,s.sibling=a,t.child=s,(a=t.child).memoizedState=Ql(n),a.childLanes=Xl(e,r,n),t.memoizedState=Yl,Fl(null,a)):(Mo(t),Zl(t,s))}var c=e.memoizedState;if(null!==c&&null!==(s=c.dehydrated)){if(l)256&t.flags?(Mo(t),t.flags&=-257,t=ts(e,t,n)):null!==t.memoizedState?(Io(),t.child=e.child,t.flags|=128,t=null):(Io(),s=a.fallback,o=t.mode,a=es({mode:"visible",children:a.children},o),(s=Br(s,o,n,null)).flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,ho(t,e.child,null,n),(a=t.child).memoizedState=Ql(n),a.childLanes=Xl(e,r,n),t.memoizedState=Yl,t=Fl(null,a));else if(Mo(t),Od(s)){if(r=s.nextSibling&&s.nextSibling.dataset)var u=r.dgst;r=u,(a=Error(i(419))).stack="",a.digest=r,ka({value:a,source:null,stack:null}),t=ts(e,t,n)}else if(Rl||Ta(e,t,n,!1),r=0!==(n&e.childLanes),Rl||r){if(null!==(r=hc)&&(0!==(a=Le(r,n))&&a!==c.retryLane))throw c.retryLane=a,Rr(e,a),Yc(r,e,a),Ol;Nd(s)||lu(),t=ts(e,t,n)}else Nd(s)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,da=Rd(s.nextSibling),ua=t,pa=!0,fa=null,ma=!1,null!==e&&ca(t,e),(t=Zl(t,a.children)).flags|=4096);return t}return o?(Io(),s=a.fallback,o=t.mode,u=(c=e.child).sibling,(a=Ur(c,{mode:"hidden",children:a.children})).subtreeFlags=65011712&c.subtreeFlags,null!==u?s=Ur(u,s):(s=Br(s,o,n,null)).flags|=2,s.return=t,a.return=t,a.sibling=s,t.child=a,Fl(null,a),a=t.child,null===(s=e.child.memoizedState)?s=Ql(n):(null!==(o=s.cachePool)?(c=Ia._currentValue,o=o.parent!==c?{parent:c,pool:c}:o):o=Xa(),s={baseLanes:s.baseLanes|n,cachePool:o}),a.memoizedState=s,a.childLanes=Xl(e,r,n),t.memoizedState=Yl,Fl(e.child,a)):(Mo(t),e=(n=e.child).sibling,(n=Ur(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Zl(e,t){return(t=es({mode:"visible",children:t},e.mode)).return=e,e.child=t}function es(e,t){return(e=Ir(22,e,null,t)).lanes=0,e}function ts(e,t,n){return ho(t,e.child,null,n),(e=Zl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ns(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),_a(e.return,t,n)}function rs(e,t,n,r,a,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a,i.treeForkCount=o)}function as(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;r=r.children;var i=Uo.current,l=0!==(2&i);if(l?(i=1&i|2,t.flags|=128):i&=1,U(Uo,i),Ll(e,t,r,n),r=pa?Zr:0,!l&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ns(e,n,t);else if(19===e.tag)ns(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===Ho(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),rs(t,!1,a,n,o,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Ho(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}rs(t,!0,n,null,o,r);break;case"together":rs(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function os(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),jc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Ta(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Ur(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ur(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function is(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!$a(e))}function ls(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Rl=!0;else{if(!is(e,n)&&0===(128&t.flags))return Rl=!1,function(e,t,n){switch(t.tag){case 3:K(t,t.stateNode.containerInfo),Ea(0,Ia,e.memoizedState.cache),xa();break;case 27:case 5:Q(t);break;case 4:K(t,t.stateNode.containerInfo);break;case 10:Ea(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,Ao(t),null;break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Mo(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Jl(e,t,n):(Mo(t),null!==(e=os(e,t,n))?e.sibling:null);Mo(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Ta(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return as(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),U(Uo,Uo.current),r)break;return null;case 22:return t.lanes=0,Il(e,t,n,t.pendingProps);case 24:Ea(0,Ia,e.memoizedState.cache)}return os(e,t,n)}(e,t,n);Rl=0!==(131072&e.flags)}else Rl=!1,pa&&0!==(1048576&t.flags)&&ia(t,Zr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=ao(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var a=e.$$typeof;if(a===k){t.tag=11,t=Ml(null,t,e,r,n);break e}if(a===j){t.tag=14,t=Al(null,t,e,r,n);break e}}throw t=N(e)||e,Error(i(306,t,""))}Fr(e)?(r=Sl(e,r),t.tag=1,t=ql(null,t,e,r,n)):(t.tag=0,t=Vl(null,t,e,r,n))}return t;case 0:return Vl(e,t,t.type,t.pendingProps,n);case 1:return ql(e,t,r=t.type,a=Sl(r,t.pendingProps),n);case 3:e:{if(K(t,t.stateNode.containerInfo),null===e)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,bo(e,t),Eo(t,r,null,n);var l=t.memoizedState;if(r=l.cache,Ea(0,Ia,r),r!==o.cache&&Pa(t,[Ia],n,!0),jo(),r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Kl(e,t,r,n);break e}if(r!==a){ka(a=Yr(Error(i(424)),t)),t=Kl(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(da=Rd(e.firstChild),ua=t,pa=!0,fa=null,ma=!0,n=go(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(xa(),r===a){t=os(e,t,n);break e}Ll(e,t,r,n)}t=t.child}return t;case 26:return Bl(e,t),null===e?(n=Gd(t.type,null,t.pendingProps,null))?t.memoizedState=n:pa||(n=t.type,e=t.pendingProps,(r=yd(G.current).createElement(n))[Ue]=t,r[He]=e,fd(r,n,e),et(r),t.stateNode=r):t.memoizedState=Gd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Q(t),null===e&&pa&&(r=t.stateNode=Dd(t.type,t.pendingProps,G.current),ua=t,ma=!0,a=da,Cd(t.type)?(Ld=a,da=Rd(r.firstChild)):da=a),Ll(e,t,t.pendingProps.children,n),Bl(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&pa&&((a=r=da)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ke])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===o)return e}if(null===(e=Rd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,ma))?(t.stateNode=r,ua=t,da=Rd(r.firstChild),ma=!1,a=!0):a=!1),a||ga(t)),Q(t),a=t.type,o=t.pendingProps,l=null!==e?e.memoizedProps:null,r=o.children,xd(a,o)?r=null:null!==l&&xd(a,l)&&(t.flags|=32),null!==t.memoizedState&&(a=ni(e,t,oi,null,null,n),dp._currentValue=a),Bl(e,t),Ll(e,t,r,n),t.child;case 6:return null===e&&pa&&((e=n=da)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=Rd(e.nextSibling)))return null}return e}(n,t.pendingProps,ma))?(t.stateNode=n,ua=t,da=null,e=!0):e=!1),e||ga(t)),null;case 13:return Jl(e,t,n);case 4:return K(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ho(t,null,r,n):Ll(e,t,r,n),t.child;case 11:return Ml(e,t,t.type,t.pendingProps,n);case 7:return Ll(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ll(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ea(0,t.type,r.value),Ll(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Na(t),r=r(a=Oa(a)),t.flags|=1,Ll(e,t,r,n),t.child;case 14:return Al(e,t,t.type,t.pendingProps,n);case 15:return Dl(e,t,t.type,t.pendingProps,n);case 19:return as(e,t,n);case 31:return function(e,t,n){var r=t.pendingProps,a=0!==(128&t.flags);if(t.flags&=-129,null===e){if(pa){if("hidden"===r.mode)return e=Hl(t,r),t.lanes=536870912,Fl(null,e);if(Ao(t),(e=da)?null!==(e=null!==(e=$d(e,ma))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==na?{id:ra,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},(n=Gr(e)).return=t,t.child=n,ua=t,da=null):e=null,null===e)throw ga(t);return t.lanes=536870912,null}return Hl(t,r)}var o=e.memoizedState;if(null!==o){var l=o.dehydrated;if(Ao(t),a)if(256&t.flags)t.flags&=-257,t=Wl(e,t,n);else{if(null===t.memoizedState)throw Error(i(558));t.child=e.child,t.flags|=128,t=null}else if(Rl||Ta(e,t,n,!1),a=0!==(n&e.childLanes),Rl||a){if(null!==(r=hc)&&0!==(l=Le(r,n))&&l!==o.retryLane)throw o.retryLane=l,Rr(e,l),Yc(r,e,l),Ol;lu(),t=Wl(e,t,n)}else e=o.treeContext,da=Rd(l.nextSibling),ua=t,pa=!0,fa=null,ma=!1,null!==e&&ca(t,e),(t=Hl(t,r)).flags|=4096;return t}return(e=Ur(e.child,{mode:r.mode,children:r.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return Il(e,t,n,t.pendingProps);case 24:return Na(t),r=Oa(Ia),null===e?(null===(a=Ya())&&(a=hc,o=Fa(),a.pooledCache=o,o.refCount++,null!==o&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},vo(t),Ea(0,Ia,a)):(0!==(e.lanes&n)&&(bo(e,t),Eo(t,null,null,n),jo()),a=e.memoizedState,o=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),Ea(0,Ia,r)):(r=o.cache,Ea(0,Ia,r),r!==a.cache&&Pa(t,[Ia],n,!0))),Ll(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function ss(e){e.flags|=4}function cs(e,t,n,r,a){if((t=0!==(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&a)===a)if(e.stateNode.complete)e.flags|=8192;else{if(!au())throw oo=to,Za;e.flags|=8192}}else e.flags&=-16777217}function us(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!op(t)){if(!au())throw oo=to,Za;e.flags|=8192}}function ds(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Te():536870912,e.lanes|=t,Pc|=t)}function ps(e,t){if(!pa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ms(e,t,n){var r=t.pendingProps;switch(sa(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return fs(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ca(Ia),Y(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ba(t)?ss(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,wa())),fs(t),null;case 26:var a=t.type,o=t.memoizedState;return null===e?(ss(t),null!==o?(fs(t),us(t,o)):(fs(t),cs(t,a,0,0,n))):o?o!==e.memoizedState?(ss(t),fs(t),us(t,o)):(fs(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&ss(t),fs(t),cs(t,a,0,0,n)),null;case 27:if(X(t),n=G.current,a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if(!r){if(null===t.stateNode)throw Error(i(166));return fs(t),null}e=B.current,ba(t)?ya(t):(e=Dd(a,r,n),t.stateNode=e,ss(t))}return fs(t),null;case 5:if(X(t),a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if(!r){if(null===t.stateNode)throw Error(i(166));return fs(t),null}if(o=B.current,ba(t))ya(t);else{var l=yd(G.current);switch(o){case 1:o=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:o=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":o=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":o=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":(o=l.createElement("div")).innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o="string"===typeof r.is?l.createElement("select",{is:r.is}):l.createElement("select"),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o="string"===typeof r.is?l.createElement(a,{is:r.is}):l.createElement(a)}}o[Ue]=t,o[He]=r;e:for(l=t.child;null!==l;){if(5===l.tag||6===l.tag)o.appendChild(l.stateNode);else if(4!==l.tag&&27!==l.tag&&null!==l.child){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;null===l.sibling;){if(null===l.return||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=o;e:switch(fd(o,a,r),a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ss(t)}}return fs(t),cs(t,t.type,null===e||e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(e=G.current,ba(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=ua))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ue]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||ud(e.nodeValue,n)))||ga(t,!0)}else(e=yd(e).createTextNode(r))[Ue]=t,t.stateNode=e}return fs(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=ba(t),null!==n){if(null===e){if(!r)throw Error(i(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(i(557));e[Ue]=t}else xa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;fs(t),e=!1}else n=wa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(Fo(t),t):(Fo(t),null);if(0!==(128&t.flags))throw Error(i(558))}return fs(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=ba(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[Ue]=t}else xa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;fs(t),a=!1}else a=wa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return 256&t.flags?(Fo(t),t):(Fo(t),null)}return Fo(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool),o=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ds(t,t.updateQueue),fs(t),null);case 4:return Y(),null===e&&ed(t.stateNode.containerInfo),fs(t),null;case 10:return Ca(t.type),fs(t),null;case 19:if(F(Uo),null===(r=t.memoizedState))return fs(t),null;if(a=0!==(128&t.flags),null===(o=r.rendering))if(a)ps(r,!1);else{if(0!==Sc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=Ho(e))){for(t.flags|=128,ps(r,!1),e=o.updateQueue,t.updateQueue=e,ds(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Hr(n,e),n=n.sibling;return U(Uo,1&Uo.current|2),pa&&oa(t,r.treeForkCount),t.child}e=e.sibling}null!==r.tail&&se()>Lc&&(t.flags|=128,a=!0,ps(r,!1),t.lanes=4194304)}else{if(!a)if(null!==(e=Ho(o))){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ds(t,e),ps(r,!0),null===r.tail&&"hidden"===r.tailMode&&!o.alternate&&!pa)return fs(t),null}else 2*se()-r.renderingStartTime>Lc&&536870912!==n&&(t.flags|=128,a=!0,ps(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=r.last)?e.sibling=o:t.child=o,r.last=o)}return null!==r.tail?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=se(),e.sibling=null,n=Uo.current,U(Uo,a?1&n|2:1&n),pa&&oa(t,r.treeForkCount),e):(fs(t),null);case 22:case 23:return Fo(t),Oo(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(fs(t),6&t.subtreeFlags&&(t.flags|=8192)):fs(t),null!==(n=t.updateQueue)&&ds(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&F(Ka),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ca(Ia),fs(t),null;case 25:case 30:return null}throw Error(i(156,t.tag))}function hs(e,t){switch(sa(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ca(Ia),Y(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return X(t),null;case 31:if(null!==t.memoizedState){if(Fo(t),null===t.alternate)throw Error(i(340));xa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(Fo(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));xa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return F(Uo),null;case 4:return Y(),null;case 10:return Ca(t.type),null;case 22:case 23:return Fo(t),Oo(),null!==e&&F(Ka),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return Ca(Ia),null;default:return null}}function gs(e,t){switch(sa(t),t.tag){case 3:Ca(Ia),Y();break;case 26:case 27:case 5:X(t);break;case 4:Y();break;case 31:null!==t.memoizedState&&Fo(t);break;case 13:Fo(t);break;case 19:F(Uo);break;case 10:Ca(t.type);break;case 22:case 23:Fo(t),Oo(),null!==e&&F(Ka);break;case 24:Ca(Ia)}}function ys(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var o=n.create,i=n.inst;r=o(),i.destroy=r}n=n.next}while(n!==a)}}catch(l){Su(t,t.return,l)}}function vs(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var o=a.next;r=o;do{if((r.tag&e)===e){var i=r.inst,l=i.destroy;if(void 0!==l){i.destroy=void 0,a=t;var s=n,c=l;try{c()}catch(u){Su(a,s,u)}}}r=r.next}while(r!==o)}}catch(u){Su(t,t.return,u)}}function bs(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{_o(t,n)}catch(r){Su(e,e.return,r)}}}function xs(e,t,n){n.props=Sl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Su(e,t,r)}}function ws(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(a){Su(e,t,a)}}function ks(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){Su(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(o){Su(e,t,o)}else n.current=null}function zs(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){Su(e,e.return,a)}}function Ss(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,l=null,s=null,c=null,u=null,d=null;for(m in n){var p=n[m];if(n.hasOwnProperty(m)&&null!=p)switch(m){case"checked":case"value":break;case"defaultValue":c=p;default:r.hasOwnProperty(m)||dd(e,t,m,null,r,p)}}for(var f in r){var m=r[f];if(p=n[f],r.hasOwnProperty(f)&&(null!=m||null!=p))switch(f){case"type":o=m;break;case"name":a=m;break;case"checked":u=m;break;case"defaultChecked":d=m;break;case"value":l=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(i(137,t));break;default:m!==p&&dd(e,t,f,m,r,p)}}return void vt(e,l,s,c,u,d,o,a);case"select":for(o in m=l=s=f=null,n)if(c=n[o],n.hasOwnProperty(o)&&null!=c)switch(o){case"value":break;case"multiple":m=c;default:r.hasOwnProperty(o)||dd(e,t,o,null,r,c)}for(a in r)if(o=r[a],c=n[a],r.hasOwnProperty(a)&&(null!=o||null!=c))switch(a){case"value":f=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:o!==c&&dd(e,t,a,o,r,c)}return t=s,n=l,r=m,void(null!=f?wt(e,!!n,f,!1):!!r!==!!n&&(null!=t?wt(e,!!n,t,!0):wt(e,!!n,n?[]:"",!1)));case"textarea":for(s in m=f=null,n)if(a=n[s],n.hasOwnProperty(s)&&null!=a&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:dd(e,t,s,null,r,a)}for(l in r)if(a=r[l],o=n[l],r.hasOwnProperty(l)&&(null!=a||null!=o))switch(l){case"value":f=a;break;case"defaultValue":m=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(i(91));break;default:a!==o&&dd(e,t,l,a,r,o)}return void kt(e,f,m);case"option":for(var h in n)if(f=n[h],n.hasOwnProperty(h)&&null!=f&&!r.hasOwnProperty(h))if("selected"===h)e.selected=!1;else dd(e,t,h,null,r,f);for(c in r)if(f=r[c],m=n[c],r.hasOwnProperty(c)&&f!==m&&(null!=f||null!=m))if("selected"===c)e.selected=f&&"function"!==typeof f&&"symbol"!==typeof f;else dd(e,t,c,f,r,m);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)f=n[g],n.hasOwnProperty(g)&&null!=f&&!r.hasOwnProperty(g)&&dd(e,t,g,null,r,f);for(u in r)if(f=r[u],m=n[u],r.hasOwnProperty(u)&&f!==m&&(null!=f||null!=m))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(i(137,t));break;default:dd(e,t,u,f,r,m)}return;default:if(_t(t)){for(var y in n)f=n[y],n.hasOwnProperty(y)&&void 0!==f&&!r.hasOwnProperty(y)&&pd(e,t,y,void 0,r,f);for(d in r)f=r[d],m=n[d],!r.hasOwnProperty(d)||f===m||void 0===f&&void 0===m||pd(e,t,d,f,r,m);return}}for(var v in n)f=n[v],n.hasOwnProperty(v)&&null!=f&&!r.hasOwnProperty(v)&&dd(e,t,v,null,r,f);for(p in r)f=r[p],m=n[p],!r.hasOwnProperty(p)||f===m||null==f&&null==m||dd(e,t,p,f,r,m)}(r,e.type,n,t),r[He]=t}catch(a){Su(e,e.return,a)}}function js(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&Cd(e.type)||4===e.tag}function Es(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||js(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&Cd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Nt));else if(4!==r&&(27===r&&Cd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(Cs(e,t,n),e=e.sibling;null!==e;)Cs(e,t,n),e=e.sibling}function _s(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&Cd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(_s(e,t,n),e=e.sibling;null!==e;)_s(e,t,n),e=e.sibling}function Ps(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);fd(t,r,n),t[Ue]=e,t[He]=n}catch(o){Su(e,e.return,o)}}var Ts=!1,$s=!1,Ns=!1,Os="function"===typeof WeakSet?WeakSet:Set,Rs=null;function Ls(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ys(e,n),4&r&&ys(5,n);break;case 1:if(Ys(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(i){Su(n,n.return,i)}else{var a=Sl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Su(n,n.return,l)}}64&r&&bs(n),512&r&&ws(n,n.return);break;case 3:if(Ys(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{_o(e,t)}catch(i){Su(n,n.return,i)}}break;case 27:null===t&&4&r&&Ps(n);case 26:case 5:Ys(e,n),null===t&&4&r&&zs(n),512&r&&ws(n,n.return);break;case 12:Ys(e,n);break;case 31:Ys(e,n),4&r&&Us(e,n);break;case 13:Ys(e,n),4&r&&Hs(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=_u.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||Ts)){t=null!==t&&null!==t.memoizedState||$s,a=Ts;var o=$s;Ts=r,($s=t)&&!o?Xs(e,n,0!==(8772&n.subtreeFlags)):Ys(e,n),Ts=a,$s=o}break;case 30:break;default:Ys(e,n)}}function Ms(e){var t=e.alternate;null!==t&&(e.alternate=null,Ms(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ye(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var As=null,Ds=!1;function Is(e,t,n){for(n=n.child;null!==n;)Fs(e,t,n),n=n.sibling}function Fs(e,t,n){if(ve&&"function"===typeof ve.onCommitFiberUnmount)try{ve.onCommitFiberUnmount(ye,n)}catch(o){}switch(n.tag){case 26:$s||ks(n,t),Is(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:$s||ks(n,t);var r=As,a=Ds;Cd(n.type)&&(As=n.stateNode,Ds=!1),Is(e,t,n),Id(n.stateNode),As=r,Ds=a;break;case 5:$s||ks(n,t);case 6:if(r=As,a=Ds,As=null,Is(e,t,n),Ds=a,null!==(As=r))if(Ds)try{(9===As.nodeType?As.body:"HTML"===As.nodeName?As.ownerDocument.body:As).removeChild(n.stateNode)}catch(i){Su(n,t,i)}else try{As.removeChild(n.stateNode)}catch(i){Su(n,t,i)}break;case 18:null!==As&&(Ds?(_d(9===(e=As).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Vp(e)):_d(As,n.stateNode));break;case 4:r=As,a=Ds,As=n.stateNode.containerInfo,Ds=!0,Is(e,t,n),As=r,Ds=a;break;case 0:case 11:case 14:case 15:vs(2,n,t),$s||vs(4,n,t),Is(e,t,n);break;case 1:$s||(ks(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&xs(n,t,r)),Is(e,t,n);break;case 21:Is(e,t,n);break;case 22:$s=(r=$s)||null!==n.memoizedState,Is(e,t,n),$s=r;break;default:Is(e,t,n)}}function Us(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{Vp(e)}catch(n){Su(t,t.return,n)}}}function Hs(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Vp(e)}catch(n){Su(t,t.return,n)}}function Ws(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Os),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Os),t;default:throw Error(i(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Pu.bind(null,e,t);t.then(r,r)}})}function Bs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(Cd(s.type)){As=s.stateNode,Ds=!1;break e}break;case 5:As=s.stateNode,Ds=!1;break e;case 3:case 4:As=s.stateNode.containerInfo,Ds=!0;break e}s=s.return}if(null===As)throw Error(i(160));Fs(o,l,a),As=null,Ds=!1,null!==(o=a.alternate)&&(o.return=null),a.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)Gs(t,e),t=t.sibling}var Vs=null;function Gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bs(t,e),qs(e),4&r&&(vs(3,e,e.return),ys(3,e),vs(5,e,e.return));break;case 1:Bs(t,e),qs(e),512&r&&($s||null===n||ks(n,n.return)),64&r&&Ts&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=Vs;if(Bs(t,e),qs(e),512&r&&($s||null===n||ks(n,n.return)),4&r){var o=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(o=a.getElementsByTagName("title")[0])||o[Ke]||o[Ue]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector("head > title"))),fd(o,r,n),o[Ue]=e,et(o),r=o;break e;case"link":var l=rp("link","href",a).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((o=l[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}fd(o=a.createElement(r),r,n),a.head.appendChild(o);break;case"meta":if(l=rp("meta","content",a).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((o=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}fd(o=a.createElement(r),r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[Ue]=e,et(o),r=o}e.stateNode=r}else ap(a,e.type,e.stateNode);else e.stateNode=Jd(a,r,e.memoizedProps);else o!==r?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===r?ap(a,e.type,e.stateNode):Jd(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&Ss(e,e.memoizedProps,n.memoizedProps)}break;case 27:Bs(t,e),qs(e),512&r&&($s||null===n||ks(n,n.return)),null!==n&&4&r&&Ss(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Bs(t,e),qs(e),512&r&&($s||null===n||ks(n,n.return)),32&e.flags){a=e.stateNode;try{St(a,"")}catch(h){Su(e,e.return,h)}}4&r&&null!=e.stateNode&&Ss(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(Ns=!0);break;case 6:if(Bs(t,e),qs(e),4&r){if(null===e.stateNode)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(h){Su(e,e.return,h)}}break;case 3:if(np=null,a=Vs,Vs=Hd(t.containerInfo),Bs(t,e),Vs=a,qs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Vp(t.containerInfo)}catch(h){Su(e,e.return,h)}Ns&&(Ns=!1,Ks(e));break;case 4:r=Vs,Vs=Hd(e.stateNode.containerInfo),Bs(t,e),qs(e),Vs=r;break;case 12:default:Bs(t,e),qs(e);break;case 31:case 19:Bs(t,e),qs(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ws(e,r)));break;case 13:Bs(t,e),qs(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(Oc=se()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ws(e,r)));break;case 22:a=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=Ts,d=$s;if(Ts=u||a,$s=d||c,Bs(t,e),$s=d,Ts=u,qs(e),8192&r)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===n||c||Ts||$s||Qs(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(o=c.stateNode,a)"function"===typeof(l=o.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=c.stateNode;var p=c.memoizedProps.style,f=void 0!==p&&null!==p&&p.hasOwnProperty("display")?p.display:null;s.style.display=null==f||"boolean"===typeof f?"":(""+f).trim()}}catch(h){Su(c,c.return,h)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(h){Su(c,c.return,h)}}}else if(18===t.tag){if(null===n){c=t;try{var m=c.stateNode;a?Pd(m,!0):Pd(c.stateNode,!1)}catch(h){Su(c,c.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Ws(e,n))));case 30:case 21:}}function qs(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(js(r)){n=r;break}r=r.return}if(null==n)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;_s(e,Es(e),a);break;case 5:var o=n.stateNode;32&n.flags&&(St(o,""),n.flags&=-33),_s(e,Es(e),o);break;case 3:case 4:var l=n.stateNode.containerInfo;Cs(e,Es(e),l);break;default:throw Error(i(161))}}catch(s){Su(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ks(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Ks(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Ys(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Ls(e,t.alternate,t),t=t.sibling}function Qs(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:vs(4,t,t.return),Qs(t);break;case 1:ks(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&xs(t,t.return,n),Qs(t);break;case 27:Id(t.stateNode);case 26:case 5:ks(t,t.return),Qs(t);break;case 22:null===t.memoizedState&&Qs(t);break;default:Qs(t)}e=e.sibling}}function Xs(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,o=t,i=o.flags;switch(o.tag){case 0:case 11:case 15:Xs(a,o,n),ys(4,o);break;case 1:if(Xs(a,o,n),"function"===typeof(a=(r=o).stateNode).componentDidMount)try{a.componentDidMount()}catch(c){Su(r,r.return,c)}if(null!==(a=(r=o).updateQueue)){var l=r.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)Co(s[a],l)}catch(c){Su(r,r.return,c)}}n&&64&i&&bs(o),ws(o,o.return);break;case 27:Ps(o);case 26:case 5:Xs(a,o,n),n&&null===r&&4&i&&zs(o),ws(o,o.return);break;case 12:Xs(a,o,n);break;case 31:Xs(a,o,n),n&&4&i&&Us(a,o);break;case 13:Xs(a,o,n),n&&4&i&&Hs(a,o);break;case 22:null===o.memoizedState&&Xs(a,o,n),ws(o,o.return);break;case 30:break;default:Xs(a,o,n)}t=t.sibling}}function Js(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ua(n))}function Zs(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ua(e))}function ec(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)tc(e,t,n,r),t=t.sibling}function tc(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ec(e,t,n,r),2048&a&&ys(9,t);break;case 1:case 31:case 13:default:ec(e,t,n,r);break;case 3:ec(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ua(e)));break;case 12:if(2048&a){ec(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,i=o.id,l=o.onPostCommit;"function"===typeof l&&l(i,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){Su(t,t.return,s)}}else ec(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,i=t.alternate,null!==t.memoizedState?2&o._visibility?ec(e,t,n,r):rc(e,t):2&o._visibility?ec(e,t,n,r):(o._visibility|=2,nc(e,t,n,r,0!==(10256&t.subtreeFlags)||!1)),2048&a&&Js(i,t);break;case 24:ec(e,t,n,r),2048&a&&Zs(t.alternate,t)}}function nc(e,t,n,r,a){for(a=a&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var o=e,i=t,l=n,s=r,c=i.flags;switch(i.tag){case 0:case 11:case 15:nc(o,i,l,s,a),ys(8,i);break;case 23:break;case 22:var u=i.stateNode;null!==i.memoizedState?2&u._visibility?nc(o,i,l,s,a):rc(o,i):(u._visibility|=2,nc(o,i,l,s,a)),a&&2048&c&&Js(i.alternate,i);break;case 24:nc(o,i,l,s,a),a&&2048&c&&Zs(i.alternate,i);break;default:nc(o,i,l,s,a)}t=t.sibling}}function rc(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:rc(n,r),2048&a&&Js(r.alternate,r);break;case 24:rc(n,r),2048&a&&Zs(r.alternate,r);break;default:rc(n,r)}t=t.sibling}}var ac=8192;function oc(e,t,n){if(e.subtreeFlags&ac)for(e=e.child;null!==e;)ic(e,t,n),e=e.sibling}function ic(e,t,n){switch(e.tag){case 26:oc(e,t,n),e.flags&ac&&null!==e.memoizedState&&function(e,t,n,r){if("stylesheet"===n.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var a=qd(r.href),o=t.querySelector(Kd(a));if(o)return null!==(t=o._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=lp.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,void et(o);o=t.ownerDocument||t,r=Yd(r),(a=Fd.get(a))&&ep(r,a),et(o=o.createElement("link"));var i=o;i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),fd(o,"link",r),n.instance=o}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=lp.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,Vs,e.memoizedState,e.memoizedProps);break;case 5:default:oc(e,t,n);break;case 3:case 4:var r=Vs;Vs=Hd(e.stateNode.containerInfo),oc(e,t,n),Vs=r;break;case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=ac,ac=16777216,oc(e,t,n),ac=r):oc(e,t,n))}}function lc(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function sc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Rs=r,dc(r,e)}lc(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)cc(e),e=e.sibling}function cc(e){switch(e.tag){case 0:case 11:case 15:sc(e),2048&e.flags&&vs(9,e,e.return);break;case 3:case 12:default:sc(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,uc(e)):sc(e)}}function uc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Rs=r,dc(r,e)}lc(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:vs(8,t,t.return),uc(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,uc(t));break;default:uc(t)}e=e.sibling}}function dc(e,t){for(;null!==Rs;){var n=Rs;switch(n.tag){case 0:case 11:case 15:vs(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Ua(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Rs=r;else e:for(n=e;null!==Rs;){var a=(r=Rs).sibling,o=r.return;if(Ms(r),r===n){Rs=null;break e}if(null!==a){a.return=o,Rs=a;break e}Rs=o}}}var pc={getCacheForType:function(e){var t=Oa(Ia),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Oa(Ia).controller.signal}},fc="function"===typeof WeakMap?WeakMap:Map,mc=0,hc=null,gc=null,yc=0,vc=0,bc=null,xc=!1,wc=!1,kc=!1,zc=0,Sc=0,jc=0,Ec=0,Cc=0,_c=0,Pc=0,Tc=null,$c=null,Nc=!1,Oc=0,Rc=0,Lc=1/0,Mc=null,Ac=null,Dc=0,Ic=null,Fc=null,Uc=0,Hc=0,Wc=null,Bc=null,Vc=0,Gc=null;function qc(){return 0!==(2&mc)&&0!==yc?yc&-yc:null!==R.T?Wu():De()}function Kc(){if(0===_c)if(0===(536870912&yc)||pa){var e=Se;0===(3932160&(Se<<=1))&&(Se=262144),_c=e}else _c=536870912;return null!==(e=Ro.current)&&(e.flags|=32),_c}function Yc(e,t,n){(e!==hc||2!==vc&&9!==vc)&&null===e.cancelPendingCommit||(nu(e,0),Zc(e,yc,_c,!1)),Ne(e,n),0!==(2&mc)&&e===hc||(e===hc&&(0===(2&mc)&&(Ec|=n),4===Sc&&Zc(e,yc,_c,!1)),Mu(e))}function Qc(e,t,n){if(0!==(6&mc))throw Error(i(327));for(var r=!n&&0===(127&t)&&0===(t&e.expiredLanes)||_e(e,t),a=r?function(e,t){var n=mc;mc|=2;var r=ou(),a=iu();hc!==e||yc!==t?(Mc=null,Lc=se()+500,nu(e,t)):wc=_e(e,t);e:for(;;)try{if(0!==vc&&null!==gc){t=gc;var o=bc;t:switch(vc){case 1:vc=0,bc=null,fu(e,t,o,1);break;case 2:case 9:if(no(o)){vc=0,bc=null,pu(t);break}t=function(){2!==vc&&9!==vc||hc!==e||(vc=7),Mu(e)},o.then(t,t);break e;case 3:vc=7;break e;case 4:vc=5;break e;case 7:no(o)?(vc=0,bc=null,pu(t)):(vc=0,bc=null,fu(e,t,o,7));break;case 5:var l=null;switch(gc.tag){case 26:l=gc.memoizedState;case 5:case 27:var s=gc;if(l?op(l):s.stateNode.complete){vc=0,bc=null;var c=s.sibling;if(null!==c)gc=c;else{var u=s.return;null!==u?(gc=u,mu(u)):gc=null}break t}}vc=0,bc=null,fu(e,t,o,5);break;case 6:vc=0,bc=null,fu(e,t,o,6);break;case 8:tu(),Sc=6;break e;default:throw Error(i(462))}}uu();break}catch(d){ru(e,d)}return ja=Sa=null,R.H=r,R.A=a,mc=n,null!==gc?0:(hc=null,yc=0,$r(),Sc)}(e,t):su(e,t,!0),o=r;;){if(0===a){wc&&!r&&Zc(e,t,0,!1);break}if(n=e.current.alternate,!o||Jc(n)){if(2===a){if(o=t,e.errorRecoveryDisabledLanes&o)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;a=Tc;var c=s.current.memoizedState.isDehydrated;if(c&&(nu(s,l).flags|=256),2!==(l=su(s,l,!1))){if(kc&&!c){s.errorRecoveryDisabledLanes|=o,Ec|=o,a=4;break e}o=$c,$c=a,null!==o&&(null===$c?$c=o:$c.push.apply($c,o))}a=l}if(o=!1,2!==a)continue}}if(1===a){nu(e,0),Zc(e,t,0,!0);break}e:{switch(r=e,o=a){case 0:case 1:throw Error(i(345));case 4:if((4194048&t)!==t)break;case 6:Zc(r,t,_c,!xc);break e;case 2:$c=null;break;case 3:case 5:break;default:throw Error(i(329))}if((62914560&t)===t&&10<(a=Oc+300-se())){if(Zc(r,t,_c,!xc),0!==Ce(r,0,!0))break e;Uc=t,r.timeoutHandle=kd(Xc.bind(null,r,n,$c,Mc,Nc,t,_c,Ec,Pc,xc,o,"Throttled",-0,0),a)}else Xc(r,n,$c,Mc,Nc,t,_c,Ec,Pc,xc,o,null,-0,0)}break}a=su(e,t,!1),o=!1}Mu(e)}function Xc(e,t,n,r,a,o,i,l,s,c,u,d,p,f){if(e.timeoutHandle=-1,8192&(d=t.subtreeFlags)||16785408===(16785408&d)){ic(t,o,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nt});var m=(62914560&o)===o?Oc-se():(4194048&o)===o?Rc-se():0;if(null!==(m=function(e,t){return e.stylesheets&&0===e.count&&cp(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&cp(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&0===ip&&(ip=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var a=n[r],o=a.transferSize,i=a.initiatorType,l=a.duration;if(o&&l&&md(i)){for(i=0,l=a.responseEnd,r+=1;r<n.length;r++){var s=n[r],c=s.startTime;if(c>l)break;var u=s.transferSize,d=s.initiatorType;u&&md(d)&&(i+=u*((s=s.responseEnd)<l?1:(l-c)/(s-c)))}if(--r,t+=8*(o+i)/(a.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"===typeof(e=navigator.connection.downlink)?e:5}());var a=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&cp(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>ip?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(a)}}:null}(d,m)))return Uc=o,e.cancelPendingCommit=m(gu.bind(null,e,t,o,n,r,a,i,l,s,u,d,null,p,f)),void Zc(e,o,i,!c)}gu(e,t,o,n,r,a,i,l,s)}function Jc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!Zn(o(),a))return!1}catch(i){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zc(e,t,n,r){t&=~Cc,t&=~Ec,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var o=31-xe(a),i=1<<o;r[o]=-1,a&=~i}0!==n&&Oe(e,n,t)}function eu(){return 0!==(6&mc)||(Au(0,!1),!1)}function tu(){if(null!==gc){if(0===vc)var e=gc.return;else ja=Sa=null,si(e=gc),so=null,co=0,e=gc;for(;null!==e;)gs(e.alternate,e),e=e.return;gc=null}}function nu(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,zd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Uc=0,tu(),hc=e,gc=n=Ur(e.current,null),yc=t,vc=0,bc=null,xc=!1,wc=_e(e,t),kc=!1,Pc=_c=Cc=Ec=jc=Sc=0,$c=Tc=null,Nc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-xe(r),o=1<<a;t|=e[a],r&=~o}return zc=t,$r(),n}function ru(e,t){Bo=null,R.H=gl,t===Ja||t===eo?(t=io(),vc=3):t===Za?(t=io(),vc=4):vc=t===Ol?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,bc=t,null===gc&&(Sc=1,_l(e,Yr(t,e.current)))}function au(){var e=Ro.current;return null===e||((4194048&yc)===yc?null===Lo:((62914560&yc)===yc||0!==(536870912&yc))&&e===Lo)}function ou(){var e=R.H;return R.H=gl,null===e?gl:e}function iu(){var e=R.A;return R.A=pc,e}function lu(){Sc=4,xc||(4194048&yc)!==yc&&null!==Ro.current||(wc=!0),0===(134217727&jc)&&0===(134217727&Ec)||null===hc||Zc(hc,yc,_c,!1)}function su(e,t,n){var r=mc;mc|=2;var a=ou(),o=iu();hc===e&&yc===t||(Mc=null,nu(e,t)),t=!1;var i=Sc;e:for(;;)try{if(0!==vc&&null!==gc){var l=gc,s=bc;switch(vc){case 8:tu(),i=6;break e;case 3:case 2:case 9:case 6:null===Ro.current&&(t=!0);var c=vc;if(vc=0,bc=null,fu(e,l,s,c),n&&wc){i=0;break e}break;default:c=vc,vc=0,bc=null,fu(e,l,s,c)}}cu(),i=Sc;break}catch(u){ru(e,u)}return t&&e.shellSuspendCounter++,ja=Sa=null,mc=r,R.H=a,R.A=o,null===gc&&(hc=null,yc=0,$r()),i}function cu(){for(;null!==gc;)du(gc)}function uu(){for(;null!==gc&&!ie();)du(gc)}function du(e){var t=ls(e.alternate,e,zc);e.memoizedProps=e.pendingProps,null===t?mu(e):gc=t}function pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Gl(n,t,t.pendingProps,t.type,void 0,yc);break;case 11:t=Gl(n,t,t.pendingProps,t.type.render,t.ref,yc);break;case 5:si(t);default:gs(n,t),t=ls(n,t=gc=Hr(t,zc),zc)}e.memoizedProps=e.pendingProps,null===t?mu(e):gc=t}function fu(e,t,n,r){ja=Sa=null,si(t),so=null,co=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Ta(t,n,a,!0),null!==(n=Ro.current)){switch(n.tag){case 31:case 13:return null===Lo?lu():null===n.alternate&&0===Sc&&(Sc=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===to?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),ju(e,r,a)),!1;case 22:return n.flags|=65536,r===to?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),ju(e,r,a)),!1}throw Error(i(435,n.tag))}return ju(e,r,a),lu(),!1}if(pa)return null!==(t=Ro.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ha&&ka(Yr(e=Error(i(422),{cause:r}),n))):(r!==ha&&ka(Yr(t=Error(i(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=Yr(r,n),zo(e,a=Tl(e.stateNode,r,a)),4!==Sc&&(Sc=2)),!1;var o=Error(i(520),{cause:r});if(o=Yr(o,n),null===Tc?Tc=[o]:Tc.push(o),4!==Sc&&(Sc=2),null===t)return!0;r=Yr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,zo(n,e=Tl(n.stateNode,r,e)),!1;case 1:if(t=n.type,o=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===Ac||!Ac.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,Nl(a=$l(a),e,n,r),zo(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,yc))return Sc=1,_l(e,Yr(n,e.current)),void(gc=null)}catch(o){if(null!==a)throw gc=a,o;return Sc=1,_l(e,Yr(n,e.current)),void(gc=null)}32768&t.flags?(pa||1===r?e=!0:wc||0!==(536870912&yc)?e=!1:(xc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=Ro.current)&&13===r.tag&&(r.flags|=16384))),hu(t,e)):mu(t)}function mu(e){var t=e;do{if(0!==(32768&t.flags))return void hu(t,xc);e=t.return;var n=ms(t.alternate,t,zc);if(null!==n)return void(gc=n);if(null!==(t=t.sibling))return void(gc=t);gc=t=e}while(null!==t);0===Sc&&(Sc=5)}function hu(e,t){do{var n=hs(e.alternate,e);if(null!==n)return n.flags&=32767,void(gc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(gc=e);gc=e=n}while(null!==e);Sc=6,gc=null}function gu(e,t,n,r,a,o,l,s,c){e.cancelPendingCommit=null;do{wu()}while(0!==Dc);if(0!==(6&mc))throw Error(i(327));if(null!==t){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,function(e,t,n,r,a,o){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=i&~n;0<n;){var u=31-xe(n),d=1<<u;l[u]=0,s[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var f=p[u];null!==f&&(f.lane&=-536870913)}n&=~d}0!==r&&Oe(e,r,0),0!==o&&0===a&&0!==e.tag&&(e.suspendedLanes|=o&~(i&~t))}(e,n,o|=Tr,l,s,c),e===hc&&(gc=hc=null,yc=0),Fc=t,Ic=e,Uc=n,Hc=o,Wc=a,Bc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,ae(pe,function(){return ku(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=R.T,R.T=null,a=L.p,L.p=2,l=mc,mc|=4;try{!function(e,t){if(e=e.containerInfo,hd=xp,or(e=ar(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(g){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||0!==a&&3!==p.nodeType||(s=l+a),p!==o||0!==r&&3!==p.nodeType||(c=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(m=p.firstChild);)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===a&&(s=l),f===o&&++d===r&&(c=l),null!==(m=p.nextSibling))break;f=(p=f).parentNode}p=m}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(gd={focusedElem:e,selectionRange:n},xp=!1,Rs=t;null!==Rs;)if(e=(t=Rs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Rs=e;else for(;null!==Rs;){switch(o=(t=Rs).alternate,e=t.flags,t.tag){case 0:if(0!==(4&e)&&null!==(e=null!==(e=t.updateQueue)?e.events:null))for(n=0;n<e.length;n++)(a=e[n]).ref.impl=a.nextImpl;break;case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Sl(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(y){Su(n,n.return,y)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))Td(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Td(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(i(163))}if(null!==(e=t.sibling)){e.return=t.return,Rs=e;break}Rs=t.return}}(e,t)}finally{mc=l,L.p=a,R.T=r}}Dc=1,yu(),vu(),bu()}}function yu(){if(1===Dc){Dc=0;var e=Ic,t=Fc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=R.T,R.T=null;var r=L.p;L.p=2;var a=mc;mc|=4;try{Gs(t,e);var o=gd,i=ar(e.containerInfo),l=o.focusedElem,s=o.selectionRange;if(i!==l&&l&&l.ownerDocument&&rr(l.ownerDocument.documentElement,l)){if(null!==s&&or(l)){var c=s.start,u=s.end;if(void 0===u&&(u=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(u,l.value.length);else{var d=l.ownerDocument||document,p=d&&d.defaultView||window;if(p.getSelection){var f=p.getSelection(),m=l.textContent.length,h=Math.min(s.start,m),g=void 0===s.end?h:Math.min(s.end,m);!f.extend&&h>g&&(i=g,g=h,h=i);var y=nr(l,h),v=nr(l,g);if(y&&v&&(1!==f.rangeCount||f.anchorNode!==y.node||f.anchorOffset!==y.offset||f.focusNode!==v.node||f.focusOffset!==v.offset)){var b=d.createRange();b.setStart(y.node,y.offset),f.removeAllRanges(),h>g?(f.addRange(b),f.extend(v.node,v.offset)):(b.setEnd(v.node,v.offset),f.addRange(b))}}}}for(d=[],f=l;f=f.parentNode;)1===f.nodeType&&d.push({element:f,left:f.scrollLeft,top:f.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<d.length;l++){var x=d[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}xp=!!hd,gd=hd=null}finally{mc=a,L.p=r,R.T=n}}e.current=t,Dc=2}}function vu(){if(2===Dc){Dc=0;var e=Ic,t=Fc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=R.T,R.T=null;var r=L.p;L.p=2;var a=mc;mc|=4;try{Ls(e,t.alternate,t)}finally{mc=a,L.p=r,R.T=n}}Dc=3}}function bu(){if(4===Dc||3===Dc){Dc=0,le();var e=Ic,t=Fc,n=Uc,r=Bc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Dc=5:(Dc=0,Fc=Ic=null,xu(e,e.pendingLanes));var a=e.pendingLanes;if(0===a&&(Ac=null),Ae(n),t=t.stateNode,ve&&"function"===typeof ve.onCommitFiberRoot)try{ve.onCommitFiberRoot(ye,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==r){t=R.T,a=L.p,L.p=2,R.T=null;try{for(var o=e.onRecoverableError,i=0;i<r.length;i++){var l=r[i];o(l.value,{componentStack:l.stack})}}finally{R.T=t,L.p=a}}0!==(3&Uc)&&wu(),Mu(e),a=e.pendingLanes,0!==(261930&n)&&0!==(42&a)?e===Gc?Vc++:(Vc=0,Gc=e):Vc=0,Au(0,!1)}}function xu(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Ua(t)))}function wu(){return yu(),vu(),bu(),ku()}function ku(){if(5!==Dc)return!1;var e=Ic,t=Hc;Hc=0;var n=Ae(Uc),r=R.T,a=L.p;try{L.p=32>n?32:n,R.T=null,n=Wc,Wc=null;var o=Ic,l=Uc;if(Dc=0,Fc=Ic=null,Uc=0,0!==(6&mc))throw Error(i(331));var s=mc;if(mc|=4,cc(o.current),tc(o,o.current,l,n),mc=s,Au(0,!1),ve&&"function"===typeof ve.onPostCommitFiberRoot)try{ve.onPostCommitFiberRoot(ye,o)}catch(c){}return!0}finally{L.p=a,R.T=r,xu(e,t)}}function zu(e,t,n){t=Yr(n,t),null!==(e=wo(e,t=Tl(e.stateNode,t,2),2))&&(Ne(e,2),Mu(e))}function Su(e,t,n){if(3===e.tag)zu(e,e,n);else for(;null!==t;){if(3===t.tag){zu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ac||!Ac.has(r))){e=Yr(n,e),null!==(r=wo(t,n=$l(2),2))&&(Nl(n,r,t,e),Ne(r,2),Mu(r));break}}t=t.return}}function ju(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fc;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(kc=!0,a.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,hc===e&&(yc&n)===n&&(4===Sc||3===Sc&&(62914560&yc)===yc&&300>se()-Oc?0===(2&mc)&&nu(e,0):Cc|=n,Pc===yc&&(Pc=0)),Mu(e)}function Cu(e,t){0===t&&(t=Te()),null!==(e=Rr(e,t))&&(Ne(e,t),Mu(e))}function _u(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cu(e,n)}function Pu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}null!==r&&r.delete(t),Cu(e,n)}var Tu=null,$u=null,Nu=!1,Ou=!1,Ru=!1,Lu=0;function Mu(e){e!==$u&&null===e.next&&(null===$u?Tu=$u=e:$u=$u.next=e),Ou=!0,Nu||(Nu=!0,jd(function(){0!==(6&mc)?ae(ue,Du):Iu()}))}function Au(e,t){if(!Ru&&Ou){Ru=!0;do{for(var n=!1,r=Tu;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var o=0;else{var i=r.suspendedLanes,l=r.pingedLanes;o=(1<<31-xe(42|e)+1)-1,o=201326741&(o&=a&~(i&~l))?201326741&o|1:o?2|o:0}0!==o&&(n=!0,Hu(r,o))}else o=yc,0===(3&(o=Ce(r,r===hc?o:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||_e(r,o)||(n=!0,Hu(r,o));r=r.next}}while(n);Ru=!1}}function Du(){Iu()}function Iu(){Ou=Nu=!1;var e=0;0!==Lu&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==wd&&(wd=e,!0);return wd=null,!1}()&&(e=Lu);for(var t=se(),n=null,r=Tu;null!==r;){var a=r.next,o=Fu(r,t);0===o?(r.next=null,null===n?Tu=a:n.next=a,null===a&&($u=n)):(n=r,(0!==e||0!==(3&o))&&(Ou=!0)),r=a}0!==Dc&&5!==Dc||Au(e,!1),0!==Lu&&(Lu=0)}function Fu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var i=31-xe(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=Pe(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}if(n=yc,n=Ce(e,e===(t=hc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===vc||9===vc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&oe(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||_e(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&oe(r),Ae(n)){case 2:case 8:n=de;break;case 32:default:n=pe;break;case 268435456:n=me}return r=Uu.bind(null,e),n=ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&oe(r),e.callbackPriority=2,e.callbackNode=null,2}function Uu(e,t){if(0!==Dc&&5!==Dc)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(wu()&&e.callbackNode!==n)return null;var r=yc;return 0===(r=Ce(e,e===hc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Qc(e,r,t),Fu(e,se()),null!=e.callbackNode&&e.callbackNode===n?Uu.bind(null,e):null)}function Hu(e,t){if(wu())return null;Qc(e,t,!0)}function Wu(){if(0===Lu){var e=Ba;0===e&&(e=ze,0===(261888&(ze<<=1))&&(ze=256)),Lu=e}return Lu}function Bu(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:$t(""+e)}function Vu(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Gu=0;Gu<jr.length;Gu++){var qu=jr[Gu];Er(qu.toLowerCase(),"on"+(qu[0].toUpperCase()+qu.slice(1)))}Er(yr,"onAnimationEnd"),Er(vr,"onAnimationIteration"),Er(br,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(xr,"onTransitionRun"),Er(wr,"onTransitionStart"),Er(kr,"onTransitionCancel"),Er(zr,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ku="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ku));function Qu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=c;try{o(a)}catch(u){Cr(u)}a.currentTarget=null,o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,c=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=c;try{o(a)}catch(u){Cr(u)}a.currentTarget=null,o=s}}}}function Xu(e,t){var n=t[Be];void 0===n&&(n=t[Be]=new Set);var r=e+"__bubble";n.has(r)||(td(t,e,2,!1),n.add(r))}function Ju(e,t,n){var r=0;t&&(r|=4),td(n,e,r,t)}var Zu="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[Zu]){e[Zu]=!0,tt.forEach(function(t){"selectionchange"!==t&&(Yu.has(t)||Ju(t,!1,e),Ju(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Zu]||(t[Zu]=!0,Ju("selectionchange",!1,t))}}function td(e,t,n,r){switch(Cp(t)){case 2:var a=wp;break;case 8:a=kp;break;default:a=zp}n=a.bind(null,t,n,e),a=void 0,!Ht||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function nd(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a)break;if(4===i)for(i=r.return;null!==i;){var c=i.tag;if((3===c||4===c)&&i.stateNode.containerInfo===a)return;i=i.return}for(;null!==l;){if(null===(i=Qe(l)))return;if(5===(c=i.tag)||6===c||26===c||27===c){r=o=i;continue e}l=l.parentNode}}r=r.return}It(function(){var r=o,a=Rt(n),i=[];e:{var l=Sr.get(e);if(void 0!==l){var c=nn,u=e;switch(e){case"keypress":if(0===Kt(n))break e;case"keydown":case"keyup":c=vn;break;case"focusin":u="focus",c=cn;break;case"focusout":u="blur",c=cn;break;case"beforeblur":case"afterblur":c=cn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=ln;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=sn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=xn;break;case yr:case vr:case br:c=un;break;case zr:c=wn;break;case"scroll":case"scrollend":c=an;break;case"wheel":c=kn;break;case"copy":case"cut":case"paste":c=dn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=bn;break;case"toggle":case"beforetoggle":c=zn}var d=0!==(4&t),p=!d&&("scroll"===e||"scrollend"===e),f=d?null!==l?l+"Capture":null:l;d=[];for(var m,h=r;null!==h;){var g=h;if(m=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===m||null===f||null!=(g=Ft(h,f))&&d.push(rd(h,g,m)),p)break;h=h.return}0<d.length&&(l=new c(l,u,null,n,a),i.push({event:l,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Ot||!(u=n.relatedTarget||n.fromElement)||!Qe(u)&&!u[We])&&(c||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Qe(u):null)&&(p=s(u),d=u.tag,u!==p||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=ln,g="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(d=bn,g="onPointerLeave",f="onPointerEnter",h="pointer"),p=null==c?l:Je(c),m=null==u?l:Je(u),(l=new d(g,h+"leave",c,n,a)).target=p,l.relatedTarget=m,g=null,Qe(a)===r&&((d=new d(f,h+"enter",u,n,a)).target=m,d.relatedTarget=p,g=d),p=g,c&&u)e:{for(d=od,h=u,m=0,g=f=c;g;g=d(g))m++;g=0;for(var y=h;y;y=d(y))g++;for(;0<m-g;)f=d(f),m--;for(;0<g-m;)h=d(h),g--;for(;m--;){if(f===h||null!==h&&f===h.alternate){d=f;break e}f=d(f),h=d(h)}d=null}else d=null;null!==c&&id(i,l,c,d,!1),null!==u&&null!==p&&id(i,p,u,d,!0)}if("select"===(c=(l=r?Je(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var v=Un;else if(Ln(l))if(Hn)v=Jn;else{v=Qn;var b=Yn}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&_t(r.elementType)&&(v=Un):v=Xn;switch(v&&(v=v(e,r))?Mn(i,v,n,a):(b&&b(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&xt(l,"number",l.value)),b=r?Je(r):window,e){case"focusin":(Ln(b)||"true"===b.contentEditable)&&(lr=b,sr=r,cr=null);break;case"focusout":cr=sr=lr=null;break;case"mousedown":ur=!0;break;case"contextmenu":case"mouseup":case"dragend":ur=!1,dr(i,n,a);break;case"selectionchange":if(ir)break;case"keydown":case"keyup":dr(i,n,a)}var x;if(jn)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else On?$n(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(_n&&"ko"!==n.locale&&(On||"onCompositionStart"!==w?"onCompositionEnd"===w&&On&&(x=qt()):(Vt="value"in(Bt=a)?Bt.value:Bt.textContent,On=!0)),0<(b=ad(r,w)).length&&(w=new pn(w,e,null,n,a),i.push({event:w,listeners:b}),x?w.data=x:null!==(x=Nn(n))&&(w.data=x))),(x=Cn?function(e,t){switch(e){case"compositionend":return Nn(t);case"keypress":return 32!==t.which?null:(Tn=!0,Pn);case"textInput":return(e=t.data)===Pn&&Tn?null:e;default:return null}}(e,n):function(e,t){if(On)return"compositionend"===e||!jn&&$n(e,t)?(e=qt(),Gt=Vt=Bt=null,On=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _n&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(w=ad(r,"onBeforeInput")).length&&(b=new pn("onBeforeInput","beforeinput",null,n,a),i.push({event:b,listeners:w}),b.data=x)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var o=Bu((a[He]||null).action),i=r.submitter;i&&null!==(t=(t=i[He]||null)?Bu(t.formAction):i.getAttribute("formAction"))&&(o=t,i=null);var l=new nn("action","action",null,r,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==Lu){var e=i?Vu(a,i):new FormData(a);nl(n,{pending:!0,data:e,method:a.method,action:o},null,e)}}else"function"===typeof o&&(l.preventDefault(),e=i?Vu(a,i):new FormData(a),nl(n,{pending:!0,data:e,method:a.method,action:o},o,e))},currentTarget:a}]})}}(i,e,r,n,a)}Qu(i,t)})}function rd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ad(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===o||(null!=(a=Ft(e,n))&&r.unshift(rd(e,a,o)),null!=(a=Ft(e,t))&&r.push(rd(e,a,o))),3===e.tag)return r;e=e.return}return[]}function od(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function id(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===c||(s=c,a?null!=(c=Ft(n,o))&&i.unshift(rd(n,c,s)):a||null!=(c=Ft(n,o))&&i.push(rd(n,c,s))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var ld=/\r\n?/g,sd=/\u0000|\uFFFD/g;function cd(e){return("string"===typeof e?e:""+e).replace(ld,"\n").replace(sd,"")}function ud(e,t){return t=cd(t),cd(e)===t}function dd(e,t,n,r,a,o){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||St(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&St(e,""+r);break;case"className":ct(e,"class",r);break;case"tabIndex":ct(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ct(e,n,r);break;case"style":Ct(e,r,o);break;case"data":if("object"!==t){ct(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=$t(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===n?("input"!==t&&dd(e,t,"name",a.name,a,null),dd(e,t,"formEncType",a.formEncType,a,null),dd(e,t,"formMethod",a.formMethod,a,null),dd(e,t,"formTarget",a.formTarget,a,null)):(dd(e,t,"encType",a.encType,a,null),dd(e,t,"method",a.method,a,null),dd(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=$t(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Nt);break;case"onScroll":null!=r&&Xu("scroll",e);break;case"onScrollEnd":null!=r&&Xu("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(i(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=$t(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Xu("beforetoggle",e),Xu("toggle",e),st(e,"popover",r);break;case"xlinkActuate":ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ut(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ut(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ut(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ut(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":st(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&st(e,n=Pt.get(n)||n,r)}}function pd(e,t,n,r,a,o){switch(n){case"style":Ct(e,r,o);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(i(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=n}}break;case"children":"string"===typeof r?St(e,r):("number"===typeof r||"bigint"===typeof r)&&St(e,""+r);break;case"onScroll":null!=r&&Xu("scroll",e);break;case"onScrollEnd":null!=r&&Xu("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Nt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:nt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(o=null!=(o=e[He]||null)?o[n]:null)&&e.removeEventListener(t,o,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):st(e,n,r):("function"!==typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function fd(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xu("error",e),Xu("load",e);var r,a=!1,o=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:dd(e,t,r,l,n,null)}}return o&&dd(e,t,"srcSet",n.srcSet,n,null),void(a&&dd(e,t,"src",n.src,n,null));case"input":Xu("invalid",e);var s=r=l=o=null,c=null,u=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":o=d;break;case"type":l=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(i(137,t));break;default:dd(e,t,a,d,n,null)}}return void bt(e,r,s,c,u,l,o,!1);case"select":for(o in Xu("invalid",e),a=l=r=null,n)if(n.hasOwnProperty(o)&&null!=(s=n[o]))switch(o){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:dd(e,t,o,s,n,null)}return t=r,n=l,e.multiple=!!a,void(null!=t?wt(e,!!a,t,!1):null!=n&&wt(e,!!a,n,!0));case"textarea":for(l in Xu("invalid",e),r=o=a=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":a=s;break;case"defaultValue":o=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(i(91));break;default:dd(e,t,l,s,n,null)}return void zt(e,a,o,r);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))if("selected"===c)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else dd(e,t,c,a,n,null);return;case"dialog":Xu("beforetoggle",e),Xu("toggle",e),Xu("cancel",e),Xu("close",e);break;case"iframe":case"object":Xu("load",e);break;case"video":case"audio":for(a=0;a<Ku.length;a++)Xu(Ku[a],e);break;case"image":Xu("error",e),Xu("load",e);break;case"details":Xu("toggle",e);break;case"embed":case"source":case"link":Xu("error",e),Xu("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:dd(e,t,u,a,n,null)}return;default:if(_t(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&pd(e,t,d,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(a=n[s])&&dd(e,t,s,a,n,null))}function md(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var hd=null,gd=null;function yd(e){return 9===e.nodeType?e:e.ownerDocument}function vd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bd(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function xd(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var wd=null;var kd="function"===typeof setTimeout?setTimeout:void 0,zd="function"===typeof clearTimeout?clearTimeout:void 0,Sd="function"===typeof Promise?Promise:void 0,jd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Sd?function(e){return Sd.resolve(null).then(e).catch(Ed)}:kd;function Ed(e){setTimeout(function(){throw e})}function Cd(e){return"head"===e}function _d(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)||"/&"===n){if(0===r)return e.removeChild(a),void Vp(t);r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;else if("html"===n)Id(e.ownerDocument.documentElement);else if("head"===n){Id(n=e.ownerDocument.head);for(var o=n.firstChild;o;){var i=o.nextSibling,l=o.nodeName;o[Ke]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=i}}else"body"===n&&Id(e.ownerDocument.body);n=a}while(n);Vp(t)}function Pd(e,t){var n=e;e=0;do{var r=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=r}while(n)}function Td(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Td(n),Ye(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function $d(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=Rd(e.nextSibling)))return null}return e}function Nd(e){return"$?"===e.data||"$~"===e.data}function Od(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Rd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}var Ld=null;function Md(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return Rd(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function Ad(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Dd(e,t,n){switch(t=yd(n),e){case"html":if(!(e=t.documentElement))throw Error(i(452));return e;case"head":if(!(e=t.head))throw Error(i(453));return e;case"body":if(!(e=t.body))throw Error(i(454));return e;default:throw Error(i(451))}}function Id(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ye(e)}var Fd=new Map,Ud=new Set;function Hd(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Wd=L.d;L.d={f:function(){var e=Wd.f(),t=eu();return e||t},r:function(e){var t=Xe(e);null!==t&&5===t.tag&&"form"===t.type?al(t):Wd.r(e)},D:function(e){Wd.D(e),Vd("dns-prefetch",e,null)},C:function(e,t){Wd.C(e,t),Vd("preconnect",e,t)},L:function(e,t,n){Wd.L(e,t,n);var r=Bd;if(r&&e&&t){var a='link[rel="preload"][as="'+yt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+yt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+yt(n.imageSizes)+'"]')):a+='[href="'+yt(e)+'"]';var o=a;switch(t){case"style":o=qd(e);break;case"script":o=Qd(e)}Fd.has(o)||(e=f({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Fd.set(o,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(Kd(o))||"script"===t&&r.querySelector(Xd(o))||(fd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}},m:function(e,t){Wd.m(e,t);var n=Bd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+yt(r)+'"][href="'+yt(e)+'"]',o=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Qd(e)}if(!Fd.has(o)&&(e=f({rel:"modulepreload",href:e},t),Fd.set(o,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Xd(o)))return}fd(r=n.createElement("link"),"link",e),et(r),n.head.appendChild(r)}}},X:function(e,t){Wd.X(e,t);var n=Bd;if(n&&e){var r=Ze(n).hoistableScripts,a=Qd(e),o=r.get(a);o||((o=n.querySelector(Xd(a)))||(e=f({src:e,async:!0},t),(t=Fd.get(a))&&tp(e,t),et(o=n.createElement("script")),fd(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}},S:function(e,t,n){Wd.S(e,t,n);var r=Bd;if(r&&e){var a=Ze(r).hoistableStyles,o=qd(e);t=t||"default";var i=a.get(o);if(!i){var l={loading:0,preload:null};if(i=r.querySelector(Kd(o)))l.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Fd.get(o))&&ep(e,n);var s=i=r.createElement("link");et(s),fd(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Zd(i,t,r)}i={type:"stylesheet",instance:i,count:1,state:l},a.set(o,i)}}},M:function(e,t){Wd.M(e,t);var n=Bd;if(n&&e){var r=Ze(n).hoistableScripts,a=Qd(e),o=r.get(a);o||((o=n.querySelector(Xd(a)))||(e=f({src:e,async:!0,type:"module"},t),(t=Fd.get(a))&&tp(e,t),et(o=n.createElement("script")),fd(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}}};var Bd="undefined"===typeof document?null:document;function Vd(e,t,n){var r=Bd;if(r&&"string"===typeof t&&t){var a=yt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),Ud.has(a)||(Ud.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(fd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}}function Gd(e,t,n,r){var a,o,l,s,c=(c=G.current)?Hd(c):null;if(!c)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=qd(n.href),(r=(n=Ze(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=qd(n.href);var u=Ze(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Kd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Fd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Fd.set(e,n),u||(a=c,o=e,l=n,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+o+"]")?s.loading=1:(o=a.createElement("link"),s.preload=o,o.addEventListener("load",function(){return s.loading|=1}),o.addEventListener("error",function(){return s.loading|=2}),fd(o,"link",l),et(o),a.head.appendChild(o))))),t&&null===r)throw Error(i(528,""));return d}if(t&&null!==r)throw Error(i(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Qd(n),(r=(n=Ze(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function qd(e){return'href="'+yt(e)+'"'}function Kd(e){return'link[rel="stylesheet"]['+e+"]"}function Yd(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Qd(e){return'[src="'+yt(e)+'"]'}function Xd(e){return"script[async]"+e}function Jd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+yt(n.href)+'"]');if(r)return t.instance=r,et(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return et(r=(e.ownerDocument||e).createElement("style")),fd(r,"style",a),Zd(r,n.precedence,e),t.instance=r;case"stylesheet":a=qd(n.href);var o=e.querySelector(Kd(a));if(o)return t.state.loading|=4,t.instance=o,et(o),o;r=Yd(n),(a=Fd.get(a))&&ep(r,a),et(o=(e.ownerDocument||e).createElement("link"));var l=o;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),fd(o,"link",r),t.state.loading|=4,Zd(o,n.precedence,e),t.instance=o;case"script":return o=Qd(n.src),(a=e.querySelector(Xd(o)))?(t.instance=a,et(a),a):(r=n,(a=Fd.get(o))&&tp(r=f({},n),a),et(a=(e=e.ownerDocument||e).createElement("script")),fd(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Zd(r,n.precedence,e));return t.instance}function Zd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,o=a,i=0;i<r.length;i++){var l=r[i];if(l.dataset.precedence===t)o=l;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function ep(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function tp(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var np=null;function rp(e,t,n){if(null===np){var r=new Map,a=np=new Map;a.set(n,r)}else(r=(a=np).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var o=n[a];if(!(o[Ke]||o[Ue]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var i=o.getAttribute(t)||"";i=e+i;var l=r.get(i);l?l.push(o):r.set(i,[o])}}return r}function ap(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function op(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var ip=0;function lp(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)cp(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var sp=null;function cp(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,sp=new Map,t.forEach(up,e),sp=null,lp.call(e))}function up(e,t){if(!(4&t.state.loading)){var n=sp.get(e);if(n)var r=n.get(null);else{n=new Map,sp.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var i=a[o];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(n.set(i.dataset.precedence,i),r=i)}r&&n.set(null,r)}i=(a=t.instance).getAttribute("data-precedence"),(o=n.get(i)||r)===r&&n.set(null,a),n.set(i,a),this.count++,r=lp.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),o?o.parentNode.insertBefore(a,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var dp={$$typeof:w,Provider:null,Consumer:null,_currentValue:M,_currentValue2:M,_threadCount:0};function pp(e,t,n,r,a,o,i,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function fp(e,t,n,r,a,o,i,l,s,c,u,d){return e=new pp(e,t,n,i,s,c,u,d,l),t=1,!0===o&&(t|=24),o=Ir(3,null,null,t),e.current=o,o.stateNode=e,(t=Fa()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},vo(o),e}function mp(e){return e?e=Ar:Ar}function hp(e,t,n,r,a,o){a=mp(a),null===r.context?r.context=a:r.pendingContext=a,(r=xo(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=wo(e,r,t))&&(Yc(n,0,t),ko(n,e,t))}function gp(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function yp(e,t){gp(e,t),(e=e.alternate)&&gp(e,t)}function vp(e){if(13===e.tag||31===e.tag){var t=Rr(e,67108864);null!==t&&Yc(t,0,67108864),yp(e,67108864)}}function bp(e){if(13===e.tag||31===e.tag){var t=qc(),n=Rr(e,t=Me(t));null!==n&&Yc(n,0,t),yp(e,t)}}var xp=!0;function wp(e,t,n,r){var a=R.T;R.T=null;var o=L.p;try{L.p=2,zp(e,t,n,r)}finally{L.p=o,R.T=a}}function kp(e,t,n,r){var a=R.T;R.T=null;var o=L.p;try{L.p=8,zp(e,t,n,r)}finally{L.p=o,R.T=a}}function zp(e,t,n,r){if(xp){var a=Sp(r);if(null===a)nd(e,t,r,jp,n),Mp(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Pp=Ap(Pp,e,t,n,r,a),!0;case"dragenter":return Tp=Ap(Tp,e,t,n,r,a),!0;case"mouseover":return $p=Ap($p,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Np.set(o,Ap(Np.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Op.set(o,Ap(Op.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Mp(e,r),4&t&&-1<Lp.indexOf(e)){for(;null!==a;){var o=Xe(a);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var i=Ee(o.pendingLanes);if(0!==i){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-xe(i);l.entanglements[1]|=s,i&=~s}Mu(o),0===(6&mc)&&(Lc=se()+500,Au(0,!1))}}break;case 31:case 13:null!==(l=Rr(o,2))&&Yc(l,0,2),eu(),yp(o,2)}if(null===(o=Sp(r))&&nd(e,t,r,jp,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else nd(e,t,r,null,n)}}function Sp(e){return Ep(e=Rt(e))}var jp=null;function Ep(e){if(jp=null,null!==(e=Qe(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(31===n){if(null!==(e=u(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return jp=e,null}function Cp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case ue:return 2;case de:return 8;case pe:case fe:return 32;case me:return 268435456;default:return 32}default:return 32}}var _p=!1,Pp=null,Tp=null,$p=null,Np=new Map,Op=new Map,Rp=[],Lp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mp(e,t){switch(e){case"focusin":case"focusout":Pp=null;break;case"dragenter":case"dragleave":Tp=null;break;case"mouseover":case"mouseout":$p=null;break;case"pointerover":case"pointerout":Np.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Op.delete(t.pointerId)}}function Ap(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=Xe(t))&&vp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Dp(e){var t=Qe(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void Ie(e.priority,function(){bp(n)})}else if(31===t){if(null!==(t=u(n)))return e.blockedOn=t,void Ie(e.priority,function(){bp(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Ip(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sp(e.nativeEvent);if(null!==n)return null!==(t=Xe(n))&&vp(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Ot=r,n.target.dispatchEvent(r),Ot=null,t.shift()}return!0}function Fp(e,t,n){Ip(e)&&n.delete(t)}function Up(){_p=!1,null!==Pp&&Ip(Pp)&&(Pp=null),null!==Tp&&Ip(Tp)&&(Tp=null),null!==$p&&Ip($p)&&($p=null),Np.forEach(Fp),Op.forEach(Fp)}function Hp(e,t){e.blockedOn===t&&(e.blockedOn=null,_p||(_p=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Up)))}var Wp=null;function Bp(e){Wp!==e&&(Wp=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Wp===e&&(Wp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===Ep(r||n))continue;break}var o=Xe(n);null!==o&&(e.splice(t,3),t-=3,nl(o,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function Vp(e){function t(t){return Hp(t,e)}null!==Pp&&Hp(Pp,e),null!==Tp&&Hp(Tp,e),null!==$p&&Hp($p,e),Np.forEach(t),Op.forEach(t);for(var n=0;n<Rp.length;n++){var r=Rp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Rp.length&&null===(n=Rp[0]).blockedOn;)Dp(n),null===n.blockedOn&&Rp.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],o=n[r+1],i=a[He]||null;if("function"===typeof o)i||Bp(n);else if(i){var l=null;if(o&&o.hasAttribute("formAction")){if(a=o,i=o[He]||null)l=i.formAction;else if(null!==Ep(a))continue}else l=i.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),Bp(n)}}}function Gp(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return a=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==a&&(a(),a=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var r=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==a&&(a(),a=null)}}}function qp(e){this._internalRoot=e}function Kp(e){this._internalRoot=e}Kp.prototype.render=qp.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));hp(t.current,qc(),e,t,null,null)},Kp.prototype.unmount=qp.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;hp(e.current,2,null,e,null,null),eu(),t[We]=null}},Kp.prototype.unstable_scheduleHydration=function(e){if(e){var t=De();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rp.length&&0!==t&&t<Rp[n].priority;n++);Rp.splice(n,0,e),0===n&&Dp(e)}};var Yp=a.version;if("19.2.4"!==Yp)throw Error(i(527,Yp,"19.2.4"));L.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return d(a),e;if(o===r)return d(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,c=a.child;c;){if(c===n){l=!0,n=a,r=o;break}if(c===r){l=!0,r=a,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,r=a;break}if(c===r){l=!0,r=o,n=a;break}c=c.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?p(e):null)?null:e.stateNode};var Qp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Xp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xp.isDisabled&&Xp.supportsFiber)try{ye=Xp.inject(Qp),ve=Xp}catch(Zp){}}t.createRoot=function(e,t){if(!l(e))throw Error(i(299));var n=!1,r="",a=jl,o=El,s=Cl;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError)),t=fp(e,1,!1,null,0,n,r,null,a,o,s,Gp),e[We]=t.current,ed(e),new qp(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(i(299));var r=!1,a="",o=jl,s=El,c=Cl,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(o=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.formState&&(u=n.formState)),(t=fp(e,1,!0,t,0,r,a,u,o,s,c,Gp)).context=mp(null),n=t.current,(a=xo(r=Me(r=qc()))).callback=null,wo(n,a,r),n=r,t.current.lanes=n,Ne(t,n),Mu(t),e[We]=t.current,ed(e),new Kp(t)},t.version="19.2.4"},672(e,t,n){var r=n(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var i={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,i.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&i.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?i.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):"script"===n&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&i.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else i.d.m(e)},t.requestFormReset=function(e){i.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.2.4"},391(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)},799(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},288(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.for("react.activity"),m=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function b(){}function x(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var w=x.prototype=new b;w.constructor=x,g(w,v.prototype),w.isPureReactComponent=!0;var k=Array.isArray;function z(){}var S={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function E(e,t,r){var a=r.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==a?a:null,props:r}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function T(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case p:return T((u=e._init)(e._payload),t,a,o,i)}}if(u)return i=i(e),u=""===o?"."+P(e,0):o,k(i)?(a="",null!=u&&(a=u.replace(_,"$&/")+"/"),T(i,t,a,"",function(e){return e})):null!=i&&(C(i)&&(s=i,c=a+(null==i.key||e&&e.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+u,i=E(s.type,c,s.props)),t.push(i)),1;u=0;var d,f=""===o?".":o+":";if(k(e))for(var h=0;h<e.length;h++)u+=T(o=e[h],t,a,l=f+P(o,h),i);else if("function"===typeof(h=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=m&&d[m]||d["@@iterator"])?d:null))for(e=h.call(e),h=0;!(o=e.next()).done;)u+=T(o=o.value,t,a,l=f+P(o,h++),i);else if("object"===l){if("function"===typeof e.then)return T(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(z,z):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,o,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function $(e,t,n){if(null==e)return e;var r=[],a=0;return T(e,r,"","",function(e){return t.call(n,e,a++)}),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},R={map:$,forEach:function(e,t,n){$(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $(e,function(){t++}),t},toArray:function(e){return $(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=f,t.Children=R,t.Component=v,t.Fragment=a,t.Profiler=i,t.PureComponent=x,t.StrictMode=o,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=g({},e.props),a=e.key;if(null!=t)for(o in void 0!==t.key&&(a=""+t.key),t)!j.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var i=Array(o),l=0;l<o;l++)i[l]=arguments[l+2];r.children=i}return E(e.type,a,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,a={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)j.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return E(e,o,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),a=S.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(z,O)}catch(o){O(o)}finally{null!==t&&null!==n.types&&(t.types=n.types),S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return S.H.useEffect(e,t)},t.useEffectEvent=function(e){return S.H.useEffectEvent(e)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return S.H.useTransition()},t.version="19.2.4"},43(e,t,n){e.exports=n(288)},579(e,t,n){e.exports=n(799)},896(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>o(s,n))c<a&&0>o(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<a&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,m=!1,h=!1,g=!1,y=!1,v="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function k(e){if(g=!1,w(e),!h)if(null!==r(c))h=!0,S||(S=!0,z());else{var t=r(u);null!==t&&N(k,t.startTime-e)}}var z,S=!1,j=-1,E=5,C=-1;function _(){return!!y||!(t.unstable_now()-C<E)}function P(){if(y=!1,S){var e=t.unstable_now();C=e;var n=!0;try{e:{h=!1,g&&(g=!1,b(j),j=-1),m=!0;var o=f;try{t:{for(w(e),p=r(c);null!==p&&!(p.expirationTime>e&&_());){var i=p.callback;if("function"===typeof i){p.callback=null,f=p.priorityLevel;var l=i(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){p.callback=l,w(e),n=!0;break t}p===r(c)&&a(c),w(e)}else a(c);p=r(c)}if(null!==p)n=!0;else{var s=r(u);null!==s&&N(k,s.startTime-e),n=!1}}break e}finally{p=null,f=o,m=!1}n=void 0}}finally{n?z():S=!1}}}if("function"===typeof x)z=function(){x(P)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,$=T.port2;T.port1.onmessage=P,z=function(){$.postMessage(null)}}else z=function(){v(P,0)};function N(e,n){j=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_requestPaint=function(){y=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(g?(b(j),j=-1):g=!0,N(k,o-i))):(e.sortIndex=l,n(c,e),h||m||(h=!0,S||(S=!0,z()))),e},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},853(e,t,n){e.exports=n(896)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>i[e]=()=>r[e]);return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/klara-queen/",n.nc=void 0;var r=n(43),a=n.t(r,2),o=n(391),i="popstate";function l(e){return"object"===typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function s(){return h(function(e,t){let n=t.state?.masked,{pathname:r,search:a,hash:o}=n||e.location;return p("",{pathname:r,search:a,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"===typeof t?t:f(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function p(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?m(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10),unstable_mask:a}}function f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function m(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function h(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:a=document.defaultView,v5Compat:o=!1}=r,s=a.history,c="POP",u=null,f=m();function m(){return(s.state||{idx:null}).idx}function h(){c="POP";let e=m(),t=null==e?null:e-f;f=e,u&&u({action:c,location:v.location,delta:t})}function y(e){return g(e)}null==f&&(f=0,s.replaceState({...s.state,idx:f},""));let v={get action(){return c},get location(){return e(a,s)},listen(e){if(u)throw new Error("A history only accepts one active listener");return a.addEventListener(i,h),u=e,()=>{a.removeEventListener(i,h),u=null}},createHref:e=>t(a,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){c="PUSH";let r=l(e)?e:p(v.location,e,t);n&&n(r,e),f=m()+1;let i=d(r,f),h=v.createHref(r.unstable_mask||r);try{s.pushState(i,"",h)}catch(g){if(g instanceof DOMException&&"DataCloneError"===g.name)throw g;a.location.assign(h)}o&&u&&u({action:c,location:v.location,delta:1})},replace:function(e,t){c="REPLACE";let r=l(e)?e:p(v.location,e,t);n&&n(r,e),f=m();let a=d(r,f),i=v.createHref(r.unstable_mask||r);s.replaceState(a,"",i),o&&u&&u({action:c,location:v.location,delta:0})},go:e=>s.go(e)};return v}function g(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),c(n,"No window.location.(origin|href) available to create URL");let r="string"===typeof e?e:f(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}new WeakMap;function y(e,t){return v(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function v(e,t,n,r){let a=O(("string"===typeof t?m(t):t).pathname||"/",n);if(null==a)return null;let o=b(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=N(a);i=P(o[l],e,r)}return i}function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=function(e,o){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,l=arguments.length>3?arguments[3]:void 0,s={relativePath:void 0===l?e.path||"":l,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};if(s.relativePath.startsWith("/")){if(!s.relativePath.startsWith(r)&&i)return;c(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length)}let u=F([r,s.relativePath]),d=n.concat(s);e.children&&e.children.length>0&&(c(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),b(e.children,t,d,u,i)),(null!=e.path||e.index)&&t.push({path:u,score:_(u,e.index),routesMeta:d})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of x(e.path))o(e,t,!0,n);else o(e,t)}),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=x(r.join("/")),l=[];return l.push(...i.map(e=>""===e?o:[o,e].join("/"))),a&&l.push(...i),l.map(t=>e.startsWith("/")&&""===t?"/":t)}var w=/^:[\w-]+$/,k=3,z=2,S=1,j=10,E=-2,C=e=>"*"===e;function _(e,t){let n=e.split("/"),r=n.length;return n.some(C)&&(r+=E),t&&(r+=z),n.filter(e=>!C(e)).reduce((e,t)=>e+(w.test(t)?k:""===t?S:j),r)}function P(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===o?t:t.slice(o.length)||"/",u=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(a,u.params),i.push({params:a,pathname:F([o,u.pathname]),pathnameBase:U(F([o,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(o=F([o,u.pathnameBase]))}return i}function T(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=$(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:o,pathnameBase:i,pattern:e}}function $(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];u("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,a,o)=>{if(r.push({paramName:t,isOptional:null!=n}),n){let t=o.charAt(a+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function N(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return u(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function O(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}var R=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function L(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function M(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function A(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function D(e){let t=A(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function I(e,t,n){let r,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=m(e):(r={...e},c(!r.pathname||!r.pathname.includes("?"),M("?","pathname","search",r)),c(!r.pathname||!r.pathname.includes("#"),M("#","pathname","hash",r)),c(!r.search||!r.search.includes("#"),M("#","search","hash",r)));let o,i=""===e||""===r.pathname,l=i?"/":r.pathname;if(null==l)o=n;else{let e=t.length-1;if(!a&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}o=e>=0?t[e]:"/"}let s=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:r,search:a="",hash:o=""}="string"===typeof e?m(e):e;return r?(r=r.replace(/\/\/+/g,"/"),t=r.startsWith("/")?L(r.substring(1),"/"):L(r,n)):t=n,{pathname:t,search:H(a),hash:W(o)}}(r,o),u=l&&"/"!==l&&l.endsWith("/"),d=(i||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!u&&!d||(s.pathname+="/"),s}var F=e=>e.join("/").replace(/\/\/+/g,"/"),U=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),H=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",W=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var B=class{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function V(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}function G(e){return e.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var q="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function K(e,t){let n=e;if("string"!==typeof n||!R.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,a=!1;if(q)try{let e=new URL(window.location.href),r=n.startsWith("//")?new URL(e.protocol+n):new URL(n),o=O(r.pathname,t);r.origin===e.origin&&null!=o?n=o+r.search+r.hash:a=!0}catch(o){u(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:a,to:n}}Symbol("Uninstrumented");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Y=["POST","PUT","PATCH","DELETE"],Q=(new Set(Y),["GET",...Y]);new Set(Q),Symbol("ResetLoaderData");var X=r.createContext(null);X.displayName="DataRouter";var J=r.createContext(null);J.displayName="DataRouterState";var Z=r.createContext(!1);function ee(){return r.useContext(Z)}var te=r.createContext({isTransitioning:!1});te.displayName="ViewTransition";var ne=r.createContext(new Map);ne.displayName="Fetchers";var re=r.createContext(null);re.displayName="Await";var ae=r.createContext(null);ae.displayName="Navigation";var oe=r.createContext(null);oe.displayName="Location";var ie=r.createContext({outlet:null,matches:[],isDataRoute:!1});ie.displayName="Route";var le=r.createContext(null);le.displayName="RouteError";var se="REACT_ROUTER_ERROR";function ce(){return null!=r.useContext(oe)}function ue(){return c(ce(),"useLocation() may be used only in the context of a <Router> component."),r.useContext(oe).location}var de="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function pe(e){r.useContext(ae).static||r.useLayoutEffect(e)}function fe(){let{isDataRoute:e}=r.useContext(ie);return e?function(){let{router:e}=je("useNavigate"),t=Ce("useNavigate"),n=r.useRef(!1);pe(()=>{n.current=!0});let a=r.useCallback(async function(r){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(n.current,de),n.current&&("number"===typeof r?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...a}))},[e,t]);return a}():function(){c(ce(),"useNavigate() may be used only in the context of a <Router> component.");let e=r.useContext(X),{basename:t,navigator:n}=r.useContext(ae),{matches:a}=r.useContext(ie),{pathname:o}=ue(),i=JSON.stringify(D(a)),l=r.useRef(!1);pe(()=>{l.current=!0});let s=r.useCallback(function(r){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(u(l.current,de),!l.current)return;if("number"===typeof r)return void n.go(r);let s=I(r,JSON.parse(i),o,"path"===a.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:F([t,s.pathname])),(a.replace?n.replace:n.push)(s,a.state,a)},[t,n,i,o,e]);return s}()}r.createContext(null);function me(){let{matches:e}=r.useContext(ie),t=e[e.length-1];return t?t.params:{}}function he(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:n}=r.useContext(ie),{pathname:a}=ue(),o=JSON.stringify(D(n));return r.useMemo(()=>I(e,JSON.parse(o),a,"path"===t),[e,o,a,t])}function ge(e,t,n){c(ce(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=r.useContext(ae),{matches:o}=r.useContext(ie),i=o[o.length-1],l=i?i.params:{},s=i?i.pathname:"/",d=i?i.pathnameBase:"/",p=i&&i.route;{let e=p&&p.path||"";Te(s,!p||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let f,h=ue();if(t){let e="string"===typeof t?m(t):t;c("/"===d||e.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`),f=e}else f=h;let g=f.pathname||"/",v=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=y(e,{pathname:v});u(p||null!=b,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),u(null==b||void 0!==b[b.length-1].route.element||void 0!==b[b.length-1].route.Component||void 0!==b[b.length-1].route.lazy,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=ze(b&&b.map(e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:F([d,a.encodeLocation?a.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:F([d,a.encodeLocation?a.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),o,n);return t&&x?r.createElement(oe.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...f},navigationType:"POP"}},x):x}function ye(){let e=_e(),t=V(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},i={padding:"2px 4px",backgroundColor:a},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=r.createElement(r.Fragment,null,r.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),r.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",r.createElement("code",{style:i},"ErrorBoundary")," or"," ",r.createElement("code",{style:i},"errorElement")," prop on your route.")),r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:o},n):null,l)}var ve=r.createElement(ye,null),be=class extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&"object"===typeof e&&e&&"digest"in e&&"string"===typeof e.digest){const t=function(e){if(e.startsWith(`${se}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText)return new B(t.status,t.statusText,t.data)}catch{}}(e.digest);t&&(e=t)}let t=void 0!==e?r.createElement(ie.Provider,{value:this.props.routeContext},r.createElement(le.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?r.createElement(we,{error:e},t):t}};be.contextType=Z;var xe=new WeakMap;function we(e){let{children:t,error:n}=e,{basename:a}=r.useContext(ae);if("object"===typeof n&&n&&"digest"in n&&"string"===typeof n.digest){let e=function(e){if(e.startsWith(`${se}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText&&"string"===typeof t.location&&"boolean"===typeof t.reloadDocument&&"boolean"===typeof t.replace)return t}catch{}}(n.digest);if(e){let t=xe.get(n);if(t)throw t;let o=K(e.location,a);if(q&&!xe.get(n)){if(!o.isExternal&&!e.reloadDocument){const t=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:e.replace}));throw xe.set(n,t),t}window.location.href=o.absoluteURL||o.to}return r.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return t}function ke(e){let{routeContext:t,match:n,children:a}=e,o=r.useContext(X);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(ie.Provider,{value:t},a)}function ze(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,a=n?.state;if(null==e){if(!a)return null;if(a.errors)e=a.matches;else{if(0!==t.length||a.initialized||!(a.matches.length>0))return null;e=a.matches}}let o=e,i=a?.errors;if(null!=i){let e=o.findIndex(e=>e.route.id&&void 0!==i?.[e.route.id]);c(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let l=!1,s=-1;if(n&&a){l=a.renderFallback;for(let e=0;e<o.length;e++){let t=o[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:r}=a,i=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!r||void 0===r[t.route.id]);if(t.route.lazy||i){n.isStatic&&(l=!0),o=s>=0?o.slice(0,s+1):[o[0]];break}}}}let u=n?.onError,d=a&&u?(e,t)=>{u(e,{location:a.location,params:a.matches?.[0]?.params??{},unstable_pattern:G(a.matches),errorInfo:t})}:void 0;return o.reduceRight((e,n,c)=>{let u,p=!1,f=null,m=null;a&&(u=i&&n.route.id?i[n.route.id]:void 0,f=n.route.errorElement||ve,l&&(s<0&&0===c?(Te("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,m=null):s===c&&(p=!0,m=n.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,c+1)),g=()=>{let t;return t=u?f:p?m:n.route.Component?r.createElement(n.route.Component,null):n.route.element?n.route.element:e,r.createElement(ke,{match:n,routeContext:{outlet:e,matches:h,isDataRoute:null!=a},children:t})};return a&&(n.route.ErrorBoundary||n.route.errorElement||0===c)?r.createElement(be,{location:a.location,revalidation:a.revalidation,component:f,error:u,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:d}):g()},null)}function Se(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function je(e){let t=r.useContext(X);return c(t,Se(e)),t}function Ee(e){let t=r.useContext(J);return c(t,Se(e)),t}function Ce(e){let t=function(e){let t=r.useContext(ie);return c(t,Se(e)),t}(e),n=t.matches[t.matches.length-1];return c(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function _e(){let e=r.useContext(le),t=Ee("useRouteError"),n=Ce("useRouteError");return void 0!==e?e:t.errors?.[n]}var Pe={};function Te(e,t,n){t||Pe[e]||(Pe[e]=!0,u(!1,n))}var $e={};function Ne(e,t){e||$e[t]||($e[t]=!0,console.warn(t))}a.useOptimistic;r.memo(Oe);function Oe(e){let{routes:t,future:n,state:r,isStatic:a,onError:o}=e;return ge(t,void 0,{state:r,isStatic:a,onError:o,future:n})}function Re(e){c(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Le(e){let{basename:t="/",children:n=null,location:a,navigationType:o="POP",navigator:i,static:l=!1,unstable_useTransitions:s}=e;c(!ce(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=t.replace(/^\/*/,"/"),p=r.useMemo(()=>({basename:d,navigator:i,static:l,unstable_useTransitions:s,future:{}}),[d,i,l,s]);"string"===typeof a&&(a=m(a));let{pathname:f="/",search:h="",hash:g="",state:y=null,key:v="default",unstable_mask:b}=a,x=r.useMemo(()=>{let e=O(f,d);return null==e?null:{location:{pathname:e,search:h,hash:g,state:y,key:v,unstable_mask:b},navigationType:o}},[d,f,h,g,y,v,o,b]);return u(null!=x,`<Router basename="${d}"> is not able to match the URL "${f}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),null==x?null:r.createElement(ae.Provider,{value:p},r.createElement(oe.Provider,{children:n,value:x}))}function Me(e){let{children:t,location:n}=e;return ge(Ae(t),n)}r.Component;function Ae(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return r.Children.forEach(e,(e,a)=>{if(!r.isValidElement(e))return;let o=[...t,a];if(e.type===r.Fragment)return void n.push.apply(n,Ae(e.props.children,o));c(e.type===Re,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),c(!e.props.index||!e.props.children,"An index route cannot have child routes.");let i={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=Ae(e.props.children,o)),n.push(i)}),n}var De="get",Ie="application/x-www-form-urlencoded";function Fe(e){return"undefined"!==typeof HTMLElement&&e instanceof HTMLElement}var Ue=null;var He=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function We(e){return null==e||He.has(e)?e:(u(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ie}"`),null)}function Be(e,t){let n,r,a,o,i;if(Fe(l=e)&&"form"===l.tagName.toLowerCase()){let i=e.getAttribute("action");r=i?O(i,t):null,n=e.getAttribute("method")||De,a=We(e.getAttribute("enctype"))||Ie,o=new FormData(e)}else if(function(e){return Fe(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Fe(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||i.getAttribute("action");if(r=l?O(l,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||De,a=We(e.getAttribute("formenctype"))||We(i.getAttribute("enctype"))||Ie,o=new FormData(i,e),!function(){if(null===Ue)try{new FormData(document.createElement("form"),0),Ue=!1}catch(e){Ue=!0}return Ue}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else{if(Fe(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=De,r=null,a=Ie,i=e}var l;return o&&"text/plain"===a&&(i=o,o=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:o,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function Ve(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function Ge(e,t,n,r){let a="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return n?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${r}`:a.pathname=`${a.pathname}.${r}`:"/"===a.pathname?a.pathname=`_root.${r}`:t&&"/"===O(a.pathname,t)?a.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function qe(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ke(e){return null!=e&&"string"===typeof e.page}function Ye(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Qe(e,t,n,r,a,o){let i=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter((e,t)=>i(e,t)||l(e,t)):"data"===o?t.filter((t,o)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(i(t,o)||l(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function Xe(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1),[...new Set(r)];var r}function Je(e,t){let n=new Set,r=new Set(t);return e.reduce((e,a)=>{if(t&&!Ke(a)&&"script"===a.as&&a.href&&r.has(a.href))return e;let o=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(a));return n.has(o)||(n.add(o),e.push({key:o,link:a})),e},[])}function Ze(e,t){return"lazy"===e.mode&&!0===t}function et(){let e=r.useContext(X);return Ve(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function tt(){let e=r.useContext(J);return Ve(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var nt=r.createContext(void 0);function rt(){let e=r.useContext(nt);return Ve(e,"You must render this element inside a <HydratedRouter> element"),e}function at(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ot(e,t,n){if(n&&!ct)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}nt.displayName="FrameworkContext";function it(e){let{page:t,...n}=e,{router:a}=et(),o=r.useMemo(()=>y(a.routes,t,a.basename),[a.routes,t,a.basename]);return o?r.createElement(st,{page:t,matches:o,...n}):null}function lt(e){let{manifest:t,routeModules:n}=rt(),[a,o]=r.useState([]);return r.useEffect(()=>{let r=!1;return async function(e,t,n){let r=await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await qe(r,n);return e.links?e.links():[]}return[]}));return Je(r.flat(1).filter(Ye).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{r||o(e)}),()=>{r=!0}},[e,t,n]),a}function st(e){let{page:t,matches:n,...a}=e,o=ue(),{future:i,manifest:l,routeModules:s}=rt(),{basename:c}=et(),{loaderData:u,matches:d}=tt(),p=r.useMemo(()=>Qe(t,n,d,l,o,"data"),[t,n,d,l,o]),f=r.useMemo(()=>Qe(t,n,d,l,o,"assets"),[t,n,d,l,o]),m=r.useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let e=new Set,r=!1;if(n.forEach(t=>{let n=l.routes[t.route.id];n&&n.hasLoader&&(!p.some(e=>e.route.id===t.route.id)&&t.route.id in u&&s[t.route.id]?.shouldRevalidate||n.hasClientLoader?r=!0:e.add(t.route.id))}),0===e.size)return[];let a=Ge(t,c,i.unstable_trailingSlashAwareDataRequests,"data");return r&&e.size>0&&a.searchParams.set("_routes",n.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[a.pathname+a.search]},[c,i.unstable_trailingSlashAwareDataRequests,u,o,l,p,n,t,s]),h=r.useMemo(()=>Xe(f,l),[f,l]),g=lt(f);return r.createElement(r.Fragment,null,m.map(e=>r.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...a})),h.map(e=>r.createElement("link",{key:e,rel:"modulepreload",href:e,...a})),g.map(e=>{let{key:t,link:n}=e;return r.createElement("link",{key:t,nonce:a.nonce,...n,crossOrigin:n.crossOrigin??a.crossOrigin})}))}var ct=!1;function ut(e){let{manifest:t,serverHandoffString:n,isSpaMode:a,renderMeta:o,routeDiscovery:i,ssr:l}=rt(),{router:s,static:c,staticContext:u}=et(),{matches:d}=tt(),p=ee(),f=Ze(i,l);o&&(o.didRenderScripts=!0);let m=ot(d,null,a);r.useEffect(()=>{ct=!0},[]);let h=r.useMemo(()=>{if(p)return null;let a=u?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=c?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${f?"":`import ${JSON.stringify(t.url)}`};\n${m.map((e,n)=>{let r=`route${n}`,a=t.routes[e.route.id];Ve(a,`Route ${e.route.id} not found in manifest`);let{clientActionModule:o,clientLoaderModule:i,clientMiddlewareModule:l,hydrateFallbackModule:s,module:c}=a,u=[...o?[{module:o,varName:`${r}_clientAction`}]:[],...i?[{module:i,varName:`${r}_clientLoader`}]:[],...l?[{module:l,varName:`${r}_clientMiddleware`}]:[],...s?[{module:s,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${u.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${f?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,a=new Set(t.state.matches.map(e=>e.route.id)),o=t.state.location.pathname.split("/").filter(Boolean),i=["/"];for(o.pop();o.length>0;)i.push(`/${o.join("/")}`),o.pop();i.forEach(e=>{let n=y(t.routes,e,t.basename);n&&n.forEach(e=>a.add(e.route.id))});let l=[...a].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:l,sri:!!n||void 0}}(t,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${m.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return r.createElement(r.Fragment,null,r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:a},type:void 0}),r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:o},type:"module",async:!0}))},[]),g=ct||p?[]:(v=t.entry.imports.concat(Xe(m,t,{includeHydrateFallback:!0})),[...new Set(v)]);var v;let b="object"===typeof t.sri?t.sri:{};return Ne(!p,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),ct||p?null:r.createElement(r.Fragment,null,"object"===typeof t.sri?r.createElement("script",{...e,"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:b})}}):null,f?null:r.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:b[t.url],suppressHydrationWarning:!0}),r.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:b[t.entry.module],suppressHydrationWarning:!0}),g.map(t=>r.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:b[t],suppressHydrationWarning:!0})),h)}function dt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}r.Component;function pt(e){let{error:t,isOutsideRemixApp:n}=e;console.error(t);let a,o=r.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(V(t))return r.createElement(ft,{title:"Unhandled Thrown Response!"},r.createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),o);if(t instanceof Error)a=t;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);a=new Error(e)}return r.createElement(ft,{title:"Application Error!",isOutsideRemixApp:n},r.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),r.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},a.stack),o)}function ft(e){let{title:t,renderScripts:n,isOutsideRemixApp:a,children:o}=e,{routeModules:i}=rt();return i.root?.Layout&&!a?o:r.createElement("html",{lang:"en"},r.createElement("head",null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),r.createElement("title",null,t)),r.createElement("body",null,r.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,n?r.createElement(ut,null):null)))}var mt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{mt&&(window.__reactRouterVersion="7.13.2")}catch(vc){}function ht(e){let{basename:t,children:n,unstable_useTransitions:a,window:o}=e,i=r.useRef();null==i.current&&(i.current=s({window:o,v5Compat:!0}));let l=i.current,[c,u]=r.useState({action:l.action,location:l.location}),d=r.useCallback(e=>{!1===a?u(e):r.startTransition(()=>u(e))},[a]);return r.useLayoutEffect(()=>l.listen(d),[l,d]),r.createElement(Le,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,unstable_useTransitions:a})}var gt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yt=r.forwardRef(function(e,t){let{onClick:n,discover:a="render",prefetch:o="none",relative:i,reloadDocument:l,replace:s,unstable_mask:u,state:d,target:p,to:m,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:y,...v}=e,{basename:b,navigator:x,unstable_useTransitions:w}=r.useContext(ae),k="string"===typeof m&&gt.test(m),z=K(m,b);m=z.to;let S=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(ce(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=r.useContext(ae),{hash:o,pathname:i,search:l}=he(e,{relative:t}),s=i;return"/"!==n&&(s="/"===i?n:F([n,i])),a.createHref({pathname:s,search:l,hash:o})}(m,{relative:i}),j=ue(),E=null;if(u){let e=I(u,[],j.unstable_mask?j.unstable_mask.pathname:"/",!0);"/"!==b&&(e.pathname="/"===e.pathname?b:F([b,e.pathname])),E=x.createHref(e)}let[C,_,P]=function(e,t){let n=r.useContext(nt),[a,o]=r.useState(!1),[i,l]=r.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:p}=t,f=r.useRef(null);r.useEffect(()=>{if("render"===e&&l(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{l(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),r.useEffect(()=>{if(a){let e=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(e)}}},[a]);let m=()=>{o(!0)},h=()=>{o(!1),l(!1)};return n?"intent"!==e?[i,f,{}]:[i,f,{onFocus:at(s,m),onBlur:at(c,h),onMouseEnter:at(u,m),onMouseLeave:at(d,h),onTouchStart:at(p,m)}]:[!1,f,{}]}(o,v),T=function(e){let{target:t,replace:n,unstable_mask:a,state:o,preventScrollReset:i,relative:l,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:u}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=fe(),p=ue(),m=he(e,{relative:l});return r.useCallback(h=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(h,t)){h.preventDefault();let t=void 0!==n?n:f(p)===f(m),g=()=>d(e,{replace:t,unstable_mask:a,state:o,preventScrollReset:i,relative:l,viewTransition:s,unstable_defaultShouldRevalidate:c});u?r.startTransition(()=>g()):g()}},[p,d,m,n,a,o,t,e,i,l,s,c,u])}(m,{replace:s,unstable_mask:u,state:d,target:p,preventScrollReset:h,relative:i,viewTransition:g,unstable_defaultShouldRevalidate:y,unstable_useTransitions:w});let $=!(z.isExternal||l),N=r.createElement("a",{...v,...P,href:($?E:void 0)||z.absoluteURL||S,onClick:$?function(e){n&&n(e),e.defaultPrevented||T(e)}:n,ref:dt(t,_),target:p,"data-discover":k||"render"!==a?void 0:"true"});return C&&!k?r.createElement(r.Fragment,null,N,r.createElement(it,{page:S})):N});yt.displayName="Link",r.forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:a=!1,className:o="",end:i=!1,style:l,to:s,viewTransition:u,children:d,...p}=e,f=he(s,{relative:p.relative}),m=ue(),h=r.useContext(J),{navigator:g,basename:y}=r.useContext(ae),v=null!=h&&function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.useContext(te);c(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=xt("useViewTransitionState"),o=he(e,{relative:t});if(!n.isTransitioning)return!1;let i=O(n.currentLocation.pathname,a)||n.currentLocation.pathname,l=O(n.nextLocation.pathname,a)||n.nextLocation.pathname;return null!=T(o.pathname,l)||null!=T(o.pathname,i)}(f)&&!0===u,b=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,x=m.pathname,w=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;a||(x=x.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&y&&(w=O(w,y)||w);const k="/"!==b&&b.endsWith("/")?b.length-1:b.length;let z,S=x===b||!i&&x.startsWith(b)&&"/"===x.charAt(k),j=null!=w&&(w===b||!i&&w.startsWith(b)&&"/"===w.charAt(b.length)),E={isActive:S,isPending:j,isTransitioning:v},C=S?n:void 0;z="function"===typeof o?o(E):[o,S?"active":null,j?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let _="function"===typeof l?l(E):l;return r.createElement(yt,{...p,"aria-current":C,className:z,ref:t,style:_,to:s,viewTransition:u},"function"===typeof d?d(E):d)}).displayName="NavLink";var vt=r.forwardRef((e,t)=>{let{discover:n="render",fetcherKey:a,navigate:o,reloadDocument:i,replace:l,state:s,method:u=De,action:d,onSubmit:p,relative:m,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:y,...v}=e,{unstable_useTransitions:b}=r.useContext(ae),x=zt(),w=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:n}=r.useContext(ae),a=r.useContext(ie);c(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),i={...he(e||".",{relative:t})},l=ue();if(null==e){i.search=l.search;let e=new URLSearchParams(i.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();i.search=n?`?${n}`:""}}e&&"."!==e||!o.route.index||(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(i.pathname="/"===i.pathname?n:F([n,i.pathname]));return f(i)}(d,{relative:m}),k="get"===u.toLowerCase()?"get":"post",z="string"===typeof d&&gt.test(d);return r.createElement("form",{ref:t,method:k,action:w,onSubmit:i?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||u,i=()=>x(t||e.currentTarget,{fetcherKey:a,method:n,navigate:o,replace:l,state:s,relative:m,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:y});b&&!1!==o?r.startTransition(()=>i()):i()},...v,"data-discover":z||"render"!==n?void 0:"true"})});function bt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xt(e){let t=r.useContext(X);return c(t,bt(e)),t}vt.displayName="Form";var wt=0,kt=()=>`__${String(++wt)}__`;function zt(){let{router:e}=xt("useSubmit"),{basename:t}=r.useContext(ae),n=Ce("useRouteId"),a=e.fetch,o=e.navigate;return r.useCallback(async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:l,encType:s,formData:c,body:u}=Be(e,t);if(!1===r.navigate){let e=r.fetcherKey||kt();await a(e,n,r.action||i,{unstable_defaultShouldRevalidate:r.unstable_defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:c,body:u,formMethod:r.method||l,formEncType:r.encType||s,flushSync:r.flushSync})}else await o(r.action||i,{unstable_defaultShouldRevalidate:r.unstable_defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:c,body:u,formMethod:r.method||l,formEncType:r.encType||s,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[a,o,t,n])}var St=function(){return St=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},St.apply(this,arguments)};Object.create;function jt(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Et={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ct="-ms-",_t="-moz-",Pt="-webkit-",Tt="comm",$t="rule",Nt="decl",Ot="@keyframes",Rt=Math.abs,Lt=String.fromCharCode,Mt=Object.assign;function At(e){return e.trim()}function Dt(e,t){return(e=t.exec(e))?e[0]:e}function It(e,t,n){return e.replace(t,n)}function Ft(e,t,n){return e.indexOf(t,n)}function Ut(e,t){return 0|e.charCodeAt(t)}function Ht(e,t,n){return e.slice(t,n)}function Wt(e){return e.length}function Bt(e){return e.length}function Vt(e,t){return t.push(e),e}function Gt(e,t){return e.filter(function(e){return!Dt(e,t)})}var qt=1,Kt=1,Yt=0,Qt=0,Xt=0,Jt="";function Zt(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:qt,column:Kt,length:i,return:"",siblings:l}}function en(e,t){return Mt(Zt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function tn(e){for(;e.root;)e=en(e.root,{children:[e]});Vt(e,e.siblings)}function nn(){return Xt=Qt>0?Ut(Jt,--Qt):0,Kt--,10===Xt&&(Kt=1,qt--),Xt}function rn(){return Xt=Qt<Yt?Ut(Jt,Qt++):0,Kt++,10===Xt&&(Kt=1,qt++),Xt}function an(){return Ut(Jt,Qt)}function on(){return Qt}function ln(e,t){return Ht(Jt,e,t)}function sn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cn(e){return qt=Kt=1,Yt=Wt(Jt=e),Qt=0,[]}function un(e){return Jt="",e}function dn(e){return At(ln(Qt-1,mn(91===e?e+2:40===e?e+1:e)))}function pn(e){for(;(Xt=an())&&Xt<33;)rn();return sn(e)>2||sn(Xt)>3?"":" "}function fn(e,t){for(;--t&&rn()&&!(Xt<48||Xt>102||Xt>57&&Xt<65||Xt>70&&Xt<97););return ln(e,on()+(t<6&&32==an()&&32==rn()))}function mn(e){for(;rn();)switch(Xt){case e:return Qt;case 34:case 39:34!==e&&39!==e&&mn(Xt);break;case 40:41===e&&mn(e);break;case 92:rn()}return Qt}function hn(e,t){for(;rn()&&e+Xt!==57&&(e+Xt!==84||47!==an()););return"/*"+ln(t,Qt-1)+"*"+Lt(47===e?e:rn())}function gn(e){for(;!sn(an());)rn();return ln(e,Qt)}function yn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function vn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case Nt:return e.return=e.return||e.value;case Tt:return"";case Ot:return e.return=e.value+"{"+yn(e.children,r)+"}";case $t:if(!Wt(e.value=e.props.join(",")))return""}return Wt(n=yn(e.children,r))?e.return=e.value+"{"+n+"}":""}function bn(e,t,n){switch(function(e,t){return 45^Ut(e,0)?(((t<<2^Ut(e,0))<<2^Ut(e,1))<<2^Ut(e,2))<<2^Ut(e,3):0}(e,t)){case 5103:return Pt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Pt+e+e;case 4855:return Pt+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return _t+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Pt+e+_t+e+Ct+e+e;case 5936:switch(Ut(e,t+11)){case 114:return Pt+e+Ct+It(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Pt+e+Ct+It(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Pt+e+Ct+It(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Pt+e+Ct+e+e;case 6165:return Pt+e+Ct+"flex-"+e+e;case 5187:return Pt+e+It(e,/(\w+).+(:[^]+)/,Pt+"box-$1$2"+Ct+"flex-$1$2")+e;case 5443:return Pt+e+Ct+"flex-item-"+It(e,/flex-|-self/g,"")+(Dt(e,/flex-|baseline/)?"":Ct+"grid-row-"+It(e,/flex-|-self/g,""))+e;case 4675:return Pt+e+Ct+"flex-line-pack"+It(e,/align-content|flex-|-self/g,"")+e;case 5548:return Pt+e+Ct+It(e,"shrink","negative")+e;case 5292:return Pt+e+Ct+It(e,"basis","preferred-size")+e;case 6060:return Pt+"box-"+It(e,"-grow","")+Pt+e+Ct+It(e,"grow","positive")+e;case 4554:return Pt+It(e,/([^-])(transform)/g,"$1"+Pt+"$2")+e;case 6187:return It(It(It(e,/(zoom-|grab)/,Pt+"$1"),/(image-set)/,Pt+"$1"),e,"")+e;case 5495:case 3959:return It(e,/(image-set\([^]*)/,Pt+"$1$`$1");case 4968:return It(It(e,/(.+:)(flex-)?(.*)/,Pt+"box-pack:$3"+Ct+"flex-pack:$3"),/space-between/,"justify")+Pt+e+e;case 4200:if(!Dt(e,/flex-|baseline/))return Ct+"grid-column-align"+Ht(e,t)+e;break;case 2592:case 3360:return Ct+It(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Dt(e.props,/grid-\w+-end/)})?~Ft(e+(n=n[t].value),"span",0)?e:Ct+It(e,"-start","")+e+Ct+"grid-row-span:"+(~Ft(n,"span",0)?Dt(n,/\d+/):+Dt(n,/\d+/)-+Dt(e,/\d+/))+";":Ct+It(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Dt(e.props,/grid-\w+-start/)})?e:Ct+It(It(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return It(e,/(.+)-inline(.+)/,Pt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wt(e)-1-t>6)switch(Ut(e,t+1)){case 109:if(45!==Ut(e,t+4))break;case 102:return It(e,/(.+:)(.+)-([^]+)/,"$1"+Pt+"$2-$3$1"+_t+(108==Ut(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ft(e,"stretch",0)?bn(It(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return It(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,o,i,l){return Ct+n+":"+r+l+(a?Ct+n+"-span:"+(o?i:+i-+r)+l:"")+e});case 4949:if(121===Ut(e,t+6))return It(e,":",":"+Pt)+e;break;case 6444:switch(Ut(e,45===Ut(e,14)?18:11)){case 120:return It(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Pt+(45===Ut(e,14)?"inline-":"")+"box$3$1"+Pt+"$2$3$1"+Ct+"$2box$3")+e;case 100:return It(e,":",":"+Ct)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return It(e,"scroll-","scroll-snap-")+e}return e}function xn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Nt:return void(e.return=bn(e.value,e.length,n));case Ot:return yn([en(e,{value:It(e.value,"@","@"+Pt)})],r);case $t:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Dt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tn(en(e,{props:[It(t,/:(read-\w+)/,":-moz-$1")]})),tn(en(e,{props:[t]})),Mt(e,{props:Gt(n,r)});break;case"::placeholder":tn(en(e,{props:[It(t,/:(plac\w+)/,":"+Pt+"input-$1")]})),tn(en(e,{props:[It(t,/:(plac\w+)/,":-moz-$1")]})),tn(en(e,{props:[It(t,/:(plac\w+)/,Ct+"input-$1")]})),tn(en(e,{props:[t]})),Mt(e,{props:Gt(n,r)})}return""})}}function wn(e){return un(kn("",null,null,null,[""],e=cn(e),0,[0],e))}function kn(e,t,n,r,a,o,i,l,s){for(var c=0,u=0,d=i,p=0,f=0,m=0,h=1,g=1,y=1,v=0,b="",x=a,w=o,k=r,z=b;g;)switch(m=v,v=rn()){case 40:if(108!=m&&58==Ut(z,d-1)){-1!=Ft(z+=It(dn(v),"&","&\f"),"&\f",Rt(c?l[c-1]:0))&&(y=-1);break}case 34:case 39:case 91:z+=dn(v);break;case 9:case 10:case 13:case 32:z+=pn(m);break;case 92:z+=fn(on()-1,7);continue;case 47:switch(an()){case 42:case 47:Vt(Sn(hn(rn(),on()),t,n,s),s),5!=sn(m||1)&&5!=sn(an()||1)||!Wt(z)||" "===Ht(z,-1,void 0)||(z+=" ");break;default:z+="/"}break;case 123*h:l[c++]=Wt(z)*y;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==y&&(z=It(z,/\f/g,"")),f>0&&(Wt(z)-d||0===h&&47===m)&&Vt(f>32?jn(z+";",r,n,d-1,s):jn(It(z," ","")+";",r,n,d-2,s),s);break;case 59:z+=";";default:if(Vt(k=zn(z,t,n,c,u,a,l,b,x=[],w=[],d,o),o),123===v)if(0===u)kn(z,t,k,k,x,o,d,l,w);else{switch(p){case 99:if(110===Ut(z,3))break;case 108:if(97===Ut(z,2))break;default:u=0;case 100:case 109:case 115:}u?kn(e,k,k,r&&Vt(zn(e,k,k,0,0,a,l,b,a,x=[],d,w),w),a,w,d,l,r?x:w):kn(z,k,k,k,[""],w,0,l,w)}}c=u=f=0,h=y=1,b=z="",d=i;break;case 58:d=1+Wt(z),f=m;default:if(h<1)if(123==v)--h;else if(125==v&&0==h++&&125==nn())continue;switch(z+=Lt(v),v*h){case 38:y=u>0?1:(z+="\f",-1);break;case 44:l[c++]=(Wt(z)-1)*y,y=1;break;case 64:45===an()&&(z+=dn(rn())),p=an(),u=d=Wt(b=z+=gn(on())),v++;break;case 45:45===m&&2==Wt(z)&&(h=0)}}return o}function zn(e,t,n,r,a,o,i,l,s,c,u,d){for(var p=a-1,f=0===a?o:[""],m=Bt(f),h=0,g=0,y=0;h<r;++h)for(var v=0,b=Ht(e,p+1,p=Rt(g=i[h])),x=e;v<m;++v)(x=At(g>0?f[v]+" "+b:It(b,/&\f/g,f[v])))&&(s[y++]=x);return Zt(e,t,n,0===a?$t:l,s,c,u,d)}function Sn(e,t,n,r){return Zt(e,t,n,Tt,Lt(Xt),Ht(e,2,-2),0,r)}function jn(e,t,n,r,a){return Zt(e,t,n,Nt,Ht(e,0,r),Ht(e,r+1,-1),r,a)}var En="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Cn="active",_n="data-styled-version",Pn="6.3.12",Tn="/*!sc*/\n",$n="undefined"!=typeof window&&"undefined"!=typeof document,Nn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),On={};function Rn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ln=new Map,Mn=new Map,An=1,Dn=function(e){if(Ln.has(e))return Ln.get(e);for(;Mn.has(An);)An++;var t=An++;return Ln.set(e,t),Mn.set(t,e),t},In=function(e,t){An=t+1,Ln.set(e,t),Mn.set(t,e)},Fn=(new Set,Object.freeze([])),Un=Object.freeze({});function Hn(e,t,n){return void 0===n&&(n=Un),e.theme!==n.theme&&e.theme||t||n.theme}var Wn=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Bn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Vn=/(^-|-$)/g;function Gn(e){return e.replace(Bn,"-").replace(Vn,"")}var qn=/(a)(d)/gi,Kn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Yn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Kn(t%52)+n;return(Kn(t%52)+n).replace(qn,"$1-$2")}var Qn,Xn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jn=function(e){return Xn(5381,e)};function Zn(e){return Yn(Jn(e)>>>0)}function er(e){return e.displayName||e.name||"Component"}function tr(e){return"string"==typeof e&&!0}var nr="function"==typeof Symbol&&Symbol.for,rr=nr?Symbol.for("react.memo"):60115,ar=nr?Symbol.for("react.forward_ref"):60112,or={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ir={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sr=((Qn={})[ar]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qn[rr]=lr,Qn);function cr(e){return("type"in(t=e)&&t.type.$$typeof)===rr?lr:"$$typeof"in e?sr[e.$$typeof]:or;var t}var ur=Object.defineProperty,dr=Object.getOwnPropertyNames,pr=Object.getOwnPropertySymbols,fr=Object.getOwnPropertyDescriptor,mr=Object.getPrototypeOf,hr=Object.prototype;function gr(e,t,n){if("string"!=typeof t){if(hr){var r=mr(t);r&&r!==hr&&gr(e,r,n)}var a=dr(t);pr&&(a=a.concat(pr(t)));for(var o=cr(e),i=cr(t),l=0;l<a.length;++l){var s=a[l];if(!(s in ir||n&&n[s]||i&&s in i||o&&s in o)){var c=fr(t,s);try{ur(e,s,c)}catch(e){}}}}return e}function yr(e){return"function"==typeof e}function vr(e){return"object"==typeof e&&"styledComponentId"in e}function br(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function xr(e,t){return e.join(t||"")}function wr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function kr(e,t,n){if(void 0===n&&(n=!1),!n&&!wr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=kr(e[r],t[r]);else if(wr(t))for(var r in t)e[r]=kr(e[r],t[r]);return e}function zr(e,t){Object.defineProperty(e,"toString",{value:t})}var Sr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw Rn(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=0,s=(o=0,t.length);o<s;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++,l++);l>0&&this._cGroup>e&&(this._cIndex+=l)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+=this.tag.getRule(o)+Tn;return t},e}(),jr="style[".concat(En,"][").concat(_n,'="').concat(Pn,'"]'),Er=new RegExp("^".concat(En,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Cr=function(e){return"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},_r=function(e){if(!e)return document;if(Cr(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Cr(t))return t}return document},Pr=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},Tr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Tn),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(Er);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(In(u,c),Pr(e,u,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(l)}}},$r=function(e){for(var t=_r(e.options.target).querySelectorAll(jr),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(En)!==Cn&&(Tr(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Nr(){return n.nc}var Or=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(En,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(En,Cn),r.setAttribute(_n,Pn);var i=Nr();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},Rr=function(){function e(e){this.element=Or(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets,r=0,a=n.length;r<a;r++){var o=n[r];if(o.ownerNode===e)return o}throw Rn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Lr=function(){function e(e){this.element=Or(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Mr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Ar=$n,Dr={isServer:!$n,useCSSOMInjection:!Nn},Ir=function(){function e(e,t,n){void 0===e&&(e=Un),void 0===t&&(t={});var r=this;this.options=St(St({},Dr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&$n&&Ar&&(Ar=!1,$r(this)),zr(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return Mn.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a);if(void 0===o||!o.size)return"continue";var i=t.getGroup(n);if(0===i.length)return"continue";var l=En+".g"+n+'[id="'+a+'"]',s="";o.forEach(function(e){e.length>0&&(s+=e+",")}),r+=i+l+'{content:"'+s+'"}'+Tn},o=0;o<n;o++)a(o);return r}(r)})}return e.registerId=function(e){return Dn(e)},e.prototype.rehydrate=function(){!this.server&&$n&&$r(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var r=new e(St(St({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&$n&&t.target!==this.options.target&&_r(this.options.target)!==_r(t.target)&&$r(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Mr(n):t?new Rr(n):new Lr(n)}(this.options),new Sr(e)));var e},e.prototype.hasNameForId=function(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r},e.prototype.registerName=function(e,t){Dn(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Dn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Dn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}();function Fr(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in Et||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Ur=function(e){return e>="A"&&e<="Z"};function Hr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Ur(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Wr=Symbol.for("sc-keyframes");var Br=function(e){return null==e||!1===e||""===e},Vr=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Br(r)&&(Array.isArray(r)&&r.isCss||yr(r)?t.push("".concat(Hr(n),":"),r,";"):wr(r)?t.push.apply(t,jt(jt(["".concat(n," {")],Vr(r),!1),["}"],!1)):t.push("".concat(Hr(n),": ").concat(Fr(n,r),";")))}return t};function Gr(e,t,n,r,a){if(void 0===a&&(a=[]),"string"==typeof e)return e&&a.push(e),a;if(Br(e))return a;if(vr(e))return a.push(".".concat(e.styledComponentId)),a;var o;if(yr(e))return!yr(o=e)||o.prototype&&o.prototype.isReactComponent||!t?(a.push(e),a):Gr(e(t),t,n,r,a);if(function(e){return"object"==typeof e&&null!==e&&Wr in e}(e))return n?(e.inject(n,r),a.push(e.getName(r))):a.push(e),a;if(wr(e)){for(var i=Vr(e),l=0;l<i.length;l++)a.push(i[l]);return a}if(!Array.isArray(e))return a.push(e.toString()),a;for(l=0;l<e.length;l++)Gr(e[l],t,n,r,a);return a}function qr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yr(n)&&!vr(n))return!1}return!0}var Kr=Jn(Pn),Yr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&qr(e),this.componentId=t,this.baseHash=Xn(Kr,t),this.baseStyle=n,Ir.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=br(r,this.staticRulesId);else{var a=xr(Gr(this.rules,e,t,n)),o=Yn(Xn(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=br(r,o),this.staticRulesId=o}else{for(var l=Xn(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=xr(Gr(u,e,t,n));l=Xn(Xn(l,String(c)),d),s+=d}}if(s){var p=Yn(l>>>0);if(!t.hasNameForId(this.componentId,p)){var f=n(s,".".concat(p),void 0,this.componentId);t.insertRules(this.componentId,p,f)}r=br(r,p)}}return{className:r,css:"undefined"==typeof window?t.getTag().getGroup(Dn(this.componentId)):""}},e}(),Qr=/&/g,Xr=47,Jr=42;function Zr(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,r=0,a=!1,o=0;o<t;o++){var i=e.charCodeAt(o);if(0!==r||a||i!==Xr||e.charCodeAt(o+1)!==Jr)if(a)i===Jr&&e.charCodeAt(o+1)===Xr&&(a=!1,o++);else if(34!==i&&39!==i||0!==o&&92===e.charCodeAt(o-1)){if(0===r)if(123===i)n++;else if(125===i&&--n<0)return!0}else 0===r?r=i:r===i&&(r=0);else a=!0,o++}return 0!==n||0!==r}function ea(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=ea(e.children,t)),e})}function ta(e){var t,n,r,a=void 0===e?Un:e,o=a.options,i=void 0===o?Un:o,l=a.plugins,s=void 0===l?Fn:l,c=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push(function(e){e.type===$t&&e.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),e.props[0]=e.props[0].replace(Qr,n).replace(r,c))}),i.prefix&&u.push(xn),u.push(vn);var d,p=[],f=function(e){var t=Bt(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)}))),m=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=void 0;var s=function(e){if(!Zr(e))return e;for(var t=e.length,n="",r=0,a=0,o=0,i=!1,l=0;l<t;l++){var s=e.charCodeAt(l);if(0!==o||i||s!==Xr||e.charCodeAt(l+1)!==Jr)if(i)s===Jr&&e.charCodeAt(l+1)===Xr&&(i=!1,l++);else if(34!==s&&39!==s||0!==l&&92===e.charCodeAt(l-1)){if(0===o)if(123===s)a++;else if(125===s){if(--a<0){for(var c=l+1;c<t;){var u=e.charCodeAt(c);if(59===u||10===u)break;c++}c<t&&59===e.charCodeAt(c)&&c++,a=0,l=c-1,r=c;continue}0===a&&(n+=e.substring(r,l+1),r=l+1)}else 59===s&&0===a&&(n+=e.substring(r,l+1),r=l+1)}else 0===o?o=s:o===s&&(o=0);else i=!0,l++}if(r<t){var d=e.substring(r);Zr(d)||(n+=d)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],r=0,a=0,o=0,i=0;a<t;){var l=e.charCodeAt(a);if(34!==l&&39!==l||0!==a&&92===e.charCodeAt(a-1))if(0===o)if(l===Xr&&a+1<t&&e.charCodeAt(a+1)===Jr){for(a+=2;a+1<t&&(e.charCodeAt(a)!==Jr||e.charCodeAt(a+1)!==Xr);)a++;a+=2}else if(40===l&&a>=3&&108==(32|e.charCodeAt(a-1))&&114==(32|e.charCodeAt(a-2))&&117==(32|e.charCodeAt(a-3)))i=1,a++;else if(i>0)41===l?i--:40===l&&i++,a++;else if(l===Jr&&a+1<t&&e.charCodeAt(a+1)===Xr)a>r&&n.push(e.substring(r,a)),r=a+=2;else if(l===Xr&&a+1<t&&e.charCodeAt(a+1)===Xr){for(a>r&&n.push(e.substring(r,a));a<t&&10!==e.charCodeAt(a);)a++;r=a}else a++;else a++;else 0===o?o=l:o===l&&(o=0),a++}return 0===r?e:(r<t&&n.push(e.substring(r)),n.join(""))}(e)),c=wn(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);return i.namespace&&(c=ea(c,i.namespace)),p=[],yn(c,f),p};return m.hash=s.length?s.reduce(function(e,t){return t.name||Rn(15),Xn(e,t.name)},5381).toString():"",m}var na=new Ir,ra=ta(),aa=r.createContext({shouldForwardProp:void 0,styleSheet:na,stylis:ra}),oa=(aa.Consumer,r.createContext(void 0));function ia(){return r.useContext(aa)}function la(e){if(!r.useMemo)return e.children;var t=ia().styleSheet,n=r.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),a=r.useMemo(function(){return ta({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),o=r.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:a}},[e.shouldForwardProp,n,a]);return r.createElement(aa.Provider,{value:o},r.createElement(oa.Provider,{value:a},e.children))}var sa=r.createContext(void 0);sa.Consumer;var ca={};new Set;function ua(e,t,n){var a=vr(e),o=e,i=!tr(e),l=t.attrs,s=void 0===l?Fn:l,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Gn(e);ca[n]=(ca[n]||0)+1;var r="".concat(n,"-").concat(Zn(Pn+n+ca[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,d=t.displayName,p=void 0===d?function(e){return tr(e)?"styled.".concat(e):"Styled(".concat(er(e),")")}(e):d,f=t.displayName&&t.componentId?"".concat(Gn(t.displayName),"-").concat(t.componentId):t.componentId||u,m=a&&o.attrs?o.attrs.concat(s).filter(Boolean):s,h=t.shouldForwardProp;if(a&&o.shouldForwardProp){var g=o.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;h=function(e,t){return g(e,t)&&y(e,t)}}else h=g}var v=new Yr(n,f,a?o.componentStyle:void 0);function b(e,t){return function(e,t,n){var a=e.attrs,o=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=r.useContext(sa),d=ia(),p=e.shouldForwardProp||d.shouldForwardProp,f=Hn(t,u,i)||Un,m=function(e,t,n){for(var r,a=St(St({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=yr(r=e[o])?r(a):r;for(var l in i)"className"===l?a.className=br(a.className,i[l]):"style"===l?a.style=St(St({},a.style),i[l]):l in t&&void 0===t[l]||(a[l]=i[l])}return"className"in t&&"string"==typeof t.className&&(a.className=br(a.className,t.className)),a}(a,t,f),h=m.as||c,g={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y&&m.theme===f||("forwardedAs"===y?g.as=m.forwardedAs:p&&!p(y,h)||(g[y]=m[y]));var v=function(e,t){var n=ia();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,m),b=v.className,x=br(l,s);return b&&(x+=" "+b),m.className&&(x+=" "+m.className),g[tr(h)&&!Wn.has(h)?"class":"className"]=x,n&&(g.ref=n),(0,r.createElement)(h,g)}(x,e,t)}b.displayName=p;var x=r.forwardRef(b);return x.attrs=m,x.componentStyle=v,x.displayName=p,x.shouldForwardProp=h,x.foldedComponentIds=a?br(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=f,x.target=a?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)kr(e,a[r],!0);return e}({},o.defaultProps,e):e}}),zr(x,function(){return".".concat(x.styledComponentId)}),i&&gr(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function da(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var pa=function(e){return Object.assign(e,{isCss:!0})};function fa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(yr(e)||wr(e))return pa(Gr(da(Fn,jt([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Gr(r):pa(Gr(da(r,t)))}function ma(e,t,n){if(void 0===n&&(n=Un),!t)throw Rn(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,fa.apply(void 0,jt([r],a,!1)))};return r.attrs=function(r){return ma(e,t,St(St({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return ma(e,t,St(St({},n),r))},r}var ha=function(e){return ma(ua,e)},ga=ha;Wn.forEach(function(e){ga[e]=ha(e)});var ya,va=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=qr(e),Ir.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(xr(Gr(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Ir.registerId(this.componentId+e);var a=this.componentId+e;this.isStatic?n.hasNameForId(a,a)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))},e}();!function(){function e(e,t){var n=this;this[ya]=!0,this.inject=function(e,t){void 0===t&&(t=ra);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,zr(this,function(){throw Rn(12,String(n.name))})}e.prototype.getName=function(e){return void 0===e&&(e=ra),this.name+e.hash}}();ya=Wr;(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Nr(),r=xr([n&&'nonce="'.concat(n,'"'),"".concat(En,'="true"'),"".concat(_n,'="').concat(Pn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Rn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Rn(2);var n=e.instance.toString();if(!n)return[];var a=((t={})[En]="",t[_n]=Pn,t.dangerouslySetInnerHTML={__html:n},t),o=Nr();return o&&(a.nonce=o),[r.createElement("style",St({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Ir({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Rn(2);return r.createElement(la,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Rn(3)}})(),"__sc-".concat(En,"__");const ba={smallPhone:360,phone:430,tablet:820,desktopHd:1920,tv4k:3840},xa={bordoAccent:"#9e1e36",bordoAccentDark:"#6a1426",bordoCore:"#4a1020",deepBlack:"#2e0810",outerSpace:"#2e0810",white:"#ffffff",goldMain:"#d4af37",goldHover:"#f1d592",goldSoft18:"rgba(212, 175, 55, 0.18)",goldSoft10:"rgba(180, 140, 30, 0.1)",goldSoft08:"rgba(212, 175, 55, 0.08)",goldSoft025:"rgba(212, 175, 55, 0.025)"},wa={main:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'},ka=ga.div`
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
`;var za=n(579);const Sa=function(){return(0,za.jsx)(ka,{})},ja=ga.nav`
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

  @media (max-width: ${ba.desktopHd}px) {
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

  @media (max-width: ${ba.tablet}px) {
    padding: 6px 12px;
  }

  @media (max-width: ${ba.phone}px) {
    min-height: 60px;
    column-gap: 8px;
    padding: 6px 10px;
  }
`,Ea=ga.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 821px) {
    grid-area: left;
    flex: none;
    min-width: 0;
  }
`,Ca=ga.div`
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
`,_a=ga.div`
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
`,Pa=ga.div`
  display: flex;

  @media (max-width: 629px) {
    display: none;
  }
`,Ta=ga.button`
  display: none;
  border: 1px solid rgba(241, 213, 146, 0.38);
  background: rgba(34, 10, 16, 0.72);
  color: ${xa.goldHover};
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
`,$a=ga.button`
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
`,Na=ga.aside`
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
`,Oa=ga.div`
  margin-top: 14px;
  padding-top: 12px;
  display: flex;
  justify-content: center;
  padding-left: 0;
  border-top: 1px solid rgba(241, 213, 146, 0.18);

  & > div {
    justify-content: center;
  }
`,Ra=n.p+"static/media/znak-wodny.5040197ae93bea0121d6.png",La=ga(yt)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`,Ma=ga.img.attrs({src:Ra,alt:"Logo"})`
  height: 90px;
  width: auto;
  cursor: pointer;
  filter: brightness(3) contrast(1.2) saturate(1.1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.34))
    drop-shadow(0 0 8px ${xa.goldMain})
    drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18));
  transition:
    transform 0.3s ease,
    filter 0.3s ease;

  @media (max-width: ${ba.tablet}px) {
    height: 72px;
  }

  @media (max-width: ${ba.phone}px) {
    height: 58px;
  }

  &:hover {
    transform: scale(1.05);
    filter: brightness(3) contrast(1.2) saturate(1.1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${xa.goldMain})
      drop-shadow(0 0 16px ${xa.goldHover});
  }
`;const Aa=function(){return(0,za.jsx)(La,{to:"/","aria-label":"Strona g\u0142\xf3wna Klara Queen",children:(0,za.jsx)(Ma,{})})},Da=ga.ul`
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

  @media (max-width: ${ba.phone}px) {
    gap: 4px 8px;
  }
`,Ia=ga.li`
  flex-shrink: 1;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: ${e=>(e.$vertical,"center")};
  gap: 0;
  width: auto;
  color: ${xa.goldHover};
  font-family: ${wa.main};
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

  @media (max-width: ${ba.phone}px) {
    letter-spacing: ${e=>e.$vertical?"0.9px":"0.7px"};
    font-size: ${e=>e.$vertical?"0.84rem":"0.64rem"};
    padding: ${e=>e.$vertical?"1px 0":"4px 6px"};
  }

  &:hover {
    color: ${xa.white};
    transform: translateY(-1px);
    border-color: ${e=>e.$vertical?"transparent":"rgba(241, 213, 146, 0.48)"};
    background: ${e=>e.$vertical?"transparent":"linear-gradient(180deg, rgba(255, 245, 214, 0.08) 0%, rgba(44, 12, 22, 0.28) 100%)"};
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${xa.goldMain},
      0 0 18px ${xa.goldHover};
  }
`,Fa=ga.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: inherit;
`;var Ua={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ha=r.createContext&&r.createContext(Ua),Wa=["attr","size","title"];function Ba(){return Ba=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ba.apply(null,arguments)}function Va(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ga(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Va(Object(n),!0).forEach(function(t){qa(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Va(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function qa(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ka(e){return e&&e.map((e,t)=>r.createElement(e.tag,Ga({key:t},e.attr),Ka(e.child)))}function Ya(e){return t=>r.createElement(Qa,Ba({attr:Ga({},e.attr)},t),Ka(e.child))}function Qa(e){var t=t=>{var n,{attr:a,size:o,title:i}=e,l=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,Wa),s=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",Ba({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,l,{className:n,style:Ga(Ga({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==Ha?r.createElement(Ha.Consumer,null,e=>t(e)):t(Ua)}function Xa(e){return Ya({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Ja(e){return Ya({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function Za(e){return Ya({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function eo(e){return Ya({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(e)}function to(e){return Ya({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}const no=[{id:1,icon:function(e){return Ya({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)},url:"https://youtube.com",label:"YouTube"},{id:2,icon:function(e){return Ya({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)},url:"https://facebook.com",label:"Facebook"},{id:3,icon:function(e){return Ya({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(e)},url:"https://allegro.pl",label:"Allegro"}],ro={labels:[{name:"Oferta",to:"/offer"},{name:"Aktualno\u015bci",url:"#news"},{name:"Wsp\xf3\u0142praca",to:"/cooperation"},{name:"Najcz\u0119stsze pytania",to:"/questions"},{name:"O Nas",to:"/about"}],socials:no};const ao=function(e){let{vertical:t=!1,onItemClick:n}=e;const r=()=>{n&&n()};return(0,za.jsx)(Da,{$vertical:t,children:ro.labels.map((e,n)=>(0,za.jsx)(Ia,{$vertical:t,onClick:r,children:e.to?(0,za.jsx)(Fa,{as:yt,to:e.to,children:e.name}):(0,za.jsx)(Fa,{href:e.url,children:e.name})},`${e.name}-${n}`))})},oo=ga.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: ${ba.tablet}px) {
    gap: 14px;
  }

  @media (max-width: ${ba.phone}px) {
    gap: 12px;
  }
`,io=ga.a`
  color: ${xa.goldHover};
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

  @media (max-width: ${ba.tablet}px) {
    font-size: 1.18rem;
  }

  @media (max-width: ${ba.phone}px) {
    font-size: 1.08rem;
  }

  &:hover {
    color: ${xa.white};
    transform: translateY(-2px) scale(1.04);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${xa.goldMain})
      drop-shadow(0 0 16px ${xa.goldHover});
  }
`;const lo=function(){return(0,za.jsx)(oo,{children:ro.socials.map(e=>{const t=e.icon;return(0,za.jsx)(io,{href:e.url,target:"_blank",rel:"noreferrer","aria-label":e.label,children:(0,za.jsx)(t,{title:e.label})},e.id)})})};const so=function(){const[e,t]=(0,r.useState)(!1),n=()=>{t(!1)};return(0,za.jsxs)(za.Fragment,{children:[(0,za.jsxs)(ja,{children:[(0,za.jsx)(Ea,{children:(0,za.jsx)(Aa,{})}),(0,za.jsx)(Ca,{children:(0,za.jsx)(ao,{})}),(0,za.jsxs)(_a,{children:[(0,za.jsx)(Pa,{children:(0,za.jsx)(lo,{})}),(0,za.jsx)(Ta,{type:"button",onClick:()=>{t(e=>!e)},"aria-label":e?"Zamknij menu":"Otworz menu","aria-expanded":e,children:e?(0,za.jsx)(Xa,{}):(0,za.jsx)(to,{})})]})]}),(0,za.jsx)($a,{$open:e,onClick:n}),(0,za.jsxs)(Na,{$open:e,children:[(0,za.jsx)(ao,{vertical:!0,onItemClick:n}),(0,za.jsx)(Oa,{children:(0,za.jsx)(lo,{})})]})]})},co=ga.footer`
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

  @media (max-width: ${ba.smallPhone}px) {
    padding: 35px 14px 15px;
  }
`,uo=ga.div`
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

  @media (max-width: ${ba.phone}px) {
    gap: 20px;
  }

  @media (max-width: ${ba.smallPhone}px) {
    gap: 16px;
  }
`,po={brand:{name:"Klara Queen",slogan:"Digital Excellence",description:"Tworzymy luksusowe do\u015bwiadczenia cyfrowe, kt\xf3re definiuj\u0105 now\u0105 jako\u015b\u0107 Twojej marki w sieci."},links:[{name:"Start",to:"/"},{name:"Oferta",to:"/offer"},{name:"Aktualno\u015bci",url:"#news"},{name:"Wsp\xf3\u0142praca",to:"/cooperation"},{name:"Opinie",url:"#opinions"},{name:"O Nas",to:"/about"},{name:"Najcz\u0119stsze pytania",to:"/questions"}],socials:no,contact:{email:"kontakt@studioklara.pl",copy:`\xa9 ${(new Date).getFullYear()} Klara Queen. Wszystkie prawa zastrze\u017cone.`}},fo=ga.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: ${ba.tablet}px) {
    align-items: center;
  }
`,mo=ga.div`
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
`,ho=ga.img`
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
`,go=ga.p`
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
`;const yo=function(e){let{data:t}=e;return(0,za.jsxs)(fo,{children:[(0,za.jsx)(mo,{children:(0,za.jsx)(ho,{src:Ra,alt:t.name})}),(0,za.jsx)(go,{children:t.description})]})},vo=fa`
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
`,bo=ga.div`
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
`,xo=ga.h4`
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
`,wo=ga.div`
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
`,ko=ga.a`
  ${vo}
`,zo=ga(yt)`
  ${vo}
`;const So=function(e){let{data:t}=e;return(0,za.jsxs)(bo,{children:[(0,za.jsx)(xo,{children:"Nawigacja"}),(0,za.jsx)(wo,{children:t.map((e,t)=>e.to?(0,za.jsx)(zo,{to:e.to,children:e.name},t):(0,za.jsx)(ko,{href:e.url,children:e.name},t))})]})},jo=ga.div`
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
`,Eo=ga.h4`
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
`,Co=ga.div`
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
`,_o=ga.a`
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
`,Po=ga.span`
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
`;const To=function(e){let{data:t}=e;return(0,za.jsxs)(jo,{children:[(0,za.jsx)(Eo,{children:"Nasze Kana\u0142y"}),(0,za.jsx)(Co,{children:t.map(e=>(0,za.jsxs)(_o,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,za.jsx)(e.icon,{}),(0,za.jsx)(Po,{children:e.label})]},e.id))})]})},$o=ga.div`
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
`,No=ga.span`
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
`,Oo=ga.a`
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
`;const Ro=function(e){let{data:t}=e;return(0,za.jsxs)($o,{children:[(0,za.jsx)(No,{children:t.copy}),(0,za.jsx)(Oo,{href:`mailto:${t.email}`,children:t.email})]})};const Lo=function(){const{brand:e,links:t,socials:n,contact:r}=po;return(0,za.jsxs)(co,{children:[(0,za.jsxs)(uo,{children:[(0,za.jsx)(yo,{data:e}),(0,za.jsx)(So,{data:t}),(0,za.jsx)(To,{data:n})]}),(0,za.jsx)(Ro,{data:r})]})},Mo=()=>{const e=ue();return(0,r.useEffect)(()=>{window.scrollTo(0,0)},[e.key]),(0,r.useEffect)(()=>{setTimeout(()=>{window.scrollTo(0,0)},100)},[]),null},Ao=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=fa.apply(void 0,jt([e],t,!1)),o="sc-global-".concat(Zn(JSON.stringify(a))),i=new va(a,o),l=new WeakMap,s=function(e){var t=ia(),n=r.useContext(sa),a=l.get(t.styleSheet);return void 0===a&&(a=t.styleSheet.allocateGSInstance(o),l.set(t.styleSheet,a)),r.useLayoutEffect(function(){return t.styleSheet.server||function(e,t,n,r,a){if(i.isStatic)i.renderStyles(e,On,n,a);else{var o=St(St({},t),{theme:Hn(t,r,s.defaultProps)});i.renderStyles(e,o,n,a)}}(a,e,t.styleSheet,n,t.stylis),function(){i.removeStyles(a,t.styleSheet)}},[a,e,t.styleSheet,n,t.stylis]),null};return r.memo(s)})`
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
`,Do=ga.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,Io=ga.div`
  flex: 1;
  padding-top: 90px;

  @media (max-width: 821px) {
    padding-top: 70px;
  }
`,Fo=ga.section`
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

  @media (max-width: ${ba.tablet}px) {
    padding: 94px 0 0;
  }

  @media (max-width: 640px) {
    padding: 88px 0 0;
  }

  @media (max-width: ${ba.phone}px) {
    padding: 84px 0 0;
  }
`,Uo=ga.div`
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

  @media (max-width: ${ba.tablet}px) {
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

  @media (max-width: ${ba.phone}px) {
    gap: 8px;
    padding: 4px 10px 0;
  }

  @media (max-width: 420px) {
    gap: 8px;
    padding: 4px 10px 0;
  }
`,Ho=ga.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;

  @media (max-width: ${ba.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${ba.tablet}px) {
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

  @media (max-width: ${ba.phone}px) {
    margin-top: 0;
  }

  @media (max-width: 420px) {
    margin-top: 0;
  }
`,Wo=ga.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;

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
`,Bo=(ga.div`
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

  @media (max-width: 1050px) {
    padding: clamp(9px, 1.2vw, 14px);
  }

  @media (max-width: ${ba.tablet}px) {
    max-width: 760px;
    text-align: center;
    margin: 0 auto;
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
`),Vo=ga.div`
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
`,Go=ga.h1`
  margin: 0 0 18px;
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  color: ${xa.goldHover};
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
`,qo=ga.p`
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
`,Ko=ga.div`
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
`,Yo=`\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 48px;\n  padding: 0 24px;\n  border-radius: 14px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.9px;\n  font-size: clamp(0.68rem, 0.8vw, 0.82rem);\n  font-weight: 700;\n  white-space: nowrap;\n  flex: 0 0 auto;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease,\n    color 0.3s ease, border-color 0.3s ease;\n\n  @media (max-width: ${ba.tablet}px) {\n    min-height: 42px;\n    padding: 0 14px;\n    font-size: 0.74rem;\n    letter-spacing: 0.8px;\n  }\n\n  @media (max-width: ${ba.phone}px) {\n    min-height: 40px;\n    padding: 0 12px;\n    font-size: 0.7rem;\n    letter-spacing: 0.7px;\n  }\n`,Qo=ga.a`
  ${Yo}
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
`,Xo=ga.a`
  ${Yo}
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
`;const Jo=function(){return(0,za.jsxs)(Bo,{children:[(0,za.jsx)(Vo,{children:"Unikalny design, kt\xf3ry zachwyca"}),(0,za.jsxs)(Go,{children:["Luksusowe i funkcjonalne",(0,za.jsx)("br",{}),"strony WWW dla Twojej marki"]}),(0,za.jsxs)(qo,{children:["Projektujemy spersonalizowane, unikalne rozwi\u0105zania cyfrowe,",(0,za.jsx)("br",{}),"kt\xf3re buduj\u0105 autorytet i przyci\u0105gaj\u0105 klient\xf3w premium."]}),(0,za.jsxs)(Ko,{children:[(0,za.jsx)(Qo,{href:"#projekty",children:"Zobacz Projekty"}),(0,za.jsx)(Xo,{href:"#oferta",children:"Poznaj Ofert\u0119"})]})]})},Zo=ga.div`
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

  @media (max-width: ${ba.tablet}px) {
    width: min(100%, 760px);
    height: clamp(240px, 46vw, 380px);
    padding: 2px;
    margin: 0 auto;
  }

  @media (max-width: ${ba.phone}px) {
    padding: 0 2px;
  }
`,ei=ga.div`
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
`,ti=ga.img`
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
`,ni=n.p+"static/media/pexels-dimkidama-15115560.04167beb6bd16a6e9fd4.jpg",ri=n.p+"static/media/pexels-firmbee-com-22729701-6963740.a9a8b980823767df4886.jpg",ai=n.p+"static/media/pexels-magnetme-3917414-5839461.06d3415285cbf1cc0bf1.jpg",oi=n.p+"static/media/pexels-rdne-7310202.0cfb9c3eef397dd77e13.jpg",ii=[ni,ri,ai,oi,ri],li=(e,t,n)=>{let r=t-e;return r>n/2&&(r-=n),r<-n/2&&(r+=n),r};const si=function(){const[e,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{const e=setInterval(()=>{t(e=>(e+1)%ii.length)},4e3);return()=>clearInterval(e)},[]),(0,za.jsx)(Zo,{children:(0,za.jsx)(ei,{children:ii.map((t,n)=>(0,za.jsx)(ti,{src:t,alt:`Projekt ${n+1}`,$offset:li(e,n,ii.length),$active:n===e},`${t}-${n}`))})})},ci=ga.section`
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
`,ui=ga.div`
  text-align: center;
  margin-bottom: clamp(8px, 1.2vw, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,di=ga.h2`
  color: ${xa.goldHover};
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
`,pi=ga.p`
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
`,fi=ga.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
`,mi=ga.div`
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
`,hi=ga.div`
  flex: 0 0 calc(25% - 15px);
  min-width: 0;
  scroll-snap-align: start;
  display: flex;

  @media (max-width: 1050px) {
    flex: 0 0 calc(33.33% - 14px);
  }

  @media (max-width: ${ba.tablet}px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(50% - 6px);
  }

  @media (max-width: ${ba.smallPhone}px) {
    flex: 0 0 calc(100% - 0px);
  }
`,gi=ga.button`
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
`,yi=ga.div`
  margin-top: clamp(36px, 5vw, 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover div {
    width: 100px;
  }
`,vi=ga.span`
  color: ${xa.goldMain};
  text-transform: uppercase;
  letter-spacing: clamp(1.4px, 0.3vw, 4px);
  font-size: clamp(0.68rem, 0.9vw, 0.75rem);
  margin-bottom: 10px;
`,bi=ga.div`
  width: 50px;
  height: 1px;
  background: ${xa.goldMain};
  transition: width 0.4s ease;
`,xi=ga.div`
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
`,wi=ga.div`
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
`,ki=ga.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  filter: brightness(0.88) saturate(0.9);
  transition:
    filter 0.45s ease,
    transform 0.45s ease;

  ${xi}:hover & {
    filter: brightness(1) saturate(1);
    transform: scale(1.03);
  }
`,zi=ga.div`
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
`,Si=ga.h3`
  color: ${xa.goldHover};
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
`,ji=(ga.p`
  color: rgba(255, 245, 220, 0.78);
  font-size: clamp(0.68rem, 2.2vw, 0.82rem);
  text-align: center;
  line-height: 1.5;
  margin: 0 clamp(8px, 2vw, 20px);
  max-width: 240px;
`,ga.div`
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
`);const Ei=function(e){let{project:t}=e;const{type:n,url:r,title:a,description:o,image:i,icon:l}=t;return(0,za.jsxs)(xi,{as:"link"===n?"a":"div",href:"link"===n?r:void 0,target:"link"===n?"_blank":void 0,isLink:"link"===n,children:[(0,za.jsx)(wi,{children:(0,za.jsx)(ki,{src:i,alt:a})}),(0,za.jsx)(zi,{children:(0,za.jsx)(l,{})}),(0,za.jsx)(Si,{children:a}),(0,za.jsx)(ji,{})]})},Ci=[{id:1,type:"link",url:"https://google.com",title:"Boutique E-commerce",description:"W pe\u0142ni dzia\u0142aj\u0105cy sklep internetowy premium.",image:ni,icon:Ja},{id:2,type:"example",title:"Studio Architektury",image:ri,icon:function(e){return Ya({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}},{id:3,type:"example",title:"Portfolio Fotografa",image:ai,icon:function(e){return Ya({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(e)}},{id:4,type:"link",url:"https://moja-inna-strona.pl",title:"Dashboard Finansowy",image:oi,icon:function(e){return Ya({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}},{id:5,type:"example",title:"Projekt Specjalny",image:ni,icon:Ja},{id:6,type:"example",title:"Projekt Specjalny 2",image:ri,icon:Ja}];const _i=function(){const e=(0,r.useRef)(null),t=(0,r.useRef)(!1),n=n=>{const r=e.current;if(!r||t.current)return;const a=r.firstElementChild;if(!a)return;const o=parseFloat(getComputedStyle(r).gap)||16,i=a.offsetWidth+o,l=r.scrollWidth-r.clientWidth;t.current=!0,n>0&&r.scrollLeft>=l-2?r.scrollTo({left:0,behavior:"smooth"}):n<0&&r.scrollLeft<=2?r.scrollTo({left:l,behavior:"smooth"}):r.scrollBy({left:n*i,behavior:"smooth"}),setTimeout(()=>{t.current=!1},580)};return(0,za.jsxs)(ci,{children:[(0,za.jsxs)(ui,{children:[(0,za.jsx)(di,{children:"Przyk\u0142adowe Prace"}),(0,za.jsx)(pi,{children:"Ekskluzywne projekty cyfrowe tworzone z pasj\u0105"})]}),(0,za.jsxs)(fi,{children:[(0,za.jsx)(gi,{onClick:()=>n(-1),"aria-label":"Poprzedni projekt",children:(0,za.jsx)(eo,{})}),(0,za.jsx)(mi,{ref:e,children:Ci.map(e=>(0,za.jsx)(hi,{children:(0,za.jsx)(Ei,{project:e})},e.id))}),(0,za.jsx)(gi,{onClick:()=>n(1),"aria-label":"Nast\u0119pny projekt",children:(0,za.jsx)(Za,{})})]}),(0,za.jsxs)(yi,{children:[(0,za.jsx)(vi,{children:"Zobacz Pe\u0142ne Portfolio"}),(0,za.jsx)(bi,{})]})]})};const Pi=function(){return(0,za.jsxs)(za.Fragment,{children:[(0,za.jsx)(Fo,{children:(0,za.jsxs)(Uo,{children:[(0,za.jsx)(Ho,{children:(0,za.jsx)(Jo,{})}),(0,za.jsx)(Wo,{children:(0,za.jsx)(si,{})})]})}),(0,za.jsx)(_i,{})]})},Ti=ga.div`
  position: relative;
  z-index: 5;
`,$i=ga.section`
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
`,Ni=ga.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
`,Oi=ga.div`
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
`,Ri=ga.h2`
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
`,Li=ga.section`
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
`,Mi=ga.h1`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 700;
  color: ${xa.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: clamp(1px, 0.5vw, 3px);
  margin: clamp(35px, 5vw, 50px) 0 clamp(25px, 4vw, 35px);
  text-transform: uppercase;
`,Ai=ga.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: rgba(255, 255, 255, 0.82);
  line-height: clamp(1.6, 3vw, 1.9);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
  font-family: "Manrope", sans-serif;
`,Di="Wymiar Luksusowej Doskona\u0142o\u015bci",Ii="Gdzie wizja spotyka precyzj\u0119. Tworzymy cyfrowe eksperyencje, kt\xf3re wyznaczaj\u0105 standardy bran\u017cy.",Fi={title:"Twoja Kolekcja",paragraphs:[". Stworzyli\u015bmy ekosystem wzorc\xf3w, kt\xf3re wyznaczaj\u0105 standardy - sprawdzone, doskonale zaprojektowane i gotowe do Twojej marki.","Ty wybierasz fundament z naszej autorskiej kolekcji, my dostosowujemy go do Twojej to\u017csamo\u015bci. Rezultat? Estetyka bez kompromis\xf3w i natychmiastowy autorytet w Twojej bran\u017cy.","Ka\u017cdy szablon to efekt setki godzin testowania, niezliczonych iteracji i wiedzy zdobytej pracuj\u0105c z luksusowymi markami na ca\u0142ym \u015bwiecie."],signature:"Autorska Kolekcja \xb7 Sprawdzone Struktury \xb7 Estetyka Bez Kompromis\xf3w"},Ui=[{id:1,label:"Selekcja",value:"1",description:"Autorskie szablony zaprojektowane pod luksusowe marki."},{id:2,label:"Szybko\u015b\u0107",value:"2",description:"Twoja obecno\u015b\u0107 online w 2-4 dni robocze."},{id:3,label:"Sp\xf3jno\u015b\u0107",value:"3",description:"Gwarancja doskona\u0142ego wygl\u0105du na ka\u017cdym urz\u0105dzeniu."}],Hi=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych. "},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."}],Wi={title:"Gdzie nas znajdziesz?",description:"Nasze projekty dost\u0119pne na najpopularniejszych platformach. Allegro oferuje nas za nieco wy\u017csz\u0105 cen\u0119 ze wzgl\u0119du na ich prowizj\u0119. ",platforms:[{id:1,name:"Facebook",description:"Obserwuj nas na Facebooku, aby by\u0107 zawsze na bie\u017c\u0105co."},{id:2,name:"YouTube",description:"Odkrywaj nasze projekty i inspiracje na YouTube."},{id:3,name:"Allegro",description:"Kupuj nasze szablony w sklepie Allegro (ceny wy\u017csze ze wzgl\u0119du na prowizj\u0119)."}]},Bi=()=>(0,za.jsxs)(Li,{children:[(0,za.jsx)(Mi,{children:Di}),(0,za.jsx)(Ai,{children:Ii})]}),Vi=ga.div`
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
`,Gi=ga.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: clamp(1.7, 4vw, 2.1);
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
  position: relative;
`,qi=ga.div`
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
`,Ki=()=>(0,za.jsxs)(Vi,{children:[Fi.paragraphs.map((e,t)=>(0,za.jsx)(Gi,{children:e},t)),(0,za.jsx)(qi,{children:Fi.signature})]}),Yi=ga.div`
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
`,Qi=ga.div`
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
`,Xi=ga.h4`
  color: ${xa.goldMain};
  margin-bottom: clamp(12px, 2vw, 15px);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  margin-top: 0;
`,Ji=ga.p`
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.85);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
`,Zi=ga.div`
  width: 100%;
`,el=ga.button`
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
`,tl=()=>{const e=fe();return(0,za.jsxs)(Zi,{children:[(0,za.jsx)(Yi,{children:Hi.map(e=>(0,za.jsxs)(Qi,{children:[(0,za.jsx)(Xi,{children:e.question}),(0,za.jsx)(Ji,{children:e.answer})]},e.id))}),(0,za.jsx)(el,{onClick:()=>e("/questions"),children:"Zobacz Wi\u0119cej Pyta\u0144"})]})},nl=ga.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(30px, 5vw, 50px);
  margin-top: clamp(60px, 8vw, 80px);
  width: 100%;

  @media (max-width: ${ba.tablet}px) {
    grid-template-columns: 1fr;
  }
`,rl=ga.div`
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
`,al=ga.span`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: bold;
  color: ${xa.goldMain};
  opacity: 0.95;
  font-family: "Cormorant Garamond", serif;
  line-height: 1;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,ol=ga.span`
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  text-transform: uppercase;
  letter-spacing: clamp(1.5px, 0.5vw, 2.5px);
  color: ${xa.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  opacity: 0.9;
`,il=ga.p`
  font-size: clamp(0.85rem, 1.8vw, 0.98rem);
  line-height: clamp(1.6, 3vw, 1.8);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
`,ll=()=>(0,za.jsx)(nl,{children:Ui.map(e=>(0,za.jsxs)(rl,{children:[(0,za.jsx)(al,{children:e.value}),(0,za.jsx)(ol,{children:e.label}),(0,za.jsx)(il,{children:e.description})]},e.id))}),sl=ga.section`
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
`,cl=ga.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: clamp(30px, 4vw, 50px);
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
`,ul=(ga.button`
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
`,()=>(0,za.jsx)(sl,{children:(0,za.jsx)(cl,{children:"Got\xf3w na transformacj\u0119 cyfrow\u0105?"})})),dl=ga.section`
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
`,pl=ga.h2`
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
`,fl=ga.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: clamp(40px, 6vw, 60px);
  max-width: 600px;
  line-height: clamp(1.6, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
`,ml=ga.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(25px, 4vw, 40px);
  width: 100%;
  margin-top: clamp(20px, 3vw, 30px);

  @media (max-width: ${ba.tablet}px) {
    grid-template-columns: 1fr;
  }
`,hl=ga.a`
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
`,gl=ga.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${xa.goldMain};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;

  ${hl}:hover & {
    transform: scale(1.15) rotate(5deg);
  }
`,yl=ga.h3`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  color: ${xa.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
`,vl=ga.p`
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  line-height: clamp(1.5, 2.5vw, 1.7);
  font-weight: 400;
`,bl=()=>(0,za.jsxs)(dl,{children:[(0,za.jsx)(pl,{children:Wi.title}),(0,za.jsx)(fl,{children:Wi.description}),(0,za.jsx)(ml,{children:Wi.platforms.map(e=>{const t=no.find(t=>t.label===e.name);return(0,za.jsxs)(hl,{href:null===t||void 0===t?void 0:t.url,target:"_blank",rel:"noopener noreferrer",children:[(0,za.jsx)(gl,{children:t&&(0,za.jsx)(t.icon,{})}),(0,za.jsx)(yl,{children:e.name}),(0,za.jsx)(vl,{children:e.description})]},e.id)})})]}),xl=()=>(0,za.jsxs)(Ti,{children:[(0,za.jsx)(Bi,{}),(0,za.jsx)(Oi,{}),(0,za.jsxs)($i,{children:[(0,za.jsx)(Ri,{children:"Twoja Kolekcja"}),(0,za.jsx)(Ni,{children:(0,za.jsx)(Ki,{})})]}),(0,za.jsx)(Oi,{}),(0,za.jsxs)($i,{children:[(0,za.jsx)(Ri,{children:"Nasze Atuty"}),(0,za.jsx)(Ni,{style:{maxWidth:"1000px"},children:(0,za.jsx)(ll,{})})]}),(0,za.jsx)(Oi,{}),(0,za.jsxs)($i,{children:[(0,za.jsx)(Ri,{children:"Jak To Dzia\u0142a?"}),(0,za.jsx)(Ni,{children:(0,za.jsx)(tl,{})})]}),(0,za.jsx)(Oi,{}),(0,za.jsx)(bl,{}),(0,za.jsx)(Oi,{}),(0,za.jsx)(ul,{})]}),wl=ga.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,kl=ga.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`,zl=ga.div`
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
`,Sl=ga.h1`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-family: "Cormorant Garamond", serif;
  color: ${xa.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(0.5px, 0.5vw, 1px);
`,jl=ga.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.6;
`,El=ga.div`
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
`,Cl=ga.div`
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
`,_l=ga.h3`
  color: ${xa.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  line-height: 1.4;
`,Pl=ga.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
  transition: color 0.3s ease;

  ${Cl}:hover & {
    color: rgba(255, 255, 255, 0.95);
  }
`,Tl=ga.div`
  margin-top: clamp(60px, 10vw, 100px);
  text-align: center;
  padding-top: clamp(40px, 6vw, 60px);
  border-top: 1px solid rgba(212, 175, 55, 0.2);
`,$l=ga.button`
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
`,Nl=ga.button`
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
`,Ol=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych."},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."},{id:4,question:"Czy za realizacj\u0119 projektu otrzymam faktur\u0119?",answer:"Tak. Za ka\u017cd\u0105 us\u0142ug\u0119 wystawiamy faktur\u0119 (bez VAT), kt\xf3r\u0105 otrzymasz na e-mail. Mo\u017cesz j\u0105 w ca\u0142o\u015bci wliczy\u0107 w koszty uzyskania przychodu \u2013 to najprostsze i najbezpieczniejsze rozwi\u0105zanie dla Twojego biznesu. Nie musisz martwi\u0107 si\u0119 o \u017cadne dodatkowe formalno\u015bci, a my zapewniamy Ci pe\u0142n\u0105 transparentno\u015b\u0107 i profesjonalizm w rozliczeniach."},{id:5,question:"Czemu na Allegro ceny us\u0142ug s\u0105 wy\u017csze?",answer:"Wy\u017csza cena na platformie Allegro wynika wy\u0142\u0105cznie z wysokich prowizji i op\u0142at transakcyjnych pobieranych przez operatora. Kontaktuj\u0105c si\u0119 z nami bezpo\u015brednio, omijasz te dodatkowe koszty i otrzymujesz najlepsz\u0105 mo\u017cliw\u0105 ofert\u0119 przy zachowaniu tej samej jako\u015bci i gwarancji. "},{id:6,question:"Co je\u015bli nie mam w\u0142asnych profesjonalnych zdj\u0119\u0107 lub tekst\xf3w?",answer:"Bez obaw, zajmiemy si\u0119 tym. Je\u015bli brakuje Ci fotografii, wygenerujemy dla Twojej marki unikalne grafiki AI, kt\xf3re idealnie oddadz\u0105 klimat Twojego biznesu. Pomo\u017cemy Ci te\u017c ubra\u0107 Twoje pomys\u0142y w profesjonalne s\u0142owa, aby strona od pocz\u0105tku budowa\u0142a Twoje zaufanie. "},{id:7,question:"Czy to autorskie projekty, czy gotowce z sieci?",answer:"Ka\u017cdy element naszej kolekcji stworzyli\u015bmy sami \u2013 od pierwszej linii kodu po ostatni detal wizualny. Nie u\u017cywamy WordPressa ani ci\u0119\u017ckich, powolnych kreator\xf3w stron. Wybieraj\u0105c nas, otrzymujesz unikalny produkt w technologii React.js, a nie masowy szablon, kt\xf3ry posiada co druga firma w Twojej bran\u017cy."},{id:8,question:"Czy b\u0119d\u0119 mie\u0107 pe\u0142n\u0105 kontrol\u0119 i dost\u0119p do strony?",answer:"Jak najbardziej. Przekazujemy Ci komplet hase\u0142 i dost\u0119p\xf3w do Twoich w\u0142asnych kont. Nasz kod jest czysty i uporz\u0105dkowany \u2013 je\u015bli kiedykolwiek zdecydujesz si\u0119 przekaza\u0107 stron\u0119 innemu informatykowi, odnajdzie si\u0119 on w strukturze bez problemu. Jeste\u015b w 100% niezale\u017cna."},{id:9,question:"Jak strona radzi sobie w wyszukiwarce Google (SEO)?",answer:'Wi\u0119kszo\u015b\u0107 stron to ci\u0119\u017ckie projekty na WordPressie, kt\xf3re przez nadmiar zb\u0119dnych wtyczek l\u0105duj\u0105 na ko\u0144cu wynik\xf3w. Nasze strony budujemy "na lekko", co sprawia, \u017ce s\u0105 b\u0142yskawiczne i faworyzowane przez Google. To fundament, kt\xf3ry pozwala realnie powalczy\u0107 o najwy\u017csze pozycje.'},{id:10,question:"Czy strona b\u0119dzie bezpieczna (certyfikat SSL)?",answer:'Tak. Obok adresu Twojej strony zawsze b\u0119dzie widoczna "zielona k\u0142\xf3dka". Certyfikat SSL masz w cenie, co gwarantuje szyfrowanie danych i brak ostrze\u017ce\u0144 w przegl\u0105darkach. Twoja witryna b\u0119dzie w pe\u0142ni bezpieczna dla odwiedzaj\u0105cych.'},{id:11,question:"Jak nawi\u0105za\u0107 z nami wsp\xf3\u0142prac\u0119?",answer:"Masz dwie proste drogi. Mo\u017cesz dokona\u0107 zakupu bezpo\u015brednio przez nasz profil na Allegro lub napisa\u0107 do nas wiadomo\u015b\u0107 e-mail. W odpowiedzi otrzymasz od nas kr\xf3tk\u0105 instrukcj\u0119 i ankiet\u0119, kt\xf3ra pomo\u017ce nam doprecyzowa\u0107 wygl\u0105d Twojej nowej strony. Wi\u0119cej szczeg\xf3\u0142\xf3w na temat ca\u0142ego procesu znajdziesz na naszej podstronie",cooperationLink:!0},{id:12,question:"Co je\u015bli nie mam gotowych tre\u015bci i nie wiem, co napisa\u0107?",answer:"To najcz\u0119stsza obawa, dlatego maksymalnie upro\u015bcili\u015bmy ten proces. Nie musisz by\u0107 pisarzem ani fotografem. Po zakupie otrzymasz od nas prost\u0105, interaktywn\u0105 ankiet\u0119, kt\xf3ra 'wyci\u0105gnie' od Ciebie najwa\u017cniejsze informacje o Twoim biznesie. Na ich podstawie przygotujemy profesjonalne teksty, a je\u015bli brakuje Ci zdj\u0119\u0107 \u2013 wygenerujemy dla Twojej marki unikalne grafiki AI. Nasza strona jest elastyczna: je\u015bli nie masz jeszcze cennika czy zespo\u0142u, po prostu ukryjemy te sekcje, a ca\u0142o\u015b\u0107 nadal b\u0119dzie wygl\u0105da\u0107 luksusowo i sp\xf3jnie. Wi\u0119cej informacji znajdziesz w sekcji",cooperationLink:!0}],Rl=()=>{const e=fe();return(0,za.jsx)(wl,{children:(0,za.jsxs)(kl,{children:[(0,za.jsxs)(zl,{children:[(0,za.jsx)(Sl,{children:"Najcz\u0119stsze Pytania"}),(0,za.jsx)(jl,{children:"Znaleziono odpowiedzi na Twoje w\u0105tpliwo\u015bci. Poni\u017cej znajduje si\u0119 kompletny przewodnik po najcz\u0119\u015bciej zadawanych pytaniach dotycz\u0105cych naszych us\u0142ug."})]}),(0,za.jsx)(El,{children:Ol.map((t,n)=>(0,za.jsxs)(Cl,{style:{"--index":n},children:[(0,za.jsx)(_l,{children:t.question}),(0,za.jsxs)(Pl,{children:[t.answer,t.cooperationLink&&(0,za.jsxs)(za.Fragment,{children:[" ",(0,za.jsx)(Nl,{onClick:()=>e("/cooperation"),children:"Wsp\xf3\u0142praca"}),"."]})]})]},t.id))}),(0,za.jsx)(Tl,{children:(0,za.jsx)($l,{onClick:()=>e("/"),children:"Powr\xf3t do strony g\u0142\xf3wnej"})})]})})},Ll=ga.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,Ml=ga.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,Al=ga.div`
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
`,Dl=ga.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${xa.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,Il=ga.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
`,Fl=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(60px, 10vw, 100px);
  margin-bottom: clamp(80px, 12vw, 120px);
`,Ul=ga.div`
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
`,Hl=ga.div`
  display: flex;
  align-items: center;
  gap: clamp(20px, 3vw, 30px);
`,Wl=ga.div`
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
`,Bl=ga.div`
  padding: clamp(20px, 3vw, 30px);
  background: rgba(212, 175, 55, 0.05);
  border-radius: 10px;
  border-left: 3px solid ${xa.goldMain};
  padding-left: clamp(25px, 4vw, 40px);
`,Vl=ga.h2`
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  color: ${xa.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
  flex: 1;
`,Gl=ga.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  margin: 0 0 clamp(15px, 2vw, 20px) 0;
`,ql=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`,Kl=ga.div`
  padding: clamp(15px, 2.5vw, 20px);
  background: rgba(212, 175, 55, 0.08);
  border-radius: 8px;
  border-left: 3px solid ${xa.goldMain};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    transform: translateX(5px);
  }
`,Yl=ga.h4`
  color: ${xa.goldMain};
  margin: 0 0 8px 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
`,Ql=ga.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 0.95rem);
  line-height: 1.6;
`,Xl=ga.div`
  margin-top: clamp(20px, 3vw, 30px);
  padding: clamp(15px, 2.5vw, 25px);
  background: rgba(212, 175, 55, 0.05);
  border-radius: 8px;
  border-top: 2px solid ${xa.goldMain};
`,Jl=ga.h5`
  color: ${xa.goldMain};
  margin: 0 0 8px 0;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`,Zl=ga.p`
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  line-height: 1.6;
`,es=ga.ul`
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
`,ts=ga.section`
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
`,ns=ga.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${xa.goldMain};
  margin: 0 0 10px 0;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`,rs=ga.p`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`,as=ga.p`
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin: 0 0 clamp(40px, 6vw, 60px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,os=ga.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(30px, 4vw, 50px);
`,is=ga.div`
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
`,ls=ga.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${xa.goldMain};
  margin-bottom: clamp(15px, 2vw, 25px);
`,ss=ga.h3`
  color: ${xa.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,cs=ga.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  line-height: 1.7;
`,us=ga.div`
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
`,ds=ga.button`
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
`,ps=ga(ds)`
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
`,fs=(ga(ds)`
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
`,ga.section`
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
`),ms=ga.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${xa.goldMain};
  margin: 0 0 10px 0;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`,hs=ga.p`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`,gs=ga.p`
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin: 0 0 clamp(40px, 6vw, 60px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`,ys=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 6vw, 60px);
`,vs=ga.div`
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
`,bs=ga.div`
  display: flex;
  align-items: center;
  gap: clamp(15px, 2vw, 25px);
  margin-bottom: clamp(20px, 3vw, 30px);
`,xs=ga.span`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
`,ws=ga.h3`
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  color: ${xa.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,ks=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`,zs=ga.div`
  padding: clamp(15px, 2vw, 20px);
  background: rgba(212, 175, 55, 0.04);
  border-radius: 8px;
  border-left: 3px solid rgba(212, 175, 55, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.08);
    border-left-color: ${xa.goldMain};
    transform: translateX(5px);
  }
`,Ss=ga.h4`
  color: ${xa.goldMain};
  margin: 0 0 clamp(10px, 1.5vw, 15px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
`,js=ga.ul`
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
`,Es={hero:{title:"Wsp\xf3\u0142praca",subtitle:"Prosty proces, pe\u0142na transparentno\u015b\u0107, gwarancja spokojnego snu. Oto, jak budujemy Twoj\u0105 cyfrow\u0105 przysz\u0142o\u015b\u0107."},steps:[{id:1,number:"1",title:"Wyb\xf3r Drogi i Start",content:"Wsp\xf3\u0142prac\u0119 zaczynamy od formalno\u015bci, aby\u015b mog\u0142a spa\u0107 spokojnie. Masz dwie \u015bcie\u017cki:",options:[{label:"Bezpo\u015brednio:",description:"Piszesz do nas e-mail, ustalamy szczeg\xf3\u0142y, przesy\u0142amy dane do faktury (bez VAT) i po op\u0142aceniu ruszamy z kopyta."},{label:"Allegro:",description:"Kupujesz na aukcji, korzystasz z bezpiecznych p\u0142atno\u015bci platformy i automatycznie trafiasz do kolejki realizacji."}],note:"Wa\u017cne: Przyst\u0119pujemy do pracy natychmiast po zaksi\u0119gowaniu wp\u0142aty lub otrzymaniu potwierdzenia z Allegro."},{id:2,number:"2",title:"Strategia i Materia\u0142y",content:"Nie musisz by\u0107 techniczna. Przesy\u0142amy Ci interaktywn\u0105 ankiet\u0119, kt\xf3ra poprowadzi Ci\u0119 za r\u0119k\u0119.",sections:[{label:"Twoje Zadanie:",description:"Wybierasz sekcje, kt\xf3re maj\u0105 si\u0119 pojawi\u0107 (np. O nas, Portfolio, Cennik)."},{label:"Nasze Wsparcie:",description:"Je\u015bli nie masz tekst\xf3w \u2013 przygotujemy je. Je\u015bli brak Ci zdj\u0119\u0107 \u2013 wygenerujemy unikalne grafiki AI."},{label:"Domena:",description:"Podajesz 2-3 propozycje nazwy (np. twojanazwa.pl). My sprawdzamy dost\u0119pno\u015b\u0107 i rejestrujemy t\u0119 woln\u0105."}]},{id:3,number:"3",title:"Realizacja: 48h Roboczych",content:"Tutaj dzieje si\u0119 magia. Kodujemy Twoj\u0105 stron\u0119 w czystym React.js.",details:[{label:"Czas:",description:"Standardowy czas realizacji to 48 godzin roboczych."},{label:"Zasada Wypocz\u0119tego Eksperta:",description:"Liczymy tylko dni robocze (poniedzia\u0142ek \u2013 pi\u0105tek). Weekendy i \u015bwi\u0119ta to czas na regeneracj\u0119, bo tylko wypocz\u0119ty programista gwarantuje kod bez b\u0142\u0119d\xf3w i design na najwy\u017cszym poziomie."},{label:"Technologia:",description:"Konfigurujemy darmowy serwer (GitHub Pages) i spinamy wszystko z Twoj\u0105 now\u0105 domen\u0105."}]},{id:4,number:"4",title:'Przekazanie "Kluczy do Biznesu"',content:"Twoja strona o\u017cywa. Ale na tym nie ko\u0144czymy:",deliverables:["Otrzymujesz od nas komplet hase\u0142 i dost\u0119p\xf3w do konta serwera i domeny.","Dostajesz prost\u0105 instrukcj\u0119, co zrobi\u0107 za rok, \u017ceby przed\u0142u\u017cy\u0107 domen\u0119 (koszt ok. 80 z\u0142 \u2013 bez naszych mar\u017c).","Strona jest Twoj\u0105 w\u0142asno\u015bci\u0105 na zawsze. Mo\u017cesz j\u0105 rozwija\u0107, przenosi\u0107 i modyfikowa\u0107 bez \u017cadnych ogranicze\u0144."]}],guarantee:{title:'Pakiet "Spokojna G\u0142owa"',subtitle:"Twoja Gwarancja",description:"Wiemy, \u017ce biznes si\u0119 zmienia. Numer telefonu mo\u017ce ulec zmianie, cennik mo\u017ce podskoczy\u0107. Dlatego nasza wsp\xf3\u0142praca nie ko\u0144czy si\u0119 na oddaniu strony:",benefits:[{icon:"3x",title:"3 Lata Opieki",description:"Masz u nas 3 darmowe pakiety poprawek do wykorzystania przez 36 miesi\u0119cy."},{icon:"\u26a1",title:"B\u0142yskawiczny Serwis",description:"Potrzebujesz zmiany? Piszesz e-mail, a my wprowadzamy poprawk\u0119 w kodzie."},{icon:"\ud83d\udcb0",title:"Uczciwe Stawki",description:"Po wykorzystaniu darmowych pakiet\xf3w, drobne zmiany to koszt rz\u0119du 10-50 z\u0142. Bez abonament\xf3w, bez naci\u0105gania."}]},materials:{title:"Jak Przygotowa\u0107 Materia\u0142y?",subtitle:"Twoja Checklista",intro:"Nie musisz by\u0107 copywriterem ani fotografem. Nasza strona jest elastyczna \u2013 dopasuje si\u0119 do tego, co masz. Je\u015bli brakuje Ci jakiej\u015b sekcji (np. cennika czy zespo\u0142u), po prostu j\u0105 ukryjemy, a layout nadal b\u0119dzie wygl\u0105da\u0142 perfekcyjnie.",sections:[{icon:"\ud83d\udccb",title:"Co Warto Przygotowa\u0107?",items:[{label:"Fundament (Hero & Domena)",points:["Wymy\u015bl chwytliwe has\u0142o (np. 'Twoje wspomnienia w najlepszym \u015bwietle').","Podaj 2-3 propozycje adresu strony (np. mojafirma.pl). Pami\u0119taj: kr\xf3tko i \u0142atwo do podyktowania. Unikaj nazw zastrze\u017conych marek!"]},{label:"To\u017csamo\u015b\u0107 (O nas & Zesp\xf3\u0142)",points:["Napisz kilka zda\u0144 o swojej pasji i tym, co Ci\u0119 wyr\xf3\u017cnia.","Poka\u017c 'ludzk\u0105 twarz' biznesu \u2013 prze\u015blij zdj\u0119cie przy pracy. Klienci kupuj\u0105 oczami, ale ufaj\u0105 ludziom, kt\xf3rych widz\u0105."]},{label:"Twoje Sukcesy (Statystyki & Portfolio)",points:["Pochwal si\u0119 liczbami (lata pracy, zadowoleni klienci) lub kluczowymi zaletami.","Wybierz do 12 najlepszych zdj\u0119\u0107 do galerii. Dzielimy je na kategorie (np. Biznes, Sesje, Projekty)."]},{label:"Konkrety (Us\u0142ugi & Cennik)",points:["Opisz kr\xf3tko do 10 us\u0142ug.","Podaj ceny lub pakiety. Je\u015bli wyceniasz indywidualnie \u2013 napiszemy o tym!"]},{label:"Kontakt & Social Media",points:["Przygotuj e-mail, telefon i linki do profili (Instagram, Facebook, TikTok itd.).","Sprawimy, \u017ce klient skontaktuje si\u0119 z Tob\u0105 jednym klikni\u0119ciem."]}]},{icon:"\ud83d\udc8e",title:"Nasze Wsparcie Kreatywne",highlight:!0,items:[{label:"Teksty",points:["Na podstawie kr\xf3tkiej ankiety ubierzemy Twoje my\u015bli w profesjonalne s\u0142owa."]},{label:"Grafiki AI",points:["Je\u015bli nie masz w\u0142asnych fotografii do t\u0142a lub sekcji 'O nas', wygenerujemy dla Ciebie unikalne, wysokiej jako\u015bci grafiki AI."]}]},{icon:"\u26a0\ufe0f",title:"Wa\u017cne Informacje Techniczne",items:[{label:"Szybko\u015b\u0107 Ponad Wszystko",points:["Limity zdj\u0119\u0107 (np. do 12 w galerii) stosujemy celowo. Dzi\u0119ki temu Twoja strona \u0142aduje si\u0119 b\u0142yskawicznie na ka\u017cdym smartfonie. W sieci: mniej znaczy wi\u0119cej!"]},{label:"Elastyczno\u015b\u0107",points:["Niezale\u017cnie od tego, czy wybierzesz 5, czy 10 sekcji, my zadbamy o zachowanie idealnych proporcji i estetyki."]},{label:"48h Roboczych",points:["Nasz zegar rusza, gdy otrzymamy od Ciebie komplet materia\u0142\xf3w. Pracujemy w dni robocze, aby dostarczy\u0107 Ci kod najwy\u017cszej jako\u015bci."]}]}]},cta:{primary:"Zacznij Wsp\xf3\u0142prac\u0119",secondary:"Wr\xf3\u0107 do Pyta\u0144"}},Cs=()=>{const e=fe();return(0,za.jsx)(Ll,{children:(0,za.jsxs)(Ml,{children:[(0,za.jsxs)(Al,{children:[(0,za.jsx)(Dl,{children:Es.hero.title}),(0,za.jsx)(Il,{children:Es.hero.subtitle})]}),(0,za.jsx)(Fl,{children:Es.steps.map((e,t)=>(0,za.jsxs)(Ul,{delay:.1*t,children:[(0,za.jsxs)(Hl,{children:[(0,za.jsx)(Wl,{children:e.number}),(0,za.jsx)(Vl,{children:e.title})]}),(0,za.jsxs)(Bl,{children:[(0,za.jsx)(Gl,{children:e.content}),e.options&&(0,za.jsxs)(za.Fragment,{children:[(0,za.jsx)(ql,{children:e.options.map((e,t)=>(0,za.jsxs)(Kl,{children:[(0,za.jsx)(Yl,{children:e.label}),(0,za.jsx)(Ql,{children:e.description})]},t))}),e.note&&(0,za.jsxs)(Xl,{children:[(0,za.jsx)(Jl,{children:"Wa\u017cne"}),(0,za.jsx)(Zl,{children:e.note})]})]}),e.sections&&(0,za.jsx)(ql,{children:e.sections.map((e,t)=>(0,za.jsxs)(Kl,{children:[(0,za.jsx)(Yl,{children:e.label}),(0,za.jsx)(Ql,{children:e.description})]},t))}),e.details&&(0,za.jsx)(ql,{children:e.details.map((e,t)=>(0,za.jsxs)(Kl,{children:[(0,za.jsx)(Yl,{children:e.label}),(0,za.jsx)(Ql,{children:e.description})]},t))}),e.deliverables&&(0,za.jsx)(es,{children:e.deliverables.map((e,t)=>(0,za.jsx)("li",{children:e},t))})]})]},e.id))}),(0,za.jsxs)(fs,{children:[(0,za.jsx)(ms,{children:Es.materials.title}),(0,za.jsx)(hs,{children:Es.materials.subtitle}),(0,za.jsx)(gs,{children:Es.materials.intro}),(0,za.jsx)(ys,{children:Es.materials.sections.map((e,t)=>(0,za.jsxs)(vs,{highlight:e.highlight,children:[(0,za.jsxs)(bs,{children:[(0,za.jsx)(xs,{children:e.icon}),(0,za.jsx)(ws,{children:e.title})]}),(0,za.jsx)(ks,{children:e.items.map((e,t)=>(0,za.jsxs)(zs,{children:[(0,za.jsx)(Ss,{children:e.label}),(0,za.jsx)(js,{children:e.points.map((e,t)=>(0,za.jsx)("li",{children:e},t))})]},t))})]},t))})]}),(0,za.jsxs)(ts,{children:[(0,za.jsx)(ns,{children:Es.guarantee.title}),(0,za.jsx)(rs,{children:Es.guarantee.subtitle}),(0,za.jsx)(as,{children:Es.guarantee.description}),(0,za.jsx)(os,{children:Es.guarantee.benefits.map((e,t)=>(0,za.jsxs)(is,{children:[(0,za.jsx)(ls,{children:e.icon}),(0,za.jsx)(ss,{children:e.title}),(0,za.jsx)(cs,{children:e.description})]},t))})]}),(0,za.jsx)(us,{children:(0,za.jsx)(ps,{onClick:()=>e("/"),children:Es.cta.primary})})]})})},_s=ga.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,Ps=ga.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,Ts=ga.div`
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
`,$s=ga.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${xa.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,Ns=ga.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
`,Os=(ga.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
  max-width: 1200px;
  margin: 0 auto;
`,ga.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(30px, 4vw, 50px);
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
`),Rs=ga.a`
  text-decoration: none;
  color: inherit;
  display: block;
`,Ls=ga.div`
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
`,Ms=ga.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${Ls}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`,As=ga.div`
  padding: clamp(25px, 4vw, 35px);
  display: flex;
  flex-direction: column;
  flex: 1;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
`,Ds=ga.h3`
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  color: ${xa.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`,Is=ga.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  line-height: 1.7;
  margin: 0 0 auto 0;
  flex: 1;
  font-weight: 300;
`,Fs=ga.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: clamp(20px, 3vw, 30px);
  padding-top: clamp(20px, 3vw, 30px);
  border-top: 1px solid rgba(212, 175, 55, 0.25);
  gap: clamp(15px, 2vw, 25px);

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`,Us=ga.span`
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  color: ${xa.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
`,Hs=ga.button`
  padding: clamp(10px, 2vw, 14px) clamp(25px, 4vw, 40px);
  background: linear-gradient(
    135deg,
    ${xa.goldMain} 0%,
    #f1d592 100%
  );
  color: ${xa.deepBlack};
  border: none;
  border-radius: 30px;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
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
`,Ws=[{id:1,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:2,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:3,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:4,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:5,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:6,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]}],Bs=()=>(0,za.jsx)(Os,{children:Ws.map(e=>(0,za.jsx)(Rs,{href:`/klara-queen/offer/${e.id}`,target:"_blank",rel:"noopener noreferrer",children:(0,za.jsxs)(Ls,{children:[(0,za.jsx)(Ms,{src:e.image,alt:e.title}),(0,za.jsxs)(As,{children:[(0,za.jsx)(Ds,{children:e.title}),(0,za.jsx)(Is,{children:e.shortDescription}),(0,za.jsxs)(Fs,{children:[(0,za.jsx)(Us,{children:e.price}),(0,za.jsx)(Hs,{children:"Szczeg\xf3\u0142y"})]})]})]})},e.id))}),Vs=ga.div`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(60px, 10vw, 100px) clamp(20px, 5vw, 60px);
  max-width: 1400px;
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
`,Gs=ga.button`
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
  margin-bottom: clamp(50px, 8vw, 80px);
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
`,qs=ga.section`
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
`,Ks=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`,Ys=ga.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  color: ${xa.goldMain};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: clamp(1.5px, 0.5vw, 2.5px);
  line-height: 1.1;
  text-transform: uppercase;
  font-style: italic;
`,Qs=ga.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.6;
  font-weight: 300;
`,Xs=ga.div`
  display: inline-block;
  background: linear-gradient(
    135deg,
    ${xa.goldMain} 0%,
    #f1d592 100%
  );
  color: ${xa.deepBlack};
  padding: clamp(12px, 2vw, 20px) clamp(25px, 4vw, 40px);
  border-radius: 50px;
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
  width: fit-content;
`,Js=ga.img`
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
`,Zs=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(60px, 10vw, 100px);
`,ec=ga.section`
  animation: fadeInUp 0.6s ease-out 0.2s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(40px, 6vw, 60px);
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
`,tc=ga.h2`
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  color: ${xa.goldMain};
  margin: 0 0 clamp(30px, 5vw, 50px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-style: italic;
`,nc=ga.p`
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.9;
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.3px;
`,rc=ga.section`
  animation: fadeInUp 0.6s ease-out 0.3s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(40px, 6vw, 60px);
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.1);
`,ac=ga.div`
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(212, 175, 55, 0.2);
  background: rgba(0, 0, 0, 0.3);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(212, 175, 55, 0.1);

  iframe {
    display: block;
    border-radius: 18px;
  }

  @media (max-width: 821px) {
    iframe {
      height: 300px !important;
    }
  }
`,oc=ga.section`
  animation: fadeInUp 0.6s ease-out 0.4s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(40px, 6vw, 60px);
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.1);
`,ic=ga.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(20px, 3vw, 30px);
`,lc=ga.li`
  display: flex;
  align-items: flex-start;
  gap: clamp(15px, 3vw, 20px);
  padding: clamp(25px, 4vw, 35px);
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
`,sc=ga.span`
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
`,cc=ga.section`
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.15) 0%,
    rgba(46, 8, 16, 0.6) 100%
  );
  border: 2px solid rgba(212, 175, 55, 0.25);
  border-radius: 25px;
  padding: clamp(50px, 10vw, 80px);
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
`,uc=ga.h3`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${xa.goldMain};
  margin: 0 0 clamp(35px, 6vw, 50px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
  line-height: 1.3;
`,dc=ga.div`
  display: flex;
  gap: clamp(15px, 3vw, 30px);
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,pc=ga.a`
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
`,fc=ga(pc)`
  background: transparent;
  color: ${xa.goldMain};
  border: 2px solid ${xa.goldMain};
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.15);

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.3);
  }
`,mc=ga.div`
  text-align: center;
  padding: clamp(40px, 8vw, 80px);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${xa.goldMain};
`,hc=e=>{let{offerId:t}=e;const n=fe(),r=Ws.find(e=>e.id===t);return r?(0,za.jsxs)(Vs,{children:[(0,za.jsx)(Gs,{onClick:()=>n(-1),children:"\u2190 Wr\xf3\u0107 do ofert"}),(0,za.jsxs)(qs,{children:[(0,za.jsxs)(Ks,{children:[(0,za.jsx)(Ys,{children:r.title}),(0,za.jsx)(Qs,{children:r.shortDescription}),(0,za.jsx)(Xs,{children:r.price})]}),(0,za.jsx)(Js,{src:r.image,alt:r.title})]}),(0,za.jsxs)(Zs,{children:[(0,za.jsxs)(ec,{children:[(0,za.jsx)(tc,{children:"O szablonie"}),(0,za.jsx)(nc,{children:r.fullDescription})]}),(0,za.jsxs)(rc,{children:[(0,za.jsx)(tc,{children:"Preview szablonu"}),(0,za.jsx)(ac,{children:(0,za.jsx)("iframe",{width:"100%",height:"500",src:r.youtubeUrl,title:r.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]}),(0,za.jsxs)(oc,{children:[(0,za.jsx)(tc,{children:"Co si\u0119 zawiera:"}),(0,za.jsx)(ic,{children:r.features.map((e,t)=>(0,za.jsxs)(lc,{children:[(0,za.jsx)(sc,{children:"\u2713"}),(0,za.jsx)("span",{children:e})]},t))})]}),(0,za.jsxs)(cc,{children:[(0,za.jsx)(uc,{children:"Interesuje Ci\u0119 ten szablon?"}),(0,za.jsxs)(dc,{children:[(0,za.jsx)(pc,{href:"mailto:kontakt@studioklara.pl?subject=Zainteresowanie szablonk\u0105",children:"Zapytaj o szczeg\xf3\u0142y"}),(0,za.jsx)(fc,{onClick:()=>n("/offer"),children:"Powr\xf3t do listy"})]})]})]})]}):(0,za.jsx)(Vs,{children:(0,za.jsx)(mc,{children:"Szablon nie znaleziony"})})},gc=()=>{const{id:e}=me();return e?(0,za.jsx)(hc,{offerId:parseInt(e)}):(0,za.jsx)(_s,{children:(0,za.jsxs)(Ps,{children:[(0,za.jsxs)(Ts,{children:[(0,za.jsx)($s,{children:"Nasze Projekty"}),(0,za.jsx)(Ns,{children:"Odkryj gotowe szablony stron dostosowane do r\xf3\u017cnych bran\u017c. Ka\u017cdy projekt zawiera wszystko, co potrzebujesz, aby wygl\u0105da\u0107 profesjonalnie w sieci."})]}),(0,za.jsx)(Bs,{})]})})};const yc=function(){return(0,za.jsxs)(Do,{children:[(0,za.jsx)(Ao,{}),(0,za.jsx)(Sa,{}),(0,za.jsx)(so,{}),(0,za.jsx)(Mo,{}),(0,za.jsx)(Io,{children:(0,za.jsxs)(Me,{children:[(0,za.jsx)(Re,{path:"/",element:(0,za.jsx)(Pi,{})}),(0,za.jsx)(Re,{path:"/about",element:(0,za.jsx)(xl,{})}),(0,za.jsx)(Re,{path:"/offer",element:(0,za.jsx)(gc,{})}),(0,za.jsx)(Re,{path:"/offer/:id",element:(0,za.jsx)(gc,{})}),(0,za.jsx)(Re,{path:"/questions",element:(0,za.jsx)(Rl,{})}),(0,za.jsx)(Re,{path:"/cooperation",element:(0,za.jsx)(Cs,{})})]})}),(0,za.jsx)(Lo,{})]})};o.createRoot(document.getElementById("root")).render((0,za.jsx)(r.StrictMode,{children:(0,za.jsx)(ht,{basename:"/klara-queen",children:(0,za.jsx)(yc,{})})}))})();
//# sourceMappingURL=main.600fa517.js.map