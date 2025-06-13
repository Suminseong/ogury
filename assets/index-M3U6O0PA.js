(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function kw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cg={exports:{}},gu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function eA(){if(c_)return gu;c_=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,s,l){var h=null;if(l!==void 0&&(h=""+l),s.key!==void 0&&(h=""+s.key),"key"in s){l={};for(var d in s)d!=="key"&&(l[d]=s[d])}else l=s;return s=l.ref,{$$typeof:t,type:a,key:h,ref:s!==void 0?s:null,props:l}}return gu.Fragment=e,gu.jsx=n,gu.jsxs=n,gu}var h_;function tA(){return h_||(h_=1,cg.exports=eA()),cg.exports}var v=tA(),hg={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function nA(){if(f_)return Oe;f_=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function b(P){return P===null||typeof P!="object"?null:(P=E&&P[E]||P["@@iterator"],typeof P=="function"?P:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,z={};function k(P,te,ue){this.props=P,this.context=te,this.refs=z,this.updater=ue||C}k.prototype.isReactComponent={},k.prototype.setState=function(P,te){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,te,"setState")},k.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function V(){}V.prototype=k.prototype;function B(P,te,ue){this.props=P,this.context=te,this.refs=z,this.updater=ue||C}var K=B.prototype=new V;K.constructor=B,O(K,k.prototype),K.isPureReactComponent=!0;var J=Array.isArray,re={H:null,A:null,T:null,S:null,V:null},ce=Object.prototype.hasOwnProperty;function D(P,te,ue,se,pe,Ee){return ue=Ee.ref,{$$typeof:t,type:P,key:te,ref:ue!==void 0?ue:null,props:Ee}}function A(P,te){return D(P.type,te,void 0,void 0,void 0,P.props)}function I(P){return typeof P=="object"&&P!==null&&P.$$typeof===t}function j(P){var te={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ue){return te[ue]})}var U=/\/+/g;function H(P,te){return typeof P=="object"&&P!==null&&P.key!=null?j(""+P.key):te.toString(36)}function M(){}function et(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(M,M):(P.status="pending",P.then(function(te){P.status==="pending"&&(P.status="fulfilled",P.value=te)},function(te){P.status==="pending"&&(P.status="rejected",P.reason=te)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function Xe(P,te,ue,se,pe){var Ee=typeof P;(Ee==="undefined"||Ee==="boolean")&&(P=null);var ye=!1;if(P===null)ye=!0;else switch(Ee){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(P.$$typeof){case t:case e:ye=!0;break;case _:return ye=P._init,Xe(ye(P._payload),te,ue,se,pe)}}if(ye)return pe=pe(P),ye=se===""?"."+H(P,0):se,J(pe)?(ue="",ye!=null&&(ue=ye.replace(U,"$&/")+"/"),Xe(pe,te,ue,"",function(lt){return lt})):pe!=null&&(I(pe)&&(pe=A(pe,ue+(pe.key==null||P&&P.key===pe.key?"":(""+pe.key).replace(U,"$&/")+"/")+ye)),te.push(pe)),1;ye=0;var tt=se===""?".":se+":";if(J(P))for(var Pe=0;Pe<P.length;Pe++)se=P[Pe],Ee=tt+H(se,Pe),ye+=Xe(se,te,ue,Ee,pe);else if(Pe=b(P),typeof Pe=="function")for(P=Pe.call(P),Pe=0;!(se=P.next()).done;)se=se.value,Ee=tt+H(se,Pe++),ye+=Xe(se,te,ue,Ee,pe);else if(Ee==="object"){if(typeof P.then=="function")return Xe(et(P),te,ue,se,pe);throw te=String(P),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return ye}function W(P,te,ue){if(P==null)return P;var se=[],pe=0;return Xe(P,se,"","",function(Ee){return te.call(ue,Ee,pe++)}),se}function he(P){if(P._status===-1){var te=P._result;te=te(),te.then(function(ue){(P._status===0||P._status===-1)&&(P._status=1,P._result=ue)},function(ue){(P._status===0||P._status===-1)&&(P._status=2,P._result=ue)}),P._status===-1&&(P._status=0,P._result=te)}if(P._status===1)return P._result.default;throw P._result}var le=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function me(){}return Oe.Children={map:W,forEach:function(P,te,ue){W(P,function(){te.apply(this,arguments)},ue)},count:function(P){var te=0;return W(P,function(){te++}),te},toArray:function(P){return W(P,function(te){return te})||[]},only:function(P){if(!I(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Oe.Component=k,Oe.Fragment=n,Oe.Profiler=s,Oe.PureComponent=B,Oe.StrictMode=a,Oe.Suspense=g,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(P){return re.H.useMemoCache(P)}},Oe.cache=function(P){return function(){return P.apply(null,arguments)}},Oe.cloneElement=function(P,te,ue){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var se=O({},P.props),pe=P.key,Ee=void 0;if(te!=null)for(ye in te.ref!==void 0&&(Ee=void 0),te.key!==void 0&&(pe=""+te.key),te)!ce.call(te,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&te.ref===void 0||(se[ye]=te[ye]);var ye=arguments.length-2;if(ye===1)se.children=ue;else if(1<ye){for(var tt=Array(ye),Pe=0;Pe<ye;Pe++)tt[Pe]=arguments[Pe+2];se.children=tt}return D(P.type,pe,void 0,void 0,Ee,se)},Oe.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:l,_context:P},P},Oe.createElement=function(P,te,ue){var se,pe={},Ee=null;if(te!=null)for(se in te.key!==void 0&&(Ee=""+te.key),te)ce.call(te,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(pe[se]=te[se]);var ye=arguments.length-2;if(ye===1)pe.children=ue;else if(1<ye){for(var tt=Array(ye),Pe=0;Pe<ye;Pe++)tt[Pe]=arguments[Pe+2];pe.children=tt}if(P&&P.defaultProps)for(se in ye=P.defaultProps,ye)pe[se]===void 0&&(pe[se]=ye[se]);return D(P,Ee,void 0,void 0,null,pe)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(P){return{$$typeof:d,render:P}},Oe.isValidElement=I,Oe.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:he}},Oe.memo=function(P,te){return{$$typeof:m,type:P,compare:te===void 0?null:te}},Oe.startTransition=function(P){var te=re.T,ue={};re.T=ue;try{var se=P(),pe=re.S;pe!==null&&pe(ue,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(me,le)}catch(Ee){le(Ee)}finally{re.T=te}},Oe.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},Oe.use=function(P){return re.H.use(P)},Oe.useActionState=function(P,te,ue){return re.H.useActionState(P,te,ue)},Oe.useCallback=function(P,te){return re.H.useCallback(P,te)},Oe.useContext=function(P){return re.H.useContext(P)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(P,te){return re.H.useDeferredValue(P,te)},Oe.useEffect=function(P,te,ue){var se=re.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(P,te)},Oe.useId=function(){return re.H.useId()},Oe.useImperativeHandle=function(P,te,ue){return re.H.useImperativeHandle(P,te,ue)},Oe.useInsertionEffect=function(P,te){return re.H.useInsertionEffect(P,te)},Oe.useLayoutEffect=function(P,te){return re.H.useLayoutEffect(P,te)},Oe.useMemo=function(P,te){return re.H.useMemo(P,te)},Oe.useOptimistic=function(P,te){return re.H.useOptimistic(P,te)},Oe.useReducer=function(P,te,ue){return re.H.useReducer(P,te,ue)},Oe.useRef=function(P){return re.H.useRef(P)},Oe.useState=function(P){return re.H.useState(P)},Oe.useSyncExternalStore=function(P,te,ue){return re.H.useSyncExternalStore(P,te,ue)},Oe.useTransition=function(){return re.H.useTransition()},Oe.version="19.1.0",Oe}var d_;function Lm(){return d_||(d_=1,hg.exports=nA()),hg.exports}var F=Lm();const Cs=kw(F);var fg={exports:{}},mu={},dg={exports:{}},pg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function rA(){return p_||(p_=1,function(t){function e(W,he){var le=W.length;W.push(he);e:for(;0<le;){var me=le-1>>>1,P=W[me];if(0<s(P,he))W[me]=he,W[le]=P,le=me;else break e}}function n(W){return W.length===0?null:W[0]}function a(W){if(W.length===0)return null;var he=W[0],le=W.pop();if(le!==he){W[0]=le;e:for(var me=0,P=W.length,te=P>>>1;me<te;){var ue=2*(me+1)-1,se=W[ue],pe=ue+1,Ee=W[pe];if(0>s(se,le))pe<P&&0>s(Ee,se)?(W[me]=Ee,W[pe]=le,me=pe):(W[me]=se,W[ue]=le,me=ue);else if(pe<P&&0>s(Ee,le))W[me]=Ee,W[pe]=le,me=pe;else break e}}return he}function s(W,he){var le=W.sortIndex-he.sortIndex;return le!==0?le:W.id-he.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var h=Date,d=h.now();t.unstable_now=function(){return h.now()-d}}var g=[],m=[],_=1,E=null,b=3,C=!1,O=!1,z=!1,k=!1,V=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function J(W){for(var he=n(m);he!==null;){if(he.callback===null)a(m);else if(he.startTime<=W)a(m),he.sortIndex=he.expirationTime,e(g,he);else break;he=n(m)}}function re(W){if(z=!1,J(W),!O)if(n(g)!==null)O=!0,ce||(ce=!0,H());else{var he=n(m);he!==null&&Xe(re,he.startTime-W)}}var ce=!1,D=-1,A=5,I=-1;function j(){return k?!0:!(t.unstable_now()-I<A)}function U(){if(k=!1,ce){var W=t.unstable_now();I=W;var he=!0;try{e:{O=!1,z&&(z=!1,B(D),D=-1),C=!0;var le=b;try{t:{for(J(W),E=n(g);E!==null&&!(E.expirationTime>W&&j());){var me=E.callback;if(typeof me=="function"){E.callback=null,b=E.priorityLevel;var P=me(E.expirationTime<=W);if(W=t.unstable_now(),typeof P=="function"){E.callback=P,J(W),he=!0;break t}E===n(g)&&a(g),J(W)}else a(g);E=n(g)}if(E!==null)he=!0;else{var te=n(m);te!==null&&Xe(re,te.startTime-W),he=!1}}break e}finally{E=null,b=le,C=!1}he=void 0}}finally{he?H():ce=!1}}}var H;if(typeof K=="function")H=function(){K(U)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,et=M.port2;M.port1.onmessage=U,H=function(){et.postMessage(null)}}else H=function(){V(U,0)};function Xe(W,he){D=V(function(){W(t.unstable_now())},he)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(W){switch(b){case 1:case 2:case 3:var he=3;break;default:he=b}var le=b;b=he;try{return W()}finally{b=le}},t.unstable_requestPaint=function(){k=!0},t.unstable_runWithPriority=function(W,he){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var le=b;b=W;try{return he()}finally{b=le}},t.unstable_scheduleCallback=function(W,he,le){var me=t.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?me+le:me):le=me,W){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=le+P,W={id:_++,callback:he,priorityLevel:W,startTime:le,expirationTime:P,sortIndex:-1},le>me?(W.sortIndex=le,e(m,W),n(g)===null&&W===n(m)&&(z?(B(D),D=-1):z=!0,Xe(re,le-me))):(W.sortIndex=P,e(g,W),O||C||(O=!0,ce||(ce=!0,H()))),W},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(W){var he=b;return function(){var le=b;b=he;try{return W.apply(this,arguments)}finally{b=le}}}}(pg)),pg}var g_;function iA(){return g_||(g_=1,dg.exports=rA()),dg.exports}var gg={exports:{}},mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function aA(){if(m_)return mn;m_=1;var t=Lm();function e(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(g,m,_){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:E==null?null:""+E,children:g,containerInfo:m,implementation:_}}var h=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,mn.createPortal=function(g,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return l(g,m,null,_)},mn.flushSync=function(g){var m=h.T,_=a.p;try{if(h.T=null,a.p=2,g)return g()}finally{h.T=m,a.p=_,a.d.f()}},mn.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(g,m))},mn.prefetchDNS=function(g){typeof g=="string"&&a.d.D(g)},mn.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var _=m.as,E=d(_,m.crossOrigin),b=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?a.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:E,integrity:b,fetchPriority:C}):_==="script"&&a.d.X(g,{crossOrigin:E,integrity:b,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},mn.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);a.d.M(g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(g)},mn.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,E=d(_,m.crossOrigin);a.d.L(g,_,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},mn.preloadModule=function(g,m){if(typeof g=="string")if(m){var _=d(m.as,m.crossOrigin);a.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(g)},mn.requestFormReset=function(g){a.d.r(g)},mn.unstable_batchedUpdates=function(g,m){return g(m)},mn.useFormState=function(g,m,_){return h.H.useFormState(g,m,_)},mn.useFormStatus=function(){return h.H.useHostTransitionStatus()},mn.version="19.1.0",mn}var y_;function sA(){if(y_)return gg.exports;y_=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),gg.exports=aA(),gg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function oA(){if(v_)return mu;v_=1;var t=iA(),e=Lm(),n=sA();function a(r){var i="https://react.dev/errors/"+r;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var i=r,o=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(o=i.return),r=i.return;while(r)}return i.tag===3?o:null}function h(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(a(188))}function g(r){var i=r.alternate;if(!i){if(i=l(r),i===null)throw Error(a(188));return i!==r?null:r}for(var o=r,u=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return d(f),r;if(p===u)return d(f),i;p=p.sibling}throw Error(a(188))}if(o.return!==u.return)o=f,u=p;else{for(var w=!1,T=f.child;T;){if(T===o){w=!0,o=f,u=p;break}if(T===u){w=!0,u=f,o=p;break}T=T.sibling}if(!w){for(T=p.child;T;){if(T===o){w=!0,o=p,u=f;break}if(T===u){w=!0,u=p,o=f;break}T=T.sibling}if(!w)throw Error(a(189))}}if(o.alternate!==u)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?r:i}function m(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r;for(r=r.child;r!==null;){if(i=m(r),i!==null)return i;r=r.sibling}return null}var _=Object.assign,E=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),K=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),j=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function H(r){return r===null||typeof r!="object"?null:(r=U&&r[U]||r["@@iterator"],typeof r=="function"?r:null)}var M=Symbol.for("react.client.reference");function et(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===M?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case O:return"Fragment";case k:return"Profiler";case z:return"StrictMode";case re:return"Suspense";case ce:return"SuspenseList";case I:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case C:return"Portal";case K:return(r.displayName||"Context")+".Provider";case B:return(r._context.displayName||"Context")+".Consumer";case J:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case D:return i=r.displayName||null,i!==null?i:et(r.type)||"Memo";case A:i=r._payload,r=r._init;try{return et(r(i))}catch{}}return null}var Xe=Array.isArray,W=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},me=[],P=-1;function te(r){return{current:r}}function ue(r){0>P||(r.current=me[P],me[P]=null,P--)}function se(r,i){P++,me[P]=r.current,r.current=i}var pe=te(null),Ee=te(null),ye=te(null),tt=te(null);function Pe(r,i){switch(se(ye,i),se(Ee,r),se(pe,null),i.nodeType){case 9:case 11:r=(r=i.documentElement)&&(r=r.namespaceURI)?L1(r):0;break;default:if(r=i.tagName,i=i.namespaceURI)i=L1(i),r=U1(i,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ue(pe),se(pe,r)}function lt(){ue(pe),ue(Ee),ue(ye)}function pn(r){r.memoizedState!==null&&se(tt,r);var i=pe.current,o=U1(i,r.type);i!==o&&(se(Ee,r),se(pe,o))}function Gt(r){Ee.current===r&&(ue(pe),ue(Ee)),tt.current===r&&(ue(tt),cu._currentValue=le)}var At=Object.prototype.hasOwnProperty,ur=t.unstable_scheduleCallback,ut=t.unstable_cancelCallback,cr=t.unstable_shouldYield,Jt=t.unstable_requestPaint,en=t.unstable_now,js=t.unstable_getCurrentPriorityLevel,Gi=t.unstable_ImmediatePriority,$i=t.unstable_UserBlockingPriority,ni=t.unstable_NormalPriority,ml=t.unstable_LowPriority,ri=t.unstable_IdlePriority,Ha=t.log,Vs=t.unstable_setDisableYieldValue,gt=null,Ke=null;function bn(r){if(typeof Ha=="function"&&Vs(r),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(gt,r)}catch{}}var Dt=Math.clz32?Math.clz32:ii,Fa=Math.log,Ls=Math.LN2;function ii(r){return r>>>=0,r===0?32:31-(Fa(r)/Ls|0)|0}var Yn=256,br=4194304;function jn(r){var i=r&42;if(i!==0)return i;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function ai(r,i,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,p=r.suspendedLanes,w=r.pingedLanes;r=r.warmLanes;var T=u&134217727;return T!==0?(u=T&~p,u!==0?f=jn(u):(w&=T,w!==0?f=jn(w):o||(o=T&~r,o!==0&&(f=jn(o))))):(T=u&~p,T!==0?f=jn(T):w!==0?f=jn(w):o||(o=u&~r,o!==0&&(f=jn(o)))),f===0?0:i!==0&&i!==f&&(i&p)===0&&(p=f&-f,o=i&-i,p>=o||p===32&&(o&4194048)!==0)?i:f}function Er(r,i){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&i)===0}function si(r,i){switch(r){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ga(){var r=Yn;return Yn<<=1,(Yn&4194048)===0&&(Yn=256),r}function qi(){var r=br;return br<<=1,(br&62914560)===0&&(br=4194304),r}function hr(r){for(var i=[],o=0;31>o;o++)i.push(r);return i}function Kn(r,i){r.pendingLanes|=i,i!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Ot(r,i,o,u,f,p){var w=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var T=r.entanglements,N=r.expirationTimes,Y=r.hiddenUpdates;for(o=w&~o;0<o;){var ee=31-Dt(o),ie=1<<ee;T[ee]=0,N[ee]=-1;var Q=Y[ee];if(Q!==null)for(Y[ee]=null,ee=0;ee<Q.length;ee++){var X=Q[ee];X!==null&&(X.lane&=-536870913)}o&=~ie}u!==0&&dt(r,u,0),p!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=p&~(w&~i))}function dt(r,i,o){r.pendingLanes|=i,r.suspendedLanes&=~i;var u=31-Dt(i);r.entangledLanes|=i,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function Tr(r,i){var o=r.entangledLanes|=i;for(r=r.entanglements;o;){var u=31-Dt(o),f=1<<u;f&i|r[u]&i&&(r[u]|=i),o&=~f}}function qe(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function tn(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function Sr(){var r=he.p;return r!==0?r:(r=window.event,r===void 0?32:i_(r.type))}function Yi(r,i){var o=he.p;try{return he.p=r,i()}finally{he.p=o}}var ct=Math.random().toString(36).slice(2),Et="__reactFiber$"+ct,mt="__reactProps$"+ct,nn="__reactContainer$"+ct,oi="__reactEvents$"+ct,$a="__reactListeners$"+ct,Qn="__reactHandles$"+ct,Us="__reactResources$"+ct,fr="__reactMarker$"+ct;function dr(r){delete r[Et],delete r[mt],delete r[oi],delete r[$a],delete r[Qn]}function pr(r){var i=r[Et];if(i)return i;for(var o=r.parentNode;o;){if(i=o[nn]||o[Et]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(r=F1(r);r!==null;){if(o=r[Et])return o;r=F1(r)}return i}r=o,o=r.parentNode}return null}function Xn(r){if(r=r[Et]||r[nn]){var i=r.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return r}return null}function Ae(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r.stateNode;throw Error(a(33))}function je(r){var i=r[Us];return i||(i=r[Us]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function De(r){r[fr]=!0}var rn=new Set,$t={};function En(r,i){gr(r,i),gr(r+"Capture",i)}function gr(r,i){for($t[r]=i,r=0;r<i.length;r++)rn.add(i[r])}var zs=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fc={},qa={};function dc(r){return At.call(qa,r)?!0:At.call(fc,r)?!1:zs.test(r)?qa[r]=!0:(fc[r]=!0,!1)}function Ki(r,i,o){if(dc(i))if(o===null)r.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(i);return}}r.setAttribute(i,""+o)}}function Ar(r,i,o){if(o===null)r.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(i);return}r.setAttribute(i,""+o)}}function an(r,i,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(i,o,""+u)}}var Ya,pc;function li(r){if(Ya===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);Ya=i&&i[1]||"",pc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ya+r+pc}var Bs=!1;function Hs(r,i){if(!r||Bs)return"";Bs=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var ie=function(){throw Error()};if(Object.defineProperty(ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ie,[])}catch(X){var Q=X}Reflect.construct(r,[],ie)}else{try{ie.call()}catch(X){Q=X}r.call(ie.prototype)}}else{try{throw Error()}catch(X){Q=X}(ie=r())&&typeof ie.catch=="function"&&ie.catch(function(){})}}catch(X){if(X&&Q&&typeof X.stack=="string")return[X.stack,Q.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),w=p[0],T=p[1];if(w&&T){var N=w.split(`
`),Y=T.split(`
`);for(f=u=0;u<N.length&&!N[u].includes("DetermineComponentFrameRoot");)u++;for(;f<Y.length&&!Y[f].includes("DetermineComponentFrameRoot");)f++;if(u===N.length||f===Y.length)for(u=N.length-1,f=Y.length-1;1<=u&&0<=f&&N[u]!==Y[f];)f--;for(;1<=u&&0<=f;u--,f--)if(N[u]!==Y[f]){if(u!==1||f!==1)do if(u--,f--,0>f||N[u]!==Y[f]){var ee=`
`+N[u].replace(" at new "," at ");return r.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",r.displayName)),ee}while(1<=u&&0<=f);break}}}finally{Bs=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?li(o):""}function yl(r){switch(r.tag){case 26:case 27:case 5:return li(r.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 15:return Hs(r.type,!1);case 11:return Hs(r.type.render,!1);case 1:return Hs(r.type,!0);case 31:return li("Activity");default:return""}}function Fs(r){try{var i="";do i+=yl(r),r=r.return;while(r);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Tn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function vl(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function pd(r){var i=vl(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),u=""+r[i];if(!r.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){u=""+w,p.call(this,w)}}),Object.defineProperty(r,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function Gs(r){r._valueTracker||(r._valueTracker=pd(r))}function _l(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return r&&(u=vl(r)?r.checked?"true":"false":r.value),r=u,r!==o?(i.setValue(r),!0):!1}function Ka(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var gd=/[\n"\\]/g;function kt(r){return r.replace(gd,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Vn(r,i,o,u,f,p,w,T){r.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?r.type=w:r.removeAttribute("type"),i!=null?w==="number"?(i===0&&r.value===""||r.value!=i)&&(r.value=""+Tn(i)):r.value!==""+Tn(i)&&(r.value=""+Tn(i)):w!=="submit"&&w!=="reset"||r.removeAttribute("value"),i!=null?Qi(r,w,Tn(i)):o!=null?Qi(r,w,Tn(o)):u!=null&&r.removeAttribute("value"),f==null&&p!=null&&(r.defaultChecked=!!p),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?r.name=""+Tn(T):r.removeAttribute("name")}function Qa(r,i,o,u,f,p,w,T){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(r.type=p),i!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||i!=null))return;o=o!=null?""+Tn(o):"",i=i!=null?""+Tn(i):o,T||i===r.value||(r.value=i),r.defaultValue=i}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=T?r.checked:!!u,r.defaultChecked=!!u,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(r.name=w)}function Qi(r,i,o){i==="number"&&Ka(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function ui(r,i,o,u){if(r=r.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=i.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&u&&(r[o].defaultSelected=!0)}else{for(o=""+Tn(o),i=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,u&&(r[f].defaultSelected=!0);return}i!==null||r[f].disabled||(i=r[f])}i!==null&&(i.selected=!0)}}function it(r,i,o){if(i!=null&&(i=""+Tn(i),i!==r.value&&(r.value=i),o==null)){r.defaultValue!==i&&(r.defaultValue=i);return}r.defaultValue=o!=null?""+Tn(o):""}function Xa(r,i,o,u){if(i==null){if(u!=null){if(o!=null)throw Error(a(92));if(Xe(u)){if(1<u.length)throw Error(a(93));u=u[0]}o=u}o==null&&(o=""),i=o}o=Tn(i),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function Wn(r,i){if(i){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=i;return}}r.textContent=i}var Wa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gc(r,i,o){var u=i.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(i,""):i==="float"?r.cssFloat="":r[i]="":u?r.setProperty(i,o):typeof o!="number"||o===0||Wa.has(i)?i==="float"?r.cssFloat=o:r[i]=(""+o).trim():r[i]=o+"px"}function xl(r,i,o){if(i!=null&&typeof i!="object")throw Error(a(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var f in i)u=i[f],i.hasOwnProperty(f)&&o[f]!==u&&gc(r,f,u)}else for(var p in i)i.hasOwnProperty(p)&&gc(r,p,i[p])}function wl(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var md=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $s(r){return yd.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var ci=null;function Zn(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var hi=null,fi=null;function bl(r){var i=Xn(r);if(i&&(r=i.stateNode)){var o=r[mt]||null;e:switch(r=i.stateNode,i.type){case"input":if(Vn(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),i=o.name,o.type==="radio"&&i!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+kt(""+i)+'"][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==r&&u.form===r.form){var f=u[mt]||null;if(!f)throw Error(a(90));Vn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<o.length;i++)u=o[i],u.form===r.form&&_l(u)}break e;case"textarea":it(r,o.value,o.defaultValue);break e;case"select":i=o.value,i!=null&&ui(r,!!o.multiple,i,!1)}}}var Cr=!1;function mc(r,i,o){if(Cr)return r(i,o);Cr=!0;try{var u=r(i);return u}finally{if(Cr=!1,(hi!==null||fi!==null)&&(uh(),hi&&(i=hi,r=fi,fi=hi=null,bl(i),r)))for(i=0;i<r.length;i++)bl(r[i])}}function Za(r,i){var o=r.stateNode;if(o===null)return null;var u=o[mt]||null;if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(a(231,i,typeof o));return o}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jn=!1;if(mr)try{var Ja={};Object.defineProperty(Ja,"passive",{get:function(){Jn=!0}}),window.addEventListener("test",Ja,Ja),window.removeEventListener("test",Ja,Ja)}catch{Jn=!1}var Rr=null,Xi=null,di=null;function El(){if(di)return di;var r,i=Xi,o=i.length,u,f="value"in Rr?Rr.value:Rr.textContent,p=f.length;for(r=0;r<o&&i[r]===f[r];r++);var w=o-r;for(u=1;u<=w&&i[o-u]===f[p-u];u++);return di=f.slice(r,1<u?1-u:void 0)}function Ir(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Dr(){return!0}function Tl(){return!1}function qt(r){function i(o,u,f,p,w){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var T in r)r.hasOwnProperty(T)&&(o=r[T],this[T]=o?o(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Dr:Tl,this.isPropagationStopped=Tl,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),i}var We={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qs=qt(We),es=_({},We,{view:0,detail:0}),yc=qt(es),Ys,Ks,Or,ts=_({},es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Or&&(Or&&r.type==="mousemove"?(Ys=r.screenX-Or.screenX,Ks=r.screenY-Or.screenY):Ks=Ys=0,Or=r),Ys)},movementY:function(r){return"movementY"in r?r.movementY:Ks}}),er=qt(ts),vc=_({},ts,{dataTransfer:0}),vd=qt(vc),ns=_({},es,{relatedTarget:0}),Qs=qt(ns),Sl=_({},We,{animationName:0,elapsedTime:0,pseudoElement:0}),Xs=qt(Sl),_c=_({},We,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Ws=qt(_c),_d=_({},We,{data:0}),Al=qt(_d),rs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cl(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=wc[r])?!!i[r]:!1}function is(){return Cl}var bc=_({},es,{key:function(r){if(r.key){var i=rs[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Ir(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?xc[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(r){return r.type==="keypress"?Ir(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ir(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Zs=qt(bc),Ec=_({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rl=qt(Ec),pi=_({},es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),Tc=qt(pi),Sc=_({},We,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ac=qt(Sc),Cc=_({},ts,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Js=qt(Cc),Sn=_({},We,{newState:0,oldState:0}),Rc=qt(Sn),Ic=[9,13,27,32],kr=mr&&"CompositionEvent"in window,c=null;mr&&"documentMode"in document&&(c=document.documentMode);var y=mr&&"TextEvent"in window&&!c,x=mr&&(!kr||c&&8<c&&11>=c),S=" ",$=!1;function Z(r,i){switch(r){case"keyup":return Ic.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fe(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var He=!1;function Vt(r,i){switch(r){case"compositionend":return fe(i);case"keypress":return i.which!==32?null:($=!0,S);case"textInput":return r=i.data,r===S&&$?null:r;default:return null}}function Fe(r,i){if(He)return r==="compositionend"||!kr&&Z(r,i)?(r=El(),di=Xi=Rr=null,He=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return x&&i.locale!=="ko"?null:i.data;default:return null}}var Yt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lt(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!Yt[r.type]:i==="textarea"}function gi(r,i,o,u){hi?fi?fi.push(u):fi=[u]:hi=u,i=gh(i,"onChange"),0<i.length&&(o=new qs("onChange","change",null,o,u),r.push({event:o,listeners:i}))}var sn=null,Nr=null;function Il(r){N1(r,0)}function Dc(r){var i=Ae(r);if(_l(i))return r}function e0(r,i){if(r==="change")return i}var t0=!1;if(mr){var xd;if(mr){var wd="oninput"in document;if(!wd){var n0=document.createElement("div");n0.setAttribute("oninput","return;"),wd=typeof n0.oninput=="function"}xd=wd}else xd=!1;t0=xd&&(!document.documentMode||9<document.documentMode)}function r0(){sn&&(sn.detachEvent("onpropertychange",i0),Nr=sn=null)}function i0(r){if(r.propertyName==="value"&&Dc(Nr)){var i=[];gi(i,Nr,r,Zn(r)),mc(Il,i)}}function D2(r,i,o){r==="focusin"?(r0(),sn=i,Nr=o,sn.attachEvent("onpropertychange",i0)):r==="focusout"&&r0()}function O2(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Dc(Nr)}function k2(r,i){if(r==="click")return Dc(i)}function N2(r,i){if(r==="input"||r==="change")return Dc(i)}function M2(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var Ln=typeof Object.is=="function"?Object.is:M2;function Dl(r,i){if(Ln(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var o=Object.keys(r),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!At.call(i,f)||!Ln(r[f],i[f]))return!1}return!0}function a0(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function s0(r,i){var o=a0(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=i&&u>=i)return{node:o,offset:i-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=a0(o)}}function o0(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?o0(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function l0(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var i=Ka(r.document);i instanceof r.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)r=i.contentWindow;else break;i=Ka(r.document)}return i}function bd(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}var P2=mr&&"documentMode"in document&&11>=document.documentMode,eo=null,Ed=null,Ol=null,Td=!1;function u0(r,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Td||eo==null||eo!==Ka(u)||(u=eo,"selectionStart"in u&&bd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ol&&Dl(Ol,u)||(Ol=u,u=gh(Ed,"onSelect"),0<u.length&&(i=new qs("onSelect","select",null,i,o),r.push({event:i,listeners:u}),i.target=eo)))}function as(r,i){var o={};return o[r.toLowerCase()]=i.toLowerCase(),o["Webkit"+r]="webkit"+i,o["Moz"+r]="moz"+i,o}var to={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},Sd={},c0={};mr&&(c0=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function ss(r){if(Sd[r])return Sd[r];if(!to[r])return r;var i=to[r],o;for(o in i)if(i.hasOwnProperty(o)&&o in c0)return Sd[r]=i[o];return r}var h0=ss("animationend"),f0=ss("animationiteration"),d0=ss("animationstart"),j2=ss("transitionrun"),V2=ss("transitionstart"),L2=ss("transitioncancel"),p0=ss("transitionend"),g0=new Map,Ad="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ad.push("scrollEnd");function yr(r,i){g0.set(r,i),En(i,[r])}var m0=new WeakMap;function tr(r,i){if(typeof r=="object"&&r!==null){var o=m0.get(r);return o!==void 0?o:(i={value:r,source:i,stack:Fs(i)},m0.set(r,i),i)}return{value:r,source:i,stack:Fs(i)}}var nr=[],no=0,Cd=0;function Oc(){for(var r=no,i=Cd=no=0;i<r;){var o=nr[i];nr[i++]=null;var u=nr[i];nr[i++]=null;var f=nr[i];nr[i++]=null;var p=nr[i];if(nr[i++]=null,u!==null&&f!==null){var w=u.pending;w===null?f.next=f:(f.next=w.next,w.next=f),u.pending=f}p!==0&&y0(o,f,p)}}function kc(r,i,o,u){nr[no++]=r,nr[no++]=i,nr[no++]=o,nr[no++]=u,Cd|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function Rd(r,i,o,u){return kc(r,i,o,u),Nc(r)}function ro(r,i){return kc(r,null,null,i),Nc(r)}function y0(r,i,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var f=!1,p=r.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(r=p.stateNode,r===null||r._visibility&1||(f=!0)),r=p,p=p.return;return r.tag===3?(p=r.stateNode,f&&i!==null&&(f=31-Dt(o),r=p.hiddenUpdates,u=r[f],u===null?r[f]=[i]:u.push(i),i.lane=o|536870912),p):null}function Nc(r){if(50<nu)throw nu=0,Mp=null,Error(a(185));for(var i=r.return;i!==null;)r=i,i=r.return;return r.tag===3?r.stateNode:null}var io={};function U2(r,i,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(r,i,o,u){return new U2(r,i,o,u)}function Id(r){return r=r.prototype,!(!r||!r.isReactComponent)}function mi(r,i){var o=r.alternate;return o===null?(o=Un(r.tag,i,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=i,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,i=r.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function v0(r,i){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=i,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,i=o.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),r}function Mc(r,i,o,u,f,p){var w=0;if(u=r,typeof r=="function")Id(r)&&(w=1);else if(typeof r=="string")w=BS(r,o,pe.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case I:return r=Un(31,o,i,f),r.elementType=I,r.lanes=p,r;case O:return os(o.children,f,p,i);case z:w=8,f|=24;break;case k:return r=Un(12,o,i,f|2),r.elementType=k,r.lanes=p,r;case re:return r=Un(13,o,i,f),r.elementType=re,r.lanes=p,r;case ce:return r=Un(19,o,i,f),r.elementType=ce,r.lanes=p,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case V:case K:w=10;break e;case B:w=9;break e;case J:w=11;break e;case D:w=14;break e;case A:w=16,u=null;break e}w=29,o=Error(a(130,r===null?"null":typeof r,"")),u=null}return i=Un(w,o,i,f),i.elementType=r,i.type=u,i.lanes=p,i}function os(r,i,o,u){return r=Un(7,r,u,i),r.lanes=o,r}function Dd(r,i,o){return r=Un(6,r,null,i),r.lanes=o,r}function Od(r,i,o){return i=Un(4,r.children!==null?r.children:[],r.key,i),i.lanes=o,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}var ao=[],so=0,Pc=null,jc=0,rr=[],ir=0,ls=null,yi=1,vi="";function us(r,i){ao[so++]=jc,ao[so++]=Pc,Pc=r,jc=i}function _0(r,i,o){rr[ir++]=yi,rr[ir++]=vi,rr[ir++]=ls,ls=r;var u=yi;r=vi;var f=32-Dt(u)-1;u&=~(1<<f),o+=1;var p=32-Dt(i)+f;if(30<p){var w=f-f%5;p=(u&(1<<w)-1).toString(32),u>>=w,f-=w,yi=1<<32-Dt(i)+f|o<<f|u,vi=p+r}else yi=1<<p|o<<f|u,vi=r}function kd(r){r.return!==null&&(us(r,1),_0(r,1,0))}function Nd(r){for(;r===Pc;)Pc=ao[--so],ao[so]=null,jc=ao[--so],ao[so]=null;for(;r===ls;)ls=rr[--ir],rr[ir]=null,vi=rr[--ir],rr[ir]=null,yi=rr[--ir],rr[ir]=null}var An=null,Tt=null,Qe=!1,cs=null,Mr=!1,Md=Error(a(519));function hs(r){var i=Error(a(418,""));throw Ml(tr(i,r)),Md}function x0(r){var i=r.stateNode,o=r.type,u=r.memoizedProps;switch(i[Et]=r,i[mt]=u,o){case"dialog":Ue("cancel",i),Ue("close",i);break;case"iframe":case"object":case"embed":Ue("load",i);break;case"video":case"audio":for(o=0;o<iu.length;o++)Ue(iu[o],i);break;case"source":Ue("error",i);break;case"img":case"image":case"link":Ue("error",i),Ue("load",i);break;case"details":Ue("toggle",i);break;case"input":Ue("invalid",i),Qa(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Gs(i);break;case"select":Ue("invalid",i);break;case"textarea":Ue("invalid",i),Xa(i,u.value,u.defaultValue,u.children),Gs(i)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||i.textContent===""+o||u.suppressHydrationWarning===!0||V1(i.textContent,o)?(u.popover!=null&&(Ue("beforetoggle",i),Ue("toggle",i)),u.onScroll!=null&&Ue("scroll",i),u.onScrollEnd!=null&&Ue("scrollend",i),u.onClick!=null&&(i.onclick=mh),i=!0):i=!1,i||hs(r)}function w0(r){for(An=r.return;An;)switch(An.tag){case 5:case 13:Mr=!1;return;case 27:case 3:Mr=!0;return;default:An=An.return}}function kl(r){if(r!==An)return!1;if(!Qe)return w0(r),Qe=!0,!1;var i=r.tag,o;if((o=i!==3&&i!==27)&&((o=i===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||Xp(r.type,r.memoizedProps)),o=!o),o&&Tt&&hs(r),w0(r),i===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(a(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(i===0){Tt=_r(r.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++;r=r.nextSibling}Tt=null}}else i===27?(i=Tt,fa(r.type)?(r=eg,eg=null,Tt=r):Tt=i):Tt=An?_r(r.stateNode.nextSibling):null;return!0}function Nl(){Tt=An=null,Qe=!1}function b0(){var r=cs;return r!==null&&(Dn===null?Dn=r:Dn.push.apply(Dn,r),cs=null),r}function Ml(r){cs===null?cs=[r]:cs.push(r)}var Pd=te(null),fs=null,_i=null;function Wi(r,i,o){se(Pd,i._currentValue),i._currentValue=o}function xi(r){r._currentValue=Pd.current,ue(Pd)}function jd(r,i,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),r===o)break;r=r.return}}function Vd(r,i,o,u){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var p=f.dependencies;if(p!==null){var w=f.child;p=p.firstContext;e:for(;p!==null;){var T=p;p=f;for(var N=0;N<i.length;N++)if(T.context===i[N]){p.lanes|=o,T=p.alternate,T!==null&&(T.lanes|=o),jd(p.return,o,r),u||(w=null);break e}p=T.next}}else if(f.tag===18){if(w=f.return,w===null)throw Error(a(341));w.lanes|=o,p=w.alternate,p!==null&&(p.lanes|=o),jd(w,o,r),w=null}else w=f.child;if(w!==null)w.return=f;else for(w=f;w!==null;){if(w===r){w=null;break}if(f=w.sibling,f!==null){f.return=w.return,w=f;break}w=w.return}f=w}}function Pl(r,i,o,u){r=null;for(var f=i,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var w=f.alternate;if(w===null)throw Error(a(387));if(w=w.memoizedProps,w!==null){var T=f.type;Ln(f.pendingProps.value,w.value)||(r!==null?r.push(T):r=[T])}}else if(f===tt.current){if(w=f.alternate,w===null)throw Error(a(387));w.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(cu):r=[cu])}f=f.return}r!==null&&Vd(i,r,o,u),i.flags|=262144}function Vc(r){for(r=r.firstContext;r!==null;){if(!Ln(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function ds(r){fs=r,_i=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function gn(r){return E0(fs,r)}function Lc(r,i){return fs===null&&ds(r),E0(r,i)}function E0(r,i){var o=i._currentValue;if(i={context:i,memoizedValue:o,next:null},_i===null){if(r===null)throw Error(a(308));_i=i,r.dependencies={lanes:0,firstContext:i},r.flags|=524288}else _i=_i.next=i;return o}var z2=typeof AbortController<"u"?AbortController:function(){var r=[],i=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){i.aborted=!0,r.forEach(function(o){return o()})}},B2=t.unstable_scheduleCallback,H2=t.unstable_NormalPriority,Ut={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ld(){return{controller:new z2,data:new Map,refCount:0}}function jl(r){r.refCount--,r.refCount===0&&B2(H2,function(){r.controller.abort()})}var Vl=null,Ud=0,oo=0,lo=null;function F2(r,i){if(Vl===null){var o=Vl=[];Ud=0,oo=Bp(),lo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Ud++,i.then(T0,T0),i}function T0(){if(--Ud===0&&Vl!==null){lo!==null&&(lo.status="fulfilled");var r=Vl;Vl=null,oo=0,lo=null;for(var i=0;i<r.length;i++)(0,r[i])()}}function G2(r,i){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){u.status="fulfilled",u.value=i;for(var f=0;f<o.length;f++)(0,o[f])(i)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var S0=W.S;W.S=function(r,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&F2(r,i),S0!==null&&S0(r,i)};var ps=te(null);function zd(){var r=ps.current;return r!==null?r:ft.pooledCache}function Uc(r,i){i===null?se(ps,ps.current):se(ps,i.pool)}function A0(){var r=zd();return r===null?null:{parent:Ut._currentValue,pool:r}}var Ll=Error(a(460)),C0=Error(a(474)),zc=Error(a(542)),Bd={then:function(){}};function R0(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Bc(){}function I0(r,i,o){switch(o=r[o],o===void 0?r.push(i):o!==i&&(i.then(Bc,Bc),i=o),i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,O0(r),r;default:if(typeof i.status=="string")i.then(Bc,Bc);else{if(r=ft,r!==null&&100<r.shellSuspendCounter)throw Error(a(482));r=i,r.status="pending",r.then(function(u){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=u}},function(u){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,O0(r),r}throw Ul=i,Ll}}var Ul=null;function D0(){if(Ul===null)throw Error(a(459));var r=Ul;return Ul=null,r}function O0(r){if(r===Ll||r===zc)throw Error(a(483))}var Zi=!1;function Hd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fd(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Ji(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function ea(r,i,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(nt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,i=Nc(r),y0(r,null,o),i}return kc(r,u,i,o),Nc(r)}function zl(r,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194048)!==0)){var u=i.lanes;u&=r.pendingLanes,o|=u,i.lanes=o,Tr(r,o)}}function Gd(r,i){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var w={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?f=p=w:p=p.next=w,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=i:r.next=i,o.lastBaseUpdate=i}var $d=!1;function Bl(){if($d){var r=lo;if(r!==null)throw r}}function Hl(r,i,o,u){$d=!1;var f=r.updateQueue;Zi=!1;var p=f.firstBaseUpdate,w=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var N=T,Y=N.next;N.next=null,w===null?p=Y:w.next=Y,w=N;var ee=r.alternate;ee!==null&&(ee=ee.updateQueue,T=ee.lastBaseUpdate,T!==w&&(T===null?ee.firstBaseUpdate=Y:T.next=Y,ee.lastBaseUpdate=N))}if(p!==null){var ie=f.baseState;w=0,ee=Y=N=null,T=p;do{var Q=T.lane&-536870913,X=Q!==T.lane;if(X?(Ge&Q)===Q:(u&Q)===Q){Q!==0&&Q===oo&&($d=!0),ee!==null&&(ee=ee.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Se=r,we=T;Q=i;var ot=o;switch(we.tag){case 1:if(Se=we.payload,typeof Se=="function"){ie=Se.call(ot,ie,Q);break e}ie=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=we.payload,Q=typeof Se=="function"?Se.call(ot,ie,Q):Se,Q==null)break e;ie=_({},ie,Q);break e;case 2:Zi=!0}}Q=T.callback,Q!==null&&(r.flags|=64,X&&(r.flags|=8192),X=f.callbacks,X===null?f.callbacks=[Q]:X.push(Q))}else X={lane:Q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ee===null?(Y=ee=X,N=ie):ee=ee.next=X,w|=Q;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;X=T,T=X.next,X.next=null,f.lastBaseUpdate=X,f.shared.pending=null}}while(!0);ee===null&&(N=ie),f.baseState=N,f.firstBaseUpdate=Y,f.lastBaseUpdate=ee,p===null&&(f.shared.lanes=0),la|=w,r.lanes=w,r.memoizedState=ie}}function k0(r,i){if(typeof r!="function")throw Error(a(191,r));r.call(i)}function N0(r,i){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)k0(o[r],i)}var uo=te(null),Hc=te(0);function M0(r,i){r=Ci,se(Hc,r),se(uo,i),Ci=r|i.baseLanes}function qd(){se(Hc,Ci),se(uo,uo.current)}function Yd(){Ci=Hc.current,ue(uo),ue(Hc)}var ta=0,Ne=null,at=null,Nt=null,Fc=!1,co=!1,gs=!1,Gc=0,Fl=0,ho=null,$2=0;function Ct(){throw Error(a(321))}function Kd(r,i){if(i===null)return!1;for(var o=0;o<i.length&&o<r.length;o++)if(!Ln(r[o],i[o]))return!1;return!0}function Qd(r,i,o,u,f,p){return ta=p,Ne=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,W.H=r===null||r.memoizedState===null?yv:vv,gs=!1,p=o(u,f),gs=!1,co&&(p=j0(i,o,u,f)),P0(r),p}function P0(r){W.H=Xc;var i=at!==null&&at.next!==null;if(ta=0,Nt=at=Ne=null,Fc=!1,Fl=0,ho=null,i)throw Error(a(300));r===null||Kt||(r=r.dependencies,r!==null&&Vc(r)&&(Kt=!0))}function j0(r,i,o,u){Ne=r;var f=0;do{if(co&&(ho=null),Fl=0,co=!1,25<=f)throw Error(a(301));if(f+=1,Nt=at=null,r.updateQueue!=null){var p=r.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}W.H=Z2,p=i(o,u)}while(co);return p}function q2(){var r=W.H,i=r.useState()[0];return i=typeof i.then=="function"?Gl(i):i,r=r.useState()[0],(at!==null?at.memoizedState:null)!==r&&(Ne.flags|=1024),i}function Xd(){var r=Gc!==0;return Gc=0,r}function Wd(r,i,o){i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~o}function Zd(r){if(Fc){for(r=r.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fc=!1}ta=0,Nt=at=Ne=null,co=!1,Fl=Gc=0,ho=null}function Rn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?Ne.memoizedState=Nt=r:Nt=Nt.next=r,Nt}function Mt(){if(at===null){var r=Ne.alternate;r=r!==null?r.memoizedState:null}else r=at.next;var i=Nt===null?Ne.memoizedState:Nt.next;if(i!==null)Nt=i,at=r;else{if(r===null)throw Ne.alternate===null?Error(a(467)):Error(a(310));at=r,r={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},Nt===null?Ne.memoizedState=Nt=r:Nt=Nt.next=r}return Nt}function Jd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Gl(r){var i=Fl;return Fl+=1,ho===null&&(ho=[]),r=I0(ho,r,i),i=Ne,(Nt===null?i.memoizedState:Nt.next)===null&&(i=i.alternate,W.H=i===null||i.memoizedState===null?yv:vv),r}function $c(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Gl(r);if(r.$$typeof===K)return gn(r)}throw Error(a(438,String(r)))}function ep(r){var i=null,o=Ne.updateQueue;if(o!==null&&(i=o.memoCache),i==null){var u=Ne.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),o===null&&(o=Jd(),Ne.updateQueue=o),o.memoCache=i,o=i.data[i.index],o===void 0)for(o=i.data[i.index]=Array(r),u=0;u<r;u++)o[u]=j;return i.index++,o}function wi(r,i){return typeof i=="function"?i(r):i}function qc(r){var i=Mt();return tp(i,at,r)}function tp(r,i,o){var u=r.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=o;var f=r.baseQueue,p=u.pending;if(p!==null){if(f!==null){var w=f.next;f.next=p.next,p.next=w}i.baseQueue=f=p,u.pending=null}if(p=r.baseState,f===null)r.memoizedState=p;else{i=f.next;var T=w=null,N=null,Y=i,ee=!1;do{var ie=Y.lane&-536870913;if(ie!==Y.lane?(Ge&ie)===ie:(ta&ie)===ie){var Q=Y.revertLane;if(Q===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),ie===oo&&(ee=!0);else if((ta&Q)===Q){Y=Y.next,Q===oo&&(ee=!0);continue}else ie={lane:0,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},N===null?(T=N=ie,w=p):N=N.next=ie,Ne.lanes|=Q,la|=Q;ie=Y.action,gs&&o(p,ie),p=Y.hasEagerState?Y.eagerState:o(p,ie)}else Q={lane:ie,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},N===null?(T=N=Q,w=p):N=N.next=Q,Ne.lanes|=ie,la|=ie;Y=Y.next}while(Y!==null&&Y!==i);if(N===null?w=p:N.next=T,!Ln(p,r.memoizedState)&&(Kt=!0,ee&&(o=lo,o!==null)))throw o;r.memoizedState=p,r.baseState=w,r.baseQueue=N,u.lastRenderedState=p}return f===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function np(r){var i=Mt(),o=i.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var u=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var w=f=f.next;do p=r(p,w.action),w=w.next;while(w!==f);Ln(p,i.memoizedState)||(Kt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function V0(r,i,o){var u=Ne,f=Mt(),p=Qe;if(p){if(o===void 0)throw Error(a(407));o=o()}else o=i();var w=!Ln((at||f).memoizedState,o);w&&(f.memoizedState=o,Kt=!0),f=f.queue;var T=z0.bind(null,u,f,r);if($l(2048,8,T,[r]),f.getSnapshot!==i||w||Nt!==null&&Nt.memoizedState.tag&1){if(u.flags|=2048,fo(9,Yc(),U0.bind(null,u,f,o,i),null),ft===null)throw Error(a(349));p||(ta&124)!==0||L0(u,i,o)}return o}function L0(r,i,o){r.flags|=16384,r={getSnapshot:i,value:o},i=Ne.updateQueue,i===null?(i=Jd(),Ne.updateQueue=i,i.stores=[r]):(o=i.stores,o===null?i.stores=[r]:o.push(r))}function U0(r,i,o,u){i.value=o,i.getSnapshot=u,B0(i)&&H0(r)}function z0(r,i,o){return o(function(){B0(i)&&H0(r)})}function B0(r){var i=r.getSnapshot;r=r.value;try{var o=i();return!Ln(r,o)}catch{return!0}}function H0(r){var i=ro(r,2);i!==null&&Gn(i,r,2)}function rp(r){var i=Rn();if(typeof r=="function"){var o=r;if(r=o(),gs){bn(!0);try{o()}finally{bn(!1)}}}return i.memoizedState=i.baseState=r,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:r},i}function F0(r,i,o,u){return r.baseState=o,tp(r,at,typeof u=="function"?u:wi)}function Y2(r,i,o,u,f){if(Qc(r))throw Error(a(485));if(r=i.action,r!==null){var p={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){p.listeners.push(w)}};W.T!==null?o(!0):p.isTransition=!1,u(p),o=i.pending,o===null?(p.next=i.pending=p,G0(i,p)):(p.next=o.next,i.pending=o.next=p)}}function G0(r,i){var o=i.action,u=i.payload,f=r.state;if(i.isTransition){var p=W.T,w={};W.T=w;try{var T=o(f,u),N=W.S;N!==null&&N(w,T),$0(r,i,T)}catch(Y){ip(r,i,Y)}finally{W.T=p}}else try{p=o(f,u),$0(r,i,p)}catch(Y){ip(r,i,Y)}}function $0(r,i,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){q0(r,i,u)},function(u){return ip(r,i,u)}):q0(r,i,o)}function q0(r,i,o){i.status="fulfilled",i.value=o,Y0(i),r.state=o,i=r.pending,i!==null&&(o=i.next,o===i?r.pending=null:(o=o.next,i.next=o,G0(r,o)))}function ip(r,i,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=o,Y0(i),i=i.next;while(i!==u)}r.action=null}function Y0(r){r=r.listeners;for(var i=0;i<r.length;i++)(0,r[i])()}function K0(r,i){return i}function Q0(r,i){if(Qe){var o=ft.formState;if(o!==null){e:{var u=Ne;if(Qe){if(Tt){t:{for(var f=Tt,p=Mr;f.nodeType!==8;){if(!p){f=null;break t}if(f=_r(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){Tt=_r(f.nextSibling),u=f.data==="F!";break e}}hs(u)}u=!1}u&&(i=o[0])}}return o=Rn(),o.memoizedState=o.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:K0,lastRenderedState:i},o.queue=u,o=pv.bind(null,Ne,u),u.dispatch=o,u=rp(!1),p=up.bind(null,Ne,!1,u.queue),u=Rn(),f={state:i,dispatch:null,action:r,pending:null},u.queue=f,o=Y2.bind(null,Ne,f,p,o),f.dispatch=o,u.memoizedState=r,[i,o,!1]}function X0(r){var i=Mt();return W0(i,at,r)}function W0(r,i,o){if(i=tp(r,i,K0)[0],r=qc(wi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=Gl(i)}catch(w){throw w===Ll?zc:w}else u=i;i=Mt();var f=i.queue,p=f.dispatch;return o!==i.memoizedState&&(Ne.flags|=2048,fo(9,Yc(),K2.bind(null,f,o),null)),[u,p,r]}function K2(r,i){r.action=i}function Z0(r){var i=Mt(),o=at;if(o!==null)return W0(i,o,r);Mt(),i=i.memoizedState,o=Mt();var u=o.queue.dispatch;return o.memoizedState=r,[i,u,!1]}function fo(r,i,o,u){return r={tag:r,create:o,deps:u,inst:i,next:null},i=Ne.updateQueue,i===null&&(i=Jd(),Ne.updateQueue=i),o=i.lastEffect,o===null?i.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,i.lastEffect=r),r}function Yc(){return{destroy:void 0,resource:void 0}}function J0(){return Mt().memoizedState}function Kc(r,i,o,u){var f=Rn();u=u===void 0?null:u,Ne.flags|=r,f.memoizedState=fo(1|i,Yc(),o,u)}function $l(r,i,o,u){var f=Mt();u=u===void 0?null:u;var p=f.memoizedState.inst;at!==null&&u!==null&&Kd(u,at.memoizedState.deps)?f.memoizedState=fo(i,p,o,u):(Ne.flags|=r,f.memoizedState=fo(1|i,p,o,u))}function ev(r,i){Kc(8390656,8,r,i)}function tv(r,i){$l(2048,8,r,i)}function nv(r,i){return $l(4,2,r,i)}function rv(r,i){return $l(4,4,r,i)}function iv(r,i){if(typeof i=="function"){r=r();var o=i(r);return function(){typeof o=="function"?o():i(null)}}if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function av(r,i,o){o=o!=null?o.concat([r]):null,$l(4,4,iv.bind(null,i,r),o)}function ap(){}function sv(r,i){var o=Mt();i=i===void 0?null:i;var u=o.memoizedState;return i!==null&&Kd(i,u[1])?u[0]:(o.memoizedState=[r,i],r)}function ov(r,i){var o=Mt();i=i===void 0?null:i;var u=o.memoizedState;if(i!==null&&Kd(i,u[1]))return u[0];if(u=r(),gs){bn(!0);try{r()}finally{bn(!1)}}return o.memoizedState=[u,i],u}function sp(r,i,o){return o===void 0||(ta&1073741824)!==0?r.memoizedState=i:(r.memoizedState=o,r=c1(),Ne.lanes|=r,la|=r,o)}function lv(r,i,o,u){return Ln(o,i)?o:uo.current!==null?(r=sp(r,o,u),Ln(r,i)||(Kt=!0),r):(ta&42)===0?(Kt=!0,r.memoizedState=o):(r=c1(),Ne.lanes|=r,la|=r,i)}function uv(r,i,o,u,f){var p=he.p;he.p=p!==0&&8>p?p:8;var w=W.T,T={};W.T=T,up(r,!1,i,o);try{var N=f(),Y=W.S;if(Y!==null&&Y(T,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ee=G2(N,u);ql(r,i,ee,Fn(r))}else ql(r,i,u,Fn(r))}catch(ie){ql(r,i,{then:function(){},status:"rejected",reason:ie},Fn())}finally{he.p=p,W.T=w}}function Q2(){}function op(r,i,o,u){if(r.tag!==5)throw Error(a(476));var f=cv(r).queue;uv(r,f,i,le,o===null?Q2:function(){return hv(r),o(u)})}function cv(r){var i=r.memoizedState;if(i!==null)return i;i={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:le},next:null};var o={};return i.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:o},next:null},r.memoizedState=i,r=r.alternate,r!==null&&(r.memoizedState=i),i}function hv(r){var i=cv(r).next.queue;ql(r,i,{},Fn())}function lp(){return gn(cu)}function fv(){return Mt().memoizedState}function dv(){return Mt().memoizedState}function X2(r){for(var i=r.return;i!==null;){switch(i.tag){case 24:case 3:var o=Fn();r=Ji(o);var u=ea(i,r,o);u!==null&&(Gn(u,i,o),zl(u,i,o)),i={cache:Ld()},r.payload=i;return}i=i.return}}function W2(r,i,o){var u=Fn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Qc(r)?gv(i,o):(o=Rd(r,i,o,u),o!==null&&(Gn(o,r,u),mv(o,i,u)))}function pv(r,i,o){var u=Fn();ql(r,i,o,u)}function ql(r,i,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qc(r))gv(i,f);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,T=p(w,o);if(f.hasEagerState=!0,f.eagerState=T,Ln(T,w))return kc(r,i,f,0),ft===null&&Oc(),!1}catch{}finally{}if(o=Rd(r,i,f,u),o!==null)return Gn(o,r,u),mv(o,i,u),!0}return!1}function up(r,i,o,u){if(u={lane:2,revertLane:Bp(),action:u,hasEagerState:!1,eagerState:null,next:null},Qc(r)){if(i)throw Error(a(479))}else i=Rd(r,o,u,2),i!==null&&Gn(i,r,2)}function Qc(r){var i=r.alternate;return r===Ne||i!==null&&i===Ne}function gv(r,i){co=Fc=!0;var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}function mv(r,i,o){if((o&4194048)!==0){var u=i.lanes;u&=r.pendingLanes,o|=u,i.lanes=o,Tr(r,o)}}var Xc={readContext:gn,use:$c,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useLayoutEffect:Ct,useInsertionEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useSyncExternalStore:Ct,useId:Ct,useHostTransitionStatus:Ct,useFormState:Ct,useActionState:Ct,useOptimistic:Ct,useMemoCache:Ct,useCacheRefresh:Ct},yv={readContext:gn,use:$c,useCallback:function(r,i){return Rn().memoizedState=[r,i===void 0?null:i],r},useContext:gn,useEffect:ev,useImperativeHandle:function(r,i,o){o=o!=null?o.concat([r]):null,Kc(4194308,4,iv.bind(null,i,r),o)},useLayoutEffect:function(r,i){return Kc(4194308,4,r,i)},useInsertionEffect:function(r,i){Kc(4,2,r,i)},useMemo:function(r,i){var o=Rn();i=i===void 0?null:i;var u=r();if(gs){bn(!0);try{r()}finally{bn(!1)}}return o.memoizedState=[u,i],u},useReducer:function(r,i,o){var u=Rn();if(o!==void 0){var f=o(i);if(gs){bn(!0);try{o(i)}finally{bn(!1)}}}else f=i;return u.memoizedState=u.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},u.queue=r,r=r.dispatch=W2.bind(null,Ne,r),[u.memoizedState,r]},useRef:function(r){var i=Rn();return r={current:r},i.memoizedState=r},useState:function(r){r=rp(r);var i=r.queue,o=pv.bind(null,Ne,i);return i.dispatch=o,[r.memoizedState,o]},useDebugValue:ap,useDeferredValue:function(r,i){var o=Rn();return sp(o,r,i)},useTransition:function(){var r=rp(!1);return r=uv.bind(null,Ne,r.queue,!0,!1),Rn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,i,o){var u=Ne,f=Rn();if(Qe){if(o===void 0)throw Error(a(407));o=o()}else{if(o=i(),ft===null)throw Error(a(349));(Ge&124)!==0||L0(u,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,ev(z0.bind(null,u,p,r),[r]),u.flags|=2048,fo(9,Yc(),U0.bind(null,u,p,o,i),null),o},useId:function(){var r=Rn(),i=ft.identifierPrefix;if(Qe){var o=vi,u=yi;o=(u&~(1<<32-Dt(u)-1)).toString(32)+o,i="«"+i+"R"+o,o=Gc++,0<o&&(i+="H"+o.toString(32)),i+="»"}else o=$2++,i="«"+i+"r"+o.toString(32)+"»";return r.memoizedState=i},useHostTransitionStatus:lp,useFormState:Q0,useActionState:Q0,useOptimistic:function(r){var i=Rn();i.memoizedState=i.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=o,i=up.bind(null,Ne,!0,o),o.dispatch=i,[r,i]},useMemoCache:ep,useCacheRefresh:function(){return Rn().memoizedState=X2.bind(null,Ne)}},vv={readContext:gn,use:$c,useCallback:sv,useContext:gn,useEffect:tv,useImperativeHandle:av,useInsertionEffect:nv,useLayoutEffect:rv,useMemo:ov,useReducer:qc,useRef:J0,useState:function(){return qc(wi)},useDebugValue:ap,useDeferredValue:function(r,i){var o=Mt();return lv(o,at.memoizedState,r,i)},useTransition:function(){var r=qc(wi)[0],i=Mt().memoizedState;return[typeof r=="boolean"?r:Gl(r),i]},useSyncExternalStore:V0,useId:fv,useHostTransitionStatus:lp,useFormState:X0,useActionState:X0,useOptimistic:function(r,i){var o=Mt();return F0(o,at,r,i)},useMemoCache:ep,useCacheRefresh:dv},Z2={readContext:gn,use:$c,useCallback:sv,useContext:gn,useEffect:tv,useImperativeHandle:av,useInsertionEffect:nv,useLayoutEffect:rv,useMemo:ov,useReducer:np,useRef:J0,useState:function(){return np(wi)},useDebugValue:ap,useDeferredValue:function(r,i){var o=Mt();return at===null?sp(o,r,i):lv(o,at.memoizedState,r,i)},useTransition:function(){var r=np(wi)[0],i=Mt().memoizedState;return[typeof r=="boolean"?r:Gl(r),i]},useSyncExternalStore:V0,useId:fv,useHostTransitionStatus:lp,useFormState:Z0,useActionState:Z0,useOptimistic:function(r,i){var o=Mt();return at!==null?F0(o,at,r,i):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:ep,useCacheRefresh:dv},po=null,Yl=0;function Wc(r){var i=Yl;return Yl+=1,po===null&&(po=[]),I0(po,r,i)}function Kl(r,i){i=i.props.ref,r.ref=i!==void 0?i:null}function Zc(r,i){throw i.$$typeof===E?Error(a(525)):(r=Object.prototype.toString.call(i),Error(a(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r)))}function _v(r){var i=r._init;return i(r._payload)}function xv(r){function i(G,L){if(r){var q=G.deletions;q===null?(G.deletions=[L],G.flags|=16):q.push(L)}}function o(G,L){if(!r)return null;for(;L!==null;)i(G,L),L=L.sibling;return null}function u(G){for(var L=new Map;G!==null;)G.key!==null?L.set(G.key,G):L.set(G.index,G),G=G.sibling;return L}function f(G,L){return G=mi(G,L),G.index=0,G.sibling=null,G}function p(G,L,q){return G.index=q,r?(q=G.alternate,q!==null?(q=q.index,q<L?(G.flags|=67108866,L):q):(G.flags|=67108866,L)):(G.flags|=1048576,L)}function w(G){return r&&G.alternate===null&&(G.flags|=67108866),G}function T(G,L,q,ne){return L===null||L.tag!==6?(L=Dd(q,G.mode,ne),L.return=G,L):(L=f(L,q),L.return=G,L)}function N(G,L,q,ne){var ge=q.type;return ge===O?ee(G,L,q.props.children,ne,q.key):L!==null&&(L.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===A&&_v(ge)===L.type)?(L=f(L,q.props),Kl(L,q),L.return=G,L):(L=Mc(q.type,q.key,q.props,null,G.mode,ne),Kl(L,q),L.return=G,L)}function Y(G,L,q,ne){return L===null||L.tag!==4||L.stateNode.containerInfo!==q.containerInfo||L.stateNode.implementation!==q.implementation?(L=Od(q,G.mode,ne),L.return=G,L):(L=f(L,q.children||[]),L.return=G,L)}function ee(G,L,q,ne,ge){return L===null||L.tag!==7?(L=os(q,G.mode,ne,ge),L.return=G,L):(L=f(L,q),L.return=G,L)}function ie(G,L,q){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Dd(""+L,G.mode,q),L.return=G,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case b:return q=Mc(L.type,L.key,L.props,null,G.mode,q),Kl(q,L),q.return=G,q;case C:return L=Od(L,G.mode,q),L.return=G,L;case A:var ne=L._init;return L=ne(L._payload),ie(G,L,q)}if(Xe(L)||H(L))return L=os(L,G.mode,q,null),L.return=G,L;if(typeof L.then=="function")return ie(G,Wc(L),q);if(L.$$typeof===K)return ie(G,Lc(G,L),q);Zc(G,L)}return null}function Q(G,L,q,ne){var ge=L!==null?L.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return ge!==null?null:T(G,L,""+q,ne);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case b:return q.key===ge?N(G,L,q,ne):null;case C:return q.key===ge?Y(G,L,q,ne):null;case A:return ge=q._init,q=ge(q._payload),Q(G,L,q,ne)}if(Xe(q)||H(q))return ge!==null?null:ee(G,L,q,ne,null);if(typeof q.then=="function")return Q(G,L,Wc(q),ne);if(q.$$typeof===K)return Q(G,L,Lc(G,q),ne);Zc(G,q)}return null}function X(G,L,q,ne,ge){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return G=G.get(q)||null,T(L,G,""+ne,ge);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case b:return G=G.get(ne.key===null?q:ne.key)||null,N(L,G,ne,ge);case C:return G=G.get(ne.key===null?q:ne.key)||null,Y(L,G,ne,ge);case A:var Ve=ne._init;return ne=Ve(ne._payload),X(G,L,q,ne,ge)}if(Xe(ne)||H(ne))return G=G.get(q)||null,ee(L,G,ne,ge,null);if(typeof ne.then=="function")return X(G,L,q,Wc(ne),ge);if(ne.$$typeof===K)return X(G,L,q,Lc(L,ne),ge);Zc(L,ne)}return null}function Se(G,L,q,ne){for(var ge=null,Ve=null,ve=L,be=L=0,Xt=null;ve!==null&&be<q.length;be++){ve.index>be?(Xt=ve,ve=null):Xt=ve.sibling;var Ye=Q(G,ve,q[be],ne);if(Ye===null){ve===null&&(ve=Xt);break}r&&ve&&Ye.alternate===null&&i(G,ve),L=p(Ye,L,be),Ve===null?ge=Ye:Ve.sibling=Ye,Ve=Ye,ve=Xt}if(be===q.length)return o(G,ve),Qe&&us(G,be),ge;if(ve===null){for(;be<q.length;be++)ve=ie(G,q[be],ne),ve!==null&&(L=p(ve,L,be),Ve===null?ge=ve:Ve.sibling=ve,Ve=ve);return Qe&&us(G,be),ge}for(ve=u(ve);be<q.length;be++)Xt=X(ve,G,be,q[be],ne),Xt!==null&&(r&&Xt.alternate!==null&&ve.delete(Xt.key===null?be:Xt.key),L=p(Xt,L,be),Ve===null?ge=Xt:Ve.sibling=Xt,Ve=Xt);return r&&ve.forEach(function(ya){return i(G,ya)}),Qe&&us(G,be),ge}function we(G,L,q,ne){if(q==null)throw Error(a(151));for(var ge=null,Ve=null,ve=L,be=L=0,Xt=null,Ye=q.next();ve!==null&&!Ye.done;be++,Ye=q.next()){ve.index>be?(Xt=ve,ve=null):Xt=ve.sibling;var ya=Q(G,ve,Ye.value,ne);if(ya===null){ve===null&&(ve=Xt);break}r&&ve&&ya.alternate===null&&i(G,ve),L=p(ya,L,be),Ve===null?ge=ya:Ve.sibling=ya,Ve=ya,ve=Xt}if(Ye.done)return o(G,ve),Qe&&us(G,be),ge;if(ve===null){for(;!Ye.done;be++,Ye=q.next())Ye=ie(G,Ye.value,ne),Ye!==null&&(L=p(Ye,L,be),Ve===null?ge=Ye:Ve.sibling=Ye,Ve=Ye);return Qe&&us(G,be),ge}for(ve=u(ve);!Ye.done;be++,Ye=q.next())Ye=X(ve,G,be,Ye.value,ne),Ye!==null&&(r&&Ye.alternate!==null&&ve.delete(Ye.key===null?be:Ye.key),L=p(Ye,L,be),Ve===null?ge=Ye:Ve.sibling=Ye,Ve=Ye);return r&&ve.forEach(function(JS){return i(G,JS)}),Qe&&us(G,be),ge}function ot(G,L,q,ne){if(typeof q=="object"&&q!==null&&q.type===O&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case b:e:{for(var ge=q.key;L!==null;){if(L.key===ge){if(ge=q.type,ge===O){if(L.tag===7){o(G,L.sibling),ne=f(L,q.props.children),ne.return=G,G=ne;break e}}else if(L.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===A&&_v(ge)===L.type){o(G,L.sibling),ne=f(L,q.props),Kl(ne,q),ne.return=G,G=ne;break e}o(G,L);break}else i(G,L);L=L.sibling}q.type===O?(ne=os(q.props.children,G.mode,ne,q.key),ne.return=G,G=ne):(ne=Mc(q.type,q.key,q.props,null,G.mode,ne),Kl(ne,q),ne.return=G,G=ne)}return w(G);case C:e:{for(ge=q.key;L!==null;){if(L.key===ge)if(L.tag===4&&L.stateNode.containerInfo===q.containerInfo&&L.stateNode.implementation===q.implementation){o(G,L.sibling),ne=f(L,q.children||[]),ne.return=G,G=ne;break e}else{o(G,L);break}else i(G,L);L=L.sibling}ne=Od(q,G.mode,ne),ne.return=G,G=ne}return w(G);case A:return ge=q._init,q=ge(q._payload),ot(G,L,q,ne)}if(Xe(q))return Se(G,L,q,ne);if(H(q)){if(ge=H(q),typeof ge!="function")throw Error(a(150));return q=ge.call(q),we(G,L,q,ne)}if(typeof q.then=="function")return ot(G,L,Wc(q),ne);if(q.$$typeof===K)return ot(G,L,Lc(G,q),ne);Zc(G,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,L!==null&&L.tag===6?(o(G,L.sibling),ne=f(L,q),ne.return=G,G=ne):(o(G,L),ne=Dd(q,G.mode,ne),ne.return=G,G=ne),w(G)):o(G,L)}return function(G,L,q,ne){try{Yl=0;var ge=ot(G,L,q,ne);return po=null,ge}catch(ve){if(ve===Ll||ve===zc)throw ve;var Ve=Un(29,ve,null,G.mode);return Ve.lanes=ne,Ve.return=G,Ve}finally{}}}var go=xv(!0),wv=xv(!1),ar=te(null),Pr=null;function na(r){var i=r.alternate;se(zt,zt.current&1),se(ar,r),Pr===null&&(i===null||uo.current!==null||i.memoizedState!==null)&&(Pr=r)}function bv(r){if(r.tag===22){if(se(zt,zt.current),se(ar,r),Pr===null){var i=r.alternate;i!==null&&i.memoizedState!==null&&(Pr=r)}}else ra()}function ra(){se(zt,zt.current),se(ar,ar.current)}function bi(r){ue(ar),Pr===r&&(Pr=null),ue(zt)}var zt=te(0);function Jc(r){for(var i=r;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Jp(o)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function cp(r,i,o,u){i=r.memoizedState,o=o(u,i),o=o==null?i:_({},i,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var hp={enqueueSetState:function(r,i,o){r=r._reactInternals;var u=Fn(),f=Ji(u);f.payload=i,o!=null&&(f.callback=o),i=ea(r,f,u),i!==null&&(Gn(i,r,u),zl(i,r,u))},enqueueReplaceState:function(r,i,o){r=r._reactInternals;var u=Fn(),f=Ji(u);f.tag=1,f.payload=i,o!=null&&(f.callback=o),i=ea(r,f,u),i!==null&&(Gn(i,r,u),zl(i,r,u))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var o=Fn(),u=Ji(o);u.tag=2,i!=null&&(u.callback=i),i=ea(r,u,o),i!==null&&(Gn(i,r,o),zl(i,r,o))}};function Ev(r,i,o,u,f,p,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,p,w):i.prototype&&i.prototype.isPureReactComponent?!Dl(o,u)||!Dl(f,p):!0}function Tv(r,i,o,u){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==r&&hp.enqueueReplaceState(i,i.state,null)}function ms(r,i){var o=i;if("ref"in i){o={};for(var u in i)u!=="ref"&&(o[u]=i[u])}if(r=r.defaultProps){o===i&&(o=_({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var eh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function Sv(r){eh(r)}function Av(r){console.error(r)}function Cv(r){eh(r)}function th(r,i){try{var o=r.onUncaughtError;o(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Rv(r,i,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function fp(r,i,o){return o=Ji(o),o.tag=3,o.payload={element:null},o.callback=function(){th(r,i)},o}function Iv(r){return r=Ji(r),r.tag=3,r}function Dv(r,i,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var p=u.value;r.payload=function(){return f(p)},r.callback=function(){Rv(i,o,u)}}var w=o.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(r.callback=function(){Rv(i,o,u),typeof f!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var T=u.stack;this.componentDidCatch(u.value,{componentStack:T!==null?T:""})})}function J2(r,i,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=o.alternate,i!==null&&Pl(i,o,f,!0),o=ar.current,o!==null){switch(o.tag){case 13:return Pr===null?jp():o.alternate===null&&St===0&&(St=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Bd?o.flags|=16384:(i=o.updateQueue,i===null?o.updateQueue=new Set([u]):i.add(u),Lp(r,u,f)),!1;case 22:return o.flags|=65536,u===Bd?o.flags|=16384:(i=o.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=i):(o=i.retryQueue,o===null?i.retryQueue=new Set([u]):o.add(u)),Lp(r,u,f)),!1}throw Error(a(435,o.tag))}return Lp(r,u,f),jp(),!1}if(Qe)return i=ar.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,u!==Md&&(r=Error(a(422),{cause:u}),Ml(tr(r,o)))):(u!==Md&&(i=Error(a(423),{cause:u}),Ml(tr(i,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,u=tr(u,o),f=fp(r.stateNode,u,f),Gd(r,f),St!==4&&(St=2)),!1;var p=Error(a(520),{cause:u});if(p=tr(p,o),tu===null?tu=[p]:tu.push(p),St!==4&&(St=2),i===null)return!0;u=tr(u,o),o=i;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=fp(o.stateNode,u,r),Gd(o,r),!1;case 1:if(i=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ua===null||!ua.has(p))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Iv(f),Dv(f,r,o,u),Gd(o,f),!1}o=o.return}while(o!==null);return!1}var Ov=Error(a(461)),Kt=!1;function on(r,i,o,u){i.child=r===null?wv(i,null,o,u):go(i,r.child,o,u)}function kv(r,i,o,u,f){o=o.render;var p=i.ref;if("ref"in u){var w={};for(var T in u)T!=="ref"&&(w[T]=u[T])}else w=u;return ds(i),u=Qd(r,i,o,w,p,f),T=Xd(),r!==null&&!Kt?(Wd(r,i,f),Ei(r,i,f)):(Qe&&T&&kd(i),i.flags|=1,on(r,i,u,f),i.child)}function Nv(r,i,o,u,f){if(r===null){var p=o.type;return typeof p=="function"&&!Id(p)&&p.defaultProps===void 0&&o.compare===null?(i.tag=15,i.type=p,Mv(r,i,p,u,f)):(r=Mc(o.type,null,u,i,i.mode,f),r.ref=i.ref,r.return=i,i.child=r)}if(p=r.child,!xp(r,f)){var w=p.memoizedProps;if(o=o.compare,o=o!==null?o:Dl,o(w,u)&&r.ref===i.ref)return Ei(r,i,f)}return i.flags|=1,r=mi(p,u),r.ref=i.ref,r.return=i,i.child=r}function Mv(r,i,o,u,f){if(r!==null){var p=r.memoizedProps;if(Dl(p,u)&&r.ref===i.ref)if(Kt=!1,i.pendingProps=u=p,xp(r,f))(r.flags&131072)!==0&&(Kt=!0);else return i.lanes=r.lanes,Ei(r,i,f)}return dp(r,i,o,u,f)}function Pv(r,i,o){var u=i.pendingProps,f=u.children,p=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((i.flags&128)!==0){if(u=p!==null?p.baseLanes|o:o,r!==null){for(f=i.child=r.child,p=0;f!==null;)p=p|f.lanes|f.childLanes,f=f.sibling;i.childLanes=p&~u}else i.childLanes=0,i.child=null;return jv(r,i,u,o)}if((o&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},r!==null&&Uc(i,p!==null?p.cachePool:null),p!==null?M0(i,p):qd(),bv(i);else return i.lanes=i.childLanes=536870912,jv(r,i,p!==null?p.baseLanes|o:o,o)}else p!==null?(Uc(i,p.cachePool),M0(i,p),ra(),i.memoizedState=null):(r!==null&&Uc(i,null),qd(),ra());return on(r,i,f,o),i.child}function jv(r,i,o,u){var f=zd();return f=f===null?null:{parent:Ut._currentValue,pool:f},i.memoizedState={baseLanes:o,cachePool:f},r!==null&&Uc(i,null),qd(),bv(i),r!==null&&Pl(r,i,u,!0),null}function nh(r,i){var o=i.ref;if(o===null)r!==null&&r.ref!==null&&(i.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(r===null||r.ref!==o)&&(i.flags|=4194816)}}function dp(r,i,o,u,f){return ds(i),o=Qd(r,i,o,u,void 0,f),u=Xd(),r!==null&&!Kt?(Wd(r,i,f),Ei(r,i,f)):(Qe&&u&&kd(i),i.flags|=1,on(r,i,o,f),i.child)}function Vv(r,i,o,u,f,p){return ds(i),i.updateQueue=null,o=j0(i,u,o,f),P0(r),u=Xd(),r!==null&&!Kt?(Wd(r,i,p),Ei(r,i,p)):(Qe&&u&&kd(i),i.flags|=1,on(r,i,o,p),i.child)}function Lv(r,i,o,u,f){if(ds(i),i.stateNode===null){var p=io,w=o.contextType;typeof w=="object"&&w!==null&&(p=gn(w)),p=new o(u,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=hp,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=u,p.state=i.memoizedState,p.refs={},Hd(i),w=o.contextType,p.context=typeof w=="object"&&w!==null?gn(w):io,p.state=i.memoizedState,w=o.getDerivedStateFromProps,typeof w=="function"&&(cp(i,o,w,u),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(w=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),w!==p.state&&hp.enqueueReplaceState(p,p.state,null),Hl(i,u,p,f),Bl(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(r===null){p=i.stateNode;var T=i.memoizedProps,N=ms(o,T);p.props=N;var Y=p.context,ee=o.contextType;w=io,typeof ee=="object"&&ee!==null&&(w=gn(ee));var ie=o.getDerivedStateFromProps;ee=typeof ie=="function"||typeof p.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,ee||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(T||Y!==w)&&Tv(i,p,u,w),Zi=!1;var Q=i.memoizedState;p.state=Q,Hl(i,u,p,f),Bl(),Y=i.memoizedState,T||Q!==Y||Zi?(typeof ie=="function"&&(cp(i,o,ie,u),Y=i.memoizedState),(N=Zi||Ev(i,o,N,u,Q,Y,w))?(ee||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=Y),p.props=u,p.state=Y,p.context=w,u=N):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{p=i.stateNode,Fd(r,i),w=i.memoizedProps,ee=ms(o,w),p.props=ee,ie=i.pendingProps,Q=p.context,Y=o.contextType,N=io,typeof Y=="object"&&Y!==null&&(N=gn(Y)),T=o.getDerivedStateFromProps,(Y=typeof T=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w!==ie||Q!==N)&&Tv(i,p,u,N),Zi=!1,Q=i.memoizedState,p.state=Q,Hl(i,u,p,f),Bl();var X=i.memoizedState;w!==ie||Q!==X||Zi||r!==null&&r.dependencies!==null&&Vc(r.dependencies)?(typeof T=="function"&&(cp(i,o,T,u),X=i.memoizedState),(ee=Zi||Ev(i,o,ee,u,Q,X,N)||r!==null&&r.dependencies!==null&&Vc(r.dependencies))?(Y||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,X,N),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,X,N)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||w===r.memoizedProps&&Q===r.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&Q===r.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=X),p.props=u,p.state=X,p.context=N,u=ee):(typeof p.componentDidUpdate!="function"||w===r.memoizedProps&&Q===r.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&Q===r.memoizedState||(i.flags|=1024),u=!1)}return p=u,nh(r,i),u=(i.flags&128)!==0,p||u?(p=i.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,r!==null&&u?(i.child=go(i,r.child,null,f),i.child=go(i,null,o,f)):on(r,i,o,f),i.memoizedState=p.state,r=i.child):r=Ei(r,i,f),r}function Uv(r,i,o,u){return Nl(),i.flags|=256,on(r,i,o,u),i.child}var pp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gp(r){return{baseLanes:r,cachePool:A0()}}function mp(r,i,o){return r=r!==null?r.childLanes&~o:0,i&&(r|=sr),r}function zv(r,i,o){var u=i.pendingProps,f=!1,p=(i.flags&128)!==0,w;if((w=p)||(w=r!==null&&r.memoizedState===null?!1:(zt.current&2)!==0),w&&(f=!0,i.flags&=-129),w=(i.flags&32)!==0,i.flags&=-33,r===null){if(Qe){if(f?na(i):ra(),Qe){var T=Tt,N;if(N=T){e:{for(N=T,T=Mr;N.nodeType!==8;){if(!T){T=null;break e}if(N=_r(N.nextSibling),N===null){T=null;break e}}T=N}T!==null?(i.memoizedState={dehydrated:T,treeContext:ls!==null?{id:yi,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},N=Un(18,null,null,0),N.stateNode=T,N.return=i,i.child=N,An=i,Tt=null,N=!0):N=!1}N||hs(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Jp(T)?i.lanes=32:i.lanes=536870912,null;bi(i)}return T=u.children,u=u.fallback,f?(ra(),f=i.mode,T=rh({mode:"hidden",children:T},f),u=os(u,f,o,null),T.return=i,u.return=i,T.sibling=u,i.child=T,f=i.child,f.memoizedState=gp(o),f.childLanes=mp(r,w,o),i.memoizedState=pp,u):(na(i),yp(i,T))}if(N=r.memoizedState,N!==null&&(T=N.dehydrated,T!==null)){if(p)i.flags&256?(na(i),i.flags&=-257,i=vp(r,i,o)):i.memoizedState!==null?(ra(),i.child=r.child,i.flags|=128,i=null):(ra(),f=u.fallback,T=i.mode,u=rh({mode:"visible",children:u.children},T),f=os(f,T,o,null),f.flags|=2,u.return=i,f.return=i,u.sibling=f,i.child=u,go(i,r.child,null,o),u=i.child,u.memoizedState=gp(o),u.childLanes=mp(r,w,o),i.memoizedState=pp,i=f);else if(na(i),Jp(T)){if(w=T.nextSibling&&T.nextSibling.dataset,w)var Y=w.dgst;w=Y,u=Error(a(419)),u.stack="",u.digest=w,Ml({value:u,source:null,stack:null}),i=vp(r,i,o)}else if(Kt||Pl(r,i,o,!1),w=(o&r.childLanes)!==0,Kt||w){if(w=ft,w!==null&&(u=o&-o,u=(u&42)!==0?1:qe(u),u=(u&(w.suspendedLanes|o))!==0?0:u,u!==0&&u!==N.retryLane))throw N.retryLane=u,ro(r,u),Gn(w,r,u),Ov;T.data==="$?"||jp(),i=vp(r,i,o)}else T.data==="$?"?(i.flags|=192,i.child=r.child,i=null):(r=N.treeContext,Tt=_r(T.nextSibling),An=i,Qe=!0,cs=null,Mr=!1,r!==null&&(rr[ir++]=yi,rr[ir++]=vi,rr[ir++]=ls,yi=r.id,vi=r.overflow,ls=i),i=yp(i,u.children),i.flags|=4096);return i}return f?(ra(),f=u.fallback,T=i.mode,N=r.child,Y=N.sibling,u=mi(N,{mode:"hidden",children:u.children}),u.subtreeFlags=N.subtreeFlags&65011712,Y!==null?f=mi(Y,f):(f=os(f,T,o,null),f.flags|=2),f.return=i,u.return=i,u.sibling=f,i.child=u,u=f,f=i.child,T=r.child.memoizedState,T===null?T=gp(o):(N=T.cachePool,N!==null?(Y=Ut._currentValue,N=N.parent!==Y?{parent:Y,pool:Y}:N):N=A0(),T={baseLanes:T.baseLanes|o,cachePool:N}),f.memoizedState=T,f.childLanes=mp(r,w,o),i.memoizedState=pp,u):(na(i),o=r.child,r=o.sibling,o=mi(o,{mode:"visible",children:u.children}),o.return=i,o.sibling=null,r!==null&&(w=i.deletions,w===null?(i.deletions=[r],i.flags|=16):w.push(r)),i.child=o,i.memoizedState=null,o)}function yp(r,i){return i=rh({mode:"visible",children:i},r.mode),i.return=r,r.child=i}function rh(r,i){return r=Un(22,r,null,i),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function vp(r,i,o){return go(i,r.child,null,o),r=yp(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function Bv(r,i,o){r.lanes|=i;var u=r.alternate;u!==null&&(u.lanes|=i),jd(r.return,i,o)}function _p(r,i,o,u,f){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function Hv(r,i,o){var u=i.pendingProps,f=u.revealOrder,p=u.tail;if(on(r,i,u.children,o),u=zt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Bv(r,o,i);else if(r.tag===19)Bv(r,o,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(se(zt,u),f){case"forwards":for(o=i.child,f=null;o!==null;)r=o.alternate,r!==null&&Jc(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),_p(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(r=f.alternate,r!==null&&Jc(r)===null){i.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}_p(i,!0,o,null,p);break;case"together":_p(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ei(r,i,o){if(r!==null&&(i.dependencies=r.dependencies),la|=i.lanes,(o&i.childLanes)===0)if(r!==null){if(Pl(r,i,o,!1),(o&i.childLanes)===0)return null}else return null;if(r!==null&&i.child!==r.child)throw Error(a(153));if(i.child!==null){for(r=i.child,o=mi(r,r.pendingProps),i.child=o,o.return=i;r.sibling!==null;)r=r.sibling,o=o.sibling=mi(r,r.pendingProps),o.return=i;o.sibling=null}return i.child}function xp(r,i){return(r.lanes&i)!==0?!0:(r=r.dependencies,!!(r!==null&&Vc(r)))}function eS(r,i,o){switch(i.tag){case 3:Pe(i,i.stateNode.containerInfo),Wi(i,Ut,r.memoizedState.cache),Nl();break;case 27:case 5:pn(i);break;case 4:Pe(i,i.stateNode.containerInfo);break;case 10:Wi(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(na(i),i.flags|=128,null):(o&i.child.childLanes)!==0?zv(r,i,o):(na(i),r=Ei(r,i,o),r!==null?r.sibling:null);na(i);break;case 19:var f=(r.flags&128)!==0;if(u=(o&i.childLanes)!==0,u||(Pl(r,i,o,!1),u=(o&i.childLanes)!==0),f){if(u)return Hv(r,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(zt,zt.current),u)break;return null;case 22:case 23:return i.lanes=0,Pv(r,i,o);case 24:Wi(i,Ut,r.memoizedState.cache)}return Ei(r,i,o)}function Fv(r,i,o){if(r!==null)if(r.memoizedProps!==i.pendingProps)Kt=!0;else{if(!xp(r,o)&&(i.flags&128)===0)return Kt=!1,eS(r,i,o);Kt=(r.flags&131072)!==0}else Kt=!1,Qe&&(i.flags&1048576)!==0&&_0(i,jc,i.index);switch(i.lanes=0,i.tag){case 16:e:{r=i.pendingProps;var u=i.elementType,f=u._init;if(u=f(u._payload),i.type=u,typeof u=="function")Id(u)?(r=ms(u,r),i.tag=1,i=Lv(null,i,u,r,o)):(i.tag=0,i=dp(null,i,u,r,o));else{if(u!=null){if(f=u.$$typeof,f===J){i.tag=11,i=kv(null,i,u,r,o);break e}else if(f===D){i.tag=14,i=Nv(null,i,u,r,o);break e}}throw i=et(u)||u,Error(a(306,i,""))}}return i;case 0:return dp(r,i,i.type,i.pendingProps,o);case 1:return u=i.type,f=ms(u,i.pendingProps),Lv(r,i,u,f,o);case 3:e:{if(Pe(i,i.stateNode.containerInfo),r===null)throw Error(a(387));u=i.pendingProps;var p=i.memoizedState;f=p.element,Fd(r,i),Hl(i,u,null,o);var w=i.memoizedState;if(u=w.cache,Wi(i,Ut,u),u!==p.cache&&Vd(i,[Ut],o,!0),Bl(),u=w.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:w.cache},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){i=Uv(r,i,u,o);break e}else if(u!==f){f=tr(Error(a(424)),i),Ml(f),i=Uv(r,i,u,o);break e}else{switch(r=i.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Tt=_r(r.firstChild),An=i,Qe=!0,cs=null,Mr=!0,o=wv(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Nl(),u===f){i=Ei(r,i,o);break e}on(r,i,u,o)}i=i.child}return i;case 26:return nh(r,i),r===null?(o=Y1(i.type,null,i.pendingProps,null))?i.memoizedState=o:Qe||(o=i.type,r=i.pendingProps,u=yh(ye.current).createElement(o),u[Et]=i,u[mt]=r,un(u,o,r),De(u),i.stateNode=u):i.memoizedState=Y1(i.type,r.memoizedProps,i.pendingProps,r.memoizedState),null;case 27:return pn(i),r===null&&Qe&&(u=i.stateNode=G1(i.type,i.pendingProps,ye.current),An=i,Mr=!0,f=Tt,fa(i.type)?(eg=f,Tt=_r(u.firstChild)):Tt=f),on(r,i,i.pendingProps.children,o),nh(r,i),r===null&&(i.flags|=4194304),i.child;case 5:return r===null&&Qe&&((f=u=Tt)&&(u=RS(u,i.type,i.pendingProps,Mr),u!==null?(i.stateNode=u,An=i,Tt=_r(u.firstChild),Mr=!1,f=!0):f=!1),f||hs(i)),pn(i),f=i.type,p=i.pendingProps,w=r!==null?r.memoizedProps:null,u=p.children,Xp(f,p)?u=null:w!==null&&Xp(f,w)&&(i.flags|=32),i.memoizedState!==null&&(f=Qd(r,i,q2,null,null,o),cu._currentValue=f),nh(r,i),on(r,i,u,o),i.child;case 6:return r===null&&Qe&&((r=o=Tt)&&(o=IS(o,i.pendingProps,Mr),o!==null?(i.stateNode=o,An=i,Tt=null,r=!0):r=!1),r||hs(i)),null;case 13:return zv(r,i,o);case 4:return Pe(i,i.stateNode.containerInfo),u=i.pendingProps,r===null?i.child=go(i,null,u,o):on(r,i,u,o),i.child;case 11:return kv(r,i,i.type,i.pendingProps,o);case 7:return on(r,i,i.pendingProps,o),i.child;case 8:return on(r,i,i.pendingProps.children,o),i.child;case 12:return on(r,i,i.pendingProps.children,o),i.child;case 10:return u=i.pendingProps,Wi(i,i.type,u.value),on(r,i,u.children,o),i.child;case 9:return f=i.type._context,u=i.pendingProps.children,ds(i),f=gn(f),u=u(f),i.flags|=1,on(r,i,u,o),i.child;case 14:return Nv(r,i,i.type,i.pendingProps,o);case 15:return Mv(r,i,i.type,i.pendingProps,o);case 19:return Hv(r,i,o);case 31:return u=i.pendingProps,o=i.mode,u={mode:u.mode,children:u.children},r===null?(o=rh(u,o),o.ref=i.ref,i.child=o,o.return=i,i=o):(o=mi(r.child,u),o.ref=i.ref,i.child=o,o.return=i,i=o),i;case 22:return Pv(r,i,o);case 24:return ds(i),u=gn(Ut),r===null?(f=zd(),f===null&&(f=ft,p=Ld(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=o),f=p),i.memoizedState={parent:u,cache:f},Hd(i),Wi(i,Ut,f)):((r.lanes&o)!==0&&(Fd(r,i),Hl(i,null,null,o),Bl()),f=r.memoizedState,p=i.memoizedState,f.parent!==u?(f={parent:u,cache:u},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Wi(i,Ut,u)):(u=p.cache,Wi(i,Ut,u),u!==f.cache&&Vd(i,[Ut],o,!0))),on(r,i,i.pendingProps.children,o),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ti(r){r.flags|=4}function Gv(r,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!Z1(i)){if(i=ar.current,i!==null&&((Ge&4194048)===Ge?Pr!==null:(Ge&62914560)!==Ge&&(Ge&536870912)===0||i!==Pr))throw Ul=Bd,C0;r.flags|=8192}}function ih(r,i){i!==null&&(r.flags|=4),r.flags&16384&&(i=r.tag!==22?qi():536870912,r.lanes|=i,_o|=i)}function Ql(r,i){if(!Qe)switch(r.tailMode){case"hidden":i=r.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function xt(r){var i=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(i)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=u,r.childLanes=o,i}function tS(r,i,o){var u=i.pendingProps;switch(Nd(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(i),null;case 1:return xt(i),null;case 3:return o=i.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),xi(Ut),lt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(kl(i)?Ti(i):r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,b0())),xt(i),null;case 26:return o=i.memoizedState,r===null?(Ti(i),o!==null?(xt(i),Gv(i,o)):(xt(i),i.flags&=-16777217)):o?o!==r.memoizedState?(Ti(i),xt(i),Gv(i,o)):(xt(i),i.flags&=-16777217):(r.memoizedProps!==u&&Ti(i),xt(i),i.flags&=-16777217),null;case 27:Gt(i),o=ye.current;var f=i.type;if(r!==null&&i.stateNode!=null)r.memoizedProps!==u&&Ti(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return xt(i),null}r=pe.current,kl(i)?x0(i):(r=G1(f,u,o),i.stateNode=r,Ti(i))}return xt(i),null;case 5:if(Gt(i),o=i.type,r!==null&&i.stateNode!=null)r.memoizedProps!==u&&Ti(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return xt(i),null}if(r=pe.current,kl(i))x0(i);else{switch(f=yh(ye.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}r[Et]=i,r[mt]=u;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=r;e:switch(un(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ti(i)}}return xt(i),i.flags&=-16777217,null;case 6:if(r&&i.stateNode!=null)r.memoizedProps!==u&&Ti(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(r=ye.current,kl(i)){if(r=i.stateNode,o=i.memoizedProps,u=null,f=An,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}r[Et]=i,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||V1(r.nodeValue,o)),r||hs(i)}else r=yh(r).createTextNode(u),r[Et]=i,i.stateNode=r}return xt(i),null;case 13:if(u=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=kl(i),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Et]=i}else Nl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xt(i),f=!1}else f=b0(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(bi(i),i):(bi(i),null)}if(bi(i),(i.flags&128)!==0)return i.lanes=o,i;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=i.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==f&&(u.flags|=2048)}return o!==r&&o&&(i.child.flags|=8192),ih(i,i.updateQueue),xt(i),null;case 4:return lt(),r===null&&$p(i.stateNode.containerInfo),xt(i),null;case 10:return xi(i.type),xt(i),null;case 19:if(ue(zt),f=i.memoizedState,f===null)return xt(i),null;if(u=(i.flags&128)!==0,p=f.rendering,p===null)if(u)Ql(f,!1);else{if(St!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(p=Jc(r),p!==null){for(i.flags|=128,Ql(f,!1),r=p.updateQueue,i.updateQueue=r,ih(i,r),i.subtreeFlags=0,r=o,o=i.child;o!==null;)v0(o,r),o=o.sibling;return se(zt,zt.current&1|2),i.child}r=r.sibling}f.tail!==null&&en()>oh&&(i.flags|=128,u=!0,Ql(f,!1),i.lanes=4194304)}else{if(!u)if(r=Jc(p),r!==null){if(i.flags|=128,u=!0,r=r.updateQueue,i.updateQueue=r,ih(i,r),Ql(f,!0),f.tail===null&&f.tailMode==="hidden"&&!p.alternate&&!Qe)return xt(i),null}else 2*en()-f.renderingStartTime>oh&&o!==536870912&&(i.flags|=128,u=!0,Ql(f,!1),i.lanes=4194304);f.isBackwards?(p.sibling=i.child,i.child=p):(r=f.last,r!==null?r.sibling=p:i.child=p,f.last=p)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=en(),i.sibling=null,r=zt.current,se(zt,u?r&1|2:r&1),i):(xt(i),null);case 22:case 23:return bi(i),Yd(),u=i.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(o&536870912)!==0&&(i.flags&128)===0&&(xt(i),i.subtreeFlags&6&&(i.flags|=8192)):xt(i),o=i.updateQueue,o!==null&&ih(i,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==o&&(i.flags|=2048),r!==null&&ue(ps),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),xi(Ut),xt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function nS(r,i){switch(Nd(i),i.tag){case 1:return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return xi(Ut),lt(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 26:case 27:case 5:return Gt(i),null;case 13:if(bi(i),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Nl()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return ue(zt),null;case 4:return lt(),null;case 10:return xi(i.type),null;case 22:case 23:return bi(i),Yd(),r!==null&&ue(ps),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 24:return xi(Ut),null;case 25:return null;default:return null}}function $v(r,i){switch(Nd(i),i.tag){case 3:xi(Ut),lt();break;case 26:case 27:case 5:Gt(i);break;case 4:lt();break;case 13:bi(i);break;case 19:ue(zt);break;case 10:xi(i.type);break;case 22:case 23:bi(i),Yd(),r!==null&&ue(ps);break;case 24:xi(Ut)}}function Xl(r,i){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&r)===r){u=void 0;var p=o.create,w=o.inst;u=p(),w.destroy=u}o=o.next}while(o!==f)}}catch(T){ht(i,i.return,T)}}function ia(r,i,o){try{var u=i.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var p=f.next;u=p;do{if((u.tag&r)===r){var w=u.inst,T=w.destroy;if(T!==void 0){w.destroy=void 0,f=i;var N=o,Y=T;try{Y()}catch(ee){ht(f,N,ee)}}}u=u.next}while(u!==p)}}catch(ee){ht(i,i.return,ee)}}function qv(r){var i=r.updateQueue;if(i!==null){var o=r.stateNode;try{N0(i,o)}catch(u){ht(r,r.return,u)}}}function Yv(r,i,o){o.props=ms(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){ht(r,i,u)}}function Wl(r,i){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(f){ht(r,i,f)}}function jr(r,i){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){ht(r,i,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ht(r,i,f)}else o.current=null}function Kv(r){var i=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){ht(r,r.return,f)}}function wp(r,i,o){try{var u=r.stateNode;ES(u,r.type,o,i),u[mt]=i}catch(f){ht(r,r.return,f)}}function Qv(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&fa(r.type)||r.tag===4}function bp(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Qv(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&fa(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ep(r,i,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,i):(i=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,i.appendChild(r),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=mh));else if(u!==4&&(u===27&&fa(r.type)&&(o=r.stateNode,i=null),r=r.child,r!==null))for(Ep(r,i,o),r=r.sibling;r!==null;)Ep(r,i,o),r=r.sibling}function ah(r,i,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?o.insertBefore(r,i):o.appendChild(r);else if(u!==4&&(u===27&&fa(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(ah(r,i,o),r=r.sibling;r!==null;)ah(r,i,o),r=r.sibling}function Xv(r){var i=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);un(i,u,o),i[Et]=r,i[mt]=o}catch(p){ht(r,r.return,p)}}var Si=!1,Rt=!1,Tp=!1,Wv=typeof WeakSet=="function"?WeakSet:Set,Qt=null;function rS(r,i){if(r=r.containerInfo,Kp=Eh,r=l0(r),bd(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var w=0,T=-1,N=-1,Y=0,ee=0,ie=r,Q=null;t:for(;;){for(var X;ie!==o||f!==0&&ie.nodeType!==3||(T=w+f),ie!==p||u!==0&&ie.nodeType!==3||(N=w+u),ie.nodeType===3&&(w+=ie.nodeValue.length),(X=ie.firstChild)!==null;)Q=ie,ie=X;for(;;){if(ie===r)break t;if(Q===o&&++Y===f&&(T=w),Q===p&&++ee===u&&(N=w),(X=ie.nextSibling)!==null)break;ie=Q,Q=ie.parentNode}ie=X}o=T===-1||N===-1?null:{start:T,end:N}}else o=null}o=o||{start:0,end:0}}else o=null;for(Qp={focusedElem:r,selectionRange:o},Eh=!1,Qt=i;Qt!==null;)if(i=Qt,r=i.child,(i.subtreeFlags&1024)!==0&&r!==null)r.return=i,Qt=r;else for(;Qt!==null;){switch(i=Qt,p=i.alternate,r=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&p!==null){r=void 0,o=i,f=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var Se=ms(o.type,f,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(Se,p),u.__reactInternalSnapshotBeforeUpdate=r}catch(we){ht(o,o.return,we)}}break;case 3:if((r&1024)!==0){if(r=i.stateNode.containerInfo,o=r.nodeType,o===9)Zp(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Zp(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(a(163))}if(r=i.sibling,r!==null){r.return=i.return,Qt=r;break}Qt=i.return}}function Zv(r,i,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:aa(r,o),u&4&&Xl(5,o);break;case 1:if(aa(r,o),u&4)if(r=o.stateNode,i===null)try{r.componentDidMount()}catch(w){ht(o,o.return,w)}else{var f=ms(o.type,i.memoizedProps);i=i.memoizedState;try{r.componentDidUpdate(f,i,r.__reactInternalSnapshotBeforeUpdate)}catch(w){ht(o,o.return,w)}}u&64&&qv(o),u&512&&Wl(o,o.return);break;case 3:if(aa(r,o),u&64&&(r=o.updateQueue,r!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{N0(r,i)}catch(w){ht(o,o.return,w)}}break;case 27:i===null&&u&4&&Xv(o);case 26:case 5:aa(r,o),i===null&&u&4&&Kv(o),u&512&&Wl(o,o.return);break;case 12:aa(r,o);break;case 13:aa(r,o),u&4&&t1(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=fS.bind(null,o),DS(r,o))));break;case 22:if(u=o.memoizedState!==null||Si,!u){i=i!==null&&i.memoizedState!==null||Rt,f=Si;var p=Rt;Si=u,(Rt=i)&&!p?sa(r,o,(o.subtreeFlags&8772)!==0):aa(r,o),Si=f,Rt=p}break;case 30:break;default:aa(r,o)}}function Jv(r){var i=r.alternate;i!==null&&(r.alternate=null,Jv(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&dr(i)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var yt=null,In=!1;function Ai(r,i,o){for(o=o.child;o!==null;)e1(r,i,o),o=o.sibling}function e1(r,i,o){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(gt,o)}catch{}switch(o.tag){case 26:Rt||jr(o,i),Ai(r,i,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Rt||jr(o,i);var u=yt,f=In;fa(o.type)&&(yt=o.stateNode,In=!1),Ai(r,i,o),su(o.stateNode),yt=u,In=f;break;case 5:Rt||jr(o,i);case 6:if(u=yt,f=In,yt=null,Ai(r,i,o),yt=u,In=f,yt!==null)if(In)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(o.stateNode)}catch(p){ht(o,i,p)}else try{yt.removeChild(o.stateNode)}catch(p){ht(o,i,p)}break;case 18:yt!==null&&(In?(r=yt,H1(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),pu(r)):H1(yt,o.stateNode));break;case 4:u=yt,f=In,yt=o.stateNode.containerInfo,In=!0,Ai(r,i,o),yt=u,In=f;break;case 0:case 11:case 14:case 15:Rt||ia(2,o,i),Rt||ia(4,o,i),Ai(r,i,o);break;case 1:Rt||(jr(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Yv(o,i,u)),Ai(r,i,o);break;case 21:Ai(r,i,o);break;case 22:Rt=(u=Rt)||o.memoizedState!==null,Ai(r,i,o),Rt=u;break;default:Ai(r,i,o)}}function t1(r,i){if(i.memoizedState===null&&(r=i.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{pu(r)}catch(o){ht(i,i.return,o)}}function iS(r){switch(r.tag){case 13:case 19:var i=r.stateNode;return i===null&&(i=r.stateNode=new Wv),i;case 22:return r=r.stateNode,i=r._retryCache,i===null&&(i=r._retryCache=new Wv),i;default:throw Error(a(435,r.tag))}}function Sp(r,i){var o=iS(r);i.forEach(function(u){var f=dS.bind(null,r,u);o.has(u)||(o.add(u),u.then(f,f))})}function zn(r,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],p=r,w=i,T=w;e:for(;T!==null;){switch(T.tag){case 27:if(fa(T.type)){yt=T.stateNode,In=!1;break e}break;case 5:yt=T.stateNode,In=!1;break e;case 3:case 4:yt=T.stateNode.containerInfo,In=!0;break e}T=T.return}if(yt===null)throw Error(a(160));e1(p,w,f),yt=null,In=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)n1(i,r),i=i.sibling}var vr=null;function n1(r,i){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:zn(i,r),Bn(r),u&4&&(ia(3,r,r.return),Xl(3,r),ia(5,r,r.return));break;case 1:zn(i,r),Bn(r),u&512&&(Rt||o===null||jr(o,o.return)),u&64&&Si&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=vr;if(zn(i,r),Bn(r),u&512&&(Rt||o===null||jr(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":p=f.getElementsByTagName("title")[0],(!p||p[fr]||p[Et]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(u),f.head.insertBefore(p,f.querySelector("head > title"))),un(p,u,o),p[Et]=r,De(p),u=p;break e;case"link":var w=X1("link","href",f).get(u+(o.href||""));if(w){for(var T=0;T<w.length;T++)if(p=w[T],p.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){w.splice(T,1);break t}}p=f.createElement(u),un(p,u,o),f.head.appendChild(p);break;case"meta":if(w=X1("meta","content",f).get(u+(o.content||""))){for(T=0;T<w.length;T++)if(p=w[T],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){w.splice(T,1);break t}}p=f.createElement(u),un(p,u,o),f.head.appendChild(p);break;default:throw Error(a(468,u))}p[Et]=r,De(p),u=p}r.stateNode=u}else W1(f,r.type,r.stateNode);else r.stateNode=Q1(f,u,r.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?W1(f,r.type,r.stateNode):Q1(f,u,r.memoizedProps)):u===null&&r.stateNode!==null&&wp(r,r.memoizedProps,o.memoizedProps)}break;case 27:zn(i,r),Bn(r),u&512&&(Rt||o===null||jr(o,o.return)),o!==null&&u&4&&wp(r,r.memoizedProps,o.memoizedProps);break;case 5:if(zn(i,r),Bn(r),u&512&&(Rt||o===null||jr(o,o.return)),r.flags&32){f=r.stateNode;try{Wn(f,"")}catch(X){ht(r,r.return,X)}}u&4&&r.stateNode!=null&&(f=r.memoizedProps,wp(r,f,o!==null?o.memoizedProps:f)),u&1024&&(Tp=!0);break;case 6:if(zn(i,r),Bn(r),u&4){if(r.stateNode===null)throw Error(a(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(X){ht(r,r.return,X)}}break;case 3:if(xh=null,f=vr,vr=vh(i.containerInfo),zn(i,r),vr=f,Bn(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{pu(i.containerInfo)}catch(X){ht(r,r.return,X)}Tp&&(Tp=!1,r1(r));break;case 4:u=vr,vr=vh(r.stateNode.containerInfo),zn(i,r),Bn(r),vr=u;break;case 12:zn(i,r),Bn(r);break;case 13:zn(i,r),Bn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Op=en()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,Sp(r,u)));break;case 22:f=r.memoizedState!==null;var N=o!==null&&o.memoizedState!==null,Y=Si,ee=Rt;if(Si=Y||f,Rt=ee||N,zn(i,r),Rt=ee,Si=Y,Bn(r),u&8192)e:for(i=r.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(o===null||N||Si||Rt||ys(r)),o=null,i=r;;){if(i.tag===5||i.tag===26){if(o===null){N=o=i;try{if(p=N.stateNode,f)w=p.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{T=N.stateNode;var ie=N.memoizedProps.style,Q=ie!=null&&ie.hasOwnProperty("display")?ie.display:null;T.style.display=Q==null||typeof Q=="boolean"?"":(""+Q).trim()}}catch(X){ht(N,N.return,X)}}}else if(i.tag===6){if(o===null){N=i;try{N.stateNode.nodeValue=f?"":N.memoizedProps}catch(X){ht(N,N.return,X)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===r)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;o===i&&(o=null),i=i.return}o===i&&(o=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Sp(r,o))));break;case 19:zn(i,r),Bn(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,Sp(r,u)));break;case 30:break;case 21:break;default:zn(i,r),Bn(r)}}function Bn(r){var i=r.flags;if(i&2){try{for(var o,u=r.return;u!==null;){if(Qv(u)){o=u;break}u=u.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var f=o.stateNode,p=bp(r);ah(r,p,f);break;case 5:var w=o.stateNode;o.flags&32&&(Wn(w,""),o.flags&=-33);var T=bp(r);ah(r,T,w);break;case 3:case 4:var N=o.stateNode.containerInfo,Y=bp(r);Ep(r,Y,N);break;default:throw Error(a(161))}}catch(ee){ht(r,r.return,ee)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function r1(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var i=r;r1(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),r=r.sibling}}function aa(r,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Zv(r,i.alternate,i),i=i.sibling}function ys(r){for(r=r.child;r!==null;){var i=r;switch(i.tag){case 0:case 11:case 14:case 15:ia(4,i,i.return),ys(i);break;case 1:jr(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&Yv(i,i.return,o),ys(i);break;case 27:su(i.stateNode);case 26:case 5:jr(i,i.return),ys(i);break;case 22:i.memoizedState===null&&ys(i);break;case 30:ys(i);break;default:ys(i)}r=r.sibling}}function sa(r,i,o){for(o=o&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,f=r,p=i,w=p.flags;switch(p.tag){case 0:case 11:case 15:sa(f,p,o),Xl(4,p);break;case 1:if(sa(f,p,o),u=p,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(Y){ht(u,u.return,Y)}if(u=p,f=u.updateQueue,f!==null){var T=u.stateNode;try{var N=f.shared.hiddenCallbacks;if(N!==null)for(f.shared.hiddenCallbacks=null,f=0;f<N.length;f++)k0(N[f],T)}catch(Y){ht(u,u.return,Y)}}o&&w&64&&qv(p),Wl(p,p.return);break;case 27:Xv(p);case 26:case 5:sa(f,p,o),o&&u===null&&w&4&&Kv(p),Wl(p,p.return);break;case 12:sa(f,p,o);break;case 13:sa(f,p,o),o&&w&4&&t1(f,p);break;case 22:p.memoizedState===null&&sa(f,p,o),Wl(p,p.return);break;case 30:break;default:sa(f,p,o)}i=i.sibling}}function Ap(r,i){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&jl(o))}function Cp(r,i){r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&jl(r))}function Vr(r,i,o,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)i1(r,i,o,u),i=i.sibling}function i1(r,i,o,u){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Vr(r,i,o,u),f&2048&&Xl(9,i);break;case 1:Vr(r,i,o,u);break;case 3:Vr(r,i,o,u),f&2048&&(r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&jl(r)));break;case 12:if(f&2048){Vr(r,i,o,u),r=i.stateNode;try{var p=i.memoizedProps,w=p.id,T=p.onPostCommit;typeof T=="function"&&T(w,i.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(N){ht(i,i.return,N)}}else Vr(r,i,o,u);break;case 13:Vr(r,i,o,u);break;case 23:break;case 22:p=i.stateNode,w=i.alternate,i.memoizedState!==null?p._visibility&2?Vr(r,i,o,u):Zl(r,i):p._visibility&2?Vr(r,i,o,u):(p._visibility|=2,mo(r,i,o,u,(i.subtreeFlags&10256)!==0)),f&2048&&Ap(w,i);break;case 24:Vr(r,i,o,u),f&2048&&Cp(i.alternate,i);break;default:Vr(r,i,o,u)}}function mo(r,i,o,u,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var p=r,w=i,T=o,N=u,Y=w.flags;switch(w.tag){case 0:case 11:case 15:mo(p,w,T,N,f),Xl(8,w);break;case 23:break;case 22:var ee=w.stateNode;w.memoizedState!==null?ee._visibility&2?mo(p,w,T,N,f):Zl(p,w):(ee._visibility|=2,mo(p,w,T,N,f)),f&&Y&2048&&Ap(w.alternate,w);break;case 24:mo(p,w,T,N,f),f&&Y&2048&&Cp(w.alternate,w);break;default:mo(p,w,T,N,f)}i=i.sibling}}function Zl(r,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var o=r,u=i,f=u.flags;switch(u.tag){case 22:Zl(o,u),f&2048&&Ap(u.alternate,u);break;case 24:Zl(o,u),f&2048&&Cp(u.alternate,u);break;default:Zl(o,u)}i=i.sibling}}var Jl=8192;function yo(r){if(r.subtreeFlags&Jl)for(r=r.child;r!==null;)a1(r),r=r.sibling}function a1(r){switch(r.tag){case 26:yo(r),r.flags&Jl&&r.memoizedState!==null&&FS(vr,r.memoizedState,r.memoizedProps);break;case 5:yo(r);break;case 3:case 4:var i=vr;vr=vh(r.stateNode.containerInfo),yo(r),vr=i;break;case 22:r.memoizedState===null&&(i=r.alternate,i!==null&&i.memoizedState!==null?(i=Jl,Jl=16777216,yo(r),Jl=i):yo(r));break;default:yo(r)}}function s1(r){var i=r.alternate;if(i!==null&&(r=i.child,r!==null)){i.child=null;do i=r.sibling,r.sibling=null,r=i;while(r!==null)}}function eu(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var u=i[o];Qt=u,l1(u,r)}s1(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)o1(r),r=r.sibling}function o1(r){switch(r.tag){case 0:case 11:case 15:eu(r),r.flags&2048&&ia(9,r,r.return);break;case 3:eu(r);break;case 12:eu(r);break;case 22:var i=r.stateNode;r.memoizedState!==null&&i._visibility&2&&(r.return===null||r.return.tag!==13)?(i._visibility&=-3,sh(r)):eu(r);break;default:eu(r)}}function sh(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var u=i[o];Qt=u,l1(u,r)}s1(r)}for(r=r.child;r!==null;){switch(i=r,i.tag){case 0:case 11:case 15:ia(8,i,i.return),sh(i);break;case 22:o=i.stateNode,o._visibility&2&&(o._visibility&=-3,sh(i));break;default:sh(i)}r=r.sibling}}function l1(r,i){for(;Qt!==null;){var o=Qt;switch(o.tag){case 0:case 11:case 15:ia(8,o,i);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:jl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Qt=u;else e:for(o=r;Qt!==null;){u=Qt;var f=u.sibling,p=u.return;if(Jv(u),u===o){Qt=null;break e}if(f!==null){f.return=p,Qt=f;break e}Qt=p}}}var aS={getCacheForType:function(r){var i=gn(Ut),o=i.data.get(r);return o===void 0&&(o=r(),i.data.set(r,o)),o}},sS=typeof WeakMap=="function"?WeakMap:Map,nt=0,ft=null,Le=null,Ge=0,rt=0,Hn=null,oa=!1,vo=!1,Rp=!1,Ci=0,St=0,la=0,vs=0,Ip=0,sr=0,_o=0,tu=null,Dn=null,Dp=!1,Op=0,oh=1/0,lh=null,ua=null,ln=0,ca=null,xo=null,wo=0,kp=0,Np=null,u1=null,nu=0,Mp=null;function Fn(){if((nt&2)!==0&&Ge!==0)return Ge&-Ge;if(W.T!==null){var r=oo;return r!==0?r:Bp()}return Sr()}function c1(){sr===0&&(sr=(Ge&536870912)===0||Qe?Ga():536870912);var r=ar.current;return r!==null&&(r.flags|=32),sr}function Gn(r,i,o){(r===ft&&(rt===2||rt===9)||r.cancelPendingCommit!==null)&&(bo(r,0),ha(r,Ge,sr,!1)),Kn(r,o),((nt&2)===0||r!==ft)&&(r===ft&&((nt&2)===0&&(vs|=o),St===4&&ha(r,Ge,sr,!1)),Lr(r))}function h1(r,i,o){if((nt&6)!==0)throw Error(a(327));var u=!o&&(i&124)===0&&(i&r.expiredLanes)===0||Er(r,i),f=u?uS(r,i):Vp(r,i,!0),p=u;do{if(f===0){vo&&!u&&ha(r,i,0,!1);break}else{if(o=r.current.alternate,p&&!oS(o)){f=Vp(r,i,!1),p=!1;continue}if(f===2){if(p=i,r.errorRecoveryDisabledLanes&p)var w=0;else w=r.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){i=w;e:{var T=r;f=tu;var N=T.current.memoizedState.isDehydrated;if(N&&(bo(T,w).flags|=256),w=Vp(T,w,!1),w!==2){if(Rp&&!N){T.errorRecoveryDisabledLanes|=p,vs|=p,f=4;break e}p=Dn,Dn=f,p!==null&&(Dn===null?Dn=p:Dn.push.apply(Dn,p))}f=w}if(p=!1,f!==2)continue}}if(f===1){bo(r,0),ha(r,i,0,!0);break}e:{switch(u=r,p=f,p){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ha(u,i,sr,!oa);break e;case 2:Dn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Op+300-en(),10<f)){if(ha(u,i,sr,!oa),ai(u,0,!0)!==0)break e;u.timeoutHandle=z1(f1.bind(null,u,o,Dn,lh,Dp,i,sr,vs,_o,oa,p,2,-0,0),f);break e}f1(u,o,Dn,lh,Dp,i,sr,vs,_o,oa,p,0,-0,0)}}break}while(!0);Lr(r)}function f1(r,i,o,u,f,p,w,T,N,Y,ee,ie,Q,X){if(r.timeoutHandle=-1,ie=i.subtreeFlags,(ie&8192||(ie&16785408)===16785408)&&(uu={stylesheets:null,count:0,unsuspend:HS},a1(i),ie=GS(),ie!==null)){r.cancelPendingCommit=ie(_1.bind(null,r,i,p,o,u,f,w,T,N,ee,1,Q,X)),ha(r,p,w,!Y);return}_1(r,i,p,o,u,f,w,T,N)}function oS(r){for(var i=r;;){var o=i.tag;if((o===0||o===11||o===15)&&i.flags&16384&&(o=i.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!Ln(p(),f))return!1}catch{return!1}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ha(r,i,o,u){i&=~Ip,i&=~vs,r.suspendedLanes|=i,r.pingedLanes&=~i,u&&(r.warmLanes|=i),u=r.expirationTimes;for(var f=i;0<f;){var p=31-Dt(f),w=1<<p;u[p]=-1,f&=~w}o!==0&&dt(r,o,i)}function uh(){return(nt&6)===0?(ru(0),!1):!0}function Pp(){if(Le!==null){if(rt===0)var r=Le.return;else r=Le,_i=fs=null,Zd(r),po=null,Yl=0,r=Le;for(;r!==null;)$v(r.alternate,r),r=r.return;Le=null}}function bo(r,i){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,SS(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),Pp(),ft=r,Le=o=mi(r.current,null),Ge=i,rt=0,Hn=null,oa=!1,vo=Er(r,i),Rp=!1,_o=sr=Ip=vs=la=St=0,Dn=tu=null,Dp=!1,(i&8)!==0&&(i|=i&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=i;0<u;){var f=31-Dt(u),p=1<<f;i|=r[f],u&=~p}return Ci=i,Oc(),o}function d1(r,i){Ne=null,W.H=Xc,i===Ll||i===zc?(i=D0(),rt=3):i===C0?(i=D0(),rt=4):rt=i===Ov?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Hn=i,Le===null&&(St=1,th(r,tr(i,r.current)))}function p1(){var r=W.H;return W.H=Xc,r===null?Xc:r}function g1(){var r=W.A;return W.A=aS,r}function jp(){St=4,oa||(Ge&4194048)!==Ge&&ar.current!==null||(vo=!0),(la&134217727)===0&&(vs&134217727)===0||ft===null||ha(ft,Ge,sr,!1)}function Vp(r,i,o){var u=nt;nt|=2;var f=p1(),p=g1();(ft!==r||Ge!==i)&&(lh=null,bo(r,i)),i=!1;var w=St;e:do try{if(rt!==0&&Le!==null){var T=Le,N=Hn;switch(rt){case 8:Pp(),w=6;break e;case 3:case 2:case 9:case 6:ar.current===null&&(i=!0);var Y=rt;if(rt=0,Hn=null,Eo(r,T,N,Y),o&&vo){w=0;break e}break;default:Y=rt,rt=0,Hn=null,Eo(r,T,N,Y)}}lS(),w=St;break}catch(ee){d1(r,ee)}while(!0);return i&&r.shellSuspendCounter++,_i=fs=null,nt=u,W.H=f,W.A=p,Le===null&&(ft=null,Ge=0,Oc()),w}function lS(){for(;Le!==null;)m1(Le)}function uS(r,i){var o=nt;nt|=2;var u=p1(),f=g1();ft!==r||Ge!==i?(lh=null,oh=en()+500,bo(r,i)):vo=Er(r,i);e:do try{if(rt!==0&&Le!==null){i=Le;var p=Hn;t:switch(rt){case 1:rt=0,Hn=null,Eo(r,i,p,1);break;case 2:case 9:if(R0(p)){rt=0,Hn=null,y1(i);break}i=function(){rt!==2&&rt!==9||ft!==r||(rt=7),Lr(r)},p.then(i,i);break e;case 3:rt=7;break e;case 4:rt=5;break e;case 7:R0(p)?(rt=0,Hn=null,y1(i)):(rt=0,Hn=null,Eo(r,i,p,7));break;case 5:var w=null;switch(Le.tag){case 26:w=Le.memoizedState;case 5:case 27:var T=Le;if(!w||Z1(w)){rt=0,Hn=null;var N=T.sibling;if(N!==null)Le=N;else{var Y=T.return;Y!==null?(Le=Y,ch(Y)):Le=null}break t}}rt=0,Hn=null,Eo(r,i,p,5);break;case 6:rt=0,Hn=null,Eo(r,i,p,6);break;case 8:Pp(),St=6;break e;default:throw Error(a(462))}}cS();break}catch(ee){d1(r,ee)}while(!0);return _i=fs=null,W.H=u,W.A=f,nt=o,Le!==null?0:(ft=null,Ge=0,Oc(),St)}function cS(){for(;Le!==null&&!cr();)m1(Le)}function m1(r){var i=Fv(r.alternate,r,Ci);r.memoizedProps=r.pendingProps,i===null?ch(r):Le=i}function y1(r){var i=r,o=i.alternate;switch(i.tag){case 15:case 0:i=Vv(o,i,i.pendingProps,i.type,void 0,Ge);break;case 11:i=Vv(o,i,i.pendingProps,i.type.render,i.ref,Ge);break;case 5:Zd(i);default:$v(o,i),i=Le=v0(i,Ci),i=Fv(o,i,Ci)}r.memoizedProps=r.pendingProps,i===null?ch(r):Le=i}function Eo(r,i,o,u){_i=fs=null,Zd(i),po=null,Yl=0;var f=i.return;try{if(J2(r,f,i,o,Ge)){St=1,th(r,tr(o,r.current)),Le=null;return}}catch(p){if(f!==null)throw Le=f,p;St=1,th(r,tr(o,r.current)),Le=null;return}i.flags&32768?(Qe||u===1?r=!0:vo||(Ge&536870912)!==0?r=!1:(oa=r=!0,(u===2||u===9||u===3||u===6)&&(u=ar.current,u!==null&&u.tag===13&&(u.flags|=16384))),v1(i,r)):ch(i)}function ch(r){var i=r;do{if((i.flags&32768)!==0){v1(i,oa);return}r=i.return;var o=tS(i.alternate,i,Ci);if(o!==null){Le=o;return}if(i=i.sibling,i!==null){Le=i;return}Le=i=r}while(i!==null);St===0&&(St=5)}function v1(r,i){do{var o=nS(r.alternate,r);if(o!==null){o.flags&=32767,Le=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!i&&(r=r.sibling,r!==null)){Le=r;return}Le=r=o}while(r!==null);St=6,Le=null}function _1(r,i,o,u,f,p,w,T,N){r.cancelPendingCommit=null;do hh();while(ln!==0);if((nt&6)!==0)throw Error(a(327));if(i!==null){if(i===r.current)throw Error(a(177));if(p=i.lanes|i.childLanes,p|=Cd,Ot(r,o,p,w,T,N),r===ft&&(Le=ft=null,Ge=0),xo=i,ca=r,wo=o,kp=p,Np=f,u1=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,pS(ni,function(){return T1(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=W.T,W.T=null,f=he.p,he.p=2,w=nt,nt|=4;try{rS(r,i,o)}finally{nt=w,he.p=f,W.T=u}}ln=1,x1(),w1(),b1()}}function x1(){if(ln===1){ln=0;var r=ca,i=xo,o=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||o){o=W.T,W.T=null;var u=he.p;he.p=2;var f=nt;nt|=4;try{n1(i,r);var p=Qp,w=l0(r.containerInfo),T=p.focusedElem,N=p.selectionRange;if(w!==T&&T&&T.ownerDocument&&o0(T.ownerDocument.documentElement,T)){if(N!==null&&bd(T)){var Y=N.start,ee=N.end;if(ee===void 0&&(ee=Y),"selectionStart"in T)T.selectionStart=Y,T.selectionEnd=Math.min(ee,T.value.length);else{var ie=T.ownerDocument||document,Q=ie&&ie.defaultView||window;if(Q.getSelection){var X=Q.getSelection(),Se=T.textContent.length,we=Math.min(N.start,Se),ot=N.end===void 0?we:Math.min(N.end,Se);!X.extend&&we>ot&&(w=ot,ot=we,we=w);var G=s0(T,we),L=s0(T,ot);if(G&&L&&(X.rangeCount!==1||X.anchorNode!==G.node||X.anchorOffset!==G.offset||X.focusNode!==L.node||X.focusOffset!==L.offset)){var q=ie.createRange();q.setStart(G.node,G.offset),X.removeAllRanges(),we>ot?(X.addRange(q),X.extend(L.node,L.offset)):(q.setEnd(L.node,L.offset),X.addRange(q))}}}}for(ie=[],X=T;X=X.parentNode;)X.nodeType===1&&ie.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ie.length;T++){var ne=ie[T];ne.element.scrollLeft=ne.left,ne.element.scrollTop=ne.top}}Eh=!!Kp,Qp=Kp=null}finally{nt=f,he.p=u,W.T=o}}r.current=i,ln=2}}function w1(){if(ln===2){ln=0;var r=ca,i=xo,o=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||o){o=W.T,W.T=null;var u=he.p;he.p=2;var f=nt;nt|=4;try{Zv(r,i.alternate,i)}finally{nt=f,he.p=u,W.T=o}}ln=3}}function b1(){if(ln===4||ln===3){ln=0,Jt();var r=ca,i=xo,o=wo,u=u1;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?ln=5:(ln=0,xo=ca=null,E1(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(ua=null),tn(o),i=i.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(gt,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=W.T,f=he.p,he.p=2,W.T=null;try{for(var p=r.onRecoverableError,w=0;w<u.length;w++){var T=u[w];p(T.value,{componentStack:T.stack})}}finally{W.T=i,he.p=f}}(wo&3)!==0&&hh(),Lr(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===Mp?nu++:(nu=0,Mp=r):nu=0,ru(0)}}function E1(r,i){(r.pooledCacheLanes&=i)===0&&(i=r.pooledCache,i!=null&&(r.pooledCache=null,jl(i)))}function hh(r){return x1(),w1(),b1(),T1()}function T1(){if(ln!==5)return!1;var r=ca,i=kp;kp=0;var o=tn(wo),u=W.T,f=he.p;try{he.p=32>o?32:o,W.T=null,o=Np,Np=null;var p=ca,w=wo;if(ln=0,xo=ca=null,wo=0,(nt&6)!==0)throw Error(a(331));var T=nt;if(nt|=4,o1(p.current),i1(p,p.current,w,o),nt=T,ru(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(gt,p)}catch{}return!0}finally{he.p=f,W.T=u,E1(r,i)}}function S1(r,i,o){i=tr(o,i),i=fp(r.stateNode,i,2),r=ea(r,i,2),r!==null&&(Kn(r,2),Lr(r))}function ht(r,i,o){if(r.tag===3)S1(r,r,o);else for(;i!==null;){if(i.tag===3){S1(i,r,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ua===null||!ua.has(u))){r=tr(o,r),o=Iv(2),u=ea(i,o,2),u!==null&&(Dv(o,u,i,r),Kn(u,2),Lr(u));break}}i=i.return}}function Lp(r,i,o){var u=r.pingCache;if(u===null){u=r.pingCache=new sS;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(Rp=!0,f.add(o),r=hS.bind(null,r,i,o),i.then(r,r))}function hS(r,i,o){var u=r.pingCache;u!==null&&u.delete(i),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,ft===r&&(Ge&o)===o&&(St===4||St===3&&(Ge&62914560)===Ge&&300>en()-Op?(nt&2)===0&&bo(r,0):Ip|=o,_o===Ge&&(_o=0)),Lr(r)}function A1(r,i){i===0&&(i=qi()),r=ro(r,i),r!==null&&(Kn(r,i),Lr(r))}function fS(r){var i=r.memoizedState,o=0;i!==null&&(o=i.retryLane),A1(r,o)}function dS(r,i){var o=0;switch(r.tag){case 13:var u=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),A1(r,o)}function pS(r,i){return ur(r,i)}var fh=null,To=null,Up=!1,dh=!1,zp=!1,_s=0;function Lr(r){r!==To&&r.next===null&&(To===null?fh=To=r:To=To.next=r),dh=!0,Up||(Up=!0,mS())}function ru(r,i){if(!zp&&dh){zp=!0;do for(var o=!1,u=fh;u!==null;){if(r!==0){var f=u.pendingLanes;if(f===0)var p=0;else{var w=u.suspendedLanes,T=u.pingedLanes;p=(1<<31-Dt(42|r)+1)-1,p&=f&~(w&~T),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(o=!0,D1(u,p))}else p=Ge,p=ai(u,u===ft?p:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(p&3)===0||Er(u,p)||(o=!0,D1(u,p));u=u.next}while(o);zp=!1}}function gS(){C1()}function C1(){dh=Up=!1;var r=0;_s!==0&&(TS()&&(r=_s),_s=0);for(var i=en(),o=null,u=fh;u!==null;){var f=u.next,p=R1(u,i);p===0?(u.next=null,o===null?fh=f:o.next=f,f===null&&(To=o)):(o=u,(r!==0||(p&3)!==0)&&(dh=!0)),u=f}ru(r)}function R1(r,i){for(var o=r.suspendedLanes,u=r.pingedLanes,f=r.expirationTimes,p=r.pendingLanes&-62914561;0<p;){var w=31-Dt(p),T=1<<w,N=f[w];N===-1?((T&o)===0||(T&u)!==0)&&(f[w]=si(T,i)):N<=i&&(r.expiredLanes|=T),p&=~T}if(i=ft,o=Ge,o=ai(r,r===i?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===i&&(rt===2||rt===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&ut(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||Er(r,o)){if(i=o&-o,i===r.callbackPriority)return i;switch(u!==null&&ut(u),tn(o)){case 2:case 8:o=$i;break;case 32:o=ni;break;case 268435456:o=ri;break;default:o=ni}return u=I1.bind(null,r),o=ur(o,u),r.callbackPriority=i,r.callbackNode=o,i}return u!==null&&u!==null&&ut(u),r.callbackPriority=2,r.callbackNode=null,2}function I1(r,i){if(ln!==0&&ln!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(hh()&&r.callbackNode!==o)return null;var u=Ge;return u=ai(r,r===ft?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(h1(r,u,i),R1(r,en()),r.callbackNode!=null&&r.callbackNode===o?I1.bind(null,r):null)}function D1(r,i){if(hh())return null;h1(r,i,!0)}function mS(){AS(function(){(nt&6)!==0?ur(Gi,gS):C1()})}function Bp(){return _s===0&&(_s=Ga()),_s}function O1(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:$s(""+r)}function k1(r,i){var o=i.ownerDocument.createElement("input");return o.name=i.name,o.value=i.value,r.id&&o.setAttribute("form",r.id),i.parentNode.insertBefore(o,i),r=new FormData(r),o.parentNode.removeChild(o),r}function yS(r,i,o,u,f){if(i==="submit"&&o&&o.stateNode===f){var p=O1((f[mt]||null).action),w=u.submitter;w&&(i=(i=w[mt]||null)?O1(i.formAction):w.getAttribute("formAction"),i!==null&&(p=i,w=null));var T=new qs("action","action",null,u,f);r.push({event:T,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(_s!==0){var N=w?k1(f,w):new FormData(f);op(o,{pending:!0,data:N,method:f.method,action:p},null,N)}}else typeof p=="function"&&(T.preventDefault(),N=w?k1(f,w):new FormData(f),op(o,{pending:!0,data:N,method:f.method,action:p},p,N))},currentTarget:f}]})}}for(var Hp=0;Hp<Ad.length;Hp++){var Fp=Ad[Hp],vS=Fp.toLowerCase(),_S=Fp[0].toUpperCase()+Fp.slice(1);yr(vS,"on"+_S)}yr(h0,"onAnimationEnd"),yr(f0,"onAnimationIteration"),yr(d0,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(j2,"onTransitionRun"),yr(V2,"onTransitionStart"),yr(L2,"onTransitionCancel"),yr(p0,"onTransitionEnd"),gr("onMouseEnter",["mouseout","mouseover"]),gr("onMouseLeave",["mouseout","mouseover"]),gr("onPointerEnter",["pointerout","pointerover"]),gr("onPointerLeave",["pointerout","pointerover"]),En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),En("onBeforeInput",["compositionend","keypress","textInput","paste"]),En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var iu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(iu));function N1(r,i){i=(i&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],f=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var w=u.length-1;0<=w;w--){var T=u[w],N=T.instance,Y=T.currentTarget;if(T=T.listener,N!==p&&f.isPropagationStopped())break e;p=T,f.currentTarget=Y;try{p(f)}catch(ee){eh(ee)}f.currentTarget=null,p=N}else for(w=0;w<u.length;w++){if(T=u[w],N=T.instance,Y=T.currentTarget,T=T.listener,N!==p&&f.isPropagationStopped())break e;p=T,f.currentTarget=Y;try{p(f)}catch(ee){eh(ee)}f.currentTarget=null,p=N}}}}function Ue(r,i){var o=i[oi];o===void 0&&(o=i[oi]=new Set);var u=r+"__bubble";o.has(u)||(M1(i,r,2,!1),o.add(u))}function Gp(r,i,o){var u=0;i&&(u|=4),M1(o,r,u,i)}var ph="_reactListening"+Math.random().toString(36).slice(2);function $p(r){if(!r[ph]){r[ph]=!0,rn.forEach(function(o){o!=="selectionchange"&&(xS.has(o)||Gp(o,!1,r),Gp(o,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[ph]||(i[ph]=!0,Gp("selectionchange",!1,i))}}function M1(r,i,o,u){switch(i_(i)){case 2:var f=YS;break;case 8:f=KS;break;default:f=ag}o=f.bind(null,i,o,r),f=void 0,!Jn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?r.addEventListener(i,o,{capture:!0,passive:f}):r.addEventListener(i,o,!0):f!==void 0?r.addEventListener(i,o,{passive:f}):r.addEventListener(i,o,!1)}function qp(r,i,o,u,f){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var T=u.stateNode.containerInfo;if(T===f)break;if(w===4)for(w=u.return;w!==null;){var N=w.tag;if((N===3||N===4)&&w.stateNode.containerInfo===f)return;w=w.return}for(;T!==null;){if(w=pr(T),w===null)return;if(N=w.tag,N===5||N===6||N===26||N===27){u=p=w;continue e}T=T.parentNode}}u=u.return}mc(function(){var Y=p,ee=Zn(o),ie=[];e:{var Q=g0.get(r);if(Q!==void 0){var X=qs,Se=r;switch(r){case"keypress":if(Ir(o)===0)break e;case"keydown":case"keyup":X=Zs;break;case"focusin":Se="focus",X=Qs;break;case"focusout":Se="blur",X=Qs;break;case"beforeblur":case"afterblur":X=Qs;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=er;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Tc;break;case h0:case f0:case d0:X=Xs;break;case p0:X=Ac;break;case"scroll":case"scrollend":X=yc;break;case"wheel":X=Js;break;case"copy":case"cut":case"paste":X=Ws;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Rl;break;case"toggle":case"beforetoggle":X=Rc}var we=(i&4)!==0,ot=!we&&(r==="scroll"||r==="scrollend"),G=we?Q!==null?Q+"Capture":null:Q;we=[];for(var L=Y,q;L!==null;){var ne=L;if(q=ne.stateNode,ne=ne.tag,ne!==5&&ne!==26&&ne!==27||q===null||G===null||(ne=Za(L,G),ne!=null&&we.push(au(L,ne,q))),ot)break;L=L.return}0<we.length&&(Q=new X(Q,Se,null,o,ee),ie.push({event:Q,listeners:we}))}}if((i&7)===0){e:{if(Q=r==="mouseover"||r==="pointerover",X=r==="mouseout"||r==="pointerout",Q&&o!==ci&&(Se=o.relatedTarget||o.fromElement)&&(pr(Se)||Se[nn]))break e;if((X||Q)&&(Q=ee.window===ee?ee:(Q=ee.ownerDocument)?Q.defaultView||Q.parentWindow:window,X?(Se=o.relatedTarget||o.toElement,X=Y,Se=Se?pr(Se):null,Se!==null&&(ot=l(Se),we=Se.tag,Se!==ot||we!==5&&we!==27&&we!==6)&&(Se=null)):(X=null,Se=Y),X!==Se)){if(we=er,ne="onMouseLeave",G="onMouseEnter",L="mouse",(r==="pointerout"||r==="pointerover")&&(we=Rl,ne="onPointerLeave",G="onPointerEnter",L="pointer"),ot=X==null?Q:Ae(X),q=Se==null?Q:Ae(Se),Q=new we(ne,L+"leave",X,o,ee),Q.target=ot,Q.relatedTarget=q,ne=null,pr(ee)===Y&&(we=new we(G,L+"enter",Se,o,ee),we.target=q,we.relatedTarget=ot,ne=we),ot=ne,X&&Se)t:{for(we=X,G=Se,L=0,q=we;q;q=So(q))L++;for(q=0,ne=G;ne;ne=So(ne))q++;for(;0<L-q;)we=So(we),L--;for(;0<q-L;)G=So(G),q--;for(;L--;){if(we===G||G!==null&&we===G.alternate)break t;we=So(we),G=So(G)}we=null}else we=null;X!==null&&P1(ie,Q,X,we,!1),Se!==null&&ot!==null&&P1(ie,ot,Se,we,!0)}}e:{if(Q=Y?Ae(Y):window,X=Q.nodeName&&Q.nodeName.toLowerCase(),X==="select"||X==="input"&&Q.type==="file")var ge=e0;else if(Lt(Q))if(t0)ge=N2;else{ge=O2;var Ve=D2}else X=Q.nodeName,!X||X.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?Y&&wl(Y.elementType)&&(ge=e0):ge=k2;if(ge&&(ge=ge(r,Y))){gi(ie,ge,o,ee);break e}Ve&&Ve(r,Q,Y),r==="focusout"&&Y&&Q.type==="number"&&Y.memoizedProps.value!=null&&Qi(Q,"number",Q.value)}switch(Ve=Y?Ae(Y):window,r){case"focusin":(Lt(Ve)||Ve.contentEditable==="true")&&(eo=Ve,Ed=Y,Ol=null);break;case"focusout":Ol=Ed=eo=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,u0(ie,o,ee);break;case"selectionchange":if(P2)break;case"keydown":case"keyup":u0(ie,o,ee)}var ve;if(kr)e:{switch(r){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else He?Z(r,o)&&(be="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(be="onCompositionStart");be&&(x&&o.locale!=="ko"&&(He||be!=="onCompositionStart"?be==="onCompositionEnd"&&He&&(ve=El()):(Rr=ee,Xi="value"in Rr?Rr.value:Rr.textContent,He=!0)),Ve=gh(Y,be),0<Ve.length&&(be=new Al(be,r,null,o,ee),ie.push({event:be,listeners:Ve}),ve?be.data=ve:(ve=fe(o),ve!==null&&(be.data=ve)))),(ve=y?Vt(r,o):Fe(r,o))&&(be=gh(Y,"onBeforeInput"),0<be.length&&(Ve=new Al("onBeforeInput","beforeinput",null,o,ee),ie.push({event:Ve,listeners:be}),Ve.data=ve)),yS(ie,r,Y,o,ee)}N1(ie,i)})}function au(r,i,o){return{instance:r,listener:i,currentTarget:o}}function gh(r,i){for(var o=i+"Capture",u=[];r!==null;){var f=r,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Za(r,o),f!=null&&u.unshift(au(r,f,p)),f=Za(r,i),f!=null&&u.push(au(r,f,p))),r.tag===3)return u;r=r.return}return[]}function So(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function P1(r,i,o,u,f){for(var p=i._reactName,w=[];o!==null&&o!==u;){var T=o,N=T.alternate,Y=T.stateNode;if(T=T.tag,N!==null&&N===u)break;T!==5&&T!==26&&T!==27||Y===null||(N=Y,f?(Y=Za(o,p),Y!=null&&w.unshift(au(o,Y,N))):f||(Y=Za(o,p),Y!=null&&w.push(au(o,Y,N)))),o=o.return}w.length!==0&&r.push({event:i,listeners:w})}var wS=/\r\n?/g,bS=/\u0000|\uFFFD/g;function j1(r){return(typeof r=="string"?r:""+r).replace(wS,`
`).replace(bS,"")}function V1(r,i){return i=j1(i),j1(r)===i}function mh(){}function st(r,i,o,u,f,p){switch(o){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Wn(r,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Wn(r,""+u);break;case"className":Ar(r,"class",u);break;case"tabIndex":Ar(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ar(r,o,u);break;case"style":xl(r,u,p);break;case"data":if(i!=="object"){Ar(r,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=$s(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(i!=="input"&&st(r,i,"name",f.name,f,null),st(r,i,"formEncType",f.formEncType,f,null),st(r,i,"formMethod",f.formMethod,f,null),st(r,i,"formTarget",f.formTarget,f,null)):(st(r,i,"encType",f.encType,f,null),st(r,i,"method",f.method,f,null),st(r,i,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=$s(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=mh);break;case"onScroll":u!=null&&Ue("scroll",r);break;case"onScrollEnd":u!=null&&Ue("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(a(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=$s(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Ue("beforetoggle",r),Ue("toggle",r),Ki(r,"popover",u);break;case"xlinkActuate":an(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":an(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":an(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":an(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":an(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":an(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":an(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":an(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":an(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ki(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=md.get(o)||o,Ki(r,o,u))}}function Yp(r,i,o,u,f,p){switch(o){case"style":xl(r,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(a(60));r.innerHTML=o}}break;case"children":typeof u=="string"?Wn(r,u):(typeof u=="number"||typeof u=="bigint")&&Wn(r,""+u);break;case"onScroll":u!=null&&Ue("scroll",r);break;case"onScrollEnd":u!=null&&Ue("scrollend",r);break;case"onClick":u!=null&&(r.onclick=mh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$t.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),i=o.slice(2,f?o.length-7:void 0),p=r[mt]||null,p=p!=null?p[o]:null,typeof p=="function"&&r.removeEventListener(i,p,f),typeof u=="function")){typeof p!="function"&&p!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(i,u,f);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):Ki(r,o,u)}}}function un(r,i,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",r),Ue("load",r);var u=!1,f=!1,p;for(p in o)if(o.hasOwnProperty(p)){var w=o[p];if(w!=null)switch(p){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:st(r,i,p,w,o,null)}}f&&st(r,i,"srcSet",o.srcSet,o,null),u&&st(r,i,"src",o.src,o,null);return;case"input":Ue("invalid",r);var T=p=w=f=null,N=null,Y=null;for(u in o)if(o.hasOwnProperty(u)){var ee=o[u];if(ee!=null)switch(u){case"name":f=ee;break;case"type":w=ee;break;case"checked":N=ee;break;case"defaultChecked":Y=ee;break;case"value":p=ee;break;case"defaultValue":T=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(a(137,i));break;default:st(r,i,u,ee,o,null)}}Qa(r,p,T,N,Y,w,f,!1),Gs(r);return;case"select":Ue("invalid",r),u=w=p=null;for(f in o)if(o.hasOwnProperty(f)&&(T=o[f],T!=null))switch(f){case"value":p=T;break;case"defaultValue":w=T;break;case"multiple":u=T;default:st(r,i,f,T,o,null)}i=p,o=w,r.multiple=!!u,i!=null?ui(r,!!u,i,!1):o!=null&&ui(r,!!u,o,!0);return;case"textarea":Ue("invalid",r),p=f=u=null;for(w in o)if(o.hasOwnProperty(w)&&(T=o[w],T!=null))switch(w){case"value":u=T;break;case"defaultValue":f=T;break;case"children":p=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:st(r,i,w,T,o,null)}Xa(r,u,f,p),Gs(r);return;case"option":for(N in o)if(o.hasOwnProperty(N)&&(u=o[N],u!=null))switch(N){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:st(r,i,N,u,o,null)}return;case"dialog":Ue("beforetoggle",r),Ue("toggle",r),Ue("cancel",r),Ue("close",r);break;case"iframe":case"object":Ue("load",r);break;case"video":case"audio":for(u=0;u<iu.length;u++)Ue(iu[u],r);break;case"image":Ue("error",r),Ue("load",r);break;case"details":Ue("toggle",r);break;case"embed":case"source":case"link":Ue("error",r),Ue("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in o)if(o.hasOwnProperty(Y)&&(u=o[Y],u!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:st(r,i,Y,u,o,null)}return;default:if(wl(i)){for(ee in o)o.hasOwnProperty(ee)&&(u=o[ee],u!==void 0&&Yp(r,i,ee,u,o,void 0));return}}for(T in o)o.hasOwnProperty(T)&&(u=o[T],u!=null&&st(r,i,T,u,o,null))}function ES(r,i,o,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,w=null,T=null,N=null,Y=null,ee=null;for(X in o){var ie=o[X];if(o.hasOwnProperty(X)&&ie!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":N=ie;default:u.hasOwnProperty(X)||st(r,i,X,null,u,ie)}}for(var Q in u){var X=u[Q];if(ie=o[Q],u.hasOwnProperty(Q)&&(X!=null||ie!=null))switch(Q){case"type":p=X;break;case"name":f=X;break;case"checked":Y=X;break;case"defaultChecked":ee=X;break;case"value":w=X;break;case"defaultValue":T=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(a(137,i));break;default:X!==ie&&st(r,i,Q,X,u,ie)}}Vn(r,w,T,N,Y,ee,p,f);return;case"select":X=w=T=Q=null;for(p in o)if(N=o[p],o.hasOwnProperty(p)&&N!=null)switch(p){case"value":break;case"multiple":X=N;default:u.hasOwnProperty(p)||st(r,i,p,null,u,N)}for(f in u)if(p=u[f],N=o[f],u.hasOwnProperty(f)&&(p!=null||N!=null))switch(f){case"value":Q=p;break;case"defaultValue":T=p;break;case"multiple":w=p;default:p!==N&&st(r,i,f,p,u,N)}i=T,o=w,u=X,Q!=null?ui(r,!!o,Q,!1):!!u!=!!o&&(i!=null?ui(r,!!o,i,!0):ui(r,!!o,o?[]:"",!1));return;case"textarea":X=Q=null;for(T in o)if(f=o[T],o.hasOwnProperty(T)&&f!=null&&!u.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:st(r,i,T,null,u,f)}for(w in u)if(f=u[w],p=o[w],u.hasOwnProperty(w)&&(f!=null||p!=null))switch(w){case"value":Q=f;break;case"defaultValue":X=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==p&&st(r,i,w,f,u,p)}it(r,Q,X);return;case"option":for(var Se in o)if(Q=o[Se],o.hasOwnProperty(Se)&&Q!=null&&!u.hasOwnProperty(Se))switch(Se){case"selected":r.selected=!1;break;default:st(r,i,Se,null,u,Q)}for(N in u)if(Q=u[N],X=o[N],u.hasOwnProperty(N)&&Q!==X&&(Q!=null||X!=null))switch(N){case"selected":r.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:st(r,i,N,Q,u,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in o)Q=o[we],o.hasOwnProperty(we)&&Q!=null&&!u.hasOwnProperty(we)&&st(r,i,we,null,u,Q);for(Y in u)if(Q=u[Y],X=o[Y],u.hasOwnProperty(Y)&&Q!==X&&(Q!=null||X!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(a(137,i));break;default:st(r,i,Y,Q,u,X)}return;default:if(wl(i)){for(var ot in o)Q=o[ot],o.hasOwnProperty(ot)&&Q!==void 0&&!u.hasOwnProperty(ot)&&Yp(r,i,ot,void 0,u,Q);for(ee in u)Q=u[ee],X=o[ee],!u.hasOwnProperty(ee)||Q===X||Q===void 0&&X===void 0||Yp(r,i,ee,Q,u,X);return}}for(var G in o)Q=o[G],o.hasOwnProperty(G)&&Q!=null&&!u.hasOwnProperty(G)&&st(r,i,G,null,u,Q);for(ie in u)Q=u[ie],X=o[ie],!u.hasOwnProperty(ie)||Q===X||Q==null&&X==null||st(r,i,ie,Q,u,X)}var Kp=null,Qp=null;function yh(r){return r.nodeType===9?r:r.ownerDocument}function L1(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U1(r,i){if(r===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&i==="foreignObject"?0:r}function Xp(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wp=null;function TS(){var r=window.event;return r&&r.type==="popstate"?r===Wp?!1:(Wp=r,!0):(Wp=null,!1)}var z1=typeof setTimeout=="function"?setTimeout:void 0,SS=typeof clearTimeout=="function"?clearTimeout:void 0,B1=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof B1<"u"?function(r){return B1.resolve(null).then(r).catch(CS)}:z1;function CS(r){setTimeout(function(){throw r})}function fa(r){return r==="head"}function H1(r,i){var o=i,u=0,f=0;do{var p=o.nextSibling;if(r.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(0<u&&8>u){o=u;var w=r.ownerDocument;if(o&1&&su(w.documentElement),o&2&&su(w.body),o&4)for(o=w.head,su(o),w=o.firstChild;w;){var T=w.nextSibling,N=w.nodeName;w[fr]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&w.rel.toLowerCase()==="stylesheet"||o.removeChild(w),w=T}}if(f===0){r.removeChild(p),pu(i);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=p}while(o);pu(i)}function Zp(r){var i=r.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var o=i;switch(i=i.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Zp(o),dr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function RS(r,i,o,u){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[fr])switch(i){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(p=r.getAttribute("rel"),p==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(p!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(p=r.getAttribute("src"),(p!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(i==="input"&&r.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===p)return r}else return r;if(r=_r(r.nextSibling),r===null)break}return null}function IS(r,i,o){if(i==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=_r(r.nextSibling),r===null))return null;return r}function Jp(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function DS(r,i){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")i();else{var u=function(){i(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function _r(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return r}var eg=null;function F1(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return r;i--}else o==="/$"&&i++}r=r.previousSibling}return null}function G1(r,i,o){switch(i=yh(o),r){case"html":if(r=i.documentElement,!r)throw Error(a(452));return r;case"head":if(r=i.head,!r)throw Error(a(453));return r;case"body":if(r=i.body,!r)throw Error(a(454));return r;default:throw Error(a(451))}}function su(r){for(var i=r.attributes;i.length;)r.removeAttributeNode(i[0]);dr(r)}var or=new Map,$1=new Set;function vh(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Ri=he.d;he.d={f:OS,r:kS,D:NS,C:MS,L:PS,m:jS,X:LS,S:VS,M:US};function OS(){var r=Ri.f(),i=uh();return r||i}function kS(r){var i=Xn(r);i!==null&&i.tag===5&&i.type==="form"?hv(i):Ri.r(r)}var Ao=typeof document>"u"?null:document;function q1(r,i,o){var u=Ao;if(u&&typeof i=="string"&&i){var f=kt(i);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),$1.has(f)||($1.add(f),r={rel:r,crossOrigin:o,href:i},u.querySelector(f)===null&&(i=u.createElement("link"),un(i,"link",r),De(i),u.head.appendChild(i)))}}function NS(r){Ri.D(r),q1("dns-prefetch",r,null)}function MS(r,i){Ri.C(r,i),q1("preconnect",r,i)}function PS(r,i,o){Ri.L(r,i,o);var u=Ao;if(u&&r&&i){var f='link[rel="preload"][as="'+kt(i)+'"]';i==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+kt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+kt(o.imageSizes)+'"]')):f+='[href="'+kt(r)+'"]';var p=f;switch(i){case"style":p=Co(r);break;case"script":p=Ro(r)}or.has(p)||(r=_({rel:"preload",href:i==="image"&&o&&o.imageSrcSet?void 0:r,as:i},o),or.set(p,r),u.querySelector(f)!==null||i==="style"&&u.querySelector(ou(p))||i==="script"&&u.querySelector(lu(p))||(i=u.createElement("link"),un(i,"link",r),De(i),u.head.appendChild(i)))}}function jS(r,i){Ri.m(r,i);var o=Ao;if(o&&r){var u=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+kt(u)+'"][href="'+kt(r)+'"]',p=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Ro(r)}if(!or.has(p)&&(r=_({rel:"modulepreload",href:r},i),or.set(p,r),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(lu(p)))return}u=o.createElement("link"),un(u,"link",r),De(u),o.head.appendChild(u)}}}function VS(r,i,o){Ri.S(r,i,o);var u=Ao;if(u&&r){var f=je(u).hoistableStyles,p=Co(r);i=i||"default";var w=f.get(p);if(!w){var T={loading:0,preload:null};if(w=u.querySelector(ou(p)))T.loading=5;else{r=_({rel:"stylesheet",href:r,"data-precedence":i},o),(o=or.get(p))&&tg(r,o);var N=w=u.createElement("link");De(N),un(N,"link",r),N._p=new Promise(function(Y,ee){N.onload=Y,N.onerror=ee}),N.addEventListener("load",function(){T.loading|=1}),N.addEventListener("error",function(){T.loading|=2}),T.loading|=4,_h(w,i,u)}w={type:"stylesheet",instance:w,count:1,state:T},f.set(p,w)}}}function LS(r,i){Ri.X(r,i);var o=Ao;if(o&&r){var u=je(o).hoistableScripts,f=Ro(r),p=u.get(f);p||(p=o.querySelector(lu(f)),p||(r=_({src:r,async:!0},i),(i=or.get(f))&&ng(r,i),p=o.createElement("script"),De(p),un(p,"link",r),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function US(r,i){Ri.M(r,i);var o=Ao;if(o&&r){var u=je(o).hoistableScripts,f=Ro(r),p=u.get(f);p||(p=o.querySelector(lu(f)),p||(r=_({src:r,async:!0,type:"module"},i),(i=or.get(f))&&ng(r,i),p=o.createElement("script"),De(p),un(p,"link",r),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function Y1(r,i,o,u){var f=(f=ye.current)?vh(f):null;if(!f)throw Error(a(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(i=Co(o.href),o=je(f).hoistableStyles,u=o.get(i),u||(u={type:"style",instance:null,count:0,state:null},o.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=Co(o.href);var p=je(f).hoistableStyles,w=p.get(r);if(w||(f=f.ownerDocument||f,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(r,w),(p=f.querySelector(ou(r)))&&!p._p&&(w.instance=p,w.state.loading=5),or.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},or.set(r,o),p||zS(f,r,o,w.state))),i&&u===null)throw Error(a(528,""));return w}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=o.async,o=o.src,typeof o=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ro(o),o=je(f).hoistableScripts,u=o.get(i),u||(u={type:"script",instance:null,count:0,state:null},o.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,r))}}function Co(r){return'href="'+kt(r)+'"'}function ou(r){return'link[rel="stylesheet"]['+r+"]"}function K1(r){return _({},r,{"data-precedence":r.precedence,precedence:null})}function zS(r,i,o,u){r.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=r.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),un(i,"link",o),De(i),r.head.appendChild(i))}function Ro(r){return'[src="'+kt(r)+'"]'}function lu(r){return"script[async]"+r}function Q1(r,i,o){if(i.count++,i.instance===null)switch(i.type){case"style":var u=r.querySelector('style[data-href~="'+kt(o.href)+'"]');if(u)return i.instance=u,De(u),u;var f=_({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),De(u),un(u,"style",f),_h(u,o.precedence,r),i.instance=u;case"stylesheet":f=Co(o.href);var p=r.querySelector(ou(f));if(p)return i.state.loading|=4,i.instance=p,De(p),p;u=K1(o),(f=or.get(f))&&tg(u,f),p=(r.ownerDocument||r).createElement("link"),De(p);var w=p;return w._p=new Promise(function(T,N){w.onload=T,w.onerror=N}),un(p,"link",u),i.state.loading|=4,_h(p,o.precedence,r),i.instance=p;case"script":return p=Ro(o.src),(f=r.querySelector(lu(p)))?(i.instance=f,De(f),f):(u=o,(f=or.get(p))&&(u=_({},o),ng(u,f)),r=r.ownerDocument||r,f=r.createElement("script"),De(f),un(f,"link",u),r.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,_h(u,o.precedence,r));return i.instance}function _h(r,i,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,p=f,w=0;w<u.length;w++){var T=u[w];if(T.dataset.precedence===i)p=T;else if(p!==f)break}p?p.parentNode.insertBefore(r,p.nextSibling):(i=o.nodeType===9?o.head:o,i.insertBefore(r,i.firstChild))}function tg(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.title==null&&(r.title=i.title)}function ng(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.integrity==null&&(r.integrity=i.integrity)}var xh=null;function X1(r,i,o){if(xh===null){var u=new Map,f=xh=new Map;f.set(o,u)}else f=xh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var p=o[f];if(!(p[fr]||p[Et]||r==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var w=p.getAttribute(i)||"";w=r+w;var T=u.get(w);T?T.push(p):u.set(w,[p])}}return u}function W1(r,i,o){r=r.ownerDocument||r,r.head.insertBefore(o,i==="title"?r.querySelector("head > title"):null)}function BS(r,i,o){if(o===1||i.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return r=i.disabled,typeof i.precedence=="string"&&r==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Z1(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var uu=null;function HS(){}function FS(r,i,o){if(uu===null)throw Error(a(475));var u=uu;if(i.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=Co(o.href),p=r.querySelector(ou(f));if(p){r=p._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=wh.bind(u),r.then(u,u)),i.state.loading|=4,i.instance=p,De(p);return}p=r.ownerDocument||r,o=K1(o),(f=or.get(f))&&tg(o,f),p=p.createElement("link"),De(p);var w=p;w._p=new Promise(function(T,N){w.onload=T,w.onerror=N}),un(p,"link",o),i.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,r),(r=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=wh.bind(u),r.addEventListener("load",i),r.addEventListener("error",i))}}function GS(){if(uu===null)throw Error(a(475));var r=uu;return r.stylesheets&&r.count===0&&rg(r,r.stylesheets),0<r.count?function(i){var o=setTimeout(function(){if(r.stylesheets&&rg(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=i,function(){r.unsuspend=null,clearTimeout(o)}}:null}function wh(){if(this.count--,this.count===0){if(this.stylesheets)rg(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var bh=null;function rg(r,i){r.stylesheets=null,r.unsuspend!==null&&(r.count++,bh=new Map,i.forEach($S,r),bh=null,wh.call(r))}function $S(r,i){if(!(i.state.loading&4)){var o=bh.get(r);if(o)var u=o.get(null);else{o=new Map,bh.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var w=f[p];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(o.set(w.dataset.precedence,w),u=w)}u&&o.set(null,u)}f=i.instance,w=f.getAttribute("data-precedence"),p=o.get(w)||u,p===u&&o.set(null,f),o.set(w,f),this.count++,u=wh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),p?p.parentNode.insertBefore(f,p.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),i.state.loading|=4}}var cu={$$typeof:K,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function qS(r,i,o,u,f,p,w,T){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hr(0),this.hiddenUpdates=hr(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function J1(r,i,o,u,f,p,w,T,N,Y,ee,ie){return r=new qS(r,i,o,w,T,N,Y,ie),i=1,p===!0&&(i|=24),p=Un(3,null,null,i),r.current=p,p.stateNode=r,i=Ld(),i.refCount++,r.pooledCache=i,i.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:i},Hd(p),r}function e_(r){return r?(r=io,r):io}function t_(r,i,o,u,f,p){f=e_(f),u.context===null?u.context=f:u.pendingContext=f,u=Ji(i),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=ea(r,u,i),o!==null&&(Gn(o,r,i),zl(o,r,i))}function n_(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<i?o:i}}function ig(r,i){n_(r,i),(r=r.alternate)&&n_(r,i)}function r_(r){if(r.tag===13){var i=ro(r,67108864);i!==null&&Gn(i,r,67108864),ig(r,67108864)}}var Eh=!0;function YS(r,i,o,u){var f=W.T;W.T=null;var p=he.p;try{he.p=2,ag(r,i,o,u)}finally{he.p=p,W.T=f}}function KS(r,i,o,u){var f=W.T;W.T=null;var p=he.p;try{he.p=8,ag(r,i,o,u)}finally{he.p=p,W.T=f}}function ag(r,i,o,u){if(Eh){var f=sg(u);if(f===null)qp(r,i,u,Th,o),a_(r,u);else if(XS(f,r,i,o,u))u.stopPropagation();else if(a_(r,u),i&4&&-1<QS.indexOf(r)){for(;f!==null;){var p=Xn(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var w=jn(p.pendingLanes);if(w!==0){var T=p;for(T.pendingLanes|=2,T.entangledLanes|=2;w;){var N=1<<31-Dt(w);T.entanglements[1]|=N,w&=~N}Lr(p),(nt&6)===0&&(oh=en()+500,ru(0))}}break;case 13:T=ro(p,2),T!==null&&Gn(T,p,2),uh(),ig(p,2)}if(p=sg(u),p===null&&qp(r,i,u,Th,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else qp(r,i,u,null,o)}}function sg(r){return r=Zn(r),og(r)}var Th=null;function og(r){if(Th=null,r=pr(r),r!==null){var i=l(r);if(i===null)r=null;else{var o=i.tag;if(o===13){if(r=h(i),r!==null)return r;r=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null)}}return Th=r,null}function i_(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(js()){case Gi:return 2;case $i:return 8;case ni:case ml:return 32;case ri:return 268435456;default:return 32}default:return 32}}var lg=!1,da=null,pa=null,ga=null,hu=new Map,fu=new Map,ma=[],QS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a_(r,i){switch(r){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ga=null;break;case"pointerover":case"pointerout":hu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fu.delete(i.pointerId)}}function du(r,i,o,u,f,p){return r===null||r.nativeEvent!==p?(r={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},i!==null&&(i=Xn(i),i!==null&&r_(i)),r):(r.eventSystemFlags|=u,i=r.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),r)}function XS(r,i,o,u,f){switch(i){case"focusin":return da=du(da,r,i,o,u,f),!0;case"dragenter":return pa=du(pa,r,i,o,u,f),!0;case"mouseover":return ga=du(ga,r,i,o,u,f),!0;case"pointerover":var p=f.pointerId;return hu.set(p,du(hu.get(p)||null,r,i,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,fu.set(p,du(fu.get(p)||null,r,i,o,u,f)),!0}return!1}function s_(r){var i=pr(r.target);if(i!==null){var o=l(i);if(o!==null){if(i=o.tag,i===13){if(i=h(o),i!==null){r.blockedOn=i,Yi(r.priority,function(){if(o.tag===13){var u=Fn();u=qe(u);var f=ro(o,u);f!==null&&Gn(f,o,u),ig(o,u)}});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Sh(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var o=sg(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);ci=u,o.target.dispatchEvent(u),ci=null}else return i=Xn(o),i!==null&&r_(i),r.blockedOn=o,!1;i.shift()}return!0}function o_(r,i,o){Sh(r)&&o.delete(i)}function WS(){lg=!1,da!==null&&Sh(da)&&(da=null),pa!==null&&Sh(pa)&&(pa=null),ga!==null&&Sh(ga)&&(ga=null),hu.forEach(o_),fu.forEach(o_)}function Ah(r,i){r.blockedOn===i&&(r.blockedOn=null,lg||(lg=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,WS)))}var Ch=null;function l_(r){Ch!==r&&(Ch=r,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Ch===r&&(Ch=null);for(var i=0;i<r.length;i+=3){var o=r[i],u=r[i+1],f=r[i+2];if(typeof u!="function"){if(og(u||o)===null)continue;break}var p=Xn(o);p!==null&&(r.splice(i,3),i-=3,op(p,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function pu(r){function i(N){return Ah(N,r)}da!==null&&Ah(da,r),pa!==null&&Ah(pa,r),ga!==null&&Ah(ga,r),hu.forEach(i),fu.forEach(i);for(var o=0;o<ma.length;o++){var u=ma[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<ma.length&&(o=ma[0],o.blockedOn===null);)s_(o),o.blockedOn===null&&ma.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],p=o[u+1],w=f[mt]||null;if(typeof p=="function")w||l_(o);else if(w){var T=null;if(p&&p.hasAttribute("formAction")){if(f=p,w=p[mt]||null)T=w.formAction;else if(og(f)!==null)continue}else T=w.action;typeof T=="function"?o[u+1]=T:(o.splice(u,3),u-=3),l_(o)}}}function ug(r){this._internalRoot=r}Rh.prototype.render=ug.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(a(409));var o=i.current,u=Fn();t_(o,u,r,i,null,null)},Rh.prototype.unmount=ug.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;t_(r.current,2,null,r,null,null),uh(),i[nn]=null}};function Rh(r){this._internalRoot=r}Rh.prototype.unstable_scheduleHydration=function(r){if(r){var i=Sr();r={blockedOn:null,target:r,priority:i};for(var o=0;o<ma.length&&i!==0&&i<ma[o].priority;o++);ma.splice(o,0,r),o===0&&s_(r)}};var u_=e.version;if(u_!=="19.1.0")throw Error(a(527,u_,"19.1.0"));he.findDOMNode=function(r){var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(a(188)):(r=Object.keys(r).join(","),Error(a(268,r)));return r=g(i),r=r!==null?m(r):null,r=r===null?null:r.stateNode,r};var ZS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:W,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ih=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ih.isDisabled&&Ih.supportsFiber)try{gt=Ih.inject(ZS),Ke=Ih}catch{}}return mu.createRoot=function(r,i){if(!s(r))throw Error(a(299));var o=!1,u="",f=Sv,p=Av,w=Cv,T=null;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(w=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=J1(r,1,!1,null,null,o,u,f,p,w,T,null),r[nn]=i.current,$p(r),new ug(i)},mu.hydrateRoot=function(r,i,o){if(!s(r))throw Error(a(299));var u=!1,f="",p=Sv,w=Av,T=Cv,N=null,Y=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(w=o.onCaughtError),o.onRecoverableError!==void 0&&(T=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(N=o.unstable_transitionCallbacks),o.formState!==void 0&&(Y=o.formState)),i=J1(r,1,!0,i,o??null,u,f,p,w,T,N,Y),i.context=e_(null),o=i.current,u=Fn(),u=qe(u),f=Ji(u),f.callback=null,ea(o,f,u),o=u,i.current.lanes=o,Kn(i,o),Lr(i),r[nn]=i.current,$p(r),new Rh(i)},mu.version="19.1.0",mu}var __;function lA(){if(__)return fg.exports;__=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),fg.exports=oA(),fg.exports}var uA=lA();const cA=kw(uA);var yu={},x_;function hA(){if(x_)return yu;x_=1,Object.defineProperty(yu,"__esModule",{value:!0}),yu.parse=h,yu.serialize=m;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,l=(()=>{const b=function(){};return b.prototype=Object.create(null),b})();function h(b,C){const O=new l,z=b.length;if(z<2)return O;const k=(C==null?void 0:C.decode)||_;let V=0;do{const B=b.indexOf("=",V);if(B===-1)break;const K=b.indexOf(";",V),J=K===-1?z:K;if(B>J){V=b.lastIndexOf(";",B-1)+1;continue}const re=d(b,V,B),ce=g(b,B,re),D=b.slice(re,ce);if(O[D]===void 0){let A=d(b,B+1,J),I=g(b,J,A);const j=k(b.slice(A,I));O[D]=j}V=J+1}while(V<z);return O}function d(b,C,O){do{const z=b.charCodeAt(C);if(z!==32&&z!==9)return C}while(++C<O);return O}function g(b,C,O){for(;C>O;){const z=b.charCodeAt(--C);if(z!==32&&z!==9)return C+1}return O}function m(b,C,O){const z=(O==null?void 0:O.encode)||encodeURIComponent;if(!t.test(b))throw new TypeError(`argument name is invalid: ${b}`);const k=z(C);if(!e.test(k))throw new TypeError(`argument val is invalid: ${C}`);let V=b+"="+k;if(!O)return V;if(O.maxAge!==void 0){if(!Number.isInteger(O.maxAge))throw new TypeError(`option maxAge is invalid: ${O.maxAge}`);V+="; Max-Age="+O.maxAge}if(O.domain){if(!n.test(O.domain))throw new TypeError(`option domain is invalid: ${O.domain}`);V+="; Domain="+O.domain}if(O.path){if(!a.test(O.path))throw new TypeError(`option path is invalid: ${O.path}`);V+="; Path="+O.path}if(O.expires){if(!E(O.expires)||!Number.isFinite(O.expires.valueOf()))throw new TypeError(`option expires is invalid: ${O.expires}`);V+="; Expires="+O.expires.toUTCString()}if(O.httpOnly&&(V+="; HttpOnly"),O.secure&&(V+="; Secure"),O.partitioned&&(V+="; Partitioned"),O.priority)switch(typeof O.priority=="string"?O.priority.toLowerCase():void 0){case"low":V+="; Priority=Low";break;case"medium":V+="; Priority=Medium";break;case"high":V+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${O.priority}`)}if(O.sameSite)switch(typeof O.sameSite=="string"?O.sameSite.toLowerCase():O.sameSite){case!0:case"strict":V+="; SameSite=Strict";break;case"lax":V+="; SameSite=Lax";break;case"none":V+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${O.sameSite}`)}return V}function _(b){if(b.indexOf("%")===-1)return b;try{return decodeURIComponent(b)}catch{return b}}function E(b){return s.call(b)==="[object Date]"}return yu}hA();var w_="popstate";function fA(t={}){function e(a,s){let{pathname:l,search:h,hash:d}=a.location;return Fg("",{pathname:l,search:h,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(a,s){return typeof s=="string"?s:Nu(s)}return pA(e,n,null,t)}function wt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Qr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dA(){return Math.random().toString(36).substring(2,10)}function b_(t,e){return{usr:t.state,key:t.key,idx:e}}function Fg(t,e,n=null,a){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?al(e):e,state:n,key:e&&e.key||a||dA()}}function Nu({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function al(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let a=t.indexOf("?");a>=0&&(e.search=t.substring(a),t=t.substring(0,a)),t&&(e.pathname=t)}return e}function pA(t,e,n,a={}){let{window:s=document.defaultView,v5Compat:l=!1}=a,h=s.history,d="POP",g=null,m=_();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function _(){return(h.state||{idx:null}).idx}function E(){d="POP";let k=_(),V=k==null?null:k-m;m=k,g&&g({action:d,location:z.location,delta:V})}function b(k,V){d="PUSH";let B=Fg(z.location,k,V);m=_()+1;let K=b_(B,m),J=z.createHref(B);try{h.pushState(K,"",J)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;s.location.assign(J)}l&&g&&g({action:d,location:z.location,delta:1})}function C(k,V){d="REPLACE";let B=Fg(z.location,k,V);m=_();let K=b_(B,m),J=z.createHref(B);h.replaceState(K,"",J),l&&g&&g({action:d,location:z.location,delta:0})}function O(k){return gA(k)}let z={get action(){return d},get location(){return t(s,h)},listen(k){if(g)throw new Error("A history only accepts one active listener");return s.addEventListener(w_,E),g=k,()=>{s.removeEventListener(w_,E),g=null}},createHref(k){return e(s,k)},createURL:O,encodeLocation(k){let V=O(k);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:b,replace:C,go(k){return h.go(k)}};return z}function gA(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),wt(n,"No window.location.(origin|href) available to create URL");let a=typeof t=="string"?t:Nu(t);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function Nw(t,e,n="/"){return mA(t,e,n,!1)}function mA(t,e,n,a){let s=typeof e=="string"?al(e):e,l=Mi(s.pathname||"/",n);if(l==null)return null;let h=Mw(t);yA(h);let d=null;for(let g=0;d==null&&g<h.length;++g){let m=RA(l);d=AA(h[g],m,a)}return d}function Mw(t,e=[],n=[],a=""){let s=(l,h,d)=>{let g={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};g.relativePath.startsWith("/")&&(wt(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length));let m=ki([a,g.relativePath]),_=n.concat(g);l.children&&l.children.length>0&&(wt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Mw(l.children,e,_,m)),!(l.path==null&&!l.index)&&e.push({path:m,score:TA(m,l.index),routesMeta:_})};return t.forEach((l,h)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))s(l,h);else for(let g of Pw(l.path))s(l,h,g)}),e}function Pw(t){let e=t.split("/");if(e.length===0)return[];let[n,...a]=e,s=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return s?[l,""]:[l];let h=Pw(a.join("/")),d=[];return d.push(...h.map(g=>g===""?l:[l,g].join("/"))),s&&d.push(...h),d.map(g=>t.startsWith("/")&&g===""?"/":g)}function yA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:SA(e.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var vA=/^:[\w-]+$/,_A=3,xA=2,wA=1,bA=10,EA=-2,E_=t=>t==="*";function TA(t,e){let n=t.split("/"),a=n.length;return n.some(E_)&&(a+=EA),e&&(a+=xA),n.filter(s=>!E_(s)).reduce((s,l)=>s+(vA.test(l)?_A:l===""?wA:bA),a)}function SA(t,e){return t.length===e.length&&t.slice(0,-1).every((a,s)=>a===e[s])?t[t.length-1]-e[e.length-1]:0}function AA(t,e,n=!1){let{routesMeta:a}=t,s={},l="/",h=[];for(let d=0;d<a.length;++d){let g=a[d],m=d===a.length-1,_=l==="/"?e:e.slice(l.length)||"/",E=sf({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},_),b=g.route;if(!E&&m&&n&&!a[a.length-1].route.index&&(E=sf({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},_)),!E)return null;Object.assign(s,E.params),h.push({params:s,pathname:ki([l,E.pathname]),pathnameBase:kA(ki([l,E.pathnameBase])),route:b}),E.pathnameBase!=="/"&&(l=ki([l,E.pathnameBase]))}return h}function sf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,a]=CA(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let l=s[0],h=l.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:a.reduce((m,{paramName:_,isOptional:E},b)=>{if(_==="*"){let O=d[b]||"";h=l.slice(0,l.length-O.length).replace(/(.)\/+$/,"$1")}const C=d[b];return E&&!C?m[_]=void 0:m[_]=(C||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:h,pattern:t}}function CA(t,e=!1,n=!0){Qr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let a=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,g)=>(a.push({paramName:d,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(a.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),a]}function RA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qr(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Mi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=t.charAt(n);return a&&a!=="/"?null:t.slice(n)||"/"}function IA(t,e="/"){let{pathname:n,search:a="",hash:s=""}=typeof t=="string"?al(t):t;return{pathname:n?n.startsWith("/")?n:DA(n,e):e,search:NA(a),hash:MA(s)}}function DA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function mg(t,e,n,a){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function OA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jw(t){let e=OA(t);return e.map((n,a)=>a===e.length-1?n.pathname:n.pathnameBase)}function Vw(t,e,n,a=!1){let s;typeof t=="string"?s=al(t):(s={...t},wt(!s.pathname||!s.pathname.includes("?"),mg("?","pathname","search",s)),wt(!s.pathname||!s.pathname.includes("#"),mg("#","pathname","hash",s)),wt(!s.search||!s.search.includes("#"),mg("#","search","hash",s)));let l=t===""||s.pathname==="",h=l?"/":s.pathname,d;if(h==null)d=n;else{let E=e.length-1;if(!a&&h.startsWith("..")){let b=h.split("/");for(;b[0]==="..";)b.shift(),E-=1;s.pathname=b.join("/")}d=E>=0?e[E]:"/"}let g=IA(s,d),m=h&&h!=="/"&&h.endsWith("/"),_=(l||h===".")&&n.endsWith("/");return!g.pathname.endsWith("/")&&(m||_)&&(g.pathname+="/"),g}var ki=t=>t.join("/").replace(/\/\/+/g,"/"),kA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),NA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,MA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function PA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Lw=["POST","PUT","PATCH","DELETE"];new Set(Lw);var jA=["GET",...Lw];new Set(jA);var sl=F.createContext(null);sl.displayName="DataRouter";var Of=F.createContext(null);Of.displayName="DataRouterState";var Uw=F.createContext({isTransitioning:!1});Uw.displayName="ViewTransition";var VA=F.createContext(new Map);VA.displayName="Fetchers";var LA=F.createContext(null);LA.displayName="Await";var Zr=F.createContext(null);Zr.displayName="Navigation";var $u=F.createContext(null);$u.displayName="Location";var Jr=F.createContext({outlet:null,matches:[],isDataRoute:!1});Jr.displayName="Route";var Um=F.createContext(null);Um.displayName="RouteError";function UA(t,{relative:e}={}){wt(qu(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=F.useContext(Zr),{hash:s,pathname:l,search:h}=Yu(t,{relative:e}),d=l;return n!=="/"&&(d=l==="/"?n:ki([n,l])),a.createHref({pathname:d,search:h,hash:s})}function qu(){return F.useContext($u)!=null}function ei(){return wt(qu(),"useLocation() may be used only in the context of a <Router> component."),F.useContext($u).location}var zw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bw(t){F.useContext(Zr).static||F.useLayoutEffect(t)}function wn(){let{isDataRoute:t}=F.useContext(Jr);return t?ZA():zA()}function zA(){wt(qu(),"useNavigate() may be used only in the context of a <Router> component.");let t=F.useContext(sl),{basename:e,navigator:n}=F.useContext(Zr),{matches:a}=F.useContext(Jr),{pathname:s}=ei(),l=JSON.stringify(jw(a)),h=F.useRef(!1);return Bw(()=>{h.current=!0}),F.useCallback((g,m={})=>{if(Qr(h.current,zw),!h.current)return;if(typeof g=="number"){n.go(g);return}let _=Vw(g,JSON.parse(l),s,m.relative==="path");t==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:ki([e,_.pathname])),(m.replace?n.replace:n.push)(_,m.state,m)},[e,n,l,s,t])}F.createContext(null);function Hw(){let{matches:t}=F.useContext(Jr),e=t[t.length-1];return e?e.params:{}}function Yu(t,{relative:e}={}){let{matches:n}=F.useContext(Jr),{pathname:a}=ei(),s=JSON.stringify(jw(n));return F.useMemo(()=>Vw(t,JSON.parse(s),a,e==="path"),[t,s,a,e])}function BA(t,e){return Fw(t,e)}function Fw(t,e,n,a){var V;wt(qu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=F.useContext(Zr),{matches:l}=F.useContext(Jr),h=l[l.length-1],d=h?h.params:{},g=h?h.pathname:"/",m=h?h.pathnameBase:"/",_=h&&h.route;{let B=_&&_.path||"";Gw(g,!_||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let E=ei(),b;if(e){let B=typeof e=="string"?al(e):e;wt(m==="/"||((V=B.pathname)==null?void 0:V.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${B.pathname}" was given in the \`location\` prop.`),b=B}else b=E;let C=b.pathname||"/",O=C;if(m!=="/"){let B=m.replace(/^\//,"").split("/");O="/"+C.replace(/^\//,"").split("/").slice(B.length).join("/")}let z=Nw(t,{pathname:O});Qr(_||z!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Qr(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=qA(z&&z.map(B=>Object.assign({},B,{params:Object.assign({},d,B.params),pathname:ki([m,s.encodeLocation?s.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?m:ki([m,s.encodeLocation?s.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),l,n,a);return e&&k?F.createElement($u.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},k):k}function HA(){let t=WA(),e=PA(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},h=null;return console.error("Error handled by React Router default ErrorBoundary:",t),h=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:l},"ErrorBoundary")," or"," ",F.createElement("code",{style:l},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:s},n):null,h)}var FA=F.createElement(HA,null),GA=class extends F.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?F.createElement(Jr.Provider,{value:this.props.routeContext},F.createElement(Um.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $A({routeContext:t,match:e,children:n}){let a=F.useContext(sl);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(Jr.Provider,{value:t},n)}function qA(t,e=[],n=null,a=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,l=n==null?void 0:n.errors;if(l!=null){let g=s.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);wt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,g+1))}let h=!1,d=-1;if(n)for(let g=0;g<s.length;g++){let m=s[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=g),m.route.id){let{loaderData:_,errors:E}=n,b=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!E||E[m.route.id]===void 0);if(m.route.lazy||b){h=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((g,m,_)=>{let E,b=!1,C=null,O=null;n&&(E=l&&m.route.id?l[m.route.id]:void 0,C=m.route.errorElement||FA,h&&(d<0&&_===0?(Gw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,O=null):d===_&&(b=!0,O=m.route.hydrateFallbackElement||null)));let z=e.concat(s.slice(0,_+1)),k=()=>{let V;return E?V=C:b?V=O:m.route.Component?V=F.createElement(m.route.Component,null):m.route.element?V=m.route.element:V=g,F.createElement($A,{match:m,routeContext:{outlet:g,matches:z,isDataRoute:n!=null},children:V})};return n&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?F.createElement(GA,{location:n.location,revalidation:n.revalidation,component:C,error:E,children:k(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):k()},null)}function zm(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function YA(t){let e=F.useContext(sl);return wt(e,zm(t)),e}function KA(t){let e=F.useContext(Of);return wt(e,zm(t)),e}function QA(t){let e=F.useContext(Jr);return wt(e,zm(t)),e}function Bm(t){let e=QA(t),n=e.matches[e.matches.length-1];return wt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function XA(){return Bm("useRouteId")}function WA(){var a;let t=F.useContext(Um),e=KA("useRouteError"),n=Bm("useRouteError");return t!==void 0?t:(a=e.errors)==null?void 0:a[n]}function ZA(){let{router:t}=YA("useNavigate"),e=Bm("useNavigate"),n=F.useRef(!1);return Bw(()=>{n.current=!0}),F.useCallback(async(s,l={})=>{Qr(n.current,zw),n.current&&(typeof s=="number"?t.navigate(s):await t.navigate(s,{fromRouteId:e,...l}))},[t,e])}var T_={};function Gw(t,e,n){!e&&!T_[t]&&(T_[t]=!0,Qr(!1,n))}F.memo(JA);function JA({routes:t,future:e,state:n}){return Fw(t,void 0,n,e)}function zr(t){wt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function e4({basename:t="/",children:e=null,location:n,navigationType:a="POP",navigator:s,static:l=!1}){wt(!qu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=t.replace(/^\/*/,"/"),d=F.useMemo(()=>({basename:h,navigator:s,static:l,future:{}}),[h,s,l]);typeof n=="string"&&(n=al(n));let{pathname:g="/",search:m="",hash:_="",state:E=null,key:b="default"}=n,C=F.useMemo(()=>{let O=Mi(g,h);return O==null?null:{location:{pathname:O,search:m,hash:_,state:E,key:b},navigationType:a}},[h,g,m,_,E,b,a]);return Qr(C!=null,`<Router basename="${h}"> is not able to match the URL "${g}${m}${_}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:F.createElement(Zr.Provider,{value:d},F.createElement($u.Provider,{children:e,value:C}))}function t4({children:t,location:e}){return BA(Gg(t),e)}function Gg(t,e=[]){let n=[];return F.Children.forEach(t,(a,s)=>{if(!F.isValidElement(a))return;let l=[...e,s];if(a.type===F.Fragment){n.push.apply(n,Gg(a.props.children,l));return}wt(a.type===zr,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),wt(!a.props.index||!a.props.children,"An index route cannot have child routes.");let h={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(h.children=Gg(a.props.children,l)),n.push(h)}),n}var Bh="get",Hh="application/x-www-form-urlencoded";function kf(t){return t!=null&&typeof t.tagName=="string"}function n4(t){return kf(t)&&t.tagName.toLowerCase()==="button"}function r4(t){return kf(t)&&t.tagName.toLowerCase()==="form"}function i4(t){return kf(t)&&t.tagName.toLowerCase()==="input"}function a4(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function s4(t,e){return t.button===0&&(!e||e==="_self")&&!a4(t)}var Dh=null;function o4(){if(Dh===null)try{new FormData(document.createElement("form"),0),Dh=!1}catch{Dh=!0}return Dh}var l4=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function yg(t){return t!=null&&!l4.has(t)?(Qr(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hh}"`),null):t}function u4(t,e){let n,a,s,l,h;if(r4(t)){let d=t.getAttribute("action");a=d?Mi(d,e):null,n=t.getAttribute("method")||Bh,s=yg(t.getAttribute("enctype"))||Hh,l=new FormData(t)}else if(n4(t)||i4(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=t.getAttribute("formaction")||d.getAttribute("action");if(a=g?Mi(g,e):null,n=t.getAttribute("formmethod")||d.getAttribute("method")||Bh,s=yg(t.getAttribute("formenctype"))||yg(d.getAttribute("enctype"))||Hh,l=new FormData(d,t),!o4()){let{name:m,type:_,value:E}=t;if(_==="image"){let b=m?`${m}.`:"";l.append(`${b}x`,"0"),l.append(`${b}y`,"0")}else m&&l.append(m,E)}}else{if(kf(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Bh,a=null,s=Hh,h=t}return l&&s==="text/plain"&&(h=l,l=void 0),{action:a,method:n.toLowerCase(),encType:s,formData:l,body:h}}function Hm(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function c4(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function h4(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function f4(t,e,n){let a=await Promise.all(t.map(async s=>{let l=e.routes[s.route.id];if(l){let h=await c4(l,n);return h.links?h.links():[]}return[]}));return m4(a.flat(1).filter(h4).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function S_(t,e,n,a,s,l){let h=(g,m)=>n[m]?g.route.id!==n[m].route.id:!0,d=(g,m)=>{var _;return n[m].pathname!==g.pathname||((_=n[m].route.path)==null?void 0:_.endsWith("*"))&&n[m].params["*"]!==g.params["*"]};return l==="assets"?e.filter((g,m)=>h(g,m)||d(g,m)):l==="data"?e.filter((g,m)=>{var E;let _=a.routes[g.route.id];if(!_||!_.hasLoader)return!1;if(h(g,m)||d(g,m))return!0;if(g.route.shouldRevalidate){let b=g.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((E=n[0])==null?void 0:E.params)||{},nextUrl:new URL(t,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function d4(t,e,{includeHydrateFallback:n}={}){return p4(t.map(a=>{let s=e.routes[a.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function p4(t){return[...new Set(t)]}function g4(t){let e={},n=Object.keys(t).sort();for(let a of n)e[a]=t[a];return e}function m4(t,e){let n=new Set;return new Set(e),t.reduce((a,s)=>{let l=JSON.stringify(g4(s));return n.has(l)||(n.add(l),a.push({key:l,link:s})),a},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var y4=new Set([100,101,204,205]);function v4(t,e){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname="_root.data":e&&Mi(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function $w(){let t=F.useContext(sl);return Hm(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function _4(){let t=F.useContext(Of);return Hm(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Fm=F.createContext(void 0);Fm.displayName="FrameworkContext";function qw(){let t=F.useContext(Fm);return Hm(t,"You must render this element inside a <HydratedRouter> element"),t}function x4(t,e){let n=F.useContext(Fm),[a,s]=F.useState(!1),[l,h]=F.useState(!1),{onFocus:d,onBlur:g,onMouseEnter:m,onMouseLeave:_,onTouchStart:E}=e,b=F.useRef(null);F.useEffect(()=>{if(t==="render"&&h(!0),t==="viewport"){let z=V=>{V.forEach(B=>{h(B.isIntersecting)})},k=new IntersectionObserver(z,{threshold:.5});return b.current&&k.observe(b.current),()=>{k.disconnect()}}},[t]),F.useEffect(()=>{if(a){let z=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(z)}}},[a]);let C=()=>{s(!0)},O=()=>{s(!1),h(!1)};return n?t!=="intent"?[l,b,{}]:[l,b,{onFocus:vu(d,C),onBlur:vu(g,O),onMouseEnter:vu(m,C),onMouseLeave:vu(_,O),onTouchStart:vu(E,C)}]:[!1,b,{}]}function vu(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function w4({page:t,...e}){let{router:n}=$w(),a=F.useMemo(()=>Nw(n.routes,t,n.basename),[n.routes,t,n.basename]);return a?F.createElement(E4,{page:t,matches:a,...e}):null}function b4(t){let{manifest:e,routeModules:n}=qw(),[a,s]=F.useState([]);return F.useEffect(()=>{let l=!1;return f4(t,e,n).then(h=>{l||s(h)}),()=>{l=!0}},[t,e,n]),a}function E4({page:t,matches:e,...n}){let a=ei(),{manifest:s,routeModules:l}=qw(),{basename:h}=$w(),{loaderData:d,matches:g}=_4(),m=F.useMemo(()=>S_(t,e,g,s,a,"data"),[t,e,g,s,a]),_=F.useMemo(()=>S_(t,e,g,s,a,"assets"),[t,e,g,s,a]),E=F.useMemo(()=>{if(t===a.pathname+a.search+a.hash)return[];let O=new Set,z=!1;if(e.forEach(V=>{var K;let B=s.routes[V.route.id];!B||!B.hasLoader||(!m.some(J=>J.route.id===V.route.id)&&V.route.id in d&&((K=l[V.route.id])!=null&&K.shouldRevalidate)||B.hasClientLoader?z=!0:O.add(V.route.id))}),O.size===0)return[];let k=v4(t,h);return z&&O.size>0&&k.searchParams.set("_routes",e.filter(V=>O.has(V.route.id)).map(V=>V.route.id).join(",")),[k.pathname+k.search]},[h,d,a,s,m,e,t,l]),b=F.useMemo(()=>d4(_,s),[_,s]),C=b4(_);return F.createElement(F.Fragment,null,E.map(O=>F.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...n})),b.map(O=>F.createElement("link",{key:O,rel:"modulepreload",href:O,...n})),C.map(({key:O,link:z})=>F.createElement("link",{key:O,...z})))}function T4(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Yw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Yw&&(window.__reactRouterVersion="7.6.1")}catch{}function S4({basename:t,children:e,window:n}){let a=F.useRef();a.current==null&&(a.current=fA({window:n,v5Compat:!0}));let s=a.current,[l,h]=F.useState({action:s.action,location:s.location}),d=F.useCallback(g=>{F.startTransition(()=>h(g))},[h]);return F.useLayoutEffect(()=>s.listen(d),[s,d]),F.createElement(e4,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:s})}var Kw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qw=F.forwardRef(function({onClick:e,discover:n="render",prefetch:a="none",relative:s,reloadDocument:l,replace:h,state:d,target:g,to:m,preventScrollReset:_,viewTransition:E,...b},C){let{basename:O}=F.useContext(Zr),z=typeof m=="string"&&Kw.test(m),k,V=!1;if(typeof m=="string"&&z&&(k=m,Yw))try{let I=new URL(window.location.href),j=m.startsWith("//")?new URL(I.protocol+m):new URL(m),U=Mi(j.pathname,O);j.origin===I.origin&&U!=null?m=U+j.search+j.hash:V=!0}catch{Qr(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=UA(m,{relative:s}),[K,J,re]=x4(a,b),ce=I4(m,{replace:h,state:d,target:g,preventScrollReset:_,relative:s,viewTransition:E});function D(I){e&&e(I),I.defaultPrevented||ce(I)}let A=F.createElement("a",{...b,...re,href:k||B,onClick:V||l?e:D,ref:T4(C,J),target:g,"data-discover":!z&&n==="render"?"true":void 0});return K&&!z?F.createElement(F.Fragment,null,A,F.createElement(w4,{page:B})):A});Qw.displayName="Link";var A4=F.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:a="",end:s=!1,style:l,to:h,viewTransition:d,children:g,...m},_){let E=Yu(h,{relative:m.relative}),b=ei(),C=F.useContext(Of),{navigator:O,basename:z}=F.useContext(Zr),k=C!=null&&M4(E)&&d===!0,V=O.encodeLocation?O.encodeLocation(E).pathname:E.pathname,B=b.pathname,K=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;n||(B=B.toLowerCase(),K=K?K.toLowerCase():null,V=V.toLowerCase()),K&&z&&(K=Mi(K,z)||K);const J=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let re=B===V||!s&&B.startsWith(V)&&B.charAt(J)==="/",ce=K!=null&&(K===V||!s&&K.startsWith(V)&&K.charAt(V.length)==="/"),D={isActive:re,isPending:ce,isTransitioning:k},A=re?e:void 0,I;typeof a=="function"?I=a(D):I=[a,re?"active":null,ce?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let j=typeof l=="function"?l(D):l;return F.createElement(Qw,{...m,"aria-current":A,className:I,ref:_,style:j,to:h,viewTransition:d},typeof g=="function"?g(D):g)});A4.displayName="NavLink";var C4=F.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:a,replace:s,state:l,method:h=Bh,action:d,onSubmit:g,relative:m,preventScrollReset:_,viewTransition:E,...b},C)=>{let O=k4(),z=N4(d,{relative:m}),k=h.toLowerCase()==="get"?"get":"post",V=typeof d=="string"&&Kw.test(d),B=K=>{if(g&&g(K),K.defaultPrevented)return;K.preventDefault();let J=K.nativeEvent.submitter,re=(J==null?void 0:J.getAttribute("formmethod"))||h;O(J||K.currentTarget,{fetcherKey:e,method:re,navigate:n,replace:s,state:l,relative:m,preventScrollReset:_,viewTransition:E})};return F.createElement("form",{ref:C,method:k,action:z,onSubmit:a?g:B,...b,"data-discover":!V&&t==="render"?"true":void 0})});C4.displayName="Form";function R4(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xw(t){let e=F.useContext(sl);return wt(e,R4(t)),e}function I4(t,{target:e,replace:n,state:a,preventScrollReset:s,relative:l,viewTransition:h}={}){let d=wn(),g=ei(),m=Yu(t,{relative:l});return F.useCallback(_=>{if(s4(_,e)){_.preventDefault();let E=n!==void 0?n:Nu(g)===Nu(m);d(t,{replace:E,state:a,preventScrollReset:s,relative:l,viewTransition:h})}},[g,d,m,n,a,e,t,s,l,h])}var D4=0,O4=()=>`__${String(++D4)}__`;function k4(){let{router:t}=Xw("useSubmit"),{basename:e}=F.useContext(Zr),n=XA();return F.useCallback(async(a,s={})=>{let{action:l,method:h,encType:d,formData:g,body:m}=u4(a,e);if(s.navigate===!1){let _=s.fetcherKey||O4();await t.fetch(_,n,s.action||l,{preventScrollReset:s.preventScrollReset,formData:g,body:m,formMethod:s.method||h,formEncType:s.encType||d,flushSync:s.flushSync})}else await t.navigate(s.action||l,{preventScrollReset:s.preventScrollReset,formData:g,body:m,formMethod:s.method||h,formEncType:s.encType||d,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[t,e,n])}function N4(t,{relative:e}={}){let{basename:n}=F.useContext(Zr),a=F.useContext(Jr);wt(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),l={...Yu(t||".",{relative:e})},h=ei();if(t==null){l.search=h.search;let d=new URLSearchParams(l.search),g=d.getAll("index");if(g.some(_=>_==="")){d.delete("index"),g.filter(E=>E).forEach(E=>d.append("index",E));let _=d.toString();l.search=_?`?${_}`:""}}return(!t||t===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:ki([n,l.pathname])),Nu(l)}function M4(t,e={}){let n=F.useContext(Uw);wt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Xw("useViewTransitionState"),s=Yu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let l=Mi(n.currentLocation.pathname,a)||n.currentLocation.pathname,h=Mi(n.nextLocation.pathname,a)||n.nextLocation.pathname;return sf(s.pathname,h)!=null||sf(s.pathname,l)!=null}[...y4];var Nn=function(){return Nn=Object.assign||function(e){for(var n,a=1,s=arguments.length;a<s;a++){n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Nn.apply(this,arguments)};function Gm(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(n[a[s]]=t[a[s]]);return n}function Mu(t,e,n){if(n||arguments.length===2)for(var a=0,s=e.length,l;a<s;a++)(l||!(a in e))&&(l||(l=Array.prototype.slice.call(e,0,a)),l[a]=e[a]);return t.concat(l||Array.prototype.slice.call(e))}var pt="-ms-",Su="-moz-",Ze="-webkit-",Ww="comm",Nf="rule",$m="decl",P4="@import",Zw="@keyframes",j4="@layer",Jw=Math.abs,qm=String.fromCharCode,$g=Object.assign;function V4(t,e){return Zt(t,0)^45?(((e<<2^Zt(t,0))<<2^Zt(t,1))<<2^Zt(t,2))<<2^Zt(t,3):0}function eb(t){return t.trim()}function Ii(t,e){return(t=e.exec(t))?t[0]:t}function ke(t,e,n){return t.replace(e,n)}function Fh(t,e,n){return t.indexOf(e,n)}function Zt(t,e){return t.charCodeAt(e)|0}function Fo(t,e,n){return t.slice(e,n)}function Hr(t){return t.length}function tb(t){return t.length}function _u(t,e){return e.push(t),t}function L4(t,e){return t.map(e).join("")}function A_(t,e){return t.filter(function(n){return!Ii(n,e)})}var Mf=1,Go=1,nb=0,lr=0,jt=0,ol="";function Pf(t,e,n,a,s,l,h,d){return{value:t,root:e,parent:n,type:a,props:s,children:l,line:Mf,column:Go,length:h,return:"",siblings:d}}function _a(t,e){return $g(Pf("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Io(t){for(;t.root;)t=_a(t.root,{children:[t]});_u(t,t.siblings)}function U4(){return jt}function z4(){return jt=lr>0?Zt(ol,--lr):0,Go--,jt===10&&(Go=1,Mf--),jt}function wr(){return jt=lr<nb?Zt(ol,lr++):0,Go++,jt===10&&(Go=1,Mf++),jt}function Es(){return Zt(ol,lr)}function Gh(){return lr}function jf(t,e){return Fo(ol,t,e)}function qg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B4(t){return Mf=Go=1,nb=Hr(ol=t),lr=0,[]}function H4(t){return ol="",t}function vg(t){return eb(jf(lr-1,Yg(t===91?t+2:t===40?t+1:t)))}function F4(t){for(;(jt=Es())&&jt<33;)wr();return qg(t)>2||qg(jt)>3?"":" "}function G4(t,e){for(;--e&&wr()&&!(jt<48||jt>102||jt>57&&jt<65||jt>70&&jt<97););return jf(t,Gh()+(e<6&&Es()==32&&wr()==32))}function Yg(t){for(;wr();)switch(jt){case t:return lr;case 34:case 39:t!==34&&t!==39&&Yg(jt);break;case 40:t===41&&Yg(t);break;case 92:wr();break}return lr}function $4(t,e){for(;wr()&&t+jt!==57;)if(t+jt===84&&Es()===47)break;return"/*"+jf(e,lr-1)+"*"+qm(t===47?t:wr())}function q4(t){for(;!qg(Es());)wr();return jf(t,lr)}function Y4(t){return H4($h("",null,null,null,[""],t=B4(t),0,[0],t))}function $h(t,e,n,a,s,l,h,d,g){for(var m=0,_=0,E=h,b=0,C=0,O=0,z=1,k=1,V=1,B=0,K="",J=s,re=l,ce=a,D=K;k;)switch(O=B,B=wr()){case 40:if(O!=108&&Zt(D,E-1)==58){Fh(D+=ke(vg(B),"&","&\f"),"&\f",Jw(m?d[m-1]:0))!=-1&&(V=-1);break}case 34:case 39:case 91:D+=vg(B);break;case 9:case 10:case 13:case 32:D+=F4(O);break;case 92:D+=G4(Gh()-1,7);continue;case 47:switch(Es()){case 42:case 47:_u(K4($4(wr(),Gh()),e,n,g),g);break;default:D+="/"}break;case 123*z:d[m++]=Hr(D)*V;case 125*z:case 59:case 0:switch(B){case 0:case 125:k=0;case 59+_:V==-1&&(D=ke(D,/\f/g,"")),C>0&&Hr(D)-E&&_u(C>32?R_(D+";",a,n,E-1,g):R_(ke(D," ","")+";",a,n,E-2,g),g);break;case 59:D+=";";default:if(_u(ce=C_(D,e,n,m,_,s,d,K,J=[],re=[],E,l),l),B===123)if(_===0)$h(D,e,ce,ce,J,l,E,d,re);else switch(b===99&&Zt(D,3)===110?100:b){case 100:case 108:case 109:case 115:$h(t,ce,ce,a&&_u(C_(t,ce,ce,0,0,s,d,K,s,J=[],E,re),re),s,re,E,d,a?J:re);break;default:$h(D,ce,ce,ce,[""],re,0,d,re)}}m=_=C=0,z=V=1,K=D="",E=h;break;case 58:E=1+Hr(D),C=O;default:if(z<1){if(B==123)--z;else if(B==125&&z++==0&&z4()==125)continue}switch(D+=qm(B),B*z){case 38:V=_>0?1:(D+="\f",-1);break;case 44:d[m++]=(Hr(D)-1)*V,V=1;break;case 64:Es()===45&&(D+=vg(wr())),b=Es(),_=E=Hr(K=D+=q4(Gh())),B++;break;case 45:O===45&&Hr(D)==2&&(z=0)}}return l}function C_(t,e,n,a,s,l,h,d,g,m,_,E){for(var b=s-1,C=s===0?l:[""],O=tb(C),z=0,k=0,V=0;z<a;++z)for(var B=0,K=Fo(t,b+1,b=Jw(k=h[z])),J=t;B<O;++B)(J=eb(k>0?C[B]+" "+K:ke(K,/&\f/g,C[B])))&&(g[V++]=J);return Pf(t,e,n,s===0?Nf:d,g,m,_,E)}function K4(t,e,n,a){return Pf(t,e,n,Ww,qm(U4()),Fo(t,2,-2),0,a)}function R_(t,e,n,a,s){return Pf(t,e,n,$m,Fo(t,0,a),Fo(t,a+1,-1),a,s)}function rb(t,e,n){switch(V4(t,e)){case 5103:return Ze+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ze+t+t;case 4789:return Su+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ze+t+Su+t+pt+t+t;case 5936:switch(Zt(t,e+11)){case 114:return Ze+t+pt+ke(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ze+t+pt+ke(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ze+t+pt+ke(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ze+t+pt+t+t;case 6165:return Ze+t+pt+"flex-"+t+t;case 5187:return Ze+t+ke(t,/(\w+).+(:[^]+)/,Ze+"box-$1$2"+pt+"flex-$1$2")+t;case 5443:return Ze+t+pt+"flex-item-"+ke(t,/flex-|-self/g,"")+(Ii(t,/flex-|baseline/)?"":pt+"grid-row-"+ke(t,/flex-|-self/g,""))+t;case 4675:return Ze+t+pt+"flex-line-pack"+ke(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ze+t+pt+ke(t,"shrink","negative")+t;case 5292:return Ze+t+pt+ke(t,"basis","preferred-size")+t;case 6060:return Ze+"box-"+ke(t,"-grow","")+Ze+t+pt+ke(t,"grow","positive")+t;case 4554:return Ze+ke(t,/([^-])(transform)/g,"$1"+Ze+"$2")+t;case 6187:return ke(ke(ke(t,/(zoom-|grab)/,Ze+"$1"),/(image-set)/,Ze+"$1"),t,"")+t;case 5495:case 3959:return ke(t,/(image-set\([^]*)/,Ze+"$1$`$1");case 4968:return ke(ke(t,/(.+:)(flex-)?(.*)/,Ze+"box-pack:$3"+pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ze+t+t;case 4200:if(!Ii(t,/flex-|baseline/))return pt+"grid-column-align"+Fo(t,e)+t;break;case 2592:case 3360:return pt+ke(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(a,s){return e=s,Ii(a.props,/grid-\w+-end/)})?~Fh(t+(n=n[e].value),"span",0)?t:pt+ke(t,"-start","")+t+pt+"grid-row-span:"+(~Fh(n,"span",0)?Ii(n,/\d+/):+Ii(n,/\d+/)-+Ii(t,/\d+/))+";":pt+ke(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(a){return Ii(a.props,/grid-\w+-start/)})?t:pt+ke(ke(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ke(t,/(.+)-inline(.+)/,Ze+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hr(t)-1-e>6)switch(Zt(t,e+1)){case 109:if(Zt(t,e+4)!==45)break;case 102:return ke(t,/(.+:)(.+)-([^]+)/,"$1"+Ze+"$2-$3$1"+Su+(Zt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Fh(t,"stretch",0)?rb(ke(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ke(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,s,l,h,d,g,m){return pt+s+":"+l+m+(h?pt+s+"-span:"+(d?g:+g-+l)+m:"")+t});case 4949:if(Zt(t,e+6)===121)return ke(t,":",":"+Ze)+t;break;case 6444:switch(Zt(t,Zt(t,14)===45?18:11)){case 120:return ke(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ze+(Zt(t,14)===45?"inline-":"")+"box$3$1"+Ze+"$2$3$1"+pt+"$2box$3")+t;case 100:return ke(t,":",":"+pt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(t,"scroll-","scroll-snap-")+t}return t}function of(t,e){for(var n="",a=0;a<t.length;a++)n+=e(t[a],a,t,e)||"";return n}function Q4(t,e,n,a){switch(t.type){case j4:if(t.children.length)break;case P4:case $m:return t.return=t.return||t.value;case Ww:return"";case Zw:return t.return=t.value+"{"+of(t.children,a)+"}";case Nf:if(!Hr(t.value=t.props.join(",")))return""}return Hr(n=of(t.children,a))?t.return=t.value+"{"+n+"}":""}function X4(t){var e=tb(t);return function(n,a,s,l){for(var h="",d=0;d<e;d++)h+=t[d](n,a,s,l)||"";return h}}function W4(t){return function(e){e.root||(e=e.return)&&t(e)}}function Z4(t,e,n,a){if(t.length>-1&&!t.return)switch(t.type){case $m:t.return=rb(t.value,t.length,n);return;case Zw:return of([_a(t,{value:ke(t.value,"@","@"+Ze)})],a);case Nf:if(t.length)return L4(n=t.props,function(s){switch(Ii(s,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Io(_a(t,{props:[ke(s,/:(read-\w+)/,":"+Su+"$1")]})),Io(_a(t,{props:[s]})),$g(t,{props:A_(n,a)});break;case"::placeholder":Io(_a(t,{props:[ke(s,/:(plac\w+)/,":"+Ze+"input-$1")]})),Io(_a(t,{props:[ke(s,/:(plac\w+)/,":"+Su+"$1")]})),Io(_a(t,{props:[ke(s,/:(plac\w+)/,pt+"input-$1")]})),Io(_a(t,{props:[s]})),$g(t,{props:A_(n,a)});break}return""})}}var J4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$n={},$o=typeof process<"u"&&$n!==void 0&&($n.REACT_APP_SC_ATTR||$n.SC_ATTR)||"data-styled",ib="active",ab="data-styled-version",Vf="6.1.18",Ym=`/*!sc*/
`,lf=typeof window<"u"&&typeof document<"u",eC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$n!==void 0&&$n.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$n.REACT_APP_SC_DISABLE_SPEEDY!==""?$n.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$n.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$n!==void 0&&$n.SC_DISABLE_SPEEDY!==void 0&&$n.SC_DISABLE_SPEEDY!==""&&$n.SC_DISABLE_SPEEDY!=="false"&&$n.SC_DISABLE_SPEEDY),Lf=Object.freeze([]),qo=Object.freeze({});function tC(t,e,n){return n===void 0&&(n=qo),t.theme!==n.theme&&t.theme||e||n.theme}var sb=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rC=/(^-|-$)/g;function I_(t){return t.replace(nC,"-").replace(rC,"")}var iC=/(a)(d)/gi,Oh=52,D_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Kg(t){var e,n="";for(e=Math.abs(t);e>Oh;e=e/Oh|0)n=D_(e%Oh)+n;return(D_(e%Oh)+n).replace(iC,"$1-$2")}var _g,ob=5381,Po=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},lb=function(t){return Po(ob,t)};function ub(t){return Kg(lb(t)>>>0)}function aC(t){return t.displayName||t.name||"Component"}function xg(t){return typeof t=="string"&&!0}var cb=typeof Symbol=="function"&&Symbol.for,hb=cb?Symbol.for("react.memo"):60115,sC=cb?Symbol.for("react.forward_ref"):60112,oC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uC=((_g={})[sC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_g[hb]=fb,_g);function O_(t){return("type"in(e=t)&&e.type.$$typeof)===hb?fb:"$$typeof"in t?uC[t.$$typeof]:oC;var e}var cC=Object.defineProperty,hC=Object.getOwnPropertyNames,k_=Object.getOwnPropertySymbols,fC=Object.getOwnPropertyDescriptor,dC=Object.getPrototypeOf,N_=Object.prototype;function db(t,e,n){if(typeof e!="string"){if(N_){var a=dC(e);a&&a!==N_&&db(t,a,n)}var s=hC(e);k_&&(s=s.concat(k_(e)));for(var l=O_(t),h=O_(e),d=0;d<s.length;++d){var g=s[d];if(!(g in lC||n&&n[g]||h&&g in h||l&&g in l)){var m=fC(e,g);try{cC(t,g,m)}catch{}}}}return t}function Yo(t){return typeof t=="function"}function Km(t){return typeof t=="object"&&"styledComponentId"in t}function ws(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Qg(t,e){if(t.length===0)return"";for(var n=t[0],a=1;a<t.length;a++)n+=t[a];return n}function Pu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Xg(t,e,n){if(n===void 0&&(n=!1),!n&&!Pu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var a=0;a<e.length;a++)t[a]=Xg(t[a],e[a]);else if(Pu(e))for(var a in e)t[a]=Xg(t[a],e[a]);return t}function Qm(t,e){Object.defineProperty(t,"toString",{value:e})}function Ku(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var pC=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,a=0;a<e;a++)n+=this.groupSizes[a];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var a=this.groupSizes,s=a.length,l=s;e>=l;)if((l<<=1)<0)throw Ku(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(a),this.length=l;for(var h=s;h<l;h++)this.groupSizes[h]=0}for(var d=this.indexOfGroup(e+1),g=(h=0,n.length);h<g;h++)this.tag.insertRule(d,n[h])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],a=this.indexOfGroup(e),s=a+n;this.groupSizes[e]=0;for(var l=a;l<s;l++)this.tag.deleteRule(a)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var a=this.groupSizes[e],s=this.indexOfGroup(e),l=s+a,h=s;h<l;h++)n+="".concat(this.tag.getRule(h)).concat(Ym);return n},t}(),qh=new Map,uf=new Map,Yh=1,kh=function(t){if(qh.has(t))return qh.get(t);for(;uf.has(Yh);)Yh++;var e=Yh++;return qh.set(t,e),uf.set(e,t),e},gC=function(t,e){Yh=e+1,qh.set(t,e),uf.set(e,t)},mC="style[".concat($o,"][").concat(ab,'="').concat(Vf,'"]'),yC=new RegExp("^".concat($o,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vC=function(t,e,n){for(var a,s=n.split(","),l=0,h=s.length;l<h;l++)(a=s[l])&&t.registerName(e,a)},_C=function(t,e){for(var n,a=((n=e.textContent)!==null&&n!==void 0?n:"").split(Ym),s=[],l=0,h=a.length;l<h;l++){var d=a[l].trim();if(d){var g=d.match(yC);if(g){var m=0|parseInt(g[1],10),_=g[2];m!==0&&(gC(_,m),vC(t,_,g[3]),t.getTag().insertRules(m,s)),s.length=0}else s.push(d)}}},M_=function(t){for(var e=document.querySelectorAll(mC),n=0,a=e.length;n<a;n++){var s=e[n];s&&s.getAttribute($o)!==ib&&(_C(t,s),s.parentNode&&s.parentNode.removeChild(s))}};function xC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var pb=function(t){var e=document.head,n=t||e,a=document.createElement("style"),s=function(d){var g=Array.from(d.querySelectorAll("style[".concat($o,"]")));return g[g.length-1]}(n),l=s!==void 0?s.nextSibling:null;a.setAttribute($o,ib),a.setAttribute(ab,Vf);var h=xC();return h&&a.setAttribute("nonce",h),n.insertBefore(a,l),a},wC=function(){function t(e){this.element=pb(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var a=document.styleSheets,s=0,l=a.length;s<l;s++){var h=a[s];if(h.ownerNode===n)return h}throw Ku(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),bC=function(){function t(e){this.element=pb(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var a=document.createTextNode(n);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),EC=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),P_=lf,TC={isServer:!lf,useCSSOMInjection:!eC},gb=function(){function t(e,n,a){e===void 0&&(e=qo),n===void 0&&(n={});var s=this;this.options=Nn(Nn({},TC),e),this.gs=n,this.names=new Map(a),this.server=!!e.isServer,!this.server&&lf&&P_&&(P_=!1,M_(this)),Qm(this,function(){return function(l){for(var h=l.getTag(),d=h.length,g="",m=function(E){var b=function(V){return uf.get(V)}(E);if(b===void 0)return"continue";var C=l.names.get(b),O=h.getGroup(E);if(C===void 0||!C.size||O.length===0)return"continue";var z="".concat($o,".g").concat(E,'[id="').concat(b,'"]'),k="";C!==void 0&&C.forEach(function(V){V.length>0&&(k+="".concat(V,","))}),g+="".concat(O).concat(z,'{content:"').concat(k,'"}').concat(Ym)},_=0;_<d;_++)m(_);return g}(s)})}return t.registerId=function(e){return kh(e)},t.prototype.rehydrate=function(){!this.server&&lf&&M_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Nn(Nn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var a=n.useCSSOMInjection,s=n.target;return n.isServer?new EC(s):a?new wC(s):new bC(s)}(this.options),new pC(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(kh(e),this.names.has(e))this.names.get(e).add(n);else{var a=new Set;a.add(n),this.names.set(e,a)}},t.prototype.insertRules=function(e,n,a){this.registerName(e,n),this.getTag().insertRules(kh(e),a)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(kh(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),SC=/&/g,AC=/^\s*\/\/.*$/gm;function mb(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(a){return"".concat(e," ").concat(a)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=mb(n.children,e)),n})}function CC(t){var e,n,a,s=qo,l=s.options,h=l===void 0?qo:l,d=s.plugins,g=d===void 0?Lf:d,m=function(b,C,O){return O.startsWith(n)&&O.endsWith(n)&&O.replaceAll(n,"").length>0?".".concat(e):b},_=g.slice();_.push(function(b){b.type===Nf&&b.value.includes("&")&&(b.props[0]=b.props[0].replace(SC,n).replace(a,m))}),h.prefix&&_.push(Z4),_.push(Q4);var E=function(b,C,O,z){C===void 0&&(C=""),O===void 0&&(O=""),z===void 0&&(z="&"),e=z,n=C,a=new RegExp("\\".concat(n,"\\b"),"g");var k=b.replace(AC,""),V=Y4(O||C?"".concat(O," ").concat(C," { ").concat(k," }"):k);h.namespace&&(V=mb(V,h.namespace));var B=[];return of(V,X4(_.concat(W4(function(K){return B.push(K)})))),B};return E.hash=g.length?g.reduce(function(b,C){return C.name||Ku(15),Po(b,C.name)},ob).toString():"",E}var RC=new gb,Wg=CC(),yb=Cs.createContext({shouldForwardProp:void 0,styleSheet:RC,stylis:Wg});yb.Consumer;Cs.createContext(void 0);function j_(){return F.useContext(yb)}var vb=function(){function t(e,n){var a=this;this.inject=function(s,l){l===void 0&&(l=Wg);var h=a.name+l.hash;s.hasNameForId(a.id,h)||s.insertRules(a.id,h,l(a.rules,h,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Qm(this,function(){throw Ku(12,String(a.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Wg),this.name+e.hash},t}(),IC=function(t){return t>="A"&&t<="Z"};function V_(t){for(var e="",n=0;n<t.length;n++){var a=t[n];if(n===1&&a==="-"&&t[0]==="-")return t;IC(a)?e+="-"+a.toLowerCase():e+=a}return e.startsWith("ms-")?"-"+e:e}var _b=function(t){return t==null||t===!1||t===""},xb=function(t){var e,n,a=[];for(var s in t){var l=t[s];t.hasOwnProperty(s)&&!_b(l)&&(Array.isArray(l)&&l.isCss||Yo(l)?a.push("".concat(V_(s),":"),l,";"):Pu(l)?a.push.apply(a,Mu(Mu(["".concat(s," {")],xb(l),!1),["}"],!1)):a.push("".concat(V_(s),": ").concat((e=s,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in J4||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return a};function Ts(t,e,n,a){if(_b(t))return[];if(Km(t))return[".".concat(t.styledComponentId)];if(Yo(t)){if(!Yo(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var s=t(e);return Ts(s,e,n,a)}var l;return t instanceof vb?n?(t.inject(n,a),[t.getName(a)]):[t]:Pu(t)?xb(t):Array.isArray(t)?Array.prototype.concat.apply(Lf,t.map(function(h){return Ts(h,e,n,a)})):[t.toString()]}function DC(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Yo(n)&&!Km(n))return!1}return!0}var OC=lb(Vf),kC=function(){function t(e,n,a){this.rules=e,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&DC(e),this.componentId=n,this.baseHash=Po(OC,n),this.baseStyle=a,gb.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,a){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))s=ws(s,this.staticRulesId);else{var l=Qg(Ts(this.rules,e,n,a)),h=Kg(Po(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,h)){var d=a(l,".".concat(h),void 0,this.componentId);n.insertRules(this.componentId,h,d)}s=ws(s,h),this.staticRulesId=h}else{for(var g=Po(this.baseHash,a.hash),m="",_=0;_<this.rules.length;_++){var E=this.rules[_];if(typeof E=="string")m+=E;else if(E){var b=Qg(Ts(E,e,n,a));g=Po(g,b+_),m+=b}}if(m){var C=Kg(g>>>0);n.hasNameForId(this.componentId,C)||n.insertRules(this.componentId,C,a(m,".".concat(C),void 0,this.componentId)),s=ws(s,C)}}return s},t}(),wb=Cs.createContext(void 0);wb.Consumer;var wg={};function NC(t,e,n){var a=Km(t),s=t,l=!xg(t),h=e.attrs,d=h===void 0?Lf:h,g=e.componentId,m=g===void 0?function(J,re){var ce=typeof J!="string"?"sc":I_(J);wg[ce]=(wg[ce]||0)+1;var D="".concat(ce,"-").concat(ub(Vf+ce+wg[ce]));return re?"".concat(re,"-").concat(D):D}(e.displayName,e.parentComponentId):g,_=e.displayName,E=_===void 0?function(J){return xg(J)?"styled.".concat(J):"Styled(".concat(aC(J),")")}(t):_,b=e.displayName&&e.componentId?"".concat(I_(e.displayName),"-").concat(e.componentId):e.componentId||m,C=a&&s.attrs?s.attrs.concat(d).filter(Boolean):d,O=e.shouldForwardProp;if(a&&s.shouldForwardProp){var z=s.shouldForwardProp;if(e.shouldForwardProp){var k=e.shouldForwardProp;O=function(J,re){return z(J,re)&&k(J,re)}}else O=z}var V=new kC(n,b,a?s.componentStyle:void 0);function B(J,re){return function(ce,D,A){var I=ce.attrs,j=ce.componentStyle,U=ce.defaultProps,H=ce.foldedComponentIds,M=ce.styledComponentId,et=ce.target,Xe=Cs.useContext(wb),W=j_(),he=ce.shouldForwardProp||W.shouldForwardProp,le=tC(D,Xe,U)||qo,me=function(Ee,ye,tt){for(var Pe,lt=Nn(Nn({},ye),{className:void 0,theme:tt}),pn=0;pn<Ee.length;pn+=1){var Gt=Yo(Pe=Ee[pn])?Pe(lt):Pe;for(var At in Gt)lt[At]=At==="className"?ws(lt[At],Gt[At]):At==="style"?Nn(Nn({},lt[At]),Gt[At]):Gt[At]}return ye.className&&(lt.className=ws(lt.className,ye.className)),lt}(I,D,le),P=me.as||et,te={};for(var ue in me)me[ue]===void 0||ue[0]==="$"||ue==="as"||ue==="theme"&&me.theme===le||(ue==="forwardedAs"?te.as=me.forwardedAs:he&&!he(ue,P)||(te[ue]=me[ue]));var se=function(Ee,ye){var tt=j_(),Pe=Ee.generateAndInjectStyles(ye,tt.styleSheet,tt.stylis);return Pe}(j,me),pe=ws(H,M);return se&&(pe+=" "+se),me.className&&(pe+=" "+me.className),te[xg(P)&&!sb.has(P)?"class":"className"]=pe,A&&(te.ref=A),F.createElement(P,te)}(K,J,re)}B.displayName=E;var K=Cs.forwardRef(B);return K.attrs=C,K.componentStyle=V,K.displayName=E,K.shouldForwardProp=O,K.foldedComponentIds=a?ws(s.foldedComponentIds,s.styledComponentId):"",K.styledComponentId=b,K.target=a?s.target:t,Object.defineProperty(K,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=a?function(re){for(var ce=[],D=1;D<arguments.length;D++)ce[D-1]=arguments[D];for(var A=0,I=ce;A<I.length;A++)Xg(re,I[A],!0);return re}({},s.defaultProps,J):J}}),Qm(K,function(){return".".concat(K.styledComponentId)}),l&&db(K,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),K}function L_(t,e){for(var n=[t[0]],a=0,s=e.length;a<s;a+=1)n.push(e[a],t[a+1]);return n}var U_=function(t){return Object.assign(t,{isCss:!0})};function Au(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Yo(t)||Pu(t))return U_(Ts(L_(Lf,Mu([t],e,!0))));var a=t;return e.length===0&&a.length===1&&typeof a[0]=="string"?Ts(a):U_(Ts(L_(a,e)))}function Zg(t,e,n){if(n===void 0&&(n=qo),!e)throw Ku(1,e);var a=function(s){for(var l=[],h=1;h<arguments.length;h++)l[h-1]=arguments[h];return t(e,n,Au.apply(void 0,Mu([s],l,!1)))};return a.attrs=function(s){return Zg(t,e,Nn(Nn({},n),{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},a.withConfig=function(s){return Zg(t,e,Nn(Nn({},n),s))},a}var bb=function(t){return Zg(NC,t)},R=bb;sb.forEach(function(t){R[t]=bb(t)});function MC(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var a=Qg(Au.apply(void 0,Mu([t],e,!1))),s=ub(a);return new vb(s,a)}const bg=R.div`
  width: 402px;
  min-height: 48px;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  font-family: Pretendard;

  position: sticky;
  top: 50px;
  z-index: 1000;
`,PC=R.div`
  display: flex;
  gap: 12px;
  cursor: pointer;
`,jC=R.p`
  color: var(--GRAY-GRAY600, #232428);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.72px;
  cursor: pointer;
`,VC=R.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0%;
  color: #232428;
`,LC=R.button`
  width: 60px;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0%;
  /* color: #aeafb6; */
  color: ${({disabled:t})=>t?"#AEAFB6":"#4284FF"};
  border: 0;
  background-color: transparent;
  cursor: pointer;
`,Eb=R.div`
  display: flex;
  justify-content: flex-start;
  width: 60px;
`,UC=R.div`
  display: flex;
  justify-content: flex-end;
  width: 60px;
`,z_=({onClick:t})=>v.jsx(Eb,{onClick:t,style:{cursor:"pointer"},children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:v.jsx("path",{d:"M15 18L9 12L15 6",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),zC=()=>v.jsx(UC,{style:{cursor:"pointer"},children:v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[v.jsx("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),v.jsx("path",{d:"M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),v.jsx("path",{d:"M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})}),B_=({onClick:t})=>v.jsx(Eb,{onClick:t,style:{cursor:"pointer"},children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:v.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"#232428",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),Va=t=>{const e=t.state||"Title",n=t.text||"텍스트",a=t.title||"",s=t.rightIcon||null,l=t.iconType||"back",h=wn();if(e==="Title")return v.jsxs(bg,{children:[v.jsx(jC,{children:a}),v.jsx(PC,{children:s})]});if(e==="TextActionBar")return v.jsxs(bg,{children:[l==="back"?v.jsx(z_,{onClick:()=>h(-1)}):v.jsx(B_,{onClick:()=>h(-1)}),v.jsx(VC,{children:n}),v.jsx(LC,{disabled:t.disabled,onClick:t.onClick,children:"올리기"})]});if(e==="IconActionBar")return v.jsxs(bg,{children:[l==="back"?v.jsx(z_,{onClick:t.onClick}):v.jsx(B_,{onClick:t.onClick}),l==="back"&&v.jsx(zC,{})]})},BC=R.div`
  width: 100%;
  padding: 0 4px;
  box-sizing: border-box;
`,HC=R.div`
  position: relative;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 16px;
`,FC=R.div`
  z-index: 2;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${t=>t.$active||t.$completed?"#4284ff":"#dfdfe1"};
  border: none;
  outline: 1.4px solid white;
  box-shadow: ${t=>t.$active?"0px 0px 18px 0px rgba(66, 132, 255, 0.6)":"none"};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 12px;
    height: 12px;
  }
`,GC=R.div`
  position: absolute;
  top: 50%;
  left: 16px;
  right: 0;
  width: 90%;
  height: 10px;
  background-color: #f4f4f4;
  border-radius: 1000px;
  transform: translateY(-50%);
  z-index: 0;
`,$C=R.div`
  position: absolute;
  top: 50%;
  left: 16px;
  height: 10px;
  background-color: #4284ff;
  transform: translateY(-50%);
  border-radius: 1000px;
  width: ${t=>`calc((100% - 32px) * ${t.$progress/100})`};
  z-index: 1;
  transition: width 0.3s ease;
`,qC=R.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  padding: 0 10px;
  font-size: 12px;
  width: 100%;
`,YC=R.div`
  color: ${t=>t.$active?"#4284ff":"#aeafb6"};
  font-weight: ${t=>t.$active?"700":"400"};
  text-align: center;
`,KC=({currentStep:t=0})=>{const n=["모집중","모집완료","결제대기","배송중"],a=t/3*100;return v.jsxs(BC,{children:[v.jsxs(HC,{children:[v.jsx(GC,{}),v.jsx($C,{$progress:a}),[...Array(4)].map((s,l)=>v.jsxs(FC,{$active:l===t,$completed:l<t,children:[l===t&&v.jsx("img",{src:"/dot.svg",alt:"현재 단계"}),l<t&&v.jsx("img",{src:"/check.svg",alt:"완료됨"})]},l))]}),v.jsx(qC,{children:n.map((s,l)=>v.jsx(YC,{$active:l<=t,children:s},s))})]})},QC=R.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,XC=R.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,WC=R.div`
  color: #797979;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`,ZC=R.span`
  color: #426bff;
`,JC=R.span`
  color: #797979;
`;function Xm({current:t=0,total:e=0}){return v.jsxs(QC,{children:[v.jsx(XC,{children:v.jsx("img",{src:"/ogury/participant.svg",alt:""})}),v.jsxs(WC,{children:[v.jsx(ZC,{children:t}),v.jsxs(JC,{children:["/",e]})]})]})}const eR=R.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
`,tR=R.span`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
`,nR=R.span`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
`;function Wm({amount:t="1,100원",unit:e="/ 인",color:n="#426bff",unitColor:a="#66686E"}){return v.jsxs(eR,{children:[v.jsx(tR,{style:{color:n},children:`${t==null?void 0:t.toLocaleString()}원 `}),v.jsx(nR,{style:{color:a},children:e})]})}const rR=R.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2px 8px;
  border-radius: 4px;
  background: var(--BLUE-BLUE02, #ebf2ff);

  color: #426bff;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.3px;

  width: fit-content;
`;function Qu({label:t}){const e=new Date,n=new Date(t);let a=`${Math.ceil((n-e)/(1e3*60*60*24))}`;return a<0?a="마감됨":a>0?a=`D-${a}`:a="D-Day",v.jsx(rR,{children:a})}const iR=R.h2`
  color: #333;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: ${t=>t.$weight||400};
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
`;function Zm({title:t="제목 없음",weight:e}){return v.jsx(iR,{$weight:e,children:t})}const aR=()=>{};var H_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let s=t.charCodeAt(a);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++a)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sR=function(t){const e=[];let n=0,a=0;for(;n<t.length;){const s=t[n++];if(s<128)e[a++]=String.fromCharCode(s);else if(s>191&&s<224){const l=t[n++];e[a++]=String.fromCharCode((s&31)<<6|l&63)}else if(s>239&&s<365){const l=t[n++],h=t[n++],d=t[n++],g=((s&7)<<18|(l&63)<<12|(h&63)<<6|d&63)-65536;e[a++]=String.fromCharCode(55296+(g>>10)),e[a++]=String.fromCharCode(56320+(g&1023))}else{const l=t[n++],h=t[n++];e[a++]=String.fromCharCode((s&15)<<12|(l&63)<<6|h&63)}}return e.join("")},Sb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let s=0;s<t.length;s+=3){const l=t[s],h=s+1<t.length,d=h?t[s+1]:0,g=s+2<t.length,m=g?t[s+2]:0,_=l>>2,E=(l&3)<<4|d>>4;let b=(d&15)<<2|m>>6,C=m&63;g||(C=64,h||(b=64)),a.push(n[_],n[E],n[b],n[C])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let s=0;s<t.length;){const l=n[t.charAt(s++)],d=s<t.length?n[t.charAt(s)]:0;++s;const m=s<t.length?n[t.charAt(s)]:64;++s;const E=s<t.length?n[t.charAt(s)]:64;if(++s,l==null||d==null||m==null||E==null)throw new oR;const b=l<<2|d>>4;if(a.push(b),m!==64){const C=d<<4&240|m>>2;if(a.push(C),E!==64){const O=m<<6&192|E;a.push(O)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lR=function(t){const e=Tb(t);return Sb.encodeByteArray(e,!0)},cf=function(t){return lR(t).replace(/\./g,"")},Ab=function(t){try{return Sb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=()=>uR().__FIREBASE_DEFAULTS__,hR=()=>{if(typeof process>"u"||typeof H_>"u")return;const t=H_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ab(t[1]);return e&&JSON.parse(e)},Uf=()=>{try{return aR()||cR()||hR()||fR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cb=t=>{var e,n;return(n=(e=Uf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dR=t=>{const e=Cb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),a]:[e.substring(0,n),a]},Rb=()=>{var t;return(t=Uf())===null||t===void 0?void 0:t.config},Ib=t=>{var e;return(e=Uf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){return t.endsWith(".cloudworkstations.dev")}async function Db(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},a=e||"demo-project",s=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:s,exp:s+3600,auth_time:s,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cf(JSON.stringify(n)),cf(JSON.stringify(h)),""].join(".")}const Cu={};function mR(){const t={prod:[],emulator:[]};for(const e of Object.keys(Cu))Cu[e]?t.emulator.push(e):t.prod.push(e);return t}function yR(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let F_=!1;function Ob(t,e){if(typeof window>"u"||typeof document>"u"||!Xu(window.location.host)||Cu[t]===e||Cu[t]||F_)return;Cu[t]=e;function n(b){return`__firebase__banner__${b}`}const a="__firebase__banner",l=mR().prod.length>0;function h(){const b=document.getElementById(a);b&&b.remove()}function d(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function g(b,C){b.setAttribute("width","24"),b.setAttribute("id",C),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function m(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{F_=!0,h()},b}function _(b,C){b.setAttribute("id",C),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function E(){const b=yR(a),C=n("text"),O=document.getElementById(C)||document.createElement("span"),z=n("learnmore"),k=document.getElementById(z)||document.createElement("a"),V=n("preprendIcon"),B=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const K=b.element;d(K),_(k,z);const J=m();g(B,V),K.append(B,O,k,J),document.body.appendChild(K)}l?(O.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xn())}function _R(){var t;const e=(t=Uf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ER(){const t=xn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function TR(){return!_R()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function SR(){try{return typeof indexedDB=="object"}catch{return!1}}function AR(){return new Promise((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(a);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var l;e(((l=s.error)===null||l===void 0?void 0:l.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR="FirebaseError";class Bi extends Error{constructor(e,n,a){super(n),this.code=e,this.customData=a,this.name=CR,Object.setPrototypeOf(this,Bi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wu.prototype.create)}}class Wu{constructor(e,n,a){this.service=e,this.serviceName=n,this.errors=a}create(e,...n){const a=n[0]||{},s=`${this.service}/${e}`,l=this.errors[e],h=l?RR(l,a):"Error",d=`${this.serviceName}: ${h} (${s}).`;return new Bi(s,d,a)}}function RR(t,e){return t.replace(IR,(n,a)=>{const s=e[a];return s!=null?String(s):`<${a}?>`})}const IR=/\{\$([^}]+)}/g;function DR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Da(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const s of n){if(!a.includes(s))return!1;const l=t[s],h=e[s];if(G_(l)&&G_(h)){if(!Da(l,h))return!1}else if(l!==h)return!1}for(const s of a)if(!n.includes(s))return!1;return!0}function G_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t){const e=[];for(const[n,a]of Object.entries(t))Array.isArray(a)?a.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function OR(t,e){const n=new kR(t,e);return n.subscribe.bind(n)}class kR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,a){let s;if(e===void 0&&n===void 0&&a===void 0)throw new Error("Missing Observer.");NR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:a},s.next===void 0&&(s.next=Eg),s.error===void 0&&(s.error=Eg),s.complete===void 0&&(s.complete=Eg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Eg(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t){return t&&t._delegate?t._delegate:t}class Rs{constructor(e,n,a){this.name=e,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const a=new pR;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&a.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jR(e))try{this.getOrInitializeService({instanceIdentifier:xs})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:s});a.resolve(l)}catch{}}}}clearInstance(e=xs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xs){return this.instances.has(e)}getOptions(e=xs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[l,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);a===d&&h.resolve(s)}return s}onInit(e,n){var a;const s=this.normalizeInstanceIdentifier(n),l=(a=this.onInitCallbacks.get(s))!==null&&a!==void 0?a:new Set;l.add(e),this.onInitCallbacks.set(s,l);const h=this.instances.get(s);return h&&e(h,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const a=this.onInitCallbacks.get(n);if(a)for(const s of a)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:PR(e),options:n}),this.instances.set(e,a),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=xs){return this.component?this.component.multipleInstances?e:xs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PR(t){return t===xs?void 0:t}function jR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ze||(ze={}));const LR={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},UR=ze.INFO,zR={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},BR=(t,e,...n)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),s=zR[e];if(s)console[s](`[${a}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jm{constructor(e){this.name=e,this._logLevel=UR,this._logHandler=BR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const HR=(t,e)=>e.some(n=>t instanceof n);let $_,q_;function FR(){return $_||($_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GR(){return q_||(q_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kb=new WeakMap,Jg=new WeakMap,Nb=new WeakMap,Tg=new WeakMap,ey=new WeakMap;function $R(t){const e=new Promise((n,a)=>{const s=()=>{t.removeEventListener("success",l),t.removeEventListener("error",h)},l=()=>{n(Sa(t.result)),s()},h=()=>{a(t.error),s()};t.addEventListener("success",l),t.addEventListener("error",h)});return e.then(n=>{n instanceof IDBCursor&&kb.set(n,t)}).catch(()=>{}),ey.set(e,t),e}function qR(t){if(Jg.has(t))return;const e=new Promise((n,a)=>{const s=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",h),t.removeEventListener("abort",h)},l=()=>{n(),s()},h=()=>{a(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",l),t.addEventListener("error",h),t.addEventListener("abort",h)});Jg.set(t,e)}let em={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sa(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YR(t){em=t(em)}function KR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const a=t.call(Sg(this),e,...n);return Nb.set(a,e.sort?e.sort():[e]),Sa(a)}:GR().includes(t)?function(...e){return t.apply(Sg(this),e),Sa(kb.get(this))}:function(...e){return Sa(t.apply(Sg(this),e))}}function QR(t){return typeof t=="function"?KR(t):(t instanceof IDBTransaction&&qR(t),HR(t,FR())?new Proxy(t,em):t)}function Sa(t){if(t instanceof IDBRequest)return $R(t);if(Tg.has(t))return Tg.get(t);const e=QR(t);return e!==t&&(Tg.set(t,e),ey.set(e,t)),e}const Sg=t=>ey.get(t);function XR(t,e,{blocked:n,upgrade:a,blocking:s,terminated:l}={}){const h=indexedDB.open(t,e),d=Sa(h);return a&&h.addEventListener("upgradeneeded",g=>{a(Sa(h.result),g.oldVersion,g.newVersion,Sa(h.transaction),g)}),n&&h.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),d.then(g=>{l&&g.addEventListener("close",()=>l()),s&&g.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const WR=["get","getKey","getAll","getAllKeys","count"],ZR=["put","add","delete","clear"],Ag=new Map;function Y_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ag.get(e))return Ag.get(e);const n=e.replace(/FromIndex$/,""),a=e!==n,s=ZR.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(s||WR.includes(n)))return;const l=async function(h,...d){const g=this.transaction(h,s?"readwrite":"readonly");let m=g.store;return a&&(m=m.index(d.shift())),(await Promise.all([m[n](...d),s&&g.done]))[0]};return Ag.set(e,l),l}YR(t=>({...t,get:(e,n,a)=>Y_(e,n)||t.get(e,n,a),has:(e,n)=>!!Y_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(e6(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function e6(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tm="@firebase/app",K_="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Jm("@firebase/app"),t6="@firebase/app-compat",n6="@firebase/analytics-compat",r6="@firebase/analytics",i6="@firebase/app-check-compat",a6="@firebase/app-check",s6="@firebase/auth",o6="@firebase/auth-compat",l6="@firebase/database",u6="@firebase/data-connect",c6="@firebase/database-compat",h6="@firebase/functions",f6="@firebase/functions-compat",d6="@firebase/installations",p6="@firebase/installations-compat",g6="@firebase/messaging",m6="@firebase/messaging-compat",y6="@firebase/performance",v6="@firebase/performance-compat",_6="@firebase/remote-config",x6="@firebase/remote-config-compat",w6="@firebase/storage",b6="@firebase/storage-compat",E6="@firebase/firestore",T6="@firebase/ai",S6="@firebase/firestore-compat",A6="firebase",C6="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="[DEFAULT]",R6={[tm]:"fire-core",[t6]:"fire-core-compat",[r6]:"fire-analytics",[n6]:"fire-analytics-compat",[a6]:"fire-app-check",[i6]:"fire-app-check-compat",[s6]:"fire-auth",[o6]:"fire-auth-compat",[l6]:"fire-rtdb",[u6]:"fire-data-connect",[c6]:"fire-rtdb-compat",[h6]:"fire-fn",[f6]:"fire-fn-compat",[d6]:"fire-iid",[p6]:"fire-iid-compat",[g6]:"fire-fcm",[m6]:"fire-fcm-compat",[y6]:"fire-perf",[v6]:"fire-perf-compat",[_6]:"fire-rc",[x6]:"fire-rc-compat",[w6]:"fire-gcs",[b6]:"fire-gcs-compat",[E6]:"fire-fst",[S6]:"fire-fst-compat",[T6]:"fire-vertex","fire-js":"fire-js",[A6]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map,I6=new Map,rm=new Map;function Q_(t,e){try{t.container.addComponent(e)}catch(n){Pi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ko(t){const e=t.name;if(rm.has(e))return Pi.debug(`There were multiple attempts to register component ${e}.`),!1;rm.set(e,t);for(const n of hf.values())Q_(n,t);for(const n of I6.values())Q_(n,t);return!0}function ty(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Fr(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D6={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Aa=new Wu("app","Firebase",D6);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O6{constructor(e,n,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Aa.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=C6;function Mb(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const a=Object.assign({name:nm,automaticDataCollectionEnabled:!0},e),s=a.name;if(typeof s!="string"||!s)throw Aa.create("bad-app-name",{appName:String(s)});if(n||(n=Rb()),!n)throw Aa.create("no-options");const l=hf.get(s);if(l){if(Da(n,l.options)&&Da(a,l.config))return l;throw Aa.create("duplicate-app",{appName:s})}const h=new VR(s);for(const g of rm.values())h.addComponent(g);const d=new O6(n,a,h);return hf.set(s,d),d}function Pb(t=nm){const e=hf.get(t);if(!e&&t===nm&&Rb())return Mb();if(!e)throw Aa.create("no-app",{appName:t});return e}function Ca(t,e,n){var a;let s=(a=R6[t])!==null&&a!==void 0?a:t;n&&(s+=`-${n}`);const l=s.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const d=[`Unable to register library "${s}" with version "${e}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&h&&d.push("and"),h&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pi.warn(d.join(" "));return}Ko(new Rs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k6="firebase-heartbeat-database",N6=1,ju="firebase-heartbeat-store";let Cg=null;function jb(){return Cg||(Cg=XR(k6,N6,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ju)}catch(n){console.warn(n)}}}}).catch(t=>{throw Aa.create("idb-open",{originalErrorMessage:t.message})})),Cg}async function M6(t){try{const n=(await jb()).transaction(ju),a=await n.objectStore(ju).get(Vb(t));return await n.done,a}catch(e){if(e instanceof Bi)Pi.warn(e.message);else{const n=Aa.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pi.warn(n.message)}}}async function X_(t,e){try{const a=(await jb()).transaction(ju,"readwrite");await a.objectStore(ju).put(e,Vb(t)),await a.done}catch(n){if(n instanceof Bi)Pi.warn(n.message);else{const a=Aa.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pi.warn(a.message)}}}function Vb(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P6=1024,j6=30;class V6{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new U6(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=W_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:s}),this._heartbeatsCache.heartbeats.length>j6){const h=z6(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){Pi.warn(a)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=W_(),{heartbeatsToSend:a,unsentEntries:s}=L6(this._heartbeatsCache.heartbeats),l=cf(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return Pi.warn(n),""}}}function W_(){return new Date().toISOString().substring(0,10)}function L6(t,e=P6){const n=[];let a=t.slice();for(const s of t){const l=n.find(h=>h.agent===s.agent);if(l){if(l.dates.push(s.date),Z_(n)>e){l.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Z_(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class U6{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SR()?AR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await M6(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return X_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return X_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Z_(t){return cf(JSON.stringify({version:2,heartbeats:t})).length}function z6(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let a=1;a<t.length;a++)t[a].date<n&&(n=t[a].date,e=a);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B6(t){Ko(new Rs("platform-logger",e=>new JR(e),"PRIVATE")),Ko(new Rs("heartbeat",e=>new V6(e),"PRIVATE")),Ca(tm,K_,t),Ca(tm,K_,"esm2017"),Ca("fire-js","")}B6("");var H6="firebase",F6="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ca(H6,F6,"app");function Lb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G6=Lb,Ub=new Wu("auth","Firebase",Lb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=new Jm("@firebase/auth");function $6(t,...e){ff.logLevel<=ze.WARN&&ff.warn(`Auth (${ll}): ${t}`,...e)}function Kh(t,...e){ff.logLevel<=ze.ERROR&&ff.error(`Auth (${ll}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t,...e){throw ny(t,...e)}function Gr(t,...e){return ny(t,...e)}function zb(t,e,n){const a=Object.assign(Object.assign({},G6()),{[e]:n});return new Wu("auth","Firebase",a).create(e,{appName:t.name})}function Ss(t){return zb(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ny(t,...e){if(typeof t!="string"){const n=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=t.name),t._errorFactory.create(n,...a)}return Ub.create(t,...e)}function Ce(t,e,...n){if(!t)throw ny(e,...n)}function Di(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kh(e),new Error(e)}function Vi(t,e){t||Di(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function q6(){return J_()==="http:"||J_()==="https:"}function J_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y6(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q6()||wR()||"connection"in navigator)?navigator.onLine:!0}function K6(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vi(n>e,"Short delay should be less than long delay!"),this.isMobile=vR()||bR()}get(){return Y6()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t,e){Vi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{static initialize(e,n,a){this.fetchImpl=e,n&&(this.headersImpl=n),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Di("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Di("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Di("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q6={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X6=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],W6=new Ju(3e4,6e4);function iy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ul(t,e,n,a,s={}){return Hb(t,s,async()=>{let l={},h={};a&&(e==="GET"?h=a:l={body:JSON.stringify(a)});const d=Zu(Object.assign({key:t.config.apiKey},h)).slice(1),g=await t._getAdditionalHeaders();g["Content-Type"]="application/json",t.languageCode&&(g["X-Firebase-Locale"]=t.languageCode);const m=Object.assign({method:e,headers:g},l);return xR()||(m.referrerPolicy="no-referrer"),t.emulatorConfig&&Xu(t.emulatorConfig.host)&&(m.credentials="include"),Bb.fetch()(await Fb(t,t.config.apiHost,n,d),m)})}async function Hb(t,e,n){t._canInitEmulator=!1;const a=Object.assign(Object.assign({},Q6),e);try{const s=new J6(t),l=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Nh(t,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const d=l.ok?h.errorMessage:h.error.message,[g,m]=d.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nh(t,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Nh(t,"email-already-in-use",h);if(g==="USER_DISABLED")throw Nh(t,"user-disabled",h);const _=a[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw zb(t,_,m);ji(t,_)}}catch(s){if(s instanceof Bi)throw s;ji(t,"network-request-failed",{message:String(s)})}}async function Z6(t,e,n,a,s={}){const l=await ul(t,e,n,a,s);return"mfaPendingCredential"in l&&ji(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function Fb(t,e,n,a){const s=`${e}${n}?${a}`,l=t,h=l.config.emulator?ry(t.config,s):`${t.config.apiScheme}://${s}`;return X6.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class J6{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,a)=>{this.timer=setTimeout(()=>a(Gr(this.auth,"network-request-failed")),W6.get())})}}function Nh(t,e,n){const a={appName:t.name};n.email&&(a.email=n.email),n.phoneNumber&&(a.phoneNumber=n.phoneNumber);const s=Gr(t,e,a);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e3(t,e){return ul(t,"POST","/v1/accounts:delete",e)}async function df(t,e){return ul(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function t3(t,e=!1){const n=Pn(t),a=await n.getIdToken(e),s=ay(a);Ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const l=typeof s.firebase=="object"?s.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:s,token:a,authTime:Ru(Rg(s.auth_time)),issuedAtTime:Ru(Rg(s.iat)),expirationTime:Ru(Rg(s.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Rg(t){return Number(t)*1e3}function ay(t){const[e,n,a]=t.split(".");if(e===void 0||n===void 0||a===void 0)return Kh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ab(n);return s?JSON.parse(s):(Kh("Failed to decode base64 JWT payload"),null)}catch(s){return Kh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ex(t){const e=ay(t);return Ce(e,"internal-error"),Ce(typeof e.exp<"u","internal-error"),Ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vu(t,e,n=!1){if(n)return e;try{return await e}catch(a){throw a instanceof Bi&&n3(a)&&t.auth.currentUser===t&&await t.auth.signOut(),a}}function n3({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ru(this.lastLoginAt),this.creationTime=Ru(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pf(t){var e;const n=t.auth,a=await t.getIdToken(),s=await Vu(t,df(n,{idToken:a}));Ce(s==null?void 0:s.users.length,n,"internal-error");const l=s.users[0];t._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Gb(l.providerUserInfo):[],d=a3(t.providerData,h),g=t.isAnonymous,m=!(t.email&&l.passwordHash)&&!(d!=null&&d.length),_=g?m:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new am(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(t,E)}async function i3(t){const e=Pn(t);await pf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function a3(t,e){return[...t.filter(a=>!e.some(s=>s.providerId===a.providerId)),...e]}function Gb(t){return t.map(e=>{var{providerId:n}=e,a=Gm(e,["providerId"]);return{providerId:n,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s3(t,e){const n=await Hb(t,{},async()=>{const a=Zu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:l}=t.config,h=await Fb(t,s,"/v1/token",`key=${l}`),d=await t._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Bb.fetch()(h,{method:"POST",headers:d,body:a})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function o3(t,e){return ul(t,"POST","/v2/accounts:revokeToken",iy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ce(e.idToken,"internal-error"),Ce(typeof e.idToken<"u","internal-error"),Ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ex(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ce(e.length!==0,"internal-error");const n=ex(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:a,refreshToken:s,expiresIn:l}=await s3(e,n);this.updateTokensAndExpiration(a,s,Number(l))}updateTokensAndExpiration(e,n,a){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,n){const{refreshToken:a,accessToken:s,expirationTime:l}=n,h=new Uo;return a&&(Ce(typeof a=="string","internal-error",{appName:e}),h.refreshToken=a),s&&(Ce(typeof s=="string","internal-error",{appName:e}),h.accessToken=s),l&&(Ce(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Uo,this.toJSON())}_performRefresh(){return Di("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t,e){Ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xr{constructor(e){var{uid:n,auth:a,stsTokenManager:s}=e,l=Gm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new r3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=a,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new am(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await Vu(this,this.stsTokenManager.getToken(this.auth,e));return Ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return t3(this,e)}reload(){return i3(this)}_assign(e){this!==e&&(Ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),n&&await pf(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fr(this.auth.app))return Promise.reject(Ss(this.auth));const e=await this.getIdToken();return await Vu(this,e3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var a,s,l,h,d,g,m,_;const E=(a=n.displayName)!==null&&a!==void 0?a:void 0,b=(s=n.email)!==null&&s!==void 0?s:void 0,C=(l=n.phoneNumber)!==null&&l!==void 0?l:void 0,O=(h=n.photoURL)!==null&&h!==void 0?h:void 0,z=(d=n.tenantId)!==null&&d!==void 0?d:void 0,k=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,V=(m=n.createdAt)!==null&&m!==void 0?m:void 0,B=(_=n.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:K,emailVerified:J,isAnonymous:re,providerData:ce,stsTokenManager:D}=n;Ce(K&&D,e,"internal-error");const A=Uo.fromJSON(this.name,D);Ce(typeof K=="string",e,"internal-error"),va(E,e.name),va(b,e.name),Ce(typeof J=="boolean",e,"internal-error"),Ce(typeof re=="boolean",e,"internal-error"),va(C,e.name),va(O,e.name),va(z,e.name),va(k,e.name),va(V,e.name),va(B,e.name);const I=new xr({uid:K,auth:e,email:b,emailVerified:J,displayName:E,isAnonymous:re,photoURL:O,phoneNumber:C,tenantId:z,stsTokenManager:A,createdAt:V,lastLoginAt:B});return ce&&Array.isArray(ce)&&(I.providerData=ce.map(j=>Object.assign({},j))),k&&(I._redirectEventId=k),I}static async _fromIdTokenResponse(e,n,a=!1){const s=new Uo;s.updateFromServerResponse(n);const l=new xr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:a});return await pf(l),l}static async _fromGetAccountInfoResponse(e,n,a){const s=n.users[0];Ce(s.localId!==void 0,"internal-error");const l=s.providerUserInfo!==void 0?Gb(s.providerUserInfo):[],h=!(s.email&&s.passwordHash)&&!(l!=null&&l.length),d=new Uo;d.updateFromIdToken(a);const g=new xr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:h}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new am(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,m),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=new Map;function Oi(t){Vi(t instanceof Function,"Expected a class definition");let e=tx.get(t);return e?(Vi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tx.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$b.type="NONE";const nx=$b;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t,e,n){return`firebase:${t}:${e}:${n}`}class zo{constructor(e,n,a){this.persistence=e,this.auth=n,this.userKey=a;const{config:s,name:l}=this.auth;this.fullUserKey=Qh(this.userKey,s.apiKey,l),this.fullPersistenceKey=Qh("persistence",s.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await df(this.auth,{idToken:e}).catch(()=>{});return n?xr._fromGetAccountInfoResponse(this.auth,n,e):null}return xr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,a="authUser"){if(!n.length)return new zo(Oi(nx),e,a);const s=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=s[0]||Oi(nx);const h=Qh(a,e.config.apiKey,e.name);let d=null;for(const m of n)try{const _=await m._get(h);if(_){let E;if(typeof _=="string"){const b=await df(e,{idToken:_}).catch(()=>{});if(!b)break;E=await xr._fromGetAccountInfoResponse(e,b,_)}else E=xr._fromJSON(e,_);m!==l&&(d=E),l=m;break}}catch{}const g=s.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new zo(l,e,a):(l=g[0],d&&await l._set(h,d.toJSON()),await Promise.all(n.map(async m=>{if(m!==l)try{await m._remove(h)}catch{}})),new zo(l,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wb(e))return"Blackberry";if(Zb(e))return"Webos";if(Yb(e))return"Safari";if((e.includes("chrome/")||Kb(e))&&!e.includes("edge/"))return"Chrome";if(Xb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=t.match(n);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function qb(t=xn()){return/firefox\//i.test(t)}function Yb(t=xn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kb(t=xn()){return/crios\//i.test(t)}function Qb(t=xn()){return/iemobile/i.test(t)}function Xb(t=xn()){return/android/i.test(t)}function Wb(t=xn()){return/blackberry/i.test(t)}function Zb(t=xn()){return/webos/i.test(t)}function sy(t=xn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function l3(t=xn()){var e;return sy(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function u3(){return ER()&&document.documentMode===10}function Jb(t=xn()){return sy(t)||Xb(t)||Zb(t)||Wb(t)||/windows phone/i.test(t)||Qb(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t,e=[]){let n;switch(t){case"Browser":n=rx(xn());break;case"Worker":n=`${rx(xn())}-${t}`;break;default:n=t}const a=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ll}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const a=l=>new Promise((h,d)=>{try{const g=e(l);h(g)}catch(g){d(g)}});a.onAbort=n,this.queue.push(a);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const a of this.queue)await a(e),a.onAbort&&n.push(a.onAbort)}catch(a){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h3(t,e={}){return ul(t,"GET","/v2/passwordPolicy",iy(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f3=6;class d3{constructor(e){var n,a,s,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=h.minPasswordLength)!==null&&n!==void 0?n:f3,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,a,s,l,h,d;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(n=g.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),g.isValid&&(g.isValid=(a=g.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),g.isValid&&(g.isValid=(s=g.containsLowercaseLetter)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(d=g.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),g}validatePasswordLengthOptions(e,n){const a=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;a&&(n.meetsMinPasswordLength=e.length>=a),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let a;for(let s=0;s<e.length;s++)a=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,n,a,s,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3{constructor(e,n,a,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=a,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ix(this),this.idTokenSubscription=new ix(this),this.beforeStateQueue=new c3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ub,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Oi(n)),this._initializationPromise=this.queue(async()=>{var a,s,l;if(!this._deleted&&(this.persistenceManager=await zo.create(this,e),(a=this._resolvePersistenceManagerAvailable)===null||a===void 0||a.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await df(this,{idToken:e}),a=await xr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(a)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Fr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let s=a,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,d=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===d)&&(g!=null&&g.user)&&(s=g.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pf(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=K6()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fr(this.app))return Promise.reject(Ss(this));const n=e?Pn(e):null;return n&&Ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fr(this.app)?Promise.reject(Ss(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fr(this.app)?Promise.reject(Ss(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Oi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await h3(this),n=new d3(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wu("auth","Firebase",e())}onAuthStateChanged(e,n,a){return this.registerStateListener(this.authStateSubscription,e,n,a)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,a){return this.registerStateListener(this.idTokenSubscription,e,n,a)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(a.tenantId=this.tenantId),await o3(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const a=await this.getOrInitRedirectPersistenceManager(n);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Oi(e)||this._popupRedirectResolver;Ce(n,this,"argument-error"),this.redirectPersistenceManager=await zo.create(this,[Oi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,a;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,a,s){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ce(d,this,"internal-error"),d.then(()=>{h||l(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,a,s);return()=>{h=!0,g()}}else{const g=e.addObserver(n);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(n["X-Firebase-Client"]=a);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Fr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$6(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function oy(t){return Pn(t)}class ix{constructor(e){this.auth=e,this.observer=null,this.addObserver=OR(n=>this.observer=n)}get next(){return Ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ly={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function g3(t){ly=t}function m3(t){return ly.loadJS(t)}function y3(){return ly.gapiScript}function v3(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _3(t,e){const n=ty(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),l=n.getOptions();if(Da(l,e??{}))return s;ji(s,"already-initialized")}return n.initialize({options:e})}function x3(t,e){const n=(e==null?void 0:e.persistence)||[],a=(Array.isArray(n)?n:[n]).map(Oi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function w3(t,e,n){const a=oy(t);Ce(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const s=!1,l=tE(e),{host:h,port:d}=b3(e),g=d===null?"":`:${d}`,m={url:`${l}//${h}${g}/`},_=Object.freeze({host:h,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!a._canInitEmulator){Ce(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),Ce(Da(m,a.config.emulator)&&Da(_,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=m,a.emulatorConfig=_,a.settings.appVerificationDisabledForTesting=!0,Xu(h)?(Db(`${l}//${h}${g}`),Ob("Auth",!0)):E3()}function tE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function b3(t){const e=tE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const a=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(a);if(s){const l=s[1];return{host:l,port:ax(a.substr(l.length+1))}}else{const[l,h]=a.split(":");return{host:l,port:ax(h)}}}function ax(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function E3(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Di("not implemented")}_getIdTokenResponse(e){return Di("not implemented")}_linkToIdToken(e,n){return Di("not implemented")}_getReauthenticationResolver(e){return Di("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t,e){return Z6(t,"POST","/v1/accounts:signInWithIdp",iy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T3="http://localhost";class Is extends nE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ji("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:s}=n,l=Gm(n,["providerId","signInMethod"]);if(!a||!s)return null;const h=new Is(a,s);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const n=this.buildRequest();return Bo(e,n)}_linkToIdToken(e,n){const a=this.buildRequest();return a.idToken=n,Bo(e,a)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bo(e,n)}buildRequest(){const e={requestUri:T3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends rE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends ec{constructor(){super("facebook.com")}static credential(e){return Is._fromParams({providerId:xa.PROVIDER_ID,signInMethod:xa.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xa.credentialFromTaggedObject(e)}static credentialFromError(e){return xa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xa.credential(e.oauthAccessToken)}catch{return null}}}xa.FACEBOOK_SIGN_IN_METHOD="facebook.com";xa.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends ec{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Is._fromParams({providerId:wa.PROVIDER_ID,signInMethod:wa.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wa.credentialFromTaggedObject(e)}static credentialFromError(e){return wa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:a}=e;if(!n&&!a)return null;try{return wa.credential(n,a)}catch{return null}}}wa.GOOGLE_SIGN_IN_METHOD="google.com";wa.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends ec{constructor(){super("github.com")}static credential(e){return Is._fromParams({providerId:ba.PROVIDER_ID,signInMethod:ba.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ba.credentialFromTaggedObject(e)}static credentialFromError(e){return ba.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ba.credential(e.oauthAccessToken)}catch{return null}}}ba.GITHUB_SIGN_IN_METHOD="github.com";ba.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends ec{constructor(){super("twitter.com")}static credential(e,n){return Is._fromParams({providerId:Ea.PROVIDER_ID,signInMethod:Ea.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ea.credentialFromTaggedObject(e)}static credentialFromError(e){return Ea.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:a}=e;if(!n||!a)return null;try{return Ea.credential(n,a)}catch{return null}}}Ea.TWITTER_SIGN_IN_METHOD="twitter.com";Ea.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,a,s=!1){const l=await xr._fromIdTokenResponse(e,a,s),h=sx(a);return new Qo({user:l,providerId:h,_tokenResponse:a,operationType:n})}static async _forOperation(e,n,a){await e._updateTokensIfNecessary(a,!0);const s=sx(a);return new Qo({user:e,providerId:s,_tokenResponse:a,operationType:n})}}function sx(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends Bi{constructor(e,n,a,s){var l;super(n.code,n.message),this.operationType=a,this.user=s,Object.setPrototypeOf(this,gf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:n.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,n,a,s){return new gf(e,n,a,s)}}function iE(t,e,n,a){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?gf._fromErrorAndOperation(t,l,e,a):l})}async function S3(t,e,n=!1){const a=await Vu(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qo._forOperation(t,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A3(t,e,n=!1){const{auth:a}=t;if(Fr(a.app))return Promise.reject(Ss(a));const s="reauthenticate";try{const l=await Vu(t,iE(a,s,e,t),n);Ce(l.idToken,a,"internal-error");const h=ay(l.idToken);Ce(h,a,"internal-error");const{sub:d}=h;return Ce(t.uid===d,a,"user-mismatch"),Qo._forOperation(t,s,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&ji(a,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C3(t,e,n=!1){if(Fr(t.app))return Promise.reject(Ss(t));const a="signIn",s=await iE(t,a,e),l=await Qo._fromIdTokenResponse(t,a,s);return n||await t._updateCurrentUser(l.user),l}function R3(t,e,n,a){return Pn(t).onIdTokenChanged(e,n,a)}function I3(t,e,n){return Pn(t).beforeAuthStateChanged(e,n)}const mf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mf,"1"),this.storage.removeItem(mf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D3=1e3,O3=10;class sE extends aE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const a=this.storage.getItem(n),s=this.localCache[n];a!==s&&e(n,s,a)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((h,d,g)=>{this.notifyListeners(h,g)});return}const a=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const h=this.storage.getItem(a);!n&&this.localCache[a]===h||this.notifyListeners(a,h)},l=this.storage.getItem(a);u3()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,O3):s()}notifyListeners(e,n){this.localCache[e]=n;const a=this.listeners[e];if(a)for(const s of Array.from(a))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:a}),!0)})},D3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sE.type="LOCAL";const k3=sE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE extends aE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oE.type="SESSION";const lE=oE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N3(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const a=new zf(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:a,eventType:s,data:l}=n.data,h=this.handlersMap[s];if(!(h!=null&&h.size))return;n.ports[0].postMessage({status:"ack",eventId:a,eventType:s});const d=Array.from(h).map(async m=>m(n.origin,l)),g=await N3(d);n.ports[0].postMessage({status:"done",eventId:a,eventType:s,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t="",e=10){let n="";for(let a=0;a<e;a++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,a=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let l,h;return new Promise((d,g)=>{const m=uy("",20);s.port1.start();const _=setTimeout(()=>{g(new Error("unsupported_event"))},a);h={messageChannel:s,onMessage(E){const b=E;if(b.data.eventId===m)switch(b.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(b.data.response);break;default:clearTimeout(_),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),s.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:m,data:n},[s.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(){return window}function P3(t){$r().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(){return typeof $r().WorkerGlobalScope<"u"&&typeof $r().importScripts=="function"}async function j3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V3(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function L3(){return uE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="firebaseLocalStorageDb",U3=1,yf="firebaseLocalStorage",hE="fbase_key";class tc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bf(t,e){return t.transaction([yf],e?"readwrite":"readonly").objectStore(yf)}function z3(){const t=indexedDB.deleteDatabase(cE);return new tc(t).toPromise()}function sm(){const t=indexedDB.open(cE,U3);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const a=t.result;try{a.createObjectStore(yf,{keyPath:hE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const a=t.result;a.objectStoreNames.contains(yf)?e(a):(a.close(),await z3(),e(await sm()))})})}async function ox(t,e,n){const a=Bf(t,!0).put({[hE]:e,value:n});return new tc(a).toPromise()}async function B3(t,e){const n=Bf(t,!1).get(e),a=await new tc(n).toPromise();return a===void 0?null:a.value}function lx(t,e){const n=Bf(t,!0).delete(e);return new tc(n).toPromise()}const H3=800,F3=3;class fE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(n++>F3)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zf._getInstance(L3()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await j3(),!this.activeServiceWorker)return;this.sender=new M3(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((n=a[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||V3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sm();return await ox(e,mf,"1"),await lx(e,mf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(a=>ox(a,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(a=>B3(a,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lx(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const l=Bf(s,!1).getAll();return new tc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],a=new Set;if(e.length!==0)for(const{fbase_key:s,value:l}of e)a.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(l)&&(this.notifyListeners(s,l),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!a.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const a=this.listeners[e];if(a)for(const s of Array.from(a))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),H3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fE.type="LOCAL";const G3=fE;new Ju(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $3(t,e){return e?Oi(e):(Ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy extends nE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function q3(t){return C3(t.auth,new cy(t),t.bypassAuthState)}function Y3(t){const{auth:e,user:n}=t;return Ce(n,e,"internal-error"),A3(n,new cy(t),t.bypassAuthState)}async function K3(t){const{auth:e,user:n}=t;return Ce(n,e,"internal-error"),S3(n,new cy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n,a,s,l=!1){this.auth=e,this.resolver=a,this.user=s,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:a,postBody:s,tenantId:l,error:h,type:d}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:n,sessionId:a,tenantId:l||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(g))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return q3;case"linkViaPopup":case"linkViaRedirect":return K3;case"reauthViaPopup":case"reauthViaRedirect":return Y3;default:ji(this.auth,"internal-error")}}resolve(e){Vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q3=new Ju(2e3,1e4);class jo extends dE{constructor(e,n,a,s,l){super(e,n,s,l),this.provider=a,this.authWindow=null,this.pollId=null,jo.currentPopupAction&&jo.currentPopupAction.cancel(),jo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ce(e,this.auth,"internal-error"),e}async onExecution(){Vi(this.filter.length===1,"Popup operations only handle one event");const e=uy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,a;if(!((a=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Q3.get())};e()}}jo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X3="pendingRedirect",Xh=new Map;class W3 extends dE{constructor(e,n,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,a),this.eventId=null}async execute(){let e=Xh.get(this.auth._key());if(!e){try{const a=await Z3(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(n){e=()=>Promise.reject(n)}Xh.set(this.auth._key(),e)}return this.bypassAuthState||Xh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Z3(t,e){const n=tI(e),a=eI(t);if(!await a._isAvailable())return!1;const s=await a._get(n)==="true";return await a._remove(n),s}function J3(t,e){Xh.set(t._key(),e)}function eI(t){return Oi(t._redirectPersistence)}function tI(t){return Qh(X3,t.config.apiKey,t.name)}async function nI(t,e,n=!1){if(Fr(t.app))return Promise.reject(Ss(t));const a=oy(t),s=$3(a,e),h=await new W3(a,s,n).execute();return h&&!n&&(delete h.user._redirectEventId,await a._persistUserIfCurrent(h.user),await a._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=10*60*1e3;class iI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(n=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var a;if(e.error&&!pE(e)){const s=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";n.onError(Gr(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const a=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rI&&this.cachedEventUids.clear(),this.cachedEventUids.has(ux(e))}saveEventToCache(e){this.cachedEventUids.add(ux(e)),this.lastProcessedEventTime=Date.now()}}function ux(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t,e={}){return ul(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lI=/^https?/;async function uI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sI(t);for(const n of e)try{if(cI(n))return}catch{}ji(t,"unauthorized-domain")}function cI(t){const e=im(),{protocol:n,hostname:a}=new URL(e);if(t.startsWith("chrome-extension://")){const h=new URL(t);return h.hostname===""&&a===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===a}if(!lI.test(n))return!1;if(oI.test(t))return a===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=new Ju(3e4,6e4);function cx(){const t=$r().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fI(t){return new Promise((e,n)=>{var a,s,l;function h(){cx(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cx(),n(Gr(t,"network-request-failed"))},timeout:hI.get()})}if(!((s=(a=$r().gapi)===null||a===void 0?void 0:a.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((l=$r().gapi)===null||l===void 0)&&l.load)h();else{const d=v3("iframefcb");return $r()[d]=()=>{gapi.load?h():n(Gr(t,"network-request-failed"))},m3(`${y3()}?onload=${d}`).catch(g=>n(g))}}).catch(e=>{throw Wh=null,e})}let Wh=null;function dI(t){return Wh=Wh||fI(t),Wh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=new Ju(5e3,15e3),gI="__/auth/iframe",mI="emulator/auth/iframe",yI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _I(t){const e=t.config;Ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ry(e,mI):`https://${t.config.authDomain}/${gI}`,a={apiKey:e.apiKey,appName:t.name,v:ll},s=vI.get(t.config.apiHost);s&&(a.eid=s);const l=t._getFrameworks();return l.length&&(a.fw=l.join(",")),`${n}?${Zu(a).slice(1)}`}async function xI(t){const e=await dI(t),n=$r().gapi;return Ce(n,t,"internal-error"),e.open({where:document.body,url:_I(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yI,dontclear:!0},a=>new Promise(async(s,l)=>{await a.restyle({setHideOnLeave:!1});const h=Gr(t,"network-request-failed"),d=$r().setTimeout(()=>{l(h)},pI.get());function g(){$r().clearTimeout(d),s(a)}a.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bI=500,EI=600,TI="_blank",SI="http://localhost";class hx{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AI(t,e,n,a=bI,s=EI){const l=Math.max((window.screen.availHeight-s)/2,0).toString(),h=Math.max((window.screen.availWidth-a)/2,0).toString();let d="";const g=Object.assign(Object.assign({},wI),{width:a.toString(),height:s.toString(),top:l,left:h}),m=xn().toLowerCase();n&&(d=Kb(m)?TI:n),qb(m)&&(e=e||SI,g.scrollbars="yes");const _=Object.entries(g).reduce((b,[C,O])=>`${b}${C}=${O},`,"");if(l3(m)&&d!=="_self")return CI(e||"",d),new hx(null);const E=window.open(e||"",d,_);Ce(E,t,"popup-blocked");try{E.focus()}catch{}return new hx(E)}function CI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI="__/auth/handler",II="emulator/auth/handler",DI=encodeURIComponent("fac");async function fx(t,e,n,a,s,l){Ce(t.config.authDomain,t,"auth-domain-config-required"),Ce(t.config.apiKey,t,"invalid-api-key");const h={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:a,v:ll,eventId:s};if(e instanceof rE){e.setDefaultLanguage(t.languageCode),h.providerId=e.providerId||"",DR(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,E]of Object.entries({}))h[_]=E}if(e instanceof ec){const _=e.getScopes().filter(E=>E!=="");_.length>0&&(h.scopes=_.join(","))}t.tenantId&&(h.tid=t.tenantId);const d=h;for(const _ of Object.keys(d))d[_]===void 0&&delete d[_];const g=await t._getAppCheckToken(),m=g?`#${DI}=${encodeURIComponent(g)}`:"";return`${OI(t)}?${Zu(d).slice(1)}${m}`}function OI({config:t}){return t.emulator?ry(t,II):`https://${t.authDomain}/${RI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="webStorageSupport";class kI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lE,this._completeRedirectFn=nI,this._overrideRedirectResult=J3}async _openPopup(e,n,a,s){var l;Vi((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await fx(e,n,a,im(),s);return AI(e,h,uy())}async _openRedirect(e,n,a,s){await this._originValidation(e);const l=await fx(e,n,a,im(),s);return P3(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:l}=this.eventManagers[n];return s?Promise.resolve(s):(Vi(l,"If manager is not set, promise should be"),l)}const a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch(()=>{delete this.eventManagers[n]}),a}async initAndGetManager(e){const n=await xI(e),a=new iI(e);return n.register("authEvent",s=>(Ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:a.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=n,a}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ig,{type:Ig},s=>{var l;const h=(l=s==null?void 0:s[0])===null||l===void 0?void 0:l[Ig];h!==void 0&&n(!!h),ji(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jb()||Yb()||sy()}}const NI=kI;var dx="@firebase/auth",px="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jI(t){Ko(new Rs("auth",(e,{options:n})=>{const a=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=a.options;Ce(h&&!h.includes(":"),"invalid-api-key",{appName:a.name});const g={apiKey:h,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eE(t)},m=new p3(a,s,l,g);return x3(m,n),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,a)=>{e.getProvider("auth-internal").initialize()})),Ko(new Rs("auth-internal",e=>{const n=oy(e.getProvider("auth").getImmediate());return(a=>new MI(a))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ca(dx,px,PI(t)),Ca(dx,px,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=5*60,LI=Ib("authIdTokenMaxAge")||VI;let gx=null;const UI=t=>async e=>{const n=e&&await e.getIdTokenResult(),a=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(a&&a>LI)return;const s=n==null?void 0:n.token;gx!==s&&(gx=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zI(t=Pb()){const e=ty(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_3(t,{popupRedirectResolver:NI,persistence:[G3,k3,lE]}),a=Ib("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(a,location.origin);if(location.origin===l.origin){const h=UI(l.toString());I3(n,h,()=>h(n.currentUser)),R3(n,d=>h(d))}}const s=Cb("auth");return s&&w3(n,`http://${s}`),n}function BI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}g3({loadJS(t){return new Promise((e,n)=>{const a=document.createElement("script");a.setAttribute("src",t),a.onload=e,a.onerror=s=>{const l=Gr("internal-error");l.customData=s,n(l)},a.type="text/javascript",a.charset="UTF-8",BI().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jI("Browser");var mx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ra,gE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,A){function I(){}I.prototype=A.prototype,D.D=A.prototype,D.prototype=new I,D.prototype.constructor=D,D.C=function(j,U,H){for(var M=Array(arguments.length-2),et=2;et<arguments.length;et++)M[et-2]=arguments[et];return A.prototype[U].apply(j,M)}}function n(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(a,n),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(D,A,I){I||(I=0);var j=Array(16);if(typeof A=="string")for(var U=0;16>U;++U)j[U]=A.charCodeAt(I++)|A.charCodeAt(I++)<<8|A.charCodeAt(I++)<<16|A.charCodeAt(I++)<<24;else for(U=0;16>U;++U)j[U]=A[I++]|A[I++]<<8|A[I++]<<16|A[I++]<<24;A=D.g[0],I=D.g[1],U=D.g[2];var H=D.g[3],M=A+(H^I&(U^H))+j[0]+3614090360&4294967295;A=I+(M<<7&4294967295|M>>>25),M=H+(U^A&(I^U))+j[1]+3905402710&4294967295,H=A+(M<<12&4294967295|M>>>20),M=U+(I^H&(A^I))+j[2]+606105819&4294967295,U=H+(M<<17&4294967295|M>>>15),M=I+(A^U&(H^A))+j[3]+3250441966&4294967295,I=U+(M<<22&4294967295|M>>>10),M=A+(H^I&(U^H))+j[4]+4118548399&4294967295,A=I+(M<<7&4294967295|M>>>25),M=H+(U^A&(I^U))+j[5]+1200080426&4294967295,H=A+(M<<12&4294967295|M>>>20),M=U+(I^H&(A^I))+j[6]+2821735955&4294967295,U=H+(M<<17&4294967295|M>>>15),M=I+(A^U&(H^A))+j[7]+4249261313&4294967295,I=U+(M<<22&4294967295|M>>>10),M=A+(H^I&(U^H))+j[8]+1770035416&4294967295,A=I+(M<<7&4294967295|M>>>25),M=H+(U^A&(I^U))+j[9]+2336552879&4294967295,H=A+(M<<12&4294967295|M>>>20),M=U+(I^H&(A^I))+j[10]+4294925233&4294967295,U=H+(M<<17&4294967295|M>>>15),M=I+(A^U&(H^A))+j[11]+2304563134&4294967295,I=U+(M<<22&4294967295|M>>>10),M=A+(H^I&(U^H))+j[12]+1804603682&4294967295,A=I+(M<<7&4294967295|M>>>25),M=H+(U^A&(I^U))+j[13]+4254626195&4294967295,H=A+(M<<12&4294967295|M>>>20),M=U+(I^H&(A^I))+j[14]+2792965006&4294967295,U=H+(M<<17&4294967295|M>>>15),M=I+(A^U&(H^A))+j[15]+1236535329&4294967295,I=U+(M<<22&4294967295|M>>>10),M=A+(U^H&(I^U))+j[1]+4129170786&4294967295,A=I+(M<<5&4294967295|M>>>27),M=H+(I^U&(A^I))+j[6]+3225465664&4294967295,H=A+(M<<9&4294967295|M>>>23),M=U+(A^I&(H^A))+j[11]+643717713&4294967295,U=H+(M<<14&4294967295|M>>>18),M=I+(H^A&(U^H))+j[0]+3921069994&4294967295,I=U+(M<<20&4294967295|M>>>12),M=A+(U^H&(I^U))+j[5]+3593408605&4294967295,A=I+(M<<5&4294967295|M>>>27),M=H+(I^U&(A^I))+j[10]+38016083&4294967295,H=A+(M<<9&4294967295|M>>>23),M=U+(A^I&(H^A))+j[15]+3634488961&4294967295,U=H+(M<<14&4294967295|M>>>18),M=I+(H^A&(U^H))+j[4]+3889429448&4294967295,I=U+(M<<20&4294967295|M>>>12),M=A+(U^H&(I^U))+j[9]+568446438&4294967295,A=I+(M<<5&4294967295|M>>>27),M=H+(I^U&(A^I))+j[14]+3275163606&4294967295,H=A+(M<<9&4294967295|M>>>23),M=U+(A^I&(H^A))+j[3]+4107603335&4294967295,U=H+(M<<14&4294967295|M>>>18),M=I+(H^A&(U^H))+j[8]+1163531501&4294967295,I=U+(M<<20&4294967295|M>>>12),M=A+(U^H&(I^U))+j[13]+2850285829&4294967295,A=I+(M<<5&4294967295|M>>>27),M=H+(I^U&(A^I))+j[2]+4243563512&4294967295,H=A+(M<<9&4294967295|M>>>23),M=U+(A^I&(H^A))+j[7]+1735328473&4294967295,U=H+(M<<14&4294967295|M>>>18),M=I+(H^A&(U^H))+j[12]+2368359562&4294967295,I=U+(M<<20&4294967295|M>>>12),M=A+(I^U^H)+j[5]+4294588738&4294967295,A=I+(M<<4&4294967295|M>>>28),M=H+(A^I^U)+j[8]+2272392833&4294967295,H=A+(M<<11&4294967295|M>>>21),M=U+(H^A^I)+j[11]+1839030562&4294967295,U=H+(M<<16&4294967295|M>>>16),M=I+(U^H^A)+j[14]+4259657740&4294967295,I=U+(M<<23&4294967295|M>>>9),M=A+(I^U^H)+j[1]+2763975236&4294967295,A=I+(M<<4&4294967295|M>>>28),M=H+(A^I^U)+j[4]+1272893353&4294967295,H=A+(M<<11&4294967295|M>>>21),M=U+(H^A^I)+j[7]+4139469664&4294967295,U=H+(M<<16&4294967295|M>>>16),M=I+(U^H^A)+j[10]+3200236656&4294967295,I=U+(M<<23&4294967295|M>>>9),M=A+(I^U^H)+j[13]+681279174&4294967295,A=I+(M<<4&4294967295|M>>>28),M=H+(A^I^U)+j[0]+3936430074&4294967295,H=A+(M<<11&4294967295|M>>>21),M=U+(H^A^I)+j[3]+3572445317&4294967295,U=H+(M<<16&4294967295|M>>>16),M=I+(U^H^A)+j[6]+76029189&4294967295,I=U+(M<<23&4294967295|M>>>9),M=A+(I^U^H)+j[9]+3654602809&4294967295,A=I+(M<<4&4294967295|M>>>28),M=H+(A^I^U)+j[12]+3873151461&4294967295,H=A+(M<<11&4294967295|M>>>21),M=U+(H^A^I)+j[15]+530742520&4294967295,U=H+(M<<16&4294967295|M>>>16),M=I+(U^H^A)+j[2]+3299628645&4294967295,I=U+(M<<23&4294967295|M>>>9),M=A+(U^(I|~H))+j[0]+4096336452&4294967295,A=I+(M<<6&4294967295|M>>>26),M=H+(I^(A|~U))+j[7]+1126891415&4294967295,H=A+(M<<10&4294967295|M>>>22),M=U+(A^(H|~I))+j[14]+2878612391&4294967295,U=H+(M<<15&4294967295|M>>>17),M=I+(H^(U|~A))+j[5]+4237533241&4294967295,I=U+(M<<21&4294967295|M>>>11),M=A+(U^(I|~H))+j[12]+1700485571&4294967295,A=I+(M<<6&4294967295|M>>>26),M=H+(I^(A|~U))+j[3]+2399980690&4294967295,H=A+(M<<10&4294967295|M>>>22),M=U+(A^(H|~I))+j[10]+4293915773&4294967295,U=H+(M<<15&4294967295|M>>>17),M=I+(H^(U|~A))+j[1]+2240044497&4294967295,I=U+(M<<21&4294967295|M>>>11),M=A+(U^(I|~H))+j[8]+1873313359&4294967295,A=I+(M<<6&4294967295|M>>>26),M=H+(I^(A|~U))+j[15]+4264355552&4294967295,H=A+(M<<10&4294967295|M>>>22),M=U+(A^(H|~I))+j[6]+2734768916&4294967295,U=H+(M<<15&4294967295|M>>>17),M=I+(H^(U|~A))+j[13]+1309151649&4294967295,I=U+(M<<21&4294967295|M>>>11),M=A+(U^(I|~H))+j[4]+4149444226&4294967295,A=I+(M<<6&4294967295|M>>>26),M=H+(I^(A|~U))+j[11]+3174756917&4294967295,H=A+(M<<10&4294967295|M>>>22),M=U+(A^(H|~I))+j[2]+718787259&4294967295,U=H+(M<<15&4294967295|M>>>17),M=I+(H^(U|~A))+j[9]+3951481745&4294967295,D.g[0]=D.g[0]+A&4294967295,D.g[1]=D.g[1]+(U+(M<<21&4294967295|M>>>11))&4294967295,D.g[2]=D.g[2]+U&4294967295,D.g[3]=D.g[3]+H&4294967295}a.prototype.u=function(D,A){A===void 0&&(A=D.length);for(var I=A-this.blockSize,j=this.B,U=this.h,H=0;H<A;){if(U==0)for(;H<=I;)s(this,D,H),H+=this.blockSize;if(typeof D=="string"){for(;H<A;)if(j[U++]=D.charCodeAt(H++),U==this.blockSize){s(this,j),U=0;break}}else for(;H<A;)if(j[U++]=D[H++],U==this.blockSize){s(this,j),U=0;break}}this.h=U,this.o+=A},a.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var A=1;A<D.length-8;++A)D[A]=0;var I=8*this.o;for(A=D.length-8;A<D.length;++A)D[A]=I&255,I/=256;for(this.u(D),D=Array(16),A=I=0;4>A;++A)for(var j=0;32>j;j+=8)D[I++]=this.g[A]>>>j&255;return D};function l(D,A){var I=d;return Object.prototype.hasOwnProperty.call(I,D)?I[D]:I[D]=A(D)}function h(D,A){this.h=A;for(var I=[],j=!0,U=D.length-1;0<=U;U--){var H=D[U]|0;j&&H==A||(I[U]=H,j=!1)}this.g=I}var d={};function g(D){return-128<=D&&128>D?l(D,function(A){return new h([A|0],0>A?-1:0)}):new h([D|0],0>D?-1:0)}function m(D){if(isNaN(D)||!isFinite(D))return E;if(0>D)return k(m(-D));for(var A=[],I=1,j=0;D>=I;j++)A[j]=D/I|0,I*=4294967296;return new h(A,0)}function _(D,A){if(D.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(D.charAt(0)=="-")return k(_(D.substring(1),A));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=m(Math.pow(A,8)),j=E,U=0;U<D.length;U+=8){var H=Math.min(8,D.length-U),M=parseInt(D.substring(U,U+H),A);8>H?(H=m(Math.pow(A,H)),j=j.j(H).add(m(M))):(j=j.j(I),j=j.add(m(M)))}return j}var E=g(0),b=g(1),C=g(16777216);t=h.prototype,t.m=function(){if(z(this))return-k(this).m();for(var D=0,A=1,I=0;I<this.g.length;I++){var j=this.i(I);D+=(0<=j?j:4294967296+j)*A,A*=4294967296}return D},t.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(O(this))return"0";if(z(this))return"-"+k(this).toString(D);for(var A=m(Math.pow(D,6)),I=this,j="";;){var U=J(I,A).g;I=V(I,U.j(A));var H=((0<I.g.length?I.g[0]:I.h)>>>0).toString(D);if(I=U,O(I))return H+j;for(;6>H.length;)H="0"+H;j=H+j}},t.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function O(D){if(D.h!=0)return!1;for(var A=0;A<D.g.length;A++)if(D.g[A]!=0)return!1;return!0}function z(D){return D.h==-1}t.l=function(D){return D=V(this,D),z(D)?-1:O(D)?0:1};function k(D){for(var A=D.g.length,I=[],j=0;j<A;j++)I[j]=~D.g[j];return new h(I,~D.h).add(b)}t.abs=function(){return z(this)?k(this):this},t.add=function(D){for(var A=Math.max(this.g.length,D.g.length),I=[],j=0,U=0;U<=A;U++){var H=j+(this.i(U)&65535)+(D.i(U)&65535),M=(H>>>16)+(this.i(U)>>>16)+(D.i(U)>>>16);j=M>>>16,H&=65535,M&=65535,I[U]=M<<16|H}return new h(I,I[I.length-1]&-2147483648?-1:0)};function V(D,A){return D.add(k(A))}t.j=function(D){if(O(this)||O(D))return E;if(z(this))return z(D)?k(this).j(k(D)):k(k(this).j(D));if(z(D))return k(this.j(k(D)));if(0>this.l(C)&&0>D.l(C))return m(this.m()*D.m());for(var A=this.g.length+D.g.length,I=[],j=0;j<2*A;j++)I[j]=0;for(j=0;j<this.g.length;j++)for(var U=0;U<D.g.length;U++){var H=this.i(j)>>>16,M=this.i(j)&65535,et=D.i(U)>>>16,Xe=D.i(U)&65535;I[2*j+2*U]+=M*Xe,B(I,2*j+2*U),I[2*j+2*U+1]+=H*Xe,B(I,2*j+2*U+1),I[2*j+2*U+1]+=M*et,B(I,2*j+2*U+1),I[2*j+2*U+2]+=H*et,B(I,2*j+2*U+2)}for(j=0;j<A;j++)I[j]=I[2*j+1]<<16|I[2*j];for(j=A;j<2*A;j++)I[j]=0;return new h(I,0)};function B(D,A){for(;(D[A]&65535)!=D[A];)D[A+1]+=D[A]>>>16,D[A]&=65535,A++}function K(D,A){this.g=D,this.h=A}function J(D,A){if(O(A))throw Error("division by zero");if(O(D))return new K(E,E);if(z(D))return A=J(k(D),A),new K(k(A.g),k(A.h));if(z(A))return A=J(D,k(A)),new K(k(A.g),A.h);if(30<D.g.length){if(z(D)||z(A))throw Error("slowDivide_ only works with positive integers.");for(var I=b,j=A;0>=j.l(D);)I=re(I),j=re(j);var U=ce(I,1),H=ce(j,1);for(j=ce(j,2),I=ce(I,2);!O(j);){var M=H.add(j);0>=M.l(D)&&(U=U.add(I),H=M),j=ce(j,1),I=ce(I,1)}return A=V(D,U.j(A)),new K(U,A)}for(U=E;0<=D.l(A);){for(I=Math.max(1,Math.floor(D.m()/A.m())),j=Math.ceil(Math.log(I)/Math.LN2),j=48>=j?1:Math.pow(2,j-48),H=m(I),M=H.j(A);z(M)||0<M.l(D);)I-=j,H=m(I),M=H.j(A);O(H)&&(H=b),U=U.add(H),D=V(D,M)}return new K(U,D)}t.A=function(D){return J(this,D).h},t.and=function(D){for(var A=Math.max(this.g.length,D.g.length),I=[],j=0;j<A;j++)I[j]=this.i(j)&D.i(j);return new h(I,this.h&D.h)},t.or=function(D){for(var A=Math.max(this.g.length,D.g.length),I=[],j=0;j<A;j++)I[j]=this.i(j)|D.i(j);return new h(I,this.h|D.h)},t.xor=function(D){for(var A=Math.max(this.g.length,D.g.length),I=[],j=0;j<A;j++)I[j]=this.i(j)^D.i(j);return new h(I,this.h^D.h)};function re(D){for(var A=D.g.length+1,I=[],j=0;j<A;j++)I[j]=D.i(j)<<1|D.i(j-1)>>>31;return new h(I,D.h)}function ce(D,A){var I=A>>5;A%=32;for(var j=D.g.length-I,U=[],H=0;H<j;H++)U[H]=0<A?D.i(H+I)>>>A|D.i(H+I+1)<<32-A:D.i(H+I);return new h(U,D.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,gE=a,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=m,h.fromString=_,Ra=h}).apply(typeof mx<"u"?mx:typeof self<"u"?self:typeof window<"u"?window:{});var Mh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mE,xu,yE,Zh,om,vE,_E,xE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,x){return c==Array.prototype||c==Object.prototype||(c[y]=x.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mh=="object"&&Mh];for(var y=0;y<c.length;++y){var x=c[y];if(x&&x.Math==Math)return x}throw Error("Cannot find global object")}var a=n(this);function s(c,y){if(y)e:{var x=a;c=c.split(".");for(var S=0;S<c.length-1;S++){var $=c[S];if(!($ in x))break e;x=x[$]}c=c[c.length-1],S=x[c],y=y(S),y!=S&&y!=null&&e(x,c,{configurable:!0,writable:!0,value:y})}}function l(c,y){c instanceof String&&(c+="");var x=0,S=!1,$={next:function(){if(!S&&x<c.length){var Z=x++;return{value:y(Z,c[Z]),done:!1}}return S=!0,{done:!0,value:void 0}}};return $[Symbol.iterator]=function(){return $},$}s("Array.prototype.values",function(c){return c||function(){return l(this,function(y,x){return x})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},d=this||self;function g(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function m(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function _(c,y,x){return c.call.apply(c.bind,arguments)}function E(c,y,x){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var $=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply($,S),c.apply(y,$)}}return function(){return c.apply(y,arguments)}}function b(c,y,x){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:E,b.apply(null,arguments)}function C(c,y){var x=Array.prototype.slice.call(arguments,1);return function(){var S=x.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function O(c,y){function x(){}x.prototype=y.prototype,c.aa=y.prototype,c.prototype=new x,c.prototype.constructor=c,c.Qb=function(S,$,Z){for(var fe=Array(arguments.length-2),He=2;He<arguments.length;He++)fe[He-2]=arguments[He];return y.prototype[$].apply(S,fe)}}function z(c){const y=c.length;if(0<y){const x=Array(y);for(let S=0;S<y;S++)x[S]=c[S];return x}return[]}function k(c,y){for(let x=1;x<arguments.length;x++){const S=arguments[x];if(g(S)){const $=c.length||0,Z=S.length||0;c.length=$+Z;for(let fe=0;fe<Z;fe++)c[$+fe]=S[fe]}else c.push(S)}}class V{constructor(y,x){this.i=y,this.j=x,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function B(c){return/^[\s\xa0]*$/.test(c)}function K(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function J(c){return J[" "](c),c}J[" "]=function(){};var re=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function ce(c,y,x){for(const S in c)y.call(x,c[S],S,c)}function D(c,y){for(const x in c)y.call(void 0,c[x],x,c)}function A(c){const y={};for(const x in c)y[x]=c[x];return y}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(c,y){let x,S;for(let $=1;$<arguments.length;$++){S=arguments[$];for(x in S)c[x]=S[x];for(let Z=0;Z<I.length;Z++)x=I[Z],Object.prototype.hasOwnProperty.call(S,x)&&(c[x]=S[x])}}function U(c){var y=1;c=c.split(":");const x=[];for(;0<y&&c.length;)x.push(c.shift()),y--;return c.length&&x.push(c.join(":")),x}function H(c){d.setTimeout(()=>{throw c},0)}function M(){var c=me;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class et{constructor(){this.h=this.g=null}add(y,x){const S=Xe.get();S.set(y,x),this.h?this.h.next=S:this.g=S,this.h=S}}var Xe=new V(()=>new W,c=>c.reset());class W{constructor(){this.next=this.g=this.h=null}set(y,x){this.h=y,this.g=x,this.next=null}reset(){this.next=this.g=this.h=null}}let he,le=!1,me=new et,P=()=>{const c=d.Promise.resolve(void 0);he=()=>{c.then(te)}};var te=()=>{for(var c;c=M();){try{c.h.call(c.g)}catch(x){H(x)}var y=Xe;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}le=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var pe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const x=()=>{};d.addEventListener("test",x,y),d.removeEventListener("test",x,y)}catch{}return c}();function Ee(c,y){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var x=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(re){e:{try{J(y.nodeName);var $=!0;break e}catch{}$=!1}$||(y=null)}}else x=="mouseover"?y=c.fromElement:x=="mouseout"&&(y=c.toElement);this.relatedTarget=y,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:ye[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ee.aa.h.call(this)}}O(Ee,se);var ye={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var tt="closure_listenable_"+(1e6*Math.random()|0),Pe=0;function lt(c,y,x,S,$){this.listener=c,this.proxy=null,this.src=y,this.type=x,this.capture=!!S,this.ha=$,this.key=++Pe,this.da=this.fa=!1}function pn(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Gt(c){this.src=c,this.g={},this.h=0}Gt.prototype.add=function(c,y,x,S,$){var Z=c.toString();c=this.g[Z],c||(c=this.g[Z]=[],this.h++);var fe=ur(c,y,S,$);return-1<fe?(y=c[fe],x||(y.fa=!1)):(y=new lt(y,this.src,Z,!!S,$),y.fa=x,c.push(y)),y};function At(c,y){var x=y.type;if(x in c.g){var S=c.g[x],$=Array.prototype.indexOf.call(S,y,void 0),Z;(Z=0<=$)&&Array.prototype.splice.call(S,$,1),Z&&(pn(y),c.g[x].length==0&&(delete c.g[x],c.h--))}}function ur(c,y,x,S){for(var $=0;$<c.length;++$){var Z=c[$];if(!Z.da&&Z.listener==y&&Z.capture==!!x&&Z.ha==S)return $}return-1}var ut="closure_lm_"+(1e6*Math.random()|0),cr={};function Jt(c,y,x,S,$){if(Array.isArray(y)){for(var Z=0;Z<y.length;Z++)Jt(c,y[Z],x,S,$);return null}return x=Vs(x),c&&c[tt]?c.K(y,x,m(S)?!!S.capture:!1,$):en(c,y,x,!1,S,$)}function en(c,y,x,S,$,Z){if(!y)throw Error("Invalid event type");var fe=m($)?!!$.capture:!!$,He=ri(c);if(He||(c[ut]=He=new Gt(c)),x=He.add(y,x,S,fe,Z),x.proxy)return x;if(S=js(),x.proxy=S,S.src=c,S.listener=x,c.addEventListener)pe||($=fe),$===void 0&&($=!1),c.addEventListener(y.toString(),S,$);else if(c.attachEvent)c.attachEvent(ni(y.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return x}function js(){function c(x){return y.call(c.src,c.listener,x)}const y=ml;return c}function Gi(c,y,x,S,$){if(Array.isArray(y))for(var Z=0;Z<y.length;Z++)Gi(c,y[Z],x,S,$);else S=m(S)?!!S.capture:!!S,x=Vs(x),c&&c[tt]?(c=c.i,y=String(y).toString(),y in c.g&&(Z=c.g[y],x=ur(Z,x,S,$),-1<x&&(pn(Z[x]),Array.prototype.splice.call(Z,x,1),Z.length==0&&(delete c.g[y],c.h--)))):c&&(c=ri(c))&&(y=c.g[y.toString()],c=-1,y&&(c=ur(y,x,S,$)),(x=-1<c?y[c]:null)&&$i(x))}function $i(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[tt])At(y.i,c);else{var x=c.type,S=c.proxy;y.removeEventListener?y.removeEventListener(x,S,c.capture):y.detachEvent?y.detachEvent(ni(x),S):y.addListener&&y.removeListener&&y.removeListener(S),(x=ri(y))?(At(x,c),x.h==0&&(x.src=null,y[ut]=null)):pn(c)}}}function ni(c){return c in cr?cr[c]:cr[c]="on"+c}function ml(c,y){if(c.da)c=!0;else{y=new Ee(y,this);var x=c.listener,S=c.ha||c.src;c.fa&&$i(c),c=x.call(S,y)}return c}function ri(c){return c=c[ut],c instanceof Gt?c:null}var Ha="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vs(c){return typeof c=="function"?c:(c[Ha]||(c[Ha]=function(y){return c.handleEvent(y)}),c[Ha])}function gt(){ue.call(this),this.i=new Gt(this),this.M=this,this.F=null}O(gt,ue),gt.prototype[tt]=!0,gt.prototype.removeEventListener=function(c,y,x,S){Gi(this,c,y,x,S)};function Ke(c,y){var x,S=c.F;if(S)for(x=[];S;S=S.F)x.push(S);if(c=c.M,S=y.type||y,typeof y=="string")y=new se(y,c);else if(y instanceof se)y.target=y.target||c;else{var $=y;y=new se(S,c),j(y,$)}if($=!0,x)for(var Z=x.length-1;0<=Z;Z--){var fe=y.g=x[Z];$=bn(fe,S,!0,y)&&$}if(fe=y.g=c,$=bn(fe,S,!0,y)&&$,$=bn(fe,S,!1,y)&&$,x)for(Z=0;Z<x.length;Z++)fe=y.g=x[Z],$=bn(fe,S,!1,y)&&$}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var x=c.g[y],S=0;S<x.length;S++)pn(x[S]);delete c.g[y],c.h--}}this.F=null},gt.prototype.K=function(c,y,x,S){return this.i.add(String(c),y,!1,x,S)},gt.prototype.L=function(c,y,x,S){return this.i.add(String(c),y,!0,x,S)};function bn(c,y,x,S){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var $=!0,Z=0;Z<y.length;++Z){var fe=y[Z];if(fe&&!fe.da&&fe.capture==x){var He=fe.listener,Vt=fe.ha||fe.src;fe.fa&&At(c.i,fe),$=He.call(Vt,S)!==!1&&$}}return $&&!S.defaultPrevented}function Dt(c,y,x){if(typeof c=="function")x&&(c=b(c,x));else if(c&&typeof c.handleEvent=="function")c=b(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(c,y||0)}function Fa(c){c.g=Dt(()=>{c.g=null,c.i&&(c.i=!1,Fa(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class Ls extends ue{constructor(y,x){super(),this.m=y,this.l=x,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Fa(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ii(c){ue.call(this),this.h=c,this.g={}}O(ii,ue);var Yn=[];function br(c){ce(c.g,function(y,x){this.g.hasOwnProperty(x)&&$i(y)},c),c.g={}}ii.prototype.N=function(){ii.aa.N.call(this),br(this)},ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jn=d.JSON.stringify,ai=d.JSON.parse,Er=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function si(){}si.prototype.h=null;function Ga(c){return c.h||(c.h=c.i())}function qi(){}var hr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){se.call(this,"d")}O(Kn,se);function Ot(){se.call(this,"c")}O(Ot,se);var dt={},Tr=null;function qe(){return Tr=Tr||new gt}dt.La="serverreachability";function tn(c){se.call(this,dt.La,c)}O(tn,se);function Sr(c){const y=qe();Ke(y,new tn(y))}dt.STAT_EVENT="statevent";function Yi(c,y){se.call(this,dt.STAT_EVENT,c),this.stat=y}O(Yi,se);function ct(c){const y=qe();Ke(y,new Yi(y,c))}dt.Ma="timingevent";function Et(c,y){se.call(this,dt.Ma,c),this.size=y}O(Et,se);function mt(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},y)}function nn(){this.g=!0}nn.prototype.xa=function(){this.g=!1};function oi(c,y,x,S,$,Z){c.info(function(){if(c.g)if(Z)for(var fe="",He=Z.split("&"),Vt=0;Vt<He.length;Vt++){var Fe=He[Vt].split("=");if(1<Fe.length){var Yt=Fe[0];Fe=Fe[1];var Lt=Yt.split("_");fe=2<=Lt.length&&Lt[1]=="type"?fe+(Yt+"="+Fe+"&"):fe+(Yt+"=redacted&")}}else fe=null;else fe=Z;return"XMLHTTP REQ ("+S+") [attempt "+$+"]: "+y+`
`+x+`
`+fe})}function $a(c,y,x,S,$,Z,fe){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+$+"]: "+y+`
`+x+`
`+Z+" "+fe})}function Qn(c,y,x,S){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+fr(c,x)+(S?" "+S:"")})}function Us(c,y){c.info(function(){return"TIMEOUT: "+y})}nn.prototype.info=function(){};function fr(c,y){if(!c.g)return y;if(!y)return null;try{var x=JSON.parse(y);if(x){for(c=0;c<x.length;c++)if(Array.isArray(x[c])){var S=x[c];if(!(2>S.length)){var $=S[1];if(Array.isArray($)&&!(1>$.length)){var Z=$[0];if(Z!="noop"&&Z!="stop"&&Z!="close")for(var fe=1;fe<$.length;fe++)$[fe]=""}}}}return jn(x)}catch{return y}}var dr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xn;function Ae(){}O(Ae,si),Ae.prototype.g=function(){return new XMLHttpRequest},Ae.prototype.i=function(){return{}},Xn=new Ae;function je(c,y,x,S){this.j=c,this.i=y,this.l=x,this.R=S||1,this.U=new ii(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new De}function De(){this.i=null,this.g="",this.h=!1}var rn={},$t={};function En(c,y,x){c.L=1,c.v=Xa(Vn(y)),c.m=x,c.P=!0,gr(c,null)}function gr(c,y){c.F=Date.now(),qa(c),c.A=Vn(c.v);var x=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),bl(x.i,"t",S),c.C=0,x=c.j.J,c.h=new De,c.g=Ac(c.j,x?y:null,!c.m),0<c.O&&(c.M=new Ls(b(c.Y,c,c.g),c.O)),y=c.U,x=c.g,S=c.ca;var $="readystatechange";Array.isArray($)||($&&(Yn[0]=$.toString()),$=Yn);for(var Z=0;Z<$.length;Z++){var fe=Jt(x,$[Z],S||y.handleEvent,!1,y.h||y);if(!fe)break;y.g[fe.key]=fe}y=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),Sr(),oi(c.i,c.u,c.A,c.l,c.R,c.m)}je.prototype.ca=function(c){c=c.target;const y=this.M;y&&er(c)==3?y.j():this.Y(c)},je.prototype.Y=function(c){try{if(c==this.g)e:{const Lt=er(this.g);var y=this.g.Ba();const gi=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||vc(this.g)))){this.J||Lt!=4||y==7||(y==8||0>=gi?Sr(3):Sr(2)),Ki(this);var x=this.g.Z();this.X=x;t:if(zs(this)){var S=vc(this.g);c="";var $=S.length,Z=er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),Ar(this);var fe="";break t}this.h.i=new d.TextDecoder}for(y=0;y<$;y++)this.h.h=!0,c+=this.h.i.decode(S[y],{stream:!(Z&&y==$-1)});S.length=0,this.h.g+=c,this.C=0,fe=this.h.g}else fe=this.g.oa();if(this.o=x==200,$a(this.i,this.u,this.A,this.l,this.R,Lt,x),this.o){if(this.T&&!this.K){t:{if(this.g){var He,Vt=this.g;if((He=Vt.g?Vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(He)){var Fe=He;break t}}Fe=null}if(x=Fe)Qn(this.i,this.l,x,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ya(this,x);else{this.o=!1,this.s=3,ct(12),an(this),Ar(this);break e}}if(this.P){x=!0;let sn;for(;!this.J&&this.C<fe.length;)if(sn=fc(this,fe),sn==$t){Lt==4&&(this.s=4,ct(14),x=!1),Qn(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==rn){this.s=4,ct(15),Qn(this.i,this.l,fe,"[Invalid Chunk]"),x=!1;break}else Qn(this.i,this.l,sn,null),Ya(this,sn);if(zs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||fe.length!=0||this.h.h||(this.s=1,ct(16),x=!1),this.o=this.o&&x,!x)Qn(this.i,this.l,fe,"[Invalid Chunked Response]"),an(this),Ar(this);else if(0<fe.length&&!this.W){this.W=!0;var Yt=this.j;Yt.g==this&&Yt.ba&&!Yt.M&&(Yt.j.info("Great, no buffering proxy detected. Bytes received: "+fe.length),is(Yt),Yt.M=!0,ct(11))}}else Qn(this.i,this.l,fe,null),Ya(this,fe);Lt==4&&an(this),this.o&&!this.J&&(Lt==4?Ec(this.j,this):(this.o=!1,qa(this)))}else vd(this.g),x==400&&0<fe.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),an(this),Ar(this)}}}catch{}finally{}};function zs(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function fc(c,y){var x=c.C,S=y.indexOf(`
`,x);return S==-1?$t:(x=Number(y.substring(x,S)),isNaN(x)?rn:(S+=1,S+x>y.length?$t:(y=y.slice(S,S+x),c.C=S+x,y)))}je.prototype.cancel=function(){this.J=!0,an(this)};function qa(c){c.S=Date.now()+c.I,dc(c,c.I)}function dc(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=mt(b(c.ba,c),y)}function Ki(c){c.B&&(d.clearTimeout(c.B),c.B=null)}je.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Us(this.i,this.A),this.L!=2&&(Sr(),ct(17)),an(this),this.s=2,Ar(this)):dc(this,this.S-c)};function Ar(c){c.j.G==0||c.J||Ec(c.j,c)}function an(c){Ki(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,br(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function Ya(c,y){try{var x=c.j;if(x.G!=0&&(x.g==c||yl(x.h,c))){if(!c.K&&yl(x.h,c)&&x.G==3){try{var S=x.Da.g.parse(y)}catch{S=null}if(Array.isArray(S)&&S.length==3){var $=S;if($[0]==0){e:if(!x.u){if(x.g)if(x.g.F+3e3<c.F)Zs(x),Xs(x);else break e;Cl(x),ct(18)}}else x.za=$[1],0<x.za-x.T&&37500>$[2]&&x.F&&x.v==0&&!x.C&&(x.C=mt(b(x.Za,x),6e3));if(1>=Hs(x.h)&&x.ca){try{x.ca()}catch{}x.ca=void 0}}else pi(x,11)}else if((c.K||x.g==c)&&Zs(x),!B(y))for($=x.Da.g.parse(y),y=0;y<$.length;y++){let Fe=$[y];if(x.T=Fe[0],Fe=Fe[1],x.G==2)if(Fe[0]=="c"){x.K=Fe[1],x.ia=Fe[2];const Yt=Fe[3];Yt!=null&&(x.la=Yt,x.j.info("VER="+x.la));const Lt=Fe[4];Lt!=null&&(x.Aa=Lt,x.j.info("SVER="+x.Aa));const gi=Fe[5];gi!=null&&typeof gi=="number"&&0<gi&&(S=1.5*gi,x.L=S,x.j.info("backChannelRequestTimeoutMs_="+S)),S=x;const sn=c.g;if(sn){const Nr=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nr){var Z=S.h;Z.g||Nr.indexOf("spdy")==-1&&Nr.indexOf("quic")==-1&&Nr.indexOf("h2")==-1||(Z.j=Z.l,Z.g=new Set,Z.h&&(Fs(Z,Z.h),Z.h=null))}if(S.D){const Il=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Il&&(S.ya=Il,it(S.I,S.D,Il))}}x.G=3,x.l&&x.l.ua(),x.ba&&(x.R=Date.now()-c.F,x.j.info("Handshake RTT: "+x.R+"ms")),S=x;var fe=c;if(S.qa=Sc(S,S.J?S.ia:null,S.W),fe.K){Tn(S.h,fe);var He=fe,Vt=S.L;Vt&&(He.I=Vt),He.B&&(Ki(He),qa(He)),S.g=fe}else wc(S);0<x.i.length&&Ws(x)}else Fe[0]!="stop"&&Fe[0]!="close"||pi(x,7);else x.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?pi(x,7):Sl(x):Fe[0]!="noop"&&x.l&&x.l.ta(Fe),x.v=0)}}Sr(4)}catch{}}var pc=class{constructor(c,y){this.g=c,this.map=y}};function li(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bs(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Hs(c){return c.h?1:c.g?c.g.size:0}function yl(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Fs(c,y){c.g?c.g.add(y):c.h=y}function Tn(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}li.prototype.cancel=function(){if(this.i=vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function vl(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const x of c.g.values())y=y.concat(x.D);return y}return z(c.i)}function pd(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var y=[],x=c.length,S=0;S<x;S++)y.push(c[S]);return y}y=[],x=0;for(S in c)y[x++]=c[S];return y}function Gs(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var y=[];c=c.length;for(var x=0;x<c;x++)y.push(x);return y}y=[],x=0;for(const S in c)y[x++]=S;return y}}}function _l(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var x=Gs(c),S=pd(c),$=S.length,Z=0;Z<$;Z++)y.call(void 0,S[Z],x&&x[Z],c)}var Ka=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gd(c,y){if(c){c=c.split("&");for(var x=0;x<c.length;x++){var S=c[x].indexOf("="),$=null;if(0<=S){var Z=c[x].substring(0,S);$=c[x].substring(S+1)}else Z=c[x];y(Z,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function kt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof kt){this.h=c.h,Qa(this,c.j),this.o=c.o,this.g=c.g,Qi(this,c.s),this.l=c.l;var y=c.i,x=new ci;x.i=y.i,y.g&&(x.g=new Map(y.g),x.h=y.h),ui(this,x),this.m=c.m}else c&&(y=String(c).match(Ka))?(this.h=!1,Qa(this,y[1]||"",!0),this.o=Wn(y[2]||""),this.g=Wn(y[3]||"",!0),Qi(this,y[4]),this.l=Wn(y[5]||"",!0),ui(this,y[6]||"",!0),this.m=Wn(y[7]||"")):(this.h=!1,this.i=new ci(null,this.h))}kt.prototype.toString=function(){var c=[],y=this.j;y&&c.push(Wa(y,xl,!0),":");var x=this.g;return(x||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Wa(y,xl,!0),"@"),c.push(encodeURIComponent(String(x)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),x=this.s,x!=null&&c.push(":",String(x))),(x=this.l)&&(this.g&&x.charAt(0)!="/"&&c.push("/"),c.push(Wa(x,x.charAt(0)=="/"?md:wl,!0))),(x=this.i.toString())&&c.push("?",x),(x=this.m)&&c.push("#",Wa(x,$s)),c.join("")};function Vn(c){return new kt(c)}function Qa(c,y,x){c.j=x?Wn(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Qi(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function ui(c,y,x){y instanceof ci?(c.i=y,mc(c.i,c.h)):(x||(y=Wa(y,yd)),c.i=new ci(y,c.h))}function it(c,y,x){c.i.set(y,x)}function Xa(c){return it(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Wn(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Wa(c,y,x){return typeof c=="string"?(c=encodeURI(c).replace(y,gc),x&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function gc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var xl=/[#\/\?@]/g,wl=/[#\?:]/g,md=/[#\?]/g,yd=/[#\?@]/g,$s=/#/g;function ci(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Zn(c){c.g||(c.g=new Map,c.h=0,c.i&&gd(c.i,function(y,x){c.add(decodeURIComponent(y.replace(/\+/g," ")),x)}))}t=ci.prototype,t.add=function(c,y){Zn(this),this.i=null,c=Cr(this,c);var x=this.g.get(c);return x||this.g.set(c,x=[]),x.push(y),this.h+=1,this};function hi(c,y){Zn(c),y=Cr(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function fi(c,y){return Zn(c),y=Cr(c,y),c.g.has(y)}t.forEach=function(c,y){Zn(this),this.g.forEach(function(x,S){x.forEach(function($){c.call(y,$,S,this)},this)},this)},t.na=function(){Zn(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),x=[];for(let S=0;S<y.length;S++){const $=c[S];for(let Z=0;Z<$.length;Z++)x.push(y[S])}return x},t.V=function(c){Zn(this);let y=[];if(typeof c=="string")fi(this,c)&&(y=y.concat(this.g.get(Cr(this,c))));else{c=Array.from(this.g.values());for(let x=0;x<c.length;x++)y=y.concat(c[x])}return y},t.set=function(c,y){return Zn(this),this.i=null,c=Cr(this,c),fi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},t.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function bl(c,y,x){hi(c,y),0<x.length&&(c.i=null,c.g.set(Cr(c,y),z(x)),c.h+=x.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var x=0;x<y.length;x++){var S=y[x];const Z=encodeURIComponent(String(S)),fe=this.V(S);for(S=0;S<fe.length;S++){var $=Z;fe[S]!==""&&($+="="+encodeURIComponent(String(fe[S]))),c.push($)}}return this.i=c.join("&")};function Cr(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function mc(c,y){y&&!c.j&&(Zn(c),c.i=null,c.g.forEach(function(x,S){var $=S.toLowerCase();S!=$&&(hi(this,S),bl(this,$,x))},c)),c.j=y}function Za(c,y){const x=new nn;if(d.Image){const S=new Image;S.onload=C(Jn,x,"TestLoadImage: loaded",!0,y,S),S.onerror=C(Jn,x,"TestLoadImage: error",!1,y,S),S.onabort=C(Jn,x,"TestLoadImage: abort",!1,y,S),S.ontimeout=C(Jn,x,"TestLoadImage: timeout",!1,y,S),d.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else y(!1)}function mr(c,y){const x=new nn,S=new AbortController,$=setTimeout(()=>{S.abort(),Jn(x,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:S.signal}).then(Z=>{clearTimeout($),Z.ok?Jn(x,"TestPingServer: ok",!0,y):Jn(x,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout($),Jn(x,"TestPingServer: error",!1,y)})}function Jn(c,y,x,S,$){try{$&&($.onload=null,$.onerror=null,$.onabort=null,$.ontimeout=null),S(x)}catch{}}function Ja(){this.g=new Er}function Rr(c,y,x){const S=x||"";try{_l(c,function($,Z){let fe=$;m($)&&(fe=jn($)),y.push(S+Z+"="+encodeURIComponent(fe))})}catch($){throw y.push(S+"type="+encodeURIComponent("_badmap")),$}}function Xi(c){this.l=c.Ub||null,this.j=c.eb||!1}O(Xi,si),Xi.prototype.g=function(){return new di(this.l,this.j)},Xi.prototype.i=function(c){return function(){return c}}({});function di(c,y){gt.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(di,gt),t=di.prototype,t.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,Dr(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ir(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Dr(this)),this.g&&(this.readyState=3,Dr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;El(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function El(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?Ir(this):Dr(this),this.readyState==3&&El(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Ir(this))},t.Qa=function(c){this.g&&(this.response=c,Ir(this))},t.ga=function(){this.g&&Ir(this)};function Ir(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Dr(c)}t.setRequestHeader=function(c,y){this.u.append(c,y)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var x=y.next();!x.done;)x=x.value,c.push(x[0]+": "+x[1]),x=y.next();return c.join(`\r
`)};function Dr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Tl(c){let y="";return ce(c,function(x,S){y+=S,y+=":",y+=x,y+=`\r
`}),y}function qt(c,y,x){e:{for(S in x){var S=!1;break e}S=!0}S||(x=Tl(x),typeof c=="string"?x!=null&&encodeURIComponent(String(x)):it(c,y,x))}function We(c){gt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(We,gt);var qs=/^https?$/i,es=["POST","PUT"];t=We.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,y,x,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xn.g(),this.v=this.o?Ga(this.o):Ga(Xn),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(Z){yc(this,Z);return}if(c=x||"",x=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var $ in S)x.set($,S[$]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const Z of S.keys())x.set(Z,S.get(Z));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(x.keys()).find(Z=>Z.toLowerCase()=="content-type"),$=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(es,y,void 0))||S||$||x.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Z,fe]of x)this.g.setRequestHeader(Z,fe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ts(this),this.u=!0,this.g.send(c),this.u=!1}catch(Z){yc(this,Z)}};function yc(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,Ys(c),Or(c)}function Ys(c){c.A||(c.A=!0,Ke(c,"complete"),Ke(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ke(this,"complete"),Ke(this,"abort"),Or(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Or(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ks(this):this.bb())},t.bb=function(){Ks(this)};function Ks(c){if(c.h&&typeof h<"u"&&(!c.v[1]||er(c)!=4||c.Z()!=2)){if(c.u&&er(c)==4)Dt(c.Ea,0,c);else if(Ke(c,"readystatechange"),er(c)==4){c.h=!1;try{const fe=c.Z();e:switch(fe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var x;if(!(x=y)){var S;if(S=fe===0){var $=String(c.D).match(Ka)[1]||null;!$&&d.self&&d.self.location&&($=d.self.location.protocol.slice(0,-1)),S=!qs.test($?$.toLowerCase():"")}x=S}if(x)Ke(c,"complete"),Ke(c,"success");else{c.m=6;try{var Z=2<er(c)?c.g.statusText:""}catch{Z=""}c.l=Z+" ["+c.Z()+"]",Ys(c)}}finally{Or(c)}}}}function Or(c,y){if(c.g){ts(c);const x=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Ke(c,"ready");try{x.onreadystatechange=S}catch{}}}function ts(c){c.I&&(d.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function er(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<er(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),ai(y)}};function vc(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function vd(c){const y={};c=(c.g&&2<=er(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(B(c[S]))continue;var x=U(c[S]);const $=x[0];if(x=x[1],typeof x!="string")continue;x=x.trim();const Z=y[$]||[];y[$]=Z,Z.push(x)}D(y,function(S){return S.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ns(c,y,x){return x&&x.internalChannelParams&&x.internalChannelParams[c]||y}function Qs(c){this.Aa=0,this.i=[],this.j=new nn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ns("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ns("baseRetryDelayMs",5e3,c),this.cb=ns("retryDelaySeedMs",1e4,c),this.Wa=ns("forwardChannelMaxRetries",2,c),this.wa=ns("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new li(c&&c.concurrentRequestLimit),this.Da=new Ja,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qs.prototype,t.la=8,t.G=1,t.connect=function(c,y,x,S){ct(0),this.W=c,this.H=y||{},x&&S!==void 0&&(this.H.OSID=x,this.H.OAID=S),this.F=this.X,this.I=Sc(this,null,this.W),Ws(this)};function Sl(c){if(_c(c),c.G==3){var y=c.U++,x=Vn(c.I);if(it(x,"SID",c.K),it(x,"RID",y),it(x,"TYPE","terminate"),rs(c,x),y=new je(c,c.j,y),y.L=2,y.v=Xa(Vn(x)),x=!1,d.navigator&&d.navigator.sendBeacon)try{x=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!x&&d.Image&&(new Image().src=y.v,x=!0),x||(y.g=Ac(y.j,null),y.g.ea(y.v)),y.F=Date.now(),qa(y)}Tc(c)}function Xs(c){c.g&&(is(c),c.g.cancel(),c.g=null)}function _c(c){Xs(c),c.u&&(d.clearTimeout(c.u),c.u=null),Zs(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function Ws(c){if(!Bs(c.h)&&!c.s){c.s=!0;var y=c.Ga;he||P(),le||(he(),le=!0),me.add(y,c),c.B=0}}function _d(c,y){return Hs(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=mt(b(c.Ga,c,y),Rl(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const $=new je(this,this.j,c);let Z=this.o;if(this.S&&(Z?(Z=A(Z),j(Z,this.S)):Z=this.S),this.m!==null||this.O||($.H=Z,Z=null),this.P)e:{for(var y=0,x=0;x<this.i.length;x++){t:{var S=this.i[x];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(y+=S,4096<y){y=x;break e}if(y===4096||x===this.i.length-1){y=x+1;break e}}y=1e3}else y=1e3;y=xc(this,$,y),x=Vn(this.I),it(x,"RID",c),it(x,"CVER",22),this.D&&it(x,"X-HTTP-Session-Id",this.D),rs(this,x),Z&&(this.O?y="headers="+encodeURIComponent(String(Tl(Z)))+"&"+y:this.m&&qt(x,this.m,Z)),Fs(this.h,$),this.Ua&&it(x,"TYPE","init"),this.P?(it(x,"$req",y),it(x,"SID","null"),$.T=!0,En($,x,null)):En($,x,y),this.G=2}}else this.G==3&&(c?Al(this,c):this.i.length==0||Bs(this.h)||Al(this))};function Al(c,y){var x;y?x=y.l:x=c.U++;const S=Vn(c.I);it(S,"SID",c.K),it(S,"RID",x),it(S,"AID",c.T),rs(c,S),c.m&&c.o&&qt(S,c.m,c.o),x=new je(c,c.j,x,c.B+1),c.m===null&&(x.H=c.o),y&&(c.i=y.D.concat(c.i)),y=xc(c,x,1e3),x.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Fs(c.h,x),En(x,S,y)}function rs(c,y){c.H&&ce(c.H,function(x,S){it(y,S,x)}),c.l&&_l({},function(x,S){it(y,S,x)})}function xc(c,y,x){x=Math.min(c.i.length,x);var S=c.l?b(c.l.Na,c.l,c):null;e:{var $=c.i;let Z=-1;for(;;){const fe=["count="+x];Z==-1?0<x?(Z=$[0].g,fe.push("ofs="+Z)):Z=0:fe.push("ofs="+Z);let He=!0;for(let Vt=0;Vt<x;Vt++){let Fe=$[Vt].g;const Yt=$[Vt].map;if(Fe-=Z,0>Fe)Z=Math.max(0,$[Vt].g-100),He=!1;else try{Rr(Yt,fe,"req"+Fe+"_")}catch{S&&S(Yt)}}if(He){S=fe.join("&");break e}}}return c=c.i.splice(0,x),y.D=c,S}function wc(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;he||P(),le||(he(),le=!0),me.add(y,c),c.v=0}}function Cl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=mt(b(c.Fa,c),Rl(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,bc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=mt(b(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Xs(this),bc(this))};function is(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function bc(c){c.g=new je(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=Vn(c.qa);it(y,"RID","rpc"),it(y,"SID",c.K),it(y,"AID",c.T),it(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&it(y,"TO",c.ja),it(y,"TYPE","xmlhttp"),rs(c,y),c.m&&c.o&&qt(y,c.m,c.o),c.L&&(c.g.I=c.L);var x=c.g;c=c.ia,x.L=1,x.v=Xa(Vn(y)),x.m=null,x.P=!0,gr(x,c)}t.Za=function(){this.C!=null&&(this.C=null,Xs(this),Cl(this),ct(19))};function Zs(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Ec(c,y){var x=null;if(c.g==y){Zs(c),is(c),c.g=null;var S=2}else if(yl(c.h,y))x=y.D,Tn(c.h,y),S=1;else return;if(c.G!=0){if(y.o)if(S==1){x=y.m?y.m.length:0,y=Date.now()-y.F;var $=c.B;S=qe(),Ke(S,new Et(S,x)),Ws(c)}else wc(c);else if($=y.s,$==3||$==0&&0<y.X||!(S==1&&_d(c,y)||S==2&&Cl(c)))switch(x&&0<x.length&&(y=c.h,y.i=y.i.concat(x)),$){case 1:pi(c,5);break;case 4:pi(c,10);break;case 3:pi(c,6);break;default:pi(c,2)}}}function Rl(c,y){let x=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(x*=2),x*y}function pi(c,y){if(c.j.info("Error code "+y),y==2){var x=b(c.fb,c),S=c.Xa;const $=!S;S=new kt(S||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Qa(S,"https"),Xa(S),$?Za(S.toString(),x):mr(S.toString(),x)}else ct(2);c.G=0,c.l&&c.l.sa(y),Tc(c),_c(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Tc(c){if(c.G=0,c.ka=[],c.l){const y=vl(c.h);(y.length!=0||c.i.length!=0)&&(k(c.ka,y),k(c.ka,c.i),c.h.i.length=0,z(c.i),c.i.length=0),c.l.ra()}}function Sc(c,y,x){var S=x instanceof kt?Vn(x):new kt(x);if(S.g!="")y&&(S.g=y+"."+S.g),Qi(S,S.s);else{var $=d.location;S=$.protocol,y=y?y+"."+$.hostname:$.hostname,$=+$.port;var Z=new kt(null);S&&Qa(Z,S),y&&(Z.g=y),$&&Qi(Z,$),x&&(Z.l=x),S=Z}return x=c.D,y=c.ya,x&&y&&it(S,x,y),it(S,"VER",c.la),rs(c,S),S}function Ac(c,y,x){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new We(new Xi({eb:x})):new We(c.pa),y.Ha(c.J),y}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cc(){}t=Cc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Js(){}Js.prototype.g=function(c,y){return new Sn(c,y)};function Sn(c,y){gt.call(this),this.g=new Qs(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!B(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!B(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new kr(this)}O(Sn,gt),Sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Sn.prototype.close=function(){Sl(this.g)},Sn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var x={};x.__data__=c,c=x}else this.u&&(x={},x.__data__=jn(c),c=x);y.i.push(new pc(y.Ya++,c)),y.G==3&&Ws(y)},Sn.prototype.N=function(){this.g.l=null,delete this.j,Sl(this.g),delete this.g,Sn.aa.N.call(this)};function Rc(c){Kn.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const x in y){c=x;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}O(Rc,Kn);function Ic(){Ot.call(this),this.status=1}O(Ic,Ot);function kr(c){this.g=c}O(kr,Cc),kr.prototype.ua=function(){Ke(this.g,"a")},kr.prototype.ta=function(c){Ke(this.g,new Rc(c))},kr.prototype.sa=function(c){Ke(this.g,new Ic)},kr.prototype.ra=function(){Ke(this.g,"b")},Js.prototype.createWebChannel=Js.prototype.g,Sn.prototype.send=Sn.prototype.o,Sn.prototype.open=Sn.prototype.m,Sn.prototype.close=Sn.prototype.close,xE=function(){return new Js},_E=function(){return qe()},vE=dt,om={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},dr.NO_ERROR=0,dr.TIMEOUT=8,dr.HTTP_ERROR=6,Zh=dr,pr.COMPLETE="complete",yE=pr,qi.EventType=hr,hr.OPEN="a",hr.CLOSE="b",hr.ERROR="c",hr.MESSAGE="d",gt.prototype.listen=gt.prototype.K,xu=qi,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,mE=We}).apply(typeof Mh<"u"?Mh:typeof self<"u"?self:typeof window<"u"?window:{});const yx="@firebase/firestore",vx="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vn.UNAUTHENTICATED=new vn(null),vn.GOOGLE_CREDENTIALS=new vn("google-credentials-uid"),vn.FIRST_PARTY=new vn("first-party-uid"),vn.MOCK_USER=new vn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Jm("@firebase/firestore");function Do(){return Ds.logLevel}function de(t,...e){if(Ds.logLevel<=ze.DEBUG){const n=e.map(hy);Ds.debug(`Firestore (${cl}): ${t}`,...n)}}function Li(t,...e){if(Ds.logLevel<=ze.ERROR){const n=e.map(hy);Ds.error(`Firestore (${cl}): ${t}`,...n)}}function Xo(t,...e){if(Ds.logLevel<=ze.WARN){const n=e.map(hy);Ds.warn(`Firestore (${cl}): ${t}`,...n)}}function hy(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t,e,n){let a="Unexpected state";typeof e=="string"?a=e:n=e,wE(t,a,n)}function wE(t,e,n){let a=`FIRESTORE (${cl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{a+=" CONTEXT: "+JSON.stringify(n)}catch{a+=" CONTEXT: "+n}throw Li(a),new Error(a)}function Je(t,e,n,a){let s="Unexpected state";typeof n=="string"?s=n:a=n,t||wE(e,s,a)}function Ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _e extends Bi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vn.UNAUTHENTICATED))}shutdown(){}}class FI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GI{constructor(e){this.t=e,this.currentUser=vn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Je(this.o===void 0,42304);let a=this.i;const s=g=>this.i!==a?(a=this.i,n(g)):Promise.resolve();let l=new Ni;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ni,e.enqueueRetryable(()=>s(this.currentUser))};const h=()=>{const g=l;e.enqueueRetryable(async()=>{await g.promise,await s(this.currentUser)})},d=g=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>d(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?d(g):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ni)}},0),h()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(a=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Je(typeof a.accessToken=="string",31837,{l:a}),new bE(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string",2055,{h:e}),new vn(e)}}class $I{constructor(e,n,a){this.P=e,this.T=n,this.I=a,this.type="FirstParty",this.user=vn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class qI{constructor(e,n,a){this.P=e,this.T=n,this.I=a}getToken(){return Promise.resolve(new $I(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(vn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _x{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Fr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Je(this.o===void 0,3512);const a=l=>{l.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,de("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>a(l))};const s=l=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>s(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?s(l):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new _x(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Je(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new _x(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let a=0;a<t;a++)n[a]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const s=KI(40);for(let l=0;l<s.length;++l)a.length<20&&s[l]<n&&(a+=e.charAt(s[l]%62))}return a}}function Me(t,e){return t<e?-1:t>e?1:0}function lm(t,e){let n=0;for(;n<t.length&&n<e.length;){const a=t.codePointAt(n),s=e.codePointAt(n);if(a!==s){if(a<128&&s<128)return Me(a,s);{const l=EE(),h=QI(l.encode(xx(t,n)),l.encode(xx(e,n)));return h!==0?h:Me(a,s)}}n+=a>65535?2:1}return Me(t.length,e.length)}function xx(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function QI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Me(t[n],e[n]);return Me(t.length,e.length)}function Wo(t,e,n){return t.length===e.length&&t.every((a,s)=>n(a,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=-62135596800,bx=1e6;class Ht{static now(){return Ht.fromMillis(Date.now())}static fromDate(e){return Ht.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),a=Math.floor((e-1e3*n)*bx);return new Ht(n,a)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new _e(oe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _e(oe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<wx)throw new _e(oe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _e(oe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bx}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-wx;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Ht(0,0))}static max(){return new Re(new Ht(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex="__name__";class Br{constructor(e,n,a){n===void 0?n=0:n>e.length&&Te(637,{offset:n,range:e.length}),a===void 0?a=e.length-n:a>e.length-n&&Te(1746,{length:a,range:e.length-n}),this.segments=e,this.offset=n,this.len=a}get length(){return this.len}isEqual(e){return Br.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Br?e.forEach(a=>{n.push(a)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,a=this.limit();n<a;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const a=Math.min(e.length,n.length);for(let s=0;s<a;s++){const l=Br.compareSegments(e.get(s),n.get(s));if(l!==0)return l}return Me(e.length,n.length)}static compareSegments(e,n){const a=Br.isNumericId(e),s=Br.isNumericId(n);return a&&!s?-1:!a&&s?1:a&&s?Br.extractNumericId(e).compare(Br.extractNumericId(n)):lm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ra.fromString(e.substring(4,e.length-2))}}class vt extends Br{construct(e,n,a){return new vt(e,n,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const a of e){if(a.indexOf("//")>=0)throw new _e(oe.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);n.push(...a.split("/").filter(s=>s.length>0))}return new vt(n)}static emptyPath(){return new vt([])}}const XI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class hn extends Br{construct(e,n,a){return new hn(e,n,a)}static isValidIdentifier(e){return XI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),hn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ex}static keyField(){return new hn([Ex])}static fromServerFormat(e){const n=[];let a="",s=0;const l=()=>{if(a.length===0)throw new _e(oe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(a),a=""};let h=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new _e(oe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[s+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new _e(oe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=g,s+=2}else d==="`"?(h=!h,s++):d!=="."||h?(a+=d,s++):(l(),s++)}if(l(),h)throw new _e(oe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new hn(n)}static emptyPath(){return new hn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.path=e}static fromPath(e){return new xe(vt.fromString(e))}static fromName(e){return new xe(vt.fromString(e).popFirst(5))}static empty(){return new xe(vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&vt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return vt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new xe(new vt(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=-1;function WI(t,e){const n=t.toTimestamp().seconds,a=t.toTimestamp().nanoseconds+1,s=Re.fromTimestamp(a===1e9?new Ht(n+1,0):new Ht(n,a));return new Oa(s,xe.empty(),e)}function ZI(t){return new Oa(t.readTime,t.key,Lu)}class Oa{constructor(e,n,a){this.readTime=e,this.documentKey=n,this.largestBatchId=a}static min(){return new Oa(Re.min(),xe.empty(),Lu)}static max(){return new Oa(Re.max(),xe.empty(),Lu)}}function JI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=xe.comparator(t.documentKey,e.documentKey),n!==0?n:Me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(t){if(t.code!==oe.FAILED_PRECONDITION||t.message!==eD)throw t;de("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ae((a,s)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(a,s)},this.catchCallback=l=>{this.wrapFailure(n,l).next(a,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ae?n:ae.resolve(n)}catch(n){return ae.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ae.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ae.reject(n)}static resolve(e){return new ae((n,a)=>{n(e)})}static reject(e){return new ae((n,a)=>{a(e)})}static waitFor(e){return new ae((n,a)=>{let s=0,l=0,h=!1;e.forEach(d=>{++s,d.next(()=>{++l,h&&l===s&&n()},g=>a(g))}),h=!0,l===s&&n()})}static or(e){let n=ae.resolve(!1);for(const a of e)n=n.next(s=>s?ae.resolve(s):a());return n}static forEach(e,n){const a=[];return e.forEach((s,l)=>{a.push(n.call(this,s,l))}),this.waitFor(a)}static mapArray(e,n){return new ae((a,s)=>{const l=e.length,h=new Array(l);let d=0;for(let g=0;g<l;g++){const m=g;n(e[m]).next(_=>{h[m]=_,++d,d===l&&a(h)},_=>s(_))}})}static doWhile(e,n){return new ae((a,s)=>{const l=()=>{e()===!0?n().next(()=>{l()},s):a()};l()})}}function nD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=a=>this.ue(a),this.ce=a=>n.writeSequenceNumber(a))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Hf.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=-1;function Ff(t){return t==null}function vf(t){return t===0&&1/t==-1/0}function rD(t){return typeof t=="number"&&Number.isInteger(t)&&!vf(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="";function iD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Tx(e)),e=aD(t.get(n),e);return Tx(e)}function aD(t,e){let n=e;const a=t.length;for(let s=0;s<a;s++){const l=t.charAt(s);switch(l){case"\0":n+="";break;case SE:n+="";break;default:n+=l}}return n}function Tx(t){return t+SE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function La(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function AE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){this.comparator=e,this.root=n||cn.EMPTY}insert(e,n){return new bt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,cn.BLACK,null,null))}remove(e){return new bt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,cn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const a=this.comparator(e,n.key);if(a===0)return n.value;a<0?n=n.left:a>0&&(n=n.right)}return null}indexOf(e){let n=0,a=this.root;for(;!a.isEmpty();){const s=this.comparator(e,a.key);if(s===0)return n+a.left.size;s<0?a=a.left:(n+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,a)=>(e(n,a),!1))}toString(){const e=[];return this.inorderTraversal((n,a)=>(e.push(`${n}:${a}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ph(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ph(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ph(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ph(this.root,e,this.comparator,!0)}}class Ph{constructor(e,n,a,s){this.isReverse=s,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=n?a(e.key,n):1,n&&s&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class cn{constructor(e,n,a,s,l){this.key=e,this.value=n,this.color=a??cn.RED,this.left=s??cn.EMPTY,this.right=l??cn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,a,s,l){return new cn(e??this.key,n??this.value,a??this.color,s??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,a){let s=this;const l=a(e,s.key);return s=l<0?s.copy(null,null,null,s.left.insert(e,n,a),null):l===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,a)),s.fixUp()}removeMin(){if(this.left.isEmpty())return cn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let a,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return cn.EMPTY;a=s.right.min(),s=s.copy(a.key,a.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,cn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,cn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}cn.EMPTY=null,cn.RED=!0,cn.BLACK=!1;cn.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,n,a,s,l){return this}insert(e,n,a){return new cn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.comparator=e,this.data=new bt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,a)=>(e(n),!1))}forEachInRange(e,n){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const s=a.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let a;for(a=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ax(this.data.getIterator())}getIteratorFrom(e){return new Ax(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(a=>{n=n.add(a)}),n}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),a=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,l=a.getNext().key;if(this.comparator(s,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ft(this.comparator);return n.data=e,n}}class Ax{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(hn.comparator)}static empty(){return new qn([])}unionWith(e){let n=new Ft(hn.comparator);for(const a of this.fields)n=n.add(a);for(const a of e)n=n.add(a);return new qn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wo(this.fields,e.fields,(n,a)=>n.isEqual(a))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new CE("Invalid base64 string: "+l):l}}(e);return new dn(n)}static fromUint8Array(e){const n=function(s){let l="";for(let h=0;h<s.length;++h)l+=String.fromCharCode(s[h]);return l}(e);return new dn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const a=new Uint8Array(n.length);for(let s=0;s<n.length;s++)a[s]=n.charCodeAt(s);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dn.EMPTY_BYTE_STRING=new dn("");const sD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ka(t){if(Je(!!t,39018),typeof t=="string"){let e=0;const n=sD.exec(t);if(Je(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const a=new Date(t);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:It(t.seconds),nanos:It(t.nanos)}}function It(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Na(t){return typeof t=="string"?dn.fromBase64String(t):dn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="server_timestamp",IE="__type__",DE="__previous_value__",OE="__local_write_time__";function dy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[IE])===null||n===void 0?void 0:n.stringValue)===RE}function Gf(t){const e=t.mapValue.fields[DE];return dy(e)?Gf(e):e}function Uu(t){const e=ka(t.mapValue.fields[OE].timestampValue);return new Ht(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,n,a,s,l,h,d,g,m,_){this.databaseId=e,this.appId=n,this.persistenceKey=a,this.host=s,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=d,this.longPollingOptions=g,this.useFetchStreams=m,this.isUsingEmulator=_}}const _f="(default)";class zu{constructor(e,n){this.projectId=e,this.database=n||_f}static empty(){return new zu("","")}get isDefaultDatabase(){return this.database===_f}isEqual(e){return e instanceof zu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="__type__",lD="__max__",jh={mapValue:{}},NE="__vector__",xf="value";function Ma(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dy(t)?4:cD(t)?9007199254740991:uD(t)?10:11:Te(28295,{value:t})}function Xr(t,e){if(t===e)return!0;const n=Ma(t);if(n!==Ma(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Uu(t).isEqual(Uu(e));case 3:return function(s,l){if(typeof s.timestampValue=="string"&&typeof l.timestampValue=="string"&&s.timestampValue.length===l.timestampValue.length)return s.timestampValue===l.timestampValue;const h=ka(s.timestampValue),d=ka(l.timestampValue);return h.seconds===d.seconds&&h.nanos===d.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,l){return Na(s.bytesValue).isEqual(Na(l.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,l){return It(s.geoPointValue.latitude)===It(l.geoPointValue.latitude)&&It(s.geoPointValue.longitude)===It(l.geoPointValue.longitude)}(t,e);case 2:return function(s,l){if("integerValue"in s&&"integerValue"in l)return It(s.integerValue)===It(l.integerValue);if("doubleValue"in s&&"doubleValue"in l){const h=It(s.doubleValue),d=It(l.doubleValue);return h===d?vf(h)===vf(d):isNaN(h)&&isNaN(d)}return!1}(t,e);case 9:return Wo(t.arrayValue.values||[],e.arrayValue.values||[],Xr);case 10:case 11:return function(s,l){const h=s.mapValue.fields||{},d=l.mapValue.fields||{};if(Sx(h)!==Sx(d))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(d[g]===void 0||!Xr(h[g],d[g])))return!1;return!0}(t,e);default:return Te(52216,{left:t})}}function Bu(t,e){return(t.values||[]).find(n=>Xr(n,e))!==void 0}function Zo(t,e){if(t===e)return 0;const n=Ma(t),a=Ma(e);if(n!==a)return Me(n,a);switch(n){case 0:case 9007199254740991:return 0;case 1:return Me(t.booleanValue,e.booleanValue);case 2:return function(l,h){const d=It(l.integerValue||l.doubleValue),g=It(h.integerValue||h.doubleValue);return d<g?-1:d>g?1:d===g?0:isNaN(d)?isNaN(g)?0:-1:1}(t,e);case 3:return Cx(t.timestampValue,e.timestampValue);case 4:return Cx(Uu(t),Uu(e));case 5:return lm(t.stringValue,e.stringValue);case 6:return function(l,h){const d=Na(l),g=Na(h);return d.compareTo(g)}(t.bytesValue,e.bytesValue);case 7:return function(l,h){const d=l.split("/"),g=h.split("/");for(let m=0;m<d.length&&m<g.length;m++){const _=Me(d[m],g[m]);if(_!==0)return _}return Me(d.length,g.length)}(t.referenceValue,e.referenceValue);case 8:return function(l,h){const d=Me(It(l.latitude),It(h.latitude));return d!==0?d:Me(It(l.longitude),It(h.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Rx(t.arrayValue,e.arrayValue);case 10:return function(l,h){var d,g,m,_;const E=l.fields||{},b=h.fields||{},C=(d=E[xf])===null||d===void 0?void 0:d.arrayValue,O=(g=b[xf])===null||g===void 0?void 0:g.arrayValue,z=Me(((m=C==null?void 0:C.values)===null||m===void 0?void 0:m.length)||0,((_=O==null?void 0:O.values)===null||_===void 0?void 0:_.length)||0);return z!==0?z:Rx(C,O)}(t.mapValue,e.mapValue);case 11:return function(l,h){if(l===jh.mapValue&&h===jh.mapValue)return 0;if(l===jh.mapValue)return 1;if(h===jh.mapValue)return-1;const d=l.fields||{},g=Object.keys(d),m=h.fields||{},_=Object.keys(m);g.sort(),_.sort();for(let E=0;E<g.length&&E<_.length;++E){const b=lm(g[E],_[E]);if(b!==0)return b;const C=Zo(d[g[E]],m[_[E]]);if(C!==0)return C}return Me(g.length,_.length)}(t.mapValue,e.mapValue);default:throw Te(23264,{Pe:n})}}function Cx(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Me(t,e);const n=ka(t),a=ka(e),s=Me(n.seconds,a.seconds);return s!==0?s:Me(n.nanos,a.nanos)}function Rx(t,e){const n=t.values||[],a=e.values||[];for(let s=0;s<n.length&&s<a.length;++s){const l=Zo(n[s],a[s]);if(l)return l}return Me(n.length,a.length)}function Jo(t){return um(t)}function um(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const a=ka(n);return`time(${a.seconds},${a.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Na(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return xe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let a="[",s=!0;for(const l of n.values||[])s?s=!1:a+=",",a+=um(l);return a+"]"}(t.arrayValue):"mapValue"in t?function(n){const a=Object.keys(n.fields||{}).sort();let s="{",l=!0;for(const h of a)l?l=!1:s+=",",s+=`${h}:${um(n.fields[h])}`;return s+"}"}(t.mapValue):Te(61005,{value:t})}function Jh(t){switch(Ma(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gf(t);return e?16+Jh(e):16;case 5:return 2*t.stringValue.length;case 6:return Na(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((s,l)=>s+Jh(l),0)}(t.arrayValue);case 10:case 11:return function(a){let s=0;return La(a.fields,(l,h)=>{s+=l.length+Jh(h)}),s}(t.mapValue);default:throw Te(13486,{value:t})}}function cm(t){return!!t&&"integerValue"in t}function py(t){return!!t&&"arrayValue"in t}function Ix(t){return!!t&&"nullValue"in t}function Dx(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ef(t){return!!t&&"mapValue"in t}function uD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[kE])===null||n===void 0?void 0:n.stringValue)===NE}function Iu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return La(t.mapValue.fields,(n,a)=>e.mapValue.fields[n]=Iu(a)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Iu(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===lD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.value=e}static empty(){return new kn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let a=0;a<e.length-1;++a)if(n=(n.mapValue.fields||{})[e.get(a)],!ef(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Iu(n)}setAll(e){let n=hn.emptyPath(),a={},s=[];e.forEach((h,d)=>{if(!n.isImmediateParentOf(d)){const g=this.getFieldsMap(n);this.applyChanges(g,a,s),a={},s=[],n=d.popLast()}h?a[d.lastSegment()]=Iu(h):s.push(d.lastSegment())});const l=this.getFieldsMap(n);this.applyChanges(l,a,s)}delete(e){const n=this.field(e.popLast());ef(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let a=0;a<e.length;++a){let s=n.mapValue.fields[e.get(a)];ef(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(a)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,a){La(n,(s,l)=>e[s]=l);for(const s of a)delete e[s]}clone(){return new kn(Iu(this.value))}}function ME(t){const e=[];return La(t.fields,(n,a)=>{const s=new hn([n]);if(ef(a)){const l=ME(a.mapValue).fields;if(l.length===0)e.push(s);else for(const h of l)e.push(s.child(h))}else e.push(s)}),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n,a,s,l,h,d){this.key=e,this.documentType=n,this.version=a,this.readTime=s,this.createTime=l,this.data=h,this.documentState=d}static newInvalidDocument(e){return new _n(e,0,Re.min(),Re.min(),Re.min(),kn.empty(),0)}static newFoundDocument(e,n,a,s){return new _n(e,1,n,Re.min(),a,s,0)}static newNoDocument(e,n){return new _n(e,2,n,Re.min(),Re.min(),kn.empty(),0)}static newUnknownDocument(e,n){return new _n(e,3,n,Re.min(),Re.min(),kn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n){this.position=e,this.inclusive=n}}function Ox(t,e,n){let a=0;for(let s=0;s<t.position.length;s++){const l=e[s],h=t.position[s];if(l.field.isKeyField()?a=xe.comparator(xe.fromName(h.referenceValue),n.key):a=Zo(h,n.data.field(l.field)),l.dir==="desc"&&(a*=-1),a!==0)break}return a}function kx(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n="asc"){this.field=e,this.dir=n}}function hD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{}class Bt extends PE{constructor(e,n,a){super(),this.field=e,this.op=n,this.value=a}static create(e,n,a){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,a):new dD(e,n,a):n==="array-contains"?new mD(e,a):n==="in"?new yD(e,a):n==="not-in"?new vD(e,a):n==="array-contains-any"?new _D(e,a):new Bt(e,n,a)}static createKeyFieldInFilter(e,n,a){return n==="in"?new pD(e,a):new gD(e,a)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Zo(n,this.value)):n!==null&&Ma(this.value)===Ma(n)&&this.matchesComparison(Zo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wr extends PE{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new Wr(e,n)}matches(e){return jE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function jE(t){return t.op==="and"}function VE(t){return fD(t)&&jE(t)}function fD(t){for(const e of t.filters)if(e instanceof Wr)return!1;return!0}function hm(t){if(t instanceof Bt)return t.field.canonicalString()+t.op.toString()+Jo(t.value);if(VE(t))return t.filters.map(e=>hm(e)).join(",");{const e=t.filters.map(n=>hm(n)).join(",");return`${t.op}(${e})`}}function LE(t,e){return t instanceof Bt?function(a,s){return s instanceof Bt&&a.op===s.op&&a.field.isEqual(s.field)&&Xr(a.value,s.value)}(t,e):t instanceof Wr?function(a,s){return s instanceof Wr&&a.op===s.op&&a.filters.length===s.filters.length?a.filters.reduce((l,h,d)=>l&&LE(h,s.filters[d]),!0):!1}(t,e):void Te(19439)}function UE(t){return t instanceof Bt?function(n){return`${n.field.canonicalString()} ${n.op} ${Jo(n.value)}`}(t):t instanceof Wr?function(n){return n.op.toString()+" {"+n.getFilters().map(UE).join(" ,")+"}"}(t):"Filter"}class dD extends Bt{constructor(e,n,a){super(e,n,a),this.key=xe.fromName(a.referenceValue)}matches(e){const n=xe.comparator(e.key,this.key);return this.matchesComparison(n)}}class pD extends Bt{constructor(e,n){super(e,"in",n),this.keys=zE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gD extends Bt{constructor(e,n){super(e,"not-in",n),this.keys=zE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(a=>xe.fromName(a.referenceValue))}class mD extends Bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return py(n)&&Bu(n.arrayValue,this.value)}}class yD extends Bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bu(this.value.arrayValue,n)}}class vD extends Bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Bu(this.value.arrayValue,n)}}class _D extends Bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!py(n)||!n.arrayValue.values)&&n.arrayValue.values.some(a=>Bu(this.value.arrayValue,a))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n=null,a=[],s=[],l=null,h=null,d=null){this.path=e,this.collectionGroup=n,this.orderBy=a,this.filters=s,this.limit=l,this.startAt=h,this.endAt=d,this.Ie=null}}function Nx(t,e=null,n=[],a=[],s=null,l=null,h=null){return new xD(t,e,n,a,s,l,h)}function gy(t){const e=Ie(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(a=>hm(a)).join(","),n+="|ob:",n+=e.orderBy.map(a=>function(l){return l.field.canonicalString()+l.dir}(a)).join(","),Ff(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(a=>Jo(a)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(a=>Jo(a)).join(",")),e.Ie=n}return e.Ie}function my(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!LE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kx(t.startAt,e.startAt)&&kx(t.endAt,e.endAt)}function fm(t){return xe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n=null,a=[],s=[],l=null,h="F",d=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=a,this.filters=s,this.limit=l,this.limitType=h,this.startAt=d,this.endAt=g,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function wD(t,e,n,a,s,l,h,d){return new $f(t,e,n,a,s,l,h,d)}function yy(t){return new $f(t)}function Mx(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bD(t){return t.collectionGroup!==null}function Du(t){const e=Ie(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),n.add(l.field.canonicalString());const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let d=new Ft(hn.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(l=>{n.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new bf(l,a))}),n.has(hn.keyField().canonicalString())||e.Ee.push(new bf(hn.keyField(),a))}return e.Ee}function qr(t){const e=Ie(t);return e.de||(e.de=ED(e,Du(t))),e.de}function ED(t,e){if(t.limitType==="F")return Nx(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const l=s.dir==="desc"?"asc":"desc";return new bf(s.field,l)});const n=t.endAt?new wf(t.endAt.position,t.endAt.inclusive):null,a=t.startAt?new wf(t.startAt.position,t.startAt.inclusive):null;return Nx(t.path,t.collectionGroup,e,t.filters,t.limit,n,a)}}function dm(t,e,n){return new $f(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qf(t,e){return my(qr(t),qr(e))&&t.limitType===e.limitType}function BE(t){return`${gy(qr(t))}|lt:${t.limitType}`}function Oo(t){return`Query(target=${function(n){let a=n.path.canonicalString();return n.collectionGroup!==null&&(a+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(a+=`, filters: [${n.filters.map(s=>UE(s)).join(", ")}]`),Ff(n.limit)||(a+=", limit: "+n.limit),n.orderBy.length>0&&(a+=`, orderBy: [${n.orderBy.map(s=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(s)).join(", ")}]`),n.startAt&&(a+=", startAt: ",a+=n.startAt.inclusive?"b:":"a:",a+=n.startAt.position.map(s=>Jo(s)).join(",")),n.endAt&&(a+=", endAt: ",a+=n.endAt.inclusive?"a:":"b:",a+=n.endAt.position.map(s=>Jo(s)).join(",")),`Target(${a})`}(qr(t))}; limitType=${t.limitType})`}function Yf(t,e){return e.isFoundDocument()&&function(a,s){const l=s.key.path;return a.collectionGroup!==null?s.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(l):xe.isDocumentKey(a.path)?a.path.isEqual(l):a.path.isImmediateParentOf(l)}(t,e)&&function(a,s){for(const l of Du(a))if(!l.field.isKeyField()&&s.data.field(l.field)===null)return!1;return!0}(t,e)&&function(a,s){for(const l of a.filters)if(!l.matches(s))return!1;return!0}(t,e)&&function(a,s){return!(a.startAt&&!function(h,d,g){const m=Ox(h,d,g);return h.inclusive?m<=0:m<0}(a.startAt,Du(a),s)||a.endAt&&!function(h,d,g){const m=Ox(h,d,g);return h.inclusive?m>=0:m>0}(a.endAt,Du(a),s))}(t,e)}function TD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function HE(t){return(e,n)=>{let a=!1;for(const s of Du(t)){const l=SD(s,e,n);if(l!==0)return l;a=a||s.field.isKeyField()}return 0}}function SD(t,e,n){const a=t.field.isKeyField()?xe.comparator(e.key,n.key):function(l,h,d){const g=h.data.field(l),m=d.data.field(l);return g!==null&&m!==null?Zo(g,m):Te(42886)}(t.field,e,n);switch(t.dir){case"asc":return a;case"desc":return-1*a;default:return Te(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),a=this.inner[n];if(a!==void 0){for(const[s,l]of a)if(this.equalsFn(s,e))return l}}has(e){return this.get(e)!==void 0}set(e,n){const a=this.mapKeyFn(e),s=this.inner[a];if(s===void 0)return this.inner[a]=[[e,n]],void this.innerSize++;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],e))return void(s[l]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),a=this.inner[n];if(a===void 0)return!1;for(let s=0;s<a.length;s++)if(this.equalsFn(a[s][0],e))return a.length===1?delete this.inner[n]:a.splice(s,1),this.innerSize--,!0;return!1}forEach(e){La(this.inner,(n,a)=>{for(const[s,l]of a)e(s,l)})}isEmpty(){return AE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=new bt(xe.comparator);function Ui(){return AD}const FE=new bt(xe.comparator);function wu(...t){let e=FE;for(const n of t)e=e.insert(n.key,n);return e}function GE(t){let e=FE;return t.forEach((n,a)=>e=e.insert(n,a.overlayedDocument)),e}function bs(){return Ou()}function $E(){return Ou()}function Ou(){return new ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const CD=new bt(xe.comparator),RD=new Ft(xe.comparator);function Be(...t){let e=RD;for(const n of t)e=e.add(n);return e}const ID=new Ft(Me);function DD(){return ID}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vf(e)?"-0":e}}function qE(t){return{integerValue:""+t}}function OD(t,e){return rD(e)?qE(e):vy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this._=void 0}}function kD(t,e,n){return t instanceof Ef?function(s,l){const h={fields:{[IE]:{stringValue:RE},[OE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return l&&dy(l)&&(l=Gf(l)),l&&(h.fields[DE]=l),{mapValue:h}}(n,e):t instanceof el?KE(t,e):t instanceof Hu?QE(t,e):function(s,l){const h=YE(s,l),d=Px(h)+Px(s.Re);return cm(h)&&cm(s.Re)?qE(d):vy(s.serializer,d)}(t,e)}function ND(t,e,n){return t instanceof el?KE(t,e):t instanceof Hu?QE(t,e):n}function YE(t,e){return t instanceof Tf?function(a){return cm(a)||function(l){return!!l&&"doubleValue"in l}(a)}(e)?e:{integerValue:0}:null}class Ef extends Kf{}class el extends Kf{constructor(e){super(),this.elements=e}}function KE(t,e){const n=XE(e);for(const a of t.elements)n.some(s=>Xr(s,a))||n.push(a);return{arrayValue:{values:n}}}class Hu extends Kf{constructor(e){super(),this.elements=e}}function QE(t,e){let n=XE(e);for(const a of t.elements)n=n.filter(s=>!Xr(s,a));return{arrayValue:{values:n}}}class Tf extends Kf{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Px(t){return It(t.integerValue||t.doubleValue)}function XE(t){return py(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n){this.field=e,this.transform=n}}function PD(t,e){return t.field.isEqual(e.field)&&function(a,s){return a instanceof el&&s instanceof el||a instanceof Hu&&s instanceof Hu?Wo(a.elements,s.elements,Xr):a instanceof Tf&&s instanceof Tf?Xr(a.Re,s.Re):a instanceof Ef&&s instanceof Ef}(t.transform,e.transform)}class jD{constructor(e,n){this.version=e,this.transformResults=n}}class Yr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yr}static exists(e){return new Yr(void 0,e)}static updateTime(e){return new Yr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tf(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qf{}function WE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new JE(t.key,Yr.none()):new nc(t.key,t.data,Yr.none());{const n=t.data,a=kn.empty();let s=new Ft(hn.comparator);for(let l of e.fields)if(!s.has(l)){let h=n.field(l);h===null&&l.length>1&&(l=l.popLast(),h=n.field(l)),h===null?a.delete(l):a.set(l,h),s=s.add(l)}return new Ua(t.key,a,new qn(s.toArray()),Yr.none())}}function VD(t,e,n){t instanceof nc?function(s,l,h){const d=s.value.clone(),g=Vx(s.fieldTransforms,l,h.transformResults);d.setAll(g),l.convertToFoundDocument(h.version,d).setHasCommittedMutations()}(t,e,n):t instanceof Ua?function(s,l,h){if(!tf(s.precondition,l))return void l.convertToUnknownDocument(h.version);const d=Vx(s.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(ZE(s)),g.setAll(d),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(t,e,n):function(s,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,n)}function ku(t,e,n,a){return t instanceof nc?function(l,h,d,g){if(!tf(l.precondition,h))return d;const m=l.value.clone(),_=Lx(l.fieldTransforms,g,h);return m.setAll(_),h.convertToFoundDocument(h.version,m).setHasLocalMutations(),null}(t,e,n,a):t instanceof Ua?function(l,h,d,g){if(!tf(l.precondition,h))return d;const m=Lx(l.fieldTransforms,g,h),_=h.data;return _.setAll(ZE(l)),_.setAll(m),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(E=>E.field))}(t,e,n,a):function(l,h,d){return tf(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):d}(t,e,n)}function LD(t,e){let n=null;for(const a of t.fieldTransforms){const s=e.data.field(a.field),l=YE(a.transform,s||null);l!=null&&(n===null&&(n=kn.empty()),n.set(a.field,l))}return n||null}function jx(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(a,s){return a===void 0&&s===void 0||!(!a||!s)&&Wo(a,s,(l,h)=>PD(l,h))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class nc extends Qf{constructor(e,n,a,s=[]){super(),this.key=e,this.value=n,this.precondition=a,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ua extends Qf{constructor(e,n,a,s,l=[]){super(),this.key=e,this.data=n,this.fieldMask=a,this.precondition=s,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function ZE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const a=t.data.field(n);e.set(n,a)}}),e}function Vx(t,e,n){const a=new Map;Je(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const l=t[s],h=l.transform,d=e.data.field(l.field);a.set(l.field,ND(h,d,n[s]))}return a}function Lx(t,e,n){const a=new Map;for(const s of t){const l=s.transform,h=n.data.field(s.field);a.set(s.field,kD(l,h,e))}return a}class JE extends Qf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UD extends Qf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n,a,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=a,this.mutations=s}applyToRemoteDocument(e,n){const a=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const l=this.mutations[s];l.key.isEqual(e.key)&&VD(l,e,a[s])}}applyToLocalView(e,n){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(n=ku(a,e,n,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(n=ku(a,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const a=$E();return this.mutations.forEach(s=>{const l=e.get(s.key),h=l.overlayedDocument;let d=this.applyToLocalView(h,l.mutatedFields);d=n.has(s.key)?null:d;const g=WE(h,d);g!==null&&a.set(s.key,g),h.isValidDocument()||h.convertToNoDocument(Re.min())}),a}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Be())}isEqual(e){return this.batchId===e.batchId&&Wo(this.mutations,e.mutations,(n,a)=>jx(n,a))&&Wo(this.baseMutations,e.baseMutations,(n,a)=>jx(n,a))}}class _y{constructor(e,n,a,s){this.batch=e,this.commitVersion=n,this.mutationResults=a,this.docVersions=s}static from(e,n,a){Je(e.mutations.length===a.length,58842,{fe:e.mutations.length,ge:a.length});let s=function(){return CD}();const l=e.mutations;for(let h=0;h<l.length;h++)s=s.insert(l[h].key,a[h].version);return new _y(e,n,a,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt,$e;function FD(t){switch(t){case oe.OK:return Te(64938);case oe.CANCELLED:case oe.UNKNOWN:case oe.DEADLINE_EXCEEDED:case oe.RESOURCE_EXHAUSTED:case oe.INTERNAL:case oe.UNAVAILABLE:case oe.UNAUTHENTICATED:return!1;case oe.INVALID_ARGUMENT:case oe.NOT_FOUND:case oe.ALREADY_EXISTS:case oe.PERMISSION_DENIED:case oe.FAILED_PRECONDITION:case oe.ABORTED:case oe.OUT_OF_RANGE:case oe.UNIMPLEMENTED:case oe.DATA_LOSS:return!0;default:return Te(15467,{code:t})}}function eT(t){if(t===void 0)return Li("GRPC error has no .code"),oe.UNKNOWN;switch(t){case Pt.OK:return oe.OK;case Pt.CANCELLED:return oe.CANCELLED;case Pt.UNKNOWN:return oe.UNKNOWN;case Pt.DEADLINE_EXCEEDED:return oe.DEADLINE_EXCEEDED;case Pt.RESOURCE_EXHAUSTED:return oe.RESOURCE_EXHAUSTED;case Pt.INTERNAL:return oe.INTERNAL;case Pt.UNAVAILABLE:return oe.UNAVAILABLE;case Pt.UNAUTHENTICATED:return oe.UNAUTHENTICATED;case Pt.INVALID_ARGUMENT:return oe.INVALID_ARGUMENT;case Pt.NOT_FOUND:return oe.NOT_FOUND;case Pt.ALREADY_EXISTS:return oe.ALREADY_EXISTS;case Pt.PERMISSION_DENIED:return oe.PERMISSION_DENIED;case Pt.FAILED_PRECONDITION:return oe.FAILED_PRECONDITION;case Pt.ABORTED:return oe.ABORTED;case Pt.OUT_OF_RANGE:return oe.OUT_OF_RANGE;case Pt.UNIMPLEMENTED:return oe.UNIMPLEMENTED;case Pt.DATA_LOSS:return oe.DATA_LOSS;default:return Te(39323,{code:t})}}($e=Pt||(Pt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=new Ra([4294967295,4294967295],0);function Ux(t){const e=EE().encode(t),n=new gE;return n.update(e),new Uint8Array(n.digest())}function zx(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),a=e.getUint32(4,!0),s=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ra([n,a],0),new Ra([s,l],0)]}class xy{constructor(e,n,a){if(this.bitmap=e,this.padding=n,this.hashCount=a,n<0||n>=8)throw new bu(`Invalid padding: ${n}`);if(a<0)throw new bu(`Invalid hash count: ${a}`);if(e.length>0&&this.hashCount===0)throw new bu(`Invalid hash count: ${a}`);if(e.length===0&&n!==0)throw new bu(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=Ra.fromNumber(this.pe)}we(e,n,a){let s=e.add(n.multiply(Ra.fromNumber(a)));return s.compare(GD)===1&&(s=new Ra([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Ux(e),[a,s]=zx(n);for(let l=0;l<this.hashCount;l++){const h=this.we(a,s,l);if(!this.Se(h))return!1}return!0}static create(e,n,a){const s=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new xy(l,s,n);return a.forEach(d=>h.insert(d)),h}insert(e){if(this.pe===0)return;const n=Ux(e),[a,s]=zx(n);for(let l=0;l<this.hashCount;l++){const h=this.we(a,s,l);this.be(h)}}be(e){const n=Math.floor(e/8),a=e%8;this.bitmap[n]|=1<<a}}class bu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n,a,s,l){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=a,this.documentUpdates=s,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,n,a){const s=new Map;return s.set(e,rc.createSynthesizedTargetChangeForCurrentChange(e,n,a)),new Xf(Re.min(),s,new bt(Me),Ui(),Be())}}class rc{constructor(e,n,a,s,l){this.resumeToken=e,this.current=n,this.addedDocuments=a,this.modifiedDocuments=s,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,n,a){return new rc(a,n,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n,a,s){this.De=e,this.removedTargetIds=n,this.key=a,this.ve=s}}class tT{constructor(e,n){this.targetId=e,this.Ce=n}}class nT{constructor(e,n,a=dn.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=a,this.cause=s}}class Bx{constructor(){this.Fe=0,this.Me=Hx(),this.xe=dn.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Be(),n=Be(),a=Be();return this.Me.forEach((s,l)=>{switch(l){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:a=a.add(s);break;default:Te(38017,{changeType:l})}}),new rc(this.xe,this.Oe,e,n,a)}Qe(){this.Ne=!1,this.Me=Hx()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Je(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class $D{constructor(e){this.ze=e,this.je=new Map,this.He=Ui(),this.Je=Vh(),this.Ye=Vh(),this.Ze=new bt(Me)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const a=this.rt(n);switch(e.state){case 0:this.it(n)&&a.ke(e.resumeToken);break;case 1:a.We(),a.Be||a.Qe(),a.ke(e.resumeToken);break;case 2:a.We(),a.Be||this.removeTarget(n);break;case 3:this.it(n)&&(a.Ge(),a.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),a.ke(e.resumeToken));break;default:Te(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((a,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,a=e.Ce.count,s=this._t(n);if(s){const l=s.target;if(fm(l))if(a===0){const h=new xe(l.path);this.tt(n,h,_n.newNoDocument(h,Re.min()))}else Je(a===1,20013,{expectedCount:a});else{const h=this.ut(n);if(h!==a){const d=this.ct(e),g=d?this.lt(d,e,h):1;if(g!==0){this.st(n);const m=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,m)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:a="",padding:s=0},hashCount:l=0}=n;let h,d;try{h=Na(a).toUint8Array()}catch(g){if(g instanceof CE)return Xo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{d=new xy(h,s,l)}catch(g){return Xo(g instanceof bu?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return d.pe===0?null:d}lt(e,n,a){return n.Ce.count===a-this.Tt(e,n.targetId)?0:2}Tt(e,n){const a=this.ze.getRemoteKeysForTarget(n);let s=0;return a.forEach(l=>{const h=this.ze.Pt(),d=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.tt(n,l,null),s++)}),s}It(e){const n=new Map;this.je.forEach((l,h)=>{const d=this._t(h);if(d){if(l.current&&fm(d.target)){const g=new xe(d.target.path);this.Et(g).has(h)||this.dt(h,g)||this.tt(h,g,_n.newNoDocument(g,e))}l.Le&&(n.set(h,l.qe()),l.Qe())}});let a=Be();this.Ye.forEach((l,h)=>{let d=!0;h.forEachWhile(g=>{const m=this._t(g);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(a=a.add(l))}),this.He.forEach((l,h)=>h.setReadTime(e));const s=new Xf(e,n,this.Ze,this.He,a);return this.He=Ui(),this.Je=Vh(),this.Ye=Vh(),this.Ze=new bt(Me),s}et(e,n){if(!this.it(e))return;const a=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,a),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,a){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),a&&(this.He=this.He.insert(n,a))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new Bx,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new Ft(Me),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ft(Me),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||de("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Bx),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function Vh(){return new bt(xe.comparator)}function Hx(){return new bt(xe.comparator)}const qD={asc:"ASCENDING",desc:"DESCENDING"},YD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KD={and:"AND",or:"OR"};class QD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pm(t,e){return t.useProto3Json||Ff(e)?e:{value:e}}function Sf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function XD(t,e){return Sf(t,e.toTimestamp())}function Kr(t){return Je(!!t,49232),Re.fromTimestamp(function(n){const a=ka(n);return new Ht(a.seconds,a.nanos)}(t))}function wy(t,e){return gm(t,e).canonicalString()}function gm(t,e){const n=function(s){return new vt(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iT(t){const e=vt.fromString(t);return Je(uT(e),10190,{key:e.toString()}),e}function mm(t,e){return wy(t.databaseId,e.path)}function Dg(t,e){const n=iT(e);if(n.get(1)!==t.databaseId.projectId)throw new _e(oe.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _e(oe.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new xe(sT(n))}function aT(t,e){return wy(t.databaseId,e)}function WD(t){const e=iT(t);return e.length===4?vt.emptyPath():sT(e)}function ym(t){return new vt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sT(t){return Je(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Fx(t,e,n){return{name:mm(t,e),fields:n.value.mapValue.fields}}function ZD(t,e){let n;if("targetChange"in e){e.targetChange;const a=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Te(39313,{state:m})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],l=function(m,_){return m.useProto3Json?(Je(_===void 0||typeof _=="string",58123),dn.fromBase64String(_||"")):(Je(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),dn.fromUint8Array(_||new Uint8Array))}(t,e.targetChange.resumeToken),h=e.targetChange.cause,d=h&&function(m){const _=m.code===void 0?oe.UNKNOWN:eT(m.code);return new _e(_,m.message||"")}(h);n=new nT(a,s,l,d||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const s=Dg(t,a.document.name),l=Kr(a.document.updateTime),h=a.document.createTime?Kr(a.document.createTime):Re.min(),d=new kn({mapValue:{fields:a.document.fields}}),g=_n.newFoundDocument(s,l,h,d),m=a.targetIds||[],_=a.removedTargetIds||[];n=new nf(m,_,g.key,g)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const s=Dg(t,a.document),l=a.readTime?Kr(a.readTime):Re.min(),h=_n.newNoDocument(s,l),d=a.removedTargetIds||[];n=new nf([],d,h.key,h)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const s=Dg(t,a.document),l=a.removedTargetIds||[];n=new nf([],l,s,null)}else{if(!("filter"in e))return Te(11601,{Vt:e});{e.filter;const a=e.filter;a.targetId;const{count:s=0,unchangedNames:l}=a,h=new HD(s,l),d=a.targetId;n=new tT(d,h)}}return n}function JD(t,e){let n;if(e instanceof nc)n={update:Fx(t,e.key,e.value)};else if(e instanceof JE)n={delete:mm(t,e.key)};else if(e instanceof Ua)n={update:Fx(t,e.key,e.data),updateMask:l5(e.fieldMask)};else{if(!(e instanceof UD))return Te(16599,{ft:e.type});n={verify:mm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(a=>function(l,h){const d=h.transform;if(d instanceof Ef)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof el)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Hu)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Tf)return{fieldPath:h.field.canonicalString(),increment:d.Re};throw Te(20930,{transform:h.transform})}(0,a))),e.precondition.isNone||(n.currentDocument=function(s,l){return l.updateTime!==void 0?{updateTime:XD(s,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te(27497)}(t,e.precondition)),n}function e5(t,e){return t&&t.length>0?(Je(e!==void 0,14353),t.map(n=>function(s,l){let h=s.updateTime?Kr(s.updateTime):Kr(l);return h.isEqual(Re.min())&&(h=Kr(l)),new jD(h,s.transformResults||[])}(n,e))):[]}function t5(t,e){return{documents:[aT(t,e.path)]}}function n5(t,e){const n={structuredQuery:{}},a=e.path;let s;e.collectionGroup!==null?(s=a,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=a.popLast(),n.structuredQuery.from=[{collectionId:a.lastSegment()}]),n.parent=aT(t,s);const l=function(m){if(m.length!==0)return lT(Wr.create(m,"and"))}(e.filters);l&&(n.structuredQuery.where=l);const h=function(m){if(m.length!==0)return m.map(_=>function(b){return{field:ko(b.field),direction:a5(b.dir)}}(_))}(e.orderBy);h&&(n.structuredQuery.orderBy=h);const d=pm(t,e.limit);return d!==null&&(n.structuredQuery.limit=d),e.startAt&&(n.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{gt:n,parent:s}}function r5(t){let e=WD(t.parent);const n=t.structuredQuery,a=n.from?n.from.length:0;let s=null;if(a>0){Je(a===1,65062);const _=n.from[0];_.allDescendants?s=_.collectionId:e=e.child(_.collectionId)}let l=[];n.where&&(l=function(E){const b=oT(E);return b instanceof Wr&&VE(b)?b.getFilters():[b]}(n.where));let h=[];n.orderBy&&(h=function(E){return E.map(b=>function(O){return new bf(No(O.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(b))}(n.orderBy));let d=null;n.limit&&(d=function(E){let b;return b=typeof E=="object"?E.value:E,Ff(b)?null:b}(n.limit));let g=null;n.startAt&&(g=function(E){const b=!!E.before,C=E.values||[];return new wf(C,b)}(n.startAt));let m=null;return n.endAt&&(m=function(E){const b=!E.before,C=E.values||[];return new wf(C,b)}(n.endAt)),wD(e,s,h,l,d,"F",g,m)}function i5(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function oT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const a=No(n.unaryFilter.field);return Bt.create(a,"==",{doubleValue:NaN});case"IS_NULL":const s=No(n.unaryFilter.field);return Bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=No(n.unaryFilter.field);return Bt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=No(n.unaryFilter.field);return Bt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}}(t):t.fieldFilter!==void 0?function(n){return Bt.create(No(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wr.create(n.compositeFilter.filters.map(a=>oT(a)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Te(1026)}}(n.compositeFilter.op))}(t):Te(30097,{filter:t})}function a5(t){return qD[t]}function s5(t){return YD[t]}function o5(t){return KD[t]}function ko(t){return{fieldPath:t.canonicalString()}}function No(t){return hn.fromServerFormat(t.fieldPath)}function lT(t){return t instanceof Bt?function(n){if(n.op==="=="){if(Dx(n.value))return{unaryFilter:{field:ko(n.field),op:"IS_NAN"}};if(Ix(n.value))return{unaryFilter:{field:ko(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dx(n.value))return{unaryFilter:{field:ko(n.field),op:"IS_NOT_NAN"}};if(Ix(n.value))return{unaryFilter:{field:ko(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ko(n.field),op:s5(n.op),value:n.value}}}(t):t instanceof Wr?function(n){const a=n.getFilters().map(s=>lT(s));return a.length===1?a[0]:{compositeFilter:{op:o5(n.op),filters:a}}}(t):Te(54877,{filter:t})}function l5(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n,a,s,l=Re.min(),h=Re.min(),d=dn.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=n,this.purpose=a,this.sequenceNumber=s,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=d,this.expectedCount=g}withSequenceNumber(e){return new Ta(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ta(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ta(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ta(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u5{constructor(e){this.wt=e}}function c5(t){const e=r5({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h5{constructor(){this.Cn=new f5}addToCollectionParentIndex(e,n){return this.Cn.add(n),ae.resolve()}getCollectionParents(e,n){return ae.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return ae.resolve()}deleteFieldIndex(e,n){return ae.resolve()}deleteAllFieldIndexes(e){return ae.resolve()}createTargetIndexes(e,n){return ae.resolve()}getDocumentsMatchingTarget(e,n){return ae.resolve(null)}getIndexType(e,n){return ae.resolve(0)}getFieldIndexes(e,n){return ae.resolve([])}getNextCollectionGroupToUpdate(e){return ae.resolve(null)}getMinOffset(e,n){return ae.resolve(Oa.min())}getMinOffsetFromCollectionGroup(e,n){return ae.resolve(Oa.min())}updateCollectionGroup(e,n,a){return ae.resolve()}updateIndexEntries(e,n){return ae.resolve()}}class f5{constructor(){this.index={}}add(e){const n=e.lastSegment(),a=e.popLast(),s=this.index[n]||new Ft(vt.comparator),l=!s.has(a);return this.index[n]=s.add(a),l}has(e){const n=e.lastSegment(),a=e.popLast(),s=this.index[n];return s&&s.has(a)}getEntries(e){return(this.index[e]||new Ft(vt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cT=41943040;class On{static withCacheSize(e){return new On(e,On.DEFAULT_COLLECTION_PERCENTILE,On.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,a){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On.DEFAULT_COLLECTION_PERCENTILE=10,On.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,On.DEFAULT=new On(cT,On.DEFAULT_COLLECTION_PERCENTILE,On.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),On.DISABLED=new On(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new tl(0)}static lr(){return new tl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="LruGarbageCollector",d5=1048576;function qx([t,e],[n,a]){const s=Me(t,n);return s===0?Me(e,a):s}class p5{constructor(e){this.Er=e,this.buffer=new Ft(qx),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const a=this.buffer.last();qx(n,a)<0&&(this.buffer=this.buffer.delete(a).add(n))}}get maxValue(){return this.buffer.last()[0]}}class g5{constructor(e,n,a){this.garbageCollector=e,this.asyncQueue=n,this.localStore=a,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){de($x,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fl(n)?de($x,"Ignoring IndexedDB error during garbage collection: ",n):await hl(n)}await this.mr(3e5)})}}class m5{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(a=>Math.floor(n/100*a))}nthSequenceNumber(e,n){if(n===0)return ae.resolve(Hf.le);const a=new p5(n);return this.gr.forEachTarget(e,s=>a.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>a.Rr(s))).next(()=>a.maxValue)}removeTargets(e,n,a){return this.gr.removeTargets(e,n,a)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),ae.resolve(Gx)):this.getCacheSize(e).next(a=>a<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gx):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let a,s,l,h,d,g,m;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,h=Date.now(),this.nthSequenceNumber(e,s))).next(E=>(a=E,d=Date.now(),this.removeTargets(e,a,n))).next(E=>(l=E,g=Date.now(),this.removeOrphanedDocuments(e,a))).next(E=>(m=Date.now(),Do()<=ze.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-_}ms
	Determined least recently used ${s} in `+(d-h)+`ms
	Removed ${l} targets in `+(g-d)+`ms
	Removed ${E} documents in `+(m-g)+`ms
Total Duration: ${m-_}ms`),ae.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:l,documentsRemoved:E})))}}function y5(t,e){return new m5(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v5{constructor(){this.changes=new ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_n.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const a=this.changes.get(n);return a!==void 0?ae.resolve(a):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _5{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x5{constructor(e,n,a,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=a,this.indexManager=s}getDocument(e,n){let a=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(a=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(a!==null&&ku(a.mutation,s,qn.empty(),Ht.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(a=>this.getLocalViewOfDocuments(e,a,Be()).next(()=>a))}getLocalViewOfDocuments(e,n,a=Be()){const s=bs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,a).next(l=>{let h=wu();return l.forEach((d,g)=>{h=h.insert(d,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,n){const a=bs();return this.populateOverlays(e,a,n).next(()=>this.computeViews(e,n,a,Be()))}populateOverlays(e,n,a){const s=[];return a.forEach(l=>{n.has(l)||s.push(l)}),this.documentOverlayCache.getOverlays(e,s).next(l=>{l.forEach((h,d)=>{n.set(h,d)})})}computeViews(e,n,a,s){let l=Ui();const h=Ou(),d=function(){return Ou()}();return n.forEach((g,m)=>{const _=a.get(m.key);s.has(m.key)&&(_===void 0||_.mutation instanceof Ua)?l=l.insert(m.key,m):_!==void 0?(h.set(m.key,_.mutation.getFieldMask()),ku(_.mutation,m,_.mutation.getFieldMask(),Ht.now())):h.set(m.key,qn.empty())}),this.recalculateAndSaveOverlays(e,l).next(g=>(g.forEach((m,_)=>h.set(m,_)),n.forEach((m,_)=>{var E;return d.set(m,new _5(_,(E=h.get(m))!==null&&E!==void 0?E:null))}),d))}recalculateAndSaveOverlays(e,n){const a=Ou();let s=new bt((h,d)=>h-d),l=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(h=>{for(const d of h)d.keys().forEach(g=>{const m=n.get(g);if(m===null)return;let _=a.get(g)||qn.empty();_=d.applyToLocalView(m,_),a.set(g,_);const E=(s.get(d.batchId)||Be()).add(g);s=s.insert(d.batchId,E)})}).next(()=>{const h=[],d=s.getReverseIterator();for(;d.hasNext();){const g=d.getNext(),m=g.key,_=g.value,E=$E();_.forEach(b=>{if(!l.has(b)){const C=WE(n.get(b),a.get(b));C!==null&&E.set(b,C),l=l.add(b)}}),h.push(this.documentOverlayCache.saveOverlays(e,m,E))}return ae.waitFor(h)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(a=>this.recalculateAndSaveOverlays(e,a))}getDocumentsMatchingQuery(e,n,a,s){return function(h){return xe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,a,s):this.getDocumentsMatchingCollectionQuery(e,n,a,s)}getNextDocuments(e,n,a,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,a,s).next(l=>{const h=s-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,a.largestBatchId,s-l.size):ae.resolve(bs());let d=Lu,g=l;return h.next(m=>ae.forEach(m,(_,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),l.get(_)?ae.resolve():this.remoteDocumentCache.getEntry(e,_).next(b=>{g=g.insert(_,b)}))).next(()=>this.populateOverlays(e,m,l)).next(()=>this.computeViews(e,g,m,Be())).next(_=>({batchId:d,changes:GE(_)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new xe(n)).next(a=>{let s=wu();return a.isFoundDocument()&&(s=s.insert(a.key,a)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,a,s){const l=n.collectionGroup;let h=wu();return this.indexManager.getCollectionParents(e,l).next(d=>ae.forEach(d,g=>{const m=function(E,b){return new $f(b,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(n,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,m,a,s).next(_=>{_.forEach((E,b)=>{h=h.insert(E,b)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,n,a,s){let l;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,a.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,a,l,s))).next(h=>{l.forEach((g,m)=>{const _=m.getKey();h.get(_)===null&&(h=h.insert(_,_n.newInvalidDocument(_)))});let d=wu();return h.forEach((g,m)=>{const _=l.get(g);_!==void 0&&ku(_.mutation,m,qn.empty(),Ht.now()),Yf(n,m)&&(d=d.insert(g,m))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w5{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return ae.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Kr(s.createTime)}}(n)),ae.resolve()}getNamedQuery(e,n){return ae.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:c5(s.bundledQuery),readTime:Kr(s.readTime)}}(n)),ae.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b5{constructor(){this.overlays=new bt(xe.comparator),this.Qr=new Map}getOverlay(e,n){return ae.resolve(this.overlays.get(n))}getOverlays(e,n){const a=bs();return ae.forEach(n,s=>this.getOverlay(e,s).next(l=>{l!==null&&a.set(s,l)})).next(()=>a)}saveOverlays(e,n,a){return a.forEach((s,l)=>{this.bt(e,n,l)}),ae.resolve()}removeOverlaysForBatchId(e,n,a){const s=this.Qr.get(a);return s!==void 0&&(s.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(a)),ae.resolve()}getOverlaysForCollection(e,n,a){const s=bs(),l=n.length+1,h=new xe(n.child("")),d=this.overlays.getIteratorFrom(h);for(;d.hasNext();){const g=d.getNext().value,m=g.getKey();if(!n.isPrefixOf(m.path))break;m.path.length===l&&g.largestBatchId>a&&s.set(g.getKey(),g)}return ae.resolve(s)}getOverlaysForCollectionGroup(e,n,a,s){let l=new bt((m,_)=>m-_);const h=this.overlays.getIterator();for(;h.hasNext();){const m=h.getNext().value;if(m.getKey().getCollectionGroup()===n&&m.largestBatchId>a){let _=l.get(m.largestBatchId);_===null&&(_=bs(),l=l.insert(m.largestBatchId,_)),_.set(m.getKey(),m)}}const d=bs(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((m,_)=>d.set(m,_)),!(d.size()>=s)););return ae.resolve(d)}bt(e,n,a){const s=this.overlays.get(a.key);if(s!==null){const h=this.Qr.get(s.largestBatchId).delete(a.key);this.Qr.set(s.largestBatchId,h)}this.overlays=this.overlays.insert(a.key,new BD(n,a));let l=this.Qr.get(n);l===void 0&&(l=Be(),this.Qr.set(n,l)),this.Qr.set(n,l.add(a.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E5{constructor(){this.sessionToken=dn.EMPTY_BYTE_STRING}getSessionToken(e){return ae.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ae.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.$r=new Ft(Wt.Ur),this.Kr=new Ft(Wt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const a=new Wt(e,n);this.$r=this.$r.add(a),this.Kr=this.Kr.add(a)}Gr(e,n){e.forEach(a=>this.addReference(a,n))}removeReference(e,n){this.zr(new Wt(e,n))}jr(e,n){e.forEach(a=>this.removeReference(a,n))}Hr(e){const n=new xe(new vt([])),a=new Wt(n,e),s=new Wt(n,e+1),l=[];return this.Kr.forEachInRange([a,s],h=>{this.zr(h),l.push(h.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new xe(new vt([])),a=new Wt(n,e),s=new Wt(n,e+1);let l=Be();return this.Kr.forEachInRange([a,s],h=>{l=l.add(h.key)}),l}containsKey(e){const n=new Wt(e,0),a=this.$r.firstAfterOrEqual(n);return a!==null&&e.isEqual(a.key)}}class Wt{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return xe.comparator(e.key,n.key)||Me(e.Zr,n.Zr)}static Wr(e,n){return Me(e.Zr,n.Zr)||xe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new Ft(Wt.Ur)}checkEmpty(e){return ae.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,a,s){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new zD(l,n,a,s);this.mutationQueue.push(h);for(const d of s)this.Xr=this.Xr.add(new Wt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ae.resolve(h)}lookupMutationBatch(e,n){return ae.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const a=n+1,s=this.ti(a),l=s<0?0:s;return ae.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ae.resolve(this.mutationQueue.length===0?fy:this.nr-1)}getAllMutationBatches(e){return ae.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const a=new Wt(n,0),s=new Wt(n,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([a,s],h=>{const d=this.ei(h.Zr);l.push(d)}),ae.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,n){let a=new Ft(Me);return n.forEach(s=>{const l=new Wt(s,0),h=new Wt(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,h],d=>{a=a.add(d.Zr)})}),ae.resolve(this.ni(a))}getAllMutationBatchesAffectingQuery(e,n){const a=n.path,s=a.length+1;let l=a;xe.isDocumentKey(l)||(l=l.child(""));const h=new Wt(new xe(l),0);let d=new Ft(Me);return this.Xr.forEachWhile(g=>{const m=g.key.path;return!!a.isPrefixOf(m)&&(m.length===s&&(d=d.add(g.Zr)),!0)},h),ae.resolve(this.ni(d))}ni(e){const n=[];return e.forEach(a=>{const s=this.ei(a);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Je(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Xr;return ae.forEach(n.mutations,s=>{const l=new Wt(s.key,n.batchId);return a=a.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=a})}sr(e){}containsKey(e,n){const a=new Wt(n,0),s=this.Xr.firstAfterOrEqual(a);return ae.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,ae.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S5{constructor(e){this.ii=e,this.docs=function(){return new bt(xe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const a=n.key,s=this.docs.get(a),l=s?s.size:0,h=this.ii(n);return this.docs=this.docs.insert(a,{document:n.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const a=this.docs.get(n);return ae.resolve(a?a.document.mutableCopy():_n.newInvalidDocument(n))}getEntries(e,n){let a=Ui();return n.forEach(s=>{const l=this.docs.get(s);a=a.insert(s,l?l.document.mutableCopy():_n.newInvalidDocument(s))}),ae.resolve(a)}getDocumentsMatchingQuery(e,n,a,s){let l=Ui();const h=n.path,d=new xe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(d);for(;g.hasNext();){const{key:m,value:{document:_}}=g.getNext();if(!h.isPrefixOf(m.path))break;m.path.length>h.length+1||JI(ZI(_),a)<=0||(s.has(_.key)||Yf(n,_))&&(l=l.insert(_.key,_.mutableCopy()))}return ae.resolve(l)}getAllFromCollectionGroup(e,n,a,s){Te(9500)}si(e,n){return ae.forEach(this.docs,a=>n(a))}newChangeBuffer(e){return new A5(this)}getSize(e){return ae.resolve(this.size)}}class A5 extends v5{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((a,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(a)}),ae.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C5{constructor(e){this.persistence=e,this.oi=new ks(n=>gy(n),my),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this._i=0,this.ai=new by,this.targetCount=0,this.ui=tl.cr()}forEachTarget(e,n){return this.oi.forEach((a,s)=>n(s)),ae.resolve()}getLastRemoteSnapshotVersion(e){return ae.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ae.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),ae.resolve(this.highestTargetId)}setTargetsMetadata(e,n,a){return a&&(this.lastRemoteSnapshotVersion=a),n>this._i&&(this._i=n),ae.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new tl(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,ae.resolve()}updateTargetData(e,n){return this.Tr(n),ae.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,ae.resolve()}removeTargets(e,n,a){let s=0;const l=[];return this.oi.forEach((h,d)=>{d.sequenceNumber<=n&&a.get(d.targetId)===null&&(this.oi.delete(h),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)}),ae.waitFor(l).next(()=>s)}getTargetCount(e){return ae.resolve(this.targetCount)}getTargetData(e,n){const a=this.oi.get(n)||null;return ae.resolve(a)}addMatchingKeys(e,n,a){return this.ai.Gr(n,a),ae.resolve()}removeMatchingKeys(e,n,a){this.ai.jr(n,a);const s=this.persistence.referenceDelegate,l=[];return s&&n.forEach(h=>{l.push(s.markPotentiallyOrphaned(e,h))}),ae.waitFor(l)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),ae.resolve()}getMatchingKeysForTargetId(e,n){const a=this.ai.Yr(n);return ae.resolve(a)}containsKey(e,n){return ae.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,n){this.ci={},this.overlays={},this.li=new Hf(0),this.hi=!1,this.hi=!0,this.Pi=new E5,this.referenceDelegate=e(this),this.Ti=new C5(this),this.indexManager=new h5,this.remoteDocumentCache=function(s){return new S5(s)}(a=>this.referenceDelegate.Ii(a)),this.serializer=new u5(n),this.Ei=new w5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new b5,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let a=this.ci[e.toKey()];return a||(a=new T5(n,this.referenceDelegate),this.ci[e.toKey()]=a),a}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,a){de("MemoryPersistence","Starting transaction:",e);const s=new R5(this.li.next());return this.referenceDelegate.di(),a(s).next(l=>this.referenceDelegate.Ai(s).next(()=>l)).toPromise().then(l=>(s.raiseOnCommittedEvent(),l))}Ri(e,n){return ae.or(Object.values(this.ci).map(a=>()=>a.containsKey(e,n)))}}class R5 extends tD{constructor(e){super(),this.currentSequenceNumber=e}}class Ey{constructor(e){this.persistence=e,this.Vi=new by,this.mi=null}static fi(e){return new Ey(e)}get gi(){if(this.mi)return this.mi;throw Te(60996)}addReference(e,n,a){return this.Vi.addReference(a,n),this.gi.delete(a.toString()),ae.resolve()}removeReference(e,n,a){return this.Vi.removeReference(a,n),this.gi.add(a.toString()),ae.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),ae.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(l=>this.gi.add(l.toString()))}).next(()=>a.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ae.forEach(this.gi,a=>{const s=xe.fromPath(a);return this.pi(e,s).next(l=>{l||n.removeEntry(s,Re.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(a=>{a?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return ae.or([()=>ae.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Af{constructor(e,n){this.persistence=e,this.yi=new ks(a=>iD(a.path),(a,s)=>a.isEqual(s)),this.garbageCollector=y5(this,n)}static fi(e,n){return new Af(e,n)}di(){}Ai(e){return ae.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(a=>n.next(s=>a+s))}Sr(e){let n=0;return this.yr(e,a=>{n++}).next(()=>n)}yr(e,n){return ae.forEach(this.yi,(a,s)=>this.Dr(e,a,s).next(l=>l?ae.resolve():n(s)))}removeTargets(e,n,a){return this.persistence.getTargetCache().removeTargets(e,n,a)}removeOrphanedDocuments(e,n){let a=0;const s=this.persistence.getRemoteDocumentCache(),l=s.newChangeBuffer();return s.si(e,h=>this.Dr(e,h,n).next(d=>{d||(a++,l.removeEntry(h,Re.min()))})).next(()=>l.apply(e)).next(()=>a)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),ae.resolve()}removeTarget(e,n){const a=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,a)}addReference(e,n,a){return this.yi.set(a,e.currentSequenceNumber),ae.resolve()}removeReference(e,n,a){return this.yi.set(a,e.currentSequenceNumber),ae.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),ae.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Jh(e.data.value)),n}Dr(e,n,a){return ae.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return ae.resolve(s!==void 0&&s>a)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n,a,s){this.targetId=e,this.fromCache=n,this.ds=a,this.As=s}static Rs(e,n){let a=Be(),s=Be();for(const l of n.docChanges)switch(l.type){case 0:a=a.add(l.doc.key);break;case 1:s=s.add(l.doc.key)}return new Ty(e,n.fromCache,a,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D5{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return TR()?8:nD(xn())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,a,s){const l={result:null};return this.ws(e,n).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.Ss(e,n,s,a).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new I5;return this.bs(e,n,h).next(d=>{if(l.result=d,this.fs)return this.Ds(e,n,h,d.size)})}).next(()=>l.result)}Ds(e,n,a,s){return a.documentReadCount<this.gs?(Do()<=ze.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",Oo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),ae.resolve()):(Do()<=ze.DEBUG&&de("QueryEngine","Query:",Oo(n),"scans",a.documentReadCount,"local documents and returns",s,"documents as results."),a.documentReadCount>this.ps*s?(Do()<=ze.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",Oo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qr(n))):ae.resolve())}ws(e,n){if(Mx(n))return ae.resolve(null);let a=qr(n);return this.indexManager.getIndexType(e,a).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=dm(n,null,"F"),a=qr(n)),this.indexManager.getDocumentsMatchingTarget(e,a).next(l=>{const h=Be(...l);return this.ys.getDocuments(e,h).next(d=>this.indexManager.getMinOffset(e,a).next(g=>{const m=this.vs(n,d);return this.Cs(n,m,h,g.readTime)?this.ws(e,dm(n,null,"F")):this.Fs(e,m,n,g)}))})))}Ss(e,n,a,s){return Mx(n)||s.isEqual(Re.min())?ae.resolve(null):this.ys.getDocuments(e,a).next(l=>{const h=this.vs(n,l);return this.Cs(n,h,a,s)?ae.resolve(null):(Do()<=ze.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Oo(n)),this.Fs(e,h,n,WI(s,Lu)).next(d=>d))})}vs(e,n){let a=new Ft(HE(e));return n.forEach((s,l)=>{Yf(e,l)&&(a=a.add(l))}),a}Cs(e,n,a,s){if(e.limit===null)return!1;if(a.size!==n.size)return!0;const l=e.limitType==="F"?n.last():n.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(s)>0)}bs(e,n,a){return Do()<=ze.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",Oo(n)),this.ys.getDocumentsMatchingQuery(e,n,Oa.min(),a)}Fs(e,n,a,s){return this.ys.getDocumentsMatchingQuery(e,a,s).next(l=>(n.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="LocalStore",O5=3e8;class k5{constructor(e,n,a,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new bt(Me),this.Os=new ks(l=>gy(l),my),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(a)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new x5(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function N5(t,e,n,a){return new k5(t,e,n,a)}async function fT(t,e){const n=Ie(t);return await n.persistence.runTransaction("Handle user change","readonly",a=>{let s;return n.mutationQueue.getAllMutationBatches(a).next(l=>(s=l,n.Ls(e),n.mutationQueue.getAllMutationBatches(a))).next(l=>{const h=[],d=[];let g=Be();for(const m of s){h.push(m.batchId);for(const _ of m.mutations)g=g.add(_.key)}for(const m of l){d.push(m.batchId);for(const _ of m.mutations)g=g.add(_.key)}return n.localDocuments.getDocuments(a,g).next(m=>({ks:m,removedBatchIds:h,addedBatchIds:d}))})})}function M5(t,e){const n=Ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const s=e.batch.keys(),l=n.Bs.newChangeBuffer({trackRemovals:!0});return function(d,g,m,_){const E=m.batch,b=E.keys();let C=ae.resolve();return b.forEach(O=>{C=C.next(()=>_.getEntry(g,O)).next(z=>{const k=m.docVersions.get(O);Je(k!==null,48541),z.version.compareTo(k)<0&&(E.applyToRemoteDocument(z,m),z.isValidDocument()&&(z.setReadTime(m.commitVersion),_.addEntry(z)))})}),C.next(()=>d.mutationQueue.removeMutationBatch(g,E))}(n,a,e,l).next(()=>l.apply(a)).next(()=>n.mutationQueue.performConsistencyCheck(a)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(a,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(d){let g=Be();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(g=g.add(d.batch.mutations[m].key));return g}(e))).next(()=>n.localDocuments.getDocuments(a,s))})}function dT(t){const e=Ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function P5(t,e){const n=Ie(t),a=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const d=[];e.targetChanges.forEach((_,E)=>{const b=s.get(E);if(!b)return;d.push(n.Ti.removeMatchingKeys(l,_.removedDocuments,E).next(()=>n.Ti.addMatchingKeys(l,_.addedDocuments,E)));let C=b.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?C=C.withResumeToken(dn.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):_.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(_.resumeToken,a)),s=s.insert(E,C),function(z,k,V){return z.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=O5?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(b,C,_)&&d.push(n.Ti.updateTargetData(l,C))});let g=Ui(),m=Be();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&d.push(n.persistence.referenceDelegate.updateLimboDocument(l,_))}),d.push(j5(l,h,e.documentUpdates).next(_=>{g=_.qs,m=_.Qs})),!a.isEqual(Re.min())){const _=n.Ti.getLastRemoteSnapshotVersion(l).next(E=>n.Ti.setTargetsMetadata(l,l.currentSequenceNumber,a));d.push(_)}return ae.waitFor(d).next(()=>h.apply(l)).next(()=>n.localDocuments.getLocalViewOfDocuments(l,g,m)).next(()=>g)}).then(l=>(n.xs=s,l))}function j5(t,e,n){let a=Be(),s=Be();return n.forEach(l=>a=a.add(l)),e.getEntries(t,a).next(l=>{let h=Ui();return n.forEach((d,g)=>{const m=l.get(d);g.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),g.isNoDocument()&&g.version.isEqual(Re.min())?(e.removeEntry(d,g.readTime),h=h.insert(d,g)):!m.isValidDocument()||g.version.compareTo(m.version)>0||g.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(g),h=h.insert(d,g)):de(Sy,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",g.version)}),{qs:h,Qs:s}})}function V5(t,e){const n=Ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",a=>(e===void 0&&(e=fy),n.mutationQueue.getNextMutationBatchAfterBatchId(a,e)))}function L5(t,e){const n=Ie(t);return n.persistence.runTransaction("Allocate target","readwrite",a=>{let s;return n.Ti.getTargetData(a,e).next(l=>l?(s=l,ae.resolve(s)):n.Ti.allocateTargetId(a).next(h=>(s=new Ta(e,h,"TargetPurposeListen",a.currentSequenceNumber),n.Ti.addTargetData(a,s).next(()=>s))))}).then(a=>{const s=n.xs.get(a.targetId);return(s===null||a.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(a.targetId,a),n.Os.set(e,a.targetId)),a})}async function vm(t,e,n){const a=Ie(t),s=a.xs.get(e),l=n?"readwrite":"readwrite-primary";try{n||await a.persistence.runTransaction("Release target",l,h=>a.persistence.referenceDelegate.removeTarget(h,s))}catch(h){if(!fl(h))throw h;de(Sy,`Failed to update sequence numbers for target ${e}: ${h}`)}a.xs=a.xs.remove(e),a.Os.delete(s.target)}function Yx(t,e,n){const a=Ie(t);let s=Re.min(),l=Be();return a.persistence.runTransaction("Execute query","readwrite",h=>function(g,m,_){const E=Ie(g),b=E.Os.get(_);return b!==void 0?ae.resolve(E.xs.get(b)):E.Ti.getTargetData(m,_)}(a,h,qr(e)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,a.Ti.getMatchingKeysForTargetId(h,d.targetId).next(g=>{l=g})}).next(()=>a.Ms.getDocumentsMatchingQuery(h,e,n?s:Re.min(),n?l:Be())).next(d=>(U5(a,TD(e),d),{documents:d,$s:l})))}function U5(t,e,n){let a=t.Ns.get(e)||Re.min();n.forEach((s,l)=>{l.readTime.compareTo(a)>0&&(a=l.readTime)}),t.Ns.set(e,a)}class Kx{constructor(){this.activeTargetIds=DD()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class z5{constructor(){this.xo=new Kx,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,a){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,a){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Kx,Promise.resolve()}handleUserChange(e,n,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B5{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx="ConnectivityMonitor";class Xx{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){de(Qx,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){de(Qx,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lh=null;function _m(){return Lh===null?Lh=function(){return 268435456+Math.round(2147483648*Math.random())}():Lh++,"0x"+Lh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="RestConnection",H5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class F5{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${a}/databases/${s}`,this.Go=this.databaseId.database===_f?`project_id=${a}`:`project_id=${a}&database_id=${s}`}zo(e,n,a,s,l){const h=_m(),d=this.jo(e,n.toUriEncodedString());de(Og,`Sending RPC '${e}' ${h}:`,d,a);const g={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(g,s,l);const{host:m}=new URL(d),_=Xu(m);return this.Jo(e,d,g,a,_).then(E=>(de(Og,`Received RPC '${e}' ${h}: `,E),E),E=>{throw Xo(Og,`RPC '${e}' ${h} failed with error: `,E,"url: ",d,"request:",a),E})}Yo(e,n,a,s,l,h){return this.zo(e,n,a,s,l)}Ho(e,n,a){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,l)=>e[l]=s),a&&a.headers.forEach((s,l)=>e[l]=s)}jo(e,n){const a=H5[e];return`${this.Ko}/v1/${n}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G5{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="WebChannelConnection";class $5 extends F5{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,a,s,l){const h=_m();return new Promise((d,g)=>{const m=new mE;m.setWithCredentials(!0),m.listenOnce(yE.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Zh.NO_ERROR:const E=m.getResponseJson();de(yn,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(E)),d(E);break;case Zh.TIMEOUT:de(yn,`RPC '${e}' ${h} timed out`),g(new _e(oe.DEADLINE_EXCEEDED,"Request time out"));break;case Zh.HTTP_ERROR:const b=m.getStatus();if(de(yn,`RPC '${e}' ${h} failed with status:`,b,"response text:",m.getResponseText()),b>0){let C=m.getResponseJson();Array.isArray(C)&&(C=C[0]);const O=C==null?void 0:C.error;if(O&&O.status&&O.message){const z=function(V){const B=V.toLowerCase().replace(/_/g,"-");return Object.values(oe).indexOf(B)>=0?B:oe.UNKNOWN}(O.status);g(new _e(z,O.message))}else g(new _e(oe.UNKNOWN,"Server responded with status "+m.getStatus()))}else g(new _e(oe.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{l_:e,streamId:h,h_:m.getLastErrorCode(),P_:m.getLastError()})}}finally{de(yn,`RPC '${e}' ${h} completed.`)}});const _=JSON.stringify(s);de(yn,`RPC '${e}' ${h} sending request:`,s),m.send(n,"POST",_,a,15)})}T_(e,n,a){const s=_m(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=xE(),d=_E(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(g.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Ho(g.initMessageHeaders,n,a),g.encodeInitMessageHeaders=!0;const _=l.join("");de(yn,`Creating RPC '${e}' stream ${s}: ${_}`,g);const E=h.createWebChannel(_,g);let b=!1,C=!1;const O=new G5({Zo:k=>{C?de(yn,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(b||(de(yn,`Opening RPC '${e}' stream ${s} transport.`),E.open(),b=!0),de(yn,`RPC '${e}' stream ${s} sending:`,k),E.send(k))},Xo:()=>E.close()}),z=(k,V,B)=>{k.listen(V,K=>{try{B(K)}catch(J){setTimeout(()=>{throw J},0)}})};return z(E,xu.EventType.OPEN,()=>{C||(de(yn,`RPC '${e}' stream ${s} transport opened.`),O.__())}),z(E,xu.EventType.CLOSE,()=>{C||(C=!0,de(yn,`RPC '${e}' stream ${s} transport closed`),O.u_())}),z(E,xu.EventType.ERROR,k=>{C||(C=!0,Xo(yn,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),O.u_(new _e(oe.UNAVAILABLE,"The operation could not be completed")))}),z(E,xu.EventType.MESSAGE,k=>{var V;if(!C){const B=k.data[0];Je(!!B,16349);const K=B,J=(K==null?void 0:K.error)||((V=K[0])===null||V===void 0?void 0:V.error);if(J){de(yn,`RPC '${e}' stream ${s} received error:`,J);const re=J.status;let ce=function(I){const j=Pt[I];if(j!==void 0)return eT(j)}(re),D=J.message;ce===void 0&&(ce=oe.INTERNAL,D="Unknown error status: "+re+" with message "+J.message),C=!0,O.u_(new _e(ce,D)),E.close()}else de(yn,`RPC '${e}' stream ${s} received:`,B),O.c_(B)}}),z(d,vE.STAT_EVENT,k=>{k.stat===om.PROXY?de(yn,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===om.NOPROXY&&de(yn,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.a_()},0),O}}function kg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t){return new QD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n,a=1e3,s=1.5,l=6e4){this.xi=e,this.timerId=n,this.I_=a,this.E_=s,this.d_=l,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),a=Math.max(0,Date.now()-this.V_),s=Math.max(0,n-a);s>0&&de("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${a} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx="PersistentStream";class gT{constructor(e,n,a,s,l,h,d,g){this.xi=e,this.y_=a,this.w_=s,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=d,this.listener=g,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new pT(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===oe.RESOURCE_EXHAUSTED?(Li(n.toString()),Li("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===oe.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,s])=>{this.S_===n&&this.K_(a,s)},a=>{e(()=>{const s=new _e(oe.UNKNOWN,"Fetching auth token failed: "+a.message);return this.W_(s)})})}K_(e,n){const a=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{a(()=>this.listener.e_())}),this.stream.n_(()=>{a(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{a(()=>this.W_(s))}),this.stream.onMessage(s=>{a(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return de(Wx,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(de(Wx,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class q5 extends gT{constructor(e,n,a,s,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,a,s,h),this.serializer=l}G_(e,n){return this.connection.T_("Listen",e,n)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const n=ZD(this.serializer,e),a=function(l){if(!("targetChange"in l))return Re.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Re.min():h.readTime?Kr(h.readTime):Re.min()}(e);return this.listener.j_(n,a)}H_(e){const n={};n.database=ym(this.serializer),n.addTarget=function(l,h){let d;const g=h.target;if(d=fm(g)?{documents:t5(l,g)}:{query:n5(l,g).gt},d.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){d.resumeToken=rT(l,h.resumeToken);const m=pm(l,h.expectedCount);m!==null&&(d.expectedCount=m)}else if(h.snapshotVersion.compareTo(Re.min())>0){d.readTime=Sf(l,h.snapshotVersion.toTimestamp());const m=pm(l,h.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const a=i5(this.serializer,e);a&&(n.labels=a),this.L_(n)}J_(e){const n={};n.database=ym(this.serializer),n.removeTarget=e,this.L_(n)}}class Y5 extends gT{constructor(e,n,a,s,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,a,s,h),this.serializer=l}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return Je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Je(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=e5(e.writeResults,e.commitTime),a=Kr(e.commitTime);return this.listener.ea(a,n)}ta(){const e={};e.database=ym(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(a=>JD(this.serializer,a))};this.L_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K5{}class Q5 extends K5{constructor(e,n,a,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=a,this.serializer=s,this.na=!1}ra(){if(this.na)throw new _e(oe.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,a,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.zo(e,gm(n,a),s,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===oe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new _e(oe.UNKNOWN,l.toString())})}Yo(e,n,a,s,l){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.Yo(e,gm(n,a),s,h,d,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===oe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new _e(oe.UNKNOWN,h.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class X5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Li(n),this.oa=!1):de("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="RemoteStore";class W5{constructor(e,n,a,s,l){this.localStore=e,this.datastore=n,this.asyncQueue=a,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=l,this.Ea.No(h=>{a.enqueueAndForget(async()=>{Ns(this)&&(de(Os,"Restarting streams for network reachability change."),await async function(g){const m=Ie(g);m.Ta.add(4),await ic(m),m.da.set("Unknown"),m.Ta.delete(4),await Zf(m)}(this))})}),this.da=new X5(a,s)}}async function Zf(t){if(Ns(t))for(const e of t.Ia)await e(!0)}async function ic(t){for(const e of t.Ia)await e(!1)}function mT(t,e){const n=Ie(t);n.Pa.has(e.targetId)||(n.Pa.set(e.targetId,e),Iy(n)?Ry(n):dl(n).M_()&&Cy(n,e))}function Ay(t,e){const n=Ie(t),a=dl(n);n.Pa.delete(e),a.M_()&&yT(n,e),n.Pa.size===0&&(a.M_()?a.N_():Ns(n)&&n.da.set("Unknown"))}function Cy(t,e){if(t.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}dl(t).H_(e)}function yT(t,e){t.Aa.Ke(e),dl(t).J_(e)}function Ry(t){t.Aa=new $D({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Pa.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),dl(t).start(),t.da._a()}function Iy(t){return Ns(t)&&!dl(t).F_()&&t.Pa.size>0}function Ns(t){return Ie(t).Ta.size===0}function vT(t){t.Aa=void 0}async function Z5(t){t.da.set("Online")}async function J5(t){t.Pa.forEach((e,n)=>{Cy(t,e)})}async function e8(t,e){vT(t),Iy(t)?(t.da.ca(e),Ry(t)):t.da.set("Unknown")}async function t8(t,e,n){if(t.da.set("Online"),e instanceof nT&&e.state===2&&e.cause)try{await async function(s,l){const h=l.cause;for(const d of l.targetIds)s.Pa.has(d)&&(await s.remoteSyncer.rejectListen(d,h),s.Pa.delete(d),s.Aa.removeTarget(d))}(t,e)}catch(a){de(Os,"Failed to remove targets %s: %s ",e.targetIds.join(","),a),await Cf(t,a)}else if(e instanceof nf?t.Aa.Xe(e):e instanceof tT?t.Aa.ot(e):t.Aa.nt(e),!n.isEqual(Re.min()))try{const a=await dT(t.localStore);n.compareTo(a)>=0&&await function(l,h){const d=l.Aa.It(h);return d.targetChanges.forEach((g,m)=>{if(g.resumeToken.approximateByteSize()>0){const _=l.Pa.get(m);_&&l.Pa.set(m,_.withResumeToken(g.resumeToken,h))}}),d.targetMismatches.forEach((g,m)=>{const _=l.Pa.get(g);if(!_)return;l.Pa.set(g,_.withResumeToken(dn.EMPTY_BYTE_STRING,_.snapshotVersion)),yT(l,g);const E=new Ta(_.target,g,m,_.sequenceNumber);Cy(l,E)}),l.remoteSyncer.applyRemoteEvent(d)}(t,n)}catch(a){de(Os,"Failed to raise snapshot:",a),await Cf(t,a)}}async function Cf(t,e,n){if(!fl(e))throw e;t.Ta.add(1),await ic(t),t.da.set("Offline"),n||(n=()=>dT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{de(Os,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await Zf(t)})}function _T(t,e){return e().catch(n=>Cf(t,n,e))}async function Jf(t){const e=Ie(t),n=Pa(e);let a=e.ha.length>0?e.ha[e.ha.length-1].batchId:fy;for(;n8(e);)try{const s=await V5(e.localStore,a);if(s===null){e.ha.length===0&&n.N_();break}a=s.batchId,r8(e,s)}catch(s){await Cf(e,s)}xT(e)&&wT(e)}function n8(t){return Ns(t)&&t.ha.length<10}function r8(t,e){t.ha.push(e);const n=Pa(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function xT(t){return Ns(t)&&!Pa(t).F_()&&t.ha.length>0}function wT(t){Pa(t).start()}async function i8(t){Pa(t).ta()}async function a8(t){const e=Pa(t);for(const n of t.ha)e.Z_(n.mutations)}async function s8(t,e,n){const a=t.ha.shift(),s=_y.from(a,e,n);await _T(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Jf(t)}async function o8(t,e){e&&Pa(t).Y_&&await async function(a,s){if(function(h){return FD(h)&&h!==oe.ABORTED}(s.code)){const l=a.ha.shift();Pa(a).O_(),await _T(a,()=>a.remoteSyncer.rejectFailedWrite(l.batchId,s)),await Jf(a)}}(t,e),xT(t)&&wT(t)}async function Zx(t,e){const n=Ie(t);n.asyncQueue.verifyOperationInProgress(),de(Os,"RemoteStore received new credentials");const a=Ns(n);n.Ta.add(3),await ic(n),a&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await Zf(n)}async function l8(t,e){const n=Ie(t);e?(n.Ta.delete(2),await Zf(n)):e||(n.Ta.add(2),await ic(n),n.da.set("Unknown"))}function dl(t){return t.Ra||(t.Ra=function(n,a,s){const l=Ie(n);return l.ra(),new q5(a,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,s)}(t.datastore,t.asyncQueue,{e_:Z5.bind(null,t),n_:J5.bind(null,t),i_:e8.bind(null,t),j_:t8.bind(null,t)}),t.Ia.push(async e=>{e?(t.Ra.O_(),Iy(t)?Ry(t):t.da.set("Unknown")):(await t.Ra.stop(),vT(t))})),t.Ra}function Pa(t){return t.Va||(t.Va=function(n,a,s){const l=Ie(n);return l.ra(),new Y5(a,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:i8.bind(null,t),i_:o8.bind(null,t),X_:a8.bind(null,t),ea:s8.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await Jf(t)):(await t.Va.stop(),t.ha.length>0&&(de(Os,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n,a,s,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=a,this.op=s,this.removalCallback=l,this.deferred=new Ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,a,s,l){const h=Date.now()+a,d=new Dy(e,n,h,s,l);return d.start(a),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(oe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oy(t,e){if(Li("AsyncQueue",`${e}: ${t}`),fl(t))return new _e(oe.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{static emptySet(e){return new Ho(e.comparator)}constructor(e){this.comparator=e?(n,a)=>e(n,a)||xe.comparator(n.key,a.key):(n,a)=>xe.comparator(n.key,a.key),this.keyedMap=wu(),this.sortedSet=new bt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,a)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ho)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),a=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,l=a.getNext().key;if(!s.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const a=new Ho;return a.comparator=this.comparator,a.keyedMap=e,a.sortedSet=n,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(){this.ma=new bt(xe.comparator)}track(e){const n=e.doc.key,a=this.ma.get(n);a?e.type!==0&&a.type===3?this.ma=this.ma.insert(n,e):e.type===3&&a.type!==1?this.ma=this.ma.insert(n,{type:a.type,doc:e.doc}):e.type===2&&a.type===2?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):e.type===2&&a.type===0?this.ma=this.ma.insert(n,{type:0,doc:e.doc}):e.type===1&&a.type===0?this.ma=this.ma.remove(n):e.type===1&&a.type===2?this.ma=this.ma.insert(n,{type:1,doc:a.doc}):e.type===0&&a.type===1?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):Te(63341,{Vt:e,fa:a}):this.ma=this.ma.insert(n,e)}ga(){const e=[];return this.ma.inorderTraversal((n,a)=>{e.push(a)}),e}}class nl{constructor(e,n,a,s,l,h,d,g,m){this.query=e,this.docs=n,this.oldDocs=a,this.docChanges=s,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=d,this.excludesMetadataChanges=g,this.hasCachedResults=m}static fromInitialDocuments(e,n,a,s,l){const h=[];return n.forEach(d=>{h.push({type:0,doc:d})}),new nl(e,n,Ho.emptySet(n),h,a,s,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,a=e.docChanges;if(n.length!==a.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==a[s].type||!n[s].doc.isEqual(a[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u8{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class c8{constructor(){this.queries=ew(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,a){const s=Ie(n),l=s.queries;s.queries=ew(),l.forEach((h,d)=>{for(const g of d.ya)g.onError(a)})})(this,new _e(oe.ABORTED,"Firestore shutting down"))}}function ew(){return new ks(t=>BE(t),qf)}async function bT(t,e){const n=Ie(t);let a=3;const s=e.query;let l=n.queries.get(s);l?!l.wa()&&e.Sa()&&(a=2):(l=new u8,a=e.Sa()?0:1);try{switch(a){case 0:l.pa=await n.onListen(s,!0);break;case 1:l.pa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(h){const d=Oy(h,`Initialization of query '${Oo(e.query)}' failed`);return void e.onError(d)}n.queries.set(s,l),l.ya.push(e),e.Da(n.onlineState),l.pa&&e.va(l.pa)&&ky(n)}async function ET(t,e){const n=Ie(t),a=e.query;let s=3;const l=n.queries.get(a);if(l){const h=l.ya.indexOf(e);h>=0&&(l.ya.splice(h,1),l.ya.length===0?s=e.Sa()?0:1:!l.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return n.queries.delete(a),n.onUnlisten(a,!0);case 1:return n.queries.delete(a),n.onUnlisten(a,!1);case 2:return n.onLastRemoteStoreUnlisten(a);default:return}}function h8(t,e){const n=Ie(t);let a=!1;for(const s of e){const l=s.query,h=n.queries.get(l);if(h){for(const d of h.ya)d.va(s)&&(a=!0);h.pa=s}}a&&ky(n)}function f8(t,e,n){const a=Ie(t),s=a.queries.get(e);if(s)for(const l of s.ya)l.onError(n);a.queries.delete(e)}function ky(t){t.ba.forEach(e=>{e.next()})}var xm,tw;(tw=xm||(xm={})).Ca="default",tw.Cache="cache";class TT{constructor(e,n,a){this.query=e,this.Fa=n,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=a||{}}va(e){if(!this.options.includeMetadataChanges){const a=[];for(const s of e.docChanges)s.type!==3&&a.push(s);e=new nl(e.query,e.docs,e.oldDocs,a,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),n=!0):this.Na(e,this.onlineState)&&(this.Ba(e),n=!0),this.xa=e,n}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let n=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),n=!0),n}Na(e,n){if(!e.fromCache||!this.Sa())return!0;const a=n!=="Offline";return(!this.options.La||!a)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const n=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ba(e){e=nl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==xm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.key=e}}class AT{constructor(e){this.key=e}}class d8{constructor(e,n){this.query=e,this.Ga=n,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Be(),this.mutatedKeys=Be(),this.Ha=HE(e),this.Ja=new Ho(this.Ha)}get Ya(){return this.Ga}Za(e,n){const a=n?n.Xa:new Jx,s=n?n.Ja:this.Ja;let l=n?n.mutatedKeys:this.mutatedKeys,h=s,d=!1;const g=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((_,E)=>{const b=s.get(_),C=Yf(this.query,E)?E:null,O=!!b&&this.mutatedKeys.has(b.key),z=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let k=!1;b&&C?b.data.isEqual(C.data)?O!==z&&(a.track({type:3,doc:C}),k=!0):this.eu(b,C)||(a.track({type:2,doc:C}),k=!0,(g&&this.Ha(C,g)>0||m&&this.Ha(C,m)<0)&&(d=!0)):!b&&C?(a.track({type:0,doc:C}),k=!0):b&&!C&&(a.track({type:1,doc:b}),k=!0,(g||m)&&(d=!0)),k&&(C?(h=h.add(C),l=z?l.add(_):l.delete(_)):(h=h.delete(_),l=l.delete(_)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const _=this.query.limitType==="F"?h.last():h.first();h=h.delete(_.key),l=l.delete(_.key),a.track({type:1,doc:_})}return{Ja:h,Xa:a,Cs:d,mutatedKeys:l}}eu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,a,s){const l=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const h=e.Xa.ga();h.sort((_,E)=>function(C,O){const z=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{Vt:k})}};return z(C)-z(O)}(_.type,E.type)||this.Ha(_.doc,E.doc)),this.tu(a),s=s!=null&&s;const d=n&&!s?this.nu():[],g=this.ja.size===0&&this.current&&!s?1:0,m=g!==this.za;return this.za=g,h.length!==0||m?{snapshot:new nl(this.query,e.Ja,l,h,e.mutatedKeys,g===0,m,!1,!!a&&a.resumeToken.approximateByteSize()>0),ru:d}:{ru:d}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new Jx,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(n=>this.Ga=this.Ga.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ga=this.Ga.delete(n)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Be(),this.Ja.forEach(a=>{this.iu(a.key)&&(this.ja=this.ja.add(a.key))});const n=[];return e.forEach(a=>{this.ja.has(a)||n.push(new AT(a))}),this.ja.forEach(a=>{e.has(a)||n.push(new ST(a))}),n}su(e){this.Ga=e.$s,this.ja=Be();const n=this.Za(e.documents);return this.applyChanges(n,!0)}ou(){return nl.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Ny="SyncEngine";class p8{constructor(e,n,a){this.query=e,this.targetId=n,this.view=a}}class g8{constructor(e){this.key=e,this._u=!1}}class m8{constructor(e,n,a,s,l,h){this.localStore=e,this.remoteStore=n,this.eventManager=a,this.sharedClientState=s,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.au={},this.uu=new ks(d=>BE(d),qf),this.cu=new Map,this.lu=new Set,this.hu=new bt(xe.comparator),this.Pu=new Map,this.Tu=new by,this.Iu={},this.Eu=new Map,this.du=tl.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function y8(t,e,n=!0){const a=kT(t);let s;const l=a.uu.get(e);return l?(a.sharedClientState.addLocalQueryTarget(l.targetId),s=l.view.ou()):s=await CT(a,e,n,!0),s}async function v8(t,e){const n=kT(t);await CT(n,e,!0,!1)}async function CT(t,e,n,a){const s=await L5(t.localStore,qr(e)),l=s.targetId,h=t.sharedClientState.addLocalQueryTarget(l,n);let d;return a&&(d=await _8(t,e,l,h==="current",s.resumeToken)),t.isPrimaryClient&&n&&mT(t.remoteStore,s),d}async function _8(t,e,n,a,s){t.Ru=(E,b,C)=>async function(z,k,V,B){let K=k.view.Za(V);K.Cs&&(K=await Yx(z.localStore,k.query,!1).then(({documents:D})=>k.view.Za(D,K)));const J=B&&B.targetChanges.get(k.targetId),re=B&&B.targetMismatches.get(k.targetId)!=null,ce=k.view.applyChanges(K,z.isPrimaryClient,J,re);return rw(z,k.targetId,ce.ru),ce.snapshot}(t,E,b,C);const l=await Yx(t.localStore,e,!0),h=new d8(e,l.$s),d=h.Za(l.documents),g=rc.createSynthesizedTargetChangeForCurrentChange(n,a&&t.onlineState!=="Offline",s),m=h.applyChanges(d,t.isPrimaryClient,g);rw(t,n,m.ru);const _=new p8(e,n,h);return t.uu.set(e,_),t.cu.has(n)?t.cu.get(n).push(e):t.cu.set(n,[e]),m.snapshot}async function x8(t,e,n){const a=Ie(t),s=a.uu.get(e),l=a.cu.get(s.targetId);if(l.length>1)return a.cu.set(s.targetId,l.filter(h=>!qf(h,e))),void a.uu.delete(e);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(s.targetId),a.sharedClientState.isActiveQueryTarget(s.targetId)||await vm(a.localStore,s.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(s.targetId),n&&Ay(a.remoteStore,s.targetId),wm(a,s.targetId)}).catch(hl)):(wm(a,s.targetId),await vm(a.localStore,s.targetId,!0))}async function w8(t,e){const n=Ie(t),a=n.uu.get(e),s=n.cu.get(a.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(a.targetId),Ay(n.remoteStore,a.targetId))}async function b8(t,e,n){const a=I8(t);try{const s=await function(h,d){const g=Ie(h),m=Ht.now(),_=d.reduce((C,O)=>C.add(O.key),Be());let E,b;return g.persistence.runTransaction("Locally write mutations","readwrite",C=>{let O=Ui(),z=Be();return g.Bs.getEntries(C,_).next(k=>{O=k,O.forEach((V,B)=>{B.isValidDocument()||(z=z.add(V))})}).next(()=>g.localDocuments.getOverlayedDocuments(C,O)).next(k=>{E=k;const V=[];for(const B of d){const K=LD(B,E.get(B.key).overlayedDocument);K!=null&&V.push(new Ua(B.key,K,ME(K.value.mapValue),Yr.exists(!0)))}return g.mutationQueue.addMutationBatch(C,m,V,d)}).next(k=>{b=k;const V=k.applyToLocalDocumentSet(E,z);return g.documentOverlayCache.saveOverlays(C,k.batchId,V)})}).then(()=>({batchId:b.batchId,changes:GE(E)}))}(a.localStore,e);a.sharedClientState.addPendingMutation(s.batchId),function(h,d,g){let m=h.Iu[h.currentUser.toKey()];m||(m=new bt(Me)),m=m.insert(d,g),h.Iu[h.currentUser.toKey()]=m}(a,s.batchId,n),await ac(a,s.changes),await Jf(a.remoteStore)}catch(s){const l=Oy(s,"Failed to persist write");n.reject(l)}}async function RT(t,e){const n=Ie(t);try{const a=await P5(n.localStore,e);e.targetChanges.forEach((s,l)=>{const h=n.Pu.get(l);h&&(Je(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?h._u=!0:s.modifiedDocuments.size>0?Je(h._u,14607):s.removedDocuments.size>0&&(Je(h._u,42227),h._u=!1))}),await ac(n,a,e)}catch(a){await hl(a)}}function nw(t,e,n){const a=Ie(t);if(a.isPrimaryClient&&n===0||!a.isPrimaryClient&&n===1){const s=[];a.uu.forEach((l,h)=>{const d=h.view.Da(e);d.snapshot&&s.push(d.snapshot)}),function(h,d){const g=Ie(h);g.onlineState=d;let m=!1;g.queries.forEach((_,E)=>{for(const b of E.ya)b.Da(d)&&(m=!0)}),m&&ky(g)}(a.eventManager,e),s.length&&a.au.j_(s),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function E8(t,e,n){const a=Ie(t);a.sharedClientState.updateQueryState(e,"rejected",n);const s=a.Pu.get(e),l=s&&s.key;if(l){let h=new bt(xe.comparator);h=h.insert(l,_n.newNoDocument(l,Re.min()));const d=Be().add(l),g=new Xf(Re.min(),new Map,new bt(Me),h,d);await RT(a,g),a.hu=a.hu.remove(l),a.Pu.delete(e),My(a)}else await vm(a.localStore,e,!1).then(()=>wm(a,e,n)).catch(hl)}async function T8(t,e){const n=Ie(t),a=e.batch.batchId;try{const s=await M5(n.localStore,e);DT(n,a,null),IT(n,a),n.sharedClientState.updateMutationState(a,"acknowledged"),await ac(n,s)}catch(s){await hl(s)}}async function S8(t,e,n){const a=Ie(t);try{const s=await function(h,d){const g=Ie(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let _;return g.mutationQueue.lookupMutationBatch(m,d).next(E=>(Je(E!==null,37113),_=E.keys(),g.mutationQueue.removeMutationBatch(m,E))).next(()=>g.mutationQueue.performConsistencyCheck(m)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(m,_,d)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,_)).next(()=>g.localDocuments.getDocuments(m,_))})}(a.localStore,e);DT(a,e,n),IT(a,e),a.sharedClientState.updateMutationState(e,"rejected",n),await ac(a,s)}catch(s){await hl(s)}}function IT(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function DT(t,e,n){const a=Ie(t);let s=a.Iu[a.currentUser.toKey()];if(s){const l=s.get(e);l&&(n?l.reject(n):l.resolve(),s=s.remove(e)),a.Iu[a.currentUser.toKey()]=s}}function wm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const a of t.cu.get(e))t.uu.delete(a),n&&t.au.Vu(a,n);t.cu.delete(e),t.isPrimaryClient&&t.Tu.Hr(e).forEach(a=>{t.Tu.containsKey(a)||OT(t,a)})}function OT(t,e){t.lu.delete(e.path.canonicalString());const n=t.hu.get(e);n!==null&&(Ay(t.remoteStore,n),t.hu=t.hu.remove(e),t.Pu.delete(n),My(t))}function rw(t,e,n){for(const a of n)a instanceof ST?(t.Tu.addReference(a.key,e),A8(t,a)):a instanceof AT?(de(Ny,"Document no longer in limbo: "+a.key),t.Tu.removeReference(a.key,e),t.Tu.containsKey(a.key)||OT(t,a.key)):Te(19791,{mu:a})}function A8(t,e){const n=e.key,a=n.path.canonicalString();t.hu.get(n)||t.lu.has(a)||(de(Ny,"New document in limbo: "+n),t.lu.add(a),My(t))}function My(t){for(;t.lu.size>0&&t.hu.size<t.maxConcurrentLimboResolutions;){const e=t.lu.values().next().value;t.lu.delete(e);const n=new xe(vt.fromString(e)),a=t.du.next();t.Pu.set(a,new g8(n)),t.hu=t.hu.insert(n,a),mT(t.remoteStore,new Ta(qr(yy(n.path)),a,"TargetPurposeLimboResolution",Hf.le))}}async function ac(t,e,n){const a=Ie(t),s=[],l=[],h=[];a.uu.isEmpty()||(a.uu.forEach((d,g)=>{h.push(a.Ru(g,e,n).then(m=>{var _;if((m||n)&&a.isPrimaryClient){const E=m?!m.fromCache:(_=n==null?void 0:n.targetChanges.get(g.targetId))===null||_===void 0?void 0:_.current;a.sharedClientState.updateQueryState(g.targetId,E?"current":"not-current")}if(m){s.push(m);const E=Ty.Rs(g.targetId,m);l.push(E)}}))}),await Promise.all(h),a.au.j_(s),await async function(g,m){const _=Ie(g);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>ae.forEach(m,b=>ae.forEach(b.ds,C=>_.persistence.referenceDelegate.addReference(E,b.targetId,C)).next(()=>ae.forEach(b.As,C=>_.persistence.referenceDelegate.removeReference(E,b.targetId,C)))))}catch(E){if(!fl(E))throw E;de(Sy,"Failed to update sequence numbers: "+E)}for(const E of m){const b=E.targetId;if(!E.fromCache){const C=_.xs.get(b),O=C.snapshotVersion,z=C.withLastLimboFreeSnapshotVersion(O);_.xs=_.xs.insert(b,z)}}}(a.localStore,l))}async function C8(t,e){const n=Ie(t);if(!n.currentUser.isEqual(e)){de(Ny,"User change. New user:",e.toKey());const a=await fT(n.localStore,e);n.currentUser=e,function(l,h){l.Eu.forEach(d=>{d.forEach(g=>{g.reject(new _e(oe.CANCELLED,h))})}),l.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,a.removedBatchIds,a.addedBatchIds),await ac(n,a.ks)}}function R8(t,e){const n=Ie(t),a=n.Pu.get(e);if(a&&a._u)return Be().add(a.key);{let s=Be();const l=n.cu.get(e);if(!l)return s;for(const h of l){const d=n.uu.get(h);s=s.unionWith(d.view.Ya)}return s}}function kT(t){const e=Ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=R8.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=E8.bind(null,e),e.au.j_=h8.bind(null,e.eventManager),e.au.Vu=f8.bind(null,e.eventManager),e}function I8(t){const e=Ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=T8.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=S8.bind(null,e),e}class Rf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wf(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return N5(this.persistence,new D5,e.initialUser,this.serializer)}yu(e){return new hT(Ey.fi,this.serializer)}pu(e){return new z5}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rf.provider={build:()=>new Rf};class D8 extends Rf{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){Je(this.persistence.referenceDelegate instanceof Af,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new g5(a,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?On.withCacheSize(this.cacheSizeBytes):On.DEFAULT;return new hT(a=>Af.fi(a,n),this.serializer)}}class bm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>nw(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=C8.bind(null,this.syncEngine),await l8(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new c8}()}createDatastore(e){const n=Wf(e.databaseInfo.databaseId),a=function(l){return new $5(l)}(e.databaseInfo);return function(l,h,d,g){return new Q5(l,h,d,g)}(e.authCredentials,e.appCheckCredentials,a,n)}createRemoteStore(e){return function(a,s,l,h,d){return new W5(a,s,l,h,d)}(this.localStore,this.datastore,e.asyncQueue,n=>nw(this.syncEngine,n,0),function(){return Xx.C()?new Xx:new B5}())}createSyncEngine(e,n){return function(s,l,h,d,g,m,_){const E=new m8(s,l,h,d,g,m);return _&&(E.Au=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const l=Ie(s);de(Os,"RemoteStore shutting down."),l.Ta.add(5),await ic(l),l.Ea.shutdown(),l.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}bm.provider={build:()=>new bm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Li("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="FirestoreClient";class O8{constructor(e,n,a,s,l){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=a,this.databaseInfo=s,this.user=vn.UNAUTHENTICATED,this.clientId=TE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(a,async h=>{de(ja,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(a,h=>(de(ja,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const a=Oy(n,"Failed to shutdown persistence");e.reject(a)}}),e.promise}}async function Ng(t,e){t.asyncQueue.verifyOperationInProgress(),de(ja,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let a=n.initialUser;t.setCredentialChangeListener(async s=>{a.isEqual(s)||(await fT(e.localStore,s),a=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function iw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await k8(t);de(ja,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(a=>Zx(e.remoteStore,a)),t.setAppCheckTokenChangeListener((a,s)=>Zx(e.remoteStore,s)),t._onlineComponents=e}async function k8(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){de(ja,"Using user provided OfflineComponentProvider");try{await Ng(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===oe.FAILED_PRECONDITION||s.code===oe.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Xo("Error using user provided cache. Falling back to memory cache: "+n),await Ng(t,new Rf)}}else de(ja,"Using default OfflineComponentProvider"),await Ng(t,new D8(void 0));return t._offlineComponents}async function MT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(de(ja,"Using user provided OnlineComponentProvider"),await iw(t,t._uninitializedComponentsProvider._online)):(de(ja,"Using default OnlineComponentProvider"),await iw(t,new bm))),t._onlineComponents}function N8(t){return MT(t).then(e=>e.syncEngine)}async function PT(t){const e=await MT(t),n=e.eventManager;return n.onListen=y8.bind(null,e.syncEngine),n.onUnlisten=x8.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=v8.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=w8.bind(null,e.syncEngine),n}function M8(t,e,n={}){const a=new Ni;return t.asyncQueue.enqueueAndForget(async()=>function(l,h,d,g,m){const _=new NT({next:b=>{_.Cu(),h.enqueueAndForget(()=>ET(l,E));const C=b.docs.has(d);!C&&b.fromCache?m.reject(new _e(oe.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&b.fromCache&&g&&g.source==="server"?m.reject(new _e(oe.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(b)},error:b=>m.reject(b)}),E=new TT(yy(d.path),_,{includeMetadataChanges:!0,La:!0});return bT(l,E)}(await PT(t),t.asyncQueue,e,n,a)),a.promise}function P8(t,e,n={}){const a=new Ni;return t.asyncQueue.enqueueAndForget(async()=>function(l,h,d,g,m){const _=new NT({next:b=>{_.Cu(),h.enqueueAndForget(()=>ET(l,E)),b.fromCache&&g.source==="server"?m.reject(new _e(oe.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(b)},error:b=>m.reject(b)}),E=new TT(d,_,{includeMetadataChanges:!0,La:!0});return bT(l,E)}(await PT(t),t.asyncQueue,e,n,a)),a.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t,e,n){if(!n)throw new _e(oe.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function j8(t,e,n,a){if(e===!0&&a===!0)throw new _e(oe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sw(t){if(!xe.isDocumentKey(t))throw new _e(oe.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ow(t){if(xe.isDocumentKey(t))throw new _e(oe.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Py(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Te(12329,{type:typeof t})}function zi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _e(oe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Py(t);throw new _e(oe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="firestore.googleapis.com",lw=!0;class uw{constructor(e){var n,a;if(e.host===void 0){if(e.ssl!==void 0)throw new _e(oe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=LT,this.ssl=lw}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:lw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<d5)throw new _e(oe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}j8("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jT((a=e.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new _e(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new _e(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new _e(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(a,s){return a.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ed{constructor(e,n,a,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=a,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _e(oe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _e(oe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new HI;switch(a.type){case"firstParty":return new qI(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new _e(oe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const a=aw.get(n);a&&(de("ComponentProvider","Removing Datastore"),aw.delete(n),a.terminate())}(this),Promise.resolve()}}function V8(t,e,n,a={}){var s;t=zi(t,ed);const l=Xu(e),h=t._getSettings(),d=Object.assign(Object.assign({},h),{emulatorOptions:t._getEmulatorOptions()}),g=`${e}:${n}`;l&&(Db(`https://${g}`),Ob("Firestore",!0)),h.host!==LT&&h.host!==g&&Xo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:a});if(!Da(m,d)&&(t._setSettings(m),a.mockUserToken)){let _,E;if(typeof a.mockUserToken=="string")_=a.mockUserToken,E=vn.MOCK_USER;else{_=gR(a.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const b=a.mockUserToken.sub||a.mockUserToken.user_id;if(!b)throw new _e(oe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new vn(b)}t._authCredentials=new FI(new bE(_,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n,a){this.converter=n,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new td(this.firestore,e,this._query)}}class Mn{constructor(e,n,a){this.converter=n,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ia(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mn(this.firestore,e,this._key)}}class Ia extends td{constructor(e,n,a){super(e,n,yy(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mn(this.firestore,null,new xe(e))}withConverter(e){return new Ia(this.firestore,e,this._path)}}function ti(t,e,...n){if(t=Pn(t),VT("collection","path",e),t instanceof ed){const a=vt.fromString(e,...n);return ow(a),new Ia(t,null,a)}{if(!(t instanceof Mn||t instanceof Ia))throw new _e(oe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(vt.fromString(e,...n));return ow(a),new Ia(t.firestore,null,a)}}function rl(t,e,...n){if(t=Pn(t),arguments.length===1&&(e=TE.newId()),VT("doc","path",e),t instanceof ed){const a=vt.fromString(e,...n);return sw(a),new Mn(t,null,new xe(a))}{if(!(t instanceof Mn||t instanceof Ia))throw new _e(oe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(vt.fromString(e,...n));return sw(a),new Mn(t.firestore,t instanceof Ia?t.converter:null,new xe(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="AsyncQueue";class hw{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new pT(this,"async_queue_retry"),this.ec=()=>{const a=kg();a&&de(cw,"Visibility state changed to "+a.visibilityState),this.C_.p_()},this.tc=e;const n=kg();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=kg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new Ni;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!fl(e))throw e;de(cw,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(a=>{throw this.Ju=a,this.Yu=!1,Li("INTERNAL UNHANDLED ERROR: ",fw(a)),a}).then(a=>(this.Yu=!1,a))));return this.tc=n,n}enqueueAfterDelay(e,n,a){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const s=Dy.createAndSchedule(this,e,n,a,l=>this.oc(l));return this.Hu.push(s),s}nc(){this.Ju&&Te(47125,{_c:fw(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,a)=>n.targetTimeMs-a.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function fw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class sc extends ed{constructor(e,n,a,s){super(e,n,a,s),this.type="firestore",this._queue=new hw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hw(e),this._firestoreClient=void 0,await e}}}function L8(t,e){const n=typeof t=="object"?t:Pb(),a=typeof t=="string"?t:_f,s=ty(n,"firestore").getImmediate({identifier:a});if(!s._initialized){const l=dR("firestore");l&&V8(s,...l)}return s}function jy(t){if(t._terminated)throw new _e(oe.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||U8(t),t._firestoreClient}function U8(t){var e,n,a;const s=t._freezeSettings(),l=function(d,g,m,_){return new oD(d,g,m,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,jT(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((a=s.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new O8(t._authCredentials,t._appCheckCredentials,t._queue,l,t._componentsProvider&&function(d){const g=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(g),_online:g}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this._byteString=e}static fromBase64String(e){try{return new il(dn.fromBase64String(e))}catch(n){throw new _e(oe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new il(dn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new _e(oe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new hn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new _e(oe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new _e(oe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(a,s){if(a.length!==s.length)return!1;for(let l=0;l<a.length;++l)if(a[l]!==s[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z8=/^__.*__$/;class B8{constructor(e,n,a){this.data=e,this.fieldMask=n,this.fieldTransforms=a}toMutation(e,n){return this.fieldMask!==null?new Ua(e,this.data,this.fieldMask,n,this.fieldTransforms):new nc(e,this.data,n,this.fieldTransforms)}}class UT{constructor(e,n,a){this.data=e,this.fieldMask=n,this.fieldTransforms=a}toMutation(e,n){return new Ua(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{hc:t})}}class id{constructor(e,n,a,s,l,h){this.settings=e,this.databaseId=n,this.serializer=a,this.ignoreUndefinedProperties=s,l===void 0&&this.Pc(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new id(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const a=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:a,Ec:!1});return s.dc(e),s}Ac(e){var n;const a=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:a,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return If(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(zT(this.hc)&&z8.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class H8{constructor(e,n,a){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=a||Wf(e)}gc(e,n,a,s=!1){return new id({hc:e,methodName:n,fc:a,path:hn.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function BT(t){const e=t._freezeSettings(),n=Wf(t._databaseId);return new H8(t._databaseId,!!e.ignoreUndefinedProperties,n)}function F8(t,e,n,a,s,l={}){const h=t.gc(l.merge||l.mergeFields?2:0,e,n,s);zy("Data must be an object, but it was:",h,a);const d=HT(a,h);let g,m;if(l.merge)g=new qn(h.fieldMask),m=h.fieldTransforms;else if(l.mergeFields){const _=[];for(const E of l.mergeFields){const b=Em(e,E,n);if(!h.contains(b))throw new _e(oe.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);GT(_,b)||_.push(b)}g=new qn(_),m=h.fieldTransforms.filter(E=>g.covers(E.field))}else g=null,m=h.fieldTransforms;return new B8(new kn(d),g,m)}class ad extends rd{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ad}}function G8(t,e,n){return new id({hc:3,fc:e.settings.fc,methodName:t._methodName,Ec:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Uy extends rd{constructor(e,n){super(e),this.yc=n}_toFieldTransform(e){const n=G8(this,e,!0),a=this.yc.map(l=>oc(l,n)),s=new el(a);return new MD(e.path,s)}isEqual(e){return e instanceof Uy&&Da(this.yc,e.yc)}}function $8(t,e,n,a){const s=t.gc(1,e,n);zy("Data must be an object, but it was:",s,a);const l=[],h=kn.empty();La(a,(g,m)=>{const _=By(e,g,n);m=Pn(m);const E=s.Ac(_);if(m instanceof ad)l.push(_);else{const b=oc(m,E);b!=null&&(l.push(_),h.set(_,b))}});const d=new qn(l);return new UT(h,d,s.fieldTransforms)}function q8(t,e,n,a,s,l){const h=t.gc(1,e,n),d=[Em(e,a,n)],g=[s];if(l.length%2!=0)throw new _e(oe.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<l.length;b+=2)d.push(Em(e,l[b])),g.push(l[b+1]);const m=[],_=kn.empty();for(let b=d.length-1;b>=0;--b)if(!GT(m,d[b])){const C=d[b];let O=g[b];O=Pn(O);const z=h.Ac(C);if(O instanceof ad)m.push(C);else{const k=oc(O,z);k!=null&&(m.push(C),_.set(C,k))}}const E=new qn(m);return new UT(_,E,h.fieldTransforms)}function oc(t,e){if(FT(t=Pn(t)))return zy("Unsupported field value:",e,t),HT(t,e);if(t instanceof rd)return function(a,s){if(!zT(s.hc))throw s.Vc(`${a._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${a._methodName}() is not currently supported inside arrays`);const l=a._toFieldTransform(s);l&&s.fieldTransforms.push(l)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(a,s){const l=[];let h=0;for(const d of a){let g=oc(d,s.Rc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}}(t,e)}return function(a,s){if((a=Pn(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return OD(s.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const l=Ht.fromDate(a);return{timestampValue:Sf(s.serializer,l)}}if(a instanceof Ht){const l=new Ht(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Sf(s.serializer,l)}}if(a instanceof Vy)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof il)return{bytesValue:rT(s.serializer,a._byteString)};if(a instanceof Mn){const l=s.databaseId,h=a.firestore._databaseId;if(!h.isEqual(l))throw s.Vc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:wy(a.firestore._databaseId||s.databaseId,a._key.path)}}if(a instanceof Ly)return function(h,d){return{mapValue:{fields:{[kE]:{stringValue:NE},[xf]:{arrayValue:{values:h.toArray().map(m=>{if(typeof m!="number")throw d.Vc("VectorValues must only contain numeric values.");return vy(d.serializer,m)})}}}}}}(a,s);throw s.Vc(`Unsupported field value: ${Py(a)}`)}(t,e)}function HT(t,e){const n={};return AE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):La(t,(a,s)=>{const l=oc(s,e.Ic(a));l!=null&&(n[a]=l)}),{mapValue:{fields:n}}}function FT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ht||t instanceof Vy||t instanceof il||t instanceof Mn||t instanceof rd||t instanceof Ly)}function zy(t,e,n){if(!FT(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const a=Py(n);throw a==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+a)}}function Em(t,e,n){if((e=Pn(e))instanceof nd)return e._internalPath;if(typeof e=="string")return By(t,e);throw If("Field path arguments must be of type string or ",t,!1,void 0,n)}const Y8=new RegExp("[~\\*/\\[\\]]");function By(t,e,n){if(e.search(Y8)>=0)throw If(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nd(...e.split("."))._internalPath}catch{throw If(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function If(t,e,n,a,s){const l=a&&!a.isEmpty(),h=s!==void 0;let d=`Function ${e}() called with invalid data`;n&&(d+=" (via `toFirestore()`)"),d+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${a}`),h&&(g+=` in document ${s}`),g+=")"),new _e(oe.INVALID_ARGUMENT,d+t+g)}function GT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n,a,s,l){this._firestore=e,this._userDataWriter=n,this._key=a,this._document=s,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new K8(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class K8 extends $T{data(){return super.data()}}function qT(t,e){return typeof e=="string"?By(t,e):e instanceof nd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q8(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new _e(oe.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class X8{convertValue(e,n="none"){switch(Ma(e)){case 0:return null;case 1:return e.booleanValue;case 2:return It(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Na(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const a={};return La(e,(s,l)=>{a[s]=this.convertValue(l,n)}),a}convertVectorValue(e){var n,a,s;const l=(s=(a=(n=e.fields)===null||n===void 0?void 0:n[xf].arrayValue)===null||a===void 0?void 0:a.values)===null||s===void 0?void 0:s.map(h=>It(h.doubleValue));return new Ly(l)}convertGeoPoint(e){return new Vy(It(e.latitude),It(e.longitude))}convertArray(e,n){return(e.values||[]).map(a=>this.convertValue(a,n))}convertServerTimestamp(e,n){switch(n){case"previous":const a=Gf(e);return a==null?null:this.convertValue(a,n);case"estimate":return this.convertTimestamp(Uu(e));default:return null}}convertTimestamp(e){const n=ka(e);return new Ht(n.seconds,n.nanos)}convertDocumentKey(e,n){const a=vt.fromString(e);Je(uT(a),9688,{name:e});const s=new zu(a.get(1),a.get(3)),l=new xe(a.popFirst(5));return s.isEqual(n)||Li(`Document ${l} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W8(t,e,n){let a;return a=t?t.toFirestore(e):e,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class YT extends $T{constructor(e,n,a,s,l,h){super(e,n,a,s,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const a=this._document.data.field(qT("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a,n.serverTimestamps)}}}class rf extends YT{data(e={}){return super.data(e)}}class Z8{constructor(e,n,a,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Eu(s.hasPendingWrites,s.fromCache),this.query=a}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(a=>{e.call(n,new rf(this._firestore,this._userDataWriter,a.key,a,new Eu(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _e(oe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,l){if(s._snapshot.oldDocs.isEmpty()){let h=0;return s._snapshot.docChanges.map(d=>{const g=new rf(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Eu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const g=new rf(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Eu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,_=-1;return d.type!==0&&(m=h.indexOf(d.doc.key),h=h.delete(d.doc.key)),d.type!==1&&(h=h.add(d.doc),_=h.indexOf(d.doc.key)),{type:J8(d.type),doc:g,oldIndex:m,newIndex:_}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function J8(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e9(t){t=zi(t,Mn);const e=zi(t.firestore,sc);return M8(jy(e),t._key).then(n=>t9(e,t,n))}class KT extends X8{constructor(e){super(),this.firestore=e}convertBytes(e){return new il(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mn(this.firestore,null,n)}}function Hi(t){t=zi(t,td);const e=zi(t.firestore,sc),n=jy(e),a=new KT(e);return Q8(t._query),P8(n,t._query).then(s=>new Z8(e,a,t,s))}function QT(t,e,n){t=zi(t,Mn);const a=zi(t.firestore,sc),s=W8(t.converter,e);return XT(a,[F8(BT(a),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Yr.none())])}function Hy(t,e,n,...a){t=zi(t,Mn);const s=zi(t.firestore,sc),l=BT(s);let h;return h=typeof(e=Pn(e))=="string"||e instanceof nd?q8(l,"updateDoc",t._key,e,n,a):$8(l,"updateDoc",t._key,e),XT(s,[h.toMutation(t._key,Yr.exists(!0))])}function XT(t,e){return function(a,s){const l=new Ni;return a.asyncQueue.enqueueAndForget(async()=>b8(await N8(a),s,l)),l.promise}(jy(t),e)}function t9(t,e,n){const a=n.docs.get(e._key),s=new KT(t);return new YT(t,s,e._key,a,new Eu(n.hasPendingWrites,n.fromCache),e.converter)}function n9(...t){return new Uy("arrayUnion",t)}(function(e,n=!0){(function(s){cl=s})(ll),Ko(new Rs("firestore",(a,{instanceIdentifier:s,options:l})=>{const h=a.getProvider("app").getImmediate(),d=new sc(new GI(a.getProvider("auth-internal")),new YI(h,a.getProvider("app-check-internal")),function(m,_){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new _e(oe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zu(m.options.projectId,_)}(h,s),h);return l=Object.assign({useFetchStreams:n},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Ca(yx,vx,e),Ca(yx,vx,"esm2017")})();const r9={apiKey:"AIzaSyCqsT2PZwd-01Ftgu8B3U5ALerQvZt6WYk",authDomain:"ogury-fdd42.firebaseapp.com",projectId:"ogury-fdd42",storageBucket:"ogury-fdd42.firebasestorage.app",messagingSenderId:"83570011303",appId:"1:83570011303:web:f1ecaeb62cee97211fff82",measurementId:"G-L36GWJ0B6D"},WT=Mb(r9);zI(WT);const Cn=L8(WT),i9=R.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`,a9=R.div`
  display: flex;
  padding: 0px 2px;
  align-items: center;
  gap: 2px;
  text-align: left;
  width: 100%;
`,s9=R.h2`
  color: #555;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.35px;
`,o9=R.span`
  color: #4284ff;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.35px;
`,l9=R.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 362px;
`,u9=R.div`
  display: flex;
  padding: 0 0 16px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #ebeef4;
  box-shadow: 0px 0px 20px 0px rgba(96, 99, 106, 0.1);
  background-color: #fff;
`,c9=R.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  padding: 16px;
`,h9=R.div`
  display: flex;
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  position: relative;
  background-color: #fff;
  overflow: hidden;
`,f9=R.img`
  width: 97px;
  height: 92px;
  position: absolute;
  left: -3px;
  top: -1px;
  object-fit: cover;
`,d9=R.div`
  display: flex;
  padding: 6px 0px;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 90px;
`,p9=R.div`
  display: flex;
  flex-direction: column;
`,g9=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,m9=R.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,y9=R.div`
  display: flex;
  align-items: center;
  gap: 2px;
  justify-content: flex-start;
`;R.div`
  display: flex;
  align-items: center;
`;R.div`
  display: flex;
  color: #797979;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.35px;
`;const v9=R.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: "12px auto 0";
  gap: 8px;
`,_9=R.div`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: #dfdfe1;
`,x9=()=>{const[t,e]=F.useState([]),[n,a]=F.useState(0),s=F.useRef(null);F.useEffect(()=>{(async()=>{try{const V=await Hi(ti(Cn,"gongu")),B=[];V.forEach(K=>{B.push({id:K.id,...K.data()})}),console.log("파이어베이스 들고 옴",B),e(B)}catch(V){console.error("Error fetching group buys:",V)}})()},[]);const l=[...t].sort((k,V)=>{var B,K;return(((B=k.createdAt)==null?void 0:B.seconds)||0)-(((K=V.createdAt)==null?void 0:K.seconds)||0)}).slice(3,7),h=()=>{a(k=>k===0?l.length-1:k-1)},d=()=>{a(k=>k===l.length-1?0:k+1)},g=F.useRef(null),m=F.useRef(null),_=F.useRef(!1),E=k=>{g.current=k.touches[0].clientX},b=k=>{if(g.current===null)return;const V=k.changedTouches[0].clientX,B=g.current-V;B>50?d():B<-50&&h(),g.current=null},C=k=>{_.current=!0,m.current=k.clientX},O=k=>{if(!_.current||m.current===null)return;const V=k.clientX,B=m.current-V;B>50?d():B<-50&&h(),_.current=!1,m.current=null},z=()=>{_.current=!1,m.current=null};return v.jsxs(i9,{children:[v.jsxs(a9,{children:[v.jsx(s9,{children:"진행중인 공구"}),v.jsx(o9,{children:l.length})]}),l.length===0?v.jsx("div",{style:{width:"100%",textAlign:"center",padding:"32px 0"},children:"진행중인 공구가 없습니다."}):v.jsx("div",{style:{width:"100%",overflow:"hidden",padding:"0 0 10px",position:"relative"},ref:s,onTouchStart:E,onTouchEnd:b,onMouseDown:C,onMouseUp:O,onMouseLeave:z,children:v.jsx("div",{style:{display:"flex",transition:"transform 0.4s cubic-bezier(.4,0,.2,1)",transform:`translateX(-${n*100}%)`,width:`${l.length*100}%`},children:l.map((k,V)=>{var B;return v.jsx("div",{style:{flex:"0 0 100%",maxWidth:"100%"},children:v.jsx(l9,{children:v.jsxs(u9,{children:[v.jsxs(c9,{children:[v.jsx(h9,{children:v.jsx(f9,{src:Array.isArray(k.images)&&k.images[0]?k.images[0]:"/placeholder.png",alt:k.title||"product"})}),v.jsxs(d9,{children:[v.jsxs(p9,{children:[v.jsxs(g9,{children:[v.jsx(Zm,{title:k.title,weight:600}),v.jsx(Qu,{label:(B=k.deadline)!=null&&B.seconds?new Date(k.deadline.seconds*1e3):k.deadline})]}),v.jsx(m9,{children:v.jsx(Wm,{amount:k.price&&k.finalnum?Math.floor(k.price/k.finalnum):0})})]}),v.jsx(y9,{children:v.jsx(Xm,{current:Array.isArray(k.participant)?k.participant.length:0,total:k.finalnum||0})})]})]}),v.jsx(KC,{currentStep:(()=>{var D;const K=Array.isArray(k.participant)?k.participant.length:0,J=k.finalnum||0;let re;(D=k.deadline)!=null&&D.seconds?re=new Date(k.deadline.seconds*1e3):(typeof k.deadline=="string"||typeof k.deadline=="number")&&(re=new Date(k.deadline));const ce=new Date;return K>=J&&re&&ce>re?3:K>=J?1:0})(),steps:k.steps})]})})},k.id||V)})})}),v.jsx(v9,{children:[...Array(4)].map((k,V)=>v.jsx(_9,{style:{backgroundColor:V===n?"#4284ff":"#dfdfe1",transition:"background 0.2s"}},V))})]})},w9=R.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "Pretendard", sans-serif;
  background-color: #fff;
  border-radius: 12px;
`,b9=R.figure`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #dee0e3;
  background-image: url(${t=>t.$image});
  background-size: cover;
  border-radius: 8px;
  margin: 0;
  overflow: hidden;
  margin-bottom: 10px;
`,E9=R.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin: 4px 0 12px;
`;function T9({title:t,price:e,deadline:n,current:a,finalnum:s,onClick:l,images:h}){const d=Array.isArray(h)?h[0]:h;return v.jsxs(w9,{onClick:l,children:[v.jsx(b9,{$image:d}),v.jsx(Qu,{label:n}),v.jsxs(E9,{children:[v.jsx(Zm,{title:t}),v.jsx(Wm,{amount:parseInt(e/s)})]}),v.jsx(Xm,{current:a,total:s})]})}const S9=R.section`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  width: 100%;
  background-color: #fff;
  margin-top: 12px;

  font-family: Pretendard;
`,A9=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
`,C9=R.h2`
  color: #232428;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
`,R9=R.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  color: #66686e;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  padding: 0;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,I9=R.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 16px;
  flex-wrap: wrap;
  padding: 8px 20px;

  & > div {
    cursor: pointer;
  }
`,D9=()=>{const t=wn(),[e,n]=Cs.useState([]),a=ti(Cn,"gongu");return Cs.useEffect(()=>{(async()=>{try{const h=(await Hi(a)).docs.map(d=>({id:d.id,...d.data()})).sort((d,g)=>(g.date??0)-(d.date??0));n(h)}catch(l){console.error("Error fetching posts:",l)}})()},[]),v.jsxs(S9,{children:[v.jsxs(A9,{children:[v.jsx(C9,{children:"최근 올라온 공구"}),v.jsxs(R9,{onClick:()=>t("/gongu",{state:{posts:e}}),children:[v.jsx("p",{children:"전체보기"}),v.jsx("span",{children:v.jsx("img",{src:"/ogury/arrow-right-16px.svg",alt:""})})]})]}),v.jsx(I9,{children:e.slice(0,4).map(s=>v.jsx("div",{onClick:()=>t(`/gongu/${s.id}`,{state:{post:s}}),children:v.jsx(T9,{...s,current:(s.participant??[]).length})},s.id))})]})},O9=R.div`
  display: flex;
  align-items: center;
  gap: 2.222px;
`,k9=R.div`
  width: 13.331px;
  height: 13.331px;
  display: flex;
  justify-content: center;
  align-items: center;

`,ZT=t=>v.jsx(O9,{children:[...Array(5)].map((e,n)=>v.jsx(k9,{children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"21",viewBox:"0 0 22 21",fill:"none",children:v.jsx("path",{d:"M10.2827 2.45356C10.5131 1.98662 10.6284 1.75315 10.7848 1.67856C10.9209 1.61366 11.0791 1.61366 11.2152 1.67856C11.3717 1.75315 11.4869 1.98662 11.7174 2.45356L13.9041 6.88353C13.9721 7.02138 14.0061 7.0903 14.0558 7.14382C14.0999 7.1912 14.1527 7.22959 14.2113 7.25687C14.2776 7.28767 14.3536 7.29878 14.5057 7.32102L19.397 8.03595C19.9121 8.11124 20.1696 8.14888 20.2888 8.27468C20.3925 8.38414 20.4412 8.53454 20.4215 8.68402C20.3988 8.85582 20.2124 9.03742 19.8395 9.40063L16.3014 12.8467C16.1912 12.9541 16.136 13.0078 16.1004 13.0717C16.0689 13.1283 16.0487 13.1905 16.0409 13.2548C16.0321 13.3274 16.0451 13.4032 16.0711 13.555L16.906 18.4224C16.994 18.9357 17.038 19.1924 16.9553 19.3447C16.8833 19.4773 16.7554 19.5702 16.6071 19.5977C16.4366 19.6293 16.2061 19.5081 15.7451 19.2657L11.3724 16.9661C11.2361 16.8944 11.168 16.8586 11.0962 16.8445C11.0327 16.8321 10.9673 16.8321 10.9038 16.8445C10.832 16.8586 10.7639 16.8944 10.6277 16.9661L6.25492 19.2657C5.79392 19.5081 5.56341 19.6293 5.39297 19.5977C5.24468 19.5702 5.11672 19.4773 5.04474 19.3447C4.962 19.1924 5.00603 18.9357 5.09407 18.4224L5.92889 13.555C5.95491 13.4032 5.96793 13.3274 5.95912 13.2548C5.95132 13.1905 5.93111 13.1283 5.89961 13.0717C5.86402 13.0078 5.80888 12.9541 5.69859 12.8467L2.16056 9.40062C1.78766 9.03742 1.60121 8.85582 1.57853 8.68402C1.55879 8.53454 1.60755 8.38414 1.71125 8.27468C1.83044 8.14888 2.08797 8.11124 2.60304 8.03595L7.49431 7.32102C7.64642 7.29878 7.72248 7.28767 7.78872 7.25687C7.84736 7.22959 7.90016 7.1912 7.94419 7.14382C7.99391 7.0903 8.02793 7.02138 8.09597 6.88353L10.2827 2.45356Z",fill:n<t.rating?"#FFDB2A":"#DDDDDD",stroke:n<t.rating?"#FFDB2A":"#DDDDDD",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},n))}),N9=R.article`
  width: 100%;
  display: flex;
  padding: 12px 0px;
  align-items: flex-start;
  align-self: stretch;
  border-bottom: 1px solid #f6f7f8;
  background-color: #fff;
  cursor: pointer;
`,M9=R.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
`,P9=R.div`
  display: flex;
  padding-right: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`,j9=R.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`,V9=R.div`
  display: flex;
  align-items: center;
  gap: 2px;
  align-self: stretch;
`,L9=R.h3`
  color: #232428;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  margin: 0;
`,U9=R.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`,z9=R.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  align-self: stretch;
  color: #66686e;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.35px;
`,B9=R.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`,H9=R.span`
  color: #aeafb6;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`,F9=R.span`
  color: #aeafb6;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`,G9=R.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #aeafb6;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`,$9=R.div`
  display: flex;
  align-items: center;
`,q9=R.div`
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: relative;
  background-color: #e0e2e4;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;function Y9(t){const a=(Date.now()-t)/1e3,s=a/60,l=s/60,h=l/24,d=h/7;return a<60?"방금전":s<60?`${Math.floor(s)}분전`:l<24?`${Math.floor(l)}시간전`:h<7?`${Math.floor(h)}일전`:`${Math.floor(d)}주전`}const JT=({title:t,bodys:e,rating:n,date:a,comment:s,images:l,onClick:h})=>{var g;const d=Y9(a);return v.jsxs(N9,{onClick:h,children:[v.jsxs(M9,{children:[v.jsxs(P9,{children:[v.jsxs(j9,{children:[v.jsx(ZT,{rating:n}),v.jsxs(V9,{children:[v.jsx(L9,{children:t}),v.jsx(U9,{children:v.jsx("img",{src:"/ogury/arrow-right-20px.svg",alt:""})})]})]}),v.jsx(z9,{children:e})]}),v.jsxs(B9,{children:[v.jsx(H9,{children:d}),v.jsx(F9,{children:"⋅"}),v.jsxs(G9,{children:[v.jsx($9,{children:v.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:v.jsx("path",{d:"M10.5 5.9917C10.5 8.47698 8.48528 10.4917 6 10.4917C5.40143 10.4917 4.83015 10.3748 4.30775 10.1627C4.20776 10.1221 4.15777 10.1018 4.11736 10.0927C4.07783 10.0838 4.04858 10.0806 4.00807 10.0806C3.96665 10.0806 3.92154 10.0881 3.83133 10.1031L2.05238 10.3996C1.86609 10.4307 1.77295 10.4462 1.70559 10.4173C1.64664 10.392 1.59966 10.3451 1.57438 10.2861C1.54549 10.2188 1.56102 10.1256 1.59206 9.93932L1.88855 8.16037C1.90359 8.07016 1.91111 8.02505 1.9111 7.98363C1.9111 7.94312 1.90786 7.91387 1.899 7.87434C1.88994 7.83393 1.86964 7.78394 1.82903 7.68395C1.61687 7.16155 1.5 6.59027 1.5 5.9917C1.5 3.50642 3.51472 1.4917 6 1.4917C8.48528 1.4917 10.5 3.50642 10.5 5.9917Z",fill:"#AEAFB6"})})}),v.jsxs("span",{children:["댓글 ",s.length,"개"]})]})]})]}),((g=l==null?void 0:l[0])==null?void 0:g.src)&&v.jsx(q9,{children:v.jsx("img",{src:l[0].src,alt:"thumbnail"})})]})},K9=R.section`
  display: flex;
  padding: 16px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background-color: #fff;
`,Q9=R.div`
  display: flex;
  padding: 8px 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`,X9=R.h2`
  color: #232428;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
`,W9=R.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: none;
  border: none;
  color: #66686e;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  padding: 0;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,Z9=R.div`
  display: flex;

  gap: 16px; /* 아이템 사이 간격 (선택사항) */
  padding: 0px 20px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,J9=()=>{const t=wn(),[e,n]=F.useState([]);return F.useEffect(()=>{(async()=>{try{const l=(await Hi(ti(Cn,"review"))).docs.map(h=>({id:h.id,...h.data()})).sort((h,d)=>(d.date??0)-(h.date??0));n(l)}catch(s){console.error("커뮤니티 데이터 불러오기 실패:",s)}})()},[]),v.jsxs(K9,{children:[v.jsxs(Q9,{children:[v.jsx(X9,{children:"커뮤니티"}),v.jsxs(W9,{onClick:()=>t("/community"),children:[v.jsx("p",{children:"전체보기"}),v.jsx("span",{children:v.jsx("img",{src:"/ogury/arrow-right-16px.svg",alt:""})})]})]}),v.jsx(Z9,{children:e.length===0?v.jsx("p",{style:{color:"#999",fontSize:"14px"},children:"게시물이 없어요"}):e.slice(0,5).map((a,s)=>v.jsx(JT,{...a,onClick:()=>t(`/community/${a.date}`)},a.id||s))})]})},eO=R.section`
  width: 100%;
`,tO=R.div`
  color: #232428;
  font-size: 24px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.6px;

  @media (max-width: 640px) {
    font-size: 20px;
    line-height: 120%;
  }
`,nO=R.span`
  font-weight: 700;
  color: #4284ff;
`,rO=R.span`
  font-weight: 400;
  color: #232428;
`,iO=()=>v.jsx(eO,{children:v.jsxs(tO,{children:[v.jsx(nO,{children:"공구킹 영재"}),v.jsx("span",{children:"님,"}),v.jsx("br",{}),v.jsx(rO,{children:"오늘은 어떤 공구를 해볼까요?"})]})}),aO=R.nav`
  width: 100%;
  max-width: 402px;
  height: 86px;
  padding: 8px 4px 28px;
  background: white;
  border-top: 1px solid #e9e9e9;
  display: flex;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  z-index: 100;
`,sO=R.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${t=>t.$active?"#232428":"#AEAFB6"};
  font-size: 14px;
  text-align: center;

  cursor: pointer;
`;function sd(){const t=wn(),{pathname:e}=ei(),n=[{label:"홈",to:"/mypage",iconActiveSrc:"undefined/btmNav/mypage-active.svg",iconInactiveSrc:"undefined/btmNav/mypage-inactive.svg"},{label:"공구",to:"/gongu",iconActiveSrc:"undefined/btmNav/gongu-active.svg",iconInactiveSrc:"undefined/btmNav/gongu-inactive.svg"},{label:"공구 현황",to:"/status",iconActiveSrc:"undefined/btmNav/status-active.svg",iconInactiveSrc:"undefined/btmNav/status-inactive.svg"},{label:"커뮤니티",to:"/community",iconActiveSrc:"undefined/btmNav/community-active.svg",iconInactiveSrc:"undefined/btmNav/community-inactive.svg"}];return v.jsx(aO,{children:n.map(({label:a,to:s,iconActiveSrc:l,iconInactiveSrc:h})=>{const d=e===s;return v.jsxs(sO,{$active:d,onClick:()=>t(s),children:[v.jsx("img",{src:d?l:h,alt:a}),a]},a)})})}const oO=R.div`
  width: 402px;
  height: 50px;
  background: #fff;

  position: sticky;
  top: 0;
  z-index: 10;

  & > img {
    width: 100%;
  }
`,lO=R.main`
  display: flex;
  flex-direction: column;
  width: 402px;
  height: 100vh;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  align-items: center;
  font-family: "Pretendard", -apple-system, Roboto, Helvetica, sans-serif;
  background-color: #f3f4f8;
`,uO=R.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,cO=R.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  gap: 24px;
  padding: 20px 20px 24px;
`,hO=R.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,fO=()=>v.jsxs(lO,{children:[v.jsx(oO,{children:v.jsx("img",{src:"/ogury/StatusBar.png",alt:"StatusBar"})}),v.jsx(Va,{state:"Title",title:v.jsx("img",{src:"/ogury/Logo.svg",alt:"logo"}),rightIcon:v.jsx("img",{src:"/ogury/alert.svg",alt:"alert"})}),v.jsx(cO,{children:v.jsxs(hO,{children:[v.jsx(iO,{}),v.jsx(x9,{})]})}),v.jsxs(uO,{children:[v.jsx(D9,{}),v.jsx(J9,{})]}),v.jsx("div",{style:{background:"#fff",width:"100%",minHeight:"86px"}}),v.jsx(sd,{})]}),dO=R.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 12px;
  margin: 12px 20px;
  background: #f0f1f1;
  border-radius: 4px;

  & > input {
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 8px 12px;

    color: var(--GRAY-GRAY300, #393a3d);
    font-family: Pretendard;
    font-size: 14px;
    line-height: 150%; /* 21px */
  }
  & > input:focus {
    outline: none;
  }

  & > input::placeholder {
    color: var(--GRAY-GRAY300, #aeafb6);
  }
`,pO=R.svg`
  width: 16px;
  height: 16px;
  stroke: #66686e;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  margin-right: 8px;
  flex-shrink: 0;
  cursor: pointer;
  `;function gO({value:t,onChange:e,placeholder:n="검색어를 입력하세요",onSearch:a=()=>{}}){return v.jsxs(dO,{onSubmit:s=>{s.preventDefault(),a()},children:[v.jsx("input",{type:"text",value:t,onChange:e,placeholder:n}),v.jsxs(pO,{xmlns:"http://www.w3.org/2000/svg",onClick:a,viewBox:"0 0 24 24",fill:"none",stroke:"#66686e",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-search",children:[v.jsx("circle",{cx:"11",cy:"11",r:"8"}),v.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})]})}const mO=R.div`
  display: flex;
  position: relative;
`,yO=R.div`
  width: 100%;
  padding: 0 20px;
  background: white;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  gap: 16px;

  overflow-x: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`,vO=R.button`
  padding: 8px 4px;
  background: none;
  border: none;
  border-bottom: ${t=>t.$active?"2px solid #4284FF":"2px solid transparent"};
  color: ${t=>t.$active?"#3B3E4B":"#AEAFB6"};
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  font-family: Pretendard;
`,_O=R.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 62px;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  pointer-events: none;

  z-index: 1;
`;function xO({categories:t,active:e,onChange:n}){const a=F.useRef(null);let s=!1,l=0,h=0;const d=_=>{s=!0,l=_.pageX-a.current.offsetLeft,h=a.current.scrollLeft},g=_=>{if(!s)return;_.preventDefault();const b=(_.pageX-a.current.offsetLeft-l)*1;a.current.scrollLeft=h-b},m=()=>{s=!1};return v.jsxs(mO,{children:[v.jsx(yO,{ref:a,onMouseDown:d,onMouseMove:g,onMouseUp:m,onMouseLeave:m,children:t.map(_=>v.jsx(vO,{$active:_===e,onClick:()=>n(_),children:_},_))}),v.jsx(_O,{})]})}const wO=R.p`
  color: #878b91;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.35px;
  margin: 0;
  max-width: 100%;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
`;function bO({body:t="설명이 없습니다"}){return v.jsx(wO,{children:t})}const EO=R.article`
  display: flex;
  padding: 12px 0;
  flex-direction: column;
  align-items: center;

  width: 100%;
  border-bottom: 1px solid #f6f7f8;
  background-color: #fff;
  cursor: pointer;
`,TO=R.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`,SO=R.figure`
  min-width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: #dee0e3;
  background-image: url(${t=>t.$image});
  background-size: cover;
  background-position: center;
`,AO=R.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* width: 100%; */
  flex: 1;
  height: 80px;
  margin-right: 10px;
`,CO=R.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;function RO({title:t,body:e,price:n,deadline:a,current:s,total:l,onClick:h,image:d}){return v.jsxs(EO,{onClick:h,children:[v.jsxs(TO,{children:[v.jsx(SO,{$image:d||""}),v.jsxs(AO,{children:[v.jsxs(CO,{children:[v.jsx(Zm,{title:t}),v.jsx(bO,{body:e})]}),v.jsx(Wm,{amount:n})]}),v.jsx(Qu,{label:a})]}),v.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"},children:v.jsx(Xm,{current:s,total:l})})]})}const IO=R.main`
  width: 100%;
  padding: 0 20px 86px;
  background-color: #fff;
  font-family: "Pretendard", sans-serif;
`,DO=R.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,OO=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 210px 0;
  color: #66686e;
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
`,kO=R.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #4284ff;
  cursor: pointer;

  & > p {
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.35px;
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,NO=({filter:t={},gonguList:e=[]})=>{const{search:n,category:a}=t,[s,l]=F.useState([]),h=ei(),d=wn();F.useEffect(()=>{var _;e.length>0?l(e):(_=h.state)!=null&&_.items?l(h.state.items):(async()=>{try{const O=(await Hi(ti(Cn,"gongu"))).docs.map(z=>({id:z.id,...z.data()})).sort((z,k)=>(k.date??0)-(z.date??0));l(O)}catch(b){console.error("공구 리스트 불러오기 실패:",b),l([])}})()},[e,h.state]);const g=_=>{d(`/gongu/${_.id}`,{state:{item:_}})};let m=s;if(a&&a!=="전체"&&(m=m.filter(_=>_.category===a)),n){const _=n.toLowerCase();m=m.filter(E=>{var b,C;return((b=E.title)==null?void 0:b.toLowerCase().includes(_))||((C=E.desc)==null?void 0:C.toLowerCase().includes(_))})}return v.jsx(IO,{children:m.length>0?v.jsx(DO,{children:m.map((_,E)=>{var b,C;return v.jsx(RO,{title:_.title,body:_.body,price:parseInt(_.price/_.finalnum),deadline:_.deadline,current:((b=_.participant)==null?void 0:b.length)||0,total:_.finalnum,image:(C=_.images)==null?void 0:C[0],onClick:()=>g(_)},_.id||E)})}):v.jsxs(OO,{children:[v.jsx("p",{children:"진행중인 공구가 없어요."}),v.jsxs(kO,{onClick:()=>d("/gongu/new"),children:[v.jsx("p",{children:"새로운 공구 올리기"}),v.jsx("span",{children:v.jsx("img",{src:"/ogury/arrow-right-blue.svg",alt:">"})})]})]})})},MO=["전체","생수","생필품","식품","의류/학잠","도서","문구","건강식품","뷰티","기타"],PO=R.div`
  display: flex;
  flex-direction: column;
  width: 402px;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  font-family: Pretendard;
  background-color: #fff;

  position: relative;
`,jO=R.div`
  width: 402px;
  height: 50px;
  background: #fff;

  position: sticky;
  top: 0;
  z-index: 10;

  & > img {
    width: 100%;
  }
`,VO=R.div`
  position: sticky;
  top: 50px;
  background-color: #fff;
`,LO=R.div`
  display: flex;
  padding: 24px 20px 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  color: #38414a;
  font-family: Pretendard;
  font-size: 14px;
  line-height: 100%; /* 14px */
  letter-spacing: -0.35px;
`,UO=R.button`
  display: flex;
  width: 52px;
  height: 52px;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 1000px;
  background: var(--BLUE-BLUE01, #4284ff);

  position: fixed;
  bottom: 106px;
  right: 50%;
  transform: translateX(181px);

  cursor: pointer;
`;function zO(){const[t,e]=F.useState(""),[n,a]=F.useState("전체"),[s,l]=F.useState([]),h=wn();F.useEffect(()=>{(async()=>{try{const O=(await Hi(ti(Cn,"gongu"))).docs.map(z=>({id:z.id,...z.data()})).sort((z,k)=>(k.date??0)-(z.date??0));l(O)}catch(C){console.error("공구 리스트 불러오기 실패:",C)}})()},[]);const g=s.filter(b=>n==="전체"?!0:b.category===n).filter(b=>{if(!t.trim())return!0;const C=t.toLowerCase().trim(),O=(b.title||"").toLowerCase(),z=(b.content||"").toLowerCase();return O.includes(C)||z.includes(C)}),m=b=>{b&&b.preventDefault(),console.log("검색 실행:",t)},_=()=>{e(""),console.log("검색어 초기화")},E=b=>{e(b.target.value)};return v.jsxs(PO,{children:[v.jsx(jO,{children:v.jsx("img",{src:"/ogury/StatusBar.png",alt:"StatusBar"})}),v.jsxs(VO,{children:[v.jsx(gO,{value:t,onChange:E,placeholder:"제목, 내용으로 검색하세요",onSearch:m,onClear:_}),v.jsx(xO,{categories:MO,active:n,onChange:a})]}),v.jsxs(LO,{children:[t.trim()?`"${t}" 검색결과`:n," ",g.length,"개"]}),v.jsx(NO,{filter:{search:t,category:n},gonguList:g}),v.jsx(UO,{onClick:()=>h("/gongu/new"),children:v.jsx("img",{src:"/ogury/plus.svg",alt:""})}),v.jsx(sd,{})]})}const BO=R.div`
  display: flex;
  flex-direction: column;
  position: relative; /* 카운터 배치용 */
`,HO=R.label`
  color: var(--GRAY-GRAY400, #66686e);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 4px;
  padding: 0 2px;
`,FO=R.div`
  position: relative;
`,e2=Au`
  width: 100%;
  padding: 12px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.4px;
  outline: none;
  transition: all 0.2s ease;
  font-family: Pretendard;

  &::placeholder {
    color: var(--GRAY-GRAY300, #aeafb6);
  }

  ${({isFilled:t})=>t&&Au`
      color: var(--GRAY-GRAY600, #232428);
    `}

  ${({isFocused:t})=>t&&Au`
      border: 1px solid var(--BLUE-BLUE01, #4284ff);
    `}
`,GO=R.input`
  ${e2};
`,$O=R.textarea`
  ${e2};
  resize: none;
  min-height: 120px;
  line-height: 24px;
`,qO=R.span`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: var(--GRAY-GRAY300, #aeafb6);
  font-family: Pretendard;
  font-size: 12px;
  line-height: 150%;
  pointer-events: none;
`;function Mo({label:t,placeholder:e,type:n="text",textarea:a=!1,charLimit:s,value:l="",onChange:h}){const[d,g]=F.useState(!1),m={placeholder:e,maxLength:s,value:l,onChange:h,hasCounter:!!s,isFocused:d,isFilled:l.length>0,onFocus:()=>g(!0),onBlur:()=>g(!1)};return v.jsxs(BO,{children:[v.jsx(HO,{children:t}),v.jsxs(FO,{children:[a?v.jsx($O,{...m}):v.jsx(GO,{type:n,...m}),s&&v.jsxs(qO,{children:[l.length,"/",s]})]})]})}const YO=R.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 402px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`,KO=R.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 402px;
  background: #fff;
  border-radius: 20px 20px 0px 0px;
  padding: 14px 20px 36px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,QO=R.div`
  width: 44px;
  height: 6px;
  border-radius: 1000px;
  background: #e0e5ee;
  margin-bottom: 16px;
`;function t2({onClose:t,children:e}){return v.jsx(YO,{onClick:t,children:v.jsxs(KO,{onClick:n=>n.stopPropagation(),children:[v.jsx(QO,{}),e]})})}const XO=[{name:"생수",icon:"/category_icons/water.svg"},{name:"생필품",icon:"/category_icons/cleaning.svg"},{name:"식품",icon:"/category_icons/food.svg"},{name:"의류/학잠",icon:"/category_icons/clothes.svg"},{name:"도서",icon:"/category_icons/book.svg"},{name:"문구",icon:"/category_icons/stationery.svg"},{name:"건강약품",icon:"/category_icons/health.svg"},{name:"뷰티",icon:"/category_icons/beauty.svg"},{name:"기타",icon:"/category_icons/etc.svg"}],WO=R.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`,ZO=R.button`
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`,JO=R.img`
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
`,ek=R.span`
  color: #55575d;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
`;function tk({onClose:t,onSelect:e}){return v.jsx(t2,{onClose:t,children:v.jsx(WO,{children:XO.map(n=>v.jsxs(ZO,{onClick:()=>{e(n.name),t()},children:[v.jsx(JO,{src:"/ogury"+n.icon,alt:n.name}),v.jsx(ek,{children:n.name})]},n.name))})})}function n2(t){var e,n,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=n2(t[e]))&&(a&&(a+=" "),a+=n)}else for(n in t)t[n]&&(a&&(a+=" "),a+=n);return a}function od(){for(var t,e,n=0,a="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=n2(t))&&(a&&(a+=" "),a+=e);return a}const nk=(t,e,n,a)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const s=Object.getOwnPropertyDescriptor(t,n),l=Object.getOwnPropertyDescriptor(e,n);!rk(s,l)&&a||Object.defineProperty(t,n,l)},rk=function(t,e){return t===void 0||t.configurable||t.writable===e.writable&&t.enumerable===e.enumerable&&t.configurable===e.configurable&&(t.writable||t.value===e.value)},ik=(t,e)=>{const n=Object.getPrototypeOf(e);n!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,n)},ak=(t,e)=>`/* Wrapped ${t}*/
${e}`,sk=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),ok=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),lk=(t,e,n)=>{const a=n===""?"":`with ${n.trim()}() `,s=ak.bind(null,a,e.toString());Object.defineProperty(s,"name",ok);const{writable:l,enumerable:h,configurable:d}=sk;Object.defineProperty(t,"toString",{value:s,writable:l,enumerable:h,configurable:d})};function uk(t,e,{ignoreNonConfigurable:n=!1}={}){const{name:a}=t;for(const s of Reflect.ownKeys(e))nk(t,e,s,n);return ik(t,e),lk(t,e,a),t}const ck=new WeakMap,dw=new WeakMap;function r2(t,{cacheKey:e,cache:n=new Map,maxAge:a}={}){if(a===0)return t;if(typeof a=="number"){if(a>2147483647)throw new TypeError("The `maxAge` option cannot exceed 2147483647.");if(a<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const s=function(...l){var _;const h=e?e(l):l[0],d=n.get(h);if(d)return d.data;const g=t.apply(this,l),m=typeof a=="function"?a(...l):a;if(n.set(h,{data:g,maxAge:m?Date.now()+m:Number.POSITIVE_INFINITY}),m&&m>0&&m!==Number.POSITIVE_INFINITY){const E=setTimeout(()=>{n.delete(h)},m);(_=E.unref)==null||_.call(E);const b=dw.get(t)??new Set;b.add(E),dw.set(t,b)}return g};return uk(s,t,{ignoreNonConfigurable:!0}),ck.set(s,n),s}function hk(t){return typeof t=="string"}function fk(t,e,n){return n.indexOf(t)===e}function dk(t){return t.toLowerCase()===t}function pw(t){return t.indexOf(",")===-1?t:t.split(",")}function Tm(t){if(!t)return t;if(t==="C"||t==="posix"||t==="POSIX")return"en-US";if(t.indexOf(".")!==-1){var e=t.split(".")[0],n=e===void 0?"":e;return Tm(n)}if(t.indexOf("@")!==-1){var a=t.split("@")[0],n=a===void 0?"":a;return Tm(n)}if(t.indexOf("-")===-1||!dk(t))return t;var s=t.split("-"),l=s[0],h=s[1],d=h===void 0?"":h;return"".concat(l,"-").concat(d.toUpperCase())}function pk(t){var e=t===void 0?{}:t,n=e.useFallbackLocale,a=n===void 0?!0:n,s=e.fallbackLocale,l=s===void 0?"en-US":s,h=[];if(typeof navigator<"u"){for(var d=navigator.languages||[],g=[],m=0,_=d;m<_.length;m++){var E=_[m];g=g.concat(pw(E))}var b=navigator.language,C=b&&pw(b);h=h.concat(g,C)}return a&&h.push(l),h.filter(hk).map(Tm).filter(fk)}var gk=r2(pk,{cacheKey:JSON.stringify});function mk(t){return gk(t)[0]||null}var i2=r2(mk,{cacheKey:JSON.stringify});function Fi(t,e,n){return function(s,l=n){const h=t(s)+l;return e(h)}}function lc(t){return function(n){return new Date(t(n).getTime()-1)}}function uc(t,e){return function(a){return[t(a),e(a)]}}function _t(t){if(t instanceof Date)return t.getFullYear();if(typeof t=="number")return t;const e=Number.parseInt(t,10);if(typeof t=="string"&&!Number.isNaN(e))return e;throw new Error(`Failed to get year from date: ${t}.`)}function za(t){if(t instanceof Date)return t.getMonth();throw new Error(`Failed to get month from date: ${t}.`)}function ld(t){if(t instanceof Date)return t.getDate();throw new Error(`Failed to get year from date: ${t}.`)}function pl(t){const e=_t(t),n=e+(-e+1)%100,a=new Date;return a.setFullYear(n,0,1),a.setHours(0,0,0,0),a}const yk=Fi(_t,pl,-100),a2=Fi(_t,pl,100),Fy=lc(a2),vk=Fi(_t,Fy,-100),s2=uc(pl,Fy);function Ba(t){const e=_t(t),n=e+(-e+1)%10,a=new Date;return a.setFullYear(n,0,1),a.setHours(0,0,0,0),a}const o2=Fi(_t,Ba,-10),Gy=Fi(_t,Ba,10),ud=lc(Gy),l2=Fi(_t,ud,-10),u2=uc(Ba,ud);function gl(t){const e=_t(t),n=new Date;return n.setFullYear(e,0,1),n.setHours(0,0,0,0),n}const c2=Fi(_t,gl,-1),$y=Fi(_t,gl,1),cd=lc($y),h2=Fi(_t,cd,-1),_k=uc(gl,cd);function qy(t,e){return function(a,s=e){const l=_t(a),h=za(a)+s,d=new Date;return d.setFullYear(l,h,1),d.setHours(0,0,0,0),t(d)}}function Ms(t){const e=_t(t),n=za(t),a=new Date;return a.setFullYear(e,n,1),a.setHours(0,0,0,0),a}const f2=qy(Ms,-1),Yy=qy(Ms,1),cc=lc(Yy),d2=qy(cc,-1),xk=uc(Ms,cc);function wk(t,e){return function(a,s=e){const l=_t(a),h=za(a),d=ld(a)+s,g=new Date;return g.setFullYear(l,h,d),g.setHours(0,0,0,0),t(g)}}function hc(t){const e=_t(t),n=za(t),a=ld(t),s=new Date;return s.setFullYear(e,n,a),s.setHours(0,0,0,0),s}const bk=wk(hc,1),Ky=lc(bk),Ek=uc(hc,Ky);function p2(t){return ld(cc(t))}var fn={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},Tk={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},Qy=[0,1,2,3,4,5,6],Mg=new Map;function Sk(t){return function(n,a){var s=n||i2();Mg.has(s)||Mg.set(s,new Map);var l=Mg.get(s);return l.has(t)||l.set(t,new Intl.DateTimeFormat(s||void 0,t).format),l.get(t)(a)}}function Ak(t){var e=new Date(t);return new Date(e.setHours(12))}function Ps(t){return function(e,n){return Sk(t)(e,Ak(n))}}var Ck={day:"numeric"},Rk={day:"numeric",month:"long",year:"numeric"},Ik={month:"long"},Dk={month:"long",year:"numeric"},Ok={weekday:"short"},kk={weekday:"long"},Nk={year:"numeric"},Mk=Ps(Ck),Pk=Ps(Rk),jk=Ps(Ik),g2=Ps(Dk),Vk=Ps(Ok),Lk=Ps(kk),hd=Ps(Nk),Uk=Qy[0],zk=Qy[5],gw=Qy[6];function Fu(t,e){e===void 0&&(e=fn.ISO_8601);var n=t.getDay();switch(e){case fn.ISO_8601:return(n+6)%7;case fn.ISLAMIC:return(n+1)%7;case fn.HEBREW:case fn.GREGORY:return n;default:throw new Error("Unsupported calendar type.")}}function Bk(t){var e=pl(t);return _t(e)}function Hk(t){var e=Ba(t);return _t(e)}function Sm(t,e){e===void 0&&(e=fn.ISO_8601);var n=_t(t),a=za(t),s=t.getDate()-Fu(t,e);return new Date(n,a,s)}function Fk(t,e){e===void 0&&(e=fn.ISO_8601);var n=e===fn.GREGORY?fn.GREGORY:fn.ISO_8601,a=Sm(t,e),s=_t(t)+1,l,h;do l=new Date(s,0,n===fn.ISO_8601?4:1),h=Sm(l,e),s-=1;while(t<h);return Math.round((a.getTime()-h.getTime())/(864e5*7))+1}function As(t,e){switch(t){case"century":return pl(e);case"decade":return Ba(e);case"year":return gl(e);case"month":return Ms(e);case"day":return hc(e);default:throw new Error("Invalid rangeType: ".concat(t))}}function Gk(t,e){switch(t){case"century":return yk(e);case"decade":return o2(e);case"year":return c2(e);case"month":return f2(e);default:throw new Error("Invalid rangeType: ".concat(t))}}function m2(t,e){switch(t){case"century":return a2(e);case"decade":return Gy(e);case"year":return $y(e);case"month":return Yy(e);default:throw new Error("Invalid rangeType: ".concat(t))}}function $k(t,e){switch(t){case"decade":return o2(e,-100);case"year":return c2(e,-10);case"month":return f2(e,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function qk(t,e){switch(t){case"decade":return Gy(e,100);case"year":return $y(e,10);case"month":return Yy(e,12);default:throw new Error("Invalid rangeType: ".concat(t))}}function y2(t,e){switch(t){case"century":return Fy(e);case"decade":return ud(e);case"year":return cd(e);case"month":return cc(e);case"day":return Ky(e);default:throw new Error("Invalid rangeType: ".concat(t))}}function Yk(t,e){switch(t){case"century":return vk(e);case"decade":return l2(e);case"year":return h2(e);case"month":return d2(e);default:throw new Error("Invalid rangeType: ".concat(t))}}function Kk(t,e){switch(t){case"decade":return l2(e,-100);case"year":return h2(e,-10);case"month":return d2(e,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function mw(t,e){switch(t){case"century":return s2(e);case"decade":return u2(e);case"year":return _k(e);case"month":return xk(e);case"day":return Ek(e);default:throw new Error("Invalid rangeType: ".concat(t))}}function Qk(t,e,n){var a=[e,n].sort(function(s,l){return s.getTime()-l.getTime()});return[As(t,a[0]),y2(t,a[1])]}function v2(t,e,n){return n.map(function(a){return(e||hd)(t,a)}).join(" – ")}function Xk(t,e,n){return v2(t,e,s2(n))}function _2(t,e,n){return v2(t,e,u2(n))}function Wk(t){return t.getDay()===new Date().getDay()}function x2(t,e){e===void 0&&(e=fn.ISO_8601);var n=t.getDay();switch(e){case fn.ISLAMIC:case fn.HEBREW:return n===zk||n===gw;case fn.ISO_8601:case fn.GREGORY:return n===gw||n===Uk;default:throw new Error("Unsupported calendar type.")}}var Ur="react-calendar__navigation";function Zk(t){var e=t.activeStartDate,n=t.drillUp,a=t.formatMonthYear,s=a===void 0?g2:a,l=t.formatYear,h=l===void 0?hd:l,d=t.locale,g=t.maxDate,m=t.minDate,_=t.navigationAriaLabel,E=_===void 0?"":_,b=t.navigationAriaLive,C=t.navigationLabel,O=t.next2AriaLabel,z=O===void 0?"":O,k=t.next2Label,V=k===void 0?"»":k,B=t.nextAriaLabel,K=B===void 0?"":B,J=t.nextLabel,re=J===void 0?"›":J,ce=t.prev2AriaLabel,D=ce===void 0?"":ce,A=t.prev2Label,I=A===void 0?"«":A,j=t.prevAriaLabel,U=j===void 0?"":j,H=t.prevLabel,M=H===void 0?"‹":H,et=t.setActiveStartDate,Xe=t.showDoubleView,W=t.view,he=t.views,le=he.indexOf(W)>0,me=W!=="century",P=Gk(W,e),te=me?$k(W,e):void 0,ue=m2(W,e),se=me?qk(W,e):void 0,pe=function(){if(P.getFullYear()<0)return!0;var ut=Yk(W,e);return m&&m>=ut}(),Ee=me&&function(){if(te.getFullYear()<0)return!0;var ut=Kk(W,e);return m&&m>=ut}(),ye=g&&g<ue,tt=me&&g&&g<se;function Pe(){et(P,"prev")}function lt(){et(te,"prev2")}function pn(){et(ue,"next")}function Gt(){et(se,"next2")}function At(ut){var cr=function(){switch(W){case"century":return Xk(d,h,ut);case"decade":return _2(d,h,ut);case"year":return h(d,ut);case"month":return s(d,ut);default:throw new Error("Invalid view: ".concat(W,"."))}}();return C?C({date:ut,label:cr,locale:d||i2()||void 0,view:W}):cr}function ur(){var ut="".concat(Ur,"__label");return v.jsxs("button",{"aria-label":E,"aria-live":b,className:ut,disabled:!le,onClick:n,style:{flexGrow:1},type:"button",children:[v.jsx("span",{className:"".concat(ut,"__labelText ").concat(ut,"__labelText--from"),children:At(e)}),Xe?v.jsxs(v.Fragment,{children:[v.jsx("span",{className:"".concat(ut,"__divider"),children:" – "}),v.jsx("span",{className:"".concat(ut,"__labelText ").concat(ut,"__labelText--to"),children:At(ue)})]}):null]})}return v.jsxs("div",{className:Ur,children:[I!==null&&me?v.jsx("button",{"aria-label":D,className:"".concat(Ur,"__arrow ").concat(Ur,"__prev2-button"),disabled:Ee,onClick:lt,type:"button",children:I}):null,M!==null&&v.jsx("button",{"aria-label":U,className:"".concat(Ur,"__arrow ").concat(Ur,"__prev-button"),disabled:pe,onClick:Pe,type:"button",children:M}),ur(),re!==null&&v.jsx("button",{"aria-label":K,className:"".concat(Ur,"__arrow ").concat(Ur,"__next-button"),disabled:ye,onClick:pn,type:"button",children:re}),V!==null&&me?v.jsx("button",{"aria-label":z,className:"".concat(Ur,"__arrow ").concat(Ur,"__next2-button"),disabled:tt,onClick:Gt,type:"button",children:V}):null]})}var Vo=function(){return Vo=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Vo.apply(this,arguments)},Jk=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(n[a[s]]=t[a[s]]);return n};function yw(t){return"".concat(t,"%")}function Xy(t){var e=t.children,n=t.className,a=t.count,s=t.direction,l=t.offset,h=t.style,d=t.wrap,g=Jk(t,["children","className","count","direction","offset","style","wrap"]);return v.jsx("div",Vo({className:n,style:Vo({display:"flex",flexDirection:s,flexWrap:d?"wrap":"nowrap"},h)},g,{children:F.Children.map(e,function(m,_){var E=l&&_===0?yw(100*l/a):null;return F.cloneElement(m,Vo(Vo({},m.props),{style:{flexBasis:yw(100/a),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:E,marginInlineStart:E,marginInlineEnd:0}}))})}))}function eN(t,e,n){return e&&e>t?e:n&&n<t?n:t}function Gu(t,e){return e[0]<=t&&e[1]>=t}function tN(t,e){return t[0]<=e[0]&&t[1]>=e[1]}function w2(t,e){return Gu(t[0],e)||Gu(t[1],e)}function vw(t,e,n){var a=w2(e,t),s=[];if(a){s.push(n);var l=Gu(t[0],e),h=Gu(t[1],e);l&&s.push("".concat(n,"Start")),h&&s.push("".concat(n,"End")),l&&h&&s.push("".concat(n,"BothEnds"))}return s}function nN(t){return Array.isArray(t)?t[0]!==null&&t[1]!==null:t!==null}function rN(t){if(!t)throw new Error("args is required");var e=t.value,n=t.date,a=t.hover,s="react-calendar__tile",l=[s];if(!n)return l;var h=new Date,d=function(){if(Array.isArray(n))return n;var C=t.dateType;if(!C)throw new Error("dateType is required when date is not an array of two dates");return mw(C,n)}();if(Gu(h,d)&&l.push("".concat(s,"--now")),!e||!nN(e))return l;var g=function(){if(Array.isArray(e))return e;var C=t.valueType;if(!C)throw new Error("valueType is required when value is not an array of two dates");return mw(C,e)}();tN(g,d)?l.push("".concat(s,"--active")):w2(g,d)&&l.push("".concat(s,"--hasActive"));var m=vw(g,d,"".concat(s,"--range"));l.push.apply(l,m);var _=Array.isArray(e)?e:[e];if(a&&_.length===1){var E=a>g[0]?[g[0],a]:[a,g[0]],b=vw(E,d,"".concat(s,"--hover"));l.push.apply(l,b)}return l}function fd(t){for(var e=t.className,n=t.count,a=n===void 0?3:n,s=t.dateTransform,l=t.dateType,h=t.end,d=t.hover,g=t.offset,m=t.renderTile,_=t.start,E=t.step,b=E===void 0?1:E,C=t.value,O=t.valueType,z=[],k=_;k<=h;k+=b){var V=s(k);z.push(m({classes:rN({date:V,dateType:l,hover:d,value:C,valueType:O}),date:V}))}return v.jsx(Xy,{className:e,count:a,offset:g,wrap:!0,children:z})}function dd(t){var e=t.activeStartDate,n=t.children,a=t.classes,s=t.date,l=t.formatAbbr,h=t.locale,d=t.maxDate,g=t.maxDateTransform,m=t.minDate,_=t.minDateTransform,E=t.onClick,b=t.onMouseOver,C=t.style,O=t.tileClassName,z=t.tileContent,k=t.tileDisabled,V=t.view,B=F.useMemo(function(){var J={activeStartDate:e,date:s,view:V};return typeof O=="function"?O(J):O},[e,s,O,V]),K=F.useMemo(function(){var J={activeStartDate:e,date:s,view:V};return typeof z=="function"?z(J):z},[e,s,z,V]);return v.jsxs("button",{className:od(a,B),disabled:m&&_(m)>s||d&&g(d)<s||(k==null?void 0:k({activeStartDate:e,date:s,view:V})),onClick:E?function(J){return E(s,J)}:void 0,onFocus:b?function(){return b(s)}:void 0,onMouseOver:b?function(){return b(s)}:void 0,style:C,type:"button",children:[l?v.jsx("abbr",{"aria-label":l(h,s),children:n}):n,K]})}var Am=function(){return Am=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Am.apply(this,arguments)},iN=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(n[a[s]]=t[a[s]]);return n},_w="react-calendar__century-view__decades__decade";function aN(t){var e=t.classes,n=e===void 0?[]:e,a=t.currentCentury,s=t.formatYear,l=s===void 0?hd:s,h=iN(t,["classes","currentCentury","formatYear"]),d=h.date,g=h.locale,m=[];return n&&m.push.apply(m,n),m.push(_w),pl(d).getFullYear()!==a&&m.push("".concat(_w,"--neighboringCentury")),v.jsx(dd,Am({},h,{classes:m,maxDateTransform:ud,minDateTransform:Ba,view:"century",children:_2(g,l,d)}))}var Cm=function(){return Cm=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Cm.apply(this,arguments)},xw=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(n[a[s]]=t[a[s]]);return n};function sN(t){var e=t.activeStartDate,n=t.hover,a=t.showNeighboringCentury,s=t.value,l=t.valueType,h=xw(t,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),d=Bk(e),g=d+(a?119:99);return v.jsx(fd,{className:"react-calendar__century-view__decades",dateTransform:Ba,dateType:"decade",end:g,hover:n,renderTile:function(m){var _=m.date,E=xw(m,["date"]);return v.jsx(aN,Cm({},h,E,{activeStartDate:e,currentCentury:d,date:_}),_.getTime())},start:d,step:10,value:s,valueType:l})}var Rm=function(){return Rm=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Rm.apply(this,arguments)};function oN(t){function e(){return v.jsx(sN,Rm({},t))}return v.jsx("div",{className:"react-calendar__century-view",children:e()})}var Im=function(){return Im=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Im.apply(this,arguments)},lN=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(n[a[s]]=t[a[s]]);return n},ww="react-calendar__decade-view__years__year";function uN(t){var e=t.classes,n=e===void 0?[]:e,a=t.currentDecade,s=t.formatYear,l=s===void 0?hd:s,h=lN(t,["classes","currentDecade","formatYear"]),d=h.date,g=h.locale,m=[];return n&&m.push.apply(m,n),m.push(ww),Ba(d).getFullYear()!==a&&m.push("".concat(ww,"--neighboringDecade")),v.jsx(dd,Im({},h,{classes:m,maxDateTransform:cd,minDateTransform:gl,view:"decade",children:l(g,d)}))}var Dm=function(){return Dm=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Dm.apply(this,arguments)},bw=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(n[a[s]]=t[a[s]]);return n};function cN(t){var e=t.activeStartDate,n=t.hover,a=t.showNeighboringDecade,s=t.value,l=t.valueType,h=bw(t,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),d=Hk(e),g=d+(a?11:9);return v.jsx(fd,{className:"react-calendar__decade-view__years",dateTransform:gl,dateType:"year",end:g,hover:n,renderTile:function(m){var _=m.date,E=bw(m,["date"]);return v.jsx(uN,Dm({},h,E,{activeStartDate:e,currentDecade:d,date:_}),_.getTime())},start:d,value:s,valueType:l})}var Om=function(){return Om=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Om.apply(this,arguments)};function hN(t){function e(){return v.jsx(cN,Om({},t))}return v.jsx("div",{className:"react-calendar__decade-view",children:e()})}var km=function(){return km=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},km.apply(this,arguments)},fN=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(n[a[s]]=t[a[s]]);return n},Ew=function(t,e,n){if(n||arguments.length===2)for(var a=0,s=e.length,l;a<s;a++)(l||!(a in e))&&(l||(l=Array.prototype.slice.call(e,0,a)),l[a]=e[a]);return t.concat(l||Array.prototype.slice.call(e))},dN="react-calendar__year-view__months__month";function pN(t){var e=t.classes,n=e===void 0?[]:e,a=t.formatMonth,s=a===void 0?jk:a,l=t.formatMonthYear,h=l===void 0?g2:l,d=fN(t,["classes","formatMonth","formatMonthYear"]),g=d.date,m=d.locale;return v.jsx(dd,km({},d,{classes:Ew(Ew([],n,!0),[dN],!1),formatAbbr:h,maxDateTransform:cc,minDateTransform:Ms,view:"year",children:s(m,g)}))}var Nm=function(){return Nm=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Nm.apply(this,arguments)},Tw=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(n[a[s]]=t[a[s]]);return n};function gN(t){var e=t.activeStartDate,n=t.hover,a=t.value,s=t.valueType,l=Tw(t,["activeStartDate","hover","value","valueType"]),h=0,d=11,g=_t(e);return v.jsx(fd,{className:"react-calendar__year-view__months",dateTransform:function(m){var _=new Date;return _.setFullYear(g,m,1),Ms(_)},dateType:"month",end:d,hover:n,renderTile:function(m){var _=m.date,E=Tw(m,["date"]);return v.jsx(pN,Nm({},l,E,{activeStartDate:e,date:_}),_.getTime())},start:h,value:a,valueType:s})}var Mm=function(){return Mm=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Mm.apply(this,arguments)};function mN(t){function e(){return v.jsx(gN,Mm({},t))}return v.jsx("div",{className:"react-calendar__year-view",children:e()})}var Pm=function(){return Pm=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Pm.apply(this,arguments)},yN=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(n[a[s]]=t[a[s]]);return n},Pg="react-calendar__month-view__days__day";function vN(t){var e=t.calendarType,n=t.classes,a=n===void 0?[]:n,s=t.currentMonthIndex,l=t.formatDay,h=l===void 0?Mk:l,d=t.formatLongDate,g=d===void 0?Pk:d,m=yN(t,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),_=m.date,E=m.locale,b=[];return a&&b.push.apply(b,a),b.push(Pg),x2(_,e)&&b.push("".concat(Pg,"--weekend")),_.getMonth()!==s&&b.push("".concat(Pg,"--neighboringMonth")),v.jsx(dd,Pm({},m,{classes:b,formatAbbr:g,maxDateTransform:Ky,minDateTransform:hc,view:"month",children:h(E,_)}))}var jm=function(){return jm=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},jm.apply(this,arguments)},Sw=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(n[a[s]]=t[a[s]]);return n};function _N(t){var e=t.activeStartDate,n=t.calendarType,a=t.hover,s=t.showFixedNumberOfWeeks,l=t.showNeighboringMonth,h=t.value,d=t.valueType,g=Sw(t,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),m=_t(e),_=za(e),E=s||l,b=Fu(e,n),C=E?0:b,O=(E?-b:0)+1,z=function(){if(s)return O+6*7-1;var k=p2(e);if(l){var V=new Date;V.setFullYear(m,_,k),V.setHours(0,0,0,0);var B=7-Fu(V,n)-1;return k+B}return k}();return v.jsx(fd,{className:"react-calendar__month-view__days",count:7,dateTransform:function(k){var V=new Date;return V.setFullYear(m,_,k),hc(V)},dateType:"day",hover:a,end:z,renderTile:function(k){var V=k.date,B=Sw(k,["date"]);return v.jsx(vN,jm({},g,B,{activeStartDate:e,calendarType:n,currentMonthIndex:_,date:V}),V.getTime())},offset:C,start:O,value:h,valueType:d})}var b2="react-calendar__month-view__weekdays",jg="".concat(b2,"__weekday");function xN(t){for(var e=t.calendarType,n=t.formatShortWeekday,a=n===void 0?Vk:n,s=t.formatWeekday,l=s===void 0?Lk:s,h=t.locale,d=t.onMouseLeave,g=new Date,m=Ms(g),_=_t(m),E=za(m),b=[],C=1;C<=7;C+=1){var O=new Date(_,E,C-Fu(m,e)),z=l(h,O);b.push(v.jsx("div",{className:od(jg,Wk(O)&&"".concat(jg,"--current"),x2(O,e)&&"".concat(jg,"--weekend")),children:v.jsx("abbr",{"aria-label":z,title:z,children:a(h,O).replace(".","")})},C))}return v.jsx(Xy,{className:b2,count:7,onFocus:d,onMouseOver:d,children:b})}var Df=function(){return Df=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Df.apply(this,arguments)},Aw=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(n[a[s]]=t[a[s]]);return n},Cw="react-calendar__tile";function wN(t){var e=t.onClickWeekNumber,n=t.weekNumber,a=v.jsx("span",{children:n});if(e){var s=t.date,l=t.onClickWeekNumber,h=t.weekNumber,d=Aw(t,["date","onClickWeekNumber","weekNumber"]);return v.jsx("button",Df({},d,{className:Cw,onClick:function(g){return l(h,s,g)},type:"button",children:a}))}else{t.date,t.onClickWeekNumber,t.weekNumber;var d=Aw(t,["date","onClickWeekNumber","weekNumber"]);return v.jsx("div",Df({},d,{className:Cw,children:a}))}}function bN(t){var e=t.activeStartDate,n=t.calendarType,a=t.onClickWeekNumber,s=t.onMouseLeave,l=t.showFixedNumberOfWeeks,h=function(){if(l)return 6;var m=p2(e),_=Fu(e,n),E=m-(7-_);return 1+Math.ceil(E/7)}(),d=function(){for(var m=_t(e),_=za(e),E=ld(e),b=[],C=0;C<h;C+=1)b.push(Sm(new Date(m,_,E+C*7),n));return b}(),g=d.map(function(m){return Fk(m,n)});return v.jsx(Xy,{className:"react-calendar__month-view__weekNumbers",count:h,direction:"column",onFocus:s,onMouseOver:s,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:g.map(function(m,_){var E=d[_];if(!E)throw new Error("date is not defined");return v.jsx(wN,{date:E,onClickWeekNumber:a,weekNumber:m},m)})})}var Vm=function(){return Vm=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Vm.apply(this,arguments)},EN=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(n[a[s]]=t[a[s]]);return n};function TN(t){if(t)for(var e=0,n=Object.entries(Tk);e<n.length;e++){var a=n[e],s=a[0],l=a[1];if(l.includes(t))return s}return fn.ISO_8601}function SN(t){var e=t.activeStartDate,n=t.locale,a=t.onMouseLeave,s=t.showFixedNumberOfWeeks,l=t.calendarType,h=l===void 0?TN(n):l,d=t.formatShortWeekday,g=t.formatWeekday,m=t.onClickWeekNumber,_=t.showWeekNumbers,E=EN(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function b(){return v.jsx(xN,{calendarType:h,formatShortWeekday:d,formatWeekday:g,locale:n,onMouseLeave:a})}function C(){return _?v.jsx(bN,{activeStartDate:e,calendarType:h,onClickWeekNumber:m,onMouseLeave:a,showFixedNumberOfWeeks:s}):null}function O(){return v.jsx(_N,Vm({calendarType:h},E))}var z="react-calendar__month-view";return v.jsx("div",{className:od(z,_?"".concat(z,"--weekNumbers"):""),children:v.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[C(),v.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[b(),O()]})]})})}var Lo=function(){return Lo=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Lo.apply(this,arguments)},Uh="react-calendar",af=["century","decade","year","month"],AN=["decade","year","month","day"],Wy=new Date;Wy.setFullYear(1,0,1);Wy.setHours(0,0,0,0);var CN=new Date(864e13);function Tu(t){return t instanceof Date?t:new Date(t)}function E2(t,e){return af.slice(af.indexOf(t),af.indexOf(e)+1)}function RN(t,e,n){var a=E2(e,n);return a.indexOf(t)!==-1}function Zy(t,e,n){return t&&RN(t,e,n)?t:n}function T2(t){var e=af.indexOf(t);return AN[e]}function IN(t,e){var n=Array.isArray(t)?t[e]:t;if(!n)return null;var a=Tu(n);if(Number.isNaN(a.getTime()))throw new Error("Invalid date: ".concat(t));return a}function S2(t,e){var n=t.value,a=t.minDate,s=t.maxDate,l=t.maxDetail,h=IN(n,e);if(!h)return null;var d=T2(l),g=function(){switch(e){case 0:return As(d,h);case 1:return y2(d,h);default:throw new Error("Invalid index value: ".concat(e))}}();return eN(g,a,s)}var Jy=function(t){return S2(t,0)},A2=function(t){return S2(t,1)},DN=function(t){return[Jy,A2].map(function(e){return e(t)})};function C2(t){var e=t.maxDate,n=t.maxDetail,a=t.minDate,s=t.minDetail,l=t.value,h=t.view,d=Zy(h,s,n),g=Jy({value:l,minDate:a,maxDate:e,maxDetail:n})||new Date;return As(d,g)}function ON(t){var e=t.activeStartDate,n=t.defaultActiveStartDate,a=t.defaultValue,s=t.defaultView,l=t.maxDate,h=t.maxDetail,d=t.minDate,g=t.minDetail,m=t.value,_=t.view,E=Zy(_,g,h),b=e||n;return b?As(E,b):C2({maxDate:l,maxDetail:h,minDate:d,minDetail:g,value:m||a,view:_||s})}function Vg(t){return t&&(!Array.isArray(t)||t.length===1)}function zh(t,e){return t instanceof Date&&e instanceof Date&&t.getTime()===e.getTime()}var kN=F.forwardRef(function(e,n){var a=e.activeStartDate,s=e.allowPartialRange,l=e.calendarType,h=e.className,d=e.defaultActiveStartDate,g=e.defaultValue,m=e.defaultView,_=e.formatDay,E=e.formatLongDate,b=e.formatMonth,C=e.formatMonthYear,O=e.formatShortWeekday,z=e.formatWeekday,k=e.formatYear,V=e.goToRangeStartOnSelect,B=V===void 0?!0:V,K=e.inputRef,J=e.locale,re=e.maxDate,ce=re===void 0?CN:re,D=e.maxDetail,A=D===void 0?"month":D,I=e.minDate,j=I===void 0?Wy:I,U=e.minDetail,H=U===void 0?"century":U,M=e.navigationAriaLabel,et=e.navigationAriaLive,Xe=e.navigationLabel,W=e.next2AriaLabel,he=e.next2Label,le=e.nextAriaLabel,me=e.nextLabel,P=e.onActiveStartDateChange,te=e.onChange,ue=e.onClickDay,se=e.onClickDecade,pe=e.onClickMonth,Ee=e.onClickWeekNumber,ye=e.onClickYear,tt=e.onDrillDown,Pe=e.onDrillUp,lt=e.onViewChange,pn=e.prev2AriaLabel,Gt=e.prev2Label,At=e.prevAriaLabel,ur=e.prevLabel,ut=e.returnValue,cr=ut===void 0?"start":ut,Jt=e.selectRange,en=e.showDoubleView,js=e.showFixedNumberOfWeeks,Gi=e.showNavigation,$i=Gi===void 0?!0:Gi,ni=e.showNeighboringCentury,ml=e.showNeighboringDecade,ri=e.showNeighboringMonth,Ha=ri===void 0?!0:ri,Vs=e.showWeekNumbers,gt=e.tileClassName,Ke=e.tileContent,bn=e.tileDisabled,Dt=e.value,Fa=e.view,Ls=F.useState(d),ii=Ls[0],Yn=Ls[1],br=F.useState(null),jn=br[0],ai=br[1],Er=F.useState(Array.isArray(g)?g.map(function(Ae){return Ae!==null?Tu(Ae):null}):g!=null?Tu(g):null),si=Er[0],Ga=Er[1],qi=F.useState(m),hr=qi[0],Kn=qi[1],Ot=a||ii||ON({activeStartDate:a,defaultActiveStartDate:d,defaultValue:g,defaultView:m,maxDate:ce,maxDetail:A,minDate:j,minDetail:H,value:Dt,view:Fa}),dt=function(){var Ae=function(){return Jt&&Vg(si)?si:Dt!==void 0?Dt:si}();return Ae?Array.isArray(Ae)?Ae.map(function(je){return je!==null?Tu(je):null}):Ae!==null?Tu(Ae):null:null}(),Tr=T2(A),qe=Zy(Fa||hr,H,A),tn=E2(H,A),Sr=Jt?jn:null,Yi=tn.indexOf(qe)<tn.length-1,ct=tn.indexOf(qe)>0,Et=F.useCallback(function(Ae){var je=function(){switch(cr){case"start":return Jy;case"end":return A2;case"range":return DN;default:throw new Error("Invalid returnValue.")}}();return je({maxDate:ce,maxDetail:A,minDate:j,value:Ae})},[ce,A,j,cr]),mt=F.useCallback(function(Ae,je){Yn(Ae);var De={action:je,activeStartDate:Ae,value:dt,view:qe};P&&!zh(Ot,Ae)&&P(De)},[Ot,P,dt,qe]),nn=F.useCallback(function(Ae,je){var De=function(){switch(qe){case"century":return se;case"decade":return ye;case"year":return pe;case"month":return ue;default:throw new Error("Invalid view: ".concat(qe,"."))}}();De&&De(Ae,je)},[ue,se,pe,ye,qe]),oi=F.useCallback(function(Ae,je){if(Yi){nn(Ae,je);var De=tn[tn.indexOf(qe)+1];if(!De)throw new Error("Attempted to drill down from the lowest view.");Yn(Ae),Kn(De);var rn={action:"drillDown",activeStartDate:Ae,value:dt,view:De};P&&!zh(Ot,Ae)&&P(rn),lt&&qe!==De&&lt(rn),tt&&tt(rn)}},[Ot,Yi,P,nn,tt,lt,dt,qe,tn]),$a=F.useCallback(function(){if(ct){var Ae=tn[tn.indexOf(qe)-1];if(!Ae)throw new Error("Attempted to drill up from the highest view.");var je=As(Ae,Ot);Yn(je),Kn(Ae);var De={action:"drillUp",activeStartDate:je,value:dt,view:Ae};P&&!zh(Ot,je)&&P(De),lt&&qe!==Ae&&lt(De),Pe&&Pe(De)}},[Ot,ct,P,Pe,lt,dt,qe,tn]),Qn=F.useCallback(function(Ae,je){var De=dt;nn(Ae,je);var rn=Jt&&!Vg(De),$t;if(Jt)if(rn)$t=As(Tr,Ae);else{if(!De)throw new Error("previousValue is required");if(Array.isArray(De))throw new Error("previousValue must not be an array");$t=Qk(Tr,De,Ae)}else $t=Et(Ae);var En=!Jt||rn||B?C2({maxDate:ce,maxDetail:A,minDate:j,minDetail:H,value:$t,view:qe}):null;je.persist(),Yn(En),Ga($t);var gr={action:"onChange",activeStartDate:En,value:$t,view:qe};if(P&&!zh(Ot,En)&&P(gr),te)if(Jt){var zs=Vg($t);if(!zs)te($t||null,je);else if(s){if(Array.isArray($t))throw new Error("value must not be an array");te([$t||null,null],je)}}else te($t||null,je)},[Ot,s,Et,B,ce,A,j,H,P,te,nn,Jt,dt,Tr,qe]);function Us(Ae){ai(Ae)}function fr(){ai(null)}F.useImperativeHandle(n,function(){return{activeStartDate:Ot,drillDown:oi,drillUp:$a,onChange:Qn,setActiveStartDate:mt,value:dt,view:qe}},[Ot,oi,$a,Qn,mt,dt,qe]);function dr(Ae){var je=Ae?m2(qe,Ot):As(qe,Ot),De=Yi?oi:Qn,rn={activeStartDate:je,hover:Sr,locale:J,maxDate:ce,minDate:j,onClick:De,onMouseOver:Jt?Us:void 0,tileClassName:gt,tileContent:Ke,tileDisabled:bn,value:dt,valueType:Tr};switch(qe){case"century":return v.jsx(oN,Lo({formatYear:k,showNeighboringCentury:ni},rn));case"decade":return v.jsx(hN,Lo({formatYear:k,showNeighboringDecade:ml},rn));case"year":return v.jsx(mN,Lo({formatMonth:b,formatMonthYear:C},rn));case"month":return v.jsx(SN,Lo({calendarType:l,formatDay:_,formatLongDate:E,formatShortWeekday:O,formatWeekday:z,onClickWeekNumber:Ee,onMouseLeave:Jt?fr:void 0,showFixedNumberOfWeeks:typeof js<"u"?js:en,showNeighboringMonth:Ha,showWeekNumbers:Vs},rn));default:throw new Error("Invalid view: ".concat(qe,"."))}}function pr(){return $i?v.jsx(Zk,{activeStartDate:Ot,drillUp:$a,formatMonthYear:C,formatYear:k,locale:J,maxDate:ce,minDate:j,navigationAriaLabel:M,navigationAriaLive:et,navigationLabel:Xe,next2AriaLabel:W,next2Label:he,nextAriaLabel:le,nextLabel:me,prev2AriaLabel:pn,prev2Label:Gt,prevAriaLabel:At,prevLabel:ur,setActiveStartDate:mt,showDoubleView:en,view:qe,views:tn}):null}var Xn=Array.isArray(dt)?dt:[dt];return v.jsxs("div",{className:od(Uh,Jt&&Xn.length===1&&"".concat(Uh,"--selectRange"),en&&"".concat(Uh,"--doubleView"),h),ref:K,children:[pr(),v.jsxs("div",{className:"".concat(Uh,"__viewContainer"),onBlur:Jt?fr:void 0,onMouseLeave:Jt?fr:void 0,children:[dr(),en?dr(!0):null]})]})});const NN=R(kN)`
  width: 100%;
  border: none;
  font-family: Pretendard;

  /* 상단 네비게이션 */
  .react-calendar__navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 16px 0;
  }

  .react-calendar__navigation__label {
    pointer-events: none;
    cursor: default;
  }

  .react-calendar__navigation button {
    flex-grow: 0 !important;
    flex-shrink: 0;
    flex-basis: auto;
    padding: 0;
    margin: 0;
    background: none;
    border: none;

    cursor: pointer;
  }
  .react-calendar__navigation button:nth-child(2) span {
    color: var(--GRAY-GRAY600, #232428);
    color: var(--GRAY-GRAY600, #232428);
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.45px;
  }
  /* 요일 영역 */
  .react-calendar__month-view__weekdays {
    color: var(--GRAY-GRAY400, #66686e);
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.3px;
    display: grid !important;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    row-gap: 8px;
    column-gap: 8px;
    margin-bottom: 16px;
  }

  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 날짜 기본 타일 */
  .react-calendar__tile {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    border: none;
    background: none;
    font-size: 14px;
    font-weight: 500;
    color: #232428;
    cursor: pointer;
  }
  .react-calendar__tile abbr {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* 날짜 감싸는 전체 영역 */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    row-gap: 8px;
    column-gap: 8px;
  }

  /* 지난달/다음달 날짜 */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #c0c0c0;
  }

  /* 오늘 날짜 */
  .react-calendar__tile--now {
    border-radius: 1000px;
    border: 1px solid var(--BLUE-BLUE01, #4284ff);
    background: var(--BLUE-BLUE03, #f3f7ff);
    color: var(--BLUE-BLUE01, #4284ff);
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  /* 선택된 날짜 */
  .react-calendar__tile--active {
    border-radius: 1000px;
    border: 1px solid var(--BLUE-BLUE01, #4284ff);
    background: var(--BLUE-BLUE01, #4284ff);
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.35px;
  }
`,Rw=R.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  &:hover {
    background-color: #f4f5f7;
  }

  & > img {
    width: 20px;
    height: 20px;
  }
`,MN=R.button`
  width: 100%;
  height: 48px;
  margin-top: 24px;
  border: none;
  border-radius: 8px;
  background: #4285f4;
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: Pretendard;
  letter-spacing: -0.4px;
  cursor: pointer;
`;function PN({onSelectDate:t,onClose:e}){const[n,a]=F.useState(new Date);return v.jsxs(t2,{onClose:e,children:[v.jsx(NN,{value:n,onChange:s=>a(s),locale:"ko-KR",formatMonthYear:(s,l)=>`${l.getFullYear()}년 ${l.getMonth()+1}월`,formatDay:(s,l)=>String(l.getDate()),nextLabel:v.jsx(Rw,{children:v.jsx("img",{src:"/ogury/arrow-right.svg",alt:"다음 달"})}),prevLabel:v.jsx(Rw,{children:v.jsx("img",{src:"/ogury/arrow-left.svg",alt:"이전 달"})}),next2Label:null,prev2Label:null,onClickLabel:s=>s.preventDefault()}),v.jsx(MN,{onClick:()=>t(n),children:"확인"})]})}const jN=R.div`
  display: flex;
  flex-direction: column;
  width: 402px;
  height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  font-family: Pretendard;
  background-color: #fff;
`,VN=R.div`
  width: 402px;
  height: 50px;
  background: #fff;

  position: sticky;
  top: 0;
  z-index: 10;

  & > img {
    width: 100%;
  }
`,LN=R.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 20px;
  margin: 28px 0;

  & > .title {
    color: var(--GRAY-GRAY600, #232428);
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }
`,UN=R.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,zN=R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > label {
    color: var(--GRAY-GRAY400, #66686e);
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    padding: 0 2px;
  }
`,BN=R.div`
  display: flex;
  gap: 8px;

  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`,HN=R.label`
  flex: 0 0 110px;
  display: flex;
  width: 110px;
  height: 110px;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 12px;
  border: 1px solid #f1f1f1;
  background: #f4f5f8;

  color: #aeafb6;
  font-size: 32px;
  cursor: pointer;

  & > span.img-icon {
    display: flex;
    width: 24px;
    height: 24px;
  }

  & > span.img-length {
    color: var(--GRAY-GRAY400, #66686e);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    line-height: 150%; /* 21px */
  }
`,FN=R.div`
  flex: 0 0 110px;
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: 12px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  & > button {
    position: absolute;
    top: 8px;
    right: 8px;

    width: 24px;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    border: none;
    background: rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }
`,GN=R.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 20px;
  margin-bottom: 28px;

  & > .title {
    color: var(--GRAY-GRAY600, #232428);
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }
`,$N=R.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,qN=R.div`
  position: relative;

  /* 가격 값이 있을 때, 원 기호 있을 자리 여백 늘리기 */
  input {
    ${({hasValue:t})=>t&&"padding-left: 30px;"}
  }

  /* 가격 값이 있을 때, 원 기호 출력 */
  &::after {
    content: ${({hasValue:t})=>t?'"₩"':'""'};
    position: absolute;
    top: calc(50% + 12.5px);
    left: 12px;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    color: var(--GRAY-GRAY400, #66686e);

    pointer-events: none;
  }
`,YN=R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,KN=MC`
  0%   { opacity: 0; transform: translateY(-4px); }
  100% { opacity: 1; transform: translateY(0); }
`,QN=R.div`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 12px;
  border-radius: 4px;

  background: var(--BLUE-BLUE03, #f3f7ff);
  color: var(--BLUE-BLUE01, #4284ff);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;

  animation: ${KN} 0.4s ease-out;

  & > span:first-child {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;
  }
`,XN=R.span`
  font-weight: 700;
`,WN=R.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > label {
    color: var(--GRAY-GRAY400, #66686e);
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    padding: 0 2px;
  }
`,ZN=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px;

  font-size: 16px;
  line-height: 150%;
  color: ${({selected:t})=>t?"#333":"#aeafb6"};

  cursor: pointer;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,JN=R.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > label {
    color: var(--GRAY-GRAY400, #66686e);
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    padding: 0 2px;
  }
`,e7=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px;
  font-size: 16px;
  line-height: 150%;
  color: ${({selected:t})=>t?"#333":"#aeafb6"};
  cursor: pointer;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;function t7(t){const e=wn(),[n,a]=F.useState(""),[s,l]=F.useState(""),[h,d]=F.useState(""),[g,m]=F.useState(""),[_,E]=F.useState(""),[b,C]=F.useState(""),[O,z]=F.useState(""),[k,V]=F.useState([]),B=F.useRef(null),K=n&&s.trim()&&h.trim()&&g&&_&&b&&O&&k.length>0,J=le=>le.replace(/[^\d]/g,""),re=le=>le?Number(le).toLocaleString("ko-KR"):"",ce=Number(_)>0&&Number(b)>0?Math.floor(Number(_)/Number(b)):null,[D,A]=F.useState(!1),I=le=>{a(le),A(!1)},[j,U]=F.useState(!1),H=le=>`${le.getFullYear()}년 ${le.getMonth()+1}월 ${le.getDate()}일`,M=le=>{m(H(le)),U(!1)},et=5,Xe=le=>{const me=et-k.length,te=Array.from(le.target.files).slice(0,me).map(ue=>new Promise(se=>{const pe=new FileReader;pe.onload=Ee=>se({name:ue.name,src:Ee.target.result}),pe.readAsDataURL(ue)}));Promise.all(te).then(ue=>V(se=>[...se,...ue]))},W=le=>V(k.filter((me,P)=>P!==le)),he=async()=>{if(K)try{const le=Date.now().toString(),me=rl(Cn,"gongu",le);await QT(me,{id:le,postid:le,title:s.trim(),body:h.trim(),category:n,images:k.map(P=>P.src),price:Number(J(_)),deadline:new Date(g.replace(/년|월/g,"-").replace(/일/g,"")).getTime(),date:le,finalnum:Number(b),currentnum:0,participant:["공구킹 영재_123456"],link:O.trim(),owner:"공구킹 영재_123456",isReviewed:!1}),alert("공동구매 글이 등록되었습니다."),e(-1)}catch(le){alert("등록에 실패했습니다."),console.error(le)}};return v.jsxs(jN,{children:[v.jsx(VN,{children:v.jsx("img",{src:"/ogury/StatusBar.png",alt:"StatusBar"})}),v.jsx(Va,{state:"TextActionBar",text:"공동구매 글 작성",iconType:"x",disabled:!K,onClick:he}),v.jsxs(LN,{children:[v.jsx("p",{className:"title",children:"글 작성"}),v.jsxs(UN,{children:[v.jsxs(WN,{children:[v.jsx("label",{children:"카테고리"}),v.jsxs(ZN,{selected:!!n,onClick:()=>A(!0),children:[n||"카테고리를 선택해주세요.",v.jsx("span",{children:v.jsx("img",{src:"/ogury/arrow-down.svg",alt:""})})]})]}),v.jsx(Mo,{label:"제목",placeholder:"제목을 입력해주세요",charLimit:18,value:s,onChange:le=>l(le.target.value)}),v.jsx(Mo,{label:"내용",placeholder:"공구할 상품에 대한 설명을 입력해주세요",textarea:!0,value:h,onChange:le=>d(le.target.value)}),v.jsxs(zN,{children:[v.jsx("label",{children:"사진"}),v.jsxs(BN,{children:[v.jsxs(HN,{onClick:()=>B.current.click(),children:[v.jsx("span",{className:"img-icon",children:v.jsx("img",{src:"/ogury/image.svg",alt:""})}),v.jsxs("span",{className:"img-length",children:[k.length,"/",et]})]}),v.jsx("input",{ref:B,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:Xe}),k.map((le,me)=>v.jsxs(FN,{children:[v.jsx("img",{src:le.src,alt:le.name}),v.jsx("button",{onClick:()=>W(me),children:v.jsx("img",{src:"/ogury/delete.svg",alt:"삭제"})})]},me))]})]})]})]}),v.jsxs(GN,{children:[v.jsx("p",{className:"title",children:"공동구매 진행 정보"}),v.jsxs($N,{children:[v.jsxs(JN,{children:[v.jsx("label",{children:"마감기한"}),v.jsxs(e7,{selected:!!g,onClick:()=>U(!0),children:[g||"마감 기한을 선택해주세요",v.jsx("span",{children:v.jsx("img",{src:"/ogury/calendar.svg",alt:""})})]})]}),v.jsx(qN,{hasValue:_!=="",children:v.jsx(Mo,{label:"가격",placeholder:"상품의 가격을 입력해주세요",value:re(_),onChange:le=>{const me=J(le.target.value);E(me)}})}),v.jsxs(YN,{children:[v.jsx(Mo,{label:"모집인원",placeholder:"공동구매할 인원을 입력해주세요",value:b,onChange:le=>C(le.target.value)}),ce!==null&&v.jsxs(QN,{children:[v.jsx("img",{src:"/ogury/price.svg",alt:""}),v.jsxs("span",{children:["1인당"," ",v.jsx(XN,{children:ce.toLocaleString()}),"원이에요!"]})]})]}),v.jsx(Mo,{label:"상품링크",placeholder:"상품 링크를 입력해주세요",value:O,onChange:le=>z(le.target.value)})]})]}),D&&v.jsx(tk,{onClose:()=>A(!1),onSelect:I}),j&&v.jsx(PN,{onClose:()=>U(!1),onSelectDate:M})]})}const n7=R.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,r7=R.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  fill: ${t=>t.$filled?"#FFDB2A":"#DDDDDD"};
  stroke: ${t=>t.$filled?"#FFDB2A":"#DDDDDD"};
  cursor: pointer;

  & > svg path {
    fill: ${t=>t.$filled?"#FFDB2A":"#DDDDDD"};
    stroke: ${t=>t.$filled?"#FFDB2A":"#DDDDDD"};
  }
`,i7=({rating:t=0,onChange:e})=>v.jsx(n7,{children:[...Array(5)].map((n,a)=>v.jsx(r7,{$filled:a<t,onClick:()=>e==null?void 0:e(a+1),children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:v.jsx("path",{d:"M11.7827 3.45356C12.0131 2.98662 12.1284 2.75315 12.2848 2.67856C12.4209 2.61366 12.5791 2.61366 12.7152 2.67856C12.8717 2.75315 12.9869 2.98662 13.2174 3.45356L15.4041 7.88353C15.4721 8.02138 15.5061 8.0903 15.5558 8.14382C15.5999 8.1912 15.6527 8.22959 15.7113 8.25687C15.7776 8.28767 15.8536 8.29878 16.0057 8.32102L20.897 9.03595C21.4121 9.11124 21.6696 9.14888 21.7888 9.27468C21.8925 9.38414 21.9412 9.53454 21.9215 9.68402C21.8988 9.85582 21.7124 10.0374 21.3395 10.4006L17.8014 13.8467C17.6912 13.9541 17.636 14.0078 17.6004 14.0717C17.5689 14.1283 17.5487 14.1905 17.5409 14.2548C17.5321 14.3274 17.5451 14.4032 17.5711 14.555L18.406 19.4224C18.494 19.9357 18.538 20.1924 18.4553 20.3447C18.3833 20.4773 18.2554 20.5702 18.1071 20.5977C17.9366 20.6293 17.7061 20.5081 17.2451 20.2657L12.8724 17.9661C12.7361 17.8944 12.668 17.8586 12.5962 17.8445C12.5327 17.8321 12.4673 17.8321 12.4038 17.8445C12.332 17.8586 12.2639 17.8944 12.1277 17.9661L7.75492 20.2657C7.29392 20.5081 7.06341 20.6293 6.89297 20.5977C6.74468 20.5702 6.61672 20.4773 6.54474 20.3447C6.462 20.1924 6.50603 19.9357 6.59407 19.4224L7.42889 14.555C7.45491 14.4032 7.46793 14.3274 7.45912 14.2548C7.45132 14.1905 7.43111 14.1283 7.39961 14.0717C7.36402 14.0078 7.30888 13.9541 7.19859 13.8467L3.66056 10.4006C3.28766 10.0374 3.10121 9.85582 3.07853 9.68402C3.05879 9.53454 3.10755 9.38414 3.21125 9.27468C3.33044 9.14888 3.58797 9.11124 4.10304 9.03595L8.99431 8.32102C9.14642 8.29878 9.22248 8.28767 9.28872 8.25687C9.34736 8.22959 9.40016 8.1912 9.44419 8.14382C9.49391 8.0903 9.52793 8.02138 9.59597 7.88353L11.7827 3.45356Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})},a))}),a7=R.div`
  display: flex;
  flex-direction: column;
  width: 402px;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  font-family: Pretendard;
  background-color: #fff;
`,s7=R.div`
  width: 402px;
  height: 50px;
  background: #fff;

  position: sticky;
  top: 0;
  z-index: 10;

  & > img {
    width: 100%;
  }
`,o7=R.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px 20px;
`,l7=R.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & > p {
    color: #333;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
    line-height: 150%; /* 30px */
  }

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,u7=R.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,c7=R.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > label {
    color: var(--GRAY-GRAY400, #66686e);
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    padding: 0 2px;
  }
`,h7=R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > label {
    color: var(--GRAY-GRAY400, #66686e);
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    padding: 0 2px;
  }
`,f7=R.div`
  display: flex;
  gap: 8px;

  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`,d7=R.label`
  flex: 0 0 110px;
  display: flex;
  width: 110px;
  height: 110px;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 12px;
  border: 1px solid #f1f1f1;
  background: #f4f5f8;

  color: #aeafb6;
  font-size: 32px;
  cursor: pointer;

  & > span.img-icon {
    display: flex;
    width: 24px;
    height: 24px;
  }

  & > span.img-length {
    color: var(--GRAY-GRAY400, #66686e);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    line-height: 150%; /* 21px */
  }
`,p7=R.div`
  flex: 0 0 110px;
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: 12px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  & > button {
    position: absolute;
    top: 8px;
    right: 8px;

    width: 24px;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    border: none;
    background: rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }
`;function g7(t){const e=wn(),[n,a]=F.useState(0),[s,l]=F.useState(""),[h,d]=F.useState([]),g=F.useRef(null),_=ei().state,E=_.title,b=async()=>{const V=new Date().getTime().toString(),B=rl(ti(Cn,"review"),V);try{await QT(B,{id:_.date,images:h,rating:n,title:E,date:V,bodys:s,comment:[]});const K=rl(Cn,"gongu",_.id);await Hy(K,{isReviewed:!0}),alert("리뷰가 작성되었습니다."),e("/community")}catch(K){console.error("리뷰 작성 실패 또는 gongu 업데이트 실패:",K)}},C=s.trim(),O=5,z=V=>{const B=O-h.length,J=Array.from(V.target.files).slice(0,B).map(re=>new Promise(ce=>{const D=new FileReader;D.onload=A=>ce({name:re.name,src:A.target.result}),D.readAsDataURL(re)}));Promise.all(J).then(re=>d(ce=>[...ce,...re]))},k=V=>d(h.filter((B,K)=>K!==V));return v.jsxs(a7,{children:[v.jsx(s7,{children:v.jsx("img",{src:"/ogury/StatusBar.png",alt:"StatusBar"})}),v.jsx(Va,{state:"TextActionBar",text:"후기 작성",disabled:!C,onClick:b}),v.jsxs(o7,{children:[v.jsxs(l7,{children:[v.jsx("p",{children:E}),v.jsx("span",{children:v.jsx("img",{src:"/ogury/arrow-right.svg",alt:""})})]}),v.jsxs(u7,{children:[v.jsxs(c7,{children:[v.jsx("label",{children:"평점"}),v.jsx(i7,{rating:n,onChange:a})]}),v.jsx(Mo,{label:"내용",placeholder:"공동구매한 상품에 대한 리뷰를 남겨주세요.",textarea:!0,value:s,onChange:V=>l(V.target.value)}),v.jsxs(h7,{children:[v.jsx("label",{children:"사진"}),v.jsxs(f7,{children:[v.jsxs(d7,{onClick:()=>g.current.click(),children:[v.jsx("span",{className:"img-icon",children:v.jsx("img",{src:"/ogury/image.svg",alt:""})}),v.jsxs("span",{className:"img-length",children:[h.length,"/",O]})]}),v.jsx("input",{ref:g,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:z}),h.map((V,B)=>v.jsxs(p7,{children:[v.jsx("img",{src:V.src,alt:V.name}),v.jsx("button",{onClick:()=>k(B),children:v.jsx("img",{src:"/ogury/delete.svg",alt:"삭제"})})]},B))]})]})]})]})]})}const m7=R.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--GRAY-GRAY200, #e0e2e4);
  background: #fff;
  padding: 0px 20px;

  position: sticky;
  top: 98px;
`,y7=R.button`
  width: 100%;
  padding: 10px 0;

  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.64px;
  text-align: center;
  color: ${t=>t.$isActive?"#4284ff":"#A0A0A0"};

  border: none;
  border-bottom: solid 2px
    ${t=>t.$isActive?"#3A8EFF":"transparent"};
  background: #fff;
  cursor: pointer;
`;function R2(t){const{tabs:e,activeKey:n,onChange:a}=t;return v.jsx(m7,{children:e.map(s=>v.jsx(y7,{$isActive:n==s.key,onClick:()=>a(s.key),children:s.label},s.key))})}const v7=R.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 0px 16px 0px rgba(73, 74, 79, 0.1);
`,_7=R.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`,x7=R.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,w7=R.p`
  color: var(--GRAY-GRAY400, #66686e);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.35px;
`,b7=R.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > span:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
  }
  & > span:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--BLUE-BLUE01, #6c7181);
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: -0.35px;
  }
`,E7=R.span`
  color: #4284ff;
  font-weight: 500;
`,T7=R.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  cursor: pointer;
`,S7=R.div`
  display: flex;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid #efefef;
  overflow: hidden;
`,A7=R.div`
  display: flex;
  align-items: center;

  & > p {
    color: var(--GRAY-GRAY600, #232428);
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.4px;
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,Iw=R.button`
  display: flex;
  height: 44px;
  justify-content: center;
  align-items: center;
  border: solid 1px #f3f7ff;
  border-radius: 8px;
  background: var(--BLUE-BLUE03, #f3f7ff);
  color: var(--BLUE-BLUE01, #4284ff);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.35px;
  cursor: pointer;
`,C7={ongoing:"진행중",ended:"종료됨"},R7=t=>t>0?t:t===0?"D-Day":"종료됨";function I7({gongu:t}){const e=wn(),n=new Date(t.deadline);if(!t)return null;let a=t.daysLeft;a===void 0&&t.deadline&&(a=Math.ceil((n-new Date)/(1e3*60*60*24)));let s=t.status;s||(s=a<0?"ended":"ongoing");const l=t.isDone===!0,h=l?"종료됨":C7[s]||"진행중";let d="/placeholder.png";if(Array.isArray(t.images)&&typeof t.images[0]=="string"&&t.images[0].trim()!==""){const _=t.images[0].trim();_.startsWith("http")||_.startsWith("/")||_.startsWith("data:image")?d=_:d=`data:image/png;base64,${_}`}const g=Array.isArray(t.participant)?t.participant.length:t.currentParticipants||0,m=t.finalnum||t.totalParticipants||0;return v.jsxs(v7,{children:[v.jsxs(_7,{children:[v.jsxs(x7,{children:[v.jsx(w7,{children:h}),a>=0&&!l?v.jsx(Qu,{label:n.toISOString(),formatDaysLeft:R7,status:s}):null]}),v.jsxs(b7,{children:[v.jsx("span",{children:v.jsx("img",{src:"/ogury/participant.svg",alt:"참여자 아이콘"})}),v.jsxs("span",{children:[v.jsx(E7,{children:g}),"/",m]})]})]}),v.jsxs(T7,{onClick:()=>e(`/gongu/${t.id}`),children:[v.jsx(S7,{children:v.jsx("img",{src:d,alt:"썸네일"})}),v.jsxs(A7,{children:[v.jsx("p",{children:t.title}),v.jsx("span",{children:v.jsx("img",{src:"/ogury/arrow-right-18px.svg",alt:"이동 아이콘"})})]})]}),s==="ended"||g>=m?v.jsx(Iw,{onClick:()=>{t.isReviewed||e("/selectGongu")},disabled:t.isReviewed,style:t.isReviewed?{background:"#f3f3f3",color:"#bcbcbc",border:"none",cursor:"not-allowed"}:{},children:t.isReviewed?"리뷰 작성 완료":"리뷰 남기기"}):v.jsx(Iw,{onClick:()=>console.log("채팅방 입장"),children:"채팅방 입장하기"})]})}const D7=R.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 402px;
  padding-bottom: 86px;

  &::-webkit-scrollbar {
    display: none;
  }
  font-family: Pretendard;
  background-color: #fff;
`,O7=R.div`
  width: 402px;
  height: 50px;
  background: #fff;

  position: sticky;
  top: 0;
  z-index: 10;

  & > img {
    width: 100%;
  }
`,k7=R.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
`,N7=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 210px 0;
  color: #66686e;
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
`,M7=R.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #4284ff;
  cursor: pointer;

  & > p {
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.35px;
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;function P7(){const t=wn(),[e,n]=F.useState("ongoing"),[a,s]=F.useState([]);return F.useEffect(()=>{(async()=>{const h=ti(Cn,"gongu"),d=await Hi(h),g=[],m=new Date;d.forEach(_=>{var z;const E=_.data();let b;(z=E.deadline)!=null&&z.seconds?b=new Date(E.deadline.seconds*1e3):b=new Date(E.deadline);const O=(Array.isArray(E.participant)?E.participant.length:0)>=E.finalnum||b.setHours(0,0,0,0)<m.setHours(0,0,0,0);g.push({id:_.id,...E,isDone:O})}),s(g)})()},[]),v.jsxs(D7,{children:[v.jsx(O7,{children:v.jsx("img",{src:"/ogury/StatusBar.png",alt:"StatusBar"})}),v.jsx(Va,{state:"Title",title:"공구 현황"}),v.jsx(R2,{activeKey:e,onChange:n,tabs:[{key:"ongoing",label:"진행중인 공구"},{key:"done",label:"완료된 공구"}]}),v.jsx(k7,{children:a.filter(l=>e==="ongoing"?!l.isDone:l.isDone).length===0?v.jsxs(N7,{children:[v.jsx("p",{children:e==="ongoing"?"진행중인 공구가 없어요.":"완료된 공구가 없어요."}),v.jsxs(M7,{onClick:()=>t("/gongu/new"),children:[v.jsx("p",{children:"새로운 공구 올리기"}),v.jsx("span",{children:v.jsx("img",{src:"/ogury/arrow-right-blue.svg",alt:">"})})]})]}):a.filter(l=>e==="ongoing"?!l.isDone:l.isDone).map(l=>v.jsx(I7,{gongu:l},l.id))}),v.jsx(sd,{})]})}const j7=R.section`
  display: flex;
  padding: 12px 0 86px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background-color: #fff;
`,V7=R.div`
  display: flex;
  padding: 0px 20px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,L7=()=>{const t=wn(),e=s=>{t(`/community/${s.date}`,{state:{item:s}})},[n,a]=F.useState([]);return F.useEffect(()=>{(async()=>{try{const d=(await Hi(ti(Cn,"review"))).docs.map(g=>({id:g.id,...g.data()})).sort((g,m)=>(m.date??0)-(g.date??0));a(d)}catch(l){console.error("커뮤니티 데이터 불러오기 실패:",l)}})()},[]),v.jsx(j7,{children:v.jsx(V7,{children:n.map((s,l)=>v.jsx(JT,{...s,onClick:()=>e(s)},l))})})},U7=R.div`
  display: flex;
  flex-direction: column;
  width: 402px;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  font-family: Pretendard;
  background-color: #fff;

  position: relative;
`,z7=R.div`
  width: 402px;
  height: 50px;
  background: #fff;

  position: sticky;
  top: 0;
  z-index: 10;

  & > img {
    width: 100%;
  }
`,B7=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 260px 0 210px;
  color: #66686e;
  font-size: 14px;
  text-align: center;
  line-height: 1.3;
`,H7=R.button`
  display: flex;
  width: 52px;
  height: 52px;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 1000px;
  background: var(--BLUE-BLUE01, #4284ff);

  position: fixed;
  bottom: 106px;
  right: 50%;
  transform: translateX(181px);

  cursor: pointer;
`;function F7(){const t=wn(),[e,n]=F.useState("review");return v.jsxs(U7,{children:[v.jsx(z7,{children:v.jsx("img",{src:"/ogury/StatusBar.png",alt:"StatusBar"})}),v.jsx(Va,{state:"Title",title:"커뮤니티",rightIcon:v.jsx("img",{src:"/ogury/search.svg",alt:"search"})}),v.jsx(R2,{activeKey:e,onChange:n,tabs:[{key:"review",label:"후기"},{key:"question",label:"질문"}]}),e==="review"?v.jsx(L7,{}):v.jsxs(B7,{children:[v.jsx("p",{children:"아직 질문이 없어요"}),v.jsx("p",{children:"첫 번째 질문을 남겨보세요!"})]}),v.jsx(H7,{onClick:()=>t("/selectGongu"),children:v.jsx("img",{src:"/ogury/plus.svg",alt:""})}),v.jsx(sd,{})]})}const G7=R.div`
  display:flex;
  gap:8px;
  align-items:center;
`,$7=R.div`
  display:flex;
  gap:8px;
  align-items:center;
`,q7=R.div`
  display:flex;
  flex-direction: column;
  gap:0px;
`,Y7=R.div`
  width:36px;
  height:36px;
  border-radius: 100px;
  background-image : url('https://i.postimg.cc/m2vj6D36/ezgif-1c89c5ecb842ad.gif');
  background-position:center;
  background-size:cover;
`,Dw=R.p`
  font-size: 14px;
  font-weight: 400;
  color: #66686E;
`,K7=R.p`
  font-size:16px;
  font-weight: 600;
  color: #232428;
`;function I2(t){return v.jsxs(G7,{children:[v.jsx(Y7,{}),v.jsxs(q7,{children:[v.jsx(K7,{children:t.owner}),v.jsxs($7,{children:[v.jsx(Dw,{children:t.date}),v.jsx(Dw,{children:t.time})]})]})]})}const Q7=()=>v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",children:[v.jsx("path",{d:"M16.546 3.99976H3.45499C2.65169 3.99976 2.00049 4.62934 2.00049 5.40598V17.5935C2.00049 18.3702 2.65169 18.9998 3.45499 18.9998H16.546C17.3493 18.9998 18.0005 18.3702 18.0005 17.5935V5.40598C18.0005 4.62934 17.3493 3.99976 16.546 3.99976Z",fill:"#E5E9EE"}),v.jsx("path",{d:"M3.34599 3.99976H16.6513C17.4674 3.99976 18.1296 4.66243 18.1296 5.47807V7.85942H1.86768V5.47807C1.86768 4.66192 2.53035 3.99976 3.34599 3.99976Z",fill:"#64A7FF"}),v.jsx("path",{d:"M5.07149 5.46344C4.73151 5.46344 4.45557 5.17413 4.45557 4.81651V3.52266C4.45557 3.16503 4.731 2.87573 5.07149 2.87573C5.41197 2.87573 5.68741 3.16503 5.68741 3.52266V4.81651C5.68741 5.17413 5.41197 5.46344 5.07149 5.46344Z",fill:"#4B596A"}),v.jsx("path",{d:"M14.9289 5.46344C14.5889 5.46344 14.313 5.17413 14.313 4.81651V3.52266C14.313 3.16503 14.5884 2.87573 14.9289 2.87573C15.2694 2.87573 15.5448 3.16503 15.5448 3.52266V4.81651C15.5448 5.17413 15.2694 5.46344 14.9289 5.46344Z",fill:"#4B596A"})]}),X7=()=>v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",children:[v.jsx("path",{d:"M10.0016 9.87157C12.1092 9.87157 13.8177 8.16302 13.8177 6.05542C13.8177 3.94781 12.1092 2.23926 10.0016 2.23926C7.89398 2.23926 6.18542 3.94781 6.18542 6.05542C6.18542 8.16302 7.89398 9.87157 10.0016 9.87157Z",fill:"#64A7FF"}),v.jsx("path",{d:"M10.0014 11.5309C15.2235 11.5309 17.232 15.1462 17.232 16.753C17.232 18.3598 13.0141 18.7615 10.0014 18.7615C6.98861 18.7615 2.77075 18.3598 2.77075 16.753C2.77075 14.9453 4.77926 11.5309 10.0014 11.5309Z",fill:"#64A7FF"})]}),W7=()=>v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",children:[v.jsxs("g",{"clip-path":"url(#clip0_596_4441)",children:[v.jsx("path",{d:"M10 1.2041C11.1795 1.2041 11.157 1.6361 11.9515 1.6781C12.746 1.7206 13.1615 1.4706 13.698 1.5496C14.071 1.6046 14.3515 1.7711 14.5455 1.9346C14.7575 2.1136 14.7925 2.4251 14.6235 2.6451L12.7755 5.0461C12.611 5.2416 12.631 5.5311 12.824 5.6981C15.7 8.1896 19.25 11.1861 19.25 13.8766C19.25 18.3976 15.539 19.7966 10 19.7966C4.461 19.7966 0.75 18.3976 0.75 13.8766C0.75 11.1866 4.3 8.1896 7.176 5.6981C7.369 5.5311 7.389 5.2411 7.2245 5.0461L5.3765 2.6451C5.2075 2.4251 5.2425 2.1136 5.4545 1.9346C5.6485 1.7711 5.929 1.6046 6.302 1.5496C6.8385 1.4706 7.2545 1.7206 8.0485 1.6781C8.843 1.6356 8.8205 1.2041 10 1.2041Z",fill:"#64A7FF"}),v.jsx("path",{d:"M10.0412 6.19278C9.07072 6.19278 8.09822 6.10178 7.14922 5.92078C6.84672 5.86278 6.64872 5.57078 6.70622 5.26828C6.76422 4.96578 7.05672 4.76628 7.35872 4.82478C9.11822 5.16028 10.9677 5.16178 12.7072 4.82478C13.0092 4.76428 13.3022 4.96378 13.3607 5.26628C13.4192 5.56878 13.2212 5.86128 12.9187 5.91978C11.9802 6.10128 11.0122 6.19228 10.0412 6.19228V6.19278Z",fill:"#4B596A"}),v.jsx("path",{d:"M10.1203 16.4623C8.8363 16.4623 7.8588 15.7023 7.4498 15.1808C7.2113 14.8763 7.2648 14.4363 7.5693 14.1978C7.8723 13.9608 8.3093 14.0123 8.5488 14.3133C8.6458 14.4328 9.5238 15.4538 10.9003 14.9038C11.2348 14.7703 11.3873 14.5283 11.3648 14.3578C11.3308 14.0973 10.8968 13.7858 10.0048 13.6788C7.8048 13.4148 7.4733 12.1678 7.4238 11.7913C7.3128 10.9413 7.8488 10.1263 8.7578 9.76333C10.5968 9.03033 11.9388 10.0153 12.4303 10.4728C12.7133 10.7358 12.7288 11.1793 12.4653 11.4623C12.2013 11.7448 11.7593 11.7608 11.4758 11.4973C11.0263 11.0783 10.2793 10.6638 9.2763 11.0643C8.9418 11.1978 8.7893 11.4398 8.8118 11.6103C8.8458 11.8708 9.2793 12.1823 10.1713 12.2893C12.3713 12.5533 12.7028 13.8003 12.7523 14.1763C12.8638 15.0263 12.3273 15.8413 11.4188 16.2043C10.9608 16.3868 10.5248 16.4628 10.1198 16.4628L10.1203 16.4623Z",fill:"#E5E9EE"}),v.jsx("path",{d:"M10.0887 10.9019C9.70217 10.9019 9.38867 10.5889 9.38867 10.2024V9.20438C9.38867 8.81788 9.70217 8.50488 10.0887 8.50488C10.4752 8.50488 10.7887 8.81788 10.7887 9.20438V10.2024C10.7887 10.5889 10.4752 10.9019 10.0887 10.9019Z",fill:"#E5E9EE"}),v.jsx("path",{d:"M10.0887 17.4634C9.70217 17.4634 9.38867 17.1504 9.38867 16.7639V15.7659C9.38867 15.3794 9.70217 15.0664 10.0887 15.0664C10.4752 15.0664 10.7887 15.3794 10.7887 15.7659V16.7639C10.7887 17.1504 10.4752 17.4634 10.0887 17.4634Z",fill:"#E5E9EE"})]}),v.jsx("defs",{children:v.jsx("clipPath",{id:"clip0_596_4441",children:v.jsx("rect",{width:"20",height:"20",fill:"white",transform:"translate(0 0.5)"})})})]}),Lg=R.div`
  display:flex;
  width:100%;
  justify-content:space-between;
  align-items:center;
`,Ug=R.div`
  display:flex;
  gap:4px;
  align-items:center;
`,zg=R.p`
  font-size: 14px;
  color:#66686E;
  font-weight:400;
`,Bg=R.p`
  font-size: 14px;
  color:#232428;
  font-weight:400;
`;function Hg(t){const e=t.state;if(e=="1")return v.jsxs(Lg,{children:[v.jsxs(Ug,{children:[v.jsx(Q7,{}),v.jsx(zg,{children:"마감기한"})]}),v.jsx(Bg,{children:t.caption})]});if(e=="2")return v.jsxs(Lg,{children:[v.jsxs(Ug,{children:[v.jsx(X7,{}),v.jsx(zg,{children:"모집인원"})]}),v.jsxs(Bg,{children:[t.caption,"명"]})]});if(e=="3")return v.jsxs(Lg,{children:[v.jsxs(Ug,{children:[v.jsx(W7,{}),v.jsx(zg,{children:"1인당 가격"})]}),v.jsxs(Bg,{children:[t.caption,"원"]})]})}const Z7=R.div`
  width: 402px;
  height: 50px;
  background: #fff;

  position: sticky;
  top: 0;
  z-index: 10;

  & > img {
    width: 100%;
  }
`,J7=R.main`
  width: 402px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
  font-family: "Pretendard", -apple-system, Roboto, Helvetica, sans-serif;
  background-color: #f9f9f9;
  height: 100vh;
`,eM=R.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  background-color: #fff;
`,tM=R.div`
  width: 402px;
  height: 352px;
  overflow-x: scroll;
  display: flex;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`,nM=R.img`
  width: 402px;
  height: 352px;
  flex-shrink: 0;
  object-fit: cover;
  scroll-snap-align: start;
  scroll-snap-stop: always; /* 이 부분 추가! */
`,rM=R.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`,iM=R.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${t=>t.active?"#4284FF":"#FFFFFF"};
  transition: background-color 0.3s;
`,aM=R.div`
  position: relative;
  width: 402px;
  height: 352px;
`,sM=R.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #f9f9f9;
  width: 100%;
`,oM=R.div`
  color: var(--GRAY-GRAY400, #66686e);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.4px;
  margin: 24px 0 6px 0;
`,lM=R.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,uM=R.h1`
  color: var(--GRAY-GRAY600, #232428);
  font-size: 20px;
  font-weight: 700;
  line-height: 130%; /* 26px */
  letter-spacing: -0.5px;
`,cM=R.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`,hM=R.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100%;
  background-color: #fff;
`,fM=R.div`
  color: var(--GRAY-GRAY600, #232428);
  margin-bottom: 44px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
`,dM=R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;R.p`
  color: #3d3b3b;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.64px;
`;const pM=R.div`
  position: absolute;
  top: -40px;
  background: #ebf2ff;
  color: #4284ff;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 8px;
  border-radius: 8px;
  display: inline-block;
  white-space: nowrap;
  transition: left 0.3s ease;
  transform: ${t=>t.$progress<=5?"translateX(0%)":t.$progress>=95?"translateX(-100%)":"translateX(-50%)"};

  left: ${t=>`${t.$progress}%`};

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    width: 0;
    height: 0;
    border-top: 6px solid #ebf2ff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    left: ${t=>t.$progress<=5?"16px":t.$progress>=95?"calc(100% - 16px)":"50%"};
    transform: translateX(-50%);
  }
`;R.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;const gM=R.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,mM=R.div`
  width: 100%;
  height: 12px;
  background-color: #e6e6e6;
  border-radius: 100px;
  overflow: hidden;
`,yM=R.div`
  width: ${t=>t.width}%;
  height: 100%;
  background-color: #4284ff;
  border-radius: 100px;
  transition: width 0.3s ease;
`,vM=R.div`
  display: flex;
`,_M=R.div`
  display: flex;
  margin-left: 4px;
  margin-right: 8px;
`,xM=R.div`
  display: flex;
  margin-left: 0px;
  align-items: center;
`,wM=R.p`
  color: var(--BLUE-BLUE01, #4284ff);
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.35px;
`,Ow=R.p`
  color: var(--GRAY-GRAY400, #66686e);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.35px;
`,bM=R.div`
  margin-left: -4px;
  height: 24px;
`,EM=R.div`
  background: var(--BLUE-BLUE03, #f3f7ff);
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;

  color: var(--BLUE-BLUE01, #4284ff);
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`,TM=R.div`
  position: fixed;
  bottom: 0px;
  z-index: 100;
`,SM=R.div`
  display: flex;
  padding: 10px 20px 36px 20px;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
  width: 402px;
  background-color: #ffffff;
  border-top: 1px solid #dddddd;
`,AM=R.button`
  display: flex;
  height: 42px;
  width: fit-content;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${t=>t.$disabledstyle?"var(--GRAY-GRAY100, #F7F7F7)":"var(--BLUE-BLUE01, #4284FF)"};
  color: ${t=>t.$disabledstyle?"var(--GRAY-GRAY300, #AEAFB6)":"var(--WHITE, #FFF)"};

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.4px;
  border: none;
`,CM=R.div`
  display: flex;
  align-items: center;
`,RM=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-left: 10px;
`,IM=R.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #d9d9d9;
  padding-right: 10px;
  height: 42px;
`,DM=R.div`
  color: var(--GRAY-GRAY600, #232428);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px; /* 120% */
  letter-spacing: -0.5px;
`,OM=R.div`
  color: var(--GRAY-GRAY400, #66686e);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 2px;
  margin-left: 2px;
`,kM=()=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:v.jsx("path",{d:"M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z",fill:"#E0E2E4",stroke:"#E0E2E4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),NM=()=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:v.jsx("path",{d:"M9 6L15 12L9 18",stroke:"#4284FF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),MM=()=>v.jsx(bM,{children:v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[v.jsxs("g",{clipPath:"url(#clip0_692_3150)",children:[v.jsx("rect",{width:"24",height:"24",rx:"12",fill:"#D0D5DA"}),v.jsx("path",{d:"M12.0898 4.35815C14.7672 4.35815 16.9382 6.52848 16.9385 9.20581C16.9385 10.8573 16.1117 12.3148 14.8506 13.1902C18.1842 14.1938 20.5586 16.7833 20.5586 19.8201C20.5584 23.7276 16.6276 26.8952 11.7793 26.8953C6.93088 26.8953 3.00021 23.7277 3 19.8201C3 16.6486 5.58885 13.9641 9.15625 13.0652C7.99328 12.1796 7.24219 10.7804 7.24219 9.20581C7.24245 6.52864 9.41267 4.35842 12.0898 4.35815Z",fill:"#F8F8F8"})]}),v.jsx("rect",{x:"0.5",y:"0.5",width:"23",height:"23",rx:"11.5",stroke:"white"}),v.jsx("defs",{children:v.jsx("clipPath",{id:"clip0_692_3150",children:v.jsx("rect",{width:"24",height:"24",rx:"12",fill:"white"})})})]})});function PM(){var C,O,z,k;const[t,e]=F.useState(0),n=F.useRef(null),{id:a}=Hw(),s=()=>{const V=n.current.scrollLeft,B=Math.round(V/402);e(B)},[l,h]=F.useState({post:[]});F.useEffect(()=>{(async()=>{try{const K=(await Hi(ti(Cn,"gongu"))).docs.map(J=>({id:J.id,...J.data()}));h({post:K})}catch(B){console.error("Error fetching data: ",B)}})()},[]);const d=l.post&&l.post.length>0?l.post.find(V=>String(V.id)===String(a)):null,g=d!=null&&d.finalnum?Math.floor((d.participant??[]).length/d.finalnum*100):0,m=wn(),_=()=>{m(-1),console.log("뒤로가기 버튼 눌렸음!")},E=async()=>{alert("참여완료");const V="공구킹 영재_123456",B=l.post.find(re=>String(re.id)===String(a)),K=B==null?void 0:B.id;if(!K){console.error("문서 ID가 없습니다.");return}const J=[...Array.isArray(B.participant)?B.participant:[],V];try{const re=rl(Cn,"gongu",String(K));await Hy(re,{participant:J}),console.log("참여자 목록 업데이트 성공"),h(ce=>({post:ce.post.map(D=>String(D.id)===String(K)?{...D,participant:J}:D)}))}catch(re){console.error("참여자 목록 업데이트 실패: ",re)}},b=()=>{window.open(d.link,"_blank"),console.log("링크 버튼 눌렸음!")};return v.jsxs(J7,{children:[v.jsx(Z7,{children:v.jsx("img",{src:"/ogury/StatusBar.png",alt:"StatusBar"})}),v.jsx(Va,{state:"IconActionBar",onClick:_}),d?v.jsxs(v.Fragment,{children:[v.jsxs(aM,{children:[v.jsxs(tM,{ref:n,onScroll:s,children:["/* images 데이터 */",d.images&&d.images.map((V,B)=>v.jsx(nM,{src:V,alt:`이미지${B}번`},B))]}),d.images&&d.images.length>1&&v.jsx(rM,{children:d.images.map((V,B)=>v.jsx(iM,{active:B===t},B))})]}),v.jsxs(sM,{children:[v.jsxs(eM,{children:[v.jsxs(lM,{children:[v.jsx(Qu,{label:d.deadline}),v.jsx(uM,{children:d.title})]}),v.jsx(I2,{owner:d.owner?d.owner.split("_")[0]:"",date:new Date(d.date/1).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit"})}),v.jsxs(cM,{children:[v.jsx(Hg,{state:"1",caption:new Date(d.deadline).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit"})}),v.jsx(Hg,{state:"2",caption:(C=d.finalnum)==null?void 0:C.toLocaleString()}),v.jsx(Hg,{state:"3",caption:d.price&&d.finalnum?Math.floor(d.price/d.finalnum).toLocaleString():(O=d.price)==null?void 0:O.toLocaleString()})]}),v.jsx(oM,{children:d.body?d.body.split(`
`).map((V,B)=>v.jsx("p",{children:V},B)):v.jsx("p",{children:"내용이 없습니다."})})]}),v.jsxs(hM,{children:[v.jsx(fM,{children:"참여현황"}),v.jsxs(dM,{children:[v.jsxs(gM,{style:{position:"relative"},children:[v.jsx(mM,{children:v.jsx(yM,{width:g})}),v.jsxs(pM,{$progress:g,children:[g,"% 달성"]})]}),v.jsxs(vM,{children:[(d.participant??[]).length!==0&&v.jsx(_M,{children:Array(Math.min((d.participant??[]).length,3)).fill(0).map((V,B)=>v.jsx(MM,{},B))}),v.jsx(xM,{children:(d.participant??[]).length===0?v.jsx(Ow,{children:"처음으로 참여해보세요!"}):v.jsxs(v.Fragment,{children:[v.jsx(wM,{children:((z=(d.participant??[])[0])==null?void 0:z.split("_")[0])||"아직 아무도 없어요..."}),v.jsx(Ow,{children:d.participant&&d.participant.length>1?`외 ${d.participant.length-1}명이 함께하고 있어요`:d.participant&&d.participant.length===1?"님이 참여중이에요":"아직 아무도 참여하지 않았어요"})]})})]})]}),v.jsx("div",{style:{background:"#fff",width:"100%",minHeight:"150px"}})]})]}),v.jsxs(TM,{children:[v.jsxs(EM,{onClick:b,children:["판매처 보러가기",v.jsx(NM,{})]}),v.jsxs(SM,{children:[v.jsx(IM,{children:v.jsx(kM,{})}),v.jsxs(RM,{children:[v.jsxs(CM,{children:[v.jsxs(DM,{children:[d.price&&d.finalnum?Math.floor(d.price/d.finalnum).toLocaleString():(k=d.price)==null?void 0:k.toLocaleString(),"원"]}),v.jsx(OM,{children:"/인"})]}),v.jsx(AM,{onClick:E,$disabledstyle:(d.participant??[]).includes("공구킹 영재_123456")||d.owner==="공구킹 영재_123456",disabled:(d.participant??[]).includes("공구킹 영재_123456")||d.owner==="공구킹 영재_123456",children:(d.participant??[]).includes("공구킹 영재_123456")||d.owner==="공구킹 영재_123456"?"참여완료":"참여하기"})]})]})]})]}):v.jsx("div",{style:{padding:"32px",width:"100%",textAlign:"center"},children:"로딩 중..."})]})}const jM=R.button`
  display: flex;
  gap: 0px;
  align-items: center;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
`,VM=R.div`
  color: var(--GRAY-GRAY600, #232428);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`,LM=()=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",children:v.jsx("path",{d:"M7.5 15.5L12.5 10.5L7.5 5.5",stroke:"#797979",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})});function UM(t){return v.jsxs(jM,{onClick:t.onClick,children:[v.jsx(VM,{children:t.children}),v.jsx(LM,{})]})}const zM=R.div`
  display: flex;
  gap: 8px;
  padding: 16px 0;
  border-bottom: 1px solid #e9e9e9;
`,BM=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,HM=R.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,FM=R.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,GM=R.div`
  width: 28px;
  height: 28px;
  border-radius: 100px;
  background-color: gray;
`,$M=R.p`
  font-size: 12px;
  font-weight: 400;
  color: #66686e;
`,qM=R.p`
  font-size: 14px;
  font-weight: 600;
  color: #232428;
`,YM=R.p`
  color: var(--GRAY-GRAY400, #66686e);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
  width: 326px;
`,KM=()=>v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[v.jsx("path",{d:"M8.00004 8.66675C8.36823 8.66675 8.66671 8.36827 8.66671 8.00008C8.66671 7.63189 8.36823 7.33341 8.00004 7.33341C7.63185 7.33341 7.33337 7.63189 7.33337 8.00008C7.33337 8.36827 7.63185 8.66675 8.00004 8.66675Z",stroke:"#66686E","stroke-width":"1.33333","stroke-linecap":"round","stroke-linejoin":"round"}),v.jsx("path",{d:"M8.00004 4.00008C8.36823 4.00008 8.66671 3.7016 8.66671 3.33341C8.66671 2.96522 8.36823 2.66675 8.00004 2.66675C7.63185 2.66675 7.33337 2.96522 7.33337 3.33341C7.33337 3.7016 7.63185 4.00008 8.00004 4.00008Z",stroke:"#66686E","stroke-width":"1.33333","stroke-linecap":"round","stroke-linejoin":"round"}),v.jsx("path",{d:"M8.00004 13.3334C8.36823 13.3334 8.66671 13.0349 8.66671 12.6667C8.66671 12.2986 8.36823 12.0001 8.00004 12.0001C7.63185 12.0001 7.33337 12.2986 7.33337 12.6667C7.33337 13.0349 7.63185 13.3334 8.00004 13.3334Z",stroke:"#66686E","stroke-width":"1.33333","stroke-linecap":"round","stroke-linejoin":"round"})]});function QM(t){return v.jsxs(zM,{children:[v.jsx(GM,{}),v.jsxs(FM,{children:[v.jsxs(BM,{children:[v.jsxs(HM,{children:[v.jsx(qM,{children:"이영재"}),v.jsx($M,{children:t.ago||"10분전"})]}),v.jsx("div",{style:{cursor:"pointer"},children:v.jsx(KM,{})})]}),v.jsx(YM,{children:t.text})]})]})}const XM=R.div`
  display: flex;
  padding: 10px 20px 36px 20px;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
  width: 402px;
  background-color: #ffffff;
  border-top: 1px solid #dddddd;
  position: fixed;
  bottom: 0px;
  z-index: 100;
`,WM=R.input`
  height: 42px;
  padding: 8px 12px;
  width: 286px;
  border-radius: 4px;
  background: #f0f1f1;
  border: none;
  outline: none;
  font-size: 14px;
  color: var(--GRAY-GRAY600, #232428);
  caret-color: var(--BLUE-BLUE01, #4284ff);

  &::placeholder {
    color: var(--GRAY-GRAY300, #aeafb6);
  }
`,ZM=R.button`
  display: flex;
  height: 42px;
  width: 70px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--BLUE-BLUE01, #4284ff);
  height: fit-content;

  color: var(--WHITE, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.4px;
  border: none;
`;function JM({onSubmit:t}){const[e,n]=F.useState(""),a=l=>{n(l.target.value)},s=()=>{e.trim()?(t(e),n("")):alert("댓글을 입력해주세요.")};return v.jsxs(XM,{children:[v.jsx(WM,{placeholder:"댓글을 입력해주세요.",value:e,onChange:a}),v.jsx(ZM,{onClick:s,children:"등록"})]})}const eP=R.div`
  width: 402px;
  height: 50px;
  background: #fff;

  position: sticky;
  top: 0;
  z-index: 10;

  & > img {
    width: 100%;
  }
`,tP=R.main`
  width: 100%;
  max-width: 402px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
  font-family: "Pretendard", -apple-system, Roboto, Helvetica, sans-serif;
  background-color: #ffffff;
  height: 100vh;
`,nP=R.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,rP=R.div`
  padding: 16px 20px 100px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100%;
  background-color: #ffffff;
`,iP=R.div`
  width: 402px;
  height: 352px;
  overflow-x: scroll;
  display: flex;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`,aP=R.img`
  width: 402px;
  height: 352px;
  flex-shrink: 0;
  object-fit: cover;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`,sP=R.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`,oP=R.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${t=>t.active?"#4284FF":"#FFFFFF"};
  transition: background-color 0.3s;
`,lP=R.div`
  position: relative;
  width: 402px;
  height: 352px;
`,uP=R.div`
  color: var(--GRAY-GRAY400, #66686e);
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.4px;
`,cP=R.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,hP=R.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;

  & > p.blue01 {
    color: #4284ff;
    font-weight: 600;
  }
`;function fP(t){const a=(Date.now()-t)/1e3,s=a/60,l=s/60,h=l/24,d=h/7;return a<60?"방금전":s<60?`${Math.floor(s)}분전`:l<24?`${Math.floor(l)}시간전`:h<7?`${Math.floor(h)}일전`:`${Math.floor(d)}주전`}function dP(){const[t,e]=F.useState(0),n=F.useRef(null),a=wn(),s=Hw().id,[l,h]=F.useState(null);F.useEffect(()=>{(async()=>{try{const J=rl(Cn,"review",s),re=await e9(J);re.exists()?h({id:re.id,...re.data()}):console.log("문서가 존재하지 않습니다.")}catch(J){console.error("문서 불러오기 실패:",J)}})()},[s]);const d=()=>{const K=n.current.scrollLeft,J=Math.round(K/402);e(J)},g=()=>{a(-1)},m=()=>{a(`/gongu/${l.id}`,{state:{item:l}})},_=async K=>{const J={id:Date.now(),time:Date.now(),comments:K};try{const re=rl(Cn,"review",s);await Hy(re,{comment:n9(J)}),h(ce=>({...ce,comment:[...ce.comment,J]}))}catch(re){console.error("댓글 작성 실패:",re)}};if(!l)return v.jsx("div",{children:"불러오는 중..."});const E=new Date(Number(l.date)),b=E.getFullYear(),C=String(E.getMonth()+1).padStart(2,"0"),O=String(E.getDate()).padStart(2,"0"),z=String(E.getHours()).padStart(2,"0"),k=String(E.getMinutes()).padStart(2,"0"),V=`${b}.${C}.${O}`,B=`${z}:${k}`;return v.jsxs(tP,{children:[v.jsx(eP,{children:v.jsx("img",{src:"/ogury/StatusBar.png",alt:"StatusBar"})}),v.jsx(Va,{state:"IconActionBar",onClick:g}),l.images&&l.images.length>0&&v.jsxs(lP,{children:[v.jsx(iP,{ref:n,onScroll:d,children:l.images.map((K,J)=>v.jsx(aP,{src:K.src,alt:`이미지${J}번`},J))}),l.images.length>1&&v.jsx(sP,{children:l.images.map((K,J)=>v.jsx(oP,{active:J===t},J))})]}),v.jsxs(nP,{children:[v.jsxs(cP,{children:[v.jsx(ZT,{rating:l.rating}),v.jsx(UM,{onClick:m,children:l.title})]}),v.jsx(I2,{owner:"공구킹영재",date:V,time:B}),v.jsx(uP,{children:l.bodys})]}),v.jsxs(rP,{children:[v.jsxs(hP,{children:[v.jsx("p",{className:"gray400",children:"댓글"}),v.jsx("p",{className:"blue01",children:l.comment.length})]}),l.comment.map((K,J)=>v.jsx(QM,{ago:fP(K.time),text:K.comments,alt:`댓글${J}번`},K.id))]}),v.jsx(JM,{onSubmit:_})]})}const pP=R.div`
  background: white;
  width: 402px;
  min-height: 100vh;
  font-family: Pretendard;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`,gP=R.div`
  width: 402px;
  height: 50px;
  background: #fff;

  position: sticky;
  top: 0;
  z-index: 10;

  & > img {
    width: 100%;
  }
`,mP=R.div`
  display: flex;
  width: 402px;
  padding: 16px 20px;
  flex-direction: column;
  gap: 28px;
`,yP=R.div`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  line-height: 30px;
  white-space: pre-line;
`,vP=R.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,_P=R.div`
  display: flex;
  padding: 12px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #fff;
  height: 72px;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`,xP=R.div`
  display: flex;
  align-items: center;
  gap: 13px;
  flex: 1;
`,wP=R.div`
  width: 48px;
  height: 48px;
  background: ${t=>t.image?`url(${t.image}) center/cover no-repeat`:"#F7F7F7"};
  border-radius: 8px;
`,bP=R.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,EP=R.div`
  font-size: 18px;
  font-weight: 600;
  color: #232428;
  line-height: 23.4px;
`,TP=R.div`
  font-size: 14px;
  color: #66686e;
  line-height: 18.2px;
`,SP=R.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 402px;

  background-color: #fff;
  padding: 12px 20px 36px;
  z-index: 100;
`,AP=R.button`
  bottom: 26px;
  left: 20px;
  right: 20px;
  width: 100%;

  background: #f7f7f7;
  border-radius: 8px;
  border: none;
  padding: 16px 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #aeafb6;

  cursor: pointer;
  position: sticky;
  /* bottom: 36px; */
`,CP=t=>{Array(5).fill({title:"테무 토마토 공구",date:"2025.05.10"});const e=wn(),[n,a]=F.useState(null),s=()=>{if(n!==null){const g=l.find(m=>m.id===n);e("/community/new",{state:g}),console.log(g)}},[l,h]=F.useState([]);F.useEffect(()=>{(async()=>{try{const E=(await Hi(ti(Cn,"gongu"))).docs.map(C=>({id:C.id,...C.data()})).filter(C=>C.isReviewed===!1),b=E.filter(C=>C.participant&&C.participant.length===C.finalnum);h(b),console.log("공동구매 참여 완료된 데이터:",E),console.log("공동구매 참여 완료 + 인원 꽉:",b)}catch(m){console.error("공동구매 데이터 불러오기 실패:",m)}})()},[]);const d=g=>{const m=new Date(Number(g)),_=m.getFullYear(),E=String(m.getMonth()+1).padStart(2,"0"),b=String(m.getDate()).padStart(2,"0");return`${_}.${E}.${b}`};return v.jsxs(pP,{children:[v.jsx(gP,{children:v.jsx("img",{src:"/ogury/StatusBar.png",alt:"StatusBar"})}),v.jsx(Va,{state:"IconActionBar",iconType:"close",onClick:()=>e(-1)}),v.jsxs(mP,{children:[v.jsxs(yP,{children:["어떤 공동구매에 대한",`
`,"리뷰를 남겨볼까요?"]}),v.jsx(vP,{children:l.map(g=>v.jsx(_P,{onClick:()=>a(g.id),style:{border:n===g.id?"1px solid #4F8FFF":"1px solid #fff",background:n===g.id?"#eaf2ff":"#fff"},children:v.jsxs(xP,{children:[v.jsx(wP,{image:g.images[0]}),v.jsxs(bP,{children:[v.jsx(EP,{children:g.title}),v.jsxs(TP,{children:["참여일: ",d(g.date)]})]})]})},g.id))})]}),v.jsxs(SP,{children:[v.jsx(AP,{onClick:s,disabled:n===null,style:{background:n===null?"#f7f7f7":"#4F8FFF",color:n===null?"#aeafb6":"#fff",cursor:n===null?"not-allowed":"pointer"},children:"다음"})," "]})]})},RP=cA.createRoot(document.getElementById("root"));RP.render(v.jsx(S4,{basename:void 0,children:v.jsxs(t4,{children:[v.jsx(zr,{path:"/",element:v.jsx(fO,{})}),v.jsx(zr,{path:"/gongu",element:v.jsx(zO,{})}),v.jsx(zr,{path:"/gongu/new",element:v.jsx(t7,{})}),v.jsx(zr,{path:"/status",element:v.jsx(P7,{})}),v.jsx(zr,{path:"/gongu/:id",element:v.jsx(PM,{})}),v.jsx(zr,{path:"/community",element:v.jsx(F7,{})}),v.jsx(zr,{path:"/selectGongu",element:v.jsx(CP,{})}),v.jsx(zr,{path:"/community/new",element:v.jsx(g7,{})}),v.jsx(zr,{path:"/community/:id",element:v.jsx(dP,{})})]})}));
