(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Gc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Vy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$y=Gc(Vy);function sd(t){return!!t||t===""}function Qc(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=$e(s)?qy(s):Qc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if($e(t))return t;if(we(t))return t}}const By=/;(?![^(]*\))/g,jy=/:(.+)/;function qy(t){const e={};return t.split(By).forEach(n=>{if(n){const s=n.split(jy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Zr(t){let e="";if($e(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Zr(t[n]);s&&(e+=s+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Hy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=es(t[s],e[s]);return n}function es(t,e){if(t===e)return!0;let n=Ul(t),s=Ul(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Dr(t),s=Dr(e),n||s)return t===e;if(n=H(t),s=H(e),n||s)return n&&s?Hy(t,e):!1;if(n=we(t),s=we(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!es(t[o],e[o]))return!1}}return String(t)===String(e)}function Yc(t,e){return t.findIndex(n=>es(n,e))}const Ky=t=>$e(t)?t:t==null?"":H(t)||we(t)&&(t.toString===od||!Y(t.toString))?JSON.stringify(t,rd,2):String(t),rd=(t,e)=>e&&e.__v_isRef?rd(t,e.value):Is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Ws(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!H(e)&&!ad(e)?String(e):e,pe={},bs=[],bt=()=>{},zy=()=>!1,Wy=/^on[^a-z]/,Oo=t=>Wy.test(t),Xc=t=>t.startsWith("onUpdate:"),st=Object.assign,Jc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gy=Object.prototype.hasOwnProperty,ie=(t,e)=>Gy.call(t,e),H=Array.isArray,Is=t=>ei(t)==="[object Map]",Ws=t=>ei(t)==="[object Set]",Ul=t=>ei(t)==="[object Date]",Y=t=>typeof t=="function",$e=t=>typeof t=="string",Dr=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",id=t=>we(t)&&Y(t.then)&&Y(t.catch),od=Object.prototype.toString,ei=t=>od.call(t),Qy=t=>ei(t).slice(8,-1),ad=t=>ei(t)==="[object Object]",Zc=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bi=Gc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Yy=/-(\w)/g,Vt=xo(t=>t.replace(Yy,(e,n)=>n?n.toUpperCase():"")),Xy=/\B([A-Z])/g,Gs=xo(t=>t.replace(Xy,"-$1").toLowerCase()),Po=xo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Aa=xo(t=>t?`on${Po(t)}`:""),Nr=(t,e)=>!Object.is(t,e),ji=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},eo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},to=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Fl;const Jy=()=>Fl||(Fl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Rt;class cd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Rt&&(this.parent=Rt,this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){Rt=this}off(){Rt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function ud(t){return new cd(t)}function Zy(t,e=Rt){e&&e.active&&e.effects.push(t)}const eu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ld=t=>(t.w&An)>0,hd=t=>(t.n&An)>0,ev=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=An},tv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ld(r)&&!hd(r)?r.delete(t):e[n++]=r,r.w&=~An,r.n&=~An}e.length=n}},Ja=new WeakMap;let hr=0,An=1;const Za=30;let wt;const Gn=Symbol(""),ec=Symbol("");class tu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Zy(this,s)}run(){if(!this.active)return this.fn();let e=wt,n=wn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wt,wt=this,wn=!0,An=1<<++hr,hr<=Za?ev(this):Vl(this),this.fn()}finally{hr<=Za&&tv(this),An=1<<--hr,wt=this.parent,wn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(Vl(this),this.onStop&&this.onStop(),this.active=!1)}}function Vl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let wn=!0;const fd=[];function Qs(){fd.push(wn),wn=!1}function Ys(){const t=fd.pop();wn=t===void 0?!0:t}function ft(t,e,n){if(wn&&wt){let s=Ja.get(t);s||Ja.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=eu()),dd(r)}}function dd(t,e){let n=!1;hr<=Za?hd(t)||(t.n|=An,n=!ld(t)):n=!t.has(wt),n&&(t.add(wt),wt.deps.push(t))}function en(t,e,n,s,r,i){const o=Ja.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t))o.forEach((c,u)=>{(u==="length"||u>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Zc(n)&&a.push(o.get("length")):(a.push(o.get(Gn)),Is(t)&&a.push(o.get(ec)));break;case"delete":H(t)||(a.push(o.get(Gn)),Is(t)&&a.push(o.get(ec)));break;case"set":Is(t)&&a.push(o.get(Gn));break}if(a.length===1)a[0]&&tc(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);tc(eu(c))}}function tc(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&$l(s);for(const s of n)s.computed||$l(s)}function $l(t,e){(t!==wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const nv=Gc("__proto__,__v_isRef,__isVue"),pd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dr)),sv=nu(),rv=nu(!1,!0),iv=nu(!0),Bl=ov();function ov(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let i=0,o=this.length;i<o;i++)ft(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Qs();const s=ae(this)[e].apply(this,n);return Ys(),s}}),t}function nu(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?bv:_d:e?vd:yd).get(s))return s;const o=H(s);if(!t&&o&&ie(Bl,r))return Reflect.get(Bl,r,i);const a=Reflect.get(s,r,i);return(Dr(r)?pd.has(r):nv(r))||(t||ft(s,"get",r),e)?a:Ie(a)?o&&Zc(r)?a:a.value:we(a)?t?wd(a):Xs(a):a}}const av=gd(),cv=gd(!0);function gd(t=!1){return function(n,s,r,i){let o=n[s];if(Ds(o)&&Ie(o)&&!Ie(r))return!1;if(!t&&(!no(r)&&!Ds(r)&&(o=ae(o),r=ae(r)),!H(n)&&Ie(o)&&!Ie(r)))return o.value=r,!0;const a=H(n)&&Zc(s)?Number(s)<n.length:ie(n,s),c=Reflect.set(n,s,r,i);return n===ae(i)&&(a?Nr(r,o)&&en(n,"set",s,r):en(n,"add",s,r)),c}}function uv(t,e){const n=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&en(t,"delete",e,void 0),s}function lv(t,e){const n=Reflect.has(t,e);return(!Dr(e)||!pd.has(e))&&ft(t,"has",e),n}function hv(t){return ft(t,"iterate",H(t)?"length":Gn),Reflect.ownKeys(t)}const md={get:sv,set:av,deleteProperty:uv,has:lv,ownKeys:hv},fv={get:iv,set(t,e){return!0},deleteProperty(t,e){return!0}},dv=st({},md,{get:rv,set:cv}),su=t=>t,Mo=t=>Reflect.getPrototypeOf(t);function Ti(t,e,n=!1,s=!1){t=t.__v_raw;const r=ae(t),i=ae(e);n||(e!==i&&ft(r,"get",e),ft(r,"get",i));const{has:o}=Mo(r),a=s?su:n?ou:Or;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Si(t,e=!1){const n=this.__v_raw,s=ae(n),r=ae(t);return e||(t!==r&&ft(s,"has",t),ft(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ai(t,e=!1){return t=t.__v_raw,!e&&ft(ae(t),"iterate",Gn),Reflect.get(t,"size",t)}function jl(t){t=ae(t);const e=ae(this);return Mo(e).has.call(e,t)||(e.add(t),en(e,"add",t,t)),this}function ql(t,e){e=ae(e);const n=ae(this),{has:s,get:r}=Mo(n);let i=s.call(n,t);i||(t=ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Nr(e,o)&&en(n,"set",t,e):en(n,"add",t,e),this}function Hl(t){const e=ae(this),{has:n,get:s}=Mo(e);let r=n.call(e,t);r||(t=ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&en(e,"delete",t,void 0),i}function Kl(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&en(t,"clear",void 0,void 0),n}function Ci(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ae(o),c=e?su:t?ou:Or;return!t&&ft(a,"iterate",Gn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function ki(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=Is(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?su:e?ou:Or;return!e&&ft(i,"iterate",c?ec:Gn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function un(t){return function(...e){return t==="delete"?!1:this}}function pv(){const t={get(i){return Ti(this,i)},get size(){return Ai(this)},has:Si,add:jl,set:ql,delete:Hl,clear:Kl,forEach:Ci(!1,!1)},e={get(i){return Ti(this,i,!1,!0)},get size(){return Ai(this)},has:Si,add:jl,set:ql,delete:Hl,clear:Kl,forEach:Ci(!1,!0)},n={get(i){return Ti(this,i,!0)},get size(){return Ai(this,!0)},has(i){return Si.call(this,i,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Ci(!0,!1)},s={get(i){return Ti(this,i,!0,!0)},get size(){return Ai(this,!0)},has(i){return Si.call(this,i,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Ci(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ki(i,!1,!1),n[i]=ki(i,!0,!1),e[i]=ki(i,!1,!0),s[i]=ki(i,!0,!0)}),[t,n,e,s]}const[gv,mv,yv,vv]=pv();function ru(t,e){const n=e?t?vv:yv:t?mv:gv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ie(n,r)&&r in s?n:s,r,i)}const _v={get:ru(!1,!1)},wv={get:ru(!1,!0)},Ev={get:ru(!0,!1)},yd=new WeakMap,vd=new WeakMap,_d=new WeakMap,bv=new WeakMap;function Iv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tv(t){return t.__v_skip||!Object.isExtensible(t)?0:Iv(Qy(t))}function Xs(t){return Ds(t)?t:iu(t,!1,md,_v,yd)}function Sv(t){return iu(t,!1,dv,wv,vd)}function wd(t){return iu(t,!0,fv,Ev,_d)}function iu(t,e,n,s,r){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Tv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Yt(t){return Ds(t)?Yt(t.__v_raw):!!(t&&t.__v_isReactive)}function Ds(t){return!!(t&&t.__v_isReadonly)}function no(t){return!!(t&&t.__v_isShallow)}function Ed(t){return Yt(t)||Ds(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function Ns(t){return eo(t,"__v_skip",!0),t}const Or=t=>we(t)?Xs(t):t,ou=t=>we(t)?wd(t):t;function bd(t){wn&&wt&&(t=ae(t),dd(t.dep||(t.dep=eu())))}function Id(t,e){t=ae(t),t.dep&&tc(t.dep)}function Ie(t){return!!(t&&t.__v_isRef===!0)}function Xt(t){return Td(t,!1)}function Av(t){return Td(t,!0)}function Td(t,e){return Ie(t)?t:new Cv(t,e)}class Cv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:Or(e)}get value(){return bd(this),this._value}set value(e){const n=this.__v_isShallow||no(e)||Ds(e);e=n?e:ae(e),Nr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Or(e),Id(this))}}function En(t){return Ie(t)?t.value:t}const kv={get:(t,e,n)=>En(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ie(r)&&!Ie(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Sd(t){return Yt(t)?t:new Proxy(t,kv)}function Ad(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=Cd(t,n);return e}class Rv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Cd(t,e,n){const s=t[e];return Ie(s)?s:new Rv(t,e,n)}var kd;class Dv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[kd]=!1,this._dirty=!0,this.effect=new tu(e,()=>{this._dirty||(this._dirty=!0,Id(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ae(this);return bd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}kd="__v_isReadonly";function Nv(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=bt):(s=t.get,r=t.set),new Dv(s,r,i||!r,n)}function bn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Lo(i,e,n)}return r}function It(t,e,n,s){if(Y(t)){const i=bn(t,e,n,s);return i&&id(i)&&i.catch(o=>{Lo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(It(t[i],e,n,s));return r}function Lo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){bn(c,null,10,[t,o,a]);return}}Ov(t,n,r,s)}function Ov(t,e,n,s=!0){console.error(t)}let xr=!1,nc=!1;const Ge=[];let Nt=0;const Ts=[];let qt=null,Bn=0;const Rd=Promise.resolve();let au=null;function cu(t){const e=au||Rd;return t?e.then(this?t.bind(this):t):e}function xv(t){let e=Nt+1,n=Ge.length;for(;e<n;){const s=e+n>>>1;Pr(Ge[s])<t?e=s+1:n=s}return e}function uu(t){(!Ge.length||!Ge.includes(t,xr&&t.allowRecurse?Nt+1:Nt))&&(t.id==null?Ge.push(t):Ge.splice(xv(t.id),0,t),Dd())}function Dd(){!xr&&!nc&&(nc=!0,au=Rd.then(Od))}function Pv(t){const e=Ge.indexOf(t);e>Nt&&Ge.splice(e,1)}function Mv(t){H(t)?Ts.push(...t):(!qt||!qt.includes(t,t.allowRecurse?Bn+1:Bn))&&Ts.push(t),Dd()}function zl(t,e=xr?Nt+1:0){for(;e<Ge.length;e++){const n=Ge[e];n&&n.pre&&(Ge.splice(e,1),e--,n())}}function Nd(t){if(Ts.length){const e=[...new Set(Ts)];if(Ts.length=0,qt){qt.push(...e);return}for(qt=e,qt.sort((n,s)=>Pr(n)-Pr(s)),Bn=0;Bn<qt.length;Bn++)qt[Bn]();qt=null,Bn=0}}const Pr=t=>t.id==null?1/0:t.id,Lv=(t,e)=>{const n=Pr(t)-Pr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Od(t){nc=!1,xr=!0,Ge.sort(Lv);const e=bt;try{for(Nt=0;Nt<Ge.length;Nt++){const n=Ge[Nt];n&&n.active!==!1&&bn(n,null,14)}}finally{Nt=0,Ge.length=0,Nd(),xr=!1,au=null,(Ge.length||Ts.length)&&Od()}}function Uv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||pe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[l]||pe;f&&(r=n.map(g=>g.trim())),h&&(r=n.map(to))}let a,c=s[a=Aa(e)]||s[a=Aa(Vt(e))];!c&&i&&(c=s[a=Aa(Gs(e))]),c&&It(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,It(u,t,6,r)}}function xd(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=u=>{const l=xd(u,e,!0);l&&(a=!0,st(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(we(t)&&s.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):st(o,i),we(t)&&s.set(t,o),o)}function Uo(t,e){return!t||!Oo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Gs(e))||ie(t,e))}let mt=null,Pd=null;function so(t){const e=mt;return mt=t,Pd=t&&t.type.__scopeId||null,e}function vr(t,e=mt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&nh(-1);const i=so(e),o=t(...r);return so(i),s._d&&nh(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Ca(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:g,ctx:m,inheritAttrs:b}=t;let E,T;const O=so(t);try{if(n.shapeFlag&4){const B=r||s;E=Dt(l.call(B,B,h,i,g,f,m)),T=c}else{const B=e;E=Dt(B.length>1?B(i,{attrs:c,slots:a,emit:u}):B(i,null)),T=e.props?c:Fv(c)}}catch(B){wr.length=0,Lo(B,t,1),E=Ve(ts)}let $=E;if(T&&b!==!1){const B=Object.keys(T),{shapeFlag:te}=$;B.length&&te&7&&(o&&B.some(Xc)&&(T=Vv(T,o)),$=Os($,T))}return n.dirs&&($=Os($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),E=$,so(O),E}const Fv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oo(n))&&((e||(e={}))[n]=t[n]);return e},Vv=(t,e)=>{const n={};for(const s in t)(!Xc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function $v(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Wl(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==s[f]&&!Uo(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Wl(s,o,u):!0:!!o;return!1}function Wl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Uo(n,i))return!0}return!1}function Bv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const jv=t=>t.__isSuspense;function qv(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Mv(t)}function qi(t,e){if(Fe){let n=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===n&&(n=Fe.provides=Object.create(s)),n[t]=e}}function Tt(t,e,n=!1){const s=Fe||mt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const Gl={};function _r(t,e,n){return Md(t,e,n)}function Md(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=pe){const a=Fe;let c,u=!1,l=!1;if(Ie(t)?(c=()=>t.value,u=no(t)):Yt(t)?(c=()=>t,s=!0):H(t)?(l=!0,u=t.some(T=>Yt(T)||no(T)),c=()=>t.map(T=>{if(Ie(T))return T.value;if(Yt(T))return qn(T);if(Y(T))return bn(T,a,2)})):Y(t)?e?c=()=>bn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),It(t,a,3,[f])}:c=bt,e&&s){const T=c;c=()=>qn(T())}let h,f=T=>{h=E.onStop=()=>{bn(T,a,4)}};if(Lr)return f=bt,e?n&&It(e,a,3,[c(),l?[]:void 0,f]):c(),bt;let g=l?[]:Gl;const m=()=>{if(!!E.active)if(e){const T=E.run();(s||u||(l?T.some((O,$)=>Nr(O,g[$])):Nr(T,g)))&&(h&&h(),It(e,a,3,[T,g===Gl?void 0:g,f]),g=T)}else E.run()};m.allowRecurse=!!e;let b;r==="sync"?b=m:r==="post"?b=()=>ot(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),b=()=>uu(m));const E=new tu(c,b);return e?n?m():g=E.run():r==="post"?ot(E.run.bind(E),a&&a.suspense):E.run(),()=>{E.stop(),a&&a.scope&&Jc(a.scope.effects,E)}}function Hv(t,e,n){const s=this.proxy,r=$e(t)?t.includes(".")?Ld(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Fe;xs(this);const a=Md(r,i.bind(s),n);return o?xs(o):Qn(),a}function Ld(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function qn(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ie(t))qn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)qn(t[n],e);else if(Ws(t)||Is(t))t.forEach(n=>{qn(n,e)});else if(ad(t))for(const n in t)qn(t[n],e);return t}function Ud(t){return Y(t)?{setup:t,name:t.name}:t}const Hi=t=>!!t.type.__asyncLoader,Fd=t=>t.type.__isKeepAlive;function Kv(t,e){Vd(t,"a",e)}function zv(t,e){Vd(t,"da",e)}function Vd(t,e,n=Fe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Fo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Fd(r.parent.vnode)&&Wv(s,e,n,r),r=r.parent}}function Wv(t,e,n,s){const r=Fo(e,t,s,!0);Vo(()=>{Jc(s[e],r)},n)}function Fo(t,e,n=Fe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Qs(),xs(n);const a=It(e,n,t,o);return Qn(),Ys(),a});return s?r.unshift(i):r.push(i),i}}const an=t=>(e,n=Fe)=>(!Lr||t==="sp")&&Fo(t,(...s)=>e(...s),n),Gv=an("bm"),$d=an("m"),Qv=an("bu"),Yv=an("u"),Xv=an("bum"),Vo=an("um"),Jv=an("sp"),Zv=an("rtg"),e_=an("rtc");function t_(t,e=Fe){Fo("ec",t,e)}function n_(t,e){const n=mt;if(n===null)return t;const s=Bo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=pe]=e[i];Y(o)&&(o={mounted:o,updated:o}),o.deep&&qn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function Un(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Qs(),It(c,n,8,[t.el,a,t,e]),Ys())}}const Bd="components";function lu(t,e){return r_(Bd,t,!0,e)||t}const s_=Symbol();function r_(t,e,n=!0,s=!1){const r=mt||Fe;if(r){const i=r.type;if(t===Bd){const a=x_(i,!1);if(a&&(a===e||a===Vt(e)||a===Po(Vt(e))))return i}const o=Ql(r[t]||i[t],e)||Ql(r.appContext[t],e);return!o&&s?i:o}}function Ql(t,e){return t&&(t[e]||t[Vt(e)]||t[Po(Vt(e))])}function zR(t,e,n,s){let r;const i=n&&n[s];if(H(t)||$e(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(we(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const sc=t=>t?ep(t)?Bo(t)||t.proxy:sc(t.parent):null,ro=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>sc(t.parent),$root:t=>sc(t.root),$emit:t=>t.emit,$options:t=>hu(t),$forceUpdate:t=>t.f||(t.f=()=>uu(t.update)),$nextTick:t=>t.n||(t.n=cu.bind(t.proxy)),$watch:t=>Hv.bind(t)}),i_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==pe&&ie(s,e))return o[e]=1,s[e];if(r!==pe&&ie(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ie(u,e))return o[e]=3,i[e];if(n!==pe&&ie(n,e))return o[e]=4,n[e];rc&&(o[e]=0)}}const l=ro[e];let h,f;if(l)return e==="$attrs"&&ft(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==pe&&ie(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ie(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==pe&&ie(r,e)?(r[e]=n,!0):s!==pe&&ie(s,e)?(s[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==pe&&ie(t,o)||e!==pe&&ie(e,o)||(a=i[0])&&ie(a,o)||ie(s,o)||ie(ro,o)||ie(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let rc=!0;function o_(t){const e=hu(t),n=t.proxy,s=t.ctx;rc=!1,e.beforeCreate&&Yl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:g,updated:m,activated:b,deactivated:E,beforeDestroy:T,beforeUnmount:O,destroyed:$,unmounted:B,render:te,renderTracked:le,renderTriggered:X,errorCaptured:J,serverPrefetch:Ne,expose:Me,inheritAttrs:rt,components:pt,directives:cn,filters:ut}=e;if(u&&a_(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const fe=o[me];Y(fe)&&(s[me]=fe.bind(n))}if(r){const me=r.call(n,n);we(me)&&(t.data=Xs(me))}if(rc=!0,i)for(const me in i){const fe=i[me],yt=Y(fe)?fe.bind(n,n):Y(fe.get)?fe.get.bind(n,n):bt,Ln=!Y(fe)&&Y(fe.set)?fe.set.bind(n):bt,vt=at({get:yt,set:Ln});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>vt.value,set:it=>vt.value=it})}if(a)for(const me in a)jd(a[me],s,n,me);if(c){const me=Y(c)?c.call(n):c;Reflect.ownKeys(me).forEach(fe=>{qi(fe,me[fe])})}l&&Yl(l,t,"c");function Se(me,fe){H(fe)?fe.forEach(yt=>me(yt.bind(n))):fe&&me(fe.bind(n))}if(Se(Gv,h),Se($d,f),Se(Qv,g),Se(Yv,m),Se(Kv,b),Se(zv,E),Se(t_,J),Se(e_,le),Se(Zv,X),Se(Xv,O),Se(Vo,B),Se(Jv,Ne),H(Me))if(Me.length){const me=t.exposed||(t.exposed={});Me.forEach(fe=>{Object.defineProperty(me,fe,{get:()=>n[fe],set:yt=>n[fe]=yt})})}else t.exposed||(t.exposed={});te&&t.render===bt&&(t.render=te),rt!=null&&(t.inheritAttrs=rt),pt&&(t.components=pt),cn&&(t.directives=cn)}function a_(t,e,n=bt,s=!1){H(t)&&(t=ic(t));for(const r in t){const i=t[r];let o;we(i)?"default"in i?o=Tt(i.from||r,i.default,!0):o=Tt(i.from||r):o=Tt(i),Ie(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Yl(t,e,n){It(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function jd(t,e,n,s){const r=s.includes(".")?Ld(n,s):()=>n[s];if($e(t)){const i=e[t];Y(i)&&_r(r,i)}else if(Y(t))_r(r,t.bind(n));else if(we(t))if(H(t))t.forEach(i=>jd(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&_r(r,i,t)}}function hu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>io(c,u,o,!0)),io(c,e,o)),we(e)&&i.set(e,c),c}function io(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&io(t,i,n,!0),r&&r.forEach(o=>io(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=c_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const c_={data:Xl,props:Vn,emits:Vn,methods:Vn,computed:Vn,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:Vn,directives:Vn,watch:l_,provide:Xl,inject:u_};function Xl(t,e){return e?t?function(){return st(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function u_(t,e){return Vn(ic(t),ic(e))}function ic(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function et(t,e){return t?[...new Set([].concat(t,e))]:e}function Vn(t,e){return t?st(st(Object.create(null),t),e):e}function l_(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const s in e)n[s]=et(t[s],e[s]);return n}function h_(t,e,n,s=!1){const r={},i={};eo(i,$o,1),t.propsDefaults=Object.create(null),qd(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Sv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function f_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(Uo(t.emitsOptions,f))continue;const g=e[f];if(c)if(ie(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const m=Vt(f);r[m]=oc(c,a,m,g,t,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{qd(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!ie(e,h)&&((l=Gs(h))===h||!ie(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=oc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ie(e,h)&&!0)&&(delete i[h],u=!0)}u&&en(t,"set","$attrs")}function qd(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Bi(c))continue;const u=e[c];let l;r&&ie(r,l=Vt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Uo(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ae(n),u=a||pe;for(let l=0;l<i.length;l++){const h=i[l];n[h]=oc(r,c,h,u[h],t,!ie(u,h))}}return o}function oc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(xs(r),s=u[n]=c.call(null,e),Qn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Gs(n))&&(s=!0))}return s}function Hd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const l=h=>{c=!0;const[f,g]=Hd(h,e,!0);st(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return we(t)&&s.set(t,bs),bs;if(H(i))for(let l=0;l<i.length;l++){const h=Vt(i[l]);Jl(h)&&(o[h]=pe)}else if(i)for(const l in i){const h=Vt(l);if(Jl(h)){const f=i[l],g=o[h]=H(f)||Y(f)?{type:f}:f;if(g){const m=th(Boolean,g.type),b=th(String,g.type);g[0]=m>-1,g[1]=b<0||m<b,(m>-1||ie(g,"default"))&&a.push(h)}}}const u=[o,a];return we(t)&&s.set(t,u),u}function Jl(t){return t[0]!=="$"}function Zl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function eh(t,e){return Zl(t)===Zl(e)}function th(t,e){return H(e)?e.findIndex(n=>eh(n,t)):Y(e)&&eh(e,t)?0:-1}const Kd=t=>t[0]==="_"||t==="$stable",fu=t=>H(t)?t.map(Dt):[Dt(t)],d_=(t,e,n)=>{if(e._n)return e;const s=vr((...r)=>fu(e(...r)),n);return s._c=!1,s},zd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Kd(r))continue;const i=t[r];if(Y(i))e[r]=d_(r,i,s);else if(i!=null){const o=fu(i);e[r]=()=>o}}},Wd=(t,e)=>{const n=fu(e);t.slots.default=()=>n},p_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),eo(e,"_",n)):zd(e,t.slots={})}else t.slots={},e&&Wd(t,e);eo(t.slots,$o,1)},g_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(st(r,e),!n&&a===1&&delete r._):(i=!e.$stable,zd(e,r)),o=e}else e&&(Wd(t,e),o={default:1});if(i)for(const a in r)!Kd(a)&&!(a in o)&&delete r[a]};function Gd(){return{app:null,config:{isNativeTag:zy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let m_=0;function y_(t,e){return function(s,r=null){Y(s)||(s=Object.assign({},s)),r!=null&&!we(r)&&(r=null);const i=Gd(),o=new Set;let a=!1;const c=i.app={_uid:m_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:M_,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...l)):Y(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=Ve(s,r);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,Bo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function ac(t,e,n,s,r=!1){if(H(t)){t.forEach((f,g)=>ac(f,e&&(H(e)?e[g]:e),n,s,r));return}if(Hi(s)&&!r)return;const i=s.shapeFlag&4?Bo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===pe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&($e(u)?(l[u]=null,ie(h,u)&&(h[u]=null)):Ie(u)&&(u.value=null)),Y(c))bn(c,a,12,[o,l]);else{const f=$e(c),g=Ie(c);if(f||g){const m=()=>{if(t.f){const b=f?l[c]:c.value;r?H(b)&&Jc(b,i):H(b)?b.includes(i)||b.push(i):f?(l[c]=[i],ie(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,ie(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(m.id=-1,ot(m,n)):m()}}}const ot=qv;function v_(t){return __(t)}function __(t,e){const n=Jy();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:g=bt,insertStaticContent:m}=t,b=(d,p,y,v=null,I=null,k=null,x=!1,C=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!ar(d,p)&&(v=N(d),it(d,I,k,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:S,ref:j,shapeFlag:M}=p;switch(S){case du:E(d,p,y,v);break;case ts:T(d,p,y,v);break;case ka:d==null&&O(p,y,v,x);break;case Ht:pt(d,p,y,v,I,k,x,C,R);break;default:M&1?te(d,p,y,v,I,k,x,C,R):M&6?cn(d,p,y,v,I,k,x,C,R):(M&64||M&128)&&S.process(d,p,y,v,I,k,x,C,R,oe)}j!=null&&I&&ac(j,d&&d.ref,k,p||d,!p)},E=(d,p,y,v)=>{if(d==null)s(p.el=a(p.children),y,v);else{const I=p.el=d.el;p.children!==d.children&&u(I,p.children)}},T=(d,p,y,v)=>{d==null?s(p.el=c(p.children||""),y,v):p.el=d.el},O=(d,p,y,v)=>{[d.el,d.anchor]=m(d.children,p,y,v,d.el,d.anchor)},$=({el:d,anchor:p},y,v)=>{let I;for(;d&&d!==p;)I=f(d),s(d,y,v),d=I;s(p,y,v)},B=({el:d,anchor:p})=>{let y;for(;d&&d!==p;)y=f(d),r(d),d=y;r(p)},te=(d,p,y,v,I,k,x,C,R)=>{x=x||p.type==="svg",d==null?le(p,y,v,I,k,x,C,R):Ne(d,p,I,k,x,C,R)},le=(d,p,y,v,I,k,x,C)=>{let R,S;const{type:j,props:M,shapeFlag:q,transition:W,dirs:ne}=d;if(R=d.el=o(d.type,k,M&&M.is,M),q&8?l(R,d.children):q&16&&J(d.children,R,null,v,I,k&&j!=="foreignObject",x,C),ne&&Un(d,null,v,"created"),M){for(const de in M)de!=="value"&&!Bi(de)&&i(R,de,null,M[de],k,d.children,v,I,P);"value"in M&&i(R,"value",null,M.value),(S=M.onVnodeBeforeMount)&&kt(S,v,d)}X(R,d,d.scopeId,x,v),ne&&Un(d,null,v,"beforeMount");const ye=(!I||I&&!I.pendingBranch)&&W&&!W.persisted;ye&&W.beforeEnter(R),s(R,p,y),((S=M&&M.onVnodeMounted)||ye||ne)&&ot(()=>{S&&kt(S,v,d),ye&&W.enter(R),ne&&Un(d,null,v,"mounted")},I)},X=(d,p,y,v,I)=>{if(y&&g(d,y),v)for(let k=0;k<v.length;k++)g(d,v[k]);if(I){let k=I.subTree;if(p===k){const x=I.vnode;X(d,x,x.scopeId,x.slotScopeIds,I.parent)}}},J=(d,p,y,v,I,k,x,C,R=0)=>{for(let S=R;S<d.length;S++){const j=d[S]=C?fn(d[S]):Dt(d[S]);b(null,j,p,y,v,I,k,x,C)}},Ne=(d,p,y,v,I,k,x)=>{const C=p.el=d.el;let{patchFlag:R,dynamicChildren:S,dirs:j}=p;R|=d.patchFlag&16;const M=d.props||pe,q=p.props||pe;let W;y&&Fn(y,!1),(W=q.onVnodeBeforeUpdate)&&kt(W,y,p,d),j&&Un(p,d,y,"beforeUpdate"),y&&Fn(y,!0);const ne=I&&p.type!=="foreignObject";if(S?Me(d.dynamicChildren,S,C,y,v,ne,k):x||fe(d,p,C,null,y,v,ne,k,!1),R>0){if(R&16)rt(C,p,M,q,y,v,I);else if(R&2&&M.class!==q.class&&i(C,"class",null,q.class,I),R&4&&i(C,"style",M.style,q.style,I),R&8){const ye=p.dynamicProps;for(let de=0;de<ye.length;de++){const Ae=ye[de],_t=M[Ae],ds=q[Ae];(ds!==_t||Ae==="value")&&i(C,Ae,_t,ds,I,d.children,y,v,P)}}R&1&&d.children!==p.children&&l(C,p.children)}else!x&&S==null&&rt(C,p,M,q,y,v,I);((W=q.onVnodeUpdated)||j)&&ot(()=>{W&&kt(W,y,p,d),j&&Un(p,d,y,"updated")},v)},Me=(d,p,y,v,I,k,x)=>{for(let C=0;C<p.length;C++){const R=d[C],S=p[C],j=R.el&&(R.type===Ht||!ar(R,S)||R.shapeFlag&70)?h(R.el):y;b(R,S,j,null,v,I,k,x,!0)}},rt=(d,p,y,v,I,k,x)=>{if(y!==v){if(y!==pe)for(const C in y)!Bi(C)&&!(C in v)&&i(d,C,y[C],null,x,p.children,I,k,P);for(const C in v){if(Bi(C))continue;const R=v[C],S=y[C];R!==S&&C!=="value"&&i(d,C,S,R,x,p.children,I,k,P)}"value"in v&&i(d,"value",y.value,v.value)}},pt=(d,p,y,v,I,k,x,C,R)=>{const S=p.el=d?d.el:a(""),j=p.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:q,slotScopeIds:W}=p;W&&(C=C?C.concat(W):W),d==null?(s(S,y,v),s(j,y,v),J(p.children,y,j,I,k,x,C,R)):M>0&&M&64&&q&&d.dynamicChildren?(Me(d.dynamicChildren,q,y,I,k,x,C),(p.key!=null||I&&p===I.subTree)&&Qd(d,p,!0)):fe(d,p,y,j,I,k,x,C,R)},cn=(d,p,y,v,I,k,x,C,R)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?I.ctx.activate(p,y,v,x,R):ut(p,y,v,I,k,x,R):Le(d,p,R)},ut=(d,p,y,v,I,k,x)=>{const C=d.component=k_(d,v,I);if(Fd(d)&&(C.ctx.renderer=oe),R_(C),C.asyncDep){if(I&&I.registerDep(C,Se),!d.el){const R=C.subTree=Ve(ts);T(null,R,p,y)}return}Se(C,d,p,y,I,k,x)},Le=(d,p,y)=>{const v=p.component=d.component;if($v(d,p,y))if(v.asyncDep&&!v.asyncResolved){me(v,p,y);return}else v.next=p,Pv(v.update),v.update();else p.el=d.el,v.vnode=p},Se=(d,p,y,v,I,k,x)=>{const C=()=>{if(d.isMounted){let{next:j,bu:M,u:q,parent:W,vnode:ne}=d,ye=j,de;Fn(d,!1),j?(j.el=ne.el,me(d,j,x)):j=ne,M&&ji(M),(de=j.props&&j.props.onVnodeBeforeUpdate)&&kt(de,W,j,ne),Fn(d,!0);const Ae=Ca(d),_t=d.subTree;d.subTree=Ae,b(_t,Ae,h(_t.el),N(_t),d,I,k),j.el=Ae.el,ye===null&&Bv(d,Ae.el),q&&ot(q,I),(de=j.props&&j.props.onVnodeUpdated)&&ot(()=>kt(de,W,j,ne),I)}else{let j;const{el:M,props:q}=p,{bm:W,m:ne,parent:ye}=d,de=Hi(p);if(Fn(d,!1),W&&ji(W),!de&&(j=q&&q.onVnodeBeforeMount)&&kt(j,ye,p),Fn(d,!0),M&&Z){const Ae=()=>{d.subTree=Ca(d),Z(M,d.subTree,d,I,null)};de?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Ae()):Ae()}else{const Ae=d.subTree=Ca(d);b(null,Ae,y,v,d,I,k),p.el=Ae.el}if(ne&&ot(ne,I),!de&&(j=q&&q.onVnodeMounted)){const Ae=p;ot(()=>kt(j,ye,Ae),I)}(p.shapeFlag&256||ye&&Hi(ye.vnode)&&ye.vnode.shapeFlag&256)&&d.a&&ot(d.a,I),d.isMounted=!0,p=y=v=null}},R=d.effect=new tu(C,()=>uu(S),d.scope),S=d.update=()=>R.run();S.id=d.uid,Fn(d,!0),S()},me=(d,p,y)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,f_(d,p.props,v,y),g_(d,p.children,y),Qs(),zl(),Ys()},fe=(d,p,y,v,I,k,x,C,R=!1)=>{const S=d&&d.children,j=d?d.shapeFlag:0,M=p.children,{patchFlag:q,shapeFlag:W}=p;if(q>0){if(q&128){Ln(S,M,y,v,I,k,x,C,R);return}else if(q&256){yt(S,M,y,v,I,k,x,C,R);return}}W&8?(j&16&&P(S,I,k),M!==S&&l(y,M)):j&16?W&16?Ln(S,M,y,v,I,k,x,C,R):P(S,I,k,!0):(j&8&&l(y,""),W&16&&J(M,y,v,I,k,x,C,R))},yt=(d,p,y,v,I,k,x,C,R)=>{d=d||bs,p=p||bs;const S=d.length,j=p.length,M=Math.min(S,j);let q;for(q=0;q<M;q++){const W=p[q]=R?fn(p[q]):Dt(p[q]);b(d[q],W,y,null,I,k,x,C,R)}S>j?P(d,I,k,!0,!1,M):J(p,y,v,I,k,x,C,R,M)},Ln=(d,p,y,v,I,k,x,C,R)=>{let S=0;const j=p.length;let M=d.length-1,q=j-1;for(;S<=M&&S<=q;){const W=d[S],ne=p[S]=R?fn(p[S]):Dt(p[S]);if(ar(W,ne))b(W,ne,y,null,I,k,x,C,R);else break;S++}for(;S<=M&&S<=q;){const W=d[M],ne=p[q]=R?fn(p[q]):Dt(p[q]);if(ar(W,ne))b(W,ne,y,null,I,k,x,C,R);else break;M--,q--}if(S>M){if(S<=q){const W=q+1,ne=W<j?p[W].el:v;for(;S<=q;)b(null,p[S]=R?fn(p[S]):Dt(p[S]),y,ne,I,k,x,C,R),S++}}else if(S>q)for(;S<=M;)it(d[S],I,k,!0),S++;else{const W=S,ne=S,ye=new Map;for(S=ne;S<=q;S++){const lt=p[S]=R?fn(p[S]):Dt(p[S]);lt.key!=null&&ye.set(lt.key,S)}let de,Ae=0;const _t=q-ne+1;let ds=!1,Pl=0;const or=new Array(_t);for(S=0;S<_t;S++)or[S]=0;for(S=W;S<=M;S++){const lt=d[S];if(Ae>=_t){it(lt,I,k,!0);continue}let Ct;if(lt.key!=null)Ct=ye.get(lt.key);else for(de=ne;de<=q;de++)if(or[de-ne]===0&&ar(lt,p[de])){Ct=de;break}Ct===void 0?it(lt,I,k,!0):(or[Ct-ne]=S+1,Ct>=Pl?Pl=Ct:ds=!0,b(lt,p[Ct],y,null,I,k,x,C,R),Ae++)}const Ml=ds?w_(or):bs;for(de=Ml.length-1,S=_t-1;S>=0;S--){const lt=ne+S,Ct=p[lt],Ll=lt+1<j?p[lt+1].el:v;or[S]===0?b(null,Ct,y,Ll,I,k,x,C,R):ds&&(de<0||S!==Ml[de]?vt(Ct,y,Ll,2):de--)}}},vt=(d,p,y,v,I=null)=>{const{el:k,type:x,transition:C,children:R,shapeFlag:S}=d;if(S&6){vt(d.component.subTree,p,y,v);return}if(S&128){d.suspense.move(p,y,v);return}if(S&64){x.move(d,p,y,oe);return}if(x===Ht){s(k,p,y);for(let M=0;M<R.length;M++)vt(R[M],p,y,v);s(d.anchor,p,y);return}if(x===ka){$(d,p,y);return}if(v!==2&&S&1&&C)if(v===0)C.beforeEnter(k),s(k,p,y),ot(()=>C.enter(k),I);else{const{leave:M,delayLeave:q,afterLeave:W}=C,ne=()=>s(k,p,y),ye=()=>{M(k,()=>{ne(),W&&W()})};q?q(k,ne,ye):ye()}else s(k,p,y)},it=(d,p,y,v=!1,I=!1)=>{const{type:k,props:x,ref:C,children:R,dynamicChildren:S,shapeFlag:j,patchFlag:M,dirs:q}=d;if(C!=null&&ac(C,null,y,d,!0),j&256){p.ctx.deactivate(d);return}const W=j&1&&q,ne=!Hi(d);let ye;if(ne&&(ye=x&&x.onVnodeBeforeUnmount)&&kt(ye,p,d),j&6)w(d.component,y,v);else{if(j&128){d.suspense.unmount(y,v);return}W&&Un(d,null,p,"beforeUnmount"),j&64?d.type.remove(d,p,y,I,oe,v):S&&(k!==Ht||M>0&&M&64)?P(S,p,y,!1,!0):(k===Ht&&M&384||!I&&j&16)&&P(R,p,y),v&&fs(d)}(ne&&(ye=x&&x.onVnodeUnmounted)||W)&&ot(()=>{ye&&kt(ye,p,d),W&&Un(d,null,p,"unmounted")},y)},fs=d=>{const{type:p,el:y,anchor:v,transition:I}=d;if(p===Ht){Ii(y,v);return}if(p===ka){B(d);return}const k=()=>{r(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:x,delayLeave:C}=I,R=()=>x(y,k);C?C(d.el,k,R):R()}else k()},Ii=(d,p)=>{let y;for(;d!==p;)y=f(d),r(d),d=y;r(p)},w=(d,p,y)=>{const{bum:v,scope:I,update:k,subTree:x,um:C}=d;v&&ji(v),I.stop(),k&&(k.active=!1,it(x,d,p,y)),C&&ot(C,p),ot(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},P=(d,p,y,v=!1,I=!1,k=0)=>{for(let x=k;x<d.length;x++)it(d[x],p,y,v,I)},N=d=>d.shapeFlag&6?N(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),V=(d,p,y)=>{d==null?p._vnode&&it(p._vnode,null,null,!0):b(p._vnode||null,d,p,null,null,null,y),zl(),Nd(),p._vnode=d},oe={p:b,um:it,m:vt,r:fs,mt:ut,mc:J,pc:fe,pbc:Me,n:N,o:t};let be,Z;return e&&([be,Z]=e(oe)),{render:V,hydrate:be,createApp:y_(V,be)}}function Fn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Qd(t,e,n=!1){const s=t.children,r=e.children;if(H(s)&&H(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=fn(r[i]),a.el=o.el),n||Qd(o,a))}}function w_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const E_=t=>t.__isTeleport,Ht=Symbol(void 0),du=Symbol(void 0),ts=Symbol(void 0),ka=Symbol(void 0),wr=[];let Et=null;function Kt(t=!1){wr.push(Et=t?null:[])}function b_(){wr.pop(),Et=wr[wr.length-1]||null}let Mr=1;function nh(t){Mr+=t}function Yd(t){return t.dynamicChildren=Mr>0?Et||bs:null,b_(),Mr>0&&Et&&Et.push(t),t}function Hn(t,e,n,s,r,i){return Yd(ge(t,e,n,s,r,i,!0))}function Xd(t,e,n,s,r){return Yd(Ve(t,e,n,s,r,!0))}function cc(t){return t?t.__v_isVNode===!0:!1}function ar(t,e){return t.type===e.type&&t.key===e.key}const $o="__vInternal",Jd=({key:t})=>t!=null?t:null,Ki=({ref:t,ref_key:e,ref_for:n})=>t!=null?$e(t)||Ie(t)||Y(t)?{i:mt,r:t,k:e,f:!!n}:t:null;function ge(t,e=null,n=null,s=0,r=null,i=t===Ht?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jd(e),ref:e&&Ki(e),scopeId:Pd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(pu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=$e(n)?8:16),Mr>0&&!o&&Et&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Et.push(c),c}const Ve=I_;function I_(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===s_)&&(t=ts),cc(t)){const a=Os(t,e,!0);return n&&pu(a,n),Mr>0&&!i&&Et&&(a.shapeFlag&6?Et[Et.indexOf(t)]=a:Et.push(a)),a.patchFlag|=-2,a}if(P_(t)&&(t=t.__vccOpts),e){e=T_(e);let{class:a,style:c}=e;a&&!$e(a)&&(e.class=Zr(a)),we(c)&&(Ed(c)&&!H(c)&&(c=st({},c)),e.style=Qc(c))}const o=$e(t)?1:jv(t)?128:E_(t)?64:we(t)?4:Y(t)?2:0;return ge(t,e,n,s,r,o,i,!0)}function T_(t){return t?Ed(t)||$o in t?st({},t):t:null}function Os(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?S_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Jd(a),ref:e&&e.ref?n&&r?H(r)?r.concat(Ki(e)):[r,Ki(e)]:Ki(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ht?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Os(t.ssContent),ssFallback:t.ssFallback&&Os(t.ssFallback),el:t.el,anchor:t.anchor}}function oo(t=" ",e=0){return Ve(du,null,t,e)}function uc(t="",e=!1){return e?(Kt(),Xd(ts,null,t)):Ve(ts,null,t)}function Dt(t){return t==null||typeof t=="boolean"?Ve(ts):H(t)?Ve(Ht,null,t.slice()):typeof t=="object"?fn(t):Ve(du,null,String(t))}function fn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Os(t)}function pu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),pu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!($o in e)?e._ctx=mt:r===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),s&64?(n=16,e=[oo(e)]):n=8);t.children=e,t.shapeFlag|=n}function S_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Zr([e.class,s.class]));else if(r==="style")e.style=Qc([e.style,s.style]);else if(Oo(r)){const i=e[r],o=s[r];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function kt(t,e,n,s=null){It(t,e,7,[n,s])}const A_=Gd();let C_=0;function k_(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||A_,i={uid:C_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new cd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hd(s,r),emitsOptions:xd(s,r),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Uv.bind(null,i),t.ce&&t.ce(i),i}let Fe=null;const Zd=()=>Fe||mt,xs=t=>{Fe=t,t.scope.on()},Qn=()=>{Fe&&Fe.scope.off(),Fe=null};function ep(t){return t.vnode.shapeFlag&4}let Lr=!1;function R_(t,e=!1){Lr=e;const{props:n,children:s}=t.vnode,r=ep(t);h_(t,n,r,e),p_(t,s);const i=r?D_(t,e):void 0;return Lr=!1,i}function D_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ns(new Proxy(t.ctx,i_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?O_(t):null;xs(t),Qs();const i=bn(s,t,0,[t.props,r]);if(Ys(),Qn(),id(i)){if(i.then(Qn,Qn),e)return i.then(o=>{sh(t,o,e)}).catch(o=>{Lo(o,t,0)});t.asyncDep=i}else sh(t,i,e)}else tp(t,e)}function sh(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=Sd(e)),tp(t,n)}let rh;function tp(t,e,n){const s=t.type;if(!t.render){if(!e&&rh&&!s.render){const r=s.template||hu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=st(st({isCustomElement:i,delimiters:a},o),c);s.render=rh(r,u)}}t.render=s.render||bt}xs(t),Qs(),o_(t),Ys(),Qn()}function N_(t){return new Proxy(t.attrs,{get(e,n){return ft(t,"get","$attrs"),e[n]}})}function O_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=N_(t))},slots:t.slots,emit:t.emit,expose:e}}function Bo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Sd(Ns(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ro)return ro[n](t)}}))}function x_(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function P_(t){return Y(t)&&"__vccOpts"in t}const at=(t,e)=>Nv(t,e,Lr);function np(t,e,n){const s=arguments.length;return s===2?we(e)&&!H(e)?cc(e)?Ve(t,null,[e]):Ve(t,e):Ve(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&cc(n)&&(n=[n]),Ve(t,e,n))}const M_="3.2.40",L_="http://www.w3.org/2000/svg",jn=typeof document<"u"?document:null,ih=jn&&jn.createElement("template"),U_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?jn.createElementNS(L_,t):jn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>jn.createTextNode(t),createComment:t=>jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ih.innerHTML=s?`<svg>${t}</svg>`:t;const a=ih.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function F_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function V_(t,e,n){const s=t.style,r=$e(n);if(n&&!r){for(const i in n)lc(s,i,n[i]);if(e&&!$e(e))for(const i in e)n[i]==null&&lc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const oh=/\s*!important$/;function lc(t,e,n){if(H(n))n.forEach(s=>lc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=$_(t,e);oh.test(n)?t.setProperty(Gs(s),n.replace(oh,""),"important"):t[s]=n}}const ah=["Webkit","Moz","ms"],Ra={};function $_(t,e){const n=Ra[e];if(n)return n;let s=Vt(e);if(s!=="filter"&&s in t)return Ra[e]=s;s=Po(s);for(let r=0;r<ah.length;r++){const i=ah[r]+s;if(i in t)return Ra[e]=i}return e}const ch="http://www.w3.org/1999/xlink";function B_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ch,e.slice(6,e.length)):t.setAttributeNS(ch,e,n);else{const i=$y(e);n==null||i&&!sd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function j_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=sd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[sp,q_]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let hc=0;const H_=Promise.resolve(),K_=()=>{hc=0},z_=()=>hc||(H_.then(K_),hc=sp());function zt(t,e,n,s){t.addEventListener(e,n,s)}function W_(t,e,n,s){t.removeEventListener(e,n,s)}function G_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Q_(e);if(s){const u=i[e]=Y_(s,r);zt(t,a,u,c)}else o&&(W_(t,a,o,c),i[e]=void 0)}}const uh=/(?:Once|Passive|Capture)$/;function Q_(t){let e;if(uh.test(t)){e={};let s;for(;s=t.match(uh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gs(t.slice(2)),e]}function Y_(t,e){const n=s=>{const r=s.timeStamp||sp();(q_||r>=n.attached-1)&&It(X_(s,n.value),e,5,[s])};return n.value=t,n.attached=z_(),n}function X_(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const lh=/^on[a-z]/,J_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?F_(t,s,r):e==="style"?V_(t,n,s):Oo(e)?Xc(e)||G_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Z_(t,e,s,r))?j_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),B_(t,e,s,r))};function Z_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&lh.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||lh.test(e)&&$e(n)?!1:e in t}const Cn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>ji(e,n):e};function ew(t){t.target.composing=!0}function hh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tw={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Cn(r);const i=s||r.props&&r.props.type==="number";zt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=to(a)),t._assign(a)}),n&&zt(t,"change",()=>{t.value=t.value.trim()}),e||(zt(t,"compositionstart",ew),zt(t,"compositionend",hh),zt(t,"change",hh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Cn(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&to(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},WR={deep:!0,created(t,e,n){t._assign=Cn(n),zt(t,"change",()=>{const s=t._modelValue,r=Ps(t),i=t.checked,o=t._assign;if(H(s)){const a=Yc(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(a,1),o(u)}}else if(Ws(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(rp(t,i))})},mounted:fh,beforeUpdate(t,e,n){t._assign=Cn(n),fh(t,e,n)}};function fh(t,{value:e,oldValue:n},s){t._modelValue=e,H(e)?t.checked=Yc(e,s.props.value)>-1:Ws(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=es(e,rp(t,!0)))}const GR={created(t,{value:e},n){t.checked=es(e,n.props.value),t._assign=Cn(n),zt(t,"change",()=>{t._assign(Ps(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Cn(s),e!==n&&(t.checked=es(e,s.props.value))}},QR={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Ws(e);zt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?to(Ps(o)):Ps(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Cn(s)},mounted(t,{value:e}){dh(t,e)},beforeUpdate(t,e,n){t._assign=Cn(n)},updated(t,{value:e}){dh(t,e)}};function dh(t,e){const n=t.multiple;if(!(n&&!H(e)&&!Ws(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Ps(i);if(n)H(e)?i.selected=Yc(e,o)>-1:i.selected=e.has(o);else if(es(Ps(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ps(t){return"_value"in t?t._value:t.value}function rp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const nw=["ctrl","shift","alt","meta"],sw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>nw.some(n=>t[`${n}Key`]&&!e.includes(n))},rw=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=sw[e[r]];if(i&&i(n,e))return}return t(n,...s)},iw=st({patchProp:J_},U_);let ph;function ow(){return ph||(ph=v_(iw))}const aw=(...t)=>{const e=ow().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=cw(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function cw(t){return $e(t)?document.querySelector(t):t}var ip=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let op;const jo=t=>op=t,ap=Symbol();function fc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Er;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Er||(Er={}));function uw(){const t=ud(!0),e=t.run(()=>Xt({}));let n=[],s=[];const r=Ns({install(i){jo(r),r._a=i,i.provide(ap,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!ip?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const cp=()=>{};function gh(t,e,n,s=cp){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Zd()&&Vo(r),r}function ps(t,...e){t.slice().forEach(n=>{n(...e)})}function dc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];fc(r)&&fc(s)&&t.hasOwnProperty(n)&&!Ie(s)&&!Yt(s)?t[n]=dc(r,s):t[n]=s}return t}const lw=Symbol();function hw(t){return!fc(t)||!t.hasOwnProperty(lw)}const{assign:dn}=Object;function fw(t){return!!(Ie(t)&&t.effect)}function dw(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=r?r():{});const l=Ad(n.state.value[t]);return dn(l,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Ns(at(()=>{jo(n);const g=n._s.get(t);return o[f].call(g,g)})),h),{}))}return c=up(t,u,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(f=>{dn(f,h)})},c}function up(t,e,n={},s,r,i){let o;const a=dn({actions:{}},n),c={deep:!0};let u,l,h=Ns([]),f=Ns([]),g;const m=s.state.value[t];!i&&!m&&(s.state.value[t]={}),Xt({});let b;function E(X){let J;u=l=!1,typeof X=="function"?(X(s.state.value[t]),J={type:Er.patchFunction,storeId:t,events:g}):(dc(s.state.value[t],X),J={type:Er.patchObject,payload:X,storeId:t,events:g});const Ne=b=Symbol();cu().then(()=>{b===Ne&&(u=!0)}),l=!0,ps(h,J,s.state.value[t])}const T=cp;function O(){o.stop(),h=[],f=[],s._s.delete(t)}function $(X,J){return function(){jo(s);const Ne=Array.from(arguments),Me=[],rt=[];function pt(Le){Me.push(Le)}function cn(Le){rt.push(Le)}ps(f,{args:Ne,name:X,store:te,after:pt,onError:cn});let ut;try{ut=J.apply(this&&this.$id===t?this:te,Ne)}catch(Le){throw ps(rt,Le),Le}return ut instanceof Promise?ut.then(Le=>(ps(Me,Le),Le)).catch(Le=>(ps(rt,Le),Promise.reject(Le))):(ps(Me,ut),ut)}}const B={_p:s,$id:t,$onAction:gh.bind(null,f),$patch:E,$reset:T,$subscribe(X,J={}){const Ne=gh(h,X,J.detached,()=>Me()),Me=o.run(()=>_r(()=>s.state.value[t],rt=>{(J.flush==="sync"?l:u)&&X({storeId:t,type:Er.direct,events:g},rt)},dn({},c,J)));return Ne},$dispose:O},te=Xs(B);s._s.set(t,te);const le=s._e.run(()=>(o=ud(),o.run(()=>e())));for(const X in le){const J=le[X];if(Ie(J)&&!fw(J)||Yt(J))i||(m&&hw(J)&&(Ie(J)?J.value=m[X]:dc(J,m[X])),s.state.value[t][X]=J);else if(typeof J=="function"){const Ne=$(X,J);le[X]=Ne,a.actions[X]=J}}return dn(te,le),dn(ae(te),le),Object.defineProperty(te,"$state",{get:()=>s.state.value[t],set:X=>{E(J=>{dn(J,X)})}}),s._p.forEach(X=>{dn(te,o.run(()=>X({store:te,app:s._a,pinia:s,options:a})))}),m&&i&&n.hydrate&&n.hydrate(te.$state,m),u=!0,l=!0,te}function YR(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const u=Zd();return a=a||u&&Tt(ap),a&&jo(a),a=op,a._s.has(s)||(i?up(s,e,r,a):dw(s,r,a)),a._s.get(s)}return o.$id=s,o}function XR(t){if(ip)return Ad(t);{t=ae(t);const e={};for(const n in t){const s=t[n];(Ie(s)||Yt(s))&&(e[n]=Cd(t,n))}return e}}const pw=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},gw={},mw={class:"min-h-screen"};function yw(t,e){const n=lu("RouterView");return Kt(),Hn("div",mw,[Ve(n)])}const vw=pw(gw,[["render",yw]]),_w="modulepreload",ww=function(t){return"/"+t},mh={},gs=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=ww(r),r in mh)return;mh[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":_w,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const vs=typeof window<"u";function Ew(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const he=Object.assign;function Da(t,e){const n={};for(const s in e){const r=e[s];n[s]=St(r)?r.map(t):t(r)}return n}const br=()=>{},St=Array.isArray,bw=/\/$/,Iw=t=>t.replace(bw,"");function Na(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Cw(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Tw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function yh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ms(e.matched[s],n.matched[r])&&lp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ms(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function lp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Aw(t[n],e[n]))return!1;return!0}function Aw(t,e){return St(t)?vh(t,e):St(e)?vh(e,t):t===e}function vh(t,e){return St(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Cw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Ur;(function(t){t.pop="pop",t.push="push"})(Ur||(Ur={}));var Ir;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ir||(Ir={}));function kw(t){if(!t)if(vs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Iw(t)}const Rw=/^[^#]+#/;function Dw(t,e){return t.replace(Rw,"#")+e}function Nw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const qo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ow(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Nw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _h(t,e){return(history.state?history.state.position-e:-1)+t}const pc=new Map;function xw(t,e){pc.set(t,e)}function Pw(t){const e=pc.get(t);return pc.delete(t),e}let Mw=()=>location.protocol+"//"+location.host;function hp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),yh(c,"")}return yh(n,t)+s+r}function Lw(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=hp(t,location),m=n.value,b=e.value;let E=0;if(f){if(n.value=g,e.value=f,o&&o===m){o=null;return}E=b?f.position-b.position:0}else s(g);r.forEach(T=>{T(n.value,m,{delta:E,type:Ur.pop,direction:E?E>0?Ir.forward:Ir.back:Ir.unknown})})};function c(){o=n.value}function u(f){r.push(f);const g=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(g),g}function l(){const{history:f}=window;!f.state||f.replaceState(he({},f.state,{scroll:qo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function wh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?qo():null}}function Uw(t){const{history:e,location:n}=window,s={value:hp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Mw()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](f)}}function o(c,u){const l=he({},e.state,wh(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=he({},r.value,e.state,{forward:c,scroll:qo()});i(l.current,l,!0);const h=he({},wh(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Fw(t){t=kw(t);const e=Uw(t),n=Lw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=he({location:"",base:t,go:s,createHref:Dw.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Vw(t){return typeof t=="string"||t&&typeof t=="object"}function fp(t){return typeof t=="string"||typeof t=="symbol"}const ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dp=Symbol("");var Eh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Eh||(Eh={}));function Ls(t,e){return he(new Error,{type:t,[dp]:!0},e)}function jt(t,e){return t instanceof Error&&dp in t&&(e==null||!!(t.type&e))}const bh="[^/]+?",$w={sensitive:!1,strict:!1,start:!0,end:!0},Bw=/[.+*?^${}()[\]/\\]/g;function jw(t,e){const n=he({},$w,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const f=u[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(Bw,"\\$&"),g+=40;else if(f.type===1){const{value:m,repeatable:b,optional:E,regexp:T}=f;i.push({name:m,repeatable:b,optional:E});const O=T||bh;if(O!==bh){g+=10;try{new RegExp(`(${O})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+B.message)}}let $=b?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||($=E&&u.length<2?`(?:/${$})`:"/"+$),E&&($+="?"),r+=$,g+=20,E&&(g+=-8),b&&(g+=-20),O===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const g=l[f]||"",m=i[f-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of f)if(g.type===0)l+=g.value;else if(g.type===1){const{value:m,repeatable:b,optional:E}=g,T=m in u?u[m]:"";if(St(T)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=St(T)?T.join("/"):T;if(!O)if(E)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);l+=O}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function qw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Hw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=qw(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Ih(s))return 1;if(Ih(r))return-1}return r.length-s.length}function Ih(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Kw={type:0,value:""},zw=/[a-zA-Z0-9_]/;function Ww(t){if(!t)return[[]];if(t==="/")return[[Kw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:zw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function Gw(t,e,n){const s=jw(Ww(t.path),n),r=he(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Qw(t,e){const n=[],s=new Map;e=Ah({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,f){const g=!f,m=Yw(l);m.aliasOf=f&&f.record;const b=Ah(e,l),E=[m];if("alias"in l){const $=typeof l.alias=="string"?[l.alias]:l.alias;for(const B of $)E.push(he({},m,{components:f?f.record.components:m.components,path:B,aliasOf:f?f.record:m}))}let T,O;for(const $ of E){const{path:B}=$;if(h&&B[0]!=="/"){const te=h.record.path,le=te[te.length-1]==="/"?"":"/";$.path=h.record.path+(B&&le+B)}if(T=Gw($,h,b),f?f.alias.push(T):(O=O||T,O!==T&&O.alias.push(T),g&&l.name&&!Sh(T)&&o(l.name)),m.children){const te=m.children;for(let le=0;le<te.length;le++)i(te[le],T,f&&f.children[le])}f=f||T,c(T)}return O?()=>{o(O)}:br}function o(l){if(fp(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&Hw(l,n[h])>=0&&(l.record.path!==n[h].record.path||!pp(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Sh(l)&&s.set(l.record.name,l)}function u(l,h){let f,g={},m,b;if("name"in l&&l.name){if(f=s.get(l.name),!f)throw Ls(1,{location:l});b=f.record.name,g=he(Th(h.params,f.keys.filter(O=>!O.optional).map(O=>O.name)),l.params&&Th(l.params,f.keys.map(O=>O.name))),m=f.stringify(g)}else if("path"in l)m=l.path,f=n.find(O=>O.re.test(m)),f&&(g=f.parse(m),b=f.record.name);else{if(f=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!f)throw Ls(1,{location:l,currentLocation:h});b=f.record.name,g=he({},h.params,l.params),m=f.stringify(g)}const E=[];let T=f;for(;T;)E.unshift(T.record),T=T.parent;return{name:b,path:m,params:g,matched:E,meta:Jw(E)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Th(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Yw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Xw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Xw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Sh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Jw(t){return t.reduce((e,n)=>he(e,n.meta),{})}function Ah(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function pp(t,e){return e.children.some(n=>n===t||pp(t,n))}const gp=/#/g,Zw=/&/g,eE=/\//g,tE=/=/g,nE=/\?/g,mp=/\+/g,sE=/%5B/g,rE=/%5D/g,yp=/%5E/g,iE=/%60/g,vp=/%7B/g,oE=/%7C/g,_p=/%7D/g,aE=/%20/g;function gu(t){return encodeURI(""+t).replace(oE,"|").replace(sE,"[").replace(rE,"]")}function cE(t){return gu(t).replace(vp,"{").replace(_p,"}").replace(yp,"^")}function gc(t){return gu(t).replace(mp,"%2B").replace(aE,"+").replace(gp,"%23").replace(Zw,"%26").replace(iE,"`").replace(vp,"{").replace(_p,"}").replace(yp,"^")}function uE(t){return gc(t).replace(tE,"%3D")}function lE(t){return gu(t).replace(gp,"%23").replace(nE,"%3F")}function hE(t){return t==null?"":lE(t).replace(eE,"%2F")}function ao(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function fE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(mp," "),o=i.indexOf("="),a=ao(o<0?i:i.slice(0,o)),c=o<0?null:ao(i.slice(o+1));if(a in e){let u=e[a];St(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Ch(t){let e="";for(let n in t){const s=t[n];if(n=uE(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(St(s)?s.map(i=>i&&gc(i)):[s&&gc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=St(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const pE=Symbol(""),kh=Symbol(""),Ho=Symbol(""),mu=Symbol(""),mc=Symbol("");function cr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function pn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ls(4,{from:n,to:e})):h instanceof Error?a(h):Vw(h)?a(Ls(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Oa(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(gE(a)){const u=(a.__vccOpts||a)[e];u&&r.push(pn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=Ew(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&pn(f,n,s,i,o)()}))}}return r}function gE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Rh(t){const e=Tt(Ho),n=Tt(mu),s=at(()=>e.resolve(En(t.to))),r=at(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(Ms.bind(null,l));if(f>-1)return f;const g=Dh(c[u-2]);return u>1&&Dh(l)===g&&h[h.length-1].path!==g?h.findIndex(Ms.bind(null,c[u-2])):f}),i=at(()=>r.value>-1&&_E(n.params,s.value.params)),o=at(()=>r.value>-1&&r.value===n.matched.length-1&&lp(n.params,s.value.params));function a(c={}){return vE(c)?e[En(t.replace)?"replace":"push"](En(t.to)).catch(br):Promise.resolve()}return{route:s,href:at(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const mE=Ud({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rh,setup(t,{slots:e}){const n=Xs(Rh(t)),{options:s}=Tt(Ho),r=at(()=>({[Nh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Nh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:np("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),yE=mE;function vE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _E(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!St(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Dh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Nh=(t,e,n)=>t!=null?t:e!=null?e:n,wE=Ud({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Tt(mc),r=at(()=>t.route||s.value),i=Tt(kh,0),o=at(()=>{let u=En(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=at(()=>r.value.matched[o.value]);qi(kh,at(()=>o.value+1)),qi(pE,a),qi(mc,r);const c=Xt();return _r(()=>[c.value,a.value,t.name],([u,l,h],[f,g,m])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!Ms(l,g)||!f)&&(l.enterCallbacks[h]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,f=h&&h.components[l];if(!f)return Oh(n.default,{Component:f,route:u});const g=h.props[l],m=g?g===!0?u.params:typeof g=="function"?g(u):g:null,E=np(f,he({},m,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Oh(n.default,{Component:E,route:u})||E}}});function Oh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const EE=wE;function bE(t){const e=Qw(t.routes,t),n=t.parseQuery||fE,s=t.stringifyQuery||Ch,r=t.history,i=cr(),o=cr(),a=cr(),c=Av(ln);let u=ln;vs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Da.bind(null,w=>""+w),h=Da.bind(null,hE),f=Da.bind(null,ao);function g(w,P){let N,V;return fp(w)?(N=e.getRecordMatcher(w),V=P):V=w,e.addRoute(V,N)}function m(w){const P=e.getRecordMatcher(w);P&&e.removeRoute(P)}function b(){return e.getRoutes().map(w=>w.record)}function E(w){return!!e.getRecordMatcher(w)}function T(w,P){if(P=he({},P||c.value),typeof w=="string"){const d=Na(n,w,P.path),p=e.resolve({path:d.path},P),y=r.createHref(d.fullPath);return he(d,p,{params:f(p.params),hash:ao(d.hash),redirectedFrom:void 0,href:y})}let N;if("path"in w)N=he({},w,{path:Na(n,w.path,P.path).path});else{const d=he({},w.params);for(const p in d)d[p]==null&&delete d[p];N=he({},w,{params:h(w.params)}),P.params=h(P.params)}const V=e.resolve(N,P),oe=w.hash||"";V.params=l(f(V.params));const be=Tw(s,he({},w,{hash:cE(oe),path:V.path})),Z=r.createHref(be);return he({fullPath:be,hash:oe,query:s===Ch?dE(w.query):w.query||{}},V,{redirectedFrom:void 0,href:Z})}function O(w){return typeof w=="string"?Na(n,w,c.value.path):he({},w)}function $(w,P){if(u!==w)return Ls(8,{from:P,to:w})}function B(w){return X(w)}function te(w){return B(he(O(w),{replace:!0}))}function le(w){const P=w.matched[w.matched.length-1];if(P&&P.redirect){const{redirect:N}=P;let V=typeof N=="function"?N(w):N;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=O(V):{path:V},V.params={}),he({query:w.query,hash:w.hash,params:"path"in V?{}:w.params},V)}}function X(w,P){const N=u=T(w),V=c.value,oe=w.state,be=w.force,Z=w.replace===!0,d=le(N);if(d)return X(he(O(d),{state:typeof d=="object"?he({},oe,d.state):oe,force:be,replace:Z}),P||N);const p=N;p.redirectedFrom=P;let y;return!be&&Sw(s,V,N)&&(y=Ls(16,{to:p,from:V}),Ln(V,V,!0,!1)),(y?Promise.resolve(y):Ne(p,V)).catch(v=>jt(v)?jt(v,2)?v:yt(v):me(v,p,V)).then(v=>{if(v){if(jt(v,2))return X(he({replace:Z},O(v.to),{state:typeof v.to=="object"?he({},oe,v.to.state):oe,force:be}),P||p)}else v=rt(p,V,!0,Z,oe);return Me(p,V,v),v})}function J(w,P){const N=$(w,P);return N?Promise.reject(N):Promise.resolve()}function Ne(w,P){let N;const[V,oe,be]=IE(w,P);N=Oa(V.reverse(),"beforeRouteLeave",w,P);for(const d of V)d.leaveGuards.forEach(p=>{N.push(pn(p,w,P))});const Z=J.bind(null,w,P);return N.push(Z),ms(N).then(()=>{N=[];for(const d of i.list())N.push(pn(d,w,P));return N.push(Z),ms(N)}).then(()=>{N=Oa(oe,"beforeRouteUpdate",w,P);for(const d of oe)d.updateGuards.forEach(p=>{N.push(pn(p,w,P))});return N.push(Z),ms(N)}).then(()=>{N=[];for(const d of w.matched)if(d.beforeEnter&&!P.matched.includes(d))if(St(d.beforeEnter))for(const p of d.beforeEnter)N.push(pn(p,w,P));else N.push(pn(d.beforeEnter,w,P));return N.push(Z),ms(N)}).then(()=>(w.matched.forEach(d=>d.enterCallbacks={}),N=Oa(be,"beforeRouteEnter",w,P),N.push(Z),ms(N))).then(()=>{N=[];for(const d of o.list())N.push(pn(d,w,P));return N.push(Z),ms(N)}).catch(d=>jt(d,8)?d:Promise.reject(d))}function Me(w,P,N){for(const V of a.list())V(w,P,N)}function rt(w,P,N,V,oe){const be=$(w,P);if(be)return be;const Z=P===ln,d=vs?history.state:{};N&&(V||Z?r.replace(w.fullPath,he({scroll:Z&&d&&d.scroll},oe)):r.push(w.fullPath,oe)),c.value=w,Ln(w,P,N,Z),yt()}let pt;function cn(){pt||(pt=r.listen((w,P,N)=>{if(!Ii.listening)return;const V=T(w),oe=le(V);if(oe){X(he(oe,{replace:!0}),V).catch(br);return}u=V;const be=c.value;vs&&xw(_h(be.fullPath,N.delta),qo()),Ne(V,be).catch(Z=>jt(Z,12)?Z:jt(Z,2)?(X(Z.to,V).then(d=>{jt(d,20)&&!N.delta&&N.type===Ur.pop&&r.go(-1,!1)}).catch(br),Promise.reject()):(N.delta&&r.go(-N.delta,!1),me(Z,V,be))).then(Z=>{Z=Z||rt(V,be,!1),Z&&(N.delta&&!jt(Z,8)?r.go(-N.delta,!1):N.type===Ur.pop&&jt(Z,20)&&r.go(-1,!1)),Me(V,be,Z)}).catch(br)}))}let ut=cr(),Le=cr(),Se;function me(w,P,N){yt(w);const V=Le.list();return V.length?V.forEach(oe=>oe(w,P,N)):console.error(w),Promise.reject(w)}function fe(){return Se&&c.value!==ln?Promise.resolve():new Promise((w,P)=>{ut.add([w,P])})}function yt(w){return Se||(Se=!w,cn(),ut.list().forEach(([P,N])=>w?N(w):P()),ut.reset()),w}function Ln(w,P,N,V){const{scrollBehavior:oe}=t;if(!vs||!oe)return Promise.resolve();const be=!N&&Pw(_h(w.fullPath,0))||(V||!N)&&history.state&&history.state.scroll||null;return cu().then(()=>oe(w,P,be)).then(Z=>Z&&Ow(Z)).catch(Z=>me(Z,w,P))}const vt=w=>r.go(w);let it;const fs=new Set,Ii={currentRoute:c,listening:!0,addRoute:g,removeRoute:m,hasRoute:E,getRoutes:b,resolve:T,options:t,push:B,replace:te,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Le.add,isReady:fe,install(w){const P=this;w.component("RouterLink",yE),w.component("RouterView",EE),w.config.globalProperties.$router=P,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>En(c)}),vs&&!it&&c.value===ln&&(it=!0,B(r.location).catch(oe=>{}));const N={};for(const oe in ln)N[oe]=at(()=>c.value[oe]);w.provide(Ho,P),w.provide(mu,Xs(N)),w.provide(mc,c);const V=w.unmount;fs.add(w),w.unmount=function(){fs.delete(w),fs.size<1&&(u=ln,pt&&pt(),pt=null,c.value=ln,it=!1,Se=!1),V()}}};return Ii}function ms(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function IE(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ms(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ms(u,c))||r.push(c))}return[n,s,r]}function wp(){return Tt(Ho)}function JR(){return Tt(mu)}/**
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
 */const Ep=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},TE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[l],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ep(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const m=u<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},SE=function(t){const e=Ep(t);return bp.encodeByteArray(e,!0)},co=function(t){return SE(t).replace(/\./g,"")},Ip=function(t){try{return bp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function CE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RE(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DE(){return typeof indexedDB=="object"}function NE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function OE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xE=()=>OE().__FIREBASE_DEFAULTS__,PE=()=>{if(typeof process>"u")return;const t=process.env.__FIREBASE_DEFAULTS__,e=process.env.__FIREBASE_DEFAULTS_PATH__;if(t)return e&&console.warn("Values were provided for both __FIREBASE_DEFAULTS__ and __FIREBASE_DEFAULTS_PATH__. __FIREBASE_DEFAULTS_PATH__ will be ignored."),JSON.parse(t);if(e&&typeof require<"u")try{return require(e)}catch{console.warn(`Unable to read defaults from file provided to __FIREBASE_DEFAULTS_PATH__: ${e}`)}},ME=()=>{if(typeof document>"u")return;const t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),e=t&&Ip(t[1]);return e&&JSON.parse(e)},yu=()=>xE()||PE()||ME(),vu=t=>{var e,n;return(n=(e=yu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},LE=()=>{var t;return(t=yu())===null||t===void 0?void 0:t.config},Tp=t=>{var e;return(e=yu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class UE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Sp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[co(JSON.stringify(n)),co(JSON.stringify(o)),a].join(".")}/**
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
 */const FE="FirebaseError";class Bt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=FE,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?VE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Bt(r,a,s)}}function VE(t,e){return t.replace($E,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const $E=/\{\$([^}]+)}/g;function BE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(xh(i)&&xh(o)){if(!uo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function xh(t){return t!==null&&typeof t=="object"}/**
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
 */function ni(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function fr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function dr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jE(t,e){const n=new qE(t,e);return n.subscribe.bind(n)}class qE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");HE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=xa),r.error===void 0&&(r.error=xa),r.complete===void 0&&(r.complete=xa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xa(){}/**
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
 */function Re(t){return t&&t._delegate?t._delegate:t}class kn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $n="[DEFAULT]";/**
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
 */class KE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new UE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WE(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zE(t){return t===$n?void 0:t}function WE(t){return t.instantiationMode==="EAGER"}/**
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
 */class GE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const QE={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},YE=ce.INFO,XE={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},JE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=XE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=YE,this._logHandler=JE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const ZE=(t,e)=>e.some(n=>t instanceof n);let Ph,Mh;function eb(){return Ph||(Ph=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tb(){return Mh||(Mh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ap=new WeakMap,yc=new WeakMap,Cp=new WeakMap,Pa=new WeakMap,wu=new WeakMap;function nb(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(In(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ap.set(n,t)}).catch(()=>{}),wu.set(e,t),e}function sb(t){if(yc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});yc.set(t,e)}let vc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return In(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rb(t){vc=t(vc)}function ib(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ma(this),e,...n);return Cp.set(s,e.sort?e.sort():[e]),In(s)}:tb().includes(t)?function(...e){return t.apply(Ma(this),e),In(Ap.get(this))}:function(...e){return In(t.apply(Ma(this),e))}}function ob(t){return typeof t=="function"?ib(t):(t instanceof IDBTransaction&&sb(t),ZE(t,eb())?new Proxy(t,vc):t)}function In(t){if(t instanceof IDBRequest)return nb(t);if(Pa.has(t))return Pa.get(t);const e=ob(t);return e!==t&&(Pa.set(t,e),wu.set(e,t)),e}const Ma=t=>wu.get(t);function ab(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=In(o);return s&&o.addEventListener("upgradeneeded",c=>{s(In(o.result),c.oldVersion,c.newVersion,In(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const cb=["get","getKey","getAll","getAllKeys","count"],ub=["put","add","delete","clear"],La=new Map;function Lh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(La.get(e))return La.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=ub.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||cb.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return La.set(e,i),i}rb(t=>({...t,get:(e,n,s)=>Lh(e,n)||t.get(e,n,s),has:(e,n)=>!!Lh(e,n)||t.has(e,n)}));/**
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
 */class lb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function hb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _c="@firebase/app",Uh="0.8.0";/**
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
 */const ns=new _u("@firebase/app"),fb="@firebase/app-compat",db="@firebase/analytics-compat",pb="@firebase/analytics",gb="@firebase/app-check-compat",mb="@firebase/app-check",yb="@firebase/auth",vb="@firebase/auth-compat",_b="@firebase/database",wb="@firebase/database-compat",Eb="@firebase/functions",bb="@firebase/functions-compat",Ib="@firebase/installations",Tb="@firebase/installations-compat",Sb="@firebase/messaging",Ab="@firebase/messaging-compat",Cb="@firebase/performance",kb="@firebase/performance-compat",Rb="@firebase/remote-config",Db="@firebase/remote-config-compat",Nb="@firebase/storage",Ob="@firebase/storage-compat",xb="@firebase/firestore",Pb="@firebase/firestore-compat",Mb="firebase",Lb="9.11.0";/**
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
 */const wc="[DEFAULT]",Ub={[_c]:"fire-core",[fb]:"fire-core-compat",[pb]:"fire-analytics",[db]:"fire-analytics-compat",[mb]:"fire-app-check",[gb]:"fire-app-check-compat",[yb]:"fire-auth",[vb]:"fire-auth-compat",[_b]:"fire-rtdb",[wb]:"fire-rtdb-compat",[Eb]:"fire-fn",[bb]:"fire-fn-compat",[Ib]:"fire-iid",[Tb]:"fire-iid-compat",[Sb]:"fire-fcm",[Ab]:"fire-fcm-compat",[Cb]:"fire-perf",[kb]:"fire-perf-compat",[Rb]:"fire-rc",[Db]:"fire-rc-compat",[Nb]:"fire-gcs",[Ob]:"fire-gcs-compat",[xb]:"fire-fst",[Pb]:"fire-fst-compat","fire-js":"fire-js",[Mb]:"fire-js-all"};/**
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
 */const lo=new Map,Ec=new Map;function Fb(t,e){try{t.container.addComponent(e)}catch(n){ns.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ss(t){const e=t.name;if(Ec.has(e))return ns.debug(`There were multiple attempts to register component ${e}.`),!1;Ec.set(e,t);for(const n of lo.values())Fb(n,t);return!0}function Ko(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Vb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tn=new ti("app","Firebase",Vb);/**
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
 */class $b{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
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
 */const Js=Lb;function kp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:wc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Tn.create("bad-app-name",{appName:String(r)});if(n||(n=LE()),!n)throw Tn.create("no-options");const i=lo.get(r);if(i){if(uo(n,i.options)&&uo(s,i.config))return i;throw Tn.create("duplicate-app",{appName:r})}const o=new GE(r);for(const c of Ec.values())o.addComponent(c);const a=new $b(n,s,o);return lo.set(r,a),a}function Eu(t=wc){const e=lo.get(t);if(!e&&t===wc)return kp();if(!e)throw Tn.create("no-app",{appName:t});return e}function Pt(t,e,n){var s;let r=(s=Ub[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ns.warn(a.join(" "));return}ss(new kn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Bb="firebase-heartbeat-database",jb=1,Fr="firebase-heartbeat-store";let Ua=null;function Rp(){return Ua||(Ua=ab(Bb,jb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fr)}}}).catch(t=>{throw Tn.create("idb-open",{originalErrorMessage:t.message})})),Ua}async function qb(t){var e;try{return(await Rp()).transaction(Fr).objectStore(Fr).get(Dp(t))}catch(n){if(n instanceof Bt)ns.warn(n.message);else{const s=Tn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});ns.warn(s.message)}}}async function Fh(t,e){var n;try{const r=(await Rp()).transaction(Fr,"readwrite");return await r.objectStore(Fr).put(e,Dp(t)),r.done}catch(s){if(s instanceof Bt)ns.warn(s.message);else{const r=Tn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});ns.warn(r.message)}}}function Dp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Hb=1024,Kb=30*24*60*60*1e3;class zb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Kb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vh(),{heartbeatsToSend:n,unsentEntries:s}=Wb(this._heartbeatsCache.heartbeats),r=co(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Vh(){return new Date().toISOString().substring(0,10)}function Wb(t,e=Hb){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),$h(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),$h(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Gb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DE()?NE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function $h(t){return co(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Qb(t){ss(new kn("platform-logger",e=>new lb(e),"PRIVATE")),ss(new kn("heartbeat",e=>new zb(e),"PRIVATE")),Pt(_c,Uh,t),Pt(_c,Uh,"esm2017"),Pt("fire-js","")}Qb("");var Yb="firebase",Xb="9.11.0";/**
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
 */Pt(Yb,Xb,"app");function bu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Np(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jb=Np,Op=new ti("auth","Firebase",Np());/**
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
 */const Bh=new _u("@firebase/auth");function zi(t,...e){Bh.logLevel<=ce.ERROR&&Bh.error(`Auth (${Js}): ${t}`,...e)}/**
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
 */function At(t,...e){throw Iu(t,...e)}function Mt(t,...e){return Iu(t,...e)}function Zb(t,e,n){const s=Object.assign(Object.assign({},Jb()),{[e]:n});return new ti("auth","Firebase",s).create(e,{appName:t.name})}function Iu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Op.create(t,...e)}function K(t,e,...n){if(!t)throw Iu(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zi(e),new Error(e)}function tn(t,e){t||Wt(e)}/**
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
 */const jh=new Map;function Gt(t){tn(t instanceof Function,"Expected a class definition");let e=jh.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jh.set(t,e),e)}/**
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
 */function eI(t,e){const n=Ko(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(uo(i,e!=null?e:{}))return r;At(r,"already-initialized")}return n.initialize({options:e})}function tI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function bc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nI(){return qh()==="http:"||qh()==="https:"}function qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nI()||CE()||"connection"in navigator)?navigator.onLine:!0}function rI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class si{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=AE()||kE()}get(){return sI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tu(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class xp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const oI=new si(3e4,6e4);function zo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ri(t,e,n,s,r={}){return Pp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ni(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),xp.fetch()(Mp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Pp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},iI),e);try{const r=new aI(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ri(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ri(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ri(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ri(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zb(t,l,u);At(t,l)}}catch(r){if(r instanceof Bt)throw r;At(t,"network-request-failed")}}async function Wo(t,e,n,s,r={}){const i=await ri(t,e,n,s,r);return"mfaPendingCredential"in i&&At(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Mp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Tu(t.config,r):`${t.config.apiScheme}://${r}`}class aI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Mt(this.auth,"network-request-failed")),oI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ri(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Mt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function cI(t,e){return ri(t,"POST","/v1/accounts:delete",e)}async function uI(t,e){return ri(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Tr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lI(t,e=!1){const n=Re(t),s=await n.getIdToken(e),r=Su(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Tr(Fa(r.auth_time)),issuedAtTime:Tr(Fa(r.iat)),expirationTime:Tr(Fa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fa(t){return Number(t)*1e3}function Su(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return zi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ip(s);return i?JSON.parse(i):(zi("Failed to decode base64 JWT payload"),null)}catch(i){return zi("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function hI(t){const e=Su(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Bt&&fI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function fI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ho(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Vr(t,uI(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?mI(i.providerUserInfo):[],a=gI(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Lp(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function pI(t){const e=Re(t);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function mI(t){return t.map(e=>{var{providerId:n}=e,s=bu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function yI(t,e){const n=await Pp(t,{},async()=>{const s=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Mp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await yI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new $r;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function hn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=bu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Lp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Vr(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lI(this,e)}reload(){return pI(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ho(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vr(this,cI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:$,emailVerified:B,isAnonymous:te,providerData:le,stsTokenManager:X}=n;K($&&X,e,"internal-error");const J=$r.fromJSON(this.name,X);K(typeof $=="string",e,"internal-error"),hn(h,e.name),hn(f,e.name),K(typeof B=="boolean",e,"internal-error"),K(typeof te=="boolean",e,"internal-error"),hn(g,e.name),hn(m,e.name),hn(b,e.name),hn(E,e.name),hn(T,e.name),hn(O,e.name);const Ne=new Yn({uid:$,auth:e,email:f,emailVerified:B,displayName:h,isAnonymous:te,photoURL:m,phoneNumber:g,tenantId:b,stsTokenManager:J,createdAt:T,lastLoginAt:O});return le&&Array.isArray(le)&&(Ne.providerData=le.map(Me=>Object.assign({},Me))),E&&(Ne._redirectEventId=E),Ne}static async _fromIdTokenResponse(e,n,s=!1){const r=new $r;r.updateFromServerResponse(n);const i=new Yn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ho(i),i}}/**
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
 */class Up{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Up.type="NONE";const Hh=Up;/**
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
 */function Wi(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Wi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Wi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ss(Gt(Hh),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Gt(Hh);const o=Wi(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Yn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ss(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ss(i,e,s))}}/**
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
 */function Kh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($p(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jp(e))return"Blackberry";if(qp(e))return"Webos";if(Au(e))return"Safari";if((e.includes("chrome/")||Vp(e))&&!e.includes("edge/"))return"Chrome";if(Bp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Fp(t=Je()){return/firefox\//i.test(t)}function Au(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vp(t=Je()){return/crios\//i.test(t)}function $p(t=Je()){return/iemobile/i.test(t)}function Bp(t=Je()){return/android/i.test(t)}function jp(t=Je()){return/blackberry/i.test(t)}function qp(t=Je()){return/webos/i.test(t)}function Go(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vI(t=Je()){var e;return Go(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _I(){return RE()&&document.documentMode===10}function Hp(t=Je()){return Go(t)||Bp(t)||qp(t)||jp(t)||/windows phone/i.test(t)||$p(t)}function wI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Kp(t,e=[]){let n;switch(t){case"Browser":n=Kh(Je());break;case"Worker":n=`${Kh(Je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${s}`}/**
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
 */class EI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
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
 */class bI{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zh(this),this.idTokenSubscription=new zh(this),this.beforeStateQueue=new EI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Op,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ho(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Re(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ti("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Qo(t){return Re(t)}class zh{constructor(e){this.auth=e,this.observer=null,this.addObserver=jE(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function II(t,e,n){const s=Qo(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=zp(e),{host:o,port:a}=TI(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||SI()}function zp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TI(t){const e=zp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Wh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Wh(o)}}}function Wh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Cu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function AI(t,e){return ri(t,"POST","/v1/accounts:update",e)}/**
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
 */async function CI(t,e){return Wo(t,"POST","/v1/accounts:signInWithPassword",zo(t,e))}/**
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
 */async function kI(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",zo(t,e))}async function RI(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",zo(t,e))}/**
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
 */class Br extends Cu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Br(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Br(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return CI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kI(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return AI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return RI(e,{idToken:n,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function As(t,e){return Wo(t,"POST","/v1/accounts:signInWithIdp",zo(t,e))}/**
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
 */const DI="http://localhost";class rs extends Cu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):At("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=bu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new rs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,As(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:DI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
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
 */function NI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OI(t){const e=fr(dr(t)).link,n=e?fr(dr(e)).deep_link_id:null,s=fr(dr(t)).deep_link_id;return(s?fr(dr(s)).link:null)||s||n||e||t}class ku{constructor(e){var n,s,r,i,o,a;const c=fr(dr(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=NI((r=c.mode)!==null&&r!==void 0?r:null);K(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=OI(e);try{return new ku(n)}catch{return null}}}/**
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
 */class Zs{constructor(){this.providerId=Zs.PROVIDER_ID}static credential(e,n){return Br._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ku.parseLink(n);return K(s,"argument-error"),Br._fromEmailAndCode(e,s.code,s.tenantId)}}Zs.PROVIDER_ID="password";Zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Wp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ii extends Wp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gn extends ii{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
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
 */class mn extends ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return mn.credential(n,s)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
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
 */class yn extends ii{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
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
 */class vn extends ii{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return vn.credential(n,s)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
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
 */class Us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Yn._fromIdTokenResponse(e,s,r),o=Gh(s);return new Us({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Gh(s);return new Us({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Gh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fo extends Bt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,fo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new fo(e,n,s,r)}}function Gp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fo._fromErrorAndOperation(t,i,e,s):i})}async function xI(t,e,n=!1){const s=await Vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Us._forOperation(t,"link",s)}/**
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
 */async function PI(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await Vr(t,Gp(r,i,e,t),n);K(o.idToken,r,"internal-error");const a=Su(o.idToken);K(a,r,"internal-error");const{sub:c}=a;return K(t.uid===c,r,"user-mismatch"),Us._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&At(r,"user-mismatch"),o}}/**
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
 */async function Qp(t,e,n=!1){const s="signIn",r=await Gp(t,s,e),i=await Us._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function MI(t,e){return Qp(Qo(t),e)}function LI(t,e,n){return MI(Re(t),Zs.credential(e,n))}function UI(t,e,n,s){return Re(t).onIdTokenChanged(e,n,s)}function FI(t,e,n){return Re(t).beforeAuthStateChanged(e,n)}function Qh(t,e,n,s){return Re(t).onAuthStateChanged(e,n,s)}function VI(t){return Re(t).signOut()}const po="__sak";/**
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
 */class Yp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function $I(){const t=Je();return Au(t)||Go(t)}const BI=1e3,jI=10;class Xp extends Yp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$I()&&wI(),this.fallbackToPolling=Hp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);_I()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,jI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},BI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xp.type="LOCAL";const qI=Xp;/**
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
 */class Jp extends Yp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jp.type="SESSION";const Zp=Jp;/**
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
 */function HI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Yo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Yo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await HI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yo.receivers=[];/**
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
 */function Ru(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class KI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Ru("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Lt(){return window}function zI(t){Lt().location.href=t}/**
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
 */function eg(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function WI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QI(){return eg()?self:null}/**
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
 */const tg="firebaseLocalStorageDb",YI=1,go="firebaseLocalStorage",ng="fbase_key";class oi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xo(t,e){return t.transaction([go],e?"readwrite":"readonly").objectStore(go)}function XI(){const t=indexedDB.deleteDatabase(tg);return new oi(t).toPromise()}function Ic(){const t=indexedDB.open(tg,YI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(go,{keyPath:ng})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(go)?e(s):(s.close(),await XI(),e(await Ic()))})})}async function Yh(t,e,n){const s=Xo(t,!0).put({[ng]:e,value:n});return new oi(s).toPromise()}async function JI(t,e){const n=Xo(t,!1).get(e),s=await new oi(n).toPromise();return s===void 0?null:s.value}function Xh(t,e){const n=Xo(t,!0).delete(e);return new oi(n).toPromise()}const ZI=800,e0=3;class sg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ic(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>e0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yo._getInstance(QI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WI(),!this.activeServiceWorker)return;this.sender=new KI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ic();return await Yh(e,po,"1"),await Xh(e,po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Yh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>JI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Xo(r,!1).getAll();return new oi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sg.type="LOCAL";const t0=sg;/**
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
 */function n0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function s0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Mt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",n0().appendChild(s)})}function r0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new si(3e4,6e4);/**
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
 */function i0(t,e){return e?Gt(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Du extends Cu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function o0(t){return Qp(t.auth,new Du(t),t.bypassAuthState)}function a0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),PI(n,new Du(t),t.bypassAuthState)}async function c0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),xI(n,new Du(t),t.bypassAuthState)}/**
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
 */class rg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return o0;case"linkViaPopup":case"linkViaRedirect":return c0;case"reauthViaPopup":case"reauthViaRedirect":return a0;default:At(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const u0=new si(2e3,1e4);class _s extends rg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,_s.currentPopupAction&&_s.currentPopupAction.cancel(),_s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=Ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,u0.get())};e()}}_s.currentPopupAction=null;/**
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
 */const l0="pendingRedirect",Gi=new Map;class h0 extends rg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Gi.get(this.auth._key());if(!e){try{const s=await f0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Gi.set(this.auth._key(),e)}return this.bypassAuthState||Gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function f0(t,e){const n=g0(e),s=p0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function d0(t,e){Gi.set(t._key(),e)}function p0(t){return Gt(t._redirectPersistence)}function g0(t){return Wi(l0,t.config.apiKey,t.name)}async function m0(t,e,n=!1){const s=Qo(t),r=i0(s,e),o=await new h0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const y0=10*60*1e3;class v0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ig(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=y0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jh(e))}saveEventToCache(e){this.cachedEventUids.add(Jh(e)),this.lastProcessedEventTime=Date.now()}}function Jh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ig({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ig(t);default:return!1}}/**
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
 */async function w0(t,e={}){return ri(t,"GET","/v1/projects",e)}/**
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
 */const E0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b0=/^https?/;async function I0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await w0(t);for(const n of e)try{if(T0(n))return}catch{}At(t,"unauthorized-domain")}function T0(t){const e=bc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!b0.test(n))return!1;if(E0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const S0=new si(3e4,6e4);function Zh(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function A0(t){return new Promise((e,n)=>{var s,r,i;function o(){Zh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zh(),n(Mt(t,"network-request-failed"))},timeout:S0.get()})}if(!((r=(s=Lt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Lt().gapi)===null||i===void 0)&&i.load)o();else{const a=r0("iframefcb");return Lt()[a]=()=>{gapi.load?o():n(Mt(t,"network-request-failed"))},s0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Qi=null,e})}let Qi=null;function C0(t){return Qi=Qi||A0(t),Qi}/**
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
 */const k0=new si(5e3,15e3),R0="__/auth/iframe",D0="emulator/auth/iframe",N0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},O0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function x0(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tu(e,D0):`https://${t.config.authDomain}/${R0}`,s={apiKey:e.apiKey,appName:t.name,v:Js},r=O0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ni(s).slice(1)}`}async function P0(t){const e=await C0(t),n=Lt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:x0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),a=Lt().setTimeout(()=>{i(o)},k0.get());function c(){Lt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const M0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},L0=500,U0=600,F0="_blank",V0="http://localhost";class ef{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $0(t,e,n,s=L0,r=U0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},M0),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Je().toLowerCase();n&&(a=Vp(u)?F0:n),Fp(u)&&(e=e||V0,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(vI(u)&&a!=="_self")return B0(e||"",a),new ef(null);const h=window.open(e||"",a,l);K(h,t,"popup-blocked");try{h.focus()}catch{}return new ef(h)}function B0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const j0="__/auth/handler",q0="emulator/auth/handler";function tf(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Js,eventId:r};if(e instanceof Wp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof ii){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${H0(t)}?${ni(a).slice(1)}`}function H0({config:t}){return t.emulator?Tu(t,q0):`https://${t.authDomain}/${j0}`}/**
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
 */const Va="webStorageSupport";class K0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zp,this._completeRedirectFn=m0,this._overrideRedirectResult=d0}async _openPopup(e,n,s,r){var i;tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=tf(e,n,s,bc(),r);return $0(e,o,Ru())}async _openRedirect(e,n,s,r){return await this._originValidation(e),zI(tf(e,n,s,bc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(tn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await P0(e),s=new v0(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Va,{type:Va},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Va];o!==void 0&&n(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=I0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hp()||Au()||Go()}}const z0=K0;var nf="@firebase/auth",sf="0.20.8";/**
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
 */class W0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function G0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Q0(t){ss(new kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{K(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kp(t)},l=new bI(a,c,u);return tI(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ss(new kn("auth-internal",e=>{const n=Qo(e.getProvider("auth").getImmediate());return(s=>new W0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(nf,sf,G0(t)),Pt(nf,sf,"esm2017")}/**
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
 */const Y0=5*60,X0=Tp("authIdTokenMaxAge")||Y0;let rf=null;const J0=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>X0)return;const r=n==null?void 0:n.token;rf!==r&&(rf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Z0(t=Eu()){const e=Ko(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eI(t,{popupRedirectResolver:z0,persistence:[t0,qI,Zp]}),s=Tp("authTokenSyncURL");if(s){const i=J0(s);FI(n,i,()=>i(n.currentUser)),UI(n,o=>i(o))}const r=vu("auth");return r&&II(n,`http://${r}`),n}Q0("Browser");var eT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Nu=Nu||{},z=eT||self;function mo(){}function Jo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ai(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function tT(t){return Object.prototype.hasOwnProperty.call(t,$a)&&t[$a]||(t[$a]=++nT)}var $a="closure_uid_"+(1e9*Math.random()>>>0),nT=0;function sT(t,e,n){return t.call.apply(t.bind,arguments)}function rT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=sT:Ye=rT,Ye.apply(null,arguments)}function Di(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function xn(){this.s=this.s,this.o=this.o}var iT=0;xn.prototype.s=!1;xn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),iT!=0)&&tT(this)};xn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const og=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ou(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function of(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Jo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var oT=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",mo,e),z.removeEventListener("test",mo,e)}catch{}return t}();function yo(t){return/^[\s\xa0]*$/.test(t)}var af=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ba(t,e){return t<e?-1:t>e?1:0}function Zo(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Ot(t){return Zo().indexOf(t)!=-1}function xu(t){return xu[" "](t),t}xu[" "]=mo;function aT(t){var e=lT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var cT=Ot("Opera"),Fs=Ot("Trident")||Ot("MSIE"),ag=Ot("Edge"),Tc=ag||Fs,cg=Ot("Gecko")&&!(Zo().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge"))&&!(Ot("Trident")||Ot("MSIE"))&&!Ot("Edge"),uT=Zo().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge");function ug(){var t=z.document;return t?t.documentMode:void 0}var vo;e:{var ja="",qa=function(){var t=Zo();if(cg)return/rv:([^\);]+)(\)|;)/.exec(t);if(ag)return/Edge\/([\d\.]+)/.exec(t);if(Fs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(uT)return/WebKit\/(\S+)/.exec(t);if(cT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qa&&(ja=qa?qa[1]:""),Fs){var Ha=ug();if(Ha!=null&&Ha>parseFloat(ja)){vo=String(Ha);break e}}vo=ja}var lT={};function hT(){return aT(function(){let t=0;const e=af(String(vo)).split("."),n=af("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ba(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ba(r[2].length==0,i[2].length==0)||Ba(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Sc;if(z.document&&Fs){var cf=ug();Sc=cf||parseInt(vo,10)||void 0}else Sc=void 0;var fT=Sc;function jr(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(cg){e:{try{xu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:dT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&jr.X.h.call(this)}}ze(jr,Xe);var dT={2:"touch",3:"pen",4:"mouse"};jr.prototype.h=function(){jr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ci="closure_listenable_"+(1e6*Math.random()|0),pT=0;function gT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++pT,this.ba=this.ea=!1}function ea(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Pu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function lg(t){const e={};for(const n in t)e[n]=t[n];return e}const uf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<uf.length;i++)n=uf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ta(t){this.src=t,this.g={},this.h=0}ta.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Cc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new gT(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Ac(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=og(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ea(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Cc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Mu="closure_lm_"+(1e6*Math.random()|0),Ka={};function fg(t,e,n,s,r){if(s&&s.once)return pg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)fg(t,e[i],n,s,r);return null}return n=Fu(n),t&&t[ci]?t.N(e,n,ai(s)?!!s.capture:!!s,r):dg(t,e,n,!1,s,r)}function dg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ai(r)?!!r.capture:!!r,a=Uu(t);if(a||(t[Mu]=a=new ta(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=mT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)oT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(mg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function mT(){function t(n){return e.call(t.src,t.listener,n)}const e=yT;return t}function pg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)pg(t,e[i],n,s,r);return null}return n=Fu(n),t&&t[ci]?t.O(e,n,ai(s)?!!s.capture:!!s,r):dg(t,e,n,!0,s,r)}function gg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)gg(t,e[i],n,s,r);else s=ai(s)?!!s.capture:!!s,n=Fu(n),t&&t[ci]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Cc(i,n,s,r),-1<n&&(ea(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Uu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Cc(e,n,s,r)),(n=-1<t?e[t]:null)&&Lu(n))}function Lu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ci])Ac(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(mg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Uu(e))?(Ac(n,t),n.h==0&&(n.src=null,e[Mu]=null)):ea(t)}}}function mg(t){return t in Ka?Ka[t]:Ka[t]="on"+t}function yT(t,e){if(t.ba)t=!0;else{e=new jr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Lu(t),t=n.call(s,e)}return t}function Uu(t){return t=t[Mu],t instanceof ta?t:null}var za="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fu(t){return typeof t=="function"?t:(t[za]||(t[za]=function(e){return t.handleEvent(e)}),t[za])}function Be(){xn.call(this),this.i=new ta(this),this.P=this,this.I=null}ze(Be,xn);Be.prototype[ci]=!0;Be.prototype.removeEventListener=function(t,e,n,s){gg(this,t,e,n,s)};function He(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var r=e;e=new Xe(s,t),hg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ni(o,s,!0,e)&&r}if(o=e.g=t,r=Ni(o,s,!0,e)&&r,r=Ni(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ni(o,s,!1,e)&&r}Be.prototype.M=function(){if(Be.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ea(n[s]);delete t.g[e],t.h--}}this.I=null};Be.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Be.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ni(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ac(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Vu=z.JSON.stringify;function vT(){var t=_g;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _T{constructor(){this.h=this.g=null}add(e,n){const s=yg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var yg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new wT,t=>t.reset());class wT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ET(t){z.setTimeout(()=>{throw t},0)}function vg(t,e){kc||bT(),Rc||(kc(),Rc=!0),_g.add(t,e)}var kc;function bT(){var t=z.Promise.resolve(void 0);kc=function(){t.then(IT)}}var Rc=!1,_g=new _T;function IT(){for(var t;t=vT();){try{t.h.call(t.g)}catch(n){ET(n)}var e=yg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rc=!1}function na(t,e){Be.call(this),this.h=t||1,this.g=e||z,this.j=Ye(this.kb,this),this.l=Date.now()}ze(na,Be);L=na.prototype;L.ca=!1;L.R=null;L.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),He(this,"tick"),this.ca&&($u(this),this.start()))}};L.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $u(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}L.M=function(){na.X.M.call(this),$u(this),delete this.g};function Bu(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function wg(t){t.g=Bu(()=>{t.g=null,t.i&&(t.i=!1,wg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class TT extends xn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:wg(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qr(t){xn.call(this),this.h=t,this.g={}}ze(qr,xn);var lf=[];function Eg(t,e,n,s){Array.isArray(n)||(n&&(lf[0]=n.toString()),n=lf);for(var r=0;r<n.length;r++){var i=fg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function bg(t){Pu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Lu(e)},t),t.g={}}qr.prototype.M=function(){qr.X.M.call(this),bg(this)};qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sa(){this.g=!0}sa.prototype.Aa=function(){this.g=!1};function ST(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function AT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ws(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+kT(t,n)+(s?" "+s:"")})}function CT(t,e){t.info(function(){return"TIMEOUT: "+e})}sa.prototype.info=function(){};function kT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Vu(n)}catch{return e}}var cs={},hf=null;function ra(){return hf=hf||new Be}cs.Oa="serverreachability";function Ig(t){Xe.call(this,cs.Oa,t)}ze(Ig,Xe);function Hr(t){const e=ra();He(e,new Ig(e))}cs.STAT_EVENT="statevent";function Tg(t,e){Xe.call(this,cs.STAT_EVENT,t),this.stat=e}ze(Tg,Xe);function tt(t){const e=ra();He(e,new Tg(e,t))}cs.Pa="timingevent";function Sg(t,e){Xe.call(this,cs.Pa,t),this.size=e}ze(Sg,Xe);function ui(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var ia={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},Ag={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ju(){}ju.prototype.h=null;function ff(t){return t.h||(t.h=t.i())}function Cg(){}var li={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function qu(){Xe.call(this,"d")}ze(qu,Xe);function Hu(){Xe.call(this,"c")}ze(Hu,Xe);var Dc;function oa(){}ze(oa,ju);oa.prototype.g=function(){return new XMLHttpRequest};oa.prototype.i=function(){return{}};Dc=new oa;function hi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new qr(this),this.O=RT,t=Tc?125:void 0,this.T=new na(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new kg}function kg(){this.i=null,this.g="",this.h=!1}var RT=45e3,Nc={},_o={};L=hi.prototype;L.setTimeout=function(t){this.O=t};function Oc(t,e,n){t.K=1,t.v=ca(nn(e)),t.s=n,t.P=!0,Rg(t,null)}function Rg(t,e){t.F=Date.now(),fi(t),t.A=nn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ug(n.i,"t",s),t.C=0,n=t.l.H,t.h=new kg,t.g=rm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new TT(Ye(t.Ka,t,t.g),t.N)),Eg(t.S,t.g,"readystatechange",t.hb),e=t.H?lg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Hr(),ST(t.j,t.u,t.A,t.m,t.U,t.s)}L.hb=function(t){t=t.target;const e=this.L;e&&Qt(t)==3?e.l():this.Ka(t)};L.Ka=function(t){try{if(t==this.g)e:{const l=Qt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Tc||this.g&&(this.h.h||this.g.fa()||mf(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Hr(3):Hr(2)),aa(this);var n=this.g.aa();this.Y=n;t:if(Dg(this)){var s=mf(this.g);t="";var r=s.length,i=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kn(this),Sr(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,AT(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yo(a)){var u=a;break t}}u=null}if(n=u)ws(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xc(this,n);else{this.i=!1,this.o=3,tt(12),Kn(this),Sr(this);break e}}this.P?(Ng(this,l,o),Tc&&this.i&&l==3&&(Eg(this.S,this.T,"tick",this.gb),this.T.start())):(ws(this.j,this.m,o,null),xc(this,o)),l==4&&Kn(this),this.i&&!this.I&&(l==4?em(this.l,this):(this.i=!1,fi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),Kn(this),Sr(this)}}}catch{}finally{}};function Dg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ng(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=DT(t,n),r==_o){e==4&&(t.o=4,tt(14),s=!1),ws(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Nc){t.o=4,tt(15),ws(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ws(t.j,t.m,r,null),xc(t,r);Dg(t)&&r!=_o&&r!=Nc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xu(e),e.K=!0,tt(11))):(ws(t.j,t.m,n,"[Invalid Chunked Response]"),Kn(t),Sr(t))}L.gb=function(){if(this.g){var t=Qt(this.g),e=this.g.fa();this.C<e.length&&(aa(this),Ng(this,t,e),this.i&&t!=4&&fi(this))}};function DT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?_o:(n=Number(e.substring(n,s)),isNaN(n)?Nc:(s+=1,s+n>e.length?_o:(e=e.substr(s,n),t.C=s+n,e)))}L.cancel=function(){this.I=!0,Kn(this)};function fi(t){t.V=Date.now()+t.O,Og(t,t.O)}function Og(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ui(Ye(t.fb,t),e)}function aa(t){t.B&&(z.clearTimeout(t.B),t.B=null)}L.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(CT(this.j,this.A),this.K!=2&&(Hr(),tt(17)),Kn(this),this.o=2,Sr(this)):Og(this,this.V-t)};function Sr(t){t.l.G==0||t.I||em(t.l,t)}function Kn(t){aa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,$u(t.T),bg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function xc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Pc(n.h,t))){if(!t.J&&Pc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)bo(n),ha(n);else break e;Yu(n),tt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=ui(Ye(n.bb,n),6e3));if(1>=$g(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else zn(n,11)}else if((t.J||n.g==t)&&bo(n),!yo(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ku(i,i.h),i.h=null))}if(s.D){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.za=b,Ee(s.F,s.D,b))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=sm(s,s.H?s.ka:null,s.V),o.J){Bg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(aa(a),fi(a)),s.g=o}else Jg(s);0<n.i.length&&fa(n)}else u[0]!="stop"&&u[0]!="close"||zn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?zn(n,7):Qu(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Hr(4)}catch{}}function NT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Jo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function OT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Jo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function xg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Jo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=OT(t),s=NT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Pg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Xn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Xn){this.h=e!==void 0?e:t.h,wo(this,t.j),this.s=t.s,this.g=t.g,Eo(this,t.m),this.l=t.l,e=t.i;var n=new Kr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),df(this,n),this.o=t.o}else t&&(n=String(t).match(Pg))?(this.h=!!e,wo(this,n[1]||"",!0),this.s=pr(n[2]||""),this.g=pr(n[3]||"",!0),Eo(this,n[4]),this.l=pr(n[5]||"",!0),df(this,n[6]||"",!0),this.o=pr(n[7]||"")):(this.h=!!e,this.i=new Kr(null,this.h))}Xn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(gr(e,pf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(gr(e,pf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(gr(n,n.charAt(0)=="/"?LT:MT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",gr(n,FT)),t.join("")};function nn(t){return new Xn(t)}function wo(t,e,n){t.j=n?pr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Eo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function df(t,e,n){e instanceof Kr?(t.i=e,VT(t.i,t.h)):(n||(e=gr(e,UT)),t.i=new Kr(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function ca(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function gr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,PT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function PT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var pf=/[#\/\?@]/g,MT=/[#\?:]/g,LT=/[#\?]/g,UT=/[#\?@]/g,FT=/#/g;function Kr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Pn(t){t.g||(t.g=new Map,t.h=0,t.i&&xT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Kr.prototype;L.add=function(t,e){Pn(this),this.i=null,t=er(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Mg(t,e){Pn(t),e=er(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Lg(t,e){return Pn(t),e=er(t,e),t.g.has(e)}L.forEach=function(t,e){Pn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};L.oa=function(){Pn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};L.W=function(t){Pn(this);let e=[];if(typeof t=="string")Lg(this,t)&&(e=e.concat(this.g.get(er(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return Pn(this),this.i=null,t=er(this,t),Lg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Ug(t,e,n){Mg(t,e),0<n.length&&(t.i=null,t.g.set(er(t,e),Ou(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function er(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function VT(t,e){e&&!t.j&&(Pn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Mg(this,s),Ug(this,r,n))},t)),t.j=e}var $T=class{constructor(t,e){this.h=t,this.g=e}};function Fg(t){this.l=t||BT,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var BT=10;function Vg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $g(t){return t.h?1:t.g?t.g.size:0}function Pc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ku(t,e){t.g?t.g.add(e):t.h=e}function Bg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Fg.prototype.cancel=function(){if(this.i=jg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function jg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ou(t.i)}function zu(){}zu.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};zu.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function jT(){this.g=new zu}function qT(t,e,n){const s=n||"";try{xg(t,function(r,i){let o=r;ai(r)&&(o=Vu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function HT(t,e){const n=new sa;if(z.Image){const s=new Image;s.onload=Di(Oi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Di(Oi,n,s,"TestLoadImage: error",!1,e),s.onabort=Di(Oi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Di(Oi,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Oi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function di(t){this.l=t.$b||null,this.j=t.ib||!1}ze(di,ju);di.prototype.g=function(){return new ua(this.l,this.j)};di.prototype.i=function(t){return function(){return t}}({});function ua(t,e){Be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Wu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(ua,Be);var Wu=0;L=ua.prototype;L.open=function(t,e){if(this.readyState!=Wu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,zr(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=Wu};L.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,zr(this)),this.g&&(this.readyState=3,zr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qg(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function qg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}L.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?pi(this):zr(this),this.readyState==3&&qg(this)}};L.Ua=function(t){this.g&&(this.response=this.responseText=t,pi(this))};L.Ta=function(t){this.g&&(this.response=t,pi(this))};L.ga=function(){this.g&&pi(this)};function pi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,zr(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function zr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var KT=z.JSON.parse;function De(t){Be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hg,this.K=this.L=!1}ze(De,Be);var Hg="",zT=/^https?$/i,WT=["POST","PUT"];L=De.prototype;L.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Dc.g(),this.C=this.u?ff(this.u):ff(Dc),this.g.onreadystatechange=Ye(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){gf(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=og(WT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wg(this),0<this.B&&((this.K=GT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.qa,this)):this.A=Bu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){gf(this,i)}};function GT(t){return Fs&&hT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.qa=function(){typeof Nu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,He(this,"timeout"),this.abort(8))};function gf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Kg(t),la(t)}function Kg(t){t.D||(t.D=!0,He(t,"complete"),He(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,He(this,"complete"),He(this,"abort"),la(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),la(this,!0)),De.X.M.call(this)};L.Ha=function(){this.s||(this.F||this.v||this.l?zg(this):this.eb())};L.eb=function(){zg(this)};function zg(t){if(t.h&&typeof Nu<"u"&&(!t.C[1]||Qt(t)!=4||t.aa()!=2)){if(t.v&&Qt(t)==4)Bu(t.Ha,0,t);else if(He(t,"readystatechange"),Qt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Pg)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!zT.test(r?r.toLowerCase():"")}n=s}if(n)He(t,"complete"),He(t,"success");else{t.m=6;try{var o=2<Qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Kg(t)}}finally{la(t)}}}}function la(t,e){if(t.g){Wg(t);const n=t.g,s=t.C[0]?mo:null;t.g=null,t.C=null,e||He(t,"ready");try{n.onreadystatechange=s}catch{}}}function Wg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function Qt(t){return t.g?t.g.readyState:0}L.aa=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}};L.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),KT(e)}};function mf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Hg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Ea=function(){return this.m};L.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function Gg(t){let e="";return Pu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Gu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Gg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function ur(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qg(t){this.Ca=0,this.i=[],this.j=new sa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=ur("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=ur("baseRetryDelayMs",5e3,t),this.ab=ur("retryDelaySeedMs",1e4,t),this.Za=ur("forwardChannelMaxRetries",2,t),this.ta=ur("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Fg(t&&t.concurrentRequestLimit),this.Fa=new jT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}L=Qg.prototype;L.ma=8;L.G=1;function Qu(t){if(Yg(t),t.G==3){var e=t.U++,n=nn(t.F);Ee(n,"SID",t.I),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),gi(t,n),e=new hi(t,t.j,e,void 0),e.K=2,e.v=ca(nn(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=rm(e.l,null),e.g.da(e.v)),e.F=Date.now(),fi(e)}nm(t)}function ha(t){t.g&&(Xu(t),t.g.cancel(),t.g=null)}function Yg(t){ha(t),t.u&&(z.clearTimeout(t.u),t.u=null),bo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function fa(t){Vg(t.h)||t.m||(t.m=!0,vg(t.Ja,t),t.C=0)}function QT(t,e){return $g(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=ui(Ye(t.Ja,t,e),tm(t,t.C)),t.C++,!0)}L.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new hi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=lg(i),hg(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Xg(this,r,e),n=nn(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),gi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Gg(i)))+"&"+e:this.o&&Gu(n,this.o,i)),Ku(this.h,r),this.Xa&&Ee(n,"TYPE","init"),this.O?(Ee(n,"$req",e),Ee(n,"SID","null"),r.Z=!0,Oc(r,n,null)):Oc(r,n,e),this.G=2}}else this.G==3&&(t?yf(this,t):this.i.length==0||Vg(this.h)||yf(this))};function yf(t,e){var n;e?n=e.m:n=t.U++;const s=nn(t.F);Ee(s,"SID",t.I),Ee(s,"RID",n),Ee(s,"AID",t.T),gi(t,s),t.o&&t.s&&Gu(s,t.o,t.s),n=new hi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Xg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ku(t.h,n),Oc(n,s,e)}function gi(t,e){t.ia&&Pu(t.ia,function(n,s){Ee(e,s,n)}),t.l&&xg({},function(n,s){Ee(e,s,n)})}function Xg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ye(t.l.Qa,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{qT(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Jg(t){t.g||t.u||(t.Z=1,vg(t.Ia,t),t.A=0)}function Yu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ui(Ye(t.Ia,t),tm(t,t.A)),t.A++,!0)}L.Ia=function(){if(this.u=null,Zg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ui(Ye(this.cb,this),t)}};L.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tt(10),ha(this),Zg(this))};function Xu(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Zg(t){t.g=new hi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=nn(t.sa);Ee(e,"RID","rpc"),Ee(e,"SID",t.I),Ee(e,"CI",t.L?"0":"1"),Ee(e,"AID",t.T),Ee(e,"TYPE","xmlhttp"),gi(t,e),t.o&&t.s&&Gu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ca(nn(e)),n.s=null,n.P=!0,Rg(n,t)}L.bb=function(){this.v!=null&&(this.v=null,ha(this),Yu(this),tt(19))};function bo(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function em(t,e){var n=null;if(t.g==e){bo(t),Xu(t),t.g=null;var s=2}else if(Pc(t.h,e))n=e.D,Bg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ra(),He(s,new Sg(s,n)),fa(t)}else Jg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&QT(t,e)||s==2&&Yu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:zn(t,5);break;case 4:zn(t,10);break;case 3:zn(t,6);break;default:zn(t,2)}}}function tm(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function zn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ye(t.jb,t);n||(n=new Xn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||wo(n,"https"),ca(n)),HT(n.toString(),s)}else tt(2);t.G=0,t.l&&t.l.va(e),nm(t),Yg(t)}L.jb=function(t){t?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function nm(t){if(t.G=0,t.la=[],t.l){const e=jg(t.h);(e.length!=0||t.i.length!=0)&&(of(t.la,e),of(t.la,t.i),t.h.i.length=0,Ou(t.i),t.i.length=0),t.l.ua()}}function sm(t,e,n){var s=n instanceof Xn?nn(n):new Xn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Eo(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Xn(null,void 0);s&&wo(i,s),e&&(i.g=e),r&&Eo(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ee(s,n,e),Ee(s,"VER",t.ma),gi(t,s),s}function rm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new De(new di({ib:!0})):new De(t.ra),e.L=t.H,e}function im(){}L=im.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Qa=function(){};function Io(){if(Fs&&!(10<=Number(fT)))throw Error("Environmental error: no available transport.")}Io.prototype.g=function(t,e){return new dt(t,e)};function dt(t,e){Be.call(this),this.g=new Qg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!yo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new tr(this)}ze(dt,Be);dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;tt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=sm(t,null,t.V),fa(t)};dt.prototype.close=function(){Qu(this.g)};dt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Vu(t),t=n);e.i.push(new $T(e.$a++,t)),e.G==3&&fa(e)};dt.prototype.M=function(){this.g.l=null,delete this.j,Qu(this.g),delete this.g,dt.X.M.call(this)};function om(t){qu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(om,qu);function am(){Hu.call(this),this.status=1}ze(am,Hu);function tr(t){this.g=t}ze(tr,im);tr.prototype.xa=function(){He(this.g,"a")};tr.prototype.wa=function(t){He(this.g,new om(t))};tr.prototype.va=function(t){He(this.g,new am)};tr.prototype.ua=function(){He(this.g,"b")};Io.prototype.createWebChannel=Io.prototype.g;dt.prototype.send=dt.prototype.u;dt.prototype.open=dt.prototype.m;dt.prototype.close=dt.prototype.close;ia.NO_ERROR=0;ia.TIMEOUT=8;ia.HTTP_ERROR=6;Ag.COMPLETE="complete";Cg.EventType=li;li.OPEN="a";li.CLOSE="b";li.ERROR="c";li.MESSAGE="d";Be.prototype.listen=Be.prototype.N;De.prototype.listenOnce=De.prototype.O;De.prototype.getLastError=De.prototype.Na;De.prototype.getLastErrorCode=De.prototype.Ea;De.prototype.getStatus=De.prototype.aa;De.prototype.getResponseJson=De.prototype.Ra;De.prototype.getResponseText=De.prototype.fa;De.prototype.send=De.prototype.da;var YT=function(){return new Io},XT=function(){return ra()},Wa=ia,JT=Ag,ZT=cs,vf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},eS=di,xi=Cg,tS=De;const _f="@firebase/firestore";/**
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
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
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
 */let nr="9.11.0";/**
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
 */const is=new _u("@firebase/firestore");function wf(){return is.logLevel}function U(t,...e){if(is.logLevel<=ce.DEBUG){const n=e.map(Ju);is.debug(`Firestore (${nr}): ${t}`,...n)}}function sn(t,...e){if(is.logLevel<=ce.ERROR){const n=e.map(Ju);is.error(`Firestore (${nr}): ${t}`,...n)}}function Mc(t,...e){if(is.logLevel<=ce.WARN){const n=e.map(Ju);is.warn(`Firestore (${nr}): ${t}`,...n)}}function Ju(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: `+t;throw sn(e),new Error(e)}function _e(t,e){t||G()}function Q(t,e){return t}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class cm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class sS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rS{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Jt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(_e(typeof s.accessToken=="string"),new cm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new We(e)}}class iS{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(_e(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class oS{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new iS(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cS{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.A=n.token,new aS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function uS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class um{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=uS(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function Vs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Oe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Oe(0,0))}static max(){return new ee(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Wr{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Wr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends Wr{construct(e,n,s){return new ve(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new D(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const lS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Wr{construct(e,n,s){return new Qe(e,n,s)}static isValidIdentifier(e){return lS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new D(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new D(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ve.fromString(e))}static fromName(e){return new F(ve.fromString(e).popFirst(5))}static empty(){return new F(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ve(e.slice()))}}function hS(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ee.fromTimestamp(s===1e9?new Oe(n+1,0):new Oe(n,s));return new Rn(r,F.empty(),e)}function fS(t){return new Rn(t.readTime,t.key,-1)}class Rn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Rn(ee.min(),F.empty(),-1)}static max(){return new Rn(ee.max(),F.empty(),-1)}}function dS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const pS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function mi(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==pS)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new A((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new A((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function yi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Zu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Ef(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Zu.at=-1;class Pe{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pi(this.root,e,this.comparator,!0)}}class Pi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:je.RED,this.left=r!=null?r:je.EMPTY,this.right=i!=null?i:je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new je(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return je.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,r){return this}insert(t,e,n){return new je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xe{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bf(this.data.getIterator())}getIteratorFrom(e){return new bf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xe(this.comparator);return n.data=e,n}}class bf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new xe(Qe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ke(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const mS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dn(t){if(_e(!!t),typeof t=="string"){let e=0;const n=mS.exec(t);if(_e(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $s(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */function el(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hm(t){const e=t.mapValue.fields.__previous_value__;return el(e)?hm(e):e}function Gr(t){const e=Dn(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */class yS{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qr&&e.projectId===this.projectId&&e.database===this.database}}function da(t){return t==null}function To(t){return t===0&&1/t==-1/0}function vS(t){return typeof t=="number"&&Number.isInteger(t)&&!To(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Mi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?el(t)?4:_S(t)?9007199254740991:10:G()}function $t(t,e){if(t===e)return!0;const n=os(t);if(n!==os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gr(t).isEqual(Gr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Dn(s.timestampValue),o=Dn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return $s(s.bytesValue).isEqual($s(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ke(s.geoPointValue.latitude)===ke(r.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ke(s.integerValue)===ke(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ke(s.doubleValue),o=ke(r.doubleValue);return i===o?To(i)===To(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Vs(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ef(i)!==Ef(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!$t(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Yr(t,e){return(t.values||[]).find(n=>$t(n,e))!==void 0}function Bs(t,e){if(t===e)return 0;const n=os(t),s=os(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=ke(r.integerValue||r.doubleValue),a=ke(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return If(t.timestampValue,e.timestampValue);case 4:return If(Gr(t),Gr(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,i){const o=$s(r),a=$s(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ue(o[c],a[c]);if(u!==0)return u}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ue(ke(r.latitude),ke(i.latitude));return o!==0?o:ue(ke(r.longitude),ke(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Bs(o[c],a[c]);if(u)return u}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Mi.mapValue&&i===Mi.mapValue)return 0;if(r===Mi.mapValue)return 1;if(i===Mi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ue(a[l],u[l]);if(h!==0)return h;const f=Bs(o[a[l]],c[u[l]]);if(f!==0)return f}return ue(a.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function If(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Dn(t),s=Dn(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function Cs(t){return Lc(t)}function Lc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Dn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$s(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Lc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Lc(s.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function So(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Uc(t){return!!t&&"integerValue"in t}function tl(t){return!!t&&"arrayValue"in t}function Tf(t){return!!t&&"nullValue"in t}function Sf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yi(t){return!!t&&"mapValue"in t}function Ar(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return sr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ar(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ar(t.arrayValue.values[n]);return e}return Object.assign({},t)}function _S(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Yi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ar(n)}setAll(e){let n=Qe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ar(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Yi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Yi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){sr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new gt(Ar(this.value))}}function fm(t){const e=[];return sr(t.fields,(n,s)=>{const r=new Qe([n]);if(Yi(s)){const i=fm(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ut(e)}/**
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
 */class qe{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new qe(e,0,ee.min(),ee.min(),gt.empty(),0)}static newFoundDocument(e,n,s){return new qe(e,1,n,ee.min(),s,0)}static newNoDocument(e,n){return new qe(e,2,n,ee.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new qe(e,3,n,ee.min(),gt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wS{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Af(t,e=null,n=[],s=[],r=null,i=null,o=null){return new wS(t,e,n,s,r,i,o)}function nl(t){const e=Q(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Cs(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),da(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Cs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Cs(s)).join(",")),e.ht=n}return e.ht}function ES(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Cs(s.value)}`;var s}).join(", ")}]`),da(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Cs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Cs(n)).join(",")),`Target(${e})`}function sl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!RS(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!$t(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kf(t.startAt,e.startAt)&&kf(t.endAt,e.endAt)}function Fc(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class nt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new bS(e,n,s):n==="array-contains"?new SS(e,s):n==="in"?new AS(e,s):n==="not-in"?new CS(e,s):n==="array-contains-any"?new kS(e,s):new nt(e,n,s)}static lt(e,n,s){return n==="in"?new IS(e,s):new TS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Bs(n,this.value)):n!==null&&os(this.value)===os(n)&&this.ft(Bs(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class bS extends nt{constructor(e,n,s){super(e,n,s),this.key=F.fromName(s.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.ft(n)}}class IS extends nt{constructor(e,n){super(e,"in",n),this.keys=dm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class TS extends nt{constructor(e,n){super(e,"not-in",n),this.keys=dm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>F.fromName(s.referenceValue))}class SS extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tl(n)&&Yr(n.arrayValue,this.value)}}class AS extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yr(this.value.arrayValue,n)}}class CS extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yr(this.value.arrayValue,n)}}class kS extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Yr(this.value.arrayValue,s))}}class js{constructor(e,n){this.position=e,this.inclusive=n}}class ks{constructor(e,n="asc"){this.field=e,this.dir=n}}function RS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Cf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=F.comparator(F.fromName(o.referenceValue),n.key):s=Bs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function kf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$t(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class us{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function DS(t,e,n,s,r,i,o,a){return new us(t,e,n,s,r,i,o,a)}function rl(t){return new us(t)}function Rf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function il(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ol(t){for(const e of t.filters)if(e.dt())return e.field;return null}function al(t){return t.collectionGroup!==null}function qs(t){const e=Q(t);if(e._t===null){e._t=[];const n=ol(e),s=il(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new ks(n)),e._t.push(new ks(Qe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ks(Qe.keyField(),i))}}}return e._t}function rn(t){const e=Q(t);if(!e.wt)if(e.limitType==="F")e.wt=Af(e.path,e.collectionGroup,qs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of qs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ks(i.field,o))}const s=e.endAt?new js(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new js(e.startAt.position,e.startAt.inclusive):null;e.wt=Af(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Ao(t,e,n){return new us(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pa(t,e){return sl(rn(t),rn(e))&&t.limitType===e.limitType}function pm(t){return`${nl(rn(t))}|lt:${t.limitType}`}function Vc(t){return`Query(target=${ES(rn(t))}; limitType=${t.limitType})`}function cl(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):F.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Cf(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,qs(n),s)||n.endAt&&!function(r,i,o){const a=Cf(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,qs(n),s))}(t,e)}function NS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gm(t){return(e,n)=>{let s=!1;for(const r of qs(t)){const i=OS(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function OS(t,e,n){const s=t.field.isKeyField()?F.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Bs(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
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
 */function mm(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:To(e)?"-0":e}}function ym(t){return{integerValue:""+t}}function xS(t,e){return vS(e)?ym(e):mm(t,e)}/**
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
 */class ga{constructor(){this._=void 0}}function PS(t,e,n){return t instanceof Co?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Xr?_m(t,e):t instanceof Jr?wm(t,e):function(s,r){const i=vm(s,r),o=Df(i)+Df(s.yt);return Uc(i)&&Uc(s.yt)?ym(o):mm(s.It,o)}(t,e)}function MS(t,e,n){return t instanceof Xr?_m(t,e):t instanceof Jr?wm(t,e):n}function vm(t,e){return t instanceof ko?Uc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Co extends ga{}class Xr extends ga{constructor(e){super(),this.elements=e}}function _m(t,e){const n=Em(e);for(const s of t.elements)n.some(r=>$t(r,s))||n.push(s);return{arrayValue:{values:n}}}class Jr extends ga{constructor(e){super(),this.elements=e}}function wm(t,e){let n=Em(e);for(const s of t.elements)n=n.filter(r=>!$t(r,s));return{arrayValue:{values:n}}}class ko extends ga{constructor(e,n){super(),this.It=e,this.yt=n}}function Df(t){return ke(t.integerValue||t.doubleValue)}function Em(t){return tl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function LS(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Xr&&s instanceof Xr||n instanceof Jr&&s instanceof Jr?Vs(n.elements,s.elements,$t):n instanceof ko&&s instanceof ko?$t(n.yt,s.yt):n instanceof Co&&s instanceof Co}(t.transform,e.transform)}class US{constructor(e,n){this.version=e,this.transformResults=n}}class Ft{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ft}static exists(e){return new Ft(void 0,e)}static updateTime(e){return new Ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ma{}function bm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tm(t.key,Ft.none()):new vi(t.key,t.data,Ft.none());{const n=t.data,s=gt.empty();let r=new xe(Qe.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ls(t.key,s,new Ut(r.toArray()),Ft.none())}}function FS(t,e,n){t instanceof vi?function(s,r,i){const o=s.value.clone(),a=Of(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ls?function(s,r,i){if(!Xi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Of(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Im(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Cr(t,e,n,s){return t instanceof vi?function(r,i,o,a){if(!Xi(r.precondition,i))return o;const c=r.value.clone(),u=xf(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ls?function(r,i,o,a){if(!Xi(r.precondition,i))return o;const c=xf(r.fieldTransforms,a,i),u=i.data;return u.setAll(Im(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Xi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function VS(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=vm(s.transform,r||null);i!=null&&(n===null&&(n=gt.empty()),n.set(s.field,i))}return n||null}function Nf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Vs(n,s,(r,i)=>LS(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vi extends ma{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ls extends ma{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Im(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Of(t,e,n){const s=new Map;_e(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,MS(o,a,n[r]))}return s}function xf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,PS(i,o,e))}return s}class Tm extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $S extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class BS{constructor(e){this.count=e}}/**
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
 */var Ce,re;function jS(t){switch(t){default:return G();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Sm(t){if(t===void 0)return sn("GRPC error has no .code"),_.UNKNOWN;switch(t){case Ce.OK:return _.OK;case Ce.CANCELLED:return _.CANCELLED;case Ce.UNKNOWN:return _.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return _.INTERNAL;case Ce.UNAVAILABLE:return _.UNAVAILABLE;case Ce.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Ce.NOT_FOUND:return _.NOT_FOUND;case Ce.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Ce.ABORTED:return _.ABORTED;case Ce.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Ce.DATA_LOSS:return _.DATA_LOSS;default:return G()}}(re=Ce||(Ce={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class rr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){sr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return lm(this.inner)}size(){return this.innerSize}}/**
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
 */const qS=new Pe(F.comparator);function on(){return qS}const Am=new Pe(F.comparator);function mr(...t){let e=Am;for(const n of t)e=e.insert(n.key,n);return e}function Cm(t){let e=Am;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Wn(){return kr()}function km(){return kr()}function kr(){return new rr(t=>t.toString(),(t,e)=>t.isEqual(e))}const HS=new Pe(F.comparator),KS=new xe(F.comparator);function se(...t){let e=KS;for(const n of t)e=e.add(n);return e}const zS=new xe(ue);function Rm(){return zS}/**
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
 */class ya{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,_i.createSynthesizedTargetChangeForCurrentChange(e,n)),new ya(ee.min(),s,Rm(),on(),se())}}class _i{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new _i(Ke.EMPTY_BYTE_STRING,n,se(),se(),se())}}/**
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
 */class Ji{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class Dm{constructor(e,n){this.targetId=e,this.At=n}}class Nm{constructor(e,n,s=Ke.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Pf{constructor(){this.Rt=0,this.bt=Lf(),this.Pt=Ke.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=se(),n=se(),s=se();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:G()}}),new _i(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Lf()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class WS{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=on(),this.qt=Mf(),this.Kt=new xe(ue)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(Fc(i))if(s===0){const o=new F(i.path);this.jt(n,o,qe.newNoDocument(o,ee.min()))}else _e(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Fc(a.target)){const c=new F(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,qe.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=se();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new ya(e,n,this.Kt,this.Ut,s);return this.Ut=on(),this.qt=Mf(),this.Kt=new xe(ue),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Pf,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new xe(ue),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Pf),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Mf(){return new Pe(F.comparator)}function Lf(){return new Pe(F.comparator)}/**
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
 */const GS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),QS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class YS{constructor(e,n){this.databaseId=e,this.gt=n}}function Ro(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Om(t,e){return t.gt?e.toBase64():e.toUint8Array()}function XS(t,e){return Ro(t,e.toTimestamp())}function Zt(t){return _e(!!t),ee.fromTimestamp(function(e){const n=Dn(e);return new Oe(n.seconds,n.nanos)}(t))}function ul(t,e){return function(n){return new ve(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function xm(t){const e=ve.fromString(t);return _e(Lm(e)),e}function $c(t,e){return ul(t.databaseId,e.path)}function Ga(t,e){const n=xm(e);if(n.get(1)!==t.databaseId.projectId)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(Pm(n))}function Bc(t,e){return ul(t.databaseId,e)}function JS(t){const e=xm(t);return e.length===4?ve.emptyPath():Pm(e)}function jc(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pm(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Uf(t,e,n){return{name:$c(t,e),fields:n.value.mapValue.fields}}function ZS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.gt?(_e(u===void 0||typeof u=="string"),Ke.fromBase64String(u||"")):(_e(u===void 0||u instanceof Uint8Array),Ke.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:Sm(c.code);return new D(u,c.message||"")}(o);n=new Nm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ga(t,s.document.name),i=Zt(s.document.updateTime),o=new gt({mapValue:{fields:s.document.fields}}),a=qe.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Ji(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ga(t,s.document),i=s.readTime?Zt(s.readTime):ee.min(),o=qe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ji([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ga(t,s.document),i=s.removedTargetIds||[];n=new Ji([],i,r,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new BS(r),o=s.targetId;n=new Dm(o,i)}}return n}function eA(t,e){let n;if(e instanceof vi)n={update:Uf(t,e.key,e.value)};else if(e instanceof Tm)n={delete:$c(t,e.key)};else if(e instanceof ls)n={update:Uf(t,e.key,e.data),updateMask:lA(e.fieldMask)};else{if(!(e instanceof $S))return G();n={verify:$c(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Co)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Jr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ko)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:XS(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G()}(t,e.precondition)),n}function tA(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Zt(s.updateTime):Zt(r);return i.isEqual(ee.min())&&(i=Zt(r)),new US(i,s.transformResults||[])}(n,e))):[]}function nA(t,e){return{documents:[Bc(t,e.path)]}}function sA(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Bc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Bc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(Sf(h.value))return{unaryFilter:{field:ys(h.field),op:"IS_NAN"}};if(Tf(h.value))return{unaryFilter:{field:ys(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Sf(h.value))return{unaryFilter:{field:ys(h.field),op:"IS_NOT_NAN"}};if(Tf(h.value))return{unaryFilter:{field:ys(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(h.field),op:aA(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ys(l.field),direction:oA(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.gt||da(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function rA(t){let e=JS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){_e(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Mm(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new ks(Es(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,da(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new js(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new js(f,h)}(n.endAt)),DS(e,r,o,i,a,"F",c,u)}function iA(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mm(t){return t?t.unaryFilter!==void 0?[uA(t)]:t.fieldFilter!==void 0?[cA(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Mm(e)).reduce((e,n)=>e.concat(n)):G():[]}function oA(t){return GS[t]}function aA(t){return QS[t]}function ys(t){return{fieldPath:t.canonicalString()}}function Es(t){return Qe.fromServerFormat(t.fieldPath)}function cA(t){return nt.create(Es(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function uA(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Es(t.unaryFilter.field);return nt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Es(t.unaryFilter.field);return nt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Es(t.unaryFilter.field);return nt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Es(t.unaryFilter.field);return nt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function lA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Lm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class hA{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&FS(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Cr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Cr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=km();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=bm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Vs(this.mutations,e.mutations,(n,s)=>Nf(n,s))&&Vs(this.baseMutations,e.baseMutations,(n,s)=>Nf(n,s))}}class ll{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){_e(e.mutations.length===s.length);let r=HS;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ll(e,n,s,r)}}/**
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
 */class fA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Jn{constructor(e,n,s,r,i=ee.min(),o=ee.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class dA{constructor(e){this.re=e}}function pA(t){const e=rA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ao(e,e.limit,"L"):e}/**
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
 */class gA{constructor(){this.Ye=new mA}addToCollectionParentIndex(e,n){return this.Ye.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Rn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Rn.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class mA{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new xe(ve.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new xe(ve.comparator)).toArray()}}/**
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
 */class Hs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Hs(0)}static vn(){return new Hs(-1)}}/**
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
 */class yA{constructor(){this.changes=new rr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class vA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class _A{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Cr(s.mutation,r,Ut.empty(),Oe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=se()){const r=Wn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=mr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Wn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,se()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=on();const o=kr(),a=kr();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof ls)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Cr(l.mutation,u,l.mutation.getFieldMask(),Oe.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new vA(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=kr();let r=new Pe((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Ut.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||se()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=km();l.forEach(f=>{if(!i.has(f)){const g=bm(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return F.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):al(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):A.resolve(Wn());let a=-1,c=i;return o.next(u=>A.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?A.resolve():this.getBaseDocument(e,l,h).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,se())).next(l=>({batchId:a,changes:Cm(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(s=>{let r=mr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=mr();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(u,l){return new us(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,qe.newInvalidDocument(u)))});let o=mr();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Cr(u.mutation,c,Ut.empty(),Oe.now()),cl(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):A.resolve(qe.newInvalidDocument(n))}}/**
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
 */class wA{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return A.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Zt(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:pA(s.bundledQuery),readTime:Zt(s.readTime)}}(n)),A.resolve()}}/**
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
 */class EA{constructor(){this.overlays=new Pe(F.comparator),this.es=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Wn();return A.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=Wn(),i=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Pe((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Wn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Wn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return A.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new fA(n,s));let i=this.es.get(n);i===void 0&&(i=se(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class hl{constructor(){this.ns=new xe(Ue.ss),this.rs=new xe(Ue.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ue(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ue(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new F(new ve([])),s=new Ue(n,e),r=new Ue(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new F(new ve([])),s=new Ue(n,e),r=new Ue(n,e+1);let i=se();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ue(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ue{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return F.comparator(e.key,n.key)||ue(e._s,n._s)}static os(e,n){return ue(e._s,n._s)||F.comparator(e.key,n.key)}}/**
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
 */class bA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new xe(Ue.ss)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hA(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Ue(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ue(n,0),r=new Ue(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new xe(ue);return n.forEach(r=>{const i=new Ue(r,0),o=new Ue(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),A.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;F.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new F(i),0);let a=new xe(ue);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),A.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){_e(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return A.forEach(n.mutations,r=>{const i=new Ue(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ue(n,0),r=this.gs.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class IA{constructor(e){this.Es=e,this.docs=new Pe(F.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():qe.newInvalidDocument(n))}getEntries(e,n){let s=on();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():qe.newInvalidDocument(r))}),A.resolve(s)}getAllFromCollection(e,n,s){let r=on();const i=new F(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||dS(fS(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return A.resolve(r)}getAllFromCollectionGroup(e,n,s,r){G()}As(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new TA(this)}getSize(e){return A.resolve(this.size)}}class TA extends yA{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class SA{constructor(e){this.persistence=e,this.Rs=new rr(n=>nl(n),sl),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.bs=0,this.Ps=new hl,this.targetCount=0,this.vs=Hs.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),A.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Hs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Dn(n),A.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.Ps.containsKey(n))}}/**
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
 */class AA{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Zu(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new SA(this),this.indexManager=new gA,this.remoteDocumentCache=function(s){return new IA(s)}(s=>this.referenceDelegate.xs(s)),this.It=new dA(n),this.Ns=new wA(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new EA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new bA(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new CA(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return A.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class CA extends gS{constructor(e){super(),this.currentSequenceNumber=e}}class fl{constructor(e){this.persistence=e,this.Fs=new hl,this.$s=null}static Bs(e){return new fl(e)}get Ls(){if(this.$s)return this.$s;throw G()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),A.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ls,s=>{const r=F.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,ee.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return A.or([()=>A.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class dl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=se(),r=se();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new dl(e,n.fromCache,s,r)}}/**
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
 */class kA{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Rf(n))return A.resolve(null);let s=rn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Ao(n,null,"F"),s=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=se(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Ao(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return Rf(n)||r.isEqual(ee.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(wf()<=ce.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Vc(n)),this.Bi(e,o,n,hS(r,-1)))})}Fi(e,n){let s=new xe(gm(e));return n.forEach((r,i)=>{cl(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return wf()<=ce.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Vc(n)),this.Ni.getDocumentsMatchingQuery(e,n,Rn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class RA{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new Pe(ue),this.qi=new rr(i=>nl(i),sl),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _A(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function DA(t,e,n,s){return new RA(t,e,n,s)}async function Um(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=se();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function NA(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=A.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(m=>{const b=c.docVersions.get(g);_e(b!==null),m.version.compareTo(b)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Fm(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function OA(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ke.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(m,b,E){return m.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,g,l)&&a.push(n.Cs.updateTargetData(i,g))});let c=on(),u=se();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(xA(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(ee.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ui=r,i))}function xA(t,e,n){let s=se(),r=se();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=on();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function PA(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function MA(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,A.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Jn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function qc(t,e,n){const s=Q(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!yi(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Ff(t,e,n){const s=Q(t);let r=ee.min(),i=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Q(a),h=l.qi.get(u);return h!==void 0?A.resolve(l.Ui.get(h)):l.Cs.getTargetData(c,u)}(s,o,rn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:ee.min(),n?i:se())).next(a=>(LA(s,NS(e),a),{documents:a,Hi:i})))}function LA(t,e,n){let s=t.Ki.get(e)||ee.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Vf{constructor(){this.activeTargetIds=Rm()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UA{constructor(){this.Lr=new Vf,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Vf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FA{qr(e){}shutdown(){}}/**
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
 */class $f{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const VA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class $A{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class BA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);U("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(U("RestConnection","Received: ",c),c),c=>{throw Mc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+nr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=VA[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new tS;a.listenOnce(JT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Wa.NO_ERROR:const u=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Wa.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new D(_.DEADLINE_EXCEEDED,"Request time out"));break;case Wa.HTTP_ERROR:const l=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(m)>=0?m:_.UNKNOWN}(h.status);o(new D(f,h.message))}else o(new D(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new D(_.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=YT(),o=XT(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new eS({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");U("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new $A({Hr:m=>{h?U("Connection","Not sending because WebChannel is closed:",m):(l||(U("Connection","Opening WebChannel transport."),u.open(),l=!0),U("Connection","WebChannel sending:",m),u.send(m))},Jr:()=>u.close()}),g=(m,b,E)=>{m.listen(b,T=>{try{E(T)}catch(O){setTimeout(()=>{throw O},0)}})};return g(u,xi.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),g(u,xi.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),f.io())}),g(u,xi.EventType.ERROR,m=>{h||(h=!0,Mc("Connection","WebChannel transport errored:",m),f.io(new D(_.UNAVAILABLE,"The operation could not be completed")))}),g(u,xi.EventType.MESSAGE,m=>{var b;if(!h){const E=m.data[0];_e(!!E);const T=E,O=T.error||((b=T[0])===null||b===void 0?void 0:b.error);if(O){U("Connection","WebChannel received error:",O);const $=O.status;let B=function(le){const X=Ce[le];if(X!==void 0)return Sm(X)}($),te=O.message;B===void 0&&(B=_.INTERNAL,te="Unknown error status: "+$+" with message "+O.message),h=!0,f.io(new D(B,te)),u.close()}else U("Connection","WebChannel received:",E),f.ro(E)}}),g(o,ZT.STAT_EVENT,m=>{m.stat===vf.PROXY?U("Connection","Detected buffering proxy"):m.stat===vf.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Qa(){return typeof document<"u"?document:null}/**
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
 */function va(t){return new YS(t,!0)}class Vm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class $m{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Vm(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(sn(n.toString()),sn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Do===n&&this.Qo(s,r)},s=>{e(()=>{const r=new D(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(r)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.jo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jA extends $m{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=ZS(this.It,e),s=function(r){if(!("targetChange"in r))return ee.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ee.min():i.readTime?Zt(i.readTime):ee.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=jc(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=Fc(a)?{documents:nA(r,a)}:{query:sA(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Om(r,i.resumeToken):i.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=Ro(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=iA(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=jc(this.It),n.removeTarget=e,this.Lo(n)}}class qA extends $m{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=tA(e.writeResults,e.commitTime),s=Zt(e.commitTime);return this.listener.tu(s,n)}return _e(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=jc(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>eA(this.It,s))};this.Lo(n)}}/**
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
 */class HA extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=r,this.su=!1}iu(){if(this.su)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new D(_.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.So._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(_.UNKNOWN,i.toString())})}terminate(){this.su=!0}}class KA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(sn(n),this.uu=!1):U("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class zA{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.qr(o=>{s.enqueueAndForget(async()=>{hs(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c.wu.add(4),await wi(c),c.yu.set("Unknown"),c.wu.delete(4),await _a(c)}(this))})}),this.yu=new KA(s,r)}}async function _a(t){if(hs(t))for(const e of t.mu)await e(!0)}async function wi(t){for(const e of t.mu)await e(!1)}function Bm(t,e){const n=Q(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),ml(n)?gl(n):ir(n).Oo()&&pl(n,e))}function jm(t,e){const n=Q(t),s=ir(n);n._u.delete(e),s.Oo()&&qm(n,e),n._u.size===0&&(s.Oo()?s.$o():hs(n)&&n.yu.set("Unknown"))}function pl(t,e){t.pu.Mt(e.targetId),ir(t).Ho(e)}function qm(t,e){t.pu.Mt(e),ir(t).Jo(e)}function gl(t){t.pu=new WS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),ir(t).start(),t.yu.cu()}function ml(t){return hs(t)&&!ir(t).ko()&&t._u.size>0}function hs(t){return Q(t).wu.size===0}function Hm(t){t.pu=void 0}async function WA(t){t._u.forEach((e,n)=>{pl(t,e)})}async function GA(t,e){Hm(t),ml(t)?(t.yu.lu(e),gl(t)):t.yu.set("Unknown")}async function QA(t,e,n){if(t.yu.set("Online"),e instanceof Nm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Do(t,s)}else if(e instanceof Ji?t.pu.Gt(e):e instanceof Dm?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(ee.min()))try{const s=await Fm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.pu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r._u.get(c);u&&r._u.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r._u.get(a);if(!c)return;r._u.set(a,c.withResumeToken(Ke.EMPTY_BYTE_STRING,c.snapshotVersion)),qm(r,a);const u=new Jn(c.target,a,1,c.sequenceNumber);pl(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await Do(t,s)}}async function Do(t,e,n){if(!yi(e))throw e;t.wu.add(1),await wi(t),t.yu.set("Offline"),n||(n=()=>Fm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await _a(t)})}function Km(t,e){return e().catch(n=>Do(t,n,e))}async function wa(t){const e=Q(t),n=Nn(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;YA(e);)try{const r=await PA(e.localStore,s);if(r===null){e.du.length===0&&n.$o();break}s=r.batchId,XA(e,r)}catch(r){await Do(e,r)}zm(e)&&Wm(e)}function YA(t){return hs(t)&&t.du.length<10}function XA(t,e){t.du.push(e);const n=Nn(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function zm(t){return hs(t)&&!Nn(t).ko()&&t.du.length>0}function Wm(t){Nn(t).start()}async function JA(t){Nn(t).nu()}async function ZA(t){const e=Nn(t);for(const n of t.du)e.Zo(n.mutations)}async function eC(t,e,n){const s=t.du.shift(),r=ll.from(s,e,n);await Km(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await wa(t)}async function tC(t,e){e&&Nn(t).Xo&&await async function(n,s){if(r=s.code,jS(r)&&r!==_.ABORTED){const i=n.du.shift();Nn(n).Fo(),await Km(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await wa(n)}var r}(t,e),zm(t)&&Wm(t)}async function Bf(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=hs(n);n.wu.add(3),await wi(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await _a(n)}async function nC(t,e){const n=Q(t);e?(n.wu.delete(2),await _a(n)):e||(n.wu.add(2),await wi(n),n.yu.set("Unknown"))}function ir(t){return t.Iu||(t.Iu=function(e,n,s){const r=Q(e);return r.iu(),new jA(n,r.So,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:WA.bind(null,t),Zr:GA.bind(null,t),zo:QA.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),ml(t)?gl(t):t.yu.set("Unknown")):(await t.Iu.stop(),Hm(t))})),t.Iu}function Nn(t){return t.Tu||(t.Tu=function(e,n,s){const r=Q(e);return r.iu(),new qA(n,r.So,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:JA.bind(null,t),Zr:tC.bind(null,t),eu:ZA.bind(null,t),tu:eC.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await wa(t)):(await t.Tu.stop(),t.du.length>0&&(U("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class yl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new yl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vl(t,e){if(sn("AsyncQueue",`${e}: ${t}`),yi(t))return new D(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Rs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||F.comparator(n.key,s.key):(n,s)=>F.comparator(n.key,s.key),this.keyedMap=mr(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Rs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class jf{constructor(){this.Eu=new Pe(F.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):G():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ks{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Ks(e,n,Rs.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class sC{constructor(){this.Ru=void 0,this.listeners=[]}}class rC{constructor(){this.queries=new rr(e=>pm(e),pa),this.onlineState="Unknown",this.bu=new Set}}async function Gm(t,e){const n=Q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new sC),r)try{i.Ru=await n.onListen(s)}catch(o){const a=vl(o,`Initialization of query '${Vc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.vu(i.Ru)&&_l(n)}async function Qm(t,e){const n=Q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function iC(t,e){const n=Q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Ru=r}}s&&_l(n)}function oC(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function _l(t){t.bu.forEach(e=>{e.next()})}class Ym{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ks(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.Vu.next(e)}}/**
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
 */class Xm{constructor(e){this.key=e}}class Jm{constructor(e){this.key=e}}class aC{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.current=!1,this.Ku=se(),this.mutatedKeys=se(),this.Gu=gm(e),this.Qu=new Rs(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new jf,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const f=r.get(l),g=cl(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;f&&g?f.data.isEqual(g.data)?m!==b&&(s.track({type:3,doc:g}),E=!0):this.Hu(f,g)||(s.track({type:2,doc:g}),E=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),E=!0):f&&!g&&(s.track({type:1,doc:f}),E=!0,(c||u)&&(a=!0)),E&&(g?(o=o.add(g),i=b?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((u,l)=>function(h,f){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(h)-g(f)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Ks(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new jf,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=se(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Jm(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Xm(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=se();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ks.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class cC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class uC{constructor(e){this.key=e,this.nc=!1}}class lC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new rr(a=>pm(a),pa),this.rc=new Map,this.oc=new Set,this.uc=new Pe(F.comparator),this.cc=new Map,this.ac=new hl,this.hc={},this.lc=new Map,this.fc=Hs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function hC(t,e){const n=EC(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await MA(n.localStore,rn(e));n.isPrimaryClient&&Bm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await fC(n,e,s,a==="current")}return r}async function fC(t,e,n,s){t._c=(l,h,f)=>async function(g,m,b,E){let T=m.view.Wu(b);T.$i&&(T=await Ff(g.localStore,m.query,!1).then(({documents:B})=>m.view.Wu(B,T)));const O=E&&E.targetChanges.get(m.targetId),$=m.view.applyChanges(T,g.isPrimaryClient,O);return Hf(g,m.targetId,$.Xu),$.snapshot}(t,l,h,f);const r=await Ff(t.localStore,e,!0),i=new aC(e,r.Hi),o=i.Wu(r.documents),a=_i.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Hf(t,n,c.Xu);const u=new cC(e,n,i);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function dC(t,e){const n=Q(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!pa(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await qc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),jm(n.remoteStore,s.targetId),Hc(n,s.targetId)}).catch(mi)):(Hc(n,s.targetId),await qc(n.localStore,s.targetId,!0))}async function pC(t,e,n){const s=bC(t);try{const r=await function(i,o){const a=Q(i),c=Oe.now(),u=o.reduce((f,g)=>f.add(g.key),se());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=on(),m=se();return a.Gi.getEntries(f,u).next(b=>{g=b,g.forEach((E,T)=>{T.isValidDocument()||(m=m.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(b=>{l=b;const E=[];for(const T of o){const O=VS(T,l.get(T.key).overlayedDocument);O!=null&&E.push(new ls(T.key,O,fm(O.value.mapValue),Ft.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,E,o)}).next(b=>{h=b;const E=b.applyToLocalDocumentSet(l,m);return a.documentOverlayCache.saveOverlays(f,b.batchId,E)})}).then(()=>({batchId:h.batchId,changes:Cm(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Pe(ue)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ei(s,r.changes),await wa(s.remoteStore)}catch(r){const i=vl(r,"Failed to persist write");n.reject(i)}}async function Zm(t,e){const n=Q(t);try{const s=await OA(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(_e(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?_e(o.nc):r.removedDocuments.size>0&&(_e(o.nc),o.nc=!1))}),await Ei(n,s,e)}catch(s){await mi(s)}}function qf(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Pu(o)&&(c=!0)}),c&&_l(a)}(s.eventManager,e),r.length&&s.sc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function gC(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Pe(F.comparator);o=o.insert(i,qe.newNoDocument(i,ee.min()));const a=se().add(i),c=new ya(ee.min(),new Map,new xe(ue),o,a);await Zm(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),wl(s)}else await qc(s.localStore,e,!1).then(()=>Hc(s,e,n)).catch(mi)}async function mC(t,e){const n=Q(t),s=e.batch.batchId;try{const r=await NA(n.localStore,e);ty(n,s,null),ey(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ei(n,r)}catch(r){await mi(r)}}async function yC(t,e,n){const s=Q(t);try{const r=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(_e(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);ty(s,e,n),ey(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ei(s,r)}catch(r){await mi(r)}}function ey(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function ty(t,e,n){const s=Q(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Hc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||ny(t,s)})}function ny(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(jm(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),wl(t))}function Hf(t,e,n){for(const s of n)s instanceof Xm?(t.ac.addReference(s.key,e),vC(t,s)):s instanceof Jm?(U("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||ny(t,s.key)):G()}function vC(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.oc.add(s),wl(t))}function wl(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new F(ve.fromString(e)),s=t.fc.next();t.cc.set(s,new uC(n)),t.uc=t.uc.insert(n,s),Bm(t.remoteStore,new Jn(rn(rl(n.path)),s,2,Zu.at))}}async function Ei(t,e,n){const s=Q(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=dl.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.zo(r),await async function(a,c){const u=Q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>A.forEach(c,h=>A.forEach(h.Si,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>A.forEach(h.Di,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!yi(l))throw l;U("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Ui.get(h),g=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(g);u.Ui=u.Ui.insert(h,m)}}}(s.localStore,i))}async function _C(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await Um(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new D(_.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ei(n,s.ji)}}function wC(t,e){const n=Q(t),s=n.cc.get(e);if(s&&s.nc)return se().add(s.key);{let r=se();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function EC(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gC.bind(null,e),e.sc.zo=iC.bind(null,e.eventManager),e.sc.wc=oC.bind(null,e.eventManager),e}function bC(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yC.bind(null,e),e}class IC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=va(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return DA(this.persistence,new kA,e.initialUser,this.It)}yc(e){return new AA(fl.Bs,this.It)}gc(e){return new UA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class TC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>qf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=_C.bind(null,this.syncEngine),await nC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rC}createDatastore(e){const n=va(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new BA(r));var r;return function(i,o,a,c){return new HA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>qf(this.syncEngine,a,0),o=$f.C()?new $f:new FA,new zA(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new lC(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);U("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await wi(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */function sy(t,e,n){if(!n)throw new D(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SC(t,e,n,s){if(e===!0&&s===!0)throw new D(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kf(t){if(!F.isDocumentKey(t))throw new D(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zf(t){if(F.isDocumentKey(t))throw new D(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ea(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function On(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ea(t);throw new D(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function AC(t,e){if(e<=0)throw new D(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */const Wf=new Map;class Gf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new D(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,SC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ba{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new nS;switch(n.type){case"gapi":const s=n.client;return new oS(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Wf.get(e);n&&(U("ComponentProvider","Removing Datastore"),Wf.delete(e),n.terminate())}(this),Promise.resolve()}}function CC(t,e,n,s={}){var r;const i=(t=On(t,ba))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Mc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=We.MOCK_USER;else{o=Sp(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new D(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new We(c)}t._authCredentials=new sS(new cm(o,a))}}/**
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
 */class ct{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class Mn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Mn(this.firestore,e,this._query)}}class Sn extends Mn{constructor(e,n,s){super(e,n,rl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new F(e))}withConverter(e){return new Sn(this.firestore,e,this._path)}}function Qf(t,e,...n){if(t=Re(t),sy("collection","path",e),t instanceof ba){const s=ve.fromString(e,...n);return zf(s),new Sn(t,null,s)}{if(!(t instanceof ct||t instanceof Sn))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ve.fromString(e,...n));return zf(s),new Sn(t.firestore,null,s)}}function Kc(t,e,...n){if(t=Re(t),arguments.length===1&&(e=um.R()),sy("doc","path",e),t instanceof ba){const s=ve.fromString(e,...n);return Kf(s),new ct(t,null,new F(s))}{if(!(t instanceof ct||t instanceof Sn))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ve.fromString(e,...n));return Kf(s),new ct(t.firestore,t instanceof Sn?t.converter:null,new F(s))}}/**
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
 */class ry{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):sn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class kC{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=We.UNAUTHENTICATED,this.clientId=um.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=vl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function RC(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Um(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function DC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NC(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Bf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Bf(e.remoteStore,i)),t.onlineComponents=e}async function NC(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await RC(t,new IC)),t.offlineComponents}async function iy(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await DC(t,new TC)),t.onlineComponents}function OC(t){return iy(t).then(e=>e.syncEngine)}async function oy(t){const e=await iy(t),n=e.eventManager;return n.onListen=hC.bind(null,e.syncEngine),n.onUnlisten=dC.bind(null,e.syncEngine),n}function xC(t,e,n={}){const s=new Jt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new ry({next:h=>{i.enqueueAndForget(()=>Qm(r,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new D(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new D(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Ym(rl(o.path),u,{includeMetadataChanges:!0,ku:!0});return Gm(r,l)}(await oy(t),t.asyncQueue,e,n,s)),s.promise}function PC(t,e,n={}){const s=new Jt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new ry({next:h=>{i.enqueueAndForget(()=>Qm(r,l)),h.fromCache&&a.source==="server"?c.reject(new D(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Ym(o,u,{includeMetadataChanges:!0,ku:!0});return Gm(r,l)}(await oy(t),t.asyncQueue,e,n,s)),s.promise}class MC{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Vm(this,"async_queue_retry"),this.Wc=()=>{const n=Qa();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Qa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Qa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Jt;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!yi(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw sn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=yl.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&G()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class bi extends ba{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new MC,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ay(this),this._firestoreClient.terminate()}}function LC(t,e){const n=typeof t=="object"?t:Eu(),s=typeof t=="string"?t:e||"(default)",r=Ko(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=vu("firestore");if(i){const[o,a]=i.split(":");CC(r,o,parseInt(a,10))}}return r}function El(t){return t._firestoreClient||ay(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ay(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new yS(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new kC(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class zs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zs(Ke.fromBase64String(e))}catch(n){throw new D(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zs(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class bl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cy{constructor(e){this._methodName=e}}/**
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
 */class Il{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */const UC=/^__.*__$/;class FC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ls(e,this.data,this.fieldMask,n,this.fieldTransforms):new vi(e,this.data,n,this.fieldTransforms)}}function uy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Tl{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Tl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return No(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(uy(this.sa)&&UC.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class VC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||va(e)}da(e,n,s,r=!1){return new Tl({sa:e,methodName:n,fa:s,path:Qe.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Ia(t){const e=t._freezeSettings(),n=va(t._databaseId);return new VC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ly(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);py("Data must be an object, but it was:",o,s);const a=fy(s,o);let c,u;if(i.merge)c=new Ut(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=$C(e,h,n);if(!o.contains(f))throw new D(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);jC(l,f)||l.push(f)}c=new Ut(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new FC(new gt(a),c,u)}function hy(t,e,n,s=!1){return Sl(n,t.da(s?4:3,e))}function Sl(t,e){if(dy(t=Re(t)))return py("Unsupported field value:",e,t),fy(t,e);if(t instanceof cy)return function(n,s){if(!uy(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Sl(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Re(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xS(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Oe.fromDate(n);return{timestampValue:Ro(s.It,r)}}if(n instanceof Oe){const r=new Oe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ro(s.It,r)}}if(n instanceof Il)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof zs)return{bytesValue:Om(s.It,n._byteString)};if(n instanceof ct){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ul(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Ea(n)}`)}(t,e)}function fy(t,e){const n={};return lm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sr(t,(s,r)=>{const i=Sl(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function dy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Il||t instanceof zs||t instanceof ct||t instanceof cy)}function py(t,e,n){if(!dy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ea(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function $C(t,e,n){if((e=Re(e))instanceof bl)return e._internalPath;if(typeof e=="string")return gy(t,e);throw No("Field path arguments must be of type string or ",t,!1,void 0,n)}const BC=new RegExp("[~\\*/\\[\\]]");function gy(t,e,n){if(e.search(BC)>=0)throw No(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bl(...e.split("."))._internalPath}catch{throw No(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function No(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new D(_.INVALID_ARGUMENT,a+t+c)}function jC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Al{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ta("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qC extends Al{data(){return super.data()}}function Ta(t,e){return typeof e=="string"?gy(t,e):e instanceof bl?e._internalPath:e._delegate._internalPath}/**
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
 */function HC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sa{}function KC(t,...e){for(const n of e)t=n._apply(t);return t}class zC extends Sa{constructor(e,n,s){super(),this.ma=e,this.ga=n,this.ya=s,this.type="where"}_apply(e){const n=Ia(e.firestore),s=function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new D(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Xf(l,u);const g=[];for(const m of l)g.push(Yf(a,r,m));h={arrayValue:{values:g}}}else h=Yf(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Xf(l,u),h=hy(o,i,l,u==="in"||u==="not-in");const f=nt.create(c,u,h);return function(g,m){if(m.dt()){const E=ol(g);if(E!==null&&!E.isEqual(m.field))throw new D(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${E.toString()}' and '${m.field.toString()}'`);const T=il(g);T!==null&&my(g,m.field,T)}const b=function(E,T){for(const O of E.filters)if(T.indexOf(O.op)>=0)return O.op;return null}(g,function(E){switch(E){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(b!==null)throw b===m.op?new D(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new D(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${b.toString()}' filters.`)}(r,f),f}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new Mn(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new us(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function WC(t,e,n){const s=e,r=Ta("where",t);return new zC(r,s,n)}class GC extends Sa{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new D(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ks(r,i);return function(a,c){if(il(a)===null){const u=ol(a);u!==null&&my(a,u,c.field)}}(s,o),o}(e._query,this.ma,this.pa);return new Mn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new us(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function ZR(t,e="asc"){const n=e,s=Ta("orderBy",t);return new GC(s,n)}class QC extends Sa{constructor(e,n,s){super(),this.type=e,this.Ia=n,this.Ta=s}_apply(e){return new Mn(e.firestore,e.converter,Ao(e._query,this.Ia,this.Ta))}}function eD(t){return AC("limit",t),new QC("limit",t,"F")}class YC extends Sa{constructor(e,n,s){super(),this.type=e,this.Ea=n,this.Aa=s}_apply(e){const n=XC(e,this.type,this.Ea,this.Aa);return new Mn(e.firestore,e.converter,function(s,r){return new us(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function tD(...t){return new YC("startAfter",t,!1)}function XC(t,e,n,s){if(n[0]=Re(n[0]),n[0]instanceof Al)return function(r,i,o,a,c){if(!a)throw new D(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of qs(r))if(l.field.isKeyField())u.push(So(i,a.key));else{const h=a.data.field(l.field);if(el(h))throw new D(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=l.field.canonicalString();throw new D(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}u.push(h)}return new js(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=Ia(t.firestore);return function(i,o,a,c,u,l){const h=i.explicitOrderBy;if(u.length>h.length)throw new D(_.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let g=0;g<u.length;g++){const m=u[g];if(h[g].field.isKeyField()){if(typeof m!="string")throw new D(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!al(i)&&m.indexOf("/")!==-1)throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const b=i.path.child(ve.fromString(m));if(!F.isDocumentKey(b))throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const E=new F(b);f.push(So(o,E))}else{const b=hy(a,c,m);f.push(b)}}return new js(f,l)}(t._query,t.firestore._databaseId,r,e,n,s)}}function Yf(t,e,n){if(typeof(n=Re(n))=="string"){if(n==="")throw new D(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!al(e)&&n.indexOf("/")!==-1)throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ve.fromString(n));if(!F.isDocumentKey(s))throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return So(t,new F(s))}if(n instanceof ct)return So(t,n._key);throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ea(n)}.`)}function Xf(t,e){if(!Array.isArray(t)||t.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new D(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function my(t,e,n){if(!n.isEqual(e))throw new D(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class JC{convertValue(e,n="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const s={};return sr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Il(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=hm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Gr(e));default:return null}}convertTimestamp(e){const n=Dn(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ve.fromString(e);_e(Lm(s));const r=new Qr(s.get(1),s.get(3)),i=new F(s.popFirst(5));return r.isEqual(n)||sn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function yy(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class yr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vy extends Al{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ta("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Zi extends vy{data(e={}){return super.data(e)}}class ZC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new yr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Zi(this._firestore,this._userDataWriter,s.key,s,new yr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Zi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new yr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Zi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new yr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:ek(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ek(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function tk(t){t=On(t,ct);const e=On(t.firestore,bi);return xC(El(e),t._key).then(n=>ik(e,t,n))}class _y extends JC{constructor(e){super(),this.firestore=e}convertBytes(e){return new zs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function nk(t){t=On(t,Mn);const e=On(t.firestore,bi),n=El(e),s=new _y(e);return HC(t._query),PC(n,t._query).then(r=>new ZC(e,s,t,r))}function sk(t,e,n){t=On(t,ct);const s=On(t.firestore,bi),r=yy(t.converter,e,n);return wy(s,[ly(Ia(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Ft.none())])}function rk(t,e){const n=On(t.firestore,bi),s=Kc(t),r=yy(t.converter,e);return wy(n,[ly(Ia(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Ft.exists(!1))]).then(()=>s)}function wy(t,e){return function(n,s){const r=new Jt;return n.asyncQueue.enqueueAndForget(async()=>pC(await OC(n),s,r)),r.promise}(El(t),e)}function ik(t,e,n){const s=n.docs.get(e._key),r=new _y(t);return new vy(t,r,e._key,s,new yr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){nr=n})(Js),ss(new kn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new bi(new rS(n.getProvider("auth-internal")),new cS(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Pt(_f,"3.6.0",t),Pt(_f,"3.6.0","esm2017")})();/**
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
 */const Ey="firebasestorage.googleapis.com",by="storageBucket",ok=2*60*1e3,ak=10*60*1e3;/**
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
 */class Te extends Bt{constructor(e,n){super(Ya(e),`Firebase Storage: ${n} (${Ya(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}_codeEquals(e){return Ya(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ya(t){return"storage/"+t}function Cl(){const t="An unknown error occurred, please check the error payload for server response.";return new Te("unknown",t)}function ck(t){return new Te("object-not-found","Object '"+t+"' does not exist.")}function uk(t){return new Te("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function lk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te("unauthenticated",t)}function hk(){return new Te("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function fk(t){return new Te("unauthorized","User does not have permission to access '"+t+"'.")}function dk(){return new Te("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function pk(){return new Te("canceled","User canceled the upload/download.")}function gk(t){return new Te("invalid-url","Invalid URL '"+t+"'.")}function mk(t){return new Te("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function yk(){return new Te("no-default-bucket","No default bucket found. Did you set the '"+by+"' property when initializing the app?")}function vk(){return new Te("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function _k(){return new Te("no-download-url","The given file does not have any download URLs.")}function zc(t){return new Te("invalid-argument",t)}function Iy(){return new Te("app-deleted","The Firebase app was deleted.")}function wk(t){return new Te("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Rr(t,e){return new Te("invalid-format","String does not match format '"+t+"': "+e)}function lr(t){throw new Te("internal-error","Internal error: "+t)}/**
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
 */class ht{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ht.makeFromUrl(e,n)}catch{return new ht(e,"")}if(s.path==="")return s;throw mk(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(B){B.path_=decodeURIComponent(B.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},b=n===Ey?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",T=new RegExp(`^https?://${b}/${r}/${E}`,"i"),$=[{regex:a,indices:c,postModify:i},{regex:g,indices:m,postModify:u},{regex:T,indices:{bucket:1,path:2},postModify:u}];for(let B=0;B<$.length;B++){const te=$[B],le=te.regex.exec(e);if(le){const X=le[te.indices.bucket];let J=le[te.indices.path];J||(J=""),s=new ht(X,J),te.postModify(s);break}}if(s==null)throw gk(e);return s}}class Ek{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function bk(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...E){u||(u=!0,e.apply(null,E))}function h(E){r=setTimeout(()=>{r=null,t(g,c())},E)}function f(){i&&clearTimeout(i)}function g(E,...T){if(u){f();return}if(E){f(),l.call(null,E,...T);return}if(c()||o){f(),l.call(null,E,...T);return}s<64&&(s*=2);let $;a===1?(a=2,$=0):$=(s+Math.random())*1e3,h($)}let m=!1;function b(E){m||(m=!0,f(),!u&&(r!==null?(E||(a=2),clearTimeout(r),h(0)):E||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function Ik(t){t(!1)}/**
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
 */function Tk(t){return t!==void 0}function Sk(t){return typeof t=="object"&&!Array.isArray(t)}function kl(t){return typeof t=="string"||t instanceof String}function Jf(t){return Rl()&&t instanceof Blob}function Rl(){return typeof Blob<"u"}function Zf(t,e,n,s){if(s<e)throw zc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw zc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Dl(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Ty(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var Zn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Zn||(Zn={}));/**
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
 */class Ak{constructor(e,n,s,r,i,o,a,c,u,l,h){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Li(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Zn.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const l=i.getErrorCode()===Zn.ABORT;s(!1,new Li(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Li(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Tk(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Cl();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Iy():pk();o(c)}else{const c=dk();o(c)}};this.canceled_?n(!1,new Li(!1,null,!0)):this.backoffId_=bk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ik(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||i}}class Li{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Ck(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function kk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Rk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Dk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Nk(t,e,n,s,r,i){const o=Ty(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return Rk(c,e),Ck(c,n),kk(c,i),Dk(c,s),new Ak(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
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
 */function Ok(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function xk(...t){const e=Ok();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Rl())return new Blob(t);throw new Te("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Pk(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Mk(t){return atob(t)}/**
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
 */const xt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xa{constructor(e,n){this.data=e,this.contentType=n||null}}function Lk(t,e){switch(t){case xt.RAW:return new Xa(Sy(e));case xt.BASE64:case xt.BASE64URL:return new Xa(Ay(t,e));case xt.DATA_URL:return new Xa(Fk(e),Vk(e))}throw Cl()}function Sy(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Uk(t){let e;try{e=decodeURIComponent(t)}catch{throw Rr(xt.DATA_URL,"Malformed data URL.")}return Sy(e)}function Ay(t,e){switch(t){case xt.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Rr(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case xt.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Rr(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Mk(e)}catch{throw Rr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Cy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Rr(xt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=$k(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Fk(t){const e=new Cy(t);return e.base64?Ay(xt.BASE64,e.rest):Uk(e.rest)}function Vk(t){return new Cy(t).contentType}function $k(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class _n{constructor(e,n){let s=0,r="";Jf(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Jf(this.data_)){const s=this.data_,r=Pk(s,e,n);return r===null?null:new _n(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new _n(s,!0)}}static getBlob(...e){if(Rl()){const n=e.map(s=>s instanceof _n?s.data_:s);return new _n(xk.apply(null,n))}else{const n=e.map(o=>kl(o)?Lk(xt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new _n(r,!0)}}uploadData(){return this.data_}}/**
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
 */function ky(t){let e;try{e=JSON.parse(t)}catch{return null}return Sk(e)?e:null}/**
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
 */function Bk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function jk(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Ry(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function qk(t,e){return e}class Ze{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||qk}}let Ui=null;function Hk(t){return!kl(t)||t.length<2?t:Ry(t)}function Dy(){if(Ui)return Ui;const t=[];t.push(new Ze("bucket")),t.push(new Ze("generation")),t.push(new Ze("metageneration")),t.push(new Ze("name","fullPath",!0));function e(i,o){return Hk(o)}const n=new Ze("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Ze("size");return r.xform=s,t.push(r),t.push(new Ze("timeCreated")),t.push(new Ze("updated")),t.push(new Ze("md5Hash",null,!0)),t.push(new Ze("cacheControl",null,!0)),t.push(new Ze("contentDisposition",null,!0)),t.push(new Ze("contentEncoding",null,!0)),t.push(new Ze("contentLanguage",null,!0)),t.push(new Ze("contentType",null,!0)),t.push(new Ze("metadata","customMetadata",!0)),Ui=t,Ui}function Kk(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new ht(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function zk(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return Kk(s,t),s}function Ny(t,e,n){const s=ky(e);return s===null?null:zk(t,s,n)}function Wk(t,e,n,s){const r=ky(e);if(r===null||!kl(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,f="/b/"+o(l)+"/o/"+o(h),g=Dl(f,n,s),m=Ty({alt:"media",token:u});return g+m})[0]}function Gk(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Oy{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function xy(t){if(!t)throw Cl()}function Qk(t,e){function n(s,r){const i=Ny(t,r,e);return xy(i!==null),i}return n}function Yk(t,e){function n(s,r){const i=Ny(t,r,e);return xy(i!==null),Wk(i,r,t.host,t._protocol)}return n}function Py(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=hk():r=lk():n.getStatus()===402?r=uk(t.bucket):n.getStatus()===403?r=fk(t.path):r=s,r.serverResponse=s.serverResponse,r}return e}function Xk(t){const e=Py(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=ck(t.path)),i.serverResponse=r.serverResponse,i}return n}function Jk(t,e,n){const s=e.fullServerUrl(),r=Dl(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Oy(r,i,Yk(t,n),o);return a.errorHandler=Xk(e),a}function Zk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function eR(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Zk(null,e)),s}function tR(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let $="";for(let B=0;B<2;B++)$=$+Math.random().toString().slice(2);return $}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=eR(e,s,r),l=Gk(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+c+"--",g=_n.getBlob(h,s,f);if(g===null)throw vk();const m={name:u.fullPath},b=Dl(i,t.host,t._protocol),E="POST",T=t.maxUploadRetryTime,O=new Oy(b,E,Qk(t,n),T);return O.urlParams=m,O.headers=o,O.body=g.uploadData(),O.errorHandler=Py(e),O}class nR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Zn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Zn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Zn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw lr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw lr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw lr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw lr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw lr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class sR extends nR{initXhr(){this.xhr_.responseType="text"}}function My(){return new sR}/**
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
 */class as{constructor(e,n){this._service=e,n instanceof ht?this._location=n:this._location=ht.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new as(e,n)}get root(){const e=new ht(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ry(this._location.path)}get storage(){return this._service}get parent(){const e=Bk(this._location.path);if(e===null)return null;const n=new ht(this._location.bucket,e);return new as(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw wk(e)}}function rR(t,e,n){t._throwIfRoot("uploadBytes");const s=tR(t.storage,t._location,Dy(),new _n(e,!0),n);return t.storage.makeRequestWithTokens(s,My).then(r=>({metadata:r,ref:t}))}function iR(t){t._throwIfRoot("getDownloadURL");const e=Jk(t.storage,t._location,Dy());return t.storage.makeRequestWithTokens(e,My).then(n=>{if(n===null)throw _k();return n})}function oR(t,e){const n=jk(t._location.path,e),s=new ht(t._location.bucket,n);return new as(t.storage,s)}/**
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
 */function aR(t){return/^[A-Za-z]+:\/\//.test(t)}function cR(t,e){return new as(t,e)}function Ly(t,e){if(t instanceof Nl){const n=t;if(n._bucket==null)throw yk();const s=new as(n,n._bucket);return e!=null?Ly(s,e):s}else return e!==void 0?oR(t,e):t}function uR(t,e){if(e&&aR(e)){if(t instanceof Nl)return cR(t,e);throw zc("To use ref(service, url), the first argument must be a Storage instance.")}else return Ly(t,e)}function ed(t,e){const n=e==null?void 0:e[by];return n==null?null:ht.makeFromBucketSpec(n,t)}function lR(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Sp(r,t.app.options.projectId))}class Nl{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Ey,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ok,this._maxUploadRetryTime=ak,this._requests=new Set,r!=null?this._bucket=ht.makeFromBucketSpec(r,this._host):this._bucket=ed(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ht.makeFromBucketSpec(this._url,e):this._bucket=ed(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new as(this,e)}_makeRequest(e,n,s,r){if(this._deleted)return new Ek(Iy());{const i=Nk(e,this._appId,s,r,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const td="@firebase/storage",nd="0.9.10";/**
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
 */const Uy="storage";function hR(t,e,n){return t=Re(t),rR(t,e,n)}function fR(t){return t=Re(t),iR(t)}function dR(t,e){return t=Re(t),uR(t,e)}function pR(t=Eu(),e){t=Re(t);const s=Ko(t,Uy).getImmediate({identifier:e}),r=vu("storage");if(r){const[i,o]=r.split(":");gR(s,i,parseInt(o,10))}return s}function gR(t,e,n,s={}){lR(t,e,n,s)}function mR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Nl(n,s,r,e,Js)}function yR(){ss(new kn(Uy,mR,"PUBLIC").setMultipleInstances(!0)),Pt(td,nd,""),Pt(td,nd,"esm2017")}yR();const vR={apiKey:"AIzaSyAV70FDvkl21wU4cY39vteIAkH07QXTl_E",authDomain:"gradff-ufrj.firebaseapp.com",projectId:"gradff-ufrj",storageBucket:"gradff-ufrj.appspot.com",messagingSenderId:"1075279723938",appId:"1:1075279723938:web:7764541c3a7673634b46fb",measurementId:"G-L4JNQ4VX2"},Ol=kp(vR),Fi=Z0(Ol),Vi=LC(Ol),_R=pR(Ol),Wc={getUserState:()=>new Promise((t,e)=>{Qh(Fi,t,e)}),useAuthState:()=>{const t=Xt(null),e=Xt(null);let n;$d(async()=>{n=Qh(Fi,r=>t.value=r,r=>t.value=r)}),Vo(()=>n());const s=at(()=>t.value!=null);return{user:t,error:e,loggedIn:s}},loginWithEmailAndPassword:async(t,e)=>LI(Fi,t,e),logoutUser:async()=>VI(Fi)},$i="users",wR={create:t=>rk(Qf(Vi,$i),t).then(e=>e.id),update:(t,e)=>sk(Kc(Vi,$i,e),t).then(()=>e),find:t=>tk(Kc(Vi,$i,t)).then(e=>e.exists()?e.data():null),get:(t,e,n="==")=>nk(KC(Qf(Vi,$i),WC(t,n,e))).then(s=>s.docs.map(r=>({id:r.id,...r.data()}))),upload:async(t,e)=>{let n=dR(_R,`files/${e}`),s=await hR(n,t);return await fR(s.ref)}},ER={class:"navbar bg-base-100"},bR={class:"navbar-start"},IR={key:0,class:"dropdown"},TR=ge("label",{tabindex:"0",class:"btn btn-ghost btn-circle"},[ge("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[ge("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h7"})])],-1),SR={tabindex:"0",class:"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"},AR=ge("li",null,[ge("a",null,"Settings")],-1),CR={class:"navbar-center"},kR={class:"navbar-end"},RR=ge("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[ge("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"})],-1),DR={key:0,class:"indicator"},NR=ge("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[ge("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"})],-1),OR=[NR],xR={__name:"Navbar",setup(t){const e=wp(),{loggedIn:n}=Wc.useAuthState(),s=Xt(!1),r=async()=>{s.value=!0;try{await Wc.logoutUser(),e.replace({name:"home"})}catch(i){console.log(i)}finally{s.value=!1}};return(i,o)=>{const a=lu("RouterLink");return Kt(),Hn("div",ER,[ge("div",bR,[En(n)?(Kt(),Hn("div",IR,[TR,ge("ul",SR,[AR,ge("li",null,[Ve(a,{to:{name:"admin"}},{default:vr(()=>[oo("Admin")]),_:1})])])])):uc("",!0)]),ge("div",CR,[Ve(a,{to:{name:"home"},class:"btn btn-ghost normal-case text-xl"},{default:vr(()=>[oo("Farm\xE1cia UFRJ")]),_:1})]),ge("div",kR,[En(n)?(Kt(),Hn("button",{key:1,class:Zr(["btn btn-ghost btn-circle",s.value&&"loading"]),onClick:r},[s.value?uc("",!0):(Kt(),Hn("div",DR,OR))],2)):(Kt(),Xd(a,{key:0,to:{name:"login"},class:"btn btn-ghost btn-circle"},{default:vr(()=>[RR]),_:1}))])])}}},PR={class:"min-h-screen bg-base-200"},MR={class:"hero mt-12"},LR={class:"hero-content text-center"},UR={class:"max-w-md"},FR=ge("h1",{class:"text-2xl font-bold mb-8"}," Regulariza\xE7\xE3o de inscri\xE7\xE3o em disciplina 2022-2 ",-1),VR=ge("div",{class:"divider"},"OU",-1),$R=ge("p",null," Infome no campo abaixo o c\xF3digo de acesso que recebeu quando preencheu o requerimento. ",-1),BR=["onSubmit"],jR={class:"form-control mt-4"},qR={class:"flex items-center space-x-2"},HR={key:0,class:"text-error py-2"},KR={__name:"HomeView",setup(t){const e=wp(),n=Xt(""),s=Xt(!1),r=Xt(null),i=async()=>{r.value=null,s.value=!0;try{const o=await wR.get("code",n.value);o.length?e.push({name:"update",params:{id:o[0].id}}):r.value="N\xE3o foi poss\xEDvel localizar o registro com o c\xF3digo informado."}catch{console.log("error")}finally{s.value=!1}};return(o,a)=>{const c=lu("RouterLink");return Kt(),Hn("div",PR,[Ve(xR),ge("div",MR,[ge("div",LR,[ge("div",UR,[FR,Ve(c,{to:{name:"create"},class:"btn btn-primary mb-4"},{default:vr(()=>[oo(" Solicitar Regulariza\xE7\xE3o ")]),_:1}),VR,$R,ge("form",{onSubmit:rw(i,["prevent"])},[ge("div",jR,[ge("div",qR,[n_(ge("input",{type:"search",placeholder:"Informe o c\xF3digo",class:"input input-bordered w-full",required:"","onUpdate:modelValue":a[0]||(a[0]=u=>n.value=u)},null,512),[[tw,n.value]]),ge("button",{type:"submit",class:Zr(["btn btn-primary btn-outline",s.value&&"loading"])}," Pesquisar ",2)])])],40,BR),r.value?(Kt(),Hn("p",HR,Ky(r.value),1)):uc("",!0)])])])])}}},Fy=bE({history:Fw("/"),routes:[{path:"/",name:"home",component:KR,meta:{title:"Home"}},{path:"/requerimento",name:"create",component:()=>gs(()=>import("./FormView.3e4dcde1.js"),["assets/FormView.3e4dcde1.js","assets/settings.bb30ec37.js"]),meta:{title:"Requerimento"}},{path:"/requerimento/:id",name:"update",component:()=>gs(()=>import("./FormView.3e4dcde1.js"),["assets/FormView.3e4dcde1.js","assets/settings.bb30ec37.js"]),meta:{title:"Requerimento"}},{path:"/success/:id",name:"success",component:()=>gs(()=>import("./SuccessView.0749055b.js"),[]),meta:{title:"Success"}},{path:"/admin",name:"admin",component:()=>gs(()=>import("./AdminView.ee9df8e0.js"),["assets/AdminView.ee9df8e0.js","assets/settings.bb30ec37.js"]),meta:{requiresAuth:!0,title:"Admin"}},{path:"/admin/:id",name:"manager",component:()=>gs(()=>import("./ManagerView.cfacf8c9.js"),["assets/ManagerView.cfacf8c9.js","assets/settings.bb30ec37.js"]),meta:{requiresAuth:!0,title:"Manager"}},{path:"/login",name:"login",component:()=>gs(()=>import("./LoginView.9020dba1.js"),[]),meta:{requiresUnauth:!0,title:"Login"}}]});Fy.beforeEach(async(t,e,n)=>{document.title=`${t.meta.title} | Farm\xE1cia UFRJ`;const s=t.matched.some(o=>o.meta.requiresAuth),r=t.matched.some(o=>o.meta.requiresUnauth),i=await Wc.getUserState();s&&!i?n({name:"login"}):r&&i?n({name:"admin"}):n()});const xl=aw(vw);xl.use(uw());xl.use(Fy);xl.mount("#app");export{WC as $,Xs as A,eD as B,Qf as C,nk as D,tD as E,Ht as F,En as G,XR as H,Ie as I,GR as J,Wc as K,ZR as L,KC as M,xR as _,JR as a,wR as b,lu as c,Kt as d,Hn as e,ge as f,Ve as g,uc as h,n_ as i,tw as j,zR as k,WR as l,rw as m,Zr as n,$d as o,oo as p,tk as q,Xt as r,Kc as s,Ky as t,wp as u,QR as v,vr as w,Vi as x,at as y,YR as z};
