/*! For license information please see main.323ffb78.js.LICENSE.txt */
(()=>{"use strict";var e={4(e,t,n){var r=n(853),i=n(43),a=n(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(l(e)!==e)throw Error(o(188))}function h(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=h(e)))return t;e=e.sibling}return null}var p=Object.assign,f=Symbol.for("react.element"),m=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),x=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy");Symbol.for("react.scope");var j=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var T=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var C=Symbol.iterator;function I(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=C&&e[C]||e["@@iterator"])?e:null}var A=Symbol.for("react.client.reference");function P(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===A?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case y:return"Fragment";case b:return"Profiler";case w:return"StrictMode";case z:return"Suspense";case S:return"SuspenseList";case j:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case g:return"Portal";case x:return e.displayName||"Context";case v:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case _:return null!==(t=e.displayName||null)?t:P(e.type)||"Memo";case E:t=e._payload,e=e._init;try{return P(e(t))}catch(ml){}}return null}var R=Array.isArray,N=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},L=[],M=-1;function $(e){return{current:e}}function F(e){0>M||(e.current=L[M],L[M]=null,M--)}function U(e,t){M++,L[M]=e.current,e.current=t}var B,V,H=$(null),W=$(null),G=$(null),K=$(null);function q(e,t){switch(U(G,t),U(W,e),U(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?wd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=bd(t=wd(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(H),U(H,e)}function Q(){F(H),F(W),F(G)}function Y(e){null!==e.memoizedState&&U(K,e);var t=H.current,n=bd(t,e.type);t!==n&&(U(W,e),U(H,n))}function J(e){W.current===e&&(F(H),F(W)),K.current===e&&(F(K),dh._currentValue=O)}function X(e){if(void 0===B)try{throw Error()}catch(ml){var t=ml.stack.trim().match(/\n( *(at )?)/);B=t&&t[1]||"",V=-1<ml.stack.indexOf("\n    at")?" (<anonymous>)":-1<ml.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+B+e+V}var Z=!1;function ee(e,t){if(!e||Z)return"";Z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(ml){var r=ml}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}e.call(n.prototype)}}else{try{throw Error()}catch(a){r=a}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(o){if(o&&r&&"string"===typeof o.stack)return[o.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var l=o.split("\n"),c=s.split("\n");for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===c.length)for(r=l.length-1,i=c.length-1;1<=r&&0<=i&&l[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==c[i]){if(1!==r||1!==i)do{if(r--,0>--i||l[r]!==c[i]){var u="\n"+l[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=i);break}}}finally{Z=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?X(n):""}function te(e,t){switch(e.tag){case 26:case 27:case 5:return X(e.type);case 16:return X("Lazy");case 13:return e.child!==t&&null!==t?X("Suspense Fallback"):X("Suspense");case 19:return X("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return X("Activity");default:return""}}function ne(e){try{var t="",n=null;do{t+=te(e,n),n=e,e=e.return}while(e);return t}catch(ml){return"\nError generating stack: "+ml.message+"\n"+ml.stack}}var re=Object.prototype.hasOwnProperty,ie=r.unstable_scheduleCallback,ae=r.unstable_cancelCallback,oe=r.unstable_shouldYield,se=r.unstable_requestPaint,le=r.unstable_now,ce=r.unstable_getCurrentPriorityLevel,ue=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,he=r.unstable_NormalPriority,pe=r.unstable_LowPriority,fe=r.unstable_IdlePriority,me=r.log,ge=r.unstable_setDisableYieldValue,ye=null,we=null;function be(e){if("function"===typeof me&&ge(e),we&&"function"===typeof we.setStrictMode)try{we.setStrictMode(ye,e)}catch(t){}}var ve=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(xe(e)/ke|0)|0},xe=Math.log,ke=Math.LN2;var ze=256,Se=262144,_e=4194304;function Ee(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function je(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=134217727&r;return 0!==s?0!==(r=s&~a)?i=Ee(r):0!==(o&=s)?i=Ee(o):n||0!==(n=s&~e)&&(i=Ee(n)):0!==(s=r&~a)?i=Ee(s):0!==o?i=Ee(o):n||0!==(n=r&~e)&&(i=Ee(n)),0===i?0:0!==t&&t!==i&&0===(t&a)&&((a=i&-i)>=(n=t&-t)||32===a&&0!==(4194048&n))?t:i}function Te(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Ce(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ie(){var e=_e;return 0===(62914560&(_e<<=1))&&(_e=4194304),e}function Ae(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pe(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Re(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ve(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function Ne(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function De(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:Oe(n))&(e.suspendedLanes|t))?0:n}function Oe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Le(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Me(){var e=D.p;return 0!==e?e:void 0===(e=window.event)?32:jh(e.type)}function $e(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var Fe=Math.random().toString(36).slice(2),Ue="__reactFiber$"+Fe,Be="__reactProps$"+Fe,Ve="__reactContainer$"+Fe,He="__reactEvents$"+Fe,We="__reactListeners$"+Fe,Ge="__reactHandles$"+Fe,Ke="__reactResources$"+Fe,qe="__reactMarker$"+Fe;function Qe(e){delete e[Ue],delete e[Be],delete e[He],delete e[We],delete e[Ge]}function Ye(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ve]||n[Ue]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Ld(e);null!==e;){if(n=e[Ue])return n;e=Ld(e)}return t}n=(e=n).parentNode}return null}function Je(e){if(e=e[Ue]||e[Ve]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function Xe(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function Ze(e){var t=e[Ke];return t||(t=e[Ke]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[qe]=!0}var tt=new Set,nt={};function rt(e,t){it(e,t),it(e+"Capture",t)}function it(e,t){for(nt[e]=t,e=0;e<t.length;e++)tt.add(t[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},st={};function lt(e,t,n){if(i=t,re.call(st,i)||!re.call(ot,i)&&(at.test(i)?st[i]=!0:(ot[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var i}function ct(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function ut(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ht(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function pt(e){if(!e._valueTracker){var t=ht(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ht(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function mt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var gt=/[\n"\\]/g;function yt(e){return e.replace(gt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function wt(e,t,n,r,i,a,o,s){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?vt(e,o,dt(t)):null!=n?vt(e,o,dt(n)):null!=r&&e.removeAttribute("value"),null==i&&null!=a&&(e.defaultChecked=!!a),null!=i&&(e.checked=i&&"function"!==typeof i&&"symbol"!==typeof i),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+dt(s):e.removeAttribute("name")}function bt(e,t,n,r,i,a,o,s){if(null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.type=a),null!=t||null!=n){if(!("submit"!==a&&"reset"!==a||void 0!==t&&null!==t))return void pt(e);n=null!=n?""+dt(n):"",t=null!=t?""+dt(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:i)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o),pt(e)}function vt(e,t,n){"number"===t&&mt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function kt(e,t,n){null==t||((t=""+dt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+dt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function zt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(R(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=dt(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),pt(e)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var _t=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Et(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||_t.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function jt(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Et(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&Et(e,a,t[a])}function Tt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),It=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function At(e){return It.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pt(){}var Rt=null;function Nt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Dt=null,Ot=null;function Lt(e){var t=Je(e);if(t&&(e=t.stateNode)){var n=e[Be]||null;e:switch(e=t.stateNode,t.type){case"input":if(wt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Be]||null;if(!i)throw Error(o(90));wt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ft(r)}break e;case"textarea":kt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&xt(e,!!n.multiple,t,!1)}}}var Mt=!1;function $t(e,t,n){if(Mt)return e(t,n);Mt=!0;try{return e(t)}finally{if(Mt=!1,(null!==Dt||null!==Ot)&&(eu(),Dt&&(t=Dt,e=Ot,Ot=Dt=null,Lt(t),e)))for(t=0;t<e.length;t++)Lt(e[t])}}function Ft(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Be]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Ut=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Bt=!1;if(Ut)try{var Vt={};Object.defineProperty(Vt,"passive",{get:function(){Bt=!0}}),window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,Vt)}catch(Xh){Bt=!1}var Ht=null,Wt=null,Gt=null;function Kt(){if(Gt)return Gt;var e,t,n=Wt,r=n.length,i="value"in Ht?Ht.value:Ht.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Gt=i.slice(e,1<t?1-t:void 0)}function qt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Qt(){return!0}function Yt(){return!1}function Jt(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Qt:Yt,this.isPropagationStopped=Yt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Qt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Qt)},persist:function(){},isPersistent:Qt}),t}var Xt,Zt,en,tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nn=Jt(tn),rn=p({},tn,{view:0,detail:0}),an=Jt(rn),on=p({},rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&"mousemove"===e.type?(Xt=e.screenX-en.screenX,Zt=e.screenY-en.screenY):Zt=Xt=0,en=e),Xt)},movementY:function(e){return"movementY"in e?e.movementY:Zt}}),sn=Jt(on),ln=Jt(p({},on,{dataTransfer:0})),cn=Jt(p({},rn,{relatedTarget:0})),un=Jt(p({},tn,{animationName:0,elapsedTime:0,pseudoElement:0})),dn=Jt(p({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),hn=Jt(p({},tn,{data:0})),pn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=mn[e])&&!!t[e]}function yn(){return gn}var wn=Jt(p({},rn,{key:function(e){if(e.key){var t=pn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=qt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?fn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yn,charCode:function(e){return"keypress"===e.type?qt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?qt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),bn=Jt(p({},on,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),vn=Jt(p({},rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yn})),xn=Jt(p({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),kn=Jt(p({},on,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),zn=Jt(p({},tn,{newState:0,oldState:0})),Sn=[9,13,27,32],_n=Ut&&"CompositionEvent"in window,En=null;Ut&&"documentMode"in document&&(En=document.documentMode);var jn=Ut&&"TextEvent"in window&&!En,Tn=Ut&&(!_n||En&&8<En&&11>=En),Cn=String.fromCharCode(32),In=!1;function An(e,t){switch(e){case"keyup":return-1!==Sn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Rn=!1;var Nn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Nn[e.type]:"textarea"===t}function On(e,t,n,r){Dt?Ot?Ot.push(r):Ot=[r]:Dt=r,0<(t=id(t,"onChange")).length&&(n=new nn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ln=null,Mn=null;function $n(e){Yu(e,0)}function Fn(e){if(ft(Xe(e)))return e}function Un(e,t){if("change"===e)return t}var Bn=!1;if(Ut){var Vn;if(Ut){var Hn="oninput"in document;if(!Hn){var Wn=document.createElement("div");Wn.setAttribute("oninput","return;"),Hn="function"===typeof Wn.oninput}Vn=Hn}else Vn=!1;Bn=Vn&&(!document.documentMode||9<document.documentMode)}function Gn(){Ln&&(Ln.detachEvent("onpropertychange",Kn),Mn=Ln=null)}function Kn(e){if("value"===e.propertyName&&Fn(Mn)){var t=[];On(t,Mn,e,Nt(e)),$t($n,t)}}function qn(e,t,n){"focusin"===e?(Gn(),Mn=n,(Ln=t).attachEvent("onpropertychange",Kn)):"focusout"===e&&Gn()}function Qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Fn(Mn)}function Yn(e,t){if("click"===e)return Fn(t)}function Jn(e,t){if("input"===e||"change"===e)return Fn(t)}var Xn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Zn(e,t){if(Xn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!re.call(t,i)||!Xn(e[i],t[i]))return!1}return!0}function er(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tr(e,t){var n,r=er(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=er(r)}}function nr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?nr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function rr(e){for(var t=mt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=mt((e=t.contentWindow).document)}return t}function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ar=Ut&&"documentMode"in document&&11>=document.documentMode,or=null,sr=null,lr=null,cr=!1;function ur(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;cr||null==or||or!==mt(r)||("selectionStart"in(r=or)&&ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},lr&&Zn(lr,r)||(lr=r,0<(r=id(sr,"onSelect")).length&&(t=new nn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=or)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},pr={},fr={};function mr(e){if(pr[e])return pr[e];if(!hr[e])return e;var t,n=hr[e];for(t in n)if(n.hasOwnProperty(t)&&t in fr)return pr[e]=n[t];return e}Ut&&(fr=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);var gr=mr("animationend"),yr=mr("animationiteration"),wr=mr("animationstart"),br=mr("transitionrun"),vr=mr("transitionstart"),xr=mr("transitioncancel"),kr=mr("transitionend"),zr=new Map,Sr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(e,t){zr.set(e,t),rt(t,[e])}Sr.push("scrollEnd");var Er="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},jr=[],Tr=0,Cr=0;function Ir(){for(var e=Tr,t=Cr=Tr=0;t<e;){var n=jr[t];jr[t++]=null;var r=jr[t];jr[t++]=null;var i=jr[t];jr[t++]=null;var a=jr[t];if(jr[t++]=null,null!==r&&null!==i){var o=r.pending;null===o?i.next=i:(i.next=o.next,o.next=i),r.pending=i}0!==a&&Nr(n,i,a)}}function Ar(e,t,n,r){jr[Tr++]=e,jr[Tr++]=t,jr[Tr++]=n,jr[Tr++]=r,Cr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Pr(e,t,n,r){return Ar(e,t,n,r),Dr(e)}function Rr(e,t){return Ar(e,null,null,t),Dr(e)}function Nr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var i=!1,a=e.return;null!==a;)a.childLanes|=n,null!==(r=a.alternate)&&(r.childLanes|=n),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(i=!0)),e=a,a=a.return;return 3===e.tag?(a=e.stateNode,i&&null!==t&&(i=31-ve(n),null===(r=(e=a.hiddenUpdates)[i])?e[i]=[t]:r.push(t),t.lane=536870912|n),a):null}function Dr(e){if(50<Wc)throw Wc=0,Gc=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Or={};function Lr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mr(e,t,n,r){return new Lr(e,t,n,r)}function $r(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Fr(e,t){var n=e.alternate;return null===n?((n=Mr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ur(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Br(e,t,n,r,i,a){var s=0;if(r=e,"function"===typeof e)$r(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,H.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case j:return(e=Mr(31,n,t,i)).elementType=j,e.lanes=a,e;case y:return Vr(n.children,i,a,t);case w:s=8,i|=24;break;case b:return(e=Mr(12,n,t,2|i)).elementType=b,e.lanes=a,e;case z:return(e=Mr(13,n,t,i)).elementType=z,e.lanes=a,e;case S:return(e=Mr(19,n,t,i)).elementType=S,e.lanes=a,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case x:s=10;break e;case v:s=9;break e;case k:s=11;break e;case _:s=14;break e;case E:s=16,r=null;break e}s=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=Mr(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Vr(e,t,n,r){return(e=Mr(7,e,r,t)).lanes=n,e}function Hr(e,t,n){return(e=Mr(6,e,null,t)).lanes=n,e}function Wr(e){var t=Mr(18,null,null,0);return t.stateNode=e,t}function Gr(e,t,n){return(t=Mr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Kr=new WeakMap;function qr(e,t){if("object"===typeof e&&null!==e){var n=Kr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ne(t)},Kr.set(e,t),t)}return{value:e,source:t,stack:ne(t)}}var Qr=[],Yr=0,Jr=null,Xr=0,Zr=[],ei=0,ti=null,ni=1,ri="";function ii(e,t){Qr[Yr++]=Xr,Qr[Yr++]=Jr,Jr=e,Xr=t}function ai(e,t,n){Zr[ei++]=ni,Zr[ei++]=ri,Zr[ei++]=ti,ti=e;var r=ni;e=ri;var i=32-ve(r)-1;r&=~(1<<i),n+=1;var a=32-ve(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ni=1<<32-ve(t)+i|n<<i|r,ri=a+e}else ni=1<<a|n<<i|r,ri=e}function oi(e){null!==e.return&&(ii(e,1),ai(e,1,0))}function si(e){for(;e===Jr;)Jr=Qr[--Yr],Qr[Yr]=null,Xr=Qr[--Yr],Qr[Yr]=null;for(;e===ti;)ti=Zr[--ei],Zr[ei]=null,ri=Zr[--ei],Zr[ei]=null,ni=Zr[--ei],Zr[ei]=null}function li(e,t){Zr[ei++]=ni,Zr[ei++]=ri,Zr[ei++]=ti,ni=t.id,ri=t.overflow,ti=e}var ci=null,ui=null,di=!1,hi=null,pi=!1,fi=Error(o(519));function mi(e){throw xi(qr(Error(o(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),fi}function gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ue]=e,t[Be]=r,n){case"dialog":Ju("cancel",t),Ju("close",t);break;case"iframe":case"object":case"embed":Ju("load",t);break;case"video":case"audio":for(n=0;n<qu.length;n++)Ju(qu[n],t);break;case"source":Ju("error",t);break;case"img":case"image":case"link":Ju("error",t),Ju("load",t);break;case"details":Ju("toggle",t);break;case"input":Ju("invalid",t),bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ju("invalid",t);break;case"textarea":Ju("invalid",t),zt(t,r.value,r.defaultValue,r.children)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||ud(t.textContent,n)?(null!=r.popover&&(Ju("beforetoggle",t),Ju("toggle",t)),null!=r.onScroll&&Ju("scroll",t),null!=r.onScrollEnd&&Ju("scrollend",t),null!=r.onClick&&(t.onclick=Pt),t=!0):t=!1,t||mi(e,!0)}function yi(e){for(ci=e.return;ci;)switch(ci.tag){case 5:case 31:case 13:return void(pi=!1);case 27:case 3:return void(pi=!0);default:ci=ci.return}}function wi(e){if(e!==ci)return!1;if(!di)return yi(e),di=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||vd(e.type,e.memoizedProps)),t=!t),t&&ui&&mi(e),yi(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));ui=Od(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));ui=Od(e)}else 27===n?(n=ui,jd(e.type)?(e=Dd,Dd=null,ui=e):ui=n):ui=ci?Nd(e.stateNode.nextSibling):null;return!0}function bi(){ui=ci=null,di=!1}function vi(){var e=hi;return null!==e&&(null===Ac?Ac=e:Ac.push.apply(Ac,e),hi=null),e}function xi(e){null===hi?hi=[e]:hi.push(e)}var ki=$(null),zi=null,Si=null;function _i(e,t,n){U(ki,t._currentValue),t._currentValue=n}function Ei(e){e._currentValue=ki.current,F(ki)}function ji(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ti(e,t,n,r){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var a=i.dependencies;if(null!==a){var s=i.child;a=a.firstContext;e:for(;null!==a;){var l=a;a=i;for(var c=0;c<t.length;c++)if(l.context===t[c]){a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),ji(a.return,n,e),r||(s=null);break e}a=l.next}}else if(18===i.tag){if(null===(s=i.return))throw Error(o(341));s.lanes|=n,null!==(a=s.alternate)&&(a.lanes|=n),ji(s,n,e),s=null}else s=i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}function Ci(e,t,n,r){e=null;for(var i=t,a=!1;null!==i;){if(!a)if(0!==(524288&i.flags))a=!0;else if(0!==(262144&i.flags))break;if(10===i.tag){var s=i.alternate;if(null===s)throw Error(o(387));if(null!==(s=s.memoizedProps)){var l=i.type;Xn(i.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(i===K.current){if(null===(s=i.alternate))throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(dh):e=[dh])}i=i.return}null!==e&&Ti(t,e,n,r),t.flags|=262144}function Ii(e){for(e=e.firstContext;null!==e;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ai(e){zi=e,Si=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Pi(e){return Ni(zi,e)}function Ri(e,t){return null===zi&&Ai(e),Ni(e,t)}function Ni(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Si){if(null===e)throw Error(o(308));Si=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Si=Si.next=t;return n}var Di="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Oi=r.unstable_scheduleCallback,Li=r.unstable_NormalPriority,Mi={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $i(){return{controller:new Di,data:new Map,refCount:0}}function Fi(e){e.refCount--,0===e.refCount&&Oi(Li,function(){e.controller.abort()})}var Ui=null,Bi=0,Vi=0,Hi=null;function Wi(){if(0===--Bi&&null!==Ui){null!==Hi&&(Hi.status="fulfilled");var e=Ui;Ui=null,Vi=0,Hi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Gi=N.S;N.S=function(e,t){Nc=le(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Ui){var n=Ui=[];Bi=0,Vi=Vu(),Hi={status:"pending",value:void 0,then:function(e){n.push(e)}}}Bi++,t.then(Wi,Wi)}(0,t),null!==Gi&&Gi(e,t)};var Ki=$(null);function qi(){var e=Ki.current;return null!==e?e:mc.pooledCache}function Qi(e,t){U(Ki,null===t?Ki.current:t.pool)}function Yi(){var e=qi();return null===e?null:{parent:Mi._currentValue,pool:e}}var Ji=Error(o(460)),Xi=Error(o(474)),Zi=Error(o(542)),ea={then:function(){}};function ta(e){return"fulfilled"===(e=e.status)||"rejected"===e}function na(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Pt,Pt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw oa(e=t.reason),e;default:if("string"===typeof t.status)t.then(Pt,Pt);else{if(null!==(e=mc)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw oa(e=t.reason),e}throw ia=t,Ji}}function ra(e){try{return(0,e._init)(e._payload)}catch(ml){if(null!==ml&&"object"===typeof ml&&"function"===typeof ml.then)throw ia=ml,Ji;throw ml}}var ia=null;function aa(){if(null===ia)throw Error(o(459));var e=ia;return ia=null,e}function oa(e){if(e===Ji||e===Zi)throw Error(o(483))}var sa=null,la=0;function ca(e){var t=la;return la+=1,null===sa&&(sa=[]),na(sa,e,t)}function ua(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function da(e,t){if(t.$$typeof===f)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ha(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=Fr(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Hr(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===E&&ra(a)===t.type)?(ua(t=i(t,n.props),n),t.return=e,t):(ua(t=Br(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Gr(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Vr(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Hr(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case m:return ua(n=Br(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case g:return(t=Gr(t,e.mode,n)).return=e,t;case E:return h(e,t=ra(t),n)}if(R(t)||I(t))return(t=Vr(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return h(e,ca(t),n);if(t.$$typeof===x)return h(e,Ri(e,t),n);da(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case m:return n.key===i?c(e,t,n,r):null;case g:return n.key===i?u(e,t,n,r):null;case E:return p(e,t,n=ra(n),r)}if(R(n)||I(n))return null!==i?null:d(e,t,n,r,null);if("function"===typeof n.then)return p(e,t,ca(n),r);if(n.$$typeof===x)return p(e,t,Ri(e,n),r);da(e,n)}return null}function f(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case m:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case g:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case E:return f(e,t,n,r=ra(r),i)}if(R(r)||I(r))return d(t,e=e.get(n)||null,r,i,null);if("function"===typeof r.then)return f(e,t,n,ca(r),i);if(r.$$typeof===x)return f(e,t,n,Ri(t,r),i);da(t,r)}return null}function w(l,c,u,d){if("object"===typeof u&&null!==u&&u.type===y&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case m:e:{for(var b=u.key;null!==c;){if(c.key===b){if((b=u.type)===y){if(7===c.tag){n(l,c.sibling),(d=i(c,u.props.children)).return=l,l=d;break e}}else if(c.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===E&&ra(b)===c.type){n(l,c.sibling),ua(d=i(c,u.props),u),d.return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}u.type===y?((d=Vr(u.props.children,l.mode,d,u.key)).return=l,l=d):(ua(d=Br(u.type,u.key,u.props,null,l.mode,d),u),d.return=l,l=d)}return s(l);case g:e:{for(b=u.key;null!==c;){if(c.key===b){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(d=i(c,u.children||[])).return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}(d=Gr(u,l.mode,d)).return=l,l=d}return s(l);case E:return w(l,c,u=ra(u),d)}if(R(u))return function(i,o,s,l){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=p(i,d,s[m],l);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(i,d),o=a(y,o,m),null===u?c=y:u.sibling=y,u=y,d=g}if(m===s.length)return n(i,d),di&&ii(i,m),c;if(null===d){for(;m<s.length;m++)null!==(d=h(i,s[m],l))&&(o=a(d,o,m),null===u?c=d:u.sibling=d,u=d);return di&&ii(i,m),c}for(d=r(d);m<s.length;m++)null!==(g=f(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),di&&ii(i,m),c}(l,c,u,d);if(I(u)){if("function"!==typeof(b=I(u)))throw Error(o(150));return function(i,s,l,c){if(null==l)throw Error(o(151));for(var u=null,d=null,m=s,g=s=0,y=null,w=l.next();null!==m&&!w.done;g++,w=l.next()){m.index>g?(y=m,m=null):y=m.sibling;var b=p(i,m,w.value,c);if(null===b){null===m&&(m=y);break}e&&m&&null===b.alternate&&t(i,m),s=a(b,s,g),null===d?u=b:d.sibling=b,d=b,m=y}if(w.done)return n(i,m),di&&ii(i,g),u;if(null===m){for(;!w.done;g++,w=l.next())null!==(w=h(i,w.value,c))&&(s=a(w,s,g),null===d?u=w:d.sibling=w,d=w);return di&&ii(i,g),u}for(m=r(m);!w.done;g++,w=l.next())null!==(w=f(m,i,g,w.value,c))&&(e&&null!==w.alternate&&m.delete(null===w.key?g:w.key),s=a(w,s,g),null===d?u=w:d.sibling=w,d=w);return e&&m.forEach(function(e){return t(i,e)}),di&&ii(i,g),u}(l,c,u=b.call(u),d)}if("function"===typeof u.then)return w(l,c,ca(u),d);if(u.$$typeof===x)return w(l,c,Ri(l,u),d);da(l,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(d=i(c,u)).return=l,l=d):(n(l,c),(d=Hr(u,l.mode,d)).return=l,l=d),s(l)):n(l,c)}return function(e,t,n,r){try{la=0;var i=w(e,t,n,r);return sa=null,i}catch(ml){if(ml===Ji||ml===Zi)throw ml;var a=Mr(29,ml,null,e.mode);return a.lanes=r,a.return=e,a}}}var pa=ha(!0),fa=ha(!1),ma=!1;function ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&fc)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Dr(e),Nr(e,null,n),t}return Ar(e,r,t,n),Dr(e)}function va(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ne(e,n)}}function xa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ka=!1;function za(){if(ka){if(null!==Hi)throw Hi}}function Sa(e,t,n,r){ka=!1;var i=e.updateQueue;ma=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,u=c=l=null,s=a;;){var h=-536870913&s.lane,f=h!==s.lane;if(f?(yc&h)===h:(r&h)===h){0!==h&&h===Vi&&(ka=!0),null!==u&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var m=e,g=s;h=t;var y=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(y,d,h);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(h="function"===typeof(m=g.payload)?m.call(y,d,h):m)||void 0===h)break e;d=p({},d,h);break e;case 2:ma=!0}}null!==(h=s.callback)&&(e.flags|=64,f&&(e.flags|=8192),null===(f=i.callbacks)?i.callbacks=[h]:f.push(h))}else f={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,o|=h;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null===a&&(i.shared.lanes=0),_c|=o,e.lanes=o,e.memoizedState=d}}function _a(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function Ea(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)_a(n[e],t)}var ja=$(null),Ta=$(0);function Ca(e,t){U(Ta,e=zc),U(ja,t),zc=e|t.baseLanes}function Ia(){U(Ta,zc),U(ja,ja.current)}function Aa(){zc=Ta.current,F(ja),F(Ta)}var Pa=$(null),Ra=null;function Na(e){var t=e.alternate;U($a,1&$a.current),U(Pa,e),null===Ra&&(null===t||null!==ja.current||null!==t.memoizedState)&&(Ra=e)}function Da(e){U($a,$a.current),U(Pa,e),null===Ra&&(Ra=e)}function Oa(e){22===e.tag?(U($a,$a.current),U(Pa,e),null===Ra&&(Ra=e)):La()}function La(){U($a,$a.current),U(Pa,Pa.current)}function Ma(e){F(Pa),Ra===e&&(Ra=null),F($a)}var $a=$(0);function Fa(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Pd(n)||Rd(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child;continue}}else if(0!==(128&t.flags))return t;if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ua=0,Ba=null,Va=null,Ha=null,Wa=!1,Ga=!1,Ka=!1,qa=0,Qa=0,Ya=null,Ja=0;function Xa(){throw Error(o(321))}function Za(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xn(e[n],t[n]))return!1;return!0}function eo(e,t,n,r,i,a){return Ua=a,Ba=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=null===e||null===e.memoizedState?gs:ys,Ka=!1,a=n(r,i),Ka=!1,Ga&&(a=no(t,n,r,i)),to(e),a}function to(e){N.H=ms;var t=null!==Va&&null!==Va.next;if(Ua=0,Ha=Va=Ba=null,Wa=!1,Qa=0,Ya=null,t)throw Error(o(300));null===e||Rs||null!==(e=e.dependencies)&&Ii(e)&&(Rs=!0)}function no(e,t,n,r){Ba=e;var i=0;do{if(Ga&&(Ya=null),Qa=0,Ga=!1,25<=i)throw Error(o(301));if(i+=1,Ha=Va=null,null!=e.updateQueue){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,null!=a.memoCache&&(a.memoCache.index=0)}N.H=ws,a=t(n,r)}while(Ga);return a}function ro(){var e=N.H,t=e.useState()[0];return t="function"===typeof t.then?co(t):t,e=e.useState()[0],(null!==Va?Va.memoizedState:null)!==e&&(Ba.flags|=1024),t}function io(){var e=0!==qa;return qa=0,e}function ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function oo(e){if(Wa){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Wa=!1}Ua=0,Ha=Va=Ba=null,Ga=!1,Qa=qa=0,Ya=null}function so(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Ha?Ba.memoizedState=Ha=e:Ha=Ha.next=e,Ha}function lo(){if(null===Va){var e=Ba.alternate;e=null!==e?e.memoizedState:null}else e=Va.next;var t=null===Ha?Ba.memoizedState:Ha.next;if(null!==t)Ha=t,Va=e;else{if(null===e){if(null===Ba.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(Va=e).memoizedState,baseState:Va.baseState,baseQueue:Va.baseQueue,queue:Va.queue,next:null},null===Ha?Ba.memoizedState=Ha=e:Ha=Ha.next=e}return Ha}function co(e){var t=Qa;return Qa+=1,null===Ya&&(Ya=[]),e=na(Ya,e,t),t=Ba,null===(null===Ha?t.memoizedState:Ha.next)&&(t=t.alternate,N.H=null===t||null===t.memoizedState?gs:ys),e}function uo(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return co(e);if(e.$$typeof===x)return Pi(e)}throw Error(o(438,String(e)))}function ho(e){var t=null,n=Ba.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Ba.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Ba.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=T;return t.index++,n}function po(e,t){return"function"===typeof t?t(e):t}function fo(e){return mo(lo(),Va,e)}function mo(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,null===i)e.memoizedState=a;else{var l=s=null,c=null,u=t=i.next,d=!1;do{var h=-536870913&u.lane;if(h!==u.lane?(yc&h)===h:(Ua&h)===h){var p=u.revertLane;if(0===p)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===Vi&&(d=!0);else{if((Ua&p)===p){u=u.next,p===Vi&&(d=!0);continue}h={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=h,s=a):c=c.next=h,Ba.lanes|=p,_c|=p}h=u.action,Ka&&n(a,h),a=u.hasEagerState?u.eagerState:n(a,h)}else p={lane:h,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=p,s=a):c=c.next=p,Ba.lanes|=h,_c|=h;u=u.next}while(null!==u&&u!==t);if(null===c?s=a:c.next=l,!Xn(a,e.memoizedState)&&(Rs=!0,d&&null!==(n=Hi)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=c,r.lastRenderedState=a}return null===i&&(r.lanes=0),[e.memoizedState,r.dispatch]}function go(e){var t=lo(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);Xn(a,t.memoizedState)||(Rs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function yo(e,t,n){var r=Ba,i=lo(),a=di;if(a){if(void 0===n)throw Error(o(407));n=n()}else n=t();var s=!Xn((Va||i).memoizedState,n);if(s&&(i.memoizedState=n,Rs=!0),i=i.queue,Bo(vo.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||null!==Ha&&1&Ha.memoizedState.tag){if(r.flags|=2048,Lo(9,{destroy:void 0},bo.bind(null,r,i,n,t),null),null===mc)throw Error(o(349));a||0!==(127&Ua)||wo(r,t,n)}return n}function wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Ba.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Ba.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function bo(e,t,n,r){t.value=n,t.getSnapshot=r,xo(t)&&ko(e)}function vo(e,t,n){return n(function(){xo(t)&&ko(e)})}function xo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xn(e,n)}catch(r){return!0}}function ko(e){var t=Rr(e,2);null!==t&&Qc(t,e,2)}function zo(e){var t=so();if("function"===typeof e){var n=e;if(e=n(),Ka){be(!0);try{n()}finally{be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:e},t}function So(e,t,n,r){return e.baseState=n,mo(e,Va,"function"===typeof r?r:po)}function _o(e,t,n,r,i){if(hs(e))throw Error(o(485));if(null!==(e=t.action)){var a={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};null!==N.T?n(!0):a.isTransition=!1,r(a),null===(n=t.pending)?(a.next=t.pending=a,Eo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Eo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=N.T,o={};N.T=o;try{var s=n(i,r),l=N.S;null!==l&&l(o,s),jo(e,t,s)}catch(c){Co(e,t,c)}finally{null!==a&&null!==o.types&&(a.types=o.types),N.T=a}}else try{jo(e,t,a=n(i,r))}catch(u){Co(e,t,u)}}function jo(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){To(e,t,n)},function(n){return Co(e,t,n)}):To(e,t,n)}function To(e,t,n){t.status="fulfilled",t.value=n,Io(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,Eo(e,n)))}function Co(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,Io(t),t=t.next}while(t!==r)}e.action=null}function Io(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ao(e,t){return t}function Po(e,t){if(di){var n=mc.formState;if(null!==n){e:{var r=Ba;if(di){if(ui){t:{for(var i=ui,a=pi;8!==i.nodeType;){if(!a){i=null;break t}if(null===(i=Nd(i.nextSibling))){i=null;break t}}i="F!"===(a=i.data)||"F"===a?i:null}if(i){ui=Nd(i.nextSibling),r="F!"===i.data;break e}}mi(r)}r=!1}r&&(t=n[0])}}return(n=so()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},n.queue=r,n=cs.bind(null,Ba,r),r.dispatch=n,r=zo(!1),a=ds.bind(null,Ba,!1,r.queue),i={state:t,dispatch:null,action:e,pending:null},(r=so()).queue=i,n=_o.bind(null,Ba,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ro(e){return No(lo(),Va,e)}function No(e,t,n){if(t=mo(e,t,Ao)[0],e=fo(po)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=co(t)}catch(ml){if(ml===Ji)throw Zi;throw ml}else r=t;var i=(t=lo()).queue,a=i.dispatch;return n!==t.memoizedState&&(Ba.flags|=2048,Lo(9,{destroy:void 0},Do.bind(null,i,n),null)),[r,a,e]}function Do(e,t){e.action=t}function Oo(e){var t=lo(),n=Va;if(null!==n)return No(t,n,e);lo(),t=t.memoizedState;var r=(n=lo()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Lo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=Ba.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Ba.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Mo(){return lo().memoizedState}function $o(e,t,n,r){var i=so();Ba.flags|=e,i.memoizedState=Lo(1|t,{destroy:void 0},n,void 0===r?null:r)}function Fo(e,t,n,r){var i=lo();r=void 0===r?null:r;var a=i.memoizedState.inst;null!==Va&&null!==r&&Za(r,Va.memoizedState.deps)?i.memoizedState=Lo(t,a,n,r):(Ba.flags|=e,i.memoizedState=Lo(1|t,a,n,r))}function Uo(e,t){$o(8390656,8,e,t)}function Bo(e,t){Fo(2048,8,e,t)}function Vo(e){var t=lo().memoizedState;return function(e){Ba.flags|=4;var t=Ba.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},Ba.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&fc))throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Ho(e,t){return Fo(4,2,e,t)}function Wo(e,t){return Fo(4,4,e,t)}function Go(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Ko(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Fo(4,4,Go.bind(null,t,e),n)}function qo(){}function Qo(e,t){var n=lo();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&Za(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yo(e,t){var n=lo();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&Za(t,r[1]))return r[0];if(r=e(),Ka){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r}function Jo(e,t,n){return void 0===n||0!==(1073741824&Ua)&&0===(261930&yc)?e.memoizedState=t:(e.memoizedState=n,e=qc(),Ba.lanes|=e,_c|=e,n)}function Xo(e,t,n,r){return Xn(n,t)?n:null!==ja.current?(e=Jo(e,n,r),Xn(e,t)||(Rs=!0),e):0===(42&Ua)||0!==(1073741824&Ua)&&0===(261930&yc)?(Rs=!0,e.memoizedState=n):(e=qc(),Ba.lanes|=e,_c|=e,t)}function Zo(e,t,n,r,i){var a=D.p;D.p=0!==a&&8>a?a:8;var o=N.T,s={};N.T=s,ds(e,!1,t,n);try{var l=i(),c=N.S;if(null!==c&&c(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)us(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(l,r),Kc());else us(e,t,r,Kc())}catch(u){us(e,t,{then:function(){},status:"rejected",reason:u},Kc())}finally{D.p=a,null!==o&&null!==s.types&&(o.types=s.types),N.T=o}}function es(){}function ts(e,t,n,r){if(5!==e.tag)throw Error(o(476));var i=ns(e).queue;Zo(e,i,t,O,null===n?es:function(){return rs(e),n(r)})}function ns(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:O},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function rs(e){var t=ns(e);null===t.next&&(t=e.alternate.memoizedState),us(e,t.next.queue,{},Kc())}function is(){return Pi(dh)}function as(){return lo().memoizedState}function os(){return lo().memoizedState}function ss(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Kc(),r=ba(t,e=wa(n),n);return null!==r&&(Qc(r,t,n),va(r,t,n)),t={cache:$i()},void(e.payload=t)}t=t.return}}function ls(e,t,n){var r=Kc();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},hs(e)?ps(t,n):null!==(n=Pr(e,t,n,r))&&(Qc(n,e,r),fs(n,t,r))}function cs(e,t,n){us(e,t,n,Kc())}function us(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(hs(e))ps(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Xn(s,o))return Ar(e,t,i,0),null===mc&&Ir(),!1}catch(l){}if(null!==(n=Pr(e,t,i,r)))return Qc(n,e,r),fs(n,t,r),!0}return!1}function ds(e,t,n,r){if(r={lane:2,revertLane:Vu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},hs(e)){if(t)throw Error(o(479))}else null!==(t=Pr(e,n,r,2))&&Qc(t,e,2)}function hs(e){var t=e.alternate;return e===Ba||null!==t&&t===Ba}function ps(e,t){Ga=Wa=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fs(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ne(e,n)}}var ms={readContext:Pi,use:uo,useCallback:Xa,useContext:Xa,useEffect:Xa,useImperativeHandle:Xa,useLayoutEffect:Xa,useInsertionEffect:Xa,useMemo:Xa,useReducer:Xa,useRef:Xa,useState:Xa,useDebugValue:Xa,useDeferredValue:Xa,useTransition:Xa,useSyncExternalStore:Xa,useId:Xa,useHostTransitionStatus:Xa,useFormState:Xa,useActionState:Xa,useOptimistic:Xa,useMemoCache:Xa,useCacheRefresh:Xa};ms.useEffectEvent=Xa;var gs={readContext:Pi,use:uo,useCallback:function(e,t){return so().memoizedState=[e,void 0===t?null:t],e},useContext:Pi,useEffect:Uo,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,$o(4194308,4,Go.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){$o(4,2,e,t)},useMemo:function(e,t){var n=so();t=void 0===t?null:t;var r=e();if(Ka){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=so();if(void 0!==n){var i=n(t);if(Ka){be(!0);try{n(t)}finally{be(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ls.bind(null,Ba,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},so().memoizedState=e},useState:function(e){var t=(e=zo(e)).queue,n=cs.bind(null,Ba,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:qo,useDeferredValue:function(e,t){return Jo(so(),e,t)},useTransition:function(){var e=zo(!1);return e=Zo.bind(null,Ba,e.queue,!0,!1),so().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Ba,i=so();if(di){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===mc)throw Error(o(349));0!==(127&yc)||wo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Uo(vo.bind(null,r,a,e),[e]),r.flags|=2048,Lo(9,{destroy:void 0},bo.bind(null,r,a,n,t),null),n},useId:function(){var e=so(),t=mc.identifierPrefix;if(di){var n=ri;t="_"+t+"R_"+(n=(ni&~(1<<32-ve(ni)-1)).toString(32)+n),0<(n=qa++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Ja++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:is,useFormState:Po,useActionState:Po,useOptimistic:function(e){var t=so();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ds.bind(null,Ba,!0,n),n.dispatch=t,[e,t]},useMemoCache:ho,useCacheRefresh:function(){return so().memoizedState=ss.bind(null,Ba)},useEffectEvent:function(e){var t=so(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&fc))throw Error(o(440));return n.impl.apply(void 0,arguments)}}},ys={readContext:Pi,use:uo,useCallback:Qo,useContext:Pi,useEffect:Bo,useImperativeHandle:Ko,useInsertionEffect:Ho,useLayoutEffect:Wo,useMemo:Yo,useReducer:fo,useRef:Mo,useState:function(){return fo(po)},useDebugValue:qo,useDeferredValue:function(e,t){return Xo(lo(),Va.memoizedState,e,t)},useTransition:function(){var e=fo(po)[0],t=lo().memoizedState;return["boolean"===typeof e?e:co(e),t]},useSyncExternalStore:yo,useId:as,useHostTransitionStatus:is,useFormState:Ro,useActionState:Ro,useOptimistic:function(e,t){return So(lo(),0,e,t)},useMemoCache:ho,useCacheRefresh:os};ys.useEffectEvent=Vo;var ws={readContext:Pi,use:uo,useCallback:Qo,useContext:Pi,useEffect:Bo,useImperativeHandle:Ko,useInsertionEffect:Ho,useLayoutEffect:Wo,useMemo:Yo,useReducer:go,useRef:Mo,useState:function(){return go(po)},useDebugValue:qo,useDeferredValue:function(e,t){var n=lo();return null===Va?Jo(n,e,t):Xo(n,Va.memoizedState,e,t)},useTransition:function(){var e=go(po)[0],t=lo().memoizedState;return["boolean"===typeof e?e:co(e),t]},useSyncExternalStore:yo,useId:as,useHostTransitionStatus:is,useFormState:Oo,useActionState:Oo,useOptimistic:function(e,t){var n=lo();return null!==Va?So(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ho,useCacheRefresh:os};function bs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}ws.useEffectEvent=Vo;var vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Kc(),i=wa(r);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=ba(e,i,r))&&(Qc(t,e,r),va(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Kc(),i=wa(r);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=ba(e,i,r))&&(Qc(t,e,r),va(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Kc(),r=wa(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=ba(e,r,n))&&(Qc(t,e,n),va(t,e,n))}};function xs(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!Zn(n,r)||!Zn(i,a))}function ks(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vs.enqueueReplaceState(t,t.state,null)}function zs(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)void 0===n[i]&&(n[i]=e[i]);return n}function Ss(e){Er(e)}function _s(e){console.error(e)}function Es(e){Er(e)}function js(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ts(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Cs(e,t,n){return(n=wa(n)).tag=3,n.payload={element:null},n.callback=function(){js(e,t)},n}function Is(e){return(e=wa(e)).tag=3,e}function As(e,t,n,r){var i=n.type.getDerivedStateFromError;if("function"===typeof i){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ts(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){Ts(t,n,r),"function"!==typeof i&&(null===Lc?Lc=new Set([this]):Lc.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Ps=Error(o(461)),Rs=!1;function Ns(e,t,n,r){t.child=null===e?fa(t,null,n,r):pa(t,e.child,n,r)}function Ds(e,t,n,r,i){n=n.render;var a=t.ref;if("ref"in r){var o={};for(var s in r)"ref"!==s&&(o[s]=r[s])}else o=r;return Ai(t),r=eo(e,t,n,o,a,i),s=io(),null===e||Rs?(di&&s&&oi(t),t.flags|=1,Ns(e,t,r,i),t.child):(ao(e,t,i),il(e,t,i))}function Os(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||$r(a)||void 0!==a.defaultProps||null!==n.compare?((e=Br(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ls(e,t,a,r,i))}if(a=e.child,!al(e,i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:Zn)(o,r)&&e.ref===t.ref)return il(e,t,i)}return t.flags|=1,(e=Fr(a,r)).ref=t.ref,e.return=t,t.child=e}function Ls(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(Zn(a,r)&&e.ref===t.ref){if(Rs=!1,t.pendingProps=r=a,!al(e,i))return t.lanes=e.lanes,il(e,t,i);0!==(131072&e.flags)&&(Rs=!0)}}return Hs(e,t,n,r,i)}function Ms(e,t,n,r){var i=r.children,a=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(0!==(128&t.flags)){if(a=null!==a?a.baseLanes|n:n,null!==e){for(r=t.child=e.child,i=0;null!==r;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Fs(e,t,a,n,r)}if(0===(536870912&n))return r=t.lanes=536870912,Fs(e,t,null!==a?a.baseLanes|n:n,n,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Qi(0,null!==a?a.cachePool:null),null!==a?Ca(t,a):Ia(),Oa(t)}else null!==a?(Qi(0,a.cachePool),Ca(t,a),La(),t.memoizedState=null):(null!==e&&Qi(0,null),Ia(),La());return Ns(e,t,i,n),t.child}function $s(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Fs(e,t,n,r,i){var a=qi();return a=null===a?null:{parent:Mi._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&Qi(0,null),Ia(),Oa(t),null!==e&&Ci(e,t,r,!0),t.childLanes=i,null}function Us(e,t){return(t=Zs({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function Bs(e,t,n){return pa(t,e.child,null,n),(e=Us(t,t.pendingProps)).flags|=2,Ma(t),t.memoizedState=null,e}function Vs(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Hs(e,t,n,r,i){return Ai(t),n=eo(e,t,n,r,void 0,i),r=io(),null===e||Rs?(di&&r&&oi(t),t.flags|=1,Ns(e,t,n,i),t.child):(ao(e,t,i),il(e,t,i))}function Ws(e,t,n,r,i,a){return Ai(t),t.updateQueue=null,n=no(t,r,n,i),to(e),r=io(),null===e||Rs?(di&&r&&oi(t),t.flags|=1,Ns(e,t,n,a),t.child):(ao(e,t,a),il(e,t,a))}function Gs(e,t,n,r,i){if(Ai(t),null===t.stateNode){var a=Or,o=n.contextType;"object"===typeof o&&null!==o&&(a=Pi(o)),a=new n(r,a),t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a.updater=vs,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=r,a.state=t.memoizedState,a.refs={},ga(t),o=n.contextType,a.context="object"===typeof o&&null!==o?Pi(o):Or,a.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(bs(t,n,o,r),a.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(o=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),o!==a.state&&vs.enqueueReplaceState(a,a.state,null),Sa(t,r,a,i),za(),a.state=t.memoizedState),"function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){a=t.stateNode;var s=t.memoizedProps,l=zs(n,s);a.props=l;var c=a.context,u=n.contextType;o=Or,"object"===typeof u&&null!==u&&(o=Pi(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof a.getSnapshotBeforeUpdate,s=t.pendingProps!==s,u||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s||c!==o)&&ks(t,a,r,o),ma=!1;var h=t.memoizedState;a.state=h,Sa(t,r,a,i),za(),c=t.memoizedState,s||h!==c||ma?("function"===typeof d&&(bs(t,n,d,r),c=t.memoizedState),(l=ma||xs(t,n,l,r,h,c,o))?(u||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=o,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ya(e,t),u=zs(n,o=t.memoizedProps),a.props=u,d=t.pendingProps,h=a.context,c=n.contextType,l=Or,"object"===typeof c&&null!==c&&(l=Pi(c)),(c="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(o!==d||h!==l)&&ks(t,a,r,l),ma=!1,h=t.memoizedState,a.state=h,Sa(t,r,a,i),za();var p=t.memoizedState;o!==d||h!==p||ma||null!==e&&null!==e.dependencies&&Ii(e.dependencies)?("function"===typeof s&&(bs(t,n,s,r),p=t.memoizedState),(u=ma||xs(t,n,u,r,h,p,l)||null!==e&&null!==e.dependencies&&Ii(e.dependencies))?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=u):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Vs(e,t),r=0!==(128&t.flags),a||r?(a=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&r?(t.child=pa(t,e.child,null,i),t.child=pa(t,null,n,i)):Ns(e,t,n,i),t.memoizedState=a.state,e=t.child):e=il(e,t,i),e}function Ks(e,t,n,r){return bi(),t.flags|=256,Ns(e,t,n,r),t.child}var qs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qs(e){return{baseLanes:e,cachePool:Yi()}}function Ys(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=Tc),e}function Js(e,t,n){var r,i=t.pendingProps,a=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&$a.current)),r&&(a=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(di){if(a?Na(t):La(),(e=ui)?null!==(e=null!==(e=Ad(e,pi))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==ti?{id:ni,overflow:ri}:null,retryLane:536870912,hydrationErrors:null},(n=Wr(e)).return=t,t.child=n,ci=t,ui=null):e=null,null===e)throw mi(t);return Rd(e)?t.lanes=32:t.lanes=536870912,null}var l=i.children;return i=i.fallback,a?(La(),l=Zs({mode:"hidden",children:l},a=t.mode),i=Vr(i,a,n,null),l.return=t,i.return=t,l.sibling=i,t.child=l,(i=t.child).memoizedState=Qs(n),i.childLanes=Ys(e,r,n),t.memoizedState=qs,$s(null,i)):(Na(t),Xs(t,l))}var c=e.memoizedState;if(null!==c&&null!==(l=c.dehydrated)){if(s)256&t.flags?(Na(t),t.flags&=-257,t=el(e,t,n)):null!==t.memoizedState?(La(),t.child=e.child,t.flags|=128,t=null):(La(),l=i.fallback,a=t.mode,i=Zs({mode:"visible",children:i.children},a),(l=Vr(l,a,n,null)).flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,pa(t,e.child,null,n),(i=t.child).memoizedState=Qs(n),i.childLanes=Ys(e,r,n),t.memoizedState=qs,t=$s(null,i));else if(Na(t),Rd(l)){if(r=l.nextSibling&&l.nextSibling.dataset)var u=r.dgst;r=u,(i=Error(o(419))).stack="",i.digest=r,xi({value:i,source:null,stack:null}),t=el(e,t,n)}else if(Rs||Ci(e,t,n,!1),r=0!==(n&e.childLanes),Rs||r){if(null!==(r=mc)&&(0!==(i=De(r,n))&&i!==c.retryLane))throw c.retryLane=i,Rr(e,i),Qc(r,e,i),Ps;Pd(l)||su(),t=el(e,t,n)}else Pd(l)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,ui=Nd(l.nextSibling),ci=t,di=!0,hi=null,pi=!1,null!==e&&li(t,e),(t=Xs(t,i.children)).flags|=4096);return t}return a?(La(),l=i.fallback,a=t.mode,u=(c=e.child).sibling,(i=Fr(c,{mode:"hidden",children:i.children})).subtreeFlags=65011712&c.subtreeFlags,null!==u?l=Fr(u,l):(l=Vr(l,a,n,null)).flags|=2,l.return=t,i.return=t,i.sibling=l,t.child=i,$s(null,i),i=t.child,null===(l=e.child.memoizedState)?l=Qs(n):(null!==(a=l.cachePool)?(c=Mi._currentValue,a=a.parent!==c?{parent:c,pool:c}:a):a=Yi(),l={baseLanes:l.baseLanes|n,cachePool:a}),i.memoizedState=l,i.childLanes=Ys(e,r,n),t.memoizedState=qs,$s(e.child,i)):(Na(t),e=(n=e.child).sibling,(n=Fr(n,{mode:"visible",children:i.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Xs(e,t){return(t=Zs({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Zs(e,t){return(e=Mr(22,e,null,t)).lanes=0,e}function el(e,t,n){return pa(t,e.child,null,n),(e=Xs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function tl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),ji(e.return,t,n)}function nl(e,t,n,r,i,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function rl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=$a.current,s=0!==(2&o);if(s?(o=1&o|2,t.flags|=128):o&=1,U($a,o),Ns(e,t,r,n),r=di?Xr:0,!s&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&tl(e,n,t);else if(19===e.tag)tl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Fa(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nl(t,!1,i,n,a,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Fa(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nl(t,!0,n,null,a,r);break;case"together":nl(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function il(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),_c|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Ci(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Fr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Fr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function al(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Ii(e))}function ol(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Rs=!0;else{if(!al(e,n)&&0===(128&t.flags))return Rs=!1,function(e,t,n){switch(t.tag){case 3:q(t,t.stateNode.containerInfo),_i(0,Mi,e.memoizedState.cache),bi();break;case 27:case 5:Y(t);break;case 4:q(t,t.stateNode.containerInfo);break;case 10:_i(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,Da(t),null;break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Na(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Js(e,t,n):(Na(t),null!==(e=il(e,t,n))?e.sibling:null);Na(t);break;case 19:var i=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Ci(e,t,n,!1),r=0!==(n&t.childLanes)),i){if(r)return rl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),U($a,$a.current),r)break;return null;case 22:return t.lanes=0,Ms(e,t,n,t.pendingProps);case 24:_i(0,Mi,e.memoizedState.cache)}return il(e,t,n)}(e,t,n);Rs=0!==(131072&e.flags)}else Rs=!1,di&&0!==(1048576&t.flags)&&ai(t,Xr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=ra(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var i=e.$$typeof;if(i===k){t.tag=11,t=Ds(null,t,e,r,n);break e}if(i===_){t.tag=14,t=Os(null,t,e,r,n);break e}}throw t=P(e)||e,Error(o(306,t,""))}$r(e)?(r=zs(e,r),t.tag=1,t=Gs(null,t,e,r,n)):(t.tag=0,t=Hs(null,t,e,r,n))}return t;case 0:return Hs(e,t,t.type,t.pendingProps,n);case 1:return Gs(e,t,r=t.type,i=zs(r,t.pendingProps),n);case 3:e:{if(q(t,t.stateNode.containerInfo),null===e)throw Error(o(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,ya(e,t),Sa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,_i(0,Mi,r),r!==a.cache&&Ti(t,[Mi],n,!0),za(),r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ks(e,t,r,n);break e}if(r!==i){xi(i=qr(Error(o(424)),t)),t=Ks(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(ui=Nd(e.firstChild),ci=t,di=!0,hi=null,pi=!0,n=fa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(bi(),r===i){t=il(e,t,n);break e}Ns(e,t,r,n)}t=t.child}return t;case 26:return Vs(e,t),null===e?(n=Gd(t.type,null,t.pendingProps,null))?t.memoizedState=n:di||(n=t.type,e=t.pendingProps,(r=yd(G.current).createElement(n))[Ue]=t,r[Be]=e,pd(r,n,e),et(r),t.stateNode=r):t.memoizedState=Gd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Y(t),null===e&&di&&(r=t.stateNode=Md(t.type,t.pendingProps,G.current),ci=t,pi=!0,i=ui,jd(t.type)?(Dd=i,ui=Nd(r.firstChild)):ui=i),Ns(e,t,t.pendingProps.children,n),Vs(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&di&&((i=r=ui)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[qe])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(a!==i.rel||e.getAttribute("href")!==(null==i.href||""===i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((a=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var a=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===a)return e}if(null===(e=Nd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,pi))?(t.stateNode=r,ci=t,ui=Nd(r.firstChild),pi=!1,i=!0):i=!1),i||mi(t)),Y(t),i=t.type,a=t.pendingProps,s=null!==e?e.memoizedProps:null,r=a.children,vd(i,a)?r=null:null!==s&&vd(i,s)&&(t.flags|=32),null!==t.memoizedState&&(i=eo(e,t,ro,null,null,n),dh._currentValue=i),Vs(e,t),Ns(e,t,r,n),t.child;case 6:return null===e&&di&&((e=n=ui)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=Nd(e.nextSibling)))return null}return e}(n,t.pendingProps,pi))?(t.stateNode=n,ci=t,ui=null,e=!0):e=!1),e||mi(t)),null;case 13:return Js(e,t,n);case 4:return q(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=pa(t,null,r,n):Ns(e,t,r,n),t.child;case 11:return Ds(e,t,t.type,t.pendingProps,n);case 7:return Ns(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ns(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,_i(0,t.type,r.value),Ns(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Ai(t),r=r(i=Pi(i)),t.flags|=1,Ns(e,t,r,n),t.child;case 14:return Os(e,t,t.type,t.pendingProps,n);case 15:return Ls(e,t,t.type,t.pendingProps,n);case 19:return rl(e,t,n);case 31:return function(e,t,n){var r=t.pendingProps,i=0!==(128&t.flags);if(t.flags&=-129,null===e){if(di){if("hidden"===r.mode)return e=Us(t,r),t.lanes=536870912,$s(null,e);if(Da(t),(e=ui)?null!==(e=null!==(e=Ad(e,pi))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==ti?{id:ni,overflow:ri}:null,retryLane:536870912,hydrationErrors:null},(n=Wr(e)).return=t,t.child=n,ci=t,ui=null):e=null,null===e)throw mi(t);return t.lanes=536870912,null}return Us(t,r)}var a=e.memoizedState;if(null!==a){var s=a.dehydrated;if(Da(t),i)if(256&t.flags)t.flags&=-257,t=Bs(e,t,n);else{if(null===t.memoizedState)throw Error(o(558));t.child=e.child,t.flags|=128,t=null}else if(Rs||Ci(e,t,n,!1),i=0!==(n&e.childLanes),Rs||i){if(null!==(r=mc)&&0!==(s=De(r,n))&&s!==a.retryLane)throw a.retryLane=s,Rr(e,s),Qc(r,e,s),Ps;su(),t=Bs(e,t,n)}else e=a.treeContext,ui=Nd(s.nextSibling),ci=t,di=!0,hi=null,pi=!1,null!==e&&li(t,e),(t=Us(t,r)).flags|=4096;return t}return(e=Fr(e.child,{mode:r.mode,children:r.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return Ms(e,t,n,t.pendingProps);case 24:return Ai(t),r=Pi(Mi),null===e?(null===(i=qi())&&(i=mc,a=$i(),i.pooledCache=a,a.refCount++,null!==a&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},ga(t),_i(0,Mi,i)):(0!==(e.lanes&n)&&(ya(e,t),Sa(t,null,null,n),za()),i=e.memoizedState,a=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),_i(0,Mi,r)):(r=a.cache,_i(0,Mi,r),r!==i.cache&&Ti(t,[Mi],n,!0))),Ns(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function sl(e){e.flags|=4}function ll(e,t,n,r,i){if((t=0!==(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&i)===i)if(e.stateNode.complete)e.flags|=8192;else{if(!iu())throw ia=ea,Xi;e.flags|=8192}}else e.flags&=-16777217}function cl(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!ah(t)){if(!iu())throw ia=ea,Xi;e.flags|=8192}}function ul(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ie():536870912,e.lanes|=t,Cc|=t)}function dl(e,t){if(!di)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function hl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=65011712&i.subtreeFlags,r|=65011712&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pl(e,t,n){var r=t.pendingProps;switch(si(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return hl(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ei(Mi),Q(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(wi(t)?sl(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,vi())),hl(t),null;case 26:var i=t.type,a=t.memoizedState;return null===e?(sl(t),null!==a?(hl(t),cl(t,a)):(hl(t),ll(t,i,0,0,n))):a?a!==e.memoizedState?(sl(t),hl(t),cl(t,a)):(hl(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&sl(t),hl(t),ll(t,i,0,0,n)),null;case 27:if(J(t),n=G.current,i=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&sl(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return hl(t),null}e=H.current,wi(t)?gi(t):(e=Md(i,r,n),t.stateNode=e,sl(t))}return hl(t),null;case 5:if(J(t),i=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&sl(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return hl(t),null}if(a=H.current,wi(t))gi(t);else{var s=yd(G.current);switch(a){case 1:a=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:a=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":a=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":a=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":(a=s.createElement("div")).innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a="string"===typeof r.is?s.createElement("select",{is:r.is}):s.createElement("select"),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a="string"===typeof r.is?s.createElement(i,{is:r.is}):s.createElement(i)}}a[Ue]=t,a[Be]=r;e:for(s=t.child;null!==s;){if(5===s.tag||6===s.tag)a.appendChild(s.stateNode);else if(4!==s.tag&&27!==s.tag&&null!==s.child){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;null===s.sibling;){if(null===s.return||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=a;e:switch(pd(a,i,r),i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&sl(t)}}return hl(t),ll(t,t.type,null===e||e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&sl(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=G.current,wi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(i=ci))switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Ue]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||ud(e.nodeValue,n)))||mi(t,!0)}else(e=yd(e).createTextNode(r))[Ue]=t,t.stateNode=e}return hl(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=wi(t),null!==n){if(null===e){if(!r)throw Error(o(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(o(557));e[Ue]=t}else bi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;hl(t),e=!1}else n=vi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(Ma(t),t):(Ma(t),null);if(0!==(128&t.flags))throw Error(o(558))}return hl(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=wi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[Ue]=t}else bi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;hl(t),i=!1}else i=vi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return 256&t.flags?(Ma(t),t):(Ma(t),null)}return Ma(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(i=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(i=r.alternate.memoizedState.cachePool.pool),a=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ul(t,t.updateQueue),hl(t),null);case 4:return Q(),null===e&&ed(t.stateNode.containerInfo),hl(t),null;case 10:return Ei(t.type),hl(t),null;case 19:if(F($a),null===(r=t.memoizedState))return hl(t),null;if(i=0!==(128&t.flags),null===(a=r.rendering))if(i)dl(r,!1);else{if(0!==Sc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(a=Fa(e))){for(t.flags|=128,dl(r,!1),e=a.updateQueue,t.updateQueue=e,ul(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Ur(n,e),n=n.sibling;return U($a,1&$a.current|2),di&&ii(t,r.treeForkCount),t.child}e=e.sibling}null!==r.tail&&le()>Dc&&(t.flags|=128,i=!0,dl(r,!1),t.lanes=4194304)}else{if(!i)if(null!==(e=Fa(a))){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ul(t,e),dl(r,!0),null===r.tail&&"hidden"===r.tailMode&&!a.alternate&&!di)return hl(t),null}else 2*le()-r.renderingStartTime>Dc&&536870912!==n&&(t.flags|=128,i=!0,dl(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(null!==(e=r.last)?e.sibling=a:t.child=a,r.last=a)}return null!==r.tail?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=le(),e.sibling=null,n=$a.current,U($a,i?1&n|2:1&n),di&&ii(t,r.treeForkCount),e):(hl(t),null);case 22:case 23:return Ma(t),Aa(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(hl(t),6&t.subtreeFlags&&(t.flags|=8192)):hl(t),null!==(n=t.updateQueue)&&ul(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&F(Ki),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ei(Mi),hl(t),null;case 25:case 30:return null}throw Error(o(156,t.tag))}function fl(e,t){switch(si(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ei(Mi),Q(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return J(t),null;case 31:if(null!==t.memoizedState){if(Ma(t),null===t.alternate)throw Error(o(340));bi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(Ma(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));bi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return F($a),null;case 4:return Q(),null;case 10:return Ei(t.type),null;case 22:case 23:return Ma(t),Aa(),null!==e&&F(Ki),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return Ei(Mi),null;default:return null}}function gl(e,t){switch(si(t),t.tag){case 3:Ei(Mi),Q();break;case 26:case 27:case 5:J(t);break;case 4:Q();break;case 31:null!==t.memoizedState&&Ma(t);break;case 13:Ma(t);break;case 19:F($a);break;case 10:Ei(t.type);break;case 22:case 23:Ma(t),Aa(),null!==e&&F(Ki);break;case 24:Ei(Mi)}}function yl(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(s){Su(t,t.return,s)}}function wl(e,t,n){try{var r=t.updateQueue,i=null!==r?r.lastEffect:null;if(null!==i){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(void 0!==s){o.destroy=void 0,i=t;var l=n,c=s;try{c()}catch(u){Su(i,l,u)}}}r=r.next}while(r!==a)}}catch(u){Su(t,t.return,u)}}function bl(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{Ea(t,n)}catch(r){Su(e,e.return,r)}}}function vl(e,t,n){n.props=zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Su(e,t,r)}}function xl(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(i){Su(e,t,i)}}function kl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(i){Su(e,t,i)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(a){Su(e,t,a)}else n.current=null}function zl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){Su(e,e.return,i)}}function Sl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,a=null,s=null,l=null,c=null,u=null,d=null;for(f in n){var h=n[f];if(n.hasOwnProperty(f)&&null!=h)switch(f){case"checked":case"value":break;case"defaultValue":c=h;default:r.hasOwnProperty(f)||dd(e,t,f,null,r,h)}}for(var p in r){var f=r[p];if(h=n[p],r.hasOwnProperty(p)&&(null!=f||null!=h))switch(p){case"type":a=f;break;case"name":i=f;break;case"checked":u=f;break;case"defaultChecked":d=f;break;case"value":s=f;break;case"defaultValue":l=f;break;case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(o(137,t));break;default:f!==h&&dd(e,t,p,f,r,h)}}return void wt(e,s,l,c,u,d,a,i);case"select":for(a in f=s=l=p=null,n)if(c=n[a],n.hasOwnProperty(a)&&null!=c)switch(a){case"value":break;case"multiple":f=c;default:r.hasOwnProperty(a)||dd(e,t,a,null,r,c)}for(i in r)if(a=r[i],c=n[i],r.hasOwnProperty(i)&&(null!=a||null!=c))switch(i){case"value":p=a;break;case"defaultValue":l=a;break;case"multiple":s=a;default:a!==c&&dd(e,t,i,a,r,c)}return t=l,n=s,r=f,void(null!=p?xt(e,!!n,p,!1):!!r!==!!n&&(null!=t?xt(e,!!n,t,!0):xt(e,!!n,n?[]:"",!1)));case"textarea":for(l in f=p=null,n)if(i=n[l],n.hasOwnProperty(l)&&null!=i&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:dd(e,t,l,null,r,i)}for(s in r)if(i=r[s],a=n[s],r.hasOwnProperty(s)&&(null!=i||null!=a))switch(s){case"value":p=i;break;case"defaultValue":f=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(o(91));break;default:i!==a&&dd(e,t,s,i,r,a)}return void kt(e,p,f);case"option":for(var m in n)if(p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else dd(e,t,m,null,r,p);for(c in r)if(p=r[c],f=n[c],r.hasOwnProperty(c)&&p!==f&&(null!=p||null!=f))if("selected"===c)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else dd(e,t,c,p,r,f);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g)&&dd(e,t,g,null,r,p);for(u in r)if(p=r[u],f=n[u],r.hasOwnProperty(u)&&p!==f&&(null!=p||null!=f))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(o(137,t));break;default:dd(e,t,u,p,r,f)}return;default:if(Tt(t)){for(var y in n)p=n[y],n.hasOwnProperty(y)&&void 0!==p&&!r.hasOwnProperty(y)&&hd(e,t,y,void 0,r,p);for(d in r)p=r[d],f=n[d],!r.hasOwnProperty(d)||p===f||void 0===p&&void 0===f||hd(e,t,d,p,r,f);return}}for(var w in n)p=n[w],n.hasOwnProperty(w)&&null!=p&&!r.hasOwnProperty(w)&&dd(e,t,w,null,r,p);for(h in r)p=r[h],f=n[h],!r.hasOwnProperty(h)||p===f||null==p&&null==f||dd(e,t,h,p,r,f)}(r,e.type,n,t),r[Be]=t}catch(i){Su(e,e.return,i)}}function _l(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&jd(e.type)||4===e.tag}function El(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||_l(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&jd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function jl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Pt));else if(4!==r&&(27===r&&jd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(jl(e,t,n),e=e.sibling;null!==e;)jl(e,t,n),e=e.sibling}function Tl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&jd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(Tl(e,t,n),e=e.sibling;null!==e;)Tl(e,t,n),e=e.sibling}function Cl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);pd(t,r,n),t[Ue]=e,t[Be]=n}catch(a){Su(e,e.return,a)}}var Il=!1,Al=!1,Pl=!1,Rl="function"===typeof WeakSet?WeakSet:Set,Nl=null;function Dl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ql(e,n),4&r&&yl(5,n);break;case 1:if(Ql(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){Su(n,n.return,o)}else{var i=zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Su(n,n.return,s)}}64&r&&bl(n),512&r&&xl(n,n.return);break;case 3:if(Ql(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{Ea(e,t)}catch(o){Su(n,n.return,o)}}break;case 27:null===t&&4&r&&Cl(n);case 26:case 5:Ql(e,n),null===t&&4&r&&zl(n),512&r&&xl(n,n.return);break;case 12:Ql(e,n);break;case 31:Ql(e,n),4&r&&Ul(e,n);break;case 13:Ql(e,n),4&r&&Bl(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=Tu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||Il)){t=null!==t&&null!==t.memoizedState||Al,i=Il;var a=Al;Il=r,(Al=t)&&!a?Jl(e,n,0!==(8772&n.subtreeFlags)):Ql(e,n),Il=i,Al=a}break;case 30:break;default:Ql(e,n)}}function Ol(e){var t=e.alternate;null!==t&&(e.alternate=null,Ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Qe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ll=null,Ml=!1;function $l(e,t,n){for(n=n.child;null!==n;)Fl(e,t,n),n=n.sibling}function Fl(e,t,n){if(we&&"function"===typeof we.onCommitFiberUnmount)try{we.onCommitFiberUnmount(ye,n)}catch(a){}switch(n.tag){case 26:Al||kl(n,t),$l(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:Al||kl(n,t);var r=Ll,i=Ml;jd(n.type)&&(Ll=n.stateNode,Ml=!1),$l(e,t,n),$d(n.stateNode),Ll=r,Ml=i;break;case 5:Al||kl(n,t);case 6:if(r=Ll,i=Ml,Ll=null,$l(e,t,n),Ml=i,null!==(Ll=r))if(Ml)try{(9===Ll.nodeType?Ll.body:"HTML"===Ll.nodeName?Ll.ownerDocument.body:Ll).removeChild(n.stateNode)}catch(o){Su(n,t,o)}else try{Ll.removeChild(n.stateNode)}catch(o){Su(n,t,o)}break;case 18:null!==Ll&&(Ml?(Td(9===(e=Ll).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Wh(e)):Td(Ll,n.stateNode));break;case 4:r=Ll,i=Ml,Ll=n.stateNode.containerInfo,Ml=!0,$l(e,t,n),Ll=r,Ml=i;break;case 0:case 11:case 14:case 15:wl(2,n,t),Al||wl(4,n,t),$l(e,t,n);break;case 1:Al||(kl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&vl(n,t,r)),$l(e,t,n);break;case 21:$l(e,t,n);break;case 22:Al=(r=Al)||null!==n.memoizedState,$l(e,t,n),Al=r;break;default:$l(e,t,n)}}function Ul(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{Wh(e)}catch(n){Su(t,t.return,n)}}}function Bl(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Wh(e)}catch(n){Su(t,t.return,n)}}function Vl(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Rl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Rl),t;default:throw Error(o(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Cu.bind(null,e,t);t.then(r,r)}})}function Hl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r],a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:if(jd(l.type)){Ll=l.stateNode,Ml=!1;break e}break;case 5:Ll=l.stateNode,Ml=!1;break e;case 3:case 4:Ll=l.stateNode.containerInfo,Ml=!0;break e}l=l.return}if(null===Ll)throw Error(o(160));Fl(a,s,i),Ll=null,Ml=!1,null!==(a=i.alternate)&&(a.return=null),i.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)Gl(t,e),t=t.sibling}var Wl=null;function Gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hl(t,e),Kl(e),4&r&&(wl(3,e,e.return),yl(3,e),wl(5,e,e.return));break;case 1:Hl(t,e),Kl(e),512&r&&(Al||null===n||kl(n,n.return)),64&r&&Il&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var i=Wl;if(Hl(t,e),Kl(e),512&r&&(Al||null===n||kl(n,n.return)),4&r){var a=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":(!(a=i.getElementsByTagName("title")[0])||a[qe]||a[Ue]||"http://www.w3.org/2000/svg"===a.namespaceURI||a.hasAttribute("itemprop"))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector("head > title"))),pd(a,r,n),a[Ue]=e,et(a),r=a;break e;case"link":var s=rh("link","href",i).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((a=s[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&a.getAttribute("rel")===(null==n.rel?null:n.rel)&&a.getAttribute("title")===(null==n.title?null:n.title)&&a.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}pd(a=i.createElement(r),r,n),i.head.appendChild(a);break;case"meta":if(s=rh("meta","content",i).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((a=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&a.getAttribute("name")===(null==n.name?null:n.name)&&a.getAttribute("property")===(null==n.property?null:n.property)&&a.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&a.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}pd(a=i.createElement(r),r,n),i.head.appendChild(a);break;default:throw Error(o(468,r))}a[Ue]=e,et(a),r=a}e.stateNode=r}else ih(i,e.type,e.stateNode);else e.stateNode=Xd(i,r,e.memoizedProps);else a!==r?(null===a?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):a.count--,null===r?ih(i,e.type,e.stateNode):Xd(i,r,e.memoizedProps)):null===r&&null!==e.stateNode&&Sl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Hl(t,e),Kl(e),512&r&&(Al||null===n||kl(n,n.return)),null!==n&&4&r&&Sl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Hl(t,e),Kl(e),512&r&&(Al||null===n||kl(n,n.return)),32&e.flags){i=e.stateNode;try{St(i,"")}catch(m){Su(e,e.return,m)}}4&r&&null!=e.stateNode&&Sl(e,i=e.memoizedProps,null!==n?n.memoizedProps:i),1024&r&&(Pl=!0);break;case 6:if(Hl(t,e),Kl(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(m){Su(e,e.return,m)}}break;case 3:if(nh=null,i=Wl,Wl=Bd(t.containerInfo),Hl(t,e),Wl=i,Kl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Wh(t.containerInfo)}catch(m){Su(e,e.return,m)}Pl&&(Pl=!1,ql(e));break;case 4:r=Wl,Wl=Bd(e.stateNode.containerInfo),Hl(t,e),Kl(e),Wl=r;break;case 12:default:Hl(t,e),Kl(e);break;case 31:case 19:Hl(t,e),Kl(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Vl(e,r)));break;case 13:Hl(t,e),Kl(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(Rc=le()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Vl(e,r)));break;case 22:i=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=Il,d=Al;if(Il=u||i,Al=d||c,Hl(t,e),Al=d,Il=u,Kl(e),8192&r)e:for(t=e.stateNode,t._visibility=i?-2&t._visibility:1|t._visibility,i&&(null===n||c||Il||Al||Yl(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(a=c.stateNode,i)"function"===typeof(s=a.style).setProperty?s.setProperty("display","none","important"):s.display="none";else{l=c.stateNode;var h=c.memoizedProps.style,p=void 0!==h&&null!==h&&h.hasOwnProperty("display")?h.display:null;l.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(m){Su(c,c.return,m)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(m){Su(c,c.return,m)}}}else if(18===t.tag){if(null===n){c=t;try{var f=c.stateNode;i?Cd(f,!0):Cd(c.stateNode,!1)}catch(m){Su(c,c.return,m)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Vl(e,n))));case 30:case 21:}}function Kl(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(_l(r)){n=r;break}r=r.return}if(null==n)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode;Tl(e,El(e),i);break;case 5:var a=n.stateNode;32&n.flags&&(St(a,""),n.flags&=-33),Tl(e,El(e),a);break;case 3:case 4:var s=n.stateNode.containerInfo;jl(e,El(e),s);break;default:throw Error(o(161))}}catch(l){Su(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ql(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;ql(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Ql(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Dl(e,t.alternate,t),t=t.sibling}function Yl(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:wl(4,t,t.return),Yl(t);break;case 1:kl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&vl(t,t.return,n),Yl(t);break;case 27:$d(t.stateNode);case 26:case 5:kl(t,t.return),Yl(t);break;case 22:null===t.memoizedState&&Yl(t);break;default:Yl(t)}e=e.sibling}}function Jl(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Jl(i,a,n),yl(4,a);break;case 1:if(Jl(i,a,n),"function"===typeof(i=(r=a).stateNode).componentDidMount)try{i.componentDidMount()}catch(c){Su(r,r.return,c)}if(null!==(i=(r=a).updateQueue)){var s=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(null!==l)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)_a(l[i],s)}catch(c){Su(r,r.return,c)}}n&&64&o&&bl(a),xl(a,a.return);break;case 27:Cl(a);case 26:case 5:Jl(i,a,n),n&&null===r&&4&o&&zl(a),xl(a,a.return);break;case 12:Jl(i,a,n);break;case 31:Jl(i,a,n),n&&4&o&&Ul(i,a);break;case 13:Jl(i,a,n),n&&4&o&&Bl(i,a);break;case 22:null===a.memoizedState&&Jl(i,a,n),xl(a,a.return);break;case 30:break;default:Jl(i,a,n)}t=t.sibling}}function Xl(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Fi(n))}function Zl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Fi(e))}function ec(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)tc(e,t,n,r),t=t.sibling}function tc(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:ec(e,t,n,r),2048&i&&yl(9,t);break;case 1:case 31:case 13:default:ec(e,t,n,r);break;case 3:ec(e,t,n,r),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Fi(e)));break;case 12:if(2048&i){ec(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;"function"===typeof s&&s(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){Su(t,t.return,l)}}else ec(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,null!==t.memoizedState?2&a._visibility?ec(e,t,n,r):rc(e,t):2&a._visibility?ec(e,t,n,r):(a._visibility|=2,nc(e,t,n,r,0!==(10256&t.subtreeFlags)||!1)),2048&i&&Xl(o,t);break;case 24:ec(e,t,n,r),2048&i&&Zl(t.alternate,t)}}function nc(e,t,n,r,i){for(i=i&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var a=e,o=t,s=n,l=r,c=o.flags;switch(o.tag){case 0:case 11:case 15:nc(a,o,s,l,i),yl(8,o);break;case 23:break;case 22:var u=o.stateNode;null!==o.memoizedState?2&u._visibility?nc(a,o,s,l,i):rc(a,o):(u._visibility|=2,nc(a,o,s,l,i)),i&&2048&c&&Xl(o.alternate,o);break;case 24:nc(a,o,s,l,i),i&&2048&c&&Zl(o.alternate,o);break;default:nc(a,o,s,l,i)}t=t.sibling}}function rc(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:rc(n,r),2048&i&&Xl(r.alternate,r);break;case 24:rc(n,r),2048&i&&Zl(r.alternate,r);break;default:rc(n,r)}t=t.sibling}}var ic=8192;function ac(e,t,n){if(e.subtreeFlags&ic)for(e=e.child;null!==e;)oc(e,t,n),e=e.sibling}function oc(e,t,n){switch(e.tag){case 26:ac(e,t,n),e.flags&ic&&null!==e.memoizedState&&function(e,t,n,r){if("stylesheet"===n.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var i=Kd(r.href),a=t.querySelector(qd(i));if(a)return null!==(t=a._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=sh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,void et(a);a=t.ownerDocument||t,r=Qd(r),(i=Fd.get(i))&&eh(r,i),et(a=a.createElement("link"));var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),pd(a,"link",r),n.instance=a}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=sh.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,Wl,e.memoizedState,e.memoizedProps);break;case 5:default:ac(e,t,n);break;case 3:case 4:var r=Wl;Wl=Bd(e.stateNode.containerInfo),ac(e,t,n),Wl=r;break;case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=ic,ic=16777216,ac(e,t,n),ic=r):ac(e,t,n))}}function sc(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function lc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Nl=r,dc(r,e)}sc(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)cc(e),e=e.sibling}function cc(e){switch(e.tag){case 0:case 11:case 15:lc(e),2048&e.flags&&wl(9,e,e.return);break;case 3:case 12:default:lc(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,uc(e)):lc(e)}}function uc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Nl=r,dc(r,e)}sc(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:wl(8,t,t.return),uc(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,uc(t));break;default:uc(t)}e=e.sibling}}function dc(e,t){for(;null!==Nl;){var n=Nl;switch(n.tag){case 0:case 11:case 15:wl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Fi(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Nl=r;else e:for(n=e;null!==Nl;){var i=(r=Nl).sibling,a=r.return;if(Ol(r),r===n){Nl=null;break e}if(null!==i){i.return=a,Nl=i;break e}Nl=a}}}var hc={getCacheForType:function(e){var t=Pi(Mi),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Pi(Mi).controller.signal}},pc="function"===typeof WeakMap?WeakMap:Map,fc=0,mc=null,gc=null,yc=0,wc=0,bc=null,vc=!1,xc=!1,kc=!1,zc=0,Sc=0,_c=0,Ec=0,jc=0,Tc=0,Cc=0,Ic=null,Ac=null,Pc=!1,Rc=0,Nc=0,Dc=1/0,Oc=null,Lc=null,Mc=0,$c=null,Fc=null,Uc=0,Bc=0,Vc=null,Hc=null,Wc=0,Gc=null;function Kc(){return 0!==(2&fc)&&0!==yc?yc&-yc:null!==N.T?Vu():Me()}function qc(){if(0===Tc)if(0===(536870912&yc)||di){var e=Se;0===(3932160&(Se<<=1))&&(Se=262144),Tc=e}else Tc=536870912;return null!==(e=Pa.current)&&(e.flags|=32),Tc}function Qc(e,t,n){(e!==mc||2!==wc&&9!==wc)&&null===e.cancelPendingCommit||(nu(e,0),Zc(e,yc,Tc,!1)),Pe(e,n),0!==(2&fc)&&e===mc||(e===mc&&(0===(2&fc)&&(Ec|=n),4===Sc&&Zc(e,yc,Tc,!1)),Ou(e))}function Yc(e,t,n){if(0!==(6&fc))throw Error(o(327));for(var r=!n&&0===(127&t)&&0===(t&e.expiredLanes)||Te(e,t),i=r?function(e,t){var n=fc;fc|=2;var r=au(),i=ou();mc!==e||yc!==t?(Oc=null,Dc=le()+500,nu(e,t)):xc=Te(e,t);e:for(;;)try{if(0!==wc&&null!==gc){t=gc;var a=bc;t:switch(wc){case 1:wc=0,bc=null,pu(e,t,a,1);break;case 2:case 9:if(ta(a)){wc=0,bc=null,hu(t);break}t=function(){2!==wc&&9!==wc||mc!==e||(wc=7),Ou(e)},a.then(t,t);break e;case 3:wc=7;break e;case 4:wc=5;break e;case 7:ta(a)?(wc=0,bc=null,hu(t)):(wc=0,bc=null,pu(e,t,a,7));break;case 5:var s=null;switch(gc.tag){case 26:s=gc.memoizedState;case 5:case 27:var l=gc;if(s?ah(s):l.stateNode.complete){wc=0,bc=null;var c=l.sibling;if(null!==c)gc=c;else{var u=l.return;null!==u?(gc=u,fu(u)):gc=null}break t}}wc=0,bc=null,pu(e,t,a,5);break;case 6:wc=0,bc=null,pu(e,t,a,6);break;case 8:tu(),Sc=6;break e;default:throw Error(o(462))}}uu();break}catch(d){ru(e,d)}return Si=zi=null,N.H=r,N.A=i,fc=n,null!==gc?0:(mc=null,yc=0,Ir(),Sc)}(e,t):lu(e,t,!0),a=r;;){if(0===i){xc&&!r&&Zc(e,t,0,!1);break}if(n=e.current.alternate,!a||Xc(n)){if(2===i){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;i=Ic;var c=l.current.memoizedState.isDehydrated;if(c&&(nu(l,s).flags|=256),2!==(s=lu(l,s,!1))){if(kc&&!c){l.errorRecoveryDisabledLanes|=a,Ec|=a,i=4;break e}a=Ac,Ac=i,null!==a&&(null===Ac?Ac=a:Ac.push.apply(Ac,a))}i=s}if(a=!1,2!==i)continue}}if(1===i){nu(e,0),Zc(e,t,0,!0);break}e:{switch(r=e,a=i){case 0:case 1:throw Error(o(345));case 4:if((4194048&t)!==t)break;case 6:Zc(r,t,Tc,!vc);break e;case 2:Ac=null;break;case 3:case 5:break;default:throw Error(o(329))}if((62914560&t)===t&&10<(i=Rc+300-le())){if(Zc(r,t,Tc,!vc),0!==je(r,0,!0))break e;Uc=t,r.timeoutHandle=kd(Jc.bind(null,r,n,Ac,Oc,Pc,t,Tc,Ec,Cc,vc,a,"Throttled",-0,0),i)}else Jc(r,n,Ac,Oc,Pc,t,Tc,Ec,Cc,vc,a,null,-0,0)}break}i=lu(e,t,!1),a=!1}Ou(e)}function Jc(e,t,n,r,i,a,o,s,l,c,u,d,h,p){if(e.timeoutHandle=-1,8192&(d=t.subtreeFlags)||16785408===(16785408&d)){oc(t,a,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pt});var f=(62914560&a)===a?Rc-le():(4194048&a)===a?Nc-le():0;if(f=function(e,t){return e.stylesheets&&0===e.count&&ch(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&0===oh&&(oh=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&fd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var l=n[r],c=l.startTime;if(c>s)break;var u=l.transferSize,d=l.initiatorType;u&&fd(d)&&(o+=u*((l=l.responseEnd)<s?1:(s-c)/(l-c)))}if(--r,t+=8*(a+o)/(i.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,"number"===typeof e)?e:5}());var i=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>oh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}(d,f),null!==f)return Uc=a,e.cancelPendingCommit=f(gu.bind(null,e,t,a,n,r,i,o,s,l,u,d,null,h,p)),void Zc(e,a,o,!c)}gu(e,t,a,n,r,i,o,s,l)}function Xc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Xn(a(),i))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zc(e,t,n,r){t&=~jc,t&=~Ec,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ve(i),o=1<<a;r[a]=-1,i&=~o}0!==n&&Re(e,n,t)}function eu(){return 0!==(6&fc)||(Lu(0,!1),!1)}function tu(){if(null!==gc){if(0===wc)var e=gc.return;else Si=zi=null,oo(e=gc),sa=null,la=0,e=gc;for(;null!==e;)gl(e.alternate,e),e=e.return;gc=null}}function nu(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,zd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Uc=0,tu(),mc=e,gc=n=Fr(e.current,null),yc=t,wc=0,bc=null,vc=!1,xc=Te(e,t),kc=!1,Cc=Tc=jc=Ec=_c=Sc=0,Ac=Ic=null,Pc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var i=31-ve(r),a=1<<i;t|=e[i],r&=~a}return zc=t,Ir(),n}function ru(e,t){Ba=null,N.H=ms,t===Ji||t===Zi?(t=aa(),wc=3):t===Xi?(t=aa(),wc=4):wc=t===Ps?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,bc=t,null===gc&&(Sc=1,js(e,qr(t,e.current)))}function iu(){var e=Pa.current;return null===e||((4194048&yc)===yc?null===Ra:((62914560&yc)===yc||0!==(536870912&yc))&&e===Ra)}function au(){var e=N.H;return N.H=ms,null===e?ms:e}function ou(){var e=N.A;return N.A=hc,e}function su(){Sc=4,vc||(4194048&yc)!==yc&&null!==Pa.current||(xc=!0),0===(134217727&_c)&&0===(134217727&Ec)||null===mc||Zc(mc,yc,Tc,!1)}function lu(e,t,n){var r=fc;fc|=2;var i=au(),a=ou();mc===e&&yc===t||(Oc=null,nu(e,t)),t=!1;var o=Sc;e:for(;;)try{if(0!==wc&&null!==gc){var s=gc,l=bc;switch(wc){case 8:tu(),o=6;break e;case 3:case 2:case 9:case 6:null===Pa.current&&(t=!0);var c=wc;if(wc=0,bc=null,pu(e,s,l,c),n&&xc){o=0;break e}break;default:c=wc,wc=0,bc=null,pu(e,s,l,c)}}cu(),o=Sc;break}catch(u){ru(e,u)}return t&&e.shellSuspendCounter++,Si=zi=null,fc=r,N.H=i,N.A=a,null===gc&&(mc=null,yc=0,Ir()),o}function cu(){for(;null!==gc;)du(gc)}function uu(){for(;null!==gc&&!oe();)du(gc)}function du(e){var t=ol(e.alternate,e,zc);e.memoizedProps=e.pendingProps,null===t?fu(e):gc=t}function hu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ws(n,t,t.pendingProps,t.type,void 0,yc);break;case 11:t=Ws(n,t,t.pendingProps,t.type.render,t.ref,yc);break;case 5:oo(t);default:gl(n,t),t=ol(n,t=gc=Ur(t,zc),zc)}e.memoizedProps=e.pendingProps,null===t?fu(e):gc=t}function pu(e,t,n,r){Si=zi=null,oo(t),sa=null,la=0;var i=t.return;try{if(function(e,t,n,r,i){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Ci(t,n,i,!0),null!==(n=Pa.current)){switch(n.tag){case 31:case 13:return null===Ra?su():null===n.alternate&&0===Sc&&(Sc=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ea?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),_u(e,r,i)),!1;case 22:return n.flags|=65536,r===ea?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),_u(e,r,i)),!1}throw Error(o(435,n.tag))}return _u(e,r,i),su(),!1}if(di)return null!==(t=Pa.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==fi&&xi(qr(e=Error(o(422),{cause:r}),n))):(r!==fi&&xi(qr(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,r=qr(r,n),xa(e,i=Cs(e.stateNode,r,i)),4!==Sc&&(Sc=2)),!1;var a=Error(o(520),{cause:r});if(a=qr(a,n),null===Ic?Ic=[a]:Ic.push(a),4!==Sc&&(Sc=2),null===t)return!0;r=qr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,xa(n,e=Cs(n.stateNode,r,e)),!1;case 1:if(t=n.type,a=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==a&&"function"===typeof a.componentDidCatch&&(null===Lc||!Lc.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,As(i=Is(i),e,n,r),xa(n,i),!1}n=n.return}while(null!==n);return!1}(e,i,t,n,yc))return Sc=1,js(e,qr(n,e.current)),void(gc=null)}catch(a){if(null!==i)throw gc=i,a;return Sc=1,js(e,qr(n,e.current)),void(gc=null)}32768&t.flags?(di||1===r?e=!0:xc||0!==(536870912&yc)?e=!1:(vc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=Pa.current)&&13===r.tag&&(r.flags|=16384))),mu(t,e)):fu(t)}function fu(e){var t=e;do{if(0!==(32768&t.flags))return void mu(t,vc);e=t.return;var n=pl(t.alternate,t,zc);if(null!==n)return void(gc=n);if(null!==(t=t.sibling))return void(gc=t);gc=t=e}while(null!==t);0===Sc&&(Sc=5)}function mu(e,t){do{var n=fl(e.alternate,e);if(null!==n)return n.flags&=32767,void(gc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(gc=e);gc=e=n}while(null!==e);Sc=6,gc=null}function gu(e,t,n,r,i,a,s,l,c){e.cancelPendingCommit=null;do{xu()}while(0!==Mc);if(0!==(6&fc))throw Error(o(327));if(null!==t){if(t===e.current)throw Error(o(177));if(a=t.lanes|t.childLanes,function(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ve(n),d=1<<u;s[u]=0,l[u]=-1;var h=c[u];if(null!==h)for(c[u]=null,u=0;u<h.length;u++){var p=h[u];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&Re(e,r,0),0!==a&&0===i&&0!==e.tag&&(e.suspendedLanes|=a&~(o&~t))}(e,n,a|=Cr,s,l,c),e===mc&&(gc=mc=null,yc=0),Fc=t,$c=e,Uc=n,Bc=a,Vc=i,Hc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,ie(he,function(){return ku(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=N.T,N.T=null,i=D.p,D.p=2,s=fc,fc|=4;try{!function(e,t){if(e=e.containerInfo,md=vh,ir(e=rr(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(g){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,h=e,p=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(l=s+i),h!==a||0!==r&&3!==h.nodeType||(c=s+r),3===h.nodeType&&(s+=h.nodeValue.length),null!==(f=h.firstChild);)p=h,h=f;for(;;){if(h===e)break t;if(p===n&&++u===i&&(l=s),p===a&&++d===r&&(c=s),null!==(f=h.nextSibling))break;p=(h=p).parentNode}h=f}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(gd={focusedElem:e,selectionRange:n},vh=!1,Nl=t;null!==Nl;)if(e=(t=Nl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Nl=e;else for(;null!==Nl;){switch(a=(t=Nl).alternate,e=t.flags,t.tag){case 0:if(0!==(4&e)&&null!==(e=null!==(e=t.updateQueue)?e.events:null))for(n=0;n<e.length;n++)(i=e[n]).ref.impl=i.nextImpl;break;case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==a){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var m=zs(n.type,i);e=r.getSnapshotBeforeUpdate(m,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(y){Su(n,n.return,y)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))Id(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Id(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,Nl=e;break}Nl=t.return}}(e,t)}finally{fc=s,D.p=i,N.T=r}}Mc=1,yu(),wu(),bu()}}function yu(){if(1===Mc){Mc=0;var e=$c,t=Fc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=N.T,N.T=null;var r=D.p;D.p=2;var i=fc;fc|=4;try{Gl(t,e);var a=gd,o=rr(e.containerInfo),s=a.focusedElem,l=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&nr(s.ownerDocument.documentElement,s)){if(null!==l&&ir(s)){var c=l.start,u=l.end;if(void 0===u&&(u=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),f=s.textContent.length,m=Math.min(l.start,f),g=void 0===l.end?m:Math.min(l.end,f);!p.extend&&m>g&&(o=g,g=m,m=o);var y=tr(s,m),w=tr(s,g);if(y&&w&&(1!==p.rangeCount||p.anchorNode!==y.node||p.anchorOffset!==y.offset||p.focusNode!==w.node||p.focusOffset!==w.offset)){var b=d.createRange();b.setStart(y.node,y.offset),p.removeAllRanges(),m>g?(p.addRange(b),p.extend(w.node,w.offset)):(b.setEnd(w.node,w.offset),p.addRange(b))}}}}for(d=[],p=s;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof s.focus&&s.focus(),s=0;s<d.length;s++){var v=d[s];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}vh=!!md,gd=md=null}finally{fc=i,D.p=r,N.T=n}}e.current=t,Mc=2}}function wu(){if(2===Mc){Mc=0;var e=$c,t=Fc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=N.T,N.T=null;var r=D.p;D.p=2;var i=fc;fc|=4;try{Dl(e,t.alternate,t)}finally{fc=i,D.p=r,N.T=n}}Mc=3}}function bu(){if(4===Mc||3===Mc){Mc=0,se();var e=$c,t=Fc,n=Uc,r=Hc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Mc=5:(Mc=0,Fc=$c=null,vu(e,e.pendingLanes));var i=e.pendingLanes;if(0===i&&(Lc=null),Le(n),t=t.stateNode,we&&"function"===typeof we.onCommitFiberRoot)try{we.onCommitFiberRoot(ye,t,void 0,128===(128&t.current.flags))}catch(l){}if(null!==r){t=N.T,i=D.p,D.p=2,N.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{N.T=t,D.p=i}}0!==(3&Uc)&&xu(),Ou(e),i=e.pendingLanes,0!==(261930&n)&&0!==(42&i)?e===Gc?Wc++:(Wc=0,Gc=e):Wc=0,Lu(0,!1)}}function vu(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Fi(t)))}function xu(){return yu(),wu(),bu(),ku()}function ku(){if(5!==Mc)return!1;var e=$c,t=Bc;Bc=0;var n=Le(Uc),r=N.T,i=D.p;try{D.p=32>n?32:n,N.T=null,n=Vc,Vc=null;var a=$c,s=Uc;if(Mc=0,Fc=$c=null,Uc=0,0!==(6&fc))throw Error(o(331));var l=fc;if(fc|=4,cc(a.current),tc(a,a.current,s,n),fc=l,Lu(0,!1),we&&"function"===typeof we.onPostCommitFiberRoot)try{we.onPostCommitFiberRoot(ye,a)}catch(c){}return!0}finally{D.p=i,N.T=r,vu(e,t)}}function zu(e,t,n){t=qr(n,t),null!==(e=ba(e,t=Cs(e.stateNode,t,2),2))&&(Pe(e,2),Ou(e))}function Su(e,t,n){if(3===e.tag)zu(e,e,n);else for(;null!==t;){if(3===t.tag){zu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Lc||!Lc.has(r))){e=qr(n,e),null!==(r=ba(t,n=Is(2),2))&&(As(n,r,t,e),Pe(r,2),Ou(r));break}}t=t.return}}function _u(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pc;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(kc=!0,i.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,mc===e&&(yc&n)===n&&(4===Sc||3===Sc&&(62914560&yc)===yc&&300>le()-Rc?0===(2&fc)&&nu(e,0):jc|=n,Cc===yc&&(Cc=0)),Ou(e)}function ju(e,t){0===t&&(t=Ie()),null!==(e=Rr(e,t))&&(Pe(e,t),Ou(e))}function Tu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),ju(e,n)}function Cu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),ju(e,n)}var Iu=null,Au=null,Pu=!1,Ru=!1,Nu=!1,Du=0;function Ou(e){e!==Au&&null===e.next&&(null===Au?Iu=Au=e:Au=Au.next=e),Ru=!0,Pu||(Pu=!0,_d(function(){0!==(6&fc)?ie(ue,Mu):$u()}))}function Lu(e,t){if(!Nu&&Ru){Nu=!0;do{for(var n=!1,r=Iu;null!==r;){if(!t)if(0!==e){var i=r.pendingLanes;if(0===i)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ve(42|e)+1)-1,a=201326741&(a&=i&~(o&~s))?201326741&a|1:a?2|a:0}0!==a&&(n=!0,Bu(r,a))}else a=yc,0===(3&(a=je(r,r===mc?a:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||Te(r,a)||(n=!0,Bu(r,a));r=r.next}}while(n);Nu=!1}}function Mu(){$u()}function $u(){Ru=Pu=!1;var e=0;0!==Du&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==xd&&(xd=e,!0);return xd=null,!1}()&&(e=Du);for(var t=le(),n=null,r=Iu;null!==r;){var i=r.next,a=Fu(r,t);0===a?(r.next=null,null===n?Iu=i:n.next=i,null===i&&(Au=n)):(n=r,(0!==e||0!==(3&a))&&(Ru=!0)),r=i}0!==Mc&&5!==Mc||Lu(e,!1),0!==Du&&(Du=0)}function Fu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=-62914561&e.pendingLanes;0<a;){var o=31-ve(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=Ce(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}if(n=yc,n=je(e,e===(t=mc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===wc||9===wc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ae(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||Te(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&ae(r),Le(n)){case 2:case 8:n=de;break;case 32:default:n=he;break;case 268435456:n=fe}return r=Uu.bind(null,e),n=ie(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ae(r),e.callbackPriority=2,e.callbackNode=null,2}function Uu(e,t){if(0!==Mc&&5!==Mc)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(xu()&&e.callbackNode!==n)return null;var r=yc;return 0===(r=je(e,e===mc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Yc(e,r,t),Fu(e,le()),null!=e.callbackNode&&e.callbackNode===n?Uu.bind(null,e):null)}function Bu(e,t){if(xu())return null;Yc(e,t,!0)}function Vu(){if(0===Du){var e=Vi;0===e&&(e=ze,0===(261888&(ze<<=1))&&(ze=256)),Du=e}return Du}function Hu(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:At(""+e)}function Wu(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Gu=0;Gu<Sr.length;Gu++){var Ku=Sr[Gu];_r(Ku.toLowerCase(),"on"+(Ku[0].toUpperCase()+Ku.slice(1)))}_r(gr,"onAnimationEnd"),_r(yr,"onAnimationIteration"),_r(wr,"onAnimationStart"),_r("dblclick","onDoubleClick"),_r("focusin","onFocus"),_r("focusout","onBlur"),_r(br,"onTransitionRun"),_r(vr,"onTransitionStart"),_r(xr,"onTransitionCancel"),_r(kr,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qu));function Yu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(u){Er(u)}i.currentTarget=null,a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(u){Er(u)}i.currentTarget=null,a=l}}}}function Ju(e,t){var n=t[He];void 0===n&&(n=t[He]=new Set);var r=e+"__bubble";n.has(r)||(td(t,e,2,!1),n.add(r))}function Xu(e,t,n){var r=0;t&&(r|=4),td(n,e,r,t)}var Zu="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[Zu]){e[Zu]=!0,tt.forEach(function(t){"selectionchange"!==t&&(Qu.has(t)||Xu(t,!1,e),Xu(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Zu]||(t[Zu]=!0,Xu("selectionchange",!1,t))}}function td(e,t,n,r){switch(jh(t)){case 2:var i=xh;break;case 8:i=kh;break;default:i=zh}n=i.bind(null,t,n,e),i=void 0,!Bt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function nd(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i)break;if(4===o)for(o=r.return;null!==o;){var c=o.tag;if((3===c||4===c)&&o.stateNode.containerInfo===i)return;o=o.return}for(;null!==s;){if(null===(o=Ye(s)))return;if(5===(c=o.tag)||6===c||26===c||27===c){r=a=o;continue e}s=s.parentNode}}r=r.return}$t(function(){var r=a,i=Nt(n),o=[];e:{var s=zr.get(e);if(void 0!==s){var c=nn,u=e;switch(e){case"keypress":if(0===qt(n))break e;case"keydown":case"keyup":c=wn;break;case"focusin":u="focus",c=cn;break;case"focusout":u="blur",c=cn;break;case"beforeblur":case"afterblur":c=cn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=ln;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=vn;break;case gr:case yr:case wr:c=un;break;case kr:c=xn;break;case"scroll":case"scrollend":c=an;break;case"wheel":c=kn;break;case"copy":case"cut":case"paste":c=dn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=bn;break;case"toggle":case"beforetoggle":c=zn}var d=0!==(4&t),h=!d&&("scroll"===e||"scrollend"===e),p=d?null!==s?s+"Capture":null:s;d=[];for(var f,m=r;null!==m;){var g=m;if(f=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===f||null===p||null!=(g=Ft(m,p))&&d.push(rd(m,g,f)),h)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===Rt||!(u=n.relatedTarget||n.fromElement)||!Ye(u)&&!u[Ve])&&(c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ye(u):null)&&(h=l(u),d=u.tag,u!==h||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=sn,g="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=bn,g="onPointerLeave",p="onPointerEnter",m="pointer"),h=null==c?s:Xe(c),f=null==u?s:Xe(u),(s=new d(g,m+"leave",c,n,i)).target=h,s.relatedTarget=f,g=null,Ye(i)===r&&((d=new d(p,m+"enter",u,n,i)).target=f,d.relatedTarget=h,g=d),h=g,c&&u)e:{for(d=ad,m=u,f=0,g=p=c;g;g=d(g))f++;g=0;for(var y=m;y;y=d(y))g++;for(;0<f-g;)p=d(p),f--;for(;0<g-f;)m=d(m),g--;for(;f--;){if(p===m||null!==m&&p===m.alternate){d=p;break e}p=d(p),m=d(m)}d=null}else d=null;null!==c&&od(o,s,c,d,!1),null!==u&&null!==h&&od(o,h,u,d,!0)}if("select"===(c=(s=r?Xe(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var w=Un;else if(Dn(s))if(Bn)w=Jn;else{w=Qn;var b=qn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&Tt(r.elementType)&&(w=Un):w=Yn;switch(w&&(w=w(e,r))?On(o,w,n,i):(b&&b(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&vt(s,"number",s.value)),b=r?Xe(r):window,e){case"focusin":(Dn(b)||"true"===b.contentEditable)&&(or=b,sr=r,lr=null);break;case"focusout":lr=sr=or=null;break;case"mousedown":cr=!0;break;case"contextmenu":case"mouseup":case"dragend":cr=!1,ur(o,n,i);break;case"selectionchange":if(ar)break;case"keydown":case"keyup":ur(o,n,i)}var v;if(_n)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Rn?An(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Tn&&"ko"!==n.locale&&(Rn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Rn&&(v=Kt()):(Wt="value"in(Ht=i)?Ht.value:Ht.textContent,Rn=!0)),0<(b=id(r,x)).length&&(x=new hn(x,e,null,n,i),o.push({event:x,listeners:b}),v?x.data=v:null!==(v=Pn(n))&&(x.data=v))),(v=jn?function(e,t){switch(e){case"compositionend":return Pn(t);case"keypress":return 32!==t.which?null:(In=!0,Cn);case"textInput":return(e=t.data)===Cn&&In?null:e;default:return null}}(e,n):function(e,t){if(Rn)return"compositionend"===e||!_n&&An(e,t)?(e=Kt(),Gt=Wt=Ht=null,Rn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=id(r,"onBeforeInput")).length&&(b=new hn("onBeforeInput","beforeinput",null,n,i),o.push({event:b,listeners:x}),b.data=v)),function(e,t,n,r,i){if("submit"===t&&n&&n.stateNode===i){var a=Hu((i[Be]||null).action),o=r.submitter;o&&null!==(t=(t=o[Be]||null)?Hu(t.formAction):o.getAttribute("formAction"))&&(a=t,o=null);var s=new nn("action","action",null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==Du){var e=o?Wu(i,o):new FormData(i);ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else"function"===typeof a&&(s.preventDefault(),e=o?Wu(i,o):new FormData(i),ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}(o,e,r,n,i)}Yu(o,t)})}function rd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function id(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;if(5!==(i=i.tag)&&26!==i&&27!==i||null===a||(null!=(i=Ft(e,n))&&r.unshift(rd(e,i,a)),null!=(i=Ft(e,t))&&r.push(rd(e,i,a))),3===e.tag)return r;e=e.return}return[]}function ad(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function od(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===c||(l=c,i?null!=(c=Ft(n,a))&&o.unshift(rd(n,c,l)):i||null!=(c=Ft(n,a))&&o.push(rd(n,c,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var sd=/\r\n?/g,ld=/\u0000|\uFFFD/g;function cd(e){return("string"===typeof e?e:""+e).replace(sd,"\n").replace(ld,"")}function ud(e,t){return t=cd(t),cd(e)===t}function dd(e,t,n,r,i,a){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||St(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&St(e,""+r);break;case"className":ct(e,"class",r);break;case"tabIndex":ct(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ct(e,n,r);break;case"style":jt(e,r,a);break;case"data":if("object"!==t){ct(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=At(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof a&&("formAction"===n?("input"!==t&&dd(e,t,"name",i.name,i,null),dd(e,t,"formEncType",i.formEncType,i,null),dd(e,t,"formMethod",i.formMethod,i,null),dd(e,t,"formTarget",i.formTarget,i,null)):(dd(e,t,"encType",i.encType,i,null),dd(e,t,"method",i.method,i,null),dd(e,t,"target",i.target,i,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=At(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Pt);break;case"onScroll":null!=r&&Ju("scroll",e);break;case"onScrollEnd":null!=r&&Ju("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=At(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Ju("beforetoggle",e),Ju("toggle",e),lt(e,"popover",r);break;case"xlinkActuate":ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ut(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ut(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ut(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ut(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":lt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&lt(e,n=Ct.get(n)||n,r)}}function hd(e,t,n,r,i,a){switch(n){case"style":jt(e,r,a);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?St(e,r):("number"===typeof r||"bigint"===typeof r)&&St(e,""+r);break;case"onScroll":null!=r&&Ju("scroll",e);break;case"onScrollEnd":null!=r&&Ju("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Pt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:nt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),"function"===typeof(a=null!=(a=e[Be]||null)?a[n]:null)&&e.removeEventListener(t,a,i),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):lt(e,n,r):("function"!==typeof a&&null!==a&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i)))}}function pd(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ju("error",e),Ju("load",e);var r,i=!1,a=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:dd(e,t,r,s,n,null)}}return a&&dd(e,t,"srcSet",n.srcSet,n,null),void(i&&dd(e,t,"src",n.src,n,null));case"input":Ju("invalid",e);var l=r=s=a=null,c=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(null!=d)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:dd(e,t,i,d,n,null)}}return void bt(e,r,l,c,u,s,a,!1);case"select":for(a in Ju("invalid",e),i=s=r=null,n)if(n.hasOwnProperty(a)&&null!=(l=n[a]))switch(a){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:dd(e,t,a,l,n,null)}return t=r,n=s,e.multiple=!!i,void(null!=t?xt(e,!!i,t,!1):null!=n&&xt(e,!!i,n,!0));case"textarea":for(s in Ju("invalid",e),r=a=i=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":i=l;break;case"defaultValue":a=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(o(91));break;default:dd(e,t,s,l,n,null)}return void zt(e,i,a,r);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(i=n[c]))if("selected"===c)e.selected=i&&"function"!==typeof i&&"symbol"!==typeof i;else dd(e,t,c,i,n,null);return;case"dialog":Ju("beforetoggle",e),Ju("toggle",e),Ju("cancel",e),Ju("close",e);break;case"iframe":case"object":Ju("load",e);break;case"video":case"audio":for(i=0;i<qu.length;i++)Ju(qu[i],e);break;case"image":Ju("error",e),Ju("load",e);break;case"details":Ju("toggle",e);break;case"embed":case"source":case"link":Ju("error",e),Ju("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(i=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:dd(e,t,u,i,n,null)}return;default:if(Tt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(i=n[d])&&hd(e,t,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(i=n[l])&&dd(e,t,l,i,n,null))}function fd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var md=null,gd=null;function yd(e){return 9===e.nodeType?e:e.ownerDocument}function wd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bd(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function vd(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var xd=null;var kd="function"===typeof setTimeout?setTimeout:void 0,zd="function"===typeof clearTimeout?clearTimeout:void 0,Sd="function"===typeof Promise?Promise:void 0,_d="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Sd?function(e){return Sd.resolve(null).then(e).catch(Ed)}:kd;function Ed(e){setTimeout(function(){throw e})}function jd(e){return"head"===e}function Td(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)||"/&"===n){if(0===r)return e.removeChild(i),void Wh(t);r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;else if("html"===n)$d(e.ownerDocument.documentElement);else if("head"===n){$d(n=e.ownerDocument.head);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[qe]||"SCRIPT"===s||"STYLE"===s||"LINK"===s&&"stylesheet"===a.rel.toLowerCase()||n.removeChild(a),a=o}}else"body"===n&&$d(e.ownerDocument.body);n=i}while(n);Wh(t)}function Cd(e,t){var n=e;e=0;do{var r=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=r}while(n)}function Id(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Id(n),Qe(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function Ad(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=Nd(e.nextSibling)))return null}return e}function Pd(e){return"$?"===e.data||"$~"===e.data}function Rd(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Nd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}var Dd=null;function Od(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return Nd(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function Ld(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Md(e,t,n){switch(t=yd(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}function $d(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Qe(e)}var Fd=new Map,Ud=new Set;function Bd(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Vd=D.d;D.d={f:function(){var e=Vd.f(),t=eu();return e||t},r:function(e){var t=Je(e);null!==t&&5===t.tag&&"form"===t.type?rs(t):Vd.r(e)},D:function(e){Vd.D(e),Wd("dns-prefetch",e,null)},C:function(e,t){Vd.C(e,t),Wd("preconnect",e,t)},L:function(e,t,n){Vd.L(e,t,n);var r=Hd;if(r&&e&&t){var i='link[rel="preload"][as="'+yt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(i+='[imagesrcset="'+yt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(i+='[imagesizes="'+yt(n.imageSizes)+'"]')):i+='[href="'+yt(e)+'"]';var a=i;switch(t){case"style":a=Kd(e);break;case"script":a=Yd(e)}Fd.has(a)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Fd.set(a,e),null!==r.querySelector(i)||"style"===t&&r.querySelector(qd(a))||"script"===t&&r.querySelector(Jd(a))||(pd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}},m:function(e,t){Vd.m(e,t);var n=Hd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+yt(r)+'"][href="'+yt(e)+'"]',a=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Yd(e)}if(!Fd.has(a)&&(e=p({rel:"modulepreload",href:e},t),Fd.set(a,e),null===n.querySelector(i))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Jd(a)))return}pd(r=n.createElement("link"),"link",e),et(r),n.head.appendChild(r)}}},X:function(e,t){Vd.X(e,t);var n=Hd;if(n&&e){var r=Ze(n).hoistableScripts,i=Yd(e),a=r.get(i);a||((a=n.querySelector(Jd(i)))||(e=p({src:e,async:!0},t),(t=Fd.get(i))&&th(e,t),et(a=n.createElement("script")),pd(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}},S:function(e,t,n){Vd.S(e,t,n);var r=Hd;if(r&&e){var i=Ze(r).hoistableStyles,a=Kd(e);t=t||"default";var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(qd(a)))s.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Fd.get(a))&&eh(e,n);var l=o=r.createElement("link");et(l),pd(l,"link",e),l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),l.addEventListener("load",function(){s.loading|=1}),l.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Zd(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(a,o)}}},M:function(e,t){Vd.M(e,t);var n=Hd;if(n&&e){var r=Ze(n).hoistableScripts,i=Yd(e),a=r.get(i);a||((a=n.querySelector(Jd(i)))||(e=p({src:e,async:!0,type:"module"},t),(t=Fd.get(i))&&th(e,t),et(a=n.createElement("script")),pd(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}}};var Hd="undefined"===typeof document?null:document;function Wd(e,t,n){var r=Hd;if(r&&"string"===typeof t&&t){var i=yt(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"===typeof n&&(i+='[crossorigin="'+n+'"]'),Ud.has(i)||(Ud.add(i),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(i)&&(pd(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}}function Gd(e,t,n,r){var i,a,s,l,c=(c=G.current)?Bd(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Kd(n.href),(r=(n=Ze(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Kd(n.href);var u=Ze(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(qd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Fd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Fd.set(e,n),u||(i=c,a=e,s=n,l=d.state,i.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=i.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),pd(a,"link",s),et(a),i.head.appendChild(a))))),t&&null===r)throw Error(o(528,""));return d}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Yd(n),(r=(n=Ze(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Kd(e){return'href="'+yt(e)+'"'}function qd(e){return'link[rel="stylesheet"]['+e+"]"}function Qd(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Yd(e){return'[src="'+yt(e)+'"]'}function Jd(e){return"script[async]"+e}function Xd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+yt(n.href)+'"]');if(r)return t.instance=r,et(r),r;var i=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return et(r=(e.ownerDocument||e).createElement("style")),pd(r,"style",i),Zd(r,n.precedence,e),t.instance=r;case"stylesheet":i=Kd(n.href);var a=e.querySelector(qd(i));if(a)return t.state.loading|=4,t.instance=a,et(a),a;r=Qd(n),(i=Fd.get(i))&&eh(r,i),et(a=(e.ownerDocument||e).createElement("link"));var s=a;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),pd(a,"link",r),t.state.loading|=4,Zd(a,n.precedence,e),t.instance=a;case"script":return a=Yd(n.src),(i=e.querySelector(Jd(a)))?(t.instance=i,et(i),i):(r=n,(i=Fd.get(a))&&th(r=p({},n),i),et(i=(e=e.ownerDocument||e).createElement("script")),pd(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Zd(r,n.precedence,e));return t.instance}function Zd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function eh(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function th(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var nh=null;function rh(e,t,n){if(null===nh){var r=new Map,i=nh=new Map;i.set(n,r)}else(r=(i=nh).get(n))||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[qe]||a[Ue]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var o=a.getAttribute(t)||"";o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function ih(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function ah(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var oh=0;function sh(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)ch(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var lh=null;function ch(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,lh=new Map,t.forEach(uh,e),lh=null,sh.call(e))}function uh(e,t){if(!(4&t.state.loading)){var n=lh.get(e);if(n)var r=n.get(null);else{n=new Map,lh.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<i.length;a++){var o=i[a];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(i=t.instance).getAttribute("data-precedence"),(a=n.get(o)||r)===r&&n.set(null,i),n.set(o,i),this.count++,r=sh.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var dh={$$typeof:x,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function hh(e,t,n,r,i,a,o,s,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function ph(e,t,n,r,i,a,o,s,l,c,u,d){return e=new hh(e,t,n,o,l,c,u,d,s),t=1,!0===a&&(t|=24),a=Mr(3,null,null,t),e.current=a,a.stateNode=e,(t=$i()).refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},ga(a),e}function fh(e){return e?e=Or:Or}function mh(e,t,n,r,i,a){i=fh(i),null===r.context?r.context=i:r.pendingContext=i,(r=wa(t)).payload={element:n},null!==(a=void 0===a?null:a)&&(r.callback=a),null!==(n=ba(e,r,t))&&(Qc(n,0,t),va(n,e,t))}function gh(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function yh(e,t){gh(e,t),(e=e.alternate)&&gh(e,t)}function wh(e){if(13===e.tag||31===e.tag){var t=Rr(e,67108864);null!==t&&Qc(t,0,67108864),yh(e,67108864)}}function bh(e){if(13===e.tag||31===e.tag){var t=Kc(),n=Rr(e,t=Oe(t));null!==n&&Qc(n,0,t),yh(e,t)}}var vh=!0;function xh(e,t,n,r){var i=N.T;N.T=null;var a=D.p;try{D.p=2,zh(e,t,n,r)}finally{D.p=a,N.T=i}}function kh(e,t,n,r){var i=N.T;N.T=null;var a=D.p;try{D.p=8,zh(e,t,n,r)}finally{D.p=a,N.T=i}}function zh(e,t,n,r){if(vh){var i=Sh(r);if(null===i)nd(e,t,r,_h,n),Oh(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Ch=Lh(Ch,e,t,n,r,i),!0;case"dragenter":return Ih=Lh(Ih,e,t,n,r,i),!0;case"mouseover":return Ah=Lh(Ah,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Ph.set(a,Lh(Ph.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Rh.set(a,Lh(Rh.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Oh(e,r),4&t&&-1<Dh.indexOf(e)){for(;null!==i;){var a=Je(i);if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var o=Ee(a.pendingLanes);if(0!==o){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var l=1<<31-ve(o);s.entanglements[1]|=l,o&=~l}Ou(a),0===(6&fc)&&(Dc=le()+500,Lu(0,!1))}}break;case 31:case 13:null!==(s=Rr(a,2))&&Qc(s,0,2),eu(),yh(a,2)}if(null===(a=Sh(r))&&nd(e,t,r,_h,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else nd(e,t,r,null,n)}}function Sh(e){return Eh(e=Nt(e))}var _h=null;function Eh(e){if(_h=null,null!==(e=Ye(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(31===n){if(null!==(e=u(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _h=e,null}function jh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case ue:return 2;case de:return 8;case he:case pe:return 32;case fe:return 268435456;default:return 32}default:return 32}}var Th=!1,Ch=null,Ih=null,Ah=null,Ph=new Map,Rh=new Map,Nh=[],Dh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Oh(e,t){switch(e){case"focusin":case"focusout":Ch=null;break;case"dragenter":case"dragleave":Ih=null;break;case"mouseover":case"mouseout":Ah=null;break;case"pointerover":case"pointerout":Ph.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rh.delete(t.pointerId)}}function Lh(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=Je(t))&&wh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Mh(e){var t=Ye(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void $e(e.priority,function(){bh(n)})}else if(31===t){if(null!==(t=u(n)))return e.blockedOn=t,void $e(e.priority,function(){bh(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function $h(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sh(e.nativeEvent);if(null!==n)return null!==(t=Je(n))&&wh(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Rt=r,n.target.dispatchEvent(r),Rt=null,t.shift()}return!0}function Fh(e,t,n){$h(e)&&n.delete(t)}function Uh(){Th=!1,null!==Ch&&$h(Ch)&&(Ch=null),null!==Ih&&$h(Ih)&&(Ih=null),null!==Ah&&$h(Ah)&&(Ah=null),Ph.forEach(Fh),Rh.forEach(Fh)}function Bh(e,t){e.blockedOn===t&&(e.blockedOn=null,Th||(Th=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Uh)))}var Vh=null;function Hh(e){Vh!==e&&(Vh=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Vh===e&&(Vh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if("function"!==typeof r){if(null===Eh(r||n))continue;break}var a=Je(n);null!==a&&(e.splice(t,3),t-=3,ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Wh(e){function t(t){return Bh(t,e)}null!==Ch&&Bh(Ch,e),null!==Ih&&Bh(Ih,e),null!==Ah&&Bh(Ah,e),Ph.forEach(t),Rh.forEach(t);for(var n=0;n<Nh.length;n++){var r=Nh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Nh.length&&null===(n=Nh[0]).blockedOn;)Mh(n),null===n.blockedOn&&Nh.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Be]||null;if("function"===typeof a)o||Hh(n);else if(o){var s=null;if(a&&a.hasAttribute("formAction")){if(i=a,o=a[Be]||null)s=o.formAction;else if(null!==Eh(i))continue}else s=o.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),Hh(n)}}}function Gh(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==i&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var r=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==i&&(i(),i=null)}}}function Kh(e){this._internalRoot=e}function qh(e){this._internalRoot=e}qh.prototype.render=Kh.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));mh(t.current,Kc(),e,t,null,null)},qh.prototype.unmount=Kh.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;mh(e.current,2,null,e,null,null),eu(),t[Ve]=null}},qh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Me();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nh.length&&0!==t&&t<Nh[n].priority;n++);Nh.splice(n,0,e),0===n&&Mh(e)}};var Qh=i.version;if("19.2.4"!==Qh)throw Error(o(527,Qh,"19.2.4"));D.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return d(i),e;if(a===r)return d(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?h(e):null)?null:e.stateNode};var Yh={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{ye=Jh.inject(Yh),we=Jh}catch(Zh){}}t.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,r="",i=Ss,a=_s,l=Es;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(i=t.onUncaughtError),void 0!==t.onCaughtError&&(a=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError)),t=ph(e,1,!1,null,0,n,r,null,i,a,l,Gh),e[Ve]=t.current,ed(e),new Kh(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var r=!1,i="",a=Ss,l=_s,c=Es,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onUncaughtError&&(a=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.formState&&(u=n.formState)),(t=ph(e,1,!0,t,0,r,i,u,a,l,c,Gh)).context=fh(null),n=t.current,(i=wa(r=Oe(r=Kc()))).callback=null,ba(n,i,r),n=r,t.current.lanes=n,Pe(t,n),Ou(t),e[Ve]=t.current,ed(e),new qh(t)},t.version="19.2.4"},672(e,t,n){var r=n(43);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(i(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=o.p;try{if(l.T=null,o.p=2,e)return e()}finally{l.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),i="string"===typeof t.integrity?t.integrity:void 0,a="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:a}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:a,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.2.4"},391(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)},799(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},288(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function w(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=w.prototype;var x=v.prototype=new b;x.constructor=v,g(x,w.prototype),x.isPureReactComponent=!0;var k=Array.isArray;function z(){}var S={H:null,A:null,T:null,S:null},_=Object.prototype.hasOwnProperty;function E(e,t,r){var i=r.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==i?i:null,props:r}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function C(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function I(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,c,u=!1;if(null===e)u=!0;else switch(s){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case h:return I((u=e._init)(e._payload),t,i,a,o)}}if(u)return o=o(e),u=""===a?"."+C(e,0):a,k(o)?(i="",null!=u&&(i=u.replace(T,"$&/")+"/"),I(o,t,i,"",function(e){return e})):null!=o&&(j(o)&&(l=o,c=i+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(T,"$&/")+"/")+u,o=E(l.type,c,l.props)),t.push(o)),1;u=0;var d,p=""===a?".":a+":";if(k(e))for(var m=0;m<e.length;m++)u+=I(a=e[m],t,i,s=p+C(a,m),o);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=f&&d[f]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(a=e.next()).done;)u+=I(a=a.value,t,i,s=p+C(a,m++),o);else if("object"===s){if("function"===typeof e.then)return I(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(z,z):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,a,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function A(e,t,n){if(null==e)return e;var r=[],i=0;return I(e,r,"","",function(e){return t.call(n,e,i++)}),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},N={map:A,forEach:function(e,t,n){A(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=p,t.Children=N,t.Component=w,t.Fragment=i,t.Profiler=o,t.PureComponent=v,t.StrictMode=a,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=g({},e.props),i=e.key;if(null!=t)for(a in void 0!==t.key&&(i=""+t.key),t)!_.call(t,a)||"key"===a||"__self"===a||"__source"===a||"ref"===a&&void 0===t.ref||(r[a]=t[a]);var a=arguments.length-2;if(1===a)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,i={},a=null;if(null!=t)for(r in void 0!==t.key&&(a=""+t.key),t)_.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(i[r]=t[r]);var o=arguments.length-2;if(1===o)i.children=n;else if(1<o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return E(e,a,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;null!==i&&i(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(z,R)}catch(a){R(a)}finally{null!==t&&null!==n.types&&(t.types=n.types),S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return S.H.useEffect(e,t)},t.useEffectEvent=function(e){return S.H.useEffectEvent(e)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return S.H.useTransition()},t.version="19.2.4"},43(e,t,n){e.exports=n(288)},960(e,t,n){e.exports=n(799)},896(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>a(l,n))c<i&&0>a(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,h=null,p=3,f=!1,m=!1,g=!1,y=!1,w="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function k(e){if(g=!1,x(e),!m)if(null!==r(c))m=!0,S||(S=!0,z());else{var t=r(u);null!==t&&P(k,t.startTime-e)}}var z,S=!1,_=-1,E=5,j=-1;function T(){return!!y||!(t.unstable_now()-j<E)}function C(){if(y=!1,S){var e=t.unstable_now();j=e;var n=!0;try{e:{m=!1,g&&(g=!1,b(_),_=-1),f=!0;var a=p;try{t:{for(x(e),h=r(c);null!==h&&!(h.expirationTime>e&&T());){var o=h.callback;if("function"===typeof o){h.callback=null,p=h.priorityLevel;var s=o(h.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){h.callback=s,x(e),n=!0;break t}h===r(c)&&i(c),x(e)}else i(c);h=r(c)}if(null!==h)n=!0;else{var l=r(u);null!==l&&P(k,l.startTime-e),n=!1}}break e}finally{h=null,p=a,f=!1}n=void 0}}finally{n?z():S=!1}}}if("function"===typeof v)z=function(){v(C)};else if("undefined"!==typeof MessageChannel){var I=new MessageChannel,A=I.port2;I.port1.onmessage=C,z=function(){A.postMessage(null)}}else z=function(){w(C,0)};function P(e,n){_=w(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){y=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(b(_),_=-1):g=!0,P(k,a-o))):(e.sortIndex=s,n(c,e),m||f||(m=!0,S||(S=!0,z()))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853(e,t,n){e.exports=n(896)},217(e,t,n){e.exports=n.p+"static/media/pexels-dimkidama-15115560.04167beb6bd16a6e9fd4.jpg"},410(e,t,n){e.exports=n.p+"static/media/pexels-firmbee-com-22729701-6963740.a9a8b980823767df4886.jpg"},430(e,t,n){e.exports=n.p+"static/media/pexels-magnetme-3917414-5839461.06d3415285cbf1cc0bf1.jpg"},682(e,t,n){e.exports=n.p+"static/media/pexels-rdne-7310202.0cfb9c3eef397dd77e13.jpg"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;("object"==typeof s||"function"==typeof s)&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>o[e]=()=>r[e]);return o.default=()=>r,n.d(a,o),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.nc=void 0;var r=n(43),i=n.t(r,2),a=n(391),o="popstate";function s(e){return"object"===typeof e&&null!=e&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function l(){return m(function(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return h("",{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default",n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)},function(e,t){return"string"===typeof t?t:p(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function h(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?f(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10),unstable_mask:i}}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function f(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function m(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,c="POP",u=null,p=f();function f(){return(l.state||{idx:null}).idx}function m(){c="POP";let e=f(),t=null==e?null:e-p;p=e,u&&u({action:c,location:w.location,delta:t})}function y(e){return g(e)}null==p&&(p=0,l.replaceState({...l.state,idx:p},""));let w={get action(){return c},get location(){return e(i,l)},listen(e){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(o,m),u=e,()=>{i.removeEventListener(o,m),u=null}},createHref:e=>t(i,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){c="PUSH";let r=s(e)?e:h(w.location,e,t);n&&n(r,e),p=f()+1;let o=d(r,p),m=w.createHref(r.unstable_mask||r);try{l.pushState(o,"",m)}catch(g){if(g instanceof DOMException&&"DataCloneError"===g.name)throw g;i.location.assign(m)}a&&u&&u({action:c,location:w.location,delta:1})},replace:function(e,t){c="REPLACE";let r=s(e)?e:h(w.location,e,t);n&&n(r,e),p=f();let i=d(r,p),o=w.createHref(r.unstable_mask||r);l.replaceState(i,"",o),a&&u&&u({action:c,location:w.location,delta:0})},go:e=>l.go(e)};return w}function g(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),c(n,"No window.location.(origin|href) available to create URL");let r="string"===typeof e?e:p(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}new WeakMap;function y(e,t){return w(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function w(e,t,n,r){let i=R(("string"===typeof t?f(t):t).pathname||"/",n);if(null==i)return null;let a=b(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=P(i);o=C(a[s],e,r)}return o}function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=function(e,a){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,s=arguments.length>3?arguments[3]:void 0,l={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};if(l.relativePath.startsWith("/")){if(!l.relativePath.startsWith(r)&&o)return;c(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length)}let u=F([r,l.relativePath]),d=n.concat(l);e.children&&e.children.length>0&&(c(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),b(e.children,t,d,u,o)),(null!=e.path||e.index)&&t.push({path:u,score:T(u,e.index),routesMeta:d})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of v(e.path))a(e,t,!0,n);else a(e,t)}),t}function v(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=v(r.join("/")),s=[];return s.push(...o.map(e=>""===e?a:[a,e].join("/"))),i&&s.push(...o),s.map(t=>e.startsWith("/")&&""===t?"/":t)}var x=/^:[\w-]+$/,k=3,z=2,S=1,_=10,E=-2,j=e=>"*"===e;function T(e,t){let n=e.split("/"),r=n.length;return n.some(j)&&(r+=E),t&&(r+=z),n.filter(e=>!j(e)).reduce((e,t)=>e+(x.test(t)?k:""===t?S:_),r)}function C(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=I({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=I({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:F([a,u.pathname]),pathnameBase:U(F([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=F([a,u.pathnameBase]))}return o}function I(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=A(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:o,pattern:e}}function A(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];u("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:null!=n}),n){let t=a.charAt(i+e.length);return t&&"/"!==t?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function P(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return u(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}var N=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function D(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function O(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function L(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function M(e){let t=L(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function $(e,t,n){let r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=f(e):(r={...e},c(!r.pathname||!r.pathname.includes("?"),O("?","pathname","search",r)),c(!r.pathname||!r.pathname.includes("#"),O("#","pathname","hash",r)),c(!r.search||!r.search.includes("#"),O("#","search","hash",r)));let a,o=""===e||""===r.pathname,s=o?"/":r.pathname;if(null==s)a=n;else{let e=t.length-1;if(!i&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:r,search:i="",hash:a=""}="string"===typeof e?f(e):e;return r?(r=r.replace(/\/\/+/g,"/"),t=r.startsWith("/")?D(r.substring(1),"/"):D(r,n)):t=n,{pathname:t,search:B(i),hash:V(a)}}(r,a),u=s&&"/"!==s&&s.endsWith("/"),d=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!d||(l.pathname+="/"),l}var F=e=>e.join("/").replace(/\/\/+/g,"/"),U=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",V=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var H=class{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function W(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}function G(e){return e.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var K="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;function q(e,t){let n=e;if("string"!==typeof n||!N.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(K)try{let e=new URL(window.location.href),r=n.startsWith("//")?new URL(e.protocol+n):new URL(n),a=R(r.pathname,t);r.origin===e.origin&&null!=a?n=a+r.search+r.hash:i=!0}catch(a){u(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Symbol("Uninstrumented");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Q=["POST","PUT","PATCH","DELETE"],Y=(new Set(Q),["GET",...Q]);new Set(Y),Symbol("ResetLoaderData");var J=r.createContext(null);J.displayName="DataRouter";var X=r.createContext(null);X.displayName="DataRouterState";var Z=r.createContext(!1);function ee(){return r.useContext(Z)}var te=r.createContext({isTransitioning:!1});te.displayName="ViewTransition";var ne=r.createContext(new Map);ne.displayName="Fetchers";var re=r.createContext(null);re.displayName="Await";var ie=r.createContext(null);ie.displayName="Navigation";var ae=r.createContext(null);ae.displayName="Location";var oe=r.createContext({outlet:null,matches:[],isDataRoute:!1});oe.displayName="Route";var se=r.createContext(null);se.displayName="RouteError";var le="REACT_ROUTER_ERROR";function ce(){return null!=r.useContext(ae)}function ue(){return c(ce(),"useLocation() may be used only in the context of a <Router> component."),r.useContext(ae).location}var de="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function he(e){r.useContext(ie).static||r.useLayoutEffect(e)}function pe(){let{isDataRoute:e}=r.useContext(oe);return e?function(){let{router:e}=_e("useNavigate"),t=je("useNavigate"),n=r.useRef(!1);he(()=>{n.current=!0});let i=r.useCallback(async function(r){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(n.current,de),n.current&&("number"===typeof r?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t]);return i}():function(){c(ce(),"useNavigate() may be used only in the context of a <Router> component.");let e=r.useContext(J),{basename:t,navigator:n}=r.useContext(ie),{matches:i}=r.useContext(oe),{pathname:a}=ue(),o=JSON.stringify(M(i)),s=r.useRef(!1);he(()=>{s.current=!0});let l=r.useCallback(function(r){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(u(s.current,de),!s.current)return;if("number"===typeof r)return void n.go(r);let l=$(r,JSON.parse(o),a,"path"===i.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:F([t,l.pathname])),(i.replace?n.replace:n.push)(l,i.state,i)},[t,n,o,a,e]);return l}()}r.createContext(null);function fe(){let{matches:e}=r.useContext(oe),t=e[e.length-1];return t?t.params:{}}function me(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:n}=r.useContext(oe),{pathname:i}=ue(),a=JSON.stringify(M(n));return r.useMemo(()=>$(e,JSON.parse(a),i,"path"===t),[e,a,i,t])}function ge(e,t,n){c(ce(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=r.useContext(ie),{matches:a}=r.useContext(oe),o=a[a.length-1],s=o?o.params:{},l=o?o.pathname:"/",d=o?o.pathnameBase:"/",h=o&&o.route;{let e=h&&h.path||"";Ie(l,!h||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let p,m=ue();if(t){let e="string"===typeof t?f(t):t;c("/"===d||e.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`),p=e}else p=m;let g=p.pathname||"/",w=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=y(e,{pathname:w});u(h||null!=b,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),u(null==b||void 0!==b[b.length-1].route.element||void 0!==b[b.length-1].route.Component||void 0!==b[b.length-1].route.lazy,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=ze(b&&b.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:F([d,i.encodeLocation?i.encodeLocation(e.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:F([d,i.encodeLocation?i.encodeLocation(e.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),a,n);return t&&v?r.createElement(ae.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...p},navigationType:"POP"}},v):v}function ye(){let e=Te(),t=W(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=r.createElement(r.Fragment,null,r.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),r.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",r.createElement("code",{style:o},"ErrorBoundary")," or"," ",r.createElement("code",{style:o},"errorElement")," prop on your route.")),r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:a},n):null,s)}var we=r.createElement(ye,null),be=class extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&"object"===typeof e&&e&&"digest"in e&&"string"===typeof e.digest){const t=function(e){if(e.startsWith(`${le}:ROUTE_ERROR_RESPONSE:{`))try{let t=JSON.parse(e.slice(40));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText)return new H(t.status,t.statusText,t.data)}catch{}}(e.digest);t&&(e=t)}let t=void 0!==e?r.createElement(oe.Provider,{value:this.props.routeContext},r.createElement(se.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?r.createElement(xe,{error:e},t):t}};be.contextType=Z;var ve=new WeakMap;function xe(e){let{children:t,error:n}=e,{basename:i}=r.useContext(ie);if("object"===typeof n&&n&&"digest"in n&&"string"===typeof n.digest){let e=function(e){if(e.startsWith(`${le}:REDIRECT:{`))try{let t=JSON.parse(e.slice(28));if("object"===typeof t&&t&&"number"===typeof t.status&&"string"===typeof t.statusText&&"string"===typeof t.location&&"boolean"===typeof t.reloadDocument&&"boolean"===typeof t.replace)return t}catch{}}(n.digest);if(e){let t=ve.get(n);if(t)throw t;let a=q(e.location,i);if(K&&!ve.get(n)){if(!a.isExternal&&!e.reloadDocument){const t=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw ve.set(n,t),t}window.location.href=a.absoluteURL||a.to}return r.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return t}function ke(e){let{routeContext:t,match:n,children:i}=e,a=r.useContext(J);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(oe.Provider,{value:t},i)}function ze(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,i=n?.state;if(null==e){if(!i)return null;if(i.errors)e=i.matches;else{if(0!==t.length||i.initialized||!(i.matches.length>0))return null;e=i.matches}}let a=e,o=i?.errors;if(null!=o){let e=a.findIndex(e=>e.route.id&&void 0!==o?.[e.route.id]);c(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,l=-1;if(n&&i){s=i.renderFallback;for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:r}=i,o=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!r||void 0===r[t.route.id]);if(t.route.lazy||o){n.isStatic&&(s=!0),a=l>=0?a.slice(0,l+1):[a[0]];break}}}}let u=n?.onError,d=i&&u?(e,t)=>{u(e,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:G(i.matches),errorInfo:t})}:void 0;return a.reduceRight((e,n,c)=>{let u,h=!1,p=null,f=null;i&&(u=o&&n.route.id?o[n.route.id]:void 0,p=n.route.errorElement||we,s&&(l<0&&0===c?(Ie("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,f=null):l===c&&(h=!0,f=n.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,c+1)),g=()=>{let t;return t=u?p:h?f:n.route.Component?r.createElement(n.route.Component,null):n.route.element?n.route.element:e,r.createElement(ke,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:null!=i},children:t})};return i&&(n.route.ErrorBoundary||n.route.errorElement||0===c)?r.createElement(be,{location:i.location,revalidation:i.revalidation,component:p,error:u,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:d}):g()},null)}function Se(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _e(e){let t=r.useContext(J);return c(t,Se(e)),t}function Ee(e){let t=r.useContext(X);return c(t,Se(e)),t}function je(e){let t=function(e){let t=r.useContext(oe);return c(t,Se(e)),t}(e),n=t.matches[t.matches.length-1];return c(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Te(){let e=r.useContext(se),t=Ee("useRouteError"),n=je("useRouteError");return void 0!==e?e:t.errors?.[n]}var Ce={};function Ie(e,t,n){t||Ce[e]||(Ce[e]=!0,u(!1,n))}var Ae={};function Pe(e,t){e||Ae[t]||(Ae[t]=!0,console.warn(t))}i.useOptimistic;r.memo(Re);function Re(e){let{routes:t,future:n,state:r,isStatic:i,onError:a}=e;return ge(t,void 0,{state:r,isStatic:i,onError:a,future:n})}function Ne(e){let{to:t,replace:n,state:i,relative:a}=e;c(ce(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=r.useContext(ie);u(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=r.useContext(oe),{pathname:l}=ue(),d=pe(),h=$(t,M(s),l,"path"===a),p=JSON.stringify(h);return r.useEffect(()=>{d(JSON.parse(p),{replace:n,state:i,relative:a})},[d,p,a,n,i]),null}function De(e){c(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Oe(e){let{basename:t="/",children:n=null,location:i,navigationType:a="POP",navigator:o,static:s=!1,unstable_useTransitions:l}=e;c(!ce(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=t.replace(/^\/*/,"/"),h=r.useMemo(()=>({basename:d,navigator:o,static:s,unstable_useTransitions:l,future:{}}),[d,o,s,l]);"string"===typeof i&&(i=f(i));let{pathname:p="/",search:m="",hash:g="",state:y=null,key:w="default",unstable_mask:b}=i,v=r.useMemo(()=>{let e=R(p,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:y,key:w,unstable_mask:b},navigationType:a}},[d,p,m,g,y,w,a,b]);return u(null!=v,`<Router basename="${d}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),null==v?null:r.createElement(ie.Provider,{value:h},r.createElement(ae.Provider,{children:n,value:v}))}function Le(e){let{children:t,location:n}=e;return ge(Me(t),n)}r.Component;function Me(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return r.Children.forEach(e,(e,i)=>{if(!r.isValidElement(e))return;let a=[...t,i];if(e.type===r.Fragment)return void n.push.apply(n,Me(e.props.children,a));c(e.type===De,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),c(!e.props.index||!e.props.children,"An index route cannot have child routes.");let o={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=Me(e.props.children,a)),n.push(o)}),n}var $e="get",Fe="application/x-www-form-urlencoded";function Ue(e){return"undefined"!==typeof HTMLElement&&e instanceof HTMLElement}var Be=null;var Ve=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function He(e){return null==e||Ve.has(e)?e:(u(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fe}"`),null)}function We(e,t){let n,r,i,a,o;if(Ue(s=e)&&"form"===s.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?R(o,t):null,n=e.getAttribute("method")||$e,i=He(e.getAttribute("enctype"))||Fe,a=new FormData(e)}else if(function(e){return Ue(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Ue(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||o.getAttribute("action");if(r=s?R(s,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||$e,i=He(e.getAttribute("formenctype"))||He(o.getAttribute("enctype"))||Fe,a=new FormData(o,e),!function(){if(null===Be)try{new FormData(document.createElement("form"),0),Be=!1}catch(e){Be=!0}return Be}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";a.append(`${e}x`,"0"),a.append(`${e}y`,"0")}else t&&a.append(t,r)}}else{if(Ue(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=$e,r=null,i=Fe,o=e}var s;return a&&"text/plain"===i&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function Ge(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function Ke(e,t,n,r){let i="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:"/"===i.pathname?i.pathname=`_root.${r}`:t&&"/"===R(i.pathname,t)?i.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${r}`,i}async function qe(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qe(e){return null!=e&&"string"===typeof e.page}function Ye(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Je(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===a?t.filter((e,t)=>o(e,t)||s(e,t)):"data"===a?t.filter((t,a)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function Xe(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1),[...new Set(r)];var r}function Ze(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Qe(i)&&"script"===i.as&&i.href&&r.has(i.href))return e;let a=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function et(e,t){return"lazy"===e.mode&&!0===t}function tt(){let e=r.useContext(J);return Ge(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function nt(){let e=r.useContext(X);return Ge(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var rt=r.createContext(void 0);function it(){let e=r.useContext(rt);return Ge(e,"You must render this element inside a <HydratedRouter> element"),e}function at(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ot(e,t,n){if(n&&!ut)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}rt.displayName="FrameworkContext";function st(e){let{page:t,...n}=e,{router:i}=tt(),a=r.useMemo(()=>y(i.routes,t,i.basename),[i.routes,t,i.basename]);return a?r.createElement(ct,{page:t,matches:a,...n}):null}function lt(e){let{manifest:t,routeModules:n}=it(),[i,a]=r.useState([]);return r.useEffect(()=>{let r=!1;return async function(e,t,n){let r=await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await qe(r,n);return e.links?e.links():[]}return[]}));return Ze(r.flat(1).filter(Ye).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{r||a(e)}),()=>{r=!0}},[e,t,n]),i}function ct(e){let{page:t,matches:n,...i}=e,a=ue(),{future:o,manifest:s,routeModules:l}=it(),{basename:c}=tt(),{loaderData:u,matches:d}=nt(),h=r.useMemo(()=>Je(t,n,d,s,a,"data"),[t,n,d,s,a]),p=r.useMemo(()=>Je(t,n,d,s,a,"assets"),[t,n,d,s,a]),f=r.useMemo(()=>{if(t===a.pathname+a.search+a.hash)return[];let e=new Set,r=!1;if(n.forEach(t=>{let n=s.routes[t.route.id];n&&n.hasLoader&&(!h.some(e=>e.route.id===t.route.id)&&t.route.id in u&&l[t.route.id]?.shouldRevalidate||n.hasClientLoader?r=!0:e.add(t.route.id))}),0===e.size)return[];let i=Ke(t,c,o.unstable_trailingSlashAwareDataRequests,"data");return r&&e.size>0&&i.searchParams.set("_routes",n.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[i.pathname+i.search]},[c,o.unstable_trailingSlashAwareDataRequests,u,a,s,h,n,t,l]),m=r.useMemo(()=>Xe(p,s),[p,s]),g=lt(p);return r.createElement(r.Fragment,null,f.map(e=>r.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...i})),m.map(e=>r.createElement("link",{key:e,rel:"modulepreload",href:e,...i})),g.map(e=>{let{key:t,link:n}=e;return r.createElement("link",{key:t,nonce:i.nonce,...n,crossOrigin:n.crossOrigin??i.crossOrigin})}))}var ut=!1;function dt(e){let{manifest:t,serverHandoffString:n,isSpaMode:i,renderMeta:a,routeDiscovery:o,ssr:s}=it(),{router:l,static:c,staticContext:u}=tt(),{matches:d}=nt(),h=ee(),p=et(o,s);a&&(a.didRenderScripts=!0);let f=ot(d,null,i);r.useEffect(()=>{ut=!0},[]);let m=r.useMemo(()=>{if(h)return null;let i=u?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",a=c?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${p?"":`import ${JSON.stringify(t.url)}`};\n${f.map((e,n)=>{let r=`route${n}`,i=t.routes[e.route.id];Ge(i,`Route ${e.route.id} not found in manifest`);let{clientActionModule:a,clientLoaderModule:o,clientMiddlewareModule:s,hydrateFallbackModule:l,module:c}=i,u=[...a?[{module:a,varName:`${r}_clientAction`}]:[],...o?[{module:o,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_clientMiddleware`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${u.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${p?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,i=new Set(t.state.matches.map(e=>e.route.id)),a=t.state.location.pathname.split("/").filter(Boolean),o=["/"];for(a.pop();a.length>0;)o.push(`/${a.join("/")}`),a.pop();o.forEach(e=>{let n=y(t.routes,e,t.basename);n&&n.forEach(e=>i.add(e.route.id))});let s=[...i].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:s,sri:!!n||void 0}}(t,l),null,2)};`:""}\n  window.__reactRouterRouteModules = {${f.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return r.createElement(r.Fragment,null,r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:i},type:void 0}),r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:a},type:"module",async:!0}))},[]),g=ut||h?[]:(w=t.entry.imports.concat(Xe(f,t,{includeHydrateFallback:!0})),[...new Set(w)]);var w;let b="object"===typeof t.sri?t.sri:{};return Pe(!h,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),ut||h?null:r.createElement(r.Fragment,null,"object"===typeof t.sri?r.createElement("script",{...e,"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:b})}}):null,p?null:r.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:b[t.url],suppressHydrationWarning:!0}),r.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:b[t.entry.module],suppressHydrationWarning:!0}),g.map(t=>r.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:b[t],suppressHydrationWarning:!0})),m)}function ht(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}r.Component;function pt(e){let{error:t,isOutsideRemixApp:n}=e;console.error(t);let i,a=r.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(W(t))return r.createElement(ft,{title:"Unhandled Thrown Response!"},r.createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),a);if(t instanceof Error)i=t;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);i=new Error(e)}return r.createElement(ft,{title:"Application Error!",isOutsideRemixApp:n},r.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),r.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},i.stack),a)}function ft(e){let{title:t,renderScripts:n,isOutsideRemixApp:i,children:a}=e,{routeModules:o}=it();return o.root?.Layout&&!i?a:r.createElement("html",{lang:"en"},r.createElement("head",null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),r.createElement("title",null,t)),r.createElement("body",null,r.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},a,n?r.createElement(dt,null):null)))}var mt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{mt&&(window.__reactRouterVersion="7.13.2")}catch(JP){}function gt(e){let{basename:t,children:n,unstable_useTransitions:i,window:a}=e,o=r.useRef();null==o.current&&(o.current=l({window:a,v5Compat:!0}));let s=o.current,[c,u]=r.useState({action:s.action,location:s.location}),d=r.useCallback(e=>{!1===i?u(e):r.startTransition(()=>u(e))},[i]);return r.useLayoutEffect(()=>s.listen(d),[s,d]),r.createElement(Oe,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s,unstable_useTransitions:i})}var yt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wt=r.forwardRef(function(e,t){let{onClick:n,discover:i="render",prefetch:a="none",relative:o,reloadDocument:s,replace:l,unstable_mask:u,state:d,target:h,to:f,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:y,...w}=e,{basename:b,navigator:v,unstable_useTransitions:x}=r.useContext(ie),k="string"===typeof f&&yt.test(f),z=q(f,b);f=z.to;let S=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(ce(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=r.useContext(ie),{hash:a,pathname:o,search:s}=me(e,{relative:t}),l=o;return"/"!==n&&(l="/"===o?n:F([n,o])),i.createHref({pathname:l,search:s,hash:a})}(f,{relative:o}),_=ue(),E=null;if(u){let e=$(u,[],_.unstable_mask?_.unstable_mask.pathname:"/",!0);"/"!==b&&(e.pathname="/"===e.pathname?b:F([b,e.pathname])),E=v.createHref(e)}let[j,T,C]=function(e,t){let n=r.useContext(rt),[i,a]=r.useState(!1),[o,s]=r.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:h}=t,p=r.useRef(null);r.useEffect(()=>{if("render"===e&&s(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{s(e.isIntersecting)})},{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}},[e]),r.useEffect(()=>{if(i){let e=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(e)}}},[i]);let f=()=>{a(!0)},m=()=>{a(!1),s(!1)};return n?"intent"!==e?[o,p,{}]:[o,p,{onFocus:at(l,f),onBlur:at(c,m),onMouseEnter:at(u,f),onMouseLeave:at(d,m),onTouchStart:at(h,f)}]:[!1,p,{}]}(a,w),I=function(e){let{target:t,replace:n,unstable_mask:i,state:a,preventScrollReset:o,relative:s,viewTransition:l,unstable_defaultShouldRevalidate:c,unstable_useTransitions:u}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=pe(),h=ue(),f=me(e,{relative:s});return r.useCallback(m=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(m,t)){m.preventDefault();let t=void 0!==n?n:p(h)===p(f),g=()=>d(e,{replace:t,unstable_mask:i,state:a,preventScrollReset:o,relative:s,viewTransition:l,unstable_defaultShouldRevalidate:c});u?r.startTransition(()=>g()):g()}},[h,d,f,n,i,a,t,e,o,s,l,c,u])}(f,{replace:l,unstable_mask:u,state:d,target:h,preventScrollReset:m,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:y,unstable_useTransitions:x});let A=!(z.isExternal||s),P=r.createElement("a",{...w,...C,href:(A?E:void 0)||z.absoluteURL||S,onClick:A?function(e){n&&n(e),e.defaultPrevented||I(e)}:n,ref:ht(t,T),target:h,"data-discover":k||"render"!==i?void 0:"true"});return j&&!k?r.createElement(r.Fragment,null,P,r.createElement(st,{page:S})):P});wt.displayName="Link";var bt=r.forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:i=!1,className:a="",end:o=!1,style:s,to:l,viewTransition:u,children:d,...h}=e,p=me(l,{relative:h.relative}),f=ue(),m=r.useContext(X),{navigator:g,basename:y}=r.useContext(ie),w=null!=m&&function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.useContext(te);c(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=kt("useViewTransitionState"),a=me(e,{relative:t});if(!n.isTransitioning)return!1;let o=R(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=R(n.nextLocation.pathname,i)||n.nextLocation.pathname;return null!=I(a.pathname,s)||null!=I(a.pathname,o)}(p)&&!0===u,b=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,v=f.pathname,x=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(v=v.toLowerCase(),x=x?x.toLowerCase():null,b=b.toLowerCase()),x&&y&&(x=R(x,y)||x);const k="/"!==b&&b.endsWith("/")?b.length-1:b.length;let z,S=v===b||!o&&v.startsWith(b)&&"/"===v.charAt(k),_=null!=x&&(x===b||!o&&x.startsWith(b)&&"/"===x.charAt(b.length)),E={isActive:S,isPending:_,isTransitioning:w},j=S?n:void 0;z="function"===typeof a?a(E):[a,S?"active":null,_?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let T="function"===typeof s?s(E):s;return r.createElement(wt,{...h,"aria-current":j,className:z,ref:t,style:T,to:l,viewTransition:u},"function"===typeof d?d(E):d)});bt.displayName="NavLink";var vt=r.forwardRef((e,t)=>{let{discover:n="render",fetcherKey:i,navigate:a,reloadDocument:o,replace:s,state:l,method:u=$e,action:d,onSubmit:h,relative:f,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:y,...w}=e,{unstable_useTransitions:b}=r.useContext(ie),v=_t(),x=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:n}=r.useContext(ie),i=r.useContext(oe);c(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),o={...me(e||".",{relative:t})},s=ue();if(null==e){o.search=s.search;let e=new URLSearchParams(o.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();o.search=n?`?${n}`:""}}e&&"."!==e||!a.route.index||(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(o.pathname="/"===o.pathname?n:F([n,o.pathname]));return p(o)}(d,{relative:f}),k="get"===u.toLowerCase()?"get":"post",z="string"===typeof d&&yt.test(d);return r.createElement("form",{ref:t,method:k,action:x,onSubmit:o?h:e=>{if(h&&h(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||u,o=()=>v(t||e.currentTarget,{fetcherKey:i,method:n,navigate:a,replace:s,state:l,relative:f,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:y});b&&!1!==a?r.startTransition(()=>o()):o()},...w,"data-discover":z||"render"!==n?void 0:"true"})});function xt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kt(e){let t=r.useContext(J);return c(t,xt(e)),t}vt.displayName="Form";var zt=0,St=()=>`__${String(++zt)}__`;function _t(){let{router:e}=kt("useSubmit"),{basename:t}=r.useContext(ie),n=je("useRouteId"),i=e.fetch,a=e.navigate;return r.useCallback(async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:o,method:s,encType:l,formData:c,body:u}=We(e,t);if(!1===r.navigate){let e=r.fetcherKey||St();await i(e,n,r.action||o,{unstable_defaultShouldRevalidate:r.unstable_defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:c,body:u,formMethod:r.method||s,formEncType:r.encType||l,flushSync:r.flushSync})}else await a(r.action||o,{unstable_defaultShouldRevalidate:r.unstable_defaultShouldRevalidate,preventScrollReset:r.preventScrollReset,formData:c,body:u,formMethod:r.method||s,formEncType:r.encType||l,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[i,a,t,n])}const Et=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},jt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],a=i+1<e.length,o=a?e[i+1]:0,s=i+2<e.length,l=s?e[i+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let d=(15&o)<<2|l>>6,h=63&l;s||(h=64,a||(d=64)),r.push(n[c],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Et(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){const a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const o=i<e.length?n[e.charAt(i)]:64;++i;const s=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==o||null==s)throw new Tt;const l=t<<2|a>>4;if(r.push(l),64!==o){const e=a<<4&240|o>>2;if(r.push(e),64!==s){const e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Tt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ct=function(e){return function(e){const t=Et(e);return jt.encodeByteArray(t,!0)}(e).replace(/\./g,"")},It=function(e){try{return jt.decodeString(e,!0)}catch(JP){console.error("base64Decode failed: ",JP)}return null};function At(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof globalThis)return globalThis;throw new Error("Unable to locate global object.")}const Pt=()=>{try{return At().__FIREBASE_DEFAULTS__||(()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(JP){return}const t=e&&It(e[1]);return t&&JSON.parse(t)})()}catch(JP){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${JP}`)}},Rt=e=>Pt()?.emulatorHosts?.[e],Nt=e=>{const t=Rt(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Dt=()=>Pt()?.config,Ot=e=>Pt()?.[`_${e}`];class Lt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function Mt(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Ct(JSON.stringify({alg:"none",type:"JWT"})),Ct(JSON.stringify(a)),""].join(".")}function $t(){return"undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:""}function Ft(){const e=Pt()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(globalThis.process)}catch(JP){return!1}}function Ut(){return!Ft()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bt(){try{return"object"===typeof indexedDB}catch(JP){return!1}}class Vt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ht.prototype.create)}}class Ht{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e){const t=(arguments.length<=1?void 0:arguments[1])||{},n=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(Wt,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(r,t):"Error",a=`${this.serviceName}: ${i} (${n}).`;return new Vt(n,a,t)}}const Wt=/\{\$([^}]+)}/g;function Gt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],a=t[i];if(Kt(n)&&Kt(a)){if(!Gt(n,a))return!1}else if(n!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Kt(e){return null!==e&&"object"===typeof e}function qt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Qt(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function Yt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Jt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Xt),void 0===r.error&&(r.error=Xt),void 0===r.complete&&(r.complete=Xt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(JP){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(JP){"undefined"!==typeof console&&console.error&&console.error(JP)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xt(){}function Zt(e){return e&&e._delegate?e._delegate:e}function en(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function tn(e){return(await fetch(e,{credentials:"include"})).ok}class nn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const rn="[DEFAULT]";class an{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Lt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(JP){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(JP){if(n)return null;throw JP}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:rn})}catch(JP){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(JP){}}}}clearInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rn;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rn;return this.instances.has(e)}getOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rn;return this.instancesOptions.get(e)||{}}initialize(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&a.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService(e){let{instanceIdentifier:t,options:n={}}=e,r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:on(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rn;return this.component?this.component.multipleInstances?e:rn:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function on(e){return e===rn?void 0:e}class sn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new an(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}const ln=[];var cn;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(cn||(cn={}));const un={debug:cn.DEBUG,verbose:cn.VERBOSE,info:cn.INFO,warn:cn.WARN,error:cn.ERROR,silent:cn.SILENT},dn=cn.INFO,hn={[cn.DEBUG]:"log",[cn.VERBOSE]:"log",[cn.INFO]:"info",[cn.WARN]:"warn",[cn.ERROR]:"error"},pn=function(e,t){if(t<e.logLevel)return;const n=(new Date).toISOString(),r=hn[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);for(var i=arguments.length,a=new Array(i>2?i-2:0),o=2;o<i;o++)a[o-2]=arguments[o];console[r](`[${n}]  ${e.name}:`,...a)};class fn{constructor(e){this.name=e,this._logLevel=dn,this._logHandler=pn,this._userLogHandler=null,ln.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in cn))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?un[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,cn.DEBUG,...t),this._logHandler(this,cn.DEBUG,...t)}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,cn.VERBOSE,...t),this._logHandler(this,cn.VERBOSE,...t)}info(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,cn.INFO,...t),this._logHandler(this,cn.INFO,...t)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,cn.WARN,...t),this._logHandler(this,cn.WARN,...t)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,cn.ERROR,...t),this._logHandler(this,cn.ERROR,...t)}}let mn,gn;const yn=new WeakMap,wn=new WeakMap,bn=new WeakMap,vn=new WeakMap,xn=new WeakMap;let kn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return wn.get(e);if("objectStoreNames"===t)return e.objectStoreNames||bn.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function zn(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(gn||(gn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(En(this),n),_n(yn.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return _n(e.apply(En(this),n))}:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];const a=e.call(En(this),t,...r);return bn.set(a,t.sort?t.sort():[t]),_n(a)}}function Sn(e){return"function"===typeof e?zn(e):(e instanceof IDBTransaction&&function(e){if(wn.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});wn.set(e,t)}(e),t=e,(mn||(mn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,kn):e);var t}function _n(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(_n(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&yn.set(t,e)}).catch(()=>{}),xn.set(t,e),t}(e);if(vn.has(e))return vn.get(e);const t=Sn(e);return t!==e&&(vn.set(e,t),xn.set(t,e)),t}const En=e=>xn.get(e);const jn=["get","getKey","getAll","getAllKeys","count"],Tn=["put","add","delete","clear"],Cn=new Map;function In(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(Cn.get(t))return Cn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Tn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!jn.includes(n))return;const a=async function(e){const t=this.transaction(e,i?"readwrite":"readonly");let a=t.store;for(var o=arguments.length,s=new Array(o>1?o-1:0),l=1;l<o;l++)s[l-1]=arguments[l];return r&&(a=a.index(s.shift())),(await Promise.all([a[n](...s),i&&t.done]))[0]};return Cn.set(t,a),a}kn=(e=>({...e,get:(t,n,r)=>In(t,n)||e.get(t,n,r),has:(t,n)=>!!In(t,n)||e.has(t,n)}))(kn);class An{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const Pn="@firebase/app",Rn="0.14.11",Nn=new fn("@firebase/app"),Dn="@firebase/app-compat",On="@firebase/analytics-compat",Ln="@firebase/analytics",Mn="@firebase/app-check-compat",$n="@firebase/app-check",Fn="@firebase/auth",Un="@firebase/auth-compat",Bn="@firebase/database",Vn="@firebase/data-connect",Hn="@firebase/database-compat",Wn="@firebase/functions",Gn="@firebase/functions-compat",Kn="@firebase/installations",qn="@firebase/installations-compat",Qn="@firebase/messaging",Yn="@firebase/messaging-compat",Jn="@firebase/performance",Xn="@firebase/performance-compat",Zn="@firebase/remote-config",er="@firebase/remote-config-compat",tr="@firebase/storage",nr="@firebase/storage-compat",rr="@firebase/firestore",ir="@firebase/ai",ar="@firebase/firestore-compat",or="firebase",sr="[DEFAULT]",lr={[Pn]:"fire-core",[Dn]:"fire-core-compat",[Ln]:"fire-analytics",[On]:"fire-analytics-compat",[$n]:"fire-app-check",[Mn]:"fire-app-check-compat",[Fn]:"fire-auth",[Un]:"fire-auth-compat",[Bn]:"fire-rtdb",[Vn]:"fire-data-connect",[Hn]:"fire-rtdb-compat",[Wn]:"fire-fn",[Gn]:"fire-fn-compat",[Kn]:"fire-iid",[qn]:"fire-iid-compat",[Qn]:"fire-fcm",[Yn]:"fire-fcm-compat",[Jn]:"fire-perf",[Xn]:"fire-perf-compat",[Zn]:"fire-rc",[er]:"fire-rc-compat",[tr]:"fire-gcs",[nr]:"fire-gcs-compat",[rr]:"fire-fst",[ar]:"fire-fst-compat",[ir]:"fire-vertex","fire-js":"fire-js",[or]:"fire-js-all"},cr=new Map,ur=new Map,dr=new Map;function hr(e,t){try{e.container.addComponent(t)}catch(JP){Nn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,JP)}}function pr(e){const t=e.name;if(dr.has(t))return Nn.debug(`There were multiple attempts to register component ${t}.`),!1;dr.set(t,e);for(const n of cr.values())hr(n,e);for(const n of ur.values())hr(n,e);return!0}function fr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function mr(e){return null!==e&&void 0!==e&&void 0!==e.settings}const gr=new Ht("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});class yr{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}const wr="12.12.0";function br(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!==typeof t){t={name:t}}const r={name:sr,automaticDataCollectionEnabled:!0,...t},i=r.name;if("string"!==typeof i||!i)throw gr.create("bad-app-name",{appName:String(i)});if(n||(n=Dt()),!n)throw gr.create("no-options");const a=cr.get(i);if(a){if(Gt(n,a.options)&&Gt(r,a.config))return a;throw gr.create("duplicate-app",{appName:i})}const o=new sn(i);for(const l of dr.values())o.addComponent(l);const s=new yr(n,r,o);return cr.set(i,s),s}function vr(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sr;const t=cr.get(e);if(!t&&e===sr&&Dt())return br();if(!t)throw gr.create("no-app",{appName:e});return t}function xr(e,t,n){let r=lr[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Nn.warn(e.join(" "))}pr(new nn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const kr="firebase-heartbeat-store";let zr=null;function Sr(){return zr||(zr=function(e,t){let{blocked:n,upgrade:r,blocking:i,terminated:a}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=indexedDB.open(e,t),s=_n(o);return r&&o.addEventListener("upgradeneeded",e=>{r(_n(o.result),e.oldVersion,e.newVersion,_n(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(kr)}catch(JP){console.warn(JP)}}}).catch(e=>{throw gr.create("idb-open",{originalErrorMessage:e.message})})),zr}async function _r(e,t){try{const n=(await Sr()).transaction(kr,"readwrite"),r=n.objectStore(kr);await r.put(t,Er(e)),await n.done}catch(JP){if(JP instanceof Vt)Nn.warn(JP.message);else{const t=gr.create("idb-set",{originalErrorMessage:JP?.message});Nn.warn(t.message)}}}function Er(e){return`${e.name}!${e.options.appId}`}class jr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Cr(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Tr();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(JP){Nn.warn(JP)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=Tr(),{heartbeatsToSend:t,unsentEntries:n}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024;const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Ir(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ir(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Ct(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(JP){return Nn.warn(JP),""}}}function Tr(){return(new Date).toISOString().substring(0,10)}class Cr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Bt()&&new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(n){t(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Sr()).transaction(kr),n=await t.objectStore(kr).get(Er(e));return await t.done,n}catch(JP){if(JP instanceof Vt)Nn.warn(JP.message);else{const t=gr.create("idb-get",{originalErrorMessage:JP?.message});Nn.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return _r(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return _r(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Ir(e){return Ct(JSON.stringify({version:2,heartbeats:e})).length}var Ar;Ar="",pr(new nn("platform-logger",e=>new An(e),"PRIVATE")),pr(new nn("heartbeat",e=>new jr(e),"PRIVATE")),xr(Pn,Rn,Ar),xr(Pn,Rn,"esm2020"),xr("fire-js","");function Pr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rr=Pr,Nr=new Ht("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Dr=new fn("@firebase/auth");function Or(e){if(Dr.logLevel<=cn.ERROR){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];Dr.error(`Auth (${wr}): ${e}`,...n)}}function Lr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Br(e,...n)}function Mr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Br(e,...n)}function $r(e,t,n){const r={...Rr(),[t]:n};return new Ht("auth","Firebase",r).create(t,{appName:e.name})}function Fr(e){return $r(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ur(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Lr(e,"argument-error"),$r(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Br(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if("string"!==typeof e){const t=n[0],r=[...n.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(t,...r)}return Nr.create(e,...n)}function Vr(e,t){if(!e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];throw Br(t,...r)}}function Hr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Or(t),new Error(t)}function Wr(e,t){e||Hr(t)}function Gr(){return"undefined"!==typeof self&&self.location?.href||""}function Kr(){return"http:"===qr()||"https:"===qr()}function qr(){return"undefined"!==typeof self&&self.location?.protocol||null}function Qr(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(Kr()||function(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine}class Yr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wr(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())||"object"===typeof navigator&&"ReactNative"===navigator.product}get(){return Qr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function Jr(e,t){Wr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}class Xr{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void Hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void Hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void Hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const Zr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},ei=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ti=new Yr(3e4,6e4);function ni(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function ri(e,t,n,r){return ii(e,arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},async()=>{let i={},a={};r&&("GET"===t?a=r:i={body:JSON.stringify(r)});const o=qt({key:e.config.apiKey,...a}).slice(1),s=await e._getAdditionalHeaders();s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:s,...i};return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&en(e.emulatorConfig.host)&&(l.credentials="include"),Xr.fetch()(await oi(e,e.config.apiHost,n,o),l)})}async function ii(e,t,n){e._canInitEmulator=!1;const r={...Zr,...t};try{const t=new li(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ci(e,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const t=i.ok?a.errorMessage:a.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ci(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===n)throw ci(e,"email-already-in-use",a);if("USER_DISABLED"===n)throw ci(e,"user-disabled",a);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw $r(e,s,o);Lr(e,s)}}catch(JP){if(JP instanceof Vt)throw JP;Lr(e,"network-request-failed",{message:String(JP)})}}async function ai(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const a=await ri(e,t,n,r,i);return"mfaPendingCredential"in a&&Lr(e,"multi-factor-auth-required",{_serverResponse:a}),a}async function oi(e,t,n,r){const i=`${t}${n}?${r}`,a=e,o=a.config.emulator?Jr(e.config,i):`${e.config.apiScheme}://${i}`;if(ei.includes(n)&&(await a._persistenceManagerAvailable,"COOKIE"===a._getPersistenceType())){return a._getPersistence()._getFinalTarget(o).toString()}return o}function si(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class li{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(Mr(this.auth,"network-request-failed")),ti.get())})}}function ci(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Mr(e,t,r);return i.customData._tokenResponse=n,i}function ui(e){return void 0!==e&&void 0!==e.enterprise}class di{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return si(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function hi(e,t){return ri(e,"GET","/v2/recaptchaConfig",ni(e,t))}async function pi(e,t){return ri(e,"POST","/v1/accounts:lookup",t)}function fi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(JP){}}function mi(e){return 1e3*Number(e)}function gi(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Or("JWT malformed, contained fewer than 3 sections"),null;try{const e=It(n);return e?JSON.parse(e):(Or("Failed to decode base64 JWT payload"),null)}catch(JP){return Or("Caught error parsing JWT payload as JSON",JP?.toString()),null}}function yi(e){const t=gi(e);return Vr(t,"internal-error"),Vr("undefined"!==typeof t.exp,"internal-error"),Vr("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}async function wi(e,t){if(arguments.length>2&&void 0!==arguments[2]&&arguments[2])return t;try{return await t}catch(JP){throw JP instanceof Vt&&function(e){let{code:t}=e;return"auth/user-disabled"===t||"auth/user-token-expired"===t}(JP)&&e.auth.currentUser===e&&await e.auth.signOut(),JP}}class bi{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(JP){return void("auth/network-request-failed"===JP?.code&&this.schedule(!0))}this.schedule()}}class vi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fi(this.lastLoginAt),this.creationTime=fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function xi(e){const t=e.auth,n=await e.getIdToken(),r=await wi(e,pi(t,{idToken:n}));Vr(r?.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const a=i.providerUserInfo?.length?ki(i.providerUserInfo):[],o=function(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,a),s=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!o?.length,c=!!s&&l,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new vi(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(e,u)}function ki(e){return e.map(e=>{let{providerId:t,...n}=e;return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Vr(e.idToken,"internal-error"),Vr("undefined"!==typeof e.idToken,"internal-error"),Vr("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):yi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Vr(0!==e.length,"internal-error");const t=yi(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]||!this.accessToken||this.isExpired?(Vr(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await ii(e,{},async()=>{const n=qt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=await oi(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const s={method:"POST",headers:o,body:n};return e.emulatorConfig&&en(e.emulatorConfig.host)&&(s.credentials="include"),Xr.fetch()(a,s)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,a=new zi;return n&&(Vr("string"===typeof n,"internal-error",{appName:e}),a.refreshToken=n),r&&(Vr("string"===typeof r,"internal-error",{appName:e}),a.accessToken=r),i&&(Vr("number"===typeof i,"internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return Hr("not implemented")}}function Si(e,t){Vr("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class _i{constructor(e){let{uid:t,auth:n,stsTokenManager:r,...i}=e;this.providerId="firebase",this.proactiveRefresh=new bi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await wi(this,this.stsTokenManager.getToken(this.auth,e));return Vr(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=Zt(e),r=await n.getIdToken(t),i=gi(r);Vr(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a="object"===typeof i.firebase?i.firebase:void 0,o=a?.sign_in_provider;return{claims:i,token:r,authTime:fi(mi(i.auth_time)),issuedAtTime:fi(mi(i.iat)),expirationTime:fi(mi(i.exp)),signInProvider:o||null,signInSecondFactor:a?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=Zt(e);await xi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Vr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _i({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Vr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await xi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mr(this.auth.app))return Promise.reject(Fr(this.auth));const e=await this.getIdToken();return await wi(this,async function(e,t){return ri(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,o=t.tenantId??void 0,s=t._redirectEventId??void 0,l=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:u,emailVerified:d,isAnonymous:h,providerData:p,stsTokenManager:f}=t;Vr(u&&f,e,"internal-error");const m=zi.fromJSON(this.name,f);Vr("string"===typeof u,e,"internal-error"),Si(n,e.name),Si(r,e.name),Vr("boolean"===typeof d,e,"internal-error"),Vr("boolean"===typeof h,e,"internal-error"),Si(i,e.name),Si(a,e.name),Si(o,e.name),Si(s,e.name),Si(l,e.name),Si(c,e.name);const g=new _i({uid:u,auth:e,email:r,emailVerified:d,displayName:n,isAnonymous:h,photoURL:a,phoneNumber:i,tenantId:o,stsTokenManager:m,createdAt:l,lastLoginAt:c});return p&&Array.isArray(p)&&(g.providerData=p.map(e=>({...e}))),s&&(g._redirectEventId=s),g}static async _fromIdTokenResponse(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=new zi;r.updateFromServerResponse(t);const i=new _i({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await xi(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];Vr(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?ki(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!i?.length,o=new zi;o.updateFromIdToken(n);const s=new _i({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:a}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new vi(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(s,l),s}}const Ei=new Map;function ji(e){Wr(e instanceof Function,"Expected a class definition");let t=Ei.get(e);return t?(Wr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ei.set(e,t),t)}class Ti{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ti.type="NONE";const Ci=Ti;function Ii(e,t,n){return`firebase:${e}:${t}:${n}`}class Ai{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Ii(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ii("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"===typeof e){const t=await pi(this.auth,{idToken:e}).catch(()=>{});return t?_i._fromGetAccountInfoResponse(this.auth,t,e):null}return _i._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";if(!t.length)return new Ai(ji(Ci),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||ji(Ci);const a=Ii(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(a);if(t){let n;if("string"===typeof t){const r=await pi(e,{idToken:t}).catch(()=>{});if(!r)break;n=await _i._fromGetAccountInfoResponse(e,r,t)}else n=_i._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch{}const s=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&s.length?(i=s[0],o&&await i._set(a,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(a)}catch{}})),new Ai(i,e,n)):new Ai(i,e,n)}}function Pi(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Oi(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ri(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Mi(t))return"Blackberry";if($i(t))return"Webos";if(Ni(t))return"Safari";if((t.includes("chrome/")||Di(t))&&!t.includes("edge/"))return"Chrome";if(Li(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===n?.length)return n[1]}return"Other"}function Ri(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t();return/firefox\//i.test(e)}function Ni(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t()).toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Di(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t();return/crios\//i.test(e)}function Oi(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t();return/iemobile/i.test(e)}function Li(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t();return/android/i.test(e)}function Mi(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t();return/blackberry/i.test(e)}function $i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t();return/webos/i.test(e)}function Fi(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ui(){return function(){const e=$t();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Bi(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t();return Fi(e)||Li(e)||$i(e)||Mi(e)||/windows phone/i.test(e)||Oi(e)}function Vi(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Pi($t());break;case"Worker":t=`${Pi($t())}-${e}`;break;default:t=e}const r=n.length?n.join(","):"FirebaseCore-web";return`${t}/JsCore/${wr}/${r}`}class Hi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(JP){r(JP)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(JP){t.reverse();for(const r of t)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:JP?.message})}}}class Wi{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}class Gi{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qi(this),this.idTokenSubscription=new qi(this),this.beforeStateQueue=new Hi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ji(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(JP){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await pi(this,{idToken:e}),n=await _i._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(mr(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,i=n?._redirectEventId,a=await this.tryRedirectSignIn(e);t&&t!==i||!a?.user||(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(JP){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(JP))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return Vr(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(JP){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xi(e)}catch(JP){if("auth/network-request-failed"!==JP?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mr(this.app))return Promise.reject(Fr(this));const t=e?Zt(e):null;return t&&Vr(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this._deleted)return e&&Vr(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mr(this.app)?Promise.reject(Fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mr(this.app)?Promise.reject(Fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ji(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e){return ri(e,"GET","/v2/passwordPolicy",ni(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}(this),t=new Wi(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ht("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return ri(e,"POST","/v2/accounts:revokeToken",ni(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ji(e)||this._popupRedirectResolver;Vr(t,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[ji(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(Vr(o,this,"internal-error"),o.then(()=>{a||i(this.currentUser)}),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{a=!0,i()}}{const n=e.addObserver(t);return()=>{a=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Vr(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(mr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e){if(Dr.logLevel<=cn.WARN){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];Dr.warn(`Auth (${wr}): ${e}`,...n)}}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ki(e){return Zt(e)}class qi{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Jt(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return Vr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let Qi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yi(e){return Qi.loadJS(e)}function Ji(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Xi{constructor(){this.enterprise=new Zi}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Zi{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ea="NO_RECAPTCHA";class ta{constructor(e){this.type="recaptcha-enterprise",this.auth=Ki(e)}async verify(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"verify",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function n(t,n,r){const i=window.grecaptcha;ui(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(ea)})}):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new Xi).execute("siteKey",{action:"verify"})}return new Promise((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{hi(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new di(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})})(this.auth).then(i=>{if(!t&&ui(window.grecaptcha))n(i,e,r);else{if("undefined"===typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=Qi.recaptchaEnterpriseScript;0!==t.length&&(t+=i),Yi(t).then(()=>{n(i,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function na(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const a=new ta(e);let o;if(i)o=ea;else try{o=await a.verify(n)}catch(l){o=await a.verify(n,!0)}const s={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in s){const e=s.phoneEnrollmentInfo.phoneNumber,t=s.phoneEnrollmentInfo.recaptchaToken;Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in s){const e=s.phoneSignInInfo.recaptchaToken;Object.assign(s,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return s}return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function ra(e,t,n,r,i){if("EMAIL_PASSWORD_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await na(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await na(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)})}if("PHONE_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await na(e,t,n);return r(e,i).catch(async i=>{if("AUDIT"===e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await na(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)})}{const i=await na(e,t,n,!1,!0);return r(e,i)}}return Promise.reject(i+" provider is not supported.")}async function ia(e){const t=Ki(e),n=await hi(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new di(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){new ta(t).verify()}}function aa(e,t,n){const r=Ki(e);Vr(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,a=oa(t),{host:o,port:s}=function(e){const t=oa(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:sa(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:sa(t)}}}(t),l=null===s?"":`:${s}`,c={url:`${a}//${o}${l}/`},u=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator)return Vr(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void Vr(Gt(c,r.config.emulator)&&Gt(u,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,en(o)?tn(`${a}//${o}${l}`):i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}function oa(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function sa(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class la{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Hr("not implemented")}_getIdTokenResponse(e){return Hr("not implemented")}_linkToIdToken(e,t){return Hr("not implemented")}_getReauthenticationResolver(e){return Hr("not implemented")}}async function ca(e,t){return ri(e,"POST","/v1/accounts:signUp",t)}async function ua(e,t){return ai(e,"POST","/v1/accounts:signInWithPassword",ni(e,t))}async function da(e,t){return ri(e,"POST","/v1/accounts:sendOobCode",ni(e,t))}async function ha(e,t){return da(e,t)}class pa extends la{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new pa(e,t,"password")}static _fromEmailAndCode(e,t){return new pa(e,t,"emailLink",arguments.length>2&&void 0!==arguments[2]?arguments[2]:null)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if(t?.email&&t?.password){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ra(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",ua,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return ai(e,"POST","/v1/accounts:signInWithEmailLink",ni(e,t))}(e,{email:this._email,oobCode:this._password});default:Lr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ra(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ca,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return ai(e,"POST","/v1/accounts:signInWithEmailLink",ni(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Lr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}async function fa(e,t){return ai(e,"POST","/v1/accounts:signInWithIdp",ni(e,t))}class ma extends la{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ma(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Lr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const a=new ma(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){return fa(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,fa(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fa(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qt(t)}return e}}async function ga(e,t){return ri(e,"POST","/v1/accounts:sendVerificationCode",ni(e,t))}const ya={USER_NOT_FOUND:"user-not-found"};class wa extends la{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new wa({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new wa({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ai(e,"POST","/v1/accounts:signInWithPhoneNumber",ni(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ai(e,"POST","/v1/accounts:signInWithPhoneNumber",ni(e,t));if(n.temporaryProof)throw ci(e,"account-exists-with-different-credential",n);return n}(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return async function(e,t){return ai(e,"POST","/v1/accounts:signInWithPhoneNumber",ni(e,{...t,operation:"REAUTH"}),ya)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new wa({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}class ba{constructor(e){const t=Qt(Yt(e)),n=t.apiKey??null,r=t.oobCode??null,i=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(t.mode??null);Vr(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=function(e){const t=Qt(Yt(e)).link,n=t?Qt(Yt(t)).deep_link_id:null,r=Qt(Yt(e)).deep_link_id;return(r?Qt(Yt(r)).link:null)||r||n||t||e}(e);try{return new ba(t)}catch{return null}}}class va{constructor(){this.providerId=va.PROVIDER_ID}static credential(e,t){return pa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ba.parseLink(t);return Vr(n,"argument-error"),pa._fromEmailAndCode(e,n.code,n.tenantId)}}va.PROVIDER_ID="password",va.EMAIL_PASSWORD_SIGN_IN_METHOD="password",va.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class xa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}class ka extends xa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class za extends ka{constructor(){super("facebook.com")}static credential(e){return ma._fromParams({providerId:za.PROVIDER_ID,signInMethod:za.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return za.credentialFromTaggedObject(e)}static credentialFromError(e){return za.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return za.credential(t.oauthAccessToken)}catch{return null}}}za.FACEBOOK_SIGN_IN_METHOD="facebook.com",za.PROVIDER_ID="facebook.com";class Sa extends ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ma._fromParams({providerId:Sa.PROVIDER_ID,signInMethod:Sa.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Sa.credentialFromTaggedObject(e)}static credentialFromError(e){return Sa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Sa.credential(n,r)}catch{return null}}}Sa.GOOGLE_SIGN_IN_METHOD="google.com",Sa.PROVIDER_ID="google.com";class _a extends ka{constructor(){super("github.com")}static credential(e){return ma._fromParams({providerId:_a.PROVIDER_ID,signInMethod:_a.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _a.credentialFromTaggedObject(e)}static credentialFromError(e){return _a.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return _a.credential(t.oauthAccessToken)}catch{return null}}}_a.GITHUB_SIGN_IN_METHOD="github.com",_a.PROVIDER_ID="github.com";class Ea extends ka{constructor(){super("twitter.com")}static credential(e,t){return ma._fromParams({providerId:Ea.PROVIDER_ID,signInMethod:Ea.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ea.credentialFromTaggedObject(e)}static credentialFromError(e){return Ea.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ea.credential(n,r)}catch{return null}}}async function ja(e,t){return ai(e,"POST","/v1/accounts:signUp",ni(e,t))}Ea.TWITTER_SIGN_IN_METHOD="twitter.com",Ea.PROVIDER_ID="twitter.com";class Ta{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=await _i._fromIdTokenResponse(e,n,r),a=Ca(n);return new Ta({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ca(n);return new Ta({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ca(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}class Ia extends Vt{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ia.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ia(e,t,n,r)}}function Aa(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Ia._fromErrorAndOperation(e,n,t,r);throw n})}async function Pa(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=await wi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ta._forOperation(e,"link",r)}async function Ra(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{auth:r}=e;if(mr(r.app))return Promise.reject(Fr(r));const i="reauthenticate";try{const a=await wi(e,Aa(r,i,t,e),n);Vr(a.idToken,r,"internal-error");const o=gi(a.idToken);Vr(o,r,"internal-error");const{sub:s}=o;return Vr(e.uid===s,r,"user-mismatch"),Ta._forOperation(e,i,a)}catch(JP){throw"auth/user-not-found"===JP?.code&&Lr(r,"user-mismatch"),JP}}async function Na(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(mr(e.app))return Promise.reject(Fr(e));const r="signIn",i=await Aa(e,r,t),a=await Ta._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function Da(e,t){return Na(Ki(e),t)}async function Oa(e,t){return Ra(Zt(e),t)}function La(e,t,n){Vr(n.url?.length>0,e,"invalid-continue-uri"),Vr("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),Vr("undefined"===typeof n.linkDomain||n.linkDomain.length>0,e,"invalid-hosting-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.linkDomain=n.linkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Vr(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(Vr(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}async function Ma(e){const t=Ki(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function $a(e,t){let{displayName:n,photoURL:r}=t;if(void 0===n&&void 0===r)return;const i=Zt(e),a={idToken:await i.getIdToken(),displayName:n,photoUrl:r,returnSecureToken:!0},o=await wi(i,async function(e,t){return ri(e,"POST","/v1/accounts:update",t)}(i.auth,a));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const s=i.providerData.find(e=>{let{providerId:t}=e;return"password"===t});s&&(s.displayName=i.displayName,s.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}async function Fa(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const a=await wi(e,async function(e,t){return ri(e,"POST","/v1/accounts:update",t)}(r,i));await e._updateTokensIfNecessary(a,!0)}function Ua(e,t){return ri(e,"POST","/v2/accounts/mfaEnrollment:start",ni(e,t))}new WeakMap;const Ba="__sak";class Va{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ba,"1"),this.storage.removeItem(Ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class Ha extends Va{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ui()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ha.type="LOCAL";const Wa=Ha;function Ga(e){const t=e.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),n=RegExp(`${t}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function Ka(e){return`${"http:"===window.location.protocol?"__dev_":"__HOST-"}FIREBASE_${e.split(":")[3]}`}class qa{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(void 0===typeof window)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return!("boolean"===typeof isSecureContext&&!isSecureContext)&&("undefined"!==typeof navigator&&"undefined"!==typeof document&&(navigator.cookieEnabled??!0))}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=Ka(e);if(window.cookieStore){const e=await window.cookieStore.get(t);return e?.value}return Ga(t)}async _remove(e){if(!this._isAvailable())return;if(!await this._get(e))return;const t=Ka(e);document.cookie=`${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const n=Ka(e);if(window.cookieStore){const e=e=>{const r=e.changed.find(e=>e.name===n);r&&t(r.value);e.deleted.find(e=>e.name===n)&&t(null)},r=()=>window.cookieStore.removeEventListener("change",e);return this.listenerUnsubscribes.set(t,r),window.cookieStore.addEventListener("change",e)}let r=Ga(n);const i=setInterval(()=>{const e=Ga(n);e!==r&&(t(e),r=e)},1e3);this.listenerUnsubscribes.set(t,()=>clearInterval(i))}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}qa.type="COOKIE";class Qa extends Va{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qa.type="SESSION";const Ya=Qa;class Ja{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ja(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(a).map(async e=>e(t.origin,i)),s=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}function Xa(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}Ja.receivers=[];class Za{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50;const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((o,s)=>{const l=Xa("",20);r.port1.start();const c=setTimeout(()=>{s(new Error("unsupported_event"))},n);a={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{s(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),s(new Error("invalid_response"))}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}function eo(){return window}function to(){return"undefined"!==typeof eo().WorkerGlobalScope&&"function"===typeof eo().importScripts}const no="firebaseLocalStorageDb",ro="firebaseLocalStorage",io="fbase_key";class ao{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function oo(e,t){return e.transaction([ro],t?"readwrite":"readonly").objectStore(ro)}function so(){const e=indexedDB.open(no,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(ro,{keyPath:io})}catch(JP){n(JP)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(ro)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(no);return new ao(e).toPromise()}(),t(await so()))})})}async function lo(e,t,n){const r=oo(e,!0).put({[io]:t,value:n});return new ao(r).toPromise()}function co(e,t){const n=oo(e,!0).delete(t);return new ao(n).toPromise()}class uo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await so()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(JP){if(t++>3)throw JP;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return to()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ja._getInstance(to()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Za(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await so();return await lo(e,Ba,"1"),await co(e,Ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>lo(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=oo(e,!1).get(t),r=await new ao(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>co(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=oo(e,!1).getAll();return new ao(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}uo.type="LOCAL";const ho=uo;function po(e,t){return ri(e,"POST","/v2/accounts/mfaSignIn:start",ni(e,t))}Ji("rcb"),new Yr(3e4,6e4);const fo="recaptcha";async function mo(e,t,n){if(!e._getRecaptchaConfig())try{await ia(e)}catch(r){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(r="string"===typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){Vr("enroll"===t.type,e,"internal-error");const i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},a=ra(e,i,"mfaSmsEnrollment",async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===ea){Vr(n?.type===fo,e,"argument-error");return Ua(e,await go(e,t,n))}return Ua(e,t)},"PHONE_PROVIDER");return(await a.catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo}{Vr("signin"===t.type,e,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;Vr(i,e,"missing-multi-factor-info");const a={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},o=ra(e,a,"mfaSmsSignIn",async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===ea){Vr(n?.type===fo,e,"argument-error");return po(e,await go(e,t,n))}return po(e,t)},"PHONE_PROVIDER");return(await o.catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}{const t={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=ra(e,t,"sendVerificationCode",async(e,t)=>{if(t.captchaResponse===ea){Vr(n?.type===fo,e,"argument-error");return ga(e,await go(e,t,n))}return ga(e,t)},"PHONE_PROVIDER");return(await i.catch(e=>Promise.reject(e))).sessionInfo}}finally{n?._reset()}}async function go(e,t,n){Vr(n.type===fo,e,"argument-error");const r=await n.verify();Vr("string"===typeof r,e,"argument-error");const i={...t};if("phoneEnrollmentInfo"in i){const e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,a=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:a}}),i}if("phoneSignInInfo"in i){const e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}class yo{constructor(e){this.providerId=yo.PROVIDER_ID,this.auth=Ki(e)}verifyPhoneNumber(e,t){return mo(this.auth,e,Zt(t))}static credential(e,t){return wa._fromVerification(e,t)}static credentialFromResult(e){const t=e;return yo.credentialFromTaggedObject(t)}static credentialFromError(e){return yo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject(e){let{_tokenResponse:t}=e;if(!t)return null;const{phoneNumber:n,temporaryProof:r}=t;return n&&r?wa._fromTokenResponse(n,r):null}}function wo(e,t){return t?ji(t):(Vr(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}yo.PROVIDER_ID="phone",yo.PHONE_SIGN_IN_METHOD="phone";class bo extends la{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vo(e){return Na(e.auth,new bo(e),e.bypassAuthState)}function xo(e){const{auth:t,user:n}=e;return Vr(n,t,"internal-error"),Ra(n,new bo(e),e.bypassAuthState)}async function ko(e){const{auth:t,user:n}=e;return Vr(n,t,"internal-error"),Pa(n,new bo(e),e.bypassAuthState)}class zo{constructor(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(JP){this.reject(JP)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:o}=e;if(a)return void this.reject(a);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(JP){this.reject(JP)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vo;case"linkViaPopup":case"linkViaRedirect":return ko;case"reauthViaPopup":case"reauthViaRedirect":return xo;default:Lr(this.auth,"internal-error")}}resolve(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const So=new Yr(2e3,1e4);async function _o(e,t,n){if(mr(e.app))return Promise.reject(Mr(e,"operation-not-supported-in-this-environment"));const r=Ki(e);Ur(e,t,xa);const i=wo(r,n);return new Eo(r,"signInViaPopup",t,i).executeNotNull()}class Eo extends zo{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Eo.currentPopupAction&&Eo.currentPopupAction.cancel(),Eo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Vr(e,this.auth,"internal-error"),e}async onExecution(){Wr(1===this.filter.length,"Popup operations only handle one event");const e=Xa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Eo.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mr(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,So.get())};e()}}Eo.currentPopupAction=null;const jo=new Map;class To extends zo{constructor(e,t){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,arguments.length>2&&void 0!==arguments[2]&&arguments[2]),this.eventId=null}async execute(){let e=jo.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ao(t),r=Io(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(JP){e=()=>Promise.reject(JP)}jo.set(this.auth._key(),e)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Co(e,t){jo.set(e._key(),t)}function Io(e){return ji(e._redirectPersistence)}function Ao(e){return Ii("pendingRedirect",e.config.apiKey,e.name)}async function Po(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(mr(e.app))return Promise.reject(Fr(e));const r=Ki(e),i=wo(r,t),a=new To(r,i,n),o=await a.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Ro{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Do(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Do(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Mr(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(No(e))}saveEventToCache(e){this.cachedEventUids.add(No(e)),this.lastProcessedEventTime=Date.now()}}function No(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Do(e){let{type:t,error:n}=e;return"unknown"===t&&"auth/no-auth-event"===n?.code}const Oo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lo=/^https?/;async function Mo(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e){return ri(e,"GET","/v1/projects",arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})}(e);for(const n of t)try{if($o(n))return}catch{}Lr(e,"unauthorized-domain")}function $o(e){const t=Gr(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Lo.test(n))return!1;if(Oo.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}const Fo=new Yr(3e4,6e4);function Uo(){const e=eo().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Bo(e){return new Promise((t,n)=>{function r(){Uo(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Uo(),n(Mr(e,"network-request-failed"))},timeout:Fo.get()})}if(eo().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!eo().gapi?.load){const t=Ji("iframefcb");return eo()[t]=()=>{gapi.load?r():n(Mr(e,"network-request-failed"))},Yi(`${Qi.gapiScript}?onload=${t}`).catch(e=>n(e))}r()}}).catch(e=>{throw Vo=null,e})}let Vo=null;const Ho=new Yr(5e3,15e3),Wo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Go=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ko(e){const t=e.config;Vr(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Jr(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:wr},i=Go.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${qt(r).slice(1)}`}async function qo(e){const t=await function(e){return Vo=Vo||Bo(e),Vo}(e),n=eo().gapi;return Vr(n,e,"internal-error"),t.open({where:document.body,url:Ko(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wo,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Mr(e,"network-request-failed"),a=eo().setTimeout(()=>{r(i)},Ho.get());function o(){eo().clearTimeout(a),n(t)}t.ping(o).then(o,()=>{r(i)})}))}const Qo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Yo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(JP){}}}function Jo(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600;const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l={...Qo,width:r.toString(),height:i.toString(),top:a,left:o},c=$t().toLowerCase();n&&(s=Di(c)?"_blank":n),Ri(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce((e,t)=>{let[n,r]=t;return`${e}${n}=${r},`},"");if(function(){return Fi(arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t())&&!!window.navigator?.standalone}(c)&&"_self"!==s)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",s),new Yo(null);const d=window.open(t||"",s,u);Vr(d,e,"popup-blocked");try{d.focus()}catch(JP){}return new Yo(d)}const Xo="__/auth/handler",Zo="emulator/auth/handler",es=encodeURIComponent("fac");async function ts(e,t,n,r,i,a){Vr(e.config.authDomain,e,"auth-domain-config-required"),Vr(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:wr,eventId:i};if(t instanceof xa){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))o[e]=t}if(t instanceof ka){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const u of Object.keys(s))void 0===s[u]&&delete s[u];const l=await e._getAppCheckToken(),c=l?`#${es}=${encodeURIComponent(l)}`:"";return`${function(e){let{config:t}=e;if(!t.emulator)return`https://${t.authDomain}/${Xo}`;return Jr(t,Zo)}(e)}?${qt(s).slice(1)}${c}`}const ns="webStorageSupport";const rs=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ya,this._completeRedirectFn=Po,this._overrideRedirectResult=Co}async _openPopup(e,t,n,r){Wr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return Jo(e,await ts(e,t,n,Gr(),r),Xa())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){eo().location.href=e}(await ts(e,t,n,Gr(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Wr(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await qo(e),n=new Ro(e);return t.register("authEvent",t=>{Vr(t?.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ns,{type:ns},n=>{const r=n?.[0]?.[ns];void 0!==r&&t(!!r),Lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mo(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bi()||Ni()||Fi()}};var is="@firebase/auth",as="1.13.0";class os{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Vr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const ss=Ot("authIdTokenMaxAge")||300;let ls=null;var cs;!function(e){Qi=e}({loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Mr("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),cs="Browser",pr(new nn("auth",(e,t)=>{let{options:n}=t;const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;Vr(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:s,clientPlatform:cs,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vi(cs)},c=new Gi(r,i,a,l);return function(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(ji);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),pr(new nn("auth-internal",e=>(e=>new os(e))(Ki(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),xr(is,as,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(cs)),xr(is,as,"esm2020");xr("firebase","12.12.0","app");var us,ds,hs="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:{},ps={};(function(){var e;function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(e,t,n){n||(n=0);const r=Array(16);if("string"===typeof t)for(var i=0;i<16;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;i<16;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];let a,o=e.g[3];a=t+(o^n&(i^o))+r[0]+3614090360&4294967295,a=o+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[1]+3905402710&4294967295,o=t+(a<<12&4294967295|a>>>20),a=i+(n^o&(t^n))+r[2]+606105819&4294967295,a=n+(t^(i=o+(a<<17&4294967295|a>>>15))&(o^t))+r[3]+3250441966&4294967295,a=t+(o^(n=i+(a<<22&4294967295|a>>>10))&(i^o))+r[4]+4118548399&4294967295,a=o+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[5]+1200080426&4294967295,o=t+(a<<12&4294967295|a>>>20),a=i+(n^o&(t^n))+r[6]+2821735955&4294967295,a=n+(t^(i=o+(a<<17&4294967295|a>>>15))&(o^t))+r[7]+4249261313&4294967295,a=t+(o^(n=i+(a<<22&4294967295|a>>>10))&(i^o))+r[8]+1770035416&4294967295,a=o+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[9]+2336552879&4294967295,o=t+(a<<12&4294967295|a>>>20),a=i+(n^o&(t^n))+r[10]+4294925233&4294967295,a=n+(t^(i=o+(a<<17&4294967295|a>>>15))&(o^t))+r[11]+2304563134&4294967295,a=t+(o^(n=i+(a<<22&4294967295|a>>>10))&(i^o))+r[12]+1804603682&4294967295,a=o+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[13]+4254626195&4294967295,o=t+(a<<12&4294967295|a>>>20),a=i+(n^o&(t^n))+r[14]+2792965006&4294967295,a=n+(t^(i=o+(a<<17&4294967295|a>>>15))&(o^t))+r[15]+1236535329&4294967295,a=t+(i^o&((n=i+(a<<22&4294967295|a>>>10))^i))+r[1]+4129170786&4294967295,a=o+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[6]+3225465664&4294967295,o=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(o^t))+r[11]+643717713&4294967295,a=n+(o^t&((i=o+(a<<14&4294967295|a>>>18))^o))+r[0]+3921069994&4294967295,a=t+(i^o&((n=i+(a<<20&4294967295|a>>>12))^i))+r[5]+3593408605&4294967295,a=o+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[10]+38016083&4294967295,o=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(o^t))+r[15]+3634488961&4294967295,a=n+(o^t&((i=o+(a<<14&4294967295|a>>>18))^o))+r[4]+3889429448&4294967295,a=t+(i^o&((n=i+(a<<20&4294967295|a>>>12))^i))+r[9]+568446438&4294967295,a=o+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[14]+3275163606&4294967295,o=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(o^t))+r[3]+4107603335&4294967295,a=n+(o^t&((i=o+(a<<14&4294967295|a>>>18))^o))+r[8]+1163531501&4294967295,a=t+(i^o&((n=i+(a<<20&4294967295|a>>>12))^i))+r[13]+2850285829&4294967295,a=o+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[2]+4243563512&4294967295,o=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(o^t))+r[7]+1735328473&4294967295,a=n+(o^t&((i=o+(a<<14&4294967295|a>>>18))^o))+r[12]+2368359562&4294967295,a=t+((n=i+(a<<20&4294967295|a>>>12))^i^o)+r[5]+4294588738&4294967295,a=o+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[8]+2272392833&4294967295,o=t+(a<<11&4294967295|a>>>21),a=i+(o^t^n)+r[11]+1839030562&4294967295,a=n+((i=o+(a<<16&4294967295|a>>>16))^o^t)+r[14]+4259657740&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^o)+r[1]+2763975236&4294967295,a=o+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[4]+1272893353&4294967295,o=t+(a<<11&4294967295|a>>>21),a=i+(o^t^n)+r[7]+4139469664&4294967295,a=n+((i=o+(a<<16&4294967295|a>>>16))^o^t)+r[10]+3200236656&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^o)+r[13]+681279174&4294967295,a=o+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[0]+3936430074&4294967295,o=t+(a<<11&4294967295|a>>>21),a=i+(o^t^n)+r[3]+3572445317&4294967295,a=n+((i=o+(a<<16&4294967295|a>>>16))^o^t)+r[6]+76029189&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^o)+r[9]+3654602809&4294967295,a=o+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[12]+3873151461&4294967295,o=t+(a<<11&4294967295|a>>>21),a=i+(o^t^n)+r[15]+530742520&4294967295,a=n+((i=o+(a<<16&4294967295|a>>>16))^o^t)+r[2]+3299628645&4294967295,a=t+(i^((n=i+(a<<23&4294967295|a>>>9))|~o))+r[0]+4096336452&4294967295,a=o+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[7]+1126891415&4294967295,o=t+(a<<10&4294967295|a>>>22),a=i+(t^(o|~n))+r[14]+2878612391&4294967295,a=n+(o^((i=o+(a<<15&4294967295|a>>>17))|~t))+r[5]+4237533241&4294967295,a=t+(i^((n=i+(a<<21&4294967295|a>>>11))|~o))+r[12]+1700485571&4294967295,a=o+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[3]+2399980690&4294967295,o=t+(a<<10&4294967295|a>>>22),a=i+(t^(o|~n))+r[10]+4293915773&4294967295,a=n+(o^((i=o+(a<<15&4294967295|a>>>17))|~t))+r[1]+2240044497&4294967295,a=t+(i^((n=i+(a<<21&4294967295|a>>>11))|~o))+r[8]+1873313359&4294967295,a=o+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[15]+4264355552&4294967295,o=t+(a<<10&4294967295|a>>>22),a=i+(t^(o|~n))+r[6]+2734768916&4294967295,a=n+(o^((i=o+(a<<15&4294967295|a>>>17))|~t))+r[13]+1309151649&4294967295,a=t+(i^((n=i+(a<<21&4294967295|a>>>11))|~o))+r[4]+4149444226&4294967295,a=o+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[11]+3174756917&4294967295,o=t+(a<<10&4294967295|a>>>22),a=i+(t^(o|~n))+r[2]+718787259&4294967295,a=n+(o^((i=o+(a<<15&4294967295|a>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}function r(e,t){this.h=t;const n=[];let r=!0;for(let i=e.length-1;i>=0;i--){const a=0|e[i];r&&a==t||(n[i]=a,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}(t,function(){this.blockSize=-1}),t.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.v=function(e,t){void 0===t&&(t=e.length);const r=t-this.blockSize,i=this.C;let a=this.h,o=0;for(;o<t;){if(0==a)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"===typeof e){for(;o<t;)if(i[a++]=e.charCodeAt(o++),a==this.blockSize){n(this,i),a=0;break}}else for(;o<t;)if(i[a++]=e[o++],a==this.blockSize){n(this,i),a=0;break}}this.h=a,this.o+=t},t.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var n=e.length-8;n<e.length;++n)e[n]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)e[t++]=this.g[n]>>>r&255;return e};var i={};function a(e){return-128<=e&&e<128?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],e<0?-1:0)}):new r([0|e],e<0?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return s;if(e<0)return h(o(-e));const t=[];let n=1;for(let r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new r(t,0)}var s=a(0),l=a(1),c=a(16777216);function u(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function d(e){return-1==e.h}function h(e){const t=e.g.length,n=[];for(let r=0;r<t;r++)n[r]=~e.g[r];return new r(n,~e.h).add(l)}function p(e,t){return e.add(h(t))}function f(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(u(t))throw Error("division by zero");if(u(e))return new m(s,s);if(d(e))return t=g(h(e),t),new m(h(t.g),h(t.h));if(d(t))return t=g(e,h(t)),new m(h(t.g),t.h);if(e.g.length>30){if(d(e)||d(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;r.l(e)<=0;)n=y(n),r=y(r);var i=w(n,1),a=w(r,1);for(r=w(r,2),n=w(n,2);!u(r);){var c=a.add(r);c.l(e)<=0&&(i=i.add(n),a=c),r=w(r,1),n=w(n,1)}return t=p(e,i.j(t)),new m(i,t)}for(i=s;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=(r=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,r-48),c=(a=o(n)).j(t);d(c)||c.l(e)>0;)c=(a=o(n-=r)).j(t);u(a)&&(a=l),i=i.add(a),e=p(e,c)}return new m(i,e)}function y(e){const t=e.g.length+1,n=[];for(let r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new r(n,e.h)}function w(e,t){const n=t>>5;t%=32;const i=e.g.length-n,a=[];for(let r=0;r<i;r++)a[r]=t>0?e.i(r+n)>>>t|e.i(r+n+1)<<32-t:e.i(r+n);return new r(a,e.h)}(e=r.prototype).m=function(){if(d(this))return-h(this).m();let e=0,t=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);e+=(r>=0?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(d(this))return"-"+h(this).toString(e);const t=o(Math.pow(e,6));var n=this;let r="";for(;;){const i=g(n,t).g;let a=(((n=p(n,i.j(t))).g.length>0?n.g[0]:n.h)>>>0).toString(e);if(u(n=i))return a+r;for(;a.length<6;)a="0"+a;r=a+r}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return d(e=p(this,e))?-1:u(e)?0:1},e.abs=function(){return d(this)?h(this):this},e.add=function(e){const t=Math.max(this.g.length,e.g.length),n=[];let i=0;for(let r=0;r<=t;r++){let t=i+(65535&this.i(r))+(65535&e.i(r)),a=(t>>>16)+(this.i(r)>>>16)+(e.i(r)>>>16);i=a>>>16,t&=65535,a&=65535,n[r]=a<<16|t}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(u(this)||u(e))return s;if(d(this))return d(e)?h(this).j(h(e)):h(h(this).j(e));if(d(e))return h(this.j(h(e)));if(this.l(c)<0&&e.l(c)<0)return o(this.m()*e.m());const t=this.g.length+e.g.length,n=[];for(var i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(let t=0;t<e.g.length;t++){const r=this.i(i)>>>16,a=65535&this.i(i),o=e.i(t)>>>16,s=65535&e.i(t);n[2*i+2*t]+=a*s,f(n,2*i+2*t),n[2*i+2*t+1]+=r*s,f(n,2*i+2*t+1),n[2*i+2*t+1]+=a*o,f(n,2*i+2*t+1),n[2*i+2*t+2]+=r*o,f(n,2*i+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new r(n,0)},e.B=function(e){return g(this,e).h},e.and=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new r(n,this.h&e.h)},e.or=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new r(n,this.h|e.h)},e.xor=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.A,t.prototype.reset=t.prototype.u,t.prototype.update=t.prototype.v,ds=ps.Md5=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return h(e(t.substring(1),n));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const r=o(Math.pow(n,8));let i=s;for(let s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s);const e=parseInt(t.substring(s,s+a),n);a<8?(a=o(Math.pow(n,a)),i=i.j(a).add(o(e))):(i=i.j(r),i=i.add(o(e)))}return i},us=ps.Integer=r}).apply("undefined"!==typeof hs?hs:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var fs,ms,gs,ys,ws,bs,vs,xs,ks="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:{},zs={};(function(){var e,t=Object.defineProperty;var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof ks&&ks];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function r(e,r){if(r)e:{var i=n;e=e.split(".");for(var a=0;a<e.length-1;a++){var o=e[a];if(!(o in i))break e;i=i[o]}(r=r(a=i[e=e[e.length-1]]))!=a&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}r("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(e){return e||function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push([t,e[t]]);return n}});var i=i||{},a=this||self;function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function s(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){return(l=s).apply(null,arguments)}function c(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function u(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}var d="undefined"!==typeof AsyncContext&&"function"===typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function h(e){const t=e.length;if(t>0){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function p(e,t){for(let r=1;r<arguments.length;r++){const t=arguments[r];var n=typeof t;if("array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length){n=e.length||0;const r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function f(e){a.setTimeout(()=>{throw e},0)}function m(){var e=v;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var g=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new y,e=>e.reset());class y{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let w,b=!1,v=new class{constructor(){this.h=this.g=null}add(e,t){const n=g.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},x=()=>{const e=Promise.resolve(void 0);w=()=>{e.then(k)}};function k(){for(var e;e=m();){try{e.h.call(e.g)}catch(Fb){f(Fb)}var t=g;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}b=!1}function z(){this.u=this.u,this.C=this.C}function S(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}z.prototype.u=!1,z.prototype.dispose=function(){this.u||(this.u=!0,this.N())},z.prototype[Symbol.dispose]=function(){this.dispose()},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},S.prototype.h=function(){this.defaultPrevented=!0};var _=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(Fb){}return e}();function E(e){return/^[\s\xa0]*$/.test(e)}function j(e,t){S.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}u(j,S),j.prototype.init=function(e,t){const n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement)),this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&j.Z.h.call(this)},j.prototype.h=function(){j.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var T="closure_listenable_"+(1e6*Math.random()|0),C=0;function I(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++C,this.da=this.fa=!1}function A(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function P(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function R(e){const t={};for(const n in e)t[n]=e[n];return t}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<N.length;t++)n=N[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function O(e){this.src=e,this.g={},this.h=0}function L(e,t){const n=t.type;if(n in e.g){var r,i=e.g[n],a=Array.prototype.indexOf.call(i,t,void 0);(r=a>=0)&&Array.prototype.splice.call(i,a,1),r&&(A(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function M(e,t,n,r){for(let i=0;i<e.length;++i){const a=e[i];if(!a.da&&a.listener==t&&a.capture==!!n&&a.ha==r)return i}return-1}O.prototype.add=function(e,t,n,r,i){const a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);const o=M(e,t,r,i);return o>-1?(t=e[o],n||(t.fa=!1)):((t=new I(t,this.src,a,!!r,i)).fa=n,e.push(t)),t};var $="closure_lm_"+(1e6*Math.random()|0),F={};function U(e,t,n,r,i){if(r&&r.once)return V(e,t,n,r,i);if(Array.isArray(t)){for(let a=0;a<t.length;a++)U(e,t[a],n,r,i);return null}return n=Y(n),e&&e[T]?e.J(t,n,o(r)?!!r.capture:!!r,i):B(e,t,n,!1,r,i)}function B(e,t,n,r,i,a){if(!t)throw Error("Invalid event type");const s=o(i)?!!i.capture:!!i;let l=q(e);if(l||(e[$]=l=new O(e)),(n=l.add(t,n,r,s,a)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=K;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)_||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(G(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function V(e,t,n,r,i){if(Array.isArray(t)){for(let a=0;a<t.length;a++)V(e,t[a],n,r,i);return null}return n=Y(n),e&&e[T]?e.K(t,n,o(r)?!!r.capture:!!r,i):B(e,t,n,!0,r,i)}function H(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)H(e,t[a],n,r,i);else r=o(r)?!!r.capture:!!r,n=Y(n),e&&e[T]?(e=e.i,(a=String(t).toString())in e.g&&((n=M(t=e.g[a],n,r,i))>-1&&(A(t[n]),Array.prototype.splice.call(t,n,1),0==t.length&&(delete e.g[a],e.h--)))):e&&(e=q(e))&&(t=e.g[t.toString()],e=-1,t&&(e=M(t,n,r,i)),(n=e>-1?t[e]:null)&&W(n))}function W(e){if("number"!==typeof e&&e&&!e.da){var t=e.src;if(t&&t[T])L(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(G(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=q(t))?(L(n,e),0==n.h&&(n.src=null,t[$]=null)):A(e)}}}function G(e){return e in F?F[e]:F[e]="on"+e}function K(e,t){if(e.da)e=!0;else{t=new j(t,this);const n=e.listener,r=e.ha||e.src;e.fa&&W(e),e=n.call(r,t)}return e}function q(e){return(e=e[$])instanceof O?e:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function Y(e){return"function"===typeof e?e:(e[Q]||(e[Q]=function(t){return e.handleEvent(t)}),e[Q])}function J(){z.call(this),this.i=new O(this),this.M=this,this.G=null}function X(e,t){var n,r=e.G;if(r)for(n=[];r;r=r.G)n.push(r);if(e=e.M,r=t.type||t,"string"===typeof t)t=new S(t,e);else if(t instanceof S)t.target=t.target||e;else{var i=t;D(t=new S(r,e),i)}let a,o;if(i=!0,n)for(o=n.length-1;o>=0;o--)a=t.g=n[o],i=Z(a,r,!0,t)&&i;if(a=t.g=e,i=Z(a,r,!0,t)&&i,i=Z(a,r,!1,t)&&i,n)for(o=0;o<n.length;o++)a=t.g=n[o],i=Z(a,r,!1,t)&&i}function Z(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();let i=!0;for(let a=0;a<t.length;++a){const o=t[a];if(o&&!o.da&&o.capture==n){const t=o.listener,n=o.ha||o.src;o.fa&&L(e.i,o),i=!1!==t.call(n,r)&&i}}return i&&!r.defaultPrevented}function ee(e){e.g=function(e,t){if("function"!==typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=l(e.handleEvent,e)}return Number(t)>2147483647?-1:a.setTimeout(e,t||0)}(()=>{e.g=null,e.i&&(e.i=!1,ee(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}u(J,z),J.prototype[T]=!0,J.prototype.removeEventListener=function(e,t,n,r){H(this,e,t,n,r)},J.prototype.N=function(){if(J.Z.N.call(this),this.i){var e=this.i;for(const t in e.g){const n=e.g[t];for(let e=0;e<n.length;e++)A(n[e]);delete e.g[t],e.h--}}this.G=null},J.prototype.J=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},J.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class te extends z{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ee(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ne(e){z.call(this),this.h=e,this.g={}}u(ne,z);var re=[];function ie(e){P(e.g,function(e,t){this.g.hasOwnProperty(t)&&W(e)},e),e.g={}}ne.prototype.N=function(){ne.Z.N.call(this),ie(this)},ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ae=a.JSON.stringify,oe=a.JSON.parse,se=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function le(){}function ce(){}var ue={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function de(){S.call(this,"d")}function he(){S.call(this,"c")}u(de,S),u(he,S);var pe={},fe=null;function me(){return fe=fe||new J}function ge(e){S.call(this,pe.Ia,e)}function ye(e){const t=me();X(t,new ge(t))}function we(e,t){S.call(this,pe.STAT_EVENT,e),this.stat=t}function be(e){const t=me();X(t,new we(t,e))}function ve(e,t){S.call(this,pe.Ja,e),this.size=t}function xe(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){e()},t)}function ke(){this.g=!0}function ze(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{const a=JSON.parse(t);if(a)for(e=0;e<a.length;e++)if(Array.isArray(a[e])){var n=a[e];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(let e=1;e<r.length;e++)r[e]=""}}}return ae(a)}catch(Gb){return t}}(e,n)+(r?" "+r:"")})}pe.Ia="serverreachability",u(ge,S),pe.STAT_EVENT="statevent",u(we,S),pe.Ja="timingevent",u(ve,S),ke.prototype.ua=function(){this.g=!1},ke.prototype.info=function(){};var Se,_e={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ee={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function je(){}function Te(e){return encodeURIComponent(String(e))}function Ce(e){var t=1;e=e.split(":");const n=[];for(;t>0&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ie(e,t,n,r){this.j=e,this.i=t,this.l=n,this.S=r||1,this.V=new ne(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ae}function Ae(){this.i=null,this.g="",this.h=!1}u(je,le),je.prototype.g=function(){return new XMLHttpRequest},Se=new je;var Pe={},Re={};function Ne(e,t,n){e.M=1,e.A=at(et(t)),e.u=n,e.R=!0,De(e,null)}function De(e,t){e.F=Date.now(),Me(e),e.B=et(e.A);var n=e.B,r=e.S;Array.isArray(r)||(r=[String(r)]),bt(n.i,"t",r),e.C=0,n=e.j.L,e.h=new Ae,e.g=on(e.j,n?t:null,!e.u),e.P>0&&(e.O=new te(l(e.Y,e,e.g),e.P)),t=e.V,n=e.g,r=e.ba;var i="readystatechange";Array.isArray(i)||(i&&(re[0]=i.toString()),i=re);for(let a=0;a<i.length;a++){const e=U(n,i[a],r||t.handleEvent,!1,t.h||t);if(!e)break;t.g[e.key]=e}t=e.J?R(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),ye(),function(e,t,n,r,i,a){e.info(function(){if(e.g)if(a){var o="",s=a.split("&");for(let e=0;e<s.length;e++){var l=s[e].split("=");if(l.length>1){const e=l[0];l=l[1];const t=e.split("_");o=t.length>=2&&"type"==t[1]?o+(e+"=")+l+"&":o+(e+"=redacted&")}}}else o=null;else o=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.v,e.B,e.l,e.S,e.u)}function Oe(e){return!!e.g&&("GET"==e.v&&2!=e.M&&e.j.Aa)}function Le(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Re:(n=Number(t.substring(n,r)),isNaN(n)?Pe:(r+=1)+n>t.length?Re:(t=t.slice(r,r+n),e.C=r+n,t))}function Me(e){e.T=Date.now()+e.H,$e(e,e.H)}function $e(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=xe(l(e.aa,e),t)}function Fe(e){e.D&&(a.clearTimeout(e.D),e.D=null)}function Ue(e){0==e.j.I||e.K||en(e.j,e)}function Be(e){Fe(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,ie(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function Ve(e,t){try{var n=e.j;if(0!=n.I&&(n.g==e||qe(n.h,e)))if(!e.L&&qe(n.h,e)&&3==n.I){try{var r=n.Ba.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.v){if(n.g){if(!(n.g.F+3e3<e.F))break e;Zt(n),Vt(n)}Yt(n),be(18)}}else n.xa=i[1],0<n.xa-n.K&&i[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=xe(l(n.Va,n),6e3));Ke(n.h)<=1&&n.ta&&(n.ta=void 0)}else nn(n,11)}else if((e.L||n.g==e)&&Zt(n),!E(t))for(i=n.Ba.g.parse(t),t=0;t<i.length;t++){let l=i[t];const u=l[0];if(!(u<=n.K))if(n.K=u,l=l[1],2==n.I)if("c"==l[0]){n.M=l[1],n.ba=l[2];const t=l[3];null!=t&&(n.ka=t,n.j.info("VER="+n.ka));const i=l[4];null!=i&&(n.za=i,n.j.info("SVER="+n.za));const u=l[5];null!=u&&"number"===typeof u&&u>0&&(r=1.5*u,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var a=r.h;a.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(a.j=a.l,a.g=new Set,a.h&&(Qe(a,a.h),a.h=null))}if(r.G){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.wa=e,it(r.J,r.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info("Handshake RTT: "+n.T+"ms"));var o=e;if((r=n).na=an(r,r.L?r.ba:null,r.W),o.L){Ye(r.h,o);var s=o,c=r.O;c&&(s.H=c),s.D&&(Fe(s),Me(s)),r.g=o}else Qt(r);n.i.length>0&&Wt(n)}else"stop"!=l[0]&&"close"!=l[0]||nn(n,7);else 3==n.I&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?nn(n,7):Bt(n):"noop"!=l[0]&&n.l&&n.l.qa(l),n.A=0)}ye()}catch(u){}}Ie.prototype.ba=function(e){e=e.target;const t=this.O;t&&3==Mt(e)?t.j():this.Y(e)},Ie.prototype.Y=function(e){try{if(e==this.g)e:{const l=Mt(this.g),c=this.g.ya();this.g.ca();if(!(l<3)&&(3!=l||this.g&&(this.h.h||this.g.la()||$t(this.g)))){this.K||4!=l||7==c||ye(),Fe(this);var t=this.g.ca();this.X=t;var n=function(e){if(!Oe(e))return e.g.la();const t=$t(e.g);if(""===t)return"";let n="";const r=t.length,i=4==Mt(e.g);if(!e.h.i){if("undefined"===typeof TextDecoder)return Be(e),Ue(e),"";e.h.i=new a.TextDecoder}for(let a=0;a<r;a++)e.h.h=!0,n+=e.h.i.decode(t[a],{stream:!(i&&a==r-1)});return t.length=0,e.h.g+=n,e.C=0,e.h.g}(this);if(this.o=200==t,function(e,t,n,r,i,a,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+a+" "+o})}(this.i,this.v,this.B,this.l,this.S,l,t),this.o){if(this.U&&!this.L){t:{if(this.g){var r,i=this.g;if((r=i.g?i.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(r)){var o=r;break t}}o=null}if(!(e=o)){this.o=!1,this.m=3,be(12),Be(this),Ue(this);break e}ze(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ve(this,e)}if(this.R){let t;for(e=!0;!this.K&&this.C<n.length;){if(t=Le(this,n),t==Re){4==l&&(this.m=4,be(14),e=!1),ze(this.i,this.l,null,"[Incomplete Response]");break}if(t==Pe){this.m=4,be(15),ze(this.i,this.l,n,"[Invalid Chunk]"),e=!1;break}ze(this.i,this.l,t,null),Ve(this,t)}if(Oe(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=l||0!=n.length||this.h.h||(this.m=1,be(16),e=!1),this.o=this.o&&e,e){if(n.length>0&&!this.W){this.W=!0;var s=this.j;s.g==this&&s.aa&&!s.P&&(s.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jt(s),s.P=!0,be(11))}}else ze(this.i,this.l,n,"[Invalid Chunked Response]"),Be(this),Ue(this)}else ze(this.i,this.l,n,null),Ve(this,n);4==l&&Be(this),this.o&&!this.K&&(4==l?en(this.j,this):(this.o=!1,Me(this)))}else(function(e){const t={};e=(e.g&&Mt(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(E(e[r]))continue;var n=Ce(e[r]);const i=n[0];if("string"!==typeof(n=n[1]))continue;n=n.trim();const a=t[i]||[];t[i]=a,a.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==t&&n.indexOf("Unknown SID")>0?(this.m=3,be(12)):(this.m=0,be(13)),Be(this),Ue(this)}}}catch(l){}},Ie.prototype.cancel=function(){this.K=!0,Be(this)},Ie.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.B),2!=this.M&&(ye(),be(17)),Be(this),this.m=2,Ue(this)):$e(this,this.T-e)};var He=class{constructor(e,t){this.g=e,this.map=t}};function We(e){this.l=e||10,a.PerformanceNavigationTiming?e=(e=a.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ge(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ke(e){return e.h?1:e.g?e.g.size:0}function qe(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Qe(e,t){e.g?e.g.add(t):e.h=t}function Ye(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Je(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.G);return t}return h(e.i)}We.prototype.cancel=function(){if(this.i=Je(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Xe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ze(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof Ze?(this.l=e.l,tt(this,e.j),this.o=e.o,this.g=e.g,nt(this,e.u),this.h=e.h,rt(this,vt(e.i)),this.m=e.m):e&&(t=String(e).match(Xe))?(this.l=!1,tt(this,t[1]||"",!0),this.o=ot(t[2]||""),this.g=ot(t[3]||"",!0),nt(this,t[4]),this.h=ot(t[5]||"",!0),rt(this,t[6]||"",!0),this.m=ot(t[7]||"")):(this.l=!1,this.i=new ft(null,this.l))}function et(e){return new Ze(e)}function tt(e,t,n){e.j=n?ot(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function nt(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function rt(e,t,n){t instanceof ft?(e.i=t,function(e,t){t&&!e.j&&(mt(e),e.i=null,e.g.forEach(function(e,t){const n=t.toLowerCase();t!=n&&(gt(this,t),bt(this,n,e))},e)),e.j=t}(e.i,e.l)):(n||(t=st(t,ht)),e.i=new ft(t,e.l))}function it(e,t,n){e.i.set(t,n)}function at(e){return it(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ot(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function st(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,lt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function lt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ze.prototype.toString=function(){const e=[];var t=this.j;t&&e.push(st(t,ct,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(st(t,ct,!0),"@"),e.push(Te(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&e.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(st(n,"/"==n.charAt(0)?dt:ut,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",st(n,pt)),e.join("")},Ze.prototype.resolve=function(e){const t=et(this);let n=!!e.j;n?tt(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=null!=e.u;var r=e.h;if(n)nt(t,e.u);else if(n=!!e.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var i=t.h.lastIndexOf("/");-1!=i&&(r=t.h.slice(0,i+1)+r)}if(".."==(i=r)||"."==i)r="";else if(-1!=i.indexOf("./")||-1!=i.indexOf("/.")){r=0==i.lastIndexOf("/",0),i=i.split("/");const e=[];for(let t=0;t<i.length;){const n=i[t++];"."==n?r&&t==i.length&&e.push(""):".."==n?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),r&&t==i.length&&e.push("")):(e.push(n),r=!0)}r=e.join("/")}else r=i}return n?t.h=r:n=""!==e.i.toString(),n?rt(t,vt(e.i)):n=!!e.m,n&&(t.m=e.m),t};var ct=/[#\/\?@]/g,ut=/[#\?:]/g,dt=/[#\?]/g,ht=/[#\?@]/g,pt=/#/g;function ft(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(let n=0;n<e.length;n++){const r=e[n].indexOf("=");let i,a=null;r>=0?(i=e[n].substring(0,r),a=e[n].substring(r+1)):i=e[n],t(i,a?decodeURIComponent(a.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function gt(e,t){mt(e),t=xt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function yt(e,t){return mt(e),t=xt(e,t),e.g.has(t)}function wt(e,t){mt(e);let n=[];if("string"===typeof t)yt(e,t)&&(n=n.concat(e.g.get(xt(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t]);return n}function bt(e,t,n){gt(e,t),n.length>0&&(e.i=null,e.g.set(xt(e,t),h(n)),e.h+=n.length)}function vt(e){const t=new ft;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function xt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function kt(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(Gb){}}function zt(){this.g=new se}function St(e){this.i=e.Sb||null,this.h=e.ab||!1}function _t(e,t){J.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Et(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function jt(e){e.readyState=4,e.l=null,e.j=null,e.B=null,Tt(e)}function Tt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Ct(e){let t="";return P(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function It(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Ct(n),"string"===typeof e?null!=n&&Te(n):it(e,t,n))}function At(e){J.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(e=ft.prototype).add=function(e,t){mt(this),this.i=null,e=xt(this,e);let n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){mt(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.set=function(e,t){return mt(this),this.i=null,yt(this,e=xt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&(e=wt(this,e)).length>0?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(let r=0;r<t.length;r++){var n=t[r];const i=Te(n);n=wt(this,n);for(let t=0;t<n.length;t++){let r=i;""!==n[t]&&(r+="="+Te(n[t])),e.push(r)}}return this.i=e.join("&")},u(St,le),St.prototype.g=function(){return new _t(this.i,this.h)},u(_t,J),(e=_t.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,Tt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||a).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,jt(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Tt(this)),this.g&&(this.readyState=3,Tt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Et(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?jt(this):Tt(this),3==this.readyState&&Et(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,jt(this))},e.Na=function(e){this.g&&(this.response=e,jt(this))},e.ga=function(){this.g&&jt(this)},e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(_t.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),u(At,J);var Pt=/^https?$/i,Rt=["POST","PUT"];function Nt(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,Dt(e),Lt(e)}function Dt(e){e.A||(e.A=!0,X(e,"complete"),X(e,"error"))}function Ot(e){if(e.h&&"undefined"!=typeof i)if(e.v&&4==Mt(e))setTimeout(e.Ca.bind(e),0);else if(X(e,"readystatechange"),4==Mt(e)){e.h=!1;try{const i=e.ca();e:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===i){let t=String(e.D).match(Xe)[1]||null;!t&&a.self&&a.self.location&&(t=a.self.location.protocol.slice(0,-1)),r=!Pt.test(t?t.toLowerCase():"")}n=r}if(n)X(e,"complete"),X(e,"success");else{e.o=6;try{var o=Mt(e)>2?e.g.statusText:""}catch(s){o=""}e.l=o+" ["+e.ca()+"]",Dt(e)}}finally{Lt(e)}}}function Lt(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const n=e.g;e.g=null,t||X(e,"ready");try{n.onreadystatechange=null}catch(Wb){}}}function Mt(e){return e.g?e.g.readyState:0}function $t(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(_s){return null}}function Ft(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ut(e){this.za=0,this.i=[],this.j=new ke,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ft("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ft("baseRetryDelayMs",5e3,e),this.Za=Ft("retryDelaySeedMs",1e4,e),this.Ta=Ft("forwardChannelMaxRetries",2,e),this.va=Ft("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new We(e&&e.concurrentRequestLimit),this.Ba=new zt,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function Bt(e){if(Ht(e),3==e.I){var t=e.V++,n=et(e.J);if(it(n,"SID",e.M),it(n,"RID",t),it(n,"TYPE","terminate"),Kt(e,n),(t=new Ie(e,e.j,t)).M=2,t.A=at(et(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(t.A.toString(),"")}catch(Wb){}!n&&a.Image&&((new Image).src=t.A,n=!0),n||(t.g=on(t.j,null),t.g.ea(t.A)),t.F=Date.now(),Me(t)}rn(e)}function Vt(e){e.g&&(Jt(e),e.g.cancel(),e.g=null)}function Ht(e){Vt(e),e.v&&(a.clearTimeout(e.v),e.v=null),Zt(e),e.h.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function Wt(e){if(!Ge(e.h)&&!e.m){e.m=!0;var t=e.Ea;w||x(),b||(w(),b=!0),v.add(t,e),e.D=0}}function Gt(e,t){var n;n=t?t.l:e.V++;const r=et(e.J);it(r,"SID",e.M),it(r,"RID",n),it(r,"AID",e.K),Kt(e,r),e.u&&e.o&&It(r,e.u,e.o),n=new Ie(e,e.j,n,e.D+1),null===e.u&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=qt(e,n,1e3),n.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),Qe(e.h,n),Ne(n,r,t)}function Kt(e,t){e.H&&P(e.H,function(e,n){it(t,n,e)}),e.l&&P({},function(e,n){it(t,n,e)})}function qt(e,t,n){n=Math.min(e.i.length,n);const r=e.l?l(e.l.Ka,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?n>0?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let l=!0;for(let c=0;c<n;c++){var a=i[c].g;const n=i[c].map;if((a-=t)<0)t=Math.max(0,i[c].g-100),l=!1;else try{a="req"+a+"_"||0;try{var s=n instanceof Map?n:Object.entries(n);for(const[t,n]of s){let r=n;o(n)&&(r=ae(n)),e.push(a+t+"="+encodeURIComponent(r))}}catch(il){throw e.push(a+"type="+encodeURIComponent("_badmap")),il}}catch(il){r&&r(n)}}if(l){s=e.join("&");break e}}s=void 0}return e=e.i.splice(0,n),t.G=e,s}function Qt(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;w||x(),b||(w(),b=!0),v.add(t,e),e.A=0}}function Yt(e){return!(e.g||e.v||e.A>=3)&&(e.Y++,e.v=xe(l(e.Da,e),tn(e,e.A)),e.A++,!0)}function Jt(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function Xt(e){e.g=new Ie(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=et(e.na);it(t,"RID","rpc"),it(t,"SID",e.M),it(t,"AID",e.K),it(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&it(t,"TO",e.ia),it(t,"TYPE","xmlhttp"),Kt(e,t),e.u&&e.o&&It(t,e.u,e.o),e.O&&(e.g.H=e.O);var n=e.g;e=e.ba,n.M=1,n.A=at(et(t)),n.u=null,n.R=!0,De(n,e)}function Zt(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function en(e,t){var n=null;if(e.g==t){Zt(e),Jt(e),e.g=null;var r=2}else{if(!qe(e.h,t))return;n=t.G,Ye(e.h,t),r=1}if(0!=e.I)if(t.o)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.F;var i=e.D;X(r=me(),new ve(r,n)),Wt(e)}else Qt(e);else if(3==(i=t.m)||0==i&&t.X>0||!(1==r&&function(e,t){return!(Ke(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.G.concat(e.i),!0):!(1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta))&&(e.m=xe(l(e.Ea,e,t),tn(e,e.D)),e.D++,!0))}(e,t)||2==r&&Yt(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),i){case 1:nn(e,5);break;case 4:nn(e,10);break;case 3:nn(e,6);break;default:nn(e,2)}}function tn(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(n*=2),n*t}function nn(e,t){if(e.j.info("Error code "+t),2==t){var n=l(e.bb,e),r=e.Ua;const t=!r;r=new Ze(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||tt(r,"https"),at(r),t?function(e,t){const n=new ke;if(a.Image){const r=new Image;r.onload=c(kt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=c(kt,n,"TestLoadImage: error",!1,t,r),r.onabort=c(kt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=c(kt,n,"TestLoadImage: timeout",!1,t,r),a.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new ke;const n=new AbortController,r=setTimeout(()=>{n.abort(),kt(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?kt(0,0,!0,t):kt(0,0,!1,t)}).catch(()=>{clearTimeout(r),kt(0,0,!1,t)})}(r.toString(),n)}else be(2);e.I=0,e.l&&e.l.pa(t),rn(e),Ht(e)}function rn(e){if(e.I=0,e.ja=[],e.l){const t=Je(e.h);0==t.length&&0==e.i.length||(p(e.ja,t),p(e.ja,e.i),e.h.i.length=0,h(e.i),e.i.length=0),e.l.oa()}}function an(e,t,n){var r=n instanceof Ze?et(n):new Ze(n);if(""!=r.g)t&&(r.g=t+"."+r.g),nt(r,r.u);else{var i=a.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;const e=new Ze(null);r&&tt(e,r),t&&(e.g=t),i&&nt(e,i),n&&(e.h=n),r=e}return n=e.G,t=e.wa,n&&t&&it(r,n,t),it(r,"VER",e.ka),Kt(e,r),r}function on(e,t,n){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Aa&&!e.ma?new At(new St({ab:n})):new At(e.ma)).Fa(e.L),t}function sn(){}function ln(){}function cn(e,t){J.call(this),this.g=new Ut(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!E(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!E(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new hn(this)}function un(e){de.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function dn(){he.call(this),this.status=1}function hn(e){this.g=e}(e=At.prototype).Fa=function(e){this.H=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Se.g(),this.g.onreadystatechange=d(l(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(Gb){return void Nt(this,Gb)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=a.FormData&&e instanceof a.FormData,!(Array.prototype.indexOf.call(Rt,t,void 0)>=0)||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[a,o]of n)this.g.setRequestHeader(a,o);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(Gb){Nt(this,Gb)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,X(this,"complete"),X(this,"abort"),Lt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lt(this,!0)),At.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Ot(this):this.Xa())},e.Xa=function(){Ot(this)},e.isActive=function(){return!!this.g},e.ca=function(){try{return Mt(this)>2?this.g.status:-1}catch($b){return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch($b){return""}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),oe(t)}},e.ya=function(){return this.o},e.Ha=function(){return"string"===typeof this.l?this.l:String(this.l)},(e=Ut.prototype).ka=8,e.I=1,e.connect=function(e,t,n,r){be(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=an(this,null,this.W),Wt(this)},e.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Ie(this,this.j,e);let a=this.o;if(this.U&&(a?(a=R(a),D(a,this.U)):a=this.U),null!==this.u||this.R||(i.J=a,a=null),this.S)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"===typeof(r=r.map.__data__)?r.length:void 0))break;if((t+=r)>4096){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=qt(this,i,t),it(n=et(this.J),"RID",e),it(n,"CVER",22),this.G&&it(n,"X-HTTP-Session-Id",this.G),Kt(this,n),a&&(this.R?t="headers="+Te(Ct(a))+"&"+t:this.u&&It(n,this.u,a)),Qe(this.h,i),this.Ra&&it(n,"TYPE","init"),this.S?(it(n,"$req",t),it(n,"SID","null"),i.U=!0,Ne(i,n,null)):Ne(i,n,t),this.I=2}}else 3==this.I&&(e?Gt(this,e):0==this.i.length||Ge(this.h)||Gt(this))},e.Da=function(){if(this.v=null,Xt(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=xe(l(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,be(10),Vt(this),Xt(this))},e.Va=function(){null!=this.C&&(this.C=null,Vt(this),Yt(this),be(19))},e.bb=function(e){e?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=sn.prototype).ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){},ln.prototype.g=function(e,t){return new cn(e,t)},u(cn,J),cn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){Bt(this.g)},cn.prototype.o=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ae(e),e=n);t.i.push(new He(t.Ya++,e)),3==t.I&&Wt(t)},cn.prototype.N=function(){this.g.l=null,delete this.j,Bt(this.g),delete this.g,cn.Z.N.call(this)},u(un,de),u(dn,he),u(hn,sn),hn.prototype.ra=function(){X(this.g,"a")},hn.prototype.qa=function(e){X(this.g,new un(e))},hn.prototype.pa=function(e){X(this.g,new dn)},hn.prototype.oa=function(){X(this.g,"b")},ln.prototype.createWebChannel=ln.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,xs=zs.createWebChannelTransport=function(){return new ln},vs=zs.getStatEventTarget=function(){return me()},bs=zs.Event=pe,ws=zs.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_e.NO_ERROR=0,_e.TIMEOUT=8,_e.HTTP_ERROR=6,ys=zs.ErrorCode=_e,Ee.COMPLETE="complete",gs=zs.EventType=Ee,ce.EventType=ue,ue.OPEN="a",ue.CLOSE="b",ue.ERROR="c",ue.MESSAGE="d",J.prototype.listen=J.prototype.J,ms=zs.WebChannel=ce,zs.FetchXmlHttpFactory=St,At.prototype.listenOnce=At.prototype.K,At.prototype.getLastError=At.prototype.Ha,At.prototype.getLastErrorCode=At.prototype.ya,At.prototype.getStatus=At.prototype.ca,At.prototype.getResponseJson=At.prototype.La,At.prototype.getResponseText=At.prototype.la,At.prototype.send=At.prototype.ea,At.prototype.setWithCredentials=At.prototype.Fa,fs=zs.XhrIo=At}).apply("undefined"!==typeof ks?ks:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});class Ss{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ss.UNAUTHENTICATED=new Ss(null),Ss.GOOGLE_CREDENTIALS=new Ss("google-credentials-uid"),Ss.FIRST_PARTY=new Ss("first-party-uid"),Ss.MOCK_USER=new Ss("mock-user");let _s="12.12.0";const Es=new fn("@firebase/firestore");function js(){return Es.logLevel}function Ts(e){if(Es.logLevel<=cn.DEBUG){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=n.map(As);Es.debug(`Firestore (${_s}): ${e}`,...i)}}function Cs(e){if(Es.logLevel<=cn.ERROR){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=n.map(As);Es.error(`Firestore (${_s}): ${e}`,...i)}}function Is(e){if(Es.logLevel<=cn.WARN){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=n.map(As);Es.warn(`Firestore (${_s}): ${e}`,...i)}}function As(e){if("string"==typeof e)return e;try{return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}function Ps(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,Rs(e,r,n)}function Rs(e,t,n){let r=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw Cs(r),new Error(r)}function Ns(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||Rs(t,i,r)}function Ds(e,t){return e}const Os={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ls extends Vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}class Ms{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}class $s{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fs{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ss.UNAUTHENTICATED))}shutdown(){}}class Us{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Bs{constructor(e){this.t=e,this.currentUser=Ss.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ns(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Ms;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ms,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{Ts("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Ts("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ms)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(Ts("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Ns("string"==typeof t.accessToken,31837,{l:t}),new $s(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ns(null===e||"string"==typeof e,2055,{h:e}),new Ss(e)}}class Vs{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Ss.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Hs{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Vs(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ss.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ws{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gs{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ns(void 0===this.o,3512);const n=e=>{null!=e.error&&Ts("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,Ts("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{Ts("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):Ts("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ws(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(Ns("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new Ws(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Ks(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}class qs{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=Ks(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function Qs(e,t){return e<t?-1:e>t?1:0}function Ys(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.charAt(r),i=t.charAt(r);if(n!==i)return Zs(n)===Zs(i)?Qs(n,i):Zs(n)?1:-1}return Qs(e.length,t.length)}const Js=55296,Xs=57343;function Zs(e){const t=e.charCodeAt(0);return t>=Js&&t<=Xs}function el(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}const tl="__name__";class nl{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ps(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&Ps(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===nl.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nl?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=nl.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Qs(e.length,t.length)}static compareSegments(e,t){const n=nl.isNumericId(e),r=nl.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?nl.extractNumericId(e).compare(nl.extractNumericId(t)):Ys(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return us.fromString(e.substring(4,e.length-2))}}class rl extends nl{construct(e,t,n){return new rl(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(){const e=[];for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(const i of n){if(i.indexOf("//")>=0)throw new Ls(Os.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(e=>e.length>0))}return new rl(e)}static emptyPath(){return new rl([])}}const il=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class al extends nl{construct(e,t,n){return new al(e,t,n)}static isValidIdentifier(e){return il.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),al.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===tl}static keyField(){return new al([tl])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Ls(Os.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Ls(Os.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ls(Os.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(a=!a,r++):"."!==t||a?(n+=t,r++):(i(),r++)}if(i(),a)throw new Ls(Os.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new al(t)}static emptyPath(){return new al([])}}class ol{constructor(e){this.path=e}static fromPath(e){return new ol(rl.fromString(e))}static fromName(e){return new ol(rl.fromString(e).popFirst(5))}static empty(){return new ol(rl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===rl.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return rl.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ol(new rl(e.slice()))}}function sl(e,t,n){if(!n)throw new Ls(Os.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ll(e){if(!ol.isDocumentKey(e))throw new Ls(Os.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function cl(e){if(ol.isDocumentKey(e))throw new Ls(Os.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ul(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function dl(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Ps(12329,{type:typeof e})}function hl(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ls(Os.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dl(e);throw new Ls(Os.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function pl(e,t){const n={typeString:e};return t&&(n.value=t),n}function fl(e,t){if(!ul(e))throw new Ls(Os.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const i=t[r].typeString,a="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const o=e[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==a&&o!==a.value){n=`Expected '${r}' field to equal '${a.value}'`;break}}if(n)throw new Ls(Os.INVALID_ARGUMENT,n);return!0}const ml=-62135596800,gl=1e6;class yl{static now(){return yl.fromMillis(Date.now())}static fromDate(e){return yl.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*gl);return new yl(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ls(Os.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ls(Os.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ml)throw new Ls(Os.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ls(Os.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gl}_compareTo(e){return this.seconds===e.seconds?Qs(this.nanoseconds,e.nanoseconds):Qs(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:yl._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fl(e,yl._jsonSchema))return new yl(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ml;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}yl._jsonSchemaVersion="firestore/timestamp/1.0",yl._jsonSchema={type:pl("string",yl._jsonSchemaVersion),seconds:pl("number"),nanoseconds:pl("number")};class wl{static fromTimestamp(e){return new wl(e)}static min(){return new wl(new yl(0,0))}static max(){return new wl(new yl(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}const bl=-1;class vl{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}vl.UNKNOWN_ID=-1;function xl(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=wl.fromTimestamp(1e9===r?new yl(n+1,0):new yl(n,r));return new zl(i,ol.empty(),t)}function kl(e){return new zl(e.readTime,e.key,bl)}class zl{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new zl(wl.min(),ol.empty(),bl)}static max(){return new zl(wl.max(),ol.empty(),bl)}}function Sl(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ol.comparator(e.documentKey,t.documentKey),0!==n?n:Qs(e.largestBatchId,t.largestBatchId))}const _l="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class El{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}async function jl(e){if(e.code!==Os.FAILED_PRECONDITION||e.message!==_l)throw e;Ts("LocalStore","Unexpectedly lost primary lease")}class Tl{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ps(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Tl((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Tl?t:Tl.resolve(t)}catch(e){return Tl.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Tl.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Tl.reject(t)}static resolve(e){return new Tl((t,n)=>{t(e)})}static reject(e){return new Tl((t,n)=>{n(e)})}static waitFor(e){return new Tl((t,n)=>{let r=0,i=0,a=!1;e.forEach(e=>{++r,e.next(()=>{++i,a&&i===r&&t()},e=>n(e))}),a=!0,i===r&&t()})}static or(e){let t=Tl.resolve(!1);for(const n of e)t=t.next(e=>e?Tl.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Tl((n,r)=>{const i=e.length,a=new Array(i);let o=0;for(let s=0;s<i;s++){const l=s;t(e[l]).next(e=>{a[l]=e,++o,o===i&&n(a)},e=>r(e))}})}static doWhile(e,t){return new Tl((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function Cl(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Il(e){return"IndexedDbTransactionError"===e.name}class Al{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Al.ce=-1;const Pl=-1;function Rl(e){return null==e}function Nl(e){return 0===e&&1/e==-1/0}function Dl(e){return"number"==typeof e&&Number.isInteger(e)&&!Nl(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}const Ol="\x01";function Ll(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=$l(t)),t=Ml(e.get(n),t);return $l(t)}function Ml(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="\x01\x10";break;case Ol:n+="\x01\x11";break;default:n+=t}}return n}function $l(e){return e+Ol+"\x01"}const Fl="remoteDocuments",Ul="owner",Bl="mutationQueues",Vl="mutations";const Hl="documentMutations",Wl="remoteDocumentsV14",Gl="remoteDocumentGlobal",Kl="targets",ql="targetDocuments",Ql="targetGlobal",Yl="collectionParents",Jl="clientMetadata",Xl="bundles",Zl="namedQueries",ec="indexConfiguration",tc="indexState",nc="indexEntries",rc="documentOverlays",ic="globals",ac=[Bl,Vl,Hl,Fl,Kl,Ul,Ql,ql,Jl,Gl,Yl,Xl,Zl],oc=[Bl,Vl,Hl,Wl,Kl,Ul,Ql,ql,Jl,Gl,Yl,Xl,Zl,rc],sc=oc,lc=[...sc,ec,tc,nc];function cc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function uc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function dc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}class hc{constructor(e,t){this.comparator=e,this.root=t||fc.EMPTY}insert(e,t){return new hc(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fc.BLACK,null,null))}remove(e){return new hc(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fc.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pc(this.root,e,this.comparator,!1)}getReverseIterator(){return new pc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pc(this.root,e,this.comparator,!0)}}class pc{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fc{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:fc.RED,this.left=null!=r?r:fc.EMPTY,this.right=null!=i?i:fc.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new fc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return fc.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return fc.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ps(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ps(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ps(27949);return e+(this.isRed()?0:1)}}fc.EMPTY=null,fc.RED=!0,fc.BLACK=!1,fc.EMPTY=new class{constructor(){this.size=0}get key(){throw Ps(57766)}get value(){throw Ps(16141)}get color(){throw Ps(16727)}get left(){throw Ps(29726)}get right(){throw Ps(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new fc(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};class mc{constructor(e){this.comparator=e,this.data=new hc(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gc(this.data.getIterator())}getIteratorFrom(e){return new gc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof mc))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new mc(this.comparator);return t.data=e,t}}class gc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}class yc{constructor(e){this.fields=e,e.sort(al.comparator)}static empty(){return new yc([])}unionWith(e){let t=new mc(al.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new yc(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return el(this.fields,e.fields,(e,t)=>e.isEqual(t))}}class wc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}class bc{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new wc("Invalid base64 string: "+e):e}}(e);return new bc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new bc(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Qs(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bc.EMPTY_BYTE_STRING=new bc("");const vc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xc(e){if(Ns(!!e,39018),"string"==typeof e){let t=0;const n=vc.exec(e);if(Ns(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:kc(e.seconds),nanos:kc(e.nanos)}}function kc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function zc(e){return"string"==typeof e?bc.fromBase64String(e):bc.fromUint8Array(e)}const Sc="server_timestamp",_c="__type__",Ec="__previous_value__",jc="__local_write_time__";function Tc(e){const t=(e?.mapValue?.fields||{})[_c]?.stringValue;return t===Sc}function Cc(e){const t=e.mapValue.fields[Ec];return Tc(t)?Cc(t):t}function Ic(e){const t=xc(e.mapValue.fields[jc].timestampValue);return new yl(t.seconds,t.nanos)}class Ac{constructor(e,t,n,r,i,a,o,s,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=s,this.useFetchStreams=l,this.isUsingEmulator=c,this.apiKey=u}}const Pc="(default)";class Rc{constructor(e,t){this.projectId=e,this.database=t||Pc}static empty(){return new Rc("","")}get isDefaultDatabase(){return this.database===Pc}isEqual(e){return e instanceof Rc&&e.projectId===this.projectId&&e.database===this.database}}const Nc="__type__",Dc="__max__",Oc={mapValue:{fields:{__type__:{stringValue:Dc}}}},Lc="__vector__",Mc="value";function $c(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Tc(e)?4:nu(e)?9007199254740991:eu(e)?10:11:Ps(28295,{value:e})}function Fc(e,t){if(e===t)return!0;const n=$c(e);if(n!==$c(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ic(e).isEqual(Ic(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=xc(e.timestampValue),r=xc(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return zc(e.bytesValue).isEqual(zc(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return kc(e.geoPointValue.latitude)===kc(t.geoPointValue.latitude)&&kc(e.geoPointValue.longitude)===kc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return kc(e.integerValue)===kc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=kc(e.doubleValue),r=kc(t.doubleValue);return n===r?Nl(n)===Nl(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return el(e.arrayValue.values||[],t.arrayValue.values||[],Fc);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(cc(n)!==cc(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Fc(n[i],r[i])))return!1;return!0}(e,t);default:return Ps(52216,{left:e})}}function Uc(e,t){return void 0!==(e.values||[]).find(e=>Fc(e,t))}function Bc(e,t){if(e===t)return 0;const n=$c(e),r=$c(t);if(n!==r)return Qs(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Qs(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=kc(e.integerValue||e.doubleValue),r=kc(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Vc(e.timestampValue,t.timestampValue);case 4:return Vc(Ic(e),Ic(t));case 5:return Ys(e.stringValue,t.stringValue);case 6:return function(e,t){const n=zc(e),r=zc(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Qs(n[i],r[i]);if(0!==e)return e}return Qs(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Qs(kc(e.latitude),kc(t.latitude));return 0!==n?n:Qs(kc(e.longitude),kc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Hc(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=t.fields||{},i=n[Mc]?.arrayValue,a=r[Mc]?.arrayValue,o=Qs(i?.values?.length||0,a?.values?.length||0);return 0!==o?o:Hc(i,a)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Oc.mapValue&&t===Oc.mapValue)return 0;if(e===Oc.mapValue)return 1;if(t===Oc.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(let o=0;o<r.length&&o<a.length;++o){const e=Ys(r[o],a[o]);if(0!==e)return e;const t=Bc(n[r[o]],i[a[o]]);if(0!==t)return t}return Qs(r.length,a.length)}(e.mapValue,t.mapValue);default:throw Ps(23264,{he:n})}}function Vc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Qs(e,t);const n=xc(e),r=xc(t),i=Qs(n.seconds,r.seconds);return 0!==i?i:Qs(n.nanos,r.nanos)}function Hc(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Bc(n[i],r[i]);if(e)return e}return Qs(n.length,r.length)}function Wc(e){return Gc(e)}function Gc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=xc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return zc(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return ol.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Gc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Gc(e.fields[i])}`;return n+"}"}(e.mapValue):Ps(61005,{value:e})}function Kc(e){switch($c(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Cc(e);return t?16+Kc(t):16;case 5:return 2*e.stringValue.length;case 6:return zc(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce((e,t)=>e+Kc(t),0)}(e.arrayValue);case 10:case 11:return function(e){let t=0;return uc(e.fields,(e,n)=>{t+=e.length+Kc(n)}),t}(e.mapValue);default:throw Ps(13486,{value:e})}}function qc(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Qc(e){return!!e&&"integerValue"in e}function Yc(e){return!!e&&"arrayValue"in e}function Jc(e){return!!e&&"nullValue"in e}function Xc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Zc(e){return!!e&&"mapValue"in e}function eu(e){const t=(e?.mapValue?.fields||{})[Nc]?.stringValue;return t===Lc}function tu(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return uc(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=tu(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=tu(e.arrayValue.values[n]);return t}return{...e}}function nu(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Dc}class ru{constructor(e){this.value=e}static empty(){return new ru({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Zc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tu(t)}setAll(e){let t=al.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=tu(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Zc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Zc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){uc(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new ru(tu(this.value))}}function iu(e){const t=[];return uc(e.fields,(e,n)=>{const r=new al([e]);if(Zc(n)){const e=iu(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new yc(t)}class au{constructor(e,t,n,r,i,a,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=a,this.documentState=o}static newInvalidDocument(e){return new au(e,0,wl.min(),wl.min(),wl.min(),ru.empty(),0)}static newFoundDocument(e,t,n,r){return new au(e,1,t,wl.min(),n,r,0)}static newNoDocument(e,t){return new au(e,2,t,wl.min(),wl.min(),ru.empty(),0)}static newUnknownDocument(e,t){return new au(e,3,t,wl.min(),wl.min(),ru.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(wl.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ru.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ru.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=wl.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof au&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new au(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class ou{constructor(e,t){this.position=e,this.inclusive=t}}function su(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const a=t[i],o=e.position[i];if(r=a.field.isKeyField()?ol.comparator(ol.fromName(o.referenceValue),n.key):Bc(o,n.data.field(a.field)),"desc"===a.dir&&(r*=-1),0!==r)break}return r}function lu(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Fc(e.position[n],t.position[n]))return!1;return!0}class cu{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";this.field=e,this.dir=t}}function uu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}class du{}class hu extends du{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new vu(e,t,n):"array-contains"===t?new Su(e,n):"in"===t?new _u(e,n):"not-in"===t?new Eu(e,n):"array-contains-any"===t?new ju(e,n):new hu(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new xu(e,n):new ku(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(Bc(t,this.value)):null!==t&&$c(this.value)===$c(t)&&this.matchesComparison(Bc(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ps(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pu extends du{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new pu(e,t)}matches(e){return fu(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function fu(e){return"and"===e.op}function mu(e){return gu(e)&&fu(e)}function gu(e){for(const t of e.filters)if(t instanceof pu)return!1;return!0}function yu(e){if(e instanceof hu)return e.field.canonicalString()+e.op.toString()+Wc(e.value);if(mu(e))return e.filters.map(e=>yu(e)).join(",");{const t=e.filters.map(e=>yu(e)).join(",");return`${e.op}(${t})`}}function wu(e,t){return e instanceof hu?function(e,t){return t instanceof hu&&e.op===t.op&&e.field.isEqual(t.field)&&Fc(e.value,t.value)}(e,t):e instanceof pu?function(e,t){return t instanceof pu&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&wu(n,t.filters[r]),!0)}(e,t):void Ps(19439)}function bu(e){return e instanceof hu?function(e){return`${e.field.canonicalString()} ${e.op} ${Wc(e.value)}`}(e):e instanceof pu?function(e){return e.op.toString()+" {"+e.getFilters().map(bu).join(" ,")+"}"}(e):"Filter"}class vu extends hu{constructor(e,t,n){super(e,t,n),this.key=ol.fromName(n.referenceValue)}matches(e){const t=ol.comparator(e.key,this.key);return this.matchesComparison(t)}}class xu extends hu{constructor(e,t){super(e,"in",t),this.keys=zu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ku extends hu{constructor(e,t){super(e,"not-in",t),this.keys=zu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function zu(e,t){return(t.arrayValue?.values||[]).map(e=>ol.fromName(e.referenceValue))}class Su extends hu{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yc(t)&&Uc(t.arrayValue,this.value)}}class _u extends hu{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Uc(this.value.arrayValue,t)}}class Eu extends hu{constructor(e,t){super(e,"not-in",t)}matches(e){if(Uc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!Uc(this.value.arrayValue,t)}}class ju extends hu{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>Uc(this.value.arrayValue,e))}}class Tu{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=a,this.endAt=o,this.Te=null}}function Cu(e){return new Tu(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,arguments.length>6&&void 0!==arguments[6]?arguments[6]:null)}function Iu(e){const t=Ds(e);if(null===t.Te){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>yu(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),Rl(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Wc(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Wc(e)).join(",")),t.Te=e}return t.Te}function Au(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!uu(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!wu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!lu(e.startAt,t.startAt)&&lu(e.endAt,t.endAt)}function Pu(e){return ol.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Ru{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=s,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Nu(e,t,n,r,i,a,o,s){return new Ru(e,t,n,r,i,a,o,s)}function Du(e){return new Ru(e)}function Ou(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Lu(e){return null!==e.collectionGroup}function Mu(e){const t=Ds(e);if(null===t.Ee){t.Ee=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ee.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new mc(al.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t}(t);r.forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ee.push(new cu(r,n))}),e.has(al.keyField().canonicalString())||t.Ee.push(new cu(al.keyField(),n))}return t.Ee}function $u(e){const t=Ds(e);return t.Ie||(t.Ie=Fu(t,Mu(e))),t.Ie}function Fu(e,t){if("F"===e.limitType)return Cu(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new cu(e.field,t)});const n=e.endAt?new ou(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ou(e.startAt.position,e.startAt.inclusive):null;return Cu(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Uu(e,t){const n=e.filters.concat([t]);return new Ru(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Bu(e,t,n){return new Ru(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Vu(e,t){return Au($u(e),$u(t))&&e.limitType===t.limitType}function Hu(e){return`${Iu($u(e))}|lt:${e.limitType}`}function Wu(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>bu(e)).join(", ")}]`),Rl(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Wc(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Wc(e)).join(",")),`Target(${t})`}($u(e))}; limitType=${e.limitType})`}function Gu(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ol.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Mu(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=su(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Mu(e),t))&&!(e.endAt&&!function(e,t,n){const r=su(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Mu(e),t))}(e,t)}function Ku(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function qu(e){return(t,n)=>{let r=!1;for(const i of Mu(e)){const e=Qu(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Qu(e,t,n){const r=e.field.isKeyField()?ol.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Bc(r,i):Ps(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Ps(19790,{direction:e.dir})}}class Yu{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){uc(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return dc(this.inner)}size(){return this.innerSize}}const Ju=new hc(ol.comparator);function Xu(){return Ju}const Zu=new hc(ol.comparator);function ed(){let e=Zu;for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(const i of n)e=e.insert(i.key,i);return e}function td(e){let t=Zu;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function nd(){return id()}function rd(){return id()}function id(){return new Yu(e=>e.toString(),(e,t)=>e.isEqual(t))}const ad=new hc(ol.comparator),od=new mc(ol.comparator);function sd(){let e=od;for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(const i of n)e=e.add(i);return e}const ld=new mc(Qs);function cd(){return ld}function ud(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nl(t)?"-0":t}}function dd(e){return{integerValue:""+e}}function hd(e,t){return Dl(t)?dd(t):ud(e,t)}class pd{constructor(){this._=void 0}}function fd(e,t,n){return e instanceof yd?function(e,t){const n={fields:{[_c]:{stringValue:Sc},[jc]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Tc(t)&&(t=Cc(t)),t&&(n.fields[Ec]=t),{mapValue:n}}(n,t):e instanceof wd?bd(e,t):e instanceof vd?xd(e,t):function(e,t){const n=gd(e,t),r=zd(n)+zd(e.Ae);return Qc(n)&&Qc(e.Ae)?dd(r):ud(e.serializer,r)}(e,t)}function md(e,t,n){return e instanceof wd?bd(e,t):e instanceof vd?xd(e,t):n}function gd(e,t){return e instanceof kd?function(e){return Qc(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class yd extends pd{}class wd extends pd{constructor(e){super(),this.elements=e}}function bd(e,t){const n=Sd(t);for(const r of e.elements)n.some(e=>Fc(e,r))||n.push(r);return{arrayValue:{values:n}}}class vd extends pd{constructor(e){super(),this.elements=e}}function xd(e,t){let n=Sd(t);for(const r of e.elements)n=n.filter(e=>!Fc(e,r));return{arrayValue:{values:n}}}class kd extends pd{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function zd(e){return kc(e.integerValue||e.doubleValue)}function Sd(e){return Yc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class _d{constructor(e,t){this.field=e,this.transform=t}}class Ed{constructor(e,t){this.version=e,this.transformResults=t}}class jd{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new jd}static exists(e){return new jd(void 0,e)}static updateTime(e){return new jd(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Td(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Cd{}function Id(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Fd(e.key,jd.none()):new Dd(e.key,e.data,jd.none());{const n=e.data,r=ru.empty();let i=new mc(al.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Od(e.key,r,new yc(i.toArray()),jd.none())}}function Ad(e,t,n){e instanceof Dd?function(e,t,n){const r=e.value.clone(),i=Md(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Od?function(e,t,n){if(!Td(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Md(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Ld(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Pd(e,t,n,r){return e instanceof Dd?function(e,t,n,r){if(!Td(e.precondition,t))return n;const i=e.value.clone(),a=$d(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Od?function(e,t,n,r){if(!Td(e.precondition,t))return n;const i=$d(e.fieldTransforms,r,t),a=t.data;return a.setAll(Ld(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return Td(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Rd(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=gd(r.transform,e||null);null!=i&&(null===n&&(n=ru.empty()),n.set(r.field,i))}return n||null}function Nd(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&el(e,t,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof wd&&t instanceof wd||e instanceof vd&&t instanceof vd?el(e.elements,t.elements,Fc):e instanceof kd&&t instanceof kd?Fc(e.Ae,t.Ae):e instanceof yd&&t instanceof yd}(e.transform,t.transform)}(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Dd extends Cd{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Od extends Cd{constructor(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ld(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Md(e,t,n){const r=new Map;Ns(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let i=0;i<n.length;i++){const a=e[i],o=a.transform,s=t.data.field(a.field);r.set(a.field,md(o,s,n[i]))}return r}function $d(e,t,n){const r=new Map;for(const i of e){const e=i.transform,a=n.data.field(i.field);r.set(i.field,fd(e,a,t))}return r}class Fd extends Cd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ud extends Cd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class Bd{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Ad(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Pd(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Pd(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=rd();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let o=this.applyToLocalView(a,i.mutatedFields);o=t.has(r.key)?null:o;const s=Id(a,o);null!==s&&n.set(r.key,s),a.isValidDocument()||a.convertToNoDocument(wl.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),sd())}isEqual(e){return this.batchId===e.batchId&&el(this.mutations,e.mutations,(e,t)=>Nd(e,t))&&el(this.baseMutations,e.baseMutations,(e,t)=>Nd(e,t))}}class Vd{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Ns(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=ad;const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,n[a].version);return new Vd(e,t,n,r)}}class Hd{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}class Wd{constructor(e,t){this.count=e,this.unchangedNames=t}}var Gd,Kd;function qd(e){switch(e){case Os.OK:return Ps(64938);case Os.CANCELLED:case Os.UNKNOWN:case Os.DEADLINE_EXCEEDED:case Os.RESOURCE_EXHAUSTED:case Os.INTERNAL:case Os.UNAVAILABLE:case Os.UNAUTHENTICATED:return!1;case Os.INVALID_ARGUMENT:case Os.NOT_FOUND:case Os.ALREADY_EXISTS:case Os.PERMISSION_DENIED:case Os.FAILED_PRECONDITION:case Os.ABORTED:case Os.OUT_OF_RANGE:case Os.UNIMPLEMENTED:case Os.DATA_LOSS:return!0;default:return Ps(15467,{code:e})}}function Qd(e){if(void 0===e)return Cs("GRPC error has no .code"),Os.UNKNOWN;switch(e){case Gd.OK:return Os.OK;case Gd.CANCELLED:return Os.CANCELLED;case Gd.UNKNOWN:return Os.UNKNOWN;case Gd.DEADLINE_EXCEEDED:return Os.DEADLINE_EXCEEDED;case Gd.RESOURCE_EXHAUSTED:return Os.RESOURCE_EXHAUSTED;case Gd.INTERNAL:return Os.INTERNAL;case Gd.UNAVAILABLE:return Os.UNAVAILABLE;case Gd.UNAUTHENTICATED:return Os.UNAUTHENTICATED;case Gd.INVALID_ARGUMENT:return Os.INVALID_ARGUMENT;case Gd.NOT_FOUND:return Os.NOT_FOUND;case Gd.ALREADY_EXISTS:return Os.ALREADY_EXISTS;case Gd.PERMISSION_DENIED:return Os.PERMISSION_DENIED;case Gd.FAILED_PRECONDITION:return Os.FAILED_PRECONDITION;case Gd.ABORTED:return Os.ABORTED;case Gd.OUT_OF_RANGE:return Os.OUT_OF_RANGE;case Gd.UNIMPLEMENTED:return Os.UNIMPLEMENTED;case Gd.DATA_LOSS:return Os.DATA_LOSS;default:return Ps(39323,{code:e})}}(Kd=Gd||(Gd={}))[Kd.OK=0]="OK",Kd[Kd.CANCELLED=1]="CANCELLED",Kd[Kd.UNKNOWN=2]="UNKNOWN",Kd[Kd.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Kd[Kd.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Kd[Kd.NOT_FOUND=5]="NOT_FOUND",Kd[Kd.ALREADY_EXISTS=6]="ALREADY_EXISTS",Kd[Kd.PERMISSION_DENIED=7]="PERMISSION_DENIED",Kd[Kd.UNAUTHENTICATED=16]="UNAUTHENTICATED",Kd[Kd.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Kd[Kd.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Kd[Kd.ABORTED=10]="ABORTED",Kd[Kd.OUT_OF_RANGE=11]="OUT_OF_RANGE",Kd[Kd.UNIMPLEMENTED=12]="UNIMPLEMENTED",Kd[Kd.INTERNAL=13]="INTERNAL",Kd[Kd.UNAVAILABLE=14]="UNAVAILABLE",Kd[Kd.DATA_LOSS=15]="DATA_LOSS";let Yd=null;function Jd(){return new TextEncoder}const Xd=new us([4294967295,4294967295],0);function Zd(e){const t=Jd().encode(e),n=new ds;return n.update(t),new Uint8Array(n.digest())}function eh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new us([n,r],0),new us([i,a],0)]}class th{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nh(`Invalid padding: ${t}`);if(n<0)throw new nh(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new nh(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new nh(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=us.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(us.fromNumber(n)));return 1===r.compare(Xd)&&(r=new us([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;const t=Zd(e),[n,r]=eh(t);for(let i=0;i<this.hashCount;i++){const e=this.ye(n,r,i);if(!this.we(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new th(i,r,t);return n.forEach(e=>a.insert(e)),a}insert(e){if(0===this.ge)return;const t=Zd(e),[n,r]=eh(t);for(let i=0;i<this.hashCount;i++){const e=this.ye(n,r,i);this.Se(e)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class nh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}class rh{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,ih.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new rh(wl.min(),r,new hc(Qs),Xu(),sd())}}class ih{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ih(n,t,sd(),sd(),sd())}}class ah{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class oh{constructor(e,t){this.targetId=e,this.Ce=t}}class sh{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:bc.EMPTY_BYTE_STRING,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class lh{constructor(){this.ve=0,this.Fe=dh(),this.Me=bc.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=sd(),t=sd(),n=sd();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Ps(38017,{changeType:i})}}),new ih(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=dh()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ns(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class ch{constructor(e){this.Ge=e,this.ze=new Map,this.je=Xu(),this.Je=uh(),this.He=uh(),this.Ze=new hc(Qs)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:Ps(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,n)=>{this.rt(n)&&t(n)})}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Pu(i))if(0===n){const e=new ol(i.path);this.et(t,e,au.newNoDocument(e,wl.min()))}else Ns(1===n,20013,{expectedCount:n});else{const r=this._t(t);if(r!==n){const n=this.ut(e),i=n?this.ct(n,e,r):1;if(0!==i){this.it(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,e)}Yd?.o(function(e,t,n,r,i){const a={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},o=t.unchangedNames;return o&&(a.bloomFilter={applied:0===i,hashCount:o?.hashCount??0,bitmapLength:o?.bits?.bitmap?.length??0,padding:o?.bits?.padding??0,mightContain:e=>r?.mightContain(e)??!1}),a}(r,e.Ce,this.Ge.ht(),n,i))}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let a,o;try{a=zc(n).toUint8Array()}catch(e){if(e instanceof wc)return Is("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new th(a,r,i)}catch(e){return Is(e instanceof nh?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.ge?null:o}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const i=this.Ge.ht(),a=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(a)||(this.et(t,n,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((n,r)=>{const i=this.ot(r);if(i){if(n.current&&Pu(i.target)){const t=new ol(i.target.path);this.Et(t).has(r)||this.It(r,t)||this.et(r,t,au.newNoDocument(t,e))}n.Be&&(t.set(r,n.ke()),n.qe())}});let n=sd();this.He.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.ot(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.je.forEach((t,n)=>n.setReadTime(e));const r=new rh(e,t,this.Ze,this.je,n);return this.je=Xu(),this.Je=uh(),this.He=uh(),this.Ze=new hc(Qs),r}Ye(e,t){if(!this.rt(e))return;const n=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.It(e,t)?r.Ke(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new lh,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new mc(Qs),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new mc(Qs),this.Je=this.Je.insert(e,t)),t}rt(e){const t=null!==this.ot(e);return t||Ts("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new lh),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function uh(){return new hc(ol.comparator)}function dh(){return new hc(ol.comparator)}const hh={asc:"ASCENDING",desc:"DESCENDING"},ph={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fh={and:"AND",or:"OR"};class mh{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function gh(e,t){return e.useProto3Json||Rl(t)?t:{value:t}}function yh(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wh(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function bh(e,t){return yh(e,t.toTimestamp())}function vh(e){return Ns(!!e,49232),wl.fromTimestamp(function(e){const t=xc(e);return new yl(t.seconds,t.nanos)}(e))}function xh(e,t){return kh(e,t).canonicalString()}function kh(e,t){const n=function(e){return new rl(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function zh(e){const t=rl.fromString(e);return Ns(Vh(t),10190,{key:t.toString()}),t}function Sh(e,t){return xh(e.databaseId,t.path)}function _h(e,t){const n=zh(t);if(n.get(1)!==e.databaseId.projectId)throw new Ls(Os.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ls(Os.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ol(Ch(n))}function Eh(e,t){return xh(e.databaseId,t)}function jh(e){const t=zh(e);return 4===t.length?rl.emptyPath():Ch(t)}function Th(e){return new rl(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ch(e){return Ns(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function Ih(e,t,n){return{name:Sh(e,t),fields:n.value.mapValue.fields}}function Ah(e,t){let n;if(t instanceof Dd)n={update:Ih(e,t.key,t.value)};else if(t instanceof Fd)n={delete:Sh(e,t.key)};else if(t instanceof Od)n={update:Ih(e,t.key,t.data),updateMask:Bh(t.fieldMask)};else{if(!(t instanceof Ud))return Ps(16599,{dt:t.type});n={verify:Sh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof yd)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof wd)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof vd)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof kd)return{fieldPath:t.field.canonicalString(),increment:n.Ae};throw Ps(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:bh(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Ps(27497)}(e,t.precondition)),n}function Ph(e,t){return{documents:[Eh(e,t.path)]}}function Rh(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Eh(e,i);const a=function(e){if(0!==e.length)return Uh(pu.create(e,"and"))}(t.filters);a&&(n.structuredQuery.where=a);const o=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:$h(e.field),direction:Oh(e.dir)}}(e))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=gh(e,t.limit);return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ft:n,parent:i}}function Nh(e){let t=jh(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ns(1===r,65062);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let a=[];n.where&&(a=function(e){const t=Dh(e);return t instanceof pu&&mu(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map(e=>function(e){return new cu(Fh(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))}(n.orderBy));let s=null;n.limit&&(s=function(e){let t;return t="object"==typeof e?e.value:e,Rl(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new ou(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new ou(n,t)}(n.endAt)),Nu(t,i,o,a,s,"F",l,c)}function Dh(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Fh(e.unaryFilter.field);return hu.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Fh(e.unaryFilter.field);return hu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Fh(e.unaryFilter.field);return hu.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Fh(e.unaryFilter.field);return hu.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ps(61313);default:return Ps(60726)}}(e):void 0!==e.fieldFilter?function(e){return hu.create(Fh(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ps(58110);default:return Ps(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return pu.create(e.compositeFilter.filters.map(e=>Dh(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Ps(1026)}}(e.compositeFilter.op))}(e):Ps(30097,{filter:e})}function Oh(e){return hh[e]}function Lh(e){return ph[e]}function Mh(e){return fh[e]}function $h(e){return{fieldPath:e.canonicalString()}}function Fh(e){return al.fromServerFormat(e.fieldPath)}function Uh(e){return e instanceof hu?function(e){if("=="===e.op){if(Xc(e.value))return{unaryFilter:{field:$h(e.field),op:"IS_NAN"}};if(Jc(e.value))return{unaryFilter:{field:$h(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Xc(e.value))return{unaryFilter:{field:$h(e.field),op:"IS_NOT_NAN"}};if(Jc(e.value))return{unaryFilter:{field:$h(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$h(e.field),op:Lh(e.op),value:e.value}}}(e):e instanceof pu?function(e){const t=e.getFilters().map(e=>Uh(e));return 1===t.length?t[0]:{compositeFilter:{op:Mh(e.op),filters:t}}}(e):Ps(54877,{filter:e})}function Bh(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Vh(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function Hh(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}class Wh{constructor(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:wl.min(),a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:wl.min(),o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:bc.EMPTY_BYTE_STRING,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o,this.expectedCount=s}withSequenceNumber(e){return new Wh(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wh(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}class Gh{constructor(e){this.yt=e}}function Kh(e){const t=Nh({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Bu(t,t.limit,"L"):t}class qh{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(kc(e.integerValue));else if("doubleValue"in e){const n=kc(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),Nl(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),"string"==typeof n&&(n=xc(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(zc(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?nu(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):eu(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Kt(e.arrayValue,t),this.Nt(t)):Ps(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const r of Object.keys(n))this.Ot(r,t),this.Ct(n[r],t)}kt(e,t){const n=e.fields||{};this.Ft(t,53);const r=Mc,i=n[r].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(kc(i)),this.Ot(r,t),this.Ct(n[r],t)}Kt(e,t){const n=e.values||[];this.Ft(t,50);for(const r of n)this.Ct(r,t)}Lt(e,t){this.Ft(t,37),ol.fromName(e).path.forEach(e=>{this.Ft(t,60),this.$t(e,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}qh.Wt=new qh;class Qh{constructor(){this.bn=new Yh}addToCollectionParentIndex(e,t){return this.bn.add(t),Tl.resolve()}getCollectionParents(e,t){return Tl.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return Tl.resolve()}deleteFieldIndex(e,t){return Tl.resolve()}deleteAllFieldIndexes(e){return Tl.resolve()}createTargetIndexes(e,t){return Tl.resolve()}getDocumentsMatchingTarget(e,t){return Tl.resolve(null)}getIndexType(e,t){return Tl.resolve(0)}getFieldIndexes(e,t){return Tl.resolve([])}getNextCollectionGroupToUpdate(e){return Tl.resolve(null)}getMinOffset(e,t){return Tl.resolve(zl.min())}getMinOffsetFromCollectionGroup(e,t){return Tl.resolve(zl.min())}updateCollectionGroup(e,t,n){return Tl.resolve()}updateIndexEntries(e,t){return Tl.resolve()}}class Yh{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new mc(rl.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new mc(rl.comparator)).toArray()}}new Uint8Array(0);const Jh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xh=41943040;class Zh{static withCacheSize(e){return new Zh(e,Zh.DEFAULT_COLLECTION_PERCENTILE,Zh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}Zh.DEFAULT_COLLECTION_PERCENTILE=10,Zh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zh.DEFAULT=new Zh(Xh,Zh.DEFAULT_COLLECTION_PERCENTILE,Zh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zh.DISABLED=new Zh(-1,0,0);class ep{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ep(0)}static ar(){return new ep(-1)}}const tp="LruGarbageCollector",np=1048576;function rp(e,t){let[n,r]=e,[i,a]=t;const o=Qs(n,i);return 0===o?Qs(r,a):o}class ip{constructor(e){this.Pr=e,this.buffer=new mc(rp),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();rp(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ap{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(e){Ts(tp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Il(e)?Ts(tp,"Ignoring IndexedDB error during garbage collection: ",e):await jl(e)}await this.Ar(3e5)})}}class op{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Tl.resolve(Al.ce);const n=new ip(t);return this.Vr.forEachTarget(e,e=>n.Ir(e.sequenceNumber)).next(()=>this.Vr.mr(e,e=>n.Ir(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Ts("LruGarbageCollector","Garbage collection skipped; disabled"),Tl.resolve(Jh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(Ts("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jh):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,r,i,a,o,s,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(Ts("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,a=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,s=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),js()<=cn.DEBUG&&Ts("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${a-c}ms\n\tDetermined least recently used ${r} in `+(o-a)+"ms\n"+`\tRemoved ${i} targets in `+(s-o)+"ms\n"+`\tRemoved ${e} documents in `+(l-s)+"ms\n"+`Total Duration: ${l-c}ms`),Tl.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}function sp(e,t){return new op(e,t)}class lp{constructor(){this.changes=new Yu(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,au.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Tl.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}class cp{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}class up{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&Pd(n.mutation,e,yc.empty(),yl.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,sd()).next(()=>t))}getLocalViewOfDocuments(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:sd();const r=nd();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=ed();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=nd();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,sd()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=Xu();const a=id(),o=id();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Od)?i=i.insert(t.key,t):void 0!==o?(a.set(t.key,o.mutation.getFieldMask()),Pd(o.mutation,t,o.mutation.getFieldMask(),yl.now())):a.set(t.key,yc.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>a.set(e,t)),t.forEach((e,t)=>o.set(e,new cp(t,a.get(e)??null))),o))}recalculateAndSaveOverlays(e,t){const n=id();let r=new hc((e,t)=>e-t),i=sd();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const a=t.get(e);if(null===a)return;let o=n.get(e)||yc.empty();o=i.applyToLocalView(a,o),n.set(e,o);const s=(r.get(i.batchId)||sd()).add(e);r=r.insert(i.batchId,s)})}).next(()=>{const a=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),s=r.key,l=r.value,c=rd();l.forEach(e=>{if(!i.has(e)){const r=Id(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}}),a.push(this.documentOverlayCache.saveOverlays(e,s,c))}return Tl.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return ol.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Lu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Tl.resolve(nd());let o=bl,s=i;return a.next(t=>Tl.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Tl.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{s=s.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,s,t,sd())).next(e=>({batchId:o,changes:td(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ol(t)).next(e=>{let t=ed();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let a=ed();return this.indexManager.getCollectionParents(e,i).next(o=>Tl.forEach(o,o=>{const s=function(e,t){return new Ru(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,s,n,r).next(e=>{e.forEach((e,t)=>{a=a.insert(e,t)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,au.newInvalidDocument(r)))});let n=ed();return e.forEach((e,r)=>{const a=i.get(e);void 0!==a&&Pd(a.mutation,r,yc.empty(),yl.now()),Gu(t,r)&&(n=n.insert(e,r))}),n})}}class dp{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return Tl.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:vh(e.createTime)}}(t)),Tl.resolve()}getNamedQuery(e,t){return Tl.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(e){return{name:e.name,query:Kh(e.bundledQuery),readTime:vh(e.readTime)}}(t)),Tl.resolve()}}class hp{constructor(){this.overlays=new hc(ol.comparator),this.Lr=new Map}getOverlay(e,t){return Tl.resolve(this.overlays.get(t))}getOverlays(e,t){const n=nd();return Tl.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.St(e,t,r)}),Tl.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Lr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Lr.delete(n)),Tl.resolve()}getOverlaysForCollection(e,t,n){const r=nd(),i=t.length+1,a=new ol(t.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const e=o.getNext().value,a=e.getKey();if(!t.isPrefixOf(a.path))break;a.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Tl.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new hc((e,t)=>e-t);const a=this.overlays.getIterator();for(;a.hasNext();){const e=a.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=nd(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=nd(),s=i.getIterator();for(;s.hasNext()&&(s.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return Tl.resolve(o)}St(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Hd(t,n));let i=this.Lr.get(t);void 0===i&&(i=sd(),this.Lr.set(t,i)),this.Lr.set(t,i.add(n.key))}}class pp{constructor(){this.sessionToken=bc.EMPTY_BYTE_STRING}getSessionToken(e){return Tl.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Tl.resolve()}}class fp{constructor(){this.kr=new mc(mp.qr),this.Kr=new mc(mp.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new mp(e,t);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new mp(e,t))}Qr(e,t){e.forEach(e=>this.removeReference(e,t))}Gr(e){const t=new ol(new rl([])),n=new mp(t,e),r=new mp(t,e+1),i=[];return this.Kr.forEachInRange([n,r],e=>{this.Wr(e),i.push(e.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new ol(new rl([])),n=new mp(t,e),r=new mp(t,e+1);let i=sd();return this.Kr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new mp(e,0),n=this.kr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class mp{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return ol.comparator(e.key,t.key)||Qs(e.Jr,t.Jr)}static Ur(e,t){return Qs(e.Jr,t.Jr)||ol.comparator(e.key,t.key)}}class gp{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new mc(mp.qr)}checkEmpty(e){return Tl.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Bd(i,t,n,r);this.mutationQueue.push(a);for(const o of r)this.Hr=this.Hr.add(new mp(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Tl.resolve(a)}lookupMutationBatch(e,t){return Tl.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Xr(n),i=r<0?0:r;return Tl.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Tl.resolve(0===this.mutationQueue.length?Pl:this.Yn-1)}getAllMutationBatches(e){return Tl.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new mp(t,0),r=new mp(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,r],e=>{const t=this.Zr(e.Jr);i.push(t)}),Tl.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new mc(Qs);return t.forEach(e=>{const t=new mp(e,0),r=new mp(e,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([t,r],e=>{n=n.add(e.Jr)})}),Tl.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ol.isDocumentKey(i)||(i=i.child(""));const a=new mp(new ol(i),0);let o=new mc(Qs);return this.Hr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Jr)),!0)},a),Tl.resolve(this.Yr(o))}Yr(e){const t=[];return e.forEach(e=>{const n=this.Zr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){Ns(0===this.ei(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Hr;return Tl.forEach(t.mutations,r=>{const i=new mp(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Hr=n})}nr(e){}containsKey(e,t){const n=new mp(t,0),r=this.Hr.firstAfterOrEqual(n);return Tl.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Tl.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}class yp{constructor(e){this.ti=e,this.docs=new hc(ol.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Tl.resolve(n?n.document.mutableCopy():au.newInvalidDocument(t))}getEntries(e,t){let n=Xu();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():au.newInvalidDocument(e))}),Tl.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Xu();const a=t.path,o=new ol(a.child("__id-9223372036854775808__")),s=this.docs.getIteratorFrom(o);for(;s.hasNext();){const{key:e,value:{document:o}}=s.getNext();if(!a.isPrefixOf(e.path))break;e.path.length>a.length+1||Sl(kl(o),n)<=0||(r.has(o.key)||Gu(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Tl.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Ps(9500)}ni(e,t){return Tl.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new wp(this)}getSize(e){return Tl.resolve(this.size)}}class wp extends lp{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(n)}),Tl.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}class bp{constructor(e){this.persistence=e,this.ri=new Yu(e=>Iu(e),Au),this.lastRemoteSnapshotVersion=wl.min(),this.highestTargetId=0,this.ii=0,this.si=new fp,this.targetCount=0,this.oi=ep._r()}forEachTarget(e,t){return this.ri.forEach((e,n)=>t(n)),Tl.resolve()}getLastRemoteSnapshotVersion(e){return Tl.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Tl.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),Tl.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),Tl.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new ep(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,Tl.resolve()}updateTargetData(e,t){return this.lr(t),Tl.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,Tl.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.ri.forEach((a,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Tl.waitFor(i).next(()=>r)}getTargetCount(e){return Tl.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return Tl.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),Tl.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Tl.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),Tl.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return Tl.resolve(n)}containsKey(e,t){return Tl.resolve(this.si.containsKey(t))}}class vp{constructor(e,t){this._i={},this.overlays={},this.ai=new Al(0),this.ui=!1,this.ui=!0,this.ci=new pp,this.referenceDelegate=e(this),this.li=new bp(this),this.indexManager=new Qh,this.remoteDocumentCache=function(e){return new yp(e)}(e=>this.referenceDelegate.hi(e)),this.serializer=new Gh(t),this.Pi=new dp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hp,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new gp(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){Ts("MemoryPersistence","Starting transaction:",e);const r=new xp(this.ai.next());return this.referenceDelegate.Ti(),n(r).next(e=>this.referenceDelegate.Ei(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ii(e,t){return Tl.or(Object.values(this._i).map(n=>()=>n.containsKey(e,t)))}}class xp extends El{constructor(e){super(),this.currentSequenceNumber=e}}class kp{constructor(e){this.persistence=e,this.Ri=new fp,this.Ai=null}static Vi(e){return new kp(e)}get di(){if(this.Ai)return this.Ai;throw Ps(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),Tl.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),Tl.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),Tl.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(e=>this.di.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.di.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Tl.forEach(this.di,n=>{const r=ol.fromPath(n);return this.mi(e,r).next(e=>{e||t.removeEntry(r,wl.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(e=>{e?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return Tl.or([()=>Tl.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class zp{constructor(e,t){this.persistence=e,this.fi=new Yu(e=>Ll(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=sp(this,t)}static Vi(e,t){return new zp(e,t)}Ti(){}Ei(e){return Tl.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}pr(e){let t=0;return this.mr(e,e=>{t++}).next(()=>t)}mr(e,t){return Tl.forEach(this.fi,(n,r)=>this.wr(e,n,r).next(e=>e?Tl.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,r=>this.wr(e,r,t).next(e=>{e||(n++,i.removeEntry(r,wl.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),Tl.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),Tl.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),Tl.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),Tl.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Kc(e.data.value)),t}wr(e,t,n){return Tl.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.fi.get(t);return Tl.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}class Sp{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ts=n,this.Es=r}static Is(e,t){let n=sd(),r=sd();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Sp(e,t.fromCache,n,r)}}class _p{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}class Ep{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=Ut()?8:Cl($t())>0?6:4}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.gs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ps(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;const n=new _p;return this.ys(e,t,n).next(r=>{if(i.result=r,this.As)return this.ws(e,t,n,r.size)})}).next(()=>i.result)}ws(e,t,n,r){return n.documentReadCount<this.Vs?(js()<=cn.DEBUG&&Ts("QueryEngine","SDK will not create cache indexes for query:",Wu(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Tl.resolve()):(js()<=cn.DEBUG&&Ts("QueryEngine","Query:",Wu(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(js()<=cn.DEBUG&&Ts("QueryEngine","The SDK decides to create cache indexes for query:",Wu(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$u(t))):Tl.resolve())}gs(e,t){if(Ou(t))return Tl.resolve(null);let n=$u(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=Bu(t,null,"F"),n=$u(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=sd(...r);return this.fs.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const a=this.Ss(t,r);return this.bs(t,a,i,n.readTime)?this.gs(e,Bu(t,null,"F")):this.Ds(e,a,t,n)}))})))}ps(e,t,n,r){return Ou(t)||r.isEqual(wl.min())?Tl.resolve(null):this.fs.getDocuments(e,n).next(i=>{const a=this.Ss(t,i);return this.bs(t,a,n,r)?Tl.resolve(null):(js()<=cn.DEBUG&&Ts("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Wu(t)),this.Ds(e,a,t,xl(r,bl)).next(e=>e))})}Ss(e,t){let n=new mc(qu(e));return t.forEach((t,r)=>{Gu(e,r)&&(n=n.add(r))}),n}bs(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,n){return js()<=cn.DEBUG&&Ts("QueryEngine","Using full collection scan to execute query:",Wu(t)),this.fs.getDocumentsMatchingQuery(e,t,zl.min(),n)}Ds(e,t,n,r){return this.fs.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}const jp="LocalStore";class Tp{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new hc(Qs),this.Fs=new Yu(e=>Iu(e),Au),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new up(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Cp(e,t,n,r){return new Tp(e,t,n,r)}async function Ip(e,t){const n=Ds(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.Os(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],a=[];let o=sd();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){a.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({Ns:e,removedBatchIds:i,addedBatchIds:a}))})})}function Ap(e){const t=Ds(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function Pp(e,t,n){let r=sd(),i=sd();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=Xu();return n.forEach((n,a)=>{const o=e.get(n);a.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),a.isNoDocument()&&a.version.isEqual(wl.min())?(t.removeEntry(n,a.readTime),r=r.insert(n,a)):!o.isValidDocument()||a.version.compareTo(o.version)>0||0===a.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(a),r=r.insert(n,a)):Ts(jp,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",a.version)}),{Bs:r,Ls:i}})}function Rp(e,t){const n=Ds(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=Pl),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function Np(e,t){const n=Ds(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.li.getTargetData(e,t).next(i=>i?(r=i,Tl.resolve(r)):n.li.allocateTargetId(e).next(i=>(r=new Wh(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.li.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.vs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(e.targetId,e),n.Fs.set(t,e.targetId)),e})}async function Dp(e,t,n){const r=Ds(e),i=r.vs.get(t),a=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",a,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!Il(e))throw e;Ts(jp,`Failed to update sequence numbers for target ${t}: ${e}`)}r.vs=r.vs.remove(t),r.Fs.delete(i.target)}function Op(e,t,n){const r=Ds(e);let i=wl.min(),a=sd();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=Ds(e),i=r.Fs.get(n);return void 0!==i?Tl.resolve(r.vs.get(i)):r.li.getTargetData(t,n)}(r,e,$u(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(e,t.targetId).next(e=>{a=e})}).next(()=>r.Cs.getDocumentsMatchingQuery(e,t,n?i:wl.min(),n?a:sd())).next(e=>(Lp(r,Ku(t),e),{documents:e,ks:a})))}function Lp(e,t,n){let r=e.Ms.get(t)||wl.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Ms.set(t,r)}class Mp{constructor(){this.activeTargetIds=cd()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $p{constructor(){this.vo=new Mp,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Mp,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}class Fp{Mo(e){}shutdown(){}}const Up="ConnectivityMonitor";class Bp{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Ts(Up,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Ts(Up,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}let Vp=null;function Hp(){return null===Vp?Vp=268435456+Math.round(2147483648*Math.random()):Vp++,"0x"+Vp.toString(16)}const Wp="RestConnection",Gp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Kp{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===Pc?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,i){const a=Hp(),o=this.Qo(e,t.toUriEncodedString());Ts(Wp,`Sending RPC '${e}' ${a}:`,o,n);const s={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(s,r,i);const{host:l}=new URL(o),c=en(l);return this.zo(e,o,s,n,c).then(t=>(Ts(Wp,`Received RPC '${e}' ${a}: `,t),t),t=>{throw Is(Wp,`RPC '${e}' ${a} failed with error: `,t,"url: ",o,"request:",n),t})}jo(e,t,n,r,i,a){return this.Wo(e,t,n,r,i)}Go(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+_s,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Qo(e,t){const n=Gp[e];let r=`${this.Ko}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}class qp{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}const Qp="WebChannelConnection",Yp=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};class Jp extends Kp{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Jp.c_){const e=vs();Yp(e,bs.STAT_EVENT,e=>{e.stat===ws.PROXY?Ts(Qp,"STAT_EVENT: detected buffering proxy"):e.stat===ws.NOPROXY&&Ts(Qp,"STAT_EVENT: detected no buffering proxy")}),Jp.c_=!0}}zo(e,t,n,r,i){const a=Hp();return new Promise((i,o)=>{const s=new fs;s.setWithCredentials(!0),s.listenOnce(gs.COMPLETE,()=>{try{switch(s.getLastErrorCode()){case ys.NO_ERROR:const t=s.getResponseJson();Ts(Qp,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(t)),i(t);break;case ys.TIMEOUT:Ts(Qp,`RPC '${e}' ${a} timed out`),o(new Ls(Os.DEADLINE_EXCEEDED,"Request time out"));break;case ys.HTTP_ERROR:const n=s.getStatus();if(Ts(Qp,`RPC '${e}' ${a} failed with status:`,n,"response text:",s.getResponseText()),n>0){let e=s.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=e?.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Os).indexOf(t)>=0?t:Os.UNKNOWN}(t.status);o(new Ls(e,t.message))}else o(new Ls(Os.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new Ls(Os.UNAVAILABLE,"Connection failed."));break;default:Ps(9055,{l_:e,streamId:a,h_:s.getLastErrorCode(),P_:s.getLastError()})}}finally{Ts(Qp,`RPC '${e}' ${a} completed.`)}});const l=JSON.stringify(r);Ts(Qp,`RPC '${e}' ${a} sending request:`,r),s.send(t,"POST",l,n,15)})}T_(e,t,n){const r=Hp(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},s=this.longPollingOptions.timeoutSeconds;void 0!==s&&(o.longPollingTimeout=Math.round(1e3*s)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Go(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const l=i.join("");Ts(Qp,`Creating RPC '${e}' stream ${r}: ${l}`,o);const c=a.createWebChannel(l,o);this.E_(c);let u=!1,d=!1;const h=new qp({Jo:t=>{d?Ts(Qp,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(u||(Ts(Qp,`Opening RPC '${e}' stream ${r} transport.`),c.open(),u=!0),Ts(Qp,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},Ho:()=>c.close()});return Yp(c,ms.EventType.OPEN,()=>{d||(Ts(Qp,`RPC '${e}' stream ${r} transport opened.`),h.i_())}),Yp(c,ms.EventType.CLOSE,()=>{d||(d=!0,Ts(Qp,`RPC '${e}' stream ${r} transport closed`),h.o_(),this.I_(c))}),Yp(c,ms.EventType.ERROR,t=>{d||(d=!0,Is(Qp,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),h.o_(new Ls(Os.UNAVAILABLE,"The operation could not be completed")))}),Yp(c,ms.EventType.MESSAGE,t=>{if(!d){const n=t.data[0];Ns(!!n,16349);const i=n,a=i?.error||i[0]?.error;if(a){Ts(Qp,`RPC '${e}' stream ${r} received error:`,a);const t=a.status;let n=function(e){const t=Gd[e];if(void 0!==t)return Qd(t)}(t),i=a.message;"NOT_FOUND"===t&&i.includes("database")&&i.includes("does not exist")&&i.includes(this.databaseId.database)&&Is(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=Os.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),d=!0,h.o_(new Ls(n,i)),c.close()}else Ts(Qp,`RPC '${e}' stream ${r} received:`,n),h.__(n)}}),Jp.u_(),setTimeout(()=>{h.s_()},0),h}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return xs()}}function Xp(e){return new Jp(e)}function Zp(){return"undefined"!=typeof document?document:null}function ef(e){return new mh(e,!0)}Jp.c_=!1;class tf{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;this.Ci=e,this.timerId=t,this.R_=n,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&Ts("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}const nf="PersistentStream";class rf{constructor(e,t,n,r,i,a,o,s){this.Ci=e,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=s,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new tf(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===Os.RESOURCE_EXHAUSTED?(Cs(t.toString()),Cs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Os.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(e=>{let[n,r]=e;this.D_===t&&this.G_(n,r)},t=>{e(()=>{const e=new Ls(Os.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(e=>{n(()=>this.z_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.F_?this.J_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Ts(nf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(Ts(nf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class af extends rf{constructor(e,t,n,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Ps(39313,{state:e})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],a=function(e,t){return e.useProto3Json?(Ns(void 0===t||"string"==typeof t,58123),bc.fromBase64String(t||"")):(Ns(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),bc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,s=o&&function(e){const t=void 0===e.code?Os.UNKNOWN:Qd(e.code);return new Ls(t,e.message||"")}(o);n=new sh(r,i,a,s||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=_h(e,r.document.name),a=vh(r.document.updateTime),o=r.document.createTime?vh(r.document.createTime):wl.min(),s=new ru({mapValue:{fields:r.document.fields}}),l=au.newFoundDocument(i,a,o,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ah(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=_h(e,r.document),a=r.readTime?vh(r.readTime):wl.min(),o=au.newNoDocument(i,a),s=r.removedTargetIds||[];n=new ah([],s,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=_h(e,r.document),a=r.removedTargetIds||[];n=new ah([],a,i,null)}else{if(!("filter"in t))return Ps(11601,{Vt:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,a=new Wd(r,i),o=e.targetId;n=new oh(o,a)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return wl.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?wl.min():t.readTime?vh(t.readTime):wl.min()}(e);return this.listener.H_(t,n)}Z_(e){const t={};t.database=Th(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Pu(r)?{documents:Ph(e,r)}:{query:Rh(e,r).ft},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=wh(e,t.resumeToken);const r=gh(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(wl.min())>0){n.readTime=yh(e,t.snapshotVersion.toTimestamp());const r=gh(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ps(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.q_(t)}X_(e){const t={};t.database=Th(this.serializer),t.removeTarget=e,this.q_(t)}}class of extends rf{constructor(e,t,n,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ns(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ns(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){Ns(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=function(e,t){return e&&e.length>0?(Ns(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?vh(e.updateTime):vh(t);return n.isEqual(wl.min())&&(n=vh(t)),new Ed(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=vh(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Th(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Ah(this.serializer,e))};this.q_(t)}}class sf{}class lf extends sf{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new Ls(Os.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(i=>{let[a,o]=i;return this.connection.Wo(e,kh(t,n),r,a,o)}).catch(e=>{throw"FirebaseError"===e.name?(e.code===Os.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ls(Os.UNKNOWN,e.toString())})}jo(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(a=>{let[o,s]=a;return this.connection.jo(e,kh(t,n),r,o,s,i)}).catch(e=>{throw"FirebaseError"===e.name?(e.code===Os.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ls(Os.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function cf(e,t,n,r){return new lf(e,t,n,r)}class uf{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Cs(t),this.aa=!1):Ts("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}const df="RemoteStore";class hf{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(e=>{n.enqueueAndForget(async()=>{xf(this)&&(Ts(df,"Restarting streams for network reachability change."),await async function(e){const t=Ds(e);t.Ia.add(4),await ff(t),t.Va.set("Unknown"),t.Ia.delete(4),await pf(t)}(this))})}),this.Va=new uf(n,r)}}async function pf(e){if(xf(e))for(const t of e.Ra)await t(!0)}async function ff(e){for(const t of e.Ra)await t(!1)}function mf(e,t){const n=Ds(e);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),vf(n)?bf(n):Ff(n).O_()&&yf(n,t))}function gf(e,t){const n=Ds(e),r=Ff(n);n.Ea.delete(t),r.O_()&&wf(n,t),0===n.Ea.size&&(r.O_()?r.L_():xf(n)&&n.Va.set("Unknown"))}function yf(e,t){if(e.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(wl.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ff(e).Z_(t)}function wf(e,t){e.da.$e(t),Ff(e).X_(t)}function bf(e){e.da=new ch({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ea.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),Ff(e).start(),e.Va.ua()}function vf(e){return xf(e)&&!Ff(e).x_()&&e.Ea.size>0}function xf(e){return 0===Ds(e).Ia.size}function kf(e){e.da=void 0}async function zf(e){e.Va.set("Online")}async function Sf(e){e.Ea.forEach((t,n)=>{yf(e,t)})}async function _f(e,t){kf(e),vf(e)?(e.Va.ha(t),bf(e)):e.Va.set("Unknown")}async function Ef(e,t,n){if(e.Va.set("Online"),t instanceof sh&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Ea.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ea.delete(r),e.da.removeTarget(r))}(e,t)}catch(n){Ts(df,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await jf(e,n)}else if(t instanceof ah?e.da.Xe(t):t instanceof oh?e.da.st(t):e.da.tt(t),!n.isEqual(wl.min()))try{const t=await Ap(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.da.Tt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Ea.get(r);i&&e.Ea.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ea.get(t);if(!r)return;e.Ea.set(t,r.withResumeToken(bc.EMPTY_BYTE_STRING,r.snapshotVersion)),wf(e,t);const i=new Wh(r.target,t,n,r.sequenceNumber);yf(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Ts(df,"Failed to raise snapshot:",t),await jf(e,t)}}async function jf(e,t,n){if(!Il(t))throw t;e.Ia.add(1),await ff(e),e.Va.set("Offline"),n||(n=()=>Ap(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Ts(df,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await pf(e)})}function Tf(e,t){return t().catch(n=>jf(e,n,t))}async function Cf(e){const t=Ds(e),n=Uf(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Pl;for(;If(t);)try{const e=await Rp(t.localStore,r);if(null===e){0===t.Ta.length&&n.L_();break}r=e.batchId,Af(t,e)}catch(e){await jf(t,e)}Pf(t)&&Rf(t)}function If(e){return xf(e)&&e.Ta.length<10}function Af(e,t){e.Ta.push(t);const n=Uf(e);n.O_()&&n.Y_&&n.ea(t.mutations)}function Pf(e){return xf(e)&&!Uf(e).x_()&&e.Ta.length>0}function Rf(e){Uf(e).start()}async function Nf(e){Uf(e).ra()}async function Df(e){const t=Uf(e);for(const n of e.Ta)t.ea(n.mutations)}async function Of(e,t,n){const r=e.Ta.shift(),i=Vd.from(r,t,n);await Tf(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Cf(e)}async function Lf(e,t){t&&Uf(e).Y_&&await async function(e,t){if(function(e){return qd(e)&&e!==Os.ABORTED}(t.code)){const n=e.Ta.shift();Uf(e).B_(),await Tf(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Cf(e)}}(e,t),Pf(e)&&Rf(e)}async function Mf(e,t){const n=Ds(e);n.asyncQueue.verifyOperationInProgress(),Ts(df,"RemoteStore received new credentials");const r=xf(n);n.Ia.add(3),await ff(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await pf(n)}async function $f(e,t){const n=Ds(e);t?(n.Ia.delete(2),await pf(n)):t||(n.Ia.add(2),await ff(n),n.Va.set("Unknown"))}function Ff(e){return e.ma||(e.ma=function(e,t,n){const r=Ds(e);return r.sa(),new af(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:zf.bind(null,e),Yo:Sf.bind(null,e),t_:_f.bind(null,e),H_:Ef.bind(null,e)}),e.Ra.push(async t=>{t?(e.ma.B_(),vf(e)?bf(e):e.Va.set("Unknown")):(await e.ma.stop(),kf(e))})),e.ma}function Uf(e){return e.fa||(e.fa=function(e,t,n){const r=Ds(e);return r.sa(),new of(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Nf.bind(null,e),t_:Lf.bind(null,e),ta:Df.bind(null,e),na:Of.bind(null,e)}),e.Ra.push(async t=>{t?(e.fa.B_(),await Cf(e)):(await e.fa.stop(),e.Ta.length>0&&(Ts(df,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}class Bf{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Ms,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const a=Date.now()+n,o=new Bf(e,t,a,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ls(Os.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vf(e,t){if(Cs("AsyncQueue",`${t}: ${e}`),Il(e))return new Ls(Os.UNAVAILABLE,`${t}: ${e}`);throw e}class Hf{static emptySet(e){return new Hf(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||ol.comparator(t.key,n.key):(e,t)=>ol.comparator(e.key,t.key),this.keyedMap=ed(),this.sortedSet=new hc(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Hf))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Hf;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}class Wf{constructor(){this.ga=new hc(ol.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?0!==e.type&&3===n.type?this.ga=this.ga.insert(t,e):3===e.type&&1!==n.type?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.ga=this.ga.remove(t):1===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ps(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class Gf{constructor(e,t,n,r,i,a,o,s,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=s,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const a=[];return t.forEach(e=>{a.push({type:0,doc:e})}),new Gf(e,t,Hf.emptySet(t),a,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}class Kf{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class qf{constructor(){this.queries=Qf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){const n=Ds(e),r=n.queries;n.queries=Qf(),r.forEach((e,n)=>{for(const r of n.Sa)r.onError(t)})}(this,new Ls(Os.ABORTED,"Firestore shutting down"))}}function Qf(){return new Yu(e=>Hu(e),Vu)}async function Yf(e,t){const n=Ds(e);let r=3;const i=t.query;let a=n.queries.get(i);a?!a.ba()&&t.Da()&&(r=2):(a=new Kf,r=t.Da()?0:1);try{switch(r){case 0:a.wa=await n.onListen(i,!0);break;case 1:a.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(e){const n=Vf(e,`Initialization of query '${Wu(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,a),a.Sa.push(t),t.va(n.onlineState),a.wa&&t.Fa(a.wa)&&em(n)}async function Jf(e,t){const n=Ds(e),r=t.query;let i=3;const a=n.queries.get(r);if(a){const e=a.Sa.indexOf(t);e>=0&&(a.Sa.splice(e,1),0===a.Sa.length?i=t.Da()?0:1:!a.ba()&&t.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Xf(e,t){const n=Ds(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.Sa)e.Fa(i)&&(r=!0);t.wa=i}}r&&em(n)}function Zf(e,t,n){const r=Ds(e),i=r.queries.get(t);if(i)for(const a of i.Sa)a.onError(n);r.queries.delete(t)}function em(e){e.Ca.forEach(e=>{e.next()})}var tm,nm;(nm=tm||(tm={})).Ma="default",nm.Cache="cache";class rm{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Gf(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==t;return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ka(e){e=Gf.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==tm.Cache}}class im{constructor(e){this.key=e}}class am{constructor(e){this.key=e}}class om{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=sd(),this.mutatedKeys=sd(),this.eu=qu(e),this.tu=new Hf(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new Wf,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,o=!1;const s="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const c=r.get(e),u=Gu(this.query,t)?t:null,d=!!c&&this.mutatedKeys.has(c.key),h=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;c&&u?c.data.isEqual(u.data)?d!==h&&(n.track({type:3,doc:u}),p=!0):this.su(c,u)||(n.track({type:2,doc:u}),p=!0,(s&&this.eu(u,s)>0||l&&this.eu(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),p=!0):c&&!u&&(n.track({type:1,doc:c}),p=!0,(s||l)&&(o=!0)),p&&(u?(a=a.add(u),i=h?i.add(e):i.delete(e)):(a=a.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;a.size>this.query.limit;){const e="F"===this.query.limitType?a.last():a.first();a=a.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{tu:a,iu:n,bs:o,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ps(20277,{Vt:e})}};return n(e)-n(t)}(e.type,t.type)||this.eu(e.doc,t.doc)),this.ou(n),r=r??!1;const o=t&&!r?this._u():[],s=0===this.Ya.size&&this.current&&!r?1:0,l=s!==this.Xa;return this.Xa=s,0!==a.length||l?{snapshot:new Gf(this.query,e.tu,i,a,e.mutatedKeys,0===s,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Wf,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(e=>this.Za=this.Za.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Za=this.Za.delete(e)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=sd(),this.tu.forEach(e=>{this.uu(e.key)&&(this.Ya=this.Ya.add(e.key))});const t=[];return e.forEach(e=>{this.Ya.has(e)||t.push(new am(e))}),this.Ya.forEach(n=>{e.has(n)||t.push(new im(n))}),t}cu(e){this.Za=e.ks,this.Ya=sd();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Gf.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Xa,this.hasCachedResults)}}const sm="SyncEngine";class lm{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class cm{constructor(e){this.key=e,this.hu=!1}}class um{constructor(e,t,n,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Yu(e=>Hu(e),Vu),this.Eu=new Map,this.Iu=new Set,this.Ru=new hc(ol.comparator),this.Au=new Map,this.Vu=new fp,this.du={},this.mu=new Map,this.fu=ep.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function dm(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=Pm(e);let i;const a=r.Tu.get(t);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await pm(r,t,n,!0),i}async function hm(e,t){const n=Pm(e);await pm(n,t,!0,!1)}async function pm(e,t,n,r){const i=await Np(e.localStore,$u(t)),a=i.targetId,o=e.sharedClientState.addLocalQueryTarget(a,n);let s;return r&&(s=await fm(e,t,a,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&mf(e.remoteStore,i),s}async function fm(e,t,n,r,i){e.pu=(t,n,r)=>async function(e,t,n,r){let i=t.view.ru(n);i.bs&&(i=await Op(e.localStore,t.query,!1).then(e=>{let{documents:n}=e;return t.view.ru(n,i)}));const a=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),s=t.view.applyChanges(i,e.isPrimaryClient,a,o);return Em(e,t.targetId,s.au),s.snapshot}(e,t,n,r);const a=await Op(e.localStore,t,!0),o=new om(t,a.ks),s=o.ru(a.documents),l=ih.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),c=o.applyChanges(s,e.isPrimaryClient,l);Em(e,n,c.au);const u=new lm(t,n,o);return e.Tu.set(t,u),e.Eu.has(n)?e.Eu.get(n).push(t):e.Eu.set(n,[t]),c.snapshot}async function mm(e,t,n){const r=Ds(e),i=r.Tu.get(t),a=r.Eu.get(i.targetId);if(a.length>1)return r.Eu.set(i.targetId,a.filter(e=>!Vu(e,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Dp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&gf(r.remoteStore,i.targetId),Sm(r,i.targetId)}).catch(jl)):(Sm(r,i.targetId),await Dp(r.localStore,i.targetId,!0))}async function gm(e,t){const n=Ds(e),r=n.Tu.get(t),i=n.Eu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),gf(n.remoteStore,r.targetId))}async function ym(e,t){const n=Ds(e);try{const e=await function(e,t){const n=Ds(e),r=t.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const a=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const o=[];t.targetChanges.forEach((a,s)=>{const l=i.get(s);if(!l)return;o.push(n.li.removeMatchingKeys(e,a.removedDocuments,s).next(()=>n.li.addMatchingKeys(e,a.addedDocuments,s)));let c=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(s)?c=c.withResumeToken(bc.EMPTY_BYTE_STRING,wl.min()).withLastLimboFreeSnapshotVersion(wl.min()):a.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(a.resumeToken,r)),i=i.insert(s,c),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,a)&&o.push(n.li.updateTargetData(e,c))});let s=Xu(),l=sd();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(Pp(e,a,t.documentUpdates).next(e=>{s=e.Bs,l=e.Ls})),!r.isEqual(wl.min())){const t=n.li.getLastRemoteSnapshotVersion(e).next(t=>n.li.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Tl.waitFor(o).next(()=>a.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,s,l)).next(()=>s)}).then(e=>(n.vs=i,e))}(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Au.get(t);r&&(Ns(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.hu=!0:e.modifiedDocuments.size>0?Ns(r.hu,14607):e.removedDocuments.size>0&&(Ns(r.hu,42227),r.hu=!1))}),await Cm(n,e,t)}catch(e){await jl(e)}}function wm(e,t,n){const r=Ds(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Tu.forEach((n,r)=>{const i=r.view.va(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=Ds(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.Sa)i.va(t)&&(r=!0)}),r&&em(n)}(r.eventManager,t),e.length&&r.Pu.H_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function bm(e,t,n){const r=Ds(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Au.get(t),a=i&&i.key;if(a){let e=new hc(ol.comparator);e=e.insert(a,au.newNoDocument(a,wl.min()));const n=sd().add(a),i=new rh(wl.min(),new Map,new hc(Qs),e,n);await ym(r,i),r.Ru=r.Ru.remove(a),r.Au.delete(t),Tm(r)}else await Dp(r.localStore,t,!1).then(()=>Sm(r,t,n)).catch(jl)}async function vm(e,t){const n=Ds(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Ds(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,a=i.keys();let o=Tl.resolve();return a.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const a=n.docVersions.get(e);Ns(null!==a,48541),t.version.compareTo(a)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=sd();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);zm(n,r,null),km(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cm(n,e)}catch(e){await jl(e)}}async function xm(e,t,n){const r=Ds(e);try{const e=await function(e,t){const n=Ds(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(Ns(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);zm(r,t,n),km(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Cm(r,e)}catch(n){await jl(n)}}function km(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function zm(e,t,n){const r=Ds(e);let i=r.du[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.du[r.currentUser.toKey()]=i}}function Sm(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Eu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Eu.delete(t),e.isPrimaryClient&&e.Vu.Gr(t).forEach(t=>{e.Vu.containsKey(t)||_m(e,t)})}function _m(e,t){e.Iu.delete(t.path.canonicalString());const n=e.Ru.get(t);null!==n&&(gf(e.remoteStore,n),e.Ru=e.Ru.remove(t),e.Au.delete(n),Tm(e))}function Em(e,t,n){for(const r of n)r instanceof im?(e.Vu.addReference(r.key,t),jm(e,r)):r instanceof am?(Ts(sm,"Document no longer in limbo: "+r.key),e.Vu.removeReference(r.key,t),e.Vu.containsKey(r.key)||_m(e,r.key)):Ps(19791,{wu:r})}function jm(e,t){const n=t.key,r=n.path.canonicalString();e.Ru.get(n)||e.Iu.has(r)||(Ts(sm,"New document in limbo: "+n),e.Iu.add(r),Tm(e))}function Tm(e){for(;e.Iu.size>0&&e.Ru.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new ol(rl.fromString(t)),r=e.fu.next();e.Au.set(r,new cm(n)),e.Ru=e.Ru.insert(n,r),mf(e.remoteStore,new Wh($u(Du(n.path)),r,"TargetPurposeLimboResolution",Al.ce))}}async function Cm(e,t,n){const r=Ds(e),i=[],a=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((e,s)=>{o.push(r.pu(s,t,n).then(e=>{if((e||n)&&r.isPrimaryClient){const t=e?!e.fromCache:n?.targetChanges.get(s.targetId)?.current;r.sharedClientState.updateQueryState(s.targetId,t?"current":"not-current")}if(e){i.push(e);const t=Sp.Is(s.targetId,e);a.push(t)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(e,t){const n=Ds(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Tl.forEach(t,t=>Tl.forEach(t.Ts,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Tl.forEach(t.Es,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Il(e))throw e;Ts(jp,"Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.vs.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.vs=n.vs.insert(e,i)}}}(r.localStore,a))}async function Im(e,t){const n=Ds(e);if(!n.currentUser.isEqual(t)){Ts(sm,"User change. New user:",t.toKey());const e=await Ip(n.localStore,t);n.currentUser=t,function(e,t){e.mu.forEach(e=>{e.forEach(e=>{e.reject(new Ls(Os.CANCELLED,t))})}),e.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Cm(n,e.Ns)}}function Am(e,t){const n=Ds(e),r=n.Au.get(t);if(r&&r.hu)return sd().add(r.key);{let e=sd();const r=n.Eu.get(t);if(!r)return e;for(const t of r){const r=n.Tu.get(t);e=e.unionWith(r.view.nu)}return e}}function Pm(e){const t=Ds(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ym.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Am.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=bm.bind(null,t),t.Pu.H_=Xf.bind(null,t.eventManager),t.Pu.yu=Zf.bind(null,t.eventManager),t}function Rm(e){const t=Ds(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=vm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=xm.bind(null,t),t}class Nm{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ef(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Cp(this.persistence,new Ep,e.initialUser,this.serializer)}Cu(e){return new vp(kp.Vi,this.serializer)}Du(e){return new $p}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nm.provider={build:()=>new Nm};class Dm extends Nm{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ns(this.persistence.referenceDelegate instanceof zp,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new ap(n,e.asyncQueue,t)}Cu(e){const t=void 0!==this.cacheSizeBytes?Zh.withCacheSize(this.cacheSizeBytes):Zh.DEFAULT;return new vp(e=>zp.Vi(e,t),this.serializer)}}class Om{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>wm(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Im.bind(null,this.syncEngine),await $f(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qf}createDatastore(e){const t=ef(e.databaseInfo.databaseId),n=Xp(e.databaseInfo);return cf(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new hf(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,e=>wm(this.syncEngine,e,0),Bp.v()?new Bp:new Fp)}createSyncEngine(e,t){return function(e,t,n,r,i,a,o){const s=new um(e,t,n,r,i,a);return o&&(s.gu=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){const t=Ds(e);Ts(df,"RemoteStore shutting down."),t.Ia.add(5),await ff(t),t.Aa.shutdown(),t.Va.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Om.provider={build:()=>new Om};class Lm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Cs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}const Mm="FirestoreClient";class $m{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=Ss.UNAUTHENTICATED,this.clientId=qs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{Ts(Mm,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(Ts(Mm,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ms;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Vf(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Fm(e,t){e.asyncQueue.verifyOperationInProgress(),Ts(Mm,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Ip(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Um(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Bm(e);Ts(Mm,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>Mf(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Mf(t.remoteStore,n)),e._onlineComponents=t}async function Bm(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Ts(Mm,"Using user provided OfflineComponentProvider");try{await Fm(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(e){return"FirebaseError"===e.name?e.code===Os.FAILED_PRECONDITION||e.code===Os.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(n))throw n;Is("Error using user provided cache. Falling back to memory cache: "+n),await Fm(e,new Nm)}}else Ts(Mm,"Using default OfflineComponentProvider"),await Fm(e,new Dm(void 0));return e._offlineComponents}async function Vm(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Ts(Mm,"Using user provided OnlineComponentProvider"),await Um(e,e._uninitializedComponentsProvider._online)):(Ts(Mm,"Using default OnlineComponentProvider"),await Um(e,new Om))),e._onlineComponents}function Hm(e){return Vm(e).then(e=>e.syncEngine)}async function Wm(e){const t=await Vm(e),n=t.eventManager;return n.onListen=dm.bind(null,t.syncEngine),n.onUnlisten=mm.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=hm.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=gm.bind(null,t.syncEngine),n}function Gm(e,t){const n=new Ms;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){const r=Rm(e);try{const e=await function(e,t){const n=Ds(e),r=yl.now(),i=t.reduce((e,t)=>e.add(t.key),sd());let a,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let s=Xu(),l=sd();return n.xs.getEntries(e,i).next(e=>{s=e,s.forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,s)).next(i=>{a=i;const o=[];for(const e of t){const t=Rd(e,a.get(e.key).overlayedDocument);null!=t&&o.push(new Od(e.key,t,iu(t.value.mapValue),jd.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(a,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:td(a)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.du[e.currentUser.toKey()];r||(r=new hc(Qs)),r=r.insert(t,n),e.du[e.currentUser.toKey()]=r}(r,e.batchId,n),await Cm(r,e.changes),await Cf(r.remoteStore)}catch(e){const t=Vf(e,"Failed to persist write");n.reject(t)}}(await Hm(e),t,n)),n.promise}function Km(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}const qm="ComponentProvider",Qm=new Map;function Ym(e,t,n,r,i){return new Ac(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Km(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}const Jm="firestore.googleapis.com",Xm=!0;class Zm{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new Ls(Os.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Jm,this.ssl=Xm}else this.host=e.host,this.ssl=e.ssl??Xm;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=Xh;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<np)throw new Ls(Os.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Ls(Os.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Km(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Ls(Os.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Ls(Os.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Ls(Os.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class eg{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ls(Os.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ls(Os.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zm(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Fs;switch(e.type){case"firstParty":return new Hs(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Ls(Os.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Qm.get(e);t&&(Ts(qm,"Removing Datastore"),Qm.delete(e),t.terminate())}(this),Promise.resolve()}}class tg{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new tg(this.firestore,e,this._query)}}class ng{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rg(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ng(this.firestore,e,this._key)}toJSON(){return{type:ng._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(fl(t,ng._jsonSchema))return new ng(e,n||null,new ol(rl.fromString(t.referencePath)))}}ng._jsonSchemaVersion="firestore/documentReference/1.0",ng._jsonSchema={type:pl("string",ng._jsonSchemaVersion),referencePath:pl("string")};class rg extends tg{constructor(e,t,n){super(e,t,Du(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ng(this.firestore,null,new ol(e))}withConverter(e){return new rg(this.firestore,e,this._path)}}function ig(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(e=Zt(e),sl("collection","path",t),e instanceof eg){const n=rl.fromString(t,...r);return cl(n),new rg(e,null,n)}{if(!(e instanceof ng||e instanceof rg))throw new Ls(Os.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(rl.fromString(t,...r));return cl(n),new rg(e.firestore,null,n)}}function ag(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(e=Zt(e),1===arguments.length&&(t=qs.newId()),sl("doc","path",t),e instanceof eg){const n=rl.fromString(t,...r);return ll(n),new ng(e,null,new ol(n))}{if(!(e instanceof ng||e instanceof rg))throw new Ls(Os.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(rl.fromString(t,...r));return ll(n),new ng(e.firestore,e instanceof rg?e.converter:null,new ol(n))}}const og="AsyncQueue";class sg{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Promise.resolve();this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new tf(this,"async_queue_retry"),this._c=()=>{const e=Zp();e&&Ts(og,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;const t=Zp();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Zp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Ms;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(JP){if(!Il(JP))throw JP;Ts(og,"Operation failed with retryable error: "+JP)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,Cs("INTERNAL UNHANDLED ERROR: ",lg(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Bf.createAndSchedule(this,e,t,n,e=>this.hc(e));return this.tc.push(r),r}uc(){this.nc&&Ps(47125,{Pc:lg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do{e=this.ac,await e}while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function lg(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class cg extends eg{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new sg,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sg(e),this._firestoreClient=void 0,await e}}}function ug(e){if(e._terminated)throw new Ls(Os.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||dg(e),e._firestoreClient}function dg(e){const t=e._freezeSettings(),n=Ym(e._databaseId,e._app?.options.appId||"",e._persistenceKey,e._app?.options.apiKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new $m(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){const t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}class hg{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hg(bc.fromBase64String(e))}catch(e){throw new Ls(Os.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new hg(bc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:hg._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fl(e,hg._jsonSchema))return hg.fromBase64String(e.bytes)}}hg._jsonSchemaVersion="firestore/bytes/1.0",hg._jsonSchema={type:pl("string",hg._jsonSchemaVersion),bytes:pl("string")};class pg{constructor(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(let r=0;r<t.length;++r)if(0===t[r].length)throw new Ls(Os.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new al(t)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}class fg{constructor(e){this._methodName=e}}class mg{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ls(Os.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ls(Os.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Qs(this._lat,e._lat)||Qs(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mg._jsonSchemaVersion}}static fromJSON(e){if(fl(e,mg._jsonSchema))return new mg(e.latitude,e.longitude)}}mg._jsonSchemaVersion="firestore/geoPoint/1.0",mg._jsonSchema={type:pl("string",mg._jsonSchemaVersion),latitude:pl("number"),longitude:pl("number")};class gg{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:gg._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fl(e,gg._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new gg(e.vectorValues);throw new Ls(Os.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gg._jsonSchemaVersion="firestore/vectorValue/1.0",gg._jsonSchema={type:pl("string",gg._jsonSchemaVersion),vectorValues:pl("object")};const yg=/^__.*__$/;class wg{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Od(e,this.data,this.fieldMask,t,this.fieldTransforms):new Dd(e,this.data,t,this.fieldTransforms)}}class bg{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Od(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function vg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ps(40011,{dataSource:e})}}class xg{constructor(e,t,n,r,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new xg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){const t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(e),n}fc(e){const t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.Ac(),n}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Lg(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(0===e.length)throw this.yc("Document fields must not be empty");if(vg(this.dataSource)&&yg.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class kg{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ef(e)}I(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new xg({dataSource:e,methodName:t,targetDoc:n,path:al.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zg(e){const t=e._freezeSettings(),n=ef(e._databaseId);return new kg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Sg(e,t,n,r,i){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};const o=e.I(a.merge||a.mergeFields?2:0,t,n,i);Rg("Data must be an object, but it was:",o,r);const s=Ag(r,o);let l,c;if(a.merge)l=new yc(o.fieldMask),c=o.fieldTransforms;else if(a.mergeFields){const e=[];for(const r of a.mergeFields){const i=Ng(t,r,n);if(!o.contains(i))throw new Ls(Os.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Mg(e,i)||e.push(i)}l=new yc(e),c=o.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,c=o.fieldTransforms;return new wg(new ru(s),l,c)}class _g extends fg{_toFieldTransform(e){if(2!==e.dataSource)throw 1===e.dataSource?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _g}}class Eg extends fg{_toFieldTransform(e){return new _d(e.path,new yd)}isEqual(e){return e instanceof Eg}}function jg(e,t,n,r){const i=e.I(1,t,n);Rg("Data must be an object, but it was:",i,r);const a=[],o=ru.empty();uc(r,(e,r)=>{const s=Og(t,e,n);r=Zt(r);const l=i.fc(s);if(r instanceof _g)a.push(s);else{const e=Ig(r,l);null!=e&&(a.push(s),o.set(s,e))}});const s=new yc(a);return new bg(o,s,i.fieldTransforms)}function Tg(e,t,n,r,i,a){const o=e.I(1,t,n),s=[Ng(t,r,n)],l=[i];if(a.length%2!=0)throw new Ls(Os.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<a.length;h+=2)s.push(Ng(t,a[h])),l.push(a[h+1]);const c=[],u=ru.empty();for(let h=s.length-1;h>=0;--h)if(!Mg(c,s[h])){const e=s[h];let t=l[h];t=Zt(t);const n=o.fc(e);if(t instanceof _g)c.push(e);else{const r=Ig(t,n);null!=r&&(c.push(e),u.set(e,r))}}const d=new yc(c);return new bg(u,d,o.fieldTransforms)}function Cg(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Ig(n,e.I(r?4:3,t))}function Ig(e,t){if(Pg(e=Zt(e)))return Rg("Unsupported field value:",t,e),Ag(e,t);if(e instanceof fg)return function(e,t){if(!vg(t.dataSource))throw t.yc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.yc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.yc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Ig(i,t.gc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Zt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return hd(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=yl.fromDate(e);return{timestampValue:yh(t.serializer,n)}}if(e instanceof yl){const n=new yl(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:yh(t.serializer,n)}}if(e instanceof mg)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof hg)return{bytesValue:wh(t.serializer,e._byteString)};if(e instanceof ng){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.yc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:xh(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof gg)return function(e,t){const n=e instanceof gg?e.toArray():e,r={fields:{[Nc]:{stringValue:Lc},[Mc]:{arrayValue:{values:n.map(e=>{if("number"!=typeof e)throw t.yc("VectorValues must only contain numeric values.");return ud(t.serializer,e)})}}}};return{mapValue:r}}(e,t);if(Hh(e))return e._toProto(t.serializer);throw t.yc(`Unsupported field value: ${dl(e)}`)}(e,t)}function Ag(e,t){const n={};return dc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):uc(e,(e,r)=>{const i=Ig(r,t.dc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function Pg(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof yl||e instanceof mg||e instanceof hg||e instanceof ng||e instanceof fg||e instanceof gg||Hh(e))}function Rg(e,t,n){if(!Pg(n)||!ul(n)){const r=dl(n);throw"an object"===r?t.yc(e+" a custom object"):t.yc(e+" "+r)}}function Ng(e,t,n){if((t=Zt(t))instanceof pg)return t._internalPath;if("string"==typeof t)return Og(e,t);throw Lg("Field path arguments must be of type string or ",e,!1,void 0,n)}const Dg=new RegExp("[~\\*/\\[\\]]");function Og(e,t,n){if(t.search(Dg)>=0)throw Lg(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new pg(...t.split("."))._internalPath}catch(_I){throw Lg(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Lg(e,t,n,r,i){const a=r&&!r.isEmpty(),o=void 0!==i;let s=`Function ${t}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=". ";let l="";return(a||o)&&(l+=" (found",a&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Ls(Os.INVALID_ARGUMENT,s+e+l)}function Mg(e,t){return e.some(e=>e.isEqual(t))}class $g{convertValue(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch($c(e)){case 0:return null;case 1:return e.booleanValue;case 2:return kc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zc(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ps(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";const n={};return uc(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){const t=e.fields?.[Mc].arrayValue?.values?.map(e=>kc(e.doubleValue));return new gg(t)}convertGeoPoint(e){return new mg(kc(e.latitude),kc(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Cc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ic(e));default:return null}}convertTimestamp(e){const t=xc(e);return new yl(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=rl.fromString(e);Ns(Vh(n),9688,{name:e});const r=new Rc(n.get(1),n.get(3)),i=new ol(n.popFirst(5));return r.isEqual(t)||Cs(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}class Fg extends $g{constructor(e){super(),this.firestore=e}convertBytes(e){return new hg(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ng(this.firestore,null,t)}}function Ug(){return new Eg("serverTimestamp")}const Bg="@firebase/firestore",Vg="4.14.0";class Hg{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ng(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Wg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Ng("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Wg extends Hg{data(){return super.data()}}function Gg(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Ls(Os.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kg{}class qg extends Kg{}class Qg extends qg{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Qg(e,t,n)}_apply(e){const t=this._parse(e);return ey(e._query,t),new tg(e.firestore,e.converter,Uu(e._query,t))}_parse(e){const t=zg(e.firestore),n=function(e,t,n,r,i,a,o){let s;if(i.isKeyField()){if("array-contains"===a||"array-contains-any"===a)throw new Ls(Os.INVALID_ARGUMENT,`Invalid Query. You can't perform '${a}' queries on documentId().`);if("in"===a||"not-in"===a){Zg(o,a);const t=[];for(const n of o)t.push(Xg(r,e,n));s={arrayValue:{values:t}}}else s=Xg(r,e,o)}else"in"!==a&&"not-in"!==a&&"array-contains-any"!==a||Zg(o,a),s=Cg(n,t,o,"in"===a||"not-in"===a);return hu.create(i,a,s)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class Yg extends Kg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Yg(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:pu.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)ey(n,i),n=Uu(n,i)}(e._query,t),new tg(e.firestore,e.converter,Uu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Jg extends qg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Jg(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Ls(Os.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Ls(Os.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cu(t,n)}(e._query,this._field,this._direction);return new tg(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Ru(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Xg(e,t,n){if("string"==typeof(n=Zt(n))){if(""===n)throw new Ls(Os.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lu(t)&&-1!==n.indexOf("/"))throw new Ls(Os.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(rl.fromString(n));if(!ol.isDocumentKey(r))throw new Ls(Os.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qc(e,new ol(r))}if(n instanceof ng)return qc(e,n._key);throw new Ls(Os.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dl(n)}.`)}function Zg(e,t){if(!Array.isArray(e)||0===e.length)throw new Ls(Os.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ey(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Ls(Os.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Ls(Os.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function ty(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class ny{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ry extends Hg{constructor(e,t,n,r,i,a){super(e,t,n,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._document){if(this._converter){const t=new iy(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._document){const n=this._document.data.field(Ng("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Ls(Os.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ry._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}ry._jsonSchemaVersion="firestore/documentSnapshot/1.0",ry._jsonSchema={type:pl("string",ry._jsonSchemaVersion),bundleSource:pl("string","DocumentSnapshot"),bundleName:pl("string"),bundle:pl("string")};class iy extends ry{data(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return super.data(e)}}class ay{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ny(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new iy(this._firestore,this._userDataWriter,n.key,n,new ny(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(){const e=!!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Ls(Os.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new iy(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ny(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new iy(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ny(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,a=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),a=n.indexOf(t.doc.key)),{type:oy(t.type),doc:r,oldIndex:i,newIndex:a}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Ls(Os.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ay._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function oy(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ps(61501,{type:e})}}ay._jsonSchemaVersion="firestore/querySnapshot/1.0",ay._jsonSchema={type:pl("string",ay._jsonSchemaVersion),bundleSource:pl("string","QuerySnapshot"),bundleName:pl("string"),bundle:pl("string")};function sy(e){e=hl(e,ng);const t=hl(e.firestore,cg);return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=new Ms;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const a=new Lm({next:s=>{a.Nu(),t.enqueueAndForget(()=>Jf(e,o));const l=s.docs.has(n);!l&&s.fromCache?i.reject(new Ls(Os.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&s.fromCache&&r&&"server"===r.source?i.reject(new Ls(Os.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new rm(Du(n.path),a,{includeMetadataChanges:!0,qa:!0});return Yf(e,o)}(await Wm(e),e.asyncQueue,t,n,r)),r.promise}(ug(t),e._key).then(n=>uy(t,e,n))}function ly(e){e=hl(e,tg);const t=hl(e.firestore,cg),n=ug(t),r=new Fg(t);return Gg(e._query),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=new Ms;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const a=new Lm({next:n=>{a.Nu(),t.enqueueAndForget(()=>Jf(e,o)),n.fromCache&&"server"===r.source?i.reject(new Ls(Os.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new rm(n,a,{includeMetadataChanges:!0,qa:!0});return Yf(e,o)}(await Wm(e),e.asyncQueue,t,n,r)),r.promise}(n,e._query).then(n=>new ay(t,r,e,n))}function cy(e,t){return Gm(ug(e),t)}function uy(e,t,n){const r=n.docs.get(t._key),i=new Fg(e);return new ry(e,i,t._key,r,new ny(n.hasPendingWrites,n.fromCache),t.converter)}new WeakMap;!function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];_s=wr,pr(new nn("firestore",(e,n)=>{let{instanceIdentifier:r,options:i}=n;const a=e.getProvider("app").getImmediate(),o=new cg(new Bs(e.getProvider("auth-internal")),new Gs(a,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ls(Os.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rc(e.options.projectId,t)}(a,r),a);return i={useFetchStreams:t,...i},o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),xr(Bg,Vg,e),xr(Bg,Vg,"esm2020")}();const dy="firebasestorage.googleapis.com",hy="storageBucket";class py extends Vt{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;super(gy(e),`Firebase Storage: ${t} (${gy(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,py.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gy(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var fy,my;function gy(e){return"storage/"+e}function yy(){return new py(fy.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function wy(){return new py(fy.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function by(){return new py(fy.CANCELED,"User canceled the upload/download.")}function vy(){return new py(fy.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function xy(e){return new py(fy.INVALID_ARGUMENT,e)}function ky(){return new py(fy.APP_DELETED,"The Firebase app was deleted.")}function zy(e,t){return new py(fy.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Sy(e){throw new py(fy.INTERNAL_ERROR,"Internal error: "+e)}!function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"}(fy||(fy={}));class _y{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=_y.makeFromUrl(e,t)}catch(JP){return new _y(e,"")}if(""===n.path)return n;throw r=e,new py(fy.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function a(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),s=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:a},{regex:new RegExp(`^https?://${t===dy?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:a}];for(let l=0;l<s.length;l++){const t=s[l],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new _y(e,i),t.postModify(n);break}}if(null==n)throw function(e){return new py(fy.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class Ey{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(){}}function jy(e){return"string"===typeof e||e instanceof String}function Ty(e){return Cy()&&e instanceof Blob}function Cy(){return"undefined"!==typeof Blob}function Iy(e,t,n,r){if(r<t)throw xy(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw xy(`Invalid value for '${e}'. Expected ${n} or less.`)}function Ay(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function Py(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}function Ry(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(my||(my={}));class Ny{constructor(e,t,n,r,i,a,o,s,l,c,u){let d=!(arguments.length>11&&void 0!==arguments[11])||arguments[11],h=arguments.length>12&&void 0!==arguments[12]&&arguments[12];this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=s,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=d,this.isUsingEmulator=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new Dy(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===my.NO_ERROR,i=n.getStatus();if(!t||Ry(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===my.ABORT;return void e(!1,new Dy(!1,null,t))}const a=-1!==this.successCodes_.indexOf(i);e(!0,new Dy(a,n))})},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());!function(e){return void 0!==e}(e)?n():n(e)}catch(JP){r(JP)}else if(null!==i){const e=yy();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){r(this.appDelete_?ky():by())}else{r(wy())}};this.canceled_?t(0,new Dy(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,a=null,o=!1,s=0;function l(){return 2===s}let c=!1;function u(){if(!c){c=!0;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.apply(null,n)}}function d(t){i=setTimeout(()=>{i=null,e(p,l())},t)}function h(){a&&clearTimeout(a)}function p(e){if(c)return void h();for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(e)return h(),void u.call(null,e,...n);if(l()||o)return h(),void u.call(null,e,...n);let a;r<64&&(r*=2),1===s?(s=2,a=0):a=1e3*(r+Math.random()),d(a)}let f=!1;function m(e){f||(f=!0,h(),c||(null!==i?(e||(s=2),clearTimeout(i),d(0)):e||(s=1)))}return d(0),a=setTimeout(()=>{o=!0,m(!0)},n),m}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Dy{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Oy(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Ly(){const e=Oy();for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(void 0!==e){const t=new e;for(let e=0;e<n.length;e++)t.append(n[e]);return t.getBlob()}if(Cy())return new Blob(n);throw new py(fy.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function My(e){if("undefined"===typeof atob)throw t="base-64",new py(fy.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);var t;return atob(e)}const $y="raw",Fy="base64",Uy="base64url",By="data_url";class Vy{constructor(e,t){this.data=e,this.contentType=t||null}}function Hy(e,t){switch(e){case $y:return new Vy(Wy(t));case Fy:case Uy:return new Vy(Gy(e,t));case By:return new Vy(function(e){const t=new Ky(e);return t.base64?Gy(Fy,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(JP){throw zy(By,"Malformed data URL.")}return Wy(t)}(t.rest)}(t),new Ky(t).contentType)}throw yy()}function Wy(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){if(n<e.length-1&&56320===(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function Gy(e,t){switch(e){case Fy:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw zy(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case Uy:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw zy(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=My(t)}catch(JP){if(JP.message.includes("polyfill"))throw JP;throw zy(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Ky{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw zy(By,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class qy{constructor(e,t){let n=0,r="";Ty(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ty(this.data_)){const n=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,e,t);return null===n?null:new qy(n)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new qy(n,!0)}}static getBlob(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(Cy()){const e=t.map(e=>e instanceof qy?e.data_:e);return new qy(Ly.apply(null,e))}{const e=t.map(e=>jy(e)?Hy($y,e).data:e.data_);let n=0;e.forEach(e=>{n+=e.byteLength});const r=new Uint8Array(n);let i=0;return e.forEach(e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]}),new qy(r,!0)}}uploadData(){return this.data_}}function Qy(e){let t;try{t=JSON.parse(e)}catch(JP){return null}return function(e){return"object"===typeof e&&!Array.isArray(e)}(t)?t:null}function Yy(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function Jy(e,t){return t}class Xy{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Jy}}let Zy=null;function ew(){if(Zy)return Zy;const e=[];e.push(new Xy("bucket")),e.push(new Xy("generation")),e.push(new Xy("metageneration")),e.push(new Xy("name","fullPath",!0));const t=new Xy("name");t.xform=function(e,t){return function(e){return!jy(e)||e.length<2?e:Yy(e)}(t)},e.push(t);const n=new Xy("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new Xy("timeCreated")),e.push(new Xy("updated")),e.push(new Xy("md5Hash",null,!0)),e.push(new Xy("cacheControl",null,!0)),e.push(new Xy("contentDisposition",null,!0)),e.push(new Xy("contentEncoding",null,!0)),e.push(new Xy("contentLanguage",null,!0)),e.push(new Xy("contentType",null,!0)),e.push(new Xy("metadata","customMetadata",!0)),Zy=e,Zy}function tw(e,t,n){const r={type:"file"},i=n.length;for(let a=0;a<i;a++){const e=n[a];r[e.local]=e.xform(r,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,i=new _y(n,r);return t._makeStorageReference(i)}})}(r,e),r}function nw(e,t,n){const r=Qy(t);if(null===r)return null;return tw(e,r,n)}function rw(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}class iw{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function aw(e){if(!e)throw yy()}function ow(e,t){return function(n,r){const i=nw(e,r,t);return aw(null!==i),i}}function sw(e,t){return function(n,r){const i=nw(e,r,t);return aw(null!==i),function(e,t,n,r){const i=Qy(t);if(null===i)return null;if(!jy(i.downloadTokens))return null;const a=i.downloadTokens;if(0===a.length)return null;const o=encodeURIComponent,s=a.split(",").map(t=>{const i=e.bucket,a=e.fullPath;return Ay("/b/"+o(i)+"/o/"+o(a),n,r)+Py({alt:"media",token:t})});return s[0]}(i,r,e.host,e._protocol)}}function lw(e){return function(t,n){let r;var i,a;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new py(fy.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new py(fy.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(a=e.bucket,r=new py(fy.QUOTA_EXCEEDED,"Quota for bucket '"+a+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,r=new py(fy.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function cw(e){const t=lw(e);return function(n,r){let i=t(n,r);var a;return 404===n.getStatus()&&(a=e.path,i=new py(fy.OBJECT_NOT_FOUND,"Object '"+a+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function uw(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function dw(e,t,n,r,i){const a=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const s=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+s;const l=uw(t,r,i),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+rw(l,n)+"\r\n--"+s+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",u="\r\n--"+s+"--",d=qy.getBlob(c,r,u);if(null===d)throw vy();const h={name:l.fullPath},p=Ay(a,e.host,e._protocol),f=e.maxUploadRetryTime,m=new iw(p,"POST",ow(e,n),f);return m.urlParams=h,m.headers=o,m.body=d.uploadData(),m.errorHandler=lw(t),m}class hw{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=my.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=my.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=my.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r,i){if(this.sent_)throw Sy("cannot .send() more than once");if(en(e)&&n&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==i)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Sy("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Sy("cannot .getStatus() before sending");try{return this.xhr_.status}catch(JP){return-1}}getResponse(){if(!this.sent_)throw Sy("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Sy("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class pw extends hw{initXhr(){this.xhr_.responseType="text"}}function fw(){return new pw}class mw{constructor(e,t){this._service=e,this._location=t instanceof _y?t:_y.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new mw(e,t)}get root(){const e=new _y(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Yy(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new _y(this._location.bucket,e);return new mw(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new py(fy.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function gw(e,t,n){e._throwIfRoot("uploadBytes");const r=dw(e.storage,e._location,ew(),new qy(t,!0),n);return e.storage.makeRequestWithTokens(r,fw).then(t=>({metadata:t,ref:e}))}function yw(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=Ay(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,a=new iw(r,"GET",sw(e,n),i);return a.errorHandler=cw(t),a}(e.storage,e._location,ew());return e.storage.makeRequestWithTokens(t,fw).then(e=>{if(null===e)throw new py(fy.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}function ww(e,t){const n=function(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new _y(e._location.bucket,n);return new mw(e.storage,r)}function bw(e,t){if(e instanceof kw){const n=e;if(null==n._bucket)throw new py(fy.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+hy+"' property when initializing the app?");const r=new mw(n,n._bucket);return null!=t?bw(r,t):r}return void 0!==t?ww(e,t):e}function vw(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof kw)return new mw(e,t);throw xy("To use ref(service, url), the first argument must be a Storage instance.")}return bw(e,t)}function xw(e,t){const n=t?.[hy];return null==n?null:_y.makeFromBucketSpec(n,e)}class kw{constructor(e,t,n,r,i){let a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=dy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?_y.makeFromBucketSpec(r,this._host):xw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=_y.makeFromBucketSpec(this._url,e):this._bucket=xw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Iy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Iy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){if(mr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new mw(this,e)}_makeRequest(e,t,n,r){let i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(this._deleted)return new Ey(ky());{const a=function(e,t,n,r,i,a){let o=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],s=arguments.length>7&&void 0!==arguments[7]&&arguments[7];const l=Py(e.urlParams),c=e.url+l,u=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(u,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(u,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}(u,a),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(u,r),new Ny(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o,s)}(e,this._appId,n,r,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const zw="@firebase/storage",Sw="0.14.2",_w="storage";function Ew(e,t){let{instanceIdentifier:n}=t;const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return new kw(r,i,a,n,wr)}pr(new nn(_w,Ew,"PUBLIC").setMultipleInstances(!0)),xr(zw,Sw,""),xr(zw,Sw,"esm2020");const jw={apiKey:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",authDomain:"klaraqueen.firebaseapp.com",projectId:"klaraqueen",storageBucket:"klaraqueen.firebasestorage.app",messagingSenderId:"852297752171",appId:"1:852297752171:web:081021a1f6b86dfe5cdb2e"};function Tw(){return Boolean(jw.apiKey&&jw.authDomain&&jw.projectId&&jw.appId)}const Cw=Tw()?Array.from(cr.values()).length>0?vr():br(jw):null,Iw=Cw?function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vr();const t=fr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=fr(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Gt(n.getOptions(),t??{}))return e;Lr(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:rs,persistence:[ho,Wa,Ya]}),r=Ot("authTokenSyncURL");if(r&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>ss)return;const r=t?.token;ls!==r&&(ls=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Zt(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){Zt(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var i;const a=Rt("auth");return a&&aa(n,`http://${a}`),n}(Cw):null,Aw=Cw?function(e,t){const n="object"==typeof e?e:vr(),r="string"==typeof e?e:t||Pc,i=fr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=Nt("firestore");e&&function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e=hl(e,eg);const i=en(t),a=e._getSettings(),o={...a,emulatorOptions:e._getEmulatorOptions()},s=`${t}:${n}`;i&&tn(`https://${s}`),a.host!==Jm&&a.host!==s&&Is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...a,host:s,ssl:i,emulatorOptions:r};if(!Gt(l,o)&&(e._setSettings(l),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Ss.MOCK_USER;else{t=Mt(r.mockUserToken,e._app?.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new Ls(Os.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ss(i)}e._authCredentials=new Us(new $s(t,n))}}(i,...e)}return i}(Cw):null,Pw=Cw?function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vr(),t=arguments.length>1?arguments[1]:void 0;e=Zt(e);const n=fr(e,_w).getImmediate({identifier:t}),r=Nt("storage");return r&&function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.host=`${t}:${n}`;const i=en(t);i&&tn(`https://${e.host}/b`),e._isUsingEmulator=!0,e._protocol=i?"https":"http";const{mockUserToken:a}=r;a&&(e._overrideAuthToken="string"===typeof a?a:Mt(a,e.app.options.projectId))}(e,t,n,r)}(n,...r),n}(Cw):null,Rw=new Sa;var Nw=n(960);const Dw=(0,r.createContext)({user:null,loading:!0,signOutUser:async()=>{}});function Ow(e){let{children:t}=e;const[n,i]=(0,r.useState)(null),[a,o]=(0,r.useState)(!0);(0,r.useEffect)(()=>Iw?function(e,t,n,r){return Zt(e).onAuthStateChanged(t,n,r)}(Iw,e=>{i(e),o(!1)}):(i(null),void o(!1)),[]);return(0,Nw.jsx)(Dw.Provider,{value:{user:n,loading:a,signOutUser:async()=>{Iw&&await function(e){return Zt(e).signOut()}(Iw)}},children:t})}function Lw(){return(0,r.useContext)(Dw)}var Mw=function(){return Mw=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Mw.apply(this,arguments)};Object.create;function $w(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Fw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Uw="-ms-",Bw="-moz-",Vw="-webkit-",Hw="comm",Ww="rule",Gw="decl",Kw="@keyframes",qw=Math.abs,Qw=String.fromCharCode,Yw=Object.assign;function Jw(e){return e.trim()}function Xw(e,t){return(e=t.exec(e))?e[0]:e}function Zw(e,t,n){return e.replace(t,n)}function eb(e,t,n){return e.indexOf(t,n)}function tb(e,t){return 0|e.charCodeAt(t)}function nb(e,t,n){return e.slice(t,n)}function rb(e){return e.length}function ib(e){return e.length}function ab(e,t){return t.push(e),e}function ob(e,t){return e.filter(function(e){return!Xw(e,t)})}var sb=1,lb=1,cb=0,ub=0,db=0,hb="";function pb(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:sb,column:lb,length:o,return:"",siblings:s}}function fb(e,t){return Yw(pb("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function mb(e){for(;e.root;)e=fb(e.root,{children:[e]});ab(e,e.siblings)}function gb(){return db=ub>0?tb(hb,--ub):0,lb--,10===db&&(lb=1,sb--),db}function yb(){return db=ub<cb?tb(hb,ub++):0,lb++,10===db&&(lb=1,sb++),db}function wb(){return tb(hb,ub)}function bb(){return ub}function vb(e,t){return nb(hb,e,t)}function xb(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kb(e){return sb=lb=1,cb=rb(hb=e),ub=0,[]}function zb(e){return hb="",e}function Sb(e){return Jw(vb(ub-1,jb(91===e?e+2:40===e?e+1:e)))}function _b(e){for(;(db=wb())&&db<33;)yb();return xb(e)>2||xb(db)>3?"":" "}function Eb(e,t){for(;--t&&yb()&&!(db<48||db>102||db>57&&db<65||db>70&&db<97););return vb(e,bb()+(t<6&&32==wb()&&32==yb()))}function jb(e){for(;yb();)switch(db){case e:return ub;case 34:case 39:34!==e&&39!==e&&jb(db);break;case 40:41===e&&jb(e);break;case 92:yb()}return ub}function Tb(e,t){for(;yb()&&e+db!==57&&(e+db!==84||47!==wb()););return"/*"+vb(t,ub-1)+"*"+Qw(47===e?e:yb())}function Cb(e){for(;!xb(wb());)yb();return vb(e,ub)}function Ib(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ab(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case Gw:return e.return=e.return||e.value;case Hw:return"";case Kw:return e.return=e.value+"{"+Ib(e.children,r)+"}";case Ww:if(!rb(e.value=e.props.join(",")))return""}return rb(n=Ib(e.children,r))?e.return=e.value+"{"+n+"}":""}function Pb(e,t,n){switch(function(e,t){return 45^tb(e,0)?(((t<<2^tb(e,0))<<2^tb(e,1))<<2^tb(e,2))<<2^tb(e,3):0}(e,t)){case 5103:return Vw+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Vw+e+e;case 4855:return Vw+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Bw+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Vw+e+Bw+e+Uw+e+e;case 5936:switch(tb(e,t+11)){case 114:return Vw+e+Uw+Zw(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Vw+e+Uw+Zw(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Vw+e+Uw+Zw(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Vw+e+Uw+e+e;case 6165:return Vw+e+Uw+"flex-"+e+e;case 5187:return Vw+e+Zw(e,/(\w+).+(:[^]+)/,Vw+"box-$1$2"+Uw+"flex-$1$2")+e;case 5443:return Vw+e+Uw+"flex-item-"+Zw(e,/flex-|-self/g,"")+(Xw(e,/flex-|baseline/)?"":Uw+"grid-row-"+Zw(e,/flex-|-self/g,""))+e;case 4675:return Vw+e+Uw+"flex-line-pack"+Zw(e,/align-content|flex-|-self/g,"")+e;case 5548:return Vw+e+Uw+Zw(e,"shrink","negative")+e;case 5292:return Vw+e+Uw+Zw(e,"basis","preferred-size")+e;case 6060:return Vw+"box-"+Zw(e,"-grow","")+Vw+e+Uw+Zw(e,"grow","positive")+e;case 4554:return Vw+Zw(e,/([^-])(transform)/g,"$1"+Vw+"$2")+e;case 6187:return Zw(Zw(Zw(e,/(zoom-|grab)/,Vw+"$1"),/(image-set)/,Vw+"$1"),e,"")+e;case 5495:case 3959:return Zw(e,/(image-set\([^]*)/,Vw+"$1$`$1");case 4968:return Zw(Zw(e,/(.+:)(flex-)?(.*)/,Vw+"box-pack:$3"+Uw+"flex-pack:$3"),/space-between/,"justify")+Vw+e+e;case 4200:if(!Xw(e,/flex-|baseline/))return Uw+"grid-column-align"+nb(e,t)+e;break;case 2592:case 3360:return Uw+Zw(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Xw(e.props,/grid-\w+-end/)})?~eb(e+(n=n[t].value),"span",0)?e:Uw+Zw(e,"-start","")+e+Uw+"grid-row-span:"+(~eb(n,"span",0)?Xw(n,/\d+/):+Xw(n,/\d+/)-+Xw(e,/\d+/))+";":Uw+Zw(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Xw(e.props,/grid-\w+-start/)})?e:Uw+Zw(Zw(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Zw(e,/(.+)-inline(.+)/,Vw+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rb(e)-1-t>6)switch(tb(e,t+1)){case 109:if(45!==tb(e,t+4))break;case 102:return Zw(e,/(.+:)(.+)-([^]+)/,"$1"+Vw+"$2-$3$1"+Bw+(108==tb(e,t+3)?"$3":"$2-$3"))+e;case 115:return~eb(e,"stretch",0)?Pb(Zw(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Zw(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return Uw+n+":"+r+s+(i?Uw+n+"-span:"+(a?o:+o-+r)+s:"")+e});case 4949:if(121===tb(e,t+6))return Zw(e,":",":"+Vw)+e;break;case 6444:switch(tb(e,45===tb(e,14)?18:11)){case 120:return Zw(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Vw+(45===tb(e,14)?"inline-":"")+"box$3$1"+Vw+"$2$3$1"+Uw+"$2box$3")+e;case 100:return Zw(e,":",":"+Uw)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Zw(e,"scroll-","scroll-snap-")+e}return e}function Rb(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Gw:return void(e.return=Pb(e.value,e.length,n));case Kw:return Ib([fb(e,{value:Zw(e.value,"@","@"+Vw)})],r);case Ww:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Xw(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mb(fb(e,{props:[Zw(t,/:(read-\w+)/,":-moz-$1")]})),mb(fb(e,{props:[t]})),Yw(e,{props:ob(n,r)});break;case"::placeholder":mb(fb(e,{props:[Zw(t,/:(plac\w+)/,":"+Vw+"input-$1")]})),mb(fb(e,{props:[Zw(t,/:(plac\w+)/,":-moz-$1")]})),mb(fb(e,{props:[Zw(t,/:(plac\w+)/,Uw+"input-$1")]})),mb(fb(e,{props:[t]})),Yw(e,{props:ob(n,r)})}return""})}}function Nb(e){return zb(Db("",null,null,null,[""],e=kb(e),0,[0],e))}function Db(e,t,n,r,i,a,o,s,l){for(var c=0,u=0,d=o,h=0,p=0,f=0,m=1,g=1,y=1,w=0,b="",v=i,x=a,k=r,z=b;g;)switch(f=w,w=yb()){case 40:if(108!=f&&58==tb(z,d-1)){-1!=eb(z+=Zw(Sb(w),"&","&\f"),"&\f",qw(c?s[c-1]:0))&&(y=-1);break}case 34:case 39:case 91:z+=Sb(w);break;case 9:case 10:case 13:case 32:z+=_b(f);break;case 92:z+=Eb(bb()-1,7);continue;case 47:switch(wb()){case 42:case 47:ab(Lb(Tb(yb(),bb()),t,n,l),l),5!=xb(f||1)&&5!=xb(wb()||1)||!rb(z)||" "===nb(z,-1,void 0)||(z+=" ");break;default:z+="/"}break;case 123*m:s[c++]=rb(z)*y;case 125*m:case 59:case 0:switch(w){case 0:case 125:g=0;case 59+u:-1==y&&(z=Zw(z,/\f/g,"")),p>0&&(rb(z)-d||0===m&&47===f)&&ab(p>32?Mb(z+";",r,n,d-1,l):Mb(Zw(z," ","")+";",r,n,d-2,l),l);break;case 59:z+=";";default:if(ab(k=Ob(z,t,n,c,u,i,s,b,v=[],x=[],d,a),a),123===w)if(0===u)Db(z,t,k,k,v,a,d,s,x);else{switch(h){case 99:if(110===tb(z,3))break;case 108:if(97===tb(z,2))break;default:u=0;case 100:case 109:case 115:}u?Db(e,k,k,r&&ab(Ob(e,k,k,0,0,i,s,b,i,v=[],d,x),x),i,x,d,s,r?v:x):Db(z,k,k,k,[""],x,0,s,x)}}c=u=p=0,m=y=1,b=z="",d=o;break;case 58:d=1+rb(z),p=f;default:if(m<1)if(123==w)--m;else if(125==w&&0==m++&&125==gb())continue;switch(z+=Qw(w),w*m){case 38:y=u>0?1:(z+="\f",-1);break;case 44:s[c++]=(rb(z)-1)*y,y=1;break;case 64:45===wb()&&(z+=Sb(yb())),h=wb(),u=d=rb(b=z+=Cb(bb())),w++;break;case 45:45===f&&2==rb(z)&&(m=0)}}return a}function Ob(e,t,n,r,i,a,o,s,l,c,u,d){for(var h=i-1,p=0===i?a:[""],f=ib(p),m=0,g=0,y=0;m<r;++m)for(var w=0,b=nb(e,h+1,h=qw(g=o[m])),v=e;w<f;++w)(v=Jw(g>0?p[w]+" "+b:Zw(b,/&\f/g,p[w])))&&(l[y++]=v);return pb(e,t,n,0===i?Ww:s,l,c,u,d)}function Lb(e,t,n,r){return pb(e,t,n,Hw,Qw(db),nb(e,2,-2),0,r)}function Mb(e,t,n,r,i){return pb(e,t,n,Gw,nb(e,0,r),nb(e,r+1,-1),r,i)}var $b="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.SC_ATTR)||"data-styled",Fb="active",Ub="data-styled-version",Bb="6.3.12",Vb="/*!sc*/\n",Hb="undefined"!=typeof window&&"undefined"!=typeof document,Wb=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.SC_DISABLE_SPEEDY)),Gb={};function Kb(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var qb=new Map,Qb=new Map,Yb=1,Jb=function(e){if(qb.has(e))return qb.get(e);for(;Qb.has(Yb);)Yb++;var t=Yb++;return qb.set(e,t),Qb.set(t,e),t},Xb=function(e,t){Yb=t+1,qb.set(e,t),Qb.set(t,e)},Zb=(new Set,Object.freeze([])),ev=Object.freeze({});function tv(e,t,n){return void 0===n&&(n=ev),e.theme!==n.theme&&e.theme||t||n.theme}var nv=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),rv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,iv=/(^-|-$)/g;function av(e){return e.replace(rv,"-").replace(iv,"")}var ov=/(a)(d)/gi,sv=function(e){return String.fromCharCode(e+(e>25?39:97))};function lv(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=sv(t%52)+n;return(sv(t%52)+n).replace(ov,"$1-$2")}var cv,uv=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},dv=function(e){return uv(5381,e)};function hv(e){return lv(dv(e)>>>0)}function pv(e){return e.displayName||e.name||"Component"}function fv(e){return"string"==typeof e&&!0}var mv="function"==typeof Symbol&&Symbol.for,gv=mv?Symbol.for("react.memo"):60115,yv=mv?Symbol.for("react.forward_ref"):60112,wv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xv=((cv={})[yv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cv[gv]=vv,cv);function kv(e){return("type"in(t=e)&&t.type.$$typeof)===gv?vv:"$$typeof"in e?xv[e.$$typeof]:wv;var t}var zv=Object.defineProperty,Sv=Object.getOwnPropertyNames,_v=Object.getOwnPropertySymbols,Ev=Object.getOwnPropertyDescriptor,jv=Object.getPrototypeOf,Tv=Object.prototype;function Cv(e,t,n){if("string"!=typeof t){if(Tv){var r=jv(t);r&&r!==Tv&&Cv(e,r,n)}var i=Sv(t);_v&&(i=i.concat(_v(t)));for(var a=kv(e),o=kv(t),s=0;s<i.length;++s){var l=i[s];if(!(l in bv||n&&n[l]||o&&l in o||a&&l in a)){var c=Ev(t,l);try{zv(e,l,c)}catch(e){}}}}return e}function Iv(e){return"function"==typeof e}function Av(e){return"object"==typeof e&&"styledComponentId"in e}function Pv(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Rv(e,t){return e.join(t||"")}function Nv(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Dv(e,t,n){if(void 0===n&&(n=!1),!n&&!Nv(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Dv(e[r],t[r]);else if(Nv(t))for(var r in t)e[r]=Dv(e[r],t[r]);return e}function Ov(e,t){Object.defineProperty(e,"toString",{value:t})}var Lv=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Kb(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=0,l=(a=0,t.length);a<l;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=this.tag.getRule(a)+Vb;return t},e}(),Mv="style[".concat($b,"][").concat(Ub,'="').concat(Bb,'"]'),$v=new RegExp("^".concat($b,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Fv=function(e){return"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},Uv=function(e){if(!e)return document;if(Fv(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Fv(t))return t}return document},Bv=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Vv=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Vb),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match($v);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(Xb(u,c),Bv(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},Hv=function(e){for(var t=Uv(e.options.target).querySelectorAll(Mv),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute($b)!==Fb&&(Vv(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Wv(){return n.nc}var Gv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat($b,"]")));return t[t.length-1]}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute($b,Fb),r.setAttribute(Ub,Bb);var o=Wv();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},Kv=function(){function e(e){this.element=Gv(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets,r=0,i=n.length;r<i;r++){var a=n[r];if(a.ownerNode===e)return a}throw Kb(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),qv=function(){function e(e){this.element=Gv(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Qv=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Yv=Hb,Jv={isServer:!Hb,useCSSOMInjection:!Wb},Xv=function(){function e(e,t,n){void 0===e&&(e=ev),void 0===t&&(t={});var r=this;this.options=Mw(Mw({},Jv),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Hb&&Yv&&(Yv=!1,Hv(this)),Ov(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return Qb.get(e)}(n);if(void 0===i)return"continue";var a=e.names.get(i);if(void 0===a||!a.size)return"continue";var o=t.getGroup(n);if(0===o.length)return"continue";var s=$b+".g"+n+'[id="'+i+'"]',l="";a.forEach(function(e){e.length>0&&(l+=e+",")}),r+=o+s+'{content:"'+l+'"}'+Vb},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return Jb(e)},e.prototype.rehydrate=function(){!this.server&&Hb&&Hv(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var r=new e(Mw(Mw({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Hb&&t.target!==this.options.target&&Uv(this.options.target)!==Uv(t.target)&&Hv(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Qv(n):t?new Kv(n):new qv(n)}(this.options),new Lv(e)));var e},e.prototype.hasNameForId=function(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r},e.prototype.registerName=function(e,t){Jb(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Jb(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Jb(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}();function Zv(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in Fw||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var ex=function(e){return e>="A"&&e<="Z"};function tx(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;ex(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var nx=Symbol.for("sc-keyframes");var rx=function(e){return null==e||!1===e||""===e},ix=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!rx(r)&&(Array.isArray(r)&&r.isCss||Iv(r)?t.push("".concat(tx(n),":"),r,";"):Nv(r)?t.push.apply(t,$w($w(["".concat(n," {")],ix(r),!1),["}"],!1)):t.push("".concat(tx(n),": ").concat(Zv(n,r),";")))}return t};function ax(e,t,n,r,i){if(void 0===i&&(i=[]),"string"==typeof e)return e&&i.push(e),i;if(rx(e))return i;if(Av(e))return i.push(".".concat(e.styledComponentId)),i;var a;if(Iv(e))return!Iv(a=e)||a.prototype&&a.prototype.isReactComponent||!t?(i.push(e),i):ax(e(t),t,n,r,i);if(function(e){return"object"==typeof e&&null!==e&&nx in e}(e))return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Nv(e)){for(var o=ix(e),s=0;s<o.length;s++)i.push(o[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)ax(e[s],t,n,r,i);return i}function ox(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Iv(n)&&!Av(n))return!1}return!0}var sx=dv(Bb),lx=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ox(e),this.componentId=t,this.baseHash=uv(sx,t),this.baseStyle=n,Xv.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Pv(r,this.staticRulesId);else{var i=Rv(ax(this.rules,e,t,n)),a=lv(uv(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Pv(r,a),this.staticRulesId=a}else{for(var s=uv(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=Rv(ax(u,e,t,n));s=uv(uv(s,String(c)),d),l+=d}}if(l){var h=lv(s>>>0);if(!t.hasNameForId(this.componentId,h)){var p=n(l,".".concat(h),void 0,this.componentId);t.insertRules(this.componentId,h,p)}r=Pv(r,h)}}return{className:r,css:"undefined"==typeof window?t.getTag().getGroup(Jb(this.componentId)):""}},e}(),cx=/&/g,ux=47,dx=42;function hx(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,r=0,i=!1,a=0;a<t;a++){var o=e.charCodeAt(a);if(0!==r||i||o!==ux||e.charCodeAt(a+1)!==dx)if(i)o===dx&&e.charCodeAt(a+1)===ux&&(i=!1,a++);else if(34!==o&&39!==o||0!==a&&92===e.charCodeAt(a-1)){if(0===r)if(123===o)n++;else if(125===o&&--n<0)return!0}else 0===r?r=o:r===o&&(r=0);else i=!0,a++}return 0!==n||0!==r}function px(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=px(e.children,t)),e})}function fx(e){var t,n,r,i=void 0===e?ev:e,a=i.options,o=void 0===a?ev:a,s=i.plugins,l=void 0===s?Zb:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push(function(e){e.type===Ww&&e.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),e.props[0]=e.props[0].replace(cx,n).replace(r,c))}),o.prefix&&u.push(Rb),u.push(Ab);var d=[],h=function(e){var t=ib(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}(u.concat(function(e){return function(t){t.root||(t=t.return)&&e(t)}}(function(e){return d.push(e)}))),p=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=i,r=void 0;var l=function(e){if(!hx(e))return e;for(var t=e.length,n="",r=0,i=0,a=0,o=!1,s=0;s<t;s++){var l=e.charCodeAt(s);if(0!==a||o||l!==ux||e.charCodeAt(s+1)!==dx)if(o)l===dx&&e.charCodeAt(s+1)===ux&&(o=!1,s++);else if(34!==l&&39!==l||0!==s&&92===e.charCodeAt(s-1)){if(0===a)if(123===l)i++;else if(125===l){if(--i<0){for(var c=s+1;c<t;){var u=e.charCodeAt(c);if(59===u||10===u)break;c++}c<t&&59===e.charCodeAt(c)&&c++,i=0,s=c-1,r=c;continue}0===i&&(n+=e.substring(r,s+1),r=s+1)}else 59===l&&0===i&&(n+=e.substring(r,s+1),r=s+1)}else 0===a?a=l:a===l&&(a=0);else o=!0,s++}if(r<t){var d=e.substring(r);hx(d)||(n+=d)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],r=0,i=0,a=0,o=0;i<t;){var s=e.charCodeAt(i);if(34!==s&&39!==s||0!==i&&92===e.charCodeAt(i-1))if(0===a)if(s===ux&&i+1<t&&e.charCodeAt(i+1)===dx){for(i+=2;i+1<t&&(e.charCodeAt(i)!==dx||e.charCodeAt(i+1)!==ux);)i++;i+=2}else if(40===s&&i>=3&&108==(32|e.charCodeAt(i-1))&&114==(32|e.charCodeAt(i-2))&&117==(32|e.charCodeAt(i-3)))o=1,i++;else if(o>0)41===s?o--:40===s&&o++,i++;else if(s===dx&&i+1<t&&e.charCodeAt(i+1)===ux)i>r&&n.push(e.substring(r,i)),r=i+=2;else if(s===ux&&i+1<t&&e.charCodeAt(i+1)===ux){for(i>r&&n.push(e.substring(r,i));i<t&&10!==e.charCodeAt(i);)i++;r=i}else i++;else i++;else 0===a?a=s:a===s&&(a=0),i++}return 0===r?e:(r<t&&n.push(e.substring(r)),n.join(""))}(e)),c=Nb(a||i?"".concat(a," ").concat(i," { ").concat(l," }"):l);return o.namespace&&(c=px(c,o.namespace)),d=[],Ib(c,h),d};return p.hash=l.length?l.reduce(function(e,t){return t.name||Kb(15),uv(e,t.name)},5381).toString():"",p}var mx=new Xv,gx=fx(),yx=r.createContext({shouldForwardProp:void 0,styleSheet:mx,stylis:gx}),wx=(yx.Consumer,r.createContext(void 0));function bx(){return r.useContext(yx)}function vx(e){if(!r.useMemo)return e.children;var t=bx().styleSheet,n=r.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),i=r.useMemo(function(){return fx({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),a=r.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:i}},[e.shouldForwardProp,n,i]);return r.createElement(yx.Provider,{value:a},r.createElement(wx.Provider,{value:i},e.children))}var xx=r.createContext(void 0);xx.Consumer;var kx={};new Set;function zx(e,t,n){var i=Av(e),a=e,o=!fv(e),s=t.attrs,l=void 0===s?Zb:s,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":av(e);kx[n]=(kx[n]||0)+1;var r="".concat(n,"-").concat(hv(Bb+n+kx[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,d=t.displayName,h=void 0===d?function(e){return fv(e)?"styled.".concat(e):"Styled(".concat(pv(e),")")}(e):d,p=t.displayName&&t.componentId?"".concat(av(t.displayName),"-").concat(t.componentId):t.componentId||u,f=i&&a.attrs?a.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(i&&a.shouldForwardProp){var g=a.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;m=function(e,t){return g(e,t)&&y(e,t)}}else m=g}var w=new lx(n,p,i?a.componentStyle:void 0);function b(e,t){return function(e,t,n){var i=e.attrs,a=e.componentStyle,o=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,u=r.useContext(xx),d=bx(),h=e.shouldForwardProp||d.shouldForwardProp,p=tv(t,u,o)||ev,f=function(e,t,n){for(var r,i=Mw(Mw({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Iv(r=e[a])?r(i):r;for(var s in o)"className"===s?i.className=Pv(i.className,o[s]):"style"===s?i.style=Mw(Mw({},i.style),o[s]):s in t&&void 0===t[s]||(i[s]=o[s])}return"className"in t&&"string"==typeof t.className&&(i.className=Pv(i.className,t.className)),i}(i,t,p),m=f.as||c,g={};for(var y in f)void 0===f[y]||"$"===y[0]||"as"===y||"theme"===y&&f.theme===p||("forwardedAs"===y?g.as=f.forwardedAs:h&&!h(y,m)||(g[y]=f[y]));var w=function(e,t){var n=bx();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,f),b=w.className,v=Pv(s,l);return b&&(v+=" "+b),f.className&&(v+=" "+f.className),g[fv(m)&&!nv.has(m)?"class":"className"]=v,n&&(g.ref=n),(0,r.createElement)(m,g)}(v,e,t)}b.displayName=h;var v=r.forwardRef(b);return v.attrs=f,v.componentStyle=w,v.displayName=h,v.shouldForwardProp=m,v.foldedComponentIds=i?Pv(a.foldedComponentIds,a.styledComponentId):"",v.styledComponentId=p,v.target=i?a.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Dv(e,i[r],!0);return e}({},a.defaultProps,e):e}}),Ov(v,function(){return".".concat(v.styledComponentId)}),o&&Cv(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Sx(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var _x=function(e){return Object.assign(e,{isCss:!0})};function Ex(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Iv(e)||Nv(e))return _x(ax(Sx(Zb,$w([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?ax(r):_x(ax(Sx(r,t)))}function jx(e,t,n){if(void 0===n&&(n=ev),!t)throw Kb(1,t);var r=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,Ex.apply(void 0,$w([r],i,!1)))};return r.attrs=function(r){return jx(e,t,Mw(Mw({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return jx(e,t,Mw(Mw({},n),r))},r}var Tx=function(e){return jx(zx,e)},Cx=Tx;nv.forEach(function(e){Cx[e]=Tx(e)});var Ix,Ax=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ox(e),Xv.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Rv(ax(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Xv.registerId(this.componentId+e);var i=this.componentId+e;this.isStatic?n.hasNameForId(i,i)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))},e}();var Px=function(){function e(e,t){var n=this;this[Ix]=!0,this.inject=function(e,t){void 0===t&&(t=gx);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ov(this,function(){throw Kb(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=gx),this.name+e.hash},e}();Ix=nx;(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Wv(),r=Rv([n&&'nonce="'.concat(n,'"'),"".concat($b,'="true"'),"".concat(Ub,'="').concat(Bb,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Kb(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Kb(2);var n=e.instance.toString();if(!n)return[];var i=((t={})[$b]="",t[Ub]=Bb,t.dangerouslySetInnerHTML={__html:n},t),a=Wv();return a&&(i.nonce=a),[r.createElement("style",Mw({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Xv({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Kb(2);return r.createElement(vx,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Kb(3)}})(),"__sc-".concat($b,"__");const Rx={smallPhone:360,phone:430,tablet:820,desktopHd:1920,tv4k:3840},Nx={bordoAccent:"#9e1e36",bordoAccentDark:"#6a1426",bordoCore:"#4a1020",deepBlack:"#2e0810",outerSpace:"#2e0810",white:"#ffffff",goldMain:"#d4af37",goldHover:"#f1d592",goldSoft18:"rgba(212, 175, 55, 0.18)",goldSoft10:"rgba(180, 140, 30, 0.1)",goldSoft08:"rgba(212, 175, 55, 0.08)",goldSoft025:"rgba(212, 175, 55, 0.025)",testimonialBg:"rgba(255, 255, 255, 0.08)",testimonialBgHover:"rgba(255, 255, 255, 0.12)",testimonialBorder:"rgba(212, 175, 55, 0.24)",testimonialBorderHover:"rgba(212, 175, 55, 0.42)",testimonialText:"#ffffff",testimonialSubtext:"#b0b0b0",testimonialAccent:"#667eea",testimonialAccentLight:"rgba(102, 126, 234, 0.1)",testimonialAccentBorder:"rgba(102, 126, 234, 0.5)",cardBg1:"rgba(155, 45, 68, 0.08)",cardBg2:"rgba(75, 25, 45, 0.12)",cardBg3:"rgba(35, 10, 20, 0.15)",cardBgHover1:"rgba(175, 55, 85, 0.12)",cardBgHover2:"rgba(95, 35, 60, 0.18)",cardBgHover3:"rgba(40, 15, 25, 0.2)",navBorderGold26:"rgba(241, 213, 146, 0.26)",navBorderGold38:"rgba(241, 213, 146, 0.38)",navBorderGold48:"rgba(241, 213, 146, 0.48)",navBorderGold18:"rgba(241, 213, 146, 0.18)",navDividerGold50:"rgba(241, 213, 146, 0.5)",navBarUnderline:"rgba(212, 175, 55, 0.1)",navLoginBorder:"rgba(212, 175, 55, 0.25)",navLoginBg:"rgba(212, 175, 55, 0.08)",navLoginBgHover:"rgba(212, 175, 55, 0.15)",navLinkBarBgTop:"rgba(255, 245, 214, 0.04)",navLinkBarBgBottom:"rgba(30, 8, 14, 0.2)",navLinkBarBgHoverTop:"rgba(255, 245, 214, 0.08)",navLinkBarBgHoverBottom:"rgba(44, 12, 22, 0.28)",navToggleBg:"rgba(34, 10, 16, 0.72)",navBackdrop:"rgba(0, 0, 0, 0.4)",navShellBg:"rgba(0, 0, 0, 0.4)"},Dx={main:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'},Ox={heightDesktop:"90px",minHeightTablet:"64px",minHeightPhone:"60px",gridColumnGapDesktop:"clamp(10px, 2vw, 24px)",gridColumnGapTablet:"10px",gridColumnGapPhone:"8px",paddingXDesktop:"clamp(8px, 3vw, 50px)",paddingXTablet:"14px",paddingXPhone:"10px",navRightGapDesktop:"clamp(6px, 1.5vw, 12px)",navRightGapTablet:"clamp(4px, 1.2vw, 8px)",menuToggleSize:"44px",menuToggleRadius:"10px",menuToggleFontSize:"1.24rem",drawerTop:"78px",drawerBackdropTopTablet:"72px",drawerWidth:"min(92vw, 360px)",drawerMaxWidth:"360px",drawerPadding:"14px 18px 16px",drawerBorderRadius:"16px",drawerViewportOffset:"72px",linksBarGap:"clamp(4px, 1.5vw, 30px)",linksBarPaddingX:"8px",linksBarGapTablet:"clamp(3px, 0.8vw, 8px)",linksBarGapPhone:"clamp(2px, 0.6vw, 5px)",linksDrawerGapTablet:"16px",linksDrawerGapPhone:"14px",linksDrawerMarginBottom:"clamp(8px, 2vw, 12px)",linkBarFontWeight:600,linkDrawerFontWeight:500,linkBarFontSize:"clamp(0.48rem, 1.2vw, 0.90rem)",linkBarLetterSpacing:"clamp(0.5px, 0.08vw, 1px)",linkBarPadding:"clamp(2px, 0.3vw, 4px) clamp(4px, 0.7vw, 7px)",linkBarRadius:"10px",linkBarFontSizeTablet:"clamp(0.48rem, 0.9vw, 0.68rem)",linkBarLetterSpacingTablet:"0.6px",linkBarPaddingTablet:"clamp(2px, 0.2vw, 3px) clamp(3px, 0.5vw, 5px)",linkBarFontSizePhone:"clamp(0.44rem, 0.75vw, 0.56rem)",linkBarLetterSpacingPhone:"0.5px",linkBarPaddingPhone:"clamp(2px, 0.1vw, 3px) clamp(3px, 0.4vw, 5px)",linkDrawerFontSize:"0.9rem",linkDrawerLetterSpacing:"1.1px",linkDrawerPadding:"2px 0",linkDrawerFontSizePhone:"0.84rem",linkDrawerLetterSpacingPhone:"0.9px",linkDrawerPaddingTablet:"1px 0",linkDrawerPaddingPhone:"1px 0",linkSeparatorWidth:"18px",linkSeparatorOffsetY:"-9px",loginGap:"clamp(5px, 1vw, 10px)",loginPadding:"clamp(6px, 1.2vw, 10px) clamp(10px, 2vw, 18px)",loginFontSize:"clamp(0.8rem, 1.8vw, 0.95rem)",loginLetterSpacing:"0.3px",loginGapTablet:"clamp(4px, 1.5vw, 8px)",loginPaddingTablet:"clamp(6px, 1.5vw, 9px) clamp(10px, 2.5vw, 16px)",loginFontSizeTablet:"clamp(0.75rem, 2.2vw, 0.9rem)",loginGapPhone:"clamp(4px, 2vw, 6px)",loginPaddingPhone:"clamp(5px, 1.8vw, 8px) clamp(8px, 2.8vw, 14px)",loginFontSizePhone:"clamp(0.7rem, 2.8vw, 0.85rem)",loginIconFontSize:"clamp(0.9rem, 1.8vw, 1.1rem)",loginIconFontSizeTablet:"clamp(0.85rem, 2.2vw, 1rem)",loginIconFontSizePhone:"clamp(0.8rem, 2.8vw, 0.95rem)",socialGap:"20px",socialGapTablet:"14px",socialGapPhone:"12px",socialIconSize:"1.3rem",socialIconSizeTablet:"1.18rem",socialIconSizePhone:"1.08rem",mobileLoginMarginTop:"18px",mobileLoginPaddingY:"clamp(14px, 3vw, 18px)",mobileLoginMarginTopPhone:"16px",mobileLoginPaddingYPhone:"clamp(12px, 2.5vw, 16px)",mobileSocialMarginTop:"14px",mobileSocialPaddingTop:"12px"},Lx=Cx.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(
      ellipse at 80% 10%,
      ${Nx.bordoAccent} 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 20% 80%,
      ${Nx.bordoAccentDark} 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 50% 50%,
      ${Nx.bordoCore} 0%,
      ${Nx.deepBlack} 100%
    );

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 70% 0%,
        ${Nx.goldSoft18} 0%,
        transparent 45%
      ),
      radial-gradient(
        ellipse at 100% 50%,
        ${Nx.goldSoft10} 0%,
        transparent 40%
      ),
      radial-gradient(
        ellipse at 30% 100%,
        ${Nx.goldSoft08} 0%,
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
      ${Nx.goldSoft025} 80px,
      ${Nx.goldSoft025} 81px
    );
    pointer-events: none;
  }
`;const Mx=function(){return(0,Nw.jsx)(Lx,{})},$x=Ox,Fx=Nx,Ux=Rx,Bx=Cx.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${$x.heightDesktop};
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  column-gap: ${$x.gridColumnGapDesktop};
  padding: 0 ${$x.paddingXDesktop};
  background: ${Fx.navShellBg};
  backdrop-filter: blur(15px);
  border-bottom: 1px solid ${Fx.navBarUnderline};
  z-index: 1000;

  @media (max-width: ${Ux.tablet}px) {
    height: auto;
    min-height: ${$x.minHeightTablet};
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "left center right";
    align-items: center;
    column-gap: ${$x.gridColumnGapTablet};
    row-gap: 0;
    padding: 0 ${$x.paddingXTablet};
  }

  @media (max-width: ${Ux.phone}px) {
    min-height: ${$x.minHeightPhone};
    column-gap: ${$x.gridColumnGapPhone};
    padding: 0 ${$x.paddingXPhone};
  }
`,Vx=Cx.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 0;
  flex-shrink: 0;

  @media (max-width: ${Ux.tablet}px) {
    grid-area: left;
  }
`,Hx=Cx.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  width: 100%;

  @media (max-width: ${Ux.tablet}px) {
    display: none;
  }
`,Wx=Cx.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${$x.navRightGapDesktop};
  min-width: 0;
  flex-shrink: 0;

  @media (max-width: ${Ux.tablet}px) {
    grid-area: right;
    gap: ${$x.navRightGapTablet};
  }
`,Gx=Cx.div`
  display: flex;
  flex-shrink: 0;

  @media (max-width: ${Ux.tablet}px) {
    display: none;
  }
`,Kx=Cx.button`
  display: none;
  border: 1px solid ${Fx.navBorderGold38};
  background: ${Fx.navToggleBg};
  color: ${Fx.goldHover};
  width: ${$x.menuToggleSize};
  height: ${$x.menuToggleSize};
  border-radius: ${$x.menuToggleRadius};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${$x.menuToggleFontSize};
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

  @media (max-width: ${Ux.tablet}px) {
    display: inline-flex;
  }
`,qx=Cx.button`
  position: fixed;
  inset: 0;
  border: none;
  background: ${Fx.navBackdrop};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
  z-index: 999;
  display: none;

  &[data-open] {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: ${Ux.tablet}px) {
    top: ${$x.drawerBackdropTopTablet};
    display: block;
  }
`,Qx=Cx.aside`
  position: fixed;
  top: ${$x.drawerTop};
  left: 50%;
  right: auto;
  width: ${$x.drawerWidth};
  max-width: ${$x.drawerMaxWidth};
  max-height: calc(100vh - ${$x.drawerViewportOffset});
  height: auto;
  padding: ${$x.drawerPadding};
  background: linear-gradient(
    180deg,
    rgba(120, 40, 64, 0.72) 0%,
    rgba(82, 24, 42, 0.68) 100%
  );
  backdrop-filter: blur(12px) saturate(120%);
  border: 1px solid ${Fx.navBorderGold18};
  border-radius: ${$x.drawerBorderRadius};
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

  @media (max-width: ${Ux.tablet}px) {
    display: block;
  }
`,Yx=Cx.div`
  margin-top: ${$x.mobileSocialMarginTop};
  padding-top: ${$x.mobileSocialPaddingTop};
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid ${Fx.navBorderGold18};

  & > div {
    justify-content: center;
  }
`,Jx=Cx.div`
  margin-top: ${$x.mobileLoginMarginTop};
  padding: ${$x.mobileLoginPaddingY} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${Fx.navBorderGold18};

  @media (max-width: ${Ux.phone}px) {
    margin-top: ${$x.mobileLoginMarginTopPhone};
    padding: ${$x.mobileLoginPaddingYPhone} 0;
  }
`,Xx={src:n.p+"static/media/znak-wodny.5040197ae93bea0121d6.png",alt:"Logo Klara Queen",name:"Klara Queen",ariaLabel:"Strona g\u0142\xf3wna Klara Queen"},Zx=Cx(wt)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`,ek=Cx.img.attrs({src:Xx.src,alt:Xx.alt})`
  height: clamp(50px, 8vw, 85px);
  width: auto;
  cursor: pointer;
  filter: brightness(3) contrast(1.2) saturate(1.1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.34))
    drop-shadow(0 0 8px ${Nx.goldMain})
    drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18));
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
    filter: brightness(3) contrast(1.2) saturate(1.1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${Nx.goldMain})
      drop-shadow(0 0 16px ${Nx.goldHover});
  }
`;const tk=function(){return(0,Nw.jsx)(Zx,{to:"/","aria-label":Xx.ariaLabel,children:(0,Nw.jsx)(ek,{})})},nk=Ox,rk=Nx,ik=Cx.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${nk.linksBarGap};
  flex-wrap: nowrap;
  list-style: none;
  margin: 0;
  padding: 0 ${nk.linksBarPaddingX};
  white-space: nowrap;
  width: auto;
  min-width: 0;
  max-width: 100%;

  @media (max-width: ${Rx.tablet}px) {
    gap: ${nk.linksBarGapTablet};
    padding: 0;
    max-width: 100%;
  }

  @media (max-width: ${Rx.phone}px) {
    gap: ${nk.linksBarGapPhone};
  }
`,ak=Cx.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${nk.linksDrawerGapTablet};
  flex-wrap: nowrap;
  list-style: none;
  margin: 0 0 ${nk.linksDrawerMarginBottom} 0;
  padding: 0;
  white-space: nowrap;
  width: auto;
  min-width: 0;

  @media (max-width: ${Rx.phone}px) {
    gap: ${nk.linksDrawerGapPhone};
  }
`,ok=Cx.li`
  flex-shrink: 1;
  min-width: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: auto;
  color: ${rk.goldHover};
  font-family: ${Dx.main};
  font-weight: ${nk.linkBarFontWeight};
  text-transform: uppercase;
  letter-spacing: ${nk.linkBarLetterSpacing};
  cursor: pointer;
  font-size: ${nk.linkBarFontSize};
  white-space: nowrap;
  text-align: center;
  line-height: 1;
  padding: ${nk.linkBarPadding};
  border-radius: ${nk.linkBarRadius};
  border: 1px solid ${rk.navBorderGold26};
  background: linear-gradient(
    180deg,
    ${rk.navLinkBarBgTop} 0%,
    ${rk.navLinkBarBgBottom} 100%
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

  @media (max-width: ${Rx.tablet}px) {
    letter-spacing: ${nk.linkBarLetterSpacingTablet};
    font-size: ${nk.linkBarFontSizeTablet};
    padding: ${nk.linkBarPaddingTablet};
    white-space: nowrap;
  }

  @media (max-width: ${Rx.phone}px) {
    letter-spacing: ${nk.linkBarLetterSpacingPhone};
    font-size: ${nk.linkBarFontSizePhone};
    padding: ${nk.linkBarPaddingPhone};
  }

  &:hover {
    color: ${rk.white};
    transform: translateY(-1px);
    border-color: ${rk.navBorderGold48};
    background: linear-gradient(
      180deg,
      ${rk.navLinkBarBgHoverTop} 0%,
      ${rk.navLinkBarBgHoverBottom} 100%
    );
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${rk.goldMain},
      0 0 18px ${rk.goldHover};
  }
`,sk=Cx.li`
  flex-shrink: 0;
  min-width: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: auto;
  color: ${rk.goldHover};
  font-family: ${Dx.main};
  font-weight: ${nk.linkDrawerFontWeight};
  text-transform: uppercase;
  letter-spacing: ${nk.linkDrawerLetterSpacing};
  cursor: pointer;
  font-size: ${nk.linkDrawerFontSize};
  white-space: nowrap;
  text-align: center;
  line-height: 1;
  padding: ${nk.linkDrawerPadding};
  border-radius: ${nk.linkBarRadius};
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
    bottom: ${nk.linkSeparatorOffsetY};
    width: ${nk.linkSeparatorWidth};
    height: 1px;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${rk.navDividerGold50} 50%,
      transparent 100%
    );
  }

  @media (max-width: ${Rx.tablet}px) {
    padding: ${nk.linkDrawerPaddingTablet};
  }

  @media (max-width: ${Rx.phone}px) {
    letter-spacing: ${nk.linkDrawerLetterSpacingPhone};
    font-size: ${nk.linkDrawerFontSizePhone};
    padding: ${nk.linkDrawerPaddingPhone};
  }

  &:hover {
    color: ${rk.white};
    transform: translateY(-1px);
    border-color: transparent;
    background: transparent;
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.42),
      0 0 10px ${rk.goldMain},
      0 0 18px ${rk.goldHover};
  }
`,lk=Cx.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: inherit;
`;var ck={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},uk=r.createContext&&r.createContext(ck),dk=["attr","size","title"];function hk(){return hk=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hk.apply(null,arguments)}function pk(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function fk(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pk(Object(n),!0).forEach(function(t){mk(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pk(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function mk(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gk(e){return e&&e.map((e,t)=>r.createElement(e.tag,fk({key:t},e.attr),gk(e.child)))}function yk(e){return t=>r.createElement(wk,hk({attr:fk({},e.attr)},t),gk(e.child))}function wk(e){var t=t=>{var n,{attr:i,size:a,title:o}=e,s=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,dk),l=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",hk({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:n,style:fk(fk({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==uk?r.createElement(uk.Consumer,null,e=>t(e)):t(ck)}function bk(e){return yk({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function vk(e){return yk({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}function xk(e){return yk({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function kk(e){return yk({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"},child:[]}]})(e)}function zk(e){return yk({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"},child:[]}]})(e)}function Sk(e){return yk({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"},child:[]}]})(e)}function _k(e){return yk({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function Ek(e){return yk({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(e)}function jk(e){return yk({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(e)}function Tk(e){return yk({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function Ck(e){return yk({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(e)}function Ik(e){return yk({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(e)}function Ak(e){return yk({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function Pk(e){return yk({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(e)}function Rk(e){return yk({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}const Nk=[{id:1,icon:function(e){return yk({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)},url:"https://youtube.com",label:"YouTube"},{id:2,icon:function(e){return yk({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)},url:"https://facebook.com",label:"Facebook"},{id:3,icon:function(e){return yk({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(e)},url:"https://allegro.pl",label:"Allegro"}],Dk={labels:[{name:"Start",to:"/"},{name:"Oferta",to:"/offer"},{name:"Aktualno\u015bci",to:"/blog"},{name:"Wsp\xf3\u0142praca",to:"/cooperation"},{name:"Najcz\u0119stsze pytania",to:"/questions"},{name:"O Nas",to:"/about"}],socials:Nk,aria:{closeLabel:"Zamknij menu",openLabel:"Otw\xf3rz menu"}};const Ok=function(e){let{variant:t="bar",onItemClick:n}=e;const r=()=>{n&&n()},i="drawer"===t?ak:ik,a="drawer"===t?sk:ok;return(0,Nw.jsx)(i,{children:Dk.labels.map((e,t)=>(0,Nw.jsx)(a,{onClick:r,children:e.to?(0,Nw.jsx)(lk,{as:wt,to:e.to,children:e.name}):(0,Nw.jsx)(lk,{href:e.url,children:e.name})},`${e.name}-${t}`))})},Lk=Ox,Mk=Nx,$k=Rx,Fk=Cx.a`
  display: flex;
  align-items: center;
  gap: ${Lk.loginGap};
  padding: ${Lk.loginPadding};
  color: ${Mk.goldHover};
  background: ${Mk.navLoginBg};
  border: 1px solid ${Mk.navLoginBorder};
  border-radius: ${Lk.linkBarRadius};
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
  font-size: ${Lk.loginFontSize};
  letter-spacing: ${Lk.loginLetterSpacing};
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: ${$k.tablet}px) {
    font-size: ${Lk.loginFontSizeTablet};
    padding: ${Lk.loginPaddingTablet};
    gap: ${Lk.loginGapTablet};
  }

  @media (max-width: ${$k.phone}px) {
    font-size: ${Lk.loginFontSizePhone};
    padding: ${Lk.loginPaddingPhone};
    gap: ${Lk.loginGapPhone};
  }

  &:hover {
    color: ${Mk.white};
    background: ${Mk.navLoginBgHover};
    border-color: rgba(255, 239, 194, 0.5);
    transform: translateY(-2px) scale(1.03);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${Mk.goldMain})
      drop-shadow(0 0 16px ${Mk.goldHover});
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
  }

  &:active {
    transform: translateY(0) scale(1);
  }
`,Uk=Cx.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${Lk.loginIconFontSize};
  flex-shrink: 0;

  @media (max-width: ${$k.tablet}px) {
    font-size: ${Lk.loginIconFontSizeTablet};
  }

  @media (max-width: ${$k.phone}px) {
    font-size: ${Lk.loginIconFontSizePhone};
  }
`,Bk=Cx.span`
  font-family: inherit;
  letter-spacing: ${Lk.loginLetterSpacing};
`,Vk=Cx.div`
  display: flex;
  align-items: center;
  gap: clamp(6px, 1.2vw, 10px);
  flex-shrink: 0;
`,Hk=Cx(wt)`
  display: flex;
  align-items: center;
  gap: ${Lk.loginGap};
  padding: ${Lk.loginPadding};
  color: ${Mk.goldHover};
  background: ${Mk.navLoginBg};
  border: 1px solid ${Mk.navLoginBorder};
  border-radius: ${Lk.linkBarRadius};
  text-decoration: none;
  font-weight: 500;
  font-size: ${Lk.loginFontSize};
  letter-spacing: ${Lk.loginLetterSpacing};
  white-space: nowrap;
  transition:
    color 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;

  @media (max-width: ${$k.tablet}px) {
    font-size: ${Lk.loginFontSizeTablet};
    padding: ${Lk.loginPaddingTablet};
    gap: ${Lk.loginGapTablet};
  }

  @media (max-width: ${$k.phone}px) {
    font-size: ${Lk.loginFontSizePhone};
    padding: ${Lk.loginPaddingPhone};
    gap: ${Lk.loginGapPhone};
  }

  &:hover {
    color: ${Mk.white};
    background: ${Mk.navLoginBgHover};
    border-color: rgba(255, 239, 194, 0.5);
    transform: translateY(-1px);
  }
`,Wk=Cx.button`
  padding: ${Lk.loginPadding};
  border: 1px solid ${Mk.navBorderGold26};
  border-radius: ${Lk.linkBarRadius};
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

  @media (max-width: ${$k.tablet}px) {
    padding: ${Lk.loginPaddingTablet};
  }

  @media (max-width: ${$k.phone}px) {
    padding: 8px 10px;
    font-size: 0.72rem;
  }

  &:hover {
    color: ${Mk.white};
    border-color: ${Mk.navBorderGold48};
    background: rgba(158, 30, 54, 0.35);
  }
`;const Gk=function(e){let{variant:t}=e;const{user:n,loading:r,signOutUser:i}=Lw();return r?(0,Nw.jsxs)(Fk,{as:wt,to:"/login","aria-label":"Logowanie",children:[(0,Nw.jsx)(Uk,{children:(0,Nw.jsx)(Ek,{})}),(0,Nw.jsx)(Bk,{children:"Logowanie"})]}):n?"drawer"===t?(0,Nw.jsxs)(Vk,{children:[(0,Nw.jsxs)(Hk,{to:"/konto","aria-label":"Moje konto",children:[(0,Nw.jsx)(Uk,{children:(0,Nw.jsx)(bk,{})}),(0,Nw.jsx)(Bk,{children:"Konto"})]}),(0,Nw.jsx)(Wk,{type:"button",onClick:()=>i(),children:"Wyloguj"})]}):(0,Nw.jsxs)(Hk,{to:"/konto","aria-label":"Moje konto",children:[(0,Nw.jsx)(Uk,{children:(0,Nw.jsx)(bk,{})}),(0,Nw.jsx)(Bk,{children:"Konto"})]}):(0,Nw.jsxs)(Fk,{as:wt,to:"/login","aria-label":"Zaloguj si\u0119",children:[(0,Nw.jsx)(Uk,{children:(0,Nw.jsx)(Ek,{})}),(0,Nw.jsx)(Bk,{children:"Logowanie"})]})},Kk=Ox,qk=Nx,Qk=Rx,Yk=Cx.div`
  display: flex;
  gap: ${Kk.socialGap};
  align-items: center;

  @media (max-width: ${Qk.tablet}px) {
    gap: ${Kk.socialGapTablet};
  }

  @media (max-width: ${Qk.phone}px) {
    gap: ${Kk.socialGapPhone};
  }
`,Jk=Cx.a`
  color: ${qk.goldHover};
  font-size: ${Kk.socialIconSize};
  transition:
    color 0.3s ease,
    transform 0.3s ease,
    filter 0.3s ease;
  display: flex;
  align-items: center;
  text-decoration: none;
  filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.22))
    drop-shadow(0 0 8px rgba(212, 175, 55, 0.22));

  @media (max-width: ${Qk.tablet}px) {
    font-size: ${Kk.socialIconSizeTablet};
  }

  @media (max-width: ${Qk.phone}px) {
    font-size: ${Kk.socialIconSizePhone};
  }

  &:hover {
    color: ${qk.white};
    transform: translateY(-2px) scale(1.04);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45))
      drop-shadow(0 0 10px ${qk.goldMain})
      drop-shadow(0 0 16px ${qk.goldHover});
  }
`;const Xk=function(){return(0,Nw.jsx)(Yk,{children:Dk.socials.map(e=>{const t=e.icon;return(0,Nw.jsx)(Jk,{href:e.url,target:"_blank",rel:"noreferrer","aria-label":e.label,children:(0,Nw.jsx)(t,{title:e.label})},e.id)})})};const Zk=function(){const[e,t]=(0,r.useState)(!1),n=()=>{t(!1)};return(0,Nw.jsxs)(Nw.Fragment,{children:[(0,Nw.jsxs)(Bx,{children:[(0,Nw.jsx)(Vx,{children:(0,Nw.jsx)(tk,{})}),(0,Nw.jsx)(Hx,{children:(0,Nw.jsx)(Ok,{})}),(0,Nw.jsxs)(Wx,{children:[(0,Nw.jsx)(Gx,{children:(0,Nw.jsx)(Gk,{})}),(0,Nw.jsx)(Kx,{type:"button",onClick:()=>{t(e=>!e)},"aria-label":e?Dk.aria.closeLabel:Dk.aria.openLabel,"aria-expanded":e,children:e?(0,Nw.jsx)(xk,{}):(0,Nw.jsx)(Rk,{})})]})]}),(0,Nw.jsx)(qx,{type:"button","data-open":e?"":void 0,onClick:n}),(0,Nw.jsxs)(Qx,{"data-open":e?"":void 0,children:[(0,Nw.jsx)(Ok,{variant:"drawer",onItemClick:n}),(0,Nw.jsxs)(Jx,{children:[(0,Nw.jsx)(Gk,{variant:"drawer"}),(0,Nw.jsx)(Yx,{children:(0,Nw.jsx)(Xk,{})})]})]})]})},ez=Cx.footer`
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

  @media (max-width: ${Rx.desktopHd}px) {
    padding: 55px 45px 22px;
  }

  @media (max-width: ${Rx.tablet}px) {
    padding: 45px 18px 18px;
  }

  @media (max-width: 821px) {
    padding: 30px 12px 12px;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    padding: 25px 10px 10px;
  }
`,tz=Cx.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 50px;
  width: 100%;

  @media (max-width: ${Rx.tablet}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }

  @media (max-width: 821px) {
    gap: 12px;
  }

  @media (max-width: ${Rx.phone}px) {
    gap: 12px;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    gap: 10px;
  }
`,nz="kontakt@studioklara.pl",rz={brand:{name:"Klara Queen",slogan:"Digital Excellence",description:"Tworzymy luksusowe do\u015bwiadczenia cyfrowe, kt\xf3re definiuj\u0105 now\u0105 jako\u015b\u0107 Twojej marki w sieci."},links:[{name:"Start",to:"/"},{name:"Oferta",to:"/offer"},{name:"Aktualno\u015bci",to:"/blog"},{name:"Wsp\xf3\u0142praca",to:"/cooperation"},{name:"Opinie",to:"/testimonials"},{name:"O Nas",to:"/about"},{name:"Najcz\u0119stsze pytania",to:"/questions"}],socials:Nk,contact:{email:nz,copy:`\xa9 ${(new Date).getFullYear()} Klara Queen. Wszystkie prawa zastrze\u017cone.`}},iz=Cx.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: ${Rx.tablet}px) {
    align-items: center;
  }
`,az=Cx.div`
  display: flex;
  align-items: center;
  margin-top: -56px;

  @media (max-width: ${Rx.desktopHd}px) {
    margin-top: -50px;
  }

  @media (max-width: ${Rx.tablet}px) {
    margin-top: -36px;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    margin-top: -28px;
  }
`,oz=Cx.img`
  height: 180px;
  width: auto;
  cursor: pointer;
  filter: brightness(2.8) contrast(1.1) saturate(1)
    drop-shadow(0 0 1px rgba(255, 255, 255, 0.3))
    drop-shadow(0 0 6px ${Nx.goldMain})
    drop-shadow(0 1px 4px rgba(0, 0, 0, 0.15));
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    filter: brightness(2.8) contrast(1.1) saturate(1)
      drop-shadow(0 0 2px rgba(255, 255, 255, 0.4))
      drop-shadow(0 0 8px ${Nx.goldMain})
      drop-shadow(0 0 12px ${Nx.goldHover});
  }

  @media (max-width: ${Rx.desktopHd}px) {
    height: 168px;
  }

  @media (max-width: ${Rx.tablet}px) {
    height: 140px;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    height: 120px;
  }
`,sz=Cx.p`
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

  @media (max-width: ${Rx.tablet}px) {
    font-size: 0.78rem;
    line-height: 1.5;
    max-width: 500px;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    font-size: 0.72rem;
    line-height: 1.4;
  }
`;const lz=function(e){let{data:t}=e;return(0,Nw.jsxs)(iz,{children:[(0,Nw.jsx)(az,{children:(0,Nw.jsx)(oz,{src:Xx.src,alt:Xx.alt})}),(0,Nw.jsx)(sz,{children:t.description})]})},cz=Ex`
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
    background: ${Nx.goldMain};
    transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${Nx.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 16px rgba(212, 175, 55, 0.45);

    &::before {
      width: 100%;
    }
  }

  @media (max-width: ${Rx.tablet}px) {
    font-size: 0.76rem;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    font-size: 0.7rem;
  }
`,uz=Cx.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${Rx.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    gap: 10px;
  }
`,dz=Cx.h4`
  color: ${Nx.goldHover};
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

  @media (max-width: ${Rx.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,hz=Cx.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;

  @media (max-width: ${Rx.tablet}px) {
    grid-template-columns: 1fr;
    gap: 12px;
    place-items: center;
  }

  @media (max-width: ${Rx.phone}px) {
    gap: 8px;
    place-items: center;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    gap: 6px;
  }
`,pz=Cx.a`
  ${cz}
`,fz=Cx(wt)`
  ${cz}
`;const mz=function(e){let{data:t}=e;return(0,Nw.jsxs)(uz,{children:[(0,Nw.jsx)(dz,{children:"Nawigacja"}),(0,Nw.jsx)(hz,{children:t.map((e,t)=>e.to?(0,Nw.jsx)(fz,{to:e.to,children:e.name},t):(0,Nw.jsx)(pz,{href:e.url,children:e.name},t))})]})},gz=Cx.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${Rx.tablet}px) {
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    gap: 10px;
  }
`,yz=Cx.h4`
  color: ${Nx.goldHover};
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

  @media (max-width: ${Rx.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.5px;
  }
`,wz=Cx.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: ${Rx.tablet}px) {
    justify-content: center;
    gap: 16px;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    gap: 12px;
  }
`,bz=Cx.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${Nx.white};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  opacity: 0.8;

  svg {
    font-size: 1.6rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.15));
    color: ${Nx.goldMain};
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
    color: ${Nx.white};

    svg {
      transform: scale(1.12);
      color: ${Nx.goldHover};
      filter: drop-shadow(0 6px 12px rgba(212, 175, 55, 0.3));
    }

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: ${Rx.tablet}px) {
    gap: 6px;

    svg {
      font-size: 1.4rem;
    }
  }

  @media (max-width: ${Rx.smallPhone}px) {
    gap: 5px;

    svg {
      font-size: 1.2rem;
    }
  }
`,vz=Cx.span`
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: ${Nx.white};
  opacity: 0.75;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: "Cormorant Garamond", serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: ${Rx.tablet}px) {
    font-size: 0.58rem;
    letter-spacing: 1px;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    font-size: 0.54rem;
  }
`;const xz=function(e){let{data:t}=e;return(0,Nw.jsxs)(gz,{children:[(0,Nw.jsx)(yz,{children:"Nasze Kana\u0142y"}),(0,Nw.jsx)(wz,{children:t.map(e=>(0,Nw.jsxs)(bz,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,Nw.jsx)(e.icon,{}),(0,Nw.jsx)(vz,{children:e.label})]},e.id))})]})},kz=Cx.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px 0;
  border-top: 1px solid rgba(212, 175, 55, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: ${Rx.tablet}px) {
    flex-direction: column-reverse;
    gap: 12px;
    margin: 30px auto 0;
    padding: 15px 0;
    text-align: center;
    align-items: center;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    margin: 20px auto 0;
    padding: 12px 0;
    gap: 10px;
  }
`,zz=Cx.span`
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

  @media (max-width: ${Rx.tablet}px) {
    font-size: 0.68rem;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    font-size: 0.63rem;
  }
`,Sz=Cx.span`
  color: ${Nx.goldMain};
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

  @media (max-width: ${Rx.tablet}px) {
    font-size: 0.75rem;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    font-size: 0.7rem;
  }
`,_z=Cx.a`
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
      ${Nx.goldMain} 100%
    );
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${Nx.white};
    opacity: 1;
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(212, 175, 55, 0.6);

    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${Rx.tablet}px) {
    font-size: 0.76rem;
    letter-spacing: 0.8px;
  }

  @media (max-width: ${Rx.smallPhone}px) {
    font-size: 0.7rem;
  }
`;const Ez=function(e){let{data:t}=e;const[n,i]=(0,r.useState)(67100),[a,o]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(a)return;const e=localStorage.getItem("visitCount"),t=localStorage.getItem("lastSessionTime"),n=(new Date).getTime();if(e&&t){if(n-parseInt(t)>6e4){const t=parseInt(e)+1;localStorage.setItem("visitCount",t),localStorage.setItem("lastSessionTime",n),i(t)}else i(parseInt(e))}else localStorage.setItem("visitCount",67101),localStorage.setItem("lastSessionTime",n),i(67100);o(!0)},[a]),(0,Nw.jsxs)(kz,{children:[(0,Nw.jsx)(zz,{children:t.copy}),(0,Nw.jsxs)(Sz,{children:["Odwiedzin na stronie:"," ",(0,Nw.jsx)("strong",{children:n.toLocaleString("pl-PL")})]}),(0,Nw.jsx)(_z,{href:`mailto:${t.email}`,children:t.email})]})};const jz=function(){const{brand:e,links:t,socials:n,contact:r}=rz;return(0,Nw.jsxs)(ez,{children:[(0,Nw.jsxs)(tz,{children:[(0,Nw.jsx)(lz,{data:e}),(0,Nw.jsx)(mz,{data:t}),(0,Nw.jsx)(xz,{data:n})]}),(0,Nw.jsx)(Ez,{data:r})]})},Tz=()=>{const e=ue();return(0,r.useEffect)(()=>{window.scrollTo(0,0)},[e.key]),(0,r.useEffect)(()=>{setTimeout(()=>{window.scrollTo(0,0)},100)},[]),null},Cz=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=Ex.apply(void 0,$w([e],t,!1)),a="sc-global-".concat(hv(JSON.stringify(i))),o=new Ax(i,a),s=new WeakMap,l=function(e){var t=bx(),n=r.useContext(xx),i=s.get(t.styleSheet);return void 0===i&&(i=t.styleSheet.allocateGSInstance(a),s.set(t.styleSheet,i)),r.useLayoutEffect(function(){return t.styleSheet.server||function(e,t,n,r,i){if(o.isStatic)o.renderStyles(e,Gb,n,i);else{var a=Mw(Mw({},t),{theme:tv(t,r,l.defaultProps)});o.renderStyles(e,a,n,i)}}(i,e,t.styleSheet,n,t.stylis),function(){o.removeStyles(i,t.styleSheet)}},[i,e,t.styleSheet,n,t.stylis]),null};return r.memo(l)})`
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
    background-color: ${Nx.outerSpace||"#1a0005"};
    color: ${Nx.white||"#ffffff"};
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
    background: ${Nx.goldMain||"#d4af37"};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${Nx.goldHover||"#f1d592"};
  }
`,Iz=Cx.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,Az=Cx.div`
  flex: 1;
  padding-top: 90px;

  @media (max-width: 821px) {
    padding-top: 15px;
  }

  @media (max-width: ${Rx.phone}px) {
    padding-top: 45px;
  }
`,Pz=Cx.section`
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

  @media (max-width: ${Rx.tablet}px) {
    padding: 0 0 0;
  }

  @media (max-width: 640px) {
    padding: 0 0 0;
  }

  @media (max-width: ${Rx.phone}px) {
    padding: 0 0 0;
  }
`,Rz=Cx.div`
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

  @media (max-width: ${Rx.tablet}px) {
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

  @media (max-width: ${Rx.phone}px) {
    gap: 8px;
    padding: 0 10px 0;
  }

  @media (max-width: 420px) {
    gap: 8px;
    padding: 0 8px 0;
  }
`,Nz=Cx.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;
  margin: 0;

  @media (max-width: ${Rx.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${Rx.tablet}px) {
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

  @media (max-width: ${Rx.phone}px) {
    margin-top: 0;
  }

  @media (max-width: 420px) {
    margin-top: 0;
  }
`,Dz=Cx.div`
  flex: 0 1 calc((100% - var(--columns-gap)) / 2);
  display: flex;
  justify-content: center;
  width: calc((100% - var(--columns-gap)) / 2);
  max-width: calc((100% - var(--columns-gap)) / 2);
  min-width: 0;
  margin: 0;

  @media (max-width: ${Rx.desktopHd}px) {
    justify-content: center;
  }

  @media (max-width: ${Rx.tablet}px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 760px;
    margin-top: 0;
  }

  @media (max-width: ${Rx.phone}px) {
    margin-top: 0;
  }
`,Oz=(Cx.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Cx.div`
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

  @media (max-width: ${Rx.tablet}px) {
    max-width: 760px;
    text-align: center;
    margin: -20px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  @media (max-width: ${Rx.phone}px) {
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
    align-items: center;
    padding: 0 2px;
  }
`),Lz=Cx.div`
  font-family: "Manrope", "Segoe UI", sans-serif;
  color: rgba(255, 242, 214, 0.92);
  text-transform: uppercase;
  letter-spacing: clamp(1.2px, 0.2vw, 2.2px);
  font-size: clamp(0.62rem, 0.9vw, 0.82rem);
  font-weight: 500;
  margin-bottom: 18px;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);

  @media (max-width: ${Rx.tablet}px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${Rx.phone}px) {
    font-size: 0.72rem;
    letter-spacing: 1.8px;
    margin-bottom: 12px;
  }
`,Mz=Cx.h1`
  margin: 0 0 18px;
  font-family: "Cormorant Garamond", "Bodoni MT", "Didot", serif;
  color: ${Nx.goldHover};
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

  @media (max-width: ${Rx.tablet}px) {
    font-size: clamp(0.95rem, 3.2vw, 1.95rem);
    letter-spacing: 0;
    text-align: center;
    width: 100%;
    line-height: 1;
  }

  @media (max-width: ${Rx.phone}px) {
    margin-bottom: 14px;
    font-size: clamp(0.9rem, 5.2vw, 1.6rem);
    line-height: 1.1;
  }
`,$z=Cx.p`
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

  @media (max-width: ${Rx.tablet}px) {
    max-width: 560px;
    font-size: clamp(0.74rem, 1.8vw, 0.84rem);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${Rx.phone}px) {
    max-width: 100%;
    font-size: clamp(0.72rem, 3.4vw, 0.8rem);
    line-height: 1.45;
    text-align: center;
  }
`,Fz=Cx.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: nowrap;

  @media (max-width: ${Rx.tablet}px) {
    width: 100%;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10px;
  }

  @media (max-width: ${Rx.phone}px) {
    gap: 8px;
    margin-top: 22px;
    flex-wrap: nowrap;
    justify-content: center;
  }
`,Uz=`\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 48px;\n  padding: 0 24px;\n  border-radius: 14px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.9px;\n  font-size: clamp(0.68rem, 0.8vw, 0.82rem);\n  font-weight: 700;\n  white-space: nowrap;\n  flex: 0 0 auto;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease,\n    color 0.3s ease, border-color 0.3s ease;\n\n  @media (max-width: ${Rx.tablet}px) {\n    min-height: 42px;\n    padding: 0 14px;\n    font-size: 0.74rem;\n    letter-spacing: 0.8px;\n  }\n\n  @media (max-width: ${Rx.phone}px) {\n    min-height: 40px;\n    padding: 0 12px;\n    font-size: 0.7rem;\n    letter-spacing: 0.7px;\n  }\n`,Bz=Cx.a`
  ${Uz}
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
`,Vz=Cx.a`
  ${Uz}
  color: rgba(255, 246, 220, 0.92);
  background: rgba(53, 13, 19, 0.22);
  border: 1px solid rgba(241, 213, 146, 0.58);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.04),
    0 10px 24px rgba(0, 0, 0, 0.14);

  &:hover {
    transform: translateY(-1px);
    color: ${Nx.white};
    border-color: rgba(241, 213, 146, 0.78);
    box-shadow:
      0 14px 30px rgba(0, 0, 0, 0.2),
      0 0 18px rgba(212, 175, 55, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  }
`,Hz="Unikalny design, kt\xf3ry zachwyca",Wz={line1:"Luksusowe i funkcjonalne",line2:"strony WWW dla Twojej marki"},Gz={line1:"Projektujemy spersonalizowane, unikalne rozwi\u0105zania cyfrowe,",line2:"kt\xf3re buduj\u0105 autorytet i przyci\u0105gaj\u0105 klient\xf3w premium."},Kz={primary:{label:"Zobacz Projekty",href:"/offer"},secondary:{label:"Wsp\xf3\u0142praca",href:"/cooperation"}};const qz=function(){return(0,Nw.jsxs)(Oz,{children:[(0,Nw.jsx)(Lz,{children:Hz}),(0,Nw.jsxs)(Mz,{children:[Wz.line1,(0,Nw.jsx)("br",{}),Wz.line2]}),(0,Nw.jsxs)($z,{children:[Gz.line1,(0,Nw.jsx)("br",{}),Gz.line2]}),(0,Nw.jsxs)(Fz,{children:[(0,Nw.jsx)(Bz,{as:wt,to:Kz.primary.href,children:Kz.primary.label}),(0,Nw.jsx)(Vz,{as:wt,to:Kz.secondary.href,children:Kz.secondary.label})]})]})},Qz=Cx.div`
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

  @media (max-width: ${Rx.tablet}px) {
    width: min(100%, 760px);
    height: clamp(240px, 46vw, 380px);
    padding: clamp(8px, 1.2vw, 12px);
    margin: 0 auto 0;
  }

  @media (max-width: ${Rx.phone}px) {
    padding: clamp(6px, 1vw, 10px);
  }
`,Yz=Cx.div`
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

  @media (max-width: ${Rx.tablet}px) {
    --offset-distance: 68px;
    --edge-offset-distance: 112px;
  }

  @media (max-width: ${Rx.phone}px) {
    --offset-distance: 56px;
    --edge-offset-distance: 98px;
  }
`,Jz=Cx.img`
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
  box-shadow: ${e=>e.$active?`0 28px 50px rgba(0, 0, 0, 0.45), 0 0 20px ${Nx.goldSoft18}`:"0 16px 26px rgba(0, 0, 0, 0.3)"};
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

  @media (max-width: ${Rx.phone}px) {
    width: 260px;
    height: 182px;
  }
`;var Xz=n(217),Zz=n(410),eS=n(430),tS=n(682);const nS={images:[Xz,Zz,eS,tS,Zz]},{images:rS}=nS,iS=(e,t,n)=>{let r=t-e;return r>n/2&&(r-=n),r<-n/2&&(r+=n),r};const aS=function(){const[e,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{const e=setInterval(()=>{t(e=>(e+1)%rS.length)},4e3);return()=>clearInterval(e)},[]),(0,Nw.jsx)(Qz,{children:(0,Nw.jsx)(Yz,{children:rS.map((t,n)=>(0,Nw.jsx)(Jz,{src:t,alt:`Projekt ${n+1}`,$offset:iS(e,n,rS.length),$active:n===e},`${t}-${n}`))})})},oS=Cx.section`
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

  @media (max-width: ${Rx.phone}px) {
    margin-top: -8px;
  }
`,sS=Cx.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,lS=Cx.h2`
  color: ${Nx.goldHover};
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
`,cS=Cx.p`
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
`,uS=Cx.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(280px, 38vw, 420px);
  margin-top: 0;
`,dS=Cx.div`
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
`,hS=Cx.div`
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

  @media (max-width: ${Rx.tablet}px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(100% - clamp(6px, 0.8vw, 10px));
  }

  @media (max-width: ${Rx.smallPhone}px) {
    flex: 0 0 calc(100% - clamp(6px, 0.8vw, 10px));
  }
`,pS=Cx.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${Nx.goldMain};
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
`,fS=Cx.div`
  margin: 8px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover div {
    width: 100px;
  }
`,mS=Cx.span`
  color: ${Nx.goldMain};
  text-transform: uppercase;
  letter-spacing: clamp(1.4px, 0.3vw, 4px);
  font-size: clamp(0.68rem, 0.9vw, 0.75rem);
  margin-bottom: 10px;
`,gS=Cx.div`
  width: 50px;
  height: 1px;
  background: ${Nx.goldMain};
  transition: width 0.4s ease;
`,yS=Cx.div`
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
`;const wS=function(e){let{children:t,type:n,url:r,isLink:i}=e;return(0,Nw.jsx)(yS,{as:"link"===n?"a":"div",href:"link"===n?r:void 0,target:"link"===n?"_blank":void 0,isLink:i,children:t})},bS=Cx.div`
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
`,vS=Cx.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  filter: brightness(0.88) saturate(0.9);
  transition:
    filter 0.45s ease,
    transform 0.45s ease;
`;const xS=function(e){let{image:t,title:n}=e;return(0,Nw.jsx)(bS,{children:(0,Nw.jsx)(vS,{src:t,alt:n})})},kS=Cx.div`
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
`;const zS=function(e){let{icon:t}=e;return(0,Nw.jsx)(kS,{children:(0,Nw.jsx)(t,{})})},SS=Cx.h3`
  color: ${Nx.goldHover};
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
`,_S=Cx.p`
  color: rgba(255, 245, 220, 0.78);
  font-size: clamp(0.68rem, 2.2vw, 0.82rem);
  text-align: center;
  line-height: 1.5;
  margin: 0 clamp(8px, 2vw, 20px);
  max-width: 240px;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;const ES=function(e){let{title:t,description:n}=e;return(0,Nw.jsxs)(Nw.Fragment,{children:[(0,Nw.jsx)(SS,{children:t}),n&&(0,Nw.jsx)(_S,{children:n})]})},jS=Cx.div`
  width: 44px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${Nx.goldMain} 50%,
    transparent 100%
  );
  margin-top: 14px;
  opacity: 0.65;
  flex-shrink: 0;
`;const TS=function(){return(0,Nw.jsx)(jS,{})};const CS=function(e){let{project:t}=e;const{type:n,url:r,title:i,description:a,image:o,icon:s}=t;return(0,Nw.jsxs)(wS,{type:n,url:r,isLink:"link"===n,children:[(0,Nw.jsx)(xS,{image:o,title:i}),(0,Nw.jsx)(zS,{icon:s}),(0,Nw.jsx)(ES,{title:i,description:a}),(0,Nw.jsx)(TS,{})]})},IS=[{id:1,type:"link",url:"https://google.com",title:"Boutique E-commerce",description:"W pe\u0142ni dzia\u0142aj\u0105cy sklep internetowy premium.",image:Xz,icon:Tk},{id:2,type:"example",title:"Studio Architektury",image:Zz,icon:function(e){return yk({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}},{id:3,type:"example",title:"Portfolio Fotografa",image:eS,icon:function(e){return yk({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(e)}},{id:4,type:"link",url:"https://moja-inna-strona.pl",title:"Dashboard Finansowy",image:tS,icon:function(e){return yk({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}},{id:5,type:"example",title:"Projekt Specjalny",image:Xz,icon:Tk},{id:6,type:"example",title:"Projekt Specjalny 2",image:Zz,icon:Tk}],AS={title:"Przyk\u0142adowe Prace",subtitle:"Ekskluzywne projekty cyfrowe, kt\xf3re\ndefiniuj\u0105 now\u0105 jako\u015b\u0107 bran\u017cy"},PS="Zobacz Pe\u0142ne Portfolio";const RS=function(){const e=(0,r.useRef)(null),t=(0,r.useRef)(!1),n=n=>{const r=e.current;if(!r||t.current)return;const i=r.firstElementChild;if(!i)return;const a=parseFloat(getComputedStyle(r).gap)||16,o=i.offsetWidth+a,s=r.scrollWidth-r.clientWidth;t.current=!0,n>0&&r.scrollLeft>=s-2?r.scrollTo({left:0,behavior:"smooth"}):n<0&&r.scrollLeft<=2?r.scrollTo({left:s,behavior:"smooth"}):r.scrollBy({left:n*o,behavior:"smooth"}),setTimeout(()=>{t.current=!1},580)};return(0,Nw.jsxs)(oS,{children:[(0,Nw.jsxs)(sS,{children:[(0,Nw.jsx)(lS,{children:AS.title}),(0,Nw.jsx)(cS,{children:AS.subtitle})]}),(0,Nw.jsxs)(uS,{children:[(0,Nw.jsx)(pS,{onClick:()=>n(-1),"aria-label":"Poprzedni projekt",children:(0,Nw.jsx)(Pk,{})}),(0,Nw.jsx)(dS,{ref:e,children:IS.map(e=>(0,Nw.jsx)(hS,{children:(0,Nw.jsx)(CS,{project:e})},e.id))}),(0,Nw.jsx)(pS,{onClick:()=>n(1),"aria-label":"Nast\u0119pny projekt",children:(0,Nw.jsx)(Ak,{})})]}),(0,Nw.jsxs)(fS,{children:[(0,Nw.jsx)(mS,{children:PS}),(0,Nw.jsx)(gS,{})]})]})},NS=Cx.section`
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
`,DS=Cx.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,OS=Cx.h2`
  color: ${Nx.goldHover};
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
`,LS=Cx.p`
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
`,MS=Cx.div`
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

  @media (max-width: ${Rx.tablet}px) {
  }

  @media (max-width: 540px) {
  }

  @media (max-width: ${Rx.smallPhone}px) {
  }
`,$S=Cx.a`
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

  @media (max-width: ${Rx.tablet}px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 540px) {
    flex: 0 0 calc(100% - clamp(6px, 0.8vw, 10px));
  }

  @media (max-width: ${Rx.smallPhone}px) {
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
`,FS=Cx.img`
  width: 100%;
  height: clamp(140px, 20vw, 200px);
  object-fit: cover;
  display: block;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 0;
`,US=Cx.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: clamp(14px, 2vw, 20px);
  position: relative;
  z-index: 2;
  overflow: visible;
  min-height: 0;
`,BS=Cx.h3`
  color: ${Nx.goldHover};
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

  @media (max-width: ${Rx.tablet}px) {
    -webkit-line-clamp: 2;
  }
`,VS=Cx.p`
  color: rgba(241, 213, 146, 0.8);
  font-family: "Manrope", "Segoe UI", sans-serif;
  font-size: clamp(0.8rem, 0.95vw, 0.9rem);
  line-height: 1.5;
  margin: 0 0 auto 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${Rx.tablet}px) {
    display: none;
  }
`,HS=Cx.span`
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
`,WS=Cx.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(280px, 38vw, 420px);
  margin-top: 0;
`,GS=Cx.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${Nx.goldMain};
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
`,KS=[{id:"proces-48h",title:"Jak oddajemy gotowy projekt w 48h roboczych? Poznaj nasz proces.",excerpt:"48 godzin roboczych \u2013 tyle potrzebujemy, by Twoja wizja sta\u0142a si\u0119 rzeczywisto\u015bci\u0105. Jak to robimy bez straty na jako\u015bci? Zaufanie, przygotowanie i pe\u0142ne skupienie.",date:"30 marca 2026",image:n(682)},{id:"unikalne-grafiki-ai",title:"Nowo\u015b\u0107: Unikalne grafiki AI w cenie ka\u017cdej strony",excerpt:"Koniec z nudnymi zdj\u0119ciami z darmowych bank\xf3w, kt\xf3re ma ka\u017cda konkurentka. Od teraz tworzymy dla Ciebie klimat premium za pomoc\u0105 Sztucznej Inteligencji \u2013 bez dodatkowych koszt\xf3w.",date:"25 marca 2026",image:n(430)},{id:"czysty-kod-react",title:"Dlaczego React wygrywa z WordPressem w 2026 roku?",excerpt:"Wielu klient\xf3w pyta nas: 'Dlaczego nie WordPress?'. Odpowied\u017a jest prosta: szybko\u015b\u0107, bezpiecze\u0144stwo i kontrola. Przeczytaj, dlaczego rezygnacja z ci\u0119\u017ckich wtyczek na rzecz czystego kodu to najlepsza inwestycja w przysz\u0142o\u015b\u0107 Twojej marki.",date:"20 marca 2026",image:n(410)},{id:"startujemy-z-aktualnosciami",title:"Startujemy z Aktualno\u015bciami \u2013 Sekcja tworzona na pro\u015bb\u0119 klient\xf3w",excerpt:"Po miesi\u0105cach obserwacji trendu w bran\u017cy i s\u0142uchaj\u0105c feedbacku naszych klient\xf3w, postanowili\u015bmy uruchomi\u0107 oficjaln\u0105 sekcj\u0119 Aktualno\u015bci. Dowiedz si\u0119, dlaczego to dla nas milestone, a dla Ciebie okazja do bycia na bie\u017c\u0105co.",date:"30 stycznia 2026",image:n(217)}];const qS=function(){const e=pe(),t=(0,r.useRef)(null),n=(0,r.useRef)(!1),i=e=>{const r=t.current;if(!r||n.current)return;const i=r.firstElementChild;if(!i)return;const a=parseFloat(getComputedStyle(r).gap)||16,o=i.offsetWidth+a,s=r.scrollWidth-r.clientWidth;n.current=!0,e>0&&r.scrollLeft>=s-2?r.scrollTo({left:0,behavior:"smooth"}):e<0&&r.scrollLeft<=2?r.scrollTo({left:s,behavior:"smooth"}):r.scrollBy({left:e*o,behavior:"smooth"}),setTimeout(()=>{n.current=!1},580)};return(0,Nw.jsxs)(NS,{children:[(0,Nw.jsxs)(DS,{children:[(0,Nw.jsx)(OS,{children:"Aktualno\u015bci"}),(0,Nw.jsx)(LS,{children:"B\u0105d\u017a na bie\u017c\u0105co z najnowszymi wiadomo\u015bciami ze \u015bwiata"})]}),(0,Nw.jsxs)(WS,{children:[(0,Nw.jsx)(GS,{onClick:()=>i(-1),"aria-label":"Poprzedni artyku\u0142",children:(0,Nw.jsx)(Pk,{})}),(0,Nw.jsx)(MS,{ref:t,children:KS.map(t=>(0,Nw.jsxs)($S,{onClick:()=>e(`/blog/${t.id}`),style:{cursor:"pointer"},children:[(0,Nw.jsx)(FS,{src:t.image,alt:t.title}),(0,Nw.jsxs)(US,{children:[(0,Nw.jsx)(BS,{children:t.title}),(0,Nw.jsx)(VS,{children:t.excerpt}),(0,Nw.jsx)(HS,{children:t.date})]})]},t.id))}),(0,Nw.jsx)(GS,{onClick:()=>i(1),"aria-label":"Nast\u0119pny artyku\u0142",children:(0,Nw.jsx)(Ak,{})})]})]})},QS=Cx.section`
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
`,YS=Cx.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,JS=Cx.h2`
  color: ${Nx.goldHover};
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
`,XS=Cx.p`
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
`,ZS=Cx.div`
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

  @media (max-width: ${Rx.tablet}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`,e_=Cx.div`
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
`,t_=Cx.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  margin: 0;
  padding: 0;
`,n_=Cx.h3`
  color: ${Nx.goldHover};
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
`,r_=Cx.p`
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
`,i_=Cx.span`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${e=>e.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${Nx.goldHover};
  font-size: clamp(0.9rem, 1.1vw, 1.2rem);
  margin-left: auto;
  flex-shrink: 0;
`,a_=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych."},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."},{id:4,question:"Czy za realizacj\u0119 projektu otrzymam faktur\u0119?",answer:"Tak. Za ka\u017cd\u0105 us\u0142ug\u0119 wystawiamy faktur\u0119 (bez VAT), kt\xf3r\u0105 otrzymasz na e-mail. Mo\u017cesz j\u0105 w ca\u0142o\u015bci wliczy\u0107 w koszty uzyskania przychodu \u2013 to najprostsze i najbezpieczniejsze rozwi\u0105zanie dla Twojego biznesu. Nie musisz martwi\u0107 si\u0119 o \u017cadne dodatkowe formalno\u015bci, a my zapewniamy Ci pe\u0142n\u0105 transparentno\u015b\u0107 i profesjonalizm w rozliczeniach."},{id:5,question:"Czemu na Allegro ceny us\u0142ug s\u0105 wy\u017csze?",answer:"Wy\u017csza cena na platformie Allegro wynika wy\u0142\u0105cznie z wysokich prowizji i op\u0142at transakcyjnych pobieranych przez operatora. Kontaktuj\u0105c si\u0119 z nami bezpo\u015brednio, omijasz te dodatkowe koszty i otrzymujesz najlepsz\u0105 mo\u017cliw\u0105 ofert\u0119 przy zachowaniu tej samej jako\u015bci i gwarancji. "},{id:6,question:"Co je\u015bli nie mam w\u0142asnych profesjonalnych zdj\u0119\u0107 lub tekst\xf3w?",answer:"Bez obaw, zajmiemy si\u0119 tym. Je\u015bli brakuje Ci fotografii, wygenerujemy dla Twojej marki unikalne grafiki AI, kt\xf3re idealnie oddadz\u0105 klimat Twojego biznesu. Pomo\u017cemy Ci te\u017c ubra\u0107 Twoje pomys\u0142y w profesjonalne s\u0142owa, aby strona od pocz\u0105tku budowa\u0142a Twoje zaufanie. "},{id:7,question:"Czy to autorskie projekty, czy gotowce z sieci?",answer:"Ka\u017cdy element naszej kolekcji stworzyli\u015bmy sami \u2013 od pierwszej linii kodu po ostatni detal wizualny. Nie u\u017cywamy WordPressa ani ci\u0119\u017ckich, powolnych kreator\xf3w stron. Wybieraj\u0105c nas, otrzymujesz unikalny produkt w technologii React.js, a nie masowy szablon, kt\xf3ry posiada co druga firma w Twojej bran\u017cy."},{id:8,question:"Czy b\u0119d\u0119 mie\u0107 pe\u0142n\u0105 kontrol\u0119 i dost\u0119p do strony?",answer:"Jak najbardziej. Przekazujemy Ci komplet hase\u0142 i dost\u0119p\xf3w do Twoich w\u0142asnych kont. Nasz kod jest czysty i uporz\u0105dkowany \u2013 je\u015bli kiedykolwiek zdecydujesz si\u0119 przekaza\u0107 stron\u0119 innemu informatykowi, odnajdzie si\u0119 on w strukturze bez problemu. Jeste\u015b w 100% niezale\u017cna."},{id:9,question:"Jak strona radzi sobie w wyszukiwarce Google (SEO)?",answer:'Wi\u0119kszo\u015b\u0107 stron to ci\u0119\u017ckie projekty na WordPressie, kt\xf3re przez nadmiar zb\u0119dnych wtyczek l\u0105duj\u0105 na ko\u0144cu wynik\xf3w. Nasze strony budujemy "na lekko", co sprawia, \u017ce s\u0105 b\u0142yskawiczne i faworyzowane przez Google. To fundament, kt\xf3ry pozwala realnie powalczy\u0107 o najwy\u017csze pozycje.'},{id:10,question:"Czy strona b\u0119dzie bezpieczna (certyfikat SSL)?",answer:'Tak. Obok adresu Twojej strony zawsze b\u0119dzie widoczna "zielona k\u0142\xf3dka". Certyfikat SSL masz w cenie, co gwarantuje szyfrowanie danych i brak ostrze\u017ce\u0144 w przegl\u0105darkach. Twoja witryna b\u0119dzie w pe\u0142ni bezpieczna dla odwiedzaj\u0105cych.'},{id:11,question:"Jak nawi\u0105za\u0107 z nami wsp\xf3\u0142prac\u0119?",answer:"Masz dwie proste drogi. Mo\u017cesz dokona\u0107 zakupu bezpo\u015brednio przez nasz profil na Allegro lub napisa\u0107 do nas wiadomo\u015b\u0107 e-mail. W odpowiedzi otrzymasz od nas kr\xf3tk\u0105 instrukcj\u0119 i ankiet\u0119, kt\xf3ra pomo\u017ce nam doprecyzowa\u0107 wygl\u0105d Twojej nowej strony. Wi\u0119cej szczeg\xf3\u0142\xf3w na temat ca\u0142ego procesu znajdziesz na naszej podstronie",cooperationLink:!0},{id:12,question:"Co je\u015bli nie mam gotowych tre\u015bci i nie wiem, co napisa\u0107?",answer:"To najcz\u0119stsza obawa, dlatego maksymalnie upro\u015bcili\u015bmy ten proces. Nie musisz by\u0107 pisarzem ani fotografem. Po zakupie otrzymasz od nas prost\u0105, interaktywn\u0105 ankiet\u0119, kt\xf3ra 'wyci\u0105gnie' od Ciebie najwa\u017cniejsze informacje o Twoim biznesie. Na ich podstawie przygotujemy profesjonalne teksty, a je\u015bli brakuje Ci zdj\u0119\u0107 \u2013 wygenerujemy dla Twojej marki unikalne grafiki AI. Nasza strona jest elastyczna: je\u015bli nie masz jeszcze cennika czy zespo\u0142u, po prostu ukryjemy te sekcje, a ca\u0142o\u015b\u0107 nadal b\u0119dzie wygl\u0105da\u0107 luksusowo i sp\xf3jnie. Wi\u0119cej informacji znajdziesz w sekcji",cooperationLink:!0}];const o_=function(){const[e,t]=(0,r.useState)(null);return(0,Nw.jsxs)(QS,{children:[(0,Nw.jsxs)(YS,{children:[(0,Nw.jsx)(JS,{children:"Najcz\u0119\u015bciej Zadawane Pytania"}),(0,Nw.jsx)(XS,{children:"Szybkie odpowiedzi na Twoje najbardziej pal\u0105ce w\u0105tpliwo\u015bci"})]}),(0,Nw.jsx)(ZS,{children:a_.slice(0,4).map(n=>(0,Nw.jsxs)(e_,{onClick:()=>{return r=n.id,void t(e===r?null:r);var r},children:[(0,Nw.jsxs)(t_,{children:[(0,Nw.jsx)(n_,{children:n.question}),(0,Nw.jsx)(r_,{isOpen:e===n.id,children:n.answer})]}),(0,Nw.jsx)(i_,{isOpen:e===n.id,children:"\u25bc"})]},n.id))})]})},s_=Cx.section`
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
`,l_=Cx.div`
  text-align: center;
  margin-bottom: clamp(16px, 1.8vw, 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,c_=Cx.h2`
  color: ${Nx.goldHover};
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
`,u_=Cx.p`
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
`,d_=Cx.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 14px);
  height: clamp(200px, 26vw, 280px);
  margin-top: 0;
`,h_=Cx.div`
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
`,p_=Cx.div`
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
`,f_=Cx.div`
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
`,m_=Cx.div`
  display: flex;
  gap: 3px;
  margin-bottom: clamp(8px, 1vw, 12px);
  font-size: clamp(12px, 1.2vw, 14px);
`,g_=Cx.span`
  color: #ffd700;
`,y_=Cx.p`
  font-size: clamp(12px, 1.3vw, 14px);
  line-height: 1.5;
  color: ${Nx.testimonialText};
  margin-bottom: clamp(10px, 1.2vw, 15px);
  font-style: normal;
  margin: 0 0 clamp(10px, 1.2vw, 15px) 0;
  font-weight: 500;

  @media (max-width: ${Rx.tablet-1}px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
  }

  @media (min-width: ${Rx.tablet}px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    overflow: hidden;
  }
`,w_=Cx.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: auto;
  flex-shrink: 0;
`,b_=Cx.strong`
  font-size: clamp(12px, 1.2vw, 14px);
  color: ${Nx.white};
  font-weight: 600;

  @media (max-width: ${Rx.tablet-1}px) {
    font-size: clamp(10px, 0.9vw, 12px);
  }
`,v_=Cx.span`
  font-size: clamp(10px, 1vw, 12px);
  color: ${Nx.testimonialSubtext};

  @media (max-width: ${Rx.tablet-1}px) {
    font-size: clamp(8px, 0.8vw, 10px);
  }
`,x_=Cx.button`
  flex-shrink: 0;
  width: clamp(40px, 4vw, 52px);
  height: clamp(40px, 4vw, 52px);
  border-radius: 50%;
  background: rgba(20, 0, 4, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.42);
  color: ${Nx.goldMain};
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
`,k_=Cx.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`,z_=Cx.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  border: 1px solid ${Nx.testimonialAccentBorder};
  border-radius: 8px;
  color: ${Nx.testimonialAccent};
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${Nx.testimonialAccentLight};
    border-color: ${Nx.testimonialAccent};
    color: ${Nx.white};
  }
`,S_=[{id:1,name:"Magdalena",company:"Salon Kosmetologii Estetycznej",text:"Nareszcie moja strona wygl\u0105da tak luksusowo, jak moje us\u0142ugi. Grafiki s\u0105 ob\u0142\u0119dne \u2013 nikt w mojej bran\u017cy nie ma nic podobnego. Najbardziej zaskoczy\u0142o mnie to, \u017ce wszystko by\u0142o gotowe w dwa dni.",rating:5},{id:2,name:"Tomasz",company:"Doradztwo Biznesowe",text:"Moja poprzednia strona wiecznie si\u0119 zacina\u0142a. Ta od Klary Queen dzia\u0142a b\u0142yskawicznie, nawet na telefonie. Klienci od razu zauwa\u017cyli zmian\u0119. Pe\u0142en profesjonalizm i zero lania wody.",rating:5},{id:3,name:"Agnieszka",company:"Biuro Architektoniczne",text:"Zale\u017ca\u0142o mi na estetyce, kt\xf3ra odda jako\u015b\u0107 moich projekt\xf3w. Studio zrozumia\u0142o moj\u0105 wizj\u0119 w punkt. Strona jest elegancka, czysta i bardzo nowoczesna. \u015awietny kontakt na ka\u017cdym etapie.",rating:5},{id:4,name:"Piotr",company:"Agencja Eventowa Premium",text:"Szybko\u015b\u0107 realizacji w tym studiu to jaki\u015b kosmos. Podczas gdy inni dopiero przygotowywali oferty, tutaj strona ju\u017c by\u0142a gotowa do publikacji. Wszystko dzia\u0142a idealnie, bez \u017cadnych b\u0142\u0119d\xf3w.",rating:5},{id:5,name:"Katarzyna",company:"Coaching & Mentoring",text:"By\u0142am sceptyczna, czy w 48h da si\u0119 zrobi\u0107 co\u015b porz\u0105dnego. Myli\u0142am si\u0119. Strona jest pi\u0119kna, unikalna i co najwa\u017cniejsze \u2013 klienci zacz\u0119li pisa\u0107 do mnie sami. To by\u0142a \u015bwietna inwestycja.",rating:5},{id:6,name:"Robert",company:"Firma Logistyczna",text:"Konkretnie i na temat. Dosta\u0142em nowoczesne narz\u0119dzie, kt\xf3re buduje presti\u017c mojej firmy. Nie musz\u0119 si\u0119 martwi\u0107 o \u017cadne wirusy czy b\u0142\u0119dy \u2013 wszystko po prostu dzia\u0142a jak nale\u017cy.",rating:5},{id:7,name:"Joanna",company:"Kancelaria Prawna",text:"Bardzo merytoryczne podej\u015bcie. Strona jest minimalistyczna, ale bije od niej profesjonalizm. Du\u017cy plus za cierpliwo\u015b\u0107 przy dobieraniu grafik \u2013 efekt ko\u0144cowy jest idealny.",rating:5},{id:8,name:"Marek",company:"Studio Treningu Personalnego",text:"Wi\u0119kszo\u015b\u0107 stron w mojej bran\u017cy wygl\u0105da tak samo. Moja od razu si\u0119 wyr\xf3\u017cnia dzi\u0119ki tym grafikom. Jest dynamiczna, szybka i po prostu chce si\u0119 na niej zosta\u0107 d\u0142u\u017cej.",rating:5},{id:9,name:"Ewa",company:"Projektantka Wn\u0119trz",text:"Ceni\u0119 sobie estetyk\u0119, a Studio Klara Queen dostarczy\u0142o mi projekt, kt\xf3ry jest po prostu pi\u0119kny. Wszystko dopi\u0119te na ostatni guzik w ekspresowym tempie. Polecam ka\u017cdemu.",rating:5},{id:10,name:"\u0141ukasz",company:"Sklep Internetowy (Nisza Premium)",text:"Przej\u015bcie na now\u0105 stron\u0119 to by\u0142a ulga. Wszystko \u0142aduje si\u0119 w u\u0142amku sekundy, a proces zakupowy jest p\u0142ynny. Wida\u0107, \u017ce zesp\xf3\u0142 zna si\u0119 na rzeczy i nie idzie na \u0142atwizn\u0119.",rating:5},{id:11,name:"Karolina",company:"Fotografia \u015alubna",text:"Jako fotograf zwracam uwag\u0119 na ka\u017cdy piksel. Jestem pod ogromnym wra\u017ceniem, jak dobrze dobrano opraw\u0119 wizualn\u0105. Strona jest lekka, szybka i bardzo stylowa.",rating:5},{id:12,name:"Andrzej",company:"Us\u0142ugi Finansowe",text:"Szuka\u0142em solidnego partnera i nie zawiod\u0142em si\u0119. Strona jest bezpieczna, wygl\u0105da nowocze\u015bnie i buduje zaufanie od pierwszej sekundy. \u017badnych problem\xf3w z terminami.",rating:5},{id:13,name:"Natalia",company:"Klinika Stomatologiczna",text:"Zale\u017ca\u0142o nam na nowoczesnym wizerunku. Strona, kt\xf3r\u0105 otrzymali\u015bmy, jest przejrzysta i bardzo intuicyjna dla pacjent\xf3w. Proces wdro\u017cenia trwa\u0142 niesamowicie kr\xf3tko.",rating:5},{id:14,name:"Micha\u0142",company:"Produkcja Mebli na Wymiar",text:"Konkretny kontakt i szybka realizacja. Strona \u015bwietnie eksponuje nasze realizacje. Podoba mi si\u0119, \u017ce nie musz\u0119 traci\u0107 czasu na techniczne detale \u2013 studio zaj\u0119\u0142o si\u0119 wszystkim.",rating:5},{id:15,name:"Daria",company:"Marka Odzie\u017cowa",text:"Moja marka w ko\u0144cu zyska\u0142a opraw\u0119, na jak\u0105 zas\u0142ugiwa\u0142a. Grafiki s\u0105 unikalne, a strona dzia\u0142a bez zarzutu. Ca\u0142o\u015b\u0107 wygl\u0105da bardzo presti\u017cowo i nowocze\u015bnie.",rating:5}];const __=function(){const e=(0,r.useRef)(null),t=(0,r.useRef)(!1),n=n=>{const r=e.current;if(!r||t.current)return;const i=r.firstElementChild;if(!i)return;const a=parseFloat(getComputedStyle(r).gap)||16,o=i.offsetWidth+a,s=r.scrollWidth-r.clientWidth;t.current=!0,n>0&&r.scrollLeft>=s-2?r.scrollTo({left:0,behavior:"smooth"}):n<0&&r.scrollLeft<=2?r.scrollTo({left:s,behavior:"smooth"}):r.scrollBy({left:n*o,behavior:"smooth"}),setTimeout(()=>{t.current=!1},580)};return(0,Nw.jsxs)(s_,{children:[(0,Nw.jsxs)(l_,{children:[(0,Nw.jsx)(c_,{children:"Opinie Naszych Klient\xf3w"}),(0,Nw.jsx)(u_,{children:"To m\xf3wi\u0105 o nas ci, kt\xf3rzy nam zaufali"})]}),(0,Nw.jsxs)(d_,{children:[(0,Nw.jsx)(x_,{onClick:()=>n(-1),"aria-label":"Poprzednia opinia",children:(0,Nw.jsx)(Pk,{})}),(0,Nw.jsx)(h_,{ref:e,children:S_.map(e=>(0,Nw.jsx)(p_,{children:(0,Nw.jsxs)(f_,{children:[(0,Nw.jsx)(m_,{children:[...Array(e.rating)].map((e,t)=>(0,Nw.jsx)(g_,{children:"\u2605"},t))}),(0,Nw.jsxs)(y_,{children:['"',e.text,'"']}),(0,Nw.jsxs)(w_,{children:[(0,Nw.jsx)(b_,{children:e.name}),(0,Nw.jsx)(v_,{children:e.company})]})]})},e.id))}),(0,Nw.jsx)(x_,{onClick:()=>n(1),"aria-label":"Nast\u0119pna opinia",children:(0,Nw.jsx)(Ak,{})})]}),(0,Nw.jsx)(k_,{children:(0,Nw.jsx)(z_,{href:"/testimonials",children:"Przeczytaj wszystkie opinie \u2192"})})]})};const E_=function(){return(0,Nw.jsxs)(Nw.Fragment,{children:[(0,Nw.jsx)(Pz,{children:(0,Nw.jsxs)(Rz,{children:[(0,Nw.jsx)(Nz,{children:(0,Nw.jsx)(qz,{})}),(0,Nw.jsx)(Dz,{children:(0,Nw.jsx)(aS,{})})]})}),(0,Nw.jsx)(RS,{}),(0,Nw.jsx)(qS,{}),(0,Nw.jsx)(o_,{}),(0,Nw.jsx)(__,{})]})},j_=Cx.div`
  position: relative;
  z-index: 5;
`,T_=Cx.section`
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
`,C_=Cx.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
`,I_=Cx.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${Nx.goldMain} 50%,
    transparent 100%
  );
  opacity: 0.25;
  margin: clamp(15px, 2vw, 25px) auto;
  max-width: 200px;
`,A_=Cx.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: clamp(30px, 4vw, 50px);
  color: ${Nx.goldMain};
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
      ${Nx.goldMain} 20%,
      ${Nx.goldMain} 80%,
      transparent 100%
    );
  }
`,P_=Cx.section`
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
      ${Nx.goldMain},
      transparent
    );
  }
`,R_=Cx.h1`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 700;
  color: ${Nx.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: clamp(1px, 0.5vw, 3px);
  margin: clamp(35px, 5vw, 50px) 0 clamp(25px, 4vw, 35px);
  text-transform: uppercase;
`,N_=Cx.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: rgba(255, 255, 255, 0.82);
  line-height: clamp(1.6, 3vw, 1.9);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
  font-family: "Manrope", sans-serif;
`,D_="Wymiar Luksusowej Doskona\u0142o\u015bci",O_="Gdzie wizja spotyka precyzj\u0119. Tworzymy cyfrowe eksperyencje, kt\xf3re wyznaczaj\u0105 standardy bran\u017cy.",L_={title:"Twoja Kolekcja",paragraphs:[". Stworzyli\u015bmy ekosystem wzorc\xf3w, kt\xf3re wyznaczaj\u0105 standardy - sprawdzone, doskonale zaprojektowane i gotowe do Twojej marki.","Ty wybierasz fundament z naszej autorskiej kolekcji, my dostosowujemy go do Twojej to\u017csamo\u015bci. Rezultat? Estetyka bez kompromis\xf3w i natychmiastowy autorytet w Twojej bran\u017cy.","Ka\u017cdy szablon to efekt setki godzin testowania, niezliczonych iteracji i wiedzy zdobytej pracuj\u0105c z luksusowymi markami na ca\u0142ym \u015bwiecie."],signature:"Autorska Kolekcja \xb7 Sprawdzone Struktury \xb7 Estetyka Bez Kompromis\xf3w"},M_=[{id:1,label:"Selekcja",value:"1",description:"Autorskie szablony zaprojektowane pod luksusowe marki."},{id:2,label:"Szybko\u015b\u0107",value:"2",description:"Twoja obecno\u015b\u0107 online w 2-4 dni robocze."},{id:3,label:"Sp\xf3jno\u015b\u0107",value:"3",description:"Gwarancja doskona\u0142ego wygl\u0105du na ka\u017cdym urz\u0105dzeniu."}],$_=[{id:1,question:"Czy musz\u0119 p\u0142aci\u0107 za serwer (hosting) co roku?",answer:'Nie. To nasza najwi\u0119ksza przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzi\u0119ki kt\xf3rej serwer masz za darmo na zawsze. Nie p\u0142acisz co miesi\u0105c ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 80 z\u0142 rocznie), przy czym pierwszy rok masz ju\u017c wliczony w cen\u0119 strony. Jest to koszt, kt\xf3rego nie unikniesz, niezale\u017cnie od tego, z jakim dostawc\u0105 wsp\xf3\u0142pracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromn\u0105 oszcz\u0119dno\u015bci\u0105 w por\xf3wnaniu do innych rozwi\u0105za\u0144 na rynku.'},{id:2,question:"Sk\u0105d bierze si\u0119 tak kr\xf3tki czas realizacji (48h)?",answer:"To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, kt\xf3re projektowali\u015bmy od zera przez wiele miesi\u0119cy. Zamiast traci\u0107 czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Ca\u0142y proces zamykamy zazwyczaj w 48 godzinach roboczych. "},{id:3,question:"Co w przypadku, gdy b\u0119d\u0119 potrzebowa\u0107 zmian w przysz\u0142o\u015bci?",answer:"Gwarantujemy Ci pe\u0142ne bezpiecze\u0144stwo. W cenie otrzymujesz trzy bezp\u0142atne pakiety poprawek, z kt\xf3rych mo\u017cesz skorzysta\u0107 w ci\u0105gu a\u017c 3 lat od startu strony (np. przy zmianie numeru telefonu czy cennika). Ka\u017cda kolejna modyfikacja to symboliczny koszt rz\u0119du 10-50 z\u0142 \u2013 najtaniej na rynku. To rozwi\u0105zanie, kt\xf3re daje Ci spok\xf3j i pewno\u015b\u0107, \u017ce Twoja strona b\u0119dzie zawsze aktualna i dostosowana do potrzeb Twojego biznesu, bez obaw o wysokie koszty zmian w przysz\u0142o\u015bci."}],F_={title:"Gdzie nas znajdziesz?",description:"Nasze projekty dost\u0119pne na najpopularniejszych platformach. Allegro oferuje nas za nieco wy\u017csz\u0105 cen\u0119 ze wzgl\u0119du na ich prowizj\u0119. ",platforms:[{id:1,name:"Facebook",description:"Obserwuj nas na Facebooku, aby by\u0107 zawsze na bie\u017c\u0105co."},{id:2,name:"YouTube",description:"Odkrywaj nasze projekty i inspiracje na YouTube."},{id:3,name:"Allegro",description:"Kupuj nasze szablony w sklepie Allegro (ceny wy\u017csze ze wzgl\u0119du na prowizj\u0119)."}]},U_="Twoja Kolekcja",B_="Nasze Atuty",V_="Jak To Dzia\u0142a?",H_="Got\xf3w na transformacj\u0119 cyfrow\u0105?",W_=()=>(0,Nw.jsxs)(P_,{children:[(0,Nw.jsx)(R_,{children:D_}),(0,Nw.jsx)(N_,{children:O_})]}),G_=Cx.div`
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
`,K_=Cx.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: clamp(1.7, 4vw, 2.1);
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
  position: relative;
`,q_=Cx.div`
  color: ${Nx.goldMain};
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
`,Q_=()=>(0,Nw.jsxs)(G_,{children:[L_.paragraphs.map((e,t)=>(0,Nw.jsx)(K_,{children:e},t)),(0,Nw.jsx)(q_,{children:L_.signature})]}),Y_=Cx.div`
  border-left: 2px solid ${Nx.goldMain};
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
      ${Nx.goldMain} 0%,
      transparent 100%
    );
  }
`,J_=Cx.div`
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
`,X_=Cx.h4`
  color: ${Nx.goldMain};
  margin-bottom: clamp(12px, 2vw, 15px);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  margin-top: 0;
`,Z_=Cx.p`
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.85);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
`,eE=Cx.div`
  width: 100%;
`,tE=Cx.button`
  margin-top: clamp(40px, 6vw, 60px);
  padding: clamp(12px, 2vw, 16px) clamp(30px, 4vw, 50px);
  background: linear-gradient(
    135deg,
    ${Nx.goldMain} 0%,
    #f1d592 100%
  );
  color: ${Nx.deepBlack};
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
`,nE=()=>{const e=pe();return(0,Nw.jsxs)(eE,{children:[(0,Nw.jsx)(Y_,{children:$_.map(e=>(0,Nw.jsxs)(J_,{children:[(0,Nw.jsx)(X_,{children:e.question}),(0,Nw.jsx)(Z_,{children:e.answer})]},e.id))}),(0,Nw.jsx)(tE,{onClick:()=>e("/questions"),children:"Zobacz Wi\u0119cej Pyta\u0144"})]})},rE=Cx.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(30px, 5vw, 50px);
  margin-top: clamp(60px, 8vw, 80px);
  width: 100%;

  @media (max-width: ${Rx.tablet}px) {
    grid-template-columns: 1fr;
  }
`,iE=Cx.div`
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
    border-color: ${Nx.goldMain};
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
`,aE=Cx.span`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: bold;
  color: ${Nx.goldMain};
  opacity: 0.95;
  font-family: "Cormorant Garamond", serif;
  line-height: 1;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,oE=Cx.span`
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  text-transform: uppercase;
  letter-spacing: clamp(1.5px, 0.5vw, 2.5px);
  color: ${Nx.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  opacity: 0.9;
`,sE=Cx.p`
  font-size: clamp(0.85rem, 1.8vw, 0.98rem);
  line-height: clamp(1.6, 3vw, 1.8);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
`,lE=()=>(0,Nw.jsx)(rE,{children:M_.map(e=>(0,Nw.jsxs)(iE,{children:[(0,Nw.jsx)(aE,{children:e.value}),(0,Nw.jsx)(oE,{children:e.label}),(0,Nw.jsx)(sE,{children:e.description})]},e.id))}),cE=Cx.section`
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
`,uE=Cx.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: clamp(30px, 4vw, 50px);
  letter-spacing: clamp(0.2px, 0.3vw, 0.5px);
`,dE=(Cx.button`
  padding: clamp(14px, 2.5vw, 18px) clamp(35px, 5vw, 60px);
  background: linear-gradient(
    135deg,
    ${Nx.goldMain} 0%,
    #f1d592 100%
  );
  color: ${Nx.deepBlack};
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
`,()=>(0,Nw.jsx)(cE,{children:(0,Nw.jsx)(uE,{children:H_})})),hE=Cx.section`
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
`,pE=Cx.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: clamp(30px, 4vw, 50px);
  color: ${Nx.goldMain};
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
      ${Nx.goldMain} 20%,
      ${Nx.goldMain} 80%,
      transparent 100%
    );
  }
`,fE=Cx.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: clamp(40px, 6vw, 60px);
  max-width: 600px;
  line-height: clamp(1.6, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.3vw, 0.6px);
`,mE=Cx.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(25px, 4vw, 40px);
  width: 100%;
  margin-top: clamp(20px, 3vw, 30px);

  @media (max-width: ${Rx.tablet}px) {
    grid-template-columns: 1fr;
  }
`,gE=Cx.a`
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
    border-color: ${Nx.goldMain};
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
`,yE=Cx.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${Nx.goldMain};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;

  ${gE}:hover & {
    transform: scale(1.15) rotate(5deg);
  }
`,wE=Cx.h3`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  color: ${Nx.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
`,bE=Cx.p`
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  line-height: clamp(1.5, 2.5vw, 1.7);
  font-weight: 400;
`,vE=()=>(0,Nw.jsxs)(hE,{children:[(0,Nw.jsx)(pE,{children:F_.title}),(0,Nw.jsx)(fE,{children:F_.description}),(0,Nw.jsx)(mE,{children:F_.platforms.map(e=>{const t=Nk.find(t=>t.label===e.name);return(0,Nw.jsxs)(gE,{href:null===t||void 0===t?void 0:t.url,target:"_blank",rel:"noopener noreferrer",children:[(0,Nw.jsx)(yE,{children:t&&(0,Nw.jsx)(t.icon,{})}),(0,Nw.jsx)(wE,{children:e.name}),(0,Nw.jsx)(bE,{children:e.description})]},e.id)})})]}),xE=()=>(0,Nw.jsxs)(j_,{children:[(0,Nw.jsx)(W_,{}),(0,Nw.jsx)(I_,{}),(0,Nw.jsxs)(T_,{children:[(0,Nw.jsx)(A_,{children:U_}),(0,Nw.jsx)(C_,{children:(0,Nw.jsx)(Q_,{})})]}),(0,Nw.jsx)(I_,{}),(0,Nw.jsxs)(T_,{children:[(0,Nw.jsx)(A_,{children:B_}),(0,Nw.jsx)(C_,{style:{maxWidth:"1000px"},children:(0,Nw.jsx)(lE,{})})]}),(0,Nw.jsx)(I_,{}),(0,Nw.jsxs)(T_,{children:[(0,Nw.jsx)(A_,{children:V_}),(0,Nw.jsx)(C_,{children:(0,Nw.jsx)(nE,{})})]}),(0,Nw.jsx)(I_,{}),(0,Nw.jsx)(vE,{}),(0,Nw.jsx)(I_,{}),(0,Nw.jsx)(dE,{})]}),kE=Cx.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);
  box-sizing: border-box;

  @media (max-width: ${Rx.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`,zE=Cx.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`,SE=Cx.div`
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
`,_E=Cx.h1`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-family: "Cormorant Garamond", serif;
  color: ${Nx.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(0.5px, 0.5vw, 1px);
`,EE=Cx.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.6;

  @media (max-width: ${Rx.tablet}px) {
    display: none;
  }
`,jE=Cx.div`
  border-left: 2px solid ${Nx.goldMain};
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
      ${Nx.goldMain} 0%,
      transparent 100%
    );
  }
`,TE=Cx.div`
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
`,CE=Cx.h3`
  color: ${Nx.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  font-weight: 700;
  letter-spacing: clamp(0.3px, 0.3vw, 0.6px);
  font-family: "Cormorant Garamond", serif;
  line-height: 1.4;
`,IE=Cx.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  line-height: clamp(1.65, 3vw, 1.9);
  font-weight: 400;
  letter-spacing: clamp(0.2px, 0.2vw, 0.4px);
  margin: 0;
  transition: color 0.3s ease;

  ${TE}:hover & {
    color: rgba(255, 255, 255, 0.95);
  }
`,AE=Cx.div`
  margin-top: clamp(60px, 10vw, 100px);
  text-align: center;
  padding-top: clamp(40px, 6vw, 60px);
  border-top: 1px solid rgba(212, 175, 55, 0.2);
`,PE=Cx.button`
  padding: clamp(12px, 2vw, 16px) clamp(30px, 4vw, 50px);
  background: linear-gradient(
    135deg,
    ${Nx.goldMain} 0%,
    #f1d592 100%
  );
  color: ${Nx.deepBlack};
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
`,RE=Cx.button`
  background: transparent;
  border: none;
  color: ${Nx.goldMain};
  cursor: pointer;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: inherit;
  padding: 0;
  margin: 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${Nx.goldHover};
  }
`,NE={title:"Najcz\u0119stsze Pytania",subtitle:"Masz w\u0105tpliwo\u015bci? Znajd\u017a odpowied\u017a na pytania, kt\xf3re zadaj\u0105 nam nasi klienci"},DE={backLabel:"Powr\xf3t do strony g\u0142\xf3wnej"},OE=()=>{const e=pe();return(0,Nw.jsx)(kE,{children:(0,Nw.jsxs)(zE,{children:[(0,Nw.jsxs)(SE,{children:[(0,Nw.jsx)(_E,{children:NE.title}),(0,Nw.jsx)(EE,{children:NE.subtitle})]}),(0,Nw.jsx)(jE,{children:a_.map((t,n)=>(0,Nw.jsxs)(TE,{style:{"--index":n},children:[(0,Nw.jsx)(CE,{children:t.question}),(0,Nw.jsxs)(IE,{children:[t.answer,t.cooperationLink&&(0,Nw.jsxs)(Nw.Fragment,{children:[" ",(0,Nw.jsx)(RE,{onClick:()=>e("/cooperation"),children:"Wsp\xf3\u0142praca"}),"."]})]})]},t.id))}),(0,Nw.jsx)(AE,{children:(0,Nw.jsx)(PE,{onClick:()=>e("/"),children:DE.backLabel})})]})})},LE=Cx.section`
  position: relative;
  z-index: 5;
  width: 100%;
  box-sizing: border-box;
`,ME=Cx.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);

  @media (max-width: ${Rx.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`,$E=Cx.div`
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
`,FE=Cx.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${Nx.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,UE=Cx.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${Rx.tablet}px) {
    display: none;
  }
`,BE={hero:{title:"Wsp\xf3\u0142praca",subtitle:"Prosty proces, pe\u0142na transparentno\u015b\u0107, gwarancja spokojnego snu. Oto, jak budujemy Twoj\u0105 cyfrow\u0105 przysz\u0142o\u015b\u0107."},steps:[{id:1,number:"1",title:"Wyb\xf3r Drogi i Start",content:"Wsp\xf3\u0142prac\u0119 zaczynamy od formalno\u015bci, aby\u015b mog\u0142a spa\u0107 spokojnie. Masz dwie \u015bcie\u017cki:",options:[{label:"Bezpo\u015brednio:",description:"Piszesz do nas e-mail, ustalamy szczeg\xf3\u0142y, przesy\u0142amy dane do faktury (bez VAT) i po op\u0142aceniu ruszamy z kopyta."},{label:"Allegro:",description:"Kupujesz na aukcji, korzystasz z bezpiecznych p\u0142atno\u015bci platformy i automatycznie trafiasz do kolejki realizacji."}],note:"Wa\u017cne: Przyst\u0119pujemy do pracy natychmiast po zaksi\u0119gowaniu wp\u0142aty lub otrzymaniu potwierdzenia z Allegro."},{id:2,number:"2",title:"Strategia i Materia\u0142y",content:"Nie musisz by\u0107 techniczna. Przesy\u0142amy Ci interaktywn\u0105 ankiet\u0119, kt\xf3ra poprowadzi Ci\u0119 za r\u0119k\u0119.",sections:[{label:"Twoje Zadanie:",description:"Wybierasz sekcje, kt\xf3re maj\u0105 si\u0119 pojawi\u0107 (np. O nas, Portfolio, Cennik)."},{label:"Nasze Wsparcie:",description:"Je\u015bli nie masz tekst\xf3w \u2013 przygotujemy je. Je\u015bli brak Ci zdj\u0119\u0107 \u2013 wygenerujemy unikalne grafiki AI."},{label:"Domena:",description:"Podajesz 2-3 propozycje nazwy (np. twojanazwa.pl). My sprawdzamy dost\u0119pno\u015b\u0107 i rejestrujemy t\u0119 woln\u0105."}]},{id:3,number:"3",title:"Realizacja: 48h Roboczych",content:"Tutaj dzieje si\u0119 magia. Kodujemy Twoj\u0105 stron\u0119 w czystym React.js.",details:[{label:"Czas:",description:"Standardowy czas realizacji to 48 godzin roboczych."},{label:"Zasada Wypocz\u0119tego Eksperta:",description:"Liczymy tylko dni robocze (poniedzia\u0142ek \u2013 pi\u0105tek). Weekendy i \u015bwi\u0119ta to czas na regeneracj\u0119, bo tylko wypocz\u0119ty programista gwarantuje kod bez b\u0142\u0119d\xf3w i design na najwy\u017cszym poziomie."},{label:"Technologia:",description:"Konfigurujemy darmowy serwer (GitHub Pages) i spinamy wszystko z Twoj\u0105 now\u0105 domen\u0105."}]},{id:4,number:"4",title:'Przekazanie "Kluczy do Biznesu"',content:"Twoja strona o\u017cywa. Ale na tym nie ko\u0144czymy:",deliverables:["Otrzymujesz od nas komplet hase\u0142 i dost\u0119p\xf3w do konta serwera i domeny.","Dostajesz prost\u0105 instrukcj\u0119, co zrobi\u0107 za rok, \u017ceby przed\u0142u\u017cy\u0107 domen\u0119 (koszt ok. 80 z\u0142 \u2013 bez naszych mar\u017c).","Strona jest Twoj\u0105 w\u0142asno\u015bci\u0105 na zawsze. Mo\u017cesz j\u0105 rozwija\u0107, przenosi\u0107 i modyfikowa\u0107 bez \u017cadnych ogranicze\u0144."]}],guarantee:{title:'Pakiet "Spokojna G\u0142owa"',subtitle:"Twoja Gwarancja",description:"Wiemy, \u017ce biznes si\u0119 zmienia. Numer telefonu mo\u017ce ulec zmianie, cennik mo\u017ce podskoczy\u0107. Dlatego nasza wsp\xf3\u0142praca nie ko\u0144czy si\u0119 na oddaniu strony:",benefits:[{icon:"3x",title:"3 Lata Opieki",description:"Masz u nas 3 darmowe pakiety poprawek do wykorzystania przez 36 miesi\u0119cy."},{icon:"\u26a1",title:"B\u0142yskawiczny Serwis",description:"Potrzebujesz zmiany? Piszesz e-mail, a my wprowadzamy poprawk\u0119 w kodzie."},{icon:"\ud83d\udcb0",title:"Uczciwe Stawki",description:"Po wykorzystaniu darmowych pakiet\xf3w, drobne zmiany to koszt rz\u0119du 10-50 z\u0142. Bez abonament\xf3w, bez naci\u0105gania."}]},materials:{title:"Jak Przygotowa\u0107 Materia\u0142y?",subtitle:"Twoja Checklista",intro:"Nie musisz by\u0107 copywriterem ani fotografem. Nasza strona jest elastyczna \u2013 dopasuje si\u0119 do tego, co masz. Je\u015bli brakuje Ci jakiej\u015b sekcji (np. cennika czy zespo\u0142u), po prostu j\u0105 ukryjemy, a layout nadal b\u0119dzie wygl\u0105da\u0142 perfekcyjnie.",sections:[{icon:"\ud83d\udccb",title:"Co Warto Przygotowa\u0107?",items:[{label:"Fundament (Hero & Domena)",points:["Wymy\u015bl chwytliwe has\u0142o (np. 'Twoje wspomnienia w najlepszym \u015bwietle').","Podaj 2-3 propozycje adresu strony (np. mojafirma.pl). Pami\u0119taj: kr\xf3tko i \u0142atwo do podyktowania. Unikaj nazw zastrze\u017conych marek!"]},{label:"To\u017csamo\u015b\u0107 (O nas & Zesp\xf3\u0142)",points:["Napisz kilka zda\u0144 o swojej pasji i tym, co Ci\u0119 wyr\xf3\u017cnia.","Poka\u017c 'ludzk\u0105 twarz' biznesu \u2013 prze\u015blij zdj\u0119cie przy pracy. Klienci kupuj\u0105 oczami, ale ufaj\u0105 ludziom, kt\xf3rych widz\u0105."]},{label:"Twoje Sukcesy (Statystyki & Portfolio)",points:["Pochwal si\u0119 liczbami (lata pracy, zadowoleni klienci) lub kluczowymi zaletami.","Wybierz do 12 najlepszych zdj\u0119\u0107 do galerii. Dzielimy je na kategorie (np. Biznes, Sesje, Projekty)."]},{label:"Konkrety (Us\u0142ugi & Cennik)",points:["Opisz kr\xf3tko do 10 us\u0142ug.","Podaj ceny lub pakiety. Je\u015bli wyceniasz indywidualnie \u2013 napiszemy o tym!"]},{label:"Kontakt & Social Media",points:["Przygotuj e-mail, telefon i linki do profili (Instagram, Facebook, TikTok itd.).","Sprawimy, \u017ce klient skontaktuje si\u0119 z Tob\u0105 jednym klikni\u0119ciem."]}]},{icon:"\ud83d\udc8e",title:"Nasze Wsparcie Kreatywne",highlight:!0,items:[{label:"Teksty",points:["Na podstawie kr\xf3tkiej ankiety ubierzemy Twoje my\u015bli w profesjonalne s\u0142owa."]},{label:"Grafiki AI",points:["Je\u015bli nie masz w\u0142asnych fotografii do t\u0142a lub sekcji 'O nas', wygenerujemy dla Ciebie unikalne, wysokiej jako\u015bci grafiki AI."]}]},{icon:"\u26a0\ufe0f",title:"Wa\u017cne Informacje Techniczne",items:[{label:"Szybko\u015b\u0107 Ponad Wszystko",points:["Limity zdj\u0119\u0107 (np. do 12 w galerii) stosujemy celowo. Dzi\u0119ki temu Twoja strona \u0142aduje si\u0119 b\u0142yskawicznie na ka\u017cdym smartfonie. W sieci: mniej znaczy wi\u0119cej!"]},{label:"Elastyczno\u015b\u0107",points:["Niezale\u017cnie od tego, czy wybierzesz 5, czy 10 sekcji, my zadbamy o zachowanie idealnych proporcji i estetyki."]},{label:"48h Roboczych",points:["Nasz zegar rusza, gdy otrzymamy od Ciebie komplet materia\u0142\xf3w. Pracujemy w dni robocze, aby dostarczy\u0107 Ci kod najwy\u017cszej jako\u015bci."]}]}]},cta:{primary:"Zacznij Wsp\xf3\u0142prac\u0119",secondary:"Wr\xf3\u0107 do Pyta\u0144"}},VE=()=>(0,Nw.jsxs)($E,{children:[(0,Nw.jsx)(FE,{children:BE.hero.title}),(0,Nw.jsx)(UE,{children:BE.hero.subtitle})]}),HE=Cx.div`
  display: flex;
  flex-direction: column;
  gap: clamp(60px, 10vw, 100px);
  margin-bottom: clamp(80px, 12vw, 120px);
`,WE=Cx.div`
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
`,GE=Cx.div`
  display: flex;
  align-items: center;
  gap: clamp(20px, 3vw, 30px);
`,KE=Cx.div`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: ${Nx.goldMain};
  line-height: 1;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  min-width: 60px;
  text-align: center;
  background: rgba(212, 175, 55, 0.1);
  padding: clamp(15px, 2vw, 25px);
  border-radius: 10px;
  border: 1px solid rgba(212, 175, 55, 0.2);
`,qE=Cx.div`
  padding: clamp(20px, 3vw, 30px);
  background: rgba(212, 175, 55, 0.05);
  border-radius: 10px;
  border-left: 3px solid ${Nx.goldMain};
  padding-left: clamp(25px, 4vw, 40px);
`,QE=Cx.h2`
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  color: ${Nx.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
  flex: 1;
`,YE=Cx.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  margin: 0 0 clamp(15px, 2vw, 20px) 0;
`,JE=Cx.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`,XE=Cx.div`
  padding: clamp(15px, 2.5vw, 20px);
  background: rgba(212, 175, 55, 0.08);
  border-radius: 8px;
  border-left: 3px solid ${Nx.goldMain};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    transform: translateX(5px);
  }
`,ZE=Cx.h4`
  color: ${Nx.goldMain};
  margin: 0 0 8px 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
`,ej=Cx.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 0.95rem);
  line-height: 1.6;
`,tj=Cx.div`
  margin-top: clamp(20px, 3vw, 30px);
  padding: clamp(15px, 2.5vw, 25px);
  background: rgba(212, 175, 55, 0.05);
  border-radius: 8px;
  border-top: 2px solid ${Nx.goldMain};
`,nj=Cx.h5`
  color: ${Nx.goldMain};
  margin: 0 0 8px 0;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`,rj=Cx.p`
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  line-height: 1.6;
`,ij=Cx.ul`
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
      color: ${Nx.goldMain};
      font-weight: 700;
    }
  }
`,aj=()=>(0,Nw.jsx)(HE,{children:BE.steps.map((e,t)=>(0,Nw.jsxs)(WE,{delay:.1*t,children:[(0,Nw.jsxs)(GE,{children:[(0,Nw.jsx)(KE,{children:e.number}),(0,Nw.jsx)(QE,{children:e.title})]}),(0,Nw.jsxs)(qE,{children:[(0,Nw.jsx)(YE,{children:e.content}),e.options&&(0,Nw.jsxs)(Nw.Fragment,{children:[(0,Nw.jsx)(JE,{children:e.options.map((e,t)=>(0,Nw.jsxs)(XE,{children:[(0,Nw.jsx)(ZE,{children:e.label}),(0,Nw.jsx)(ej,{children:e.description})]},t))}),e.note&&(0,Nw.jsxs)(tj,{children:[(0,Nw.jsx)(nj,{children:"Wa\u017cne"}),(0,Nw.jsx)(rj,{children:e.note})]})]}),e.sections&&(0,Nw.jsx)(JE,{children:e.sections.map((e,t)=>(0,Nw.jsxs)(XE,{children:[(0,Nw.jsx)(ZE,{children:e.label}),(0,Nw.jsx)(ej,{children:e.description})]},t))}),e.details&&(0,Nw.jsx)(JE,{children:e.details.map((e,t)=>(0,Nw.jsxs)(XE,{children:[(0,Nw.jsx)(ZE,{children:e.label}),(0,Nw.jsx)(ej,{children:e.description})]},t))}),e.deliverables&&(0,Nw.jsx)(ij,{children:e.deliverables.map((e,t)=>(0,Nw.jsx)("li",{children:e},t))})]})]},e.id))}),oj=Cx.section`
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
`,sj=Cx.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${Nx.goldMain};
  margin: 0 0 10px 0;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`,lj=Cx.p`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`,cj=Cx.p`
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin: 0 0 clamp(40px, 6vw, 60px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`,uj=Cx.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 6vw, 60px);
`,dj=Cx.div`
  padding: clamp(30px, 4vw, 40px);
  background: rgba(
    255,
    255,
    255,
    ${e=>e.highlight?"0.06":"0.02"}
  );
  border: 1px solid
    rgba(212, 175, 55, ${e=>e.highlight?"0.3":"0.15"});
  border-left: 4px solid ${Nx.goldMain};
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
`,hj=Cx.div`
  display: flex;
  align-items: center;
  gap: clamp(15px, 2vw, 25px);
  margin-bottom: clamp(20px, 3vw, 30px);
`,pj=Cx.span`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Nx.goldMain};
`,fj=Cx.h3`
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  color: ${Nx.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,mj=Cx.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
`,gj=Cx.div`
  padding: clamp(15px, 2.5vw, 20px);
  background: rgba(212, 175, 55, 0.04);
  border-radius: 8px;
  border-left: 2px solid rgba(212, 175, 55, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.08);
    border-left-color: ${Nx.goldMain};
  }
`,yj=Cx.h4`
  color: ${Nx.goldMain};
  margin: 0 0 clamp(10px, 1.5vw, 15px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
`,wj=Cx.ul`
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
      color: ${Nx.goldMain};
      font-weight: 700;
      font-size: 1.1em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`,bj=()=>(0,Nw.jsxs)(oj,{children:[(0,Nw.jsx)(sj,{children:BE.materials.title}),(0,Nw.jsx)(lj,{children:BE.materials.subtitle}),(0,Nw.jsx)(cj,{children:BE.materials.intro}),(0,Nw.jsx)(uj,{children:BE.materials.sections.map((e,t)=>(0,Nw.jsxs)(dj,{highlight:e.highlight,children:[(0,Nw.jsxs)(hj,{children:[(0,Nw.jsx)(pj,{children:e.icon}),(0,Nw.jsx)(fj,{children:e.title})]}),(0,Nw.jsx)(mj,{children:e.items.map((e,t)=>(0,Nw.jsxs)(gj,{children:[(0,Nw.jsx)(yj,{children:e.label}),(0,Nw.jsx)(wj,{children:e.points.map((e,t)=>(0,Nw.jsx)("li",{children:e},t))})]},t))})]},t))})]}),vj=Cx.section`
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
`,xj=Cx.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${Nx.goldMain};
  margin: 0 0 10px 0;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
`,kj=Cx.p`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`,zj=Cx.p`
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin: 0 0 clamp(40px, 6vw, 60px) 0;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,Sj=Cx.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(30px, 4vw, 50px);
`,_j=Cx.div`
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
`,Ej=Cx.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${Nx.goldMain};
  margin-bottom: clamp(15px, 2vw, 25px);
`,jj=Cx.h3`
  color: ${Nx.goldMain};
  margin: 0 0 clamp(12px, 2vw, 18px) 0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,Tj=Cx.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  line-height: 1.7;
`,Cj=()=>(0,Nw.jsxs)(vj,{children:[(0,Nw.jsx)(xj,{children:BE.guarantee.title}),(0,Nw.jsx)(kj,{children:BE.guarantee.subtitle}),(0,Nw.jsx)(zj,{children:BE.guarantee.description}),(0,Nw.jsx)(Sj,{children:BE.guarantee.benefits.map((e,t)=>(0,Nw.jsxs)(_j,{children:[(0,Nw.jsx)(Ej,{children:e.icon}),(0,Nw.jsx)(jj,{children:e.title}),(0,Nw.jsx)(Tj,{children:e.description})]},t))})]}),Ij=Cx.div`
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
`,Aj=Cx.button`
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
`,Pj=Cx(Aj)`
  background: linear-gradient(
    135deg,
    ${Nx.goldMain} 0%,
    #f1d592 100%
  );
  color: ${Nx.deepBlack};

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
`,Rj=(Cx(Aj)`
  background: transparent;
  color: ${Nx.goldMain};
  border: 2px solid ${Nx.goldMain};

  &:hover {
    background: rgba(212, 175, 55, 0.1);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
  }

  &:active {
    opacity: 0.8;
  }
`,()=>{const e=pe();return(0,Nw.jsx)(Ij,{children:(0,Nw.jsx)(Pj,{onClick:()=>e("/"),children:BE.cta.primary})})}),Nj=()=>(0,Nw.jsx)(LE,{children:(0,Nw.jsxs)(ME,{children:[(0,Nw.jsx)(VE,{}),(0,Nw.jsx)(aj,{}),(0,Nw.jsx)(bj,{}),(0,Nw.jsx)(Cj,{}),(0,Nw.jsx)(Rj,{})]})}),Dj=Cx.section`
  position: relative;
  z-index: 5;
  width: 100%;
  box-sizing: border-box;
`,Oj=Cx.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);

  @media (max-width: ${Rx.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`,Lj=Cx.div`
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
`,Mj=Cx.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${Nx.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,$j=Cx.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${Rx.tablet}px) {
    display: none;
  }
`,Fj=(Cx.section`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
  max-width: 1200px;
  margin: 0 auto;
`,Cx.div`
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

  @media (max-width: ${Rx.smallPhone-1}px) {
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
`),Uj=Cx.a`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
`,Bj=Cx.div`
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
      ${Nx.goldMain},
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
    border-color: ${Nx.goldMain};
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
`,Vj=Cx.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${Bj}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`,Hj=Cx.div`
  padding: clamp(12px, 2.5vw, 18px);
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
`,Wj=Cx.h3`
  font-size: clamp(0.95rem, 1.8vw, 1.15rem);
  color: ${Nx.goldMain};
  margin: 0 0 clamp(6px, 1.2vw, 10px) 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`,Gj=Cx.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  line-height: 1.5;
  margin: 0 0 auto 0;
  flex: 1;
  font-weight: 300;
`,Kj=Cx.div`
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
`,qj=Cx.span`
  font-size: clamp(1rem, 1.8vw, 1.3rem);
  color: ${Nx.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
`,Qj=Cx.button`
  padding: clamp(6px, 1.2vw, 10px) clamp(15px, 2.5vw, 25px);
  background: linear-gradient(
    135deg,
    ${Nx.goldMain} 0%,
    #f1d592 100%
  );
  color: ${Nx.deepBlack};
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
`,Yj=Cx.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(4px, 1vw, 8px);
`,Jj=Cx.div`
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
`,Xj=Cx.a`
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
    border-color: ${Nx.goldMain};
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
`,Zj=Cx.img`
  width: clamp(80px, 20vw, 120px);
  height: clamp(80px, 20vw, 120px);
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${Xj}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`,eT=Cx.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: clamp(8px, 1.5vw, 12px);
  min-width: 0;
`,tT=Cx.h3`
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: ${Nx.goldMain};
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`,nT=Cx.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  line-height: 1.5;
  margin: 0;
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,rT=Cx.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(10px, 2vw, 15px);
  padding-top: clamp(8px, 1.5vw, 12px);
  border-top: 1px solid rgba(212, 175, 55, 0.25);
`,iT=Cx.span`
  font-size: clamp(0.95rem, 1.8vw, 1.15rem);
  color: ${Nx.goldMain};
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
`,aT=Cx.button`
  padding: clamp(6px, 1.2vw, 10px) clamp(15px, 2.5vw, 25px);
  background: linear-gradient(
    135deg,
    ${Nx.goldMain} 0%,
    #f1d592 100%
  );
  color: ${Nx.deepBlack};
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
`;const oT="offers";async function sT(){if(!Aw)return[];const e=function(e,t){let n=[];for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];t instanceof Kg&&n.push(t),n=n.concat(i),function(e){const t=e.filter(e=>e instanceof Yg).length,n=e.filter(e=>e instanceof Qg).length;if(t>1||t>0&&n>0)throw new Ls(Os.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const o of n)e=o._apply(e);return e}(ig(Aw,oT),function(e){const t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc",n=Ng("orderBy",e);return Jg._create(n,t)}("createdAt","desc"));return(await ly(e)).docs.map(e=>({id:e.id,...e.data()}))}async function lT(e){if(!Aw)throw new Error("Firestore niedost\u0119pny");const t=await function(e,t){const n=hl(e.firestore,cg),r=ag(e),i=ty(e.converter,t);return cy(n,[Sg(zg(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,jd.exists(!1))]).then(()=>r)}(ig(Aw,oT),{...e,createdAt:Ug(),updatedAt:Ug()});return t.id}async function cT(e,t){if(!Aw)throw new Error("Firestore niedost\u0119pny");await function(e,t,n){e=hl(e,ng);const r=hl(e.firestore,cg),i=zg(r);let a;for(var o=arguments.length,s=new Array(o>3?o-3:0),l=3;l<o;l++)s[l-3]=arguments[l];return a="string"==typeof(t=Zt(t))||t instanceof pg?Tg(i,"updateDoc",e._key,t,n,s):jg(i,"updateDoc",e._key,t),cy(r,[a.toMutation(e._key,jd.exists(!0))])}(ag(Aw,oT,e),{...t,updatedAt:Ug()})}async function uT(e){if(!Aw)throw new Error("Firestore niedost\u0119pny");await function(e){return cy(hl(e.firestore,cg),[new Fd(e._key,jd.none())])}(ag(Aw,oT,e))}async function dT(e,t){if(!Pw)throw new Error("Storage niedost\u0119pny");const n=`${Date.now()}_${e.name}`,r=(i=`offers/${t}/${n}`,vw(Zt(Pw),i));var i;return await function(e,t,n){return gw(e=Zt(e),t,n)}(r,e),function(e){return yw(e=Zt(e))}(r)}const hT=[{id:1,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:2,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:3,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:4,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:5,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:6,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:7,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:8,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:9,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:10,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:11,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:12,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:13,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:14,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:15,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:16,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:17,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:18,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:19,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:20,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:21,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:22,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:23,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:24,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]},{id:25,title:"Strona Portfolio",shortDescription:"Prezentuj swoje prace i osi\u0105gni\u0119cia",price:"1490 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona portfolio do zaprezentowania swojej tw\xf3rczo\u015bci, prac i osi\u0105gni\u0119\u0107. Zawiera eleganck\u0105 galeri\u0119 z kategoryzacj\u0105, sekcj\u0119 o autorze, testimoniale od zadowolonych klient\xf3w oraz mo\u017cliwo\u015b\u0107 \u0142atwego kontaktu. Responsywna, szybka i SEO-optymalizowana.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Responsywna galeria prac","Kategoryzacja projekt\xf3w","Sekcja o autorze","Testimoniale klient\xf3w","Blog z case studies","Sertifikat SSL"]},{id:26,title:"Strona Us\u0142ug",shortDescription:"Katalog us\u0142ug, ceny i rezerwacja",price:"1290 z\u0142",image:"https://images.unsplash.com/photo-1487412992651-71a46a38447d?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna strona dla os\xf3b oferuj\u0105cych us\u0142ugi. Prezentuje kompletny katalog us\u0142ug, cennik, mo\u017cliwo\u015b\u0107 rezerwacji termin\xf3w w kalendarzu, opinie klient\xf3w oraz sekcj\u0119 FAQ z odpowiedziami na najcz\u0119stsze pytania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog us\u0142ug i ceny","System rezerwacji online","Harmonogram dost\u0119pno\u015bci","Opinie klient\xf3w","Sekcja FAQ","Newsletter"]},{id:27,title:"Strona Sklepu/Produkt\xf3w",shortDescription:"Katalog produkt\xf3w z filtrowaniem i koszykiem",price:"1890 z\u0142",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zaawansowana strona e-commerce do sprzeda\u017cy produkt\xf3w. Zawiera katalog z filtrowaniem zaawansowanym, galerie produkt\xf3w, szczeg\xf3\u0142owe opisy, system recenzji, koszyk zakup\xf3w i integracj\u0119 z popularnymi metodami p\u0142atno\u015bci.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog produkt\xf3w","Filtry zaawansowane","Galerie zdj\u0119\u0107","Recenzje u\u017cytkownik\xf3w","Koszyk zakup\xf3w","Integracja p\u0142atno\u015bci"]},{id:28,title:"Strona Biznesu/Us\u0142ugi",shortDescription:"Kompletna wizyt\xf3wka biznesu w sieci",price:"1390 z\u0142",image:"https://images.unsplash.com/photo-1560750588-8532b8e3a869?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Nowoczesna strona biznesowa z pe\u0142n\u0105 informacj\u0105 o firmie, zespole, ofercie, osi\u0105gni\u0119ciach, kontaktem oraz wiadomo\u015bciami. Idealna dla lokalnych us\u0142ug, gabinet\xf3w czy ma\u0142ych firm chc\u0105cych wzmocni\u0107 swoj\u0105 obecno\u015b\u0107 online.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Informacja o firmie","Profil zespo\u0142u","Galeria prac","Osi\u0105gni\u0119cia i certyfikaty","Blog i aktualno\u015bci","Mapa i dane kontaktowe"]},{id:29,title:"Strona Edukacyjna",shortDescription:"Kursy, webinary, materia\u0142y kt\xf3re oferujesz",price:"1690 z\u0142",image:"https://images.unsplash.com/photo-1519671482677-e8c01c77e48f?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop"],fullDescription:"Profesjonalna platforma do oferowania kurs\xf3w, webinar\xf3w, materia\u0142\xf3w edukacyjnych czy szkole\u0144. Zawiera katalog oferty edukacyjnej, mo\u017cliwo\u015b\u0107 rezerwacji, sekcj\u0119 testimoniali od uczestnik\xf3w, blog z warto\u015bciowymi tre\u015bciami oraz mo\u017cliwo\u015b\u0107 sprzeda\u017cy dost\u0119pu do kurs\xf3w.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Katalog kurs\xf3w/us\u0142ug","Opis metodyki","Opinie absolut\xf3w","System rezerwacji","Blog edukacyjny","Materia\u0142y do pobrania"]},{id:30,title:"Landing Page",shortDescription:"Minimalistyczna strona Single Page do promocji",price:"1590 z\u0142",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1540880033063-d8505078519b?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"],fullDescription:"Zwarta, akcyjna strona jednostronicowa (landing page) do promowania konkretnego produktu, us\u0142ugi lub kampanii. Zawiera hero section, zalet\u0119 oferty, testimoniale, call-to-action i formularz kontaktowy. Optymalizowana do konwersji i szybko\u015bci \u0142adowania.",youtubeUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",features:["Hero section pami\u0119tny","Sekcja korzy\u015bci","Testimoniale","Call-to-action","Formularz kontaktowy","Optymalizacja konwersji"]}],pT="Nasze Projekty",fT="Odkryj gotowe szablony stron,kt\xf3re mog\u0105 transformowa\u0107 Twoj\u0105 mark\u0119",mT="\u2190 Wr\xf3\u0107 do ofert",gT="Preview szablonu",yT="O szablonie",wT="Szablon zawiera:";function bT(e){const[t,n]=(0,r.useState)(null),[i,a]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{let t=!1;return(async()=>{const r=Number(e);if(!isNaN(r)){const e=hT.find(e=>e.id===r);if(e)return void(t||(n(e),a(!1)))}try{const r=await async function(e){if(!Aw)return null;const t=await sy(ag(Aw,oT,e));return t.exists()?{id:t.id,...t.data()}:null}(String(e));t||n(r)}catch{t||n(null)}t||a(!1)})(),()=>{t=!0}},[e]),{offer:t,loading:i}}const vT=Cx.div`
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
`,xT=Cx.button`
  flex-shrink: 0;
  width: clamp(35px, 4vw, 48px);
  height: clamp(35px, 4vw, 48px);
  border-radius: 8px;
  background: ${e=>e.active?`linear-gradient(135deg, ${Nx.goldMain} 0%, #f1d592 100%)`:"rgba(46, 8, 16, 0.6)"};
  color: ${e=>e.active?Nx.deepBlack:Nx.goldMain};
  border: 2px solid
    ${e=>e.active?Nx.goldMain:"rgba(212, 175, 55, 0.4)"};
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
    border-color: ${Nx.goldMain};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: rgba(46, 8, 16, 0.4);
  }
`,kT=Cx.input`
  width: clamp(50px, 8vw, 70px);
  height: clamp(35px, 4vw, 48px);
  border: 2px solid rgba(212, 175, 55, 0.4);
  border-radius: 8px;
  background: rgba(46, 8, 16, 0.6);
  color: ${Nx.goldMain};
  text-align: center;
  font-size: clamp(0.65rem, 1rem, 0.8rem);
  font-weight: 600;
  padding: clamp(6px, 1vw, 10px);
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${Nx.goldMain};
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
`,zT=Cx.span`
  font-size: clamp(0.8rem, 1.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  white-space: nowrap;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.5px;
`,ST=Cx.div`
  width: 1px;
  height: clamp(20px, 2vw, 30px);
  background: rgba(212, 175, 55, 0.2);
`,_T=e=>{let{currentPage:t,totalPages:n,onPageChange:i}=e;const[a,o]=(0,r.useState)(""),s=e=>{const t=e.target.value.trim();if(""===t)return void o("");const r=parseInt(t,10);!isNaN(r)&&r>=1&&r<=n?(i(r),o("")):r>n?(i(n),o("")):r<1&&(i(1),o(""))};return(0,Nw.jsxs)(vT,{children:[(0,Nw.jsx)(xT,{onClick:()=>{i(1)},disabled:1===t,"aria-label":"Pierwsza strona",title:"Pierwsza strona",children:(0,Nw.jsx)(Sk,{})}),(0,Nw.jsx)(xT,{onClick:()=>{t>1&&i(t-1)},disabled:1===t,"aria-label":"Poprzednia strona",title:"Poprzednia strona",children:(0,Nw.jsx)(Pk,{})}),(0,Nw.jsx)(ST,{}),(0,Nw.jsxs)(zT,{children:[(0,Nw.jsx)("span",{children:t}),(0,Nw.jsx)("span",{style:{margin:"0 4px"},children:"/"}),(0,Nw.jsx)("span",{children:n})]}),(0,Nw.jsx)(kT,{type:"number",placeholder:"Id\u017a do",value:a,onChange:e=>o(e.target.value),onBlur:s,onKeyPress:e=>{"Enter"===e.key&&s(e)},min:"1",max:n,"aria-label":"Wpisz numer strony",title:"Wpisz numer strony i naci\u015bnij Enter"}),(0,Nw.jsx)(ST,{}),(0,Nw.jsx)(xT,{onClick:()=>{t<n&&i(t+1)},disabled:t===n,"aria-label":"Nast\u0119pna strona",title:"Nast\u0119pna strona",children:(0,Nw.jsx)(Ak,{})}),(0,Nw.jsx)(xT,{onClick:()=>{i(n)},disabled:t===n,"aria-label":"Ostatnia strona",title:"Ostatnia strona",children:(0,Nw.jsx)(zk,{})})]})},ET=Cx.div`
  display: flex;
  gap: clamp(8px, 1.5vw, 12px);
  margin-bottom: 0;
  justify-content: flex-end;
  padding-right: clamp(10px, 2vw, 30px);
`,jT=Cx.button`
  width: clamp(40px, 8vw, 50px);
  height: clamp(40px, 8vw, 50px);
  border-radius: 10px;
  border: 2px solid
    ${e=>e.active?Nx.goldMain:"rgba(212, 175, 55, 0.3)"};
  background: ${e=>e.active?`linear-gradient(135deg, ${Nx.goldMain} 0%, #f1d592 100%)`:"rgba(46, 8, 16, 0.5)"};
  color: ${e=>e.active?Nx.deepBlack:Nx.goldMain};
  font-size: clamp(1rem, 2vw, 1.3rem);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${Nx.goldMain};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`,TT=e=>{let{viewMode:t,onViewModeChange:n}=e;return(0,Nw.jsxs)(ET,{children:[(0,Nw.jsx)(jT,{onClick:()=>n("grid"),active:"grid"===t,"aria-label":"Widok kafelk\xf3w",title:"Widok kafelk\xf3w",children:(0,Nw.jsx)(kk,{})}),(0,Nw.jsx)(jT,{onClick:()=>n("list"),active:"list"===t,"aria-label":"Widok listy",title:"Widok listy",children:(0,Nw.jsx)(jk,{})})]})},CT=()=>{const{offers:e,loading:t}=function(){const[e,t]=(0,r.useState)([]),[n,i]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{let e=!1;return(async()=>{try{const n=await sT();e||t(n.length>0?n:hT)}catch{e||t(hT)}e||i(!1)})(),()=>{e=!0}},[]),{offers:e,loading:n}}(),[n,i]=(0,r.useState)(1),[a,o]=(0,r.useState)(12),[s,l]=(0,r.useState)(()=>{if("undefined"!==typeof window){return localStorage.getItem("offerViewMode")||"grid"}return"grid"}),[c,u]=(0,r.useState)(!1);(0,r.useEffect)(()=>{localStorage.setItem("offerViewMode",s)},[s]),(0,r.useEffect)(()=>{const e=()=>{const e=window.innerWidth<820;u(e),o(e?6:12)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.useEffect)(()=>{window.scrollTo({top:0,behavior:"smooth"})},[n]);const d=Math.ceil(e.length/a),h=(n-1)*a,p=h+a,f=e.slice(h,p);return(0,Nw.jsxs)(Yj,{children:[(0,Nw.jsx)(TT,{viewMode:s,onViewModeChange:l}),t?(0,Nw.jsx)("div",{style:{padding:"48px 0",textAlign:"center",color:"rgba(255,255,255,0.5)"},children:"\u0141adowanie ofert\u2026"}):"grid"===s?(0,Nw.jsx)(Fj,{children:f.map(e=>(0,Nw.jsx)(Uj,{href:`/offer/${e.id}`,target:c?void 0:"_blank",rel:c?void 0:"noopener noreferrer",children:(0,Nw.jsxs)(Bj,{children:[(0,Nw.jsx)(Vj,{src:e.image,alt:e.title}),(0,Nw.jsxs)(Hj,{children:[(0,Nw.jsx)(Wj,{children:e.title}),(0,Nw.jsx)(Gj,{children:e.shortDescription}),(0,Nw.jsxs)(Kj,{children:[(0,Nw.jsx)(qj,{children:e.price}),(0,Nw.jsx)(Qj,{children:"Szczeg\xf3\u0142y"})]})]})]})},e.id))}):(0,Nw.jsx)(Jj,{children:f.map(e=>(0,Nw.jsxs)(Xj,{href:`/offer/${e.id}`,target:c?void 0:"_blank",rel:c?void 0:"noopener noreferrer",children:[(0,Nw.jsx)(Zj,{src:e.image,alt:e.title}),(0,Nw.jsxs)(eT,{children:[(0,Nw.jsx)(tT,{children:e.title}),(0,Nw.jsx)(nT,{children:e.shortDescription}),(0,Nw.jsxs)(rT,{children:[(0,Nw.jsx)(iT,{children:e.price}),(0,Nw.jsx)(aT,{children:"Szczeg\xf3\u0142y"})]})]})]},e.id))}),(0,Nw.jsx)(_T,{currentPage:n,totalPages:d,onPageChange:e=>{i(e)}})]})},IT=Cx.div`
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
`,AT=Cx.button`
  background: transparent;
  border: 2px solid ${Nx.goldMain};
  color: ${Nx.goldMain};
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
`,PT=Cx.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 7vw, 70px);
`,RT=(Cx.div`
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
`,Cx.div`
  text-align: center;
  padding: clamp(40px, 8vw, 80px);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${Nx.goldMain};
`),NT=Cx.section`
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
`,DT=Cx.div`
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
      ${Nx.goldMain} 50%,
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
`,OT=Cx.h1`
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: ${Nx.goldMain};
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
`,LT=Cx.p`
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
    background: ${Nx.goldMain};
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
`,MT=Cx.div`
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
      ${Nx.goldMain} 0%,
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
`,$T=Cx.span`
  font-size: clamp(1.3rem, 2.8vw, 2rem);
  font-weight: 700;
  color: ${Nx.goldMain};
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 821px) {
    font-size: clamp(0.95rem, 2vw, 1.3rem);
    letter-spacing: 0.6px;
  }
`,FT=(Cx.img`
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
`,Cx.div`
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
`),UT=Cx.div`
  position: relative;
  display: block;
  margin: 0 auto clamp(30px, 5vw, 50px) auto;
  width: fit-content;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
`,BT=Cx.div`
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
`,VT=Cx.span`
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
`,HT=Cx.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: rgba(212, 175, 55, 0.9);
  border: 2px solid ${Nx.goldMain};
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
    background: ${Nx.goldMain};
    transform: scale(1.1);
  }

  @media (max-width: 821px) {
    width: 35px;
    height: 35px;
    bottom: 12px;
    right: 12px;
    font-size: 1rem;
  }
`,WT=Cx.img`
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
`,GT=Cx.div`
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
`,KT=Cx.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid
    ${e=>e.isActive?Nx.goldMain:"rgba(212, 175, 55, 0.2)"};
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${e=>e.isActive?1:.6};
  box-shadow: ${e=>e.isActive?"0 8px 20px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.2)":"0 4px 12px rgba(0, 0, 0, 0.2)"};
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;

  &:hover {
    border-color: ${Nx.goldMain};
    opacity: 1;
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
  }

  @media (max-width: 821px) {
    height: 55px;
    border-radius: 8px;
    border: 2px solid
      ${e=>e.isActive?Nx.goldMain:"rgba(212, 175, 55, 0.2)"};
    box-shadow: ${e=>e.isActive?"0 6px 16px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(212, 175, 55, 0.2)":"0 3px 10px rgba(0, 0, 0, 0.25), inset 0 0.5px 0 rgba(212, 175, 55, 0.05)"};

    &:hover {
      transform: scale(1.08) translateY(-2px);
      box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
    }
  }
`,qT=Cx.span`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: ${Nx.goldMain};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.3);
`,QT=Cx.div`
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
`,YT=Cx.div`
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
`,JT=Cx.img`
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
`,XT=Cx.span`
  position: fixed;
  top: 120px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: ${Nx.goldMain};
  padding: 10px 18px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.5);
  z-index: 999999;
`,ZT=Cx.button`
  position: absolute;
  top: 50%;
  ${e=>e.left?"left: 20px;":"right: 20px;"}
  transform: translateY(-50%);
  background: rgba(212, 175, 55, 0.2);
  border: 2px solid ${Nx.goldMain};
  color: ${Nx.goldMain};
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
`,eC=Cx.button`
  position: fixed;
  top: 120px;
  right: 20px;
  background: rgba(212, 175, 55, 0.2);
  border: 2px solid ${Nx.goldMain};
  color: ${Nx.goldMain};
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
`,tC=e=>{let{images:t,title:n}=e;const[i,a]=(0,r.useState)(0),[o,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!o)return;const e=e=>{"ArrowLeft"===e.key?a(e=>(e-1+t.length)%t.length):"ArrowRight"===e.key?a(e=>(e+1)%t.length):"Escape"===e.key&&s(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o,t.length]),t&&0!==t.length?(0,Nw.jsxs)(Nw.Fragment,{children:[(0,Nw.jsxs)(FT,{children:[(0,Nw.jsxs)(UT,{onContextMenu:e=>e.preventDefault(),onTouchStart:e=>{e.touches.length>1&&e.preventDefault()},children:[(0,Nw.jsx)(WT,{src:t[i],alt:`${n} - zdj\u0119cie ${i+1}`,onClick:()=>s(!0),onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault(),style:{cursor:"pointer",userSelect:"none"}}),(0,Nw.jsx)(BT,{children:(0,Nw.jsx)(VT,{children:"www.studioklara.pl"})}),(0,Nw.jsx)(HT,{onClick:()=>s(!0),children:"\u26f6"})]}),(0,Nw.jsx)(GT,{children:t.map((e,t)=>(0,Nw.jsx)(KT,{src:e,alt:`Miniatura ${t+1}`,isActive:i===t,onClick:()=>a(t),onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault()},t))}),(0,Nw.jsxs)(qT,{children:[i+1," / ",t.length]})]}),o&&(0,Nw.jsxs)(QT,{onClick:()=>s(!1),children:[(0,Nw.jsxs)(YT,{onClick:e=>e.stopPropagation(),children:[(0,Nw.jsxs)(UT,{style:{margin:0,width:"100%",height:"100%",maxHeight:"none"},children:[(0,Nw.jsx)(JT,{src:t[i],alt:`${n} - ${i+1}`,onContextMenu:e=>e.preventDefault(),onDragStart:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onCut:e=>e.preventDefault()}),(0,Nw.jsx)(BT,{style:{opacity:.35},children:(0,Nw.jsx)(VT,{children:"www.studioklara.pl"})})]}),(0,Nw.jsxs)(XT,{children:[i+1," / ",t.length]}),(0,Nw.jsx)(ZT,{left:!0,onClick:()=>a(e=>(e-1+t.length)%t.length),children:"\u2039"}),(0,Nw.jsx)(ZT,{onClick:()=>a(e=>(e+1)%t.length),children:"\u203a"})]}),(0,Nw.jsx)(eC,{onClick:()=>s(!1),children:"\u2715"})]})]}):null},nC=e=>{let{title:t,subtitle:n,price:r,images:i}=e;return(0,Nw.jsxs)(NT,{children:[(0,Nw.jsxs)(DT,{children:[(0,Nw.jsx)(OT,{children:t}),(0,Nw.jsx)(LT,{children:n}),r&&(0,Nw.jsx)(MT,{children:(0,Nw.jsx)($T,{children:r})})]}),(0,Nw.jsx)(tC,{images:i,title:t})]})},rC=Cx.section`
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
`,iC=Cx.h2`
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  color: ${Nx.goldMain};
  margin: 0 0 clamp(20px, 3vw, 35px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-style: italic;
`,aC=(Cx.p`
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.9;
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.3px;
`,Cx.section`
  animation: fadeInUp 0.6s ease-out 0.3s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(20px, 3vw, 30px);
  border-radius: 15px;
  border: 1px solid rgba(212, 175, 55, 0.1);

  ${iC} {
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    margin: 0 0 clamp(15px, 2vw, 20px) 0;
  }
`),oC=Cx.div`
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
`,sC=Cx.iframe`
  display: block;
  border-radius: 13px;
  width: 100%;
  height: 100%;
  border: none;
`,lC=e=>{let{title:t,youtubeUrl:n}=e;return(0,Nw.jsxs)(aC,{children:[(0,Nw.jsx)(iC,{children:t}),(0,Nw.jsx)(oC,{children:(0,Nw.jsx)(sC,{src:n,title:t,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})},cC=Cx.section`
  animation: fadeInUp 0.6s ease-out 0.4s both;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    transparent 100%
  );
  padding: clamp(30px, 4.5vw, 45px);
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.1);
`,uC=Cx.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(20px, 3vw, 30px);
`,dC=Cx.li`
  display: flex;
  align-items: flex-start;
  gap: clamp(15px, 3vw, 20px);
  padding: clamp(20px, 3vw, 28px);
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.08) 0%,
    rgba(212, 175, 55, 0.03) 100%
  );
  border-left: 4px solid ${Nx.goldMain};
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
`,hC=Cx.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: clamp(30px, 4vw, 40px);
  width: clamp(30px, 4vw, 40px);
  height: clamp(30px, 4vw, 40px);
  background: ${Nx.goldMain};
  color: ${Nx.deepBlack};
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.2em;
  flex-shrink: 0;
`,pC=Cx.span`
  flex: 1;
`,fC=e=>{let{title:t,features:n}=e;return(0,Nw.jsxs)(cC,{children:[(0,Nw.jsx)(iC,{children:t}),(0,Nw.jsx)(uC,{children:n.map((e,t)=>(0,Nw.jsxs)(dC,{children:[(0,Nw.jsx)(hC,{children:"\u2713"}),(0,Nw.jsx)(pC,{children:e})]},t))})]})},mC=Cx.section`
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
      ${Nx.goldMain},
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
`,gC=Cx.h3`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${Nx.goldMain};
  margin: 0 0 clamp(35px, 6vw, 50px) 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
  line-height: 1.3;
`,yC=Cx.div`
  display: flex;
  gap: clamp(15px, 3vw, 30px);
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,wC=Cx.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: clamp(14px, 3vw, 18px) clamp(35px, 6vw, 60px);
  background: linear-gradient(
    135deg,
    ${Nx.goldMain} 0%,
    #f1d592 100%
  );
  color: ${Nx.deepBlack};
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
`,bC=Cx(wC)`
  background: transparent;
  color: ${Nx.goldMain};
  border: 2px solid ${Nx.goldMain};
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.15);

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.3);
  }
`,vC=(Cx.div`
  text-align: center;
  padding: clamp(40px, 8vw, 80px);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${Nx.goldMain};
`,e=>{var t;let{title:n}=e;const r=null===(t=Nk.find(e=>"Allegro"===e.label))||void 0===t?void 0:t.url;return(0,Nw.jsxs)(mC,{children:[(0,Nw.jsx)(gC,{children:"Interesuje Ci\u0119 ten szablon?"}),(0,Nw.jsxs)(yC,{children:[(0,Nw.jsx)(wC,{href:`mailto:${nz}?subject=Zainteresowanie szablonk\u0105: ${n}`,children:"Napisz email"}),(0,Nw.jsx)(bC,{href:r,target:"_blank",rel:"noopener noreferrer",children:"Zakup Allegro"})]})]})}),xC=e=>{let{offerId:t}=e;const n=pe(),{offer:r,loading:i}=bT(t);return i?(0,Nw.jsx)(IT,{children:(0,Nw.jsx)("div",{style:{padding:"48px 0",textAlign:"center",color:"rgba(255,255,255,0.5)"},children:"\u0141adowanie\u2026"})}):r?(0,Nw.jsxs)(IT,{children:[(0,Nw.jsx)(AT,{onClick:()=>n(-1),children:mT}),(0,Nw.jsx)(nC,{title:r.title,subtitle:r.shortDescription,price:r.price,images:r.images}),(0,Nw.jsxs)(PT,{children:[(0,Nw.jsx)(lC,{title:gT,youtubeUrl:r.youtubeUrl}),(0,Nw.jsx)(rC,{title:yT,description:r.fullDescription}),(0,Nw.jsx)(fC,{title:wT,features:r.features}),(0,Nw.jsx)(vC,{title:r.title})]})]}):(0,Nw.jsx)(IT,{children:(0,Nw.jsx)(RT,{children:"Szablon nie znaleziony"})})},kC=()=>{const{id:e}=fe();return e?(0,Nw.jsx)(xC,{offerId:e}):(0,Nw.jsx)(Dj,{children:(0,Nw.jsxs)(Oj,{children:[(0,Nw.jsxs)(Lj,{children:[(0,Nw.jsx)(Mj,{children:pT}),(0,Nw.jsx)($j,{children:fT})]}),(0,Nw.jsx)(CT,{})]})})},zC=Cx.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,SC=Cx.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: clamp(30px, 5vw, 60px) clamp(10px, 2vw, 30px);

  @media (max-width: ${Rx.tablet}px) {
    padding-top: clamp(70px, 10vw, 90px);
  }
`,_C=Cx.div`
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
`,EC=Cx.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: "Cormorant Garamond", serif;
  color: ${Nx.white};
  margin: 0 0 clamp(15px, 2vw, 25px) 0;
  font-weight: 700;
  letter-spacing: clamp(1px, 0.5vw, 2px);
`,jC=Cx.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${Rx.tablet}px) {
    display: none;
  }
`,TC=Cx.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(4px, 1vw, 8px);
  margin-top: clamp(20px, 3vw, 40px);
`,CC=Cx.div`
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
`,IC=Cx.div`
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

  @media (max-width: ${Rx.tablet}px) {
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
`,AC=Cx.img`
  width: 100%;
  height: 193px;
  object-fit: cover;
  display: block;
`,PC=Cx.div`
  padding: clamp(16px, 3.2vw, 24px);
  display: flex;
  flex-direction: column;
  flex: 1;
`,RC=Cx.span`
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 9px;
`,NC=Cx.h3`
  font-size: clamp(0.89rem, 1.6vw, 1.13rem);
  color: ${Nx.white};
  margin: 0 0 9px 0;
  font-weight: 600;
  line-height: 1.4;
  font-family: "Cormorant Garamond", serif;
`,DC=Cx.p`
  font-size: 0.77rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 13px;

  @media (max-width: ${Rx.tablet}px) {
    display: none;
  }
`,OC=Cx.span`
  font-size: 0.72rem;
  color: ${Nx.gold};
  font-weight: 600;
  letter-spacing: 0.8px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 7px;

  ${IC}:hover & {
    gap: 12px;
  }

  &::after {
    content: "→";
    transition: transform 0.3s ease;
  }

  ${IC}:hover &::after {
    transform: translateX(4px);
  }
`,LC=Cx.div`
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
`,MC=Cx.a`
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
`,$C=Cx.img`
  width: clamp(80px, 20vw, 120px);
  height: clamp(80px, 20vw, 120px);
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  filter: brightness(0.9) contrast(1.1);

  ${MC}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`,FC=Cx.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: clamp(8px, 1.5vw, 12px);
  min-width: 0;
`,UC=Cx.span`
  font-size: clamp(0.7rem, 1.2vw, 0.8rem);
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 0.7px;
  text-transform: uppercase;
`,BC=Cx.h3`
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
`,VC=Cx.p`
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
`,HC=Cx.span`
  font-size: clamp(0.65rem, 1rem, 0.8rem);
  color: ${Nx.gold};
  font-weight: 600;
  letter-spacing: 0.7px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;

  ${MC}:hover & {
    gap: 10px;
  }

  &::after {
    content: "→";
    transition: transform 0.3s ease;
  }

  ${MC}:hover &::after {
    transform: translateX(3px);
  }
`;const WC=function(){const[e,t]=(0,r.useState)(1),[n,i]=(0,r.useState)(6),[a,o]=(0,r.useState)(()=>{if("undefined"!==typeof window){return localStorage.getItem("blogViewMode")||"grid"}return"grid"});(0,r.useEffect)(()=>{localStorage.setItem("blogViewMode",a)},[a]),(0,r.useEffect)(()=>{const e=()=>{const e=window.innerWidth<820;i(e?4:6)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.useEffect)(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]);const s=Math.ceil(KS.length/n),l=(e-1)*n,c=l+n,u=KS.slice(l,c);return(0,Nw.jsx)(zC,{children:(0,Nw.jsxs)(SC,{children:[(0,Nw.jsxs)(_C,{children:[(0,Nw.jsx)(EC,{children:"Aktualno\u015bci"}),(0,Nw.jsx)(jC,{children:"B\u0105d\u017a na bie\u017c\u0105co z najnowszymi wpisami z naszego bloga. Dzielimy si\u0119 wiedz\u0105 o technologii, designie i procesie tworzenia luksusowych do\u015bwiadcze\u0144 cyfrowych."})]}),(0,Nw.jsxs)(TC,{children:[(0,Nw.jsx)(TT,{viewMode:a,onViewModeChange:o}),"grid"===a?(0,Nw.jsx)(CC,{children:u.map(e=>(0,Nw.jsx)(IC,{children:(0,Nw.jsxs)(wt,{to:`/blog/${e.id}`,children:[(0,Nw.jsx)(AC,{src:e.image,alt:e.title}),(0,Nw.jsxs)(PC,{children:[(0,Nw.jsx)(RC,{children:e.date}),(0,Nw.jsx)(NC,{children:e.title}),(0,Nw.jsx)(DC,{children:e.excerpt}),(0,Nw.jsx)(OC,{children:"Czytaj wi\u0119cej"})]})]})},e.id))}):(0,Nw.jsx)(LC,{children:u.map(e=>(0,Nw.jsxs)(MC,{to:`/blog/${e.id}`,as:wt,children:[(0,Nw.jsx)($C,{src:e.image,alt:e.title}),(0,Nw.jsxs)(FC,{children:[(0,Nw.jsx)(UC,{children:e.date}),(0,Nw.jsx)(BC,{children:e.title}),(0,Nw.jsx)(VC,{children:e.excerpt}),(0,Nw.jsx)(HC,{children:"Czytaj wi\u0119cej"})]})]},e.id))})]}),(0,Nw.jsx)(_T,{currentPage:e,totalPages:s,onPageChange:e=>{t(e)}})]})})},GC=Cx.section`
  position: relative;
  z-index: 5;
  width: 100%;
`,KC=Cx.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 50px);
`,qC=Cx.div`
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
`,QC=Cx.h1`
  font-size: clamp(2rem, 6vw, 3rem);
  font-family: "Cormorant Garamond", serif;
  color: ${Nx.white};
  margin: 0 0 20px 0;
  font-weight: 700;
  line-height: 1.3;
`,YC=Cx.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-weight: 500;
  letter-spacing: 1px;
`,JC=Cx.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: clamp(40px, 8vw, 60px);
  display: block;
`,XC=Cx.div`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  line-height: 1.8;
  letter-spacing: 0.3px;

  h2 {
    font-size: clamp(1.4rem, 3vw, 1.8rem);
    font-family: "Cormorant Garamond", serif;
    color: ${Nx.white};
    margin: clamp(40px, 6vw, 60px) 0 20px 0;
    font-weight: 600;
    line-height: 1.3;
  }

  h3 {
    font-size: clamp(1.1rem, 2.2vw, 1.4rem);
    color: ${Nx.white};
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
    color: ${Nx.gold};
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
      color: ${Nx.gold};
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
    color: ${Nx.gold};
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  blockquote {
    border-left: 4px solid ${Nx.gold};
    padding-left: 20px;
    margin: 30px 0;
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
  }
`,ZC=Cx.div`
  margin-top: clamp(60px, 10vw, 100px);
  padding-top: clamp(40px, 6vw, 60px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,eI=Cx.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${Nx.gold};
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
`;const tI=function(e){let{article:t,children:n}=e;return(0,Nw.jsx)(GC,{children:(0,Nw.jsxs)(KC,{children:[(0,Nw.jsxs)(qC,{children:[(0,Nw.jsx)(QC,{children:t.title}),(0,Nw.jsx)(YC,{children:t.date})]}),(0,Nw.jsx)(JC,{src:t.image,alt:t.title}),(0,Nw.jsx)(XC,{children:n}),(0,Nw.jsx)(ZC,{children:(0,Nw.jsx)(wt,{to:"/blog",children:(0,Nw.jsx)(eI,{children:"Wr\xf3\u0107 do aktualno\u015bci"})})})]})})};const nI=function(){const e=KS.find(e=>"startujemy-z-aktualnosciami"===e.id);return(0,Nw.jsxs)(tI,{article:e,children:[(0,Nw.jsx)("h1",{children:"Startujemy z Aktualno\u015bciami \u2013 Sekcja tworzona z my\u015bl\u0105 o Was"}),(0,Nw.jsx)("p",{children:(0,Nw.jsx)("strong",{children:"30 stycznia 2026"})}),(0,Nw.jsx)("p",{children:"Kilka miesi\u0119cy temu zadali\u015bmy sobie kluczowe pytanie: \u201eCzego naprawd\u0119 chc\u0105 dowiedzie\u0107 si\u0119 nasi klienci?\u201d. Odpowied\u017a by\u0142a jednoznaczna \u2013 szukacie rzetelnej wiedzy o trendach w webdesignie, technologiach, kt\xf3rych u\u017cywamy, oraz wgl\u0105du w procesy, kt\xf3re stoj\u0105 za sukcesem Waszych marek."}),(0,Nw.jsx)("h2",{children:"Dlaczego zaczynamy w\u0142a\u015bnie teraz?"}),(0,Nw.jsx)("p",{children:"Studio Klara Queen od pocz\u0105tku stawia\u0142o na jako\u015b\u0107. Przez d\u0142ugi czas s\u0105dzili\u015bmy, \u017ce najlepiej przem\xf3wi za nas portfolio i opinie zadowolonych klient\xf3w. To prawda, ale w dzisiejszych czasach to tylko cz\u0119\u015b\u0107 historii."}),(0,Nw.jsxs)("p",{children:["W 2026 roku obecno\u015b\u0107 w sieci to co\u015b wi\u0119cej ni\u017c pi\u0119kna witryna."," ",(0,Nw.jsx)("strong",{children:"To nieustanny dialog"}),". To pokazywanie swojej ekspertyzy w praktyce, edukacja i autentyczne dzielenie si\u0119 wiedz\u0105 oraz procesem tw\xf3rczym."]}),(0,Nw.jsx)("p",{children:"Nasi klienci regularnie zadaj\u0105 nam pytania:"}),(0,Nw.jsxs)("ul",{children:[(0,Nw.jsx)("li",{children:"\u201eIle czasu realnie trwa stworzenie profesjonalnej strony?\u201d"}),(0,Nw.jsx)("li",{children:"\u201eDlaczego stawiacie na React, a nie na inne rozwi\u0105zania?\u201d"}),(0,Nw.jsx)("li",{children:"\u201eJak w praktyce dbacie o bezpiecze\u0144stwo moich danych?\u201d"}),(0,Nw.jsx)("li",{children:"\u201eCzy rzeczywi\u015bcie mo\u017cna stworzy\u0107 stron\u0119 premium w 48 godzin?\u201d"})]}),(0,Nw.jsx)("p",{children:"Zamiast odpowiada\u0107 ka\u017cdemu z osobna, postanowili\u015bmy stworzy\u0107 tutaj przestrze\u0144, kt\xf3ra stanie si\u0119 baz\u0105 wiedzy dla ka\u017cdego, kto ceni jako\u015b\u0107 w internecie."}),(0,Nw.jsx)("h2",{children:"Co znajdziesz w sekcji Aktualno\u015bci?"}),(0,Nw.jsx)("p",{children:"Ka\u017cdy artyku\u0142 b\u0119dzie oparty na rzeczywistych sytuacjach z \u017cycia naszego studia oraz wiedzy, kt\xf3r\u0105 gromadzili\u015bmy przez lata intensywnej pracy."}),(0,Nw.jsx)("p",{children:(0,Nw.jsx)("strong",{children:"B\u0119dziemy pisa\u0107 o:"})}),(0,Nw.jsxs)("ol",{children:[(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Case Studies"})," \u2013 analiza konkretnych projekt\xf3w, wyniki, wyzwania i rozwi\u0105zania, kt\xf3re przynios\u0142y realne efekty."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Technologia"})," \u2013 dlaczego wybieramy czysty kod zamiast gotowych system\xf3w CMS, jak optymalizujemy szybko\u015b\u0107 i gwarantujemy bezpiecze\u0144stwo."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Proces"})," \u2013 jak naprawd\u0119 pracujemy, ile trwa ka\u017cdy etap i co dzieje si\u0119 \u201eza kulisami\u201d Twojego projektu."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Nowo\u015bci i Trendy"})," \u2013 rola AI w designie, optymalizacja pod k\u0105tem Google oraz podej\u015bcie mobile-first w wersji premium."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Edukacja"})," \u2013 praktyczne poradniki dla przedsi\u0119biorc\xf3w, kt\xf3rzy chc\u0105 rozumie\u0107 swoj\u0105 stron\u0119 i \u015bwiadomie budowa\u0107 mark\u0119."]})]}),(0,Nw.jsx)("h2",{children:"Dla kogo tworzymy te tre\u015bci?"}),(0,Nw.jsx)("p",{children:(0,Nw.jsx)("strong",{children:"Dla lider\xf3w biznesu i marek premium:"})}),(0,Nw.jsxs)("ul",{children:[(0,Nw.jsx)("li",{children:"Chcesz wiedzie\u0107, dlaczego warto inwestowa\u0107 w jako\u015b\u0107 kodu, a nie w p\xf3\u0142\u015brodki."}),(0,Nw.jsx)("li",{children:"Zale\u017cy Ci na bezkompromisowej szybko\u015bci i bezpiecze\u0144stwie."}),(0,Nw.jsx)("li",{children:"Szukasz partnera, kt\xf3ry my\u015bli o Twoim biznesie strategicznie, a nie tylko dostarcza gotowy produkt."})]}),(0,Nw.jsx)("p",{children:(0,Nw.jsx)("strong",{children:"Dla pasjonat\xf3w designu i technologii:"})}),(0,Nw.jsxs)("ul",{children:[(0,Nw.jsx)("li",{children:"Chcesz \u015bledzi\u0107 nasze podej\u015bcie do nowoczesnej architektury aplikacji."}),(0,Nw.jsx)("li",{children:"Interesuje Ci\u0119, dlaczego stawiamy na modularno\u015b\u0107 komponent\xf3w i centralizacj\u0119 danych."}),(0,Nw.jsx)("li",{children:"Szukasz do\u015bwiadcze\u0144 prosto z linii produkcyjnej studia, gdzie liczy si\u0119 ka\u017cda milisekunda \u0142adowania."})]}),(0,Nw.jsx)("h2",{children:"Nasza obietnica"}),(0,Nw.jsx)("p",{children:"Stawiamy na jako\u015b\u0107, a nie na ilo\u015b\u0107. Nie obiecujemy artyku\u0142\xf3w codziennie \u2013 obiecujemy, \u017ce ka\u017cdy wpis b\u0119dzie rzetelnym materia\u0142em, pe\u0142nym autentycznej wiedzy, a nie pust\u0105 tre\u015bci\u0105 tworzon\u0105 pod algorytmy."}),(0,Nw.jsx)("h2",{children:"Dzi\u0119kujemy"}),(0,Nw.jsx)("p",{children:"Dzi\u0119kujemy Wam \u2013 naszym klientom. To Wasze pytania i sukcesy zainspirowa\u0142y nas do publicznego dzielenia si\u0119 wiedz\u0105."}),(0,Nw.jsx)("p",{children:"Zapraszamy do lektury kolejnych wpis\xf3w. \ud83c\udfaf"}),(0,Nw.jsx)("hr",{}),(0,Nw.jsxs)("p",{children:[(0,Nw.jsx)("strong",{children:"Studio Klara Queen"}),(0,Nw.jsx)("br",{}),"Projektujemy luksusowe do\u015bwiadczenia cyfrowe."]})]})};const rI=function(){const e=KS.find(e=>"czysty-kod-react"===e.id);return(0,Nw.jsxs)(tI,{article:e,children:[(0,Nw.jsx)("h1",{children:"Czysty kod czy gotowy szablon? Dlaczego stawiamy na technologi\u0119 jutra"}),(0,Nw.jsx)("p",{children:(0,Nw.jsx)("strong",{children:"20 marca 2026"})}),(0,Nw.jsx)("p",{children:"Wielu przedsi\u0119biorc\xf3w staje przed dylematem: wybra\u0107 popularne systemy oparte na gotowych szablonach (tzw. CMS), czy zainwestowa\u0107 w stron\u0119 pisan\u0105 od zera w czystym kodzie? Cho\u0107 gotowe rozwi\u0105zania kusz\u0105 nisk\u0105 cen\u0105 na start, ta pozorna oszcz\u0119dno\u015b\u0107 cz\u0119sto staje si\u0119 barier\u0105 dla rozwoju Twojej marki w sieci."}),(0,Nw.jsx)("h2",{children:"Pu\u0142apka \u201eci\u0119\u017ckich\u201d system\xf3w"}),(0,Nw.jsx)("p",{children:"Popularne platformy do zarz\u0105dzania tre\u015bci\u0105 zosta\u0142y zaprojektowane tak, by ka\u017cdy m\xf3g\u0142 z\u0142o\u017cy\u0107 z nich stron\u0119. Niestety, ta uniwersalno\u015b\u0107 ma swoj\u0105 cen\u0119. Aby system dzia\u0142a\u0142, musi \u0142adowa\u0107 setki skrypt\xf3w i funkcji, kt\xf3rych Twoja strona prawdopodobnie nigdy nie wykorzysta."}),(0,Nw.jsx)("p",{children:(0,Nw.jsx)("strong",{children:"Efekt?"})}),(0,Nw.jsx)("p",{children:"Strona oparta na gotowym szablonie jest jak samoch\xf3d z nadmiarem zb\u0119dnego baga\u017cu:"}),(0,Nw.jsxs)("ul",{children:[(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Traci dynamik\u0119:"})," \u0142aduje si\u0119 zauwa\u017calnie wolniej, co irytuje klient\xf3w."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Jest podatna na b\u0142\u0119dy:"})," ka\u017cda aktualizacja zewn\u0119trznych dodatk\xf3w mo\u017ce \u201erozsypa\u0107\u201d wygl\u0105d strony."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"M\u0119czy serwer:"})," generuje niepotrzebne zapytania, spowalniaj\u0105c dzia\u0142anie witryny na smartfonach."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Wymaga ci\u0105g\u0142ej opieki:"})," musisz stale dba\u0107 o poprawki bezpiecze\u0144stwa i \u0142ata\u0107 luki w popularnych wtyczkach."]})]}),(0,Nw.jsx)("p",{children:"W \u015bwiecie biznesu premium ka\u017cda sekunda oczekiwania na za\u0142adowanie strony to ryzyko, \u017ce klient przejdzie do konkurencji."}),(0,Nw.jsx)("h2",{children:"Szybko\u015b\u0107 to Twoja najwi\u0119ksza przewaga"}),(0,Nw.jsx)("p",{children:"Algorytmy wyszukiwarek (takie jak Core Web Vitals) faworyzuj\u0105 witryny, kt\xf3re szanuj\u0105 czas u\u017cytkownika. Gdy Twoja strona dzia\u0142a w u\u0142amku sekundy, klient odnosi wra\u017cenie profesjonalizmu jeszcze przed przeczytaniem pierwszego zdania."}),(0,Nw.jsxs)("p",{children:["W naszym studiu budujemy strony w technologii ",(0,Nw.jsx)("strong",{children:"React"}),", poniewa\u017c:"]}),(0,Nw.jsx)("h3",{children:"1. P\u0142ynno\u015b\u0107 \u2013 Do\u015bwiadczenie jak w aplikacji"}),(0,Nw.jsx)("p",{children:"W przeciwie\u0144stwie do tradycyjnych system\xf3w, React nie prze\u0142adowuje ca\u0142ego okna przy ka\u017cdym klikni\u0119ciu. Nawigacja jest natychmiastowa, p\u0142ynna i bez zb\u0119dnych \u201emrugni\u0119\u0107\u201d ekranu. To standard, do kt\xf3rego przyzwyczai\u0142y nas najlepsze aplikacje mobilne na \u015bwiecie."}),(0,Nw.jsx)("h3",{children:"2. Bezpiecze\u0144stwo \u2013 Twierdza bez tylnych drzwi"}),(0,Nw.jsx)("p",{children:"Popularne systemy s\u0105 celem masowych atak\xf3w, poniewa\u017c hakerzy znaj\u0105 ich s\u0142abe punkty i luki w og\xf3lnodost\u0119pnych wtyczkach. Buduj\u0105c kod od zera, tworzymy rozwi\u0105zanie unikalne. Nie ma \u201estandardowych\u201d dziur, kt\xf3re mo\u017cna \u0142atwo wykorzysta\u0107."}),(0,Nw.jsx)("h3",{children:"3. Skalowalno\u015b\u0107 \u2013 Projekt, kt\xf3ry ro\u015bnie z Tob\u0105"}),(0,Nw.jsx)("p",{children:"Gotowe szablony cz\u0119sto staj\u0105 si\u0119 \u201eciasne\u201d, gdy chcesz doda\u0107 nowe, niestandardowe funkcje. Czysty kod React to pe\u0142na swoboda. To ta sama technologia, kt\xf3ra nap\u0119dza najwi\u0119ksze serwisy spo\u0142eczno\u015bciowe \u2013 jest gotowa na ka\u017cdy poziom Twojego sukcesu."}),(0,Nw.jsx)("h3",{children:"4. Unikalny Design \u2013 Zero kompromis\xf3w"}),(0,Nw.jsx)("p",{children:"Nie walczymy z ograniczeniami szablonu. Ka\u017cdy element Twojej strony projektujemy tak, by idealnie oddawa\u0142 charakter Twojej marki. Bez ci\u0119\u017ckich wtyczek, bez zb\u0119dnego kodu, z zachowaniem absolutnej lekko\u015bci designu."}),(0,Nw.jsx)("h2",{children:"Dla kogo s\u0105 gotowe systemy?"}),(0,Nw.jsx)("p",{children:"Proste platformy CMS s\u0105 dobrym rozwi\u0105zaniem dla:"}),(0,Nw.jsxs)("ul",{children:[(0,Nw.jsx)("li",{children:"Hobbystycznych blog\xf3w o ogromnej liczbie wpis\xf3w."}),(0,Nw.jsx)("li",{children:"Ma\u0142ych stron informacyjnych z bardzo niskim bud\u017cetem."}),(0,Nw.jsx)("li",{children:"Os\xf3b, kt\xf3re chc\u0105 codziennie same zmienia\u0107 kod strony."})]}),(0,Nw.jsx)("p",{children:"Ale je\u015bli Tw\xf3j biznes wymaga:"}),(0,Nw.jsxs)("ul",{children:[(0,Nw.jsx)("li",{children:"B\u0142yskawicznej pr\u0119dko\u015bci dzia\u0142ania dla wy\u017cszej sprzeda\u017cy,"}),(0,Nw.jsx)("li",{children:"Nienagannego wizerunku marki premium,"}),(0,Nw.jsx)("li",{children:"Bezpiecze\u0144stwa danych Twoich klient\xf3w..."})]}),(0,Nw.jsx)("p",{children:"...czysty kod jest po prostu bezkonkurencyjn\u0105 inwestycj\u0105."}),(0,Nw.jsx)("h2",{children:"Podsumowanie"}),(0,Nw.jsxs)("p",{children:["Wyb\xf3r technologii to fundament Twojego biznesu. Zamiast pyta\u0107, co jest ta\u0144sze dzisiaj, warto zapyta\u0107:"," ",(0,Nw.jsx)("strong",{children:"\u201eKt\xf3re rozwi\u0105zanie pozwoli mi zarabia\u0107 wi\u0119cej i spa\u0107 spokojnie przez lata?\u201d"})]}),(0,Nw.jsx)("p",{children:"Dla nas odpowied\u017a jest jasna."}),(0,Nw.jsx)("hr",{}),(0,Nw.jsxs)("p",{children:[(0,Nw.jsx)("strong",{children:"Studio Klara Queen"}),(0,Nw.jsx)("br",{}),"Projektujemy luksusowe do\u015bwiadczenia cyfrowe."]})]})};const iI=function(){const e=KS.find(e=>"unikalne-grafiki-ai"===e.id);return(0,Nw.jsxs)(tI,{article:e,children:[(0,Nw.jsx)("h1",{children:"Nowo\u015b\u0107: Unikalne grafiki AI w cenie ka\u017cdej strony"}),(0,Nw.jsx)("p",{children:(0,Nw.jsx)("strong",{children:"25 marca 2026"})}),(0,Nw.jsx)("p",{children:"Doskonale wiemy, \u017ce jednym z najwi\u0119kszych wyzwa\u0144 przy tworzeniu presti\u017cowej strony internetowej jest brak wysokiej jako\u015bci, profesjonalnych zdj\u0119\u0107."}),(0,Nw.jsx)("p",{children:"Prywatne sesje fotograficzne bywaj\u0105 kosztowne i czasoch\u0142onne. Darmowe zdj\u0119cia z popularnych bank\xf3w (jak Pexels czy Unsplash)? Korzystaj\u0105 z nich tysi\u0105ce firm, przez co trudno o unikalno\u015b\u0107. Zakup p\u0142atnych stock\xf3w to z kolei kolejny wydatek, kt\xf3ry nie zawsze gwarantuje idealne dopasowanie do wizji marki."}),(0,Nw.jsx)("p",{children:"W Studio Klara Queen postanowili\u015bmy to zmieni\u0107."}),(0,Nw.jsx)("h2",{children:"Problem: Wizualna powtarzalno\u015b\u0107 w sieci"}),(0,Nw.jsx)("p",{children:"Przegl\u0105daj\u0105c internet, mo\u017cna zauwa\u017cy\u0107, \u017ce wiele stron z bran\u017cy premium cierpi na brak charakteru. Dlaczego? Poniewa\u017c wi\u0119kszo\u015b\u0107 opiera si\u0119 na tych samych, opatrzonych grafikach:"}),(0,Nw.jsxs)("ul",{children:[(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Sektor Beauty:"})," ta sama modelka w maseczce na setkach witryn."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Us\u0142ugi profesjonalne:"})," powtarzalne zdj\u0119cia ludzi w garniturach w sterylnych biurach."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Kreatywne studia:"})," te same abstrakcyjne, kolorowe gradienty."]})]}),(0,Nw.jsx)("p",{children:"W efekcie Twoja marka mo\u017ce zacz\u0105\u0107 zlewa\u0107 si\u0119 z konkurencj\u0105. W \u015bwiecie luksusu brak wyr\xf3\u017cnienia to najprostsza droga do bycia niezauwa\u017conym."}),(0,Nw.jsx)("h2",{children:"Rozwi\u0105zanie: Autorskie generowanie grafik przez AI"}),(0,Nw.jsxs)("p",{children:["Od marca 2026 roku ka\u017cdy nowy projekt realizowany w Studio Klara Queen zawiera pakiet",(0,Nw.jsxs)("strong",{children:[" ","unikalnych, wysokiej jako\u015bci grafik wygenerowanych przez Sztuczn\u0105 Inteligencj\u0119"]}),"."]}),(0,Nw.jsx)("p",{children:"Co to oznacza dla Twojej marki?"}),(0,Nw.jsxs)("ul",{children:[(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Pe\u0142na personalizacja:"})," grafiki tworzone pod konkretn\u0105 palet\u0119 barw i styl Twojej marki."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Unikalno\u015b\u0107 absolutna:"})," nawet przy podobnych wytycznych, AI generuje jedyne w swoim rodzaju obrazy. Nikt nie b\u0119dzie mia\u0142 identycznej witryny."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Sp\xf3jno\u015b\u0107 wizualna:"})," zestawienie grafik, kt\xf3re idealnie wsp\xf3\u0142gra z Twoj\u0105 wizj\u0105 artystyczn\u0105."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Bezpiecze\u0144stwo prawne:"})," otrzymujesz pe\u0142ne prawa komercyjne do wykorzystanych obraz\xf3w."]})]}),(0,Nw.jsx)("h2",{children:"Jak to wygl\u0105da w praktyce?"}),(0,Nw.jsx)("p",{children:"Zamiast szuka\u0107 kompromis\xf3w w gotowych bazach zdj\u0119\u0107, my tworzymy obrazy od podstaw. Je\u015bli prowadzisz np. salon urody, proces wygl\u0105da tak:"}),(0,Nw.jsx)("p",{children:(0,Nw.jsx)("strong",{children:"Koncepcja \u2192 Precyzyjny Prompt \u2192 Selekcja AI \u2192 Unikalna Grafika"})}),(0,Nw.jsx)("p",{children:(0,Nw.jsx)("em",{children:"Przyk\u0142ad: \u201eMinimalistyczne, luksusowe wn\u0119trze salonu, naturalne o\u015bwietlenie, be\u017cowo-z\u0142ota kolorystyka, detale premium, estetyka profesjonalnej fotografii modowej\u201d."})}),(0,Nw.jsx)("p",{children:"Rezultat to warstwa wizualna, kt\xf3ra:"}),(0,Nw.jsxs)("ul",{children:[(0,Nw.jsx)("li",{children:"\u2705 Jest nierozerwalnie zwi\u0105zana z Twoim brandingiem."}),(0,Nw.jsx)("li",{children:"\u2705 Buduje wizerunek marki niedost\u0119pnej w masowym obiegu."}),(0,Nw.jsx)("li",{children:"\u2705 Wygl\u0105da jak efekt drogiej sesji zdj\u0119ciowej, a nie sztuczny tw\xf3r."})]}),(0,Nw.jsx)("h2",{children:"Koszt dla Ciebie?"}),(0,Nw.jsxs)("p",{children:[(0,Nw.jsx)("strong",{children:"Dok\u0142adnie zero."})," To standard wliczony w cen\u0119 realizacji Twojej strony."]}),(0,Nw.jsxs)("p",{children:["Inwestujemy nasz czas w dopracowanie grafik AI, poniewa\u017c statystyki s\u0105 nieub\u0142agane: to, co potencjalny klient zobaczy w pierwszej sekundzie, decyduje o ",(0,Nw.jsx)("strong",{children:"70% jego opinii"}),"o Twoim profesjonalizmie. Nie pozwalamy, by o Twoim sukcesie decydowa\u0142 przypadek lub s\u0142abej jako\u015bci materia\u0142y. Opraw\u0119 premium otrzymujesz u nas w pakiecie."]}),(0,Nw.jsx)("h2",{children:"Czy AI zast\u0119puje tradycyjn\u0105 fotografi\u0119?"}),(0,Nw.jsx)("p",{children:"Traktujemy AI jako pot\u0119\u017cne uzupe\u0142nienie. Je\u015bli posiadasz w\u0142asne, profesjonalne zdj\u0119cia Twoich zrealizowanych projekt\xf3w czy zespo\u0142u \u2013 zawsze stanowi\u0105 one priorytet."}),(0,Nw.jsx)("p",{children:"Jednak w przypadku sekcji dekoracyjnych, t\u0142a strony czy g\u0142\xf3wnego zdj\u0119cia powitalnego (Hero Image), technologia AI pozwala nam stworzy\u0107 klimat, kt\xf3ry bez niej by\u0142by nieosi\u0105galny bez ogromnych nak\u0142ad\xf3w finansowych."}),(0,Nw.jsx)("h2",{children:"Etyka i transparentno\u015b\u0107"}),(0,Nw.jsxs)("p",{children:["Pytamy wprost: \u201eCzy wypada u\u017cywa\u0107 grafik wygenerowanych przez AI?\u201d. Nasza odpowied\u017a:"," ",(0,Nw.jsx)("strong",{children:"Tak, o ile robimy to z klas\u0105 i pe\u0142n\u0105 szczero\u015bci\u0105."})]}),(0,Nw.jsx)("p",{children:"W 2026 roku AI to nie p\xf3j\u015bcie na \u0142atwizn\u0119, lecz inteligentne narz\u0119dzie budowania presti\u017cu. My trzymamy si\u0119 trzech zasad:"}),(0,Nw.jsxs)("ul",{children:[(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Kuratorska selekcja:"})," Ka\u017cda grafika przechodzi nasz\u0105 osobist\u0105 weryfikacj\u0119 \u2013 musi by\u0107 ostra, estetyczna i luksusowa."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Iteracja do skutku:"})," Robimy tyle wersji, ile potrzeba, aby obraz w 100% oddawa\u0142 charakter Twojego biznesu."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Uczciwo\u015b\u0107 przekazu:"})," Wykorzystujemy AI tam, gdzie buduje ona emocje i nastr\xf3j, pozwalaj\u0105c Twoim realnym us\u0142ugom b\u0142yszcze\u0107 w odpowiedniej oprawie."]})]}),(0,Nw.jsx)("h2",{children:"Podsumowanie"}),(0,Nw.jsxs)("p",{children:["W Studio Klara Queen chcemy, aby\u015b si\u0119 wyr\xf3\u017cnia\u0142a. Grafiki AI to narz\u0119dzie, kt\xf3re nam na to pozwala. Twoja strona nie b\u0119dzie wygl\u0105da\u0107 jak jedna z wielu. B\u0119dzie wygl\u0105da\u0107 jak ",(0,Nw.jsx)("strong",{children:"Twoja"}),"."]}),(0,Nw.jsx)("hr",{}),(0,Nw.jsxs)("p",{children:[(0,Nw.jsx)("strong",{children:"Studio Klara Queen"}),(0,Nw.jsx)("br",{}),"Projektujemy luksusowe do\u015bwiadczenia cyfrowe."]})]})};const aI=function(){const e=KS.find(e=>"proces-48h"===e.id);return(0,Nw.jsxs)(tI,{article:e,children:[(0,Nw.jsx)("h1",{children:"Jak oddajemy gotowy projekt w 48h roboczych? Poznaj nasz proces."}),(0,Nw.jsx)("p",{children:(0,Nw.jsx)("strong",{children:"30 marca 2026"})}),(0,Nw.jsx)("p",{children:"Dla wielu agencji stworzenie prostej strony internetowej trwa miesi\u0105cami. Dziesi\u0105tki spotka\u0144, nieko\u0144cz\u0105ce si\u0119 korekty i kolejne wersje nag\u0142\xf3wk\xf3w sprawiaj\u0105, \u017ce projekt traci dynamik\u0119, a Ty \u2013 czas na budowanie biznesu."}),(0,Nw.jsxs)("p",{children:["W Studio Klara Queen proces zamyka si\u0119 w"," ",(0,Nw.jsx)("strong",{children:"48 godzinach roboczych"}),". Jak to mo\u017cliwe bez kompromis\xf3w w kwestii jako\u015bci? Zapraszamy za kulisy naszego warsztatu."]}),(0,Nw.jsx)("h2",{children:"Czym s\u0105 nasze \u201e48 godzin\u201d?"}),(0,Nw.jsx)("p",{children:"Zasada jest prosta: Tw\xf3j projekt jest gotowy do publikacji w ci\u0105gu 48 godzin roboczych od momentu zaksi\u0119gowania wp\u0142aty i dostarczenia przez Ciebie kompletu informacji."}),(0,Nw.jsx)("p",{children:(0,Nw.jsx)("strong",{children:"48 godzin roboczych = pe\u0142ne skupienie na Twoim sukcesie."})}),(0,Nw.jsx)("p",{children:"Jak to wygl\u0105da w praktyce:"}),(0,Nw.jsxs)("ul",{children:[(0,Nw.jsx)("li",{children:"Otrzymujemy detale projektu (wytyczne, kolorystyka, tre\u015bci)."}),(0,Nw.jsx)("li",{children:"Rozpoczynamy intensywne prace projektowe i programistyczne."}),(0,Nw.jsx)("li",{children:"Po 48 godzinach roboczych Twoja strona jest gotowa i opublikowana."})]}),(0,Nw.jsxs)("blockquote",{children:[(0,Nw.jsx)("strong",{children:"Wa\u017cna uwaga techniczna:"})," Proces propagacji domeny lub konfiguracja zewn\u0119trznego hostingu mo\u017ce czasem zaj\u0105\u0107 od kilku do 24 godzin. Jest to proces niezale\u017cny od nas, wynikaj\u0105cy z globalnych ustawie\u0144 dostawc\xf3w sieciowych. Sama strona jest jednak gotowa i przetestowana dok\u0142adnie w wyznaczonym terminie."]}),(0,Nw.jsx)("h2",{children:"Filary naszej efektywno\u015bci"}),(0,Nw.jsx)("h3",{children:"1. Inteligentny Brief"}),(0,Nw.jsx)("p",{children:"Zanim napiszemy pierwsz\u0105 lini\u0119 kodu, przeprowadzamy Ci\u0119 przez precyzyjn\u0105 ankiet\u0119 online. Zamiast godzinnych rozm\xf3w o niczym, zbieramy konkretne dane:"}),(0,Nw.jsxs)("ul",{children:[(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"O marce:"})," Bran\u017ca, warto\u015bci i profil idealnego klienta."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"O celach:"})," Struktura podstron, kluczowe sekcje i oczekiwane akcje u\u017cytkownik\xf3w."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"O estetyce:"})," Paleta barw, typografia i po\u017c\u0105dany klimat wizualny."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"O funkcjonalno\u015bci:"})," Formularze, integracje (np. Calendly) czy galerie prac."]})]}),(0,Nw.jsx)("p",{children:"Dzi\u0119ki temu eliminujemy szum komunikacyjny i od pierwszej minuty wiemy, w kt\xf3rym kierunku pod\u0105\u017ca\u0107."}),(0,Nw.jsx)("h3",{children:"2. Autorski fundament (nasza przewaga technologiczna)"}),(0,Nw.jsxs)("p",{children:["Przez lata pracy wypracowali\u015bmy"," ",(0,Nw.jsx)("strong",{children:"zaawansowan\u0105 bibliotek\u0119 komponent\xf3w React"}),"oraz autorskie standardy kodowania. Nie u\u017cywamy kupnych szablon\xf3w \u2013 korzystamy z w\u0142asnego, sprawdzonego w boju fundamentu."]}),(0,Nw.jsx)("p",{children:"Nasz system obejmuje:"}),(0,Nw.jsxs)("ul",{children:[(0,Nw.jsxs)("li",{children:["\u2705 ",(0,Nw.jsx)("strong",{children:"Perfekcyjne Responsive Web Design:"})," dopracowane uk\u0142ady dla ka\u017cdego urz\u0105dzenia."]}),(0,Nw.jsxs)("li",{children:["\u2705 ",(0,Nw.jsx)("strong",{children:"Globalny system styl\xf3w:"})," sp\xf3jna typografia i spacingi."]}),(0,Nw.jsxs)("li",{children:["\u2705 ",(0,Nw.jsx)("strong",{children:"Optymalizacj\u0119 SEO:"})," wbudowane tagi i struktura danych na starcie."]}),(0,Nw.jsxs)("li",{children:["\u2705 ",(0,Nw.jsx)("strong",{children:"Maksymaln\u0105 wydajno\u015b\u0107:"})," techniki lazy loading i code splitting."]})]}),(0,Nw.jsx)("p",{children:"Zaczynaj\u0105c projekt, mamy ju\u017c gotowy \u201esilnik\u201d i podwozie \u2013 skupiamy si\u0119 na budowie Twojej unikalnej \u201ekaroserii\u201d i wn\u0119trza."}),(0,Nw.jsx)("h3",{children:"3. Nowoczesny stack technologiczny"}),(0,Nw.jsx)("p",{children:"Korzystamy z narz\u0119dzi, kt\xf3re eliminuj\u0105 przestoje:"}),(0,Nw.jsxs)("ul",{children:[(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"React"})," \u2013 czysta struktura i b\u0142yskawiczne dzia\u0142anie."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Styled-components"})," \u2013 modularno\u015b\u0107 styl\xf3w bez chaosu w plikach."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Vite"})," \u2013 \u015brodowisko programistyczne nowej generacji."]}),(0,Nw.jsxs)("li",{children:[(0,Nw.jsx)("strong",{children:"Vercel"})," \u2013 b\u0142yskawiczny deployment i najwy\u017csza stabilno\u015b\u0107 serwer\xf3w."]})]}),(0,Nw.jsx)("h2",{children:"Dlaczego to si\u0119 udaje?"}),(0,Nw.jsxs)("p",{children:[(0,Nw.jsx)("strong",{children:"Pe\u0142na koncentracja:"})," Pracujemy tylko nad JEDNYM projektem jednocze\u015bnie. Twoja marka ma nasz\u0105 ca\u0142kowit\u0105 uwag\u0119 przez ca\u0142e 48 godzin."]}),(0,Nw.jsxs)("p",{children:[(0,Nw.jsx)("strong",{children:"Do\u015bwiadczenie:"})," Nie eksperymentujemy na Twoim biznesie. Wdra\u017camy rozwi\u0105zania, o kt\xf3rych wiemy, \u017ce dzia\u0142aj\u0105 i konwertuj\u0105."]}),(0,Nw.jsxs)("p",{children:[(0,Nw.jsx)("strong",{children:"Zgrany zesp\xf3\u0142:"})," Ka\u017cdy projekt prowadzi dedykowany ekspert. W razie potrzeby \u0142\u0105czymy si\u0142y, by odda\u0107 projekt jeszcze przed terminem."]}),(0,Nw.jsx)("h2",{children:"Por\xf3wnanie efektywno\u015bci"}),(0,Nw.jsxs)("table",{className:"process-table",children:[(0,Nw.jsx)("thead",{children:(0,Nw.jsxs)("tr",{children:[(0,Nw.jsx)("th",{children:"Obszar"}),(0,Nw.jsx)("th",{children:"Studio Klara Queen"}),(0,Nw.jsx)("th",{children:"Tradycyjne Agencje"})]})}),(0,Nw.jsxs)("tbody",{children:[(0,Nw.jsxs)("tr",{children:[(0,Nw.jsx)("td",{children:"Przygotowanie"}),(0,Nw.jsx)("td",{children:"Autorska biblioteka React"}),(0,Nw.jsx)("td",{children:"Poszukiwanie szablon\xf3w"})]}),(0,Nw.jsxs)("tr",{children:[(0,Nw.jsx)("td",{children:"Komunikacja"}),(0,Nw.jsx)("td",{children:"Bezpo\u015bredni kontakt w czasie rzeczywistym"}),(0,Nw.jsx)("td",{children:"D\u0142ugie \u0142a\u0144cuchy mailowe"})]}),(0,Nw.jsxs)("tr",{children:[(0,Nw.jsx)("td",{children:"Skupienie"}),(0,Nw.jsx)("td",{children:"Jeden projekt w danym czasie"}),(0,Nw.jsx)("td",{children:"Kilka projekt\xf3w prowadzonych r\xf3wnolegle"})]}),(0,Nw.jsxs)("tr",{children:[(0,Nw.jsx)("td",{children:"Testy jako\u015bci"}),(0,Nw.jsx)("td",{children:"Automatyczne i ci\u0105g\u0142e"}),(0,Nw.jsx)("td",{children:"Dopiero w fazie ko\u0144cowej"})]}),(0,Nw.jsxs)("tr",{children:[(0,Nw.jsx)("td",{children:(0,Nw.jsx)("strong",{children:"Czas realizacji"})}),(0,Nw.jsx)("td",{children:(0,Nw.jsx)("strong",{children:"48h roboczych"})}),(0,Nw.jsx)("td",{children:(0,Nw.jsx)("strong",{children:"Od 4 do 8 tygodni"})})]})]})]}),(0,Nw.jsx)("h2",{children:"Czas to najcenniejsza waluta."}),(0,Nw.jsx)("p",{children:"Podczas gdy Twoja konkurencja wci\u0105\u017c doprecyzowuje makiety, Ty mo\u017cesz ju\u017c przyjmowa\u0107 pierwsze zam\xf3wienia. Skracamy miesi\u0105ce oczekiwania do dw\xf3ch intensywnych dni roboczych. Inwestujesz w narz\u0119dzie, kt\xf3re zarabia na siebie od zaraz."}),(0,Nw.jsx)("hr",{}),(0,Nw.jsxs)("p",{children:[(0,Nw.jsx)("strong",{children:"Studio Klara Queen"}),(0,Nw.jsx)("br",{}),"Tworzymy luksusowe do\u015bwiadczenia cyfrowe."]})]})},oI={"startujemy-z-aktualnosciami":nI,"czysty-kod-react":rI,"unikalne-grafiki-ai":iI,"proces-48h":aI};const sI=function(){const{id:e}=fe(),t=oI[e];return t?(0,Nw.jsx)(t,{}):(0,Nw.jsx)(GC,{children:(0,Nw.jsxs)(KC,{children:[(0,Nw.jsx)(qC,{children:(0,Nw.jsx)(QC,{children:"Artyku\u0142 nie znaleziony"})}),(0,Nw.jsx)(ZC,{children:(0,Nw.jsx)(wt,{to:"/blog",children:(0,Nw.jsx)(eI,{children:"Wr\xf3\u0107 do aktualno\u015bci"})})})]})})},lI=Cx.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
`,cI=Cx.div`
  text-align: center;
  margin-bottom: 80px;
`,uI=Cx.h1`
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${Nx.testimonialAccent} 0%,
    #764ba2 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
`,dI=Cx.p`
  font-size: clamp(16px, 2vw, 20px);
  color: ${Nx.testimonialSubtext};
  max-width: 600px;
  margin: 0 auto;
`,hI=Cx.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    gap: 20px;
    grid-template-columns: 1fr;
  }
`,pI=Cx.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    background: ${Nx.testimonialBgHover};
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`,fI=Cx.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  font-size: 16px;
`,mI=Cx.span`
  color: #ffd700;
`,gI=Cx.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${Nx.testimonialText};
  margin-bottom: auto;
  margin-bottom: 25px;
  font-style: italic;
`,yI=Cx.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,wI=Cx.strong`
  font-size: 16px;
  color: ${Nx.white};
  font-weight: 600;
`,bI=Cx.span`
  font-size: 14px;
  color: ${Nx.testimonialSubtext};
`;const vI=function(){return(0,Nw.jsxs)(lI,{children:[(0,Nw.jsxs)(cI,{children:[(0,Nw.jsx)(uI,{children:"Opinie naszych klient\xf3w"}),(0,Nw.jsx)(dI,{children:"Sprawd\u017a co m\xf3wi\u0105 o nas ci, kt\xf3rzy ju\u017c z nami pracowali"})]}),(0,Nw.jsx)(hI,{children:S_.map(e=>(0,Nw.jsxs)(pI,{children:[(0,Nw.jsx)(fI,{children:[...Array(e.rating)].map((e,t)=>(0,Nw.jsx)(mI,{children:"\u2605"},t))}),(0,Nw.jsxs)(gI,{children:['"',e.text,'"']}),(0,Nw.jsxs)(yI,{children:[(0,Nw.jsx)(wI,{children:e.name}),(0,Nw.jsx)(bI,{children:e.company})]})]},e.id))})]})};function xI(e){return yk({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r\n\tc0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r\n\tc0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r\n\tC34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r\n\tc-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"},child:[]},{tag:"path",attr:{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r\n\tc0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"},child:[]}]})(e)}function kI(e){return{"auth/email-already-in-use":"Ten adres e-mail jest ju\u017c zarejestrowany.","auth/invalid-email":"Nieprawid\u0142owy adres e-mail.","auth/weak-password":"Has\u0142o jest za s\u0142abe \u2014 u\u017cyj co najmniej 6 znak\xf3w.","auth/user-disabled":"To konto zosta\u0142o wy\u0142\u0105czone.","auth/user-not-found":"Nie znaleziono konta z tym adresem e-mail.","auth/wrong-password":"Nieprawid\u0142owe has\u0142o.","auth/invalid-credential":"Nieprawid\u0142owy e-mail lub has\u0142o.","auth/too-many-requests":"Zbyt wiele pr\xf3b. Spr\xf3buj ponownie za chwil\u0119.","auth/popup-closed-by-user":"Logowanie przerwane \u2014 okno zosta\u0142o zamkni\u0119te.","auth/cancelled-popup-request":"Mo\u017cna uruchomi\u0107 tylko jedno okno logowania naraz.","auth/account-exists-with-different-credential":"Konto z tym e-mailem istnieje ju\u017c przy innym sposobie logowania.","auth/operation-not-allowed":"Ta metoda logowania nie jest w\u0142\u0105czona w Firebase Console.","auth/network-request-failed":"B\u0142\u0105d sieci. Sprawd\u017a po\u0142\u0105czenie z internetem.","auth/requires-recent-login":"Ze wzgl\u0119d\xf3w bezpiecze\u0144stwa wyloguj si\u0119 i zaloguj ponownie, potem spr\xf3buj jeszcze raz."}[e]||"Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d. Spr\xf3buj ponownie."}const zI=Nx,SI=Rx,_I=Ox.linkBarRadius,EI=Cx.main`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(24px, 5vw, 48px) clamp(16px, 4vw, 32px);
  box-sizing: border-box;

  @media (max-width: ${SI.tablet}px) {
    min-height: calc(100vh - 64px);
    padding-top: clamp(32px, 8vw, 56px);
  }
`,jI=Cx.div`
  width: 100%;
  max-width: 440px;
  padding: clamp(28px, 6vw, 42px);
  border-radius: ${Ox.drawerBorderRadius};
  background: linear-gradient(
    165deg,
    rgba(120, 40, 64, 0.55) 0%,
    rgba(46, 14, 22, 0.75) 45%,
    rgba(30, 8, 16, 0.88) 100%
  );
  border: 1px solid ${zI.navBorderGold18};
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
`,TI=Cx.header`
  text-align: center;
  margin-bottom: clamp(22px, 4vw, 30px);
`,CI=Cx.h1`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.85rem, 5vw, 2.35rem);
  font-weight: 700;
  color: ${zI.white};
  margin: 0 0 10px 0;
  letter-spacing: 0.4px;
  line-height: 1.15;
`,II=Cx.p`
  margin: 0;
  font-size: clamp(0.9rem, 2.2vw, 0.98rem);
  color: rgba(255, 255, 255, 0.68);
  font-weight: 400;
  line-height: 1.5;
`,AI=Cx.form`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 3vw, 20px);
`,PI=Cx.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`,RI=Cx.label`
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: ${zI.goldHover};
`,NI=Cx.input`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 14px;
  font-size: 1rem;
  font-family: inherit;
  color: ${zI.white};
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid ${zI.navBorderGold26};
  border-radius: ${_I};
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
    border-color: ${zI.goldMain};
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.18);
    background: rgba(0, 0, 0, 0.22);
  }
`,DI=Cx.div`
  position: relative;
  display: flex;
  align-items: center;
`,OI=Cx(NI)`
  padding-right: 48px;
`,LI=Cx.button`
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
  color: ${zI.goldHover};
  cursor: pointer;
  font-size: 1rem;
  transition:
    color 0.2s ease,
    background 0.2s ease;

  &:hover {
    color: ${zI.white};
    background: rgba(255, 255, 255, 0.06);
  }
`,MI=Cx.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -4px;
`,$I=(Cx.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.88rem;
  font-family: inherit;
  color: ${zI.goldHover};
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;

  &:hover {
    color: ${zI.white};
  }
`,Cx(wt)`
  font-size: 0.88rem;
  color: ${zI.goldHover};
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;

  &:hover {
    color: ${zI.white};
  }
`),FI=Cx.button`
  margin-top: 4px;
  width: 100%;
  padding: 14px 20px;
  border: 1px solid ${zI.navBorderGold48};
  border-radius: ${_I};
  font-size: 0.95rem;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${zI.deepBlack};
  background: linear-gradient(
    180deg,
    ${zI.goldHover} 0%,
    ${zI.goldMain} 100%
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
`,UI=Cx.div`
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
      ${zI.navDividerGold50},
      transparent
    );
  }
`,BI=Cx.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 18px;
  border-radius: ${_I};
  border: 1px solid ${zI.navBorderGold26};
  background: rgba(255, 255, 255, 0.06);
  color: ${zI.white};
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
    border-color: ${zI.navBorderGold48};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    flex-shrink: 0;
    font-size: 1.35rem;
  }
`,VI=Cx.p`
  margin: clamp(18px, 4vw, 24px) 0 0 0;
  text-align: center;
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.5;

  ${$I} {
    margin-left: 6px;
    font-weight: 600;
  }
`,HI=Cx.div`
  margin: 0 0 16px 0;
  padding: 12px 14px;
  font-size: 0.85rem;
  line-height: 1.45;
  color: #ffc9c9;
  background: rgba(158, 30, 54, 0.3);
  border-radius: ${_I};
  border: 1px solid rgba(241, 120, 140, 0.5);
`,WI=Cx.p`
  margin: 0 0 20px 0;
  padding: 12px 14px;
  font-size: 0.85rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.72);
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${_I};
  border: 1px solid ${zI.navBorderGold18};
`,GI=Cx(WI)`
  color: rgba(220, 255, 220, 0.95);
  border-color: rgba(102, 187, 106, 0.45);
  background: rgba(46, 125, 50, 0.2);
`,KI=Cx.div`
  margin-top: clamp(20px, 4vw, 28px);
  text-align: center;
`;const qI=function(){const e=pe(),[t,n]=(0,r.useState)(""),[i,a]=(0,r.useState)(""),[o,s]=(0,r.useState)(!1),[l,c]=(0,r.useState)(""),[u,d]=(0,r.useState)(!1);return(0,Nw.jsx)(EI,{children:(0,Nw.jsxs)(jI,{children:[(0,Nw.jsxs)(TI,{children:[(0,Nw.jsx)(CI,{children:"Zaloguj si\u0119"}),(0,Nw.jsx)(II,{children:"Zaloguj si\u0119 e-mailem i has\u0142em albo kontem Google."})]}),l?(0,Nw.jsx)(HI,{role:"alert",children:l}):null,(0,Nw.jsxs)(AI,{onSubmit:async n=>{if(n.preventDefault(),c(""),Tw()&&Iw)if(t.trim()&&i){d(!0);try{await function(e,t,n){return mr(e.app)?Promise.reject(Fr(e)):Da(Zt(e),va.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Ma(e),t})}(Iw,t.trim(),i),e("/konto",{replace:!0})}catch(r){c(kI(r.code))}finally{d(!1)}}else c("Podaj adres e-mail i has\u0142o.");else c("Brak konfiguracji Firebase \u2014 uzupe\u0142nij plik .env.local (patrz .env.example).")},noValidate:!0,children:[(0,Nw.jsxs)(PI,{children:[(0,Nw.jsx)(RI,{htmlFor:"login-email",children:"E-mail"}),(0,Nw.jsx)(NI,{id:"login-email",name:"email",type:"email",autoComplete:"email",placeholder:"twoj@email.pl",value:t,onChange:e=>n(e.target.value),disabled:u})]}),(0,Nw.jsxs)(PI,{children:[(0,Nw.jsx)(RI,{htmlFor:"login-password",children:"Has\u0142o"}),(0,Nw.jsxs)(DI,{children:[(0,Nw.jsx)(OI,{id:"login-password",name:"password",type:o?"text":"password",autoComplete:"current-password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",value:i,onChange:e=>a(e.target.value),disabled:u}),(0,Nw.jsx)(LI,{type:"button","aria-label":o?"Ukryj has\u0142o":"Poka\u017c has\u0142o",onClick:()=>s(e=>!e),disabled:u,children:o?(0,Nw.jsx)(Ik,{}):(0,Nw.jsx)(Ck,{})})]})]}),(0,Nw.jsx)(MI,{children:(0,Nw.jsx)($I,{to:"/forgot-password",children:"Nie pami\u0119tasz has\u0142a?"})}),(0,Nw.jsx)(FI,{type:"submit",disabled:u,children:u?"Logowanie\u2026":"Zaloguj si\u0119"})]}),(0,Nw.jsx)(UI,{children:"lub"}),(0,Nw.jsxs)(BI,{type:"button",onClick:async()=>{if(c(""),Tw()&&Iw){d(!0);try{await _o(Iw,Rw),e("/konto",{replace:!0})}catch(t){if("auth/popup-closed-by-user"===t.code)return;c(kI(t.code))}finally{d(!1)}}else c("Brak konfiguracji Firebase \u2014 uzupe\u0142nij plik .env.local (patrz .env.example).")},disabled:u,children:[(0,Nw.jsx)(xI,{"aria-hidden":!0}),"Kontynuuj z Google"]}),(0,Nw.jsxs)(VI,{children:["Nie masz konta?",(0,Nw.jsx)($I,{to:"/register",children:"Za\u0142\xf3\u017c konto"})]})]})})};const QI=function(){const e=pe(),[t,n]=(0,r.useState)(""),[i,a]=(0,r.useState)(""),[o,s]=(0,r.useState)(""),[l,c]=(0,r.useState)(!1),[u,d]=(0,r.useState)(""),[h,p]=(0,r.useState)(!1);return(0,Nw.jsx)(EI,{children:(0,Nw.jsxs)(jI,{children:[(0,Nw.jsxs)(TI,{children:[(0,Nw.jsx)(CI,{children:"Rejestracja"}),(0,Nw.jsx)(II,{children:"Za\u0142\xf3\u017c konto e-mailem lub zaloguj si\u0119 jednorazowo przez Google."})]}),u?(0,Nw.jsx)(HI,{role:"alert",children:u}):null,(0,Nw.jsxs)(AI,{onSubmit:async n=>{if(n.preventDefault(),d(""),Tw()&&Iw)if(t.trim())if(i.length<6)d("Has\u0142o musi mie\u0107 co najmniej 6 znak\xf3w.");else if(i===o){p(!0);try{await async function(e,t,n){if(mr(e.app))return Promise.reject(Fr(e));const r=Ki(e),i=ra(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ja,"EMAIL_PASSWORD_PROVIDER"),a=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Ma(e),t}),o=await Ta._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}(Iw,t.trim(),i),e("/konto",{replace:!0})}catch(r){d(kI(r.code))}finally{p(!1)}}else d("Has\u0142a nie s\u0105 takie same.");else d("Podaj adres e-mail.");else d("Brak konfiguracji Firebase \u2014 uzupe\u0142nij plik .env.local (patrz .env.example).")},noValidate:!0,children:[(0,Nw.jsxs)(PI,{children:[(0,Nw.jsx)(RI,{htmlFor:"register-email",children:"E-mail"}),(0,Nw.jsx)(NI,{id:"register-email",name:"email",type:"email",autoComplete:"email",placeholder:"twoj@email.pl",value:t,onChange:e=>n(e.target.value),disabled:h})]}),(0,Nw.jsxs)(PI,{children:[(0,Nw.jsx)(RI,{htmlFor:"register-password",children:"Has\u0142o"}),(0,Nw.jsxs)(DI,{children:[(0,Nw.jsx)(OI,{id:"register-password",name:"password",type:l?"text":"password",autoComplete:"new-password",placeholder:"min. 6 znak\xf3w",value:i,onChange:e=>a(e.target.value),disabled:h}),(0,Nw.jsx)(LI,{type:"button","aria-label":l?"Ukryj has\u0142o":"Poka\u017c has\u0142o",onClick:()=>c(e=>!e),disabled:h,children:l?(0,Nw.jsx)(Ik,{}):(0,Nw.jsx)(Ck,{})})]})]}),(0,Nw.jsxs)(PI,{children:[(0,Nw.jsx)(RI,{htmlFor:"register-confirm",children:"Powt\xf3rz has\u0142o"}),(0,Nw.jsx)(NI,{id:"register-confirm",name:"confirm",type:l?"text":"password",autoComplete:"new-password",placeholder:"powt\xf3rz has\u0142o",value:o,onChange:e=>s(e.target.value),disabled:h})]}),(0,Nw.jsx)(FI,{type:"submit",disabled:h,children:h?"Tworzenie konta\u2026":"Utw\xf3rz konto"})]}),(0,Nw.jsx)(UI,{children:"lub"}),(0,Nw.jsxs)(BI,{type:"button",onClick:async()=>{if(d(""),Tw()&&Iw){p(!0);try{await _o(Iw,Rw),e("/konto",{replace:!0})}catch(t){if("auth/popup-closed-by-user"===t.code)return;d(kI(t.code))}finally{p(!1)}}else d("Brak konfiguracji Firebase \u2014 uzupe\u0142nij plik .env.local (patrz .env.example).")},disabled:h,children:[(0,Nw.jsx)(xI,{"aria-hidden":!0}),"Zarejestruj si\u0119 z Google"]}),(0,Nw.jsxs)(VI,{children:["Masz ju\u017c konto?",(0,Nw.jsx)($I,{to:"/login",children:"Zaloguj si\u0119"})]})]})})};const YI=function(){const[e,t]=(0,r.useState)(""),[n,i]=(0,r.useState)(!1),[a,o]=(0,r.useState)(""),[s,l]=(0,r.useState)(!1);return(0,Nw.jsx)(EI,{children:(0,Nw.jsxs)(jI,{children:[(0,Nw.jsxs)(TI,{children:[(0,Nw.jsx)(CI,{children:"Przypomnienie has\u0142a"}),(0,Nw.jsx)(II,{children:"Wy\u015blemy link resetuj\u0105cy na Tw\xf3j e-mail (je\u015bli konto istnieje)."})]}),a?(0,Nw.jsx)(HI,{role:"alert",children:a}):null,n?(0,Nw.jsxs)(GI,{role:"status",children:["Je\u015bli konto jest powi\u0105zane z adresem ",(0,Nw.jsx)("strong",{children:e.trim()}),", wkr\xf3tce otrzymasz wiadomo\u015b\u0107 z linkiem do ustawienia nowego has\u0142a. Sprawd\u017a te\u017c folder spam."]}):null,n?null:(0,Nw.jsxs)(AI,{onSubmit:async t=>{if(t.preventDefault(),o(""),Tw()&&Iw)if(e.trim()){l(!0);try{await async function(e,t,n){const r=Ki(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&La(r,i,n),await ra(r,i,"getOobCode",ha,"EMAIL_PASSWORD_PROVIDER")}(Iw,e.trim()),i(!0)}catch(n){o(kI(n.code))}finally{l(!1)}}else o("Podaj adres e-mail.");else o("Brak konfiguracji Firebase \u2014 uzupe\u0142nij plik .env.local (patrz .env.example).")},noValidate:!0,children:[(0,Nw.jsxs)(PI,{children:[(0,Nw.jsx)(RI,{htmlFor:"forgot-email",children:"E-mail"}),(0,Nw.jsx)(NI,{id:"forgot-email",name:"email",type:"email",autoComplete:"email",placeholder:"twoj@email.pl",value:e,onChange:e=>t(e.target.value),disabled:s})]}),(0,Nw.jsx)(FI,{type:"submit",disabled:s,children:s?"Wysy\u0142anie\u2026":"Wy\u015blij link"})]}),(0,Nw.jsx)(KI,{children:(0,Nw.jsx)($I,{to:"/login",children:"Wr\xf3\u0107 do logowania"})})]})})},JI=e=>ag(Aw,"users",e);async function XI(e,t){if(!Aw)throw new Error("Firestore niedost\u0119pny");await function(e,t,n){e=hl(e,ng);const r=hl(e.firestore,cg),i=ty(e.converter,t,n);return cy(r,[Sg(zg(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,jd.none())])}(JI(e),{...t,updatedAt:Ug()},{merge:!0})}function ZI(e,t){return[...e].sort((e,n)=>{var r,i,a,o,s,l;const c=null!==(r=null!==(i=null===(a=e[t])||void 0===a?void 0:a.seconds)&&void 0!==i?i:e[t])&&void 0!==r?r:0;return(null!==(o=null!==(s=null===(l=n[t])||void 0===l?void 0:l.seconds)&&void 0!==s?s:n[t])&&void 0!==o?o:0)-c})}const eA=Nx,tA=Rx,nA=Ox.linkBarRadius,rA=Cx.main`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: calc(100vh - 90px);
  padding: clamp(20px, 4vw, 40px) clamp(16px, 3vw, 32px);
  padding-bottom: clamp(48px, 8vw, 80px);
  box-sizing: border-box;

  @media (max-width: ${tA.tablet}px) {
    min-height: calc(100vh - 64px);
    padding-top: clamp(28px, 6vw, 48px);
  }

  @media (max-width: ${tA.phone}px) {
    padding: 16px 10px 48px;
  }
`,iA=Cx.div`
  max-width: 1100px;
  margin: 0 auto;
`,aA=Cx.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  border-radius: ${Ox.drawerBorderRadius};
  background: linear-gradient(
    165deg,
    rgba(120, 40, 64, 0.45) 0%,
    rgba(46, 14, 22, 0.72) 50%,
    rgba(30, 8, 16, 0.9) 100%
  );
  border: 1px solid ${eA.navBorderGold18};
  box-shadow:
    0 20px 48px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 247, 220, 0.08);
  backdrop-filter: blur(14px) saturate(115%);
  overflow: hidden;

  @media (max-width: ${tA.tablet}px) {
    grid-template-columns: 1fr;
    overflow: visible;
  }
`,oA=Cx.aside`
  display: flex;
  flex-direction: column;
  padding: clamp(16px, 2.5vw, 22px);
  border-right: 1px solid ${eA.navBorderGold18};
  background: rgba(0, 0, 0, 0.18);
  min-width: 0;

  @media (max-width: ${tA.tablet}px) {
    border-right: none;
    border-bottom: 1px solid ${eA.navBorderGold18};
    padding-bottom: 12px;
  }

  @media (max-width: ${tA.phone}px) {
    padding: 12px 10px;
  }
`,sA=Cx.div`
  padding: 8px 10px 18px;
  border-bottom: 1px solid ${eA.navBorderGold18};
  margin-bottom: 12px;

  @media (max-width: ${tA.tablet}px) {
    padding-bottom: 14px;
    margin-bottom: 10px;
  }
`,lA=Cx.h1`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.35rem, 3vw, 1.65rem);
  font-weight: 700;
  color: ${eA.white};
  margin: 0 0 4px 0;
  letter-spacing: 0.3px;
`,cA=Cx.p`
  margin: 0;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.55);
  word-break: break-all;
`,uA=Cx.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: ${tA.tablet}px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
    padding-bottom: 6px;
  }
`,dA=Cx.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  padding: 11px 12px;
  margin-top: 8px;
  border: none;
  border-top: 1px solid ${eA.navBorderGold18};
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
    color: ${eA.goldHover};
    background: rgba(212, 175, 55, 0.08);
  }

  @media (max-width: ${tA.tablet}px) {
    display: none;
  }
`,hA=Cx.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  padding: 11px 12px;
  border: 1px solid transparent;
  border-radius: ${nA};
  background: ${e=>e.$active?"rgba(212, 175, 55, 0.14)":"transparent"};
  color: ${e=>e.$active?eA.goldHover:"rgba(255, 255, 255, 0.78)"};
  font-size: 0.88rem;
  font-weight: ${e=>e.$active?600:500};
  font-family: inherit;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  @media (max-width: ${tA.tablet}px) {
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
    color: ${eA.goldHover};
    border-color: rgba(241, 213, 146, 0.15);
  }
`,pA=Cx.div`
  padding: clamp(22px, 4vw, 36px);
  min-height: 420px;
  min-width: 0;

  @media (max-width: ${tA.phone}px) {
    padding: 16px 12px;
    min-height: 280px;
  }
`,fA=Cx.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.45rem, 3.5vw, 1.85rem);
  font-weight: 700;
  color: ${eA.white};
  margin: 0 0 8px 0;
  letter-spacing: 0.3px;
`,mA=Cx.p`
  margin: 0 0 clamp(22px, 3vw, 28px) 0;
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.55;
  max-width: 560px;
`,gA=Cx.div`
  display: grid;
  gap: clamp(16px, 2.5vw, 20px);
  max-width: 520px;
`,yA=Cx.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: ${tA.phone}px) {
    grid-template-columns: 1fr;
  }
`,wA=Cx.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`,bA=Cx.label`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.55px;
  text-transform: uppercase;
  color: ${eA.goldHover};
`,vA=Cx.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  font-size: 0.95rem;
  font-family: inherit;
  color: ${eA.white};
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid ${eA.navBorderGold26};
  border-radius: ${nA};
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: ${eA.goldMain};
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
  }
`,xA=Cx.button`
  margin-top: 8px;
  padding: 12px 22px;
  width: fit-content;
  border: 1px solid ${eA.navBorderGold48};
  border-radius: ${nA};
  font-size: 0.88rem;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${eA.deepBlack};
  background: linear-gradient(180deg, ${eA.goldHover} 0%, ${eA.goldMain} 100%);
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
`,kA=Cx.button`
  margin-top: 8px;
  padding: 12px 18px;
  width: fit-content;
  border: 1px solid ${eA.navBorderGold26};
  border-radius: ${nA};
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  color: ${eA.goldHover};
  background: rgba(255, 255, 255, 0.04);
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${eA.navBorderGold48};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,zA=Cx.div`
  margin-bottom: 18px;
  padding: 12px 14px;
  font-size: 0.85rem;
  line-height: 1.45;
  border-radius: ${nA};
  ${e=>"error"===e.$variant?"\n    color: #ffc9c9;\n    background: rgba(158, 30, 54, 0.3);\n    border: 1px solid rgba(241, 120, 140, 0.5);\n  ":"\n    color: rgba(220, 255, 220, 0.95);\n    background: rgba(46, 125, 50, 0.22);\n    border: 1px solid rgba(102, 187, 106, 0.45);\n  "}
`,SA=Cx.p`
  margin: 0 0 16px 0;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.5;
`,_A=Cx.div`
  text-align: center;
  padding: clamp(36px, 6vw, 56px) 20px;
  border: 1px dashed ${eA.navBorderGold26};
  border-radius: ${nA};
  background: rgba(0, 0, 0, 0.15);
`,EA=Cx.div`
  font-size: 2.2rem;
  margin-bottom: 14px;
  opacity: 0.65;
`,jA=Cx.p`
  margin: 0 0 8px 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: ${eA.white};
`,TA=Cx.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.5;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
`,CA=Cx.div`
  overflow-x: auto;
  border-radius: ${nA};
  border: 1px solid ${eA.navBorderGold18};
  background: rgba(0, 0, 0, 0.2);
`,IA=Cx.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;

  th,
  td {
    padding: 12px 14px;
    text-align: left;
    border-bottom: 1px solid ${eA.navBorderGold18};
  }

  th {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: ${eA.goldHover};
    font-weight: 600;
    background: rgba(0, 0, 0, 0.25);
  }

  tr:last-child td {
    border-bottom: none;
  }

  td {
    color: rgba(255, 255, 255, 0.85);
  }
`,AA=Cx.div`
  position: relative;
  display: flex;
  align-items: center;
`,PA=Cx(vA)`
  padding-right: 44px;
`,RA=Cx.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${eA.goldHover};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,NA=Cx.div`
  margin-top: clamp(40px, 6vw, 56px);
  padding-top: clamp(24px, 4vw, 32px);
  border-top: 1px solid ${eA.navBorderGold18};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,DA=Cx.h3`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.15rem, 2.5vw, 1.35rem);
  font-weight: 700;
  color: ${eA.white};
  margin: 0 0 10px 0;
`,OA=Cx.p`
  margin: 0 0 20px 0;
  font-size: 0.88rem;
  color: #ffc9c9;
  line-height: 1.55;
  max-width: 440px;
  background: rgba(158, 30, 54, 0.2);
  border: 1px solid rgba(241, 120, 140, 0.35);
  border-radius: ${nA};
  padding: 14px 18px;
`,LA=Cx.button`
  padding: 11px 20px;
  width: fit-content;
  border: 1px solid rgba(241, 120, 140, 0.5);
  border-radius: ${nA};
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
`,MA=Cx.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`,$A=Cx.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${eA.white};
`,FA=Cx.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;const UA=function(e){let{user:t,profile:n,onSaved:i}=e;const[a,o]=(0,r.useState)(""),[s,l]=(0,r.useState)(""),[c,u]=(0,r.useState)(!1),[d,h]=(0,r.useState)(null),[p,f]=(0,r.useState)(null),[m,g]=(0,r.useState)(!1),[y,w]=(0,r.useState)(!1),[b,v]=(0,r.useState)(null),x=pe();return(0,r.useEffect)(()=>{var e,r,i;o(null!==(e=null!==(r=null===n||void 0===n?void 0:n.displayName)&&void 0!==r?r:null===t||void 0===t?void 0:t.displayName)&&void 0!==e?e:""),l(null!==(i=null===n||void 0===n?void 0:n.phone)&&void 0!==i?i:"")},[n,t]),(0,Nw.jsxs)(Nw.Fragment,{children:[(0,Nw.jsx)(fA,{children:"Profil"}),(0,Nw.jsx)(mA,{children:"Imi\u0119 i nazwisko oraz telefon \u2014 przydadz\u0105 si\u0119 przy kontakcie i zam\xf3wieniach."}),p?(0,Nw.jsx)(zA,{$variant:"error",children:p}):null,d?(0,Nw.jsx)(zA,{$variant:"success",children:d}):null,(0,Nw.jsx)("form",{onSubmit:async e=>{if(e.preventDefault(),f(null),h(null),t){u(!0);try{await XI(t.uid,{displayName:a.trim(),phone:s.trim()}),await $a(t,{displayName:a.trim()||null}),h("Zapisano dane profilu."),null===i||void 0===i||i()}catch(n){"permission-denied"===n.code?f("Brak uprawnie\u0144 do zapisu \u2014 w konsoli Firebase w\u0142\u0105cz Firestore i opublikuj regu\u0142y z pliku firebase/firestore.rules."):f(n.code&&n.code.startsWith("auth/")?kI(n.code):n.message||"Nie uda\u0142o si\u0119 zapisa\u0107.")}finally{u(!1)}}},children:(0,Nw.jsxs)(gA,{children:[(0,Nw.jsxs)(wA,{children:[(0,Nw.jsx)(bA,{htmlFor:"acc-display",children:"Imi\u0119 i nazwisko"}),(0,Nw.jsx)(vA,{id:"acc-display",value:a,onChange:e=>o(e.target.value),placeholder:"np. Klara Kowalska",autoComplete:"name"})]}),(0,Nw.jsxs)(wA,{children:[(0,Nw.jsx)(bA,{htmlFor:"acc-phone",children:"Telefon"}),(0,Nw.jsx)(vA,{id:"acc-phone",type:"tel",value:s,onChange:e=>l(e.target.value),placeholder:"+48 \u2026",autoComplete:"tel"})]}),(0,Nw.jsx)(xA,{type:"submit",disabled:c,children:c?"Zapisywanie\u2026":"Zapisz profil"})]})}),(0,Nw.jsxs)(NA,{children:[(0,Nw.jsx)(DA,{children:"Usuwanie konta"}),(0,Nw.jsx)(OA,{children:"Uwaga \u2014 usuni\u0119cie konta jest nieodwracalne. Wszystkie Twoje dane, zam\xf3wienia i faktury zostan\u0105 trwale usuni\u0119te."}),b?(0,Nw.jsx)(zA,{$variant:"error",children:b}):null,m?(0,Nw.jsxs)(MA,{children:[(0,Nw.jsx)($A,{children:"Czy na pewno chcesz usun\u0105\u0107 konto? Tej operacji nie mo\u017cna cofn\u0105\u0107."}),(0,Nw.jsxs)(FA,{children:[(0,Nw.jsx)(LA,{type:"button",disabled:y,onClick:async()=>{v(null),w(!0);try{await async function(e){return Zt(e).delete()}(t),x("/")}catch(e){v("auth/requires-recent-login"===e.code?"Wyloguj si\u0119 i zaloguj ponownie, a potem spr\xf3buj usun\u0105\u0107 konto.":e.message||"Nie uda\u0142o si\u0119 usun\u0105\u0107 konta.")}finally{w(!1)}},children:y?"Usuwanie\u2026":"Tak, usu\u0144 konto"}),(0,Nw.jsx)(kA,{type:"button",onClick:()=>g(!1),children:"Anuluj"})]})]}):(0,Nw.jsx)(LA,{type:"button",onClick:()=>g(!0),children:"Usu\u0144 moje konto"})]})]})};const BA=function(e){let{user:t,profile:n,onSaved:i}=e;const[a,o]=(0,r.useState)(""),[s,l]=(0,r.useState)(""),[c,u]=(0,r.useState)(""),[d,h]=(0,r.useState)(""),[p,f]=(0,r.useState)(""),[m,g]=(0,r.useState)("Polska"),[y,w]=(0,r.useState)(!1),[b,v]=(0,r.useState)(null),[x,k]=(0,r.useState)(null);return(0,r.useEffect)(()=>{var e,t,r,i,a,s;const c=(null===n||void 0===n?void 0:n.invoice)||{};o(null!==(e=c.companyName)&&void 0!==e?e:""),l(null!==(t=c.nip)&&void 0!==t?t:""),u(null!==(r=c.street)&&void 0!==r?r:""),h(null!==(i=c.postalCode)&&void 0!==i?i:""),f(null!==(a=c.city)&&void 0!==a?a:""),g(null!==(s=c.country)&&void 0!==s?s:"Polska")},[n]),(0,Nw.jsxs)(Nw.Fragment,{children:[(0,Nw.jsx)(fA,{children:"Dane do faktury bez VAT"}),(0,Nw.jsx)(mA,{children:"Dane nabywcy na fakturze. Mo\u017cesz uzupe\u0142ni\u0107 je przed pierwszym zakupem \u2014 p\xf3\u017aniej zmienisz je w ka\u017cdej chwili."}),x?(0,Nw.jsx)(zA,{$variant:"error",children:x}):null,b?(0,Nw.jsx)(zA,{$variant:"success",children:b}):null,(0,Nw.jsx)("form",{onSubmit:async e=>{if(e.preventDefault(),k(null),v(null),t){w(!0);try{await XI(t.uid,{invoice:{companyName:a.trim(),nip:s.trim().replace(/\s/g,""),street:c.trim(),postalCode:d.trim(),city:p.trim(),country:m.trim()||"Polska"}}),v("Zapisano dane do faktury."),null===i||void 0===i||i()}catch(n){"permission-denied"===n.code?k("Brak uprawnie\u0144 \u2014 w\u0142\u0105cz Firestore i regu\u0142y z firebase/firestore.rules."):k(n.message||"Nie uda\u0142o si\u0119 zapisa\u0107.")}finally{w(!1)}}},children:(0,Nw.jsxs)(gA,{children:[(0,Nw.jsxs)(wA,{children:[(0,Nw.jsx)(bA,{htmlFor:"inv-company",children:"Nazwa firmy / imi\u0119 i nazwisko"}),(0,Nw.jsx)(vA,{id:"inv-company",value:a,onChange:e=>o(e.target.value),placeholder:"Pe\u0142na nazwa lub dane do faktury imiennej"})]}),(0,Nw.jsxs)(wA,{children:[(0,Nw.jsx)(bA,{htmlFor:"inv-nip",children:"NIP (opcjonalnie)"}),(0,Nw.jsx)(vA,{id:"inv-nip",value:s,onChange:e=>l(e.target.value),placeholder:"1234567890",inputMode:"numeric"})]}),(0,Nw.jsxs)(wA,{children:[(0,Nw.jsx)(bA,{htmlFor:"inv-street",children:"Ulica i numer"}),(0,Nw.jsx)(vA,{id:"inv-street",value:c,onChange:e=>u(e.target.value),placeholder:"ul. \u2026"})]}),(0,Nw.jsxs)(yA,{children:[(0,Nw.jsxs)(wA,{children:[(0,Nw.jsx)(bA,{htmlFor:"inv-zip",children:"Kod pocztowy"}),(0,Nw.jsx)(vA,{id:"inv-zip",value:d,onChange:e=>h(e.target.value),placeholder:"00-000"})]}),(0,Nw.jsxs)(wA,{children:[(0,Nw.jsx)(bA,{htmlFor:"inv-city",children:"Miejscowo\u015b\u0107"}),(0,Nw.jsx)(vA,{id:"inv-city",value:p,onChange:e=>f(e.target.value),placeholder:"Miasto"})]})]}),(0,Nw.jsxs)(wA,{children:[(0,Nw.jsx)(bA,{htmlFor:"inv-country",children:"Kraj"}),(0,Nw.jsx)(vA,{id:"inv-country",value:m,onChange:e=>g(e.target.value)})]}),(0,Nw.jsx)(xA,{type:"submit",disabled:y,children:y?"Zapisywanie\u2026":"Zapisz dane do faktury"})]})})]})};const VA=function(e){let{user:t}=e;const n=(0,r.useMemo)(()=>{var e,n;return null!==(e=null===t||void 0===t||null===(n=t.providerData)||void 0===n?void 0:n.some(e=>"password"===e.providerId))&&void 0!==e&&e},[t]),[i,a]=(0,r.useState)(""),[o,s]=(0,r.useState)(""),[l,c]=(0,r.useState)(""),[u,d]=(0,r.useState)(!1),[h,p]=(0,r.useState)(!1),[f,m]=(0,r.useState)(null),[g,y]=(0,r.useState)(null);return n?(0,Nw.jsxs)(Nw.Fragment,{children:[(0,Nw.jsx)(fA,{children:"Has\u0142o i bezpiecze\u0144stwo"}),(0,Nw.jsx)(mA,{children:"Aby zmieni\u0107 has\u0142o, podaj obecne has\u0142o, potem wybierz nowe."}),g?(0,Nw.jsx)(zA,{$variant:"error",children:g}):null,f?(0,Nw.jsx)(zA,{$variant:"success",children:f}):null,(0,Nw.jsx)("form",{onSubmit:async e=>{if(e.preventDefault(),y(null),m(null),null!==t&&void 0!==t&&t.email)if(o.length<6)y("Nowe has\u0142o musi mie\u0107 co najmniej 6 znak\xf3w.");else if(o===l){p(!0);try{const e=va.credential(t.email,i);await Oa(t,e),await function(e,t){return Fa(Zt(e),null,t)}(t,o),a(""),s(""),c(""),m("Has\u0142o zosta\u0142o zmienione.")}catch(n){y(kI(n.code))}finally{p(!1)}}else y("Powt\xf3rzenia has\u0142a nie s\u0105 takie same.")},children:(0,Nw.jsxs)(gA,{children:[(0,Nw.jsxs)(wA,{children:[(0,Nw.jsx)(bA,{htmlFor:"pw-current",children:"Obecne has\u0142o"}),(0,Nw.jsxs)(AA,{children:[(0,Nw.jsx)(PA,{id:"pw-current",type:u?"text":"password",value:i,onChange:e=>a(e.target.value),autoComplete:"current-password"}),(0,Nw.jsx)(RA,{type:"button",onClick:()=>d(e=>!e),"aria-label":u?"Ukryj":"Poka\u017c",children:u?(0,Nw.jsx)(Ik,{}):(0,Nw.jsx)(Ck,{})})]})]}),(0,Nw.jsxs)(wA,{children:[(0,Nw.jsx)(bA,{htmlFor:"pw-new",children:"Nowe has\u0142o"}),(0,Nw.jsx)(vA,{id:"pw-new",type:u?"text":"password",value:o,onChange:e=>s(e.target.value),autoComplete:"new-password"})]}),(0,Nw.jsxs)(wA,{children:[(0,Nw.jsx)(bA,{htmlFor:"pw-confirm",children:"Powt\xf3rz nowe has\u0142o"}),(0,Nw.jsx)(vA,{id:"pw-confirm",type:u?"text":"password",value:l,onChange:e=>c(e.target.value),autoComplete:"new-password"})]}),(0,Nw.jsx)(xA,{type:"submit",disabled:h,children:h?"Zapisywanie\u2026":"Zmie\u0144 has\u0142o"})]})})]}):(0,Nw.jsxs)(Nw.Fragment,{children:[(0,Nw.jsx)(fA,{children:"Has\u0142o i bezpiecze\u0144stwo"}),(0,Nw.jsx)(mA,{children:"Zmiana has\u0142a dotyczy kont zalogowanych e-mailem i has\u0142em."}),(0,Nw.jsx)(SA,{children:"To konto korzysta z logowania przez Google (lub innego dostawc\u0119) \u2014 nie ma ustawionego has\u0142a w Firebase. Mo\u017cesz doda\u0107 logowanie has\u0142em w konsoli Firebase (po\u0142\u0105czenie kont) albo zarz\u0105dza\u0107 has\u0142em w Google."})]})};function HA(e){var t;if(!e)return"\u2014";const n=null!==(t=e.seconds)&&void 0!==t?t:e;if("number"===typeof n)return new Date(1e3*n).toLocaleDateString("pl-PL");try{return new Date(e).toLocaleDateString("pl-PL")}catch{return"\u2014"}}const WA=function(e){let{orders:t,loading:n}=e;return n?(0,Nw.jsxs)(Nw.Fragment,{children:[(0,Nw.jsx)(fA,{children:"Zakupy"}),(0,Nw.jsx)(mA,{children:"\u0141adowanie listy zam\xf3wie\u0144\u2026"})]}):t.length?(0,Nw.jsxs)(Nw.Fragment,{children:[(0,Nw.jsx)(fA,{children:"Zakupy"}),(0,Nw.jsx)(mA,{children:"Historia Twoich zam\xf3wie\u0144."}),(0,Nw.jsx)(CA,{children:(0,Nw.jsxs)(IA,{children:[(0,Nw.jsx)("thead",{children:(0,Nw.jsxs)("tr",{children:[(0,Nw.jsx)("th",{children:"Numer"}),(0,Nw.jsx)("th",{children:"Data"}),(0,Nw.jsx)("th",{children:"Produkt"}),(0,Nw.jsx)("th",{children:"Kwota"}),(0,Nw.jsx)("th",{children:"Status"})]})}),(0,Nw.jsx)("tbody",{children:t.map(e=>(0,Nw.jsxs)("tr",{children:[(0,Nw.jsx)("td",{children:e.orderNumber||e.id}),(0,Nw.jsx)("td",{children:HA(e.createdAt)}),(0,Nw.jsx)("td",{children:e.title||e.productName||"\u2014"}),(0,Nw.jsx)("td",{children:null!=e.amount?`${e.amount} ${e.currency||"PLN"}`:"\u2014"}),(0,Nw.jsx)("td",{children:e.status||"\u2014"})]},e.id))})]})})]}):(0,Nw.jsxs)(Nw.Fragment,{children:[(0,Nw.jsx)(fA,{children:"Zakupy"}),(0,Nw.jsx)(mA,{children:"Tutaj pojawi\u0105 si\u0119 Twoje zam\xf3wienia i p\u0142atno\u015bci \u2014 dane mo\u017cna p\xf3\u017aniej pod\u0142\u0105czy\u0107 (np. Stripe, sklep, panel admina zapisuj\u0105cy do Firestore)."}),(0,Nw.jsxs)(_A,{children:[(0,Nw.jsx)(EA,{children:"\ud83d\uded2"}),(0,Nw.jsx)(jA,{children:"Brak zam\xf3wie\u0144"}),(0,Nw.jsx)(TA,{children:"Gdy z\u0142o\u017cysz pierwsze zam\xf3wienie, zobaczysz je na tej li\u015bcie."})]})]})};function GA(e){var t;if(!e)return"\u2014";const n=null!==(t=e.seconds)&&void 0!==t?t:e;if("number"===typeof n)return new Date(1e3*n).toLocaleDateString("pl-PL");try{return new Date(e).toLocaleDateString("pl-PL")}catch{return"\u2014"}}const KA=function(e){let{invoices:t,loading:n}=e;return n?(0,Nw.jsxs)(Nw.Fragment,{children:[(0,Nw.jsx)(fA,{children:"Faktury"}),(0,Nw.jsx)(mA,{children:"\u0141adowanie listy faktur\u2026"})]}):t.length?(0,Nw.jsxs)(Nw.Fragment,{children:[(0,Nw.jsx)(fA,{children:"Faktury"}),(0,Nw.jsx)(mA,{children:"Twoje faktury i linki do plik\xf3w PDF (je\u015bli dodane)."}),(0,Nw.jsx)(CA,{children:(0,Nw.jsxs)(IA,{children:[(0,Nw.jsx)("thead",{children:(0,Nw.jsxs)("tr",{children:[(0,Nw.jsx)("th",{children:"Numer"}),(0,Nw.jsx)("th",{children:"Data"}),(0,Nw.jsx)("th",{children:"Kwota"}),(0,Nw.jsx)("th",{children:"PDF"})]})}),(0,Nw.jsx)("tbody",{children:t.map(e=>(0,Nw.jsxs)("tr",{children:[(0,Nw.jsx)("td",{children:e.number||e.id}),(0,Nw.jsx)("td",{children:GA(e.issuedAt)}),(0,Nw.jsx)("td",{children:null!=e.amount?`${e.amount} ${e.currency||"PLN"}`:"\u2014"}),(0,Nw.jsx)("td",{children:e.pdfUrl?(0,Nw.jsx)("a",{href:e.pdfUrl,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--gold, #f1d592)"},children:"Pobierz"}):"\u2014"})]},e.id))})]})})]}):(0,Nw.jsxs)(Nw.Fragment,{children:[(0,Nw.jsx)(fA,{children:"Faktury"}),(0,Nw.jsx)(mA,{children:"Wystawione faktury VAT \u2014 dokumenty mo\u017cna tu dodawa\u0107 automatycznie z backendu lub r\u0119cznie z panelu administracyjnego (Firestore)."}),(0,Nw.jsxs)(_A,{children:[(0,Nw.jsx)(EA,{children:"\ud83d\udcc4"}),(0,Nw.jsx)(jA,{children:"Brak faktur"}),(0,Nw.jsx)(TA,{children:"Nie masz jeszcze wystawionych faktur powi\u0105zanych z tym kontem."})]})]})},qA=[{id:"profile",label:"Profil",icon:bk},{id:"invoice",label:"Dane do faktury",icon:function(e){return yk({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z"},child:[]}]})(e)}},{id:"security",label:"Has\u0142o i bezpiecze\u0144stwo",icon:Ek},{id:"orders",label:"Zakupy",icon:function(e){return yk({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"},child:[]}]})(e)}},{id:"invoices",label:"Faktury",icon:function(e){return yk({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M358.4 3.2L320 48 265.6 3.2a15.9 15.9 0 0 0-19.2 0L192 48 137.6 3.2a15.9 15.9 0 0 0-19.2 0L64 48 25.6 3.2C15-4.7 0 2.8 0 16v480c0 13.2 15 20.7 25.6 12.8L64 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L192 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L320 464l38.4 44.8c10.5 7.9 25.6.4 25.6-12.8V16c0-13.2-15-20.7-25.6-12.8zM320 360c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16z"},child:[]}]})(e)}}];const QA=function(){const{user:e,signOutUser:t}=Lw(),n=pe(),[i,a]=(0,r.useState)("profile"),[o,s]=(0,r.useState)(null),[l,c]=(0,r.useState)([]),[u,d]=(0,r.useState)([]),[h,p]=(0,r.useState)(!1),f=(0,r.useCallback)(async()=>{if(!e)return;const t=await async function(e){if(!Aw)return null;const t=await sy(JI(e));return t.exists()?t.data():null}(e.uid);s(t)},[e]);(0,r.useEffect)(()=>{f()},[f]),(0,r.useEffect)(()=>{e&&"orders"===i&&(p(!0),async function(e){if(!Aw)return[];try{const t=(await ly(ig(Aw,"users",e,"orders"))).docs.map(e=>({id:e.id,...e.data()}));return ZI(t,"createdAt")}catch{return[]}}(e.uid).then(c).finally(()=>p(!1)))},[e,i]),(0,r.useEffect)(()=>{e&&"invoices"===i&&(p(!0),async function(e){if(!Aw)return[];try{const t=(await ly(ig(Aw,"users",e,"invoices"))).docs.map(e=>({id:e.id,...e.data()}));return ZI(t,"issuedAt")}catch{return[]}}(e.uid).then(d).finally(()=>p(!1)))},[e,i]);const m=!Aw;return(0,Nw.jsx)(rA,{children:(0,Nw.jsx)(iA,{children:(0,Nw.jsxs)(aA,{children:[(0,Nw.jsxs)(oA,{children:[(0,Nw.jsxs)(sA,{children:[(0,Nw.jsx)(lA,{children:"Twoje konto"}),(0,Nw.jsx)(cA,{children:(null===e||void 0===e?void 0:e.email)||""})]}),(0,Nw.jsx)(uA,{children:qA.map(e=>{const t=e.icon;return(0,Nw.jsxs)(hA,{type:"button",$active:i===e.id,onClick:()=>a(e.id),children:[(0,Nw.jsx)(t,{"aria-hidden":!0}),e.label]},e.id)})}),(0,Nw.jsxs)(dA,{type:"button",onClick:async()=>{await t(),n("/")},children:[(0,Nw.jsx)(Ek,{"aria-hidden":!0}),"Wyloguj si\u0119"]})]}),(0,Nw.jsxs)(pA,{children:[m?(0,Nw.jsxs)(zA,{$variant:"error",children:["Firestore nie jest skonfigurowany lub brak po\u0142\u0105czenia. W\u0142\u0105cz Firestore w Firebase Console i opublikuj regu\u0142y z pliku"," ",(0,Nw.jsx)("code",{style:{fontSize:"0.8em"},children:"firebase/firestore.rules"}),"."]}):null,"profile"===i?(0,Nw.jsx)(UA,{user:e,profile:o,onSaved:f}):null,"invoice"===i?(0,Nw.jsx)(BA,{user:e,profile:o,onSaved:f}):null,"security"===i?(0,Nw.jsx)(VA,{user:e}):null,"orders"===i?(0,Nw.jsx)(WA,{orders:l,loading:h}):null,"invoices"===i?(0,Nw.jsx)(KA,{invoices:u,loading:h}):null]})]})})})},YA=Nx,JA=Rx,XA=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Rv(Ex.apply(void 0,$w([e],t,!1))),i=hv(r);return new Px(i,r)})`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,ZA=Cx.main`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: calc(100vh - 90px);
  padding: clamp(20px, 4vw, 40px) clamp(16px, 3vw, 32px);
  padding-bottom: clamp(48px, 8vw, 80px);
  box-sizing: border-box;

  @media (max-width: ${JA.tablet}px) {
    padding: 16px 10px 48px;
  }
`,eP=Cx.div`
  max-width: 1200px;
  margin: 0 auto;
  animation: ${XA} 0.5s ease-out;
`,tP=Cx.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 14px;
`,nP=Cx.h1`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 700;
  color: ${YA.white};
  margin: 0;
`,rP=Cx.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border: 1px solid ${YA.goldMain};
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05));
  color: ${YA.goldMain};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(212, 175, 55, 0.12));
    color: ${YA.goldHover};
    box-shadow: 0 4px 20px rgba(212, 175, 55, 0.2);
  }
`,iP=Cx.div`
  border-radius: 16px;
  background: linear-gradient(
    165deg,
    rgba(120, 40, 64, 0.35) 0%,
    rgba(46, 14, 22, 0.65) 50%,
    rgba(30, 8, 16, 0.85) 100%
  );
  border: 1px solid ${YA.navBorderGold18};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  overflow: hidden;
`,aP=Cx.div`
  display: grid;
  grid-template-columns: 60px 1fr 120px 100px 100px 130px;
  gap: 12px;
  padding: 14px 20px;
  background: rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid ${YA.navBorderGold18};
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: ${YA.goldMain};

  @media (max-width: ${JA.tablet}px) {
    display: none;
  }
`,oP=Cx.div`
  display: grid;
  grid-template-columns: 60px 1fr 120px 100px 100px 130px;
  gap: 12px;
  padding: 12px 20px;
  align-items: center;
  border-bottom: 1px solid rgba(212, 175, 55, 0.06);
  transition: background 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(212, 175, 55, 0.04);
  }

  @media (max-width: ${JA.tablet}px) {
    grid-template-columns: 50px 1fr;
    grid-template-rows: auto auto;
    gap: 6px 12px;
    padding: 14px 16px;
  }
`,sP=Cx.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid rgba(212, 175, 55, 0.15);

  @media (max-width: ${JA.tablet}px) {
    grid-row: 1 / 3;
    width: 44px;
    height: 44px;
  }
`,lP=Cx.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${YA.white};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,cP=Cx.span`
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.65);

  @media (max-width: ${JA.tablet}px) {
    display: none;
  }
`,uP=Cx.div`
  display: flex;
  gap: 8px;

  @media (max-width: ${JA.tablet}px) {
    grid-column: 2;
  }
`,dP=Ex`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid;
  transition: all 0.25s ease;
`,hP=Cx.button`
  ${dP}
  background: rgba(212, 175, 55, 0.1);
  border-color: rgba(212, 175, 55, 0.3);
  color: ${YA.goldMain};

  &:hover {
    background: rgba(212, 175, 55, 0.2);
    color: ${YA.goldHover};
  }
`,pP=Cx.button`
  ${dP}
  background: rgba(158, 30, 54, 0.1);
  border-color: rgba(158, 30, 54, 0.3);
  color: ${YA.bordoAccent};

  &:hover {
    background: rgba(158, 30, 54, 0.25);
    color: #e74c6f;
  }
`,fP=Cx.div`
  border-radius: 16px;
  background: linear-gradient(
    165deg,
    rgba(120, 40, 64, 0.4) 0%,
    rgba(46, 14, 22, 0.7) 50%,
    rgba(30, 8, 16, 0.88) 100%
  );
  border: 1px solid ${YA.navBorderGold18};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  padding: clamp(20px, 3vw, 32px);
  margin-bottom: 24px;
  animation: ${XA} 0.35s ease-out;
`,mP=Cx.h2`
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: ${YA.white};
  margin: 0 0 24px 0;
  padding-bottom: 14px;
  border-bottom: 1px solid ${YA.navBorderGold18};
`,gP=Cx.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  @media (max-width: ${JA.tablet}px) {
    grid-template-columns: 1fr;
  }
`,yP=Cx.div`
  grid-column: 1 / -1;
`,wP=Cx.label`
  display: block;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${YA.goldMain};
  text-transform: uppercase;
  letter-spacing: 0.6px;
  margin-bottom: 6px;
`,bP=Cx.input`
  width: 100%;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(212, 175, 55, 0.18);
  background: rgba(0, 0, 0, 0.3);
  color: ${YA.white};
  font-size: 0.88rem;
  font-family: inherit;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${YA.goldMain};
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`,vP=Cx.textarea`
  width: 100%;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(212, 175, 55, 0.18);
  background: rgba(0, 0, 0, 0.3);
  color: ${YA.white};
  font-size: 0.88rem;
  font-family: inherit;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${YA.goldMain};
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`,xP=Cx.select`
  width: 100%;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(212, 175, 55, 0.18);
  background: rgba(0, 0, 0, 0.3);
  color: ${YA.white};
  font-size: 0.88rem;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${YA.goldMain};
  }

  option {
    background: #2e0810;
    color: ${YA.white};
  }
`,kP=Cx.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`,zP=Cx.button`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid rgba(212, 175, 55, 0.25);
  transition: all 0.25s ease;
  background: ${e=>e.$active?"linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(212, 175, 55, 0.12))":"rgba(0, 0, 0, 0.2)"};
  color: ${e=>e.$active?YA.goldHover:"rgba(255,255,255,0.6)"};
  border-color: ${e=>e.$active?YA.goldMain:"rgba(212, 175, 55, 0.15)"};

  &:hover {
    background: rgba(212, 175, 55, 0.18);
    color: ${YA.goldMain};
  }
`,SP=Cx.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 6px;
`,_P=Cx.button`
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(158, 30, 54, 0.3);
  background: rgba(158, 30, 54, 0.1);
  color: ${YA.bordoAccent};
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(158, 30, 54, 0.3);
    color: #e74c6f;
  }
`,EP=Cx.button`
  padding: 6px 16px;
  border-radius: 8px;
  border: 1px dashed rgba(212, 175, 55, 0.3);
  background: transparent;
  color: ${YA.goldMain};
  font-size: 0.82rem;
  cursor: pointer;
  margin-top: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.08);
    border-color: ${YA.goldMain};
  }
`,jP=Cx.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px;
  border: 2px dashed rgba(212, 175, 55, 0.2);
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 80px;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.82rem;

  input {
    display: none;
  }

  &:hover {
    border-color: ${YA.goldMain};
    background: rgba(212, 175, 55, 0.04);
    color: ${YA.goldMain};
  }
`,TP=Cx.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`,CP=Cx.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(212, 175, 55, 0.15);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,IP=Cx.button`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.7);
  color: #e74c6f;
  font-size: 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${CP}:hover & {
    opacity: 1;
  }
`,AP=Cx.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid ${YA.navBorderGold18};
`,PP=Cx.button`
  padding: 10px 28px;
  border-radius: 10px;
  border: 1px solid ${YA.goldMain};
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.25), rgba(212, 175, 55, 0.08));
  color: ${YA.goldMain};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.4), rgba(212, 175, 55, 0.15));
    color: ${YA.goldHover};
    box-shadow: 0 4px 20px rgba(212, 175, 55, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,RP=Cx.button`
  padding: 10px 22px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: ${YA.white};
  }
`,NP=Cx.div`
  padding: 48px 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.9rem;
`,DP=Cx.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
`,OP=Cx.div`
  position: fixed;
  bottom: 28px;
  right: 28px;
  padding: 12px 22px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 500;
  z-index: 999;
  animation: ${XA} 0.3s ease-out;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

  ${e=>e.$error?Ex`
          background: rgba(158, 30, 54, 0.9);
          border: 1px solid rgba(231, 76, 111, 0.4);
          color: #fdd;
        `:Ex`
          background: rgba(30, 100, 50, 0.9);
          border: 1px solid rgba(80, 200, 100, 0.4);
          color: #dfd;
        `}
`,LP=Cx.div`
  position: fixed;
  inset: 0;
  z-index: 998;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  animation: ${XA} 0.2s ease-out;
`,MP=Cx.div`
  background: linear-gradient(
    165deg,
    rgba(120, 40, 64, 0.85) 0%,
    rgba(30, 8, 16, 0.95) 100%
  );
  border: 1px solid ${YA.navBorderGold18};
  border-radius: 16px;
  padding: 28px 32px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`,$P=Cx.p`
  color: ${YA.white};
  font-size: 0.95rem;
  margin: 0 0 22px;
  line-height: 1.5;
`,FP=Cx.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`,UP=[{value:"portfolio",label:"Portfolio"},{value:"us\u0142ugi",label:"Us\u0142ugi"},{value:"sklep",label:"Sklep"},{value:"biznes",label:"Biznes"},{value:"edukacja",label:"Edukacja"},{value:"landing",label:"Landing Page"}],BP=["elegancki","minimalistyczny","nowoczesny","klasyczny","kreatywny"],VP=["z\u0142oty","bordowy","srebrny","bia\u0142y","czarny","pastelowy","granatowy","r\xf3\u017cowy","zielony","wielokolorowy"],HP={title:"",shortDescription:"",price:"",category:"portfolio",style:"elegancki",colors:[],fullDescription:"",youtubeUrl:"",features:[""],image:"",images:[]};function WP(e){let{offer:t,onSave:n,onCancel:i}=e;const[a,o]=(0,r.useState)(HP),[s,l]=(0,r.useState)(!1),[c,u]=(0,r.useState)(!1);(0,r.useEffect)(()=>{o(t?{title:t.title||"",shortDescription:t.shortDescription||"",price:t.price||"",category:t.category||"portfolio",style:t.style||"elegancki",colors:t.colors||[],fullDescription:t.fullDescription||"",youtubeUrl:t.youtubeUrl||"",features:t.features&&t.features.length>0?[...t.features]:[""],image:t.image||"",images:t.images||[]}:HP)},[t]);const d=(e,t)=>o(n=>({...n,[e]:t}));return(0,Nw.jsxs)(fP,{as:"form",onSubmit:async e=>{if(e.preventDefault(),!a.title.trim()||!a.price.trim())return;l(!0);const t={...a,features:a.features.filter(e=>e.trim())};await n(t),l(!1)},children:[(0,Nw.jsx)(mP,{children:t?"Edytuj ofert\u0119":"Nowa oferta"}),(0,Nw.jsxs)(gP,{children:[(0,Nw.jsxs)("div",{children:[(0,Nw.jsx)(wP,{children:"Tytu\u0142 *"}),(0,Nw.jsx)(bP,{value:a.title,onChange:e=>d("title",e.target.value),placeholder:"np. Strona Portfolio",required:!0})]}),(0,Nw.jsxs)("div",{children:[(0,Nw.jsx)(wP,{children:"Cena *"}),(0,Nw.jsx)(bP,{value:a.price,onChange:e=>d("price",e.target.value),placeholder:"np. 1490 z\u0142",required:!0})]}),(0,Nw.jsxs)(yP,{children:[(0,Nw.jsx)(wP,{children:"Kr\xf3tki opis"}),(0,Nw.jsx)(bP,{value:a.shortDescription,onChange:e=>d("shortDescription",e.target.value),placeholder:"Prezentuj swoje prace i osi\u0105gni\u0119cia"})]}),(0,Nw.jsxs)("div",{children:[(0,Nw.jsx)(wP,{children:"Kategoria"}),(0,Nw.jsx)(xP,{value:a.category,onChange:e=>d("category",e.target.value),children:UP.map(e=>(0,Nw.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,Nw.jsxs)("div",{children:[(0,Nw.jsx)(wP,{children:"Styl"}),(0,Nw.jsx)(xP,{value:a.style,onChange:e=>d("style",e.target.value),children:BP.map(e=>(0,Nw.jsx)("option",{value:e,children:e},e))})]}),(0,Nw.jsxs)(yP,{children:[(0,Nw.jsx)(wP,{children:"Kolory"}),(0,Nw.jsx)(kP,{children:VP.map(e=>(0,Nw.jsx)(zP,{type:"button",$active:a.colors.includes(e),onClick:()=>(e=>{o(t=>({...t,colors:t.colors.includes(e)?t.colors.filter(t=>t!==e):[...t.colors,e]}))})(e),children:e},e))})]}),(0,Nw.jsxs)(yP,{children:[(0,Nw.jsx)(wP,{children:"Pe\u0142ny opis"}),(0,Nw.jsx)(vP,{value:a.fullDescription,onChange:e=>d("fullDescription",e.target.value),placeholder:"Szczeg\xf3\u0142owy opis oferty\u2026"})]}),(0,Nw.jsxs)(yP,{children:[(0,Nw.jsx)(wP,{children:"YouTube URL"}),(0,Nw.jsx)(bP,{value:a.youtubeUrl,onChange:e=>d("youtubeUrl",e.target.value),placeholder:"https://www.youtube.com/embed/..."})]}),(0,Nw.jsxs)(yP,{children:[(0,Nw.jsx)(wP,{children:"Cechy / Features"}),a.features.map((e,t)=>(0,Nw.jsxs)(SP,{children:[(0,Nw.jsx)(bP,{value:e,onChange:e=>((e,t)=>{const n=[...a.features];n[e]=t,d("features",n)})(t,e.target.value),placeholder:`Cecha ${t+1}`}),a.features.length>1&&(0,Nw.jsx)(_P,{type:"button",onClick:()=>(e=>d("features",a.features.filter((t,n)=>n!==e)))(t),children:"\xd7"})]},t)),(0,Nw.jsx)(EP,{type:"button",onClick:()=>d("features",[...a.features,""]),children:"+ Dodaj cech\u0119"})]}),(0,Nw.jsxs)("div",{children:[(0,Nw.jsx)(wP,{children:"Zdj\u0119cie g\u0142\xf3wne"}),a.image&&(0,Nw.jsx)(TP,{children:(0,Nw.jsxs)(CP,{children:[(0,Nw.jsx)("img",{src:a.image,alt:"main"}),(0,Nw.jsx)(IP,{type:"button",onClick:()=>d("image",""),children:"\xd7"})]})}),(0,Nw.jsxs)(jP,{children:[(0,Nw.jsx)(vk,{}),c?"Trwa upload\u2026":"Kliknij, aby wgra\u0107",(0,Nw.jsx)("input",{type:"file",accept:"image/*",onChange:async e=>{var t;const n=null===(t=e.target.files)||void 0===t?void 0:t[0];if(n){u(!0);try{const e=await dT(n,"main");d("image",e)}catch(r){alert("B\u0142\u0105d uploadu: "+r.message)}u(!1)}},disabled:c})]})]}),(0,Nw.jsxs)("div",{children:[(0,Nw.jsx)(wP,{children:"Galeria zdj\u0119\u0107"}),a.images.length>0&&(0,Nw.jsx)(TP,{children:a.images.map((e,t)=>(0,Nw.jsxs)(CP,{children:[(0,Nw.jsx)("img",{src:e,alt:`gallery-${t}`}),(0,Nw.jsx)(IP,{type:"button",onClick:()=>{return e=t,void d("images",a.images.filter((t,n)=>n!==e));var e},children:"\xd7"})]},t))}),(0,Nw.jsxs)(jP,{children:[(0,Nw.jsx)(vk,{}),c?"Trwa upload\u2026":"Kliknij, aby wgra\u0107",(0,Nw.jsx)("input",{type:"file",accept:"image/*",multiple:!0,onChange:async e=>{const t=Array.from(e.target.files||[]);if(t.length){u(!0);try{const e=[];for(const n of t){const t=await dT(n,"gallery");e.push(t)}d("images",[...a.images,...e])}catch(n){alert("B\u0142\u0105d uploadu: "+n.message)}u(!1)}},disabled:c})]})]})]}),(0,Nw.jsxs)(AP,{children:[(0,Nw.jsx)(RP,{type:"button",onClick:i,children:"Anuluj"}),(0,Nw.jsx)(PP,{type:"submit",disabled:s||c,children:s?"Zapisywanie\u2026":t?"Zapisz zmiany":"Dodaj ofert\u0119"})]})]})}function GP(){const[e,t]=(0,r.useState)([]),[n,i]=(0,r.useState)(!0),[a,o]=(0,r.useState)(null),[s,l]=(0,r.useState)(!1),[c,u]=(0,r.useState)(null),[d,h]=(0,r.useState)(null),p=function(e){h({msg:e,error:arguments.length>1&&void 0!==arguments[1]&&arguments[1]}),setTimeout(()=>h(null),3e3)},f=(0,r.useCallback)(async()=>{i(!0);try{const e=await sT();t(e)}catch(e){p("B\u0142\u0105d \u0142adowania ofert: "+e.message,!0)}i(!1)},[]);(0,r.useEffect)(()=>{f()},[f]);return(0,Nw.jsx)(ZA,{children:(0,Nw.jsxs)(eP,{children:[(0,Nw.jsxs)(tP,{children:[(0,Nw.jsx)(nP,{children:"Panel administracyjny"}),!s&&!a&&(0,Nw.jsxs)(rP,{onClick:()=>{o(null),l(!0)},children:[(0,Nw.jsx)(_k,{})," Dodaj ofert\u0119"]})]}),(s||a)&&(0,Nw.jsx)(WP,{offer:a,onSave:a?async e=>{try{await cT(a.id,e),p("Oferta zaktualizowana"),o(null),f()}catch(t){p("B\u0142\u0105d: "+t.message,!0)}}:async e=>{try{await lT(e),p("Oferta dodana"),l(!1),f()}catch(t){p("B\u0142\u0105d: "+t.message,!0)}},onCancel:()=>{l(!1),o(null)}}),n?(0,Nw.jsx)(DP,{children:"\u0141adowanie ofert\u2026"}):0===e.length?(0,Nw.jsx)(iP,{children:(0,Nw.jsx)(NP,{children:'Brak ofert w bazie. Kliknij \u201eDodaj ofert\u0119", aby doda\u0107 pierwsz\u0105.'})}):(0,Nw.jsxs)(iP,{children:[(0,Nw.jsxs)(aP,{children:[(0,Nw.jsx)("span",{}),(0,Nw.jsx)("span",{children:"Tytu\u0142"}),(0,Nw.jsx)("span",{children:"Kategoria"}),(0,Nw.jsx)("span",{children:"Styl"}),(0,Nw.jsx)("span",{children:"Cena"}),(0,Nw.jsx)("span",{children:"Akcje"})]}),e.map(e=>(0,Nw.jsxs)(oP,{children:[(0,Nw.jsx)(sP,{src:e.image||"https://via.placeholder.com/48x48?text=?",alt:""}),(0,Nw.jsx)(lP,{children:e.title}),(0,Nw.jsx)(cP,{children:e.category||"\u2014"}),(0,Nw.jsx)(cP,{children:e.style||"\u2014"}),(0,Nw.jsx)(cP,{children:e.price}),(0,Nw.jsxs)(uP,{children:[(0,Nw.jsx)(hP,{onClick:()=>{return t=e,l(!1),void o(t);var t},children:"Edytuj"}),(0,Nw.jsx)(pP,{onClick:()=>u(e),children:"Usu\u0144"})]})]},e.id))]}),c&&(0,Nw.jsx)(LP,{children:(0,Nw.jsxs)(MP,{children:[(0,Nw.jsxs)($P,{children:["Czy na pewno chcesz usun\u0105\u0107 ofert\u0119 \u201e",c.title,'"?']}),(0,Nw.jsxs)(FP,{children:[(0,Nw.jsx)(RP,{onClick:()=>u(null),children:"Anuluj"}),(0,Nw.jsx)(pP,{onClick:async()=>{if(c)try{await uT(c.id),p("Oferta usuni\u0119ta"),u(null),f()}catch(e){p("B\u0142\u0105d: "+e.message,!0)}},children:"Usu\u0144"})]})]})}),d&&(0,Nw.jsx)(OP,{$error:d.error,children:d.msg})]})})}const KP=function(e){let{children:t}=e;const{user:n,loading:r}=Lw(),i=ue();return r?(0,Nw.jsx)("div",{style:{minHeight:"45vh",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,0.7)",fontSize:"0.95rem"},children:"\u0141adowanie\u2026"}):n?t:(0,Nw.jsx)(Ne,{to:"/login",replace:!0,state:{from:i.pathname}})},qP={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyA-i1utKVyVUaR3U2HKExsfecsiV9ChJlw",REACT_APP_FIREBASE_APP_ID:"1:852297752171:web:081021a1f6b86dfe5cdb2e",REACT_APP_FIREBASE_AUTH_DOMAIN:"klaraqueen.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"852297752171",REACT_APP_FIREBASE_PROJECT_ID:"klaraqueen",REACT_APP_FIREBASE_STORAGE_BUCKET:"klaraqueen.firebasestorage.app"}.REACT_APP_ADMIN_EMAIL;const QP=function(e){let{children:t}=e;const{user:n,loading:r}=Lw();return r?(0,Nw.jsx)("div",{style:{minHeight:"45vh",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,0.7)",fontSize:"0.95rem"},children:"\u0141adowanie\u2026"}):n&&n.email===qP?t:(0,Nw.jsx)(Ne,{to:"/",replace:!0})};const YP=function(){return(0,Nw.jsxs)(Iz,{children:[(0,Nw.jsx)(Cz,{}),(0,Nw.jsx)(Mx,{}),(0,Nw.jsx)(Zk,{}),(0,Nw.jsx)(Tz,{}),(0,Nw.jsx)(Az,{children:(0,Nw.jsxs)(Le,{children:[(0,Nw.jsx)(De,{path:"/",element:(0,Nw.jsx)(E_,{})}),(0,Nw.jsx)(De,{path:"/about",element:(0,Nw.jsx)(xE,{})}),(0,Nw.jsx)(De,{path:"/offer",element:(0,Nw.jsx)(kC,{})}),(0,Nw.jsx)(De,{path:"/offer/:id",element:(0,Nw.jsx)(kC,{})}),(0,Nw.jsx)(De,{path:"/blog",element:(0,Nw.jsx)(WC,{})}),(0,Nw.jsx)(De,{path:"/blog/:id",element:(0,Nw.jsx)(sI,{})})," ",(0,Nw.jsx)(De,{path:"/testimonials",element:(0,Nw.jsx)(vI,{})})," ",(0,Nw.jsx)(De,{path:"/questions",element:(0,Nw.jsx)(OE,{})}),(0,Nw.jsx)(De,{path:"/cooperation",element:(0,Nw.jsx)(Nj,{})}),(0,Nw.jsx)(De,{path:"/login",element:(0,Nw.jsx)(qI,{})}),(0,Nw.jsx)(De,{path:"/register",element:(0,Nw.jsx)(QI,{})}),(0,Nw.jsx)(De,{path:"/forgot-password",element:(0,Nw.jsx)(YI,{})}),(0,Nw.jsx)(De,{path:"/konto",element:(0,Nw.jsx)(KP,{children:(0,Nw.jsx)(QA,{})})}),(0,Nw.jsx)(De,{path:"/admin",element:(0,Nw.jsx)(QP,{children:(0,Nw.jsx)(GP,{})})})]})}),(0,Nw.jsx)(jz,{})]})};a.createRoot(document.getElementById("root")).render((0,Nw.jsx)(r.StrictMode,{children:(0,Nw.jsx)(gt,{basename:void 0,children:(0,Nw.jsx)(Ow,{children:(0,Nw.jsx)(YP,{})})})}))})();
//# sourceMappingURL=main.323ffb78.js.map