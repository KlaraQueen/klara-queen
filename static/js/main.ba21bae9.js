/*! For license information please see main.ba21bae9.js.LICENSE.txt */
(()=>{"use strict";var e={4(e,t,n){var r=n(853),a=n(43),l=n(950);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function u(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function s(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function c(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(i(188))}function f(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=f(e)))return t;e=e.sibling}return null}var p=Object.assign,h=Symbol.for("react.element"),m=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),_=Symbol.for("react.lazy");Symbol.for("react.scope");var z=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var P=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var T=Symbol.iterator;function N(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=T&&e[T]||e["@@iterator"])?e:null}var O=Symbol.for("react.client.reference");function $(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===O?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case v:return"Fragment";case b:return"Profiler";case y:return"StrictMode";case S:return"Suspense";case E:return"SuspenseList";case z:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case g:return"Portal";case w:return e.displayName||"Context";case x:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case C:return null!==(t=e.displayName||null)?t:$(e.type)||"Memo";case _:t=e._payload,e=e._init;try{return $(e(t))}catch(_e){}}return null}var L=Array.isArray,j=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},D=[],F=-1;function I(e){return{current:e}}function M(e){0>F||(e.current=D[F],D[F]=null,F--)}function H(e,t){F++,D[F]=e.current,e.current=t}var U,B,W=I(null),V=I(null),q=I(null),K=I(null);function Q(e,t){switch(H(q,t),H(V,e),H(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?yd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=bd(t=yd(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(W),H(W,e)}function G(){M(W),M(V),M(q)}function Y(e){null!==e.memoizedState&&H(K,e);var t=W.current,n=bd(t,e.type);t!==n&&(H(V,e),H(W,n))}function X(e){V.current===e&&(M(W),M(V)),K.current===e&&(M(K),ff._currentValue=R)}function Z(e){if(void 0===U)try{throw Error()}catch(_e){var t=_e.stack.trim().match(/\n( *(at )?)/);U=t&&t[1]||"",B=-1<_e.stack.indexOf("\n    at")?" (<anonymous>)":-1<_e.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+U+e+B}var J=!1;function ee(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(_e){var r=_e}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}}else{try{throw Error()}catch(l){r=l}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(i){if(i&&r&&"string"===typeof i.stack)return[i.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=r.DetermineComponentFrameRoot(),i=l[0],o=l[1];if(i&&o){var u=i.split("\n"),s=o.split("\n");for(a=r=0;r<u.length&&!u[r].includes("DetermineComponentFrameRoot");)r++;for(;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;if(r===u.length||a===s.length)for(r=u.length-1,a=s.length-1;1<=r&&0<=a&&u[r]!==s[a];)a--;for(;1<=r&&0<=a;r--,a--)if(u[r]!==s[a]){if(1!==r||1!==a)do{if(r--,0>--a||u[r]!==s[a]){var c="\n"+u[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=r&&0<=a);break}}}finally{J=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Z(n):""}function te(e,t){switch(e.tag){case 26:case 27:case 5:return Z(e.type);case 16:return Z("Lazy");case 13:return e.child!==t&&null!==t?Z("Suspense Fallback"):Z("Suspense");case 19:return Z("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return Z("Activity");default:return""}}function ne(e){try{var t="",n=null;do{t+=te(e,n),n=e,e=e.return}while(e);return t}catch(_e){return"\nError generating stack: "+_e.message+"\n"+_e.stack}}var re=Object.prototype.hasOwnProperty,ae=r.unstable_scheduleCallback,le=r.unstable_cancelCallback,ie=r.unstable_shouldYield,oe=r.unstable_requestPaint,ue=r.unstable_now,se=r.unstable_getCurrentPriorityLevel,ce=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,fe=r.unstable_NormalPriority,pe=r.unstable_LowPriority,he=r.unstable_IdlePriority,me=r.log,ge=r.unstable_setDisableYieldValue,ve=null,ye=null;function be(e){if("function"===typeof me&&ge(e),ye&&"function"===typeof ye.setStrictMode)try{ye.setStrictMode(ve,e)}catch(t){}}var xe=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(we(e)/ke|0)|0},we=Math.log,ke=Math.LN2;var Se=256,Ee=262144,Ce=4194304;function ze(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pe(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var a=0,l=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var o=134217727&r;return 0!==o?0!==(r=o&~l)?a=ze(r):0!==(i&=o)?a=ze(i):n||0!==(n=o&~e)&&(a=ze(n)):0!==(o=r&~l)?a=ze(o):0!==i?a=ze(i):n||0!==(n=r&~e)&&(a=ze(n)),0===a?0:0!==t&&t!==a&&0===(t&l)&&((l=a&-a)>=(n=t&-t)||32===l&&0!==(4194048&n))?t:a}function Te(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Ne(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Oe(){var e=Ce;return 0===(62914560&(Ce<<=1))&&(Ce=4194304),e}function $e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Le(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function je(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-xe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function Ae(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Re(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:De(n))&(e.suspendedLanes|t))?0:n}function De(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fe(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Ie(){var e=A.p;return 0!==e?e:void 0===(e=window.event)?32:Pf(e.type)}function Me(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var He=Math.random().toString(36).slice(2),Ue="__reactFiber$"+He,Be="__reactProps$"+He,We="__reactContainer$"+He,Ve="__reactEvents$"+He,qe="__reactListeners$"+He,Ke="__reactHandles$"+He,Qe="__reactResources$"+He,Ge="__reactMarker$"+He;function Ye(e){delete e[Ue],delete e[Be],delete e[Ve],delete e[qe],delete e[Ke]}function Xe(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[We]||n[Ue]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Dd(e);null!==e;){if(n=e[Ue])return n;e=Dd(e)}return t}n=(e=n).parentNode}return null}function Ze(e){if(e=e[Ue]||e[We]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function Je(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(i(33))}function et(e){var t=e[Qe];return t||(t=e[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[Ge]=!0}var nt=new Set,rt={};function at(e,t){lt(e,t),lt(e+"Capture",t)}function lt(e,t){for(rt[e]=t,e=0;e<t.length;e++)nt.add(t[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},ut={};function st(e,t,n){if(a=t,re.call(ut,a)||!re.call(ot,a)&&(it.test(a)?ut[a]=!0:(ot[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function ct(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function dt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function pt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ht(e){if(!e._valueTracker){var t=pt(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var a=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,l.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pt(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function gt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var vt=/[\n"\\]/g;function yt(e){return e.replace(vt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function bt(e,t,n,r,a,l,i,o){e.name="",null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?wt(e,i,ft(t)):null!=n?wt(e,i,ft(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=l&&(e.defaultChecked=!!l),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.name=""+ft(o):e.removeAttribute("name")}function xt(e,t,n,r,a,l,i,o){if(null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l&&(e.type=l),null!=t||null!=n){if(!("submit"!==l&&"reset"!==l||void 0!==t&&null!==t))return void ht(e);n=null!=n?""+ft(n):"",t=null!=t?""+ft(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=o?e.checked:!!r,e.defaultChecked=!!r,null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.name=i),ht(e)}function wt(e,t,n){"number"===t&&gt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function kt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function St(e,t,n){null==t||((t=""+ft(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ft(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function Et(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(i(92));if(L(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ft(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),ht(e)}function Ct(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var _t=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zt(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||_t.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Pt(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(i(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&zt(e,a,r)}else for(var l in t)t.hasOwnProperty(l)&&zt(e,l,t[l])}function Tt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ot=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $t(e){return Ot.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Lt(){}var jt=null;function At(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Rt=null,Dt=null;function Ft(e){var t=Ze(e);if(t&&(e=t.stateNode)){var n=e[Be]||null;e:switch(e=t.stateNode,t.type){case"input":if(bt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Be]||null;if(!a)throw Error(i(90));bt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&mt(r)}break e;case"textarea":St(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&kt(e,!!n.multiple,t,!1)}}}var It=!1;function Mt(e,t,n){if(It)return e(t,n);It=!0;try{return e(t)}finally{if(It=!1,(null!==Rt||null!==Dt)&&(ec(),Rt&&(t=Rt,e=Dt,Dt=Rt=null,Ft(t),e)))for(t=0;t<e.length;t++)Ft(e[t])}}function Ht(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Be]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Ut=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Bt=!1;if(Ut)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){Bt=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch(Jf){Bt=!1}var Vt=null,qt=null,Kt=null;function Qt(){if(Kt)return Kt;var e,t,n=qt,r=n.length,a="value"in Vt?Vt.value:Vt.textContent,l=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[l-t];t++);return Kt=a.slice(e,1<t?1-t:void 0)}function Gt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Yt(){return!0}function Xt(){return!1}function Zt(e){function t(t,n,r,a,l){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=l,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Yt:Xt,this.isPropagationStopped=Xt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Yt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Yt)},persist:function(){},isPersistent:Yt}),t}var Jt,en,tn,nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rn=Zt(nn),an=p({},nn,{view:0,detail:0}),ln=Zt(an),on=p({},an,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tn&&(tn&&"mousemove"===e.type?(Jt=e.screenX-tn.screenX,en=e.screenY-tn.screenY):en=Jt=0,tn=e),Jt)},movementY:function(e){return"movementY"in e?e.movementY:en}}),un=Zt(on),sn=Zt(p({},on,{dataTransfer:0})),cn=Zt(p({},an,{relatedTarget:0})),dn=Zt(p({},nn,{animationName:0,elapsedTime:0,pseudoElement:0})),fn=Zt(p({},nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),pn=Zt(p({},nn,{data:0})),hn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=gn[e])&&!!t[e]}function yn(){return vn}var bn=Zt(p({},an,{key:function(e){if(e.key){var t=hn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Gt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?mn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yn,charCode:function(e){return"keypress"===e.type?Gt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Gt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),xn=Zt(p({},on,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),wn=Zt(p({},an,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yn})),kn=Zt(p({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Sn=Zt(p({},on,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),En=Zt(p({},nn,{newState:0,oldState:0})),Cn=[9,13,27,32],_n=Ut&&"CompositionEvent"in window,zn=null;Ut&&"documentMode"in document&&(zn=document.documentMode);var Pn=Ut&&"TextEvent"in window&&!zn,Tn=Ut&&(!_n||zn&&8<zn&&11>=zn),Nn=String.fromCharCode(32),On=!1;function $n(e,t){switch(e){case"keyup":return-1!==Cn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ln(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var jn=!1;var An={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!An[e.type]:"textarea"===t}function Dn(e,t,n,r){Rt?Dt?Dt.push(r):Dt=[r]:Rt=r,0<(t=ad(t,"onChange")).length&&(n=new rn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fn=null,In=null;function Mn(e){Yc(e,0)}function Hn(e){if(mt(Je(e)))return e}function Un(e,t){if("change"===e)return t}var Bn=!1;if(Ut){var Wn;if(Ut){var Vn="oninput"in document;if(!Vn){var qn=document.createElement("div");qn.setAttribute("oninput","return;"),Vn="function"===typeof qn.oninput}Wn=Vn}else Wn=!1;Bn=Wn&&(!document.documentMode||9<document.documentMode)}function Kn(){Fn&&(Fn.detachEvent("onpropertychange",Qn),In=Fn=null)}function Qn(e){if("value"===e.propertyName&&Hn(In)){var t=[];Dn(t,In,e,At(e)),Mt(Mn,t)}}function Gn(e,t,n){"focusin"===e?(Kn(),In=n,(Fn=t).attachEvent("onpropertychange",Qn)):"focusout"===e&&Kn()}function Yn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Hn(In)}function Xn(e,t){if("click"===e)return Hn(t)}function Zn(e,t){if("input"===e||"change"===e)return Hn(t)}var Jn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function er(e,t){if(Jn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!re.call(t,a)||!Jn(e[a],t[a]))return!1}return!0}function tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nr(e,t){var n,r=tr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=tr(r)}}function rr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?rr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ar(e){for(var t=gt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=gt((e=t.contentWindow).document)}return t}function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ir=Ut&&"documentMode"in document&&11>=document.documentMode,or=null,ur=null,sr=null,cr=!1;function dr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;cr||null==or||or!==gt(r)||("selectionStart"in(r=or)&&lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},sr&&er(sr,r)||(sr=r,0<(r=ad(ur,"onSelect")).length&&(t=new rn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=or)))}function fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pr={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionrun:fr("Transition","TransitionRun"),transitionstart:fr("Transition","TransitionStart"),transitioncancel:fr("Transition","TransitionCancel"),transitionend:fr("Transition","TransitionEnd")},hr={},mr={};function gr(e){if(hr[e])return hr[e];if(!pr[e])return e;var t,n=pr[e];for(t in n)if(n.hasOwnProperty(t)&&t in mr)return hr[e]=n[t];return e}Ut&&(mr=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);var vr=gr("animationend"),yr=gr("animationiteration"),br=gr("animationstart"),xr=gr("transitionrun"),wr=gr("transitionstart"),kr=gr("transitioncancel"),Sr=gr("transitionend"),Er=new Map,Cr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(e,t){Er.set(e,t),at(t,[e])}Cr.push("scrollEnd");var zr="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},Pr=[],Tr=0,Nr=0;function Or(){for(var e=Tr,t=Nr=Tr=0;t<e;){var n=Pr[t];Pr[t++]=null;var r=Pr[t];Pr[t++]=null;var a=Pr[t];Pr[t++]=null;var l=Pr[t];if(Pr[t++]=null,null!==r&&null!==a){var i=r.pending;null===i?a.next=a:(a.next=i.next,i.next=a),r.pending=a}0!==l&&Ar(n,a,l)}}function $r(e,t,n,r){Pr[Tr++]=e,Pr[Tr++]=t,Pr[Tr++]=n,Pr[Tr++]=r,Nr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Lr(e,t,n,r){return $r(e,t,n,r),Rr(e)}function jr(e,t){return $r(e,null,null,t),Rr(e)}function Ar(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,l=e.return;null!==l;)l.childLanes|=n,null!==(r=l.alternate)&&(r.childLanes|=n),22===l.tag&&(null===(e=l.stateNode)||1&e._visibility||(a=!0)),e=l,l=l.return;return 3===e.tag?(l=e.stateNode,a&&null!==t&&(a=31-xe(n),null===(r=(e=l.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),l):null}function Rr(e){if(50<Vs)throw Vs=0,qs=null,Error(i(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Dr={};function Fr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ir(e,t,n,r){return new Fr(e,t,n,r)}function Mr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Hr(e,t){var n=e.alternate;return null===n?((n=Ir(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ur(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Br(e,t,n,r,a,l){var o=0;if(r=e,"function"===typeof e)Mr(e)&&(o=1);else if("string"===typeof e)o=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,W.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case z:return(e=Ir(31,n,t,a)).elementType=z,e.lanes=l,e;case v:return Wr(n.children,a,l,t);case y:o=8,a|=24;break;case b:return(e=Ir(12,n,t,2|a)).elementType=b,e.lanes=l,e;case S:return(e=Ir(13,n,t,a)).elementType=S,e.lanes=l,e;case E:return(e=Ir(19,n,t,a)).elementType=E,e.lanes=l,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case w:o=10;break e;case x:o=9;break e;case k:o=11;break e;case C:o=14;break e;case _:o=16,r=null;break e}o=29,n=Error(i(130,null===e?"null":typeof e,"")),r=null}return(t=Ir(o,n,t,a)).elementType=e,t.type=r,t.lanes=l,t}function Wr(e,t,n,r){return(e=Ir(7,e,r,t)).lanes=n,e}function Vr(e,t,n){return(e=Ir(6,e,null,t)).lanes=n,e}function qr(e){var t=Ir(18,null,null,0);return t.stateNode=e,t}function Kr(e,t,n){return(t=Ir(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Qr=new WeakMap;function Gr(e,t){if("object"===typeof e&&null!==e){var n=Qr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ne(t)},Qr.set(e,t),t)}return{value:e,source:t,stack:ne(t)}}var Yr=[],Xr=0,Zr=null,Jr=0,ea=[],ta=0,na=null,ra=1,aa="";function la(e,t){Yr[Xr++]=Jr,Yr[Xr++]=Zr,Zr=e,Jr=t}function ia(e,t,n){ea[ta++]=ra,ea[ta++]=aa,ea[ta++]=na,na=e;var r=ra;e=aa;var a=32-xe(r)-1;r&=~(1<<a),n+=1;var l=32-xe(t)+a;if(30<l){var i=a-a%5;l=(r&(1<<i)-1).toString(32),r>>=i,a-=i,ra=1<<32-xe(t)+a|n<<a|r,aa=l+e}else ra=1<<l|n<<a|r,aa=e}function oa(e){null!==e.return&&(la(e,1),ia(e,1,0))}function ua(e){for(;e===Zr;)Zr=Yr[--Xr],Yr[Xr]=null,Jr=Yr[--Xr],Yr[Xr]=null;for(;e===na;)na=ea[--ta],ea[ta]=null,aa=ea[--ta],ea[ta]=null,ra=ea[--ta],ea[ta]=null}function sa(e,t){ea[ta++]=ra,ea[ta++]=aa,ea[ta++]=na,ra=t.id,aa=t.overflow,na=e}var ca=null,da=null,fa=!1,pa=null,ha=!1,ma=Error(i(519));function ga(e){throw ka(Gr(Error(i(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),ma}function va(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ue]=e,t[Be]=r,n){case"dialog":Xc("cancel",t),Xc("close",t);break;case"iframe":case"object":case"embed":Xc("load",t);break;case"video":case"audio":for(n=0;n<Qc.length;n++)Xc(Qc[n],t);break;case"source":Xc("error",t);break;case"img":case"image":case"link":Xc("error",t),Xc("load",t);break;case"details":Xc("toggle",t);break;case"input":Xc("invalid",t),xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Xc("invalid",t);break;case"textarea":Xc("invalid",t),Et(t,r.value,r.defaultValue,r.children)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||cd(t.textContent,n)?(null!=r.popover&&(Xc("beforetoggle",t),Xc("toggle",t)),null!=r.onScroll&&Xc("scroll",t),null!=r.onScrollEnd&&Xc("scrollend",t),null!=r.onClick&&(t.onclick=Lt),t=!0):t=!1,t||ga(e,!0)}function ya(e){for(ca=e.return;ca;)switch(ca.tag){case 5:case 31:case 13:return void(ha=!1);case 27:case 3:return void(ha=!0);default:ca=ca.return}}function ba(e){if(e!==ca)return!1;if(!fa)return ya(e),fa=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||xd(e.type,e.memoizedProps)),t=!t),t&&da&&ga(e),ya(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));da=Rd(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));da=Rd(e)}else 27===n?(n=da,zd(e.type)?(e=Ad,Ad=null,da=e):da=n):da=ca?jd(e.stateNode.nextSibling):null;return!0}function xa(){da=ca=null,fa=!1}function wa(){var e=pa;return null!==e&&(null===Os?Os=e:Os.push.apply(Os,e),pa=null),e}function ka(e){null===pa?pa=[e]:pa.push(e)}var Sa=I(null),Ea=null,Ca=null;function _a(e,t,n){H(Sa,t._currentValue),t._currentValue=n}function za(e){e._currentValue=Sa.current,M(Sa)}function Pa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ta(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var l=a.dependencies;if(null!==l){var o=a.child;l=l.firstContext;e:for(;null!==l;){var u=l;l=a;for(var s=0;s<t.length;s++)if(u.context===t[s]){l.lanes|=n,null!==(u=l.alternate)&&(u.lanes|=n),Pa(l.return,n,e),r||(o=null);break e}l=u.next}}else if(18===a.tag){if(null===(o=a.return))throw Error(i(341));o.lanes|=n,null!==(l=o.alternate)&&(l.lanes|=n),Pa(o,n,e),o=null}else o=a.child;if(null!==o)o.return=a;else for(o=a;null!==o;){if(o===e){o=null;break}if(null!==(a=o.sibling)){a.return=o.return,o=a;break}o=o.return}a=o}}function Na(e,t,n,r){e=null;for(var a=t,l=!1;null!==a;){if(!l)if(0!==(524288&a.flags))l=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var o=a.alternate;if(null===o)throw Error(i(387));if(null!==(o=o.memoizedProps)){var u=a.type;Jn(a.pendingProps.value,o.value)||(null!==e?e.push(u):e=[u])}}else if(a===K.current){if(null===(o=a.alternate))throw Error(i(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(ff):e=[ff])}a=a.return}null!==e&&Ta(t,e,n,r),t.flags|=262144}function Oa(e){for(e=e.firstContext;null!==e;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $a(e){Ea=e,Ca=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function La(e){return Aa(Ea,e)}function ja(e,t){return null===Ea&&$a(e),Aa(e,t)}function Aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Ca){if(null===e)throw Error(i(308));Ca=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ca=Ca.next=t;return n}var Ra="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Da=r.unstable_scheduleCallback,Fa=r.unstable_NormalPriority,Ia={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ma(){return{controller:new Ra,data:new Map,refCount:0}}function Ha(e){e.refCount--,0===e.refCount&&Da(Fa,function(){e.controller.abort()})}var Ua=null,Ba=0,Wa=0,Va=null;function qa(){if(0===--Ba&&null!==Ua){null!==Va&&(Va.status="fulfilled");var e=Ua;Ua=null,Wa=0,Va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ka=j.S;j.S=function(e,t){js=ue(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Ua){var n=Ua=[];Ba=0,Wa=Bc(),Va={status:"pending",value:void 0,then:function(e){n.push(e)}}}Ba++,t.then(qa,qa)}(0,t),null!==Ka&&Ka(e,t)};var Qa=I(null);function Ga(){var e=Qa.current;return null!==e?e:ms.pooledCache}function Ya(e,t){H(Qa,null===t?Qa.current:t.pool)}function Xa(){var e=Ga();return null===e?null:{parent:Ia._currentValue,pool:e}}var Za=Error(i(460)),Ja=Error(i(474)),el=Error(i(542)),tl={then:function(){}};function nl(e){return"fulfilled"===(e=e.status)||"rejected"===e}function rl(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Lt,Lt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ol(e=t.reason),e;default:if("string"===typeof t.status)t.then(Lt,Lt);else{if(null!==(e=ms)&&100<e.shellSuspendCounter)throw Error(i(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ol(e=t.reason),e}throw ll=t,Za}}function al(e){try{return(0,e._init)(e._payload)}catch(_e){if(null!==_e&&"object"===typeof _e&&"function"===typeof _e.then)throw ll=_e,Za;throw _e}}var ll=null;function il(){if(null===ll)throw Error(i(459));var e=ll;return ll=null,e}function ol(e){if(e===Za||e===el)throw Error(i(483))}var ul=null,sl=0;function cl(e){var t=sl;return sl+=1,null===ul&&(ul=[]),rl(ul,e,t)}function dl(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function fl(e,t){if(t.$$typeof===h)throw Error(i(525));throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pl(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Hr(e,t)).index=0,e.sibling=null,e}function l(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function u(e,t,n,r){return null===t||6!==t.tag?((t=Vr(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function s(e,t,n,r){var l=n.type;return l===v?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===l||"object"===typeof l&&null!==l&&l.$$typeof===_&&al(l)===t.type)?(dl(t=a(t,n.props),n),t.return=e,t):(dl(t=Br(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Kr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,l){return null===t||7!==t.tag?((t=Wr(n,e.mode,r,l)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Vr(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case m:return dl(n=Br(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case g:return(t=Kr(t,e.mode,n)).return=e,t;case _:return f(e,t=al(t),n)}if(L(t)||N(t))return(t=Wr(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return f(e,cl(t),n);if(t.$$typeof===w)return f(e,ja(e,t),n);fl(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:u(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case m:return n.key===a?s(e,t,n,r):null;case g:return n.key===a?c(e,t,n,r):null;case _:return p(e,t,n=al(n),r)}if(L(n)||N(n))return null!==a?null:d(e,t,n,r,null);if("function"===typeof n.then)return p(e,t,cl(n),r);if(n.$$typeof===w)return p(e,t,ja(e,n),r);fl(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return u(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case m:return s(t,e=e.get(null===r.key?n:r.key)||null,r,a);case g:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case _:return h(e,t,n,r=al(r),a)}if(L(r)||N(r))return d(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return h(e,t,n,cl(r),a);if(r.$$typeof===w)return h(e,t,n,ja(t,r),a);fl(t,r)}return null}function y(u,s,c,d){if("object"===typeof c&&null!==c&&c.type===v&&null===c.key&&(c=c.props.children),"object"===typeof c&&null!==c){switch(c.$$typeof){case m:e:{for(var b=c.key;null!==s;){if(s.key===b){if((b=c.type)===v){if(7===s.tag){n(u,s.sibling),(d=a(s,c.props.children)).return=u,u=d;break e}}else if(s.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===_&&al(b)===s.type){n(u,s.sibling),dl(d=a(s,c.props),c),d.return=u,u=d;break e}n(u,s);break}t(u,s),s=s.sibling}c.type===v?((d=Wr(c.props.children,u.mode,d,c.key)).return=u,u=d):(dl(d=Br(c.type,c.key,c.props,null,u.mode,d),c),d.return=u,u=d)}return o(u);case g:e:{for(b=c.key;null!==s;){if(s.key===b){if(4===s.tag&&s.stateNode.containerInfo===c.containerInfo&&s.stateNode.implementation===c.implementation){n(u,s.sibling),(d=a(s,c.children||[])).return=u,u=d;break e}n(u,s);break}t(u,s),s=s.sibling}(d=Kr(c,u.mode,d)).return=u,u=d}return o(u);case _:return y(u,s,c=al(c),d)}if(L(c))return function(a,i,o,u){for(var s=null,c=null,d=i,m=i=0,g=null;null!==d&&m<o.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(a,d,o[m],u);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),i=l(v,i,m),null===c?s=v:c.sibling=v,c=v,d=g}if(m===o.length)return n(a,d),fa&&la(a,m),s;if(null===d){for(;m<o.length;m++)null!==(d=f(a,o[m],u))&&(i=l(d,i,m),null===c?s=d:c.sibling=d,c=d);return fa&&la(a,m),s}for(d=r(d);m<o.length;m++)null!==(g=h(d,a,m,o[m],u))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=l(g,i,m),null===c?s=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(a,e)}),fa&&la(a,m),s}(u,s,c,d);if(N(c)){if("function"!==typeof(b=N(c)))throw Error(i(150));return function(a,o,u,s){if(null==u)throw Error(i(151));for(var c=null,d=null,m=o,g=o=0,v=null,y=u.next();null!==m&&!y.done;g++,y=u.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(a,m,y.value,s);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(a,m),o=l(b,o,g),null===d?c=b:d.sibling=b,d=b,m=v}if(y.done)return n(a,m),fa&&la(a,g),c;if(null===m){for(;!y.done;g++,y=u.next())null!==(y=f(a,y.value,s))&&(o=l(y,o,g),null===d?c=y:d.sibling=y,d=y);return fa&&la(a,g),c}for(m=r(m);!y.done;g++,y=u.next())null!==(y=h(m,a,g,y.value,s))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),o=l(y,o,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach(function(e){return t(a,e)}),fa&&la(a,g),c}(u,s,c=b.call(c),d)}if("function"===typeof c.then)return y(u,s,cl(c),d);if(c.$$typeof===w)return y(u,s,ja(u,c),d);fl(u,c)}return"string"===typeof c&&""!==c||"number"===typeof c||"bigint"===typeof c?(c=""+c,null!==s&&6===s.tag?(n(u,s.sibling),(d=a(s,c)).return=u,u=d):(n(u,s),(d=Vr(c,u.mode,d)).return=u,u=d),o(u)):n(u,s)}return function(e,t,n,r){try{sl=0;var a=y(e,t,n,r);return ul=null,a}catch(_e){if(_e===Za||_e===el)throw _e;var l=Ir(29,_e,null,e.mode);return l.lanes=r,l.return=e,l}}}var hl=pl(!0),ml=pl(!1),gl=!1;function vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xl(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&hs)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Rr(e),Ar(e,null,n),t}return $r(e,r,t,n),Rr(e)}function wl(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ae(e,n)}}function kl(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,l=null;if(null!==(n=n.firstBaseUpdate)){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===l?a=l=i:l=l.next=i,n=n.next}while(null!==n);null===l?a=l=t:l=l.next=t}else a=l=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Sl=!1;function El(){if(Sl){if(null!==Va)throw Va}}function Cl(e,t,n,r){Sl=!1;var a=e.updateQueue;gl=!1;var l=a.firstBaseUpdate,i=a.lastBaseUpdate,o=a.shared.pending;if(null!==o){a.shared.pending=null;var u=o,s=u.next;u.next=null,null===i?l=s:i.next=s,i=u;var c=e.alternate;null!==c&&((o=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===o?c.firstBaseUpdate=s:o.next=s,c.lastBaseUpdate=u))}if(null!==l){var d=a.baseState;for(i=0,c=s=u=null,o=l;;){var f=-536870913&o.lane,h=f!==o.lane;if(h?(vs&f)===f:(r&f)===f){0!==f&&f===Wa&&(Sl=!0),null!==c&&(c=c.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var m=e,g=o;f=t;var v=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(v,d,f);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(f="function"===typeof(m=g.payload)?m.call(v,d,f):m)||void 0===f)break e;d=p({},d,f);break e;case 2:gl=!0}}null!==(f=o.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=a.callbacks)?a.callbacks=[f]:h.push(f))}else h={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(s=c=h,u=d):c=c.next=h,i|=f;if(null===(o=o.next)){if(null===(o=a.shared.pending))break;o=(h=o).next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}null===c&&(u=d),a.baseState=u,a.firstBaseUpdate=s,a.lastBaseUpdate=c,null===l&&(a.shared.lanes=0),Cs|=i,e.lanes=i,e.memoizedState=d}}function _l(e,t){if("function"!==typeof e)throw Error(i(191,e));e.call(t)}function zl(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)_l(n[e],t)}var Pl=I(null),Tl=I(0);function Nl(e,t){H(Tl,e=Ss),H(Pl,t),Ss=e|t.baseLanes}function Ol(){H(Tl,Ss),H(Pl,Pl.current)}function $l(){Ss=Tl.current,M(Pl),M(Tl)}var Ll=I(null),jl=null;function Al(e){var t=e.alternate;H(Ml,1&Ml.current),H(Ll,e),null===jl&&(null===t||null!==Pl.current||null!==t.memoizedState)&&(jl=e)}function Rl(e){H(Ml,Ml.current),H(Ll,e),null===jl&&(jl=e)}function Dl(e){22===e.tag?(H(Ml,Ml.current),H(Ll,e),null===jl&&(jl=e)):Fl()}function Fl(){H(Ml,Ml.current),H(Ll,Ll.current)}function Il(e){M(Ll),jl===e&&(jl=null),M(Ml)}var Ml=I(0);function Hl(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||$d(n)||Ld(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child;continue}}else if(0!==(128&t.flags))return t;if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=0,Bl=null,Wl=null,Vl=null,ql=!1,Kl=!1,Ql=!1,Gl=0,Yl=0,Xl=null,Zl=0;function Jl(){throw Error(i(321))}function ei(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jn(e[n],t[n]))return!1;return!0}function ti(e,t,n,r,a,l){return Ul=l,Bl=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=null===e||null===e.memoizedState?vo:yo,Ql=!1,l=n(r,a),Ql=!1,Kl&&(l=ri(t,n,r,a)),ni(e),l}function ni(e){j.H=go;var t=null!==Wl&&null!==Wl.next;if(Ul=0,Vl=Wl=Bl=null,ql=!1,Yl=0,Xl=null,t)throw Error(i(300));null===e||jo||null!==(e=e.dependencies)&&Oa(e)&&(jo=!0)}function ri(e,t,n,r){Bl=e;var a=0;do{if(Kl&&(Xl=null),Yl=0,Kl=!1,25<=a)throw Error(i(301));if(a+=1,Vl=Wl=null,null!=e.updateQueue){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,null!=l.memoCache&&(l.memoCache.index=0)}j.H=bo,l=t(n,r)}while(Kl);return l}function ai(){var e=j.H,t=e.useState()[0];return t="function"===typeof t.then?ci(t):t,e=e.useState()[0],(null!==Wl?Wl.memoizedState:null)!==e&&(Bl.flags|=1024),t}function li(){var e=0!==Gl;return Gl=0,e}function ii(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function oi(e){if(ql){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ql=!1}Ul=0,Vl=Wl=Bl=null,Kl=!1,Yl=Gl=0,Xl=null}function ui(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Vl?Bl.memoizedState=Vl=e:Vl=Vl.next=e,Vl}function si(){if(null===Wl){var e=Bl.alternate;e=null!==e?e.memoizedState:null}else e=Wl.next;var t=null===Vl?Bl.memoizedState:Vl.next;if(null!==t)Vl=t,Wl=e;else{if(null===e){if(null===Bl.alternate)throw Error(i(467));throw Error(i(310))}e={memoizedState:(Wl=e).memoizedState,baseState:Wl.baseState,baseQueue:Wl.baseQueue,queue:Wl.queue,next:null},null===Vl?Bl.memoizedState=Vl=e:Vl=Vl.next=e}return Vl}function ci(e){var t=Yl;return Yl+=1,null===Xl&&(Xl=[]),e=rl(Xl,e,t),t=Bl,null===(null===Vl?t.memoizedState:Vl.next)&&(t=t.alternate,j.H=null===t||null===t.memoizedState?vo:yo),e}function di(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return ci(e);if(e.$$typeof===w)return La(e)}throw Error(i(438,String(e)))}function fi(e){var t=null,n=Bl.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Bl.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Bl.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=P;return t.index++,n}function pi(e,t){return"function"===typeof t?t(e):t}function hi(e){return mi(si(),Wl,e)}function mi(e,t,n){var r=e.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,l=r.pending;if(null!==l){if(null!==a){var o=a.next;a.next=l.next,l.next=o}t.baseQueue=a=l,r.pending=null}if(l=e.baseState,null===a)e.memoizedState=l;else{var u=o=null,s=null,c=t=a.next,d=!1;do{var f=-536870913&c.lane;if(f!==c.lane?(vs&f)===f:(Ul&f)===f){var p=c.revertLane;if(0===p)null!==s&&(s=s.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Wa&&(d=!0);else{if((Ul&p)===p){c=c.next,p===Wa&&(d=!0);continue}f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===s?(u=s=f,o=l):s=s.next=f,Bl.lanes|=p,Cs|=p}f=c.action,Ql&&n(l,f),l=c.hasEagerState?c.eagerState:n(l,f)}else p={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===s?(u=s=p,o=l):s=s.next=p,Bl.lanes|=f,Cs|=f;c=c.next}while(null!==c&&c!==t);if(null===s?o=l:s.next=u,!Jn(l,e.memoizedState)&&(jo=!0,d&&null!==(n=Va)))throw n;e.memoizedState=l,e.baseState=o,e.baseQueue=s,r.lastRenderedState=l}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function gi(e){var t=si(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(null!==a){n.pending=null;var o=a=a.next;do{l=e(l,o.action),o=o.next}while(o!==a);Jn(l,t.memoizedState)||(jo=!0),t.memoizedState=l,null===t.baseQueue&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function vi(e,t,n){var r=Bl,a=si(),l=fa;if(l){if(void 0===n)throw Error(i(407));n=n()}else n=t();var o=!Jn((Wl||a).memoizedState,n);if(o&&(a.memoizedState=n,jo=!0),a=a.queue,Ui(xi.bind(null,r,a,e),[e]),a.getSnapshot!==t||o||null!==Vl&&1&Vl.memoizedState.tag){if(r.flags|=2048,Di(9,{destroy:void 0},bi.bind(null,r,a,n,t),null),null===ms)throw Error(i(349));l||0!==(127&Ul)||yi(r,t,n)}return n}function yi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Bl.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Bl.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function bi(e,t,n,r){t.value=n,t.getSnapshot=r,wi(t)&&ki(e)}function xi(e,t,n){return n(function(){wi(t)&&ki(e)})}function wi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jn(e,n)}catch(r){return!0}}function ki(e){var t=jr(e,2);null!==t&&Gs(t,e,2)}function Si(e){var t=ui();if("function"===typeof e){var n=e;if(e=n(),Ql){be(!0);try{n()}finally{be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:e},t}function Ei(e,t,n,r){return e.baseState=n,mi(e,Wl,"function"===typeof r?r:pi)}function Ci(e,t,n,r,a){if(po(e))throw Error(i(485));if(null!==(e=t.action)){var l={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){l.listeners.push(e)}};null!==j.T?n(!0):l.isTransition=!1,r(l),null===(n=t.pending)?(l.next=t.pending=l,_i(t,l)):(l.next=n.next,t.pending=n.next=l)}}function _i(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var l=j.T,i={};j.T=i;try{var o=n(a,r),u=j.S;null!==u&&u(i,o),zi(e,t,o)}catch(s){Ti(e,t,s)}finally{null!==l&&null!==i.types&&(l.types=i.types),j.T=l}}else try{zi(e,t,l=n(a,r))}catch(c){Ti(e,t,c)}}function zi(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){Pi(e,t,n)},function(n){return Ti(e,t,n)}):Pi(e,t,n)}function Pi(e,t,n){t.status="fulfilled",t.value=n,Ni(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,_i(e,n)))}function Ti(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,Ni(t),t=t.next}while(t!==r)}e.action=null}function Ni(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Oi(e,t){return t}function $i(e,t){if(fa){var n=ms.formState;if(null!==n){e:{var r=Bl;if(fa){if(da){t:{for(var a=da,l=ha;8!==a.nodeType;){if(!l){a=null;break t}if(null===(a=jd(a.nextSibling))){a=null;break t}}a="F!"===(l=a.data)||"F"===l?a:null}if(a){da=jd(a.nextSibling),r="F!"===a.data;break e}}ga(r)}r=!1}r&&(t=n[0])}}return(n=ui()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:t},n.queue=r,n=so.bind(null,Bl,r),r.dispatch=n,r=Si(!1),l=fo.bind(null,Bl,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=ui()).queue=a,n=Ci.bind(null,Bl,a,l,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Li(e){return ji(si(),Wl,e)}function ji(e,t,n){if(t=mi(e,t,Oi)[0],e=hi(pi)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=ci(t)}catch(_e){if(_e===Za)throw el;throw _e}else r=t;var a=(t=si()).queue,l=a.dispatch;return n!==t.memoizedState&&(Bl.flags|=2048,Di(9,{destroy:void 0},Ai.bind(null,a,n),null)),[r,l,e]}function Ai(e,t){e.action=t}function Ri(e){var t=si(),n=Wl;if(null!==n)return ji(t,n,e);si(),t=t.memoizedState;var r=(n=si()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Di(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=Bl.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Bl.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Fi(){return si().memoizedState}function Ii(e,t,n,r){var a=ui();Bl.flags|=e,a.memoizedState=Di(1|t,{destroy:void 0},n,void 0===r?null:r)}function Mi(e,t,n,r){var a=si();r=void 0===r?null:r;var l=a.memoizedState.inst;null!==Wl&&null!==r&&ei(r,Wl.memoizedState.deps)?a.memoizedState=Di(t,l,n,r):(Bl.flags|=e,a.memoizedState=Di(1|t,l,n,r))}function Hi(e,t){Ii(8390656,8,e,t)}function Ui(e,t){Mi(2048,8,e,t)}function Bi(e){var t=si().memoizedState;return function(e){Bl.flags|=4;var t=Bl.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},Bl.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&hs))throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Wi(e,t){return Mi(4,2,e,t)}function Vi(e,t){return Mi(4,4,e,t)}function qi(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Ki(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Mi(4,4,qi.bind(null,t,e),n)}function Qi(){}function Gi(e,t){var n=si();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&ei(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yi(e,t){var n=si();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&ei(t,r[1]))return r[0];if(r=e(),Ql){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r}function Xi(e,t,n){return void 0===n||0!==(1073741824&Ul)&&0===(261930&vs)?e.memoizedState=t:(e.memoizedState=n,e=Qs(),Bl.lanes|=e,Cs|=e,n)}function Zi(e,t,n,r){return Jn(n,t)?n:null!==Pl.current?(e=Xi(e,n,r),Jn(e,t)||(jo=!0),e):0===(42&Ul)||0!==(1073741824&Ul)&&0===(261930&vs)?(jo=!0,e.memoizedState=n):(e=Qs(),Bl.lanes|=e,Cs|=e,t)}function Ji(e,t,n,r,a){var l=A.p;A.p=0!==l&&8>l?l:8;var i=j.T,o={};j.T=o,fo(e,!1,t,n);try{var u=a(),s=j.S;if(null!==s&&s(o,u),null!==u&&"object"===typeof u&&"function"===typeof u.then)co(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(u,r),Ks());else co(e,t,r,Ks())}catch(c){co(e,t,{then:function(){},status:"rejected",reason:c},Ks())}finally{A.p=l,null!==i&&null!==o.types&&(i.types=o.types),j.T=i}}function eo(){}function to(e,t,n,r){if(5!==e.tag)throw Error(i(476));var a=no(e).queue;Ji(e,a,t,R,null===n?eo:function(){return ro(e),n(r)})}function no(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:R},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function ro(e){var t=no(e);null===t.next&&(t=e.alternate.memoizedState),co(e,t.next.queue,{},Ks())}function ao(){return La(ff)}function lo(){return si().memoizedState}function io(){return si().memoizedState}function oo(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Ks(),r=xl(t,e=bl(n),n);return null!==r&&(Gs(r,t,n),wl(r,t,n)),t={cache:Ma()},void(e.payload=t)}t=t.return}}function uo(e,t,n){var r=Ks();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},po(e)?ho(t,n):null!==(n=Lr(e,t,n,r))&&(Gs(n,e,r),mo(n,t,r))}function so(e,t,n){co(e,t,n,Ks())}function co(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(po(e))ho(t,a);else{var l=e.alternate;if(0===e.lanes&&(null===l||0===l.lanes)&&null!==(l=t.lastRenderedReducer))try{var i=t.lastRenderedState,o=l(i,n);if(a.hasEagerState=!0,a.eagerState=o,Jn(o,i))return $r(e,t,a,0),null===ms&&Or(),!1}catch(u){}if(null!==(n=Lr(e,t,a,r)))return Gs(n,e,r),mo(n,t,r),!0}return!1}function fo(e,t,n,r){if(r={lane:2,revertLane:Bc(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},po(e)){if(t)throw Error(i(479))}else null!==(t=Lr(e,n,r,2))&&Gs(t,e,2)}function po(e){var t=e.alternate;return e===Bl||null!==t&&t===Bl}function ho(e,t){Kl=ql=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mo(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ae(e,n)}}var go={readContext:La,use:di,useCallback:Jl,useContext:Jl,useEffect:Jl,useImperativeHandle:Jl,useLayoutEffect:Jl,useInsertionEffect:Jl,useMemo:Jl,useReducer:Jl,useRef:Jl,useState:Jl,useDebugValue:Jl,useDeferredValue:Jl,useTransition:Jl,useSyncExternalStore:Jl,useId:Jl,useHostTransitionStatus:Jl,useFormState:Jl,useActionState:Jl,useOptimistic:Jl,useMemoCache:Jl,useCacheRefresh:Jl};go.useEffectEvent=Jl;var vo={readContext:La,use:di,useCallback:function(e,t){return ui().memoizedState=[e,void 0===t?null:t],e},useContext:La,useEffect:Hi,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Ii(4194308,4,qi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ii(4194308,4,e,t)},useInsertionEffect:function(e,t){Ii(4,2,e,t)},useMemo:function(e,t){var n=ui();t=void 0===t?null:t;var r=e();if(Ql){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ui();if(void 0!==n){var a=n(t);if(Ql){be(!0);try{n(t)}finally{be(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=uo.bind(null,Bl,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ui().memoizedState=e},useState:function(e){var t=(e=Si(e)).queue,n=so.bind(null,Bl,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Qi,useDeferredValue:function(e,t){return Xi(ui(),e,t)},useTransition:function(){var e=Si(!1);return e=Ji.bind(null,Bl,e.queue,!0,!1),ui().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Bl,a=ui();if(fa){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===ms)throw Error(i(349));0!==(127&vs)||yi(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,Hi(xi.bind(null,r,l,e),[e]),r.flags|=2048,Di(9,{destroy:void 0},bi.bind(null,r,l,n,t),null),n},useId:function(){var e=ui(),t=ms.identifierPrefix;if(fa){var n=aa;t="_"+t+"R_"+(n=(ra&~(1<<32-xe(ra)-1)).toString(32)+n),0<(n=Gl++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Zl++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ao,useFormState:$i,useActionState:$i,useOptimistic:function(e){var t=ui();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=fo.bind(null,Bl,!0,n),n.dispatch=t,[e,t]},useMemoCache:fi,useCacheRefresh:function(){return ui().memoizedState=oo.bind(null,Bl)},useEffectEvent:function(e){var t=ui(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&hs))throw Error(i(440));return n.impl.apply(void 0,arguments)}}},yo={readContext:La,use:di,useCallback:Gi,useContext:La,useEffect:Ui,useImperativeHandle:Ki,useInsertionEffect:Wi,useLayoutEffect:Vi,useMemo:Yi,useReducer:hi,useRef:Fi,useState:function(){return hi(pi)},useDebugValue:Qi,useDeferredValue:function(e,t){return Zi(si(),Wl.memoizedState,e,t)},useTransition:function(){var e=hi(pi)[0],t=si().memoizedState;return["boolean"===typeof e?e:ci(e),t]},useSyncExternalStore:vi,useId:lo,useHostTransitionStatus:ao,useFormState:Li,useActionState:Li,useOptimistic:function(e,t){return Ei(si(),0,e,t)},useMemoCache:fi,useCacheRefresh:io};yo.useEffectEvent=Bi;var bo={readContext:La,use:di,useCallback:Gi,useContext:La,useEffect:Ui,useImperativeHandle:Ki,useInsertionEffect:Wi,useLayoutEffect:Vi,useMemo:Yi,useReducer:gi,useRef:Fi,useState:function(){return gi(pi)},useDebugValue:Qi,useDeferredValue:function(e,t){var n=si();return null===Wl?Xi(n,e,t):Zi(n,Wl.memoizedState,e,t)},useTransition:function(){var e=gi(pi)[0],t=si().memoizedState;return["boolean"===typeof e?e:ci(e),t]},useSyncExternalStore:vi,useId:lo,useHostTransitionStatus:ao,useFormState:Ri,useActionState:Ri,useOptimistic:function(e,t){var n=si();return null!==Wl?Ei(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fi,useCacheRefresh:io};function xo(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}bo.useEffectEvent=Bi;var wo={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ks(),a=bl(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=xl(e,a,r))&&(Gs(t,e,r),wl(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ks(),a=bl(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=xl(e,a,r))&&(Gs(t,e,r),wl(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ks(),r=bl(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=xl(e,r,n))&&(Gs(t,e,n),wl(t,e,n))}};function ko(e,t,n,r,a,l,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,l,i):!t.prototype||!t.prototype.isPureReactComponent||(!er(n,r)||!er(a,l))}function So(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wo.enqueueReplaceState(t,t.state,null)}function Eo(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=p({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}function Co(e){zr(e)}function _o(e){console.error(e)}function zo(e){zr(e)}function Po(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function To(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function No(e,t,n){return(n=bl(n)).tag=3,n.payload={element:null},n.callback=function(){Po(e,t)},n}function Oo(e){return(e=bl(e)).tag=3,e}function $o(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var l=r.value;e.payload=function(){return a(l)},e.callback=function(){To(t,n,r)}}var i=n.stateNode;null!==i&&"function"===typeof i.componentDidCatch&&(e.callback=function(){To(t,n,r),"function"!==typeof a&&(null===Ds?Ds=new Set([this]):Ds.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Lo=Error(i(461)),jo=!1;function Ao(e,t,n,r){t.child=null===e?ml(t,null,n,r):hl(t,e.child,n,r)}function Ro(e,t,n,r,a){n=n.render;var l=t.ref;if("ref"in r){var i={};for(var o in r)"ref"!==o&&(i[o]=r[o])}else i=r;return $a(t),r=ti(e,t,n,i,l,a),o=li(),null===e||jo?(fa&&o&&oa(t),t.flags|=1,Ao(e,t,r,a),t.child):(ii(e,t,a),lu(e,t,a))}function Do(e,t,n,r,a){if(null===e){var l=n.type;return"function"!==typeof l||Mr(l)||void 0!==l.defaultProps||null!==n.compare?((e=Br(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=l,Fo(e,t,l,r,a))}if(l=e.child,!iu(e,a)){var i=l.memoizedProps;if((n=null!==(n=n.compare)?n:er)(i,r)&&e.ref===t.ref)return lu(e,t,a)}return t.flags|=1,(e=Hr(l,r)).ref=t.ref,e.return=t,t.child=e}function Fo(e,t,n,r,a){if(null!==e){var l=e.memoizedProps;if(er(l,r)&&e.ref===t.ref){if(jo=!1,t.pendingProps=r=l,!iu(e,a))return t.lanes=e.lanes,lu(e,t,a);0!==(131072&e.flags)&&(jo=!0)}}return Vo(e,t,n,r,a)}function Io(e,t,n,r){var a=r.children,l=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(0!==(128&t.flags)){if(l=null!==l?l.baseLanes|n:n,null!==e){for(r=t.child=e.child,a=0;null!==r;)a=a|r.lanes|r.childLanes,r=r.sibling;r=a&~l}else r=0,t.child=null;return Ho(e,t,l,n,r)}if(0===(536870912&n))return r=t.lanes=536870912,Ho(e,t,null!==l?l.baseLanes|n:n,n,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ya(0,null!==l?l.cachePool:null),null!==l?Nl(t,l):Ol(),Dl(t)}else null!==l?(Ya(0,l.cachePool),Nl(t,l),Fl(),t.memoizedState=null):(null!==e&&Ya(0,null),Ol(),Fl());return Ao(e,t,a,n),t.child}function Mo(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ho(e,t,n,r,a){var l=Ga();return l=null===l?null:{parent:Ia._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},null!==e&&Ya(0,null),Ol(),Dl(t),null!==e&&Na(e,t,r,!0),t.childLanes=a,null}function Uo(e,t){return(t=eu({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function Bo(e,t,n){return hl(t,e.child,null,n),(e=Uo(t,t.pendingProps)).flags|=2,Il(t),t.memoizedState=null,e}function Wo(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(i(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Vo(e,t,n,r,a){return $a(t),n=ti(e,t,n,r,void 0,a),r=li(),null===e||jo?(fa&&r&&oa(t),t.flags|=1,Ao(e,t,n,a),t.child):(ii(e,t,a),lu(e,t,a))}function qo(e,t,n,r,a,l){return $a(t),t.updateQueue=null,n=ri(t,r,n,a),ni(e),r=li(),null===e||jo?(fa&&r&&oa(t),t.flags|=1,Ao(e,t,n,l),t.child):(ii(e,t,l),lu(e,t,l))}function Ko(e,t,n,r,a){if($a(t),null===t.stateNode){var l=Dr,i=n.contextType;"object"===typeof i&&null!==i&&(l=La(i)),l=new n(r,l),t.memoizedState=null!==l.state&&void 0!==l.state?l.state:null,l.updater=wo,t.stateNode=l,l._reactInternals=t,(l=t.stateNode).props=r,l.state=t.memoizedState,l.refs={},vl(t),i=n.contextType,l.context="object"===typeof i&&null!==i?La(i):Dr,l.state=t.memoizedState,"function"===typeof(i=n.getDerivedStateFromProps)&&(xo(t,n,i,r),l.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof l.getSnapshotBeforeUpdate||"function"!==typeof l.UNSAFE_componentWillMount&&"function"!==typeof l.componentWillMount||(i=l.state,"function"===typeof l.componentWillMount&&l.componentWillMount(),"function"===typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount(),i!==l.state&&wo.enqueueReplaceState(l,l.state,null),Cl(t,r,l,a),El(),l.state=t.memoizedState),"function"===typeof l.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){l=t.stateNode;var o=t.memoizedProps,u=Eo(n,o);l.props=u;var s=l.context,c=n.contextType;i=Dr,"object"===typeof c&&null!==c&&(i=La(c));var d=n.getDerivedStateFromProps;c="function"===typeof d||"function"===typeof l.getSnapshotBeforeUpdate,o=t.pendingProps!==o,c||"function"!==typeof l.UNSAFE_componentWillReceiveProps&&"function"!==typeof l.componentWillReceiveProps||(o||s!==i)&&So(t,l,r,i),gl=!1;var f=t.memoizedState;l.state=f,Cl(t,r,l,a),El(),s=t.memoizedState,o||f!==s||gl?("function"===typeof d&&(xo(t,n,d,r),s=t.memoizedState),(u=gl||ko(t,n,u,r,f,s,i))?(c||"function"!==typeof l.UNSAFE_componentWillMount&&"function"!==typeof l.componentWillMount||("function"===typeof l.componentWillMount&&l.componentWillMount(),"function"===typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount()),"function"===typeof l.componentDidMount&&(t.flags|=4194308)):("function"===typeof l.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=i,r=u):("function"===typeof l.componentDidMount&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,yl(e,t),c=Eo(n,i=t.memoizedProps),l.props=c,d=t.pendingProps,f=l.context,s=n.contextType,u=Dr,"object"===typeof s&&null!==s&&(u=La(s)),(s="function"===typeof(o=n.getDerivedStateFromProps)||"function"===typeof l.getSnapshotBeforeUpdate)||"function"!==typeof l.UNSAFE_componentWillReceiveProps&&"function"!==typeof l.componentWillReceiveProps||(i!==d||f!==u)&&So(t,l,r,u),gl=!1,f=t.memoizedState,l.state=f,Cl(t,r,l,a),El();var p=t.memoizedState;i!==d||f!==p||gl||null!==e&&null!==e.dependencies&&Oa(e.dependencies)?("function"===typeof o&&(xo(t,n,o,r),p=t.memoizedState),(c=gl||ko(t,n,c,r,f,p,u)||null!==e&&null!==e.dependencies&&Oa(e.dependencies))?(s||"function"!==typeof l.UNSAFE_componentWillUpdate&&"function"!==typeof l.componentWillUpdate||("function"===typeof l.componentWillUpdate&&l.componentWillUpdate(r,p,u),"function"===typeof l.UNSAFE_componentWillUpdate&&l.UNSAFE_componentWillUpdate(r,p,u)),"function"===typeof l.componentDidUpdate&&(t.flags|=4),"function"===typeof l.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof l.componentDidUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof l.getSnapshotBeforeUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),l.props=r,l.state=p,l.context=u,r=c):("function"!==typeof l.componentDidUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof l.getSnapshotBeforeUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return l=r,Wo(e,t),r=0!==(128&t.flags),l||r?(l=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:l.render(),t.flags|=1,null!==e&&r?(t.child=hl(t,e.child,null,a),t.child=hl(t,null,n,a)):Ao(e,t,n,a),t.memoizedState=l.state,e=t.child):e=lu(e,t,a),e}function Qo(e,t,n,r){return xa(),t.flags|=256,Ao(e,t,n,r),t.child}var Go={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yo(e){return{baseLanes:e,cachePool:Xa()}}function Xo(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=Ps),e}function Zo(e,t,n){var r,a=t.pendingProps,l=!1,o=0!==(128&t.flags);if((r=o)||(r=(null===e||null!==e.memoizedState)&&0!==(2&Ml.current)),r&&(l=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(fa){if(l?Al(t):Fl(),(e=da)?null!==(e=null!==(e=Od(e,ha))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==na?{id:ra,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},(n=qr(e)).return=t,t.child=n,ca=t,da=null):e=null,null===e)throw ga(t);return Ld(e)?t.lanes=32:t.lanes=536870912,null}var u=a.children;return a=a.fallback,l?(Fl(),u=eu({mode:"hidden",children:u},l=t.mode),a=Wr(a,l,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,(a=t.child).memoizedState=Yo(n),a.childLanes=Xo(e,r,n),t.memoizedState=Go,Mo(null,a)):(Al(t),Jo(t,u))}var s=e.memoizedState;if(null!==s&&null!==(u=s.dehydrated)){if(o)256&t.flags?(Al(t),t.flags&=-257,t=tu(e,t,n)):null!==t.memoizedState?(Fl(),t.child=e.child,t.flags|=128,t=null):(Fl(),u=a.fallback,l=t.mode,a=eu({mode:"visible",children:a.children},l),(u=Wr(u,l,n,null)).flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,hl(t,e.child,null,n),(a=t.child).memoizedState=Yo(n),a.childLanes=Xo(e,r,n),t.memoizedState=Go,t=Mo(null,a));else if(Al(t),Ld(u)){if(r=u.nextSibling&&u.nextSibling.dataset)var c=r.dgst;r=c,(a=Error(i(419))).stack="",a.digest=r,ka({value:a,source:null,stack:null}),t=tu(e,t,n)}else if(jo||Na(e,t,n,!1),r=0!==(n&e.childLanes),jo||r){if(null!==(r=ms)&&(0!==(a=Re(r,n))&&a!==s.retryLane))throw s.retryLane=a,jr(e,a),Gs(r,e,a),Lo;$d(u)||oc(),t=tu(e,t,n)}else $d(u)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,da=jd(u.nextSibling),ca=t,fa=!0,pa=null,ha=!1,null!==e&&sa(t,e),(t=Jo(t,a.children)).flags|=4096);return t}return l?(Fl(),u=a.fallback,l=t.mode,c=(s=e.child).sibling,(a=Hr(s,{mode:"hidden",children:a.children})).subtreeFlags=65011712&s.subtreeFlags,null!==c?u=Hr(c,u):(u=Wr(u,l,n,null)).flags|=2,u.return=t,a.return=t,a.sibling=u,t.child=a,Mo(null,a),a=t.child,null===(u=e.child.memoizedState)?u=Yo(n):(null!==(l=u.cachePool)?(s=Ia._currentValue,l=l.parent!==s?{parent:s,pool:s}:l):l=Xa(),u={baseLanes:u.baseLanes|n,cachePool:l}),a.memoizedState=u,a.childLanes=Xo(e,r,n),t.memoizedState=Go,Mo(e.child,a)):(Al(t),e=(n=e.child).sibling,(n=Hr(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Jo(e,t){return(t=eu({mode:"visible",children:t},e.mode)).return=e,e.child=t}function eu(e,t){return(e=Ir(22,e,null,t)).lanes=0,e}function tu(e,t,n){return hl(t,e.child,null,n),(e=Jo(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function nu(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Pa(e.return,t,n)}function ru(e,t,n,r,a,l){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a,i.treeForkCount=l)}function au(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;r=r.children;var i=Ml.current,o=0!==(2&i);if(o?(i=1&i|2,t.flags|=128):i&=1,H(Ml,i),Ao(e,t,r,n),r=fa?Jr:0,!o&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&nu(e,n,t);else if(19===e.tag)nu(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===Hl(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ru(t,!1,a,n,l,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Hl(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ru(t,!0,n,null,l,r);break;case"together":ru(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function lu(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Cs|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Na(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Hr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Hr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function iu(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Oa(e))}function ou(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)jo=!0;else{if(!iu(e,n)&&0===(128&t.flags))return jo=!1,function(e,t,n){switch(t.tag){case 3:Q(t,t.stateNode.containerInfo),_a(0,Ia,e.memoizedState.cache),xa();break;case 27:case 5:Y(t);break;case 4:Q(t,t.stateNode.containerInfo);break;case 10:_a(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,Rl(t),null;break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Al(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Zo(e,t,n):(Al(t),null!==(e=lu(e,t,n))?e.sibling:null);Al(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Na(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return au(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),H(Ml,Ml.current),r)break;return null;case 22:return t.lanes=0,Io(e,t,n,t.pendingProps);case 24:_a(0,Ia,e.memoizedState.cache)}return lu(e,t,n)}(e,t,n);jo=0!==(131072&e.flags)}else jo=!1,fa&&0!==(1048576&t.flags)&&ia(t,Jr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=al(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var a=e.$$typeof;if(a===k){t.tag=11,t=Ro(null,t,e,r,n);break e}if(a===C){t.tag=14,t=Do(null,t,e,r,n);break e}}throw t=$(e)||e,Error(i(306,t,""))}Mr(e)?(r=Eo(e,r),t.tag=1,t=Ko(null,t,e,r,n)):(t.tag=0,t=Vo(null,t,e,r,n))}return t;case 0:return Vo(e,t,t.type,t.pendingProps,n);case 1:return Ko(e,t,r=t.type,a=Eo(r,t.pendingProps),n);case 3:e:{if(Q(t,t.stateNode.containerInfo),null===e)throw Error(i(387));r=t.pendingProps;var l=t.memoizedState;a=l.element,yl(e,t),Cl(t,r,null,n);var o=t.memoizedState;if(r=o.cache,_a(0,Ia,r),r!==l.cache&&Ta(t,[Ia],n,!0),El(),r=o.element,l.isDehydrated){if(l={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=l,t.memoizedState=l,256&t.flags){t=Qo(e,t,r,n);break e}if(r!==a){ka(a=Gr(Error(i(424)),t)),t=Qo(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(da=jd(e.firstChild),ca=t,fa=!0,pa=null,ha=!0,n=ml(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(xa(),r===a){t=lu(e,t,n);break e}Ao(e,t,r,n)}t=t.child}return t;case 26:return Wo(e,t),null===e?(n=qd(t.type,null,t.pendingProps,null))?t.memoizedState=n:fa||(n=t.type,e=t.pendingProps,(r=vd(q.current).createElement(n))[Ue]=t,r[Be]=e,pd(r,n,e),tt(r),t.stateNode=r):t.memoizedState=qd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Y(t),null===e&&fa&&(r=t.stateNode=Fd(t.type,t.pendingProps,q.current),ca=t,ha=!0,a=da,zd(t.type)?(Ad=a,da=jd(r.firstChild)):da=a),Ao(e,t,t.pendingProps.children,n),Wo(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&fa&&((a=r=da)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ge])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(l=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(l!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((l=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var l=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===l)return e}if(null===(e=jd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,ha))?(t.stateNode=r,ca=t,da=jd(r.firstChild),ha=!1,a=!0):a=!1),a||ga(t)),Y(t),a=t.type,l=t.pendingProps,o=null!==e?e.memoizedProps:null,r=l.children,xd(a,l)?r=null:null!==o&&xd(a,o)&&(t.flags|=32),null!==t.memoizedState&&(a=ti(e,t,ai,null,null,n),ff._currentValue=a),Wo(e,t),Ao(e,t,r,n),t.child;case 6:return null===e&&fa&&((e=n=da)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=jd(e.nextSibling)))return null}return e}(n,t.pendingProps,ha))?(t.stateNode=n,ca=t,da=null,e=!0):e=!1),e||ga(t)),null;case 13:return Zo(e,t,n);case 4:return Q(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=hl(t,null,r,n):Ao(e,t,r,n),t.child;case 11:return Ro(e,t,t.type,t.pendingProps,n);case 7:return Ao(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ao(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,_a(0,t.type,r.value),Ao(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,$a(t),r=r(a=La(a)),t.flags|=1,Ao(e,t,r,n),t.child;case 14:return Do(e,t,t.type,t.pendingProps,n);case 15:return Fo(e,t,t.type,t.pendingProps,n);case 19:return au(e,t,n);case 31:return function(e,t,n){var r=t.pendingProps,a=0!==(128&t.flags);if(t.flags&=-129,null===e){if(fa){if("hidden"===r.mode)return e=Uo(t,r),t.lanes=536870912,Mo(null,e);if(Rl(t),(e=da)?null!==(e=null!==(e=Od(e,ha))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==na?{id:ra,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},(n=qr(e)).return=t,t.child=n,ca=t,da=null):e=null,null===e)throw ga(t);return t.lanes=536870912,null}return Uo(t,r)}var l=e.memoizedState;if(null!==l){var o=l.dehydrated;if(Rl(t),a)if(256&t.flags)t.flags&=-257,t=Bo(e,t,n);else{if(null===t.memoizedState)throw Error(i(558));t.child=e.child,t.flags|=128,t=null}else if(jo||Na(e,t,n,!1),a=0!==(n&e.childLanes),jo||a){if(null!==(r=ms)&&0!==(o=Re(r,n))&&o!==l.retryLane)throw l.retryLane=o,jr(e,o),Gs(r,e,o),Lo;oc(),t=Bo(e,t,n)}else e=l.treeContext,da=jd(o.nextSibling),ca=t,fa=!0,pa=null,ha=!1,null!==e&&sa(t,e),(t=Uo(t,r)).flags|=4096;return t}return(e=Hr(e.child,{mode:r.mode,children:r.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return Io(e,t,n,t.pendingProps);case 24:return $a(t),r=La(Ia),null===e?(null===(a=Ga())&&(a=ms,l=Ma(),a.pooledCache=l,l.refCount++,null!==l&&(a.pooledCacheLanes|=n),a=l),t.memoizedState={parent:r,cache:a},vl(t),_a(0,Ia,a)):(0!==(e.lanes&n)&&(yl(e,t),Cl(t,null,null,n),El()),a=e.memoizedState,l=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),_a(0,Ia,r)):(r=l.cache,_a(0,Ia,r),r!==a.cache&&Ta(t,[Ia],n,!0))),Ao(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function uu(e){e.flags|=4}function su(e,t,n,r,a){if((t=0!==(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&a)===a)if(e.stateNode.complete)e.flags|=8192;else{if(!ac())throw ll=tl,Ja;e.flags|=8192}}else e.flags&=-16777217}function cu(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!lf(t)){if(!ac())throw ll=tl,Ja;e.flags|=8192}}function du(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Oe():536870912,e.lanes|=t,Ts|=t)}function fu(e,t){if(!fa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pu(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hu(e,t,n){var r=t.pendingProps;switch(ua(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return pu(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),za(Ia),G(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ba(t)?uu(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,wa())),pu(t),null;case 26:var a=t.type,l=t.memoizedState;return null===e?(uu(t),null!==l?(pu(t),cu(t,l)):(pu(t),su(t,a,0,0,n))):l?l!==e.memoizedState?(uu(t),pu(t),cu(t,l)):(pu(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&uu(t),pu(t),su(t,a,0,0,n)),null;case 27:if(X(t),n=q.current,a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&uu(t);else{if(!r){if(null===t.stateNode)throw Error(i(166));return pu(t),null}e=W.current,ba(t)?va(t):(e=Fd(a,r,n),t.stateNode=e,uu(t))}return pu(t),null;case 5:if(X(t),a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&uu(t);else{if(!r){if(null===t.stateNode)throw Error(i(166));return pu(t),null}if(l=W.current,ba(t))va(t);else{var o=vd(q.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":(l=o.createElement("div")).innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l="string"===typeof r.is?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?l.multiple=!0:r.size&&(l.size=r.size);break;default:l="string"===typeof r.is?o.createElement(a,{is:r.is}):o.createElement(a)}}l[Ue]=t,l[Be]=r;e:for(o=t.child;null!==o;){if(5===o.tag||6===o.tag)l.appendChild(o.stateNode);else if(4!==o.tag&&27!==o.tag&&null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;null===o.sibling;){if(null===o.return||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=l;e:switch(pd(l,a,r),a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&uu(t)}}return pu(t),su(t,t.type,null===e||e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&uu(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(e=q.current,ba(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=ca))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ue]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||cd(e.nodeValue,n)))||ga(t,!0)}else(e=vd(e).createTextNode(r))[Ue]=t,t.stateNode=e}return pu(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=ba(t),null!==n){if(null===e){if(!r)throw Error(i(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(i(557));e[Ue]=t}else xa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;pu(t),e=!1}else n=wa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(Il(t),t):(Il(t),null);if(0!==(128&t.flags))throw Error(i(558))}return pu(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=ba(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[Ue]=t}else xa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;pu(t),a=!1}else a=wa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return 256&t.flags?(Il(t),t):(Il(t),null)}return Il(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool),l=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),du(t,t.updateQueue),pu(t),null);case 4:return G(),null===e&&ed(t.stateNode.containerInfo),pu(t),null;case 10:return za(t.type),pu(t),null;case 19:if(M(Ml),null===(r=t.memoizedState))return pu(t),null;if(a=0!==(128&t.flags),null===(l=r.rendering))if(a)fu(r,!1);else{if(0!==Es||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=Hl(e))){for(t.flags|=128,fu(r,!1),e=l.updateQueue,t.updateQueue=e,du(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Ur(n,e),n=n.sibling;return H(Ml,1&Ml.current|2),fa&&la(t,r.treeForkCount),t.child}e=e.sibling}null!==r.tail&&ue()>As&&(t.flags|=128,a=!0,fu(r,!1),t.lanes=4194304)}else{if(!a)if(null!==(e=Hl(l))){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,du(t,e),fu(r,!0),null===r.tail&&"hidden"===r.tailMode&&!l.alternate&&!fa)return pu(t),null}else 2*ue()-r.renderingStartTime>As&&536870912!==n&&(t.flags|=128,a=!0,fu(r,!1),t.lanes=4194304);r.isBackwards?(l.sibling=t.child,t.child=l):(null!==(e=r.last)?e.sibling=l:t.child=l,r.last=l)}return null!==r.tail?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ue(),e.sibling=null,n=Ml.current,H(Ml,a?1&n|2:1&n),fa&&la(t,r.treeForkCount),e):(pu(t),null);case 22:case 23:return Il(t),$l(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(pu(t),6&t.subtreeFlags&&(t.flags|=8192)):pu(t),null!==(n=t.updateQueue)&&du(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&M(Qa),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),za(Ia),pu(t),null;case 25:case 30:return null}throw Error(i(156,t.tag))}function mu(e,t){switch(ua(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return za(Ia),G(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return X(t),null;case 31:if(null!==t.memoizedState){if(Il(t),null===t.alternate)throw Error(i(340));xa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(Il(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));xa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return M(Ml),null;case 4:return G(),null;case 10:return za(t.type),null;case 22:case 23:return Il(t),$l(),null!==e&&M(Qa),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return za(Ia),null;default:return null}}function gu(e,t){switch(ua(t),t.tag){case 3:za(Ia),G();break;case 26:case 27:case 5:X(t);break;case 4:G();break;case 31:null!==t.memoizedState&&Il(t);break;case 13:Il(t);break;case 19:M(Ml);break;case 10:za(t.type);break;case 22:case 23:Il(t),$l(),null!==e&&M(Qa);break;case 24:za(Ia)}}function vu(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var l=n.create,i=n.inst;r=l(),i.destroy=r}n=n.next}while(n!==a)}}catch(o){Ec(t,t.return,o)}}function yu(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var l=a.next;r=l;do{if((r.tag&e)===e){var i=r.inst,o=i.destroy;if(void 0!==o){i.destroy=void 0,a=t;var u=n,s=o;try{s()}catch(c){Ec(a,u,c)}}}r=r.next}while(r!==l)}}catch(c){Ec(t,t.return,c)}}function bu(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{zl(t,n)}catch(r){Ec(e,e.return,r)}}}function xu(e,t,n){n.props=Eo(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Ec(e,t,r)}}function wu(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(a){Ec(e,t,a)}}function ku(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){Ec(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(l){Ec(e,t,l)}else n.current=null}function Su(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){Ec(e,e.return,a)}}function Eu(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,l=null,o=null,u=null,s=null,c=null,d=null;for(h in n){var f=n[h];if(n.hasOwnProperty(h)&&null!=f)switch(h){case"checked":case"value":break;case"defaultValue":s=f;default:r.hasOwnProperty(h)||dd(e,t,h,null,r,f)}}for(var p in r){var h=r[p];if(f=n[p],r.hasOwnProperty(p)&&(null!=h||null!=f))switch(p){case"type":l=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":d=h;break;case"value":o=h;break;case"defaultValue":u=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(i(137,t));break;default:h!==f&&dd(e,t,p,h,r,f)}}return void bt(e,o,u,s,c,d,l,a);case"select":for(l in h=o=u=p=null,n)if(s=n[l],n.hasOwnProperty(l)&&null!=s)switch(l){case"value":break;case"multiple":h=s;default:r.hasOwnProperty(l)||dd(e,t,l,null,r,s)}for(a in r)if(l=r[a],s=n[a],r.hasOwnProperty(a)&&(null!=l||null!=s))switch(a){case"value":p=l;break;case"defaultValue":u=l;break;case"multiple":o=l;default:l!==s&&dd(e,t,a,l,r,s)}return t=u,n=o,r=h,void(null!=p?kt(e,!!n,p,!1):!!r!==!!n&&(null!=t?kt(e,!!n,t,!0):kt(e,!!n,n?[]:"",!1)));case"textarea":for(u in h=p=null,n)if(a=n[u],n.hasOwnProperty(u)&&null!=a&&!r.hasOwnProperty(u))switch(u){case"value":case"children":break;default:dd(e,t,u,null,r,a)}for(o in r)if(a=r[o],l=n[o],r.hasOwnProperty(o)&&(null!=a||null!=l))switch(o){case"value":p=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(i(91));break;default:a!==l&&dd(e,t,o,a,r,l)}return void St(e,p,h);case"option":for(var m in n)if(p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else dd(e,t,m,null,r,p);for(s in r)if(p=r[s],h=n[s],r.hasOwnProperty(s)&&p!==h&&(null!=p||null!=h))if("selected"===s)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else dd(e,t,s,p,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g)&&dd(e,t,g,null,r,p);for(c in r)if(p=r[c],h=n[c],r.hasOwnProperty(c)&&p!==h&&(null!=p||null!=h))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(i(137,t));break;default:dd(e,t,c,p,r,h)}return;default:if(Tt(t)){for(var v in n)p=n[v],n.hasOwnProperty(v)&&void 0!==p&&!r.hasOwnProperty(v)&&fd(e,t,v,void 0,r,p);for(d in r)p=r[d],h=n[d],!r.hasOwnProperty(d)||p===h||void 0===p&&void 0===h||fd(e,t,d,p,r,h);return}}for(var y in n)p=n[y],n.hasOwnProperty(y)&&null!=p&&!r.hasOwnProperty(y)&&dd(e,t,y,null,r,p);for(f in r)p=r[f],h=n[f],!r.hasOwnProperty(f)||p===h||null==p&&null==h||dd(e,t,f,p,r,h)}(r,e.type,n,t),r[Be]=t}catch(a){Ec(e,e.return,a)}}function Cu(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&zd(e.type)||4===e.tag}function _u(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Cu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&zd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function zu(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Lt));else if(4!==r&&(27===r&&zd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(zu(e,t,n),e=e.sibling;null!==e;)zu(e,t,n),e=e.sibling}function Pu(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&zd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(Pu(e,t,n),e=e.sibling;null!==e;)Pu(e,t,n),e=e.sibling}function Tu(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);pd(t,r,n),t[Ue]=e,t[Be]=n}catch(l){Ec(e,e.return,l)}}var Nu=!1,Ou=!1,$u=!1,Lu="function"===typeof WeakSet?WeakSet:Set,ju=null;function Au(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Gu(e,n),4&r&&vu(5,n);break;case 1:if(Gu(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(i){Ec(n,n.return,i)}else{var a=Eo(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Ec(n,n.return,o)}}64&r&&bu(n),512&r&&wu(n,n.return);break;case 3:if(Gu(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{zl(e,t)}catch(i){Ec(n,n.return,i)}}break;case 27:null===t&&4&r&&Tu(n);case 26:case 5:Gu(e,n),null===t&&4&r&&Su(n),512&r&&wu(n,n.return);break;case 12:Gu(e,n);break;case 31:Gu(e,n),4&r&&Hu(e,n);break;case 13:Gu(e,n),4&r&&Uu(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=Pc.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||Nu)){t=null!==t&&null!==t.memoizedState||Ou,a=Nu;var l=Ou;Nu=r,(Ou=t)&&!l?Xu(e,n,0!==(8772&n.subtreeFlags)):Gu(e,n),Nu=a,Ou=l}break;case 30:break;default:Gu(e,n)}}function Ru(e){var t=e.alternate;null!==t&&(e.alternate=null,Ru(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ye(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Du=null,Fu=!1;function Iu(e,t,n){for(n=n.child;null!==n;)Mu(e,t,n),n=n.sibling}function Mu(e,t,n){if(ye&&"function"===typeof ye.onCommitFiberUnmount)try{ye.onCommitFiberUnmount(ve,n)}catch(l){}switch(n.tag){case 26:Ou||ku(n,t),Iu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:Ou||ku(n,t);var r=Du,a=Fu;zd(n.type)&&(Du=n.stateNode,Fu=!1),Iu(e,t,n),Id(n.stateNode),Du=r,Fu=a;break;case 5:Ou||ku(n,t);case 6:if(r=Du,a=Fu,Du=null,Iu(e,t,n),Fu=a,null!==(Du=r))if(Fu)try{(9===Du.nodeType?Du.body:"HTML"===Du.nodeName?Du.ownerDocument.body:Du).removeChild(n.stateNode)}catch(i){Ec(n,t,i)}else try{Du.removeChild(n.stateNode)}catch(i){Ec(n,t,i)}break;case 18:null!==Du&&(Fu?(Pd(9===(e=Du).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),qf(e)):Pd(Du,n.stateNode));break;case 4:r=Du,a=Fu,Du=n.stateNode.containerInfo,Fu=!0,Iu(e,t,n),Du=r,Fu=a;break;case 0:case 11:case 14:case 15:yu(2,n,t),Ou||yu(4,n,t),Iu(e,t,n);break;case 1:Ou||(ku(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&xu(n,t,r)),Iu(e,t,n);break;case 21:Iu(e,t,n);break;case 22:Ou=(r=Ou)||null!==n.memoizedState,Iu(e,t,n),Ou=r;break;default:Iu(e,t,n)}}function Hu(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{qf(e)}catch(n){Ec(t,t.return,n)}}}function Uu(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{qf(e)}catch(n){Ec(t,t.return,n)}}function Bu(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Lu),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Lu),t;default:throw Error(i(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Tc.bind(null,e,t);t.then(r,r)}})}function Wu(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],l=e,o=t,u=o;e:for(;null!==u;){switch(u.tag){case 27:if(zd(u.type)){Du=u.stateNode,Fu=!1;break e}break;case 5:Du=u.stateNode,Fu=!1;break e;case 3:case 4:Du=u.stateNode.containerInfo,Fu=!0;break e}u=u.return}if(null===Du)throw Error(i(160));Mu(l,o,a),Du=null,Fu=!1,null!==(l=a.alternate)&&(l.return=null),a.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)qu(t,e),t=t.sibling}var Vu=null;function qu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wu(t,e),Ku(e),4&r&&(yu(3,e,e.return),vu(3,e),yu(5,e,e.return));break;case 1:Wu(t,e),Ku(e),512&r&&(Ou||null===n||ku(n,n.return)),64&r&&Nu&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=Vu;if(Wu(t,e),Ku(e),512&r&&(Ou||null===n||ku(n,n.return)),4&r){var l=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(l=a.getElementsByTagName("title")[0])||l[Ge]||l[Ue]||"http://www.w3.org/2000/svg"===l.namespaceURI||l.hasAttribute("itemprop"))&&(l=a.createElement(r),a.head.insertBefore(l,a.querySelector("head > title"))),pd(l,r,n),l[Ue]=e,tt(l),r=l;break e;case"link":var o=rf("link","href",a).get(r+(n.href||""));if(o)for(var u=0;u<o.length;u++)if((l=o[u]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&l.getAttribute("rel")===(null==n.rel?null:n.rel)&&l.getAttribute("title")===(null==n.title?null:n.title)&&l.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){o.splice(u,1);break t}pd(l=a.createElement(r),r,n),a.head.appendChild(l);break;case"meta":if(o=rf("meta","content",a).get(r+(n.content||"")))for(u=0;u<o.length;u++)if((l=o[u]).getAttribute("content")===(null==n.content?null:""+n.content)&&l.getAttribute("name")===(null==n.name?null:n.name)&&l.getAttribute("property")===(null==n.property?null:n.property)&&l.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&l.getAttribute("charset")===(null==n.charSet?null:n.charSet)){o.splice(u,1);break t}pd(l=a.createElement(r),r,n),a.head.appendChild(l);break;default:throw Error(i(468,r))}l[Ue]=e,tt(l),r=l}e.stateNode=r}else af(a,e.type,e.stateNode);else e.stateNode=Zd(a,r,e.memoizedProps);else l!==r?(null===l?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):l.count--,null===r?af(a,e.type,e.stateNode):Zd(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&Eu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Wu(t,e),Ku(e),512&r&&(Ou||null===n||ku(n,n.return)),null!==n&&4&r&&Eu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Wu(t,e),Ku(e),512&r&&(Ou||null===n||ku(n,n.return)),32&e.flags){a=e.stateNode;try{Ct(a,"")}catch(m){Ec(e,e.return,m)}}4&r&&null!=e.stateNode&&Eu(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&($u=!0);break;case 6:if(Wu(t,e),Ku(e),4&r){if(null===e.stateNode)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(m){Ec(e,e.return,m)}}break;case 3:if(nf=null,a=Vu,Vu=Ud(t.containerInfo),Wu(t,e),Vu=a,Ku(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{qf(t.containerInfo)}catch(m){Ec(e,e.return,m)}$u&&($u=!1,Qu(e));break;case 4:r=Vu,Vu=Ud(e.stateNode.containerInfo),Wu(t,e),Ku(e),Vu=r;break;case 12:default:Wu(t,e),Ku(e);break;case 31:case 19:Wu(t,e),Ku(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Bu(e,r)));break;case 13:Wu(t,e),Ku(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(Ls=ue()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Bu(e,r)));break;case 22:a=null!==e.memoizedState;var s=null!==n&&null!==n.memoizedState,c=Nu,d=Ou;if(Nu=c||a,Ou=d||s,Wu(t,e),Ou=d,Nu=c,Ku(e),8192&r)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===n||s||Nu||Ou||Yu(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){s=n=t;try{if(l=s.stateNode,a)"function"===typeof(o=l.style).setProperty?o.setProperty("display","none","important"):o.display="none";else{u=s.stateNode;var f=s.memoizedProps.style,p=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null;u.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(m){Ec(s,s.return,m)}}}else if(6===t.tag){if(null===n){s=t;try{s.stateNode.nodeValue=a?"":s.memoizedProps}catch(m){Ec(s,s.return,m)}}}else if(18===t.tag){if(null===n){s=t;try{var h=s.stateNode;a?Td(h,!0):Td(s.stateNode,!1)}catch(m){Ec(s,s.return,m)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Bu(e,n))));case 30:case 21:}}function Ku(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(Cu(r)){n=r;break}r=r.return}if(null==n)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Pu(e,_u(e),a);break;case 5:var l=n.stateNode;32&n.flags&&(Ct(l,""),n.flags&=-33),Pu(e,_u(e),l);break;case 3:case 4:var o=n.stateNode.containerInfo;zu(e,_u(e),o);break;default:throw Error(i(161))}}catch(u){Ec(e,e.return,u)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Qu(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Qu(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Gu(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Au(e,t.alternate,t),t=t.sibling}function Yu(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:yu(4,t,t.return),Yu(t);break;case 1:ku(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&xu(t,t.return,n),Yu(t);break;case 27:Id(t.stateNode);case 26:case 5:ku(t,t.return),Yu(t);break;case 22:null===t.memoizedState&&Yu(t);break;default:Yu(t)}e=e.sibling}}function Xu(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,l=t,i=l.flags;switch(l.tag){case 0:case 11:case 15:Xu(a,l,n),vu(4,l);break;case 1:if(Xu(a,l,n),"function"===typeof(a=(r=l).stateNode).componentDidMount)try{a.componentDidMount()}catch(s){Ec(r,r.return,s)}if(null!==(a=(r=l).updateQueue)){var o=r.stateNode;try{var u=a.shared.hiddenCallbacks;if(null!==u)for(a.shared.hiddenCallbacks=null,a=0;a<u.length;a++)_l(u[a],o)}catch(s){Ec(r,r.return,s)}}n&&64&i&&bu(l),wu(l,l.return);break;case 27:Tu(l);case 26:case 5:Xu(a,l,n),n&&null===r&&4&i&&Su(l),wu(l,l.return);break;case 12:Xu(a,l,n);break;case 31:Xu(a,l,n),n&&4&i&&Hu(a,l);break;case 13:Xu(a,l,n),n&&4&i&&Uu(a,l);break;case 22:null===l.memoizedState&&Xu(a,l,n),wu(l,l.return);break;case 30:break;default:Xu(a,l,n)}t=t.sibling}}function Zu(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ha(n))}function Ju(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ha(e))}function es(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)ts(e,t,n,r),t=t.sibling}function ts(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:es(e,t,n,r),2048&a&&vu(9,t);break;case 1:case 31:case 13:default:es(e,t,n,r);break;case 3:es(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ha(e)));break;case 12:if(2048&a){es(e,t,n,r),e=t.stateNode;try{var l=t.memoizedProps,i=l.id,o=l.onPostCommit;"function"===typeof o&&o(i,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(u){Ec(t,t.return,u)}}else es(e,t,n,r);break;case 23:break;case 22:l=t.stateNode,i=t.alternate,null!==t.memoizedState?2&l._visibility?es(e,t,n,r):rs(e,t):2&l._visibility?es(e,t,n,r):(l._visibility|=2,ns(e,t,n,r,0!==(10256&t.subtreeFlags)||!1)),2048&a&&Zu(i,t);break;case 24:es(e,t,n,r),2048&a&&Ju(t.alternate,t)}}function ns(e,t,n,r,a){for(a=a&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var l=e,i=t,o=n,u=r,s=i.flags;switch(i.tag){case 0:case 11:case 15:ns(l,i,o,u,a),vu(8,i);break;case 23:break;case 22:var c=i.stateNode;null!==i.memoizedState?2&c._visibility?ns(l,i,o,u,a):rs(l,i):(c._visibility|=2,ns(l,i,o,u,a)),a&&2048&s&&Zu(i.alternate,i);break;case 24:ns(l,i,o,u,a),a&&2048&s&&Ju(i.alternate,i);break;default:ns(l,i,o,u,a)}t=t.sibling}}function rs(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:rs(n,r),2048&a&&Zu(r.alternate,r);break;case 24:rs(n,r),2048&a&&Ju(r.alternate,r);break;default:rs(n,r)}t=t.sibling}}var as=8192;function ls(e,t,n){if(e.subtreeFlags&as)for(e=e.child;null!==e;)is(e,t,n),e=e.sibling}function is(e,t,n){switch(e.tag){case 26:ls(e,t,n),e.flags&as&&null!==e.memoizedState&&function(e,t,n,r){if("stylesheet"===n.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var a=Kd(r.href),l=t.querySelector(Qd(a));if(l)return null!==(t=l._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=uf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=l,void tt(l);l=t.ownerDocument||t,r=Gd(r),(a=Md.get(a))&&ef(r,a),tt(l=l.createElement("link"));var i=l;i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),pd(l,"link",r),n.instance=l}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=uf.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,Vu,e.memoizedState,e.memoizedProps);break;case 5:default:ls(e,t,n);break;case 3:case 4:var r=Vu;Vu=Ud(e.stateNode.containerInfo),ls(e,t,n),Vu=r;break;case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=as,as=16777216,ls(e,t,n),as=r):ls(e,t,n))}}function os(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function us(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ju=r,ds(r,e)}os(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)ss(e),e=e.sibling}function ss(e){switch(e.tag){case 0:case 11:case 15:us(e),2048&e.flags&&yu(9,e,e.return);break;case 3:case 12:default:us(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,cs(e)):us(e)}}function cs(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ju=r,ds(r,e)}os(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:yu(8,t,t.return),cs(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,cs(t));break;default:cs(t)}e=e.sibling}}function ds(e,t){for(;null!==ju;){var n=ju;switch(n.tag){case 0:case 11:case 15:yu(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Ha(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,ju=r;else e:for(n=e;null!==ju;){var a=(r=ju).sibling,l=r.return;if(Ru(r),r===n){ju=null;break e}if(null!==a){a.return=l,ju=a;break e}ju=l}}}var fs={getCacheForType:function(e){var t=La(Ia),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return La(Ia).controller.signal}},ps="function"===typeof WeakMap?WeakMap:Map,hs=0,ms=null,gs=null,vs=0,ys=0,bs=null,xs=!1,ws=!1,ks=!1,Ss=0,Es=0,Cs=0,_s=0,zs=0,Ps=0,Ts=0,Ns=null,Os=null,$s=!1,Ls=0,js=0,As=1/0,Rs=null,Ds=null,Fs=0,Is=null,Ms=null,Hs=0,Us=0,Bs=null,Ws=null,Vs=0,qs=null;function Ks(){return 0!==(2&hs)&&0!==vs?vs&-vs:null!==j.T?Bc():Ie()}function Qs(){if(0===Ps)if(0===(536870912&vs)||fa){var e=Ee;0===(3932160&(Ee<<=1))&&(Ee=262144),Ps=e}else Ps=536870912;return null!==(e=Ll.current)&&(e.flags|=32),Ps}function Gs(e,t,n){(e!==ms||2!==ys&&9!==ys)&&null===e.cancelPendingCommit||(nc(e,0),Js(e,vs,Ps,!1)),Le(e,n),0!==(2&hs)&&e===ms||(e===ms&&(0===(2&hs)&&(_s|=n),4===Es&&Js(e,vs,Ps,!1)),Rc(e))}function Ys(e,t,n){if(0!==(6&hs))throw Error(i(327));for(var r=!n&&0===(127&t)&&0===(t&e.expiredLanes)||Te(e,t),a=r?function(e,t){var n=hs;hs|=2;var r=lc(),a=ic();ms!==e||vs!==t?(Rs=null,As=ue()+500,nc(e,t)):ws=Te(e,t);e:for(;;)try{if(0!==ys&&null!==gs){t=gs;var l=bs;t:switch(ys){case 1:ys=0,bs=null,pc(e,t,l,1);break;case 2:case 9:if(nl(l)){ys=0,bs=null,fc(t);break}t=function(){2!==ys&&9!==ys||ms!==e||(ys=7),Rc(e)},l.then(t,t);break e;case 3:ys=7;break e;case 4:ys=5;break e;case 7:nl(l)?(ys=0,bs=null,fc(t)):(ys=0,bs=null,pc(e,t,l,7));break;case 5:var o=null;switch(gs.tag){case 26:o=gs.memoizedState;case 5:case 27:var u=gs;if(o?lf(o):u.stateNode.complete){ys=0,bs=null;var s=u.sibling;if(null!==s)gs=s;else{var c=u.return;null!==c?(gs=c,hc(c)):gs=null}break t}}ys=0,bs=null,pc(e,t,l,5);break;case 6:ys=0,bs=null,pc(e,t,l,6);break;case 8:tc(),Es=6;break e;default:throw Error(i(462))}}cc();break}catch(d){rc(e,d)}return Ca=Ea=null,j.H=r,j.A=a,hs=n,null!==gs?0:(ms=null,vs=0,Or(),Es)}(e,t):uc(e,t,!0),l=r;;){if(0===a){ws&&!r&&Js(e,t,0,!1);break}if(n=e.current.alternate,!l||Zs(n)){if(2===a){if(l=t,e.errorRecoveryDisabledLanes&l)var o=0;else o=0!==(o=-536870913&e.pendingLanes)?o:536870912&o?536870912:0;if(0!==o){t=o;e:{var u=e;a=Ns;var s=u.current.memoizedState.isDehydrated;if(s&&(nc(u,o).flags|=256),2!==(o=uc(u,o,!1))){if(ks&&!s){u.errorRecoveryDisabledLanes|=l,_s|=l,a=4;break e}l=Os,Os=a,null!==l&&(null===Os?Os=l:Os.push.apply(Os,l))}a=o}if(l=!1,2!==a)continue}}if(1===a){nc(e,0),Js(e,t,0,!0);break}e:{switch(r=e,l=a){case 0:case 1:throw Error(i(345));case 4:if((4194048&t)!==t)break;case 6:Js(r,t,Ps,!xs);break e;case 2:Os=null;break;case 3:case 5:break;default:throw Error(i(329))}if((62914560&t)===t&&10<(a=Ls+300-ue())){if(Js(r,t,Ps,!xs),0!==Pe(r,0,!0))break e;Hs=t,r.timeoutHandle=kd(Xs.bind(null,r,n,Os,Rs,$s,t,Ps,_s,Ts,xs,l,"Throttled",-0,0),a)}else Xs(r,n,Os,Rs,$s,t,Ps,_s,Ts,xs,l,null,-0,0)}break}a=uc(e,t,!1),l=!1}Rc(e)}function Xs(e,t,n,r,a,l,i,o,u,s,c,d,f,p){if(e.timeoutHandle=-1,8192&(d=t.subtreeFlags)||16785408===(16785408&d)){is(t,l,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Lt});var h=(62914560&l)===l?Ls-ue():(4194048&l)===l?js-ue():0;if(null!==(h=function(e,t){return e.stylesheets&&0===e.count&&cf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&cf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&0===of&&(of=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var a=n[r],l=a.transferSize,i=a.initiatorType,o=a.duration;if(l&&o&&hd(i)){for(i=0,o=a.responseEnd,r+=1;r<n.length;r++){var u=n[r],s=u.startTime;if(s>o)break;var c=u.transferSize,d=u.initiatorType;c&&hd(d)&&(i+=c*((u=u.responseEnd)<o?1:(o-s)/(u-s)))}if(--r,t+=8*(l+i)/(a.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"===typeof(e=navigator.connection.downlink)?e:5}());var a=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&cf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>of?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(a)}}:null}(d,h)))return Hs=l,e.cancelPendingCommit=h(gc.bind(null,e,t,l,n,r,a,i,o,u,c,d,null,f,p)),void Js(e,l,i,!s)}gc(e,t,l,n,r,a,i,o,u)}function Zs(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!Jn(l(),a))return!1}catch(i){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Js(e,t,n,r){t&=~zs,t&=~_s,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var l=31-xe(a),i=1<<l;r[l]=-1,a&=~i}0!==n&&je(e,n,t)}function ec(){return 0!==(6&hs)||(Dc(0,!1),!1)}function tc(){if(null!==gs){if(0===ys)var e=gs.return;else Ca=Ea=null,oi(e=gs),ul=null,sl=0,e=gs;for(;null!==e;)gu(e.alternate,e),e=e.return;gs=null}}function nc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,Sd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Hs=0,tc(),ms=e,gs=n=Hr(e.current,null),vs=t,ys=0,bs=null,xs=!1,ws=Te(e,t),ks=!1,Ts=Ps=zs=_s=Cs=Es=0,Os=Ns=null,$s=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-xe(r),l=1<<a;t|=e[a],r&=~l}return Ss=t,Or(),n}function rc(e,t){Bl=null,j.H=go,t===Za||t===el?(t=il(),ys=3):t===Ja?(t=il(),ys=4):ys=t===Lo?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,bs=t,null===gs&&(Es=1,Po(e,Gr(t,e.current)))}function ac(){var e=Ll.current;return null===e||((4194048&vs)===vs?null===jl:((62914560&vs)===vs||0!==(536870912&vs))&&e===jl)}function lc(){var e=j.H;return j.H=go,null===e?go:e}function ic(){var e=j.A;return j.A=fs,e}function oc(){Es=4,xs||(4194048&vs)!==vs&&null!==Ll.current||(ws=!0),0===(134217727&Cs)&&0===(134217727&_s)||null===ms||Js(ms,vs,Ps,!1)}function uc(e,t,n){var r=hs;hs|=2;var a=lc(),l=ic();ms===e&&vs===t||(Rs=null,nc(e,t)),t=!1;var i=Es;e:for(;;)try{if(0!==ys&&null!==gs){var o=gs,u=bs;switch(ys){case 8:tc(),i=6;break e;case 3:case 2:case 9:case 6:null===Ll.current&&(t=!0);var s=ys;if(ys=0,bs=null,pc(e,o,u,s),n&&ws){i=0;break e}break;default:s=ys,ys=0,bs=null,pc(e,o,u,s)}}sc(),i=Es;break}catch(c){rc(e,c)}return t&&e.shellSuspendCounter++,Ca=Ea=null,hs=r,j.H=a,j.A=l,null===gs&&(ms=null,vs=0,Or()),i}function sc(){for(;null!==gs;)dc(gs)}function cc(){for(;null!==gs&&!ie();)dc(gs)}function dc(e){var t=ou(e.alternate,e,Ss);e.memoizedProps=e.pendingProps,null===t?hc(e):gs=t}function fc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=qo(n,t,t.pendingProps,t.type,void 0,vs);break;case 11:t=qo(n,t,t.pendingProps,t.type.render,t.ref,vs);break;case 5:oi(t);default:gu(n,t),t=ou(n,t=gs=Ur(t,Ss),Ss)}e.memoizedProps=e.pendingProps,null===t?hc(e):gs=t}function pc(e,t,n,r){Ca=Ea=null,oi(t),ul=null,sl=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Na(t,n,a,!0),null!==(n=Ll.current)){switch(n.tag){case 31:case 13:return null===jl?oc():null===n.alternate&&0===Es&&(Es=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===tl?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),Cc(e,r,a)),!1;case 22:return n.flags|=65536,r===tl?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),Cc(e,r,a)),!1}throw Error(i(435,n.tag))}return Cc(e,r,a),oc(),!1}if(fa)return null!==(t=Ll.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ma&&ka(Gr(e=Error(i(422),{cause:r}),n))):(r!==ma&&ka(Gr(t=Error(i(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=Gr(r,n),kl(e,a=No(e.stateNode,r,a)),4!==Es&&(Es=2)),!1;var l=Error(i(520),{cause:r});if(l=Gr(l,n),null===Ns?Ns=[l]:Ns.push(l),4!==Es&&(Es=2),null===t)return!0;r=Gr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,kl(n,e=No(n.stateNode,r,e)),!1;case 1:if(t=n.type,l=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==l&&"function"===typeof l.componentDidCatch&&(null===Ds||!Ds.has(l))))return n.flags|=65536,a&=-a,n.lanes|=a,$o(a=Oo(a),e,n,r),kl(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,vs))return Es=1,Po(e,Gr(n,e.current)),void(gs=null)}catch(l){if(null!==a)throw gs=a,l;return Es=1,Po(e,Gr(n,e.current)),void(gs=null)}32768&t.flags?(fa||1===r?e=!0:ws||0!==(536870912&vs)?e=!1:(xs=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=Ll.current)&&13===r.tag&&(r.flags|=16384))),mc(t,e)):hc(t)}function hc(e){var t=e;do{if(0!==(32768&t.flags))return void mc(t,xs);e=t.return;var n=hu(t.alternate,t,Ss);if(null!==n)return void(gs=n);if(null!==(t=t.sibling))return void(gs=t);gs=t=e}while(null!==t);0===Es&&(Es=5)}function mc(e,t){do{var n=mu(e.alternate,e);if(null!==n)return n.flags&=32767,void(gs=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(gs=e);gs=e=n}while(null!==e);Es=6,gs=null}function gc(e,t,n,r,a,l,o,u,s){e.cancelPendingCommit=null;do{wc()}while(0!==Fs);if(0!==(6&hs))throw Error(i(327));if(null!==t){if(t===e.current)throw Error(i(177));if(l=t.lanes|t.childLanes,function(e,t,n,r,a,l){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,u=e.expirationTimes,s=e.hiddenUpdates;for(n=i&~n;0<n;){var c=31-xe(n),d=1<<c;o[c]=0,u[c]=-1;var f=s[c];if(null!==f)for(s[c]=null,c=0;c<f.length;c++){var p=f[c];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&je(e,r,0),0!==l&&0===a&&0!==e.tag&&(e.suspendedLanes|=l&~(i&~t))}(e,n,l|=Nr,o,u,s),e===ms&&(gs=ms=null,vs=0),Ms=t,Is=e,Hs=n,Us=l,Bs=a,Ws=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,ae(fe,function(){return kc(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=j.T,j.T=null,a=A.p,A.p=2,o=hs,hs|=4;try{!function(e,t){if(e=e.containerInfo,md=wf,lr(e=ar(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch(g){n=null;break e}var o=0,u=-1,s=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(u=o+a),f!==l||0!==r&&3!==f.nodeType||(s=o+r),3===f.nodeType&&(o+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(u=o),p===l&&++d===r&&(s=o),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===u||-1===s?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(gd={focusedElem:e,selectionRange:n},wf=!1,ju=t;null!==ju;)if(e=(t=ju).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,ju=e;else for(;null!==ju;){switch(l=(t=ju).alternate,e=t.flags,t.tag){case 0:if(0!==(4&e)&&null!==(e=null!==(e=t.updateQueue)?e.events:null))for(n=0;n<e.length;n++)(a=e[n]).ref.impl=a.nextImpl;break;case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==l){e=void 0,n=t,a=l.memoizedProps,l=l.memoizedState,r=n.stateNode;try{var m=Eo(n.type,a);e=r.getSnapshotBeforeUpdate(m,l),r.__reactInternalSnapshotBeforeUpdate=e}catch(v){Ec(n,n.return,v)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))Nd(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nd(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(i(163))}if(null!==(e=t.sibling)){e.return=t.return,ju=e;break}ju=t.return}}(e,t)}finally{hs=o,A.p=a,j.T=r}}Fs=1,vc(),yc(),bc()}}function vc(){if(1===Fs){Fs=0;var e=Is,t=Ms,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=j.T,j.T=null;var r=A.p;A.p=2;var a=hs;hs|=4;try{qu(t,e);var l=gd,i=ar(e.containerInfo),o=l.focusedElem,u=l.selectionRange;if(i!==o&&o&&o.ownerDocument&&rr(o.ownerDocument.documentElement,o)){if(null!==u&&lr(o)){var s=u.start,c=u.end;if(void 0===c&&(c=s),"selectionStart"in o)o.selectionStart=s,o.selectionEnd=Math.min(c,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),h=o.textContent.length,m=Math.min(u.start,h),g=void 0===u.end?m:Math.min(u.end,h);!p.extend&&m>g&&(i=g,g=m,m=i);var v=nr(o,m),y=nr(o,g);if(v&&y&&(1!==p.rangeCount||p.anchorNode!==v.node||p.anchorOffset!==v.offset||p.focusNode!==y.node||p.focusOffset!==y.offset)){var b=d.createRange();b.setStart(v.node,v.offset),p.removeAllRanges(),m>g?(p.addRange(b),p.extend(y.node,y.offset)):(b.setEnd(y.node,y.offset),p.addRange(b))}}}}for(d=[],p=o;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof o.focus&&o.focus(),o=0;o<d.length;o++){var x=d[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}wf=!!md,gd=md=null}finally{hs=a,A.p=r,j.T=n}}e.current=t,Fs=2}}function yc(){if(2===Fs){Fs=0;var e=Is,t=Ms,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=j.T,j.T=null;var r=A.p;A.p=2;var a=hs;hs|=4;try{Au(e,t.alternate,t)}finally{hs=a,A.p=r,j.T=n}}Fs=3}}function bc(){if(4===Fs||3===Fs){Fs=0,oe();var e=Is,t=Ms,n=Hs,r=Ws;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Fs=5:(Fs=0,Ms=Is=null,xc(e,e.pendingLanes));var a=e.pendingLanes;if(0===a&&(Ds=null),Fe(n),t=t.stateNode,ye&&"function"===typeof ye.onCommitFiberRoot)try{ye.onCommitFiberRoot(ve,t,void 0,128===(128&t.current.flags))}catch(u){}if(null!==r){t=j.T,a=A.p,A.p=2,j.T=null;try{for(var l=e.onRecoverableError,i=0;i<r.length;i++){var o=r[i];l(o.value,{componentStack:o.stack})}}finally{j.T=t,A.p=a}}0!==(3&Hs)&&wc(),Rc(e),a=e.pendingLanes,0!==(261930&n)&&0!==(42&a)?e===qs?Vs++:(Vs=0,qs=e):Vs=0,Dc(0,!1)}}function xc(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Ha(t)))}function wc(){return vc(),yc(),bc(),kc()}function kc(){if(5!==Fs)return!1;var e=Is,t=Us;Us=0;var n=Fe(Hs),r=j.T,a=A.p;try{A.p=32>n?32:n,j.T=null,n=Bs,Bs=null;var l=Is,o=Hs;if(Fs=0,Ms=Is=null,Hs=0,0!==(6&hs))throw Error(i(331));var u=hs;if(hs|=4,ss(l.current),ts(l,l.current,o,n),hs=u,Dc(0,!1),ye&&"function"===typeof ye.onPostCommitFiberRoot)try{ye.onPostCommitFiberRoot(ve,l)}catch(s){}return!0}finally{A.p=a,j.T=r,xc(e,t)}}function Sc(e,t,n){t=Gr(n,t),null!==(e=xl(e,t=No(e.stateNode,t,2),2))&&(Le(e,2),Rc(e))}function Ec(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ds||!Ds.has(r))){e=Gr(n,e),null!==(r=xl(t,n=Oo(2),2))&&($o(n,r,t,e),Le(r,2),Rc(r));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(ks=!0,a.add(n),e=_c.bind(null,e,t,n),t.then(e,e))}function _c(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ms===e&&(vs&n)===n&&(4===Es||3===Es&&(62914560&vs)===vs&&300>ue()-Ls?0===(2&hs)&&nc(e,0):zs|=n,Ts===vs&&(Ts=0)),Rc(e)}function zc(e,t){0===t&&(t=Oe()),null!==(e=jr(e,t))&&(Le(e,t),Rc(e))}function Pc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),zc(e,n)}function Tc(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}null!==r&&r.delete(t),zc(e,n)}var Nc=null,Oc=null,$c=!1,Lc=!1,jc=!1,Ac=0;function Rc(e){e!==Oc&&null===e.next&&(null===Oc?Nc=Oc=e:Oc=Oc.next=e),Lc=!0,$c||($c=!0,Cd(function(){0!==(6&hs)?ae(ce,Fc):Ic()}))}function Dc(e,t){if(!jc&&Lc){jc=!0;do{for(var n=!1,r=Nc;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var l=0;else{var i=r.suspendedLanes,o=r.pingedLanes;l=(1<<31-xe(42|e)+1)-1,l=201326741&(l&=a&~(i&~o))?201326741&l|1:l?2|l:0}0!==l&&(n=!0,Uc(r,l))}else l=vs,0===(3&(l=Pe(r,r===ms?l:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||Te(r,l)||(n=!0,Uc(r,l));r=r.next}}while(n);jc=!1}}function Fc(){Ic()}function Ic(){Lc=$c=!1;var e=0;0!==Ac&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==wd&&(wd=e,!0);return wd=null,!1}()&&(e=Ac);for(var t=ue(),n=null,r=Nc;null!==r;){var a=r.next,l=Mc(r,t);0===l?(r.next=null,null===n?Nc=a:n.next=a,null===a&&(Oc=n)):(n=r,(0!==e||0!==(3&l))&&(Lc=!0)),r=a}0!==Fs&&5!==Fs||Dc(e,!1),0!==Ac&&(Ac=0)}function Mc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=-62914561&e.pendingLanes;0<l;){var i=31-xe(l),o=1<<i,u=a[i];-1===u?0!==(o&n)&&0===(o&r)||(a[i]=Ne(o,t)):u<=t&&(e.expiredLanes|=o),l&=~o}if(n=vs,n=Pe(e,e===(t=ms)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===ys||9===ys)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&le(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||Te(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&le(r),Fe(n)){case 2:case 8:n=de;break;case 32:default:n=fe;break;case 268435456:n=he}return r=Hc.bind(null,e),n=ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&le(r),e.callbackPriority=2,e.callbackNode=null,2}function Hc(e,t){if(0!==Fs&&5!==Fs)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(wc()&&e.callbackNode!==n)return null;var r=vs;return 0===(r=Pe(e,e===ms?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Ys(e,r,t),Mc(e,ue()),null!=e.callbackNode&&e.callbackNode===n?Hc.bind(null,e):null)}function Uc(e,t){if(wc())return null;Ys(e,t,!0)}function Bc(){if(0===Ac){var e=Wa;0===e&&(e=Se,0===(261888&(Se<<=1))&&(Se=256)),Ac=e}return Ac}function Wc(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:$t(""+e)}function Vc(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var qc=0;qc<Cr.length;qc++){var Kc=Cr[qc];_r(Kc.toLowerCase(),"on"+(Kc[0].toUpperCase()+Kc.slice(1)))}_r(vr,"onAnimationEnd"),_r(yr,"onAnimationIteration"),_r(br,"onAnimationStart"),_r("dblclick","onDoubleClick"),_r("focusin","onFocus"),_r("focusout","onBlur"),_r(xr,"onTransitionRun"),_r(wr,"onTransitionStart"),_r(kr,"onTransitionCancel"),_r(Sr,"onTransitionEnd"),lt("onMouseEnter",["mouseout","mouseover"]),lt("onMouseLeave",["mouseout","mouseover"]),lt("onPointerEnter",["pointerout","pointerover"]),lt("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gc=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qc));function Yc(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var o=r[i],u=o.instance,s=o.currentTarget;if(o=o.listener,u!==l&&a.isPropagationStopped())break e;l=o,a.currentTarget=s;try{l(a)}catch(c){zr(c)}a.currentTarget=null,l=u}else for(i=0;i<r.length;i++){if(u=(o=r[i]).instance,s=o.currentTarget,o=o.listener,u!==l&&a.isPropagationStopped())break e;l=o,a.currentTarget=s;try{l(a)}catch(c){zr(c)}a.currentTarget=null,l=u}}}}function Xc(e,t){var n=t[Ve];void 0===n&&(n=t[Ve]=new Set);var r=e+"__bubble";n.has(r)||(td(t,e,2,!1),n.add(r))}function Zc(e,t,n){var r=0;t&&(r|=4),td(n,e,r,t)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[Jc]){e[Jc]=!0,nt.forEach(function(t){"selectionchange"!==t&&(Gc.has(t)||Zc(t,!1,e),Zc(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Jc]||(t[Jc]=!0,Zc("selectionchange",!1,t))}}function td(e,t,n,r){switch(Pf(t)){case 2:var a=kf;break;case 8:a=Sf;break;default:a=Ef}n=a.bind(null,t,n,e),a=void 0,!Bt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function nd(e,t,n,r,a){var l=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var o=r.stateNode.containerInfo;if(o===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&i.stateNode.containerInfo===a)return;i=i.return}for(;null!==o;){if(null===(i=Xe(o)))return;if(5===(s=i.tag)||6===s||26===s||27===s){r=l=i;continue e}o=o.parentNode}}r=r.return}Mt(function(){var r=l,a=At(n),i=[];e:{var o=Er.get(e);if(void 0!==o){var s=rn,c=e;switch(e){case"keypress":if(0===Gt(n))break e;case"keydown":case"keyup":s=bn;break;case"focusin":c="focus",s=cn;break;case"focusout":c="blur",s=cn;break;case"beforeblur":case"afterblur":s=cn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=un;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=sn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=wn;break;case vr:case yr:case br:s=dn;break;case Sr:s=kn;break;case"scroll":case"scrollend":s=ln;break;case"wheel":s=Sn;break;case"copy":case"cut":case"paste":s=fn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=xn;break;case"toggle":case"beforetoggle":s=En}var d=0!==(4&t),f=!d&&("scroll"===e||"scrollend"===e),p=d?null!==o?o+"Capture":null:o;d=[];for(var h,m=r;null!==m;){var g=m;if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===p||null!=(g=Ht(m,p))&&d.push(rd(m,g,h)),f)break;m=m.return}0<d.length&&(o=new s(o,c,null,n,a),i.push({event:o,listeners:d}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(o="mouseover"===e||"pointerover"===e)||n===jt||!(c=n.relatedTarget||n.fromElement)||!Xe(c)&&!c[We])&&(s||o)&&(o=a.window===a?a:(o=a.ownerDocument)?o.defaultView||o.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?Xe(c):null)&&(f=u(c),d=c.tag,c!==f||5!==d&&27!==d&&6!==d)&&(c=null)):(s=null,c=r),s!==c)){if(d=un,g="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=xn,g="onPointerLeave",p="onPointerEnter",m="pointer"),f=null==s?o:Je(s),h=null==c?o:Je(c),(o=new d(g,m+"leave",s,n,a)).target=f,o.relatedTarget=h,g=null,Xe(a)===r&&((d=new d(p,m+"enter",c,n,a)).target=h,d.relatedTarget=f,g=d),f=g,s&&c)e:{for(d=ld,m=c,h=0,g=p=s;g;g=d(g))h++;g=0;for(var v=m;v;v=d(v))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||null!==m&&p===m.alternate){d=p;break e}p=d(p),m=d(m)}d=null}else d=null;null!==s&&id(i,o,s,d,!1),null!==c&&null!==f&&id(i,f,c,d,!0)}if("select"===(s=(o=r?Je(r):window).nodeName&&o.nodeName.toLowerCase())||"input"===s&&"file"===o.type)var y=Un;else if(Rn(o))if(Bn)y=Zn;else{y=Yn;var b=Gn}else!(s=o.nodeName)||"input"!==s.toLowerCase()||"checkbox"!==o.type&&"radio"!==o.type?r&&Tt(r.elementType)&&(y=Un):y=Xn;switch(y&&(y=y(e,r))?Dn(i,y,n,a):(b&&b(e,o,r),"focusout"===e&&r&&"number"===o.type&&null!=r.memoizedProps.value&&wt(o,"number",o.value)),b=r?Je(r):window,e){case"focusin":(Rn(b)||"true"===b.contentEditable)&&(or=b,ur=r,sr=null);break;case"focusout":sr=ur=or=null;break;case"mousedown":cr=!0;break;case"contextmenu":case"mouseup":case"dragend":cr=!1,dr(i,n,a);break;case"selectionchange":if(ir)break;case"keydown":case"keyup":dr(i,n,a)}var x;if(_n)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else jn?$n(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(Tn&&"ko"!==n.locale&&(jn||"onCompositionStart"!==w?"onCompositionEnd"===w&&jn&&(x=Qt()):(qt="value"in(Vt=a)?Vt.value:Vt.textContent,jn=!0)),0<(b=ad(r,w)).length&&(w=new pn(w,e,null,n,a),i.push({event:w,listeners:b}),x?w.data=x:null!==(x=Ln(n))&&(w.data=x))),(x=Pn?function(e,t){switch(e){case"compositionend":return Ln(t);case"keypress":return 32!==t.which?null:(On=!0,Nn);case"textInput":return(e=t.data)===Nn&&On?null:e;default:return null}}(e,n):function(e,t){if(jn)return"compositionend"===e||!_n&&$n(e,t)?(e=Qt(),Kt=qt=Vt=null,jn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(w=ad(r,"onBeforeInput")).length&&(b=new pn("onBeforeInput","beforeinput",null,n,a),i.push({event:b,listeners:w}),b.data=x)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var l=Wc((a[Be]||null).action),i=r.submitter;i&&null!==(t=(t=i[Be]||null)?Wc(t.formAction):i.getAttribute("formAction"))&&(l=t,i=null);var o=new rn("action","action",null,r,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==Ac){var e=i?Vc(a,i):new FormData(a);to(n,{pending:!0,data:e,method:a.method,action:l},null,e)}}else"function"===typeof l&&(o.preventDefault(),e=i?Vc(a,i):new FormData(a),to(n,{pending:!0,data:e,method:a.method,action:l},l,e))},currentTarget:a}]})}}(i,e,r,n,a)}Yc(i,t)})}function rd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ad(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,l=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===l||(null!=(a=Ht(e,n))&&r.unshift(rd(e,a,l)),null!=(a=Ht(e,t))&&r.push(rd(e,a,l))),3===e.tag)return r;e=e.return}return[]}function ld(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function id(e,t,n,r,a){for(var l=t._reactName,i=[];null!==n&&n!==r;){var o=n,u=o.alternate,s=o.stateNode;if(o=o.tag,null!==u&&u===r)break;5!==o&&26!==o&&27!==o||null===s||(u=s,a?null!=(s=Ht(n,l))&&i.unshift(rd(n,s,u)):a||null!=(s=Ht(n,l))&&i.push(rd(n,s,u))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var od=/\r\n?/g,ud=/\u0000|\uFFFD/g;function sd(e){return("string"===typeof e?e:""+e).replace(od,"\n").replace(ud,"")}function cd(e,t){return t=sd(t),sd(e)===t}function dd(e,t,n,r,a,l){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||Ct(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&Ct(e,""+r);break;case"className":ct(e,"class",r);break;case"tabIndex":ct(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ct(e,n,r);break;case"style":Pt(e,r,l);break;case"data":if("object"!==t){ct(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=$t(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof l&&("formAction"===n?("input"!==t&&dd(e,t,"name",a.name,a,null),dd(e,t,"formEncType",a.formEncType,a,null),dd(e,t,"formMethod",a.formMethod,a,null),dd(e,t,"formTarget",a.formTarget,a,null)):(dd(e,t,"encType",a.encType,a,null),dd(e,t,"method",a.method,a,null),dd(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=$t(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Lt);break;case"onScroll":null!=r&&Xc("scroll",e);break;case"onScrollEnd":null!=r&&Xc("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(i(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=$t(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Xc("beforetoggle",e),Xc("toggle",e),st(e,"popover",r);break;case"xlinkActuate":dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":dt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":dt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":dt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":dt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":st(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&st(e,n=Nt.get(n)||n,r)}}function fd(e,t,n,r,a,l){switch(n){case"style":Pt(e,r,l);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(i(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=n}}break;case"children":"string"===typeof r?Ct(e,r):("number"===typeof r||"bigint"===typeof r)&&Ct(e,""+r);break;case"onScroll":null!=r&&Xc("scroll",e);break;case"onScrollEnd":null!=r&&Xc("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Lt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:rt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(l=null!=(l=e[Be]||null)?l[n]:null)&&e.removeEventListener(t,l,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):st(e,n,r):("function"!==typeof l&&null!==l&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function pd(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xc("error",e),Xc("load",e);var r,a=!1,l=!1;for(r in n)if(n.hasOwnProperty(r)){var o=n[r];if(null!=o)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:dd(e,t,r,o,n,null)}}return l&&dd(e,t,"srcSet",n.srcSet,n,null),void(a&&dd(e,t,"src",n.src,n,null));case"input":Xc("invalid",e);var u=r=o=l=null,s=null,c=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":l=d;break;case"type":o=d;break;case"checked":s=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":u=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(i(137,t));break;default:dd(e,t,a,d,n,null)}}return void xt(e,r,u,s,c,o,l,!1);case"select":for(l in Xc("invalid",e),a=o=r=null,n)if(n.hasOwnProperty(l)&&null!=(u=n[l]))switch(l){case"value":r=u;break;case"defaultValue":o=u;break;case"multiple":a=u;default:dd(e,t,l,u,n,null)}return t=r,n=o,e.multiple=!!a,void(null!=t?kt(e,!!a,t,!1):null!=n&&kt(e,!!a,n,!0));case"textarea":for(o in Xc("invalid",e),r=l=a=null,n)if(n.hasOwnProperty(o)&&null!=(u=n[o]))switch(o){case"value":a=u;break;case"defaultValue":l=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(null!=u)throw Error(i(91));break;default:dd(e,t,o,u,n,null)}return void Et(e,a,l,r);case"option":for(s in n)if(n.hasOwnProperty(s)&&null!=(a=n[s]))if("selected"===s)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else dd(e,t,s,a,n,null);return;case"dialog":Xc("beforetoggle",e),Xc("toggle",e),Xc("cancel",e),Xc("close",e);break;case"iframe":case"object":Xc("load",e);break;case"video":case"audio":for(a=0;a<Qc.length;a++)Xc(Qc[a],e);break;case"image":Xc("error",e),Xc("load",e);break;case"details":Xc("toggle",e);break;case"embed":case"source":case"link":Xc("error",e),Xc("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:dd(e,t,c,a,n,null)}return;default:if(Tt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&fd(e,t,d,a,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(null!=(a=n[u])&&dd(e,t,u,a,n,null))}function hd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var md=null,gd=null;function vd(e){return 9===e.nodeType?e:e.ownerDocument}function yd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bd(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function xd(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var wd=null;var kd="function"===typeof setTimeout?setTimeout:void 0,Sd="function"===typeof clearTimeout?clearTimeout:void 0,Ed="function"===typeof Promise?Promise:void 0,Cd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Ed?function(e){return Ed.resolve(null).then(e).catch(_d)}:kd;function _d(e){setTimeout(function(){throw e})}function zd(e){return"head"===e}function Pd(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)||"/&"===n){if(0===r)return e.removeChild(a),void qf(t);r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;else if("html"===n)Id(e.ownerDocument.documentElement);else if("head"===n){Id(n=e.ownerDocument.head);for(var l=n.firstChild;l;){var i=l.nextSibling,o=l.nodeName;l[Ge]||"SCRIPT"===o||"STYLE"===o||"LINK"===o&&"stylesheet"===l.rel.toLowerCase()||n.removeChild(l),l=i}}else"body"===n&&Id(e.ownerDocument.body);n=a}while(n);qf(t)}function Td(e,t){var n=e;e=0;do{var r=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=r}while(n)}function Nd(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Nd(n),Ye(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function Od(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=jd(e.nextSibling)))return null}return e}function $d(e){return"$?"===e.data||"$~"===e.data}function Ld(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function jd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}var Ad=null;function Rd(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return jd(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function Dd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Fd(e,t,n){switch(t=vd(n),e){case"html":if(!(e=t.documentElement))throw Error(i(452));return e;case"head":if(!(e=t.head))throw Error(i(453));return e;case"body":if(!(e=t.body))throw Error(i(454));return e;default:throw Error(i(451))}}function Id(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ye(e)}var Md=new Map,Hd=new Set;function Ud(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Bd=A.d;A.d={f:function(){var e=Bd.f(),t=ec();return e||t},r:function(e){var t=Ze(e);null!==t&&5===t.tag&&"form"===t.type?ro(t):Bd.r(e)},D:function(e){Bd.D(e),Vd("dns-prefetch",e,null)},C:function(e,t){Bd.C(e,t),Vd("preconnect",e,t)},L:function(e,t,n){Bd.L(e,t,n);var r=Wd;if(r&&e&&t){var a='link[rel="preload"][as="'+yt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+yt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+yt(n.imageSizes)+'"]')):a+='[href="'+yt(e)+'"]';var l=a;switch(t){case"style":l=Kd(e);break;case"script":l=Yd(e)}Md.has(l)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Md.set(l,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(Qd(l))||"script"===t&&r.querySelector(Xd(l))||(pd(t=r.createElement("link"),"link",e),tt(t),r.head.appendChild(t)))}},m:function(e,t){Bd.m(e,t);var n=Wd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+yt(r)+'"][href="'+yt(e)+'"]',l=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Yd(e)}if(!Md.has(l)&&(e=p({rel:"modulepreload",href:e},t),Md.set(l,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Xd(l)))return}pd(r=n.createElement("link"),"link",e),tt(r),n.head.appendChild(r)}}},X:function(e,t){Bd.X(e,t);var n=Wd;if(n&&e){var r=et(n).hoistableScripts,a=Yd(e),l=r.get(a);l||((l=n.querySelector(Xd(a)))||(e=p({src:e,async:!0},t),(t=Md.get(a))&&tf(e,t),tt(l=n.createElement("script")),pd(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},r.set(a,l))}},S:function(e,t,n){Bd.S(e,t,n);var r=Wd;if(r&&e){var a=et(r).hoistableStyles,l=Kd(e);t=t||"default";var i=a.get(l);if(!i){var o={loading:0,preload:null};if(i=r.querySelector(Qd(l)))o.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Md.get(l))&&ef(e,n);var u=i=r.createElement("link");tt(u),pd(u,"link",e),u._p=new Promise(function(e,t){u.onload=e,u.onerror=t}),u.addEventListener("load",function(){o.loading|=1}),u.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Jd(i,t,r)}i={type:"stylesheet",instance:i,count:1,state:o},a.set(l,i)}}},M:function(e,t){Bd.M(e,t);var n=Wd;if(n&&e){var r=et(n).hoistableScripts,a=Yd(e),l=r.get(a);l||((l=n.querySelector(Xd(a)))||(e=p({src:e,async:!0,type:"module"},t),(t=Md.get(a))&&tf(e,t),tt(l=n.createElement("script")),pd(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},r.set(a,l))}}};var Wd="undefined"===typeof document?null:document;function Vd(e,t,n){var r=Wd;if(r&&"string"===typeof t&&t){var a=yt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),Hd.has(a)||(Hd.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(pd(t=r.createElement("link"),"link",e),tt(t),r.head.appendChild(t)))}}function qd(e,t,n,r){var a,l,o,u,s=(s=q.current)?Ud(s):null;if(!s)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Kd(n.href),(r=(n=et(s).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Kd(n.href);var c=et(s).hoistableStyles,d=c.get(e);if(d||(s=s.ownerDocument||s,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=s.querySelector(Qd(e)))&&!c._p&&(d.instance=c,d.state.loading=5),Md.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Md.set(e,n),c||(a=s,l=e,o=n,u=d.state,a.querySelector('link[rel="preload"][as="style"]['+l+"]")?u.loading=1:(l=a.createElement("link"),u.preload=l,l.addEventListener("load",function(){return u.loading|=1}),l.addEventListener("error",function(){return u.loading|=2}),pd(l,"link",o),tt(l),a.head.appendChild(l))))),t&&null===r)throw Error(i(528,""));return d}if(t&&null!==r)throw Error(i(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Yd(n),(r=(n=et(s).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Kd(e){return'href="'+yt(e)+'"'}function Qd(e){return'link[rel="stylesheet"]['+e+"]"}function Gd(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Yd(e){return'[src="'+yt(e)+'"]'}function Xd(e){return"script[async]"+e}function Zd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+yt(n.href)+'"]');if(r)return t.instance=r,tt(r),r;var a=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return tt(r=(e.ownerDocument||e).createElement("style")),pd(r,"style",a),Jd(r,n.precedence,e),t.instance=r;case"stylesheet":a=Kd(n.href);var l=e.querySelector(Qd(a));if(l)return t.state.loading|=4,t.instance=l,tt(l),l;r=Gd(n),(a=Md.get(a))&&ef(r,a),tt(l=(e.ownerDocument||e).createElement("link"));var o=l;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),pd(l,"link",r),t.state.loading|=4,Jd(l,n.precedence,e),t.instance=l;case"script":return l=Yd(n.src),(a=e.querySelector(Xd(l)))?(t.instance=a,tt(a),a):(r=n,(a=Md.get(l))&&tf(r=p({},n),a),tt(a=(e=e.ownerDocument||e).createElement("script")),pd(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Jd(r,n.precedence,e));return t.instance}function Jd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,l=a,i=0;i<r.length;i++){var o=r[i];if(o.dataset.precedence===t)l=o;else if(l!==a)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function ef(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function tf(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var nf=null;function rf(e,t,n){if(null===nf){var r=new Map,a=nf=new Map;a.set(n,r)}else(r=(a=nf).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var l=n[a];if(!(l[Ge]||l[Ue]||"link"===e&&"stylesheet"===l.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==l.namespaceURI){var i=l.getAttribute(t)||"";i=e+i;var o=r.get(i);o?o.push(l):r.set(i,[l])}}return r}function af(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function lf(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var of=0;function uf(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)cf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var sf=null;function cf(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,sf=new Map,t.forEach(df,e),sf=null,uf.call(e))}function df(e,t){if(!(4&t.state.loading)){var n=sf.get(e);if(n)var r=n.get(null);else{n=new Map,sf.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var i=a[l];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(n.set(i.dataset.precedence,i),r=i)}r&&n.set(null,r)}i=(a=t.instance).getAttribute("data-precedence"),(l=n.get(i)||r)===r&&n.set(null,a),n.set(i,a),this.count++,r=uf.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),l?l.parentNode.insertBefore(a,l.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var ff={$$typeof:w,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function pf(e,t,n,r,a,l,i,o,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function hf(e,t,n,r,a,l,i,o,u,s,c,d){return e=new pf(e,t,n,i,u,s,c,d,o),t=1,!0===l&&(t|=24),l=Ir(3,null,null,t),e.current=l,l.stateNode=e,(t=Ma()).refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:r,isDehydrated:n,cache:t},vl(l),e}function mf(e){return e?e=Dr:Dr}function gf(e,t,n,r,a,l){a=mf(a),null===r.context?r.context=a:r.pendingContext=a,(r=bl(t)).payload={element:n},null!==(l=void 0===l?null:l)&&(r.callback=l),null!==(n=xl(e,r,t))&&(Gs(n,0,t),wl(n,e,t))}function vf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function yf(e,t){vf(e,t),(e=e.alternate)&&vf(e,t)}function bf(e){if(13===e.tag||31===e.tag){var t=jr(e,67108864);null!==t&&Gs(t,0,67108864),yf(e,67108864)}}function xf(e){if(13===e.tag||31===e.tag){var t=Ks(),n=jr(e,t=De(t));null!==n&&Gs(n,0,t),yf(e,t)}}var wf=!0;function kf(e,t,n,r){var a=j.T;j.T=null;var l=A.p;try{A.p=2,Ef(e,t,n,r)}finally{A.p=l,j.T=a}}function Sf(e,t,n,r){var a=j.T;j.T=null;var l=A.p;try{A.p=8,Ef(e,t,n,r)}finally{A.p=l,j.T=a}}function Ef(e,t,n,r){if(wf){var a=Cf(r);if(null===a)nd(e,t,r,_f,n),Df(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Nf=Ff(Nf,e,t,n,r,a),!0;case"dragenter":return Of=Ff(Of,e,t,n,r,a),!0;case"mouseover":return $f=Ff($f,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return Lf.set(l,Ff(Lf.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,jf.set(l,Ff(jf.get(l)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Df(e,r),4&t&&-1<Rf.indexOf(e)){for(;null!==a;){var l=Ze(a);if(null!==l)switch(l.tag){case 3:if((l=l.stateNode).current.memoizedState.isDehydrated){var i=ze(l.pendingLanes);if(0!==i){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var u=1<<31-xe(i);o.entanglements[1]|=u,i&=~u}Rc(l),0===(6&hs)&&(As=ue()+500,Dc(0,!1))}}break;case 31:case 13:null!==(o=jr(l,2))&&Gs(o,0,2),ec(),yf(l,2)}if(null===(l=Cf(r))&&nd(e,t,r,_f,n),l===a)break;a=l}null!==a&&r.stopPropagation()}else nd(e,t,r,null,n)}}function Cf(e){return zf(e=At(e))}var _f=null;function zf(e){if(_f=null,null!==(e=Xe(e))){var t=u(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=s(t)))return e;e=null}else if(31===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _f=e,null}function Pf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(se()){case ce:return 2;case de:return 8;case fe:case pe:return 32;case he:return 268435456;default:return 32}default:return 32}}var Tf=!1,Nf=null,Of=null,$f=null,Lf=new Map,jf=new Map,Af=[],Rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Df(e,t){switch(e){case"focusin":case"focusout":Nf=null;break;case"dragenter":case"dragleave":Of=null;break;case"mouseover":case"mouseout":$f=null;break;case"pointerover":case"pointerout":Lf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jf.delete(t.pointerId)}}function Ff(e,t,n,r,a,l){return null===e||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},null!==t&&(null!==(t=Ze(t))&&bf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function If(e){var t=Xe(e.target);if(null!==t){var n=u(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=s(n)))return e.blockedOn=t,void Me(e.priority,function(){xf(n)})}else if(31===t){if(null!==(t=c(n)))return e.blockedOn=t,void Me(e.priority,function(){xf(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cf(e.nativeEvent);if(null!==n)return null!==(t=Ze(n))&&bf(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);jt=r,n.target.dispatchEvent(r),jt=null,t.shift()}return!0}function Hf(e,t,n){Mf(e)&&n.delete(t)}function Uf(){Tf=!1,null!==Nf&&Mf(Nf)&&(Nf=null),null!==Of&&Mf(Of)&&(Of=null),null!==$f&&Mf($f)&&($f=null),Lf.forEach(Hf),jf.forEach(Hf)}function Bf(e,t){e.blockedOn===t&&(e.blockedOn=null,Tf||(Tf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Uf)))}var Wf=null;function Vf(e){Wf!==e&&(Wf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Wf===e&&(Wf=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===zf(r||n))continue;break}var l=Ze(n);null!==l&&(e.splice(t,3),t-=3,to(l,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function qf(e){function t(t){return Bf(t,e)}null!==Nf&&Bf(Nf,e),null!==Of&&Bf(Of,e),null!==$f&&Bf($f,e),Lf.forEach(t),jf.forEach(t);for(var n=0;n<Af.length;n++){var r=Af[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Af.length&&null===(n=Af[0]).blockedOn;)If(n),null===n.blockedOn&&Af.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],l=n[r+1],i=a[Be]||null;if("function"===typeof l)i||Vf(n);else if(i){var o=null;if(l&&l.hasAttribute("formAction")){if(a=l,i=l[Be]||null)o=i.formAction;else if(null!==zf(a))continue}else o=i.action;"function"===typeof o?n[r+1]=o:(n.splice(r,3),r-=3),Vf(n)}}}function Kf(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return a=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==a&&(a(),a=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var r=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==a&&(a(),a=null)}}}function Qf(e){this._internalRoot=e}function Gf(e){this._internalRoot=e}Gf.prototype.render=Qf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));gf(t.current,Ks(),e,t,null,null)},Gf.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;gf(e.current,2,null,e,null,null),ec(),t[We]=null}},Gf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ie();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Af.length&&0!==t&&t<Af[n].priority;n++);Af.splice(n,0,e),0===n&&If(e)}};var Yf=a.version;if("19.2.4"!==Yf)throw Error(i(527,Yf,"19.2.4"));A.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=u(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var l=a.alternate;if(null===l){if(null!==(r=a.return)){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return d(a),e;if(l===r)return d(a),t;l=l.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=l;else{for(var o=!1,s=a.child;s;){if(s===n){o=!0,n=a,r=l;break}if(s===r){o=!0,r=a,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=a;break}if(s===r){o=!0,r=l,n=a;break}s=s.sibling}if(!o)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?f(e):null)?null:e.stateNode};var Xf={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.4"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Zf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zf.isDisabled&&Zf.supportsFiber)try{ve=Zf.inject(Xf),ye=Zf}catch(ep){}}t.createRoot=function(e,t){if(!o(e))throw Error(i(299));var n=!1,r="",a=Co,l=_o,u=zo;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(l=t.onCaughtError),void 0!==t.onRecoverableError&&(u=t.onRecoverableError)),t=hf(e,1,!1,null,0,n,r,null,a,l,u,Kf),e[We]=t.current,ed(e),new Qf(t)},t.hydrateRoot=function(e,t,n){if(!o(e))throw Error(i(299));var r=!1,a="",l=Co,u=_o,s=zo,c=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(l=n.onUncaughtError),void 0!==n.onCaughtError&&(u=n.onCaughtError),void 0!==n.onRecoverableError&&(s=n.onRecoverableError),void 0!==n.formState&&(c=n.formState)),(t=hf(e,1,!0,t,0,r,a,c,l,u,s,Kf)).context=mf(null),n=t.current,(a=bl(r=De(r=Ks()))).callback=null,xl(n,a,r),n=r,t.current.lanes=n,Le(t,n),Rc(t),e[We]=t.current,ed(e),new Gf(t)},t.version="19.2.4"},672(e,t,n){var r=n(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var i={d:{f:l,r:function(){throw Error(a(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},o=Symbol.for("react.portal");var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function s(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:o,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=u.T,n=i.p;try{if(u.T=null,i.p=2,e)return e()}finally{u.T=t,i.p=n,i.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,i.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&i.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=s(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,l="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?i.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:l}):"script"===n&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:l,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=s(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&i.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=s(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=s(t.as,t.crossOrigin);i.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else i.d.m(e)},t.requestFormReset=function(e){i.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return u.H.useFormState(e,t,n)},t.useFormStatus=function(){return u.H.useHostTransitionStatus()},t.version="19.2.4"},391(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)},799(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var l in r={},t)"key"!==l&&(r[l]=t[l]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},288(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),h=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||m}function b(){}function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var w=x.prototype=new b;w.constructor=x,g(w,y.prototype),w.isPureReactComponent=!0;var k=Array.isArray;function S(){}var E={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function _(e,t,r){var a=r.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==a?a:null,props:r}}function z(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function N(e,t,a,l,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u,s,c=!1;if(null===e)c=!0;else switch(o){case"bigint":case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0;break;case f:return N((c=e._init)(e._payload),t,a,l,i)}}if(c)return i=i(e),c=""===l?"."+T(e,0):l,k(i)?(a="",null!=c&&(a=c.replace(P,"$&/")+"/"),N(i,t,a,"",function(e){return e})):null!=i&&(z(i)&&(u=i,s=a+(null==i.key||e&&e.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+c,i=_(u.type,s,u.props)),t.push(i)),1;c=0;var d,p=""===l?".":l+":";if(k(e))for(var m=0;m<e.length;m++)c+=N(l=e[m],t,a,o=p+T(l,m),i);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=h&&d[h]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(l=e.next()).done;)c+=N(l=l.value,t,a,o=p+T(l,m++),i);else if("object"===o){if("function"===typeof e.then)return N(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(S,S):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,l,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return c}function O(e,t,n){if(null==e)return e;var r=[],a=0;return N(e,r,"","",function(e){return t.call(n,e,a++)}),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},j={map:O,forEach:function(e,t,n){O(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!z(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=p,t.Children=j,t.Component=y,t.Fragment=a,t.Profiler=i,t.PureComponent=x,t.StrictMode=l,t.Suspense=c,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return E.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=g({},e.props),a=e.key;if(null!=t)for(l in void 0!==t.key&&(a=""+t.key),t)!C.call(t,l)||"key"===l||"__self"===l||"__source"===l||"ref"===l&&void 0===t.ref||(r[l]=t[l]);var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){for(var i=Array(l),o=0;o<l;o++)i[o]=arguments[o+2];r.children=i}return _(e.type,a,r)},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:o,_context:e},e},t.createElement=function(e,t,n){var r,a={},l=null;if(null!=t)for(r in void 0!==t.key&&(l=""+t.key),t)C.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var o=Array(i),u=0;u<i;u++)o[u]=arguments[u+2];a.children=o}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return _(e,l,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=z,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=E.T,n={};E.T=n;try{var r=e(),a=E.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(S,L)}catch(l){L(l)}finally{null!==t&&null!==n.types&&(t.types=n.types),E.T=t}},t.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},t.use=function(e){return E.H.use(e)},t.useActionState=function(e,t,n){return E.H.useActionState(e,t,n)},t.useCallback=function(e,t){return E.H.useCallback(e,t)},t.useContext=function(e){return E.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return E.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return E.H.useEffect(e,t)},t.useEffectEvent=function(e){return E.H.useEffectEvent(e)},t.useId=function(){return E.H.useId()},t.useImperativeHandle=function(e,t,n){return E.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return E.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return E.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return E.H.useMemo(e,t)},t.useOptimistic=function(e,t){return E.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return E.H.useReducer(e,t,n)},t.useRef=function(e){return E.H.useRef(e)},t.useState=function(e){return E.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return E.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return E.H.useTransition()},t.version="19.2.4"},43(e,t,n){e.exports=n(288)},579(e,t,n){e.exports=n(799)},896(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<l(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var o=2*(r+1)-1,u=e[o],s=o+1,c=e[s];if(0>l(u,n))s<a&&0>l(c,u)?(e[r]=c,e[s]=n,r=s):(e[r]=u,e[o]=n,r=o);else{if(!(s<a&&0>l(c,n)))break e;e[r]=c,e[s]=n,r=s}}}return t}function l(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();t.unstable_now=function(){return o.now()-u}}var s=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v=!1,y="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(s,t)}t=r(c)}}function k(e){if(g=!1,w(e),!m)if(null!==r(s))m=!0,E||(E=!0,S());else{var t=r(c);null!==t&&$(k,t.startTime-e)}}var S,E=!1,C=-1,_=5,z=-1;function P(){return!!v||!(t.unstable_now()-z<_)}function T(){if(v=!1,E){var e=t.unstable_now();z=e;var n=!0;try{e:{m=!1,g&&(g=!1,b(C),C=-1),h=!0;var l=p;try{t:{for(w(e),f=r(s);null!==f&&!(f.expirationTime>e&&P());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var o=i(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof o){f.callback=o,w(e),n=!0;break t}f===r(s)&&a(s),w(e)}else a(s);f=r(s)}if(null!==f)n=!0;else{var u=r(c);null!==u&&$(k,u.startTime-e),n=!1}}break e}finally{f=null,p=l,h=!1}n=void 0}}finally{n?S():E=!1}}}if("function"===typeof x)S=function(){x(T)};else if("undefined"!==typeof MessageChannel){var N=new MessageChannel,O=N.port2;N.port1.onmessage=T,S=function(){O.postMessage(null)}}else S=function(){y(T,0)};function $(e,n){C=y(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,l){var i=t.unstable_now();switch("object"===typeof l&&null!==l?l="number"===typeof(l=l.delay)&&0<l?i+l:i:l=i,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:l,expirationTime:o=l+o,sortIndex:-1},l>i?(e.sortIndex=l,n(c,e),null===r(s)&&e===r(c)&&(g?(b(C),C=-1):g=!0,$(k,l-i))):(e.sortIndex=o,n(s,e),m||h||(m=!0,E||(E=!0,S()))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853(e,t,n){e.exports=n(896)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.p="/klara-queen/",n.nc=void 0;var r=n(43),a=n(391);var l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};Object.create;function i(e,t,n){if(n||2===arguments.length)for(var r,a=0,l=t.length;a<l;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var o={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},u="-ms-",s="-moz-",c="-webkit-",d="comm",f="rule",p="decl",h="@keyframes",m=Math.abs,g=String.fromCharCode,v=Object.assign;function y(e){return e.trim()}function b(e,t){return(e=t.exec(e))?e[0]:e}function x(e,t,n){return e.replace(t,n)}function w(e,t,n){return e.indexOf(t,n)}function k(e,t){return 0|e.charCodeAt(t)}function S(e,t,n){return e.slice(t,n)}function E(e){return e.length}function C(e){return e.length}function _(e,t){return t.push(e),e}function z(e,t){return e.filter(function(e){return!b(e,t)})}var P=1,T=1,N=0,O=0,$=0,L="";function j(e,t,n,r,a,l,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:l,line:P,column:T,length:i,return:"",siblings:o}}function A(e,t){return v(j("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function R(e){for(;e.root;)e=A(e.root,{children:[e]});_(e,e.siblings)}function D(){return $=O>0?k(L,--O):0,T--,10===$&&(T=1,P--),$}function F(){return $=O<N?k(L,O++):0,T++,10===$&&(T=1,P++),$}function I(){return k(L,O)}function M(){return O}function H(e,t){return S(L,e,t)}function U(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B(e){return P=T=1,N=E(L=e),O=0,[]}function W(e){return L="",e}function V(e){return y(H(O-1,Q(91===e?e+2:40===e?e+1:e)))}function q(e){for(;($=I())&&$<33;)F();return U(e)>2||U($)>3?"":" "}function K(e,t){for(;--t&&F()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return H(e,M()+(t<6&&32==I()&&32==F()))}function Q(e){for(;F();)switch($){case e:return O;case 34:case 39:34!==e&&39!==e&&Q($);break;case 40:41===e&&Q(e);break;case 92:F()}return O}function G(e,t){for(;F()&&e+$!==57&&(e+$!==84||47!==I()););return"/*"+H(t,O-1)+"*"+g(47===e?e:F())}function Y(e){for(;!U(I());)F();return H(e,O)}function X(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Z(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case p:return e.return=e.return||e.value;case d:return"";case h:return e.return=e.value+"{"+X(e.children,r)+"}";case f:if(!E(e.value=e.props.join(",")))return""}return E(n=X(e.children,r))?e.return=e.value+"{"+n+"}":""}function J(e,t,n){switch(function(e,t){return 45^k(e,0)?(((t<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3):0}(e,t)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return c+e+e;case 4855:return c+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return s+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+s+e+u+e+e;case 5936:switch(k(e,t+11)){case 114:return c+e+u+x(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+u+x(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+u+x(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return c+e+u+e+e;case 6165:return c+e+u+"flex-"+e+e;case 5187:return c+e+x(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+u+"flex-$1$2")+e;case 5443:return c+e+u+"flex-item-"+x(e,/flex-|-self/g,"")+(b(e,/flex-|baseline/)?"":u+"grid-row-"+x(e,/flex-|-self/g,""))+e;case 4675:return c+e+u+"flex-line-pack"+x(e,/align-content|flex-|-self/g,"")+e;case 5548:return c+e+u+x(e,"shrink","negative")+e;case 5292:return c+e+u+x(e,"basis","preferred-size")+e;case 6060:return c+"box-"+x(e,"-grow","")+c+e+u+x(e,"grow","positive")+e;case 4554:return c+x(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return x(x(x(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return x(e,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return x(x(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+u+"flex-pack:$3"),/space-between/,"justify")+c+e+e;case 4200:if(!b(e,/flex-|baseline/))return u+"grid-column-align"+S(e,t)+e;break;case 2592:case 3360:return u+x(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,b(e.props,/grid-\w+-end/)})?~w(e+(n=n[t].value),"span",0)?e:u+x(e,"-start","")+e+u+"grid-row-span:"+(~w(n,"span",0)?b(n,/\d+/):+b(n,/\d+/)-+b(e,/\d+/))+";":u+x(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return b(e.props,/grid-\w+-start/)})?e:u+x(x(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return x(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(E(e)-1-t>6)switch(k(e,t+1)){case 109:if(45!==k(e,t+4))break;case 102:return x(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+s+(108==k(e,t+3)?"$3":"$2-$3"))+e;case 115:return~w(e,"stretch",0)?J(x(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return x(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,l,i,o){return u+n+":"+r+o+(a?u+n+"-span:"+(l?i:+i-+r)+o:"")+e});case 4949:if(121===k(e,t+6))return x(e,":",":"+c)+e;break;case 6444:switch(k(e,45===k(e,14)?18:11)){case 120:return x(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(45===k(e,14)?"inline-":"")+"box$3$1"+c+"$2$3$1"+u+"$2box$3")+e;case 100:return x(e,":",":"+u)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return x(e,"scroll-","scroll-snap-")+e}return e}function ee(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case p:return void(e.return=J(e.value,e.length,n));case h:return X([A(e,{value:x(e.value,"@","@"+c)})],r);case f:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(b(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":R(A(e,{props:[x(t,/:(read-\w+)/,":-moz-$1")]})),R(A(e,{props:[t]})),v(e,{props:z(n,r)});break;case"::placeholder":R(A(e,{props:[x(t,/:(plac\w+)/,":"+c+"input-$1")]})),R(A(e,{props:[x(t,/:(plac\w+)/,":-moz-$1")]})),R(A(e,{props:[x(t,/:(plac\w+)/,u+"input-$1")]})),R(A(e,{props:[t]})),v(e,{props:z(n,r)})}return""})}}function te(e){return W(ne("",null,null,null,[""],e=B(e),0,[0],e))}function ne(e,t,n,r,a,l,i,o,u){for(var s=0,c=0,d=i,f=0,p=0,h=0,v=1,y=1,b=1,C=0,z="",P=a,T=l,N=r,O=z;y;)switch(h=C,C=F()){case 40:if(108!=h&&58==k(O,d-1)){-1!=w(O+=x(V(C),"&","&\f"),"&\f",m(s?o[s-1]:0))&&(b=-1);break}case 34:case 39:case 91:O+=V(C);break;case 9:case 10:case 13:case 32:O+=q(h);break;case 92:O+=K(M()-1,7);continue;case 47:switch(I()){case 42:case 47:_(ae(G(F(),M()),t,n,u),u),5!=U(h||1)&&5!=U(I()||1)||!E(O)||" "===S(O,-1,void 0)||(O+=" ");break;default:O+="/"}break;case 123*v:o[s++]=E(O)*b;case 125*v:case 59:case 0:switch(C){case 0:case 125:y=0;case 59+c:-1==b&&(O=x(O,/\f/g,"")),p>0&&(E(O)-d||0===v&&47===h)&&_(p>32?le(O+";",r,n,d-1,u):le(x(O," ","")+";",r,n,d-2,u),u);break;case 59:O+=";";default:if(_(N=re(O,t,n,s,c,a,o,z,P=[],T=[],d,l),l),123===C)if(0===c)ne(O,t,N,N,P,l,d,o,T);else{switch(f){case 99:if(110===k(O,3))break;case 108:if(97===k(O,2))break;default:c=0;case 100:case 109:case 115:}c?ne(e,N,N,r&&_(re(e,N,N,0,0,a,o,z,a,P=[],d,T),T),a,T,d,o,r?P:T):ne(O,N,N,N,[""],T,0,o,T)}}s=c=p=0,v=b=1,z=O="",d=i;break;case 58:d=1+E(O),p=h;default:if(v<1)if(123==C)--v;else if(125==C&&0==v++&&125==D())continue;switch(O+=g(C),C*v){case 38:b=c>0?1:(O+="\f",-1);break;case 44:o[s++]=(E(O)-1)*b,b=1;break;case 64:45===I()&&(O+=V(F())),f=I(),c=d=E(z=O+=Y(M())),C++;break;case 45:45===h&&2==E(O)&&(v=0)}}return l}function re(e,t,n,r,a,l,i,o,u,s,c,d){for(var p=a-1,h=0===a?l:[""],g=C(h),v=0,b=0,w=0;v<r;++v)for(var k=0,E=S(e,p+1,p=m(b=i[v])),_=e;k<g;++k)(_=y(b>0?h[k]+" "+E:x(E,/&\f/g,h[k])))&&(u[w++]=_);return j(e,t,n,0===a?f:o,u,s,c,d)}function ae(e,t,n,r){return j(e,t,n,d,g($),S(e,2,-2),0,r)}function le(e,t,n,r,a){return j(e,t,n,p,S(e,0,r),S(e,r+1,-1),r,a)}var ie="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",oe="active",ue="data-styled-version",se="6.3.12",ce="/*!sc*/\n",de="undefined"!=typeof window&&"undefined"!=typeof document,fe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),pe={};function he(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var me=new Map,ge=new Map,ve=1,ye=function(e){if(me.has(e))return me.get(e);for(;ge.has(ve);)ve++;var t=ve++;return me.set(e,t),ge.set(t,e),t},be=function(e,t){ve=t+1,me.set(e,t),ge.set(t,e)},xe=(new Set,Object.freeze([])),we=Object.freeze({});function ke(e,t,n){return void 0===n&&(n=we),e.theme!==n.theme&&e.theme||t||n.theme}var Se=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Ee=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ce=/(^-|-$)/g;function _e(e){return e.replace(Ee,"-").replace(Ce,"")}var ze=/(a)(d)/gi,Pe=function(e){return String.fromCharCode(e+(e>25?39:97))};function Te(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Pe(t%52)+n;return(Pe(t%52)+n).replace(ze,"$1-$2")}var Ne,Oe=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},$e=function(e){return Oe(5381,e)};function Le(e){return Te($e(e)>>>0)}function je(e){return e.displayName||e.name||"Component"}function Ae(e){return"string"==typeof e&&!0}var Re="function"==typeof Symbol&&Symbol.for,De=Re?Symbol.for("react.memo"):60115,Fe=Re?Symbol.for("react.forward_ref"):60112,Ie={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Me={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},He={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ue=((Ne={})[Fe]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ne[De]=He,Ne);function Be(e){return("type"in(t=e)&&t.type.$$typeof)===De?He:"$$typeof"in e?Ue[e.$$typeof]:Ie;var t}var We=Object.defineProperty,Ve=Object.getOwnPropertyNames,qe=Object.getOwnPropertySymbols,Ke=Object.getOwnPropertyDescriptor,Qe=Object.getPrototypeOf,Ge=Object.prototype;function Ye(e,t,n){if("string"!=typeof t){if(Ge){var r=Qe(t);r&&r!==Ge&&Ye(e,r,n)}var a=Ve(t);qe&&(a=a.concat(qe(t)));for(var l=Be(e),i=Be(t),o=0;o<a.length;++o){var u=a[o];if(!(u in Me||n&&n[u]||i&&u in i||l&&u in l)){var s=Ke(t,u);try{We(e,u,s)}catch(e){}}}}return e}function Xe(e){return"function"==typeof e}function Ze(e){return"object"==typeof e&&"styledComponentId"in e}function Je(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function et(e,t){return e.join(t||"")}function tt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function nt(e,t,n){if(void 0===n&&(n=!1),!n&&!tt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=nt(e[r],t[r]);else if(tt(t))for(var r in t)e[r]=nt(e[r],t[r]);return e}function rt(e,t){Object.defineProperty(e,"toString",{value:t})}var at=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw he(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var l=r;l<a;l++)this.groupSizes[l]=0}for(var i=this.indexOfGroup(e+1),o=0,u=(l=0,t.length);l<u;l++)this.tag.insertRule(i,t[l])&&(this.groupSizes[e]++,i++,o++);o>0&&this._cGroup>e&&(this._cIndex+=o)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,l=r;l<a;l++)t+=this.tag.getRule(l)+ce;return t},e}(),lt="style[".concat(ie,"][").concat(ue,'="').concat(se,'"]'),it=new RegExp("^".concat(ie,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ot=function(e){return"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},ut=function(e){if(!e)return document;if(ot(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(ot(t))return t}return document},st=function(e,t,n){for(var r,a=n.split(","),l=0,i=a.length;l<i;l++)(r=a[l])&&e.registerName(t,r)},ct=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(ce),a=[],l=0,i=r.length;l<i;l++){var o=r[l].trim();if(o){var u=o.match(it);if(u){var s=0|parseInt(u[1],10),c=u[2];0!==s&&(be(c,s),st(e,c,u[3]),e.getTag().insertRules(s,a)),a.length=0}else a.push(o)}}},dt=function(e){for(var t=ut(e.options.target).querySelectorAll(lt),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(ie)!==oe&&(ct(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ft(){return n.nc}var pt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ie,"]")));return t[t.length-1]}(n),l=void 0!==a?a.nextSibling:null;r.setAttribute(ie,oe),r.setAttribute(ue,se);var i=ft();return i&&r.setAttribute("nonce",i),n.insertBefore(r,l),r},ht=function(){function e(e){this.element=pt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets,r=0,a=n.length;r<a;r++){var l=n[r];if(l.ownerNode===e)return l}throw he(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),mt=function(){function e(e){this.element=pt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),gt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),vt=de,yt={isServer:!de,useCSSOMInjection:!fe},bt=function(){function e(e,t,n){void 0===e&&(e=we),void 0===t&&(t={});var r=this;this.options=l(l({},yt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&de&&vt&&(vt=!1,dt(this)),rt(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return ge.get(e)}(n);if(void 0===a)return"continue";var l=e.names.get(a);if(void 0===l||!l.size)return"continue";var i=t.getGroup(n);if(0===i.length)return"continue";var o=ie+".g"+n+'[id="'+a+'"]',u="";l.forEach(function(e){e.length>0&&(u+=e+",")}),r+=i+o+'{content:"'+u+'"}'+ce},l=0;l<n;l++)a(l);return r}(r)})}return e.registerId=function(e){return ye(e)},e.prototype.rehydrate=function(){!this.server&&de&&dt(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var r=new e(l(l({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&de&&t.target!==this.options.target&&ut(this.options.target)!==ut(t.target)&&dt(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new gt(n):t?new ht(n):new mt(n)}(this.options),new at(e)));var e},e.prototype.hasNameForId=function(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r},e.prototype.registerName=function(e,t){ye(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ye(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ye(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}();function xt(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in o||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var wt=function(e){return e>="A"&&e<="Z"};function kt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;wt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var St=Symbol.for("sc-keyframes");var Et=function(e){return null==e||!1===e||""===e},Ct=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Et(r)&&(Array.isArray(r)&&r.isCss||Xe(r)?t.push("".concat(kt(n),":"),r,";"):tt(r)?t.push.apply(t,i(i(["".concat(n," {")],Ct(r),!1),["}"],!1)):t.push("".concat(kt(n),": ").concat(xt(n,r),";")))}return t};function _t(e,t,n,r,a){if(void 0===a&&(a=[]),"string"==typeof e)return e&&a.push(e),a;if(Et(e))return a;if(Ze(e))return a.push(".".concat(e.styledComponentId)),a;var l;if(Xe(e))return!Xe(l=e)||l.prototype&&l.prototype.isReactComponent||!t?(a.push(e),a):_t(e(t),t,n,r,a);if(function(e){return"object"==typeof e&&null!==e&&St in e}(e))return n?(e.inject(n,r),a.push(e.getName(r))):a.push(e),a;if(tt(e)){for(var i=Ct(e),o=0;o<i.length;o++)a.push(i[o]);return a}if(!Array.isArray(e))return a.push(e.toString()),a;for(o=0;o<e.length;o++)_t(e[o],t,n,r,a);return a}function zt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xe(n)&&!Ze(n))return!1}return!0}var Pt=$e(se),Tt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&zt(e),this.componentId=t,this.baseHash=Oe(Pt,t),this.baseStyle=n,bt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Je(r,this.staticRulesId);else{var a=et(_t(this.rules,e,t,n)),l=Te(Oe(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,l)){var i=n(a,".".concat(l),void 0,this.componentId);t.insertRules(this.componentId,l,i)}r=Je(r,l),this.staticRulesId=l}else{for(var o=Oe(this.baseHash,n.hash),u="",s=0;s<this.rules.length;s++){var c=this.rules[s];if("string"==typeof c)u+=c;else if(c){var d=et(_t(c,e,t,n));o=Oe(Oe(o,String(s)),d),u+=d}}if(u){var f=Te(o>>>0);if(!t.hasNameForId(this.componentId,f)){var p=n(u,".".concat(f),void 0,this.componentId);t.insertRules(this.componentId,f,p)}r=Je(r,f)}}return{className:r,css:"undefined"==typeof window?t.getTag().getGroup(ye(this.componentId)):""}},e}(),Nt=/&/g,Ot=47,$t=42;function Lt(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,r=0,a=!1,l=0;l<t;l++){var i=e.charCodeAt(l);if(0!==r||a||i!==Ot||e.charCodeAt(l+1)!==$t)if(a)i===$t&&e.charCodeAt(l+1)===Ot&&(a=!1,l++);else if(34!==i&&39!==i||0!==l&&92===e.charCodeAt(l-1)){if(0===r)if(123===i)n++;else if(125===i&&--n<0)return!0}else 0===r?r=i:r===i&&(r=0);else a=!0,l++}return 0!==n||0!==r}function jt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=jt(e.children,t)),e})}function At(e){var t,n,r,a=void 0===e?we:e,l=a.options,i=void 0===l?we:l,o=a.plugins,u=void 0===o?xe:o,s=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=u.slice();c.push(function(e){e.type===f&&e.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),e.props[0]=e.props[0].replace(Nt,n).replace(r,s))}),i.prefix&&c.push(ee),c.push(Z);var d,p=[],h=function(e){var t=C(e);return function(n,r,a,l){for(var i="",o=0;o<t;o++)i+=e[o](n,r,a,l)||"";return i}}(c.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)}))),m=function(e,a,l,o){void 0===a&&(a=""),void 0===l&&(l=""),void 0===o&&(o="&"),t=o,n=a,r=void 0;var u=function(e){if(!Lt(e))return e;for(var t=e.length,n="",r=0,a=0,l=0,i=!1,o=0;o<t;o++){var u=e.charCodeAt(o);if(0!==l||i||u!==Ot||e.charCodeAt(o+1)!==$t)if(i)u===$t&&e.charCodeAt(o+1)===Ot&&(i=!1,o++);else if(34!==u&&39!==u||0!==o&&92===e.charCodeAt(o-1)){if(0===l)if(123===u)a++;else if(125===u){if(--a<0){for(var s=o+1;s<t;){var c=e.charCodeAt(s);if(59===c||10===c)break;s++}s<t&&59===e.charCodeAt(s)&&s++,a=0,o=s-1,r=s;continue}0===a&&(n+=e.substring(r,o+1),r=o+1)}else 59===u&&0===a&&(n+=e.substring(r,o+1),r=o+1)}else 0===l?l=u:l===u&&(l=0);else i=!0,o++}if(r<t){var d=e.substring(r);Lt(d)||(n+=d)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],r=0,a=0,l=0,i=0;a<t;){var o=e.charCodeAt(a);if(34!==o&&39!==o||0!==a&&92===e.charCodeAt(a-1))if(0===l)if(o===Ot&&a+1<t&&e.charCodeAt(a+1)===$t){for(a+=2;a+1<t&&(e.charCodeAt(a)!==$t||e.charCodeAt(a+1)!==Ot);)a++;a+=2}else if(40===o&&a>=3&&108==(32|e.charCodeAt(a-1))&&114==(32|e.charCodeAt(a-2))&&117==(32|e.charCodeAt(a-3)))i=1,a++;else if(i>0)41===o?i--:40===o&&i++,a++;else if(o===$t&&a+1<t&&e.charCodeAt(a+1)===Ot)a>r&&n.push(e.substring(r,a)),r=a+=2;else if(o===Ot&&a+1<t&&e.charCodeAt(a+1)===Ot){for(a>r&&n.push(e.substring(r,a));a<t&&10!==e.charCodeAt(a);)a++;r=a}else a++;else a++;else 0===l?l=o:l===o&&(l=0),a++}return 0===r?e:(r<t&&n.push(e.substring(r)),n.join(""))}(e)),s=te(l||a?"".concat(l," ").concat(a," { ").concat(u," }"):u);return i.namespace&&(s=jt(s,i.namespace)),p=[],X(s,h),p};return m.hash=u.length?u.reduce(function(e,t){return t.name||he(15),Oe(e,t.name)},5381).toString():"",m}var Rt=new bt,Dt=At(),Ft=r.createContext({shouldForwardProp:void 0,styleSheet:Rt,stylis:Dt}),It=(Ft.Consumer,r.createContext(void 0));function Mt(){return r.useContext(Ft)}function Ht(e){if(!r.useMemo)return e.children;var t=Mt().styleSheet,n=r.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),a=r.useMemo(function(){return At({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),l=r.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:a}},[e.shouldForwardProp,n,a]);return r.createElement(Ft.Provider,{value:l},r.createElement(It.Provider,{value:a},e.children))}var Ut=r.createContext(void 0);Ut.Consumer;var Bt={};new Set;function Wt(e,t,n){var a=Ze(e),i=e,o=!Ae(e),u=t.attrs,s=void 0===u?xe:u,c=t.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":_e(e);Bt[n]=(Bt[n]||0)+1;var r="".concat(n,"-").concat(Le(se+n+Bt[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,f=t.displayName,p=void 0===f?function(e){return Ae(e)?"styled.".concat(e):"Styled(".concat(je(e),")")}(e):f,h=t.displayName&&t.componentId?"".concat(_e(t.displayName),"-").concat(t.componentId):t.componentId||d,m=a&&i.attrs?i.attrs.concat(s).filter(Boolean):s,g=t.shouldForwardProp;if(a&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;g=function(e,t){return v(e,t)&&y(e,t)}}else g=v}var b=new Tt(n,h,a?i.componentStyle:void 0);function x(e,t){return function(e,t,n){var a=e.attrs,i=e.componentStyle,o=e.defaultProps,u=e.foldedComponentIds,s=e.styledComponentId,c=e.target,d=r.useContext(Ut),f=Mt(),p=e.shouldForwardProp||f.shouldForwardProp,h=ke(t,d,o)||we,m=function(e,t,n){for(var r,a=l(l({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var o=Xe(r=e[i])?r(a):r;for(var u in o)"className"===u?a.className=Je(a.className,o[u]):"style"===u?a.style=l(l({},a.style),o[u]):u in t&&void 0===t[u]||(a[u]=o[u])}return"className"in t&&"string"==typeof t.className&&(a.className=Je(a.className,t.className)),a}(a,t,h),g=m.as||c,v={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y&&m.theme===h||("forwardedAs"===y?v.as=m.forwardedAs:p&&!p(y,g)||(v[y]=m[y]));var b=function(e,t){var n=Mt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,m),x=b.className,w=Je(u,s);return x&&(w+=" "+x),m.className&&(w+=" "+m.className),v[Ae(g)&&!Se.has(g)?"class":"className"]=w,n&&(v.ref=n),(0,r.createElement)(g,v)}(w,e,t)}x.displayName=p;var w=r.forwardRef(x);return w.attrs=m,w.componentStyle=b,w.displayName=p,w.shouldForwardProp=g,w.foldedComponentIds=a?Je(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=h,w.target=a?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)nt(e,a[r],!0);return e}({},i.defaultProps,e):e}}),rt(w,function(){return".".concat(w.styledComponentId)}),o&&Ye(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Vt(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var qt=function(e){return Object.assign(e,{isCss:!0})};function Kt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Xe(e)||tt(e))return qt(_t(Vt(xe,i([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?_t(r):qt(_t(Vt(r,t)))}function Qt(e,t,n){if(void 0===n&&(n=we),!t)throw he(1,t);var r=function(r){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];return e(t,n,Kt.apply(void 0,i([r],a,!1)))};return r.attrs=function(r){return Qt(e,t,l(l({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Qt(e,t,l(l({},n),r))},r}var Gt=function(e){return Qt(Wt,e)},Yt=Gt;Se.forEach(function(e){Yt[e]=Gt(e)});var Xt,Zt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=zt(e),bt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(et(_t(this.rules,t,n,r)),""),l=this.componentId+e;n.insertRules(l,l,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&bt.registerId(this.componentId+e);var a=this.componentId+e;this.isStatic?n.hasNameForId(a,a)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))},e}();!function(){function e(e,t){var n=this;this[Xt]=!0,this.inject=function(e,t){void 0===t&&(t=Dt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,rt(this,function(){throw he(12,String(n.name))})}e.prototype.getName=function(e){return void 0===e&&(e=Dt),this.name+e.hash}}();Xt=St;(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=ft(),r=et([n&&'nonce="'.concat(n,'"'),"".concat(ie,'="true"'),"".concat(ue,'="').concat(se,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw he(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw he(2);var n=e.instance.toString();if(!n)return[];var a=((t={})[ie]="",t[ue]=se,t.dangerouslySetInnerHTML={__html:n},t),i=ft();return i&&(a.nonce=i),[r.createElement("style",l({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new bt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw he(2);return r.createElement(Ht,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw he(3)}})(),"__sc-".concat(ie,"__");const Jt={smallPhone:360,phone:430,tablet:820,desktopHd:1920,tv4k:3840},en={bordoAccent:"#9e1e36",bordoAccentDark:"#6a1426",bordoCore:"#4a1020",deepBlack:"#2e0810",outerSpace:"#2e0810",white:"#ffffff",goldMain:"#d4af37",goldHover:"#f1d592",goldSoft18:"rgba(212, 175, 55, 0.18)",goldSoft10:"rgba(180, 140, 30, 0.1)",goldSoft08:"rgba(212, 175, 55, 0.08)",goldSoft025:"rgba(212, 175, 55, 0.025)"},tn={main:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'},nn=Yt.div`
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
      ${en.bordoAccent} 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      ${en.bordoAccentDark} 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 50% 50%,
      ${en.bordoCore} 0%,
      ${en.deepBlack} 100%
    );

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 70% 0%,
        ${en.goldSoft18} 0%,
        transparent 45%
      ),
      radial-gradient(
        ellipse at 100% 50%,
        ${en.goldSoft10} 0%,
        transparent 40%
      ),
      radial-gradient(
        ellipse at 30% 100%,
        ${en.goldSoft08} 0%,
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
      ${en.goldSoft025} 80px,
      ${en.goldSoft025} 81px
    );
    pointer-events: none;
  }
`;var rn=n(579);const an=function(){return(0,rn.jsx)(nn,{})},ln=Yt.nav`
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

  @media (max-width: ${Jt.desktopHd}px) {
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

  @media (max-width: ${Jt.tablet}px) {
    padding: 6px 12px;
  }

  @media (max-width: ${Jt.phone}px) {
    min-height: 60px;
    column-gap: 8px;
    padding: 6px 10px;
  }
`,on=Yt.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 821px) {
    grid-area: left;
    flex: none;
    min-width: 0;
  }
`,un=Yt.div`
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
`,sn=Yt.div`
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
`,cn=Yt.div`
  display: flex;

  @media (max-width: 629px) {
    display: none;
  }
`,dn=Yt.button`
  display: none;
  border: 1px solid rgba(241, 213, 146, 0.38);
  background: rgba(34, 10, 16, 0.72);
  color: ${en.goldHover};
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
`,fn=Yt.button`
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
`,pn=Yt.aside`
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
`,hn=Yt.div`
  margin-top: 14px;
  padding-top: 12px;
  display: flex;
  justify-content: center;
  padding-left: 0;
  border-top: 1px solid rgba(241, 213, 146, 0.18);

  & > div {
    justify-content: center;
  }
`,mn=n.p+"static/media/znak-wodny.5040197ae93bea0121d6.png",gn=Yt.div`
  display: flex;
  align-items: center;
`,vn=Yt.img.attrs({src:mn,alt:"Logo"})`
  height: 90px;
  width: auto;
  cursor: pointer;
  filter: brightness(3) contrast(1.2) saturate(1.1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.34))
    drop-shadow(0 0 8px ${en.goldMain})
    drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18));
  transition:
    transform 0.3s ease,
    filter 0.3s ease;

  @media (max-width: ${Jt.tablet}px) {
    height: 72px;
  }

  @media (max-width: ${Jt.phone}px) {
    height: 58px;
  }

  &:hover {
    transform: scale(1.05);
    filter: brightness(3) contrast(1.2) saturate(1.1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${en.goldMain})
      drop-shadow(0 0 16px ${en.goldHover});
  }
`;const yn=function(){return(0,rn.jsx)(gn,{children:(0,rn.jsx)(vn,{})})},bn=Yt.ul`
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

  @media (max-width: ${Jt.phone}px) {
    gap: 4px 8px;
  }
`,xn=Yt.li`
  flex-shrink: 1;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: ${e=>(e.$vertical,"center")};
  gap: 0;
  width: auto;
  color: ${en.goldHover};
  font-family: ${tn.main};
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

  @media (max-width: ${Jt.phone}px) {
    letter-spacing: ${e=>e.$vertical?"0.9px":"0.7px"};
    font-size: ${e=>e.$vertical?"0.84rem":"0.64rem"};
    padding: ${e=>e.$vertical?"1px 0":"4px 6px"};
  }

  &:hover {
    color: ${en.white};
    transform: translateY(-1px);
    border-color: ${e=>e.$vertical?"transparent":"rgba(241, 213, 146, 0.48)"};
    background: ${e=>e.$vertical?"transparent":"linear-gradient(180deg, rgba(255, 245, 214, 0.08) 0%, rgba(44, 12, 22, 0.28) 100%)"};
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${en.goldMain},
      0 0 18px ${en.goldHover};
  }
`;const wn=function(e){let{vertical:t=!1,onItemClick:n}=e;const r=()=>{n&&n()};return(0,rn.jsxs)(bn,{$vertical:t,children:[(0,rn.jsx)(xn,{$vertical:t,onClick:r,children:"Oferta"}),(0,rn.jsx)(xn,{$vertical:t,onClick:r,children:"Aktualno\u015bci"}),(0,rn.jsx)(xn,{$vertical:t,onClick:r,children:"Wsp\xf3\u0142praca"}),(0,rn.jsx)(xn,{$vertical:t,onClick:r,children:"Opinie"}),(0,rn.jsx)(xn,{$vertical:t,onClick:r,children:"O Nas"})]})},kn=Yt.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: ${Jt.tablet}px) {
    gap: 14px;
  }

  @media (max-width: ${Jt.phone}px) {
    gap: 12px;
  }
`,Sn=Yt.a`
  color: ${en.goldHover};
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

  @media (max-width: ${Jt.tablet}px) {
    font-size: 1.18rem;
  }

  @media (max-width: ${Jt.phone}px) {
    font-size: 1.08rem;
  }

  &:hover {
    color: ${en.white};
    transform: translateY(-2px) scale(1.04);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${en.goldMain})
      drop-shadow(0 0 16px ${en.goldHover});
  }
`;var En={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cn=r.createContext&&r.createContext(En),_n=["attr","size","title"];function zn(){return zn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zn.apply(null,arguments)}function Pn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Tn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pn(Object(n),!0).forEach(function(t){Nn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Nn(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function On(e){return e&&e.map((e,t)=>r.createElement(e.tag,Tn({key:t},e.attr),On(e.child)))}function $n(e){return t=>r.createElement(Ln,zn({attr:Tn({},e.attr)},t),On(e.child))}function Ln(e){var t=t=>{var n,{attr:a,size:l,title:i}=e,o=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,_n),u=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",zn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,o,{className:n,style:Tn(Tn({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==Cn?r.createElement(Cn.Consumer,null,e=>t(e)):t(En)}function jn(e){return $n({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function An(e){return $n({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function Rn(e){return $n({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Dn(e){return $n({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(e)}function Fn(e){return $n({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function In(e){return $n({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function Mn(e){return $n({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(e)}function Hn(e){return $n({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}const Un=function(){return(0,rn.jsxs)(kn,{children:[(0,rn.jsx)(Sn,{href:"https://facebook.com",target:"_blank",children:(0,rn.jsx)(An,{})}),(0,rn.jsx)(Sn,{href:"https://youtube.com",target:"_blank",children:(0,rn.jsx)(jn,{})}),(0,rn.jsx)(Sn,{href:"https://allegro.pl",target:"_blank",children:(0,rn.jsx)(Dn,{title:"Allegro"})})]})};const Bn=function(){const[e,t]=(0,r.useState)(!1),n=()=>{t(!1)};return(0,rn.jsxs)(rn.Fragment,{children:[(0,rn.jsxs)(ln,{children:[(0,rn.jsx)(on,{children:(0,rn.jsx)(yn,{})}),(0,rn.jsx)(un,{children:(0,rn.jsx)(wn,{})}),(0,rn.jsxs)(sn,{children:[(0,rn.jsx)(cn,{children:(0,rn.jsx)(Un,{})}),(0,rn.jsx)(dn,{type:"button",onClick:()=>{t(e=>!e)},"aria-label":e?"Zamknij menu":"Otworz menu","aria-expanded":e,children:e?(0,rn.jsx)(Rn,{}):(0,rn.jsx)(Hn,{})})]})]}),(0,rn.jsx)(fn,{$open:e,onClick:n}),(0,rn.jsxs)(pn,{$open:e,children:[(0,rn.jsx)(wn,{vertical:!0,onItemClick:n}),(0,rn.jsx)(hn,{children:(0,rn.jsx)(Un,{})})]})]})},Wn=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=Kt.apply(void 0,i([e],t,!1)),o="sc-global-".concat(Le(JSON.stringify(a))),u=new Zt(a,o),s=new WeakMap,c=function(e){var t=Mt(),n=r.useContext(Ut),a=s.get(t.styleSheet);return void 0===a&&(a=t.styleSheet.allocateGSInstance(o),s.set(t.styleSheet,a)),r.useLayoutEffect(function(){return t.styleSheet.server||function(e,t,n,r,a){if(u.isStatic)u.renderStyles(e,pe,n,a);else{var i=l(l({},t),{theme:ke(t,r,c.defaultProps)});u.renderStyles(e,i,n,a)}}(a,e,t.styleSheet,n,t.stylis),function(){u.removeStyles(a,t.styleSheet)}},[a,e,t.styleSheet,n,t.stylis]),null};return r.memo(c)})`
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${en.outerSpace||"#1a0005"};
    color: ${en.white||"#ffffff"};
    font-family: "Manrope", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
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
    background: ${en.goldMain||"#d4af37"};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${en.goldHover||"#f1d592"};
  }
`,Vn=Yt.section`
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

  @media (max-width: ${Jt.tablet}px) {
    padding: 94px 0 0;
  }

  @media (max-width: 640px) {
    padding: 88px 0 0;
  }

  @media (max-width: ${Jt.phone}px) {
    padding: 84px 0 0;
  }
`,qn=Yt.div`
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

  @media (max-width: ${Jt.tablet}px) {
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

  @media (max-width: ${Jt.phone}px) {
    gap: 8px;
    padding: 4px 10px 0;
  }

  @media (max-width: 420px) {
    gap: 8px;
    padding: 4px 10px 0;
  }
`,Kn=Yt.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;

  @media (max-width: ${Jt.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${Jt.tablet}px) {
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

  @media (max-width: ${Jt.phone}px) {
    margin-top: 0;
  }

  @media (max-width: 420px) {
    margin-top: 0;
  }
`,Qn=Yt.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;

  @media (max-width: ${Jt.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${Jt.tablet}px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 760px;
    margin-top: 0;
  }

  @media (max-width: ${Jt.phone}px) {
    margin-top: 0;
  }
`,Gn=(Yt.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Yt.div`
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

  @media (max-width: ${Jt.tablet}px) {
    max-width: 760px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  @media (max-width: ${Jt.phone}px) {
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
    align-items: center;
    padding: 0 2px;
  }
`),Yn=Yt.div`
  font-family: "Manrope", "Segoe UI", sans-serif;
  color: rgba(255, 242, 214, 0.92);
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.2vw, 2.2px);
  font-size: clamp(0.62rem, 0.9vw, 0.82rem);
  font-weight: 500;
  margin-bottom: 18px;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);

  @media (max-width: ${Jt.tablet}px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${Jt.phone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.8px;
    margin-bottom: 12px;
  }
`,Xn=Yt.h1`
  margin: 0 0 18px;
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  color: ${en.goldHover};
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

  @media (max-width: ${Jt.tablet}px) {
    font-size: clamp(0.95rem, 3.2vw, 1.95rem);
    letter-spacing: 0;
    text-align: center;
    width: 100%;
    line-height: 1;
  }

  @media (max-width: ${Jt.phone}px) {
    margin-bottom: 14px;
    font-size: clamp(0.9rem, 5.2vw, 1.6rem);
    line-height: 1.1;
  }
`,Zn=Yt.p`
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

  @media (max-width: ${Jt.tablet}px) {
    max-width: 560px;
    font-size: clamp(0.74rem, 1.8vw, 0.84rem);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${Jt.phone}px) {
    max-width: 100%;
    font-size: clamp(0.72rem, 3.4vw, 0.8rem);
    line-height: 1.45;
    text-align: center;
  }
`,Jn=Yt.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: nowrap;

  @media (max-width: ${Jt.tablet}px) {
    width: 100%;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10px;
  }

  @media (max-width: ${Jt.phone}px) {
    gap: 8px;
    margin-top: 22px;
    flex-wrap: nowrap;
    justify-content: center;
  }
`,er=`\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 48px;\n  padding: 0 24px;\n  border-radius: 14px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.9px;\n  font-size: clamp(0.68rem, 0.8vw, 0.82rem);\n  font-weight: 700;\n  white-space: nowrap;\n  flex: 0 0 auto;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease,\n    color 0.3s ease, border-color 0.3s ease;\n\n  @media (max-width: ${Jt.tablet}px) {\n    min-height: 42px;\n    padding: 0 14px;\n    font-size: 0.74rem;\n    letter-spacing: 0.8px;\n  }\n\n  @media (max-width: ${Jt.phone}px) {\n    min-height: 40px;\n    padding: 0 12px;\n    font-size: 0.7rem;\n    letter-spacing: 0.7px;\n  }\n`,tr=Yt.a`
  ${er}
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
`,nr=Yt.a`
  ${er}
  color: rgba(255, 246, 220, 0.92);
  background: rgba(53, 13, 19, 0.22);
  border: 1px solid rgba(241, 213, 146, 0.58);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.04),
    0 10px 24px rgba(0, 0, 0, 0.14);

  &:hover {
    transform: translateY(-1px);
    color: ${en.white};
    border-color: rgba(241, 213, 146, 0.78);
    box-shadow:
      0 14px 30px rgba(0, 0, 0, 0.2),
      0 0 18px rgba(212, 175, 55, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  }
`;const rr=function(){return(0,rn.jsxs)(Gn,{children:[(0,rn.jsx)(Yn,{children:"Unikalny design, kt\xf3ry zachwyca"}),(0,rn.jsxs)(Xn,{children:["Luksusowe i funkcjonalne",(0,rn.jsx)("br",{}),"strony WWW dla Twojej marki"]}),(0,rn.jsxs)(Zn,{children:["Projektujemy spersonalizowane, unikalne rozwi\u0105zania cyfrowe,",(0,rn.jsx)("br",{}),"kt\xf3re buduj\u0105 autorytet i przyci\u0105gaj\u0105 klient\xf3w premium."]}),(0,rn.jsxs)(Jn,{children:[(0,rn.jsx)(tr,{href:"#projekty",children:"Zobacz Projekty"}),(0,rn.jsx)(nr,{href:"#oferta",children:"Poznaj Ofert\u0119"})]})]})},ar=Yt.div`
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

  @media (max-width: ${Jt.tablet}px) {
    width: min(100%, 760px);
    height: clamp(240px, 46vw, 380px);
    padding: 2px;
    margin: 0 auto;
  }

  @media (max-width: ${Jt.phone}px) {
    padding: 0 2px;
  }
`,lr=Yt.div`
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

  @media (max-width: ${Jt.tablet}px) {
    --offset-distance: 68px;
    --edge-offset-distance: 112px;
  }

  @media (max-width: ${Jt.phone}px) {
    --offset-distance: 56px;
    --edge-offset-distance: 98px;
  }
`,ir=Yt.img`
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
  box-shadow: ${e=>e.$active?`0 28px 50px rgba(0, 0, 0, 0.45), 0 0 20px ${en.goldSoft18}`:"0 16px 26px rgba(0, 0, 0, 0.3)"};
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

  @media (max-width: ${Jt.phone}px) {
    width: 260px;
    height: 182px;
  }
`,or=n.p+"static/media/pexels-dimkidama-15115560.04167beb6bd16a6e9fd4.jpg",ur=n.p+"static/media/pexels-firmbee-com-22729701-6963740.a9a8b980823767df4886.jpg",sr=n.p+"static/media/pexels-magnetme-3917414-5839461.06d3415285cbf1cc0bf1.jpg",cr=n.p+"static/media/pexels-rdne-7310202.0cfb9c3eef397dd77e13.jpg",dr=[or,ur,sr,cr,ur],fr=(e,t,n)=>{let r=t-e;return r>n/2&&(r-=n),r<-n/2&&(r+=n),r};const pr=function(){const[e,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{const e=setInterval(()=>{t(e=>(e+1)%dr.length)},4e3);return()=>clearInterval(e)},[]),(0,rn.jsx)(ar,{children:(0,rn.jsx)(lr,{children:dr.map((t,n)=>(0,rn.jsx)(ir,{src:t,alt:`Projekt ${n+1}`,$offset:fr(e,n,dr.length),$active:n===e},`${t}-${n}`))})})},hr=Yt.section`
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
`,mr=Yt.div`
  text-align: center;
  margin-bottom: clamp(8px, 1.2vw, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,gr=Yt.h2`
  color: ${en.goldHover};
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
`,vr=Yt.p`
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
`,yr=Yt.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
`,br=Yt.div`
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
`,xr=Yt.div`
  flex: 0 0 calc(25% - 15px);
  min-width: 0;
  scroll-snap-align: start;
  display: flex;

  @media (max-width: 1050px) {
    flex: 0 0 calc(33.33% - 14px);
  }

  @media (max-width: ${Jt.tablet}px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(50% - 6px);
  }

  @media (max-width: ${Jt.smallPhone}px) {
    flex: 0 0 calc(100% - 0px);
  }
`,wr=Yt.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${en.goldMain};
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
`,kr=Yt.div`
  margin-top: clamp(36px, 5vw, 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover div {
    width: 100px;
  }
`,Sr=Yt.span`
  color: ${en.goldMain};
  text-transform: uppercase;
  letter-spacing: clamp(1.4px, 0.3vw, 4px);
  font-size: clamp(0.68rem, 0.9vw, 0.75rem);
  margin-bottom: 10px;
`,Er=Yt.div`
  width: 50px;
  height: 1px;
  background: ${en.goldMain};
  transition: width 0.4s ease;
`,Cr=Yt.div`
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
`,_r=Yt.div`
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
`,zr=Yt.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  filter: brightness(0.88) saturate(0.9);
  transition:
    filter 0.45s ease,
    transform 0.45s ease;

  ${Cr}:hover & {
    filter: brightness(1) saturate(1);
    transform: scale(1.03);
  }
`,Pr=Yt.div`
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
`,Tr=Yt.h3`
  color: ${en.goldHover};
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
`,Nr=(Yt.p`
  color: rgba(255, 245, 220, 0.78);
  font-size: clamp(0.68rem, 2.2vw, 0.82rem);
  text-align: center;
  line-height: 1.5;
  margin: 0 clamp(8px, 2vw, 20px);
  max-width: 240px;
`,Yt.div`
  width: 44px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${en.goldMain} 50%,
    transparent 100%
  );
  margin-top: 14px;
  opacity: 0.65;
`);const Or=function(e){let{project:t}=e;const{type:n,url:r,title:a,description:l,image:i,icon:o}=t;return(0,rn.jsxs)(Cr,{as:"link"===n?"a":"div",href:"link"===n?r:void 0,target:"link"===n?"_blank":void 0,isLink:"link"===n,children:[(0,rn.jsx)(_r,{children:(0,rn.jsx)(zr,{src:i,alt:a})}),(0,rn.jsx)(Pr,{children:(0,rn.jsx)(o,{})}),(0,rn.jsx)(Tr,{children:a}),(0,rn.jsx)(Nr,{})]})},$r=[{id:1,type:"link",url:"https://google.com",title:"Boutique E-commerce",description:"W pe\u0142ni dzia\u0142aj\u0105cy sklep internetowy premium.",image:or,icon:Fn},{id:2,type:"example",title:"Studio Architektury",image:ur,icon:function(e){return $n({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}},{id:3,type:"example",title:"Portfolio Fotografa",image:sr,icon:function(e){return $n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(e)}},{id:4,type:"link",url:"https://moja-inna-strona.pl",title:"Dashboard Finansowy",image:cr,icon:function(e){return $n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}},{id:5,type:"example",title:"Projekt Specjalny",image:or,icon:Fn},{id:6,type:"example",title:"Projekt Specjalny 2",image:ur,icon:Fn}];const Lr=function(){const e=(0,r.useRef)(null),t=(0,r.useRef)(!1),n=n=>{const r=e.current;if(!r||t.current)return;const a=r.firstElementChild;if(!a)return;const l=parseFloat(getComputedStyle(r).gap)||16,i=a.offsetWidth+l,o=r.scrollWidth-r.clientWidth;t.current=!0,n>0&&r.scrollLeft>=o-2?r.scrollTo({left:0,behavior:"smooth"}):n<0&&r.scrollLeft<=2?r.scrollTo({left:o,behavior:"smooth"}):r.scrollBy({left:n*i,behavior:"smooth"}),setTimeout(()=>{t.current=!1},580)};return(0,rn.jsxs)(hr,{children:[(0,rn.jsxs)(mr,{children:[(0,rn.jsx)(gr,{children:"Przyk\u0142adowe Prace"}),(0,rn.jsx)(vr,{children:"Ekskluzywne projekty cyfrowe tworzone z pasj\u0105"})]}),(0,rn.jsxs)(yr,{children:[(0,rn.jsx)(wr,{onClick:()=>n(-1),"aria-label":"Poprzedni projekt",children:(0,rn.jsx)(Mn,{})}),(0,rn.jsx)(br,{ref:e,children:$r.map(e=>(0,rn.jsx)(xr,{children:(0,rn.jsx)(Or,{project:e})},e.id))}),(0,rn.jsx)(wr,{onClick:()=>n(1),"aria-label":"Nast\u0119pny projekt",children:(0,rn.jsx)(In,{})})]}),(0,rn.jsxs)(kr,{children:[(0,rn.jsx)(Sr,{children:"Zobacz Pe\u0142ne Portfolio"}),(0,rn.jsx)(Er,{})]})]})},jr=Yt.footer`
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

  @media (max-width: ${Jt.desktopHd}px) {
    padding: 55px 45px 22px;
  }

  @media (max-width: ${Jt.tablet}px) {
    padding: 50px 25px 20px;
  }

  @media (max-width: ${Jt.phone}px) {
    padding: 45px 18px 18px;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    padding: 35px 14px 15px;
  }
`,Ar=Yt.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 50px;
  width: 100%;

  @media (max-width: ${Jt.tablet}px) {
    grid-template-columns: 1fr;
    gap: 35px;
    text-align: center;
  }

  @media (max-width: ${Jt.phone}px) {
    gap: 20px;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    gap: 16px;
  }
`;const Rr={brand:{name:"Klara Queen",slogan:"Digital Excellence",description:"Tworzymy luksusowe do\u015bwiadczenia cyfrowe, kt\xf3re definiuj\u0105 now\u0105 jako\u015b\u0107 Twojej marki w sieci."},links:[{name:"Strona g\u0142\xf3wna",url:"#home"},{name:"Oferta",url:"#offer"},{name:"Aktualno\u015bci",url:"#news"},{name:"Wsp\xf3\u0142praca",url:"#collaboration"},{name:"Opinie",url:"#opinions"},{name:"O Nas",url:"#about"},{name:"Najcz\u0119stsze pytania",url:"#faq"}],socials:[{id:1,icon:jn,url:"https://youtube.com",label:"YouTube"},{id:2,icon:An,url:"https://facebook.com",label:"Facebook"},{id:3,icon:function(e){return $n({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(e)},url:"https://allegro.pl",label:"Allegro"}],contact:{email:"kontakt@studioklara.pl",copy:`\xa9 ${(new Date).getFullYear()} Klara Queen. Wszystkie prawa zastrze\u017cone.`}},Dr=Yt.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: ${Jt.tablet}px) {
    align-items: center;
  }
`,Fr=Yt.div`
  display: flex;
  align-items: center;
  margin-top: -56px;

  @media (max-width: ${Jt.desktopHd}px) {
    margin-top: -50px;
  }

  @media (max-width: ${Jt.tablet}px) {
    margin-top: -44px;
  }

  @media (max-width: ${Jt.phone}px) {
    margin-top: -36px;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    margin-top: -28px;
  }
`,Ir=Yt.img`
  height: 180px;
  width: auto;
  cursor: pointer;
  filter: brightness(2.8) contrast(1.1) saturate(1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.3))
    drop-shadow(0 0 6px ${en.goldMain})
    drop-shadow(0 1px 4px rgba(0, 0, 0, 0.15));
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    filter: brightness(2.8) contrast(1.1) saturate(1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.4))
      drop-shadow(0 0 8px ${en.goldMain})
      drop-shadow(0 0 12px ${en.goldHover});
  }

  @media (max-width: ${Jt.desktopHd}px) {
    height: 168px;
  }

  @media (max-width: ${Jt.tablet}px) {
    height: 156px;
  }

  @media (max-width: ${Jt.phone}px) {
    height: 140px;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    height: 120px;
  }
`,Mr=Yt.p`
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

  @media (max-width: ${Jt.tablet}px) {
    font-size: 0.88rem;
    max-width: 500px;
  }

  @media (max-width: ${Jt.phone}px) {
    font-size: 0.78rem;
    line-height: 1.5;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    font-size: 0.72rem;
    line-height: 1.4;
  }
`;const Hr=function(e){let{data:t}=e;return(0,rn.jsxs)(Dr,{children:[(0,rn.jsx)(Fr,{children:(0,rn.jsx)(Ir,{src:mn,alt:t.name})}),(0,rn.jsx)(Mr,{children:t.description})]})},Ur=Yt.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${Jt.tablet}px) {
    align-items: center;
  }

  @media (max-width: ${Jt.phone}px) {
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    gap: 10px;
  }
`,Br=Yt.h4`
  color: ${en.goldHover};
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

  @media (max-width: ${Jt.phone}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,Wr=Yt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;

  @media (max-width: ${Jt.tablet}px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  @media (max-width: ${Jt.phone}px) {
    gap: 8px;
    place-items: center;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    gap: 6px;
  }
`,Vr=Yt.a`
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
    background: ${en.goldMain};
    transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${en.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 16px rgba(212, 175, 55, 0.45);

    &::before {
      width: 100%;
    }
  }

  @media (max-width: ${Jt.tablet}px) {
    font-size: 0.86rem;
  }

  @media (max-width: ${Jt.phone}px) {
    font-size: 0.76rem;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    font-size: 0.7rem;
  }
`;const qr=function(e){let{data:t}=e;return(0,rn.jsxs)(Ur,{children:[(0,rn.jsx)(Br,{children:"Nawigacja"}),(0,rn.jsx)(Wr,{children:t.map((e,t)=>(0,rn.jsx)(Vr,{href:e.url,children:e.name},t))})]})},Kr=Yt.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${Jt.tablet}px) {
    align-items: center;
  }

  @media (max-width: ${Jt.phone}px) {
    gap: 12px;
    text-align: center;
    align-items: center;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    gap: 10px;
  }
`,Qr=Yt.h4`
  color: ${en.goldHover};
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

  @media (max-width: ${Jt.phone}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,Gr=Yt.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: ${Jt.tablet}px) {
    justify-content: center;
    gap: 28px;
  }

  @media (max-width: ${Jt.phone}px) {
    gap: 16px;
    justify-content: center;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    gap: 12px;
  }
`,Yr=Yt.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${en.white};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  opacity: 0.8;

  svg {
    font-size: 1.6rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.15));
    color: ${en.goldMain};
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
    color: ${en.white};

    svg {
      transform: scale(1.12);
      color: ${en.goldHover};
      filter: drop-shadow(0 6px 12px rgba(212, 175, 55, 0.3));
    }

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: ${Jt.phone}px) {
    gap: 6px;

    svg {
      font-size: 1.4rem;
    }
  }

  @media (max-width: ${Jt.smallPhone}px) {
    gap: 5px;

    svg {
      font-size: 1.2rem;
    }
  }
`,Xr=Yt.span`
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: ${en.white};
  opacity: 0.75;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: "Cormorant Garamond", serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: ${Jt.phone}px) {
    font-size: 0.58rem;
    letter-spacing: 1px;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    font-size: 0.54rem;
  }
`;const Zr=function(e){let{data:t}=e;return(0,rn.jsxs)(Kr,{children:[(0,rn.jsx)(Qr,{children:"Nasze Kana\u0142y"}),(0,rn.jsx)(Gr,{children:t.map(e=>(0,rn.jsxs)(Yr,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,rn.jsx)(e.icon,{}),(0,rn.jsx)(Xr,{children:e.label})]},e.id))})]})},Jr=Yt.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px 0;
  border-top: 1px solid rgba(212, 175, 55, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: ${Jt.tablet}px) {
    flex-direction: column;
    gap: 15px;
    margin: 35px auto 0;
    padding: 18px 0;
  }

  @media (max-width: ${Jt.phone}px) {
    margin: 30px auto 0;
    padding: 15px 0;
    gap: 12px;
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    margin: 20px auto 0;
    padding: 12px 0;
    gap: 10px;
  }
`,ea=Yt.span`
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

  @media (max-width: ${Jt.phone}px) {
    font-size: 0.68rem;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    font-size: 0.63rem;
  }
`,ta=Yt.a`
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
      ${en.goldMain} 100%
    );
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${en.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(212, 175, 55, 0.6);

    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${Jt.phone}px) {
    font-size: 0.76rem;
    letter-spacing: 0.8px;
  }

  @media (max-width: ${Jt.smallPhone}px) {
    font-size: 0.7rem;
  }
`;const na=function(e){let{data:t}=e;return(0,rn.jsxs)(Jr,{children:[(0,rn.jsx)(ea,{children:t.copy}),(0,rn.jsx)(ta,{href:`mailto:${t.email}`,children:t.email})]})};const ra=function(){const{brand:e,links:t,socials:n,contact:r}=Rr;return(0,rn.jsxs)(jr,{children:[(0,rn.jsxs)(Ar,{children:[(0,rn.jsx)(Hr,{data:e}),(0,rn.jsx)(qr,{data:t}),(0,rn.jsx)(Zr,{data:n})]}),(0,rn.jsx)(na,{data:r})]})};const aa=function(){return(0,rn.jsxs)(rn.Fragment,{children:[(0,rn.jsx)(Vn,{children:(0,rn.jsxs)(qn,{children:[(0,rn.jsx)(Kn,{children:(0,rn.jsx)(rr,{})}),(0,rn.jsx)(Qn,{children:(0,rn.jsx)(pr,{})})]})}),(0,rn.jsx)(Lr,{}),(0,rn.jsx)(ra,{})]})};const la=function(){return(0,rn.jsxs)(rn.Fragment,{children:[(0,rn.jsx)(Wn,{}),(0,rn.jsx)(an,{}),(0,rn.jsx)(Bn,{}),(0,rn.jsx)(aa,{})]})};a.createRoot(document.getElementById("root")).render((0,rn.jsx)(r.StrictMode,{children:(0,rn.jsx)(la,{})}))})();
//# sourceMappingURL=main.ba21bae9.js.map