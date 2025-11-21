(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function va(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const ee={},jt=[],Ne=()=>{},ml=()=>!1,pl=/^on[^a-z]/,cr=e=>pl.test(e),ba=e=>e.startsWith("onUpdate:"),fe=Object.assign,ya=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hl=Object.prototype.hasOwnProperty,W=(e,t)=>hl.call(e,t),z=Array.isArray,Dt=e=>fr(e)==="[object Map]",Oo=e=>fr(e)==="[object Set]",U=e=>typeof e=="function",se=e=>typeof e=="string",xa=e=>typeof e=="symbol",re=e=>e!==null&&typeof e=="object",Po=e=>re(e)&&U(e.then)&&U(e.catch),Co=Object.prototype.toString,fr=e=>Co.call(e),gl=e=>fr(e).slice(8,-1),So=e=>fr(e)==="[object Object]",wa=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Wn=va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ur=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},vl=/-(\w)/g,He=ur(e=>e.replace(vl,(t,n)=>n?n.toUpperCase():"")),bl=/\B([A-Z])/g,Vt=ur(e=>e.replace(bl,"-$1").toLowerCase()),dr=ur(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cr=ur(e=>e?`on${dr(e)}`:""),mn=(e,t)=>!Object.is(e,t),Yn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Zn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ur=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ri;const Hr=()=>ri||(ri=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _a(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=se(r)?_l(r):_a(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(se(e))return e;if(re(e))return e}}const yl=/;(?![^(]*\))/g,xl=/:([^]+)/,wl=/\/\*[^]*?\*\//g;function _l(e){const t={};return e.replace(wl,"").split(yl).forEach(n=>{if(n){const r=n.split(xl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ea(e){let t="";if(se(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Ea(e[n]);r&&(t+=r+" ")}else if(re(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const El="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kl=va(El);function Ro(e){return!!e||e===""}const Gm=e=>se(e)?e:e==null?"":z(e)||re(e)&&(e.toString===Co||!U(e.toString))?JSON.stringify(e,Io,2):String(e),Io=(e,t)=>t&&t.__v_isRef?Io(e,t.value):Dt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Oo(t)?{[`Set(${t.size})`]:[...t.values()]}:re(t)&&!z(t)&&!So(t)?String(t):t;let Se;class Al{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ol(e,t=Se){t&&t.active&&t.effects.push(e)}function Pl(){return Se}const ka=e=>{const t=new Set(e);return t.w=0,t.n=0,t},To=e=>(e.w&ut)>0,No=e=>(e.n&ut)>0,Cl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ut},Sl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];To(a)&&!No(a)?a.delete(e):t[n++]=a,a.w&=~ut,a.n&=~ut}t.length=n}},Kr=new WeakMap;let nn=0,ut=1;const Wr=30;let Re;const Et=Symbol(""),Yr=Symbol("");class Aa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ol(this,r)}run(){if(!this.active)return this.fn();let t=Re,n=ct;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Re,Re=this,ct=!0,ut=1<<++nn,nn<=Wr?Cl(this):ai(this),this.fn()}finally{nn<=Wr&&Sl(this),ut=1<<--nn,Re=this.parent,ct=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Re===this?this.deferStop=!0:this.active&&(ai(this),this.onStop&&this.onStop(),this.active=!1)}}function ai(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ct=!0;const Mo=[];function Xt(){Mo.push(ct),ct=!1}function Gt(){const e=Mo.pop();ct=e===void 0?!0:e}function _e(e,t,n){if(ct&&Re){let r=Kr.get(e);r||Kr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ka()),Lo(a)}}function Lo(e,t){let n=!1;nn<=Wr?No(e)||(e.n|=ut,n=!To(e)):n=!e.has(Re),n&&(e.add(Re),Re.deps.push(e))}function Ge(e,t,n,r,a,i){const o=Kr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&z(e)){const l=Number(r);o.forEach((c,f)=>{(f==="length"||f>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":z(e)?wa(n)&&s.push(o.get("length")):(s.push(o.get(Et)),Dt(e)&&s.push(o.get(Yr)));break;case"delete":z(e)||(s.push(o.get(Et)),Dt(e)&&s.push(o.get(Yr)));break;case"set":Dt(e)&&s.push(o.get(Et));break}if(s.length===1)s[0]&&qr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);qr(ka(l))}}function qr(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&ii(r);for(const r of n)r.computed||ii(r)}function ii(e,t){(e!==Re||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Rl=va("__proto__,__v_isRef,__isVue"),Fo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(xa)),Il=Oa(),Tl=Oa(!1,!0),Nl=Oa(!0),oi=Ml();function Ml(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)_e(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Xt();const r=Y(this)[t].apply(this,n);return Gt(),r}}),e}function Ll(e){const t=Y(this);return _e(t,"has",e),t.hasOwnProperty(e)}function Oa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ql:Bo:t?zo:$o).get(r))return r;const o=z(r);if(!e){if(o&&W(oi,a))return Reflect.get(oi,a,i);if(a==="hasOwnProperty")return Ll}const s=Reflect.get(r,a,i);return(xa(a)?Fo.has(a):Rl(a))||(e||_e(r,"get",a),t)?s:he(s)?o&&wa(a)?s:s.value:re(s)?e?Ho(s):pr(s):s}}const Fl=jo(),jl=jo(!0);function jo(e=!1){return function(n,r,a,i){let o=n[r];if(Ut(o)&&he(o)&&!he(a))return!1;if(!e&&(!er(a)&&!Ut(a)&&(o=Y(o),a=Y(a)),!z(n)&&he(o)&&!he(a)))return o.value=a,!0;const s=z(n)&&wa(r)?Number(r)<n.length:W(n,r),l=Reflect.set(n,r,a,i);return n===Y(i)&&(s?mn(a,o)&&Ge(n,"set",r,a):Ge(n,"add",r,a)),l}}function Dl(e,t){const n=W(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ge(e,"delete",t,void 0),r}function $l(e,t){const n=Reflect.has(e,t);return(!xa(t)||!Fo.has(t))&&_e(e,"has",t),n}function zl(e){return _e(e,"iterate",z(e)?"length":Et),Reflect.ownKeys(e)}const Do={get:Il,set:Fl,deleteProperty:Dl,has:$l,ownKeys:zl},Bl={get:Nl,set(e,t){return!0},deleteProperty(e,t){return!0}},Ul=fe({},Do,{get:Tl,set:jl}),Pa=e=>e,mr=e=>Reflect.getPrototypeOf(e);function Rn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(t!==i&&_e(a,"get",t),_e(a,"get",i));const{has:o}=mr(a),s=r?Pa:n?Ra:pn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function In(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(e!==a&&_e(r,"has",e),_e(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Tn(e,t=!1){return e=e.__v_raw,!t&&_e(Y(e),"iterate",Et),Reflect.get(e,"size",e)}function si(e){e=Y(e);const t=Y(this);return mr(t).has.call(t,e)||(t.add(e),Ge(t,"add",e,e)),this}function li(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=mr(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?mn(t,o)&&Ge(n,"set",e,t):Ge(n,"add",e,t),this}function ci(e){const t=Y(this),{has:n,get:r}=mr(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ge(t,"delete",e,void 0),i}function fi(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&Ge(e,"clear",void 0,void 0),n}function Nn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?Pa:e?Ra:pn;return!e&&_e(s,"iterate",Et),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function Mn(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=Dt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?Pa:t?Ra:pn;return!t&&_e(i,"iterate",l?Yr:Et),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:s?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function at(e){return function(...t){return e==="delete"?!1:this}}function Hl(){const e={get(i){return Rn(this,i)},get size(){return Tn(this)},has:In,add:si,set:li,delete:ci,clear:fi,forEach:Nn(!1,!1)},t={get(i){return Rn(this,i,!1,!0)},get size(){return Tn(this)},has:In,add:si,set:li,delete:ci,clear:fi,forEach:Nn(!1,!0)},n={get(i){return Rn(this,i,!0)},get size(){return Tn(this,!0)},has(i){return In.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:Nn(!0,!1)},r={get(i){return Rn(this,i,!0,!0)},get size(){return Tn(this,!0)},has(i){return In.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:Nn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Mn(i,!1,!1),n[i]=Mn(i,!0,!1),t[i]=Mn(i,!1,!0),r[i]=Mn(i,!0,!0)}),[e,n,t,r]}const[Kl,Wl,Yl,ql]=Hl();function Ca(e,t){const n=t?e?ql:Yl:e?Wl:Kl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(W(n,a)&&a in r?n:r,a,i)}const Vl={get:Ca(!1,!1)},Xl={get:Ca(!1,!0)},Gl={get:Ca(!0,!1)},$o=new WeakMap,zo=new WeakMap,Bo=new WeakMap,Ql=new WeakMap;function Jl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zl(e){return e.__v_skip||!Object.isExtensible(e)?0:Jl(gl(e))}function pr(e){return Ut(e)?e:Sa(e,!1,Do,Vl,$o)}function Uo(e){return Sa(e,!1,Ul,Xl,zo)}function Ho(e){return Sa(e,!0,Bl,Gl,Bo)}function Sa(e,t,n,r,a){if(!re(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Zl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function $t(e){return Ut(e)?$t(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function er(e){return!!(e&&e.__v_isShallow)}function Ko(e){return $t(e)||Ut(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Wo(e){return Zn(e,"__v_skip",!0),e}const pn=e=>re(e)?pr(e):e,Ra=e=>re(e)?Ho(e):e;function Yo(e){ct&&Re&&(e=Y(e),Lo(e.dep||(e.dep=ka())))}function qo(e,t){e=Y(e);const n=e.dep;n&&qr(n)}function he(e){return!!(e&&e.__v_isRef===!0)}function ec(e){return Vo(e,!1)}function tc(e){return Vo(e,!0)}function Vo(e,t){return he(e)?e:new nc(e,t)}class nc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:pn(t)}get value(){return Yo(this),this._value}set value(t){const n=this.__v_isShallow||er(t)||Ut(t);t=n?t:Y(t),mn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:pn(t),qo(this))}}function kt(e){return he(e)?e.value:e}const rc={get:(e,t,n)=>kt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return he(a)&&!he(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Xo(e){return $t(e)?e:new Proxy(e,rc)}class ac{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Aa(t,()=>{this._dirty||(this._dirty=!0,qo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return Yo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ic(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=Ne):(r=e.get,a=e.set),new ac(r,a,i||!a,n)}function ft(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){hr(i,t,n)}return a}function Me(e,t,n,r){if(U(e)){const i=ft(e,t,n,r);return i&&Po(i)&&i.catch(o=>{hr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Me(e[i],t,n,r));return a}function hr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ft(l,null,10,[e,o,s]);return}}oc(e,n,a,r)}function oc(e,t,n,r=!0){console.error(e)}let hn=!1,Vr=!1;const pe=[];let Be=0;const zt=[];let Ye=null,bt=0;const Go=Promise.resolve();let Ia=null;function Qo(e){const t=Ia||Go;return e?t.then(this?e.bind(this):e):t}function sc(e){let t=Be+1,n=pe.length;for(;t<n;){const r=t+n>>>1;gn(pe[r])<e?t=r+1:n=r}return t}function Ta(e){(!pe.length||!pe.includes(e,hn&&e.allowRecurse?Be+1:Be))&&(e.id==null?pe.push(e):pe.splice(sc(e.id),0,e),Jo())}function Jo(){!hn&&!Vr&&(Vr=!0,Ia=Go.then(es))}function lc(e){const t=pe.indexOf(e);t>Be&&pe.splice(t,1)}function cc(e){z(e)?zt.push(...e):(!Ye||!Ye.includes(e,e.allowRecurse?bt+1:bt))&&zt.push(e),Jo()}function ui(e,t=hn?Be+1:0){for(;t<pe.length;t++){const n=pe[t];n&&n.pre&&(pe.splice(t,1),t--,n())}}function Zo(e){if(zt.length){const t=[...new Set(zt)];if(zt.length=0,Ye){Ye.push(...t);return}for(Ye=t,Ye.sort((n,r)=>gn(n)-gn(r)),bt=0;bt<Ye.length;bt++)Ye[bt]();Ye=null,bt=0}}const gn=e=>e.id==null?1/0:e.id,fc=(e,t)=>{const n=gn(e)-gn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function es(e){Vr=!1,hn=!0,pe.sort(fc);const t=Ne;try{for(Be=0;Be<pe.length;Be++){const n=pe[Be];n&&n.active!==!1&&ft(n,null,14)}}finally{Be=0,pe.length=0,Zo(),hn=!1,Ia=null,(pe.length||zt.length)&&es()}}function uc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ee;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[f]||ee;p&&(a=n.map(g=>se(g)?g.trim():g)),d&&(a=n.map(Ur))}let s,l=r[s=Cr(t)]||r[s=Cr(He(t))];!l&&i&&(l=r[s=Cr(Vt(t))]),l&&Me(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Me(c,e,6,a)}}function ts(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=c=>{const f=ts(c,t,!0);f&&(s=!0,fe(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(re(e)&&r.set(e,null),null):(z(i)?i.forEach(l=>o[l]=null):fe(o,i),re(e)&&r.set(e,o),o)}function gr(e,t){return!e||!cr(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,Vt(t))||W(e,t))}let Pe=null,vr=null;function tr(e){const t=Pe;return Pe=e,vr=e&&e.type.__scopeId||null,t}function dc(e){vr=e}function mc(){vr=null}function ns(e,t=Pe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&_i(-1);const i=tr(t);let o;try{o=e(...a)}finally{tr(i),r._d&&_i(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Sr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:p,setupState:g,ctx:P,inheritAttrs:C}=e;let F,x;const w=tr(e);try{if(n.shapeFlag&4){const S=a||r;F=ze(f.call(S,S,d,i,g,p,P)),x=l}else{const S=t;F=ze(S.length>1?S(i,{attrs:l,slots:s,emit:c}):S(i,null)),x=t.props?l:pc(l)}}catch(S){ln.length=0,hr(S,e,1),F=we(vn)}let L=F;if(x&&C!==!1){const S=Object.keys(x),{shapeFlag:H}=L;S.length&&H&7&&(o&&S.some(ba)&&(x=hc(x,o)),L=Ht(L,x))}return n.dirs&&(L=Ht(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),F=L,tr(w),F}const pc=e=>{let t;for(const n in e)(n==="class"||n==="style"||cr(n))&&((t||(t={}))[n]=e[n]);return t},hc=(e,t)=>{const n={};for(const r in e)(!ba(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?di(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!gr(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?di(r,o,c):!0:!!o;return!1}function di(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!gr(n,i))return!0}return!1}function vc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const bc=e=>e.__isSuspense;function yc(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):cc(e)}const Ln={};function on(e,t,n){return rs(e,t,n)}function rs(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ee){var s;const l=Pl()===((s=de)==null?void 0:s.scope)?de:null;let c,f=!1,d=!1;if(he(e)?(c=()=>e.value,f=er(e)):$t(e)?(c=()=>e,r=!0):z(e)?(d=!0,f=e.some(S=>$t(S)||er(S)),c=()=>e.map(S=>{if(he(S))return S.value;if($t(S))return xt(S);if(U(S))return ft(S,l,2)})):U(e)?t?c=()=>ft(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),Me(e,l,3,[g])}:c=Ne,t&&r){const S=c;c=()=>xt(S())}let p,g=S=>{p=w.onStop=()=>{ft(S,l,4)}},P;if(yn)if(g=Ne,t?n&&Me(t,l,3,[c(),d?[]:void 0,g]):c(),a==="sync"){const S=bf();P=S.__watcherHandles||(S.__watcherHandles=[])}else return Ne;let C=d?new Array(e.length).fill(Ln):Ln;const F=()=>{if(w.active)if(t){const S=w.run();(r||f||(d?S.some((H,J)=>mn(H,C[J])):mn(S,C)))&&(p&&p(),Me(t,l,3,[S,C===Ln?void 0:d&&C[0]===Ln?[]:C,g]),C=S)}else w.run()};F.allowRecurse=!!t;let x;a==="sync"?x=F:a==="post"?x=()=>xe(F,l&&l.suspense):(F.pre=!0,l&&(F.id=l.uid),x=()=>Ta(F));const w=new Aa(c,x);t?n?F():C=w.run():a==="post"?xe(w.run.bind(w),l&&l.suspense):w.run();const L=()=>{w.stop(),l&&l.scope&&ya(l.scope.effects,w)};return P&&P.push(L),L}function xc(e,t,n){const r=this.proxy,a=se(e)?e.includes(".")?as(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=de;Kt(this);const s=rs(a,i.bind(r),n);return o?Kt(o):At(),s}function as(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function xt(e,t){if(!re(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),he(e))xt(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)xt(e[n],t);else if(Oo(e)||Dt(e))e.forEach(n=>{xt(n,t)});else if(So(e))for(const n in e)xt(e[n],t);return e}function Qm(e,t){const n=Pe;if(n===null)return e;const r=_r(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=ee]=t[i];o&&(U(o)&&(o={mounted:o,updated:o}),o.deep&&xt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function gt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Xt(),Me(l,n,8,[e.el,s,e,t]),Gt())}}function Na(e,t){return U(e)?(()=>fe({name:e.name},t,{setup:e}))():e}const qn=e=>!!e.type.__asyncLoader,is=e=>e.type.__isKeepAlive;function wc(e,t){os(e,"a",t)}function _c(e,t){os(e,"da",t)}function os(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(br(t,r,n),n){let a=n.parent;for(;a&&a.parent;)is(a.parent.vnode)&&Ec(r,t,n,a),a=a.parent}}function Ec(e,t,n,r){const a=br(t,e,r,!0);ss(()=>{ya(r[t],a)},n)}function br(e,t,n=de,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Xt(),Kt(n);const s=Me(t,n,e,o);return At(),Gt(),s});return r?a.unshift(i):a.push(i),i}}const et=e=>(t,n=de)=>(!yn||e==="sp")&&br(e,(...r)=>t(...r),n),kc=et("bm"),Ac=et("m"),Oc=et("bu"),Pc=et("u"),Cc=et("bum"),ss=et("um"),Sc=et("sp"),Rc=et("rtg"),Ic=et("rtc");function Tc(e,t=de){br("ec",e,t)}const ls="components";function Nc(e,t){return Lc(ls,e,!0,t)||e}const Mc=Symbol.for("v-ndc");function Lc(e,t,n=!0,r=!1){const a=Pe||de;if(a){const i=a.type;if(e===ls){const s=hf(i,!1);if(s&&(s===t||s===He(t)||s===dr(He(t))))return i}const o=mi(a[e]||i[e],t)||mi(a.appContext[e],t);return!o&&r?i:o}}function mi(e,t){return e&&(e[t]||e[He(t)]||e[dr(He(t))])}function Jm(e,t,n,r){let a;const i=n&&n[r];if(z(e)||se(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(re(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Xr=e=>e?xs(e)?_r(e)||e.proxy:Xr(e.parent):null,sn=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xr(e.parent),$root:e=>Xr(e.root),$emit:e=>e.emit,$options:e=>Ma(e),$forceUpdate:e=>e.f||(e.f=()=>Ta(e.update)),$nextTick:e=>e.n||(e.n=Qo.bind(e.proxy)),$watch:e=>xc.bind(e)}),Rr=(e,t)=>e!==ee&&!e.__isScriptSetup&&W(e,t),Fc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Rr(r,t))return o[t]=1,r[t];if(a!==ee&&W(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&W(c,t))return o[t]=3,i[t];if(n!==ee&&W(n,t))return o[t]=4,n[t];Gr&&(o[t]=0)}}const f=sn[t];let d,p;if(f)return t==="$attrs"&&_e(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ee&&W(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,W(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Rr(a,t)?(a[t]=n,!0):r!==ee&&W(r,t)?(r[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ee&&W(e,o)||Rr(t,o)||(s=i[0])&&W(s,o)||W(r,o)||W(sn,o)||W(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:W(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function pi(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Gr=!0;function jc(e){const t=Ma(e),n=e.proxy,r=e.ctx;Gr=!1,t.beforeCreate&&hi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:P,activated:C,deactivated:F,beforeDestroy:x,beforeUnmount:w,destroyed:L,unmounted:S,render:H,renderTracked:J,renderTriggered:ae,errorCaptured:Ee,serverPrefetch:ge,expose:Oe,inheritAttrs:nt,components:ht,directives:Fe,filters:Jt}=t;if(c&&Dc(c,r,null),o)for(const Q in o){const q=o[Q];U(q)&&(r[Q]=q.bind(n))}if(a){const Q=a.call(n,n);re(Q)&&(e.data=pr(Q))}if(Gr=!0,i)for(const Q in i){const q=i[Q],Ke=U(q)?q.bind(n,n):U(q.get)?q.get.bind(n,n):Ne,rt=!U(q)&&U(q.set)?q.set.bind(n):Ne,je=ue({get:Ke,set:rt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>je.value,set:be=>je.value=be})}if(s)for(const Q in s)cs(s[Q],r,n,Q);if(l){const Q=U(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(q=>{Vn(q,Q[q])})}f&&hi(f,e,"c");function ce(Q,q){z(q)?q.forEach(Ke=>Q(Ke.bind(n))):q&&Q(q.bind(n))}if(ce(kc,d),ce(Ac,p),ce(Oc,g),ce(Pc,P),ce(wc,C),ce(_c,F),ce(Tc,Ee),ce(Ic,J),ce(Rc,ae),ce(Cc,w),ce(ss,S),ce(Sc,ge),z(Oe))if(Oe.length){const Q=e.exposed||(e.exposed={});Oe.forEach(q=>{Object.defineProperty(Q,q,{get:()=>n[q],set:Ke=>n[q]=Ke})})}else e.exposed||(e.exposed={});H&&e.render===Ne&&(e.render=H),nt!=null&&(e.inheritAttrs=nt),ht&&(e.components=ht),Fe&&(e.directives=Fe)}function Dc(e,t,n=Ne){z(e)&&(e=Qr(e));for(const r in e){const a=e[r];let i;re(a)?"default"in a?i=Xe(a.from||r,a.default,!0):i=Xe(a.from||r):i=Xe(a),he(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function hi(e,t,n){Me(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function cs(e,t,n,r){const a=r.includes(".")?as(n,r):()=>n[r];if(se(e)){const i=t[e];U(i)&&on(a,i)}else if(U(e))on(a,e.bind(n));else if(re(e))if(z(e))e.forEach(i=>cs(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&on(a,i,e)}}function Ma(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>nr(l,c,o,!0)),nr(l,t,o)),re(t)&&i.set(t,l),l}function nr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&nr(e,i,n,!0),a&&a.forEach(o=>nr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=$c[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const $c={data:gi,props:vi,emits:vi,methods:rn,computed:rn,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:rn,directives:rn,watch:Bc,provide:gi,inject:zc};function gi(e,t){return t?e?function(){return fe(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function zc(e,t){return rn(Qr(e),Qr(t))}function Qr(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function rn(e,t){return e?fe(Object.create(null),e,t):t}function vi(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:fe(Object.create(null),pi(e),pi(t??{})):t}function Bc(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function fs(){return{app:null,config:{isNativeTag:ml,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uc=0;function Hc(e,t){return function(r,a=null){U(r)||(r=fe({},r)),a!=null&&!re(a)&&(a=null);const i=fs(),o=new Set;let s=!1;const l=i.app={_uid:Uc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:yf,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(l,...f)):U(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const p=we(r,a);return p.appContext=i,f&&t?t(p,c):e(p,c,d),s=!0,l._container=c,c.__vue_app__=l,_r(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l},runWithContext(c){rr=l;try{return c()}finally{rr=null}}};return l}}let rr=null;function Vn(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function Xe(e,t,n=!1){const r=de||Pe;if(r||rr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:rr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r&&r.proxy):t}}function Kc(e,t,n,r=!1){const a={},i={};Zn(i,xr,1),e.propsDefaults=Object.create(null),us(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Uo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Wc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(gr(e.emitsOptions,p))continue;const g=t[p];if(l)if(W(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const P=He(p);a[P]=Jr(l,s,P,g,e,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{us(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!W(t,d)&&((f=Vt(d))===d||!W(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=Jr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!W(t,d))&&(delete i[d],c=!0)}c&&Ge(e,"set","$attrs")}function us(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Wn(l))continue;const c=t[l];let f;a&&W(a,f=He(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:gr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Y(n),c=s||ee;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Jr(a,l,d,c[d],e,!W(c,d))}}return o}function Jr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=W(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&U(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Kt(a),r=c[n]=l.call(null,t),At())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Vt(n))&&(r=!0))}return r}function ds(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const f=d=>{l=!0;const[p,g]=ds(d,t,!0);fe(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return re(e)&&r.set(e,jt),jt;if(z(i))for(let f=0;f<i.length;f++){const d=He(i[f]);bi(d)&&(o[d]=ee)}else if(i)for(const f in i){const d=He(f);if(bi(d)){const p=i[f],g=o[d]=z(p)||U(p)?{type:p}:fe({},p);if(g){const P=wi(Boolean,g.type),C=wi(String,g.type);g[0]=P>-1,g[1]=C<0||P<C,(P>-1||W(g,"default"))&&s.push(d)}}}const c=[o,s];return re(e)&&r.set(e,c),c}function bi(e){return e[0]!=="$"}function yi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function xi(e,t){return yi(e)===yi(t)}function wi(e,t){return z(t)?t.findIndex(n=>xi(n,e)):U(t)&&xi(t,e)?0:-1}const ms=e=>e[0]==="_"||e==="$stable",La=e=>z(e)?e.map(ze):[ze(e)],Yc=(e,t,n)=>{if(t._n)return t;const r=ns((...a)=>La(t(...a)),n);return r._c=!1,r},ps=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ms(a))continue;const i=e[a];if(U(i))t[a]=Yc(a,i,r);else if(i!=null){const o=La(i);t[a]=()=>o}}},hs=(e,t)=>{const n=La(t);e.slots.default=()=>n},qc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Zn(t,"_",n)):ps(t,e.slots={})}else e.slots={},t&&hs(e,t);Zn(e.slots,xr,1)},Vc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ee;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ps(t,a)),o=t}else t&&(hs(e,t),o={default:1});if(i)for(const s in a)!ms(s)&&!(s in o)&&delete a[s]};function Zr(e,t,n,r,a=!1){if(z(e)){e.forEach((p,g)=>Zr(p,t&&(z(t)?t[g]:t),n,r,a));return}if(qn(r)&&!a)return;const i=r.shapeFlag&4?_r(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===ee?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(se(c)?(f[c]=null,W(d,c)&&(d[c]=null)):he(c)&&(c.value=null)),U(l))ft(l,s,12,[o,f]);else{const p=se(l),g=he(l);if(p||g){const P=()=>{if(e.f){const C=p?W(d,l)?d[l]:f[l]:l.value;a?z(C)&&ya(C,i):z(C)?C.includes(i)||C.push(i):p?(f[l]=[i],W(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else p?(f[l]=o,W(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(f[e.k]=o))};o?(P.id=-1,xe(P,n)):P()}}}const xe=yc;function Xc(e){return Gc(e)}function Gc(e,t){const n=Hr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=Ne,insertStaticContent:P}=e,C=(u,m,h,v=null,y=null,_=null,R=!1,k=null,A=!!m.dynamicChildren)=>{if(u===m)return;u&&!en(u,m)&&(v=b(u),be(u,y,_,!0),u=null),m.patchFlag===-2&&(A=!1,m.dynamicChildren=null);const{type:E,ref:D,shapeFlag:N}=m;switch(E){case yr:F(u,m,h,v);break;case vn:x(u,m,h,v);break;case Xn:u==null&&w(m,h,v,R);break;case qe:ht(u,m,h,v,y,_,R,k,A);break;default:N&1?H(u,m,h,v,y,_,R,k,A):N&6?Fe(u,m,h,v,y,_,R,k,A):(N&64||N&128)&&E.process(u,m,h,v,y,_,R,k,A,O)}D!=null&&y&&Zr(D,u&&u.ref,_,m||u,!m)},F=(u,m,h,v)=>{if(u==null)r(m.el=s(m.children),h,v);else{const y=m.el=u.el;m.children!==u.children&&c(y,m.children)}},x=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},w=(u,m,h,v)=>{[u.el,u.anchor]=P(u.children,m,h,v,u.el,u.anchor)},L=({el:u,anchor:m},h,v)=>{let y;for(;u&&u!==m;)y=p(u),r(u,h,v),u=y;r(m,h,v)},S=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},H=(u,m,h,v,y,_,R,k,A)=>{R=R||m.type==="svg",u==null?J(m,h,v,y,_,R,k,A):ge(u,m,y,_,R,k,A)},J=(u,m,h,v,y,_,R,k)=>{let A,E;const{type:D,props:N,shapeFlag:$,transition:B,dirs:K}=u;if(A=u.el=o(u.type,_,N&&N.is,N),$&8?f(A,u.children):$&16&&Ee(u.children,A,null,v,y,_&&D!=="foreignObject",R,k),K&&gt(u,null,v,"created"),ae(A,u,u.scopeId,R,v),N){for(const G in N)G!=="value"&&!Wn(G)&&i(A,G,null,N[G],_,u.children,v,y,me);"value"in N&&i(A,"value",null,N.value),(E=N.onVnodeBeforeMount)&&$e(E,v,u)}K&&gt(u,null,v,"beforeMount");const Z=(!y||y&&!y.pendingBranch)&&B&&!B.persisted;Z&&B.beforeEnter(A),r(A,m,h),((E=N&&N.onVnodeMounted)||Z||K)&&xe(()=>{E&&$e(E,v,u),Z&&B.enter(A),K&&gt(u,null,v,"mounted")},y)},ae=(u,m,h,v,y)=>{if(h&&g(u,h),v)for(let _=0;_<v.length;_++)g(u,v[_]);if(y){let _=y.subTree;if(m===_){const R=y.vnode;ae(u,R,R.scopeId,R.slotScopeIds,y.parent)}}},Ee=(u,m,h,v,y,_,R,k,A=0)=>{for(let E=A;E<u.length;E++){const D=u[E]=k?st(u[E]):ze(u[E]);C(null,D,m,h,v,y,_,R,k)}},ge=(u,m,h,v,y,_,R)=>{const k=m.el=u.el;let{patchFlag:A,dynamicChildren:E,dirs:D}=m;A|=u.patchFlag&16;const N=u.props||ee,$=m.props||ee;let B;h&&vt(h,!1),(B=$.onVnodeBeforeUpdate)&&$e(B,h,m,u),D&&gt(m,u,h,"beforeUpdate"),h&&vt(h,!0);const K=y&&m.type!=="foreignObject";if(E?Oe(u.dynamicChildren,E,k,h,v,K,_):R||q(u,m,k,null,h,v,K,_,!1),A>0){if(A&16)nt(k,m,N,$,h,v,y);else if(A&2&&N.class!==$.class&&i(k,"class",null,$.class,y),A&4&&i(k,"style",N.style,$.style,y),A&8){const Z=m.dynamicProps;for(let G=0;G<Z.length;G++){const oe=Z[G],Ce=N[oe],It=$[oe];(It!==Ce||oe==="value")&&i(k,oe,Ce,It,y,u.children,h,v,me)}}A&1&&u.children!==m.children&&f(k,m.children)}else!R&&E==null&&nt(k,m,N,$,h,v,y);((B=$.onVnodeUpdated)||D)&&xe(()=>{B&&$e(B,h,m,u),D&&gt(m,u,h,"updated")},v)},Oe=(u,m,h,v,y,_,R)=>{for(let k=0;k<m.length;k++){const A=u[k],E=m[k],D=A.el&&(A.type===qe||!en(A,E)||A.shapeFlag&70)?d(A.el):h;C(A,E,D,null,v,y,_,R,!0)}},nt=(u,m,h,v,y,_,R)=>{if(h!==v){if(h!==ee)for(const k in h)!Wn(k)&&!(k in v)&&i(u,k,h[k],null,R,m.children,y,_,me);for(const k in v){if(Wn(k))continue;const A=v[k],E=h[k];A!==E&&k!=="value"&&i(u,k,E,A,R,m.children,y,_,me)}"value"in v&&i(u,"value",h.value,v.value)}},ht=(u,m,h,v,y,_,R,k,A)=>{const E=m.el=u?u.el:s(""),D=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:B}=m;B&&(k=k?k.concat(B):B),u==null?(r(E,h,v),r(D,h,v),Ee(m.children,h,D,y,_,R,k,A)):N>0&&N&64&&$&&u.dynamicChildren?(Oe(u.dynamicChildren,$,h,y,_,R,k),(m.key!=null||y&&m===y.subTree)&&gs(u,m,!0)):q(u,m,h,D,y,_,R,k,A)},Fe=(u,m,h,v,y,_,R,k,A)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?y.ctx.activate(m,h,v,R,A):Jt(m,h,v,y,_,R,A):Ct(u,m,A)},Jt=(u,m,h,v,y,_,R)=>{const k=u.component=ff(u,v,y);if(is(u)&&(k.ctx.renderer=O),uf(k),k.asyncDep){if(y&&y.registerDep(k,ce),!u.el){const A=k.subTree=we(vn);x(null,A,m,h)}return}ce(k,u,m,h,y,_,R)},Ct=(u,m,h)=>{const v=m.component=u.component;if(gc(u,m,h))if(v.asyncDep&&!v.asyncResolved){Q(v,m,h);return}else v.next=m,lc(v.update),v.update();else m.el=u.el,v.vnode=m},ce=(u,m,h,v,y,_,R)=>{const k=()=>{if(u.isMounted){let{next:D,bu:N,u:$,parent:B,vnode:K}=u,Z=D,G;vt(u,!1),D?(D.el=K.el,Q(u,D,R)):D=K,N&&Yn(N),(G=D.props&&D.props.onVnodeBeforeUpdate)&&$e(G,B,D,K),vt(u,!0);const oe=Sr(u),Ce=u.subTree;u.subTree=oe,C(Ce,oe,d(Ce.el),b(Ce),u,y,_),D.el=oe.el,Z===null&&vc(u,oe.el),$&&xe($,y),(G=D.props&&D.props.onVnodeUpdated)&&xe(()=>$e(G,B,D,K),y)}else{let D;const{el:N,props:$}=m,{bm:B,m:K,parent:Z}=u,G=qn(m);if(vt(u,!1),B&&Yn(B),!G&&(D=$&&$.onVnodeBeforeMount)&&$e(D,Z,m),vt(u,!0),N&&V){const oe=()=>{u.subTree=Sr(u),V(N,u.subTree,u,y,null)};G?m.type.__asyncLoader().then(()=>!u.isUnmounted&&oe()):oe()}else{const oe=u.subTree=Sr(u);C(null,oe,h,v,u,y,_),m.el=oe.el}if(K&&xe(K,y),!G&&(D=$&&$.onVnodeMounted)){const oe=m;xe(()=>$e(D,Z,oe),y)}(m.shapeFlag&256||Z&&qn(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&xe(u.a,y),u.isMounted=!0,m=h=v=null}},A=u.effect=new Aa(k,()=>Ta(E),u.scope),E=u.update=()=>A.run();E.id=u.uid,vt(u,!0),E()},Q=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Wc(u,m.props,v,h),Vc(u,m.children,h),Xt(),ui(),Gt()},q=(u,m,h,v,y,_,R,k,A=!1)=>{const E=u&&u.children,D=u?u.shapeFlag:0,N=m.children,{patchFlag:$,shapeFlag:B}=m;if($>0){if($&128){rt(E,N,h,v,y,_,R,k,A);return}else if($&256){Ke(E,N,h,v,y,_,R,k,A);return}}B&8?(D&16&&me(E,y,_),N!==E&&f(h,N)):D&16?B&16?rt(E,N,h,v,y,_,R,k,A):me(E,y,_,!0):(D&8&&f(h,""),B&16&&Ee(N,h,v,y,_,R,k,A))},Ke=(u,m,h,v,y,_,R,k,A)=>{u=u||jt,m=m||jt;const E=u.length,D=m.length,N=Math.min(E,D);let $;for($=0;$<N;$++){const B=m[$]=A?st(m[$]):ze(m[$]);C(u[$],B,h,null,y,_,R,k,A)}E>D?me(u,y,_,!0,!1,N):Ee(m,h,v,y,_,R,k,A,N)},rt=(u,m,h,v,y,_,R,k,A)=>{let E=0;const D=m.length;let N=u.length-1,$=D-1;for(;E<=N&&E<=$;){const B=u[E],K=m[E]=A?st(m[E]):ze(m[E]);if(en(B,K))C(B,K,h,null,y,_,R,k,A);else break;E++}for(;E<=N&&E<=$;){const B=u[N],K=m[$]=A?st(m[$]):ze(m[$]);if(en(B,K))C(B,K,h,null,y,_,R,k,A);else break;N--,$--}if(E>N){if(E<=$){const B=$+1,K=B<D?m[B].el:v;for(;E<=$;)C(null,m[E]=A?st(m[E]):ze(m[E]),h,K,y,_,R,k,A),E++}}else if(E>$)for(;E<=N;)be(u[E],y,_,!0),E++;else{const B=E,K=E,Z=new Map;for(E=K;E<=$;E++){const ke=m[E]=A?st(m[E]):ze(m[E]);ke.key!=null&&Z.set(ke.key,E)}let G,oe=0;const Ce=$-K+1;let It=!1,ei=0;const Zt=new Array(Ce);for(E=0;E<Ce;E++)Zt[E]=0;for(E=B;E<=N;E++){const ke=u[E];if(oe>=Ce){be(ke,y,_,!0);continue}let De;if(ke.key!=null)De=Z.get(ke.key);else for(G=K;G<=$;G++)if(Zt[G-K]===0&&en(ke,m[G])){De=G;break}De===void 0?be(ke,y,_,!0):(Zt[De-K]=E+1,De>=ei?ei=De:It=!0,C(ke,m[De],h,null,y,_,R,k,A),oe++)}const ti=It?Qc(Zt):jt;for(G=ti.length-1,E=Ce-1;E>=0;E--){const ke=K+E,De=m[ke],ni=ke+1<D?m[ke+1].el:v;Zt[E]===0?C(null,De,h,ni,y,_,R,k,A):It&&(G<0||E!==ti[G]?je(De,h,ni,2):G--)}}},je=(u,m,h,v,y=null)=>{const{el:_,type:R,transition:k,children:A,shapeFlag:E}=u;if(E&6){je(u.component.subTree,m,h,v);return}if(E&128){u.suspense.move(m,h,v);return}if(E&64){R.move(u,m,h,O);return}if(R===qe){r(_,m,h);for(let N=0;N<A.length;N++)je(A[N],m,h,v);r(u.anchor,m,h);return}if(R===Xn){L(u,m,h);return}if(v!==2&&E&1&&k)if(v===0)k.beforeEnter(_),r(_,m,h),xe(()=>k.enter(_),y);else{const{leave:N,delayLeave:$,afterLeave:B}=k,K=()=>r(_,m,h),Z=()=>{N(_,()=>{K(),B&&B()})};$?$(_,K,Z):Z()}else r(_,m,h)},be=(u,m,h,v=!1,y=!1)=>{const{type:_,props:R,ref:k,children:A,dynamicChildren:E,shapeFlag:D,patchFlag:N,dirs:$}=u;if(k!=null&&Zr(k,null,h,u,!0),D&256){m.ctx.deactivate(u);return}const B=D&1&&$,K=!qn(u);let Z;if(K&&(Z=R&&R.onVnodeBeforeUnmount)&&$e(Z,m,u),D&6)Sn(u.component,h,v);else{if(D&128){u.suspense.unmount(h,v);return}B&&gt(u,null,m,"beforeUnmount"),D&64?u.type.remove(u,m,h,y,O,v):E&&(_!==qe||N>0&&N&64)?me(E,m,h,!1,!0):(_===qe&&N&384||!y&&D&16)&&me(A,m,h),v&&St(u)}(K&&(Z=R&&R.onVnodeUnmounted)||B)&&xe(()=>{Z&&$e(Z,m,u),B&&gt(u,null,m,"unmounted")},h)},St=u=>{const{type:m,el:h,anchor:v,transition:y}=u;if(m===qe){Rt(h,v);return}if(m===Xn){S(u);return}const _=()=>{a(h),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:k}=y,A=()=>R(h,_);k?k(u.el,_,A):A()}else _()},Rt=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},Sn=(u,m,h)=>{const{bum:v,scope:y,update:_,subTree:R,um:k}=u;v&&Yn(v),y.stop(),_&&(_.active=!1,be(R,u,m,h)),k&&xe(k,m),xe(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},me=(u,m,h,v=!1,y=!1,_=0)=>{for(let R=_;R<u.length;R++)be(u[R],m,h,v,y)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),T=(u,m,h)=>{u==null?m._vnode&&be(m._vnode,null,null,!0):C(m._vnode||null,u,m,null,null,null,h),ui(),Zo(),m._vnode=u},O={p:C,um:be,m:je,r:St,mt:Jt,mc:Ee,pc:q,pbc:Oe,n:b,o:e};let j,V;return t&&([j,V]=t(O)),{render:T,hydrate:j,createApp:Hc(T,j)}}function vt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function gs(e,t,n=!1){const r=e.children,a=t.children;if(z(r)&&z(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=st(a[i]),s.el=o.el),n||gs(o,s)),s.type===yr&&(s.el=o.el)}}function Qc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Jc=e=>e.__isTeleport,qe=Symbol.for("v-fgt"),yr=Symbol.for("v-txt"),vn=Symbol.for("v-cmt"),Xn=Symbol.for("v-stc"),ln=[];let Ie=null;function vs(e=!1){ln.push(Ie=e?null:[])}function Zc(){ln.pop(),Ie=ln[ln.length-1]||null}let bn=1;function _i(e){bn+=e}function bs(e){return e.dynamicChildren=bn>0?Ie||jt:null,Zc(),bn>0&&Ie&&Ie.push(e),e}function ef(e,t,n,r,a,i){return bs(wr(e,t,n,r,a,i,!0))}function tf(e,t,n,r,a){return bs(we(e,t,n,r,a,!0))}function ea(e){return e?e.__v_isVNode===!0:!1}function en(e,t){return e.type===t.type&&e.key===t.key}const xr="__vInternal",ys=({key:e})=>e??null,Gn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||he(e)||U(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function wr(e,t=null,n=null,r=0,a=null,i=e===qe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ys(t),ref:t&&Gn(t),scopeId:vr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Pe};return s?(Fa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=se(n)?8:16),bn>0&&!o&&Ie&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ie.push(l),l}const we=nf;function nf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Mc)&&(e=vn),ea(e)){const s=Ht(e,t,!0);return n&&Fa(s,n),bn>0&&!i&&Ie&&(s.shapeFlag&6?Ie[Ie.indexOf(e)]=s:Ie.push(s)),s.patchFlag|=-2,s}if(gf(e)&&(e=e.__vccOpts),t){t=rf(t);let{class:s,style:l}=t;s&&!se(s)&&(t.class=Ea(s)),re(l)&&(Ko(l)&&!z(l)&&(l=fe({},l)),t.style=_a(l))}const o=se(e)?1:bc(e)?128:Jc(e)?64:re(e)?4:U(e)?2:0;return wr(e,t,n,r,a,o,i,!0)}function rf(e){return e?Ko(e)||xr in e?fe({},e):e:null}function Ht(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?sf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ys(s),ref:t&&t.ref?n&&a?z(a)?a.concat(Gn(t)):[a,Gn(t)]:Gn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==qe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function af(e=" ",t=0){return we(yr,null,e,t)}function of(e,t){const n=we(Xn,null,e);return n.staticCount=t,n}function ze(e){return e==null||typeof e=="boolean"?we(vn):z(e)?we(qe,null,e.slice()):typeof e=="object"?st(e):we(yr,null,String(e))}function st(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function Fa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Fa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(xr in t)?t._ctx=Pe:a===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[af(t)]):n=8);e.children=t,e.shapeFlag|=n}function sf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Ea([t.class,r.class]));else if(a==="style")t.style=_a([t.style,r.style]);else if(cr(a)){const i=t[a],o=r[a];o&&i!==o&&!(z(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function $e(e,t,n,r=null){Me(e,t,7,[n,r])}const lf=fs();let cf=0;function ff(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||lf,i={uid:cf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Al(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ds(r,a),emitsOptions:ts(r,a),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=uc.bind(null,i),e.ce&&e.ce(i),i}let de=null,ja,Tt,Ei="__VUE_INSTANCE_SETTERS__";(Tt=Hr()[Ei])||(Tt=Hr()[Ei]=[]),Tt.push(e=>de=e),ja=e=>{Tt.length>1?Tt.forEach(t=>t(e)):Tt[0](e)};const Kt=e=>{ja(e),e.scope.on()},At=()=>{de&&de.scope.off(),ja(null)};function xs(e){return e.vnode.shapeFlag&4}let yn=!1;function uf(e,t=!1){yn=t;const{props:n,children:r}=e.vnode,a=xs(e);Kc(e,n,a,t),qc(e,r);const i=a?df(e,t):void 0;return yn=!1,i}function df(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Wo(new Proxy(e.ctx,Fc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?pf(e):null;Kt(e),Xt();const i=ft(r,e,0,[e.props,a]);if(Gt(),At(),Po(i)){if(i.then(At,At),t)return i.then(o=>{ki(e,o,t)}).catch(o=>{hr(o,e,0)});e.asyncDep=i}else ki(e,i,t)}else ws(e,t)}function ki(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:re(t)&&(e.setupState=Xo(t)),ws(e,n)}let Ai;function ws(e,t,n){const r=e.type;if(!e.render){if(!t&&Ai&&!r.render){const a=r.template||Ma(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=Ai(a,c)}}e.render=r.render||Ne}Kt(e),Xt(),jc(e),Gt(),At()}function mf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return _e(e,"get","$attrs"),t[n]}}))}function pf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return mf(e)},slots:e.slots,emit:e.emit,expose:t}}function _r(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Xo(Wo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in sn)return sn[n](e)},has(t,n){return n in t||n in sn}}))}function hf(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function gf(e){return U(e)&&"__vccOpts"in e}const ue=(e,t)=>ic(e,t,yn);function Da(e,t,n){const r=arguments.length;return r===2?re(t)&&!z(t)?ea(t)?we(e,null,[t]):we(e,t):we(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ea(n)&&(n=[n]),we(e,t,n))}const vf=Symbol.for("v-scx"),bf=()=>Xe(vf),yf="3.3.4",xf="http://www.w3.org/2000/svg",yt=typeof document<"u"?document:null,Oi=yt&&yt.createElement("template"),wf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?yt.createElementNS(xf,e):yt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Oi.innerHTML=r?`<svg>${e}</svg>`:e;const s=Oi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function _f(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ef(e,t,n){const r=e.style,a=se(n);if(n&&!a){if(t&&!se(t))for(const i in t)n[i]==null&&ta(r,i,"");for(const i in n)ta(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Pi=/\s*!important$/;function ta(e,t,n){if(z(n))n.forEach(r=>ta(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=kf(e,t);Pi.test(n)?e.setProperty(Vt(r),n.replace(Pi,""),"important"):e[r]=n}}const Ci=["Webkit","Moz","ms"],Ir={};function kf(e,t){const n=Ir[t];if(n)return n;let r=He(t);if(r!=="filter"&&r in e)return Ir[t]=r;r=dr(r);for(let a=0;a<Ci.length;a++){const i=Ci[a]+r;if(i in e)return Ir[t]=i}return t}const Si="http://www.w3.org/1999/xlink";function Af(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Si,t.slice(6,t.length)):e.setAttributeNS(Si,t,n);else{const i=kl(t);n==null||i&&!Ro(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Of(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,f=n??"";c!==f&&(e.value=f),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ro(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Nt(e,t,n,r){e.addEventListener(t,n,r)}function Pf(e,t,n,r){e.removeEventListener(t,n,r)}function Cf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Sf(t);if(r){const c=i[t]=Tf(r,a);Nt(e,s,c,l)}else o&&(Pf(e,s,o,l),i[t]=void 0)}}const Ri=/(?:Once|Passive|Capture)$/;function Sf(e){let t;if(Ri.test(e)){t={};let r;for(;r=e.match(Ri);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Vt(e.slice(2)),t]}let Tr=0;const Rf=Promise.resolve(),If=()=>Tr||(Rf.then(()=>Tr=0),Tr=Date.now());function Tf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Me(Nf(r,n.value),t,5,[r])};return n.value=e,n.attached=If(),n}function Nf(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ii=/^on[a-z]/,Mf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?_f(e,r,a):t==="style"?Ef(e,n,r):cr(t)?ba(t)||Cf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lf(e,t,r,a))?Of(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Af(e,t,r,a))};function Lf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ii.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ii.test(t)&&se(n)?!1:t in e}const Ti=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>Yn(t,n):t};function Ff(e){e.target.composing=!0}function Ni(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Zm={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Ti(a);const i=r||a.props&&a.props.type==="number";Nt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Ur(s)),e._assign(s)}),n&&Nt(e,"change",()=>{e.value=e.value.trim()}),t||(Nt(e,"compositionstart",Ff),Nt(e,"compositionend",Ni),Nt(e,"change",Ni))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Ti(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Ur(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},jf=["ctrl","shift","alt","meta"],Df={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>jf.some(n=>e[`${n}Key`]&&!t.includes(n))},ep=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=Df[t[a]];if(i&&i(n,t))return}return e(n,...r)},$f=fe({patchProp:Mf},wf);let Mi;function zf(){return Mi||(Mi=Xc($f))}const Bf=(...e)=>{const t=zf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Uf(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Uf(e){return se(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Mt=typeof window<"u";function Hf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function Nr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Le(a)?a.map(e):e(a)}return n}const cn=()=>{},Le=Array.isArray,Kf=/\/$/,Wf=e=>e.replace(Kf,"");function Mr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Xf(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Yf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Li(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function qf(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Wt(t.matched[r],n.matched[a])&&_s(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Wt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _s(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Vf(e[n],t[n]))return!1;return!0}function Vf(e,t){return Le(e)?Fi(e,t):Le(t)?Fi(t,e):e===t}function Fi(e,t){return Le(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Xf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var xn;(function(e){e.pop="pop",e.push="push"})(xn||(xn={}));var fn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(fn||(fn={}));function Gf(e){if(!e)if(Mt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Wf(e)}const Qf=/^[^#]+#/;function Jf(e,t){return e.replace(Qf,"#")+t}function Zf(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Er=()=>({left:window.pageXOffset,top:window.pageYOffset});function eu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Zf(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ji(e,t){return(history.state?history.state.position-t:-1)+e}const na=new Map;function tu(e,t){na.set(e,t)}function nu(e){const t=na.get(e);return na.delete(e),t}let ru=()=>location.protocol+"//"+location.host;function Es(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Li(l,"")}return Li(n,e)+r+a}function au(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=Es(e,location),P=n.value,C=t.value;let F=0;if(p){if(n.value=g,t.value=p,o&&o===P){o=null;return}F=C?p.position-C.position:0}else r(g);a.forEach(x=>{x(n.value,P,{delta:F,type:xn.pop,direction:F?F>0?fn.forward:fn.back:fn.unknown})})};function l(){o=n.value}function c(p){a.push(p);const g=()=>{const P=a.indexOf(p);P>-1&&a.splice(P,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:Er()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Di(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Er():null}}function iu(e){const{history:t,location:n}=window,r={value:Es(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:ru()+e+l;try{t[f?"replaceState":"pushState"](c,"",p),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(l,c){const f=X({},t.state,Di(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=X({},a.value,t.state,{forward:l,scroll:Er()});i(f.current,f,!0);const d=X({},Di(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function ou(e){e=Gf(e);const t=iu(e),n=au(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=X({location:"",base:e,go:r,createHref:Jf.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function su(e){return typeof e=="string"||e&&typeof e=="object"}function ks(e){return typeof e=="string"||typeof e=="symbol"}const it={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},As=Symbol("");var $i;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})($i||($i={}));function Yt(e,t){return X(new Error,{type:e,[As]:!0},t)}function We(e,t){return e instanceof Error&&As in e&&(t==null||!!(e.type&t))}const zi="[^/]+?",lu={sensitive:!1,strict:!1,start:!0,end:!0},cu=/[.+*?^${}()[\]/\\]/g;function fu(e,t){const n=X({},lu,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const p=c[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(cu,"\\$&"),g+=40;else if(p.type===1){const{value:P,repeatable:C,optional:F,regexp:x}=p;i.push({name:P,repeatable:C,optional:F});const w=x||zi;if(w!==zi){g+=10;try{new RegExp(`(${w})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${P}" (${w}): `+S.message)}}let L=C?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(L=F&&c.length<2?`(?:/${L})`:"/"+L),F&&(L+="?"),a+=L,g+=20,F&&(g+=-8),C&&(g+=-20),w===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",P=i[p-1];d[P.name]=g&&P.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const p of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:P,repeatable:C,optional:F}=g,x=P in c?c[P]:"";if(Le(x)&&!C)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const w=Le(x)?x.join("/"):x;if(!w)if(F)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);f+=w}}return f||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function uu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function du(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=uu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Bi(r))return 1;if(Bi(a))return-1}return a.length-r.length}function Bi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const mu={type:0,value:""},pu=/[a-zA-Z0-9_]/;function hu(e){if(!e)return[[]];if(e==="/")return[[mu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:pu.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function gu(e,t,n){const r=fu(hu(e.path),n),a=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function vu(e,t){const n=[],r=new Map;t=Ki({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,p){const g=!p,P=bu(f);P.aliasOf=p&&p.record;const C=Ki(t,f),F=[P];if("alias"in f){const L=typeof f.alias=="string"?[f.alias]:f.alias;for(const S of L)F.push(X({},P,{components:p?p.record.components:P.components,path:S,aliasOf:p?p.record:P}))}let x,w;for(const L of F){const{path:S}=L;if(d&&S[0]!=="/"){const H=d.record.path,J=H[H.length-1]==="/"?"":"/";L.path=d.record.path+(S&&J+S)}if(x=gu(L,d,C),p?p.alias.push(x):(w=w||x,w!==x&&w.alias.push(x),g&&f.name&&!Hi(x)&&o(f.name)),P.children){const H=P.children;for(let J=0;J<H.length;J++)i(H[J],x,p&&p.children[J])}p=p||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return w?()=>{o(w)}:cn}function o(f){if(ks(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&du(f,n[d])>=0&&(f.record.path!==n[d].record.path||!Os(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!Hi(f)&&r.set(f.record.name,f)}function c(f,d){let p,g={},P,C;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Yt(1,{location:f});C=p.record.name,g=X(Ui(d.params,p.keys.filter(w=>!w.optional).map(w=>w.name)),f.params&&Ui(f.params,p.keys.map(w=>w.name))),P=p.stringify(g)}else if("path"in f)P=f.path,p=n.find(w=>w.re.test(P)),p&&(g=p.parse(P),C=p.record.name);else{if(p=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!p)throw Yt(1,{location:f,currentLocation:d});C=p.record.name,g=X({},d.params,f.params),P=p.stringify(g)}const F=[];let x=p;for(;x;)F.unshift(x.record),x=x.parent;return{name:C,path:P,params:g,matched:F,meta:xu(F)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Ui(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function bu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:yu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function yu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Hi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function xu(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Ki(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Os(e,t){return t.children.some(n=>n===e||Os(e,n))}const Ps=/#/g,wu=/&/g,_u=/\//g,Eu=/=/g,ku=/\?/g,Cs=/\+/g,Au=/%5B/g,Ou=/%5D/g,Ss=/%5E/g,Pu=/%60/g,Rs=/%7B/g,Cu=/%7C/g,Is=/%7D/g,Su=/%20/g;function $a(e){return encodeURI(""+e).replace(Cu,"|").replace(Au,"[").replace(Ou,"]")}function Ru(e){return $a(e).replace(Rs,"{").replace(Is,"}").replace(Ss,"^")}function ra(e){return $a(e).replace(Cs,"%2B").replace(Su,"+").replace(Ps,"%23").replace(wu,"%26").replace(Pu,"`").replace(Rs,"{").replace(Is,"}").replace(Ss,"^")}function Iu(e){return ra(e).replace(Eu,"%3D")}function Tu(e){return $a(e).replace(Ps,"%23").replace(ku,"%3F")}function Nu(e){return e==null?"":Tu(e).replace(_u,"%2F")}function ar(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Mu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Cs," "),o=i.indexOf("="),s=ar(o<0?i:i.slice(0,o)),l=o<0?null:ar(i.slice(o+1));if(s in t){let c=t[s];Le(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function Wi(e){let t="";for(let n in e){const r=e[n];if(n=Iu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Le(r)?r.map(i=>i&&ra(i)):[r&&ra(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Lu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Le(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Fu=Symbol(""),Yi=Symbol(""),za=Symbol(""),Ts=Symbol(""),aa=Symbol("");function tn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function lt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Yt(4,{from:n,to:t})):d instanceof Error?s(d):su(d)?s(Yt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function Lr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(ju(s)){const c=(s.__vccOpts||s)[t];c&&a.push(lt(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Hf(c)?c.default:c;i.components[o]=f;const p=(f.__vccOpts||f)[t];return p&&lt(p,n,r,i,o)()}))}}return a}function ju(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qi(e){const t=Xe(za),n=Xe(Ts),r=ue(()=>t.resolve(kt(e.to))),a=ue(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(Wt.bind(null,f));if(p>-1)return p;const g=Vi(l[c-2]);return c>1&&Vi(f)===g&&d[d.length-1].path!==g?d.findIndex(Wt.bind(null,l[c-2])):p}),i=ue(()=>a.value>-1&&Bu(n.params,r.value.params)),o=ue(()=>a.value>-1&&a.value===n.matched.length-1&&_s(n.params,r.value.params));function s(l={}){return zu(l)?t[kt(e.replace)?"replace":"push"](kt(e.to)).catch(cn):Promise.resolve()}return{route:r,href:ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Du=Na({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qi,setup(e,{slots:t}){const n=pr(qi(e)),{options:r}=Xe(za),a=ue(()=>({[Xi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Da("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),$u=Du;function zu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Bu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Le(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Vi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xi=(e,t,n)=>e??t??n,Uu=Na({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Xe(aa),a=ue(()=>e.route||r.value),i=Xe(Yi,0),o=ue(()=>{let c=kt(i);const{matched:f}=a.value;let d;for(;(d=f[c])&&!d.components;)c++;return c}),s=ue(()=>a.value.matched[o.value]);Vn(Yi,ue(()=>o.value+1)),Vn(Fu,s),Vn(aa,a);const l=ec();return on(()=>[l.value,s.value,e.name],([c,f,d],[p,g,P])=>{f&&(f.instances[d]=c,g&&g!==f&&c&&c===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),c&&f&&(!g||!Wt(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=a.value,f=e.name,d=s.value,p=d&&d.components[f];if(!p)return Gi(n.default,{Component:p,route:c});const g=d.props[f],P=g?g===!0?c.params:typeof g=="function"?g(c):g:null,F=Da(p,X({},P,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return Gi(n.default,{Component:F,route:c})||F}}});function Gi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ns=Uu;function Hu(e){const t=vu(e.routes,e),n=e.parseQuery||Mu,r=e.stringifyQuery||Wi,a=e.history,i=tn(),o=tn(),s=tn(),l=tc(it);let c=it;Mt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Nr.bind(null,b=>""+b),d=Nr.bind(null,Nu),p=Nr.bind(null,ar);function g(b,T){let O,j;return ks(b)?(O=t.getRecordMatcher(b),j=T):j=b,t.addRoute(j,O)}function P(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function C(){return t.getRoutes().map(b=>b.record)}function F(b){return!!t.getRecordMatcher(b)}function x(b,T){if(T=X({},T||l.value),typeof b=="string"){const h=Mr(n,b,T.path),v=t.resolve({path:h.path},T),y=a.createHref(h.fullPath);return X(h,v,{params:p(v.params),hash:ar(h.hash),redirectedFrom:void 0,href:y})}let O;if("path"in b)O=X({},b,{path:Mr(n,b.path,T.path).path});else{const h=X({},b.params);for(const v in h)h[v]==null&&delete h[v];O=X({},b,{params:d(h)}),T.params=d(T.params)}const j=t.resolve(O,T),V=b.hash||"";j.params=f(p(j.params));const u=Yf(r,X({},b,{hash:Ru(V),path:j.path})),m=a.createHref(u);return X({fullPath:u,hash:V,query:r===Wi?Lu(b.query):b.query||{}},j,{redirectedFrom:void 0,href:m})}function w(b){return typeof b=="string"?Mr(n,b,l.value.path):X({},b)}function L(b,T){if(c!==b)return Yt(8,{from:T,to:b})}function S(b){return ae(b)}function H(b){return S(X(w(b),{replace:!0}))}function J(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let j=typeof O=="function"?O(b):O;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=w(j):{path:j},j.params={}),X({query:b.query,hash:b.hash,params:"path"in j?{}:b.params},j)}}function ae(b,T){const O=c=x(b),j=l.value,V=b.state,u=b.force,m=b.replace===!0,h=J(O);if(h)return ae(X(w(h),{state:typeof h=="object"?X({},V,h.state):V,force:u,replace:m}),T||O);const v=O;v.redirectedFrom=T;let y;return!u&&qf(r,j,O)&&(y=Yt(16,{to:v,from:j}),je(j,j,!0,!1)),(y?Promise.resolve(y):Oe(v,j)).catch(_=>We(_)?We(_,2)?_:rt(_):q(_,v,j)).then(_=>{if(_){if(We(_,2))return ae(X({replace:m},w(_.to),{state:typeof _.to=="object"?X({},V,_.to.state):V,force:u}),T||v)}else _=ht(v,j,!0,m,V);return nt(v,j,_),_})}function Ee(b,T){const O=L(b,T);return O?Promise.reject(O):Promise.resolve()}function ge(b){const T=Rt.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Oe(b,T){let O;const[j,V,u]=Ku(b,T);O=Lr(j.reverse(),"beforeRouteLeave",b,T);for(const h of j)h.leaveGuards.forEach(v=>{O.push(lt(v,b,T))});const m=Ee.bind(null,b,T);return O.push(m),me(O).then(()=>{O=[];for(const h of i.list())O.push(lt(h,b,T));return O.push(m),me(O)}).then(()=>{O=Lr(V,"beforeRouteUpdate",b,T);for(const h of V)h.updateGuards.forEach(v=>{O.push(lt(v,b,T))});return O.push(m),me(O)}).then(()=>{O=[];for(const h of u)if(h.beforeEnter)if(Le(h.beforeEnter))for(const v of h.beforeEnter)O.push(lt(v,b,T));else O.push(lt(h.beforeEnter,b,T));return O.push(m),me(O)}).then(()=>(b.matched.forEach(h=>h.enterCallbacks={}),O=Lr(u,"beforeRouteEnter",b,T),O.push(m),me(O))).then(()=>{O=[];for(const h of o.list())O.push(lt(h,b,T));return O.push(m),me(O)}).catch(h=>We(h,8)?h:Promise.reject(h))}function nt(b,T,O){s.list().forEach(j=>ge(()=>j(b,T,O)))}function ht(b,T,O,j,V){const u=L(b,T);if(u)return u;const m=T===it,h=Mt?history.state:{};O&&(j||m?a.replace(b.fullPath,X({scroll:m&&h&&h.scroll},V)):a.push(b.fullPath,V)),l.value=b,je(b,T,O,m),rt()}let Fe;function Jt(){Fe||(Fe=a.listen((b,T,O)=>{if(!Sn.listening)return;const j=x(b),V=J(j);if(V){ae(X(V,{replace:!0}),j).catch(cn);return}c=j;const u=l.value;Mt&&tu(ji(u.fullPath,O.delta),Er()),Oe(j,u).catch(m=>We(m,12)?m:We(m,2)?(ae(m.to,j).then(h=>{We(h,20)&&!O.delta&&O.type===xn.pop&&a.go(-1,!1)}).catch(cn),Promise.reject()):(O.delta&&a.go(-O.delta,!1),q(m,j,u))).then(m=>{m=m||ht(j,u,!1),m&&(O.delta&&!We(m,8)?a.go(-O.delta,!1):O.type===xn.pop&&We(m,20)&&a.go(-1,!1)),nt(j,u,m)}).catch(cn)}))}let Ct=tn(),ce=tn(),Q;function q(b,T,O){rt(b);const j=ce.list();return j.length?j.forEach(V=>V(b,T,O)):console.error(b),Promise.reject(b)}function Ke(){return Q&&l.value!==it?Promise.resolve():new Promise((b,T)=>{Ct.add([b,T])})}function rt(b){return Q||(Q=!b,Jt(),Ct.list().forEach(([T,O])=>b?O(b):T()),Ct.reset()),b}function je(b,T,O,j){const{scrollBehavior:V}=e;if(!Mt||!V)return Promise.resolve();const u=!O&&nu(ji(b.fullPath,0))||(j||!O)&&history.state&&history.state.scroll||null;return Qo().then(()=>V(b,T,u)).then(m=>m&&eu(m)).catch(m=>q(m,b,T))}const be=b=>a.go(b);let St;const Rt=new Set,Sn={currentRoute:l,listening:!0,addRoute:g,removeRoute:P,hasRoute:F,getRoutes:C,resolve:x,options:e,push:S,replace:H,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:ce.add,isReady:Ke,install(b){const T=this;b.component("RouterLink",$u),b.component("RouterView",Ns),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>kt(l)}),Mt&&!St&&l.value===it&&(St=!0,S(a.location).catch(V=>{}));const O={};for(const V in it)Object.defineProperty(O,V,{get:()=>l.value[V],enumerable:!0});b.provide(za,T),b.provide(Ts,Uo(O)),b.provide(aa,l);const j=b.unmount;Rt.add(b),b.unmount=function(){Rt.delete(b),Rt.size<1&&(c=it,Fe&&Fe(),Fe=null,l.value=it,St=!1,Q=!1),j()}}};function me(b){return b.reduce((T,O)=>T.then(()=>ge(O)),Promise.resolve())}return Sn}function Ku(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Wt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Wt(c,l))||a.push(l))}return[n,r,a]}const Wu={__name:"App",setup(e){return(t,n)=>(vs(),tf(kt(Ns)))}},Yu="modulepreload",qu=function(e){return"/pictionIA/dist/"+e},Qi={},Fr=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=qu(i),i in Qi)return;Qi[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let f=a.length-1;f>=0;f--){const d=a[f];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Yu,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((f,d)=>{c.addEventListener("load",f),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Vu="/pictionIA/dist/assets/logo-91654010.svg",Xu="/pictionIA/dist/assets/exemple-269f5dc8.png";const Gu=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Qu={},Ms=e=>(dc("data-v-2c988a8c"),e=e(),mc(),e),Ju={id:"topZone"},Zu=Ms(()=>wr("img",{src:Vu,id:"logo"},null,-1)),ed=Ms(()=>wr("button",{type:"button",class:"btn btn-info btn-lg mx-auto",id:"jouer"},"JOUER",-1)),td=of('<br data-v-2c988a8c><div id="explication" data-v-2c988a8c><div class="row" data-v-2c988a8c><div class="col-lg-5 col-sm-12" id="explicationTexte" data-v-2c988a8c><div id="explicationTexteContent" data-v-2c988a8c><h2 data-v-2c988a8c>Tente de découvrir les mots derrière l&#39;image que l&#39;IA a générée.</h2><p data-v-2c988a8c>Exemple : ici, la réponse est &quot;rire comme une baleine&quot;</p></div></div><div class="col-lg-6 col-sm-12" data-v-2c988a8c><img src="'+Xu+'" id="illustrationHome" data-v-2c988a8c></div></div></div>',2);function nd(e,t){const n=Nc("RouterLink");return vs(),ef("div",Ju,[Zu,we(n,{to:"/question"},{default:ns(()=>[ed]),_:1}),td])}const rd=Gu(Qu,[["render",nd],["__scopeId","data-v-2c988a8c"]]),ad=Hu({history:ou("/pictionIA/dist"),routes:[{path:"/",name:"home",component:rd},{path:"/question",name:"question",component:()=>Fr(()=>import("./QuestionView-274f8ce0.js"),["assets/QuestionView-274f8ce0.js","assets/state-eb42c072.js","assets/QuestionView-4b6b47d5.css"])},{path:"/answer",name:"answer",component:()=>Fr(()=>import("./AnswerView-4519ed32.js"),["assets/AnswerView-4519ed32.js","assets/state-eb42c072.js","assets/AnswerView-9d2ae677.css"])},{path:"/result",name:"result",component:()=>Fr(()=>import("./ResultView-1bb1998d.js"),["assets/ResultView-1bb1998d.js","assets/state-eb42c072.js","assets/ResultView-5ef000d7.css"])},{path:"/:pathMatch(.*)*",redirect:"/"}]});function Ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ji(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ji(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ir(e){"@babel/helpers - typeof";return ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ir(e)}function id(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Zi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function od(e,t,n){return t&&Zi(e.prototype,t),n&&Zi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ba(e,t){return ld(e)||fd(e,t)||Ls(e,t)||dd()}function On(e){return sd(e)||cd(e)||Ls(e)||ud()}function sd(e){if(Array.isArray(e))return ia(e)}function ld(e){if(Array.isArray(e))return e}function cd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ls(e,t){if(e){if(typeof e=="string")return ia(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ia(e,t)}}function ia(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ud(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var eo=function(){},Ua={},Fs={},js=null,Ds={mark:eo,measure:eo};try{typeof window<"u"&&(Ua=window),typeof document<"u"&&(Fs=document),typeof MutationObserver<"u"&&(js=MutationObserver),typeof performance<"u"&&(Ds=performance)}catch{}var md=Ua.navigator||{},to=md.userAgent,no=to===void 0?"":to,dt=Ua,ne=Fs,ro=js,Fn=Ds;dt.document;var tt=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",$s=~no.indexOf("MSIE")||~no.indexOf("Trident/"),jn,Dn,$n,zn,Bn,Qe="___FONT_AWESOME___",oa=16,zs="fa",Bs="svg-inline--fa",Ot="data-fa-i2svg",sa="data-fa-pseudo-element",pd="data-fa-pseudo-element-pending",Ha="data-prefix",Ka="data-icon",ao="fontawesome-i2svg",hd="async",gd=["HTML","HEAD","STYLE","SCRIPT"],Us=function(){try{return!0}catch{return!1}}(),te="classic",ie="sharp",Wa=[te,ie];function Pn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[te]}})}var wn=Pn((jn={},le(jn,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),le(jn,ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),jn)),_n=Pn((Dn={},le(Dn,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(Dn,ie,{solid:"fass",regular:"fasr",light:"fasl"}),Dn)),En=Pn(($n={},le($n,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le($n,ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),$n)),vd=Pn((zn={},le(zn,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(zn,ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),zn)),bd=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Hs="fa-layers-text",yd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,xd=Pn((Bn={},le(Bn,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(Bn,ie,{900:"fass",400:"fasr",300:"fasl"}),Bn)),Ks=[1,2,3,4,5,6,7,8,9,10],wd=Ks.concat([11,12,13,14,15,16,17,18,19,20]),_d=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},kn=new Set;Object.keys(_n[te]).map(kn.add.bind(kn));Object.keys(_n[ie]).map(kn.add.bind(kn));var Ed=[].concat(Wa,On(kn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wt.GROUP,wt.SWAP_OPACITY,wt.PRIMARY,wt.SECONDARY]).concat(Ks.map(function(e){return"".concat(e,"x")})).concat(wd.map(function(e){return"w-".concat(e)})),un=dt.FontAwesomeConfig||{};function kd(e){var t=ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ad(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ne&&typeof ne.querySelector=="function"){var Od=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Od.forEach(function(e){var t=Ba(e,2),n=t[0],r=t[1],a=Ad(kd(n));a!=null&&(un[r]=a)})}var Ws={styleDefault:"solid",familyDefault:"classic",cssPrefix:zs,replacementClass:Bs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};un.familyPrefix&&(un.cssPrefix=un.familyPrefix);var qt=I(I({},Ws),un);qt.autoReplaceSvg||(qt.observeMutations=!1);var M={};Object.keys(Ws).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){qt[e]=n,dn.forEach(function(r){return r(M)})},get:function(){return qt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){qt.cssPrefix=t,dn.forEach(function(n){return n(M)})},get:function(){return qt.cssPrefix}});dt.FontAwesomeConfig=M;var dn=[];function Pd(e){return dn.push(e),function(){dn.splice(dn.indexOf(e),1)}}var ot=oa,Ue={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Cd(e){if(!(!e||!tt)){var t=ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ne.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ne.head.insertBefore(t,r),e}}var Sd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function An(){for(var e=12,t="";e-- >0;)t+=Sd[Math.random()*62|0];return t}function Qt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ya(e){return e.classList?Qt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ys(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Rd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ys(e[n]),'" ')},"").trim()}function kr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function qa(e){return e.size!==Ue.size||e.x!==Ue.x||e.y!==Ue.y||e.rotate!==Ue.rotate||e.flipX||e.flipY}function Id(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Td(e){var t=e.transform,n=e.width,r=n===void 0?oa:n,a=e.height,i=a===void 0?oa:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&$s?l+="translate(".concat(t.x/ot-r/2,"em, ").concat(t.y/ot-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ot,"em), calc(-50% + ").concat(t.y/ot,"em)) "):l+="translate(".concat(t.x/ot,"em, ").concat(t.y/ot,"em) "),l+="scale(".concat(t.size/ot*(t.flipX?-1:1),", ").concat(t.size/ot*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Nd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function qs(){var e=zs,t=Bs,n=M.cssPrefix,r=M.replacementClass,a=Nd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var io=!1;function jr(){M.autoAddCss&&!io&&(Cd(qs()),io=!0)}var Md={mixout:function(){return{dom:{css:qs,insertCss:jr}}},hooks:function(){return{beforeDOMElementCreation:function(){jr()},beforeI2svg:function(){jr()}}}},Je=dt||{};Je[Qe]||(Je[Qe]={});Je[Qe].styles||(Je[Qe].styles={});Je[Qe].hooks||(Je[Qe].hooks={});Je[Qe].shims||(Je[Qe].shims=[]);var Te=Je[Qe],Vs=[],Ld=function e(){ne.removeEventListener("DOMContentLoaded",e),or=1,Vs.map(function(t){return t()})},or=!1;tt&&(or=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),or||ne.addEventListener("DOMContentLoaded",Ld));function Fd(e){tt&&(or?setTimeout(e,0):Vs.push(e))}function Cn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ys(e):"<".concat(t," ").concat(Rd(r),">").concat(i.map(Cn).join(""),"</").concat(t,">")}function oo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var jd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Dr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?jd(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function Dd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function la(e){var t=Dd(e);return t.length===1?t[0].toString(16):null}function $d(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function so(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ca(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=so(t);typeof Te.hooks.addPack=="function"&&!a?Te.hooks.addPack(e,so(t)):Te.styles[e]=I(I({},Te.styles[e]||{}),i),e==="fas"&&ca("fa",t)}var Un,Hn,Kn,Lt=Te.styles,zd=Te.shims,Bd=(Un={},le(Un,te,Object.values(En[te])),le(Un,ie,Object.values(En[ie])),Un),Va=null,Xs={},Gs={},Qs={},Js={},Zs={},Ud=(Hn={},le(Hn,te,Object.keys(wn[te])),le(Hn,ie,Object.keys(wn[ie])),Hn);function Hd(e){return~Ed.indexOf(e)}function Kd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Hd(a)?a:null}var el=function(){var t=function(i){return Dr(Lt,function(o,s,l){return o[l]=Dr(s,i,{}),o},{})};Xs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Gs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Zs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Lt||M.autoFetchSvg,r=Dr(zd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Qs=r.names,Js=r.unicodes,Va=Ar(M.styleDefault,{family:M.familyDefault})};Pd(function(e){Va=Ar(e.styleDefault,{family:M.familyDefault})});el();function Xa(e,t){return(Xs[e]||{})[t]}function Wd(e,t){return(Gs[e]||{})[t]}function _t(e,t){return(Zs[e]||{})[t]}function tl(e){return Qs[e]||{prefix:null,iconName:null}}function Yd(e){var t=Js[e],n=Xa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function mt(){return Va}var Ga=function(){return{prefix:null,iconName:null,rest:[]}};function Ar(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?te:n,a=wn[r][e],i=_n[r][e]||_n[r][a],o=e in Te.styles?e:null;return i||o||null}var lo=(Kn={},le(Kn,te,Object.keys(En[te])),le(Kn,ie,Object.keys(En[ie])),Kn);function Or(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},le(t,te,"".concat(M.cssPrefix,"-").concat(te)),le(t,ie,"".concat(M.cssPrefix,"-").concat(ie)),t),o=null,s=te;(e.includes(i[te])||e.some(function(c){return lo[te].includes(c)}))&&(s=te),(e.includes(i[ie])||e.some(function(c){return lo[ie].includes(c)}))&&(s=ie);var l=e.reduce(function(c,f){var d=Kd(M.cssPrefix,f);if(Lt[f]?(f=Bd[s].includes(f)?vd[s][f]:f,o=f,c.prefix=f):Ud[s].indexOf(f)>-1?(o=f,c.prefix=Ar(f,{family:s})):d?c.iconName=d:f!==M.replacementClass&&f!==i[te]&&f!==i[ie]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var p=o==="fa"?tl(c.iconName):{},g=_t(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Lt.far&&Lt.fas&&!M.autoFetchSvg&&(c.prefix="fas")}return c},Ga());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ie&&(Lt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=_t(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=mt()||"fas"),l}var qd=function(){function e(){id(this,e),this.definitions={}}return od(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),ca(s,o[s]);var l=En[te][s];l&&ca(l,o[s]),el()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),co=[],Ft={},Bt={},Vd=Object.keys(Bt);function Xd(e,t){var n=t.mixoutsTo;return co=e,Ft={},Object.keys(Bt).forEach(function(r){Vd.indexOf(r)===-1&&delete Bt[r]}),co.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),ir(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ft[o]||(Ft[o]=[]),Ft[o].push(i[o])})}r.provides&&r.provides(Bt)}),n}function fa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ft[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ft[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Bt[e]?Bt[e].apply(null,t):void 0}function ua(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||mt();if(t)return t=_t(n,t)||t,oo(nl.definitions,n,t)||oo(Te.styles,n,t)}var nl=new qd,Gd=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Pt("noAuto")},Qd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tt?(Pt("beforeI2svg",t),Ze("pseudoElements2svg",t),Ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Fd(function(){Zd({autoReplaceSvgRoot:n}),Pt("watch",t)})}},Jd={icon:function(t){if(t===null)return null;if(ir(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:_t(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ar(t[0]);return{prefix:r,iconName:_t(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(bd))){var a=Or(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||mt(),iconName:_t(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=mt();return{prefix:i,iconName:_t(i,t)||t}}}},Ae={noAuto:Gd,config:M,dom:Qd,parse:Jd,library:nl,findIconDefinition:ua,toHtml:Cn},Zd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(Te.styles).length>0||M.autoFetchSvg)&&tt&&M.autoReplaceSvg&&Ae.dom.i2svg({node:r})};function Pr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Cn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(tt){var r=ne.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function em(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(qa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=kr(I(I({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function tm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function Qa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,P=r.found?r:n,C=P.width,F=P.height,x=a==="fak",w=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(ge){return d.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(d.classes).join(" "),L={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(F)})},S=x&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/F*16*.0625,"em")}:{};g&&(L.attributes[Ot]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(f||An())},children:[l]}),delete L.attributes.title);var H=I(I({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:I(I({},S),d.styles)}),J=r.found&&n.found?Ze("generateAbstractMask",H)||{children:[],attributes:{}}:Ze("generateAbstractIcon",H)||{children:[],attributes:{}},ae=J.children,Ee=J.attributes;return H.children=ae,H.attributes=Ee,s?tm(H):em(H)}function fo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Ot]="");var f=I({},o.styles);qa(a)&&(f.transform=Td({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=kr(f);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function nm(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=kr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var $r=Te.styles;function da(e){var t=e[0],n=e[1],r=e.slice(4),a=Ba(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(wt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(wt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(wt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var rm={found:!1,width:512,height:512};function am(e,t){!Us&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ma(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=mt()),new Promise(function(r,a){if(Ze("missingIconAbstract"),n==="fa"){var i=tl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&$r[t]&&$r[t][e]){var o=$r[t][e];return r(da(o))}am(e,t),r(I(I({},rm),{},{icon:M.showMissingIcons&&e?Ze("missingIconAbstract")||{}:{}}))})}var uo=function(){},pa=M.measurePerformance&&Fn&&Fn.mark&&Fn.measure?Fn:{mark:uo,measure:uo},an='FA "6.4.0"',im=function(t){return pa.mark("".concat(an," ").concat(t," begins")),function(){return rl(t)}},rl=function(t){pa.mark("".concat(an," ").concat(t," ends")),pa.measure("".concat(an," ").concat(t),"".concat(an," ").concat(t," begins"),"".concat(an," ").concat(t," ends"))},Ja={begin:im,end:rl},Qn=function(){};function mo(e){var t=e.getAttribute?e.getAttribute(Ot):null;return typeof t=="string"}function om(e){var t=e.getAttribute?e.getAttribute(Ha):null,n=e.getAttribute?e.getAttribute(Ka):null;return t&&n}function sm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function lm(){if(M.autoReplaceSvg===!0)return Jn.replace;var e=Jn[M.autoReplaceSvg];return e||Jn.replace}function cm(e){return ne.createElementNS("http://www.w3.org/2000/svg",e)}function fm(e){return ne.createElement(e)}function al(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?cm:fm:n;if(typeof e=="string")return ne.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(al(o,{ceFn:r}))}),a}function um(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Jn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(al(a),n)}),n.getAttribute(Ot)===null&&M.keepOriginalSource){var r=ne.createComment(um(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ya(n).indexOf(M.replacementClass))return Jn.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Cn(s)}).join(`
`);n.setAttribute(Ot,""),n.innerHTML=o}};function po(e){e()}function il(e,t){var n=typeof t=="function"?t:Qn;if(e.length===0)n();else{var r=po;M.mutateApproach===hd&&(r=dt.requestAnimationFrame||po),r(function(){var a=lm(),i=Ja.begin("mutate");e.map(a),i(),n()})}}var Za=!1;function ol(){Za=!0}function ha(){Za=!1}var sr=null;function ho(e){if(ro&&M.observeMutations){var t=e.treeCallback,n=t===void 0?Qn:t,r=e.nodeCallback,a=r===void 0?Qn:r,i=e.pseudoElementsCallback,o=i===void 0?Qn:i,s=e.observeMutationsRoot,l=s===void 0?ne:s;sr=new ro(function(c){if(!Za){var f=mt();Qt(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!mo(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&mo(d.target)&&~_d.indexOf(d.attributeName))if(d.attributeName==="class"&&om(d.target)){var p=Or(Ya(d.target)),g=p.prefix,P=p.iconName;d.target.setAttribute(Ha,g||f),P&&d.target.setAttribute(Ka,P)}else sm(d.target)&&a(d.target)})}}),tt&&sr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function dm(){sr&&sr.disconnect()}function mm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function pm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Or(Ya(e));return a.prefix||(a.prefix=mt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Wd(a.prefix,e.innerText)||Xa(a.prefix,la(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function hm(e){var t=Qt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||An()):(t["aria-hidden"]="true",t.focusable="false")),t}function gm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ue,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=pm(e),r=n.iconName,a=n.prefix,i=n.rest,o=hm(e),s=fa("parseNodeAttributes",{},e),l=t.styleParser?mm(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ue,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var vm=Te.styles;function sl(e){var t=M.autoReplaceSvg==="nest"?go(e,{styleParser:!1}):go(e);return~t.extra.classes.indexOf(Hs)?Ze("generateLayersText",e,t):Ze("generateSvgReplacementMutation",e,t)}var pt=new Set;Wa.map(function(e){pt.add("fa-".concat(e))});Object.keys(wn[te]).map(pt.add.bind(pt));Object.keys(wn[ie]).map(pt.add.bind(pt));pt=On(pt);function vo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tt)return Promise.resolve();var n=ne.documentElement.classList,r=function(d){return n.add("".concat(ao,"-").concat(d))},a=function(d){return n.remove("".concat(ao,"-").concat(d))},i=M.autoFetchSvg?pt:Wa.map(function(f){return"fa-".concat(f)}).concat(Object.keys(vm));i.includes("fa")||i.push("fa");var o=[".".concat(Hs,":not([").concat(Ot,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Ot,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Qt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ja.begin("onTree"),c=s.reduce(function(f,d){try{var p=sl(d);p&&f.push(p)}catch(g){Us||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(p){il(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),d(p)})})}function bm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sl(e).then(function(n){n&&il([n],t)})}function ym(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ua(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ua(a||{})),e(r,I(I({},n),{},{mask:a}))}}var xm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ue:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,p=d===void 0?null:d,g=n.titleId,P=g===void 0?null:g,C=n.classes,F=C===void 0?[]:C,x=n.attributes,w=x===void 0?{}:x,L=n.styles,S=L===void 0?{}:L;if(t){var H=t.prefix,J=t.iconName,ae=t.icon;return Pr(I({type:"icon"},t),function(){return Pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(P||An()):(w["aria-hidden"]="true",w.focusable="false")),Qa({icons:{main:da(ae),mask:l?da(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:J,transform:I(I({},Ue),a),symbol:o,title:p,maskId:f,titleId:P,extra:{attributes:w,styles:S,classes:F}})})}},wm={mixout:function(){return{icon:ym(xm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vo,n.nodeCallback=bm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ne:r,i=n.callback,o=i===void 0?function(){}:i;return vo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,P){Promise.all([ma(a,s),f.iconName?ma(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var F=Ba(C,2),x=F[0],w=F[1];g([n,Qa({icons:{main:x,mask:w},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=kr(s);l.length>0&&(a.style=l);var c;return qa(o)&&(c=Ze("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},_m={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Pr({type:"layer"},function(){Pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(On(i)).join(" ")},children:o}]})}}}},Em={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return Pr({type:"counter",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),nm({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(On(s))}})})}}}},km={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ue:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,p=r.styles,g=p===void 0?{}:p;return Pr({type:"text",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),fo({content:n,transform:I(I({},Ue),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(On(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if($s){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,fo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Am=new RegExp('"',"ug"),bo=[1105920,1112319];function Om(e){var t=e.replace(Am,""),n=$d(t,0),r=n>=bo[0]&&n<=bo[1],a=t.length===2?t[0]===t[1]:!1;return{value:la(a?t[0]:t),isSecondary:r||a}}function yo(e,t){var n="".concat(pd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Qt(e.children),o=i.filter(function(ae){return ae.getAttribute(sa)===t})[0],s=dt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(yd),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ie:te,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?_n[p][l[2].toLowerCase()]:xd[p][c],P=Om(d),C=P.value,F=P.isSecondary,x=l[0].startsWith("FontAwesome"),w=Xa(g,C),L=w;if(x){var S=Yd(C);S.iconName&&S.prefix&&(w=S.iconName,g=S.prefix)}if(w&&!F&&(!o||o.getAttribute(Ha)!==g||o.getAttribute(Ka)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var H=gm(),J=H.extra;J.attributes[sa]=t,ma(w,g).then(function(ae){var Ee=Qa(I(I({},H),{},{icons:{main:ae,mask:Ga()},prefix:g,iconName:L,extra:J,watchable:!0})),ge=ne.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=Ee.map(function(Oe){return Cn(Oe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Pm(e){return Promise.all([yo(e,"::before"),yo(e,"::after")])}function Cm(e){return e.parentNode!==document.head&&!~gd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(sa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function xo(e){if(tt)return new Promise(function(t,n){var r=Qt(e.querySelectorAll("*")).filter(Cm).map(Pm),a=Ja.begin("searchPseudoElements");ol(),Promise.all(r).then(function(){a(),ha(),t()}).catch(function(){a(),ha(),n()})})}var Sm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=xo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ne:r;M.searchPseudoElements&&xo(a)}}},wo=!1,Rm={mixout:function(){return{dom:{unwatch:function(){ol(),wo=!0}}}},hooks:function(){return{bootstrap:function(){ho(fa("mutationObserverCallbacks",{}))},noAuto:function(){dm()},watch:function(n){var r=n.observeMutationsRoot;wo?ha():ho(fa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_o=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Im={mixout:function(){return{parse:{transform:function(n){return _o(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=_o(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},zr={x:0,y:0,width:"100%",height:"100%"};function Eo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Tm(e){return e.tag==="g"?e.children:[e]}var Nm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Or(a.split(" ").map(function(o){return o.trim()})):Ga();return i.prefix||(i.prefix=mt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,p=o.icon,g=Id({transform:l,containerWidth:d,iconWidth:c}),P={tag:"rect",attributes:I(I({},zr),{},{fill:"white"})},C=f.children?{children:f.children.map(Eo)}:{},F={tag:"g",attributes:I({},g.inner),children:[Eo(I({tag:f.tag,attributes:I(I({},f.attributes),g.path)},C))]},x={tag:"g",attributes:I({},g.outer),children:[F]},w="mask-".concat(s||An()),L="clip-".concat(s||An()),S={tag:"mask",attributes:I(I({},zr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,x]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Tm(p)},S]};return r.push(H,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(w,")")},zr)}),{children:r,attributes:a}}}},Mm={provides:function(t){var n=!1;dt.matchMedia&&(n=dt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Lm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Fm=[Md,wm,_m,Em,km,Sm,Rm,Im,Nm,Mm,Lm];Xd(Fm,{mixoutsTo:Ae});Ae.noAuto;Ae.config;var ll=Ae.library;Ae.dom;var ga=Ae.parse;Ae.findIconDefinition;Ae.toHtml;var jm=Ae.icon;Ae.layer;Ae.text;Ae.counter;function ko(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ko(Object(n),!0).forEach(function(r){ye(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ko(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lr(e){"@babel/helpers - typeof";return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lr(e)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function $m(e,t){if(e==null)return{};var n=Dm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var zm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cl={exports:{}};(function(e){(function(t){var n=function(x,w,L){if(!c(w)||d(w)||p(w)||g(w)||l(w))return w;var S,H=0,J=0;if(f(w))for(S=[],J=w.length;H<J;H++)S.push(n(x,w[H],L));else{S={};for(var ae in w)Object.prototype.hasOwnProperty.call(w,ae)&&(S[x(ae,L)]=n(x,w[ae],L))}return S},r=function(x,w){w=w||{};var L=w.separator||"_",S=w.split||/(?=[A-Z])/;return x.split(S).join(L)},a=function(x){return P(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(w,L){return L?L.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var w=a(x);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(x,w){return r(x,w).toLowerCase()},s=Object.prototype.toString,l=function(x){return typeof x=="function"},c=function(x){return x===Object(x)},f=function(x){return s.call(x)=="[object Array]"},d=function(x){return s.call(x)=="[object Date]"},p=function(x){return s.call(x)=="[object RegExp]"},g=function(x){return s.call(x)=="[object Boolean]"},P=function(x){return x=x-0,x===x},C=function(x,w){var L=w&&"process"in w?w.process:w;return typeof L!="function"?x:function(S,H){return L(S,x,H)}},F={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,w){return n(C(a,w),x)},decamelizeKeys:function(x,w){return n(C(o,w),x,w)},pascalizeKeys:function(x,w){return n(C(i,w),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(zm)})(cl);var Bm=cl.exports,Um=["class","style"];function Hm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Bm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Km(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function fl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return fl(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=Km(f);break;case"style":l.style=Hm(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=$m(n,Um);return Da(e.tag,Ve(Ve(Ve({},t),{},{class:a.class,style:Ve(Ve({},a.style),o)},a.attrs),s),r)}var ul=!1;try{ul=!0}catch{}function Wm(){if(!ul&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Br(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ye({},e,t):{}}function Ym(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ye(t,"fa-".concat(e.size),e.size!==null),ye(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ye(t,"fa-pull-".concat(e.pull),e.pull!==null),ye(t,"fa-swap-opacity",e.swapOpacity),ye(t,"fa-bounce",e.bounce),ye(t,"fa-shake",e.shake),ye(t,"fa-beat",e.beat),ye(t,"fa-fade",e.fade),ye(t,"fa-beat-fade",e.beatFade),ye(t,"fa-flash",e.flash),ye(t,"fa-spin-pulse",e.spinPulse),ye(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ao(e){if(e&&lr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ga.icon)return ga.icon(e);if(e===null)return null;if(lr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var qm=Na({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ue(function(){return Ao(t.icon)}),i=ue(function(){return Br("classes",Ym(t))}),o=ue(function(){return Br("transform",typeof t.transform=="string"?ga.transform(t.transform):t.transform)}),s=ue(function(){return Br("mask",Ao(t.mask))}),l=ue(function(){return jm(a.value,Ve(Ve(Ve(Ve({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});on(l,function(f){if(!f)return Wm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ue(function(){return l.value?fl(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Vm={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Xm={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};ll.add(Vm);ll.add(Xm);const dl=Bf(Wu);dl.use(ad).component("font-awesome-icon",qm);dl.mount("#app");export{qe as F,Gu as _,wr as a,Qm as b,ef as c,mc as d,Vu as e,Jm as f,we as g,ns as h,af as i,pr as j,Ea as n,vs as o,dc as p,Nc as r,Gm as t,Zm as v,ep as w};
