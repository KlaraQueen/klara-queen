/*! For license information please see main.c96cf81f.js.LICENSE.txt */
(()=>{"use strict";var e={4(e,t,n){var r=n(853),a=n(43),i=n(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(s(e)!==e)throw Error(o(188))}function p(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=p(e)))return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),v=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),C=Symbol.for("react.lazy");Symbol.for("react.scope");var E=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var T=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var P=Symbol.iterator;function $(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=P&&e[P]||e["@@iterator"])?e:null}var _=Symbol.for("react.client.reference");function N(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===_?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case y:return"Fragment";case w:return"Profiler";case x:return"StrictMode";case z:return"Suspense";case j:return"SuspenseList";case E:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case g:return"Portal";case v:return e.displayName||"Context";case b:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case S:return null!==(t=e.displayName||null)?t:N(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return N(e(t))}catch(Gn){}}return null}var O=Array.isArray,R=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M={pending:!1,data:null,method:null,action:null},A=[],D=-1;function I(e){return{current:e}}function F(e){0>D||(e.current=A[D],A[D]=null,D--)}function W(e,t){D++,A[D]=e.current,e.current=t}var U,H,B=I(null),K=I(null),G=I(null),V=I(null);function Y(e,t){switch(W(G,t),W(K,e),W(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?xd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=wd(t=xd(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(B),W(B,e)}function q(){F(B),F(K),F(G)}function Q(e){null!==e.memoizedState&&W(V,e);var t=B.current,n=wd(t,e.type);t!==n&&(W(K,e),W(B,n))}function J(e){K.current===e&&(F(B),F(K)),V.current===e&&(F(V),dp._currentValue=M)}function X(e){if(void 0===U)try{throw Error()}catch(Gn){var t=Gn.stack.trim().match(/\n( *(at )?)/);U=t&&t[1]||"",H=-1<Gn.stack.indexOf("\n    at")?" (<anonymous>)":-1<Gn.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+U+e+H}var Z=!1;function ee(e,t){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(Gn){var r=Gn}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}}else{try{throw Error()}catch(i){r=i}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(o){if(o&&r&&"string"===typeof o.stack)return[o.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),o=i[0],l=i[1];if(o&&l){var s=o.split("\n"),c=l.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===c.length)for(r=s.length-1,a=c.length-1;1<=r&&0<=a&&s[r]!==c[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==c[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==c[a]){var u="\n"+s[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=a);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?X(n):""}function te(e,t){switch(e.tag){case 26:case 27:case 5:return X(e.type);case 16:return X("Lazy");case 13:return e.child!==t&&null!==t?X("Suspense Fallback"):X("Suspense");case 19:return X("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return X("Activity");default:return""}}function ne(e){try{var t="",n=null;do{t+=te(e,n),n=e,e=e.return}while(e);return t}catch(Gn){return"\nError generating stack: "+Gn.message+"\n"+Gn.stack}}var re=Object.prototype.hasOwnProperty,ae=r.unstable_scheduleCallback,ie=r.unstable_cancelCallback,oe=r.unstable_shouldYield,le=r.unstable_requestPaint,se=r.unstable_now,ce=r.unstable_getCurrentPriorityLevel,ue=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,pe=r.unstable_NormalPriority,fe=r.unstable_LowPriority,me=r.unstable_IdlePriority,he=r.log,ge=r.unstable_setDisableYieldValue,ye=null,xe=null;function we(e){if("function"===typeof he&&ge(e),xe&&"function"===typeof xe.setStrictMode)try{xe.setStrictMode(ye,e)}catch(t){}}var be=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(ve(e)/ke|0)|0},ve=Math.log,ke=Math.LN2;var ze=256,je=262144,Se=4194304;function Ce(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ee(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var l=134217727&r;return 0!==l?0!==(r=l&~i)?a=Ce(r):0!==(o&=l)?a=Ce(o):n||0!==(n=l&~e)&&(a=Ce(n)):0!==(l=r&~i)?a=Ce(l):0!==o?a=Ce(o):n||0!==(n=r&~e)&&(a=Ce(n)),0===a?0:0!==t&&t!==a&&0===(t&i)&&((i=a&-a)>=(n=t&-t)||32===i&&0!==(4194048&n))?t:a}function Te(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Pe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function $e(){var e=Se;return 0===(62914560&(Se<<=1))&&(Se=4194304),e}function _e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ne(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Oe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-be(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function Re(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-be(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Le(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:Me(n))&(e.suspendedLanes|t))?0:n}function Me(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ae(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function De(){var e=L.p;return 0!==e?e:void 0===(e=window.event)?32:Ep(e.type)}function Ie(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var Fe=Math.random().toString(36).slice(2),We="__reactFiber$"+Fe,Ue="__reactProps$"+Fe,He="__reactContainer$"+Fe,Be="__reactEvents$"+Fe,Ke="__reactListeners$"+Fe,Ge="__reactHandles$"+Fe,Ve="__reactResources$"+Fe,Ye="__reactMarker$"+Fe;function qe(e){delete e[We],delete e[Ue],delete e[Be],delete e[Ke],delete e[Ge]}function Qe(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[He]||n[We]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Ad(e);null!==e;){if(n=e[We])return n;e=Ad(e)}return t}n=(e=n).parentNode}return null}function Je(e){if(e=e[We]||e[He]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function Xe(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function Ze(e){var t=e[Ve];return t||(t=e[Ve]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Ye]=!0}var tt=new Set,nt={};function rt(e,t){at(e,t),at(e+"Capture",t)}function at(e,t){for(nt[e]=t,e=0;e<t.length;e++)tt.add(t[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},lt={};function st(e,t,n){if(a=t,re.call(lt,a)||!re.call(ot,a)&&(it.test(a)?lt[a]=!0:(ot[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function ct(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function ut(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function pt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ft(e){if(!e._valueTracker){var t=pt(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pt(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ht(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var gt=/[\n"\\]/g;function yt(e){return e.replace(gt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function xt(e,t,n,r,a,i,o,l){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?bt(e,o,dt(t)):null!=n?bt(e,o,dt(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=i&&(e.defaultChecked=!!i),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+dt(l):e.removeAttribute("name")}function wt(e,t,n,r,a,i,o,l){if(null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.type=i),null!=t||null!=n){if(!("submit"!==i&&"reset"!==i||void 0!==t&&null!==t))return void ft(e);n=null!=n?""+dt(n):"",t=null!=t?""+dt(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o),ft(e)}function bt(e,t,n){"number"===t&&ht(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function kt(e,t,n){null==t||((t=""+dt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+dt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function zt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(O(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=dt(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),ft(e)}function jt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var St=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ct(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||St.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Et(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Ct(e,a,r)}else for(var i in t)t.hasOwnProperty(i)&&Ct(e,i,t[i])}function Tt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _t(e){return $t.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Nt(){}var Ot=null;function Rt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Lt=null,Mt=null;function At(e){var t=Je(e);if(t&&(e=t.stateNode)){var n=e[Ue]||null;e:switch(e=t.stateNode,t.type){case"input":if(xt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Ue]||null;if(!a)throw Error(o(90));xt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&mt(r)}break e;case"textarea":kt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&vt(e,!!n.multiple,t,!1)}}}var Dt=!1;function It(e,t,n){if(Dt)return e(t,n);Dt=!0;try{return e(t)}finally{if(Dt=!1,(null!==Lt||null!==Mt)&&(eu(),Lt&&(t=Lt,e=Mt,Mt=Lt=null,At(t),e)))for(t=0;t<e.length;t++)At(e[t])}}function Ft(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Ue]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Wt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Ut=!1;if(Wt)try{var Ht={};Object.defineProperty(Ht,"passive",{get:function(){Ut=!0}}),window.addEventListener("test",Ht,Ht),window.removeEventListener("test",Ht,Ht)}catch(Xp){Ut=!1}var Bt=null,Kt=null,Gt=null;function Vt(){if(Gt)return Gt;var e,t,n=Kt,r=n.length,a="value"in Bt?Bt.value:Bt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Gt=a.slice(e,1<t?1-t:void 0)}function Yt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function qt(){return!0}function Qt(){return!1}function Jt(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?qt:Qt,this.isPropagationStopped=Qt,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=qt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=qt)},persist:function(){},isPersistent:qt}),t}var Xt,Zt,en,tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nn=Jt(tn),rn=f({},tn,{view:0,detail:0}),an=Jt(rn),on=f({},rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&"mousemove"===e.type?(Xt=e.screenX-en.screenX,Zt=e.screenY-en.screenY):Zt=Xt=0,en=e),Xt)},movementY:function(e){return"movementY"in e?e.movementY:Zt}}),ln=Jt(on),sn=Jt(f({},on,{dataTransfer:0})),cn=Jt(f({},rn,{relatedTarget:0})),un=Jt(f({},tn,{animationName:0,elapsedTime:0,pseudoElement:0})),dn=Jt(f({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),pn=Jt(f({},tn,{data:0})),fn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=hn[e])&&!!t[e]}function yn(){return gn}var xn=Jt(f({},rn,{key:function(e){if(e.key){var t=fn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Yt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?mn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yn,charCode:function(e){return"keypress"===e.type?Yt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Yt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),wn=Jt(f({},on,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),bn=Jt(f({},rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yn})),vn=Jt(f({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),kn=Jt(f({},on,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),zn=Jt(f({},tn,{newState:0,oldState:0})),jn=[9,13,27,32],Sn=Wt&&"CompositionEvent"in window,Cn=null;Wt&&"documentMode"in document&&(Cn=document.documentMode);var En=Wt&&"TextEvent"in window&&!Cn,Tn=Wt&&(!Sn||Cn&&8<Cn&&11>=Cn),Pn=String.fromCharCode(32),$n=!1;function _n(e,t){switch(e){case"keyup":return-1!==jn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var On=!1;var Rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ln(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Rn[e.type]:"textarea"===t}function Mn(e,t,n,r){Lt?Mt?Mt.push(r):Mt=[r]:Lt=r,0<(t=ad(t,"onChange")).length&&(n=new nn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var An=null,Dn=null;function In(e){Qu(e,0)}function Fn(e){if(mt(Xe(e)))return e}function Wn(e,t){if("change"===e)return t}var Un=!1;if(Wt){var Hn;if(Wt){var Bn="oninput"in document;if(!Bn){var Kn=document.createElement("div");Kn.setAttribute("oninput","return;"),Bn="function"===typeof Kn.oninput}Hn=Bn}else Hn=!1;Un=Hn&&(!document.documentMode||9<document.documentMode)}function Vn(){An&&(An.detachEvent("onpropertychange",Yn),Dn=An=null)}function Yn(e){if("value"===e.propertyName&&Fn(Dn)){var t=[];Mn(t,Dn,e,Rt(e)),It(In,t)}}function qn(e,t,n){"focusin"===e?(Vn(),Dn=n,(An=t).attachEvent("onpropertychange",Yn)):"focusout"===e&&Vn()}function Qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Fn(Dn)}function Jn(e,t){if("click"===e)return Fn(t)}function Xn(e,t){if("input"===e||"change"===e)return Fn(t)}var Zn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function er(e,t){if(Zn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!re.call(t,a)||!Zn(e[a],t[a]))return!1}return!0}function tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nr(e,t){var n,r=tr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=tr(r)}}function rr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?rr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ar(e){for(var t=ht((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ht((e=t.contentWindow).document)}return t}function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var or=Wt&&"documentMode"in document&&11>=document.documentMode,lr=null,sr=null,cr=null,ur=!1;function dr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ur||null==lr||lr!==ht(r)||("selectionStart"in(r=lr)&&ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},cr&&er(cr,r)||(cr=r,0<(r=ad(sr,"onSelect")).length&&(t=new nn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lr)))}function pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},mr={},hr={};function gr(e){if(mr[e])return mr[e];if(!fr[e])return e;var t,n=fr[e];for(t in n)if(n.hasOwnProperty(t)&&t in hr)return mr[e]=n[t];return e}Wt&&(hr=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);var yr=gr("animationend"),xr=gr("animationiteration"),wr=gr("animationstart"),br=gr("transitionrun"),vr=gr("transitionstart"),kr=gr("transitioncancel"),zr=gr("transitionend"),jr=new Map,Sr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(e,t){jr.set(e,t),rt(t,[e])}Sr.push("scrollEnd");var Er="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},Tr=[],Pr=0,$r=0;function _r(){for(var e=Pr,t=$r=Pr=0;t<e;){var n=Tr[t];Tr[t++]=null;var r=Tr[t];Tr[t++]=null;var a=Tr[t];Tr[t++]=null;var i=Tr[t];if(Tr[t++]=null,null!==r&&null!==a){var o=r.pending;null===o?a.next=a:(a.next=o.next,o.next=a),r.pending=a}0!==i&&Lr(n,a,i)}}function Nr(e,t,n,r){Tr[Pr++]=e,Tr[Pr++]=t,Tr[Pr++]=n,Tr[Pr++]=r,$r|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Or(e,t,n,r){return Nr(e,t,n,r),Mr(e)}function Rr(e,t){return Nr(e,null,null,t),Mr(e)}function Lr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,i=e.return;null!==i;)i.childLanes|=n,null!==(r=i.alternate)&&(r.childLanes|=n),22===i.tag&&(null===(e=i.stateNode)||1&e._visibility||(a=!0)),e=i,i=i.return;return 3===e.tag?(i=e.stateNode,a&&null!==t&&(a=31-be(n),null===(r=(e=i.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),i):null}function Mr(e){if(50<Kc)throw Kc=0,Gc=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Ar={};function Dr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ir(e,t,n,r){return new Dr(e,t,n,r)}function Fr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Wr(e,t){var n=e.alternate;return null===n?((n=Ir(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ur(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Hr(e,t,n,r,a,i){var l=0;if(r=e,"function"===typeof e)Fr(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case E:return(e=Ir(31,n,t,a)).elementType=E,e.lanes=i,e;case y:return Br(n.children,a,i,t);case x:l=8,a|=24;break;case w:return(e=Ir(12,n,t,2|a)).elementType=w,e.lanes=i,e;case z:return(e=Ir(13,n,t,a)).elementType=z,e.lanes=i,e;case j:return(e=Ir(19,n,t,a)).elementType=j,e.lanes=i,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case v:l=10;break e;case b:l=9;break e;case k:l=11;break e;case S:l=14;break e;case C:l=16,r=null;break e}l=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=Ir(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Br(e,t,n,r){return(e=Ir(7,e,r,t)).lanes=n,e}function Kr(e,t,n){return(e=Ir(6,e,null,t)).lanes=n,e}function Gr(e){var t=Ir(18,null,null,0);return t.stateNode=e,t}function Vr(e,t,n){return(t=Ir(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Yr=new WeakMap;function qr(e,t){if("object"===typeof e&&null!==e){var n=Yr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ne(t)},Yr.set(e,t),t)}return{value:e,source:t,stack:ne(t)}}var Qr=[],Jr=0,Xr=null,Zr=0,ea=[],ta=0,na=null,ra=1,aa="";function ia(e,t){Qr[Jr++]=Zr,Qr[Jr++]=Xr,Xr=e,Zr=t}function oa(e,t,n){ea[ta++]=ra,ea[ta++]=aa,ea[ta++]=na,na=e;var r=ra;e=aa;var a=32-be(r)-1;r&=~(1<<a),n+=1;var i=32-be(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,ra=1<<32-be(t)+a|n<<a|r,aa=i+e}else ra=1<<i|n<<a|r,aa=e}function la(e){null!==e.return&&(ia(e,1),oa(e,1,0))}function sa(e){for(;e===Xr;)Xr=Qr[--Jr],Qr[Jr]=null,Zr=Qr[--Jr],Qr[Jr]=null;for(;e===na;)na=ea[--ta],ea[ta]=null,aa=ea[--ta],ea[ta]=null,ra=ea[--ta],ea[ta]=null}function ca(e,t){ea[ta++]=ra,ea[ta++]=aa,ea[ta++]=na,ra=t.id,aa=t.overflow,na=e}var ua=null,da=null,pa=!1,fa=null,ma=!1,ha=Error(o(519));function ga(e){throw ka(qr(Error(o(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),ha}function ya(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[We]=e,t[Ue]=r,n){case"dialog":Ju("cancel",t),Ju("close",t);break;case"iframe":case"object":case"embed":Ju("load",t);break;case"video":case"audio":for(n=0;n<Yu.length;n++)Ju(Yu[n],t);break;case"source":Ju("error",t);break;case"img":case"image":case"link":Ju("error",t),Ju("load",t);break;case"details":Ju("toggle",t);break;case"input":Ju("invalid",t),wt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ju("invalid",t);break;case"textarea":Ju("invalid",t),zt(t,r.value,r.defaultValue,r.children)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||ud(t.textContent,n)?(null!=r.popover&&(Ju("beforetoggle",t),Ju("toggle",t)),null!=r.onScroll&&Ju("scroll",t),null!=r.onScrollEnd&&Ju("scrollend",t),null!=r.onClick&&(t.onclick=Nt),t=!0):t=!1,t||ga(e,!0)}function xa(e){for(ua=e.return;ua;)switch(ua.tag){case 5:case 31:case 13:return void(ma=!1);case 27:case 3:return void(ma=!0);default:ua=ua.return}}function wa(e){if(e!==ua)return!1;if(!pa)return xa(e),pa=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||bd(e.type,e.memoizedProps)),t=!t),t&&da&&ga(e),xa(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));da=Md(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));da=Md(e)}else 27===n?(n=da,Ed(e.type)?(e=Ld,Ld=null,da=e):da=n):da=ua?Rd(e.stateNode.nextSibling):null;return!0}function ba(){da=ua=null,pa=!1}function va(){var e=fa;return null!==e&&(null===_c?_c=e:_c.push.apply(_c,e),fa=null),e}function ka(e){null===fa?fa=[e]:fa.push(e)}var za=I(null),ja=null,Sa=null;function Ca(e,t,n){W(za,t._currentValue),t._currentValue=n}function Ea(e){e._currentValue=za.current,F(za)}function Ta(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pa(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var i=a.dependencies;if(null!==i){var l=a.child;i=i.firstContext;e:for(;null!==i;){var s=i;i=a;for(var c=0;c<t.length;c++)if(s.context===t[c]){i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),Ta(i.return,n,e),r||(l=null);break e}i=s.next}}else if(18===a.tag){if(null===(l=a.return))throw Error(o(341));l.lanes|=n,null!==(i=l.alternate)&&(i.lanes|=n),Ta(l,n,e),l=null}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===e){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}}function $a(e,t,n,r){e=null;for(var a=t,i=!1;null!==a;){if(!i)if(0!==(524288&a.flags))i=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var l=a.alternate;if(null===l)throw Error(o(387));if(null!==(l=l.memoizedProps)){var s=a.type;Zn(a.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(a===V.current){if(null===(l=a.alternate))throw Error(o(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(dp):e=[dp])}a=a.return}null!==e&&Pa(t,e,n,r),t.flags|=262144}function _a(e){for(e=e.firstContext;null!==e;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Na(e){ja=e,Sa=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Oa(e){return La(ja,e)}function Ra(e,t){return null===ja&&Na(e),La(e,t)}function La(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Sa){if(null===e)throw Error(o(308));Sa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sa=Sa.next=t;return n}var Ma="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Aa=r.unstable_scheduleCallback,Da=r.unstable_NormalPriority,Ia={$$typeof:v,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fa(){return{controller:new Ma,data:new Map,refCount:0}}function Wa(e){e.refCount--,0===e.refCount&&Aa(Da,function(){e.controller.abort()})}var Ua=null,Ha=0,Ba=0,Ka=null;function Ga(){if(0===--Ha&&null!==Ua){null!==Ka&&(Ka.status="fulfilled");var e=Ua;Ua=null,Ba=0,Ka=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Va=R.S;R.S=function(e,t){Rc=se(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Ua){var n=Ua=[];Ha=0,Ba=Hu(),Ka={status:"pending",value:void 0,then:function(e){n.push(e)}}}Ha++,t.then(Ga,Ga)}(0,t),null!==Va&&Va(e,t)};var Ya=I(null);function qa(){var e=Ya.current;return null!==e?e:hc.pooledCache}function Qa(e,t){W(Ya,null===t?Ya.current:t.pool)}function Ja(){var e=qa();return null===e?null:{parent:Ia._currentValue,pool:e}}var Xa=Error(o(460)),Za=Error(o(474)),ei=Error(o(542)),ti={then:function(){}};function ni(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ri(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Nt,Nt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw li(e=t.reason),e;default:if("string"===typeof t.status)t.then(Nt,Nt);else{if(null!==(e=hc)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw li(e=t.reason),e}throw ii=t,Xa}}function ai(e){try{return(0,e._init)(e._payload)}catch(Gn){if(null!==Gn&&"object"===typeof Gn&&"function"===typeof Gn.then)throw ii=Gn,Xa;throw Gn}}var ii=null;function oi(){if(null===ii)throw Error(o(459));var e=ii;return ii=null,e}function li(e){if(e===Xa||e===ei)throw Error(o(483))}var si=null,ci=0;function ui(e){var t=ci;return ci+=1,null===si&&(si=[]),ri(si,e,t)}function di(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function pi(e,t){if(t.$$typeof===m)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Wr(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Kr(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===C&&ai(i)===t.type)?(di(t=a(t,n.props),n),t.return=e,t):(di(t=Hr(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Vr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Br(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Kr(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case h:return di(n=Hr(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case g:return(t=Vr(t,e.mode,n)).return=e,t;case C:return p(e,t=ai(t),n)}if(O(t)||$(t))return(t=Br(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return p(e,ui(t),n);if(t.$$typeof===v)return p(e,Ra(e,t),n);pi(e,t)}return null}function f(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===a?c(e,t,n,r):null;case g:return n.key===a?u(e,t,n,r):null;case C:return f(e,t,n=ai(n),r)}if(O(n)||$(n))return null!==a?null:d(e,t,n,r,null);if("function"===typeof n.then)return f(e,t,ui(n),r);if(n.$$typeof===v)return f(e,t,Ra(e,n),r);pi(e,n)}return null}function m(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case h:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case g:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case C:return m(e,t,n,r=ai(r),a)}if(O(r)||$(r))return d(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return m(e,t,n,ui(r),a);if(r.$$typeof===v)return m(e,t,n,Ra(t,r),a);pi(t,r)}return null}function x(s,c,u,d){if("object"===typeof u&&null!==u&&u.type===y&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case h:e:{for(var w=u.key;null!==c;){if(c.key===w){if((w=u.type)===y){if(7===c.tag){n(s,c.sibling),(d=a(c,u.props.children)).return=s,s=d;break e}}else if(c.elementType===w||"object"===typeof w&&null!==w&&w.$$typeof===C&&ai(w)===c.type){n(s,c.sibling),di(d=a(c,u.props),u),d.return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}u.type===y?((d=Br(u.props.children,s.mode,d,u.key)).return=s,s=d):(di(d=Hr(u.type,u.key,u.props,null,s.mode,d),u),d.return=s,s=d)}return l(s);case g:e:{for(w=u.key;null!==c;){if(c.key===w){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(s,c.sibling),(d=a(c,u.children||[])).return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}(d=Vr(u,s.mode,d)).return=s,s=d}return l(s);case C:return x(s,c,u=ai(u),d)}if(O(u))return function(a,o,l,s){for(var c=null,u=null,d=o,h=o=0,g=null;null!==d&&h<l.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var y=f(a,d,l[h],s);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(a,d),o=i(y,o,h),null===u?c=y:u.sibling=y,u=y,d=g}if(h===l.length)return n(a,d),pa&&ia(a,h),c;if(null===d){for(;h<l.length;h++)null!==(d=p(a,l[h],s))&&(o=i(d,o,h),null===u?c=d:u.sibling=d,u=d);return pa&&ia(a,h),c}for(d=r(d);h<l.length;h++)null!==(g=m(d,a,h,l[h],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?h:g.key),o=i(g,o,h),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(a,e)}),pa&&ia(a,h),c}(s,c,u,d);if($(u)){if("function"!==typeof(w=$(u)))throw Error(o(150));return function(a,l,s,c){if(null==s)throw Error(o(151));for(var u=null,d=null,h=l,g=l=0,y=null,x=s.next();null!==h&&!x.done;g++,x=s.next()){h.index>g?(y=h,h=null):y=h.sibling;var w=f(a,h,x.value,c);if(null===w){null===h&&(h=y);break}e&&h&&null===w.alternate&&t(a,h),l=i(w,l,g),null===d?u=w:d.sibling=w,d=w,h=y}if(x.done)return n(a,h),pa&&ia(a,g),u;if(null===h){for(;!x.done;g++,x=s.next())null!==(x=p(a,x.value,c))&&(l=i(x,l,g),null===d?u=x:d.sibling=x,d=x);return pa&&ia(a,g),u}for(h=r(h);!x.done;g++,x=s.next())null!==(x=m(h,a,g,x.value,c))&&(e&&null!==x.alternate&&h.delete(null===x.key?g:x.key),l=i(x,l,g),null===d?u=x:d.sibling=x,d=x);return e&&h.forEach(function(e){return t(a,e)}),pa&&ia(a,g),u}(s,c,u=w.call(u),d)}if("function"===typeof u.then)return x(s,c,ui(u),d);if(u.$$typeof===v)return x(s,c,Ra(s,u),d);pi(s,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(s,c.sibling),(d=a(c,u)).return=s,s=d):(n(s,c),(d=Kr(u,s.mode,d)).return=s,s=d),l(s)):n(s,c)}return function(e,t,n,r){try{ci=0;var a=x(e,t,n,r);return si=null,a}catch(Gn){if(Gn===Xa||Gn===ei)throw Gn;var i=Ir(29,Gn,null,e.mode);return i.lanes=r,i.return=e,i}}}var mi=fi(!0),hi=fi(!1),gi=!1;function yi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function bi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&mc)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Mr(e),Lr(e,null,n),t}return Nr(e,r,t,n),Mr(e)}function vi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}function ki(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var zi=!1;function ji(){if(zi){if(null!==Ka)throw Ka}}function Si(e,t,n,r){zi=!1;var a=e.updateQueue;gi=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,c=s.next;s.next=null,null===o?i=c:o.next=c,o=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,u=c=s=null,l=i;;){var p=-536870913&l.lane,m=p!==l.lane;if(m?(yc&p)===p:(r&p)===p){0!==p&&p===Ba&&(zi=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,g=l;p=t;var y=n;switch(g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(y,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=g.payload)?h.call(y,d,p):h)||void 0===p)break e;d=f({},d,p);break e;case 2:gi=!0}}null!==(p=l.callback)&&(e.flags|=64,m&&(e.flags|=8192),null===(m=a.callbacks)?a.callbacks=[p]:m.push(p))}else m={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=m,s=d):u=u.next=m,o|=p;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(m=l).next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null===i&&(a.shared.lanes=0),Sc|=o,e.lanes=o,e.memoizedState=d}}function Ci(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function Ei(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)Ci(n[e],t)}var Ti=I(null),Pi=I(0);function $i(e,t){W(Pi,e=zc),W(Ti,t),zc=e|t.baseLanes}function _i(){W(Pi,zc),W(Ti,Ti.current)}function Ni(){zc=Pi.current,F(Ti),F(Pi)}var Oi=I(null),Ri=null;function Li(e){var t=e.alternate;W(Fi,1&Fi.current),W(Oi,e),null===Ri&&(null===t||null!==Ti.current||null!==t.memoizedState)&&(Ri=e)}function Mi(e){W(Fi,Fi.current),W(Oi,e),null===Ri&&(Ri=e)}function Ai(e){22===e.tag?(W(Fi,Fi.current),W(Oi,e),null===Ri&&(Ri=e)):Di()}function Di(){W(Fi,Fi.current),W(Oi,Oi.current)}function Ii(e){F(Oi),Ri===e&&(Ri=null),F(Fi)}var Fi=I(0);function Wi(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Nd(n)||Od(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child;continue}}else if(0!==(128&t.flags))return t;if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ui=0,Hi=null,Bi=null,Ki=null,Gi=!1,Vi=!1,Yi=!1,qi=0,Qi=0,Ji=null,Xi=0;function Zi(){throw Error(o(321))}function eo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Zn(e[n],t[n]))return!1;return!0}function to(e,t,n,r,a,i){return Ui=i,Hi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=null===e||null===e.memoizedState?yl:xl,Yi=!1,i=n(r,a),Yi=!1,Vi&&(i=ro(t,n,r,a)),no(e),i}function no(e){R.H=gl;var t=null!==Bi&&null!==Bi.next;if(Ui=0,Ki=Bi=Hi=null,Gi=!1,Qi=0,Ji=null,t)throw Error(o(300));null===e||Rl||null!==(e=e.dependencies)&&_a(e)&&(Rl=!0)}function ro(e,t,n,r){Hi=e;var a=0;do{if(Vi&&(Ji=null),Qi=0,Vi=!1,25<=a)throw Error(o(301));if(a+=1,Ki=Bi=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}R.H=wl,i=t(n,r)}while(Vi);return i}function ao(){var e=R.H,t=e.useState()[0];return t="function"===typeof t.then?uo(t):t,e=e.useState()[0],(null!==Bi?Bi.memoizedState:null)!==e&&(Hi.flags|=1024),t}function io(){var e=0!==qi;return qi=0,e}function oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function lo(e){if(Gi){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Gi=!1}Ui=0,Ki=Bi=Hi=null,Vi=!1,Qi=qi=0,Ji=null}function so(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Ki?Hi.memoizedState=Ki=e:Ki=Ki.next=e,Ki}function co(){if(null===Bi){var e=Hi.alternate;e=null!==e?e.memoizedState:null}else e=Bi.next;var t=null===Ki?Hi.memoizedState:Ki.next;if(null!==t)Ki=t,Bi=e;else{if(null===e){if(null===Hi.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(Bi=e).memoizedState,baseState:Bi.baseState,baseQueue:Bi.baseQueue,queue:Bi.queue,next:null},null===Ki?Hi.memoizedState=Ki=e:Ki=Ki.next=e}return Ki}function uo(e){var t=Qi;return Qi+=1,null===Ji&&(Ji=[]),e=ri(Ji,e,t),t=Hi,null===(null===Ki?t.memoizedState:Ki.next)&&(t=t.alternate,R.H=null===t||null===t.memoizedState?yl:xl),e}function po(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return uo(e);if(e.$$typeof===v)return Oa(e)}throw Error(o(438,String(e)))}function fo(e){var t=null,n=Hi.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Hi.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Hi.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=T;return t.index++,n}function mo(e,t){return"function"===typeof t?t(e):t}function ho(e){return go(co(),Bi,e)}function go(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var a=e.baseQueue,i=r.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}t.baseQueue=a=i,r.pending=null}if(i=e.baseState,null===a)e.memoizedState=i;else{var s=l=null,c=null,u=t=a.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(yc&p)===p:(Ui&p)===p){var f=u.revertLane;if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Ba&&(d=!0);else{if((Ui&f)===f){u=u.next,f===Ba&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=p,l=i):c=c.next=p,Hi.lanes|=f,Sc|=f}p=u.action,Yi&&n(i,p),i=u.hasEagerState?u.eagerState:n(i,p)}else f={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,l=i):c=c.next=f,Hi.lanes|=p,Sc|=p;u=u.next}while(null!==u&&u!==t);if(null===c?l=i:c.next=s,!Zn(i,e.memoizedState)&&(Rl=!0,d&&null!==(n=Ka)))throw n;e.memoizedState=i,e.baseState=l,e.baseQueue=c,r.lastRenderedState=i}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function yo(e){var t=co(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);Zn(i,t.memoizedState)||(Rl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function xo(e,t,n){var r=Hi,a=co(),i=pa;if(i){if(void 0===n)throw Error(o(407));n=n()}else n=t();var l=!Zn((Bi||a).memoizedState,n);if(l&&(a.memoizedState=n,Rl=!0),a=a.queue,Ho(vo.bind(null,r,a,e),[e]),a.getSnapshot!==t||l||null!==Ki&&1&Ki.memoizedState.tag){if(r.flags|=2048,Do(9,{destroy:void 0},bo.bind(null,r,a,n,t),null),null===hc)throw Error(o(349));i||0!==(127&Ui)||wo(r,t,n)}return n}function wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Hi.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Hi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function bo(e,t,n,r){t.value=n,t.getSnapshot=r,ko(t)&&zo(e)}function vo(e,t,n){return n(function(){ko(t)&&zo(e)})}function ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zn(e,n)}catch(r){return!0}}function zo(e){var t=Rr(e,2);null!==t&&qc(t,e,2)}function jo(e){var t=so();if("function"===typeof e){var n=e;if(e=n(),Yi){we(!0);try{n()}finally{we(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:e},t}function So(e,t,n,r){return e.baseState=n,go(e,Bi,"function"===typeof r?r:mo)}function Co(e,t,n,r,a){if(fl(e))throw Error(o(485));if(null!==(e=t.action)){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==R.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,Eo(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Eo(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var i=R.T,o={};R.T=o;try{var l=n(a,r),s=R.S;null!==s&&s(o,l),To(e,t,l)}catch(c){$o(e,t,c)}finally{null!==i&&null!==o.types&&(i.types=o.types),R.T=i}}else try{To(e,t,i=n(a,r))}catch(u){$o(e,t,u)}}function To(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){Po(e,t,n)},function(n){return $o(e,t,n)}):Po(e,t,n)}function Po(e,t,n){t.status="fulfilled",t.value=n,_o(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,Eo(e,n)))}function $o(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,_o(t),t=t.next}while(t!==r)}e.action=null}function _o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function No(e,t){return t}function Oo(e,t){if(pa){var n=hc.formState;if(null!==n){e:{var r=Hi;if(pa){if(da){t:{for(var a=da,i=ma;8!==a.nodeType;){if(!i){a=null;break t}if(null===(a=Rd(a.nextSibling))){a=null;break t}}a="F!"===(i=a.data)||"F"===i?a:null}if(a){da=Rd(a.nextSibling),r="F!"===a.data;break e}}ga(r)}r=!1}r&&(t=n[0])}}return(n=so()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:t},n.queue=r,n=ul.bind(null,Hi,r),r.dispatch=n,r=jo(!1),i=pl.bind(null,Hi,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=so()).queue=a,n=Co.bind(null,Hi,a,i,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ro(e){return Lo(co(),Bi,e)}function Lo(e,t,n){if(t=go(e,t,No)[0],e=ho(mo)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=uo(t)}catch(Gn){if(Gn===Xa)throw ei;throw Gn}else r=t;var a=(t=co()).queue,i=a.dispatch;return n!==t.memoizedState&&(Hi.flags|=2048,Do(9,{destroy:void 0},Mo.bind(null,a,n),null)),[r,i,e]}function Mo(e,t){e.action=t}function Ao(e){var t=co(),n=Bi;if(null!==n)return Lo(t,n,e);co(),t=t.memoizedState;var r=(n=co()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Do(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=Hi.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Hi.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Io(){return co().memoizedState}function Fo(e,t,n,r){var a=so();Hi.flags|=e,a.memoizedState=Do(1|t,{destroy:void 0},n,void 0===r?null:r)}function Wo(e,t,n,r){var a=co();r=void 0===r?null:r;var i=a.memoizedState.inst;null!==Bi&&null!==r&&eo(r,Bi.memoizedState.deps)?a.memoizedState=Do(t,i,n,r):(Hi.flags|=e,a.memoizedState=Do(1|t,i,n,r))}function Uo(e,t){Fo(8390656,8,e,t)}function Ho(e,t){Wo(2048,8,e,t)}function Bo(e){var t=co().memoizedState;return function(e){Hi.flags|=4;var t=Hi.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},Hi.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&mc))throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Ko(e,t){return Wo(4,2,e,t)}function Go(e,t){return Wo(4,4,e,t)}function Vo(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Yo(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Wo(4,4,Vo.bind(null,t,e),n)}function qo(){}function Qo(e,t){var n=co();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jo(e,t){var n=co();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&eo(t,r[1]))return r[0];if(r=e(),Yi){we(!0);try{e()}finally{we(!1)}}return n.memoizedState=[r,t],r}function Xo(e,t,n){return void 0===n||0!==(1073741824&Ui)&&0===(261930&yc)?e.memoizedState=t:(e.memoizedState=n,e=Yc(),Hi.lanes|=e,Sc|=e,n)}function Zo(e,t,n,r){return Zn(n,t)?n:null!==Ti.current?(e=Xo(e,n,r),Zn(e,t)||(Rl=!0),e):0===(42&Ui)||0!==(1073741824&Ui)&&0===(261930&yc)?(Rl=!0,e.memoizedState=n):(e=Yc(),Hi.lanes|=e,Sc|=e,t)}function el(e,t,n,r,a){var i=L.p;L.p=0!==i&&8>i?i:8;var o=R.T,l={};R.T=l,pl(e,!1,t,n);try{var s=a(),c=R.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)dl(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(s,r),Vc());else dl(e,t,r,Vc())}catch(u){dl(e,t,{then:function(){},status:"rejected",reason:u},Vc())}finally{L.p=i,null!==o&&null!==l.types&&(o.types=l.types),R.T=o}}function tl(){}function nl(e,t,n,r){if(5!==e.tag)throw Error(o(476));var a=rl(e).queue;el(e,a,t,M,null===n?tl:function(){return al(e),n(r)})}function rl(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:M,baseState:M,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:M},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function al(e){var t=rl(e);null===t.next&&(t=e.alternate.memoizedState),dl(e,t.next.queue,{},Vc())}function il(){return Oa(dp)}function ol(){return co().memoizedState}function ll(){return co().memoizedState}function sl(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Vc(),r=bi(t,e=wi(n),n);return null!==r&&(qc(r,t,n),vi(r,t,n)),t={cache:Fa()},void(e.payload=t)}t=t.return}}function cl(e,t,n){var r=Vc();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fl(e)?ml(t,n):null!==(n=Or(e,t,n,r))&&(qc(n,e,r),hl(n,t,r))}function ul(e,t,n){dl(e,t,n,Vc())}function dl(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fl(e))ml(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,Zn(l,o))return Nr(e,t,a,0),null===hc&&_r(),!1}catch(s){}if(null!==(n=Or(e,t,a,r)))return qc(n,e,r),hl(n,t,r),!0}return!1}function pl(e,t,n,r){if(r={lane:2,revertLane:Hu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},fl(e)){if(t)throw Error(o(479))}else null!==(t=Or(e,n,r,2))&&qc(t,e,2)}function fl(e){var t=e.alternate;return e===Hi||null!==t&&t===Hi}function ml(e,t){Vi=Gi=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hl(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Re(e,n)}}var gl={readContext:Oa,use:po,useCallback:Zi,useContext:Zi,useEffect:Zi,useImperativeHandle:Zi,useLayoutEffect:Zi,useInsertionEffect:Zi,useMemo:Zi,useReducer:Zi,useRef:Zi,useState:Zi,useDebugValue:Zi,useDeferredValue:Zi,useTransition:Zi,useSyncExternalStore:Zi,useId:Zi,useHostTransitionStatus:Zi,useFormState:Zi,useActionState:Zi,useOptimistic:Zi,useMemoCache:Zi,useCacheRefresh:Zi};gl.useEffectEvent=Zi;var yl={readContext:Oa,use:po,useCallback:function(e,t){return so().memoizedState=[e,void 0===t?null:t],e},useContext:Oa,useEffect:Uo,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Fo(4194308,4,Vo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fo(4194308,4,e,t)},useInsertionEffect:function(e,t){Fo(4,2,e,t)},useMemo:function(e,t){var n=so();t=void 0===t?null:t;var r=e();if(Yi){we(!0);try{e()}finally{we(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=so();if(void 0!==n){var a=n(t);if(Yi){we(!0);try{n(t)}finally{we(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=cl.bind(null,Hi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},so().memoizedState=e},useState:function(e){var t=(e=jo(e)).queue,n=ul.bind(null,Hi,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:qo,useDeferredValue:function(e,t){return Xo(so(),e,t)},useTransition:function(){var e=jo(!1);return e=el.bind(null,Hi,e.queue,!0,!1),so().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Hi,a=so();if(pa){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===hc)throw Error(o(349));0!==(127&yc)||wo(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Uo(vo.bind(null,r,i,e),[e]),r.flags|=2048,Do(9,{destroy:void 0},bo.bind(null,r,i,n,t),null),n},useId:function(){var e=so(),t=hc.identifierPrefix;if(pa){var n=aa;t="_"+t+"R_"+(n=(ra&~(1<<32-be(ra)-1)).toString(32)+n),0<(n=qi++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Xi++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:il,useFormState:Oo,useActionState:Oo,useOptimistic:function(e){var t=so();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=pl.bind(null,Hi,!0,n),n.dispatch=t,[e,t]},useMemoCache:fo,useCacheRefresh:function(){return so().memoizedState=sl.bind(null,Hi)},useEffectEvent:function(e){var t=so(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&mc))throw Error(o(440));return n.impl.apply(void 0,arguments)}}},xl={readContext:Oa,use:po,useCallback:Qo,useContext:Oa,useEffect:Ho,useImperativeHandle:Yo,useInsertionEffect:Ko,useLayoutEffect:Go,useMemo:Jo,useReducer:ho,useRef:Io,useState:function(){return ho(mo)},useDebugValue:qo,useDeferredValue:function(e,t){return Zo(co(),Bi.memoizedState,e,t)},useTransition:function(){var e=ho(mo)[0],t=co().memoizedState;return["boolean"===typeof e?e:uo(e),t]},useSyncExternalStore:xo,useId:ol,useHostTransitionStatus:il,useFormState:Ro,useActionState:Ro,useOptimistic:function(e,t){return So(co(),0,e,t)},useMemoCache:fo,useCacheRefresh:ll};xl.useEffectEvent=Bo;var wl={readContext:Oa,use:po,useCallback:Qo,useContext:Oa,useEffect:Ho,useImperativeHandle:Yo,useInsertionEffect:Ko,useLayoutEffect:Go,useMemo:Jo,useReducer:yo,useRef:Io,useState:function(){return yo(mo)},useDebugValue:qo,useDeferredValue:function(e,t){var n=co();return null===Bi?Xo(n,e,t):Zo(n,Bi.memoizedState,e,t)},useTransition:function(){var e=yo(mo)[0],t=co().memoizedState;return["boolean"===typeof e?e:uo(e),t]},useSyncExternalStore:xo,useId:ol,useHostTransitionStatus:il,useFormState:Ao,useActionState:Ao,useOptimistic:function(e,t){var n=co();return null!==Bi?So(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fo,useCacheRefresh:ll};function bl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:f({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}wl.useEffectEvent=Bo;var vl={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Vc(),a=wi(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=bi(e,a,r))&&(qc(t,e,r),vi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Vc(),a=wi(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=bi(e,a,r))&&(qc(t,e,r),vi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Vc(),r=wi(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=bi(e,r,n))&&(qc(t,e,n),vi(t,e,n))}};function kl(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!er(n,r)||!er(a,i))}function zl(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vl.enqueueReplaceState(t,t.state,null)}function jl(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=f({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}function Sl(e){Er(e)}function Cl(e){console.error(e)}function El(e){Er(e)}function Tl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Pl(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function $l(e,t,n){return(n=wi(n)).tag=3,n.payload={element:null},n.callback=function(){Tl(e,t)},n}function _l(e){return(e=wi(e)).tag=3,e}function Nl(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var i=r.value;e.payload=function(){return a(i)},e.callback=function(){Pl(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){Pl(t,n,r),"function"!==typeof a&&(null===Ac?Ac=new Set([this]):Ac.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Ol=Error(o(461)),Rl=!1;function Ll(e,t,n,r){t.child=null===e?hi(t,null,n,r):mi(t,e.child,n,r)}function Ml(e,t,n,r,a){n=n.render;var i=t.ref;if("ref"in r){var o={};for(var l in r)"ref"!==l&&(o[l]=r[l])}else o=r;return Na(t),r=to(e,t,n,o,i,a),l=io(),null===e||Rl?(pa&&l&&la(t),t.flags|=1,Ll(e,t,r,a),t.child):(oo(e,t,a),is(e,t,a))}function Al(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Fr(i)||void 0!==i.defaultProps||null!==n.compare?((e=Hr(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Dl(e,t,i,r,a))}if(i=e.child,!os(e,a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:er)(o,r)&&e.ref===t.ref)return is(e,t,a)}return t.flags|=1,(e=Wr(i,r)).ref=t.ref,e.return=t,t.child=e}function Dl(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(er(i,r)&&e.ref===t.ref){if(Rl=!1,t.pendingProps=r=i,!os(e,a))return t.lanes=e.lanes,is(e,t,a);0!==(131072&e.flags)&&(Rl=!0)}}return Kl(e,t,n,r,a)}function Il(e,t,n,r){var a=r.children,i=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(0!==(128&t.flags)){if(i=null!==i?i.baseLanes|n:n,null!==e){for(r=t.child=e.child,a=0;null!==r;)a=a|r.lanes|r.childLanes,r=r.sibling;r=a&~i}else r=0,t.child=null;return Wl(e,t,i,n,r)}if(0===(536870912&n))return r=t.lanes=536870912,Wl(e,t,null!==i?i.baseLanes|n:n,n,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Qa(0,null!==i?i.cachePool:null),null!==i?$i(t,i):_i(),Ai(t)}else null!==i?(Qa(0,i.cachePool),$i(t,i),Di(),t.memoizedState=null):(null!==e&&Qa(0,null),_i(),Di());return Ll(e,t,a,n),t.child}function Fl(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Wl(e,t,n,r,a){var i=qa();return i=null===i?null:{parent:Ia._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},null!==e&&Qa(0,null),_i(),Ai(t),null!==e&&$a(e,t,r,!0),t.childLanes=a,null}function Ul(e,t){return(t=es({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function Hl(e,t,n){return mi(t,e.child,null,n),(e=Ul(t,t.pendingProps)).flags|=2,Ii(t),t.memoizedState=null,e}function Bl(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Kl(e,t,n,r,a){return Na(t),n=to(e,t,n,r,void 0,a),r=io(),null===e||Rl?(pa&&r&&la(t),t.flags|=1,Ll(e,t,n,a),t.child):(oo(e,t,a),is(e,t,a))}function Gl(e,t,n,r,a,i){return Na(t),t.updateQueue=null,n=ro(t,r,n,a),no(e),r=io(),null===e||Rl?(pa&&r&&la(t),t.flags|=1,Ll(e,t,n,i),t.child):(oo(e,t,i),is(e,t,i))}function Vl(e,t,n,r,a){if(Na(t),null===t.stateNode){var i=Ar,o=n.contextType;"object"===typeof o&&null!==o&&(i=Oa(o)),i=new n(r,i),t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,i.updater=vl,t.stateNode=i,i._reactInternals=t,(i=t.stateNode).props=r,i.state=t.memoizedState,i.refs={},yi(t),o=n.contextType,i.context="object"===typeof o&&null!==o?Oa(o):Ar,i.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(bl(t,n,o,r),i.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(o=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),o!==i.state&&vl.enqueueReplaceState(i,i.state,null),Si(t,r,i,a),ji(),i.state=t.memoizedState),"function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){i=t.stateNode;var l=t.memoizedProps,s=jl(n,l);i.props=s;var c=i.context,u=n.contextType;o=Ar,"object"===typeof u&&null!==u&&(o=Oa(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof i.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l||c!==o)&&zl(t,i,r,o),gi=!1;var p=t.memoizedState;i.state=p,Si(t,r,i,a),ji(),c=t.memoizedState,l||p!==c||gi?("function"===typeof d&&(bl(t,n,d,r),c=t.memoizedState),(s=gi||kl(t,n,s,r,p,c,o))?(u||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=o,r=s):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,xi(e,t),u=jl(n,o=t.memoizedProps),i.props=u,d=t.pendingProps,p=i.context,c=n.contextType,s=Ar,"object"===typeof c&&null!==c&&(s=Oa(c)),(c="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(o!==d||p!==s)&&zl(t,i,r,s),gi=!1,p=t.memoizedState,i.state=p,Si(t,r,i,a),ji();var f=t.memoizedState;o!==d||p!==f||gi||null!==e&&null!==e.dependencies&&_a(e.dependencies)?("function"===typeof l&&(bl(t,n,l,r),f=t.memoizedState),(u=gi||kl(t,n,u,r,p,f,s)||null!==e&&null!==e.dependencies&&_a(e.dependencies))?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,f,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,f,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),i.props=r,i.state=f,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return i=r,Bl(e,t),r=0!==(128&t.flags),i||r?(i=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:i.render(),t.flags|=1,null!==e&&r?(t.child=mi(t,e.child,null,a),t.child=mi(t,null,n,a)):Ll(e,t,n,a),t.memoizedState=i.state,e=t.child):e=is(e,t,a),e}function Yl(e,t,n,r){return ba(),t.flags|=256,Ll(e,t,n,r),t.child}var ql={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ql(e){return{baseLanes:e,cachePool:Ja()}}function Jl(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=Tc),e}function Xl(e,t,n){var r,a=t.pendingProps,i=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&Fi.current)),r&&(i=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(pa){if(i?Li(t):Di(),(e=da)?null!==(e=null!==(e=_d(e,ma))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==na?{id:ra,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},(n=Gr(e)).return=t,t.child=n,ua=t,da=null):e=null,null===e)throw ga(t);return Od(e)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,i?(Di(),s=es({mode:"hidden",children:s},i=t.mode),a=Br(a,i,n,null),s.return=t,a.return=t,s.sibling=a,t.child=s,(a=t.child).memoizedState=Ql(n),a.childLanes=Jl(e,r,n),t.memoizedState=ql,Fl(null,a)):(Li(t),Zl(t,s))}var c=e.memoizedState;if(null!==c&&null!==(s=c.dehydrated)){if(l)256&t.flags?(Li(t),t.flags&=-257,t=ts(e,t,n)):null!==t.memoizedState?(Di(),t.child=e.child,t.flags|=128,t=null):(Di(),s=a.fallback,i=t.mode,a=es({mode:"visible",children:a.children},i),(s=Br(s,i,n,null)).flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,mi(t,e.child,null,n),(a=t.child).memoizedState=Ql(n),a.childLanes=Jl(e,r,n),t.memoizedState=ql,t=Fl(null,a));else if(Li(t),Od(s)){if(r=s.nextSibling&&s.nextSibling.dataset)var u=r.dgst;r=u,(a=Error(o(419))).stack="",a.digest=r,ka({value:a,source:null,stack:null}),t=ts(e,t,n)}else if(Rl||$a(e,t,n,!1),r=0!==(n&e.childLanes),Rl||r){if(null!==(r=hc)&&(0!==(a=Le(r,n))&&a!==c.retryLane))throw c.retryLane=a,Rr(e,a),qc(r,e,a),Ol;Nd(s)||lu(),t=ts(e,t,n)}else Nd(s)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,da=Rd(s.nextSibling),ua=t,pa=!0,fa=null,ma=!1,null!==e&&ca(t,e),(t=Zl(t,a.children)).flags|=4096);return t}return i?(Di(),s=a.fallback,i=t.mode,u=(c=e.child).sibling,(a=Wr(c,{mode:"hidden",children:a.children})).subtreeFlags=65011712&c.subtreeFlags,null!==u?s=Wr(u,s):(s=Br(s,i,n,null)).flags|=2,s.return=t,a.return=t,a.sibling=s,t.child=a,Fl(null,a),a=t.child,null===(s=e.child.memoizedState)?s=Ql(n):(null!==(i=s.cachePool)?(c=Ia._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=Ja(),s={baseLanes:s.baseLanes|n,cachePool:i}),a.memoizedState=s,a.childLanes=Jl(e,r,n),t.memoizedState=ql,Fl(e.child,a)):(Li(t),e=(n=e.child).sibling,(n=Wr(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Zl(e,t){return(t=es({mode:"visible",children:t},e.mode)).return=e,e.child=t}function es(e,t){return(e=Ir(22,e,null,t)).lanes=0,e}function ts(e,t,n){return mi(t,e.child,null,n),(e=Zl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ns(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ta(e.return,t,n)}function rs(e,t,n,r,a,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a,o.treeForkCount=i)}function as(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;r=r.children;var o=Fi.current,l=0!==(2&o);if(l?(o=1&o|2,t.flags|=128):o&=1,W(Fi,o),Ll(e,t,r,n),r=pa?Zr:0,!l&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ns(e,n,t);else if(19===e.tag)ns(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===Wi(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),rs(t,!1,a,n,i,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Wi(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}rs(t,!0,n,null,i,r);break;case"together":rs(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function is(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Sc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if($a(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Wr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Wr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function os(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!_a(e))}function ls(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Rl=!0;else{if(!os(e,n)&&0===(128&t.flags))return Rl=!1,function(e,t,n){switch(t.tag){case 3:Y(t,t.stateNode.containerInfo),Ca(0,Ia,e.memoizedState.cache),ba();break;case 27:case 5:Q(t);break;case 4:Y(t,t.stateNode.containerInfo);break;case 10:Ca(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,Mi(t),null;break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Li(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Xl(e,t,n):(Li(t),null!==(e=is(e,t,n))?e.sibling:null);Li(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||($a(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return as(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(Fi,Fi.current),r)break;return null;case 22:return t.lanes=0,Il(e,t,n,t.pendingProps);case 24:Ca(0,Ia,e.memoizedState.cache)}return is(e,t,n)}(e,t,n);Rl=0!==(131072&e.flags)}else Rl=!1,pa&&0!==(1048576&t.flags)&&oa(t,Zr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=ai(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var a=e.$$typeof;if(a===k){t.tag=11,t=Ml(null,t,e,r,n);break e}if(a===S){t.tag=14,t=Al(null,t,e,r,n);break e}}throw t=N(e)||e,Error(o(306,t,""))}Fr(e)?(r=jl(e,r),t.tag=1,t=Vl(null,t,e,r,n)):(t.tag=0,t=Kl(null,t,e,r,n))}return t;case 0:return Kl(e,t,t.type,t.pendingProps,n);case 1:return Vl(e,t,r=t.type,a=jl(r,t.pendingProps),n);case 3:e:{if(Y(t,t.stateNode.containerInfo),null===e)throw Error(o(387));r=t.pendingProps;var i=t.memoizedState;a=i.element,xi(e,t),Si(t,r,null,n);var l=t.memoizedState;if(r=l.cache,Ca(0,Ia,r),r!==i.cache&&Pa(t,[Ia],n,!0),ji(),r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Yl(e,t,r,n);break e}if(r!==a){ka(a=qr(Error(o(424)),t)),t=Yl(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(da=Rd(e.firstChild),ua=t,pa=!0,fa=null,ma=!0,n=hi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ba(),r===a){t=is(e,t,n);break e}Ll(e,t,r,n)}t=t.child}return t;case 26:return Bl(e,t),null===e?(n=Gd(t.type,null,t.pendingProps,null))?t.memoizedState=n:pa||(n=t.type,e=t.pendingProps,(r=yd(G.current).createElement(n))[We]=t,r[Ue]=e,fd(r,n,e),et(r),t.stateNode=r):t.memoizedState=Gd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Q(t),null===e&&pa&&(r=t.stateNode=Dd(t.type,t.pendingProps,G.current),ua=t,ma=!0,a=da,Ed(t.type)?(Ld=a,da=Rd(r.firstChild)):da=a),Ll(e,t,t.pendingProps.children,n),Bl(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&pa&&((a=r=da)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ye])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(i=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((i=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var i=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===i)return e}if(null===(e=Rd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,ma))?(t.stateNode=r,ua=t,da=Rd(r.firstChild),ma=!1,a=!0):a=!1),a||ga(t)),Q(t),a=t.type,i=t.pendingProps,l=null!==e?e.memoizedProps:null,r=i.children,bd(a,i)?r=null:null!==l&&bd(a,l)&&(t.flags|=32),null!==t.memoizedState&&(a=to(e,t,ao,null,null,n),dp._currentValue=a),Bl(e,t),Ll(e,t,r,n),t.child;case 6:return null===e&&pa&&((e=n=da)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=Rd(e.nextSibling)))return null}return e}(n,t.pendingProps,ma))?(t.stateNode=n,ua=t,da=null,e=!0):e=!1),e||ga(t)),null;case 13:return Xl(e,t,n);case 4:return Y(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=mi(t,null,r,n):Ll(e,t,r,n),t.child;case 11:return Ml(e,t,t.type,t.pendingProps,n);case 7:return Ll(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ll(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ca(0,t.type,r.value),Ll(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Na(t),r=r(a=Oa(a)),t.flags|=1,Ll(e,t,r,n),t.child;case 14:return Al(e,t,t.type,t.pendingProps,n);case 15:return Dl(e,t,t.type,t.pendingProps,n);case 19:return as(e,t,n);case 31:return function(e,t,n){var r=t.pendingProps,a=0!==(128&t.flags);if(t.flags&=-129,null===e){if(pa){if("hidden"===r.mode)return e=Ul(t,r),t.lanes=536870912,Fl(null,e);if(Mi(t),(e=da)?null!==(e=null!==(e=_d(e,ma))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==na?{id:ra,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},(n=Gr(e)).return=t,t.child=n,ua=t,da=null):e=null,null===e)throw ga(t);return t.lanes=536870912,null}return Ul(t,r)}var i=e.memoizedState;if(null!==i){var l=i.dehydrated;if(Mi(t),a)if(256&t.flags)t.flags&=-257,t=Hl(e,t,n);else{if(null===t.memoizedState)throw Error(o(558));t.child=e.child,t.flags|=128,t=null}else if(Rl||$a(e,t,n,!1),a=0!==(n&e.childLanes),Rl||a){if(null!==(r=hc)&&0!==(l=Le(r,n))&&l!==i.retryLane)throw i.retryLane=l,Rr(e,l),qc(r,e,l),Ol;lu(),t=Hl(e,t,n)}else e=i.treeContext,da=Rd(l.nextSibling),ua=t,pa=!0,fa=null,ma=!1,null!==e&&ca(t,e),(t=Ul(t,r)).flags|=4096;return t}return(e=Wr(e.child,{mode:r.mode,children:r.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return Il(e,t,n,t.pendingProps);case 24:return Na(t),r=Oa(Ia),null===e?(null===(a=qa())&&(a=hc,i=Fa(),a.pooledCache=i,i.refCount++,null!==i&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:r,cache:a},yi(t),Ca(0,Ia,a)):(0!==(e.lanes&n)&&(xi(e,t),Si(t,null,null,n),ji()),a=e.memoizedState,i=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),Ca(0,Ia,r)):(r=i.cache,Ca(0,Ia,r),r!==a.cache&&Pa(t,[Ia],n,!0))),Ll(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function ss(e){e.flags|=4}function cs(e,t,n,r,a){if((t=0!==(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&a)===a)if(e.stateNode.complete)e.flags|=8192;else{if(!au())throw ii=ti,Za;e.flags|=8192}}else e.flags&=-16777217}function us(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!ip(t)){if(!au())throw ii=ti,Za;e.flags|=8192}}function ds(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?$e():536870912,e.lanes|=t,Pc|=t)}function ps(e,t){if(!pa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ms(e,t,n){var r=t.pendingProps;switch(sa(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return fs(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ea(Ia),q(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(wa(t)?ss(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,va())),fs(t),null;case 26:var a=t.type,i=t.memoizedState;return null===e?(ss(t),null!==i?(fs(t),us(t,i)):(fs(t),cs(t,a,0,0,n))):i?i!==e.memoizedState?(ss(t),fs(t),us(t,i)):(fs(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&ss(t),fs(t),cs(t,a,0,0,n)),null;case 27:if(J(t),n=G.current,a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return fs(t),null}e=B.current,wa(t)?ya(t):(e=Dd(a,r,n),t.stateNode=e,ss(t))}return fs(t),null;case 5:if(J(t),a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return fs(t),null}if(i=B.current,wa(t))ya(t);else{var l=yd(G.current);switch(i){case 1:i=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":(i=l.createElement("div")).innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i="string"===typeof r.is?l.createElement("select",{is:r.is}):l.createElement("select"),r.multiple?i.multiple=!0:r.size&&(i.size=r.size);break;default:i="string"===typeof r.is?l.createElement(a,{is:r.is}):l.createElement(a)}}i[We]=t,i[Ue]=r;e:for(l=t.child;null!==l;){if(5===l.tag||6===l.tag)i.appendChild(l.stateNode);else if(4!==l.tag&&27!==l.tag&&null!==l.child){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;null===l.sibling;){if(null===l.return||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=i;e:switch(fd(i,a,r),a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ss(t)}}return fs(t),cs(t,t.type,null===e||e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=G.current,wa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=ua))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[We]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||ud(e.nodeValue,n)))||ga(t,!0)}else(e=yd(e).createTextNode(r))[We]=t,t.stateNode=e}return fs(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=wa(t),null!==n){if(null===e){if(!r)throw Error(o(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(o(557));e[We]=t}else ba(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;fs(t),e=!1}else n=va(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(Ii(t),t):(Ii(t),null);if(0!==(128&t.flags))throw Error(o(558))}return fs(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=wa(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[We]=t}else ba(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;fs(t),a=!1}else a=va(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return 256&t.flags?(Ii(t),t):(Ii(t),null)}return Ii(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool),i=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ds(t,t.updateQueue),fs(t),null);case 4:return q(),null===e&&ed(t.stateNode.containerInfo),fs(t),null;case 10:return Ea(t.type),fs(t),null;case 19:if(F(Fi),null===(r=t.memoizedState))return fs(t),null;if(a=0!==(128&t.flags),null===(i=r.rendering))if(a)ps(r,!1);else{if(0!==jc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=Wi(e))){for(t.flags|=128,ps(r,!1),e=i.updateQueue,t.updateQueue=e,ds(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Ur(n,e),n=n.sibling;return W(Fi,1&Fi.current|2),pa&&ia(t,r.treeForkCount),t.child}e=e.sibling}null!==r.tail&&se()>Lc&&(t.flags|=128,a=!0,ps(r,!1),t.lanes=4194304)}else{if(!a)if(null!==(e=Wi(i))){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ds(t,e),ps(r,!0),null===r.tail&&"hidden"===r.tailMode&&!i.alternate&&!pa)return fs(t),null}else 2*se()-r.renderingStartTime>Lc&&536870912!==n&&(t.flags|=128,a=!0,ps(r,!1),t.lanes=4194304);r.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=r.last)?e.sibling=i:t.child=i,r.last=i)}return null!==r.tail?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=se(),e.sibling=null,n=Fi.current,W(Fi,a?1&n|2:1&n),pa&&ia(t,r.treeForkCount),e):(fs(t),null);case 22:case 23:return Ii(t),Ni(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(fs(t),6&t.subtreeFlags&&(t.flags|=8192)):fs(t),null!==(n=t.updateQueue)&&ds(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&F(Ya),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ea(Ia),fs(t),null;case 25:case 30:return null}throw Error(o(156,t.tag))}function hs(e,t){switch(sa(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ea(Ia),q(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return J(t),null;case 31:if(null!==t.memoizedState){if(Ii(t),null===t.alternate)throw Error(o(340));ba()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(Ii(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ba()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return F(Fi),null;case 4:return q(),null;case 10:return Ea(t.type),null;case 22:case 23:return Ii(t),Ni(),null!==e&&F(Ya),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return Ea(Ia),null;default:return null}}function gs(e,t){switch(sa(t),t.tag){case 3:Ea(Ia),q();break;case 26:case 27:case 5:J(t);break;case 4:q();break;case 31:null!==t.memoizedState&&Ii(t);break;case 13:Ii(t);break;case 19:F(Fi);break;case 10:Ea(t.type);break;case 22:case 23:Ii(t),Ni(),null!==e&&F(Ya);break;case 24:Ea(Ia)}}function ys(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var i=n.create,o=n.inst;r=i(),o.destroy=r}n=n.next}while(n!==a)}}catch(l){ju(t,t.return,l)}}function xs(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var i=a.next;r=i;do{if((r.tag&e)===e){var o=r.inst,l=o.destroy;if(void 0!==l){o.destroy=void 0,a=t;var s=n,c=l;try{c()}catch(u){ju(a,s,u)}}}r=r.next}while(r!==i)}}catch(u){ju(t,t.return,u)}}function ws(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{Ei(t,n)}catch(r){ju(e,e.return,r)}}}function bs(e,t,n){n.props=jl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){ju(e,t,r)}}function vs(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(a){ju(e,t,a)}}function ks(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){ju(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(i){ju(e,t,i)}else n.current=null}function zs(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){ju(e,e.return,a)}}function js(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,l=null,s=null,c=null,u=null,d=null;for(m in n){var p=n[m];if(n.hasOwnProperty(m)&&null!=p)switch(m){case"checked":case"value":break;case"defaultValue":c=p;default:r.hasOwnProperty(m)||dd(e,t,m,null,r,p)}}for(var f in r){var m=r[f];if(p=n[f],r.hasOwnProperty(f)&&(null!=m||null!=p))switch(f){case"type":i=m;break;case"name":a=m;break;case"checked":u=m;break;case"defaultChecked":d=m;break;case"value":l=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(o(137,t));break;default:m!==p&&dd(e,t,f,m,r,p)}}return void xt(e,l,s,c,u,d,i,a);case"select":for(i in m=l=s=f=null,n)if(c=n[i],n.hasOwnProperty(i)&&null!=c)switch(i){case"value":break;case"multiple":m=c;default:r.hasOwnProperty(i)||dd(e,t,i,null,r,c)}for(a in r)if(i=r[a],c=n[a],r.hasOwnProperty(a)&&(null!=i||null!=c))switch(a){case"value":f=i;break;case"defaultValue":s=i;break;case"multiple":l=i;default:i!==c&&dd(e,t,a,i,r,c)}return t=s,n=l,r=m,void(null!=f?vt(e,!!n,f,!1):!!r!==!!n&&(null!=t?vt(e,!!n,t,!0):vt(e,!!n,n?[]:"",!1)));case"textarea":for(s in m=f=null,n)if(a=n[s],n.hasOwnProperty(s)&&null!=a&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:dd(e,t,s,null,r,a)}for(l in r)if(a=r[l],i=n[l],r.hasOwnProperty(l)&&(null!=a||null!=i))switch(l){case"value":f=a;break;case"defaultValue":m=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(o(91));break;default:a!==i&&dd(e,t,l,a,r,i)}return void kt(e,f,m);case"option":for(var h in n)if(f=n[h],n.hasOwnProperty(h)&&null!=f&&!r.hasOwnProperty(h))if("selected"===h)e.selected=!1;else dd(e,t,h,null,r,f);for(c in r)if(f=r[c],m=n[c],r.hasOwnProperty(c)&&f!==m&&(null!=f||null!=m))if("selected"===c)e.selected=f&&"function"!==typeof f&&"symbol"!==typeof f;else dd(e,t,c,f,r,m);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)f=n[g],n.hasOwnProperty(g)&&null!=f&&!r.hasOwnProperty(g)&&dd(e,t,g,null,r,f);for(u in r)if(f=r[u],m=n[u],r.hasOwnProperty(u)&&f!==m&&(null!=f||null!=m))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(o(137,t));break;default:dd(e,t,u,f,r,m)}return;default:if(Tt(t)){for(var y in n)f=n[y],n.hasOwnProperty(y)&&void 0!==f&&!r.hasOwnProperty(y)&&pd(e,t,y,void 0,r,f);for(d in r)f=r[d],m=n[d],!r.hasOwnProperty(d)||f===m||void 0===f&&void 0===m||pd(e,t,d,f,r,m);return}}for(var x in n)f=n[x],n.hasOwnProperty(x)&&null!=f&&!r.hasOwnProperty(x)&&dd(e,t,x,null,r,f);for(p in r)f=r[p],m=n[p],!r.hasOwnProperty(p)||f===m||null==f&&null==m||dd(e,t,p,f,r,m)}(r,e.type,n,t),r[Ue]=t}catch(a){ju(e,e.return,a)}}function Ss(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&Ed(e.type)||4===e.tag}function Cs(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Ss(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&Ed(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Es(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Nt));else if(4!==r&&(27===r&&Ed(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(Es(e,t,n),e=e.sibling;null!==e;)Es(e,t,n),e=e.sibling}function Ts(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&Ed(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(Ts(e,t,n),e=e.sibling;null!==e;)Ts(e,t,n),e=e.sibling}function Ps(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);fd(t,r,n),t[We]=e,t[Ue]=n}catch(i){ju(e,e.return,i)}}var $s=!1,_s=!1,Ns=!1,Os="function"===typeof WeakSet?WeakSet:Set,Rs=null;function Ls(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:qs(e,n),4&r&&ys(5,n);break;case 1:if(qs(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){ju(n,n.return,o)}else{var a=jl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){ju(n,n.return,l)}}64&r&&ws(n),512&r&&vs(n,n.return);break;case 3:if(qs(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{Ei(e,t)}catch(o){ju(n,n.return,o)}}break;case 27:null===t&&4&r&&Ps(n);case 26:case 5:qs(e,n),null===t&&4&r&&zs(n),512&r&&vs(n,n.return);break;case 12:qs(e,n);break;case 31:qs(e,n),4&r&&Ws(e,n);break;case 13:qs(e,n),4&r&&Us(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=Tu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||$s)){t=null!==t&&null!==t.memoizedState||_s,a=$s;var i=_s;$s=r,(_s=t)&&!i?Js(e,n,0!==(8772&n.subtreeFlags)):qs(e,n),$s=a,_s=i}break;case 30:break;default:qs(e,n)}}function Ms(e){var t=e.alternate;null!==t&&(e.alternate=null,Ms(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&qe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var As=null,Ds=!1;function Is(e,t,n){for(n=n.child;null!==n;)Fs(e,t,n),n=n.sibling}function Fs(e,t,n){if(xe&&"function"===typeof xe.onCommitFiberUnmount)try{xe.onCommitFiberUnmount(ye,n)}catch(i){}switch(n.tag){case 26:_s||ks(n,t),Is(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:_s||ks(n,t);var r=As,a=Ds;Ed(n.type)&&(As=n.stateNode,Ds=!1),Is(e,t,n),Id(n.stateNode),As=r,Ds=a;break;case 5:_s||ks(n,t);case 6:if(r=As,a=Ds,As=null,Is(e,t,n),Ds=a,null!==(As=r))if(Ds)try{(9===As.nodeType?As.body:"HTML"===As.nodeName?As.ownerDocument.body:As).removeChild(n.stateNode)}catch(o){ju(n,t,o)}else try{As.removeChild(n.stateNode)}catch(o){ju(n,t,o)}break;case 18:null!==As&&(Ds?(Td(9===(e=As).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Kp(e)):Td(As,n.stateNode));break;case 4:r=As,a=Ds,As=n.stateNode.containerInfo,Ds=!0,Is(e,t,n),As=r,Ds=a;break;case 0:case 11:case 14:case 15:xs(2,n,t),_s||xs(4,n,t),Is(e,t,n);break;case 1:_s||(ks(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&bs(n,t,r)),Is(e,t,n);break;case 21:Is(e,t,n);break;case 22:_s=(r=_s)||null!==n.memoizedState,Is(e,t,n),_s=r;break;default:Is(e,t,n)}}function Ws(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{Kp(e)}catch(n){ju(t,t.return,n)}}}function Us(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Kp(e)}catch(n){ju(t,t.return,n)}}function Hs(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Os),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Os),t;default:throw Error(o(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Pu.bind(null,e,t);t.then(r,r)}})}function Bs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(Ed(s.type)){As=s.stateNode,Ds=!1;break e}break;case 5:As=s.stateNode,Ds=!1;break e;case 3:case 4:As=s.stateNode.containerInfo,Ds=!0;break e}s=s.return}if(null===As)throw Error(o(160));Fs(i,l,a),As=null,Ds=!1,null!==(i=a.alternate)&&(i.return=null),a.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)Gs(t,e),t=t.sibling}var Ks=null;function Gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bs(t,e),Vs(e),4&r&&(xs(3,e,e.return),ys(3,e),xs(5,e,e.return));break;case 1:Bs(t,e),Vs(e),512&r&&(_s||null===n||ks(n,n.return)),64&r&&$s&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=Ks;if(Bs(t,e),Vs(e),512&r&&(_s||null===n||ks(n,n.return)),4&r){var i=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(i=a.getElementsByTagName("title")[0])||i[Ye]||i[We]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=a.createElement(r),a.head.insertBefore(i,a.querySelector("head > title"))),fd(i,r,n),i[We]=e,et(i),r=i;break e;case"link":var l=rp("link","href",a).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((i=l[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}fd(i=a.createElement(r),r,n),a.head.appendChild(i);break;case"meta":if(l=rp("meta","content",a).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((i=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}fd(i=a.createElement(r),r,n),a.head.appendChild(i);break;default:throw Error(o(468,r))}i[We]=e,et(i),r=i}e.stateNode=r}else ap(a,e.type,e.stateNode);else e.stateNode=Xd(a,r,e.memoizedProps);else i!==r?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===r?ap(a,e.type,e.stateNode):Xd(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&js(e,e.memoizedProps,n.memoizedProps)}break;case 27:Bs(t,e),Vs(e),512&r&&(_s||null===n||ks(n,n.return)),null!==n&&4&r&&js(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Bs(t,e),Vs(e),512&r&&(_s||null===n||ks(n,n.return)),32&e.flags){a=e.stateNode;try{jt(a,"")}catch(h){ju(e,e.return,h)}}4&r&&null!=e.stateNode&&js(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(Ns=!0);break;case 6:if(Bs(t,e),Vs(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(h){ju(e,e.return,h)}}break;case 3:if(np=null,a=Ks,Ks=Ud(t.containerInfo),Bs(t,e),Ks=a,Vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Kp(t.containerInfo)}catch(h){ju(e,e.return,h)}Ns&&(Ns=!1,Ys(e));break;case 4:r=Ks,Ks=Ud(e.stateNode.containerInfo),Bs(t,e),Vs(e),Ks=r;break;case 12:default:Bs(t,e),Vs(e);break;case 31:case 19:Bs(t,e),Vs(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Hs(e,r)));break;case 13:Bs(t,e),Vs(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(Oc=se()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Hs(e,r)));break;case 22:a=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=$s,d=_s;if($s=u||a,_s=d||c,Bs(t,e),_s=d,$s=u,Vs(e),8192&r)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===n||c||$s||_s||Qs(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(i=c.stateNode,a)"function"===typeof(l=i.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=c.stateNode;var p=c.memoizedProps.style,f=void 0!==p&&null!==p&&p.hasOwnProperty("display")?p.display:null;s.style.display=null==f||"boolean"===typeof f?"":(""+f).trim()}}catch(h){ju(c,c.return,h)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(h){ju(c,c.return,h)}}}else if(18===t.tag){if(null===n){c=t;try{var m=c.stateNode;a?Pd(m,!0):Pd(c.stateNode,!1)}catch(h){ju(c,c.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Hs(e,n))));case 30:case 21:}}function Vs(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(Ss(r)){n=r;break}r=r.return}if(null==n)throw Error(o(160));switch(n.tag){case 27:var a=n.stateNode;Ts(e,Cs(e),a);break;case 5:var i=n.stateNode;32&n.flags&&(jt(i,""),n.flags&=-33),Ts(e,Cs(e),i);break;case 3:case 4:var l=n.stateNode.containerInfo;Es(e,Cs(e),l);break;default:throw Error(o(161))}}catch(s){ju(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ys(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Ys(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function qs(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Ls(e,t.alternate,t),t=t.sibling}function Qs(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:xs(4,t,t.return),Qs(t);break;case 1:ks(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&bs(t,t.return,n),Qs(t);break;case 27:Id(t.stateNode);case 26:case 5:ks(t,t.return),Qs(t);break;case 22:null===t.memoizedState&&Qs(t);break;default:Qs(t)}e=e.sibling}}function Js(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:Js(a,i,n),ys(4,i);break;case 1:if(Js(a,i,n),"function"===typeof(a=(r=i).stateNode).componentDidMount)try{a.componentDidMount()}catch(c){ju(r,r.return,c)}if(null!==(a=(r=i).updateQueue)){var l=r.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)Ci(s[a],l)}catch(c){ju(r,r.return,c)}}n&&64&o&&ws(i),vs(i,i.return);break;case 27:Ps(i);case 26:case 5:Js(a,i,n),n&&null===r&&4&o&&zs(i),vs(i,i.return);break;case 12:Js(a,i,n);break;case 31:Js(a,i,n),n&&4&o&&Ws(a,i);break;case 13:Js(a,i,n),n&&4&o&&Us(a,i);break;case 22:null===i.memoizedState&&Js(a,i,n),vs(i,i.return);break;case 30:break;default:Js(a,i,n)}t=t.sibling}}function Xs(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Wa(n))}function Zs(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Wa(e))}function ec(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)tc(e,t,n,r),t=t.sibling}function tc(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ec(e,t,n,r),2048&a&&ys(9,t);break;case 1:case 31:case 13:default:ec(e,t,n,r);break;case 3:ec(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Wa(e)));break;case 12:if(2048&a){ec(e,t,n,r),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,l=i.onPostCommit;"function"===typeof l&&l(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){ju(t,t.return,s)}}else ec(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,null!==t.memoizedState?2&i._visibility?ec(e,t,n,r):rc(e,t):2&i._visibility?ec(e,t,n,r):(i._visibility|=2,nc(e,t,n,r,0!==(10256&t.subtreeFlags)||!1)),2048&a&&Xs(o,t);break;case 24:ec(e,t,n,r),2048&a&&Zs(t.alternate,t)}}function nc(e,t,n,r,a){for(a=a&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var i=e,o=t,l=n,s=r,c=o.flags;switch(o.tag){case 0:case 11:case 15:nc(i,o,l,s,a),ys(8,o);break;case 23:break;case 22:var u=o.stateNode;null!==o.memoizedState?2&u._visibility?nc(i,o,l,s,a):rc(i,o):(u._visibility|=2,nc(i,o,l,s,a)),a&&2048&c&&Xs(o.alternate,o);break;case 24:nc(i,o,l,s,a),a&&2048&c&&Zs(o.alternate,o);break;default:nc(i,o,l,s,a)}t=t.sibling}}function rc(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:rc(n,r),2048&a&&Xs(r.alternate,r);break;case 24:rc(n,r),2048&a&&Zs(r.alternate,r);break;default:rc(n,r)}t=t.sibling}}var ac=8192;function ic(e,t,n){if(e.subtreeFlags&ac)for(e=e.child;null!==e;)oc(e,t,n),e=e.sibling}function oc(e,t,n){switch(e.tag){case 26:ic(e,t,n),e.flags&ac&&null!==e.memoizedState&&function(e,t,n,r){if("stylesheet"===n.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var a=Vd(r.href),i=t.querySelector(Yd(a));if(i)return null!==(t=i._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=lp.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,void et(i);i=t.ownerDocument||t,r=qd(r),(a=Fd.get(a))&&ep(r,a),et(i=i.createElement("link"));var o=i;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),fd(i,"link",r),n.instance=i}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=lp.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,Ks,e.memoizedState,e.memoizedProps);break;case 5:default:ic(e,t,n);break;case 3:case 4:var r=Ks;Ks=Ud(e.stateNode.containerInfo),ic(e,t,n),Ks=r;break;case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=ac,ac=16777216,ic(e,t,n),ac=r):ic(e,t,n))}}function lc(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function sc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Rs=r,dc(r,e)}lc(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)cc(e),e=e.sibling}function cc(e){switch(e.tag){case 0:case 11:case 15:sc(e),2048&e.flags&&xs(9,e,e.return);break;case 3:case 12:default:sc(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,uc(e)):sc(e)}}function uc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Rs=r,dc(r,e)}lc(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:xs(8,t,t.return),uc(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,uc(t));break;default:uc(t)}e=e.sibling}}function dc(e,t){for(;null!==Rs;){var n=Rs;switch(n.tag){case 0:case 11:case 15:xs(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Wa(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Rs=r;else e:for(n=e;null!==Rs;){var a=(r=Rs).sibling,i=r.return;if(Ms(r),r===n){Rs=null;break e}if(null!==a){a.return=i,Rs=a;break e}Rs=i}}}var pc={getCacheForType:function(e){var t=Oa(Ia),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Oa(Ia).controller.signal}},fc="function"===typeof WeakMap?WeakMap:Map,mc=0,hc=null,gc=null,yc=0,xc=0,wc=null,bc=!1,vc=!1,kc=!1,zc=0,jc=0,Sc=0,Cc=0,Ec=0,Tc=0,Pc=0,$c=null,_c=null,Nc=!1,Oc=0,Rc=0,Lc=1/0,Mc=null,Ac=null,Dc=0,Ic=null,Fc=null,Wc=0,Uc=0,Hc=null,Bc=null,Kc=0,Gc=null;function Vc(){return 0!==(2&mc)&&0!==yc?yc&-yc:null!==R.T?Hu():De()}function Yc(){if(0===Tc)if(0===(536870912&yc)||pa){var e=je;0===(3932160&(je<<=1))&&(je=262144),Tc=e}else Tc=536870912;return null!==(e=Oi.current)&&(e.flags|=32),Tc}function qc(e,t,n){(e!==hc||2!==xc&&9!==xc)&&null===e.cancelPendingCommit||(nu(e,0),Zc(e,yc,Tc,!1)),Ne(e,n),0!==(2&mc)&&e===hc||(e===hc&&(0===(2&mc)&&(Cc|=n),4===jc&&Zc(e,yc,Tc,!1)),Mu(e))}function Qc(e,t,n){if(0!==(6&mc))throw Error(o(327));for(var r=!n&&0===(127&t)&&0===(t&e.expiredLanes)||Te(e,t),a=r?function(e,t){var n=mc;mc|=2;var r=iu(),a=ou();hc!==e||yc!==t?(Mc=null,Lc=se()+500,nu(e,t)):vc=Te(e,t);e:for(;;)try{if(0!==xc&&null!==gc){t=gc;var i=wc;t:switch(xc){case 1:xc=0,wc=null,fu(e,t,i,1);break;case 2:case 9:if(ni(i)){xc=0,wc=null,pu(t);break}t=function(){2!==xc&&9!==xc||hc!==e||(xc=7),Mu(e)},i.then(t,t);break e;case 3:xc=7;break e;case 4:xc=5;break e;case 7:ni(i)?(xc=0,wc=null,pu(t)):(xc=0,wc=null,fu(e,t,i,7));break;case 5:var l=null;switch(gc.tag){case 26:l=gc.memoizedState;case 5:case 27:var s=gc;if(l?ip(l):s.stateNode.complete){xc=0,wc=null;var c=s.sibling;if(null!==c)gc=c;else{var u=s.return;null!==u?(gc=u,mu(u)):gc=null}break t}}xc=0,wc=null,fu(e,t,i,5);break;case 6:xc=0,wc=null,fu(e,t,i,6);break;case 8:tu(),jc=6;break e;default:throw Error(o(462))}}uu();break}catch(d){ru(e,d)}return Sa=ja=null,R.H=r,R.A=a,mc=n,null!==gc?0:(hc=null,yc=0,_r(),jc)}(e,t):su(e,t,!0),i=r;;){if(0===a){vc&&!r&&Zc(e,t,0,!1);break}if(n=e.current.alternate,!i||Xc(n)){if(2===a){if(i=t,e.errorRecoveryDisabledLanes&i)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;a=$c;var c=s.current.memoizedState.isDehydrated;if(c&&(nu(s,l).flags|=256),2!==(l=su(s,l,!1))){if(kc&&!c){s.errorRecoveryDisabledLanes|=i,Cc|=i,a=4;break e}i=_c,_c=a,null!==i&&(null===_c?_c=i:_c.push.apply(_c,i))}a=l}if(i=!1,2!==a)continue}}if(1===a){nu(e,0),Zc(e,t,0,!0);break}e:{switch(r=e,i=a){case 0:case 1:throw Error(o(345));case 4:if((4194048&t)!==t)break;case 6:Zc(r,t,Tc,!bc);break e;case 2:_c=null;break;case 3:case 5:break;default:throw Error(o(329))}if((62914560&t)===t&&10<(a=Oc+300-se())){if(Zc(r,t,Tc,!bc),0!==Ee(r,0,!0))break e;Wc=t,r.timeoutHandle=kd(Jc.bind(null,r,n,_c,Mc,Nc,t,Tc,Cc,Pc,bc,i,"Throttled",-0,0),a)}else Jc(r,n,_c,Mc,Nc,t,Tc,Cc,Pc,bc,i,null,-0,0)}break}a=su(e,t,!1),i=!1}Mu(e)}function Jc(e,t,n,r,a,i,o,l,s,c,u,d,p,f){if(e.timeoutHandle=-1,8192&(d=t.subtreeFlags)||16785408===(16785408&d)){oc(t,i,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nt});var m=(62914560&i)===i?Oc-se():(4194048&i)===i?Rc-se():0;if(null!==(m=function(e,t){return e.stylesheets&&0===e.count&&cp(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&cp(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&0===op&&(op=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var a=n[r],i=a.transferSize,o=a.initiatorType,l=a.duration;if(i&&l&&md(o)){for(o=0,l=a.responseEnd,r+=1;r<n.length;r++){var s=n[r],c=s.startTime;if(c>l)break;var u=s.transferSize,d=s.initiatorType;u&&md(d)&&(o+=u*((s=s.responseEnd)<l?1:(l-c)/(s-c)))}if(--r,t+=8*(i+o)/(a.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"===typeof(e=navigator.connection.downlink)?e:5}());var a=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&cp(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>op?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(a)}}:null}(d,m)))return Wc=i,e.cancelPendingCommit=m(gu.bind(null,e,t,i,n,r,a,o,l,s,u,d,null,p,f)),void Zc(e,i,o,!c)}gu(e,t,i,n,r,a,o,l,s)}function Xc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Zn(i(),a))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zc(e,t,n,r){t&=~Ec,t&=~Cc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var i=31-be(a),o=1<<i;r[i]=-1,a&=~o}0!==n&&Oe(e,n,t)}function eu(){return 0!==(6&mc)||(Au(0,!1),!1)}function tu(){if(null!==gc){if(0===xc)var e=gc.return;else Sa=ja=null,lo(e=gc),si=null,ci=0,e=gc;for(;null!==e;)gs(e.alternate,e),e=e.return;gc=null}}function nu(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,zd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Wc=0,tu(),hc=e,gc=n=Wr(e.current,null),yc=t,xc=0,wc=null,bc=!1,vc=Te(e,t),kc=!1,Pc=Tc=Ec=Cc=Sc=jc=0,_c=$c=null,Nc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-be(r),i=1<<a;t|=e[a],r&=~i}return zc=t,_r(),n}function ru(e,t){Hi=null,R.H=gl,t===Xa||t===ei?(t=oi(),xc=3):t===Za?(t=oi(),xc=4):xc=t===Ol?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,wc=t,null===gc&&(jc=1,Tl(e,qr(t,e.current)))}function au(){var e=Oi.current;return null===e||((4194048&yc)===yc?null===Ri:((62914560&yc)===yc||0!==(536870912&yc))&&e===Ri)}function iu(){var e=R.H;return R.H=gl,null===e?gl:e}function ou(){var e=R.A;return R.A=pc,e}function lu(){jc=4,bc||(4194048&yc)!==yc&&null!==Oi.current||(vc=!0),0===(134217727&Sc)&&0===(134217727&Cc)||null===hc||Zc(hc,yc,Tc,!1)}function su(e,t,n){var r=mc;mc|=2;var a=iu(),i=ou();hc===e&&yc===t||(Mc=null,nu(e,t)),t=!1;var o=jc;e:for(;;)try{if(0!==xc&&null!==gc){var l=gc,s=wc;switch(xc){case 8:tu(),o=6;break e;case 3:case 2:case 9:case 6:null===Oi.current&&(t=!0);var c=xc;if(xc=0,wc=null,fu(e,l,s,c),n&&vc){o=0;break e}break;default:c=xc,xc=0,wc=null,fu(e,l,s,c)}}cu(),o=jc;break}catch(u){ru(e,u)}return t&&e.shellSuspendCounter++,Sa=ja=null,mc=r,R.H=a,R.A=i,null===gc&&(hc=null,yc=0,_r()),o}function cu(){for(;null!==gc;)du(gc)}function uu(){for(;null!==gc&&!oe();)du(gc)}function du(e){var t=ls(e.alternate,e,zc);e.memoizedProps=e.pendingProps,null===t?mu(e):gc=t}function pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Gl(n,t,t.pendingProps,t.type,void 0,yc);break;case 11:t=Gl(n,t,t.pendingProps,t.type.render,t.ref,yc);break;case 5:lo(t);default:gs(n,t),t=ls(n,t=gc=Ur(t,zc),zc)}e.memoizedProps=e.pendingProps,null===t?mu(e):gc=t}function fu(e,t,n,r){Sa=ja=null,lo(t),si=null,ci=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&$a(t,n,a,!0),null!==(n=Oi.current)){switch(n.tag){case 31:case 13:return null===Ri?lu():null===n.alternate&&0===jc&&(jc=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ti?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),Su(e,r,a)),!1;case 22:return n.flags|=65536,r===ti?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),Su(e,r,a)),!1}throw Error(o(435,n.tag))}return Su(e,r,a),lu(),!1}if(pa)return null!==(t=Oi.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ha&&ka(qr(e=Error(o(422),{cause:r}),n))):(r!==ha&&ka(qr(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=qr(r,n),ki(e,a=$l(e.stateNode,r,a)),4!==jc&&(jc=2)),!1;var i=Error(o(520),{cause:r});if(i=qr(i,n),null===$c?$c=[i]:$c.push(i),4!==jc&&(jc=2),null===t)return!0;r=qr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,ki(n,e=$l(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===Ac||!Ac.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,Nl(a=_l(a),e,n,r),ki(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,yc))return jc=1,Tl(e,qr(n,e.current)),void(gc=null)}catch(i){if(null!==a)throw gc=a,i;return jc=1,Tl(e,qr(n,e.current)),void(gc=null)}32768&t.flags?(pa||1===r?e=!0:vc||0!==(536870912&yc)?e=!1:(bc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=Oi.current)&&13===r.tag&&(r.flags|=16384))),hu(t,e)):mu(t)}function mu(e){var t=e;do{if(0!==(32768&t.flags))return void hu(t,bc);e=t.return;var n=ms(t.alternate,t,zc);if(null!==n)return void(gc=n);if(null!==(t=t.sibling))return void(gc=t);gc=t=e}while(null!==t);0===jc&&(jc=5)}function hu(e,t){do{var n=hs(e.alternate,e);if(null!==n)return n.flags&=32767,void(gc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(gc=e);gc=e=n}while(null!==e);jc=6,gc=null}function gu(e,t,n,r,a,i,l,s,c){e.cancelPendingCommit=null;do{vu()}while(0!==Dc);if(0!==(6&mc))throw Error(o(327));if(null!==t){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,function(e,t,n,r,a,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-be(n),d=1<<u;l[u]=0,s[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var f=p[u];null!==f&&(f.lane&=-536870913)}n&=~d}0!==r&&Oe(e,r,0),0!==i&&0===a&&0!==e.tag&&(e.suspendedLanes|=i&~(o&~t))}(e,n,i|=$r,l,s,c),e===hc&&(gc=hc=null,yc=0),Fc=t,Ic=e,Wc=n,Uc=i,Hc=a,Bc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,ae(pe,function(){return ku(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=R.T,R.T=null,a=L.p,L.p=2,l=mc,mc|=4;try{!function(e,t){if(e=e.containerInfo,hd=bp,ir(e=ar(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(g){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||0!==a&&3!==p.nodeType||(s=l+a),p!==i||0!==r&&3!==p.nodeType||(c=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(m=p.firstChild);)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===a&&(s=l),f===i&&++d===r&&(c=l),null!==(m=p.nextSibling))break;f=(p=f).parentNode}p=m}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(gd={focusedElem:e,selectionRange:n},bp=!1,Rs=t;null!==Rs;)if(e=(t=Rs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Rs=e;else for(;null!==Rs;){switch(i=(t=Rs).alternate,e=t.flags,t.tag){case 0:if(0!==(4&e)&&null!==(e=null!==(e=t.updateQueue)?e.events:null))for(n=0;n<e.length;n++)(a=e[n]).ref.impl=a.nextImpl;break;case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==i){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,r=n.stateNode;try{var h=jl(n.type,a);e=r.getSnapshotBeforeUpdate(h,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(y){ju(n,n.return,y)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))$d(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$d(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,Rs=e;break}Rs=t.return}}(e,t)}finally{mc=l,L.p=a,R.T=r}}Dc=1,yu(),xu(),wu()}}function yu(){if(1===Dc){Dc=0;var e=Ic,t=Fc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=R.T,R.T=null;var r=L.p;L.p=2;var a=mc;mc|=4;try{Gs(t,e);var i=gd,o=ar(e.containerInfo),l=i.focusedElem,s=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&rr(l.ownerDocument.documentElement,l)){if(null!==s&&ir(l)){var c=s.start,u=s.end;if(void 0===u&&(u=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(u,l.value.length);else{var d=l.ownerDocument||document,p=d&&d.defaultView||window;if(p.getSelection){var f=p.getSelection(),m=l.textContent.length,h=Math.min(s.start,m),g=void 0===s.end?h:Math.min(s.end,m);!f.extend&&h>g&&(o=g,g=h,h=o);var y=nr(l,h),x=nr(l,g);if(y&&x&&(1!==f.rangeCount||f.anchorNode!==y.node||f.anchorOffset!==y.offset||f.focusNode!==x.node||f.focusOffset!==x.offset)){var w=d.createRange();w.setStart(y.node,y.offset),f.removeAllRanges(),h>g?(f.addRange(w),f.extend(x.node,x.offset)):(w.setEnd(x.node,x.offset),f.addRange(w))}}}}for(d=[],f=l;f=f.parentNode;)1===f.nodeType&&d.push({element:f,left:f.scrollLeft,top:f.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<d.length;l++){var b=d[l];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}bp=!!hd,gd=hd=null}finally{mc=a,L.p=r,R.T=n}}e.current=t,Dc=2}}function xu(){if(2===Dc){Dc=0;var e=Ic,t=Fc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=R.T,R.T=null;var r=L.p;L.p=2;var a=mc;mc|=4;try{Ls(e,t.alternate,t)}finally{mc=a,L.p=r,R.T=n}}Dc=3}}function wu(){if(4===Dc||3===Dc){Dc=0,le();var e=Ic,t=Fc,n=Wc,r=Bc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Dc=5:(Dc=0,Fc=Ic=null,bu(e,e.pendingLanes));var a=e.pendingLanes;if(0===a&&(Ac=null),Ae(n),t=t.stateNode,xe&&"function"===typeof xe.onCommitFiberRoot)try{xe.onCommitFiberRoot(ye,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==r){t=R.T,a=L.p,L.p=2,R.T=null;try{for(var i=e.onRecoverableError,o=0;o<r.length;o++){var l=r[o];i(l.value,{componentStack:l.stack})}}finally{R.T=t,L.p=a}}0!==(3&Wc)&&vu(),Mu(e),a=e.pendingLanes,0!==(261930&n)&&0!==(42&a)?e===Gc?Kc++:(Kc=0,Gc=e):Kc=0,Au(0,!1)}}function bu(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Wa(t)))}function vu(){return yu(),xu(),wu(),ku()}function ku(){if(5!==Dc)return!1;var e=Ic,t=Uc;Uc=0;var n=Ae(Wc),r=R.T,a=L.p;try{L.p=32>n?32:n,R.T=null,n=Hc,Hc=null;var i=Ic,l=Wc;if(Dc=0,Fc=Ic=null,Wc=0,0!==(6&mc))throw Error(o(331));var s=mc;if(mc|=4,cc(i.current),tc(i,i.current,l,n),mc=s,Au(0,!1),xe&&"function"===typeof xe.onPostCommitFiberRoot)try{xe.onPostCommitFiberRoot(ye,i)}catch(c){}return!0}finally{L.p=a,R.T=r,bu(e,t)}}function zu(e,t,n){t=qr(n,t),null!==(e=bi(e,t=$l(e.stateNode,t,2),2))&&(Ne(e,2),Mu(e))}function ju(e,t,n){if(3===e.tag)zu(e,e,n);else for(;null!==t;){if(3===t.tag){zu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ac||!Ac.has(r))){e=qr(n,e),null!==(r=bi(t,n=_l(2),2))&&(Nl(n,r,t,e),Ne(r,2),Mu(r));break}}t=t.return}}function Su(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fc;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(kc=!0,a.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,hc===e&&(yc&n)===n&&(4===jc||3===jc&&(62914560&yc)===yc&&300>se()-Oc?0===(2&mc)&&nu(e,0):Ec|=n,Pc===yc&&(Pc=0)),Mu(e)}function Eu(e,t){0===t&&(t=$e()),null!==(e=Rr(e,t))&&(Ne(e,t),Mu(e))}function Tu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Eu(e,n)}function Pu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),Eu(e,n)}var $u=null,_u=null,Nu=!1,Ou=!1,Ru=!1,Lu=0;function Mu(e){e!==_u&&null===e.next&&(null===_u?$u=_u=e:_u=_u.next=e),Ou=!0,Nu||(Nu=!0,Sd(function(){0!==(6&mc)?ae(ue,Du):Iu()}))}function Au(e,t){if(!Ru&&Ou){Ru=!0;do{for(var n=!1,r=$u;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var i=0;else{var o=r.suspendedLanes,l=r.pingedLanes;i=(1<<31-be(42|e)+1)-1,i=201326741&(i&=a&~(o&~l))?201326741&i|1:i?2|i:0}0!==i&&(n=!0,Uu(r,i))}else i=yc,0===(3&(i=Ee(r,r===hc?i:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||Te(r,i)||(n=!0,Uu(r,i));r=r.next}}while(n);Ru=!1}}function Du(){Iu()}function Iu(){Ou=Nu=!1;var e=0;0!==Lu&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==vd&&(vd=e,!0);return vd=null,!1}()&&(e=Lu);for(var t=se(),n=null,r=$u;null!==r;){var a=r.next,i=Fu(r,t);0===i?(r.next=null,null===n?$u=a:n.next=a,null===a&&(_u=n)):(n=r,(0!==e||0!==(3&i))&&(Ou=!0)),r=a}0!==Dc&&5!==Dc||Au(e,!1),0!==Lu&&(Lu=0)}function Fu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=-62914561&e.pendingLanes;0<i;){var o=31-be(i),l=1<<o,s=a[o];-1===s?0!==(l&n)&&0===(l&r)||(a[o]=Pe(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}if(n=yc,n=Ee(e,e===(t=hc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===xc||9===xc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ie(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||Te(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&ie(r),Ae(n)){case 2:case 8:n=de;break;case 32:default:n=pe;break;case 268435456:n=me}return r=Wu.bind(null,e),n=ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ie(r),e.callbackPriority=2,e.callbackNode=null,2}function Wu(e,t){if(0!==Dc&&5!==Dc)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(vu()&&e.callbackNode!==n)return null;var r=yc;return 0===(r=Ee(e,e===hc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Qc(e,r,t),Fu(e,se()),null!=e.callbackNode&&e.callbackNode===n?Wu.bind(null,e):null)}function Uu(e,t){if(vu())return null;Qc(e,t,!0)}function Hu(){if(0===Lu){var e=Ba;0===e&&(e=ze,0===(261888&(ze<<=1))&&(ze=256)),Lu=e}return Lu}function Bu(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:_t(""+e)}function Ku(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Gu=0;Gu<Sr.length;Gu++){var Vu=Sr[Gu];Cr(Vu.toLowerCase(),"on"+(Vu[0].toUpperCase()+Vu.slice(1)))}Cr(yr,"onAnimationEnd"),Cr(xr,"onAnimationIteration"),Cr(wr,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(br,"onTransitionRun"),Cr(vr,"onTransitionStart"),Cr(kr,"onTransitionCancel"),Cr(zr,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yu));function Qu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;i=l,a.currentTarget=c;try{i(a)}catch(u){Er(u)}a.currentTarget=null,i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,c=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;i=l,a.currentTarget=c;try{i(a)}catch(u){Er(u)}a.currentTarget=null,i=s}}}}function Ju(e,t){var n=t[Be];void 0===n&&(n=t[Be]=new Set);var r=e+"__bubble";n.has(r)||(td(t,e,2,!1),n.add(r))}function Xu(e,t,n){var r=0;t&&(r|=4),td(n,e,r,t)}var Zu="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[Zu]){e[Zu]=!0,tt.forEach(function(t){"selectionchange"!==t&&(qu.has(t)||Xu(t,!1,e),Xu(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Zu]||(t[Zu]=!0,Xu("selectionchange",!1,t))}}function td(e,t,n,r){switch(Ep(t)){case 2:var a=vp;break;case 8:a=kp;break;default:a=zp}n=a.bind(null,t,n,e),a=void 0,!Ut||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function nd(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a)break;if(4===o)for(o=r.return;null!==o;){var c=o.tag;if((3===c||4===c)&&o.stateNode.containerInfo===a)return;o=o.return}for(;null!==l;){if(null===(o=Qe(l)))return;if(5===(c=o.tag)||6===c||26===c||27===c){r=i=o;continue e}l=l.parentNode}}r=r.return}It(function(){var r=i,a=Rt(n),o=[];e:{var l=jr.get(e);if(void 0!==l){var c=nn,u=e;switch(e){case"keypress":if(0===Yt(n))break e;case"keydown":case"keyup":c=xn;break;case"focusin":u="focus",c=cn;break;case"focusout":u="blur",c=cn;break;case"beforeblur":case"afterblur":c=cn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=ln;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=sn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=bn;break;case yr:case xr:case wr:c=un;break;case zr:c=vn;break;case"scroll":case"scrollend":c=an;break;case"wheel":c=kn;break;case"copy":case"cut":case"paste":c=dn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=wn;break;case"toggle":case"beforetoggle":c=zn}var d=0!==(4&t),p=!d&&("scroll"===e||"scrollend"===e),f=d?null!==l?l+"Capture":null:l;d=[];for(var m,h=r;null!==h;){var g=h;if(m=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===m||null===f||null!=(g=Ft(h,f))&&d.push(rd(h,g,m)),p)break;h=h.return}0<d.length&&(l=new c(l,u,null,n,a),o.push({event:l,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Ot||!(u=n.relatedTarget||n.fromElement)||!Qe(u)&&!u[He])&&(c||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Qe(u):null)&&(p=s(u),d=u.tag,u!==p||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=ln,g="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(d=wn,g="onPointerLeave",f="onPointerEnter",h="pointer"),p=null==c?l:Xe(c),m=null==u?l:Xe(u),(l=new d(g,h+"leave",c,n,a)).target=p,l.relatedTarget=m,g=null,Qe(a)===r&&((d=new d(f,h+"enter",u,n,a)).target=m,d.relatedTarget=p,g=d),p=g,c&&u)e:{for(d=id,h=u,m=0,g=f=c;g;g=d(g))m++;g=0;for(var y=h;y;y=d(y))g++;for(;0<m-g;)f=d(f),m--;for(;0<g-m;)h=d(h),g--;for(;m--;){if(f===h||null!==h&&f===h.alternate){d=f;break e}f=d(f),h=d(h)}d=null}else d=null;null!==c&&od(o,l,c,d,!1),null!==u&&null!==p&&od(o,p,u,d,!0)}if("select"===(c=(l=r?Xe(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var x=Wn;else if(Ln(l))if(Un)x=Xn;else{x=Qn;var w=qn}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&Tt(r.elementType)&&(x=Wn):x=Jn;switch(x&&(x=x(e,r))?Mn(o,x,n,a):(w&&w(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&bt(l,"number",l.value)),w=r?Xe(r):window,e){case"focusin":(Ln(w)||"true"===w.contentEditable)&&(lr=w,sr=r,cr=null);break;case"focusout":cr=sr=lr=null;break;case"mousedown":ur=!0;break;case"contextmenu":case"mouseup":case"dragend":ur=!1,dr(o,n,a);break;case"selectionchange":if(or)break;case"keydown":case"keyup":dr(o,n,a)}var b;if(Sn)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else On?_n(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Tn&&"ko"!==n.locale&&(On||"onCompositionStart"!==v?"onCompositionEnd"===v&&On&&(b=Vt()):(Kt="value"in(Bt=a)?Bt.value:Bt.textContent,On=!0)),0<(w=ad(r,v)).length&&(v=new pn(v,e,null,n,a),o.push({event:v,listeners:w}),b?v.data=b:null!==(b=Nn(n))&&(v.data=b))),(b=En?function(e,t){switch(e){case"compositionend":return Nn(t);case"keypress":return 32!==t.which?null:($n=!0,Pn);case"textInput":return(e=t.data)===Pn&&$n?null:e;default:return null}}(e,n):function(e,t){if(On)return"compositionend"===e||!Sn&&_n(e,t)?(e=Vt(),Gt=Kt=Bt=null,On=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(v=ad(r,"onBeforeInput")).length&&(w=new pn("onBeforeInput","beforeinput",null,n,a),o.push({event:w,listeners:v}),w.data=b)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var i=Bu((a[Ue]||null).action),o=r.submitter;o&&null!==(t=(t=o[Ue]||null)?Bu(t.formAction):o.getAttribute("formAction"))&&(i=t,o=null);var l=new nn("action","action",null,r,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==Lu){var e=o?Ku(a,o):new FormData(a);nl(n,{pending:!0,data:e,method:a.method,action:i},null,e)}}else"function"===typeof i&&(l.preventDefault(),e=o?Ku(a,o):new FormData(a),nl(n,{pending:!0,data:e,method:a.method,action:i},i,e))},currentTarget:a}]})}}(o,e,r,n,a)}Qu(o,t)})}function rd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ad(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===i||(null!=(a=Ft(e,n))&&r.unshift(rd(e,a,i)),null!=(a=Ft(e,t))&&r.push(rd(e,a,i))),3===e.tag)return r;e=e.return}return[]}function id(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function od(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===c||(s=c,a?null!=(c=Ft(n,i))&&o.unshift(rd(n,c,s)):a||null!=(c=Ft(n,i))&&o.push(rd(n,c,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var ld=/\r\n?/g,sd=/\u0000|\uFFFD/g;function cd(e){return("string"===typeof e?e:""+e).replace(ld,"\n").replace(sd,"")}function ud(e,t){return t=cd(t),cd(e)===t}function dd(e,t,n,r,a,i){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||jt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&jt(e,""+r);break;case"className":ct(e,"class",r);break;case"tabIndex":ct(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ct(e,n,r);break;case"style":Et(e,r,i);break;case"data":if("object"!==t){ct(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=_t(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&dd(e,t,"name",a.name,a,null),dd(e,t,"formEncType",a.formEncType,a,null),dd(e,t,"formMethod",a.formMethod,a,null),dd(e,t,"formTarget",a.formTarget,a,null)):(dd(e,t,"encType",a.encType,a,null),dd(e,t,"method",a.method,a,null),dd(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=_t(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Nt);break;case"onScroll":null!=r&&Ju("scroll",e);break;case"onScrollEnd":null!=r&&Ju("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=_t(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Ju("beforetoggle",e),Ju("toggle",e),st(e,"popover",r);break;case"xlinkActuate":ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ut(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ut(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ut(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ut(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":st(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&st(e,n=Pt.get(n)||n,r)}}function pd(e,t,n,r,a,i){switch(n){case"style":Et(e,r,i);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?jt(e,r):("number"===typeof r||"bigint"===typeof r)&&jt(e,""+r);break;case"onScroll":null!=r&&Ju("scroll",e);break;case"onScrollEnd":null!=r&&Ju("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Nt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:nt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(i=null!=(i=e[Ue]||null)?i[n]:null)&&e.removeEventListener(t,i,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):st(e,n,r):("function"!==typeof i&&null!==i&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function fd(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ju("error",e),Ju("load",e);var r,a=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:dd(e,t,r,l,n,null)}}return i&&dd(e,t,"srcSet",n.srcSet,n,null),void(a&&dd(e,t,"src",n.src,n,null));case"input":Ju("invalid",e);var s=r=l=i=null,c=null,u=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":i=d;break;case"type":l=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:dd(e,t,a,d,n,null)}}return void wt(e,r,s,c,u,l,i,!1);case"select":for(i in Ju("invalid",e),a=l=r=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:dd(e,t,i,s,n,null)}return t=r,n=l,e.multiple=!!a,void(null!=t?vt(e,!!a,t,!1):null!=n&&vt(e,!!a,n,!0));case"textarea":for(l in Ju("invalid",e),r=i=a=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":a=s;break;case"defaultValue":i=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(o(91));break;default:dd(e,t,l,s,n,null)}return void zt(e,a,i,r);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))if("selected"===c)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else dd(e,t,c,a,n,null);return;case"dialog":Ju("beforetoggle",e),Ju("toggle",e),Ju("cancel",e),Ju("close",e);break;case"iframe":case"object":Ju("load",e);break;case"video":case"audio":for(a=0;a<Yu.length;a++)Ju(Yu[a],e);break;case"image":Ju("error",e),Ju("load",e);break;case"details":Ju("toggle",e);break;case"embed":case"source":case"link":Ju("error",e),Ju("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:dd(e,t,u,a,n,null)}return;default:if(Tt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&pd(e,t,d,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(a=n[s])&&dd(e,t,s,a,n,null))}function md(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var hd=null,gd=null;function yd(e){return 9===e.nodeType?e:e.ownerDocument}function xd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wd(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function bd(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var vd=null;var kd="function"===typeof setTimeout?setTimeout:void 0,zd="function"===typeof clearTimeout?clearTimeout:void 0,jd="function"===typeof Promise?Promise:void 0,Sd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof jd?function(e){return jd.resolve(null).then(e).catch(Cd)}:kd;function Cd(e){setTimeout(function(){throw e})}function Ed(e){return"head"===e}function Td(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)||"/&"===n){if(0===r)return e.removeChild(a),void Kp(t);r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;else if("html"===n)Id(e.ownerDocument.documentElement);else if("head"===n){Id(n=e.ownerDocument.head);for(var i=n.firstChild;i;){var o=i.nextSibling,l=i.nodeName;i[Ye]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===i.rel.toLowerCase()||n.removeChild(i),i=o}}else"body"===n&&Id(e.ownerDocument.body);n=a}while(n);Kp(t)}function Pd(e,t){var n=e;e=0;do{var r=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=r}while(n)}function $d(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":$d(n),qe(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function _d(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=Rd(e.nextSibling)))return null}return e}function Nd(e){return"$?"===e.data||"$~"===e.data}function Od(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Rd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}var Ld=null;function Md(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return Rd(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function Ad(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Dd(e,t,n){switch(t=yd(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}function Id(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);qe(e)}var Fd=new Map,Wd=new Set;function Ud(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Hd=L.d;L.d={f:function(){var e=Hd.f(),t=eu();return e||t},r:function(e){var t=Je(e);null!==t&&5===t.tag&&"form"===t.type?al(t):Hd.r(e)},D:function(e){Hd.D(e),Kd("dns-prefetch",e,null)},C:function(e,t){Hd.C(e,t),Kd("preconnect",e,t)},L:function(e,t,n){Hd.L(e,t,n);var r=Bd;if(r&&e&&t){var a='link[rel="preload"][as="'+yt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+yt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+yt(n.imageSizes)+'"]')):a+='[href="'+yt(e)+'"]';var i=a;switch(t){case"style":i=Vd(e);break;case"script":i=Qd(e)}Fd.has(i)||(e=f({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Fd.set(i,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(Yd(i))||"script"===t&&r.querySelector(Jd(i))||(fd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}},m:function(e,t){Hd.m(e,t);var n=Bd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+yt(r)+'"][href="'+yt(e)+'"]',i=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Qd(e)}if(!Fd.has(i)&&(e=f({rel:"modulepreload",href:e},t),Fd.set(i,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Jd(i)))return}fd(r=n.createElement("link"),"link",e),et(r),n.head.appendChild(r)}}},X:function(e,t){Hd.X(e,t);var n=Bd;if(n&&e){var r=Ze(n).hoistableScripts,a=Qd(e),i=r.get(a);i||((i=n.querySelector(Jd(a)))||(e=f({src:e,async:!0},t),(t=Fd.get(a))&&tp(e,t),et(i=n.createElement("script")),fd(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}},S:function(e,t,n){Hd.S(e,t,n);var r=Bd;if(r&&e){var a=Ze(r).hoistableStyles,i=Vd(e);t=t||"default";var o=a.get(i);if(!o){var l={loading:0,preload:null};if(o=r.querySelector(Yd(i)))l.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Fd.get(i))&&ep(e,n);var s=o=r.createElement("link");et(s),fd(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Zd(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:l},a.set(i,o)}}},M:function(e,t){Hd.M(e,t);var n=Bd;if(n&&e){var r=Ze(n).hoistableScripts,a=Qd(e),i=r.get(a);i||((i=n.querySelector(Jd(a)))||(e=f({src:e,async:!0,type:"module"},t),(t=Fd.get(a))&&tp(e,t),et(i=n.createElement("script")),fd(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}}};var Bd="undefined"===typeof document?null:document;function Kd(e,t,n){var r=Bd;if(r&&"string"===typeof t&&t){var a=yt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),Wd.has(a)||(Wd.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(fd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}}function Gd(e,t,n,r){var a,i,l,s,c=(c=G.current)?Ud(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Vd(n.href),(r=(n=Ze(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Vd(n.href);var u=Ze(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Yd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Fd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Fd.set(e,n),u||(a=c,i=e,l=n,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+i+"]")?s.loading=1:(i=a.createElement("link"),s.preload=i,i.addEventListener("load",function(){return s.loading|=1}),i.addEventListener("error",function(){return s.loading|=2}),fd(i,"link",l),et(i),a.head.appendChild(i))))),t&&null===r)throw Error(o(528,""));return d}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Qd(n),(r=(n=Ze(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Vd(e){return'href="'+yt(e)+'"'}function Yd(e){return'link[rel="stylesheet"]['+e+"]"}function qd(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Qd(e){return'[src="'+yt(e)+'"]'}function Jd(e){return"script[async]"+e}function Xd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+yt(n.href)+'"]');if(r)return t.instance=r,et(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return et(r=(e.ownerDocument||e).createElement("style")),fd(r,"style",a),Zd(r,n.precedence,e),t.instance=r;case"stylesheet":a=Vd(n.href);var i=e.querySelector(Yd(a));if(i)return t.state.loading|=4,t.instance=i,et(i),i;r=qd(n),(a=Fd.get(a))&&ep(r,a),et(i=(e.ownerDocument||e).createElement("link"));var l=i;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),fd(i,"link",r),t.state.loading|=4,Zd(i,n.precedence,e),t.instance=i;case"script":return i=Qd(n.src),(a=e.querySelector(Jd(i)))?(t.instance=a,et(a),a):(r=n,(a=Fd.get(i))&&tp(r=f({},n),a),et(a=(e=e.ownerDocument||e).createElement("script")),fd(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Zd(r,n.precedence,e));return t.instance}function Zd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,i=a,o=0;o<r.length;o++){var l=r[o];if(l.dataset.precedence===t)i=l;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function ep(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function tp(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var np=null;function rp(e,t,n){if(null===np){var r=new Map,a=np=new Map;a.set(n,r)}else(r=(a=np).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[Ye]||i[We]||"link"===e&&"stylesheet"===i.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==i.namespaceURI){var o=i.getAttribute(t)||"";o=e+o;var l=r.get(o);l?l.push(i):r.set(o,[i])}}return r}function ap(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function ip(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var op=0;function lp(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)cp(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var sp=null;function cp(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,sp=new Map,t.forEach(up,e),sp=null,lp.call(e))}function up(e,t){if(!(4&t.state.loading)){var n=sp.get(e);if(n)var r=n.get(null);else{n=new Map,sp.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var o=a[i];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(a=t.instance).getAttribute("data-precedence"),(i=n.get(o)||r)===r&&n.set(null,a),n.set(o,a),this.count++,r=lp.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),i?i.parentNode.insertBefore(a,i.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var dp={$$typeof:v,Provider:null,Consumer:null,_currentValue:M,_currentValue2:M,_threadCount:0};function pp(e,t,n,r,a,i,o,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_e(0),this.hiddenUpdates=_e(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function fp(e,t,n,r,a,i,o,l,s,c,u,d){return e=new pp(e,t,n,o,s,c,u,d,l),t=1,!0===i&&(t|=24),i=Ir(3,null,null,t),e.current=i,i.stateNode=e,(t=Fa()).refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},yi(i),e}function mp(e){return e?e=Ar:Ar}function hp(e,t,n,r,a,i){a=mp(a),null===r.context?r.context=a:r.pendingContext=a,(r=wi(t)).payload={element:n},null!==(i=void 0===i?null:i)&&(r.callback=i),null!==(n=bi(e,r,t))&&(qc(n,0,t),vi(n,e,t))}function gp(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function yp(e,t){gp(e,t),(e=e.alternate)&&gp(e,t)}function xp(e){if(13===e.tag||31===e.tag){var t=Rr(e,67108864);null!==t&&qc(t,0,67108864),yp(e,67108864)}}function wp(e){if(13===e.tag||31===e.tag){var t=Vc(),n=Rr(e,t=Me(t));null!==n&&qc(n,0,t),yp(e,t)}}var bp=!0;function vp(e,t,n,r){var a=R.T;R.T=null;var i=L.p;try{L.p=2,zp(e,t,n,r)}finally{L.p=i,R.T=a}}function kp(e,t,n,r){var a=R.T;R.T=null;var i=L.p;try{L.p=8,zp(e,t,n,r)}finally{L.p=i,R.T=a}}function zp(e,t,n,r){if(bp){var a=jp(r);if(null===a)nd(e,t,r,Sp,n),Mp(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Pp=Ap(Pp,e,t,n,r,a),!0;case"dragenter":return $p=Ap($p,e,t,n,r,a),!0;case"mouseover":return _p=Ap(_p,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Np.set(i,Ap(Np.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Op.set(i,Ap(Op.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Mp(e,r),4&t&&-1<Lp.indexOf(e)){for(;null!==a;){var i=Je(a);if(null!==i)switch(i.tag){case 3:if((i=i.stateNode).current.memoizedState.isDehydrated){var o=Ce(i.pendingLanes);if(0!==o){var l=i;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var s=1<<31-be(o);l.entanglements[1]|=s,o&=~s}Mu(i),0===(6&mc)&&(Lc=se()+500,Au(0,!1))}}break;case 31:case 13:null!==(l=Rr(i,2))&&qc(l,0,2),eu(),yp(i,2)}if(null===(i=jp(r))&&nd(e,t,r,Sp,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else nd(e,t,r,null,n)}}function jp(e){return Cp(e=Rt(e))}var Sp=null;function Cp(e){if(Sp=null,null!==(e=Qe(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(31===n){if(null!==(e=u(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Sp=e,null}function Ep(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case ue:return 2;case de:return 8;case pe:case fe:return 32;case me:return 268435456;default:return 32}default:return 32}}var Tp=!1,Pp=null,$p=null,_p=null,Np=new Map,Op=new Map,Rp=[],Lp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mp(e,t){switch(e){case"focusin":case"focusout":Pp=null;break;case"dragenter":case"dragleave":$p=null;break;case"mouseover":case"mouseout":_p=null;break;case"pointerover":case"pointerout":Np.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Op.delete(t.pointerId)}}function Ap(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=Je(t))&&xp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Dp(e){var t=Qe(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void Ie(e.priority,function(){wp(n)})}else if(31===t){if(null!==(t=u(n)))return e.blockedOn=t,void Ie(e.priority,function(){wp(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Ip(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=jp(e.nativeEvent);if(null!==n)return null!==(t=Je(n))&&xp(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Ot=r,n.target.dispatchEvent(r),Ot=null,t.shift()}return!0}function Fp(e,t,n){Ip(e)&&n.delete(t)}function Wp(){Tp=!1,null!==Pp&&Ip(Pp)&&(Pp=null),null!==$p&&Ip($p)&&($p=null),null!==_p&&Ip(_p)&&(_p=null),Np.forEach(Fp),Op.forEach(Fp)}function Up(e,t){e.blockedOn===t&&(e.blockedOn=null,Tp||(Tp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Wp)))}var Hp=null;function Bp(e){Hp!==e&&(Hp=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Hp===e&&(Hp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===Cp(r||n))continue;break}var i=Je(n);null!==i&&(e.splice(t,3),t-=3,nl(i,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function Kp(e){function t(t){return Up(t,e)}null!==Pp&&Up(Pp,e),null!==$p&&Up($p,e),null!==_p&&Up(_p,e),Np.forEach(t),Op.forEach(t);for(var n=0;n<Rp.length;n++){var r=Rp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Rp.length&&null===(n=Rp[0]).blockedOn;)Dp(n),null===n.blockedOn&&Rp.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],i=n[r+1],o=a[Ue]||null;if("function"===typeof i)o||Bp(n);else if(o){var l=null;if(i&&i.hasAttribute("formAction")){if(a=i,o=i[Ue]||null)l=o.formAction;else if(null!==Cp(a))continue}else l=o.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),Bp(n)}}}function Gp(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return a=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==a&&(a(),a=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var r=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==a&&(a(),a=null)}}}function Vp(e){this._internalRoot=e}function Yp(e){this._internalRoot=e}Yp.prototype.render=Vp.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));hp(t.current,Vc(),e,t,null,null)},Yp.prototype.unmount=Vp.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;hp(e.current,2,null,e,null,null),eu(),t[He]=null}},Yp.prototype.unstable_scheduleHydration=function(e){if(e){var t=De();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rp.length&&0!==t&&t<Rp[n].priority;n++);Rp.splice(n,0,e),0===n&&Dp(e)}};var qp=a.version;if("19.2.4"!==qp)throw Error(o(527,qp,"19.2.4"));L.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return d(a),e;if(i===r)return d(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,c=a.child;c;){if(c===n){l=!0,n=a,r=i;break}if(c===r){l=!0,r=a,n=i;break}c=c.sibling}if(!l){for(c=i.child;c;){if(c===n){l=!0,n=i,r=a;break}if(c===r){l=!0,r=i,n=a;break}c=c.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?p(e):null)?null:e.stateNode};var Qp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Jp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jp.isDisabled&&Jp.supportsFiber)try{ye=Jp.inject(Qp),xe=Jp}catch(Zp){}}t.createRoot=function(e,t){if(!l(e))throw Error(o(299));var n=!1,r="",a=Sl,i=Cl,s=El;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError)),t=fp(e,1,!1,null,0,n,r,null,a,i,s,Gp),e[He]=t.current,ed(e),new Vp(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(o(299));var r=!1,a="",i=Sl,s=Cl,c=El,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.formState&&(u=n.formState)),(t=fp(e,1,!0,t,0,r,a,u,i,s,c,Gp)).context=mp(null),n=t.current,(a=wi(r=Me(r=Vc()))).callback=null,bi(n,a,r),n=r,t.current.lanes=n,Ne(t,n),Mu(t),e[He]=t.current,ed(e),new Yp(t)},t.version="19.2.4"},672(e,t,n){var r=n(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=o.p;try{if(s.T=null,o.p=2,e)return e()}finally{s.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:i}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.2.4"},391(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)},799(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},288(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.for("react.activity"),m=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function x(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function w(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=x.prototype;var v=b.prototype=new w;v.constructor=b,g(v,x.prototype),v.isPureReactComponent=!0;var k=Array.isArray;function z(){}var j={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function C(e,t,r){var a=r.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==a?a:null,props:r}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function $(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case p:return $((u=e._init)(e._payload),t,a,i,o)}}if(u)return o=o(e),u=""===i?"."+P(e,0):i,k(o)?(a="",null!=u&&(a=u.replace(T,"$&/")+"/"),$(o,t,a,"",function(e){return e})):null!=o&&(E(o)&&(s=o,c=a+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(T,"$&/")+"/")+u,o=C(s.type,c,s.props)),t.push(o)),1;u=0;var d,f=""===i?".":i+":";if(k(e))for(var h=0;h<e.length;h++)u+=$(i=e[h],t,a,l=f+P(i,h),o);else if("function"===typeof(h=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=m&&d[m]||d["@@iterator"])?d:null))for(e=h.call(e),h=0;!(i=e.next()).done;)u+=$(i=i.value,t,a,l=f+P(i,h++),o);else if("object"===l){if("function"===typeof e.then)return $(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(z,z):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,i,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function _(e,t,n){if(null==e)return e;var r=[],a=0;return $(e,r,"","",function(e){return t.call(n,e,a++)}),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},R={map:_,forEach:function(e,t,n){_(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _(e,function(){t++}),t},toArray:function(e){return _(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=f,t.Children=R,t.Component=x,t.Fragment=a,t.Profiler=o,t.PureComponent=b,t.StrictMode=i,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return j.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=g({},e.props),a=e.key;if(null!=t)for(i in void 0!==t.key&&(a=""+t.key),t)!S.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var o=Array(i),l=0;l<i;l++)o[l]=arguments[l+2];r.children=o}return C(e.type,a,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,a={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)S.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var o=arguments.length-2;if(1===o)a.children=n;else if(1<o){for(var l=Array(o),s=0;s<o;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===a[r]&&(a[r]=o[r]);return C(e,i,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=j.T,n={};j.T=n;try{var r=e(),a=j.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(z,O)}catch(i){O(i)}finally{null!==t&&null!==n.types&&(t.types=n.types),j.T=t}},t.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},t.use=function(e){return j.H.use(e)},t.useActionState=function(e,t,n){return j.H.useActionState(e,t,n)},t.useCallback=function(e,t){return j.H.useCallback(e,t)},t.useContext=function(e){return j.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return j.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return j.H.useEffect(e,t)},t.useEffectEvent=function(e){return j.H.useEffectEvent(e)},t.useId=function(){return j.H.useId()},t.useImperativeHandle=function(e,t,n){return j.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return j.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return j.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return j.H.useMemo(e,t)},t.useOptimistic=function(e,t){return j.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return j.H.useReducer(e,t,n)},t.useRef=function(e){return j.H.useRef(e)},t.useState=function(e){return j.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return j.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return j.H.useTransition()},t.version="19.2.4"},43(e,t,n){e.exports=n(288)},579(e,t,n){e.exports=n(799)},896(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>i(s,n))c<a&&0>i(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<a&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,m=!1,h=!1,g=!1,y=!1,x="function"===typeof setTimeout?setTimeout:null,w="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function v(e){for(var t=r(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function k(e){if(g=!1,v(e),!h)if(null!==r(c))h=!0,j||(j=!0,z());else{var t=r(u);null!==t&&N(k,t.startTime-e)}}var z,j=!1,S=-1,C=5,E=-1;function T(){return!!y||!(t.unstable_now()-E<C)}function P(){if(y=!1,j){var e=t.unstable_now();E=e;var n=!0;try{e:{h=!1,g&&(g=!1,w(S),S=-1),m=!0;var i=f;try{t:{for(v(e),p=r(c);null!==p&&!(p.expirationTime>e&&T());){var o=p.callback;if("function"===typeof o){p.callback=null,f=p.priorityLevel;var l=o(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){p.callback=l,v(e),n=!0;break t}p===r(c)&&a(c),v(e)}else a(c);p=r(c)}if(null!==p)n=!0;else{var s=r(u);null!==s&&N(k,s.startTime-e),n=!1}}break e}finally{p=null,f=i,m=!1}n=void 0}}finally{n?z():j=!1}}}if("function"===typeof b)z=function(){b(P)};else if("undefined"!==typeof MessageChannel){var $=new MessageChannel,_=$.port2;$.port1.onmessage=P,z=function(){_.postMessage(null)}}else z=function(){x(P,0)};function N(e,n){S=x(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_requestPaint=function(){y=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(g?(w(S),S=-1):g=!0,N(k,i-o))):(e.sortIndex=l,n(c,e),h||m||(h=!0,j||(j=!0,z()))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},853(e,t,n){e.exports=n(896)},217(e,t,n){e.exports=n.p+"static/media/pexels-dimkidama-15115560.04167beb6bd16a6e9fd4.jpg"},410(e,t,n){e.exports=n.p+"static/media/pexels-firmbee-com-22729701-6963740.a9a8b980823767df4886.jpg"},430(e,t,n){e.exports=n.p+"static/media/pexels-magnetme-3917414-5839461.06d3415285cbf1cc0bf1.jpg"},682(e,t,n){e.exports=n.p+"static/media/pexels-rdne-7310202.0cfb9c3eef397dd77e13.jpg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>o[e]=()=>r[e]);return o.default=()=>r,n.d(i,o),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/klara-queen/",n.nc=void 0;var r=n(43),a=n.t(r,2),i=n(391),o="popstate";function l(e){return"object"===typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function s(){return h(function(e,t){let n=t.state?.masked,{pathname:r,search:a,hash:i}=n||e.location;return p("",{pathname:r,search:a,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"===typeof t?t:f(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function p(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?m(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10),unstable_mask:a}}function f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function m(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function h(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:a=document.defaultView,v5Compat:i=!1}=r,s=a.history,c="POP",u=null,f=m();function m(){return(s.state||{idx:null}).idx}function h(){c="POP";let e=m(),t=null==e?null:e-f;f=e,u&&u({action:c,location:x.location,delta:t})}function y(e){return g(e)}null==f&&(f=0,s.replaceState({...s.state,idx:f},""));let x={get action(){return c},get location(){return e(a,s)},listen(e){if(u)throw new Error("A history only accepts one active listener");return a.addEventListener(o,h),u=e,()=>{a.removeEventListener(o,h),u=null}},createHref:e=>t(a,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){c="PUSH";let r=l(e)?e:p(x.location,e,t);n&&n(r,e),f=m()+1;let o=d(r,f),h=x.createHref(r.unstable_mask||r);try{s.pushState(o,"",h)}catch(g){if(g instanceof DOMException&&"DataCloneError"===g.name)throw g;a.location.assign(h)}i&&u&&u({action:c,location:x.location,delta:1})},replace:function(e,t){c="REPLACE";let r=l(e)?e:p(x.location,e,t);n&&n(r,e),f=m();let a=d(r,f),o=x.createHref(r.unstable_mask||r);s.replaceState(a,"",o),i&&u&&u({action:c,location:x.location,delta:0})},go:e=>s.go(e)};return x}function g(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),c(n,"No window.location.(origin|href) available to create URL");let r="string"===typeof e?e:f(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}new WeakMap;function y(e,t){return x(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function x(e,t,n,r){let a=O(("string"===typeof t?m(t):t).pathname||"/",n);if(null==a)return null;let i=w(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(i);let o=null;for(let l=0;null==o&&l<i.length;++l){let e=N(a);o=P(i[l],e,r)}return o}function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=function(e,i){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,l=arguments.length>3?arguments[3]:void 0,s={relativePath:void 0===l?e.path||"":l,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};if(s.relativePath.startsWith("/")){if(!s.relativePath.startsWith(r)&&o)return;c(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length)}let u=F([r,s.relativePath]),d=n.concat(s);e.children&&e.children.length>0&&(c(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),w(e.children,t,d,u,o)),(null!=e.path||e.index)&&t.push({path:u,score:T(u,e.index),routesMeta:d})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of b(e.path))i(e,t,!0,n);else i(e,t)}),t}function b(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return a?[i,""]:[i];let o=b(r.join("/")),l=[];return l.push(...o.map(e=>""===e?i:[i,e].join("/"))),a&&l.push(...o),l.map(t=>e.startsWith("/")&&""===t?"/":t)}var v=/^:[\w-]+$/,k=3,z=2,j=1,S=10,C=-2,E=e=>"*"===e;function T(e,t){let n=e.split("/"),r=n.length;return n.some(E)&&(r+=C),t&&(r+=z),n.filter(e=>!E(e)).reduce((e,t)=>e+(v.test(t)?k:""===t?j:S),r)}function P(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,a={},i="/",o=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===i?t:t.slice(i.length)||"/",u=$({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=$({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(a,u.params),o.push({params:a,pathname:F([i,u.pathname]),pathnameBase:W(F([i,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(i=F([i,u.pathnameBase]))}return o}function $(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:i,pathnameBase:o,pattern:e}}function _(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];u("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,a,i)=>{if(r.push({paramName:t,isOptional:null!=n}),n){let t=i.charAt(a+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function N(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return u(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function O(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}var R=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function L(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function M(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function A(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function D(e){let t=A(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function I(e,t,n){let r,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=m(e):(r={...e},c(!r.pathname||!r.pathname.includes("?"),M("?","pathname","search",r)),c(!r.pathname||!r.pathname.includes("#"),M("#","pathname","hash",r)),c(!r.search||!r.search.includes("#"),M("#","search","hash",r)));let i,o=""===e||""===r.pathname,l=o?"/":r.pathname;if(null==l)i=n;else{let e=t.length-1;if(!a&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}i=e>=0?t[e]:"/"}let s=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:r,search:a="",hash:i=""}="string"===typeof e?m(e):e;return r?(r=r.replace(/\/\/+/g,"/"),t=r.startsWith("/")?L(r.substring(1),"/"):L(r,n)):t=n,{pathname:t,search:U(a),hash:H(i)}}(r,i),u=l&&"/"!==l&&l.endsWith("/"),d=(o||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!u&&!d||(s.pathname+="/"),s}var F=e=>e.join("/").replace(/\/\/+/g,"/"),W=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),U=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",H=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var B=class{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function K(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}function G(e){return e.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var V="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function Y(e,t){let n=e;if("string"!==typeof n||!R.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,a=!1;if(V)try{let e=new URL(window.location.href),r=n.startsWith("//")?new URL(e.protocol+n):new URL(n),i=O(r.pathname,t);r.origin===e.origin&&null!=i?n=i+r.search+r.hash:a=!0}catch(i){u(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:a,to:n}}Symbol("Uninstrumented");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var q=["POST","PUT","PATCH","DELETE"],Q=(new Set(q),["GET",...q]);new Set(Q),Symbol("ResetLoaderData");var J=r.createContext(null);J.displayName="DataRouter";var X=r.createContext(null);X.displayName="DataRouterState";var Z=r.createContext(!1);function ee(){return r.useContext(Z)}var te=r.createContext({isTransitioning:!1});te.displayName="ViewTransition";var ne=r.createContext(new Map);ne.displayName="Fetchers";var re=r.createContext(null);re.displayName="Await";var ae=r.createContext(null);ae.displayName="Navigation";var ie=r.createContext(null);ie.displayName="Location";var oe=r.createContext({outlet:null,matches:[],isDataRoute:!1});oe.displayName="Route";var le=r.createContext(null);le.displayName="RouteError";var se="REACT_ROUTER_ERROR";function ce(){return null!=r.useContext(ie)}function ue(){return c(ce(),"useLocation() may be used only in the context of a <Router> component."),r.useContext(ie).location}var de="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function pe(e){r.useContext(ae).static||r.useLayoutEffect(e)}function fe(){let{isDataRoute:e}=r.useContext(oe);return e?function(){let{router:e}=Se("useNavigate"),t=Ee("useNavigate"),n=r.useRef(!1);pe(()=>{n.current=!0});let a=r.useCallback(async function(r){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(n.current,de),n.current&&("number"===typeof r?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...a}))},[e,t]);return a}():function(){c(ce(),"useNavigate() may be used only in the context of a <Router> component.");let e=r.useContext(J),{basename:t,navigator:n}=r.useContext(ae),{matches:a}=r.useContext(oe),{pathname:i}=ue(),o=JSON.stringify(D(a)),l=r.useRef(!1);pe(()=>{l.current=!0});let s=r.useCallback(function(r){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(u(l.current,de),!l.current)return;if("number"===typeof r)return void n.go(r);let s=I(r,JSON.parse(o),i,"path"===a.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:F([t,s.pathname])),(a.replace?n.replace:n.push)(s,a.state,a)},[t,n,o,i,e]);return s}()}r.createContext(null);function me(){let{matches:e}=r.useContext(oe),t=e[e.length-1];return t?t.params:{}}function he(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:n}=r.useContext(oe),{pathname:a}=ue(),i=JSON.stringify(D(n));return r.useMemo(()=>I(e,JSON.parse(i),a,"path"===t),[e,i,a,t])}function ge(e,t,n){c(ce(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=r.useContext(ae),{matches:i}=r.useContext(oe),o=i[i.length-1],l=o?o.params:{},s=o?o.pathname:"/",d=o?o.pathnameBase:"/",p=o&&o.route;{let e=p&&p.path||"";$e(s,!p||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let f,h=ue();if(t){let e="string"===typeof t?m(t):t;c("/"===d||e.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`),f=e}else f=h;let g=f.pathname||"/",x=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=y(e,{pathname:x});u(p||null!=w,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),u(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=ze(w&&w.map(e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:F([d,a.encodeLocation?a.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:F([d,a.encodeLocation?a.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),i,n);return t&&b?r.createElement(ie.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...f},navigationType:"POP"}},b):b}function ye(){let e=Te(),t=K(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a},o={padding:"2px 4px",backgroundColor:a},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=r.createElement(r.Fragment,null,r.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),r.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",r.createElement("code",{style:o},"ErrorBoundary")," or"," ",r.createElement("code",{style:o},"errorElement")," prop on your route.")),r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:i},n):null,l)}var xe=r.createElement(ye,null),we=class extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&"object"===typeof e&&e&&"digest"in e&&"string"===typeof e.digest){const t=function(e){if(e.startsWith(`${se}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText)return new B(t.status,t.statusText,t.data)}catch{}}(e.digest);t&&(e=t)}let t=void 0!==e?r.createElement(oe.Provider,{value:this.props.routeContext},r.createElement(le.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?r.createElement(ve,{error:e},t):t}};we.contextType=Z;var be=new WeakMap;function ve(e){let{children:t,error:n}=e,{basename:a}=r.useContext(ae);if("object"===typeof n&&n&&"digest"in n&&"string"===typeof n.digest){let e=function(e){if(e.startsWith(`${se}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText&&"string"===typeof t.location&&"boolean"===typeof t.reloadDocument&&"boolean"===typeof t.replace)return t}catch{}}(n.digest);if(e){let t=be.get(n);if(t)throw t;let i=Y(e.location,a);if(V&&!be.get(n)){if(!i.isExternal&&!e.reloadDocument){const t=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw be.set(n,t),t}window.location.href=i.absoluteURL||i.to}return r.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i.absoluteURL||i.to}`})}}return t}function ke(e){let{routeContext:t,match:n,children:a}=e,i=r.useContext(J);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(oe.Provider,{value:t},a)}function ze(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,a=n?.state;if(null==e){if(!a)return null;if(a.errors)e=a.matches;else{if(0!==t.length||a.initialized||!(a.matches.length>0))return null;e=a.matches}}let i=e,o=a?.errors;if(null!=o){let e=i.findIndex(e=>e.route.id&&void 0!==o?.[e.route.id]);c(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let l=!1,s=-1;if(n&&a){l=a.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:r}=a,o=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!r||void 0===r[t.route.id]);if(t.route.lazy||o){n.isStatic&&(l=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let u=n?.onError,d=a&&u?(e,t)=>{u(e,{location:a.location,params:a.matches?.[0]?.params??{},unstable_pattern:G(a.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,p=!1,f=null,m=null;a&&(u=o&&n.route.id?o[n.route.id]:void 0,f=n.route.errorElement||xe,l&&(s<0&&0===c?($e("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,m=null):s===c&&(p=!0,m=n.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,c+1)),g=()=>{let t;return t=u?f:p?m:n.route.Component?r.createElement(n.route.Component,null):n.route.element?n.route.element:e,r.createElement(ke,{match:n,routeContext:{outlet:e,matches:h,isDataRoute:null!=a},children:t})};return a&&(n.route.ErrorBoundary||n.route.errorElement||0===c)?r.createElement(we,{location:a.location,revalidation:a.revalidation,component:f,error:u,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:d}):g()},null)}function je(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Se(e){let t=r.useContext(J);return c(t,je(e)),t}function Ce(e){let t=r.useContext(X);return c(t,je(e)),t}function Ee(e){let t=function(e){let t=r.useContext(oe);return c(t,je(e)),t}(e),n=t.matches[t.matches.length-1];return c(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Te(){let e=r.useContext(le),t=Ce("useRouteError"),n=Ee("useRouteError");return void 0!==e?e:t.errors?.[n]}var Pe={};function $e(e,t,n){t||Pe[e]||(Pe[e]=!0,u(!1,n))}var _e={};function Ne(e,t){e||_e[t]||(_e[t]=!0,console.warn(t))}a.useOptimistic;r.memo(Oe);function Oe(e){let{routes:t,future:n,state:r,isStatic:a,onError:i}=e;return ge(t,void 0,{state:r,isStatic:a,onError:i,future:n})}function Re(e){c(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Le(e){let{basename:t="/",children:n=null,location:a,navigationType:i="POP",navigator:o,static:l=!1,unstable_useTransitions:s}=e;c(!ce(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=t.replace(/^\/*/,"/"),p=r.useMemo(()=>({basename:d,navigator:o,static:l,unstable_useTransitions:s,future:{}}),[d,o,l,s]);"string"===typeof a&&(a=m(a));let{pathname:f="/",search:h="",hash:g="",state:y=null,key:x="default",unstable_mask:w}=a,b=r.useMemo(()=>{let e=O(f,d);return null==e?null:{location:{pathname:e,search:h,hash:g,state:y,key:x,unstable_mask:w},navigationType:i}},[d,f,h,g,y,x,i,w]);return u(null!=b,`<Router basename="${d}"> is not able to match the URL "${f}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),null==b?null:r.createElement(ae.Provider,{value:p},r.createElement(ie.Provider,{children:n,value:b}))}function Me(e){let{children:t,location:n}=e;return ge(Ae(t),n)}r.Component;function Ae(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return r.Children.forEach(e,(e,a)=>{if(!r.isValidElement(e))return;let i=[...t,a];if(e.type===r.Fragment)return void n.push.apply(n,Ae(e.props.children,i));c(e.type===Re,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),c(!e.props.index||!e.props.children,"An index route cannot have child routes.");let o={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=Ae(e.props.children,i)),n.push(o)}),n}var De="get",Ie="application/x-www-form-urlencoded";function Fe(e){return"undefined"!==typeof HTMLElement&&e instanceof HTMLElement}var We=null;var Ue=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function He(e){return null==e||Ue.has(e)?e:(u(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ie}"`),null)}function Be(e,t){let n,r,a,i,o;if(Fe(l=e)&&"form"===l.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?O(o,t):null,n=e.getAttribute("method")||De,a=He(e.getAttribute("enctype"))||Ie,i=new FormData(e)}else if(function(e){return Fe(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Fe(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||o.getAttribute("action");if(r=l?O(l,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||De,a=He(e.getAttribute("formenctype"))||He(o.getAttribute("enctype"))||Ie,i=new FormData(o,e),!function(){if(null===We)try{new FormData(document.createElement("form"),0),We=!1}catch(e){We=!0}return We}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,r)}}else{if(Fe(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=De,r=null,a=Ie,o=e}var l;return i&&"text/plain"===a&&(o=i,i=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function Ke(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function Ge(e,t,n,r){let a="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return n?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${r}`:a.pathname=`${a.pathname}.${r}`:"/"===a.pathname?a.pathname=`_root.${r}`:t&&"/"===O(a.pathname,t)?a.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function Ve(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ye(e){return null!=e&&"string"===typeof e.page}function qe(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Qe(e,t,n,r,a,i){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===i?t.filter((e,t)=>o(e,t)||l(e,t)):"data"===i?t.filter((t,i)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(o(t,i)||l(t,i))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function Je(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1),[...new Set(r)];var r}function Xe(e,t){let n=new Set,r=new Set(t);return e.reduce((e,a)=>{if(t&&!Ye(a)&&"script"===a.as&&a.href&&r.has(a.href))return e;let i=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(a));return n.has(i)||(n.add(i),e.push({key:i,link:a})),e},[])}function Ze(e,t){return"lazy"===e.mode&&!0===t}function et(){let e=r.useContext(J);return Ke(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function tt(){let e=r.useContext(X);return Ke(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var nt=r.createContext(void 0);function rt(){let e=r.useContext(nt);return Ke(e,"You must render this element inside a <HydratedRouter> element"),e}function at(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function it(e,t,n){if(n&&!ct)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}nt.displayName="FrameworkContext";function ot(e){let{page:t,...n}=e,{router:a}=et(),i=r.useMemo(()=>y(a.routes,t,a.basename),[a.routes,t,a.basename]);return i?r.createElement(st,{page:t,matches:i,...n}):null}function lt(e){let{manifest:t,routeModules:n}=rt(),[a,i]=r.useState([]);return r.useEffect(()=>{let r=!1;return async function(e,t,n){let r=await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Ve(r,n);return e.links?e.links():[]}return[]}));return Xe(r.flat(1).filter(qe).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),a}function st(e){let{page:t,matches:n,...a}=e,i=ue(),{future:o,manifest:l,routeModules:s}=rt(),{basename:c}=et(),{loaderData:u,matches:d}=tt(),p=r.useMemo(()=>Qe(t,n,d,l,i,"data"),[t,n,d,l,i]),f=r.useMemo(()=>Qe(t,n,d,l,i,"assets"),[t,n,d,l,i]),m=r.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let e=new Set,r=!1;if(n.forEach(t=>{let n=l.routes[t.route.id];n&&n.hasLoader&&(!p.some(e=>e.route.id===t.route.id)&&t.route.id in u&&s[t.route.id]?.shouldRevalidate||n.hasClientLoader?r=!0:e.add(t.route.id))}),0===e.size)return[];let a=Ge(t,c,o.unstable_trailingSlashAwareDataRequests,"data");return r&&e.size>0&&a.searchParams.set("_routes",n.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[a.pathname+a.search]},[c,o.unstable_trailingSlashAwareDataRequests,u,i,l,p,n,t,s]),h=r.useMemo(()=>Je(f,l),[f,l]),g=lt(f);return r.createElement(r.Fragment,null,m.map(e=>r.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...a})),h.map(e=>r.createElement("link",{key:e,rel:"modulepreload",href:e,...a})),g.map(e=>{let{key:t,link:n}=e;return r.createElement("link",{key:t,nonce:a.nonce,...n,crossOrigin:n.crossOrigin??a.crossOrigin})}))}var ct=!1;function ut(e){let{manifest:t,serverHandoffString:n,isSpaMode:a,renderMeta:i,routeDiscovery:o,ssr:l}=rt(),{router:s,static:c,staticContext:u}=et(),{matches:d}=tt(),p=ee(),f=Ze(o,l);i&&(i.didRenderScripts=!0);let m=it(d,null,a);r.useEffect(()=>{ct=!0},[]);let h=r.useMemo(()=>{if(p)return null;let a=u?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",i=c?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${f?"":`import ${JSON.stringify(t.url)}`};\n${m.map((e,n)=>{let r=`route${n}`,a=t.routes[e.route.id];Ke(a,`Route ${e.route.id} not found in manifest`);let{clientActionModule:i,clientLoaderModule:o,clientMiddlewareModule:l,hydrateFallbackModule:s,module:c}=a,u=[...i?[{module:i,varName:`${r}_clientAction`}]:[],...o?[{module:o,varName:`${r}_clientLoader`}]:[],...l?[{module:l,varName:`${r}_clientMiddleware`}]:[],...s?[{module:s,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${u.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${f?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,a=new Set(t.state.matches.map(e=>e.route.id)),i=t.state.location.pathname.split("/").filter(Boolean),o=["/"];for(i.pop();i.length>0;)o.push(`/${i.join("/")}`),i.pop();o.forEach(e=>{let n=y(t.routes,e,t.basename);n&&n.forEach(e=>a.add(e.route.id))});let l=[...a].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:l,sri:!!n||void 0}}(t,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${m.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return r.createElement(r.Fragment,null,r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:a},type:void 0}),r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:i},type:"module",async:!0}))},[]),g=ct||p?[]:(x=t.entry.imports.concat(Je(m,t,{includeHydrateFallback:!0})),[...new Set(x)]);var x;let w="object"===typeof t.sri?t.sri:{};return Ne(!p,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),ct||p?null:r.createElement(r.Fragment,null,"object"===typeof t.sri?r.createElement("script",{...e,"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:w})}}):null,f?null:r.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:w[t.url],suppressHydrationWarning:!0}),r.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:w[t.entry.module],suppressHydrationWarning:!0}),g.map(t=>r.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:w[t],suppressHydrationWarning:!0})),h)}function dt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}r.Component;function pt(e){let{error:t,isOutsideRemixApp:n}=e;console.error(t);let a,i=r.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(K(t))return r.createElement(ft,{title:"Unhandled Thrown Response!"},r.createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),i);if(t instanceof Error)a=t;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);a=new Error(e)}return r.createElement(ft,{title:"Application Error!",isOutsideRemixApp:n},r.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),r.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},a.stack),i)}function ft(e){let{title:t,renderScripts:n,isOutsideRemixApp:a,children:i}=e,{routeModules:o}=rt();return o.root?.Layout&&!a?i:r.createElement("html",{lang:"en"},r.createElement("head",null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),r.createElement("title",null,t)),r.createElement("body",null,r.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},i,n?r.createElement(ut,null):null)))}var mt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{mt&&(window.__reactRouterVersion="7.13.2")}catch(Cd){}function ht(e){let{basename:t,children:n,unstable_useTransitions:a,window:i}=e,o=r.useRef();null==o.current&&(o.current=s({window:i,v5Compat:!0}));let l=o.current,[c,u]=r.useState({action:l.action,location:l.location}),d=r.useCallback(e=>{!1===a?u(e):r.startTransition(()=>u(e))},[a]);return r.useLayoutEffect(()=>l.listen(d),[l,d]),r.createElement(Le,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,unstable_useTransitions:a})}var gt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yt=r.forwardRef(function(e,t){let{onClick:n,discover:a="render",prefetch:i="none",relative:o,reloadDocument:l,replace:s,unstable_mask:u,state:d,target:p,to:m,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:y,...x}=e,{basename:w,navigator:b,unstable_useTransitions:v}=r.useContext(ae),k="string"===typeof m&&gt.test(m),z=Y(m,w);m=z.to;let j=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(ce(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=r.useContext(ae),{hash:i,pathname:o,search:l}=he(e,{relative:t}),s=o;return"/"!==n&&(s="/"===o?n:F([n,o])),a.createHref({pathname:s,search:l,hash:i})}(m,{relative:o}),S=ue(),C=null;if(u){let e=I(u,[],S.unstable_mask?S.unstable_mask.pathname:"/",!0);"/"!==w&&(e.pathname="/"===e.pathname?w:F([w,e.pathname])),C=b.createHref(e)}let[E,T,P]=function(e,t){let n=r.useContext(nt),[a,i]=r.useState(!1),[o,l]=r.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:p}=t,f=r.useRef(null);r.useEffect(()=>{if("render"===e&&l(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{l(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),r.useEffect(()=>{if(a){let e=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(e)}}},[a]);let m=()=>{i(!0)},h=()=>{i(!1),l(!1)};return n?"intent"!==e?[o,f,{}]:[o,f,{onFocus:at(s,m),onBlur:at(c,h),onMouseEnter:at(u,m),onMouseLeave:at(d,h),onTouchStart:at(p,m)}]:[!1,f,{}]}(i,x),$=function(e){let{target:t,replace:n,unstable_mask:a,state:i,preventScrollReset:o,relative:l,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:u}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=fe(),p=ue(),m=he(e,{relative:l});return r.useCallback(h=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(h,t)){h.preventDefault();let t=void 0!==n?n:f(p)===f(m),g=()=>d(e,{replace:t,unstable_mask:a,state:i,preventScrollReset:o,relative:l,viewTransition:s,unstable_defaultShouldRevalidate:c});u?r.startTransition(()=>g()):g()}},[p,d,m,n,a,i,t,e,o,l,s,c,u])}(m,{replace:s,unstable_mask:u,state:d,target:p,preventScrollReset:h,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:y,unstable_useTransitions:v});let _=!(z.isExternal||l),N=r.createElement("a",{...x,...P,href:(_?C:void 0)||z.absoluteURL||j,onClick:_?function(e){n&&n(e),e.defaultPrevented||$(e)}:n,ref:dt(t,T),target:p,"data-discover":k||"render"!==a?void 0:"true"});return E&&!k?r.createElement(r.Fragment,null,N,r.createElement(ot,{page:j})):N});yt.displayName="Link",r.forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:a=!1,className:i="",end:o=!1,style:l,to:s,viewTransition:u,children:d,...p}=e,f=he(s,{relative:p.relative}),m=ue(),h=r.useContext(X),{navigator:g,basename:y}=r.useContext(ae),x=null!=h&&function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.useContext(te);c(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=bt("useViewTransitionState"),i=he(e,{relative:t});if(!n.isTransitioning)return!1;let o=O(n.currentLocation.pathname,a)||n.currentLocation.pathname,l=O(n.nextLocation.pathname,a)||n.nextLocation.pathname;return null!=$(i.pathname,l)||null!=$(i.pathname,o)}(f)&&!0===u,w=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,b=m.pathname,v=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;a||(b=b.toLowerCase(),v=v?v.toLowerCase():null,w=w.toLowerCase()),v&&y&&(v=O(v,y)||v);const k="/"!==w&&w.endsWith("/")?w.length-1:w.length;let z,j=b===w||!o&&b.startsWith(w)&&"/"===b.charAt(k),S=null!=v&&(v===w||!o&&v.startsWith(w)&&"/"===v.charAt(w.length)),C={isActive:j,isPending:S,isTransitioning:x},E=j?n:void 0;z="function"===typeof i?i(C):[i,j?"active":null,S?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let T="function"===typeof l?l(C):l;return r.createElement(yt,{...p,"aria-current":E,className:z,ref:t,style:T,to:s,viewTransition:u},"function"===typeof d?d(C):d)}).displayName="NavLink";var xt=r.forwardRef((e,t)=>{let{discover:n="render",fetcherKey:a,navigate:i,reloadDocument:o,replace:l,state:s,method:u=De,action:d,onSubmit:p,relative:m,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:y,...x}=e,{unstable_useTransitions:w}=r.useContext(ae),b=zt(),v=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:n}=r.useContext(ae),a=r.useContext(oe);c(a,"useFormAction must be used inside a RouteContext");let[i]=a.matches.slice(-1),o={...he(e||".",{relative:t})},l=ue();if(null==e){o.search=l.search;let e=new URLSearchParams(o.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();o.search=n?`?${n}`:""}}e&&"."!==e||!i.route.index||(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(o.pathname="/"===o.pathname?n:F([n,o.pathname]));return f(o)}(d,{relative:m}),k="get"===u.toLowerCase()?"get":"post",z="string"===typeof d&&gt.test(d);return r.createElement("form",{ref:t,method:k,action:v,onSubmit:o?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||u,o=()=>b(t||e.currentTarget,{fetcherKey:a,method:n,navigate:i,replace:l,state:s,relative:m,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:y});w&&!1!==i?r.startTransition(()=>o()):o()},...x,"data-discover":z||"render"!==n?void 0:"true"})});function wt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bt(e){let t=r.useContext(J);return c(t,wt(e)),t}xt.displayName="Form";var vt=0,kt=()=>`__${String(++vt)}__`;function zt(){let{router:e}=bt("useSubmit"),{basename:t}=r.useContext(ae),n=Ee("useRouteId"),a=e.fetch,i=e.navigate;return r.useCallback(async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:o,method:l,encType:s,formData:c,body:u}=Be(e,t);if(!1===r.navigate){let e=r.fetcherKey||kt();await a(e,n,r.action||o,{unstable_defaultShouldRevalidate:r.unstable_defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:c,body:u,formMethod:r.method||l,formEncType:r.encType||s,flushSync:r.flushSync})}else await i(r.action||o,{unstable_defaultShouldRevalidate:r.unstable_defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:c,body:u,formMethod:r.method||l,formEncType:r.encType||s,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[a,i,t,n])}var jt=function(){return jt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},jt.apply(this,arguments)};Object.create;function St(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Ct={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Et="-ms-",Tt="-moz-",Pt="-webkit-",$t="comm",_t="rule",Nt="decl",Ot="@keyframes",Rt=Math.abs,Lt=String.fromCharCode,Mt=Object.assign;function At(e){return e.trim()}function Dt(e,t){return(e=t.exec(e))?e[0]:e}function It(e,t,n){return e.replace(t,n)}function Ft(e,t,n){return e.indexOf(t,n)}function Wt(e,t){return 0|e.charCodeAt(t)}function Ut(e,t,n){return e.slice(t,n)}function Ht(e){return e.length}function Bt(e){return e.length}function Kt(e,t){return t.push(e),e}function Gt(e,t){return e.filter(function(e){return!Dt(e,t)})}var Vt=1,Yt=1,qt=0,Qt=0,Jt=0,Xt="";function Zt(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:Vt,column:Yt,length:o,return:"",siblings:l}}function en(e,t){return Mt(Zt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function tn(e){for(;e.root;)e=en(e.root,{children:[e]});Kt(e,e.siblings)}function nn(){return Jt=Qt>0?Wt(Xt,--Qt):0,Yt--,10===Jt&&(Yt=1,Vt--),Jt}function rn(){return Jt=Qt<qt?Wt(Xt,Qt++):0,Yt++,10===Jt&&(Yt=1,Vt++),Jt}function an(){return Wt(Xt,Qt)}function on(){return Qt}function ln(e,t){return Ut(Xt,e,t)}function sn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cn(e){return Vt=Yt=1,qt=Ht(Xt=e),Qt=0,[]}function un(e){return Xt="",e}function dn(e){return At(ln(Qt-1,mn(91===e?e+2:40===e?e+1:e)))}function pn(e){for(;(Jt=an())&&Jt<33;)rn();return sn(e)>2||sn(Jt)>3?"":" "}function fn(e,t){for(;--t&&rn()&&!(Jt<48||Jt>102||Jt>57&&Jt<65||Jt>70&&Jt<97););return ln(e,on()+(t<6&&32==an()&&32==rn()))}function mn(e){for(;rn();)switch(Jt){case e:return Qt;case 34:case 39:34!==e&&39!==e&&mn(Jt);break;case 40:41===e&&mn(e);break;case 92:rn()}return Qt}function hn(e,t){for(;rn()&&e+Jt!==57&&(e+Jt!==84||47!==an()););return"/*"+ln(t,Qt-1)+"*"+Lt(47===e?e:rn())}function gn(e){for(;!sn(an());)rn();return ln(e,Qt)}function yn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function xn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case Nt:return e.return=e.return||e.value;case $t:return"";case Ot:return e.return=e.value+"{"+yn(e.children,r)+"}";case _t:if(!Ht(e.value=e.props.join(",")))return""}return Ht(n=yn(e.children,r))?e.return=e.value+"{"+n+"}":""}function wn(e,t,n){switch(function(e,t){return 45^Wt(e,0)?(((t<<2^Wt(e,0))<<2^Wt(e,1))<<2^Wt(e,2))<<2^Wt(e,3):0}(e,t)){case 5103:return Pt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Pt+e+e;case 4855:return Pt+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Tt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Pt+e+Tt+e+Et+e+e;case 5936:switch(Wt(e,t+11)){case 114:return Pt+e+Et+It(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Pt+e+Et+It(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Pt+e+Et+It(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Pt+e+Et+e+e;case 6165:return Pt+e+Et+"flex-"+e+e;case 5187:return Pt+e+It(e,/(\w+).+(:[^]+)/,Pt+"box-$1$2"+Et+"flex-$1$2")+e;case 5443:return Pt+e+Et+"flex-item-"+It(e,/flex-|-self/g,"")+(Dt(e,/flex-|baseline/)?"":Et+"grid-row-"+It(e,/flex-|-self/g,""))+e;case 4675:return Pt+e+Et+"flex-line-pack"+It(e,/align-content|flex-|-self/g,"")+e;case 5548:return Pt+e+Et+It(e,"shrink","negative")+e;case 5292:return Pt+e+Et+It(e,"basis","preferred-size")+e;case 6060:return Pt+"box-"+It(e,"-grow","")+Pt+e+Et+It(e,"grow","positive")+e;case 4554:return Pt+It(e,/([^-])(transform)/g,"$1"+Pt+"$2")+e;case 6187:return It(It(It(e,/(zoom-|grab)/,Pt+"$1"),/(image-set)/,Pt+"$1"),e,"")+e;case 5495:case 3959:return It(e,/(image-set\([^]*)/,Pt+"$1$`$1");case 4968:return It(It(e,/(.+:)(flex-)?(.*)/,Pt+"box-pack:$3"+Et+"flex-pack:$3"),/space-between/,"justify")+Pt+e+e;case 4200:if(!Dt(e,/flex-|baseline/))return Et+"grid-column-align"+Ut(e,t)+e;break;case 2592:case 3360:return Et+It(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Dt(e.props,/grid-\w+-end/)})?~Ft(e+(n=n[t].value),"span",0)?e:Et+It(e,"-start","")+e+Et+"grid-row-span:"+(~Ft(n,"span",0)?Dt(n,/\d+/):+Dt(n,/\d+/)-+Dt(e,/\d+/))+";":Et+It(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Dt(e.props,/grid-\w+-start/)})?e:Et+It(It(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return It(e,/(.+)-inline(.+)/,Pt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ht(e)-1-t>6)switch(Wt(e,t+1)){case 109:if(45!==Wt(e,t+4))break;case 102:return It(e,/(.+:)(.+)-([^]+)/,"$1"+Pt+"$2-$3$1"+Tt+(108==Wt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ft(e,"stretch",0)?wn(It(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return It(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,i,o,l){return Et+n+":"+r+l+(a?Et+n+"-span:"+(i?o:+o-+r)+l:"")+e});case 4949:if(121===Wt(e,t+6))return It(e,":",":"+Pt)+e;break;case 6444:switch(Wt(e,45===Wt(e,14)?18:11)){case 120:return It(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Pt+(45===Wt(e,14)?"inline-":"")+"box$3$1"+Pt+"$2$3$1"+Et+"$2box$3")+e;case 100:return It(e,":",":"+Et)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return It(e,"scroll-","scroll-snap-")+e}return e}function bn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Nt:return void(e.return=wn(e.value,e.length,n));case Ot:return yn([en(e,{value:It(e.value,"@","@"+Pt)})],r);case _t:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Dt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tn(en(e,{props:[It(t,/:(read-\w+)/,":-moz-$1")]})),tn(en(e,{props:[t]})),Mt(e,{props:Gt(n,r)});break;case"::placeholder":tn(en(e,{props:[It(t,/:(plac\w+)/,":"+Pt+"input-$1")]})),tn(en(e,{props:[It(t,/:(plac\w+)/,":-moz-$1")]})),tn(en(e,{props:[It(t,/:(plac\w+)/,Et+"input-$1")]})),tn(en(e,{props:[t]})),Mt(e,{props:Gt(n,r)})}return""})}}function vn(e){return un(kn("",null,null,null,[""],e=cn(e),0,[0],e))}function kn(e,t,n,r,a,i,o,l,s){for(var c=0,u=0,d=o,p=0,f=0,m=0,h=1,g=1,y=1,x=0,w="",b=a,v=i,k=r,z=w;g;)switch(m=x,x=rn()){case 40:if(108!=m&&58==Wt(z,d-1)){-1!=Ft(z+=It(dn(x),"&","&\f"),"&\f",Rt(c?l[c-1]:0))&&(y=-1);break}case 34:case 39:case 91:z+=dn(x);break;case 9:case 10:case 13:case 32:z+=pn(m);break;case 92:z+=fn(on()-1,7);continue;case 47:switch(an()){case 42:case 47:Kt(jn(hn(rn(),on()),t,n,s),s),5!=sn(m||1)&&5!=sn(an()||1)||!Ht(z)||" "===Ut(z,-1,void 0)||(z+=" ");break;default:z+="/"}break;case 123*h:l[c++]=Ht(z)*y;case 125*h:case 59:case 0:switch(x){case 0:case 125:g=0;case 59+u:-1==y&&(z=It(z,/\f/g,"")),f>0&&(Ht(z)-d||0===h&&47===m)&&Kt(f>32?Sn(z+";",r,n,d-1,s):Sn(It(z," ","")+";",r,n,d-2,s),s);break;case 59:z+=";";default:if(Kt(k=zn(z,t,n,c,u,a,l,w,b=[],v=[],d,i),i),123===x)if(0===u)kn(z,t,k,k,b,i,d,l,v);else{switch(p){case 99:if(110===Wt(z,3))break;case 108:if(97===Wt(z,2))break;default:u=0;case 100:case 109:case 115:}u?kn(e,k,k,r&&Kt(zn(e,k,k,0,0,a,l,w,a,b=[],d,v),v),a,v,d,l,r?b:v):kn(z,k,k,k,[""],v,0,l,v)}}c=u=f=0,h=y=1,w=z="",d=o;break;case 58:d=1+Ht(z),f=m;default:if(h<1)if(123==x)--h;else if(125==x&&0==h++&&125==nn())continue;switch(z+=Lt(x),x*h){case 38:y=u>0?1:(z+="\f",-1);break;case 44:l[c++]=(Ht(z)-1)*y,y=1;break;case 64:45===an()&&(z+=dn(rn())),p=an(),u=d=Ht(w=z+=gn(on())),x++;break;case 45:45===m&&2==Ht(z)&&(h=0)}}return i}function zn(e,t,n,r,a,i,o,l,s,c,u,d){for(var p=a-1,f=0===a?i:[""],m=Bt(f),h=0,g=0,y=0;h<r;++h)for(var x=0,w=Ut(e,p+1,p=Rt(g=o[h])),b=e;x<m;++x)(b=At(g>0?f[x]+" "+w:It(w,/&\f/g,f[x])))&&(s[y++]=b);return Zt(e,t,n,0===a?_t:l,s,c,u,d)}function jn(e,t,n,r){return Zt(e,t,n,$t,Lt(Jt),Ut(e,2,-2),0,r)}function Sn(e,t,n,r,a){return Zt(e,t,n,Nt,Ut(e,0,r),Ut(e,r+1,-1),r,a)}var Cn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",En="active",Tn="data-styled-version",Pn="6.3.12",$n="/*!sc*/\n",_n="undefined"!=typeof window&&"undefined"!=typeof document,Nn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),On={};function Rn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ln=new Map,Mn=new Map,An=1,Dn=function(e){if(Ln.has(e))return Ln.get(e);for(;Mn.has(An);)An++;var t=An++;return Ln.set(e,t),Mn.set(t,e),t},In=function(e,t){An=t+1,Ln.set(e,t),Mn.set(t,e)},Fn=(new Set,Object.freeze([])),Wn=Object.freeze({});function Un(e,t,n){return void 0===n&&(n=Wn),e.theme!==n.theme&&e.theme||t||n.theme}var Hn=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Bn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kn=/(^-|-$)/g;function Gn(e){return e.replace(Bn,"-").replace(Kn,"")}var Vn=/(a)(d)/gi,Yn=function(e){return String.fromCharCode(e+(e>25?39:97))};function qn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Yn(t%52)+n;return(Yn(t%52)+n).replace(Vn,"$1-$2")}var Qn,Jn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Xn=function(e){return Jn(5381,e)};function Zn(e){return qn(Xn(e)>>>0)}function er(e){return e.displayName||e.name||"Component"}function tr(e){return"string"==typeof e&&!0}var nr="function"==typeof Symbol&&Symbol.for,rr=nr?Symbol.for("react.memo"):60115,ar=nr?Symbol.for("react.forward_ref"):60112,ir={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},or={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sr=((Qn={})[ar]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qn[rr]=lr,Qn);function cr(e){return("type"in(t=e)&&t.type.$$typeof)===rr?lr:"$$typeof"in e?sr[e.$$typeof]:ir;var t}var ur=Object.defineProperty,dr=Object.getOwnPropertyNames,pr=Object.getOwnPropertySymbols,fr=Object.getOwnPropertyDescriptor,mr=Object.getPrototypeOf,hr=Object.prototype;function gr(e,t,n){if("string"!=typeof t){if(hr){var r=mr(t);r&&r!==hr&&gr(e,r,n)}var a=dr(t);pr&&(a=a.concat(pr(t)));for(var i=cr(e),o=cr(t),l=0;l<a.length;++l){var s=a[l];if(!(s in or||n&&n[s]||o&&s in o||i&&s in i)){var c=fr(t,s);try{ur(e,s,c)}catch(e){}}}}return e}function yr(e){return"function"==typeof e}function xr(e){return"object"==typeof e&&"styledComponentId"in e}function wr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function br(e,t){return e.join(t||"")}function vr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function kr(e,t,n){if(void 0===n&&(n=!1),!n&&!vr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=kr(e[r],t[r]);else if(vr(t))for(var r in t)e[r]=kr(e[r],t[r]);return e}function zr(e,t){Object.defineProperty(e,"toString",{value:t})}var jr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw Rn(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=0,s=(i=0,t.length);i<s;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++,l++);l>0&&this._cGroup>e&&(this._cIndex+=l)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+=this.tag.getRule(i)+$n;return t},e}(),Sr="style[".concat(Cn,"][").concat(Tn,'="').concat(Pn,'"]'),Cr=new RegExp("^".concat(Cn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Er=function(e){return"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},Tr=function(e){if(!e)return document;if(Er(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Er(t))return t}return document},Pr=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},$r=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split($n),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var s=l.match(Cr);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(In(u,c),Pr(e,u,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(l)}}},_r=function(e){for(var t=Tr(e.options.target).querySelectorAll(Sr),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(Cn)!==En&&($r(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Nr(){return n.nc}var Or=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Cn,"]")));return t[t.length-1]}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(Cn,En),r.setAttribute(Tn,Pn);var o=Nr();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},Rr=function(){function e(e){this.element=Or(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets,r=0,a=n.length;r<a;r++){var i=n[r];if(i.ownerNode===e)return i}throw Rn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Lr=function(){function e(e){this.element=Or(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Mr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Ar=_n,Dr={isServer:!_n,useCSSOMInjection:!Nn},Ir=function(){function e(e,t,n){void 0===e&&(e=Wn),void 0===t&&(t={});var r=this;this.options=jt(jt({},Dr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&_n&&Ar&&(Ar=!1,_r(this)),zr(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return Mn.get(e)}(n);if(void 0===a)return"continue";var i=e.names.get(a);if(void 0===i||!i.size)return"continue";var o=t.getGroup(n);if(0===o.length)return"continue";var l=Cn+".g"+n+'[id="'+a+'"]',s="";i.forEach(function(e){e.length>0&&(s+=e+",")}),r+=o+l+'{content:"'+s+'"}'+$n},i=0;i<n;i++)a(i);return r}(r)})}return e.registerId=function(e){return Dn(e)},e.prototype.rehydrate=function(){!this.server&&_n&&_r(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var r=new e(jt(jt({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&_n&&t.target!==this.options.target&&Tr(this.options.target)!==Tr(t.target)&&_r(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Mr(n):t?new Rr(n):new Lr(n)}(this.options),new jr(e)));var e},e.prototype.hasNameForId=function(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r},e.prototype.registerName=function(e,t){Dn(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Dn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Dn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}();function Fr(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in Ct||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Wr=function(e){return e>="A"&&e<="Z"};function Ur(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Wr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Hr=Symbol.for("sc-keyframes");var Br=function(e){return null==e||!1===e||""===e},Kr=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Br(r)&&(Array.isArray(r)&&r.isCss||yr(r)?t.push("".concat(Ur(n),":"),r,";"):vr(r)?t.push.apply(t,St(St(["".concat(n," {")],Kr(r),!1),["}"],!1)):t.push("".concat(Ur(n),": ").concat(Fr(n,r),";")))}return t};function Gr(e,t,n,r,a){if(void 0===a&&(a=[]),"string"==typeof e)return e&&a.push(e),a;if(Br(e))return a;if(xr(e))return a.push(".".concat(e.styledComponentId)),a;var i;if(yr(e))return!yr(i=e)||i.prototype&&i.prototype.isReactComponent||!t?(a.push(e),a):Gr(e(t),t,n,r,a);if(function(e){return"object"==typeof e&&null!==e&&Hr in e}(e))return n?(e.inject(n,r),a.push(e.getName(r))):a.push(e),a;if(vr(e)){for(var o=Kr(e),l=0;l<o.length;l++)a.push(o[l]);return a}if(!Array.isArray(e))return a.push(e.toString()),a;for(l=0;l<e.length;l++)Gr(e[l],t,n,r,a);return a}function Vr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yr(n)&&!xr(n))return!1}return!0}var Yr=Xn(Pn),qr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Vr(e),this.componentId=t,this.baseHash=Jn(Yr,t),this.baseStyle=n,Ir.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=wr(r,this.staticRulesId);else{var a=br(Gr(this.rules,e,t,n)),i=qn(Jn(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=wr(r,i),this.staticRulesId=i}else{for(var l=Jn(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=br(Gr(u,e,t,n));l=Jn(Jn(l,String(c)),d),s+=d}}if(s){var p=qn(l>>>0);if(!t.hasNameForId(this.componentId,p)){var f=n(s,".".concat(p),void 0,this.componentId);t.insertRules(this.componentId,p,f)}r=wr(r,p)}}return{className:r,css:"undefined"==typeof window?t.getTag().getGroup(Dn(this.componentId)):""}},e}(),Qr=/&/g,Jr=47,Xr=42;function Zr(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,r=0,a=!1,i=0;i<t;i++){var o=e.charCodeAt(i);if(0!==r||a||o!==Jr||e.charCodeAt(i+1)!==Xr)if(a)o===Xr&&e.charCodeAt(i+1)===Jr&&(a=!1,i++);else if(34!==o&&39!==o||0!==i&&92===e.charCodeAt(i-1)){if(0===r)if(123===o)n++;else if(125===o&&--n<0)return!0}else 0===r?r=o:r===o&&(r=0);else a=!0,i++}return 0!==n||0!==r}function ea(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=ea(e.children,t)),e})}function ta(e){var t,n,r,a=void 0===e?Wn:e,i=a.options,o=void 0===i?Wn:i,l=a.plugins,s=void 0===l?Fn:l,c=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push(function(e){e.type===_t&&e.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),e.props[0]=e.props[0].replace(Qr,n).replace(r,c))}),o.prefix&&u.push(bn),u.push(xn);var d,p=[],f=function(e){var t=Bt(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)}))),m=function(e,a,i,l){void 0===a&&(a=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=a,r=void 0;var s=function(e){if(!Zr(e))return e;for(var t=e.length,n="",r=0,a=0,i=0,o=!1,l=0;l<t;l++){var s=e.charCodeAt(l);if(0!==i||o||s!==Jr||e.charCodeAt(l+1)!==Xr)if(o)s===Xr&&e.charCodeAt(l+1)===Jr&&(o=!1,l++);else if(34!==s&&39!==s||0!==l&&92===e.charCodeAt(l-1)){if(0===i)if(123===s)a++;else if(125===s){if(--a<0){for(var c=l+1;c<t;){var u=e.charCodeAt(c);if(59===u||10===u)break;c++}c<t&&59===e.charCodeAt(c)&&c++,a=0,l=c-1,r=c;continue}0===a&&(n+=e.substring(r,l+1),r=l+1)}else 59===s&&0===a&&(n+=e.substring(r,l+1),r=l+1)}else 0===i?i=s:i===s&&(i=0);else o=!0,l++}if(r<t){var d=e.substring(r);Zr(d)||(n+=d)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],r=0,a=0,i=0,o=0;a<t;){var l=e.charCodeAt(a);if(34!==l&&39!==l||0!==a&&92===e.charCodeAt(a-1))if(0===i)if(l===Jr&&a+1<t&&e.charCodeAt(a+1)===Xr){for(a+=2;a+1<t&&(e.charCodeAt(a)!==Xr||e.charCodeAt(a+1)!==Jr);)a++;a+=2}else if(40===l&&a>=3&&108==(32|e.charCodeAt(a-1))&&114==(32|e.charCodeAt(a-2))&&117==(32|e.charCodeAt(a-3)))o=1,a++;else if(o>0)41===l?o--:40===l&&o++,a++;else if(l===Xr&&a+1<t&&e.charCodeAt(a+1)===Jr)a>r&&n.push(e.substring(r,a)),r=a+=2;else if(l===Jr&&a+1<t&&e.charCodeAt(a+1)===Jr){for(a>r&&n.push(e.substring(r,a));a<t&&10!==e.charCodeAt(a);)a++;r=a}else a++;else a++;else 0===i?i=l:i===l&&(i=0),a++}return 0===r?e:(r<t&&n.push(e.substring(r)),n.join(""))}(e)),c=vn(i||a?"".concat(i," ").concat(a," { ").concat(s," }"):s);return o.namespace&&(c=ea(c,o.namespace)),p=[],yn(c,f),p};return m.hash=s.length?s.reduce(function(e,t){return t.name||Rn(15),Jn(e,t.name)},5381).toString():"",m}var na=new Ir,ra=ta(),aa=r.createContext({shouldForwardProp:void 0,styleSheet:na,stylis:ra}),ia=(aa.Consumer,r.createContext(void 0));function oa(){return r.useContext(aa)}function la(e){if(!r.useMemo)return e.children;var t=oa().styleSheet,n=r.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),a=r.useMemo(function(){return ta({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),i=r.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:a}},[e.shouldForwardProp,n,a]);return r.createElement(aa.Provider,{value:i},r.createElement(ia.Provider,{value:a},e.children))}var sa=r.createContext(void 0);sa.Consumer;var ca={};new Set;function ua(e,t,n){var a=xr(e),i=e,o=!tr(e),l=t.attrs,s=void 0===l?Fn:l,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Gn(e);ca[n]=(ca[n]||0)+1;var r="".concat(n,"-").concat(Zn(Pn+n+ca[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,d=t.displayName,p=void 0===d?function(e){return tr(e)?"styled.".concat(e):"Styled(".concat(er(e),")")}(e):d,f=t.displayName&&t.componentId?"".concat(Gn(t.displayName),"-").concat(t.componentId):t.componentId||u,m=a&&i.attrs?i.attrs.concat(s).filter(Boolean):s,h=t.shouldForwardProp;if(a&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;h=function(e,t){return g(e,t)&&y(e,t)}}else h=g}var x=new qr(n,f,a?i.componentStyle:void 0);function w(e,t){return function(e,t,n){var a=e.attrs,i=e.componentStyle,o=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=r.useContext(sa),d=oa(),p=e.shouldForwardProp||d.shouldForwardProp,f=Un(t,u,o)||Wn,m=function(e,t,n){for(var r,a=jt(jt({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var o=yr(r=e[i])?r(a):r;for(var l in o)"className"===l?a.className=wr(a.className,o[l]):"style"===l?a.style=jt(jt({},a.style),o[l]):l in t&&void 0===t[l]||(a[l]=o[l])}return"className"in t&&"string"==typeof t.className&&(a.className=wr(a.className,t.className)),a}(a,t,f),h=m.as||c,g={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y&&m.theme===f||("forwardedAs"===y?g.as=m.forwardedAs:p&&!p(y,h)||(g[y]=m[y]));var x=function(e,t){var n=oa();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,m),w=x.className,b=wr(l,s);return w&&(b+=" "+w),m.className&&(b+=" "+m.className),g[tr(h)&&!Hn.has(h)?"class":"className"]=b,n&&(g.ref=n),(0,r.createElement)(h,g)}(b,e,t)}w.displayName=p;var b=r.forwardRef(w);return b.attrs=m,b.componentStyle=x,b.displayName=p,b.shouldForwardProp=h,b.foldedComponentIds=a?wr(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=f,b.target=a?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)kr(e,a[r],!0);return e}({},i.defaultProps,e):e}}),zr(b,function(){return".".concat(b.styledComponentId)}),o&&gr(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function da(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var pa=function(e){return Object.assign(e,{isCss:!0})};function fa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(yr(e)||vr(e))return pa(Gr(da(Fn,St([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Gr(r):pa(Gr(da(r,t)))}function ma(e,t,n){if(void 0===n&&(n=Wn),!t)throw Rn(1,t);var r=function(r){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,n,fa.apply(void 0,St([r],a,!1)))};return r.attrs=function(r){return ma(e,t,jt(jt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return ma(e,t,jt(jt({},n),r))},r}var ha=function(e){return ma(ua,e)},ga=ha;Hn.forEach(function(e){ga[e]=ha(e)});var ya,xa=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Vr(e),Ir.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(br(Gr(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Ir.registerId(this.componentId+e);var a=this.componentId+e;this.isStatic?n.hasNameForId(a,a)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))},e}();!function(){function e(e,t){var n=this;this[ya]=!0,this.inject=function(e,t){void 0===t&&(t=ra);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,zr(this,function(){throw Rn(12,String(n.name))})}e.prototype.getName=function(e){return void 0===e&&(e=ra),this.name+e.hash}}();ya=Hr;(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Nr(),r=br([n&&'nonce="'.concat(n,'"'),"".concat(Cn,'="true"'),"".concat(Tn,'="').concat(Pn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Rn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Rn(2);var n=e.instance.toString();if(!n)return[];var a=((t={})[Cn]="",t[Tn]=Pn,t.dangerouslySetInnerHTML={__html:n},t),i=Nr();return i&&(a.nonce=i),[r.createElement("style",jt({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Ir({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Rn(2);return r.createElement(la,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Rn(3)}})(),"__sc-".concat(Cn,"__");const wa={smallPhone:360,phone:430,tablet:820,desktopHd:1920,tv4k:3840},ba={bordoAccent:"#9e1e36",bordoAccentDark:"#6a1426",bordoCore:"#4a1020",deepBlack:"#2e0810",outerSpace:"#2e0810",white:"#ffffff",goldMain:"#d4af37",goldHover:"#f1d592",goldSoft18:"rgba(212, 175, 55, 0.18)",goldSoft10:"rgba(180, 140, 30, 0.1)",goldSoft08:"rgba(212, 175, 55, 0.08)",goldSoft025:"rgba(212, 175, 55, 0.025)",testimonialBg:"rgba(255, 255, 255, 0.03)",testimonialBgHover:"rgba(255, 255, 255, 0.05)",testimonialBorder:"rgba(255, 255, 255, 0.08)",testimonialBorderHover:"rgba(102, 126, 234, 0.2)",testimonialText:"#cccccc",testimonialSubtext:"#888888",testimonialAccent:"#667eea",testimonialAccentLight:"rgba(102, 126, 234, 0.1)",testimonialAccentBorder:"rgba(102, 126, 234, 0.5)"},va={main:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'},ka=ga.div`
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
`;var za=n(579);const ja=function(){return(0,za.jsx)(ka,{})},Sa=ga.nav`
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

  @media (max-width: ${wa.desktopHd}px) {
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

  @media (max-width: ${wa.tablet}px) {
    padding: 6px 12px;
  }

  @media (max-width: ${wa.phone}px) {
    min-height: 60px;
    column-gap: 8px;
    padding: 6px 10px;
  }
`,Ca=ga.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 821px) {
    grid-area: left;
    flex: none;
    min-width: 0;
  }
`,Ea=ga.div`
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
`,Ta=ga.div`
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
`,$a=ga.button`
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
`,_a=ga.button`
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
`,Ra={src:n.p+"static/media/znak-wodny.5040197ae93bea0121d6.png",alt:"Logo Klara Queen",name:"Klara Queen",ariaLabel:"Strona g\u0142\xf3wna Klara Queen"},La=ga(yt)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`,Ma=ga.img.attrs({src:Ra.src,alt:Ra.alt})`
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

  @media (max-width: ${wa.tablet}px) {
    height: 72px;
  }

  @media (max-width: ${wa.phone}px) {
    height: 58px;
  }

  &:hover {
    transform: scale(1.05);
    filter: brightness(3) contrast(1.2) saturate(1.1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${ba.goldMain})
      drop-shadow(0 0 16px ${ba.goldHover});
  }
`;const Aa=function(){return(0,za.jsx)(La,{to:"/","aria-label":Ra.ariaLabel,children:(0,za.jsx)(Ma,{})})},Da=ga.ul`
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

  @media (max-width: ${wa.phone}px) {
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
  color: ${ba.goldHover};
  font-family: ${va.main};
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

  @media (max-width: ${wa.phone}px) {
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
`,Fa=ga.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: inherit;
`;var Wa={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ua=r.createContext&&r.createContext(Wa),Ha=["attr","size","title"];function Ba(){return Ba=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ba.apply(null,arguments)}function Ka(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ga(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ka(Object(n),!0).forEach(function(t){Va(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ka(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Va(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ya(e){return e&&e.map((e,t)=>r.createElement(e.tag,Ga({key:t},e.attr),Ya(e.child)))}function qa(e){return t=>r.createElement(Qa,Ba({attr:Ga({},e.attr)},t),Ya(e.child))}function Qa(e){var t=t=>{var n,{attr:a,size:i,title:o}=e,l=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,Ha),s=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",Ba({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,l,{className:n,style:Ga(Ga({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==Ua?r.createElement(Ua.Consumer,null,e=>t(e)):t(Wa)}function Ja(e){return qa({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Xa(e){return qa({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function Za(e){return qa({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function ei(e){return qa({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(e)}function ti(e){return qa({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}const ni=[{id:1,icon:function(e){return qa({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)},url:"https://youtube.com",label:"YouTube"},{id:2,icon:function(e){return qa({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)},url:"https://facebook.com",label:"Facebook"},{id:3,icon:function(e){return qa({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(e)},url:"https://allegro.pl",label:"Allegro"}],ri={labels:[{name:"Oferta",to:"/offer"},{name:"Aktualno\u015bci",to:"/blog"},{name:"Wsp\xf3\u0142praca",to:"/cooperation"},{name:"Najcz\u0119stsze pytania",to:"/questions"},{name:"O Nas",to:"/about"}],socials:ni,aria:{closeLabel:"Zamknij menu",openLabel:"Otw\xf3rz menu"}};const ai=function(e){let{vertical:t=!1,onItemClick:n}=e;const r=()=>{n&&n()};return(0,za.jsx)(Da,{$vertical:t,children:ri.labels.map((e,n)=>(0,za.jsx)(Ia,{$vertical:t,onClick:r,children:e.to?(0,za.jsx)(Fa,{as:yt,to:e.to,children:e.name}):(0,za.jsx)(Fa,{href:e.url,children:e.name})},`${e.name}-${n}`))})},ii=ga.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: ${wa.tablet}px) {
    gap: 14px;
  }

  @media (max-width: ${wa.phone}px) {
    gap: 12px;
  }
`,oi=ga.a`
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

  @media (max-width: ${wa.tablet}px) {
    font-size: 1.18rem;
  }

  @media (max-width: ${wa.phone}px) {
    font-size: 1.08rem;
  }

  &:hover {
    color: ${ba.white};
    transform: translateY(-2px) scale(1.04);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${ba.goldMain})
      drop-shadow(0 0 16px ${ba.goldHover});
  }
`;const li=function(){return(0,za.jsx)(ii,{children:ri.socials.map(e=>{const t=e.icon;return(0,za.jsx)(oi,{href:e.url,target:"_blank",rel:"noreferrer","aria-label":e.label,children:(0,za.jsx)(t,{title:e.label})},e.id)})})};const si=function(){const[e,t]=(0,r.useState)(!1),n=()=>{t(!1)};return(0,za.jsxs)(za.Fragment,{children:[(0,za.jsxs)(Sa,{children:[(0,za.jsx)(Ca,{children:(0,za.jsx)(Aa,{})}),(0,za.jsx)(Ea,{children:(0,za.jsx)(ai,{})}),(0,za.jsxs)(Ta,{children:[(0,za.jsx)(Pa,{children:(0,za.jsx)(li,{})}),(0,za.jsx)($a,{type:"button",onClick:()=>{t(e=>!e)},"aria-label":e?ri.aria.closeLabel:ri.aria.openLabel,"aria-expanded":e,children:e?(0,za.jsx)(Ja,{}):(0,za.jsx)(ti,{})})]})]}),(0,za.jsx)(_a,{$open:e,onClick:n}),(0,za.jsxs)(Na,{$open:e,children:[(0,za.jsx)(ai,{vertical:!0,onItemClick:n}),(0,za.jsx)(Oa,{children:(0,za.jsx)(li,{})})]})]})},ci=ga.footer`
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

  @media (max-width: ${wa.desktopHd}px) {
    padding: 55px 45px 22px;
  }

  @media (max-width: ${wa.tablet}px) {
    padding: 45px 18px 18px;
  }

  @media (max-width: 821px) {
    padding: 30px 12px 12px;
  }

  @media (max-width: ${wa.smallPhone}px) {
    padding: 25px 10px 10px;
  }
`,ui=ga.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 50px;
  width: 100%;

  @media (max-width: ${wa.tablet}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }

  @media (max-width: 821px) {
    gap: 12px;
  }

  @media (max-width: ${wa.phone}px) {
    gap: 12px;
  }

  @media (max-width: ${wa.smallPhone}px) {
    gap: 10px;
  }
`,di="kontakt@studioklara.pl",pi={brand:{name:"Klara Queen",slogan:"Digital Excellence",description:"Tworzymy luksusowe do\u015bwiadczenia cyfrowe, kt\xf3re definiuj\u0105 now\u0105 jako\u015b\u0107 Twojej marki w sieci."},links:[{name:"Start",to:"/"},{name:"Oferta",to:"/offer"},{name:"Aktualno\u015bci",to:"/blog"},{name:"Wsp\xf3\u0142praca",to:"/cooperation"},{name:"Opinie",to:"/testimonials"},{name:"O Nas",to:"/about"},{name:"Najcz\u0119stsze pytania",to:"/questions"}],socials:ni,contact:{email:di,copy:`\xa9 ${(new Date).getFullYear()} Klara Queen. Wszystkie prawa zastrze\u017cone.`}},fi=ga.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: ${wa.tablet}px) {
    align-items: center;
  }
`,mi=ga.div`
  display: flex;
  align-items: center;
  margin-top: -56px;

  @media (max-width: ${wa.desktopHd}px) {
    margin-top: -50px;
  }

  @media (max-width: ${wa.tablet}px) {
    margin-top: -36px;
  }

  @media (max-width: ${wa.smallPhone}px) {
    margin-top: -28px;
  }
`,hi=ga.img`
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

  @media (max-width: ${wa.desktopHd}px) {
    height: 168px;
  }

  @media (max-width: ${wa.tablet}px) {
    height: 140px;
  }

  @media (max-width: ${wa.smallPhone}px) {
    height: 120px;
  }
`,gi=ga.p`
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

  @media (max-width: ${wa.tablet}px) {
    font-size: 0.78rem;
    line-height: 1.5;
    max-width: 500px;
  }

  @media (max-width: ${wa.smallPhone}px) {
    font-size: 0.72rem;
    line-height: 1.4;
  }
`;const yi=function(e){let{data:t}=e;return(0,za.jsxs)(fi,{children:[(0,za.jsx)(mi,{children:(0,za.jsx)(hi,{src:Ra.src,alt:Ra.alt})}),(0,za.jsx)(gi,{children:t.description})]})},xi=fa`
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

  @media (max-width: ${wa.tablet}px) {
    font-size: 0.76rem;
  }

  @media (max-width: ${wa.smallPhone}px) {
    font-size: 0.7rem;
  }
`,wi=ga.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${wa.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${wa.smallPhone}px) {
    gap: 10px;
  }
`,bi=ga.h4`
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

  @media (max-width: ${wa.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${wa.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,vi=ga.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;

  @media (max-width: ${wa.tablet}px) {
    grid-template-columns: 1fr;
    gap: 12px;
    place-items: center;
  }

  @media (max-width: ${wa.phone}px) {
    gap: 8px;
    place-items: center;
  }

  @media (max-width: ${wa.smallPhone}px) {
    gap: 6px;
  }
`,ki=ga.a`
  ${xi}
`,zi=ga(yt)`
  ${xi}
`;const ji=function(e){let{data:t}=e;return(0,za.jsxs)(wi,{children:[(0,za.jsx)(bi,{children:"Nawigacja"}),(0,za.jsx)(vi,{children:t.map((e,t)=>e.to?(0,za.jsx)(zi,{to:e.to,children:e.name},t):(0,za.jsx)(ki,{href:e.url,children:e.name},t))})]})},Si=ga.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${wa.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${wa.smallPhone}px) {
    gap: 10px;
  }
`,Ci=ga.h4`
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

  @media (max-width: ${wa.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${wa.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,Ei=ga.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: ${wa.tablet}px) {
    justify-content: center;
    gap: 16px;
  }

  @media (max-width: ${wa.smallPhone}px) {
    gap: 12px;
  }
`,Ti=ga.a`
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

  @media (max-width: ${wa.tablet}px) {
    gap: 6px;

    svg {
      font-size: 1.4rem;
    }
  }

  @media (max-width: ${wa.smallPhone}px) {
    gap: 5px;

    svg {
      font-size: 1.2rem;
    }
  }
`,Pi=ga.span`
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: ${ba.white};
  opacity: 0.75;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: "Cormorant Garamond", serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: ${wa.tablet}px) {
    font-size: 0.58rem;
    letter-spacing: 1px;
  }

  @media (max-width: ${wa.smallPhone}px) {
    font-size: 0.54rem;
  }
`;const $i=function(e){let{data:t}=e;return(0,za.jsxs)(Si,{children:[(0,za.jsx)(Ci,{children:"Nasze Kana\u0142y"}),(0,za.jsx)(Ei,{children:t.map(e=>(0,za.jsxs)(Ti,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,za.jsx)(e.icon,{}),(0,za.jsx)(Pi,{children:e.label})]},e.id))})]})},_i=ga.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px 0;
  border-top: 1px solid rgba(212, 175, 55, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: ${wa.tablet}px) {
    flex-direction: column-reverse;
    gap: 12px;
    margin: 30px auto 0;
    padding: 15px 0;
    text-align: center;
    align-items: center;
  }

  @media (max-width: ${wa.smallPhone}px) {
    margin: 20px auto 0;
    padding: 12px 0;
    gap: 10px;
  }
`,Ni=ga.span`
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

  @media (max-width: ${wa.tablet}px) {
    font-size: 0.68rem;
  }

  @media (max-width: ${wa.smallPhone}px) {
    font-size: 0.63rem;
  }
`,Oi=ga.span`
  color: ${ba.goldMain};
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

  @media (max-width: ${wa.tablet}px) {
    font-size: 0.75rem;
  }

  @media (max-width: ${wa.smallPhone}px) {
    font-size: 0.7rem;
  }
`,Ri=ga.a`
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

  @media (max-width: ${wa.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 0.8px;
  }

  @media (max-width: ${wa.smallPhone}px) {
    font-size: 0.7rem;
  }
`;const Li=function(e){let{data:t}=e;const[n,a]=(0,r.useState)(67100),[i,o]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(i)return;const e=localStorage.getItem("visitCount"),t=localStorage.getItem("lastSessionTime"),n=(new Date).getTime();if(e&&t){if(n-parseInt(t)>6e4){const t=parseInt(e)+1;localStorage.setItem("visitCount",t),localStorage.setItem("lastSessionTime",n),a(t)}else a(parseInt(e))}else localStorage.setItem("visitCount",67101),localStorage.setItem("lastSessionTime",n),a(67100);o(!0)},[i]),(0,za.jsxs)(_i,{children:[(0,za.jsx)(Ni,{children:t.copy}),(0,za.jsxs)(Oi,{children:["Odwiedzin na stronie:"," ",(0,za.jsx)("strong",{children:n.toLocaleString("pl-PL")})]}),(0,za.jsx)(Ri,{href:`mailto:${t.email}`,children:t.email})]})};const Mi=function(){const{brand:e,links:t,socials:n,contact:r}=pi;return(0,za.jsxs)(ci,{children:[(0,za.jsxs)(ui,{children:[(0,za.jsx)(yi,{data:e}),(0,za.jsx)(ji,{data:t}),(0,za.jsx)($i,{data:n})]}),(0,za.jsx)(Li,{data:r})]})},Ai=()=>{const e=ue();return(0,r.useEffect)(()=>{window.scrollTo(0,0)},[e.key]),(0,r.useEffect)(()=>{setTimeout(()=>{window.scrollTo(0,0)},100)},[]),null},Di=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=fa.apply(void 0,St([e],t,!1)),i="sc-global-".concat(Zn(JSON.stringify(a))),o=new xa(a,i),l=new WeakMap,s=function(e){var t=oa(),n=r.useContext(sa),a=l.get(t.styleSheet);return void 0===a&&(a=t.styleSheet.allocateGSInstance(i),l.set(t.styleSheet,a)),r.useLayoutEffect(function(){return t.styleSheet.server||function(e,t,n,r,a){if(o.isStatic)o.renderStyles(e,On,n,a);else{var i=jt(jt({},t),{theme:Un(t,r,s.defaultProps)});o.renderStyles(e,i,n,a)}}(a,e,t.styleSheet,n,t.stylis),function(){o.removeStyles(a,t.styleSheet)}},[a,e,t.styleSheet,n,t.stylis]),null};return r.memo(s)})`
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
`,Ii=ga.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,Fi=ga.div`
  flex: 1;
  padding-top: 90px;

  @media (max-width: 821px) {
    padding-top: 70px;
  }
`,Wi=ga.section`
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

  @media (max-width: ${wa.tablet}px) {
    padding: 94px 0 0;
  }

  @media (max-width: 640px) {
    padding: 88px 0 0;
  }

  @media (max-width: ${wa.phone}px) {
    padding: 84px 0 0;
  }
`,Ui=ga.div`
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

  @media (max-width: ${wa.tablet}px) {
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

  @media (max-width: ${wa.phone}px) {
    gap: 8px;
    padding: 4px 10px 0;
  }

  @media (max-width: 420px) {
    gap: 8px;
    padding: 4px 10px 0;
  }
`,Hi=ga.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;

  @media (max-width: ${wa.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${wa.tablet}px) {
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

  @media (max-width: ${wa.phone}px) {
    margin-top: 0;
  }

  @media (max-width: 420px) {
    margin-top: 0;
  }
`,Bi=ga.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;

  @media (max-width: ${wa.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${wa.tablet}px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 760px;
    margin-top: 0;
  }

  @media (max-width: ${wa.phone}px) {
    margin-top: 0;
  }
`,Ki=(ga.div`
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

  @media (max-width: ${wa.tablet}px) {
    max-width: 760px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  @media (max-width: ${wa.phone}px) {
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
    align-items: center;
    padding: 0 2px;
  }
`),Gi=ga.div`
  font-family: "Manrope", "Segoe UI", sans-serif;
  color: rgba(255, 242, 214, 0.92);
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.2vw, 2.2px);
  font-size: clamp(0.62rem, 0.9vw, 0.82rem);
  font-weight: 500;
  margin-bottom: 18px;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);

  @media (max-width: ${wa.tablet}px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${wa.phone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.8px;
    margin-bottom: 12px;
  }
`,Vi=ga.h1`
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

  @media (max-width: ${wa.tablet}px) {
    font-size: clamp(0.95rem, 3.2vw, 1.95rem);
    letter-spacing: 0;
    text-align: center;
    width: 100%;
    line-height: 1;
  }

  @media (max-width: ${wa.phone}px) {
    margin-bottom: 14px;
    font-size: clamp(0.9rem, 5.2vw, 1.6rem);
    line-height: 1.1;
  }
`,Yi=ga.p`
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

  @media (max-width: ${wa.tablet}px) {
    max-width: 560px;
    font-size: clamp(0.74rem, 1.8vw, 0.84rem);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${wa.phone}px) {
    max-width: 100%;
    font-size: clamp(0.72rem, 3.4vw, 0.8rem);
    line-height: 1.45;
    text-align: center;
  }
`,qi=ga.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: nowrap;

  @media (max-width: ${wa.tablet}px) {
    width: 100%;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10px;
  }

  @media (max-width: ${wa.phone}px) {
    gap: 8px;
    margin-top: 22px;
    flex-wrap: nowrap;
    justify-content: center;
  }
`,Qi=`\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 48px;\n  padding: 0 24px;\n  border-radius: 14px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.9px;\n  font-size: clamp(0.68rem, 0.8vw, 0.82rem);\n  font-weight: 700;\n  white-space: nowrap;\n  flex: 0 0 auto;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease,\n    color 0.3s ease, border-color 0.3s ease;\n\n  @media (max-width: ${wa.tablet}px) {\n    min-height: 42px;\n    padding: 0 14px;\n    font-size: 0.74rem;\n    letter-spacing: 0.8px;\n  }\n\n  @media (max-width: ${wa.phone}px) {\n    min-height: 40px;\n    padding: 0 12px;\n    font-size: 0.7rem;\n    letter-spacing: 0.7px;\n  }\n`,Ji=ga.a`
  ${Qi}
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
`,Xi=ga.a`
  ${Qi}
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
`,Zi="Unikalny design, kt\xf3ry zachwyca",eo={line1:"Luksusowe i funkcjonalne",line2:"strony WWW dla Twojej marki"},to={line1:"Projektujemy spersonalizowane, unikalne rozwi\u0105zania cyfrowe,",line2:"kt\xf3re buduj\u0105 autorytet i przyci\u0105gaj\u0105 klient\xf3w premium."},no={primary:{label:"Zobacz Projekty",href:"#projekty"},secondary:{label:"Poznaj Ofert\u0119",href:"#oferta"}};const ro=function(){return(0,za.jsxs)(Ki,{children:[(0,za.jsx)(Gi,{children:Zi}),(0,za.jsxs)(Vi,{children:[eo.line1,(0,za.jsx)("br",{}),eo.line2]}),(0,za.jsxs)(Yi,{children:[to.line1,(0,za.jsx)("br",{}),to.line2]}),(0,za.jsxs)(qi,{children:[(0,za.jsx)(Ji,{href:no.primary.href,children:no.primary.label}),(0,za.jsx)(Xi,{href:no.secondary.href,children:no.secondary.label})]})]})},ao=ga.div`
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

  @media (max-width: ${wa.tablet}px) {
    width: min(100%, 760px);
    height: clamp(240px, 46vw, 380px);
    padding: 2px;
    margin: 0 auto;
  }

  @media (max-width: ${wa.phone}px) {
    padding: 0 2px;
  }
`,io=ga.div`
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

  @media (max-width: ${wa.tablet}px) {
    --offset-distance: 68px;
    --edge-offset-distance: 112px;
  }

  @media (max-width: ${wa.phone}px) {
    --offset-distance: 56px;
    --edge-offset-distance: 98px;
  }
`,oo=ga.img`
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

  @media (max-width: ${wa.phone}px) {
    width: 260px;
    height: 182px;
  }
`;var lo=n(217),so=n(410),co=n(430),uo=n(682);const po={images:[lo,so,co,uo,so]},{images:fo}=po,mo=(e,t,n)=>{let r=t-e;return r>n/2&&(r-=n),r<-n/2&&(r+=n),r};const ho=function(){const[e,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{const e=setInterval(()=>{t(e=>(e+1)%fo.length)},4e3);return()=>clearInterval(e)},[]),(0,za.jsx)(ao,{children:(0,za.jsx)(io,{children:fo.map((t,n)=>(0,za.jsx)(oo,{src:t,alt:`Projekt ${n+1}`,$offset:mo(e,n,fo.length),$active:n===e},`${t}-${n}`))})})},go=ga.section`
  width: 100%;
  margin-top: clamp(-38px, -3vw, -18px);
  padding: clamp(0px, 1.4vw, 20px) clamp(16px, 4vw, 60px)
    0px;
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
`,yo=ga.div`
  text-align: center;
  margin-bottom: clamp(8px, 1.2vw, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,xo=ga.h2`
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
`,wo=ga.p`
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
`,bo=ga.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(280px, 38vw, 420px);
`,vo=ga.div`
  flex: 1;
  display: flex;
  gap: clamp(12px, 1.6vw, 20px);
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 10px 2px 20px;
  margin: -10px -2px -20px;
  align-items: stretch;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`,ko=ga.div`
  flex: 0 0 calc(25% - 15px);
  min-width: 0;
  scroll-snap-align: start;
  display: flex;
  align-items: stretch;
  height: 100%;

  @media (max-width: 1050px) {
    flex: 0 0 calc(33.33% - 14px);
  }

  @media (max-width: ${wa.tablet}px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(50% - 6px);
  }

  @media (max-width: ${wa.smallPhone}px) {
    flex: 0 0 calc(100% - 0px);
  }
`,zo=ga.button`
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
`,jo=ga.div`
  margin: -70px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover div {
    width: 100px;
  }
`,So=ga.span`
  color: ${ba.goldMain};
  text-transform: uppercase;
  letter-spacing: clamp(1.4px, 0.3vw, 4px);
  font-size: clamp(0.68rem, 0.9vw, 0.75rem);
  margin-bottom: 10px;
`,Co=ga.div`
  width: 50px;
  height: 1px;
  background: ${ba.goldMain};
  transition: width 0.4s ease;
`,Eo=ga.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
`;const To=function(e){let{children:t,type:n,url:r,isLink:a}=e;return(0,za.jsx)(Eo,{as:"link"===n?"a":"div",href:"link"===n?r:void 0,target:"link"===n?"_blank":void 0,isLink:a,children:t})},Po=ga.div`
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
`,$o=ga.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  filter: brightness(0.88) saturate(0.9);
  transition:
    filter 0.45s ease,
    transform 0.45s ease;
`;const _o=function(e){let{image:t,title:n}=e;return(0,za.jsx)(Po,{children:(0,za.jsx)($o,{src:t,alt:n})})},No=ga.div`
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
`;const Oo=function(e){let{icon:t}=e;return(0,za.jsx)(No,{children:(0,za.jsx)(t,{})})},Ro=ga.h3`
  color: ${ba.goldHover};
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
`,Lo=ga.p`
  color: rgba(255, 245, 220, 0.78);
  font-size: clamp(0.68rem, 2.2vw, 0.82rem);
  text-align: center;
  line-height: 1.5;
  margin: 0 clamp(8px, 2vw, 20px);
  max-width: 240px;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;const Mo=function(e){let{title:t,description:n}=e;return(0,za.jsxs)(za.Fragment,{children:[(0,za.jsx)(Ro,{children:t}),n&&(0,za.jsx)(Lo,{children:n})]})},Ao=ga.div`
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
  flex-shrink: 0;
`;const Do=function(){return(0,za.jsx)(Ao,{})};const Io=function(e){let{project:t}=e;const{type:n,url:r,title:a,description:i,image:o,icon:l}=t;return(0,za.jsxs)(To,{type:n,url:r,isLink:"link"===n,children:[(0,za.jsx)(_o,{image:o,title:a}),(0,za.jsx)(Oo,{icon:l}),(0,za.jsx)(Mo,{title:a,description:i}),(0,za.jsx)(Do,{})]})},Fo=[{id:1,type:"link",url:"https://google.com",title:"Boutique E-commerce",description:"W pe\u0142ni dzia\u0142aj\u0105cy sklep internetowy premium.",image:lo,icon:Xa},{id:2,type:"example",title:"Studio Architektury",image:so,icon:function(e){return qa({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}},{id:3,type:"example",title:"Portfolio Fotografa",image:co,icon:function(e){return qa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(e)}},{id:4,type:"link",url:"https://moja-inna-strona.pl",title:"Dashboard Finansowy",image:uo,icon:function(e){return qa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}},{id:5,type:"example",title:"Projekt Specjalny",image:lo,icon:Xa},{id:6,type:"example",title:"Projekt Specjalny 2",image:so,icon:Xa}],Wo={title:"Przyk\u0142adowe Prace",subtitle:"Ekskluzywne projekty cyfrowe, kt\xf3re definiuj\u0105 now\u0105 jako\u015b\u0107 bran\u017cy"},Uo="Zobacz Pe\u0142ne Portfolio";const Ho=function(){const e=(0,r.useRef)(null),t=(0,r.useRef)(!1),n=n=>{const r=e.current;if(!r||t.current)return;const a=r.firstElementChild;if(!a)return;const i=parseFloat(getComputedStyle(r).gap)||16,o=a.offsetWidth+i,l=r.scrollWidth-r.clientWidth;t.current=!0,n>0&&r.scrollLeft>=l-2?r.scrollTo({left:0,behavior:"smooth"}):n<0&&r.scrollLeft<=2?r.scrollTo({left:l,behavior:"smooth"}):r.scrollBy({left:n*o,behavior:"smooth"}),setTimeout(()=>{t.current=!1},580)};return(0,za.jsxs)(go,{children:[(0,za.jsxs)(yo,{children:[(0,za.jsx)(xo,{children:Wo.title}),(0,za.jsx)(wo,{children:Wo.subtitle})]}),(0,za.jsxs)(bo,{children:[(0,za.jsx)(zo,{onClick:()=>n(-1),"aria-label":"Poprzedni projekt",children:(0,za.jsx)(ei,{})}),(0,za.jsx)(vo,{ref:e,children:Fo.map(e=>(0,za.jsx)(ko,{children:(0,za.jsx)(Io,{project:e})},e.id))}),(0,za.jsx)(zo,{onClick:()=>n(1),"aria-label":"Nast\u0119pny projekt",children:(0,za.jsx)(Za,{})})]}),(0,za.jsxs)(jo,{children:[(0,za.jsx)(So,{children:Uo}),(0,za.jsx)(Co,{})]})]})},Bo=ga.section`
  width: 100%;
  margin: 0px auto 0;
  padding: 0px clamp(16px, 4vw, 60px) clamp(60px, 5vw, 80px);
  background: linear-gradient(180deg, rgba(46, 8, 16, 0.4) 0%, transparent 50%);
`,Ko=ga.div`
  text-align: center;
  margin-bottom: clamp(40px, 6vw, 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,Go=ga.h2`
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
`,Vo=ga.p`
  color: rgba(241, 213, 146, 0.72);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-weight: 500;
  margin: 0;
  font-size: clamp(0.62rem, 0.78vw, 0.72rem);
  letter-spacing: clamp(2.8px, 0.38vw, 4.8px);
  text-transform: uppercase;
  line-height: 1;
  max-width: 480px;
`,Yo=ga.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  margin: 0 auto;
  min-height: clamp(280px, 38vw, 420px);
`,qo=ga.div`
  flex: 1;
  display: flex;
  gap: clamp(16px, 2vw, 24px);
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 10px 2px 20px;
  margin: -10px -2px -20px;
  align-items: stretch;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`,Qo=ga.div`
  flex: 0 0 calc(33.33% - 16px);
  min-width: 0;
  scroll-snap-align: start;
  display: flex;
  align-items: stretch;
  height: 100%;

  @media (max-width: 1050px) {
    flex: 0 0 calc(50% - 12px);
  }

  @media (max-width: 768px) {
    flex: 0 0 calc(100% - 0px);
  }
`,Jo=ga.div`
  background: ${ba.testimonialBg};
  border: 1px solid ${ba.testimonialBorder};
  border-radius: 12px;
  padding: 35px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 100%;

  &:hover {
    background: ${ba.testimonialBgHover};
    border-color: ${ba.testimonialBorderHover};
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 25px 20px;
  }
`,Xo=ga.div`
  display: flex;
  gap: 3px;
  margin-bottom: 15px;
  font-size: 14px;
`,Zo=ga.span`
  color: #ffd700;
`,el=ga.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${ba.testimonialText};
  margin-bottom: auto;
  margin-bottom: 20px;
  font-style: italic;
`,tl=ga.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`,nl=ga.strong`
  font-size: 15px;
  color: ${ba.white};
  font-weight: 600;
`,rl=ga.span`
  font-size: 13px;
  color: ${ba.testimonialSubtext};
`,al=ga.button`
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
`,il=ga.div`
  margin-top: clamp(36px, 5vw, 70px);
  display: flex;
  justify-content: center;
`,ol=ga.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  border: 1px solid ${ba.testimonialAccentBorder};
  border-radius: 8px;
  color: ${ba.testimonialAccent};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${ba.testimonialAccentLight};
    border-color: ${ba.testimonialAccent};
    color: ${ba.white};
  }
`,ll=[{id:1,name:"Magdalena",company:"Salon Kosmetologii Estetycznej",text:"Nareszcie moja strona wygl\u0105da tak luksusowo, jak moje us\u0142ugi. Grafiki s\u0105 ob\u0142\u0119dne \u2013 nikt w mojej bran\u017cy nie ma nic podobnego. Najbardziej zaskoczy\u0142o mnie to, \u017ce wszystko by\u0142o gotowe w dwa dni.",rating:5},{id:2,name:"Tomasz",company:"Doradztwo Biznesowe",text:"Moja poprzednia strona wiecznie si\u0119 zacina\u0142a. Ta od Klary Queen dzia\u0142a b\u0142yskawicznie, nawet na telefonie. Klienci od razu zauwa\u017cyli zmian\u0119. Pe\u0142en profesjonalizm i zero lania wody.",rating:5},{id:3,name:"Agnieszka",company:"Biuro Architektoniczne",text:"Zale\u017ca\u0142o mi na estetyce, kt\xf3ra odda jako\u015b\u0107 moich projekt\xf3w. Studio zrozumia\u0142o moj\u0105 wizj\u0119 w punkt. Strona jest elegancka, czysta i bardzo nowoczesna. \u015awietny kontakt na ka\u017cdym etapie.",rating:5},{id:4,name:"Piotr",company:"Agencja Eventowa Premium",text:"Szybko\u015b\u0107 realizacji w tym studiu to jaki\u015b kosmos. Podczas gdy inni dopiero przygotowywali oferty, tutaj strona ju\u017c by\u0142a gotowa do publikacji. Wszystko dzia\u0142a idealnie, bez \u017cadnych b\u0142\u0119d\xf3w.",rating:5},{id:5,name:"Katarzyna",company:"Coaching & Mentoring",text:"By\u0142am sceptyczna, czy w 48h da si\u0119 zrobi\u0107 co\u015b porz\u0105dnego. Myli\u0142am si\u0119. Strona jest pi\u0119kna, unikalna i co najwa\u017cniejsze \u2013 klienci zacz\u0119li pisa\u0107 do mnie sami. To by\u0142a \u015bwietna inwestycja.",rating:5},{id:6,name:"Robert",company:"Firma Logistyczna",text:"Konkretnie i na temat. Dosta\u0142em nowoczesne narz\u0119dzie, kt\xf3re buduje presti\u017c mojej firmy. Nie musz\u0119 si\u0119 martwi\u0107 o \u017cadne wirusy czy b\u0142\u0119dy \u2013 wszystko po prostu dzia\u0142a jak nale\u017cy.",rating:5},{id:7,name:"Joanna",company:"Kancelaria Prawna",text:"Bardzo merytoryczne podej\u015bcie. Strona jest minimalistyczna, ale bije od niej profesjonalizm. Du\u017cy plus za cierpliwo\u015b\u0107 przy dobieraniu grafik \u2013 efekt ko\u0144cowy jest idealny.",rating:5},{id:8,name:"Marek",company:"Studio Treningu Personalnego",text:"Wi\u0119kszo\u015b\u0107 stron w mojej bran\u017cy wygl\u0105da tak samo. Moja od razu si\u0119 wyr\xf3\u017cnia dzi\u0119ki tym grafikom. Jest dynamiczna, szybka i po prostu chce si\u0119 na niej zosta\u0107 d\u0142u\u017cej.",rating:5},{id:9,name:"Ewa",company:"Projektantka Wn\u0119trz",text:"Ceni\u0119 sobie estetyk\u0119, a Studio Klara Queen dostarczy\u0142o mi projekt, kt\xf3ry jest po prostu pi\u0119kny. Wszystko dopi\u0119te na ostatni guzik w ekspresowym tempie. Polecam ka\u017cdemu.",rating:5},{id:10,name:"\u0141ukasz",company:"Sklep Internetowy (Nisza Premium)",text:"Przej\u015bcie na now\u0105 stron\u0119 to by\u0142a ulga. Wszystko \u0142aduje si\u0119 w u\u0142amku sekundy, a proces zakupowy jest p\u0142ynny. Wida\u0107, \u017ce zesp\xf3\u0142 zna si\u0119 na rzeczy i nie idzie na \u0142atwizn\u0119.",rating:5},{id:11,name:"Karolina",company:"Fotografia \u015alubna",text:"Jako fotograf zwracam uwag\u0119 na ka\u017cdy piksel. Jestem pod ogromnym wra\u017ceniem, jak dobrze dobrano opraw\u0119 wizualn\u0105. Strona jest lekka, szybka i bardzo stylowa.",rating:5},{id:12,name:"Andrzej",company:"Us\u0142ugi Finansowe",text:"Szuka\u0142em solidnego partnera i nie zawiod\u0142em si\u0119. Strona jest bezpieczna, wygl\u0105da nowocze\u015bnie i buduje zaufanie od pierwszej sekundy. \u017badnych problem\xf3w z terminami.",rating:5},{id:13,name:"Natalia",company:"Klinika Stomatologiczna",text:"Zale\u017ca\u0142o nam na nowoczesnym wizerunku. Strona, kt\xf3r\u0105 otrzymali\u015bmy, jest przejrzysta i bardzo intuicyjna dla pacjent\xf3w. Proces wdro\u017cenia trwa\u0142 niesamowicie kr\xf3tko.",rating:5},{id:14,name:"Micha\u0142",company:"Produkcja Mebli na Wymiar",text:"Konkretny kontakt i szybka realizacja. Strona \u015bwietnie eksponuje nasze realizacje. Podoba mi si\u0119, \u017ce nie musz\u0119 traci\u0107 czasu na techniczne detale \u2013 studio zaj\u0119\u0142o si\u0119 wszystkim.",rating:5},{id:15,name:"Daria",company:"Marka Odzie\u017cowa",text:"Moja marka w ko\u0144cu zyska\u0142a opraw\u0119, na jak\u0105 zas\u0142ugiwa\u0142a. Grafiki s\u0105 unikalne, a strona dzia\u0142a bez zarzutu. Ca\u0142o\u015b\u0107 wygl\u0105da bardzo presti\u017cowo i nowocze\u015bnie.",rating:5}];const sl=function(){const e=(0,r.useRef)(null),t=(0,r.useRef)(!1),n=n=>{const r=e.current;if(!r||t.current)return;const a=r.firstElementChild;if(!a)return;const i=parseFloat(getComputedStyle(r).gap)||16,o=a.offsetWidth+i,l=r.scrollWidth-r.clientWidth;t.current=!0,n>0&&r.scrollLeft>=l-2?r.scrollTo({left:0,behavior:"smooth"}):n<0&&r.scrollLeft<=2?r.scrollTo({left:l,behavior:"smooth"}):r.scrollBy({left:n*o,behavior:"smooth"}),setTimeout(()=>{t.current=!1},580)};return(0,za.jsxs)(Bo,{children:[(0,za.jsxs)(Ko,{children:[(0,za.jsx)(Go,{children:"Opinie Naszych Klient\xf3w"}),(0,za.jsx)(Vo,{children:"To m\xf3wi\u0105 o nas ci, kt\xf3rzy nam zaufali"})]}),(0,za.jsxs)(Yo,{children:[(0,za.jsx)(al,{onClick:()=>n(-1),"aria-label":"Poprzednia opinia",children:(0,za.jsx)(ei,{})}),(0,za.jsx)(qo,{ref:e,children:ll.map(e=>(0,za.jsx)(Qo,{children:(0,za.jsxs)(Jo,{children:[(0,za.jsx)(Xo,{children:[...Array(e.rating)].map((e,t)=>(0,za.jsx)(Zo,{children:"\u2605"},t))}),(0,za.jsxs)(el,{children:['"',e.text,'"']}),(0,za.jsxs)(tl,{children:[(0,za.jsx)(nl,{children:e.name}),(0,za.jsx)(rl,{children:e.company})]})]})},e.id))}),(0,za.jsx)(al,{onClick:()=>n(1),"aria-label":"Nast\u0119pna opinia",children:(0,za.jsx)(Za,{})})]}),(0,za.jsx)(il,{children:(0,za.jsx)(ol,{href:"/testimonials",children:"Przeczytaj wszystkie opinie \u2192"})})]})};const cl=function(){return(0,za.jsxs)(za.Fragment,{children:[(0,za.jsx)(Wi,{children:(0,za.jsxs)(Ui,{children:[(0,za.jsx)(Hi,{children:(0,za.jsx)(ro,{})}),(0,za.jsx)(Bi,{children:(0,za.jsx)(ho,{})})]})}),(0,za.jsx)(Ho,{}),(0,za.jsx)(sl,{})]})},ul=ga.div`
  position: relative;
  z-index: 5;
`,dl=ga.section`
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
`,pl=ga.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
`,fl=ga.div`
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
`,ml=ga.h2`
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
`,hl=ga.section`
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
`,gl=ga.h1`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 700;
  color: ${ba.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: clamp(1px, 0.5vw, 3px);
  margin: clamp(35px, 5vw, 50px) 0 clamp(25px, 4vw, 35px);
  text-transform: uppercase;
`,yl=ga.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: rgba(255, 255, 255, 0.82);
  line-height: clamp(1.6, 3vw, 1.9);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
  font-family: "Manrope", sans-serif;
`,xl="Wymiar Luksusowej Doskona\u0142o\u015bci",wl="Gdzie wizja spotyka precyzj\u0119. Tworzymy cyfrowe eksperyencje, kt\xf3re wyznaczaj\u0105 standardy bran\u017cy.",bl={title:"Twoja Kolekcja",paragraphs:[". Stworzyli\u015bmy ekosystem wzorc\xf3w, kt\xf3re wyznaczaj\u0105 standardy - sprawdzone, doskonale zaprojektowane i gotowe do Twojej marki.","Ty wybierasz fundament z naszej autorskiej kolekcji, my dostosowujemy go do Twojej to\u017csamo\u015bci. Rezultat? Estetyka bez kompromis\xf3w i natychmiastowy autorytet w Twojej bran\u017cy.","Ka\u017cdy szablon to efekt setki godzin testowania, niezliczonych iteracji i wiedzy zdobytej pracuj\u0105c z luksusowymi markami na ca\u0142ym \u015bwiecie."],signature:"Autorska Kolekcja \xb7 Sprawdzone Struktury \xb7 Estetyka Bez Kompromis\xf3w"},vl=[{id:1,label:"Selekcja",value:"1",description:"Autorskie szablony zaprojektowane pod luksusowe marki."},{id:2,label:"Szybko\u015b\u0107",value:"2",description:"Twoja obecno\u015b\u0107 online w 2-4 dni robocze."},{id:3,label:"Sp\xf3jno\u015b\u0107",value:"3",description:"Gwarancja doskona\u0142ego wygl\u0105du na ka\u017cdym urz\u0105dzeniu."}],kl=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych. "},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."}],zl={title:"Gdzie nas znajdziesz?",description:"Nasze projekty dost\u0119pne na najpopularniejszych platformach. Allegro oferuje nas za nieco wy\u017csz\u0105 cen\u0119 ze wzgl\u0119du na ich prowizj\u0119. ",platforms:[{id:1,name:"Facebook",description:"Obserwuj nas na Facebooku, aby by\u0107 zawsze na bie\u017c\u0105co."},{id:2,name:"YouTube",description:"Odkrywaj nasze projekty i inspiracje na YouTube."},{id:3,name:"Allegro",description:"Kupuj nasze szablony w sklepie Allegro (ceny wy\u017csze ze wzgl\u0119du na prowizj\u0119)."}]},jl="Twoja Kolekcja",Sl="Nasze Atuty",Cl="Jak To Dzia\u0142a?",El="Got\xf3w na transformacj\u0119 cyfrow\u0105?",Tl=()=>(0,za.jsxs)(hl,{children:[(0,za.jsx)(gl,{children:xl}),(0,za.jsx)(yl,{children:wl})]}),Pl=ga.div`
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
`,$l=ga.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: clamp(1.7, 4vw, 2.1);
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
  position: relative;
`,_l=ga.div`
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
`,Nl=()=>(0,za.jsxs)(Pl,{children:[bl.paragraphs.map((e,t)=>(0,za.jsx)($l,{children:e},t)),(0,za.jsx)(_l,{children:bl.signature})]}),Ol=ga.div`
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
`,Ll=ga.h4`
  color: ${ba.goldMain};
  margin-bottom: clamp(12px, 2vw, 15px);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  margin-top: 0;
`,Ml=ga.p`
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.85);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
`,Al=ga.div`
  width: 100%;
`,Dl=ga.button`
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
`,Il=()=>{const e=fe();return(0,za.jsxs)(Al,{children:[(0,za.jsx)(Ol,{children:kl.map(e=>(0,za.jsxs)(Rl,{children:[(0,za.jsx)(Ll,{children:e.question}),(0,za.jsx)(Ml,{children:e.answer})]},e.id))}),(0,za.jsx)(Dl,{onClick:()=>e("/questions"),children:"Zobacz Wi\u0119cej Pyta\u0144"})]})},Fl=ga.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(30px, 5vw, 50px);
  margin-top: clamp(60px, 8vw, 80px);
  width: 100%;

  @media (max-width: ${wa.tablet}px) {
    grid-template-columns: 1fr;
  }
`,Wl=ga.div`
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
`,Ul=ga.span`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: bold;
  color: ${ba.goldMain};
  opacity: 0.95;
  font-family: "Cormorant Garamond", serif;
  line-height: 1;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,Hl=ga.span`
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  text-transform: uppercase;
  letter-spacing: clamp(1.5px, 0.5vw, 2.5px);
  color: ${ba.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  opacity: 0.9;
`,Bl=ga.p`
  font-size: clamp(0.85rem, 1.8vw, 0.98rem);
  line-height: clamp(1.6, 3vw, 1.8);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
`,Kl=()=>(0,za.jsx)(Fl,{children:vl.map(e=>(0,za.jsxs)(Wl,{children:[(0,za.jsx)(Ul,{children:e.value}),(0,za.jsx)(Hl,{children:e.label}),(0,za.jsx)(Bl,{children:e.description})]},e.id))}),Gl=ga.section`
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
`,Vl=ga.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: clamp(30px, 4vw, 50px);
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
`,Yl=(ga.button`
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
`,()=>(0,za.jsx)(Gl,{children:(0,za.jsx)(Vl,{children:El})})),ql=ga.section`
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
`,Ql=ga.h2`
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
`,Jl=ga.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: clamp(40px, 6vw, 60px);
  max-width: 600px;
  line-height: clamp(1.6, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
`,Xl=ga.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(25px, 4vw, 40px);
  width: 100%;
  margin-top: clamp(20px, 3vw, 30px);

  @media (max-width: ${wa.tablet}px) {
    grid-template-columns: 1fr;
  }
`,Zl=ga.a`
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
`,es=ga.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${ba.goldMain};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;

  ${Zl}:hover & {
    transform: scale(1.15) rotate(5deg);
  }
`,ts=ga.h3`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  color: ${ba.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
`,ns=ga.p`
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  line-height: clamp(1.5, 2.5vw, 1.7);
  font-weight: 400;
`,rs=()=>(0,za.jsxs)(ql,{children:[(0,za.jsx)(Ql,{children:zl.title}),(0,za.jsx)(Jl,{children:zl.description}),(0,za.jsx)(Xl,{children:zl.platforms.map(e=>{const t=ni.find(t=>t.label===e.name);return(0,za.jsxs)(Zl,{href:null===t||void 0===t?void 0:t.url,target:"_blank",rel:"noopener noreferrer",children:[(0,za.jsx)(es,{children:t&&(0,za.jsx)(t.icon,{})}),(0,za.jsx)(ts,{children:e.name}),(0,za.jsx)(ns,{children:e.description})]},e.id)})})]}),as=()=>(0,za.jsxs)(ul,{children:[(0,za.jsx)(Tl,{}),(0,za.jsx)(fl,{}),(0,za.jsxs)(dl,{children:[(0,za.jsx)(ml,{children:jl}),(0,za.jsx)(pl,{children:(0,za.jsx)(Nl,{})})]}),(0,za.jsx)(fl,{}),(0,za.jsxs)(dl,{children:[(0,za.jsx)(ml,{children:Sl}),(0,za.jsx)(pl,{style:{maxWidth:"1000px"},children:(0,za.jsx)(Kl,{})})]}),(0,za.jsx)(fl,{}),(0,za.jsxs)(dl,{children:[(0,za.jsx)(ml,{children:Cl}),(0,za.jsx)(pl,{children:(0,za.jsx)(Il,{})})]}),(0,za.jsx)(fl,{}),(0,za.jsx)(rs,{}),(0,za.jsx)(fl,{}),(0,za.jsx)(Yl,{})]}),is=ga.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,os=ga.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`,ls=ga.div`
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
`,ss=ga.h1`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-family: "Cormorant Garamond", serif;
  color: ${ba.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(0.5px, 0.5vw, 1px);
`,cs=ga.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.6;
`,us=ga.div`
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
`,ds=ga.div`
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
`,ps=ga.h3`
  color: ${ba.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  line-height: 1.4;
`,fs=ga.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
  transition: color 0.3s ease;

  ${ds}:hover & {
    color: rgba(255, 255, 255, 0.95);
  }
`,ms=ga.div`
  margin-top: clamp(60px, 10vw, 100px);
  text-align: center;
  padding-top: clamp(40px, 6vw, 60px);
  border-top: 1px solid rgba(212, 175, 55, 0.2);
`,hs=ga.button`
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
`,gs=ga.button`
  background: transparent;
  border: none;
  color: ${ba.goldMain};
  cursor: pointer;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: inherit;
  padding: 0;
  margin: 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${ba.goldHover};
  }
`,ys=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych."},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."},{id:4,question:"Czy za realizacj\u0119 projektu otrzymam faktur\u0119?",answer:"Tak. Za ka\u017cd\u0105 us\u0142ug\u0119 wystawiamy faktur\u0119 (bez VAT), kt\xf3r\u0105 otrzymasz na e-mail. Mo\u017cesz j\u0105 w ca\u0142o\u015bci wliczy\u0107 w koszty uzyskania przychodu \u2013 to najprostsze i najbezpieczniejsze rozwi\u0105zanie dla Twojego biznesu. Nie musisz martwi\u0107 si\u0119 o \u017cadne dodatkowe formalno\u015bci, a my zapewniamy Ci pe\u0142n\u0105 transparentno\u015b\u0107 i profesjonalizm w rozliczeniach."},{id:5,question:"Czemu na Allegro ceny us\u0142ug s\u0105 wy\u017csze?",answer:"Wy\u017csza cena na platformie Allegro wynika wy\u0142\u0105cznie z wysokich prowizji i op\u0142at transakcyjnych pobieranych przez operatora. Kontaktuj\u0105c si\u0119 z nami bezpo\u015brednio, omijasz te dodatkowe koszty i otrzymujesz najlepsz\u0105 mo\u017cliw\u0105 ofert\u0119 przy zachowaniu tej samej jako\u015bci i gwarancji. "},{id:6,question:"Co je\u015bli nie mam w\u0142asnych profesjonalnych zdj\u0119\u0107 lub tekst\xf3w?",answer:"Bez obaw, zajmiemy si\u0119 tym. Je\u015bli brakuje Ci fotografii, wygenerujemy dla Twojej marki unikalne grafiki AI, kt\xf3re idealnie oddadz\u0105 klimat Twojego biznesu. Pomo\u017cemy Ci te\u017c ubra\u0107 Twoje pomys\u0142y w profesjonalne s\u0142owa, aby strona od pocz\u0105tku budowa\u0142a Twoje zaufanie. "},{id:7,question:"Czy to autorskie projekty, czy gotowce z sieci?",answer:"Ka\u017cdy element naszej kolekcji stworzyli\u015bmy sami \u2013 od pierwszej linii kodu po ostatni detal wizualny. Nie u\u017cywamy WordPressa ani ci\u0119\u017ckich, powolnych kreator\xf3w stron. Wybieraj\u0105c nas, otrzymujesz unikalny produkt w technologii React.js, a nie masowy szablon, kt\xf3ry posiada co druga firma w Twojej bran\u017cy."},{id:8,question:"Czy b\u0119d\u0119 mie\u0107 pe\u0142n\u0105 kontrol\u0119 i dost\u0119p do strony?",answer:"Jak najbardziej. Przekazujemy Ci komplet hase\u0142 i dost\u0119p\xf3w do Twoich w\u0142asnych kont. Nasz kod jest czysty i uporz\u0105dkowany \u2013 je\u015bli kiedykolwiek zdecydujesz si\u0119 przekaza\u0107 stron\u0119 innemu informatykowi, odnajdzie si\u0119 on w strukturze bez problemu. Jeste\u015b w 100% niezale\u017cna."},{id:9,question:"Jak strona radzi sobie w wyszukiwarce Google (SEO)?",answer:'Wi\u0119kszo\u015b\u0107 stron to ci\u0119\u017ckie projekty na WordPressie, kt\xf3re przez nadmiar zb\u0119dnych wtyczek l\u0105duj\u0105 na ko\u0144cu wynik\xf3w. Nasze strony budujemy "na lekko", co sprawia, \u017ce s\u0105 b\u0142yskawiczne i faworyzowane przez Google. To fundament, kt\xf3ry pozwala realnie powalczy\u0107 o najwy\u017csze pozycje.'},{id:10,question:"Czy strona b\u0119dzie bezpieczna (certyfikat SSL)?",answer:'Tak. Obok adresu Twojej strony zawsze b\u0119dzie widoczna "zielona k\u0142\xf3dka". Certyfikat SSL masz w cenie, co gwarantuje szyfrowanie danych i brak ostrze\u017ce\u0144 w przegl\u0105darkach. Twoja witryna b\u0119dzie w pe\u0142ni bezpieczna dla odwiedzaj\u0105cych.'},{id:11,question:"Jak nawi\u0105za\u0107 z nami wsp\xf3\u0142prac\u0119?",answer:"Masz dwie proste drogi. Mo\u017cesz dokona\u0107 zakupu bezpo\u015brednio przez nasz profil na Allegro lub napisa\u0107 do nas wiadomo\u015b\u0107 e-mail. W odpowiedzi otrzymasz od nas kr\xf3tk\u0105 instrukcj\u0119 i ankiet\u0119, kt\xf3ra pomo\u017ce nam doprecyzowa\u0107 wygl\u0105d Twojej nowej strony. Wi\u0119cej szczeg\xf3\u0142\xf3w na temat ca\u0142ego procesu znajdziesz na naszej podstronie",cooperationLink:!0},{id:12,question:"Co je\u015bli nie mam gotowych tre\u015bci i nie wiem, co napisa\u0107?",answer:"To najcz\u0119stsza obawa, dlatego maksymalnie upro\u015bcili\u015bmy ten proces. Nie musisz by\u0107 pisarzem ani fotografem. Po zakupie otrzymasz od nas prost\u0105, interaktywn\u0105 ankiet\u0119, kt\xf3ra 'wyci\u0105gnie' od Ciebie najwa\u017cniejsze informacje o Twoim biznesie. Na ich podstawie przygotujemy profesjonalne teksty, a je\u015bli brakuje Ci zdj\u0119\u0107 \u2013 wygenerujemy dla Twojej marki unikalne grafiki AI. Nasza strona jest elastyczna: je\u015bli nie masz jeszcze cennika czy zespo\u0142u, po prostu ukryjemy te sekcje, a ca\u0142o\u015b\u0107 nadal b\u0119dzie wygl\u0105da\u0107 luksusowo i sp\xf3jnie. Wi\u0119cej informacji znajdziesz w sekcji",cooperationLink:!0}],xs={title:"Najcz\u0119stsze Pytania",subtitle:"Masz w\u0105tpliwo\u015bci? Znajd\u017a odpowied\u017a na pytania, kt\xf3re zadaj\u0105 nam nasi klienci"},ws={backLabel:"Powr\xf3t do strony g\u0142\xf3wnej"},bs=()=>{const e=fe();return(0,za.jsx)(is,{children:(0,za.jsxs)(os,{children:[(0,za.jsxs)(ls,{children:[(0,za.jsx)(ss,{children:xs.title}),(0,za.jsx)(cs,{children:xs.subtitle})]}),(0,za.jsx)(us,{children:ys.map((t,n)=>(0,za.jsxs)(ds,{style:{"--index":n},children:[(0,za.jsx)(ps,{children:t.question}),(0,za.jsxs)(fs,{children:[t.answer,t.cooperationLink&&(0,za.jsxs)(za.Fragment,{children:[" ",(0,za.jsx)(gs,{onClick:()=>e("/cooperation"),children:"Wsp\xf3\u0142praca"}),"."]})]})]},t.id))}),(0,za.jsx)(ms,{children:(0,za.jsx)(hs,{onClick:()=>e("/"),children:ws.backLabel})})]})})},vs=ga.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,ks=ga.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,zs=ga.div`
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
`,js=ga.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${ba.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,Ss=ga.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
`,Cs={hero:{title:"Wsp\xf3\u0142praca",subtitle:"Prosty proces, pe\u0142na transparentno\u015b\u0107, gwarancja spokojnego snu. Oto, jak budujemy Twoj\u0105 cyfrow\u0105 przysz\u0142o\u015b\u0107."},steps:[{id:1,number:"1",title:"Wyb\xf3r Drogi i Start",content:"Wsp\xf3\u0142prac\u0119 zaczynamy od formalno\u015bci, aby\u015b mog\u0142a spa\u0107 spokojnie. Masz dwie \u015bcie\u017cki:",options:[{label:"Bezpo\u015brednio:",description:"Piszesz do nas e-mail, ustalamy szczeg\xf3\u0142y, przesy\u0142amy dane do faktury (bez VAT) i po op\u0142aceniu ruszamy z kopyta."},{label:"Allegro:",description:"Kupujesz na aukcji, korzystasz z bezpiecznych p\u0142atno\u015bci platformy i automatycznie trafiasz do kolejki realizacji."}],note:"Wa\u017cne: Przyst\u0119pujemy do pracy natychmiast po zaksi\u0119gowaniu wp\u0142aty lub otrzymaniu potwierdzenia z Allegro."},{id:2,number:"2",title:"Strategia i Materia\u0142y",content:"Nie musisz by\u0107 techniczna. Przesy\u0142amy Ci interaktywn\u0105 ankiet\u0119, kt\xf3ra poprowadzi Ci\u0119 za r\u0119k\u0119.",sections:[{label:"Twoje Zadanie:",description:"Wybierasz sekcje, kt\xf3re maj\u0105 si\u0119 pojawi\u0107 (np. O nas, Portfolio, Cennik)."},{label:"Nasze Wsparcie:",description:"Je\u015bli nie masz tekst\xf3w \u2013 przygotujemy je. Je\u015bli brak Ci zdj\u0119\u0107 \u2013 wygenerujemy unikalne grafiki AI."},{label:"Domena:",description:"Podajesz 2-3 propozycje nazwy (np. twojanazwa.pl). My sprawdzamy dost\u0119pno\u015b\u0107 i rejestrujemy t\u0119 woln\u0105."}]},{id:3,number:"3",title:"Realizacja: 48h Roboczych",content:"Tutaj dzieje si\u0119 magia. Kodujemy Twoj\u0105 stron\u0119 w czystym React.js.",details:[{label:"Czas:",description:"Standardowy czas realizacji to 48 godzin roboczych."},{label:"Zasada Wypocz\u0119tego Eksperta:",description:"Liczymy tylko dni robocze (poniedzia\u0142ek \u2013 pi\u0105tek). Weekendy i \u015bwi\u0119ta to czas na regeneracj\u0119, bo tylko wypocz\u0119ty programista gwarantuje kod bez b\u0142\u0119d\xf3w i design na najwy\u017cszym poziomie."},{label:"Technologia:",description:"Konfigurujemy darmowy serwer (GitHub Pages) i spinamy wszystko z Twoj\u0105 now\u0105 domen\u0105."}]},{id:4,number:"4",title:'Przekazanie "Kluczy do Biznesu"',content:"Twoja strona o\u017cywa. Ale na tym nie ko\u0144czymy:",deliverables:["Otrzymujesz od nas komplet hase\u0142 i dost\u0119p\xf3w do konta serwera i domeny.","Dostajesz prost\u0105 instrukcj\u0119, co zrobi\u0107 za rok, \u017ceby przed\u0142u\u017cy\u0107 domen\u0119 (koszt ok. 80 z\u0142 \u2013 bez naszych mar\u017c).","Strona jest Twoj\u0105 w\u0142asno\u015bci\u0105 na zawsze. Mo\u017cesz j\u0105 rozwija\u0107, przenosi\u0107 i modyfikowa\u0107 bez \u017cadnych ogranicze\u0144."]}],guarantee:{title:'Pakiet "Spokojna G\u0142owa"',subtitle:"Twoja Gwarancja",description:"Wiemy, \u017ce biznes si\u0119 zmienia. Numer telefonu mo\u017ce ulec zmianie, cennik mo\u017ce podskoczy\u0107. Dlatego nasza wsp\xf3\u0142praca nie ko\u0144czy si\u0119 na oddaniu strony:",benefits:[{icon:"3x",title:"3 Lata Opieki",description:"Masz u nas 3 darmowe pakiety poprawek do wykorzystania przez 36 miesi\u0119cy."},{icon:"\u26a1",title:"B\u0142yskawiczny Serwis",description:"Potrzebujesz zmiany? Piszesz e-mail, a my wprowadzamy poprawk\u0119 w kodzie."},{icon:"\ud83d\udcb0",title:"Uczciwe Stawki",description:"Po wykorzystaniu darmowych pakiet\xf3w, drobne zmiany to koszt rz\u0119du 10-50 z\u0142. Bez abonament\xf3w, bez naci\u0105gania."}]},materials:{title:"Jak Przygotowa\u0107 Materia\u0142y?",subtitle:"Twoja Checklista",intro:"Nie musisz by\u0107 copywriterem ani fotografem. Nasza strona jest elastyczna \u2013 dopasuje si\u0119 do tego, co masz. Je\u015bli brakuje Ci jakiej\u015b sekcji (np. cennika czy zespo\u0142u), po prostu j\u0105 ukryjemy, a layout nadal b\u0119dzie wygl\u0105da\u0142 perfekcyjnie.",sections:[{icon:"\ud83d\udccb",title:"Co Warto Przygotowa\u0107?",items:[{label:"Fundament (Hero & Domena)",points:["Wymy\u015bl chwytliwe has\u0142o (np. 'Twoje wspomnienia w najlepszym \u015bwietle').","Podaj 2-3 propozycje adresu strony (np. mojafirma.pl). Pami\u0119taj: kr\xf3tko i \u0142atwo do podyktowania. Unikaj nazw zastrze\u017conych marek!"]},{label:"To\u017csamo\u015b\u0107 (O nas & Zesp\xf3\u0142)",points:["Napisz kilka zda\u0144 o swojej pasji i tym, co Ci\u0119 wyr\xf3\u017cnia.","Poka\u017c 'ludzk\u0105 twarz' biznesu \u2013 prze\u015blij zdj\u0119cie przy pracy. Klienci kupuj\u0105 oczami, ale ufaj\u0105 ludziom, kt\xf3rych widz\u0105."]},{label:"Twoje Sukcesy (Statystyki & Portfolio)",points:["Pochwal si\u0119 liczbami (lata pracy, zadowoleni klienci) lub kluczowymi zaletami.","Wybierz do 12 najlepszych zdj\u0119\u0107 do galerii. Dzielimy je na kategorie (np. Biznes, Sesje, Projekty)."]},{label:"Konkrety (Us\u0142ugi & Cennik)",points:["Opisz kr\xf3tko do 10 us\u0142ug.","Podaj ceny lub pakiety. Je\u015bli wyceniasz indywidualnie \u2013 napiszemy o tym!"]},{label:"Kontakt & Social Media",points:["Przygotuj e-mail, telefon i linki do profili (Instagram, Facebook, TikTok itd.).","Sprawimy, \u017ce klient skontaktuje si\u0119 z Tob\u0105 jednym klikni\u0119ciem."]}]},{icon:"\ud83d\udc8e",title:"Nasze Wsparcie Kreatywne",highlight:!0,items:[{label:"Teksty",points:["Na podstawie kr\xf3tkiej ankiety ubierzemy Twoje my\u015bli w profesjonalne s\u0142owa."]},{label:"Grafiki AI",points:["Je\u015bli nie masz w\u0142asnych fotografii do t\u0142a lub sekcji 'O nas', wygenerujemy dla Ciebie unikalne, wysokiej jako\u015bci grafiki AI."]}]},{icon:"\u26a0\ufe0f",title:"Wa\u017cne Informacje Techniczne",items:[{label:"Szybko\u015b\u0107 Ponad Wszystko",points:["Limity zdj\u0119\u0107 (np. do 12 w galerii) stosujemy celowo. Dzi\u0119ki temu Twoja strona \u0142aduje si\u0119 b\u0142yskawicznie na ka\u017cdym smartfonie. W sieci: mniej znaczy wi\u0119cej!"]},{label:"Elastyczno\u015b\u0107",points:["Niezale\u017cnie od tego, czy wybierzesz 5, czy 10 sekcji, my zadbamy o zachowanie idealnych proporcji i estetyki."]},{label:"48h Roboczych",points:["Nasz zegar rusza, gdy otrzymamy od Ciebie komplet materia\u0142\xf3w. Pracujemy w dni robocze, aby dostarczy\u0107 Ci kod najwy\u017cszej jako\u015bci."]}]}]},cta:{primary:"Zacznij Wsp\xf3\u0142prac\u0119",secondary:"Wr\xf3\u0107 do Pyta\u0144"}},Es=()=>(0,za.jsxs)(zs,{children:[(0,za.jsx)(js,{children:Cs.hero.title}),(0,za.jsx)(Ss,{children:Cs.hero.subtitle})]}),Ts=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(60px, 10vw, 100px);
  margin-bottom: clamp(80px, 12vw, 120px);
`,Ps=ga.div`
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
`,$s=ga.div`
  display: flex;
  align-items: center;
  gap: clamp(20px, 3vw, 30px);
`,_s=ga.div`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: ${ba.goldMain};
  line-height: 1;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  min-width: 60px;
  text-align: center;
  background: rgba(212, 175, 55, 0.1);
  padding: clamp(15px, 2vw, 25px);
  border-radius: 10px;
  border: 1px solid rgba(212, 175, 55, 0.2);
`,Ns=ga.div`
  padding: clamp(20px, 3vw, 30px);
  background: rgba(212, 175, 55, 0.05);
  border-radius: 10px;
  border-left: 3px solid ${ba.goldMain};
  padding-left: clamp(25px, 4vw, 40px);
`,Os=ga.h2`
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  color: ${ba.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
  flex: 1;
`,Rs=ga.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  margin: 0 0 clamp(15px, 2vw, 20px) 0;
`,Ls=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`,Ms=ga.div`
  padding: clamp(15px, 2.5vw, 20px);
  background: rgba(212, 175, 55, 0.08);
  border-radius: 8px;
  border-left: 3px solid ${ba.goldMain};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    transform: translateX(5px);
  }
`,As=ga.h4`
  color: ${ba.goldMain};
  margin: 0 0 8px 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
`,Ds=ga.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 0.95rem);
  line-height: 1.6;
`,Is=ga.div`
  margin-top: clamp(20px, 3vw, 30px);
  padding: clamp(15px, 2.5vw, 25px);
  background: rgba(212, 175, 55, 0.05);
  border-radius: 8px;
  border-top: 2px solid ${ba.goldMain};
`,Fs=ga.h5`
  color: ${ba.goldMain};
  margin: 0 0 8px 0;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`,Ws=ga.p`
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  line-height: 1.6;
`,Us=ga.ul`
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
      color: ${ba.goldMain};
      font-weight: 700;
    }
  }
`,Hs=()=>(0,za.jsx)(Ts,{children:Cs.steps.map((e,t)=>(0,za.jsxs)(Ps,{delay:.1*t,children:[(0,za.jsxs)($s,{children:[(0,za.jsx)(_s,{children:e.number}),(0,za.jsx)(Os,{children:e.title})]}),(0,za.jsxs)(Ns,{children:[(0,za.jsx)(Rs,{children:e.content}),e.options&&(0,za.jsxs)(za.Fragment,{children:[(0,za.jsx)(Ls,{children:e.options.map((e,t)=>(0,za.jsxs)(Ms,{children:[(0,za.jsx)(As,{children:e.label}),(0,za.jsx)(Ds,{children:e.description})]},t))}),e.note&&(0,za.jsxs)(Is,{children:[(0,za.jsx)(Fs,{children:"Wa\u017cne"}),(0,za.jsx)(Ws,{children:e.note})]})]}),e.sections&&(0,za.jsx)(Ls,{children:e.sections.map((e,t)=>(0,za.jsxs)(Ms,{children:[(0,za.jsx)(As,{children:e.label}),(0,za.jsx)(Ds,{children:e.description})]},t))}),e.details&&(0,za.jsx)(Ls,{children:e.details.map((e,t)=>(0,za.jsxs)(Ms,{children:[(0,za.jsx)(As,{children:e.label}),(0,za.jsx)(Ds,{children:e.description})]},t))}),e.deliverables&&(0,za.jsx)(Us,{children:e.deliverables.map((e,t)=>(0,za.jsx)("li",{children:e},t))})]})]},e.id))}),Bs=ga.section`
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
`,Ks=ga.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${ba.goldMain};
  margin: 0 0 10px 0;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`,Gs=ga.p`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`,Vs=ga.p`
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin: 0 0 clamp(40px, 6vw, 60px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`,Ys=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 6vw, 60px);
`,qs=ga.div`
  padding: clamp(30px, 4vw, 40px);
  background: rgba(
    255,
    255,
    255,
    ${e=>e.highlight?"0.06":"0.02"}
  );
  border: 1px solid
    rgba(212, 175, 55, ${e=>e.highlight?"0.3":"0.15"});
  border-left: 4px solid ${ba.goldMain};
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
`,Qs=ga.div`
  display: flex;
  align-items: center;
  gap: clamp(15px, 2vw, 25px);
  margin-bottom: clamp(20px, 3vw, 30px);
`,Js=ga.span`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ba.goldMain};
`,Xs=ga.h3`
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  color: ${ba.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,Zs=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`,ec=ga.div`
  padding: clamp(15px, 2.5vw, 20px);
  background: rgba(212, 175, 55, 0.04);
  border-radius: 8px;
  border-left: 2px solid rgba(212, 175, 55, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.08);
    border-left-color: ${ba.goldMain};
  }
`,tc=ga.h4`
  color: ${ba.goldMain};
  margin: 0 0 clamp(10px, 1.5vw, 15px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
`,nc=ga.ul`
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
      color: ${ba.goldMain};
      font-weight: 700;
      font-size: 1.1em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`,rc=()=>(0,za.jsxs)(Bs,{children:[(0,za.jsx)(Ks,{children:Cs.materials.title}),(0,za.jsx)(Gs,{children:Cs.materials.subtitle}),(0,za.jsx)(Vs,{children:Cs.materials.intro}),(0,za.jsx)(Ys,{children:Cs.materials.sections.map((e,t)=>(0,za.jsxs)(qs,{highlight:e.highlight,children:[(0,za.jsxs)(Qs,{children:[(0,za.jsx)(Js,{children:e.icon}),(0,za.jsx)(Xs,{children:e.title})]}),(0,za.jsx)(Zs,{children:e.items.map((e,t)=>(0,za.jsxs)(ec,{children:[(0,za.jsx)(tc,{children:e.label}),(0,za.jsx)(nc,{children:e.points.map((e,t)=>(0,za.jsx)("li",{children:e},t))})]},t))})]},t))})]}),ac=ga.section`
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
`,ic=ga.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${ba.goldMain};
  margin: 0 0 10px 0;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`,oc=ga.p`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`,lc=ga.p`
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin: 0 0 clamp(40px, 6vw, 60px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,sc=ga.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(30px, 4vw, 50px);
`,cc=ga.div`
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
`,uc=ga.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${ba.goldMain};
  margin-bottom: clamp(15px, 2vw, 25px);
`,dc=ga.h3`
  color: ${ba.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,pc=ga.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  line-height: 1.7;
`,fc=()=>(0,za.jsxs)(ac,{children:[(0,za.jsx)(ic,{children:Cs.guarantee.title}),(0,za.jsx)(oc,{children:Cs.guarantee.subtitle}),(0,za.jsx)(lc,{children:Cs.guarantee.description}),(0,za.jsx)(sc,{children:Cs.guarantee.benefits.map((e,t)=>(0,za.jsxs)(cc,{children:[(0,za.jsx)(uc,{children:e.icon}),(0,za.jsx)(dc,{children:e.title}),(0,za.jsx)(pc,{children:e.description})]},t))})]}),mc=ga.div`
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
`,hc=ga.button`
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
`,gc=ga(hc)`
  background: linear-gradient(
    135deg,
    ${ba.goldMain} 0%,
    #f1d592 100%
  );
  color: ${ba.deepBlack};

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
`,yc=(ga(hc)`
  background: transparent;
  color: ${ba.goldMain};
  border: 2px solid ${ba.goldMain};

  &:hover {
    background: rgba(212, 175, 55, 0.1);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
  }

  &:active {
    opacity: 0.8;
  }
`,()=>{const e=fe();return(0,za.jsx)(mc,{children:(0,za.jsx)(gc,{onClick:()=>e("/"),children:Cs.cta.primary})})}),xc=()=>(0,za.jsx)(vs,{children:(0,za.jsxs)(ks,{children:[(0,za.jsx)(Es,{}),(0,za.jsx)(Hs,{}),(0,za.jsx)(rc,{}),(0,za.jsx)(fc,{}),(0,za.jsx)(yc,{})]})}),wc=ga.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,bc=ga.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,vc=ga.div`
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
`,kc=ga.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${ba.white};
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
`,jc=(ga.section`
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
  grid-auto-rows: 1fr;
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
`),Sc=ga.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  height: 100%;
`,Cc=ga.div`
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
      ${ba.goldMain},
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
    border-color: ${ba.goldMain};
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
`,Ec=ga.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${Cc}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`,Tc=ga.div`
  padding: clamp(25px, 4vw, 35px);
  display: flex;
  flex-direction: column;
  flex: 1;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
`,Pc=ga.h3`
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  color: ${ba.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`,$c=ga.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  line-height: 1.7;
  margin: 0 0 auto 0;
  flex: 1;
  font-weight: 300;
`,_c=ga.div`
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
`,Nc=ga.span`
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  color: ${ba.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
`,Oc=ga.button`
  padding: clamp(10px, 2vw, 14px) clamp(25px, 4vw, 40px);
  background: linear-gradient(
    135deg,
    ${ba.goldMain} 0%,
    #f1d592 100%
  );
  color: ${ba.deepBlack};
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
`,Rc=[{id:1,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:2,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:3,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:4,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:5,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:6,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]}],Lc="Nasze Projekty",Mc="Odkryj gotowe szablony stron,kt\xf3re mog\u0105 transformowa\u0107 Twoj\u0105 mark\u0119",Ac="\u2190 Wr\xf3\u0107 do ofert",Dc="Preview szablonu",Ic="O szablonie",Fc="Szablon zawiera:",Wc=()=>(0,za.jsx)(jc,{children:Rc.map(e=>(0,za.jsx)(Sc,{href:`/klara-queen/offer/${e.id}`,target:"_blank",rel:"noopener noreferrer",children:(0,za.jsxs)(Cc,{children:[(0,za.jsx)(Ec,{src:e.image,alt:e.title}),(0,za.jsxs)(Tc,{children:[(0,za.jsx)(Pc,{children:e.title}),(0,za.jsx)($c,{children:e.shortDescription}),(0,za.jsxs)(_c,{children:[(0,za.jsx)(Nc,{children:e.price}),(0,za.jsx)(Oc,{children:"Szczeg\xf3\u0142y"})]})]})]})},e.id))}),Uc=ga.div`
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
`,Hc=ga.button`
  background: transparent;
  border: 2px solid ${ba.goldMain};
  color: ${ba.goldMain};
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
`,Bc=ga.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 7vw, 70px);
`,Kc=(ga.div`
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
  color: ${ba.goldMain};
`),Gc=ga.section`
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
`,Vc=ga.div`
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
      ${ba.goldMain} 50%,
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
`,Yc=ga.h1`
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: ${ba.goldMain};
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
`,qc=ga.p`
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
    background: ${ba.goldMain};
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
`,Qc=ga.div`
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
      ${ba.goldMain} 0%,
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
`,Jc=ga.span`
  font-size: clamp(1.3rem, 2.8vw, 2rem);
  font-weight: 700;
  color: ${ba.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 821px) {
    font-size: clamp(0.95rem, 2vw, 1.3rem);
    letter-spacing: 0.6px;
  }
`,Xc=(ga.img`
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
`),Zc=ga.div`
  position: relative;
  display: block;
  margin: 0 auto clamp(30px, 5vw, 50px) auto;
  width: fit-content;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
`,eu=ga.div`
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
`,tu=ga.span`
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
`,nu=ga.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: rgba(212, 175, 55, 0.9);
  border: 2px solid ${ba.goldMain};
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
    background: ${ba.goldMain};
    transform: scale(1.1);
  }

  @media (max-width: 821px) {
    width: 35px;
    height: 35px;
    bottom: 12px;
    right: 12px;
    font-size: 1rem;
  }
`,ru=ga.img`
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
`,au=ga.div`
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
`,iu=ga.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid
    ${e=>e.isActive?ba.goldMain:"rgba(212, 175, 55, 0.2)"};
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${e=>e.isActive?1:.6};
  box-shadow: ${e=>e.isActive?"0 8px 20px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.2)":"0 4px 12px rgba(0, 0, 0, 0.2)"};
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;

  &:hover {
    border-color: ${ba.goldMain};
    opacity: 1;
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
  }

  @media (max-width: 821px) {
    height: 55px;
    border-radius: 8px;
    border: 2px solid
      ${e=>e.isActive?ba.goldMain:"rgba(212, 175, 55, 0.2)"};
    box-shadow: ${e=>e.isActive?"0 6px 16px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(212, 175, 55, 0.2)":"0 3px 10px rgba(0, 0, 0, 0.25), inset 0 0.5px 0 rgba(212, 175, 55, 0.05)"};

    &:hover {
      transform: scale(1.08) translateY(-2px);
      box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
    }
  }
`,ou=ga.span`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: ${ba.goldMain};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.3);
`,lu=ga.div`
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
`,su=ga.div`
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
`,cu=ga.img`
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
`,uu=ga.span`
  position: fixed;
  top: 120px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: ${ba.goldMain};
  padding: 10px 18px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.5);
  z-index: 999999;
`,du=ga.button`
  position: absolute;
  top: 50%;
  ${e=>e.left?"left: 20px;":"right: 20px;"}
  transform: translateY(-50%);
  background: rgba(212, 175, 55, 0.2);
  border: 2px solid ${ba.goldMain};
  color: ${ba.goldMain};
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
`,pu=ga.button`
  position: fixed;
  top: 120px;
  right: 20px;
  background: rgba(212, 175, 55, 0.2);
  border: 2px solid ${ba.goldMain};
  color: ${ba.goldMain};
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
`,fu=e=>{let{images:t,title:n}=e;const[a,i]=(0,r.useState)(0),[o,l]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!o)return;const e=e=>{"ArrowLeft"===e.key?i(e=>(e-1+t.length)%t.length):"ArrowRight"===e.key?i(e=>(e+1)%t.length):"Escape"===e.key&&l(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o,t.length]),t&&0!==t.length?(0,za.jsxs)(za.Fragment,{children:[(0,za.jsxs)(Xc,{children:[(0,za.jsxs)(Zc,{onContextMenu:e=>e.preventDefault(),onTouchStart:e=>{e.touches.length>1&&e.preventDefault()},children:[(0,za.jsx)(ru,{src:t[a],alt:`${n} - zdj\u0119cie ${a+1}`,onClick:()=>l(!0),onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault(),style:{cursor:"pointer",userSelect:"none"}}),(0,za.jsx)(eu,{children:(0,za.jsx)(tu,{children:"www.studioklara.pl"})}),(0,za.jsx)(nu,{onClick:()=>l(!0),children:"\u26f6"})]}),(0,za.jsx)(au,{children:t.map((e,t)=>(0,za.jsx)(iu,{src:e,alt:`Miniatura ${t+1}`,isActive:a===t,onClick:()=>i(t),onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault()},t))}),(0,za.jsxs)(ou,{children:[a+1," / ",t.length]})]}),o&&(0,za.jsxs)(lu,{onClick:()=>l(!1),children:[(0,za.jsxs)(su,{onClick:e=>e.stopPropagation(),children:[(0,za.jsxs)(Zc,{style:{margin:0,width:"100%",height:"100%",maxHeight:"none"},children:[(0,za.jsx)(cu,{src:t[a],alt:`${n} - ${a+1}`,onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault()}),(0,za.jsx)(eu,{style:{opacity:.35},children:(0,za.jsx)(tu,{children:"www.studioklara.pl"})})]}),(0,za.jsxs)(uu,{children:[a+1," / ",t.length]}),(0,za.jsx)(du,{left:!0,onClick:()=>i(e=>(e-1+t.length)%t.length),children:"\u2039"}),(0,za.jsx)(du,{onClick:()=>i(e=>(e+1)%t.length),children:"\u203a"})]}),(0,za.jsx)(pu,{onClick:()=>l(!1),children:"\u2715"})]})]}):null},mu=e=>{let{title:t,subtitle:n,price:r,images:a}=e;return(0,za.jsxs)(Gc,{children:[(0,za.jsxs)(Vc,{children:[(0,za.jsx)(Yc,{children:t}),(0,za.jsx)(qc,{children:n}),r&&(0,za.jsx)(Qc,{children:(0,za.jsx)(Jc,{children:r})})]}),(0,za.jsx)(fu,{images:a,title:t})]})},hu=ga.section`
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
`,gu=ga.h2`
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  color: ${ba.goldMain};
  margin: 0 0 clamp(20px, 3vw, 35px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-style: italic;
`,yu=(ga.p`
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

  ${gu} {
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    margin: 0 0 clamp(15px, 2vw, 20px) 0;
  }
`),xu=ga.div`
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
`,wu=ga.iframe`
  display: block;
  border-radius: 13px;
  width: 100%;
  height: 100%;
  border: none;
`,bu=e=>{let{title:t,youtubeUrl:n}=e;return(0,za.jsxs)(yu,{children:[(0,za.jsx)(gu,{children:t}),(0,za.jsx)(xu,{children:(0,za.jsx)(wu,{src:n,title:t,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})},vu=ga.section`
  animation: fadeInUp 0.6s ease-out 0.4s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(30px, 4.5vw, 45px);
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.1);
`,ku=ga.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(20px, 3vw, 30px);
`,zu=ga.li`
  display: flex;
  align-items: flex-start;
  gap: clamp(15px, 3vw, 20px);
  padding: clamp(20px, 3vw, 28px);
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.08) 0%,
    rgba(212, 175, 55, 0.03) 100%
  );
  border-left: 4px solid ${ba.goldMain};
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
`,ju=ga.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: clamp(30px, 4vw, 40px);
  width: clamp(30px, 4vw, 40px);
  height: clamp(30px, 4vw, 40px);
  background: ${ba.goldMain};
  color: ${ba.deepBlack};
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.2em;
  flex-shrink: 0;
`,Su=ga.span`
  flex: 1;
`,Cu=e=>{let{title:t,features:n}=e;return(0,za.jsxs)(vu,{children:[(0,za.jsx)(gu,{children:t}),(0,za.jsx)(ku,{children:n.map((e,t)=>(0,za.jsxs)(zu,{children:[(0,za.jsx)(ju,{children:"\u2713"}),(0,za.jsx)(Su,{children:e})]},t))})]})},Eu=ga.section`
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
      ${ba.goldMain},
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
`,Tu=ga.h3`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${ba.goldMain};
  margin: 0 0 clamp(35px, 6vw, 50px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
  line-height: 1.3;
`,Pu=ga.div`
  display: flex;
  gap: clamp(15px, 3vw, 30px);
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,$u=ga.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: clamp(14px, 3vw, 18px) clamp(35px, 6vw, 60px);
  background: linear-gradient(
    135deg,
    ${ba.goldMain} 0%,
    #f1d592 100%
  );
  color: ${ba.deepBlack};
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
`,_u=ga($u)`
  background: transparent;
  color: ${ba.goldMain};
  border: 2px solid ${ba.goldMain};
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.15);

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.3);
  }
`,Nu=(ga.div`
  text-align: center;
  padding: clamp(40px, 8vw, 80px);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${ba.goldMain};
`,e=>{var t;let{title:n}=e;const r=null===(t=ni.find(e=>"Allegro"===e.label))||void 0===t?void 0:t.url;return(0,za.jsxs)(Eu,{children:[(0,za.jsx)(Tu,{children:"Interesuje Ci\u0119 ten szablon?"}),(0,za.jsxs)(Pu,{children:[(0,za.jsx)($u,{href:`mailto:${di}?subject=Zainteresowanie szablonk\u0105: ${n}`,children:"Napisz email"}),(0,za.jsx)(_u,{href:r,target:"_blank",rel:"noopener noreferrer",children:"Zakup Allegro"})]})]})}),Ou=e=>{let{offerId:t}=e;const n=fe(),r=Rc.find(e=>e.id===t);return r?(0,za.jsxs)(Uc,{children:[(0,za.jsx)(Hc,{onClick:()=>n(-1),children:Ac}),(0,za.jsx)(mu,{title:r.title,subtitle:r.shortDescription,price:r.price,images:r.images}),(0,za.jsxs)(Bc,{children:[(0,za.jsx)(bu,{title:Dc,youtubeUrl:r.youtubeUrl}),(0,za.jsx)(hu,{title:Ic,description:r.fullDescription}),(0,za.jsx)(Cu,{title:Fc,features:r.features}),(0,za.jsx)(Nu,{title:r.title})]})]}):(0,za.jsx)(Uc,{children:(0,za.jsx)(Kc,{children:"Szablon nie znaleziony"})})},Ru=()=>{const{id:e}=me();return e?(0,za.jsx)(Ou,{offerId:parseInt(e)}):(0,za.jsx)(wc,{children:(0,za.jsxs)(bc,{children:[(0,za.jsxs)(vc,{children:[(0,za.jsx)(kc,{children:Lc}),(0,za.jsx)(zc,{children:Mc})]}),(0,za.jsx)(Wc,{})]})})},Lu=ga.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,Mu=ga.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,Au=ga.div`
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
`,Du=ga.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${ba.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,Iu=ga.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
`,Fu=ga.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: clamp(20px, 4vw, 40px);
  margin-top: clamp(40px, 8vw, 80px);

  @media (max-width: 821px) {
    grid-template-columns: 1fr;
  }
`,Wu=ga.div`
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
`,Uu=ga.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
`,Hu=ga.div`
  padding: clamp(20px, 4vw, 30px);
  display: flex;
  flex-direction: column;
  flex: 1;
`,Bu=ga.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
`,Ku=ga.h3`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: ${ba.white};
  margin: 0 0 12px 0;
  font-weight: 600;
  line-height: 1.4;
  font-family: "Cormorant Garamond", serif;
`,Gu=ga.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 16px;
`,Vu=ga.span`
  font-size: 0.9rem;
  color: ${ba.gold};
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  ${Wu}:hover & {
    gap: 12px;
  }

  &::after {
    content: "→";
    transition: transform 0.3s ease;
  }

  ${Wu}:hover &::after {
    transform: translateX(4px);
  }
`,Yu=[{id:"proces-48h",title:"Jak oddajemy gotowy projekt w 48h roboczych? Poznaj nasz proces.",excerpt:"48 godzin roboczych \u2013 tyle potrzebujemy, by Twoja wizja sta\u0142a si\u0119 rzeczywisto\u015bci\u0105. Jak to robimy bez straty na jako\u015bci? Zaufanie, przygotowanie i pe\u0142ne skupienie.",date:"30 marca 2026",image:n(682)},{id:"unikalne-grafiki-ai",title:"Nowo\u015b\u0107: Unikalne grafiki AI w cenie ka\u017cdej strony",excerpt:"Koniec z nudnymi zdj\u0119ciami z darmowych bank\xf3w, kt\xf3re ma ka\u017cda konkurentka. Od teraz tworzymy dla Ciebie klimat premium za pomoc\u0105 Sztucznej Inteligencji \u2013 bez dodatkowych koszt\xf3w.",date:"25 marca 2026",image:n(430)},{id:"czysty-kod-react",title:"Dlaczego React wygrywa z WordPressem w 2026 roku?",excerpt:"Wielu klient\xf3w pyta nas: 'Dlaczego nie WordPress?'. Odpowied\u017a jest prosta: szybko\u015b\u0107, bezpiecze\u0144stwo i kontrola. Przeczytaj, dlaczego rezygnacja z ci\u0119\u017ckich wtyczek na rzecz czystego kodu to najlepsza inwestycja w przysz\u0142o\u015b\u0107 Twojej marki.",date:"20 marca 2026",image:n(410)},{id:"startujemy-z-aktualnosciami",title:"Startujemy z Aktualno\u015bciami \u2013 Sekcja tworzona na pro\u015bb\u0119 klient\xf3w",excerpt:"Po miesi\u0105cach obserwacji trendu w bran\u017cy i s\u0142uchaj\u0105c feedbacku naszych klient\xf3w, postanowili\u015bmy uruchomi\u0107 oficjaln\u0105 sekcj\u0119 Aktualno\u015bci. Dowiedz si\u0119, dlaczego to dla nas milestone, a dla Ciebie okazja do bycia na bie\u017c\u0105co.",date:"30 stycznia 2026",image:n(217)}];const qu=function(){return(0,za.jsx)(Lu,{children:(0,za.jsxs)(Mu,{children:[(0,za.jsxs)(Au,{children:[(0,za.jsx)(Du,{children:"Aktualno\u015bci"}),(0,za.jsx)(Iu,{children:"B\u0105d\u017a na bie\u017c\u0105co z najnowszymi wpisami z naszego bloga. Dzielimy si\u0119 wiedz\u0105 o technologii, designie i procesie tworzenia luksusowych do\u015bwiadcze\u0144 cyfrowych."})]}),(0,za.jsx)(Fu,{children:Yu.map(e=>(0,za.jsx)(Wu,{children:(0,za.jsxs)(yt,{to:`/blog/${e.id}`,children:[(0,za.jsx)(Uu,{src:e.image,alt:e.title}),(0,za.jsxs)(Hu,{children:[(0,za.jsx)(Bu,{children:e.date}),(0,za.jsx)(Ku,{children:e.title}),(0,za.jsx)(Gu,{children:e.excerpt}),(0,za.jsx)(Vu,{children:"Czytaj wi\u0119cej"})]})]})},e.id))})]})})},Qu=ga.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,Ju=ga.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,Xu=ga.div`
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
`,Zu=ga.h1`
  font-size: clamp(2rem, 6vw, 3rem);
  font-family: "Cormorant Garamond", serif;
  color: ${ba.white};
  margin: 0 0 20px 0;
  font-weight: 700;
  line-height: 1.3;
`,ed=ga.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-weight: 500;
  letter-spacing: 1px;
`,td=ga.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: clamp(40px, 8vw, 60px);
  display: block;
`,nd=ga.div`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  line-height: 1.8;
  letter-spacing: 0.3px;

  h2 {
    font-size: clamp(1.4rem, 3vw, 1.8rem);
    font-family: "Cormorant Garamond", serif;
    color: ${ba.white};
    margin: clamp(40px, 6vw, 60px) 0 20px 0;
    font-weight: 600;
    line-height: 1.3;
  }

  h3 {
    font-size: clamp(1.1rem, 2.2vw, 1.4rem);
    color: ${ba.white};
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
    color: ${ba.gold};
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
      color: ${ba.gold};
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
    color: ${ba.gold};
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  blockquote {
    border-left: 4px solid ${ba.gold};
    padding-left: 20px;
    margin: 30px 0;
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
  }
`,rd=ga.div`
  margin-top: clamp(60px, 10vw, 100px);
  padding-top: clamp(40px, 6vw, 60px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,ad=ga.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${ba.gold};
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
`;const id=function(e){let{article:t,children:n}=e;return(0,za.jsx)(Qu,{children:(0,za.jsxs)(Ju,{children:[(0,za.jsxs)(Xu,{children:[(0,za.jsx)(Zu,{children:t.title}),(0,za.jsx)(ed,{children:t.date})]}),(0,za.jsx)(td,{src:t.image,alt:t.title}),(0,za.jsx)(nd,{children:n}),(0,za.jsx)(rd,{children:(0,za.jsx)(yt,{to:"/blog",children:(0,za.jsx)(ad,{children:"Wr\xf3\u0107 do aktualno\u015bci"})})})]})})};const od=function(){const e=Yu.find(e=>"startujemy-z-aktualnosciami"===e.id);return(0,za.jsxs)(id,{article:e,children:[(0,za.jsx)("h1",{children:"Startujemy z Aktualno\u015bciami \u2013 Sekcja tworzona z my\u015bl\u0105 o Was"}),(0,za.jsx)("p",{children:(0,za.jsx)("strong",{children:"30 stycznia 2026"})}),(0,za.jsx)("p",{children:"Kilka miesi\u0119cy temu zadali\u015bmy sobie kluczowe pytanie: \u201eCzego naprawd\u0119 chc\u0105 dowiedzie\u0107 si\u0119 nasi klienci?\u201d. Odpowied\u017a by\u0142a jednoznaczna \u2013 szukacie rzetelnej wiedzy o trendach w webdesignie, technologiach, kt\xf3rych u\u017cywamy, oraz wgl\u0105du w procesy, kt\xf3re stoj\u0105 za sukcesem Waszych marek."}),(0,za.jsx)("h2",{children:"Dlaczego zaczynamy w\u0142a\u015bnie teraz?"}),(0,za.jsx)("p",{children:"Studio Klara Queen od pocz\u0105tku stawia\u0142o na jako\u015b\u0107. Przez d\u0142ugi czas s\u0105dzili\u015bmy, \u017ce najlepiej przem\xf3wi za nas portfolio i opinie zadowolonych klient\xf3w. To prawda, ale w dzisiejszych czasach to tylko cz\u0119\u015b\u0107 historii."}),(0,za.jsxs)("p",{children:["W 2026 roku obecno\u015b\u0107 w sieci to co\u015b wi\u0119cej ni\u017c pi\u0119kna witryna."," ",(0,za.jsx)("strong",{children:"To nieustanny dialog"}),". To pokazywanie swojej ekspertyzy w praktyce, edukacja i autentyczne dzielenie si\u0119 wiedz\u0105 oraz procesem tw\xf3rczym."]}),(0,za.jsx)("p",{children:"Nasi klienci regularnie zadaj\u0105 nam pytania:"}),(0,za.jsxs)("ul",{children:[(0,za.jsx)("li",{children:"\u201eIle czasu realnie trwa stworzenie profesjonalnej strony?\u201d"}),(0,za.jsx)("li",{children:"\u201eDlaczego stawiacie na React, a nie na inne rozwi\u0105zania?\u201d"}),(0,za.jsx)("li",{children:"\u201eJak w praktyce dbacie o bezpiecze\u0144stwo moich danych?\u201d"}),(0,za.jsx)("li",{children:"\u201eCzy rzeczywi\u015bcie mo\u017cna stworzy\u0107 stron\u0119 premium w 48 godzin?\u201d"})]}),(0,za.jsx)("p",{children:"Zamiast odpowiada\u0107 ka\u017cdemu z osobna, postanowili\u015bmy stworzy\u0107 tutaj przestrze\u0144, kt\xf3ra stanie si\u0119 baz\u0105 wiedzy dla ka\u017cdego, kto ceni jako\u015b\u0107 w internecie."}),(0,za.jsx)("h2",{children:"Co znajdziesz w sekcji Aktualno\u015bci?"}),(0,za.jsx)("p",{children:"Ka\u017cdy artyku\u0142 b\u0119dzie oparty na rzeczywistych sytuacjach z \u017cycia naszego studia oraz wiedzy, kt\xf3r\u0105 gromadzili\u015bmy przez lata intensywnej pracy."}),(0,za.jsx)("p",{children:(0,za.jsx)("strong",{children:"B\u0119dziemy pisa\u0107 o:"})}),(0,za.jsxs)("ol",{children:[(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Case Studies"})," \u2013 analiza konkretnych projekt\xf3w, wyniki, wyzwania i rozwi\u0105zania, kt\xf3re przynios\u0142y realne efekty."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Technologia"})," \u2013 dlaczego wybieramy czysty kod zamiast gotowych system\xf3w CMS, jak optymalizujemy szybko\u015b\u0107 i gwarantujemy bezpiecze\u0144stwo."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Proces"})," \u2013 jak naprawd\u0119 pracujemy, ile trwa ka\u017cdy etap i co dzieje si\u0119 \u201eza kulisami\u201d Twojego projektu."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Nowo\u015bci i Trendy"})," \u2013 rola AI w designie, optymalizacja pod k\u0105tem Google oraz podej\u015bcie mobile-first w wersji premium."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Edukacja"})," \u2013 praktyczne poradniki dla przedsi\u0119biorc\xf3w, kt\xf3rzy chc\u0105 rozumie\u0107 swoj\u0105 stron\u0119 i \u015bwiadomie budowa\u0107 mark\u0119."]})]}),(0,za.jsx)("h2",{children:"Dla kogo tworzymy te tre\u015bci?"}),(0,za.jsx)("p",{children:(0,za.jsx)("strong",{children:"Dla lider\xf3w biznesu i marek premium:"})}),(0,za.jsxs)("ul",{children:[(0,za.jsx)("li",{children:"Chcesz wiedzie\u0107, dlaczego warto inwestowa\u0107 w jako\u015b\u0107 kodu, a nie w p\xf3\u0142\u015brodki."}),(0,za.jsx)("li",{children:"Zale\u017cy Ci na bezkompromisowej szybko\u015bci i bezpiecze\u0144stwie."}),(0,za.jsx)("li",{children:"Szukasz partnera, kt\xf3ry my\u015bli o Twoim biznesie strategicznie, a nie tylko dostarcza gotowy produkt."})]}),(0,za.jsx)("p",{children:(0,za.jsx)("strong",{children:"Dla pasjonat\xf3w designu i technologii:"})}),(0,za.jsxs)("ul",{children:[(0,za.jsx)("li",{children:"Chcesz \u015bledzi\u0107 nasze podej\u015bcie do nowoczesnej architektury aplikacji."}),(0,za.jsx)("li",{children:"Interesuje Ci\u0119, dlaczego stawiamy na modularno\u015b\u0107 komponent\xf3w i centralizacj\u0119 danych."}),(0,za.jsx)("li",{children:"Szukasz do\u015bwiadcze\u0144 prosto z linii produkcyjnej studia, gdzie liczy si\u0119 ka\u017cda milisekunda \u0142adowania."})]}),(0,za.jsx)("h2",{children:"Nasza obietnica"}),(0,za.jsx)("p",{children:"Stawiamy na jako\u015b\u0107, a nie na ilo\u015b\u0107. Nie obiecujemy artyku\u0142\xf3w codziennie \u2013 obiecujemy, \u017ce ka\u017cdy wpis b\u0119dzie rzetelnym materia\u0142em, pe\u0142nym autentycznej wiedzy, a nie pust\u0105 tre\u015bci\u0105 tworzon\u0105 pod algorytmy."}),(0,za.jsx)("h2",{children:"Dzi\u0119kujemy"}),(0,za.jsx)("p",{children:"Dzi\u0119kujemy Wam \u2013 naszym klientom. To Wasze pytania i sukcesy zainspirowa\u0142y nas do publicznego dzielenia si\u0119 wiedz\u0105."}),(0,za.jsx)("p",{children:"Zapraszamy do lektury kolejnych wpis\xf3w. \ud83c\udfaf"}),(0,za.jsx)("hr",{}),(0,za.jsxs)("p",{children:[(0,za.jsx)("strong",{children:"Studio Klara Queen"}),(0,za.jsx)("br",{}),"Projektujemy luksusowe do\u015bwiadczenia cyfrowe."]})]})};const ld=function(){const e=Yu.find(e=>"czysty-kod-react"===e.id);return(0,za.jsxs)(id,{article:e,children:[(0,za.jsx)("h1",{children:"Czysty kod czy gotowy szablon? Dlaczego stawiamy na technologi\u0119 jutra"}),(0,za.jsx)("p",{children:(0,za.jsx)("strong",{children:"20 marca 2026"})}),(0,za.jsx)("p",{children:"Wielu przedsi\u0119biorc\xf3w staje przed dylematem: wybra\u0107 popularne systemy oparte na gotowych szablonach (tzw. CMS), czy zainwestowa\u0107 w stron\u0119 pisan\u0105 od zera w czystym kodzie? Cho\u0107 gotowe rozwi\u0105zania kusz\u0105 nisk\u0105 cen\u0105 na start, ta pozorna oszcz\u0119dno\u015b\u0107 cz\u0119sto staje si\u0119 barier\u0105 dla rozwoju Twojej marki w sieci."}),(0,za.jsx)("h2",{children:"Pu\u0142apka \u201eci\u0119\u017ckich\u201d system\xf3w"}),(0,za.jsx)("p",{children:"Popularne platformy do zarz\u0105dzania tre\u015bci\u0105 zosta\u0142y zaprojektowane tak, by ka\u017cdy m\xf3g\u0142 z\u0142o\u017cy\u0107 z nich stron\u0119. Niestety, ta uniwersalno\u015b\u0107 ma swoj\u0105 cen\u0119. Aby system dzia\u0142a\u0142, musi \u0142adowa\u0107 setki skrypt\xf3w i funkcji, kt\xf3rych Twoja strona prawdopodobnie nigdy nie wykorzysta."}),(0,za.jsx)("p",{children:(0,za.jsx)("strong",{children:"Efekt?"})}),(0,za.jsx)("p",{children:"Strona oparta na gotowym szablonie jest jak samoch\xf3d z nadmiarem zb\u0119dnego baga\u017cu:"}),(0,za.jsxs)("ul",{children:[(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Traci dynamik\u0119:"})," \u0142aduje si\u0119 zauwa\u017calnie wolniej, co irytuje klient\xf3w."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Jest podatna na b\u0142\u0119dy:"})," ka\u017cda aktualizacja zewn\u0119trznych dodatk\xf3w mo\u017ce \u201erozsypa\u0107\u201d wygl\u0105d strony."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"M\u0119czy serwer:"})," generuje niepotrzebne zapytania, spowalniaj\u0105c dzia\u0142anie witryny na smartfonach."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Wymaga ci\u0105g\u0142ej opieki:"})," musisz stale dba\u0107 o poprawki bezpiecze\u0144stwa i \u0142ata\u0107 luki w popularnych wtyczkach."]})]}),(0,za.jsx)("p",{children:"W \u015bwiecie biznesu premium ka\u017cda sekunda oczekiwania na za\u0142adowanie strony to ryzyko, \u017ce klient przejdzie do konkurencji."}),(0,za.jsx)("h2",{children:"Szybko\u015b\u0107 to Twoja najwi\u0119ksza przewaga"}),(0,za.jsx)("p",{children:"Algorytmy wyszukiwarek (takie jak Core Web Vitals) faworyzuj\u0105 witryny, kt\xf3re szanuj\u0105 czas u\u017cytkownika. Gdy Twoja strona dzia\u0142a w u\u0142amku sekundy, klient odnosi wra\u017cenie profesjonalizmu jeszcze przed przeczytaniem pierwszego zdania."}),(0,za.jsxs)("p",{children:["W naszym studiu budujemy strony w technologii ",(0,za.jsx)("strong",{children:"React"}),", poniewa\u017c:"]}),(0,za.jsx)("h3",{children:"1. P\u0142ynno\u015b\u0107 \u2013 Do\u015bwiadczenie jak w aplikacji"}),(0,za.jsx)("p",{children:"W przeciwie\u0144stwie do tradycyjnych system\xf3w, React nie prze\u0142adowuje ca\u0142ego okna przy ka\u017cdym klikni\u0119ciu. Nawigacja jest natychmiastowa, p\u0142ynna i bez zb\u0119dnych \u201emrugni\u0119\u0107\u201d ekranu. To standard, do kt\xf3rego przyzwyczai\u0142y nas najlepsze aplikacje mobilne na \u015bwiecie."}),(0,za.jsx)("h3",{children:"2. Bezpiecze\u0144stwo \u2013 Twierdza bez tylnych drzwi"}),(0,za.jsx)("p",{children:"Popularne systemy s\u0105 celem masowych atak\xf3w, poniewa\u017c hakerzy znaj\u0105 ich s\u0142abe punkty i luki w og\xf3lnodost\u0119pnych wtyczkach. Buduj\u0105c kod od zera, tworzymy rozwi\u0105zanie unikalne. Nie ma \u201estandardowych\u201d dziur, kt\xf3re mo\u017cna \u0142atwo wykorzysta\u0107."}),(0,za.jsx)("h3",{children:"3. Skalowalno\u015b\u0107 \u2013 Projekt, kt\xf3ry ro\u015bnie z Tob\u0105"}),(0,za.jsx)("p",{children:"Gotowe szablony cz\u0119sto staj\u0105 si\u0119 \u201eciasne\u201d, gdy chcesz doda\u0107 nowe, niestandardowe funkcje. Czysty kod React to pe\u0142na swoboda. To ta sama technologia, kt\xf3ra nap\u0119dza najwi\u0119ksze serwisy spo\u0142eczno\u015bciowe \u2013 jest gotowa na ka\u017cdy poziom Twojego sukcesu."}),(0,za.jsx)("h3",{children:"4. Unikalny Design \u2013 Zero kompromis\xf3w"}),(0,za.jsx)("p",{children:"Nie walczymy z ograniczeniami szablonu. Ka\u017cdy element Twojej strony projektujemy tak, by idealnie oddawa\u0142 charakter Twojej marki. Bez ci\u0119\u017ckich wtyczek, bez zb\u0119dnego kodu, z zachowaniem absolutnej lekko\u015bci designu."}),(0,za.jsx)("h2",{children:"Dla kogo s\u0105 gotowe systemy?"}),(0,za.jsx)("p",{children:"Proste platformy CMS s\u0105 dobrym rozwi\u0105zaniem dla:"}),(0,za.jsxs)("ul",{children:[(0,za.jsx)("li",{children:"Hobbystycznych blog\xf3w o ogromnej liczbie wpis\xf3w."}),(0,za.jsx)("li",{children:"Ma\u0142ych stron informacyjnych z bardzo niskim bud\u017cetem."}),(0,za.jsx)("li",{children:"Os\xf3b, kt\xf3re chc\u0105 codziennie same zmienia\u0107 kod strony."})]}),(0,za.jsx)("p",{children:"Ale je\u015bli Tw\xf3j biznes wymaga:"}),(0,za.jsxs)("ul",{children:[(0,za.jsx)("li",{children:"B\u0142yskawicznej pr\u0119dko\u015bci dzia\u0142ania dla wy\u017cszej sprzeda\u017cy,"}),(0,za.jsx)("li",{children:"Nienagannego wizerunku marki premium,"}),(0,za.jsx)("li",{children:"Bezpiecze\u0144stwa danych Twoich klient\xf3w..."})]}),(0,za.jsx)("p",{children:"...czysty kod jest po prostu bezkonkurencyjn\u0105 inwestycj\u0105."}),(0,za.jsx)("h2",{children:"Podsumowanie"}),(0,za.jsxs)("p",{children:["Wyb\xf3r technologii to fundament Twojego biznesu. Zamiast pyta\u0107, co jest ta\u0144sze dzisiaj, warto zapyta\u0107:"," ",(0,za.jsx)("strong",{children:"\u201eKt\xf3re rozwi\u0105zanie pozwoli mi zarabia\u0107 wi\u0119cej i spa\u0107 spokojnie przez lata?\u201d"})]}),(0,za.jsx)("p",{children:"Dla nas odpowied\u017a jest jasna."}),(0,za.jsx)("hr",{}),(0,za.jsxs)("p",{children:[(0,za.jsx)("strong",{children:"Studio Klara Queen"}),(0,za.jsx)("br",{}),"Projektujemy luksusowe do\u015bwiadczenia cyfrowe."]})]})};const sd=function(){const e=Yu.find(e=>"unikalne-grafiki-ai"===e.id);return(0,za.jsxs)(id,{article:e,children:[(0,za.jsx)("h1",{children:"Nowo\u015b\u0107: Unikalne grafiki AI w cenie ka\u017cdej strony"}),(0,za.jsx)("p",{children:(0,za.jsx)("strong",{children:"25 marca 2026"})}),(0,za.jsx)("p",{children:"Doskonale wiemy, \u017ce jednym z najwi\u0119kszych wyzwa\u0144 przy tworzeniu presti\u017cowej strony internetowej jest brak wysokiej jako\u015bci, profesjonalnych zdj\u0119\u0107."}),(0,za.jsx)("p",{children:"Prywatne sesje fotograficzne bywaj\u0105 kosztowne i czasoch\u0142onne. Darmowe zdj\u0119cia z popularnych bank\xf3w (jak Pexels czy Unsplash)? Korzystaj\u0105 z nich tysi\u0105ce firm, przez co trudno o unikalno\u015b\u0107. Zakup p\u0142atnych stock\xf3w to z kolei kolejny wydatek, kt\xf3ry nie zawsze gwarantuje idealne dopasowanie do wizji marki."}),(0,za.jsx)("p",{children:"W Studio Klara Queen postanowili\u015bmy to zmieni\u0107."}),(0,za.jsx)("h2",{children:"Problem: Wizualna powtarzalno\u015b\u0107 w sieci"}),(0,za.jsx)("p",{children:"Przegl\u0105daj\u0105c internet, mo\u017cna zauwa\u017cy\u0107, \u017ce wiele stron z bran\u017cy premium cierpi na brak charakteru. Dlaczego? Poniewa\u017c wi\u0119kszo\u015b\u0107 opiera si\u0119 na tych samych, opatrzonych grafikach:"}),(0,za.jsxs)("ul",{children:[(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Sektor Beauty:"})," ta sama modelka w maseczce na setkach witryn."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Us\u0142ugi profesjonalne:"})," powtarzalne zdj\u0119cia ludzi w garniturach w sterylnych biurach."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Kreatywne studia:"})," te same abstrakcyjne, kolorowe gradienty."]})]}),(0,za.jsx)("p",{children:"W efekcie Twoja marka mo\u017ce zacz\u0105\u0107 zlewa\u0107 si\u0119 z konkurencj\u0105. W \u015bwiecie luksusu brak wyr\xf3\u017cnienia to najprostsza droga do bycia niezauwa\u017conym."}),(0,za.jsx)("h2",{children:"Rozwi\u0105zanie: Autorskie generowanie grafik przez AI"}),(0,za.jsxs)("p",{children:["Od marca 2026 roku ka\u017cdy nowy projekt realizowany w Studio Klara Queen zawiera pakiet",(0,za.jsxs)("strong",{children:[" ","unikalnych, wysokiej jako\u015bci grafik wygenerowanych przez Sztuczn\u0105 Inteligencj\u0119"]}),"."]}),(0,za.jsx)("p",{children:"Co to oznacza dla Twojej marki?"}),(0,za.jsxs)("ul",{children:[(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Pe\u0142na personalizacja:"})," grafiki tworzone pod konkretn\u0105 palet\u0119 barw i styl Twojej marki."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Unikalno\u015b\u0107 absolutna:"})," nawet przy podobnych wytycznych, AI generuje jedyne w swoim rodzaju obrazy. Nikt nie b\u0119dzie mia\u0142 identycznej witryny."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Sp\xf3jno\u015b\u0107 wizualna:"})," zestawienie grafik, kt\xf3re idealnie wsp\xf3\u0142gra z Twoj\u0105 wizj\u0105 artystyczn\u0105."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Bezpiecze\u0144stwo prawne:"})," otrzymujesz pe\u0142ne prawa komercyjne do wykorzystanych obraz\xf3w."]})]}),(0,za.jsx)("h2",{children:"Jak to wygl\u0105da w praktyce?"}),(0,za.jsx)("p",{children:"Zamiast szuka\u0107 kompromis\xf3w w gotowych bazach zdj\u0119\u0107, my tworzymy obrazy od podstaw. Je\u015bli prowadzisz np. salon urody, proces wygl\u0105da tak:"}),(0,za.jsx)("p",{children:(0,za.jsx)("strong",{children:"Koncepcja \u2192 Precyzyjny Prompt \u2192 Selekcja AI \u2192 Unikalna Grafika"})}),(0,za.jsx)("p",{children:(0,za.jsx)("em",{children:"Przyk\u0142ad: \u201eMinimalistyczne, luksusowe wn\u0119trze salonu, naturalne o\u015bwietlenie, be\u017cowo-z\u0142ota kolorystyka, detale premium, estetyka profesjonalnej fotografii modowej\u201d."})}),(0,za.jsx)("p",{children:"Rezultat to warstwa wizualna, kt\xf3ra:"}),(0,za.jsxs)("ul",{children:[(0,za.jsx)("li",{children:"\u2705 Jest nierozerwalnie zwi\u0105zana z Twoim brandingiem."}),(0,za.jsx)("li",{children:"\u2705 Buduje wizerunek marki niedost\u0119pnej w masowym obiegu."}),(0,za.jsx)("li",{children:"\u2705 Wygl\u0105da jak efekt drogiej sesji zdj\u0119ciowej, a nie sztuczny tw\xf3r."})]}),(0,za.jsx)("h2",{children:"Koszt dla Ciebie?"}),(0,za.jsxs)("p",{children:[(0,za.jsx)("strong",{children:"Dok\u0142adnie zero."})," To standard wliczony w cen\u0119 realizacji Twojej strony."]}),(0,za.jsxs)("p",{children:["Inwestujemy nasz czas w dopracowanie grafik AI, poniewa\u017c statystyki s\u0105 nieub\u0142agane: to, co potencjalny klient zobaczy w pierwszej sekundzie, decyduje o ",(0,za.jsx)("strong",{children:"70% jego opinii"}),"o Twoim profesjonalizmie. Nie pozwalamy, by o Twoim sukcesie decydowa\u0142 przypadek lub s\u0142abej jako\u015bci materia\u0142y. Opraw\u0119 premium otrzymujesz u nas w pakiecie."]}),(0,za.jsx)("h2",{children:"Czy AI zast\u0119puje tradycyjn\u0105 fotografi\u0119?"}),(0,za.jsx)("p",{children:"Traktujemy AI jako pot\u0119\u017cne uzupe\u0142nienie. Je\u015bli posiadasz w\u0142asne, profesjonalne zdj\u0119cia Twoich zrealizowanych projekt\xf3w czy zespo\u0142u \u2013 zawsze stanowi\u0105 one priorytet."}),(0,za.jsx)("p",{children:"Jednak w przypadku sekcji dekoracyjnych, t\u0142a strony czy g\u0142\xf3wnego zdj\u0119cia powitalnego (Hero Image), technologia AI pozwala nam stworzy\u0107 klimat, kt\xf3ry bez niej by\u0142by nieosi\u0105galny bez ogromnych nak\u0142ad\xf3w finansowych."}),(0,za.jsx)("h2",{children:"Etyka i transparentno\u015b\u0107"}),(0,za.jsxs)("p",{children:["Pytamy wprost: \u201eCzy wypada u\u017cywa\u0107 grafik wygenerowanych przez AI?\u201d. Nasza odpowied\u017a:"," ",(0,za.jsx)("strong",{children:"Tak, o ile robimy to z klas\u0105 i pe\u0142n\u0105 szczero\u015bci\u0105."})]}),(0,za.jsx)("p",{children:"W 2026 roku AI to nie p\xf3j\u015bcie na \u0142atwizn\u0119, lecz inteligentne narz\u0119dzie budowania presti\u017cu. My trzymamy si\u0119 trzech zasad:"}),(0,za.jsxs)("ul",{children:[(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Kuratorska selekcja:"})," Ka\u017cda grafika przechodzi nasz\u0105 osobist\u0105 weryfikacj\u0119 \u2013 musi by\u0107 ostra, estetyczna i luksusowa."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Iteracja do skutku:"})," Robimy tyle wersji, ile potrzeba, aby obraz w 100% oddawa\u0142 charakter Twojego biznesu."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Uczciwo\u015b\u0107 przekazu:"})," Wykorzystujemy AI tam, gdzie buduje ona emocje i nastr\xf3j, pozwalaj\u0105c Twoim realnym us\u0142ugom b\u0142yszcze\u0107 w odpowiedniej oprawie."]})]}),(0,za.jsx)("h2",{children:"Podsumowanie"}),(0,za.jsxs)("p",{children:["W Studio Klara Queen chcemy, aby\u015b si\u0119 wyr\xf3\u017cnia\u0142a. Grafiki AI to narz\u0119dzie, kt\xf3re nam na to pozwala. Twoja strona nie b\u0119dzie wygl\u0105da\u0107 jak jedna z wielu. B\u0119dzie wygl\u0105da\u0107 jak ",(0,za.jsx)("strong",{children:"Twoja"}),"."]}),(0,za.jsx)("hr",{}),(0,za.jsxs)("p",{children:[(0,za.jsx)("strong",{children:"Studio Klara Queen"}),(0,za.jsx)("br",{}),"Projektujemy luksusowe do\u015bwiadczenia cyfrowe."]})]})};const cd=function(){const e=Yu.find(e=>"proces-48h"===e.id);return(0,za.jsxs)(id,{article:e,children:[(0,za.jsx)("h1",{children:"Jak oddajemy gotowy projekt w 48h roboczych? Poznaj nasz proces."}),(0,za.jsx)("p",{children:(0,za.jsx)("strong",{children:"30 marca 2026"})}),(0,za.jsx)("p",{children:"Dla wielu agencji stworzenie prostej strony internetowej trwa miesi\u0105cami. Dziesi\u0105tki spotka\u0144, nieko\u0144cz\u0105ce si\u0119 korekty i kolejne wersje nag\u0142\xf3wk\xf3w sprawiaj\u0105, \u017ce projekt traci dynamik\u0119, a Ty \u2013 czas na budowanie biznesu."}),(0,za.jsxs)("p",{children:["W Studio Klara Queen proces zamyka si\u0119 w"," ",(0,za.jsx)("strong",{children:"48 godzinach roboczych"}),". Jak to mo\u017cliwe bez kompromis\xf3w w kwestii jako\u015bci? Zapraszamy za kulisy naszego warsztatu."]}),(0,za.jsx)("h2",{children:"Czym s\u0105 nasze \u201e48 godzin\u201d?"}),(0,za.jsx)("p",{children:"Zasada jest prosta: Tw\xf3j projekt jest gotowy do publikacji w ci\u0105gu 48 godzin roboczych od momentu zaksi\u0119gowania wp\u0142aty i dostarczenia przez Ciebie kompletu informacji."}),(0,za.jsx)("p",{children:(0,za.jsx)("strong",{children:"48 godzin roboczych = pe\u0142ne skupienie na Twoim sukcesie."})}),(0,za.jsx)("p",{children:"Jak to wygl\u0105da w praktyce:"}),(0,za.jsxs)("ul",{children:[(0,za.jsx)("li",{children:"Otrzymujemy detale projektu (wytyczne, kolorystyka, tre\u015bci)."}),(0,za.jsx)("li",{children:"Rozpoczynamy intensywne prace projektowe i programistyczne."}),(0,za.jsx)("li",{children:"Po 48 godzinach roboczych Twoja strona jest gotowa i opublikowana."})]}),(0,za.jsxs)("blockquote",{children:[(0,za.jsx)("strong",{children:"Wa\u017cna uwaga techniczna:"})," Proces propagacji domeny lub konfiguracja zewn\u0119trznego hostingu mo\u017ce czasem zaj\u0105\u0107 od kilku do 24 godzin. Jest to proces niezale\u017cny od nas, wynikaj\u0105cy z globalnych ustawie\u0144 dostawc\xf3w sieciowych. Sama strona jest jednak gotowa i przetestowana dok\u0142adnie w wyznaczonym terminie."]}),(0,za.jsx)("h2",{children:"Filary naszej efektywno\u015bci"}),(0,za.jsx)("h3",{children:"1. Inteligentny Brief"}),(0,za.jsx)("p",{children:"Zanim napiszemy pierwsz\u0105 lini\u0119 kodu, przeprowadzamy Ci\u0119 przez precyzyjn\u0105 ankiet\u0119 online. Zamiast godzinnych rozm\xf3w o niczym, zbieramy konkretne dane:"}),(0,za.jsxs)("ul",{children:[(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"O marce:"})," Bran\u017ca, warto\u015bci i profil idealnego klienta."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"O celach:"})," Struktura podstron, kluczowe sekcje i oczekiwane akcje u\u017cytkownik\xf3w."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"O estetyce:"})," Paleta barw, typografia i po\u017c\u0105dany klimat wizualny."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"O funkcjonalno\u015bci:"})," Formularze, integracje (np. Calendly) czy galerie prac."]})]}),(0,za.jsx)("p",{children:"Dzi\u0119ki temu eliminujemy szum komunikacyjny i od pierwszej minuty wiemy, w kt\xf3rym kierunku pod\u0105\u017ca\u0107."}),(0,za.jsx)("h3",{children:"2. Autorski fundament (nasza przewaga technologiczna)"}),(0,za.jsxs)("p",{children:["Przez lata pracy wypracowali\u015bmy"," ",(0,za.jsx)("strong",{children:"zaawansowan\u0105 bibliotek\u0119 komponent\xf3w React"}),"oraz autorskie standardy kodowania. Nie u\u017cywamy kupnych szablon\xf3w \u2013 korzystamy z w\u0142asnego, sprawdzonego w boju fundamentu."]}),(0,za.jsx)("p",{children:"Nasz system obejmuje:"}),(0,za.jsxs)("ul",{children:[(0,za.jsxs)("li",{children:["\u2705 ",(0,za.jsx)("strong",{children:"Perfekcyjne Responsive Web Design:"})," dopracowane uk\u0142ady dla ka\u017cdego urz\u0105dzenia."]}),(0,za.jsxs)("li",{children:["\u2705 ",(0,za.jsx)("strong",{children:"Globalny system styl\xf3w:"})," sp\xf3jna typografia i spacingi."]}),(0,za.jsxs)("li",{children:["\u2705 ",(0,za.jsx)("strong",{children:"Optymalizacj\u0119 SEO:"})," wbudowane tagi i struktura danych na starcie."]}),(0,za.jsxs)("li",{children:["\u2705 ",(0,za.jsx)("strong",{children:"Maksymaln\u0105 wydajno\u015b\u0107:"})," techniki lazy loading i code splitting."]})]}),(0,za.jsx)("p",{children:"Zaczynaj\u0105c projekt, mamy ju\u017c gotowy \u201esilnik\u201d i podwozie \u2013 skupiamy si\u0119 na budowie Twojej unikalnej \u201ekaroserii\u201d i wn\u0119trza."}),(0,za.jsx)("h3",{children:"3. Nowoczesny stack technologiczny"}),(0,za.jsx)("p",{children:"Korzystamy z narz\u0119dzi, kt\xf3re eliminuj\u0105 przestoje:"}),(0,za.jsxs)("ul",{children:[(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"React"})," \u2013 czysta struktura i b\u0142yskawiczne dzia\u0142anie."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Styled-components"})," \u2013 modularno\u015b\u0107 styl\xf3w bez chaosu w plikach."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Vite"})," \u2013 \u015brodowisko programistyczne nowej generacji."]}),(0,za.jsxs)("li",{children:[(0,za.jsx)("strong",{children:"Vercel"})," \u2013 b\u0142yskawiczny deployment i najwy\u017csza stabilno\u015b\u0107 serwer\xf3w."]})]}),(0,za.jsx)("h2",{children:"Dlaczego to si\u0119 udaje?"}),(0,za.jsxs)("p",{children:[(0,za.jsx)("strong",{children:"Pe\u0142na koncentracja:"})," Pracujemy tylko nad JEDNYM projektem jednocze\u015bnie. Twoja marka ma nasz\u0105 ca\u0142kowit\u0105 uwag\u0119 przez ca\u0142e 48 godzin."]}),(0,za.jsxs)("p",{children:[(0,za.jsx)("strong",{children:"Do\u015bwiadczenie:"})," Nie eksperymentujemy na Twoim biznesie. Wdra\u017camy rozwi\u0105zania, o kt\xf3rych wiemy, \u017ce dzia\u0142aj\u0105 i konwertuj\u0105."]}),(0,za.jsxs)("p",{children:[(0,za.jsx)("strong",{children:"Zgrany zesp\xf3\u0142:"})," Ka\u017cdy projekt prowadzi dedykowany ekspert. W razie potrzeby \u0142\u0105czymy si\u0142y, by odda\u0107 projekt jeszcze przed terminem."]}),(0,za.jsx)("h2",{children:"Por\xf3wnanie efektywno\u015bci"}),(0,za.jsxs)("table",{className:"process-table",children:[(0,za.jsx)("thead",{children:(0,za.jsxs)("tr",{children:[(0,za.jsx)("th",{children:"Obszar"}),(0,za.jsx)("th",{children:"Studio Klara Queen"}),(0,za.jsx)("th",{children:"Tradycyjne Agencje"})]})}),(0,za.jsxs)("tbody",{children:[(0,za.jsxs)("tr",{children:[(0,za.jsx)("td",{children:"Przygotowanie"}),(0,za.jsx)("td",{children:"Autorska biblioteka React"}),(0,za.jsx)("td",{children:"Poszukiwanie szablon\xf3w"})]}),(0,za.jsxs)("tr",{children:[(0,za.jsx)("td",{children:"Komunikacja"}),(0,za.jsx)("td",{children:"Bezpo\u015bredni kontakt w czasie rzeczywistym"}),(0,za.jsx)("td",{children:"D\u0142ugie \u0142a\u0144cuchy mailowe"})]}),(0,za.jsxs)("tr",{children:[(0,za.jsx)("td",{children:"Skupienie"}),(0,za.jsx)("td",{children:"Jeden projekt w danym czasie"}),(0,za.jsx)("td",{children:"Kilka projekt\xf3w prowadzonych r\xf3wnolegle"})]}),(0,za.jsxs)("tr",{children:[(0,za.jsx)("td",{children:"Testy jako\u015bci"}),(0,za.jsx)("td",{children:"Automatyczne i ci\u0105g\u0142e"}),(0,za.jsx)("td",{children:"Dopiero w fazie ko\u0144cowej"})]}),(0,za.jsxs)("tr",{children:[(0,za.jsx)("td",{children:(0,za.jsx)("strong",{children:"Czas realizacji"})}),(0,za.jsx)("td",{children:(0,za.jsx)("strong",{children:"48h roboczych"})}),(0,za.jsx)("td",{children:(0,za.jsx)("strong",{children:"Od 4 do 8 tygodni"})})]})]})]}),(0,za.jsx)("h2",{children:"Czas to najcenniejsza waluta."}),(0,za.jsx)("p",{children:"Podczas gdy Twoja konkurencja wci\u0105\u017c doprecyzowuje makiety, Ty mo\u017cesz ju\u017c przyjmowa\u0107 pierwsze zam\xf3wienia. Skracamy miesi\u0105ce oczekiwania do dw\xf3ch intensywnych dni roboczych. Inwestujesz w narz\u0119dzie, kt\xf3re zarabia na siebie od zaraz."}),(0,za.jsx)("hr",{}),(0,za.jsxs)("p",{children:[(0,za.jsx)("strong",{children:"Studio Klara Queen"}),(0,za.jsx)("br",{}),"Tworzymy luksusowe do\u015bwiadczenia cyfrowe."]})]})},ud={"startujemy-z-aktualnosciami":od,"czysty-kod-react":ld,"unikalne-grafiki-ai":sd,"proces-48h":cd};const dd=function(){const{id:e}=me(),t=ud[e];return t?(0,za.jsx)(t,{}):(0,za.jsx)(Qu,{children:(0,za.jsxs)(Ju,{children:[(0,za.jsx)(Xu,{children:(0,za.jsx)(Zu,{children:"Artyku\u0142 nie znaleziony"})}),(0,za.jsx)(rd,{children:(0,za.jsx)(yt,{to:"/blog",children:(0,za.jsx)(ad,{children:"Wr\xf3\u0107 do aktualno\u015bci"})})})]})})},pd=ga.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
`,fd=ga.div`
  text-align: center;
  margin-bottom: 80px;
`,md=ga.h1`
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 700;
  background: linear-gradient(135deg, ${ba.testimonialAccent} 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
`,hd=ga.p`
  font-size: clamp(16px, 2vw, 20px);
  color: ${ba.testimonialSubtext};
  max-width: 600px;
  margin: 0 auto;
`,gd=ga.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    gap: 20px;
    grid-template-columns: 1fr;
  }
`,yd=ga.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    background: ${ba.testimonialBgHover};
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`,xd=ga.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  font-size: 16px;
`,wd=ga.span`
  color: #ffd700;
`,bd=ga.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${ba.testimonialText};
  margin-bottom: auto;
  margin-bottom: 25px;
  font-style: italic;
`,vd=ga.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,kd=ga.strong`
  font-size: 16px;
  color: ${ba.white};
  font-weight: 600;
`,zd=ga.span`
  font-size: 14px;
  color: ${ba.testimonialSubtext};
`;const jd=function(){return(0,za.jsxs)(pd,{children:[(0,za.jsxs)(fd,{children:[(0,za.jsx)(md,{children:"Opinie naszych klient\xf3w"}),(0,za.jsx)(hd,{children:"Sprawd\u017a co m\xf3wi\u0105 o nas ci, kt\xf3rzy ju\u017c z nami pracowali"})]}),(0,za.jsx)(gd,{children:ll.map(e=>(0,za.jsxs)(yd,{children:[(0,za.jsx)(xd,{children:[...Array(e.rating)].map((e,t)=>(0,za.jsx)(wd,{children:"\u2605"},t))}),(0,za.jsxs)(bd,{children:['"',e.text,'"']}),(0,za.jsxs)(vd,{children:[(0,za.jsx)(kd,{children:e.name}),(0,za.jsx)(zd,{children:e.company})]})]},e.id))})]})};const Sd=function(){return(0,za.jsxs)(Ii,{children:[(0,za.jsx)(Di,{}),(0,za.jsx)(ja,{}),(0,za.jsx)(si,{}),(0,za.jsx)(Ai,{}),(0,za.jsx)(Fi,{children:(0,za.jsxs)(Me,{children:[(0,za.jsx)(Re,{path:"/",element:(0,za.jsx)(cl,{})}),(0,za.jsx)(Re,{path:"/about",element:(0,za.jsx)(as,{})}),(0,za.jsx)(Re,{path:"/offer",element:(0,za.jsx)(Ru,{})}),(0,za.jsx)(Re,{path:"/offer/:id",element:(0,za.jsx)(Ru,{})}),(0,za.jsx)(Re,{path:"/blog",element:(0,za.jsx)(qu,{})}),(0,za.jsx)(Re,{path:"/blog/:id",element:(0,za.jsx)(dd,{})}),"        ",(0,za.jsx)(Re,{path:"/testimonials",element:(0,za.jsx)(jd,{})}),"          ",(0,za.jsx)(Re,{path:"/questions",element:(0,za.jsx)(bs,{})}),(0,za.jsx)(Re,{path:"/cooperation",element:(0,za.jsx)(xc,{})})]})}),(0,za.jsx)(Mi,{})]})};i.createRoot(document.getElementById("root")).render((0,za.jsx)(r.StrictMode,{children:(0,za.jsx)(ht,{basename:"/klara-queen",children:(0,za.jsx)(Sd,{})})}))})();
//# sourceMappingURL=main.c96cf81f.js.map