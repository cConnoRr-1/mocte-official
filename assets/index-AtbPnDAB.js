(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var Jd={exports:{}},tu={};var ox;function yT(){if(ox)return tu;ox=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,l){var c=null;if(l!==void 0&&(c=""+l),o.key!==void 0&&(c=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:r,type:a,key:c,ref:o!==void 0?o:null,props:l}}return tu.Fragment=e,tu.jsx=n,tu.jsxs=n,tu}var lx;function ET(){return lx||(lx=1,Jd.exports=yT()),Jd.exports}var At=ET(),$d={exports:{}},lt={};var ux;function TT(){if(ux)return lt;ux=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function M(I,j,ge){this.props=I,this.context=j,this.refs=S,this.updater=ge||y}M.prototype.isReactComponent={},M.prototype.setState=function(I,j){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,j,"setState")},M.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function R(){}R.prototype=M.prototype;function D(I,j,ge){this.props=I,this.context=j,this.refs=S,this.updater=ge||y}var C=D.prototype=new R;C.constructor=D,T(C,M.prototype),C.isPureReactComponent=!0;var N=Array.isArray;function P(){}var O={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function w(I,j,ge){var Ee=ge.ref;return{$$typeof:r,type:I,key:j,ref:Ee!==void 0?Ee:null,props:ge}}function J(I,j){return w(I.type,j,I.props)}function H(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function q(I){var j={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ge){return j[ge]})}var K=/\/+/g;function ee(I,j){return typeof I=="object"&&I!==null&&I.key!=null?q(""+I.key):j.toString(36)}function Z(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(P,P):(I.status="pending",I.then(function(j){I.status==="pending"&&(I.status="fulfilled",I.value=j)},function(j){I.status==="pending"&&(I.status="rejected",I.reason=j)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function B(I,j,ge,Ee,Ue){var ie=typeof I;(ie==="undefined"||ie==="boolean")&&(I=null);var ve=!1;if(I===null)ve=!0;else switch(ie){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(I.$$typeof){case r:case e:ve=!0;break;case g:return ve=I._init,B(ve(I._payload),j,ge,Ee,Ue)}}if(ve)return Ue=Ue(I),ve=Ee===""?"."+ee(I,0):Ee,N(Ue)?(ge="",ve!=null&&(ge=ve.replace(K,"$&/")+"/"),B(Ue,j,ge,"",function(Ze){return Ze})):Ue!=null&&(H(Ue)&&(Ue=J(Ue,ge+(Ue.key==null||I&&I.key===Ue.key?"":(""+Ue.key).replace(K,"$&/")+"/")+ve)),j.push(Ue)),1;ve=0;var be=Ee===""?".":Ee+":";if(N(I))for(var Fe=0;Fe<I.length;Fe++)Ee=I[Fe],ie=be+ee(Ee,Fe),ve+=B(Ee,j,ge,ie,Ue);else if(Fe=x(I),typeof Fe=="function")for(I=Fe.call(I),Fe=0;!(Ee=I.next()).done;)Ee=Ee.value,ie=be+ee(Ee,Fe++),ve+=B(Ee,j,ge,ie,Ue);else if(ie==="object"){if(typeof I.then=="function")return B(Z(I),j,ge,Ee,Ue);throw j=String(I),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ve}function F(I,j,ge){if(I==null)return I;var Ee=[],Ue=0;return B(I,Ee,"","",function(ie){return j.call(ge,ie,Ue++)}),Ee}function se(I){if(I._status===-1){var j=I._result;j=j(),j.then(function(ge){(I._status===0||I._status===-1)&&(I._status=1,I._result=ge)},function(ge){(I._status===0||I._status===-1)&&(I._status=2,I._result=ge)}),I._status===-1&&(I._status=0,I._result=j)}if(I._status===1)return I._result.default;throw I._result}var fe=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Se={map:F,forEach:function(I,j,ge){F(I,function(){j.apply(this,arguments)},ge)},count:function(I){var j=0;return F(I,function(){j++}),j},toArray:function(I){return F(I,function(j){return j})||[]},only:function(I){if(!H(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return lt.Activity=v,lt.Children=Se,lt.Component=M,lt.Fragment=n,lt.Profiler=o,lt.PureComponent=D,lt.StrictMode=a,lt.Suspense=p,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,lt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},lt.cache=function(I){return function(){return I.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(I,j,ge){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ee=T({},I.props),Ue=I.key;if(j!=null)for(ie in j.key!==void 0&&(Ue=""+j.key),j)!A.call(j,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&j.ref===void 0||(Ee[ie]=j[ie]);var ie=arguments.length-2;if(ie===1)Ee.children=ge;else if(1<ie){for(var ve=Array(ie),be=0;be<ie;be++)ve[be]=arguments[be+2];Ee.children=ve}return w(I.type,Ue,Ee)},lt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},lt.createElement=function(I,j,ge){var Ee,Ue={},ie=null;if(j!=null)for(Ee in j.key!==void 0&&(ie=""+j.key),j)A.call(j,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(Ue[Ee]=j[Ee]);var ve=arguments.length-2;if(ve===1)Ue.children=ge;else if(1<ve){for(var be=Array(ve),Fe=0;Fe<ve;Fe++)be[Fe]=arguments[Fe+2];Ue.children=be}if(I&&I.defaultProps)for(Ee in ve=I.defaultProps,ve)Ue[Ee]===void 0&&(Ue[Ee]=ve[Ee]);return w(I,ie,Ue)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(I){return{$$typeof:f,render:I}},lt.isValidElement=H,lt.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:se}},lt.memo=function(I,j){return{$$typeof:d,type:I,compare:j===void 0?null:j}},lt.startTransition=function(I){var j=O.T,ge={};O.T=ge;try{var Ee=I(),Ue=O.S;Ue!==null&&Ue(ge,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(P,fe)}catch(ie){fe(ie)}finally{j!==null&&ge.types!==null&&(j.types=ge.types),O.T=j}},lt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},lt.use=function(I){return O.H.use(I)},lt.useActionState=function(I,j,ge){return O.H.useActionState(I,j,ge)},lt.useCallback=function(I,j){return O.H.useCallback(I,j)},lt.useContext=function(I){return O.H.useContext(I)},lt.useDebugValue=function(){},lt.useDeferredValue=function(I,j){return O.H.useDeferredValue(I,j)},lt.useEffect=function(I,j){return O.H.useEffect(I,j)},lt.useEffectEvent=function(I){return O.H.useEffectEvent(I)},lt.useId=function(){return O.H.useId()},lt.useImperativeHandle=function(I,j,ge){return O.H.useImperativeHandle(I,j,ge)},lt.useInsertionEffect=function(I,j){return O.H.useInsertionEffect(I,j)},lt.useLayoutEffect=function(I,j){return O.H.useLayoutEffect(I,j)},lt.useMemo=function(I,j){return O.H.useMemo(I,j)},lt.useOptimistic=function(I,j){return O.H.useOptimistic(I,j)},lt.useReducer=function(I,j,ge){return O.H.useReducer(I,j,ge)},lt.useRef=function(I){return O.H.useRef(I)},lt.useState=function(I){return O.H.useState(I)},lt.useSyncExternalStore=function(I,j,ge){return O.H.useSyncExternalStore(I,j,ge)},lt.useTransition=function(){return O.H.useTransition()},lt.version="19.2.4",lt}var cx;function Jm(){return cx||(cx=1,$d.exports=TT()),$d.exports}var gt=Jm(),ep={exports:{}},nu={},tp={exports:{}},np={};var fx;function bT(){return fx||(fx=1,(function(r){function e(B,F){var se=B.length;B.push(F);e:for(;0<se;){var fe=se-1>>>1,Se=B[fe];if(0<o(Se,F))B[fe]=F,B[se]=Se,se=fe;else break e}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var F=B[0],se=B.pop();if(se!==F){B[0]=se;e:for(var fe=0,Se=B.length,I=Se>>>1;fe<I;){var j=2*(fe+1)-1,ge=B[j],Ee=j+1,Ue=B[Ee];if(0>o(ge,se))Ee<Se&&0>o(Ue,ge)?(B[fe]=Ue,B[Ee]=se,fe=Ee):(B[fe]=ge,B[j]=se,fe=j);else if(Ee<Se&&0>o(Ue,se))B[fe]=Ue,B[Ee]=se,fe=Ee;else break e}}return F}function o(B,F){var se=B.sortIndex-F.sortIndex;return se!==0?se:B.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],d=[],g=1,v=null,_=3,x=!1,y=!1,T=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var F=n(d);F!==null;){if(F.callback===null)a(d);else if(F.startTime<=B)a(d),F.sortIndex=F.expirationTime,e(p,F);else break;F=n(d)}}function N(B){if(T=!1,C(B),!y)if(n(p)!==null)y=!0,P||(P=!0,q());else{var F=n(d);F!==null&&Z(N,F.startTime-B)}}var P=!1,O=-1,A=5,w=-1;function J(){return S?!0:!(r.unstable_now()-w<A)}function H(){if(S=!1,P){var B=r.unstable_now();w=B;var F=!0;try{e:{y=!1,T&&(T=!1,R(O),O=-1),x=!0;var se=_;try{t:{for(C(B),v=n(p);v!==null&&!(v.expirationTime>B&&J());){var fe=v.callback;if(typeof fe=="function"){v.callback=null,_=v.priorityLevel;var Se=fe(v.expirationTime<=B);if(B=r.unstable_now(),typeof Se=="function"){v.callback=Se,C(B),F=!0;break t}v===n(p)&&a(p),C(B)}else a(p);v=n(p)}if(v!==null)F=!0;else{var I=n(d);I!==null&&Z(N,I.startTime-B),F=!1}}break e}finally{v=null,_=se,x=!1}F=void 0}}finally{F?q():P=!1}}}var q;if(typeof D=="function")q=function(){D(H)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ee=K.port2;K.port1.onmessage=H,q=function(){ee.postMessage(null)}}else q=function(){M(H,0)};function Z(B,F){O=M(function(){B(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(B){switch(_){case 1:case 2:case 3:var F=3;break;default:F=_}var se=_;_=F;try{return B()}finally{_=se}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(B,F){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=_;_=B;try{return F()}finally{_=se}},r.unstable_scheduleCallback=function(B,F,se){var fe=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?fe+se:fe):se=fe,B){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=se+Se,B={id:g++,callback:F,priorityLevel:B,startTime:se,expirationTime:Se,sortIndex:-1},se>fe?(B.sortIndex=se,e(d,B),n(p)===null&&B===n(d)&&(T?(R(O),O=-1):T=!0,Z(N,se-fe))):(B.sortIndex=Se,e(p,B),y||x||(y=!0,P||(P=!0,q()))),B},r.unstable_shouldYield=J,r.unstable_wrapCallback=function(B){var F=_;return function(){var se=_;_=F;try{return B.apply(this,arguments)}finally{_=se}}}})(np)),np}var hx;function AT(){return hx||(hx=1,tp.exports=bT()),tp.exports}var ip={exports:{}},qn={};var dx;function RT(){if(dx)return qn;dx=1;var r=Jm();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:d,implementation:g}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,qn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return l(p,d,null,g)},qn.flushSync=function(p){var d=c.T,g=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=g,a.d.f()}},qn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},qn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},qn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},qn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},qn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},qn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},qn.requestFormReset=function(p){a.d.r(p)},qn.unstable_batchedUpdates=function(p,d){return p(d)},qn.useFormState=function(p,d,g){return c.H.useFormState(p,d,g)},qn.useFormStatus=function(){return c.H.useHostTransitionStatus()},qn.version="19.2.4",qn}var px;function CT(){if(px)return ip.exports;px=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ip.exports=RT(),ip.exports}var mx;function wT(){if(mx)return nu;mx=1;var r=AT(),e=Jm(),n=CT();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function l(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function c(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(l(t)!==t)throw Error(a(188))}function d(t){var i=t.alternate;if(!i){if(i=l(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,u=i;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){s=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return p(h),t;if(m===u)return p(h),i;m=m.sibling}throw Error(a(188))}if(s.return!==u.return)s=h,u=m;else{for(var E=!1,U=h.child;U;){if(U===s){E=!0,s=h,u=m;break}if(U===u){E=!0,u=h,s=m;break}U=U.sibling}if(!E){for(U=m.child;U;){if(U===s){E=!0,s=m,u=h;break}if(U===u){E=!0,u=m,s=h;break}U=U.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==u)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),D=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var K=Symbol.for("react.client.reference");function ee(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===K?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case M:return"Profiler";case S:return"StrictMode";case N:return"Suspense";case P:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case D:return t.displayName||"Context";case R:return(t._context.displayName||"Context")+".Consumer";case C:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return i=t.displayName||null,i!==null?i:ee(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return ee(t(i))}catch{}}return null}var Z=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},fe=[],Se=-1;function I(t){return{current:t}}function j(t){0>Se||(t.current=fe[Se],fe[Se]=null,Se--)}function ge(t,i){Se++,fe[Se]=t.current,t.current=i}var Ee=I(null),Ue=I(null),ie=I(null),ve=I(null);function be(t,i){switch(ge(ie,i),ge(Ue,t),ge(Ee,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Dv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Dv(i),t=Uv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(Ee),ge(Ee,t)}function Fe(){j(Ee),j(Ue),j(ie)}function Ze(t){t.memoizedState!==null&&ge(ve,t);var i=Ee.current,s=Uv(i,t.type);i!==s&&(ge(Ue,t),ge(Ee,s))}function Je(t){Ue.current===t&&(j(Ee),j(Ue)),ve.current===t&&(j(ve),Ql._currentValue=se)}var $t,mt;function dt(t){if($t===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);$t=i&&i[1]||"",mt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+t+mt}var Ct=!1;function at(t,i){if(!t||Ct)return"";Ct=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ce){var re=ce}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ce){re=ce}t.call(xe.prototype)}}else{try{throw Error()}catch(ce){re=ce}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ce){if(ce&&re&&typeof ce.stack=="string")return[ce.stack,re.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],U=m[1];if(E&&U){var V=E.split(`
`),ne=U.split(`
`);for(h=u=0;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;for(;h<ne.length&&!ne[h].includes("DetermineComponentFrameRoot");)h++;if(u===V.length||h===ne.length)for(u=V.length-1,h=ne.length-1;1<=u&&0<=h&&V[u]!==ne[h];)h--;for(;1<=u&&0<=h;u--,h--)if(V[u]!==ne[h]){if(u!==1||h!==1)do if(u--,h--,0>h||V[u]!==ne[h]){var pe=`
`+V[u].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=u&&0<=h);break}}}finally{Ct=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?dt(s):""}function Ht(t,i){switch(t.tag){case 26:case 27:case 5:return dt(t.type);case 16:return dt("Lazy");case 13:return t.child!==i&&i!==null?dt("Suspense Fallback"):dt("Suspense");case 19:return dt("SuspenseList");case 0:case 15:return at(t.type,!1);case 11:return at(t.type.render,!1);case 1:return at(t.type,!0);case 31:return dt("Activity");default:return""}}function k(t){try{var i="",s=null;do i+=Ht(t,s),s=t,t=t.return;while(t);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var Zt=Object.prototype.hasOwnProperty,_t=r.unstable_scheduleCallback,Tt=r.unstable_cancelCallback,Ge=r.unstable_shouldYield,z=r.unstable_requestPaint,b=r.unstable_now,G=r.unstable_getCurrentPriorityLevel,de=r.unstable_ImmediatePriority,me=r.unstable_UserBlockingPriority,ue=r.unstable_NormalPriority,Be=r.unstable_LowPriority,Ae=r.unstable_IdlePriority,Xe=r.log,Ke=r.unstable_setDisableYieldValue,ye=null,Me=null;function Le(t){if(typeof Xe=="function"&&Ke(t),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(ye,t)}catch{}}var we=Math.clz32?Math.clz32:Y,Ne=Math.log,tt=Math.LN2;function Y(t){return t>>>=0,t===0?32:31-(Ne(t)/tt|0)|0}var Ce=256,Re=262144,ze=4194304;function Te(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function he(t,i,s){var u=t.pendingLanes;if(u===0)return 0;var h=0,m=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var U=u&134217727;return U!==0?(u=U&~m,u!==0?h=Te(u):(E&=U,E!==0?h=Te(E):s||(s=U&~t,s!==0&&(h=Te(s))))):(U=u&~m,U!==0?h=Te(U):E!==0?h=Te(E):s||(s=u&~t,s!==0&&(h=Te(s)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:h}function He(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function it(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gt(){var t=ze;return ze<<=1,(ze&62914560)===0&&(ze=4194304),t}function wt(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Jn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ji(t,i,s,u,h,m){var E=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var U=t.entanglements,V=t.expirationTimes,ne=t.hiddenUpdates;for(s=E&~s;0<s;){var pe=31-we(s),xe=1<<pe;U[pe]=0,V[pe]=-1;var re=ne[pe];if(re!==null)for(ne[pe]=null,pe=0;pe<re.length;pe++){var ce=re[pe];ce!==null&&(ce.lane&=-536870913)}s&=~xe}u!==0&&hl(t,u,0),m!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=m&~(E&~i))}function hl(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var u=31-we(i);t.entangledLanes|=i,t.entanglements[u]=t.entanglements[u]|1073741824|s&261930}function Xs(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var u=31-we(s),h=1<<u;h&i|t[u]&i&&(t[u]|=i),s&=~h}}function Pu(t,i){var s=i&-i;return s=(s&42)!==0?1:Ws(s),(s&(t.suspendedLanes|i))!==0?0:s}function Ws(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ys(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function pa(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:ex(t.type))}function qs(t,i){var s=F.p;try{return F.p=t,i()}finally{F.p=s}}var $i=Math.random().toString(36).slice(2),_n="__reactFiber$"+$i,Cn="__reactProps$"+$i,Ua="__reactContainer$"+$i,dr="__reactEvents$"+$i,Bu="__reactListeners$"+$i,zu="__reactHandles$"+$i,Iu="__reactResources$"+$i,rs="__reactMarker$"+$i;function dl(t){delete t[_n],delete t[Cn],delete t[dr],delete t[Bu],delete t[zu]}function pr(t){var i=t[_n];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ua]||s[_n]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Iv(t);t!==null;){if(s=t[_n])return s;t=Iv(t)}return i}t=s,s=t.parentNode}return null}function mr(t){if(t=t[_n]||t[Ua]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function ss(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function L(t){var i=t[Iu];return i||(i=t[Iu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function W(t){t[rs]=!0}var le=new Set,ae={};function $(t,i){De(t,i),De(t+"Capture",i)}function De(t,i){for(ae[t]=i,t=0;t<i.length;t++)le.add(i[t])}var Ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Oe={},Ye={};function je(t){return Zt.call(Ye,t)?!0:Zt.call(Oe,t)?!1:Ie.test(t)?Ye[t]=!0:(Oe[t]=!0,!1)}function nt(t,i,s){if(je(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function ot(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ve(t,i,s,u){if(u===null)t.removeAttribute(s);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+u)}}function ct(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nn(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function an(t,i,s){var u=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var h=u.get,m=u.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){s=""+E,m.call(this,E)}}),Object.defineProperty(t,i,{enumerable:u.enumerable}),{getValue:function(){return s},setValue:function(E){s=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Lt(t){if(!t._valueTracker){var i=nn(t)?"checked":"value";t._valueTracker=an(t,i,""+t[i])}}function wn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return t&&(u=nn(t)?t.checked?"true":"false":t.value),t=u,t!==s?(i.setValue(t),!0):!1}function We(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var $n=/[\n"\\]/g;function rt(t){return t.replace($n,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ei(t,i,s,u,h,m,E,U){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ct(i)):t.value!==""+ct(i)&&(t.value=""+ct(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?ea(t,E,ct(i)):s!=null?ea(t,E,ct(s)):u!=null&&t.removeAttribute("value"),h==null&&m!=null&&(t.defaultChecked=!!m),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?t.name=""+ct(U):t.removeAttribute("name")}function vi(t,i,s,u,h,m,E,U){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Lt(t);return}s=s!=null?""+ct(s):"",i=i!=null?""+ct(i):s,U||i===t.value||(t.value=i),t.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,t.checked=U?t.checked:!!u,t.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E),Lt(t)}function ea(t,i,s){i==="number"&&We(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function xi(t,i,s,u){if(t=t.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<t.length;s++)h=i.hasOwnProperty("$"+t[s].value),t[s].selected!==h&&(t[s].selected=h),h&&u&&(t[s].defaultSelected=!0)}else{for(s=""+ct(s),i=null,h=0;h<t.length;h++){if(t[h].value===s){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function It(t,i,s){if(i!=null&&(i=""+ct(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+ct(s):""}function vn(t,i,s,u){if(i==null){if(u!=null){if(s!=null)throw Error(a(92));if(Z(u)){if(1<u.length)throw Error(a(93));u=u[0]}s=u}s==null&&(s=""),i=s}s=ct(i),t.defaultValue=s,u=t.textContent,u===s&&u!==""&&u!==null&&(t.value=u),Lt(t)}function ti(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var xn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ta(t,i,s){var u=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?u?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":u?t.setProperty(i,s):typeof s!="number"||s===0||xn.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function La(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var u in s)!s.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?t.setProperty(u,""):u==="float"?t.cssFloat="":t[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&s[h]!==u&&ta(t,h,u)}else for(var m in i)i.hasOwnProperty(m)&&ta(t,m,i[m])}function js(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fu(t){return xy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Na(){}var Zf=null;function Kf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zs=null,Ks=null;function w0(t){var i=mr(t);if(i&&(t=i.stateNode)){var s=t[Cn]||null;e:switch(t=i.stateNode,i.type){case"input":if(ei(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+rt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==t&&u.form===t.form){var h=u[Cn]||null;if(!h)throw Error(a(90));ei(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)u=s[i],u.form===t.form&&wn(u)}break e;case"textarea":It(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&xi(t,!!s.multiple,i,!1)}}}var Qf=!1;function D0(t,i,s){if(Qf)return t(i,s);Qf=!0;try{var u=t(i);return u}finally{if(Qf=!1,(Zs!==null||Ks!==null)&&(Ac(),Zs&&(i=Zs,t=Ks,Ks=Zs=null,w0(i),t)))for(i=0;i<t.length;i++)w0(t[i])}}function pl(t,i){var s=t.stateNode;if(s===null)return null;var u=s[Cn]||null;if(u===null)return null;s=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jf=!1;if(Oa)try{var ml={};Object.defineProperty(ml,"passive",{get:function(){Jf=!0}}),window.addEventListener("test",ml,ml),window.removeEventListener("test",ml,ml)}catch{Jf=!1}var gr=null,$f=null,Hu=null;function U0(){if(Hu)return Hu;var t,i=$f,s=i.length,u,h="value"in gr?gr.value:gr.textContent,m=h.length;for(t=0;t<s&&i[t]===h[t];t++);var E=s-t;for(u=1;u<=E&&i[s-u]===h[m-u];u++);return Hu=h.slice(t,1<u?1-u:void 0)}function Gu(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Vu(){return!0}function L0(){return!1}function oi(t){function i(s,u,h,m,E){this._reactName=s,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(s=t[U],this[U]=s?s(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Vu:L0,this.isPropagationStopped=L0,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Vu)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Vu)},persist:function(){},isPersistent:Vu}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ku=oi(os),gl=v({},os,{view:0,detail:0}),Sy=oi(gl),eh,th,_l,Xu=v({},gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ih,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_l&&(_l&&t.type==="mousemove"?(eh=t.screenX-_l.screenX,th=t.screenY-_l.screenY):th=eh=0,_l=t),eh)},movementY:function(t){return"movementY"in t?t.movementY:th}}),N0=oi(Xu),My=v({},Xu,{dataTransfer:0}),yy=oi(My),Ey=v({},gl,{relatedTarget:0}),nh=oi(Ey),Ty=v({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),by=oi(Ty),Ay=v({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ry=oi(Ay),Cy=v({},os,{data:0}),O0=oi(Cy),wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ly(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Uy[t])?!!i[t]:!1}function ih(){return Ly}var Ny=v({},gl,{key:function(t){if(t.key){var i=wy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Gu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ih,charCode:function(t){return t.type==="keypress"?Gu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Oy=oi(Ny),Py=v({},Xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),P0=oi(Py),By=v({},gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ih}),zy=oi(By),Iy=v({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fy=oi(Iy),Hy=v({},Xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gy=oi(Hy),Vy=v({},os,{newState:0,oldState:0}),ky=oi(Vy),Xy=[9,13,27,32],ah=Oa&&"CompositionEvent"in window,vl=null;Oa&&"documentMode"in document&&(vl=document.documentMode);var Wy=Oa&&"TextEvent"in window&&!vl,B0=Oa&&(!ah||vl&&8<vl&&11>=vl),z0=" ",I0=!1;function F0(t,i){switch(t){case"keyup":return Xy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function Yy(t,i){switch(t){case"compositionend":return H0(i);case"keypress":return i.which!==32?null:(I0=!0,z0);case"textInput":return t=i.data,t===z0&&I0?null:t;default:return null}}function qy(t,i){if(Qs)return t==="compositionend"||!ah&&F0(t,i)?(t=U0(),Hu=$f=gr=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return B0&&i.locale!=="ko"?null:i.data;default:return null}}var jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function G0(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!jy[t.type]:i==="textarea"}function V0(t,i,s,u){Zs?Ks?Ks.push(u):Ks=[u]:Zs=u,i=Nc(i,"onChange"),0<i.length&&(s=new ku("onChange","change",null,s,u),t.push({event:s,listeners:i}))}var xl=null,Sl=null;function Zy(t){Tv(t,0)}function Wu(t){var i=ss(t);if(wn(i))return t}function k0(t,i){if(t==="change")return i}var X0=!1;if(Oa){var rh;if(Oa){var sh="oninput"in document;if(!sh){var W0=document.createElement("div");W0.setAttribute("oninput","return;"),sh=typeof W0.oninput=="function"}rh=sh}else rh=!1;X0=rh&&(!document.documentMode||9<document.documentMode)}function Y0(){xl&&(xl.detachEvent("onpropertychange",q0),Sl=xl=null)}function q0(t){if(t.propertyName==="value"&&Wu(Sl)){var i=[];V0(i,Sl,t,Kf(t)),D0(Zy,i)}}function Ky(t,i,s){t==="focusin"?(Y0(),xl=i,Sl=s,xl.attachEvent("onpropertychange",q0)):t==="focusout"&&Y0()}function Qy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wu(Sl)}function Jy(t,i){if(t==="click")return Wu(i)}function $y(t,i){if(t==="input"||t==="change")return Wu(i)}function eE(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Si=typeof Object.is=="function"?Object.is:eE;function Ml(t,i){if(Si(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var h=s[u];if(!Zt.call(i,h)||!Si(t[h],i[h]))return!1}return!0}function j0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Z0(t,i){var s=j0(t);t=0;for(var u;s;){if(s.nodeType===3){if(u=t+s.textContent.length,t<=i&&u>=i)return{node:s,offset:i-t};t=u}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=j0(s)}}function K0(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?K0(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Q0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=We(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=We(t.document)}return i}function oh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var tE=Oa&&"documentMode"in document&&11>=document.documentMode,Js=null,lh=null,yl=null,uh=!1;function J0(t,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;uh||Js==null||Js!==We(u)||(u=Js,"selectionStart"in u&&oh(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),yl&&Ml(yl,u)||(yl=u,u=Nc(lh,"onSelect"),0<u.length&&(i=new ku("onSelect","select",null,i,s),t.push({event:i,listeners:u}),i.target=Js)))}function ls(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var $s={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},ch={},$0={};Oa&&($0=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function us(t){if(ch[t])return ch[t];if(!$s[t])return t;var i=$s[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in $0)return ch[t]=i[s];return t}var eg=us("animationend"),tg=us("animationiteration"),ng=us("animationstart"),nE=us("transitionrun"),iE=us("transitionstart"),aE=us("transitioncancel"),ig=us("transitionend"),ag=new Map,fh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fh.push("scrollEnd");function na(t,i){ag.set(t,i),$(i,[t])}var Yu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ii=[],eo=0,hh=0;function qu(){for(var t=eo,i=hh=eo=0;i<t;){var s=Ii[i];Ii[i++]=null;var u=Ii[i];Ii[i++]=null;var h=Ii[i];Ii[i++]=null;var m=Ii[i];if(Ii[i++]=null,u!==null&&h!==null){var E=u.pending;E===null?h.next=h:(h.next=E.next,E.next=h),u.pending=h}m!==0&&rg(s,h,m)}}function ju(t,i,s,u){Ii[eo++]=t,Ii[eo++]=i,Ii[eo++]=s,Ii[eo++]=u,hh|=u,t.lanes|=u,t=t.alternate,t!==null&&(t.lanes|=u)}function dh(t,i,s,u){return ju(t,i,s,u),Zu(t)}function cs(t,i){return ju(t,null,null,i),Zu(t)}function rg(t,i,s){t.lanes|=s;var u=t.alternate;u!==null&&(u.lanes|=s);for(var h=!1,m=t.return;m!==null;)m.childLanes|=s,u=m.alternate,u!==null&&(u.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(h=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,h&&i!==null&&(h=31-we(s),t=m.hiddenUpdates,u=t[h],u===null?t[h]=[i]:u.push(i),i.lane=s|536870912),m):null}function Zu(t){if(50<Xl)throw Xl=0,yd=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var to={};function rE(t,i,s,u){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(t,i,s,u){return new rE(t,i,s,u)}function ph(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pa(t,i){var s=t.alternate;return s===null?(s=Mi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function sg(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Ku(t,i,s,u,h,m){var E=0;if(u=t,typeof t=="function")ph(t)&&(E=1);else if(typeof t=="string")E=cT(t,s,Ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=Mi(31,s,i,h),t.elementType=w,t.lanes=m,t;case T:return fs(s.children,h,m,i);case S:E=8,h|=24;break;case M:return t=Mi(12,s,i,h|2),t.elementType=M,t.lanes=m,t;case N:return t=Mi(13,s,i,h),t.elementType=N,t.lanes=m,t;case P:return t=Mi(19,s,i,h),t.elementType=P,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:E=10;break e;case R:E=9;break e;case C:E=11;break e;case O:E=14;break e;case A:E=16,u=null;break e}E=29,s=Error(a(130,t===null?"null":typeof t,"")),u=null}return i=Mi(E,s,i,h),i.elementType=t,i.type=u,i.lanes=m,i}function fs(t,i,s,u){return t=Mi(7,t,u,i),t.lanes=s,t}function mh(t,i,s){return t=Mi(6,t,null,i),t.lanes=s,t}function og(t){var i=Mi(18,null,null,0);return i.stateNode=t,i}function gh(t,i,s){return i=Mi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var lg=new WeakMap;function Fi(t,i){if(typeof t=="object"&&t!==null){var s=lg.get(t);return s!==void 0?s:(i={value:t,source:i,stack:k(i)},lg.set(t,i),i)}return{value:t,source:i,stack:k(i)}}var no=[],io=0,Qu=null,El=0,Hi=[],Gi=0,_r=null,ma=1,ga="";function Ba(t,i){no[io++]=El,no[io++]=Qu,Qu=t,El=i}function ug(t,i,s){Hi[Gi++]=ma,Hi[Gi++]=ga,Hi[Gi++]=_r,_r=t;var u=ma;t=ga;var h=32-we(u)-1;u&=~(1<<h),s+=1;var m=32-we(i)+h;if(30<m){var E=h-h%5;m=(u&(1<<E)-1).toString(32),u>>=E,h-=E,ma=1<<32-we(i)+h|s<<h|u,ga=m+t}else ma=1<<m|s<<h|u,ga=t}function _h(t){t.return!==null&&(Ba(t,1),ug(t,1,0))}function vh(t){for(;t===Qu;)Qu=no[--io],no[io]=null,El=no[--io],no[io]=null;for(;t===_r;)_r=Hi[--Gi],Hi[Gi]=null,ga=Hi[--Gi],Hi[Gi]=null,ma=Hi[--Gi],Hi[Gi]=null}function cg(t,i){Hi[Gi++]=ma,Hi[Gi++]=ga,Hi[Gi++]=_r,ma=i.id,ga=i.overflow,_r=t}var Hn=null,en=null,bt=!1,vr=null,Vi=!1,xh=Error(a(519));function xr(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Tl(Fi(i,t)),xh}function fg(t){var i=t.stateNode,s=t.type,u=t.memoizedProps;switch(i[_n]=t,i[Cn]=u,s){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(s=0;s<Yl.length;s++)xt(Yl[s],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":xt("invalid",i),vi(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":xt("invalid",i);break;case"textarea":xt("invalid",i),vn(i,u.value,u.defaultValue,u.children)}s=u.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||u.suppressHydrationWarning===!0||Cv(i.textContent,s)?(u.popover!=null&&(xt("beforetoggle",i),xt("toggle",i)),u.onScroll!=null&&xt("scroll",i),u.onScrollEnd!=null&&xt("scrollend",i),u.onClick!=null&&(i.onclick=Na),i=!0):i=!1,i||xr(t,!0)}function hg(t){for(Hn=t.return;Hn;)switch(Hn.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:Hn=Hn.return}}function ao(t){if(t!==Hn)return!1;if(!bt)return hg(t),bt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||zd(t.type,t.memoizedProps)),s=!s),s&&en&&xr(t),hg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));en=zv(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));en=zv(t)}else i===27?(i=en,Nr(t.type)?(t=Vd,Vd=null,en=t):en=i):en=Hn?Xi(t.stateNode.nextSibling):null;return!0}function hs(){en=Hn=null,bt=!1}function Sh(){var t=vr;return t!==null&&(fi===null?fi=t:fi.push.apply(fi,t),vr=null),t}function Tl(t){vr===null?vr=[t]:vr.push(t)}var Mh=I(null),ds=null,za=null;function Sr(t,i,s){ge(Mh,i._currentValue),i._currentValue=s}function Ia(t){t._currentValue=Mh.current,j(Mh)}function yh(t,i,s){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===s)break;t=t.return}}function Eh(t,i,s,u){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;e:for(;m!==null;){var U=m;m=h;for(var V=0;V<i.length;V++)if(U.context===i[V]){m.lanes|=s,U=m.alternate,U!==null&&(U.lanes|=s),yh(m.return,s,t),u||(E=null);break e}m=U.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),yh(E,s,t),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===t){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function ro(t,i,s,u){t=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var U=h.type;Si(h.pendingProps.value,E.value)||(t!==null?t.push(U):t=[U])}}else if(h===ve.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Ql):t=[Ql])}h=h.return}t!==null&&Eh(i,t,s,u),i.flags|=262144}function Ju(t){for(t=t.firstContext;t!==null;){if(!Si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ps(t){ds=t,za=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Gn(t){return dg(ds,t)}function $u(t,i){return ds===null&&ps(t),dg(t,i)}function dg(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},za===null){if(t===null)throw Error(a(308));za=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else za=za.next=i;return s}var sE=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,u){t.push(u)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},oE=r.unstable_scheduleCallback,lE=r.unstable_NormalPriority,Sn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Th(){return{controller:new sE,data:new Map,refCount:0}}function bl(t){t.refCount--,t.refCount===0&&oE(lE,function(){t.controller.abort()})}var Al=null,bh=0,so=0,oo=null;function uE(t,i){if(Al===null){var s=Al=[];bh=0,so=Cd(),oo={status:"pending",value:void 0,then:function(u){s.push(u)}}}return bh++,i.then(pg,pg),i}function pg(){if(--bh===0&&Al!==null){oo!==null&&(oo.status="fulfilled");var t=Al;Al=null,so=0,oo=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function cE(t,i){var s=[],u={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return t.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),u}var mg=B.S;B.S=function(t,i){J_=b(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&uE(t,i),mg!==null&&mg(t,i)};var ms=I(null);function Ah(){var t=ms.current;return t!==null?t:Kt.pooledCache}function ec(t,i){i===null?ge(ms,ms.current):ge(ms,i.pool)}function gg(){var t=Ah();return t===null?null:{parent:Sn._currentValue,pool:t}}var lo=Error(a(460)),Rh=Error(a(474)),tc=Error(a(542)),nc={then:function(){}};function _g(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Na,Na),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Sg(t),t;default:if(typeof i.status=="string")i.then(Na,Na);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Sg(t),t}throw _s=i,lo}}function gs(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(_s=s,lo):s}}var _s=null;function xg(){if(_s===null)throw Error(a(459));var t=_s;return _s=null,t}function Sg(t){if(t===lo||t===tc)throw Error(a(483))}var uo=null,Rl=0;function ic(t){var i=Rl;return Rl+=1,uo===null&&(uo=[]),vg(uo,t,i)}function Cl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ac(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Mg(t){function i(Q,X){if(t){var te=Q.deletions;te===null?(Q.deletions=[X],Q.flags|=16):te.push(X)}}function s(Q,X){if(!t)return null;for(;X!==null;)i(Q,X),X=X.sibling;return null}function u(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function h(Q,X){return Q=Pa(Q,X),Q.index=0,Q.sibling=null,Q}function m(Q,X,te){return Q.index=te,t?(te=Q.alternate,te!==null?(te=te.index,te<X?(Q.flags|=67108866,X):te):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function E(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function U(Q,X,te,_e){return X===null||X.tag!==6?(X=mh(te,Q.mode,_e),X.return=Q,X):(X=h(X,te),X.return=Q,X)}function V(Q,X,te,_e){var Qe=te.type;return Qe===T?pe(Q,X,te.props.children,_e,te.key):X!==null&&(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===A&&gs(Qe)===X.type)?(X=h(X,te.props),Cl(X,te),X.return=Q,X):(X=Ku(te.type,te.key,te.props,null,Q.mode,_e),Cl(X,te),X.return=Q,X)}function ne(Q,X,te,_e){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=gh(te,Q.mode,_e),X.return=Q,X):(X=h(X,te.children||[]),X.return=Q,X)}function pe(Q,X,te,_e,Qe){return X===null||X.tag!==7?(X=fs(te,Q.mode,_e,Qe),X.return=Q,X):(X=h(X,te),X.return=Q,X)}function xe(Q,X,te){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=mh(""+X,Q.mode,te),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return te=Ku(X.type,X.key,X.props,null,Q.mode,te),Cl(te,X),te.return=Q,te;case y:return X=gh(X,Q.mode,te),X.return=Q,X;case A:return X=gs(X),xe(Q,X,te)}if(Z(X)||q(X))return X=fs(X,Q.mode,te,null),X.return=Q,X;if(typeof X.then=="function")return xe(Q,ic(X),te);if(X.$$typeof===D)return xe(Q,$u(Q,X),te);ac(Q,X)}return null}function re(Q,X,te,_e){var Qe=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Qe!==null?null:U(Q,X,""+te,_e);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case x:return te.key===Qe?V(Q,X,te,_e):null;case y:return te.key===Qe?ne(Q,X,te,_e):null;case A:return te=gs(te),re(Q,X,te,_e)}if(Z(te)||q(te))return Qe!==null?null:pe(Q,X,te,_e,null);if(typeof te.then=="function")return re(Q,X,ic(te),_e);if(te.$$typeof===D)return re(Q,X,$u(Q,te),_e);ac(Q,te)}return null}function ce(Q,X,te,_e,Qe){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Q=Q.get(te)||null,U(X,Q,""+_e,Qe);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case x:return Q=Q.get(_e.key===null?te:_e.key)||null,V(X,Q,_e,Qe);case y:return Q=Q.get(_e.key===null?te:_e.key)||null,ne(X,Q,_e,Qe);case A:return _e=gs(_e),ce(Q,X,te,_e,Qe)}if(Z(_e)||q(_e))return Q=Q.get(te)||null,pe(X,Q,_e,Qe,null);if(typeof _e.then=="function")return ce(Q,X,te,ic(_e),Qe);if(_e.$$typeof===D)return ce(Q,X,te,$u(X,_e),Qe);ac(X,_e)}return null}function ke(Q,X,te,_e){for(var Qe=null,Nt=null,qe=X,ft=X=0,Mt=null;qe!==null&&ft<te.length;ft++){qe.index>ft?(Mt=qe,qe=null):Mt=qe.sibling;var Ot=re(Q,qe,te[ft],_e);if(Ot===null){qe===null&&(qe=Mt);break}t&&qe&&Ot.alternate===null&&i(Q,qe),X=m(Ot,X,ft),Nt===null?Qe=Ot:Nt.sibling=Ot,Nt=Ot,qe=Mt}if(ft===te.length)return s(Q,qe),bt&&Ba(Q,ft),Qe;if(qe===null){for(;ft<te.length;ft++)qe=xe(Q,te[ft],_e),qe!==null&&(X=m(qe,X,ft),Nt===null?Qe=qe:Nt.sibling=qe,Nt=qe);return bt&&Ba(Q,ft),Qe}for(qe=u(qe);ft<te.length;ft++)Mt=ce(qe,Q,ft,te[ft],_e),Mt!==null&&(t&&Mt.alternate!==null&&qe.delete(Mt.key===null?ft:Mt.key),X=m(Mt,X,ft),Nt===null?Qe=Mt:Nt.sibling=Mt,Nt=Mt);return t&&qe.forEach(function(Ir){return i(Q,Ir)}),bt&&Ba(Q,ft),Qe}function $e(Q,X,te,_e){if(te==null)throw Error(a(151));for(var Qe=null,Nt=null,qe=X,ft=X=0,Mt=null,Ot=te.next();qe!==null&&!Ot.done;ft++,Ot=te.next()){qe.index>ft?(Mt=qe,qe=null):Mt=qe.sibling;var Ir=re(Q,qe,Ot.value,_e);if(Ir===null){qe===null&&(qe=Mt);break}t&&qe&&Ir.alternate===null&&i(Q,qe),X=m(Ir,X,ft),Nt===null?Qe=Ir:Nt.sibling=Ir,Nt=Ir,qe=Mt}if(Ot.done)return s(Q,qe),bt&&Ba(Q,ft),Qe;if(qe===null){for(;!Ot.done;ft++,Ot=te.next())Ot=xe(Q,Ot.value,_e),Ot!==null&&(X=m(Ot,X,ft),Nt===null?Qe=Ot:Nt.sibling=Ot,Nt=Ot);return bt&&Ba(Q,ft),Qe}for(qe=u(qe);!Ot.done;ft++,Ot=te.next())Ot=ce(qe,Q,ft,Ot.value,_e),Ot!==null&&(t&&Ot.alternate!==null&&qe.delete(Ot.key===null?ft:Ot.key),X=m(Ot,X,ft),Nt===null?Qe=Ot:Nt.sibling=Ot,Nt=Ot);return t&&qe.forEach(function(MT){return i(Q,MT)}),bt&&Ba(Q,ft),Qe}function jt(Q,X,te,_e){if(typeof te=="object"&&te!==null&&te.type===T&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case x:e:{for(var Qe=te.key;X!==null;){if(X.key===Qe){if(Qe=te.type,Qe===T){if(X.tag===7){s(Q,X.sibling),_e=h(X,te.props.children),_e.return=Q,Q=_e;break e}}else if(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===A&&gs(Qe)===X.type){s(Q,X.sibling),_e=h(X,te.props),Cl(_e,te),_e.return=Q,Q=_e;break e}s(Q,X);break}else i(Q,X);X=X.sibling}te.type===T?(_e=fs(te.props.children,Q.mode,_e,te.key),_e.return=Q,Q=_e):(_e=Ku(te.type,te.key,te.props,null,Q.mode,_e),Cl(_e,te),_e.return=Q,Q=_e)}return E(Q);case y:e:{for(Qe=te.key;X!==null;){if(X.key===Qe)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){s(Q,X.sibling),_e=h(X,te.children||[]),_e.return=Q,Q=_e;break e}else{s(Q,X);break}else i(Q,X);X=X.sibling}_e=gh(te,Q.mode,_e),_e.return=Q,Q=_e}return E(Q);case A:return te=gs(te),jt(Q,X,te,_e)}if(Z(te))return ke(Q,X,te,_e);if(q(te)){if(Qe=q(te),typeof Qe!="function")throw Error(a(150));return te=Qe.call(te),$e(Q,X,te,_e)}if(typeof te.then=="function")return jt(Q,X,ic(te),_e);if(te.$$typeof===D)return jt(Q,X,$u(Q,te),_e);ac(Q,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,X!==null&&X.tag===6?(s(Q,X.sibling),_e=h(X,te),_e.return=Q,Q=_e):(s(Q,X),_e=mh(te,Q.mode,_e),_e.return=Q,Q=_e),E(Q)):s(Q,X)}return function(Q,X,te,_e){try{Rl=0;var Qe=jt(Q,X,te,_e);return uo=null,Qe}catch(qe){if(qe===lo||qe===tc)throw qe;var Nt=Mi(29,qe,null,Q.mode);return Nt.lanes=_e,Nt.return=Q,Nt}}}var vs=Mg(!0),yg=Mg(!1),Mr=!1;function Ch(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function yr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Er(t,i,s){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(zt&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=Zu(t),rg(t,null,s),i}return ju(t,u,i,s),Zu(t)}function wl(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var u=i.lanes;u&=t.pendingLanes,s|=u,i.lanes=s,Xs(t,s)}}function Dh(t,i){var s=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?h=m=i:m=m.next=i}else h=m=i;s={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Uh=!1;function Dl(){if(Uh){var t=oo;if(t!==null)throw t}}function Ul(t,i,s,u){Uh=!1;var h=t.updateQueue;Mr=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var V=U,ne=V.next;V.next=null,E===null?m=ne:E.next=ne,E=V;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,U=pe.lastBaseUpdate,U!==E&&(U===null?pe.firstBaseUpdate=ne:U.next=ne,pe.lastBaseUpdate=V))}if(m!==null){var xe=h.baseState;E=0,pe=ne=V=null,U=m;do{var re=U.lane&-536870913,ce=re!==U.lane;if(ce?(St&re)===re:(u&re)===re){re!==0&&re===so&&(Uh=!0),pe!==null&&(pe=pe.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});e:{var ke=t,$e=U;re=i;var jt=s;switch($e.tag){case 1:if(ke=$e.payload,typeof ke=="function"){xe=ke.call(jt,xe,re);break e}xe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=$e.payload,re=typeof ke=="function"?ke.call(jt,xe,re):ke,re==null)break e;xe=v({},xe,re);break e;case 2:Mr=!0}}re=U.callback,re!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=h.callbacks,ce===null?h.callbacks=[re]:ce.push(re))}else ce={lane:re,tag:U.tag,payload:U.payload,callback:U.callback,next:null},pe===null?(ne=pe=ce,V=xe):pe=pe.next=ce,E|=re;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;ce=U,U=ce.next,ce.next=null,h.lastBaseUpdate=ce,h.shared.pending=null}}while(!0);pe===null&&(V=xe),h.baseState=V,h.firstBaseUpdate=ne,h.lastBaseUpdate=pe,m===null&&(h.shared.lanes=0),Cr|=E,t.lanes=E,t.memoizedState=xe}}function Eg(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Tg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Eg(s[t],i)}var co=I(null),rc=I(0);function bg(t,i){t=qa,ge(rc,t),ge(co,i),qa=t|i.baseLanes}function Lh(){ge(rc,qa),ge(co,co.current)}function Nh(){qa=rc.current,j(co),j(rc)}var yi=I(null),ki=null;function Tr(t){var i=t.alternate;ge(pn,pn.current&1),ge(yi,t),ki===null&&(i===null||co.current!==null||i.memoizedState!==null)&&(ki=t)}function Oh(t){ge(pn,pn.current),ge(yi,t),ki===null&&(ki=t)}function Ag(t){t.tag===22?(ge(pn,pn.current),ge(yi,t),ki===null&&(ki=t)):br()}function br(){ge(pn,pn.current),ge(yi,yi.current)}function Ei(t){j(yi),ki===t&&(ki=null),j(pn)}var pn=I(0);function sc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Hd(s)||Gd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Fa=0,ut=null,Yt=null,Mn=null,oc=!1,fo=!1,xs=!1,lc=0,Ll=0,ho=null,fE=0;function fn(){throw Error(a(321))}function Ph(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Si(t[s],i[s]))return!1;return!0}function Bh(t,i,s,u,h,m){return Fa=m,ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=t===null||t.memoizedState===null?u_:Qh,xs=!1,m=s(u,h),xs=!1,fo&&(m=Cg(i,s,u,h)),Rg(t),m}function Rg(t){B.H=Pl;var i=Yt!==null&&Yt.next!==null;if(Fa=0,Mn=Yt=ut=null,oc=!1,Ll=0,ho=null,i)throw Error(a(300));t===null||yn||(t=t.dependencies,t!==null&&Ju(t)&&(yn=!0))}function Cg(t,i,s,u){ut=t;var h=0;do{if(fo&&(ho=null),Ll=0,fo=!1,25<=h)throw Error(a(301));if(h+=1,Mn=Yt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=c_,m=i(s,u)}while(fo);return m}function hE(){var t=B.H,i=t.useState()[0];return i=typeof i.then=="function"?Nl(i):i,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(ut.flags|=1024),i}function zh(){var t=lc!==0;return lc=0,t}function Ih(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Fh(t){if(oc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}oc=!1}Fa=0,Mn=Yt=ut=null,fo=!1,Ll=lc=0,ho=null}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?ut.memoizedState=Mn=t:Mn=Mn.next=t,Mn}function mn(){if(Yt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Mn===null?ut.memoizedState:Mn.next;if(i!==null)Mn=i,Yt=t;else{if(t===null)throw ut.alternate===null?Error(a(467)):Error(a(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Mn===null?ut.memoizedState=Mn=t:Mn=Mn.next=t}return Mn}function uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Nl(t){var i=Ll;return Ll+=1,ho===null&&(ho=[]),t=vg(ho,t,i),i=ut,(Mn===null?i.memoizedState:Mn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?u_:Qh),t}function cc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Nl(t);if(t.$$typeof===D)return Gn(t)}throw Error(a(438,String(t)))}function Hh(t){var i=null,s=ut.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var u=ut.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=uc(),ut.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),u=0;u<t;u++)s[u]=J;return i.index++,s}function Ha(t,i){return typeof i=="function"?i(t):i}function fc(t){var i=mn();return Gh(i,Yt,t)}function Gh(t,i,s){var u=t.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=s;var h=t.baseQueue,m=u.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}i.baseQueue=h=m,u.pending=null}if(m=t.baseState,h===null)t.memoizedState=m;else{i=h.next;var U=E=null,V=null,ne=i,pe=!1;do{var xe=ne.lane&-536870913;if(xe!==ne.lane?(St&xe)===xe:(Fa&xe)===xe){var re=ne.revertLane;if(re===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),xe===so&&(pe=!0);else if((Fa&re)===re){ne=ne.next,re===so&&(pe=!0);continue}else xe={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},V===null?(U=V=xe,E=m):V=V.next=xe,ut.lanes|=re,Cr|=re;xe=ne.action,xs&&s(m,xe),m=ne.hasEagerState?ne.eagerState:s(m,xe)}else re={lane:xe,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},V===null?(U=V=re,E=m):V=V.next=re,ut.lanes|=xe,Cr|=xe;ne=ne.next}while(ne!==null&&ne!==i);if(V===null?E=m:V.next=U,!Si(m,t.memoizedState)&&(yn=!0,pe&&(s=oo,s!==null)))throw s;t.memoizedState=m,t.baseState=E,t.baseQueue=V,u.lastRenderedState=m}return h===null&&(u.lanes=0),[t.memoizedState,u.dispatch]}function Vh(t){var i=mn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var u=s.dispatch,h=s.pending,m=i.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do m=t(m,E.action),E=E.next;while(E!==h);Si(m,i.memoizedState)||(yn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,u]}function wg(t,i,s){var u=ut,h=mn(),m=bt;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!Si((Yt||h).memoizedState,s);if(E&&(h.memoizedState=s,yn=!0),h=h.queue,Wh(Lg.bind(null,u,h,t),[t]),h.getSnapshot!==i||E||Mn!==null&&Mn.memoizedState.tag&1){if(u.flags|=2048,po(9,{destroy:void 0},Ug.bind(null,u,h,s,i),null),Kt===null)throw Error(a(349));m||(Fa&127)!==0||Dg(u,i,s)}return s}function Dg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ut.updateQueue,i===null?(i=uc(),ut.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Ug(t,i,s,u){i.value=s,i.getSnapshot=u,Ng(i)&&Og(t)}function Lg(t,i,s){return s(function(){Ng(i)&&Og(t)})}function Ng(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Si(t,s)}catch{return!0}}function Og(t){var i=cs(t,2);i!==null&&hi(i,t,2)}function kh(t){var i=ni();if(typeof t=="function"){var s=t;if(t=s(),xs){Le(!0);try{s()}finally{Le(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},i}function Pg(t,i,s,u){return t.baseState=s,Gh(t,Yt,typeof u=="function"?u:Ha)}function dE(t,i,s,u,h){if(pc(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};B.T!==null?s(!0):m.isTransition=!1,u(m),s=i.pending,s===null?(m.next=i.pending=m,Bg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Bg(t,i){var s=i.action,u=i.payload,h=t.state;if(i.isTransition){var m=B.T,E={};B.T=E;try{var U=s(h,u),V=B.S;V!==null&&V(E,U),zg(t,i,U)}catch(ne){Xh(t,i,ne)}finally{m!==null&&E.types!==null&&(m.types=E.types),B.T=m}}else try{m=s(h,u),zg(t,i,m)}catch(ne){Xh(t,i,ne)}}function zg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(u){Ig(t,i,u)},function(u){return Xh(t,i,u)}):Ig(t,i,s)}function Ig(t,i,s){i.status="fulfilled",i.value=s,Fg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Bg(t,s)))}function Xh(t,i,s){var u=t.pending;if(t.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=s,Fg(i),i=i.next;while(i!==u)}t.action=null}function Fg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Hg(t,i){return i}function Gg(t,i){if(bt){var s=Kt.formState;if(s!==null){e:{var u=ut;if(bt){if(en){t:{for(var h=en,m=Vi;h.nodeType!==8;){if(!m){h=null;break t}if(h=Xi(h.nextSibling),h===null){h=null;break t}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){en=Xi(h.nextSibling),u=h.data==="F!";break e}}xr(u)}u=!1}u&&(i=s[0])}}return s=ni(),s.memoizedState=s.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hg,lastRenderedState:i},s.queue=u,s=s_.bind(null,ut,u),u.dispatch=s,u=kh(!1),m=Kh.bind(null,ut,!1,u.queue),u=ni(),h={state:i,dispatch:null,action:t,pending:null},u.queue=h,s=dE.bind(null,ut,h,m,s),h.dispatch=s,u.memoizedState=t,[i,s,!1]}function Vg(t){var i=mn();return kg(i,Yt,t)}function kg(t,i,s){if(i=Gh(t,i,Hg)[0],t=fc(Ha)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=Nl(i)}catch(E){throw E===lo?tc:E}else u=i;i=mn();var h=i.queue,m=h.dispatch;return s!==i.memoizedState&&(ut.flags|=2048,po(9,{destroy:void 0},pE.bind(null,h,s),null)),[u,m,t]}function pE(t,i){t.action=i}function Xg(t){var i=mn(),s=Yt;if(s!==null)return kg(i,s,t);mn(),i=i.memoizedState,s=mn();var u=s.queue.dispatch;return s.memoizedState=t,[i,u,!1]}function po(t,i,s,u){return t={tag:t,create:s,deps:u,inst:i,next:null},i=ut.updateQueue,i===null&&(i=uc(),ut.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(u=s.next,s.next=t,t.next=u,i.lastEffect=t),t}function Wg(){return mn().memoizedState}function hc(t,i,s,u){var h=ni();ut.flags|=t,h.memoizedState=po(1|i,{destroy:void 0},s,u===void 0?null:u)}function dc(t,i,s,u){var h=mn();u=u===void 0?null:u;var m=h.memoizedState.inst;Yt!==null&&u!==null&&Ph(u,Yt.memoizedState.deps)?h.memoizedState=po(i,m,s,u):(ut.flags|=t,h.memoizedState=po(1|i,m,s,u))}function Yg(t,i){hc(8390656,8,t,i)}function Wh(t,i){dc(2048,8,t,i)}function mE(t){ut.flags|=4;var i=ut.updateQueue;if(i===null)i=uc(),ut.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function qg(t){var i=mn().memoizedState;return mE({ref:i,nextImpl:t}),function(){if((zt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function jg(t,i){return dc(4,2,t,i)}function Zg(t,i){return dc(4,4,t,i)}function Kg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Qg(t,i,s){s=s!=null?s.concat([t]):null,dc(4,4,Kg.bind(null,i,t),s)}function Yh(){}function Jg(t,i){var s=mn();i=i===void 0?null:i;var u=s.memoizedState;return i!==null&&Ph(i,u[1])?u[0]:(s.memoizedState=[t,i],t)}function $g(t,i){var s=mn();i=i===void 0?null:i;var u=s.memoizedState;if(i!==null&&Ph(i,u[1]))return u[0];if(u=t(),xs){Le(!0);try{t()}finally{Le(!1)}}return s.memoizedState=[u,i],u}function qh(t,i,s){return s===void 0||(Fa&1073741824)!==0&&(St&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=ev(),ut.lanes|=t,Cr|=t,s)}function e_(t,i,s,u){return Si(s,i)?s:co.current!==null?(t=qh(t,s,u),Si(t,i)||(yn=!0),t):(Fa&42)===0||(Fa&1073741824)!==0&&(St&261930)===0?(yn=!0,t.memoizedState=s):(t=ev(),ut.lanes|=t,Cr|=t,i)}function t_(t,i,s,u,h){var m=F.p;F.p=m!==0&&8>m?m:8;var E=B.T,U={};B.T=U,Kh(t,!1,i,s);try{var V=h(),ne=B.S;if(ne!==null&&ne(U,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var pe=cE(V,u);Ol(t,i,pe,Ai(t))}else Ol(t,i,u,Ai(t))}catch(xe){Ol(t,i,{then:function(){},status:"rejected",reason:xe},Ai())}finally{F.p=m,E!==null&&U.types!==null&&(E.types=U.types),B.T=E}}function gE(){}function jh(t,i,s,u){if(t.tag!==5)throw Error(a(476));var h=n_(t).queue;t_(t,h,i,se,s===null?gE:function(){return i_(t),s(u)})}function n_(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:se},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function i_(t){var i=n_(t);i.next===null&&(i=t.alternate.memoizedState),Ol(t,i.next.queue,{},Ai())}function Zh(){return Gn(Ql)}function a_(){return mn().memoizedState}function r_(){return mn().memoizedState}function _E(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=Ai();t=yr(s);var u=Er(i,t,s);u!==null&&(hi(u,i,s),wl(u,i,s)),i={cache:Th()},t.payload=i;return}i=i.return}}function vE(t,i,s){var u=Ai();s={lane:u,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},pc(t)?o_(i,s):(s=dh(t,i,s,u),s!==null&&(hi(s,t,u),l_(s,i,u)))}function s_(t,i,s){var u=Ai();Ol(t,i,s,u)}function Ol(t,i,s,u){var h={lane:u,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(pc(t))o_(i,h);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,U=m(E,s);if(h.hasEagerState=!0,h.eagerState=U,Si(U,E))return ju(t,i,h,0),Kt===null&&qu(),!1}catch{}if(s=dh(t,i,h,u),s!==null)return hi(s,t,u),l_(s,i,u),!0}return!1}function Kh(t,i,s,u){if(u={lane:2,revertLane:Cd(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},pc(t)){if(i)throw Error(a(479))}else i=dh(t,s,u,2),i!==null&&hi(i,t,2)}function pc(t){var i=t.alternate;return t===ut||i!==null&&i===ut}function o_(t,i){fo=oc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function l_(t,i,s){if((s&4194048)!==0){var u=i.lanes;u&=t.pendingLanes,s|=u,i.lanes=s,Xs(t,s)}}var Pl={readContext:Gn,use:cc,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn};Pl.useEffectEvent=fn;var u_={readContext:Gn,use:cc,useCallback:function(t,i){return ni().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:Yg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,hc(4194308,4,Kg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return hc(4194308,4,t,i)},useInsertionEffect:function(t,i){hc(4,2,t,i)},useMemo:function(t,i){var s=ni();i=i===void 0?null:i;var u=t();if(xs){Le(!0);try{t()}finally{Le(!1)}}return s.memoizedState=[u,i],u},useReducer:function(t,i,s){var u=ni();if(s!==void 0){var h=s(i);if(xs){Le(!0);try{s(i)}finally{Le(!1)}}}else h=i;return u.memoizedState=u.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},u.queue=t,t=t.dispatch=vE.bind(null,ut,t),[u.memoizedState,t]},useRef:function(t){var i=ni();return t={current:t},i.memoizedState=t},useState:function(t){t=kh(t);var i=t.queue,s=s_.bind(null,ut,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Yh,useDeferredValue:function(t,i){var s=ni();return qh(s,t,i)},useTransition:function(){var t=kh(!1);return t=t_.bind(null,ut,t.queue,!0,!1),ni().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var u=ut,h=ni();if(bt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Kt===null)throw Error(a(349));(St&127)!==0||Dg(u,i,s)}h.memoizedState=s;var m={value:s,getSnapshot:i};return h.queue=m,Yg(Lg.bind(null,u,m,t),[t]),u.flags|=2048,po(9,{destroy:void 0},Ug.bind(null,u,m,s,i),null),s},useId:function(){var t=ni(),i=Kt.identifierPrefix;if(bt){var s=ga,u=ma;s=(u&~(1<<32-we(u)-1)).toString(32)+s,i="_"+i+"R_"+s,s=lc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=fE++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Zh,useFormState:Gg,useActionState:Gg,useOptimistic:function(t){var i=ni();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Kh.bind(null,ut,!0,s),s.dispatch=i,[t,i]},useMemoCache:Hh,useCacheRefresh:function(){return ni().memoizedState=_E.bind(null,ut)},useEffectEvent:function(t){var i=ni(),s={impl:t};return i.memoizedState=s,function(){if((zt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Qh={readContext:Gn,use:cc,useCallback:Jg,useContext:Gn,useEffect:Wh,useImperativeHandle:Qg,useInsertionEffect:jg,useLayoutEffect:Zg,useMemo:$g,useReducer:fc,useRef:Wg,useState:function(){return fc(Ha)},useDebugValue:Yh,useDeferredValue:function(t,i){var s=mn();return e_(s,Yt.memoizedState,t,i)},useTransition:function(){var t=fc(Ha)[0],i=mn().memoizedState;return[typeof t=="boolean"?t:Nl(t),i]},useSyncExternalStore:wg,useId:a_,useHostTransitionStatus:Zh,useFormState:Vg,useActionState:Vg,useOptimistic:function(t,i){var s=mn();return Pg(s,Yt,t,i)},useMemoCache:Hh,useCacheRefresh:r_};Qh.useEffectEvent=qg;var c_={readContext:Gn,use:cc,useCallback:Jg,useContext:Gn,useEffect:Wh,useImperativeHandle:Qg,useInsertionEffect:jg,useLayoutEffect:Zg,useMemo:$g,useReducer:Vh,useRef:Wg,useState:function(){return Vh(Ha)},useDebugValue:Yh,useDeferredValue:function(t,i){var s=mn();return Yt===null?qh(s,t,i):e_(s,Yt.memoizedState,t,i)},useTransition:function(){var t=Vh(Ha)[0],i=mn().memoizedState;return[typeof t=="boolean"?t:Nl(t),i]},useSyncExternalStore:wg,useId:a_,useHostTransitionStatus:Zh,useFormState:Xg,useActionState:Xg,useOptimistic:function(t,i){var s=mn();return Yt!==null?Pg(s,Yt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Hh,useCacheRefresh:r_};c_.useEffectEvent=qg;function Jh(t,i,s,u){i=t.memoizedState,s=s(u,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var $h={enqueueSetState:function(t,i,s){t=t._reactInternals;var u=Ai(),h=yr(u);h.payload=i,s!=null&&(h.callback=s),i=Er(t,h,u),i!==null&&(hi(i,t,u),wl(i,t,u))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var u=Ai(),h=yr(u);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Er(t,h,u),i!==null&&(hi(i,t,u),wl(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Ai(),u=yr(s);u.tag=2,i!=null&&(u.callback=i),i=Er(t,u,s),i!==null&&(hi(i,t,s),wl(i,t,s))}};function f_(t,i,s,u,h,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!Ml(s,u)||!Ml(h,m):!0}function h_(t,i,s,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==t&&$h.enqueueReplaceState(i,i.state,null)}function Ss(t,i){var s=i;if("ref"in i){s={};for(var u in i)u!=="ref"&&(s[u]=i[u])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var h in t)s[h]===void 0&&(s[h]=t[h])}return s}function d_(t){Yu(t)}function p_(t){console.error(t)}function m_(t){Yu(t)}function mc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function g_(t,i,s){try{var u=t.onCaughtError;u(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function ed(t,i,s){return s=yr(s),s.tag=3,s.payload={element:null},s.callback=function(){mc(t,i)},s}function __(t){return t=yr(t),t.tag=3,t}function v_(t,i,s,u){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;t.payload=function(){return h(m)},t.callback=function(){g_(i,s,u)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){g_(i,s,u),typeof h!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var U=u.stack;this.componentDidCatch(u.value,{componentStack:U!==null?U:""})})}function xE(t,i,s,u,h){if(s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=s.alternate,i!==null&&ro(i,s,h,!0),s=yi.current,s!==null){switch(s.tag){case 31:case 13:return ki===null?Rc():s.alternate===null&&hn===0&&(hn=3),s.flags&=-257,s.flags|=65536,s.lanes=h,u===nc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([u]):i.add(u),bd(t,u,h)),!1;case 22:return s.flags|=65536,u===nc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([u]):s.add(u)),bd(t,u,h)),!1}throw Error(a(435,s.tag))}return bd(t,u,h),Rc(),!1}if(bt)return i=yi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==xh&&(t=Error(a(422),{cause:u}),Tl(Fi(t,s)))):(u!==xh&&(i=Error(a(423),{cause:u}),Tl(Fi(i,s))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,u=Fi(u,s),h=ed(t.stateNode,u,h),Dh(t,h),hn!==4&&(hn=2)),!1;var m=Error(a(520),{cause:u});if(m=Fi(m,s),kl===null?kl=[m]:kl.push(m),hn!==4&&(hn=2),i===null)return!0;u=Fi(u,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=h&-h,s.lanes|=t,t=ed(s.stateNode,u,t),Dh(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(wr===null||!wr.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=__(h),v_(h,t,s,u),Dh(s,h),!1}s=s.return}while(s!==null);return!1}var td=Error(a(461)),yn=!1;function Vn(t,i,s,u){i.child=t===null?yg(i,null,s,u):vs(i,t.child,s,u)}function x_(t,i,s,u,h){s=s.render;var m=i.ref;if("ref"in u){var E={};for(var U in u)U!=="ref"&&(E[U]=u[U])}else E=u;return ps(i),u=Bh(t,i,s,E,m,h),U=zh(),t!==null&&!yn?(Ih(t,i,h),Ga(t,i,h)):(bt&&U&&_h(i),i.flags|=1,Vn(t,i,u,h),i.child)}function S_(t,i,s,u,h){if(t===null){var m=s.type;return typeof m=="function"&&!ph(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,M_(t,i,m,u,h)):(t=Ku(s.type,null,u,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!ud(t,h)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:Ml,s(E,u)&&t.ref===i.ref)return Ga(t,i,h)}return i.flags|=1,t=Pa(m,u),t.ref=i.ref,t.return=i,i.child=t}function M_(t,i,s,u,h){if(t!==null){var m=t.memoizedProps;if(Ml(m,u)&&t.ref===i.ref)if(yn=!1,i.pendingProps=u=m,ud(t,h))(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,Ga(t,i,h)}return nd(t,i,s,u,h)}function y_(t,i,s,u){var h=u.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,t!==null){for(u=i.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;u=h&~m}else u=0,i.child=null;return E_(t,i,m,s,u)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ec(i,m!==null?m.cachePool:null),m!==null?bg(i,m):Lh(),Ag(i);else return u=i.lanes=536870912,E_(t,i,m!==null?m.baseLanes|s:s,s,u)}else m!==null?(ec(i,m.cachePool),bg(i,m),br(),i.memoizedState=null):(t!==null&&ec(i,null),Lh(),br());return Vn(t,i,h,s),i.child}function Bl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function E_(t,i,s,u,h){var m=Ah();return m=m===null?null:{parent:Sn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},t!==null&&ec(i,null),Lh(),Ag(i),t!==null&&ro(t,i,u,!0),i.childLanes=h,null}function gc(t,i){return i=vc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function T_(t,i,s){return vs(i,t.child,null,s),t=gc(i,i.pendingProps),t.flags|=2,Ei(i),i.memoizedState=null,t}function SE(t,i,s){var u=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(bt){if(u.mode==="hidden")return t=gc(i,u),i.lanes=536870912,Bl(null,t);if(Oh(i),(t=en)?(t=Bv(t,Vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:_r!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},s=og(t),s.return=i,i.child=s,Hn=i,en=null)):t=null,t===null)throw xr(i);return i.lanes=536870912,null}return gc(i,u)}var m=t.memoizedState;if(m!==null){var E=m.dehydrated;if(Oh(i),h)if(i.flags&256)i.flags&=-257,i=T_(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(yn||ro(t,i,s,!1),h=(s&t.childLanes)!==0,yn||h){if(u=Kt,u!==null&&(E=Pu(u,s),E!==0&&E!==m.retryLane))throw m.retryLane=E,cs(t,E),hi(u,t,E),td;Rc(),i=T_(t,i,s)}else t=m.treeContext,en=Xi(E.nextSibling),Hn=i,bt=!0,vr=null,Vi=!1,t!==null&&cg(i,t),i=gc(i,u),i.flags|=4096;return i}return t=Pa(t.child,{mode:u.mode,children:u.children}),t.ref=i.ref,i.child=t,t.return=i,t}function _c(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function nd(t,i,s,u,h){return ps(i),s=Bh(t,i,s,u,void 0,h),u=zh(),t!==null&&!yn?(Ih(t,i,h),Ga(t,i,h)):(bt&&u&&_h(i),i.flags|=1,Vn(t,i,s,h),i.child)}function b_(t,i,s,u,h,m){return ps(i),i.updateQueue=null,s=Cg(i,u,s,h),Rg(t),u=zh(),t!==null&&!yn?(Ih(t,i,m),Ga(t,i,m)):(bt&&u&&_h(i),i.flags|=1,Vn(t,i,s,m),i.child)}function A_(t,i,s,u,h){if(ps(i),i.stateNode===null){var m=to,E=s.contextType;typeof E=="object"&&E!==null&&(m=Gn(E)),m=new s(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=$h,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},Ch(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?Gn(E):to,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Jh(i,s,E,u),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&$h.enqueueReplaceState(m,m.state,null),Ul(i,u,m,h),Dl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(t===null){m=i.stateNode;var U=i.memoizedProps,V=Ss(s,U);m.props=V;var ne=m.context,pe=s.contextType;E=to,typeof pe=="object"&&pe!==null&&(E=Gn(pe));var xe=s.getDerivedStateFromProps;pe=typeof xe=="function"||typeof m.getSnapshotBeforeUpdate=="function",U=i.pendingProps!==U,pe||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(U||ne!==E)&&h_(i,m,u,E),Mr=!1;var re=i.memoizedState;m.state=re,Ul(i,u,m,h),Dl(),ne=i.memoizedState,U||re!==ne||Mr?(typeof xe=="function"&&(Jh(i,s,xe,u),ne=i.memoizedState),(V=Mr||f_(i,s,V,u,re,ne,E))?(pe||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=ne),m.props=u,m.state=ne,m.context=E,u=V):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,wh(t,i),E=i.memoizedProps,pe=Ss(s,E),m.props=pe,xe=i.pendingProps,re=m.context,ne=s.contextType,V=to,typeof ne=="object"&&ne!==null&&(V=Gn(ne)),U=s.getDerivedStateFromProps,(ne=typeof U=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==xe||re!==V)&&h_(i,m,u,V),Mr=!1,re=i.memoizedState,m.state=re,Ul(i,u,m,h),Dl();var ce=i.memoizedState;E!==xe||re!==ce||Mr||t!==null&&t.dependencies!==null&&Ju(t.dependencies)?(typeof U=="function"&&(Jh(i,s,U,u),ce=i.memoizedState),(pe=Mr||f_(i,s,pe,u,re,ce,V)||t!==null&&t.dependencies!==null&&Ju(t.dependencies))?(ne||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,ce,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,ce,V)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ce),m.props=u,m.state=ce,m.context=V,u=pe):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),u=!1)}return m=u,_c(t,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,s=u&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&u?(i.child=vs(i,t.child,null,h),i.child=vs(i,null,s,h)):Vn(t,i,s,h),i.memoizedState=m.state,t=i.child):t=Ga(t,i,h),t}function R_(t,i,s,u){return hs(),i.flags|=256,Vn(t,i,s,u),i.child}var id={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ad(t){return{baseLanes:t,cachePool:gg()}}function rd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=bi),t}function C_(t,i,s){var u=i.pendingProps,h=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(bt){if(h?Tr(i):br(),(t=en)?(t=Bv(t,Vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:_r!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},s=og(t),s.return=i,i.child=s,Hn=i,en=null)):t=null,t===null)throw xr(i);return Gd(t)?i.lanes=32:i.lanes=536870912,null}var U=u.children;return u=u.fallback,h?(br(),h=i.mode,U=vc({mode:"hidden",children:U},h),u=fs(u,h,s,null),U.return=i,u.return=i,U.sibling=u,i.child=U,u=i.child,u.memoizedState=ad(s),u.childLanes=rd(t,E,s),i.memoizedState=id,Bl(null,u)):(Tr(i),sd(i,U))}var V=t.memoizedState;if(V!==null&&(U=V.dehydrated,U!==null)){if(m)i.flags&256?(Tr(i),i.flags&=-257,i=od(t,i,s)):i.memoizedState!==null?(br(),i.child=t.child,i.flags|=128,i=null):(br(),U=u.fallback,h=i.mode,u=vc({mode:"visible",children:u.children},h),U=fs(U,h,s,null),U.flags|=2,u.return=i,U.return=i,u.sibling=U,i.child=u,vs(i,t.child,null,s),u=i.child,u.memoizedState=ad(s),u.childLanes=rd(t,E,s),i.memoizedState=id,i=Bl(null,u));else if(Tr(i),Gd(U)){if(E=U.nextSibling&&U.nextSibling.dataset,E)var ne=E.dgst;E=ne,u=Error(a(419)),u.stack="",u.digest=E,Tl({value:u,source:null,stack:null}),i=od(t,i,s)}else if(yn||ro(t,i,s,!1),E=(s&t.childLanes)!==0,yn||E){if(E=Kt,E!==null&&(u=Pu(E,s),u!==0&&u!==V.retryLane))throw V.retryLane=u,cs(t,u),hi(E,t,u),td;Hd(U)||Rc(),i=od(t,i,s)}else Hd(U)?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,en=Xi(U.nextSibling),Hn=i,bt=!0,vr=null,Vi=!1,t!==null&&cg(i,t),i=sd(i,u.children),i.flags|=4096);return i}return h?(br(),U=u.fallback,h=i.mode,V=t.child,ne=V.sibling,u=Pa(V,{mode:"hidden",children:u.children}),u.subtreeFlags=V.subtreeFlags&65011712,ne!==null?U=Pa(ne,U):(U=fs(U,h,s,null),U.flags|=2),U.return=i,u.return=i,u.sibling=U,i.child=u,Bl(null,u),u=i.child,U=t.child.memoizedState,U===null?U=ad(s):(h=U.cachePool,h!==null?(V=Sn._currentValue,h=h.parent!==V?{parent:V,pool:V}:h):h=gg(),U={baseLanes:U.baseLanes|s,cachePool:h}),u.memoizedState=U,u.childLanes=rd(t,E,s),i.memoizedState=id,Bl(t.child,u)):(Tr(i),s=t.child,t=s.sibling,s=Pa(s,{mode:"visible",children:u.children}),s.return=i,s.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=s,i.memoizedState=null,s)}function sd(t,i){return i=vc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function vc(t,i){return t=Mi(22,t,null,i),t.lanes=0,t}function od(t,i,s){return vs(i,t.child,null,s),t=sd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function w_(t,i,s){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),yh(t.return,i,s)}function ld(t,i,s,u,h,m){var E=t.memoizedState;E===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:h,treeForkCount:m}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=u,E.tail=s,E.tailMode=h,E.treeForkCount=m)}function D_(t,i,s){var u=i.pendingProps,h=u.revealOrder,m=u.tail;u=u.children;var E=pn.current,U=(E&2)!==0;if(U?(E=E&1|2,i.flags|=128):E&=1,ge(pn,E),Vn(t,i,u,s),u=bt?El:0,!U&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&w_(t,s,i);else if(t.tag===19)w_(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(s=i.child,h=null;s!==null;)t=s.alternate,t!==null&&sc(t)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),ld(i,!1,h,s,m,u);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&sc(t)===null){i.child=h;break}t=h.sibling,h.sibling=s,s=h,h=t}ld(i,!0,s,null,m,u);break;case"together":ld(i,!1,null,null,void 0,u);break;default:i.memoizedState=null}return i.child}function Ga(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Cr|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(ro(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=Pa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=Pa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function ud(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Ju(t)))}function ME(t,i,s){switch(i.tag){case 3:be(i,i.stateNode.containerInfo),Sr(i,Sn,t.memoizedState.cache),hs();break;case 27:case 5:Ze(i);break;case 4:be(i,i.stateNode.containerInfo);break;case 10:Sr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Oh(i),null;break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(Tr(i),i.flags|=128,null):(s&i.child.childLanes)!==0?C_(t,i,s):(Tr(i),t=Ga(t,i,s),t!==null?t.sibling:null);Tr(i);break;case 19:var h=(t.flags&128)!==0;if(u=(s&i.childLanes)!==0,u||(ro(t,i,s,!1),u=(s&i.childLanes)!==0),h){if(u)return D_(t,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ge(pn,pn.current),u)break;return null;case 22:return i.lanes=0,y_(t,i,s,i.pendingProps);case 24:Sr(i,Sn,t.memoizedState.cache)}return Ga(t,i,s)}function U_(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)yn=!0;else{if(!ud(t,s)&&(i.flags&128)===0)return yn=!1,ME(t,i,s);yn=(t.flags&131072)!==0}else yn=!1,bt&&(i.flags&1048576)!==0&&ug(i,El,i.index);switch(i.lanes=0,i.tag){case 16:e:{var u=i.pendingProps;if(t=gs(i.elementType),i.type=t,typeof t=="function")ph(t)?(u=Ss(t,u),i.tag=1,i=A_(null,i,t,u,s)):(i.tag=0,i=nd(null,i,t,u,s));else{if(t!=null){var h=t.$$typeof;if(h===C){i.tag=11,i=x_(null,i,t,u,s);break e}else if(h===O){i.tag=14,i=S_(null,i,t,u,s);break e}}throw i=ee(t)||t,Error(a(306,i,""))}}return i;case 0:return nd(t,i,i.type,i.pendingProps,s);case 1:return u=i.type,h=Ss(u,i.pendingProps),A_(t,i,u,h,s);case 3:e:{if(be(i,i.stateNode.containerInfo),t===null)throw Error(a(387));u=i.pendingProps;var m=i.memoizedState;h=m.element,wh(t,i),Ul(i,u,null,s);var E=i.memoizedState;if(u=E.cache,Sr(i,Sn,u),u!==m.cache&&Eh(i,[Sn],s,!0),Dl(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=R_(t,i,u,s);break e}else if(u!==h){h=Fi(Error(a(424)),i),Tl(h),i=R_(t,i,u,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,en=Xi(t.firstChild),Hn=i,bt=!0,vr=null,Vi=!0,s=yg(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(hs(),u===h){i=Ga(t,i,s);break e}Vn(t,i,u,s)}i=i.child}return i;case 26:return _c(t,i),t===null?(s=Vv(i.type,null,i.pendingProps,null))?i.memoizedState=s:bt||(s=i.type,t=i.pendingProps,u=Oc(ie.current).createElement(s),u[_n]=i,u[Cn]=t,kn(u,s,t),W(u),i.stateNode=u):i.memoizedState=Vv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ze(i),t===null&&bt&&(u=i.stateNode=Fv(i.type,i.pendingProps,ie.current),Hn=i,Vi=!0,h=en,Nr(i.type)?(Vd=h,en=Xi(u.firstChild)):en=h),Vn(t,i,i.pendingProps.children,s),_c(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&bt&&((h=u=en)&&(u=QE(u,i.type,i.pendingProps,Vi),u!==null?(i.stateNode=u,Hn=i,en=Xi(u.firstChild),Vi=!1,h=!0):h=!1),h||xr(i)),Ze(i),h=i.type,m=i.pendingProps,E=t!==null?t.memoizedProps:null,u=m.children,zd(h,m)?u=null:E!==null&&zd(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=Bh(t,i,hE,null,null,s),Ql._currentValue=h),_c(t,i),Vn(t,i,u,s),i.child;case 6:return t===null&&bt&&((t=s=en)&&(s=JE(s,i.pendingProps,Vi),s!==null?(i.stateNode=s,Hn=i,en=null,t=!0):t=!1),t||xr(i)),null;case 13:return C_(t,i,s);case 4:return be(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=vs(i,null,u,s):Vn(t,i,u,s),i.child;case 11:return x_(t,i,i.type,i.pendingProps,s);case 7:return Vn(t,i,i.pendingProps,s),i.child;case 8:return Vn(t,i,i.pendingProps.children,s),i.child;case 12:return Vn(t,i,i.pendingProps.children,s),i.child;case 10:return u=i.pendingProps,Sr(i,i.type,u.value),Vn(t,i,u.children,s),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,ps(i),h=Gn(h),u=u(h),i.flags|=1,Vn(t,i,u,s),i.child;case 14:return S_(t,i,i.type,i.pendingProps,s);case 15:return M_(t,i,i.type,i.pendingProps,s);case 19:return D_(t,i,s);case 31:return SE(t,i,s);case 22:return y_(t,i,s,i.pendingProps);case 24:return ps(i),u=Gn(Sn),t===null?(h=Ah(),h===null&&(h=Kt,m=Th(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),i.memoizedState={parent:u,cache:h},Ch(i),Sr(i,Sn,h)):((t.lanes&s)!==0&&(wh(t,i),Ul(i,null,null,s),Dl()),h=t.memoizedState,m=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Sr(i,Sn,u)):(u=m.cache,Sr(i,Sn,u),u!==h.cache&&Eh(i,[Sn],s,!0))),Vn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Va(t){t.flags|=4}function cd(t,i,s,u,h){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(av())t.flags|=8192;else throw _s=nc,Rh}else t.flags&=-16777217}function L_(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!qv(i))if(av())t.flags|=8192;else throw _s=nc,Rh}function xc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Gt():536870912,t.lanes|=i,vo|=i)}function zl(t,i){if(!bt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function tn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,u=0;if(i)for(var h=t.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=s,i}function yE(t,i,s){var u=i.pendingProps;switch(vh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(i),null;case 1:return tn(i),null;case 3:return s=i.stateNode,u=null,t!==null&&(u=t.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Ia(Sn),Fe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(ao(i)?Va(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Sh())),tn(i),null;case 26:var h=i.type,m=i.memoizedState;return t===null?(Va(i),m!==null?(tn(i),L_(i,m)):(tn(i),cd(i,h,null,u,s))):m?m!==t.memoizedState?(Va(i),tn(i),L_(i,m)):(tn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==u&&Va(i),tn(i),cd(i,h,t,u,s)),null;case 27:if(Je(i),s=ie.current,h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==u&&Va(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return tn(i),null}t=Ee.current,ao(i)?fg(i):(t=Fv(h,u,s),i.stateNode=t,Va(i))}return tn(i),null;case 5:if(Je(i),h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==u&&Va(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return tn(i),null}if(m=Ee.current,ao(i))fg(i);else{var E=Oc(ie.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?E.createElement("select",{is:u.is}):E.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?E.createElement(h,{is:u.is}):E.createElement(h)}}m[_n]=i,m[Cn]=u;e:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break e;for(;E.sibling===null;){if(E.return===null||E.return===i)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=m;e:switch(kn(m,h,u),h){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&Va(i)}}return tn(i),cd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==u&&Va(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(t=ie.current,ao(i)){if(t=i.stateNode,s=i.memoizedProps,u=null,h=Hn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}t[_n]=i,t=!!(t.nodeValue===s||u!==null&&u.suppressHydrationWarning===!0||Cv(t.nodeValue,s)),t||xr(i,!0)}else t=Oc(t).createTextNode(u),t[_n]=i,i.stateNode=t}return tn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(u=ao(i),s!==null){if(t===null){if(!u)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[_n]=i}else hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),t=!1}else s=Sh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(Ei(i),i):(Ei(i),null);if((i.flags&128)!==0)throw Error(a(558))}return tn(i),null;case 13:if(u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=ao(i),u!==null&&u.dehydrated!==null){if(t===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[_n]=i}else hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),h=!1}else h=Sh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Ei(i),i):(Ei(i),null)}return Ei(i),(i.flags&128)!==0?(i.lanes=s,i):(s=u!==null,t=t!==null&&t.memoizedState!==null,s&&(u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),xc(i,i.updateQueue),tn(i),null);case 4:return Fe(),t===null&&Ld(i.stateNode.containerInfo),tn(i),null;case 10:return Ia(i.type),tn(i),null;case 19:if(j(pn),u=i.memoizedState,u===null)return tn(i),null;if(h=(i.flags&128)!==0,m=u.rendering,m===null)if(h)zl(u,!1);else{if(hn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=sc(t),m!==null){for(i.flags|=128,zl(u,!1),t=m.updateQueue,i.updateQueue=t,xc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)sg(s,t),s=s.sibling;return ge(pn,pn.current&1|2),bt&&Ba(i,u.treeForkCount),i.child}t=t.sibling}u.tail!==null&&b()>Tc&&(i.flags|=128,h=!0,zl(u,!1),i.lanes=4194304)}else{if(!h)if(t=sc(m),t!==null){if(i.flags|=128,h=!0,t=t.updateQueue,i.updateQueue=t,xc(i,t),zl(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!bt)return tn(i),null}else 2*b()-u.renderingStartTime>Tc&&s!==536870912&&(i.flags|=128,h=!0,zl(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(t=u.last,t!==null?t.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=b(),t.sibling=null,s=pn.current,ge(pn,h?s&1|2:s&1),bt&&Ba(i,u.treeForkCount),t):(tn(i),null);case 22:case 23:return Ei(i),Nh(),u=i.memoizedState!==null,t!==null?t.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(s&536870912)!==0&&(i.flags&128)===0&&(tn(i),i.subtreeFlags&6&&(i.flags|=8192)):tn(i),s=i.updateQueue,s!==null&&xc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048),t!==null&&j(ms),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ia(Sn),tn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function EE(t,i){switch(vh(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ia(Sn),Fe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Je(i),null;case 31:if(i.memoizedState!==null){if(Ei(i),i.alternate===null)throw Error(a(340));hs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Ei(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));hs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return j(pn),null;case 4:return Fe(),null;case 10:return Ia(i.type),null;case 22:case 23:return Ei(i),Nh(),t!==null&&j(ms),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ia(Sn),null;case 25:return null;default:return null}}function N_(t,i){switch(vh(i),i.tag){case 3:Ia(Sn),Fe();break;case 26:case 27:case 5:Je(i);break;case 4:Fe();break;case 31:i.memoizedState!==null&&Ei(i);break;case 13:Ei(i);break;case 19:j(pn);break;case 10:Ia(i.type);break;case 22:case 23:Ei(i),Nh(),t!==null&&j(ms);break;case 24:Ia(Sn)}}function Il(t,i){try{var s=i.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&t)===t){u=void 0;var m=s.create,E=s.inst;u=m(),E.destroy=u}s=s.next}while(s!==h)}}catch(U){kt(i,i.return,U)}}function Ar(t,i,s){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&t)===t){var E=u.inst,U=E.destroy;if(U!==void 0){E.destroy=void 0,h=i;var V=s,ne=U;try{ne()}catch(pe){kt(h,V,pe)}}}u=u.next}while(u!==m)}}catch(pe){kt(i,i.return,pe)}}function O_(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Tg(i,s)}catch(u){kt(t,t.return,u)}}}function P_(t,i,s){s.props=Ss(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(u){kt(t,i,u)}}function Fl(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var u=t.stateNode;break;case 30:u=t.stateNode;break;default:u=t.stateNode}typeof s=="function"?t.refCleanup=s(u):s.current=u}}catch(h){kt(t,i,h)}}function _a(t,i){var s=t.ref,u=t.refCleanup;if(s!==null)if(typeof u=="function")try{u()}catch(h){kt(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){kt(t,i,h)}else s.current=null}function B_(t){var i=t.type,s=t.memoizedProps,u=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&u.focus();break e;case"img":s.src?u.src=s.src:s.srcSet&&(u.srcset=s.srcSet)}}catch(h){kt(t,t.return,h)}}function fd(t,i,s){try{var u=t.stateNode;WE(u,t.type,s,i),u[Cn]=i}catch(h){kt(t,t.return,h)}}function z_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Nr(t.type)||t.tag===4}function hd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||z_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Nr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dd(t,i,s){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Na));else if(u!==4&&(u===27&&Nr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(dd(t,i,s),t=t.sibling;t!==null;)dd(t,i,s),t=t.sibling}function Sc(t,i,s){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(u!==4&&(u===27&&Nr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Sc(t,i,s),t=t.sibling;t!==null;)Sc(t,i,s),t=t.sibling}function I_(t){var i=t.stateNode,s=t.memoizedProps;try{for(var u=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);kn(i,u,s),i[_n]=t,i[Cn]=s}catch(m){kt(t,t.return,m)}}var ka=!1,En=!1,pd=!1,F_=typeof WeakSet=="function"?WeakSet:Set,On=null;function TE(t,i){if(t=t.containerInfo,Pd=Gc,t=Q0(t),oh(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var E=0,U=-1,V=-1,ne=0,pe=0,xe=t,re=null;t:for(;;){for(var ce;xe!==s||h!==0&&xe.nodeType!==3||(U=E+h),xe!==m||u!==0&&xe.nodeType!==3||(V=E+u),xe.nodeType===3&&(E+=xe.nodeValue.length),(ce=xe.firstChild)!==null;)re=xe,xe=ce;for(;;){if(xe===t)break t;if(re===s&&++ne===h&&(U=E),re===m&&++pe===u&&(V=E),(ce=xe.nextSibling)!==null)break;xe=re,re=xe.parentNode}xe=ce}s=U===-1||V===-1?null:{start:U,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(Bd={focusedElem:t,selectionRange:s},Gc=!1,On=i;On!==null;)if(i=On,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,On=t;else for(;On!==null;){switch(i=On,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)h=t[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,h=m.memoizedProps,m=m.memoizedState,u=s.stateNode;try{var ke=Ss(s.type,h);t=u.getSnapshotBeforeUpdate(ke,m),u.__reactInternalSnapshotBeforeUpdate=t}catch($e){kt(s,s.return,$e)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Fd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Fd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,On=t;break}On=i.return}}function H_(t,i,s){var u=s.flags;switch(s.tag){case 0:case 11:case 15:Wa(t,s),u&4&&Il(5,s);break;case 1:if(Wa(t,s),u&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(E){kt(s,s.return,E)}else{var h=Ss(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){kt(s,s.return,E)}}u&64&&O_(s),u&512&&Fl(s,s.return);break;case 3:if(Wa(t,s),u&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Tg(t,i)}catch(E){kt(s,s.return,E)}}break;case 27:i===null&&u&4&&I_(s);case 26:case 5:Wa(t,s),i===null&&u&4&&B_(s),u&512&&Fl(s,s.return);break;case 12:Wa(t,s);break;case 31:Wa(t,s),u&4&&k_(t,s);break;case 13:Wa(t,s),u&4&&X_(t,s),u&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=NE.bind(null,s),$E(t,s))));break;case 22:if(u=s.memoizedState!==null||ka,!u){i=i!==null&&i.memoizedState!==null||En,h=ka;var m=En;ka=u,(En=i)&&!m?Ya(t,s,(s.subtreeFlags&8772)!==0):Wa(t,s),ka=h,En=m}break;case 30:break;default:Wa(t,s)}}function G_(t){var i=t.alternate;i!==null&&(t.alternate=null,G_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&dl(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,li=!1;function Xa(t,i,s){for(s=s.child;s!==null;)V_(t,i,s),s=s.sibling}function V_(t,i,s){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(ye,s)}catch{}switch(s.tag){case 26:En||_a(s,i),Xa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:En||_a(s,i);var u=rn,h=li;Nr(s.type)&&(rn=s.stateNode,li=!1),Xa(t,i,s),jl(s.stateNode),rn=u,li=h;break;case 5:En||_a(s,i);case 6:if(u=rn,h=li,rn=null,Xa(t,i,s),rn=u,li=h,rn!==null)if(li)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(s.stateNode)}catch(m){kt(s,i,m)}else try{rn.removeChild(s.stateNode)}catch(m){kt(s,i,m)}break;case 18:rn!==null&&(li?(t=rn,Ov(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Ao(t)):Ov(rn,s.stateNode));break;case 4:u=rn,h=li,rn=s.stateNode.containerInfo,li=!0,Xa(t,i,s),rn=u,li=h;break;case 0:case 11:case 14:case 15:Ar(2,s,i),En||Ar(4,s,i),Xa(t,i,s);break;case 1:En||(_a(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"&&P_(s,i,u)),Xa(t,i,s);break;case 21:Xa(t,i,s);break;case 22:En=(u=En)||s.memoizedState!==null,Xa(t,i,s),En=u;break;default:Xa(t,i,s)}}function k_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ao(t)}catch(s){kt(i,i.return,s)}}}function X_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ao(t)}catch(s){kt(i,i.return,s)}}function bE(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new F_),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new F_),i;default:throw Error(a(435,t.tag))}}function Mc(t,i){var s=bE(t);i.forEach(function(u){if(!s.has(u)){s.add(u);var h=OE.bind(null,t,u);u.then(h,h)}})}function ui(t,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var h=s[u],m=t,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 27:if(Nr(U.type)){rn=U.stateNode,li=!1;break e}break;case 5:rn=U.stateNode,li=!1;break e;case 3:case 4:rn=U.stateNode.containerInfo,li=!0;break e}U=U.return}if(rn===null)throw Error(a(160));V_(m,E,h),rn=null,li=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)W_(i,t),i=i.sibling}var ia=null;function W_(t,i){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ui(i,t),ci(t),u&4&&(Ar(3,t,t.return),Il(3,t),Ar(5,t,t.return));break;case 1:ui(i,t),ci(t),u&512&&(En||s===null||_a(s,s.return)),u&64&&ka&&(t=t.updateQueue,t!==null&&(u=t.callbacks,u!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?u:s.concat(u))));break;case 26:var h=ia;if(ui(i,t),ci(t),u&512&&(En||s===null||_a(s,s.return)),u&4){var m=s!==null?s.memoizedState:null;if(u=t.memoizedState,s===null)if(u===null)if(t.stateNode===null){e:{u=t.type,s=t.memoizedProps,h=h.ownerDocument||h;t:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[rs]||m[_n]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),kn(m,u,s),m[_n]=t,W(m),u=m;break e;case"link":var E=Wv("link","href",h).get(u+(s.href||""));if(E){for(var U=0;U<E.length;U++)if(m=E[U],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(U,1);break t}}m=h.createElement(u),kn(m,u,s),h.head.appendChild(m);break;case"meta":if(E=Wv("meta","content",h).get(u+(s.content||""))){for(U=0;U<E.length;U++)if(m=E[U],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(U,1);break t}}m=h.createElement(u),kn(m,u,s),h.head.appendChild(m);break;default:throw Error(a(468,u))}m[_n]=t,W(m),u=m}t.stateNode=u}else Yv(h,t.type,t.stateNode);else t.stateNode=Xv(h,u,t.memoizedProps);else m!==u?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,u===null?Yv(h,t.type,t.stateNode):Xv(h,u,t.memoizedProps)):u===null&&t.stateNode!==null&&fd(t,t.memoizedProps,s.memoizedProps)}break;case 27:ui(i,t),ci(t),u&512&&(En||s===null||_a(s,s.return)),s!==null&&u&4&&fd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ui(i,t),ci(t),u&512&&(En||s===null||_a(s,s.return)),t.flags&32){h=t.stateNode;try{ti(h,"")}catch(ke){kt(t,t.return,ke)}}u&4&&t.stateNode!=null&&(h=t.memoizedProps,fd(t,h,s!==null?s.memoizedProps:h)),u&1024&&(pd=!0);break;case 6:if(ui(i,t),ci(t),u&4){if(t.stateNode===null)throw Error(a(162));u=t.memoizedProps,s=t.stateNode;try{s.nodeValue=u}catch(ke){kt(t,t.return,ke)}}break;case 3:if(zc=null,h=ia,ia=Pc(i.containerInfo),ui(i,t),ia=h,ci(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{Ao(i.containerInfo)}catch(ke){kt(t,t.return,ke)}pd&&(pd=!1,Y_(t));break;case 4:u=ia,ia=Pc(t.stateNode.containerInfo),ui(i,t),ci(t),ia=u;break;case 12:ui(i,t),ci(t);break;case 31:ui(i,t),ci(t),u&4&&(u=t.updateQueue,u!==null&&(t.updateQueue=null,Mc(t,u)));break;case 13:ui(i,t),ci(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ec=b()),u&4&&(u=t.updateQueue,u!==null&&(t.updateQueue=null,Mc(t,u)));break;case 22:h=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,ne=ka,pe=En;if(ka=ne||h,En=pe||V,ui(i,t),En=pe,ka=ne,ci(t),u&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||V||ka||En||Ms(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){V=s=i;try{if(m=V.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{U=V.stateNode;var xe=V.memoizedProps.style,re=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;U.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(ke){kt(V,V.return,ke)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=h?"":V.memoizedProps}catch(ke){kt(V,V.return,ke)}}}else if(i.tag===18){if(s===null){V=i;try{var ce=V.stateNode;h?Pv(ce,!0):Pv(V.stateNode,!1)}catch(ke){kt(V,V.return,ke)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=t.updateQueue,u!==null&&(s=u.retryQueue,s!==null&&(u.retryQueue=null,Mc(t,s))));break;case 19:ui(i,t),ci(t),u&4&&(u=t.updateQueue,u!==null&&(t.updateQueue=null,Mc(t,u)));break;case 30:break;case 21:break;default:ui(i,t),ci(t)}}function ci(t){var i=t.flags;if(i&2){try{for(var s,u=t.return;u!==null;){if(z_(u)){s=u;break}u=u.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,m=hd(t);Sc(t,m,h);break;case 5:var E=s.stateNode;s.flags&32&&(ti(E,""),s.flags&=-33);var U=hd(t);Sc(t,U,E);break;case 3:case 4:var V=s.stateNode.containerInfo,ne=hd(t);dd(t,ne,V);break;default:throw Error(a(161))}}catch(pe){kt(t,t.return,pe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Y_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Y_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Wa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)H_(t,i.alternate,i),i=i.sibling}function Ms(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ar(4,i,i.return),Ms(i);break;case 1:_a(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&P_(i,i.return,s),Ms(i);break;case 27:jl(i.stateNode);case 26:case 5:_a(i,i.return),Ms(i);break;case 22:i.memoizedState===null&&Ms(i);break;case 30:Ms(i);break;default:Ms(i)}t=t.sibling}}function Ya(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=t,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:Ya(h,m,s),Il(4,m);break;case 1:if(Ya(h,m,s),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(ne){kt(u,u.return,ne)}if(u=m,h=u.updateQueue,h!==null){var U=u.stateNode;try{var V=h.shared.hiddenCallbacks;if(V!==null)for(h.shared.hiddenCallbacks=null,h=0;h<V.length;h++)Eg(V[h],U)}catch(ne){kt(u,u.return,ne)}}s&&E&64&&O_(m),Fl(m,m.return);break;case 27:I_(m);case 26:case 5:Ya(h,m,s),s&&u===null&&E&4&&B_(m),Fl(m,m.return);break;case 12:Ya(h,m,s);break;case 31:Ya(h,m,s),s&&E&4&&k_(h,m);break;case 13:Ya(h,m,s),s&&E&4&&X_(h,m);break;case 22:m.memoizedState===null&&Ya(h,m,s),Fl(m,m.return);break;case 30:break;default:Ya(h,m,s)}i=i.sibling}}function md(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&bl(s))}function gd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&bl(t))}function aa(t,i,s,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)q_(t,i,s,u),i=i.sibling}function q_(t,i,s,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:aa(t,i,s,u),h&2048&&Il(9,i);break;case 1:aa(t,i,s,u);break;case 3:aa(t,i,s,u),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&bl(t)));break;case 12:if(h&2048){aa(t,i,s,u),t=i.stateNode;try{var m=i.memoizedProps,E=m.id,U=m.onPostCommit;typeof U=="function"&&U(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){kt(i,i.return,V)}}else aa(t,i,s,u);break;case 31:aa(t,i,s,u);break;case 13:aa(t,i,s,u);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?aa(t,i,s,u):Hl(t,i):m._visibility&2?aa(t,i,s,u):(m._visibility|=2,mo(t,i,s,u,(i.subtreeFlags&10256)!==0||!1)),h&2048&&md(E,i);break;case 24:aa(t,i,s,u),h&2048&&gd(i.alternate,i);break;default:aa(t,i,s,u)}}function mo(t,i,s,u,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,E=i,U=s,V=u,ne=E.flags;switch(E.tag){case 0:case 11:case 15:mo(m,E,U,V,h),Il(8,E);break;case 23:break;case 22:var pe=E.stateNode;E.memoizedState!==null?pe._visibility&2?mo(m,E,U,V,h):Hl(m,E):(pe._visibility|=2,mo(m,E,U,V,h)),h&&ne&2048&&md(E.alternate,E);break;case 24:mo(m,E,U,V,h),h&&ne&2048&&gd(E.alternate,E);break;default:mo(m,E,U,V,h)}i=i.sibling}}function Hl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,u=i,h=u.flags;switch(u.tag){case 22:Hl(s,u),h&2048&&md(u.alternate,u);break;case 24:Hl(s,u),h&2048&&gd(u.alternate,u);break;default:Hl(s,u)}i=i.sibling}}var Gl=8192;function go(t,i,s){if(t.subtreeFlags&Gl)for(t=t.child;t!==null;)j_(t,i,s),t=t.sibling}function j_(t,i,s){switch(t.tag){case 26:go(t,i,s),t.flags&Gl&&t.memoizedState!==null&&fT(s,ia,t.memoizedState,t.memoizedProps);break;case 5:go(t,i,s);break;case 3:case 4:var u=ia;ia=Pc(t.stateNode.containerInfo),go(t,i,s),ia=u;break;case 22:t.memoizedState===null&&(u=t.alternate,u!==null&&u.memoizedState!==null?(u=Gl,Gl=16777216,go(t,i,s),Gl=u):go(t,i,s));break;default:go(t,i,s)}}function Z_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Vl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];On=u,Q_(u,t)}Z_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)K_(t),t=t.sibling}function K_(t){switch(t.tag){case 0:case 11:case 15:Vl(t),t.flags&2048&&Ar(9,t,t.return);break;case 3:Vl(t);break;case 12:Vl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,yc(t)):Vl(t);break;default:Vl(t)}}function yc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];On=u,Q_(u,t)}Z_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ar(8,i,i.return),yc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,yc(i));break;default:yc(i)}t=t.sibling}}function Q_(t,i){for(;On!==null;){var s=On;switch(s.tag){case 0:case 11:case 15:Ar(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var u=s.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:bl(s.memoizedState.cache)}if(u=s.child,u!==null)u.return=s,On=u;else e:for(s=t;On!==null;){u=On;var h=u.sibling,m=u.return;if(G_(u),u===s){On=null;break e}if(h!==null){h.return=m,On=h;break e}On=m}}}var AE={getCacheForType:function(t){var i=Gn(Sn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Gn(Sn).controller.signal}},RE=typeof WeakMap=="function"?WeakMap:Map,zt=0,Kt=null,vt=null,St=0,Vt=0,Ti=null,Rr=!1,_o=!1,_d=!1,qa=0,hn=0,Cr=0,ys=0,vd=0,bi=0,vo=0,kl=null,fi=null,xd=!1,Ec=0,J_=0,Tc=1/0,bc=null,wr=null,Dn=0,Dr=null,xo=null,ja=0,Sd=0,Md=null,$_=null,Xl=0,yd=null;function Ai(){return(zt&2)!==0&&St!==0?St&-St:B.T!==null?Cd():pa()}function ev(){if(bi===0)if((St&536870912)===0||bt){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),bi=t}else bi=536870912;return t=yi.current,t!==null&&(t.flags|=32),bi}function hi(t,i,s){(t===Kt&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)&&(So(t,0),Ur(t,St,bi,!1)),Jn(t,s),((zt&2)===0||t!==Kt)&&(t===Kt&&((zt&2)===0&&(ys|=s),hn===4&&Ur(t,St,bi,!1)),va(t))}function tv(t,i,s){if((zt&6)!==0)throw Error(a(327));var u=!s&&(i&127)===0&&(i&t.expiredLanes)===0||He(t,i),h=u?DE(t,i):Td(t,i,!0),m=u;do{if(h===0){_o&&!u&&Ur(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!CE(s)){h=Td(t,i,!1),m=!1;continue}if(h===2){if(m=i,t.errorRecoveryDisabledLanes&m)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var U=t;h=kl;var V=U.current.memoizedState.isDehydrated;if(V&&(So(U,E).flags|=256),E=Td(U,E,!1),E!==2){if(_d&&!V){U.errorRecoveryDisabledLanes|=m,ys|=m,h=4;break e}m=fi,fi=h,m!==null&&(fi===null?fi=m:fi.push.apply(fi,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){So(t,0),Ur(t,i,0,!0);break}e:{switch(u=t,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ur(u,i,bi,!Rr);break e;case 2:fi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Ec+300-b(),10<h)){if(Ur(u,i,bi,!Rr),he(u,0,!0)!==0)break e;ja=i,u.timeoutHandle=Lv(nv.bind(null,u,s,fi,bc,xd,i,bi,ys,vo,Rr,m,"Throttled",-0,0),h);break e}nv(u,s,fi,bc,xd,i,bi,ys,vo,Rr,m,null,-0,0)}}break}while(!0);va(t)}function nv(t,i,s,u,h,m,E,U,V,ne,pe,xe,re,ce){if(t.timeoutHandle=-1,xe=i.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Na},j_(i,m,xe);var ke=(m&62914560)===m?Ec-b():(m&4194048)===m?J_-b():0;if(ke=hT(xe,ke),ke!==null){ja=m,t.cancelPendingCommit=ke(cv.bind(null,t,i,m,s,u,h,E,U,V,pe,xe,null,re,ce)),Ur(t,m,E,!ne);return}}cv(t,i,m,s,u,h,E,U,V)}function CE(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var u=0;u<s.length;u++){var h=s[u],m=h.getSnapshot;h=h.value;try{if(!Si(m(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ur(t,i,s,u){i&=~vd,i&=~ys,t.suspendedLanes|=i,t.pingedLanes&=~i,u&&(t.warmLanes|=i),u=t.expirationTimes;for(var h=i;0<h;){var m=31-we(h),E=1<<m;u[m]=-1,h&=~E}s!==0&&hl(t,s,i)}function Ac(){return(zt&6)===0?(Wl(0),!1):!0}function Ed(){if(vt!==null){if(Vt===0)var t=vt.return;else t=vt,za=ds=null,Fh(t),uo=null,Rl=0,t=vt;for(;t!==null;)N_(t.alternate,t),t=t.return;vt=null}}function So(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,jE(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),ja=0,Ed(),Kt=t,vt=s=Pa(t.current,null),St=i,Vt=0,Ti=null,Rr=!1,_o=He(t,i),_d=!1,vo=bi=vd=ys=Cr=hn=0,fi=kl=null,xd=!1,(i&8)!==0&&(i|=i&32);var u=t.entangledLanes;if(u!==0)for(t=t.entanglements,u&=i;0<u;){var h=31-we(u),m=1<<h;i|=t[h],u&=~m}return qa=i,qu(),s}function iv(t,i){ut=null,B.H=Pl,i===lo||i===tc?(i=xg(),Vt=3):i===Rh?(i=xg(),Vt=4):Vt=i===td?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ti=i,vt===null&&(hn=1,mc(t,Fi(i,t.current)))}function av(){var t=yi.current;return t===null?!0:(St&4194048)===St?ki===null:(St&62914560)===St||(St&536870912)!==0?t===ki:!1}function rv(){var t=B.H;return B.H=Pl,t===null?Pl:t}function sv(){var t=B.A;return B.A=AE,t}function Rc(){hn=4,Rr||(St&4194048)!==St&&yi.current!==null||(_o=!0),(Cr&134217727)===0&&(ys&134217727)===0||Kt===null||Ur(Kt,St,bi,!1)}function Td(t,i,s){var u=zt;zt|=2;var h=rv(),m=sv();(Kt!==t||St!==i)&&(bc=null,So(t,i)),i=!1;var E=hn;e:do try{if(Vt!==0&&vt!==null){var U=vt,V=Ti;switch(Vt){case 8:Ed(),E=6;break e;case 3:case 2:case 9:case 6:yi.current===null&&(i=!0);var ne=Vt;if(Vt=0,Ti=null,Mo(t,U,V,ne),s&&_o){E=0;break e}break;default:ne=Vt,Vt=0,Ti=null,Mo(t,U,V,ne)}}wE(),E=hn;break}catch(pe){iv(t,pe)}while(!0);return i&&t.shellSuspendCounter++,za=ds=null,zt=u,B.H=h,B.A=m,vt===null&&(Kt=null,St=0,qu()),E}function wE(){for(;vt!==null;)ov(vt)}function DE(t,i){var s=zt;zt|=2;var u=rv(),h=sv();Kt!==t||St!==i?(bc=null,Tc=b()+500,So(t,i)):_o=He(t,i);e:do try{if(Vt!==0&&vt!==null){i=vt;var m=Ti;t:switch(Vt){case 1:Vt=0,Ti=null,Mo(t,i,m,1);break;case 2:case 9:if(_g(m)){Vt=0,Ti=null,lv(i);break}i=function(){Vt!==2&&Vt!==9||Kt!==t||(Vt=7),va(t)},m.then(i,i);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:_g(m)?(Vt=0,Ti=null,lv(i)):(Vt=0,Ti=null,Mo(t,i,m,7));break;case 5:var E=null;switch(vt.tag){case 26:E=vt.memoizedState;case 5:case 27:var U=vt;if(E?qv(E):U.stateNode.complete){Vt=0,Ti=null;var V=U.sibling;if(V!==null)vt=V;else{var ne=U.return;ne!==null?(vt=ne,Cc(ne)):vt=null}break t}}Vt=0,Ti=null,Mo(t,i,m,5);break;case 6:Vt=0,Ti=null,Mo(t,i,m,6);break;case 8:Ed(),hn=6;break e;default:throw Error(a(462))}}UE();break}catch(pe){iv(t,pe)}while(!0);return za=ds=null,B.H=u,B.A=h,zt=s,vt!==null?0:(Kt=null,St=0,qu(),hn)}function UE(){for(;vt!==null&&!Ge();)ov(vt)}function ov(t){var i=U_(t.alternate,t,qa);t.memoizedProps=t.pendingProps,i===null?Cc(t):vt=i}function lv(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=b_(s,i,i.pendingProps,i.type,void 0,St);break;case 11:i=b_(s,i,i.pendingProps,i.type.render,i.ref,St);break;case 5:Fh(i);default:N_(s,i),i=vt=sg(i,qa),i=U_(s,i,qa)}t.memoizedProps=t.pendingProps,i===null?Cc(t):vt=i}function Mo(t,i,s,u){za=ds=null,Fh(i),uo=null,Rl=0;var h=i.return;try{if(xE(t,h,i,s,St)){hn=1,mc(t,Fi(s,t.current)),vt=null;return}}catch(m){if(h!==null)throw vt=h,m;hn=1,mc(t,Fi(s,t.current)),vt=null;return}i.flags&32768?(bt||u===1?t=!0:_o||(St&536870912)!==0?t=!1:(Rr=t=!0,(u===2||u===9||u===3||u===6)&&(u=yi.current,u!==null&&u.tag===13&&(u.flags|=16384))),uv(i,t)):Cc(i)}function Cc(t){var i=t;do{if((i.flags&32768)!==0){uv(i,Rr);return}t=i.return;var s=yE(i.alternate,i,qa);if(s!==null){vt=s;return}if(i=i.sibling,i!==null){vt=i;return}vt=i=t}while(i!==null);hn===0&&(hn=5)}function uv(t,i){do{var s=EE(t.alternate,t);if(s!==null){s.flags&=32767,vt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){vt=t;return}vt=t=s}while(t!==null);hn=6,vt=null}function cv(t,i,s,u,h,m,E,U,V){t.cancelPendingCommit=null;do wc();while(Dn!==0);if((zt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=hh,Ji(t,s,m,E,U,V),t===Kt&&(vt=Kt=null,St=0),xo=i,Dr=t,ja=s,Sd=m,Md=h,$_=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,PE(ue,function(){return mv(),null})):(t.callbackNode=null,t.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=B.T,B.T=null,h=F.p,F.p=2,E=zt,zt|=4;try{TE(t,i,s)}finally{zt=E,F.p=h,B.T=u}}Dn=1,fv(),hv(),dv()}}function fv(){if(Dn===1){Dn=0;var t=Dr,i=xo,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var u=F.p;F.p=2;var h=zt;zt|=4;try{W_(i,t);var m=Bd,E=Q0(t.containerInfo),U=m.focusedElem,V=m.selectionRange;if(E!==U&&U&&U.ownerDocument&&K0(U.ownerDocument.documentElement,U)){if(V!==null&&oh(U)){var ne=V.start,pe=V.end;if(pe===void 0&&(pe=ne),"selectionStart"in U)U.selectionStart=ne,U.selectionEnd=Math.min(pe,U.value.length);else{var xe=U.ownerDocument||document,re=xe&&xe.defaultView||window;if(re.getSelection){var ce=re.getSelection(),ke=U.textContent.length,$e=Math.min(V.start,ke),jt=V.end===void 0?$e:Math.min(V.end,ke);!ce.extend&&$e>jt&&(E=jt,jt=$e,$e=E);var Q=Z0(U,$e),X=Z0(U,jt);if(Q&&X&&(ce.rangeCount!==1||ce.anchorNode!==Q.node||ce.anchorOffset!==Q.offset||ce.focusNode!==X.node||ce.focusOffset!==X.offset)){var te=xe.createRange();te.setStart(Q.node,Q.offset),ce.removeAllRanges(),$e>jt?(ce.addRange(te),ce.extend(X.node,X.offset)):(te.setEnd(X.node,X.offset),ce.addRange(te))}}}}for(xe=[],ce=U;ce=ce.parentNode;)ce.nodeType===1&&xe.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<xe.length;U++){var _e=xe[U];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}Gc=!!Pd,Bd=Pd=null}finally{zt=h,F.p=u,B.T=s}}t.current=i,Dn=2}}function hv(){if(Dn===2){Dn=0;var t=Dr,i=xo,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var u=F.p;F.p=2;var h=zt;zt|=4;try{H_(t,i.alternate,i)}finally{zt=h,F.p=u,B.T=s}}Dn=3}}function dv(){if(Dn===4||Dn===3){Dn=0,z();var t=Dr,i=xo,s=ja,u=$_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Dn=5:(Dn=0,xo=Dr=null,pv(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(wr=null),Ys(s),i=i.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(ye,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=B.T,h=F.p,F.p=2,B.T=null;try{for(var m=t.onRecoverableError,E=0;E<u.length;E++){var U=u[E];m(U.value,{componentStack:U.stack})}}finally{B.T=i,F.p=h}}(ja&3)!==0&&wc(),va(t),h=t.pendingLanes,(s&261930)!==0&&(h&42)!==0?t===yd?Xl++:(Xl=0,yd=t):Xl=0,Wl(0)}}function pv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,bl(i)))}function wc(){return fv(),hv(),dv(),mv()}function mv(){if(Dn!==5)return!1;var t=Dr,i=Sd;Sd=0;var s=Ys(ja),u=B.T,h=F.p;try{F.p=32>s?32:s,B.T=null,s=Md,Md=null;var m=Dr,E=ja;if(Dn=0,xo=Dr=null,ja=0,(zt&6)!==0)throw Error(a(331));var U=zt;if(zt|=4,K_(m.current),q_(m,m.current,E,s),zt=U,Wl(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(ye,m)}catch{}return!0}finally{F.p=h,B.T=u,pv(t,i)}}function gv(t,i,s){i=Fi(s,i),i=ed(t.stateNode,i,2),t=Er(t,i,2),t!==null&&(Jn(t,2),va(t))}function kt(t,i,s){if(t.tag===3)gv(t,t,s);else for(;i!==null;){if(i.tag===3){gv(i,t,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(wr===null||!wr.has(u))){t=Fi(s,t),s=__(2),u=Er(i,s,2),u!==null&&(v_(s,u,i,t),Jn(u,2),va(u));break}}i=i.return}}function bd(t,i,s){var u=t.pingCache;if(u===null){u=t.pingCache=new RE;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(s)||(_d=!0,h.add(s),t=LE.bind(null,t,i,s),i.then(t,t))}function LE(t,i,s){var u=t.pingCache;u!==null&&u.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Kt===t&&(St&s)===s&&(hn===4||hn===3&&(St&62914560)===St&&300>b()-Ec?(zt&2)===0&&So(t,0):vd|=s,vo===St&&(vo=0)),va(t)}function _v(t,i){i===0&&(i=Gt()),t=cs(t,i),t!==null&&(Jn(t,i),va(t))}function NE(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),_v(t,s)}function OE(t,i){var s=0;switch(t.tag){case 31:case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(s=h.retryLane);break;case 19:u=t.stateNode;break;case 22:u=t.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),_v(t,s)}function PE(t,i){return _t(t,i)}var Dc=null,yo=null,Ad=!1,Uc=!1,Rd=!1,Lr=0;function va(t){t!==yo&&t.next===null&&(yo===null?Dc=yo=t:yo=yo.next=t),Uc=!0,Ad||(Ad=!0,zE())}function Wl(t,i){if(!Rd&&Uc){Rd=!0;do for(var s=!1,u=Dc;u!==null;){if(t!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var E=u.suspendedLanes,U=u.pingedLanes;m=(1<<31-we(42|t)+1)-1,m&=h&~(E&~U),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,Mv(u,m))}else m=St,m=he(u,u===Kt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||He(u,m)||(s=!0,Mv(u,m));u=u.next}while(s);Rd=!1}}function BE(){vv()}function vv(){Uc=Ad=!1;var t=0;Lr!==0&&qE()&&(t=Lr);for(var i=b(),s=null,u=Dc;u!==null;){var h=u.next,m=xv(u,i);m===0?(u.next=null,s===null?Dc=h:s.next=h,h===null&&(yo=s)):(s=u,(t!==0||(m&3)!==0)&&(Uc=!0)),u=h}Dn!==0&&Dn!==5||Wl(t),Lr!==0&&(Lr=0)}function xv(t,i){for(var s=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var E=31-we(m),U=1<<E,V=h[E];V===-1?((U&s)===0||(U&u)!==0)&&(h[E]=it(U,i)):V<=i&&(t.expiredLanes|=U),m&=~U}if(i=Kt,s=St,s=he(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),u=t.callbackNode,s===0||t===i&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)return u!==null&&u!==null&&Tt(u),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||He(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(u!==null&&Tt(u),Ys(s)){case 2:case 8:s=me;break;case 32:s=ue;break;case 268435456:s=Ae;break;default:s=ue}return u=Sv.bind(null,t),s=_t(s,u),t.callbackPriority=i,t.callbackNode=s,i}return u!==null&&u!==null&&Tt(u),t.callbackPriority=2,t.callbackNode=null,2}function Sv(t,i){if(Dn!==0&&Dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(wc()&&t.callbackNode!==s)return null;var u=St;return u=he(t,t===Kt?u:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),u===0?null:(tv(t,u,i),xv(t,b()),t.callbackNode!=null&&t.callbackNode===s?Sv.bind(null,t):null)}function Mv(t,i){if(wc())return null;tv(t,i,!0)}function zE(){ZE(function(){(zt&6)!==0?_t(de,BE):vv()})}function Cd(){if(Lr===0){var t=so;t===0&&(t=Ce,Ce<<=1,(Ce&261888)===0&&(Ce=256)),Lr=t}return Lr}function yv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fu(""+t)}function Ev(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function IE(t,i,s,u,h){if(i==="submit"&&s&&s.stateNode===h){var m=yv((h[Cn]||null).action),E=u.submitter;E&&(i=(i=E[Cn]||null)?yv(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var U=new ku("action","action",null,u,h);t.push({event:U,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Lr!==0){var V=E?Ev(h,E):new FormData(h);jh(s,{pending:!0,data:V,method:h.method,action:m},null,V)}}else typeof m=="function"&&(U.preventDefault(),V=E?Ev(h,E):new FormData(h),jh(s,{pending:!0,data:V,method:h.method,action:m},m,V))},currentTarget:h}]})}}for(var wd=0;wd<fh.length;wd++){var Dd=fh[wd],FE=Dd.toLowerCase(),HE=Dd[0].toUpperCase()+Dd.slice(1);na(FE,"on"+HE)}na(eg,"onAnimationEnd"),na(tg,"onAnimationIteration"),na(ng,"onAnimationStart"),na("dblclick","onDoubleClick"),na("focusin","onFocus"),na("focusout","onBlur"),na(nE,"onTransitionRun"),na(iE,"onTransitionStart"),na(aE,"onTransitionCancel"),na(ig,"onTransitionEnd"),De("onMouseEnter",["mouseout","mouseover"]),De("onMouseLeave",["mouseout","mouseover"]),De("onPointerEnter",["pointerout","pointerover"]),De("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function Tv(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var u=t[s],h=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var U=u[E],V=U.instance,ne=U.currentTarget;if(U=U.listener,V!==m&&h.isPropagationStopped())break e;m=U,h.currentTarget=ne;try{m(h)}catch(pe){Yu(pe)}h.currentTarget=null,m=V}else for(E=0;E<u.length;E++){if(U=u[E],V=U.instance,ne=U.currentTarget,U=U.listener,V!==m&&h.isPropagationStopped())break e;m=U,h.currentTarget=ne;try{m(h)}catch(pe){Yu(pe)}h.currentTarget=null,m=V}}}}function xt(t,i){var s=i[dr];s===void 0&&(s=i[dr]=new Set);var u=t+"__bubble";s.has(u)||(bv(i,t,2,!1),s.add(u))}function Ud(t,i,s){var u=0;i&&(u|=4),bv(s,t,u,i)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function Ld(t){if(!t[Lc]){t[Lc]=!0,le.forEach(function(s){s!=="selectionchange"&&(GE.has(s)||Ud(s,!1,t),Ud(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Lc]||(i[Lc]=!0,Ud("selectionchange",!1,i))}}function bv(t,i,s,u){switch(ex(i)){case 2:var h=mT;break;case 8:h=gT;break;default:h=qd}s=h.bind(null,i,s,t),h=void 0,!Jf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(i,s,{capture:!0,passive:h}):t.addEventListener(i,s,!0):h!==void 0?t.addEventListener(i,s,{passive:h}):t.addEventListener(i,s,!1)}function Nd(t,i,s,u,h){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var U=u.stateNode.containerInfo;if(U===h)break;if(E===4)for(E=u.return;E!==null;){var V=E.tag;if((V===3||V===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;U!==null;){if(E=pr(U),E===null)return;if(V=E.tag,V===5||V===6||V===26||V===27){u=m=E;continue e}U=U.parentNode}}u=u.return}D0(function(){var ne=m,pe=Kf(s),xe=[];e:{var re=ag.get(t);if(re!==void 0){var ce=ku,ke=t;switch(t){case"keypress":if(Gu(s)===0)break e;case"keydown":case"keyup":ce=Oy;break;case"focusin":ke="focus",ce=nh;break;case"focusout":ke="blur",ce=nh;break;case"beforeblur":case"afterblur":ce=nh;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=N0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=zy;break;case eg:case tg:case ng:ce=by;break;case ig:ce=Fy;break;case"scroll":case"scrollend":ce=Sy;break;case"wheel":ce=Gy;break;case"copy":case"cut":case"paste":ce=Ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=P0;break;case"toggle":case"beforetoggle":ce=ky}var $e=(i&4)!==0,jt=!$e&&(t==="scroll"||t==="scrollend"),Q=$e?re!==null?re+"Capture":null:re;$e=[];for(var X=ne,te;X!==null;){var _e=X;if(te=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||te===null||Q===null||(_e=pl(X,Q),_e!=null&&$e.push(ql(X,_e,te))),jt)break;X=X.return}0<$e.length&&(re=new ce(re,ke,null,s,pe),xe.push({event:re,listeners:$e}))}}if((i&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",re&&s!==Zf&&(ke=s.relatedTarget||s.fromElement)&&(pr(ke)||ke[Ua]))break e;if((ce||re)&&(re=pe.window===pe?pe:(re=pe.ownerDocument)?re.defaultView||re.parentWindow:window,ce?(ke=s.relatedTarget||s.toElement,ce=ne,ke=ke?pr(ke):null,ke!==null&&(jt=l(ke),$e=ke.tag,ke!==jt||$e!==5&&$e!==27&&$e!==6)&&(ke=null)):(ce=null,ke=ne),ce!==ke)){if($e=N0,_e="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&($e=P0,_e="onPointerLeave",Q="onPointerEnter",X="pointer"),jt=ce==null?re:ss(ce),te=ke==null?re:ss(ke),re=new $e(_e,X+"leave",ce,s,pe),re.target=jt,re.relatedTarget=te,_e=null,pr(pe)===ne&&($e=new $e(Q,X+"enter",ke,s,pe),$e.target=te,$e.relatedTarget=jt,_e=$e),jt=_e,ce&&ke)t:{for($e=VE,Q=ce,X=ke,te=0,_e=Q;_e;_e=$e(_e))te++;_e=0;for(var Qe=X;Qe;Qe=$e(Qe))_e++;for(;0<te-_e;)Q=$e(Q),te--;for(;0<_e-te;)X=$e(X),_e--;for(;te--;){if(Q===X||X!==null&&Q===X.alternate){$e=Q;break t}Q=$e(Q),X=$e(X)}$e=null}else $e=null;ce!==null&&Av(xe,re,ce,$e,!1),ke!==null&&jt!==null&&Av(xe,jt,ke,$e,!0)}}e:{if(re=ne?ss(ne):window,ce=re.nodeName&&re.nodeName.toLowerCase(),ce==="select"||ce==="input"&&re.type==="file")var Nt=k0;else if(G0(re))if(X0)Nt=$y;else{Nt=Qy;var qe=Ky}else ce=re.nodeName,!ce||ce.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ne&&js(ne.elementType)&&(Nt=k0):Nt=Jy;if(Nt&&(Nt=Nt(t,ne))){V0(xe,Nt,s,pe);break e}qe&&qe(t,re,ne),t==="focusout"&&ne&&re.type==="number"&&ne.memoizedProps.value!=null&&ea(re,"number",re.value)}switch(qe=ne?ss(ne):window,t){case"focusin":(G0(qe)||qe.contentEditable==="true")&&(Js=qe,lh=ne,yl=null);break;case"focusout":yl=lh=Js=null;break;case"mousedown":uh=!0;break;case"contextmenu":case"mouseup":case"dragend":uh=!1,J0(xe,s,pe);break;case"selectionchange":if(tE)break;case"keydown":case"keyup":J0(xe,s,pe)}var ft;if(ah)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Qs?F0(t,s)&&(Mt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Mt="onCompositionStart");Mt&&(B0&&s.locale!=="ko"&&(Qs||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Qs&&(ft=U0()):(gr=pe,$f="value"in gr?gr.value:gr.textContent,Qs=!0)),qe=Nc(ne,Mt),0<qe.length&&(Mt=new O0(Mt,t,null,s,pe),xe.push({event:Mt,listeners:qe}),ft?Mt.data=ft:(ft=H0(s),ft!==null&&(Mt.data=ft)))),(ft=Wy?Yy(t,s):qy(t,s))&&(Mt=Nc(ne,"onBeforeInput"),0<Mt.length&&(qe=new O0("onBeforeInput","beforeinput",null,s,pe),xe.push({event:qe,listeners:Mt}),qe.data=ft)),IE(xe,t,ne,s,pe)}Tv(xe,i)})}function ql(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Nc(t,i){for(var s=i+"Capture",u=[];t!==null;){var h=t,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=pl(t,s),h!=null&&u.unshift(ql(t,h,m)),h=pl(t,i),h!=null&&u.push(ql(t,h,m))),t.tag===3)return u;t=t.return}return[]}function VE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Av(t,i,s,u,h){for(var m=i._reactName,E=[];s!==null&&s!==u;){var U=s,V=U.alternate,ne=U.stateNode;if(U=U.tag,V!==null&&V===u)break;U!==5&&U!==26&&U!==27||ne===null||(V=ne,h?(ne=pl(s,m),ne!=null&&E.unshift(ql(s,ne,V))):h||(ne=pl(s,m),ne!=null&&E.push(ql(s,ne,V)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var kE=/\r\n?/g,XE=/\u0000|\uFFFD/g;function Rv(t){return(typeof t=="string"?t:""+t).replace(kE,`
`).replace(XE,"")}function Cv(t,i){return i=Rv(i),Rv(t)===i}function qt(t,i,s,u,h,m){switch(s){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||ti(t,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&ti(t,""+u);break;case"className":ot(t,"class",u);break;case"tabIndex":ot(t,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":ot(t,s,u);break;case"style":La(t,u,m);break;case"data":if(i!=="object"){ot(t,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){t.removeAttribute(s);break}u=Fu(""+u),t.setAttribute(s,u);break;case"action":case"formAction":if(typeof u=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&qt(t,i,"name",h.name,h,null),qt(t,i,"formEncType",h.formEncType,h,null),qt(t,i,"formMethod",h.formMethod,h,null),qt(t,i,"formTarget",h.formTarget,h,null)):(qt(t,i,"encType",h.encType,h,null),qt(t,i,"method",h.method,h,null),qt(t,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){t.removeAttribute(s);break}u=Fu(""+u),t.setAttribute(s,u);break;case"onClick":u!=null&&(t.onclick=Na);break;case"onScroll":u!=null&&xt("scroll",t);break;case"onScrollEnd":u!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":t.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){t.removeAttribute("xlink:href");break}s=Fu(""+u),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?t.setAttribute(s,""+u):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":u===!0?t.setAttribute(s,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?t.setAttribute(s,u):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?t.setAttribute(s,u):t.removeAttribute(s);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?t.removeAttribute(s):t.setAttribute(s,u);break;case"popover":xt("beforetoggle",t),xt("toggle",t),nt(t,"popover",u);break;case"xlinkActuate":Ve(t,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Ve(t,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Ve(t,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Ve(t,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Ve(t,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Ve(t,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":nt(t,"is",u);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=vy.get(s)||s,nt(t,s,u))}}function Od(t,i,s,u,h,m){switch(s){case"style":La(t,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof u=="string"?ti(t,u):(typeof u=="number"||typeof u=="bigint")&&ti(t,""+u);break;case"onScroll":u!=null&&xt("scroll",t);break;case"onScrollEnd":u!=null&&xt("scrollend",t);break;case"onClick":u!=null&&(t.onclick=Na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ae.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),m=t[Cn]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,u,h);break e}s in t?t[s]=u:u===!0?t.setAttribute(s,""):nt(t,s,u)}}}function kn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var u=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:qt(t,i,m,E,s,null)}}h&&qt(t,i,"srcSet",s.srcSet,s,null),u&&qt(t,i,"src",s.src,s,null);return;case"input":xt("invalid",t);var U=m=E=h=null,V=null,ne=null;for(u in s)if(s.hasOwnProperty(u)){var pe=s[u];if(pe!=null)switch(u){case"name":h=pe;break;case"type":E=pe;break;case"checked":V=pe;break;case"defaultChecked":ne=pe;break;case"value":m=pe;break;case"defaultValue":U=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(a(137,i));break;default:qt(t,i,u,pe,s,null)}}vi(t,m,U,V,ne,E,h,!1);return;case"select":xt("invalid",t),u=E=m=null;for(h in s)if(s.hasOwnProperty(h)&&(U=s[h],U!=null))switch(h){case"value":m=U;break;case"defaultValue":E=U;break;case"multiple":u=U;default:qt(t,i,h,U,s,null)}i=m,s=E,t.multiple=!!u,i!=null?xi(t,!!u,i,!1):s!=null&&xi(t,!!u,s,!0);return;case"textarea":xt("invalid",t),m=h=u=null;for(E in s)if(s.hasOwnProperty(E)&&(U=s[E],U!=null))switch(E){case"value":u=U;break;case"defaultValue":h=U;break;case"children":m=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(a(91));break;default:qt(t,i,E,U,s,null)}vn(t,u,h,m);return;case"option":for(V in s)s.hasOwnProperty(V)&&(u=s[V],u!=null)&&(V==="selected"?t.selected=u&&typeof u!="function"&&typeof u!="symbol":qt(t,i,V,u,s,null));return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(u=0;u<Yl.length;u++)xt(Yl[u],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in s)if(s.hasOwnProperty(ne)&&(u=s[ne],u!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:qt(t,i,ne,u,s,null)}return;default:if(js(i)){for(pe in s)s.hasOwnProperty(pe)&&(u=s[pe],u!==void 0&&Od(t,i,pe,u,s,void 0));return}}for(U in s)s.hasOwnProperty(U)&&(u=s[U],u!=null&&qt(t,i,U,u,s,null))}function WE(t,i,s,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,U=null,V=null,ne=null,pe=null;for(ce in s){var xe=s[ce];if(s.hasOwnProperty(ce)&&xe!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":V=xe;default:u.hasOwnProperty(ce)||qt(t,i,ce,null,u,xe)}}for(var re in u){var ce=u[re];if(xe=s[re],u.hasOwnProperty(re)&&(ce!=null||xe!=null))switch(re){case"type":m=ce;break;case"name":h=ce;break;case"checked":ne=ce;break;case"defaultChecked":pe=ce;break;case"value":E=ce;break;case"defaultValue":U=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,i));break;default:ce!==xe&&qt(t,i,re,ce,u,xe)}}ei(t,E,U,V,ne,pe,m,h);return;case"select":ce=E=U=re=null;for(m in s)if(V=s[m],s.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":ce=V;default:u.hasOwnProperty(m)||qt(t,i,m,null,u,V)}for(h in u)if(m=u[h],V=s[h],u.hasOwnProperty(h)&&(m!=null||V!=null))switch(h){case"value":re=m;break;case"defaultValue":U=m;break;case"multiple":E=m;default:m!==V&&qt(t,i,h,m,u,V)}i=U,s=E,u=ce,re!=null?xi(t,!!s,re,!1):!!u!=!!s&&(i!=null?xi(t,!!s,i,!0):xi(t,!!s,s?[]:"",!1));return;case"textarea":ce=re=null;for(U in s)if(h=s[U],s.hasOwnProperty(U)&&h!=null&&!u.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:qt(t,i,U,null,u,h)}for(E in u)if(h=u[E],m=s[E],u.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":re=h;break;case"defaultValue":ce=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&qt(t,i,E,h,u,m)}It(t,re,ce);return;case"option":for(var ke in s)re=s[ke],s.hasOwnProperty(ke)&&re!=null&&!u.hasOwnProperty(ke)&&(ke==="selected"?t.selected=!1:qt(t,i,ke,null,u,re));for(V in u)re=u[V],ce=s[V],u.hasOwnProperty(V)&&re!==ce&&(re!=null||ce!=null)&&(V==="selected"?t.selected=re&&typeof re!="function"&&typeof re!="symbol":qt(t,i,V,re,u,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in s)re=s[$e],s.hasOwnProperty($e)&&re!=null&&!u.hasOwnProperty($e)&&qt(t,i,$e,null,u,re);for(ne in u)if(re=u[ne],ce=s[ne],u.hasOwnProperty(ne)&&re!==ce&&(re!=null||ce!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(a(137,i));break;default:qt(t,i,ne,re,u,ce)}return;default:if(js(i)){for(var jt in s)re=s[jt],s.hasOwnProperty(jt)&&re!==void 0&&!u.hasOwnProperty(jt)&&Od(t,i,jt,void 0,u,re);for(pe in u)re=u[pe],ce=s[pe],!u.hasOwnProperty(pe)||re===ce||re===void 0&&ce===void 0||Od(t,i,pe,re,u,ce);return}}for(var Q in s)re=s[Q],s.hasOwnProperty(Q)&&re!=null&&!u.hasOwnProperty(Q)&&qt(t,i,Q,null,u,re);for(xe in u)re=u[xe],ce=s[xe],!u.hasOwnProperty(xe)||re===ce||re==null&&ce==null||qt(t,i,xe,re,u,ce)}function wv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function YE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),u=0;u<s.length;u++){var h=s[u],m=h.transferSize,E=h.initiatorType,U=h.duration;if(m&&U&&wv(E)){for(E=0,U=h.responseEnd,u+=1;u<s.length;u++){var V=s[u],ne=V.startTime;if(ne>U)break;var pe=V.transferSize,xe=V.initiatorType;pe&&wv(xe)&&(V=V.responseEnd,E+=pe*(V<U?1:(U-ne)/(V-ne)))}if(--u,i+=8*(m+E)/(h.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Pd=null,Bd=null;function Oc(t){return t.nodeType===9?t:t.ownerDocument}function Dv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Uv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function zd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Id=null;function qE(){var t=window.event;return t&&t.type==="popstate"?t===Id?!1:(Id=t,!0):(Id=null,!1)}var Lv=typeof setTimeout=="function"?setTimeout:void 0,jE=typeof clearTimeout=="function"?clearTimeout:void 0,Nv=typeof Promise=="function"?Promise:void 0,ZE=typeof queueMicrotask=="function"?queueMicrotask:typeof Nv<"u"?function(t){return Nv.resolve(null).then(t).catch(KE)}:Lv;function KE(t){setTimeout(function(){throw t})}function Nr(t){return t==="head"}function Ov(t,i){var s=i,u=0;do{var h=s.nextSibling;if(t.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(u===0){t.removeChild(h),Ao(i);return}u--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")u++;else if(s==="html")jl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,jl(s);for(var m=s.firstChild;m;){var E=m.nextSibling,U=m.nodeName;m[rs]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=E}}else s==="body"&&jl(t.ownerDocument.body);s=h}while(s);Ao(i)}function Pv(t,i){var s=t;t=0;do{var u=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=u}while(s)}function Fd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Fd(s),dl(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function QE(t,i,s,u){for(;t.nodeType===1;){var h=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(u){if(!t[rs])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Xi(t.nextSibling),t===null)break}return null}function JE(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Xi(t.nextSibling),t===null))return null;return t}function Bv(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Xi(t.nextSibling),t===null))return null;return t}function Hd(t){return t.data==="$?"||t.data==="$~"}function Gd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function $E(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var u=function(){i(),s.removeEventListener("DOMContentLoaded",u)};s.addEventListener("DOMContentLoaded",u),t._reactRetry=u}}function Xi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Vd=null;function zv(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Xi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function Iv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function Fv(t,i,s){switch(i=Oc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function jl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);dl(t)}var Wi=new Map,Hv=new Set;function Pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Za=F.d;F.d={f:eT,r:tT,D:nT,C:iT,L:aT,m:rT,X:oT,S:sT,M:lT};function eT(){var t=Za.f(),i=Ac();return t||i}function tT(t){var i=mr(t);i!==null&&i.tag===5&&i.type==="form"?i_(i):Za.r(t)}var Eo=typeof document>"u"?null:document;function Gv(t,i,s){var u=Eo;if(u&&typeof i=="string"&&i){var h=rt(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),Hv.has(h)||(Hv.add(h),t={rel:t,crossOrigin:s,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),kn(i,"link",t),W(i),u.head.appendChild(i)))}}function nT(t){Za.D(t),Gv("dns-prefetch",t,null)}function iT(t,i){Za.C(t,i),Gv("preconnect",t,i)}function aT(t,i,s){Za.L(t,i,s);var u=Eo;if(u&&t&&i){var h='link[rel="preload"][as="'+rt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+rt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+rt(s.imageSizes)+'"]')):h+='[href="'+rt(t)+'"]';var m=h;switch(i){case"style":m=To(t);break;case"script":m=bo(t)}Wi.has(m)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Wi.set(m,t),u.querySelector(h)!==null||i==="style"&&u.querySelector(Zl(m))||i==="script"&&u.querySelector(Kl(m))||(i=u.createElement("link"),kn(i,"link",t),W(i),u.head.appendChild(i)))}}function rT(t,i){Za.m(t,i);var s=Eo;if(s&&t){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+rt(u)+'"][href="'+rt(t)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=bo(t)}if(!Wi.has(m)&&(t=v({rel:"modulepreload",href:t},i),Wi.set(m,t),s.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Kl(m)))return}u=s.createElement("link"),kn(u,"link",t),W(u),s.head.appendChild(u)}}}function sT(t,i,s){Za.S(t,i,s);var u=Eo;if(u&&t){var h=L(u).hoistableStyles,m=To(t);i=i||"default";var E=h.get(m);if(!E){var U={loading:0,preload:null};if(E=u.querySelector(Zl(m)))U.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Wi.get(m))&&kd(t,s);var V=E=u.createElement("link");W(V),kn(V,"link",t),V._p=new Promise(function(ne,pe){V.onload=ne,V.onerror=pe}),V.addEventListener("load",function(){U.loading|=1}),V.addEventListener("error",function(){U.loading|=2}),U.loading|=4,Bc(E,i,u)}E={type:"stylesheet",instance:E,count:1,state:U},h.set(m,E)}}}function oT(t,i){Za.X(t,i);var s=Eo;if(s&&t){var u=L(s).hoistableScripts,h=bo(t),m=u.get(h);m||(m=s.querySelector(Kl(h)),m||(t=v({src:t,async:!0},i),(i=Wi.get(h))&&Xd(t,i),m=s.createElement("script"),W(m),kn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function lT(t,i){Za.M(t,i);var s=Eo;if(s&&t){var u=L(s).hoistableScripts,h=bo(t),m=u.get(h);m||(m=s.querySelector(Kl(h)),m||(t=v({src:t,async:!0,type:"module"},i),(i=Wi.get(h))&&Xd(t,i),m=s.createElement("script"),W(m),kn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function Vv(t,i,s,u){var h=(h=ie.current)?Pc(h):null;if(!h)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=To(s.href),s=L(h).hoistableStyles,u=s.get(i),u||(u={type:"style",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=To(s.href);var m=L(h).hoistableStyles,E=m.get(t);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,E),(m=h.querySelector(Zl(t)))&&!m._p&&(E.instance=m,E.state.loading=5),Wi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Wi.set(t,s),m||uT(h,t,s,E.state))),i&&u===null)throw Error(a(528,""));return E}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=bo(s),s=L(h).hoistableScripts,u=s.get(i),u||(u={type:"script",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function To(t){return'href="'+rt(t)+'"'}function Zl(t){return'link[rel="stylesheet"]['+t+"]"}function kv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function uT(t,i,s,u){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=t.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),kn(i,"link",s),W(i),t.head.appendChild(i))}function bo(t){return'[src="'+rt(t)+'"]'}function Kl(t){return"script[async]"+t}function Xv(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var u=t.querySelector('style[data-href~="'+rt(s.href)+'"]');if(u)return i.instance=u,W(u),u;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return u=(t.ownerDocument||t).createElement("style"),W(u),kn(u,"style",h),Bc(u,s.precedence,t),i.instance=u;case"stylesheet":h=To(s.href);var m=t.querySelector(Zl(h));if(m)return i.state.loading|=4,i.instance=m,W(m),m;u=kv(s),(h=Wi.get(h))&&kd(u,h),m=(t.ownerDocument||t).createElement("link"),W(m);var E=m;return E._p=new Promise(function(U,V){E.onload=U,E.onerror=V}),kn(m,"link",u),i.state.loading|=4,Bc(m,s.precedence,t),i.instance=m;case"script":return m=bo(s.src),(h=t.querySelector(Kl(m)))?(i.instance=h,W(h),h):(u=s,(h=Wi.get(m))&&(u=v({},s),Xd(u,h)),t=t.ownerDocument||t,h=t.createElement("script"),W(h),kn(h,"link",u),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,Bc(u,s.precedence,t));return i.instance}function Bc(t,i,s){for(var u=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,E=0;E<u.length;E++){var U=u[E];if(U.dataset.precedence===i)m=U;else if(m!==h)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function kd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Xd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var zc=null;function Wv(t,i,s){if(zc===null){var u=new Map,h=zc=new Map;h.set(s,u)}else h=zc,u=h.get(s),u||(u=new Map,h.set(s,u));if(u.has(t))return u;for(u.set(t,null),s=s.getElementsByTagName(t),h=0;h<s.length;h++){var m=s[h];if(!(m[rs]||m[_n]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=t+E;var U=u.get(E);U?U.push(m):u.set(E,[m])}}return u}function Yv(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function cT(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function qv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function fT(t,i,s,u){if(s.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=To(u.href),m=i.querySelector(Zl(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Ic.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=m,W(m);return}m=i.ownerDocument||i,u=kv(u),(h=Wi.get(h))&&kd(u,h),m=m.createElement("link"),W(m);var E=m;E._p=new Promise(function(U,V){E.onload=U,E.onerror=V}),kn(m,"link",u),s.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Ic.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Wd=0;function hT(t,i){return t.stylesheets&&t.count===0&&Hc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var u=setTimeout(function(){if(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&Wd===0&&(Wd=62500*YE());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Wd?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(u),clearTimeout(h)}}:null}function Ic(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fc=null;function Hc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fc=new Map,i.forEach(dT,t),Fc=null,Ic.call(t))}function dT(t,i){if(!(i.state.loading&4)){var s=Fc.get(t);if(s)var u=s.get(null);else{s=new Map,Fc.set(t,s);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),u=E)}u&&s.set(null,u)}h=i.instance,E=h.getAttribute("data-precedence"),m=s.get(E)||u,m===u&&s.set(null,h),s.set(E,h),this.count++,u=Ic.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Ql={$$typeof:D,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function pT(t,i,s,u,h,m,E,U,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function jv(t,i,s,u,h,m,E,U,V,ne,pe,xe){return t=new pT(t,i,s,E,V,ne,pe,xe,U),i=1,m===!0&&(i|=24),m=Mi(3,null,null,i),t.current=m,m.stateNode=t,i=Th(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:s,cache:i},Ch(m),t}function Zv(t){return t?(t=to,t):to}function Kv(t,i,s,u,h,m){h=Zv(h),u.context===null?u.context=h:u.pendingContext=h,u=yr(i),u.payload={element:s},m=m===void 0?null:m,m!==null&&(u.callback=m),s=Er(t,u,i),s!==null&&(hi(s,t,i),wl(s,t,i))}function Qv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Yd(t,i){Qv(t,i),(t=t.alternate)&&Qv(t,i)}function Jv(t){if(t.tag===13||t.tag===31){var i=cs(t,67108864);i!==null&&hi(i,t,67108864),Yd(t,67108864)}}function $v(t){if(t.tag===13||t.tag===31){var i=Ai();i=Ws(i);var s=cs(t,i);s!==null&&hi(s,t,i),Yd(t,i)}}var Gc=!0;function mT(t,i,s,u){var h=B.T;B.T=null;var m=F.p;try{F.p=2,qd(t,i,s,u)}finally{F.p=m,B.T=h}}function gT(t,i,s,u){var h=B.T;B.T=null;var m=F.p;try{F.p=8,qd(t,i,s,u)}finally{F.p=m,B.T=h}}function qd(t,i,s,u){if(Gc){var h=jd(u);if(h===null)Nd(t,i,u,Vc,s),tx(t,u);else if(vT(h,t,i,s,u))u.stopPropagation();else if(tx(t,u),i&4&&-1<_T.indexOf(t)){for(;h!==null;){var m=mr(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Te(m.pendingLanes);if(E!==0){var U=m;for(U.pendingLanes|=2,U.entangledLanes|=2;E;){var V=1<<31-we(E);U.entanglements[1]|=V,E&=~V}va(m),(zt&6)===0&&(Tc=b()+500,Wl(0))}}break;case 31:case 13:U=cs(m,2),U!==null&&hi(U,m,2),Ac(),Yd(m,2)}if(m=jd(u),m===null&&Nd(t,i,u,Vc,s),m===h)break;h=m}h!==null&&u.stopPropagation()}else Nd(t,i,u,null,s)}}function jd(t){return t=Kf(t),Zd(t)}var Vc=null;function Zd(t){if(Vc=null,t=pr(t),t!==null){var i=l(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=c(i),t!==null)return t;t=null}else if(s===31){if(t=f(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Vc=t,null}function ex(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G()){case de:return 2;case me:return 8;case ue:case Be:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var Kd=!1,Or=null,Pr=null,Br=null,Jl=new Map,$l=new Map,zr=[],_T="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tx(t,i){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":Jl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":$l.delete(i.pointerId)}}function eu(t,i,s,u,h,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=mr(i),i!==null&&Jv(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function vT(t,i,s,u,h){switch(i){case"focusin":return Or=eu(Or,t,i,s,u,h),!0;case"dragenter":return Pr=eu(Pr,t,i,s,u,h),!0;case"mouseover":return Br=eu(Br,t,i,s,u,h),!0;case"pointerover":var m=h.pointerId;return Jl.set(m,eu(Jl.get(m)||null,t,i,s,u,h)),!0;case"gotpointercapture":return m=h.pointerId,$l.set(m,eu($l.get(m)||null,t,i,s,u,h)),!0}return!1}function nx(t){var i=pr(t.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){t.blockedOn=i,qs(t.priority,function(){$v(s)});return}}else if(i===31){if(i=f(s),i!==null){t.blockedOn=i,qs(t.priority,function(){$v(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=jd(t.nativeEvent);if(s===null){s=t.nativeEvent;var u=new s.constructor(s.type,s);Zf=u,s.target.dispatchEvent(u),Zf=null}else return i=mr(s),i!==null&&Jv(i),t.blockedOn=s,!1;i.shift()}return!0}function ix(t,i,s){kc(t)&&s.delete(i)}function xT(){Kd=!1,Or!==null&&kc(Or)&&(Or=null),Pr!==null&&kc(Pr)&&(Pr=null),Br!==null&&kc(Br)&&(Br=null),Jl.forEach(ix),$l.forEach(ix)}function Xc(t,i){t.blockedOn===i&&(t.blockedOn=null,Kd||(Kd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,xT)))}var Wc=null;function ax(t){Wc!==t&&(Wc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Wc===t&&(Wc=null);for(var i=0;i<t.length;i+=3){var s=t[i],u=t[i+1],h=t[i+2];if(typeof u!="function"){if(Zd(u||s)===null)continue;break}var m=mr(s);m!==null&&(t.splice(i,3),i-=3,jh(m,{pending:!0,data:h,method:s.method,action:u},u,h))}}))}function Ao(t){function i(V){return Xc(V,t)}Or!==null&&Xc(Or,t),Pr!==null&&Xc(Pr,t),Br!==null&&Xc(Br,t),Jl.forEach(i),$l.forEach(i);for(var s=0;s<zr.length;s++){var u=zr[s];u.blockedOn===t&&(u.blockedOn=null)}for(;0<zr.length&&(s=zr[0],s.blockedOn===null);)nx(s),s.blockedOn===null&&zr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(u=0;u<s.length;u+=3){var h=s[u],m=s[u+1],E=h[Cn]||null;if(typeof m=="function")E||ax(s);else if(E){var U=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[Cn]||null)U=E.formAction;else if(Zd(h)!==null)continue}else U=E.action;typeof U=="function"?s[u+1]=U:(s.splice(u,3),u-=3),ax(s)}}}function rx(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return h=E})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),u||setTimeout(s,20)}function s(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){u=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Qd(t){this._internalRoot=t}Yc.prototype.render=Qd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,u=Ai();Kv(s,u,t,i,null,null)},Yc.prototype.unmount=Qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Kv(t.current,2,null,t,null,null),Ac(),i[Ua]=null}};function Yc(t){this._internalRoot=t}Yc.prototype.unstable_scheduleHydration=function(t){if(t){var i=pa();t={blockedOn:null,target:t,priority:i};for(var s=0;s<zr.length&&i!==0&&i<zr[s].priority;s++);zr.splice(s,0,t),s===0&&nx(t)}};var sx=e.version;if(sx!=="19.2.4")throw Error(a(527,sx,"19.2.4"));F.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=d(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var ST={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{ye=qc.inject(ST),Me=qc}catch{}}return nu.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,u="",h=d_,m=p_,E=m_;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=jv(t,1,!1,null,null,s,u,null,h,m,E,rx),t[Ua]=i.current,Ld(t),new Qd(i)},nu.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var u=!1,h="",m=d_,E=p_,U=m_,V=null;return s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(U=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),i=jv(t,1,!0,i,s??null,u,h,V,m,E,U,rx),i.context=Zv(null),s=i.current,u=Ai(),u=Ws(u),h=yr(u),h.callback=null,Er(s,h,u),s=u,i.current.lanes=s,Jn(i,s),va(i),t[Ua]=i.current,Ld(t),new Yc(i)},nu.version="19.2.4",nu}var gx;function DT(){if(gx)return ep.exports;gx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ep.exports=wT(),ep.exports}var UT=DT();function tr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function BS(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ko={duration:.5,overwrite:!1,delay:0},$m,Wn,sn,Zi=1e8,Jt=1/Zi,Yp=Math.PI*2,LT=Yp/4,NT=0,zS=Math.sqrt,OT=Math.cos,PT=Math.sin,In=function(e){return typeof e=="string"},dn=function(e){return typeof e=="function"},sr=function(e){return typeof e=="number"},e0=function(e){return typeof e>"u"},wa=function(e){return typeof e=="object"},di=function(e){return e!==!1},t0=function(){return typeof window<"u"},jc=function(e){return dn(e)||In(e)},IS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qn=Array.isArray,BT=/random\([^)]+\)/g,zT=/,\s*/g,_x=/(?:-?\.?\d|\.)+/gi,FS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ko=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ap=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,HS=/[+-]=-?[.\d]+/,IT=/[^,'"\[\]\s]+/gi,FT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ln,Ma,qp,n0,Bi={},Df={},GS,VS=function(e){return(Df=Qo(e,Bi))&&_i},i0=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Su=function(e,n){return!n&&console.warn(e)},kS=function(e,n){return e&&(Bi[e]=n)&&Df&&(Df[e]=n)||Bi},Mu=function(){return 0},HT={suppressEvents:!0,isStart:!0,kill:!1},Mf={suppressEvents:!0,kill:!1},GT={suppressEvents:!0},a0={},Qr=[],jp={},XS,wi={},rp={},vx=30,yf=[],r0="",s0=function(e){var n=e[0],a,o;if(wa(n)||dn(n)||(e=[e]),!(a=(n._gsap||{}).harness)){for(o=yf.length;o--&&!yf[o].targetTest(n););a=yf[o]}for(o=e.length;o--;)e[o]&&(e[o]._gsap||(e[o]._gsap=new pM(e[o],a)))||e.splice(o,1);return e},Is=function(e){return e._gsap||s0(Ki(e))[0]._gsap},WS=function(e,n,a){return(a=e[n])&&dn(a)?e[n]():e0(a)&&e.getAttribute&&e.getAttribute(n)||a},pi=function(e,n){return(e=e.split(",")).forEach(n)||e},gn=function(e){return Math.round(e*1e5)/1e5||0},on=function(e){return Math.round(e*1e7)/1e7||0},Wo=function(e,n){var a=n.charAt(0),o=parseFloat(n.substr(2));return e=parseFloat(e),a==="+"?e+o:a==="-"?e-o:a==="*"?e*o:e/o},VT=function(e,n){for(var a=n.length,o=0;e.indexOf(n[o])<0&&++o<a;);return o<a},Uf=function(){var e=Qr.length,n=Qr.slice(0),a,o;for(jp={},Qr.length=0,a=0;a<e;a++)o=n[a],o&&o._lazy&&(o.render(o._lazy[0],o._lazy[1],!0)._lazy=0)},o0=function(e){return!!(e._initted||e._startAt||e.add)},YS=function(e,n,a,o){Qr.length&&!Wn&&Uf(),e.render(n,a,!!(Wn&&n<0&&o0(e))),Qr.length&&!Wn&&Uf()},qS=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(IT).length<2?n:In(e)?e.trim():e},jS=function(e){return e},zi=function(e,n){for(var a in n)a in e||(e[a]=n[a]);return e},kT=function(e){return function(n,a){for(var o in a)o in n||o==="duration"&&e||o==="ease"||(n[o]=a[o])}},Qo=function(e,n){for(var a in n)e[a]=n[a];return e},xx=function r(e,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(e[a]=wa(n[a])?r(e[a]||(e[a]={}),n[a]):n[a]);return e},Lf=function(e,n){var a={},o;for(o in e)o in n||(a[o]=e[o]);return a},mu=function(e){var n=e.parent||ln,a=e.keyframes?kT(Qn(e.keyframes)):zi;if(di(e.inherit))for(;n;)a(e,n.vars.defaults),n=n.parent||n._dp;return e},XT=function(e,n){for(var a=e.length,o=a===n.length;o&&a--&&e[a]===n[a];);return a<0},ZS=function(e,n,a,o,l){var c=e[o],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=e[a],e[a]=n),n._next?n._next._prev=n:e[o]=n,n._prev=c,n.parent=n._dp=e,n},Vf=function(e,n,a,o){a===void 0&&(a="_first"),o===void 0&&(o="_last");var l=n._prev,c=n._next;l?l._next=c:e[a]===n&&(e[a]=c),c?c._prev=l:e[o]===n&&(e[o]=l),n._next=n._prev=n.parent=null},es=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Fs=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var a=e;a;)a._dirty=1,a=a.parent;return e},WT=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Zp=function(e,n,a,o){return e._startAt&&(Wn?e._startAt.revert(Mf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,o))},YT=function r(e){return!e||e._ts&&r(e.parent)},Sx=function(e){return e._repeat?Jo(e._tTime,e=e.duration()+e._rDelay)*e:0},Jo=function(e,n){var a=Math.floor(e=on(e/n));return e&&a===e?a-1:a},Nf=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},kf=function(e){return e._end=on(e._start+(e._tDur/Math.abs(e._ts||e._rts||Jt)||0))},Xf=function(e,n){var a=e._dp;return a&&a.smoothChildTiming&&e._ts&&(e._start=on(a._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),kf(e),a._dirty||Fs(a,e)),e},KS=function(e,n){var a;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(a=Nf(e.rawTime(),n),(!n._dur||wu(0,n.totalDuration(),a)-n._tTime>Jt)&&n.render(a,!0)),Fs(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(a=e;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;e._zTime=-Jt}},Ea=function(e,n,a,o){return n.parent&&es(n),n._start=on((sr(a)?a:a||e!==ln?qi(e,a,n):e._time)+n._delay),n._end=on(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),ZS(e,n,"_first","_last",e._sort?"_start":0),Kp(n)||(e._recent=n),o||KS(e,n),e._ts<0&&Xf(e,e._tTime),e},QS=function(e,n){return(Bi.ScrollTrigger||i0("scrollTrigger",n))&&Bi.ScrollTrigger.create(n,e)},JS=function(e,n,a,o,l){if(u0(e,n,l),!e._initted)return 1;if(!a&&e._pt&&!Wn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&XS!==Di.frame)return Qr.push(e),e._lazy=[l,o],1},qT=function r(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||r(n))},Kp=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},jT=function(e,n,a,o){var l=e.ratio,c=n<0||!n&&(!e._start&&qT(e)&&!(!e._initted&&Kp(e))||(e._ts<0||e._dp._ts<0)&&!Kp(e))?0:1,f=e._rDelay,p=0,d,g,v;if(f&&e._repeat&&(p=wu(0,e._tDur,n),g=Jo(p,f),e._yoyo&&g&1&&(c=1-c),g!==Jo(e._tTime,f)&&(l=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==l||Wn||o||e._zTime===Jt||!n&&e._zTime){if(!e._initted&&JS(e,n,o,a,p))return;for(v=e._zTime,e._zTime=n||(a?Jt:0),a||(a=n&&!v),e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=p,d=e._pt;d;)d.r(c,d.d),d=d._next;n<0&&Zp(e,n,a,!0),e._onUpdate&&!a&&Li(e,"onUpdate"),p&&e._repeat&&!a&&e.parent&&Li(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===c&&(c&&es(e,1),!a&&!Wn&&(Li(e,c?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},ZT=function(e,n,a){var o;if(a>n)for(o=e._first;o&&o._start<=a;){if(o.data==="isPause"&&o._start>n)return o;o=o._next}else for(o=e._last;o&&o._start>=a;){if(o.data==="isPause"&&o._start<n)return o;o=o._prev}},$o=function(e,n,a,o){var l=e._repeat,c=on(n)||0,f=e._tTime/e._tDur;return f&&!o&&(e._time*=c/e._dur),e._dur=c,e._tDur=l?l<0?1e10:on(c*(l+1)+e._rDelay*l):c,f>0&&!o&&Xf(e,e._tTime=e._tDur*f),e.parent&&kf(e),a||Fs(e.parent,e),e},Mx=function(e){return e instanceof ri?Fs(e):$o(e,e._dur)},KT={_start:0,endTime:Mu,totalDuration:Mu},qi=function r(e,n,a){var o=e.labels,l=e._recent||KT,c=e.duration()>=Zi?l.endTime(!1):e._dur,f,p,d;return In(n)&&(isNaN(n)||n in o)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?l:a).totalDuration()/100:1)):f<0?(n in o||(o[n]=c),o[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(Qn(a)?a[0]:a).totalDuration()),f>1?r(e,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},gu=function(e,n,a){var o=sr(n[1]),l=(o?2:1)+(e<2?0:1),c=n[l],f,p;if(o&&(c.duration=n[1]),c.parent=a,e){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=di(p.vars.inherit)&&p.parent;c.immediateRender=di(f.immediateRender),e<2?c.runBackwards=1:c.startAt=n[l-1]}return new bn(n[0],c,n[l+1])},as=function(e,n){return e||e===0?n(e):n},wu=function(e,n,a){return a<e?e:a>n?n:a},Kn=function(e,n){return!In(e)||!(n=FT.exec(e))?"":n[1]},QT=function(e,n,a){return as(a,function(o){return wu(e,n,o)})},Qp=[].slice,$S=function(e,n){return e&&wa(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&wa(e[0]))&&!e.nodeType&&e!==Ma},JT=function(e,n,a){return a===void 0&&(a=[]),e.forEach(function(o){var l;return In(o)&&!n||$S(o,1)?(l=a).push.apply(l,Ki(o)):a.push(o)})||a},Ki=function(e,n,a){return sn&&!n&&sn.selector?sn.selector(e):In(e)&&!a&&(qp||!el())?Qp.call((n||n0).querySelectorAll(e),0):Qn(e)?JT(e,a):$S(e)?Qp.call(e,0):e?[e]:[]},Jp=function(e){return e=Ki(e)[0]||Su("Invalid scope")||{},function(n){var a=e.current||e.nativeElement||e;return Ki(n,a.querySelectorAll?a:a===e?Su("Invalid scope")||n0.createElement("div"):e)}},eM=function(e){return e.sort(function(){return .5-Math.random()})},tM=function(e){if(dn(e))return e;var n=wa(e)?e:{each:e},a=Hs(n.ease),o=n.from||0,l=parseFloat(n.base)||0,c={},f=o>0&&o<1,p=isNaN(o)||f,d=n.axis,g=o,v=o;return In(o)?g=v={center:.5,edges:.5,end:1}[o]||0:!f&&p&&(g=o[0],v=o[1]),function(_,x,y){var T=(y||n).length,S=c[T],M,R,D,C,N,P,O,A,w;if(!S){if(w=n.grid==="auto"?0:(n.grid||[1,Zi])[1],!w){for(O=-Zi;O<(O=y[w++].getBoundingClientRect().left)&&w<T;);w<T&&w--}for(S=c[T]=[],M=p?Math.min(w,T)*g-.5:o%w,R=w===Zi?0:p?T*v/w-.5:o/w|0,O=0,A=Zi,P=0;P<T;P++)D=P%w-M,C=R-(P/w|0),S[P]=N=d?Math.abs(d==="y"?C:D):zS(D*D+C*C),N>O&&(O=N),N<A&&(A=N);o==="random"&&eM(S),S.max=O-A,S.min=A,S.v=T=(parseFloat(n.amount)||parseFloat(n.each)*(w>T?T-1:d?d==="y"?T/w:w:Math.max(w,T/w))||0)*(o==="edges"?-1:1),S.b=T<0?l-T:l,S.u=Kn(n.amount||n.each)||0,a=a&&T<0?fM(a):a}return T=(S[_]-S.min)/S.max||0,on(S.b+(a?a(T):T)*S.v)+S.u}},$p=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(a){var o=on(Math.round(parseFloat(a)/e)*e*n);return(o-o%1)/n+(sr(a)?0:Kn(a))}},nM=function(e,n){var a=Qn(e),o,l;return!a&&wa(e)&&(o=a=e.radius||Zi,e.values?(e=Ki(e.values),(l=!sr(e[0]))&&(o*=o)):e=$p(e.increment)),as(n,a?dn(e)?function(c){return l=e(c),Math.abs(l-c)<=o?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),d=Zi,g=0,v=e.length,_,x;v--;)l?(_=e[v].x-f,x=e[v].y-p,_=_*_+x*x):_=Math.abs(e[v]-f),_<d&&(d=_,g=v);return g=!o||d<=o?e[g]:c,l||g===c||sr(c)?g:g+Kn(c)}:$p(e))},iM=function(e,n,a,o){return as(Qn(e)?!n:a===!0?!!(a=0):!o,function(){return Qn(e)?e[~~(Math.random()*e.length)]:(a=a||1e-5)&&(o=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((e-a/2+Math.random()*(n-e+a*.99))/a)*a*o)/o})},$T=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return function(o){return n.reduce(function(l,c){return c(l)},o)}},e1=function(e,n){return function(a){return e(parseFloat(a))+(n||Kn(a))}},t1=function(e,n,a){return rM(e,n,0,1,a)},aM=function(e,n,a){return as(a,function(o){return e[~~n(o)]})},n1=function r(e,n,a){var o=n-e;return Qn(e)?aM(e,r(0,e.length),n):as(a,function(l){return(o+(l-e)%o)%o+e})},i1=function r(e,n,a){var o=n-e,l=o*2;return Qn(e)?aM(e,r(0,e.length-1),n):as(a,function(c){return c=(l+(c-e)%l)%l||0,e+(c>o?l-c:c)})},yu=function(e){return e.replace(BT,function(n){var a=n.indexOf("[")+1,o=n.substring(a||7,a?n.indexOf("]"):n.length-1).split(zT);return iM(a?o:+o[0],a?0:+o[1],+o[2]||1e-5)})},rM=function(e,n,a,o,l){var c=n-e,f=o-a;return as(l,function(p){return a+((p-e)/c*f||0)})},a1=function r(e,n,a,o){var l=isNaN(e+n)?0:function(x){return(1-x)*e+x*n};if(!l){var c=In(e),f={},p,d,g,v,_;if(a===!0&&(o=1)&&(a=null),c)e={p:e},n={p:n};else if(Qn(e)&&!Qn(n)){for(g=[],v=e.length,_=v-2,d=1;d<v;d++)g.push(r(e[d-1],e[d]));v--,l=function(y){y*=v;var T=Math.min(_,~~y);return g[T](y-T)},a=n}else o||(e=Qo(Qn(e)?[]:{},e));if(!g){for(p in n)l0.call(f,e,p,"get",n[p]);l=function(y){return h0(y,f)||(c?e.p:e)}}}return as(a,l)},yx=function(e,n,a){var o=e.labels,l=Zi,c,f,p;for(c in o)f=o[c]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},Li=function(e,n,a){var o=e.vars,l=o[n],c=sn,f=e._ctx,p,d,g;if(l)return p=o[n+"Params"],d=o.callbackScope||e,a&&Qr.length&&Uf(),f&&(sn=f),g=p?l.apply(d,p):l.call(d),sn=c,g},cu=function(e){return es(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Wn),e.progress()<1&&Li(e,"onInterrupt"),e},Xo,sM=[],oM=function(e){if(e)if(e=!e.name&&e.default||e,t0()||e.headless){var n=e.name,a=dn(e),o=n&&!a&&e.init?function(){this._props=[]}:e,l={init:Mu,render:h0,add:l0,kill:S1,modifier:x1,rawVars:0},c={targetTest:0,get:0,getSetter:f0,aliases:{},register:0};if(el(),e!==o){if(wi[n])return;zi(o,zi(Lf(e,l),c)),Qo(o.prototype,Qo(l,Lf(e,c))),wi[o.prop=n]=o,e.targetTest&&(yf.push(o),a0[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}kS(n,o),e.register&&e.register(_i,o,mi)}else sM.push(e)},Qt=255,fu={aqua:[0,Qt,Qt],lime:[0,Qt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qt],navy:[0,0,128],white:[Qt,Qt,Qt],olive:[128,128,0],yellow:[Qt,Qt,0],orange:[Qt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qt,0,0],pink:[Qt,192,203],cyan:[0,Qt,Qt],transparent:[Qt,Qt,Qt,0]},sp=function(e,n,a){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(a-n)*e*6:e<.5?a:e*3<2?n+(a-n)*(2/3-e)*6:n)*Qt+.5|0},lM=function(e,n,a){var o=e?sr(e)?[e>>16,e>>8&Qt,e&Qt]:0:fu.black,l,c,f,p,d,g,v,_,x,y;if(!o){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fu[e])o=fu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(l=e.charAt(1),c=e.charAt(2),f=e.charAt(3),e="#"+l+l+c+c+f+f+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return o=parseInt(e.substr(1,6),16),[o>>16,o>>8&Qt,o&Qt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),o=[e>>16,e>>8&Qt,e&Qt]}else if(e.substr(0,3)==="hsl"){if(o=y=e.match(_x),!n)p=+o[0]%360/360,d=+o[1]/100,g=+o[2]/100,c=g<=.5?g*(d+1):g+d-g*d,l=g*2-c,o.length>3&&(o[3]*=1),o[0]=sp(p+1/3,l,c),o[1]=sp(p,l,c),o[2]=sp(p-1/3,l,c);else if(~e.indexOf("="))return o=e.match(FS),a&&o.length<4&&(o[3]=1),o}else o=e.match(_x)||fu.transparent;o=o.map(Number)}return n&&!y&&(l=o[0]/Qt,c=o[1]/Qt,f=o[2]/Qt,v=Math.max(l,c,f),_=Math.min(l,c,f),g=(v+_)/2,v===_?p=d=0:(x=v-_,d=g>.5?x/(2-v-_):x/(v+_),p=v===l?(c-f)/x+(c<f?6:0):v===c?(f-l)/x+2:(l-c)/x+4,p*=60),o[0]=~~(p+.5),o[1]=~~(d*100+.5),o[2]=~~(g*100+.5)),a&&o.length<4&&(o[3]=1),o},uM=function(e){var n=[],a=[],o=-1;return e.split(Jr).forEach(function(l){var c=l.match(ko)||[];n.push.apply(n,c),a.push(o+=c.length+1)}),n.c=a,n},Ex=function(e,n,a){var o="",l=(e+o).match(Jr),c=n?"hsla(":"rgba(",f=0,p,d,g,v;if(!l)return e;if(l=l.map(function(_){return(_=lM(_,n,1))&&c+(n?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),a&&(g=uM(e),p=a.c,p.join(o)!==g.c.join(o)))for(d=e.replace(Jr,"1").split(ko),v=d.length-1;f<v;f++)o+=d[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(g.length?g:l.length?l:a).shift());if(!d)for(d=e.split(Jr),v=d.length-1;f<v;f++)o+=d[f]+l[f];return o+d[v]},Jr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fu)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),r1=/hsl[a]?\(/,cM=function(e){var n=e.join(" "),a;if(Jr.lastIndex=0,Jr.test(n))return a=r1.test(n),e[1]=Ex(e[1],a),e[0]=Ex(e[0],a,uM(e[1])),!0},Eu,Di=(function(){var r=Date.now,e=500,n=33,a=r(),o=a,l=1e3/240,c=l,f=[],p,d,g,v,_,x,y=function T(S){var M=r()-o,R=S===!0,D,C,N,P;if((M>e||M<0)&&(a+=M-n),o+=M,N=o-a,D=N-c,(D>0||R)&&(P=++v.frame,_=N-v.time*1e3,v.time=N=N/1e3,c+=D+(D>=l?4:l-D),C=1),R||(p=d(T)),C)for(x=0;x<f.length;x++)f[x](N,_,P,S)};return v={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(S){return _/(1e3/(S||60))},wake:function(){GS&&(!qp&&t0()&&(Ma=qp=window,n0=Ma.document||{},Bi.gsap=_i,(Ma.gsapVersions||(Ma.gsapVersions=[])).push(_i.version),VS(Df||Ma.GreenSockGlobals||!Ma.gsap&&Ma||{}),sM.forEach(oM)),g=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&v.sleep(),d=g||function(S){return setTimeout(S,c-v.time*1e3+1|0)},Eu=1,y(2))},sleep:function(){(g?cancelAnimationFrame:clearTimeout)(p),Eu=0,d=Mu},lagSmoothing:function(S,M){e=S||1/0,n=Math.min(M||33,e)},fps:function(S){l=1e3/(S||240),c=v.time*1e3+l},add:function(S,M,R){var D=M?function(C,N,P,O){S(C,N,P,O),v.remove(D)}:S;return v.remove(S),f[R?"unshift":"push"](D),el(),D},remove:function(S,M){~(M=f.indexOf(S))&&f.splice(M,1)&&x>=M&&x--},_listeners:f},v})(),el=function(){return!Eu&&Di.wake()},Rt={},s1=/^[\d.\-M][\d.\-,\s]/,o1=/["']/g,l1=function(e){for(var n={},a=e.substr(1,e.length-3).split(":"),o=a[0],l=1,c=a.length,f,p,d;l<c;l++)p=a[l],f=l!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[o]=isNaN(d)?d.replace(o1,"").trim():+d,o=p.substr(f+1).trim();return n},u1=function(e){var n=e.indexOf("(")+1,a=e.indexOf(")"),o=e.indexOf("(",n);return e.substring(n,~o&&o<a?e.indexOf(")",a+1):a)},c1=function(e){var n=(e+"").split("("),a=Rt[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~e.indexOf("{")?[l1(n[1])]:u1(e).split(",").map(qS)):Rt._CE&&s1.test(e)?Rt._CE("",e):a},fM=function(e){return function(n){return 1-e(1-n)}},hM=function r(e,n){for(var a=e._first,o;a;)a instanceof ri?r(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?r(a.timeline,n):(o=a._ease,a._ease=a._yEase,a._yEase=o,a._yoyo=n)),a=a._next},Hs=function(e,n){return e&&(dn(e)?e:Rt[e]||c1(e))||n},ks=function(e,n,a,o){a===void 0&&(a=function(p){return 1-n(1-p)}),o===void 0&&(o=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:o},c;return pi(e,function(f){Rt[f]=Bi[f]=l,Rt[c=f.toLowerCase()]=a;for(var p in l)Rt[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Rt[f+"."+p]=l[p]}),l},dM=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},op=function r(e,n,a){var o=n>=1?n:1,l=(a||(e?.3:.45))/(n<1?n:1),c=l/Yp*(Math.asin(1/o)||0),f=function(g){return g===1?1:o*Math.pow(2,-10*g)*PT((g-c)*l)+1},p=e==="out"?f:e==="in"?function(d){return 1-f(1-d)}:dM(f);return l=Yp/l,p.config=function(d,g){return r(e,d,g)},p},lp=function r(e,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},o=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:dM(a);return o.config=function(l){return r(e,l)},o};pi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var n=e<5?e+1:e;ks(r+",Power"+(n-1),e?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Rt.Linear.easeNone=Rt.none=Rt.Linear.easeIn;ks("Elastic",op("in"),op("out"),op());(function(r,e){var n=1/e,a=2*n,o=2.5*n,l=function(f){return f<n?r*f*f:f<a?r*Math.pow(f-1.5/e,2)+.75:f<o?r*(f-=2.25/e)*f+.9375:r*Math.pow(f-2.625/e,2)+.984375};ks("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);ks("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ks("Circ",function(r){return-(zS(1-r*r)-1)});ks("Sine",function(r){return r===1?1:-OT(r*LT)+1});ks("Back",lp("in"),lp("out"),lp());Rt.SteppedEase=Rt.steps=Bi.SteppedEase={config:function(e,n){e===void 0&&(e=1);var a=1/e,o=e+(n?0:1),l=n?1:0,c=1-Jt;return function(f){return((o*wu(0,c,f)|0)+l)*a}}};Ko.ease=Rt["quad.out"];pi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return r0+=r+","+r+"Params,"});var pM=function(e,n){this.id=NT++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:WS,this.set=n?n.getSetter:f0},Tu=(function(){function r(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,$o(this,+n.duration,1,1),this.data=n.data,sn&&(this._ctx=sn,sn.data.push(this)),Eu||Di.wake()}var e=r.prototype;return e.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},e.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},e.totalDuration=function(a){return arguments.length?(this._dirty=0,$o(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(a,o){if(el(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Xf(this,a),!l._dp||l.parent||KS(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&Ea(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!o||this._initted&&Math.abs(this._zTime)===Jt||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),YS(this,a,o)),this},e.time=function(a,o){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+Sx(this))%(this._dur+this._rDelay)||(a?this._dur:0),o):this._time},e.totalProgress=function(a,o){return arguments.length?this.totalTime(this.totalDuration()*a,o):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(a,o){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+Sx(this),o):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(a,o){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,o):this._repeat?Jo(this._tTime,l)+1:1},e.timeScale=function(a,o){if(!arguments.length)return this._rts===-Jt?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?Nf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-Jt?0:this._rts,this.totalTime(wu(-Math.abs(this._delay),this.totalDuration(),l),o!==!1),kf(this),WT(this)},e.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(el(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Jt&&(this._tTime-=Jt)))),this):this._ps},e.startTime=function(a){if(arguments.length){this._start=on(a);var o=this.parent||this._dp;return o&&(o._sort||!this.parent)&&Ea(o,this,this._start-this._delay),this}return this._start},e.endTime=function(a){return this._start+(di(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(a){var o=this.parent||this._dp;return o?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nf(o.rawTime(a),this):this._tTime:this._tTime},e.revert=function(a){a===void 0&&(a=GT);var o=Wn;return Wn=a,o0(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Wn=o,this},e.globalTime=function(a){for(var o=this,l=arguments.length?a:o.rawTime();o;)l=o._start+l/(Math.abs(o._ts)||1),o=o._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},e.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,Mx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(a){if(arguments.length){var o=this._time;return this._rDelay=a,Mx(this),o?this.time(o):this}return this._rDelay},e.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},e.seek=function(a,o){return this.totalTime(qi(this,a),di(o))},e.restart=function(a,o){return this.play().totalTime(a?-this._delay:0,di(o)),this._dur||(this._zTime=-Jt),this},e.play=function(a,o){return a!=null&&this.seek(a,o),this.reversed(!1).paused(!1)},e.reverse=function(a,o){return a!=null&&this.seek(a||this.totalDuration(),o),this.reversed(!0).paused(!1)},e.pause=function(a,o){return a!=null&&this.seek(a,o),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-Jt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Jt,this},e.isActive=function(){var a=this.parent||this._dp,o=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=o&&l<this.endTime(!0)-Jt)},e.eventCallback=function(a,o,l){var c=this.vars;return arguments.length>1?(o?(c[a]=o,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=o)):delete c[a],this):c[a]},e.then=function(a){var o=this,l=o._prom;return new Promise(function(c){var f=dn(a)?a:jS,p=function(){var g=o.then;o.then=null,l&&l(),dn(f)&&(f=f(o))&&(f.then||f===o)&&(o.then=g),c(f),o.then=g};o._initted&&o.totalProgress()===1&&o._ts>=0||!o._tTime&&o._ts<0?p():o._prom=p})},e.kill=function(){cu(this)},r})();zi(Tu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Jt,_prom:0,_ps:!1,_rts:1});var ri=(function(r){BS(e,r);function e(a,o){var l;return a===void 0&&(a={}),l=r.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=di(a.sortChildren),ln&&Ea(a.parent||ln,tr(l),o),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&QS(tr(l),a.scrollTrigger),l}var n=e.prototype;return n.to=function(o,l,c){return gu(0,arguments,this),this},n.from=function(o,l,c){return gu(1,arguments,this),this},n.fromTo=function(o,l,c,f){return gu(2,arguments,this),this},n.set=function(o,l,c){return l.duration=0,l.parent=this,mu(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new bn(o,l,qi(this,c),1),this},n.call=function(o,l,c){return Ea(this,bn.delayedCall(0,o,l),c)},n.staggerTo=function(o,l,c,f,p,d,g){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=g,c.parent=this,new bn(o,c,qi(this,p)),this},n.staggerFrom=function(o,l,c,f,p,d,g){return c.runBackwards=1,mu(c).immediateRender=di(c.immediateRender),this.staggerTo(o,l,c,f,p,d,g)},n.staggerFromTo=function(o,l,c,f,p,d,g,v){return f.startAt=c,mu(f).immediateRender=di(f.immediateRender),this.staggerTo(o,l,f,p,d,g,v)},n.render=function(o,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,g=o<=0?0:on(o),v=this._zTime<0!=o<0&&(this._initted||!d),_,x,y,T,S,M,R,D,C,N,P,O;if(this!==ln&&g>p&&o>=0&&(g=p),g!==this._tTime||c||v){if(f!==this._time&&d&&(g+=this._time-f,o+=this._time-f),_=g,C=this._start,D=this._ts,M=!D,v&&(d||(f=this._zTime),(o||!l)&&(this._zTime=o)),this._repeat){if(P=this._yoyo,S=d+this._rDelay,this._repeat<-1&&o<0)return this.totalTime(S*100+o,l,c);if(_=on(g%S),g===p?(T=this._repeat,_=d):(N=on(g/S),T=~~N,T&&T===N&&(_=d,T--),_>d&&(_=d)),N=Jo(this._tTime,S),!f&&this._tTime&&N!==T&&this._tTime-N*S-this._dur<=0&&(N=T),P&&T&1&&(_=d-_,O=1),T!==N&&!this._lock){var A=P&&N&1,w=A===(P&&T&1);if(T<N&&(A=!A),f=A?0:g%d?d:g,this._lock=1,this.render(f||(O?0:on(T*S)),l,!d)._lock=0,this._tTime=g,!l&&this.parent&&Li(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1,N=T),f&&f!==this._time||M!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,w&&(this._lock=2,f=A?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!M)return this;hM(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=ZT(this,on(f),on(_)),R&&(g-=_-(_=R._start))),this._tTime=g,this._time=_,this._act=!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=o,f=0),!f&&g&&d&&!l&&!N&&(Li(this,"onStart"),this._tTime!==g))return this;if(_>=f&&o>=0)for(x=this._first;x;){if(y=x._next,(x._act||_>=x._start)&&x._ts&&R!==x){if(x.parent!==this)return this.render(o,l,c);if(x.render(x._ts>0?(_-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(_-x._start)*x._ts,l,c),_!==this._time||!this._ts&&!M){R=0,y&&(g+=this._zTime=-Jt);break}}x=y}else{x=this._last;for(var J=o<0?o:_;x;){if(y=x._prev,(x._act||J<=x._end)&&x._ts&&R!==x){if(x.parent!==this)return this.render(o,l,c);if(x.render(x._ts>0?(J-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(J-x._start)*x._ts,l,c||Wn&&o0(x)),_!==this._time||!this._ts&&!M){R=0,y&&(g+=this._zTime=J?-Jt:Jt);break}}x=y}}if(R&&!l&&(this.pause(),R.render(_>=f?0:-Jt)._zTime=_>=f?1:-1,this._ts))return this._start=C,kf(this),this.render(o,l,c);this._onUpdate&&!l&&Li(this,"onUpdate",!0),(g===p&&this._tTime>=this.totalDuration()||!g&&f)&&(C===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((o||!d)&&(g===p&&this._ts>0||!g&&this._ts<0)&&es(this,1),!l&&!(o<0&&!f)&&(g||f||!p)&&(Li(this,g===p&&o>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(o,l){var c=this;if(sr(l)||(l=qi(this,l,o)),!(o instanceof Tu)){if(Qn(o))return o.forEach(function(f){return c.add(f,l)}),this;if(In(o))return this.addLabel(o,l);if(dn(o))o=bn.delayedCall(0,o);else return this}return this!==o?Ea(this,o,l):this},n.getChildren=function(o,l,c,f){o===void 0&&(o=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Zi);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof bn?l&&p.push(d):(c&&p.push(d),o&&p.push.apply(p,d.getChildren(!0,l,c)))),d=d._next;return p},n.getById=function(o){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===o)return l[c]},n.remove=function(o){return In(o)?this.removeLabel(o):dn(o)?this.killTweensOf(o):(o.parent===this&&Vf(this,o),o===this._recent&&(this._recent=this._last),Fs(this))},n.totalTime=function(o,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=on(Di.time-(this._ts>0?o/this._ts:(this.totalDuration()-o)/-this._ts))),r.prototype.totalTime.call(this,o,l),this._forcing=0,this):this._tTime},n.addLabel=function(o,l){return this.labels[o]=qi(this,l),this},n.removeLabel=function(o){return delete this.labels[o],this},n.addPause=function(o,l,c){var f=bn.delayedCall(0,l||Mu,c);return f.data="isPause",this._hasPause=1,Ea(this,f,qi(this,o))},n.removePause=function(o){var l=this._first;for(o=qi(this,o);l;)l._start===o&&l.data==="isPause"&&es(l),l=l._next},n.killTweensOf=function(o,l,c){for(var f=this.getTweensOf(o,c),p=f.length;p--;)Yr!==f[p]&&f[p].kill(o,l);return this},n.getTweensOf=function(o,l){for(var c=[],f=Ki(o),p=this._first,d=sr(l),g;p;)p instanceof bn?VT(p._targets,f)&&(d?(!Yr||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(g=p.getTweensOf(f,l)).length&&c.push.apply(c,g),p=p._next;return c},n.tweenTo=function(o,l){l=l||{};var c=this,f=qi(c,o),p=l,d=p.startAt,g=p.onStart,v=p.onStartParams,_=p.immediateRender,x,y=bn.to(c,zi({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||Jt,onStart:function(){if(c.pause(),!x){var S=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());y._dur!==S&&$o(y,S,0,1).render(y._time,!0,!0),x=1}g&&g.apply(y,v||[])}},l));return _?y.render(0):y},n.tweenFromTo=function(o,l,c){return this.tweenTo(l,zi({startAt:{time:qi(this,o)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(o){return o===void 0&&(o=this._time),yx(this,qi(this,o))},n.previousLabel=function(o){return o===void 0&&(o=this._time),yx(this,qi(this,o),1)},n.currentLabel=function(o){return arguments.length?this.seek(o,!0):this.previousLabel(this._time+Jt)},n.shiftChildren=function(o,l,c){c===void 0&&(c=0);var f=this._first,p=this.labels,d;for(o=on(o);f;)f._start>=c&&(f._start+=o,f._end+=o),f=f._next;if(l)for(d in p)p[d]>=c&&(p[d]+=o);return Fs(this)},n.invalidate=function(o){var l=this._first;for(this._lock=0;l;)l.invalidate(o),l=l._next;return r.prototype.invalidate.call(this,o)},n.clear=function(o){o===void 0&&(o=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),o&&(this.labels={}),Fs(this)},n.totalDuration=function(o){var l=0,c=this,f=c._last,p=Zi,d,g,v;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-o:o));if(c._dirty){for(v=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),g=f._start,g>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,Ea(c,f,g-f._delay,1)._lock=0):p=g,g<0&&f._ts&&(l-=g,(!v&&!c._dp||v&&v.smoothChildTiming)&&(c._start+=on(g/c._ts),c._time-=g,c._tTime-=g),c.shiftChildren(-g,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=d;$o(c,c===ln&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},e.updateRoot=function(o){if(ln._ts&&(YS(ln,Nf(o,ln)),XS=Di.frame),Di.frame>=vx){vx+=Oi.autoSleep||120;var l=ln._first;if((!l||!l._ts)&&Oi.autoSleep&&Di._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Di.sleep()}}},e})(Tu);zi(ri.prototype,{_lock:0,_hasPause:0,_forcing:0});var f1=function(e,n,a,o,l,c,f){var p=new mi(this._pt,e,n,0,1,SM,null,l),d=0,g=0,v,_,x,y,T,S,M,R;for(p.b=a,p.e=o,a+="",o+="",(M=~o.indexOf("random("))&&(o=yu(o)),c&&(R=[a,o],c(R,e,n),a=R[0],o=R[1]),_=a.match(ap)||[];v=ap.exec(o);)y=v[0],T=o.substring(d,v.index),x?x=(x+1)%5:T.substr(-5)==="rgba("&&(x=1),y!==_[g++]&&(S=parseFloat(_[g-1])||0,p._pt={_next:p._pt,p:T||g===1?T:",",s:S,c:y.charAt(1)==="="?Wo(S,y)-S:parseFloat(y)-S,m:x&&x<4?Math.round:0},d=ap.lastIndex);return p.c=d<o.length?o.substring(d,o.length):"",p.fp=f,(HS.test(o)||M)&&(p.e=0),this._pt=p,p},l0=function(e,n,a,o,l,c,f,p,d,g){dn(o)&&(o=o(l||0,e,c));var v=e[n],_=a!=="get"?a:dn(v)?d?e[n.indexOf("set")||!dn(e["get"+n.substr(3)])?n:"get"+n.substr(3)](d):e[n]():v,x=dn(v)?d?g1:vM:c0,y;if(In(o)&&(~o.indexOf("random(")&&(o=yu(o)),o.charAt(1)==="="&&(y=Wo(_,o)+(Kn(_)||0),(y||y===0)&&(o=y))),!g||_!==o||em)return!isNaN(_*o)&&o!==""?(y=new mi(this._pt,e,n,+_||0,o-(_||0),typeof v=="boolean"?v1:xM,0,x),d&&(y.fp=d),f&&y.modifier(f,this,e),this._pt=y):(!v&&!(n in e)&&i0(n,o),f1.call(this,e,n,_,o,x,p||Oi.stringFilter,d))},h1=function(e,n,a,o,l){if(dn(e)&&(e=_u(e,l,n,a,o)),!wa(e)||e.style&&e.nodeType||Qn(e)||IS(e))return In(e)?_u(e,l,n,a,o):e;var c={},f;for(f in e)c[f]=_u(e[f],l,n,a,o);return c},mM=function(e,n,a,o,l,c){var f,p,d,g;if(wi[e]&&(f=new wi[e]).init(l,f.rawVars?n[e]:h1(n[e],o,l,c,a),a,o,c)!==!1&&(a._pt=p=new mi(a._pt,l,e,0,1,f.render,f,0,f.priority),a!==Xo))for(d=a._ptLookup[a._targets.indexOf(l)],g=f._props.length;g--;)d[f._props[g]]=p;return f},Yr,em,u0=function r(e,n,a){var o=e.vars,l=o.ease,c=o.startAt,f=o.immediateRender,p=o.lazy,d=o.onUpdate,g=o.runBackwards,v=o.yoyoEase,_=o.keyframes,x=o.autoRevert,y=e._dur,T=e._startAt,S=e._targets,M=e.parent,R=M&&M.data==="nested"?M.vars.targets:S,D=e._overwrite==="auto"&&!$m,C=e.timeline,N,P,O,A,w,J,H,q,K,ee,Z,B,F;if(C&&(!_||!l)&&(l="none"),e._ease=Hs(l,Ko.ease),e._yEase=v?fM(Hs(v===!0?l:v,Ko.ease)):0,v&&e._yoyo&&!e._repeat&&(v=e._yEase,e._yEase=e._ease,e._ease=v),e._from=!C&&!!o.runBackwards,!C||_&&!o.stagger){if(q=S[0]?Is(S[0]).harness:0,B=q&&o[q.prop],N=Lf(o,a0),T&&(T._zTime<0&&T.progress(1),n<0&&g&&f&&!x?T.render(-1,!0):T.revert(g&&y?Mf:HT),T._lazy=0),c){if(es(e._startAt=bn.set(S,zi({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:!T&&di(p),startAt:null,delay:0,onUpdate:d&&function(){return Li(e,"onUpdate")},stagger:0},c))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Wn||!f&&!x)&&e._startAt.revert(Mf),f&&y&&n<=0&&a<=0){n&&(e._zTime=n);return}}else if(g&&y&&!T){if(n&&(f=!1),O=zi({overwrite:!1,data:"isFromStart",lazy:f&&!T&&di(p),immediateRender:f,stagger:0,parent:M},N),B&&(O[q.prop]=B),es(e._startAt=bn.set(S,O)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Wn?e._startAt.revert(Mf):e._startAt.render(-1,!0)),e._zTime=n,!f)r(e._startAt,Jt,Jt);else if(!n)return}for(e._pt=e._ptCache=0,p=y&&di(p)||p&&!y,P=0;P<S.length;P++){if(w=S[P],H=w._gsap||s0(S)[P]._gsap,e._ptLookup[P]=ee={},jp[H.id]&&Qr.length&&Uf(),Z=R===S?P:R.indexOf(w),q&&(K=new q).init(w,B||N,e,Z,R)!==!1&&(e._pt=A=new mi(e._pt,w,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(se){ee[se]=A}),K.priority&&(J=1)),!q||B)for(O in N)wi[O]&&(K=mM(O,N,e,Z,w,R))?K.priority&&(J=1):ee[O]=A=l0.call(e,w,O,"get",N[O],Z,R,0,o.stringFilter);e._op&&e._op[P]&&e.kill(w,e._op[P]),D&&e._pt&&(Yr=e,ln.killTweensOf(w,ee,e.globalTime(n)),F=!e.parent,Yr=0),e._pt&&p&&(jp[H.id]=1)}J&&MM(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!F,_&&n<=0&&C.render(Zi,!0,!0)},d1=function(e,n,a,o,l,c,f,p){var d=(e._pt&&e._ptCache||(e._ptCache={}))[n],g,v,_,x;if(!d)for(d=e._ptCache[n]=[],_=e._ptLookup,x=e._targets.length;x--;){if(g=_[x][n],g&&g.d&&g.d._pt)for(g=g.d._pt;g&&g.p!==n&&g.fp!==n;)g=g._next;if(!g)return em=1,e.vars[n]="+=0",u0(e,f),em=0,p?Su(n+" not eligible for reset"):1;d.push(g)}for(x=d.length;x--;)v=d[x],g=v._pt||v,g.s=(o||o===0)&&!l?o:g.s+(o||0)+c*g.c,g.c=a-g.s,v.e&&(v.e=gn(a)+Kn(v.e)),v.b&&(v.b=g.s+Kn(v.b))},p1=function(e,n){var a=e[0]?Is(e[0]).harness:0,o=a&&a.aliases,l,c,f,p;if(!o)return n;l=Qo({},n);for(c in o)if(c in l)for(p=o[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},m1=function(e,n,a,o){var l=n.ease||o||"power1.inOut",c,f;if(Qn(n))f=a[e]||(a[e]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:l})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(e),v:n[c],e:l})},_u=function(e,n,a,o,l){return dn(e)?e.call(n,a,o,l):In(e)&&~e.indexOf("random(")?yu(e):e},gM=r0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",_M={};pi(gM+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return _M[r]=1});var bn=(function(r){BS(e,r);function e(a,o,l,c){var f;typeof o=="number"&&(l.duration=o,o=l,l=null),f=r.call(this,c?o:mu(o))||this;var p=f.vars,d=p.duration,g=p.delay,v=p.immediateRender,_=p.stagger,x=p.overwrite,y=p.keyframes,T=p.defaults,S=p.scrollTrigger,M=p.yoyoEase,R=o.parent||ln,D=(Qn(a)||IS(a)?sr(a[0]):"length"in o)?[a]:Ki(a),C,N,P,O,A,w,J,H;if(f._targets=D.length?s0(D):Su("GSAP target "+a+" not found. https://gsap.com",!Oi.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,y||_||jc(d)||jc(g)){if(o=f.vars,C=f.timeline=new ri({data:"nested",defaults:T||{},targets:R&&R.data==="nested"?R.vars.targets:D}),C.kill(),C.parent=C._dp=tr(f),C._start=0,_||jc(d)||jc(g)){if(O=D.length,J=_&&tM(_),wa(_))for(A in _)~gM.indexOf(A)&&(H||(H={}),H[A]=_[A]);for(N=0;N<O;N++)P=Lf(o,_M),P.stagger=0,M&&(P.yoyoEase=M),H&&Qo(P,H),w=D[N],P.duration=+_u(d,tr(f),N,w,D),P.delay=(+_u(g,tr(f),N,w,D)||0)-f._delay,!_&&O===1&&P.delay&&(f._delay=g=P.delay,f._start+=g,P.delay=0),C.to(w,P,J?J(N,w,D):0),C._ease=Rt.none;C.duration()?d=g=0:f.timeline=0}else if(y){mu(zi(C.vars.defaults,{ease:"none"})),C._ease=Hs(y.ease||o.ease||"none");var q=0,K,ee,Z;if(Qn(y))y.forEach(function(B){return C.to(D,B,">")}),C.duration();else{P={};for(A in y)A==="ease"||A==="easeEach"||m1(A,y[A],P,y.easeEach);for(A in P)for(K=P[A].sort(function(B,F){return B.t-F.t}),q=0,N=0;N<K.length;N++)ee=K[N],Z={ease:ee.e,duration:(ee.t-(N?K[N-1].t:0))/100*d},Z[A]=ee.v,C.to(D,Z,q),q+=Z.duration;C.duration()<d&&C.to({},{duration:d-C.duration()})}}d||f.duration(d=C.duration())}else f.timeline=0;return x===!0&&!$m&&(Yr=tr(f),ln.killTweensOf(D),Yr=0),Ea(R,tr(f),l),o.reversed&&f.reverse(),o.paused&&f.paused(!0),(v||!d&&!y&&f._start===on(R._time)&&di(v)&&YT(tr(f))&&R.data!=="nested")&&(f._tTime=-Jt,f.render(Math.max(0,-g)||0)),S&&QS(tr(f),S),f}var n=e.prototype;return n.render=function(o,l,c){var f=this._time,p=this._tDur,d=this._dur,g=o<0,v=o>p-Jt&&!g?p:o<Jt?0:o,_,x,y,T,S,M,R,D,C;if(!d)jT(this,o,l,c);else if(v!==this._tTime||!o||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==g||this._lazy){if(_=v,D=this.timeline,this._repeat){if(T=d+this._rDelay,this._repeat<-1&&g)return this.totalTime(T*100+o,l,c);if(_=on(v%T),v===p?(y=this._repeat,_=d):(S=on(v/T),y=~~S,y&&y===S?(_=d,y--):_>d&&(_=d)),M=this._yoyo&&y&1,M&&(C=this._yEase,_=d-_),S=Jo(this._tTime,T),_===f&&!c&&this._initted&&y===S)return this._tTime=v,this;y!==S&&(D&&this._yEase&&hM(D,M),this.vars.repeatRefresh&&!M&&!this._lock&&_!==T&&this._initted&&(this._lock=c=1,this.render(on(T*y),!0).invalidate()._lock=0))}if(!this._initted){if(JS(this,g?o:_,c,l,v))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&y!==S))return this;if(d!==this._dur)return this.render(o,l,c)}if(this._tTime=v,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(C||this._ease)(_/d),this._from&&(this.ratio=R=1-R),!f&&v&&!l&&!S&&(Li(this,"onStart"),this._tTime!==v))return this;for(x=this._pt;x;)x.r(R,x.d),x=x._next;D&&D.render(o<0?o:D._dur*D._ease(_/this._dur),l,c)||this._startAt&&(this._zTime=o),this._onUpdate&&!l&&(g&&Zp(this,o,l,c),Li(this,"onUpdate")),this._repeat&&y!==S&&this.vars.onRepeat&&!l&&this.parent&&Li(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(g&&!this._onUpdate&&Zp(this,o,!0,!0),(o||!d)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&es(this,1),!l&&!(g&&!f)&&(v||f||M)&&(Li(this,v===p?"onComplete":"onReverseComplete",!0),this._prom&&!(v<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(o){return(!o||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(o),r.prototype.invalidate.call(this,o)},n.resetTo=function(o,l,c,f,p){Eu||Di.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),g;return this._initted||u0(this,d),g=this._ease(d/this._dur),d1(this,o,l,c,f,g,d,p)?this.resetTo(o,l,c,f,1):(Xf(this,0),this.parent||ZS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(o,l){if(l===void 0&&(l="all"),!o&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?cu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Wn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(o,l,Yr&&Yr.vars.overwrite!==!0)._first||cu(this),this.parent&&c!==this.timeline.totalDuration()&&$o(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=o?Ki(o):f,d=this._ptLookup,g=this._pt,v,_,x,y,T,S,M;if((!l||l==="all")&&XT(f,p))return l==="all"&&(this._pt=0),cu(this);for(v=this._op=this._op||[],l!=="all"&&(In(l)&&(T={},pi(l,function(R){return T[R]=1}),l=T),l=p1(f,l)),M=f.length;M--;)if(~p.indexOf(f[M])){_=d[M],l==="all"?(v[M]=l,y=_,x={}):(x=v[M]=v[M]||{},y=l);for(T in y)S=_&&_[T],S&&((!("kill"in S.d)||S.d.kill(T)===!0)&&Vf(this,S,"_pt"),delete _[T]),x!=="all"&&(x[T]=1)}return this._initted&&!this._pt&&g&&cu(this),this},e.to=function(o,l){return new e(o,l,arguments[2])},e.from=function(o,l){return gu(1,arguments)},e.delayedCall=function(o,l,c,f){return new e(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:o,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},e.fromTo=function(o,l,c){return gu(2,arguments)},e.set=function(o,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new e(o,l)},e.killTweensOf=function(o,l,c){return ln.killTweensOf(o,l,c)},e})(Tu);zi(bn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});pi("staggerTo,staggerFrom,staggerFromTo",function(r){bn[r]=function(){var e=new ri,n=Qp.call(arguments,0);return n.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,n)}});var c0=function(e,n,a){return e[n]=a},vM=function(e,n,a){return e[n](a)},g1=function(e,n,a,o){return e[n](o.fp,a)},_1=function(e,n,a){return e.setAttribute(n,a)},f0=function(e,n){return dn(e[n])?vM:e0(e[n])&&e.setAttribute?_1:c0},xM=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},v1=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},SM=function(e,n){var a=n._pt,o="";if(!e&&n.b)o=n.b;else if(e===1&&n.e)o=n.e;else{for(;a;)o=a.p+(a.m?a.m(a.s+a.c*e):Math.round((a.s+a.c*e)*1e4)/1e4)+o,a=a._next;o+=n.c}n.set(n.t,n.p,o,n)},h0=function(e,n){for(var a=n._pt;a;)a.r(e,a.d),a=a._next},x1=function(e,n,a,o){for(var l=this._pt,c;l;)c=l._next,l.p===o&&l.modifier(e,n,a),l=c},S1=function(e){for(var n=this._pt,a,o;n;)o=n._next,n.p===e&&!n.op||n.op===e?Vf(this,n,"_pt"):n.dep||(a=1),n=o;return!a},M1=function(e,n,a,o){o.mSet(e,n,o.m.call(o.tween,a,o.mt),o)},MM=function(e){for(var n=e._pt,a,o,l,c;n;){for(a=n._next,o=l;o&&o.pr>n.pr;)o=o._next;(n._prev=o?o._prev:c)?n._prev._next=n:l=n,(n._next=o)?o._prev=n:c=n,n=a}e._pt=l},mi=(function(){function r(n,a,o,l,c,f,p,d,g){this.t=a,this.s=l,this.c=c,this.p=o,this.r=f||xM,this.d=p||this,this.set=d||c0,this.pr=g||0,this._next=n,n&&(n._prev=this)}var e=r.prototype;return e.modifier=function(a,o,l){this.mSet=this.mSet||this.set,this.set=M1,this.m=a,this.mt=l,this.tween=o},r})();pi(r0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return a0[r]=1});Bi.TweenMax=Bi.TweenLite=bn;Bi.TimelineLite=Bi.TimelineMax=ri;ln=new ri({sortChildren:!1,defaults:Ko,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Oi.stringFilter=cM;var Gs=[],Ef={},y1=[],Tx=0,E1=0,up=function(e){return(Ef[e]||y1).map(function(n){return n()})},tm=function(){var e=Date.now(),n=[];e-Tx>2&&(up("matchMediaInit"),Gs.forEach(function(a){var o=a.queries,l=a.conditions,c,f,p,d;for(f in o)c=Ma.matchMedia(o[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),up("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(o){return a.add(null,o)})}),Tx=e,up("matchMedia"))},yM=(function(){function r(n,a){this.selector=a&&Jp(a),this.data=[],this._r=[],this.isReverted=!1,this.id=E1++,n&&this.add(n)}var e=r.prototype;return e.add=function(a,o,l){dn(a)&&(l=o,o=a,a=dn);var c=this,f=function(){var d=sn,g=c.selector,v;return d&&d!==c&&d.data.push(c),l&&(c.selector=Jp(l)),sn=c,v=o.apply(c,arguments),dn(v)&&c._r.push(v),sn=d,c.selector=g,c.isReverted=!1,v};return c.last=f,a===dn?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},e.ignore=function(a){var o=sn;sn=null,a(this),sn=o},e.getTweens=function(){var a=[];return this.data.forEach(function(o){return o instanceof r?a.push.apply(a,o.getTweens()):o instanceof bn&&!(o.parent&&o.parent.data==="nested")&&a.push(o)}),a},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(a,o){var l=this;if(a?(function(){for(var f=l.getTweens(),p=l.data.length,d;p--;)d=l.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(g){return f.splice(f.indexOf(g),1)}));for(f.map(function(g){return{g:g._dur||g._delay||g._sat&&!g._sat.vars.immediateRender?g.globalTime(0):-1/0,t:g}}).sort(function(g,v){return v.g-g.g||-1/0}).forEach(function(g){return g.t.revert(a)}),p=l.data.length;p--;)d=l.data[p],d instanceof ri?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof bn)&&d.revert&&d.revert(a);l._r.forEach(function(g){return g(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),o)for(var c=Gs.length;c--;)Gs[c].id===this.id&&Gs.splice(c,1)},e.revert=function(a){this.kill(a||{})},r})(),T1=(function(){function r(n){this.contexts=[],this.scope=n,sn&&sn.data.push(this)}var e=r.prototype;return e.add=function(a,o,l){wa(a)||(a={matches:a});var c=new yM(0,l||this.scope),f=c.conditions={},p,d,g;sn&&!c.selector&&(c.selector=sn.selector),this.contexts.push(c),o=c.add("onMatch",o),c.queries=a;for(d in a)d==="all"?g=1:(p=Ma.matchMedia(a[d]),p&&(Gs.indexOf(c)<0&&Gs.push(c),(f[d]=p.matches)&&(g=1),p.addListener?p.addListener(tm):p.addEventListener("change",tm)));return g&&o(c,function(v){return c.add(null,v)}),this},e.revert=function(a){this.kill(a||{})},e.kill=function(a){this.contexts.forEach(function(o){return o.kill(a,!0)})},r})(),Of={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];n.forEach(function(o){return oM(o)})},timeline:function(e){return new ri(e)},getTweensOf:function(e,n){return ln.getTweensOf(e,n)},getProperty:function(e,n,a,o){In(e)&&(e=Ki(e)[0]);var l=Is(e||{}).get,c=a?jS:qS;return a==="native"&&(a=""),e&&(n?c((wi[n]&&wi[n].get||l)(e,n,a,o)):function(f,p,d){return c((wi[f]&&wi[f].get||l)(e,f,p,d))})},quickSetter:function(e,n,a){if(e=Ki(e),e.length>1){var o=e.map(function(g){return _i.quickSetter(g,n,a)}),l=o.length;return function(g){for(var v=l;v--;)o[v](g)}}e=e[0]||{};var c=wi[n],f=Is(e),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(g){var v=new c;Xo._pt=0,v.init(e,a?g+a:g,Xo,0,[e]),v.render(1,v),Xo._pt&&h0(1,Xo)}:f.set(e,p);return c?d:function(g){return d(e,p,a?g+a:g,f,1)}},quickTo:function(e,n,a){var o,l=_i.to(e,zi((o={},o[n]="+=0.1",o.paused=!0,o.stagger=0,o),a||{})),c=function(p,d,g){return l.resetTo(n,p,d,g)};return c.tween=l,c},isTweening:function(e){return ln.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Hs(e.ease,Ko.ease)),xx(Ko,e||{})},config:function(e){return xx(Oi,e||{})},registerEffect:function(e){var n=e.name,a=e.effect,o=e.plugins,l=e.defaults,c=e.extendTimeline;(o||"").split(",").forEach(function(f){return f&&!wi[f]&&!Bi[f]&&Su(n+" effect requires "+f+" plugin.")}),rp[n]=function(f,p,d){return a(Ki(f),zi(p||{},l),d)},c&&(ri.prototype[n]=function(f,p,d){return this.add(rp[n](f,wa(p)?p:(d=p)&&{},this),d)})},registerEase:function(e,n){Rt[e]=Hs(n)},parseEase:function(e,n){return arguments.length?Hs(e,n):Rt},getById:function(e){return ln.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var a=new ri(e),o,l;for(a.smoothChildTiming=di(e.smoothChildTiming),ln.remove(a),a._dp=0,a._time=a._tTime=ln._time,o=ln._first;o;)l=o._next,(n||!(!o._dur&&o instanceof bn&&o.vars.onComplete===o._targets[0]))&&Ea(a,o,o._start-o._delay),o=l;return Ea(ln,a,0),a},context:function(e,n){return e?new yM(e,n):sn},matchMedia:function(e){return new T1(e)},matchMediaRefresh:function(){return Gs.forEach(function(e){var n=e.conditions,a,o;for(o in n)n[o]&&(n[o]=!1,a=1);a&&e.revert()})||tm()},addEventListener:function(e,n){var a=Ef[e]||(Ef[e]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(e,n){var a=Ef[e],o=a&&a.indexOf(n);o>=0&&a.splice(o,1)},utils:{wrap:n1,wrapYoyo:i1,distribute:tM,random:iM,snap:nM,normalize:t1,getUnit:Kn,clamp:QT,splitColor:lM,toArray:Ki,selector:Jp,mapRange:rM,pipe:$T,unitize:e1,interpolate:a1,shuffle:eM},install:VS,effects:rp,ticker:Di,updateRoot:ri.updateRoot,plugins:wi,globalTimeline:ln,core:{PropTween:mi,globals:kS,Tween:bn,Timeline:ri,Animation:Tu,getCache:Is,_removeLinkedListItem:Vf,reverting:function(){return Wn},context:function(e){return e&&sn&&(sn.data.push(e),e._ctx=sn),sn},suppressOverwrites:function(e){return $m=e}}};pi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Of[r]=bn[r]});Di.add(ri.updateRoot);Xo=Of.to({},{duration:0});var b1=function(e,n){for(var a=e._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},A1=function(e,n){var a=e._targets,o,l,c;for(o in n)for(l=a.length;l--;)c=e._ptLookup[l][o],c&&(c=c.d)&&(c._pt&&(c=b1(c,o)),c&&c.modifier&&c.modifier(n[o],e,a[l],o))},cp=function(e,n){return{name:e,headless:1,rawVars:1,init:function(o,l,c){c._onInit=function(f){var p,d;if(In(l)&&(p={},pi(l,function(g){return p[g]=1}),l=p),n){p={};for(d in l)p[d]=n(l[d]);l=p}A1(f,l)}}}},_i=Of.registerPlugin({name:"attr",init:function(e,n,a,o,l){var c,f,p;this.tween=a;for(c in n)p=e.getAttribute(c)||"",f=this.add(e,"setAttribute",(p||0)+"",n[c],o,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(e,n){for(var a=n._pt;a;)Wn?a.set(a.t,a.p,a.b,a):a.r(e,a.d),a=a._next}},{name:"endArray",headless:1,init:function(e,n){for(var a=n.length;a--;)this.add(e,a,e[a]||0,n[a],0,0,0,0,0,1)}},cp("roundProps",$p),cp("modifiers"),cp("snap",nM))||Of;bn.version=ri.version=_i.version="3.14.2";GS=1;t0()&&el();Rt.Power0;Rt.Power1;Rt.Power2;Rt.Power3;Rt.Power4;Rt.Linear;Rt.Quad;Rt.Cubic;Rt.Quart;Rt.Quint;Rt.Strong;Rt.Elastic;Rt.Back;Rt.SteppedEase;Rt.Bounce;Rt.Sine;Rt.Expo;Rt.Circ;var bx,qr,Yo,d0,Bs,Ax,p0,R1=function(){return typeof window<"u"},or={},Ls=180/Math.PI,qo=Math.PI/180,Ro=Math.atan2,Rx=1e8,m0=/([A-Z])/g,C1=/(left|right|width|margin|padding|x)/i,w1=/[\s,\(]\S/,ba={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nm=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},D1=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},U1=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},L1=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},N1=function(e,n){var a=n.s+n.c*e;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},EM=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},TM=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},O1=function(e,n,a){return e.style[n]=a},P1=function(e,n,a){return e.style.setProperty(n,a)},B1=function(e,n,a){return e._gsap[n]=a},z1=function(e,n,a){return e._gsap.scaleX=e._gsap.scaleY=a},I1=function(e,n,a,o,l){var c=e._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},F1=function(e,n,a,o,l){var c=e._gsap;c[n]=a,c.renderTransform(l,c)},un="transform",gi=un+"Origin",H1=function r(e,n){var a=this,o=this.target,l=o.style,c=o._gsap;if(e in or&&l){if(this.tfm=this.tfm||{},e!=="transform")e=ba[e]||e,~e.indexOf(",")?e.split(",").forEach(function(f){return a.tfm[f]=nr(o,f)}):this.tfm[e]=c.x?c[e]:nr(o,e),e===gi&&(this.tfm.zOrigin=c.zOrigin);else return ba.transform.split(",").forEach(function(f){return r.call(a,f,n)});if(this.props.indexOf(un)>=0)return;c.svg&&(this.svgo=o.getAttribute("data-svg-origin"),this.props.push(gi,n,"")),e=un}(l||n)&&this.props.push(e,n,l[e])},bM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},G1=function(){var e=this.props,n=this.target,a=n.style,o=n._gsap,l,c;for(l=0;l<e.length;l+=3)e[l+1]?e[l+1]===2?n[e[l]](e[l+2]):n[e[l]]=e[l+2]:e[l+2]?a[e[l]]=e[l+2]:a.removeProperty(e[l].substr(0,2)==="--"?e[l]:e[l].replace(m0,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)o[c]=this.tfm[c];o.svg&&(o.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=p0(),(!l||!l.isStart)&&!a[un]&&(bM(a),o.zOrigin&&a[gi]&&(a[gi]+=" "+o.zOrigin+"px",o.zOrigin=0,o.renderTransform()),o.uncache=1)}},AM=function(e,n){var a={target:e,props:[],revert:G1,save:H1};return e._gsap||_i.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(o){return a.save(o)}),a},RM,im=function(e,n){var a=qr.createElementNS?qr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qr.createElement(e);return a&&a.style?a:qr.createElement(e)},Ni=function r(e,n,a){var o=getComputedStyle(e);return o[n]||o.getPropertyValue(n.replace(m0,"-$1").toLowerCase())||o.getPropertyValue(n)||!a&&r(e,tl(n)||n,1)||""},Cx="O,Moz,ms,Ms,Webkit".split(","),tl=function(e,n,a){var o=n||Bs,l=o.style,c=5;if(e in l&&!a)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);c--&&!(Cx[c]+e in l););return c<0?null:(c===3?"ms":c>=0?Cx[c]:"")+e},am=function(){R1()&&window.document&&(bx=window,qr=bx.document,Yo=qr.documentElement,Bs=im("div")||{style:{}},im("div"),un=tl(un),gi=un+"Origin",Bs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",RM=!!tl("perspective"),p0=_i.core.reverting,d0=1)},wx=function(e){var n=e.ownerSVGElement,a=im("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),o=e.cloneNode(!0),l;o.style.display="block",a.appendChild(o),Yo.appendChild(a);try{l=o.getBBox()}catch{}return a.removeChild(o),Yo.removeChild(a),l},Dx=function(e,n){for(var a=n.length;a--;)if(e.hasAttribute(n[a]))return e.getAttribute(n[a])},CM=function(e){var n,a;try{n=e.getBBox()}catch{n=wx(e),a=1}return n&&(n.width||n.height)||a||(n=wx(e)),n&&!n.width&&!n.x&&!n.y?{x:+Dx(e,["x","cx","x1"])||0,y:+Dx(e,["y","cy","y1"])||0,width:0,height:0}:n},wM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&CM(e))},ts=function(e,n){if(n){var a=e.style,o;n in or&&n!==gi&&(n=un),a.removeProperty?(o=n.substr(0,2),(o==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(o==="--"?n:n.replace(m0,"-$1").toLowerCase())):a.removeAttribute(n)}},jr=function(e,n,a,o,l,c){var f=new mi(e._pt,n,a,0,1,c?TM:EM);return e._pt=f,f.b=o,f.e=l,e._props.push(a),f},Ux={deg:1,rad:1,turn:1},V1={grid:1,flex:1},ns=function r(e,n,a,o){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=Bs.style,p=C1.test(n),d=e.tagName.toLowerCase()==="svg",g=(d?"client":"offset")+(p?"Width":"Height"),v=100,_=o==="px",x=o==="%",y,T,S,M;if(o===c||!l||Ux[o]||Ux[c])return l;if(c!=="px"&&!_&&(l=r(e,n,a,"px")),M=e.getCTM&&wM(e),(x||c==="%")&&(or[n]||~n.indexOf("adius")))return y=M?e.getBBox()[p?"width":"height"]:e[g],gn(x?l/y*v:l/100*y);if(f[p?"width":"height"]=v+(_?c:o),T=o!=="rem"&&~n.indexOf("adius")||o==="em"&&e.appendChild&&!d?e:e.parentNode,M&&(T=(e.ownerSVGElement||{}).parentNode),(!T||T===qr||!T.appendChild)&&(T=qr.body),S=T._gsap,S&&x&&S.width&&p&&S.time===Di.time&&!S.uncache)return gn(l/S.width*v);if(x&&(n==="height"||n==="width")){var R=e.style[n];e.style[n]=v+o,y=e[g],R?e.style[n]=R:ts(e,n)}else(x||c==="%")&&!V1[Ni(T,"display")]&&(f.position=Ni(e,"position")),T===e&&(f.position="static"),T.appendChild(Bs),y=Bs[g],T.removeChild(Bs),f.position="absolute";return p&&x&&(S=Is(T),S.time=Di.time,S.width=T[g]),gn(_?y*l/v:y&&l?v/y*l:0)},nr=function(e,n,a,o){var l;return d0||am(),n in ba&&n!=="transform"&&(n=ba[n],~n.indexOf(",")&&(n=n.split(",")[0])),or[n]&&n!=="transform"?(l=Au(e,o),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:Bf(Ni(e,gi))+" "+l.zOrigin+"px"):(l=e.style[n],(!l||l==="auto"||o||~(l+"").indexOf("calc("))&&(l=Pf[n]&&Pf[n](e,n,a)||Ni(e,n)||WS(e,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?ns(e,n,l,a)+a:l},k1=function(e,n,a,o){if(!a||a==="none"){var l=tl(n,e,1),c=l&&Ni(e,l,1);c&&c!==a?(n=l,a=c):n==="borderColor"&&(a=Ni(e,"borderTopColor"))}var f=new mi(this._pt,e.style,n,0,1,SM),p=0,d=0,g,v,_,x,y,T,S,M,R,D,C,N;if(f.b=a,f.e=o,a+="",o+="",o.substring(0,6)==="var(--"&&(o=Ni(e,o.substring(4,o.indexOf(")")))),o==="auto"&&(T=e.style[n],e.style[n]=o,o=Ni(e,n)||o,T?e.style[n]=T:ts(e,n)),g=[a,o],cM(g),a=g[0],o=g[1],_=a.match(ko)||[],N=o.match(ko)||[],N.length){for(;v=ko.exec(o);)S=v[0],R=o.substring(p,v.index),y?y=(y+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(y=1),S!==(T=_[d++]||"")&&(x=parseFloat(T)||0,C=T.substr((x+"").length),S.charAt(1)==="="&&(S=Wo(x,S)+C),M=parseFloat(S),D=S.substr((M+"").length),p=ko.lastIndex-D.length,D||(D=D||Oi.units[n]||C,p===o.length&&(o+=D,f.e+=D)),C!==D&&(x=ns(e,n,T,D)||0),f._pt={_next:f._pt,p:R||d===1?R:",",s:x,c:M-x,m:y&&y<4||n==="zIndex"?Math.round:0});f.c=p<o.length?o.substring(p,o.length):""}else f.r=n==="display"&&o==="none"?TM:EM;return HS.test(o)&&(f.e=0),this._pt=f,f},Lx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},X1=function(e){var n=e.split(" "),a=n[0],o=n[1]||"50%";return(a==="top"||a==="bottom"||o==="left"||o==="right")&&(e=a,a=o,o=e),n[0]=Lx[a]||a,n[1]=Lx[o]||o,n.join(" ")},W1=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,o=a.style,l=n.u,c=a._gsap,f,p,d;if(l==="all"||l===!0)o.cssText="",p=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],or[f]&&(p=1,f=f==="transformOrigin"?gi:un),ts(a,f);p&&(ts(a,un),c&&(c.svg&&a.removeAttribute("transform"),o.scale=o.rotate=o.translate="none",Au(a,1),c.uncache=1,bM(o)))}},Pf={clearProps:function(e,n,a,o,l){if(l.data!=="isFromStart"){var c=e._pt=new mi(e._pt,n,a,0,0,W1);return c.u=o,c.pr=-10,c.tween=l,e._props.push(a),1}}},bu=[1,0,0,1,0,0],DM={},UM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Nx=function(e){var n=Ni(e,un);return UM(n)?bu:n.substr(7).match(FS).map(gn)},g0=function(e,n){var a=e._gsap||Is(e),o=e.style,l=Nx(e),c,f,p,d;return a.svg&&e.getAttribute("transform")?(p=e.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?bu:l):(l===bu&&!e.offsetParent&&e!==Yo&&!a.svg&&(p=o.display,o.display="block",c=e.parentNode,(!c||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,f=e.nextElementSibling,Yo.appendChild(e)),l=Nx(e),p?o.display=p:ts(e,"display"),d&&(f?c.insertBefore(e,f):c?c.appendChild(e):Yo.removeChild(e))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},rm=function(e,n,a,o,l,c){var f=e._gsap,p=l||g0(e,!0),d=f.xOrigin||0,g=f.yOrigin||0,v=f.xOffset||0,_=f.yOffset||0,x=p[0],y=p[1],T=p[2],S=p[3],M=p[4],R=p[5],D=n.split(" "),C=parseFloat(D[0])||0,N=parseFloat(D[1])||0,P,O,A,w;a?p!==bu&&(O=x*S-y*T)&&(A=C*(S/O)+N*(-T/O)+(T*R-S*M)/O,w=C*(-y/O)+N*(x/O)-(x*R-y*M)/O,C=A,N=w):(P=CM(e),C=P.x+(~D[0].indexOf("%")?C/100*P.width:C),N=P.y+(~(D[1]||D[0]).indexOf("%")?N/100*P.height:N)),o||o!==!1&&f.smooth?(M=C-d,R=N-g,f.xOffset=v+(M*x+R*T)-M,f.yOffset=_+(M*y+R*S)-R):f.xOffset=f.yOffset=0,f.xOrigin=C,f.yOrigin=N,f.smooth=!!o,f.origin=n,f.originIsAbsolute=!!a,e.style[gi]="0px 0px",c&&(jr(c,f,"xOrigin",d,C),jr(c,f,"yOrigin",g,N),jr(c,f,"xOffset",v,f.xOffset),jr(c,f,"yOffset",_,f.yOffset)),e.setAttribute("data-svg-origin",C+" "+N)},Au=function(e,n){var a=e._gsap||new pM(e);if("x"in a&&!n&&!a.uncache)return a;var o=e.style,l=a.scaleX<0,c="px",f="deg",p=getComputedStyle(e),d=Ni(e,gi)||"0",g,v,_,x,y,T,S,M,R,D,C,N,P,O,A,w,J,H,q,K,ee,Z,B,F,se,fe,Se,I,j,ge,Ee,Ue;return g=v=_=T=S=M=R=D=C=0,x=y=1,a.svg=!!(e.getCTM&&wM(e)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(o[un]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[un]!=="none"?p[un]:"")),o.scale=o.rotate=o.translate="none"),O=g0(e,a.svg),a.svg&&(a.uncache?(se=e.getBBox(),d=a.xOrigin-se.x+"px "+(a.yOrigin-se.y)+"px",F=""):F=!n&&e.getAttribute("data-svg-origin"),rm(e,F||d,!!F||a.originIsAbsolute,a.smooth!==!1,O)),N=a.xOrigin||0,P=a.yOrigin||0,O!==bu&&(H=O[0],q=O[1],K=O[2],ee=O[3],g=Z=O[4],v=B=O[5],O.length===6?(x=Math.sqrt(H*H+q*q),y=Math.sqrt(ee*ee+K*K),T=H||q?Ro(q,H)*Ls:0,R=K||ee?Ro(K,ee)*Ls+T:0,R&&(y*=Math.abs(Math.cos(R*qo))),a.svg&&(g-=N-(N*H+P*K),v-=P-(N*q+P*ee))):(Ue=O[6],ge=O[7],Se=O[8],I=O[9],j=O[10],Ee=O[11],g=O[12],v=O[13],_=O[14],A=Ro(Ue,j),S=A*Ls,A&&(w=Math.cos(-A),J=Math.sin(-A),F=Z*w+Se*J,se=B*w+I*J,fe=Ue*w+j*J,Se=Z*-J+Se*w,I=B*-J+I*w,j=Ue*-J+j*w,Ee=ge*-J+Ee*w,Z=F,B=se,Ue=fe),A=Ro(-K,j),M=A*Ls,A&&(w=Math.cos(-A),J=Math.sin(-A),F=H*w-Se*J,se=q*w-I*J,fe=K*w-j*J,Ee=ee*J+Ee*w,H=F,q=se,K=fe),A=Ro(q,H),T=A*Ls,A&&(w=Math.cos(A),J=Math.sin(A),F=H*w+q*J,se=Z*w+B*J,q=q*w-H*J,B=B*w-Z*J,H=F,Z=se),S&&Math.abs(S)+Math.abs(T)>359.9&&(S=T=0,M=180-M),x=gn(Math.sqrt(H*H+q*q+K*K)),y=gn(Math.sqrt(B*B+Ue*Ue)),A=Ro(Z,B),R=Math.abs(A)>2e-4?A*Ls:0,C=Ee?1/(Ee<0?-Ee:Ee):0),a.svg&&(F=e.getAttribute("transform"),a.forceCSS=e.setAttribute("transform","")||!UM(Ni(e,un)),F&&e.setAttribute("transform",F))),Math.abs(R)>90&&Math.abs(R)<270&&(l?(x*=-1,R+=T<=0?180:-180,T+=T<=0?180:-180):(y*=-1,R+=R<=0?180:-180)),n=n||a.uncache,a.x=g-((a.xPercent=g&&(!n&&a.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-g)?-50:0)))?e.offsetWidth*a.xPercent/100:0)+c,a.y=v-((a.yPercent=v&&(!n&&a.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-v)?-50:0)))?e.offsetHeight*a.yPercent/100:0)+c,a.z=_+c,a.scaleX=gn(x),a.scaleY=gn(y),a.rotation=gn(T)+f,a.rotationX=gn(S)+f,a.rotationY=gn(M)+f,a.skewX=R+f,a.skewY=D+f,a.transformPerspective=C+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(o[gi]=Bf(d)),a.xOffset=a.yOffset=0,a.force3D=Oi.force3D,a.renderTransform=a.svg?q1:RM?LM:Y1,a.uncache=0,a},Bf=function(e){return(e=e.split(" "))[0]+" "+e[1]},fp=function(e,n,a){var o=Kn(n);return gn(parseFloat(n)+parseFloat(ns(e,"x",a+"px",o)))+o},Y1=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,LM(e,n)},Es="0deg",iu="0px",Ts=") ",LM=function(e,n){var a=n||this,o=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,g=a.rotationY,v=a.rotationX,_=a.skewX,x=a.skewY,y=a.scaleX,T=a.scaleY,S=a.transformPerspective,M=a.force3D,R=a.target,D=a.zOrigin,C="",N=M==="auto"&&e&&e!==1||M===!0;if(D&&(v!==Es||g!==Es)){var P=parseFloat(g)*qo,O=Math.sin(P),A=Math.cos(P),w;P=parseFloat(v)*qo,w=Math.cos(P),c=fp(R,c,O*w*-D),f=fp(R,f,-Math.sin(P)*-D),p=fp(R,p,A*w*-D+D)}S!==iu&&(C+="perspective("+S+Ts),(o||l)&&(C+="translate("+o+"%, "+l+"%) "),(N||c!==iu||f!==iu||p!==iu)&&(C+=p!==iu||N?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+Ts),d!==Es&&(C+="rotate("+d+Ts),g!==Es&&(C+="rotateY("+g+Ts),v!==Es&&(C+="rotateX("+v+Ts),(_!==Es||x!==Es)&&(C+="skew("+_+", "+x+Ts),(y!==1||T!==1)&&(C+="scale("+y+", "+T+Ts),R.style[un]=C||"translate(0, 0)"},q1=function(e,n){var a=n||this,o=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,g=a.skewY,v=a.scaleX,_=a.scaleY,x=a.target,y=a.xOrigin,T=a.yOrigin,S=a.xOffset,M=a.yOffset,R=a.forceCSS,D=parseFloat(c),C=parseFloat(f),N,P,O,A,w;p=parseFloat(p),d=parseFloat(d),g=parseFloat(g),g&&(g=parseFloat(g),d+=g,p+=g),p||d?(p*=qo,d*=qo,N=Math.cos(p)*v,P=Math.sin(p)*v,O=Math.sin(p-d)*-_,A=Math.cos(p-d)*_,d&&(g*=qo,w=Math.tan(d-g),w=Math.sqrt(1+w*w),O*=w,A*=w,g&&(w=Math.tan(g),w=Math.sqrt(1+w*w),N*=w,P*=w)),N=gn(N),P=gn(P),O=gn(O),A=gn(A)):(N=v,A=_,P=O=0),(D&&!~(c+"").indexOf("px")||C&&!~(f+"").indexOf("px"))&&(D=ns(x,"x",c,"px"),C=ns(x,"y",f,"px")),(y||T||S||M)&&(D=gn(D+y-(y*N+T*O)+S),C=gn(C+T-(y*P+T*A)+M)),(o||l)&&(w=x.getBBox(),D=gn(D+o/100*w.width),C=gn(C+l/100*w.height)),w="matrix("+N+","+P+","+O+","+A+","+D+","+C+")",x.setAttribute("transform",w),R&&(x.style[un]=w)},j1=function(e,n,a,o,l){var c=360,f=In(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?Ls:1),d=p-o,g=o+d+"deg",v,_;return f&&(v=l.split("_")[1],v==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),v==="cw"&&d<0?d=(d+c*Rx)%c-~~(d/c)*c:v==="ccw"&&d>0&&(d=(d-c*Rx)%c-~~(d/c)*c)),e._pt=_=new mi(e._pt,n,a,o,d,D1),_.e=g,_.u="deg",e._props.push(a),_},Ox=function(e,n){for(var a in n)e[a]=n[a];return e},Z1=function(e,n,a){var o=Ox({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,g,v,_,x,y;o.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[un]=n,f=Au(a,1),ts(a,un),a.setAttribute("transform",d)):(d=getComputedStyle(a)[un],c[un]=n,f=Au(a,1),c[un]=d);for(p in or)d=o[p],g=f[p],d!==g&&l.indexOf(p)<0&&(x=Kn(d),y=Kn(g),v=x!==y?ns(a,p,d,y):parseFloat(d),_=parseFloat(g),e._pt=new mi(e._pt,f,p,v,_-v,nm),e._pt.u=y||0,e._props.push(p));Ox(f,o)};pi("padding,margin,Width,Radius",function(r,e){var n="Top",a="Right",o="Bottom",l="Left",c=(e<3?[n,a,o,l]:[n+l,n+a,o+a,o+l]).map(function(f){return e<2?r+f:"border"+f+r});Pf[e>1?"border"+r:r]=function(f,p,d,g,v){var _,x;if(arguments.length<4)return _=c.map(function(y){return nr(f,y,d)}),x=_.join(" "),x.split(_[0]).length===5?_[0]:x;_=(g+"").split(" "),x={},c.forEach(function(y,T){return x[y]=_[T]=_[T]||_[(T-1)/2|0]}),f.init(p,x,v)}});var NM={name:"css",register:am,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,a,o,l){var c=this._props,f=e.style,p=a.vars.startAt,d,g,v,_,x,y,T,S,M,R,D,C,N,P,O,A,w;d0||am(),this.styles=this.styles||AM(e),A=this.styles.props,this.tween=a;for(T in n)if(T!=="autoRound"&&(g=n[T],!(wi[T]&&mM(T,n,a,o,e,l)))){if(x=typeof g,y=Pf[T],x==="function"&&(g=g.call(a,o,e,l),x=typeof g),x==="string"&&~g.indexOf("random(")&&(g=yu(g)),y)y(this,e,T,g,a)&&(O=1);else if(T.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(T)+"").trim(),g+="",Jr.lastIndex=0,Jr.test(d)||(S=Kn(d),M=Kn(g),M?S!==M&&(d=ns(e,T,d,M)+M):S&&(g+=S)),this.add(f,"setProperty",d,g,o,l,0,0,T),c.push(T),A.push(T,0,f[T]);else if(x!=="undefined"){if(p&&T in p?(d=typeof p[T]=="function"?p[T].call(a,o,e,l):p[T],In(d)&&~d.indexOf("random(")&&(d=yu(d)),Kn(d+"")||d==="auto"||(d+=Oi.units[T]||Kn(nr(e,T))||""),(d+"").charAt(1)==="="&&(d=nr(e,T))):d=nr(e,T),_=parseFloat(d),R=x==="string"&&g.charAt(1)==="="&&g.substr(0,2),R&&(g=g.substr(2)),v=parseFloat(g),T in ba&&(T==="autoAlpha"&&(_===1&&nr(e,"visibility")==="hidden"&&v&&(_=0),A.push("visibility",0,f.visibility),jr(this,f,"visibility",_?"inherit":"hidden",v?"inherit":"hidden",!v)),T!=="scale"&&T!=="transform"&&(T=ba[T],~T.indexOf(",")&&(T=T.split(",")[0]))),D=T in or,D){if(this.styles.save(T),w=g,x==="string"&&g.substring(0,6)==="var(--"){if(g=Ni(e,g.substring(4,g.indexOf(")"))),g.substring(0,5)==="calc("){var J=e.style.perspective;e.style.perspective=g,g=Ni(e,"perspective"),J?e.style.perspective=J:ts(e,"perspective")}v=parseFloat(g)}if(C||(N=e._gsap,N.renderTransform&&!n.parseTransform||Au(e,n.parseTransform),P=n.smoothOrigin!==!1&&N.smooth,C=this._pt=new mi(this._pt,f,un,0,1,N.renderTransform,N,0,-1),C.dep=1),T==="scale")this._pt=new mi(this._pt,N,"scaleY",N.scaleY,(R?Wo(N.scaleY,R+v):v)-N.scaleY||0,nm),this._pt.u=0,c.push("scaleY",T),T+="X";else if(T==="transformOrigin"){A.push(gi,0,f[gi]),g=X1(g),N.svg?rm(e,g,0,P,0,this):(M=parseFloat(g.split(" ")[2])||0,M!==N.zOrigin&&jr(this,N,"zOrigin",N.zOrigin,M),jr(this,f,T,Bf(d),Bf(g)));continue}else if(T==="svgOrigin"){rm(e,g,1,P,0,this);continue}else if(T in DM){j1(this,N,T,_,R?Wo(_,R+g):g);continue}else if(T==="smoothOrigin"){jr(this,N,"smooth",N.smooth,g);continue}else if(T==="force3D"){N[T]=g;continue}else if(T==="transform"){Z1(this,g,e);continue}}else T in f||(T=tl(T)||T);if(D||(v||v===0)&&(_||_===0)&&!w1.test(g)&&T in f)S=(d+"").substr((_+"").length),v||(v=0),M=Kn(g)||(T in Oi.units?Oi.units[T]:S),S!==M&&(_=ns(e,T,d,M)),this._pt=new mi(this._pt,D?N:f,T,_,(R?Wo(_,R+v):v)-_,!D&&(M==="px"||T==="zIndex")&&n.autoRound!==!1?N1:nm),this._pt.u=M||0,D&&w!==g?(this._pt.b=d,this._pt.e=w,this._pt.r=L1):S!==M&&M!=="%"&&(this._pt.b=d,this._pt.r=U1);else if(T in f)k1.call(this,e,T,d,R?R+g:g);else if(T in e)this.add(e,T,d||e[T],R?R+g:g,o,l);else if(T!=="parseTransform"){i0(T,g);continue}D||(T in f?A.push(T,0,f[T]):typeof e[T]=="function"?A.push(T,2,e[T]()):A.push(T,1,d||e[T])),c.push(T)}}O&&MM(this)},render:function(e,n){if(n.tween._time||!p0())for(var a=n._pt;a;)a.r(e,a.d),a=a._next;else n.styles.revert()},get:nr,aliases:ba,getSetter:function(e,n,a){var o=ba[n];return o&&o.indexOf(",")<0&&(n=o),n in or&&n!==gi&&(e._gsap.x||nr(e,"x"))?a&&Ax===a?n==="scale"?z1:B1:(Ax=a||{})&&(n==="scale"?I1:F1):e.style&&!e0(e.style[n])?O1:~n.indexOf("-")?P1:f0(e,n)},core:{_removeProperty:ts,_getMatrix:g0}};_i.utils.checkPrefix=tl;_i.core.getStyleSaver=AM;(function(r,e,n,a){var o=pi(r+","+e+","+n,function(l){or[l]=1});pi(e,function(l){Oi.units[l]="deg",DM[l]=1}),ba[o[13]]=r+","+e,pi(a,function(l){var c=l.split(":");ba[c[1]]=o[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");pi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Oi.units[r]="px"});_i.registerPlugin(NM);var hu=_i.registerPlugin(NM)||_i;hu.core.Tween;const K1=["https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],Q1=.99,J1=({items:r=[],gradientColor:e="black",onRevealComplete:n})=>{const a=gt.useRef(null),o=gt.useRef(null),l=gt.useRef([]),c=gt.useRef([]),f=gt.useRef(typeof window<"u"?window.innerWidth/2:0),p=gt.useRef(0),d=gt.useRef(!1),g=gt.useRef(0),v=gt.useRef(!1),[_,x]=gt.useState(!1),y=28,T=r&&r.length>0?r.slice(0,y):K1.slice(0,y);return gt.useEffect(()=>{hu.ticker.lagSmoothing(0);const S=N=>{N?.clientX!=null&&(f.current=N.clientX),N?.touches?.[0]&&(f.current=N.touches[0].clientX),g.current===0&&(g.current=Date.now()+1600),d.current=!0},M=N=>{f.current=N.clientX,S(N)},R=()=>{const A=[.6,.4,.3,.2],J=g.current>0&&Date.now()>=g.current&&d.current?2500:0;p.current+=(J-p.current)*.014;const H=Math.min(p.current,2500),q=Math.min(H/2500,1);q>=Q1&&!v.current&&(v.current=!0,n?.(),x(!0));const K=8*(1-q);o.current&&(o.current.style.backdropFilter=`blur(${K}px)`,o.current.style.webkitBackdropFilter=`blur(${K}px)`),l.current.forEach((ee,Z)=>{if(ee){const B=Z%2===0?1:-1,F=(f.current/window.innerWidth*300-300/2)*B;hu.to(ee,{x:F-H,duration:.8+A[Z%A.length],ease:"power3.out",overwrite:"auto"})}}),c.current.forEach((ee,Z)=>{if(ee){const B=Z%2===0?1:-1,F=(f.current/window.innerWidth*300-300/2)*B;hu.to(ee,{x:F+H,duration:.8+A[Z%A.length],ease:"power3.out",overwrite:"auto"})}})},D=hu.ticker.add(R),C=N=>S(N);return window.addEventListener("mousemove",M),window.addEventListener("touchmove",C,{passive:!0}),window.addEventListener("click",C),window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("keydown",C),window.addEventListener("scroll",C,{passive:!0}),window.addEventListener("wheel",C,{passive:!0}),()=>{window.removeEventListener("mousemove",M),window.removeEventListener("touchmove",C),window.removeEventListener("click",C),window.removeEventListener("touchstart",C),window.removeEventListener("keydown",C),window.removeEventListener("scroll",C),window.removeEventListener("wheel",C),D()}},[]),At.jsx("div",{className:"grid-motion-overlay noscroll",ref:a,style:{pointerEvents:_?"none":"auto"},children:At.jsxs("section",{className:"intro",children:[At.jsx("div",{className:"grid-motion-blur-layer",ref:o}),At.jsx("div",{className:"gridMotion-container",children:[...Array(4)].map((S,M)=>At.jsxs("div",{className:"row row--split",children:[At.jsx("div",{className:"row__left",ref:R=>l.current[M]=R,children:[0,1,2,3].map(R=>{const D=T[M*7+R];return At.jsx("div",{className:"row__item",children:At.jsx("div",{className:"row__item-inner",style:{backgroundColor:"#111"},children:typeof D=="string"&&D.startsWith("http")?At.jsx("div",{className:"row__item-img",style:{backgroundImage:`url(${D})`}}):At.jsx("div",{className:"row__item-content",children:D})})},R)})}),At.jsx("div",{className:"row__right",ref:R=>c.current[M]=R,children:[4,5,6].map(R=>{const D=T[M*7+R];return At.jsx("div",{className:"row__item",children:At.jsx("div",{className:"row__item-inner",style:{backgroundColor:"#111"},children:typeof D=="string"&&D.startsWith("http")?At.jsx("div",{className:"row__item-img",style:{backgroundImage:`url(${D})`}}):At.jsx("div",{className:"row__item-content",children:D})})},R)})})]},M))}),At.jsx("div",{className:"fullview"})]})})};const Du="183",$1=0,Px=1,eb=2,Tf=1,tb=2,du=3,lr=0,Bn=1,Ui=2,si=0,jo=1,Bx=2,zx=3,Ix=4,nb=5,Os=100,ib=101,ab=102,rb=103,sb=104,ob=200,lb=201,ub=202,cb=203,sm=204,om=205,fb=206,hb=207,db=208,pb=209,mb=210,gb=211,_b=212,vb=213,xb=214,lm=0,zf=1,um=2,nl=3,cm=4,fm=5,hm=6,dm=7,OM=0,Sb=1,Mb=2,ca=0,PM=1,BM=2,zM=3,IM=4,FM=5,HM=6,GM=7,VM=300,Vs=301,il=302,hp=303,dp=304,Wf=306,pm=1e3,ir=1001,mm=1002,Xn=1003,yb=1004,Zc=1005,An=1006,pp=1007,zs=1008,Un=1009,kM=1010,XM=1011,Ru=1012,_0=1013,fa=1014,Aa=1015,ur=1016,v0=1017,x0=1018,al=1020,WM=35902,YM=35899,qM=1021,jM=1022,ua=1023,cr=1026,Zr=1027,ZM=1028,S0=1029,rl=1030,M0=1031,y0=1033,bf=33776,Af=33777,Rf=33778,Cf=33779,gm=35840,_m=35841,vm=35842,xm=35843,Sm=36196,Mm=37492,ym=37496,Em=37488,Tm=37489,bm=37490,Am=37491,Rm=37808,Cm=37809,wm=37810,Dm=37811,Um=37812,Lm=37813,Nm=37814,Om=37815,Pm=37816,Bm=37817,zm=37818,Im=37819,Fm=37820,Hm=37821,Gm=36492,Vm=36494,km=36495,Xm=36283,Wm=36284,Ym=36285,qm=36286,Uu=3200,Eb=0,Tb=1,Ta="",Wt="srgb",is="srgb-linear",If="linear",Xt="srgb",Co=7680,Fx=519,bb=512,Ab=513,Rb=514,E0=515,Cb=516,wb=517,T0=518,Db=519,Hx=35044,Gx="300 es",Ra=2e3,Ff=2001;function Ub(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Hf(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Lb(){const r=Hf("canvas");return r.style.display="block",r}const Vx={};function kx(...r){const e="THREE."+r.shift();console.log(e,...r)}function KM(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function st(...r){r=KM(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function Pt(...r){r=KM(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function Gf(...r){const e=r.join(" ");e in Vx||(Vx[e]=!0,st(...r))}function Nb(r,e,n){return new Promise(function(a,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const Ob={[lm]:zf,[um]:hm,[cm]:dm,[nl]:fm,[zf]:lm,[hm]:um,[dm]:cm,[fm]:nl};class hr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xx=1234567;const vu=Math.PI/180,Cu=180/Math.PI;function ll(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[n&63|128]+jn[n>>8&255]+"-"+jn[n>>16&255]+jn[n>>24&255]+jn[a&255]+jn[a>>8&255]+jn[a>>16&255]+jn[a>>24&255]).toLowerCase()}function Et(r,e,n){return Math.max(e,Math.min(n,r))}function b0(r,e){return(r%e+e)%e}function Pb(r,e,n,a,o){return a+(r-e)*(o-a)/(n-e)}function Bb(r,e,n){return r!==e?(n-r)/(e-r):0}function xu(r,e,n){return(1-n)*r+n*e}function zb(r,e,n,a){return xu(r,e,1-Math.exp(-n*a))}function Ib(r,e=1){return e-Math.abs(b0(r,e*2)-e)}function Fb(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*(3-2*r))}function Hb(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*r*(r*(r*6-15)+10))}function Gb(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Vb(r,e){return r+Math.random()*(e-r)}function kb(r){return r*(.5-Math.random())}function Xb(r){r!==void 0&&(Xx=r);let e=Xx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wb(r){return r*vu}function Yb(r){return r*Cu}function qb(r){return(r&r-1)===0&&r!==0}function jb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Zb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Kb(r,e,n,a,o){const l=Math.cos,c=Math.sin,f=l(n/2),p=c(n/2),d=l((e+a)/2),g=c((e+a)/2),v=l((e-a)/2),_=c((e-a)/2),x=l((a-e)/2),y=c((a-e)/2);switch(o){case"XYX":r.set(f*g,p*v,p*_,f*d);break;case"YZY":r.set(p*_,f*g,p*v,f*d);break;case"ZXZ":r.set(p*v,p*_,f*g,f*d);break;case"XZX":r.set(f*g,p*y,p*x,f*d);break;case"YXY":r.set(p*x,f*g,p*y,f*d);break;case"ZYZ":r.set(p*y,p*x,f*g,f*d);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Vo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ii(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const bs={DEG2RAD:vu,RAD2DEG:Cu,generateUUID:ll,clamp:Et,euclideanModulo:b0,mapLinear:Pb,inverseLerp:Bb,lerp:xu,damp:zb,pingpong:Ib,smoothstep:Fb,smootherstep:Hb,randInt:Gb,randFloat:Vb,randFloatSpread:kb,seededRandom:Xb,degToRad:Wb,radToDeg:Yb,isPowerOfTwo:qb,ceilPowerOfTwo:jb,floorPowerOfTwo:Zb,setQuaternionFromProperEuler:Kb,normalize:ii,denormalize:Vo};class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Et(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Et(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*a-c*o+e.x,this.y=l*o+c*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ul{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,l,c,f){let p=a[o+0],d=a[o+1],g=a[o+2],v=a[o+3],_=l[c+0],x=l[c+1],y=l[c+2],T=l[c+3];if(v!==T||p!==_||d!==x||g!==y){let S=p*_+d*x+g*y+v*T;S<0&&(_=-_,x=-x,y=-y,T=-T,S=-S);let M=1-f;if(S<.9995){const R=Math.acos(S),D=Math.sin(R);M=Math.sin(M*R)/D,f=Math.sin(f*R)/D,p=p*M+_*f,d=d*M+x*f,g=g*M+y*f,v=v*M+T*f}else{p=p*M+_*f,d=d*M+x*f,g=g*M+y*f,v=v*M+T*f;const R=1/Math.sqrt(p*p+d*d+g*g+v*v);p*=R,d*=R,g*=R,v*=R}}e[n]=p,e[n+1]=d,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,a,o,l,c){const f=a[o],p=a[o+1],d=a[o+2],g=a[o+3],v=l[c],_=l[c+1],x=l[c+2],y=l[c+3];return e[n]=f*y+g*v+p*x-d*_,e[n+1]=p*y+g*_+d*v-f*x,e[n+2]=d*y+g*x+f*_-p*v,e[n+3]=g*y-f*v-p*_-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,p=Math.sin,d=f(a/2),g=f(o/2),v=f(l/2),_=p(a/2),x=p(o/2),y=p(l/2);switch(c){case"XYZ":this._x=_*g*v+d*x*y,this._y=d*x*v-_*g*y,this._z=d*g*y+_*x*v,this._w=d*g*v-_*x*y;break;case"YXZ":this._x=_*g*v+d*x*y,this._y=d*x*v-_*g*y,this._z=d*g*y-_*x*v,this._w=d*g*v+_*x*y;break;case"ZXY":this._x=_*g*v-d*x*y,this._y=d*x*v+_*g*y,this._z=d*g*y+_*x*v,this._w=d*g*v-_*x*y;break;case"ZYX":this._x=_*g*v-d*x*y,this._y=d*x*v+_*g*y,this._z=d*g*y-_*x*v,this._w=d*g*v+_*x*y;break;case"YZX":this._x=_*g*v+d*x*y,this._y=d*x*v+_*g*y,this._z=d*g*y-_*x*v,this._w=d*g*v-_*x*y;break;case"XZY":this._x=_*g*v-d*x*y,this._y=d*x*v-_*g*y,this._z=d*g*y+_*x*v,this._w=d*g*v+_*x*y;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],l=n[8],c=n[1],f=n[5],p=n[9],d=n[2],g=n[6],v=n[10],_=a+f+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-p)*x,this._y=(l-d)*x,this._z=(c-o)*x}else if(a>f&&a>v){const x=2*Math.sqrt(1+a-f-v);this._w=(g-p)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(l+d)/x}else if(f>v){const x=2*Math.sqrt(1+f-a-v);this._w=(l-d)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+v-a-f);this._w=(c-o)/x,this._x=(l+d)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,l=e._z,c=e._w,f=n._x,p=n._y,d=n._z,g=n._w;return this._x=a*g+c*f+o*d-l*p,this._y=o*g+c*p+l*f-a*d,this._z=l*g+c*d+a*p-o*f,this._w=c*g-a*f-o*p-l*d,this._onChangeCallback(),this}slerp(e,n){let a=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(a=-a,o=-o,l=-l,c=-c,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),g=Math.sin(d);p=Math.sin(p*d)/g,n=Math.sin(n*d)/g,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,n=0,a=0){oe.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*a+l[6]*o,this.y=l[1]*n+l[4]*a+l[7]*o,this.z=l[2]*n+l[5]*a+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,l=e.elements,c=1/(l[3]*n+l[7]*a+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*o+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*o+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*o+l[14])*c,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,l=e.x,c=e.y,f=e.z,p=e.w,d=2*(c*o-f*a),g=2*(f*n-l*o),v=2*(l*a-c*n);return this.x=n+p*d+c*v-f*g,this.y=a+p*g+f*d-l*v,this.z=o+p*v+l*g-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*a+l[8]*o,this.y=l[1]*n+l[5]*a+l[9]*o,this.z=l[2]*n+l[6]*a+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Et(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,l=e.z,c=n.x,f=n.y,p=n.z;return this.x=o*p-l*f,this.y=l*c-a*p,this.z=a*f-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return mp.copy(this).projectOnVector(e),this.sub(mp)}reflect(e){return this.sub(mp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Et(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mp=new oe,Wx=new ul;class ht{constructor(e,n,a,o,l,c,f,p,d){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,l,c,f,p,d)}set(e,n,a,o,l,c,f,p,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=n,g[4]=l,g[5]=p,g[6]=a,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,l=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],g=a[4],v=a[7],_=a[2],x=a[5],y=a[8],T=o[0],S=o[3],M=o[6],R=o[1],D=o[4],C=o[7],N=o[2],P=o[5],O=o[8];return l[0]=c*T+f*R+p*N,l[3]=c*S+f*D+p*P,l[6]=c*M+f*C+p*O,l[1]=d*T+g*R+v*N,l[4]=d*S+g*D+v*P,l[7]=d*M+g*C+v*O,l[2]=_*T+x*R+y*N,l[5]=_*S+x*D+y*P,l[8]=_*M+x*C+y*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],g=e[8];return n*c*g-n*f*d-a*l*g+a*f*p+o*l*d-o*c*p}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],g=e[8],v=g*c-f*d,_=f*p-g*l,x=d*l-c*p,y=n*v+a*_+o*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/y;return e[0]=v*T,e[1]=(o*d-g*a)*T,e[2]=(f*a-o*c)*T,e[3]=_*T,e[4]=(g*n-o*p)*T,e[5]=(o*l-f*n)*T,e[6]=x*T,e[7]=(a*p-d*n)*T,e[8]=(c*n-a*l)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*c+d*f)+c+e,-o*d,o*p,-o*(-d*c+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(gp.makeScale(e,n)),this}rotate(e){return this.premultiply(gp.makeRotation(-e)),this}translate(e,n){return this.premultiply(gp.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gp=new ht,Yx=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qx=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qb(){const r={enabled:!0,workingColorSpace:is,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Xt&&(o.r=ar(o.r),o.g=ar(o.g),o.b=ar(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Xt&&(o.r=Zo(o.r),o.g=Zo(o.g),o.b=Zo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ta?If:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Gf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Gf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[is]:{primaries:e,whitePoint:a,transfer:If,toXYZ:Yx,fromXYZ:qx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:a,transfer:Xt,toXYZ:Yx,fromXYZ:qx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),r}const Dt=Qb();function ar(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let wo;class Jb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{wo===void 0&&(wo=Hf("canvas")),wo.width=e.width,wo.height=e.height;const o=wo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=wo}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hf("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=ar(l[c]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ar(n[a]/255)*255):n[a]=ar(n[a]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $b=0;class A0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(_p(o[c].image)):l.push(_p(o[c]))}else l=_p(o);a.url=l}return n||(e.images[this.uuid]=a),a}}function _p(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let eA=0;const vp=new oe;class Yn extends hr{constructor(e=Yn.DEFAULT_IMAGE,n=Yn.DEFAULT_MAPPING,a=ir,o=ir,l=An,c=zs,f=ua,p=Un,d=Yn.DEFAULT_ANISOTROPY,g=Ta){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eA++}),this.uuid=ll(),this.name="",this.source=new A0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vp).x}get height(){return this.source.getSize(vp).y}get depth(){return this.source.getSize(vp).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==VM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pm:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case mm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pm:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case mm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=VM;Yn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,n=0,a=0,o=1){cn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*o+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*o+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,l;const p=e.elements,d=p[0],g=p[4],v=p[8],_=p[1],x=p[5],y=p[9],T=p[2],S=p[6],M=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(y-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(y+S)<.1&&Math.abs(d+x+M-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(d+1)/2,C=(x+1)/2,N=(M+1)/2,P=(g+_)/4,O=(v+T)/4,A=(y+S)/4;return D>C&&D>N?D<.01?(a=0,o=.707106781,l=.707106781):(a=Math.sqrt(D),o=P/a,l=O/a):C>N?C<.01?(a=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),a=P/o,l=A/o):N<.01?(a=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),a=O/l,o=A/l),this.set(a,o,l,n),this}let R=Math.sqrt((S-y)*(S-y)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(R)<.001&&(R=1),this.x=(S-y)/R,this.y=(v-T)/R,this.z=(_-g)/R,this.w=Math.acos((d+x+M-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this.w=Et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this.w=Et(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Et(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tA extends hr{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new cn(0,0,e,n),this.scissorTest=!1,this.viewport=new cn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:a.depth},l=new Yn(o),c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new A0(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends tA{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class QM extends Yn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nA extends Yn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rn{constructor(e,n,a,o,l,c,f,p,d,g,v,_,x,y,T,S){Rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,l,c,f,p,d,g,v,_,x,y,T,S)}set(e,n,a,o,l,c,f,p,d,g,v,_,x,y,T,S){const M=this.elements;return M[0]=e,M[4]=n,M[8]=a,M[12]=o,M[1]=l,M[5]=c,M[9]=f,M[13]=p,M[2]=d,M[6]=g,M[10]=v,M[14]=_,M[3]=x,M[7]=y,M[11]=T,M[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rn().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,a=e.elements,o=1/Do.setFromMatrixColumn(e,0).length(),l=1/Do.setFromMatrixColumn(e,1).length(),c=1/Do.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,l=e.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(o),d=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=c*g,x=c*v,y=f*g,T=f*v;n[0]=p*g,n[4]=-p*v,n[8]=d,n[1]=x+y*d,n[5]=_-T*d,n[9]=-f*p,n[2]=T-_*d,n[6]=y+x*d,n[10]=c*p}else if(e.order==="YXZ"){const _=p*g,x=p*v,y=d*g,T=d*v;n[0]=_+T*f,n[4]=y*f-x,n[8]=c*d,n[1]=c*v,n[5]=c*g,n[9]=-f,n[2]=x*f-y,n[6]=T+_*f,n[10]=c*p}else if(e.order==="ZXY"){const _=p*g,x=p*v,y=d*g,T=d*v;n[0]=_-T*f,n[4]=-c*v,n[8]=y+x*f,n[1]=x+y*f,n[5]=c*g,n[9]=T-_*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(e.order==="ZYX"){const _=c*g,x=c*v,y=f*g,T=f*v;n[0]=p*g,n[4]=y*d-x,n[8]=_*d+T,n[1]=p*v,n[5]=T*d+_,n[9]=x*d-y,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(e.order==="YZX"){const _=c*p,x=c*d,y=f*p,T=f*d;n[0]=p*g,n[4]=T-_*v,n[8]=y*v+x,n[1]=v,n[5]=c*g,n[9]=-f*g,n[2]=-d*g,n[6]=x*v+y,n[10]=_-T*v}else if(e.order==="XZY"){const _=c*p,x=c*d,y=f*p,T=f*d;n[0]=p*g,n[4]=-v,n[8]=d*g,n[1]=_*v+T,n[5]=c*g,n[9]=x*v-y,n[2]=y*v-x,n[6]=f*g,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iA,e,aA)}lookAt(e,n,a){const o=this.elements;return Ri.subVectors(e,n),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),Fr.crossVectors(a,Ri),Fr.lengthSq()===0&&(Math.abs(a.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),Fr.crossVectors(a,Ri)),Fr.normalize(),Kc.crossVectors(Ri,Fr),o[0]=Fr.x,o[4]=Kc.x,o[8]=Ri.x,o[1]=Fr.y,o[5]=Kc.y,o[9]=Ri.y,o[2]=Fr.z,o[6]=Kc.z,o[10]=Ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,l=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],g=a[1],v=a[5],_=a[9],x=a[13],y=a[2],T=a[6],S=a[10],M=a[14],R=a[3],D=a[7],C=a[11],N=a[15],P=o[0],O=o[4],A=o[8],w=o[12],J=o[1],H=o[5],q=o[9],K=o[13],ee=o[2],Z=o[6],B=o[10],F=o[14],se=o[3],fe=o[7],Se=o[11],I=o[15];return l[0]=c*P+f*J+p*ee+d*se,l[4]=c*O+f*H+p*Z+d*fe,l[8]=c*A+f*q+p*B+d*Se,l[12]=c*w+f*K+p*F+d*I,l[1]=g*P+v*J+_*ee+x*se,l[5]=g*O+v*H+_*Z+x*fe,l[9]=g*A+v*q+_*B+x*Se,l[13]=g*w+v*K+_*F+x*I,l[2]=y*P+T*J+S*ee+M*se,l[6]=y*O+T*H+S*Z+M*fe,l[10]=y*A+T*q+S*B+M*Se,l[14]=y*w+T*K+S*F+M*I,l[3]=R*P+D*J+C*ee+N*se,l[7]=R*O+D*H+C*Z+N*fe,l[11]=R*A+D*q+C*B+N*Se,l[15]=R*w+D*K+C*F+N*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],l=e[12],c=e[1],f=e[5],p=e[9],d=e[13],g=e[2],v=e[6],_=e[10],x=e[14],y=e[3],T=e[7],S=e[11],M=e[15],R=p*x-d*_,D=f*x-d*v,C=f*_-p*v,N=c*x-d*g,P=c*_-p*g,O=c*v-f*g;return n*(T*R-S*D+M*C)-a*(y*R-S*N+M*P)+o*(y*D-T*N+M*O)-l*(y*C-T*P+S*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],g=e[8],v=e[9],_=e[10],x=e[11],y=e[12],T=e[13],S=e[14],M=e[15],R=n*f-a*c,D=n*p-o*c,C=n*d-l*c,N=a*p-o*f,P=a*d-l*f,O=o*d-l*p,A=g*T-v*y,w=g*S-_*y,J=g*M-x*y,H=v*S-_*T,q=v*M-x*T,K=_*M-x*S,ee=R*K-D*q+C*H+N*J-P*w+O*A;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/ee;return e[0]=(f*K-p*q+d*H)*Z,e[1]=(o*q-a*K-l*H)*Z,e[2]=(T*O-S*P+M*N)*Z,e[3]=(_*P-v*O-x*N)*Z,e[4]=(p*J-c*K-d*w)*Z,e[5]=(n*K-o*J+l*w)*Z,e[6]=(S*C-y*O-M*D)*Z,e[7]=(g*O-_*C+x*D)*Z,e[8]=(c*q-f*J+d*A)*Z,e[9]=(a*J-n*q-l*A)*Z,e[10]=(y*P-T*C+M*R)*Z,e[11]=(v*C-g*P-x*R)*Z,e[12]=(f*w-c*H-p*A)*Z,e[13]=(n*H-a*w+o*A)*Z,e[14]=(T*D-y*N-S*R)*Z,e[15]=(g*N-v*D+_*R)*Z,this}scale(e){const n=this.elements,a=e.x,o=e.y,l=e.z;return n[0]*=a,n[4]*=o,n[8]*=l,n[1]*=a,n[5]*=o,n[9]*=l,n[2]*=a,n[6]*=o,n[10]*=l,n[3]*=a,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),l=1-a,c=e.x,f=e.y,p=e.z,d=l*c,g=l*f;return this.set(d*c+a,d*f-o*p,d*p+o*f,0,d*f+o*p,g*f+a,g*p-o*c,0,d*p-o*f,g*p+o*c,l*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,l,c){return this.set(1,a,l,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,d=l+l,g=c+c,v=f+f,_=l*d,x=l*g,y=l*v,T=c*g,S=c*v,M=f*v,R=p*d,D=p*g,C=p*v,N=a.x,P=a.y,O=a.z;return o[0]=(1-(T+M))*N,o[1]=(x+C)*N,o[2]=(y-D)*N,o[3]=0,o[4]=(x-C)*P,o[5]=(1-(_+M))*P,o[6]=(S+R)*P,o[7]=0,o[8]=(y+D)*O,o[9]=(S-R)*O,o[10]=(1-(_+T))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return a.set(1,1,1),n.identity(),this;let c=Do.set(o[0],o[1],o[2]).length();const f=Do.set(o[4],o[5],o[6]).length(),p=Do.set(o[8],o[9],o[10]).length();l<0&&(c=-c),ra.copy(this);const d=1/c,g=1/f,v=1/p;return ra.elements[0]*=d,ra.elements[1]*=d,ra.elements[2]*=d,ra.elements[4]*=g,ra.elements[5]*=g,ra.elements[6]*=g,ra.elements[8]*=v,ra.elements[9]*=v,ra.elements[10]*=v,n.setFromRotationMatrix(ra),a.x=c,a.y=f,a.z=p,this}makePerspective(e,n,a,o,l,c,f=Ra,p=!1){const d=this.elements,g=2*l/(n-e),v=2*l/(a-o),_=(n+e)/(n-e),x=(a+o)/(a-o);let y,T;if(p)y=l/(c-l),T=c*l/(c-l);else if(f===Ra)y=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(f===Ff)y=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,o,l,c,f=Ra,p=!1){const d=this.elements,g=2/(n-e),v=2/(a-o),_=-(n+e)/(n-e),x=-(a+o)/(a-o);let y,T;if(p)y=1/(c-l),T=c/(c-l);else if(f===Ra)y=-2/(c-l),T=-(c+l)/(c-l);else if(f===Ff)y=-1/(c-l),T=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=y,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Do=new oe,ra=new Rn,iA=new oe(0,0,0),aA=new oe(1,1,1),Fr=new oe,Kc=new oe,Ri=new oe,jx=new Rn,Zx=new ul;class fr{constructor(e=0,n=0,a=0,o=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],p=o[1],d=o[5],g=o[9],v=o[2],_=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,x),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return jx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jx,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zx.setFromEuler(this),this.setFromQuaternion(Zx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class JM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rA=0;const Kx=new oe,Uo=new ul,Ka=new Rn,Qc=new oe,au=new oe,sA=new oe,oA=new ul,Qx=new oe(1,0,0),Jx=new oe(0,1,0),$x=new oe(0,0,1),eS={type:"added"},lA={type:"removed"},Lo={type:"childadded",child:null},xp={type:"childremoved",child:null};class Pi extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rA++}),this.uuid=ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pi.DEFAULT_UP.clone();const e=new oe,n=new fr,a=new ul,o=new oe(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Rn},normalMatrix:{value:new ht}}),this.matrix=new Rn,this.matrixWorld=new Rn,this.matrixAutoUpdate=Pi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new JM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Uo.setFromAxisAngle(e,n),this.quaternion.multiply(Uo),this}rotateOnWorldAxis(e,n){return Uo.setFromAxisAngle(e,n),this.quaternion.premultiply(Uo),this}rotateX(e){return this.rotateOnAxis(Qx,e)}rotateY(e){return this.rotateOnAxis(Jx,e)}rotateZ(e){return this.rotateOnAxis($x,e)}translateOnAxis(e,n){return Kx.copy(e).applyQuaternion(this.quaternion),this.position.add(Kx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qx,e)}translateY(e){return this.translateOnAxis(Jx,e)}translateZ(e){return this.translateOnAxis($x,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ka.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Qc.copy(e):Qc.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),au.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ka.lookAt(au,Qc,this.up):Ka.lookAt(Qc,au,this.up),this.quaternion.setFromRotationMatrix(Ka),o&&(Ka.extractRotation(o.matrixWorld),Uo.setFromRotationMatrix(Ka),this.quaternion.premultiply(Uo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eS),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(lA),xp.child=e,this.dispatchEvent(xp),xp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ka.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ka.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ka),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eS),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const c=this.children[a].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(au,e,sA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(au,oA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,o=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*a-l[8]*o,l[13]+=a-l[1]*n-l[5]*a-l[9]*o,l[14]+=o-l[2]*n-l[6]*a-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const v=p[d];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(n){const f=c(e.geometries),p=c(e.materials),d=c(e.textures),g=c(e.images),v=c(e.shapes),_=c(e.skeletons),x=c(e.animations),y=c(e.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),y.length>0&&(a.nodes=y)}return a.object=o,a;function c(f){const p=[];for(const d in f){const g=f[d];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}Pi.DEFAULT_UP=new oe(0,1,0);Pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jc extends Pi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uA={type:"move"};class Sp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const T of e.hand.values()){const S=n.getJointPose(T,a),M=this._getHandJoint(d,T);S!==null&&(M.matrix.fromArray(S.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=S.radius),M.visible=S!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,y=.005;d.inputState.pinching&&_>x+y?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=x-y&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(uA)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Jc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const $M={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},$c={h:0,s:0,l:0};function Mp(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Ft{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Dt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Dt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Dt.workingColorSpace){if(e=b0(e,1),n=Et(n,0,1),a=Et(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=Mp(c,l,e+1/3),this.g=Mp(c,l,e),this.b=Mp(c,l,e-1/3)}return Dt.colorSpaceToWorking(this,o),this}setStyle(e,n=Wt){function a(l){l!==void 0&&parseFloat(l)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wt){const a=$M[e.toLowerCase()];return a!==void 0?this.setHex(a,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=Zo(e.r),this.g=Zo(e.g),this.b=Zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Dt.workingToColorSpace(Zn.copy(this),e),Math.round(Et(Zn.r*255,0,255))*65536+Math.round(Et(Zn.g*255,0,255))*256+Math.round(Et(Zn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Dt.workingColorSpace){Dt.workingToColorSpace(Zn.copy(this),n);const a=Zn.r,o=Zn.g,l=Zn.b,c=Math.max(a,o,l),f=Math.min(a,o,l);let p,d;const g=(f+c)/2;if(f===c)p=0,d=0;else{const v=c-f;switch(d=g<=.5?v/(c+f):v/(2-c-f),c){case a:p=(o-l)/v+(o<l?6:0);break;case o:p=(l-a)/v+2;break;case l:p=(a-o)/v+4;break}p/=6}return e.h=p,e.s=d,e.l=g,e}getRGB(e,n=Dt.workingColorSpace){return Dt.workingToColorSpace(Zn.copy(this),n),e.r=Zn.r,e.g=Zn.g,e.b=Zn.b,e}getStyle(e=Wt){Dt.workingToColorSpace(Zn.copy(this),e);const n=Zn.r,a=Zn.g,o=Zn.b;return e!==Wt?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+n,Hr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Hr),e.getHSL($c);const a=xu(Hr.h,$c.h,n),o=xu(Hr.s,$c.s,n),l=xu(Hr.l,$c.l,n);return this.setHSL(a,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*a+l[6]*o,this.g=l[1]*n+l[4]*a+l[7]*o,this.b=l[2]*n+l[5]*a+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new Ft;Ft.NAMES=$M;class jm extends Pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const sa=new oe,Qa=new oe,yp=new oe,Ja=new oe,No=new oe,Oo=new oe,tS=new oe,Ep=new oe,Tp=new oe,bp=new oe,Ap=new cn,Rp=new cn,Cp=new cn;class la{constructor(e=new oe,n=new oe,a=new oe){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),sa.subVectors(e,n),o.cross(sa);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,a,o,l){sa.subVectors(o,n),Qa.subVectors(a,n),yp.subVectors(e,n);const c=sa.dot(sa),f=sa.dot(Qa),p=sa.dot(yp),d=Qa.dot(Qa),g=Qa.dot(yp),v=c*d-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,x=(d*p-f*g)*_,y=(c*g-f*p)*_;return l.set(1-x-y,y,x)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,Ja)===null?!1:Ja.x>=0&&Ja.y>=0&&Ja.x+Ja.y<=1}static getInterpolation(e,n,a,o,l,c,f,p){return this.getBarycoord(e,n,a,o,Ja)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Ja.x),p.addScaledVector(c,Ja.y),p.addScaledVector(f,Ja.z),p)}static getInterpolatedAttribute(e,n,a,o,l,c){return Ap.setScalar(0),Rp.setScalar(0),Cp.setScalar(0),Ap.fromBufferAttribute(e,n),Rp.fromBufferAttribute(e,a),Cp.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Ap,l.x),c.addScaledVector(Rp,l.y),c.addScaledVector(Cp,l.z),c}static isFrontFacing(e,n,a,o){return sa.subVectors(a,n),Qa.subVectors(e,n),sa.cross(Qa).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sa.subVectors(this.c,this.b),Qa.subVectors(this.a,this.b),sa.cross(Qa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return la.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return la.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,l){return la.getInterpolation(e,this.a,this.b,this.c,n,a,o,l)}containsPoint(e){return la.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return la.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,l=this.c;let c,f;No.subVectors(o,a),Oo.subVectors(l,a),Ep.subVectors(e,a);const p=No.dot(Ep),d=Oo.dot(Ep);if(p<=0&&d<=0)return n.copy(a);Tp.subVectors(e,o);const g=No.dot(Tp),v=Oo.dot(Tp);if(g>=0&&v<=g)return n.copy(o);const _=p*v-g*d;if(_<=0&&p>=0&&g<=0)return c=p/(p-g),n.copy(a).addScaledVector(No,c);bp.subVectors(e,l);const x=No.dot(bp),y=Oo.dot(bp);if(y>=0&&x<=y)return n.copy(l);const T=x*d-p*y;if(T<=0&&d>=0&&y<=0)return f=d/(d-y),n.copy(a).addScaledVector(Oo,f);const S=g*y-x*v;if(S<=0&&v-g>=0&&x-y>=0)return tS.subVectors(l,o),f=(v-g)/(v-g+(x-y)),n.copy(o).addScaledVector(tS,f);const M=1/(S+T+_);return c=T*M,f=_*M,n.copy(a).addScaledVector(No,c).addScaledVector(Oo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Lu{constructor(e=new oe(1/0,1/0,1/0),n=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(oa.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(oa.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=oa.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,oa):oa.fromBufferAttribute(l,c),oa.applyMatrix4(e.matrixWorld),this.expandByPoint(oa);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ef.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),ef.copy(a.boundingBox)),ef.applyMatrix4(e.matrixWorld),this.union(ef)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oa),oa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ru),tf.subVectors(this.max,ru),Po.subVectors(e.a,ru),Bo.subVectors(e.b,ru),zo.subVectors(e.c,ru),Gr.subVectors(Bo,Po),Vr.subVectors(zo,Bo),As.subVectors(Po,zo);let n=[0,-Gr.z,Gr.y,0,-Vr.z,Vr.y,0,-As.z,As.y,Gr.z,0,-Gr.x,Vr.z,0,-Vr.x,As.z,0,-As.x,-Gr.y,Gr.x,0,-Vr.y,Vr.x,0,-As.y,As.x,0];return!wp(n,Po,Bo,zo,tf)||(n=[1,0,0,0,1,0,0,0,1],!wp(n,Po,Bo,zo,tf))?!1:(nf.crossVectors(Gr,Vr),n=[nf.x,nf.y,nf.z],wp(n,Po,Bo,zo,tf))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $a=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],oa=new oe,ef=new Lu,Po=new oe,Bo=new oe,zo=new oe,Gr=new oe,Vr=new oe,As=new oe,ru=new oe,tf=new oe,nf=new oe,Rs=new oe;function wp(r,e,n,a,o){for(let l=0,c=r.length-3;l<=c;l+=3){Rs.fromArray(r,l);const f=o.x*Math.abs(Rs.x)+o.y*Math.abs(Rs.y)+o.z*Math.abs(Rs.z),p=e.dot(Rs),d=n.dot(Rs),g=a.dot(Rs);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>f)return!1}return!0}const Tn=new oe,af=new et;let cA=0;class Qi{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Hx,this.updateRanges=[],this.gpuType=Aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)af.fromBufferAttribute(this,n),af.applyMatrix3(e),this.setXY(n,af.x,af.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.applyMatrix3(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.applyMatrix4(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.applyNormalMatrix(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.transformDirection(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Vo(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=ii(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vo(n,this.array)),n}setX(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vo(n,this.array)),n}setY(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vo(n,this.array)),n}setW(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=ii(n,this.array),a=ii(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=ii(n,this.array),a=ii(a,this.array),o=ii(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,l){return e*=this.itemSize,this.normalized&&(n=ii(n,this.array),a=ii(a,this.array),o=ii(o,this.array),l=ii(l,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hx&&(e.usage=this.usage),e}}class ey extends Qi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class ty extends Qi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class rr extends Qi{constructor(e,n,a){super(new Float32Array(e),n,a)}}const fA=new Lu,su=new oe,Dp=new oe;class R0{constructor(e=new oe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):fA.setFromPoints(e).getCenter(a);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;su.subVectors(e,this.center);const n=su.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(su,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(su.copy(e.center).add(Dp)),this.expandByPoint(su.copy(e.center).sub(Dp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hA=0;const Yi=new Rn,Up=new Pi,Io=new oe,Ci=new Lu,ou=new Lu,Pn=new oe;class Da extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hA++}),this.uuid=ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ub(e)?ty:ey)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new ht().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yi.makeRotationFromQuaternion(e),this.applyMatrix4(Yi),this}rotateX(e){return Yi.makeRotationX(e),this.applyMatrix4(Yi),this}rotateY(e){return Yi.makeRotationY(e),this.applyMatrix4(Yi),this}rotateZ(e){return Yi.makeRotationZ(e),this.applyMatrix4(Yi),this}translate(e,n,a){return Yi.makeTranslation(e,n,a),this.applyMatrix4(Yi),this}scale(e,n,a){return Yi.makeScale(e,n,a),this.applyMatrix4(Yi),this}lookAt(e){return Up.lookAt(e),Up.updateMatrix(),this.applyMatrix4(Up.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Io).negate(),this.translate(Io.x,Io.y,Io.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new rr(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const l=n[a];Ci.setFromBufferAttribute(l),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new R0);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const a=this.boundingSphere.center;if(Ci.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];ou.setFromBufferAttribute(f),this.morphTargetsRelative?(Pn.addVectors(Ci.min,ou.min),Ci.expandByPoint(Pn),Pn.addVectors(Ci.max,ou.max),Ci.expandByPoint(Pn)):(Ci.expandByPoint(ou.min),Ci.expandByPoint(ou.max))}Ci.getCenter(a);let o=0;for(let l=0,c=e.count;l<c;l++)Pn.fromBufferAttribute(e,l),o=Math.max(o,a.distanceToSquared(Pn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,g=f.count;d<g;d++)Pn.fromBufferAttribute(f,d),p&&(Io.fromBufferAttribute(e,d),Pn.add(Io)),o=Math.max(o,a.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qi(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let A=0;A<a.count;A++)f[A]=new oe,p[A]=new oe;const d=new oe,g=new oe,v=new oe,_=new et,x=new et,y=new et,T=new oe,S=new oe;function M(A,w,J){d.fromBufferAttribute(a,A),g.fromBufferAttribute(a,w),v.fromBufferAttribute(a,J),_.fromBufferAttribute(l,A),x.fromBufferAttribute(l,w),y.fromBufferAttribute(l,J),g.sub(d),v.sub(d),x.sub(_),y.sub(_);const H=1/(x.x*y.y-y.x*x.y);isFinite(H)&&(T.copy(g).multiplyScalar(y.y).addScaledVector(v,-x.y).multiplyScalar(H),S.copy(v).multiplyScalar(x.x).addScaledVector(g,-y.x).multiplyScalar(H),f[A].add(T),f[w].add(T),f[J].add(T),p[A].add(S),p[w].add(S),p[J].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let A=0,w=R.length;A<w;++A){const J=R[A],H=J.start,q=J.count;for(let K=H,ee=H+q;K<ee;K+=3)M(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const D=new oe,C=new oe,N=new oe,P=new oe;function O(A){N.fromBufferAttribute(o,A),P.copy(N);const w=f[A];D.copy(w),D.sub(N.multiplyScalar(N.dot(w))).normalize(),C.crossVectors(P,w);const H=C.dot(p[A])<0?-1:1;c.setXYZW(A,D.x,D.y,D.z,H)}for(let A=0,w=R.length;A<w;++A){const J=R[A],H=J.start,q=J.count;for(let K=H,ee=H+q;K<ee;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Qi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const o=new oe,l=new oe,c=new oe,f=new oe,p=new oe,d=new oe,g=new oe,v=new oe;if(e)for(let _=0,x=e.count;_<x;_+=3){const y=e.getX(_+0),T=e.getX(_+1),S=e.getX(_+2);o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,S),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),f.fromBufferAttribute(a,y),p.fromBufferAttribute(a,T),d.fromBufferAttribute(a,S),f.add(g),p.add(g),d.add(g),a.setXYZ(y,f.x,f.y,f.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,x=n.count;_<x;_+=3)o.fromBufferAttribute(n,_+0),l.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Pn.fromBufferAttribute(e,n),Pn.normalize(),e.setXYZ(n,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(f,p){const d=f.array,g=f.itemSize,v=f.normalized,_=new d.constructor(p.length*g);let x=0,y=0;for(let T=0,S=p.length;T<S;T++){f.isInterleavedBufferAttribute?x=p[T]*f.data.stride+f.offset:x=p[T]*g;for(let M=0;M<g;M++)_[y++]=d[x++]}return new Qi(_,g,v)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Da,a=this.index.array,o=this.attributes;for(const f in o){const p=o[f],d=e(p,a);n.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let g=0,v=d.length;g<v;g++){const _=d[g],x=e(_,a);p.push(x)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];e.data.attributes[p]=d.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let v=0,_=d.length;v<_;v++){const x=d[v];g.push(x.toJSON(e.data))}g.length>0&&(o[p]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const l=e.morphAttributes;for(const d in l){const g=[],v=l[d];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,g=c.length;d<g;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let dA=0;class cl extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=ll(),this.name="",this.type="Material",this.blending=jo,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sm,this.blendDst=om,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Co,this.stencilZFail=Co,this.stencilZPass=Co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==jo&&(a.blending=this.blending),this.side!==lr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==sm&&(a.blendSrc=this.blendSrc),this.blendDst!==om&&(a.blendDst=this.blendDst),this.blendEquation!==Os&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==nl&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Co&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Co&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Co&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=o(e.textures),c=o(e.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let l=0;l!==o;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const er=new oe,Lp=new oe,rf=new oe,kr=new oe,Np=new oe,sf=new oe,Op=new oe;class pA{constructor(e=new oe,n=new oe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=er.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,n),er.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){Lp.copy(e).add(n).multiplyScalar(.5),rf.copy(n).sub(e).normalize(),kr.copy(this.origin).sub(Lp);const l=e.distanceTo(n)*.5,c=-this.direction.dot(rf),f=kr.dot(this.direction),p=-kr.dot(rf),d=kr.lengthSq(),g=Math.abs(1-c*c);let v,_,x,y;if(g>0)if(v=c*p-f,_=c*f-p,y=l*g,v>=0)if(_>=-y)if(_<=y){const T=1/g;v*=T,_*=T,x=v*(v+c*_+2*f)+_*(c*v+_+2*p)+d}else _=l,v=Math.max(0,-(c*_+f)),x=-v*v+_*(_+2*p)+d;else _=-l,v=Math.max(0,-(c*_+f)),x=-v*v+_*(_+2*p)+d;else _<=-y?(v=Math.max(0,-(-c*l+f)),_=v>0?-l:Math.min(Math.max(-l,-p),l),x=-v*v+_*(_+2*p)+d):_<=y?(v=0,_=Math.min(Math.max(-l,-p),l),x=_*(_+2*p)+d):(v=Math.max(0,-(c*l+f)),_=v>0?l:Math.min(Math.max(-l,-p),l),x=-v*v+_*(_+2*p)+d);else _=c>0?-l:l,v=Math.max(0,-(c*_+f)),x=-v*v+_*(_+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Lp).addScaledVector(rf,_),x}intersectSphere(e,n){er.subVectors(e.center,this.origin);const a=er.dot(this.direction),o=er.dot(er)-a*a,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,l,c,f,p;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(a=(e.min.x-_.x)*d,o=(e.max.x-_.x)*d):(a=(e.max.x-_.x)*d,o=(e.min.x-_.x)*d),g>=0?(l=(e.min.y-_.y)*g,c=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,c=(e.min.y-_.y)*g),a>c||l>o||((l>a||isNaN(a))&&(a=l),(c<o||isNaN(o))&&(o=c),v>=0?(f=(e.min.z-_.z)*v,p=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,p=(e.min.z-_.z)*v),a>p||f>o)||((f>a||a!==a)&&(a=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,n,a,o,l){Np.subVectors(n,e),sf.subVectors(a,e),Op.crossVectors(Np,sf);let c=this.direction.dot(Op),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;kr.subVectors(this.origin,e);const p=f*this.direction.dot(sf.crossVectors(kr,sf));if(p<0)return null;const d=f*this.direction.dot(Np.cross(kr));if(d<0||p+d>c)return null;const g=-f*kr.dot(Op);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ny extends cl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=OM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nS=new Rn,Cs=new pA,of=new R0,iS=new oe,lf=new oe,uf=new oe,cf=new oe,Pp=new oe,ff=new oe,aS=new oe,hf=new oe;class ha extends Pi{constructor(e=new Da,n=new ny){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){ff.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const g=f[p],v=l[p];g!==0&&(Pp.fromBufferAttribute(v,e),c?ff.addScaledVector(Pp,g):ff.addScaledVector(Pp.sub(n),g))}n.add(ff)}return n}raycast(e,n){const a=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),of.copy(a.boundingSphere),of.applyMatrix4(l),Cs.copy(e.ray).recast(e.near),!(of.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(of,iS)===null||Cs.origin.distanceToSquared(iS)>(e.far-e.near)**2))&&(nS.copy(l).invert(),Cs.copy(e.ray).applyMatrix4(nS),!(a.boundingBox!==null&&Cs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Cs)))}_computeIntersections(e,n,a){let o;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let y=0,T=_.length;y<T;y++){const S=_[y],M=c[S.materialIndex],R=Math.max(S.start,x.start),D=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let C=R,N=D;C<N;C+=3){const P=f.getX(C),O=f.getX(C+1),A=f.getX(C+2);o=df(this,M,e,a,d,g,v,P,O,A),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const y=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let S=y,M=T;S<M;S+=3){const R=f.getX(S),D=f.getX(S+1),C=f.getX(S+2);o=df(this,c,e,a,d,g,v,R,D,C),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let y=0,T=_.length;y<T;y++){const S=_[y],M=c[S.materialIndex],R=Math.max(S.start,x.start),D=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let C=R,N=D;C<N;C+=3){const P=C,O=C+1,A=C+2;o=df(this,M,e,a,d,g,v,P,O,A),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const y=Math.max(0,x.start),T=Math.min(p.count,x.start+x.count);for(let S=y,M=T;S<M;S+=3){const R=S,D=S+1,C=S+2;o=df(this,c,e,a,d,g,v,R,D,C),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function mA(r,e,n,a,o,l,c,f){let p;if(e.side===Bn?p=a.intersectTriangle(c,l,o,!0,f):p=a.intersectTriangle(o,l,c,e.side===lr,f),p===null)return null;hf.copy(f),hf.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(hf);return d<n.near||d>n.far?null:{distance:d,point:hf.clone(),object:r}}function df(r,e,n,a,o,l,c,f,p,d){r.getVertexPosition(f,lf),r.getVertexPosition(p,uf),r.getVertexPosition(d,cf);const g=mA(r,e,n,a,lf,uf,cf,aS);if(g){const v=new oe;la.getBarycoord(aS,lf,uf,cf,v),o&&(g.uv=la.getInterpolatedAttribute(o,f,p,d,v,new et)),l&&(g.uv1=la.getInterpolatedAttribute(l,f,p,d,v,new et)),c&&(g.normal=la.getInterpolatedAttribute(c,f,p,d,v,new oe),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:p,c:d,normal:new oe,materialIndex:0};la.getNormal(lf,uf,cf,_.normal),g.face=_,g.barycoord=v}return g}class gA extends Yn{constructor(e=null,n=1,a=1,o,l,c,f,p,d=Xn,g=Xn,v,_){super(null,c,f,p,d,g,o,l,v,_),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bp=new oe,_A=new oe,vA=new ht;class Ns{constructor(e=new oe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=Bp.subVectors(a,n).cross(_A.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(Bp),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||vA.getNormalMatrix(e),o=this.coplanarPoint(Bp).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new R0,xA=new et(.5,.5),pf=new oe;class iy{constructor(e=new Ns,n=new Ns,a=new Ns,o=new Ns,l=new Ns,c=new Ns){this.planes=[e,n,a,o,l,c]}set(e,n,a,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(a),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=Ra,a=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],p=l[2],d=l[3],g=l[4],v=l[5],_=l[6],x=l[7],y=l[8],T=l[9],S=l[10],M=l[11],R=l[12],D=l[13],C=l[14],N=l[15];if(o[0].setComponents(d-c,x-g,M-y,N-R).normalize(),o[1].setComponents(d+c,x+g,M+y,N+R).normalize(),o[2].setComponents(d+f,x+v,M+T,N+D).normalize(),o[3].setComponents(d-f,x-v,M-T,N-D).normalize(),a)o[4].setComponents(p,_,S,C).normalize(),o[5].setComponents(d-p,x-_,M-S,N-C).normalize();else if(o[4].setComponents(d-p,x-_,M-S,N-C).normalize(),n===Ra)o[5].setComponents(d+p,x+_,M+S,N+C).normalize();else if(n===Ff)o[5].setComponents(p,_,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const n=xA.distanceTo(e.center);return ws.radius=.7071067811865476+n,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(pf.x=o.normal.x>0?e.max.x:e.min.x,pf.y=o.normal.y>0?e.max.y:e.min.y,pf.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(pf)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ay extends Yn{constructor(e=[],n=Vs,a,o,l,c,f,p,d,g){super(e,n,a,o,l,c,f,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sl extends Yn{constructor(e,n,a=fa,o,l,c,f=Xn,p=Xn,d,g=cr,v=1){if(g!==cr&&g!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:v};super(_,o,l,c,f,p,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new A0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class SA extends sl{constructor(e,n=fa,a=Vs,o,l,c=Xn,f=Xn,p,d=cr){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,n,a,o,l,c,f,p,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ry extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nu extends Da{constructor(e=1,n=1,a=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],g=[],v=[];let _=0,x=0;y("z","y","x",-1,-1,a,n,e,c,l,0),y("z","y","x",1,-1,a,n,-e,c,l,1),y("x","z","y",1,1,e,a,n,o,c,2),y("x","z","y",1,-1,e,a,-n,o,c,3),y("x","y","z",1,-1,e,n,a,o,l,4),y("x","y","z",-1,-1,e,n,-a,o,l,5),this.setIndex(p),this.setAttribute("position",new rr(d,3)),this.setAttribute("normal",new rr(g,3)),this.setAttribute("uv",new rr(v,2));function y(T,S,M,R,D,C,N,P,O,A,w){const J=C/O,H=N/A,q=C/2,K=N/2,ee=P/2,Z=O+1,B=A+1;let F=0,se=0;const fe=new oe;for(let Se=0;Se<B;Se++){const I=Se*H-K;for(let j=0;j<Z;j++){const ge=j*J-q;fe[T]=ge*R,fe[S]=I*D,fe[M]=ee,d.push(fe.x,fe.y,fe.z),fe[T]=0,fe[S]=0,fe[M]=P>0?1:-1,g.push(fe.x,fe.y,fe.z),v.push(j/O),v.push(1-Se/A),F+=1}}for(let Se=0;Se<A;Se++)for(let I=0;I<O;I++){const j=_+I+Z*Se,ge=_+I+Z*(Se+1),Ee=_+(I+1)+Z*(Se+1),Ue=_+(I+1)+Z*Se;p.push(j,ge,Ue),p.push(ge,Ee,Ue),se+=6}f.addGroup(x,se,w),x+=se,_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ou extends Da{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const l=e/2,c=n/2,f=Math.floor(a),p=Math.floor(o),d=f+1,g=p+1,v=e/f,_=n/p,x=[],y=[],T=[],S=[];for(let M=0;M<g;M++){const R=M*_-c;for(let D=0;D<d;D++){const C=D*v-l;y.push(C,-R,0),T.push(0,0,1),S.push(D/f),S.push(1-M/p)}}for(let M=0;M<p;M++)for(let R=0;R<f;R++){const D=R+d*M,C=R+d*(M+1),N=R+1+d*(M+1),P=R+1+d*M;x.push(D,C,P),x.push(C,N,P)}this.setIndex(x),this.setAttribute("position",new rr(y,3)),this.setAttribute("normal",new rr(T,3)),this.setAttribute("uv",new rr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ou(e.width,e.height,e.widthSegments,e.heightSegments)}}function ol(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function ai(r){const e={};for(let n=0;n<r.length;n++){const a=ol(r[n]);for(const o in a)e[o]=a[o]}return e}function MA(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function sy(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const yA={clone:ol,merge:ai};var EA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends cl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EA,this.fragmentShader=TA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ol(e.uniforms),this.uniformsGroups=MA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class bA extends Fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class AA extends cl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RA extends cl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mf=new oe,gf=new ul,xa=new oe;class oy extends Pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rn,this.projectionMatrix=new Rn,this.projectionMatrixInverse=new Rn,this.coordinateSystem=Ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mf,gf,xa),xa.x===1&&xa.y===1&&xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mf,gf,xa.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(mf,gf,xa),xa.x===1&&xa.y===1&&xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mf,gf,xa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new oe,rS=new et,sS=new et;class ji extends oy{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Cu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cu*2*Math.atan(Math.tan(vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,n){return this.getViewBounds(e,rS,sS),n.subVectors(sS,rS)}setViewOffset(e,n,a,o,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vu*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*o/p,n-=c.offsetY*a/d,o*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Yf extends oy{constructor(e=-1,n=1,a=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=a-e,c=a+e,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fo=-90,Ho=1;class CA extends Pi{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ji(Fo,Ho,e,n);o.layers=this.layers,this.add(o);const l=new ji(Fo,Ho,e,n);l.layers=this.layers,this.add(l);const c=new ji(Fo,Ho,e,n);c.layers=this.layers,this.add(c);const f=new ji(Fo,Ho,e,n);f.layers=this.layers,this.add(f);const p=new ji(Fo,Ho,e,n);p.layers=this.layers,this.add(p);const d=new ji(Fo,Ho,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,l,c,f,p]=n;for(const d of n)this.remove(d);if(e===Ra)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ff)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(a,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(a,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(a,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(v,_,x),e.xr.enabled=y,a.texture.needsPMREMUpdate=!0}}class wA extends ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ut{constructor(e){this.value=e}clone(){return new Ut(this.value.clone===void 0?this.value:this.value.clone())}}function oS(r,e,n,a){const o=DA(a);switch(n){case qM:return r*e;case ZM:return r*e/o.components*o.byteLength;case S0:return r*e/o.components*o.byteLength;case rl:return r*e*2/o.components*o.byteLength;case M0:return r*e*2/o.components*o.byteLength;case jM:return r*e*3/o.components*o.byteLength;case ua:return r*e*4/o.components*o.byteLength;case y0:return r*e*4/o.components*o.byteLength;case bf:case Af:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Rf:case Cf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _m:case xm:return Math.max(r,16)*Math.max(e,8)/4;case gm:case vm:return Math.max(r,8)*Math.max(e,8)/2;case Sm:case Mm:case Em:case Tm:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ym:case bm:case Am:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rm:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Cm:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case wm:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Dm:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Um:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Lm:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Nm:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Om:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Pm:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Bm:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case zm:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Im:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Fm:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Hm:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Gm:case Vm:case km:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xm:case Wm:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ym:case qm:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function DA(r){switch(r){case Un:case kM:return{byteLength:1,components:1};case Ru:case XM:case ur:return{byteLength:2,components:1};case v0:case x0:return{byteLength:2,components:4};case fa:case _0:case Aa:return{byteLength:4,components:1};case WM:case YM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Du}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Du);function ly(){let r=null,e=!1,n=null,a=null;function o(l,c){n(l,c),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){r=l}}}function UA(r){const e=new WeakMap;function n(f,p){const d=f.array,g=f.usage,v=d.byteLength,_=r.createBuffer();r.bindBuffer(p,_),r.bufferData(p,d,g),f.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=r.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,p,d){const g=p.array,v=p.updateRanges;if(r.bindBuffer(d,f),v.length===0)r.bufferSubData(d,0,g);else{v.sort((x,y)=>x.start-y.start);let _=0;for(let x=1;x<v.length;x++){const y=v[_],T=v[x];T.start<=y.start+y.count+1?y.count=Math.max(y.count,T.start+T.count-y.start):(++_,v[_]=T)}v.length=_+1;for(let x=0,y=v.length;x<y;x++){const T=v[x];r.bufferSubData(d,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(r.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:o,remove:l,update:c}}var LA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,OA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IA=`#ifdef USE_AOMAP
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
#endif`,FA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,GA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XA=`float G_BlinnPhong_Implicit( ) {
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
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,WA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
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
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,JA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$A=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
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
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
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
			mip = - 2.0 * log2( 1.16 * roughness );		}
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
#endif`,iR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
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
#endif`,aR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lR="gl_FragColor = linearToOutputTexel( gl_FragColor );",uR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hR=`#ifdef USE_ENVMAP
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
#endif`,dR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pR=`#ifdef USE_ENVMAP
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
#endif`,mR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_R=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ER=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
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
#endif`,TR=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
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
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
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
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
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
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UR=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,LR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,NR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GR=`#if defined( USE_POINTS_UV )
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
#endif`,VR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,jR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
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
#endif`,QR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$R=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,t2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,o2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,p2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,m2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif
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
#endif`,g2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v2=`#ifdef USE_SKINNING
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
#endif`,x2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S2=`#ifdef USE_SKINNING
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
#endif`,M2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
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
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b2=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,A2=`#ifdef USE_TRANSMISSION
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
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
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
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,R2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
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
}`,I2=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,F2=`#define DISTANCE
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
}`,H2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,G2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k2=`uniform float scale;
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
}`,X2=`uniform vec3 diffuse;
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
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W2=`#include <common>
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
}`,Y2=`uniform vec3 diffuse;
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
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
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
}`,q2=`#define LAMBERT
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
}`,j2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z2=`#define MATCAP
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
}`,K2=`#define MATCAP
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
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q2=`#define NORMAL
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
}`,J2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$2=`#define PHONG
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
}`,e3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t3=`#define STANDARD
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
}`,n3=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,i3=`#define TOON
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
}`,a3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r3=`uniform float size;
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
}`,s3=`uniform vec3 diffuse;
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
}`,o3=`#include <common>
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
}`,l3=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,u3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,c3=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:LA,alphahash_pars_fragment:NA,alphamap_fragment:OA,alphamap_pars_fragment:PA,alphatest_fragment:BA,alphatest_pars_fragment:zA,aomap_fragment:IA,aomap_pars_fragment:FA,batching_pars_vertex:HA,batching_vertex:GA,begin_vertex:VA,beginnormal_vertex:kA,bsdfs:XA,iridescence_fragment:WA,bumpmap_pars_fragment:YA,clipping_planes_fragment:qA,clipping_planes_pars_fragment:jA,clipping_planes_pars_vertex:ZA,clipping_planes_vertex:KA,color_fragment:QA,color_pars_fragment:JA,color_pars_vertex:$A,color_vertex:eR,common:tR,cube_uv_reflection_fragment:nR,defaultnormal_vertex:iR,displacementmap_pars_vertex:aR,displacementmap_vertex:rR,emissivemap_fragment:sR,emissivemap_pars_fragment:oR,colorspace_fragment:lR,colorspace_pars_fragment:uR,envmap_fragment:cR,envmap_common_pars_fragment:fR,envmap_pars_fragment:hR,envmap_pars_vertex:dR,envmap_physical_pars_fragment:TR,envmap_vertex:pR,fog_vertex:mR,fog_pars_vertex:gR,fog_fragment:_R,fog_pars_fragment:vR,gradientmap_pars_fragment:xR,lightmap_pars_fragment:SR,lights_lambert_fragment:MR,lights_lambert_pars_fragment:yR,lights_pars_begin:ER,lights_toon_fragment:bR,lights_toon_pars_fragment:AR,lights_phong_fragment:RR,lights_phong_pars_fragment:CR,lights_physical_fragment:wR,lights_physical_pars_fragment:DR,lights_fragment_begin:UR,lights_fragment_maps:LR,lights_fragment_end:NR,logdepthbuf_fragment:OR,logdepthbuf_pars_fragment:PR,logdepthbuf_pars_vertex:BR,logdepthbuf_vertex:zR,map_fragment:IR,map_pars_fragment:FR,map_particle_fragment:HR,map_particle_pars_fragment:GR,metalnessmap_fragment:VR,metalnessmap_pars_fragment:kR,morphinstance_vertex:XR,morphcolor_vertex:WR,morphnormal_vertex:YR,morphtarget_pars_vertex:qR,morphtarget_vertex:jR,normal_fragment_begin:ZR,normal_fragment_maps:KR,normal_pars_fragment:QR,normal_pars_vertex:JR,normal_vertex:$R,normalmap_pars_fragment:e2,clearcoat_normal_fragment_begin:t2,clearcoat_normal_fragment_maps:n2,clearcoat_pars_fragment:i2,iridescence_pars_fragment:a2,opaque_fragment:r2,packing:s2,premultiplied_alpha_fragment:o2,project_vertex:l2,dithering_fragment:u2,dithering_pars_fragment:c2,roughnessmap_fragment:f2,roughnessmap_pars_fragment:h2,shadowmap_pars_fragment:d2,shadowmap_pars_vertex:p2,shadowmap_vertex:m2,shadowmask_pars_fragment:g2,skinbase_vertex:_2,skinning_pars_vertex:v2,skinning_vertex:x2,skinnormal_vertex:S2,specularmap_fragment:M2,specularmap_pars_fragment:y2,tonemapping_fragment:E2,tonemapping_pars_fragment:T2,transmission_fragment:b2,transmission_pars_fragment:A2,uv_pars_fragment:R2,uv_pars_vertex:C2,uv_vertex:w2,worldpos_vertex:D2,background_vert:U2,background_frag:L2,backgroundCube_vert:N2,backgroundCube_frag:O2,cube_vert:P2,cube_frag:B2,depth_vert:z2,depth_frag:I2,distance_vert:F2,distance_frag:H2,equirect_vert:G2,equirect_frag:V2,linedashed_vert:k2,linedashed_frag:X2,meshbasic_vert:W2,meshbasic_frag:Y2,meshlambert_vert:q2,meshlambert_frag:j2,meshmatcap_vert:Z2,meshmatcap_frag:K2,meshnormal_vert:Q2,meshnormal_frag:J2,meshphong_vert:$2,meshphong_frag:e3,meshphysical_vert:t3,meshphysical_frag:n3,meshtoon_vert:i3,meshtoon_frag:a3,points_vert:r3,points_frag:s3,shadow_vert:o3,shadow_frag:l3,sprite_vert:u3,sprite_frag:c3},Pe={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ya={basic:{uniforms:ai([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:ai([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:ai([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:ai([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:ai([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ft(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:ai([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:ai([Pe.points,Pe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:ai([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:ai([Pe.common,Pe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:ai([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:ai([Pe.sprite,Pe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:ai([Pe.common,Pe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:ai([Pe.lights,Pe.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ya.physical={uniforms:ai([ya.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const _f={r:0,b:0,g:0},Ds=new fr,f3=new Rn;function h3(r,e,n,a,o,l){const c=new Ft(0);let f=o===!0?0:1,p,d,g=null,v=0,_=null;function x(R){let D=R.isScene===!0?R.background:null;if(D&&D.isTexture){const C=R.backgroundBlurriness>0;D=e.get(D,C)}return D}function y(R){let D=!1;const C=x(R);C===null?S(c,f):C&&C.isColor&&(S(C,1),D=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function T(R,D){const C=x(D);C&&(C.isCubeTexture||C.mapping===Wf)?(d===void 0&&(d=new ha(new Nu(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:ol(ya.backgroundCube.uniforms),vertexShader:ya.backgroundCube.vertexShader,fragmentShader:ya.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),Ds.copy(D.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(f3.makeRotationFromEuler(Ds)),d.material.toneMapped=Dt.getTransfer(C.colorSpace)!==Xt,(g!==C||v!==C.version||_!==r.toneMapping)&&(d.material.needsUpdate=!0,g=C,v=C.version,_=r.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new ha(new Ou(2,2),new Fn({name:"BackgroundMaterial",uniforms:ol(ya.background.uniforms),vertexShader:ya.background.vertexShader,fragmentShader:ya.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Dt.getTransfer(C.colorSpace)!==Xt,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||v!==C.version||_!==r.toneMapping)&&(p.material.needsUpdate=!0,g=C,v=C.version,_=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function S(R,D){R.getRGB(_f,sy(r)),n.buffers.color.setClear(_f.r,_f.g,_f.b,D,l)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,D=1){c.set(R),f=D,S(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,S(c,f)},render:y,addToRenderList:T,dispose:M}}function d3(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=_(null);let l=o,c=!1;function f(H,q,K,ee,Z){let B=!1;const F=v(H,ee,K,q);l!==F&&(l=F,d(l.object)),B=x(H,ee,K,Z),B&&y(H,ee,K,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,C(H,q,K,ee),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return r.createVertexArray()}function d(H){return r.bindVertexArray(H)}function g(H){return r.deleteVertexArray(H)}function v(H,q,K,ee){const Z=ee.wireframe===!0;let B=a[q.id];B===void 0&&(B={},a[q.id]=B);const F=H.isInstancedMesh===!0?H.id:0;let se=B[F];se===void 0&&(se={},B[F]=se);let fe=se[K.id];fe===void 0&&(fe={},se[K.id]=fe);let Se=fe[Z];return Se===void 0&&(Se=_(p()),fe[Z]=Se),Se}function _(H){const q=[],K=[],ee=[];for(let Z=0;Z<n;Z++)q[Z]=0,K[Z]=0,ee[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:K,attributeDivisors:ee,object:H,attributes:{},index:null}}function x(H,q,K,ee){const Z=l.attributes,B=q.attributes;let F=0;const se=K.getAttributes();for(const fe in se)if(se[fe].location>=0){const I=Z[fe];let j=B[fe];if(j===void 0&&(fe==="instanceMatrix"&&H.instanceMatrix&&(j=H.instanceMatrix),fe==="instanceColor"&&H.instanceColor&&(j=H.instanceColor)),I===void 0||I.attribute!==j||j&&I.data!==j.data)return!0;F++}return l.attributesNum!==F||l.index!==ee}function y(H,q,K,ee){const Z={},B=q.attributes;let F=0;const se=K.getAttributes();for(const fe in se)if(se[fe].location>=0){let I=B[fe];I===void 0&&(fe==="instanceMatrix"&&H.instanceMatrix&&(I=H.instanceMatrix),fe==="instanceColor"&&H.instanceColor&&(I=H.instanceColor));const j={};j.attribute=I,I&&I.data&&(j.data=I.data),Z[fe]=j,F++}l.attributes=Z,l.attributesNum=F,l.index=ee}function T(){const H=l.newAttributes;for(let q=0,K=H.length;q<K;q++)H[q]=0}function S(H){M(H,0)}function M(H,q){const K=l.newAttributes,ee=l.enabledAttributes,Z=l.attributeDivisors;K[H]=1,ee[H]===0&&(r.enableVertexAttribArray(H),ee[H]=1),Z[H]!==q&&(r.vertexAttribDivisor(H,q),Z[H]=q)}function R(){const H=l.newAttributes,q=l.enabledAttributes;for(let K=0,ee=q.length;K<ee;K++)q[K]!==H[K]&&(r.disableVertexAttribArray(K),q[K]=0)}function D(H,q,K,ee,Z,B,F){F===!0?r.vertexAttribIPointer(H,q,K,Z,B):r.vertexAttribPointer(H,q,K,ee,Z,B)}function C(H,q,K,ee){T();const Z=ee.attributes,B=K.getAttributes(),F=q.defaultAttributeValues;for(const se in B){const fe=B[se];if(fe.location>=0){let Se=Z[se];if(Se===void 0&&(se==="instanceMatrix"&&H.instanceMatrix&&(Se=H.instanceMatrix),se==="instanceColor"&&H.instanceColor&&(Se=H.instanceColor)),Se!==void 0){const I=Se.normalized,j=Se.itemSize,ge=e.get(Se);if(ge===void 0)continue;const Ee=ge.buffer,Ue=ge.type,ie=ge.bytesPerElement,ve=Ue===r.INT||Ue===r.UNSIGNED_INT||Se.gpuType===_0;if(Se.isInterleavedBufferAttribute){const be=Se.data,Fe=be.stride,Ze=Se.offset;if(be.isInstancedInterleavedBuffer){for(let Je=0;Je<fe.locationSize;Je++)M(fe.location+Je,be.meshPerAttribute);H.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Je=0;Je<fe.locationSize;Je++)S(fe.location+Je);r.bindBuffer(r.ARRAY_BUFFER,Ee);for(let Je=0;Je<fe.locationSize;Je++)D(fe.location+Je,j/fe.locationSize,Ue,I,Fe*ie,(Ze+j/fe.locationSize*Je)*ie,ve)}else{if(Se.isInstancedBufferAttribute){for(let be=0;be<fe.locationSize;be++)M(fe.location+be,Se.meshPerAttribute);H.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let be=0;be<fe.locationSize;be++)S(fe.location+be);r.bindBuffer(r.ARRAY_BUFFER,Ee);for(let be=0;be<fe.locationSize;be++)D(fe.location+be,j/fe.locationSize,Ue,I,j*ie,j/fe.locationSize*be*ie,ve)}}else if(F!==void 0){const I=F[se];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(fe.location,I);break;case 3:r.vertexAttrib3fv(fe.location,I);break;case 4:r.vertexAttrib4fv(fe.location,I);break;default:r.vertexAttrib1fv(fe.location,I)}}}}R()}function N(){w();for(const H in a){const q=a[H];for(const K in q){const ee=q[K];for(const Z in ee){const B=ee[Z];for(const F in B)g(B[F].object),delete B[F];delete ee[Z]}}delete a[H]}}function P(H){if(a[H.id]===void 0)return;const q=a[H.id];for(const K in q){const ee=q[K];for(const Z in ee){const B=ee[Z];for(const F in B)g(B[F].object),delete B[F];delete ee[Z]}}delete a[H.id]}function O(H){for(const q in a){const K=a[q];for(const ee in K){const Z=K[ee];if(Z[H.id]===void 0)continue;const B=Z[H.id];for(const F in B)g(B[F].object),delete B[F];delete Z[H.id]}}}function A(H){for(const q in a){const K=a[q],ee=H.isInstancedMesh===!0?H.id:0,Z=K[ee];if(Z!==void 0){for(const B in Z){const F=Z[B];for(const se in F)g(F[se].object),delete F[se];delete Z[B]}delete K[ee],Object.keys(K).length===0&&delete a[q]}}}function w(){J(),c=!0,l!==o&&(l=o,d(l.object))}function J(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:w,resetDefaultState:J,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfObject:A,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:S,disableUnusedAttributes:R}}function p3(r,e,n){let a;function o(d){a=d}function l(d,g){r.drawArrays(a,d,g),n.update(g,a,1)}function c(d,g,v){v!==0&&(r.drawArraysInstanced(a,d,g,v),n.update(g,a,v))}function f(d,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,v);let x=0;for(let y=0;y<v;y++)x+=g[y];n.update(x,a,1)}function p(d,g,v,_){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<d.length;y++)c(d[y],g[y],_[y]);else{x.multiDrawArraysInstancedWEBGL(a,d,0,g,0,_,0,v);let y=0;for(let T=0;T<v;T++)y+=g[T]*_[T];n.update(y,a,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function m3(r,e,n,a){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==ua&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const A=O===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Un&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Aa&&!A)}function p(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(st("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),M=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:y,maxTextureSize:T,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:R,maxVaryings:D,maxFragmentUniforms:C,maxSamples:N,samples:P}}function g3(r){const e=this;let n=null,a=0,o=!1,l=!1;const c=new Ns,f=new ht,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||o;return o=_,a=v.length,x},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,x){const y=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,M=r.get(v);if(!o||y===null||y.length===0||l&&!S)l?g(null):d();else{const R=l?0:a,D=R*4;let C=M.clippingState||null;p.value=C,C=g(y,_,D,x);for(let N=0;N!==D;++N)C[N]=n[N];M.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=R}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(v,_,x,y){const T=v!==null?v.length:0;let S=null;if(T!==0){if(S=p.value,y!==!0||S===null){const M=x+T*4,R=_.matrixWorldInverse;f.getNormalMatrix(R),(S===null||S.length<M)&&(S=new Float32Array(M));for(let D=0,C=x;D!==T;++D,C+=4)c.copy(v[D]).applyMatrix4(R,f),c.normal.toArray(S,C),S[C+3]=c.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}const Kr=4,lS=[.125,.215,.35,.446,.526,.582],Ps=20,_3=256,lu=new Yf,uS=new Ft;let zp=null,Ip=0,Fp=0,Hp=!1;const v3=new oe;class cS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,l={}){const{size:c=256,position:f=v3}=l;zp=this._renderer.getRenderTarget(),Ip=this._renderer.getActiveCubeFace(),Fp=this._renderer.getActiveMipmapLevel(),Hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zp,Ip,Fp),this._renderer.xr.enabled=Hp,e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===il?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zp=this._renderer.getRenderTarget(),Ip=this._renderer.getActiveCubeFace(),Fp=this._renderer.getActiveMipmapLevel(),Hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:An,minFilter:An,generateMipmaps:!1,type:ur,format:ua,colorSpace:is,depthBuffer:!1},o=fS(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fS(e,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=x3(l)),this._blurMaterial=M3(l,e,n),this._ggxMaterial=S3(l,e,n)}return o}_compileMaterial(e){const n=new ha(new Da,e);this._renderer.compile(n,lu)}_sceneToCubeUV(e,n,a,o,l){const p=new ji(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(uS),v.toneMapping=ca,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ha(new Nu,new ny({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let M=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,M=!0):(S.color.copy(uS),M=!0);for(let D=0;D<6;D++){const C=D%3;C===0?(p.up.set(0,d[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+g[D],l.y,l.z)):C===1?(p.up.set(0,0,d[D]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+g[D],l.z)):(p.up.set(0,d[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+g[D]));const N=this._cubeSize;Go(o,C*N,D>2?N:0,N,N),v.setRenderTarget(o),M&&v.render(T,p),v.render(e,p)}v.toneMapping=x,v.autoClear=_,e.background=R}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===Vs||e.mapping===il;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=dS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hS());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;Go(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,lu)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const p=c.uniforms,d=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=0+d*1.25,x=v*_,{_lodMax:y}=this,T=this._sizeLods[a],S=3*T*(a>y-Kr?a-y+Kr:0),M=4*(this._cubeSize-T);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=y-n,Go(l,S,M,3*T,2*T),o.setRenderTarget(l),o.render(f,lu),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=y-a,Go(e,S,M,3*T,2*T),o.setRenderTarget(e),o.render(f,lu)}_blur(e,n,a,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,a,o,"latitudinal",l),this._halfBlur(c,e,a,a,o,"longitudinal",l)}_halfBlur(e,n,a,o,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=d;const _=d.uniforms,x=this._sizeLods[a]-1,y=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Ps-1),T=l/y,S=isFinite(l)?1+Math.floor(g*T):Ps;S>Ps&&st(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ps}`);const M=[];let R=0;for(let O=0;O<Ps;++O){const A=O/T,w=Math.exp(-A*A/2);M.push(w),O===0?R+=w:O<S&&(R+=2*w)}for(let O=0;O<M.length;O++)M[O]=M[O]/R;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=M,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:D}=this;_.dTheta.value=y,_.mipInt.value=D-a;const C=this._sizeLods[o],N=3*C*(o>D-Kr?o-D+Kr:0),P=4*(this._cubeSize-C);Go(n,N,P,3*C,2*C),p.setRenderTarget(n),p.render(v,lu)}}function x3(r){const e=[],n=[],a=[];let o=r;const l=r-Kr+1+lS.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let p=1/f;c>r-Kr?p=lS[c-r+Kr-1]:c===0&&(p=0),n.push(p);const d=1/(f-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,y=6,T=3,S=2,M=1,R=new Float32Array(T*y*x),D=new Float32Array(S*y*x),C=new Float32Array(M*y*x);for(let P=0;P<x;P++){const O=P%3*2/3-1,A=P>2?0:-1,w=[O,A,0,O+2/3,A,0,O+2/3,A+1,0,O,A,0,O+2/3,A+1,0,O,A+1,0];R.set(w,T*y*P),D.set(_,S*y*P);const J=[P,P,P,P,P,P];C.set(J,M*y*P)}const N=new Da;N.setAttribute("position",new Qi(R,T)),N.setAttribute("uv",new Qi(D,S)),N.setAttribute("faceIndex",new Qi(C,M)),a.push(new ha(N,null)),o>Kr&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function fS(r,e,n){const a=new zn(r,e,n);return a.texture.mapping=Wf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Go(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function S3(r,e,n){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function M3(r,e,n){const a=new Float32Array(Ps),o=new oe(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:qf(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function hS(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qf(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function dS(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function qf(){return`

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
	`}class uy extends zn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new ay(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Nu(5,5,5),l=new Fn({name:"CubemapFromEquirect",uniforms:ol(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Bn,blending:si});l.uniforms.tEquirect.value=n;const c=new ha(o,l),f=n.minFilter;return n.minFilter===zs&&(n.minFilter=An),new CA(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,a,o);e.setRenderTarget(l)}}function y3(r){let e=new WeakMap,n=new WeakMap,a=null;function o(_,x=!1){return _==null?null:x?c(_):l(_)}function l(_){if(_&&_.isTexture){const x=_.mapping;if(x===hp||x===dp)if(e.has(_)){const y=e.get(_).texture;return f(y,_.mapping)}else{const y=_.image;if(y&&y.height>0){const T=new uy(y.height);return T.fromEquirectangularTexture(r,_),e.set(_,T),_.addEventListener("dispose",d),f(T.texture,_.mapping)}else return null}}return _}function c(_){if(_&&_.isTexture){const x=_.mapping,y=x===hp||x===dp,T=x===Vs||x===il;if(y||T){let S=n.get(_);const M=S!==void 0?S.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==M)return a===null&&(a=new cS(r)),S=y?a.fromEquirectangular(_,S):a.fromCubemap(_,S),S.texture.pmremVersion=_.pmremVersion,n.set(_,S),S.texture;if(S!==void 0)return S.texture;{const R=_.image;return y&&R&&R.height>0||T&&R&&p(R)?(a===null&&(a=new cS(r)),S=y?a.fromEquirectangular(_):a.fromCubemap(_),S.texture.pmremVersion=_.pmremVersion,n.set(_,S),_.addEventListener("dispose",g),S.texture):null}}}return _}function f(_,x){return x===hp?_.mapping=Vs:x===dp&&(_.mapping=il),_}function p(_){let x=0;const y=6;for(let T=0;T<y;T++)_[T]!==void 0&&x++;return x===y}function d(_){const x=_.target;x.removeEventListener("dispose",d);const y=e.get(x);y!==void 0&&(e.delete(x),y.dispose())}function g(_){const x=_.target;x.removeEventListener("dispose",g);const y=n.get(x);y!==void 0&&(n.delete(x),y.dispose())}function v(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:v}}function E3(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Gf("WebGLRenderer: "+a+" extension not supported."),o}}}function T3(r,e,n,a){const o={},l=new WeakMap;function c(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const y in _.attributes)e.remove(_.attributes[y]);_.removeEventListener("dispose",c),delete o[_.id];const x=l.get(_);x&&(e.remove(x),l.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(v,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,n.memory.geometries++),_}function p(v){const _=v.attributes;for(const x in _)e.update(_[x],r.ARRAY_BUFFER)}function d(v){const _=[],x=v.index,y=v.attributes.position;let T=0;if(y===void 0)return;if(x!==null){const R=x.array;T=x.version;for(let D=0,C=R.length;D<C;D+=3){const N=R[D+0],P=R[D+1],O=R[D+2];_.push(N,P,P,O,O,N)}}else{const R=y.array;T=y.version;for(let D=0,C=R.length/3-1;D<C;D+=3){const N=D+0,P=D+1,O=D+2;_.push(N,P,P,O,O,N)}}const S=new(y.count>=65535?ty:ey)(_,1);S.version=T;const M=l.get(v);M&&e.remove(M),l.set(v,S)}function g(v){const _=l.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&d(v)}else d(v);return l.get(v)}return{get:f,update:p,getWireframeAttribute:g}}function b3(r,e,n){let a;function o(_){a=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function p(_,x){r.drawElements(a,x,l,_*c),n.update(x,a,1)}function d(_,x,y){y!==0&&(r.drawElementsInstanced(a,x,l,_*c,y),n.update(x,a,y))}function g(_,x,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,_,0,y);let S=0;for(let M=0;M<y;M++)S+=x[M];n.update(S,a,1)}function v(_,x,y,T){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<_.length;M++)d(_[M]/c,x[M],T[M]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,l,_,0,T,0,y);let M=0;for(let R=0;R<y;R++)M+=x[R]*T[R];n.update(M,a,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function A3(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case r.TRIANGLES:n.triangles+=f*(l/3);break;case r.LINES:n.lines+=f*(l/2);break;case r.LINE_STRIP:n.lines+=f*(l-1);break;case r.LINE_LOOP:n.lines+=f*l;break;case r.POINTS:n.points+=f*l;break;default:Pt("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function R3(r,e,n){const a=new WeakMap,o=new cn;function l(c,f,p){const d=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(f);if(_===void 0||_.count!==v){let J=function(){A.dispose(),a.delete(f),f.removeEventListener("dispose",J)};var x=J;_!==void 0&&_.texture.dispose();const y=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let C=0;y===!0&&(C=1),T===!0&&(C=2),S===!0&&(C=3);let N=f.attributes.position.count*C,P=1;N>e.maxTextureSize&&(P=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const O=new Float32Array(N*P*4*v),A=new QM(O,N,P,v);A.type=Aa,A.needsUpdate=!0;const w=C*4;for(let H=0;H<v;H++){const q=M[H],K=R[H],ee=D[H],Z=N*P*4*H;for(let B=0;B<q.count;B++){const F=B*w;y===!0&&(o.fromBufferAttribute(q,B),O[Z+F+0]=o.x,O[Z+F+1]=o.y,O[Z+F+2]=o.z,O[Z+F+3]=0),T===!0&&(o.fromBufferAttribute(K,B),O[Z+F+4]=o.x,O[Z+F+5]=o.y,O[Z+F+6]=o.z,O[Z+F+7]=0),S===!0&&(o.fromBufferAttribute(ee,B),O[Z+F+8]=o.x,O[Z+F+9]=o.y,O[Z+F+10]=o.z,O[Z+F+11]=ee.itemSize===4?o.w:1)}}_={count:v,texture:A,size:new et(N,P)},a.set(f,_),f.addEventListener("dispose",J)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",c.morphTexture,n);else{let y=0;for(let S=0;S<d.length;S++)y+=d[S];const T=f.morphTargetsRelative?1:1-y;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",d)}p.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:l}}function C3(r,e,n,a,o){let l=new WeakMap;function c(d){const g=o.render.frame,v=d.geometry,_=e.get(d,v);if(l.get(_)!==g&&(e.update(_),l.set(_,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),l.get(d)!==g&&(n.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,r.ARRAY_BUFFER),l.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;l.get(x)!==g&&(x.update(),l.set(x,g))}return _}function f(){l=new WeakMap}function p(d){const g=d.target;g.removeEventListener("dispose",p),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:c,dispose:f}}const w3={[PM]:"LINEAR_TONE_MAPPING",[BM]:"REINHARD_TONE_MAPPING",[zM]:"CINEON_TONE_MAPPING",[IM]:"ACES_FILMIC_TONE_MAPPING",[HM]:"AGX_TONE_MAPPING",[GM]:"NEUTRAL_TONE_MAPPING",[FM]:"CUSTOM_TONE_MAPPING"};function D3(r,e,n,a,o){const l=new zn(e,n,{type:r,depthBuffer:a,stencilBuffer:o}),c=new zn(e,n,{type:ur,depthBuffer:!1,stencilBuffer:!1}),f=new Da;f.setAttribute("position",new rr([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new rr([0,2,0,0,2,0],2));const p=new bA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ha(f,p),g=new Yf(-1,1,1,-1,0,1);let v=null,_=null,x=!1,y,T=null,S=[],M=!1;this.setSize=function(R,D){l.setSize(R,D),c.setSize(R,D);for(let C=0;C<S.length;C++){const N=S[C];N.setSize&&N.setSize(R,D)}},this.setEffects=function(R){S=R,M=S.length>0&&S[0].isRenderPass===!0;const D=l.width,C=l.height;for(let N=0;N<S.length;N++){const P=S[N];P.setSize&&P.setSize(D,C)}},this.begin=function(R,D){if(x||R.toneMapping===ca&&S.length===0)return!1;if(T=D,D!==null){const C=D.width,N=D.height;(l.width!==C||l.height!==N)&&this.setSize(C,N)}return M===!1&&R.setRenderTarget(l),y=R.toneMapping,R.toneMapping=ca,!0},this.hasRenderPass=function(){return M},this.end=function(R,D){R.toneMapping=y,x=!0;let C=l,N=c;for(let P=0;P<S.length;P++){const O=S[P];if(O.enabled!==!1&&(O.render(R,N,C,D),O.needsSwap!==!1)){const A=C;C=N,N=A}}if(v!==R.outputColorSpace||_!==R.toneMapping){v=R.outputColorSpace,_=R.toneMapping,p.defines={},Dt.getTransfer(v)===Xt&&(p.defines.SRGB_TRANSFER="");const P=w3[_];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,R.setRenderTarget(T),R.render(d,g),T=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),p.dispose()}}const cy=new Yn,Zm=new sl(1,1),fy=new QM,hy=new nA,dy=new ay,pS=[],mS=[],gS=new Float32Array(16),_S=new Float32Array(9),vS=new Float32Array(4);function fl(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let l=pS[o];if(l===void 0&&(l=new Float32Array(o),pS[o]=l),e!==0){a.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=n,r[c].toArray(l,f)}return l}function Ln(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function Nn(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function jf(r,e){let n=mS[e];n===void 0&&(n=new Int32Array(e),mS[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function U3(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function L3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ln(n,e))return;r.uniform2fv(this.addr,e),Nn(n,e)}}function N3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ln(n,e))return;r.uniform3fv(this.addr,e),Nn(n,e)}}function O3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ln(n,e))return;r.uniform4fv(this.addr,e),Nn(n,e)}}function P3(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Ln(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Nn(n,e)}else{if(Ln(n,a))return;vS.set(a),r.uniformMatrix2fv(this.addr,!1,vS),Nn(n,a)}}function B3(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Ln(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Nn(n,e)}else{if(Ln(n,a))return;_S.set(a),r.uniformMatrix3fv(this.addr,!1,_S),Nn(n,a)}}function z3(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Ln(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Nn(n,e)}else{if(Ln(n,a))return;gS.set(a),r.uniformMatrix4fv(this.addr,!1,gS),Nn(n,a)}}function I3(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function F3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ln(n,e))return;r.uniform2iv(this.addr,e),Nn(n,e)}}function H3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ln(n,e))return;r.uniform3iv(this.addr,e),Nn(n,e)}}function G3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ln(n,e))return;r.uniform4iv(this.addr,e),Nn(n,e)}}function V3(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function k3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ln(n,e))return;r.uniform2uiv(this.addr,e),Nn(n,e)}}function X3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ln(n,e))return;r.uniform3uiv(this.addr,e),Nn(n,e)}}function W3(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ln(n,e))return;r.uniform4uiv(this.addr,e),Nn(n,e)}}function Y3(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Zm.compareFunction=n.isReversedDepthBuffer()?T0:E0,l=Zm):l=cy,n.setTexture2D(e||l,o)}function q3(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||hy,o)}function j3(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||dy,o)}function Z3(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||fy,o)}function K3(r){switch(r){case 5126:return U3;case 35664:return L3;case 35665:return N3;case 35666:return O3;case 35674:return P3;case 35675:return B3;case 35676:return z3;case 5124:case 35670:return I3;case 35667:case 35671:return F3;case 35668:case 35672:return H3;case 35669:case 35673:return G3;case 5125:return V3;case 36294:return k3;case 36295:return X3;case 36296:return W3;case 35678:case 36198:case 36298:case 36306:case 35682:return Y3;case 35679:case 36299:case 36307:return q3;case 35680:case 36300:case 36308:case 36293:return j3;case 36289:case 36303:case 36311:case 36292:return Z3}}function Q3(r,e){r.uniform1fv(this.addr,e)}function J3(r,e){const n=fl(e,this.size,2);r.uniform2fv(this.addr,n)}function $3(r,e){const n=fl(e,this.size,3);r.uniform3fv(this.addr,n)}function eC(r,e){const n=fl(e,this.size,4);r.uniform4fv(this.addr,n)}function tC(r,e){const n=fl(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function nC(r,e){const n=fl(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function iC(r,e){const n=fl(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function aC(r,e){r.uniform1iv(this.addr,e)}function rC(r,e){r.uniform2iv(this.addr,e)}function sC(r,e){r.uniform3iv(this.addr,e)}function oC(r,e){r.uniform4iv(this.addr,e)}function lC(r,e){r.uniform1uiv(this.addr,e)}function uC(r,e){r.uniform2uiv(this.addr,e)}function cC(r,e){r.uniform3uiv(this.addr,e)}function fC(r,e){r.uniform4uiv(this.addr,e)}function hC(r,e,n){const a=this.cache,o=e.length,l=jf(n,o);Ln(a,l)||(r.uniform1iv(this.addr,l),Nn(a,l));let c;this.type===r.SAMPLER_2D_SHADOW?c=Zm:c=cy;for(let f=0;f!==o;++f)n.setTexture2D(e[f]||c,l[f])}function dC(r,e,n){const a=this.cache,o=e.length,l=jf(n,o);Ln(a,l)||(r.uniform1iv(this.addr,l),Nn(a,l));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||hy,l[c])}function pC(r,e,n){const a=this.cache,o=e.length,l=jf(n,o);Ln(a,l)||(r.uniform1iv(this.addr,l),Nn(a,l));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||dy,l[c])}function mC(r,e,n){const a=this.cache,o=e.length,l=jf(n,o);Ln(a,l)||(r.uniform1iv(this.addr,l),Nn(a,l));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||fy,l[c])}function gC(r){switch(r){case 5126:return Q3;case 35664:return J3;case 35665:return $3;case 35666:return eC;case 35674:return tC;case 35675:return nC;case 35676:return iC;case 5124:case 35670:return aC;case 35667:case 35671:return rC;case 35668:case 35672:return sC;case 35669:case 35673:return oC;case 5125:return lC;case 36294:return uC;case 36295:return cC;case 36296:return fC;case 35678:case 36198:case 36298:case 36306:case 35682:return hC;case 35679:case 36299:case 36307:return dC;case 35680:case 36300:case 36308:case 36293:return pC;case 36289:case 36303:case 36311:case 36292:return mC}}class _C{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=K3(n.type)}}class vC{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gC(n.type)}}class xC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,n[f.id],a)}}}const Gp=/(\w+)(\])?(\[|\.)?/g;function xS(r,e){r.seq.push(e),r.map[e.id]=e}function SC(r,e,n){const a=r.name,o=a.length;for(Gp.lastIndex=0;;){const l=Gp.exec(a),c=Gp.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===o){xS(n,d===void 0?new _C(f,r,e):new vC(f,r,e));break}else{let v=n.map[f];v===void 0&&(v=new xC(f),xS(n,v)),n=v}}}class wf{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const f=e.getActiveUniform(n,c),p=e.getUniformLocation(n,f.name);SC(f,p,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,a,o){const l=this.map[n];l!==void 0&&l.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in n&&a.push(c)}return a}}function SS(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const MC=37297;let yC=0;function EC(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=o;c<l;c++){const f=c+1;a.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const MS=new ht;function TC(r){Dt._getMatrix(MS,Dt.workingColorSpace,r);const e=`mat3( ${MS.elements.map(n=>n.toFixed(4))} )`;switch(Dt.getTransfer(r)){case If:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function yS(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+EC(r.getShaderSource(e),f)}else return l}function bC(r,e){const n=TC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const AC={[PM]:"Linear",[BM]:"Reinhard",[zM]:"Cineon",[IM]:"ACESFilmic",[HM]:"AgX",[GM]:"Neutral",[FM]:"Custom"};function RC(r,e){const n=AC[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vf=new oe;function CC(){Dt.getLuminanceCoefficients(vf);const r=vf.x.toFixed(4),e=vf.y.toFixed(4),n=vf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pu).join(`
`)}function DC(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function UC(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const l=r.getActiveAttrib(e,o),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return n}function pu(r){return r!==""}function ES(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function TS(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Km(r){return r.replace(LC,OC)}const NC=new Map;function OC(r,e){let n=pt[e];if(n===void 0){const a=NC.get(e);if(a!==void 0)n=pt[a],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Km(n)}const PC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bS(r){return r.replace(PC,BC)}function BC(r,e,n,a){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function AS(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const zC={[Tf]:"SHADOWMAP_TYPE_PCF",[du]:"SHADOWMAP_TYPE_VSM"};function IC(r){return zC[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const FC={[Vs]:"ENVMAP_TYPE_CUBE",[il]:"ENVMAP_TYPE_CUBE",[Wf]:"ENVMAP_TYPE_CUBE_UV"};function HC(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":FC[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const GC={[il]:"ENVMAP_MODE_REFRACTION"};function VC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":GC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kC={[OM]:"ENVMAP_BLENDING_MULTIPLY",[Sb]:"ENVMAP_BLENDING_MIX",[Mb]:"ENVMAP_BLENDING_ADD"};function XC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":kC[r.combine]||"ENVMAP_BLENDING_NONE"}function WC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function YC(r,e,n,a){const o=r.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=IC(n),d=HC(n),g=VC(n),v=XC(n),_=WC(n),x=wC(n),y=DC(l),T=o.createProgram();let S,M,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(pu).join(`
`),S.length>0&&(S+=`
`),M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(pu).join(`
`),M.length>0&&(M+=`
`)):(S=[AS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pu).join(`
`),M=[AS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ca?"#define TONE_MAPPING":"",n.toneMapping!==ca?pt.tonemapping_pars_fragment:"",n.toneMapping!==ca?RC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,bC("linearToOutputTexel",n.outputColorSpace),CC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(pu).join(`
`)),c=Km(c),c=ES(c,n),c=TS(c,n),f=Km(f),f=ES(f,n),f=TS(f,n),c=bS(c),f=bS(f),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,M=["#define varying in",n.glslVersion===Gx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const D=R+S+c,C=R+M+f,N=SS(o,o.VERTEX_SHADER,D),P=SS(o,o.FRAGMENT_SHADER,C);o.attachShader(T,N),o.attachShader(T,P),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function O(H){if(r.debug.checkShaderErrors){const q=o.getProgramInfoLog(T)||"",K=o.getShaderInfoLog(N)||"",ee=o.getShaderInfoLog(P)||"",Z=q.trim(),B=K.trim(),F=ee.trim();let se=!0,fe=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(se=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,N,P);else{const Se=yS(o,N,"vertex"),I=yS(o,P,"fragment");Pt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Z+`
`+Se+`
`+I)}else Z!==""?st("WebGLProgram: Program Info Log:",Z):(B===""||F==="")&&(fe=!1);fe&&(H.diagnostics={runnable:se,programLog:Z,vertexShader:{log:B,prefix:S},fragmentShader:{log:F,prefix:M}})}o.deleteShader(N),o.deleteShader(P),A=new wf(o,T),w=UC(o,T)}let A;this.getUniforms=function(){return A===void 0&&O(this),A};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let J=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=o.getProgramParameter(T,MC)),J},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yC++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=P,this}let qC=0;class jC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new ZC(e),n.set(e,a)),a}}class ZC{constructor(e){this.id=qC++,this.code=e,this.usedTimes=0}}function KC(r,e,n,a,o,l){const c=new JM,f=new jC,p=new Set,d=[],g=new Map,v=a.logarithmicDepthBuffer;let _=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(A){return p.add(A),A===0?"uv":`uv${A}`}function T(A,w,J,H,q){const K=H.fog,ee=q.geometry,Z=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,B=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,F=e.get(A.envMap||Z,B),se=F&&F.mapping===Wf?F.image.height:null,fe=x[A.type];A.precision!==null&&(_=a.getMaxPrecision(A.precision),_!==A.precision&&st("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const Se=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,I=Se!==void 0?Se.length:0;let j=0;ee.morphAttributes.position!==void 0&&(j=1),ee.morphAttributes.normal!==void 0&&(j=2),ee.morphAttributes.color!==void 0&&(j=3);let ge,Ee,Ue,ie;if(fe){const wt=ya[fe];ge=wt.vertexShader,Ee=wt.fragmentShader}else ge=A.vertexShader,Ee=A.fragmentShader,f.update(A),Ue=f.getVertexShaderID(A),ie=f.getFragmentShaderID(A);const ve=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),Fe=q.isInstancedMesh===!0,Ze=q.isBatchedMesh===!0,Je=!!A.map,$t=!!A.matcap,mt=!!F,dt=!!A.aoMap,Ct=!!A.lightMap,at=!!A.bumpMap,Ht=!!A.normalMap,k=!!A.displacementMap,Zt=!!A.emissiveMap,_t=!!A.metalnessMap,Tt=!!A.roughnessMap,Ge=A.anisotropy>0,z=A.clearcoat>0,b=A.dispersion>0,G=A.iridescence>0,de=A.sheen>0,me=A.transmission>0,ue=Ge&&!!A.anisotropyMap,Be=z&&!!A.clearcoatMap,Ae=z&&!!A.clearcoatNormalMap,Xe=z&&!!A.clearcoatRoughnessMap,Ke=G&&!!A.iridescenceMap,ye=G&&!!A.iridescenceThicknessMap,Me=de&&!!A.sheenColorMap,Le=de&&!!A.sheenRoughnessMap,we=!!A.specularMap,Ne=!!A.specularColorMap,tt=!!A.specularIntensityMap,Y=me&&!!A.transmissionMap,Ce=me&&!!A.thicknessMap,Re=!!A.gradientMap,ze=!!A.alphaMap,Te=A.alphaTest>0,he=!!A.alphaHash,He=!!A.extensions;let it=ca;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(it=r.toneMapping);const Gt={shaderID:fe,shaderType:A.type,shaderName:A.name,vertexShader:ge,fragmentShader:Ee,defines:A.defines,customVertexShaderID:Ue,customFragmentShaderID:ie,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:Ze,batchingColor:Ze&&q._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&q.instanceColor!==null,instancingMorph:Fe&&q.morphTexture!==null,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:is,alphaToCoverage:!!A.alphaToCoverage,map:Je,matcap:$t,envMap:mt,envMapMode:mt&&F.mapping,envMapCubeUVHeight:se,aoMap:dt,lightMap:Ct,bumpMap:at,normalMap:Ht,displacementMap:k,emissiveMap:Zt,normalMapObjectSpace:Ht&&A.normalMapType===Tb,normalMapTangentSpace:Ht&&A.normalMapType===Eb,metalnessMap:_t,roughnessMap:Tt,anisotropy:Ge,anisotropyMap:ue,clearcoat:z,clearcoatMap:Be,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Xe,dispersion:b,iridescence:G,iridescenceMap:Ke,iridescenceThicknessMap:ye,sheen:de,sheenColorMap:Me,sheenRoughnessMap:Le,specularMap:we,specularColorMap:Ne,specularIntensityMap:tt,transmission:me,transmissionMap:Y,thicknessMap:Ce,gradientMap:Re,opaque:A.transparent===!1&&A.blending===jo&&A.alphaToCoverage===!1,alphaMap:ze,alphaTest:Te,alphaHash:he,combine:A.combine,mapUv:Je&&y(A.map.channel),aoMapUv:dt&&y(A.aoMap.channel),lightMapUv:Ct&&y(A.lightMap.channel),bumpMapUv:at&&y(A.bumpMap.channel),normalMapUv:Ht&&y(A.normalMap.channel),displacementMapUv:k&&y(A.displacementMap.channel),emissiveMapUv:Zt&&y(A.emissiveMap.channel),metalnessMapUv:_t&&y(A.metalnessMap.channel),roughnessMapUv:Tt&&y(A.roughnessMap.channel),anisotropyMapUv:ue&&y(A.anisotropyMap.channel),clearcoatMapUv:Be&&y(A.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&y(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&y(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&y(A.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&y(A.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&y(A.sheenColorMap.channel),sheenRoughnessMapUv:Le&&y(A.sheenRoughnessMap.channel),specularMapUv:we&&y(A.specularMap.channel),specularColorMapUv:Ne&&y(A.specularColorMap.channel),specularIntensityMapUv:tt&&y(A.specularIntensityMap.channel),transmissionMapUv:Y&&y(A.transmissionMap.channel),thicknessMapUv:Ce&&y(A.thicknessMap.channel),alphaMapUv:ze&&y(A.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ht||Ge),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ee.attributes.uv&&(Je||ze),fog:!!K,useFog:A.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||ee.attributes.normal===void 0&&Ht===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:be,skinning:q.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:j,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&J.length>0,shadowMapType:r.shadowMap.type,toneMapping:it,decodeVideoTexture:Je&&A.map.isVideoTexture===!0&&Dt.getTransfer(A.map.colorSpace)===Xt,decodeVideoTextureEmissive:Zt&&A.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(A.emissiveMap.colorSpace)===Xt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ui,flipSided:A.side===Bn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:He&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&A.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Gt.vertexUv1s=p.has(1),Gt.vertexUv2s=p.has(2),Gt.vertexUv3s=p.has(3),p.clear(),Gt}function S(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const J in A.defines)w.push(J),w.push(A.defines[J]);return A.isRawShaderMaterial===!1&&(M(w,A),R(w,A),w.push(r.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function M(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function R(A,w){c.disableAll(),w.instancing&&c.enable(0),w.instancingColor&&c.enable(1),w.instancingMorph&&c.enable(2),w.matcap&&c.enable(3),w.envMap&&c.enable(4),w.normalMapObjectSpace&&c.enable(5),w.normalMapTangentSpace&&c.enable(6),w.clearcoat&&c.enable(7),w.iridescence&&c.enable(8),w.alphaTest&&c.enable(9),w.vertexColors&&c.enable(10),w.vertexAlphas&&c.enable(11),w.vertexUv1s&&c.enable(12),w.vertexUv2s&&c.enable(13),w.vertexUv3s&&c.enable(14),w.vertexTangents&&c.enable(15),w.anisotropy&&c.enable(16),w.alphaHash&&c.enable(17),w.batching&&c.enable(18),w.dispersion&&c.enable(19),w.batchingColor&&c.enable(20),w.gradientMap&&c.enable(21),A.push(c.mask),c.disableAll(),w.fog&&c.enable(0),w.useFog&&c.enable(1),w.flatShading&&c.enable(2),w.logarithmicDepthBuffer&&c.enable(3),w.reversedDepthBuffer&&c.enable(4),w.skinning&&c.enable(5),w.morphTargets&&c.enable(6),w.morphNormals&&c.enable(7),w.morphColors&&c.enable(8),w.premultipliedAlpha&&c.enable(9),w.shadowMapEnabled&&c.enable(10),w.doubleSided&&c.enable(11),w.flipSided&&c.enable(12),w.useDepthPacking&&c.enable(13),w.dithering&&c.enable(14),w.transmission&&c.enable(15),w.sheen&&c.enable(16),w.opaque&&c.enable(17),w.pointsUvs&&c.enable(18),w.decodeVideoTexture&&c.enable(19),w.decodeVideoTextureEmissive&&c.enable(20),w.alphaToCoverage&&c.enable(21),A.push(c.mask)}function D(A){const w=x[A.type];let J;if(w){const H=ya[w];J=yA.clone(H.uniforms)}else J=A.uniforms;return J}function C(A,w){let J=g.get(w);return J!==void 0?++J.usedTimes:(J=new YC(r,w,A,o),d.push(J),g.set(w,J)),J}function N(A){if(--A.usedTimes===0){const w=d.indexOf(A);d[w]=d[d.length-1],d.pop(),g.delete(A.cacheKey),A.destroy()}}function P(A){f.remove(A)}function O(){f.dispose()}return{getParameters:T,getProgramCacheKey:S,getUniforms:D,acquireProgram:C,releaseProgram:N,releaseShaderCache:P,programs:d,dispose:O}}function QC(){let r=new WeakMap;function e(c){return r.has(c)}function n(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function a(c){r.delete(c)}function o(c,f,p){r.get(c)[f]=p}function l(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:l}}function JC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function RS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function CS(){const r=[];let e=0;const n=[],a=[],o=[];function l(){e=0,n.length=0,a.length=0,o.length=0}function c(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function f(_,x,y,T,S,M){let R=r[e];return R===void 0?(R={id:_.id,object:_,geometry:x,material:y,materialVariant:c(_),groupOrder:T,renderOrder:_.renderOrder,z:S,group:M},r[e]=R):(R.id=_.id,R.object=_,R.geometry=x,R.material=y,R.materialVariant=c(_),R.groupOrder=T,R.renderOrder=_.renderOrder,R.z=S,R.group=M),e++,R}function p(_,x,y,T,S,M){const R=f(_,x,y,T,S,M);y.transmission>0?a.push(R):y.transparent===!0?o.push(R):n.push(R)}function d(_,x,y,T,S,M){const R=f(_,x,y,T,S,M);y.transmission>0?a.unshift(R):y.transparent===!0?o.unshift(R):n.unshift(R)}function g(_,x){n.length>1&&n.sort(_||JC),a.length>1&&a.sort(x||RS),o.length>1&&o.sort(x||RS)}function v(){for(let _=e,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:l,push:p,unshift:d,finish:v,sort:g}}function $C(){let r=new WeakMap;function e(a,o){const l=r.get(a);let c;return l===void 0?(c=new CS,r.set(a,[c])):o>=l.length?(c=new CS,l.push(c)):c=l[o],c}function n(){r=new WeakMap}return{get:e,dispose:n}}function ew(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new oe,color:new Ft};break;case"SpotLight":n={position:new oe,direction:new oe,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new oe,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new oe,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":n={color:new Ft,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return r[e.id]=n,n}}}function tw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let nw=0;function iw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function aw(r){const e=new ew,n=tw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new oe);const o=new oe,l=new Rn,c=new Rn;function f(d){let g=0,v=0,_=0;for(let w=0;w<9;w++)a.probe[w].set(0,0,0);let x=0,y=0,T=0,S=0,M=0,R=0,D=0,C=0,N=0,P=0,O=0;d.sort(iw);for(let w=0,J=d.length;w<J;w++){const H=d[w],q=H.color,K=H.intensity,ee=H.distance;let Z=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===rl?Z=H.shadow.map.texture:Z=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=q.r*K,v+=q.g*K,_+=q.b*K;else if(H.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(H.sh.coefficients[B],K);O++}else if(H.isDirectionalLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,se=n.get(H);se.shadowIntensity=F.intensity,se.shadowBias=F.bias,se.shadowNormalBias=F.normalBias,se.shadowRadius=F.radius,se.shadowMapSize=F.mapSize,a.directionalShadow[x]=se,a.directionalShadowMap[x]=Z,a.directionalShadowMatrix[x]=H.shadow.matrix,R++}a.directional[x]=B,x++}else if(H.isSpotLight){const B=e.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(q).multiplyScalar(K),B.distance=ee,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,a.spot[T]=B;const F=H.shadow;if(H.map&&(a.spotLightMap[N]=H.map,N++,F.updateMatrices(H),H.castShadow&&P++),a.spotLightMatrix[T]=F.matrix,H.castShadow){const se=n.get(H);se.shadowIntensity=F.intensity,se.shadowBias=F.bias,se.shadowNormalBias=F.normalBias,se.shadowRadius=F.radius,se.shadowMapSize=F.mapSize,a.spotShadow[T]=se,a.spotShadowMap[T]=Z,C++}T++}else if(H.isRectAreaLight){const B=e.get(H);B.color.copy(q).multiplyScalar(K),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),a.rectArea[S]=B,S++}else if(H.isPointLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const F=H.shadow,se=n.get(H);se.shadowIntensity=F.intensity,se.shadowBias=F.bias,se.shadowNormalBias=F.normalBias,se.shadowRadius=F.radius,se.shadowMapSize=F.mapSize,se.shadowCameraNear=F.camera.near,se.shadowCameraFar=F.camera.far,a.pointShadow[y]=se,a.pointShadowMap[y]=Z,a.pointShadowMatrix[y]=H.shadow.matrix,D++}a.point[y]=B,y++}else if(H.isHemisphereLight){const B=e.get(H);B.skyColor.copy(H.color).multiplyScalar(K),B.groundColor.copy(H.groundColor).multiplyScalar(K),a.hemi[M]=B,M++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pe.LTC_FLOAT_1,a.rectAreaLTC2=Pe.LTC_FLOAT_2):(a.rectAreaLTC1=Pe.LTC_HALF_1,a.rectAreaLTC2=Pe.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const A=a.hash;(A.directionalLength!==x||A.pointLength!==y||A.spotLength!==T||A.rectAreaLength!==S||A.hemiLength!==M||A.numDirectionalShadows!==R||A.numPointShadows!==D||A.numSpotShadows!==C||A.numSpotMaps!==N||A.numLightProbes!==O)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=S,a.point.length=y,a.hemi.length=M,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=C+N-P,a.spotLightMap.length=N,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=O,A.directionalLength=x,A.pointLength=y,A.spotLength=T,A.rectAreaLength=S,A.hemiLength=M,A.numDirectionalShadows=R,A.numPointShadows=D,A.numSpotShadows=C,A.numSpotMaps=N,A.numLightProbes=O,a.version=nw++)}function p(d,g){let v=0,_=0,x=0,y=0,T=0;const S=g.matrixWorldInverse;for(let M=0,R=d.length;M<R;M++){const D=d[M];if(D.isDirectionalLight){const C=a.directional[v];C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),v++}else if(D.isSpotLight){const C=a.spot[x];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),x++}else if(D.isRectAreaLight){const C=a.rectArea[y];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),c.identity(),l.copy(D.matrixWorld),l.premultiply(S),c.extractRotation(l),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),y++}else if(D.isPointLight){const C=a.point[_];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),_++}else if(D.isHemisphereLight){const C=a.hemi[T];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(S),T++}}}return{setup:f,setupView:p,state:a}}function wS(r){const e=new aw(r),n=[],a=[];function o(g){d.camera=g,n.length=0,a.length=0}function l(g){n.push(g)}function c(g){a.push(g)}function f(){e.setup(n)}function p(g){e.setupView(n,g)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function rw(r){let e=new WeakMap;function n(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new wS(r),e.set(o,[f])):l>=c.length?(f=new wS(r),c.push(f)):f=c[l],f}function a(){e=new WeakMap}return{get:n,dispose:a}}const sw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ow=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lw=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],uw=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],DS=new Rn,uu=new oe,Vp=new oe;function cw(r,e,n){let a=new iy;const o=new et,l=new et,c=new cn,f=new AA,p=new RA,d={},g=n.maxTextureSize,v={[lr]:Bn,[Bn]:lr,[Ui]:Ui},_=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:sw,fragmentShader:ow}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const y=new Da;y.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ha(y,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tf;let M=this.type;this.render=function(P,O,A){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===tb&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Tf);const w=r.getRenderTarget(),J=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),q=r.state;q.setBlending(si),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const K=M!==this.type;K&&O.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(Z=>Z.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,Z=P.length;ee<Z;ee++){const B=P[ee],F=B.shadow;if(F===void 0){st("WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const se=F.getFrameExtents();o.multiply(se),l.copy(F.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/se.x),o.x=l.x*se.x,F.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/se.y),o.y=l.y*se.y,F.mapSize.y=l.y));const fe=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=fe,F.map===null||K===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===du){if(B.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new zn(o.x,o.y,{format:rl,type:ur,minFilter:An,magFilter:An,generateMipmaps:!1}),F.map.texture.name=B.name+".shadowMap",F.map.depthTexture=new sl(o.x,o.y,Aa),F.map.depthTexture.name=B.name+".shadowMapDepth",F.map.depthTexture.format=cr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xn,F.map.depthTexture.magFilter=Xn}else B.isPointLight?(F.map=new uy(o.x),F.map.depthTexture=new SA(o.x,fa)):(F.map=new zn(o.x,o.y),F.map.depthTexture=new sl(o.x,o.y,fa)),F.map.depthTexture.name=B.name+".shadowMap",F.map.depthTexture.format=cr,this.type===Tf?(F.map.depthTexture.compareFunction=fe?T0:E0,F.map.depthTexture.minFilter=An,F.map.depthTexture.magFilter=An):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xn,F.map.depthTexture.magFilter=Xn);F.camera.updateProjectionMatrix()}const Se=F.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<Se;I++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,I),r.clear();else{I===0&&(r.setRenderTarget(F.map),r.clear());const j=F.getViewport(I);c.set(l.x*j.x,l.y*j.y,l.x*j.z,l.y*j.w),q.viewport(c)}if(B.isPointLight){const j=F.camera,ge=F.matrix,Ee=B.distance||j.far;Ee!==j.far&&(j.far=Ee,j.updateProjectionMatrix()),uu.setFromMatrixPosition(B.matrixWorld),j.position.copy(uu),Vp.copy(j.position),Vp.add(lw[I]),j.up.copy(uw[I]),j.lookAt(Vp),j.updateMatrixWorld(),ge.makeTranslation(-uu.x,-uu.y,-uu.z),DS.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),F._frustum.setFromProjectionMatrix(DS,j.coordinateSystem,j.reversedDepth)}else F.updateMatrices(B);a=F.getFrustum(),C(O,A,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===du&&R(F,A),F.needsUpdate=!1}M=this.type,S.needsUpdate=!1,r.setRenderTarget(w,J,H)};function R(P,O){const A=e.update(T);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new zn(o.x,o.y,{format:rl,type:ur})),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(O,null,A,_,T,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(O,null,A,x,T,null)}function D(P,O,A,w){let J=null;const H=A.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)J=H;else if(J=A.isPointLight===!0?p:f,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const q=J.uuid,K=O.uuid;let ee=d[q];ee===void 0&&(ee={},d[q]=ee);let Z=ee[K];Z===void 0&&(Z=J.clone(),ee[K]=Z,O.addEventListener("dispose",N)),J=Z}if(J.visible=O.visible,J.wireframe=O.wireframe,w===du?J.side=O.shadowSide!==null?O.shadowSide:O.side:J.side=O.shadowSide!==null?O.shadowSide:v[O.side],J.alphaMap=O.alphaMap,J.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,J.map=O.map,J.clipShadows=O.clipShadows,J.clippingPlanes=O.clippingPlanes,J.clipIntersection=O.clipIntersection,J.displacementMap=O.displacementMap,J.displacementScale=O.displacementScale,J.displacementBias=O.displacementBias,J.wireframeLinewidth=O.wireframeLinewidth,J.linewidth=O.linewidth,A.isPointLight===!0&&J.isMeshDistanceMaterial===!0){const q=r.properties.get(J);q.light=A}return J}function C(P,O,A,w,J){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&J===du)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,P.matrixWorld);const K=e.update(P),ee=P.material;if(Array.isArray(ee)){const Z=K.groups;for(let B=0,F=Z.length;B<F;B++){const se=Z[B],fe=ee[se.materialIndex];if(fe&&fe.visible){const Se=D(P,fe,w,J);P.onBeforeShadow(r,P,O,A,K,Se,se),r.renderBufferDirect(A,null,K,Se,P,se),P.onAfterShadow(r,P,O,A,K,Se,se)}}}else if(ee.visible){const Z=D(P,ee,w,J);P.onBeforeShadow(r,P,O,A,K,Z,null),r.renderBufferDirect(A,null,K,Z,P,null),P.onAfterShadow(r,P,O,A,K,Z,null)}}const q=P.children;for(let K=0,ee=q.length;K<ee;K++)C(q[K],O,A,w,J)}function N(P){P.target.removeEventListener("dispose",N);for(const A in d){const w=d[A],J=P.target.uuid;J in w&&(w[J].dispose(),delete w[J])}}}function fw(r,e){function n(){let Y=!1;const Ce=new cn;let Re=null;const ze=new cn(0,0,0,0);return{setMask:function(Te){Re!==Te&&!Y&&(r.colorMask(Te,Te,Te,Te),Re=Te)},setLocked:function(Te){Y=Te},setClear:function(Te,he,He,it,Gt){Gt===!0&&(Te*=it,he*=it,He*=it),Ce.set(Te,he,He,it),ze.equals(Ce)===!1&&(r.clearColor(Te,he,He,it),ze.copy(Ce))},reset:function(){Y=!1,Re=null,ze.set(-1,0,0,0)}}}function a(){let Y=!1,Ce=!1,Re=null,ze=null,Te=null;return{setReversed:function(he){if(Ce!==he){const He=e.get("EXT_clip_control");he?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Ce=he;const it=Te;Te=null,this.setClear(it)}},getReversed:function(){return Ce},setTest:function(he){he?ve(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(he){Re!==he&&!Y&&(r.depthMask(he),Re=he)},setFunc:function(he){if(Ce&&(he=Ob[he]),ze!==he){switch(he){case lm:r.depthFunc(r.NEVER);break;case zf:r.depthFunc(r.ALWAYS);break;case um:r.depthFunc(r.LESS);break;case nl:r.depthFunc(r.LEQUAL);break;case cm:r.depthFunc(r.EQUAL);break;case fm:r.depthFunc(r.GEQUAL);break;case hm:r.depthFunc(r.GREATER);break;case dm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ze=he}},setLocked:function(he){Y=he},setClear:function(he){Te!==he&&(Te=he,Ce&&(he=1-he),r.clearDepth(he))},reset:function(){Y=!1,Re=null,ze=null,Te=null,Ce=!1}}}function o(){let Y=!1,Ce=null,Re=null,ze=null,Te=null,he=null,He=null,it=null,Gt=null;return{setTest:function(wt){Y||(wt?ve(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(wt){Ce!==wt&&!Y&&(r.stencilMask(wt),Ce=wt)},setFunc:function(wt,Jn,Ji){(Re!==wt||ze!==Jn||Te!==Ji)&&(r.stencilFunc(wt,Jn,Ji),Re=wt,ze=Jn,Te=Ji)},setOp:function(wt,Jn,Ji){(he!==wt||He!==Jn||it!==Ji)&&(r.stencilOp(wt,Jn,Ji),he=wt,He=Jn,it=Ji)},setLocked:function(wt){Y=wt},setClear:function(wt){Gt!==wt&&(r.clearStencil(wt),Gt=wt)},reset:function(){Y=!1,Ce=null,Re=null,ze=null,Te=null,he=null,He=null,it=null,Gt=null}}}const l=new n,c=new a,f=new o,p=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,x=[],y=null,T=!1,S=null,M=null,R=null,D=null,C=null,N=null,P=null,O=new Ft(0,0,0),A=0,w=!1,J=null,H=null,q=null,K=null,ee=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,F=0;const se=r.getParameter(r.VERSION);se.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(se)[1]),B=F>=1):se.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),B=F>=2);let fe=null,Se={};const I=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),ge=new cn().fromArray(I),Ee=new cn().fromArray(j);function Ue(Y,Ce,Re,ze){const Te=new Uint8Array(4),he=r.createTexture();r.bindTexture(Y,he),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<Re;He++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,ze,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(Ce+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return he}const ie={};ie[r.TEXTURE_2D]=Ue(r.TEXTURE_2D,r.TEXTURE_2D,1),ie[r.TEXTURE_CUBE_MAP]=Ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[r.TEXTURE_2D_ARRAY]=Ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ie[r.TEXTURE_3D]=Ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ve(r.DEPTH_TEST),c.setFunc(nl),at(!1),Ht(Px),ve(r.CULL_FACE),dt(si);function ve(Y){g[Y]!==!0&&(r.enable(Y),g[Y]=!0)}function be(Y){g[Y]!==!1&&(r.disable(Y),g[Y]=!1)}function Fe(Y,Ce){return v[Y]!==Ce?(r.bindFramebuffer(Y,Ce),v[Y]=Ce,Y===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ce),Y===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ze(Y,Ce){let Re=x,ze=!1;if(Y){Re=_.get(Ce),Re===void 0&&(Re=[],_.set(Ce,Re));const Te=Y.textures;if(Re.length!==Te.length||Re[0]!==r.COLOR_ATTACHMENT0){for(let he=0,He=Te.length;he<He;he++)Re[he]=r.COLOR_ATTACHMENT0+he;Re.length=Te.length,ze=!0}}else Re[0]!==r.BACK&&(Re[0]=r.BACK,ze=!0);ze&&r.drawBuffers(Re)}function Je(Y){return y!==Y?(r.useProgram(Y),y=Y,!0):!1}const $t={[Os]:r.FUNC_ADD,[ib]:r.FUNC_SUBTRACT,[ab]:r.FUNC_REVERSE_SUBTRACT};$t[rb]=r.MIN,$t[sb]=r.MAX;const mt={[ob]:r.ZERO,[lb]:r.ONE,[ub]:r.SRC_COLOR,[sm]:r.SRC_ALPHA,[mb]:r.SRC_ALPHA_SATURATE,[db]:r.DST_COLOR,[fb]:r.DST_ALPHA,[cb]:r.ONE_MINUS_SRC_COLOR,[om]:r.ONE_MINUS_SRC_ALPHA,[pb]:r.ONE_MINUS_DST_COLOR,[hb]:r.ONE_MINUS_DST_ALPHA,[gb]:r.CONSTANT_COLOR,[_b]:r.ONE_MINUS_CONSTANT_COLOR,[vb]:r.CONSTANT_ALPHA,[xb]:r.ONE_MINUS_CONSTANT_ALPHA};function dt(Y,Ce,Re,ze,Te,he,He,it,Gt,wt){if(Y===si){T===!0&&(be(r.BLEND),T=!1);return}if(T===!1&&(ve(r.BLEND),T=!0),Y!==nb){if(Y!==S||wt!==w){if((M!==Os||C!==Os)&&(r.blendEquation(r.FUNC_ADD),M=Os,C=Os),wt)switch(Y){case jo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bx:r.blendFunc(r.ONE,r.ONE);break;case zx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ix:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Pt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case jo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case zx:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ix:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",Y);break}R=null,D=null,N=null,P=null,O.set(0,0,0),A=0,S=Y,w=wt}return}Te=Te||Ce,he=he||Re,He=He||ze,(Ce!==M||Te!==C)&&(r.blendEquationSeparate($t[Ce],$t[Te]),M=Ce,C=Te),(Re!==R||ze!==D||he!==N||He!==P)&&(r.blendFuncSeparate(mt[Re],mt[ze],mt[he],mt[He]),R=Re,D=ze,N=he,P=He),(it.equals(O)===!1||Gt!==A)&&(r.blendColor(it.r,it.g,it.b,Gt),O.copy(it),A=Gt),S=Y,w=!1}function Ct(Y,Ce){Y.side===Ui?be(r.CULL_FACE):ve(r.CULL_FACE);let Re=Y.side===Bn;Ce&&(Re=!Re),at(Re),Y.blending===jo&&Y.transparent===!1?dt(si):dt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const ze=Y.stencilWrite;f.setTest(ze),ze&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Zt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function at(Y){J!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),J=Y)}function Ht(Y){Y!==$1?(ve(r.CULL_FACE),Y!==H&&(Y===Px?r.cullFace(r.BACK):Y===eb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),H=Y}function k(Y){Y!==q&&(B&&r.lineWidth(Y),q=Y)}function Zt(Y,Ce,Re){Y?(ve(r.POLYGON_OFFSET_FILL),(K!==Ce||ee!==Re)&&(K=Ce,ee=Re,c.getReversed()&&(Ce=-Ce),r.polygonOffset(Ce,Re))):be(r.POLYGON_OFFSET_FILL)}function _t(Y){Y?ve(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function Tt(Y){Y===void 0&&(Y=r.TEXTURE0+Z-1),fe!==Y&&(r.activeTexture(Y),fe=Y)}function Ge(Y,Ce,Re){Re===void 0&&(fe===null?Re=r.TEXTURE0+Z-1:Re=fe);let ze=Se[Re];ze===void 0&&(ze={type:void 0,texture:void 0},Se[Re]=ze),(ze.type!==Y||ze.texture!==Ce)&&(fe!==Re&&(r.activeTexture(Re),fe=Re),r.bindTexture(Y,Ce||ie[Y]),ze.type=Y,ze.texture=Ce)}function z(){const Y=Se[fe];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function de(){try{r.texSubImage2D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function me(){try{r.texSubImage3D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function ue(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function Be(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function Ae(){try{r.texStorage2D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function Xe(){try{r.texStorage3D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function Ke(){try{r.texImage2D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function ye(){try{r.texImage3D(...arguments)}catch(Y){Pt("WebGLState:",Y)}}function Me(Y){ge.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),ge.copy(Y))}function Le(Y){Ee.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),Ee.copy(Y))}function we(Y,Ce){let Re=d.get(Ce);Re===void 0&&(Re=new WeakMap,d.set(Ce,Re));let ze=Re.get(Y);ze===void 0&&(ze=r.getUniformBlockIndex(Ce,Y.name),Re.set(Y,ze))}function Ne(Y,Ce){const ze=d.get(Ce).get(Y);p.get(Ce)!==ze&&(r.uniformBlockBinding(Ce,ze,Y.__bindingPointIndex),p.set(Ce,ze))}function tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},fe=null,Se={},v={},_=new WeakMap,x=[],y=null,T=!1,S=null,M=null,R=null,D=null,C=null,N=null,P=null,O=new Ft(0,0,0),A=0,w=!1,J=null,H=null,q=null,K=null,ee=null,ge.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ve,disable:be,bindFramebuffer:Fe,drawBuffers:Ze,useProgram:Je,setBlending:dt,setMaterial:Ct,setFlipSided:at,setCullFace:Ht,setLineWidth:k,setPolygonOffset:Zt,setScissorTest:_t,activeTexture:Tt,bindTexture:Ge,unbindTexture:z,compressedTexImage2D:b,compressedTexImage3D:G,texImage2D:Ke,texImage3D:ye,updateUBOMapping:we,uniformBlockBinding:Ne,texStorage2D:Ae,texStorage3D:Xe,texSubImage2D:de,texSubImage3D:me,compressedTexSubImage2D:ue,compressedTexSubImage3D:Be,scissor:Me,viewport:Le,reset:tt}}function hw(r,e,n,a,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new et,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(z,b){return x?new OffscreenCanvas(z,b):Hf("canvas")}function T(z,b,G){let de=1;const me=Ge(z);if((me.width>G||me.height>G)&&(de=G/Math.max(me.width,me.height)),de<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ue=Math.floor(de*me.width),Be=Math.floor(de*me.height);v===void 0&&(v=y(ue,Be));const Ae=b?y(ue,Be):v;return Ae.width=ue,Ae.height=Be,Ae.getContext("2d").drawImage(z,0,0,ue,Be),st("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ue+"x"+Be+")."),Ae}else return"data"in z&&st("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),z;return z}function S(z){return z.generateMipmaps}function M(z){r.generateMipmap(z)}function R(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(z,b,G,de,me=!1){if(z!==null){if(r[z]!==void 0)return r[z];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ue=b;if(b===r.RED&&(G===r.FLOAT&&(ue=r.R32F),G===r.HALF_FLOAT&&(ue=r.R16F),G===r.UNSIGNED_BYTE&&(ue=r.R8)),b===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(ue=r.R8UI),G===r.UNSIGNED_SHORT&&(ue=r.R16UI),G===r.UNSIGNED_INT&&(ue=r.R32UI),G===r.BYTE&&(ue=r.R8I),G===r.SHORT&&(ue=r.R16I),G===r.INT&&(ue=r.R32I)),b===r.RG&&(G===r.FLOAT&&(ue=r.RG32F),G===r.HALF_FLOAT&&(ue=r.RG16F),G===r.UNSIGNED_BYTE&&(ue=r.RG8)),b===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(ue=r.RG8UI),G===r.UNSIGNED_SHORT&&(ue=r.RG16UI),G===r.UNSIGNED_INT&&(ue=r.RG32UI),G===r.BYTE&&(ue=r.RG8I),G===r.SHORT&&(ue=r.RG16I),G===r.INT&&(ue=r.RG32I)),b===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),G===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),G===r.UNSIGNED_INT&&(ue=r.RGB32UI),G===r.BYTE&&(ue=r.RGB8I),G===r.SHORT&&(ue=r.RGB16I),G===r.INT&&(ue=r.RGB32I)),b===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),G===r.UNSIGNED_INT&&(ue=r.RGBA32UI),G===r.BYTE&&(ue=r.RGBA8I),G===r.SHORT&&(ue=r.RGBA16I),G===r.INT&&(ue=r.RGBA32I)),b===r.RGB&&(G===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(ue=r.R11F_G11F_B10F)),b===r.RGBA){const Be=me?If:Dt.getTransfer(de);G===r.FLOAT&&(ue=r.RGBA32F),G===r.HALF_FLOAT&&(ue=r.RGBA16F),G===r.UNSIGNED_BYTE&&(ue=Be===Xt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(z,b){let G;return z?b===null||b===fa||b===al?G=r.DEPTH24_STENCIL8:b===Aa?G=r.DEPTH32F_STENCIL8:b===Ru&&(G=r.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===fa||b===al?G=r.DEPTH_COMPONENT24:b===Aa?G=r.DEPTH_COMPONENT32F:b===Ru&&(G=r.DEPTH_COMPONENT16),G}function N(z,b){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==Xn&&z.minFilter!==An?Math.log2(Math.max(b.width,b.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?b.mipmaps.length:1}function P(z){const b=z.target;b.removeEventListener("dispose",P),A(b),b.isVideoTexture&&g.delete(b)}function O(z){const b=z.target;b.removeEventListener("dispose",O),J(b)}function A(z){const b=a.get(z);if(b.__webglInit===void 0)return;const G=z.source,de=_.get(G);if(de){const me=de[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&w(z),Object.keys(de).length===0&&_.delete(G)}a.remove(z)}function w(z){const b=a.get(z);r.deleteTexture(b.__webglTexture);const G=z.source,de=_.get(G);delete de[b.__cacheKey],c.memory.textures--}function J(z){const b=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(b.__webglFramebuffer[de]))for(let me=0;me<b.__webglFramebuffer[de].length;me++)r.deleteFramebuffer(b.__webglFramebuffer[de][me]);else r.deleteFramebuffer(b.__webglFramebuffer[de]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[de])}else{if(Array.isArray(b.__webglFramebuffer))for(let de=0;de<b.__webglFramebuffer.length;de++)r.deleteFramebuffer(b.__webglFramebuffer[de]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let de=0;de<b.__webglColorRenderbuffer.length;de++)b.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[de]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=z.textures;for(let de=0,me=G.length;de<me;de++){const ue=a.get(G[de]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),c.memory.textures--),a.remove(G[de])}a.remove(z)}let H=0;function q(){H=0}function K(){const z=H;return z>=o.maxTextures&&st("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+o.maxTextures),H+=1,z}function ee(z){const b=[];return b.push(z.wrapS),b.push(z.wrapT),b.push(z.wrapR||0),b.push(z.magFilter),b.push(z.minFilter),b.push(z.anisotropy),b.push(z.internalFormat),b.push(z.format),b.push(z.type),b.push(z.generateMipmaps),b.push(z.premultiplyAlpha),b.push(z.flipY),b.push(z.unpackAlignment),b.push(z.colorSpace),b.join()}function Z(z,b){const G=a.get(z);if(z.isVideoTexture&&_t(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&G.__version!==z.version){const de=z.image;if(de===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(G,z,b);return}}else z.isExternalTexture&&(G.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+b)}function B(z,b){const G=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&G.__version!==z.version){ie(G,z,b);return}else z.isExternalTexture&&(G.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+b)}function F(z,b){const G=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&G.__version!==z.version){ie(G,z,b);return}n.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+b)}function se(z,b){const G=a.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&G.__version!==z.version){ve(G,z,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+b)}const fe={[pm]:r.REPEAT,[ir]:r.CLAMP_TO_EDGE,[mm]:r.MIRRORED_REPEAT},Se={[Xn]:r.NEAREST,[yb]:r.NEAREST_MIPMAP_NEAREST,[Zc]:r.NEAREST_MIPMAP_LINEAR,[An]:r.LINEAR,[pp]:r.LINEAR_MIPMAP_NEAREST,[zs]:r.LINEAR_MIPMAP_LINEAR},I={[bb]:r.NEVER,[Db]:r.ALWAYS,[Ab]:r.LESS,[E0]:r.LEQUAL,[Rb]:r.EQUAL,[T0]:r.GEQUAL,[Cb]:r.GREATER,[wb]:r.NOTEQUAL};function j(z,b){if(b.type===Aa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===An||b.magFilter===pp||b.magFilter===Zc||b.magFilter===zs||b.minFilter===An||b.minFilter===pp||b.minFilter===Zc||b.minFilter===zs)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,fe[b.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,fe[b.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,fe[b.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,Se[b.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,I[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xn||b.minFilter!==Zc&&b.minFilter!==zs||b.type===Aa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(z,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function ge(z,b){let G=!1;z.__webglInit===void 0&&(z.__webglInit=!0,b.addEventListener("dispose",P));const de=b.source;let me=_.get(de);me===void 0&&(me={},_.set(de,me));const ue=ee(b);if(ue!==z.__cacheKey){me[ue]===void 0&&(me[ue]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,G=!0),me[ue].usedTimes++;const Be=me[z.__cacheKey];Be!==void 0&&(me[z.__cacheKey].usedTimes--,Be.usedTimes===0&&w(b)),z.__cacheKey=ue,z.__webglTexture=me[ue].texture}return G}function Ee(z,b,G){return Math.floor(Math.floor(z/G)/b)}function Ue(z,b,G,de){const ue=z.updateRanges;if(ue.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,G,de,b.data);else{ue.sort((ye,Me)=>ye.start-Me.start);let Be=0;for(let ye=1;ye<ue.length;ye++){const Me=ue[Be],Le=ue[ye],we=Me.start+Me.count,Ne=Ee(Le.start,b.width,4),tt=Ee(Me.start,b.width,4);Le.start<=we+1&&Ne===tt&&Ee(Le.start+Le.count-1,b.width,4)===Ne?Me.count=Math.max(Me.count,Le.start+Le.count-Me.start):(++Be,ue[Be]=Le)}ue.length=Be+1;const Ae=r.getParameter(r.UNPACK_ROW_LENGTH),Xe=r.getParameter(r.UNPACK_SKIP_PIXELS),Ke=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let ye=0,Me=ue.length;ye<Me;ye++){const Le=ue[ye],we=Math.floor(Le.start/4),Ne=Math.ceil(Le.count/4),tt=we%b.width,Y=Math.floor(we/b.width),Ce=Ne,Re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,tt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(r.TEXTURE_2D,0,tt,Y,Ce,Re,G,de,b.data)}z.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ke)}}function ie(z,b,G){let de=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(de=r.TEXTURE_3D);const me=ge(z,b),ue=b.source;n.bindTexture(de,z.__webglTexture,r.TEXTURE0+G);const Be=a.get(ue);if(ue.version!==Be.__version||me===!0){n.activeTexture(r.TEXTURE0+G);const Ae=Dt.getPrimaries(Dt.workingColorSpace),Xe=b.colorSpace===Ta?null:Dt.getPrimaries(b.colorSpace),Ke=b.colorSpace===Ta||Ae===Xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ye=T(b.image,!1,o.maxTextureSize);ye=Tt(b,ye);const Me=l.convert(b.format,b.colorSpace),Le=l.convert(b.type);let we=D(b.internalFormat,Me,Le,b.colorSpace,b.isVideoTexture);j(de,b);let Ne;const tt=b.mipmaps,Y=b.isVideoTexture!==!0,Ce=Be.__version===void 0||me===!0,Re=ue.dataReady,ze=N(b,ye);if(b.isDepthTexture)we=C(b.format===Zr,b.type),Ce&&(Y?n.texStorage2D(r.TEXTURE_2D,1,we,ye.width,ye.height):n.texImage2D(r.TEXTURE_2D,0,we,ye.width,ye.height,0,Me,Le,null));else if(b.isDataTexture)if(tt.length>0){Y&&Ce&&n.texStorage2D(r.TEXTURE_2D,ze,we,tt[0].width,tt[0].height);for(let Te=0,he=tt.length;Te<he;Te++)Ne=tt[Te],Y?Re&&n.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,Me,Le,Ne.data):n.texImage2D(r.TEXTURE_2D,Te,we,Ne.width,Ne.height,0,Me,Le,Ne.data);b.generateMipmaps=!1}else Y?(Ce&&n.texStorage2D(r.TEXTURE_2D,ze,we,ye.width,ye.height),Re&&Ue(b,ye,Me,Le)):n.texImage2D(r.TEXTURE_2D,0,we,ye.width,ye.height,0,Me,Le,ye.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Y&&Ce&&n.texStorage3D(r.TEXTURE_2D_ARRAY,ze,we,tt[0].width,tt[0].height,ye.depth);for(let Te=0,he=tt.length;Te<he;Te++)if(Ne=tt[Te],b.format!==ua)if(Me!==null)if(Y){if(Re)if(b.layerUpdates.size>0){const He=oS(Ne.width,Ne.height,b.format,b.type);for(const it of b.layerUpdates){const Gt=Ne.data.subarray(it*He/Ne.data.BYTES_PER_ELEMENT,(it+1)*He/Ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,it,Ne.width,Ne.height,1,Me,Gt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Ne.width,Ne.height,ye.depth,Me,Ne.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,we,Ne.width,Ne.height,ye.depth,0,Ne.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Re&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Ne.width,Ne.height,ye.depth,Me,Le,Ne.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Te,we,Ne.width,Ne.height,ye.depth,0,Me,Le,Ne.data)}else{Y&&Ce&&n.texStorage2D(r.TEXTURE_2D,ze,we,tt[0].width,tt[0].height);for(let Te=0,he=tt.length;Te<he;Te++)Ne=tt[Te],b.format!==ua?Me!==null?Y?Re&&n.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,Me,Ne.data):n.compressedTexImage2D(r.TEXTURE_2D,Te,we,Ne.width,Ne.height,0,Ne.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Re&&n.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,Me,Le,Ne.data):n.texImage2D(r.TEXTURE_2D,Te,we,Ne.width,Ne.height,0,Me,Le,Ne.data)}else if(b.isDataArrayTexture)if(Y){if(Ce&&n.texStorage3D(r.TEXTURE_2D_ARRAY,ze,we,ye.width,ye.height,ye.depth),Re)if(b.layerUpdates.size>0){const Te=oS(ye.width,ye.height,b.format,b.type);for(const he of b.layerUpdates){const He=ye.data.subarray(he*Te/ye.data.BYTES_PER_ELEMENT,(he+1)*Te/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,ye.width,ye.height,1,Me,Le,He)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Me,Le,ye.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,we,ye.width,ye.height,ye.depth,0,Me,Le,ye.data);else if(b.isData3DTexture)Y?(Ce&&n.texStorage3D(r.TEXTURE_3D,ze,we,ye.width,ye.height,ye.depth),Re&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Me,Le,ye.data)):n.texImage3D(r.TEXTURE_3D,0,we,ye.width,ye.height,ye.depth,0,Me,Le,ye.data);else if(b.isFramebufferTexture){if(Ce)if(Y)n.texStorage2D(r.TEXTURE_2D,ze,we,ye.width,ye.height);else{let Te=ye.width,he=ye.height;for(let He=0;He<ze;He++)n.texImage2D(r.TEXTURE_2D,He,we,Te,he,0,Me,Le,null),Te>>=1,he>>=1}}else if(tt.length>0){if(Y&&Ce){const Te=Ge(tt[0]);n.texStorage2D(r.TEXTURE_2D,ze,we,Te.width,Te.height)}for(let Te=0,he=tt.length;Te<he;Te++)Ne=tt[Te],Y?Re&&n.texSubImage2D(r.TEXTURE_2D,Te,0,0,Me,Le,Ne):n.texImage2D(r.TEXTURE_2D,Te,we,Me,Le,Ne);b.generateMipmaps=!1}else if(Y){if(Ce){const Te=Ge(ye);n.texStorage2D(r.TEXTURE_2D,ze,we,Te.width,Te.height)}Re&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Le,ye)}else n.texImage2D(r.TEXTURE_2D,0,we,Me,Le,ye);S(b)&&M(de),Be.__version=ue.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function ve(z,b,G){if(b.image.length!==6)return;const de=ge(z,b),me=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+G);const ue=a.get(me);if(me.version!==ue.__version||de===!0){n.activeTexture(r.TEXTURE0+G);const Be=Dt.getPrimaries(Dt.workingColorSpace),Ae=b.colorSpace===Ta?null:Dt.getPrimaries(b.colorSpace),Xe=b.colorSpace===Ta||Be===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const Ke=b.isCompressedTexture||b.image[0].isCompressedTexture,ye=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let he=0;he<6;he++)!Ke&&!ye?Me[he]=T(b.image[he],!0,o.maxCubemapSize):Me[he]=ye?b.image[he].image:b.image[he],Me[he]=Tt(b,Me[he]);const Le=Me[0],we=l.convert(b.format,b.colorSpace),Ne=l.convert(b.type),tt=D(b.internalFormat,we,Ne,b.colorSpace),Y=b.isVideoTexture!==!0,Ce=ue.__version===void 0||de===!0,Re=me.dataReady;let ze=N(b,Le);j(r.TEXTURE_CUBE_MAP,b);let Te;if(Ke){Y&&Ce&&n.texStorage2D(r.TEXTURE_CUBE_MAP,ze,tt,Le.width,Le.height);for(let he=0;he<6;he++){Te=Me[he].mipmaps;for(let He=0;He<Te.length;He++){const it=Te[He];b.format!==ua?we!==null?Y?Re&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,it.width,it.height,we,it.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,tt,it.width,it.height,0,it.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Re&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,it.width,it.height,we,Ne,it.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,tt,it.width,it.height,0,we,Ne,it.data)}}}else{if(Te=b.mipmaps,Y&&Ce){Te.length>0&&ze++;const he=Ge(Me[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,ze,tt,he.width,he.height)}for(let he=0;he<6;he++)if(ye){Y?Re&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Me[he].width,Me[he].height,we,Ne,Me[he].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,tt,Me[he].width,Me[he].height,0,we,Ne,Me[he].data);for(let He=0;He<Te.length;He++){const Gt=Te[He].image[he].image;Y?Re&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,Gt.width,Gt.height,we,Ne,Gt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,tt,Gt.width,Gt.height,0,we,Ne,Gt.data)}}else{Y?Re&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,we,Ne,Me[he]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,tt,we,Ne,Me[he]);for(let He=0;He<Te.length;He++){const it=Te[He];Y?Re&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,we,Ne,it.image[he]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,tt,we,Ne,it.image[he])}}}S(b)&&M(r.TEXTURE_CUBE_MAP),ue.__version=me.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function be(z,b,G,de,me,ue){const Be=l.convert(G.format,G.colorSpace),Ae=l.convert(G.type),Xe=D(G.internalFormat,Be,Ae,G.colorSpace),Ke=a.get(b),ye=a.get(G);if(ye.__renderTarget=b,!Ke.__hasExternalTextures){const Me=Math.max(1,b.width>>ue),Le=Math.max(1,b.height>>ue);me===r.TEXTURE_3D||me===r.TEXTURE_2D_ARRAY?n.texImage3D(me,ue,Xe,Me,Le,b.depth,0,Be,Ae,null):n.texImage2D(me,ue,Xe,Me,Le,0,Be,Ae,null)}n.bindFramebuffer(r.FRAMEBUFFER,z),Zt(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,me,ye.__webglTexture,0,k(b)):(me===r.TEXTURE_2D||me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,me,ye.__webglTexture,ue),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(z,b,G){if(r.bindRenderbuffer(r.RENDERBUFFER,z),b.depthBuffer){const de=b.depthTexture,me=de&&de.isDepthTexture?de.type:null,ue=C(b.stencilBuffer,me),Be=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Zt(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),ue,b.width,b.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),ue,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ue,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Be,r.RENDERBUFFER,z)}else{const de=b.textures;for(let me=0;me<de.length;me++){const ue=de[me],Be=l.convert(ue.format,ue.colorSpace),Ae=l.convert(ue.type),Xe=D(ue.internalFormat,Be,Ae,ue.colorSpace);Zt(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),Xe,b.width,b.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),Xe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Xe,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ze(z,b,G){const de=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,z),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=a.get(b.depthTexture);if(me.__renderTarget=b,(!me.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de){if(me.__webglInit===void 0&&(me.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),me.__webglTexture===void 0){me.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),j(r.TEXTURE_CUBE_MAP,b.depthTexture);const Ke=l.convert(b.depthTexture.format),ye=l.convert(b.depthTexture.type);let Me;b.depthTexture.format===cr?Me=r.DEPTH_COMPONENT24:b.depthTexture.format===Zr&&(Me=r.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Me,b.width,b.height,0,Ke,ye,null)}}else Z(b.depthTexture,0);const ue=me.__webglTexture,Be=k(b),Ae=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,Xe=b.depthTexture.format===Zr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===cr)Zt(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xe,Ae,ue,0,Be):r.framebufferTexture2D(r.FRAMEBUFFER,Xe,Ae,ue,0);else if(b.depthTexture.format===Zr)Zt(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xe,Ae,ue,0,Be):r.framebufferTexture2D(r.FRAMEBUFFER,Xe,Ae,ue,0);else throw new Error("Unknown depthTexture format")}function Je(z){const b=a.get(z),G=z.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==z.depthTexture){const de=z.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),de){const me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,de.removeEventListener("dispose",me)};de.addEventListener("dispose",me),b.__depthDisposeCallback=me}b.__boundDepthTexture=de}if(z.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let de=0;de<6;de++)Ze(b.__webglFramebuffer[de],z,de);else{const de=z.texture.mipmaps;de&&de.length>0?Ze(b.__webglFramebuffer[0],z,0):Ze(b.__webglFramebuffer,z,0)}else if(G){b.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[de]),b.__webglDepthbuffer[de]===void 0)b.__webglDepthbuffer[de]=r.createRenderbuffer(),Fe(b.__webglDepthbuffer[de],z,!1);else{const me=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,ue)}}else{const de=z.texture.mipmaps;if(de&&de.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Fe(b.__webglDepthbuffer,z,!1);else{const me=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,ue)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function $t(z,b,G){const de=a.get(z);b!==void 0&&be(de.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Je(z)}function mt(z){const b=z.texture,G=a.get(z),de=a.get(b);z.addEventListener("dispose",O);const me=z.textures,ue=z.isWebGLCubeRenderTarget===!0,Be=me.length>1;if(Be||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=b.version,c.memory.textures++),ue){G.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[Ae]=[];for(let Xe=0;Xe<b.mipmaps.length;Xe++)G.__webglFramebuffer[Ae][Xe]=r.createFramebuffer()}else G.__webglFramebuffer[Ae]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ae=0;Ae<b.mipmaps.length;Ae++)G.__webglFramebuffer[Ae]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Be)for(let Ae=0,Xe=me.length;Ae<Xe;Ae++){const Ke=a.get(me[Ae]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=r.createTexture(),c.memory.textures++)}if(z.samples>0&&Zt(z)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ae=0;Ae<me.length;Ae++){const Xe=me[Ae];G.__webglColorRenderbuffer[Ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[Ae]);const Ke=l.convert(Xe.format,Xe.colorSpace),ye=l.convert(Xe.type),Me=D(Xe.internalFormat,Ke,ye,Xe.colorSpace,z.isXRRenderTarget===!0),Le=k(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,Me,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,G.__webglColorRenderbuffer[Ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Fe(G.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){n.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),j(r.TEXTURE_CUBE_MAP,b);for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xe=0;Xe<b.mipmaps.length;Xe++)be(G.__webglFramebuffer[Ae][Xe],z,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Xe);else be(G.__webglFramebuffer[Ae],z,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(b)&&M(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Be){for(let Ae=0,Xe=me.length;Ae<Xe;Ae++){const Ke=me[Ae],ye=a.get(Ke);let Me=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Me=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Me,ye.__webglTexture),j(Me,Ke),be(G.__webglFramebuffer,z,Ke,r.COLOR_ATTACHMENT0+Ae,Me,0),S(Ke)&&M(Me)}n.unbindTexture()}else{let Ae=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ae=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ae,de.__webglTexture),j(Ae,b),b.mipmaps&&b.mipmaps.length>0)for(let Xe=0;Xe<b.mipmaps.length;Xe++)be(G.__webglFramebuffer[Xe],z,b,r.COLOR_ATTACHMENT0,Ae,Xe);else be(G.__webglFramebuffer,z,b,r.COLOR_ATTACHMENT0,Ae,0);S(b)&&M(Ae),n.unbindTexture()}z.depthBuffer&&Je(z)}function dt(z){const b=z.textures;for(let G=0,de=b.length;G<de;G++){const me=b[G];if(S(me)){const ue=R(z),Be=a.get(me).__webglTexture;n.bindTexture(ue,Be),M(ue),n.unbindTexture()}}}const Ct=[],at=[];function Ht(z){if(z.samples>0){if(Zt(z)===!1){const b=z.textures,G=z.width,de=z.height;let me=r.COLOR_BUFFER_BIT;const ue=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Be=a.get(z),Ae=b.length>1;if(Ae)for(let Ke=0;Ke<b.length;Ke++)n.bindFramebuffer(r.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ke,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ke,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Xe=z.texture.mipmaps;Xe&&Xe.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ke=0;Ke<b.length;Ke++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(me|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(me|=r.STENCIL_BUFFER_BIT)),Ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Be.__webglColorRenderbuffer[Ke]);const ye=a.get(b[Ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ye,0)}r.blitFramebuffer(0,0,G,de,0,0,G,de,me,r.NEAREST),p===!0&&(Ct.length=0,at.length=0,Ct.push(r.COLOR_ATTACHMENT0+Ke),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Ct.push(ue),at.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,at)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ct))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ae)for(let Ke=0;Ke<b.length;Ke++){n.bindFramebuffer(r.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ke,r.RENDERBUFFER,Be.__webglColorRenderbuffer[Ke]);const ye=a.get(b[Ke]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ke,r.TEXTURE_2D,ye,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const b=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function k(z){return Math.min(o.maxSamples,z.samples)}function Zt(z){const b=a.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _t(z){const b=c.render.frame;g.get(z)!==b&&(g.set(z,b),z.update())}function Tt(z,b){const G=z.colorSpace,de=z.format,me=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||G!==is&&G!==Ta&&(Dt.getTransfer(G)===Xt?(de!==ua||me!==Un)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",G)),b}function Ge(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(d.width=z.naturalWidth||z.width,d.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(d.width=z.displayWidth,d.height=z.displayHeight):(d.width=z.width,d.height=z.height),d}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.setTexture2D=Z,this.setTexture2DArray=B,this.setTexture3D=F,this.setTextureCube=se,this.rebindTextures=$t,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function dw(r,e){function n(a,o=Ta){let l;const c=Dt.getTransfer(o);if(a===Un)return r.UNSIGNED_BYTE;if(a===v0)return r.UNSIGNED_SHORT_4_4_4_4;if(a===x0)return r.UNSIGNED_SHORT_5_5_5_1;if(a===WM)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===YM)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===kM)return r.BYTE;if(a===XM)return r.SHORT;if(a===Ru)return r.UNSIGNED_SHORT;if(a===_0)return r.INT;if(a===fa)return r.UNSIGNED_INT;if(a===Aa)return r.FLOAT;if(a===ur)return r.HALF_FLOAT;if(a===qM)return r.ALPHA;if(a===jM)return r.RGB;if(a===ua)return r.RGBA;if(a===cr)return r.DEPTH_COMPONENT;if(a===Zr)return r.DEPTH_STENCIL;if(a===ZM)return r.RED;if(a===S0)return r.RED_INTEGER;if(a===rl)return r.RG;if(a===M0)return r.RG_INTEGER;if(a===y0)return r.RGBA_INTEGER;if(a===bf||a===Af||a===Rf||a===Cf)if(c===Xt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===bf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Af)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Rf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Cf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===bf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Af)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Rf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Cf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===gm||a===_m||a===vm||a===xm)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===gm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===_m)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===vm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===xm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Sm||a===Mm||a===ym||a===Em||a===Tm||a===bm||a===Am)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Sm||a===Mm)return c===Xt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===ym)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===Em)return l.COMPRESSED_R11_EAC;if(a===Tm)return l.COMPRESSED_SIGNED_R11_EAC;if(a===bm)return l.COMPRESSED_RG11_EAC;if(a===Am)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Rm||a===Cm||a===wm||a===Dm||a===Um||a===Lm||a===Nm||a===Om||a===Pm||a===Bm||a===zm||a===Im||a===Fm||a===Hm)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Rm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Cm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===wm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Dm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Um)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Lm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Nm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Om)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Pm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Bm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===zm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Im)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Fm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Hm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Gm||a===Vm||a===km)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Gm)return c===Xt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Vm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===km)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Xm||a===Wm||a===Ym||a===qm)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===Xm)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Wm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ym)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===qm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===al?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const pw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mw=`
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

}`;class gw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new ry(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new Fn({vertexShader:pw,fragmentShader:mw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ha(new Ou(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _w extends hr{constructor(e,n){super();const a=this;let o=null,l=1,c=null,f="local-floor",p=1,d=null,g=null,v=null,_=null,x=null,y=null;const T=typeof XRWebGLBinding<"u",S=new gw,M={},R=n.getContextAttributes();let D=null,C=null;const N=[],P=[],O=new et;let A=null;const w=new ji;w.viewport=new cn;const J=new ji;J.viewport=new cn;const H=[w,J],q=new wA;let K=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ve=N[ie];return ve===void 0&&(ve=new Sp,N[ie]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ie){let ve=N[ie];return ve===void 0&&(ve=new Sp,N[ie]=ve),ve.getGripSpace()},this.getHand=function(ie){let ve=N[ie];return ve===void 0&&(ve=new Sp,N[ie]=ve),ve.getHandSpace()};function Z(ie){const ve=P.indexOf(ie.inputSource);if(ve===-1)return;const be=N[ve];be!==void 0&&(be.update(ie.inputSource,ie.frame,d||c),be.dispatchEvent({type:ie.type,data:ie.inputSource}))}function B(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",F);for(let ie=0;ie<N.length;ie++){const ve=P[ie];ve!==null&&(P[ie]=null,N[ie].disconnect(ve))}K=null,ee=null,S.reset();for(const ie in M)delete M[ie];e.setRenderTarget(D),x=null,_=null,v=null,o=null,C=null,Ue.stop(),a.isPresenting=!1,e.setPixelRatio(A),e.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,a.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){f=ie,a.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(ie){d=ie},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return y},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",B),o.addEventListener("inputsourceschange",F),R.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Fe=null,Ze=null;R.depth&&(Ze=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=R.stencil?Zr:cr,Fe=R.stencil?al:fa);const Je={colorFormat:n.RGBA8,depthFormat:Ze,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(Je),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new zn(_.textureWidth,_.textureHeight,{format:ua,type:Un,depthTexture:new sl(_.textureWidth,_.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const be={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,n,be),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new zn(x.framebufferWidth,x.framebufferHeight,{format:ua,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await o.requestReferenceSpace(f),Ue.setContext(o),Ue.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function F(ie){for(let ve=0;ve<ie.removed.length;ve++){const be=ie.removed[ve],Fe=P.indexOf(be);Fe>=0&&(P[Fe]=null,N[Fe].disconnect(be))}for(let ve=0;ve<ie.added.length;ve++){const be=ie.added[ve];let Fe=P.indexOf(be);if(Fe===-1){for(let Je=0;Je<N.length;Je++)if(Je>=P.length){P.push(be),Fe=Je;break}else if(P[Je]===null){P[Je]=be,Fe=Je;break}if(Fe===-1)break}const Ze=N[Fe];Ze&&Ze.connect(be)}}const se=new oe,fe=new oe;function Se(ie,ve,be){se.setFromMatrixPosition(ve.matrixWorld),fe.setFromMatrixPosition(be.matrixWorld);const Fe=se.distanceTo(fe),Ze=ve.projectionMatrix.elements,Je=be.projectionMatrix.elements,$t=Ze[14]/(Ze[10]-1),mt=Ze[14]/(Ze[10]+1),dt=(Ze[9]+1)/Ze[5],Ct=(Ze[9]-1)/Ze[5],at=(Ze[8]-1)/Ze[0],Ht=(Je[8]+1)/Je[0],k=$t*at,Zt=$t*Ht,_t=Fe/(-at+Ht),Tt=_t*-at;if(ve.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Tt),ie.translateZ(_t),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ze[10]===-1)ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Ge=$t+_t,z=mt+_t,b=k-Tt,G=Zt+(Fe-Tt),de=dt*mt/z*Ge,me=Ct*mt/z*Ge;ie.projectionMatrix.makePerspective(b,G,de,me,Ge,z),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function I(ie,ve){ve===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ve.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let ve=ie.near,be=ie.far;S.texture!==null&&(S.depthNear>0&&(ve=S.depthNear),S.depthFar>0&&(be=S.depthFar)),q.near=J.near=w.near=ve,q.far=J.far=w.far=be,(K!==q.near||ee!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),K=q.near,ee=q.far),q.layers.mask=ie.layers.mask|6,w.layers.mask=q.layers.mask&-5,J.layers.mask=q.layers.mask&-3;const Fe=ie.parent,Ze=q.cameras;I(q,Fe);for(let Je=0;Je<Ze.length;Je++)I(Ze[Je],Fe);Ze.length===2?Se(q,w,J):q.projectionMatrix.copy(w.projectionMatrix),j(ie,q,Fe)};function j(ie,ve,be){be===null?ie.matrix.copy(ve.matrixWorld):(ie.matrix.copy(be.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ve.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Cu*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(_===null&&x===null))return p},this.setFoveation=function(ie){p=ie,_!==null&&(_.fixedFoveation=ie),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ie)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(ie){return M[ie]};let ge=null;function Ee(ie,ve){if(g=ve.getViewerPose(d||c),y=ve,g!==null){const be=g.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let Fe=!1;be.length!==q.cameras.length&&(q.cameras.length=0,Fe=!0);for(let mt=0;mt<be.length;mt++){const dt=be[mt];let Ct=null;if(x!==null)Ct=x.getViewport(dt);else{const Ht=v.getViewSubImage(_,dt);Ct=Ht.viewport,mt===0&&(e.setRenderTargetTextures(C,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(C))}let at=H[mt];at===void 0&&(at=new ji,at.layers.enable(mt),at.viewport=new cn,H[mt]=at),at.matrix.fromArray(dt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(dt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),mt===0&&(q.matrix.copy(at.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Fe===!0&&q.cameras.push(at)}const Ze=o.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=a.getBinding();const mt=v.getDepthInformation(be[0]);mt&&mt.isValid&&mt.texture&&S.init(mt,o.renderState)}if(Ze&&Ze.includes("camera-access")&&T){e.state.unbindTexture(),v=a.getBinding();for(let mt=0;mt<be.length;mt++){const dt=be[mt].camera;if(dt){let Ct=M[dt];Ct||(Ct=new ry,M[dt]=Ct);const at=v.getCameraImage(dt);Ct.sourceTexture=at}}}}for(let be=0;be<N.length;be++){const Fe=P[be],Ze=N[be];Fe!==null&&Ze!==void 0&&Ze.update(Fe,ve,d||c)}ge&&ge(ie,ve),ve.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ve}),y=null}const Ue=new ly;Ue.setAnimationLoop(Ee),this.setAnimationLoop=function(ie){ge=ie},this.dispose=function(){}}}const Us=new fr,vw=new Rn;function xw(r,e){function n(S,M){S.matrixAutoUpdate===!0&&S.updateMatrix(),M.value.copy(S.matrix)}function a(S,M){M.color.getRGB(S.fogColor.value,sy(r)),M.isFog?(S.fogNear.value=M.near,S.fogFar.value=M.far):M.isFogExp2&&(S.fogDensity.value=M.density)}function o(S,M,R,D,C){M.isMeshBasicMaterial?l(S,M):M.isMeshLambertMaterial?(l(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(l(S,M),v(S,M)):M.isMeshPhongMaterial?(l(S,M),g(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(l(S,M),_(S,M),M.isMeshPhysicalMaterial&&x(S,M,C)):M.isMeshMatcapMaterial?(l(S,M),y(S,M)):M.isMeshDepthMaterial?l(S,M):M.isMeshDistanceMaterial?(l(S,M),T(S,M)):M.isMeshNormalMaterial?l(S,M):M.isLineBasicMaterial?(c(S,M),M.isLineDashedMaterial&&f(S,M)):M.isPointsMaterial?p(S,M,R,D):M.isSpriteMaterial?d(S,M):M.isShadowMaterial?(S.color.value.copy(M.color),S.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function l(S,M){S.opacity.value=M.opacity,M.color&&S.diffuse.value.copy(M.color),M.emissive&&S.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(S.map.value=M.map,n(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,n(M.alphaMap,S.alphaMapTransform)),M.bumpMap&&(S.bumpMap.value=M.bumpMap,n(M.bumpMap,S.bumpMapTransform),S.bumpScale.value=M.bumpScale,M.side===Bn&&(S.bumpScale.value*=-1)),M.normalMap&&(S.normalMap.value=M.normalMap,n(M.normalMap,S.normalMapTransform),S.normalScale.value.copy(M.normalScale),M.side===Bn&&S.normalScale.value.negate()),M.displacementMap&&(S.displacementMap.value=M.displacementMap,n(M.displacementMap,S.displacementMapTransform),S.displacementScale.value=M.displacementScale,S.displacementBias.value=M.displacementBias),M.emissiveMap&&(S.emissiveMap.value=M.emissiveMap,n(M.emissiveMap,S.emissiveMapTransform)),M.specularMap&&(S.specularMap.value=M.specularMap,n(M.specularMap,S.specularMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest);const R=e.get(M),D=R.envMap,C=R.envMapRotation;D&&(S.envMap.value=D,Us.copy(C),Us.x*=-1,Us.y*=-1,Us.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),S.envMapRotation.value.setFromMatrix4(vw.makeRotationFromEuler(Us)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=M.reflectivity,S.ior.value=M.ior,S.refractionRatio.value=M.refractionRatio),M.lightMap&&(S.lightMap.value=M.lightMap,S.lightMapIntensity.value=M.lightMapIntensity,n(M.lightMap,S.lightMapTransform)),M.aoMap&&(S.aoMap.value=M.aoMap,S.aoMapIntensity.value=M.aoMapIntensity,n(M.aoMap,S.aoMapTransform))}function c(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,M.map&&(S.map.value=M.map,n(M.map,S.mapTransform))}function f(S,M){S.dashSize.value=M.dashSize,S.totalSize.value=M.dashSize+M.gapSize,S.scale.value=M.scale}function p(S,M,R,D){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.size.value=M.size*R,S.scale.value=D*.5,M.map&&(S.map.value=M.map,n(M.map,S.uvTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,n(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function d(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.rotation.value=M.rotation,M.map&&(S.map.value=M.map,n(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,n(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function g(S,M){S.specular.value.copy(M.specular),S.shininess.value=Math.max(M.shininess,1e-4)}function v(S,M){M.gradientMap&&(S.gradientMap.value=M.gradientMap)}function _(S,M){S.metalness.value=M.metalness,M.metalnessMap&&(S.metalnessMap.value=M.metalnessMap,n(M.metalnessMap,S.metalnessMapTransform)),S.roughness.value=M.roughness,M.roughnessMap&&(S.roughnessMap.value=M.roughnessMap,n(M.roughnessMap,S.roughnessMapTransform)),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)}function x(S,M,R){S.ior.value=M.ior,M.sheen>0&&(S.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),S.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(S.sheenColorMap.value=M.sheenColorMap,n(M.sheenColorMap,S.sheenColorMapTransform)),M.sheenRoughnessMap&&(S.sheenRoughnessMap.value=M.sheenRoughnessMap,n(M.sheenRoughnessMap,S.sheenRoughnessMapTransform))),M.clearcoat>0&&(S.clearcoat.value=M.clearcoat,S.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(S.clearcoatMap.value=M.clearcoatMap,n(M.clearcoatMap,S.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,n(M.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(S.clearcoatNormalMap.value=M.clearcoatNormalMap,n(M.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Bn&&S.clearcoatNormalScale.value.negate())),M.dispersion>0&&(S.dispersion.value=M.dispersion),M.iridescence>0&&(S.iridescence.value=M.iridescence,S.iridescenceIOR.value=M.iridescenceIOR,S.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(S.iridescenceMap.value=M.iridescenceMap,n(M.iridescenceMap,S.iridescenceMapTransform)),M.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=M.iridescenceThicknessMap,n(M.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),M.transmission>0&&(S.transmission.value=M.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),M.transmissionMap&&(S.transmissionMap.value=M.transmissionMap,n(M.transmissionMap,S.transmissionMapTransform)),S.thickness.value=M.thickness,M.thicknessMap&&(S.thicknessMap.value=M.thicknessMap,n(M.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=M.attenuationDistance,S.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(S.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(S.anisotropyMap.value=M.anisotropyMap,n(M.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=M.specularIntensity,S.specularColor.value.copy(M.specularColor),M.specularColorMap&&(S.specularColorMap.value=M.specularColorMap,n(M.specularColorMap,S.specularColorMapTransform)),M.specularIntensityMap&&(S.specularIntensityMap.value=M.specularIntensityMap,n(M.specularIntensityMap,S.specularIntensityMapTransform))}function y(S,M){M.matcap&&(S.matcap.value=M.matcap)}function T(S,M){const R=e.get(M).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function Sw(r,e,n,a){let o={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,D){const C=D.program;a.uniformBlockBinding(R,C)}function d(R,D){let C=o[R.id];C===void 0&&(y(R),C=g(R),o[R.id]=C,R.addEventListener("dispose",S));const N=D.program;a.updateUBOMapping(R,N);const P=e.render.frame;l[R.id]!==P&&(_(R),l[R.id]=P)}function g(R){const D=v();R.__bindingPointIndex=D;const C=r.createBuffer(),N=R.__size,P=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,N,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,C),C}function v(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const D=o[R.id],C=R.uniforms,N=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let P=0,O=C.length;P<O;P++){const A=Array.isArray(C[P])?C[P]:[C[P]];for(let w=0,J=A.length;w<J;w++){const H=A[w];if(x(H,P,w,N)===!0){const q=H.__offset,K=Array.isArray(H.value)?H.value:[H.value];let ee=0;for(let Z=0;Z<K.length;Z++){const B=K[Z],F=T(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,q+ee,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,ee),ee+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(R,D,C,N){const P=R.value,O=D+"_"+C;if(N[O]===void 0)return typeof P=="number"||typeof P=="boolean"?N[O]=P:N[O]=P.clone(),!0;{const A=N[O];if(typeof P=="number"||typeof P=="boolean"){if(A!==P)return N[O]=P,!0}else if(A.equals(P)===!1)return A.copy(P),!0}return!1}function y(R){const D=R.uniforms;let C=0;const N=16;for(let O=0,A=D.length;O<A;O++){const w=Array.isArray(D[O])?D[O]:[D[O]];for(let J=0,H=w.length;J<H;J++){const q=w[J],K=Array.isArray(q.value)?q.value:[q.value];for(let ee=0,Z=K.length;ee<Z;ee++){const B=K[ee],F=T(B),se=C%N,fe=se%F.boundary,Se=se+fe;C+=fe,Se!==0&&N-Se<F.storage&&(C+=N-Se),q.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=C,C+=F.storage}}}const P=C%N;return P>0&&(C+=N-P),R.__size=C,R.__cache={},this}function T(R){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=48,D.storage=48):R.isMatrix4?(D.boundary=64,D.storage=64):R.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",R),D}function S(R){const D=R.target;D.removeEventListener("dispose",S);const C=c.indexOf(D.__bindingPointIndex);c.splice(C,1),r.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function M(){for(const R in o)r.deleteBuffer(o[R]);c=[],o={},l={}}return{bind:p,update:d,dispose:M}}const Mw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sa=null;function yw(){return Sa===null&&(Sa=new gA(Mw,16,16,rl,ur),Sa.name="DFG_LUT",Sa.minFilter=An,Sa.magFilter=An,Sa.wrapS=ir,Sa.wrapT=ir,Sa.generateMipmaps=!1,Sa.needsUpdate=!0),Sa}class Ew{constructor(e={}){const{canvas:n=Lb(),context:a=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=Un}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=c;const T=x,S=new Set([y0,M0,S0]),M=new Set([Un,fa,Ru,al,v0,x0]),R=new Uint32Array(4),D=new Int32Array(4);let C=null,N=null;const P=[],O=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ca,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let J=!1;this._outputColorSpace=Wt;let H=0,q=0,K=null,ee=-1,Z=null;const B=new cn,F=new cn;let se=null;const fe=new Ft(0);let Se=0,I=n.width,j=n.height,ge=1,Ee=null,Ue=null;const ie=new cn(0,0,I,j),ve=new cn(0,0,I,j);let be=!1;const Fe=new iy;let Ze=!1,Je=!1;const $t=new Rn,mt=new oe,dt=new cn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Ht(){return K===null?ge:1}let k=a;function Zt(L,W){return n.getContext(L,W)}try{const L={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Du}`),n.addEventListener("webglcontextlost",He,!1),n.addEventListener("webglcontextrestored",it,!1),n.addEventListener("webglcontextcreationerror",Gt,!1),k===null){const W="webgl2";if(k=Zt(W,L),k===null)throw Zt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw Pt("WebGLRenderer: "+L.message),L}let _t,Tt,Ge,z,b,G,de,me,ue,Be,Ae,Xe,Ke,ye,Me,Le,we,Ne,tt,Y,Ce,Re,ze;function Te(){_t=new E3(k),_t.init(),Ce=new dw(k,_t),Tt=new m3(k,_t,e,Ce),Ge=new fw(k,_t),Tt.reversedDepthBuffer&&_&&Ge.buffers.depth.setReversed(!0),z=new A3(k),b=new QC,G=new hw(k,_t,Ge,b,Tt,Ce,z),de=new y3(w),me=new UA(k),Re=new d3(k,me),ue=new T3(k,me,z,Re),Be=new C3(k,ue,me,Re,z),Ne=new R3(k,Tt,G),Me=new g3(b),Ae=new KC(w,de,_t,Tt,Re,Me),Xe=new xw(w,b),Ke=new $C,ye=new rw(_t),we=new h3(w,de,Ge,Be,y,p),Le=new cw(w,Be,Tt),ze=new Sw(k,z,Tt,Ge),tt=new p3(k,_t,z),Y=new b3(k,_t,z),z.programs=Ae.programs,w.capabilities=Tt,w.extensions=_t,w.properties=b,w.renderLists=Ke,w.shadowMap=Le,w.state=Ge,w.info=z}Te(),T!==Un&&(A=new D3(T,n.width,n.height,o,l));const he=new _w(w,k);this.xr=he,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const L=_t.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=_t.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(L){L!==void 0&&(ge=L,this.setSize(I,j,!1))},this.getSize=function(L){return L.set(I,j)},this.setSize=function(L,W,le=!0){if(he.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}I=L,j=W,n.width=Math.floor(L*ge),n.height=Math.floor(W*ge),le===!0&&(n.style.width=L+"px",n.style.height=W+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set(I*ge,j*ge).floor()},this.setDrawingBufferSize=function(L,W,le){I=L,j=W,ge=le,n.width=Math.floor(L*le),n.height=Math.floor(W*le),this.setViewport(0,0,L,W)},this.setEffects=function(L){if(T===Un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let W=0;W<L.length;W++)if(L[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(B)},this.getViewport=function(L){return L.copy(ie)},this.setViewport=function(L,W,le,ae){L.isVector4?ie.set(L.x,L.y,L.z,L.w):ie.set(L,W,le,ae),Ge.viewport(B.copy(ie).multiplyScalar(ge).round())},this.getScissor=function(L){return L.copy(ve)},this.setScissor=function(L,W,le,ae){L.isVector4?ve.set(L.x,L.y,L.z,L.w):ve.set(L,W,le,ae),Ge.scissor(F.copy(ve).multiplyScalar(ge).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(L){Ge.setScissorTest(be=L)},this.setOpaqueSort=function(L){Ee=L},this.setTransparentSort=function(L){Ue=L},this.getClearColor=function(L){return L.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(L=!0,W=!0,le=!0){let ae=0;if(L){let $=!1;if(K!==null){const De=K.texture.format;$=S.has(De)}if($){const De=K.texture.type,Ie=M.has(De),Oe=we.getClearColor(),Ye=we.getClearAlpha(),je=Oe.r,nt=Oe.g,ot=Oe.b;Ie?(R[0]=je,R[1]=nt,R[2]=ot,R[3]=Ye,k.clearBufferuiv(k.COLOR,0,R)):(D[0]=je,D[1]=nt,D[2]=ot,D[3]=Ye,k.clearBufferiv(k.COLOR,0,D))}else ae|=k.COLOR_BUFFER_BIT}W&&(ae|=k.DEPTH_BUFFER_BIT),le&&(ae|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&k.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",He,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",Gt,!1),we.dispose(),Ke.dispose(),ye.dispose(),b.dispose(),de.dispose(),Be.dispose(),Re.dispose(),ze.dispose(),Ae.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ws),he.removeEventListener("sessionend",Ys),pa.stop()};function He(L){L.preventDefault(),kx("WebGLRenderer: Context Lost."),J=!0}function it(){kx("WebGLRenderer: Context Restored."),J=!1;const L=z.autoReset,W=Le.enabled,le=Le.autoUpdate,ae=Le.needsUpdate,$=Le.type;Te(),z.autoReset=L,Le.enabled=W,Le.autoUpdate=le,Le.needsUpdate=ae,Le.type=$}function Gt(L){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function wt(L){const W=L.target;W.removeEventListener("dispose",wt),Jn(W)}function Jn(L){Ji(L),b.remove(L)}function Ji(L){const W=b.get(L).programs;W!==void 0&&(W.forEach(function(le){Ae.releaseProgram(le)}),L.isShaderMaterial&&Ae.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,le,ae,$,De){W===null&&(W=Ct);const Ie=$.isMesh&&$.matrixWorld.determinant()<0,Oe=Iu(L,W,le,ae,$);Ge.setMaterial(ae,Ie);let Ye=le.index,je=1;if(ae.wireframe===!0){if(Ye=ue.getWireframeAttribute(le),Ye===void 0)return;je=2}const nt=le.drawRange,ot=le.attributes.position;let Ve=nt.start*je,ct=(nt.start+nt.count)*je;De!==null&&(Ve=Math.max(Ve,De.start*je),ct=Math.min(ct,(De.start+De.count)*je)),Ye!==null?(Ve=Math.max(Ve,0),ct=Math.min(ct,Ye.count)):ot!=null&&(Ve=Math.max(Ve,0),ct=Math.min(ct,ot.count));const nn=ct-Ve;if(nn<0||nn===1/0)return;Re.setup($,ae,Oe,le,Ye);let an,Lt=tt;if(Ye!==null&&(an=me.get(Ye),Lt=Y,Lt.setIndex(an)),$.isMesh)ae.wireframe===!0?(Ge.setLineWidth(ae.wireframeLinewidth*Ht()),Lt.setMode(k.LINES)):Lt.setMode(k.TRIANGLES);else if($.isLine){let wn=ae.linewidth;wn===void 0&&(wn=1),Ge.setLineWidth(wn*Ht()),$.isLineSegments?Lt.setMode(k.LINES):$.isLineLoop?Lt.setMode(k.LINE_LOOP):Lt.setMode(k.LINE_STRIP)}else $.isPoints?Lt.setMode(k.POINTS):$.isSprite&&Lt.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Gf("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Lt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const wn=$._multiDrawStarts,We=$._multiDrawCounts,$n=$._multiDrawCount,rt=Ye?me.get(Ye).bytesPerElement:1,ei=b.get(ae).currentProgram.getUniforms();for(let vi=0;vi<$n;vi++)ei.setValue(k,"_gl_DrawID",vi),Lt.render(wn[vi]/rt,We[vi])}else if($.isInstancedMesh)Lt.renderInstances(Ve,nn,$.count);else if(le.isInstancedBufferGeometry){const wn=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,We=Math.min(le.instanceCount,wn);Lt.renderInstances(Ve,nn,We)}else Lt.render(Ve,nn)};function hl(L,W,le){L.transparent===!0&&L.side===Ui&&L.forceSinglePass===!1?(L.side=Bn,L.needsUpdate=!0,dr(L,W,le),L.side=lr,L.needsUpdate=!0,dr(L,W,le),L.side=Ui):dr(L,W,le)}this.compile=function(L,W,le=null){le===null&&(le=L),N=ye.get(le),N.init(W),O.push(N),le.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(N.pushLight($),$.castShadow&&N.pushShadow($))}),L!==le&&L.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(N.pushLight($),$.castShadow&&N.pushShadow($))}),N.setupLights();const ae=new Set;return L.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const De=$.material;if(De)if(Array.isArray(De))for(let Ie=0;Ie<De.length;Ie++){const Oe=De[Ie];hl(Oe,le,$),ae.add(Oe)}else hl(De,le,$),ae.add(De)}),N=O.pop(),ae},this.compileAsync=function(L,W,le=null){const ae=this.compile(L,W,le);return new Promise($=>{function De(){if(ae.forEach(function(Ie){b.get(Ie).currentProgram.isReady()&&ae.delete(Ie)}),ae.size===0){$(L);return}setTimeout(De,10)}_t.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Xs=null;function Pu(L){Xs&&Xs(L)}function Ws(){pa.stop()}function Ys(){pa.start()}const pa=new ly;pa.setAnimationLoop(Pu),typeof self<"u"&&pa.setContext(self),this.setAnimationLoop=function(L){Xs=L,he.setAnimationLoop(L),L===null?pa.stop():pa.start()},he.addEventListener("sessionstart",Ws),he.addEventListener("sessionend",Ys),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;const le=he.enabled===!0&&he.isPresenting===!0,ae=A!==null&&(K===null||le)&&A.begin(w,K);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(W),W=he.getCamera()),L.isScene===!0&&L.onBeforeRender(w,L,W,K),N=ye.get(L,O.length),N.init(W),O.push(N),$t.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Fe.setFromProjectionMatrix($t,Ra,W.reversedDepth),Je=this.localClippingEnabled,Ze=Me.init(this.clippingPlanes,Je),C=Ke.get(L,P.length),C.init(),P.push(C),he.enabled===!0&&he.isPresenting===!0){const Ie=w.xr.getDepthSensingMesh();Ie!==null&&qs(Ie,W,-1/0,w.sortObjects)}qs(L,W,0,w.sortObjects),C.finish(),w.sortObjects===!0&&C.sort(Ee,Ue),at=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,at&&we.addToRenderList(C,L),this.info.render.frame++,Ze===!0&&Me.beginShadows();const $=N.state.shadowsArray;if(Le.render($,L,W),Ze===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&A.hasRenderPass())===!1){const Ie=C.opaque,Oe=C.transmissive;if(N.setupLights(),W.isArrayCamera){const Ye=W.cameras;if(Oe.length>0)for(let je=0,nt=Ye.length;je<nt;je++){const ot=Ye[je];_n(Ie,Oe,L,ot)}at&&we.render(L);for(let je=0,nt=Ye.length;je<nt;je++){const ot=Ye[je];$i(C,L,ot,ot.viewport)}}else Oe.length>0&&_n(Ie,Oe,L,W),at&&we.render(L),$i(C,L,W)}K!==null&&q===0&&(G.updateMultisampleRenderTarget(K),G.updateRenderTargetMipmap(K)),ae&&A.end(w),L.isScene===!0&&L.onAfterRender(w,L,W),Re.resetDefaultState(),ee=-1,Z=null,O.pop(),O.length>0?(N=O[O.length-1],Ze===!0&&Me.setGlobalState(w.clippingPlanes,N.state.camera)):N=null,P.pop(),P.length>0?C=P[P.length-1]:C=null};function qs(L,W,le,ae){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)le=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLight)N.pushLight(L),L.castShadow&&N.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Fe.intersectsSprite(L)){ae&&dt.setFromMatrixPosition(L.matrixWorld).applyMatrix4($t);const Ie=Be.update(L),Oe=L.material;Oe.visible&&C.push(L,Ie,Oe,le,dt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Fe.intersectsObject(L))){const Ie=Be.update(L),Oe=L.material;if(ae&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),dt.copy(L.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),dt.copy(Ie.boundingSphere.center)),dt.applyMatrix4(L.matrixWorld).applyMatrix4($t)),Array.isArray(Oe)){const Ye=Ie.groups;for(let je=0,nt=Ye.length;je<nt;je++){const ot=Ye[je],Ve=Oe[ot.materialIndex];Ve&&Ve.visible&&C.push(L,Ie,Ve,le,dt.z,ot)}}else Oe.visible&&C.push(L,Ie,Oe,le,dt.z,null)}}const De=L.children;for(let Ie=0,Oe=De.length;Ie<Oe;Ie++)qs(De[Ie],W,le,ae)}function $i(L,W,le,ae){const{opaque:$,transmissive:De,transparent:Ie}=L;N.setupLightsView(le),Ze===!0&&Me.setGlobalState(w.clippingPlanes,le),ae&&Ge.viewport(B.copy(ae)),$.length>0&&Cn($,W,le),De.length>0&&Cn(De,W,le),Ie.length>0&&Cn(Ie,W,le),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function _n(L,W,le,ae){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ae.id]===void 0){const Ve=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ae.id]=new zn(1,1,{generateMipmaps:!0,type:Ve?ur:Un,minFilter:zs,samples:Tt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const De=N.state.transmissionRenderTarget[ae.id],Ie=ae.viewport||B;De.setSize(Ie.z*w.transmissionResolutionScale,Ie.w*w.transmissionResolutionScale);const Oe=w.getRenderTarget(),Ye=w.getActiveCubeFace(),je=w.getActiveMipmapLevel();w.setRenderTarget(De),w.getClearColor(fe),Se=w.getClearAlpha(),Se<1&&w.setClearColor(16777215,.5),w.clear(),at&&we.render(le);const nt=w.toneMapping;w.toneMapping=ca;const ot=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),N.setupLightsView(ae),Ze===!0&&Me.setGlobalState(w.clippingPlanes,ae),Cn(L,le,ae),G.updateMultisampleRenderTarget(De),G.updateRenderTargetMipmap(De),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ct=0,nn=W.length;ct<nn;ct++){const an=W[ct],{object:Lt,geometry:wn,material:We,group:$n}=an;if(We.side===Ui&&Lt.layers.test(ae.layers)){const rt=We.side;We.side=Bn,We.needsUpdate=!0,Ua(Lt,le,ae,wn,We,$n),We.side=rt,We.needsUpdate=!0,Ve=!0}}Ve===!0&&(G.updateMultisampleRenderTarget(De),G.updateRenderTargetMipmap(De))}w.setRenderTarget(Oe,Ye,je),w.setClearColor(fe,Se),ot!==void 0&&(ae.viewport=ot),w.toneMapping=nt}function Cn(L,W,le){const ae=W.isScene===!0?W.overrideMaterial:null;for(let $=0,De=L.length;$<De;$++){const Ie=L[$],{object:Oe,geometry:Ye,group:je}=Ie;let nt=Ie.material;nt.allowOverride===!0&&ae!==null&&(nt=ae),Oe.layers.test(le.layers)&&Ua(Oe,W,le,Ye,nt,je)}}function Ua(L,W,le,ae,$,De){L.onBeforeRender(w,W,le,ae,$,De),L.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),$.onBeforeRender(w,W,le,ae,L,De),$.transparent===!0&&$.side===Ui&&$.forceSinglePass===!1?($.side=Bn,$.needsUpdate=!0,w.renderBufferDirect(le,W,ae,$,L,De),$.side=lr,$.needsUpdate=!0,w.renderBufferDirect(le,W,ae,$,L,De),$.side=Ui):w.renderBufferDirect(le,W,ae,$,L,De),L.onAfterRender(w,W,le,ae,$,De)}function dr(L,W,le){W.isScene!==!0&&(W=Ct);const ae=b.get(L),$=N.state.lights,De=N.state.shadowsArray,Ie=$.state.version,Oe=Ae.getParameters(L,$.state,De,W,le),Ye=Ae.getProgramCacheKey(Oe);let je=ae.programs;ae.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?W.environment:null,ae.fog=W.fog;const nt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ae.envMap=de.get(L.envMap||ae.environment,nt),ae.envMapRotation=ae.environment!==null&&L.envMap===null?W.environmentRotation:L.envMapRotation,je===void 0&&(L.addEventListener("dispose",wt),je=new Map,ae.programs=je);let ot=je.get(Ye);if(ot!==void 0){if(ae.currentProgram===ot&&ae.lightsStateVersion===Ie)return zu(L,Oe),ot}else Oe.uniforms=Ae.getUniforms(L),L.onBeforeCompile(Oe,w),ot=Ae.acquireProgram(Oe,Ye),je.set(Ye,ot),ae.uniforms=Oe.uniforms;const Ve=ae.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ve.clippingPlanes=Me.uniform),zu(L,Oe),ae.needsLights=dl(L),ae.lightsStateVersion=Ie,ae.needsLights&&(Ve.ambientLightColor.value=$.state.ambient,Ve.lightProbe.value=$.state.probe,Ve.directionalLights.value=$.state.directional,Ve.directionalLightShadows.value=$.state.directionalShadow,Ve.spotLights.value=$.state.spot,Ve.spotLightShadows.value=$.state.spotShadow,Ve.rectAreaLights.value=$.state.rectArea,Ve.ltc_1.value=$.state.rectAreaLTC1,Ve.ltc_2.value=$.state.rectAreaLTC2,Ve.pointLights.value=$.state.point,Ve.pointLightShadows.value=$.state.pointShadow,Ve.hemisphereLights.value=$.state.hemi,Ve.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ve.spotLightMatrix.value=$.state.spotLightMatrix,Ve.spotLightMap.value=$.state.spotLightMap,Ve.pointShadowMatrix.value=$.state.pointShadowMatrix),ae.currentProgram=ot,ae.uniformsList=null,ot}function Bu(L){if(L.uniformsList===null){const W=L.currentProgram.getUniforms();L.uniformsList=wf.seqWithValue(W.seq,L.uniforms)}return L.uniformsList}function zu(L,W){const le=b.get(L);le.outputColorSpace=W.outputColorSpace,le.batching=W.batching,le.batchingColor=W.batchingColor,le.instancing=W.instancing,le.instancingColor=W.instancingColor,le.instancingMorph=W.instancingMorph,le.skinning=W.skinning,le.morphTargets=W.morphTargets,le.morphNormals=W.morphNormals,le.morphColors=W.morphColors,le.morphTargetsCount=W.morphTargetsCount,le.numClippingPlanes=W.numClippingPlanes,le.numIntersection=W.numClipIntersection,le.vertexAlphas=W.vertexAlphas,le.vertexTangents=W.vertexTangents,le.toneMapping=W.toneMapping}function Iu(L,W,le,ae,$){W.isScene!==!0&&(W=Ct),G.resetTextureUnits();const De=W.fog,Ie=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?W.environment:null,Oe=K===null?w.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:is,Ye=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,je=de.get(ae.envMap||Ie,Ye),nt=ae.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ot=!!le.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ve=!!le.morphAttributes.position,ct=!!le.morphAttributes.normal,nn=!!le.morphAttributes.color;let an=ca;ae.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(an=w.toneMapping);const Lt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,wn=Lt!==void 0?Lt.length:0,We=b.get(ae),$n=N.state.lights;if(Ze===!0&&(Je===!0||L!==Z)){const xn=L===Z&&ae.id===ee;Me.setState(ae,L,xn)}let rt=!1;ae.version===We.__version?(We.needsLights&&We.lightsStateVersion!==$n.state.version||We.outputColorSpace!==Oe||$.isBatchedMesh&&We.batching===!1||!$.isBatchedMesh&&We.batching===!0||$.isBatchedMesh&&We.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&We.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&We.instancing===!1||!$.isInstancedMesh&&We.instancing===!0||$.isSkinnedMesh&&We.skinning===!1||!$.isSkinnedMesh&&We.skinning===!0||$.isInstancedMesh&&We.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&We.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&We.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&We.instancingMorph===!1&&$.morphTexture!==null||We.envMap!==je||ae.fog===!0&&We.fog!==De||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Me.numPlanes||We.numIntersection!==Me.numIntersection)||We.vertexAlphas!==nt||We.vertexTangents!==ot||We.morphTargets!==Ve||We.morphNormals!==ct||We.morphColors!==nn||We.toneMapping!==an||We.morphTargetsCount!==wn)&&(rt=!0):(rt=!0,We.__version=ae.version);let ei=We.currentProgram;rt===!0&&(ei=dr(ae,W,$));let vi=!1,ea=!1,xi=!1;const It=ei.getUniforms(),vn=We.uniforms;if(Ge.useProgram(ei.program)&&(vi=!0,ea=!0,xi=!0),ae.id!==ee&&(ee=ae.id,ea=!0),vi||Z!==L){Ge.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),It.setValue(k,"projectionMatrix",L.projectionMatrix),It.setValue(k,"viewMatrix",L.matrixWorldInverse);const ta=It.map.cameraPosition;ta!==void 0&&ta.setValue(k,mt.setFromMatrixPosition(L.matrixWorld)),Tt.logarithmicDepthBuffer&&It.setValue(k,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&It.setValue(k,"isOrthographic",L.isOrthographicCamera===!0),Z!==L&&(Z=L,ea=!0,xi=!0)}if(We.needsLights&&($n.state.directionalShadowMap.length>0&&It.setValue(k,"directionalShadowMap",$n.state.directionalShadowMap,G),$n.state.spotShadowMap.length>0&&It.setValue(k,"spotShadowMap",$n.state.spotShadowMap,G),$n.state.pointShadowMap.length>0&&It.setValue(k,"pointShadowMap",$n.state.pointShadowMap,G)),$.isSkinnedMesh){It.setOptional(k,$,"bindMatrix"),It.setOptional(k,$,"bindMatrixInverse");const xn=$.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),It.setValue(k,"boneTexture",xn.boneTexture,G))}$.isBatchedMesh&&(It.setOptional(k,$,"batchingTexture"),It.setValue(k,"batchingTexture",$._matricesTexture,G),It.setOptional(k,$,"batchingIdTexture"),It.setValue(k,"batchingIdTexture",$._indirectTexture,G),It.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&It.setValue(k,"batchingColorTexture",$._colorsTexture,G));const ti=le.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&Ne.update($,le,ei),(ea||We.receiveShadow!==$.receiveShadow)&&(We.receiveShadow=$.receiveShadow,It.setValue(k,"receiveShadow",$.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&W.environment!==null&&(vn.envMapIntensity.value=W.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=yw()),ea&&(It.setValue(k,"toneMappingExposure",w.toneMappingExposure),We.needsLights&&rs(vn,xi),De&&ae.fog===!0&&Xe.refreshFogUniforms(vn,De),Xe.refreshMaterialUniforms(vn,ae,ge,j,N.state.transmissionRenderTarget[L.id]),wf.upload(k,Bu(We),vn,G)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(wf.upload(k,Bu(We),vn,G),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&It.setValue(k,"center",$.center),It.setValue(k,"modelViewMatrix",$.modelViewMatrix),It.setValue(k,"normalMatrix",$.normalMatrix),It.setValue(k,"modelMatrix",$.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const xn=ae.uniformsGroups;for(let ta=0,La=xn.length;ta<La;ta++){const js=xn[ta];ze.update(js,ei),ze.bind(js,ei)}}return ei}function rs(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function dl(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(L,W,le){const ae=b.get(L);ae.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),b.get(L.texture).__webglTexture=W,b.get(L.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:le,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,W){const le=b.get(L);le.__webglFramebuffer=W,le.__useDefaultFramebuffer=W===void 0};const pr=k.createFramebuffer();this.setRenderTarget=function(L,W=0,le=0){K=L,H=W,q=le;let ae=null,$=!1,De=!1;if(L){const Oe=b.get(L);if(Oe.__useDefaultFramebuffer!==void 0){Ge.bindFramebuffer(k.FRAMEBUFFER,Oe.__webglFramebuffer),B.copy(L.viewport),F.copy(L.scissor),se=L.scissorTest,Ge.viewport(B),Ge.scissor(F),Ge.setScissorTest(se),ee=-1;return}else if(Oe.__webglFramebuffer===void 0)G.setupRenderTarget(L);else if(Oe.__hasExternalTextures)G.rebindTextures(L,b.get(L.texture).__webglTexture,b.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const nt=L.depthTexture;if(Oe.__boundDepthTexture!==nt){if(nt!==null&&b.has(nt)&&(L.width!==nt.image.width||L.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(L)}}const Ye=L.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(De=!0);const je=b.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(je[W])?ae=je[W][le]:ae=je[W],$=!0):L.samples>0&&G.useMultisampledRTT(L)===!1?ae=b.get(L).__webglMultisampledFramebuffer:Array.isArray(je)?ae=je[le]:ae=je,B.copy(L.viewport),F.copy(L.scissor),se=L.scissorTest}else B.copy(ie).multiplyScalar(ge).floor(),F.copy(ve).multiplyScalar(ge).floor(),se=be;if(le!==0&&(ae=pr),Ge.bindFramebuffer(k.FRAMEBUFFER,ae)&&Ge.drawBuffers(L,ae),Ge.viewport(B),Ge.scissor(F),Ge.setScissorTest(se),$){const Oe=b.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,le)}else if(De){const Oe=W;for(let Ye=0;Ye<L.textures.length;Ye++){const je=b.get(L.textures[Ye]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ye,je.__webglTexture,le,Oe)}}else if(L!==null&&le!==0){const Oe=b.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Oe.__webglTexture,le)}ee=-1},this.readRenderTargetPixels=function(L,W,le,ae,$,De,Ie,Oe=0){if(!(L&&L.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=b.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ye=Ye[Ie]),Ye){Ge.bindFramebuffer(k.FRAMEBUFFER,Ye);try{const je=L.textures[Oe],nt=je.format,ot=je.type;if(L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Oe),!Tt.textureFormatReadable(nt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(ot)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-ae&&le>=0&&le<=L.height-$&&k.readPixels(W,le,ae,$,Ce.convert(nt),Ce.convert(ot),De)}finally{const je=K!==null?b.get(K).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(L,W,le,ae,$,De,Ie,Oe=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=b.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ye=Ye[Ie]),Ye)if(W>=0&&W<=L.width-ae&&le>=0&&le<=L.height-$){Ge.bindFramebuffer(k.FRAMEBUFFER,Ye);const je=L.textures[Oe],nt=je.format,ot=je.type;if(L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Oe),!Tt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ve),k.bufferData(k.PIXEL_PACK_BUFFER,De.byteLength,k.STREAM_READ),k.readPixels(W,le,ae,$,Ce.convert(nt),Ce.convert(ot),0);const ct=K!==null?b.get(K).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,ct);const nn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Nb(k,nn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ve),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,De),k.deleteBuffer(Ve),k.deleteSync(nn),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,W=null,le=0){const ae=Math.pow(2,-le),$=Math.floor(L.image.width*ae),De=Math.floor(L.image.height*ae),Ie=W!==null?W.x:0,Oe=W!==null?W.y:0;G.setTexture2D(L,0),k.copyTexSubImage2D(k.TEXTURE_2D,le,0,0,Ie,Oe,$,De),Ge.unbindTexture()};const mr=k.createFramebuffer(),ss=k.createFramebuffer();this.copyTextureToTexture=function(L,W,le=null,ae=null,$=0,De=0){let Ie,Oe,Ye,je,nt,ot,Ve,ct,nn;const an=L.isCompressedTexture?L.mipmaps[De]:L.image;if(le!==null)Ie=le.max.x-le.min.x,Oe=le.max.y-le.min.y,Ye=le.isBox3?le.max.z-le.min.z:1,je=le.min.x,nt=le.min.y,ot=le.isBox3?le.min.z:0;else{const vn=Math.pow(2,-$);Ie=Math.floor(an.width*vn),Oe=Math.floor(an.height*vn),L.isDataArrayTexture?Ye=an.depth:L.isData3DTexture?Ye=Math.floor(an.depth*vn):Ye=1,je=0,nt=0,ot=0}ae!==null?(Ve=ae.x,ct=ae.y,nn=ae.z):(Ve=0,ct=0,nn=0);const Lt=Ce.convert(W.format),wn=Ce.convert(W.type);let We;W.isData3DTexture?(G.setTexture3D(W,0),We=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(G.setTexture2DArray(W,0),We=k.TEXTURE_2D_ARRAY):(G.setTexture2D(W,0),We=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const $n=k.getParameter(k.UNPACK_ROW_LENGTH),rt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ei=k.getParameter(k.UNPACK_SKIP_PIXELS),vi=k.getParameter(k.UNPACK_SKIP_ROWS),ea=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,an.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,an.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,je),k.pixelStorei(k.UNPACK_SKIP_ROWS,nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ot);const xi=L.isDataArrayTexture||L.isData3DTexture,It=W.isDataArrayTexture||W.isData3DTexture;if(L.isDepthTexture){const vn=b.get(L),ti=b.get(W),xn=b.get(vn.__renderTarget),ta=b.get(ti.__renderTarget);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,xn.__webglFramebuffer),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,ta.__webglFramebuffer);for(let La=0;La<Ye;La++)xi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(L).__webglTexture,$,ot+La),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(W).__webglTexture,De,nn+La)),k.blitFramebuffer(je,nt,Ie,Oe,Ve,ct,Ie,Oe,k.DEPTH_BUFFER_BIT,k.NEAREST);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||L.isRenderTargetTexture||b.has(L)){const vn=b.get(L),ti=b.get(W);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,mr),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,ss);for(let xn=0;xn<Ye;xn++)xi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,vn.__webglTexture,$,ot+xn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,vn.__webglTexture,$),It?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ti.__webglTexture,De,nn+xn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ti.__webglTexture,De),$!==0?k.blitFramebuffer(je,nt,Ie,Oe,Ve,ct,Ie,Oe,k.COLOR_BUFFER_BIT,k.NEAREST):It?k.copyTexSubImage3D(We,De,Ve,ct,nn+xn,je,nt,Ie,Oe):k.copyTexSubImage2D(We,De,Ve,ct,je,nt,Ie,Oe);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else It?L.isDataTexture||L.isData3DTexture?k.texSubImage3D(We,De,Ve,ct,nn,Ie,Oe,Ye,Lt,wn,an.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(We,De,Ve,ct,nn,Ie,Oe,Ye,Lt,an.data):k.texSubImage3D(We,De,Ve,ct,nn,Ie,Oe,Ye,Lt,wn,an):L.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,De,Ve,ct,Ie,Oe,Lt,wn,an.data):L.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,De,Ve,ct,an.width,an.height,Lt,an.data):k.texSubImage2D(k.TEXTURE_2D,De,Ve,ct,Ie,Oe,Lt,wn,an);k.pixelStorei(k.UNPACK_ROW_LENGTH,$n),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,rt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ei),k.pixelStorei(k.UNPACK_SKIP_ROWS,vi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ea),De===0&&W.generateMipmaps&&k.generateMipmap(We),Ge.unbindTexture()},this.initRenderTarget=function(L){b.get(L).__webglFramebuffer===void 0&&G.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?G.setTextureCube(L,0):L.isData3DTexture?G.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?G.setTexture2DArray(L,0):G.setTexture2D(L,0),Ge.unbindTexture()},this.resetState=function(){H=0,q=0,K=null,Ge.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Dt._getUnpackColorSpace()}}var kp=1/1e3,Tw=1e3,bw=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(r){typeof document<"u"&&document.hidden!==void 0&&(r?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=r)}get delta(){return this._delta*kp}get fixedDelta(){return this._fixedDelta*kp}set fixedDelta(r){this._fixedDelta=r*Tw}get elapsed(){return this._elapsed*kp}update(r){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(r!==void 0?r:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(r){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Aw=(()=>{const r=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new Da;return n.setAttribute("position",new Qi(r,3)),n.setAttribute("uv",new Qi(e,2)),n})(),da=class Qm{static get fullscreenGeometry(){return Aw}constructor(e="Pass",n=new jm,a=new Yf){this.name=e,this.renderer=null,this.scene=n,this.camera=a,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new ha(Qm.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new jm),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=Uu){}render(e,n,a,o,l){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,a){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof zn||n instanceof cl||n instanceof Yn||n instanceof Qm)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Rw=class extends da{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(r,e,n,a,o){const l=r.state.buffers.stencil;l.setLocked(!1),l.setTest(!1)}},Cw=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,py="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",my=class extends Fn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Ut(null),depthBuffer:new Ut(null),channelWeights:new Ut(null),opacity:new Ut(1)},blending:si,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Cw,vertexShader:py}),this.depthFunc=zf}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(r){const e=r!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=r}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(r){const e=r!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=r}set depthPacking(r){this.defines.DEPTH_PACKING=r.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(r){this.colorSpaceConversion!==r&&(r?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(r){r!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=r):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(r){this.uniforms.inputBuffer.value=r}getOpacity(r){return this.uniforms.opacity.value}setOpacity(r){this.uniforms.opacity.value=r}},ww=class extends da{constructor(r,e=!0){super("CopyPass"),this.fullscreenMaterial=new my,this.needsSwap=!1,this.renderTarget=r,r===void 0&&(this.renderTarget=new zn(1,1,{minFilter:An,magFilter:An,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(r){this.autoResize=r}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(r){this.autoResize=r}render(r,e,n,a,o){this.fullscreenMaterial.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){this.autoResize&&this.renderTarget.setSize(r,e)}initialize(r,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==Un?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":r!==null&&r.outputColorSpace===Wt&&(this.renderTarget.texture.colorSpace=Wt))}},US=new Ft,gy=class extends da{constructor(r=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=r,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(r,e,n){this.color=r,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(r){this.overrideClearColor=r}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(r){this.overrideClearAlpha=r}render(r,e,n,a,o){const l=this.overrideClearColor,c=this.overrideClearAlpha,f=r.getClearAlpha(),p=l!==null,d=c>=0;p?(r.getClearColor(US),r.setClearColor(l,d?c:f)):d&&r.setClearAlpha(c),r.setRenderTarget(this.renderToScreen?null:e),r.clear(this.color,this.depth,this.stencil),p?r.setClearColor(US,f):d&&r.setClearAlpha(f)}},Dw=class extends da{constructor(r,e){super("MaskPass",r,e),this.needsSwap=!1,this.clearPass=new gy(!1,!1,!0),this.inverse=!1}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get inverted(){return this.inverse}set inverted(r){this.inverse=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(r){this.inverted=r}render(r,e,n,a,o){const l=r.getContext(),c=r.state.buffers,f=this.scene,p=this.camera,d=this.clearPass,g=this.inverted?0:1,v=1-g;c.color.setMask(!1),c.depth.setMask(!1),c.color.setLocked(!0),c.depth.setLocked(!0),c.stencil.setTest(!0),c.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.stencil.setFunc(l.ALWAYS,g,4294967295),c.stencil.setClear(v),c.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?d.render(r,null):(d.render(r,e),d.render(r,n))),this.renderToScreen?(r.setRenderTarget(null),r.render(f,p)):(r.setRenderTarget(e),r.render(f,p),r.setRenderTarget(n),r.render(f,p)),c.color.setLocked(!1),c.depth.setLocked(!1),c.stencil.setLocked(!1),c.stencil.setFunc(l.EQUAL,1,4294967295),c.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.stencil.setLocked(!0)}},Uw=class{constructor(r=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:a=0,frameBufferType:o}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,o,a),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new ww,this.depthTexture=null,this.passes=[],this.timer=new bw,this.autoRenderToScreen=!0,this.setRenderer(r)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(r){const e=this.inputBuffer,n=this.multisampling;n>0&&r>0?(this.inputBuffer.samples=r,this.outputBuffer.samples=r,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==r&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,r),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(r){if(this.renderer=r,r!==null){const e=r.getSize(new et),n=r.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;a===Un&&r.outputColorSpace===Wt&&(this.inputBuffer.texture.colorSpace=Wt,this.outputBuffer.texture.colorSpace=Wt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),r.autoClear=!1,this.setSize(e.width,e.height);for(const o of this.passes)o.initialize(r,n,a)}}replaceRenderer(r,e=!0){const n=this.renderer,a=n.domElement.parentNode;return this.setRenderer(r),e&&a!==null&&(a.removeChild(n.domElement),a.appendChild(r.domElement)),n}createDepthTexture(){const r=this.depthTexture=new sl;return this.inputBuffer.depthTexture=r,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(r.format=Zr,r.type=al):r.type=fa,r}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const r of this.passes)r.setDepthTexture(null)}}createBuffer(r,e,n,a){const o=this.renderer,l=o===null?new et:o.getDrawingBufferSize(new et),c={minFilter:An,magFilter:An,stencilBuffer:e,depthBuffer:r,type:n},f=new zn(l.width,l.height,c);return a>0&&(f.samples=a),n===Un&&o!==null&&o.outputColorSpace===Wt&&(f.texture.colorSpace=Wt),f.texture.name="EffectComposer.Buffer",f.texture.generateMipmaps=!1,f}setMainScene(r){for(const e of this.passes)e.mainScene=r}setMainCamera(r){for(const e of this.passes)e.mainCamera=r}addPass(r,e){const n=this.passes,a=this.renderer,o=a.getDrawingBufferSize(new et),l=a.getContext().getContextAttributes().alpha,c=this.inputBuffer.texture.type;if(r.setRenderer(a),r.setSize(o.width,o.height),r.initialize(a,l,c),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),r.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,r):n.push(r),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),r.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const f=this.createDepthTexture();for(r of n)r.setDepthTexture(f)}else r.setDepthTexture(this.depthTexture)}removePass(r){const e=this.passes,n=e.indexOf(r);if(n!==-1&&e.splice(n,1).length>0){if(this.depthTexture!==null){const l=(f,p)=>f||p.needsDepthTexture;e.reduce(l,!1)||(r.getDepthTexture()===this.depthTexture&&r.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(r.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const r=this.passes;this.deleteDepthTexture(),r.length>0&&(this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!1),this.passes=[])}render(r){const e=this.renderer,n=this.copyPass;let a=this.inputBuffer,o=this.outputBuffer,l=!1,c,f,p;r===void 0&&(this.timer.update(),r=this.timer.getDelta());for(const d of this.passes)d.enabled&&(d.render(e,a,o,r,l),d.needsSwap&&(l&&(n.renderToScreen=d.renderToScreen,c=e.getContext(),f=e.state.buffers.stencil,f.setFunc(c.NOTEQUAL,1,4294967295),n.render(e,a,o,r,l),f.setFunc(c.EQUAL,1,4294967295)),p=a,a=o,o=p),d instanceof Dw?l=!0:d instanceof Rw&&(l=!1))}setSize(r,e,n){const a=this.renderer,o=a.getSize(new et);(r===void 0||e===void 0)&&(r=o.width,e=o.height),(o.width!==r||o.height!==e)&&a.setSize(r,e,n);const l=a.getDrawingBufferSize(new et);this.inputBuffer.setSize(l.width,l.height),this.outputBuffer.setSize(l.width,l.height);for(const c of this.passes)c.setSize(l.width,l.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const r of this.passes)r.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),da.fullscreenGeometry.dispose()}},$r={NONE:0,DEPTH:1,CONVOLUTION:2},Bt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},Lw=class{constructor(){this.shaderParts=new Map([[Bt.FRAGMENT_HEAD,null],[Bt.FRAGMENT_MAIN_UV,null],[Bt.FRAGMENT_MAIN_IMAGE,null],[Bt.VERTEX_HEAD,null],[Bt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=$r.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=is}},Xp=!1,LS=class{constructor(r=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(r),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case Ui:n=this.materialsFlatShadedDoubleSide;break;case Bn:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case Ui:n=this.materialsDoubleSide;break;case Bn:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(r){if(!(r instanceof Fn))return r.clone();const e=r.uniforms,n=new Map;for(const o in e){const l=e[o].value;l.isRenderTargetTexture&&(e[o].value=null,n.set(o,l))}const a=r.clone();for(const o of n)e[o[0]].value=o[1],a.uniforms[o[0]].value=o[1];return a}setMaterial(r){if(this.disposeMaterials(),this.material=r,r!==null){const e=this.materials=[this.cloneMaterial(r),this.cloneMaterial(r),this.cloneMaterial(r)];for(const n of e)n.uniforms=Object.assign({},r.uniforms),n.side=lr;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const a=this.cloneMaterial(n);return a.uniforms=Object.assign({},r.uniforms),a.side=Bn,a}),this.materialsDoubleSide=e.map(n=>{const a=this.cloneMaterial(n);return a.uniforms=Object.assign({},r.uniforms),a.side=Ui,a}),this.materialsFlatShaded=e.map(n=>{const a=this.cloneMaterial(n);return a.uniforms=Object.assign({},r.uniforms),a.flatShading=!0,a}),this.materialsFlatShadedBackSide=e.map(n=>{const a=this.cloneMaterial(n);return a.uniforms=Object.assign({},r.uniforms),a.flatShading=!0,a.side=Bn,a}),this.materialsFlatShadedDoubleSide=e.map(n=>{const a=this.cloneMaterial(n);return a.uniforms=Object.assign({},r.uniforms),a.flatShading=!0,a.side=Ui,a})}}render(r,e,n){const a=r.shadowMap.enabled;if(r.shadowMap.enabled=!1,Xp){const o=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),r.render(e,n);for(const l of o)l[0].material=l[1];this.meshCount!==o.size&&o.clear()}else{const o=e.overrideMaterial;e.overrideMaterial=this.material,r.render(e,n),e.overrideMaterial=o}r.shadowMap.enabled=a}disposeMaterials(){if(this.material!==null){const r=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of r)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Xp}static set workaroundEnabled(r){Xp=r}},Wr=-1,Ca=class extends hr{constructor(r,e=Wr,n=Wr,a=1){super(),this.resizable=r,this.baseSize=new et(1,1),this.preferredSize=new et(e,n),this.target=this.preferredSize,this.s=a,this.effectiveSize=new et,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const r=this.baseSize,e=this.preferredSize,n=this.effectiveSize,a=this.scale;e.width!==Wr?n.width=e.width:e.height!==Wr?n.width=Math.round(e.height*(r.width/Math.max(r.height,1))):n.width=Math.round(r.width*a),e.height!==Wr?n.height=e.height:e.width!==Wr?n.height=Math.round(e.width/Math.max(r.width/Math.max(r.height,1),1)):n.height=Math.round(r.height*a)}get width(){return this.effectiveSize.width}set width(r){this.preferredWidth=r}get height(){return this.effectiveSize.height}set height(r){this.preferredHeight=r}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(r){this.s!==r&&(this.s=r,this.preferredSize.setScalar(Wr),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(r){this.scale=r}get baseWidth(){return this.baseSize.width}set baseWidth(r){this.baseSize.width!==r&&(this.baseSize.width=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(r){this.baseWidth=r}get baseHeight(){return this.baseSize.height}set baseHeight(r){this.baseSize.height!==r&&(this.baseSize.height=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(r){this.baseHeight=r}setBaseSize(r,e){(this.baseSize.width!==r||this.baseSize.height!==e)&&(this.baseSize.set(r,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(r){this.preferredSize.width!==r&&(this.preferredSize.width=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(r){this.preferredWidth=r}get preferredHeight(){return this.preferredSize.height}set preferredHeight(r){this.preferredSize.height!==r&&(this.preferredSize.height=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(r){this.preferredHeight=r}setPreferredSize(r,e){(this.preferredSize.width!==r||this.preferredSize.height!==e)&&(this.preferredSize.set(r,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(r){this.s=r.scale,this.baseSize.set(r.baseWidth,r.baseHeight),this.preferredSize.set(r.preferredWidth,r.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Wr}},yt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Nw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ow="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",Pw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Bw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Iw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ww="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Kw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Qw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Jw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$w="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",eD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",nD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",aD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",oD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",lD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",uD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cD="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fD=new Map([[yt.ADD,Nw],[yt.ALPHA,Ow],[yt.AVERAGE,Pw],[yt.COLOR,Bw],[yt.COLOR_BURN,zw],[yt.COLOR_DODGE,Iw],[yt.DARKEN,Fw],[yt.DIFFERENCE,Hw],[yt.DIVIDE,Gw],[yt.DST,null],[yt.EXCLUSION,Vw],[yt.HARD_LIGHT,kw],[yt.HARD_MIX,Xw],[yt.HUE,Ww],[yt.INVERT,Yw],[yt.INVERT_RGB,qw],[yt.LIGHTEN,jw],[yt.LINEAR_BURN,Zw],[yt.LINEAR_DODGE,Kw],[yt.LINEAR_LIGHT,Qw],[yt.LUMINOSITY,Jw],[yt.MULTIPLY,$w],[yt.NEGATION,eD],[yt.NORMAL,tD],[yt.OVERLAY,nD],[yt.PIN_LIGHT,iD],[yt.REFLECT,aD],[yt.SATURATION,rD],[yt.SCREEN,sD],[yt.SOFT_LIGHT,oD],[yt.SRC,lD],[yt.SUBTRACT,uD],[yt.VIVID_LIGHT,cD]]),hD=class extends hr{constructor(r,e=1){super(),this._blendFunction=r,this.opacity=new Ut(e)}getOpacity(){return this.opacity.value}setOpacity(r){this.opacity.value=r}get blendFunction(){return this._blendFunction}set blendFunction(r){this._blendFunction=r,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(r){this.blendFunction=r}getShaderCode(){return fD.get(this.blendFunction)}},_y=class extends hr{constructor(r,e,{attributes:n=$r.NONE,blendFunction:a=yt.NORMAL,defines:o=new Map,uniforms:l=new Map,extensions:c=null,vertexShader:f=null}={}){super(),this.name=r,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=f,this.defines=o,this.uniforms=l,this.extensions=c,this.blendMode=new hD(a),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=is,this._outputColorSpace=Ta}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(r){this._inputColorSpace=r,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(r){this._outputColorSpace=r,this.setChanged()}set mainScene(r){}set mainCamera(r){}getName(){return this.name}setRenderer(r){this.renderer=r}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(r){this.attributes=r,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(r){this.fragmentShader=r,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(r){this.vertexShader=r,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(r,e=Uu){}update(r,e,n){}setSize(r,e){}initialize(r,e,n){}dispose(){for(const r of Object.keys(this)){const e=this[r];(e instanceof zn||e instanceof cl||e instanceof Yn||e instanceof da)&&this[r].dispose()}}},C0={MEDIUM:2,LARGE:3},dD=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,pD="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",mD=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],gD=class extends Fn{constructor(r=new cn){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Ut(null),texelSize:new Ut(new cn),scale:new Ut(1),kernel:new Ut(0)},blending:si,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:dD,vertexShader:pD}),this.setTexelSize(r.x,r.y),this.kernelSize=C0.MEDIUM}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.inputBuffer=r}get kernelSequence(){return mD[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(r){this.uniforms.scale.value=r}getScale(){return this.uniforms.scale.value}setScale(r){this.uniforms.scale.value=r}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(r){this.uniforms.kernel.value=r}setKernel(r){this.kernel=r}setTexelSize(r,e){this.uniforms.texelSize.value.set(r,e,r*.5,e*.5)}setSize(r,e){const n=1/r,a=1/e;this.uniforms.texelSize.value.set(n,a,n*.5,a*.5)}},_D=class extends da{constructor({kernelSize:r=C0.MEDIUM,resolutionScale:e=.5,width:n=Ca.AUTO_SIZE,height:a=Ca.AUTO_SIZE,resolutionX:o=n,resolutionY:l=a}={}){super("KawaseBlurPass"),this.renderTargetA=new zn(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const c=this.resolution=new Ca(this,o,l,e);c.addEventListener("change",f=>this.setSize(c.baseWidth,c.baseHeight)),this._blurMaterial=new gD,this._blurMaterial.kernelSize=r,this.copyMaterial=new my}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(r){this._blurMaterial=r}get dithering(){return this.copyMaterial.dithering}set dithering(r){this.copyMaterial.dithering=r}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(r){this.blurMaterial.kernelSize=r}get width(){return this.resolution.width}set width(r){this.resolution.preferredWidth=r}get height(){return this.resolution.height}set height(r){this.resolution.preferredHeight=r}get scale(){return this.blurMaterial.scale}set scale(r){this.blurMaterial.scale=r}getScale(){return this.blurMaterial.scale}setScale(r){this.blurMaterial.scale=r}getKernelSize(){return this.kernelSize}setKernelSize(r){this.kernelSize=r}getResolutionScale(){return this.resolution.scale}setResolutionScale(r){this.resolution.scale=r}render(r,e,n,a,o){const l=this.scene,c=this.camera,f=this.renderTargetA,p=this.renderTargetB,d=this.blurMaterial,g=d.kernelSequence;let v=e;this.fullscreenMaterial=d;for(let _=0,x=g.length;_<x;++_){const y=(_&1)===0?f:p;d.kernel=g[_],d.inputBuffer=v.texture,r.setRenderTarget(y),r.render(l,c),v=y}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=v.texture,r.setRenderTarget(this.renderToScreen?null:n),r.render(l,c)}setSize(r,e){const n=this.resolution;n.setBaseSize(r,e);const a=n.width,o=n.height;this.renderTargetA.setSize(a,o),this.renderTargetB.setSize(a,o),this.blurMaterial.setSize(r,e)}initialize(r,e,n){n!==void 0&&(this.renderTargetA.texture.type=n,this.renderTargetB.texture.type=n,n!==Un?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):r!==null&&r.outputColorSpace===Wt&&(this.renderTargetA.texture.colorSpace=Wt,this.renderTargetB.texture.colorSpace=Wt))}static get AUTO_SIZE(){return Ca.AUTO_SIZE}},vD=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,xD=class extends Fn{constructor(r=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Du.replace(/\D+/g,"")},uniforms:{inputBuffer:new Ut(null),threshold:new Ut(0),smoothing:new Ut(1),range:new Ut(null)},blending:si,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:vD,vertexShader:py}),this.colorOutput=r,this.luminanceRange=e}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get threshold(){return this.uniforms.threshold.value}set threshold(r){this.smoothing>0||r>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=r}getThreshold(){return this.threshold}setThreshold(r){this.threshold=r}get smoothing(){return this.uniforms.smoothing.value}set smoothing(r){this.threshold>0||r>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=r}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(r){this.smoothing=r}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(r){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(r){r?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(r){return this.colorOutput}setColorOutputEnabled(r){this.colorOutput=r}get useRange(){return this.luminanceRange!==null}set useRange(r){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(r){r!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=r,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(r){this.luminanceRange=r}},SD=class extends da{constructor({renderTarget:r,luminanceRange:e,colorOutput:n,resolutionScale:a=1,width:o=Ca.AUTO_SIZE,height:l=Ca.AUTO_SIZE,resolutionX:c=o,resolutionY:f=l}={}){super("LuminancePass"),this.fullscreenMaterial=new xD(n,e),this.needsSwap=!1,this.renderTarget=r,this.renderTarget===void 0&&(this.renderTarget=new zn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const p=this.resolution=new Ca(this,c,f,a);p.addEventListener("change",d=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(r,e,n,a,o){const l=this.fullscreenMaterial;l.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){const n=this.resolution;n.setBaseSize(r,e),this.renderTarget.setSize(n.width,n.height)}initialize(r,e,n){n!==void 0&&n!==Un&&(this.renderTarget.texture.type=n,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},MD=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,yD="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",ED=class extends Fn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Ut(null),texelSize:new Ut(new et)},blending:si,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:MD,vertexShader:yD})}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setSize(r,e){this.uniforms.texelSize.value.set(1/r,1/e)}},TD=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,bD="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",AD=class extends Fn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Ut(null),supportBuffer:new Ut(null),texelSize:new Ut(new et),radius:new Ut(.85)},blending:si,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:TD,vertexShader:bD})}set inputBuffer(r){this.uniforms.inputBuffer.value=r}set supportBuffer(r){this.uniforms.supportBuffer.value=r}get radius(){return this.uniforms.radius.value}set radius(r){this.uniforms.radius.value=r}setSize(r,e){this.uniforms.texelSize.value.set(1/r,1/e)}},RD=class extends da{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new zn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new ED,this.upsamplingMaterial=new AD,this.resolution=new et}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(r){if(this.levels!==r){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let n=0;n<r;++n){const a=e.clone();a.texture.name="Downsampling.Mipmap"+n,this.downsamplingMipmaps.push(a)}this.upsamplingMipmaps.push(e);for(let n=1,a=r-1;n<a;++n){const o=e.clone();o.texture.name="Upsampling.Mipmap"+n,this.upsamplingMipmaps.push(o)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(r){this.upsamplingMaterial.radius=r}render(r,e,n,a,o){const{scene:l,camera:c}=this,{downsamplingMaterial:f,upsamplingMaterial:p}=this,{downsamplingMipmaps:d,upsamplingMipmaps:g}=this;let v=e;this.fullscreenMaterial=f;for(let _=0,x=d.length;_<x;++_){const y=d[_];f.setSize(v.width,v.height),f.inputBuffer=v.texture,r.setRenderTarget(y),r.render(l,c),v=y}this.fullscreenMaterial=p;for(let _=g.length-1;_>=0;--_){const x=g[_];p.setSize(v.width,v.height),p.inputBuffer=v.texture,p.supportBuffer=d[_].texture,r.setRenderTarget(x),r.render(l,c),v=x}}setSize(r,e){const n=this.resolution;n.set(r,e);let a=n.width,o=n.height;for(let l=0,c=this.downsamplingMipmaps.length;l<c;++l)a=Math.round(a*.5),o=Math.round(o*.5),this.downsamplingMipmaps[l].setSize(a,o),l<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[l].setSize(a,o)}initialize(r,e,n){if(n!==void 0){const a=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const o of a)o.texture.type=n;if(n!==Un)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(r!==null&&r.outputColorSpace===Wt)for(const o of a)o.texture.colorSpace=Wt}}dispose(){super.dispose();for(const r of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))r.dispose()}},CD=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,wD=class extends _y{constructor({blendFunction:r=yt.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:n=.03,mipmapBlur:a=!0,intensity:o=1,radius:l=.85,levels:c=8,kernelSize:f=C0.LARGE,resolutionScale:p=.5,width:d=Ca.AUTO_SIZE,height:g=Ca.AUTO_SIZE,resolutionX:v=d,resolutionY:_=g}={}){super("BloomEffect",CD,{blendFunction:r,uniforms:new Map([["map",new Ut(null)],["intensity",new Ut(o)]])}),this.renderTarget=new zn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new _D({kernelSize:f}),this.luminancePass=new SD({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=n,this.mipmapBlurPass=new RD,this.mipmapBlurPass.enabled=a,this.mipmapBlurPass.radius=l,this.mipmapBlurPass.levels=c,this.uniforms.get("map").value=a?this.mipmapBlurPass.texture:this.renderTarget.texture;const x=this.resolution=new Ca(this,v,_,p);x.addEventListener("change",y=>this.setSize(x.baseWidth,x.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(r){this.resolution.preferredWidth=r}get height(){return this.resolution.height}set height(r){this.resolution.preferredHeight=r}get dithering(){return this.blurPass.dithering}set dithering(r){this.blurPass.dithering=r}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(r){this.blurPass.kernelSize=r}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(r){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(r){this.uniforms.get("intensity").value=r}getIntensity(){return this.intensity}setIntensity(r){this.intensity=r}getResolutionScale(){return this.resolution.scale}setResolutionScale(r){this.resolution.scale=r}update(r,e,n){const a=this.renderTarget,o=this.luminancePass;o.enabled?(o.render(r,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(r,o.renderTarget):this.blurPass.render(r,o.renderTarget,a)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(r,e):this.blurPass.render(r,e,a)}setSize(r,e){const n=this.resolution;n.setBaseSize(r,e),this.renderTarget.setSize(n.width,n.height),this.blurPass.resolution.copy(n),this.luminancePass.setSize(r,e),this.mipmapBlurPass.setSize(r,e)}initialize(r,e,n){this.blurPass.initialize(r,e,n),this.luminancePass.initialize(r,e,n),this.mipmapBlurPass.initialize(r,e,n),n!==void 0&&(this.renderTarget.texture.type=n,r!==null&&r.outputColorSpace===Wt&&(this.renderTarget.texture.colorSpace=Wt))}},DD=`#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`,UD="uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}",LD=class extends _y{constructor({offset:r=new et(.001,5e-4),radialModulation:e=!1,modulationOffset:n=.15}={}){super("ChromaticAberrationEffect",DD,{vertexShader:UD,attributes:$r.CONVOLUTION,uniforms:new Map([["offset",new Ut(r)],["modulationOffset",new Ut(n)]])}),this.radialModulation=e}get offset(){return this.uniforms.get("offset").value}set offset(r){this.uniforms.get("offset").value=r}get radialModulation(){return this.defines.has("RADIAL_MODULATION")}set radialModulation(r){r?this.defines.set("RADIAL_MODULATION","1"):this.defines.delete("RADIAL_MODULATION"),this.setChanged()}get modulationOffset(){return this.uniforms.get("modulationOffset").value}set modulationOffset(r){this.uniforms.get("modulationOffset").value=r}getOffset(){return this.offset}setOffset(r){this.offset=r}},ND=class extends da{constructor(r,e,n=null){super("RenderPass",r,e),this.needsSwap=!1,this.clearPass=new gy,this.overrideMaterialManager=n===null?null:new LS(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get renderToScreen(){return super.renderToScreen}set renderToScreen(r){super.renderToScreen=r,this.clearPass.renderToScreen=r}get overrideMaterial(){const r=this.overrideMaterialManager;return r!==null?r.material:null}set overrideMaterial(r){const e=this.overrideMaterialManager;r!==null?e!==null?e.setMaterial(r):this.overrideMaterialManager=new LS(r):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(r){this.overrideMaterial=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getSelection(){return this.selection}setSelection(r){this.selection=r}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(r){this.ignoreBackground=r}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(r){this.skipShadowMapUpdate=r}getClearPass(){return this.clearPass}render(r,e,n,a,o){const l=this.scene,c=this.camera,f=this.selection,p=c.layers.mask,d=l.background,g=r.shadowMap.autoUpdate,v=this.renderToScreen?null:e;f!==null&&c.layers.set(f.getLayer()),this.skipShadowMapUpdate&&(r.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(l.background=null),this.clearPass.enabled&&this.clearPass.render(r,e),r.setRenderTarget(v),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(r,l,c):r.render(l,c),c.layers.mask=p,l.background=d,r.shadowMap.autoUpdate=g}},OD=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,PD="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",BD=class extends Fn{constructor(r,e,n,a,o=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Du.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Ut(null),depthBuffer:new Ut(null),resolution:new Ut(new et),texelSize:new Ut(new et),cameraNear:new Ut(.3),cameraFar:new Ut(1e3),aspect:new Ut(1),time:new Ut(0)},blending:si,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:o}),r&&this.setShaderParts(r),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(a)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(r){this.uniforms.depthBuffer.value=r}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(r){this.defines.DEPTH_PACKING=r.toFixed(0),this.needsUpdate=!0}setDepthBuffer(r,e=Uu){this.depthBuffer=r,this.depthPacking=e}setShaderData(r){this.setShaderParts(r.shaderParts),this.setDefines(r.defines),this.setUniforms(r.uniforms),this.setExtensions(r.extensions)}setShaderParts(r){return this.fragmentShader=OD.replace(Bt.FRAGMENT_HEAD,r.get(Bt.FRAGMENT_HEAD)||"").replace(Bt.FRAGMENT_MAIN_UV,r.get(Bt.FRAGMENT_MAIN_UV)||"").replace(Bt.FRAGMENT_MAIN_IMAGE,r.get(Bt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=PD.replace(Bt.VERTEX_HEAD,r.get(Bt.VERTEX_HEAD)||"").replace(Bt.VERTEX_MAIN_SUPPORT,r.get(Bt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(r){for(const e of r.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(r){for(const e of r.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(r){this.extensions={};for(const e of r)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(r){this.encodeOutput!==r&&(r?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(r){return this.encodeOutput}setOutputEncodingEnabled(r){this.encodeOutput=r}get time(){return this.uniforms.time.value}set time(r){this.uniforms.time.value=r}setDeltaTime(r){this.uniforms.time.value+=r}adoptCameraSettings(r){this.copyCameraSettings(r)}copyCameraSettings(r){r&&(this.uniforms.cameraNear.value=r.near,this.uniforms.cameraFar.value=r.far,r instanceof ji?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(r,e){const n=this.uniforms;n.resolution.value.set(r,e),n.texelSize.value.set(1/r,1/e),n.aspect.value=r/e}static get Section(){return Bt}};function NS(r,e,n){for(const a of e){const o="$1"+r+a.charAt(0).toUpperCase()+a.slice(1),l=new RegExp("([^\\.])(\\b"+a+"\\b)","g");for(const c of n.entries())c[1]!==null&&n.set(c[0],c[1].replace(l,o))}}function zD(r,e,n){let a=e.getFragmentShader(),o=e.getVertexShader();const l=a!==void 0&&/mainImage/.test(a),c=a!==void 0&&/mainUv/.test(a);if(n.attributes|=e.getAttributes(),a===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(c&&(n.attributes&$r.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!l&&!c)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const f=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=n.shaderParts;let d=p.get(Bt.FRAGMENT_HEAD)||"",g=p.get(Bt.FRAGMENT_MAIN_UV)||"",v=p.get(Bt.FRAGMENT_MAIN_IMAGE)||"",_=p.get(Bt.VERTEX_HEAD)||"",x=p.get(Bt.VERTEX_MAIN_SUPPORT)||"";const y=new Set,T=new Set;if(c&&(g+=`	${r}MainUv(UV);
`,n.uvTransformation=!0),o!==null&&/mainSupport/.test(o)){const R=/mainSupport *\([\w\s]*?uv\s*?\)/.test(o);x+=`	${r}MainSupport(`,x+=R?`vUv);
`:`);
`;for(const D of o.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const C of D[1].split(/\s*,\s*/))n.varyings.add(C),y.add(C),T.add(C);for(const D of o.matchAll(f))T.add(D[1])}for(const R of a.matchAll(f))T.add(R[1]);for(const R of e.defines.keys())T.add(R.replace(/\([\w\s,]*\)/g,""));for(const R of e.uniforms.keys())T.add(R);T.delete("while"),T.delete("for"),T.delete("if"),e.uniforms.forEach((R,D)=>n.uniforms.set(r+D.charAt(0).toUpperCase()+D.slice(1),R)),e.defines.forEach((R,D)=>n.defines.set(r+D.charAt(0).toUpperCase()+D.slice(1),R));const S=new Map([["fragment",a],["vertex",o]]);NS(r,T,n.defines),NS(r,T,S),a=S.get("fragment"),o=S.get("vertex");const M=e.blendMode;if(n.blendModes.set(M.blendFunction,M),l){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(v+=e.inputColorSpace===Wt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Ta?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const R=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;v+=`${r}MainImage(color0, UV, `,(n.attributes&$r.DEPTH)!==0&&R.test(a)&&(v+="depth, ",n.readDepth=!0),v+=`color1);
	`;const D=r+"BlendOpacity";n.uniforms.set(D,M.opacity),v+=`color0 = blend${M.blendFunction}(color0, color1, ${D});

	`,d+=`uniform float ${D};

`}if(d+=a+`
`,o!==null&&(_+=o+`
`),p.set(Bt.FRAGMENT_HEAD,d),p.set(Bt.FRAGMENT_MAIN_UV,g),p.set(Bt.FRAGMENT_MAIN_IMAGE,v),p.set(Bt.VERTEX_HEAD,_),p.set(Bt.VERTEX_MAIN_SUPPORT,x),e.extensions!==null)for(const R of e.extensions)n.extensions.add(R)}}var ID=class extends da{constructor(r,...e){super("EffectPass"),this.fullscreenMaterial=new BD(null,null,null,r),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(r){for(const e of this.effects)e.mainScene=r}set mainCamera(r){this.fullscreenMaterial.copyCameraSettings(r);for(const e of this.effects)e.mainCamera=r}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(r){this.fullscreenMaterial.encodeOutput=r}get dithering(){return this.fullscreenMaterial.dithering}set dithering(r){const e=this.fullscreenMaterial;e.dithering=r,e.needsUpdate=!0}setEffects(r){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=r.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const r=new Lw;let e=0;for(const c of this.effects)if(c.blendMode.blendFunction===yt.DST)r.attributes|=c.getAttributes()&$r.DEPTH;else{if((r.attributes&c.getAttributes()&$r.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${c.name})`);zD("e"+e++,c,r)}let n=r.shaderParts.get(Bt.FRAGMENT_HEAD),a=r.shaderParts.get(Bt.FRAGMENT_MAIN_IMAGE),o=r.shaderParts.get(Bt.FRAGMENT_MAIN_UV);const l=/\bblend\b/g;for(const c of r.blendModes.values())n+=c.getShaderCode().replace(l,`blend${c.blendFunction}`)+`
`;(r.attributes&$r.DEPTH)!==0?(r.readDepth&&(a=`float depth = readDepth(UV);

	`+a),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,r.colorSpace===Wt&&(a+=`color0 = sRGBToLinear(color0);
	`),r.uvTransformation?(o=`vec2 transformedUv = vUv;
`+o,r.defines.set("UV","transformedUv")):r.defines.set("UV","vUv"),r.shaderParts.set(Bt.FRAGMENT_HEAD,n),r.shaderParts.set(Bt.FRAGMENT_MAIN_IMAGE,a),r.shaderParts.set(Bt.FRAGMENT_MAIN_UV,o);for(const[c,f]of r.shaderParts)f!==null&&r.shaderParts.set(c,f.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(r)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(r,e=Uu){this.fullscreenMaterial.depthBuffer=r,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(r,e)}render(r,e,n,a,o){for(const l of this.effects)l.update(r,e,a);if(!this.skipRendering||this.renderToScreen){const l=this.fullscreenMaterial;l.inputBuffer=e.texture,l.time+=a*this.timeScale,r.setRenderTarget(this.renderToScreen?null:n),r.render(this.scene,this.camera)}}setSize(r,e){this.fullscreenMaterial.setSize(r,e);for(const n of this.effects)n.setSize(r,e)}initialize(r,e,n){this.renderer=r;for(const a of this.effects)a.initialize(r,e,n);this.updateMaterial(),n!==void 0&&n!==Un&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const r of this.effects)r.removeEventListener("change",this.listener),r.dispose()}handleEvent(r){r.type==="change"&&this.recompile()}};const FD=`
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,HD=`
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec2 uSkew;
uniform float uTilt;
uniform float uYaw;
uniform float uLineThickness;
uniform vec3 uLinesColor;
uniform vec3 uScanColor;
uniform float uGridScale;
uniform float uLineStyle;
uniform float uLineJitter;
uniform float uScanOpacity;
uniform float uScanDirection;
uniform float uNoise;
uniform float uBloomOpacity;
uniform float uScanGlow;
uniform float uScanSoftness;
uniform float uPhaseTaper;
uniform float uScanDuration;
uniform float uScanDelay;
uniform float uScanTime;
varying vec2 vUv;

uniform float uScanStarts[8];
uniform float uScanCount;

const int MAX_SCANS = 8;

float smoother01(float a, float b, float x){
  float t = clamp((x - a) / max(1e-5, (b - a)), 0.0, 1.0);
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 p = (2.0 * fragCoord - iResolution.xy) / iResolution.y;

    vec3 ro = vec3(0.0);
    vec3 rd = normalize(vec3(p, 2.0));

    float cR = cos(uTilt), sR = sin(uTilt);
    rd.xy = mat2(cR, -sR, sR, cR) * rd.xy;

    float cY = cos(uYaw), sY = sin(uYaw);
    rd.xz = mat2(cY, -sY, sY, cY) * rd.xz;

    vec2 skew = clamp(uSkew, vec2(-0.7), vec2(0.7));
    rd.xy += skew * rd.z;

    vec3 color = vec3(0.0);
  float minT = 1e20;
  float gridScale = max(1e-5, uGridScale);
    float fadeStrength = 2.0;
    vec2 gridUV = vec2(0.0);

  float hitIsY = 1.0;
    for (int i = 0; i < 4; i++)
    {
        float isY = float(i < 2);
        float pos = mix(-0.2, 0.2, float(i)) * isY + mix(-0.5, 0.5, float(i - 2)) * (1.0 - isY);
        float num = pos - (isY * ro.y + (1.0 - isY) * ro.x);
        float den = isY * rd.y + (1.0 - isY) * rd.x;
        float t = num / den;
        vec3 h = ro + rd * t;

        float depthBoost = smoothstep(0.0, 3.0, h.z);
        h.xy += skew * 0.15 * depthBoost;

    bool use = t > 0.0 && t < minT;
    gridUV = use ? mix(h.zy, h.xz, isY) / gridScale : gridUV;
    minT = use ? t : minT;
    hitIsY = use ? isY : hitIsY;
    }

    vec3 hit = ro + rd * minT;
    float dist = length(hit - ro);

  float jitterAmt = clamp(uLineJitter, 0.0, 1.0);
  if (jitterAmt > 0.0) {
    vec2 j = vec2(
      sin(gridUV.y * 2.7 + iTime * 1.8),
      cos(gridUV.x * 2.3 - iTime * 1.6)
    ) * (0.15 * jitterAmt);
    gridUV += j;
  }
  float fx = fract(gridUV.x);
  float fy = fract(gridUV.y);
  float ax = min(fx, 1.0 - fx);
  float ay = min(fy, 1.0 - fy);
  float wx = fwidth(gridUV.x);
  float wy = fwidth(gridUV.y);
  float halfPx = max(0.0, uLineThickness) * 0.5;

  float tx = halfPx * wx;
  float ty = halfPx * wy;

  float aax = wx;
  float aay = wy;

  float lineX = 1.0 - smoothstep(tx, tx + aax, ax);
  float lineY = 1.0 - smoothstep(ty, ty + aay, ay);
  if (uLineStyle > 0.5) {
    float dashRepeat = 4.0;
    float dashDuty = 0.5;
    float vy = fract(gridUV.y * dashRepeat);
    float vx = fract(gridUV.x * dashRepeat);
    float dashMaskY = step(vy, dashDuty);
    float dashMaskX = step(vx, dashDuty);
    if (uLineStyle < 1.5) {
      lineX *= dashMaskY;
      lineY *= dashMaskX;
    } else {
      float dotRepeat = 6.0;
      float dotWidth = 0.18;
      float cy = abs(fract(gridUV.y * dotRepeat) - 0.5);
      float cx = abs(fract(gridUV.x * dotRepeat) - 0.5);
      float dotMaskY = 1.0 - smoothstep(dotWidth, dotWidth + fwidth(gridUV.y * dotRepeat), cy);
      float dotMaskX = 1.0 - smoothstep(dotWidth, dotWidth + fwidth(gridUV.x * dotRepeat), cx);
      lineX *= dotMaskY;
      lineY *= dotMaskX;
    }
  }
  float primaryMask = max(lineX, lineY);

  vec2 gridUV2 = (hitIsY > 0.5 ? hit.xz : hit.zy) / gridScale;
  if (jitterAmt > 0.0) {
    vec2 j2 = vec2(
      cos(gridUV2.y * 2.1 - iTime * 1.4),
      sin(gridUV2.x * 2.5 + iTime * 1.7)
    ) * (0.15 * jitterAmt);
    gridUV2 += j2;
  }
  float fx2 = fract(gridUV2.x);
  float fy2 = fract(gridUV2.y);
  float ax2 = min(fx2, 1.0 - fx2);
  float ay2 = min(fy2, 1.0 - fy2);
  float wx2 = fwidth(gridUV2.x);
  float wy2 = fwidth(gridUV2.y);
  float tx2 = halfPx * wx2;
  float ty2 = halfPx * wy2;
  float aax2 = wx2;
  float aay2 = wy2;
  float lineX2 = 1.0 - smoothstep(tx2, tx2 + aax2, ax2);
  float lineY2 = 1.0 - smoothstep(ty2, ty2 + aay2, ay2);
  if (uLineStyle > 0.5) {
    float dashRepeat2 = 4.0;
    float dashDuty2 = 0.5;
    float vy2m = fract(gridUV2.y * dashRepeat2);
    float vx2m = fract(gridUV2.x * dashRepeat2);
    float dashMaskY2 = step(vy2m, dashDuty2);
    float dashMaskX2 = step(vx2m, dashDuty2);
    if (uLineStyle < 1.5) {
      lineX2 *= dashMaskY2;
      lineY2 *= dashMaskX2;
    } else {
      float dotRepeat2 = 6.0;
      float dotWidth2 = 0.18;
      float cy2 = abs(fract(gridUV2.y * dotRepeat2) - 0.5);
      float cx2 = abs(fract(gridUV2.x * dotRepeat2) - 0.5);
      float dotMaskY2 = 1.0 - smoothstep(dotWidth2, dotWidth2 + fwidth(gridUV2.y * dotRepeat2), cy2);
      float dotMaskX2 = 1.0 - smoothstep(dotWidth2, dotWidth2 + fwidth(gridUV2.x * dotRepeat2), cx2);
      lineX2 *= dotMaskY2;
      lineY2 *= dotMaskX2;
    }
  }
    float altMask = max(lineX2, lineY2);

    float edgeDistX = min(abs(hit.x - (-0.5)), abs(hit.x - 0.5));
    float edgeDistY = min(abs(hit.y - (-0.2)), abs(hit.y - 0.2));
    float edgeDist = mix(edgeDistY, edgeDistX, hitIsY);
    float edgeGate = 1.0 - smoothstep(gridScale * 0.5, gridScale * 2.0, edgeDist);
    altMask *= edgeGate;

  float lineMask = max(primaryMask, altMask);

    float fade = exp(-dist * fadeStrength);

    float dur = max(0.05, uScanDuration);
    float del = max(0.0, uScanDelay);
    float scanZMax = 2.0;
    float widthScale = max(0.1, uScanGlow);
    float sigma = max(0.001, 0.18 * widthScale * uScanSoftness);
    float sigmaA = sigma * 2.0;

    float combinedPulse = 0.0;
    float combinedAura = 0.0;

    float cycle = dur + del;
    float tCycle = mod(uScanTime, cycle);
    float scanPhase = clamp((tCycle - del) / dur, 0.0, 1.0);
    float phase = scanPhase;
    if (uScanDirection > 0.5 && uScanDirection < 1.5) {
      phase = 1.0 - phase;
    } else if (uScanDirection > 1.5) {
      float t2 = mod(max(0.0, uScanTime - del), 2.0 * dur);
      phase = (t2 < dur) ? (t2 / dur) : (1.0 - (t2 - dur) / dur);
    }
    float scanZ = phase * scanZMax;
    float dz = abs(hit.z - scanZ);
    float lineBand = exp(-0.5 * (dz * dz) / (sigma * sigma));
    float taper = clamp(uPhaseTaper, 0.0, 0.49);
    float headW = taper;
    float tailW = taper;
    float headFade = smoother01(0.0, headW, phase);
    float tailFade = 1.0 - smoother01(1.0 - tailW, 1.0, phase);
    float phaseWindow = headFade * tailFade;
    float pulseBase = lineBand * phaseWindow;
    combinedPulse += pulseBase * clamp(uScanOpacity, 0.0, 1.0);
    float auraBand = exp(-0.5 * (dz * dz) / (sigmaA * sigmaA));
    combinedAura += (auraBand * 0.25) * phaseWindow * clamp(uScanOpacity, 0.0, 1.0);

    for (int i = 0; i < MAX_SCANS; i++) {
      if (float(i) >= uScanCount) break;
      float tActiveI = iTime - uScanStarts[i];
      float phaseI = clamp(tActiveI / dur, 0.0, 1.0);
      if (uScanDirection > 0.5 && uScanDirection < 1.5) {
        phaseI = 1.0 - phaseI;
      } else if (uScanDirection > 1.5) {
        phaseI = (phaseI < 0.5) ? (phaseI * 2.0) : (1.0 - (phaseI - 0.5) * 2.0);
      }
      float scanZI = phaseI * scanZMax;
      float dzI = abs(hit.z - scanZI);
      float lineBandI = exp(-0.5 * (dzI * dzI) / (sigma * sigma));
      float headFadeI = smoother01(0.0, headW, phaseI);
      float tailFadeI = 1.0 - smoother01(1.0 - tailW, 1.0, phaseI);
      float phaseWindowI = headFadeI * tailFadeI;
      combinedPulse += lineBandI * phaseWindowI * clamp(uScanOpacity, 0.0, 1.0);
      float auraBandI = exp(-0.5 * (dzI * dzI) / (sigmaA * sigmaA));
      combinedAura += (auraBandI * 0.25) * phaseWindowI * clamp(uScanOpacity, 0.0, 1.0);
    }

  float lineVis = lineMask;
  vec3 gridCol = uLinesColor * lineVis * fade;
  vec3 scanCol = uScanColor * combinedPulse;
  vec3 scanAura = uScanColor * combinedAura;

    color = gridCol + scanCol + scanAura;

  float n = fract(sin(dot(gl_FragCoord.xy + vec2(iTime * 123.4), vec2(12.9898,78.233))) * 43758.5453123);
  color += (n - 0.5) * uNoise;
  color = clamp(color, 0.0, 1.0);
  float alpha = clamp(max(lineVis, combinedPulse), 0.0, 1.0);
  float gx = 1.0 - smoothstep(tx * 2.0, tx * 2.0 + aax * 2.0, ax);
  float gy = 1.0 - smoothstep(ty * 2.0, ty * 2.0 + aay * 2.0, ay);
  float halo = max(gx, gy) * fade;
  alpha = max(alpha, halo * clamp(uBloomOpacity, 0.0, 1.0));
  fragColor = vec4(color, alpha);
}

void main(){
  vec4 c;
  mainImage(c, vUv * iResolution.xy);
  gl_FragColor = c;
}
`;function xf(r){const e=new Ft(r);return e.convertSRGBToLinear(),new oe(e.r,e.g,e.b)}function GD(r,e,n,a,o,l){const c=r.clone();a=Math.max(1e-4,a);const f=2/a,p=f*l,d=1/(1+p+.48*p*p+.235*p*p*p);let g=r.clone().sub(e);const v=e.clone(),_=o*a;g.length()>_&&g.setLength(_),e=r.clone().sub(g);const x=n.clone().addScaledVector(g,f).multiplyScalar(l);n.sub(x.clone().multiplyScalar(f)),n.multiplyScalar(d),c.copy(e.clone().add(g.add(x).multiplyScalar(d)));const y=v.clone().sub(r),T=c.clone().sub(v);return y.dot(T)>0&&(c.copy(v),n.set(0,0)),c}function OS(r,e,n,a,o,l){a=Math.max(1e-4,a);const c=2/a,f=c*l,p=1/(1+f+.48*f*f+.235*f*f*f);let d=r-e;const g=e,v=o*a;d=Math.sign(d)*Math.min(Math.abs(d),v),e=r-d;const _=(n.v+c*d)*l;n.v=(n.v-c*_)*p;let x=e+(d+_)*p;const y=g-r,T=x-g;return y*T>0&&(x=g,n.v=0),{value:x,v:n.v}}const Sf=8;function VD({sensitivity:r=.55,lineThickness:e=1,linesColor:n="#392e4e",scanColor:a="#FF9FFC",scanOpacity:o=.4,gridScale:l=.1,lineStyle:c="solid",lineJitter:f=.1,scanDirection:p="pingpong",enablePost:d=!0,bloomIntensity:g=0,bloomThreshold:v=0,bloomSmoothing:_=0,chromaticAberration:x=.002,noiseIntensity:y=.01,scanGlow:T=.5,scanSoftness:S=2,scanPhaseTaper:M=.9,scanDuration:R=2,scanDelay:D=2,scanOnClick:C=!1,snapBackDelay:N=250,scrollProgress:P=0,className:O,style:A}){const w=Math.max(0,Math.min(1,P)),J=.02+(.5-.02)*w,H=Math.max(0,Math.min(1,.9*(J-.02)/(.5-.02))),q=.01*(J-.02)/(.5-.02),K=1+3*(J-.02)/(.5-.02),ee=2,Z=2,B=.5+12*(J-.02)/(.5-.02),F=gt.useRef(null),se=gt.useRef(null),fe=gt.useRef(null),Se=gt.useRef(null),I=gt.useRef(null),j=gt.useRef(null),ge=gt.useRef(null),Ee=gt.useRef(new et(0,0)),Ue=gt.useRef(0),ie=gt.useRef(0),ve=gt.useRef(new et(0,0)),be=gt.useRef(new et(0,0)),Fe=gt.useRef(0),Ze=gt.useRef(0),Je=gt.useRef(0),$t=gt.useRef(0),mt=gt.useRef([]),dt=gt.useRef(0),Ct=gt.useRef(B);Ct.current=B;const at=b=>{const G=mt.current.slice();if(G.length>=Sf&&G.shift(),G.push(b),mt.current=G,fe.current){const de=fe.current.uniforms,me=new Array(Sf).fill(0);for(let ue=0;ue<G.length&&ue<Sf;ue++)me[ue]=G[ue];de.uScanStarts.value=me,de.uScanCount.value=G.length}},Ht=bs.clamp(r,0,1),k=bs.lerp(.06,.2,Ht),Zt=bs.lerp(.12,.3,Ht),_t=bs.lerp(.1,.28,Ht),Tt=bs.lerp(.45,.12,Ht),Ge=1/0,z=bs.lerp(1.2,1.6,Ht);return gt.useEffect(()=>{const b=F.current;if(!b)return;let G=null;const de=Ae=>{G&&(clearTimeout(G),G=null);const Xe=b.getBoundingClientRect(),Ke=(Ae.clientX-Xe.left)/Xe.width*2-1,ye=-((Ae.clientY-Xe.top)/Xe.height*2-1);Ee.current.set(Ke,ye)},me=()=>{C&&at(performance.now()/1e3)},ue=()=>{G&&(clearTimeout(G),G=null)},Be=()=>{G&&clearTimeout(G),G=window.setTimeout(()=>{Ee.current.set(0,0),Ue.current=0,ie.current=0},Math.max(0,N||0))};return b.addEventListener("mousemove",de),b.addEventListener("mouseenter",ue),C&&b.addEventListener("click",me),b.addEventListener("mouseleave",Be),()=>{b.removeEventListener("mousemove",de),b.removeEventListener("mouseenter",ue),b.removeEventListener("mouseleave",Be),C&&b.removeEventListener("click",me),G&&clearTimeout(G)}},[N,C]),gt.useEffect(()=>{const b=F.current;if(!b)return;const G=new Ew({antialias:!0,alpha:!0});se.current=G,G.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),G.setSize(b.clientWidth,b.clientHeight),G.outputColorSpace=Wt,G.toneMapping=ca,G.autoClear=!1,G.setClearColor(0,0),b.appendChild(G.domElement);const de={iResolution:{value:new oe(b.clientWidth,b.clientHeight,G.getPixelRatio())},iTime:{value:0},uSkew:{value:new et(0,0)},uTilt:{value:0},uYaw:{value:0},uLineThickness:{value:K},uLinesColor:{value:xf(n)},uScanColor:{value:xf(a)},uGridScale:{value:J},uLineStyle:{value:c==="dashed"?1:c==="dotted"?2:0},uLineJitter:{value:Math.max(0,Math.min(1,H))},uScanOpacity:{value:o},uNoise:{value:y},uBloomOpacity:{value:g},uScanGlow:{value:T},uScanSoftness:{value:S},uPhaseTaper:{value:M},uScanDuration:{value:ee},uScanDelay:{value:Z},uScanDirection:{value:p==="backward"?1:p==="pingpong"?2:0},uScanTime:{value:0},uScanStarts:{value:new Array(Sf).fill(0)},uScanCount:{value:0}},me=new Fn({uniforms:de,vertexShader:FD,fragmentShader:HD,transparent:!0,depthWrite:!1,depthTest:!1});fe.current=me;const ue=new jm,Be=new Yf(-1,1,1,-1,0,1),Ae=new ha(new Ou(2,2),me);if(ue.add(Ae),d){const Me=new Uw(G);Se.current=Me;const Le=new ND(ue,Be);Me.addPass(Le);const we=new wD({intensity:1,luminanceThreshold:v,luminanceSmoothing:_});we.blendMode.opacity.value=Math.max(0,g),I.current=we;const Ne=new LD({offset:new et(q,q),radialModulation:!0,modulationOffset:0});j.current=Ne;const tt=new ID(Be,we,Ne);tt.renderToScreen=!0,Me.addPass(tt)}const Xe=()=>{G.setSize(b.clientWidth,b.clientHeight),me.uniforms.iResolution.value.set(b.clientWidth,b.clientHeight,G.getPixelRatio()),Se.current&&Se.current.setSize(b.clientWidth,b.clientHeight)};window.addEventListener("resize",Xe);let Ke=performance.now();const ye=()=>{const Me=performance.now(),Le=Math.max(0,Math.min(.1,(Me-Ke)/1e3));Ke=Me,ve.current.copy(GD(ve.current,Ee.current,be.current,Tt,Ge,Le));const we=OS(Fe.current,Ue.current,{v:Ze.current},Tt,Ge,Le);Fe.current=we.value,Ze.current=we.v;const Ne=OS(Je.current,ie.current,{v:$t.current},Tt,Ge,Le);Je.current=Ne.value,$t.current=Ne.v;const tt=new et(ve.current.x*k,-ve.current.y*z*k);me.uniforms.uSkew.value.set(tt.x,tt.y),me.uniforms.uTilt.value=Fe.current*Zt,me.uniforms.uYaw.value=bs.clamp(Je.current*_t,-.6,.6),me.uniforms.iTime.value=Me/1e3,dt.current+=Le*Ct.current,me.uniforms.uScanTime.value=dt.current,G.clear(!0,!0,!0),Se.current?Se.current.render(Le):G.render(ue,Be),ge.current=requestAnimationFrame(ye)};return ge.current=requestAnimationFrame(ye),()=>{ge.current&&cancelAnimationFrame(ge.current),window.removeEventListener("resize",Xe),me.dispose(),Ae.geometry.dispose(),Se.current&&(Se.current.dispose(),Se.current=null),G.dispose(),b.contains(G.domElement)&&b.removeChild(G.domElement)}},[r,c,n,a,o,p,d,y,g,T,S,M,v,_,x,Tt,Ge,k,z,Zt,_t]),gt.useEffect(()=>{const b=fe.current;if(b){const G=b.uniforms;G.uLineThickness.value=K,G.uLinesColor.value.copy(xf(n)),G.uScanColor.value.copy(xf(a)),G.uGridScale.value=J,G.uLineStyle.value=c==="dashed"?1:c==="dotted"?2:0,G.uLineJitter.value=Math.max(0,Math.min(1,H)),G.uBloomOpacity.value=Math.max(0,g),G.uNoise.value=Math.max(0,y),G.uScanGlow.value=T,G.uScanOpacity.value=Math.max(0,Math.min(1,o)),G.uScanDirection.value=p==="backward"?1:p==="pingpong"?2:0,G.uScanSoftness.value=S,G.uPhaseTaper.value=M,G.uScanDuration.value=Math.max(.05,ee),G.uScanDelay.value=Math.max(0,Z)}I.current&&(I.current.blendMode.opacity.value=Math.max(0,g),I.current.luminanceMaterial.threshold=v,I.current.luminanceMaterial.smoothing=_),j.current&&j.current.offset.set(q,q)},[P,K,n,a,J,c,H,g,v,_,q,y,T,o,p,S,M,ee,Z]),At.jsx("div",{ref:F,className:`gridscan${O?` ${O}`:""}`,style:A})}const PS=["M","Ø","C","T","E"],kD=[{left:92,top:92},{left:8,top:8},{left:50,top:92},{left:92,top:8},{left:8,top:92}],XD=[{left:32,top:50},{left:41.25,top:50},{left:50,top:50},{left:58,top:50},{left:65,top:50}];function Wp(r,e,n){return r+(e-r)*n}function WD(){const r=gt.useMemo(()=>PS.map(()=>Math.random()*2.5),[]),[e,n]=gt.useState(0),a=gt.useRef(null),o=gt.useCallback(()=>{const _=a.current;if(!_)return;const{scrollTop:x,scrollHeight:y,clientHeight:T}=_,S=y-T,M=S<=0?0:Math.min(1,x/S);n(M)},[]);gt.useEffect(()=>{const _=a.current;if(_)return o(),_.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o),()=>{_.removeEventListener("scroll",o),window.removeEventListener("resize",o)}},[o]);const l=e,c=l*-120,f=.5,d=Math.min(1,l/.45),g=.45,v=l<=g?l/g:Math.max(0,(1-l)/(1-g));return At.jsxs("div",{className:"scroll-driver",ref:a,children:[At.jsx("div",{className:"scroll-spacer","aria-hidden":"true"}),At.jsxs("div",{className:"page-wrapper",children:[At.jsx(J1,{gradientColor:"black"}),At.jsx("div",{className:"gridscan-backdrop",children:At.jsx(VD,{sensitivity:.55,lineThickness:1,linesColor:"#7FDBDA",gridScale:.1,scanColor:"#FFEB3B",scanOpacity:.4,enablePost:!0,bloomIntensity:.6,chromaticAberration:.002,noiseIntensity:.01,scrollProgress:l})}),At.jsxs("div",{className:"page-content",children:[At.jsxs("nav",{className:"navbar",style:{transform:`translateY(${c}%)`},children:[At.jsx("a",{href:"#contact",className:"nav-link",children:"CØNTACT US"}),At.jsx("button",{type:"button",className:"nav-button",children:"PREØRDER"})]}),At.jsxs("div",{className:"center-content center-content--scroll",children:[At.jsx("h1",{className:"title-mocte title-mocte--scroll",children:PS.map((_,x)=>{const y=XD[x],T=kD[x],S=x===2,M=Wp(y.left,T.left,d),R=Wp(y.top,T.top,d),D=Wp(1,f,d),C=S?d*90:0;return At.jsx("span",{className:"title-letter title-letter--scroll",style:{animationDelay:`${r[x]}s`,"--letter-left":`${M}%`,"--letter-top":`${R}%`,"--letter-scale":D,"--letter-rotate":`${C}deg`},children:_},x)})}),At.jsx("div",{className:"card card--scroll",style:{opacity:v,pointerEvents:l>=1?"none":"auto"},children:At.jsx("p",{children:"reimagining ancient traditions to our present"})})]}),At.jsx("p",{className:"coming-soon coming-soon--scroll",style:{opacity:1-l},children:"CØMING SØØN . . ."})]})]})]})}UT.createRoot(document.getElementById("root")).render(At.jsx(gt.StrictMode,{children:At.jsx(WD,{})}));
