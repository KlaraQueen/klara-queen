/*! For license information please see main.c0049cf6.js.LICENSE.txt */
(()=>{"use strict";var e={4(e,t,n){var a=n(853),r=n(43),o=n(950);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(s(e)!==e)throw Error(i(188))}function p(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=p(e)))return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),v=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),C=Symbol.for("react.lazy");Symbol.for("react.scope");var E=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var P=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var T=Symbol.iterator;function $(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=T&&e[T]||e["@@iterator"])?e:null}var _=Symbol.for("react.client.reference");function N(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===_?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case y:return"Fragment";case w:return"Profiler";case b:return"StrictMode";case z:return"Suspense";case j:return"SuspenseList";case E:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case g:return"Portal";case v:return e.displayName||"Context";case x:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case S:return null!==(t=e.displayName||null)?t:N(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return N(e(t))}catch(Gn){}}return null}var O=Array.isArray,R=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M={pending:!1,data:null,method:null,action:null},D=[],A=-1;function I(e){return{current:e}}function F(e){0>A||(e.current=D[A],D[A]=null,A--)}function W(e,t){A++,D[A]=e.current,e.current=t}var U,H,B=I(null),K=I(null),G=I(null),V=I(null);function Y(e,t){switch(W(G,t),W(K,e),W(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=wd(t=bd(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(B),W(B,e)}function q(){F(B),F(K),F(G)}function Q(e){null!==e.memoizedState&&W(V,e);var t=B.current,n=wd(t,e.type);t!==n&&(W(K,e),W(B,n))}function J(e){K.current===e&&(F(B),F(K)),V.current===e&&(F(V),dp._currentValue=M)}function X(e){if(void 0===U)try{throw Error()}catch(Gn){var t=Gn.stack.trim().match(/\n( *(at )?)/);U=t&&t[1]||"",H=-1<Gn.stack.indexOf("\n    at")?" (<anonymous>)":-1<Gn.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+U+e+H}var Z=!1;function ee(e,t){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(Gn){var a=Gn}Reflect.construct(e,[],n)}else{try{n.call()}catch(r){a=r}e.call(n.prototype)}}else{try{throw Error()}catch(o){a=o}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(i){if(i&&a&&"string"===typeof i.stack)return[i.stack,a.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),i=o[0],l=o[1];if(i&&l){var s=i.split("\n"),c=l.split("\n");for(r=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;r<c.length&&!c[r].includes("DetermineComponentFrameRoot");)r++;if(a===s.length||r===c.length)for(a=s.length-1,r=c.length-1;1<=a&&0<=r&&s[a]!==c[r];)r--;for(;1<=a&&0<=r;a--,r--)if(s[a]!==c[r]){if(1!==a||1!==r)do{if(a--,0>--r||s[a]!==c[r]){var u="\n"+s[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=a&&0<=r);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?X(n):""}function te(e,t){switch(e.tag){case 26:case 27:case 5:return X(e.type);case 16:return X("Lazy");case 13:return e.child!==t&&null!==t?X("Suspense Fallback"):X("Suspense");case 19:return X("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return X("Activity");default:return""}}function ne(e){try{var t="",n=null;do{t+=te(e,n),n=e,e=e.return}while(e);return t}catch(Gn){return"\nError generating stack: "+Gn.message+"\n"+Gn.stack}}var ae=Object.prototype.hasOwnProperty,re=a.unstable_scheduleCallback,oe=a.unstable_cancelCallback,ie=a.unstable_shouldYield,le=a.unstable_requestPaint,se=a.unstable_now,ce=a.unstable_getCurrentPriorityLevel,ue=a.unstable_ImmediatePriority,de=a.unstable_UserBlockingPriority,pe=a.unstable_NormalPriority,fe=a.unstable_LowPriority,me=a.unstable_IdlePriority,he=a.log,ge=a.unstable_setDisableYieldValue,ye=null,be=null;function we(e){if("function"===typeof he&&ge(e),be&&"function"===typeof be.setStrictMode)try{be.setStrictMode(ye,e)}catch(t){}}var xe=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(ve(e)/ke|0)|0},ve=Math.log,ke=Math.LN2;var ze=256,je=262144,Se=4194304;function Ce(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ee(e,t,n){var a=e.pendingLanes;if(0===a)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=134217727&a;return 0!==l?0!==(a=l&~o)?r=Ce(a):0!==(i&=l)?r=Ce(i):n||0!==(n=l&~e)&&(r=Ce(n)):0!==(l=a&~o)?r=Ce(l):0!==i?r=Ce(i):n||0!==(n=a&~e)&&(r=Ce(n)),0===r?0:0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(n=t&-t)||32===o&&0!==(4194048&n))?t:r}function Pe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Te(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function $e(){var e=Se;return 0===(62914560&(Se<<=1))&&(Se=4194304),e}function _e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ne(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Oe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-xe(t);e.entangledLanes|=t,e.entanglements[a]=1073741824|e.entanglements[a]|261930&n}function Re(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-xe(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Le(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:Me(n))&(e.suspendedLanes|t))?0:n}function Me(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function De(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Ae(){var e=L.p;return 0!==e?e:void 0===(e=window.event)?32:Ep(e.type)}function Ie(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var Fe=Math.random().toString(36).slice(2),We="__reactFiber$"+Fe,Ue="__reactProps$"+Fe,He="__reactContainer$"+Fe,Be="__reactEvents$"+Fe,Ke="__reactListeners$"+Fe,Ge="__reactHandles$"+Fe,Ve="__reactResources$"+Fe,Ye="__reactMarker$"+Fe;function qe(e){delete e[We],delete e[Ue],delete e[Be],delete e[Ke],delete e[Ge]}function Qe(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[He]||n[We]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Dd(e);null!==e;){if(n=e[We])return n;e=Dd(e)}return t}n=(e=n).parentNode}return null}function Je(e){if(e=e[We]||e[He]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function Xe(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(i(33))}function Ze(e){var t=e[Ve];return t||(t=e[Ve]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Ye]=!0}var tt=new Set,nt={};function at(e,t){rt(e,t),rt(e+"Capture",t)}function rt(e,t){for(nt[e]=t,e=0;e<t.length;e++)tt.add(t[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},lt={};function st(e,t,n){if(r=t,ae.call(lt,r)||!ae.call(it,r)&&(ot.test(r)?lt[r]=!0:(it[r]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var a=t.toLowerCase().slice(0,5);if("data-"!==a&&"aria-"!==a)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var r}function ct(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function ut(e,t,n,a){if(null===a)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+a)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function pt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ft(e){if(!e._valueTracker){var t=pt(e)?"checked":"value";e._valueTracker=function(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof a&&"function"===typeof a.get&&"function"===typeof a.set){var r=a.get,o=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function mt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=pt(e)?e.checked?"true":"false":e.value),(e=a)!==n&&(t.setValue(e),!0)}function ht(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var gt=/[\n"\\]/g;function yt(e){return e.replace(gt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function bt(e,t,n,a,r,o,i,l){e.name="",null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?xt(e,i,dt(t)):null!=n?xt(e,i,dt(n)):null!=a&&e.removeAttribute("value"),null==r&&null!=o&&(e.defaultChecked=!!o),null!=r&&(e.checked=r&&"function"!==typeof r&&"symbol"!==typeof r),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+dt(l):e.removeAttribute("name")}function wt(e,t,n,a,r,o,i,l){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=n){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return void ft(e);n=null!=n?""+dt(n):"",t=null!=t?""+dt(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}a="function"!==typeof(a=null!=a?a:r)&&"symbol"!==typeof a&&!!a,e.checked=l?e.checked:!!a,e.defaultChecked=!!a,null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.name=i),ft(e)}function xt(e,t,n){"number"===t&&ht(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vt(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n)return e[r].selected=!0,void(a&&(e[r].defaultSelected=!0));null!==t||e[r].disabled||(t=e[r])}null!==t&&(t.selected=!0)}}function kt(e,t,n){null==t||((t=""+dt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+dt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function zt(e,t,n,a){if(null==t){if(null!=a){if(null!=n)throw Error(i(92));if(O(a)){if(1<a.length)throw Error(i(93));a=a[0]}n=a}null==n&&(n=""),t=n}n=dt(t),e.defaultValue=n,(a=e.textContent)===n&&""!==a&&null!==a&&(e.value=a),ft(e)}function jt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var St=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ct(e,t,n){var a=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?a?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":a?e.setProperty(t,n):"number"!==typeof n||0===n||St.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Et(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(i(62));if(e=e.style,null!=n){for(var a in n)!n.hasOwnProperty(a)||null!=t&&t.hasOwnProperty(a)||(0===a.indexOf("--")?e.setProperty(a,""):"float"===a?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&Ct(e,r,a)}else for(var o in t)t.hasOwnProperty(o)&&Ct(e,o,t[o])}function Pt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _t(e){return $t.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Nt(){}var Ot=null;function Rt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Lt=null,Mt=null;function Dt(e){var t=Je(e);if(t&&(e=t.stateNode)){var n=e[Ue]||null;e:switch(e=t.stateNode,t.type){case"input":if(bt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[Ue]||null;if(!r)throw Error(i(90));bt(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)(a=n[t]).form===e.form&&mt(a)}break e;case"textarea":kt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&vt(e,!!n.multiple,t,!1)}}}var At=!1;function It(e,t,n){if(At)return e(t,n);At=!0;try{return e(t)}finally{if(At=!1,(null!==Lt||null!==Mt)&&(eu(),Lt&&(t=Lt,e=Mt,Mt=Lt=null,Dt(t),e)))for(t=0;t<e.length;t++)Dt(e[t])}}function Ft(e,t){var n=e.stateNode;if(null===n)return null;var a=n[Ue]||null;if(null===a)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(a=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!a;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Wt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Ut=!1;if(Wt)try{var Ht={};Object.defineProperty(Ht,"passive",{get:function(){Ut=!0}}),window.addEventListener("test",Ht,Ht),window.removeEventListener("test",Ht,Ht)}catch(Xp){Ut=!1}var Bt=null,Kt=null,Gt=null;function Vt(){if(Gt)return Gt;var e,t,n=Kt,a=n.length,r="value"in Bt?Bt.value:Bt.textContent,o=r.length;for(e=0;e<a&&n[e]===r[e];e++);var i=a-e;for(t=1;t<=i&&n[a-t]===r[o-t];t++);return Gt=r.slice(e,1<t?1-t:void 0)}function Yt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function qt(){return!0}function Qt(){return!1}function Jt(e){function t(t,n,a,r,o){for(var i in this._reactName=t,this._targetInst=a,this.type=n,this.nativeEvent=r,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(r):r[i]);return this.isDefaultPrevented=(null!=r.defaultPrevented?r.defaultPrevented:!1===r.returnValue)?qt:Qt,this.isPropagationStopped=Qt,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=qt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=qt)},persist:function(){},isPersistent:qt}),t}var Xt,Zt,en,tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nn=Jt(tn),an=f({},tn,{view:0,detail:0}),rn=Jt(an),on=f({},an,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&"mousemove"===e.type?(Xt=e.screenX-en.screenX,Zt=e.screenY-en.screenY):Zt=Xt=0,en=e),Xt)},movementY:function(e){return"movementY"in e?e.movementY:Zt}}),ln=Jt(on),sn=Jt(f({},on,{dataTransfer:0})),cn=Jt(f({},an,{relatedTarget:0})),un=Jt(f({},tn,{animationName:0,elapsedTime:0,pseudoElement:0})),dn=Jt(f({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),pn=Jt(f({},tn,{data:0})),fn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=hn[e])&&!!t[e]}function yn(){return gn}var bn=Jt(f({},an,{key:function(e){if(e.key){var t=fn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Yt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?mn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yn,charCode:function(e){return"keypress"===e.type?Yt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Yt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),wn=Jt(f({},on,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),xn=Jt(f({},an,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yn})),vn=Jt(f({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),kn=Jt(f({},on,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),zn=Jt(f({},tn,{newState:0,oldState:0})),jn=[9,13,27,32],Sn=Wt&&"CompositionEvent"in window,Cn=null;Wt&&"documentMode"in document&&(Cn=document.documentMode);var En=Wt&&"TextEvent"in window&&!Cn,Pn=Wt&&(!Sn||Cn&&8<Cn&&11>=Cn),Tn=String.fromCharCode(32),$n=!1;function _n(e,t){switch(e){case"keyup":return-1!==jn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var On=!1;var Rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ln(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Rn[e.type]:"textarea"===t}function Mn(e,t,n,a){Lt?Mt?Mt.push(a):Mt=[a]:Lt=a,0<(t=rd(t,"onChange")).length&&(n=new nn("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Dn=null,An=null;function In(e){Qu(e,0)}function Fn(e){if(mt(Xe(e)))return e}function Wn(e,t){if("change"===e)return t}var Un=!1;if(Wt){var Hn;if(Wt){var Bn="oninput"in document;if(!Bn){var Kn=document.createElement("div");Kn.setAttribute("oninput","return;"),Bn="function"===typeof Kn.oninput}Hn=Bn}else Hn=!1;Un=Hn&&(!document.documentMode||9<document.documentMode)}function Vn(){Dn&&(Dn.detachEvent("onpropertychange",Yn),An=Dn=null)}function Yn(e){if("value"===e.propertyName&&Fn(An)){var t=[];Mn(t,An,e,Rt(e)),It(In,t)}}function qn(e,t,n){"focusin"===e?(Vn(),An=n,(Dn=t).attachEvent("onpropertychange",Yn)):"focusout"===e&&Vn()}function Qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Fn(An)}function Jn(e,t){if("click"===e)return Fn(t)}function Xn(e,t){if("input"===e||"change"===e)return Fn(t)}var Zn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function ea(e,t){if(Zn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!ae.call(t,r)||!Zn(e[r],t[r]))return!1}return!0}function ta(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function na(e,t){var n,a=ta(e);for(e=0;a;){if(3===a.nodeType){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ta(a)}}function aa(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?aa(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ra(e){for(var t=ht((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(a){n=!1}if(!n)break;t=ht((e=t.contentWindow).document)}return t}function oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ia=Wt&&"documentMode"in document&&11>=document.documentMode,la=null,sa=null,ca=null,ua=!1;function da(e,t,n){var a=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ua||null==la||la!==ht(a)||("selectionStart"in(a=la)&&oa(a)?a={start:a.selectionStart,end:a.selectionEnd}:a={anchorNode:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset},ca&&ea(ca,a)||(ca=a,0<(a=rd(sa,"onSelect")).length&&(t=new nn("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=la)))}function pa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fa={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionrun:pa("Transition","TransitionRun"),transitionstart:pa("Transition","TransitionStart"),transitioncancel:pa("Transition","TransitionCancel"),transitionend:pa("Transition","TransitionEnd")},ma={},ha={};function ga(e){if(ma[e])return ma[e];if(!fa[e])return e;var t,n=fa[e];for(t in n)if(n.hasOwnProperty(t)&&t in ha)return ma[e]=n[t];return e}Wt&&(ha=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);var ya=ga("animationend"),ba=ga("animationiteration"),wa=ga("animationstart"),xa=ga("transitionrun"),va=ga("transitionstart"),ka=ga("transitioncancel"),za=ga("transitionend"),ja=new Map,Sa="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ca(e,t){ja.set(e,t),at(t,[e])}Sa.push("scrollEnd");var Ea="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},Pa=[],Ta=0,$a=0;function _a(){for(var e=Ta,t=$a=Ta=0;t<e;){var n=Pa[t];Pa[t++]=null;var a=Pa[t];Pa[t++]=null;var r=Pa[t];Pa[t++]=null;var o=Pa[t];if(Pa[t++]=null,null!==a&&null!==r){var i=a.pending;null===i?r.next=r:(r.next=i.next,i.next=r),a.pending=r}0!==o&&La(n,r,o)}}function Na(e,t,n,a){Pa[Ta++]=e,Pa[Ta++]=t,Pa[Ta++]=n,Pa[Ta++]=a,$a|=a,e.lanes|=a,null!==(e=e.alternate)&&(e.lanes|=a)}function Oa(e,t,n,a){return Na(e,t,n,a),Ma(e)}function Ra(e,t){return Na(e,null,null,t),Ma(e)}function La(e,t,n){e.lanes|=n;var a=e.alternate;null!==a&&(a.lanes|=n);for(var r=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(a=o.alternate)&&(a.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(r=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,r&&null!==t&&(r=31-xe(n),null===(a=(e=o.hiddenUpdates)[r])?e[r]=[t]:a.push(t),t.lane=536870912|n),o):null}function Ma(e){if(50<Kc)throw Kc=0,Gc=null,Error(i(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Da={};function Aa(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ia(e,t,n,a){return new Aa(e,t,n,a)}function Fa(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Wa(e,t){var n=e.alternate;return null===n?((n=Ia(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ua(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ha(e,t,n,a,r,o){var l=0;if(a=e,"function"===typeof e)Fa(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case E:return(e=Ia(31,n,t,r)).elementType=E,e.lanes=o,e;case y:return Ba(n.children,r,o,t);case b:l=8,r|=24;break;case w:return(e=Ia(12,n,t,2|r)).elementType=w,e.lanes=o,e;case z:return(e=Ia(13,n,t,r)).elementType=z,e.lanes=o,e;case j:return(e=Ia(19,n,t,r)).elementType=j,e.lanes=o,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case v:l=10;break e;case x:l=9;break e;case k:l=11;break e;case S:l=14;break e;case C:l=16,a=null;break e}l=29,n=Error(i(130,null===e?"null":typeof e,"")),a=null}return(t=Ia(l,n,t,r)).elementType=e,t.type=a,t.lanes=o,t}function Ba(e,t,n,a){return(e=Ia(7,e,a,t)).lanes=n,e}function Ka(e,t,n){return(e=Ia(6,e,null,t)).lanes=n,e}function Ga(e){var t=Ia(18,null,null,0);return t.stateNode=e,t}function Va(e,t,n){return(t=Ia(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ya=new WeakMap;function qa(e,t){if("object"===typeof e&&null!==e){var n=Ya.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ne(t)},Ya.set(e,t),t)}return{value:e,source:t,stack:ne(t)}}var Qa=[],Ja=0,Xa=null,Za=0,er=[],tr=0,nr=null,ar=1,rr="";function or(e,t){Qa[Ja++]=Za,Qa[Ja++]=Xa,Xa=e,Za=t}function ir(e,t,n){er[tr++]=ar,er[tr++]=rr,er[tr++]=nr,nr=e;var a=ar;e=rr;var r=32-xe(a)-1;a&=~(1<<r),n+=1;var o=32-xe(t)+r;if(30<o){var i=r-r%5;o=(a&(1<<i)-1).toString(32),a>>=i,r-=i,ar=1<<32-xe(t)+r|n<<r|a,rr=o+e}else ar=1<<o|n<<r|a,rr=e}function lr(e){null!==e.return&&(or(e,1),ir(e,1,0))}function sr(e){for(;e===Xa;)Xa=Qa[--Ja],Qa[Ja]=null,Za=Qa[--Ja],Qa[Ja]=null;for(;e===nr;)nr=er[--tr],er[tr]=null,rr=er[--tr],er[tr]=null,ar=er[--tr],er[tr]=null}function cr(e,t){er[tr++]=ar,er[tr++]=rr,er[tr++]=nr,ar=t.id,rr=t.overflow,nr=e}var ur=null,dr=null,pr=!1,fr=null,mr=!1,hr=Error(i(519));function gr(e){throw kr(qa(Error(i(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),hr}function yr(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[We]=e,t[Ue]=a,n){case"dialog":Ju("cancel",t),Ju("close",t);break;case"iframe":case"object":case"embed":Ju("load",t);break;case"video":case"audio":for(n=0;n<Yu.length;n++)Ju(Yu[n],t);break;case"source":Ju("error",t);break;case"img":case"image":case"link":Ju("error",t),Ju("load",t);break;case"details":Ju("toggle",t);break;case"input":Ju("invalid",t),wt(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ju("invalid",t);break;case"textarea":Ju("invalid",t),zt(t,a.value,a.defaultValue,a.children)}"string"!==typeof(n=a.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===a.suppressHydrationWarning||ud(t.textContent,n)?(null!=a.popover&&(Ju("beforetoggle",t),Ju("toggle",t)),null!=a.onScroll&&Ju("scroll",t),null!=a.onScrollEnd&&Ju("scrollend",t),null!=a.onClick&&(t.onclick=Nt),t=!0):t=!1,t||gr(e,!0)}function br(e){for(ur=e.return;ur;)switch(ur.tag){case 5:case 31:case 13:return void(mr=!1);case 27:case 3:return void(mr=!0);default:ur=ur.return}}function wr(e){if(e!==ur)return!1;if(!pr)return br(e),pr=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||xd(e.type,e.memoizedProps)),t=!t),t&&dr&&gr(e),br(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));dr=Md(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));dr=Md(e)}else 27===n?(n=dr,Ed(e.type)?(e=Ld,Ld=null,dr=e):dr=n):dr=ur?Rd(e.stateNode.nextSibling):null;return!0}function xr(){dr=ur=null,pr=!1}function vr(){var e=fr;return null!==e&&(null===_c?_c=e:_c.push.apply(_c,e),fr=null),e}function kr(e){null===fr?fr=[e]:fr.push(e)}var zr=I(null),jr=null,Sr=null;function Cr(e,t,n){W(zr,t._currentValue),t._currentValue=n}function Er(e){e._currentValue=zr.current,F(zr)}function Pr(e,t,n){for(;null!==e;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==a&&(a.childLanes|=t)):null!==a&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Tr(e,t,n,a){var r=e.child;for(null!==r&&(r.return=e);null!==r;){var o=r.dependencies;if(null!==o){var l=r.child;o=o.firstContext;e:for(;null!==o;){var s=o;o=r;for(var c=0;c<t.length;c++)if(s.context===t[c]){o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),Pr(o.return,n,e),a||(l=null);break e}o=s.next}}else if(18===r.tag){if(null===(l=r.return))throw Error(i(341));l.lanes|=n,null!==(o=l.alternate)&&(o.lanes|=n),Pr(l,n,e),l=null}else l=r.child;if(null!==l)l.return=r;else for(l=r;null!==l;){if(l===e){l=null;break}if(null!==(r=l.sibling)){r.return=l.return,l=r;break}l=l.return}r=l}}function $r(e,t,n,a){e=null;for(var r=t,o=!1;null!==r;){if(!o)if(0!==(524288&r.flags))o=!0;else if(0!==(262144&r.flags))break;if(10===r.tag){var l=r.alternate;if(null===l)throw Error(i(387));if(null!==(l=l.memoizedProps)){var s=r.type;Zn(r.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(r===V.current){if(null===(l=r.alternate))throw Error(i(387));l.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(null!==e?e.push(dp):e=[dp])}r=r.return}null!==e&&Tr(t,e,n,a),t.flags|=262144}function _r(e){for(e=e.firstContext;null!==e;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Nr(e){jr=e,Sr=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Or(e){return Lr(jr,e)}function Rr(e,t){return null===jr&&Nr(e),Lr(e,t)}function Lr(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Sr){if(null===e)throw Error(i(308));Sr=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sr=Sr.next=t;return n}var Mr="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Dr=a.unstable_scheduleCallback,Ar=a.unstable_NormalPriority,Ir={$$typeof:v,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fr(){return{controller:new Mr,data:new Map,refCount:0}}function Wr(e){e.refCount--,0===e.refCount&&Dr(Ar,function(){e.controller.abort()})}var Ur=null,Hr=0,Br=0,Kr=null;function Gr(){if(0===--Hr&&null!==Ur){null!==Kr&&(Kr.status="fulfilled");var e=Ur;Ur=null,Br=0,Kr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Vr=R.S;R.S=function(e,t){Rc=se(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Ur){var n=Ur=[];Hr=0,Br=Hu(),Kr={status:"pending",value:void 0,then:function(e){n.push(e)}}}Hr++,t.then(Gr,Gr)}(0,t),null!==Vr&&Vr(e,t)};var Yr=I(null);function qr(){var e=Yr.current;return null!==e?e:hc.pooledCache}function Qr(e,t){W(Yr,null===t?Yr.current:t.pool)}function Jr(){var e=qr();return null===e?null:{parent:Ir._currentValue,pool:e}}var Xr=Error(i(460)),Zr=Error(i(474)),eo=Error(i(542)),to={then:function(){}};function no(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ao(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Nt,Nt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw lo(e=t.reason),e;default:if("string"===typeof t.status)t.then(Nt,Nt);else{if(null!==(e=hc)&&100<e.shellSuspendCounter)throw Error(i(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw lo(e=t.reason),e}throw oo=t,Xr}}function ro(e){try{return(0,e._init)(e._payload)}catch(Gn){if(null!==Gn&&"object"===typeof Gn&&"function"===typeof Gn.then)throw oo=Gn,Xr;throw Gn}}var oo=null;function io(){if(null===oo)throw Error(i(459));var e=oo;return oo=null,e}function lo(e){if(e===Xr||e===eo)throw Error(i(483))}var so=null,co=0;function uo(e){var t=co;return co+=1,null===so&&(so=[]),ao(so,e,t)}function po(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function fo(e,t){if(t.$$typeof===m)throw Error(i(525));throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mo(e){function t(t,n){if(e){var a=t.deletions;null===a?(t.deletions=[n],t.flags|=16):a.push(n)}}function n(n,a){if(!e)return null;for(;null!==a;)t(n,a),a=a.sibling;return null}function a(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function r(e,t){return(e=Wa(e,t)).index=0,e.sibling=null,e}function o(t,n,a){return t.index=a,e?null!==(a=t.alternate)?(a=a.index)<n?(t.flags|=67108866,n):a:(t.flags|=67108866,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,a){return null===t||6!==t.tag?((t=Ka(n,e.mode,a)).return=e,t):((t=r(t,n)).return=e,t)}function c(e,t,n,a){var o=n.type;return o===y?d(e,t,n.props.children,a,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===C&&ro(o)===t.type)?(po(t=r(t,n.props),n),t.return=e,t):(po(t=Ha(n.type,n.key,n.props,null,e.mode,a),n),t.return=e,t)}function u(e,t,n,a){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Va(n,e.mode,a)).return=e,t):((t=r(t,n.children||[])).return=e,t)}function d(e,t,n,a,o){return null===t||7!==t.tag?((t=Ba(n,e.mode,a,o)).return=e,t):((t=r(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Ka(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case h:return po(n=Ha(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case g:return(t=Va(t,e.mode,n)).return=e,t;case C:return p(e,t=ro(t),n)}if(O(t)||$(t))return(t=Ba(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return p(e,uo(t),n);if(t.$$typeof===v)return p(e,Rr(e,t),n);fo(e,t)}return null}function f(e,t,n,a){var r=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==r?null:s(e,t,""+n,a);if("object"===typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===r?c(e,t,n,a):null;case g:return n.key===r?u(e,t,n,a):null;case C:return f(e,t,n=ro(n),a)}if(O(n)||$(n))return null!==r?null:d(e,t,n,a,null);if("function"===typeof n.then)return f(e,t,uo(n),a);if(n.$$typeof===v)return f(e,t,Rr(e,n),a);fo(e,n)}return null}function m(e,t,n,a,r){if("string"===typeof a&&""!==a||"number"===typeof a||"bigint"===typeof a)return s(t,e=e.get(n)||null,""+a,r);if("object"===typeof a&&null!==a){switch(a.$$typeof){case h:return c(t,e=e.get(null===a.key?n:a.key)||null,a,r);case g:return u(t,e=e.get(null===a.key?n:a.key)||null,a,r);case C:return m(e,t,n,a=ro(a),r)}if(O(a)||$(a))return d(t,e=e.get(n)||null,a,r,null);if("function"===typeof a.then)return m(e,t,n,uo(a),r);if(a.$$typeof===v)return m(e,t,n,Rr(t,a),r);fo(t,a)}return null}function b(s,c,u,d){if("object"===typeof u&&null!==u&&u.type===y&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case h:e:{for(var w=u.key;null!==c;){if(c.key===w){if((w=u.type)===y){if(7===c.tag){n(s,c.sibling),(d=r(c,u.props.children)).return=s,s=d;break e}}else if(c.elementType===w||"object"===typeof w&&null!==w&&w.$$typeof===C&&ro(w)===c.type){n(s,c.sibling),po(d=r(c,u.props),u),d.return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}u.type===y?((d=Ba(u.props.children,s.mode,d,u.key)).return=s,s=d):(po(d=Ha(u.type,u.key,u.props,null,s.mode,d),u),d.return=s,s=d)}return l(s);case g:e:{for(w=u.key;null!==c;){if(c.key===w){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(s,c.sibling),(d=r(c,u.children||[])).return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}(d=Va(u,s.mode,d)).return=s,s=d}return l(s);case C:return b(s,c,u=ro(u),d)}if(O(u))return function(r,i,l,s){for(var c=null,u=null,d=i,h=i=0,g=null;null!==d&&h<l.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var y=f(r,d,l[h],s);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(r,d),i=o(y,i,h),null===u?c=y:u.sibling=y,u=y,d=g}if(h===l.length)return n(r,d),pr&&or(r,h),c;if(null===d){for(;h<l.length;h++)null!==(d=p(r,l[h],s))&&(i=o(d,i,h),null===u?c=d:u.sibling=d,u=d);return pr&&or(r,h),c}for(d=a(d);h<l.length;h++)null!==(g=m(d,r,h,l[h],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?h:g.key),i=o(g,i,h),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),pr&&or(r,h),c}(s,c,u,d);if($(u)){if("function"!==typeof(w=$(u)))throw Error(i(150));return function(r,l,s,c){if(null==s)throw Error(i(151));for(var u=null,d=null,h=l,g=l=0,y=null,b=s.next();null!==h&&!b.done;g++,b=s.next()){h.index>g?(y=h,h=null):y=h.sibling;var w=f(r,h,b.value,c);if(null===w){null===h&&(h=y);break}e&&h&&null===w.alternate&&t(r,h),l=o(w,l,g),null===d?u=w:d.sibling=w,d=w,h=y}if(b.done)return n(r,h),pr&&or(r,g),u;if(null===h){for(;!b.done;g++,b=s.next())null!==(b=p(r,b.value,c))&&(l=o(b,l,g),null===d?u=b:d.sibling=b,d=b);return pr&&or(r,g),u}for(h=a(h);!b.done;g++,b=s.next())null!==(b=m(h,r,g,b.value,c))&&(e&&null!==b.alternate&&h.delete(null===b.key?g:b.key),l=o(b,l,g),null===d?u=b:d.sibling=b,d=b);return e&&h.forEach(function(e){return t(r,e)}),pr&&or(r,g),u}(s,c,u=w.call(u),d)}if("function"===typeof u.then)return b(s,c,uo(u),d);if(u.$$typeof===v)return b(s,c,Rr(s,u),d);fo(s,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(s,c.sibling),(d=r(c,u)).return=s,s=d):(n(s,c),(d=Ka(u,s.mode,d)).return=s,s=d),l(s)):n(s,c)}return function(e,t,n,a){try{co=0;var r=b(e,t,n,a);return so=null,r}catch(Gn){if(Gn===Xr||Gn===eo)throw Gn;var o=Ia(29,Gn,null,e.mode);return o.lanes=a,o.return=e,o}}}var ho=mo(!0),go=mo(!1),yo=!1;function bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function vo(e,t,n){var a=e.updateQueue;if(null===a)return null;if(a=a.shared,0!==(2&mc)){var r=a.pending;return null===r?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Ma(e),La(e,null,n),t}return Na(e,a,t,n),Ma(e)}function ko(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var a=t.lanes;n|=a&=e.pendingLanes,t.lanes=n,Re(e,n)}}function zo(e,t){var n=e.updateQueue,a=e.alternate;if(null!==a&&n===(a=a.updateQueue)){var r=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?r=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?r=o=t:o=o.next=t}else r=o=t;return n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var jo=!1;function So(){if(jo){if(null!==Kr)throw Kr}}function Co(e,t,n,a){jo=!1;var r=e.updateQueue;yo=!1;var o=r.firstBaseUpdate,i=r.lastBaseUpdate,l=r.shared.pending;if(null!==l){r.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?o=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==o){var d=r.baseState;for(i=0,u=c=s=null,l=o;;){var p=-536870913&l.lane,m=p!==l.lane;if(m?(yc&p)===p:(a&p)===p){0!==p&&p===Br&&(jo=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,g=l;p=t;var y=n;switch(g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(y,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=g.payload)?h.call(y,d,p):h)||void 0===p)break e;d=f({},d,p);break e;case 2:yo=!0}}null!==(p=l.callback)&&(e.flags|=64,m&&(e.flags|=8192),null===(m=r.callbacks)?r.callbacks=[p]:m.push(p))}else m={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=m,s=d):u=u.next=m,i|=p;if(null===(l=l.next)){if(null===(l=r.shared.pending))break;l=(m=l).next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}null===u&&(s=d),r.baseState=s,r.firstBaseUpdate=c,r.lastBaseUpdate=u,null===o&&(r.shared.lanes=0),Sc|=i,e.lanes=i,e.memoizedState=d}}function Eo(e,t){if("function"!==typeof e)throw Error(i(191,e));e.call(t)}function Po(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)Eo(n[e],t)}var To=I(null),$o=I(0);function _o(e,t){W($o,e=zc),W(To,t),zc=e|t.baseLanes}function No(){W($o,zc),W(To,To.current)}function Oo(){zc=$o.current,F(To),F($o)}var Ro=I(null),Lo=null;function Mo(e){var t=e.alternate;W(Wo,1&Wo.current),W(Ro,e),null===Lo&&(null===t||null!==To.current||null!==t.memoizedState)&&(Lo=e)}function Do(e){W(Wo,Wo.current),W(Ro,e),null===Lo&&(Lo=e)}function Ao(e){22===e.tag?(W(Wo,Wo.current),W(Ro,e),null===Lo&&(Lo=e)):Io()}function Io(){W(Wo,Wo.current),W(Ro,Ro.current)}function Fo(e){F(Ro),Lo===e&&(Lo=null),F(Wo)}var Wo=I(0);function Uo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Nd(n)||Od(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child;continue}}else if(0!==(128&t.flags))return t;if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ho=0,Bo=null,Ko=null,Go=null,Vo=!1,Yo=!1,qo=!1,Qo=0,Jo=0,Xo=null,Zo=0;function ei(){throw Error(i(321))}function ti(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Zn(e[n],t[n]))return!1;return!0}function ni(e,t,n,a,r,o){return Ho=o,Bo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=null===e||null===e.memoizedState?yl:bl,qo=!1,o=n(a,r),qo=!1,Yo&&(o=ri(t,n,a,r)),ai(e),o}function ai(e){R.H=gl;var t=null!==Ko&&null!==Ko.next;if(Ho=0,Go=Ko=Bo=null,Vo=!1,Jo=0,Xo=null,t)throw Error(i(300));null===e||Rl||null!==(e=e.dependencies)&&_r(e)&&(Rl=!0)}function ri(e,t,n,a){Bo=e;var r=0;do{if(Yo&&(Xo=null),Jo=0,Yo=!1,25<=r)throw Error(i(301));if(r+=1,Go=Ko=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}R.H=wl,o=t(n,a)}while(Yo);return o}function oi(){var e=R.H,t=e.useState()[0];return t="function"===typeof t.then?di(t):t,e=e.useState()[0],(null!==Ko?Ko.memoizedState:null)!==e&&(Bo.flags|=1024),t}function ii(){var e=0!==Qo;return Qo=0,e}function li(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function si(e){if(Vo){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Vo=!1}Ho=0,Go=Ko=Bo=null,Yo=!1,Jo=Qo=0,Xo=null}function ci(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Go?Bo.memoizedState=Go=e:Go=Go.next=e,Go}function ui(){if(null===Ko){var e=Bo.alternate;e=null!==e?e.memoizedState:null}else e=Ko.next;var t=null===Go?Bo.memoizedState:Go.next;if(null!==t)Go=t,Ko=e;else{if(null===e){if(null===Bo.alternate)throw Error(i(467));throw Error(i(310))}e={memoizedState:(Ko=e).memoizedState,baseState:Ko.baseState,baseQueue:Ko.baseQueue,queue:Ko.queue,next:null},null===Go?Bo.memoizedState=Go=e:Go=Go.next=e}return Go}function di(e){var t=Jo;return Jo+=1,null===Xo&&(Xo=[]),e=ao(Xo,e,t),t=Bo,null===(null===Go?t.memoizedState:Go.next)&&(t=t.alternate,R.H=null===t||null===t.memoizedState?yl:bl),e}function pi(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return di(e);if(e.$$typeof===v)return Or(e)}throw Error(i(438,String(e)))}function fi(e){var t=null,n=Bo.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var a=Bo.alternate;null!==a&&(null!==(a=a.updateQueue)&&(null!=(a=a.memoCache)&&(t={data:a.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=P;return t.index++,n}function mi(e,t){return"function"===typeof t?t(e):t}function hi(e){return gi(ui(),Ko,e)}function gi(e,t,n){var a=e.queue;if(null===a)throw Error(i(311));a.lastRenderedReducer=n;var r=e.baseQueue,o=a.pending;if(null!==o){if(null!==r){var l=r.next;r.next=o.next,o.next=l}t.baseQueue=r=o,a.pending=null}if(o=e.baseState,null===r)e.memoizedState=o;else{var s=l=null,c=null,u=t=r.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(yc&p)===p:(Ho&p)===p){var f=u.revertLane;if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Br&&(d=!0);else{if((Ho&f)===f){u=u.next,f===Br&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=p,l=o):c=c.next=p,Bo.lanes|=f,Sc|=f}p=u.action,qo&&n(o,p),o=u.hasEagerState?u.eagerState:n(o,p)}else f={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,l=o):c=c.next=f,Bo.lanes|=p,Sc|=p;u=u.next}while(null!==u&&u!==t);if(null===c?l=o:c.next=s,!Zn(o,e.memoizedState)&&(Rl=!0,d&&null!==(n=Kr)))throw n;e.memoizedState=o,e.baseState=l,e.baseQueue=c,a.lastRenderedState=o}return null===r&&(a.lanes=0),[e.memoizedState,a.dispatch]}function yi(e){var t=ui(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,o=t.memoizedState;if(null!==r){n.pending=null;var l=r=r.next;do{o=e(o,l.action),l=l.next}while(l!==r);Zn(o,t.memoizedState)||(Rl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function bi(e,t,n){var a=Bo,r=ui(),o=pr;if(o){if(void 0===n)throw Error(i(407));n=n()}else n=t();var l=!Zn((Ko||r).memoizedState,n);if(l&&(r.memoizedState=n,Rl=!0),r=r.queue,Hi(vi.bind(null,a,r,e),[e]),r.getSnapshot!==t||l||null!==Go&&1&Go.memoizedState.tag){if(a.flags|=2048,Ai(9,{destroy:void 0},xi.bind(null,a,r,n,t),null),null===hc)throw Error(i(349));o||0!==(127&Ho)||wi(a,t,n)}return n}function wi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Bo.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function xi(e,t,n,a){t.value=n,t.getSnapshot=a,ki(t)&&zi(e)}function vi(e,t,n){return n(function(){ki(t)&&zi(e)})}function ki(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zn(e,n)}catch(a){return!0}}function zi(e){var t=Ra(e,2);null!==t&&qc(t,e,2)}function ji(e){var t=ci();if("function"===typeof e){var n=e;if(e=n(),qo){we(!0);try{n()}finally{we(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:e},t}function Si(e,t,n,a){return e.baseState=n,gi(e,Ko,"function"===typeof a?a:mi)}function Ci(e,t,n,a,r){if(fl(e))throw Error(i(485));if(null!==(e=t.action)){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==R.T?n(!0):o.isTransition=!1,a(o),null===(n=t.pending)?(o.next=t.pending=o,Ei(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ei(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var o=R.T,i={};R.T=i;try{var l=n(r,a),s=R.S;null!==s&&s(i,l),Pi(e,t,l)}catch(c){$i(e,t,c)}finally{null!==o&&null!==i.types&&(o.types=i.types),R.T=o}}else try{Pi(e,t,o=n(r,a))}catch(u){$i(e,t,u)}}function Pi(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){Ti(e,t,n)},function(n){return $i(e,t,n)}):Ti(e,t,n)}function Ti(e,t,n){t.status="fulfilled",t.value=n,_i(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,Ei(e,n)))}function $i(e,t,n){var a=e.pending;if(e.pending=null,null!==a){a=a.next;do{t.status="rejected",t.reason=n,_i(t),t=t.next}while(t!==a)}e.action=null}function _i(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ni(e,t){return t}function Oi(e,t){if(pr){var n=hc.formState;if(null!==n){e:{var a=Bo;if(pr){if(dr){t:{for(var r=dr,o=mr;8!==r.nodeType;){if(!o){r=null;break t}if(null===(r=Rd(r.nextSibling))){r=null;break t}}r="F!"===(o=r.data)||"F"===o?r:null}if(r){dr=Rd(r.nextSibling),a="F!"===r.data;break e}}gr(a)}a=!1}a&&(t=n[0])}}return(n=ci()).memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:t},n.queue=a,n=ul.bind(null,Bo,a),a.dispatch=n,a=ji(!1),o=pl.bind(null,Bo,!1,a.queue),r={state:t,dispatch:null,action:e,pending:null},(a=ci()).queue=r,n=Ci.bind(null,Bo,r,o,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function Ri(e){return Li(ui(),Ko,e)}function Li(e,t,n){if(t=gi(e,t,Ni)[0],e=hi(mi)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var a=di(t)}catch(Gn){if(Gn===Xr)throw eo;throw Gn}else a=t;var r=(t=ui()).queue,o=r.dispatch;return n!==t.memoizedState&&(Bo.flags|=2048,Ai(9,{destroy:void 0},Mi.bind(null,r,n),null)),[a,o,e]}function Mi(e,t){e.action=t}function Di(e){var t=ui(),n=Ko;if(null!==n)return Li(t,n,e);ui(),t=t.memoizedState;var a=(n=ui()).queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ai(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},null===(t=Bo.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Ii(){return ui().memoizedState}function Fi(e,t,n,a){var r=ci();Bo.flags|=e,r.memoizedState=Ai(1|t,{destroy:void 0},n,void 0===a?null:a)}function Wi(e,t,n,a){var r=ui();a=void 0===a?null:a;var o=r.memoizedState.inst;null!==Ko&&null!==a&&ti(a,Ko.memoizedState.deps)?r.memoizedState=Ai(t,o,n,a):(Bo.flags|=e,r.memoizedState=Ai(1|t,o,n,a))}function Ui(e,t){Fi(8390656,8,e,t)}function Hi(e,t){Wi(2048,8,e,t)}function Bi(e){var t=ui().memoizedState;return function(e){Bo.flags|=4;var t=Bo.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},Bo.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&mc))throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Ki(e,t){return Wi(4,2,e,t)}function Gi(e,t){return Wi(4,4,e,t)}function Vi(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Yi(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Wi(4,4,Vi.bind(null,t,e),n)}function qi(){}function Qi(e,t){var n=ui();t=void 0===t?null:t;var a=n.memoizedState;return null!==t&&ti(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Ji(e,t){var n=ui();t=void 0===t?null:t;var a=n.memoizedState;if(null!==t&&ti(t,a[1]))return a[0];if(a=e(),qo){we(!0);try{e()}finally{we(!1)}}return n.memoizedState=[a,t],a}function Xi(e,t,n){return void 0===n||0!==(1073741824&Ho)&&0===(261930&yc)?e.memoizedState=t:(e.memoizedState=n,e=Yc(),Bo.lanes|=e,Sc|=e,n)}function Zi(e,t,n,a){return Zn(n,t)?n:null!==To.current?(e=Xi(e,n,a),Zn(e,t)||(Rl=!0),e):0===(42&Ho)||0!==(1073741824&Ho)&&0===(261930&yc)?(Rl=!0,e.memoizedState=n):(e=Yc(),Bo.lanes|=e,Sc|=e,t)}function el(e,t,n,a,r){var o=L.p;L.p=0!==o&&8>o?o:8;var i=R.T,l={};R.T=l,pl(e,!1,t,n);try{var s=r(),c=R.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)dl(e,t,function(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(a.status="rejected",a.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),a}(s,a),Vc());else dl(e,t,a,Vc())}catch(u){dl(e,t,{then:function(){},status:"rejected",reason:u},Vc())}finally{L.p=o,null!==i&&null!==l.types&&(i.types=l.types),R.T=i}}function tl(){}function nl(e,t,n,a){if(5!==e.tag)throw Error(i(476));var r=al(e).queue;el(e,r,t,M,null===n?tl:function(){return rl(e),n(a)})}function al(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:M,baseState:M,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:M},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function rl(e){var t=al(e);null===t.next&&(t=e.alternate.memoizedState),dl(e,t.next.queue,{},Vc())}function ol(){return Or(dp)}function il(){return ui().memoizedState}function ll(){return ui().memoizedState}function sl(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Vc(),a=vo(t,e=xo(n),n);return null!==a&&(qc(a,t,n),ko(a,t,n)),t={cache:Fr()},void(e.payload=t)}t=t.return}}function cl(e,t,n){var a=Vc();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fl(e)?ml(t,n):null!==(n=Oa(e,t,n,a))&&(qc(n,e,a),hl(n,t,a))}function ul(e,t,n){dl(e,t,n,Vc())}function dl(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fl(e))ml(t,r);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(r.hasEagerState=!0,r.eagerState=l,Zn(l,i))return Na(e,t,r,0),null===hc&&_a(),!1}catch(s){}if(null!==(n=Oa(e,t,r,a)))return qc(n,e,a),hl(n,t,a),!0}return!1}function pl(e,t,n,a){if(a={lane:2,revertLane:Hu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fl(e)){if(t)throw Error(i(479))}else null!==(t=Oa(e,n,a,2))&&qc(t,e,2)}function fl(e){var t=e.alternate;return e===Bo||null!==t&&t===Bo}function ml(e,t){Yo=Vo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hl(e,t,n){if(0!==(4194048&n)){var a=t.lanes;n|=a&=e.pendingLanes,t.lanes=n,Re(e,n)}}var gl={readContext:Or,use:pi,useCallback:ei,useContext:ei,useEffect:ei,useImperativeHandle:ei,useLayoutEffect:ei,useInsertionEffect:ei,useMemo:ei,useReducer:ei,useRef:ei,useState:ei,useDebugValue:ei,useDeferredValue:ei,useTransition:ei,useSyncExternalStore:ei,useId:ei,useHostTransitionStatus:ei,useFormState:ei,useActionState:ei,useOptimistic:ei,useMemoCache:ei,useCacheRefresh:ei};gl.useEffectEvent=ei;var yl={readContext:Or,use:pi,useCallback:function(e,t){return ci().memoizedState=[e,void 0===t?null:t],e},useContext:Or,useEffect:Ui,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Fi(4194308,4,Vi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fi(4194308,4,e,t)},useInsertionEffect:function(e,t){Fi(4,2,e,t)},useMemo:function(e,t){var n=ci();t=void 0===t?null:t;var a=e();if(qo){we(!0);try{e()}finally{we(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ci();if(void 0!==n){var r=n(t);if(qo){we(!0);try{n(t)}finally{we(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=cl.bind(null,Bo,e),[a.memoizedState,e]},useRef:function(e){return e={current:e},ci().memoizedState=e},useState:function(e){var t=(e=ji(e)).queue,n=ul.bind(null,Bo,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:qi,useDeferredValue:function(e,t){return Xi(ci(),e,t)},useTransition:function(){var e=ji(!1);return e=el.bind(null,Bo,e.queue,!0,!1),ci().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Bo,r=ci();if(pr){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===hc)throw Error(i(349));0!==(127&yc)||wi(a,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,Ui(vi.bind(null,a,o,e),[e]),a.flags|=2048,Ai(9,{destroy:void 0},xi.bind(null,a,o,n,t),null),n},useId:function(){var e=ci(),t=hc.identifierPrefix;if(pr){var n=rr;t="_"+t+"R_"+(n=(ar&~(1<<32-xe(ar)-1)).toString(32)+n),0<(n=Qo++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Zo++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ol,useFormState:Oi,useActionState:Oi,useOptimistic:function(e){var t=ci();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=pl.bind(null,Bo,!0,n),n.dispatch=t,[e,t]},useMemoCache:fi,useCacheRefresh:function(){return ci().memoizedState=sl.bind(null,Bo)},useEffectEvent:function(e){var t=ci(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&mc))throw Error(i(440));return n.impl.apply(void 0,arguments)}}},bl={readContext:Or,use:pi,useCallback:Qi,useContext:Or,useEffect:Hi,useImperativeHandle:Yi,useInsertionEffect:Ki,useLayoutEffect:Gi,useMemo:Ji,useReducer:hi,useRef:Ii,useState:function(){return hi(mi)},useDebugValue:qi,useDeferredValue:function(e,t){return Zi(ui(),Ko.memoizedState,e,t)},useTransition:function(){var e=hi(mi)[0],t=ui().memoizedState;return["boolean"===typeof e?e:di(e),t]},useSyncExternalStore:bi,useId:il,useHostTransitionStatus:ol,useFormState:Ri,useActionState:Ri,useOptimistic:function(e,t){return Si(ui(),0,e,t)},useMemoCache:fi,useCacheRefresh:ll};bl.useEffectEvent=Bi;var wl={readContext:Or,use:pi,useCallback:Qi,useContext:Or,useEffect:Hi,useImperativeHandle:Yi,useInsertionEffect:Ki,useLayoutEffect:Gi,useMemo:Ji,useReducer:yi,useRef:Ii,useState:function(){return yi(mi)},useDebugValue:qi,useDeferredValue:function(e,t){var n=ui();return null===Ko?Xi(n,e,t):Zi(n,Ko.memoizedState,e,t)},useTransition:function(){var e=yi(mi)[0],t=ui().memoizedState;return["boolean"===typeof e?e:di(e),t]},useSyncExternalStore:bi,useId:il,useHostTransitionStatus:ol,useFormState:Di,useActionState:Di,useOptimistic:function(e,t){var n=ui();return null!==Ko?Si(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fi,useCacheRefresh:ll};function xl(e,t,n,a){n=null===(n=n(a,t=e.memoizedState))||void 0===n?t:f({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}wl.useEffectEvent=Bi;var vl={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Vc(),r=xo(a);r.payload=t,void 0!==n&&null!==n&&(r.callback=n),null!==(t=vo(e,r,a))&&(qc(t,e,a),ko(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Vc(),r=xo(a);r.tag=1,r.payload=t,void 0!==n&&null!==n&&(r.callback=n),null!==(t=vo(e,r,a))&&(qc(t,e,a),ko(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Vc(),a=xo(n);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=vo(e,a,n))&&(qc(t,e,n),ko(t,e,n))}};function kl(e,t,n,a,r,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(a,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!ea(n,a)||!ea(r,o))}function zl(e,t,n,a){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,a),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&vl.enqueueReplaceState(t,t.state,null)}function jl(e,t){var n=t;if("ref"in t)for(var a in n={},t)"ref"!==a&&(n[a]=t[a]);if(e=e.defaultProps)for(var r in n===t&&(n=f({},n)),e)void 0===n[r]&&(n[r]=e[r]);return n}function Sl(e){Ea(e)}function Cl(e){console.error(e)}function El(e){Ea(e)}function Pl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Tl(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function $l(e,t,n){return(n=xo(n)).tag=3,n.payload={element:null},n.callback=function(){Pl(e,t)},n}function _l(e){return(e=xo(e)).tag=3,e}function Nl(e,t,n,a){var r=n.type.getDerivedStateFromError;if("function"===typeof r){var o=a.value;e.payload=function(){return r(o)},e.callback=function(){Tl(t,n,a)}}var i=n.stateNode;null!==i&&"function"===typeof i.componentDidCatch&&(e.callback=function(){Tl(t,n,a),"function"!==typeof r&&(null===Dc?Dc=new Set([this]):Dc.add(this));var e=a.stack;this.componentDidCatch(a.value,{componentStack:null!==e?e:""})})}var Ol=Error(i(461)),Rl=!1;function Ll(e,t,n,a){t.child=null===e?go(t,null,n,a):ho(t,e.child,n,a)}function Ml(e,t,n,a,r){n=n.render;var o=t.ref;if("ref"in a){var i={};for(var l in a)"ref"!==l&&(i[l]=a[l])}else i=a;return Nr(t),a=ni(e,t,n,i,o,r),l=ii(),null===e||Rl?(pr&&l&&lr(t),t.flags|=1,Ll(e,t,a,r),t.child):(li(e,t,r),os(e,t,r))}function Dl(e,t,n,a,r){if(null===e){var o=n.type;return"function"!==typeof o||Fa(o)||void 0!==o.defaultProps||null!==n.compare?((e=Ha(n.type,null,a,t,t.mode,r)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Al(e,t,o,a,r))}if(o=e.child,!is(e,r)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:ea)(i,a)&&e.ref===t.ref)return os(e,t,r)}return t.flags|=1,(e=Wa(o,a)).ref=t.ref,e.return=t,t.child=e}function Al(e,t,n,a,r){if(null!==e){var o=e.memoizedProps;if(ea(o,a)&&e.ref===t.ref){if(Rl=!1,t.pendingProps=a=o,!is(e,r))return t.lanes=e.lanes,os(e,t,r);0!==(131072&e.flags)&&(Rl=!0)}}return Kl(e,t,n,a,r)}function Il(e,t,n,a){var r=a.children,o=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===a.mode){if(0!==(128&t.flags)){if(o=null!==o?o.baseLanes|n:n,null!==e){for(a=t.child=e.child,r=0;null!==a;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~o}else a=0,t.child=null;return Wl(e,t,o,n,a)}if(0===(536870912&n))return a=t.lanes=536870912,Wl(e,t,null!==o?o.baseLanes|n:n,n,a);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Qr(0,null!==o?o.cachePool:null),null!==o?_o(t,o):No(),Ao(t)}else null!==o?(Qr(0,o.cachePool),_o(t,o),Io(),t.memoizedState=null):(null!==e&&Qr(0,null),No(),Io());return Ll(e,t,r,n),t.child}function Fl(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Wl(e,t,n,a,r){var o=qr();return o=null===o?null:{parent:Ir._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&Qr(0,null),No(),Ao(t),null!==e&&$r(e,t,a,!0),t.childLanes=r,null}function Ul(e,t){return(t=es({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function Hl(e,t,n){return ho(t,e.child,null,n),(e=Ul(t,t.pendingProps)).flags|=2,Fo(t),t.memoizedState=null,e}function Bl(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(i(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Kl(e,t,n,a,r){return Nr(t),n=ni(e,t,n,a,void 0,r),a=ii(),null===e||Rl?(pr&&a&&lr(t),t.flags|=1,Ll(e,t,n,r),t.child):(li(e,t,r),os(e,t,r))}function Gl(e,t,n,a,r,o){return Nr(t),t.updateQueue=null,n=ri(t,a,n,r),ai(e),a=ii(),null===e||Rl?(pr&&a&&lr(t),t.flags|=1,Ll(e,t,n,o),t.child):(li(e,t,o),os(e,t,o))}function Vl(e,t,n,a,r){if(Nr(t),null===t.stateNode){var o=Da,i=n.contextType;"object"===typeof i&&null!==i&&(o=Or(i)),o=new n(a,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=vl,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=a,o.state=t.memoizedState,o.refs={},bo(t),i=n.contextType,o.context="object"===typeof i&&null!==i?Or(i):Da,o.state=t.memoizedState,"function"===typeof(i=n.getDerivedStateFromProps)&&(xl(t,n,i,a),o.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(i=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),i!==o.state&&vl.enqueueReplaceState(o,o.state,null),Co(t,a,o,r),So(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),a=!0}else if(null===e){o=t.stateNode;var l=t.memoizedProps,s=jl(n,l);o.props=s;var c=o.context,u=n.contextType;i=Da,"object"===typeof u&&null!==u&&(i=Or(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l||c!==i)&&zl(t,o,a,i),yo=!1;var p=t.memoizedState;o.state=p,Co(t,a,o,r),So(),c=t.memoizedState,l||p!==c||yo?("function"===typeof d&&(xl(t,n,d,a),c=t.memoizedState),(s=yo||kl(t,n,s,a,p,c,i))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=c),o.props=a,o.state=c,o.context=i,a=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,wo(e,t),u=jl(n,i=t.memoizedProps),o.props=u,d=t.pendingProps,p=o.context,c=n.contextType,s=Da,"object"===typeof c&&null!==c&&(s=Or(c)),(c="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i!==d||p!==s)&&zl(t,o,a,s),yo=!1,p=t.memoizedState,o.state=p,Co(t,a,o,r),So();var f=t.memoizedState;i!==d||p!==f||yo||null!==e&&null!==e.dependencies&&_r(e.dependencies)?("function"===typeof l&&(xl(t,n,l,a),f=t.memoizedState),(u=yo||kl(t,n,u,a,p,f,s)||null!==e&&null!==e.dependencies&&_r(e.dependencies))?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(a,f,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(a,f,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=f),o.props=a,o.state=f,o.context=s,a=u):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}return o=a,Bl(e,t),a=0!==(128&t.flags),o||a?(o=t.stateNode,n=a&&"function"!==typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&a?(t.child=ho(t,e.child,null,r),t.child=ho(t,null,n,r)):Ll(e,t,n,r),t.memoizedState=o.state,e=t.child):e=os(e,t,r),e}function Yl(e,t,n,a){return xr(),t.flags|=256,Ll(e,t,n,a),t.child}var ql={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ql(e){return{baseLanes:e,cachePool:Jr()}}function Jl(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=Pc),e}function Xl(e,t,n){var a,r=t.pendingProps,o=!1,l=0!==(128&t.flags);if((a=l)||(a=(null===e||null!==e.memoizedState)&&0!==(2&Wo.current)),a&&(o=!0,t.flags&=-129),a=0!==(32&t.flags),t.flags&=-33,null===e){if(pr){if(o?Mo(t):Io(),(e=dr)?null!==(e=null!==(e=_d(e,mr))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==nr?{id:ar,overflow:rr}:null,retryLane:536870912,hydrationErrors:null},(n=Ga(e)).return=t,t.child=n,ur=t,dr=null):e=null,null===e)throw gr(t);return Od(e)?t.lanes=32:t.lanes=536870912,null}var s=r.children;return r=r.fallback,o?(Io(),s=es({mode:"hidden",children:s},o=t.mode),r=Ba(r,o,n,null),s.return=t,r.return=t,s.sibling=r,t.child=s,(r=t.child).memoizedState=Ql(n),r.childLanes=Jl(e,a,n),t.memoizedState=ql,Fl(null,r)):(Mo(t),Zl(t,s))}var c=e.memoizedState;if(null!==c&&null!==(s=c.dehydrated)){if(l)256&t.flags?(Mo(t),t.flags&=-257,t=ts(e,t,n)):null!==t.memoizedState?(Io(),t.child=e.child,t.flags|=128,t=null):(Io(),s=r.fallback,o=t.mode,r=es({mode:"visible",children:r.children},o),(s=Ba(s,o,n,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,ho(t,e.child,null,n),(r=t.child).memoizedState=Ql(n),r.childLanes=Jl(e,a,n),t.memoizedState=ql,t=Fl(null,r));else if(Mo(t),Od(s)){if(a=s.nextSibling&&s.nextSibling.dataset)var u=a.dgst;a=u,(r=Error(i(419))).stack="",r.digest=a,kr({value:r,source:null,stack:null}),t=ts(e,t,n)}else if(Rl||$r(e,t,n,!1),a=0!==(n&e.childLanes),Rl||a){if(null!==(a=hc)&&(0!==(r=Le(a,n))&&r!==c.retryLane))throw c.retryLane=r,Ra(e,r),qc(a,e,r),Ol;Nd(s)||lu(),t=ts(e,t,n)}else Nd(s)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,dr=Rd(s.nextSibling),ur=t,pr=!0,fr=null,mr=!1,null!==e&&cr(t,e),(t=Zl(t,r.children)).flags|=4096);return t}return o?(Io(),s=r.fallback,o=t.mode,u=(c=e.child).sibling,(r=Wa(c,{mode:"hidden",children:r.children})).subtreeFlags=65011712&c.subtreeFlags,null!==u?s=Wa(u,s):(s=Ba(s,o,n,null)).flags|=2,s.return=t,r.return=t,r.sibling=s,t.child=r,Fl(null,r),r=t.child,null===(s=e.child.memoizedState)?s=Ql(n):(null!==(o=s.cachePool)?(c=Ir._currentValue,o=o.parent!==c?{parent:c,pool:c}:o):o=Jr(),s={baseLanes:s.baseLanes|n,cachePool:o}),r.memoizedState=s,r.childLanes=Jl(e,a,n),t.memoizedState=ql,Fl(e.child,r)):(Mo(t),e=(n=e.child).sibling,(n=Wa(n,{mode:"visible",children:r.children})).return=t,n.sibling=null,null!==e&&(null===(a=t.deletions)?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n)}function Zl(e,t){return(t=es({mode:"visible",children:t},e.mode)).return=e,e.child=t}function es(e,t){return(e=Ia(22,e,null,t)).lanes=0,e}function ts(e,t,n){return ho(t,e.child,null,n),(e=Zl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ns(e,t,n){e.lanes|=t;var a=e.alternate;null!==a&&(a.lanes|=t),Pr(e.return,t,n)}function as(e,t,n,a,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=n,i.tailMode=r,i.treeForkCount=o)}function rs(e,t,n){var a=t.pendingProps,r=a.revealOrder,o=a.tail;a=a.children;var i=Wo.current,l=0!==(2&i);if(l?(i=1&i|2,t.flags|=128):i&=1,W(Wo,i),Ll(e,t,a,n),a=pr?Za:0,!l&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ns(e,n,t);else if(19===e.tag)ns(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;null!==n;)null!==(e=n.alternate)&&null===Uo(e)&&(r=n),n=n.sibling;null===(n=r)?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),as(t,!1,r,n,o,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;null!==r;){if(null!==(e=r.alternate)&&null===Uo(e)){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}as(t,!0,n,null,o,a);break;case"together":as(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function os(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Sc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if($r(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Wa(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Wa(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function is(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!_r(e))}function ls(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Rl=!0;else{if(!is(e,n)&&0===(128&t.flags))return Rl=!1,function(e,t,n){switch(t.tag){case 3:Y(t,t.stateNode.containerInfo),Cr(0,Ir,e.memoizedState.cache),xr();break;case 27:case 5:Q(t);break;case 4:Y(t,t.stateNode.containerInfo);break;case 10:Cr(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,Do(t),null;break;case 13:var a=t.memoizedState;if(null!==a)return null!==a.dehydrated?(Mo(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Xl(e,t,n):(Mo(t),null!==(e=os(e,t,n))?e.sibling:null);Mo(t);break;case 19:var r=0!==(128&e.flags);if((a=0!==(n&t.childLanes))||($r(e,t,n,!1),a=0!==(n&t.childLanes)),r){if(a)return rs(e,t,n);t.flags|=128}if(null!==(r=t.memoizedState)&&(r.rendering=null,r.tail=null,r.lastEffect=null),W(Wo,Wo.current),a)break;return null;case 22:return t.lanes=0,Il(e,t,n,t.pendingProps);case 24:Cr(0,Ir,e.memoizedState.cache)}return os(e,t,n)}(e,t,n);Rl=0!==(131072&e.flags)}else Rl=!1,pr&&0!==(1048576&t.flags)&&ir(t,Za,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ro(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var r=e.$$typeof;if(r===k){t.tag=11,t=Ml(null,t,e,a,n);break e}if(r===S){t.tag=14,t=Dl(null,t,e,a,n);break e}}throw t=N(e)||e,Error(i(306,t,""))}Fa(e)?(a=jl(e,a),t.tag=1,t=Vl(null,t,e,a,n)):(t.tag=0,t=Kl(null,t,e,a,n))}return t;case 0:return Kl(e,t,t.type,t.pendingProps,n);case 1:return Vl(e,t,a=t.type,r=jl(a,t.pendingProps),n);case 3:e:{if(Y(t,t.stateNode.containerInfo),null===e)throw Error(i(387));a=t.pendingProps;var o=t.memoizedState;r=o.element,wo(e,t),Co(t,a,null,n);var l=t.memoizedState;if(a=l.cache,Cr(0,Ir,a),a!==o.cache&&Tr(t,[Ir],n,!0),So(),a=l.element,o.isDehydrated){if(o={element:a,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Yl(e,t,a,n);break e}if(a!==r){kr(r=qa(Error(i(424)),t)),t=Yl(e,t,a,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(dr=Rd(e.firstChild),ur=t,pr=!0,fr=null,mr=!0,n=go(t,null,a,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(xr(),a===r){t=os(e,t,n);break e}Ll(e,t,a,n)}t=t.child}return t;case 26:return Bl(e,t),null===e?(n=Gd(t.type,null,t.pendingProps,null))?t.memoizedState=n:pr||(n=t.type,e=t.pendingProps,(a=yd(G.current).createElement(n))[We]=t,a[Ue]=e,fd(a,n,e),et(a),t.stateNode=a):t.memoizedState=Gd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Q(t),null===e&&pr&&(a=t.stateNode=Ad(t.type,t.pendingProps,G.current),ur=t,mr=!0,r=dr,Ed(t.type)?(Ld=r,dr=Rd(a.firstChild)):dr=r),Ll(e,t,t.pendingProps.children,n),Bl(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&pr&&((r=a=dr)&&(null!==(a=function(e,t,n,a){for(;1===e.nodeType;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(a){if(!e[Ye])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(null==r.href||""===r.href?null:r.href)||e.getAttribute("crossorigin")!==(null==r.crossOrigin?null:r.crossOrigin)||e.getAttribute("title")!==(null==r.title?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==r.src?null:r.src)||e.getAttribute("type")!==(null==r.type?null:r.type)||e.getAttribute("crossorigin")!==(null==r.crossOrigin?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==r.name?null:""+r.name;if("hidden"===r.type&&e.getAttribute("name")===o)return e}if(null===(e=Rd(e.nextSibling)))break}return null}(a,t.type,t.pendingProps,mr))?(t.stateNode=a,ur=t,dr=Rd(a.firstChild),mr=!1,r=!0):r=!1),r||gr(t)),Q(t),r=t.type,o=t.pendingProps,l=null!==e?e.memoizedProps:null,a=o.children,xd(r,o)?a=null:null!==l&&xd(r,l)&&(t.flags|=32),null!==t.memoizedState&&(r=ni(e,t,oi,null,null,n),dp._currentValue=r),Bl(e,t),Ll(e,t,a,n),t.child;case 6:return null===e&&pr&&((e=n=dr)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=Rd(e.nextSibling)))return null}return e}(n,t.pendingProps,mr))?(t.stateNode=n,ur=t,dr=null,e=!0):e=!1),e||gr(t)),null;case 13:return Xl(e,t,n);case 4:return Y(t,t.stateNode.containerInfo),a=t.pendingProps,null===e?t.child=ho(t,null,a,n):Ll(e,t,a,n),t.child;case 11:return Ml(e,t,t.type,t.pendingProps,n);case 7:return Ll(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ll(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Cr(0,t.type,a.value),Ll(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,Nr(t),a=a(r=Or(r)),t.flags|=1,Ll(e,t,a,n),t.child;case 14:return Dl(e,t,t.type,t.pendingProps,n);case 15:return Al(e,t,t.type,t.pendingProps,n);case 19:return rs(e,t,n);case 31:return function(e,t,n){var a=t.pendingProps,r=0!==(128&t.flags);if(t.flags&=-129,null===e){if(pr){if("hidden"===a.mode)return e=Ul(t,a),t.lanes=536870912,Fl(null,e);if(Do(t),(e=dr)?null!==(e=null!==(e=_d(e,mr))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==nr?{id:ar,overflow:rr}:null,retryLane:536870912,hydrationErrors:null},(n=Ga(e)).return=t,t.child=n,ur=t,dr=null):e=null,null===e)throw gr(t);return t.lanes=536870912,null}return Ul(t,a)}var o=e.memoizedState;if(null!==o){var l=o.dehydrated;if(Do(t),r)if(256&t.flags)t.flags&=-257,t=Hl(e,t,n);else{if(null===t.memoizedState)throw Error(i(558));t.child=e.child,t.flags|=128,t=null}else if(Rl||$r(e,t,n,!1),r=0!==(n&e.childLanes),Rl||r){if(null!==(a=hc)&&0!==(l=Le(a,n))&&l!==o.retryLane)throw o.retryLane=l,Ra(e,l),qc(a,e,l),Ol;lu(),t=Hl(e,t,n)}else e=o.treeContext,dr=Rd(l.nextSibling),ur=t,pr=!0,fr=null,mr=!1,null!==e&&cr(t,e),(t=Ul(t,a)).flags|=4096;return t}return(e=Wa(e.child,{mode:a.mode,children:a.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return Il(e,t,n,t.pendingProps);case 24:return Nr(t),a=Or(Ir),null===e?(null===(r=qr())&&(r=hc,o=Fr(),r.pooledCache=o,o.refCount++,null!==o&&(r.pooledCacheLanes|=n),r=o),t.memoizedState={parent:a,cache:r},bo(t),Cr(0,Ir,r)):(0!==(e.lanes&n)&&(wo(e,t),Co(t,null,null,n),So()),r=e.memoizedState,o=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=r),Cr(0,Ir,a)):(a=o.cache,Cr(0,Ir,a),a!==r.cache&&Tr(t,[Ir],n,!0))),Ll(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function ss(e){e.flags|=4}function cs(e,t,n,a,r){if((t=0!==(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&r)===r)if(e.stateNode.complete)e.flags|=8192;else{if(!ru())throw oo=to,Zr;e.flags|=8192}}else e.flags&=-16777217}function us(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!op(t)){if(!ru())throw oo=to,Zr;e.flags|=8192}}function ds(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?$e():536870912,e.lanes|=t,Tc|=t)}function ps(e,t){if(!pr)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;null!==n;)null!==n.alternate&&(a=n),n=n.sibling;null===a?t||null===e.tail?e.tail=null:e.tail.sibling=null:a.sibling=null}}function fs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;null!==r;)n|=r.lanes|r.childLanes,a|=65011712&r.subtreeFlags,a|=65011712&r.flags,r.return=e,r=r.sibling;else for(r=e.child;null!==r;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function ms(e,t,n){var a=t.pendingProps;switch(sr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return fs(t),null;case 3:return n=t.stateNode,a=null,null!==e&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Er(Ir),q(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(wr(t)?ss(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,vr())),fs(t),null;case 26:var r=t.type,o=t.memoizedState;return null===e?(ss(t),null!==o?(fs(t),us(t,o)):(fs(t),cs(t,r,0,0,n))):o?o!==e.memoizedState?(ss(t),fs(t),us(t,o)):(fs(t),t.flags&=-16777217):((e=e.memoizedProps)!==a&&ss(t),fs(t),cs(t,r,0,0,n)),null;case 27:if(J(t),n=G.current,r=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==a&&ss(t);else{if(!a){if(null===t.stateNode)throw Error(i(166));return fs(t),null}e=B.current,wr(t)?yr(t):(e=Ad(r,a,n),t.stateNode=e,ss(t))}return fs(t),null;case 5:if(J(t),r=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==a&&ss(t);else{if(!a){if(null===t.stateNode)throw Error(i(166));return fs(t),null}if(o=B.current,wr(t))yr(t);else{var l=yd(G.current);switch(o){case 1:o=l.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:o=l.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":o=l.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":o=l.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":(o=l.createElement("div")).innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o="string"===typeof a.is?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?o.multiple=!0:a.size&&(o.size=a.size);break;default:o="string"===typeof a.is?l.createElement(r,{is:a.is}):l.createElement(r)}}o[We]=t,o[Ue]=a;e:for(l=t.child;null!==l;){if(5===l.tag||6===l.tag)o.appendChild(l.stateNode);else if(4!==l.tag&&27!==l.tag&&null!==l.child){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;null===l.sibling;){if(null===l.return||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=o;e:switch(fd(o,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&ss(t)}}return fs(t),cs(t,t.type,null===e||e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==a&&ss(t);else{if("string"!==typeof a&&null===t.stateNode)throw Error(i(166));if(e=G.current,wr(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,null!==(r=ur))switch(r.tag){case 27:case 5:a=r.memoizedProps}e[We]=t,(e=!!(e.nodeValue===n||null!==a&&!0===a.suppressHydrationWarning||ud(e.nodeValue,n)))||gr(t,!0)}else(e=yd(e).createTextNode(a))[We]=t,t.stateNode=e}return fs(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(a=wr(t),null!==n){if(null===e){if(!a)throw Error(i(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(i(557));e[We]=t}else xr(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;fs(t),e=!1}else n=vr(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(Fo(t),t):(Fo(t),null);if(0!==(128&t.flags))throw Error(i(558))}return fs(t),null;case 13:if(a=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(r=wr(t),null!==a&&null!==a.dehydrated){if(null===e){if(!r)throw Error(i(318));if(!(r=null!==(r=t.memoizedState)?r.dehydrated:null))throw Error(i(317));r[We]=t}else xr(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;fs(t),r=!1}else r=vr(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return 256&t.flags?(Fo(t),t):(Fo(t),null)}return Fo(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==a,e=null!==e&&null!==e.memoizedState,n&&(r=null,null!==(a=t.child).alternate&&null!==a.alternate.memoizedState&&null!==a.alternate.memoizedState.cachePool&&(r=a.alternate.memoizedState.cachePool.pool),o=null,null!==a.memoizedState&&null!==a.memoizedState.cachePool&&(o=a.memoizedState.cachePool.pool),o!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ds(t,t.updateQueue),fs(t),null);case 4:return q(),null===e&&ed(t.stateNode.containerInfo),fs(t),null;case 10:return Er(t.type),fs(t),null;case 19:if(F(Wo),null===(a=t.memoizedState))return fs(t),null;if(r=0!==(128&t.flags),null===(o=a.rendering))if(r)ps(a,!1);else{if(0!==jc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=Uo(e))){for(t.flags|=128,ps(a,!1),e=o.updateQueue,t.updateQueue=e,ds(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Ua(n,e),n=n.sibling;return W(Wo,1&Wo.current|2),pr&&or(t,a.treeForkCount),t.child}e=e.sibling}null!==a.tail&&se()>Lc&&(t.flags|=128,r=!0,ps(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=Uo(o))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,ds(t,e),ps(a,!0),null===a.tail&&"hidden"===a.tailMode&&!o.alternate&&!pr)return fs(t),null}else 2*se()-a.renderingStartTime>Lc&&536870912!==n&&(t.flags|=128,r=!0,ps(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=a.last)?e.sibling=o:t.child=o,a.last=o)}return null!==a.tail?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=se(),e.sibling=null,n=Wo.current,W(Wo,r?1&n|2:1&n),pr&&or(t,a.treeForkCount),e):(fs(t),null);case 22:case 23:return Fo(t),Oo(),a=null!==t.memoizedState,null!==e?null!==e.memoizedState!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?0!==(536870912&n)&&0===(128&t.flags)&&(fs(t),6&t.subtreeFlags&&(t.flags|=8192)):fs(t),null!==(n=t.updateQueue)&&ds(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),a=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),null!==e&&F(Yr),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Er(Ir),fs(t),null;case 25:case 30:return null}throw Error(i(156,t.tag))}function hs(e,t){switch(sr(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Er(Ir),q(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return J(t),null;case 31:if(null!==t.memoizedState){if(Fo(t),null===t.alternate)throw Error(i(340));xr()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(Fo(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));xr()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return F(Wo),null;case 4:return q(),null;case 10:return Er(t.type),null;case 22:case 23:return Fo(t),Oo(),null!==e&&F(Yr),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return Er(Ir),null;default:return null}}function gs(e,t){switch(sr(t),t.tag){case 3:Er(Ir),q();break;case 26:case 27:case 5:J(t);break;case 4:q();break;case 31:null!==t.memoizedState&&Fo(t);break;case 13:Fo(t);break;case 19:F(Wo);break;case 10:Er(t.type);break;case 22:case 23:Fo(t),Oo(),null!==e&&F(Yr);break;case 24:Er(Ir)}}function ys(e,t){try{var n=t.updateQueue,a=null!==n?n.lastEffect:null;if(null!==a){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var o=n.create,i=n.inst;a=o(),i.destroy=a}n=n.next}while(n!==r)}}catch(l){ju(t,t.return,l)}}function bs(e,t,n){try{var a=t.updateQueue,r=null!==a?a.lastEffect:null;if(null!==r){var o=r.next;a=o;do{if((a.tag&e)===e){var i=a.inst,l=i.destroy;if(void 0!==l){i.destroy=void 0,r=t;var s=n,c=l;try{c()}catch(u){ju(r,s,u)}}}a=a.next}while(a!==o)}}catch(u){ju(t,t.return,u)}}function ws(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{Po(t,n)}catch(a){ju(e,e.return,a)}}}function xs(e,t,n){n.props=jl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ju(e,t,a)}}function vs(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;default:a=e.stateNode}"function"===typeof n?e.refCleanup=n(a):n.current=a}}catch(r){ju(e,t,r)}}function ks(e,t){var n=e.ref,a=e.refCleanup;if(null!==n)if("function"===typeof a)try{a()}catch(r){ju(e,t,r)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(o){ju(e,t,o)}else n.current=null}function zs(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){ju(e,e.return,r)}}function js(e,t,n){try{var a=e.stateNode;!function(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,l=null,s=null,c=null,u=null,d=null;for(m in n){var p=n[m];if(n.hasOwnProperty(m)&&null!=p)switch(m){case"checked":case"value":break;case"defaultValue":c=p;default:a.hasOwnProperty(m)||dd(e,t,m,null,a,p)}}for(var f in a){var m=a[f];if(p=n[f],a.hasOwnProperty(f)&&(null!=m||null!=p))switch(f){case"type":o=m;break;case"name":r=m;break;case"checked":u=m;break;case"defaultChecked":d=m;break;case"value":l=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(i(137,t));break;default:m!==p&&dd(e,t,f,m,a,p)}}return void bt(e,l,s,c,u,d,o,r);case"select":for(o in m=l=s=f=null,n)if(c=n[o],n.hasOwnProperty(o)&&null!=c)switch(o){case"value":break;case"multiple":m=c;default:a.hasOwnProperty(o)||dd(e,t,o,null,a,c)}for(r in a)if(o=a[r],c=n[r],a.hasOwnProperty(r)&&(null!=o||null!=c))switch(r){case"value":f=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:o!==c&&dd(e,t,r,o,a,c)}return t=s,n=l,a=m,void(null!=f?vt(e,!!n,f,!1):!!a!==!!n&&(null!=t?vt(e,!!n,t,!0):vt(e,!!n,n?[]:"",!1)));case"textarea":for(s in m=f=null,n)if(r=n[s],n.hasOwnProperty(s)&&null!=r&&!a.hasOwnProperty(s))switch(s){case"value":case"children":break;default:dd(e,t,s,null,a,r)}for(l in a)if(r=a[l],o=n[l],a.hasOwnProperty(l)&&(null!=r||null!=o))switch(l){case"value":f=r;break;case"defaultValue":m=r;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=r)throw Error(i(91));break;default:r!==o&&dd(e,t,l,r,a,o)}return void kt(e,f,m);case"option":for(var h in n)if(f=n[h],n.hasOwnProperty(h)&&null!=f&&!a.hasOwnProperty(h))if("selected"===h)e.selected=!1;else dd(e,t,h,null,a,f);for(c in a)if(f=a[c],m=n[c],a.hasOwnProperty(c)&&f!==m&&(null!=f||null!=m))if("selected"===c)e.selected=f&&"function"!==typeof f&&"symbol"!==typeof f;else dd(e,t,c,f,a,m);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)f=n[g],n.hasOwnProperty(g)&&null!=f&&!a.hasOwnProperty(g)&&dd(e,t,g,null,a,f);for(u in a)if(f=a[u],m=n[u],a.hasOwnProperty(u)&&f!==m&&(null!=f||null!=m))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(i(137,t));break;default:dd(e,t,u,f,a,m)}return;default:if(Pt(t)){for(var y in n)f=n[y],n.hasOwnProperty(y)&&void 0!==f&&!a.hasOwnProperty(y)&&pd(e,t,y,void 0,a,f);for(d in a)f=a[d],m=n[d],!a.hasOwnProperty(d)||f===m||void 0===f&&void 0===m||pd(e,t,d,f,a,m);return}}for(var b in n)f=n[b],n.hasOwnProperty(b)&&null!=f&&!a.hasOwnProperty(b)&&dd(e,t,b,null,a,f);for(p in a)f=a[p],m=n[p],!a.hasOwnProperty(p)||f===m||null==f&&null==m||dd(e,t,p,f,a,m)}(a,e.type,n,t),a[Ue]=t}catch(r){ju(e,e.return,r)}}function Ss(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&Ed(e.type)||4===e.tag}function Cs(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Ss(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&Ed(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Es(e,t,n){var a=e.tag;if(5===a||6===a)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Nt));else if(4!==a&&(27===a&&Ed(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(Es(e,t,n),e=e.sibling;null!==e;)Es(e,t,n),e=e.sibling}function Ps(e,t,n){var a=e.tag;if(5===a||6===a)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==a&&(27===a&&Ed(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(Ps(e,t,n),e=e.sibling;null!==e;)Ps(e,t,n),e=e.sibling}function Ts(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);fd(t,a,n),t[We]=e,t[Ue]=n}catch(o){ju(e,e.return,o)}}var $s=!1,_s=!1,Ns=!1,Os="function"===typeof WeakSet?WeakSet:Set,Rs=null;function Ls(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:qs(e,n),4&a&&ys(5,n);break;case 1:if(qs(e,n),4&a)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(i){ju(n,n.return,i)}else{var r=jl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){ju(n,n.return,l)}}64&a&&ws(n),512&a&&vs(n,n.return);break;case 3:if(qs(e,n),64&a&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{Po(e,t)}catch(i){ju(n,n.return,i)}}break;case 27:null===t&&4&a&&Ts(n);case 26:case 5:qs(e,n),null===t&&4&a&&zs(n),512&a&&vs(n,n.return);break;case 12:qs(e,n);break;case 31:qs(e,n),4&a&&Ws(e,n);break;case 13:qs(e,n),4&a&&Us(e,n),64&a&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}(e,n=Pu.bind(null,n))));break;case 22:if(!(a=null!==n.memoizedState||$s)){t=null!==t&&null!==t.memoizedState||_s,r=$s;var o=_s;$s=a,(_s=t)&&!o?Js(e,n,0!==(8772&n.subtreeFlags)):qs(e,n),$s=r,_s=o}break;case 30:break;default:qs(e,n)}}function Ms(e){var t=e.alternate;null!==t&&(e.alternate=null,Ms(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&qe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ds=null,As=!1;function Is(e,t,n){for(n=n.child;null!==n;)Fs(e,t,n),n=n.sibling}function Fs(e,t,n){if(be&&"function"===typeof be.onCommitFiberUnmount)try{be.onCommitFiberUnmount(ye,n)}catch(o){}switch(n.tag){case 26:_s||ks(n,t),Is(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:_s||ks(n,t);var a=Ds,r=As;Ed(n.type)&&(Ds=n.stateNode,As=!1),Is(e,t,n),Id(n.stateNode),Ds=a,As=r;break;case 5:_s||ks(n,t);case 6:if(a=Ds,r=As,Ds=null,Is(e,t,n),As=r,null!==(Ds=a))if(As)try{(9===Ds.nodeType?Ds.body:"HTML"===Ds.nodeName?Ds.ownerDocument.body:Ds).removeChild(n.stateNode)}catch(i){ju(n,t,i)}else try{Ds.removeChild(n.stateNode)}catch(i){ju(n,t,i)}break;case 18:null!==Ds&&(As?(Pd(9===(e=Ds).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Kp(e)):Pd(Ds,n.stateNode));break;case 4:a=Ds,r=As,Ds=n.stateNode.containerInfo,As=!0,Is(e,t,n),Ds=a,As=r;break;case 0:case 11:case 14:case 15:bs(2,n,t),_s||bs(4,n,t),Is(e,t,n);break;case 1:_s||(ks(n,t),"function"===typeof(a=n.stateNode).componentWillUnmount&&xs(n,t,a)),Is(e,t,n);break;case 21:Is(e,t,n);break;case 22:_s=(a=_s)||null!==n.memoizedState,Is(e,t,n),_s=a;break;default:Is(e,t,n)}}function Ws(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{Kp(e)}catch(n){ju(t,t.return,n)}}}function Us(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Kp(e)}catch(n){ju(t,t.return,n)}}function Hs(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Os),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Os),t;default:throw Error(i(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var a=Tu.bind(null,e,t);t.then(a,a)}})}function Bs(e,t){var n=t.deletions;if(null!==n)for(var a=0;a<n.length;a++){var r=n[a],o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(Ed(s.type)){Ds=s.stateNode,As=!1;break e}break;case 5:Ds=s.stateNode,As=!1;break e;case 3:case 4:Ds=s.stateNode.containerInfo,As=!0;break e}s=s.return}if(null===Ds)throw Error(i(160));Fs(o,l,r),Ds=null,As=!1,null!==(o=r.alternate)&&(o.return=null),r.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)Gs(t,e),t=t.sibling}var Ks=null;function Gs(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bs(t,e),Vs(e),4&a&&(bs(3,e,e.return),ys(3,e),bs(5,e,e.return));break;case 1:Bs(t,e),Vs(e),512&a&&(_s||null===n||ks(n,n.return)),64&a&&$s&&(null!==(e=e.updateQueue)&&(null!==(a=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?a:n.concat(a))));break;case 26:var r=Ks;if(Bs(t,e),Vs(e),512&a&&(_s||null===n||ks(n,n.return)),4&a){var o=null!==n?n.memoizedState:null;if(a=e.memoizedState,null===n)if(null===a)if(null===e.stateNode){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":(!(o=r.getElementsByTagName("title")[0])||o[Ye]||o[We]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=r.createElement(a),r.head.insertBefore(o,r.querySelector("head > title"))),fd(o,a,n),o[We]=e,et(o),a=o;break e;case"link":var l=ap("link","href",r).get(a+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((o=l[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}fd(o=r.createElement(a),a,n),r.head.appendChild(o);break;case"meta":if(l=ap("meta","content",r).get(a+(n.content||"")))for(s=0;s<l.length;s++)if((o=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}fd(o=r.createElement(a),a,n),r.head.appendChild(o);break;default:throw Error(i(468,a))}o[We]=e,et(o),a=o}e.stateNode=a}else rp(r,e.type,e.stateNode);else e.stateNode=Xd(r,a,e.memoizedProps);else o!==a?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===a?rp(r,e.type,e.stateNode):Xd(r,a,e.memoizedProps)):null===a&&null!==e.stateNode&&js(e,e.memoizedProps,n.memoizedProps)}break;case 27:Bs(t,e),Vs(e),512&a&&(_s||null===n||ks(n,n.return)),null!==n&&4&a&&js(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Bs(t,e),Vs(e),512&a&&(_s||null===n||ks(n,n.return)),32&e.flags){r=e.stateNode;try{jt(r,"")}catch(h){ju(e,e.return,h)}}4&a&&null!=e.stateNode&&js(e,r=e.memoizedProps,null!==n?n.memoizedProps:r),1024&a&&(Ns=!0);break;case 6:if(Bs(t,e),Vs(e),4&a){if(null===e.stateNode)throw Error(i(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(h){ju(e,e.return,h)}}break;case 3:if(np=null,r=Ks,Ks=Ud(t.containerInfo),Bs(t,e),Ks=r,Vs(e),4&a&&null!==n&&n.memoizedState.isDehydrated)try{Kp(t.containerInfo)}catch(h){ju(e,e.return,h)}Ns&&(Ns=!1,Ys(e));break;case 4:a=Ks,Ks=Ud(e.stateNode.containerInfo),Bs(t,e),Vs(e),Ks=a;break;case 12:default:Bs(t,e),Vs(e);break;case 31:case 19:Bs(t,e),Vs(e),4&a&&(null!==(a=e.updateQueue)&&(e.updateQueue=null,Hs(e,a)));break;case 13:Bs(t,e),Vs(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(Oc=se()),4&a&&(null!==(a=e.updateQueue)&&(e.updateQueue=null,Hs(e,a)));break;case 22:r=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=$s,d=_s;if($s=u||r,_s=d||c,Bs(t,e),_s=d,$s=u,Vs(e),8192&a)e:for(t=e.stateNode,t._visibility=r?-2&t._visibility:1|t._visibility,r&&(null===n||c||$s||_s||Qs(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(o=c.stateNode,r)"function"===typeof(l=o.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=c.stateNode;var p=c.memoizedProps.style,f=void 0!==p&&null!==p&&p.hasOwnProperty("display")?p.display:null;s.style.display=null==f||"boolean"===typeof f?"":(""+f).trim()}}catch(h){ju(c,c.return,h)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=r?"":c.memoizedProps}catch(h){ju(c,c.return,h)}}}else if(18===t.tag){if(null===n){c=t;try{var m=c.stateNode;r?Td(m,!0):Td(c.stateNode,!1)}catch(h){ju(c,c.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&a&&(null!==(a=e.updateQueue)&&(null!==(n=a.retryQueue)&&(a.retryQueue=null,Hs(e,n))));case 30:case 21:}}function Vs(e){var t=e.flags;if(2&t){try{for(var n,a=e.return;null!==a;){if(Ss(a)){n=a;break}a=a.return}if(null==n)throw Error(i(160));switch(n.tag){case 27:var r=n.stateNode;Ps(e,Cs(e),r);break;case 5:var o=n.stateNode;32&n.flags&&(jt(o,""),n.flags&=-33),Ps(e,Cs(e),o);break;case 3:case 4:var l=n.stateNode.containerInfo;Es(e,Cs(e),l);break;default:throw Error(i(161))}}catch(s){ju(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ys(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Ys(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function qs(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Ls(e,t.alternate,t),t=t.sibling}function Qs(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:bs(4,t,t.return),Qs(t);break;case 1:ks(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&xs(t,t.return,n),Qs(t);break;case 27:Id(t.stateNode);case 26:case 5:ks(t,t.return),Qs(t);break;case 22:null===t.memoizedState&&Qs(t);break;default:Qs(t)}e=e.sibling}}function Js(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var a=t.alternate,r=e,o=t,i=o.flags;switch(o.tag){case 0:case 11:case 15:Js(r,o,n),ys(4,o);break;case 1:if(Js(r,o,n),"function"===typeof(r=(a=o).stateNode).componentDidMount)try{r.componentDidMount()}catch(c){ju(a,a.return,c)}if(null!==(r=(a=o).updateQueue)){var l=a.stateNode;try{var s=r.shared.hiddenCallbacks;if(null!==s)for(r.shared.hiddenCallbacks=null,r=0;r<s.length;r++)Eo(s[r],l)}catch(c){ju(a,a.return,c)}}n&&64&i&&ws(o),vs(o,o.return);break;case 27:Ts(o);case 26:case 5:Js(r,o,n),n&&null===a&&4&i&&zs(o),vs(o,o.return);break;case 12:Js(r,o,n);break;case 31:Js(r,o,n),n&&4&i&&Ws(r,o);break;case 13:Js(r,o,n),n&&4&i&&Us(r,o);break;case 22:null===o.memoizedState&&Js(r,o,n),vs(o,o.return);break;case 30:break;default:Js(r,o,n)}t=t.sibling}}function Xs(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Wr(n))}function Zs(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Wr(e))}function ec(e,t,n,a){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)tc(e,t,n,a),t=t.sibling}function tc(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:ec(e,t,n,a),2048&r&&ys(9,t);break;case 1:case 31:case 13:default:ec(e,t,n,a);break;case 3:ec(e,t,n,a),2048&r&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Wr(e)));break;case 12:if(2048&r){ec(e,t,n,a),e=t.stateNode;try{var o=t.memoizedProps,i=o.id,l=o.onPostCommit;"function"===typeof l&&l(i,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){ju(t,t.return,s)}}else ec(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,i=t.alternate,null!==t.memoizedState?2&o._visibility?ec(e,t,n,a):ac(e,t):2&o._visibility?ec(e,t,n,a):(o._visibility|=2,nc(e,t,n,a,0!==(10256&t.subtreeFlags)||!1)),2048&r&&Xs(i,t);break;case 24:ec(e,t,n,a),2048&r&&Zs(t.alternate,t)}}function nc(e,t,n,a,r){for(r=r&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var o=e,i=t,l=n,s=a,c=i.flags;switch(i.tag){case 0:case 11:case 15:nc(o,i,l,s,r),ys(8,i);break;case 23:break;case 22:var u=i.stateNode;null!==i.memoizedState?2&u._visibility?nc(o,i,l,s,r):ac(o,i):(u._visibility|=2,nc(o,i,l,s,r)),r&&2048&c&&Xs(i.alternate,i);break;case 24:nc(o,i,l,s,r),r&&2048&c&&Zs(i.alternate,i);break;default:nc(o,i,l,s,r)}t=t.sibling}}function ac(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:ac(n,a),2048&r&&Xs(a.alternate,a);break;case 24:ac(n,a),2048&r&&Zs(a.alternate,a);break;default:ac(n,a)}t=t.sibling}}var rc=8192;function oc(e,t,n){if(e.subtreeFlags&rc)for(e=e.child;null!==e;)ic(e,t,n),e=e.sibling}function ic(e,t,n){switch(e.tag){case 26:oc(e,t,n),e.flags&rc&&null!==e.memoizedState&&function(e,t,n,a){if("stylesheet"===n.type&&("string"!==typeof a.media||!1!==matchMedia(a.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var r=Vd(a.href),o=t.querySelector(Yd(r));if(o)return null!==(t=o._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=lp.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,void et(o);o=t.ownerDocument||t,a=qd(a),(r=Fd.get(r))&&ep(a,r),et(o=o.createElement("link"));var i=o;i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),fd(o,"link",a),n.instance=o}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=lp.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,Ks,e.memoizedState,e.memoizedProps);break;case 5:default:oc(e,t,n);break;case 3:case 4:var a=Ks;Ks=Ud(e.stateNode.containerInfo),oc(e,t,n),Ks=a;break;case 22:null===e.memoizedState&&(null!==(a=e.alternate)&&null!==a.memoizedState?(a=rc,rc=16777216,oc(e,t,n),rc=a):oc(e,t,n))}}function lc(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function sc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var a=t[n];Rs=a,dc(a,e)}lc(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)cc(e),e=e.sibling}function cc(e){switch(e.tag){case 0:case 11:case 15:sc(e),2048&e.flags&&bs(9,e,e.return);break;case 3:case 12:default:sc(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,uc(e)):sc(e)}}function uc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var a=t[n];Rs=a,dc(a,e)}lc(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:bs(8,t,t.return),uc(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,uc(t));break;default:uc(t)}e=e.sibling}}function dc(e,t){for(;null!==Rs;){var n=Rs;switch(n.tag){case 0:case 11:case 15:bs(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var a=n.memoizedState.cachePool.pool;null!=a&&a.refCount++}break;case 24:Wr(n.memoizedState.cache)}if(null!==(a=n.child))a.return=n,Rs=a;else e:for(n=e;null!==Rs;){var r=(a=Rs).sibling,o=a.return;if(Ms(a),a===n){Rs=null;break e}if(null!==r){r.return=o,Rs=r;break e}Rs=o}}}var pc={getCacheForType:function(e){var t=Or(Ir),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Or(Ir).controller.signal}},fc="function"===typeof WeakMap?WeakMap:Map,mc=0,hc=null,gc=null,yc=0,bc=0,wc=null,xc=!1,vc=!1,kc=!1,zc=0,jc=0,Sc=0,Cc=0,Ec=0,Pc=0,Tc=0,$c=null,_c=null,Nc=!1,Oc=0,Rc=0,Lc=1/0,Mc=null,Dc=null,Ac=0,Ic=null,Fc=null,Wc=0,Uc=0,Hc=null,Bc=null,Kc=0,Gc=null;function Vc(){return 0!==(2&mc)&&0!==yc?yc&-yc:null!==R.T?Hu():Ae()}function Yc(){if(0===Pc)if(0===(536870912&yc)||pr){var e=je;0===(3932160&(je<<=1))&&(je=262144),Pc=e}else Pc=536870912;return null!==(e=Ro.current)&&(e.flags|=32),Pc}function qc(e,t,n){(e!==hc||2!==bc&&9!==bc)&&null===e.cancelPendingCommit||(nu(e,0),Zc(e,yc,Pc,!1)),Ne(e,n),0!==(2&mc)&&e===hc||(e===hc&&(0===(2&mc)&&(Cc|=n),4===jc&&Zc(e,yc,Pc,!1)),Mu(e))}function Qc(e,t,n){if(0!==(6&mc))throw Error(i(327));for(var a=!n&&0===(127&t)&&0===(t&e.expiredLanes)||Pe(e,t),r=a?function(e,t){var n=mc;mc|=2;var a=ou(),r=iu();hc!==e||yc!==t?(Mc=null,Lc=se()+500,nu(e,t)):vc=Pe(e,t);e:for(;;)try{if(0!==bc&&null!==gc){t=gc;var o=wc;t:switch(bc){case 1:bc=0,wc=null,fu(e,t,o,1);break;case 2:case 9:if(no(o)){bc=0,wc=null,pu(t);break}t=function(){2!==bc&&9!==bc||hc!==e||(bc=7),Mu(e)},o.then(t,t);break e;case 3:bc=7;break e;case 4:bc=5;break e;case 7:no(o)?(bc=0,wc=null,pu(t)):(bc=0,wc=null,fu(e,t,o,7));break;case 5:var l=null;switch(gc.tag){case 26:l=gc.memoizedState;case 5:case 27:var s=gc;if(l?op(l):s.stateNode.complete){bc=0,wc=null;var c=s.sibling;if(null!==c)gc=c;else{var u=s.return;null!==u?(gc=u,mu(u)):gc=null}break t}}bc=0,wc=null,fu(e,t,o,5);break;case 6:bc=0,wc=null,fu(e,t,o,6);break;case 8:tu(),jc=6;break e;default:throw Error(i(462))}}uu();break}catch(d){au(e,d)}return Sr=jr=null,R.H=a,R.A=r,mc=n,null!==gc?0:(hc=null,yc=0,_a(),jc)}(e,t):su(e,t,!0),o=a;;){if(0===r){vc&&!a&&Zc(e,t,0,!1);break}if(n=e.current.alternate,!o||Xc(n)){if(2===r){if(o=t,e.errorRecoveryDisabledLanes&o)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;r=$c;var c=s.current.memoizedState.isDehydrated;if(c&&(nu(s,l).flags|=256),2!==(l=su(s,l,!1))){if(kc&&!c){s.errorRecoveryDisabledLanes|=o,Cc|=o,r=4;break e}o=_c,_c=r,null!==o&&(null===_c?_c=o:_c.push.apply(_c,o))}r=l}if(o=!1,2!==r)continue}}if(1===r){nu(e,0),Zc(e,t,0,!0);break}e:{switch(a=e,o=r){case 0:case 1:throw Error(i(345));case 4:if((4194048&t)!==t)break;case 6:Zc(a,t,Pc,!xc);break e;case 2:_c=null;break;case 3:case 5:break;default:throw Error(i(329))}if((62914560&t)===t&&10<(r=Oc+300-se())){if(Zc(a,t,Pc,!xc),0!==Ee(a,0,!0))break e;Wc=t,a.timeoutHandle=kd(Jc.bind(null,a,n,_c,Mc,Nc,t,Pc,Cc,Tc,xc,o,"Throttled",-0,0),r)}else Jc(a,n,_c,Mc,Nc,t,Pc,Cc,Tc,xc,o,null,-0,0)}break}r=su(e,t,!1),o=!1}Mu(e)}function Jc(e,t,n,a,r,o,i,l,s,c,u,d,p,f){if(e.timeoutHandle=-1,8192&(d=t.subtreeFlags)||16785408===(16785408&d)){ic(t,o,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nt});var m=(62914560&o)===o?Oc-se():(4194048&o)===o?Rc-se():0;if(null!==(m=function(e,t){return e.stylesheets&&0===e.count&&cp(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&cp(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&0===ip&&(ip=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],o=r.transferSize,i=r.initiatorType,l=r.duration;if(o&&l&&md(i)){for(i=0,l=r.responseEnd,a+=1;a<n.length;a++){var s=n[a],c=s.startTime;if(c>l)break;var u=s.transferSize,d=s.initiatorType;u&&md(d)&&(i+=u*((s=s.responseEnd)<l?1:(l-c)/(s-c)))}if(--a,t+=8*(o+i)/(r.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"===typeof(e=navigator.connection.downlink)?e:5}());var r=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&cp(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>ip?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}(d,m)))return Wc=o,e.cancelPendingCommit=m(gu.bind(null,e,t,o,n,a,r,i,l,s,u,d,null,p,f)),void Zc(e,o,i,!c)}gu(e,t,o,n,a,r,i,l,s)}function Xc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var a=0;a<n.length;a++){var r=n[a],o=r.getSnapshot;r=r.value;try{if(!Zn(o(),r))return!1}catch(i){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zc(e,t,n,a){t&=~Ec,t&=~Cc,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var o=31-xe(r),i=1<<o;a[o]=-1,r&=~i}0!==n&&Oe(e,n,t)}function eu(){return 0!==(6&mc)||(Du(0,!1),!1)}function tu(){if(null!==gc){if(0===bc)var e=gc.return;else Sr=jr=null,si(e=gc),so=null,co=0,e=gc;for(;null!==e;)gs(e.alternate,e),e=e.return;gc=null}}function nu(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,zd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Wc=0,tu(),hc=e,gc=n=Wa(e.current,null),yc=t,bc=0,wc=null,xc=!1,vc=Pe(e,t),kc=!1,Tc=Pc=Ec=Cc=Sc=jc=0,_c=$c=null,Nc=!1,0!==(8&t)&&(t|=32&t);var a=e.entangledLanes;if(0!==a)for(e=e.entanglements,a&=t;0<a;){var r=31-xe(a),o=1<<r;t|=e[r],a&=~o}return zc=t,_a(),n}function au(e,t){Bo=null,R.H=gl,t===Xr||t===eo?(t=io(),bc=3):t===Zr?(t=io(),bc=4):bc=t===Ol?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,wc=t,null===gc&&(jc=1,Pl(e,qa(t,e.current)))}function ru(){var e=Ro.current;return null===e||((4194048&yc)===yc?null===Lo:((62914560&yc)===yc||0!==(536870912&yc))&&e===Lo)}function ou(){var e=R.H;return R.H=gl,null===e?gl:e}function iu(){var e=R.A;return R.A=pc,e}function lu(){jc=4,xc||(4194048&yc)!==yc&&null!==Ro.current||(vc=!0),0===(134217727&Sc)&&0===(134217727&Cc)||null===hc||Zc(hc,yc,Pc,!1)}function su(e,t,n){var a=mc;mc|=2;var r=ou(),o=iu();hc===e&&yc===t||(Mc=null,nu(e,t)),t=!1;var i=jc;e:for(;;)try{if(0!==bc&&null!==gc){var l=gc,s=wc;switch(bc){case 8:tu(),i=6;break e;case 3:case 2:case 9:case 6:null===Ro.current&&(t=!0);var c=bc;if(bc=0,wc=null,fu(e,l,s,c),n&&vc){i=0;break e}break;default:c=bc,bc=0,wc=null,fu(e,l,s,c)}}cu(),i=jc;break}catch(u){au(e,u)}return t&&e.shellSuspendCounter++,Sr=jr=null,mc=a,R.H=r,R.A=o,null===gc&&(hc=null,yc=0,_a()),i}function cu(){for(;null!==gc;)du(gc)}function uu(){for(;null!==gc&&!ie();)du(gc)}function du(e){var t=ls(e.alternate,e,zc);e.memoizedProps=e.pendingProps,null===t?mu(e):gc=t}function pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Gl(n,t,t.pendingProps,t.type,void 0,yc);break;case 11:t=Gl(n,t,t.pendingProps,t.type.render,t.ref,yc);break;case 5:si(t);default:gs(n,t),t=ls(n,t=gc=Ua(t,zc),zc)}e.memoizedProps=e.pendingProps,null===t?mu(e):gc=t}function fu(e,t,n,a){Sr=jr=null,si(t),so=null,co=0;var r=t.return;try{if(function(e,t,n,a,r){if(n.flags|=32768,null!==a&&"object"===typeof a&&"function"===typeof a.then){if(null!==(t=n.alternate)&&$r(t,n,r,!0),null!==(n=Ro.current)){switch(n.tag){case 31:case 13:return null===Lo?lu():null===n.alternate&&0===jc&&(jc=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===to?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([a]):t.add(a),Su(e,a,r)),!1;case 22:return n.flags|=65536,a===to?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([a]):n.add(a),Su(e,a,r)),!1}throw Error(i(435,n.tag))}return Su(e,a,r),lu(),!1}if(pr)return null!==(t=Ro.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==hr&&kr(qa(e=Error(i(422),{cause:a}),n))):(a!==hr&&kr(qa(t=Error(i(423),{cause:a}),n)),(e=e.current.alternate).flags|=65536,r&=-r,e.lanes|=r,a=qa(a,n),zo(e,r=$l(e.stateNode,a,r)),4!==jc&&(jc=2)),!1;var o=Error(i(520),{cause:a});if(o=qa(o,n),null===$c?$c=[o]:$c.push(o),4!==jc&&(jc=2),null===t)return!0;a=qa(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,zo(n,e=$l(n.stateNode,a,e)),!1;case 1:if(t=n.type,o=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===Dc||!Dc.has(o))))return n.flags|=65536,r&=-r,n.lanes|=r,Nl(r=_l(r),e,n,a),zo(n,r),!1}n=n.return}while(null!==n);return!1}(e,r,t,n,yc))return jc=1,Pl(e,qa(n,e.current)),void(gc=null)}catch(o){if(null!==r)throw gc=r,o;return jc=1,Pl(e,qa(n,e.current)),void(gc=null)}32768&t.flags?(pr||1===a?e=!0:vc||0!==(536870912&yc)?e=!1:(xc=e=!0,(2===a||9===a||3===a||6===a)&&(null!==(a=Ro.current)&&13===a.tag&&(a.flags|=16384))),hu(t,e)):mu(t)}function mu(e){var t=e;do{if(0!==(32768&t.flags))return void hu(t,xc);e=t.return;var n=ms(t.alternate,t,zc);if(null!==n)return void(gc=n);if(null!==(t=t.sibling))return void(gc=t);gc=t=e}while(null!==t);0===jc&&(jc=5)}function hu(e,t){do{var n=hs(e.alternate,e);if(null!==n)return n.flags&=32767,void(gc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(gc=e);gc=e=n}while(null!==e);jc=6,gc=null}function gu(e,t,n,a,r,o,l,s,c){e.cancelPendingCommit=null;do{vu()}while(0!==Ac);if(0!==(6&mc))throw Error(i(327));if(null!==t){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,function(e,t,n,a,r,o){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=i&~n;0<n;){var u=31-xe(n),d=1<<u;l[u]=0,s[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var f=p[u];null!==f&&(f.lane&=-536870913)}n&=~d}0!==a&&Oe(e,a,0),0!==o&&0===r&&0!==e.tag&&(e.suspendedLanes|=o&~(i&~t))}(e,n,o|=$a,l,s,c),e===hc&&(gc=hc=null,yc=0),Fc=t,Ic=e,Wc=n,Uc=o,Hc=r,Bc=a,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,re(pe,function(){return ku(),null})):(e.callbackNode=null,e.callbackPriority=0),a=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||a){a=R.T,R.T=null,r=L.p,L.p=2,l=mc,mc|=4;try{!function(e,t){if(e=e.containerInfo,hd=xp,oa(e=ra(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var a=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(a&&0!==a.rangeCount){n=a.anchorNode;var r=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch(g){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||0!==r&&3!==p.nodeType||(s=l+r),p!==o||0!==a&&3!==p.nodeType||(c=l+a),3===p.nodeType&&(l+=p.nodeValue.length),null!==(m=p.firstChild);)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===r&&(s=l),f===o&&++d===a&&(c=l),null!==(m=p.nextSibling))break;f=(p=f).parentNode}p=m}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(gd={focusedElem:e,selectionRange:n},xp=!1,Rs=t;null!==Rs;)if(e=(t=Rs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Rs=e;else for(;null!==Rs;){switch(o=(t=Rs).alternate,e=t.flags,t.tag){case 0:if(0!==(4&e)&&null!==(e=null!==(e=t.updateQueue)?e.events:null))for(n=0;n<e.length;n++)(r=e[n]).ref.impl=r.nextImpl;break;case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,n=t,r=o.memoizedProps,o=o.memoizedState,a=n.stateNode;try{var h=jl(n.type,r);e=a.getSnapshotBeforeUpdate(h,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(y){ju(n,n.return,y)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))$d(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$d(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(i(163))}if(null!==(e=t.sibling)){e.return=t.return,Rs=e;break}Rs=t.return}}(e,t)}finally{mc=l,L.p=r,R.T=a}}Ac=1,yu(),bu(),wu()}}function yu(){if(1===Ac){Ac=0;var e=Ic,t=Fc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=R.T,R.T=null;var a=L.p;L.p=2;var r=mc;mc|=4;try{Gs(t,e);var o=gd,i=ra(e.containerInfo),l=o.focusedElem,s=o.selectionRange;if(i!==l&&l&&l.ownerDocument&&aa(l.ownerDocument.documentElement,l)){if(null!==s&&oa(l)){var c=s.start,u=s.end;if(void 0===u&&(u=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(u,l.value.length);else{var d=l.ownerDocument||document,p=d&&d.defaultView||window;if(p.getSelection){var f=p.getSelection(),m=l.textContent.length,h=Math.min(s.start,m),g=void 0===s.end?h:Math.min(s.end,m);!f.extend&&h>g&&(i=g,g=h,h=i);var y=na(l,h),b=na(l,g);if(y&&b&&(1!==f.rangeCount||f.anchorNode!==y.node||f.anchorOffset!==y.offset||f.focusNode!==b.node||f.focusOffset!==b.offset)){var w=d.createRange();w.setStart(y.node,y.offset),f.removeAllRanges(),h>g?(f.addRange(w),f.extend(b.node,b.offset)):(w.setEnd(b.node,b.offset),f.addRange(w))}}}}for(d=[],f=l;f=f.parentNode;)1===f.nodeType&&d.push({element:f,left:f.scrollLeft,top:f.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<d.length;l++){var x=d[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}xp=!!hd,gd=hd=null}finally{mc=r,L.p=a,R.T=n}}e.current=t,Ac=2}}function bu(){if(2===Ac){Ac=0;var e=Ic,t=Fc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=R.T,R.T=null;var a=L.p;L.p=2;var r=mc;mc|=4;try{Ls(e,t.alternate,t)}finally{mc=r,L.p=a,R.T=n}}Ac=3}}function wu(){if(4===Ac||3===Ac){Ac=0,le();var e=Ic,t=Fc,n=Wc,a=Bc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Ac=5:(Ac=0,Fc=Ic=null,xu(e,e.pendingLanes));var r=e.pendingLanes;if(0===r&&(Dc=null),De(n),t=t.stateNode,be&&"function"===typeof be.onCommitFiberRoot)try{be.onCommitFiberRoot(ye,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==a){t=R.T,r=L.p,L.p=2,R.T=null;try{for(var o=e.onRecoverableError,i=0;i<a.length;i++){var l=a[i];o(l.value,{componentStack:l.stack})}}finally{R.T=t,L.p=r}}0!==(3&Wc)&&vu(),Mu(e),r=e.pendingLanes,0!==(261930&n)&&0!==(42&r)?e===Gc?Kc++:(Kc=0,Gc=e):Kc=0,Du(0,!1)}}function xu(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Wr(t)))}function vu(){return yu(),bu(),wu(),ku()}function ku(){if(5!==Ac)return!1;var e=Ic,t=Uc;Uc=0;var n=De(Wc),a=R.T,r=L.p;try{L.p=32>n?32:n,R.T=null,n=Hc,Hc=null;var o=Ic,l=Wc;if(Ac=0,Fc=Ic=null,Wc=0,0!==(6&mc))throw Error(i(331));var s=mc;if(mc|=4,cc(o.current),tc(o,o.current,l,n),mc=s,Du(0,!1),be&&"function"===typeof be.onPostCommitFiberRoot)try{be.onPostCommitFiberRoot(ye,o)}catch(c){}return!0}finally{L.p=r,R.T=a,xu(e,t)}}function zu(e,t,n){t=qa(n,t),null!==(e=vo(e,t=$l(e.stateNode,t,2),2))&&(Ne(e,2),Mu(e))}function ju(e,t,n){if(3===e.tag)zu(e,e,n);else for(;null!==t;){if(3===t.tag){zu(t,e,n);break}if(1===t.tag){var a=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof a.componentDidCatch&&(null===Dc||!Dc.has(a))){e=qa(n,e),null!==(a=vo(t,n=_l(2),2))&&(Nl(n,a,t,e),Ne(a,2),Mu(a));break}}t=t.return}}function Su(e,t,n){var a=e.pingCache;if(null===a){a=e.pingCache=new fc;var r=new Set;a.set(t,r)}else void 0===(r=a.get(t))&&(r=new Set,a.set(t,r));r.has(n)||(kc=!0,r.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function Cu(e,t,n){var a=e.pingCache;null!==a&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,hc===e&&(yc&n)===n&&(4===jc||3===jc&&(62914560&yc)===yc&&300>se()-Oc?0===(2&mc)&&nu(e,0):Ec|=n,Tc===yc&&(Tc=0)),Mu(e)}function Eu(e,t){0===t&&(t=$e()),null!==(e=Ra(e,t))&&(Ne(e,t),Mu(e))}function Pu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Eu(e,n)}function Tu(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;null!==r&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(i(314))}null!==a&&a.delete(t),Eu(e,n)}var $u=null,_u=null,Nu=!1,Ou=!1,Ru=!1,Lu=0;function Mu(e){e!==_u&&null===e.next&&(null===_u?$u=_u=e:_u=_u.next=e),Ou=!0,Nu||(Nu=!0,Sd(function(){0!==(6&mc)?re(ue,Au):Iu()}))}function Du(e,t){if(!Ru&&Ou){Ru=!0;do{for(var n=!1,a=$u;null!==a;){if(!t)if(0!==e){var r=a.pendingLanes;if(0===r)var o=0;else{var i=a.suspendedLanes,l=a.pingedLanes;o=(1<<31-xe(42|e)+1)-1,o=201326741&(o&=r&~(i&~l))?201326741&o|1:o?2|o:0}0!==o&&(n=!0,Uu(a,o))}else o=yc,0===(3&(o=Ee(a,a===hc?o:0,null!==a.cancelPendingCommit||-1!==a.timeoutHandle)))||Pe(a,o)||(n=!0,Uu(a,o));a=a.next}}while(n);Ru=!1}}function Au(){Iu()}function Iu(){Ou=Nu=!1;var e=0;0!==Lu&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==vd&&(vd=e,!0);return vd=null,!1}()&&(e=Lu);for(var t=se(),n=null,a=$u;null!==a;){var r=a.next,o=Fu(a,t);0===o?(a.next=null,null===n?$u=r:n.next=r,null===r&&(_u=n)):(n=a,(0!==e||0!==(3&o))&&(Ou=!0)),a=r}0!==Ac&&5!==Ac||Du(e,!1),0!==Lu&&(Lu=0)}function Fu(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var i=31-xe(o),l=1<<i,s=r[i];-1===s?0!==(l&n)&&0===(l&a)||(r[i]=Te(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}if(n=yc,n=Ee(e,e===(t=hc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),a=e.callbackNode,0===n||e===t&&(2===bc||9===bc)||null!==e.cancelPendingCommit)return null!==a&&null!==a&&oe(a),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||Pe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==a&&oe(a),De(n)){case 2:case 8:n=de;break;case 32:default:n=pe;break;case 268435456:n=me}return a=Wu.bind(null,e),n=re(n,a),e.callbackPriority=t,e.callbackNode=n,t}return null!==a&&null!==a&&oe(a),e.callbackPriority=2,e.callbackNode=null,2}function Wu(e,t){if(0!==Ac&&5!==Ac)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(vu()&&e.callbackNode!==n)return null;var a=yc;return 0===(a=Ee(e,e===hc?a:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Qc(e,a,t),Fu(e,se()),null!=e.callbackNode&&e.callbackNode===n?Wu.bind(null,e):null)}function Uu(e,t){if(vu())return null;Qc(e,t,!0)}function Hu(){if(0===Lu){var e=Br;0===e&&(e=ze,0===(261888&(ze<<=1))&&(ze=256)),Lu=e}return Lu}function Bu(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:_t(""+e)}function Ku(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Gu=0;Gu<Sa.length;Gu++){var Vu=Sa[Gu];Ca(Vu.toLowerCase(),"on"+(Vu[0].toUpperCase()+Vu.slice(1)))}Ca(ya,"onAnimationEnd"),Ca(ba,"onAnimationIteration"),Ca(wa,"onAnimationStart"),Ca("dblclick","onDoubleClick"),Ca("focusin","onFocus"),Ca("focusout","onBlur"),Ca(xa,"onTransitionRun"),Ca(va,"onTransitionStart"),Ca(ka,"onTransitionCancel"),Ca(za,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yu));function Qu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var i=a.length-1;0<=i;i--){var l=a[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&r.isPropagationStopped())break e;o=l,r.currentTarget=c;try{o(r)}catch(u){Ea(u)}r.currentTarget=null,o=s}else for(i=0;i<a.length;i++){if(s=(l=a[i]).instance,c=l.currentTarget,l=l.listener,s!==o&&r.isPropagationStopped())break e;o=l,r.currentTarget=c;try{o(r)}catch(u){Ea(u)}r.currentTarget=null,o=s}}}}function Ju(e,t){var n=t[Be];void 0===n&&(n=t[Be]=new Set);var a=e+"__bubble";n.has(a)||(td(t,e,2,!1),n.add(a))}function Xu(e,t,n){var a=0;t&&(a|=4),td(n,e,a,t)}var Zu="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[Zu]){e[Zu]=!0,tt.forEach(function(t){"selectionchange"!==t&&(qu.has(t)||Xu(t,!1,e),Xu(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Zu]||(t[Zu]=!0,Xu("selectionchange",!1,t))}}function td(e,t,n,a){switch(Ep(t)){case 2:var r=vp;break;case 8:r=kp;break;default:r=zp}n=r.bind(null,t,n,e),r=void 0,!Ut||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(r=!0),a?void 0!==r?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):void 0!==r?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function nd(e,t,n,a,r){var o=a;if(0===(1&t)&&0===(2&t)&&null!==a)e:for(;;){if(null===a)return;var i=a.tag;if(3===i||4===i){var l=a.stateNode.containerInfo;if(l===r)break;if(4===i)for(i=a.return;null!==i;){var c=i.tag;if((3===c||4===c)&&i.stateNode.containerInfo===r)return;i=i.return}for(;null!==l;){if(null===(i=Qe(l)))return;if(5===(c=i.tag)||6===c||26===c||27===c){a=o=i;continue e}l=l.parentNode}}a=a.return}It(function(){var a=o,r=Rt(n),i=[];e:{var l=ja.get(e);if(void 0!==l){var c=nn,u=e;switch(e){case"keypress":if(0===Yt(n))break e;case"keydown":case"keyup":c=bn;break;case"focusin":u="focus",c=cn;break;case"focusout":u="blur",c=cn;break;case"beforeblur":case"afterblur":c=cn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=ln;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=sn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=xn;break;case ya:case ba:case wa:c=un;break;case za:c=vn;break;case"scroll":case"scrollend":c=rn;break;case"wheel":c=kn;break;case"copy":case"cut":case"paste":c=dn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=wn;break;case"toggle":case"beforetoggle":c=zn}var d=0!==(4&t),p=!d&&("scroll"===e||"scrollend"===e),f=d?null!==l?l+"Capture":null:l;d=[];for(var m,h=a;null!==h;){var g=h;if(m=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===m||null===f||null!=(g=Ft(h,f))&&d.push(ad(h,g,m)),p)break;h=h.return}0<d.length&&(l=new c(l,u,null,n,r),i.push({event:l,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Ot||!(u=n.relatedTarget||n.fromElement)||!Qe(u)&&!u[He])&&(c||l)&&(l=r.window===r?r:(l=r.ownerDocument)?l.defaultView||l.parentWindow:window,c?(c=a,null!==(u=(u=n.relatedTarget||n.toElement)?Qe(u):null)&&(p=s(u),d=u.tag,u!==p||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=a),c!==u)){if(d=ln,g="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(d=wn,g="onPointerLeave",f="onPointerEnter",h="pointer"),p=null==c?l:Xe(c),m=null==u?l:Xe(u),(l=new d(g,h+"leave",c,n,r)).target=p,l.relatedTarget=m,g=null,Qe(r)===a&&((d=new d(f,h+"enter",u,n,r)).target=m,d.relatedTarget=p,g=d),p=g,c&&u)e:{for(d=od,h=u,m=0,g=f=c;g;g=d(g))m++;g=0;for(var y=h;y;y=d(y))g++;for(;0<m-g;)f=d(f),m--;for(;0<g-m;)h=d(h),g--;for(;m--;){if(f===h||null!==h&&f===h.alternate){d=f;break e}f=d(f),h=d(h)}d=null}else d=null;null!==c&&id(i,l,c,d,!1),null!==u&&null!==p&&id(i,p,u,d,!0)}if("select"===(c=(l=a?Xe(a):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var b=Wn;else if(Ln(l))if(Un)b=Xn;else{b=Qn;var w=qn}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?a&&Pt(a.elementType)&&(b=Wn):b=Jn;switch(b&&(b=b(e,a))?Mn(i,b,n,r):(w&&w(e,l,a),"focusout"===e&&a&&"number"===l.type&&null!=a.memoizedProps.value&&xt(l,"number",l.value)),w=a?Xe(a):window,e){case"focusin":(Ln(w)||"true"===w.contentEditable)&&(la=w,sa=a,ca=null);break;case"focusout":ca=sa=la=null;break;case"mousedown":ua=!0;break;case"contextmenu":case"mouseup":case"dragend":ua=!1,da(i,n,r);break;case"selectionchange":if(ia)break;case"keydown":case"keyup":da(i,n,r)}var x;if(Sn)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else On?_n(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Pn&&"ko"!==n.locale&&(On||"onCompositionStart"!==v?"onCompositionEnd"===v&&On&&(x=Vt()):(Kt="value"in(Bt=r)?Bt.value:Bt.textContent,On=!0)),0<(w=rd(a,v)).length&&(v=new pn(v,e,null,n,r),i.push({event:v,listeners:w}),x?v.data=x:null!==(x=Nn(n))&&(v.data=x))),(x=En?function(e,t){switch(e){case"compositionend":return Nn(t);case"keypress":return 32!==t.which?null:($n=!0,Tn);case"textInput":return(e=t.data)===Tn&&$n?null:e;default:return null}}(e,n):function(e,t){if(On)return"compositionend"===e||!Sn&&_n(e,t)?(e=Vt(),Gt=Kt=Bt=null,On=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(v=rd(a,"onBeforeInput")).length&&(w=new pn("onBeforeInput","beforeinput",null,n,r),i.push({event:w,listeners:v}),w.data=x)),function(e,t,n,a,r){if("submit"===t&&n&&n.stateNode===r){var o=Bu((r[Ue]||null).action),i=a.submitter;i&&null!==(t=(t=i[Ue]||null)?Bu(t.formAction):i.getAttribute("formAction"))&&(o=t,i=null);var l=new nn("action","action",null,a,r);e.push({event:l,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(0!==Lu){var e=i?Ku(r,i):new FormData(r);nl(n,{pending:!0,data:e,method:r.method,action:o},null,e)}}else"function"===typeof o&&(l.preventDefault(),e=i?Ku(r,i):new FormData(r),nl(n,{pending:!0,data:e,method:r.method,action:o},o,e))},currentTarget:r}]})}}(i,e,a,n,r)}Qu(i,t)})}function ad(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rd(e,t){for(var n=t+"Capture",a=[];null!==e;){var r=e,o=r.stateNode;if(5!==(r=r.tag)&&26!==r&&27!==r||null===o||(null!=(r=Ft(e,n))&&a.unshift(ad(e,r,o)),null!=(r=Ft(e,t))&&a.push(ad(e,r,o))),3===e.tag)return a;e=e.return}return[]}function od(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function id(e,t,n,a,r){for(var o=t._reactName,i=[];null!==n&&n!==a;){var l=n,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===a)break;5!==l&&26!==l&&27!==l||null===c||(s=c,r?null!=(c=Ft(n,o))&&i.unshift(ad(n,c,s)):r||null!=(c=Ft(n,o))&&i.push(ad(n,c,s))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var ld=/\r\n?/g,sd=/\u0000|\uFFFD/g;function cd(e){return("string"===typeof e?e:""+e).replace(ld,"\n").replace(sd,"")}function ud(e,t){return t=cd(t),cd(e)===t}function dd(e,t,n,a,r,o){switch(n){case"children":"string"===typeof a?"body"===t||"textarea"===t&&""===a||jt(e,a):("number"===typeof a||"bigint"===typeof a)&&"body"!==t&&jt(e,""+a);break;case"className":ct(e,"class",a);break;case"tabIndex":ct(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ct(e,n,a);break;case"style":Et(e,a,o);break;case"data":if("object"!==t){ct(e,"data",a);break}case"src":case"href":if(""===a&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==a||"function"===typeof a||"symbol"===typeof a||"boolean"===typeof a){e.removeAttribute(n);break}a=_t(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if("function"===typeof a){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===n?("input"!==t&&dd(e,t,"name",r.name,r,null),dd(e,t,"formEncType",r.formEncType,r,null),dd(e,t,"formMethod",r.formMethod,r,null),dd(e,t,"formTarget",r.formTarget,r,null)):(dd(e,t,"encType",r.encType,r,null),dd(e,t,"method",r.method,r,null),dd(e,t,"target",r.target,r,null))),null==a||"symbol"===typeof a||"boolean"===typeof a){e.removeAttribute(n);break}a=_t(""+a),e.setAttribute(n,a);break;case"onClick":null!=a&&(e.onclick=Nt);break;case"onScroll":null!=a&&Ju("scroll",e);break;case"onScrollEnd":null!=a&&Ju("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=a){if("object"!==typeof a||!("__html"in a))throw Error(i(61));if(null!=(n=a.__html)){if(null!=r.children)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&"function"!==typeof a&&"symbol"!==typeof a;break;case"muted":e.muted=a&&"function"!==typeof a&&"symbol"!==typeof a;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==a||"function"===typeof a||"boolean"===typeof a||"symbol"===typeof a){e.removeAttribute("xlink:href");break}n=_t(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=a&&"function"!==typeof a&&"symbol"!==typeof a?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&"function"!==typeof a&&"symbol"!==typeof a?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===a?e.setAttribute(n,""):!1!==a&&null!=a&&"function"!==typeof a&&"symbol"!==typeof a?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":null==a||"function"===typeof a||"symbol"===typeof a||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ju("beforetoggle",e),Ju("toggle",e),st(e,"popover",a);break;case"xlinkActuate":ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ut(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ut(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ut(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ut(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":st(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&st(e,n=Tt.get(n)||n,a)}}function pd(e,t,n,a,r,o){switch(n){case"style":Et(e,a,o);break;case"dangerouslySetInnerHTML":if(null!=a){if("object"!==typeof a||!("__html"in a))throw Error(i(61));if(null!=(n=a.__html)){if(null!=r.children)throw Error(i(60));e.innerHTML=n}}break;case"children":"string"===typeof a?jt(e,a):("number"===typeof a||"bigint"===typeof a)&&jt(e,""+a);break;case"onScroll":null!=a&&Ju("scroll",e);break;case"onScrollEnd":null!=a&&Ju("scrollend",e);break;case"onClick":null!=a&&(e.onclick=Nt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:nt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),"function"===typeof(o=null!=(o=e[Ue]||null)?o[n]:null)&&e.removeEventListener(t,o,r),"function"!==typeof a)?n in e?e[n]=a:!0===a?e.setAttribute(n,""):st(e,n,a):("function"!==typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r)))}}function fd(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ju("error",e),Ju("load",e);var a,r=!1,o=!1;for(a in n)if(n.hasOwnProperty(a)){var l=n[a];if(null!=l)switch(a){case"src":r=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:dd(e,t,a,l,n,null)}}return o&&dd(e,t,"srcSet",n.srcSet,n,null),void(r&&dd(e,t,"src",n.src,n,null));case"input":Ju("invalid",e);var s=a=l=o=null,c=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(null!=d)switch(r){case"name":o=d;break;case"type":l=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":a=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(i(137,t));break;default:dd(e,t,r,d,n,null)}}return void wt(e,a,s,c,u,l,o,!1);case"select":for(o in Ju("invalid",e),r=l=a=null,n)if(n.hasOwnProperty(o)&&null!=(s=n[o]))switch(o){case"value":a=s;break;case"defaultValue":l=s;break;case"multiple":r=s;default:dd(e,t,o,s,n,null)}return t=a,n=l,e.multiple=!!r,void(null!=t?vt(e,!!r,t,!1):null!=n&&vt(e,!!r,n,!0));case"textarea":for(l in Ju("invalid",e),a=o=r=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":r=s;break;case"defaultValue":o=s;break;case"children":a=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(i(91));break;default:dd(e,t,l,s,n,null)}return void zt(e,r,o,a);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(r=n[c]))if("selected"===c)e.selected=r&&"function"!==typeof r&&"symbol"!==typeof r;else dd(e,t,c,r,n,null);return;case"dialog":Ju("beforetoggle",e),Ju("toggle",e),Ju("cancel",e),Ju("close",e);break;case"iframe":case"object":Ju("load",e);break;case"video":case"audio":for(r=0;r<Yu.length;r++)Ju(Yu[r],e);break;case"image":Ju("error",e),Ju("load",e);break;case"details":Ju("toggle",e);break;case"embed":case"source":case"link":Ju("error",e),Ju("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(r=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:dd(e,t,u,r,n,null)}return;default:if(Pt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(r=n[d])&&pd(e,t,d,r,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(r=n[s])&&dd(e,t,s,r,n,null))}function md(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var hd=null,gd=null;function yd(e){return 9===e.nodeType?e:e.ownerDocument}function bd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wd(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function xd(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var vd=null;var kd="function"===typeof setTimeout?setTimeout:void 0,zd="function"===typeof clearTimeout?clearTimeout:void 0,jd="function"===typeof Promise?Promise:void 0,Sd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof jd?function(e){return jd.resolve(null).then(e).catch(Cd)}:kd;function Cd(e){setTimeout(function(){throw e})}function Ed(e){return"head"===e}function Pd(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&8===r.nodeType)if("/$"===(n=r.data)||"/&"===n){if(0===a)return e.removeChild(r),void Kp(t);a--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)a++;else if("html"===n)Id(e.ownerDocument.documentElement);else if("head"===n){Id(n=e.ownerDocument.head);for(var o=n.firstChild;o;){var i=o.nextSibling,l=o.nodeName;o[Ye]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=i}}else"body"===n&&Id(e.ownerDocument.body);n=r}while(n);Kp(t)}function Td(e,t){var n=e;e=0;do{var a=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=a}while(n)}function $d(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":$d(n),qe(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function _d(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=Rd(e.nextSibling)))return null}return e}function Nd(e){return"$?"===e.data||"$~"===e.data}function Od(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Rd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}var Ld=null;function Md(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return Rd(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function Dd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Ad(e,t,n){switch(t=yd(n),e){case"html":if(!(e=t.documentElement))throw Error(i(452));return e;case"head":if(!(e=t.head))throw Error(i(453));return e;case"body":if(!(e=t.body))throw Error(i(454));return e;default:throw Error(i(451))}}function Id(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);qe(e)}var Fd=new Map,Wd=new Set;function Ud(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Hd=L.d;L.d={f:function(){var e=Hd.f(),t=eu();return e||t},r:function(e){var t=Je(e);null!==t&&5===t.tag&&"form"===t.type?rl(t):Hd.r(e)},D:function(e){Hd.D(e),Kd("dns-prefetch",e,null)},C:function(e,t){Hd.C(e,t),Kd("preconnect",e,t)},L:function(e,t,n){Hd.L(e,t,n);var a=Bd;if(a&&e&&t){var r='link[rel="preload"][as="'+yt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(r+='[imagesrcset="'+yt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(r+='[imagesizes="'+yt(n.imageSizes)+'"]')):r+='[href="'+yt(e)+'"]';var o=r;switch(t){case"style":o=Vd(e);break;case"script":o=Qd(e)}Fd.has(o)||(e=f({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Fd.set(o,e),null!==a.querySelector(r)||"style"===t&&a.querySelector(Yd(o))||"script"===t&&a.querySelector(Jd(o))||(fd(t=a.createElement("link"),"link",e),et(t),a.head.appendChild(t)))}},m:function(e,t){Hd.m(e,t);var n=Bd;if(n&&e){var a=t&&"string"===typeof t.as?t.as:"script",r='link[rel="modulepreload"][as="'+yt(a)+'"][href="'+yt(e)+'"]',o=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Qd(e)}if(!Fd.has(o)&&(e=f({rel:"modulepreload",href:e},t),Fd.set(o,e),null===n.querySelector(r))){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Jd(o)))return}fd(a=n.createElement("link"),"link",e),et(a),n.head.appendChild(a)}}},X:function(e,t){Hd.X(e,t);var n=Bd;if(n&&e){var a=Ze(n).hoistableScripts,r=Qd(e),o=a.get(r);o||((o=n.querySelector(Jd(r)))||(e=f({src:e,async:!0},t),(t=Fd.get(r))&&tp(e,t),et(o=n.createElement("script")),fd(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}},S:function(e,t,n){Hd.S(e,t,n);var a=Bd;if(a&&e){var r=Ze(a).hoistableStyles,o=Vd(e);t=t||"default";var i=r.get(o);if(!i){var l={loading:0,preload:null};if(i=a.querySelector(Yd(o)))l.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Fd.get(o))&&ep(e,n);var s=i=a.createElement("link");et(s),fd(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Zd(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:l},r.set(o,i)}}},M:function(e,t){Hd.M(e,t);var n=Bd;if(n&&e){var a=Ze(n).hoistableScripts,r=Qd(e),o=a.get(r);o||((o=n.querySelector(Jd(r)))||(e=f({src:e,async:!0,type:"module"},t),(t=Fd.get(r))&&tp(e,t),et(o=n.createElement("script")),fd(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}}};var Bd="undefined"===typeof document?null:document;function Kd(e,t,n){var a=Bd;if(a&&"string"===typeof t&&t){var r=yt(t);r='link[rel="'+e+'"][href="'+r+'"]',"string"===typeof n&&(r+='[crossorigin="'+n+'"]'),Wd.has(r)||(Wd.add(r),e={rel:e,crossOrigin:n,href:t},null===a.querySelector(r)&&(fd(t=a.createElement("link"),"link",e),et(t),a.head.appendChild(t)))}}function Gd(e,t,n,a){var r,o,l,s,c=(c=G.current)?Ud(c):null;if(!c)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Vd(n.href),(a=(n=Ze(c).hoistableStyles).get(t))||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Vd(n.href);var u=Ze(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Yd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Fd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Fd.set(e,n),u||(r=c,o=e,l=n,s=d.state,r.querySelector('link[rel="preload"][as="style"]['+o+"]")?s.loading=1:(o=r.createElement("link"),s.preload=o,o.addEventListener("load",function(){return s.loading|=1}),o.addEventListener("error",function(){return s.loading|=2}),fd(o,"link",l),et(o),r.head.appendChild(o))))),t&&null===a)throw Error(i(528,""));return d}if(t&&null!==a)throw Error(i(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Qd(n),(a=(n=Ze(c).hoistableScripts).get(t))||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Vd(e){return'href="'+yt(e)+'"'}function Yd(e){return'link[rel="stylesheet"]['+e+"]"}function qd(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Qd(e){return'[src="'+yt(e)+'"]'}function Jd(e){return"script[async]"+e}function Xd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+yt(n.href)+'"]');if(a)return t.instance=a,et(a),a;var r=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return et(a=(e.ownerDocument||e).createElement("style")),fd(a,"style",r),Zd(a,n.precedence,e),t.instance=a;case"stylesheet":r=Vd(n.href);var o=e.querySelector(Yd(r));if(o)return t.state.loading|=4,t.instance=o,et(o),o;a=qd(n),(r=Fd.get(r))&&ep(a,r),et(o=(e.ownerDocument||e).createElement("link"));var l=o;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),fd(o,"link",a),t.state.loading|=4,Zd(o,n.precedence,e),t.instance=o;case"script":return o=Qd(n.src),(r=e.querySelector(Jd(o)))?(t.instance=r,et(r),r):(a=n,(r=Fd.get(o))&&tp(a=f({},n),r),et(r=(e=e.ownerDocument||e).createElement("script")),fd(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(i(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(a=t.instance,t.state.loading|=4,Zd(a,n.precedence,e));return t.instance}function Zd(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,o=r,i=0;i<a.length;i++){var l=a[i];if(l.dataset.precedence===t)o=l;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function ep(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function tp(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var np=null;function ap(e,t,n){if(null===np){var a=new Map,r=np=new Map;r.set(n,a)}else(a=(r=np).get(n))||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var o=n[r];if(!(o[Ye]||o[We]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var i=o.getAttribute(t)||"";i=e+i;var l=a.get(i);l?l.push(o):a.set(i,[o])}}return a}function rp(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function op(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var ip=0;function lp(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)cp(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var sp=null;function cp(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,sp=new Map,t.forEach(up,e),sp=null,lp.call(e))}function up(e,t){if(!(4&t.state.loading)){var n=sp.get(e);if(n)var a=n.get(null);else{n=new Map,sp.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var i=r[o];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(n.set(i.dataset.precedence,i),a=i)}a&&n.set(null,a)}i=(r=t.instance).getAttribute("data-precedence"),(o=n.get(i)||a)===a&&n.set(null,r),n.set(i,r),this.count++,a=lp.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),o?o.parentNode.insertBefore(r,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(r,e.firstChild),t.state.loading|=4}}var dp={$$typeof:v,Provider:null,Consumer:null,_currentValue:M,_currentValue2:M,_threadCount:0};function pp(e,t,n,a,r,o,i,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_e(0),this.hiddenUpdates=_e(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function fp(e,t,n,a,r,o,i,l,s,c,u,d){return e=new pp(e,t,n,i,s,c,u,d,l),t=1,!0===o&&(t|=24),o=Ia(3,null,null,t),e.current=o,o.stateNode=e,(t=Fr()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},bo(o),e}function mp(e){return e?e=Da:Da}function hp(e,t,n,a,r,o){r=mp(r),null===a.context?a.context=r:a.pendingContext=r,(a=xo(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(a.callback=o),null!==(n=vo(e,a,t))&&(qc(n,0,t),ko(n,e,t))}function gp(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function yp(e,t){gp(e,t),(e=e.alternate)&&gp(e,t)}function bp(e){if(13===e.tag||31===e.tag){var t=Ra(e,67108864);null!==t&&qc(t,0,67108864),yp(e,67108864)}}function wp(e){if(13===e.tag||31===e.tag){var t=Vc(),n=Ra(e,t=Me(t));null!==n&&qc(n,0,t),yp(e,t)}}var xp=!0;function vp(e,t,n,a){var r=R.T;R.T=null;var o=L.p;try{L.p=2,zp(e,t,n,a)}finally{L.p=o,R.T=r}}function kp(e,t,n,a){var r=R.T;R.T=null;var o=L.p;try{L.p=8,zp(e,t,n,a)}finally{L.p=o,R.T=r}}function zp(e,t,n,a){if(xp){var r=jp(a);if(null===r)nd(e,t,a,Sp,n),Mp(e,a);else if(function(e,t,n,a,r){switch(t){case"focusin":return Tp=Dp(Tp,e,t,n,a,r),!0;case"dragenter":return $p=Dp($p,e,t,n,a,r),!0;case"mouseover":return _p=Dp(_p,e,t,n,a,r),!0;case"pointerover":var o=r.pointerId;return Np.set(o,Dp(Np.get(o)||null,e,t,n,a,r)),!0;case"gotpointercapture":return o=r.pointerId,Op.set(o,Dp(Op.get(o)||null,e,t,n,a,r)),!0}return!1}(r,e,t,n,a))a.stopPropagation();else if(Mp(e,a),4&t&&-1<Lp.indexOf(e)){for(;null!==r;){var o=Je(r);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var i=Ce(o.pendingLanes);if(0!==i){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-xe(i);l.entanglements[1]|=s,i&=~s}Mu(o),0===(6&mc)&&(Lc=se()+500,Du(0,!1))}}break;case 31:case 13:null!==(l=Ra(o,2))&&qc(l,0,2),eu(),yp(o,2)}if(null===(o=jp(a))&&nd(e,t,a,Sp,n),o===r)break;r=o}null!==r&&a.stopPropagation()}else nd(e,t,a,null,n)}}function jp(e){return Cp(e=Rt(e))}var Sp=null;function Cp(e){if(Sp=null,null!==(e=Qe(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(31===n){if(null!==(e=u(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Sp=e,null}function Ep(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case ue:return 2;case de:return 8;case pe:case fe:return 32;case me:return 268435456;default:return 32}default:return 32}}var Pp=!1,Tp=null,$p=null,_p=null,Np=new Map,Op=new Map,Rp=[],Lp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mp(e,t){switch(e){case"focusin":case"focusout":Tp=null;break;case"dragenter":case"dragleave":$p=null;break;case"mouseover":case"mouseout":_p=null;break;case"pointerover":case"pointerout":Np.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Op.delete(t.pointerId)}}function Dp(e,t,n,a,r,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[r]},null!==t&&(null!==(t=Je(t))&&bp(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,null!==r&&-1===t.indexOf(r)&&t.push(r),e)}function Ap(e){var t=Qe(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void Ie(e.priority,function(){wp(n)})}else if(31===t){if(null!==(t=u(n)))return e.blockedOn=t,void Ie(e.priority,function(){wp(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Ip(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=jp(e.nativeEvent);if(null!==n)return null!==(t=Je(n))&&bp(t),e.blockedOn=n,!1;var a=new(n=e.nativeEvent).constructor(n.type,n);Ot=a,n.target.dispatchEvent(a),Ot=null,t.shift()}return!0}function Fp(e,t,n){Ip(e)&&n.delete(t)}function Wp(){Pp=!1,null!==Tp&&Ip(Tp)&&(Tp=null),null!==$p&&Ip($p)&&($p=null),null!==_p&&Ip(_p)&&(_p=null),Np.forEach(Fp),Op.forEach(Fp)}function Up(e,t){e.blockedOn===t&&(e.blockedOn=null,Pp||(Pp=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Wp)))}var Hp=null;function Bp(e){Hp!==e&&(Hp=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Hp===e&&(Hp=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if("function"!==typeof a){if(null===Cp(a||n))continue;break}var o=Je(n);null!==o&&(e.splice(t,3),t-=3,nl(o,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function Kp(e){function t(t){return Up(t,e)}null!==Tp&&Up(Tp,e),null!==$p&&Up($p,e),null!==_p&&Up(_p,e),Np.forEach(t),Op.forEach(t);for(var n=0;n<Rp.length;n++){var a=Rp[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Rp.length&&null===(n=Rp[0]).blockedOn;)Ap(n),null===n.blockedOn&&Rp.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(a=0;a<n.length;a+=3){var r=n[a],o=n[a+1],i=r[Ue]||null;if("function"===typeof o)i||Bp(n);else if(i){var l=null;if(o&&o.hasAttribute("formAction")){if(r=o,i=o[Ue]||null)l=i.formAction;else if(null!==Cp(r))continue}else l=i.action;"function"===typeof l?n[a+1]=l:(n.splice(a,3),a-=3),Bp(n)}}}function Gp(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return r=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==r&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==r&&(r(),r=null)}}}function Vp(e){this._internalRoot=e}function Yp(e){this._internalRoot=e}Yp.prototype.render=Vp.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));hp(t.current,Vc(),e,t,null,null)},Yp.prototype.unmount=Vp.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;hp(e.current,2,null,e,null,null),eu(),t[He]=null}},Yp.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ae();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rp.length&&0!==t&&t<Rp[n].priority;n++);Rp.splice(n,0,e),0===n&&Ap(e)}};var qp=r.version;if("19.2.4"!==qp)throw Error(i(527,qp,"19.2.4"));L.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(null===r)break;var o=r.alternate;if(null===o){if(null!==(a=r.return)){n=a;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return d(r),e;if(o===a)return d(r),t;o=o.sibling}throw Error(i(188))}if(n.return!==a.return)n=r,a=o;else{for(var l=!1,c=r.child;c;){if(c===n){l=!0,n=r,a=o;break}if(c===a){l=!0,a=r,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,a=r;break}if(c===a){l=!0,a=o,n=r;break}c=c.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==a)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?p(e):null)?null:e.stateNode};var Qp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Jp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jp.isDisabled&&Jp.supportsFiber)try{ye=Jp.inject(Qp),be=Jp}catch(Zp){}}t.createRoot=function(e,t){if(!l(e))throw Error(i(299));var n=!1,a="",r=Sl,o=Cl,s=El;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(a=t.identifierPrefix),void 0!==t.onUncaughtError&&(r=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError)),t=fp(e,1,!1,null,0,n,a,null,r,o,s,Gp),e[He]=t.current,ed(e),new Vp(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(i(299));var a=!1,r="",o=Sl,s=Cl,c=El,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(r=n.identifierPrefix),void 0!==n.onUncaughtError&&(o=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.formState&&(u=n.formState)),(t=fp(e,1,!0,t,0,a,r,u,o,s,c,Gp)).context=mp(null),n=t.current,(r=xo(a=Me(a=Vc()))).callback=null,vo(n,r,a),n=a,t.current.lanes=n,Ne(t,n),Mu(t),e[He]=t.current,ed(e),new Yp(t)},t.version="19.2.4"},672(e,t,n){var a=n(43);function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var i={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(r(299));return function(e,t,n){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==a?null:""+a,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,i.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&i.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,a=c(n,t.crossOrigin),r="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?i.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:a,integrity:r,fetchPriority:o}):"script"===n&&i.d.X(e,{crossOrigin:a,integrity:r,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&i.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,a=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:a,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else i.d.m(e)},t.requestFormReset=function(e){i.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.2.4"},391(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)},799(e,t){var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(e,t,a){var r=null;if(void 0!==a&&(r=""+a),void 0!==t.key&&(r=""+t.key),"key"in t)for(var o in a={},t)"key"!==o&&(a[o]=t[o]);else a=t;return t=a.ref,{$$typeof:n,type:e,key:r,ref:void 0!==t?t:null,props:a}}t.Fragment=a,t.jsx=r,t.jsxs=r},288(e,t){var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.for("react.activity"),m=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function w(){}function x(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=b.prototype;var v=x.prototype=new w;v.constructor=x,g(v,b.prototype),v.isPureReactComponent=!0;var k=Array.isArray;function z(){}var j={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function C(e,t,a){var r=a.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:a}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function $(e,t,r,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case a:u=!0;break;case p:return $((u=e._init)(e._payload),t,r,o,i)}}if(u)return i=i(e),u=""===o?"."+T(e,0):o,k(i)?(r="",null!=u&&(r=u.replace(P,"$&/")+"/"),$(i,t,r,"",function(e){return e})):null!=i&&(E(i)&&(s=i,c=r+(null==i.key||e&&e.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+u,i=C(s.type,c,s.props)),t.push(i)),1;u=0;var d,f=""===o?".":o+":";if(k(e))for(var h=0;h<e.length;h++)u+=$(o=e[h],t,r,l=f+T(o,h),i);else if("function"===typeof(h=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=m&&d[m]||d["@@iterator"])?d:null))for(e=h.call(e),h=0;!(o=e.next()).done;)u+=$(o=o.value,t,r,l=f+T(o,h++),i);else if("object"===l){if("function"===typeof e.then)return $(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(z,z):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,r,o,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function _(e,t,n){if(null==e)return e;var a=[],r=0;return $(e,a,"","",function(e){return t.call(n,e,r++)}),a}function N(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},R={map:_,forEach:function(e,t,n){_(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _(e,function(){t++}),t},toArray:function(e){return _(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=f,t.Children=R,t.Component=b,t.Fragment=r,t.Profiler=i,t.PureComponent=x,t.StrictMode=o,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return j.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var a=g({},e.props),r=e.key;if(null!=t)for(o in void 0!==t.key&&(r=""+t.key),t)!S.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(a[o]=t[o]);var o=arguments.length-2;if(1===o)a.children=n;else if(1<o){for(var i=Array(o),l=0;l<o;l++)i[l]=arguments[l+2];a.children=i}return C(e.type,r,a)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var a,r={},o=null;if(null!=t)for(a in void 0!==t.key&&(o=""+t.key),t)S.call(t,a)&&"key"!==a&&"__self"!==a&&"__source"!==a&&(r[a]=t[a]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];r.children=l}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===r[a]&&(r[a]=i[a]);return C(e,o,r)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=j.T,n={};j.T=n;try{var a=e(),r=j.S;null!==r&&r(n,a),"object"===typeof a&&null!==a&&"function"===typeof a.then&&a.then(z,O)}catch(o){O(o)}finally{null!==t&&null!==n.types&&(t.types=n.types),j.T=t}},t.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},t.use=function(e){return j.H.use(e)},t.useActionState=function(e,t,n){return j.H.useActionState(e,t,n)},t.useCallback=function(e,t){return j.H.useCallback(e,t)},t.useContext=function(e){return j.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return j.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return j.H.useEffect(e,t)},t.useEffectEvent=function(e){return j.H.useEffectEvent(e)},t.useId=function(){return j.H.useId()},t.useImperativeHandle=function(e,t,n){return j.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return j.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return j.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return j.H.useMemo(e,t)},t.useOptimistic=function(e,t){return j.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return j.H.useReducer(e,t,n)},t.useRef=function(e){return j.H.useRef(e)},t.useState=function(e){return j.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return j.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return j.H.useTransition()},t.version="19.2.4"},43(e,t,n){e.exports=n(288)},579(e,t,n){e.exports=n(799)},896(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var a=n-1>>>1,r=e[a];if(!(0<o(r,t)))break e;e[a]=t,e[n]=r,n=a}}function a(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var a=0,r=e.length,i=r>>>1;a<i;){var l=2*(a+1)-1,s=e[l],c=l+1,u=e[c];if(0>o(s,n))c<r&&0>o(u,s)?(e[a]=u,e[c]=n,a=c):(e[a]=s,e[l]=n,a=l);else{if(!(c<r&&0>o(u,n)))break e;e[a]=u,e[c]=n,a=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,m=!1,h=!1,g=!1,y=!1,b="function"===typeof setTimeout?setTimeout:null,w="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function v(e){for(var t=a(u);null!==t;){if(null===t.callback)r(u);else{if(!(t.startTime<=e))break;r(u),t.sortIndex=t.expirationTime,n(c,t)}t=a(u)}}function k(e){if(g=!1,v(e),!h)if(null!==a(c))h=!0,j||(j=!0,z());else{var t=a(u);null!==t&&N(k,t.startTime-e)}}var z,j=!1,S=-1,C=5,E=-1;function P(){return!!y||!(t.unstable_now()-E<C)}function T(){if(y=!1,j){var e=t.unstable_now();E=e;var n=!0;try{e:{h=!1,g&&(g=!1,w(S),S=-1),m=!0;var o=f;try{t:{for(v(e),p=a(c);null!==p&&!(p.expirationTime>e&&P());){var i=p.callback;if("function"===typeof i){p.callback=null,f=p.priorityLevel;var l=i(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){p.callback=l,v(e),n=!0;break t}p===a(c)&&r(c),v(e)}else r(c);p=a(c)}if(null!==p)n=!0;else{var s=a(u);null!==s&&N(k,s.startTime-e),n=!1}}break e}finally{p=null,f=o,m=!1}n=void 0}}finally{n?z():j=!1}}}if("function"===typeof x)z=function(){x(T)};else if("undefined"!==typeof MessageChannel){var $=new MessageChannel,_=$.port2;$.port1.onmessage=T,z=function(){_.postMessage(null)}}else z=function(){b(T,0)};function N(e,n){S=b(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_requestPaint=function(){y=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,r,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:r,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(u,e),null===a(c)&&e===a(u)&&(g?(w(S),S=-1):g=!0,N(k,o-i))):(e.sortIndex=l,n(c,e),h||m||(h=!0,j||(j=!0,z()))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},853(e,t,n){e.exports=n(896)},217(e,t,n){e.exports=n.p+"static/media/pexels-dimkidama-15115560.04167beb6bd16a6e9fd4.jpg"},410(e,t,n){e.exports=n.p+"static/media/pexels-firmbee-com-22729701-6963740.a9a8b980823767df4886.jpg"},430(e,t,n){e.exports=n.p+"static/media/pexels-magnetme-3917414-5839461.06d3415285cbf1cc0bf1.jpg"},682(e,t,n){e.exports=n.p+"static/media/pexels-rdne-7310202.0cfb9c3eef397dd77e13.jpg"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(a,r){if(1&r&&(a=this(a)),8&r)return a;if("object"===typeof a&&a){if(4&r&&a.__esModule)return a;if(16&r&&"function"===typeof a.then)return a}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&r&&a;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>i[e]=()=>a[e]);return i.default=()=>a,n.d(o,i),o}})(),n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/klara-queen/",n.nc=void 0;var a=n(43),r=n.t(a,2),o=n(391),i="popstate";function l(e){return"object"===typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function s(){return h(function(e,t){let n=t.state?.masked,{pathname:a,search:r,hash:o}=n||e.location;return p("",{pathname:a,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"===typeof t?t:f(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function p(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?m(t):t,state:n,key:t&&t.key||a||Math.random().toString(36).substring(2,10),unstable_mask:r}}function f(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),a&&"#"!==a&&(t+="#"===a.charAt(0)?a:"#"+a),t}function m(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function h(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:r=document.defaultView,v5Compat:o=!1}=a,s=r.history,c="POP",u=null,f=m();function m(){return(s.state||{idx:null}).idx}function h(){c="POP";let e=m(),t=null==e?null:e-f;f=e,u&&u({action:c,location:b.location,delta:t})}function y(e){return g(e)}null==f&&(f=0,s.replaceState({...s.state,idx:f},""));let b={get action(){return c},get location(){return e(r,s)},listen(e){if(u)throw new Error("A history only accepts one active listener");return r.addEventListener(i,h),u=e,()=>{r.removeEventListener(i,h),u=null}},createHref:e=>t(r,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){c="PUSH";let a=l(e)?e:p(b.location,e,t);n&&n(a,e),f=m()+1;let i=d(a,f),h=b.createHref(a.unstable_mask||a);try{s.pushState(i,"",h)}catch(g){if(g instanceof DOMException&&"DataCloneError"===g.name)throw g;r.location.assign(h)}o&&u&&u({action:c,location:b.location,delta:1})},replace:function(e,t){c="REPLACE";let a=l(e)?e:p(b.location,e,t);n&&n(a,e),f=m();let r=d(a,f),i=b.createHref(a.unstable_mask||a);s.replaceState(r,"",i),o&&u&&u({action:c,location:b.location,delta:0})},go:e=>s.go(e)};return b}function g(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),c(n,"No window.location.(origin|href) available to create URL");let a="string"===typeof e?e:f(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}new WeakMap;function y(e,t){return b(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function b(e,t,n,a){let r=O(("string"===typeof t?m(t):t).pathname||"/",n);if(null==r)return null;let o=w(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=N(r);i=T(o[l],e,a)}return i}function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=function(e,o){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,l=arguments.length>3?arguments[3]:void 0,s={relativePath:void 0===l?e.path||"":l,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};if(s.relativePath.startsWith("/")){if(!s.relativePath.startsWith(a)&&i)return;c(s.relativePath.startsWith(a),`Absolute route path "${s.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(a.length)}let u=F([a,s.relativePath]),d=n.concat(s);e.children&&e.children.length>0&&(c(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),w(e.children,t,d,u,i)),(null!=e.path||e.index)&&t.push({path:u,score:P(u,e.index),routesMeta:d})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of x(e.path))o(e,t,!0,n);else o(e,t)}),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[n,...a]=t,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===a.length)return r?[o,""]:[o];let i=x(a.join("/")),l=[];return l.push(...i.map(e=>""===e?o:[o,e].join("/"))),r&&l.push(...i),l.map(t=>e.startsWith("/")&&""===t?"/":t)}var v=/^:[\w-]+$/,k=3,z=2,j=1,S=10,C=-2,E=e=>"*"===e;function P(e,t){let n=e.split("/"),a=n.length;return n.some(E)&&(a+=C),t&&(a+=z),n.filter(e=>!E(e)).reduce((e,t)=>e+(v.test(t)?k:""===t?j:S),a)}function T(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:a}=e,r={},o="/",i=[];for(let l=0;l<a.length;++l){let e=a[l],s=l===a.length-1,c="/"===o?t:t.slice(o.length)||"/",u=$({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!a[a.length-1].route.index&&(u=$({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(r,u.params),i.push({params:r,pathname:F([o,u.pathname]),pathnameBase:W(F([o,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(o=F([o,u.pathnameBase]))}return i}function $(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=_(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let o=r[0],i=o.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:a.reduce((e,t,n)=>{let{paramName:a,isOptional:r}=t;if("*"===a){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[a]=r&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:o,pathnameBase:i,pattern:e}}function _(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];u("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,r,o)=>{if(a.push({paramName:t,isOptional:null!=n}),n){let t=o.charAt(r+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":""!==e&&"/"!==e&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function N(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return u(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function O(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&"/"!==a?null:e.slice(n)||"/"}var R=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function L(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function M(e,t,n,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function D(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function A(e){let t=D(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function I(e,t,n){let a,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?a=m(e):(a={...e},c(!a.pathname||!a.pathname.includes("?"),M("?","pathname","search",a)),c(!a.pathname||!a.pathname.includes("#"),M("#","pathname","hash",a)),c(!a.search||!a.search.includes("#"),M("#","search","hash",a)));let o,i=""===e||""===a.pathname,l=i?"/":a.pathname;if(null==l)o=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}o=e>=0?t[e]:"/"}let s=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:a,search:r="",hash:o=""}="string"===typeof e?m(e):e;return a?(a=a.replace(/\/\/+/g,"/"),t=a.startsWith("/")?L(a.substring(1),"/"):L(a,n)):t=n,{pathname:t,search:U(r),hash:H(o)}}(a,o),u=l&&"/"!==l&&l.endsWith("/"),d=(i||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!u&&!d||(s.pathname+="/"),s}var F=e=>e.join("/").replace(/\/\/+/g,"/"),W=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),U=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",H=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var B=class{constructor(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.status=e,this.statusText=t||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function K(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}function G(e){return e.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var V="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function Y(e,t){let n=e;if("string"!==typeof n||!R.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let a=n,r=!1;if(V)try{let e=new URL(window.location.href),a=n.startsWith("//")?new URL(e.protocol+n):new URL(n),o=O(a.pathname,t);a.origin===e.origin&&null!=o?n=o+a.search+a.hash:r=!0}catch(o){u(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:r,to:n}}Symbol("Uninstrumented");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var q=["POST","PUT","PATCH","DELETE"],Q=(new Set(q),["GET",...q]);new Set(Q),Symbol("ResetLoaderData");var J=a.createContext(null);J.displayName="DataRouter";var X=a.createContext(null);X.displayName="DataRouterState";var Z=a.createContext(!1);function ee(){return a.useContext(Z)}var te=a.createContext({isTransitioning:!1});te.displayName="ViewTransition";var ne=a.createContext(new Map);ne.displayName="Fetchers";var ae=a.createContext(null);ae.displayName="Await";var re=a.createContext(null);re.displayName="Navigation";var oe=a.createContext(null);oe.displayName="Location";var ie=a.createContext({outlet:null,matches:[],isDataRoute:!1});ie.displayName="Route";var le=a.createContext(null);le.displayName="RouteError";var se="REACT_ROUTER_ERROR";function ce(){return null!=a.useContext(oe)}function ue(){return c(ce(),"useLocation() may be used only in the context of a <Router> component."),a.useContext(oe).location}var de="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function pe(e){a.useContext(re).static||a.useLayoutEffect(e)}function fe(){let{isDataRoute:e}=a.useContext(ie);return e?function(){let{router:e}=Se("useNavigate"),t=Ee("useNavigate"),n=a.useRef(!1);pe(()=>{n.current=!0});let r=a.useCallback(async function(a){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(n.current,de),n.current&&("number"===typeof a?await e.navigate(a):await e.navigate(a,{fromRouteId:t,...r}))},[e,t]);return r}():function(){c(ce(),"useNavigate() may be used only in the context of a <Router> component.");let e=a.useContext(J),{basename:t,navigator:n}=a.useContext(re),{matches:r}=a.useContext(ie),{pathname:o}=ue(),i=JSON.stringify(A(r)),l=a.useRef(!1);pe(()=>{l.current=!0});let s=a.useCallback(function(a){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(u(l.current,de),!l.current)return;if("number"===typeof a)return void n.go(a);let s=I(a,JSON.parse(i),o,"path"===r.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:F([t,s.pathname])),(r.replace?n.replace:n.push)(s,r.state,r)},[t,n,i,o,e]);return s}()}a.createContext(null);function me(){let{matches:e}=a.useContext(ie),t=e[e.length-1];return t?t.params:{}}function he(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:n}=a.useContext(ie),{pathname:r}=ue(),o=JSON.stringify(A(n));return a.useMemo(()=>I(e,JSON.parse(o),r,"path"===t),[e,o,r,t])}function ge(e,t,n){c(ce(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=a.useContext(re),{matches:o}=a.useContext(ie),i=o[o.length-1],l=i?i.params:{},s=i?i.pathname:"/",d=i?i.pathnameBase:"/",p=i&&i.route;{let e=p&&p.path||"";$e(s,!p||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let f,h=ue();if(t){let e="string"===typeof t?m(t):t;c("/"===d||e.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`),f=e}else f=h;let g=f.pathname||"/",b=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=y(e,{pathname:b});u(p||null!=w,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),u(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=ze(w&&w.map(e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:F([d,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:F([d,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),o,n);return t&&x?a.createElement(oe.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...f},navigationType:"POP"}},x):x}function ye(){let e=Pe(),t=K(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=a.createElement(a.Fragment,null,a.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),a.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",a.createElement("code",{style:i},"ErrorBoundary")," or"," ",a.createElement("code",{style:i},"errorElement")," prop on your route.")),a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),n?a.createElement("pre",{style:o},n):null,l)}var be=a.createElement(ye,null),we=class extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&"object"===typeof e&&e&&"digest"in e&&"string"===typeof e.digest){const t=function(e){if(e.startsWith(`${se}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText)return new B(t.status,t.statusText,t.data)}catch{}}(e.digest);t&&(e=t)}let t=void 0!==e?a.createElement(ie.Provider,{value:this.props.routeContext},a.createElement(le.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?a.createElement(ve,{error:e},t):t}};we.contextType=Z;var xe=new WeakMap;function ve(e){let{children:t,error:n}=e,{basename:r}=a.useContext(re);if("object"===typeof n&&n&&"digest"in n&&"string"===typeof n.digest){let e=function(e){if(e.startsWith(`${se}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText&&"string"===typeof t.location&&"boolean"===typeof t.reloadDocument&&"boolean"===typeof t.replace)return t}catch{}}(n.digest);if(e){let t=xe.get(n);if(t)throw t;let o=Y(e.location,r);if(V&&!xe.get(n)){if(!o.isExternal&&!e.reloadDocument){const t=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:e.replace}));throw xe.set(n,t),t}window.location.href=o.absoluteURL||o.to}return a.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return t}function ke(e){let{routeContext:t,match:n,children:r}=e,o=a.useContext(J);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),a.createElement(ie.Provider,{value:t},r)}function ze(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=n?.state;if(null==e){if(!r)return null;if(r.errors)e=r.matches;else{if(0!==t.length||r.initialized||!(r.matches.length>0))return null;e=r.matches}}let o=e,i=r?.errors;if(null!=i){let e=o.findIndex(e=>e.route.id&&void 0!==i?.[e.route.id]);c(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let l=!1,s=-1;if(n&&r){l=r.renderFallback;for(let e=0;e<o.length;e++){let t=o[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,i=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||void 0===a[t.route.id]);if(t.route.lazy||i){n.isStatic&&(l=!0),o=s>=0?o.slice(0,s+1):[o[0]];break}}}}let u=n?.onError,d=r&&u?(e,t)=>{u(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:G(r.matches),errorInfo:t})}:void 0;return o.reduceRight((e,n,c)=>{let u,p=!1,f=null,m=null;r&&(u=i&&n.route.id?i[n.route.id]:void 0,f=n.route.errorElement||be,l&&(s<0&&0===c?($e("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,m=null):s===c&&(p=!0,m=n.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,c+1)),g=()=>{let t;return t=u?f:p?m:n.route.Component?a.createElement(n.route.Component,null):n.route.element?n.route.element:e,a.createElement(ke,{match:n,routeContext:{outlet:e,matches:h,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===c)?a.createElement(we,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:d}):g()},null)}function je(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Se(e){let t=a.useContext(J);return c(t,je(e)),t}function Ce(e){let t=a.useContext(X);return c(t,je(e)),t}function Ee(e){let t=function(e){let t=a.useContext(ie);return c(t,je(e)),t}(e),n=t.matches[t.matches.length-1];return c(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Pe(){let e=a.useContext(le),t=Ce("useRouteError"),n=Ee("useRouteError");return void 0!==e?e:t.errors?.[n]}var Te={};function $e(e,t,n){t||Te[e]||(Te[e]=!0,u(!1,n))}var _e={};function Ne(e,t){e||_e[t]||(_e[t]=!0,console.warn(t))}r.useOptimistic;a.memo(Oe);function Oe(e){let{routes:t,future:n,state:a,isStatic:r,onError:o}=e;return ge(t,void 0,{state:a,isStatic:r,onError:o,future:n})}function Re(e){c(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Le(e){let{basename:t="/",children:n=null,location:r,navigationType:o="POP",navigator:i,static:l=!1,unstable_useTransitions:s}=e;c(!ce(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=t.replace(/^\/*/,"/"),p=a.useMemo(()=>({basename:d,navigator:i,static:l,unstable_useTransitions:s,future:{}}),[d,i,l,s]);"string"===typeof r&&(r=m(r));let{pathname:f="/",search:h="",hash:g="",state:y=null,key:b="default",unstable_mask:w}=r,x=a.useMemo(()=>{let e=O(f,d);return null==e?null:{location:{pathname:e,search:h,hash:g,state:y,key:b,unstable_mask:w},navigationType:o}},[d,f,h,g,y,b,o,w]);return u(null!=x,`<Router basename="${d}"> is not able to match the URL "${f}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),null==x?null:a.createElement(re.Provider,{value:p},a.createElement(oe.Provider,{children:n,value:x}))}function Me(e){let{children:t,location:n}=e;return ge(De(t),n)}a.Component;function De(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return a.Children.forEach(e,(e,r)=>{if(!a.isValidElement(e))return;let o=[...t,r];if(e.type===a.Fragment)return void n.push.apply(n,De(e.props.children,o));c(e.type===Re,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),c(!e.props.index||!e.props.children,"An index route cannot have child routes.");let i={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=De(e.props.children,o)),n.push(i)}),n}var Ae="get",Ie="application/x-www-form-urlencoded";function Fe(e){return"undefined"!==typeof HTMLElement&&e instanceof HTMLElement}var We=null;var Ue=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function He(e){return null==e||Ue.has(e)?e:(u(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ie}"`),null)}function Be(e,t){let n,a,r,o,i;if(Fe(l=e)&&"form"===l.tagName.toLowerCase()){let i=e.getAttribute("action");a=i?O(i,t):null,n=e.getAttribute("method")||Ae,r=He(e.getAttribute("enctype"))||Ie,o=new FormData(e)}else if(function(e){return Fe(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Fe(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||i.getAttribute("action");if(a=l?O(l,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||Ae,r=He(e.getAttribute("formenctype"))||He(i.getAttribute("enctype"))||Ie,o=new FormData(i,e),!function(){if(null===We)try{new FormData(document.createElement("form"),0),We=!1}catch(e){We=!0}return We}()){let{name:t,type:n,value:a}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,a)}}else{if(Fe(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ae,a=null,r=Ie,i=e}var l;return o&&"text/plain"===r&&(i=o,o=void 0),{action:a,method:n.toLowerCase(),encType:r,formData:o,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function Ke(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function Ge(e,t,n,a){let r="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return n?r.pathname.endsWith("/")?r.pathname=`${r.pathname}_.${a}`:r.pathname=`${r.pathname}.${a}`:"/"===r.pathname?r.pathname=`_root.${a}`:t&&"/"===O(r.pathname,t)?r.pathname=`${t.replace(/\/$/,"")}/_root.${a}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${a}`,r}async function Ve(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ye(e){return null!=e&&"string"===typeof e.page}function qe(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Qe(e,t,n,a,r,o){let i=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter((e,t)=>i(e,t)||l(e,t)):"data"===o?t.filter((t,o)=>{let s=a.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(i(t,o)||l(t,o))return!0;if(t.route.shouldRevalidate){let a=t.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof a)return a}return!0}):[]}function Je(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a=e.map(e=>{let a=t.routes[e.route.id];if(!a)return[];let r=[a.module];return a.clientActionModule&&(r=r.concat(a.clientActionModule)),a.clientLoaderModule&&(r=r.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(r=r.concat(a.hydrateFallbackModule)),a.imports&&(r=r.concat(a.imports)),r}).flat(1),[...new Set(a)];var a}function Xe(e,t){let n=new Set,a=new Set(t);return e.reduce((e,r)=>{if(t&&!Ye(r)&&"script"===r.as&&r.href&&a.has(r.href))return e;let o=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let a of n)t[a]=e[a];return t}(r));return n.has(o)||(n.add(o),e.push({key:o,link:r})),e},[])}function Ze(e,t){return"lazy"===e.mode&&!0===t}function et(){let e=a.useContext(J);return Ke(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function tt(){let e=a.useContext(X);return Ke(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var nt=a.createContext(void 0);function at(){let e=a.useContext(nt);return Ke(e,"You must render this element inside a <HydratedRouter> element"),e}function rt(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ot(e,t,n){if(n&&!ct)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}nt.displayName="FrameworkContext";function it(e){let{page:t,...n}=e,{router:r}=et(),o=a.useMemo(()=>y(r.routes,t,r.basename),[r.routes,t,r.basename]);return o?a.createElement(st,{page:t,matches:o,...n}):null}function lt(e){let{manifest:t,routeModules:n}=at(),[r,o]=a.useState([]);return a.useEffect(()=>{let a=!1;return async function(e,t,n){let a=await Promise.all(e.map(async e=>{let a=t.routes[e.route.id];if(a){let e=await Ve(a,n);return e.links?e.links():[]}return[]}));return Xe(a.flat(1).filter(qe).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{a||o(e)}),()=>{a=!0}},[e,t,n]),r}function st(e){let{page:t,matches:n,...r}=e,o=ue(),{future:i,manifest:l,routeModules:s}=at(),{basename:c}=et(),{loaderData:u,matches:d}=tt(),p=a.useMemo(()=>Qe(t,n,d,l,o,"data"),[t,n,d,l,o]),f=a.useMemo(()=>Qe(t,n,d,l,o,"assets"),[t,n,d,l,o]),m=a.useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let e=new Set,a=!1;if(n.forEach(t=>{let n=l.routes[t.route.id];n&&n.hasLoader&&(!p.some(e=>e.route.id===t.route.id)&&t.route.id in u&&s[t.route.id]?.shouldRevalidate||n.hasClientLoader?a=!0:e.add(t.route.id))}),0===e.size)return[];let r=Ge(t,c,i.unstable_trailingSlashAwareDataRequests,"data");return a&&e.size>0&&r.searchParams.set("_routes",n.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[r.pathname+r.search]},[c,i.unstable_trailingSlashAwareDataRequests,u,o,l,p,n,t,s]),h=a.useMemo(()=>Je(f,l),[f,l]),g=lt(f);return a.createElement(a.Fragment,null,m.map(e=>a.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...r})),h.map(e=>a.createElement("link",{key:e,rel:"modulepreload",href:e,...r})),g.map(e=>{let{key:t,link:n}=e;return a.createElement("link",{key:t,nonce:r.nonce,...n,crossOrigin:n.crossOrigin??r.crossOrigin})}))}var ct=!1;function ut(e){let{manifest:t,serverHandoffString:n,isSpaMode:r,renderMeta:o,routeDiscovery:i,ssr:l}=at(),{router:s,static:c,staticContext:u}=et(),{matches:d}=tt(),p=ee(),f=Ze(i,l);o&&(o.didRenderScripts=!0);let m=ot(d,null,r);a.useEffect(()=>{ct=!0},[]);let h=a.useMemo(()=>{if(p)return null;let r=u?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=c?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${f?"":`import ${JSON.stringify(t.url)}`};\n${m.map((e,n)=>{let a=`route${n}`,r=t.routes[e.route.id];Ke(r,`Route ${e.route.id} not found in manifest`);let{clientActionModule:o,clientLoaderModule:i,clientMiddlewareModule:l,hydrateFallbackModule:s,module:c}=r,u=[...o?[{module:o,varName:`${a}_clientAction`}]:[],...i?[{module:i,varName:`${a}_clientLoader`}]:[],...l?[{module:l,varName:`${a}_clientMiddleware`}]:[],...s?[{module:s,varName:`${a}_HydrateFallback`}]:[],{module:c,varName:`${a}_main`}];return 1===u.length?`import * as ${a} from ${JSON.stringify(c)};`:[u.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${a} = {${u.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${f?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...a}=e,r=new Set(t.state.matches.map(e=>e.route.id)),o=t.state.location.pathname.split("/").filter(Boolean),i=["/"];for(o.pop();o.length>0;)i.push(`/${o.join("/")}`),o.pop();i.forEach(e=>{let n=y(t.routes,e,t.basename);n&&n.forEach(e=>r.add(e.route.id))});let l=[...r].reduce((e,t)=>Object.assign(e,{[t]:a.routes[t]}),{});return{...a,routes:l,sri:!!n||void 0}}(t,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${m.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return a.createElement(a.Fragment,null,a.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:r},type:void 0}),a.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:o},type:"module",async:!0}))},[]),g=ct||p?[]:(b=t.entry.imports.concat(Je(m,t,{includeHydrateFallback:!0})),[...new Set(b)]);var b;let w="object"===typeof t.sri?t.sri:{};return Ne(!p,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),ct||p?null:a.createElement(a.Fragment,null,"object"===typeof t.sri?a.createElement("script",{...e,"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:w})}}):null,f?null:a.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:w[t.url],suppressHydrationWarning:!0}),a.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:w[t.entry.module],suppressHydrationWarning:!0}),g.map(t=>a.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:w[t],suppressHydrationWarning:!0})),h)}function dt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}a.Component;function pt(e){let{error:t,isOutsideRemixApp:n}=e;console.error(t);let r,o=a.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(K(t))return a.createElement(ft,{title:"Unhandled Thrown Response!"},a.createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),o);if(t instanceof Error)r=t;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);r=new Error(e)}return a.createElement(ft,{title:"Application Error!",isOutsideRemixApp:n},a.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),a.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},r.stack),o)}function ft(e){let{title:t,renderScripts:n,isOutsideRemixApp:r,children:o}=e,{routeModules:i}=at();return i.root?.Layout&&!r?o:a.createElement("html",{lang:"en"},a.createElement("head",null,a.createElement("meta",{charSet:"utf-8"}),a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),a.createElement("title",null,t)),a.createElement("body",null,a.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,n?a.createElement(ut,null):null)))}var mt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{mt&&(window.__reactRouterVersion="7.13.2")}catch(Uu){}function ht(e){let{basename:t,children:n,unstable_useTransitions:r,window:o}=e,i=a.useRef();null==i.current&&(i.current=s({window:o,v5Compat:!0}));let l=i.current,[c,u]=a.useState({action:l.action,location:l.location}),d=a.useCallback(e=>{!1===r?u(e):a.startTransition(()=>u(e))},[r]);return a.useLayoutEffect(()=>l.listen(d),[l,d]),a.createElement(Le,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,unstable_useTransitions:r})}var gt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yt=a.forwardRef(function(e,t){let{onClick:n,discover:r="render",prefetch:o="none",relative:i,reloadDocument:l,replace:s,unstable_mask:u,state:d,target:p,to:m,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:y,...b}=e,{basename:w,navigator:x,unstable_useTransitions:v}=a.useContext(re),k="string"===typeof m&&gt.test(m),z=Y(m,w);m=z.to;let j=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(ce(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=a.useContext(re),{hash:o,pathname:i,search:l}=he(e,{relative:t}),s=i;return"/"!==n&&(s="/"===i?n:F([n,i])),r.createHref({pathname:s,search:l,hash:o})}(m,{relative:i}),S=ue(),C=null;if(u){let e=I(u,[],S.unstable_mask?S.unstable_mask.pathname:"/",!0);"/"!==w&&(e.pathname="/"===e.pathname?w:F([w,e.pathname])),C=x.createHref(e)}let[E,P,T]=function(e,t){let n=a.useContext(nt),[r,o]=a.useState(!1),[i,l]=a.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:p}=t,f=a.useRef(null);a.useEffect(()=>{if("render"===e&&l(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{l(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),a.useEffect(()=>{if(r){let e=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(e)}}},[r]);let m=()=>{o(!0)},h=()=>{o(!1),l(!1)};return n?"intent"!==e?[i,f,{}]:[i,f,{onFocus:rt(s,m),onBlur:rt(c,h),onMouseEnter:rt(u,m),onMouseLeave:rt(d,h),onTouchStart:rt(p,m)}]:[!1,f,{}]}(o,b),$=function(e){let{target:t,replace:n,unstable_mask:r,state:o,preventScrollReset:i,relative:l,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:u}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=fe(),p=ue(),m=he(e,{relative:l});return a.useCallback(h=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(h,t)){h.preventDefault();let t=void 0!==n?n:f(p)===f(m),g=()=>d(e,{replace:t,unstable_mask:r,state:o,preventScrollReset:i,relative:l,viewTransition:s,unstable_defaultShouldRevalidate:c});u?a.startTransition(()=>g()):g()}},[p,d,m,n,r,o,t,e,i,l,s,c,u])}(m,{replace:s,unstable_mask:u,state:d,target:p,preventScrollReset:h,relative:i,viewTransition:g,unstable_defaultShouldRevalidate:y,unstable_useTransitions:v});let _=!(z.isExternal||l),N=a.createElement("a",{...b,...T,href:(_?C:void 0)||z.absoluteURL||j,onClick:_?function(e){n&&n(e),e.defaultPrevented||$(e)}:n,ref:dt(t,P),target:p,"data-discover":k||"render"!==r?void 0:"true"});return E&&!k?a.createElement(a.Fragment,null,N,a.createElement(it,{page:j})):N});yt.displayName="Link",a.forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:o="",end:i=!1,style:l,to:s,viewTransition:u,children:d,...p}=e,f=he(s,{relative:p.relative}),m=ue(),h=a.useContext(X),{navigator:g,basename:y}=a.useContext(re),b=null!=h&&function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.useContext(te);c(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=xt("useViewTransitionState"),o=he(e,{relative:t});if(!n.isTransitioning)return!1;let i=O(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=O(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=$(o.pathname,l)||null!=$(o.pathname,i)}(f)&&!0===u,w=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,x=m.pathname,v=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;r||(x=x.toLowerCase(),v=v?v.toLowerCase():null,w=w.toLowerCase()),v&&y&&(v=O(v,y)||v);const k="/"!==w&&w.endsWith("/")?w.length-1:w.length;let z,j=x===w||!i&&x.startsWith(w)&&"/"===x.charAt(k),S=null!=v&&(v===w||!i&&v.startsWith(w)&&"/"===v.charAt(w.length)),C={isActive:j,isPending:S,isTransitioning:b},E=j?n:void 0;z="function"===typeof o?o(C):[o,j?"active":null,S?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let P="function"===typeof l?l(C):l;return a.createElement(yt,{...p,"aria-current":E,className:z,ref:t,style:P,to:s,viewTransition:u},"function"===typeof d?d(C):d)}).displayName="NavLink";var bt=a.forwardRef((e,t)=>{let{discover:n="render",fetcherKey:r,navigate:o,reloadDocument:i,replace:l,state:s,method:u=Ae,action:d,onSubmit:p,relative:m,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:y,...b}=e,{unstable_useTransitions:w}=a.useContext(re),x=zt(),v=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:n}=a.useContext(re),r=a.useContext(ie);c(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),i={...he(e||".",{relative:t})},l=ue();if(null==e){i.search=l.search;let e=new URLSearchParams(i.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();i.search=n?`?${n}`:""}}e&&"."!==e||!o.route.index||(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(i.pathname="/"===i.pathname?n:F([n,i.pathname]));return f(i)}(d,{relative:m}),k="get"===u.toLowerCase()?"get":"post",z="string"===typeof d&&gt.test(d);return a.createElement("form",{ref:t,method:k,action:v,onSubmit:i?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||u,i=()=>x(t||e.currentTarget,{fetcherKey:r,method:n,navigate:o,replace:l,state:s,relative:m,preventScrollReset:h,viewTransition:g,unstable_defaultShouldRevalidate:y});w&&!1!==o?a.startTransition(()=>i()):i()},...b,"data-discover":z||"render"!==n?void 0:"true"})});function wt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xt(e){let t=a.useContext(J);return c(t,wt(e)),t}bt.displayName="Form";var vt=0,kt=()=>`__${String(++vt)}__`;function zt(){let{router:e}=xt("useSubmit"),{basename:t}=a.useContext(re),n=Ee("useRouteId"),r=e.fetch,o=e.navigate;return a.useCallback(async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:l,encType:s,formData:c,body:u}=Be(e,t);if(!1===a.navigate){let e=a.fetcherKey||kt();await r(e,n,a.action||i,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||l,formEncType:a.encType||s,flushSync:a.flushSync})}else await o(a.action||i,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||l,formEncType:a.encType||s,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,o,t,n])}var jt=function(){return jt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},jt.apply(this,arguments)};Object.create;function St(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Ct={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Et="-ms-",Pt="-moz-",Tt="-webkit-",$t="comm",_t="rule",Nt="decl",Ot="@keyframes",Rt=Math.abs,Lt=String.fromCharCode,Mt=Object.assign;function Dt(e){return e.trim()}function At(e,t){return(e=t.exec(e))?e[0]:e}function It(e,t,n){return e.replace(t,n)}function Ft(e,t,n){return e.indexOf(t,n)}function Wt(e,t){return 0|e.charCodeAt(t)}function Ut(e,t,n){return e.slice(t,n)}function Ht(e){return e.length}function Bt(e){return e.length}function Kt(e,t){return t.push(e),e}function Gt(e,t){return e.filter(function(e){return!At(e,t)})}var Vt=1,Yt=1,qt=0,Qt=0,Jt=0,Xt="";function Zt(e,t,n,a,r,o,i,l){return{value:e,root:t,parent:n,type:a,props:r,children:o,line:Vt,column:Yt,length:i,return:"",siblings:l}}function en(e,t){return Mt(Zt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function tn(e){for(;e.root;)e=en(e.root,{children:[e]});Kt(e,e.siblings)}function nn(){return Jt=Qt>0?Wt(Xt,--Qt):0,Yt--,10===Jt&&(Yt=1,Vt--),Jt}function an(){return Jt=Qt<qt?Wt(Xt,Qt++):0,Yt++,10===Jt&&(Yt=1,Vt++),Jt}function rn(){return Wt(Xt,Qt)}function on(){return Qt}function ln(e,t){return Ut(Xt,e,t)}function sn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cn(e){return Vt=Yt=1,qt=Ht(Xt=e),Qt=0,[]}function un(e){return Xt="",e}function dn(e){return Dt(ln(Qt-1,mn(91===e?e+2:40===e?e+1:e)))}function pn(e){for(;(Jt=rn())&&Jt<33;)an();return sn(e)>2||sn(Jt)>3?"":" "}function fn(e,t){for(;--t&&an()&&!(Jt<48||Jt>102||Jt>57&&Jt<65||Jt>70&&Jt<97););return ln(e,on()+(t<6&&32==rn()&&32==an()))}function mn(e){for(;an();)switch(Jt){case e:return Qt;case 34:case 39:34!==e&&39!==e&&mn(Jt);break;case 40:41===e&&mn(e);break;case 92:an()}return Qt}function hn(e,t){for(;an()&&e+Jt!==57&&(e+Jt!==84||47!==rn()););return"/*"+ln(t,Qt-1)+"*"+Lt(47===e?e:an())}function gn(e){for(;!sn(rn());)an();return ln(e,Qt)}function yn(e,t){for(var n="",a=0;a<e.length;a++)n+=t(e[a],a,e,t)||"";return n}function bn(e,t,n,a){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case Nt:return e.return=e.return||e.value;case $t:return"";case Ot:return e.return=e.value+"{"+yn(e.children,a)+"}";case _t:if(!Ht(e.value=e.props.join(",")))return""}return Ht(n=yn(e.children,a))?e.return=e.value+"{"+n+"}":""}function wn(e,t,n){switch(function(e,t){return 45^Wt(e,0)?(((t<<2^Wt(e,0))<<2^Wt(e,1))<<2^Wt(e,2))<<2^Wt(e,3):0}(e,t)){case 5103:return Tt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Tt+e+e;case 4855:return Tt+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Pt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Tt+e+Pt+e+Et+e+e;case 5936:switch(Wt(e,t+11)){case 114:return Tt+e+Et+It(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Tt+e+Et+It(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Tt+e+Et+It(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Tt+e+Et+e+e;case 6165:return Tt+e+Et+"flex-"+e+e;case 5187:return Tt+e+It(e,/(\w+).+(:[^]+)/,Tt+"box-$1$2"+Et+"flex-$1$2")+e;case 5443:return Tt+e+Et+"flex-item-"+It(e,/flex-|-self/g,"")+(At(e,/flex-|baseline/)?"":Et+"grid-row-"+It(e,/flex-|-self/g,""))+e;case 4675:return Tt+e+Et+"flex-line-pack"+It(e,/align-content|flex-|-self/g,"")+e;case 5548:return Tt+e+Et+It(e,"shrink","negative")+e;case 5292:return Tt+e+Et+It(e,"basis","preferred-size")+e;case 6060:return Tt+"box-"+It(e,"-grow","")+Tt+e+Et+It(e,"grow","positive")+e;case 4554:return Tt+It(e,/([^-])(transform)/g,"$1"+Tt+"$2")+e;case 6187:return It(It(It(e,/(zoom-|grab)/,Tt+"$1"),/(image-set)/,Tt+"$1"),e,"")+e;case 5495:case 3959:return It(e,/(image-set\([^]*)/,Tt+"$1$`$1");case 4968:return It(It(e,/(.+:)(flex-)?(.*)/,Tt+"box-pack:$3"+Et+"flex-pack:$3"),/space-between/,"justify")+Tt+e+e;case 4200:if(!At(e,/flex-|baseline/))return Et+"grid-column-align"+Ut(e,t)+e;break;case 2592:case 3360:return Et+It(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,At(e.props,/grid-\w+-end/)})?~Ft(e+(n=n[t].value),"span",0)?e:Et+It(e,"-start","")+e+Et+"grid-row-span:"+(~Ft(n,"span",0)?At(n,/\d+/):+At(n,/\d+/)-+At(e,/\d+/))+";":Et+It(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return At(e.props,/grid-\w+-start/)})?e:Et+It(It(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return It(e,/(.+)-inline(.+)/,Tt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ht(e)-1-t>6)switch(Wt(e,t+1)){case 109:if(45!==Wt(e,t+4))break;case 102:return It(e,/(.+:)(.+)-([^]+)/,"$1"+Tt+"$2-$3$1"+Pt+(108==Wt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ft(e,"stretch",0)?wn(It(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return It(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,a,r,o,i,l){return Et+n+":"+a+l+(r?Et+n+"-span:"+(o?i:+i-+a)+l:"")+e});case 4949:if(121===Wt(e,t+6))return It(e,":",":"+Tt)+e;break;case 6444:switch(Wt(e,45===Wt(e,14)?18:11)){case 120:return It(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Tt+(45===Wt(e,14)?"inline-":"")+"box$3$1"+Tt+"$2$3$1"+Et+"$2box$3")+e;case 100:return It(e,":",":"+Et)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return It(e,"scroll-","scroll-snap-")+e}return e}function xn(e,t,n,a){if(e.length>-1&&!e.return)switch(e.type){case Nt:return void(e.return=wn(e.value,e.length,n));case Ot:return yn([en(e,{value:It(e.value,"@","@"+Tt)})],a);case _t:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(At(t,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tn(en(e,{props:[It(t,/:(read-\w+)/,":-moz-$1")]})),tn(en(e,{props:[t]})),Mt(e,{props:Gt(n,a)});break;case"::placeholder":tn(en(e,{props:[It(t,/:(plac\w+)/,":"+Tt+"input-$1")]})),tn(en(e,{props:[It(t,/:(plac\w+)/,":-moz-$1")]})),tn(en(e,{props:[It(t,/:(plac\w+)/,Et+"input-$1")]})),tn(en(e,{props:[t]})),Mt(e,{props:Gt(n,a)})}return""})}}function vn(e){return un(kn("",null,null,null,[""],e=cn(e),0,[0],e))}function kn(e,t,n,a,r,o,i,l,s){for(var c=0,u=0,d=i,p=0,f=0,m=0,h=1,g=1,y=1,b=0,w="",x=r,v=o,k=a,z=w;g;)switch(m=b,b=an()){case 40:if(108!=m&&58==Wt(z,d-1)){-1!=Ft(z+=It(dn(b),"&","&\f"),"&\f",Rt(c?l[c-1]:0))&&(y=-1);break}case 34:case 39:case 91:z+=dn(b);break;case 9:case 10:case 13:case 32:z+=pn(m);break;case 92:z+=fn(on()-1,7);continue;case 47:switch(rn()){case 42:case 47:Kt(jn(hn(an(),on()),t,n,s),s),5!=sn(m||1)&&5!=sn(rn()||1)||!Ht(z)||" "===Ut(z,-1,void 0)||(z+=" ");break;default:z+="/"}break;case 123*h:l[c++]=Ht(z)*y;case 125*h:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+u:-1==y&&(z=It(z,/\f/g,"")),f>0&&(Ht(z)-d||0===h&&47===m)&&Kt(f>32?Sn(z+";",a,n,d-1,s):Sn(It(z," ","")+";",a,n,d-2,s),s);break;case 59:z+=";";default:if(Kt(k=zn(z,t,n,c,u,r,l,w,x=[],v=[],d,o),o),123===b)if(0===u)kn(z,t,k,k,x,o,d,l,v);else{switch(p){case 99:if(110===Wt(z,3))break;case 108:if(97===Wt(z,2))break;default:u=0;case 100:case 109:case 115:}u?kn(e,k,k,a&&Kt(zn(e,k,k,0,0,r,l,w,r,x=[],d,v),v),r,v,d,l,a?x:v):kn(z,k,k,k,[""],v,0,l,v)}}c=u=f=0,h=y=1,w=z="",d=i;break;case 58:d=1+Ht(z),f=m;default:if(h<1)if(123==b)--h;else if(125==b&&0==h++&&125==nn())continue;switch(z+=Lt(b),b*h){case 38:y=u>0?1:(z+="\f",-1);break;case 44:l[c++]=(Ht(z)-1)*y,y=1;break;case 64:45===rn()&&(z+=dn(an())),p=rn(),u=d=Ht(w=z+=gn(on())),b++;break;case 45:45===m&&2==Ht(z)&&(h=0)}}return o}function zn(e,t,n,a,r,o,i,l,s,c,u,d){for(var p=r-1,f=0===r?o:[""],m=Bt(f),h=0,g=0,y=0;h<a;++h)for(var b=0,w=Ut(e,p+1,p=Rt(g=i[h])),x=e;b<m;++b)(x=Dt(g>0?f[b]+" "+w:It(w,/&\f/g,f[b])))&&(s[y++]=x);return Zt(e,t,n,0===r?_t:l,s,c,u,d)}function jn(e,t,n,a){return Zt(e,t,n,$t,Lt(Jt),Ut(e,2,-2),0,a)}function Sn(e,t,n,a,r){return Zt(e,t,n,Nt,Ut(e,0,a),Ut(e,a+1,-1),a,r)}var Cn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",En="active",Pn="data-styled-version",Tn="6.3.12",$n="/*!sc*/\n",_n="undefined"!=typeof window&&"undefined"!=typeof document,Nn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/klara-queen",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),On={};function Rn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ln=new Map,Mn=new Map,Dn=1,An=function(e){if(Ln.has(e))return Ln.get(e);for(;Mn.has(Dn);)Dn++;var t=Dn++;return Ln.set(e,t),Mn.set(t,e),t},In=function(e,t){Dn=t+1,Ln.set(e,t),Mn.set(t,e)},Fn=(new Set,Object.freeze([])),Wn=Object.freeze({});function Un(e,t,n){return void 0===n&&(n=Wn),e.theme!==n.theme&&e.theme||t||n.theme}var Hn=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Bn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kn=/(^-|-$)/g;function Gn(e){return e.replace(Bn,"-").replace(Kn,"")}var Vn=/(a)(d)/gi,Yn=function(e){return String.fromCharCode(e+(e>25?39:97))};function qn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Yn(t%52)+n;return(Yn(t%52)+n).replace(Vn,"$1-$2")}var Qn,Jn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Xn=function(e){return Jn(5381,e)};function Zn(e){return qn(Xn(e)>>>0)}function ea(e){return e.displayName||e.name||"Component"}function ta(e){return"string"==typeof e&&!0}var na="function"==typeof Symbol&&Symbol.for,aa=na?Symbol.for("react.memo"):60115,ra=na?Symbol.for("react.forward_ref"):60112,oa={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ia={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},la={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sa=((Qn={})[ra]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qn[aa]=la,Qn);function ca(e){return("type"in(t=e)&&t.type.$$typeof)===aa?la:"$$typeof"in e?sa[e.$$typeof]:oa;var t}var ua=Object.defineProperty,da=Object.getOwnPropertyNames,pa=Object.getOwnPropertySymbols,fa=Object.getOwnPropertyDescriptor,ma=Object.getPrototypeOf,ha=Object.prototype;function ga(e,t,n){if("string"!=typeof t){if(ha){var a=ma(t);a&&a!==ha&&ga(e,a,n)}var r=da(t);pa&&(r=r.concat(pa(t)));for(var o=ca(e),i=ca(t),l=0;l<r.length;++l){var s=r[l];if(!(s in ia||n&&n[s]||i&&s in i||o&&s in o)){var c=fa(t,s);try{ua(e,s,c)}catch(e){}}}}return e}function ya(e){return"function"==typeof e}function ba(e){return"object"==typeof e&&"styledComponentId"in e}function wa(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function xa(e,t){return e.join(t||"")}function va(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ka(e,t,n){if(void 0===n&&(n=!1),!n&&!va(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)e[a]=ka(e[a],t[a]);else if(va(t))for(var a in t)e[a]=ka(e[a],t[a]);return e}function za(e,t){Object.defineProperty(e,"toString",{value:t})}var ja=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,a=n.length,r=a;e>=r;)if((r<<=1)<0)throw Rn(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var o=a;o<r;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=0,s=(o=0,t.length);o<s;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++,l++);l>0&&this._cGroup>e&&(this._cIndex+=l)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),a=n+t;this.groupSizes[e]=0;for(var r=n;r<a;r++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],a=this.indexOfGroup(e),r=a+n,o=a;o<r;o++)t+=this.tag.getRule(o)+$n;return t},e}(),Sa="style[".concat(Cn,"][").concat(Pn,'="').concat(Tn,'"]'),Ca=new RegExp("^".concat(Cn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ea=function(e){return"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},Pa=function(e){if(!e)return document;if(Ea(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Ea(t))return t}return document},Ta=function(e,t,n){for(var a,r=n.split(","),o=0,i=r.length;o<i;o++)(a=r[o])&&e.registerName(t,a)},$a=function(e,t){for(var n,a=(null!==(n=t.textContent)&&void 0!==n?n:"").split($n),r=[],o=0,i=a.length;o<i;o++){var l=a[o].trim();if(l){var s=l.match(Ca);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(In(u,c),Ta(e,u,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(l)}}},_a=function(e){for(var t=Pa(e.options.target).querySelectorAll(Sa),n=0,a=t.length;n<a;n++){var r=t[n];r&&r.getAttribute(Cn)!==En&&($a(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function Na(){return n.nc}var Oa=function(e){var t=document.head,n=e||t,a=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Cn,"]")));return t[t.length-1]}(n),o=void 0!==r?r.nextSibling:null;a.setAttribute(Cn,En),a.setAttribute(Pn,Tn);var i=Na();return i&&a.setAttribute("nonce",i),n.insertBefore(a,o),a},Ra=function(){function e(e){this.element=Oa(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets,a=0,r=n.length;a<r;a++){var o=n[a];if(o.ownerNode===e)return o}throw Rn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),La=function(){function e(e){this.element=Oa(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Ma=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Da=_n,Aa={isServer:!_n,useCSSOMInjection:!Nn},Ia=function(){function e(e,t,n){void 0===e&&(e=Wn),void 0===t&&(t={});var a=this;this.options=jt(jt({},Aa),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&_n&&Da&&(Da=!1,_a(this)),za(this,function(){return function(e){for(var t=e.getTag(),n=t.length,a="",r=function(n){var r=function(e){return Mn.get(e)}(n);if(void 0===r)return"continue";var o=e.names.get(r);if(void 0===o||!o.size)return"continue";var i=t.getGroup(n);if(0===i.length)return"continue";var l=Cn+".g"+n+'[id="'+r+'"]',s="";o.forEach(function(e){e.length>0&&(s+=e+",")}),a+=i+l+'{content:"'+s+'"}'+$n},o=0;o<n;o++)r(o);return a}(a)})}return e.registerId=function(e){return An(e)},e.prototype.rehydrate=function(){!this.server&&_n&&_a(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var a=new e(jt(jt({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&_n&&t.target!==this.options.target&&Pa(this.options.target)!==Pa(t.target)&&_a(a),a},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Ma(n):t?new Ra(n):new La(n)}(this.options),new ja(e)));var e},e.prototype.hasNameForId=function(e,t){var n,a;return null!==(a=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==a&&a},e.prototype.registerName=function(e,t){An(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(An(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(An(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}();function Fa(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in Ct||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Wa=function(e){return e>="A"&&e<="Z"};function Ua(e){for(var t="",n=0;n<e.length;n++){var a=e[n];if(1===n&&"-"===a&&"-"===e[0])return e;Wa(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var Ha=Symbol.for("sc-keyframes");var Ba=function(e){return null==e||!1===e||""===e},Ka=function(e){var t=[];for(var n in e){var a=e[n];e.hasOwnProperty(n)&&!Ba(a)&&(Array.isArray(a)&&a.isCss||ya(a)?t.push("".concat(Ua(n),":"),a,";"):va(a)?t.push.apply(t,St(St(["".concat(n," {")],Ka(a),!1),["}"],!1)):t.push("".concat(Ua(n),": ").concat(Fa(n,a),";")))}return t};function Ga(e,t,n,a,r){if(void 0===r&&(r=[]),"string"==typeof e)return e&&r.push(e),r;if(Ba(e))return r;if(ba(e))return r.push(".".concat(e.styledComponentId)),r;var o;if(ya(e))return!ya(o=e)||o.prototype&&o.prototype.isReactComponent||!t?(r.push(e),r):Ga(e(t),t,n,a,r);if(function(e){return"object"==typeof e&&null!==e&&Ha in e}(e))return n?(e.inject(n,a),r.push(e.getName(a))):r.push(e),r;if(va(e)){for(var i=Ka(e),l=0;l<i.length;l++)r.push(i[l]);return r}if(!Array.isArray(e))return r.push(e.toString()),r;for(l=0;l<e.length;l++)Ga(e[l],t,n,a,r);return r}function Va(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ya(n)&&!ba(n))return!1}return!0}var Ya=Xn(Tn),qa=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Va(e),this.componentId=t,this.baseHash=Jn(Ya,t),this.baseStyle=n,Ia.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=wa(a,this.staticRulesId);else{var r=xa(Ga(this.rules,e,t,n)),o=qn(Jn(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(r,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}a=wa(a,o),this.staticRulesId=o}else{for(var l=Jn(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=xa(Ga(u,e,t,n));l=Jn(Jn(l,String(c)),d),s+=d}}if(s){var p=qn(l>>>0);if(!t.hasNameForId(this.componentId,p)){var f=n(s,".".concat(p),void 0,this.componentId);t.insertRules(this.componentId,p,f)}a=wa(a,p)}}return{className:a,css:"undefined"==typeof window?t.getTag().getGroup(An(this.componentId)):""}},e}(),Qa=/&/g,Ja=47,Xa=42;function Za(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,a=0,r=!1,o=0;o<t;o++){var i=e.charCodeAt(o);if(0!==a||r||i!==Ja||e.charCodeAt(o+1)!==Xa)if(r)i===Xa&&e.charCodeAt(o+1)===Ja&&(r=!1,o++);else if(34!==i&&39!==i||0!==o&&92===e.charCodeAt(o-1)){if(0===a)if(123===i)n++;else if(125===i&&--n<0)return!0}else 0===a?a=i:a===i&&(a=0);else r=!0,o++}return 0!==n||0!==a}function er(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=er(e.children,t)),e})}function tr(e){var t,n,a,r=void 0===e?Wn:e,o=r.options,i=void 0===o?Wn:o,l=r.plugins,s=void 0===l?Fn:l,c=function(e,a,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push(function(e){e.type===_t&&e.value.includes("&")&&(a||(a=new RegExp("\\".concat(n,"\\b"),"g")),e.props[0]=e.props[0].replace(Qa,n).replace(a,c))}),i.prefix&&u.push(xn),u.push(bn);var d,p=[],f=function(e){var t=Bt(e);return function(n,a,r,o){for(var i="",l=0;l<t;l++)i+=e[l](n,a,r,o)||"";return i}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)}))),m=function(e,r,o,l){void 0===r&&(r=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=r,a=void 0;var s=function(e){if(!Za(e))return e;for(var t=e.length,n="",a=0,r=0,o=0,i=!1,l=0;l<t;l++){var s=e.charCodeAt(l);if(0!==o||i||s!==Ja||e.charCodeAt(l+1)!==Xa)if(i)s===Xa&&e.charCodeAt(l+1)===Ja&&(i=!1,l++);else if(34!==s&&39!==s||0!==l&&92===e.charCodeAt(l-1)){if(0===o)if(123===s)r++;else if(125===s){if(--r<0){for(var c=l+1;c<t;){var u=e.charCodeAt(c);if(59===u||10===u)break;c++}c<t&&59===e.charCodeAt(c)&&c++,r=0,l=c-1,a=c;continue}0===r&&(n+=e.substring(a,l+1),a=l+1)}else 59===s&&0===r&&(n+=e.substring(a,l+1),a=l+1)}else 0===o?o=s:o===s&&(o=0);else i=!0,l++}if(a<t){var d=e.substring(a);Za(d)||(n+=d)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],a=0,r=0,o=0,i=0;r<t;){var l=e.charCodeAt(r);if(34!==l&&39!==l||0!==r&&92===e.charCodeAt(r-1))if(0===o)if(l===Ja&&r+1<t&&e.charCodeAt(r+1)===Xa){for(r+=2;r+1<t&&(e.charCodeAt(r)!==Xa||e.charCodeAt(r+1)!==Ja);)r++;r+=2}else if(40===l&&r>=3&&108==(32|e.charCodeAt(r-1))&&114==(32|e.charCodeAt(r-2))&&117==(32|e.charCodeAt(r-3)))i=1,r++;else if(i>0)41===l?i--:40===l&&i++,r++;else if(l===Xa&&r+1<t&&e.charCodeAt(r+1)===Ja)r>a&&n.push(e.substring(a,r)),a=r+=2;else if(l===Ja&&r+1<t&&e.charCodeAt(r+1)===Ja){for(r>a&&n.push(e.substring(a,r));r<t&&10!==e.charCodeAt(r);)r++;a=r}else r++;else r++;else 0===o?o=l:o===l&&(o=0),r++}return 0===a?e:(a<t&&n.push(e.substring(a)),n.join(""))}(e)),c=vn(o||r?"".concat(o," ").concat(r," { ").concat(s," }"):s);return i.namespace&&(c=er(c,i.namespace)),p=[],yn(c,f),p};return m.hash=s.length?s.reduce(function(e,t){return t.name||Rn(15),Jn(e,t.name)},5381).toString():"",m}var nr=new Ia,ar=tr(),rr=a.createContext({shouldForwardProp:void 0,styleSheet:nr,stylis:ar}),or=(rr.Consumer,a.createContext(void 0));function ir(){return a.useContext(rr)}function lr(e){if(!a.useMemo)return e.children;var t=ir().styleSheet,n=a.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),r=a.useMemo(function(){return tr({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),o=a.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:r}},[e.shouldForwardProp,n,r]);return a.createElement(rr.Provider,{value:o},a.createElement(or.Provider,{value:r},e.children))}var sr=a.createContext(void 0);sr.Consumer;var cr={};new Set;function ur(e,t,n){var r=ba(e),o=e,i=!ta(e),l=t.attrs,s=void 0===l?Fn:l,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Gn(e);cr[n]=(cr[n]||0)+1;var a="".concat(n,"-").concat(Zn(Tn+n+cr[n]));return t?"".concat(t,"-").concat(a):a}(t.displayName,t.parentComponentId):c,d=t.displayName,p=void 0===d?function(e){return ta(e)?"styled.".concat(e):"Styled(".concat(ea(e),")")}(e):d,f=t.displayName&&t.componentId?"".concat(Gn(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,h=t.shouldForwardProp;if(r&&o.shouldForwardProp){var g=o.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;h=function(e,t){return g(e,t)&&y(e,t)}}else h=g}var b=new qa(n,f,r?o.componentStyle:void 0);function w(e,t){return function(e,t,n){var r=e.attrs,o=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=a.useContext(sr),d=ir(),p=e.shouldForwardProp||d.shouldForwardProp,f=Un(t,u,i)||Wn,m=function(e,t,n){for(var a,r=jt(jt({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=ya(a=e[o])?a(r):a;for(var l in i)"className"===l?r.className=wa(r.className,i[l]):"style"===l?r.style=jt(jt({},r.style),i[l]):l in t&&void 0===t[l]||(r[l]=i[l])}return"className"in t&&"string"==typeof t.className&&(r.className=wa(r.className,t.className)),r}(r,t,f),h=m.as||c,g={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y&&m.theme===f||("forwardedAs"===y?g.as=m.forwardedAs:p&&!p(y,h)||(g[y]=m[y]));var b=function(e,t){var n=ir();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,m),w=b.className,x=wa(l,s);return w&&(x+=" "+w),m.className&&(x+=" "+m.className),g[ta(h)&&!Hn.has(h)?"class":"className"]=x,n&&(g.ref=n),(0,a.createElement)(h,g)}(x,e,t)}w.displayName=p;var x=a.forwardRef(w);return x.attrs=m,x.componentStyle=b,x.displayName=p,x.shouldForwardProp=h,x.foldedComponentIds=r?wa(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=f,x.target=r?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var a=0,r=t;a<r.length;a++)ka(e,r[a],!0);return e}({},o.defaultProps,e):e}}),za(x,function(){return".".concat(x.styledComponentId)}),i&&ga(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function dr(e,t){for(var n=[e[0]],a=0,r=t.length;a<r;a+=1)n.push(t[a],e[a+1]);return n}var pr=function(e){return Object.assign(e,{isCss:!0})};function fr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ya(e)||va(e))return pr(Ga(dr(Fn,St([e],t,!0))));var a=e;return 0===t.length&&1===a.length&&"string"==typeof a[0]?Ga(a):pr(Ga(dr(a,t)))}function mr(e,t,n){if(void 0===n&&(n=Wn),!t)throw Rn(1,t);var a=function(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return e(t,n,fr.apply(void 0,St([a],r,!1)))};return a.attrs=function(a){return mr(e,t,jt(jt({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},a.withConfig=function(a){return mr(e,t,jt(jt({},n),a))},a}var hr=function(e){return mr(ur,e)},gr=hr;Hn.forEach(function(e){gr[e]=hr(e)});var yr,br=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Va(e),Ia.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,a){var r=a(xa(Ga(this.rules,t,n,a)),""),o=this.componentId+e;n.insertRules(o,o,r)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,a){e>2&&Ia.registerId(this.componentId+e);var r=this.componentId+e;this.isStatic?n.hasNameForId(r,r)||this.createStyles(e,t,n,a):(this.removeStyles(e,n),this.createStyles(e,t,n,a))},e}();!function(){function e(e,t){var n=this;this[yr]=!0,this.inject=function(e,t){void 0===t&&(t=ar);var a=n.name+t.hash;e.hasNameForId(n.id,a)||e.insertRules(n.id,a,t(n.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,za(this,function(){throw Rn(12,String(n.name))})}e.prototype.getName=function(e){return void 0===e&&(e=ar),this.name+e.hash}}();yr=Ha;(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Na(),a=xa([n&&'nonce="'.concat(n,'"'),"".concat(Cn,'="true"'),"".concat(Pn,'="').concat(Tn,'"')].filter(Boolean)," ");return"<style ".concat(a,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Rn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Rn(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[Cn]="",t[Pn]=Tn,t.dangerouslySetInnerHTML={__html:n},t),o=Na();return o&&(r.nonce=o),[a.createElement("style",jt({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Ia({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Rn(2);return a.createElement(lr,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Rn(3)}})(),"__sc-".concat(Cn,"__");const wr={smallPhone:360,phone:430,tablet:820,desktopHd:1920,tv4k:3840},xr={bordoAccent:"#9e1e36",bordoAccentDark:"#6a1426",bordoCore:"#4a1020",deepBlack:"#2e0810",outerSpace:"#2e0810",white:"#ffffff",goldMain:"#d4af37",goldHover:"#f1d592",goldSoft18:"rgba(212, 175, 55, 0.18)",goldSoft10:"rgba(180, 140, 30, 0.1)",goldSoft08:"rgba(212, 175, 55, 0.08)",goldSoft025:"rgba(212, 175, 55, 0.025)"},vr={main:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'},kr=gr.div`
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
      ${xr.bordoAccent} 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      ${xr.bordoAccentDark} 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 50% 50%,
      ${xr.bordoCore} 0%,
      ${xr.deepBlack} 100%
    );

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 70% 0%,
        ${xr.goldSoft18} 0%,
        transparent 45%
      ),
      radial-gradient(
        ellipse at 100% 50%,
        ${xr.goldSoft10} 0%,
        transparent 40%
      ),
      radial-gradient(
        ellipse at 30% 100%,
        ${xr.goldSoft08} 0%,
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
      ${xr.goldSoft025} 80px,
      ${xr.goldSoft025} 81px
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
  padding: 0 60px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
  z-index: 1000;

  @media (max-width: ${wr.desktopHd}px) {
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

  @media (max-width: ${wr.tablet}px) {
    padding: 6px 12px;
  }

  @media (max-width: ${wr.phone}px) {
    min-height: 60px;
    column-gap: 8px;
    padding: 6px 10px;
  }
`,Cr=gr.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 821px) {
    grid-area: left;
    flex: none;
    min-width: 0;
  }
`,Er=gr.div`
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
`,Pr=gr.div`
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
`,Tr=gr.div`
  display: flex;

  @media (max-width: 629px) {
    display: none;
  }
`,$r=gr.button`
  display: none;
  border: 1px solid rgba(241, 213, 146, 0.38);
  background: rgba(34, 10, 16, 0.72);
  color: ${xr.goldHover};
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

  @media (max-width: 629px) {
    top: 72px;
    display: block;
  }
`,Nr=gr.aside`
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
`,Or=gr.div`
  margin-top: 14px;
  padding-top: 12px;
  display: flex;
  justify-content: center;
  padding-left: 0;
  border-top: 1px solid rgba(241, 213, 146, 0.18);

  & > div {
    justify-content: center;
  }
`,Rr={src:n.p+"static/media/znak-wodny.5040197ae93bea0121d6.png",alt:"Logo Klara Queen",name:"Klara Queen",ariaLabel:"Strona g\u0142\xf3wna Klara Queen"},Lr=gr(yt)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`,Mr=gr.img.attrs({src:Rr.src,alt:Rr.alt})`
  height: 90px;
  width: auto;
  cursor: pointer;
  filter: brightness(3) contrast(1.2) saturate(1.1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.34))
    drop-shadow(0 0 8px ${xr.goldMain})
    drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18));
  transition:
    transform 0.3s ease,
    filter 0.3s ease;

  @media (max-width: ${wr.tablet}px) {
    height: 72px;
  }

  @media (max-width: ${wr.phone}px) {
    height: 58px;
  }

  &:hover {
    transform: scale(1.05);
    filter: brightness(3) contrast(1.2) saturate(1.1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${xr.goldMain})
      drop-shadow(0 0 16px ${xr.goldHover});
  }
`;const Dr=function(){return(0,zr.jsx)(Lr,{to:"/","aria-label":Rr.ariaLabel,children:(0,zr.jsx)(Mr,{})})},Ar=gr.ul`
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

  @media (max-width: ${wr.phone}px) {
    gap: 4px 8px;
  }
`,Ir=gr.li`
  flex-shrink: 1;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: ${e=>(e.$vertical,"center")};
  gap: 0;
  width: auto;
  color: ${xr.goldHover};
  font-family: ${vr.main};
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

  @media (max-width: ${wr.phone}px) {
    letter-spacing: ${e=>e.$vertical?"0.9px":"0.7px"};
    font-size: ${e=>e.$vertical?"0.84rem":"0.64rem"};
    padding: ${e=>e.$vertical?"1px 0":"4px 6px"};
  }

  &:hover {
    color: ${xr.white};
    transform: translateY(-1px);
    border-color: ${e=>e.$vertical?"transparent":"rgba(241, 213, 146, 0.48)"};
    background: ${e=>e.$vertical?"transparent":"linear-gradient(180deg, rgba(255, 245, 214, 0.08) 0%, rgba(44, 12, 22, 0.28) 100%)"};
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${xr.goldMain},
      0 0 18px ${xr.goldHover};
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
`;var Wr={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ur=a.createContext&&a.createContext(Wr),Hr=["attr","size","title"];function Br(){return Br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Br.apply(null,arguments)}function Kr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Gr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Kr(Object(n),!0).forEach(function(t){Vr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Vr(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yr(e){return e&&e.map((e,t)=>a.createElement(e.tag,Gr({key:t},e.attr),Yr(e.child)))}function qr(e){return t=>a.createElement(Qr,Br({attr:Gr({},e.attr)},t),Yr(e.child))}function Qr(e){var t=t=>{var n,{attr:r,size:o,title:i}=e,l=function(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,Hr),s=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",Br({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:n,style:Gr(Gr({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==Ur?a.createElement(Ur.Consumer,null,e=>t(e)):t(Wr)}function Jr(e){return qr({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Xr(e){return qr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function Zr(e){return qr({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function eo(e){return qr({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(e)}function to(e){return qr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}const no=[{id:1,icon:function(e){return qr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)},url:"https://youtube.com",label:"YouTube"},{id:2,icon:function(e){return qr({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)},url:"https://facebook.com",label:"Facebook"},{id:3,icon:function(e){return qr({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(e)},url:"https://allegro.pl",label:"Allegro"}],ao={labels:[{name:"Oferta",to:"/offer"},{name:"Aktualno\u015bci",to:"/blog"},{name:"Wsp\xf3\u0142praca",to:"/cooperation"},{name:"Najcz\u0119stsze pytania",to:"/questions"},{name:"O Nas",to:"/about"}],socials:no,aria:{closeLabel:"Zamknij menu",openLabel:"Otw\xf3rz menu"}};const ro=function(e){let{vertical:t=!1,onItemClick:n}=e;const a=()=>{n&&n()};return(0,zr.jsx)(Ar,{$vertical:t,children:ao.labels.map((e,n)=>(0,zr.jsx)(Ir,{$vertical:t,onClick:a,children:e.to?(0,zr.jsx)(Fr,{as:yt,to:e.to,children:e.name}):(0,zr.jsx)(Fr,{href:e.url,children:e.name})},`${e.name}-${n}`))})},oo=gr.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: ${wr.tablet}px) {
    gap: 14px;
  }

  @media (max-width: ${wr.phone}px) {
    gap: 12px;
  }
`,io=gr.a`
  color: ${xr.goldHover};
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

  @media (max-width: ${wr.tablet}px) {
    font-size: 1.18rem;
  }

  @media (max-width: ${wr.phone}px) {
    font-size: 1.08rem;
  }

  &:hover {
    color: ${xr.white};
    transform: translateY(-2px) scale(1.04);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${xr.goldMain})
      drop-shadow(0 0 16px ${xr.goldHover});
  }
`;const lo=function(){return(0,zr.jsx)(oo,{children:ao.socials.map(e=>{const t=e.icon;return(0,zr.jsx)(io,{href:e.url,target:"_blank",rel:"noreferrer","aria-label":e.label,children:(0,zr.jsx)(t,{title:e.label})},e.id)})})};const so=function(){const[e,t]=(0,a.useState)(!1),n=()=>{t(!1)};return(0,zr.jsxs)(zr.Fragment,{children:[(0,zr.jsxs)(Sr,{children:[(0,zr.jsx)(Cr,{children:(0,zr.jsx)(Dr,{})}),(0,zr.jsx)(Er,{children:(0,zr.jsx)(ro,{})}),(0,zr.jsxs)(Pr,{children:[(0,zr.jsx)(Tr,{children:(0,zr.jsx)(lo,{})}),(0,zr.jsx)($r,{type:"button",onClick:()=>{t(e=>!e)},"aria-label":e?ao.aria.closeLabel:ao.aria.openLabel,"aria-expanded":e,children:e?(0,zr.jsx)(Jr,{}):(0,zr.jsx)(to,{})})]})]}),(0,zr.jsx)(_r,{$open:e,onClick:n}),(0,zr.jsxs)(Nr,{$open:e,children:[(0,zr.jsx)(ro,{vertical:!0,onItemClick:n}),(0,zr.jsx)(Or,{children:(0,zr.jsx)(lo,{})})]})]})},co=gr.footer`
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

  @media (max-width: ${wr.desktopHd}px) {
    padding: 55px 45px 22px;
  }

  @media (max-width: ${wr.tablet}px) {
    padding: 45px 18px 18px;
  }

  @media (max-width: 821px) {
    padding: 30px 12px 12px;
  }

  @media (max-width: ${wr.smallPhone}px) {
    padding: 25px 10px 10px;
  }
`,uo=gr.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 50px;
  width: 100%;

  @media (max-width: ${wr.tablet}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }

  @media (max-width: 821px) {
    gap: 12px;
  }

  @media (max-width: ${wr.phone}px) {
    gap: 12px;
  }

  @media (max-width: ${wr.smallPhone}px) {
    gap: 10px;
  }
`,po="kontakt@studioklara.pl",fo={brand:{name:"Klara Queen",slogan:"Digital Excellence",description:"Tworzymy luksusowe do\u015bwiadczenia cyfrowe, kt\xf3re definiuj\u0105 now\u0105 jako\u015b\u0107 Twojej marki w sieci."},links:[{name:"Start",to:"/"},{name:"Oferta",to:"/offer"},{name:"Aktualno\u015bci",to:"/blog"},{name:"Wsp\xf3\u0142praca",to:"/cooperation"},{name:"Opinie",url:"#opinions"},{name:"O Nas",to:"/about"},{name:"Najcz\u0119stsze pytania",to:"/questions"}],socials:no,contact:{email:po,copy:`\xa9 ${(new Date).getFullYear()} Klara Queen. Wszystkie prawa zastrze\u017cone.`}},mo=gr.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: ${wr.tablet}px) {
    align-items: center;
  }
`,ho=gr.div`
  display: flex;
  align-items: center;
  margin-top: -56px;

  @media (max-width: ${wr.desktopHd}px) {
    margin-top: -50px;
  }

  @media (max-width: ${wr.tablet}px) {
    margin-top: -36px;
  }

  @media (max-width: ${wr.smallPhone}px) {
    margin-top: -28px;
  }
`,go=gr.img`
  height: 180px;
  width: auto;
  cursor: pointer;
  filter: brightness(2.8) contrast(1.1) saturate(1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.3))
    drop-shadow(0 0 6px ${xr.goldMain})
    drop-shadow(0 1px 4px rgba(0, 0, 0, 0.15));
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    filter: brightness(2.8) contrast(1.1) saturate(1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.4))
      drop-shadow(0 0 8px ${xr.goldMain})
      drop-shadow(0 0 12px ${xr.goldHover});
  }

  @media (max-width: ${wr.desktopHd}px) {
    height: 168px;
  }

  @media (max-width: ${wr.tablet}px) {
    height: 140px;
  }

  @media (max-width: ${wr.smallPhone}px) {
    height: 120px;
  }
`,yo=gr.p`
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

  @media (max-width: ${wr.tablet}px) {
    font-size: 0.78rem;
    line-height: 1.5;
    max-width: 500px;
  }

  @media (max-width: ${wr.smallPhone}px) {
    font-size: 0.72rem;
    line-height: 1.4;
  }
`;const bo=function(e){let{data:t}=e;return(0,zr.jsxs)(mo,{children:[(0,zr.jsx)(ho,{children:(0,zr.jsx)(go,{src:Rr.src,alt:Rr.alt})}),(0,zr.jsx)(yo,{children:t.description})]})},wo=fr`
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
    background: ${xr.goldMain};
    transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${xr.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 16px rgba(212, 175, 55, 0.45);

    &::before {
      width: 100%;
    }
  }

  @media (max-width: ${wr.tablet}px) {
    font-size: 0.76rem;
  }

  @media (max-width: ${wr.smallPhone}px) {
    font-size: 0.7rem;
  }
`,xo=gr.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${wr.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${wr.smallPhone}px) {
    gap: 10px;
  }
`,vo=gr.h4`
  color: ${xr.goldHover};
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

  @media (max-width: ${wr.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${wr.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,ko=gr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;

  @media (max-width: ${wr.tablet}px) {
    grid-template-columns: 1fr;
    gap: 12px;
    place-items: center;
  }

  @media (max-width: ${wr.phone}px) {
    gap: 8px;
    place-items: center;
  }

  @media (max-width: ${wr.smallPhone}px) {
    gap: 6px;
  }
`,zo=gr.a`
  ${wo}
`,jo=gr(yt)`
  ${wo}
`;const So=function(e){let{data:t}=e;return(0,zr.jsxs)(xo,{children:[(0,zr.jsx)(vo,{children:"Nawigacja"}),(0,zr.jsx)(ko,{children:t.map((e,t)=>e.to?(0,zr.jsx)(jo,{to:e.to,children:e.name},t):(0,zr.jsx)(zo,{href:e.url,children:e.name},t))})]})},Co=gr.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${wr.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${wr.smallPhone}px) {
    gap: 10px;
  }
`,Eo=gr.h4`
  color: ${xr.goldHover};
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

  @media (max-width: ${wr.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${wr.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,Po=gr.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: ${wr.tablet}px) {
    justify-content: center;
    gap: 16px;
  }

  @media (max-width: ${wr.smallPhone}px) {
    gap: 12px;
  }
`,To=gr.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${xr.white};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  opacity: 0.8;

  svg {
    font-size: 1.6rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.15));
    color: ${xr.goldMain};
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
    color: ${xr.white};

    svg {
      transform: scale(1.12);
      color: ${xr.goldHover};
      filter: drop-shadow(0 6px 12px rgba(212, 175, 55, 0.3));
    }

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: ${wr.tablet}px) {
    gap: 6px;

    svg {
      font-size: 1.4rem;
    }
  }

  @media (max-width: ${wr.smallPhone}px) {
    gap: 5px;

    svg {
      font-size: 1.2rem;
    }
  }
`,$o=gr.span`
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: ${xr.white};
  opacity: 0.75;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: "Cormorant Garamond", serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: ${wr.tablet}px) {
    font-size: 0.58rem;
    letter-spacing: 1px;
  }

  @media (max-width: ${wr.smallPhone}px) {
    font-size: 0.54rem;
  }
`;const _o=function(e){let{data:t}=e;return(0,zr.jsxs)(Co,{children:[(0,zr.jsx)(Eo,{children:"Nasze Kana\u0142y"}),(0,zr.jsx)(Po,{children:t.map(e=>(0,zr.jsxs)(To,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,zr.jsx)(e.icon,{}),(0,zr.jsx)($o,{children:e.label})]},e.id))})]})},No=gr.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px 0;
  border-top: 1px solid rgba(212, 175, 55, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: ${wr.tablet}px) {
    flex-direction: column-reverse;
    gap: 12px;
    margin: 30px auto 0;
    padding: 15px 0;
    text-align: center;
    align-items: center;
  }

  @media (max-width: ${wr.smallPhone}px) {
    margin: 20px auto 0;
    padding: 12px 0;
    gap: 10px;
  }
`,Oo=gr.span`
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

  @media (max-width: ${wr.tablet}px) {
    font-size: 0.68rem;
  }

  @media (max-width: ${wr.smallPhone}px) {
    font-size: 0.63rem;
  }
`,Ro=gr.span`
  color: ${xr.goldMain};
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

  @media (max-width: ${wr.tablet}px) {
    font-size: 0.75rem;
  }

  @media (max-width: ${wr.smallPhone}px) {
    font-size: 0.7rem;
  }
`,Lo=gr.a`
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
      ${xr.goldMain} 100%
    );
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${xr.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(212, 175, 55, 0.6);

    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${wr.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 0.8px;
  }

  @media (max-width: ${wr.smallPhone}px) {
    font-size: 0.7rem;
  }
`;const Mo=function(e){let{data:t}=e;const[n,r]=(0,a.useState)(67100),[o,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(o)return;const e=localStorage.getItem("visitCount"),t=localStorage.getItem("lastSessionTime"),n=(new Date).getTime();if(e&&t){if(n-parseInt(t)>6e4){const t=parseInt(e)+1;localStorage.setItem("visitCount",t),localStorage.setItem("lastSessionTime",n),r(t)}else r(parseInt(e))}else localStorage.setItem("visitCount",67101),localStorage.setItem("lastSessionTime",n),r(67100);i(!0)},[o]),(0,zr.jsxs)(No,{children:[(0,zr.jsx)(Oo,{children:t.copy}),(0,zr.jsxs)(Ro,{children:["Odwiedzin na stronie:"," ",(0,zr.jsx)("strong",{children:n.toLocaleString("pl-PL")})]}),(0,zr.jsx)(Lo,{href:`mailto:${t.email}`,children:t.email})]})};const Do=function(){const{brand:e,links:t,socials:n,contact:a}=fo;return(0,zr.jsxs)(co,{children:[(0,zr.jsxs)(uo,{children:[(0,zr.jsx)(bo,{data:e}),(0,zr.jsx)(So,{data:t}),(0,zr.jsx)(_o,{data:n})]}),(0,zr.jsx)(Mo,{data:a})]})},Ao=()=>{const e=ue();return(0,a.useEffect)(()=>{window.scrollTo(0,0)},[e.key]),(0,a.useEffect)(()=>{setTimeout(()=>{window.scrollTo(0,0)},100)},[]),null},Io=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=fr.apply(void 0,St([e],t,!1)),o="sc-global-".concat(Zn(JSON.stringify(r))),i=new br(r,o),l=new WeakMap,s=function(e){var t=ir(),n=a.useContext(sr),r=l.get(t.styleSheet);return void 0===r&&(r=t.styleSheet.allocateGSInstance(o),l.set(t.styleSheet,r)),a.useLayoutEffect(function(){return t.styleSheet.server||function(e,t,n,a,r){if(i.isStatic)i.renderStyles(e,On,n,r);else{var o=jt(jt({},t),{theme:Un(t,a,s.defaultProps)});i.renderStyles(e,o,n,r)}}(r,e,t.styleSheet,n,t.stylis),function(){i.removeStyles(r,t.styleSheet)}},[r,e,t.styleSheet,n,t.stylis]),null};return a.memo(s)})`
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
    background-color: ${xr.outerSpace||"#1a0005"};
    color: ${xr.white||"#ffffff"};
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
    background: ${xr.goldMain||"#d4af37"};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${xr.goldHover||"#f1d592"};
  }
`,Fo=gr.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,Wo=gr.div`
  flex: 1;
  padding-top: 90px;

  @media (max-width: 821px) {
    padding-top: 70px;
  }
`,Uo=gr.section`
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

  @media (max-width: ${wr.tablet}px) {
    padding: 94px 0 0;
  }

  @media (max-width: 640px) {
    padding: 88px 0 0;
  }

  @media (max-width: ${wr.phone}px) {
    padding: 84px 0 0;
  }
`,Ho=gr.div`
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

  @media (max-width: ${wr.tablet}px) {
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

  @media (max-width: ${wr.phone}px) {
    gap: 8px;
    padding: 4px 10px 0;
  }

  @media (max-width: 420px) {
    gap: 8px;
    padding: 4px 10px 0;
  }
`,Bo=gr.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;

  @media (max-width: ${wr.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${wr.tablet}px) {
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

  @media (max-width: ${wr.phone}px) {
    margin-top: 0;
  }

  @media (max-width: 420px) {
    margin-top: 0;
  }
`,Ko=gr.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;

  @media (max-width: ${wr.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${wr.tablet}px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 760px;
    margin-top: 0;
  }

  @media (max-width: ${wr.phone}px) {
    margin-top: 0;
  }
`,Go=(gr.div`
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

  @media (max-width: 1050px) {
    padding: clamp(9px, 1.2vw, 14px);
  }

  @media (max-width: ${wr.tablet}px) {
    max-width: 760px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  @media (max-width: ${wr.phone}px) {
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
    align-items: center;
    padding: 0 2px;
  }
`),Vo=gr.div`
  font-family: "Manrope", "Segoe UI", sans-serif;
  color: rgba(255, 242, 214, 0.92);
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.2vw, 2.2px);
  font-size: clamp(0.62rem, 0.9vw, 0.82rem);
  font-weight: 500;
  margin-bottom: 18px;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);

  @media (max-width: ${wr.tablet}px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${wr.phone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.8px;
    margin-bottom: 12px;
  }
`,Yo=gr.h1`
  margin: 0 0 18px;
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  color: ${xr.goldHover};
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

  @media (max-width: ${wr.tablet}px) {
    font-size: clamp(0.95rem, 3.2vw, 1.95rem);
    letter-spacing: 0;
    text-align: center;
    width: 100%;
    line-height: 1;
  }

  @media (max-width: ${wr.phone}px) {
    margin-bottom: 14px;
    font-size: clamp(0.9rem, 5.2vw, 1.6rem);
    line-height: 1.1;
  }
`,qo=gr.p`
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

  @media (max-width: ${wr.tablet}px) {
    max-width: 560px;
    font-size: clamp(0.74rem, 1.8vw, 0.84rem);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${wr.phone}px) {
    max-width: 100%;
    font-size: clamp(0.72rem, 3.4vw, 0.8rem);
    line-height: 1.45;
    text-align: center;
  }
`,Qo=gr.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: nowrap;

  @media (max-width: ${wr.tablet}px) {
    width: 100%;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10px;
  }

  @media (max-width: ${wr.phone}px) {
    gap: 8px;
    margin-top: 22px;
    flex-wrap: nowrap;
    justify-content: center;
  }
`,Jo=`\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 48px;\n  padding: 0 24px;\n  border-radius: 14px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.9px;\n  font-size: clamp(0.68rem, 0.8vw, 0.82rem);\n  font-weight: 700;\n  white-space: nowrap;\n  flex: 0 0 auto;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease,\n    color 0.3s ease, border-color 0.3s ease;\n\n  @media (max-width: ${wr.tablet}px) {\n    min-height: 42px;\n    padding: 0 14px;\n    font-size: 0.74rem;\n    letter-spacing: 0.8px;\n  }\n\n  @media (max-width: ${wr.phone}px) {\n    min-height: 40px;\n    padding: 0 12px;\n    font-size: 0.7rem;\n    letter-spacing: 0.7px;\n  }\n`,Xo=gr.a`
  ${Jo}
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
`,Zo=gr.a`
  ${Jo}
  color: rgba(255, 246, 220, 0.92);
  background: rgba(53, 13, 19, 0.22);
  border: 1px solid rgba(241, 213, 146, 0.58);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.04),
    0 10px 24px rgba(0, 0, 0, 0.14);

  &:hover {
    transform: translateY(-1px);
    color: ${xr.white};
    border-color: rgba(241, 213, 146, 0.78);
    box-shadow:
      0 14px 30px rgba(0, 0, 0, 0.2),
      0 0 18px rgba(212, 175, 55, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  }
`,ei="Unikalny design, kt\xf3ry zachwyca",ti={line1:"Luksusowe i funkcjonalne",line2:"strony WWW dla Twojej marki"},ni={line1:"Projektujemy spersonalizowane, unikalne rozwi\u0105zania cyfrowe,",line2:"kt\xf3re buduj\u0105 autorytet i przyci\u0105gaj\u0105 klient\xf3w premium."},ai={primary:{label:"Zobacz Projekty",href:"#projekty"},secondary:{label:"Poznaj Ofert\u0119",href:"#oferta"}};const ri=function(){return(0,zr.jsxs)(Go,{children:[(0,zr.jsx)(Vo,{children:ei}),(0,zr.jsxs)(Yo,{children:[ti.line1,(0,zr.jsx)("br",{}),ti.line2]}),(0,zr.jsxs)(qo,{children:[ni.line1,(0,zr.jsx)("br",{}),ni.line2]}),(0,zr.jsxs)(Qo,{children:[(0,zr.jsx)(Xo,{href:ai.primary.href,children:ai.primary.label}),(0,zr.jsx)(Zo,{href:ai.secondary.href,children:ai.secondary.label})]})]})},oi=gr.div`
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

  @media (max-width: ${wr.tablet}px) {
    width: min(100%, 760px);
    height: clamp(240px, 46vw, 380px);
    padding: 2px;
    margin: 0 auto;
  }

  @media (max-width: ${wr.phone}px) {
    padding: 0 2px;
  }
`,ii=gr.div`
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

  @media (max-width: ${wr.tablet}px) {
    --offset-distance: 68px;
    --edge-offset-distance: 112px;
  }

  @media (max-width: ${wr.phone}px) {
    --offset-distance: 56px;
    --edge-offset-distance: 98px;
  }
`,li=gr.img`
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
  box-shadow: ${e=>e.$active?`0 28px 50px rgba(0, 0, 0, 0.45), 0 0 20px ${xr.goldSoft18}`:"0 16px 26px rgba(0, 0, 0, 0.3)"};
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

  @media (max-width: ${wr.phone}px) {
    width: 260px;
    height: 182px;
  }
`;var si=n(217),ci=n(410),ui=n(430),di=n(682);const pi={images:[si,ci,ui,di,ci]},{images:fi}=pi,mi=(e,t,n)=>{let a=t-e;return a>n/2&&(a-=n),a<-n/2&&(a+=n),a};const hi=function(){const[e,t]=(0,a.useState)(0);return(0,a.useEffect)(()=>{const e=setInterval(()=>{t(e=>(e+1)%fi.length)},4e3);return()=>clearInterval(e)},[]),(0,zr.jsx)(oi,{children:(0,zr.jsx)(ii,{children:fi.map((t,n)=>(0,zr.jsx)(li,{src:t,alt:`Projekt ${n+1}`,$offset:mi(e,n,fi.length),$active:n===e},`${t}-${n}`))})})},gi=gr.section`
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
`,yi=gr.div`
  text-align: center;
  margin-bottom: clamp(8px, 1.2vw, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,bi=gr.h2`
  color: ${xr.goldHover};
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
`,wi=gr.p`
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
`,xi=gr.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: stretch;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(280px, 38vw, 420px);
`,vi=gr.div`
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
`,ki=gr.div`
  flex: 0 0 calc(25% - 15px);
  min-width: 0;
  scroll-snap-align: start;
  display: flex;
  align-items: stretch;
  height: 100%;

  @media (max-width: 1050px) {
    flex: 0 0 calc(33.33% - 14px);
  }

  @media (max-width: ${wr.tablet}px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(50% - 6px);
  }

  @media (max-width: ${wr.smallPhone}px) {
    flex: 0 0 calc(100% - 0px);
  }
`,zi=gr.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${xr.goldMain};
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
`,ji=gr.div`
  margin-top: clamp(36px, 5vw, 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover div {
    width: 100px;
  }
`,Si=gr.span`
  color: ${xr.goldMain};
  text-transform: uppercase;
  letter-spacing: clamp(1.4px, 0.3vw, 4px);
  font-size: clamp(0.68rem, 0.9vw, 0.75rem);
  margin-bottom: 10px;
`,Ci=gr.div`
  width: 50px;
  height: 1px;
  background: ${xr.goldMain};
  transition: width 0.4s ease;
`,Ei=gr.div`
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
`;const Pi=function(e){let{children:t,type:n,url:a,isLink:r}=e;return(0,zr.jsx)(Ei,{as:"link"===n?"a":"div",href:"link"===n?a:void 0,target:"link"===n?"_blank":void 0,isLink:r,children:t})},Ti=gr.div`
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
`,$i=gr.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  filter: brightness(0.88) saturate(0.9);
  transition:
    filter 0.45s ease,
    transform 0.45s ease;
`;const _i=function(e){let{image:t,title:n}=e;return(0,zr.jsx)(Ti,{children:(0,zr.jsx)($i,{src:t,alt:n})})},Ni=gr.div`
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
`;const Oi=function(e){let{icon:t}=e;return(0,zr.jsx)(Ni,{children:(0,zr.jsx)(t,{})})},Ri=gr.h3`
  color: ${xr.goldHover};
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
`,Li=gr.p`
  color: rgba(255, 245, 220, 0.78);
  font-size: clamp(0.68rem, 2.2vw, 0.82rem);
  text-align: center;
  line-height: 1.5;
  margin: 0 clamp(8px, 2vw, 20px);
  max-width: 240px;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;const Mi=function(e){let{title:t,description:n}=e;return(0,zr.jsxs)(zr.Fragment,{children:[(0,zr.jsx)(Ri,{children:t}),n&&(0,zr.jsx)(Li,{children:n})]})},Di=gr.div`
  width: 44px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${xr.goldMain} 50%,
    transparent 100%
  );
  margin-top: 14px;
  opacity: 0.65;
  flex-shrink: 0;
`;const Ai=function(){return(0,zr.jsx)(Di,{})};const Ii=function(e){let{project:t}=e;const{type:n,url:a,title:r,description:o,image:i,icon:l}=t;return(0,zr.jsxs)(Pi,{type:n,url:a,isLink:"link"===n,children:[(0,zr.jsx)(_i,{image:i,title:r}),(0,zr.jsx)(Oi,{icon:l}),(0,zr.jsx)(Mi,{title:r,description:o}),(0,zr.jsx)(Ai,{})]})},Fi=[{id:1,type:"link",url:"https://google.com",title:"Boutique E-commerce",description:"W pe\u0142ni dzia\u0142aj\u0105cy sklep internetowy premium.",image:si,icon:Xr},{id:2,type:"example",title:"Studio Architektury",image:ci,icon:function(e){return qr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}},{id:3,type:"example",title:"Portfolio Fotografa",image:ui,icon:function(e){return qr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(e)}},{id:4,type:"link",url:"https://moja-inna-strona.pl",title:"Dashboard Finansowy",image:di,icon:function(e){return qr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}},{id:5,type:"example",title:"Projekt Specjalny",image:si,icon:Xr},{id:6,type:"example",title:"Projekt Specjalny 2",image:ci,icon:Xr}],Wi={title:"Przyk\u0142adowe Prace",subtitle:"Ekskluzywne projekty cyfrowe, kt\xf3re definiuj\u0105 now\u0105 jako\u015b\u0107 bran\u017cy"},Ui="Zobacz Pe\u0142ne Portfolio";const Hi=function(){const e=(0,a.useRef)(null),t=(0,a.useRef)(!1),n=n=>{const a=e.current;if(!a||t.current)return;const r=a.firstElementChild;if(!r)return;const o=parseFloat(getComputedStyle(a).gap)||16,i=r.offsetWidth+o,l=a.scrollWidth-a.clientWidth;t.current=!0,n>0&&a.scrollLeft>=l-2?a.scrollTo({left:0,behavior:"smooth"}):n<0&&a.scrollLeft<=2?a.scrollTo({left:l,behavior:"smooth"}):a.scrollBy({left:n*i,behavior:"smooth"}),setTimeout(()=>{t.current=!1},580)};return(0,zr.jsxs)(gi,{children:[(0,zr.jsxs)(yi,{children:[(0,zr.jsx)(bi,{children:Wi.title}),(0,zr.jsx)(wi,{children:Wi.subtitle})]}),(0,zr.jsxs)(xi,{children:[(0,zr.jsx)(zi,{onClick:()=>n(-1),"aria-label":"Poprzedni projekt",children:(0,zr.jsx)(eo,{})}),(0,zr.jsx)(vi,{ref:e,children:Fi.map(e=>(0,zr.jsx)(ki,{children:(0,zr.jsx)(Ii,{project:e})},e.id))}),(0,zr.jsx)(zi,{onClick:()=>n(1),"aria-label":"Nast\u0119pny projekt",children:(0,zr.jsx)(Zr,{})})]}),(0,zr.jsxs)(ji,{children:[(0,zr.jsx)(Si,{children:Ui}),(0,zr.jsx)(Ci,{})]})]})};const Bi=function(){return(0,zr.jsxs)(zr.Fragment,{children:[(0,zr.jsx)(Uo,{children:(0,zr.jsxs)(Ho,{children:[(0,zr.jsx)(Bo,{children:(0,zr.jsx)(ri,{})}),(0,zr.jsx)(Ko,{children:(0,zr.jsx)(hi,{})})]})}),(0,zr.jsx)(Hi,{})]})},Ki=gr.div`
  position: relative;
  z-index: 5;
`,Gi=gr.section`
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
`,Vi=gr.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
`,Yi=gr.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${xr.goldMain} 50%,
    transparent 100%
  );
  opacity: 0.25;
  margin: clamp(15px, 2vw, 25px) auto;
  max-width: 200px;
`,qi=gr.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: clamp(30px, 4vw, 50px);
  color: ${xr.goldMain};
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
      ${xr.goldMain} 20%,
      ${xr.goldMain} 80%,
      transparent 100%
    );
  }
`,Qi=gr.section`
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
      ${xr.goldMain},
      transparent
    );
  }
`,Ji=gr.h1`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 700;
  color: ${xr.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: clamp(1px, 0.5vw, 3px);
  margin: clamp(35px, 5vw, 50px) 0 clamp(25px, 4vw, 35px);
  text-transform: uppercase;
`,Xi=gr.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: rgba(255, 255, 255, 0.82);
  line-height: clamp(1.6, 3vw, 1.9);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
  font-family: "Manrope", sans-serif;
`,Zi="Wymiar Luksusowej Doskona\u0142o\u015bci",el="Gdzie wizja spotyka precyzj\u0119. Tworzymy cyfrowe eksperyencje, kt\xf3re wyznaczaj\u0105 standardy bran\u017cy.",tl={title:"Twoja Kolekcja",paragraphs:[". Stworzyli\u015bmy ekosystem wzorc\xf3w, kt\xf3re wyznaczaj\u0105 standardy - sprawdzone, doskonale zaprojektowane i gotowe do Twojej marki.","Ty wybierasz fundament z naszej autorskiej kolekcji, my dostosowujemy go do Twojej to\u017csamo\u015bci. Rezultat? Estetyka bez kompromis\xf3w i natychmiastowy autorytet w Twojej bran\u017cy.","Ka\u017cdy szablon to efekt setki godzin testowania, niezliczonych iteracji i wiedzy zdobytej pracuj\u0105c z luksusowymi markami na ca\u0142ym \u015bwiecie."],signature:"Autorska Kolekcja \xb7 Sprawdzone Struktury \xb7 Estetyka Bez Kompromis\xf3w"},nl=[{id:1,label:"Selekcja",value:"1",description:"Autorskie szablony zaprojektowane pod luksusowe marki."},{id:2,label:"Szybko\u015b\u0107",value:"2",description:"Twoja obecno\u015b\u0107 online w 2-4 dni robocze."},{id:3,label:"Sp\xf3jno\u015b\u0107",value:"3",description:"Gwarancja doskona\u0142ego wygl\u0105du na ka\u017cdym urz\u0105dzeniu."}],al=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych. "},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."}],rl={title:"Gdzie nas znajdziesz?",description:"Nasze projekty dost\u0119pne na najpopularniejszych platformach. Allegro oferuje nas za nieco wy\u017csz\u0105 cen\u0119 ze wzgl\u0119du na ich prowizj\u0119. ",platforms:[{id:1,name:"Facebook",description:"Obserwuj nas na Facebooku, aby by\u0107 zawsze na bie\u017c\u0105co."},{id:2,name:"YouTube",description:"Odkrywaj nasze projekty i inspiracje na YouTube."},{id:3,name:"Allegro",description:"Kupuj nasze szablony w sklepie Allegro (ceny wy\u017csze ze wzgl\u0119du na prowizj\u0119)."}]},ol="Twoja Kolekcja",il="Nasze Atuty",ll="Jak To Dzia\u0142a?",sl="Got\xf3w na transformacj\u0119 cyfrow\u0105?",cl=()=>(0,zr.jsxs)(Qi,{children:[(0,zr.jsx)(Ji,{children:Zi}),(0,zr.jsx)(Xi,{children:el})]}),ul=gr.div`
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
`,dl=gr.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: clamp(1.7, 4vw, 2.1);
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
  position: relative;
`,pl=gr.div`
  color: ${xr.goldMain};
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
`,fl=()=>(0,zr.jsxs)(ul,{children:[tl.paragraphs.map((e,t)=>(0,zr.jsx)(dl,{children:e},t)),(0,zr.jsx)(pl,{children:tl.signature})]}),ml=gr.div`
  border-left: 2px solid ${xr.goldMain};
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
      ${xr.goldMain} 0%,
      transparent 100%
    );
  }
`,hl=gr.div`
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
`,gl=gr.h4`
  color: ${xr.goldMain};
  margin-bottom: clamp(12px, 2vw, 15px);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  margin-top: 0;
`,yl=gr.p`
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.85);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
`,bl=gr.div`
  width: 100%;
`,wl=gr.button`
  margin-top: clamp(40px, 6vw, 60px);
  padding: clamp(12px, 2vw, 16px) clamp(30px, 4vw, 50px);
  background: linear-gradient(
    135deg,
    ${xr.goldMain} 0%,
    #f1d592 100%
  );
  color: ${xr.deepBlack};
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
`,xl=()=>{const e=fe();return(0,zr.jsxs)(bl,{children:[(0,zr.jsx)(ml,{children:al.map(e=>(0,zr.jsxs)(hl,{children:[(0,zr.jsx)(gl,{children:e.question}),(0,zr.jsx)(yl,{children:e.answer})]},e.id))}),(0,zr.jsx)(wl,{onClick:()=>e("/questions"),children:"Zobacz Wi\u0119cej Pyta\u0144"})]})},vl=gr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(30px, 5vw, 50px);
  margin-top: clamp(60px, 8vw, 80px);
  width: 100%;

  @media (max-width: ${wr.tablet}px) {
    grid-template-columns: 1fr;
  }
`,kl=gr.div`
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
    border-color: ${xr.goldMain};
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
`,zl=gr.span`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: bold;
  color: ${xr.goldMain};
  opacity: 0.95;
  font-family: "Cormorant Garamond", serif;
  line-height: 1;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,jl=gr.span`
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  text-transform: uppercase;
  letter-spacing: clamp(1.5px, 0.5vw, 2.5px);
  color: ${xr.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  opacity: 0.9;
`,Sl=gr.p`
  font-size: clamp(0.85rem, 1.8vw, 0.98rem);
  line-height: clamp(1.6, 3vw, 1.8);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
`,Cl=()=>(0,zr.jsx)(vl,{children:nl.map(e=>(0,zr.jsxs)(kl,{children:[(0,zr.jsx)(zl,{children:e.value}),(0,zr.jsx)(jl,{children:e.label}),(0,zr.jsx)(Sl,{children:e.description})]},e.id))}),El=gr.section`
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
`,Pl=gr.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: clamp(30px, 4vw, 50px);
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
`,Tl=(gr.button`
  padding: clamp(14px, 2.5vw, 18px) clamp(35px, 5vw, 60px);
  background: linear-gradient(
    135deg,
    ${xr.goldMain} 0%,
    #f1d592 100%
  );
  color: ${xr.deepBlack};
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
`,()=>(0,zr.jsx)(El,{children:(0,zr.jsx)(Pl,{children:sl})})),$l=gr.section`
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
`,_l=gr.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: clamp(30px, 4vw, 50px);
  color: ${xr.goldMain};
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
      ${xr.goldMain} 20%,
      ${xr.goldMain} 80%,
      transparent 100%
    );
  }
`,Nl=gr.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: clamp(40px, 6vw, 60px);
  max-width: 600px;
  line-height: clamp(1.6, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
`,Ol=gr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(25px, 4vw, 40px);
  width: 100%;
  margin-top: clamp(20px, 3vw, 30px);

  @media (max-width: ${wr.tablet}px) {
    grid-template-columns: 1fr;
  }
`,Rl=gr.a`
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
    border-color: ${xr.goldMain};
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
`,Ll=gr.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${xr.goldMain};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;

  ${Rl}:hover & {
    transform: scale(1.15) rotate(5deg);
  }
`,Ml=gr.h3`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  color: ${xr.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
`,Dl=gr.p`
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  line-height: clamp(1.5, 2.5vw, 1.7);
  font-weight: 400;
`,Al=()=>(0,zr.jsxs)($l,{children:[(0,zr.jsx)(_l,{children:rl.title}),(0,zr.jsx)(Nl,{children:rl.description}),(0,zr.jsx)(Ol,{children:rl.platforms.map(e=>{const t=no.find(t=>t.label===e.name);return(0,zr.jsxs)(Rl,{href:null===t||void 0===t?void 0:t.url,target:"_blank",rel:"noopener noreferrer",children:[(0,zr.jsx)(Ll,{children:t&&(0,zr.jsx)(t.icon,{})}),(0,zr.jsx)(Ml,{children:e.name}),(0,zr.jsx)(Dl,{children:e.description})]},e.id)})})]}),Il=()=>(0,zr.jsxs)(Ki,{children:[(0,zr.jsx)(cl,{}),(0,zr.jsx)(Yi,{}),(0,zr.jsxs)(Gi,{children:[(0,zr.jsx)(qi,{children:ol}),(0,zr.jsx)(Vi,{children:(0,zr.jsx)(fl,{})})]}),(0,zr.jsx)(Yi,{}),(0,zr.jsxs)(Gi,{children:[(0,zr.jsx)(qi,{children:il}),(0,zr.jsx)(Vi,{style:{maxWidth:"1000px"},children:(0,zr.jsx)(Cl,{})})]}),(0,zr.jsx)(Yi,{}),(0,zr.jsxs)(Gi,{children:[(0,zr.jsx)(qi,{children:ll}),(0,zr.jsx)(Vi,{children:(0,zr.jsx)(xl,{})})]}),(0,zr.jsx)(Yi,{}),(0,zr.jsx)(Al,{}),(0,zr.jsx)(Yi,{}),(0,zr.jsx)(Tl,{})]}),Fl=gr.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,Wl=gr.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`,Ul=gr.div`
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
`,Hl=gr.h1`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-family: "Cormorant Garamond", serif;
  color: ${xr.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(0.5px, 0.5vw, 1px);
`,Bl=gr.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.6;
`,Kl=gr.div`
  border-left: 2px solid ${xr.goldMain};
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
      ${xr.goldMain} 0%,
      transparent 100%
    );
  }
`,Gl=gr.div`
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
`,Vl=gr.h3`
  color: ${xr.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  line-height: 1.4;
`,Yl=gr.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
  transition: color 0.3s ease;

  ${Gl}:hover & {
    color: rgba(255, 255, 255, 0.95);
  }
`,ql=gr.div`
  margin-top: clamp(60px, 10vw, 100px);
  text-align: center;
  padding-top: clamp(40px, 6vw, 60px);
  border-top: 1px solid rgba(212, 175, 55, 0.2);
`,Ql=gr.button`
  padding: clamp(12px, 2vw, 16px) clamp(30px, 4vw, 50px);
  background: linear-gradient(
    135deg,
    ${xr.goldMain} 0%,
    #f1d592 100%
  );
  color: ${xr.deepBlack};
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
`,Jl=gr.button`
  background: transparent;
  border: none;
  color: ${xr.goldMain};
  cursor: pointer;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: inherit;
  padding: 0;
  margin: 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${xr.goldHover};
  }
`,Xl=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych."},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."},{id:4,question:"Czy za realizacj\u0119 projektu otrzymam faktur\u0119?",answer:"Tak. Za ka\u017cd\u0105 us\u0142ug\u0119 wystawiamy faktur\u0119 (bez VAT), kt\xf3r\u0105 otrzymasz na e-mail. Mo\u017cesz j\u0105 w ca\u0142o\u015bci wliczy\u0107 w koszty uzyskania przychodu \u2013 to najprostsze i najbezpieczniejsze rozwi\u0105zanie dla Twojego biznesu. Nie musisz martwi\u0107 si\u0119 o \u017cadne dodatkowe formalno\u015bci, a my zapewniamy Ci pe\u0142n\u0105 transparentno\u015b\u0107 i profesjonalizm w rozliczeniach."},{id:5,question:"Czemu na Allegro ceny us\u0142ug s\u0105 wy\u017csze?",answer:"Wy\u017csza cena na platformie Allegro wynika wy\u0142\u0105cznie z wysokich prowizji i op\u0142at transakcyjnych pobieranych przez operatora. Kontaktuj\u0105c si\u0119 z nami bezpo\u015brednio, omijasz te dodatkowe koszty i otrzymujesz najlepsz\u0105 mo\u017cliw\u0105 ofert\u0119 przy zachowaniu tej samej jako\u015bci i gwarancji. "},{id:6,question:"Co je\u015bli nie mam w\u0142asnych profesjonalnych zdj\u0119\u0107 lub tekst\xf3w?",answer:"Bez obaw, zajmiemy si\u0119 tym. Je\u015bli brakuje Ci fotografii, wygenerujemy dla Twojej marki unikalne grafiki AI, kt\xf3re idealnie oddadz\u0105 klimat Twojego biznesu. Pomo\u017cemy Ci te\u017c ubra\u0107 Twoje pomys\u0142y w profesjonalne s\u0142owa, aby strona od pocz\u0105tku budowa\u0142a Twoje zaufanie. "},{id:7,question:"Czy to autorskie projekty, czy gotowce z sieci?",answer:"Ka\u017cdy element naszej kolekcji stworzyli\u015bmy sami \u2013 od pierwszej linii kodu po ostatni detal wizualny. Nie u\u017cywamy WordPressa ani ci\u0119\u017ckich, powolnych kreator\xf3w stron. Wybieraj\u0105c nas, otrzymujesz unikalny produkt w technologii React.js, a nie masowy szablon, kt\xf3ry posiada co druga firma w Twojej bran\u017cy."},{id:8,question:"Czy b\u0119d\u0119 mie\u0107 pe\u0142n\u0105 kontrol\u0119 i dost\u0119p do strony?",answer:"Jak najbardziej. Przekazujemy Ci komplet hase\u0142 i dost\u0119p\xf3w do Twoich w\u0142asnych kont. Nasz kod jest czysty i uporz\u0105dkowany \u2013 je\u015bli kiedykolwiek zdecydujesz si\u0119 przekaza\u0107 stron\u0119 innemu informatykowi, odnajdzie si\u0119 on w strukturze bez problemu. Jeste\u015b w 100% niezale\u017cna."},{id:9,question:"Jak strona radzi sobie w wyszukiwarce Google (SEO)?",answer:'Wi\u0119kszo\u015b\u0107 stron to ci\u0119\u017ckie projekty na WordPressie, kt\xf3re przez nadmiar zb\u0119dnych wtyczek l\u0105duj\u0105 na ko\u0144cu wynik\xf3w. Nasze strony budujemy "na lekko", co sprawia, \u017ce s\u0105 b\u0142yskawiczne i faworyzowane przez Google. To fundament, kt\xf3ry pozwala realnie powalczy\u0107 o najwy\u017csze pozycje.'},{id:10,question:"Czy strona b\u0119dzie bezpieczna (certyfikat SSL)?",answer:'Tak. Obok adresu Twojej strony zawsze b\u0119dzie widoczna "zielona k\u0142\xf3dka". Certyfikat SSL masz w cenie, co gwarantuje szyfrowanie danych i brak ostrze\u017ce\u0144 w przegl\u0105darkach. Twoja witryna b\u0119dzie w pe\u0142ni bezpieczna dla odwiedzaj\u0105cych.'},{id:11,question:"Jak nawi\u0105za\u0107 z nami wsp\xf3\u0142prac\u0119?",answer:"Masz dwie proste drogi. Mo\u017cesz dokona\u0107 zakupu bezpo\u015brednio przez nasz profil na Allegro lub napisa\u0107 do nas wiadomo\u015b\u0107 e-mail. W odpowiedzi otrzymasz od nas kr\xf3tk\u0105 instrukcj\u0119 i ankiet\u0119, kt\xf3ra pomo\u017ce nam doprecyzowa\u0107 wygl\u0105d Twojej nowej strony. Wi\u0119cej szczeg\xf3\u0142\xf3w na temat ca\u0142ego procesu znajdziesz na naszej podstronie",cooperationLink:!0},{id:12,question:"Co je\u015bli nie mam gotowych tre\u015bci i nie wiem, co napisa\u0107?",answer:"To najcz\u0119stsza obawa, dlatego maksymalnie upro\u015bcili\u015bmy ten proces. Nie musisz by\u0107 pisarzem ani fotografem. Po zakupie otrzymasz od nas prost\u0105, interaktywn\u0105 ankiet\u0119, kt\xf3ra 'wyci\u0105gnie' od Ciebie najwa\u017cniejsze informacje o Twoim biznesie. Na ich podstawie przygotujemy profesjonalne teksty, a je\u015bli brakuje Ci zdj\u0119\u0107 \u2013 wygenerujemy dla Twojej marki unikalne grafiki AI. Nasza strona jest elastyczna: je\u015bli nie masz jeszcze cennika czy zespo\u0142u, po prostu ukryjemy te sekcje, a ca\u0142o\u015b\u0107 nadal b\u0119dzie wygl\u0105da\u0107 luksusowo i sp\xf3jnie. Wi\u0119cej informacji znajdziesz w sekcji",cooperationLink:!0}],Zl={title:"Najcz\u0119stsze Pytania",subtitle:"Masz w\u0105tpliwo\u015bci? Znajd\u017a odpowied\u017a na pytania, kt\xf3re zadaj\u0105 nam nasi klienci"},es={backLabel:"Powr\xf3t do strony g\u0142\xf3wnej"},ts=()=>{const e=fe();return(0,zr.jsx)(Fl,{children:(0,zr.jsxs)(Wl,{children:[(0,zr.jsxs)(Ul,{children:[(0,zr.jsx)(Hl,{children:Zl.title}),(0,zr.jsx)(Bl,{children:Zl.subtitle})]}),(0,zr.jsx)(Kl,{children:Xl.map((t,n)=>(0,zr.jsxs)(Gl,{style:{"--index":n},children:[(0,zr.jsx)(Vl,{children:t.question}),(0,zr.jsxs)(Yl,{children:[t.answer,t.cooperationLink&&(0,zr.jsxs)(zr.Fragment,{children:[" ",(0,zr.jsx)(Jl,{onClick:()=>e("/cooperation"),children:"Wsp\xf3\u0142praca"}),"."]})]})]},t.id))}),(0,zr.jsx)(ql,{children:(0,zr.jsx)(Ql,{onClick:()=>e("/"),children:es.backLabel})})]})})},ns=gr.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,as=gr.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,rs=gr.div`
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
`,os=gr.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${xr.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,is=gr.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
`,ls={hero:{title:"Wsp\xf3\u0142praca",subtitle:"Prosty proces, pe\u0142na transparentno\u015b\u0107, gwarancja spokojnego snu. Oto, jak budujemy Twoj\u0105 cyfrow\u0105 przysz\u0142o\u015b\u0107."},steps:[{id:1,number:"1",title:"Wyb\xf3r Drogi i Start",content:"Wsp\xf3\u0142prac\u0119 zaczynamy od formalno\u015bci, aby\u015b mog\u0142a spa\u0107 spokojnie. Masz dwie \u015bcie\u017cki:",options:[{label:"Bezpo\u015brednio:",description:"Piszesz do nas e-mail, ustalamy szczeg\xf3\u0142y, przesy\u0142amy dane do faktury (bez VAT) i po op\u0142aceniu ruszamy z kopyta."},{label:"Allegro:",description:"Kupujesz na aukcji, korzystasz z bezpiecznych p\u0142atno\u015bci platformy i automatycznie trafiasz do kolejki realizacji."}],note:"Wa\u017cne: Przyst\u0119pujemy do pracy natychmiast po zaksi\u0119gowaniu wp\u0142aty lub otrzymaniu potwierdzenia z Allegro."},{id:2,number:"2",title:"Strategia i Materia\u0142y",content:"Nie musisz by\u0107 techniczna. Przesy\u0142amy Ci interaktywn\u0105 ankiet\u0119, kt\xf3ra poprowadzi Ci\u0119 za r\u0119k\u0119.",sections:[{label:"Twoje Zadanie:",description:"Wybierasz sekcje, kt\xf3re maj\u0105 si\u0119 pojawi\u0107 (np. O nas, Portfolio, Cennik)."},{label:"Nasze Wsparcie:",description:"Je\u015bli nie masz tekst\xf3w \u2013 przygotujemy je. Je\u015bli brak Ci zdj\u0119\u0107 \u2013 wygenerujemy unikalne grafiki AI."},{label:"Domena:",description:"Podajesz 2-3 propozycje nazwy (np. twojanazwa.pl). My sprawdzamy dost\u0119pno\u015b\u0107 i rejestrujemy t\u0119 woln\u0105."}]},{id:3,number:"3",title:"Realizacja: 48h Roboczych",content:"Tutaj dzieje si\u0119 magia. Kodujemy Twoj\u0105 stron\u0119 w czystym React.js.",details:[{label:"Czas:",description:"Standardowy czas realizacji to 48 godzin roboczych."},{label:"Zasada Wypocz\u0119tego Eksperta:",description:"Liczymy tylko dni robocze (poniedzia\u0142ek \u2013 pi\u0105tek). Weekendy i \u015bwi\u0119ta to czas na regeneracj\u0119, bo tylko wypocz\u0119ty programista gwarantuje kod bez b\u0142\u0119d\xf3w i design na najwy\u017cszym poziomie."},{label:"Technologia:",description:"Konfigurujemy darmowy serwer (GitHub Pages) i spinamy wszystko z Twoj\u0105 now\u0105 domen\u0105."}]},{id:4,number:"4",title:'Przekazanie "Kluczy do Biznesu"',content:"Twoja strona o\u017cywa. Ale na tym nie ko\u0144czymy:",deliverables:["Otrzymujesz od nas komplet hase\u0142 i dost\u0119p\xf3w do konta serwera i domeny.","Dostajesz prost\u0105 instrukcj\u0119, co zrobi\u0107 za rok, \u017ceby przed\u0142u\u017cy\u0107 domen\u0119 (koszt ok. 80 z\u0142 \u2013 bez naszych mar\u017c).","Strona jest Twoj\u0105 w\u0142asno\u015bci\u0105 na zawsze. Mo\u017cesz j\u0105 rozwija\u0107, przenosi\u0107 i modyfikowa\u0107 bez \u017cadnych ogranicze\u0144."]}],guarantee:{title:'Pakiet "Spokojna G\u0142owa"',subtitle:"Twoja Gwarancja",description:"Wiemy, \u017ce biznes si\u0119 zmienia. Numer telefonu mo\u017ce ulec zmianie, cennik mo\u017ce podskoczy\u0107. Dlatego nasza wsp\xf3\u0142praca nie ko\u0144czy si\u0119 na oddaniu strony:",benefits:[{icon:"3x",title:"3 Lata Opieki",description:"Masz u nas 3 darmowe pakiety poprawek do wykorzystania przez 36 miesi\u0119cy."},{icon:"\u26a1",title:"B\u0142yskawiczny Serwis",description:"Potrzebujesz zmiany? Piszesz e-mail, a my wprowadzamy poprawk\u0119 w kodzie."},{icon:"\ud83d\udcb0",title:"Uczciwe Stawki",description:"Po wykorzystaniu darmowych pakiet\xf3w, drobne zmiany to koszt rz\u0119du 10-50 z\u0142. Bez abonament\xf3w, bez naci\u0105gania."}]},materials:{title:"Jak Przygotowa\u0107 Materia\u0142y?",subtitle:"Twoja Checklista",intro:"Nie musisz by\u0107 copywriterem ani fotografem. Nasza strona jest elastyczna \u2013 dopasuje si\u0119 do tego, co masz. Je\u015bli brakuje Ci jakiej\u015b sekcji (np. cennika czy zespo\u0142u), po prostu j\u0105 ukryjemy, a layout nadal b\u0119dzie wygl\u0105da\u0142 perfekcyjnie.",sections:[{icon:"\ud83d\udccb",title:"Co Warto Przygotowa\u0107?",items:[{label:"Fundament (Hero & Domena)",points:["Wymy\u015bl chwytliwe has\u0142o (np. 'Twoje wspomnienia w najlepszym \u015bwietle').","Podaj 2-3 propozycje adresu strony (np. mojafirma.pl). Pami\u0119taj: kr\xf3tko i \u0142atwo do podyktowania. Unikaj nazw zastrze\u017conych marek!"]},{label:"To\u017csamo\u015b\u0107 (O nas & Zesp\xf3\u0142)",points:["Napisz kilka zda\u0144 o swojej pasji i tym, co Ci\u0119 wyr\xf3\u017cnia.","Poka\u017c 'ludzk\u0105 twarz' biznesu \u2013 prze\u015blij zdj\u0119cie przy pracy. Klienci kupuj\u0105 oczami, ale ufaj\u0105 ludziom, kt\xf3rych widz\u0105."]},{label:"Twoje Sukcesy (Statystyki & Portfolio)",points:["Pochwal si\u0119 liczbami (lata pracy, zadowoleni klienci) lub kluczowymi zaletami.","Wybierz do 12 najlepszych zdj\u0119\u0107 do galerii. Dzielimy je na kategorie (np. Biznes, Sesje, Projekty)."]},{label:"Konkrety (Us\u0142ugi & Cennik)",points:["Opisz kr\xf3tko do 10 us\u0142ug.","Podaj ceny lub pakiety. Je\u015bli wyceniasz indywidualnie \u2013 napiszemy o tym!"]},{label:"Kontakt & Social Media",points:["Przygotuj e-mail, telefon i linki do profili (Instagram, Facebook, TikTok itd.).","Sprawimy, \u017ce klient skontaktuje si\u0119 z Tob\u0105 jednym klikni\u0119ciem."]}]},{icon:"\ud83d\udc8e",title:"Nasze Wsparcie Kreatywne",highlight:!0,items:[{label:"Teksty",points:["Na podstawie kr\xf3tkiej ankiety ubierzemy Twoje my\u015bli w profesjonalne s\u0142owa."]},{label:"Grafiki AI",points:["Je\u015bli nie masz w\u0142asnych fotografii do t\u0142a lub sekcji 'O nas', wygenerujemy dla Ciebie unikalne, wysokiej jako\u015bci grafiki AI."]}]},{icon:"\u26a0\ufe0f",title:"Wa\u017cne Informacje Techniczne",items:[{label:"Szybko\u015b\u0107 Ponad Wszystko",points:["Limity zdj\u0119\u0107 (np. do 12 w galerii) stosujemy celowo. Dzi\u0119ki temu Twoja strona \u0142aduje si\u0119 b\u0142yskawicznie na ka\u017cdym smartfonie. W sieci: mniej znaczy wi\u0119cej!"]},{label:"Elastyczno\u015b\u0107",points:["Niezale\u017cnie od tego, czy wybierzesz 5, czy 10 sekcji, my zadbamy o zachowanie idealnych proporcji i estetyki."]},{label:"48h Roboczych",points:["Nasz zegar rusza, gdy otrzymamy od Ciebie komplet materia\u0142\xf3w. Pracujemy w dni robocze, aby dostarczy\u0107 Ci kod najwy\u017cszej jako\u015bci."]}]}]},cta:{primary:"Zacznij Wsp\xf3\u0142prac\u0119",secondary:"Wr\xf3\u0107 do Pyta\u0144"}},ss=()=>(0,zr.jsxs)(rs,{children:[(0,zr.jsx)(os,{children:ls.hero.title}),(0,zr.jsx)(is,{children:ls.hero.subtitle})]}),cs=gr.div`
  display: flex;
  flex-direction: column;
  gap: clamp(60px, 10vw, 100px);
  margin-bottom: clamp(80px, 12vw, 120px);
`,us=gr.div`
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
`,ds=gr.div`
  display: flex;
  align-items: center;
  gap: clamp(20px, 3vw, 30px);
`,ps=gr.div`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: ${xr.goldMain};
  line-height: 1;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  min-width: 60px;
  text-align: center;
  background: rgba(212, 175, 55, 0.1);
  padding: clamp(15px, 2vw, 25px);
  border-radius: 10px;
  border: 1px solid rgba(212, 175, 55, 0.2);
`,fs=gr.div`
  padding: clamp(20px, 3vw, 30px);
  background: rgba(212, 175, 55, 0.05);
  border-radius: 10px;
  border-left: 3px solid ${xr.goldMain};
  padding-left: clamp(25px, 4vw, 40px);
`,ms=gr.h2`
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  color: ${xr.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
  flex: 1;
`,hs=gr.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  margin: 0 0 clamp(15px, 2vw, 20px) 0;
`,gs=gr.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`,ys=gr.div`
  padding: clamp(15px, 2.5vw, 20px);
  background: rgba(212, 175, 55, 0.08);
  border-radius: 8px;
  border-left: 3px solid ${xr.goldMain};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    transform: translateX(5px);
  }
`,bs=gr.h4`
  color: ${xr.goldMain};
  margin: 0 0 8px 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
`,ws=gr.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 0.95rem);
  line-height: 1.6;
`,xs=gr.div`
  margin-top: clamp(20px, 3vw, 30px);
  padding: clamp(15px, 2.5vw, 25px);
  background: rgba(212, 175, 55, 0.05);
  border-radius: 8px;
  border-top: 2px solid ${xr.goldMain};
`,vs=gr.h5`
  color: ${xr.goldMain};
  margin: 0 0 8px 0;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`,ks=gr.p`
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  line-height: 1.6;
`,zs=gr.ul`
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
      color: ${xr.goldMain};
      font-weight: 700;
    }
  }
`,js=()=>(0,zr.jsx)(cs,{children:ls.steps.map((e,t)=>(0,zr.jsxs)(us,{delay:.1*t,children:[(0,zr.jsxs)(ds,{children:[(0,zr.jsx)(ps,{children:e.number}),(0,zr.jsx)(ms,{children:e.title})]}),(0,zr.jsxs)(fs,{children:[(0,zr.jsx)(hs,{children:e.content}),e.options&&(0,zr.jsxs)(zr.Fragment,{children:[(0,zr.jsx)(gs,{children:e.options.map((e,t)=>(0,zr.jsxs)(ys,{children:[(0,zr.jsx)(bs,{children:e.label}),(0,zr.jsx)(ws,{children:e.description})]},t))}),e.note&&(0,zr.jsxs)(xs,{children:[(0,zr.jsx)(vs,{children:"Wa\u017cne"}),(0,zr.jsx)(ks,{children:e.note})]})]}),e.sections&&(0,zr.jsx)(gs,{children:e.sections.map((e,t)=>(0,zr.jsxs)(ys,{children:[(0,zr.jsx)(bs,{children:e.label}),(0,zr.jsx)(ws,{children:e.description})]},t))}),e.details&&(0,zr.jsx)(gs,{children:e.details.map((e,t)=>(0,zr.jsxs)(ys,{children:[(0,zr.jsx)(bs,{children:e.label}),(0,zr.jsx)(ws,{children:e.description})]},t))}),e.deliverables&&(0,zr.jsx)(zs,{children:e.deliverables.map((e,t)=>(0,zr.jsx)("li",{children:e},t))})]})]},e.id))}),Ss=gr.section`
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
`,Cs=gr.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${xr.goldMain};
  margin: 0 0 10px 0;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`,Es=gr.p`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`,Ps=gr.p`
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin: 0 0 clamp(40px, 6vw, 60px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`,Ts=gr.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 6vw, 60px);
`,$s=gr.div`
  padding: clamp(30px, 4vw, 40px);
  background: rgba(
    255,
    255,
    255,
    ${e=>e.highlight?"0.06":"0.02"}
  );
  border: 1px solid
    rgba(212, 175, 55, ${e=>e.highlight?"0.3":"0.15"});
  border-left: 4px solid ${xr.goldMain};
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
`,_s=gr.div`
  display: flex;
  align-items: center;
  gap: clamp(15px, 2vw, 25px);
  margin-bottom: clamp(20px, 3vw, 30px);
`,Ns=gr.span`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${xr.goldMain};
`,Os=gr.h3`
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  color: ${xr.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,Rs=gr.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`,Ls=gr.div`
  padding: clamp(15px, 2.5vw, 20px);
  background: rgba(212, 175, 55, 0.04);
  border-radius: 8px;
  border-left: 2px solid rgba(212, 175, 55, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.08);
    border-left-color: ${xr.goldMain};
  }
`,Ms=gr.h4`
  color: ${xr.goldMain};
  margin: 0 0 clamp(10px, 1.5vw, 15px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
`,Ds=gr.ul`
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
      color: ${xr.goldMain};
      font-weight: 700;
      font-size: 1.1em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`,As=()=>(0,zr.jsxs)(Ss,{children:[(0,zr.jsx)(Cs,{children:ls.materials.title}),(0,zr.jsx)(Es,{children:ls.materials.subtitle}),(0,zr.jsx)(Ps,{children:ls.materials.intro}),(0,zr.jsx)(Ts,{children:ls.materials.sections.map((e,t)=>(0,zr.jsxs)($s,{highlight:e.highlight,children:[(0,zr.jsxs)(_s,{children:[(0,zr.jsx)(Ns,{children:e.icon}),(0,zr.jsx)(Os,{children:e.title})]}),(0,zr.jsx)(Rs,{children:e.items.map((e,t)=>(0,zr.jsxs)(Ls,{children:[(0,zr.jsx)(Ms,{children:e.label}),(0,zr.jsx)(Ds,{children:e.points.map((e,t)=>(0,zr.jsx)("li",{children:e},t))})]},t))})]},t))})]}),Is=gr.section`
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
`,Fs=gr.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${xr.goldMain};
  margin: 0 0 10px 0;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`,Ws=gr.p`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`,Us=gr.p`
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin: 0 0 clamp(40px, 6vw, 60px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,Hs=gr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(30px, 4vw, 50px);
`,Bs=gr.div`
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
`,Ks=gr.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${xr.goldMain};
  margin-bottom: clamp(15px, 2vw, 25px);
`,Gs=gr.h3`
  color: ${xr.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,Vs=gr.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  line-height: 1.7;
`,Ys=()=>(0,zr.jsxs)(Is,{children:[(0,zr.jsx)(Fs,{children:ls.guarantee.title}),(0,zr.jsx)(Ws,{children:ls.guarantee.subtitle}),(0,zr.jsx)(Us,{children:ls.guarantee.description}),(0,zr.jsx)(Hs,{children:ls.guarantee.benefits.map((e,t)=>(0,zr.jsxs)(Bs,{children:[(0,zr.jsx)(Ks,{children:e.icon}),(0,zr.jsx)(Gs,{children:e.title}),(0,zr.jsx)(Vs,{children:e.description})]},t))})]}),qs=gr.div`
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
`,Qs=gr.button`
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
`,Js=gr(Qs)`
  background: linear-gradient(
    135deg,
    ${xr.goldMain} 0%,
    #f1d592 100%
  );
  color: ${xr.deepBlack};

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
`,Xs=(gr(Qs)`
  background: transparent;
  color: ${xr.goldMain};
  border: 2px solid ${xr.goldMain};

  &:hover {
    background: rgba(212, 175, 55, 0.1);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
  }

  &:active {
    opacity: 0.8;
  }
`,()=>{const e=fe();return(0,zr.jsx)(qs,{children:(0,zr.jsx)(Js,{onClick:()=>e("/"),children:ls.cta.primary})})}),Zs=()=>(0,zr.jsx)(ns,{children:(0,zr.jsxs)(as,{children:[(0,zr.jsx)(ss,{}),(0,zr.jsx)(js,{}),(0,zr.jsx)(As,{}),(0,zr.jsx)(Ys,{}),(0,zr.jsx)(Xs,{})]})}),ec=gr.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,tc=gr.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,nc=gr.div`
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
`,ac=gr.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${xr.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,rc=gr.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
`,oc=(gr.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
  max-width: 1200px;
  margin: 0 auto;
`,gr.div`
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
`),ic=gr.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  height: 100%;
`,lc=gr.div`
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
      ${xr.goldMain},
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
    border-color: ${xr.goldMain};
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
`,sc=gr.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${lc}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`,cc=gr.div`
  padding: clamp(25px, 4vw, 35px);
  display: flex;
  flex-direction: column;
  flex: 1;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
`,uc=gr.h3`
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  color: ${xr.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`,dc=gr.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  line-height: 1.7;
  margin: 0 0 auto 0;
  flex: 1;
  font-weight: 300;
`,pc=gr.div`
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
`,fc=gr.span`
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  color: ${xr.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
`,mc=gr.button`
  padding: clamp(10px, 2vw, 14px) clamp(25px, 4vw, 40px);
  background: linear-gradient(
    135deg,
    ${xr.goldMain} 0%,
    #f1d592 100%
  );
  color: ${xr.deepBlack};
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
`,hc=[{id:1,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:2,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:3,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:4,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:5,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:6,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]}],gc="Nasze Projekty",yc="Odkryj gotowe szablony stron,kt\xf3re mog\u0105 transformowa\u0107 Twoj\u0105 mark\u0119",bc="\u2190 Wr\xf3\u0107 do ofert",wc="Preview szablonu",xc="O szablonie",vc="Szablon zawiera:",kc=()=>(0,zr.jsx)(oc,{children:hc.map(e=>(0,zr.jsx)(ic,{href:`/klara-queen/offer/${e.id}`,target:"_blank",rel:"noopener noreferrer",children:(0,zr.jsxs)(lc,{children:[(0,zr.jsx)(sc,{src:e.image,alt:e.title}),(0,zr.jsxs)(cc,{children:[(0,zr.jsx)(uc,{children:e.title}),(0,zr.jsx)(dc,{children:e.shortDescription}),(0,zr.jsxs)(pc,{children:[(0,zr.jsx)(fc,{children:e.price}),(0,zr.jsx)(mc,{children:"Szczeg\xf3\u0142y"})]})]})]})},e.id))}),zc=gr.div`
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
`,jc=gr.button`
  background: transparent;
  border: 2px solid ${xr.goldMain};
  color: ${xr.goldMain};
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
`,Sc=gr.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 7vw, 70px);
`,Cc=(gr.div`
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
  color: ${xr.goldMain};
`),Ec=gr.section`
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
`,Pc=gr.div`
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
      ${xr.goldMain} 50%,
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
`,Tc=gr.h1`
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: ${xr.goldMain};
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
`,$c=gr.p`
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
    background: ${xr.goldMain};
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
`,_c=gr.div`
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
      ${xr.goldMain} 0%,
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
`,Nc=gr.span`
  font-size: clamp(1.3rem, 2.8vw, 2rem);
  font-weight: 700;
  color: ${xr.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 821px) {
    font-size: clamp(0.95rem, 2vw, 1.3rem);
    letter-spacing: 0.6px;
  }
`,Oc=(gr.img`
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
`),Rc=gr.div`
  position: relative;
  display: block;
  margin: 0 auto clamp(30px, 5vw, 50px) auto;
  width: fit-content;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
`,Lc=gr.div`
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
`,Mc=gr.span`
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
`,Dc=gr.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: rgba(212, 175, 55, 0.9);
  border: 2px solid ${xr.goldMain};
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
    background: ${xr.goldMain};
    transform: scale(1.1);
  }

  @media (max-width: 821px) {
    width: 35px;
    height: 35px;
    bottom: 12px;
    right: 12px;
    font-size: 1rem;
  }
`,Ac=gr.img`
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
`,Ic=gr.div`
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
`,Fc=gr.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid
    ${e=>e.isActive?xr.goldMain:"rgba(212, 175, 55, 0.2)"};
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${e=>e.isActive?1:.6};
  box-shadow: ${e=>e.isActive?"0 8px 20px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.2)":"0 4px 12px rgba(0, 0, 0, 0.2)"};
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;

  &:hover {
    border-color: ${xr.goldMain};
    opacity: 1;
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
  }

  @media (max-width: 821px) {
    height: 55px;
    border-radius: 8px;
    border: 2px solid
      ${e=>e.isActive?xr.goldMain:"rgba(212, 175, 55, 0.2)"};
    box-shadow: ${e=>e.isActive?"0 6px 16px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(212, 175, 55, 0.2)":"0 3px 10px rgba(0, 0, 0, 0.25), inset 0 0.5px 0 rgba(212, 175, 55, 0.05)"};

    &:hover {
      transform: scale(1.08) translateY(-2px);
      box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
    }
  }
`,Wc=gr.span`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: ${xr.goldMain};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.3);
`,Uc=gr.div`
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
`,Hc=gr.div`
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
`,Bc=gr.img`
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
`,Kc=gr.span`
  position: fixed;
  top: 120px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: ${xr.goldMain};
  padding: 10px 18px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.5);
  z-index: 999999;
`,Gc=gr.button`
  position: absolute;
  top: 50%;
  ${e=>e.left?"left: 20px;":"right: 20px;"}
  transform: translateY(-50%);
  background: rgba(212, 175, 55, 0.2);
  border: 2px solid ${xr.goldMain};
  color: ${xr.goldMain};
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
`,Vc=gr.button`
  position: fixed;
  top: 120px;
  right: 20px;
  background: rgba(212, 175, 55, 0.2);
  border: 2px solid ${xr.goldMain};
  color: ${xr.goldMain};
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
`,Yc=e=>{let{images:t,title:n}=e;const[r,o]=(0,a.useState)(0),[i,l]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!i)return;const e=e=>{"ArrowLeft"===e.key?o(e=>(e-1+t.length)%t.length):"ArrowRight"===e.key?o(e=>(e+1)%t.length):"Escape"===e.key&&l(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[i,t.length]),t&&0!==t.length?(0,zr.jsxs)(zr.Fragment,{children:[(0,zr.jsxs)(Oc,{children:[(0,zr.jsxs)(Rc,{onContextMenu:e=>e.preventDefault(),onTouchStart:e=>{e.touches.length>1&&e.preventDefault()},children:[(0,zr.jsx)(Ac,{src:t[r],alt:`${n} - zdj\u0119cie ${r+1}`,onClick:()=>l(!0),onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault(),style:{cursor:"pointer",userSelect:"none"}}),(0,zr.jsx)(Lc,{children:(0,zr.jsx)(Mc,{children:"www.studioklara.pl"})}),(0,zr.jsx)(Dc,{onClick:()=>l(!0),children:"\u26f6"})]}),(0,zr.jsx)(Ic,{children:t.map((e,t)=>(0,zr.jsx)(Fc,{src:e,alt:`Miniatura ${t+1}`,isActive:r===t,onClick:()=>o(t),onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault()},t))}),(0,zr.jsxs)(Wc,{children:[r+1," / ",t.length]})]}),i&&(0,zr.jsxs)(Uc,{onClick:()=>l(!1),children:[(0,zr.jsxs)(Hc,{onClick:e=>e.stopPropagation(),children:[(0,zr.jsxs)(Rc,{style:{margin:0,width:"100%",height:"100%",maxHeight:"none"},children:[(0,zr.jsx)(Bc,{src:t[r],alt:`${n} - ${r+1}`,onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault()}),(0,zr.jsx)(Lc,{style:{opacity:.35},children:(0,zr.jsx)(Mc,{children:"www.studioklara.pl"})})]}),(0,zr.jsxs)(Kc,{children:[r+1," / ",t.length]}),(0,zr.jsx)(Gc,{left:!0,onClick:()=>o(e=>(e-1+t.length)%t.length),children:"\u2039"}),(0,zr.jsx)(Gc,{onClick:()=>o(e=>(e+1)%t.length),children:"\u203a"})]}),(0,zr.jsx)(Vc,{onClick:()=>l(!1),children:"\u2715"})]})]}):null},qc=e=>{let{title:t,subtitle:n,price:a,images:r}=e;return(0,zr.jsxs)(Ec,{children:[(0,zr.jsxs)(Pc,{children:[(0,zr.jsx)(Tc,{children:t}),(0,zr.jsx)($c,{children:n}),a&&(0,zr.jsx)(_c,{children:(0,zr.jsx)(Nc,{children:a})})]}),(0,zr.jsx)(Yc,{images:r,title:t})]})},Qc=gr.section`
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
`,Jc=gr.h2`
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  color: ${xr.goldMain};
  margin: 0 0 clamp(20px, 3vw, 35px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-style: italic;
`,Xc=(gr.p`
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

  ${Jc} {
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    margin: 0 0 clamp(15px, 2vw, 20px) 0;
  }
`),Zc=gr.div`
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
`,eu=gr.iframe`
  display: block;
  border-radius: 13px;
  width: 100%;
  height: 100%;
  border: none;
`,tu=e=>{let{title:t,youtubeUrl:n}=e;return(0,zr.jsxs)(Xc,{children:[(0,zr.jsx)(Jc,{children:t}),(0,zr.jsx)(Zc,{children:(0,zr.jsx)(eu,{src:n,title:t,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})},nu=gr.section`
  animation: fadeInUp 0.6s ease-out 0.4s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(30px, 4.5vw, 45px);
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.1);
`,au=gr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(20px, 3vw, 30px);
`,ru=gr.li`
  display: flex;
  align-items: flex-start;
  gap: clamp(15px, 3vw, 20px);
  padding: clamp(20px, 3vw, 28px);
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.08) 0%,
    rgba(212, 175, 55, 0.03) 100%
  );
  border-left: 4px solid ${xr.goldMain};
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
`,ou=gr.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: clamp(30px, 4vw, 40px);
  width: clamp(30px, 4vw, 40px);
  height: clamp(30px, 4vw, 40px);
  background: ${xr.goldMain};
  color: ${xr.deepBlack};
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.2em;
  flex-shrink: 0;
`,iu=gr.span`
  flex: 1;
`,lu=e=>{let{title:t,features:n}=e;return(0,zr.jsxs)(nu,{children:[(0,zr.jsx)(Jc,{children:t}),(0,zr.jsx)(au,{children:n.map((e,t)=>(0,zr.jsxs)(ru,{children:[(0,zr.jsx)(ou,{children:"\u2713"}),(0,zr.jsx)(iu,{children:e})]},t))})]})},su=gr.section`
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
      ${xr.goldMain},
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
`,cu=gr.h3`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${xr.goldMain};
  margin: 0 0 clamp(35px, 6vw, 50px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
  line-height: 1.3;
`,uu=gr.div`
  display: flex;
  gap: clamp(15px, 3vw, 30px);
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,du=gr.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: clamp(14px, 3vw, 18px) clamp(35px, 6vw, 60px);
  background: linear-gradient(
    135deg,
    ${xr.goldMain} 0%,
    #f1d592 100%
  );
  color: ${xr.deepBlack};
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
`,pu=gr(du)`
  background: transparent;
  color: ${xr.goldMain};
  border: 2px solid ${xr.goldMain};
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.15);

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.3);
  }
`,fu=(gr.div`
  text-align: center;
  padding: clamp(40px, 8vw, 80px);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${xr.goldMain};
`,e=>{var t;let{title:n}=e;const a=null===(t=no.find(e=>"Allegro"===e.label))||void 0===t?void 0:t.url;return(0,zr.jsxs)(su,{children:[(0,zr.jsx)(cu,{children:"Interesuje Ci\u0119 ten szablon?"}),(0,zr.jsxs)(uu,{children:[(0,zr.jsx)(du,{href:`mailto:${po}?subject=Zainteresowanie szablonk\u0105: ${n}`,children:"Napisz email"}),(0,zr.jsx)(pu,{href:a,target:"_blank",rel:"noopener noreferrer",children:"Zakup Allegro"})]})]})}),mu=e=>{let{offerId:t}=e;const n=fe(),a=hc.find(e=>e.id===t);return a?(0,zr.jsxs)(zc,{children:[(0,zr.jsx)(jc,{onClick:()=>n(-1),children:bc}),(0,zr.jsx)(qc,{title:a.title,subtitle:a.shortDescription,price:a.price,images:a.images}),(0,zr.jsxs)(Sc,{children:[(0,zr.jsx)(tu,{title:wc,youtubeUrl:a.youtubeUrl}),(0,zr.jsx)(Qc,{title:xc,description:a.fullDescription}),(0,zr.jsx)(lu,{title:vc,features:a.features}),(0,zr.jsx)(fu,{title:a.title})]})]}):(0,zr.jsx)(zc,{children:(0,zr.jsx)(Cc,{children:"Szablon nie znaleziony"})})},hu=()=>{const{id:e}=me();return e?(0,zr.jsx)(mu,{offerId:parseInt(e)}):(0,zr.jsx)(ec,{children:(0,zr.jsxs)(tc,{children:[(0,zr.jsxs)(nc,{children:[(0,zr.jsx)(ac,{children:gc}),(0,zr.jsx)(rc,{children:yc})]}),(0,zr.jsx)(kc,{})]})})},gu=gr.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,yu=gr.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,bu=gr.div`
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
`,wu=gr.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${xr.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,xu=gr.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
`,vu=gr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: clamp(20px, 4vw, 40px);
  margin-top: clamp(40px, 8vw, 80px);

  @media (max-width: 821px) {
    grid-template-columns: 1fr;
  }
`,ku=gr.div`
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
`,zu=gr.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
`,ju=gr.div`
  padding: clamp(20px, 4vw, 30px);
  display: flex;
  flex-direction: column;
  flex: 1;
`,Su=gr.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
`,Cu=gr.h3`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: ${xr.white};
  margin: 0 0 12px 0;
  font-weight: 600;
  line-height: 1.4;
  font-family: "Cormorant Garamond", serif;
`,Eu=gr.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 16px;
`,Pu=gr.span`
  font-size: 0.9rem;
  color: ${xr.gold};
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  ${ku}:hover & {
    gap: 12px;
  }

  &::after {
    content: "→";
    transition: transform 0.3s ease;
  }

  ${ku}:hover &::after {
    transform: translateX(4px);
  }
`,Tu=[{id:"startujemy-z-aktualnosciami",title:"Startujemy z Aktualno\u015bciami \u2013 Sekcja tworzona na pro\u015bb\u0119 klient\xf3w",excerpt:"Po miesi\u0105cach obserwacji trendu w bran\u017cy i s\u0142uchaj\u0105c feedbacku naszych klient\xf3w, postanowili\u015bmy uruchomi\u0107 oficjaln\u0105 sekcj\u0119 Aktualno\u015bci. Dowiedz si\u0119, dlaczego to dla nas milestone, a dla Ciebie okazja do bycia na bie\u017c\u0105co.",date:"30 stycznia 2026",image:n(217),content:'\n# Startujemy z Aktualno\u015bciami \u2013 Sekcja tworzona na pro\u015bb\u0119 klient\xf3w\n\n**30 stycznia 2026**\n\nKilka miesi\u0119cy temu zadali\u015bmy sobie pytanie: "Co naprawd\u0119 chc\u0105 wiedzie\u0107 nasi klienci?". Odpowied\u017a by\u0142a jednoznaczna \u2013 chc\u0105 by\u0107 na bie\u017c\u0105co z trendami webdesignu, technologi\u0105, kt\xf3r\u0105 u\u017cywamy, i rzeczami, kt\xf3re robimy dla nich.\n\n## Dlaczego zacz\u0119li\u015bmy w\u0142a\u015bnie teraz?\n\nStudio Klara Queen powsta\u0142o kilka lat temu. Jednak przez d\u0142ugi czas s\u0105dzili\u015bmy, \u017ce najlepiej pokazamy si\u0119 poprzez portfolio i opinie klient\xf3w. To prawda, ale to nie wystarczy.\n\nW 2026 roku Twoja obecno\u015b\u0107 w sieci to nie tylko pi\u0119kna strona. **To rozmowa**. To Show yourself w praktyce, edukacja, autentyczne dzielenie si\u0119 swoj\u0105 wiedz\u0105 i procesem.\n\nKlienci, kt\xf3rzy nas kontaktuj\u0105, pytaj\u0105 nas rzeczy takie jak:\n- "Ile czasu trwa stworzenie strony?"\n- "Dlaczego React, a nie inny framework?"\n- "Jakie s\u0105 Wasze najnowsze projekty?"\n- "Jak dbajcie o bezpiecze\u0144stwo?"\n- "Czy rzeczywi\u015bcie mo\u017cna stworzi\u0107 profesjonaln\u0105 stron\u0119 w 48 godzinach?"\n\nZamiast odpowiada\u0107 tym samym tekstem na Messengerze, postanowili\u015bmy stworzy\u0107 tu permanent home dla naszych insights.\n\n## Co znajdziesz w Aktualno\u015bciach?\n\nKa\u017cdy artyku\u0142 to rzeczywista sytuacja, kt\xf3re prze\u017cywamy w studiu, lub wiedza, kt\xf3r\u0105 zgromadzili\u015bmy latami pracy.\n\n**B\u0119dziemy pisa\u0107 o:**\n\n1. **Case Studies** \u2013 rzeczywiste projekty, wyniki, co zadzia\u0142a\u0142o, a co nie.\n2. **Technologia** \u2013 dlaczego wybieramy React zamiast WordPress, jak dbamy o szybko\u015b\u0107 i bezpiecze\u0144stwo.\n3. **Proces** \u2013 jak naprawd\u0119 pracujemy, ile czasu zajmuje ka\u017cdy krok, co si\u0119 dzieje "od kuchni".\n4. **Nowo\u015bci i Trendy** \u2013 AI w designie, optymalizacja dla Google, mobile-first thinking.\n5. **Edukacja** \u2013 poradniki dla klient\xf3w, kt\xf3rzy chc\u0105 rozumie\u0107 swoj\u0105 stron\u0119, a nie tylko j\u0105 mie\u0107.\n\n## Dla kogo s\u0105 te artyku\u0142y?\n\n**Je\u015bli prowadzisz biznes w bran\u017cy luksusowej, us\u0142ug premium lub niszy high-end:**\n- Chcesz wiedzie\u0107, czemu warto inwestowa\u0107 w jako\u015b\u0107 kodu, a nie w "tani\u0105" stronk\u0119.\n- Zale\u017cy Ci na szybko\u015bci i bezpiecze\u0144stwie.\n- Szukasz agencji, kt\xf3ra razem z Tob\u0105 my\u015bli o biznesie, a nie tylko sprzedaje.\n\n**Je\u015bli jeste\u015b Web Designerem lub Front-end Developerem:**\n- Mo\u017cesz \u015bledzi\u0107 nasze podej\u015bcie do architekturowania aplikacji.\n- Odkryjesz, dlaczego chosen components over pages, dlaczego data centralization matters.\n- Opinie i do\u015bwiadczenie z lump\u0105 produkcji \u2013 do niejania w studiu, kt\xf3re liczy si\u0119 na ka\u017cd\u0105 sekund\u0119 \u0142adowania.\n\n## Obietnica na przysz\u0142o\u015b\u0107\n\nB\u0119dziemy tutaj konsekwentni. Nie obiecujemy artyku\u0142u co dzie\u0144 \u2013 robimy to prawid\u0142owo. Ka\u017cdy wpis to rzetelna robota, rzeczywista wiedza, a nie fake content dla algorytmu.\n\nArtyku\u0142y b\u0119d\u0105 w polszczy\u017anie, bo to nasz rynek, nasi klienci, nasza rzeczywisto\u015b\u0107.\n\n## Dzi\u0119kuj\u0119\n\nDzi\u0119kujemy Wam \u2013 klientom, kt\xf3rzy na nas pracowali, zadawali pytania i inspirowali nas do tego, by podzieli\u0107 si\u0119 swoj\u0105 wiedz\u0105 publicznie.\n\nZapraszamy na nast\u0119pne artyku\u0142y. \ud83c\udfaf\n\n---\n\n**Studio Klara Queen**  \nTworzymy luksusowe do\u015bwiadczenia cyfrowe.\n    '},{id:"czysty-kod-react-vs-wordpress",title:"Dlaczego React wygrywa z WordPressem w 2026 roku?",excerpt:"Wielu klient\xf3w pyta nas: 'Dlaczego nie WordPress?'. Odpowied\u017a jest prosta: szybko\u015b\u0107, bezpiecze\u0144stwo i kontrola. Przeczytaj, dlaczego rezygnacja z ci\u0119\u017ckich wtyczek na rzecz czystego kodu to najlepsza inwestycja w przysz\u0142o\u015b\u0107 Twojej marki.",date:"20 marca 2026",image:n(410),content:'\n# Dlaczego React wygrywa z WordPressem w 2026 roku?\n\n**20 marca 2026**\n\nPrawie ka\u017cdy nowy klient pyta nas: "Ale czemu nie WordPress? On ma te szablony, wtyczki, jest ta\u0144szy na start...". Rozumiemy ochot\u0119. WordPress wygl\u0105da na \u0142atwy. Ale \u0142atwo\u015b\u0107 na pocz\u0105tek to drogi zwrot na koniec.\n\n## Problem z WordPressem\n\nWordPress jest \u015bwietny dla blog\xf3w i prostych stron prezentacyjnych. Ale w 2026 roku, gdy klient oczekuje b\u0142yskawicznego \u0142adowania i pe\u0142nej funkcjonalno\u015bci na smartfonie \u2013 WordPress ci\u0119\u017cko oddycha.\n\n**Czemu?**\n\nKa\u017cda wtyczka to dodatkowe operacje w bazie danych, dodatkowe \u015bcie\u017cki HTTP, dodatkowe skrypty JavaScript. Strona zaprojektowana w WordPress z 15 popularnymi wtyczkami to to jak samoch\xf3d z 20 instalacjami upgrades\'\xf3w:\n- Mo\u017ce je\u017adzi\u0107, ale wolniej.\n- M\u0119czy si\u0119 na pod\u044aemach (wysokie obci\u0105\u017cenie serwera).\n- \u0141atwo si\u0119 psuje (ka\u017cda wtyczka mo\u017ce kolidowa\u0107 z inn\u0105).\n- Dro\u017cej si\u0119 utrzymuje (co miesi\u0105c jaki\u015b update, teraz bezpiecze\u0144stwo, teraz kompatybilno\u015b\u0107).\n\nDla nas przychodz\u0105 klienci, kt\xf3rzy pojawiaj\u0105 si\u0119 na ostatniej stronie wynik\xf3w Google, mimo \u017ce maj\u0105 dobre produkty. Przyczyna? Ich stron z WordPress-em \u0142aduje si\u0119 5-6 sekund.\n\n## Szybko\u015b\u0107 = Pieniadze\n\nGoogle o tym wie. Algorytm Core Web Vitals ju\u017c kilka lat temu zacz\u0105\u0142 faworyzowa\u0107 szybkie strony. Dlaczego? Bo gdy Twoja strona \u0142aduje si\u0119 2 sekundy zamiast 6, u\u017cytkownik dzwoni, kupuje, rezerwuje.\n\nMy stawiamy na React i pure JavaScript dlatego, \u017ce:\n\n### 1. **Performance \u2013 Strona \u0142aduje si\u0119 w u\u0142amku sekundy**\nReact optymalizuje DOM rendering. Zamiast prze\u0142adowywa\u0107 ca\u0142\u0105 stron\u0119 (jak robi WordPress), React zmienia tylko to, co si\u0119 zmieni\u0142o. \n\nEfekt: Przej\u015bcie z jednej podstrony na drug\u0105 to faktycznie przej\u015bcie zbli\u017cone do native app\'a \u2013 brak blikania, brak "zawieszenia".\n\n### 2. **Bezpiecze\u0144stwo \u2013 Brak wtyczek = brak "dziur"**\nKa\u017cda wtyczka WordPressa to potencjalna luka bezpiecze\u0144stwa. Hackerzy skanuj\u0105 serwery pod k\u0105tem popularnych wtyczek. Je\u015bli masz WooCommerce + Elementor + Contact Form 7, atakuj\u0105cy wie od razu, jakie exploity spr\xf3bowa\u0107.\n\nW React\'cie budujemy kod od zera. Nie ma "standardowych" backdoor\xf3w.\n\n### 3. **Skalowanie \u2013 Bez limit\xf3w**\nWordPress zaczyna narzeka\u0107, gdy masz tysi\u0105ce artyku\u0142\xf3w lub wysokie obci\u0105\u017cenie ruchu.\n\nReact skaluje si\u0119 natomiast bez problemu. Ta sama technologia, kt\xf3ra nap\u0119dza Facebooka, Instagrama, Netflixa \u2013 testowana na milionach u\u017cytkownik\xf3w.\n\n### 4. **Customizacja \u2013 Pe\u0142na kontrola**\nW WordPressie jeste\u015b ograniczony mo\u017cliwo\u015bciami szablonu i wtyczek. Co\u015b chcesz zmieni\u0107? Szukaj wtyczki, kt\xf3ra to robi. Nie ma? Musisz wynaj\u0105\u0107 PHP developera.\n\nKod React\'a to czysty JavaScript. Chcesz doda\u0107 animation, custom flow dla formularza, cokolwiek \u2013 to jest proste i szybkie.\n\n## Czy WordPress to z\u0142o?\n\nNie! WordPress jest \u015bwietny dla:\n- Blog\xf3w z du\u017c\u0105 liczb\u0105 artyku\u0142\xf3w.\n- Stron, kt\xf3re zarz\u0105dzasz sam (CMS jest intuicyjny).\n- Projekt\xf3w, gdzie ograniczony bud\u017cet na start.\n\nAle dla:\n- E-commerce z wysokim ruchem\n- SaaS aplikacji\n- Stron, kt\xf3re musz\u0105 by\u0107 b\u0142yskawiczne\n- Biznes\xf3w premium, gdzie ka\u017cda sekunda liczy si\u0119 dla konwersji\n\n...React jest po prostu lepszy.\n\n## Co to oznacza dla Ciebie?\n\nJe\u015bli powierzymy nam Twoj\u0105 stron\u0119 w React\'cie, dostaniesz:\n- \u2705 Stron\u0119, kt\xf3ra za\u0142aduje si\u0119 szybciej ni\u017c konkurencja.\n- \u2705 Wy\u017csze ranking w Google (szybko\u015b\u0107 wp\u0142ywa na SEO).\n- \u2705 Bezpiecze\u0144stwo \u2013 bez obaw o exploity z wtyczek.\n- \u2705 Mo\u017cliwo\u015b\u0107 dodawania nowych funkcji bez przemodelowywania ca\u0142o\u015bci.\n- \u2705 Brak abonamentu za "utrzymanie wtyczek" \u2013 kod trwa tak d\u0142ugo, jak chcesz.\n\n## Inwestycja vs. Wydatek\n\nNowa strona w WordPressie: tanio na start, drogo na utrzymanie.  \nNowa strona w React\'cie: inwestycja na pocz\u0105tku, cicha na utrzymanie.\n\nW 3-letniej perspektywie, ca\u0142kowity koszt posiadania strony React\'a jest MNIEJSZY ni\u017c WordPressa.\n\n## Podsumowanie\n\nTo nie jest "React vs. WordPress". To jest pytanie: **"Czy chcesz stron\u0119, czy aplikacj\u0119, kt\xf3ra buduje biznes?"**\n\nDla nas odpowied\u017a jest jasna.\n\n---\n\n**Studio Klara Queen**  \nTworzymy luksusowe do\u015bwiadczenia cyfrowe.\n    '},{id:"unikalne-grafiki-ai",title:"Nowo\u015b\u0107: Unikalne grafiki AI w cenie ka\u017cdej strony",excerpt:"Koniec z nudnymi zdj\u0119ciami z darmowych bank\xf3w, kt\xf3re ma ka\u017cda konkurentka. Od teraz tworzymy dla Ciebie klimat premium za pomoc\u0105 Sztucznej Inteligencji \u2013 bez dodatkowych koszt\xf3w.",date:"25 marca 2026",image:n(430),content:'\n# Nowo\u015b\u0107: Unikalne grafiki AI w cenie ka\u017cdej strony\n\n**25 marca 2026**\n\nWiemy, \u017ce najwi\u0119kszym problemem przy tworzeniu pi\u0119knej strony jest brak profesjonalnych zdj\u0119\u0107.\n\nSesje fotograficzne? Drogie. Darmowe zdj\u0119cia z Pexels lub Unsplash? Ka\u017cdy ma te same. Kupowanie stock\xf3w? Kolejny wydatek.\n\nDzi\u015b zmienili\u015bmy podej\u015bcie.\n\n## Problem: Ka\u017cda strona wygl\u0105da tak samo\n\nPrzechodz\u0105c po internecie, widzisz ten sam problem w 80% stron luksusowych:\n- Salon urody \u2013 kobieta z maseczk\u0105 ze stocku.\n- Kancelaria prawna \u2013 ludzie w garniturach, patrz\u0105cy ponad ramieniem.\n- Studio graficzne \u2013 abstrakcyjne colourful gradients.\n\nDlaczego? Bo wszyscy bior\u0105 je z tych samych bezp\u0142atnych baz.\n\nTwoja konkurentka wygl\u0105da jak Ty. Ty wygl\u0105dasz jak Ona. Nikt si\u0119 nie wyr\xf3\u017cnia.\n\n## Rozwi\u0105zanie: Generowanie grafik przez AI\n\nOd marca 2026, ka\u017cdy nowy projekt w Studio Klara Queen zawiera pakiet **unikalnych, wysokiej jako\u015bci grafik wygenerowanych przez Sztuczn\u0105 Inteligencj\u0119**.\n\nTo oznacza:\n- Grafiki dostosowane do Twojej bran\u017cy i kolorystyki.\n- Zestawienie kolor\xf3w, kt\xf3re pasuje do Twojej wizji.\n- Zero duplikat\xf3w \u2013 nawet je\u015bli u\u017cywamy tego samego promptu, AI generuje za ka\u017cdym razem co\u015b innego.\n- Komercyjne prawa \u2013 mo\u017cesz u\u017cywa\u0107 ich, jak chcesz.\n\n## Jak to wygl\u0105da w praktyce?\n\nPowiedzmy, \u017ce prowadzisz salon urody. Zamiast szuka\u0107 "woman with facial mask" w stocku, generujemy:\n\n**Prompt \u2192 AI \u2192 Unikalna grafika**\n\n"Minimalistyczne wn\u0119trze salonu urody, kobieta o w\u0142osach z balayage, naturalne o\u015bwietlenie, be\u017cowo-z\u0142ota kolorystyka, luksusowe detale, profesjonalna fotografia"\n\nRezultat? Grafika, kt\xf3ra:\n- \u2705 Dok\u0142adnie pasuje do Twojej marki.\n- \u2705 Nikt inny jej nie ma.\n- \u2705 Wygl\u0105da jak profesjonalna fotografia (a nie jak AI).\n- \u2705 Mo\u017cna j\u0105 bezp\u0142atnie edytowa\u0107 i remixowa\u0107.\n\n## Koszt dla Ciebie?\n\nZero. To jest wliczone w cenie realizacji strony.\n\nWydajemy na to czas, aby Twoja strona wygl\u0105da\u0142a premiumowo. Dlaczego? Bo wiemy, \u017ce pierwsza strona, kt\xf3r\u0105 widzi potencjalny klient, decyduje o 70% jego opinii o Twojej marce.\n\n## Czy to \u0437\u0430\u043c\u0435\u043d\u0438 fotografi\u0119?\n\nNie ca\u0142kowicie. AI grafiki to \u015bmia\u0142y uzupe\u0142niacz. Je\u015bli masz w\u0142asne zdj\u0119cia (np. zrealizowanych projekt\xf3w), u\u017cywamy ich.\n\nAle gdy chodzi o hero image, sekcje dekoracyjne, t\u0142a \u2013 AI przychodzi z pomoc\u0105.\n\n## Przyk\u0142ady gdzie to u\u017cywamy\n\n1. **Hero section** \u2013 du\u017ca grafika na wej\u015bciu strony.\n2. **Sekcje z tekstem** \u2013 grafiki towarzysz\u0105ce opisom us\u0142ug.\n3. **Testimonials background** \u2013 unikalne t\u0142a dla komentarzy klient\xf3w.\n4. **Social media** \u2013 grafiki do post\xf3w na Instagramie, LinkedIn.\n5. **Landing pages** \u2013 gdy tworzysz mini kampani\u0119, AI dostarcza materia\u0142\xf3w wizualnych.\n\n## Etyka i transparentno\u015b\u0107\n\nPytamy si\u0119: "Czy to OK, \u017ceby u\u017cywa\u0107 grafiki AI?"\n\nNasza odpowied\u017a: **Tak, gdy robimy to transparentnie i z intencj\u0105 rozs\u0105dn\u0105**.\n\nJe\u015bli twoja strona zawiera AI grafiki, to zwyczajna i naturalna rzecz w 2026. Ca\u0142y internet to robi. Wa\u017cne, \u017ceby:\n- \u2705 By\u0142y odpowiedniej jako\u015bci (my na to patrzymy).\n- \u2705 Pasowa\u0142y do Twojej marki (robimy tyle iteracji, ile trzeba).\n- \u2705 Nie by\u0142y oszustwem (nie gramy, \u017ce to Twoje fotografie).\n\n## Co si\u0119 zmienia dla Ciebie?\n\nGdy podpisujemy umow\u0119 na now\u0105 stron\u0119, dodatkowo dostaniesz:\n- 10-15 unikalnych grafik do u\u017cytku na stronie.\n- Mo\u017cliwo\u015b\u0107 edycji (mog\u0119 Ci rederowa\u0107 je wiele razy).\n- Prawa komercyjne (mo\u017cesz je sprzedawa\u0107, je\u015bli chcesz).\n\nTo standard od marca 2026.\n\n## Czy to oznacza, \u017ce robimy mniej pracy?\n\nWr\u0119cz przeciwnie. Generowanie dobrych grafik AI to umiej\u0119tno\u015b\u0107. Trzeba wiedzie\u0107:\n- Jak pisa\u0107 prompty.\n- Jak ponawia\u0107 generowanie, a\u017c b\u0119dzie "to".\n- Jak edytowa\u0107 wype\u0142niane cz\u0119\u015bci.\n- Jakie narz\u0119dzia u\u017cywa\u0107 (Midjourney, DALL-E, Stable Diffusion \u2013 ka\u017cde ma swoje plusy).\n\nTo dodaje nam godzin pracy, ale efekt ko\u0144cowy jest tak znacznie lepszy, \u017ce uwa\u017camy to za warte inwestycji.\n\n## Podsumowanie\n\nStudio Klara Queen chce, \u017ceby\u015b si\u0119 wyr\xf3\u017cnia\u0142. Grafiki AI to narz\u0119dzie, kt\xf3re to umo\u017cliwia.\n\nTwoja strona nie b\u0119dzie wygl\u0105da\u0107 jak ka\u017cda inna. B\u0119dzie wygl\u0105da\u0107 jak TWOJA.\n\n---\n\n**Studio Klara Queen**  \nTworzymy luksusowe do\u015bwiadczenia cyfrowe.\n    '},{id:"proces-48h",title:"Jak oddajemy gotowy projekt w 48h roboczych? Poznaj nasz proces.",excerpt:"48 godzin roboczych \u2013 tyle potrzebujemy, by Twoja wizja sta\u0142a si\u0119 rzeczywisto\u015bci\u0105. Jak to robimy bez straty na jako\u015bci? Zaufanie, przygotowanie i pe\u0142ne skupienie.",date:"30 marca 2026",image:n(682),content:'\n# Jak oddajemy gotowy projekt w 48h roboczych? Poznaj nasz proces.\n\n**30 marca 2026**\n\nDla wielu agencji stworzenie prostej strony trwa miesi\u0105cami. Spotkania, korekty, kolejne wersje, jeszcze jedna zmiana w nag\u0142\xf3wku...\n\nU nas proces zamyka si\u0119 w **48 godzinach roboczych** (co to oznacza \u2013 dalej w artykule). Jak to robimy bez straty na jako\u015bci? Poznaj nasz proces "od kuchni".\n\n## Czym s\u0105 "48h robocze"?\n\nZanim wejdziemy w szczeg\xf3\u0142y \u2013 wyja\u015bnienie.\n\n**48h roboczych \u2260 48 godzin z rz\u0119du**\n\nTo oznacza:\n- 6 dni pracy (poniedzia\u0142ek \u2013 sobota).\n- 8 godzin dziennie, bez nocnych maraton\xf3w.\n- Pe\u0142na koncentracja na JEDNYM projekcie naraz.\n- Dni powszednie (weekendy to czas na recharge i \u015bwie\u017co\u015b\u0107 my\u015bli).\n\nDlaczego to wa\u017cne? Bo wypocz\u0119ty deweloper to brak bug\xf3w, \u015bwie\u017ce spojrzenie na design i integracja testowa w ka\u017cdym kroku.\n\n## Kluczowe elementy naszego procesu\n\n### 1. **Ankieta na pocz\u0105tku (przed podpisaniem umowy)**\n\nZanim cokolwiek kodujemy, prosimy Ci\u0119 o szczeg\xf3\u0142owe wype\u0142nienie ankiety online:\n\n- **O Tobie**: Bran\u017ca, docelowy klient, co go tu sprowadza.\n- **O stronie**: Jaka ma by\u0107 struktura, jakie sekcje, czy s\u0105 substrony.\n- **O brandzie**: Kolory, fonty, ikonografia, ton komunikacji.\n- **O funkcjach**: Formularze kontaktowe, galerie, integracje (np. Calendly).\n\nCzemu to wa\u017cne? Bo dzi\u0119ki temu oszcz\u0119dzamy 10 godzin na "dogadywaniu szczeg\xf3\u0142\xf3w".\n\n### 2. **Przygotowana baza fundament\xf3w kodu (nasze supermoce)**\n\nPrzez 5 lat pracy na portfolio realnych projekt\xf3w, wybudowali\u015bmy sobie **autorsk\u0105 bibliotek\u0119 komponent\xf3w React\'a**, setup\'u styled-components, i best practices\'\xf3w.\n\nTo nie jest kopiuj-wklej z CDN\'u czy szablon kupiony z Gumroad\'a. To jest kod testowany na produkcji.\n\nCo obejmuje:\n- \u2705 Responsive breakpoints (mobile, tablet, desktop \u2013 dopracowywane latami).\n- \u2705 Global theme (kolory, spacingi, typografia).\n- \u2705 Reusable komponenty (Button, Card, Section, Hero, CTA).\n- \u2705 SEO setup (meta tags, structured data).\n- \u2705 Performance optimizations (lazy loading, code splitting).\n\nDzi\u0119ki temu, zamiast pisa\u0107 stron\u0119 od zera, zaczynamy od 80% gotowego fundamentu, a my focusujemy si\u0119 na Twoje unique selling points.\n\n### 3. **Struktura roboty w 48h**\n\n**Dzie\u0144 1 (8h): Setup + Design \u2192 HTML+CSS**\n\n- Godzina 1: Setup projektu (git repo, variables, inicjal build).\n- Godziny 2-3: Konwersja Twojej koncepcji na komponenty React\'a.\n- Godziny 4-8: Kodowanie sekcji (Hero, Features, CTA, Footer).\n- End of day: Review + git commit.\n\n**Dzie\u0144 2 (8h): Integracja + Testing**\n\n- Godziny 9-10: Finalizacja stylu, responsywno\u015b\u0107 na mobile/tablet.\n- Godziny 11-13: Integracja formularzy, dynamicznych sekcji.\n- Godziny 14-15: Testing (desktop, mobile, przegl\u0105darki).\n- Godziny 16-17: Optimizations (performance, SEO, dost\u0119pno\u015b\u0107).\n- End of day: Last review, dokumentacja, transfer Ci klucze.\n\n**W praktyce:**\n- Poniedzia\u0142ek 8-16h: Dzie\u0144 1.\n- Wtorek 8-16h: Dzie\u0144 2.\n- \u015aroda-pi\u0105tek: Uwagi od Ciebie, microfix\'y, deployment.\n\n### 4. **Narz\u0119dzia, kt\xf3re nam bij\u0105 rekordy**\n\nU\u017cywamy:\n\n- **React** \u2013 szybko si\u0119 pisze, struktura jest czysta.\n- **styled-components** \u2013 CSS w JS, nie musimy \u017conglowa\u0107 plikami.\n- **Vite** \u2013 ultra szybki dev server (live refresh w jedn\u0105 sekund\u0119).\n- **Git** \u2013 hist\xf3ria ka\u017cdej zmiany, \u0142atwo wycofywa\u0107.\n- **Vercel** \u2013 deployment (git push = live strona w 30 sekund).\n\nKa\u017cde narz\u0119dzie zosta\u0142o wybrane, bo **oszcz\u0119dza nam rzeczywisty czas**.\n\n### 5. **Komunikacja = Nie ma niedopowiedze\u0144**\n\nPrzez ca\u0142y proces jeste\u015bmy dost\u0119pni. Je\u015bli masz pytanie o progres, dostajesz odpowied\u017a natychmiast.\n\nDzie\u0144 1 \u2013 widzisz live preview.  \nDzie\u0144 2 \u2013 testujemy razem (ty na Twoim telefonie, ja na moim).\n\nBrak "na koniec podam Ci plik", brak niespodzianek.\n\n## Czemu to si\u0119 udaje?\n\n### Pow\xf3d 1: Skupienie\nPracujemy na JEDNYM projekcie naraz. Brak context switchingu. Brak "oh, a pami\u0119taj \u017ceby dla projektu X zmieni\u0107 Y".\n\n### Pow\xf3d 2: Przygotowanie\n90% pracy mentalna robota dzieje si\u0119 przed "start". Ankieta, planning, design konsultacja.\n\n### Pow\xf3d 3: Do\u015bwiadczenie\nZbudowali\u015bmy decyzje. Wiemy dok\u0142adnie, co dzia\u0142a i co nie. Nie eksperymentujemy na Twoim projekcie.\n\n### Pow\xf3d 4: Zesp\xf3\u0142\nLiczymy na siebie. Nie ma "czekam na designer", bo designer siedzi obok. Nie ma "a co frontend?", bo to ja pisz\u0119 frontend i t\u0119 decyzj\u0119 podejm\u0119.\n\n## Co NOT jest wliczone w 48h?\n\nTransparent komunikacja \u2013 co wchodzi, a co nie:\n\n### \u274c Nie wchodzi:\n- Custom AI integracje lub machine learning (to +5h).\n- Payment gateway setup (np. Stripe) \u2013 to zaawansowa\u0142o integracje.\n- Zaawansowana CMS backend \u2013 je\u015bli chcesz sam dodawa\u0107 artyku\u0142y, to +10h.\n- Fotosesja \u2013 ty dostarczasz zdj\u0119cia lub my generujemy przez AI (co jest wliczone).\n\n### \u2705 Wchodzi:\n- Responsywna strona (mobile-first).\n- SEO optimization.\n- Formularze (email, contact).\n- Social media linkage.\n- Unikalne AI grafiki.\n- Hosting i deploy na Vercel.\n\n## Po 48h \u2013 co dalej?\n\nStrona jest LIVE. Ale to nie koniec relacji.\n\nOferujemy:\n- **Pierwszy miesi\u0105c**: Darmowe microfix\'y (korekta tekstu, drobne zmiany w layoutcie).\n- **Potem**: Maintenance plan (opcjonalnie) za sta\u0142\u0105 miesi\u0119czn\u0105 kwot\u0119.\n\nNie robimy modelu "zap\u0142aci\u0142 i nigdy wi\u0119cej si\u0119 nie odezw\u0119".\n\n## Podsumowanie: Czemu jeste\u015bmy szybcy?\n\n| Element | My | Tradycyjna Agencja |\n| --- | --- | --- |\n| Przygotowanie | Autorska biblioteka | Szukanie szablonu |\n| Komunikacja | Real-time | Maile raz dziennie |\n| Skupienie | Jeden projekt naraz | 5 projekt\xf3w w trakcie |\n| Setup | 30 min | 4 godziny |\n| Testing | Iteracyjne (ci\u0119gle) | Na koniec (boom, bugs) |\n| **Rezultat** | **48h** | **4-8 tygodni** |\n\n## Czy to oznacza, \u017ce "taniuro"?\n\nNie. To oznacza, \u017ce szanujemy Tw\xf3j czas i sw\xf3j.\n\nSzybko\u015b\u0107 to nie spam. To precyzja. To znaczy: mniej spotka\u0144, mniej maili, wi\u0119cej gotowego kodu.\n\nJe\u015bli chcesz stworzenia pi\u0119knej, szybkiej, bezpiecznej strony \u2013 bez dramatu i bez czekania \u2013 jeste\u015bmy dla Ciebie.\n\n---\n\n**Studio Klara Queen**  \nTworzymy luksusowe do\u015bwiadczenia cyfrowe.\n    '}];const $u=function(){const e=[...Tu].sort((e,t)=>{const n=new Date(e.date.split(" ").reverse().join(" "));return new Date(t.date.split(" ").reverse().join(" "))-n});return(0,zr.jsx)(gu,{children:(0,zr.jsxs)(yu,{children:[(0,zr.jsxs)(bu,{children:[(0,zr.jsx)(wu,{children:"Aktualno\u015bci"}),(0,zr.jsx)(xu,{children:"B\u0105d\u017a na bie\u017c\u0105co z najnowszymi wpisami z naszego bloga. Dzielimy si\u0119 wiedz\u0105 o technologii, designie i procesie tworzenia luksusowych do\u015bwiadcze\u0144 cyfrowych."})]}),(0,zr.jsx)(vu,{children:e.map(e=>(0,zr.jsx)(ku,{children:(0,zr.jsxs)(yt,{to:`/blog/${e.id}`,children:[(0,zr.jsx)(zu,{src:e.image,alt:e.title}),(0,zr.jsxs)(ju,{children:[(0,zr.jsx)(Su,{children:e.date}),(0,zr.jsx)(Cu,{children:e.title}),(0,zr.jsx)(Eu,{children:e.excerpt}),(0,zr.jsx)(Pu,{children:"Czytaj wi\u0119cej"})]})]})},e.id))})]})})},_u=gr.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,Nu=gr.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,Ou=gr.div`
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
`,Ru=gr.h1`
  font-size: clamp(2rem, 6vw, 3rem);
  font-family: "Cormorant Garamond", serif;
  color: ${xr.white};
  margin: 0 0 20px 0;
  font-weight: 700;
  line-height: 1.3;
`,Lu=gr.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-weight: 500;
  letter-spacing: 1px;
`,Mu=gr.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: clamp(40px, 8vw, 60px);
  display: block;
`,Du=gr.div`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  line-height: 1.8;
  letter-spacing: 0.3px;

  h2 {
    font-size: clamp(1.4rem, 3vw, 1.8rem);
    font-family: "Cormorant Garamond", serif;
    color: ${xr.white};
    margin: clamp(40px, 6vw, 60px) 0 20px 0;
    font-weight: 600;
    line-height: 1.3;
  }

  h3 {
    font-size: clamp(1.1rem, 2.2vw, 1.4rem);
    color: ${xr.white};
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
    color: ${xr.gold};
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
      color: ${xr.gold};
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
    color: ${xr.gold};
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  blockquote {
    border-left: 4px solid ${xr.gold};
    padding-left: 20px;
    margin: 30px 0;
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
  }
`,Au=gr.div`
  margin-top: clamp(60px, 10vw, 100px);
  padding-top: clamp(40px, 6vw, 60px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,Iu=gr.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${xr.gold};
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
`;const Fu=function(){const{id:e}=me(),t=Tu.find(t=>t.id===e);return t?(0,zr.jsx)(_u,{children:(0,zr.jsxs)(Nu,{children:[(0,zr.jsxs)(Ou,{children:[(0,zr.jsx)(Ru,{children:t.title}),(0,zr.jsx)(Lu,{children:t.date})]}),(0,zr.jsx)(Mu,{src:t.image,alt:t.title}),(0,zr.jsx)(Du,{dangerouslySetInnerHTML:{__html:t.content}}),(0,zr.jsx)(Au,{children:(0,zr.jsx)(yt,{to:"/blog",children:(0,zr.jsx)(Iu,{children:"Wr\xf3\u0107 do aktualno\u015bci"})})})]})}):(0,zr.jsx)(_u,{children:(0,zr.jsxs)(Nu,{children:[(0,zr.jsx)(Ou,{children:(0,zr.jsx)(Ru,{children:"Artyku\u0142 nie znaleziony"})}),(0,zr.jsx)(Au,{children:(0,zr.jsx)(yt,{to:"/blog",as:Iu,children:"Wr\xf3\u0107 do aktualno\u015bci"})})]})})};const Wu=function(){return(0,zr.jsxs)(Fo,{children:[(0,zr.jsx)(Io,{}),(0,zr.jsx)(jr,{}),(0,zr.jsx)(so,{}),(0,zr.jsx)(Ao,{}),(0,zr.jsx)(Wo,{children:(0,zr.jsxs)(Me,{children:[(0,zr.jsx)(Re,{path:"/",element:(0,zr.jsx)(Bi,{})}),(0,zr.jsx)(Re,{path:"/about",element:(0,zr.jsx)(Il,{})}),(0,zr.jsx)(Re,{path:"/offer",element:(0,zr.jsx)(hu,{})}),(0,zr.jsx)(Re,{path:"/offer/:id",element:(0,zr.jsx)(hu,{})}),(0,zr.jsx)(Re,{path:"/blog",element:(0,zr.jsx)($u,{})}),(0,zr.jsx)(Re,{path:"/blog/:id",element:(0,zr.jsx)(Fu,{})}),(0,zr.jsx)(Re,{path:"/questions",element:(0,zr.jsx)(ts,{})}),(0,zr.jsx)(Re,{path:"/cooperation",element:(0,zr.jsx)(Zs,{})})]})}),(0,zr.jsx)(Do,{})]})};o.createRoot(document.getElementById("root")).render((0,zr.jsx)(a.StrictMode,{children:(0,zr.jsx)(ht,{basename:"/klara-queen",children:(0,zr.jsx)(Wu,{})})}))})();
//# sourceMappingURL=main.c0049cf6.js.map