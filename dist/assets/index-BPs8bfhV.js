var g9=Object.defineProperty;var C9=(t,e,n)=>e in t?g9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ea=(t,e,n)=>(C9(t,typeof e!="symbol"?e+"":e,n),n);function v9(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var A9=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wh={exports:{}},U0={},Xh={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs=Symbol.for("react.element"),_9=Symbol.for("react.portal"),B9=Symbol.for("react.fragment"),D9=Symbol.for("react.strict_mode"),F9=Symbol.for("react.profiler"),y9=Symbol.for("react.provider"),S9=Symbol.for("react.context"),M9=Symbol.for("react.forward_ref"),w9=Symbol.for("react.suspense"),T9=Symbol.for("react.memo"),P9=Symbol.for("react.lazy"),$u=Symbol.iterator;function R9(t){return t===null||typeof t!="object"?null:(t=$u&&t[$u]||t["@@iterator"],typeof t=="function"?t:null)}var jh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yh=Object.assign,qh={};function No(t,e,n){this.props=t,this.context=e,this.refs=qh,this.updater=n||jh}No.prototype.isReactComponent={};No.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};No.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $h(){}$h.prototype=No.prototype;function Nc(t,e,n){this.props=t,this.context=e,this.refs=qh,this.updater=n||jh}var Uc=Nc.prototype=new $h;Uc.constructor=Nc;Yh(Uc,No.prototype);Uc.isPureReactComponent=!0;var Ku=Array.isArray,Kh=Object.prototype.hasOwnProperty,Ic={current:null},Zh={key:!0,ref:!0,__self:!0,__source:!0};function Qh(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Kh.call(e,r)&&!Zh.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),x=0;x<a;x++)l[x]=arguments[x+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zs,type:t,key:o,ref:s,props:i,_owner:Ic.current}}function b9(t,e){return{$$typeof:zs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Oc(t){return typeof t=="object"&&t!==null&&t.$$typeof===zs}function L9(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zu=/\/+/g;function ml(t,e){return typeof t=="object"&&t!==null&&t.key!=null?L9(""+t.key):e.toString(36)}function Ha(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case zs:case _9:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+ml(s,0):r,Ku(i)?(n="",t!=null&&(n=t.replace(Zu,"$&/")+"/"),Ha(i,e,n,"",function(x){return x})):i!=null&&(Oc(i)&&(i=b9(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Zu,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Ku(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+ml(o,a);s+=Ha(o,e,n,l,i)}else if(l=R9(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+ml(o,a++),s+=Ha(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ta(t,e,n){if(t==null)return t;var r=[],i=0;return Ha(t,r,"","",function(o){return e.call(n,o,i++)}),r}function k9(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},Va={transition:null},N9={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:Va,ReactCurrentOwner:Ic};Oe.Children={map:ta,forEach:function(t,e,n){ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ta(t,function(){e++}),e},toArray:function(t){return ta(t,function(e){return e})||[]},only:function(t){if(!Oc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=No;Oe.Fragment=B9;Oe.Profiler=F9;Oe.PureComponent=Nc;Oe.StrictMode=D9;Oe.Suspense=w9;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N9;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yh({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Ic.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Kh.call(e,l)&&!Zh.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var x=0;x<l;x++)a[x]=arguments[x+2];r.children=a}return{$$typeof:zs,type:t.type,key:i,ref:o,props:r,_owner:s}};Oe.createContext=function(t){return t={$$typeof:S9,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:y9,_context:t},t.Consumer=t};Oe.createElement=Qh;Oe.createFactory=function(t){var e=Qh.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:M9,render:t}};Oe.isValidElement=Oc;Oe.lazy=function(t){return{$$typeof:P9,_payload:{_status:-1,_result:t},_init:k9}};Oe.memo=function(t,e){return{$$typeof:T9,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=Va.transition;Va.transition={};try{t()}finally{Va.transition=e}};Oe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Oe.useCallback=function(t,e){return jt.current.useCallback(t,e)};Oe.useContext=function(t){return jt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return jt.current.useEffect(t,e)};Oe.useId=function(){return jt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return jt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};Oe.useRef=function(t){return jt.current.useRef(t)};Oe.useState=function(t){return jt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return jt.current.useTransition()};Oe.version="18.2.0";Xh.exports=Oe;var oe=Xh.exports;const Jh=Gh(oe),U9=v9({__proto__:null,default:Jh},[oe]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I9=oe,O9=Symbol.for("react.element"),z9=Symbol.for("react.fragment"),H9=Object.prototype.hasOwnProperty,V9=I9.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G9={key:!0,ref:!0,__self:!0,__source:!0};function ep(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)H9.call(e,r)&&!G9.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:O9,type:t,key:o,ref:s,props:i,_owner:V9.current}}U0.Fragment=z9;U0.jsx=ep;U0.jsxs=ep;Wh.exports=U0;var K=Wh.exports,Sx={},tp={exports:{}},dn={},np={exports:{}},rp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,z){var H=R.length;R.push(z);e:for(;0<H;){var q=H-1>>>1,le=R[q];if(0<i(le,z))R[q]=z,R[H]=le,H=q;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var z=R[0],H=R.pop();if(H!==z){R[0]=H;e:for(var q=0,le=R.length,ye=le>>>1;q<ye;){var k=2*(q+1)-1,ne=R[k],se=k+1,re=R[se];if(0>i(ne,H))se<le&&0>i(re,ne)?(R[q]=re,R[se]=H,q=se):(R[q]=ne,R[k]=H,q=k);else if(se<le&&0>i(re,H))R[q]=re,R[se]=H,q=se;else break e}}return z}function i(R,z){var H=R.sortIndex-z.sortIndex;return H!==0?H:R.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],x=[],u=1,c=null,f=3,m=!1,E=!1,g=!1,h=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(R){for(var z=n(x);z!==null;){if(z.callback===null)r(x);else if(z.startTime<=R)r(x),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(x)}}function v(R){if(g=!1,p(R),!E)if(n(l)!==null)E=!0,$(F);else{var z=n(x);z!==null&&W(v,z.startTime-R)}}function F(R,z){E=!1,g&&(g=!1,d(M),M=-1),m=!0;var H=f;try{for(p(z),c=n(l);c!==null&&(!(c.expirationTime>z)||R&&!b());){var q=c.callback;if(typeof q=="function"){c.callback=null,f=c.priorityLevel;var le=q(c.expirationTime<=z);z=t.unstable_now(),typeof le=="function"?c.callback=le:c===n(l)&&r(l),p(z)}else r(l);c=n(l)}if(c!==null)var ye=!0;else{var k=n(x);k!==null&&W(v,k.startTime-z),ye=!1}return ye}finally{c=null,f=H,m=!1}}var B=!1,_=null,M=-1,D=5,A=-1;function b(){return!(t.unstable_now()-A<D)}function L(){if(_!==null){var R=t.unstable_now();A=R;var z=!0;try{z=_(!0,R)}finally{z?P():(B=!1,_=null)}}else B=!1}var P;if(typeof C=="function")P=function(){C(L)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,U=I.port2;I.port1.onmessage=L,P=function(){U.postMessage(null)}}else P=function(){h(L,0)};function $(R){_=R,B||(B=!0,P())}function W(R,z){M=h(function(){R(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){E||m||(E=!0,$(F))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var H=f;f=z;try{return R()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var H=f;f=R;try{return z()}finally{f=H}},t.unstable_scheduleCallback=function(R,z,H){var q=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?q+H:q):H=q,R){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=H+le,R={id:u++,callback:z,priorityLevel:R,startTime:H,expirationTime:le,sortIndex:-1},H>q?(R.sortIndex=H,e(x,R),n(l)===null&&R===n(x)&&(g?(d(M),M=-1):g=!0,W(v,H-q))):(R.sortIndex=le,e(l,R),E||m||(E=!0,$(F))),R},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(R){var z=f;return function(){var H=f;f=z;try{return R.apply(this,arguments)}finally{f=H}}}})(rp);np.exports=rp;var W9=np.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip=oe,un=W9;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var op=new Set,Cs={};function bi(t,e){Do(t,e),Do(t+"Capture",e)}function Do(t,e){for(Cs[t]=e,t=0;t<e.length;t++)op.add(e[t])}var hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mx=Object.prototype.hasOwnProperty,X9=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qu={},Ju={};function j9(t){return Mx.call(Ju,t)?!0:Mx.call(Qu,t)?!1:X9.test(t)?Ju[t]=!0:(Qu[t]=!0,!1)}function Y9(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function q9(t,e,n,r){if(e===null||typeof e>"u"||Y9(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Lt[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Lt[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Lt[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Lt[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Lt[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Lt[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Lt[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Lt[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Lt[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var zc=/[\-:]([a-z])/g;function Hc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zc,Hc);Lt[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zc,Hc);Lt[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zc,Hc);Lt[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Lt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Lt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vc(t,e,n,r){var i=Lt.hasOwnProperty(e)?Lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(q9(e,n,i,r)&&(n=null),r||i===null?j9(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Cr=ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na=Symbol.for("react.element"),to=Symbol.for("react.portal"),no=Symbol.for("react.fragment"),Gc=Symbol.for("react.strict_mode"),wx=Symbol.for("react.profiler"),sp=Symbol.for("react.provider"),ap=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),Tx=Symbol.for("react.suspense"),Px=Symbol.for("react.suspense_list"),Xc=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),lp=Symbol.for("react.offscreen"),ed=Symbol.iterator;function Xo(t){return t===null||typeof t!="object"?null:(t=ed&&t[ed]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,El;function os(t){if(El===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);El=e&&e[1]||""}return`
`+El+t}var gl=!1;function Cl(t,e){if(!t||gl)return"";gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(x){var r=x}Reflect.construct(t,[],e)}else{try{e.call()}catch(x){r=x}t.call(e.prototype)}else{try{throw Error()}catch(x){r=x}t()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var i=x.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{gl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?os(t):""}function $9(t){switch(t.tag){case 5:return os(t.type);case 16:return os("Lazy");case 13:return os("Suspense");case 19:return os("SuspenseList");case 0:case 2:case 15:return t=Cl(t.type,!1),t;case 11:return t=Cl(t.type.render,!1),t;case 1:return t=Cl(t.type,!0),t;default:return""}}function Rx(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case no:return"Fragment";case to:return"Portal";case wx:return"Profiler";case Gc:return"StrictMode";case Tx:return"Suspense";case Px:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ap:return(t.displayName||"Context")+".Consumer";case sp:return(t._context.displayName||"Context")+".Provider";case Wc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xc:return e=t.displayName||null,e!==null?e:Rx(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return Rx(t(e))}catch{}}return null}function K9(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rx(e);case 8:return e===Gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Z9(t){var e=xp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ra(t){t._valueTracker||(t._valueTracker=Z9(t))}function cp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function r0(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bx(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function td(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function up(t,e){e=e.checked,e!=null&&Vc(t,"checked",e,!1)}function Lx(t,e){up(t,e);var n=Kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kx(t,e.type,n):e.hasOwnProperty("defaultValue")&&kx(t,e.type,Kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kx(t,e,n){(e!=="number"||r0(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ss=Array.isArray;function po(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Nx(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(ss(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kr(n)}}function dp(t,e){var n=Kr(e.value),r=Kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function id(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ux(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ia,hp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ia=ia||document.createElement("div"),ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Q9=["Webkit","ms","Moz","O"];Object.keys(cs).forEach(function(t){Q9.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),cs[e]=cs[t]})});function pp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||cs.hasOwnProperty(t)&&cs[t]?(""+e).trim():e+"px"}function mp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var J9=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ix(t,e){if(e){if(J9[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Ox(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zx=null;function jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hx=null,mo=null,Eo=null;function od(t){if(t=Gs(t)){if(typeof Hx!="function")throw Error(te(280));var e=t.stateNode;e&&(e=V0(e),Hx(t.stateNode,t.type,e))}}function Ep(t){mo?Eo?Eo.push(t):Eo=[t]:mo=t}function gp(){if(mo){var t=mo,e=Eo;if(Eo=mo=null,od(t),e)for(t=0;t<e.length;t++)od(e[t])}}function Cp(t,e){return t(e)}function vp(){}var vl=!1;function Ap(t,e,n){if(vl)return t(e,n);vl=!0;try{return Cp(t,e,n)}finally{vl=!1,(mo!==null||Eo!==null)&&(vp(),gp())}}function As(t,e){var n=t.stateNode;if(n===null)return null;var r=V0(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Vx=!1;if(hr)try{var jo={};Object.defineProperty(jo,"passive",{get:function(){Vx=!0}}),window.addEventListener("test",jo,jo),window.removeEventListener("test",jo,jo)}catch{Vx=!1}function e8(t,e,n,r,i,o,s,a,l){var x=Array.prototype.slice.call(arguments,3);try{e.apply(n,x)}catch(u){this.onError(u)}}var us=!1,i0=null,o0=!1,Gx=null,t8={onError:function(t){us=!0,i0=t}};function n8(t,e,n,r,i,o,s,a,l){us=!1,i0=null,e8.apply(t8,arguments)}function r8(t,e,n,r,i,o,s,a,l){if(n8.apply(this,arguments),us){if(us){var x=i0;us=!1,i0=null}else throw Error(te(198));o0||(o0=!0,Gx=x)}}function Li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _p(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sd(t){if(Li(t)!==t)throw Error(te(188))}function i8(t){var e=t.alternate;if(!e){if(e=Li(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return sd(i),t;if(o===r)return sd(i),e;o=o.sibling}throw Error(te(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(te(189))}}if(n.alternate!==r)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Bp(t){return t=i8(t),t!==null?Dp(t):null}function Dp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dp(t);if(e!==null)return e;t=t.sibling}return null}var Fp=un.unstable_scheduleCallback,ad=un.unstable_cancelCallback,o8=un.unstable_shouldYield,s8=un.unstable_requestPaint,Et=un.unstable_now,a8=un.unstable_getCurrentPriorityLevel,Yc=un.unstable_ImmediatePriority,yp=un.unstable_UserBlockingPriority,s0=un.unstable_NormalPriority,l8=un.unstable_LowPriority,Sp=un.unstable_IdlePriority,I0=null,qn=null;function x8(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(I0,t,void 0,(t.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:d8,c8=Math.log,u8=Math.LN2;function d8(t){return t>>>=0,t===0?32:31-(c8(t)/u8|0)|0}var oa=64,sa=4194304;function as(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function a0(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=as(a):(o&=s,o!==0&&(r=as(o)))}else s=n&~i,s!==0?r=as(s):o!==0&&(r=as(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bn(e),i=1<<n,r|=t[n],e&=~i;return r}function f8(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h8(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-bn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=f8(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Wx(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mp(){var t=oa;return oa<<=1,!(oa&4194240)&&(oa=64),t}function Al(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bn(e),t[e]=n}function p8(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function qc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $e=0;function wp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tp,$c,Pp,Rp,bp,Xx=!1,aa=[],Ir=null,Or=null,zr=null,_s=new Map,Bs=new Map,Pr=[],m8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ld(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":_s.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bs.delete(e.pointerId)}}function Yo(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Gs(e),e!==null&&$c(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function E8(t,e,n,r,i){switch(e){case"focusin":return Ir=Yo(Ir,t,e,n,r,i),!0;case"dragenter":return Or=Yo(Or,t,e,n,r,i),!0;case"mouseover":return zr=Yo(zr,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return _s.set(o,Yo(_s.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Bs.set(o,Yo(Bs.get(o)||null,t,e,n,r,i)),!0}return!1}function Lp(t){var e=Ci(t.target);if(e!==null){var n=Li(e);if(n!==null){if(e=n.tag,e===13){if(e=_p(n),e!==null){t.blockedOn=e,bp(t.priority,function(){Pp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ga(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jx(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zx=r,n.target.dispatchEvent(r),zx=null}else return e=Gs(n),e!==null&&$c(e),t.blockedOn=n,!1;e.shift()}return!0}function xd(t,e,n){Ga(t)&&n.delete(e)}function g8(){Xx=!1,Ir!==null&&Ga(Ir)&&(Ir=null),Or!==null&&Ga(Or)&&(Or=null),zr!==null&&Ga(zr)&&(zr=null),_s.forEach(xd),Bs.forEach(xd)}function qo(t,e){t.blockedOn===e&&(t.blockedOn=null,Xx||(Xx=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,g8)))}function Ds(t){function e(i){return qo(i,t)}if(0<aa.length){qo(aa[0],t);for(var n=1;n<aa.length;n++){var r=aa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ir!==null&&qo(Ir,t),Or!==null&&qo(Or,t),zr!==null&&qo(zr,t),_s.forEach(e),Bs.forEach(e),n=0;n<Pr.length;n++)r=Pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Pr.length&&(n=Pr[0],n.blockedOn===null);)Lp(n),n.blockedOn===null&&Pr.shift()}var go=Cr.ReactCurrentBatchConfig,l0=!0;function C8(t,e,n,r){var i=$e,o=go.transition;go.transition=null;try{$e=1,Kc(t,e,n,r)}finally{$e=i,go.transition=o}}function v8(t,e,n,r){var i=$e,o=go.transition;go.transition=null;try{$e=4,Kc(t,e,n,r)}finally{$e=i,go.transition=o}}function Kc(t,e,n,r){if(l0){var i=jx(t,e,n,r);if(i===null)Pl(t,e,r,x0,n),ld(t,r);else if(E8(i,t,e,n,r))r.stopPropagation();else if(ld(t,r),e&4&&-1<m8.indexOf(t)){for(;i!==null;){var o=Gs(i);if(o!==null&&Tp(o),o=jx(t,e,n,r),o===null&&Pl(t,e,r,x0,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Pl(t,e,r,null,n)}}var x0=null;function jx(t,e,n,r){if(x0=null,t=jc(r),t=Ci(t),t!==null)if(e=Li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_p(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return x0=t,null}function kp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a8()){case Yc:return 1;case yp:return 4;case s0:case l8:return 16;case Sp:return 536870912;default:return 16}default:return 16}}var Lr=null,Zc=null,Wa=null;function Np(){if(Wa)return Wa;var t,e=Zc,n=e.length,r,i="value"in Lr?Lr.value:Lr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Wa=i.slice(t,1<r?1-r:void 0)}function Xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function la(){return!0}function cd(){return!1}function fn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?la:cd,this.isPropagationStopped=cd,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),e}var Uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qc=fn(Uo),Vs=ft({},Uo,{view:0,detail:0}),A8=fn(Vs),_l,Bl,$o,O0=ft({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$o&&($o&&t.type==="mousemove"?(_l=t.screenX-$o.screenX,Bl=t.screenY-$o.screenY):Bl=_l=0,$o=t),_l)},movementY:function(t){return"movementY"in t?t.movementY:Bl}}),ud=fn(O0),_8=ft({},O0,{dataTransfer:0}),B8=fn(_8),D8=ft({},Vs,{relatedTarget:0}),Dl=fn(D8),F8=ft({},Uo,{animationName:0,elapsedTime:0,pseudoElement:0}),y8=fn(F8),S8=ft({},Uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),M8=fn(S8),w8=ft({},Uo,{data:0}),dd=fn(w8),T8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b8(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=R8[t])?!!e[t]:!1}function Jc(){return b8}var L8=ft({},Vs,{key:function(t){if(t.key){var e=T8[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?P8[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(t){return t.type==="keypress"?Xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k8=fn(L8),N8=ft({},O0,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=fn(N8),U8=ft({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),I8=fn(U8),O8=ft({},Uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),z8=fn(O8),H8=ft({},O0,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),V8=fn(H8),G8=[9,13,27,32],eu=hr&&"CompositionEvent"in window,ds=null;hr&&"documentMode"in document&&(ds=document.documentMode);var W8=hr&&"TextEvent"in window&&!ds,Up=hr&&(!eu||ds&&8<ds&&11>=ds),hd=" ",pd=!1;function Ip(t,e){switch(t){case"keyup":return G8.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ro=!1;function X8(t,e){switch(t){case"compositionend":return Op(e);case"keypress":return e.which!==32?null:(pd=!0,hd);case"textInput":return t=e.data,t===hd&&pd?null:t;default:return null}}function j8(t,e){if(ro)return t==="compositionend"||!eu&&Ip(t,e)?(t=Np(),Wa=Zc=Lr=null,ro=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Up&&e.locale!=="ko"?null:e.data;default:return null}}var Y8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Y8[t.type]:e==="textarea"}function zp(t,e,n,r){Ep(r),e=c0(e,"onChange"),0<e.length&&(n=new Qc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fs=null,Fs=null;function q8(t){Zp(t,0)}function z0(t){var e=so(t);if(cp(e))return t}function $8(t,e){if(t==="change")return e}var Hp=!1;if(hr){var Fl;if(hr){var yl="oninput"in document;if(!yl){var Ed=document.createElement("div");Ed.setAttribute("oninput","return;"),yl=typeof Ed.oninput=="function"}Fl=yl}else Fl=!1;Hp=Fl&&(!document.documentMode||9<document.documentMode)}function gd(){fs&&(fs.detachEvent("onpropertychange",Vp),Fs=fs=null)}function Vp(t){if(t.propertyName==="value"&&z0(Fs)){var e=[];zp(e,Fs,t,jc(t)),Ap(q8,e)}}function K8(t,e,n){t==="focusin"?(gd(),fs=e,Fs=n,fs.attachEvent("onpropertychange",Vp)):t==="focusout"&&gd()}function Z8(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return z0(Fs)}function Q8(t,e){if(t==="click")return z0(e)}function J8(t,e){if(t==="input"||t==="change")return z0(e)}function eg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:eg;function ys(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Mx.call(e,i)||!kn(t[i],e[i]))return!1}return!0}function Cd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vd(t,e){var n=Cd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cd(n)}}function Gp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wp(){for(var t=window,e=r0();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=r0(t.document)}return e}function tu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tg(t){var e=Wp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gp(n.ownerDocument.documentElement,n)){if(r!==null&&tu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=vd(n,o);var s=vd(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ng=hr&&"documentMode"in document&&11>=document.documentMode,io=null,Yx=null,hs=null,qx=!1;function Ad(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qx||io==null||io!==r0(r)||(r=io,"selectionStart"in r&&tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hs&&ys(hs,r)||(hs=r,r=c0(Yx,"onSelect"),0<r.length&&(e=new Qc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=io)))}function xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oo={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},Sl={},Xp={};hr&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function H0(t){if(Sl[t])return Sl[t];if(!oo[t])return t;var e=oo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xp)return Sl[t]=e[n];return t}var jp=H0("animationend"),Yp=H0("animationiteration"),qp=H0("animationstart"),$p=H0("transitionend"),Kp=new Map,_d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(t,e){Kp.set(t,e),bi(e,[t])}for(var Ml=0;Ml<_d.length;Ml++){var wl=_d[Ml],rg=wl.toLowerCase(),ig=wl[0].toUpperCase()+wl.slice(1);ei(rg,"on"+ig)}ei(jp,"onAnimationEnd");ei(Yp,"onAnimationIteration");ei(qp,"onAnimationStart");ei("dblclick","onDoubleClick");ei("focusin","onFocus");ei("focusout","onBlur");ei($p,"onTransitionEnd");Do("onMouseEnter",["mouseout","mouseover"]);Do("onMouseLeave",["mouseout","mouseover"]);Do("onPointerEnter",["pointerout","pointerover"]);Do("onPointerLeave",["pointerout","pointerover"]);bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),og=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function Bd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,r8(r,e,void 0,t),t.currentTarget=null}function Zp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,x=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Bd(i,a,x),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,x=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Bd(i,a,x),o=l}}}if(o0)throw t=Gx,o0=!1,Gx=null,t}function nt(t,e){var n=e[Jx];n===void 0&&(n=e[Jx]=new Set);var r=t+"__bubble";n.has(r)||(Qp(e,t,2,!1),n.add(r))}function Tl(t,e,n){var r=0;e&&(r|=4),Qp(n,t,r,e)}var ca="_reactListening"+Math.random().toString(36).slice(2);function Ss(t){if(!t[ca]){t[ca]=!0,op.forEach(function(n){n!=="selectionchange"&&(og.has(n)||Tl(n,!1,t),Tl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ca]||(e[ca]=!0,Tl("selectionchange",!1,e))}}function Qp(t,e,n,r){switch(kp(e)){case 1:var i=C8;break;case 4:i=v8;break;default:i=Kc}n=i.bind(null,e,n,t),i=void 0,!Vx||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Pl(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Ci(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ap(function(){var x=o,u=jc(n),c=[];e:{var f=Kp.get(t);if(f!==void 0){var m=Qc,E=t;switch(t){case"keypress":if(Xa(n)===0)break e;case"keydown":case"keyup":m=k8;break;case"focusin":E="focus",m=Dl;break;case"focusout":E="blur",m=Dl;break;case"beforeblur":case"afterblur":m=Dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=B8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=I8;break;case jp:case Yp:case qp:m=y8;break;case $p:m=z8;break;case"scroll":m=A8;break;case"wheel":m=V8;break;case"copy":case"cut":case"paste":m=M8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=fd}var g=(e&4)!==0,h=!g&&t==="scroll",d=g?f!==null?f+"Capture":null:f;g=[];for(var C=x,p;C!==null;){p=C;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,d!==null&&(v=As(C,d),v!=null&&g.push(Ms(C,v,p)))),h)break;C=C.return}0<g.length&&(f=new m(f,E,null,n,u),c.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==zx&&(E=n.relatedTarget||n.fromElement)&&(Ci(E)||E[pr]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(E=n.relatedTarget||n.toElement,m=x,E=E?Ci(E):null,E!==null&&(h=Li(E),E!==h||E.tag!==5&&E.tag!==6)&&(E=null)):(m=null,E=x),m!==E)){if(g=ud,v="onMouseLeave",d="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(g=fd,v="onPointerLeave",d="onPointerEnter",C="pointer"),h=m==null?f:so(m),p=E==null?f:so(E),f=new g(v,C+"leave",m,n,u),f.target=h,f.relatedTarget=p,v=null,Ci(u)===x&&(g=new g(d,C+"enter",E,n,u),g.target=p,g.relatedTarget=h,v=g),h=v,m&&E)t:{for(g=m,d=E,C=0,p=g;p;p=Ui(p))C++;for(p=0,v=d;v;v=Ui(v))p++;for(;0<C-p;)g=Ui(g),C--;for(;0<p-C;)d=Ui(d),p--;for(;C--;){if(g===d||d!==null&&g===d.alternate)break t;g=Ui(g),d=Ui(d)}g=null}else g=null;m!==null&&Dd(c,f,m,g,!1),E!==null&&h!==null&&Dd(c,h,E,g,!0)}}e:{if(f=x?so(x):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var F=$8;else if(md(f))if(Hp)F=J8;else{F=Z8;var B=K8}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(F=Q8);if(F&&(F=F(t,x))){zp(c,F,n,u);break e}B&&B(t,f,x),t==="focusout"&&(B=f._wrapperState)&&B.controlled&&f.type==="number"&&kx(f,"number",f.value)}switch(B=x?so(x):window,t){case"focusin":(md(B)||B.contentEditable==="true")&&(io=B,Yx=x,hs=null);break;case"focusout":hs=Yx=io=null;break;case"mousedown":qx=!0;break;case"contextmenu":case"mouseup":case"dragend":qx=!1,Ad(c,n,u);break;case"selectionchange":if(ng)break;case"keydown":case"keyup":Ad(c,n,u)}var _;if(eu)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else ro?Ip(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Up&&n.locale!=="ko"&&(ro||M!=="onCompositionStart"?M==="onCompositionEnd"&&ro&&(_=Np()):(Lr=u,Zc="value"in Lr?Lr.value:Lr.textContent,ro=!0)),B=c0(x,M),0<B.length&&(M=new dd(M,t,null,n,u),c.push({event:M,listeners:B}),_?M.data=_:(_=Op(n),_!==null&&(M.data=_)))),(_=W8?X8(t,n):j8(t,n))&&(x=c0(x,"onBeforeInput"),0<x.length&&(u=new dd("onBeforeInput","beforeinput",null,n,u),c.push({event:u,listeners:x}),u.data=_))}Zp(c,e)})}function Ms(t,e,n){return{instance:t,listener:e,currentTarget:n}}function c0(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=As(t,n),o!=null&&r.unshift(Ms(t,o,i)),o=As(t,e),o!=null&&r.push(Ms(t,o,i))),t=t.return}return r}function Ui(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dd(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,x=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&x!==null&&(a=x,i?(l=As(n,o),l!=null&&s.unshift(Ms(n,l,a))):i||(l=As(n,o),l!=null&&s.push(Ms(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var sg=/\r\n?/g,ag=/\u0000|\uFFFD/g;function Fd(t){return(typeof t=="string"?t:""+t).replace(sg,`
`).replace(ag,"")}function ua(t,e,n){if(e=Fd(e),Fd(t)!==e&&n)throw Error(te(425))}function u0(){}var $x=null,Kx=null;function Zx(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qx=typeof setTimeout=="function"?setTimeout:void 0,lg=typeof clearTimeout=="function"?clearTimeout:void 0,yd=typeof Promise=="function"?Promise:void 0,xg=typeof queueMicrotask=="function"?queueMicrotask:typeof yd<"u"?function(t){return yd.resolve(null).then(t).catch(cg)}:Qx;function cg(t){setTimeout(function(){throw t})}function Rl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ds(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ds(e)}function Hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Io=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Io,ws="__reactProps$"+Io,pr="__reactContainer$"+Io,Jx="__reactEvents$"+Io,ug="__reactListeners$"+Io,dg="__reactHandles$"+Io;function Ci(t){var e=t[Gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pr]||n[Gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sd(t);t!==null;){if(n=t[Gn])return n;t=Sd(t)}return e}t=n,n=t.parentNode}return null}function Gs(t){return t=t[Gn]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function so(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function V0(t){return t[ws]||null}var ec=[],ao=-1;function ti(t){return{current:t}}function it(t){0>ao||(t.current=ec[ao],ec[ao]=null,ao--)}function Je(t,e){ao++,ec[ao]=t.current,t.current=e}var Zr={},Vt=ti(Zr),Qt=ti(!1),Si=Zr;function Fo(t,e){var n=t.type.contextTypes;if(!n)return Zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Jt(t){return t=t.childContextTypes,t!=null}function d0(){it(Qt),it(Vt)}function Md(t,e,n){if(Vt.current!==Zr)throw Error(te(168));Je(Vt,e),Je(Qt,n)}function Jp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(te(108,K9(t)||"Unknown",i));return ft({},n,r)}function f0(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zr,Si=Vt.current,Je(Vt,t),Je(Qt,Qt.current),!0}function wd(t,e,n){var r=t.stateNode;if(!r)throw Error(te(169));n?(t=Jp(t,e,Si),r.__reactInternalMemoizedMergedChildContext=t,it(Qt),it(Vt),Je(Vt,t)):it(Qt),Je(Qt,n)}var sr=null,G0=!1,bl=!1;function em(t){sr===null?sr=[t]:sr.push(t)}function fg(t){G0=!0,em(t)}function ni(){if(!bl&&sr!==null){bl=!0;var t=0,e=$e;try{var n=sr;for($e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sr=null,G0=!1}catch(i){throw sr!==null&&(sr=sr.slice(t+1)),Fp(Yc,ni),i}finally{$e=e,bl=!1}}return null}var lo=[],xo=0,h0=null,p0=0,mn=[],En=0,Mi=null,lr=1,xr="";function fi(t,e){lo[xo++]=p0,lo[xo++]=h0,h0=t,p0=e}function tm(t,e,n){mn[En++]=lr,mn[En++]=xr,mn[En++]=Mi,Mi=t;var r=lr;t=xr;var i=32-bn(r)-1;r&=~(1<<i),n+=1;var o=32-bn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,lr=1<<32-bn(e)+i|n<<i|r,xr=o+t}else lr=1<<o|n<<i|r,xr=t}function nu(t){t.return!==null&&(fi(t,1),tm(t,1,0))}function ru(t){for(;t===h0;)h0=lo[--xo],lo[xo]=null,p0=lo[--xo],lo[xo]=null;for(;t===Mi;)Mi=mn[--En],mn[En]=null,xr=mn[--En],mn[En]=null,lr=mn[--En],mn[En]=null}var xn=null,ln=null,lt=!1,Pn=null;function nm(t,e){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Td(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,ln=Hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mi!==null?{id:lr,overflow:xr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,ln=null,!0):!1;default:return!1}}function tc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nc(t){if(lt){var e=ln;if(e){var n=e;if(!Td(t,e)){if(tc(t))throw Error(te(418));e=Hr(n.nextSibling);var r=xn;e&&Td(t,e)?nm(r,n):(t.flags=t.flags&-4097|2,lt=!1,xn=t)}}else{if(tc(t))throw Error(te(418));t.flags=t.flags&-4097|2,lt=!1,xn=t}}}function Pd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function da(t){if(t!==xn)return!1;if(!lt)return Pd(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zx(t.type,t.memoizedProps)),e&&(e=ln)){if(tc(t))throw rm(),Error(te(418));for(;e;)nm(t,e),e=Hr(e.nextSibling)}if(Pd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=Hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=xn?Hr(t.stateNode.nextSibling):null;return!0}function rm(){for(var t=ln;t;)t=Hr(t.nextSibling)}function yo(){ln=xn=null,lt=!1}function iu(t){Pn===null?Pn=[t]:Pn.push(t)}var hg=Cr.ReactCurrentBatchConfig;function wn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var m0=ti(null),E0=null,co=null,ou=null;function su(){ou=co=E0=null}function au(t){var e=m0.current;it(m0),t._currentValue=e}function rc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Co(t,e){E0=t,ou=co=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(ou!==t)if(t={context:t,memoizedValue:e,next:null},co===null){if(E0===null)throw Error(te(308));co=t,E0.dependencies={lanes:0,firstContext:t}}else co=co.next=t;return e}var vi=null;function lu(t){vi===null?vi=[t]:vi.push(t)}function im(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lu(e)):(n.next=i.next,i.next=n),e.interleaved=n,mr(t,r)}function mr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tr=!1;function xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function om(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Xe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mr(t,n)}return i=r.interleaved,i===null?(e.next=e,lu(r)):(e.next=i.next,i.next=e),r.interleaved=e,mr(t,n)}function ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qc(t,n)}}function Rd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function g0(t,e,n,r){var i=t.updateQueue;Tr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,x=l.next;l.next=null,s===null?o=x:s.next=x,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=x:a.next=x,u.lastBaseUpdate=l))}if(o!==null){var c=i.baseState;s=0,u=x=l=null,a=o;do{var f=a.lane,m=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,g=a;switch(f=e,m=n,g.tag){case 1:if(E=g.payload,typeof E=="function"){c=E.call(m,c,f);break e}c=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=g.payload,f=typeof E=="function"?E.call(m,c,f):E,f==null)break e;c=ft({},c,f);break e;case 2:Tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(x=u=m,l=c):u=u.next=m,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(l=c),i.baseState=l,i.firstBaseUpdate=x,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Ti|=s,t.lanes=s,t.memoizedState=c}}function bd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(te(191,i));i.call(r)}}}var sm=new ip.Component().refs;function ic(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var W0={isMounted:function(t){return(t=t._reactInternals)?Li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xt(),i=Wr(t),o=dr(r,i);o.payload=e,n!=null&&(o.callback=n),e=Vr(t,o,i),e!==null&&(Ln(e,t,i,r),ja(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xt(),i=Wr(t),o=dr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Vr(t,o,i),e!==null&&(Ln(e,t,i,r),ja(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),r=Wr(t),i=dr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Vr(t,i,r),e!==null&&(Ln(e,t,r,n),ja(e,t,r))}};function Ld(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!ys(n,r)||!ys(i,o):!0}function am(t,e,n){var r=!1,i=Zr,o=e.contextType;return typeof o=="object"&&o!==null?o=Bn(o):(i=Jt(e)?Si:Vt.current,r=e.contextTypes,o=(r=r!=null)?Fo(t,i):Zr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=W0,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function kd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&W0.enqueueReplaceState(e,e.state,null)}function oc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=sm,xu(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Bn(o):(o=Jt(e)?Si:Vt.current,i.context=Fo(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(ic(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&W0.enqueueReplaceState(i,i.state,null),g0(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var r=n.stateNode}if(!r)throw Error(te(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===sm&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function fa(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nd(t){var e=t._init;return e(t._payload)}function lm(t){function e(d,C){if(t){var p=d.deletions;p===null?(d.deletions=[C],d.flags|=16):p.push(C)}}function n(d,C){if(!t)return null;for(;C!==null;)e(d,C),C=C.sibling;return null}function r(d,C){for(d=new Map;C!==null;)C.key!==null?d.set(C.key,C):d.set(C.index,C),C=C.sibling;return d}function i(d,C){return d=Xr(d,C),d.index=0,d.sibling=null,d}function o(d,C,p){return d.index=p,t?(p=d.alternate,p!==null?(p=p.index,p<C?(d.flags|=2,C):p):(d.flags|=2,C)):(d.flags|=1048576,C)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,C,p,v){return C===null||C.tag!==6?(C=zl(p,d.mode,v),C.return=d,C):(C=i(C,p),C.return=d,C)}function l(d,C,p,v){var F=p.type;return F===no?u(d,C,p.props.children,v,p.key):C!==null&&(C.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===wr&&Nd(F)===C.type)?(v=i(C,p.props),v.ref=Ko(d,C,p),v.return=d,v):(v=Qa(p.type,p.key,p.props,null,d.mode,v),v.ref=Ko(d,C,p),v.return=d,v)}function x(d,C,p,v){return C===null||C.tag!==4||C.stateNode.containerInfo!==p.containerInfo||C.stateNode.implementation!==p.implementation?(C=Hl(p,d.mode,v),C.return=d,C):(C=i(C,p.children||[]),C.return=d,C)}function u(d,C,p,v,F){return C===null||C.tag!==7?(C=Fi(p,d.mode,v,F),C.return=d,C):(C=i(C,p),C.return=d,C)}function c(d,C,p){if(typeof C=="string"&&C!==""||typeof C=="number")return C=zl(""+C,d.mode,p),C.return=d,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case na:return p=Qa(C.type,C.key,C.props,null,d.mode,p),p.ref=Ko(d,null,C),p.return=d,p;case to:return C=Hl(C,d.mode,p),C.return=d,C;case wr:var v=C._init;return c(d,v(C._payload),p)}if(ss(C)||Xo(C))return C=Fi(C,d.mode,p,null),C.return=d,C;fa(d,C)}return null}function f(d,C,p,v){var F=C!==null?C.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return F!==null?null:a(d,C,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case na:return p.key===F?l(d,C,p,v):null;case to:return p.key===F?x(d,C,p,v):null;case wr:return F=p._init,f(d,C,F(p._payload),v)}if(ss(p)||Xo(p))return F!==null?null:u(d,C,p,v,null);fa(d,p)}return null}function m(d,C,p,v,F){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(p)||null,a(C,d,""+v,F);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case na:return d=d.get(v.key===null?p:v.key)||null,l(C,d,v,F);case to:return d=d.get(v.key===null?p:v.key)||null,x(C,d,v,F);case wr:var B=v._init;return m(d,C,p,B(v._payload),F)}if(ss(v)||Xo(v))return d=d.get(p)||null,u(C,d,v,F,null);fa(C,v)}return null}function E(d,C,p,v){for(var F=null,B=null,_=C,M=C=0,D=null;_!==null&&M<p.length;M++){_.index>M?(D=_,_=null):D=_.sibling;var A=f(d,_,p[M],v);if(A===null){_===null&&(_=D);break}t&&_&&A.alternate===null&&e(d,_),C=o(A,C,M),B===null?F=A:B.sibling=A,B=A,_=D}if(M===p.length)return n(d,_),lt&&fi(d,M),F;if(_===null){for(;M<p.length;M++)_=c(d,p[M],v),_!==null&&(C=o(_,C,M),B===null?F=_:B.sibling=_,B=_);return lt&&fi(d,M),F}for(_=r(d,_);M<p.length;M++)D=m(_,d,M,p[M],v),D!==null&&(t&&D.alternate!==null&&_.delete(D.key===null?M:D.key),C=o(D,C,M),B===null?F=D:B.sibling=D,B=D);return t&&_.forEach(function(b){return e(d,b)}),lt&&fi(d,M),F}function g(d,C,p,v){var F=Xo(p);if(typeof F!="function")throw Error(te(150));if(p=F.call(p),p==null)throw Error(te(151));for(var B=F=null,_=C,M=C=0,D=null,A=p.next();_!==null&&!A.done;M++,A=p.next()){_.index>M?(D=_,_=null):D=_.sibling;var b=f(d,_,A.value,v);if(b===null){_===null&&(_=D);break}t&&_&&b.alternate===null&&e(d,_),C=o(b,C,M),B===null?F=b:B.sibling=b,B=b,_=D}if(A.done)return n(d,_),lt&&fi(d,M),F;if(_===null){for(;!A.done;M++,A=p.next())A=c(d,A.value,v),A!==null&&(C=o(A,C,M),B===null?F=A:B.sibling=A,B=A);return lt&&fi(d,M),F}for(_=r(d,_);!A.done;M++,A=p.next())A=m(_,d,M,A.value,v),A!==null&&(t&&A.alternate!==null&&_.delete(A.key===null?M:A.key),C=o(A,C,M),B===null?F=A:B.sibling=A,B=A);return t&&_.forEach(function(L){return e(d,L)}),lt&&fi(d,M),F}function h(d,C,p,v){if(typeof p=="object"&&p!==null&&p.type===no&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case na:e:{for(var F=p.key,B=C;B!==null;){if(B.key===F){if(F=p.type,F===no){if(B.tag===7){n(d,B.sibling),C=i(B,p.props.children),C.return=d,d=C;break e}}else if(B.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===wr&&Nd(F)===B.type){n(d,B.sibling),C=i(B,p.props),C.ref=Ko(d,B,p),C.return=d,d=C;break e}n(d,B);break}else e(d,B);B=B.sibling}p.type===no?(C=Fi(p.props.children,d.mode,v,p.key),C.return=d,d=C):(v=Qa(p.type,p.key,p.props,null,d.mode,v),v.ref=Ko(d,C,p),v.return=d,d=v)}return s(d);case to:e:{for(B=p.key;C!==null;){if(C.key===B)if(C.tag===4&&C.stateNode.containerInfo===p.containerInfo&&C.stateNode.implementation===p.implementation){n(d,C.sibling),C=i(C,p.children||[]),C.return=d,d=C;break e}else{n(d,C);break}else e(d,C);C=C.sibling}C=Hl(p,d.mode,v),C.return=d,d=C}return s(d);case wr:return B=p._init,h(d,C,B(p._payload),v)}if(ss(p))return E(d,C,p,v);if(Xo(p))return g(d,C,p,v);fa(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,C!==null&&C.tag===6?(n(d,C.sibling),C=i(C,p),C.return=d,d=C):(n(d,C),C=zl(p,d.mode,v),C.return=d,d=C),s(d)):n(d,C)}return h}var So=lm(!0),xm=lm(!1),Ws={},$n=ti(Ws),Ts=ti(Ws),Ps=ti(Ws);function Ai(t){if(t===Ws)throw Error(te(174));return t}function cu(t,e){switch(Je(Ps,e),Je(Ts,t),Je($n,Ws),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ux(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ux(e,t)}it($n),Je($n,e)}function Mo(){it($n),it(Ts),it(Ps)}function cm(t){Ai(Ps.current);var e=Ai($n.current),n=Ux(e,t.type);e!==n&&(Je(Ts,t),Je($n,n))}function uu(t){Ts.current===t&&(it($n),it(Ts))}var ut=ti(0);function C0(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ll=[];function du(){for(var t=0;t<Ll.length;t++)Ll[t]._workInProgressVersionPrimary=null;Ll.length=0}var Ya=Cr.ReactCurrentDispatcher,kl=Cr.ReactCurrentBatchConfig,wi=0,dt=null,At=null,Mt=null,v0=!1,ps=!1,Rs=0,pg=0;function Ut(){throw Error(te(321))}function fu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function hu(t,e,n,r,i,o){if(wi=o,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ya.current=t===null||t.memoizedState===null?Cg:vg,t=n(r,i),ps){o=0;do{if(ps=!1,Rs=0,25<=o)throw Error(te(301));o+=1,Mt=At=null,e.updateQueue=null,Ya.current=Ag,t=n(r,i)}while(ps)}if(Ya.current=A0,e=At!==null&&At.next!==null,wi=0,Mt=At=dt=null,v0=!1,e)throw Error(te(300));return t}function pu(){var t=Rs!==0;return Rs=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?dt.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function Dn(){if(At===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Mt===null?dt.memoizedState:Mt.next;if(e!==null)Mt=e,At=t;else{if(t===null)throw Error(te(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Mt===null?dt.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function bs(t,e){return typeof e=="function"?e(t):e}function Nl(t){var e=Dn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var r=At,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,x=o;do{var u=x.lane;if((wi&u)===u)l!==null&&(l=l.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:t(r,x.action);else{var c={lane:u,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};l===null?(a=l=c,s=r):l=l.next=c,dt.lanes|=u,Ti|=u}x=x.next}while(x!==null&&x!==o);l===null?s=r:l.next=a,kn(r,e.memoizedState)||(Zt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,dt.lanes|=o,Ti|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ul(t){var e=Dn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);kn(o,e.memoizedState)||(Zt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function um(){}function dm(t,e){var n=dt,r=Dn(),i=e(),o=!kn(r.memoizedState,i);if(o&&(r.memoizedState=i,Zt=!0),r=r.queue,mu(pm.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Mt!==null&&Mt.memoizedState.tag&1){if(n.flags|=2048,Ls(9,hm.bind(null,n,r,i,e),void 0,null),Tt===null)throw Error(te(349));wi&30||fm(n,e,i)}return i}function fm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hm(t,e,n,r){e.value=n,e.getSnapshot=r,mm(e)&&Em(t)}function pm(t,e,n){return n(function(){mm(e)&&Em(t)})}function mm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function Em(t){var e=mr(t,1);e!==null&&Ln(e,t,1,-1)}function Ud(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:t},e.queue=t,t=t.dispatch=gg.bind(null,dt,t),[e.memoizedState,t]}function Ls(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function gm(){return Dn().memoizedState}function qa(t,e,n,r){var i=zn();dt.flags|=t,i.memoizedState=Ls(1|e,n,void 0,r===void 0?null:r)}function X0(t,e,n,r){var i=Dn();r=r===void 0?null:r;var o=void 0;if(At!==null){var s=At.memoizedState;if(o=s.destroy,r!==null&&fu(r,s.deps)){i.memoizedState=Ls(e,n,o,r);return}}dt.flags|=t,i.memoizedState=Ls(1|e,n,o,r)}function Id(t,e){return qa(8390656,8,t,e)}function mu(t,e){return X0(2048,8,t,e)}function Cm(t,e){return X0(4,2,t,e)}function vm(t,e){return X0(4,4,t,e)}function Am(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _m(t,e,n){return n=n!=null?n.concat([t]):null,X0(4,4,Am.bind(null,e,t),n)}function Eu(){}function Bm(t,e){var n=Dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Dm(t,e){var n=Dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Fm(t,e,n){return wi&21?(kn(n,e)||(n=Mp(),dt.lanes|=n,Ti|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function mg(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var r=kl.transition;kl.transition={};try{t(!1),e()}finally{$e=n,kl.transition=r}}function ym(){return Dn().memoizedState}function Eg(t,e,n){var r=Wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sm(t))Mm(e,n);else if(n=im(t,e,n,r),n!==null){var i=Xt();Ln(n,t,r,i),wm(n,e,r)}}function gg(t,e,n){var r=Wr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sm(t))Mm(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,kn(a,s)){var l=e.interleaved;l===null?(i.next=i,lu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=im(t,e,i,r),n!==null&&(i=Xt(),Ln(n,t,r,i),wm(n,e,r))}}function Sm(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function Mm(t,e){ps=v0=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qc(t,n)}}var A0={readContext:Bn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},Cg={readContext:Bn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:Id,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qa(4194308,4,Am.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return qa(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Eg.bind(null,dt,t),[r.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:Ud,useDebugValue:Eu,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=Ud(!1),e=t[0];return t=mg.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=dt,i=zn();if(lt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Tt===null)throw Error(te(349));wi&30||fm(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Id(pm.bind(null,r,o,t),[t]),r.flags|=2048,Ls(9,hm.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=zn(),e=Tt.identifierPrefix;if(lt){var n=xr,r=lr;n=(r&~(1<<32-bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Rs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pg++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vg={readContext:Bn,useCallback:Bm,useContext:Bn,useEffect:mu,useImperativeHandle:_m,useInsertionEffect:Cm,useLayoutEffect:vm,useMemo:Dm,useReducer:Nl,useRef:gm,useState:function(){return Nl(bs)},useDebugValue:Eu,useDeferredValue:function(t){var e=Dn();return Fm(e,At.memoizedState,t)},useTransition:function(){var t=Nl(bs)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:um,useSyncExternalStore:dm,useId:ym,unstable_isNewReconciler:!1},Ag={readContext:Bn,useCallback:Bm,useContext:Bn,useEffect:mu,useImperativeHandle:_m,useInsertionEffect:Cm,useLayoutEffect:vm,useMemo:Dm,useReducer:Ul,useRef:gm,useState:function(){return Ul(bs)},useDebugValue:Eu,useDeferredValue:function(t){var e=Dn();return At===null?e.memoizedState=t:Fm(e,At.memoizedState,t)},useTransition:function(){var t=Ul(bs)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:um,useSyncExternalStore:dm,useId:ym,unstable_isNewReconciler:!1};function wo(t,e){try{var n="",r=e;do n+=$9(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Il(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _g=typeof WeakMap=="function"?WeakMap:Map;function Tm(t,e,n){n=dr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){B0||(B0=!0,mc=r),sc(t,e)},n}function Pm(t,e,n){n=dr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sc(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){sc(t,e),typeof r!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Od(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _g;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ng.bind(null,t,e,n),e.then(t,t))}function zd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dr(-1,1),e.tag=2,Vr(n,e,1))),n.lanes|=1),t)}var Bg=Cr.ReactCurrentOwner,Zt=!1;function Wt(t,e,n,r){e.child=t===null?xm(e,null,n,r):So(e,t.child,n,r)}function Vd(t,e,n,r,i){n=n.render;var o=e.ref;return Co(e,i),r=hu(t,e,n,r,o,i),n=pu(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(lt&&n&&nu(e),e.flags|=1,Wt(t,e,r,i),e.child)}function Gd(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Fu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Rm(t,e,o,r,i)):(t=Qa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ys,n(s,r)&&t.ref===e.ref)return Er(t,e,i)}return e.flags|=1,t=Xr(o,r),t.ref=e.ref,t.return=e,e.child=t}function Rm(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(ys(o,r)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,Er(t,e,i)}return ac(t,e,n,r,i)}function bm(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(fo,an),an|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Je(fo,an),an|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Je(fo,an),an|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Je(fo,an),an|=r;return Wt(t,e,i,n),e.child}function Lm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ac(t,e,n,r,i){var o=Jt(n)?Si:Vt.current;return o=Fo(e,o),Co(e,i),n=hu(t,e,n,r,o,i),r=pu(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(lt&&r&&nu(e),e.flags|=1,Wt(t,e,n,i),e.child)}function Wd(t,e,n,r,i){if(Jt(n)){var o=!0;f0(e)}else o=!1;if(Co(e,i),e.stateNode===null)$a(t,e),am(e,n,r),oc(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,x=n.contextType;typeof x=="object"&&x!==null?x=Bn(x):(x=Jt(n)?Si:Vt.current,x=Fo(e,x));var u=n.getDerivedStateFromProps,c=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==x)&&kd(e,s,r,x),Tr=!1;var f=e.memoizedState;s.state=f,g0(e,r,s,i),l=e.memoizedState,a!==r||f!==l||Qt.current||Tr?(typeof u=="function"&&(ic(e,n,u,r),l=e.memoizedState),(a=Tr||Ld(e,n,a,r,f,l,x))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=x,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,om(t,e),a=e.memoizedProps,x=e.type===e.elementType?a:wn(e.type,a),s.props=x,c=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=Jt(n)?Si:Vt.current,l=Fo(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==c||f!==l)&&kd(e,s,r,l),Tr=!1,f=e.memoizedState,s.state=f,g0(e,r,s,i);var E=e.memoizedState;a!==c||f!==E||Qt.current||Tr?(typeof m=="function"&&(ic(e,n,m,r),E=e.memoizedState),(x=Tr||Ld(e,n,x,r,f,E,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,E,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,E,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),s.props=r,s.state=E,s.context=l,r=x):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return lc(t,e,n,r,o,i)}function lc(t,e,n,r,i,o){Lm(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&wd(e,n,!1),Er(t,e,o);r=e.stateNode,Bg.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=So(e,t.child,null,o),e.child=So(e,null,a,o)):Wt(t,e,a,o),e.memoizedState=r.state,i&&wd(e,n,!0),e.child}function km(t){var e=t.stateNode;e.pendingContext?Md(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Md(t,e.context,!1),cu(t,e.containerInfo)}function Xd(t,e,n,r,i){return yo(),iu(i),e.flags|=256,Wt(t,e,n,r),e.child}var xc={dehydrated:null,treeContext:null,retryLane:0};function cc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nm(t,e,n){var r=e.pendingProps,i=ut.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Je(ut,i&1),t===null)return nc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=q0(s,r,0,null),t=Fi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=cc(n),e.memoizedState=xc,t):gu(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Dg(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Xr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Xr(a,o):(o=Fi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?cc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=xc,r}return o=t.child,t=o.sibling,r=Xr(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gu(t,e){return e=q0({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ha(t,e,n,r){return r!==null&&iu(r),So(e,t.child,null,n),t=gu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Dg(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Il(Error(te(422))),ha(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=q0({mode:"visible",children:r.children},i,0,null),o=Fi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&So(e,t.child,null,s),e.child.memoizedState=cc(s),e.memoizedState=xc,o);if(!(e.mode&1))return ha(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(te(419)),r=Il(o,r,void 0),ha(t,e,s,r)}if(a=(s&t.childLanes)!==0,Zt||a){if(r=Tt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,mr(t,i),Ln(r,t,i,-1))}return Du(),r=Il(Error(te(421))),ha(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ug.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,ln=Hr(i.nextSibling),xn=e,lt=!0,Pn=null,t!==null&&(mn[En++]=lr,mn[En++]=xr,mn[En++]=Mi,lr=t.id,xr=t.overflow,Mi=e),e=gu(e,r.children),e.flags|=4096,e)}function jd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rc(t.return,e,n)}function Ol(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Um(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Wt(t,e,r.children,n),r=ut.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jd(t,n,e);else if(t.tag===19)jd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Je(ut,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&C0(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ol(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&C0(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ol(e,!0,n,null,o);break;case"together":Ol(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $a(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ti|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Fg(t,e,n){switch(e.tag){case 3:km(e),yo();break;case 5:cm(e);break;case 1:Jt(e.type)&&f0(e);break;case 4:cu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Je(m0,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Je(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?Nm(t,e,n):(Je(ut,ut.current&1),t=Er(t,e,n),t!==null?t.sibling:null);Je(ut,ut.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Um(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Je(ut,ut.current),r)break;return null;case 22:case 23:return e.lanes=0,bm(t,e,n)}return Er(t,e,n)}var Im,uc,Om,zm;Im=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uc=function(){};Om=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ai($n.current);var o=null;switch(n){case"input":i=bx(t,i),r=bx(t,r),o=[];break;case"select":i=ft({},i,{value:void 0}),r=ft({},r,{value:void 0}),o=[];break;case"textarea":i=Nx(t,i),r=Nx(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=u0)}Ix(n,r);var s;n=null;for(x in i)if(!r.hasOwnProperty(x)&&i.hasOwnProperty(x)&&i[x]!=null)if(x==="style"){var a=i[x];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(Cs.hasOwnProperty(x)?o||(o=[]):(o=o||[]).push(x,null));for(x in r){var l=r[x];if(a=i!=null?i[x]:void 0,r.hasOwnProperty(x)&&l!==a&&(l!=null||a!=null))if(x==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(x,n)),n=l;else x==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(x,l)):x==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(x,""+l):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(Cs.hasOwnProperty(x)?(l!=null&&x==="onScroll"&&nt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(x,l))}n&&(o=o||[]).push("style",n);var x=o;(e.updateQueue=x)&&(e.flags|=4)}};zm=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zo(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yg(t,e,n){var r=e.pendingProps;switch(ru(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return Jt(e.type)&&d0(),It(e),null;case 3:return r=e.stateNode,Mo(),it(Qt),it(Vt),du(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pn!==null&&(Cc(Pn),Pn=null))),uc(t,e),It(e),null;case 5:uu(e);var i=Ai(Ps.current);if(n=e.type,t!==null&&e.stateNode!=null)Om(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(te(166));return It(e),null}if(t=Ai($n.current),da(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Gn]=e,r[ws]=o,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",r),nt("close",r);break;case"iframe":case"object":case"embed":nt("load",r);break;case"video":case"audio":for(i=0;i<ls.length;i++)nt(ls[i],r);break;case"source":nt("error",r);break;case"img":case"image":case"link":nt("error",r),nt("load",r);break;case"details":nt("toggle",r);break;case"input":td(r,o),nt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},nt("invalid",r);break;case"textarea":rd(r,o),nt("invalid",r)}Ix(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ua(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ua(r.textContent,a,t),i=["children",""+a]):Cs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&nt("scroll",r)}switch(n){case"input":ra(r),nd(r,o,!0);break;case"textarea":ra(r),id(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=u0)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Gn]=e,t[ws]=r,Im(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ox(n,r),n){case"dialog":nt("cancel",t),nt("close",t),i=r;break;case"iframe":case"object":case"embed":nt("load",t),i=r;break;case"video":case"audio":for(i=0;i<ls.length;i++)nt(ls[i],t);i=r;break;case"source":nt("error",t),i=r;break;case"img":case"image":case"link":nt("error",t),nt("load",t),i=r;break;case"details":nt("toggle",t),i=r;break;case"input":td(t,r),i=bx(t,r),nt("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ft({},r,{value:void 0}),nt("invalid",t);break;case"textarea":rd(t,r),i=Nx(t,r),nt("invalid",t);break;default:i=r}Ix(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?mp(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hp(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vs(t,l):typeof l=="number"&&vs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Cs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&nt("scroll",t):l!=null&&Vc(t,o,l,s))}switch(n){case"input":ra(t),nd(t,r,!1);break;case"textarea":ra(t),id(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kr(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?po(t,!!r.multiple,o,!1):r.defaultValue!=null&&po(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=u0)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)zm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(te(166));if(n=Ai(Ps.current),Ai($n.current),da(e)){if(r=e.stateNode,n=e.memoizedProps,r[Gn]=e,(o=r.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:ua(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gn]=e,e.stateNode=r}return It(e),null;case 13:if(it(ut),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&ln!==null&&e.mode&1&&!(e.flags&128))rm(),yo(),e.flags|=98560,o=!1;else if(o=da(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(te(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(te(317));o[Gn]=e}else yo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),o=!1}else Pn!==null&&(Cc(Pn),Pn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?_t===0&&(_t=3):Du())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return Mo(),uc(t,e),t===null&&Ss(e.stateNode.containerInfo),It(e),null;case 10:return au(e.type._context),It(e),null;case 17:return Jt(e.type)&&d0(),It(e),null;case 19:if(it(ut),o=e.memoizedState,o===null)return It(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Zo(o,!1);else{if(_t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=C0(t),s!==null){for(e.flags|=128,Zo(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Je(ut,ut.current&1|2),e.child}t=t.sibling}o.tail!==null&&Et()>To&&(e.flags|=128,r=!0,Zo(o,!1),e.lanes=4194304)}else{if(!r)if(t=C0(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!lt)return It(e),null}else 2*Et()-o.renderingStartTime>To&&n!==1073741824&&(e.flags|=128,r=!0,Zo(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Et(),e.sibling=null,n=ut.current,Je(ut,r?n&1|2:n&1),e):(It(e),null);case 22:case 23:return Bu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?an&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Sg(t,e){switch(ru(e),e.tag){case 1:return Jt(e.type)&&d0(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mo(),it(Qt),it(Vt),du(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return uu(e),null;case 13:if(it(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));yo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(ut),null;case 4:return Mo(),null;case 10:return au(e.type._context),null;case 22:case 23:return Bu(),null;case 24:return null;default:return null}}var pa=!1,Ht=!1,Mg=typeof WeakSet=="function"?WeakSet:Set,fe=null;function uo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ht(t,e,r)}else n.current=null}function dc(t,e,n){try{n()}catch(r){ht(t,e,r)}}var Yd=!1;function wg(t,e){if($x=l0,t=Wp(),tu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,x=0,u=0,c=t,f=null;t:for(;;){for(var m;c!==n||i!==0&&c.nodeType!==3||(a=s+i),c!==o||r!==0&&c.nodeType!==3||(l=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(m=c.firstChild)!==null;)f=c,c=m;for(;;){if(c===t)break t;if(f===n&&++x===i&&(a=s),f===o&&++u===r&&(l=s),(m=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kx={focusedElem:t,selectionRange:n},l0=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var g=E.memoizedProps,h=E.memoizedState,d=e.stateNode,C=d.getSnapshotBeforeUpdate(e.elementType===e.type?g:wn(e.type,g),h);d.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(v){ht(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return E=Yd,Yd=!1,E}function ms(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&dc(e,n,o)}i=i.next}while(i!==r)}}function j0(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Hm(t){var e=t.alternate;e!==null&&(t.alternate=null,Hm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gn],delete e[ws],delete e[Jx],delete e[ug],delete e[dg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vm(t){return t.tag===5||t.tag===3||t.tag===4}function qd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=u0));else if(r!==4&&(t=t.child,t!==null))for(hc(t,e,n),t=t.sibling;t!==null;)hc(t,e,n),t=t.sibling}function pc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pc(t,e,n),t=t.sibling;t!==null;)pc(t,e,n),t=t.sibling}var Pt=null,Tn=!1;function Ar(t,e,n){for(n=n.child;n!==null;)Gm(t,e,n),n=n.sibling}function Gm(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(I0,n)}catch{}switch(n.tag){case 5:Ht||uo(n,e);case 6:var r=Pt,i=Tn;Pt=null,Ar(t,e,n),Pt=r,Tn=i,Pt!==null&&(Tn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Tn?(t=Pt,n=n.stateNode,t.nodeType===8?Rl(t.parentNode,n):t.nodeType===1&&Rl(t,n),Ds(t)):Rl(Pt,n.stateNode));break;case 4:r=Pt,i=Tn,Pt=n.stateNode.containerInfo,Tn=!0,Ar(t,e,n),Pt=r,Tn=i;break;case 0:case 11:case 14:case 15:if(!Ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&dc(n,e,s),i=i.next}while(i!==r)}Ar(t,e,n);break;case 1:if(!Ht&&(uo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ht(n,e,a)}Ar(t,e,n);break;case 21:Ar(t,e,n);break;case 22:n.mode&1?(Ht=(r=Ht)||n.memoizedState!==null,Ar(t,e,n),Ht=r):Ar(t,e,n);break;default:Ar(t,e,n)}}function $d(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Mg),e.forEach(function(r){var i=Ig.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,Tn=!1;break e;case 3:Pt=a.stateNode.containerInfo,Tn=!0;break e;case 4:Pt=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(Pt===null)throw Error(te(160));Gm(o,s,i),Pt=null,Tn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(x){ht(i,e,x)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Wm(e,t),e=e.sibling}function Wm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),In(t),r&4){try{ms(3,t,t.return),j0(3,t)}catch(g){ht(t,t.return,g)}try{ms(5,t,t.return)}catch(g){ht(t,t.return,g)}}break;case 1:Fn(e,t),In(t),r&512&&n!==null&&uo(n,n.return);break;case 5:if(Fn(e,t),In(t),r&512&&n!==null&&uo(n,n.return),t.flags&32){var i=t.stateNode;try{vs(i,"")}catch(g){ht(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&up(i,o),Ox(a,s);var x=Ox(a,o);for(s=0;s<l.length;s+=2){var u=l[s],c=l[s+1];u==="style"?mp(i,c):u==="dangerouslySetInnerHTML"?hp(i,c):u==="children"?vs(i,c):Vc(i,u,c,x)}switch(a){case"input":Lx(i,o);break;case"textarea":dp(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?po(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?po(i,!!o.multiple,o.defaultValue,!0):po(i,!!o.multiple,o.multiple?[]:"",!1))}i[ws]=o}catch(g){ht(t,t.return,g)}}break;case 6:if(Fn(e,t),In(t),r&4){if(t.stateNode===null)throw Error(te(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(g){ht(t,t.return,g)}}break;case 3:if(Fn(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ds(e.containerInfo)}catch(g){ht(t,t.return,g)}break;case 4:Fn(e,t),In(t);break;case 13:Fn(e,t),In(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Au=Et())),r&4&&$d(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(x=Ht)||u,Fn(e,t),Ht=x):Fn(e,t),In(t),r&8192){if(x=t.memoizedState!==null,(t.stateNode.isHidden=x)&&!u&&t.mode&1)for(fe=t,u=t.child;u!==null;){for(c=fe=u;fe!==null;){switch(f=fe,m=f.child,f.tag){case 0:case 11:case 14:case 15:ms(4,f,f.return);break;case 1:uo(f,f.return);var E=f.stateNode;if(typeof E.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(g){ht(r,n,g)}}break;case 5:uo(f,f.return);break;case 22:if(f.memoizedState!==null){Zd(c);continue}}m!==null?(m.return=f,fe=m):Zd(c)}u=u.sibling}e:for(u=null,c=t;;){if(c.tag===5){if(u===null){u=c;try{i=c.stateNode,x?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,l=c.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=pp("display",s))}catch(g){ht(t,t.return,g)}}}else if(c.tag===6){if(u===null)try{c.stateNode.nodeValue=x?"":c.memoizedProps}catch(g){ht(t,t.return,g)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;u===c&&(u=null),c=c.return}u===c&&(u=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Fn(e,t),In(t),r&4&&$d(t);break;case 21:break;default:Fn(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vm(n)){var r=n;break e}n=n.return}throw Error(te(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vs(i,""),r.flags&=-33);var o=qd(t);pc(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=qd(t);hc(t,a,s);break;default:throw Error(te(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Tg(t,e,n){fe=t,Xm(t)}function Xm(t,e,n){for(var r=(t.mode&1)!==0;fe!==null;){var i=fe,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||pa;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=pa;var x=Ht;if(pa=s,(Ht=l)&&!x)for(fe=i;fe!==null;)s=fe,l=s.child,s.tag===22&&s.memoizedState!==null?Qd(i):l!==null?(l.return=s,fe=l):Qd(i);for(;o!==null;)fe=o,Xm(o),o=o.sibling;fe=i,pa=a,Ht=x}Kd(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,fe=o):Kd(t)}}function Kd(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||j0(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:wn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&bd(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bd(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var x=e.alternate;if(x!==null){var u=x.memoizedState;if(u!==null){var c=u.dehydrated;c!==null&&Ds(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ht||e.flags&512&&fc(e)}catch(f){ht(e,e.return,f)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function Zd(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function Qd(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{j0(4,e)}catch(l){ht(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ht(e,i,l)}}var o=e.return;try{fc(e)}catch(l){ht(e,o,l)}break;case 5:var s=e.return;try{fc(e)}catch(l){ht(e,s,l)}}}catch(l){ht(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var Pg=Math.ceil,_0=Cr.ReactCurrentDispatcher,Cu=Cr.ReactCurrentOwner,An=Cr.ReactCurrentBatchConfig,Xe=0,Tt=null,Ct=null,bt=0,an=0,fo=ti(0),_t=0,ks=null,Ti=0,Y0=0,vu=0,Es=null,$t=null,Au=0,To=1/0,or=null,B0=!1,mc=null,Gr=null,ma=!1,kr=null,D0=0,gs=0,Ec=null,Ka=-1,Za=0;function Xt(){return Xe&6?Et():Ka!==-1?Ka:Ka=Et()}function Wr(t){return t.mode&1?Xe&2&&bt!==0?bt&-bt:hg.transition!==null?(Za===0&&(Za=Mp()),Za):(t=$e,t!==0||(t=window.event,t=t===void 0?16:kp(t.type)),t):1}function Ln(t,e,n,r){if(50<gs)throw gs=0,Ec=null,Error(te(185));Hs(t,n,r),(!(Xe&2)||t!==Tt)&&(t===Tt&&(!(Xe&2)&&(Y0|=n),_t===4&&Rr(t,bt)),en(t,r),n===1&&Xe===0&&!(e.mode&1)&&(To=Et()+500,G0&&ni()))}function en(t,e){var n=t.callbackNode;h8(t,e);var r=a0(t,t===Tt?bt:0);if(r===0)n!==null&&ad(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ad(n),e===1)t.tag===0?fg(Jd.bind(null,t)):em(Jd.bind(null,t)),xg(function(){!(Xe&6)&&ni()}),n=null;else{switch(wp(r)){case 1:n=Yc;break;case 4:n=yp;break;case 16:n=s0;break;case 536870912:n=Sp;break;default:n=s0}n=Jm(n,jm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jm(t,e){if(Ka=-1,Za=0,Xe&6)throw Error(te(327));var n=t.callbackNode;if(vo()&&t.callbackNode!==n)return null;var r=a0(t,t===Tt?bt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=F0(t,r);else{e=r;var i=Xe;Xe|=2;var o=qm();(Tt!==t||bt!==e)&&(or=null,To=Et()+500,Di(t,e));do try{Lg();break}catch(a){Ym(t,a)}while(!0);su(),_0.current=o,Xe=i,Ct!==null?e=0:(Tt=null,bt=0,e=_t)}if(e!==0){if(e===2&&(i=Wx(t),i!==0&&(r=i,e=gc(t,i))),e===1)throw n=ks,Di(t,0),Rr(t,r),en(t,Et()),n;if(e===6)Rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Rg(i)&&(e=F0(t,r),e===2&&(o=Wx(t),o!==0&&(r=o,e=gc(t,o))),e===1))throw n=ks,Di(t,0),Rr(t,r),en(t,Et()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(te(345));case 2:hi(t,$t,or);break;case 3:if(Rr(t,r),(r&130023424)===r&&(e=Au+500-Et(),10<e)){if(a0(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Xt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Qx(hi.bind(null,t,$t,or),e);break}hi(t,$t,or);break;case 4:if(Rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-bn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Et()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pg(r/1960))-r,10<r){t.timeoutHandle=Qx(hi.bind(null,t,$t,or),r);break}hi(t,$t,or);break;case 5:hi(t,$t,or);break;default:throw Error(te(329))}}}return en(t,Et()),t.callbackNode===n?jm.bind(null,t):null}function gc(t,e){var n=Es;return t.current.memoizedState.isDehydrated&&(Di(t,e).flags|=256),t=F0(t,e),t!==2&&(e=$t,$t=n,e!==null&&Cc(e)),t}function Cc(t){$t===null?$t=t:$t.push.apply($t,t)}function Rg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!kn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(t,e){for(e&=~vu,e&=~Y0,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bn(e),r=1<<n;t[n]=-1,e&=~r}}function Jd(t){if(Xe&6)throw Error(te(327));vo();var e=a0(t,0);if(!(e&1))return en(t,Et()),null;var n=F0(t,e);if(t.tag!==0&&n===2){var r=Wx(t);r!==0&&(e=r,n=gc(t,r))}if(n===1)throw n=ks,Di(t,0),Rr(t,e),en(t,Et()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hi(t,$t,or),en(t,Et()),null}function _u(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(To=Et()+500,G0&&ni())}}function Pi(t){kr!==null&&kr.tag===0&&!(Xe&6)&&vo();var e=Xe;Xe|=1;var n=An.transition,r=$e;try{if(An.transition=null,$e=1,t)return t()}finally{$e=r,An.transition=n,Xe=e,!(Xe&6)&&ni()}}function Bu(){an=fo.current,it(fo)}function Di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lg(n)),Ct!==null)for(n=Ct.return;n!==null;){var r=n;switch(ru(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&d0();break;case 3:Mo(),it(Qt),it(Vt),du();break;case 5:uu(r);break;case 4:Mo();break;case 13:it(ut);break;case 19:it(ut);break;case 10:au(r.type._context);break;case 22:case 23:Bu()}n=n.return}if(Tt=t,Ct=t=Xr(t.current,null),bt=an=e,_t=0,ks=null,vu=Y0=Ti=0,$t=Es=null,vi!==null){for(e=0;e<vi.length;e++)if(n=vi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}vi=null}return t}function Ym(t,e){do{var n=Ct;try{if(su(),Ya.current=A0,v0){for(var r=dt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}v0=!1}if(wi=0,Mt=At=dt=null,ps=!1,Rs=0,Cu.current=null,n===null||n.return===null){_t=1,ks=e,Ct=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var x=l,u=a,c=u.tag;if(!(u.mode&1)&&(c===0||c===11||c===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=zd(s);if(m!==null){m.flags&=-257,Hd(m,s,a,o,e),m.mode&1&&Od(o,x,e),e=m,l=x;var E=e.updateQueue;if(E===null){var g=new Set;g.add(l),e.updateQueue=g}else E.add(l);break e}else{if(!(e&1)){Od(o,x,e),Du();break e}l=Error(te(426))}}else if(lt&&a.mode&1){var h=zd(s);if(h!==null){!(h.flags&65536)&&(h.flags|=256),Hd(h,s,a,o,e),iu(wo(l,a));break e}}o=l=wo(l,a),_t!==4&&(_t=2),Es===null?Es=[o]:Es.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=Tm(o,l,e);Rd(o,d);break e;case 1:a=l;var C=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof C.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Gr===null||!Gr.has(p)))){o.flags|=65536,e&=-e,o.lanes|=e;var v=Pm(o,a,e);Rd(o,v);break e}}o=o.return}while(o!==null)}Km(n)}catch(F){e=F,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function qm(){var t=_0.current;return _0.current=A0,t===null?A0:t}function Du(){(_t===0||_t===3||_t===2)&&(_t=4),Tt===null||!(Ti&268435455)&&!(Y0&268435455)||Rr(Tt,bt)}function F0(t,e){var n=Xe;Xe|=2;var r=qm();(Tt!==t||bt!==e)&&(or=null,Di(t,e));do try{bg();break}catch(i){Ym(t,i)}while(!0);if(su(),Xe=n,_0.current=r,Ct!==null)throw Error(te(261));return Tt=null,bt=0,_t}function bg(){for(;Ct!==null;)$m(Ct)}function Lg(){for(;Ct!==null&&!o8();)$m(Ct)}function $m(t){var e=Qm(t.alternate,t,an);t.memoizedProps=t.pendingProps,e===null?Km(t):Ct=e,Cu.current=null}function Km(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Sg(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,Ct=null;return}}else if(n=yg(n,e,an),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);_t===0&&(_t=5)}function hi(t,e,n){var r=$e,i=An.transition;try{An.transition=null,$e=1,kg(t,e,n,r)}finally{An.transition=i,$e=r}return null}function kg(t,e,n,r){do vo();while(kr!==null);if(Xe&6)throw Error(te(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(p8(t,o),t===Tt&&(Ct=Tt=null,bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ma||(ma=!0,Jm(s0,function(){return vo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=An.transition,An.transition=null;var s=$e;$e=1;var a=Xe;Xe|=4,Cu.current=null,wg(t,n),Wm(n,t),tg(Kx),l0=!!$x,Kx=$x=null,t.current=n,Tg(n),s8(),Xe=a,$e=s,An.transition=o}else t.current=n;if(ma&&(ma=!1,kr=t,D0=i),o=t.pendingLanes,o===0&&(Gr=null),x8(n.stateNode),en(t,Et()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(B0)throw B0=!1,t=mc,mc=null,t;return D0&1&&t.tag!==0&&vo(),o=t.pendingLanes,o&1?t===Ec?gs++:(gs=0,Ec=t):gs=0,ni(),null}function vo(){if(kr!==null){var t=wp(D0),e=An.transition,n=$e;try{if(An.transition=null,$e=16>t?16:t,kr===null)var r=!1;else{if(t=kr,kr=null,D0=0,Xe&6)throw Error(te(331));var i=Xe;for(Xe|=4,fe=t.current;fe!==null;){var o=fe,s=o.child;if(fe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var x=a[l];for(fe=x;fe!==null;){var u=fe;switch(u.tag){case 0:case 11:case 15:ms(8,u,o)}var c=u.child;if(c!==null)c.return=u,fe=c;else for(;fe!==null;){u=fe;var f=u.sibling,m=u.return;if(Hm(u),u===x){fe=null;break}if(f!==null){f.return=m,fe=f;break}fe=m}}}var E=o.alternate;if(E!==null){var g=E.child;if(g!==null){E.child=null;do{var h=g.sibling;g.sibling=null,g=h}while(g!==null)}}fe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,fe=s;else e:for(;fe!==null;){if(o=fe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ms(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,fe=d;break e}fe=o.return}}var C=t.current;for(fe=C;fe!==null;){s=fe;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,fe=p;else e:for(s=C;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:j0(9,a)}}catch(F){ht(a,a.return,F)}if(a===s){fe=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,fe=v;break e}fe=a.return}}if(Xe=i,ni(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(I0,t)}catch{}r=!0}return r}finally{$e=n,An.transition=e}}return!1}function ef(t,e,n){e=wo(n,e),e=Tm(t,e,1),t=Vr(t,e,1),e=Xt(),t!==null&&(Hs(t,1,e),en(t,e))}function ht(t,e,n){if(t.tag===3)ef(t,t,n);else for(;e!==null;){if(e.tag===3){ef(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gr===null||!Gr.has(r))){t=wo(n,t),t=Pm(e,t,1),e=Vr(e,t,1),t=Xt(),e!==null&&(Hs(e,1,t),en(e,t));break}}e=e.return}}function Ng(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Tt===t&&(bt&n)===n&&(_t===4||_t===3&&(bt&130023424)===bt&&500>Et()-Au?Di(t,0):vu|=n),en(t,e)}function Zm(t,e){e===0&&(t.mode&1?(e=sa,sa<<=1,!(sa&130023424)&&(sa=4194304)):e=1);var n=Xt();t=mr(t,e),t!==null&&(Hs(t,e,n),en(t,n))}function Ug(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zm(t,n)}function Ig(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(te(314))}r!==null&&r.delete(e),Zm(t,n)}var Qm;Qm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,Fg(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,lt&&e.flags&1048576&&tm(e,p0,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$a(t,e),t=e.pendingProps;var i=Fo(e,Vt.current);Co(e,n),i=hu(null,e,r,t,i,n);var o=pu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(r)?(o=!0,f0(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xu(e),i.updater=W0,e.stateNode=i,i._reactInternals=e,oc(e,r,t,n),e=lc(null,e,r,!0,o,n)):(e.tag=0,lt&&o&&nu(e),Wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($a(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zg(r),t=wn(r,t),i){case 0:e=ac(null,e,r,t,n);break e;case 1:e=Wd(null,e,r,t,n);break e;case 11:e=Vd(null,e,r,t,n);break e;case 14:e=Gd(null,e,r,wn(r.type,t),n);break e}throw Error(te(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),ac(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),Wd(t,e,r,i,n);case 3:e:{if(km(e),t===null)throw Error(te(387));r=e.pendingProps,o=e.memoizedState,i=o.element,om(t,e),g0(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=wo(Error(te(423)),e),e=Xd(t,e,r,n,i);break e}else if(r!==i){i=wo(Error(te(424)),e),e=Xd(t,e,r,n,i);break e}else for(ln=Hr(e.stateNode.containerInfo.firstChild),xn=e,lt=!0,Pn=null,n=xm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yo(),r===i){e=Er(t,e,n);break e}Wt(t,e,r,n)}e=e.child}return e;case 5:return cm(e),t===null&&nc(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Zx(r,i)?s=null:o!==null&&Zx(r,o)&&(e.flags|=32),Lm(t,e),Wt(t,e,s,n),e.child;case 6:return t===null&&nc(e),null;case 13:return Nm(t,e,n);case 4:return cu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=So(e,null,r,n):Wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),Vd(t,e,r,i,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Je(m0,r._currentValue),r._currentValue=s,o!==null)if(kn(o.value,s)){if(o.children===i.children&&!Qt.current){e=Er(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=dr(-1,n&-n),l.tag=2;var x=o.updateQueue;if(x!==null){x=x.shared;var u=x.pending;u===null?l.next=l:(l.next=u.next,u.next=l),x.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),rc(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(te(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),rc(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Co(e,n),i=Bn(i),r=r(i),e.flags|=1,Wt(t,e,r,n),e.child;case 14:return r=e.type,i=wn(r,e.pendingProps),i=wn(r.type,i),Gd(t,e,r,i,n);case 15:return Rm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),$a(t,e),e.tag=1,Jt(r)?(t=!0,f0(e)):t=!1,Co(e,n),am(e,r,i),oc(e,r,i,n),lc(null,e,r,!0,t,n);case 19:return Um(t,e,n);case 22:return bm(t,e,n)}throw Error(te(156,e.tag))};function Jm(t,e){return Fp(t,e)}function Og(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,e,n,r){return new Og(t,e,n,r)}function Fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zg(t){if(typeof t=="function")return Fu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wc)return 11;if(t===Xc)return 14}return 2}function Xr(t,e){var n=t.alternate;return n===null?(n=Cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qa(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Fu(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case no:return Fi(n.children,i,o,e);case Gc:s=8,i|=8;break;case wx:return t=Cn(12,n,e,i|2),t.elementType=wx,t.lanes=o,t;case Tx:return t=Cn(13,n,e,i),t.elementType=Tx,t.lanes=o,t;case Px:return t=Cn(19,n,e,i),t.elementType=Px,t.lanes=o,t;case lp:return q0(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sp:s=10;break e;case ap:s=9;break e;case Wc:s=11;break e;case Xc:s=14;break e;case wr:s=16,r=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Cn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Fi(t,e,n,r){return t=Cn(7,t,r,e),t.lanes=n,t}function q0(t,e,n,r){return t=Cn(22,t,r,e),t.elementType=lp,t.lanes=n,t.stateNode={isHidden:!1},t}function zl(t,e,n){return t=Cn(6,t,null,e),t.lanes=n,t}function Hl(t,e,n){return e=Cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hg(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Al(0),this.expirationTimes=Al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Al(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yu(t,e,n,r,i,o,s,a,l){return t=new Hg(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Cn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xu(o),t}function Vg(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:to,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function eE(t){if(!t)return Zr;t=t._reactInternals;e:{if(Li(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(Jt(n))return Jp(t,n,e)}return e}function tE(t,e,n,r,i,o,s,a,l){return t=yu(n,r,!0,t,i,o,s,a,l),t.context=eE(null),n=t.current,r=Xt(),i=Wr(n),o=dr(r,i),o.callback=e??null,Vr(n,o,i),t.current.lanes=i,Hs(t,i,r),en(t,r),t}function $0(t,e,n,r){var i=e.current,o=Xt(),s=Wr(i);return n=eE(n),e.context===null?e.context=n:e.pendingContext=n,e=dr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Vr(i,e,s),t!==null&&(Ln(t,i,s,o),ja(t,i,s)),s}function y0(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Su(t,e){tf(t,e),(t=t.alternate)&&tf(t,e)}function Gg(){return null}var nE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mu(t){this._internalRoot=t}K0.prototype.render=Mu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));$0(t,e,null,null)};K0.prototype.unmount=Mu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pi(function(){$0(null,t,null,null)}),e[pr]=null}};function K0(t){this._internalRoot=t}K0.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pr.length&&e!==0&&e<Pr[n].priority;n++);Pr.splice(n,0,t),n===0&&Lp(t)}};function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Z0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nf(){}function Wg(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var x=y0(s);o.call(x)}}var s=tE(e,r,t,0,null,!1,!1,"",nf);return t._reactRootContainer=s,t[pr]=s.current,Ss(t.nodeType===8?t.parentNode:t),Pi(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var x=y0(l);a.call(x)}}var l=yu(t,0,!1,null,null,!1,!1,"",nf);return t._reactRootContainer=l,t[pr]=l.current,Ss(t.nodeType===8?t.parentNode:t),Pi(function(){$0(e,l,n,r)}),l}function Q0(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=y0(s);a.call(l)}}$0(e,s,t,i)}else s=Wg(n,e,t,i,r);return y0(s)}Tp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=as(e.pendingLanes);n!==0&&(qc(e,n|1),en(e,Et()),!(Xe&6)&&(To=Et()+500,ni()))}break;case 13:Pi(function(){var r=mr(t,1);if(r!==null){var i=Xt();Ln(r,t,1,i)}}),Su(t,1)}};$c=function(t){if(t.tag===13){var e=mr(t,134217728);if(e!==null){var n=Xt();Ln(e,t,134217728,n)}Su(t,134217728)}};Pp=function(t){if(t.tag===13){var e=Wr(t),n=mr(t,e);if(n!==null){var r=Xt();Ln(n,t,e,r)}Su(t,e)}};Rp=function(){return $e};bp=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};Hx=function(t,e,n){switch(e){case"input":if(Lx(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=V0(r);if(!i)throw Error(te(90));cp(r),Lx(r,i)}}}break;case"textarea":dp(t,n);break;case"select":e=n.value,e!=null&&po(t,!!n.multiple,e,!1)}};Cp=_u;vp=Pi;var Xg={usingClientEntryPoint:!1,Events:[Gs,so,V0,Ep,gp,_u]},Qo={findFiberByHostInstance:Ci,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jg={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bp(t),t===null?null:t.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||Gg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{I0=Ea.inject(jg),qn=Ea}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xg;dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wu(e))throw Error(te(200));return Vg(t,e,null,n)};dn.createRoot=function(t,e){if(!wu(t))throw Error(te(299));var n=!1,r="",i=nE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yu(t,1,!1,null,null,n,!1,r,i),t[pr]=e.current,Ss(t.nodeType===8?t.parentNode:t),new Mu(e)};dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Bp(e),t=t===null?null:t.stateNode,t};dn.flushSync=function(t){return Pi(t)};dn.hydrate=function(t,e,n){if(!Z0(e))throw Error(te(200));return Q0(null,t,e,!0,n)};dn.hydrateRoot=function(t,e,n){if(!wu(t))throw Error(te(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=nE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=tE(e,null,t,1,n??null,i,!1,o,s),t[pr]=e.current,Ss(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new K0(e)};dn.render=function(t,e,n){if(!Z0(e))throw Error(te(200));return Q0(null,t,e,!1,n)};dn.unmountComponentAtNode=function(t){if(!Z0(t))throw Error(te(40));return t._reactRootContainer?(Pi(function(){Q0(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1};dn.unstable_batchedUpdates=_u;dn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Z0(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Q0(t,e,n,!1,r)};dn.version="18.2.0-next-9e3b772b8-20220608";function rE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rE)}catch(t){console.error(t)}}rE(),tp.exports=dn;var Yg=tp.exports,rf=Yg;Sx.createRoot=rf.createRoot,Sx.hydrateRoot=rf.hydrateRoot;class wt{}ea(wt,"token",localStorage.getItem("bearerToken")),ea(wt,"baseurl","https://partiel.thomascarrot.com"),ea(wt,"isLogged",localStorage.getItem("bearerToken")!==null);function qg(){const[t,e]=oe.useState(!1);function n(){localStorage.removeItem("bearerToken"),window.location.reload()}function r(){wt.isLogged&&e(!0)}return oe.useEffect(()=>r,[]),K.jsx(K.Fragment,{children:K.jsx("header",{children:K.jsx("nav",{className:"navbar navbar-expand-lg bg-dark",children:K.jsxs("div",{className:"container-lg d-flex align-items-center justify-content-between",children:[K.jsx("a",{className:"nav-link text-light",id:"logoNavBarre",href:"/",children:"LOGO"}),K.jsx("div",{className:"text-light",children:K.jsx("ul",{className:"d-flex gap-3",children:t?K.jsxs("li",{className:"d-flex gap-5",children:[K.jsx("a",{className:"nav-link text-light",href:"/orders",children:"Order"}),K.jsx("button",{onClick:n,className:"nav-link text-light",children:"logout"})]}):K.jsxs(K.Fragment,{children:[K.jsx("li",{children:K.jsx("a",{className:"nav-link text-light",href:"/register",children:"Register"})}),K.jsx("li",{children:K.jsx("a",{className:"nav-link text-light",href:"/login",children:"Login"})})]})})})]})})})})}/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ns(){return Ns=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ns.apply(this,arguments)}var Nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Nr||(Nr={}));const of="popstate";function $g(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return vc("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:S0(i)}return Zg(e,n,null,t)}function vt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function iE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Kg(){return Math.random().toString(36).substr(2,8)}function sf(t,e){return{usr:t.state,key:t.key,idx:e}}function vc(t,e,n,r){return n===void 0&&(n=null),Ns({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Oo(e):e,{state:n,key:e&&e.key||r||Kg()})}function S0(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Oo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Zg(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Nr.Pop,l=null,x=u();x==null&&(x=0,s.replaceState(Ns({},s.state,{idx:x}),""));function u(){return(s.state||{idx:null}).idx}function c(){a=Nr.Pop;let h=u(),d=h==null?null:h-x;x=h,l&&l({action:a,location:g.location,delta:d})}function f(h,d){a=Nr.Push;let C=vc(g.location,h,d);n&&n(C,h),x=u()+1;let p=sf(C,x),v=g.createHref(C);try{s.pushState(p,"",v)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(v)}o&&l&&l({action:a,location:g.location,delta:1})}function m(h,d){a=Nr.Replace;let C=vc(g.location,h,d);n&&n(C,h),x=u();let p=sf(C,x),v=g.createHref(C);s.replaceState(p,"",v),o&&l&&l({action:a,location:g.location,delta:0})}function E(h){let d=i.location.origin!=="null"?i.location.origin:i.location.href,C=typeof h=="string"?h:S0(h);return C=C.replace(/ $/,"%20"),vt(d,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,d)}let g={get action(){return a},get location(){return t(i,s)},listen(h){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(of,c),l=h,()=>{i.removeEventListener(of,c),l=null}},createHref(h){return e(i,h)},createURL:E,encodeLocation(h){let d=E(h);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:f,replace:m,go(h){return s.go(h)}};return g}var af;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(af||(af={}));function Qg(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Oo(e):e,i=Tu(r.pathname||"/",n);if(i==null)return null;let o=oE(t);Jg(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let l=u1(i);s=l1(o[a],l)}return s}function oE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(vt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let x=jr([r,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(vt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+x+'".')),oE(o.children,e,u,x)),!(o.path==null&&!o.index)&&e.push({path:x,score:s1(x,o.index),routesMeta:u})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of sE(o.path))i(o,s,l)}),e}function sE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=sE(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Jg(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:a1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const e1=/^:[\w-]+$/,t1=3,n1=2,r1=1,i1=10,o1=-2,lf=t=>t==="*";function s1(t,e){let n=t.split("/"),r=n.length;return n.some(lf)&&(r+=o1),e&&(r+=n1),n.filter(i=>!lf(i)).reduce((i,o)=>i+(e1.test(o)?t1:o===""?r1:i1),r)}function a1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function l1(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,x=i==="/"?e:e.slice(i.length)||"/",u=x1({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},x);if(!u)return null;Object.assign(r,u.params);let c=a.route;o.push({params:r,pathname:jr([i,u.pathname]),pathnameBase:p1(jr([i,u.pathnameBase])),route:c}),u.pathnameBase!=="/"&&(i=jr([i,u.pathnameBase]))}return o}function x1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=c1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((x,u,c)=>{let{paramName:f,isOptional:m}=u;if(f==="*"){let g=a[c]||"";s=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const E=a[c];return m&&!E?x[f]=void 0:x[f]=(E||"").replace(/%2F/g,"/"),x},{}),pathname:o,pathnameBase:s,pattern:t}}function c1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),iE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function u1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return iE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Tu(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function d1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Oo(t):t;return{pathname:n?n.startsWith("/")?n:f1(n,e):e,search:m1(r),hash:E1(i)}}function f1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vl(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function h1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function aE(t,e){let n=h1(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Oo(t):(i=Ns({},t),vt(!i.pathname||!i.pathname.includes("?"),Vl("?","pathname","search",i)),vt(!i.pathname||!i.pathname.includes("#"),Vl("#","pathname","hash",i)),vt(!i.search||!i.search.includes("#"),Vl("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let c=e.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}a=c>=0?e[c]:"/"}let l=d1(i,a),x=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(x||u)&&(l.pathname+="/"),l}const jr=t=>t.join("/").replace(/\/\/+/g,"/"),p1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),m1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,E1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function g1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const xE=["post","put","patch","delete"];new Set(xE);const C1=["get",...xE];new Set(C1);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Us(){return Us=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Us.apply(this,arguments)}const Pu=oe.createContext(null),v1=oe.createContext(null),ki=oe.createContext(null),J0=oe.createContext(null),ri=oe.createContext({outlet:null,matches:[],isDataRoute:!1}),cE=oe.createContext(null);function A1(t,e){let{relative:n}=e===void 0?{}:e;Xs()||vt(!1);let{basename:r,navigator:i}=oe.useContext(ki),{hash:o,pathname:s,search:a}=dE(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:jr([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Xs(){return oe.useContext(J0)!=null}function el(){return Xs()||vt(!1),oe.useContext(J0).location}function uE(t){oe.useContext(ki).static||oe.useLayoutEffect(t)}function tl(){let{isDataRoute:t}=oe.useContext(ri);return t?k1():_1()}function _1(){Xs()||vt(!1);let t=oe.useContext(Pu),{basename:e,future:n,navigator:r}=oe.useContext(ki),{matches:i}=oe.useContext(ri),{pathname:o}=el(),s=JSON.stringify(aE(i,n.v7_relativeSplatPath)),a=oe.useRef(!1);return uE(()=>{a.current=!0}),oe.useCallback(function(x,u){if(u===void 0&&(u={}),!a.current)return;if(typeof x=="number"){r.go(x);return}let c=lE(x,JSON.parse(s),o,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:jr([e,c.pathname])),(u.replace?r.replace:r.push)(c,u.state,u)},[e,r,s,o,t])}function B1(){let{matches:t}=oe.useContext(ri),e=t[t.length-1];return e?e.params:{}}function dE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=oe.useContext(ki),{matches:i}=oe.useContext(ri),{pathname:o}=el(),s=JSON.stringify(aE(i,r.v7_relativeSplatPath));return oe.useMemo(()=>lE(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function D1(t,e){return F1(t,e)}function F1(t,e,n,r){Xs()||vt(!1);let{navigator:i}=oe.useContext(ki),{matches:o}=oe.useContext(ri),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let x=el(),u;if(e){var c;let h=typeof e=="string"?Oo(e):e;l==="/"||(c=h.pathname)!=null&&c.startsWith(l)||vt(!1),u=h}else u=x;let f=u.pathname||"/",m=f;if(l!=="/"){let h=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(h.length).join("/")}let E=Qg(t,{pathname:m}),g=T1(E&&E.map(h=>Object.assign({},h,{params:Object.assign({},a,h.params),pathname:jr([l,i.encodeLocation?i.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?l:jr([l,i.encodeLocation?i.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),o,n,r);return e&&g?oe.createElement(J0.Provider,{value:{location:Us({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Nr.Pop}},g):g}function y1(){let t=L1(),e=g1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return oe.createElement(oe.Fragment,null,oe.createElement("h2",null,"Unexpected Application Error!"),oe.createElement("h3",{style:{fontStyle:"italic"}},e),n?oe.createElement("pre",{style:i},n):null,null)}const S1=oe.createElement(y1,null);class M1 extends oe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?oe.createElement(ri.Provider,{value:this.props.routeContext},oe.createElement(cE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function w1(t){let{routeContext:e,match:n,children:r}=t,i=oe.useContext(Pu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),oe.createElement(ri.Provider,{value:e},r)}function T1(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=s.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));u>=0||vt(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,x=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<s.length;u++){let c=s[u];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(x=u),c.route.id){let{loaderData:f,errors:m}=n,E=c.route.loader&&f[c.route.id]===void 0&&(!m||m[c.route.id]===void 0);if(c.route.lazy||E){l=!0,x>=0?s=s.slice(0,x+1):s=[s[0]];break}}}return s.reduceRight((u,c,f)=>{let m,E=!1,g=null,h=null;n&&(m=a&&c.route.id?a[c.route.id]:void 0,g=c.route.errorElement||S1,l&&(x<0&&f===0?(N1("route-fallback",!1),E=!0,h=null):x===f&&(E=!0,h=c.route.hydrateFallbackElement||null)));let d=e.concat(s.slice(0,f+1)),C=()=>{let p;return m?p=g:E?p=h:c.route.Component?p=oe.createElement(c.route.Component,null):c.route.element?p=c.route.element:p=u,oe.createElement(w1,{match:c,routeContext:{outlet:u,matches:d,isDataRoute:n!=null},children:p})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?oe.createElement(M1,{location:n.location,revalidation:n.revalidation,component:g,error:m,children:C(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):C()},null)}var fE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(fE||{}),M0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(M0||{});function P1(t){let e=oe.useContext(Pu);return e||vt(!1),e}function R1(t){let e=oe.useContext(v1);return e||vt(!1),e}function b1(t){let e=oe.useContext(ri);return e||vt(!1),e}function hE(t){let e=b1(),n=e.matches[e.matches.length-1];return n.route.id||vt(!1),n.route.id}function L1(){var t;let e=oe.useContext(cE),n=R1(M0.UseRouteError),r=hE(M0.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function k1(){let{router:t}=P1(fE.UseNavigateStable),e=hE(M0.UseNavigateStable),n=oe.useRef(!1);return uE(()=>{n.current=!0}),oe.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Us({fromRouteId:e},o)))},[t,e])}const xf={};function N1(t,e,n){!e&&!xf[t]&&(xf[t]=!0)}function On(t){vt(!1)}function U1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Nr.Pop,navigator:o,static:s=!1,future:a}=t;Xs()&&vt(!1);let l=e.replace(/^\/*/,"/"),x=oe.useMemo(()=>({basename:l,navigator:o,static:s,future:Us({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Oo(r));let{pathname:u="/",search:c="",hash:f="",state:m=null,key:E="default"}=r,g=oe.useMemo(()=>{let h=Tu(u,l);return h==null?null:{location:{pathname:h,search:c,hash:f,state:m,key:E},navigationType:i}},[l,u,c,f,m,E,i]);return g==null?null:oe.createElement(ki.Provider,{value:x},oe.createElement(J0.Provider,{children:n,value:g}))}function I1(t){let{children:e,location:n}=t;return D1(Ac(e),n)}new Promise(()=>{});function Ac(t,e){e===void 0&&(e=[]);let n=[];return oe.Children.forEach(t,(r,i)=>{if(!oe.isValidElement(r))return;let o=[...e,i];if(r.type===oe.Fragment){n.push.apply(n,Ac(r.props.children,o));return}r.type!==On&&vt(!1),!r.props.index||!r.props.children||vt(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ac(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _c(){return _c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_c.apply(this,arguments)}function O1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function z1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function H1(t,e){return t.button===0&&(!e||e==="_self")&&!z1(t)}const V1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],G1="6";try{window.__reactRouterVersion=G1}catch{}const W1="startTransition",cf=U9[W1];function X1(t){let{basename:e,children:n,future:r,window:i}=t,o=oe.useRef();o.current==null&&(o.current=$g({window:i,v5Compat:!0}));let s=o.current,[a,l]=oe.useState({action:s.action,location:s.location}),{v7_startTransition:x}=r||{},u=oe.useCallback(c=>{x&&cf?cf(()=>l(c)):l(c)},[l,x]);return oe.useLayoutEffect(()=>s.listen(u),[s,u]),oe.createElement(U1,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const j1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Y1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,q1=oe.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:x,preventScrollReset:u,unstable_viewTransition:c}=e,f=O1(e,V1),{basename:m}=oe.useContext(ki),E,g=!1;if(typeof x=="string"&&Y1.test(x)&&(E=x,j1))try{let p=new URL(window.location.href),v=x.startsWith("//")?new URL(p.protocol+x):new URL(x),F=Tu(v.pathname,m);v.origin===p.origin&&F!=null?x=F+v.search+v.hash:g=!0}catch{}let h=A1(x,{relative:i}),d=$1(x,{replace:s,state:a,target:l,preventScrollReset:u,relative:i,unstable_viewTransition:c});function C(p){r&&r(p),p.defaultPrevented||d(p)}return oe.createElement("a",_c({},f,{href:E||h,onClick:g||o?r:C,ref:n,target:l}))});var uf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(uf||(uf={}));var df;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(df||(df={}));function $1(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=e===void 0?{}:e,l=tl(),x=el(),u=dE(t,{relative:s});return oe.useCallback(c=>{if(H1(c,n)){c.preventDefault();let f=r!==void 0?r:S0(x)===S0(u);l(t,{replace:f,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[x,l,u,r,i,n,t,o,s,a])}function pE(t,e){return function(){return t.apply(e,arguments)}}const{toString:K1}=Object.prototype,{getPrototypeOf:Ru}=Object,nl=(t=>e=>{const n=K1.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Zn=t=>(t=t.toLowerCase(),e=>nl(e)===t),rl=t=>e=>typeof e===t,{isArray:zo}=Array,Is=rl("undefined");function Z1(t){return t!==null&&!Is(t)&&t.constructor!==null&&!Is(t.constructor)&&_n(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const mE=Zn("ArrayBuffer");function Q1(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&mE(t.buffer),e}const J1=rl("string"),_n=rl("function"),EE=rl("number"),il=t=>t!==null&&typeof t=="object",eC=t=>t===!0||t===!1,Ja=t=>{if(nl(t)!=="object")return!1;const e=Ru(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},tC=Zn("Date"),nC=Zn("File"),rC=Zn("Blob"),iC=Zn("FileList"),oC=t=>il(t)&&_n(t.pipe),sC=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||_n(t.append)&&((e=nl(t))==="formdata"||e==="object"&&_n(t.toString)&&t.toString()==="[object FormData]"))},aC=Zn("URLSearchParams"),lC=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function js(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),zo(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const o=n?Object.getOwnPropertyNames(t):Object.keys(t),s=o.length;let a;for(r=0;r<s;r++)a=o[r],e.call(null,t[a],a,t)}}function gE(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const CE=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,vE=t=>!Is(t)&&t!==CE;function Bc(){const{caseless:t}=vE(this)&&this||{},e={},n=(r,i)=>{const o=t&&gE(e,i)||i;Ja(e[o])&&Ja(r)?e[o]=Bc(e[o],r):Ja(r)?e[o]=Bc({},r):zo(r)?e[o]=r.slice():e[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&js(arguments[r],n);return e}const xC=(t,e,n,{allOwnKeys:r}={})=>(js(e,(i,o)=>{n&&_n(i)?t[o]=pE(i,n):t[o]=i},{allOwnKeys:r}),t),cC=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),uC=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},dC=(t,e,n,r)=>{let i,o,s;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),o=i.length;o-- >0;)s=i[o],(!r||r(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=n!==!1&&Ru(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},fC=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},hC=t=>{if(!t)return null;if(zo(t))return t;let e=t.length;if(!EE(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},pC=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ru(Uint8Array)),mC=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const o=i.value;e.call(t,o[0],o[1])}},EC=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},gC=Zn("HTMLFormElement"),CC=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),ff=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),vC=Zn("RegExp"),AE=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};js(n,(i,o)=>{let s;(s=e(i,o,t))!==!1&&(r[o]=s||i)}),Object.defineProperties(t,r)},AC=t=>{AE(t,(e,n)=>{if(_n(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(_n(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_C=(t,e)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return zo(t)?r(t):r(String(t).split(e)),n},BC=()=>{},DC=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Gl="abcdefghijklmnopqrstuvwxyz",hf="0123456789",_E={DIGIT:hf,ALPHA:Gl,ALPHA_DIGIT:Gl+Gl.toUpperCase()+hf},FC=(t=16,e=_E.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function yC(t){return!!(t&&_n(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const SC=t=>{const e=new Array(10),n=(r,i)=>{if(il(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const o=zo(r)?[]:{};return js(r,(s,a)=>{const l=n(s,i+1);!Is(l)&&(o[a]=l)}),e[i]=void 0,o}}return r};return n(t,0)},MC=Zn("AsyncFunction"),wC=t=>t&&(il(t)||_n(t))&&_n(t.then)&&_n(t.catch),Z={isArray:zo,isArrayBuffer:mE,isBuffer:Z1,isFormData:sC,isArrayBufferView:Q1,isString:J1,isNumber:EE,isBoolean:eC,isObject:il,isPlainObject:Ja,isUndefined:Is,isDate:tC,isFile:nC,isBlob:rC,isRegExp:vC,isFunction:_n,isStream:oC,isURLSearchParams:aC,isTypedArray:pC,isFileList:iC,forEach:js,merge:Bc,extend:xC,trim:lC,stripBOM:cC,inherits:uC,toFlatObject:dC,kindOf:nl,kindOfTest:Zn,endsWith:fC,toArray:hC,forEachEntry:mC,matchAll:EC,isHTMLForm:gC,hasOwnProperty:ff,hasOwnProp:ff,reduceDescriptors:AE,freezeMethods:AC,toObjectSet:_C,toCamelCase:CC,noop:BC,toFiniteNumber:DC,findKey:gE,global:CE,isContextDefined:vE,ALPHABET:_E,generateString:FC,isSpecCompliantForm:yC,toJSONObject:SC,isAsyncFn:MC,isThenable:wC};function Ve(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}Z.inherits(Ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Z.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const BE=Ve.prototype,DE={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{DE[t]={value:t}});Object.defineProperties(Ve,DE);Object.defineProperty(BE,"isAxiosError",{value:!0});Ve.from=(t,e,n,r,i,o)=>{const s=Object.create(BE);return Z.toFlatObject(t,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Ve.call(s,t.message,e,n,r,i),s.cause=t,s.name=t.name,o&&Object.assign(s,o),s};const TC=null;function Dc(t){return Z.isPlainObject(t)||Z.isArray(t)}function FE(t){return Z.endsWith(t,"[]")?t.slice(0,-2):t}function pf(t,e,n){return t?t.concat(e).map(function(i,o){return i=FE(i),!n&&o?"["+i+"]":i}).join(n?".":""):e}function PC(t){return Z.isArray(t)&&!t.some(Dc)}const RC=Z.toFlatObject(Z,{},null,function(e){return/^is[A-Z]/.test(e)});function ol(t,e,n){if(!Z.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=Z.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,h){return!Z.isUndefined(h[g])});const r=n.metaTokens,i=n.visitor||u,o=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&Z.isSpecCompliantForm(e);if(!Z.isFunction(i))throw new TypeError("visitor must be a function");function x(E){if(E===null)return"";if(Z.isDate(E))return E.toISOString();if(!l&&Z.isBlob(E))throw new Ve("Blob is not supported. Use a Buffer instead.");return Z.isArrayBuffer(E)||Z.isTypedArray(E)?l&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function u(E,g,h){let d=E;if(E&&!h&&typeof E=="object"){if(Z.endsWith(g,"{}"))g=r?g:g.slice(0,-2),E=JSON.stringify(E);else if(Z.isArray(E)&&PC(E)||(Z.isFileList(E)||Z.endsWith(g,"[]"))&&(d=Z.toArray(E)))return g=FE(g),d.forEach(function(p,v){!(Z.isUndefined(p)||p===null)&&e.append(s===!0?pf([g],v,o):s===null?g:g+"[]",x(p))}),!1}return Dc(E)?!0:(e.append(pf(h,g,o),x(E)),!1)}const c=[],f=Object.assign(RC,{defaultVisitor:u,convertValue:x,isVisitable:Dc});function m(E,g){if(!Z.isUndefined(E)){if(c.indexOf(E)!==-1)throw Error("Circular reference detected in "+g.join("."));c.push(E),Z.forEach(E,function(d,C){(!(Z.isUndefined(d)||d===null)&&i.call(e,d,Z.isString(C)?C.trim():C,g,f))===!0&&m(d,g?g.concat(C):[C])}),c.pop()}}if(!Z.isObject(t))throw new TypeError("data must be an object");return m(t),e}function mf(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function bu(t,e){this._pairs=[],t&&ol(t,this,e)}const yE=bu.prototype;yE.append=function(e,n){this._pairs.push([e,n])};yE.toString=function(e){const n=e?function(r){return e.call(this,r,mf)}:mf;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function bC(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function SE(t,e,n){if(!e)return t;const r=n&&n.encode||bC,i=n&&n.serialize;let o;if(i?o=i(e,n):o=Z.isURLSearchParams(e)?e.toString():new bu(e,n).toString(r),o){const s=t.indexOf("#");s!==-1&&(t=t.slice(0,s)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class Ef{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Z.forEach(this.handlers,function(r){r!==null&&e(r)})}}const ME={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},LC=typeof URLSearchParams<"u"?URLSearchParams:bu,kC=typeof FormData<"u"?FormData:null,NC=typeof Blob<"u"?Blob:null,UC={isBrowser:!0,classes:{URLSearchParams:LC,FormData:kC,Blob:NC},protocols:["http","https","file","blob","url","data"]},wE=typeof window<"u"&&typeof document<"u",IC=(t=>wE&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),OC=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",zC=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:wE,hasStandardBrowserEnv:IC,hasStandardBrowserWebWorkerEnv:OC},Symbol.toStringTag,{value:"Module"})),Xn={...zC,...UC};function HC(t,e){return ol(t,new Xn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Xn.isNode&&Z.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function VC(t){return Z.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function GC(t){const e={},n=Object.keys(t);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],e[o]=t[o];return e}function TE(t){function e(n,r,i,o){let s=n[o++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=o>=n.length;return s=!s&&Z.isArray(i)?i.length:s,l?(Z.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!Z.isObject(i[s]))&&(i[s]=[]),e(n,r,i[s],o)&&Z.isArray(i[s])&&(i[s]=GC(i[s])),!a)}if(Z.isFormData(t)&&Z.isFunction(t.entries)){const n={};return Z.forEachEntry(t,(r,i)=>{e(VC(r),i,n,0)}),n}return null}function WC(t,e,n){if(Z.isString(t))try{return(e||JSON.parse)(t),Z.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Lu={transitional:ME,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=Z.isObject(e);if(o&&Z.isHTMLForm(e)&&(e=new FormData(e)),Z.isFormData(e))return i?JSON.stringify(TE(e)):e;if(Z.isArrayBuffer(e)||Z.isBuffer(e)||Z.isStream(e)||Z.isFile(e)||Z.isBlob(e))return e;if(Z.isArrayBufferView(e))return e.buffer;if(Z.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return HC(e,this.formSerializer).toString();if((a=Z.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ol(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),WC(e)):e}],transformResponse:[function(e){const n=this.transitional||Lu.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&Z.isString(e)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(s)throw a.name==="SyntaxError"?Ve.from(a,Ve.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xn.classes.FormData,Blob:Xn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Z.forEach(["delete","get","head","post","put","patch"],t=>{Lu.headers[t]={}});const ku=Lu,XC=Z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jC=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||e[n]&&XC[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},gf=Symbol("internals");function Jo(t){return t&&String(t).trim().toLowerCase()}function e0(t){return t===!1||t==null?t:Z.isArray(t)?t.map(e0):String(t)}function YC(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const qC=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Wl(t,e,n,r,i){if(Z.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!Z.isString(e)){if(Z.isString(r))return e.indexOf(r)!==-1;if(Z.isRegExp(r))return r.test(e)}}function $C(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function KC(t,e){const n=Z.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,o,s){return this[r].call(this,e,i,o,s)},configurable:!0})})}class sl{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function o(a,l,x){const u=Jo(l);if(!u)throw new Error("header name must be a non-empty string");const c=Z.findKey(i,u);(!c||i[c]===void 0||x===!0||x===void 0&&i[c]!==!1)&&(i[c||l]=e0(a))}const s=(a,l)=>Z.forEach(a,(x,u)=>o(x,u,l));return Z.isPlainObject(e)||e instanceof this.constructor?s(e,n):Z.isString(e)&&(e=e.trim())&&!qC(e)?s(jC(e),n):e!=null&&o(n,e,r),this}get(e,n){if(e=Jo(e),e){const r=Z.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return YC(i);if(Z.isFunction(n))return n.call(this,i,r);if(Z.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Jo(e),e){const r=Z.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Wl(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function o(s){if(s=Jo(s),s){const a=Z.findKey(r,s);a&&(!n||Wl(r,r[a],a,n))&&(delete r[a],i=!0)}}return Z.isArray(e)?e.forEach(o):o(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!e||Wl(this,this[o],o,e,!0))&&(delete this[o],i=!0)}return i}normalize(e){const n=this,r={};return Z.forEach(this,(i,o)=>{const s=Z.findKey(r,o);if(s){n[s]=e0(i),delete n[o];return}const a=e?$C(o):String(o).trim();a!==o&&delete n[o],n[a]=e0(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return Z.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&Z.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[gf]=this[gf]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=Jo(s);r[a]||(KC(i,s),r[a]=!0)}return Z.isArray(e)?e.forEach(o):o(e),this}}sl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Z.reduceDescriptors(sl.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});Z.freezeMethods(sl);const fr=sl;function Xl(t,e){const n=this||ku,r=e||n,i=fr.from(r.headers);let o=r.data;return Z.forEach(t,function(a){o=a.call(n,o,i.normalize(),e?e.status:void 0)}),i.normalize(),o}function PE(t){return!!(t&&t.__CANCEL__)}function Ys(t,e,n){Ve.call(this,t??"canceled",Ve.ERR_CANCELED,e,n),this.name="CanceledError"}Z.inherits(Ys,Ve,{__CANCEL__:!0});function ZC(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new Ve("Request failed with status code "+n.status,[Ve.ERR_BAD_REQUEST,Ve.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const QC=Xn.hasStandardBrowserEnv?{write(t,e,n,r,i,o){const s=[t+"="+encodeURIComponent(e)];Z.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),Z.isString(r)&&s.push("path="+r),Z.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function JC(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function ev(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function RE(t,e){return t&&!JC(e)?ev(t,e):e}const tv=Xn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return e&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=Z.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function nv(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function rv(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,o=0,s;return e=e!==void 0?e:1e3,function(l){const x=Date.now(),u=r[o];s||(s=x),n[i]=l,r[i]=x;let c=o,f=0;for(;c!==i;)f+=n[c++],c=c%t;if(i=(i+1)%t,i===o&&(o=(o+1)%t),x-s<e)return;const m=u&&x-u;return m?Math.round(f*1e3/m):void 0}}function Cf(t,e){let n=0;const r=rv(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,l=r(a),x=o<=s;n=o;const u={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&x?(s-o)/l:void 0,event:i};u[e?"download":"upload"]=!0,t(u)}}const iv=typeof XMLHttpRequest<"u",ov=iv&&function(t){return new Promise(function(n,r){let i=t.data;const o=fr.from(t.headers).normalize();let{responseType:s,withXSRFToken:a}=t,l;function x(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let u;if(Z.isFormData(i)){if(Xn.hasStandardBrowserEnv||Xn.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((u=o.getContentType())!==!1){const[g,...h]=u?u.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([g||"multipart/form-data",...h].join("; "))}}let c=new XMLHttpRequest;if(t.auth){const g=t.auth.username||"",h=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(g+":"+h))}const f=RE(t.baseURL,t.url);c.open(t.method.toUpperCase(),SE(f,t.params,t.paramsSerializer),!0),c.timeout=t.timeout;function m(){if(!c)return;const g=fr.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),d={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:g,config:t,request:c};ZC(function(p){n(p),x()},function(p){r(p),x()},d),c=null}if("onloadend"in c?c.onloadend=m:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(m)},c.onabort=function(){c&&(r(new Ve("Request aborted",Ve.ECONNABORTED,t,c)),c=null)},c.onerror=function(){r(new Ve("Network Error",Ve.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let h=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const d=t.transitional||ME;t.timeoutErrorMessage&&(h=t.timeoutErrorMessage),r(new Ve(h,d.clarifyTimeoutError?Ve.ETIMEDOUT:Ve.ECONNABORTED,t,c)),c=null},Xn.hasStandardBrowserEnv&&(a&&Z.isFunction(a)&&(a=a(t)),a||a!==!1&&tv(f))){const g=t.xsrfHeaderName&&t.xsrfCookieName&&QC.read(t.xsrfCookieName);g&&o.set(t.xsrfHeaderName,g)}i===void 0&&o.setContentType(null),"setRequestHeader"in c&&Z.forEach(o.toJSON(),function(h,d){c.setRequestHeader(d,h)}),Z.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),s&&s!=="json"&&(c.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&c.addEventListener("progress",Cf(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Cf(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=g=>{c&&(r(!g||g.type?new Ys(null,t,c):g),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const E=nv(f);if(E&&Xn.protocols.indexOf(E)===-1){r(new Ve("Unsupported protocol "+E+":",Ve.ERR_BAD_REQUEST,t));return}c.send(i||null)})},Fc={http:TC,xhr:ov};Z.forEach(Fc,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const vf=t=>`- ${t}`,sv=t=>Z.isFunction(t)||t===null||t===!1,bE={getAdapter:t=>{t=Z.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let o=0;o<e;o++){n=t[o];let s;if(r=n,!sv(n)&&(r=Fc[(s=String(n)).toLowerCase()],r===void 0))throw new Ve(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=e?o.length>1?`since :
`+o.map(vf).join(`
`):" "+vf(o[0]):"as no adapter specified";throw new Ve("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Fc};function jl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ys(null,t)}function Af(t){return jl(t),t.headers=fr.from(t.headers),t.data=Xl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),bE.getAdapter(t.adapter||ku.adapter)(t).then(function(r){return jl(t),r.data=Xl.call(t,t.transformResponse,r),r.headers=fr.from(r.headers),r},function(r){return PE(r)||(jl(t),r&&r.response&&(r.response.data=Xl.call(t,t.transformResponse,r.response),r.response.headers=fr.from(r.response.headers))),Promise.reject(r)})}const _f=t=>t instanceof fr?{...t}:t;function Po(t,e){e=e||{};const n={};function r(x,u,c){return Z.isPlainObject(x)&&Z.isPlainObject(u)?Z.merge.call({caseless:c},x,u):Z.isPlainObject(u)?Z.merge({},u):Z.isArray(u)?u.slice():u}function i(x,u,c){if(Z.isUndefined(u)){if(!Z.isUndefined(x))return r(void 0,x,c)}else return r(x,u,c)}function o(x,u){if(!Z.isUndefined(u))return r(void 0,u)}function s(x,u){if(Z.isUndefined(u)){if(!Z.isUndefined(x))return r(void 0,x)}else return r(void 0,u)}function a(x,u,c){if(c in e)return r(x,u);if(c in t)return r(void 0,x)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(x,u)=>i(_f(x),_f(u),!0)};return Z.forEach(Object.keys(Object.assign({},t,e)),function(u){const c=l[u]||i,f=c(t[u],e[u],u);Z.isUndefined(f)&&c!==a||(n[u]=f)}),n}const LE="1.6.8",Nu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Nu[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Bf={};Nu.transitional=function(e,n,r){function i(o,s){return"[Axios v"+LE+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(e===!1)throw new Ve(i(s," has been removed"+(n?" in "+n:"")),Ve.ERR_DEPRECATED);return n&&!Bf[s]&&(Bf[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(o,s,a):!0}};function av(t,e,n){if(typeof t!="object")throw new Ve("options must be an object",Ve.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const o=r[i],s=e[o];if(s){const a=t[o],l=a===void 0||s(a,o,t);if(l!==!0)throw new Ve("option "+o+" must be "+l,Ve.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ve("Unknown option "+o,Ve.ERR_BAD_OPTION)}}const yc={assertOptions:av,validators:Nu},_r=yc.validators;class w0{constructor(e){this.defaults=e,this.interceptors={request:new Ef,response:new Ef}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Po(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&yc.assertOptions(r,{silentJSONParsing:_r.transitional(_r.boolean),forcedJSONParsing:_r.transitional(_r.boolean),clarifyTimeoutError:_r.transitional(_r.boolean)},!1),i!=null&&(Z.isFunction(i)?n.paramsSerializer={serialize:i}:yc.assertOptions(i,{encode:_r.function,serialize:_r.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&Z.merge(o.common,o[n.method]);o&&Z.forEach(["delete","get","head","post","put","patch","common"],E=>{delete o[E]}),n.headers=fr.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(l=l&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const x=[];this.interceptors.response.forEach(function(g){x.push(g.fulfilled,g.rejected)});let u,c=0,f;if(!l){const E=[Af.bind(this),void 0];for(E.unshift.apply(E,a),E.push.apply(E,x),f=E.length,u=Promise.resolve(n);c<f;)u=u.then(E[c++],E[c++]);return u}f=a.length;let m=n;for(c=0;c<f;){const E=a[c++],g=a[c++];try{m=E(m)}catch(h){g.call(this,h);break}}try{u=Af.call(this,m)}catch(E){return Promise.reject(E)}for(c=0,f=x.length;c<f;)u=u.then(x[c++],x[c++]);return u}getUri(e){e=Po(this.defaults,e);const n=RE(e.baseURL,e.url);return SE(n,e.params,e.paramsSerializer)}}Z.forEach(["delete","get","head","options"],function(e){w0.prototype[e]=function(n,r){return this.request(Po(r||{},{method:e,url:n,data:(r||{}).data}))}});Z.forEach(["post","put","patch"],function(e){function n(r){return function(o,s,a){return this.request(Po(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}w0.prototype[e]=n(),w0.prototype[e+"Form"]=n(!0)});const t0=w0;class Uu{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},e(function(o,s,a){r.reason||(r.reason=new Ys(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Uu(function(i){e=i}),cancel:e}}}const lv=Uu;function xv(t){return function(n){return t.apply(null,n)}}function cv(t){return Z.isObject(t)&&t.isAxiosError===!0}const Sc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Sc).forEach(([t,e])=>{Sc[e]=t});const uv=Sc;function kE(t){const e=new t0(t),n=pE(t0.prototype.request,e);return Z.extend(n,t0.prototype,e,{allOwnKeys:!0}),Z.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return kE(Po(t,i))},n}const pt=kE(ku);pt.Axios=t0;pt.CanceledError=Ys;pt.CancelToken=lv;pt.isCancel=PE;pt.VERSION=LE;pt.toFormData=ol;pt.AxiosError=Ve;pt.Cancel=pt.CanceledError;pt.all=function(e){return Promise.all(e)};pt.spread=xv;pt.isAxiosError=cv;pt.mergeConfig=Po;pt.AxiosHeaders=fr;pt.formToJSON=t=>TE(Z.isHTMLForm(t)?new FormData(t):t);pt.getAdapter=bE.getAdapter;pt.HttpStatusCode=uv;pt.default=pt;function Yl(){const[t,e]=oe.useState(""),[n,r]=oe.useState(""),i=window.location.pathname,o=tl();function s(){return i.includes("/register")}function a(){const x={username:t,password:n};return pt.post(wt.baseurl+"register",x).then(u=>{console.log(u.data.message)}),o("/login")}async function l(){const x={username:t,password:n};try{const c=(await pt.post(wt.baseurl+"/api/login_check",x)).data.token;localStorage.setItem("bearerToken",c),wt.token=c,wt.isLogged=!0,setTimeout(()=>{o("/"),window.location.reload()},500)}catch(u){console.error("Une erreur s'est produite lors de la connexion :",u)}}return K.jsx(K.Fragment,{children:K.jsx("div",{className:"container",children:K.jsx("div",{className:"d-flex flex-column gap-3 align-items-center",children:K.jsxs("div",{className:"d-flex flex-column gap-3 align-items-center w-100",children:[s()?K.jsx("h1",{children:"Register"}):K.jsx("h1",{children:"Login"}),K.jsx("div",{className:"col-8",children:K.jsxs("div",{className:"d-flex flex-column justify-content-center gap-2 w-100",children:[K.jsx("input",{type:"text",placeholder:"username",onChange:x=>e(x.target.value),className:"form-control"}),K.jsx("input",{type:"password",placeholder:"password",className:"form-control",onChange:x=>r(x.target.value)})]})}),s()?K.jsx("div",{children:K.jsx("button",{onClick:a,className:"btn btn-primary",children:"Register"})}):K.jsx("div",{children:K.jsx("button",{onClick:l,className:"btn btn-primary",children:"Login"})})]})})})})}function dv(){return K.jsx(K.Fragment,{children:K.jsxs("div",{className:"container",children:[K.jsx("h1",{children:"Welcome to ScanLib"}),wt.isLogged?K.jsx("div",{className:"",children:K.jsx("a",{className:"btn btn-primary",href:"/cart",children:"voir mon panier"})}):K.jsx(K.Fragment,{children:K.jsx("div",{className:"",children:K.jsx("a",{className:"btn btn-primary",href:"/login",children:"log require"})})})]})})}const cr=pt.create();cr.interceptors.request.use(t=>(t.headers.Authorization=`Bearer ${wt.token}`,t),t=>Promise.reject(t));function fv(){const[t,e]=oe.useState(null),[n,r]=oe.useState(0),i=tl();oe.useEffect(()=>{o()},[]);async function o(){try{const u=await cr.get(wt.baseurl+"/api/order/cart");console.log(u.data.cart),e(u.data.cart),u.data.cart&&u.data.cart.items&&x(u.data.cart.items)}catch(u){console.error("Une erreur s'est produite lors de la récupération du panier :",u)}}async function s(u){try{const c=await cr.post(wt.baseurl+`/api/order/add/${u}`);e(c.data.cart),c.data.cart&&c.data.cart.items&&x(c.data.cart.items),window.location.reload()}catch(c){console.error("Une erreur s'est produite lors de l'ajout d'un élément au panier :",c)}}async function a(u){try{const c=await cr.post(wt.baseurl+`/api/order/remove/${u}`);e(c.data.cart),c.data.cart&&c.data.cart.items&&x(c.data.cart.items),window.location.reload()}catch(c){console.error("Une erreur s'est produite lors de l'enlèvement d'un élément au panier :",c)}}async function l(){try{const u=await cr.post(wt.baseurl+"/api/order/payment");console.log(u.data),i("/animation")}catch(u){console.error("Une erreur s'est produite lors du paiement :",u)}}function x(u){let c=0;u.forEach(f=>{c+=f.price*f.quantity}),r(c)}return K.jsx(K.Fragment,{children:K.jsx("div",{className:"container",children:t?K.jsxs("div",{children:[K.jsxs("h2",{children:["Panier de ",t.profile.username]}),K.jsxs("ul",{children:[t.items.map((u,c)=>K.jsxs("li",{className:"d-flex align-items-center justify-content-around gap-5 mt-5 mb-5 w-100",children:[K.jsx("div",{className:"d-flex align-items-center",children:K.jsxs("p",{children:[u.name," - ",u.price,"€ - Quantité : ",u.quantity]})}),K.jsxs("div",{className:"d-flex gap-5",children:[K.jsx("button",{onClick:()=>a(u.product_id),className:"btn btn-danger",children:"-"}),K.jsx("button",{onClick:()=>s(u.product_id),className:"btn btn-success",children:"+"})]})]},c)),t.items.length>0&&K.jsxs("h3",{children:["Total = ",n,"€"]})]}),K.jsxs("div",{className:"d-flex justify-content-around gap-3 mt-5",children:[K.jsx("a",{className:"btn btn-primary",href:"/add",children:"Ajouter un produit"}),t.items.length>0&&K.jsx("button",{onClick:l,className:"btn btn-success",children:"Payer"})]})]}):K.jsx("p",{children:"Chargement du panier..."})})})}var NE={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(typeof self<"u"?self:A9,function(){return function(n){var r={};function i(o){if(r[o])return r[o].exports;var s=r[o]={i:o,l:!1,exports:{}};return n[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=n,i.c=r,i.d=function(o,s,a){i.o(o,s)||Object.defineProperty(o,s,{configurable:!1,enumerable:!0,get:a})},i.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return i.d(s,"a",s),s},i.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},i.p="",i(i.s=3)}([function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function s(a,l){this.width=l,this.height=a.length/l,this.data=a}return s.createEmpty=function(a,l){return new s(new Uint8ClampedArray(a*l),a)},s.prototype.get=function(a,l){return a<0||a>=this.width||l<0||l>=this.height?!1:!!this.data[l*this.width+a]},s.prototype.set=function(a,l,x){this.data[l*this.width+a]=x?1:0},s.prototype.setRegion=function(a,l,x,u,c){for(var f=l;f<l+u;f++)for(var m=a;m<a+x;m++)this.set(m,f,!!c)},s}();r.BitMatrix=o},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(2);function s(l,x){return l^x}r.addOrSubtractGF=s;var a=function(){function l(x,u,c){this.primitive=x,this.size=u,this.generatorBase=c,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var f=1,m=0;m<this.size;m++)this.expTable[m]=f,f=f*2,f>=this.size&&(f=(f^this.primitive)&this.size-1);for(var m=0;m<this.size-1;m++)this.logTable[this.expTable[m]]=m;this.zero=new o.default(this,Uint8ClampedArray.from([0])),this.one=new o.default(this,Uint8ClampedArray.from([1]))}return l.prototype.multiply=function(x,u){return x===0||u===0?0:this.expTable[(this.logTable[x]+this.logTable[u])%(this.size-1)]},l.prototype.inverse=function(x){if(x===0)throw new Error("Can't invert 0");return this.expTable[this.size-this.logTable[x]-1]},l.prototype.buildMonomial=function(x,u){if(x<0)throw new Error("Invalid monomial degree less than 0");if(u===0)return this.zero;var c=new Uint8ClampedArray(x+1);return c[0]=u,new o.default(this,c)},l.prototype.log=function(x){if(x===0)throw new Error("Can't take log(0)");return this.logTable[x]},l.prototype.exp=function(x){return this.expTable[x]},l}();r.default=a},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),s=function(){function a(l,x){if(x.length===0)throw new Error("No coefficients.");this.field=l;var u=x.length;if(u>1&&x[0]===0){for(var c=1;c<u&&x[c]===0;)c++;if(c===u)this.coefficients=l.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(u-c);for(var f=0;f<this.coefficients.length;f++)this.coefficients[f]=x[c+f]}}else this.coefficients=x}return a.prototype.degree=function(){return this.coefficients.length-1},a.prototype.isZero=function(){return this.coefficients[0]===0},a.prototype.getCoefficient=function(l){return this.coefficients[this.coefficients.length-1-l]},a.prototype.addOrSubtract=function(l){var x;if(this.isZero())return l;if(l.isZero())return this;var u=this.coefficients,c=l.coefficients;u.length>c.length&&(x=[c,u],u=x[0],c=x[1]);for(var f=new Uint8ClampedArray(c.length),m=c.length-u.length,E=0;E<m;E++)f[E]=c[E];for(var E=m;E<c.length;E++)f[E]=o.addOrSubtractGF(u[E-m],c[E]);return new a(this.field,f)},a.prototype.multiply=function(l){if(l===0)return this.field.zero;if(l===1)return this;for(var x=this.coefficients.length,u=new Uint8ClampedArray(x),c=0;c<x;c++)u[c]=this.field.multiply(this.coefficients[c],l);return new a(this.field,u)},a.prototype.multiplyPoly=function(l){if(this.isZero()||l.isZero())return this.field.zero;for(var x=this.coefficients,u=x.length,c=l.coefficients,f=c.length,m=new Uint8ClampedArray(u+f-1),E=0;E<u;E++)for(var g=x[E],h=0;h<f;h++)m[E+h]=o.addOrSubtractGF(m[E+h],this.field.multiply(g,c[h]));return new a(this.field,m)},a.prototype.multiplyByMonomial=function(l,x){if(l<0)throw new Error("Invalid degree less than 0");if(x===0)return this.field.zero;for(var u=this.coefficients.length,c=new Uint8ClampedArray(u+l),f=0;f<u;f++)c[f]=this.field.multiply(this.coefficients[f],x);return new a(this.field,c)},a.prototype.evaluateAt=function(l){var x=0;if(l===0)return this.getCoefficient(0);var u=this.coefficients.length;if(l===1)return this.coefficients.forEach(function(f){x=o.addOrSubtractGF(x,f)}),x;x=this.coefficients[0];for(var c=1;c<u;c++)x=o.addOrSubtractGF(this.field.multiply(l,x),this.coefficients[c]);return x},a}();r.default=s},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(4),s=i(5),a=i(11),l=i(12);function x(f){var m=l.locate(f);if(!m)return null;for(var E=0,g=m;E<g.length;E++){var h=g[E],d=a.extract(f,h),C=s.decode(d.matrix);if(C)return{binaryData:C.bytes,data:C.text,chunks:C.chunks,version:C.version,location:{topRightCorner:d.mappingFunction(h.dimension,0),topLeftCorner:d.mappingFunction(0,0),bottomRightCorner:d.mappingFunction(h.dimension,h.dimension),bottomLeftCorner:d.mappingFunction(0,h.dimension),topRightFinderPattern:h.topRight,topLeftFinderPattern:h.topLeft,bottomLeftFinderPattern:h.bottomLeft,bottomRightAlignmentPattern:h.alignmentPattern}}}return null}var u={inversionAttempts:"attemptBoth"};function c(f,m,E,g){g===void 0&&(g={});var h=u;Object.keys(h||{}).forEach(function(_){h[_]=g[_]||h[_]});var d=h.inversionAttempts==="attemptBoth"||h.inversionAttempts==="invertFirst",C=h.inversionAttempts==="onlyInvert"||h.inversionAttempts==="invertFirst",p=o.binarize(f,m,E,d),v=p.binarized,F=p.inverted,B=x(C?F:v);return!B&&(h.inversionAttempts==="attemptBoth"||h.inversionAttempts==="invertFirst")&&(B=x(C?v:F)),B}c.default=c,r.default=c},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(0),s=8,a=24;function l(c,f,m){return c<f?f:c>m?m:c}var x=function(){function c(f,m){this.width=f,this.data=new Uint8ClampedArray(f*m)}return c.prototype.get=function(f,m){return this.data[m*this.width+f]},c.prototype.set=function(f,m,E){this.data[m*this.width+f]=E},c}();function u(c,f,m,E){if(c.length!==f*m*4)throw new Error("Malformed data passed to binarizer.");for(var g=new x(f,m),h=0;h<f;h++)for(var d=0;d<m;d++){var C=c[(d*f+h)*4+0],p=c[(d*f+h)*4+1],v=c[(d*f+h)*4+2];g.set(h,d,.2126*C+.7152*p+.0722*v)}for(var F=Math.ceil(f/s),B=Math.ceil(m/s),_=new x(F,B),M=0;M<B;M++)for(var D=0;D<F;D++){for(var A=0,b=1/0,L=0,d=0;d<s;d++)for(var h=0;h<s;h++){var P=g.get(D*s+h,M*s+d);A+=P,b=Math.min(b,P),L=Math.max(L,P)}var I=A/Math.pow(s,2);if(L-b<=a&&(I=b/2,M>0&&D>0)){var U=(_.get(D,M-1)+2*_.get(D-1,M)+_.get(D-1,M-1))/4;b<U&&(I=U)}_.set(D,M,I)}var $=o.BitMatrix.createEmpty(f,m),W=null;E&&(W=o.BitMatrix.createEmpty(f,m));for(var M=0;M<B;M++)for(var D=0;D<F;D++){for(var R=l(D,2,F-3),z=l(M,2,B-3),A=0,H=-2;H<=2;H++)for(var q=-2;q<=2;q++)A+=_.get(R+H,z+q);for(var le=A/25,H=0;H<s;H++)for(var q=0;q<s;q++){var h=D*s+H,d=M*s+q,ye=g.get(h,d);$.set(h,d,ye<=le),E&&W.set(h,d,!(ye<=le))}}return E?{binarized:$,inverted:W}:{binarized:$}}r.binarize=u},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(0),s=i(6),a=i(9),l=i(10);function x(v,F){for(var B=v^F,_=0;B;)_++,B&=B-1;return _}function u(v,F){return F<<1|v}var c=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],f=[function(v){return(v.y+v.x)%2===0},function(v){return v.y%2===0},function(v){return v.x%3===0},function(v){return(v.y+v.x)%3===0},function(v){return(Math.floor(v.y/2)+Math.floor(v.x/3))%2===0},function(v){return v.x*v.y%2+v.x*v.y%3===0},function(v){return(v.y*v.x%2+v.y*v.x%3)%2===0},function(v){return((v.y+v.x)%2+v.y*v.x%3)%2===0}];function m(v){var F=17+4*v.versionNumber,B=o.BitMatrix.createEmpty(F,F);B.setRegion(0,0,9,9,!0),B.setRegion(F-8,0,8,9,!0),B.setRegion(0,F-8,9,8,!0);for(var _=0,M=v.alignmentPatternCenters;_<M.length;_++)for(var D=M[_],A=0,b=v.alignmentPatternCenters;A<b.length;A++){var L=b[A];D===6&&L===6||D===6&&L===F-7||D===F-7&&L===6||B.setRegion(D-2,L-2,5,5,!0)}return B.setRegion(6,9,1,F-17,!0),B.setRegion(9,6,F-17,1,!0),v.versionNumber>6&&(B.setRegion(F-11,0,3,6,!0),B.setRegion(0,F-11,6,3,!0)),B}function E(v,F,B){for(var _=f[B.dataMask],M=v.height,D=m(F),A=[],b=0,L=0,P=!0,I=M-1;I>0;I-=2){I===6&&I--;for(var U=0;U<M;U++)for(var $=P?M-1-U:U,W=0;W<2;W++){var R=I-W;if(!D.get(R,$)){L++;var z=v.get(R,$);_({y:$,x:R})&&(z=!z),b=u(z,b),L===8&&(A.push(b),L=0,b=0)}}P=!P}return A}function g(v){var F=v.height,B=Math.floor((F-17)/4);if(B<=6)return l.VERSIONS[B-1];for(var _=0,M=5;M>=0;M--)for(var D=F-9;D>=F-11;D--)_=u(v.get(D,M),_);for(var A=0,D=5;D>=0;D--)for(var M=F-9;M>=F-11;M--)A=u(v.get(D,M),A);for(var b=1/0,L,P=0,I=l.VERSIONS;P<I.length;P++){var U=I[P];if(U.infoBits===_||U.infoBits===A)return U;var $=x(_,U.infoBits);$<b&&(L=U,b=$),$=x(A,U.infoBits),$<b&&(L=U,b=$)}if(b<=3)return L}function h(v){for(var F=0,B=0;B<=8;B++)B!==6&&(F=u(v.get(B,8),F));for(var _=7;_>=0;_--)_!==6&&(F=u(v.get(8,_),F));for(var M=v.height,D=0,_=M-1;_>=M-7;_--)D=u(v.get(8,_),D);for(var B=M-8;B<M;B++)D=u(v.get(B,8),D);for(var A=1/0,b=null,L=0,P=c;L<P.length;L++){var I=P[L],U=I.bits,$=I.formatInfo;if(U===F||U===D)return $;var W=x(F,U);W<A&&(b=$,A=W),F!==D&&(W=x(D,U),W<A&&(b=$,A=W))}return A<=3?b:null}function d(v,F,B){var _=F.errorCorrectionLevels[B],M=[],D=0;if(_.ecBlocks.forEach(function(z){for(var H=0;H<z.numBlocks;H++)M.push({numDataCodewords:z.dataCodewordsPerBlock,codewords:[]}),D+=z.dataCodewordsPerBlock+_.ecCodewordsPerBlock}),v.length<D)return null;v=v.slice(0,D);for(var A=_.ecBlocks[0].dataCodewordsPerBlock,b=0;b<A;b++)for(var L=0,P=M;L<P.length;L++){var I=P[L];I.codewords.push(v.shift())}if(_.ecBlocks.length>1)for(var U=_.ecBlocks[0].numBlocks,$=_.ecBlocks[1].numBlocks,b=0;b<$;b++)M[U+b].codewords.push(v.shift());for(;v.length>0;)for(var W=0,R=M;W<R.length;W++){var I=R[W];I.codewords.push(v.shift())}return M}function C(v){var F=g(v);if(!F)return null;var B=h(v);if(!B)return null;var _=E(v,F,B),M=d(_,F,B.errorCorrectionLevel);if(!M)return null;for(var D=M.reduce(function(W,R){return W+R.numDataCodewords},0),A=new Uint8ClampedArray(D),b=0,L=0,P=M;L<P.length;L++){var I=P[L],U=a.decode(I.codewords,I.codewords.length-I.numDataCodewords);if(!U)return null;for(var $=0;$<I.numDataCodewords;$++)A[b++]=U[$]}try{return s.decode(A,F.versionNumber)}catch{return null}}function p(v){if(v==null)return null;var F=C(v);if(F)return F;for(var B=0;B<v.width;B++)for(var _=B+1;_<v.height;_++)v.get(B,_)!==v.get(_,B)&&(v.set(B,_,!v.get(B,_)),v.set(_,B,!v.get(_,B)));return C(v)}r.decode=p},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(7),s=i(8),a;(function(g){g.Numeric="numeric",g.Alphanumeric="alphanumeric",g.Byte="byte",g.Kanji="kanji",g.ECI="eci"})(a=r.Mode||(r.Mode={}));var l;(function(g){g[g.Terminator=0]="Terminator",g[g.Numeric=1]="Numeric",g[g.Alphanumeric=2]="Alphanumeric",g[g.Byte=4]="Byte",g[g.Kanji=8]="Kanji",g[g.ECI=7]="ECI"})(l||(l={}));function x(g,h){for(var d=[],C="",p=[10,12,14][h],v=g.readBits(p);v>=3;){var F=g.readBits(10);if(F>=1e3)throw new Error("Invalid numeric value above 999");var B=Math.floor(F/100),_=Math.floor(F/10)%10,M=F%10;d.push(48+B,48+_,48+M),C+=B.toString()+_.toString()+M.toString(),v-=3}if(v===2){var F=g.readBits(7);if(F>=100)throw new Error("Invalid numeric value above 99");var B=Math.floor(F/10),_=F%10;d.push(48+B,48+_),C+=B.toString()+_.toString()}else if(v===1){var F=g.readBits(4);if(F>=10)throw new Error("Invalid numeric value above 9");d.push(48+F),C+=F.toString()}return{bytes:d,text:C}}var u=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function c(g,h){for(var d=[],C="",p=[9,11,13][h],v=g.readBits(p);v>=2;){var F=g.readBits(11),B=Math.floor(F/45),_=F%45;d.push(u[B].charCodeAt(0),u[_].charCodeAt(0)),C+=u[B]+u[_],v-=2}if(v===1){var B=g.readBits(6);d.push(u[B].charCodeAt(0)),C+=u[B]}return{bytes:d,text:C}}function f(g,h){for(var d=[],C="",p=[8,16,16][h],v=g.readBits(p),F=0;F<v;F++){var B=g.readBits(8);d.push(B)}try{C+=decodeURIComponent(d.map(function(_){return"%"+("0"+_.toString(16)).substr(-2)}).join(""))}catch{}return{bytes:d,text:C}}function m(g,h){for(var d=[],C="",p=[8,10,12][h],v=g.readBits(p),F=0;F<v;F++){var B=g.readBits(13),_=Math.floor(B/192)<<8|B%192;_<7936?_+=33088:_+=49472,d.push(_>>8,_&255),C+=String.fromCharCode(s.shiftJISTable[_])}return{bytes:d,text:C}}function E(g,h){for(var d,C,p,v,F=new o.BitStream(g),B=h<=9?0:h<=26?1:2,_={text:"",bytes:[],chunks:[],version:h};F.available()>=4;){var M=F.readBits(4);if(M===l.Terminator)return _;if(M===l.ECI)F.readBits(1)===0?_.chunks.push({type:a.ECI,assignmentNumber:F.readBits(7)}):F.readBits(1)===0?_.chunks.push({type:a.ECI,assignmentNumber:F.readBits(14)}):F.readBits(1)===0?_.chunks.push({type:a.ECI,assignmentNumber:F.readBits(21)}):_.chunks.push({type:a.ECI,assignmentNumber:-1});else if(M===l.Numeric){var D=x(F,B);_.text+=D.text,(d=_.bytes).push.apply(d,D.bytes),_.chunks.push({type:a.Numeric,text:D.text})}else if(M===l.Alphanumeric){var A=c(F,B);_.text+=A.text,(C=_.bytes).push.apply(C,A.bytes),_.chunks.push({type:a.Alphanumeric,text:A.text})}else if(M===l.Byte){var b=f(F,B);_.text+=b.text,(p=_.bytes).push.apply(p,b.bytes),_.chunks.push({type:a.Byte,bytes:b.bytes,text:b.text})}else if(M===l.Kanji){var L=m(F,B);_.text+=L.text,(v=_.bytes).push.apply(v,L.bytes),_.chunks.push({type:a.Kanji,bytes:L.bytes,text:L.text})}}if(F.available()===0||F.readBits(F.available())===0)return _}r.decode=E},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function s(a){this.byteOffset=0,this.bitOffset=0,this.bytes=a}return s.prototype.readBits=function(a){if(a<1||a>32||a>this.available())throw new Error("Cannot read "+a.toString()+" bits");var l=0;if(this.bitOffset>0){var x=8-this.bitOffset,u=a<x?a:x,c=x-u,f=255>>8-u<<c;l=(this.bytes[this.byteOffset]&f)>>c,a-=u,this.bitOffset+=u,this.bitOffset===8&&(this.bitOffset=0,this.byteOffset++)}if(a>0){for(;a>=8;)l=l<<8|this.bytes[this.byteOffset]&255,this.byteOffset++,a-=8;if(a>0){var c=8-a,f=255>>c<<c;l=l<<a|(this.bytes[this.byteOffset]&f)>>c,this.bitOffset+=a}}return l},s.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},s}();r.BitStream=o},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),s=i(2);function a(c,f,m,E){var g;f.degree()<m.degree()&&(g=[m,f],f=g[0],m=g[1]);for(var h=f,d=m,C=c.zero,p=c.one;d.degree()>=E/2;){var v=h,F=C;if(h=d,C=p,h.isZero())return null;d=v;for(var B=c.zero,_=h.getCoefficient(h.degree()),M=c.inverse(_);d.degree()>=h.degree()&&!d.isZero();){var D=d.degree()-h.degree(),A=c.multiply(d.getCoefficient(d.degree()),M);B=B.addOrSubtract(c.buildMonomial(D,A)),d=d.addOrSubtract(h.multiplyByMonomial(D,A))}if(p=B.multiplyPoly(C).addOrSubtract(F),d.degree()>=h.degree())return null}var b=p.getCoefficient(0);if(b===0)return null;var L=c.inverse(b);return[p.multiply(L),d.multiply(L)]}function l(c,f){var m=f.degree();if(m===1)return[f.getCoefficient(1)];for(var E=new Array(m),g=0,h=1;h<c.size&&g<m;h++)f.evaluateAt(h)===0&&(E[g]=c.inverse(h),g++);return g!==m?null:E}function x(c,f,m){for(var E=m.length,g=new Array(E),h=0;h<E;h++){for(var d=c.inverse(m[h]),C=1,p=0;p<E;p++)h!==p&&(C=c.multiply(C,o.addOrSubtractGF(1,c.multiply(m[p],d))));g[h]=c.multiply(f.evaluateAt(d),c.inverse(C)),c.generatorBase!==0&&(g[h]=c.multiply(g[h],d))}return g}function u(c,f){var m=new Uint8ClampedArray(c.length);m.set(c);for(var E=new o.default(285,256,0),g=new s.default(E,m),h=new Uint8ClampedArray(f),d=!1,C=0;C<f;C++){var p=g.evaluateAt(E.exp(C+E.generatorBase));h[h.length-1-C]=p,p!==0&&(d=!0)}if(!d)return m;var v=new s.default(E,h),F=a(E,E.buildMonomial(f,1),v,f);if(F===null)return null;var B=l(E,F[0]);if(B==null)return null;for(var _=x(E,F[1],B),M=0;M<B.length;M++){var D=m.length-1-E.log(B[M]);if(D<0)return null;m[D]=o.addOrSubtractGF(m[D],_[M])}return m}r.decode=u},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(0);function s(u,c,f,m){var E=u.x-c.x+f.x-m.x,g=u.y-c.y+f.y-m.y;if(E===0&&g===0)return{a11:c.x-u.x,a12:c.y-u.y,a13:0,a21:f.x-c.x,a22:f.y-c.y,a23:0,a31:u.x,a32:u.y,a33:1};var h=c.x-f.x,d=m.x-f.x,C=c.y-f.y,p=m.y-f.y,v=h*p-d*C,F=(E*p-d*g)/v,B=(h*g-E*C)/v;return{a11:c.x-u.x+F*c.x,a12:c.y-u.y+F*c.y,a13:F,a21:m.x-u.x+B*m.x,a22:m.y-u.y+B*m.y,a23:B,a31:u.x,a32:u.y,a33:1}}function a(u,c,f,m){var E=s(u,c,f,m);return{a11:E.a22*E.a33-E.a23*E.a32,a12:E.a13*E.a32-E.a12*E.a33,a13:E.a12*E.a23-E.a13*E.a22,a21:E.a23*E.a31-E.a21*E.a33,a22:E.a11*E.a33-E.a13*E.a31,a23:E.a13*E.a21-E.a11*E.a23,a31:E.a21*E.a32-E.a22*E.a31,a32:E.a12*E.a31-E.a11*E.a32,a33:E.a11*E.a22-E.a12*E.a21}}function l(u,c){return{a11:u.a11*c.a11+u.a21*c.a12+u.a31*c.a13,a12:u.a12*c.a11+u.a22*c.a12+u.a32*c.a13,a13:u.a13*c.a11+u.a23*c.a12+u.a33*c.a13,a21:u.a11*c.a21+u.a21*c.a22+u.a31*c.a23,a22:u.a12*c.a21+u.a22*c.a22+u.a32*c.a23,a23:u.a13*c.a21+u.a23*c.a22+u.a33*c.a23,a31:u.a11*c.a31+u.a21*c.a32+u.a31*c.a33,a32:u.a12*c.a31+u.a22*c.a32+u.a32*c.a33,a33:u.a13*c.a31+u.a23*c.a32+u.a33*c.a33}}function x(u,c){for(var f=a({x:3.5,y:3.5},{x:c.dimension-3.5,y:3.5},{x:c.dimension-6.5,y:c.dimension-6.5},{x:3.5,y:c.dimension-3.5}),m=s(c.topLeft,c.topRight,c.alignmentPattern,c.bottomLeft),E=l(m,f),g=o.BitMatrix.createEmpty(c.dimension,c.dimension),h=function(B,_){var M=E.a13*B+E.a23*_+E.a33;return{x:(E.a11*B+E.a21*_+E.a31)/M,y:(E.a12*B+E.a22*_+E.a32)/M}},d=0;d<c.dimension;d++)for(var C=0;C<c.dimension;C++){var p=C+.5,v=d+.5,F=h(p,v);g.set(C,d,u.get(Math.floor(F.x),Math.floor(F.y)))}return{matrix:g,mappingFunction:h}}r.extract=x},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=4,s=.5,a=1.5,l=function(p,v){return Math.sqrt(Math.pow(v.x-p.x,2)+Math.pow(v.y-p.y,2))};function x(p){return p.reduce(function(v,F){return v+F})}function u(p,v,F){var B,_,M,D,A=l(p,v),b=l(v,F),L=l(p,F),P,I,U;return b>=A&&b>=L?(B=[v,p,F],P=B[0],I=B[1],U=B[2]):L>=b&&L>=A?(_=[p,v,F],P=_[0],I=_[1],U=_[2]):(M=[p,F,v],P=M[0],I=M[1],U=M[2]),(U.x-I.x)*(P.y-I.y)-(U.y-I.y)*(P.x-I.x)<0&&(D=[U,P],P=D[0],U=D[1]),{bottomLeft:P,topLeft:I,topRight:U}}function c(p,v,F,B){var _=(x(m(p,F,B,5))/7+x(m(p,v,B,5))/7+x(m(F,p,B,5))/7+x(m(v,p,B,5))/7)/4;if(_<1)throw new Error("Invalid module size");var M=Math.round(l(p,v)/_),D=Math.round(l(p,F)/_),A=Math.floor((M+D)/2)+7;switch(A%4){case 0:A++;break;case 2:A--;break}return{dimension:A,moduleSize:_}}function f(p,v,F,B){var _=[{x:Math.floor(p.x),y:Math.floor(p.y)}],M=Math.abs(v.y-p.y)>Math.abs(v.x-p.x),D,A,b,L;M?(D=Math.floor(p.y),A=Math.floor(p.x),b=Math.floor(v.y),L=Math.floor(v.x)):(D=Math.floor(p.x),A=Math.floor(p.y),b=Math.floor(v.x),L=Math.floor(v.y));for(var P=Math.abs(b-D),I=Math.abs(L-A),U=Math.floor(-P/2),$=D<b?1:-1,W=A<L?1:-1,R=!0,z=D,H=A;z!==b+$;z+=$){var q=M?H:z,le=M?z:H;if(F.get(q,le)!==R&&(R=!R,_.push({x:q,y:le}),_.length===B+1))break;if(U+=I,U>0){if(H===L)break;H+=W,U-=P}}for(var ye=[],k=0;k<B;k++)_[k]&&_[k+1]?ye.push(l(_[k],_[k+1])):ye.push(0);return ye}function m(p,v,F,B){var _,M=v.y-p.y,D=v.x-p.x,A=f(p,v,F,Math.ceil(B/2)),b=f(p,{x:p.x-D,y:p.y-M},F,Math.ceil(B/2)),L=A.shift()+b.shift()-1;return(_=b.concat(L)).concat.apply(_,A)}function E(p,v){var F=x(p)/x(v),B=0;return v.forEach(function(_,M){B+=Math.pow(p[M]-_*F,2)}),{averageSize:F,error:B}}function g(p,v,F){try{var B=m(p,{x:-1,y:p.y},F,v.length),_=m(p,{x:p.x,y:-1},F,v.length),M={x:Math.max(0,p.x-p.y)-1,y:Math.max(0,p.y-p.x)-1},D=m(p,M,F,v.length),A={x:Math.min(F.width,p.x+p.y)+1,y:Math.min(F.height,p.y+p.x)+1},b=m(p,A,F,v.length),L=E(B,v),P=E(_,v),I=E(D,v),U=E(b,v),$=Math.sqrt(L.error*L.error+P.error*P.error+I.error*I.error+U.error*U.error),W=(L.averageSize+P.averageSize+I.averageSize+U.averageSize)/4,R=(Math.pow(L.averageSize-W,2)+Math.pow(P.averageSize-W,2)+Math.pow(I.averageSize-W,2)+Math.pow(U.averageSize-W,2))/W;return $+R}catch{return 1/0}}function h(p,v){for(var F=Math.round(v.x);p.get(F,Math.round(v.y));)F--;for(var B=Math.round(v.x);p.get(B,Math.round(v.y));)B++;for(var _=(F+B)/2,M=Math.round(v.y);p.get(Math.round(_),M);)M--;for(var D=Math.round(v.y);p.get(Math.round(_),D);)D++;var A=(M+D)/2;return{x:_,y:A}}function d(p){for(var v=[],F=[],B=[],_=[],M=function(q){for(var le=0,ye=!1,k=[0,0,0,0,0],ne=function(re){var we=p.get(re,q);if(we===ye)le++;else{k=[k[1],k[2],k[3],k[4],le],le=1,ye=we;var De=x(k)/7,ze=Math.abs(k[0]-De)<De&&Math.abs(k[1]-De)<De&&Math.abs(k[2]-3*De)<3*De&&Math.abs(k[3]-De)<De&&Math.abs(k[4]-De)<De&&!we,O=x(k.slice(-3))/3,Ie=Math.abs(k[2]-O)<O&&Math.abs(k[3]-O)<O&&Math.abs(k[4]-O)<O&&we;if(ze){var _e=re-k[3]-k[4],et=_e-k[2],Ae={startX:et,endX:_e,y:q},Ge=F.filter(function(V){return et>=V.bottom.startX&&et<=V.bottom.endX||_e>=V.bottom.startX&&et<=V.bottom.endX||et<=V.bottom.startX&&_e>=V.bottom.endX&&k[2]/(V.bottom.endX-V.bottom.startX)<a&&k[2]/(V.bottom.endX-V.bottom.startX)>s});Ge.length>0?Ge[0].bottom=Ae:F.push({top:Ae,bottom:Ae})}if(Ie){var w=re-k[4],y=w-k[3],Ae={startX:y,y:q,endX:w},Ge=_.filter(function(J){return y>=J.bottom.startX&&y<=J.bottom.endX||w>=J.bottom.startX&&y<=J.bottom.endX||y<=J.bottom.startX&&w>=J.bottom.endX&&k[2]/(J.bottom.endX-J.bottom.startX)<a&&k[2]/(J.bottom.endX-J.bottom.startX)>s});Ge.length>0?Ge[0].bottom=Ae:_.push({top:Ae,bottom:Ae})}}},se=-1;se<=p.width;se++)ne(se);v.push.apply(v,F.filter(function(re){return re.bottom.y!==q&&re.bottom.y-re.top.y>=2})),F=F.filter(function(re){return re.bottom.y===q}),B.push.apply(B,_.filter(function(re){return re.bottom.y!==q})),_=_.filter(function(re){return re.bottom.y===q})},D=0;D<=p.height;D++)M(D);v.push.apply(v,F.filter(function(q){return q.bottom.y-q.top.y>=2})),B.push.apply(B,_);var A=v.filter(function(q){return q.bottom.y-q.top.y>=2}).map(function(q){var le=(q.top.startX+q.top.endX+q.bottom.startX+q.bottom.endX)/4,ye=(q.top.y+q.bottom.y+1)/2;if(p.get(Math.round(le),Math.round(ye))){var k=[q.top.endX-q.top.startX,q.bottom.endX-q.bottom.startX,q.bottom.y-q.top.y+1],ne=x(k)/k.length,se=g({x:Math.round(le),y:Math.round(ye)},[1,1,3,1,1],p);return{score:se,x:le,y:ye,size:ne}}}).filter(function(q){return!!q}).sort(function(q,le){return q.score-le.score}).map(function(q,le,ye){if(le>o)return null;var k=ye.filter(function(se,re){return le!==re}).map(function(se){return{x:se.x,y:se.y,score:se.score+Math.pow(se.size-q.size,2)/q.size,size:se.size}}).sort(function(se,re){return se.score-re.score});if(k.length<2)return null;var ne=q.score+k[0].score+k[1].score;return{points:[q].concat(k.slice(0,2)),score:ne}}).filter(function(q){return!!q}).sort(function(q,le){return q.score-le.score});if(A.length===0)return null;var b=u(A[0].points[0],A[0].points[1],A[0].points[2]),L=b.topRight,P=b.topLeft,I=b.bottomLeft,U=C(p,B,L,P,I),$=[];U&&$.push({alignmentPattern:{x:U.alignmentPattern.x,y:U.alignmentPattern.y},bottomLeft:{x:I.x,y:I.y},dimension:U.dimension,topLeft:{x:P.x,y:P.y},topRight:{x:L.x,y:L.y}});var W=h(p,L),R=h(p,P),z=h(p,I),H=C(p,B,W,R,z);return H&&$.push({alignmentPattern:{x:H.alignmentPattern.x,y:H.alignmentPattern.y},bottomLeft:{x:z.x,y:z.y},topLeft:{x:R.x,y:R.y},topRight:{x:W.x,y:W.y},dimension:H.dimension}),$.length===0?null:$}r.locate=d;function C(p,v,F,B,_){var M,D,A;try{M=c(B,F,_,p),D=M.dimension,A=M.moduleSize}catch{return null}var b={x:F.x-B.x+_.x,y:F.y-B.y+_.y},L=(l(B,_)+l(B,F))/2/A,P=1-3/L,I={x:B.x+P*(b.x-B.x),y:B.y+P*(b.y-B.y)},U=v.map(function(W){var R=(W.top.startX+W.top.endX+W.bottom.startX+W.bottom.endX)/4,z=(W.top.y+W.bottom.y+1)/2;if(p.get(Math.floor(R),Math.floor(z))){var H=[W.top.endX-W.top.startX,W.bottom.endX-W.bottom.startX,W.bottom.y-W.top.y+1];x(H)/H.length;var q=g({x:Math.floor(R),y:Math.floor(z)},[1,1,1],p),le=q+l({x:R,y:z},I);return{x:R,y:z,score:le}}}).filter(function(W){return!!W}).sort(function(W,R){return W.score-R.score}),$=L>=15&&U.length?U[0]:I;return{alignmentPattern:$,dimension:D}}}]).default})})(NE);var hv=NE.exports;const pv=Gh(hv);function mv(){const t=oe.useRef(null),e=oe.useRef(null),[n,r]=oe.useState(null),i=tl(),o=async()=>{try{const x=await navigator.mediaDevices.getUserMedia({video:!0});t.current&&(t.current.srcObject=x)}catch(x){console.error("Impossible d'accéder à la caméra : ",x)}},s=()=>{if(e.current&&t.current){const x=e.current,u=x.getContext("2d");if(u){u.drawImage(t.current,0,0,x.width,x.height);const c=u.getImageData(0,0,x.width,x.height),f=pv(c.data,c.width,c.height);f&&r(f.data)}}},a=async()=>{try{if(n){const x=await cr.get(`${wt.baseurl}/admin/product/findby/qrcode/${n}`);console.log("Réponse de la requête GET:",x.data),console.log("ID du produit récupéré:",x.data),x.data?await l(x.data):console.error("ID du produit non trouvé dans la réponse:",x.data)}}catch(x){console.error("Une erreur s'est produite lors de la récupération du panier :",x)}},l=async x=>{try{const u=await cr.post(`${wt.baseurl}/api/order/add/${x}`);console.log(u.data),i("/cart")}catch(u){console.error("Une erreur s'est produite lors de l'ajout d'un élément au panier :",u)}};return oe.useEffect(()=>{const x=setInterval(s,1e3);return()=>clearInterval(x)},[]),K.jsxs("div",{className:"scan-container",children:[K.jsx("button",{className:"scan-button",onClick:o,children:"Ouvrir la caméra"}),K.jsxs("div",{className:"video-container",children:[K.jsx("video",{ref:t,className:"video",autoPlay:!0}),K.jsx("canvas",{ref:e,className:"canvas"})]}),n&&K.jsxs("div",{className:"qr-content",children:[K.jsx("p",{children:"Contenu du QR code :"}),K.jsx("p",{children:n}),K.jsx("button",{className:"btn btn-success",onClick:a,children:"Récupérer le contenu"})]})]})}function Ev(){const[t,e]=oe.useState([]);oe.useEffect(()=>{n()},[]);async function n(){try{const r=await cr.get(wt.baseurl+"/api/orders");e(r.data.orders)}catch(r){console.error("Une erreur s'est produite lors de la récupération des commandes :",r)}}return K.jsx(K.Fragment,{children:K.jsxs("div",{className:"container",children:[K.jsx("h1",{children:"Orders :"}),K.jsxs("div",{className:"row d-flex",children:[t.map((r,i)=>K.jsx("div",{className:"col-md-4 mb-4",children:K.jsx(q1,{to:`/order/${r.id}`,className:"card-link",children:K.jsx("div",{className:"card",children:K.jsxs("div",{className:"card-body",children:[K.jsxs("h5",{className:"card-title",children:["Order ID: ",r.id]}),K.jsxs("p",{className:"card-text",children:["Date: ",new Date(r.date).toLocaleDateString()]})]})})})},i)),K.jsx("div",{className:"",children:K.jsx("a",{className:"btn btn-primary",href:"/cart",children:"faire des achats"})})]})]})})}function gv(){const{id:t}=B1(),[e,n]=oe.useState(null),[r,i]=oe.useState(0);oe.useEffect(()=>{o()},[]);async function o(){try{const a=await cr.get(wt.baseurl+`/api/order/show/${t}`);n(a.data.order),a.data.order&&s(a.data.order)}catch(a){console.error("Une erreur s'est produite lors de la récupération de la commande :",a)}}function s(a){let l=0;a&&a.items&&a.items.forEach(x=>{l+=x.price*x.quantity}),i(l)}return K.jsxs("div",{className:"order-details-container",children:[K.jsxs("div",{className:"header",children:[K.jsx("a",{className:"btn btn-secondary",href:"/orders",children:"Retour"}),K.jsx("hr",{})]}),K.jsx("h1",{children:"Détails de la commande"}),e?K.jsxs("div",{children:[K.jsxs("p",{children:["Numéro de commande : ",e.id]}),K.jsxs("p",{children:["Nom d'utilisateur : ",e.profile.username]}),K.jsx("p",{children:"Articles :"}),K.jsx("ul",{children:e.items.map((a,l)=>K.jsxs("li",{children:[a.name," - Quantité : ",a.quantity," - Prix : $",a.price*a.quantity]},l))}),K.jsxs("p",{children:["Total : $",r]})]}):K.jsx("p",{children:"Chargement..."})]})}const Cv="163",vv=0,Df=1,Av=2,UE=1,_v=2,ir=3,Qr=0,tn=1,ar=2,Yr=0,Ao=1,Ff=2,yf=3,Sf=4,Bv=5,Ei=100,Dv=101,Fv=102,yv=103,Sv=104,Mv=200,wv=201,Tv=202,Pv=203,Mc=204,wc=205,Rv=206,bv=207,Lv=208,kv=209,Nv=210,Uv=211,Iv=212,Ov=213,zv=214,Hv=0,Vv=1,Gv=2,T0=3,Wv=4,Xv=5,jv=6,Yv=7,IE=0,qv=1,$v=2,qr=0,Kv=1,Zv=2,Qv=3,Jv=4,eA=5,tA=6,nA=7,OE=300,Ro=301,bo=302,Tc=303,Pc=304,al=306,Rc=1e3,_i=1001,bc=1002,vn=1003,rA=1004,ga=1005,Rn=1006,ql=1007,Bi=1008,$r=1009,iA=1010,oA=1011,zE=1012,HE=1013,Lo=1014,Ur=1015,P0=1016,VE=1017,GE=1018,qs=1020,sA=35902,aA=1021,lA=1022,jn=1023,xA=1024,cA=1025,_o=1026,Os=1027,uA=1028,WE=1029,dA=1030,XE=1031,jE=1033,$l=33776,Kl=33777,Zl=33778,Ql=33779,Mf=35840,wf=35841,Tf=35842,Pf=35843,YE=36196,Rf=37492,bf=37496,Lf=37808,kf=37809,Nf=37810,Uf=37811,If=37812,Of=37813,zf=37814,Hf=37815,Vf=37816,Gf=37817,Wf=37818,Xf=37819,jf=37820,Yf=37821,Jl=36492,qf=36494,$f=36495,fA=36283,Kf=36284,Zf=36285,Qf=36286,hA=3200,pA=3201,mA=0,EA=1,br="",Hn="srgb",ii="srgb-linear",Iu="display-p3",ll="display-p3-linear",R0="linear",rt="srgb",b0="rec709",L0="p3",Ii=7680,Jf=519,gA=512,CA=513,vA=514,qE=515,AA=516,_A=517,BA=518,DA=519,eh=35044,th="300 es",ur=2e3,k0=2001;class Ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let o=0,s=i.length;o<s;o++)i[o].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ex=Math.PI/180,Lc=180/Math.PI;function $s(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function FA(t,e){return(t%e+e)%e}function tx(t,e,n){return(1-n)*t+n*e}function es(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*r-s*i+e.x,this.y=o*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,r,i,o,s,a,l,x){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,o,s,a,l,x)}set(e,n,r,i,o,s,a,l,x){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=n,u[4]=o,u[5]=l,u[6]=r,u[7]=s,u[8]=x,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,o=this.elements,s=r[0],a=r[3],l=r[6],x=r[1],u=r[4],c=r[7],f=r[2],m=r[5],E=r[8],g=i[0],h=i[3],d=i[6],C=i[1],p=i[4],v=i[7],F=i[2],B=i[5],_=i[8];return o[0]=s*g+a*C+l*F,o[3]=s*h+a*p+l*B,o[6]=s*d+a*v+l*_,o[1]=x*g+u*C+c*F,o[4]=x*h+u*p+c*B,o[7]=x*d+u*v+c*_,o[2]=f*g+m*C+E*F,o[5]=f*h+m*p+E*B,o[8]=f*d+m*v+E*_,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],x=e[7],u=e[8];return n*s*u-n*a*x-r*o*u+r*a*l+i*o*x-i*s*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],x=e[7],u=e[8],c=u*s-a*x,f=a*l-u*o,m=x*o-s*l,E=n*c+r*f+i*m;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/E;return e[0]=c*g,e[1]=(i*x-u*r)*g,e[2]=(a*r-i*s)*g,e[3]=f*g,e[4]=(u*n-i*l)*g,e[5]=(i*o-a*n)*g,e[6]=m*g,e[7]=(r*l-x*n)*g,e[8]=(s*n-r*o)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,o,s,a){const l=Math.cos(o),x=Math.sin(o);return this.set(r*l,r*x,-r*(l*s+x*a)+s+e,-i*x,i*l,-i*(-x*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(nx.makeScale(e,n)),this}rotate(e){return this.premultiply(nx.makeRotation(-e)),this}translate(e,n){return this.premultiply(nx.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nx=new Ue;function $E(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function N0(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yA(){const t=N0("canvas");return t.style.display="block",t}const nh={};function SA(t){t in nh||(nh[t]=!0,console.warn(t))}const rh=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ih=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ca={[ii]:{transfer:R0,primaries:b0,toReference:t=>t,fromReference:t=>t},[Hn]:{transfer:rt,primaries:b0,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ll]:{transfer:R0,primaries:L0,toReference:t=>t.applyMatrix3(ih),fromReference:t=>t.applyMatrix3(rh)},[Iu]:{transfer:rt,primaries:L0,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ih),fromReference:t=>t.applyMatrix3(rh).convertLinearToSRGB()}},MA=new Set([ii,ll]),Ke={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!MA.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const r=Ca[e].toReference,i=Ca[n].fromReference;return i(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ca[t].primaries},getTransfer:function(t){return t===br?R0:Ca[t].transfer}};function Bo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function rx(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Oi;class wA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Oi===void 0&&(Oi=N0("canvas")),Oi.width=e.width,Oi.height=e.height;const r=Oi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Oi}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=N0("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),o=i.data;for(let s=0;s<o.length;s++)o[s]=Bo(o[s]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Bo(n[r]/255)*255):n[r]=Bo(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TA=0;class KE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=$s(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?o.push(ix(i[s].image)):o.push(ix(i[s]))}else o=ix(i);r.url=o}return n||(e.images[this.uuid]=r),r}}function ix(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?wA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PA=0;class nn extends Ho{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,r=_i,i=_i,o=Rn,s=Bi,a=jn,l=$r,x=nn.DEFAULT_ANISOTROPY,u=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PA++}),this.uuid=$s(),this.name="",this.source=new KE(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=s,this.anisotropy=x,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==OE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rc:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rc:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=OE;nn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,r=0,i=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*r+s[8]*i+s[12]*o,this.y=s[1]*n+s[5]*r+s[9]*i+s[13]*o,this.z=s[2]*n+s[6]*r+s[10]*i+s[14]*o,this.w=s[3]*n+s[7]*r+s[11]*i+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,o;const l=e.elements,x=l[0],u=l[4],c=l[8],f=l[1],m=l[5],E=l[9],g=l[2],h=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(c-g)<.01&&Math.abs(E-h)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+g)<.1&&Math.abs(E+h)<.1&&Math.abs(x+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const p=(x+1)/2,v=(m+1)/2,F=(d+1)/2,B=(u+f)/4,_=(c+g)/4,M=(E+h)/4;return p>v&&p>F?p<.01?(r=0,i=.707106781,o=.707106781):(r=Math.sqrt(p),i=B/r,o=_/r):v>F?v<.01?(r=.707106781,i=0,o=.707106781):(i=Math.sqrt(v),r=B/i,o=M/i):F<.01?(r=.707106781,i=.707106781,o=0):(o=Math.sqrt(F),r=_/o,i=M/o),this.set(r,i,o,n),this}let C=Math.sqrt((h-E)*(h-E)+(c-g)*(c-g)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(h-E)/C,this.y=(c-g)/C,this.z=(f-u)/C,this.w=Math.acos((x+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RA extends Ho{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const i={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},r);const o=new nn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);o.flipY=!1,o.generateMipmaps=r.generateMipmaps,o.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new KE(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends RA{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class ZE extends nn{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bA extends nn{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ks{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,o,s,a){let l=r[i+0],x=r[i+1],u=r[i+2],c=r[i+3];const f=o[s+0],m=o[s+1],E=o[s+2],g=o[s+3];if(a===0){e[n+0]=l,e[n+1]=x,e[n+2]=u,e[n+3]=c;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=E,e[n+3]=g;return}if(c!==g||l!==f||x!==m||u!==E){let h=1-a;const d=l*f+x*m+u*E+c*g,C=d>=0?1:-1,p=1-d*d;if(p>Number.EPSILON){const F=Math.sqrt(p),B=Math.atan2(F,d*C);h=Math.sin(h*B)/F,a=Math.sin(a*B)/F}const v=a*C;if(l=l*h+f*v,x=x*h+m*v,u=u*h+E*v,c=c*h+g*v,h===1-a){const F=1/Math.sqrt(l*l+x*x+u*u+c*c);l*=F,x*=F,u*=F,c*=F}}e[n]=l,e[n+1]=x,e[n+2]=u,e[n+3]=c}static multiplyQuaternionsFlat(e,n,r,i,o,s){const a=r[i],l=r[i+1],x=r[i+2],u=r[i+3],c=o[s],f=o[s+1],m=o[s+2],E=o[s+3];return e[n]=a*E+u*c+l*m-x*f,e[n+1]=l*E+u*f+x*c-a*m,e[n+2]=x*E+u*m+a*f-l*c,e[n+3]=u*E-a*c-l*f-x*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,x=a(r/2),u=a(i/2),c=a(o/2),f=l(r/2),m=l(i/2),E=l(o/2);switch(s){case"XYZ":this._x=f*u*c+x*m*E,this._y=x*m*c-f*u*E,this._z=x*u*E+f*m*c,this._w=x*u*c-f*m*E;break;case"YXZ":this._x=f*u*c+x*m*E,this._y=x*m*c-f*u*E,this._z=x*u*E-f*m*c,this._w=x*u*c+f*m*E;break;case"ZXY":this._x=f*u*c-x*m*E,this._y=x*m*c+f*u*E,this._z=x*u*E+f*m*c,this._w=x*u*c-f*m*E;break;case"ZYX":this._x=f*u*c-x*m*E,this._y=x*m*c+f*u*E,this._z=x*u*E-f*m*c,this._w=x*u*c+f*m*E;break;case"YZX":this._x=f*u*c+x*m*E,this._y=x*m*c+f*u*E,this._z=x*u*E-f*m*c,this._w=x*u*c-f*m*E;break;case"XZY":this._x=f*u*c-x*m*E,this._y=x*m*c-f*u*E,this._z=x*u*E+f*m*c,this._w=x*u*c+f*m*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],o=n[8],s=n[1],a=n[5],l=n[9],x=n[2],u=n[6],c=n[10],f=r+a+c;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-x)*m,this._z=(s-i)*m}else if(r>a&&r>c){const m=2*Math.sqrt(1+r-a-c);this._w=(u-l)/m,this._x=.25*m,this._y=(i+s)/m,this._z=(o+x)/m}else if(a>c){const m=2*Math.sqrt(1+a-r-c);this._w=(o-x)/m,this._x=(i+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+c-r-a);this._w=(s-i)/m,this._x=(o+x)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,o=e._z,s=e._w,a=n._x,l=n._y,x=n._z,u=n._w;return this._x=r*u+s*a+i*x-o*l,this._y=i*u+s*l+o*a-r*x,this._z=o*u+s*x+r*l-i*a,this._w=s*u-r*a-i*l-o*x,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,o=this._z,s=this._w;let a=s*e._w+r*e._x+i*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=r,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*r+n*this._x,this._y=m*i+n*this._y,this._z=m*o+n*this._z,this.normalize(),this}const x=Math.sqrt(l),u=Math.atan2(x,a),c=Math.sin((1-n)*u)/x,f=Math.sin(n*u)/x;return this._w=s*c+this._w*f,this._x=r*c+this._x*f,this._y=i*c+this._y*f,this._z=o*c+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(oh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(oh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6]*i,this.y=o[1]*n+o[4]*r+o[7]*i,this.z=o[2]*n+o[5]*r+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,o=e.elements,s=1/(o[3]*n+o[7]*r+o[11]*i+o[15]);return this.x=(o[0]*n+o[4]*r+o[8]*i+o[12])*s,this.y=(o[1]*n+o[5]*r+o[9]*i+o[13])*s,this.z=(o[2]*n+o[6]*r+o[10]*i+o[14])*s,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,o=e.x,s=e.y,a=e.z,l=e.w,x=2*(s*i-a*r),u=2*(a*n-o*i),c=2*(o*r-s*n);return this.x=n+l*x+s*c-a*u,this.y=r+l*u+a*x-o*c,this.z=i+l*c+o*u-s*x,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i,this.y=o[1]*n+o[5]*r+o[9]*i,this.z=o[2]*n+o[6]*r+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=i*l-o*a,this.y=o*s-r*l,this.z=r*a-i*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ox.copy(this).projectOnVector(e),this.sub(ox)}reflect(e){return this.sub(ox.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ox=new j,oh=new Ks;class Zs{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,yn):yn.fromBufferAttribute(o,s),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),va.copy(r.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const i=e.children;for(let o=0,s=i.length;o<s;o++)this.expandByObject(i[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Aa.subVectors(this.max,ts),zi.subVectors(e.a,ts),Hi.subVectors(e.b,ts),Vi.subVectors(e.c,ts),Br.subVectors(Hi,zi),Dr.subVectors(Vi,Hi),ai.subVectors(zi,Vi);let n=[0,-Br.z,Br.y,0,-Dr.z,Dr.y,0,-ai.z,ai.y,Br.z,0,-Br.x,Dr.z,0,-Dr.x,ai.z,0,-ai.x,-Br.y,Br.x,0,-Dr.y,Dr.x,0,-ai.y,ai.x,0];return!sx(n,zi,Hi,Vi,Aa)||(n=[1,0,0,0,1,0,0,0,1],!sx(n,zi,Hi,Vi,Aa))?!1:(_a.crossVectors(Br,Dr),n=[_a.x,_a.y,_a.z],sx(n,zi,Hi,Vi,Aa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new j,new j,new j,new j,new j,new j,new j,new j],yn=new j,va=new Zs,zi=new j,Hi=new j,Vi=new j,Br=new j,Dr=new j,ai=new j,ts=new j,Aa=new j,_a=new j,li=new j;function sx(t,e,n,r,i){for(let o=0,s=t.length-3;o<=s;o+=3){li.fromArray(t,o);const a=i.x*Math.abs(li.x)+i.y*Math.abs(li.y)+i.z*Math.abs(li.z),l=e.dot(li),x=n.dot(li),u=r.dot(li);if(Math.max(-Math.max(l,x,u),Math.min(l,x,u))>a)return!1}return!0}const LA=new Zs,ns=new j,ax=new j;class Ou{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):LA.setFromPoints(e).getCenter(r);let i=0;for(let o=0,s=e.length;o<s;o++)i=Math.max(i,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const n=ns.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(ns,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ax.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(ax)),this.expandByPoint(ns.copy(e.center).sub(ax))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const er=new j,lx=new j,Ba=new j,Fr=new j,xx=new j,Da=new j,cx=new j;class kA{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=er.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,n),er.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){lx.copy(e).add(n).multiplyScalar(.5),Ba.copy(n).sub(e).normalize(),Fr.copy(this.origin).sub(lx);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ba),a=Fr.dot(this.direction),l=-Fr.dot(Ba),x=Fr.lengthSq(),u=Math.abs(1-s*s);let c,f,m,E;if(u>0)if(c=s*l-a,f=s*a-l,E=o*u,c>=0)if(f>=-E)if(f<=E){const g=1/u;c*=g,f*=g,m=c*(c+s*f+2*a)+f*(s*c+f+2*l)+x}else f=o,c=Math.max(0,-(s*f+a)),m=-c*c+f*(f+2*l)+x;else f=-o,c=Math.max(0,-(s*f+a)),m=-c*c+f*(f+2*l)+x;else f<=-E?(c=Math.max(0,-(-s*o+a)),f=c>0?-o:Math.min(Math.max(-o,-l),o),m=-c*c+f*(f+2*l)+x):f<=E?(c=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+x):(c=Math.max(0,-(s*o+a)),f=c>0?o:Math.min(Math.max(-o,-l),o),m=-c*c+f*(f+2*l)+x);else f=s>0?-o:o,c=Math.max(0,-(s*f+a)),m=-c*c+f*(f+2*l)+x;return r&&r.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(lx).addScaledVector(Ba,f),m}intersectSphere(e,n){er.subVectors(e.center,this.origin);const r=er.dot(this.direction),i=er.dot(er)-r*r,o=e.radius*e.radius;if(i>o)return null;const s=Math.sqrt(o-i),a=r-s,l=r+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,o,s,a,l;const x=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,f=this.origin;return x>=0?(r=(e.min.x-f.x)*x,i=(e.max.x-f.x)*x):(r=(e.max.x-f.x)*x,i=(e.min.x-f.x)*x),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),r>s||o>i||((o>r||isNaN(r))&&(r=o),(s<i||isNaN(i))&&(i=s),c>=0?(a=(e.min.z-f.z)*c,l=(e.max.z-f.z)*c):(a=(e.max.z-f.z)*c,l=(e.min.z-f.z)*c),r>l||a>i)||((a>r||r!==r)&&(r=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,n,r,i,o){xx.subVectors(n,e),Da.subVectors(r,e),cx.crossVectors(xx,Da);let s=this.direction.dot(cx),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Fr.subVectors(this.origin,e);const l=a*this.direction.dot(Da.crossVectors(Fr,Da));if(l<0)return null;const x=a*this.direction.dot(xx.cross(Fr));if(x<0||l+x>s)return null;const u=-a*Fr.dot(cx);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,i,o,s,a,l,x,u,c,f,m,E,g,h){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,o,s,a,l,x,u,c,f,m,E,g,h)}set(e,n,r,i,o,s,a,l,x,u,c,f,m,E,g,h){const d=this.elements;return d[0]=e,d[4]=n,d[8]=r,d[12]=i,d[1]=o,d[5]=s,d[9]=a,d[13]=l,d[2]=x,d[6]=u,d[10]=c,d[14]=f,d[3]=m,d[7]=E,d[11]=g,d[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/Gi.setFromMatrixColumn(e,0).length(),o=1/Gi.setFromMatrixColumn(e,1).length(),s=1/Gi.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=0,n[8]=r[8]*s,n[9]=r[9]*s,n[10]=r[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,o=e.z,s=Math.cos(r),a=Math.sin(r),l=Math.cos(i),x=Math.sin(i),u=Math.cos(o),c=Math.sin(o);if(e.order==="XYZ"){const f=s*u,m=s*c,E=a*u,g=a*c;n[0]=l*u,n[4]=-l*c,n[8]=x,n[1]=m+E*x,n[5]=f-g*x,n[9]=-a*l,n[2]=g-f*x,n[6]=E+m*x,n[10]=s*l}else if(e.order==="YXZ"){const f=l*u,m=l*c,E=x*u,g=x*c;n[0]=f+g*a,n[4]=E*a-m,n[8]=s*x,n[1]=s*c,n[5]=s*u,n[9]=-a,n[2]=m*a-E,n[6]=g+f*a,n[10]=s*l}else if(e.order==="ZXY"){const f=l*u,m=l*c,E=x*u,g=x*c;n[0]=f-g*a,n[4]=-s*c,n[8]=E+m*a,n[1]=m+E*a,n[5]=s*u,n[9]=g-f*a,n[2]=-s*x,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const f=s*u,m=s*c,E=a*u,g=a*c;n[0]=l*u,n[4]=E*x-m,n[8]=f*x+g,n[1]=l*c,n[5]=g*x+f,n[9]=m*x-E,n[2]=-x,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*x,E=a*l,g=a*x;n[0]=l*u,n[4]=g-f*c,n[8]=E*c+m,n[1]=c,n[5]=s*u,n[9]=-a*u,n[2]=-x*u,n[6]=m*c+E,n[10]=f-g*c}else if(e.order==="XZY"){const f=s*l,m=s*x,E=a*l,g=a*x;n[0]=l*u,n[4]=-c,n[8]=x*u,n[1]=f*c+g,n[5]=s*u,n[9]=m*c-E,n[2]=E*c-m,n[6]=a*u,n[10]=g*c+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NA,e,UA)}lookAt(e,n,r){const i=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),yr.crossVectors(r,on),yr.lengthSq()===0&&(Math.abs(r.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),yr.crossVectors(r,on)),yr.normalize(),Fa.crossVectors(on,yr),i[0]=yr.x,i[4]=Fa.x,i[8]=on.x,i[1]=yr.y,i[5]=Fa.y,i[9]=on.y,i[2]=yr.z,i[6]=Fa.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,o=this.elements,s=r[0],a=r[4],l=r[8],x=r[12],u=r[1],c=r[5],f=r[9],m=r[13],E=r[2],g=r[6],h=r[10],d=r[14],C=r[3],p=r[7],v=r[11],F=r[15],B=i[0],_=i[4],M=i[8],D=i[12],A=i[1],b=i[5],L=i[9],P=i[13],I=i[2],U=i[6],$=i[10],W=i[14],R=i[3],z=i[7],H=i[11],q=i[15];return o[0]=s*B+a*A+l*I+x*R,o[4]=s*_+a*b+l*U+x*z,o[8]=s*M+a*L+l*$+x*H,o[12]=s*D+a*P+l*W+x*q,o[1]=u*B+c*A+f*I+m*R,o[5]=u*_+c*b+f*U+m*z,o[9]=u*M+c*L+f*$+m*H,o[13]=u*D+c*P+f*W+m*q,o[2]=E*B+g*A+h*I+d*R,o[6]=E*_+g*b+h*U+d*z,o[10]=E*M+g*L+h*$+d*H,o[14]=E*D+g*P+h*W+d*q,o[3]=C*B+p*A+v*I+F*R,o[7]=C*_+p*b+v*U+F*z,o[11]=C*M+p*L+v*$+F*H,o[15]=C*D+p*P+v*W+F*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],o=e[12],s=e[1],a=e[5],l=e[9],x=e[13],u=e[2],c=e[6],f=e[10],m=e[14],E=e[3],g=e[7],h=e[11],d=e[15];return E*(+o*l*c-i*x*c-o*a*f+r*x*f+i*a*m-r*l*m)+g*(+n*l*m-n*x*f+o*s*f-i*s*m+i*x*u-o*l*u)+h*(+n*x*c-n*a*m-o*s*c+r*s*m+o*a*u-r*x*u)+d*(-i*a*u-n*l*c+n*a*f+i*s*c-r*s*f+r*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],x=e[7],u=e[8],c=e[9],f=e[10],m=e[11],E=e[12],g=e[13],h=e[14],d=e[15],C=c*h*x-g*f*x+g*l*m-a*h*m-c*l*d+a*f*d,p=E*f*x-u*h*x-E*l*m+s*h*m+u*l*d-s*f*d,v=u*g*x-E*c*x+E*a*m-s*g*m-u*a*d+s*c*d,F=E*c*l-u*g*l-E*a*f+s*g*f+u*a*h-s*c*h,B=n*C+r*p+i*v+o*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/B;return e[0]=C*_,e[1]=(g*f*o-c*h*o-g*i*m+r*h*m+c*i*d-r*f*d)*_,e[2]=(a*h*o-g*l*o+g*i*x-r*h*x-a*i*d+r*l*d)*_,e[3]=(c*l*o-a*f*o-c*i*x+r*f*x+a*i*m-r*l*m)*_,e[4]=p*_,e[5]=(u*h*o-E*f*o+E*i*m-n*h*m-u*i*d+n*f*d)*_,e[6]=(E*l*o-s*h*o-E*i*x+n*h*x+s*i*d-n*l*d)*_,e[7]=(s*f*o-u*l*o+u*i*x-n*f*x-s*i*m+n*l*m)*_,e[8]=v*_,e[9]=(E*c*o-u*g*o-E*r*m+n*g*m+u*r*d-n*c*d)*_,e[10]=(s*g*o-E*a*o+E*r*x-n*g*x-s*r*d+n*a*d)*_,e[11]=(u*a*o-s*c*o-u*r*x+n*c*x+s*r*m-n*a*m)*_,e[12]=F*_,e[13]=(u*g*i-E*c*i+E*r*f-n*g*f-u*r*h+n*c*h)*_,e[14]=(E*a*i-s*g*i-E*r*l+n*g*l+s*r*h-n*a*h)*_,e[15]=(s*c*i-u*a*i+u*r*l-n*c*l-s*r*f+n*a*f)*_,this}scale(e){const n=this.elements,r=e.x,i=e.y,o=e.z;return n[0]*=r,n[4]*=i,n[8]*=o,n[1]*=r,n[5]*=i,n[9]*=o,n[2]*=r,n[6]*=i,n[10]*=o,n[3]*=r,n[7]*=i,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),o=1-r,s=e.x,a=e.y,l=e.z,x=o*s,u=o*a;return this.set(x*s+r,x*a-i*l,x*l+i*a,0,x*a+i*l,u*a+r,u*l-i*s,0,x*l-i*a,u*l+i*s,o*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,o,s){return this.set(1,r,o,0,e,1,s,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,x=o+o,u=s+s,c=a+a,f=o*x,m=o*u,E=o*c,g=s*u,h=s*c,d=a*c,C=l*x,p=l*u,v=l*c,F=r.x,B=r.y,_=r.z;return i[0]=(1-(g+d))*F,i[1]=(m+v)*F,i[2]=(E-p)*F,i[3]=0,i[4]=(m-v)*B,i[5]=(1-(f+d))*B,i[6]=(h+C)*B,i[7]=0,i[8]=(E+p)*_,i[9]=(h-C)*_,i[10]=(1-(f+g))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let o=Gi.set(i[0],i[1],i[2]).length();const s=Gi.set(i[4],i[5],i[6]).length(),a=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);const x=1/o,u=1/s,c=1/a;return Sn.elements[0]*=x,Sn.elements[1]*=x,Sn.elements[2]*=x,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=c,Sn.elements[9]*=c,Sn.elements[10]*=c,n.setFromRotationMatrix(Sn),r.x=o,r.y=s,r.z=a,this}makePerspective(e,n,r,i,o,s,a=ur){const l=this.elements,x=2*o/(n-e),u=2*o/(r-i),c=(n+e)/(n-e),f=(r+i)/(r-i);let m,E;if(a===ur)m=-(s+o)/(s-o),E=-2*s*o/(s-o);else if(a===k0)m=-s/(s-o),E=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=x,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,i,o,s,a=ur){const l=this.elements,x=1/(n-e),u=1/(r-i),c=1/(s-o),f=(n+e)*x,m=(r+i)*u;let E,g;if(a===ur)E=(s+o)*c,g=-2*c;else if(a===k0)E=o*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*x,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Gi=new j,Sn=new Bt,NA=new j(0,0,0),UA=new j(1,1,1),yr=new j,Fa=new j,on=new j,sh=new Bt,ah=new Ks;class gr{constructor(e=0,n=0,r=0,i=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,o=i[0],s=i[4],a=i[8],l=i[1],x=i[5],u=i[9],c=i[2],f=i[6],m=i[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,x),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,x)):(this._y=Math.atan2(-c,o),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,m),this._z=Math.atan2(-s,x)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,x));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,x),this._y=Math.atan2(-c,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,x),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sh,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gr.DEFAULT_ORDER="XYZ";class QE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IA=0;const lh=new j,Wi=new Ks,tr=new Bt,ya=new j,rs=new j,OA=new j,zA=new Ks,xh=new j(1,0,0),ch=new j(0,1,0),uh=new j(0,0,1),dh={type:"added"},HA={type:"removed"},Xi={type:"childadded",child:null},ux={type:"childremoved",child:null};class cn extends Ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IA++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new j,n=new gr,r=new Ks,i=new j(1,1,1);function o(){r.setFromEuler(n,!1)}function s(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Ue}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new QE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wi.setFromAxisAngle(e,n),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,n){return Wi.setFromAxisAngle(e,n),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,n){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ya.copy(e):ya.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(rs,ya,this.up):tr.lookAt(ya,rs,this.up),this.quaternion.setFromRotationMatrix(tr),i&&(tr.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(tr),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dh),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(HA),ux.child=e,this.dispatchEvent(ux),ux.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dh),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let o=0,s=i.length;o<s;o++)i[o].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,OA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,zA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++){const o=n[r];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const i=this.children;for(let o=0,s=i.length;o<s;o++){const a=i[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let x=0,u=l.length;x<u;x++){const c=l[x];o(e.shapes,c)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,x=this.material.length;l<x;l++)a.push(o(e.materials,this.material[l]));i.material=a}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),x=s(e.textures),u=s(e.images),c=s(e.shapes),f=s(e.skeletons),m=s(e.animations),E=s(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),x.length>0&&(r.textures=x),u.length>0&&(r.images=u),c.length>0&&(r.shapes=c),f.length>0&&(r.skeletons=f),m.length>0&&(r.animations=m),E.length>0&&(r.nodes=E)}return r.object=i,r;function s(a){const l=[];for(const x in a){const u=a[x];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}cn.DEFAULT_UP=new j(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new j,nr=new j,dx=new j,rr=new j,ji=new j,Yi=new j,fh=new j,fx=new j,hx=new j,px=new j;class Wn{constructor(e=new j,n=new j,r=new j){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),Mn.subVectors(e,n),i.cross(Mn);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,n,r,i,o){Mn.subVectors(i,n),nr.subVectors(r,n),dx.subVectors(e,n);const s=Mn.dot(Mn),a=Mn.dot(nr),l=Mn.dot(dx),x=nr.dot(nr),u=nr.dot(dx),c=s*x-a*a;if(c===0)return o.set(0,0,0),null;const f=1/c,m=(x*l-a*u)*f,E=(s*u-a*l)*f;return o.set(1-m-E,E,m)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,n,r,i,o,s,a,l){return this.getBarycoord(e,n,r,i,rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,rr.x),l.addScaledVector(s,rr.y),l.addScaledVector(a,rr.z),l)}static isFrontFacing(e,n,r,i){return Mn.subVectors(r,n),nr.subVectors(e,n),Mn.cross(nr).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Mn.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,i,o){return Wn.getInterpolation(e,this.a,this.b,this.c,n,r,i,o)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,o=this.c;let s,a;ji.subVectors(i,r),Yi.subVectors(o,r),fx.subVectors(e,r);const l=ji.dot(fx),x=Yi.dot(fx);if(l<=0&&x<=0)return n.copy(r);hx.subVectors(e,i);const u=ji.dot(hx),c=Yi.dot(hx);if(u>=0&&c<=u)return n.copy(i);const f=l*c-u*x;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(r).addScaledVector(ji,s);px.subVectors(e,o);const m=ji.dot(px),E=Yi.dot(px);if(E>=0&&m<=E)return n.copy(o);const g=m*x-l*E;if(g<=0&&x>=0&&E<=0)return a=x/(x-E),n.copy(r).addScaledVector(Yi,a);const h=u*E-m*c;if(h<=0&&c-u>=0&&m-E>=0)return fh.subVectors(o,i),a=(c-u)/(c-u+(m-E)),n.copy(i).addScaledVector(fh,a);const d=1/(h+g+f);return s=g*d,a=f*d,n.copy(r).addScaledVector(ji,s).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const JE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function mx(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ke.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=Ke.workingColorSpace){if(e=FA(e,1),n=Kt(n,0,1),r=Kt(r,0,1),n===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+n):r+n-r*n,s=2*r-o;this.r=mx(s,o,e+1/3),this.g=mx(s,o,e),this.b=mx(s,o,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,n=Hn){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const r=JE[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bo(e.r),this.g=Bo(e.g),this.b=Bo(e.b),this}copyLinearToSRGB(e){return this.r=rx(e.r),this.g=rx(e.g),this.b=rx(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Ke.fromWorkingColorSpace(zt.copy(this),e),Math.round(Kt(zt.r*255,0,255))*65536+Math.round(Kt(zt.g*255,0,255))*256+Math.round(Kt(zt.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(zt.copy(this),n);const r=zt.r,i=zt.g,o=zt.b,s=Math.max(r,i,o),a=Math.min(r,i,o);let l,x;const u=(a+s)/2;if(a===s)l=0,x=0;else{const c=s-a;switch(x=u<=.5?c/(s+a):c/(2-s-a),s){case r:l=(i-o)/c+(i<o?6:0);break;case i:l=(o-r)/c+2;break;case o:l=(r-i)/c+4;break}l/=6}return e.h=l,e.s=x,e.l=u,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Hn){Ke.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,r=zt.g,i=zt.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+n,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Sr),e.getHSL(Sa);const r=tx(Sr.h,Sa.h,n),i=tx(Sr.s,Sa.s,n),o=tx(Sr.l,Sa.l,n);return this.setHSL(r,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,o=e.elements;return this.r=o[0]*n+o[3]*r+o[6]*i,this.g=o[1]*n+o[4]*r+o[7]*i,this.b=o[2]*n+o[5]*r+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ze;Ze.NAMES=JE;let VA=0;class xl extends Ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VA++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=Ao,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=wc,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=T0,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ao&&(r.blending=this.blending),this.side!==Qr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Mc&&(r.blendSrc=this.blendSrc),this.blendDst!==wc&&(r.blendDst=this.blendDst),this.blendEquation!==Ei&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==T0&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jf&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=i(e.textures),s=i(e.images);o.length>0&&(r.textures=o),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let o=0;o!==i;++o)r[o]=n[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zu extends xl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=IE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new j,Ma=new je;class Kn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=eh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ur,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return SA("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Ma.fromBufferAttribute(this,n),Ma.applyMatrix3(e),this.setXY(n,Ma.x,Ma.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix3(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix4(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)gt.fromBufferAttribute(this,n),gt.applyNormalMatrix(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)gt.fromBufferAttribute(this,n),gt.transformDirection(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=es(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=qt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=es(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=es(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=es(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=es(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),r=qt(r,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,o){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),r=qt(r,this.array),i=qt(i,this.array),o=qt(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),e}}class e9 extends Kn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class t9 extends Kn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class yi extends Kn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let GA=0;const pn=new Bt,Ex=new cn,qi=new j,sn=new Zs,is=new Zs,St=new j;class Ni extends Ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GA++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($E(e)?t9:e9)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new Ue().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,n,r){return pn.makeTranslation(e,n,r),this.applyMatrix4(pn),this}scale(e,n,r){return pn.makeScale(e,n,r),this.applyMatrix4(pn),this}lookAt(e){return Ex.lookAt(e),Ex.updateMatrix(),this.applyMatrix4(Ex.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const n=[];for(let r=0,i=e.length;r<i;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new yi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const o=n[r];sn.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ou);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];is.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(sn.min,is.min),sn.expandByPoint(St),St.addVectors(sn.max,is.max),sn.expandByPoint(St)):(sn.expandByPoint(is.min),sn.expandByPoint(is.max))}sn.getCenter(r);let i=0;for(let o=0,s=e.count;o<s;o++)St.fromBufferAttribute(e,o),i=Math.max(i,r.distanceToSquared(St));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let x=0,u=a.count;x<u;x++)St.fromBufferAttribute(a,x),l&&(qi.fromBufferAttribute(e,x),St.add(qi)),i=Math.max(i,r.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,i=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let M=0;M<r.count;M++)a[M]=new j,l[M]=new j;const x=new j,u=new j,c=new j,f=new je,m=new je,E=new je,g=new j,h=new j;function d(M,D,A){x.fromBufferAttribute(r,M),u.fromBufferAttribute(r,D),c.fromBufferAttribute(r,A),f.fromBufferAttribute(o,M),m.fromBufferAttribute(o,D),E.fromBufferAttribute(o,A),u.sub(x),c.sub(x),m.sub(f),E.sub(f);const b=1/(m.x*E.y-E.x*m.y);isFinite(b)&&(g.copy(u).multiplyScalar(E.y).addScaledVector(c,-m.y).multiplyScalar(b),h.copy(c).multiplyScalar(m.x).addScaledVector(u,-E.x).multiplyScalar(b),a[M].add(g),a[D].add(g),a[A].add(g),l[M].add(h),l[D].add(h),l[A].add(h))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let M=0,D=C.length;M<D;++M){const A=C[M],b=A.start,L=A.count;for(let P=b,I=b+L;P<I;P+=3)d(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const p=new j,v=new j,F=new j,B=new j;function _(M){F.fromBufferAttribute(i,M),B.copy(F);const D=a[M];p.copy(D),p.sub(F.multiplyScalar(F.dot(D))).normalize(),v.crossVectors(B,D);const b=v.dot(l[M])<0?-1:1;s.setXYZW(M,p.x,p.y,p.z,b)}for(let M=0,D=C.length;M<D;++M){const A=C[M],b=A.start,L=A.count;for(let P=b,I=b+L;P<I;P+=3)_(e.getX(P+0)),_(e.getX(P+1)),_(e.getX(P+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let f=0,m=r.count;f<m;f++)r.setXYZ(f,0,0,0);const i=new j,o=new j,s=new j,a=new j,l=new j,x=new j,u=new j,c=new j;if(e)for(let f=0,m=e.count;f<m;f+=3){const E=e.getX(f+0),g=e.getX(f+1),h=e.getX(f+2);i.fromBufferAttribute(n,E),o.fromBufferAttribute(n,g),s.fromBufferAttribute(n,h),u.subVectors(s,o),c.subVectors(i,o),u.cross(c),a.fromBufferAttribute(r,E),l.fromBufferAttribute(r,g),x.fromBufferAttribute(r,h),a.add(u),l.add(u),x.add(u),r.setXYZ(E,a.x,a.y,a.z),r.setXYZ(g,l.x,l.y,l.z),r.setXYZ(h,x.x,x.y,x.z)}else for(let f=0,m=n.count;f<m;f+=3)i.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),u.subVectors(s,o),c.subVectors(i,o),u.cross(c),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)St.fromBufferAttribute(e,n),St.normalize(),e.setXYZ(n,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const x=a.array,u=a.itemSize,c=a.normalized,f=new x.constructor(l.length*u);let m=0,E=0;for(let g=0,h=l.length;g<h;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let d=0;d<u;d++)f[E++]=x[m++]}return new Kn(f,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ni,r=this.index.array,i=this.attributes;for(const a in i){const l=i[a],x=e(l,r);n.setAttribute(a,x)}const o=this.morphAttributes;for(const a in o){const l=[],x=o[a];for(let u=0,c=x.length;u<c;u++){const f=x[u],m=e(f,r);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const x=s[a];n.addGroup(x.start,x.count,x.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const x in l)l[x]!==void 0&&(e[x]=l[x]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const x=r[l];e.data.attributes[l]=x.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const x=this.morphAttributes[l],u=[];for(let c=0,f=x.length;c<f;c++){const m=x[c];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const i=e.attributes;for(const x in i){const u=i[x];this.setAttribute(x,u.clone(n))}const o=e.morphAttributes;for(const x in o){const u=[],c=o[x];for(let f=0,m=c.length;f<m;f++)u.push(c[f].clone(n));this.morphAttributes[x]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let x=0,u=s.length;x<u;x++){const c=s[x];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hh=new Bt,xi=new kA,wa=new Ou,ph=new j,$i=new j,Ki=new j,Zi=new j,gx=new j,Ta=new j,Pa=new je,Ra=new je,ba=new je,mh=new j,Eh=new j,gh=new j,La=new j,ka=new j;class Yn extends cn{constructor(e=new Ni,n=new zu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,o=r.morphAttributes.position,s=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(o&&a){Ta.set(0,0,0);for(let l=0,x=o.length;l<x;l++){const u=a[l],c=o[l];u!==0&&(gx.fromBufferAttribute(c,e),s?Ta.addScaledVector(gx,u):Ta.addScaledVector(gx.sub(n),u))}n.add(Ta)}return n}raycast(e,n){const r=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wa.copy(r.boundingSphere),wa.applyMatrix4(o),xi.copy(e.ray).recast(e.near),!(wa.containsPoint(xi.origin)===!1&&(xi.intersectSphere(wa,ph)===null||xi.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(hh.copy(o).invert(),xi.copy(e.ray).applyMatrix4(hh),!(r.boundingBox!==null&&xi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,xi)))}_computeIntersections(e,n,r){let i;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,x=o.attributes.uv,u=o.attributes.uv1,c=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let E=0,g=f.length;E<g;E++){const h=f[E],d=s[h.materialIndex],C=Math.max(h.start,m.start),p=Math.min(a.count,Math.min(h.start+h.count,m.start+m.count));for(let v=C,F=p;v<F;v+=3){const B=a.getX(v),_=a.getX(v+1),M=a.getX(v+2);i=Na(this,d,e,r,x,u,c,B,_,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=h.materialIndex,n.push(i))}}else{const E=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let h=E,d=g;h<d;h+=3){const C=a.getX(h),p=a.getX(h+1),v=a.getX(h+2);i=Na(this,s,e,r,x,u,c,C,p,v),i&&(i.faceIndex=Math.floor(h/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let E=0,g=f.length;E<g;E++){const h=f[E],d=s[h.materialIndex],C=Math.max(h.start,m.start),p=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let v=C,F=p;v<F;v+=3){const B=v,_=v+1,M=v+2;i=Na(this,d,e,r,x,u,c,B,_,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=h.materialIndex,n.push(i))}}else{const E=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let h=E,d=g;h<d;h+=3){const C=h,p=h+1,v=h+2;i=Na(this,s,e,r,x,u,c,C,p,v),i&&(i.faceIndex=Math.floor(h/3),n.push(i))}}}}function WA(t,e,n,r,i,o,s,a){let l;if(e.side===tn?l=r.intersectTriangle(s,o,i,!0,a):l=r.intersectTriangle(i,o,s,e.side===Qr,a),l===null)return null;ka.copy(a),ka.applyMatrix4(t.matrixWorld);const x=n.ray.origin.distanceTo(ka);return x<n.near||x>n.far?null:{distance:x,point:ka.clone(),object:t}}function Na(t,e,n,r,i,o,s,a,l,x){t.getVertexPosition(a,$i),t.getVertexPosition(l,Ki),t.getVertexPosition(x,Zi);const u=WA(t,e,n,r,$i,Ki,Zi,La);if(u){i&&(Pa.fromBufferAttribute(i,a),Ra.fromBufferAttribute(i,l),ba.fromBufferAttribute(i,x),u.uv=Wn.getInterpolation(La,$i,Ki,Zi,Pa,Ra,ba,new je)),o&&(Pa.fromBufferAttribute(o,a),Ra.fromBufferAttribute(o,l),ba.fromBufferAttribute(o,x),u.uv1=Wn.getInterpolation(La,$i,Ki,Zi,Pa,Ra,ba,new je)),s&&(mh.fromBufferAttribute(s,a),Eh.fromBufferAttribute(s,l),gh.fromBufferAttribute(s,x),u.normal=Wn.getInterpolation(La,$i,Ki,Zi,mh,Eh,gh,new j),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const c={a,b:l,c:x,normal:new j,materialIndex:0};Wn.getNormal($i,Ki,Zi,c.normal),u.face=c}return u}class Vo extends Ni{constructor(e=1,n=1,r=1,i=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:o,depthSegments:s};const a=this;i=Math.floor(i),o=Math.floor(o),s=Math.floor(s);const l=[],x=[],u=[],c=[];let f=0,m=0;E("z","y","x",-1,-1,r,n,e,s,o,0),E("z","y","x",1,-1,r,n,-e,s,o,1),E("x","z","y",1,1,e,r,n,i,s,2),E("x","z","y",1,-1,e,r,-n,i,s,3),E("x","y","z",1,-1,e,n,r,i,o,4),E("x","y","z",-1,-1,e,n,-r,i,o,5),this.setIndex(l),this.setAttribute("position",new yi(x,3)),this.setAttribute("normal",new yi(u,3)),this.setAttribute("uv",new yi(c,2));function E(g,h,d,C,p,v,F,B,_,M,D){const A=v/_,b=F/M,L=v/2,P=F/2,I=B/2,U=_+1,$=M+1;let W=0,R=0;const z=new j;for(let H=0;H<$;H++){const q=H*b-P;for(let le=0;le<U;le++){const ye=le*A-L;z[g]=ye*C,z[h]=q*p,z[d]=I,x.push(z.x,z.y,z.z),z[g]=0,z[h]=0,z[d]=B>0?1:-1,u.push(z.x,z.y,z.z),c.push(le/_),c.push(1-H/M),W+=1}}for(let H=0;H<M;H++)for(let q=0;q<_;q++){const le=f+q+U*H,ye=f+q+U*(H+1),k=f+(q+1)+U*(H+1),ne=f+(q+1)+U*H;l.push(le,ye,ne),l.push(ye,k,ne),R+=6}a.addGroup(m,R,D),m+=R,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ko(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const r=ko(t[n]);for(const i in r)e[i]=r[i]}return e}function XA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function n9(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const jA={clone:ko,merge:Gt},YA=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,qA=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Jr extends xl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YA,this.fragmentShader=qA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ko(e.uniforms),this.uniformsGroups=XA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?n.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[i]={type:"m4",value:s.toArray()}:n.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class r9 extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=ur}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new j,Ch=new je,vh=new je;class gn extends r9{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ex*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lc*2*Math.atan(Math.tan(ex*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,n){return this.getViewBounds(e,Ch,vh),n.subVectors(vh,Ch)}setViewOffset(e,n,r,i,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ex*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,o=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,x=s.fullHeight;o+=s.offsetX*i/l,n-=s.offsetY*r/x,i*=s.width/l,r*=s.height/x}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qi=-90,Ji=1;class $A extends cn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new gn(Qi,Ji,e,n);i.layers=this.layers,this.add(i);const o=new gn(Qi,Ji,e,n);o.layers=this.layers,this.add(o);const s=new gn(Qi,Ji,e,n);s.layers=this.layers,this.add(s);const a=new gn(Qi,Ji,e,n);a.layers=this.layers,this.add(a);const l=new gn(Qi,Ji,e,n);l.layers=this.layers,this.add(l);const x=new gn(Qi,Ji,e,n);x.layers=this.layers,this.add(x)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,o,s,a,l]=n;for(const x of n)this.remove(x);if(e===ur)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===k0)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const x of n)this.add(x),x.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,x,u]=this.children,c=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const g=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,o),e.setRenderTarget(r,1,i),e.render(n,s),e.setRenderTarget(r,2,i),e.render(n,a),e.setRenderTarget(r,3,i),e.render(n,l),e.setRenderTarget(r,4,i),e.render(n,x),r.texture.generateMipmaps=g,e.setRenderTarget(r,5,i),e.render(n,u),e.setRenderTarget(c,f,m),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class i9 extends nn{constructor(e,n,r,i,o,s,a,l,x,u){e=e!==void 0?e:[],n=n!==void 0?n:Ro,super(e,n,r,i,o,s,a,l,x,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KA extends Ri{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new i9(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Vo(5,5,5),o=new Jr({name:"CubemapFromEquirect",uniforms:ko(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:tn,blending:Yr});o.uniforms.tEquirect.value=n;const s=new Yn(i,o),a=n.minFilter;return n.minFilter===Bi&&(n.minFilter=Rn),new $A(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,r,i){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,r,i);e.setRenderTarget(o)}}const Cx=new j,ZA=new j,QA=new Ue;class pi{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=Cx.subVectors(r,n).cross(ZA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Cx),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||QA.getNormalMatrix(e),i=this.coplanarPoint(Cx).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Ou,Ua=new j;class o9{constructor(e=new pi,n=new pi,r=new pi,i=new pi,o=new pi,s=new pi){this.planes=[e,n,r,i,o,s]}set(e,n,r,i,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(r),a[3].copy(i),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ur){const r=this.planes,i=e.elements,o=i[0],s=i[1],a=i[2],l=i[3],x=i[4],u=i[5],c=i[6],f=i[7],m=i[8],E=i[9],g=i[10],h=i[11],d=i[12],C=i[13],p=i[14],v=i[15];if(r[0].setComponents(l-o,f-x,h-m,v-d).normalize(),r[1].setComponents(l+o,f+x,h+m,v+d).normalize(),r[2].setComponents(l+s,f+u,h+E,v+C).normalize(),r[3].setComponents(l-s,f-u,h-E,v-C).normalize(),r[4].setComponents(l-a,f-c,h-g,v-p).normalize(),n===ur)r[5].setComponents(l+a,f+c,h+g,v+p).normalize();else if(n===k0)r[5].setComponents(a,c,g,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ci.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(Ua.x=i.normal.x>0?e.max.x:e.min.x,Ua.y=i.normal.y>0?e.max.y:e.min.y,Ua.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function s9(){let t=null,e=!1,n=null,r=null;function i(o,s){n(o,s),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function JA(t){const e=new WeakMap;function n(a,l){const x=a.array,u=a.usage,c=x.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,x,u),a.onUploadCallback();let m;if(x instanceof Float32Array)m=t.FLOAT;else if(x instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(x instanceof Int16Array)m=t.SHORT;else if(x instanceof Uint32Array)m=t.UNSIGNED_INT;else if(x instanceof Int32Array)m=t.INT;else if(x instanceof Int8Array)m=t.BYTE;else if(x instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:f,type:m,bytesPerElement:x.BYTES_PER_ELEMENT,version:a.version,size:c}}function r(a,l,x){const u=l.array,c=l._updateRange,f=l.updateRanges;if(t.bindBuffer(x,a),c.count===-1&&f.length===0&&t.bufferSubData(x,0,u),f.length!==0){for(let m=0,E=f.length;m<E;m++){const g=f[m];t.bufferSubData(x,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}c.count!==-1&&(t.bufferSubData(x,c.offset*u.BYTES_PER_ELEMENT,u,c.offset,c.count),c.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const x=e.get(a);if(x===void 0)e.set(a,n(a,l));else if(x.version<a.version){if(x.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(x.buffer,a,l),x.version=a.version}}return{get:i,remove:o,update:s}}class cl extends Ni{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const o=e/2,s=n/2,a=Math.floor(r),l=Math.floor(i),x=a+1,u=l+1,c=e/a,f=n/l,m=[],E=[],g=[],h=[];for(let d=0;d<u;d++){const C=d*f-s;for(let p=0;p<x;p++){const v=p*c-o;E.push(v,-C,0),g.push(0,0,1),h.push(p/a),h.push(1-d/l)}}for(let d=0;d<l;d++)for(let C=0;C<a;C++){const p=C+x*d,v=C+x*(d+1),F=C+1+x*(d+1),B=C+1+x*d;m.push(p,v,B),m.push(v,F,B)}this.setIndex(m),this.setAttribute("position",new yi(E,3)),this.setAttribute("normal",new yi(g,3)),this.setAttribute("uv",new yi(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.widthSegments,e.heightSegments)}}const e_=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`,t_=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (ατ)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids ατ == 0. Could also do ατ =1-ατ
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`,n_=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,r_=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,i_=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`,o_=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,s_=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,a_=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,l_=`
#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {

		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );

	}
#endif
`,x_=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif
`,c_=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`,u_=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,d_=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`,f_=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`,h_=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,p_=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#ifdef ALPHA_TO_COVERAGE

		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			if ( clipOpacity == 0.0 ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			float unionClipOpacity = 1.0;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			}
			#pragma unroll_loop_end

			clipOpacity *= 1.0 - unionClipOpacity;

		#endif

		diffuseColor.a *= clipOpacity;

		if ( diffuseColor.a == 0.0 ) discard;

	#else

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			bool clipped = true;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

			}
			#pragma unroll_loop_end

			if ( clipped ) discard;

		#endif

	#endif

#endif
`,m_=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,E_=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,g_=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,C_=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,v_=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,A_=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,__=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`,B_=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

#ifdef USE_ALPHAHASH

	varying vec3 vPosition;

#endif

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

float luminance( const in vec3 rgb ) {

	// assumes rgb is in linear color space with sRGB primaries and D65 white point

	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );

	return dot( weights, rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`,D_=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`,F_=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = im * transformedTangent;

	#endif

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,y_=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,S_=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,M_=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,w_=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,T_=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,P_=`

// http://www.russellcottrell.com/photo/matrixCalculator.htm

// Linear sRGB => XYZ => Linear Display P3
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);

// Linear Display P3 => XYZ => Linear sRGB
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);

vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}

vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

// @deprecated, r156
vec4 LinearToLinear( in vec4 value ) {
	return value;
}

// @deprecated, r156
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}
`,R_=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,b_=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,L_=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,k_=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,N_=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,U_=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,I_=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,O_=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,z_=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,H_=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`,V_=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,G_=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,W_=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,X_=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,j_=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( LEGACY_LIGHTS )

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#else

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,Y_=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`,q_=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,$_=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`,K_=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,Z_=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,Q_=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif

#ifdef USE_ANISOTROPY

	#ifdef USE_ANISOTROPYMAP

		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;

	#else

		vec2 anisotropyV = anisotropyVector;

	#endif

	material.anisotropy = length( anisotropyV );

	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`,J_=`

struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif

};

// temporary
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );

		return saturate(v);

	}

	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {

		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;

		return RECIPROCAL_PI * a2 * pow2 ( w2 );

	}

#endif

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = F_Schlick( f0, f90, dotVH );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	#ifdef USE_ANISOTROPY

		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );

		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );

		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );

	#else

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

	#endif

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,e2=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometryViewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,t2=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometryNormal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );

	#endif

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,n2=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`,r2=`
#if defined( USE_LOGDEPTHBUF )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,i2=`
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,o2=`
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,s2=`
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`,a2=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,l2=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,x2=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,c2=`
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,u2=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,d2=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,f2=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[MORPHTARGETS_COUNT];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`,h2=`
#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,p2=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

	#endif

#endif
`,m2=`
#ifdef USE_MORPHTARGETS

	#ifndef USE_INSTANCING_MORPH

		uniform float morphTargetBaseInfluence;

	#endif

	#ifdef MORPHTARGETS_TEXTURE

		#ifndef USE_INSTANCING_MORPH

			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];

		#endif

		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;

		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;

			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );

		}

	#else

		#ifndef USE_MORPHNORMALS

			uniform float morphTargetInfluences[ 8 ];

		#else

			uniform float morphTargetInfluences[ 4 ];

		#endif

	#endif

#endif
`,E2=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];

		#ifndef USE_MORPHNORMALS

			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];

		#endif

	#endif

#endif
`,g2=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`,C2=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,v2=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,A2=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,_2=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,B2=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`,D2=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`,F2=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,y2=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`,S2=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,M2=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,w2=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}

float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`,T2=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,P2=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,R2=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,b2=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,L2=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,k2=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,N2=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );

		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {

			// dp = normalized distance from light to fragment position
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
			dp += shadowBias;

			// bd3D = base direction 3D
			vec3 bd3D = normalize( lightToPosition );

			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );

			#else // no percentage-closer filtering

				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

			#endif

		}

		return shadow;

	}

#endif
`,U2=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,I2=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`,O2=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,z2=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,H2=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;

	mat4 getBoneMatrix( const in float i ) {

		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );

		return mat4( v1, v2, v3, v4 );

	}

#endif
`,V2=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,G2=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,W2=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,X2=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,j2=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,Y2=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);

const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
vec3 agxDefaultContrastApprox( vec3 x ) {

	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;

	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;

}

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;

	color *= toneMappingExposure;

	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;

	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;

	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;

	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,q2=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`,$2=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job 
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`,K2=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,Z2=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,Q2=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`,J2=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,e5=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,t5=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,n5=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,r5=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,i5=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,o5=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,s5=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,a5=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,l5=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,x5=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,c5=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,u5=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,d5=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,f5=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,h5=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,p5=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,m5=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,E5=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,g5=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,C5=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,v5=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,A5=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,_5=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,B5=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,D5=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,F5=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;

	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,y5=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,S5=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,M5=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,w5=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,T5=`
#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,P5=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`,R5=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,b5=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`,Ne={alphahash_fragment:e_,alphahash_pars_fragment:t_,alphamap_fragment:n_,alphamap_pars_fragment:r_,alphatest_fragment:i_,alphatest_pars_fragment:o_,aomap_fragment:s_,aomap_pars_fragment:a_,batching_pars_vertex:l_,batching_vertex:x_,begin_vertex:c_,beginnormal_vertex:u_,bsdfs:d_,iridescence_fragment:f_,bumpmap_pars_fragment:h_,clipping_planes_fragment:p_,clipping_planes_pars_fragment:m_,clipping_planes_pars_vertex:E_,clipping_planes_vertex:g_,color_fragment:C_,color_pars_fragment:v_,color_pars_vertex:A_,color_vertex:__,common:B_,cube_uv_reflection_fragment:D_,defaultnormal_vertex:F_,displacementmap_pars_vertex:y_,displacementmap_vertex:S_,emissivemap_fragment:M_,emissivemap_pars_fragment:w_,colorspace_fragment:T_,colorspace_pars_fragment:P_,envmap_fragment:R_,envmap_common_pars_fragment:b_,envmap_pars_fragment:L_,envmap_pars_vertex:k_,envmap_physical_pars_fragment:Y_,envmap_vertex:N_,fog_vertex:U_,fog_pars_vertex:I_,fog_fragment:O_,fog_pars_fragment:z_,gradientmap_pars_fragment:H_,lightmap_fragment:V_,lightmap_pars_fragment:G_,lights_lambert_fragment:W_,lights_lambert_pars_fragment:X_,lights_pars_begin:j_,lights_toon_fragment:q_,lights_toon_pars_fragment:$_,lights_phong_fragment:K_,lights_phong_pars_fragment:Z_,lights_physical_fragment:Q_,lights_physical_pars_fragment:J_,lights_fragment_begin:e2,lights_fragment_maps:t2,lights_fragment_end:n2,logdepthbuf_fragment:r2,logdepthbuf_pars_fragment:i2,logdepthbuf_pars_vertex:o2,logdepthbuf_vertex:s2,map_fragment:a2,map_pars_fragment:l2,map_particle_fragment:x2,map_particle_pars_fragment:c2,metalnessmap_fragment:u2,metalnessmap_pars_fragment:d2,morphinstance_vertex:f2,morphcolor_vertex:h2,morphnormal_vertex:p2,morphtarget_pars_vertex:m2,morphtarget_vertex:E2,normal_fragment_begin:g2,normal_fragment_maps:C2,normal_pars_fragment:v2,normal_pars_vertex:A2,normal_vertex:_2,normalmap_pars_fragment:B2,clearcoat_normal_fragment_begin:D2,clearcoat_normal_fragment_maps:F2,clearcoat_pars_fragment:y2,iridescence_pars_fragment:S2,opaque_fragment:M2,packing:w2,premultiplied_alpha_fragment:T2,project_vertex:P2,dithering_fragment:R2,dithering_pars_fragment:b2,roughnessmap_fragment:L2,roughnessmap_pars_fragment:k2,shadowmap_pars_fragment:N2,shadowmap_pars_vertex:U2,shadowmap_vertex:I2,shadowmask_pars_fragment:O2,skinbase_vertex:z2,skinning_pars_vertex:H2,skinning_vertex:V2,skinnormal_vertex:G2,specularmap_fragment:W2,specularmap_pars_fragment:X2,tonemapping_fragment:j2,tonemapping_pars_fragment:Y2,transmission_fragment:q2,transmission_pars_fragment:$2,uv_pars_fragment:K2,uv_pars_vertex:Z2,uv_vertex:Q2,worldpos_vertex:J2,background_vert:e5,background_frag:t5,backgroundCube_vert:n5,backgroundCube_frag:r5,cube_vert:i5,cube_frag:o5,depth_vert:s5,depth_frag:a5,distanceRGBA_vert:l5,distanceRGBA_frag:x5,equirect_vert:c5,equirect_frag:u5,linedashed_vert:d5,linedashed_frag:f5,meshbasic_vert:h5,meshbasic_frag:p5,meshlambert_vert:m5,meshlambert_frag:E5,meshmatcap_vert:g5,meshmatcap_frag:C5,meshnormal_vert:v5,meshnormal_frag:A5,meshphong_vert:_5,meshphong_frag:B5,meshphysical_vert:D5,meshphysical_frag:F5,meshtoon_vert:y5,meshtoon_frag:S5,points_vert:M5,points_frag:w5,shadow_vert:T5,shadow_frag:P5,sprite_vert:R5,sprite_frag:b5},ue={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Vn={basic:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Gt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Gt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Gt([ue.points,ue.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Gt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Gt([ue.common,ue.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Gt([ue.sprite,ue.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Gt([ue.common,ue.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Gt([ue.lights,ue.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Vn.physical={uniforms:Gt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Ia={r:0,b:0,g:0},ui=new gr,L5=new Bt;function k5(t,e,n,r,i,o,s){const a=new Ze(0);let l=o===!0?0:1,x,u,c=null,f=0,m=null;function E(h,d){let C=!1,p=d.isScene===!0?d.background:null;p&&p.isTexture&&(p=(d.backgroundBlurriness>0?n:e).get(p)),p===null?g(a,l):p&&p.isColor&&(g(p,1),C=!0);const v=t.xr.getEnvironmentBlendMode();v==="additive"?r.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(t.autoClear||C)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),p&&(p.isCubeTexture||p.mapping===al)?(u===void 0&&(u=new Yn(new Vo(1,1,1),new Jr({name:"BackgroundCubeMaterial",uniforms:ko(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,B,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ui.copy(d.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),u.material.uniforms.envMap.value=p,u.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(L5.makeRotationFromEuler(ui)),u.material.toneMapped=Ke.getTransfer(p.colorSpace)!==rt,(c!==p||f!==p.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,c=p,f=p.version,m=t.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):p&&p.isTexture&&(x===void 0&&(x=new Yn(new cl(2,2),new Jr({name:"BackgroundMaterial",uniforms:ko(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),Object.defineProperty(x.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(x)),x.material.uniforms.t2D.value=p,x.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,x.material.toneMapped=Ke.getTransfer(p.colorSpace)!==rt,p.matrixAutoUpdate===!0&&p.updateMatrix(),x.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||f!==p.version||m!==t.toneMapping)&&(x.material.needsUpdate=!0,c=p,f=p.version,m=t.toneMapping),x.layers.enableAll(),h.unshift(x,x.geometry,x.material,0,0,null))}function g(h,d){h.getRGB(Ia,n9(t)),r.buffers.color.setClear(Ia.r,Ia.g,Ia.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(h,d=1){a.set(h),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,g(a,l)},render:E}}function N5(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},i=f(null);let o=i,s=!1;function a(A,b,L,P,I){let U=!1;const $=c(P,L,b);o!==$&&(o=$,x(o.object)),U=m(A,P,L,I),U&&E(A,P,L,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(U||s)&&(s=!1,v(A,b,L,P),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function x(A){return t.bindVertexArray(A)}function u(A){return t.deleteVertexArray(A)}function c(A,b,L){const P=L.wireframe===!0;let I=r[A.id];I===void 0&&(I={},r[A.id]=I);let U=I[b.id];U===void 0&&(U={},I[b.id]=U);let $=U[P];return $===void 0&&($=f(l()),U[P]=$),$}function f(A){const b=[],L=[],P=[];for(let I=0;I<n;I++)b[I]=0,L[I]=0,P[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:L,attributeDivisors:P,object:A,attributes:{},index:null}}function m(A,b,L,P){const I=o.attributes,U=b.attributes;let $=0;const W=L.getAttributes();for(const R in W)if(W[R].location>=0){const H=I[R];let q=U[R];if(q===void 0&&(R==="instanceMatrix"&&A.instanceMatrix&&(q=A.instanceMatrix),R==="instanceColor"&&A.instanceColor&&(q=A.instanceColor)),H===void 0||H.attribute!==q||q&&H.data!==q.data)return!0;$++}return o.attributesNum!==$||o.index!==P}function E(A,b,L,P){const I={},U=b.attributes;let $=0;const W=L.getAttributes();for(const R in W)if(W[R].location>=0){let H=U[R];H===void 0&&(R==="instanceMatrix"&&A.instanceMatrix&&(H=A.instanceMatrix),R==="instanceColor"&&A.instanceColor&&(H=A.instanceColor));const q={};q.attribute=H,H&&H.data&&(q.data=H.data),I[R]=q,$++}o.attributes=I,o.attributesNum=$,o.index=P}function g(){const A=o.newAttributes;for(let b=0,L=A.length;b<L;b++)A[b]=0}function h(A){d(A,0)}function d(A,b){const L=o.newAttributes,P=o.enabledAttributes,I=o.attributeDivisors;L[A]=1,P[A]===0&&(t.enableVertexAttribArray(A),P[A]=1),I[A]!==b&&(t.vertexAttribDivisor(A,b),I[A]=b)}function C(){const A=o.newAttributes,b=o.enabledAttributes;for(let L=0,P=b.length;L<P;L++)b[L]!==A[L]&&(t.disableVertexAttribArray(L),b[L]=0)}function p(A,b,L,P,I,U,$){$===!0?t.vertexAttribIPointer(A,b,L,I,U):t.vertexAttribPointer(A,b,L,P,I,U)}function v(A,b,L,P){g();const I=P.attributes,U=L.getAttributes(),$=b.defaultAttributeValues;for(const W in U){const R=U[W];if(R.location>=0){let z=I[W];if(z===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(z=A.instanceColor)),z!==void 0){const H=z.normalized,q=z.itemSize,le=e.get(z);if(le===void 0)continue;const ye=le.buffer,k=le.type,ne=le.bytesPerElement,se=k===t.INT||k===t.UNSIGNED_INT||z.gpuType===HE;if(z.isInterleavedBufferAttribute){const re=z.data,we=re.stride,De=z.offset;if(re.isInstancedInterleavedBuffer){for(let ze=0;ze<R.locationSize;ze++)d(R.location+ze,re.meshPerAttribute);A.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ze=0;ze<R.locationSize;ze++)h(R.location+ze);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let ze=0;ze<R.locationSize;ze++)p(R.location+ze,q/R.locationSize,k,H,we*ne,(De+q/R.locationSize*ze)*ne,se)}else{if(z.isInstancedBufferAttribute){for(let re=0;re<R.locationSize;re++)d(R.location+re,z.meshPerAttribute);A.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let re=0;re<R.locationSize;re++)h(R.location+re);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let re=0;re<R.locationSize;re++)p(R.location+re,q/R.locationSize,k,H,q*ne,q/R.locationSize*re*ne,se)}}else if($!==void 0){const H=$[W];if(H!==void 0)switch(H.length){case 2:t.vertexAttrib2fv(R.location,H);break;case 3:t.vertexAttrib3fv(R.location,H);break;case 4:t.vertexAttrib4fv(R.location,H);break;default:t.vertexAttrib1fv(R.location,H)}}}}C()}function F(){M();for(const A in r){const b=r[A];for(const L in b){const P=b[L];for(const I in P)u(P[I].object),delete P[I];delete b[L]}delete r[A]}}function B(A){if(r[A.id]===void 0)return;const b=r[A.id];for(const L in b){const P=b[L];for(const I in P)u(P[I].object),delete P[I];delete b[L]}delete r[A.id]}function _(A){for(const b in r){const L=r[b];if(L[A.id]===void 0)continue;const P=L[A.id];for(const I in P)u(P[I].object),delete P[I];delete L[A.id]}}function M(){D(),s=!0,o!==i&&(o=i,x(o.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:M,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:_,initAttributes:g,enableAttribute:h,disableUnusedAttributes:C}}function U5(t,e,n){let r;function i(l){r=l}function o(l,x){t.drawArrays(r,l,x),n.update(x,r,1)}function s(l,x,u){u!==0&&(t.drawArraysInstanced(r,l,x,u),n.update(x,r,u))}function a(l,x,u){if(u===0)return;const c=e.get("WEBGL_multi_draw");if(c===null)for(let f=0;f<u;f++)this.render(l[f],x[f]);else{c.multiDrawArraysWEBGL(r,l,0,x,0,u);let f=0;for(let m=0;m<u;m++)f+=x[m];n.update(f,r,1)}}this.setMode=i,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function I5(t,e,n){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const p=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(p){if(p==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=n.precision!==void 0?n.precision:"highp";const a=o(s);a!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",a,"instead."),s=a);const l=n.logarithmicDepthBuffer===!0,x=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),u=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),c=t.getParameter(t.MAX_TEXTURE_SIZE),f=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),h=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),d=u>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:o,precision:s,logarithmicDepthBuffer:l,maxTextures:x,maxVertexTextures:u,maxTextureSize:c,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:E,maxVaryings:g,maxFragmentUniforms:h,vertexTextures:d,maxSamples:C}}function O5(t){const e=this;let n=null,r=0,i=!1,o=!1;const s=new pi,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){const m=c.length!==0||f||r!==0||i;return i=f,r=c.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(c,f){n=u(c,f,0)},this.setState=function(c,f,m){const E=c.clippingPlanes,g=c.clipIntersection,h=c.clipShadows,d=t.get(c);if(!i||E===null||E.length===0||o&&!h)o?u(null):x();else{const C=o?0:r,p=C*4;let v=d.clippingState||null;l.value=v,v=u(E,f,p,m);for(let F=0;F!==p;++F)v[F]=n[F];d.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=C}};function x(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(c,f,m,E){const g=c!==null?c.length:0;let h=null;if(g!==0){if(h=l.value,E!==!0||h===null){const d=m+g*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(h===null||h.length<d)&&(h=new Float32Array(d));for(let p=0,v=m;p!==g;++p,v+=4)s.copy(c[p]).applyMatrix4(C,a),s.normal.toArray(h,v),h[v+3]=s.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,h}}function z5(t){let e=new WeakMap;function n(s,a){return a===Tc?s.mapping=Ro:a===Pc&&(s.mapping=bo),s}function r(s){if(s&&s.isTexture){const a=s.mapping;if(a===Tc||a===Pc)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const x=new KA(l.height);return x.fromEquirectangularTexture(t,s),e.set(s,x),s.addEventListener("dispose",i),n(x.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:r,dispose:o}}class H5 extends r9{constructor(e=-1,n=1,r=1,i=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=r-e,s=r+e,a=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const x=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=x*this.view.offsetX,s=o+x*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ho=4,Ah=[.125,.215,.35,.446,.526,.582],gi=20,vx=new H5,_h=new Ze;let Ax=null,_x=0,Bx=0,Dx=!1;const mi=(1+Math.sqrt(5))/2,eo=1/mi,Bh=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,mi,eo),new j(0,mi,-eo),new j(eo,0,mi),new j(-eo,0,mi),new j(mi,eo,0),new j(-mi,eo,0)];class Dh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100){Ax=this._renderer.getRenderTarget(),_x=this._renderer.getActiveCubeFace(),Bx=this._renderer.getActiveMipmapLevel(),Dx=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,r,i,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ax,_x,Bx),this._renderer.xr.enabled=Dx,e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ro||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ax=this._renderer.getRenderTarget(),_x=this._renderer.getActiveCubeFace(),Bx=this._renderer.getActiveMipmapLevel(),Dx=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:P0,format:jn,colorSpace:ii,depthBuffer:!1},i=Fh(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,n,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V5(o)),this._blurMaterial=G5(o,e,n)}return i}_compileMaterial(e){const n=new Yn(this._lodPlanes[0],e);this._renderer.compile(n,vx)}_sceneToCubeUV(e,n,r,i){const a=new gn(90,1,n,r),l=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,f=u.toneMapping;u.getClearColor(_h),u.toneMapping=qr,u.autoClear=!1;const m=new zu({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),E=new Yn(new Vo,m);let g=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,g=!0):(m.color.copy(_h),g=!0);for(let d=0;d<6;d++){const C=d%3;C===0?(a.up.set(0,l[d],0),a.lookAt(x[d],0,0)):C===1?(a.up.set(0,0,l[d]),a.lookAt(0,x[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,x[d]));const p=this._cubeSize;Oa(i,C*p,d>2?p:0,p,p),u.setRenderTarget(i),g&&u.render(E,a),u.render(e,a)}E.geometry.dispose(),E.material.dispose(),u.toneMapping=f,u.autoClear=c,e.background=h}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===Ro||e.mapping===bo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const o=i?this._cubemapMaterial:this._equirectMaterial,s=new Yn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Oa(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(s,vx)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Bh[(i-1)%Bh.length];this._blur(e,i-1,i,o,s)}n.autoClear=r}_blur(e,n,r,i,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,r,i,"latitudinal",o),this._halfBlur(s,e,r,r,i,"longitudinal",o)}_halfBlur(e,n,r,i,o,s,a){const l=this._renderer,x=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new Yn(this._lodPlanes[i],x),f=x.uniforms,m=this._sizeLods[r]-1,E=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*gi-1),g=o/E,h=isFinite(o)?1+Math.floor(u*g):gi;h>gi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${gi}`);const d=[];let C=0;for(let _=0;_<gi;++_){const M=_/g,D=Math.exp(-M*M/2);d.push(D),_===0?C+=D:_<h&&(C+=2*D)}for(let _=0;_<d.length;_++)d[_]=d[_]/C;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=d,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:p}=this;f.dTheta.value=E,f.mipInt.value=p-r;const v=this._sizeLods[i],F=3*v*(i>p-ho?i-p+ho:0),B=4*(this._cubeSize-v);Oa(n,F,B,3*v,2*v),l.setRenderTarget(n),l.render(c,vx)}}function V5(t){const e=[],n=[],r=[];let i=t;const o=t-ho+1+Ah.length;for(let s=0;s<o;s++){const a=Math.pow(2,i);n.push(a);let l=1/a;s>t-ho?l=Ah[s-t+ho-1]:s===0&&(l=0),r.push(l);const x=1/(a-2),u=-x,c=1+x,f=[u,u,c,u,c,c,u,u,c,c,u,c],m=6,E=6,g=3,h=2,d=1,C=new Float32Array(g*E*m),p=new Float32Array(h*E*m),v=new Float32Array(d*E*m);for(let B=0;B<m;B++){const _=B%3*2/3-1,M=B>2?0:-1,D=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];C.set(D,g*E*B),p.set(f,h*E*B);const A=[B,B,B,B,B,B];v.set(A,d*E*B)}const F=new Ni;F.setAttribute("position",new Kn(C,g)),F.setAttribute("uv",new Kn(p,h)),F.setAttribute("faceIndex",new Kn(v,d)),e.push(F),i>ho&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Fh(t,e,n){const r=new Ri(t,e,n);return r.texture.mapping=al,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Oa(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function G5(t,e,n){const r=new Float32Array(gi),i=new j(0,1,0);return new Jr({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function yh(){return new Jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function Sh(){return new Jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function Hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function W5(t){let e=new WeakMap,n=null;function r(a){if(a&&a.isTexture){const l=a.mapping,x=l===Tc||l===Pc,u=l===Ro||l===bo;if(x||u){let c=e.get(a);const f=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Dh(t)),c=x?n.fromEquirectangular(a,c):n.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),c.texture;if(c!==void 0)return c.texture;{const m=a.image;return x&&m&&m.height>0||u&&m&&i(m)?(n===null&&(n=new Dh(t)),c=x?n.fromEquirectangular(a):n.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),a.addEventListener("dispose",o),c.texture):null}}}return a}function i(a){let l=0;const x=6;for(let u=0;u<x;u++)a[u]!==void 0&&l++;return l===x}function o(a){const l=a.target;l.removeEventListener("dispose",o);const x=e.get(l);x!==void 0&&(e.delete(l),x.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:s}}function X5(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const i=n(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function j5(t,e,n,r){const i={},o=new WeakMap;function s(c){const f=c.target;f.index!==null&&e.remove(f.index);for(const E in f.attributes)e.remove(f.attributes[E]);for(const E in f.morphAttributes){const g=f.morphAttributes[E];for(let h=0,d=g.length;h<d;h++)e.remove(g[h])}f.removeEventListener("dispose",s),delete i[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(c,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,n.memory.geometries++),f}function l(c){const f=c.attributes;for(const E in f)e.update(f[E],t.ARRAY_BUFFER);const m=c.morphAttributes;for(const E in m){const g=m[E];for(let h=0,d=g.length;h<d;h++)e.update(g[h],t.ARRAY_BUFFER)}}function x(c){const f=[],m=c.index,E=c.attributes.position;let g=0;if(m!==null){const C=m.array;g=m.version;for(let p=0,v=C.length;p<v;p+=3){const F=C[p+0],B=C[p+1],_=C[p+2];f.push(F,B,B,_,_,F)}}else if(E!==void 0){const C=E.array;g=E.version;for(let p=0,v=C.length/3-1;p<v;p+=3){const F=p+0,B=p+1,_=p+2;f.push(F,B,B,_,_,F)}}else return;const h=new($E(f)?t9:e9)(f,1);h.version=g;const d=o.get(c);d&&e.remove(d),o.set(c,h)}function u(c){const f=o.get(c);if(f){const m=c.index;m!==null&&f.version<m.version&&x(c)}else x(c);return o.get(c)}return{get:a,update:l,getWireframeAttribute:u}}function Y5(t,e,n){let r;function i(c){r=c}let o,s;function a(c){o=c.type,s=c.bytesPerElement}function l(c,f){t.drawElements(r,f,o,c*s),n.update(f,r,1)}function x(c,f,m){m!==0&&(t.drawElementsInstanced(r,f,o,c*s,m),n.update(f,r,m))}function u(c,f,m){if(m===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let g=0;g<m;g++)this.render(c[g]/s,f[g]);else{E.multiDrawElementsWEBGL(r,f,0,o,c,0,m);let g=0;for(let h=0;h<m;h++)g+=f[h];n.update(g,r,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=x,this.renderMultiDraw=u}function q5(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function $5(t,e,n){const r=new WeakMap,i=new Rt;function o(s,a,l){const x=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=u!==void 0?u.length:0;let f=r.get(a);if(f===void 0||f.count!==c){let A=function(){M.dispose(),r.delete(a),a.removeEventListener("dispose",A)};var m=A;f!==void 0&&f.texture.dispose();const E=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],p=a.morphAttributes.color||[];let v=0;E===!0&&(v=1),g===!0&&(v=2),h===!0&&(v=3);let F=a.attributes.position.count*v,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const _=new Float32Array(F*B*4*c),M=new ZE(_,F,B,c);M.type=Ur,M.needsUpdate=!0;const D=v*4;for(let b=0;b<c;b++){const L=d[b],P=C[b],I=p[b],U=F*B*4*b;for(let $=0;$<L.count;$++){const W=$*D;E===!0&&(i.fromBufferAttribute(L,$),_[U+W+0]=i.x,_[U+W+1]=i.y,_[U+W+2]=i.z,_[U+W+3]=0),g===!0&&(i.fromBufferAttribute(P,$),_[U+W+4]=i.x,_[U+W+5]=i.y,_[U+W+6]=i.z,_[U+W+7]=0),h===!0&&(i.fromBufferAttribute(I,$),_[U+W+8]=i.x,_[U+W+9]=i.y,_[U+W+10]=i.z,_[U+W+11]=I.itemSize===4?i.w:1)}}f={count:c,texture:M,size:new je(F,B)},r.set(a,f),a.addEventListener("dispose",A)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let E=0;for(let h=0;h<x.length;h++)E+=x[h];const g=a.morphTargetsRelative?1:1-E;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",x)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:o}}function K5(t,e,n,r){let i=new WeakMap;function o(l){const x=r.render.frame,u=l.geometry,c=e.get(l,u);if(i.get(c)!==x&&(e.update(c),i.set(c,x)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==x&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),i.set(l,x))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==x&&(f.update(),i.set(f,x))}return c}function s(){i=new WeakMap}function a(l){const x=l.target;x.removeEventListener("dispose",a),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:o,dispose:s}}class a9 extends nn{constructor(e,n,r,i,o,s,a,l,x,u){if(u=u!==void 0?u:_o,u!==_o&&u!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===_o&&(r=Lo),r===void 0&&u===Os&&(r=qs),super(null,i,o,s,a,l,u,r,x),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const l9=new nn,x9=new a9(1,1);x9.compareFunction=qE;const c9=new ZE,u9=new bA,d9=new i9,Mh=[],wh=[],Th=new Float32Array(16),Ph=new Float32Array(9),Rh=new Float32Array(4);function Go(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let o=Mh[i];if(o===void 0&&(o=new Float32Array(i),Mh[i]=o),e!==0){r.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function ul(t,e){let n=wh[e];n===void 0&&(n=new Int32Array(e),wh[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function Z5(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Q5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function J5(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function e6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function t6(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Dt(n,r))return;Rh.set(r),t.uniformMatrix2fv(this.addr,!1,Rh),Ft(n,r)}}function n6(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Dt(n,r))return;Ph.set(r),t.uniformMatrix3fv(this.addr,!1,Ph),Ft(n,r)}}function r6(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Dt(n,r))return;Th.set(r),t.uniformMatrix4fv(this.addr,!1,Th),Ft(n,r)}}function i6(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function o6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function s6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function a6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function l6(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function x6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function c6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function u6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function d6(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);const o=this.type===t.SAMPLER_2D_SHADOW?x9:l9;n.setTexture2D(e||o,i)}function f6(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||u9,i)}function h6(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||d9,i)}function p6(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||c9,i)}function m6(t){switch(t){case 5126:return Z5;case 35664:return Q5;case 35665:return J5;case 35666:return e6;case 35674:return t6;case 35675:return n6;case 35676:return r6;case 5124:case 35670:return i6;case 35667:case 35671:return o6;case 35668:case 35672:return s6;case 35669:case 35673:return a6;case 5125:return l6;case 36294:return x6;case 36295:return c6;case 36296:return u6;case 35678:case 36198:case 36298:case 36306:case 35682:return d6;case 35679:case 36299:case 36307:return f6;case 35680:case 36300:case 36308:case 36293:return h6;case 36289:case 36303:case 36311:case 36292:return p6}}function E6(t,e){t.uniform1fv(this.addr,e)}function g6(t,e){const n=Go(e,this.size,2);t.uniform2fv(this.addr,n)}function C6(t,e){const n=Go(e,this.size,3);t.uniform3fv(this.addr,n)}function v6(t,e){const n=Go(e,this.size,4);t.uniform4fv(this.addr,n)}function A6(t,e){const n=Go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _6(t,e){const n=Go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function B6(t,e){const n=Go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function D6(t,e){t.uniform1iv(this.addr,e)}function F6(t,e){t.uniform2iv(this.addr,e)}function y6(t,e){t.uniform3iv(this.addr,e)}function S6(t,e){t.uniform4iv(this.addr,e)}function M6(t,e){t.uniform1uiv(this.addr,e)}function w6(t,e){t.uniform2uiv(this.addr,e)}function T6(t,e){t.uniform3uiv(this.addr,e)}function P6(t,e){t.uniform4uiv(this.addr,e)}function R6(t,e,n){const r=this.cache,i=e.length,o=ul(n,i);Dt(r,o)||(t.uniform1iv(this.addr,o),Ft(r,o));for(let s=0;s!==i;++s)n.setTexture2D(e[s]||l9,o[s])}function b6(t,e,n){const r=this.cache,i=e.length,o=ul(n,i);Dt(r,o)||(t.uniform1iv(this.addr,o),Ft(r,o));for(let s=0;s!==i;++s)n.setTexture3D(e[s]||u9,o[s])}function L6(t,e,n){const r=this.cache,i=e.length,o=ul(n,i);Dt(r,o)||(t.uniform1iv(this.addr,o),Ft(r,o));for(let s=0;s!==i;++s)n.setTextureCube(e[s]||d9,o[s])}function k6(t,e,n){const r=this.cache,i=e.length,o=ul(n,i);Dt(r,o)||(t.uniform1iv(this.addr,o),Ft(r,o));for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||c9,o[s])}function N6(t){switch(t){case 5126:return E6;case 35664:return g6;case 35665:return C6;case 35666:return v6;case 35674:return A6;case 35675:return _6;case 35676:return B6;case 5124:case 35670:return D6;case 35667:case 35671:return F6;case 35668:case 35672:return y6;case 35669:case 35673:return S6;case 5125:return M6;case 36294:return w6;case 36295:return T6;case 36296:return P6;case 35678:case 36198:case 36298:case 36306:case 35682:return R6;case 35679:case 36299:case 36307:return b6;case 35680:case 36300:case 36308:case 36293:return L6;case 36289:case 36303:case 36311:case 36292:return k6}}class U6{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=m6(n.type)}}class I6{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=N6(n.type)}}class O6{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let o=0,s=i.length;o!==s;++o){const a=i[o];a.setValue(e,n[a.id],r)}}}const Fx=/(\w+)(\])?(\[|\.)?/g;function bh(t,e){t.seq.push(e),t.map[e.id]=e}function z6(t,e,n){const r=t.name,i=r.length;for(Fx.lastIndex=0;;){const o=Fx.exec(r),s=Fx.lastIndex;let a=o[1];const l=o[2]==="]",x=o[3];if(l&&(a=a|0),x===void 0||x==="["&&s+2===i){bh(n,x===void 0?new U6(a,t,e):new I6(a,t,e));break}else{let c=n.map[a];c===void 0&&(c=new O6(a),bh(n,c)),n=c}}}class n0{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const o=e.getActiveUniform(n,i),s=e.getUniformLocation(n,o.name);z6(o,s,this)}}setValue(e,n,r,i){const o=this.map[n];o!==void 0&&o.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,o=e.length;i!==o;++i){const s=e[i];s.id in n&&r.push(s)}return r}}function Lh(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const H6=37297;let V6=0;function G6(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=i;s<o;s++){const a=s+1;r.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return r.join(`
`)}function W6(t){const e=Ke.getPrimaries(Ke.workingColorSpace),n=Ke.getPrimaries(t);let r;switch(e===n?r="":e===L0&&n===b0?r="LinearDisplayP3ToLinearSRGB":e===b0&&n===L0&&(r="LinearSRGBToLinearDisplayP3"),t){case ii:case ll:return[r,"LinearTransferOETF"];case Hn:case Iu:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[r,"LinearTransferOETF"]}}function kh(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+i+`

`+G6(t.getShaderSource(e),s)}else return i}function X6(t,e){const n=W6(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function j6(t,e){let n;switch(e){case Kv:n="Linear";break;case Zv:n="Reinhard";break;case Qv:n="OptimizedCineon";break;case Jv:n="ACESFilmic";break;case tA:n="AgX";break;case nA:n="Neutral";break;case eA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Y6(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function q6(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function $6(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const o=t.getActiveAttrib(e,i),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function xs(t){return t!==""}function Nh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K6=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(t){return t.replace(K6,Q6)}const Z6=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Q6(t,e){let n=Ne[e];if(n===void 0){const r=Z6.get(e);if(r!==void 0)n=Ne[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kc(n)}const J6=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(t){return t.replace(J6,eB)}function eB(t,e,n,r){let i="";for(let o=parseInt(e);o<parseInt(n);o++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Oh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tB(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===UE?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===_v?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ir&&(e="SHADOWMAP_TYPE_VSM"),e}function nB(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ro:case bo:e="ENVMAP_TYPE_CUBE";break;case al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rB(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case bo:e="ENVMAP_MODE_REFRACTION";break}return e}function iB(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case IE:e="ENVMAP_BLENDING_MULTIPLY";break;case qv:e="ENVMAP_BLENDING_MIX";break;case $v:e="ENVMAP_BLENDING_ADD";break}return e}function oB(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function sB(t,e,n,r){const i=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=tB(n),x=nB(n),u=rB(n),c=iB(n),f=oB(n),m=Y6(n),E=q6(o),g=i.createProgram();let h,d,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(xs).join(`
`),h.length>0&&(h+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(xs).join(`
`),d.length>0&&(d+=`
`)):(h=[Oh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),d=[Oh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qr?"#define TONE_MAPPING":"",n.toneMapping!==qr?Ne.tonemapping_pars_fragment:"",n.toneMapping!==qr?j6("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,X6("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xs).join(`
`)),s=kc(s),s=Nh(s,n),s=Uh(s,n),a=kc(a),a=Nh(a,n),a=Uh(a,n),s=Ih(s),a=Ih(a),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,d=["#define varying in",n.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const p=C+h+s,v=C+d+a,F=Lh(i,i.VERTEX_SHADER,p),B=Lh(i,i.FRAGMENT_SHADER,v);i.attachShader(g,F),i.attachShader(g,B),n.index0AttributeName!==void 0?i.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function _(b){if(t.debug.checkShaderErrors){const L=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(F).trim(),I=i.getShaderInfoLog(B).trim();let U=!0,$=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,g,F,B);else{const W=kh(i,F,"vertex"),R=kh(i,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+L+`
`+W+`
`+R)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(P===""||I==="")&&($=!1);$&&(b.diagnostics={runnable:U,programLog:L,vertexShader:{log:P,prefix:h},fragmentShader:{log:I,prefix:d}})}i.deleteShader(F),i.deleteShader(B),M=new n0(i,g),D=$6(i,g)}let M;this.getUniforms=function(){return M===void 0&&_(this),M};let D;this.getAttributes=function(){return D===void 0&&_(this),D};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(g,H6)),A},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=V6++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=F,this.fragmentShader=B,this}let aB=0;class lB{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),o=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new xB(e),n.set(e,r)),r}}class xB{constructor(e){this.id=aB++,this.code=e,this.usedTimes=0}}function cB(t,e,n,r,i,o,s){const a=new QE,l=new lB,x=new Set,u=[],c=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(D){return x.add(D),D===0?"uv":`uv${D}`}function h(D,A,b,L,P){const I=L.fog,U=P.geometry,$=D.isMeshStandardMaterial?L.environment:null,W=(D.isMeshStandardMaterial?n:e).get(D.envMap||$),R=W&&W.mapping===al?W.image.height:null,z=E[D.type];D.precision!==null&&(m=i.getMaxPrecision(D.precision),m!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",m,"instead."));const H=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,q=H!==void 0?H.length:0;let le=0;U.morphAttributes.position!==void 0&&(le=1),U.morphAttributes.normal!==void 0&&(le=2),U.morphAttributes.color!==void 0&&(le=3);let ye,k,ne,se;if(z){const kt=Vn[z];ye=kt.vertexShader,k=kt.fragmentShader}else ye=D.vertexShader,k=D.fragmentShader,l.update(D),ne=l.getVertexShaderID(D),se=l.getFragmentShaderID(D);const re=t.getRenderTarget(),we=P.isInstancedMesh===!0,De=P.isBatchedMesh===!0,ze=!!D.map,O=!!D.matcap,Ie=!!W,_e=!!D.aoMap,et=!!D.lightMap,Ae=!!D.bumpMap,Ge=!!D.normalMap,w=!!D.displacementMap,y=!!D.emissiveMap,V=!!D.metalnessMap,Q=!!D.roughnessMap,J=D.anisotropy>0,ee=D.clearcoat>0,Se=D.iridescence>0,ie=D.sheen>0,ve=D.transmission>0,Me=J&&!!D.anisotropyMap,ce=ee&&!!D.clearcoatMap,he=ee&&!!D.clearcoatNormalMap,Pe=ee&&!!D.clearcoatRoughnessMap,pe=Se&&!!D.iridescenceMap,me=Se&&!!D.iridescenceThicknessMap,He=ie&&!!D.sheenColorMap,We=ie&&!!D.sheenRoughnessMap,qe=!!D.specularMap,Ye=!!D.specularColorMap,ot=!!D.specularIntensityMap,ge=ve&&!!D.transmissionMap,T=ve&&!!D.thicknessMap,xe=!!D.gradientMap,ae=!!D.alphaMap,Ce=D.alphaTest>0,Be=!!D.alphaHash,Qe=!!D.extensions;let st=qr;D.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(st=t.toneMapping);const xt={shaderID:z,shaderType:D.type,shaderName:D.name,vertexShader:ye,fragmentShader:k,defines:D.defines,customVertexShaderID:ne,customFragmentShaderID:se,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:m,batching:De,instancing:we,instancingColor:we&&P.instanceColor!==null,instancingMorph:we&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ii,alphaToCoverage:!!D.alphaToCoverage,map:ze,matcap:O,envMap:Ie,envMapMode:Ie&&W.mapping,envMapCubeUVHeight:R,aoMap:_e,lightMap:et,bumpMap:Ae,normalMap:Ge,displacementMap:f&&w,emissiveMap:y,normalMapObjectSpace:Ge&&D.normalMapType===EA,normalMapTangentSpace:Ge&&D.normalMapType===mA,metalnessMap:V,roughnessMap:Q,anisotropy:J,anisotropyMap:Me,clearcoat:ee,clearcoatMap:ce,clearcoatNormalMap:he,clearcoatRoughnessMap:Pe,iridescence:Se,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:ie,sheenColorMap:He,sheenRoughnessMap:We,specularMap:qe,specularColorMap:Ye,specularIntensityMap:ot,transmission:ve,transmissionMap:ge,thicknessMap:T,gradientMap:xe,opaque:D.transparent===!1&&D.blending===Ao&&D.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ce,alphaHash:Be,combine:D.combine,mapUv:ze&&g(D.map.channel),aoMapUv:_e&&g(D.aoMap.channel),lightMapUv:et&&g(D.lightMap.channel),bumpMapUv:Ae&&g(D.bumpMap.channel),normalMapUv:Ge&&g(D.normalMap.channel),displacementMapUv:w&&g(D.displacementMap.channel),emissiveMapUv:y&&g(D.emissiveMap.channel),metalnessMapUv:V&&g(D.metalnessMap.channel),roughnessMapUv:Q&&g(D.roughnessMap.channel),anisotropyMapUv:Me&&g(D.anisotropyMap.channel),clearcoatMapUv:ce&&g(D.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(D.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(D.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(D.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(D.sheenColorMap.channel),sheenRoughnessMapUv:We&&g(D.sheenRoughnessMap.channel),specularMapUv:qe&&g(D.specularMap.channel),specularColorMapUv:Ye&&g(D.specularColorMap.channel),specularIntensityMapUv:ot&&g(D.specularIntensityMap.channel),transmissionMapUv:ge&&g(D.transmissionMap.channel),thicknessMapUv:T&&g(D.thicknessMap.channel),alphaMapUv:ae&&g(D.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ge||J),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(ze||ae),fog:!!I,useFog:D.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:P.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:le,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:D.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:st,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ze&&D.map.isVideoTexture===!0&&Ke.getTransfer(D.map.colorSpace)===rt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ar,flipSided:D.side===tn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Qe&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Qe&&D.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return xt.vertexUv1s=x.has(1),xt.vertexUv2s=x.has(2),xt.vertexUv3s=x.has(3),x.clear(),xt}function d(D){const A=[];if(D.shaderID?A.push(D.shaderID):(A.push(D.customVertexShaderID),A.push(D.customFragmentShaderID)),D.defines!==void 0)for(const b in D.defines)A.push(b),A.push(D.defines[b]);return D.isRawShaderMaterial===!1&&(C(A,D),p(A,D),A.push(t.outputColorSpace)),A.push(D.customProgramCacheKey),A.join()}function C(D,A){D.push(A.precision),D.push(A.outputColorSpace),D.push(A.envMapMode),D.push(A.envMapCubeUVHeight),D.push(A.mapUv),D.push(A.alphaMapUv),D.push(A.lightMapUv),D.push(A.aoMapUv),D.push(A.bumpMapUv),D.push(A.normalMapUv),D.push(A.displacementMapUv),D.push(A.emissiveMapUv),D.push(A.metalnessMapUv),D.push(A.roughnessMapUv),D.push(A.anisotropyMapUv),D.push(A.clearcoatMapUv),D.push(A.clearcoatNormalMapUv),D.push(A.clearcoatRoughnessMapUv),D.push(A.iridescenceMapUv),D.push(A.iridescenceThicknessMapUv),D.push(A.sheenColorMapUv),D.push(A.sheenRoughnessMapUv),D.push(A.specularMapUv),D.push(A.specularColorMapUv),D.push(A.specularIntensityMapUv),D.push(A.transmissionMapUv),D.push(A.thicknessMapUv),D.push(A.combine),D.push(A.fogExp2),D.push(A.sizeAttenuation),D.push(A.morphTargetsCount),D.push(A.morphAttributeCount),D.push(A.numDirLights),D.push(A.numPointLights),D.push(A.numSpotLights),D.push(A.numSpotLightMaps),D.push(A.numHemiLights),D.push(A.numRectAreaLights),D.push(A.numDirLightShadows),D.push(A.numPointLightShadows),D.push(A.numSpotLightShadows),D.push(A.numSpotLightShadowsWithMaps),D.push(A.numLightProbes),D.push(A.shadowMapType),D.push(A.toneMapping),D.push(A.numClippingPlanes),D.push(A.numClipIntersection),D.push(A.depthPacking)}function p(D,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),D.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),D.push(a.mask)}function v(D){const A=E[D.type];let b;if(A){const L=Vn[A];b=jA.clone(L.uniforms)}else b=D.uniforms;return b}function F(D,A){let b;for(let L=0,P=u.length;L<P;L++){const I=u[L];if(I.cacheKey===A){b=I,++b.usedTimes;break}}return b===void 0&&(b=new sB(t,A,D,o),u.push(b)),b}function B(D){if(--D.usedTimes===0){const A=u.indexOf(D);u[A]=u[u.length-1],u.pop(),D.destroy()}}function _(D){l.remove(D)}function M(){l.dispose()}return{getParameters:h,getProgramCacheKey:d,getUniforms:v,acquireProgram:F,releaseProgram:B,releaseShaderCache:_,programs:u,dispose:M}}function uB(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function r(o,s,a){t.get(o)[s]=a}function i(){t=new WeakMap}return{get:e,remove:n,update:r,dispose:i}}function dB(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function zh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hh(){const t=[];let e=0;const n=[],r=[],i=[];function o(){e=0,n.length=0,r.length=0,i.length=0}function s(c,f,m,E,g,h){let d=t[e];return d===void 0?(d={id:c.id,object:c,geometry:f,material:m,groupOrder:E,renderOrder:c.renderOrder,z:g,group:h},t[e]=d):(d.id=c.id,d.object=c,d.geometry=f,d.material=m,d.groupOrder=E,d.renderOrder=c.renderOrder,d.z=g,d.group=h),e++,d}function a(c,f,m,E,g,h){const d=s(c,f,m,E,g,h);m.transmission>0?r.push(d):m.transparent===!0?i.push(d):n.push(d)}function l(c,f,m,E,g,h){const d=s(c,f,m,E,g,h);m.transmission>0?r.unshift(d):m.transparent===!0?i.unshift(d):n.unshift(d)}function x(c,f){n.length>1&&n.sort(c||dB),r.length>1&&r.sort(f||zh),i.length>1&&i.sort(f||zh)}function u(){for(let c=e,f=t.length;c<f;c++){const m=t[c];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:r,transparent:i,init:o,push:a,unshift:l,finish:u,sort:x}}function fB(){let t=new WeakMap;function e(r,i){const o=t.get(r);let s;return o===void 0?(s=new Hh,t.set(r,[s])):i>=o.length?(s=new Hh,o.push(s)):s=o[i],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function hB(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Ze};break;case"SpotLight":n={position:new j,direction:new j,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function pB(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mB=0;function EB(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gB(t){const e=new hB,n=pB(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let x=0;x<9;x++)r.probe.push(new j);const i=new j,o=new Bt,s=new Bt;function a(x,u){let c=0,f=0,m=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let E=0,g=0,h=0,d=0,C=0,p=0,v=0,F=0,B=0,_=0,M=0;x.sort(EB);const D=u===!0?Math.PI:1;for(let b=0,L=x.length;b<L;b++){const P=x[b],I=P.color,U=P.intensity,$=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=I.r*U*D,f+=I.g*U*D,m+=I.b*U*D;else if(P.isLightProbe){for(let R=0;R<9;R++)r.probe[R].addScaledVector(P.sh.coefficients[R],U);M++}else if(P.isDirectionalLight){const R=e.get(P);if(R.color.copy(P.color).multiplyScalar(P.intensity*D),P.castShadow){const z=P.shadow,H=n.get(P);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,r.directionalShadow[E]=H,r.directionalShadowMap[E]=W,r.directionalShadowMatrix[E]=P.shadow.matrix,p++}r.directional[E]=R,E++}else if(P.isSpotLight){const R=e.get(P);R.position.setFromMatrixPosition(P.matrixWorld),R.color.copy(I).multiplyScalar(U*D),R.distance=$,R.coneCos=Math.cos(P.angle),R.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),R.decay=P.decay,r.spot[h]=R;const z=P.shadow;if(P.map&&(r.spotLightMap[B]=P.map,B++,z.updateMatrices(P),P.castShadow&&_++),r.spotLightMatrix[h]=z.matrix,P.castShadow){const H=n.get(P);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,r.spotShadow[h]=H,r.spotShadowMap[h]=W,F++}h++}else if(P.isRectAreaLight){const R=e.get(P);R.color.copy(I).multiplyScalar(U),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),r.rectArea[d]=R,d++}else if(P.isPointLight){const R=e.get(P);if(R.color.copy(P.color).multiplyScalar(P.intensity*D),R.distance=P.distance,R.decay=P.decay,P.castShadow){const z=P.shadow,H=n.get(P);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,H.shadowCameraNear=z.camera.near,H.shadowCameraFar=z.camera.far,r.pointShadow[g]=H,r.pointShadowMap[g]=W,r.pointShadowMatrix[g]=P.shadow.matrix,v++}r.point[g]=R,g++}else if(P.isHemisphereLight){const R=e.get(P);R.skyColor.copy(P.color).multiplyScalar(U*D),R.groundColor.copy(P.groundColor).multiplyScalar(U*D),r.hemi[C]=R,C++}}d>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=f,r.ambient[2]=m;const A=r.hash;(A.directionalLength!==E||A.pointLength!==g||A.spotLength!==h||A.rectAreaLength!==d||A.hemiLength!==C||A.numDirectionalShadows!==p||A.numPointShadows!==v||A.numSpotShadows!==F||A.numSpotMaps!==B||A.numLightProbes!==M)&&(r.directional.length=E,r.spot.length=h,r.rectArea.length=d,r.point.length=g,r.hemi.length=C,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=F+B-_,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=M,A.directionalLength=E,A.pointLength=g,A.spotLength=h,A.rectAreaLength=d,A.hemiLength=C,A.numDirectionalShadows=p,A.numPointShadows=v,A.numSpotShadows=F,A.numSpotMaps=B,A.numLightProbes=M,r.version=mB++)}function l(x,u){let c=0,f=0,m=0,E=0,g=0;const h=u.matrixWorldInverse;for(let d=0,C=x.length;d<C;d++){const p=x[d];if(p.isDirectionalLight){const v=r.directional[c];v.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(h),c++}else if(p.isSpotLight){const v=r.spot[m];v.position.setFromMatrixPosition(p.matrixWorld),v.position.applyMatrix4(h),v.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(h),m++}else if(p.isRectAreaLight){const v=r.rectArea[E];v.position.setFromMatrixPosition(p.matrixWorld),v.position.applyMatrix4(h),s.identity(),o.copy(p.matrixWorld),o.premultiply(h),s.extractRotation(o),v.halfWidth.set(p.width*.5,0,0),v.halfHeight.set(0,p.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),E++}else if(p.isPointLight){const v=r.point[f];v.position.setFromMatrixPosition(p.matrixWorld),v.position.applyMatrix4(h),f++}else if(p.isHemisphereLight){const v=r.hemi[g];v.direction.setFromMatrixPosition(p.matrixWorld),v.direction.transformDirection(h),g++}}}return{setup:a,setupView:l,state:r}}function Vh(t){const e=new gB(t),n=[],r=[];function i(){n.length=0,r.length=0}function o(u){n.push(u)}function s(u){r.push(u)}function a(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:i,state:{lightsArray:n,shadowsArray:r,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function CB(t){let e=new WeakMap;function n(i,o=0){const s=e.get(i);let a;return s===void 0?(a=new Vh(t),e.set(i,[a])):o>=s.length?(a=new Vh(t),s.push(a)):a=s[o],a}function r(){e=new WeakMap}return{get:n,dispose:r}}class vB extends xl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AB extends xl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _B=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,BB=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function DB(t,e,n){let r=new o9;const i=new je,o=new je,s=new Rt,a=new vB({depthPacking:pA}),l=new AB,x={},u=n.maxTextureSize,c={[Qr]:tn,[tn]:Qr,[ar]:ar},f=new Jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:_B,fragmentShader:BB}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const E=new Ni;E.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Yn(E,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=UE;let d=this.type;this.render=function(B,_,M){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||B.length===0)return;const D=t.getRenderTarget(),A=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),L=t.state;L.setBlending(Yr),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const P=d!==ir&&this.type===ir,I=d===ir&&this.type!==ir;for(let U=0,$=B.length;U<$;U++){const W=B[U],R=W.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const z=R.getFrameExtents();if(i.multiply(z),o.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/z.x),i.x=o.x*z.x,R.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/z.y),i.y=o.y*z.y,R.mapSize.y=o.y)),R.map===null||P===!0||I===!0){const q=this.type!==ir?{minFilter:vn,magFilter:vn}:{};R.map!==null&&R.map.dispose(),R.map=new Ri(i.x,i.y,q),R.map.texture.name=W.name+".shadowMap",R.camera.updateProjectionMatrix()}t.setRenderTarget(R.map),t.clear();const H=R.getViewportCount();for(let q=0;q<H;q++){const le=R.getViewport(q);s.set(o.x*le.x,o.y*le.y,o.x*le.z,o.y*le.w),L.viewport(s),R.updateMatrices(W,q),r=R.getFrustum(),v(_,M,R.camera,W,this.type)}R.isPointLightShadow!==!0&&this.type===ir&&C(R,M),R.needsUpdate=!1}d=this.type,h.needsUpdate=!1,t.setRenderTarget(D,A,b)};function C(B,_){const M=e.update(g);f.defines.VSM_SAMPLES!==B.blurSamples&&(f.defines.VSM_SAMPLES=B.blurSamples,m.defines.VSM_SAMPLES=B.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ri(i.x,i.y)),f.uniforms.shadow_pass.value=B.map.texture,f.uniforms.resolution.value=B.mapSize,f.uniforms.radius.value=B.radius,t.setRenderTarget(B.mapPass),t.clear(),t.renderBufferDirect(_,null,M,f,g,null),m.uniforms.shadow_pass.value=B.mapPass.texture,m.uniforms.resolution.value=B.mapSize,m.uniforms.radius.value=B.radius,t.setRenderTarget(B.map),t.clear(),t.renderBufferDirect(_,null,M,m,g,null)}function p(B,_,M,D){let A=null;const b=M.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(b!==void 0)A=b;else if(A=M.isPointLight===!0?l:a,t.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){const L=A.uuid,P=_.uuid;let I=x[L];I===void 0&&(I={},x[L]=I);let U=I[P];U===void 0&&(U=A.clone(),I[P]=U,_.addEventListener("dispose",F)),A=U}if(A.visible=_.visible,A.wireframe=_.wireframe,D===ir?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:c[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const L=t.properties.get(A);L.light=M}return A}function v(B,_,M,D,A){if(B.visible===!1)return;if(B.layers.test(_.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&A===ir)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,B.matrixWorld);const P=e.update(B),I=B.material;if(Array.isArray(I)){const U=P.groups;for(let $=0,W=U.length;$<W;$++){const R=U[$],z=I[R.materialIndex];if(z&&z.visible){const H=p(B,z,D,A);B.onBeforeShadow(t,B,_,M,P,H,R),t.renderBufferDirect(M,null,P,H,B,R),B.onAfterShadow(t,B,_,M,P,H,R)}}}else if(I.visible){const U=p(B,I,D,A);B.onBeforeShadow(t,B,_,M,P,U,null),t.renderBufferDirect(M,null,P,U,B,null),B.onAfterShadow(t,B,_,M,P,U,null)}}const L=B.children;for(let P=0,I=L.length;P<I;P++)v(L[P],_,M,D,A)}function F(B){B.target.removeEventListener("dispose",F);for(const M in x){const D=x[M],A=B.target.uuid;A in D&&(D[A].dispose(),delete D[A])}}}function FB(t){function e(){let T=!1;const xe=new Rt;let ae=null;const Ce=new Rt(0,0,0,0);return{setMask:function(Be){ae!==Be&&!T&&(t.colorMask(Be,Be,Be,Be),ae=Be)},setLocked:function(Be){T=Be},setClear:function(Be,Qe,st,xt,kt){kt===!0&&(Be*=xt,Qe*=xt,st*=xt),xe.set(Be,Qe,st,xt),Ce.equals(xe)===!1&&(t.clearColor(Be,Qe,st,xt),Ce.copy(xe))},reset:function(){T=!1,ae=null,Ce.set(-1,0,0,0)}}}function n(){let T=!1,xe=null,ae=null,Ce=null;return{setTest:function(Be){Be?se(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(Be){xe!==Be&&!T&&(t.depthMask(Be),xe=Be)},setFunc:function(Be){if(ae!==Be){switch(Be){case Hv:t.depthFunc(t.NEVER);break;case Vv:t.depthFunc(t.ALWAYS);break;case Gv:t.depthFunc(t.LESS);break;case T0:t.depthFunc(t.LEQUAL);break;case Wv:t.depthFunc(t.EQUAL);break;case Xv:t.depthFunc(t.GEQUAL);break;case jv:t.depthFunc(t.GREATER);break;case Yv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Be}},setLocked:function(Be){T=Be},setClear:function(Be){Ce!==Be&&(t.clearDepth(Be),Ce=Be)},reset:function(){T=!1,xe=null,ae=null,Ce=null}}}function r(){let T=!1,xe=null,ae=null,Ce=null,Be=null,Qe=null,st=null,xt=null,kt=null;return{setTest:function(tt){T||(tt?se(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(tt){xe!==tt&&!T&&(t.stencilMask(tt),xe=tt)},setFunc:function(tt,Nn,Un){(ae!==tt||Ce!==Nn||Be!==Un)&&(t.stencilFunc(tt,Nn,Un),ae=tt,Ce=Nn,Be=Un)},setOp:function(tt,Nn,Un){(Qe!==tt||st!==Nn||xt!==Un)&&(t.stencilOp(tt,Nn,Un),Qe=tt,st=Nn,xt=Un)},setLocked:function(tt){T=tt},setClear:function(tt){kt!==tt&&(t.clearStencil(tt),kt=tt)},reset:function(){T=!1,xe=null,ae=null,Ce=null,Be=null,Qe=null,st=null,xt=null,kt=null}}}const i=new e,o=new n,s=new r,a=new WeakMap,l=new WeakMap;let x={},u={},c=new WeakMap,f=[],m=null,E=!1,g=null,h=null,d=null,C=null,p=null,v=null,F=null,B=new Ze(0,0,0),_=0,M=!1,D=null,A=null,b=null,L=null,P=null;const I=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,$=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),U=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),U=$>=2);let R=null,z={};const H=t.getParameter(t.SCISSOR_BOX),q=t.getParameter(t.VIEWPORT),le=new Rt().fromArray(H),ye=new Rt().fromArray(q);function k(T,xe,ae,Ce){const Be=new Uint8Array(4),Qe=t.createTexture();t.bindTexture(T,Qe),t.texParameteri(T,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(T,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<ae;st++)T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,Be):t.texImage2D(xe+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Be);return Qe}const ne={};ne[t.TEXTURE_2D]=k(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=k(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=k(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=k(t.TEXTURE_3D,t.TEXTURE_3D,1,1),i.setClear(0,0,0,1),o.setClear(1),s.setClear(0),se(t.DEPTH_TEST),o.setFunc(T0),Ae(!1),Ge(Df),se(t.CULL_FACE),_e(Yr);function se(T){x[T]!==!0&&(t.enable(T),x[T]=!0)}function re(T){x[T]!==!1&&(t.disable(T),x[T]=!1)}function we(T,xe){return u[T]!==xe?(t.bindFramebuffer(T,xe),u[T]=xe,T===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=xe),T===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function De(T,xe){let ae=f,Ce=!1;if(T){ae=c.get(xe),ae===void 0&&(ae=[],c.set(xe,ae));const Be=T.textures;if(ae.length!==Be.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let Qe=0,st=Be.length;Qe<st;Qe++)ae[Qe]=t.COLOR_ATTACHMENT0+Qe;ae.length=Be.length,Ce=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,Ce=!0);Ce&&t.drawBuffers(ae)}function ze(T){return m!==T?(t.useProgram(T),m=T,!0):!1}const O={[Ei]:t.FUNC_ADD,[Dv]:t.FUNC_SUBTRACT,[Fv]:t.FUNC_REVERSE_SUBTRACT};O[yv]=t.MIN,O[Sv]=t.MAX;const Ie={[Mv]:t.ZERO,[wv]:t.ONE,[Tv]:t.SRC_COLOR,[Mc]:t.SRC_ALPHA,[Nv]:t.SRC_ALPHA_SATURATE,[Lv]:t.DST_COLOR,[Rv]:t.DST_ALPHA,[Pv]:t.ONE_MINUS_SRC_COLOR,[wc]:t.ONE_MINUS_SRC_ALPHA,[kv]:t.ONE_MINUS_DST_COLOR,[bv]:t.ONE_MINUS_DST_ALPHA,[Uv]:t.CONSTANT_COLOR,[Iv]:t.ONE_MINUS_CONSTANT_COLOR,[Ov]:t.CONSTANT_ALPHA,[zv]:t.ONE_MINUS_CONSTANT_ALPHA};function _e(T,xe,ae,Ce,Be,Qe,st,xt,kt,tt){if(T===Yr){E===!0&&(re(t.BLEND),E=!1);return}if(E===!1&&(se(t.BLEND),E=!0),T!==Bv){if(T!==g||tt!==M){if((h!==Ei||p!==Ei)&&(t.blendEquation(t.FUNC_ADD),h=Ei,p=Ei),tt)switch(T){case Ao:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ff:t.blendFunc(t.ONE,t.ONE);break;case yf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Ao:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ff:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case yf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}d=null,C=null,v=null,F=null,B.set(0,0,0),_=0,g=T,M=tt}return}Be=Be||xe,Qe=Qe||ae,st=st||Ce,(xe!==h||Be!==p)&&(t.blendEquationSeparate(O[xe],O[Be]),h=xe,p=Be),(ae!==d||Ce!==C||Qe!==v||st!==F)&&(t.blendFuncSeparate(Ie[ae],Ie[Ce],Ie[Qe],Ie[st]),d=ae,C=Ce,v=Qe,F=st),(xt.equals(B)===!1||kt!==_)&&(t.blendColor(xt.r,xt.g,xt.b,kt),B.copy(xt),_=kt),g=T,M=!1}function et(T,xe){T.side===ar?re(t.CULL_FACE):se(t.CULL_FACE);let ae=T.side===tn;xe&&(ae=!ae),Ae(ae),T.blending===Ao&&T.transparent===!1?_e(Yr):_e(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),o.setFunc(T.depthFunc),o.setTest(T.depthTest),o.setMask(T.depthWrite),i.setMask(T.colorWrite);const Ce=T.stencilWrite;s.setTest(Ce),Ce&&(s.setMask(T.stencilWriteMask),s.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),s.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),y(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(T){D!==T&&(T?t.frontFace(t.CW):t.frontFace(t.CCW),D=T)}function Ge(T){T!==vv?(se(t.CULL_FACE),T!==A&&(T===Df?t.cullFace(t.BACK):T===Av?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),A=T}function w(T){T!==b&&(U&&t.lineWidth(T),b=T)}function y(T,xe,ae){T?(se(t.POLYGON_OFFSET_FILL),(L!==xe||P!==ae)&&(t.polygonOffset(xe,ae),L=xe,P=ae)):re(t.POLYGON_OFFSET_FILL)}function V(T){T?se(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function Q(T){T===void 0&&(T=t.TEXTURE0+I-1),R!==T&&(t.activeTexture(T),R=T)}function J(T,xe,ae){ae===void 0&&(R===null?ae=t.TEXTURE0+I-1:ae=R);let Ce=z[ae];Ce===void 0&&(Ce={type:void 0,texture:void 0},z[ae]=Ce),(Ce.type!==T||Ce.texture!==xe)&&(R!==ae&&(t.activeTexture(ae),R=ae),t.bindTexture(T,xe||ne[T]),Ce.type=T,Ce.texture=xe)}function ee(){const T=z[R];T!==void 0&&T.type!==void 0&&(t.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ve(){try{t.texSubImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Pe(){try{t.texStorage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function pe(){try{t.texStorage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function He(){try{t.texImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function We(T){le.equals(T)===!1&&(t.scissor(T.x,T.y,T.z,T.w),le.copy(T))}function qe(T){ye.equals(T)===!1&&(t.viewport(T.x,T.y,T.z,T.w),ye.copy(T))}function Ye(T,xe){let ae=l.get(xe);ae===void 0&&(ae=new WeakMap,l.set(xe,ae));let Ce=ae.get(T);Ce===void 0&&(Ce=t.getUniformBlockIndex(xe,T.name),ae.set(T,Ce))}function ot(T,xe){const Ce=l.get(xe).get(T);a.get(xe)!==Ce&&(t.uniformBlockBinding(xe,Ce,T.__bindingPointIndex),a.set(xe,Ce))}function ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),x={},R=null,z={},u={},c=new WeakMap,f=[],m=null,E=!1,g=null,h=null,d=null,C=null,p=null,v=null,F=null,B=new Ze(0,0,0),_=0,M=!1,D=null,A=null,b=null,L=null,P=null,le.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),i.reset(),o.reset(),s.reset()}return{buffers:{color:i,depth:o,stencil:s},enable:se,disable:re,bindFramebuffer:we,drawBuffers:De,useProgram:ze,setBlending:_e,setMaterial:et,setFlipSided:Ae,setCullFace:Ge,setLineWidth:w,setPolygonOffset:y,setScissorTest:V,activeTexture:Q,bindTexture:J,unbindTexture:ee,compressedTexImage2D:Se,compressedTexImage3D:ie,texImage2D:me,texImage3D:He,updateUBOMapping:Ye,uniformBlockBinding:ot,texStorage2D:Pe,texStorage3D:pe,texSubImage2D:ve,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:he,scissor:We,viewport:qe,reset:ge}}function yB(t,e,n,r,i,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new je,u=new WeakMap;let c;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,y){return m?new OffscreenCanvas(w,y):N0("canvas")}function g(w,y,V){let Q=1;const J=Ge(w);if((J.width>V||J.height>V)&&(Q=V/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ee=Math.floor(Q*J.width),Se=Math.floor(Q*J.height);c===void 0&&(c=E(ee,Se));const ie=y?E(ee,Se):c;return ie.width=ee,ie.height=Se,ie.getContext("2d").drawImage(w,0,0,ee,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ee+"x"+Se+")."),ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function h(w){return w.generateMipmaps&&w.minFilter!==vn&&w.minFilter!==Rn}function d(w){t.generateMipmap(w)}function C(w,y,V,Q,J=!1){if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ee=y;if(y===t.RED&&(V===t.FLOAT&&(ee=t.R32F),V===t.HALF_FLOAT&&(ee=t.R16F),V===t.UNSIGNED_BYTE&&(ee=t.R8)),y===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.R8UI),V===t.UNSIGNED_SHORT&&(ee=t.R16UI),V===t.UNSIGNED_INT&&(ee=t.R32UI),V===t.BYTE&&(ee=t.R8I),V===t.SHORT&&(ee=t.R16I),V===t.INT&&(ee=t.R32I)),y===t.RG&&(V===t.FLOAT&&(ee=t.RG32F),V===t.HALF_FLOAT&&(ee=t.RG16F),V===t.UNSIGNED_BYTE&&(ee=t.RG8)),y===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RG8UI),V===t.UNSIGNED_SHORT&&(ee=t.RG16UI),V===t.UNSIGNED_INT&&(ee=t.RG32UI),V===t.BYTE&&(ee=t.RG8I),V===t.SHORT&&(ee=t.RG16I),V===t.INT&&(ee=t.RG32I)),y===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),y===t.RGBA){const Se=J?R0:Ke.getTransfer(Q);V===t.FLOAT&&(ee=t.RGBA32F),V===t.HALF_FLOAT&&(ee=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ee=Se===rt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function p(w,y){return h(w)===!0||w.isFramebufferTexture&&w.minFilter!==vn&&w.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function v(w){const y=w.target;y.removeEventListener("dispose",v),B(y),y.isVideoTexture&&u.delete(y)}function F(w){const y=w.target;y.removeEventListener("dispose",F),M(y)}function B(w){const y=r.get(w);if(y.__webglInit===void 0)return;const V=w.source,Q=f.get(V);if(Q){const J=Q[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&_(w),Object.keys(Q).length===0&&f.delete(V)}r.remove(w)}function _(w){const y=r.get(w);t.deleteTexture(y.__webglTexture);const V=w.source,Q=f.get(V);delete Q[y.__cacheKey],s.memory.textures--}function M(w){const y=r.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let J=0;J<y.__webglFramebuffer[Q].length;J++)t.deleteFramebuffer(y.__webglFramebuffer[Q][J]);else t.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)t.deleteFramebuffer(y.__webglFramebuffer[Q]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=w.textures;for(let Q=0,J=V.length;Q<J;Q++){const ee=r.get(V[Q]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),s.memory.textures--),r.remove(V[Q])}r.remove(w)}let D=0;function A(){D=0}function b(){const w=D;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),D+=1,w}function L(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function P(w,y){const V=r.get(w);if(w.isVideoTexture&&et(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(V,w,y);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+y)}function I(w,y){const V=r.get(w);if(w.version>0&&V.__version!==w.version){le(V,w,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+y)}function U(w,y){const V=r.get(w);if(w.version>0&&V.__version!==w.version){le(V,w,y);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+y)}function $(w,y){const V=r.get(w);if(w.version>0&&V.__version!==w.version){ye(V,w,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+y)}const W={[Rc]:t.REPEAT,[_i]:t.CLAMP_TO_EDGE,[bc]:t.MIRRORED_REPEAT},R={[vn]:t.NEAREST,[rA]:t.NEAREST_MIPMAP_NEAREST,[ga]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[ql]:t.LINEAR_MIPMAP_NEAREST,[Bi]:t.LINEAR_MIPMAP_LINEAR},z={[gA]:t.NEVER,[DA]:t.ALWAYS,[CA]:t.LESS,[qE]:t.LEQUAL,[vA]:t.EQUAL,[BA]:t.GEQUAL,[AA]:t.GREATER,[_A]:t.NOTEQUAL};function H(w,y){if(y.type===Ur&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===ql||y.magFilter===ga||y.magFilter===Bi||y.minFilter===Rn||y.minFilter===ql||y.minFilter===ga||y.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,W[y.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,W[y.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,W[y.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,R[y.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,R[y.minFilter]),y.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,z[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===vn||y.minFilter!==ga&&y.minFilter!==Bi||y.type===Ur&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function q(w,y){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",v));const Q=y.source;let J=f.get(Q);J===void 0&&(J={},f.set(Q,J));const ee=L(y);if(ee!==w.__cacheKey){J[ee]===void 0&&(J[ee]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,V=!0),J[ee].usedTimes++;const Se=J[w.__cacheKey];Se!==void 0&&(J[w.__cacheKey].usedTimes--,Se.usedTimes===0&&_(y)),w.__cacheKey=ee,w.__webglTexture=J[ee].texture}return V}function le(w,y,V){let Q=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=t.TEXTURE_3D);const J=q(w,y),ee=y.source;n.bindTexture(Q,w.__webglTexture,t.TEXTURE0+V);const Se=r.get(ee);if(ee.version!==Se.__version||J===!0){n.activeTexture(t.TEXTURE0+V);const ie=Ke.getPrimaries(Ke.workingColorSpace),ve=y.colorSpace===br?null:Ke.getPrimaries(y.colorSpace),Me=y.colorSpace===br||ie===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ce=g(y.image,!1,i.maxTextureSize);ce=Ae(y,ce);const he=o.convert(y.format,y.colorSpace),Pe=o.convert(y.type);let pe=C(y.internalFormat,he,Pe,y.colorSpace,y.isVideoTexture);H(Q,y);let me;const He=y.mipmaps,We=y.isVideoTexture!==!0&&pe!==YE,qe=Se.__version===void 0||J===!0,Ye=ee.dataReady,ot=p(y,ce);if(y.isDepthTexture)pe=t.DEPTH_COMPONENT16,y.type===Ur?pe=t.DEPTH_COMPONENT32F:y.type===Lo?pe=t.DEPTH_COMPONENT24:y.type===qs&&(pe=t.DEPTH24_STENCIL8),qe&&(We?n.texStorage2D(t.TEXTURE_2D,1,pe,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,pe,ce.width,ce.height,0,he,Pe,null));else if(y.isDataTexture)if(He.length>0){We&&qe&&n.texStorage2D(t.TEXTURE_2D,ot,pe,He[0].width,He[0].height);for(let ge=0,T=He.length;ge<T;ge++)me=He[ge],We?Ye&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,me.width,me.height,he,Pe,me.data):n.texImage2D(t.TEXTURE_2D,ge,pe,me.width,me.height,0,he,Pe,me.data);y.generateMipmaps=!1}else We?(qe&&n.texStorage2D(t.TEXTURE_2D,ot,pe,ce.width,ce.height),Ye&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,he,Pe,ce.data)):n.texImage2D(t.TEXTURE_2D,0,pe,ce.width,ce.height,0,he,Pe,ce.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){We&&qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ot,pe,He[0].width,He[0].height,ce.depth);for(let ge=0,T=He.length;ge<T;ge++)me=He[ge],y.format!==jn?he!==null?We?Ye&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,me.width,me.height,ce.depth,he,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,pe,me.width,me.height,ce.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Ye&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,me.width,me.height,ce.depth,he,Pe,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,pe,me.width,me.height,ce.depth,0,he,Pe,me.data)}else{We&&qe&&n.texStorage2D(t.TEXTURE_2D,ot,pe,He[0].width,He[0].height);for(let ge=0,T=He.length;ge<T;ge++)me=He[ge],y.format!==jn?he!==null?We?Ye&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,me.width,me.height,he,me.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Ye&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,me.width,me.height,he,Pe,me.data):n.texImage2D(t.TEXTURE_2D,ge,pe,me.width,me.height,0,he,Pe,me.data)}else if(y.isDataArrayTexture)We?(qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ot,pe,ce.width,ce.height,ce.depth),Ye&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,he,Pe,ce.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,ce.width,ce.height,ce.depth,0,he,Pe,ce.data);else if(y.isData3DTexture)We?(qe&&n.texStorage3D(t.TEXTURE_3D,ot,pe,ce.width,ce.height,ce.depth),Ye&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,he,Pe,ce.data)):n.texImage3D(t.TEXTURE_3D,0,pe,ce.width,ce.height,ce.depth,0,he,Pe,ce.data);else if(y.isFramebufferTexture){if(qe)if(We)n.texStorage2D(t.TEXTURE_2D,ot,pe,ce.width,ce.height);else{let ge=ce.width,T=ce.height;for(let xe=0;xe<ot;xe++)n.texImage2D(t.TEXTURE_2D,xe,pe,ge,T,0,he,Pe,null),ge>>=1,T>>=1}}else if(He.length>0){if(We&&qe){const ge=Ge(He[0]);n.texStorage2D(t.TEXTURE_2D,ot,pe,ge.width,ge.height)}for(let ge=0,T=He.length;ge<T;ge++)me=He[ge],We?Ye&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,he,Pe,me):n.texImage2D(t.TEXTURE_2D,ge,pe,he,Pe,me);y.generateMipmaps=!1}else if(We){if(qe){const ge=Ge(ce);n.texStorage2D(t.TEXTURE_2D,ot,pe,ge.width,ge.height)}Ye&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Pe,ce)}else n.texImage2D(t.TEXTURE_2D,0,pe,he,Pe,ce);h(y)&&d(Q),Se.__version=ee.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ye(w,y,V){if(y.image.length!==6)return;const Q=q(w,y),J=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+V);const ee=r.get(J);if(J.version!==ee.__version||Q===!0){n.activeTexture(t.TEXTURE0+V);const Se=Ke.getPrimaries(Ke.workingColorSpace),ie=y.colorSpace===br?null:Ke.getPrimaries(y.colorSpace),ve=y.colorSpace===br||Se===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Me=y.isCompressedTexture||y.image[0].isCompressedTexture,ce=y.image[0]&&y.image[0].isDataTexture,he=[];for(let T=0;T<6;T++)!Me&&!ce?he[T]=g(y.image[T],!0,i.maxCubemapSize):he[T]=ce?y.image[T].image:y.image[T],he[T]=Ae(y,he[T]);const Pe=he[0],pe=o.convert(y.format,y.colorSpace),me=o.convert(y.type),He=C(y.internalFormat,pe,me,y.colorSpace),We=y.isVideoTexture!==!0,qe=ee.__version===void 0||Q===!0,Ye=J.dataReady;let ot=p(y,Pe);H(t.TEXTURE_CUBE_MAP,y);let ge;if(Me){We&&qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ot,He,Pe.width,Pe.height);for(let T=0;T<6;T++){ge=he[T].mipmaps;for(let xe=0;xe<ge.length;xe++){const ae=ge[xe];y.format!==jn?pe!==null?We?Ye&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,xe,0,0,ae.width,ae.height,pe,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,xe,He,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,xe,0,0,ae.width,ae.height,pe,me,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,xe,He,ae.width,ae.height,0,pe,me,ae.data)}}}else{if(ge=y.mipmaps,We&&qe){ge.length>0&&ot++;const T=Ge(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ot,He,T.width,T.height)}for(let T=0;T<6;T++)if(ce){We?Ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,he[T].width,he[T].height,pe,me,he[T].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,He,he[T].width,he[T].height,0,pe,me,he[T].data);for(let xe=0;xe<ge.length;xe++){const Ce=ge[xe].image[T].image;We?Ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,xe+1,0,0,Ce.width,Ce.height,pe,me,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,xe+1,He,Ce.width,Ce.height,0,pe,me,Ce.data)}}else{We?Ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,pe,me,he[T]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,He,pe,me,he[T]);for(let xe=0;xe<ge.length;xe++){const ae=ge[xe];We?Ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,xe+1,0,0,pe,me,ae.image[T]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,xe+1,He,pe,me,ae.image[T])}}}h(y)&&d(t.TEXTURE_CUBE_MAP),ee.__version=J.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function k(w,y,V,Q,J,ee){const Se=o.convert(V.format,V.colorSpace),ie=o.convert(V.type),ve=C(V.internalFormat,Se,ie,V.colorSpace);if(!r.get(y).__hasExternalTextures){const ce=Math.max(1,y.width>>ee),he=Math.max(1,y.height>>ee);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ee,ve,ce,he,y.depth,0,Se,ie,null):n.texImage2D(J,ee,ve,ce,he,0,Se,ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),_e(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,J,r.get(V).__webglTexture,0,Ie(y)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,J,r.get(V).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(w,y,V){if(t.bindRenderbuffer(t.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let Q=t.DEPTH_COMPONENT24;if(V||_e(y)){const J=y.depthTexture;J&&J.isDepthTexture&&(J.type===Ur?Q=t.DEPTH_COMPONENT32F:J.type===Lo&&(Q=t.DEPTH_COMPONENT24));const ee=Ie(y);_e(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,Q,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,Q,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,Q,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){const Q=Ie(y);V&&_e(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,y.width,y.height):_e(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,w)}else{const Q=y.textures;for(let J=0;J<Q.length;J++){const ee=Q[J],Se=o.convert(ee.format,ee.colorSpace),ie=o.convert(ee.type),ve=C(ee.internalFormat,Se,ie,ee.colorSpace),Me=Ie(y);V&&_e(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,ve,y.width,y.height):_e(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,ve,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ve,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function se(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),P(y.depthTexture,0);const Q=r.get(y.depthTexture).__webglTexture,J=Ie(y);if(y.depthTexture.format===_o)_e(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Os)_e(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function re(w){const y=r.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");se(y.__webglFramebuffer,w)}else if(V){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]=t.createRenderbuffer(),ne(y.__webglDepthbuffer[Q],w,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),ne(y.__webglDepthbuffer,w,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(w,y,V){const Q=r.get(w);y!==void 0&&k(Q.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&re(w)}function De(w){const y=w.texture,V=r.get(w),Q=r.get(y);w.addEventListener("dispose",F);const J=w.textures,ee=w.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=y.version,s.memory.textures++),ee){V.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[ie]=[];for(let ve=0;ve<y.mipmaps.length;ve++)V.__webglFramebuffer[ie][ve]=t.createFramebuffer()}else V.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)V.__webglFramebuffer[ie]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ie=0,ve=J.length;ie<ve;ie++){const Me=r.get(J[ie]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),s.memory.textures++)}if(w.samples>0&&_e(w)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ie=0;ie<J.length;ie++){const ve=J[ie];V.__webglColorRenderbuffer[ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[ie]);const Me=o.convert(ve.format,ve.colorSpace),ce=o.convert(ve.type),he=C(ve.internalFormat,Me,ce,ve.colorSpace,w.isXRRenderTarget===!0),Pe=Ie(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,he,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,V.__webglColorRenderbuffer[ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),ne(V.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),H(t.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)k(V.__webglFramebuffer[ie][ve],w,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve);else k(V.__webglFramebuffer[ie],w,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);h(y)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ie=0,ve=J.length;ie<ve;ie++){const Me=J[ie],ce=r.get(Me);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),H(t.TEXTURE_2D,Me),k(V.__webglFramebuffer,w,Me,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,0),h(Me)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ie=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,Q.__webglTexture),H(ie,y),y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)k(V.__webglFramebuffer[ve],w,y,t.COLOR_ATTACHMENT0,ie,ve);else k(V.__webglFramebuffer,w,y,t.COLOR_ATTACHMENT0,ie,0);h(y)&&d(ie),n.unbindTexture()}w.depthBuffer&&re(w)}function ze(w){const y=w.textures;for(let V=0,Q=y.length;V<Q;V++){const J=y[V];if(h(J)){const ee=w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=r.get(J).__webglTexture;n.bindTexture(ee,Se),d(ee),n.unbindTexture()}}}function O(w){if(w.samples>0&&_e(w)===!1){const y=w.textures,V=w.width,Q=w.height;let J=t.COLOR_BUFFER_BIT;const ee=[],Se=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=r.get(w),ve=y.length>1;if(ve)for(let Me=0;Me<y.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let Me=0;Me<y.length;Me++){ee.push(t.COLOR_ATTACHMENT0+Me),w.depthBuffer&&ee.push(Se);const ce=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(ce===!1&&(w.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&ie.__isTransmissionRenderTarget!==!0&&(J|=t.STENCIL_BUFFER_BIT)),ve&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ie.__webglColorRenderbuffer[Me]),ce===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Se]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Se])),ve){const he=r.get(y[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,V,Q,0,0,V,Q,J,t.NEAREST),l&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Me=0;Me<y.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,ie.__webglColorRenderbuffer[Me]);const ce=r.get(y[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function Ie(w){return Math.min(i.maxSamples,w.samples)}function _e(w){const y=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function et(w){const y=s.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function Ae(w,y){const V=w.colorSpace,Q=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==ii&&V!==br&&(Ke.getTransfer(V)===rt?(Q!==jn||J!==$r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function Ge(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(x.width=w.naturalWidth||w.width,x.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(x.width=w.displayWidth,x.height=w.displayHeight):(x.width=w.width,x.height=w.height),x}this.allocateTextureUnit=b,this.resetTextureUnits=A,this.setTexture2D=P,this.setTexture2DArray=I,this.setTexture3D=U,this.setTextureCube=$,this.rebindTextures=we,this.setupRenderTarget=De,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=k,this.useMultisampledRTT=_e}function SB(t,e){function n(r,i=br){let o;const s=Ke.getTransfer(i);if(r===$r)return t.UNSIGNED_BYTE;if(r===VE)return t.UNSIGNED_SHORT_4_4_4_4;if(r===GE)return t.UNSIGNED_SHORT_5_5_5_1;if(r===sA)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===iA)return t.BYTE;if(r===oA)return t.SHORT;if(r===zE)return t.UNSIGNED_SHORT;if(r===HE)return t.INT;if(r===Lo)return t.UNSIGNED_INT;if(r===Ur)return t.FLOAT;if(r===P0)return t.HALF_FLOAT;if(r===aA)return t.ALPHA;if(r===lA)return t.RGB;if(r===jn)return t.RGBA;if(r===xA)return t.LUMINANCE;if(r===cA)return t.LUMINANCE_ALPHA;if(r===_o)return t.DEPTH_COMPONENT;if(r===Os)return t.DEPTH_STENCIL;if(r===uA)return t.RED;if(r===WE)return t.RED_INTEGER;if(r===dA)return t.RG;if(r===XE)return t.RG_INTEGER;if(r===jE)return t.RGBA_INTEGER;if(r===$l||r===Kl||r===Zl||r===Ql)if(s===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===$l)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ql)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===$l)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ql)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mf||r===wf||r===Tf||r===Pf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Mf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===YE)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rf||r===bf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Rf)return s===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===bf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Lf||r===kf||r===Nf||r===Uf||r===If||r===Of||r===zf||r===Hf||r===Vf||r===Gf||r===Wf||r===Xf||r===jf||r===Yf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Lf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Uf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===If)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Of)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jl||r===qf||r===$f)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Jl)return s===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$f)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===fA||r===Kf||r===Zf||r===Qf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Jl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Kf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qs?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}class MB extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class za extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wB={type:"move"};class yx{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,o=null,s=null;const a=this._targetRay,l=this._grip,x=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(x&&e.hand){s=!0;for(const g of e.hand.values()){const h=n.getJointPose(g,r),d=this._getHandJoint(x,g);h!==null&&(d.matrix.fromArray(h.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=h.radius),d.visible=h!==null}const u=x.joints["index-finger-tip"],c=x.joints["thumb-tip"],f=u.position.distanceTo(c.position),m=.02,E=.005;x.inputState.pinching&&f>m+E?(x.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!x.inputState.pinching&&f<=m-E&&(x.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,r),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wB)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),x!==null&&(x.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new za;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const TB=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PB=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RB{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const i=new nn,o=e.properties.get(i);o.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}render(e,n){if(this.texture!==null){if(this.mesh===null){const r=n.cameras[0].viewport,i=new Jr({vertexShader:TB,fragmentShader:PB,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Yn(new cl(20,20),i)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class bB extends Ho{constructor(e,n){super();const r=this;let i=null,o=1,s=null,a="local-floor",l=1,x=null,u=null,c=null,f=null,m=null,E=null;const g=new RB,h=n.getContextAttributes();let d=null,C=null;const p=[],v=[],F=new je;let B=null;const _=new gn;_.layers.enable(1),_.viewport=new Rt;const M=new gn;M.layers.enable(2),M.viewport=new Rt;const D=[_,M],A=new MB;A.layers.enable(1),A.layers.enable(2);let b=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ne=p[k];return ne===void 0&&(ne=new yx,p[k]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(k){let ne=p[k];return ne===void 0&&(ne=new yx,p[k]=ne),ne.getGripSpace()},this.getHand=function(k){let ne=p[k];return ne===void 0&&(ne=new yx,p[k]=ne),ne.getHandSpace()};function P(k){const ne=v.indexOf(k.inputSource);if(ne===-1)return;const se=p[ne];se!==void 0&&(se.update(k.inputSource,k.frame,x||s),se.dispatchEvent({type:k.type,data:k.inputSource}))}function I(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",U);for(let k=0;k<p.length;k++){const ne=v[k];ne!==null&&(v[k]=null,p[k].disconnect(ne))}b=null,L=null,g.reset(),e.setRenderTarget(d),m=null,f=null,c=null,i=null,C=null,ye.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){o=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return x||s},this.setReferenceSpace=function(k){x=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return c},this.getFrame=function(){return E},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",I),i.addEventListener("inputsourceschange",U),h.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(F),i.renderState.layers===void 0){const ne={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(i,n,ne),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new Ri(m.framebufferWidth,m.framebufferHeight,{format:jn,type:$r,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let ne=null,se=null,re=null;h.depth&&(re=h.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=h.stencil?Os:_o,se=h.stencil?qs:Lo);const we={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:o};c=new XRWebGLBinding(i,n),f=c.createProjectionLayer(we),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),C=new Ri(f.textureWidth,f.textureHeight,{format:jn,type:$r,depthTexture:new a9(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0});const De=e.properties.get(C);De.__ignoreDepthValues=f.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(l),x=null,s=await i.requestReferenceSpace(a),ye.setContext(i),ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(k){for(let ne=0;ne<k.removed.length;ne++){const se=k.removed[ne],re=v.indexOf(se);re>=0&&(v[re]=null,p[re].disconnect(se))}for(let ne=0;ne<k.added.length;ne++){const se=k.added[ne];let re=v.indexOf(se);if(re===-1){for(let De=0;De<p.length;De++)if(De>=v.length){v.push(se),re=De;break}else if(v[De]===null){v[De]=se,re=De;break}if(re===-1)break}const we=p[re];we&&we.connect(se)}}const $=new j,W=new j;function R(k,ne,se){$.setFromMatrixPosition(ne.matrixWorld),W.setFromMatrixPosition(se.matrixWorld);const re=$.distanceTo(W),we=ne.projectionMatrix.elements,De=se.projectionMatrix.elements,ze=we[14]/(we[10]-1),O=we[14]/(we[10]+1),Ie=(we[9]+1)/we[5],_e=(we[9]-1)/we[5],et=(we[8]-1)/we[0],Ae=(De[8]+1)/De[0],Ge=ze*et,w=ze*Ae,y=re/(-et+Ae),V=y*-et;ne.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(V),k.translateZ(y),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Q=ze+y,J=O+y,ee=Ge-V,Se=w+(re-V),ie=Ie*O/J*Q,ve=_e*O/J*Q;k.projectionMatrix.makePerspective(ee,Se,ie,ve,Q,J),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function z(k,ne){ne===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ne.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;g.texture!==null&&(k.near=g.depthNear,k.far=g.depthFar),A.near=M.near=_.near=k.near,A.far=M.far=_.far=k.far,(b!==A.near||L!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),b=A.near,L=A.far,_.near=b,_.far=L,M.near=b,M.far=L,_.updateProjectionMatrix(),M.updateProjectionMatrix(),k.updateProjectionMatrix());const ne=k.parent,se=A.cameras;z(A,ne);for(let re=0;re<se.length;re++)z(se[re],ne);se.length===2?R(A,_,M):A.projectionMatrix.copy(_.projectionMatrix),H(k,A,ne)};function H(k,ne,se){se===null?k.matrix.copy(ne.matrixWorld):(k.matrix.copy(se.matrixWorld),k.matrix.invert(),k.matrix.multiply(ne.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ne.projectionMatrix),k.projectionMatrixInverse.copy(ne.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Lc*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null};let q=null;function le(k,ne){if(u=ne.getViewerPose(x||s),E=ne,u!==null){const se=u.views;m!==null&&(e.setRenderTargetFramebuffer(C,m.framebuffer),e.setRenderTarget(C));let re=!1;se.length!==A.cameras.length&&(A.cameras.length=0,re=!0);for(let De=0;De<se.length;De++){const ze=se[De];let O=null;if(m!==null)O=m.getViewport(ze);else{const _e=c.getViewSubImage(f,ze);O=_e.viewport,De===0&&(e.setRenderTargetTextures(C,_e.colorTexture,f.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(C))}let Ie=D[De];Ie===void 0&&(Ie=new gn,Ie.layers.enable(De),Ie.viewport=new Rt,D[De]=Ie),Ie.matrix.fromArray(ze.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ze.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(O.x,O.y,O.width,O.height),De===0&&(A.matrix.copy(Ie.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),re===!0&&A.cameras.push(Ie)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")){const De=c.getDepthInformation(se[0]);De&&De.isValid&&De.texture&&g.init(e,De,i.renderState)}}for(let se=0;se<p.length;se++){const re=v[se],we=p[se];re!==null&&we!==void 0&&we.update(re,ne,x||s)}g.render(e,A),q&&q(k,ne),ne.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ne}),E=null}const ye=new s9;ye.setAnimationLoop(le),this.setAnimationLoop=function(k){q=k},this.dispose=function(){}}}const di=new gr,LB=new Bt;function kB(t,e){function n(h,d){h.matrixAutoUpdate===!0&&h.updateMatrix(),d.value.copy(h.matrix)}function r(h,d){d.color.getRGB(h.fogColor.value,n9(t)),d.isFog?(h.fogNear.value=d.near,h.fogFar.value=d.far):d.isFogExp2&&(h.fogDensity.value=d.density)}function i(h,d,C,p,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(h,d):d.isMeshToonMaterial?(o(h,d),c(h,d)):d.isMeshPhongMaterial?(o(h,d),u(h,d)):d.isMeshStandardMaterial?(o(h,d),f(h,d),d.isMeshPhysicalMaterial&&m(h,d,v)):d.isMeshMatcapMaterial?(o(h,d),E(h,d)):d.isMeshDepthMaterial?o(h,d):d.isMeshDistanceMaterial?(o(h,d),g(h,d)):d.isMeshNormalMaterial?o(h,d):d.isLineBasicMaterial?(s(h,d),d.isLineDashedMaterial&&a(h,d)):d.isPointsMaterial?l(h,d,C,p):d.isSpriteMaterial?x(h,d):d.isShadowMaterial?(h.color.value.copy(d.color),h.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(h,d){h.opacity.value=d.opacity,d.color&&h.diffuse.value.copy(d.color),d.emissive&&h.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(h.map.value=d.map,n(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,n(d.alphaMap,h.alphaMapTransform)),d.bumpMap&&(h.bumpMap.value=d.bumpMap,n(d.bumpMap,h.bumpMapTransform),h.bumpScale.value=d.bumpScale,d.side===tn&&(h.bumpScale.value*=-1)),d.normalMap&&(h.normalMap.value=d.normalMap,n(d.normalMap,h.normalMapTransform),h.normalScale.value.copy(d.normalScale),d.side===tn&&h.normalScale.value.negate()),d.displacementMap&&(h.displacementMap.value=d.displacementMap,n(d.displacementMap,h.displacementMapTransform),h.displacementScale.value=d.displacementScale,h.displacementBias.value=d.displacementBias),d.emissiveMap&&(h.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,h.emissiveMapTransform)),d.specularMap&&(h.specularMap.value=d.specularMap,n(d.specularMap,h.specularMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest);const C=e.get(d),p=C.envMap,v=C.envMapRotation;if(p&&(h.envMap.value=p,di.copy(v),di.x*=-1,di.y*=-1,di.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),h.envMapRotation.value.setFromMatrix4(LB.makeRotationFromEuler(di)),h.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=d.reflectivity,h.ior.value=d.ior,h.refractionRatio.value=d.refractionRatio),d.lightMap){h.lightMap.value=d.lightMap;const F=t._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=d.lightMapIntensity*F,n(d.lightMap,h.lightMapTransform)}d.aoMap&&(h.aoMap.value=d.aoMap,h.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,h.aoMapTransform))}function s(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,d.map&&(h.map.value=d.map,n(d.map,h.mapTransform))}function a(h,d){h.dashSize.value=d.dashSize,h.totalSize.value=d.dashSize+d.gapSize,h.scale.value=d.scale}function l(h,d,C,p){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.size.value=d.size*C,h.scale.value=p*.5,d.map&&(h.map.value=d.map,n(d.map,h.uvTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,n(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function x(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.rotation.value=d.rotation,d.map&&(h.map.value=d.map,n(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,n(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function u(h,d){h.specular.value.copy(d.specular),h.shininess.value=Math.max(d.shininess,1e-4)}function c(h,d){d.gradientMap&&(h.gradientMap.value=d.gradientMap)}function f(h,d){h.metalness.value=d.metalness,d.metalnessMap&&(h.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,h.metalnessMapTransform)),h.roughness.value=d.roughness,d.roughnessMap&&(h.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,h.roughnessMapTransform)),d.envMap&&(h.envMapIntensity.value=d.envMapIntensity)}function m(h,d,C){h.ior.value=d.ior,d.sheen>0&&(h.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),h.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(h.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,h.sheenColorMapTransform)),d.sheenRoughnessMap&&(h.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,h.sheenRoughnessMapTransform))),d.clearcoat>0&&(h.clearcoat.value=d.clearcoat,h.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(h.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,h.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(h.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===tn&&h.clearcoatNormalScale.value.negate())),d.iridescence>0&&(h.iridescence.value=d.iridescence,h.iridescenceIOR.value=d.iridescenceIOR,h.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(h.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,h.iridescenceMapTransform)),d.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),d.transmission>0&&(h.transmission.value=d.transmission,h.transmissionSamplerMap.value=C.texture,h.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(h.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,h.transmissionMapTransform)),h.thickness.value=d.thickness,d.thicknessMap&&(h.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=d.attenuationDistance,h.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(h.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(h.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=d.specularIntensity,h.specularColor.value.copy(d.specularColor),d.specularColorMap&&(h.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,h.specularColorMapTransform)),d.specularIntensityMap&&(h.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,h.specularIntensityMapTransform))}function E(h,d){d.matcap&&(h.matcap.value=d.matcap)}function g(h,d){const C=e.get(d).light;h.referencePosition.value.setFromMatrixPosition(C.matrixWorld),h.nearDistance.value=C.shadow.camera.near,h.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function NB(t,e,n,r){let i={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,p){const v=p.program;r.uniformBlockBinding(C,v)}function x(C,p){let v=i[C.id];v===void 0&&(E(C),v=u(C),i[C.id]=v,C.addEventListener("dispose",h));const F=p.program;r.updateUBOMapping(C,F);const B=e.render.frame;o[C.id]!==B&&(f(C),o[C.id]=B)}function u(C){const p=c();C.__bindingPointIndex=p;const v=t.createBuffer(),F=C.__size,B=C.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,F,B),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,p,v),v}function c(){for(let C=0;C<a;C++)if(s.indexOf(C)===-1)return s.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const p=i[C.id],v=C.uniforms,F=C.__cache;t.bindBuffer(t.UNIFORM_BUFFER,p);for(let B=0,_=v.length;B<_;B++){const M=Array.isArray(v[B])?v[B]:[v[B]];for(let D=0,A=M.length;D<A;D++){const b=M[D];if(m(b,B,D,F)===!0){const L=b.__offset,P=Array.isArray(b.value)?b.value:[b.value];let I=0;for(let U=0;U<P.length;U++){const $=P[U],W=g($);typeof $=="number"||typeof $=="boolean"?(b.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,L+I,b.__data)):$.isMatrix3?(b.__data[0]=$.elements[0],b.__data[1]=$.elements[1],b.__data[2]=$.elements[2],b.__data[3]=0,b.__data[4]=$.elements[3],b.__data[5]=$.elements[4],b.__data[6]=$.elements[5],b.__data[7]=0,b.__data[8]=$.elements[6],b.__data[9]=$.elements[7],b.__data[10]=$.elements[8],b.__data[11]=0):($.toArray(b.__data,I),I+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(C,p,v,F){const B=C.value,_=p+"_"+v;if(F[_]===void 0)return typeof B=="number"||typeof B=="boolean"?F[_]=B:F[_]=B.clone(),!0;{const M=F[_];if(typeof B=="number"||typeof B=="boolean"){if(M!==B)return F[_]=B,!0}else if(M.equals(B)===!1)return M.copy(B),!0}return!1}function E(C){const p=C.uniforms;let v=0;const F=16;for(let _=0,M=p.length;_<M;_++){const D=Array.isArray(p[_])?p[_]:[p[_]];for(let A=0,b=D.length;A<b;A++){const L=D[A],P=Array.isArray(L.value)?L.value:[L.value];for(let I=0,U=P.length;I<U;I++){const $=P[I],W=g($),R=v%F;R!==0&&F-R<W.boundary&&(v+=F-R),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=W.storage}}}const B=v%F;return B>0&&(v+=F-B),C.__size=v,C.__cache={},this}function g(C){const p={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(p.boundary=4,p.storage=4):C.isVector2?(p.boundary=8,p.storage=8):C.isVector3||C.isColor?(p.boundary=16,p.storage=12):C.isVector4?(p.boundary=16,p.storage=16):C.isMatrix3?(p.boundary=48,p.storage=48):C.isMatrix4?(p.boundary=64,p.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),p}function h(C){const p=C.target;p.removeEventListener("dispose",h);const v=s.indexOf(p.__bindingPointIndex);s.splice(v,1),t.deleteBuffer(i[p.id]),delete i[p.id],delete o[p.id]}function d(){for(const C in i)t.deleteBuffer(i[C]);s=[],i={},o={}}return{bind:l,update:x,dispose:d}}class UB{constructor(e={}){const{canvas:n=yA(),context:r=null,depth:i=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:x=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let f;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=r.getContextAttributes().alpha}else f=s;const m=new Uint32Array(4),E=new Int32Array(4);let g=null,h=null;const d=[],C=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this._useLegacyLights=!1,this.toneMapping=qr,this.toneMappingExposure=1;const p=this;let v=!1,F=0,B=0,_=null,M=-1,D=null;const A=new Rt,b=new Rt;let L=null;const P=new Ze(0);let I=0,U=n.width,$=n.height,W=1,R=null,z=null;const H=new Rt(0,0,U,$),q=new Rt(0,0,U,$);let le=!1;const ye=new o9;let k=!1,ne=!1;const se=new Bt,re=new je,we=new j,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return _===null?W:1}let O=r;function Ie(S,N){const X=n.getContext(S,N);return X!==null?X:null}try{const S={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:x,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Cv}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",ae,!1),n.addEventListener("webglcontextcreationerror",Ce,!1),O===null){const N="webgl2";if(O=Ie(N,S),O===null)throw Ie(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let _e,et,Ae,Ge,w,y,V,Q,J,ee,Se,ie,ve,Me,ce,he,Pe,pe,me,He,We,qe,Ye,ot;function ge(){_e=new X5(O),_e.init(),et=new I5(O,_e,e),qe=new SB(O,_e),Ae=new FB(O),Ge=new q5(O),w=new uB,y=new yB(O,_e,Ae,w,et,qe,Ge),V=new z5(p),Q=new W5(p),J=new JA(O),Ye=new N5(O,J),ee=new j5(O,J,Ge,Ye),Se=new K5(O,ee,J,Ge),me=new $5(O,et,y),he=new O5(w),ie=new cB(p,V,Q,_e,et,Ye,he),ve=new kB(p,w),Me=new fB,ce=new CB(_e),pe=new k5(p,V,Q,Ae,Se,f,l),Pe=new DB(p,Se,et),ot=new NB(O,Ge,et,Ae),He=new U5(O,_e,Ge),We=new Y5(O,_e,Ge),Ge.programs=ie.programs,p.capabilities=et,p.extensions=_e,p.properties=w,p.renderLists=Me,p.shadowMap=Pe,p.state=Ae,p.info=Ge}ge();const T=new bB(p,O);this.xr=T,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const S=_e.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=_e.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(U,$,!1))},this.getSize=function(S){return S.set(U,$)},this.setSize=function(S,N,X=!0){if(T.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=S,$=N,n.width=Math.floor(S*W),n.height=Math.floor(N*W),X===!0&&(n.style.width=S+"px",n.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(U*W,$*W).floor()},this.setDrawingBufferSize=function(S,N,X){U=S,$=N,W=X,n.width=Math.floor(S*X),n.height=Math.floor(N*X),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(H)},this.setViewport=function(S,N,X,Y){S.isVector4?H.set(S.x,S.y,S.z,S.w):H.set(S,N,X,Y),Ae.viewport(A.copy(H).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(q)},this.setScissor=function(S,N,X,Y){S.isVector4?q.set(S.x,S.y,S.z,S.w):q.set(S,N,X,Y),Ae.scissor(b.copy(q).multiplyScalar(W).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(S){Ae.setScissorTest(le=S)},this.setOpaqueSort=function(S){R=S},this.setTransparentSort=function(S){z=S},this.getClearColor=function(S){return S.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(S=!0,N=!0,X=!0){let Y=0;if(S){let G=!1;if(_!==null){const de=_.texture.format;G=de===jE||de===XE||de===WE}if(G){const de=_.texture.type,Ee=de===$r||de===Lo||de===zE||de===qs||de===VE||de===GE,Fe=pe.getClearColor(),Te=pe.getClearAlpha(),be=Fe.r,Re=Fe.g,Le=Fe.b;Ee?(m[0]=be,m[1]=Re,m[2]=Le,m[3]=Te,O.clearBufferuiv(O.COLOR,0,m)):(E[0]=be,E[1]=Re,E[2]=Le,E[3]=Te,O.clearBufferiv(O.COLOR,0,E))}else Y|=O.COLOR_BUFFER_BIT}N&&(Y|=O.DEPTH_BUFFER_BIT),X&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",ae,!1),n.removeEventListener("webglcontextcreationerror",Ce,!1),Me.dispose(),ce.dispose(),w.dispose(),V.dispose(),Q.dispose(),Se.dispose(),Ye.dispose(),ot.dispose(),ie.dispose(),T.dispose(),T.removeEventListener("sessionstart",Nn),T.removeEventListener("sessionend",Un),oi.stop()};function xe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const S=Ge.autoReset,N=Pe.enabled,X=Pe.autoUpdate,Y=Pe.needsUpdate,G=Pe.type;ge(),Ge.autoReset=S,Pe.enabled=N,Pe.autoUpdate=X,Pe.needsUpdate=Y,Pe.type=G}function Ce(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Be(S){const N=S.target;N.removeEventListener("dispose",Be),Qe(N)}function Qe(S){st(S),w.remove(S)}function st(S){const N=w.get(S).programs;N!==void 0&&(N.forEach(function(X){ie.releaseProgram(X)}),S.isShaderMaterial&&ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,X,Y,G,de){N===null&&(N=De);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,Fe=h9(S,N,X,Y,G);Ae.setMaterial(Y,Ee);let Te=X.index,be=1;if(Y.wireframe===!0){if(Te=ee.getWireframeAttribute(X),Te===void 0)return;be=2}const Re=X.drawRange,Le=X.attributes.position;let mt=Re.start*be,rn=(Re.start+Re.count)*be;de!==null&&(mt=Math.max(mt,de.start*be),rn=Math.min(rn,(de.start+de.count)*be)),Te!==null?(mt=Math.max(mt,0),rn=Math.min(rn,Te.count)):Le!=null&&(mt=Math.max(mt,0),rn=Math.min(rn,Le.count));const yt=rn-mt;if(yt<0||yt===1/0)return;Ye.setup(G,Y,Fe,X,Te);let Qn,ct=He;if(Te!==null&&(Qn=J.get(Te),ct=We,ct.setIndex(Qn)),G.isMesh)Y.wireframe===!0?(Ae.setLineWidth(Y.wireframeLinewidth*ze()),ct.setMode(O.LINES)):ct.setMode(O.TRIANGLES);else if(G.isLine){let ke=Y.linewidth;ke===void 0&&(ke=1),Ae.setLineWidth(ke*ze()),G.isLineSegments?ct.setMode(O.LINES):G.isLineLoop?ct.setMode(O.LINE_LOOP):ct.setMode(O.LINE_STRIP)}else G.isPoints?ct.setMode(O.POINTS):G.isSprite&&ct.setMode(O.TRIANGLES);if(G.isBatchedMesh)ct.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ct.renderInstances(mt,yt,G.count);else if(X.isInstancedBufferGeometry){const ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,dl=Math.min(X.instanceCount,ke);ct.renderInstances(mt,yt,dl)}else ct.render(mt,yt)};function xt(S,N,X){S.transparent===!0&&S.side===ar&&S.forceSinglePass===!1?(S.side=tn,S.needsUpdate=!0,Js(S,N,X),S.side=Qr,S.needsUpdate=!0,Js(S,N,X),S.side=ar):Js(S,N,X)}this.compile=function(S,N,X=null){X===null&&(X=S),h=ce.get(X),h.init(),C.push(h),X.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),S!==X&&S.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights(p._useLegacyLights);const Y=new Set;return S.traverse(function(G){const de=G.material;if(de)if(Array.isArray(de))for(let Ee=0;Ee<de.length;Ee++){const Fe=de[Ee];xt(Fe,X,G),Y.add(Fe)}else xt(de,X,G),Y.add(de)}),C.pop(),h=null,Y},this.compileAsync=function(S,N,X=null){const Y=this.compile(S,N,X);return new Promise(G=>{function de(){if(Y.forEach(function(Ee){w.get(Ee).currentProgram.isReady()&&Y.delete(Ee)}),Y.size===0){G(S);return}setTimeout(de,10)}_e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let kt=null;function tt(S){kt&&kt(S)}function Nn(){oi.stop()}function Un(){oi.start()}const oi=new s9;oi.setAnimationLoop(tt),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(S){kt=S,T.setAnimationLoop(S),S===null?oi.stop():oi.start()},T.addEventListener("sessionstart",Nn),T.addEventListener("sessionend",Un),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),T.enabled===!0&&T.isPresenting===!0&&(T.cameraAutoUpdate===!0&&T.updateCamera(N),N=T.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,N,_),h=ce.get(S,C.length),h.init(),C.push(h),se.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ye.setFromProjectionMatrix(se),ne=this.localClippingEnabled,k=he.init(this.clippingPlanes,ne),g=Me.get(S,d.length),g.init(),d.push(g),Vu(S,N,0,p.sortObjects),g.finish(),p.sortObjects===!0&&g.sort(R,z),this.info.render.frame++,k===!0&&he.beginShadows();const X=h.state.shadowsArray;if(Pe.render(X,S,N),k===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(T.enabled===!1||T.isPresenting===!1||T.hasDepthSensing()===!1)&&pe.render(g,S),h.setupLights(p._useLegacyLights),N.isArrayCamera){const Y=N.cameras;for(let G=0,de=Y.length;G<de;G++){const Ee=Y[G];Gu(g,S,Ee,Ee.viewport)}}else Gu(g,S,N);_!==null&&(y.updateMultisampleRenderTarget(_),y.updateRenderTargetMipmap(_)),S.isScene===!0&&S.onAfterRender(p,S,N),Ye.resetDefaultState(),M=-1,D=null,C.pop(),C.length>0?h=C[C.length-1]:h=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Vu(S,N,X,Y){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ye.intersectsSprite(S)){Y&&we.setFromMatrixPosition(S.matrixWorld).applyMatrix4(se);const Ee=Se.update(S),Fe=S.material;Fe.visible&&g.push(S,Ee,Fe,X,we.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ye.intersectsObject(S))){const Ee=Se.update(S),Fe=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),we.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),we.copy(Ee.boundingSphere.center)),we.applyMatrix4(S.matrixWorld).applyMatrix4(se)),Array.isArray(Fe)){const Te=Ee.groups;for(let be=0,Re=Te.length;be<Re;be++){const Le=Te[be],mt=Fe[Le.materialIndex];mt&&mt.visible&&g.push(S,Ee,mt,X,we.z,Le)}}else Fe.visible&&g.push(S,Ee,Fe,X,we.z,null)}}const de=S.children;for(let Ee=0,Fe=de.length;Ee<Fe;Ee++)Vu(de[Ee],N,X,Y)}function Gu(S,N,X,Y){const G=S.opaque,de=S.transmissive,Ee=S.transparent;h.setupLightsView(X),k===!0&&he.setGlobalState(p.clippingPlanes,X),de.length>0&&f9(G,de,N,X),Y&&Ae.viewport(A.copy(Y)),G.length>0&&Qs(G,N,X),de.length>0&&Qs(de,N,X),Ee.length>0&&Qs(Ee,N,X),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function f9(S,N,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(h.state.transmissionRenderTarget===null){h.state.transmissionRenderTarget=new Ri(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?P0:$r,minFilter:Bi,samples:4,stencilBuffer:o});const be=w.get(h.state.transmissionRenderTarget);be.__isTransmissionRenderTarget=!0}const de=h.state.transmissionRenderTarget;p.getDrawingBufferSize(re),de.setSize(re.x,re.y);const Ee=p.getRenderTarget();p.setRenderTarget(de),p.getClearColor(P),I=p.getClearAlpha(),I<1&&p.setClearColor(16777215,.5),p.clear();const Fe=p.toneMapping;p.toneMapping=qr,Qs(S,X,Y),y.updateMultisampleRenderTarget(de),y.updateRenderTargetMipmap(de);let Te=!1;for(let be=0,Re=N.length;be<Re;be++){const Le=N[be],mt=Le.object,rn=Le.geometry,yt=Le.material,Qn=Le.group;if(yt.side===ar&&mt.layers.test(Y.layers)){const ct=yt.side;yt.side=tn,yt.needsUpdate=!0,Wu(mt,X,Y,rn,yt,Qn),yt.side=ct,yt.needsUpdate=!0,Te=!0}}Te===!0&&(y.updateMultisampleRenderTarget(de),y.updateRenderTargetMipmap(de)),p.setRenderTarget(Ee),p.setClearColor(P,I),p.toneMapping=Fe}function Qs(S,N,X){const Y=N.isScene===!0?N.overrideMaterial:null;for(let G=0,de=S.length;G<de;G++){const Ee=S[G],Fe=Ee.object,Te=Ee.geometry,be=Y===null?Ee.material:Y,Re=Ee.group;Fe.layers.test(X.layers)&&Wu(Fe,N,X,Te,be,Re)}}function Wu(S,N,X,Y,G,de){S.onBeforeRender(p,N,X,Y,G,de),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(p,N,X,Y,S,de),G.transparent===!0&&G.side===ar&&G.forceSinglePass===!1?(G.side=tn,G.needsUpdate=!0,p.renderBufferDirect(X,N,Y,G,S,de),G.side=Qr,G.needsUpdate=!0,p.renderBufferDirect(X,N,Y,G,S,de),G.side=ar):p.renderBufferDirect(X,N,Y,G,S,de),S.onAfterRender(p,N,X,Y,G,de)}function Js(S,N,X){N.isScene!==!0&&(N=De);const Y=w.get(S),G=h.state.lights,de=h.state.shadowsArray,Ee=G.state.version,Fe=ie.getParameters(S,G.state,de,N,X),Te=ie.getProgramCacheKey(Fe);let be=Y.programs;Y.environment=S.isMeshStandardMaterial?N.environment:null,Y.fog=N.fog,Y.envMap=(S.isMeshStandardMaterial?Q:V).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,be===void 0&&(S.addEventListener("dispose",Be),be=new Map,Y.programs=be);let Re=be.get(Te);if(Re!==void 0){if(Y.currentProgram===Re&&Y.lightsStateVersion===Ee)return ju(S,Fe),Re}else Fe.uniforms=ie.getUniforms(S),S.onBuild(X,Fe,p),S.onBeforeCompile(Fe,p),Re=ie.acquireProgram(Fe,Te),be.set(Te,Re),Y.uniforms=Fe.uniforms;const Le=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=he.uniform),ju(S,Fe),Y.needsLights=m9(S),Y.lightsStateVersion=Ee,Y.needsLights&&(Le.ambientLightColor.value=G.state.ambient,Le.lightProbe.value=G.state.probe,Le.directionalLights.value=G.state.directional,Le.directionalLightShadows.value=G.state.directionalShadow,Le.spotLights.value=G.state.spot,Le.spotLightShadows.value=G.state.spotShadow,Le.rectAreaLights.value=G.state.rectArea,Le.ltc_1.value=G.state.rectAreaLTC1,Le.ltc_2.value=G.state.rectAreaLTC2,Le.pointLights.value=G.state.point,Le.pointLightShadows.value=G.state.pointShadow,Le.hemisphereLights.value=G.state.hemi,Le.directionalShadowMap.value=G.state.directionalShadowMap,Le.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Le.spotShadowMap.value=G.state.spotShadowMap,Le.spotLightMatrix.value=G.state.spotLightMatrix,Le.spotLightMap.value=G.state.spotLightMap,Le.pointShadowMap.value=G.state.pointShadowMap,Le.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Re,Y.uniformsList=null,Re}function Xu(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=n0.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function ju(S,N){const X=w.get(S);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function h9(S,N,X,Y,G){N.isScene!==!0&&(N=De),y.resetTextureUnits();const de=N.fog,Ee=Y.isMeshStandardMaterial?N.environment:null,Fe=_===null?p.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:ii,Te=(Y.isMeshStandardMaterial?Q:V).get(Y.envMap||Ee),be=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Re=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!X.morphAttributes.position,mt=!!X.morphAttributes.normal,rn=!!X.morphAttributes.color;let yt=qr;Y.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(yt=p.toneMapping);const Qn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ct=Qn!==void 0?Qn.length:0,ke=w.get(Y),dl=h.state.lights;if(k===!0&&(ne===!0||S!==D)){const hn=S===D&&Y.id===M;he.setState(Y,S,hn)}let at=!1;Y.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==dl.state.version||ke.outputColorSpace!==Fe||G.isBatchedMesh&&ke.batching===!1||!G.isBatchedMesh&&ke.batching===!0||G.isInstancedMesh&&ke.instancing===!1||!G.isInstancedMesh&&ke.instancing===!0||G.isSkinnedMesh&&ke.skinning===!1||!G.isSkinnedMesh&&ke.skinning===!0||G.isInstancedMesh&&ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ke.instancingMorph===!1&&G.morphTexture!==null||ke.envMap!==Te||Y.fog===!0&&ke.fog!==de||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==he.numPlanes||ke.numIntersection!==he.numIntersection)||ke.vertexAlphas!==be||ke.vertexTangents!==Re||ke.morphTargets!==Le||ke.morphNormals!==mt||ke.morphColors!==rn||ke.toneMapping!==yt||ke.morphTargetsCount!==ct)&&(at=!0):(at=!0,ke.__version=Y.version);let si=ke.currentProgram;at===!0&&(si=Js(Y,N,G));let Yu=!1,Wo=!1,fl=!1;const Nt=si.getUniforms(),vr=ke.uniforms;if(Ae.useProgram(si.program)&&(Yu=!0,Wo=!0,fl=!0),Y.id!==M&&(M=Y.id,Wo=!0),Yu||D!==S){Nt.setValue(O,"projectionMatrix",S.projectionMatrix),Nt.setValue(O,"viewMatrix",S.matrixWorldInverse);const hn=Nt.map.cameraPosition;hn!==void 0&&hn.setValue(O,we.setFromMatrixPosition(S.matrixWorld)),et.logarithmicDepthBuffer&&Nt.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Nt.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),D!==S&&(D=S,Wo=!0,fl=!0)}if(G.isSkinnedMesh){Nt.setOptional(O,G,"bindMatrix"),Nt.setOptional(O,G,"bindMatrixInverse");const hn=G.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Nt.setValue(O,"boneTexture",hn.boneTexture,y))}G.isBatchedMesh&&(Nt.setOptional(O,G,"batchingTexture"),Nt.setValue(O,"batchingTexture",G._matricesTexture,y));const hl=X.morphAttributes;if((hl.position!==void 0||hl.normal!==void 0||hl.color!==void 0)&&me.update(G,X,si),(Wo||ke.receiveShadow!==G.receiveShadow)&&(ke.receiveShadow=G.receiveShadow,Nt.setValue(O,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(vr.envMap.value=Te,vr.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&N.environment!==null&&(vr.envMapIntensity.value=N.environmentIntensity),Wo&&(Nt.setValue(O,"toneMappingExposure",p.toneMappingExposure),ke.needsLights&&p9(vr,fl),de&&Y.fog===!0&&ve.refreshFogUniforms(vr,de),ve.refreshMaterialUniforms(vr,Y,W,$,h.state.transmissionRenderTarget),n0.upload(O,Xu(ke),vr,y)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(n0.upload(O,Xu(ke),vr,y),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Nt.setValue(O,"center",G.center),Nt.setValue(O,"modelViewMatrix",G.modelViewMatrix),Nt.setValue(O,"normalMatrix",G.normalMatrix),Nt.setValue(O,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const hn=Y.uniformsGroups;for(let pl=0,E9=hn.length;pl<E9;pl++){const qu=hn[pl];ot.update(qu,si),ot.bind(qu,si)}}return si}function p9(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function m9(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(S,N,X){w.get(S.texture).__webglTexture=N,w.get(S.depthTexture).__webglTexture=X;const Y=w.get(S);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const X=w.get(S);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,X=0){_=S,F=N,B=X;let Y=!0,G=null,de=!1,Ee=!1;if(S){const Te=w.get(S);Te.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1):Te.__webglFramebuffer===void 0?y.setupRenderTarget(S):Te.__hasExternalTextures&&y.rebindTextures(S,w.get(S.texture).__webglTexture,w.get(S.depthTexture).__webglTexture);const be=S.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(Ee=!0);const Re=w.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[N])?G=Re[N][X]:G=Re[N],de=!0):S.samples>0&&y.useMultisampledRTT(S)===!1?G=w.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?G=Re[X]:G=Re,A.copy(S.viewport),b.copy(S.scissor),L=S.scissorTest}else A.copy(H).multiplyScalar(W).floor(),b.copy(q).multiplyScalar(W).floor(),L=le;if(Ae.bindFramebuffer(O.FRAMEBUFFER,G)&&Y&&Ae.drawBuffers(S,G),Ae.viewport(A),Ae.scissor(b),Ae.setScissorTest(L),de){const Te=w.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Te.__webglTexture,X)}else if(Ee){const Te=w.get(S.texture),be=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Te.__webglTexture,X||0,be)}M=-1},this.readRenderTargetPixels=function(S,N,X,Y,G,de,Ee){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=w.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Fe=Fe[Ee]),Fe){Ae.bindFramebuffer(O.FRAMEBUFFER,Fe);try{const Te=S.texture,be=Te.format,Re=Te.type;if(be!==jn&&qe.convert(be)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===P0&&(_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float"));if(Re!==$r&&qe.convert(Re)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&Re!==Ur&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-Y&&X>=0&&X<=S.height-G&&O.readPixels(N,X,Y,G,qe.convert(be),qe.convert(Re),de)}finally{const Te=_!==null?w.get(_).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(S,N,X=0){const Y=Math.pow(2,-X),G=Math.floor(N.image.width*Y),de=Math.floor(N.image.height*Y);y.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,S.x,S.y,G,de),Ae.unbindTexture()},this.copyTextureToTexture=function(S,N,X,Y=0){const G=N.image.width,de=N.image.height,Ee=qe.convert(X.format),Fe=qe.convert(X.type);y.setTexture2D(X,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Y,S.x,S.y,G,de,Ee,Fe,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Y,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,Ee,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,Y,S.x,S.y,Ee,Fe,N.image),Y===0&&X.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(S,N,X,Y,G=0){const de=Math.round(S.max.x-S.min.x),Ee=Math.round(S.max.y-S.min.y),Fe=S.max.z-S.min.z+1,Te=qe.convert(Y.format),be=qe.convert(Y.type);let Re;if(Y.isData3DTexture)y.setTexture3D(Y,0),Re=O.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)y.setTexture2DArray(Y,0),Re=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const Le=O.getParameter(O.UNPACK_ROW_LENGTH),mt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),rn=O.getParameter(O.UNPACK_SKIP_PIXELS),yt=O.getParameter(O.UNPACK_SKIP_ROWS),Qn=O.getParameter(O.UNPACK_SKIP_IMAGES),ct=X.isCompressedTexture?X.mipmaps[G]:X.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ct.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,S.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,S.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,S.min.z),X.isDataTexture||X.isData3DTexture?O.texSubImage3D(Re,G,N.x,N.y,N.z,de,Ee,Fe,Te,be,ct.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(Re,G,N.x,N.y,N.z,de,Ee,Fe,Te,ct.data):O.texSubImage3D(Re,G,N.x,N.y,N.z,de,Ee,Fe,Te,be,ct),O.pixelStorei(O.UNPACK_ROW_LENGTH,Le),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,rn),O.pixelStorei(O.UNPACK_SKIP_ROWS,yt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Qn),G===0&&Y.generateMipmaps&&O.generateMipmap(Re),Ae.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?y.setTextureCube(S,0):S.isData3DTexture?y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?y.setTexture2DArray(S,0):y.setTexture2D(S,0),Ae.unbindTexture()},this.resetState=function(){F=0,B=0,_=null,Ae.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Iu?"display-p3":"srgb",n.unpackColorSpace=Ke.workingColorSpace===ll?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class IB extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gr,this.environmentIntensity=1,this.environmentRotation=new gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const OB=()=>{const t=oe.useRef(),e=oe.useRef(),n=oe.useRef();oe.useEffect(()=>{const i=new IB;n.current=new gn(75,window.innerWidth/window.innerHeight,.1,1e3),e.current=new UB({antialias:!0}),e.current.setSize(400,350),e.current.setClearColor(16777215),t.current.appendChild(e.current.domElement);const o=new Vo,s=new zu({color:65280}),a=new Yn(o,s);i.add(a),a.position.set(0,0,0),n.current.position.z=5;const l=()=>{requestAnimationFrame(l),a.rotation.x+=.01,a.rotation.y+=.01,e.current.render(i,n.current)};l(),window.addEventListener("resize",r);const x=setTimeout(()=>{window.location.replace("/orders")},3e3);return()=>{window.removeEventListener("resize",r),clearTimeout(x),i.remove(a),o.dispose(),s.dispose(),e.current.dispose()}},[]);const r=()=>{const i=window.innerWidth,o=window.innerHeight;e.current.setSize(i,o),e.current.setPixelRatio(window.devicePixelRatio),n.current.aspect=i/o,n.current.updateProjectionMatrix()};return K.jsx("div",{ref:t})},zB=()=>K.jsx(K.Fragment,{children:K.jsxs(I1,{children:[K.jsx(On,{path:"/",element:K.jsx(dv,{})}),K.jsx(On,{path:"register",element:K.jsx(Yl,{})}),K.jsx(On,{path:"login",element:K.jsx(Yl,{})}),K.jsx(On,{path:"logout",element:K.jsx(Yl,{})}),K.jsx(On,{path:"/cart",element:K.jsx(fv,{})}),K.jsx(On,{path:"/add",element:K.jsx(mv,{})}),K.jsx(On,{path:"/orders",element:K.jsx(Ev,{})}),K.jsx(On,{path:"/order/:id",element:K.jsx(gv,{})}),K.jsx(On,{path:"/animation",element:K.jsx(OB,{})})]})});Sx.createRoot(document.getElementById("content")).render(K.jsxs(Jh.StrictMode,{children:[K.jsx(qg,{}),K.jsx("div",{className:"mt-5",children:K.jsx(X1,{children:K.jsx(zB,{})})})]}));
